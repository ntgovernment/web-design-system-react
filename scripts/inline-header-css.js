#!/usr/bin/env node
/**
 * scripts/inline-header-css.js
 *
 * Builds a self-contained Header CSS block (Header + Header-ntg + SearchBar
 * subset + minimal Bootstrap) with every CSS custom property resolved to
 * its literal value, and injects it between
 *   /* INLINE_HEADER_CSS_START *\/   and   /* INLINE_HEADER_CSS_END *\/
 * markers in:
 *   - src/components/Header/dxp/preview.html
 *   - src/components/Header/dxp/previews/wrapper.html (header-only block,
 *     in addition to the existing INLINE_THEME_CSS markers)
 *
 * Prerequisites:
 *   npm install                 (to resolve bootstrap from node_modules)
 *   npm run build               (to produce dist/theme-ntg.min.css)
 */
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

const themeCss = readFileSync(join(root, "dist/theme-ntg.min.css"), "utf8");
const headerCss = readFileSync(
  join(root, "src/components/Header/Header.css"),
  "utf8",
);
const headerNtgCss = readFileSync(
  join(root, "src/components/Header/Header-ntg.css"),
  "utf8",
);
const searchBarCss = readFileSync(
  join(root, "src/components/SearchBar/SearchBar.css"),
  "utf8",
);

const bootstrapPath = join(
  root,
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
);
const bootstrapCss = existsSync(bootstrapPath)
  ? readFileSync(bootstrapPath, "utf8")
  : "";

// 1. Build a token map from every `--name: value` declaration in the theme.
const tokenMap = {};
for (const m of themeCss.matchAll(/--([a-z0-9-]+)\s*:\s*([^;}]+)/gi)) {
  tokenMap[m[1].trim()] = m[2].trim();
}

// 2. Recursively resolve `var(--x[, fallback])` until no var() remains.
function resolve(value, depth = 0) {
  if (depth > 25) return value;
  return value.replace(
    /var\(\s*--([a-z0-9-]+)\s*(?:,\s*([^)]+))?\)/gi,
    (_, name, fallback) => {
      const raw = tokenMap[name] ?? fallback ?? "initial";
      return resolve(raw, depth + 1);
    },
  );
}

// 3. Apply resolution to every property value in a CSS source string.
function resolveAll(css) {
  return css.replace(/(:[^;{}]+)(?=[;}])/g, (m) => resolve(m));
}

// 4. Subset Bootstrap to only rules referenced by header markup.
function subsetBootstrap(css) {
  if (!css) return "";
  const KEEP =
    /(^|[\s,>+~])(\.(navbar|container|container-fluid|input-group|input-group-text|form-control|btn|btn-[a-z-]+|visually-hidden|sr-only|d-none|d-block|d-flex|fa|fas|far|fab|nav|nav-link|nav-item|collapse|show|fade|active)|html|body|button|input|a|::?before|::?after|\*)/;
  const out = [];
  let depth = 0;
  let start = 0;
  let inAt = false;
  let atBuf = "";
  for (let i = 0; i < css.length; i++) {
    const c = css[i];
    if (c === "{") depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        const rule = css.slice(start, i + 1);
        const head = rule.split("{")[0].trim();
        if (/^@(media|supports)/.test(head) || KEEP.test(head)) {
          out.push(rule);
        }
        start = i + 1;
      }
    }
  }
  return out.join("\n");
}

const HEADER_BLOCK =
  "/* --- Bootstrap 5.3 (subset for Header) --- */\n" +
  subsetBootstrap(bootstrapCss) +
  "\n/* --- Header.css (vars resolved) --- */\n" +
  resolveAll(headerCss) +
  "\n/* --- Header-ntg.css (vars resolved) --- */\n" +
  resolveAll(headerNtgCss) +
  "\n/* --- SearchBar.css (vars resolved) --- */\n" +
  resolveAll(searchBarCss);

const START = "/* INLINE_HEADER_CSS_START */";
const END = "/* INLINE_HEADER_CSS_END */";

function injectInto(file) {
  if (!existsSync(file)) {
    console.warn(`! Skipping (not found): ${file}`);
    return;
  }
  let html = readFileSync(file, "utf8");
  const s = html.indexOf(START);
  const e = html.indexOf(END);
  if (s === -1 || e === -1) {
    console.warn(`! No INLINE_HEADER_CSS markers in ${file} — skipping`);
    return;
  }
  html =
    html.slice(0, s + START.length) +
    "\n" +
    HEADER_BLOCK +
    "\n" +
    html.slice(e);
  writeFileSync(file, html);
  console.log(`✓ Inlined header CSS into ${file}`);
}

injectInto(join(root, "src/components/Header/dxp/preview.html"));
injectInto(join(root, "src/components/Header/dxp/previews/wrapper.html"));
