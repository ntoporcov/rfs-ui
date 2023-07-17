import { j as t } from "./chunk-NO6MRLPK-0daf97be.js";
import i, { useMemo as j } from "react";
import { J as u, O as y, P as A, d as h, R as b, S as p, V as z, I as O, T as w, K as C, A as _, F as d } from "./chunk-4G4PB64H-419cc281.js";
var g = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, f = i.createContext && i.createContext(g), l = globalThis && globalThis.__assign || function() {
  return l = Object.assign || function(e) {
    for (var a, n = 1, s = arguments.length; n < s; n++) {
      a = arguments[n];
      for (var r in a)
        Object.prototype.hasOwnProperty.call(a, r) && (e[r] = a[r]);
    }
    return e;
  }, l.apply(this, arguments);
}, S = globalThis && globalThis.__rest || function(e, a) {
  var n = {};
  for (var s in e)
    Object.prototype.hasOwnProperty.call(e, s) && a.indexOf(s) < 0 && (n[s] = e[s]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var r = 0, s = Object.getOwnPropertySymbols(e); r < s.length; r++)
      a.indexOf(s[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, s[r]) && (n[s[r]] = e[s[r]]);
  return n;
};
function x(e) {
  return e && e.map(function(a, n) {
    return i.createElement(a.tag, l({
      key: n
    }, a.attr), x(a.child));
  });
}
function E(e) {
  return function(a) {
    return i.createElement(N, l({
      attr: l({}, e.attr)
    }, a), x(e.child));
  };
}
function N(e) {
  var a = function(n) {
    var s = e.attr, r = e.size, o = e.title, v = S(e, ["attr", "size", "title"]), m = r || n.size || "1em", c;
    return n.className && (c = n.className), e.className && (c = (c ? c + " " : "") + e.className), i.createElement("svg", l({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, n.attr, s, v, {
      className: c,
      style: l(l({
        color: e.color || n.color
      }, n.style), e.style),
      height: m,
      width: m,
      xmlns: "http://www.w3.org/2000/svg"
    }), o && i.createElement("title", null, o), e.children);
  };
  return f !== void 0 ? i.createElement(f.Consumer, null, function(n) {
    return a(n);
  }) : a(g);
}
function T(e) {
  return E({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" } }] })(e);
}
const P = (e) => {
  var n, s;
  const a = j(() => {
    var r;
    return (r = e.apps) == null ? void 0 : r.find((o) => o.active);
  }, [e.apps]);
  return /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
    /* @__PURE__ */ t.jsxs(u, { justifyContent: "space-between", w: "full", spacing: 3, children: [
      /* @__PURE__ */ t.jsxs(u, { children: [
        /* @__PURE__ */ t.jsxs(y, { children: [
          /* @__PURE__ */ t.jsx(A, { children: /* @__PURE__ */ t.jsx(h, { p: 1, variant: "ghost", rounded: "full", children: /* @__PURE__ */ t.jsx(T, {}) }) }),
          /* @__PURE__ */ t.jsx(b, { py: 3, children: /* @__PURE__ */ t.jsx(p, { columns: 3, spacing: 5, children: e.apps.map((r) => /* @__PURE__ */ t.jsx(h, { h: "auto", py: 2, variant: "ghost", children: /* @__PURE__ */ t.jsxs(z, { spacing: 1, children: [
            /* @__PURE__ */ t.jsx(O, { src: r.image, h: 6, w: "auto" }),
            /* @__PURE__ */ t.jsx(w, { fontSize: "sm", children: r.name })
          ] }) })) }) })
        ] }),
        /* @__PURE__ */ t.jsx(C, { size: "md", children: a == null ? void 0 : a.name })
      ] }),
      /* @__PURE__ */ t.jsx(u, { children: /* @__PURE__ */ t.jsx(_, { size: "sm" }) })
    ] }),
    /* @__PURE__ */ t.jsx(d, {}),
    (((n = e.navLinks) == null ? void 0 : n.length) || 0) > 0 && /* @__PURE__ */ t.jsxs(t.Fragment, { children: [
      /* @__PURE__ */ t.jsx(u, { px: 3, py: 1, children: (s = e.navLinks) == null ? void 0 : s.map((r) => /* @__PURE__ */ t.jsx(
        h,
        {
          fontSize: 11,
          py: 1,
          h: "auto",
          rounded: "full",
          px: 3,
          variant: r.active ? "solid" : "ghost",
          children: r.label
        }
      )) }),
      /* @__PURE__ */ t.jsx(d, {})
    ] })
  ] });
};
export {
  P as OCAppsBar
};
