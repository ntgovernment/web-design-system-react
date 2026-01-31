import Oe from "react";
var U = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function fr() {
  if (xe) return I;
  xe = 1;
  var g = Oe, b = Symbol.for("react.element"), h = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, m = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function E(T, c, j) {
    var d, C = {}, S = null, W = null;
    j !== void 0 && (S = "" + j), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (d in c) f.call(c, d) && !_.hasOwnProperty(d) && (C[d] = c[d]);
    if (T && T.defaultProps) for (d in c = T.defaultProps, c) C[d] === void 0 && (C[d] = c[d]);
    return { $$typeof: b, type: T, key: S, ref: W, props: C, _owner: m.current };
  }
  return I.Fragment = h, I.jsx = E, I.jsxs = E, I;
}
var N = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var je;
function dr() {
  return je || (je = 1, process.env.NODE_ENV !== "production" && (function() {
    var g = Oe, b = Symbol.for("react.element"), h = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), E = Symbol.for("react.provider"), T = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Z = Symbol.iterator, Se = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var k = g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = k.ReactDebugCurrentFrame, o = n.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, $e = !1, De = !1, Fe = !1, Ae = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === _ || Ae || e === m || e === j || e === d || Fe || e === W || ke || $e || De || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === C || e.$$typeof === E || e.$$typeof === T || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case h:
          return "Portal";
        case _:
          return "Profiler";
        case m:
          return "StrictMode";
        case j:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case T:
            var r = e;
            return ee(r) + ".Consumer";
          case E:
            var t = e;
            return ee(t._context) + ".Provider";
          case c:
            return Ne(e, e.render, "ForwardRef");
          case C:
            var n = e.displayName || null;
            return n !== null ? n : O(e.type) || "Memo";
          case S: {
            var o = e, s = o._payload, i = o._init;
            try {
              return O(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, F = 0, re, te, ne, ae, ie, oe, se;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function We() {
      {
        if (F === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, ie = console.group, oe = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ue,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function Ye() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: w({}, e, {
              value: re
            }),
            info: w({}, e, {
              value: te
            }),
            warn: w({}, e, {
              value: ne
            }),
            error: w({}, e, {
              value: ae
            }),
            group: w({}, e, {
              value: ie
            }),
            groupCollapsed: w({}, e, {
              value: oe
            }),
            groupEnd: w({}, e, {
              value: se
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = k.ReactCurrentDispatcher, q;
    function Y(e, r, t) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (o) {
            var n = o.stack.trim().match(/\n( *(at )?)/);
            q = n && n[1] || "";
          }
        return `
` + q + e;
      }
    }
    var B = !1, L;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      L = new Le();
    }
    function le(e, r) {
      if (!e || B)
        return "";
      {
        var t = L.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      B = !0;
      var o = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = J.current, J.current = null, We();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (y) {
              n = y;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (y) {
              n = y;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (y) {
            n = y;
          }
          e();
        }
      } catch (y) {
        if (y && n && typeof y.stack == "string") {
          for (var a = y.stack.split(`
`), p = n.stack.split(`
`), u = a.length - 1, l = p.length - 1; u >= 1 && l >= 0 && a[u] !== p[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (a[u] !== p[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || a[u] !== p[l]) {
                    var x = `
` + a[u].replace(" at new ", " at ");
                    return e.displayName && x.includes("<anonymous>") && (x = x.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, x), x;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, J.current = s, Ye(), Error.prepareStackTrace = o;
      }
      var D = e ? e.displayName || e.name : "", P = D ? Y(D) : "";
      return typeof e == "function" && L.set(e, P), P;
    }
    function Ve(e, r, t) {
      return le(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function V(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Me(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case j:
          return Y("Suspense");
        case d:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            return Ve(e.render);
          case C:
            return V(e.type, r, t);
          case S: {
            var n = e, o = n._payload, s = n._init;
            try {
              return V(s(o), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var A = Object.prototype.hasOwnProperty, ce = {}, fe = k.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, o) {
      {
        var s = Function.call.bind(A);
        for (var i in e)
          if (s(e, i)) {
            var a = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((n || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              a = e[i](r, i, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              a = u;
            }
            a && !(a instanceof Error) && (M(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, i, typeof a), M(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, M(o), v("Failed %s type: %s", t, a.message), M(null));
          }
      }
    }
    var Je = Array.isArray;
    function K(e) {
      return Je(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Be(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (Be(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), de(e);
    }
    var pe = k.ReactCurrentOwner, Ke = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, he;
    function Ge(e) {
      if (A.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (A.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Xe(e, r) {
      typeof e.ref == "string" && pe.current;
    }
    function He(e, r) {
      {
        var t = function() {
          be || (be = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          he || (he = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, o, s, i) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function er(e, r, t, n, o) {
      {
        var s, i = {}, a = null, p = null;
        t !== void 0 && (ve(t), a = "" + t), ze(r) && (ve(r.key), a = "" + r.key), Ge(r) && (p = r.ref, Xe(r, o));
        for (s in r)
          A.call(r, s) && !Ke.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (a || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(i, l), p && Ze(i, l);
        }
        return Qe(e, a, p, o, n, pe.current, i);
      }
    }
    var G = k.ReactCurrentOwner, me = k.ReactDebugCurrentFrame;
    function $(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function ye() {
      {
        if (G.current) {
          var e = O(G.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      return "";
    }
    var ge = {};
    function tr(e) {
      {
        var r = ye();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (ge[t])
          return;
        ge[t] = !0;
        var n = "";
        e && e._owner && e._owner !== G.current && (n = " It was passed a child from " + O(e._owner.type) + "."), $(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), $(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            X(n) && Ee(n, r);
          }
        else if (X(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var o = we(e);
          if (typeof o == "function" && o !== e.entries)
            for (var s = o.call(e), i; !(i = s.next()).done; )
              X(i.value) && Ee(i.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === C))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = O(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = O(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            $(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), $(null);
            break;
          }
        }
        e.ref !== null && ($(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), $(null));
      }
    }
    var _e = {};
    function Te(e, r, t, n, o, s) {
      {
        var i = Ie(e);
        if (!i) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = rr();
          p ? a += p : a += ye();
          var u;
          e === null ? u = "null" : K(e) ? u = "array" : e !== void 0 && e.$$typeof === b ? (u = "<" + (O(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, a);
        }
        var l = er(e, r, t, o, s);
        if (l == null)
          return l;
        if (i) {
          var x = r.children;
          if (x !== void 0)
            if (n)
              if (K(x)) {
                for (var D = 0; D < x.length; D++)
                  Re(x[D], e);
                Object.freeze && Object.freeze(x);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(x, e);
        }
        if (A.call(r, "key")) {
          var P = O(e), y = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), H = y.length > 0 ? "{key: someKey, " + y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_e[P + H]) {
            var lr = y.length > 0 ? "{" + y.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, P, lr, P), _e[P + H] = !0;
          }
        }
        return e === f ? ar(l) : nr(l), l;
      }
    }
    function ir(e, r, t) {
      return Te(e, r, t, !0);
    }
    function or(e, r, t) {
      return Te(e, r, t, !1);
    }
    var sr = or, ur = ir;
    N.Fragment = f, N.jsx = sr, N.jsxs = ur;
  })()), N;
}
var Ce;
function vr() {
  return Ce || (Ce = 1, process.env.NODE_ENV === "production" ? U.exports = fr() : U.exports = dr()), U.exports;
}
var R = vr();
const br = ({
  variant: g = "primary",
  size: b,
  disabled: h = !1,
  children: f,
  onClick: m,
  type: _ = "button",
  icon: E,
  iconPosition: T = "left",
  ...c
}) => {
  const j = b ? `btn-${b}` : "", d = `btn btn-${g} ${j}`.trim();
  return /* @__PURE__ */ R.jsxs(
    "button",
    {
      type: _,
      className: d,
      disabled: h,
      onClick: m,
      ...c,
      children: [
        E && T === "left" && /* @__PURE__ */ R.jsx("i", { className: `${E} ${f ? "me-2" : ""}`, "aria-hidden": "true" }),
        f,
        E && T === "right" && /* @__PURE__ */ R.jsx("i", { className: `${E} ${f ? "ms-2" : ""}`, "aria-hidden": "true" })
      ]
    }
  );
}, hr = ({
  title: g,
  children: b,
  footer: h,
  variant: f,
  icon: m
}) => {
  const _ = f ? `card text-bg-${f}` : "card";
  return /* @__PURE__ */ R.jsxs("div", { className: _, children: [
    g && /* @__PURE__ */ R.jsx("div", { className: "card-header", children: /* @__PURE__ */ R.jsxs("h5", { className: "card-title mb-0", children: [
      m && /* @__PURE__ */ R.jsx("i", { className: `${m} me-2`, "aria-hidden": "true" }),
      g
    ] }) }),
    /* @__PURE__ */ R.jsx("div", { className: "card-body", children: b }),
    h && /* @__PURE__ */ R.jsx("div", { className: "card-footer", children: h })
  ] });
}, mr = ({
  variant: g = "primary",
  children: b,
  dismissible: h = !1,
  onDismiss: f,
  icon: m
}) => {
  const _ = h ? `alert alert-${g} alert-dismissible fade show` : `alert alert-${g}`;
  return /* @__PURE__ */ R.jsxs("div", { className: _, role: "alert", children: [
    m && /* @__PURE__ */ R.jsx("i", { className: `${m} me-2`, "aria-hidden": "true" }),
    b,
    h && /* @__PURE__ */ R.jsx(
      "button",
      {
        type: "button",
        className: "btn-close",
        "data-bs-dismiss": "alert",
        "aria-label": "Close",
        onClick: f
      }
    )
  ] });
}, yr = ({
  icon: g,
  color: b = "inherit",
  size: h,
  className: f = "",
  ariaHidden: m = !0,
  ariaLabel: _,
  onClick: E,
  style: T
}) => {
  const c = `${g} ${f}`.trim(), j = {
    color: b,
    ...h && { fontSize: h },
    ...T
  };
  return /* @__PURE__ */ R.jsx(
    "i",
    {
      className: c,
      style: j,
      "aria-hidden": m,
      "aria-label": _,
      onClick: E,
      role: E ? "button" : void 0
    }
  );
};
export {
  mr as Alert,
  br as Button,
  hr as Card,
  yr as Icon
};
