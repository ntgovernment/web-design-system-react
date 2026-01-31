import je from "react";
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
  var E = je, h = Symbol.for("react.element"), R = Symbol.for("react.fragment"), f = Object.prototype.hasOwnProperty, m = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _ = { key: !0, ref: !0, __self: !0, __source: !0 };
  function T(x, c, O) {
    var d, C = {}, S = null, W = null;
    O !== void 0 && (S = "" + O), c.key !== void 0 && (S = "" + c.key), c.ref !== void 0 && (W = c.ref);
    for (d in c) f.call(c, d) && !_.hasOwnProperty(d) && (C[d] = c[d]);
    if (x && x.defaultProps) for (d in c = x.defaultProps, c) C[d] === void 0 && (C[d] = c[d]);
    return { $$typeof: h, type: x, key: S, ref: W, props: C, _owner: m.current };
  }
  return I.Fragment = R, I.jsx = T, I.jsxs = T, I;
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
var Ce;
function dr() {
  return Ce || (Ce = 1, process.env.NODE_ENV !== "production" && (function() {
    var E = je, h = Symbol.for("react.element"), R = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), _ = Symbol.for("react.profiler"), T = Symbol.for("react.provider"), x = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), C = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), W = Symbol.for("react.offscreen"), Z = Symbol.iterator, Se = "@@iterator";
    function we(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Se];
      return typeof r == "function" ? r : null;
    }
    var k = E.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var a = k.ReactDebugCurrentFrame, o = a.getStackAddendum();
        o !== "" && (r += "%s", t = t.concat([o]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var ke = !1, De = !1, $e = !1, Fe = !1, Ae = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === f || e === _ || Ae || e === m || e === O || e === d || Fe || e === W || ke || De || $e || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === C || e.$$typeof === T || e.$$typeof === x || e.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Ne(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var o = r.displayName || r.name || "";
      return o !== "" ? t + "(" + o + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case f:
          return "Fragment";
        case R:
          return "Portal";
        case _:
          return "Profiler";
        case m:
          return "StrictMode";
        case O:
          return "Suspense";
        case d:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case x:
            var r = e;
            return ee(r) + ".Consumer";
          case T:
            var t = e;
            return ee(t._context) + ".Provider";
          case c:
            return Ne(e, e.render, "ForwardRef");
          case C:
            var a = e.displayName || null;
            return a !== null ? a : j(e.type) || "Memo";
          case S: {
            var o = e, s = o._payload, i = o._init;
            try {
              return j(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var w = Object.assign, F = 0, re, te, ae, ne, ie, oe, se;
    function ue() {
    }
    ue.__reactDisabledLog = !0;
    function We() {
      {
        if (F === 0) {
          re = console.log, te = console.info, ae = console.warn, ne = console.error, ie = console.group, oe = console.groupCollapsed, se = console.groupEnd;
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
              value: ae
            }),
            error: w({}, e, {
              value: ne
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
            var a = o.stack.trim().match(/\n( *(at )?)/);
            q = a && a[1] || "";
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
      var a;
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
            } catch (b) {
              a = b;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (b) {
              a = b;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (b) {
            a = b;
          }
          e();
        }
      } catch (b) {
        if (b && a && typeof b.stack == "string") {
          for (var n = b.stack.split(`
`), p = a.stack.split(`
`), u = n.length - 1, l = p.length - 1; u >= 1 && l >= 0 && n[u] !== p[l]; )
            l--;
          for (; u >= 1 && l >= 0; u--, l--)
            if (n[u] !== p[l]) {
              if (u !== 1 || l !== 1)
                do
                  if (u--, l--, l < 0 || n[u] !== p[l]) {
                    var g = `
` + n[u].replace(" at new ", " at ");
                    return e.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", e.displayName)), typeof e == "function" && L.set(e, g), g;
                  }
                while (u >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        B = !1, J.current = s, Ye(), Error.prepareStackTrace = o;
      }
      var $ = e ? e.displayName || e.name : "", P = $ ? Y($) : "";
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
        case O:
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
            var a = e, o = a._payload, s = a._init;
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
    function Ue(e, r, t, a, o) {
      {
        var s = Function.call.bind(A);
        for (var i in e)
          if (s(e, i)) {
            var n = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              n = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              n = u;
            }
            n && !(n instanceof Error) && (M(o), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof n), M(null)), n instanceof Error && !(n.message in ce) && (ce[n.message] = !0, M(o), v("Failed %s type: %s", t, n.message), M(null));
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
    var Qe = function(e, r, t, a, o, s, i) {
      var n = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: h,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return n._store = {}, Object.defineProperty(n._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(n, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(n, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: o
      }), Object.freeze && (Object.freeze(n.props), Object.freeze(n)), n;
    };
    function er(e, r, t, a, o) {
      {
        var s, i = {}, n = null, p = null;
        t !== void 0 && (ve(t), n = "" + t), ze(r) && (ve(r.key), n = "" + r.key), Ge(r) && (p = r.ref, Xe(r, o));
        for (s in r)
          A.call(r, s) && !Ke.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (s in u)
            i[s] === void 0 && (i[s] = u[s]);
        }
        if (n || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          n && He(i, l), p && Ze(i, l);
        }
        return Qe(e, n, p, o, a, pe.current, i);
      }
    }
    var G = k.ReactCurrentOwner, me = k.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = V(e.type, e._source, r ? r.type : null);
        me.setExtraStackFrame(t);
      } else
        me.setExtraStackFrame(null);
    }
    var z;
    z = !1;
    function X(e) {
      return typeof e == "object" && e !== null && e.$$typeof === h;
    }
    function ge() {
      {
        if (G.current) {
          var e = j(G.current.type);
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
    var ye = {};
    function tr(e) {
      {
        var r = ge();
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
        if (ye[t])
          return;
        ye[t] = !0;
        var a = "";
        e && e._owner && e._owner !== G.current && (a = " It was passed a child from " + j(e._owner.type) + "."), D(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), D(null);
      }
    }
    function Re(e, r) {
      {
        if (typeof e != "object")
          return;
        if (K(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            X(a) && Ee(a, r);
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
    function ar(e) {
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
          var a = j(r);
          Ue(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !z) {
          z = !0;
          var o = j(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", o || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            D(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    var _e = {};
    function Te(e, r, t, a, o, s) {
      {
        var i = Ie(e);
        if (!i) {
          var n = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (n += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = rr();
          p ? n += p : n += ge();
          var u;
          e === null ? u = "null" : K(e) ? u = "array" : e !== void 0 && e.$$typeof === h ? (u = "<" + (j(e.type) || "Unknown") + " />", n = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, n);
        }
        var l = er(e, r, t, o, s);
        if (l == null)
          return l;
        if (i) {
          var g = r.children;
          if (g !== void 0)
            if (a)
              if (K(g)) {
                for (var $ = 0; $ < g.length; $++)
                  Re(g[$], e);
                Object.freeze && Object.freeze(g);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(g, e);
        }
        if (A.call(r, "key")) {
          var P = j(e), b = Object.keys(r).filter(function(cr) {
            return cr !== "key";
          }), H = b.length > 0 ? "{key: someKey, " + b.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!_e[P + H]) {
            var lr = b.length > 0 ? "{" + b.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, H, P, lr, P), _e[P + H] = !0;
          }
        }
        return e === f ? nr(l) : ar(l), l;
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
var Oe;
function vr() {
  return Oe || (Oe = 1, process.env.NODE_ENV === "production" ? U.exports = fr() : U.exports = dr()), U.exports;
}
var y = vr();
const br = ({
  variant: E = "primary",
  size: h,
  disabled: R = !1,
  children: f,
  onClick: m,
  type: _ = "button",
  icon: T,
  iconPosition: x = "left",
  ...c
}) => {
  const O = h ? `btn-${h}` : "", d = `btn btn-${E} ${O}`.trim();
  return /* @__PURE__ */ y.jsxs(
    "button",
    {
      type: _,
      className: d,
      disabled: R,
      onClick: m,
      ...c,
      children: [
        T && x === "left" && /* @__PURE__ */ y.jsx("i", { className: `${T} ${f ? "me-2" : ""}`, "aria-hidden": "true" }),
        f,
        T && x === "right" && /* @__PURE__ */ y.jsx("i", { className: `${T} ${f ? "ms-2" : ""}`, "aria-hidden": "true" })
      ]
    }
  );
}, hr = ({
  title: E,
  children: h,
  footer: R,
  variant: f,
  icon: m
}) => {
  const _ = f ? `card text-bg-${f}` : "card";
  return /* @__PURE__ */ y.jsxs("div", { className: _, children: [
    E && /* @__PURE__ */ y.jsx("div", { className: "card-header", children: /* @__PURE__ */ y.jsxs("h5", { className: "card-title mb-0", children: [
      m && /* @__PURE__ */ y.jsx("i", { className: `${m} me-2`, "aria-hidden": "true" }),
      E
    ] }) }),
    /* @__PURE__ */ y.jsx("div", { className: "card-body", children: h }),
    R && /* @__PURE__ */ y.jsx("div", { className: "card-footer", children: R })
  ] });
}, mr = ({
  variant: E = "primary",
  children: h,
  dismissible: R = !1,
  onDismiss: f,
  icon: m
}) => {
  const _ = R ? `alert alert-${E} alert-dismissible fade show` : `alert alert-${E}`;
  return /* @__PURE__ */ y.jsxs("div", { className: _, role: "alert", children: [
    m && /* @__PURE__ */ y.jsx("i", { className: `${m} me-2`, "aria-hidden": "true" }),
    h,
    R && /* @__PURE__ */ y.jsx(
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
};
export {
  mr as Alert,
  br as Button,
  hr as Card
};
