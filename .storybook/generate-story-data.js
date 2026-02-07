/**
 * Generate static story data registry for HTML API
 * This script extracts story definitions and their args from .stories.tsx files
 * and generates a JSON file that can be used without SSR module loading
 */

import { readFileSync, writeFileSync, readdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const srcDir = join(__dirname, "../src/components");
const outputFile = join(__dirname, "story-data.json");

function extractStoryData() {
  const storyData = {
    components: {},
    generated: new Date().toISOString(),
  };

  const components = readdirSync(srcDir).filter((name) => {
    const path = join(srcDir, name);
    return statSync(path).isDirectory();
  });

  for (const componentName of components) {
    const storyFile = join(
      srcDir,
      componentName,
      `${componentName}.stories.tsx`,
    );

    try {
      const content = readFileSync(storyFile, "utf-8");

      // Extract story exports and their args using regex
      const stories = {};

      // Match: export const StoryName: Story = { ... }
      const storyExportRegex = /export const (\w+):\s*Story\s*=\s*\{/g;
      let match;

      while ((match = storyExportRegex.exec(content)) !== null) {
        const storyName = match[1];
        const startPos = match.index + match[0].length;
        
        // Find the matching closing brace for this story object
        let braceCount = 1;
        let endPos = startPos;
        let inString = false;
        let stringChar = null;
        
        for (let i = startPos; i < content.length && braceCount > 0; i++) {
          const char = content[i];
          const prevChar = i > 0 ? content[i - 1] : '';
          
          // Handle strings
          if ((char === '"' || char === "'" || char === '`') && prevChar !== '\\') {
            if (!inString) {
              inString = true;
              stringChar = char;
            } else if (char === stringChar) {
              inString = false;
              stringChar = null;
            }
          }
          
          if (!inString) {
            if (char === '{') braceCount++;
            if (char === '}') braceCount--;
          }
          
          if (braceCount === 0) {
            endPos = i;
            break;
          }
        }
        
        const storyContent = content.substring(startPos, endPos);
        
        // Extract args from the story content
        const argsMatch = storyContent.match(/args:\s*\{([^}]*)\}/s);
        if (argsMatch) {
          const argsStr = argsMatch[1];
          const args = {};
          
          // Parse args (simple key: value extraction for strings)
          const argMatches = argsStr.matchAll(/(\w+):\s*['"]([^'"]+)['"]/g);
          
          for (const argMatch of argMatches) {
            args[argMatch[1]] = argMatch[2];
          }
          
          if (Object.keys(args).length > 0) {
            stories[storyName] = { args };
          }
        }
      }

      if (Object.keys(stories).length > 0) {
        storyData.components[componentName] = {
          stories,
          file: `src/components/${componentName}/${componentName}.stories.tsx`,
        };
      }
    } catch (error) {
      console.warn(
        `Warning: Could not process ${componentName}:`,
        error.message,
      );
    }
  }

  return storyData;
}

// Generate and write the data
const data = extractStoryData();
writeFileSync(outputFile, JSON.stringify(data, null, 2));

console.log(
  `✓ Generated story data for ${Object.keys(data.components).length} components`,
);
console.log(`  Output: ${outputFile}`);

Object.entries(data.components).forEach(([component, info]) => {
  const storyCount = Object.keys(info.stories).length;
  console.log(
    `  - ${component}: ${storyCount} ${storyCount === 1 ? "story" : "stories"}`,
  );
});
