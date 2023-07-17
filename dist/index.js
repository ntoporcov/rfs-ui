import { c as jr, u as pt, m as Se, a as gi, N as bi, g as mt, b as xi, B as Si, d as wi, e as zt, i as Pi, f as _i, h as na, j as lt, k as ki, l as Ci, n as Pn, o as Ni, p as Ei, q as Ii, r as ra, s as oa, t as Ti, v as Ai, w as ji, x as aa, y as dt, z as Di } from "./chunk-4G4PB64H-419cc281.js";
import { A as gg, C as bg, F as xg, G as Sg, H as wg, J as Pg, K as _g, I as kg, O as Cg, P as Ng, Q as Eg, R as Ig, U as Tg, S as Ag, L as jg, M as Dg, T as Fg, V as Rg, D as Mg, E as Og, W as Lg, X as Bg, Y as $g, Z as Vg, _ as Hg, $ as Wg, a0 as zg, a1 as Ug, a2 as Gg } from "./chunk-4G4PB64H-419cc281.js";
import { j as f, m as Dr, i as tt, p as Fi, n as sa, d as Ri, w as Mi, f as b, u as Oi, s as Li, C as Bi, c as ge, a as g, b as C, e as H, g as Zt, h as Xe, k as ke, o as me, l as Ee, q as pe, r as Be, t as Fe, v as It, x as Qt, y as Ze, z as Fr, A as Ut, B as ia, D as ca, _ as ur, E as dr, F as $i, G as la, H as ot, I as Vi, J as ua, K as da, L as Hi, M as Wi } from "./chunk-NO6MRLPK-0daf97be.js";
import { S as qg, V as Yg, W as Xg, aw as Zg, X as Qg, Y as Jg, Z as eb, $ as tb, a0 as nb, a1 as rb, a2 as ob, a3 as ab, a4 as sb, aA as ib, aB as cb, a5 as lb, a6 as ub, a7 as db, a8 as fb, N as vb, a9 as pb, aa as mb, ax as hb, ab as yb, ac as gb, ad as bb, ae as xb, af as Sb, ag as wb, ah as Pb, ai as _b, ay as kb, aj as Cb, ak as Nb, al as Eb, O as Ib, am as Tb, P as Ab, an as jb, ao as Db, az as Fb, Q as Rb, ap as Mb, aq as Ob, ar as Lb, as as Bb, at as $b, au as Vb, av as Hb, T as Wb, U as zb, R as Ub } from "./chunk-NO6MRLPK-0daf97be.js";
import * as re from "react";
import zi, { Children as at, useMemo as _e, useState as te, useEffect as de, useRef as ae, useId as $e, useCallback as S, forwardRef as Ot, cloneElement as Ae, isValidElement as Rr, PureComponent as Ui, useLayoutEffect as fa, Fragment as Gi, createElement as Ki } from "react";
import { w as qi, I as Ve, u as Yi, c as va, T as Xi, a as Zi, A as ht, b as pa, d as Qi, P as ma, C as ha } from "./chunk-DGNA6VRZ-3bdd8ead.js";
import { g as Kb, h as qb, i as Yb, j as Xb, l as Zb, m as Qb, p as Jb, e as e0, f as t0, r as n0, D as r0, E as o0, G as a0, L as s0, n as i0, S as c0, z as l0, B as u0, s as d0, t as f0, v as v0, x as p0, F as m0, H as h0, y as y0, k as g0, o as b0, q as x0 } from "./chunk-DGNA6VRZ-3bdd8ead.js";
import "react-dom";
var Ji = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function ec(e) {
  let t = e;
  return Ji.has(t) || (t = "light"), t;
}
function tc(e = {}) {
  const {
    initialColorMode: t = "light",
    type: n = "localStorage",
    storageKey: r = "chakra-ui-color-mode"
  } = e, o = ec(t), a = n === "cookie", s = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${r}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, i = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${r}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${a ? s : i}`.trim();
}
function ay(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ f.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: tc(e) }
    }
  );
}
function nc({
  size: e,
  components: t
}) {
  return (n) => {
    let r = Object.keys(n.components || {});
    return Array.isArray(t) ? r = t : tt(t) && (r = Object.keys(t)), Dr(n, {
      components: Object.fromEntries(
        r.map((o) => [o, {
          defaultProps: {
            size: e
          }
        }])
      )
    });
  };
}
function rc({
  variant: e,
  components: t
}) {
  return (n) => {
    let r = Object.keys(n.components || {});
    return Array.isArray(t) ? r = t : tt(t) && (r = Object.keys(t)), Dr(n, {
      components: Object.fromEntries(
        r.map((o) => [o, {
          defaultProps: {
            variant: e
          }
        }])
      )
    });
  };
}
function oc(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
function sy({
  defaultProps: { colorScheme: e, variant: t, size: n },
  components: r
}) {
  const o = (s) => s, a = [
    e ? qi({ colorScheme: e, components: r }) : o,
    n ? nc({ size: n, components: r }) : o,
    t ? rc({ variant: t, components: r }) : o
  ];
  return (s) => Dr(oc(...a)(s));
}
function Mr(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function _n(e) {
  var t;
  if (!Mr(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function ac(e) {
  var t, n;
  return Mr(e) && (n = (t = yt(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function yt(e) {
  var t;
  return Mr(e) && (t = e.ownerDocument) != null ? t : document;
}
function Or(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function sc() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Jt = /* @__PURE__ */ sc();
function ic(e) {
  const t = yt(e);
  return t == null ? void 0 : t.activeElement;
}
function Lr(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function cc(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function lc(e) {
  const { userAgent: t, vendor: n } = e, r = /(android)/i.test(t);
  switch (!0) {
    case /CriOS/.test(t):
      return "Chrome for iOS";
    case /Edg\//.test(t):
      return "Edge";
    case (r && /Silk\//.test(t)):
      return "Silk";
    case (/Chrome/.test(t) && /Google Inc/.test(n)):
      return "Chrome";
    case /Firefox\/\d+\.\d+$/.test(t):
      return "Firefox";
    case r:
      return "AOSP";
    case /MSIE|Trident/.test(t):
      return "IE";
    case (/Safari/.test(e.userAgent) && /Apple Computer/.test(t)):
      return "Safari";
    case /AppleWebKit/.test(t):
      return "WebKit";
    default:
      return null;
  }
}
function uc(e) {
  return Jt ? lc(window.navigator) === e : !1;
}
function dc(e) {
  const t = Or(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function ya(e) {
  return !!e.touches;
}
function fc(e) {
  return (t) => {
    const n = Or(t), r = t instanceof n.MouseEvent;
    (!r || r && t.button === 0) && e(t);
  };
}
var vc = { pageX: 0, pageY: 0 };
function pc(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0] || vc;
  return {
    x: r[`${t}X`],
    y: r[`${t}Y`]
  };
}
function mc(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function ga(e, t = "page") {
  return {
    point: ya(e) ? pc(e, t) : mc(e, t)
  };
}
var Br = (e, t = !1) => {
  const n = (r) => e(r, ga(r));
  return t ? fc(n) : n;
}, hc = () => Jt && window.onpointerdown === null, yc = () => Jt && window.ontouchstart === null, gc = () => Jt && window.onmousedown === null, bc = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, xc = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function $r(e) {
  return hc() ? e : yc() ? xc[e] : gc() ? bc[e] : e;
}
function $n(e, t, n, r) {
  return cc(
    e,
    $r(t),
    Br(n, t === "pointerdown"),
    r
  );
}
function Sc(e) {
  return ya(e) && e.touches.length > 1;
}
var wc = Object.defineProperty, Pc = (e, t, n) => t in e ? wc(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, We = (e, t, n) => (Pc(e, typeof t != "symbol" ? t + "" : t, n), n);
const ba = 1 / 60 * 1e3, _c = typeof performance < "u" ? () => performance.now() : () => Date.now(), xa = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(_c()), ba);
function kc(e) {
  let t = [], n = [], r = 0, o = !1, a = !1;
  const s = /* @__PURE__ */ new WeakSet(), i = {
    schedule: (c, l = !1, u = !1) => {
      const d = u && o, v = d ? t : n;
      return l && s.add(c), v.indexOf(c) === -1 && (v.push(c), d && o && (r = t.length)), c;
    },
    cancel: (c) => {
      const l = n.indexOf(c);
      l !== -1 && n.splice(l, 1), s.delete(c);
    },
    process: (c) => {
      if (o) {
        a = !0;
        return;
      }
      if (o = !0, [t, n] = [n, t], n.length = 0, r = t.length, r)
        for (let l = 0; l < r; l++) {
          const u = t[l];
          u(c), s.has(u) && (i.schedule(u), e());
        }
      o = !1, a && (a = !1, i.process(c));
    }
  };
  return i;
}
const Cc = 40;
let fr = !0, Gt = !1, vr = !1;
const Tt = {
  delta: 0,
  timestamp: 0
}, en = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], kn = en.reduce((e, t) => (e[t] = kc(() => Gt = !0), e), {}), Sa = en.reduce((e, t) => {
  const n = kn[t];
  return e[t] = (r, o = !1, a = !1) => (Gt || Ec(), n.schedule(r, o, a)), e;
}, {}), wa = en.reduce((e, t) => (e[t] = kn[t].cancel, e), {});
en.reduce((e, t) => (e[t] = () => kn[t].process(Tt), e), {});
const Nc = (e) => kn[e].process(Tt), Pa = (e) => {
  Gt = !1, Tt.delta = fr ? ba : Math.max(Math.min(e - Tt.timestamp, Cc), 1), Tt.timestamp = e, vr = !0, en.forEach(Nc), vr = !1, Gt && (fr = !1, xa(Pa));
}, Ec = () => {
  Gt = !0, fr = !0, vr || xa(Pa);
}, gn = () => Tt;
var Ic = class {
  constructor(e, t, n) {
    if (We(this, "history", []), We(this, "startEvent", null), We(this, "lastEvent", null), We(this, "lastEventInfo", null), We(this, "handlers", {}), We(this, "removeListeners", sa), We(this, "threshold", 3), We(this, "win"), We(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = Vn(this.lastEventInfo, this.history), i = this.startEvent !== null, c = Ri(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!i && !c)
        return;
      const { timestamp: l } = gn();
      this.history.push({ ...s.point, timestamp: l });
      const { onStart: u, onMove: d } = this.handlers;
      i || (u == null || u(this.lastEvent, s), this.startEvent = this.lastEvent), d == null || d(this.lastEvent, s);
    }), We(this, "onPointerMove", (s, i) => {
      if (this.lastEvent = s, this.lastEventInfo = i, dc(s) && s.buttons === 0) {
        this.onPointerUp(s, i);
        return;
      }
      Sa.update(this.updatePoint, !0);
    }), We(this, "onPointerUp", (s, i) => {
      const c = Vn(i, this.history), { onEnd: l, onSessionEnd: u } = this.handlers;
      u == null || u(s, c), this.end(), !(!l || !this.startEvent) && (l == null || l(s, c));
    }), this.win = Or(e), Sc(e))
      return;
    this.handlers = t, n && (this.threshold = n), e.stopPropagation(), e.preventDefault();
    const r = ga(e), { timestamp: o } = gn();
    this.history = [{ ...r.point, timestamp: o }];
    const { onSessionStart: a } = t;
    a == null || a(e, Vn(r, this.history)), this.removeListeners = Fi(
      $n(this.win, "pointermove", this.onPointerMove),
      $n(this.win, "pointerup", this.onPointerUp),
      $n(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), wa.update(this.updatePoint);
  }
};
function yo(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Tc(e) {
  return e[0];
}
function Ac(e) {
  return e[e.length - 1];
}
function Vn(e, t) {
  return {
    point: e.point,
    delta: yo(e.point, Ac(t)),
    offset: yo(e.point, Tc(t)),
    velocity: Fc(t, 0.1)
  };
}
function jc(e) {
  return e[e.length - 1];
}
var Dc = (e) => e * 1e3;
function Fc(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = jc(e);
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Dc(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const a = (o.timestamp - r.timestamp) / 1e3;
  if (a === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / a,
    y: (o.y - r.y) / a
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
var _a = (e) => e.hasAttribute("tabindex"), Rc = (e) => _a(e) && e.tabIndex === -1;
function Mc(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Oc(e) {
  return _n(e) && e.localName === "input" && "select" in e;
}
function ka(e) {
  return (_n(e) ? yt(e) : document).activeElement === e;
}
function Lc(e) {
  return document.activeElement ? e.contains(document.activeElement) : !1;
}
function Ca(e) {
  return e.parentElement && Ca(e.parentElement) ? !0 : e.hidden;
}
function Bc(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function Na(e) {
  if (!_n(e) || Ca(e) || Mc(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : Bc(e) ? !0 : _a(e);
}
function $c(e) {
  return e ? _n(e) && Na(e) && !Rc(e) : !1;
}
var Vc = [
  "input:not(:disabled):not([disabled])",
  "select:not(:disabled):not([disabled])",
  "textarea:not(:disabled):not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not(:disabled):not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
], Hc = Vc.join(), Wc = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function zc(e) {
  const t = Array.from(
    e.querySelectorAll(Hc)
  );
  return t.unshift(e), t.filter((n) => Na(n) && Wc(n));
}
function Kt(e, t = {}) {
  const {
    isActive: n = ka,
    nextTick: r,
    preventScroll: o = !0,
    selectTextIfInput: a = !0
  } = t;
  if (!e || n(e))
    return -1;
  function s() {
    if (!e) {
      Mi({
        condition: !0,
        message: "[chakra-ui]: can't call focus() on `null` or `undefined` element"
      });
      return;
    }
    if (Uc())
      e.focus({ preventScroll: o });
    else if (e.focus(), o) {
      const i = Gc(e);
      Kc(i);
    }
    if (a) {
      if (Oc(e))
        e.select();
      else if ("setSelectionRange" in e) {
        const i = e;
        i.setSelectionRange(i.value.length, i.value.length);
      }
    }
  }
  return r ? requestAnimationFrame(s) : (s(), -1);
}
var an = null;
function Uc() {
  if (an == null) {
    an = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return an = !0, !0;
        }
      });
    } catch {
    }
  }
  return an;
}
function Gc(e) {
  var t;
  const n = yt(e), r = (t = n.defaultView) != null ? t : window;
  let o = e.parentNode;
  const a = [], s = n.scrollingElement || n.documentElement;
  for (; o instanceof r.HTMLElement && o !== s; )
    (o.offsetHeight < o.scrollHeight || o.offsetWidth < o.scrollWidth) && a.push({
      element: o,
      scrollTop: o.scrollTop,
      scrollLeft: o.scrollLeft
    }), o = o.parentNode;
  return s instanceof r.HTMLElement && a.push({
    element: s,
    scrollTop: s.scrollTop,
    scrollLeft: s.scrollLeft
  }), a;
}
function Kc(e) {
  for (const { element: t, scrollTop: n, scrollLeft: r } of e)
    t.scrollTop = n, t.scrollLeft = r;
}
var qc = process.env.NODE_ENV === "production", Hn = "Invariant failed";
function go(e, t) {
  if (!e) {
    if (qc)
      throw new Error(Hn);
    var n = typeof t == "function" ? t() : t, r = n ? "".concat(Hn, ": ").concat(n) : Hn;
    throw new Error(r);
  }
}
var sn = function(t) {
  var n = t.top, r = t.right, o = t.bottom, a = t.left, s = r - a, i = o - n, c = {
    top: n,
    right: r,
    bottom: o,
    left: a,
    width: s,
    height: i,
    x: a,
    y: n,
    center: {
      x: (r + a) / 2,
      y: (o + n) / 2
    }
  };
  return c;
}, Yc = function(t, n) {
  return {
    top: t.top - n.top,
    left: t.left - n.left,
    bottom: t.bottom + n.bottom,
    right: t.right + n.right
  };
}, bo = function(t, n) {
  return {
    top: t.top + n.top,
    left: t.left + n.left,
    bottom: t.bottom - n.bottom,
    right: t.right - n.right
  };
}, Wn = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, Xc = function(t) {
  var n = t.borderBox, r = t.margin, o = r === void 0 ? Wn : r, a = t.border, s = a === void 0 ? Wn : a, i = t.padding, c = i === void 0 ? Wn : i, l = sn(Yc(n, o)), u = sn(bo(n, s)), d = sn(bo(u, c));
  return {
    marginBox: l,
    borderBox: sn(n),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: s,
    padding: c
  };
}, Oe = function(t) {
  var n = t.slice(0, -2), r = t.slice(-2);
  if (r !== "px")
    return 0;
  var o = Number(n);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? go(!1, "Could not parse value [raw: " + t + ", without suffix: " + n + "]") : go(!1)), o;
}, Zc = function(t, n) {
  var r = {
    top: Oe(n.marginTop),
    right: Oe(n.marginRight),
    bottom: Oe(n.marginBottom),
    left: Oe(n.marginLeft)
  }, o = {
    top: Oe(n.paddingTop),
    right: Oe(n.paddingRight),
    bottom: Oe(n.paddingBottom),
    left: Oe(n.paddingLeft)
  }, a = {
    top: Oe(n.borderTopWidth),
    right: Oe(n.borderRightWidth),
    bottom: Oe(n.borderBottomWidth),
    left: Oe(n.borderLeftWidth)
  };
  return Xc({
    borderBox: t,
    margin: r,
    padding: o,
    border: a
  });
}, Qc = function(t) {
  var n = t.getBoundingClientRect(), r = window.getComputedStyle(t);
  return Zc(n, r);
};
function iy(e) {
  const {
    viewBox: t = "0 0 24 24",
    d: n,
    displayName: r,
    defaultProps: o = {}
  } = e, a = at.toArray(e.path), s = b((i, c) => /* @__PURE__ */ f.jsx(Ve, { ref: c, viewBox: t, ...o, ...i, children: a.length ? a : /* @__PURE__ */ f.jsx("path", { fill: "currentColor", d: n }) }));
  return s.displayName = r, s;
}
function cy(e) {
  const { theme: t } = Oi(), n = Yi();
  return _e(
    () => va(t.direction, {
      ...n,
      ...e
    }),
    [e, t.direction, n]
  );
}
var Jc = {
  duration: 5e3,
  variant: "solid"
}, wt = {
  theme: Li,
  colorMode: "light",
  toggleColorMode: () => {
  },
  setColorMode: () => {
  },
  defaultOptions: Jc,
  forced: !1
};
function ly({
  theme: e = wt.theme,
  colorMode: t = wt.colorMode,
  toggleColorMode: n = wt.toggleColorMode,
  setColorMode: r = wt.setColorMode,
  defaultOptions: o = wt.defaultOptions,
  motionVariants: a,
  toastSpacing: s,
  component: i,
  forced: c
} = wt) {
  const l = {
    colorMode: t,
    setColorMode: r,
    toggleColorMode: n,
    forced: c
  };
  return {
    ToastContainer: () => /* @__PURE__ */ f.jsx(Xi, { theme: e, children: /* @__PURE__ */ f.jsx(Bi.Provider, { value: l, children: /* @__PURE__ */ f.jsx(
      Zi,
      {
        defaultOptions: o,
        motionVariants: a,
        toastSpacing: s,
        component: i
      }
    ) }) }),
    toast: va(e.direction, o)
  };
}
var [el, Cn] = ge({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [tl, Nn] = ge({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  nl,
  uy,
  rl,
  ol
] = jr(), al = b(
  function(t, n) {
    const { getButtonProps: r } = Nn(), o = r(t, n), s = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...Cn().button
    };
    return /* @__PURE__ */ f.jsx(
      g.button,
      {
        ...o,
        className: C("chakra-accordion__button", t.className),
        __css: s
      }
    );
  }
);
al.displayName = "AccordionButton";
function sl(e) {
  const {
    onChange: t,
    defaultIndex: n,
    index: r,
    allowMultiple: o,
    allowToggle: a,
    ...s
  } = e;
  ll(e), ul(e);
  const i = rl(), [c, l] = te(-1);
  de(() => () => {
    l(-1);
  }, []);
  const [u, d] = pt({
    value: r,
    defaultValue() {
      return o ? n ?? [] : n ?? -1;
    },
    onChange: t
  });
  return {
    index: u,
    setIndex: d,
    htmlProps: s,
    getAccordionItemProps: (p) => {
      let y = !1;
      return p !== null && (y = Array.isArray(u) ? u.includes(p) : u === p), { isOpen: y, onChange: (h) => {
        if (p !== null)
          if (o && Array.isArray(u)) {
            const w = h ? u.concat(p) : u.filter((P) => P !== p);
            d(w);
          } else
            h ? d(p) : a && d(-1);
      } };
    },
    focusedIndex: c,
    setFocusedIndex: l,
    descendants: i
  };
}
var [il, Vr] = ge({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function cl(e) {
  const { isDisabled: t, isFocusable: n, id: r, ...o } = e, { getAccordionItemProps: a, setFocusedIndex: s } = Vr(), i = ae(null), c = $e(), l = r ?? c, u = `accordion-button-${l}`, d = `accordion-panel-${l}`;
  dl(e);
  const { register: v, index: p, descendants: y } = ol({
    disabled: t && !n
  }), { isOpen: m, onChange: h } = a(
    p === -1 ? null : p
  );
  fl({ isOpen: m, isDisabled: t });
  const w = () => {
    h == null || h(!0);
  }, P = () => {
    h == null || h(!1);
  }, I = S(() => {
    h == null || h(!m), s(p);
  }, [p, s, m, h]), A = S(
    (D) => {
      const R = {
        ArrowDown: () => {
          const L = y.nextEnabled(p);
          L == null || L.node.focus();
        },
        ArrowUp: () => {
          const L = y.prevEnabled(p);
          L == null || L.node.focus();
        },
        Home: () => {
          const L = y.firstEnabled();
          L == null || L.node.focus();
        },
        End: () => {
          const L = y.lastEnabled();
          L == null || L.node.focus();
        }
      }[D.key];
      R && (D.preventDefault(), R(D));
    },
    [y, p]
  ), T = S(() => {
    s(p);
  }, [s, p]), E = S(
    function(W = {}, R = null) {
      return {
        ...W,
        type: "button",
        ref: Se(v, i, R),
        id: u,
        disabled: !!t,
        "aria-expanded": !!m,
        "aria-controls": d,
        onClick: H(W.onClick, I),
        onFocus: H(W.onFocus, T),
        onKeyDown: H(W.onKeyDown, A)
      };
    },
    [
      u,
      t,
      m,
      I,
      T,
      A,
      d,
      v
    ]
  ), j = S(
    function(W = {}, R = null) {
      return {
        ...W,
        ref: R,
        role: "region",
        id: d,
        "aria-labelledby": u,
        hidden: !m
      };
    },
    [u, m, d]
  );
  return {
    isOpen: m,
    isDisabled: t,
    isFocusable: n,
    onOpen: w,
    onClose: P,
    getButtonProps: E,
    getPanelProps: j,
    htmlProps: o
  };
}
function ll(e) {
  const t = e.index || e.defaultIndex, n = t != null && !Array.isArray(t) && e.allowMultiple;
  Zt({
    condition: !!n,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function ul(e) {
  Zt({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function dl(e) {
  Zt({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function fl(e) {
  Zt({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function vl(e) {
  const { isOpen: t, isDisabled: n } = Nn(), { reduceMotion: r } = Vr(), o = C("chakra-accordion__icon", e.className), a = Cn(), s = {
    opacity: n ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: r ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...a.icon
  };
  return /* @__PURE__ */ f.jsx(
    Ve,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: o,
      __css: s,
      ...e,
      children: /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
vl.displayName = "AccordionIcon";
var pl = b(
  function(t, n) {
    const { children: r, className: o } = t, { htmlProps: a, ...s } = cl(t), c = {
      ...Cn().container,
      overflowAnchor: "none"
    }, l = _e(() => s, [s]);
    return /* @__PURE__ */ f.jsx(tl, { value: l, children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: n,
        ...a,
        className: C("chakra-accordion__item", o),
        __css: c,
        children: typeof r == "function" ? r({
          isExpanded: !!s.isOpen,
          isDisabled: !!s.isDisabled
        }) : r
      }
    ) });
  }
);
pl.displayName = "AccordionItem";
var ut = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, Ht = {
  scale: {
    enter: { scale: 1 },
    exit: { scale: 0.95 }
  },
  fade: {
    enter: { opacity: 1 },
    exit: { opacity: 0 }
  },
  pushLeft: {
    enter: { x: "100%" },
    exit: { x: "-30%" }
  },
  pushRight: {
    enter: { x: "-100%" },
    exit: { x: "30%" }
  },
  pushUp: {
    enter: { y: "100%" },
    exit: { y: "-30%" }
  },
  pushDown: {
    enter: { y: "-100%" },
    exit: { y: "30%" }
  },
  slideLeft: {
    position: { left: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "-100%", y: 0 }
  },
  slideRight: {
    position: { right: 0, top: 0, bottom: 0, width: "100%" },
    enter: { x: 0, y: 0 },
    exit: { x: "100%", y: 0 }
  },
  slideUp: {
    position: { top: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "-100%" }
  },
  slideDown: {
    position: { bottom: 0, left: 0, right: 0, maxWidth: "100vw" },
    enter: { x: 0, y: 0 },
    exit: { x: 0, y: "100%" }
  }
};
function pr(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return Ht.slideRight;
    case "left":
      return Ht.slideLeft;
    case "bottom":
      return Ht.slideDown;
    case "top":
      return Ht.slideUp;
    default:
      return Ht.slideRight;
  }
}
var ft = {
  enter: {
    duration: 0.2,
    ease: ut.easeOut
  },
  exit: {
    duration: 0.1,
    ease: ut.easeIn
  }
}, Ue = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, ml = (e) => e != null && parseInt(e.toString(), 10) > 0, xo = {
  exit: {
    height: { duration: 0.2, ease: ut.ease },
    opacity: { duration: 0.3, ease: ut.ease }
  },
  enter: {
    height: { duration: 0.3, ease: ut.ease },
    opacity: { duration: 0.4, ease: ut.ease }
  }
}, hl = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var a;
    return {
      ...e && { opacity: ml(t) ? 1 : 0 },
      height: t,
      transitionEnd: r == null ? void 0 : r.exit,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Ue.exit(xo.exit, o)
    };
  },
  enter: ({
    animateOpacity: e,
    endingHeight: t,
    transition: n,
    transitionEnd: r,
    delay: o
  }) => {
    var a;
    return {
      ...e && { opacity: 1 },
      height: t,
      transitionEnd: r == null ? void 0 : r.enter,
      transition: (a = n == null ? void 0 : n.enter) != null ? a : Ue.enter(xo.enter, o)
    };
  }
}, Ea = Ot(
  (e, t) => {
    const {
      in: n,
      unmountOnExit: r,
      animateOpacity: o = !0,
      startingHeight: a = 0,
      endingHeight: s = "auto",
      style: i,
      className: c,
      transition: l,
      transitionEnd: u,
      ...d
    } = e, [v, p] = te(!1);
    de(() => {
      const P = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(P);
    }, []), Zt({
      condition: Number(a) > 0 && !!r,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const y = parseFloat(a.toString()) > 0, m = {
      startingHeight: a,
      endingHeight: s,
      animateOpacity: o,
      transition: v ? l : { enter: { duration: 0 } },
      transitionEnd: {
        enter: u == null ? void 0 : u.enter,
        exit: r ? u == null ? void 0 : u.exit : {
          ...u == null ? void 0 : u.exit,
          display: y ? "block" : "none"
        }
      }
    }, h = r ? n : !0, w = n || r ? "enter" : "exit";
    return /* @__PURE__ */ f.jsx(ht, { initial: !1, custom: m, children: h && /* @__PURE__ */ f.jsx(
      Xe.div,
      {
        ref: t,
        ...d,
        className: C("chakra-collapse", c),
        style: {
          overflow: "hidden",
          display: "block",
          ...i
        },
        custom: m,
        variants: hl,
        initial: r ? "exit" : !1,
        animate: w,
        exit: "exit"
      }
    ) });
  }
);
Ea.displayName = "Collapse";
var yl = {
  enter: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 1,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Ue.enter(ft.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: n } = {}) => {
    var r;
    return {
      opacity: 0,
      transition: (r = e == null ? void 0 : e.exit) != null ? r : Ue.exit(ft.exit, n),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Ia = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: yl
}, gl = Ot(function(t, n) {
  const {
    unmountOnExit: r,
    in: o,
    className: a,
    transition: s,
    transitionEnd: i,
    delay: c,
    ...l
  } = t, u = o || r ? "enter" : "exit", d = r ? o && r : !0, v = { transition: s, transitionEnd: i, delay: c };
  return /* @__PURE__ */ f.jsx(ht, { custom: v, children: d && /* @__PURE__ */ f.jsx(
    Xe.div,
    {
      ref: n,
      className: C("chakra-fade", a),
      custom: v,
      ...Ia,
      animate: u,
      ...l
    }
  ) });
});
gl.displayName = "Fade";
var bl = {
  exit: ({ reverse: e, initialScale: t, transition: n, transitionEnd: r, delay: o }) => {
    var a;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { scale: t, ...r == null ? void 0 : r.exit } },
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Ue.exit(ft.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      scale: 1,
      transition: (r = t == null ? void 0 : t.enter) != null ? r : Ue.enter(ft.enter, n),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, Ta = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: bl
}, xl = Ot(
  function(t, n) {
    const {
      unmountOnExit: r,
      in: o,
      reverse: a = !0,
      initialScale: s = 0.95,
      className: i,
      transition: c,
      transitionEnd: l,
      delay: u,
      ...d
    } = t, v = r ? o && r : !0, p = o || r ? "enter" : "exit", y = { initialScale: s, reverse: a, transition: c, transitionEnd: l, delay: u };
    return /* @__PURE__ */ f.jsx(ht, { custom: y, children: v && /* @__PURE__ */ f.jsx(
      Xe.div,
      {
        ref: n,
        className: C("chakra-offset-slide", i),
        ...Ta,
        animate: p,
        custom: y,
        ...d
      }
    ) });
  }
);
xl.displayName = "ScaleFade";
var Sl = {
  initial: ({ offsetX: e, offsetY: t, transition: n, transitionEnd: r, delay: o }) => {
    var a;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (a = n == null ? void 0 : n.exit) != null ? a : Ue.exit(ft.exit, o),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: n }) => {
    var r;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (r = e == null ? void 0 : e.enter) != null ? r : Ue.enter(ft.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: n, transitionEnd: r, reverse: o, delay: a }) => {
    var s;
    const i = { x: t, y: e };
    return {
      opacity: 0,
      transition: (s = n == null ? void 0 : n.exit) != null ? s : Ue.exit(ft.exit, a),
      ...o ? { ...i, transitionEnd: r == null ? void 0 : r.exit } : { transitionEnd: { ...i, ...r == null ? void 0 : r.exit } }
    };
  }
}, mr = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: Sl
}, wl = Ot(
  function(t, n) {
    const {
      unmountOnExit: r,
      in: o,
      reverse: a = !0,
      className: s,
      offsetX: i = 0,
      offsetY: c = 8,
      transition: l,
      transitionEnd: u,
      delay: d,
      ...v
    } = t, p = r ? o && r : !0, y = o || r ? "enter" : "exit", m = {
      offsetX: i,
      offsetY: c,
      reverse: a,
      transition: l,
      transitionEnd: u,
      delay: d
    };
    return /* @__PURE__ */ f.jsx(ht, { custom: m, children: p && /* @__PURE__ */ f.jsx(
      Xe.div,
      {
        ref: n,
        className: C("chakra-offset-slide", s),
        custom: m,
        ...mr,
        animate: y,
        ...v
      }
    ) });
  }
);
wl.displayName = "SlideFade";
var So = {
  exit: {
    duration: 0.15,
    ease: ut.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, Pl = {
  exit: ({ direction: e, transition: t, transitionEnd: n, delay: r }) => {
    var o;
    const { exit: a } = pr({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : Ue.exit(So.exit, r),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: n, delay: r }) => {
    var o;
    const { enter: a } = pr({ direction: e });
    return {
      ...a,
      transition: (o = n == null ? void 0 : n.enter) != null ? o : Ue.enter(So.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, Aa = Ot(function(t, n) {
  const {
    direction: r = "right",
    style: o,
    unmountOnExit: a,
    in: s,
    className: i,
    transition: c,
    transitionEnd: l,
    delay: u,
    motionProps: d,
    ...v
  } = t, p = pr({ direction: r }), y = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), m = a ? s && a : !0, h = s || a ? "enter" : "exit", w = { transitionEnd: l, transition: c, direction: r, delay: u };
  return /* @__PURE__ */ f.jsx(ht, { custom: w, children: m && /* @__PURE__ */ f.jsx(
    Xe.div,
    {
      ...v,
      ref: n,
      initial: "exit",
      className: C("chakra-slide", i),
      animate: h,
      exit: "exit",
      custom: w,
      variants: Pl,
      style: y,
      ...d
    }
  ) });
});
Aa.displayName = "Slide";
var _l = b(
  function(t, n) {
    const { className: r, motionProps: o, ...a } = t, { reduceMotion: s } = Vr(), { getPanelProps: i, isOpen: c } = Nn(), l = i(a, n), u = C("chakra-accordion__panel", r), d = Cn();
    s || delete l.hidden;
    const v = /* @__PURE__ */ f.jsx(g.div, { ...l, __css: d.panel, className: u });
    return s ? v : /* @__PURE__ */ f.jsx(Ea, { in: c, ...o, children: v });
  }
);
_l.displayName = "AccordionPanel";
var kl = b(function({ children: t, reduceMotion: n, ...r }, o) {
  const a = ke("Accordion", r), s = me(r), { htmlProps: i, descendants: c, ...l } = sl(s), u = _e(
    () => ({ ...l, reduceMotion: !!n }),
    [l, n]
  );
  return /* @__PURE__ */ f.jsx(nl, { value: c, children: /* @__PURE__ */ f.jsx(il, { value: u, children: /* @__PURE__ */ f.jsx(el, { value: a, children: /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: o,
      ...i,
      className: C("chakra-accordion", r.className),
      __css: a.root,
      children: t
    }
  ) }) }) });
});
kl.displayName = "Accordion";
function dy() {
  const { isOpen: e, isDisabled: t, onClose: n, onOpen: r } = Nn();
  return { isOpen: e, onClose: n, isDisabled: t, onOpen: r };
}
var Cl = {
  "top-start": {
    top: "0",
    insetStart: "0",
    transform: "translate(-25%, -25%)"
  },
  "top-end": {
    top: "0",
    insetEnd: "0",
    transform: "translate(25%, -25%)"
  },
  "bottom-start": {
    bottom: "0",
    insetStart: "0",
    transform: "translate(-25%, 25%)"
  },
  "bottom-end": {
    bottom: "0",
    insetEnd: "0",
    transform: "translate(25%, 25%)"
  }
}, Nl = b(
  function(t, n) {
    const { placement: r = "bottom-end", className: o, ...a } = t, s = gi(), c = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...Cl[r],
      ...s.badge
    };
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: n,
        ...a,
        className: C("chakra-avatar__badge", o),
        __css: c
      }
    );
  }
);
Nl.displayName = "AvatarBadge";
var fy = b((e, t) => /* @__PURE__ */ f.jsx(g.img, { ref: t, as: bi, className: "chakra-image", ...e }));
function El(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var Il = b(
  function(t, n) {
    const r = ke("Avatar", t), {
      children: o,
      borderColor: a,
      max: s,
      spacing: i = "-0.75rem",
      borderRadius: c = "full",
      ...l
    } = me(t), u = mt(o), d = s != null ? u.slice(0, s) : u, v = s != null ? u.length - s : 0, y = d.reverse().map((w, P) => {
      var I;
      const T = {
        marginEnd: P === 0 ? 0 : i,
        size: t.size,
        borderColor: (I = w.props.borderColor) != null ? I : a,
        showBorder: !0
      };
      return Ae(w, El(T));
    }), m = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse",
      ...r.group
    }, h = {
      borderRadius: c,
      marginStart: i,
      ...xi,
      ...r.excessLabel
    };
    return /* @__PURE__ */ f.jsxs(
      g.div,
      {
        ref: n,
        role: "group",
        __css: m,
        ...l,
        className: C("chakra-avatar__group", t.className),
        children: [
          v > 0 && /* @__PURE__ */ f.jsx(g.span, { className: "chakra-avatar__excess", __css: h, children: `+${v}` }),
          y
        ]
      }
    );
  }
);
Il.displayName = "AvatarGroup";
var [Tl, Hr] = ge({
  name: "BreadcrumbStylesContext",
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
}), ja = b(
  function(t, n) {
    const { isCurrentPage: r, as: o, className: a, href: s, ...i } = t, c = Hr(), l = {
      ref: n,
      as: o,
      className: C("chakra-breadcrumb__link", a),
      ...i
    };
    return r ? /* @__PURE__ */ f.jsx(g.span, { "aria-current": "page", __css: c.link, ...l }) : /* @__PURE__ */ f.jsx(g.a, { __css: c.link, href: s, ...l });
  }
);
ja.displayName = "BreadcrumbLink";
var hr = b(
  function(t, n) {
    const { spacing: r, ...o } = t, a = Hr(), s = {
      mx: r,
      ...a.separator
    };
    return /* @__PURE__ */ f.jsx(
      g.span,
      {
        ref: n,
        role: "presentation",
        ...o,
        __css: s
      }
    );
  }
);
hr.displayName = "BreadcrumbSeparator";
var Al = b(
  function(t, n) {
    const {
      isCurrentPage: r,
      separator: o,
      isLastChild: a,
      spacing: s,
      children: i,
      className: c,
      ...l
    } = t, d = mt(i).map((m) => m.type === ja ? Ae(m, {
      isCurrentPage: r
    }) : m.type === hr ? Ae(m, {
      spacing: s,
      children: m.props.children || o
    }) : m), p = {
      display: "inline-flex",
      alignItems: "center",
      ...Hr().item
    }, y = C("chakra-breadcrumb__list-item", c);
    return /* @__PURE__ */ f.jsxs(g.li, { ref: n, className: y, ...l, __css: p, children: [
      d,
      !a && /* @__PURE__ */ f.jsx(hr, { spacing: s, children: o })
    ] });
  }
);
Al.displayName = "BreadcrumbItem";
var jl = b(
  function(t, n) {
    const r = ke("Breadcrumb", t), o = me(t), {
      children: a,
      spacing: s = "0.5rem",
      separator: i = "/",
      className: c,
      listProps: l,
      ...u
    } = o, d = mt(a), v = d.length, p = d.map(
      (m, h) => Ae(m, {
        separator: i,
        spacing: s,
        isLastChild: v === h + 1
      })
    ), y = C("chakra-breadcrumb", c);
    return /* @__PURE__ */ f.jsx(
      g.nav,
      {
        ref: n,
        "aria-label": "breadcrumb",
        className: y,
        __css: r.container,
        ...u,
        children: /* @__PURE__ */ f.jsx(Tl, { value: r, children: /* @__PURE__ */ f.jsx(
          g.ol,
          {
            className: "chakra-breadcrumb__list",
            ...l,
            __css: {
              display: "flex",
              alignItems: "center",
              ...r.list
            },
            children: p
          }
        ) })
      }
    );
  }
);
jl.displayName = "Breadcrumb";
var Dl = {
  horizontal: {
    "> *:first-of-type:not(:last-of-type)": { borderEndRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderStartRadius: 0 }
  },
  vertical: {
    "> *:first-of-type:not(:last-of-type)": { borderBottomRadius: 0 },
    "> *:not(:first-of-type):not(:last-of-type)": { borderRadius: 0 },
    "> *:not(:first-of-type):last-of-type": { borderTopRadius: 0 }
  }
}, Fl = {
  horizontal: (e) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: e }
  }),
  vertical: (e) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: e }
  })
}, Rl = b(
  function(t, n) {
    const {
      size: r,
      colorScheme: o,
      variant: a,
      className: s,
      spacing: i = "0.5rem",
      isAttached: c,
      isDisabled: l,
      orientation: u = "horizontal",
      ...d
    } = t, v = C("chakra-button__group", s), p = _e(
      () => ({ size: r, colorScheme: o, variant: a, isDisabled: l }),
      [r, o, a, l]
    );
    let y = {
      display: "inline-flex",
      ...c ? Dl[u] : Fl[u](i)
    };
    const m = u === "vertical";
    return /* @__PURE__ */ f.jsx(Si, { value: p, children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: n,
        role: "group",
        __css: y,
        className: v,
        "data-attached": c ? "" : void 0,
        "data-orientation": u,
        flexDir: m ? "column" : void 0,
        ...d
      }
    ) });
  }
);
Rl.displayName = "ButtonGroup";
var Ml = b(
  (e, t) => {
    const { icon: n, children: r, isRound: o, "aria-label": a, ...s } = e, i = n || r, c = Rr(i) ? Ae(i, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ f.jsx(
      wi,
      {
        padding: "0",
        borderRadius: o ? "full" : void 0,
        ref: t,
        "aria-label": a,
        ...s,
        children: c
      }
    );
  }
);
Ml.displayName = "IconButton";
var [Ol, Wr] = pa("Card"), vy = b(function(t, n) {
  const { className: r, ...o } = t, a = Wr();
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      className: C("chakra-card__body", r),
      __css: a.body,
      ...o
    }
  );
}), py = b(
  function(t, n) {
    const { className: r, justify: o, ...a } = t, s = Wr();
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: n,
        className: C("chakra-card__footer", r),
        __css: {
          display: "flex",
          justifyContent: o,
          ...s.footer
        },
        ...a
      }
    );
  }
), my = b(
  function(t, n) {
    const { className: r, ...o } = t, a = Wr();
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: n,
        className: C("chakra-card__header", r),
        __css: a.header,
        ...o
      }
    );
  }
), hy = b(function(t, n) {
  const {
    className: r,
    children: o,
    direction: a = "column",
    justify: s,
    align: i,
    ...c
  } = me(t), l = ke("Card", t);
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      className: C("chakra-card", r),
      __css: {
        display: "flex",
        flexDirection: a,
        justifyContent: s,
        alignItems: i,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...l.container
      },
      ...c,
      children: /* @__PURE__ */ f.jsx(Ol, { value: l, children: o })
    }
  );
}), [Ll, Bl] = ge({
  name: "CheckboxGroupContext",
  strict: !1
});
function wo(e) {
  return e && tt(e) && tt(e.target);
}
function $l(e = {}) {
  const {
    defaultValue: t,
    value: n,
    onChange: r,
    isDisabled: o,
    isNative: a
  } = e, s = Ee(r), [i, c] = pt({
    value: n,
    defaultValue: t || [],
    onChange: s
  }), l = S(
    (d) => {
      if (!i)
        return;
      const v = wo(d) ? d.target.checked : !i.includes(d), p = wo(d) ? d.target.value : d, y = v ? [...i, p] : i.filter((m) => String(m) !== String(p));
      c(y);
    },
    [c, i]
  ), u = S(
    (d = {}) => ({
      ...d,
      [a ? "checked" : "isChecked"]: i.some((p) => String(d.value) === String(p)),
      onChange: l
    }),
    [l, a, i]
  );
  return {
    value: i,
    isDisabled: o,
    onChange: l,
    setValue: c,
    getCheckboxProps: u
  };
}
function Vl(e) {
  const { colorScheme: t, size: n, variant: r, children: o, isDisabled: a } = e, { value: s, onChange: i } = $l(e), c = _e(
    () => ({
      size: n,
      onChange: i,
      colorScheme: t,
      value: s,
      variant: r,
      isDisabled: a
    }),
    [n, i, t, s, r, a]
  );
  return /* @__PURE__ */ f.jsx(Ll, { value: c, children: o });
}
Vl.displayName = "CheckboxGroup";
function Hl(e) {
  const [t, n] = te(e), [r, o] = te(!1);
  return e !== t && (o(!0), n(e)), r;
}
function Wl(e) {
  return /* @__PURE__ */ f.jsx(
    g.svg,
    {
      width: "1.2em",
      viewBox: "0 0 12 10",
      style: {
        fill: "none",
        strokeWidth: 2,
        stroke: "currentColor",
        strokeDasharray: 16
      },
      ...e,
      children: /* @__PURE__ */ f.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function zl(e) {
  return /* @__PURE__ */ f.jsx(
    g.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...e,
      children: /* @__PURE__ */ f.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function Ul(e) {
  const { isIndeterminate: t, isChecked: n, ...r } = e, o = t ? zl : Wl;
  return n || t ? /* @__PURE__ */ f.jsx(
    g.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: /* @__PURE__ */ f.jsx(o, { ...r })
    }
  ) : null;
}
var [Gl, Da] = ge({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [Kl, gt] = ge({
  strict: !1,
  name: "FormControlContext"
});
function ql(e) {
  const {
    id: t,
    isRequired: n,
    isInvalid: r,
    isDisabled: o,
    isReadOnly: a,
    ...s
  } = e, i = $e(), c = t || `field-${i}`, l = `${c}-label`, u = `${c}-feedback`, d = `${c}-helptext`, [v, p] = te(!1), [y, m] = te(!1), [h, w] = te(!1), P = S(
    (j = {}, D = null) => ({
      id: d,
      ...j,
      ref: Se(D, (W) => {
        W && m(!0);
      })
    }),
    [d]
  ), I = S(
    (j = {}, D = null) => ({
      ...j,
      ref: D,
      "data-focus": pe(h),
      "data-disabled": pe(o),
      "data-invalid": pe(r),
      "data-readonly": pe(a),
      id: j.id !== void 0 ? j.id : l,
      htmlFor: j.htmlFor !== void 0 ? j.htmlFor : c
    }),
    [c, o, h, r, a, l]
  ), A = S(
    (j = {}, D = null) => ({
      id: u,
      ...j,
      ref: Se(D, (W) => {
        W && p(!0);
      }),
      "aria-live": "polite"
    }),
    [u]
  ), T = S(
    (j = {}, D = null) => ({
      ...j,
      ...s,
      ref: D,
      role: "group"
    }),
    [s]
  ), E = S(
    (j = {}, D = null) => ({
      ...j,
      ref: D,
      role: "presentation",
      "aria-hidden": !0,
      children: j.children || "*"
    }),
    []
  );
  return {
    isRequired: !!n,
    isInvalid: !!r,
    isReadOnly: !!a,
    isDisabled: !!o,
    isFocused: !!h,
    onFocus: () => w(!0),
    onBlur: () => w(!1),
    hasFeedbackText: v,
    setHasFeedbackText: p,
    hasHelpText: y,
    setHasHelpText: m,
    id: c,
    labelId: l,
    feedbackId: u,
    helpTextId: d,
    htmlProps: s,
    getHelpTextProps: P,
    getErrorMessageProps: A,
    getRootProps: T,
    getLabelProps: I,
    getRequiredIndicatorProps: E
  };
}
var Yl = b(
  function(t, n) {
    const r = ke("Form", t), o = me(t), {
      getRootProps: a,
      htmlProps: s,
      ...i
    } = ql(o), c = C("chakra-form-control", t.className);
    return /* @__PURE__ */ f.jsx(Kl, { value: i, children: /* @__PURE__ */ f.jsx(Gl, { value: r, children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...a({}, n),
        className: c,
        __css: r.container
      }
    ) }) });
  }
);
Yl.displayName = "FormControl";
var Xl = b(
  function(t, n) {
    const r = gt(), o = Da(), a = C("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...r == null ? void 0 : r.getHelpTextProps(t, n),
        __css: o.helperText,
        className: a
      }
    );
  }
);
Xl.displayName = "FormHelperText";
var [Zl, Ql] = ge({
  name: "FormErrorStylesContext",
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
}), Jl = b(
  (e, t) => {
    const n = ke("FormError", e), r = me(e), o = gt();
    return o != null && o.isInvalid ? /* @__PURE__ */ f.jsx(Zl, { value: n, children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...o == null ? void 0 : o.getErrorMessageProps(r, t),
        className: C("chakra-form__error-message", e.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...n.text
        }
      }
    ) }) : null;
  }
);
Jl.displayName = "FormErrorMessage";
var eu = b((e, t) => {
  const n = Ql(), r = gt();
  if (!(r != null && r.isInvalid))
    return null;
  const o = C("chakra-form__error-icon", e.className);
  return /* @__PURE__ */ f.jsx(
    Ve,
    {
      ref: t,
      "aria-hidden": !0,
      ...e,
      __css: n.icon,
      className: o,
      children: /* @__PURE__ */ f.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
eu.displayName = "FormErrorIcon";
var tu = b(function(t, n) {
  var r;
  const o = Be("FormLabel", t), a = me(t), {
    className: s,
    children: i,
    requiredIndicator: c = /* @__PURE__ */ f.jsx(Fa, {}),
    optionalIndicator: l = null,
    ...u
  } = a, d = gt(), v = (r = d == null ? void 0 : d.getLabelProps(u, n)) != null ? r : { ref: n, ...u };
  return /* @__PURE__ */ f.jsxs(
    g.label,
    {
      ...v,
      className: C("chakra-form__label", a.className),
      __css: {
        display: "block",
        textAlign: "start",
        ...o
      },
      children: [
        i,
        d != null && d.isRequired ? c : l
      ]
    }
  );
});
tu.displayName = "FormLabel";
var Fa = b(
  function(t, n) {
    const r = gt(), o = Da();
    if (!(r != null && r.isRequired))
      return null;
    const a = C("chakra-form__required-indicator", t.className);
    return /* @__PURE__ */ f.jsx(
      g.span,
      {
        ...r == null ? void 0 : r.getRequiredIndicatorProps(t, n),
        __css: o.requiredIndicator,
        className: a
      }
    );
  }
);
Fa.displayName = "RequiredIndicator";
function zr(e) {
  const { isDisabled: t, isInvalid: n, isReadOnly: r, isRequired: o, ...a } = Ur(e);
  return {
    ...a,
    disabled: t,
    readOnly: r,
    required: o,
    "aria-invalid": Fe(n),
    "aria-required": Fe(o),
    "aria-readonly": Fe(r)
  };
}
function Ur(e) {
  var t, n, r;
  const o = gt(), {
    id: a,
    disabled: s,
    readOnly: i,
    required: c,
    isRequired: l,
    isInvalid: u,
    isReadOnly: d,
    isDisabled: v,
    onFocus: p,
    onBlur: y,
    ...m
  } = e, h = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && h.push(o.feedbackId), o != null && o.hasHelpText && h.push(o.helpTextId), {
    ...m,
    "aria-describedby": h.join(" ") || void 0,
    id: a ?? (o == null ? void 0 : o.id),
    isDisabled: (t = s ?? v) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (n = i ?? d) != null ? n : o == null ? void 0 : o.isReadOnly,
    isRequired: (r = c ?? l) != null ? r : o == null ? void 0 : o.isRequired,
    isInvalid: u ?? (o == null ? void 0 : o.isInvalid),
    onFocus: H(o == null ? void 0 : o.onFocus, p),
    onBlur: H(o == null ? void 0 : o.onBlur, y)
  };
}
var Gr = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, nu = g("span", {
  baseStyle: Gr
});
nu.displayName = "VisuallyHidden";
var ru = g("input", {
  baseStyle: Gr
});
ru.displayName = "VisuallyHiddenInput";
var Po = !1, tn = null, vt = !1, yr = !1, gr = /* @__PURE__ */ new Set();
function Kr(e, t) {
  gr.forEach((n) => n(e, t));
}
var ou = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function au(e) {
  return !(e.metaKey || !ou && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function _o(e) {
  vt = !0, au(e) && (tn = "keyboard", Kr("keyboard", e));
}
function Pt(e) {
  if (tn = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    vt = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let n = !1;
    try {
      n = t.matches(":focus-visible");
    } catch {
    }
    if (n)
      return;
    Kr("pointer", e);
  }
}
function su(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function iu(e) {
  su(e) && (vt = !0, tn = "virtual");
}
function cu(e) {
  e.target === window || e.target === document || (!vt && !yr && (tn = "virtual", Kr("virtual", e)), vt = !1, yr = !1);
}
function lu() {
  vt = !1, yr = !0;
}
function ko() {
  return tn !== "pointer";
}
function uu() {
  if (typeof window > "u" || Po)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...n) {
    vt = !0, e.apply(this, n);
  }, document.addEventListener("keydown", _o, !0), document.addEventListener("keyup", _o, !0), document.addEventListener("click", iu, !0), window.addEventListener("focus", cu, !0), window.addEventListener("blur", lu, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", Pt, !0), document.addEventListener("pointermove", Pt, !0), document.addEventListener("pointerup", Pt, !0)) : (document.addEventListener("mousedown", Pt, !0), document.addEventListener("mousemove", Pt, !0), document.addEventListener("mouseup", Pt, !0)), Po = !0;
}
function Ra(e) {
  uu(), e(ko());
  const t = () => e(ko());
  return gr.add(t), () => {
    gr.delete(t);
  };
}
function du(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function Ma(e = {}) {
  const t = Ur(e), {
    isDisabled: n,
    isReadOnly: r,
    isRequired: o,
    isInvalid: a,
    id: s,
    onBlur: i,
    onFocus: c,
    "aria-describedby": l
  } = t, {
    defaultChecked: u,
    isChecked: d,
    isFocusable: v,
    onChange: p,
    isIndeterminate: y,
    name: m,
    value: h,
    tabIndex: w = void 0,
    "aria-label": P,
    "aria-labelledby": I,
    "aria-invalid": A,
    ...T
  } = e, E = du(T, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]), j = Ee(p), D = Ee(i), W = Ee(c), [R, L] = te(!1), [ee, Q] = te(!1), [ie, ue] = te(!1), [ne, z] = te(!1);
  de(() => Ra(L), []);
  const B = ae(null), [le, x] = te(!0), [_, Y] = te(!!u), U = d !== void 0, N = U ? d : _, F = S(
    (O) => {
      if (r || n) {
        O.preventDefault();
        return;
      }
      U || Y(N ? O.target.checked : y ? !0 : O.target.checked), j == null || j(O);
    },
    [
      r,
      n,
      N,
      U,
      y,
      j
    ]
  );
  It(() => {
    B.current && (B.current.indeterminate = !!y);
  }, [y]), Qt(() => {
    n && Q(!1);
  }, [n, Q]), It(() => {
    const O = B.current;
    O != null && O.form && (O.form.onreset = () => {
      Y(!!u);
    });
  }, []);
  const X = n && !v, Z = S(
    (O) => {
      O.key === " " && z(!0);
    },
    [z]
  ), J = S(
    (O) => {
      O.key === " " && z(!1);
    },
    [z]
  );
  It(() => {
    if (!B.current)
      return;
    B.current.checked !== N && Y(B.current.checked);
  }, [B.current]);
  const k = S(
    (O = {}, oe = null) => {
      const we = (be) => {
        ee && be.preventDefault(), z(!0);
      };
      return {
        ...O,
        ref: oe,
        "data-active": pe(ne),
        "data-hover": pe(ie),
        "data-checked": pe(N),
        "data-focus": pe(ee),
        "data-focus-visible": pe(ee && R),
        "data-indeterminate": pe(y),
        "data-disabled": pe(n),
        "data-invalid": pe(a),
        "data-readonly": pe(r),
        "aria-hidden": !0,
        onMouseDown: H(O.onMouseDown, we),
        onMouseUp: H(O.onMouseUp, () => z(!1)),
        onMouseEnter: H(
          O.onMouseEnter,
          () => ue(!0)
        ),
        onMouseLeave: H(
          O.onMouseLeave,
          () => ue(!1)
        )
      };
    },
    [
      ne,
      N,
      n,
      ee,
      R,
      ie,
      y,
      a,
      r
    ]
  ), M = S(
    (O = {}, oe = null) => ({
      ...E,
      ...O,
      ref: Se(oe, (we) => {
        we && x(we.tagName === "LABEL");
      }),
      onClick: H(O.onClick, () => {
        var we;
        le || ((we = B.current) == null || we.click(), requestAnimationFrame(() => {
          var be;
          (be = B.current) == null || be.focus({ preventScroll: !0 });
        }));
      }),
      "data-disabled": pe(n),
      "data-checked": pe(N),
      "data-invalid": pe(a)
    }),
    [E, n, N, a, le]
  ), G = S(
    (O = {}, oe = null) => ({
      ...O,
      ref: Se(B, oe),
      type: "checkbox",
      name: m,
      value: h,
      id: s,
      tabIndex: w,
      onChange: H(O.onChange, F),
      onBlur: H(
        O.onBlur,
        D,
        () => Q(!1)
      ),
      onFocus: H(
        O.onFocus,
        W,
        () => Q(!0)
      ),
      onKeyDown: H(O.onKeyDown, Z),
      onKeyUp: H(O.onKeyUp, J),
      required: o,
      checked: N,
      disabled: X,
      readOnly: r,
      "aria-label": P,
      "aria-labelledby": I,
      "aria-invalid": A ? !!A : a,
      "aria-describedby": l,
      "aria-disabled": n,
      style: Gr
    }),
    [
      m,
      h,
      s,
      F,
      D,
      W,
      Z,
      J,
      o,
      N,
      X,
      r,
      P,
      I,
      A,
      a,
      l,
      n,
      w
    ]
  ), K = S(
    (O = {}, oe = null) => ({
      ...O,
      ref: oe,
      onMouseDown: H(O.onMouseDown, fu),
      "data-disabled": pe(n),
      "data-checked": pe(N),
      "data-invalid": pe(a)
    }),
    [N, n, a]
  );
  return {
    state: {
      isInvalid: a,
      isFocused: ee,
      isChecked: N,
      isActive: ne,
      isHovered: ie,
      isIndeterminate: y,
      isDisabled: n,
      isReadOnly: r,
      isRequired: o
    },
    getRootProps: M,
    getCheckboxProps: k,
    getInputProps: G,
    getLabelProps: K,
    htmlProps: E
  };
}
function fu(e) {
  e.preventDefault(), e.stopPropagation();
}
var vu = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
}, pu = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
}, mu = Ze({
  from: {
    opacity: 0,
    strokeDashoffset: 16,
    transform: "scale(0.95)"
  },
  to: {
    opacity: 1,
    strokeDashoffset: 0,
    transform: "scale(1)"
  }
}), hu = Ze({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}), yu = Ze({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
}), gu = b(function(t, n) {
  const r = Bl(), o = { ...r, ...t }, a = ke("Checkbox", o), s = me(t), {
    spacing: i = "0.5rem",
    className: c,
    children: l,
    iconColor: u,
    iconSize: d,
    icon: v = /* @__PURE__ */ f.jsx(Ul, {}),
    isChecked: p,
    isDisabled: y = r == null ? void 0 : r.isDisabled,
    onChange: m,
    inputProps: h,
    ...w
  } = s;
  let P = p;
  r != null && r.value && s.value && (P = r.value.includes(s.value));
  let I = m;
  r != null && r.onChange && s.value && (I = Fr(r.onChange, m));
  const {
    state: A,
    getInputProps: T,
    getCheckboxProps: E,
    getLabelProps: j,
    getRootProps: D
  } = Ma({
    ...w,
    isDisabled: y,
    isChecked: P,
    onChange: I
  }), W = Hl(A.isChecked), R = _e(
    () => ({
      animation: W ? A.isIndeterminate ? `${hu} 20ms linear, ${yu} 200ms linear` : `${mu} 200ms linear` : void 0,
      fontSize: d,
      color: u,
      ...a.icon
    }),
    [u, d, W, A.isIndeterminate, a.icon]
  ), L = Ae(v, {
    __css: R,
    isIndeterminate: A.isIndeterminate,
    isChecked: A.isChecked
  });
  return /* @__PURE__ */ f.jsxs(
    g.label,
    {
      __css: { ...pu, ...a.container },
      className: C("chakra-checkbox", c),
      ...D(),
      children: [
        /* @__PURE__ */ f.jsx(
          "input",
          {
            className: "chakra-checkbox__input",
            ...T(h, n)
          }
        ),
        /* @__PURE__ */ f.jsx(
          g.span,
          {
            __css: { ...vu, ...a.control },
            className: "chakra-checkbox__control",
            ...E(),
            children: L
          }
        ),
        l && /* @__PURE__ */ f.jsx(
          g.span,
          {
            className: "chakra-checkbox__label",
            ...j(),
            __css: {
              marginStart: i,
              ...a.label
            },
            children: l
          }
        )
      ]
    }
  );
});
gu.displayName = "Checkbox";
var bu = (e) => {
  const {
    type: t = "checkbox",
    _hover: n,
    _invalid: r,
    _disabled: o,
    _focus: a,
    _checked: s,
    _child: i = { opacity: 0 },
    _checkedAndChild: c = { opacity: 1 },
    _checkedAndDisabled: l,
    _checkedAndFocus: u,
    _checkedAndHover: d,
    children: v,
    ...p
  } = e, y = `input[type=${t}]:checked:disabled + &`, m = `input[type=${t}]:checked:hover:not(:disabled) + &`, h = `input[type=${t}]:checked:focus + &`, w = `input[type=${t}]:disabled + &`, P = `input[type=${t}]:focus + &`, I = `input[type=${t}]:hover:not(:disabled):not(:checked) + &`, A = `input[type=${t}]:checked + &, input[type=${t}][aria-checked=mixed] + &`, T = `input[type=${t}][aria-invalid=true] + &`, E = "& > *";
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...p,
      "aria-hidden": !0,
      __css: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transitionProperty: "common",
        transitionDuration: "fast",
        flexShrink: 0,
        [P]: a,
        [I]: n,
        [w]: o,
        [T]: r,
        [y]: l,
        [h]: u,
        [m]: d,
        [E]: i,
        [A]: {
          ...s,
          [E]: c
        }
      },
      children: v
    }
  );
};
bu.displayName = "ControlBox";
function xu(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function qr(e, t) {
  let n = xu(e);
  const r = 10 ** (t ?? 10);
  return n = Math.round(n * r) / r, t ? n.toFixed(t) : n.toString();
}
function br(e) {
  if (!Number.isFinite(e))
    return 0;
  let t = 1, n = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, n += 1;
  return n;
}
function bn(e, t, n) {
  return (e - t) * 100 / (n - t);
}
function Oa(e, t, n) {
  return (n - t) * e + t;
}
function xr(e, t, n) {
  const r = Math.round((e - t) / n) * n + t, o = br(n);
  return qr(r, o);
}
function At(e, t, n) {
  return e == null ? e : (n < t && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(e, t), n));
}
function Su(e = {}) {
  const {
    onChange: t,
    precision: n,
    defaultValue: r,
    value: o,
    step: a = 1,
    min: s = Number.MIN_SAFE_INTEGER,
    max: i = Number.MAX_SAFE_INTEGER,
    keepWithinRange: c = !0
  } = e, l = Ee(t), [u, d] = te(() => {
    var R;
    return r == null ? "" : (R = zn(r, a, n)) != null ? R : "";
  }), v = typeof o < "u", p = v ? o : u, y = La(et(p), a), m = n ?? y, h = S(
    (R) => {
      R !== p && (v || d(R.toString()), l == null || l(R.toString(), et(R)));
    },
    [l, v, p]
  ), w = S(
    (R) => {
      let L = R;
      return c && (L = At(L, s, i)), qr(L, m);
    },
    [m, c, i, s]
  ), P = S(
    (R = a) => {
      let L;
      p === "" ? L = et(R) : L = et(p) + R, L = w(L), h(L);
    },
    [w, a, h, p]
  ), I = S(
    (R = a) => {
      let L;
      p === "" ? L = et(-R) : L = et(p) - R, L = w(L), h(L);
    },
    [w, a, h, p]
  ), A = S(() => {
    var R;
    let L;
    r == null ? L = "" : L = (R = zn(r, a, n)) != null ? R : s, h(L);
  }, [r, n, a, h, s]), T = S(
    (R) => {
      var L;
      const ee = (L = zn(R, a, m)) != null ? L : s;
      h(ee);
    },
    [m, a, h, s]
  ), E = et(p);
  return {
    isOutOfRange: E > i || E < s,
    isAtMax: E === i,
    isAtMin: E === s,
    precision: m,
    value: p,
    valueAsNumber: E,
    update: h,
    reset: A,
    increment: P,
    decrement: I,
    clamp: w,
    cast: T,
    setValue: d
  };
}
function et(e) {
  return parseFloat(e.toString().replace(/[^\w.-]+/g, ""));
}
function La(e, t) {
  return Math.max(br(t), br(e));
}
function zn(e, t, n) {
  const r = et(e);
  if (Number.isNaN(r))
    return;
  const o = La(r, t);
  return qr(r, n ?? o);
}
var [wu, Yr] = ge({
  name: "EditableStylesContext",
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `
}), [Pu, nn] = ge({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});
function yy() {
  const { isEditing: e, onSubmit: t, onCancel: n, onEdit: r, isDisabled: o } = nn();
  return {
    isEditing: e,
    onSubmit: t,
    onCancel: n,
    onEdit: r,
    isDisabled: o
  };
}
var Xr = {
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent"
}, _u = b(
  function(t, n) {
    const { getInputProps: r } = nn(), o = Yr(), a = r(t, n), s = C("chakra-editable__input", t.className);
    return /* @__PURE__ */ f.jsx(
      g.input,
      {
        ...a,
        __css: {
          outline: 0,
          ...Xr,
          ...o.input
        },
        className: s
      }
    );
  }
);
_u.displayName = "EditableInput";
var ku = b(
  function(t, n) {
    const { getPreviewProps: r } = nn(), o = Yr(), a = r(t, n), s = C("chakra-editable__preview", t.className);
    return /* @__PURE__ */ f.jsx(
      g.span,
      {
        ...a,
        __css: {
          cursor: "text",
          display: "inline-block",
          ...Xr,
          ...o.preview
        },
        className: s
      }
    );
  }
);
ku.displayName = "EditablePreview";
var Cu = b(
  function(t, n) {
    const { getTextareaProps: r } = nn(), o = Yr(), a = r(t, n), s = C("chakra-editable__textarea", t.className);
    return /* @__PURE__ */ f.jsx(
      g.textarea,
      {
        ...a,
        __css: {
          outline: 0,
          ...Xr,
          ...o.textarea
        },
        className: s
      }
    );
  }
);
Cu.displayName = "EditableTextarea";
function Nu(e) {
  return "current" in e;
}
var Ba = () => typeof window < "u";
function Eu() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var Iu = (e) => Ba() && e.test(navigator.vendor), Tu = (e) => Ba() && e.test(Eu()), Au = () => Tu(/mac|iphone|ipad|ipod/i), ju = () => Au() && Iu(/apple/i);
function $a(e) {
  const { ref: t, elements: n, enabled: r } = e, o = () => {
    var a, s;
    return (s = (a = t.current) == null ? void 0 : a.ownerDocument) != null ? s : document;
  };
  zt(o, "pointerdown", (a) => {
    if (!ju() || !r)
      return;
    const s = a.target, c = (n ?? [t]).some((l) => {
      const u = Nu(l) ? l.current : l;
      return (u == null ? void 0 : u.contains(s)) || u === s;
    });
    o().activeElement !== s && c && (a.preventDefault(), s.focus());
  });
}
function Co(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function Du(e = {}) {
  const {
    onChange: t,
    onCancel: n,
    onSubmit: r,
    onBlur: o,
    value: a,
    isDisabled: s,
    defaultValue: i,
    startWithEditView: c,
    isPreviewFocusable: l = !0,
    submitOnBlur: u = !0,
    selectAllOnFocus: d = !0,
    placeholder: v,
    onEdit: p,
    finalFocusRef: y,
    ...m
  } = e, h = Ee(p), w = !!(c && !s), [P, I] = te(w), [A, T] = pt({
    defaultValue: i || "",
    value: a,
    onChange: t
  }), [E, j] = te(A), D = ae(null), W = ae(null), R = ae(null), L = ae(null), ee = ae(null);
  $a({
    ref: D,
    enabled: P,
    elements: [L, ee]
  });
  const Q = !P && !s;
  It(() => {
    var k, M;
    P && ((k = D.current) == null || k.focus(), d && ((M = D.current) == null || M.select()));
  }, []), Qt(() => {
    var k, M, G, K;
    if (!P) {
      y ? (k = y.current) == null || k.focus() : (M = R.current) == null || M.focus();
      return;
    }
    (G = D.current) == null || G.focus(), d && ((K = D.current) == null || K.select()), h == null || h();
  }, [P, h, d]);
  const ie = S(() => {
    Q && I(!0);
  }, [Q]), ue = S(() => {
    j(A);
  }, [A]), ne = S(() => {
    I(!1), T(E), n == null || n(E), o == null || o(E);
  }, [n, o, T, E]), z = S(() => {
    I(!1), j(A), r == null || r(A), o == null || o(E);
  }, [A, r, o, E]);
  de(() => {
    if (P)
      return;
    const k = D.current;
    (k == null ? void 0 : k.ownerDocument.activeElement) === k && (k == null || k.blur());
  }, [P]);
  const B = S(
    (k) => {
      T(k.currentTarget.value);
    },
    [T]
  ), le = S(
    (k) => {
      const M = k.key, K = {
        Escape: ne,
        Enter: (ye) => {
          !ye.shiftKey && !ye.metaKey && z();
        }
      }[M];
      K && (k.preventDefault(), K(k));
    },
    [ne, z]
  ), x = S(
    (k) => {
      const M = k.key, K = {
        Escape: ne
      }[M];
      K && (k.preventDefault(), K(k));
    },
    [ne]
  ), _ = A.length === 0, Y = S(
    (k) => {
      var M;
      if (!P)
        return;
      const G = k.currentTarget.ownerDocument, K = (M = k.relatedTarget) != null ? M : G.activeElement, ye = Co(L.current, K), O = Co(ee.current, K);
      !ye && !O && (u ? z() : ne());
    },
    [u, z, ne, P]
  ), U = S(
    (k = {}, M = null) => {
      const G = Q && l ? 0 : void 0;
      return {
        ...k,
        ref: Se(M, W),
        children: _ ? v : A,
        hidden: P,
        "aria-disabled": Fe(s),
        tabIndex: G,
        onFocus: H(k.onFocus, ie, ue)
      };
    },
    [
      s,
      P,
      Q,
      l,
      _,
      ie,
      ue,
      v,
      A
    ]
  ), N = S(
    (k = {}, M = null) => ({
      ...k,
      hidden: !P,
      placeholder: v,
      ref: Se(M, D),
      disabled: s,
      "aria-disabled": Fe(s),
      value: A,
      onBlur: H(k.onBlur, Y),
      onChange: H(k.onChange, B),
      onKeyDown: H(k.onKeyDown, le),
      onFocus: H(k.onFocus, ue)
    }),
    [
      s,
      P,
      Y,
      B,
      le,
      ue,
      v,
      A
    ]
  ), F = S(
    (k = {}, M = null) => ({
      ...k,
      hidden: !P,
      placeholder: v,
      ref: Se(M, D),
      disabled: s,
      "aria-disabled": Fe(s),
      value: A,
      onBlur: H(k.onBlur, Y),
      onChange: H(k.onChange, B),
      onKeyDown: H(k.onKeyDown, x),
      onFocus: H(k.onFocus, ue)
    }),
    [
      s,
      P,
      Y,
      B,
      x,
      ue,
      v,
      A
    ]
  ), X = S(
    (k = {}, M = null) => ({
      "aria-label": "Edit",
      ...k,
      type: "button",
      onClick: H(k.onClick, ie),
      ref: Se(M, R),
      disabled: s
    }),
    [ie, s]
  ), Z = S(
    (k = {}, M = null) => ({
      ...k,
      "aria-label": "Submit",
      ref: Se(ee, M),
      type: "button",
      onClick: H(k.onClick, z),
      disabled: s
    }),
    [z, s]
  ), J = S(
    (k = {}, M = null) => ({
      "aria-label": "Cancel",
      id: "cancel",
      ...k,
      ref: Se(L, M),
      type: "button",
      onClick: H(k.onClick, ne),
      disabled: s
    }),
    [ne, s]
  );
  return {
    isEditing: P,
    isDisabled: s,
    isValueEmpty: _,
    value: A,
    onEdit: ie,
    onCancel: ne,
    onSubmit: z,
    getPreviewProps: U,
    getInputProps: N,
    getTextareaProps: F,
    getEditButtonProps: X,
    getSubmitButtonProps: Z,
    getCancelButtonProps: J,
    htmlProps: m
  };
}
var Fu = b(function(t, n) {
  const r = ke("Editable", t), o = me(t), { htmlProps: a, ...s } = Du(o), { isEditing: i, onSubmit: c, onCancel: l, onEdit: u } = s, d = C("chakra-editable", t.className), v = Ut(t.children, {
    isEditing: i,
    onSubmit: c,
    onCancel: l,
    onEdit: u
  });
  return /* @__PURE__ */ f.jsx(Pu, { value: s, children: /* @__PURE__ */ f.jsx(wu, { value: r, children: /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      ...a,
      className: d,
      children: v
    }
  ) }) });
});
Fu.displayName = "Editable";
function gy() {
  const {
    isEditing: e,
    getEditButtonProps: t,
    getCancelButtonProps: n,
    getSubmitButtonProps: r
  } = nn();
  return {
    isEditing: e,
    getEditButtonProps: t,
    getCancelButtonProps: n,
    getSubmitButtonProps: r
  };
}
function Ru(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), o, a;
  for (a = 0; a < r.length; a++)
    o = r[a], !(t.indexOf(o) >= 0) && (n[o] = e[o]);
  return n;
}
var Sr = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Un, No;
function Mu() {
  if (No)
    return Un;
  No = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var s = {}, i = 0; i < 10; i++)
        s["_" + String.fromCharCode(i)] = i;
      var c = Object.getOwnPropertyNames(s).map(function(u) {
        return s[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Un = o() ? Object.assign : function(a, s) {
    for (var i, c = r(a), l, u = 1; u < arguments.length; u++) {
      i = Object(arguments[u]);
      for (var d in i)
        t.call(i, d) && (c[d] = i[d]);
      if (e) {
        l = e(i);
        for (var v = 0; v < l.length; v++)
          n.call(i, l[v]) && (c[l[v]] = i[l[v]]);
      }
    }
    return c;
  }, Un;
}
var Gn, Eo;
function Zr() {
  if (Eo)
    return Gn;
  Eo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Gn = e, Gn;
}
var Kn, Io;
function Va() {
  return Io || (Io = 1, Kn = Function.call.bind(Object.prototype.hasOwnProperty)), Kn;
}
var qn, To;
function Ou() {
  if (To)
    return qn;
  To = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Zr(), n = {}, r = Va();
    e = function(a) {
      var s = "Warning: " + a;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function o(a, s, i, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (r(a, u)) {
          var d;
          try {
            if (typeof a[u] != "function") {
              var v = Error(
                (c || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw v.name = "Invariant Violation", v;
            }
            d = a[u](s, u, c, i, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + i + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var p = l ? l() : "";
            e(
              "Failed " + i + " type: " + d.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, qn = o, qn;
}
var Yn, Ao;
function Lu() {
  if (Ao)
    return Yn;
  Ao = 1;
  var e = ia, t = Mu(), n = Zr(), r = Va(), o = Ou(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(i) {
    var c = "Warning: " + i;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Yn = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(x) {
      var _ = x && (l && x[l] || x[u]);
      if (typeof _ == "function")
        return _;
    }
    var v = "<<anonymous>>", p = {
      array: w("array"),
      bigint: w("bigint"),
      bool: w("boolean"),
      func: w("function"),
      number: w("number"),
      object: w("object"),
      string: w("string"),
      symbol: w("symbol"),
      any: P(),
      arrayOf: I,
      element: A(),
      elementType: T(),
      instanceOf: E,
      node: R(),
      objectOf: D,
      oneOf: j,
      oneOfType: W,
      shape: ee,
      exact: Q
    };
    function y(x, _) {
      return x === _ ? x !== 0 || 1 / x === 1 / _ : x !== x && _ !== _;
    }
    function m(x, _) {
      this.message = x, this.data = _ && typeof _ == "object" ? _ : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function h(x) {
      if (process.env.NODE_ENV !== "production")
        var _ = {}, Y = 0;
      function U(F, X, Z, J, k, M, G) {
        if (J = J || v, M = M || Z, G !== n) {
          if (c) {
            var K = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw K.name = "Invariant Violation", K;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ye = J + ":" + Z;
            !_[ye] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + J + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), _[ye] = !0, Y++);
          }
        }
        return X[Z] == null ? F ? X[Z] === null ? new m("The " + k + " `" + M + "` is marked as required " + ("in `" + J + "`, but its value is `null`.")) : new m("The " + k + " `" + M + "` is marked as required in " + ("`" + J + "`, but its value is `undefined`.")) : null : x(X, Z, J, k, M);
      }
      var N = U.bind(null, !1);
      return N.isRequired = U.bind(null, !0), N;
    }
    function w(x) {
      function _(Y, U, N, F, X, Z) {
        var J = Y[U], k = ne(J);
        if (k !== x) {
          var M = z(J);
          return new m(
            "Invalid " + F + " `" + X + "` of type " + ("`" + M + "` supplied to `" + N + "`, expected ") + ("`" + x + "`."),
            { expectedType: x }
          );
        }
        return null;
      }
      return h(_);
    }
    function P() {
      return h(s);
    }
    function I(x) {
      function _(Y, U, N, F, X) {
        if (typeof x != "function")
          return new m("Property `" + X + "` of component `" + N + "` has invalid PropType notation inside arrayOf.");
        var Z = Y[U];
        if (!Array.isArray(Z)) {
          var J = ne(Z);
          return new m("Invalid " + F + " `" + X + "` of type " + ("`" + J + "` supplied to `" + N + "`, expected an array."));
        }
        for (var k = 0; k < Z.length; k++) {
          var M = x(Z, k, N, F, X + "[" + k + "]", n);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return h(_);
    }
    function A() {
      function x(_, Y, U, N, F) {
        var X = _[Y];
        if (!i(X)) {
          var Z = ne(X);
          return new m("Invalid " + N + " `" + F + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return h(x);
    }
    function T() {
      function x(_, Y, U, N, F) {
        var X = _[Y];
        if (!e.isValidElementType(X)) {
          var Z = ne(X);
          return new m("Invalid " + N + " `" + F + "` of type " + ("`" + Z + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return h(x);
    }
    function E(x) {
      function _(Y, U, N, F, X) {
        if (!(Y[U] instanceof x)) {
          var Z = x.name || v, J = le(Y[U]);
          return new m("Invalid " + F + " `" + X + "` of type " + ("`" + J + "` supplied to `" + N + "`, expected ") + ("instance of `" + Z + "`."));
        }
        return null;
      }
      return h(_);
    }
    function j(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), s;
      function _(Y, U, N, F, X) {
        for (var Z = Y[U], J = 0; J < x.length; J++)
          if (y(Z, x[J]))
            return null;
        var k = JSON.stringify(x, function(G, K) {
          var ye = z(K);
          return ye === "symbol" ? String(K) : K;
        });
        return new m("Invalid " + F + " `" + X + "` of value `" + String(Z) + "` " + ("supplied to `" + N + "`, expected one of " + k + "."));
      }
      return h(_);
    }
    function D(x) {
      function _(Y, U, N, F, X) {
        if (typeof x != "function")
          return new m("Property `" + X + "` of component `" + N + "` has invalid PropType notation inside objectOf.");
        var Z = Y[U], J = ne(Z);
        if (J !== "object")
          return new m("Invalid " + F + " `" + X + "` of type " + ("`" + J + "` supplied to `" + N + "`, expected an object."));
        for (var k in Z)
          if (r(Z, k)) {
            var M = x(Z, k, N, F, X + "." + k, n);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return h(_);
    }
    function W(x) {
      if (!Array.isArray(x))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var _ = 0; _ < x.length; _++) {
        var Y = x[_];
        if (typeof Y != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + B(Y) + " at index " + _ + "."
          ), s;
      }
      function U(N, F, X, Z, J) {
        for (var k = [], M = 0; M < x.length; M++) {
          var G = x[M], K = G(N, F, X, Z, J, n);
          if (K == null)
            return null;
          K.data && r(K.data, "expectedType") && k.push(K.data.expectedType);
        }
        var ye = k.length > 0 ? ", expected one of type [" + k.join(", ") + "]" : "";
        return new m("Invalid " + Z + " `" + J + "` supplied to " + ("`" + X + "`" + ye + "."));
      }
      return h(U);
    }
    function R() {
      function x(_, Y, U, N, F) {
        return ie(_[Y]) ? null : new m("Invalid " + N + " `" + F + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return h(x);
    }
    function L(x, _, Y, U, N) {
      return new m(
        (x || "React class") + ": " + _ + " type `" + Y + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + N + "`."
      );
    }
    function ee(x) {
      function _(Y, U, N, F, X) {
        var Z = Y[U], J = ne(Z);
        if (J !== "object")
          return new m("Invalid " + F + " `" + X + "` of type `" + J + "` " + ("supplied to `" + N + "`, expected `object`."));
        for (var k in x) {
          var M = x[k];
          if (typeof M != "function")
            return L(N, F, X, k, z(M));
          var G = M(Z, k, N, F, X + "." + k, n);
          if (G)
            return G;
        }
        return null;
      }
      return h(_);
    }
    function Q(x) {
      function _(Y, U, N, F, X) {
        var Z = Y[U], J = ne(Z);
        if (J !== "object")
          return new m("Invalid " + F + " `" + X + "` of type `" + J + "` " + ("supplied to `" + N + "`, expected `object`."));
        var k = t({}, Y[U], x);
        for (var M in k) {
          var G = x[M];
          if (r(x, M) && typeof G != "function")
            return L(N, F, X, M, z(G));
          if (!G)
            return new m(
              "Invalid " + F + " `" + X + "` key `" + M + "` supplied to `" + N + "`.\nBad object: " + JSON.stringify(Y[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(x), null, "  ")
            );
          var K = G(Z, M, N, F, X + "." + M, n);
          if (K)
            return K;
        }
        return null;
      }
      return h(_);
    }
    function ie(x) {
      switch (typeof x) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !x;
        case "object":
          if (Array.isArray(x))
            return x.every(ie);
          if (x === null || i(x))
            return !0;
          var _ = d(x);
          if (_) {
            var Y = _.call(x), U;
            if (_ !== x.entries) {
              for (; !(U = Y.next()).done; )
                if (!ie(U.value))
                  return !1;
            } else
              for (; !(U = Y.next()).done; ) {
                var N = U.value;
                if (N && !ie(N[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ue(x, _) {
      return x === "symbol" ? !0 : _ ? _["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && _ instanceof Symbol : !1;
    }
    function ne(x) {
      var _ = typeof x;
      return Array.isArray(x) ? "array" : x instanceof RegExp ? "object" : ue(_, x) ? "symbol" : _;
    }
    function z(x) {
      if (typeof x > "u" || x === null)
        return "" + x;
      var _ = ne(x);
      if (_ === "object") {
        if (x instanceof Date)
          return "date";
        if (x instanceof RegExp)
          return "regexp";
      }
      return _;
    }
    function B(x) {
      var _ = z(x);
      switch (_) {
        case "array":
        case "object":
          return "an " + _;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + _;
        default:
          return _;
      }
    }
    function le(x) {
      return !x.constructor || !x.constructor.name ? v : x.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, Yn;
}
var Xn, jo;
function Bu() {
  if (jo)
    return Xn;
  jo = 1;
  var e = Zr();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, Xn = function() {
    function r(s, i, c, l, u, d) {
      if (d !== e) {
        var v = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw v.name = "Invariant Violation", v;
      }
    }
    r.isRequired = r;
    function o() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: o,
      element: r,
      elementType: r,
      instanceOf: o,
      node: r,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, Xn;
}
if (process.env.NODE_ENV !== "production") {
  var $u = ia, Vu = !0;
  Sr.exports = Lu()($u.isElement, Vu);
} else
  Sr.exports = Bu()();
var Pe = Sr.exports;
const Ha = /* @__PURE__ */ ca(Pe);
var wr = "data-focus-lock", Wa = "data-focus-lock-disabled", Hu = "data-no-focus-lock", Wu = "data-autofocus-inside", zu = "data-no-autofocus";
function Uu(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Gu(e, t) {
  var n = te(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return n.value;
        },
        set current(r) {
          var o = n.value;
          o !== r && (n.value = r, n.callback(r, o));
        }
      }
    };
  })[0];
  return n.callback = t, n.facade;
}
function za(e, t) {
  return Gu(t || null, function(n) {
    return e.forEach(function(r) {
      return Uu(r, n);
    });
  });
}
var Zn = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && Ha.node;
var Ke = function() {
  return Ke = Object.assign || function(t) {
    for (var n, r = 1, o = arguments.length; r < o; r++) {
      n = arguments[r];
      for (var a in n)
        Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
    }
    return t;
  }, Ke.apply(this, arguments);
};
function Ua(e, t) {
  var n = {};
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
      t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
  return n;
}
function Ku(e, t, n) {
  if (n || arguments.length === 2)
    for (var r = 0, o = t.length, a; r < o; r++)
      (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), a[r] = t[r]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function Ga(e) {
  return e;
}
function Ka(e, t) {
  t === void 0 && (t = Ga);
  var n = [], r = !1, o = {
    read: function() {
      if (r)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return n.length ? n[n.length - 1] : e;
    },
    useMedium: function(a) {
      var s = t(a, r);
      return n.push(s), function() {
        n = n.filter(function(i) {
          return i !== s;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (r = !0; n.length; ) {
        var s = n;
        n = [], s.forEach(a);
      }
      n = {
        push: function(i) {
          return a(i);
        },
        filter: function() {
          return n;
        }
      };
    },
    assignMedium: function(a) {
      r = !0;
      var s = [];
      if (n.length) {
        var i = n;
        n = [], i.forEach(a), s = n;
      }
      var c = function() {
        var u = s;
        s = [], u.forEach(a);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), n = {
        push: function(u) {
          s.push(u), l();
        },
        filter: function(u) {
          return s = s.filter(u), n;
        }
      };
    }
  };
  return o;
}
function Qr(e, t) {
  return t === void 0 && (t = Ga), Ka(e, t);
}
function qa(e) {
  e === void 0 && (e = {});
  var t = Ka(null);
  return t.options = Ke({ async: !0, ssr: !1 }, e), t;
}
var Ya = function(e) {
  var t = e.sideCar, n = Ua(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var r = t.read();
  if (!r)
    throw new Error("Sidecar medium not found");
  return re.createElement(r, Ke({}, n));
};
Ya.isSideCarExport = !0;
function qu(e, t) {
  return e.useMedium(t), Ya;
}
var Xa = Qr({}, function(e) {
  var t = e.target, n = e.currentTarget;
  return {
    target: t,
    currentTarget: n
  };
}), Za = Qr(), Yu = Qr(), Xu = qa({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), Zu = [], Jr = /* @__PURE__ */ re.forwardRef(function(t, n) {
  var r, o = re.useState(), a = o[0], s = o[1], i = re.useRef(), c = re.useRef(!1), l = re.useRef(null), u = t.children, d = t.disabled, v = t.noFocusGuards, p = t.persistentFocus, y = t.crossFrame, m = t.autoFocus, h = t.allowTextSelection, w = t.group, P = t.className, I = t.whiteList, A = t.hasPositiveIndices, T = t.shards, E = T === void 0 ? Zu : T, j = t.as, D = j === void 0 ? "div" : j, W = t.lockProps, R = W === void 0 ? {} : W, L = t.sideCar, ee = t.returnFocus, Q = t.focusOptions, ie = t.onActivation, ue = t.onDeactivation, ne = re.useState({}), z = ne[0], B = re.useCallback(function() {
    l.current = l.current || document && document.activeElement, i.current && ie && ie(i.current), c.current = !0;
  }, [ie]), le = re.useCallback(function() {
    c.current = !1, ue && ue(i.current);
  }, [ue]);
  de(function() {
    d || (l.current = null);
  }, []);
  var x = re.useCallback(function(J) {
    var k = l.current;
    if (k && k.focus) {
      var M = typeof ee == "function" ? ee(k) : ee;
      if (M) {
        var G = typeof M == "object" ? M : void 0;
        l.current = null, J ? Promise.resolve().then(function() {
          return k.focus(G);
        }) : k.focus(G);
      }
    }
  }, [ee]), _ = re.useCallback(function(J) {
    c.current && Xa.useMedium(J);
  }, []), Y = Za.useMedium, U = re.useCallback(function(J) {
    i.current !== J && (i.current = J, s(J));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof h < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), re.useEffect(function() {
    !i.current && typeof D != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var N = ur((r = {}, r[Wa] = d && "disabled", r[wr] = w, r), R), F = v !== !0, X = F && v !== "tail", Z = za([n, U]);
  return /* @__PURE__ */ re.createElement(re.Fragment, null, F && [
    // nearest focus guard
    /* @__PURE__ */ re.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: Zn
    }),
    // first tabbed element guard
    A ? /* @__PURE__ */ re.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: Zn
    }) : null
  ], !d && /* @__PURE__ */ re.createElement(L, {
    id: z,
    sideCar: Xu,
    observed: a,
    disabled: d,
    persistentFocus: p,
    crossFrame: y,
    autoFocus: m,
    whiteList: I,
    shards: E,
    onActivation: B,
    onDeactivation: le,
    returnFocus: x,
    focusOptions: Q
  }), /* @__PURE__ */ re.createElement(D, ur({
    ref: Z
  }, N, {
    className: P,
    onBlur: Y,
    onFocus: _
  }), u), X && /* @__PURE__ */ re.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: Zn
  }));
});
Jr.propTypes = process.env.NODE_ENV !== "production" ? {
  children: Pe.node,
  disabled: Pe.bool,
  returnFocus: Pe.oneOfType([Pe.bool, Pe.object, Pe.func]),
  focusOptions: Pe.object,
  noFocusGuards: Pe.bool,
  hasPositiveIndices: Pe.bool,
  allowTextSelection: Pe.bool,
  autoFocus: Pe.bool,
  persistentFocus: Pe.bool,
  crossFrame: Pe.bool,
  group: Pe.string,
  className: Pe.string,
  whiteList: Pe.func,
  shards: Pe.arrayOf(Pe.any),
  as: Pe.oneOfType([Pe.string, Pe.func, Pe.object]),
  lockProps: Pe.object,
  onActivation: Pe.func,
  onDeactivation: Pe.func,
  sideCar: Pe.any.isRequired
} : {};
Jr.defaultProps = {
  children: void 0,
  disabled: !1,
  returnFocus: !1,
  focusOptions: void 0,
  noFocusGuards: !1,
  autoFocus: !0,
  persistentFocus: !1,
  crossFrame: !0,
  hasPositiveIndices: void 0,
  allowTextSelection: void 0,
  group: void 0,
  className: void 0,
  whiteList: void 0,
  shards: void 0,
  as: "div",
  lockProps: {},
  onActivation: void 0,
  onDeactivation: void 0
};
const Qa = Jr;
function Pr(e, t) {
  return Pr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, Pr(e, t);
}
function Qu(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, Pr(e, t);
}
function qt(e) {
  "@babel/helpers - typeof";
  return qt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, qt(e);
}
function Ju(e, t) {
  if (qt(e) !== "object" || e === null)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (qt(r) !== "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function ed(e) {
  var t = Ju(e, "string");
  return qt(t) === "symbol" ? t : String(t);
}
function td(e, t, n) {
  return t = ed(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function nd(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  }
  function n(r) {
    return r.displayName || r.name || "Component";
  }
  return function(o) {
    if (process.env.NODE_ENV !== "production" && typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var a = [], s;
    function i() {
      s = e(a.map(function(l) {
        return l.props;
      })), t(s);
    }
    var c = /* @__PURE__ */ function(l) {
      Qu(u, l);
      function u() {
        return l.apply(this, arguments) || this;
      }
      u.peek = function() {
        return s;
      };
      var d = u.prototype;
      return d.componentDidMount = function() {
        a.push(this), i();
      }, d.componentDidUpdate = function() {
        i();
      }, d.componentWillUnmount = function() {
        var p = a.indexOf(this);
        a.splice(p, 1), i();
      }, d.render = function() {
        return /* @__PURE__ */ zi.createElement(o, this.props);
      }, u;
    }(Ui);
    return td(c, "displayName", "SideEffect(" + n(o) + ")"), c;
  };
}
var qe = function(e) {
  for (var t = Array(e.length), n = 0; n < e.length; ++n)
    t[n] = e[n];
  return t;
}, xn = function(e) {
  return Array.isArray(e) ? e : [e];
}, Ja = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, rd = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, es = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, ts = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, od = function(e, t) {
  return !e || ts(e) || !rd(e) && t(es(e));
}, ns = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = od(t, ns.bind(void 0, e));
  return e.set(t, r), r;
}, ad = function(e, t) {
  return e && !ts(e) ? cd(e) ? t(es(e)) : !1 : !0;
}, rs = function(e, t) {
  var n = e.get(t);
  if (n !== void 0)
    return n;
  var r = ad(t, rs.bind(void 0, e));
  return e.set(t, r), r;
}, os = function(e) {
  return e.dataset;
}, sd = function(e) {
  return e.tagName === "BUTTON";
}, as = function(e) {
  return e.tagName === "INPUT";
}, ss = function(e) {
  return as(e) && e.type === "radio";
}, id = function(e) {
  return !((as(e) || sd(e)) && (e.type === "hidden" || e.disabled));
}, cd = function(e) {
  var t = e.getAttribute(zu);
  return ![!0, "true", ""].includes(t);
}, eo = function(e) {
  var t;
  return !!(e && (!((t = os(e)) === null || t === void 0) && t.focusGuard));
}, Sn = function(e) {
  return !eo(e);
}, ld = function(e) {
  return !!e;
}, ud = function(e, t) {
  var n = e.tabIndex - t.tabIndex, r = e.index - t.index;
  if (n) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return n || r;
}, is = function(e, t, n) {
  return qe(e).map(function(r, o) {
    return {
      node: r,
      index: o,
      tabIndex: n && r.tabIndex === -1 ? (r.dataset || {}).focusGuard ? 0 : -1 : r.tabIndex
    };
  }).filter(function(r) {
    return !t || r.tabIndex >= 0;
  }).sort(ud);
}, dd = [
  "button:enabled",
  "select:enabled",
  "textarea:enabled",
  "input:enabled",
  // elements with explicit roles will also use explicit tabindex
  // '[role="button"]',
  "a[href]",
  "area[href]",
  "summary",
  "iframe",
  "object",
  "embed",
  "audio[controls]",
  "video[controls]",
  "[tabindex]",
  "[contenteditable]",
  "[autofocus]"
], to = dd.join(","), fd = "".concat(to, ", [data-focus-guard]"), cs = function(e, t) {
  return qe((e.shadowRoot || e).children).reduce(function(n, r) {
    return n.concat(r.matches(t ? fd : to) ? [r] : [], cs(r));
  }, []);
}, vd = function(e, t) {
  var n;
  return e instanceof HTMLIFrameElement && (!((n = e.contentDocument) === null || n === void 0) && n.body) ? En([e.contentDocument.body], t) : [e];
}, En = function(e, t) {
  return e.reduce(function(n, r) {
    var o, a = cs(r, t), s = (o = []).concat.apply(o, a.map(function(i) {
      return vd(i, t);
    }));
    return n.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      s,
      // add if node is tabbable itself
      r.parentNode ? qe(r.parentNode.querySelectorAll(to)).filter(function(i) {
        return i === r;
      }) : []
    );
  }, []);
}, pd = function(e) {
  var t = e.querySelectorAll("[".concat(Wu, "]"));
  return qe(t).map(function(n) {
    return En([n]);
  }).reduce(function(n, r) {
    return n.concat(r);
  }, []);
}, no = function(e, t) {
  return qe(e).filter(function(n) {
    return ns(t, n);
  }).filter(function(n) {
    return id(n);
  });
}, Do = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), qe(e).filter(function(n) {
    return rs(t, n);
  });
}, _r = function(e, t, n) {
  return is(no(En(e, n), t), !0, n);
}, Fo = function(e, t) {
  return is(no(En(e), t), !1);
}, md = function(e, t) {
  return no(pd(e), t);
}, jt = function(e, t) {
  return e.shadowRoot ? jt(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : qe(e.children).some(function(n) {
    var r;
    if (n instanceof HTMLIFrameElement) {
      var o = (r = n.contentDocument) === null || r === void 0 ? void 0 : r.body;
      return o ? jt(o, t) : !1;
    }
    return jt(n, t);
  });
}, hd = function(e) {
  for (var t = /* @__PURE__ */ new Set(), n = e.length, r = 0; r < n; r += 1)
    for (var o = r + 1; o < n; o += 1) {
      var a = e[r].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(r);
    }
  return e.filter(function(s, i) {
    return !t.has(i);
  });
}, ls = function(e) {
  return e.parentNode ? ls(e.parentNode) : e;
}, ro = function(e) {
  var t = xn(e);
  return t.filter(Boolean).reduce(function(n, r) {
    var o = r.getAttribute(wr);
    return n.push.apply(n, o ? hd(qe(ls(r).querySelectorAll("[".concat(wr, '="').concat(o, '"]:not([').concat(Wa, '="disabled"])')))) : [r]), n;
  }, []);
}, yd = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Yt = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Yt(t.shadowRoot) : t instanceof HTMLIFrameElement && yd(function() {
      return t.contentWindow.document;
    }) ? Yt(t.contentWindow.document) : t;
  }
}, gd = function(e, t) {
  return e === t;
}, bd = function(e, t) {
  return !!qe(e.querySelectorAll("iframe")).some(function(n) {
    return gd(n, t);
  });
}, us = function(e, t) {
  return t === void 0 && (t = Yt(Ja(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : ro(e).some(function(n) {
    return jt(n, t) || bd(n, t);
  });
}, xd = function(e) {
  e === void 0 && (e = document);
  var t = Yt(e);
  return t ? qe(e.querySelectorAll("[".concat(Hu, "]"))).some(function(n) {
    return jt(n, t);
  }) : !1;
}, Sd = function(e, t) {
  return t.filter(ss).filter(function(n) {
    return n.name === e.name;
  }).filter(function(n) {
    return n.checked;
  })[0] || e;
}, oo = function(e, t) {
  return ss(e) && e.name ? Sd(e, t) : e;
}, wd = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(n) {
    return t.add(oo(n, e));
  }), e.filter(function(n) {
    return t.has(n);
  });
}, Ro = function(e) {
  return e[0] && e.length > 1 ? oo(e[0], e) : e[0];
}, Mo = function(e, t) {
  return e.length > 1 ? e.indexOf(oo(e[t], e)) : t;
}, ds = "NEW_FOCUS", Pd = function(e, t, n, r) {
  var o = e.length, a = e[0], s = e[o - 1], i = eo(n);
  if (!(n && e.indexOf(n) >= 0)) {
    var c = n !== void 0 ? t.indexOf(n) : -1, l = r ? t.indexOf(r) : c, u = r ? e.indexOf(r) : -1, d = c - l, v = t.indexOf(a), p = t.indexOf(s), y = wd(t), m = n !== void 0 ? y.indexOf(n) : -1, h = m - (r ? y.indexOf(r) : c), w = Mo(e, 0), P = Mo(e, o - 1);
    if (c === -1 || u === -1)
      return ds;
    if (!d && u >= 0)
      return u;
    if (c <= v && i && Math.abs(d) > 1)
      return P;
    if (c >= p && i && Math.abs(d) > 1)
      return w;
    if (d && Math.abs(h) > 1)
      return u;
    if (c <= v)
      return P;
    if (c > p)
      return w;
    if (d)
      return Math.abs(d) > 1 ? u : (o + u + d) % o;
  }
}, _d = function(e) {
  return function(t) {
    var n, r = (n = os(t)) === null || n === void 0 ? void 0 : n.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      r !== void 0 && r !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, kd = function(e, t, n) {
  var r = e.map(function(a) {
    var s = a.node;
    return s;
  }), o = Do(r.filter(_d(n)));
  return o && o.length ? Ro(o) : Ro(Do(t));
}, kr = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && kr(e.parentNode.host || e.parentNode, t), t;
}, Qn = function(e, t) {
  for (var n = kr(e), r = kr(t), o = 0; o < n.length; o += 1) {
    var a = n[o];
    if (r.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, fs = function(e, t, n) {
  var r = xn(e), o = xn(t), a = r[0], s = !1;
  return o.filter(Boolean).forEach(function(i) {
    s = Qn(s || i, i) || s, n.filter(Boolean).forEach(function(c) {
      var l = Qn(a, c);
      l && (!s || jt(l, s) ? s = l : s = Qn(l, s));
    });
  }), s;
}, Cd = function(e, t) {
  return e.reduce(function(n, r) {
    return n.concat(md(r, t));
  }, []);
}, Nd = function(e, t) {
  var n = /* @__PURE__ */ new Map();
  return t.forEach(function(r) {
    return n.set(r.node, r);
  }), e.map(function(r) {
    return n.get(r);
  }).filter(ld);
}, Ed = function(e, t) {
  var n = Yt(xn(e).length > 0 ? document : Ja(e).ownerDocument), r = ro(e).filter(Sn), o = fs(n || e, e, r), a = /* @__PURE__ */ new Map(), s = Fo(r, a), i = _r(r, a).filter(function(p) {
    var y = p.node;
    return Sn(y);
  });
  if (!(!i[0] && (i = s, !i[0]))) {
    var c = Fo([o], a).map(function(p) {
      var y = p.node;
      return y;
    }), l = Nd(c, i), u = l.map(function(p) {
      var y = p.node;
      return y;
    }), d = Pd(u, c, n, t);
    if (d === ds) {
      var v = kd(s, u, Cd(r, a));
      if (v)
        return { node: v };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : l[d];
  }
}, Id = function(e) {
  var t = ro(e).filter(Sn), n = fs(e, e, t), r = /* @__PURE__ */ new Map(), o = _r([n], r, !0), a = _r(t, r).filter(function(s) {
    var i = s.node;
    return Sn(i);
  }).map(function(s) {
    var i = s.node;
    return i;
  });
  return o.map(function(s) {
    var i = s.node, c = s.index;
    return {
      node: i,
      index: c,
      lockItem: a.indexOf(i) >= 0,
      guard: eo(i)
    };
  });
}, Td = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, Jn = 0, er = !1, vs = function(e, t, n) {
  n === void 0 && (n = {});
  var r = Ed(e, t);
  if (!er && r) {
    if (Jn > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), er = !0, setTimeout(function() {
        er = !1;
      }, 1);
      return;
    }
    Jn++, Td(r.node, n.focusOptions), Jn--;
  }
};
function ao(e) {
  setTimeout(e, 1);
}
var Ad = function() {
  return document && document.activeElement === document.body;
}, jd = function() {
  return Ad() || xd();
}, Dt = null, Et = null, Ft = null, Xt = !1, Dd = function() {
  return !0;
}, Fd = function(t) {
  return (Dt.whiteList || Dd)(t);
}, Rd = function(t, n) {
  Ft = {
    observerNode: t,
    portaledElement: n
  };
}, Md = function(t) {
  return Ft && Ft.portaledElement === t;
};
function Oo(e, t, n, r) {
  var o = null, a = e;
  do {
    var s = r[a];
    if (s.guard)
      s.node.dataset.focusAutoGuard && (o = s);
    else if (s.lockItem) {
      if (a !== e)
        return;
      o = null;
    } else
      break;
  } while ((a += n) !== t);
  o && (o.node.tabIndex = 0);
}
var Od = function(t) {
  return t && "current" in t ? t.current : t;
}, Ld = function(t) {
  return t ? !!Xt : Xt === "meanwhile";
}, Bd = function e(t, n, r) {
  return n && // find host equal to active element and check nested active element
  (n.host === t && (!n.activeElement || r.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, r));
}, $d = function(t, n) {
  return n.some(function(r) {
    return Bd(t, r, r);
  });
}, wn = function() {
  var t = !1;
  if (Dt) {
    var n = Dt, r = n.observed, o = n.persistentFocus, a = n.autoFocus, s = n.shards, i = n.crossFrame, c = n.focusOptions, l = r || Ft && Ft.portaledElement, u = document && document.activeElement;
    if (l) {
      var d = [l].concat(s.map(Od).filter(Boolean));
      if ((!u || Fd(u)) && (o || Ld(i) || !jd() || !Et && a) && (l && !// active element is "inside" working area
      (us(d) || // check for shadow-dom contained elements
      u && $d(u, d) || Md(u)) && (document && !Et && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = vs(d, Et, {
        focusOptions: c
      }), Ft = {})), Xt = !1, Et = document && document.activeElement), document) {
        var v = document && document.activeElement, p = Id(d), y = p.map(function(m) {
          var h = m.node;
          return h;
        }).indexOf(v);
        y > -1 && (p.filter(function(m) {
          var h = m.guard, w = m.node;
          return h && w.dataset.focusAutoGuard;
        }).forEach(function(m) {
          var h = m.node;
          return h.removeAttribute("tabIndex");
        }), Oo(y, p.length, 1, p), Oo(y, -1, -1, p));
      }
    }
  }
  return t;
}, ps = function(t) {
  wn() && t && (t.stopPropagation(), t.preventDefault());
}, so = function() {
  return ao(wn);
}, Vd = function(t) {
  var n = t.target, r = t.currentTarget;
  r.contains(n) || Rd(r, n);
}, Hd = function() {
  return null;
};
process.env.NODE_ENV !== "production" && Ha.node.isRequired;
var ms = function() {
  Xt = "just", ao(function() {
    Xt = "meanwhile";
  });
}, Wd = function() {
  document.addEventListener("focusin", ps), document.addEventListener("focusout", so), window.addEventListener("blur", ms);
}, zd = function() {
  document.removeEventListener("focusin", ps), document.removeEventListener("focusout", so), window.removeEventListener("blur", ms);
};
function Ud(e) {
  return e.filter(function(t) {
    var n = t.disabled;
    return !n;
  });
}
function Gd(e) {
  var t = e.slice(-1)[0];
  t && !Dt && Wd();
  var n = Dt, r = n && t && t.id === n.id;
  Dt = t, n && !r && (n.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === n.id;
  }).length || n.returnFocus(!t)), t ? (Et = null, (!r || n.observed !== t.observed) && t.onActivation(), wn(), ao(wn)) : (zd(), Et = null);
}
Xa.assignSyncMedium(Vd);
Za.assignMedium(so);
Yu.assignMedium(function(e) {
  return e({
    moveFocusInside: vs,
    focusInside: us
  });
});
const Kd = nd(Ud, Gd)(Hd);
var hs = /* @__PURE__ */ re.forwardRef(function(t, n) {
  return /* @__PURE__ */ re.createElement(Qa, ur({
    sideCar: Kd,
    ref: n
  }, t));
}), ys = Qa.propTypes || {};
ys.sideCar;
var qd = Ru(ys, ["sideCar"]);
hs.propTypes = process.env.NODE_ENV !== "production" ? qd : {};
const Lo = hs;
function Yd(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: n, overflowX: r, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function Xd(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function gs(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : Pi(e) && Yd(e) ? e : gs(Xd(e));
}
var Bo, Zd = (Bo = Lo.default) != null ? Bo : Lo, bs = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: n,
    contentRef: r,
    restoreFocus: o,
    children: a,
    isDisabled: s,
    autoFocus: i,
    persistentFocus: c,
    lockFocusAcrossFrames: l
  } = e, u = S(() => {
    t != null && t.current ? t.current.focus() : r != null && r.current && _i(r.current).length === 0 && requestAnimationFrame(() => {
      var y;
      (y = r.current) == null || y.focus();
    });
  }, [t, r]), d = S(() => {
    var p;
    (p = n == null ? void 0 : n.current) == null || p.focus();
  }, [n]), v = o && !n;
  return /* @__PURE__ */ f.jsx(
    Zd,
    {
      crossFrame: l,
      persistentFocus: c,
      autoFocus: i,
      disabled: s,
      onActivation: u,
      onDeactivation: d,
      returnFocus: v,
      children: a
    }
  );
};
bs.displayName = "FocusLock";
function by(e) {
  const t = ae();
  return de(() => {
    t.current = e;
  }, [e]), t.current;
}
function Qd(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function xy(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e, [r, o] = te([]), a = ae(), s = () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }, i = () => {
    s(), a.current = setTimeout(() => {
      o([]), a.current = null;
    }, t);
  };
  de(() => s, []);
  function c(l) {
    return (u) => {
      if (u.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (Qd(u)) {
        const d = r.concat(u.key);
        n(u) && (u.preventDefault(), u.stopPropagation()), o(d), l(d.join("")), i();
      }
    };
  }
  return c;
}
var io = Jt ? fa : de;
function nt(e, t = []) {
  const n = ae(e);
  return io(() => {
    n.current = e;
  }), S((...r) => {
    var o;
    return (o = n.current) == null ? void 0 : o.call(n, ...r);
  }, t);
}
function Sy(e, t) {
  const n = nt(e);
  de(() => {
    if (t == null)
      return;
    let r = null;
    return r = window.setTimeout(() => {
      n();
    }, t), () => {
      r && window.clearTimeout(r);
    };
  }, [t, n]);
}
function wy(e, t) {
  const n = ae();
  de(() => {
    if (n.current) {
      const r = Object.keys({ ...n.current, ...t }), o = {};
      r.forEach((a) => {
        n.current[a] !== t[a] && (o[a] = {
          from: n.current[a],
          to: t[a]
        });
      }), Object.keys(o).length && console.log("[why-did-you-update]", e, o);
    }
    n.current = t;
  });
}
function Py(e, t) {
  const n = nt(e);
  de(() => {
    let r = null;
    const o = () => n();
    return t !== null && (r = window.setInterval(o, t)), () => {
      r && window.clearInterval(r);
    };
  }, [t, n]);
}
function _y(e) {
  const t = ae(null);
  return t.current = e, t;
}
function Jd(e, t) {
  if (e != null) {
    if (typeof e == "function") {
      e(t);
      return;
    }
    try {
      e.current = t;
    } catch {
      throw new Error(`Cannot assign value '${t}' to ref '${e}'`);
    }
  }
}
function ky(...e) {
  return _e(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      n && Jd(n, t);
    });
  }, e);
}
function In(e, t, n, r) {
  const o = nt(t);
  return de(() => {
    var a;
    const s = (a = dr(n)) != null ? a : document;
    if (t)
      return s.addEventListener(e, o, r), () => {
        s.removeEventListener(e, o, r);
      };
  }, [e, n, r, o, t]), () => {
    var a;
    ((a = dr(n)) != null ? a : document).removeEventListener(e, o, r);
  };
}
function Cy(e = !0) {
  const t = ae();
  return In("mousedown", (n) => {
    e && (t.current = n.target);
  }), t;
}
function Ny(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = nt(n), s = ae({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  de(() => {
    if (!r)
      return;
    const i = (d) => {
      tr(d, t) && (s.isPointerDown = !0);
    }, c = (d) => {
      if (s.ignoreEmulatedMouseEvents) {
        s.ignoreEmulatedMouseEvents = !1;
        return;
      }
      s.isPointerDown && n && tr(d, t) && (s.isPointerDown = !1, o(d));
    }, l = (d) => {
      s.ignoreEmulatedMouseEvents = !0, n && s.isPointerDown && tr(d, t) && (s.isPointerDown = !1, o(d));
    }, u = yt(t.current);
    return u.addEventListener("mousedown", i, !0), u.addEventListener("mouseup", c, !0), u.addEventListener("touchstart", i, !0), u.addEventListener("touchend", l, !0), () => {
      u.removeEventListener("mousedown", i, !0), u.removeEventListener("mouseup", c, !0), u.removeEventListener("touchstart", i, !0), u.removeEventListener("touchend", l, !0);
    };
  }, [n, t, o, s, r]);
}
function tr(e, t) {
  var n;
  const r = e.target;
  return r && !yt(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function xs(e, t, n, r) {
  return In(
    $r(t),
    Br(n, t === "pointerdown"),
    e,
    r
  );
}
function Ss(e, t = []) {
  return de(
    () => () => e(),
    t
  );
}
function Ey(e, t) {
  const {
    onPan: n,
    onPanStart: r,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: s,
    threshold: i
  } = t, c = !!(n || r || o || a || s), l = ae(null), u = {
    onSessionStart: a,
    onSessionEnd: s,
    onStart: r,
    onMove: n,
    onEnd(v, p) {
      l.current = null, o == null || o(v, p);
    }
  };
  de(() => {
    var v;
    (v = l.current) == null || v.updateHandlers(u);
  });
  function d(v) {
    l.current = new Ic(v, u, i);
  }
  xs(
    () => e.current,
    "pointerdown",
    c ? d : sa
  ), Ss(() => {
    var v;
    (v = l.current) == null || v.end(), l.current = null;
  });
}
function ws(e, t) {
  const n = $e();
  return _e(
    () => e || [t, n].filter(Boolean).join("-"),
    [e, t, n]
  );
}
function Iy(e, ...t) {
  const n = ws(e);
  return _e(() => t.map((r) => `${r}-${n}`), [n, t]);
}
function Ty(e) {
  const [t, n] = te(null);
  return { ref: S(
    (o) => {
      n(o ? e : null);
    },
    [e]
  ), id: t, isRendered: !!t };
}
function ef(e, t) {
  const n = e !== void 0;
  return [n, n && typeof e < "u" ? e : t];
}
function Ay(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (v, p) => v !== p
  } = e, a = nt(r), s = nt(o), [i, c] = te(n), l = t !== void 0, u = l ? t : i, d = S(
    (v) => {
      const p = dr(v, u);
      s(u, p) && (l || c(p), a(p));
    },
    [l, a, u, s]
  );
  return [u, d];
}
function jy(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, a = nt(n), s = nt(t), [i, c] = te(e.defaultIsOpen || !1), [l, u] = ef(r, i), d = ws(o, "disclosure"), v = S(() => {
    l || c(!1), s == null || s();
  }, [l, s]), p = S(() => {
    l || c(!0), a == null || a();
  }, [l, a]), y = S(() => {
    (u ? v : p)();
  }, [u, p, v]);
  return {
    isOpen: !!u,
    onOpen: p,
    onClose: v,
    onToggle: y,
    isControlled: l,
    getButtonProps: (m = {}) => ({
      ...m,
      "aria-expanded": u,
      "aria-controls": d,
      onClick: $i(m.onClick, y)
    }),
    getDisclosureProps: (m = {}) => ({
      ...m,
      hidden: !u,
      id: d
    })
  };
}
function Dy() {
  const e = ae(/* @__PURE__ */ new Map()), t = e.current, n = S((o, a, s, i) => {
    const c = Br(
      s,
      a === "pointerdown"
    );
    e.current.set(s, {
      __listener: c,
      type: $r(a),
      el: o,
      options: i
    }), o.addEventListener(a, c, i);
  }, []), r = S(
    (o, a, s, i) => {
      const { __listener: c } = e.current.get(s);
      o.removeEventListener(a, c, i), e.current.delete(c);
    },
    []
  );
  return de(
    () => () => {
      t.forEach((o, a) => {
        r(o.el, o.type, a, o.options);
      });
    },
    [r, t]
  ), { add: n, remove: r };
}
var co = (e, t) => {
  const n = ae(!1), r = ae(!1);
  de(() => {
    if (n.current && r.current)
      return e();
    r.current = !0;
  }, t), de(() => (n.current = !0, () => {
    n.current = !1;
  }), []);
};
function Fy(e, t) {
  const { shouldFocus: n, preventScroll: r } = t;
  co(() => {
    const o = e.current;
    !o || !n || Lc(o) || Kt(o, { preventScroll: r, nextTick: !0 });
  }, [n, e, r]);
}
function tf(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = ic(t);
  return !n || Lr(t, n) ? !1 : !!$c(n);
}
function Ry(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, a = n && !r;
  co(() => {
    if (!a || tf(e))
      return;
    const s = (o == null ? void 0 : o.current) || e.current;
    s && Kt(s, { nextTick: !0 });
  }, [a, e, o]);
}
function My(e) {
  const { ref: t, elements: n, enabled: r } = e, o = uc("Safari");
  xs(() => yt(t.current), "pointerdown", (s) => {
    if (!o || !r)
      return;
    const i = s.target, l = (n ?? [t]).some((u) => {
      const d = la(u) ? u.current : u;
      return Lr(d, i);
    });
    !ka(i) && l && (s.preventDefault(), Kt(i));
  });
}
var nf = {
  preventScroll: !0,
  shouldFocus: !1
};
function Oy(e, t = nf) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: a } = t, s = la(e) ? e.current : e, i = o && a, c = ae(i), l = ae(a);
  io(() => {
    !l.current && a && (c.current = i), l.current = a;
  }, [a, i]);
  const u = S(() => {
    if (!(!a || !s || !c.current) && (c.current = !1, !Lr(s, document.activeElement)))
      if (n != null && n.current)
        Kt(n.current, { preventScroll: r, nextTick: !0 });
      else {
        const d = zc(s);
        d.length > 0 && Kt(d[0], { preventScroll: r, nextTick: !0 });
      }
  }, [a, r, s, n]);
  co(() => {
    u();
  }, [u]), In("transitionend", u, s);
}
function Ly() {
  const e = ae(!1), [t, n] = te(0);
  return Ss(() => {
    e.current = !0;
  }), S(() => {
    e.current || n(t + 1);
  }, [t]);
}
function By(e) {
  const { isOpen: t, ref: n } = e, [r, o] = te(t), [a, s] = te(!1);
  return de(() => {
    a || (o(t), s(!0));
  }, [t, a, r]), In(
    "animationend",
    () => {
      o(t);
    },
    () => n.current
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var c;
      const l = ac(n.current), u = new l.CustomEvent("animationend", { bubbles: !0 });
      (c = n.current) == null || c.dispatchEvent(u);
    }
  };
}
function $y(e = !1) {
  const [t, n] = te(e), r = _e(
    () => ({
      on: () => n(!0),
      off: () => n(!1),
      toggle: () => n((o) => !o)
    }),
    []
  );
  return [t, r];
}
var rf = function() {
  var e = document.getSelection();
  if (!e.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, n = [], r = 0; r < e.rangeCount; r++)
    n.push(e.getRangeAt(r));
  switch (t.tagName.toUpperCase()) {
    case "INPUT":
    case "TEXTAREA":
      t.blur();
      break;
    default:
      t = null;
      break;
  }
  return e.removeAllRanges(), function() {
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || n.forEach(function(o) {
      e.addRange(o);
    }), t && t.focus();
  };
}, of = rf, $o = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, af = "Copy to clipboard: #{key}, Enter";
function sf(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function cf(e, t) {
  var n, r, o, a, s, i, c = !1;
  t || (t = {}), n = t.debug || !1;
  try {
    o = of(), a = document.createRange(), s = document.getSelection(), i = document.createElement("span"), i.textContent = e, i.ariaHidden = "true", i.style.all = "unset", i.style.position = "fixed", i.style.top = 0, i.style.clip = "rect(0, 0, 0, 0)", i.style.whiteSpace = "pre", i.style.webkitUserSelect = "text", i.style.MozUserSelect = "text", i.style.msUserSelect = "text", i.style.userSelect = "text", i.addEventListener("copy", function(u) {
      if (u.stopPropagation(), t.format)
        if (u.preventDefault(), typeof u.clipboardData > "u") {
          n && console.warn("unable to use e.clipboardData"), n && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = $o[t.format] || $o.default;
          window.clipboardData.setData(d, e);
        } else
          u.clipboardData.clearData(), u.clipboardData.setData(t.format, e);
      t.onCopy && (u.preventDefault(), t.onCopy(u.clipboardData));
    }), document.body.appendChild(i), a.selectNodeContents(i), s.addRange(a);
    var l = document.execCommand("copy");
    if (!l)
      throw new Error("copy command was unsuccessful");
    c = !0;
  } catch (u) {
    n && console.error("unable to copy using execCommand: ", u), n && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0;
    } catch (d) {
      n && console.error("unable to copy using clipboardData: ", d), n && console.error("falling back to prompt"), r = sf("message" in t ? t.message : af), window.prompt(r, e);
    }
  } finally {
    s && (typeof s.removeRange == "function" ? s.removeRange(a) : s.removeAllRanges()), i && document.body.removeChild(i), o();
  }
  return c;
}
var lf = cf;
const uf = /* @__PURE__ */ ca(lf);
function Vy(e, t = {}) {
  const [n, r] = te(!1), [o, a] = te(e);
  de(() => a(e), [e]);
  const { timeout: s = 1500, ...i } = typeof t == "number" ? { timeout: t } : t, c = S(() => {
    const l = uf(o, i);
    r(l);
  }, [o, i]);
  return de(() => {
    let l = null;
    return n && (l = window.setTimeout(() => {
      r(!1);
    }, s)), () => {
      l && window.clearTimeout(l);
    };
  }, [s, n]), {
    value: o,
    setValue: a,
    onCopy: c,
    hasCopied: n
  };
}
function Hy(e) {
  const t = ae(null);
  return t.current === null && (t.current = typeof e == "function" ? e() : e), t.current;
}
function Wy(e, t) {
  const [n, r] = te(null), o = ae();
  return io(() => {
    function a() {
      const s = e.current;
      s && (o.current = requestAnimationFrame(() => {
        const i = Qc(s);
        r(i);
      }));
    }
    return a(), t && (window.addEventListener("resize", a), window.addEventListener("scroll", a)), () => {
      t && (window.removeEventListener("resize", a), window.removeEventListener("scroll", a)), o.current && cancelAnimationFrame(o.current);
    };
  }, [t]), n;
}
var [df, Ps] = ge({
  name: "InputGroupStylesContext",
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
}), ff = b(
  function(t, n) {
    const r = ke("Input", t), { children: o, className: a, ...s } = me(t), i = C("chakra-input__group", a), c = {}, l = mt(o), u = r.field;
    l.forEach((v) => {
      var p, y;
      r && (u && v.type.id === "InputLeftElement" && (c.paddingStart = (p = u.height) != null ? p : u.h), u && v.type.id === "InputRightElement" && (c.paddingEnd = (y = u.height) != null ? y : u.h), v.type.id === "InputRightAddon" && (c.borderEndRadius = 0), v.type.id === "InputLeftAddon" && (c.borderStartRadius = 0));
    });
    const d = l.map((v) => {
      var p, y;
      const m = na({
        size: ((p = v.props) == null ? void 0 : p.size) || t.size,
        variant: ((y = v.props) == null ? void 0 : y.variant) || t.variant
      });
      return v.type.id !== "Input" ? Ae(v, m) : Ae(v, Object.assign(m, c, v.props));
    });
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        className: i,
        ref: n,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          isolation: "isolate"
        },
        "data-group": !0,
        ...s,
        children: /* @__PURE__ */ f.jsx(df, { value: r, children: d })
      }
    );
  }
);
ff.displayName = "InputGroup";
var vf = {
  left: {
    marginEnd: "-1px",
    borderEndRadius: 0,
    borderEndColor: "transparent"
  },
  right: {
    marginStart: "-1px",
    borderStartRadius: 0,
    borderStartColor: "transparent"
  }
}, pf = g("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
}), lo = b(
  function(t, n) {
    var r;
    const { placement: o = "left", ...a } = t, s = (r = vf[o]) != null ? r : {}, i = Ps();
    return /* @__PURE__ */ f.jsx(
      pf,
      {
        ref: n,
        ...a,
        __css: {
          ...i.addon,
          ...s
        }
      }
    );
  }
);
lo.displayName = "InputAddon";
var _s = b(
  function(t, n) {
    return /* @__PURE__ */ f.jsx(
      lo,
      {
        ref: n,
        placement: "left",
        ...t,
        className: C("chakra-input__left-addon", t.className)
      }
    );
  }
);
_s.displayName = "InputLeftAddon";
_s.id = "InputLeftAddon";
var ks = b(
  function(t, n) {
    return /* @__PURE__ */ f.jsx(
      lo,
      {
        ref: n,
        placement: "right",
        ...t,
        className: C("chakra-input__right-addon", t.className)
      }
    );
  }
);
ks.displayName = "InputRightAddon";
ks.id = "InputRightAddon";
var mf = g("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
}), Tn = b(function(t, n) {
  var r, o;
  const { placement: a = "left", ...s } = t, i = Ps(), c = i.field, u = {
    [a === "left" ? "insetStart" : "insetEnd"]: "0",
    width: (r = c == null ? void 0 : c.height) != null ? r : c == null ? void 0 : c.h,
    height: (o = c == null ? void 0 : c.height) != null ? o : c == null ? void 0 : c.h,
    fontSize: c == null ? void 0 : c.fontSize,
    ...i.element
  };
  return /* @__PURE__ */ f.jsx(mf, { ref: n, __css: u, ...s });
});
Tn.id = "InputElement";
Tn.displayName = "InputElement";
var Cs = b(
  function(t, n) {
    const { className: r, ...o } = t, a = C("chakra-input__left-element", r);
    return /* @__PURE__ */ f.jsx(
      Tn,
      {
        ref: n,
        placement: "left",
        className: a,
        ...o
      }
    );
  }
);
Cs.id = "InputLeftElement";
Cs.displayName = "InputLeftElement";
var Ns = b(
  function(t, n) {
    const { className: r, ...o } = t, a = C("chakra-input__right-element", r);
    return /* @__PURE__ */ f.jsx(
      Tn,
      {
        ref: n,
        placement: "right",
        className: a,
        ...o
      }
    );
  }
);
Ns.id = "InputRightElement";
Ns.displayName = "InputRightElement";
var Es = b(function(t, n) {
  const { htmlSize: r, ...o } = t, a = ke("Input", o), s = me(o), i = zr(s), c = C("chakra-input", t.className);
  return /* @__PURE__ */ f.jsx(
    g.input,
    {
      size: r,
      ...i,
      __css: a.field,
      ref: n,
      className: c
    }
  );
});
Es.displayName = "Input";
Es.id = "Input";
var hf = b(function(t, n) {
  const r = Be("Link", t), { className: o, isExternal: a, ...s } = me(t);
  return /* @__PURE__ */ f.jsx(
    g.a,
    {
      target: a ? "_blank" : void 0,
      rel: a ? "noopener" : void 0,
      ref: n,
      className: C("chakra-link", o),
      ...s,
      __css: r
    }
  );
});
hf.displayName = "Link";
var [yf, Is] = ge({
  name: "ListStylesContext",
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
}), uo = b(function(t, n) {
  const r = ke("List", t), {
    children: o,
    styleType: a = "none",
    stylePosition: s,
    spacing: i,
    ...c
  } = me(t), l = mt(o), d = i ? { ["& > *:not(style) ~ *:not(style)"]: { mt: i } } : {};
  return /* @__PURE__ */ f.jsx(yf, { value: r, children: /* @__PURE__ */ f.jsx(
    g.ul,
    {
      ref: n,
      listStyleType: a,
      listStylePosition: s,
      role: "list",
      __css: { ...r.container, ...d },
      ...c,
      children: l
    }
  ) });
});
uo.displayName = "List";
var gf = b((e, t) => {
  const { as: n, ...r } = e;
  return /* @__PURE__ */ f.jsx(uo, { ref: t, as: "ol", styleType: "decimal", marginStart: "1em", ...r });
});
gf.displayName = "OrderedList";
var bf = b(function(t, n) {
  const { as: r, ...o } = t;
  return /* @__PURE__ */ f.jsx(uo, { ref: n, as: "ul", styleType: "initial", marginStart: "1em", ...o });
});
bf.displayName = "UnorderedList";
var xf = b(function(t, n) {
  const r = Is();
  return /* @__PURE__ */ f.jsx(g.li, { ref: n, ...t, __css: r.item });
});
xf.displayName = "ListItem";
var Sf = b(function(t, n) {
  const r = Is();
  return /* @__PURE__ */ f.jsx(Ve, { ref: n, role: "presentation", ...t, __css: r.icon });
});
Sf.displayName = "ListIcon";
var wf = g("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
wf.displayName = "Spacer";
var Pf = b(function(t, n) {
  const {
    spacing: r = "0.5rem",
    spacingX: o,
    spacingY: a,
    children: s,
    justify: i,
    direction: c,
    align: l,
    className: u,
    shouldWrapChildren: d,
    ...v
  } = t, p = _e(
    () => d ? at.map(s, (y, m) => /* @__PURE__ */ f.jsx(Ts, { children: y }, m)) : s,
    [s, d]
  );
  return /* @__PURE__ */ f.jsx(g.div, { ref: n, className: C("chakra-wrap", u), ...v, children: /* @__PURE__ */ f.jsx(
    g.ul,
    {
      className: "chakra-wrap__list",
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: i,
        alignItems: l,
        flexDirection: c,
        listStyleType: "none",
        gap: r,
        columnGap: o,
        rowGap: a,
        padding: "0"
      },
      children: p
    }
  ) });
});
Pf.displayName = "Wrap";
var Ts = b(function(t, n) {
  const { className: r, ...o } = t;
  return /* @__PURE__ */ f.jsx(
    g.li,
    {
      ref: n,
      __css: { display: "flex", alignItems: "flex-start" },
      className: C("chakra-wrap__listitem", r),
      ...o
    }
  );
});
Ts.displayName = "WrapItem";
var _f = (e) => /* @__PURE__ */ f.jsx(
  g.div,
  {
    className: "chakra-stack__divider",
    ...e,
    __css: {
      ...e.__css,
      borderWidth: 0,
      alignSelf: "stretch",
      borderColor: "inherit",
      width: "auto",
      height: "auto"
    }
  }
);
_f.displayName = "StackDivider";
function Vo(e) {
  return lt(
    e,
    (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`
  );
}
var kf = b(function(t, n) {
  const {
    area: r,
    colSpan: o,
    colStart: a,
    colEnd: s,
    rowEnd: i,
    rowSpan: c,
    rowStart: l,
    ...u
  } = t, d = na({
    gridArea: r,
    gridColumn: Vo(o),
    gridRow: Vo(c),
    gridColumnStart: a,
    gridColumnEnd: s,
    gridRowStart: l,
    gridRowEnd: i
  });
  return /* @__PURE__ */ f.jsx(g.div, { ref: n, __css: d, ...u });
});
kf.displayName = "GridItem";
var fo = g("div");
fo.displayName = "Box";
var As = b(function(t, n) {
  const { size: r, centerContent: o = !0, ...a } = t, s = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ f.jsx(
    fo,
    {
      ref: n,
      boxSize: r,
      __css: {
        ...s,
        flexShrink: 0,
        flexGrow: 0
      },
      ...a
    }
  );
});
As.displayName = "Square";
var Cf = b(function(t, n) {
  const { size: r, ...o } = t;
  return /* @__PURE__ */ f.jsx(As, { size: r, ref: n, borderRadius: "9999px", ...o });
});
Cf.displayName = "Circle";
var Nf = (e) => e.replace(/[|\\{}()[\]^$+*?.-]/g, (t) => `\\${t}`);
function Ef(e) {
  const t = e.filter((n) => n.length !== 0).map((n) => Nf(n.trim()));
  return t.length ? new RegExp(`(${t.join("|")})`, "ig") : null;
}
function If({ text: e, query: t }) {
  const n = Ef(Array.isArray(t) ? t : [t]);
  return n ? e.split(n).filter(Boolean).map((o) => ({ text: o, match: n.test(o) })) : [{ text: e, match: !1 }];
}
function Tf(e) {
  const { text: t, query: n } = e;
  return _e(() => If({ text: t, query: n }), [t, n]);
}
var Af = b(function(t, n) {
  const r = Be("Mark", t), o = me(t);
  return /* @__PURE__ */ f.jsx(
    fo,
    {
      ref: n,
      ...o,
      as: "mark",
      __css: { bg: "transparent", whiteSpace: "nowrap", ...r }
    }
  );
});
function zy(e) {
  const { children: t, query: n, styles: r } = e;
  if (typeof t != "string")
    throw new Error("The children prop of Highlight must be a string");
  const o = Tf({ query: n, text: t });
  return /* @__PURE__ */ f.jsx(f.Fragment, { children: o.map((a, s) => a.match ? /* @__PURE__ */ f.jsx(Af, { sx: r, children: a.text }, s) : /* @__PURE__ */ f.jsx(Gi, { children: a.text }, s)) });
}
var Uy = b(function(t, n) {
  const {
    offsetX: r,
    offsetY: o,
    offset: a = "0",
    placement: s = "top-end",
    ...i
  } = t, c = _e(
    () => ({
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      insetBlockStart: lt(s, (l) => {
        const [u] = l.split("-");
        return {
          top: o ?? a,
          middle: "50%",
          bottom: "auto"
        }[u];
      }),
      insetBlockEnd: lt(s, (l) => {
        const [u] = l.split("-");
        return {
          top: "auto",
          middle: "50%",
          bottom: o ?? a
        }[u];
      }),
      insetStart: lt(s, (l) => {
        const [, u] = l.split("-");
        return {
          start: r ?? a,
          center: "50%",
          end: "auto"
        }[u];
      }),
      insetEnd: lt(s, (l) => {
        const [, u] = l.split("-");
        return {
          start: "auto",
          center: "50%",
          end: r ?? a
        }[u];
      }),
      translate: lt(s, (l) => {
        const [u, d] = l.split("-"), v = { start: "-50%", center: "-50%", end: "50%" }, p = { top: "-50%", middle: "-50%", bottom: "50%" };
        return `${v[d]} ${p[u]}`;
      })
    }),
    [a, r, o, s]
  );
  return /* @__PURE__ */ f.jsx(g.div, { ref: n, __css: c, ...i });
}), jf = b(function(t, n) {
  const r = Be("Kbd", t), { className: o, ...a } = me(t);
  return /* @__PURE__ */ f.jsx(
    g.kbd,
    {
      ref: n,
      className: C("chakra-kbd", o),
      ...a,
      __css: {
        fontFamily: "mono",
        ...r
      }
    }
  );
});
jf.displayName = "Kbd";
var Gy = b(
  function(t, n) {
    const { isExternal: r, target: o, rel: a, className: s, ...i } = t;
    return /* @__PURE__ */ f.jsx(
      g.a,
      {
        ...i,
        ref: n,
        className: C("chakra-linkbox__overlay", s),
        rel: r ? "noopener noreferrer" : a,
        target: r ? "_blank" : o,
        __css: {
          position: "static",
          "&::before": {
            content: "''",
            cursor: "inherit",
            display: "block",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
            width: "100%",
            height: "100%"
          }
        }
      }
    );
  }
), Ky = b(function(t, n) {
  const { className: r, ...o } = t;
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      position: "relative",
      ...o,
      className: C("chakra-linkbox", r),
      __css: {
        "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
          position: "relative",
          zIndex: 1
        }
      }
    }
  );
}), Df = b(function(e, t) {
  const { ratio: n = 4 / 3, children: r, className: o, ...a } = e, s = at.only(r), i = C("chakra-aspect-ratio", o);
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: t,
      position: "relative",
      className: i,
      _before: {
        height: 0,
        content: '""',
        display: "block",
        paddingBottom: lt(n, (c) => `${1 / c * 100}%`)
      },
      __css: {
        "& > *:not(style)": {
          overflow: "hidden",
          position: "absolute",
          top: "0",
          right: "0",
          bottom: "0",
          left: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%"
        },
        "& > img, & > video": {
          objectFit: "cover"
        }
      },
      ...a,
      children: s
    }
  );
});
Df.displayName = "AspectRatio";
var Ff = b(function(t, n) {
  const r = Be("Badge", t), { className: o, ...a } = me(t);
  return /* @__PURE__ */ f.jsx(
    g.span,
    {
      ref: n,
      className: C("chakra-badge", t.className),
      ...a,
      __css: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...r
      }
    }
  );
});
Ff.displayName = "Badge";
var Rf = g("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
Rf.displayName = "Center";
var Mf = {
  horizontal: {
    insetStart: "50%",
    transform: "translateX(-50%)"
  },
  vertical: {
    top: "50%",
    transform: "translateY(-50%)"
  },
  both: {
    insetStart: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)"
  }
}, qy = b(
  function(t, n) {
    const { axis: r = "both", ...o } = t;
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: n,
        __css: Mf[r],
        ...o,
        position: "absolute"
      }
    );
  }
), Of = b(function(t, n) {
  const r = Be("Code", t), { className: o, ...a } = me(t);
  return /* @__PURE__ */ f.jsx(
    g.code,
    {
      ref: n,
      className: C("chakra-code", t.className),
      ...a,
      __css: {
        display: "inline-block",
        ...r
      }
    }
  );
});
Of.displayName = "Code";
var Lf = b(function(t, n) {
  const { className: r, centerContent: o, ...a } = me(t), s = Be("Container", t);
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      className: C("chakra-container", r),
      ...a,
      __css: {
        ...s,
        ...o && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }
    }
  );
});
Lf.displayName = "Container";
var Bf = b(function(t, n) {
  const { direction: r, align: o, justify: a, wrap: s, basis: i, grow: c, shrink: l, ...u } = t, d = {
    display: "flex",
    flexDirection: r,
    alignItems: o,
    justifyContent: a,
    flexWrap: s,
    flexBasis: i,
    flexGrow: c,
    flexShrink: l
  };
  return /* @__PURE__ */ f.jsx(g.div, { ref: n, __css: d, ...u });
});
Bf.displayName = "Flex";
function An(e, t = {}) {
  const { ssr: n = !0, fallback: r } = t, { getWindow: o } = Qi(), a = Array.isArray(e) ? e : [e];
  let s = Array.isArray(r) ? r : [r];
  s = s.filter((l) => l != null);
  const [i, c] = te(() => a.map((l, u) => ({
    media: l,
    matches: n ? !!s[u] : o().matchMedia(l).matches
  })));
  return de(() => {
    const l = o();
    c(
      a.map((v) => ({
        media: v,
        matches: l.matchMedia(v).matches
      }))
    );
    const u = a.map((v) => l.matchMedia(v)), d = (v) => {
      c((p) => p.slice().map((y) => y.media === v.media ? { ...y, matches: v.matches } : y));
    };
    return u.forEach((v) => {
      typeof v.addListener == "function" ? v.addListener(d) : v.addEventListener("change", d);
    }), () => {
      u.forEach((v) => {
        typeof v.removeListener == "function" ? v.removeListener(d) : v.removeEventListener("change", d);
      });
    };
  }, [o]), i.map((l) => l.matches);
}
function js(e) {
  const { breakpoint: t, hide: n, children: r, ssr: o } = e, [a] = An(t, { ssr: o });
  return (n ? !a : a) ? r : null;
}
var Ho = (e, t) => {
  var n, r;
  return (r = (n = e == null ? void 0 : e.breakpoints) == null ? void 0 : n[t]) != null ? r : t;
};
function Ds(e) {
  const { breakpoint: t = "", below: n, above: r } = e, o = ot(), a = Ho(o, n), s = Ho(o, r);
  let i = t;
  return a ? i = `(max-width: ${a})` : s && (i = `(min-width: ${s})`), i;
}
function $f(e) {
  const { children: t, ssr: n } = e, r = Ds(e);
  return /* @__PURE__ */ f.jsx(js, { breakpoint: r, hide: !0, ssr: n, children: t });
}
$f.displayName = "Hide";
function Yy(e) {
  const [t] = An(
    "(prefers-reduced-motion: reduce)",
    e
  );
  return t;
}
function Xy(e) {
  const [t, n] = An(
    ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    e
  );
  if (t)
    return "light";
  if (n)
    return "dark";
}
function Vf(e) {
  const { children: t, ssr: n } = e, r = Ds(e);
  return /* @__PURE__ */ f.jsx(js, { breakpoint: r, ssr: n, children: t });
}
Vf.displayName = "Show";
function Hf(e, t, n = ki) {
  let r = Object.keys(e).indexOf(t);
  if (r !== -1)
    return e[t];
  let o = n.indexOf(t);
  for (; o >= 0; ) {
    const a = n[o];
    if (e.hasOwnProperty(a)) {
      r = o;
      break;
    }
    o -= 1;
  }
  if (r !== -1) {
    const a = n[r];
    return e[a];
  }
}
function Wf(e) {
  var t, n;
  const r = tt(e) ? e : { fallback: e ?? "base" }, a = ot().__breakpoints.details.map(
    ({ minMaxQuery: l, breakpoint: u }) => ({
      breakpoint: u,
      query: l.replace("@media screen and ", "")
    })
  ), s = a.map((l) => l.breakpoint === r.fallback), c = An(
    a.map((l) => l.query),
    { fallback: s, ssr: r.ssr }
  ).findIndex((l) => l == !0);
  return (n = (t = a[c]) == null ? void 0 : t.breakpoint) != null ? n : r.fallback;
}
function zf(e, t) {
  var n;
  const r = tt(t) ? t : { fallback: t ?? "base" }, o = Wf(r), a = ot();
  if (!o)
    return;
  const s = Array.from(((n = a.__breakpoints) == null ? void 0 : n.keys) || []), i = Array.isArray(e) ? Object.fromEntries(
    Object.entries(Ci(e, s)).map(
      ([c, l]) => [c, l]
    )
  ) : e;
  return Hf(i, o, s);
}
var Fs = b(
  (e, t) => {
    const n = Pn();
    return /* @__PURE__ */ f.jsx(
      g.span,
      {
        ref: t,
        ...e,
        __css: n.command,
        className: "chakra-menu__command"
      }
    );
  }
);
Fs.displayName = "MenuCommand";
var Rs = b(
  (e, t) => {
    const { type: n, ...r } = e, o = Pn(), a = r.as || n ? n ?? void 0 : "button", s = _e(
      () => ({
        textDecoration: "none",
        color: "inherit",
        userSelect: "none",
        display: "flex",
        width: "100%",
        alignItems: "center",
        textAlign: "start",
        flex: "0 0 auto",
        outline: 0,
        ...o.item
      }),
      [o.item]
    );
    return /* @__PURE__ */ f.jsx(g.button, { ref: t, type: a, ...r, __css: s });
  }
), vo = (e) => {
  const { className: t, children: n, ...r } = e, o = at.only(n), a = Rr(o) ? Ae(o, {
    focusable: "false",
    "aria-hidden": !0,
    className: C("chakra-menu__icon", o.props.className)
  }) : null, s = C("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ f.jsx(
    g.span,
    {
      className: s,
      ...r,
      __css: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0
      },
      children: a
    }
  );
};
vo.displayName = "MenuIcon";
var Uf = b((e, t) => {
  const {
    icon: n,
    iconSpacing: r = "0.75rem",
    command: o,
    commandSpacing: a = "0.75rem",
    children: s,
    ...i
  } = e, c = Ni(i, t), u = n || o ? /* @__PURE__ */ f.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: s }) : s;
  return /* @__PURE__ */ f.jsxs(
    Rs,
    {
      ...c,
      className: C("chakra-menu__menuitem", c.className),
      children: [
        n && /* @__PURE__ */ f.jsx(vo, { fontSize: "0.8em", marginEnd: r, children: n }),
        u,
        o && /* @__PURE__ */ f.jsx(Fs, { marginStart: a, children: o })
      ]
    }
  );
});
Uf.displayName = "MenuItem";
var Ms = b((e, t) => {
  const { title: n, children: r, className: o, ...a } = e, s = C("chakra-menu__group__title", o), i = Pn();
  return /* @__PURE__ */ f.jsxs("div", { ref: t, className: "chakra-menu__group", role: "group", children: [
    n && /* @__PURE__ */ f.jsx(g.p, { className: s, ...a, __css: i.groupTitle, children: n }),
    r
  ] });
});
Ms.displayName = "MenuGroup";
var Gf = (e) => {
  const { className: t, title: n, ...r } = e, o = Ei(r);
  return /* @__PURE__ */ f.jsx(
    Ms,
    {
      title: n,
      className: C("chakra-menu__option-group", t),
      ...o
    }
  );
};
Gf.displayName = "MenuOptionGroup";
var Kf = (e) => {
  const { className: t, ...n } = e, r = Pn();
  return /* @__PURE__ */ f.jsx(
    g.hr,
    {
      "aria-orientation": "horizontal",
      className: C("chakra-menu__divider", t),
      ...n,
      __css: r.divider
    }
  );
};
Kf.displayName = "MenuDivider";
var qf = (e) => /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ f.jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) }), Os = b(
  (e, t) => {
    const { icon: n, iconSpacing: r = "0.75rem", ...o } = e, a = Ii(o, t);
    return /* @__PURE__ */ f.jsxs(
      Rs,
      {
        ...a,
        className: C("chakra-menu__menuitem-option", o.className),
        children: [
          n !== null && /* @__PURE__ */ f.jsx(
            vo,
            {
              fontSize: "0.8em",
              marginEnd: r,
              opacity: e.isChecked ? 1 : 0,
              children: n || /* @__PURE__ */ f.jsx(qf, {})
            }
          ),
          /* @__PURE__ */ f.jsx("span", { style: { flex: 1 }, children: a.children })
        ]
      }
    );
  }
);
Os.id = "MenuItemOption";
Os.displayName = "MenuItemOption";
var Yf = {
  slideInBottom: {
    ...mr,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...mr,
    custom: { offsetX: 16, reverse: !0 }
  },
  scale: {
    ...Ta,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, Xf = g(Xe.section), Zf = (e) => Yf[e || "none"], Ls = Ot(
  (e, t) => {
    const { preset: n, motionProps: r = Zf(n), ...o } = e;
    return /* @__PURE__ */ f.jsx(Xf, { ref: t, ...r, ...o });
  }
);
Ls.displayName = "ModalTransition";
var Qf = Object.defineProperty, Jf = (e, t, n) => t in e ? Qf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ev = (e, t, n) => (Jf(e, typeof t != "symbol" ? t + "" : t, n), n), tv = class {
  constructor() {
    ev(this, "modals"), this.modals = /* @__PURE__ */ new Map();
  }
  add(e) {
    return this.modals.set(e, this.modals.size + 1), this.modals.size;
  }
  remove(e) {
    this.modals.delete(e);
  }
  isTopModal(e) {
    return e ? this.modals.get(e) === this.modals.size : !1;
  }
}, Cr = new tv();
function Bs(e, t) {
  const [n, r] = te(0);
  return de(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = Cr.add(o);
        r(a);
      }
      return () => {
        Cr.remove(o), r(0);
      };
    }
  }, [t, e]), n;
}
var nv = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, _t = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), ln = {}, nr = 0, $s = function(e) {
  return e && (e.host || $s(e.parentNode));
}, rv = function(e, t) {
  return t.map(function(n) {
    if (e.contains(n))
      return n;
    var r = $s(n);
    return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(n) {
    return !!n;
  });
}, ov = function(e, t, n, r) {
  var o = rv(t, Array.isArray(e) ? e : [e]);
  ln[n] || (ln[n] = /* @__PURE__ */ new WeakMap());
  var a = ln[n], s = [], i = /* @__PURE__ */ new Set(), c = new Set(o), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  o.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(v) {
      if (i.has(v))
        u(v);
      else {
        var p = v.getAttribute(r), y = p !== null && p !== "false", m = (_t.get(v) || 0) + 1, h = (a.get(v) || 0) + 1;
        _t.set(v, m), a.set(v, h), s.push(v), m === 1 && y && cn.set(v, !0), h === 1 && v.setAttribute(n, "true"), y || v.setAttribute(r, "true");
      }
    });
  };
  return u(t), i.clear(), nr++, function() {
    s.forEach(function(d) {
      var v = _t.get(d) - 1, p = a.get(d) - 1;
      _t.set(d, v), a.set(d, p), v || (cn.has(d) || d.removeAttribute(r), cn.delete(d)), p || d.removeAttribute(n);
    }), nr--, nr || (_t = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ new WeakMap(), cn = /* @__PURE__ */ new WeakMap(), ln = {});
  };
}, av = function(e, t, n) {
  n === void 0 && (n = "data-aria-hidden");
  var r = Array.from(Array.isArray(e) ? e : [e]), o = t || nv(e);
  return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))), ov(r, o, n, "aria-hidden")) : function() {
    return null;
  };
};
function sv(e) {
  const {
    isOpen: t,
    onClose: n,
    id: r,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: s = !0,
    onOverlayClick: i,
    onEsc: c
  } = e, l = ae(null), u = ae(null), [d, v, p] = cv(
    r,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  iv(l, t && s);
  const y = Bs(l, t), m = ae(null), h = S((W) => {
    m.current = W.target;
  }, []), w = S(
    (W) => {
      W.key === "Escape" && (W.stopPropagation(), a && (n == null || n()), c == null || c());
    },
    [a, n, c]
  ), [P, I] = te(!1), [A, T] = te(!1), E = S(
    (W = {}, R = null) => ({
      role: "dialog",
      ...W,
      ref: Se(R, l),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": P ? v : void 0,
      "aria-describedby": A ? p : void 0,
      onClick: H(
        W.onClick,
        (L) => L.stopPropagation()
      )
    }),
    [p, A, d, v, P]
  ), j = S(
    (W) => {
      W.stopPropagation(), m.current === W.target && Cr.isTopModal(l.current) && (o && (n == null || n()), i == null || i());
    },
    [n, o, i]
  ), D = S(
    (W = {}, R = null) => ({
      ...W,
      ref: Se(R, u),
      onClick: H(W.onClick, j),
      onKeyDown: H(W.onKeyDown, w),
      onMouseDown: H(W.onMouseDown, h)
    }),
    [w, h, j]
  );
  return {
    isOpen: t,
    onClose: n,
    headerId: v,
    bodyId: p,
    setBodyMounted: T,
    setHeaderMounted: I,
    dialogRef: l,
    overlayRef: u,
    getDialogProps: E,
    getDialogContainerProps: D,
    index: y
  };
}
function iv(e, t) {
  const n = e.current;
  de(() => {
    if (!(!e.current || !t))
      return av(e.current);
  }, [t, e, n]);
}
function cv(e, ...t) {
  const n = $e(), r = e || n;
  return _e(() => t.map((o) => `${o}-${r}`), [r, t]);
}
var [lv, bt] = ge({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [uv, rt] = ge({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), po = (e) => {
  const t = {
    scrollBehavior: "outside",
    autoFocus: !0,
    trapFocus: !0,
    returnFocusOnClose: !0,
    blockScrollOnMount: !0,
    allowPinchZoom: !1,
    motionPreset: "scale",
    lockFocusAcrossFrames: !0,
    ...e
  }, {
    portalProps: n,
    children: r,
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: s,
    finalFocusRef: i,
    returnFocusOnClose: c,
    blockScrollOnMount: l,
    allowPinchZoom: u,
    preserveScrollBarGap: d,
    motionPreset: v,
    lockFocusAcrossFrames: p,
    onCloseComplete: y
  } = t, m = ke("Modal", t), w = {
    ...sv(t),
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: s,
    finalFocusRef: i,
    returnFocusOnClose: c,
    blockScrollOnMount: l,
    allowPinchZoom: u,
    preserveScrollBarGap: d,
    motionPreset: v,
    lockFocusAcrossFrames: p
  };
  return /* @__PURE__ */ f.jsx(uv, { value: w, children: /* @__PURE__ */ f.jsx(lv, { value: m, children: /* @__PURE__ */ f.jsx(ht, { onExitComplete: y, children: w.isOpen && /* @__PURE__ */ f.jsx(ma, { ...n, children: r }) }) }) });
};
po.displayName = "Modal";
var vn = "right-scroll-bar-position", pn = "width-before-scroll-bar", dv = "with-scroll-bars-hidden", fv = "--removed-body-scroll-bar-size", Vs = qa(), rr = function() {
}, jn = re.forwardRef(function(e, t) {
  var n = re.useRef(null), r = re.useState({
    onScrollCapture: rr,
    onWheelCapture: rr,
    onTouchMoveCapture: rr
  }), o = r[0], a = r[1], s = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, v = e.sideCar, p = e.noIsolation, y = e.inert, m = e.allowPinchZoom, h = e.as, w = h === void 0 ? "div" : h, P = e.gapMode, I = Ua(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), A = v, T = za([n, t]), E = Ke(Ke({}, I), o);
  return re.createElement(
    re.Fragment,
    null,
    u && re.createElement(A, { sideCar: Vs, removeScrollBar: l, shards: d, noIsolation: p, inert: y, setCallbacks: a, allowPinchZoom: !!m, lockRef: n, gapMode: P }),
    s ? re.cloneElement(re.Children.only(i), Ke(Ke({}, E), { ref: T })) : re.createElement(w, Ke({}, E, { className: c, ref: T }), i)
  );
});
jn.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
jn.classNames = {
  fullWidth: pn,
  zeroRight: vn
};
var Wo, vv = function() {
  if (Wo)
    return Wo;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function pv() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = vv();
  return t && e.setAttribute("nonce", t), e;
}
function mv(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function hv(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var yv = function() {
  var e = 0, t = null;
  return {
    add: function(n) {
      e == 0 && (t = pv()) && (mv(t, n), hv(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, gv = function() {
  var e = yv();
  return function(t, n) {
    re.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && n]);
  };
}, Hs = function() {
  var e = gv(), t = function(n) {
    var r = n.styles, o = n.dynamic;
    return e(r, o), null;
  };
  return t;
}, bv = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, or = function(e) {
  return parseInt(e || "", 10) || 0;
}, xv = function(e) {
  var t = window.getComputedStyle(document.body), n = t[e === "padding" ? "paddingLeft" : "marginLeft"], r = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [or(n), or(r), or(o)];
}, Sv = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return bv;
  var t = xv(e), n = document.documentElement.clientWidth, r = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, r - n + t[2] - t[0])
  };
}, wv = Hs(), Pv = function(e, t, n, r) {
  var o = e.left, a = e.top, s = e.right, i = e.gap;
  return n === void 0 && (n = "margin"), `
  .`.concat(dv, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(i, "px ").concat(r, `;
  }
  body {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(r, ";"),
    n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(s, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(r, `;
    `),
    n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(vn, ` {
    right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(pn, ` {
    margin-right: `).concat(i, "px ").concat(r, `;
  }
  
  .`).concat(vn, " .").concat(vn, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(pn, " .").concat(pn, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body {
    `).concat(fv, ": ").concat(i, `px;
  }
`);
}, _v = function(e) {
  var t = e.noRelative, n = e.noImportant, r = e.gapMode, o = r === void 0 ? "margin" : r, a = re.useMemo(function() {
    return Sv(o);
  }, [o]);
  return re.createElement(wv, { styles: Pv(a, !t, o, n ? "" : "!important") });
}, Nr = !1;
if (typeof window < "u")
  try {
    var un = Object.defineProperty({}, "passive", {
      get: function() {
        return Nr = !0, !0;
      }
    });
    window.addEventListener("test", un, un), window.removeEventListener("test", un, un);
  } catch {
    Nr = !1;
  }
var kt = Nr ? { passive: !1 } : !1, kv = function(e) {
  return e.tagName === "TEXTAREA";
}, Ws = function(e, t) {
  var n = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    n[t] !== "hidden" && // contains scroll inside self
    !(n.overflowY === n.overflowX && !kv(e) && n[t] === "visible")
  );
}, Cv = function(e) {
  return Ws(e, "overflowY");
}, Nv = function(e) {
  return Ws(e, "overflowX");
}, zo = function(e, t) {
  var n = t.ownerDocument, r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var o = zs(e, r);
    if (o) {
      var a = Us(e, r), s = a[1], i = a[2];
      if (s > i)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== n.body);
  return !1;
}, Ev = function(e) {
  var t = e.scrollTop, n = e.scrollHeight, r = e.clientHeight;
  return [
    t,
    n,
    r
  ];
}, Iv = function(e) {
  var t = e.scrollLeft, n = e.scrollWidth, r = e.clientWidth;
  return [
    t,
    n,
    r
  ];
}, zs = function(e, t) {
  return e === "v" ? Cv(t) : Nv(t);
}, Us = function(e, t) {
  return e === "v" ? Ev(t) : Iv(t);
}, Tv = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Av = function(e, t, n, r, o) {
  var a = Tv(e, window.getComputedStyle(t).direction), s = a * r, i = n.target, c = t.contains(i), l = !1, u = s > 0, d = 0, v = 0;
  do {
    var p = Us(e, i), y = p[0], m = p[1], h = p[2], w = m - h - a * y;
    (y || w) && zs(e, i) && (d += w, v += y), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (o && d === 0 || !o && s > d) || !u && (o && v === 0 || !o && -s > v)) && (l = !0), l;
}, dn = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Uo = function(e) {
  return [e.deltaX, e.deltaY];
}, Go = function(e) {
  return e && "current" in e ? e.current : e;
}, jv = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Dv = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Fv = 0, Ct = [];
function Rv(e) {
  var t = re.useRef([]), n = re.useRef([0, 0]), r = re.useRef(), o = re.useState(Fv++)[0], a = re.useState(Hs)[0], s = re.useRef(e);
  re.useEffect(function() {
    s.current = e;
  }, [e]), re.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = Ku([e.lockRef.current], (e.shards || []).map(Go), !0).filter(Boolean);
      return m.forEach(function(h) {
        return h.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(h) {
          return h.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = re.useCallback(function(m, h) {
    if ("touches" in m && m.touches.length === 2)
      return !s.current.allowPinchZoom;
    var w = dn(m), P = n.current, I = "deltaX" in m ? m.deltaX : P[0] - w[0], A = "deltaY" in m ? m.deltaY : P[1] - w[1], T, E = m.target, j = Math.abs(I) > Math.abs(A) ? "h" : "v";
    if ("touches" in m && j === "h" && E.type === "range")
      return !1;
    var D = zo(j, E);
    if (!D)
      return !0;
    if (D ? T = j : (T = j === "v" ? "h" : "v", D = zo(j, E)), !D)
      return !1;
    if (!r.current && "changedTouches" in m && (I || A) && (r.current = T), !T)
      return !0;
    var W = r.current || T;
    return Av(W, h, m, W === "h" ? I : A, !0);
  }, []), c = re.useCallback(function(m) {
    var h = m;
    if (!(!Ct.length || Ct[Ct.length - 1] !== a)) {
      var w = "deltaY" in h ? Uo(h) : dn(h), P = t.current.filter(function(T) {
        return T.name === h.type && T.target === h.target && jv(T.delta, w);
      })[0];
      if (P && P.should) {
        h.cancelable && h.preventDefault();
        return;
      }
      if (!P) {
        var I = (s.current.shards || []).map(Go).filter(Boolean).filter(function(T) {
          return T.contains(h.target);
        }), A = I.length > 0 ? i(h, I[0]) : !s.current.noIsolation;
        A && h.cancelable && h.preventDefault();
      }
    }
  }, []), l = re.useCallback(function(m, h, w, P) {
    var I = { name: m, delta: h, target: w, should: P };
    t.current.push(I), setTimeout(function() {
      t.current = t.current.filter(function(A) {
        return A !== I;
      });
    }, 1);
  }, []), u = re.useCallback(function(m) {
    n.current = dn(m), r.current = void 0;
  }, []), d = re.useCallback(function(m) {
    l(m.type, Uo(m), m.target, i(m, e.lockRef.current));
  }, []), v = re.useCallback(function(m) {
    l(m.type, dn(m), m.target, i(m, e.lockRef.current));
  }, []);
  re.useEffect(function() {
    return Ct.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: v
    }), document.addEventListener("wheel", c, kt), document.addEventListener("touchmove", c, kt), document.addEventListener("touchstart", u, kt), function() {
      Ct = Ct.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", c, kt), document.removeEventListener("touchmove", c, kt), document.removeEventListener("touchstart", u, kt);
    };
  }, []);
  var p = e.removeScrollBar, y = e.inert;
  return re.createElement(
    re.Fragment,
    null,
    y ? re.createElement(a, { styles: Dv(o) }) : null,
    p ? re.createElement(_v, { gapMode: e.gapMode }) : null
  );
}
const Mv = qu(Vs, Rv);
var Gs = re.forwardRef(function(e, t) {
  return re.createElement(jn, Ke({}, e, { ref: t, sideCar: Mv }));
});
Gs.classNames = jn.classNames;
const Ov = Gs;
function Ks(e) {
  const {
    autoFocus: t,
    trapFocus: n,
    dialogRef: r,
    initialFocusRef: o,
    blockScrollOnMount: a,
    allowPinchZoom: s,
    finalFocusRef: i,
    returnFocusOnClose: c,
    preserveScrollBarGap: l,
    lockFocusAcrossFrames: u,
    isOpen: d
  } = rt(), [v, p] = Vi();
  de(() => {
    !v && p && setTimeout(p);
  }, [v, p]);
  const y = Bs(r, d);
  return /* @__PURE__ */ f.jsx(
    bs,
    {
      autoFocus: t,
      isDisabled: !n,
      initialFocusRef: o,
      finalFocusRef: i,
      restoreFocus: c,
      contentRef: r,
      lockFocusAcrossFrames: u,
      children: /* @__PURE__ */ f.jsx(
        Ov,
        {
          removeScrollBar: !l,
          allowPinchZoom: s,
          enabled: y === 1 && a,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var qs = b(
  (e, t) => {
    const {
      className: n,
      children: r,
      containerProps: o,
      motionProps: a,
      ...s
    } = e, { getDialogProps: i, getDialogContainerProps: c } = rt(), l = i(s, t), u = c(o), d = C("chakra-modal__content", n), v = bt(), p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...v.dialog
    }, y = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...v.dialogContainer
    }, { motionPreset: m } = rt();
    return /* @__PURE__ */ f.jsx(Ks, { children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...u,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: y,
        children: /* @__PURE__ */ f.jsx(
          Ls,
          {
            preset: m,
            motionProps: a,
            className: d,
            ...l,
            __css: p,
            children: r
          }
        )
      }
    ) });
  }
);
qs.displayName = "ModalContent";
function Zy(e) {
  const { leastDestructiveRef: t, ...n } = e;
  return /* @__PURE__ */ f.jsx(po, { ...n, initialFocusRef: t });
}
var Qy = b(
  (e, t) => /* @__PURE__ */ f.jsx(qs, { ref: t, role: "alertdialog", ...e })
), [Lv, Bv] = ge(), $v = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function Vv(e, t) {
  var n, r;
  if (e)
    return (r = (n = $v[e]) == null ? void 0 : n[t]) != null ? r : e;
}
function Jy(e) {
  var t;
  const {
    isOpen: n,
    onClose: r,
    placement: o = "right",
    children: a,
    ...s
  } = e, i = ot(), c = (t = i.components) == null ? void 0 : t.Drawer, l = Vv(o, i.direction);
  return /* @__PURE__ */ f.jsx(Lv, { value: { placement: l }, children: /* @__PURE__ */ f.jsx(
    po,
    {
      isOpen: n,
      onClose: r,
      styleConfig: c,
      ...s,
      children: a
    }
  ) });
}
var Hv = g(Aa), Wv = b(
  (e, t) => {
    const {
      className: n,
      children: r,
      motionProps: o,
      containerProps: a,
      ...s
    } = e, { getDialogProps: i, getDialogContainerProps: c, isOpen: l } = rt(), u = i(s, t), d = c(a), v = C("chakra-modal__content", n), p = bt(), y = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...p.dialog
    }, m = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...p.dialogContainer
    }, { placement: h } = Bv();
    return /* @__PURE__ */ f.jsx(Ks, { children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: m,
        children: /* @__PURE__ */ f.jsx(
          Hv,
          {
            motionProps: o,
            direction: h,
            in: l,
            className: v,
            ...u,
            __css: y,
            children: r
          }
        )
      }
    ) });
  }
);
Wv.displayName = "DrawerContent";
var zv = b(
  (e, t) => {
    const { className: n, ...r } = e, o = C("chakra-modal__footer", n), s = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...bt().footer
    };
    return /* @__PURE__ */ f.jsx(
      g.footer,
      {
        ref: t,
        ...r,
        __css: s,
        className: o
      }
    );
  }
);
zv.displayName = "ModalFooter";
var Uv = b(
  (e, t) => {
    const { className: n, ...r } = e, { headerId: o, setHeaderMounted: a } = rt();
    de(() => (a(!0), () => a(!1)), [a]);
    const s = C("chakra-modal__header", n), c = {
      flex: 0,
      ...bt().header
    };
    return /* @__PURE__ */ f.jsx(
      g.header,
      {
        ref: t,
        className: s,
        id: o,
        ...r,
        __css: c
      }
    );
  }
);
Uv.displayName = "ModalHeader";
var Gv = g(Xe.div), Kv = b(
  (e, t) => {
    const { className: n, transition: r, motionProps: o, ...a } = e, s = C("chakra-modal__overlay", n), c = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...bt().overlay
    }, { motionPreset: l } = rt(), d = o || (l === "none" ? {} : Ia);
    return /* @__PURE__ */ f.jsx(
      Gv,
      {
        ...d,
        __css: c,
        ref: t,
        className: s,
        ...a
      }
    );
  }
);
Kv.displayName = "ModalOverlay";
var qv = b((e, t) => {
  const { className: n, ...r } = e, { bodyId: o, setBodyMounted: a } = rt();
  de(() => (a(!0), () => a(!1)), [a]);
  const s = C("chakra-modal__body", n), i = bt();
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: t,
      className: s,
      id: o,
      ...r,
      __css: i.body
    }
  );
});
qv.displayName = "ModalBody";
var Yv = b(
  (e, t) => {
    const { onClick: n, className: r, ...o } = e, { onClose: a } = rt(), s = C("chakra-modal__close-btn", r), i = bt();
    return /* @__PURE__ */ f.jsx(
      ha,
      {
        ref: t,
        __css: i.closeButton,
        className: s,
        onClick: H(n, (c) => {
          c.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
Yv.displayName = "ModalCloseButton";
var Xv = (e) => /* @__PURE__ */ f.jsx(Ve, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ f.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) }), Zv = (e) => /* @__PURE__ */ f.jsx(Ve, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ f.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
  }
) });
function Ko(e, t, n, r) {
  de(() => {
    var o;
    if (!e.current || !r)
      return;
    const a = (o = e.current.ownerDocument.defaultView) != null ? o : window, s = Array.isArray(t) ? t : [t], i = new a.MutationObserver((c) => {
      for (const l of c)
        l.type === "attributes" && l.attributeName && s.includes(l.attributeName) && n(l);
    });
    return i.observe(e.current, { attributes: !0, attributeFilter: s }), () => i.disconnect();
  });
}
function Qv(e, t) {
  const n = Ee(e);
  de(() => {
    let r = null;
    const o = () => n();
    return t !== null && (r = window.setInterval(o, t)), () => {
      r && window.clearInterval(r);
    };
  }, [t, n]);
}
var Jv = 50, qo = 300;
function ep(e, t) {
  const [n, r] = te(!1), [o, a] = te(null), [s, i] = te(!0), c = ae(null), l = () => clearTimeout(c.current);
  Qv(
    () => {
      o === "increment" && e(), o === "decrement" && t();
    },
    n ? Jv : null
  );
  const u = S(() => {
    s && e(), c.current = setTimeout(() => {
      i(!1), r(!0), a("increment");
    }, qo);
  }, [e, s]), d = S(() => {
    s && t(), c.current = setTimeout(() => {
      i(!1), r(!0), a("decrement");
    }, qo);
  }, [t, s]), v = S(() => {
    i(!0), r(!1), l();
  }, []);
  return de(() => () => l(), []), { up: u, down: d, stop: v, isSpinning: n };
}
var tp = /^[Ee0-9+\-.]$/;
function np(e) {
  return tp.test(e);
}
function rp(e, t) {
  if (e.key == null)
    return !0;
  const n = e.ctrlKey || e.altKey || e.metaKey;
  return !(e.key.length === 1) || n ? !0 : t(e.key);
}
function op(e = {}) {
  const {
    focusInputOnChange: t = !0,
    clampValueOnBlur: n = !0,
    keepWithinRange: r = !0,
    min: o = Number.MIN_SAFE_INTEGER,
    max: a = Number.MAX_SAFE_INTEGER,
    step: s = 1,
    isReadOnly: i,
    isDisabled: c,
    isRequired: l,
    isInvalid: u,
    pattern: d = "[0-9]*(.[0-9]+)?",
    inputMode: v = "decimal",
    allowMouseWheel: p,
    id: y,
    onChange: m,
    precision: h,
    name: w,
    "aria-describedby": P,
    "aria-label": I,
    "aria-labelledby": A,
    onFocus: T,
    onBlur: E,
    onInvalid: j,
    getAriaValueText: D,
    isValidCharacter: W,
    format: R,
    parse: L,
    ...ee
  } = e, Q = Ee(T), ie = Ee(E), ue = Ee(j), ne = Ee(
    W ?? np
  ), z = Ee(D), B = Su(e), {
    update: le,
    increment: x,
    decrement: _
  } = B, [Y, U] = te(!1), N = !(i || c), F = ae(null), X = ae(null), Z = ae(null), J = ae(null), k = S(
    (V) => V.split("").filter(ne).join(""),
    [ne]
  ), M = S(
    (V) => {
      var he;
      return (he = L == null ? void 0 : L(V)) != null ? he : V;
    },
    [L]
  ), G = S(
    (V) => {
      var he;
      return ((he = R == null ? void 0 : R(V)) != null ? he : V).toString();
    },
    [R]
  );
  Qt(() => {
    (B.valueAsNumber > a || B.valueAsNumber < o) && (ue == null || ue("rangeOverflow", G(B.value), B.valueAsNumber));
  }, [B.valueAsNumber, B.value, G, ue]), It(() => {
    if (!F.current)
      return;
    if (F.current.value != B.value) {
      const he = M(F.current.value);
      B.setValue(k(he));
    }
  }, [M, k]);
  const K = S(
    (V = s) => {
      N && x(V);
    },
    [x, N, s]
  ), ye = S(
    (V = s) => {
      N && _(V);
    },
    [_, N, s]
  ), O = ep(K, ye);
  Ko(
    Z,
    "disabled",
    O.stop,
    O.isSpinning
  ), Ko(
    J,
    "disabled",
    O.stop,
    O.isSpinning
  );
  const oe = S(
    (V) => {
      if (V.nativeEvent.isComposing)
        return;
      const Ce = M(V.currentTarget.value);
      le(k(Ce)), X.current = {
        start: V.currentTarget.selectionStart,
        end: V.currentTarget.selectionEnd
      };
    },
    [le, k, M]
  ), we = S(
    (V) => {
      var he, Ce, Ie;
      Q == null || Q(V), X.current && (V.target.selectionStart = (Ce = X.current.start) != null ? Ce : (he = V.currentTarget.value) == null ? void 0 : he.length, V.currentTarget.selectionEnd = (Ie = X.current.end) != null ? Ie : V.currentTarget.selectionStart);
    },
    [Q]
  ), be = S(
    (V) => {
      if (V.nativeEvent.isComposing)
        return;
      rp(V, ne) || V.preventDefault();
      const he = xe(V) * s, Ce = V.key, q = {
        ArrowUp: () => K(he),
        ArrowDown: () => ye(he),
        Home: () => le(o),
        End: () => le(a)
      }[Ce];
      q && (V.preventDefault(), q(V));
    },
    [ne, s, K, ye, le, o, a]
  ), xe = (V) => {
    let he = 1;
    return (V.metaKey || V.ctrlKey) && (he = 0.1), V.shiftKey && (he = 10), he;
  }, je = _e(() => {
    const V = z == null ? void 0 : z(B.value);
    if (V != null)
      return V;
    const he = B.value.toString();
    return he || void 0;
  }, [B.value, z]), Re = S(() => {
    let V = B.value;
    if (B.value === "")
      return;
    /^[eE]/.test(B.value.toString()) ? B.setValue("") : (B.valueAsNumber < o && (V = o), B.valueAsNumber > a && (V = a), B.cast(V));
  }, [B, a, o]), Ge = S(() => {
    U(!1), n && Re();
  }, [n, U, Re]), He = S(() => {
    t && requestAnimationFrame(() => {
      var V;
      (V = F.current) == null || V.focus();
    });
  }, [t]), Qe = S(
    (V) => {
      V.preventDefault(), O.up(), He();
    },
    [He, O]
  ), Je = S(
    (V) => {
      V.preventDefault(), O.down(), He();
    },
    [He, O]
  );
  zt(
    () => F.current,
    "wheel",
    (V) => {
      var he, Ce;
      const q = ((Ce = (he = F.current) == null ? void 0 : he.ownerDocument) != null ? Ce : document).activeElement === F.current;
      if (!p || !q)
        return;
      V.preventDefault();
      const ce = xe(V) * s, Ye = Math.sign(V.deltaY);
      Ye === -1 ? K(ce) : Ye === 1 && ye(ce);
    },
    { passive: !1 }
  );
  const Bt = S(
    (V = {}, he = null) => {
      const Ce = c || r && B.isAtMax;
      return {
        ...V,
        ref: Se(he, Z),
        role: "button",
        tabIndex: -1,
        onPointerDown: H(V.onPointerDown, (Ie) => {
          Ie.button !== 0 || Ce || Qe(Ie);
        }),
        onPointerLeave: H(V.onPointerLeave, O.stop),
        onPointerUp: H(V.onPointerUp, O.stop),
        disabled: Ce,
        "aria-disabled": Fe(Ce)
      };
    },
    [B.isAtMax, r, Qe, O.stop, c]
  ), $t = S(
    (V = {}, he = null) => {
      const Ce = c || r && B.isAtMin;
      return {
        ...V,
        ref: Se(he, J),
        role: "button",
        tabIndex: -1,
        onPointerDown: H(V.onPointerDown, (Ie) => {
          Ie.button !== 0 || Ce || Je(Ie);
        }),
        onPointerLeave: H(V.onPointerLeave, O.stop),
        onPointerUp: H(V.onPointerUp, O.stop),
        disabled: Ce,
        "aria-disabled": Fe(Ce)
      };
    },
    [B.isAtMin, r, Je, O.stop, c]
  ), Vt = S(
    (V = {}, he = null) => {
      var Ce, Ie, q, ce;
      return {
        name: w,
        inputMode: v,
        type: "text",
        pattern: d,
        "aria-labelledby": A,
        "aria-label": I,
        "aria-describedby": P,
        id: y,
        disabled: c,
        ...V,
        readOnly: (Ce = V.readOnly) != null ? Ce : i,
        "aria-readonly": (Ie = V.readOnly) != null ? Ie : i,
        "aria-required": (q = V.required) != null ? q : l,
        required: (ce = V.required) != null ? ce : l,
        ref: Se(F, he),
        value: G(B.value),
        role: "spinbutton",
        "aria-valuemin": o,
        "aria-valuemax": a,
        "aria-valuenow": Number.isNaN(B.valueAsNumber) ? void 0 : B.valueAsNumber,
        "aria-invalid": Fe(u ?? B.isOutOfRange),
        "aria-valuetext": je,
        autoComplete: "off",
        autoCorrect: "off",
        onChange: H(V.onChange, oe),
        onKeyDown: H(V.onKeyDown, be),
        onFocus: H(
          V.onFocus,
          we,
          () => U(!0)
        ),
        onBlur: H(V.onBlur, ie, Ge)
      };
    },
    [
      w,
      v,
      d,
      A,
      I,
      G,
      P,
      y,
      c,
      l,
      i,
      u,
      B.value,
      B.valueAsNumber,
      B.isOutOfRange,
      o,
      a,
      je,
      oe,
      be,
      we,
      ie,
      Ge
    ]
  );
  return {
    value: G(B.value),
    valueAsNumber: B.valueAsNumber,
    isFocused: Y,
    isDisabled: c,
    isReadOnly: i,
    getIncrementButtonProps: Bt,
    getDecrementButtonProps: $t,
    getInputProps: Vt,
    htmlProps: ee
  };
}
var [ap, Dn] = ge({
  name: "NumberInputStylesContext",
  errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `
}), [sp, mo] = ge({
  name: "NumberInputContext",
  errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
}), ip = b(
  function(t, n) {
    const r = ke("NumberInput", t), o = me(t), a = Ur(o), { htmlProps: s, ...i } = op(a), c = _e(() => i, [i]);
    return /* @__PURE__ */ f.jsx(sp, { value: c, children: /* @__PURE__ */ f.jsx(ap, { value: r, children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...s,
        ref: n,
        className: C("chakra-numberinput", t.className),
        __css: {
          position: "relative",
          zIndex: 0,
          ...r.root
        }
      }
    ) }) });
  }
);
ip.displayName = "NumberInput";
var cp = b(
  function(t, n) {
    const r = Dn();
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        "aria-hidden": !0,
        ref: n,
        ...t,
        __css: {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: "0",
          insetEnd: "0px",
          margin: "1px",
          height: "calc(100% - 2px)",
          zIndex: 1,
          ...r.stepperGroup
        }
      }
    );
  }
);
cp.displayName = "NumberInputStepper";
var lp = b(
  function(t, n) {
    const { getInputProps: r } = mo(), o = r(t, n), a = Dn();
    return /* @__PURE__ */ f.jsx(
      g.input,
      {
        ...o,
        className: C("chakra-numberinput__field", t.className),
        __css: {
          width: "100%",
          ...a.field
        }
      }
    );
  }
);
lp.displayName = "NumberInputField";
var Ys = g("div", {
  baseStyle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    transitionProperty: "common",
    transitionDuration: "normal",
    userSelect: "none",
    cursor: "pointer",
    lineHeight: "normal"
  }
}), up = b(function(t, n) {
  var r;
  const o = Dn(), { getDecrementButtonProps: a } = mo(), s = a(t, n);
  return /* @__PURE__ */ f.jsx(Ys, { ...s, __css: o.stepper, children: (r = t.children) != null ? r : /* @__PURE__ */ f.jsx(Xv, {}) });
});
up.displayName = "NumberDecrementStepper";
var dp = b(function(t, n) {
  var r;
  const { getIncrementButtonProps: o } = mo(), a = o(t, n), s = Dn();
  return /* @__PURE__ */ f.jsx(Ys, { ...a, __css: s.stepper, children: (r = t.children) != null ? r : /* @__PURE__ */ f.jsx(Zv, {}) });
});
dp.displayName = "NumberIncrementStepper";
var [
  fp,
  eg,
  vp,
  pp
] = jr(), [mp, hp] = ge({
  name: "PinInputContext",
  errorMessage: "usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"
}), Yo = (e) => e == null ? void 0 : e.split("");
function Xo(e, t) {
  return (t === "alphanumeric" ? /^[a-zA-Z0-9]+$/i : /^[0-9]+$/).test(e);
}
function yp(e = {}) {
  const {
    autoFocus: t,
    value: n,
    defaultValue: r,
    onChange: o,
    onComplete: a,
    placeholder: s = "○",
    manageFocus: i = !0,
    otp: c = !1,
    id: l,
    isDisabled: u,
    isInvalid: d,
    type: v = "number",
    mask: p
  } = e, y = $e(), m = l ?? `pin-input-${y}`, h = vp(), [w, P] = te(!0), [I, A] = te(-1), [T, E] = pt({
    defaultValue: Yo(r) || [],
    value: Yo(n),
    onChange: (ee) => o == null ? void 0 : o(ee.join(""))
  });
  de(() => {
    if (t) {
      const ee = h.first();
      ee && requestAnimationFrame(() => {
        ee.node.focus();
      });
    }
  }, [h]);
  const j = S(
    (ee) => {
      if (!w || !i)
        return;
      const Q = h.next(ee, !1);
      Q && requestAnimationFrame(() => {
        Q.node.focus();
      });
    },
    [h, w, i]
  ), D = S(
    (ee, Q, ie = !0) => {
      const ue = [...T];
      ue[Q] = ee, E(ue), ee !== "" && ue.length === h.count() && ue.every(
        (z) => z != null && z !== ""
      ) ? a == null || a(ue.join("")) : ie && j(Q);
    },
    [T, E, j, a, h]
  ), W = S(() => {
    var ee;
    const Q = Array(h.count()).fill("");
    E(Q);
    const ie = h.first();
    (ee = ie == null ? void 0 : ie.node) == null || ee.focus();
  }, [h, E]), R = S((ee, Q) => {
    let ie = Q;
    return (ee == null ? void 0 : ee.length) > 0 && (ee[0] === Q.charAt(0) ? ie = Q.charAt(1) : ee[0] === Q.charAt(1) && (ie = Q.charAt(0))), ie;
  }, []);
  return {
    getInputProps: S(
      (ee) => {
        const { index: Q, ...ie } = ee, ue = (_) => {
          const Y = _.target.value, U = T[Q], N = R(U, Y);
          if (N === "") {
            D("", Q);
            return;
          }
          if (Y.length > 2) {
            if (Xo(Y, v)) {
              const F = Y.split("").filter((X, Z) => Z < h.count());
              E(F), F.length === h.count() && (a == null || a(F.join("")));
            }
          } else
            Xo(N, v) && D(N, Q), P(!0);
        }, ne = (_) => {
          var Y;
          if (_.key === "Backspace" && i)
            if (_.target.value === "") {
              const U = h.prev(Q, !1);
              U && (D("", Q - 1, !1), (Y = U.node) == null || Y.focus(), P(!0));
            } else
              P(!1);
        }, z = () => {
          A(Q);
        }, B = () => {
          A(-1);
        }, le = I === Q;
        return {
          "aria-label": "Please enter your pin code",
          inputMode: v === "number" ? "numeric" : "text",
          type: p ? "password" : v === "number" ? "tel" : "text",
          ...ie,
          id: `${m}-${Q}`,
          disabled: u,
          "aria-invalid": Fe(d),
          onChange: H(ie.onChange, ue),
          onKeyDown: H(ie.onKeyDown, ne),
          onFocus: H(ie.onFocus, z),
          onBlur: H(ie.onBlur, B),
          value: T[Q] || "",
          autoComplete: c ? "one-time-code" : "off",
          placeholder: le ? "" : s
        };
      },
      [
        h,
        I,
        R,
        m,
        u,
        p,
        d,
        i,
        a,
        c,
        s,
        D,
        E,
        v,
        T
      ]
    ),
    id: m,
    descendants: h,
    values: T,
    setValue: D,
    setValues: E,
    clear: W
  };
}
function gp(e = {}, t = null) {
  const { getInputProps: n } = hp(), { index: r, register: o } = pp();
  return n({
    ...e,
    ref: Se(o, t),
    index: r
  });
}
function bp(e) {
  const t = Be("PinInput", e), { children: n, ...r } = me(e), { descendants: o, ...a } = yp(r), s = mt(n).map(
    (i) => Ae(i, { __css: t })
  );
  return /* @__PURE__ */ f.jsx(fp, { value: o, children: /* @__PURE__ */ f.jsx(mp, { value: a, children: s }) });
}
bp.displayName = "PinInput";
var xp = b(
  function(t, n) {
    const r = gp(t, n);
    return /* @__PURE__ */ f.jsx(
      g.input,
      {
        ...r,
        className: C("chakra-pin-input", t.className)
      }
    );
  }
);
xp.displayName = "PinInputField";
var [Sp, st] = ge({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [wp, Lt] = ge({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), Pp = b(
  function(t, n) {
    const { getHeaderProps: r } = st(), o = Lt();
    return /* @__PURE__ */ f.jsx(
      g.header,
      {
        ...r(t, n),
        className: C("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
Pp.displayName = "PopoverHeader";
function _p(e) {
  const t = at.only(e.children), { getTriggerProps: n } = st();
  return Ae(t, n(t.props, t.ref));
}
_p.displayName = "PopoverTrigger";
var Nt = {
  click: "click",
  hover: "hover"
};
function kp(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: n = !0,
    initialFocusRef: r,
    id: o,
    returnFocusOnClose: a = !0,
    autoFocus: s = !0,
    arrowSize: i,
    arrowShadowColor: c,
    trigger: l = Nt.click,
    openDelay: u = 200,
    closeDelay: d = 200,
    isLazy: v,
    lazyBehavior: p = "unmount",
    computePositionOnMount: y,
    ...m
  } = e, { isOpen: h, onClose: w, onOpen: P, onToggle: I } = ra(e), A = ae(null), T = ae(null), E = ae(null), j = ae(!1), D = ae(!1);
  h && (D.current = !0);
  const [W, R] = te(!1), [L, ee] = te(!1), Q = $e(), ie = o ?? Q, [ue, ne, z, B] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((oe) => `${oe}-${ie}`), {
    referenceRef: le,
    getArrowProps: x,
    getPopperProps: _,
    getArrowInnerProps: Y,
    forceUpdate: U
  } = oa({
    ...m,
    enabled: h || !!y
  }), N = Ti({ isOpen: h, ref: E });
  $a({
    enabled: h,
    ref: T
  }), Ai(E, {
    focusRef: T,
    visible: h,
    shouldFocus: a && l === Nt.click
  }), ji(E, {
    focusRef: r,
    visible: h,
    shouldFocus: s && l === Nt.click
  });
  const F = aa({
    wasSelected: D.current,
    enabled: v,
    mode: p,
    isSelected: N.present
  }), X = S(
    (oe = {}, we = null) => {
      const be = {
        ...oe,
        style: {
          ...oe.style,
          transformOrigin: dt.transformOrigin.varRef,
          [dt.arrowSize.var]: i ? `${i}px` : void 0,
          [dt.arrowShadowColor.var]: c
        },
        ref: Se(E, we),
        children: F ? oe.children : null,
        id: ne,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: H(oe.onKeyDown, (xe) => {
          n && xe.key === "Escape" && w();
        }),
        onBlur: H(oe.onBlur, (xe) => {
          const je = Zo(xe), Re = ar(E.current, je), Ge = ar(T.current, je);
          h && t && (!Re && !Ge) && w();
        }),
        "aria-labelledby": W ? z : void 0,
        "aria-describedby": L ? B : void 0
      };
      return l === Nt.hover && (be.role = "tooltip", be.onMouseEnter = H(oe.onMouseEnter, () => {
        j.current = !0;
      }), be.onMouseLeave = H(
        oe.onMouseLeave,
        (xe) => {
          xe.nativeEvent.relatedTarget !== null && (j.current = !1, setTimeout(() => w(), d));
        }
      )), be;
    },
    [
      F,
      ne,
      W,
      z,
      L,
      B,
      l,
      n,
      w,
      h,
      t,
      d,
      c,
      i
    ]
  ), Z = S(
    (oe = {}, we = null) => _(
      {
        ...oe,
        style: {
          visibility: h ? "visible" : "hidden",
          ...oe.style
        }
      },
      we
    ),
    [h, _]
  ), J = S(
    (oe, we = null) => ({
      ...oe,
      ref: Se(we, A, le)
    }),
    [A, le]
  ), k = ae(), M = ae(), G = S(
    (oe) => {
      A.current == null && le(oe);
    },
    [le]
  ), K = S(
    (oe = {}, we = null) => {
      const be = {
        ...oe,
        ref: Se(T, we, G),
        id: ue,
        "aria-haspopup": "dialog",
        "aria-expanded": h,
        "aria-controls": ne
      };
      return l === Nt.click && (be.onClick = H(oe.onClick, I)), l === Nt.hover && (be.onFocus = H(oe.onFocus, () => {
        k.current === void 0 && P();
      }), be.onBlur = H(oe.onBlur, (xe) => {
        const je = Zo(xe), Re = !ar(E.current, je);
        h && t && Re && w();
      }), be.onKeyDown = H(oe.onKeyDown, (xe) => {
        xe.key === "Escape" && w();
      }), be.onMouseEnter = H(oe.onMouseEnter, () => {
        j.current = !0, k.current = window.setTimeout(() => P(), u);
      }), be.onMouseLeave = H(oe.onMouseLeave, () => {
        j.current = !1, k.current && (clearTimeout(k.current), k.current = void 0), M.current = window.setTimeout(() => {
          j.current === !1 && w();
        }, d);
      })), be;
    },
    [
      ue,
      h,
      ne,
      l,
      G,
      I,
      P,
      t,
      w,
      u,
      d
    ]
  );
  de(() => () => {
    k.current && clearTimeout(k.current), M.current && clearTimeout(M.current);
  }, []);
  const ye = S(
    (oe = {}, we = null) => ({
      ...oe,
      id: z,
      ref: Se(we, (be) => {
        R(!!be);
      })
    }),
    [z]
  ), O = S(
    (oe = {}, we = null) => ({
      ...oe,
      id: B,
      ref: Se(we, (be) => {
        ee(!!be);
      })
    }),
    [B]
  );
  return {
    forceUpdate: U,
    isOpen: h,
    onAnimationComplete: N.onComplete,
    onClose: w,
    getAnchorProps: J,
    getArrowProps: x,
    getArrowInnerProps: Y,
    getPopoverPositionerProps: Z,
    getPopoverProps: X,
    getTriggerProps: K,
    getHeaderProps: ye,
    getBodyProps: O
  };
}
function ar(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function Zo(e) {
  var t;
  const n = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : n;
}
function Cp(e) {
  const t = ke("Popover", e), { children: n, ...r } = me(e), o = ot(), a = kp({ ...r, direction: o.direction });
  return /* @__PURE__ */ f.jsx(Sp, { value: a, children: /* @__PURE__ */ f.jsx(wp, { value: t, children: Ut(n, {
    isOpen: a.isOpen,
    onClose: a.onClose,
    forceUpdate: a.forceUpdate
  }) }) });
}
Cp.displayName = "Popover";
function Np(e) {
  const t = at.only(e.children), { getAnchorProps: n } = st();
  return Ae(t, n(t.props, t.ref));
}
Np.displayName = "PopoverAnchor";
var sr = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function Ep(e) {
  var t;
  const { bg: n, bgColor: r, backgroundColor: o, shadow: a, boxShadow: s, shadowColor: i } = e, { getArrowProps: c, getArrowInnerProps: l } = st(), u = Lt(), d = (t = n ?? r) != null ? t : o, v = a ?? s;
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...c(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ f.jsx(
        g.div,
        {
          className: C("chakra-popover__arrow", e.className),
          ...l(e),
          __css: {
            "--popper-arrow-shadow-color": sr("colors", i),
            "--popper-arrow-bg": sr("colors", d),
            "--popper-arrow-shadow": sr("shadows", v),
            ...u.arrow
          }
        }
      )
    }
  );
}
Ep.displayName = "PopoverArrow";
var Ip = b(
  function(t, n) {
    const { getBodyProps: r } = st(), o = Lt();
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...r(t, n),
        className: C("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
Ip.displayName = "PopoverBody";
var Tp = b(
  function(t, n) {
    const { onClose: r } = st(), o = Lt();
    return /* @__PURE__ */ f.jsx(
      ha,
      {
        size: "sm",
        onClick: r,
        className: C("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: n,
        ...t
      }
    );
  }
);
Tp.displayName = "PopoverCloseButton";
function Ap(e) {
  if (e)
    return {
      enter: {
        ...e.enter,
        visibility: "visible"
      },
      exit: {
        ...e.exit,
        transitionEnd: {
          visibility: "hidden"
        }
      }
    };
}
var jp = {
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: [0.4, 0, 1, 1]
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.15,
      ease: [0, 0, 0.2, 1]
    }
  }
}, Dp = g(Xe.section), Xs = b(function(t, n) {
  const { variants: r = jp, ...o } = t, { isOpen: a } = st();
  return /* @__PURE__ */ f.jsx(
    Dp,
    {
      ref: n,
      variants: Ap(r),
      initial: !1,
      animate: a ? "enter" : "exit",
      ...o
    }
  );
});
Xs.displayName = "PopoverTransition";
var Fp = b(
  function(t, n) {
    const { rootProps: r, motionProps: o, ...a } = t, { getPopoverProps: s, getPopoverPositionerProps: i, onAnimationComplete: c } = st(), l = Lt(), u = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...l.content
    };
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...i(r),
        __css: l.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ f.jsx(
          Xs,
          {
            ...o,
            ...s(a, n),
            onAnimationComplete: Fr(
              c,
              a.onAnimationComplete
            ),
            className: C("chakra-popover__content", t.className),
            __css: u
          }
        )
      }
    );
  }
);
Fp.displayName = "PopoverContent";
function Rp(e) {
  const t = Lt();
  return /* @__PURE__ */ f.jsx(
    g.footer,
    {
      ...e,
      className: C("chakra-popover__footer", e.className),
      __css: t.footer
    }
  );
}
Rp.displayName = "PopoverFooter";
var Mp = g("div", {
  baseStyle: {
    fontSize: "0.24em",
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)"
  }
});
Mp.displayName = "CircularProgressLabel";
var Er = (e) => /* @__PURE__ */ f.jsx(g.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...e });
Er.displayName = "Circle";
function Op(e, t, n) {
  return (e - t) * 100 / (n - t);
}
var Lp = Ze({
  "0%": {
    strokeDasharray: "1, 400",
    strokeDashoffset: "0"
  },
  "50%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-100"
  },
  "100%": {
    strokeDasharray: "400, 400",
    strokeDashoffset: "-260"
  }
}), Bp = Ze({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), $p = Ze({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
}), Vp = Ze({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function Zs(e) {
  const {
    value: t = 0,
    min: n,
    max: r,
    valueText: o,
    getValueText: a,
    isIndeterminate: s,
    role: i = "progressbar"
  } = e, c = Op(t, n, r);
  return {
    bind: {
      "data-indeterminate": s ? "" : void 0,
      "aria-valuemax": r,
      "aria-valuemin": n,
      "aria-valuenow": s ? void 0 : t,
      "aria-valuetext": (() => {
        if (t != null)
          return typeof a == "function" ? a(t, c) : o;
      })(),
      role: i
    },
    percent: c,
    value: t
  };
}
var Qs = (e) => {
  const { size: t, isIndeterminate: n, ...r } = e;
  return /* @__PURE__ */ f.jsx(
    g.svg,
    {
      viewBox: "0 0 100 100",
      __css: {
        width: t,
        height: t,
        animation: n ? `${Bp} 2s linear infinite` : void 0
      },
      ...r
    }
  );
};
Qs.displayName = "Shape";
var Hp = b(
  (e, t) => {
    var n;
    const {
      size: r = "48px",
      max: o = 100,
      min: a = 0,
      valueText: s,
      getValueText: i,
      value: c,
      capIsRound: l,
      children: u,
      thickness: d = "10px",
      color: v = "#0078d4",
      trackColor: p = "#edebe9",
      isIndeterminate: y,
      ...m
    } = e, h = Zs({
      min: a,
      max: o,
      value: c,
      valueText: s,
      getValueText: i,
      isIndeterminate: y
    }), w = y ? void 0 : ((n = h.percent) != null ? n : 0) * 2.64, P = w == null ? void 0 : `${w} ${264 - w}`, I = y ? {
      css: { animation: `${Lp} 1.5s linear infinite` }
    } : {
      strokeDashoffset: 66,
      strokeDasharray: P,
      transitionProperty: "stroke-dasharray, stroke",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease"
    }, A = {
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: r
    };
    return /* @__PURE__ */ f.jsxs(
      g.div,
      {
        ref: t,
        className: "chakra-progress",
        ...h.bind,
        ...m,
        __css: A,
        children: [
          /* @__PURE__ */ f.jsxs(Qs, { size: r, isIndeterminate: y, children: [
            /* @__PURE__ */ f.jsx(
              Er,
              {
                stroke: p,
                strokeWidth: d,
                className: "chakra-progress__track"
              }
            ),
            /* @__PURE__ */ f.jsx(
              Er,
              {
                stroke: v,
                strokeWidth: d,
                className: "chakra-progress__indicator",
                strokeLinecap: l ? "round" : void 0,
                opacity: h.value === 0 && !y ? 0 : void 0,
                ...I
              }
            )
          ] }),
          u
        ]
      }
    );
  }
);
Hp.displayName = "CircularProgress";
var [Wp, Js] = ge({
  name: "ProgressStylesContext",
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
}), zp = b(
  (e, t) => {
    const { min: n, max: r, value: o, isIndeterminate: a, role: s, ...i } = e, c = Zs({
      value: o,
      min: n,
      max: r,
      isIndeterminate: a,
      role: s
    }), u = {
      height: "100%",
      ...Js().filledTrack
    };
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: t,
        style: { width: `${c.percent}%`, ...i.style },
        ...c.bind,
        ...i,
        __css: u
      }
    );
  }
), Up = b((e, t) => {
  var n;
  const {
    value: r,
    min: o = 0,
    max: a = 100,
    hasStripe: s,
    isAnimated: i,
    children: c,
    borderRadius: l,
    isIndeterminate: u,
    "aria-label": d,
    "aria-labelledby": v,
    "aria-valuetext": p,
    title: y,
    role: m,
    ...h
  } = me(e), w = ke("Progress", e), P = l ?? ((n = w.track) == null ? void 0 : n.borderRadius), I = { animation: `${Vp} 1s linear infinite` }, E = {
    ...!u && s && i && I,
    ...u && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${$p} 1s ease infinite normal none running`
    }
  }, j = {
    overflow: "hidden",
    position: "relative",
    ...w.track
  };
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: t,
      borderRadius: P,
      __css: j,
      ...h,
      children: /* @__PURE__ */ f.jsxs(Wp, { value: w, children: [
        /* @__PURE__ */ f.jsx(
          zp,
          {
            "aria-label": d,
            "aria-labelledby": v,
            "aria-valuetext": p,
            min: o,
            max: a,
            value: r,
            isIndeterminate: u,
            css: E,
            borderRadius: P,
            title: y,
            role: m
          }
        ),
        c
      ] })
    }
  );
});
Up.displayName = "Progress";
var Gp = (e) => {
  const n = {
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...Js().label
  };
  return /* @__PURE__ */ f.jsx(g.div, { ...e, __css: n });
};
Gp.displayName = "ProgressLabel";
function Kp(e) {
  return e && tt(e) && tt(e.target);
}
function qp(e = {}) {
  const {
    onChange: t,
    value: n,
    defaultValue: r,
    name: o,
    isDisabled: a,
    isFocusable: s,
    isNative: i,
    ...c
  } = e, [l, u] = te(r || ""), d = typeof n < "u", v = d ? n : l, p = ae(null), y = S(() => {
    const T = p.current;
    if (!T)
      return;
    let E = "input:not(:disabled):checked";
    const j = T.querySelector(
      E
    );
    if (j) {
      j.focus();
      return;
    }
    E = "input:not(:disabled)";
    const D = T.querySelector(E);
    D == null || D.focus();
  }, []), h = `radio-${$e()}`, w = o || h, P = S(
    (T) => {
      const E = Kp(T) ? T.target.value : T;
      d || u(E), t == null || t(String(E));
    },
    [t, d]
  ), I = S(
    (T = {}, E = null) => ({
      ...T,
      ref: Se(E, p),
      role: "radiogroup"
    }),
    []
  ), A = S(
    (T = {}, E = null) => ({
      ...T,
      ref: E,
      name: w,
      [i ? "checked" : "isChecked"]: v != null ? T.value === v : void 0,
      onChange(D) {
        P(D);
      },
      "data-radiogroup": !0
    }),
    [i, w, P, v]
  );
  return {
    getRootProps: I,
    getRadioProps: A,
    name: w,
    ref: p,
    focus: y,
    setValue: u,
    value: v,
    onChange: P,
    isDisabled: a,
    isFocusable: s,
    htmlProps: c
  };
}
var [Yp, ei] = ge({
  name: "RadioGroupContext",
  strict: !1
}), Xp = b((e, t) => {
  const {
    colorScheme: n,
    size: r,
    variant: o,
    children: a,
    className: s,
    isDisabled: i,
    isFocusable: c,
    ...l
  } = e, { value: u, onChange: d, getRootProps: v, name: p, htmlProps: y } = qp(l), m = _e(
    () => ({
      name: p,
      size: r,
      onChange: d,
      colorScheme: n,
      value: u,
      variant: o,
      isDisabled: i,
      isFocusable: c
    }),
    [
      p,
      r,
      d,
      n,
      u,
      o,
      i,
      c
    ]
  );
  return /* @__PURE__ */ f.jsx(Yp, { value: m, children: /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...v(y, t),
      className: C("chakra-radio-group", s),
      children: a
    }
  ) });
});
Xp.displayName = "RadioGroup";
var Zp = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
};
function Qp(e = {}) {
  const {
    defaultChecked: t,
    isChecked: n,
    isFocusable: r,
    isDisabled: o,
    isReadOnly: a,
    isRequired: s,
    onChange: i,
    isInvalid: c,
    name: l,
    value: u,
    id: d,
    "data-radiogroup": v,
    "aria-describedby": p,
    ...y
  } = e, m = `radio-${$e()}`, h = gt(), P = !!ei() || !!v;
  let A = !!h && !P ? h.id : m;
  A = d ?? A;
  const T = o ?? (h == null ? void 0 : h.isDisabled), E = a ?? (h == null ? void 0 : h.isReadOnly), j = s ?? (h == null ? void 0 : h.isRequired), D = c ?? (h == null ? void 0 : h.isInvalid), [W, R] = te(!1), [L, ee] = te(!1), [Q, ie] = te(!1), [ue, ne] = te(!1), [z, B] = te(!!t), le = typeof n < "u", x = le ? n : z;
  de(() => Ra(R), []);
  const _ = S(
    (G) => {
      if (E || T) {
        G.preventDefault();
        return;
      }
      le || B(G.target.checked), i == null || i(G);
    },
    [le, T, E, i]
  ), Y = S(
    (G) => {
      G.key === " " && ne(!0);
    },
    [ne]
  ), U = S(
    (G) => {
      G.key === " " && ne(!1);
    },
    [ne]
  ), N = S(
    (G = {}, K = null) => ({
      ...G,
      ref: K,
      "data-active": pe(ue),
      "data-hover": pe(Q),
      "data-disabled": pe(T),
      "data-invalid": pe(D),
      "data-checked": pe(x),
      "data-focus": pe(L),
      "data-focus-visible": pe(L && W),
      "data-readonly": pe(E),
      "aria-hidden": !0,
      onMouseDown: H(G.onMouseDown, () => ne(!0)),
      onMouseUp: H(G.onMouseUp, () => ne(!1)),
      onMouseEnter: H(
        G.onMouseEnter,
        () => ie(!0)
      ),
      onMouseLeave: H(
        G.onMouseLeave,
        () => ie(!1)
      )
    }),
    [
      ue,
      Q,
      T,
      D,
      x,
      L,
      E,
      W
    ]
  ), { onFocus: F, onBlur: X } = h ?? {}, Z = S(
    (G = {}, K = null) => {
      const ye = T && !r;
      return {
        ...G,
        id: A,
        ref: K,
        type: "radio",
        name: l,
        value: u,
        onChange: H(G.onChange, _),
        onBlur: H(
          X,
          G.onBlur,
          () => ee(!1)
        ),
        onFocus: H(
          F,
          G.onFocus,
          () => ee(!0)
        ),
        onKeyDown: H(G.onKeyDown, Y),
        onKeyUp: H(G.onKeyUp, U),
        checked: x,
        disabled: ye,
        readOnly: E,
        required: j,
        "aria-invalid": Fe(D),
        "aria-disabled": Fe(ye),
        "aria-required": Fe(j),
        "data-readonly": pe(E),
        "aria-describedby": p,
        style: Zp
      };
    },
    [
      T,
      r,
      A,
      l,
      u,
      _,
      X,
      F,
      Y,
      U,
      x,
      E,
      j,
      D,
      p
    ]
  );
  return {
    state: {
      isInvalid: D,
      isFocused: L,
      isChecked: x,
      isActive: ue,
      isHovered: Q,
      isDisabled: T,
      isReadOnly: E,
      isRequired: j
    },
    getCheckboxProps: N,
    getRadioProps: N,
    getInputProps: Z,
    getLabelProps: (G = {}, K = null) => ({
      ...G,
      ref: K,
      onMouseDown: H(G.onMouseDown, Jp),
      "data-disabled": pe(T),
      "data-checked": pe(x),
      "data-invalid": pe(D)
    }),
    getRootProps: (G, K = null) => ({
      ...G,
      ref: K,
      "data-disabled": pe(T),
      "data-checked": pe(x),
      "data-invalid": pe(D)
    }),
    htmlProps: y
  };
}
function Jp(e) {
  e.preventDefault(), e.stopPropagation();
}
function em(e, t) {
  const n = {}, r = {};
  for (const [o, a] of Object.entries(e))
    t.includes(o) ? n[o] = a : r[o] = a;
  return [n, r];
}
var tm = b((e, t) => {
  var n;
  const r = ei(), { onChange: o, value: a } = e, s = ke("Radio", { ...r, ...e }), i = me(e), {
    spacing: c = "0.5rem",
    children: l,
    isDisabled: u = r == null ? void 0 : r.isDisabled,
    isFocusable: d = r == null ? void 0 : r.isFocusable,
    inputProps: v,
    ...p
  } = i;
  let y = e.isChecked;
  (r == null ? void 0 : r.value) != null && a != null && (y = r.value === a);
  let m = o;
  r != null && r.onChange && a != null && (m = Fr(r.onChange, o));
  const h = (n = e == null ? void 0 : e.name) != null ? n : r == null ? void 0 : r.name, {
    getInputProps: w,
    getCheckboxProps: P,
    getLabelProps: I,
    getRootProps: A,
    htmlProps: T
  } = Qp({
    ...p,
    isChecked: y,
    isFocusable: d,
    isDisabled: u,
    onChange: m,
    name: h
  }), [E, j] = em(T, ua), D = P(j), W = w(v, t), R = I(), L = Object.assign({}, E, A()), ee = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    cursor: "pointer",
    position: "relative",
    ...s.container
  }, Q = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...s.control
  }, ie = {
    userSelect: "none",
    marginStart: c,
    ...s.label
  };
  return /* @__PURE__ */ f.jsxs(g.label, { className: "chakra-radio", ...L, __css: ee, children: [
    /* @__PURE__ */ f.jsx("input", { className: "chakra-radio__input", ...W }),
    /* @__PURE__ */ f.jsx(
      g.span,
      {
        className: "chakra-radio__control",
        ...D,
        __css: Q
      }
    ),
    l && /* @__PURE__ */ f.jsx(
      g.span,
      {
        className: "chakra-radio__label",
        ...R,
        __css: ie,
        children: l
      }
    )
  ] });
});
tm.displayName = "Radio";
var ti = b(
  function(t, n) {
    const { children: r, placeholder: o, className: a, ...s } = t;
    return /* @__PURE__ */ f.jsxs(
      g.select,
      {
        ...s,
        ref: n,
        className: C("chakra-select", a),
        children: [
          o && /* @__PURE__ */ f.jsx("option", { value: "", children: o }),
          r
        ]
      }
    );
  }
);
ti.displayName = "SelectField";
function nm(e, t) {
  const n = {}, r = {};
  for (const [o, a] of Object.entries(e))
    t.includes(o) ? n[o] = a : r[o] = a;
  return [n, r];
}
var rm = b((e, t) => {
  var n;
  const r = ke("Select", e), {
    rootProps: o,
    placeholder: a,
    icon: s,
    color: i,
    height: c,
    h: l,
    minH: u,
    minHeight: d,
    iconColor: v,
    iconSize: p,
    ...y
  } = me(e), [m, h] = nm(y, ua), w = zr(h), P = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color: i
  }, I = {
    paddingEnd: "2rem",
    ...r.field,
    _focus: {
      zIndex: "unset",
      ...(n = r.field) == null ? void 0 : n._focus
    }
  };
  return /* @__PURE__ */ f.jsxs(
    g.div,
    {
      className: "chakra-select__wrapper",
      __css: P,
      ...m,
      ...o,
      children: [
        /* @__PURE__ */ f.jsx(
          ti,
          {
            ref: t,
            height: l ?? c,
            minH: u ?? d,
            placeholder: a,
            ...w,
            __css: I,
            children: e.children
          }
        ),
        /* @__PURE__ */ f.jsx(
          ni,
          {
            "data-disabled": pe(w.disabled),
            ...(v || i) && { color: v || i },
            __css: r.icon,
            ...p && { fontSize: p },
            children: s
          }
        )
      ]
    }
  );
});
rm.displayName = "Select";
var om = (e) => /* @__PURE__ */ f.jsx("svg", { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ f.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) }), am = g("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
}), ni = (e) => {
  const { children: t = /* @__PURE__ */ f.jsx(om, {}), ...n } = e, r = Ae(t, {
    role: "presentation",
    className: "chakra-select__icon",
    focusable: !1,
    "aria-hidden": !0,
    style: {
      width: "1em",
      height: "1em",
      color: "currentColor"
    }
  });
  return /* @__PURE__ */ f.jsx(am, { ...n, className: "chakra-select__icon-wrapper", children: Rr(t) ? r : null });
};
ni.displayName = "SelectIcon";
function sm() {
  const e = ae(!0);
  return de(() => {
    e.current = !1;
  }, []), e.current;
}
function im(e) {
  const t = ae();
  return de(() => {
    t.current = e;
  }, [e]), t.current;
}
var cm = g("div", {
  baseStyle: {
    boxShadow: "none",
    backgroundClip: "padding-box",
    cursor: "default",
    color: "transparent",
    pointerEvents: "none",
    userSelect: "none",
    "&::before, &::after, *": {
      visibility: "hidden"
    }
  }
}), Ir = da("skeleton-start-color"), Tr = da("skeleton-end-color"), lm = Ze({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), um = Ze({
  from: {
    borderColor: Ir.reference,
    background: Ir.reference
  },
  to: {
    borderColor: Tr.reference,
    background: Tr.reference
  }
}), ho = b((e, t) => {
  const n = {
    ...e,
    fadeDuration: typeof e.fadeDuration == "number" ? e.fadeDuration : 0.4,
    speed: typeof e.speed == "number" ? e.speed : 0.8
  }, r = Be("Skeleton", n), o = sm(), {
    startColor: a = "",
    endColor: s = "",
    isLoaded: i,
    fadeDuration: c,
    speed: l,
    className: u,
    fitContent: d,
    ...v
  } = me(n), [p, y] = Hi("colors", [
    a,
    s
  ]), m = im(i), h = C("chakra-skeleton", u), w = {
    ...p && { [Ir.variable]: p },
    ...y && { [Tr.variable]: y }
  };
  if (i) {
    const P = o || m ? "none" : `${lm} ${c}s`;
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: t,
        className: h,
        __css: { animation: P },
        ...v
      }
    );
  }
  return /* @__PURE__ */ f.jsx(
    cm,
    {
      ref: t,
      className: h,
      ...v,
      __css: {
        width: d ? "fit-content" : void 0,
        ...r,
        ...w,
        _dark: { ...r._dark, ...w },
        animation: `${l}s linear infinite alternate ${um}`
      }
    }
  );
});
ho.displayName = "Skeleton";
var dm = ({
  size: e = "2rem",
  ...t
}) => /* @__PURE__ */ f.jsx(ho, { borderRadius: "full", boxSize: e, ...t });
dm.displayName = "SkeletonCircle";
function fm(e) {
  return Array(e).fill(1).map((t, n) => n + 1);
}
var Qo = 3, vm = (e) => {
  const {
    noOfLines: t = Qo,
    spacing: n = "0.5rem",
    skeletonHeight: r = "0.5rem",
    className: o,
    startColor: a,
    endColor: s,
    isLoaded: i,
    fadeDuration: c,
    speed: l,
    variant: u,
    size: d,
    colorScheme: v,
    children: p,
    ...y
  } = e, m = zf(
    typeof t == "number" ? [t] : t
  ) || Qo, h = fm(m), w = (I) => m > 1 && I === h.length ? "80%" : "100%", P = C("chakra-skeleton__group", o);
  return /* @__PURE__ */ f.jsx(g.div, { className: P, ...y, children: h.map((I, A) => {
    if (i && A > 0)
      return null;
    const T = i ? null : {
      mb: I === h.length ? "0" : n,
      width: w(I),
      height: r
    };
    return /* @__PURE__ */ f.jsx(
      ho,
      {
        startColor: a,
        endColor: s,
        isLoaded: i,
        fadeDuration: c,
        speed: l,
        variant: u,
        size: d,
        colorScheme: v,
        ...T,
        children: A === 0 ? p : void 0
      },
      h.length.toString() + I
    );
  }) });
};
vm.displayName = "SkeletonText";
var ri = "chakra-skip-nav";
function pm(e) {
  return {
    userSelect: "none",
    border: "0",
    height: "1px",
    width: "1px",
    margin: "-1px",
    padding: "0",
    outline: "0",
    overflow: "hidden",
    position: "absolute",
    clip: "rect(0 0 0 0)",
    ...e,
    _focus: {
      clip: "auto",
      width: "auto",
      height: "auto",
      ...e._focus
    }
  };
}
var mm = b(
  function(t, n) {
    const r = Be("SkipLink", t), { id: o = ri, ...a } = me(t);
    return /* @__PURE__ */ f.jsx(g.a, { ...a, ref: n, href: `#${o}`, __css: pm(r) });
  }
);
mm.displayName = "SkipNavLink";
var hm = b(
  function(t, n) {
    const { id: r = ri, ...o } = t;
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: n,
        id: r,
        tabIndex: -1,
        style: { outline: 0 },
        ...o
      }
    );
  }
);
hm.displayName = "SkipNavContent";
var Le = (e) => e ? "" : void 0, Rt = (e) => e ? !0 : void 0, it = (...e) => e.filter(Boolean).join(" ");
function Mt(...e) {
  return function(n) {
    e.some((r) => (r == null || r(n), n == null ? void 0 : n.defaultPrevented));
  };
}
function ym(e) {
  return {
    root: `slider-root-${e}`,
    getThumb: (t) => `slider-thumb-${e}-${t}`,
    getInput: (t) => `slider-input-${e}-${t}`,
    track: `slider-track-${e}`,
    innerTrack: `slider-filled-track-${e}`,
    getMarker: (t) => `slider-marker-${e}-${t}`,
    output: `slider-output-${e}`
  };
}
function Wt(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t === "vertical" ? n : r;
}
var mn = { width: 0, height: 0 }, fn = (e) => e || mn;
function oi(e) {
  const { orientation: t, thumbPercents: n, thumbRects: r, isReversed: o } = e, a = (m) => {
    var h;
    const w = (h = r[m]) != null ? h : mn;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...Wt({
        orientation: t,
        vertical: {
          bottom: `calc(${n[m]}% - ${w.height / 2}px)`
        },
        horizontal: {
          left: `calc(${n[m]}% - ${w.width / 2}px)`
        }
      })
    };
  }, s = t === "vertical" ? r.reduce(
    (m, h) => fn(m).height > fn(h).height ? m : h,
    mn
  ) : r.reduce(
    (m, h) => fn(m).width > fn(h).width ? m : h,
    mn
  ), i = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...Wt({
      orientation: t,
      vertical: s ? {
        paddingLeft: s.width / 2,
        paddingRight: s.width / 2
      } : {},
      horizontal: s ? {
        paddingTop: s.height / 2,
        paddingBottom: s.height / 2
      } : {}
    })
  }, c = {
    position: "absolute",
    ...Wt({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        height: "100%"
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        width: "100%"
      }
    })
  }, l = n.length === 1, u = [0, o ? 100 - n[0] : n[0]], d = l ? u : n;
  let v = d[0];
  !l && o && (v = 100 - v);
  const p = Math.abs(d[d.length - 1] - d[0]), y = {
    ...c,
    ...Wt({
      orientation: t,
      vertical: o ? { height: `${p}%`, top: `${v}%` } : { height: `${p}%`, bottom: `${v}%` },
      horizontal: o ? { width: `${p}%`, right: `${v}%` } : { width: `${p}%`, left: `${v}%` }
    })
  };
  return { trackStyle: c, innerTrackStyle: y, rootStyle: i, getThumbStyle: a };
}
function ai(e) {
  const { isReversed: t, direction: n, orientation: r } = e;
  return n === "ltr" || r === "vertical" ? t : !t;
}
function gm(e, t, n, r) {
  return e.addEventListener(t, n, r), () => {
    e.removeEventListener(t, n, r);
  };
}
function bm(e) {
  const t = Sm(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function si(e) {
  return !!e.touches;
}
function xm(e) {
  return si(e) && e.touches.length > 1;
}
function Sm(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function wm(e, t = "page") {
  const n = e.touches[0] || e.changedTouches[0];
  return { x: n[`${t}X`], y: n[`${t}Y`] };
}
function Pm(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function ii(e, t = "page") {
  return si(e) ? wm(e, t) : Pm(e, t);
}
function _m(e) {
  return (t) => {
    const n = bm(t);
    (!n || n && t.button === 0) && e(t);
  };
}
function km(e, t = !1) {
  function n(o) {
    e(o, { point: ii(o) });
  }
  return t ? _m(n) : n;
}
function hn(e, t, n, r) {
  return gm(e, t, km(n, t === "pointerdown"), r);
}
var Cm = Object.defineProperty, Nm = (e, t, n) => t in e ? Cm(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, ze = (e, t, n) => (Nm(e, typeof t != "symbol" ? t + "" : t, n), n), Em = class {
  constructor(e, t, n) {
    ze(this, "history", []), ze(this, "startEvent", null), ze(this, "lastEvent", null), ze(this, "lastEventInfo", null), ze(this, "handlers", {}), ze(this, "removeListeners", () => {
    }), ze(this, "threshold", 3), ze(this, "win"), ze(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const i = ir(this.lastEventInfo, this.history), c = this.startEvent !== null, l = jm(i.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!c && !l)
        return;
      const { timestamp: u } = gn();
      this.history.push({ ...i.point, timestamp: u });
      const { onStart: d, onMove: v } = this.handlers;
      c || (d == null || d(this.lastEvent, i), this.startEvent = this.lastEvent), v == null || v(this.lastEvent, i);
    }), ze(this, "onPointerMove", (i, c) => {
      this.lastEvent = i, this.lastEventInfo = c, Sa.update(this.updatePoint, !0);
    }), ze(this, "onPointerUp", (i, c) => {
      const l = ir(c, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(i, l), this.end(), !(!u || !this.startEvent) && (u == null || u(i, l));
    });
    var r;
    if (this.win = (r = e.view) != null ? r : window, xm(e))
      return;
    this.handlers = t, n && (this.threshold = n), e.stopPropagation(), e.preventDefault();
    const o = { point: ii(e) }, { timestamp: a } = gn();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: s } = t;
    s == null || s(e, ir(o, this.history)), this.removeListeners = Am(
      hn(this.win, "pointermove", this.onPointerMove),
      hn(this.win, "pointerup", this.onPointerUp),
      hn(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), wa.update(this.updatePoint);
  }
};
function Jo(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function ir(e, t) {
  return {
    point: e.point,
    delta: Jo(e.point, t[t.length - 1]),
    offset: Jo(e.point, t[0]),
    velocity: Tm(t, 0.1)
  };
}
var Im = (e) => e * 1e3;
function Tm(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let n = e.length - 1, r = null;
  const o = e[e.length - 1];
  for (; n >= 0 && (r = e[n], !(o.timestamp - r.timestamp > Im(t))); )
    n--;
  if (!r)
    return { x: 0, y: 0 };
  const a = (o.timestamp - r.timestamp) / 1e3;
  if (a === 0)
    return { x: 0, y: 0 };
  const s = {
    x: (o.x - r.x) / a,
    y: (o.y - r.y) / a
  };
  return s.x === 1 / 0 && (s.x = 0), s.y === 1 / 0 && (s.y = 0), s;
}
function Am(...e) {
  return (t) => e.reduce((n, r) => r(n), t);
}
function cr(e, t) {
  return Math.abs(e - t);
}
function ea(e) {
  return "x" in e && "y" in e;
}
function jm(e, t) {
  if (typeof e == "number" && typeof t == "number")
    return cr(e, t);
  if (ea(e) && ea(t)) {
    const n = cr(e.x, t.x), r = cr(e.y, t.y);
    return Math.sqrt(n ** 2 + r ** 2);
  }
  return 0;
}
function ci(e) {
  const t = ae(null);
  return t.current = e, t;
}
function li(e, t) {
  const {
    onPan: n,
    onPanStart: r,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: s,
    threshold: i
  } = t, c = !!(n || r || o || a || s), l = ae(null), u = ci({
    onSessionStart: a,
    onSessionEnd: s,
    onStart: r,
    onMove: n,
    onEnd(d, v) {
      l.current = null, o == null || o(d, v);
    }
  });
  de(() => {
    var d;
    (d = l.current) == null || d.updateHandlers(u.current);
  }), de(() => {
    const d = e.current;
    if (!d || !c)
      return;
    function v(p) {
      l.current = new Em(p, u.current, i);
    }
    return hn(d, "pointerdown", v);
  }, [e, c, u, i]), de(() => () => {
    var d;
    (d = l.current) == null || d.end(), l.current = null;
  }, []);
}
function Dm(e, t) {
  if (!e) {
    t(void 0);
    return;
  }
  t({ width: e.offsetWidth, height: e.offsetHeight });
  const n = e.ownerDocument.defaultView ?? window, r = new n.ResizeObserver((o) => {
    if (!Array.isArray(o) || !o.length)
      return;
    const [a] = o;
    let s, i;
    if ("borderBoxSize" in a) {
      const c = a.borderBoxSize, l = Array.isArray(c) ? c[0] : c;
      s = l.inlineSize, i = l.blockSize;
    } else
      s = e.offsetWidth, i = e.offsetHeight;
    t({ width: s, height: i });
  });
  return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
}
var Fm = globalThis != null && globalThis.document ? fa : de;
function Rm(e, t) {
  var n, r;
  if (!e || !e.parentElement)
    return;
  const o = (r = (n = e.ownerDocument) == null ? void 0 : n.defaultView) != null ? r : window, a = new o.MutationObserver(() => {
    t();
  });
  return a.observe(e.parentElement, { childList: !0 }), () => {
    a.disconnect();
  };
}
function ui({
  getNodes: e,
  observeMutation: t = !0
}) {
  const [n, r] = te([]), [o, a] = te(0);
  return Fm(() => {
    const s = e(), i = s.map(
      (c, l) => Dm(c, (u) => {
        r((d) => [
          ...d.slice(0, l),
          u,
          ...d.slice(l + 1)
        ]);
      })
    );
    if (t) {
      const c = s[0];
      i.push(
        Rm(c, () => {
          a((l) => l + 1);
        })
      );
    }
    return () => {
      i.forEach((c) => {
        c == null || c();
      });
    };
  }, [o]), n;
}
function Mm(e) {
  return typeof e == "object" && e !== null && "current" in e;
}
function Om(e) {
  const [t] = ui({
    observeMutation: !1,
    getNodes() {
      return [Mm(e) ? e.current : e];
    }
  });
  return t;
}
function Lm(e) {
  const {
    min: t = 0,
    max: n = 100,
    onChange: r,
    value: o,
    defaultValue: a,
    isReversed: s,
    direction: i = "ltr",
    orientation: c = "horizontal",
    id: l,
    isDisabled: u,
    isReadOnly: d,
    onChangeStart: v,
    onChangeEnd: p,
    step: y = 1,
    getAriaValueText: m,
    "aria-valuetext": h,
    "aria-label": w,
    "aria-labelledby": P,
    name: I,
    focusThumbOnChange: A = !0,
    minStepsBetweenThumbs: T = 0,
    ...E
  } = e, j = Ee(v), D = Ee(p), W = Ee(m), R = ai({
    isReversed: s,
    direction: i,
    orientation: c
  }), [L, ee] = pt({
    value: o,
    defaultValue: a ?? [25, 75],
    onChange: r
  });
  if (!Array.isArray(L))
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof L}\``
    );
  const [Q, ie] = te(!1), [ue, ne] = te(!1), [z, B] = te(-1), le = !(u || d), x = ae(L), _ = L.map(($) => At($, t, n)), Y = T * y, U = Bm(_, t, n, Y), N = ae({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  N.current.value = _, N.current.valueBounds = U;
  const F = _.map(($) => n - $ + t), Z = (R ? F : _).map(($) => bn($, t, n)), J = c === "vertical", k = ae(null), M = ae(null), G = ui({
    getNodes() {
      const $ = M.current, se = $ == null ? void 0 : $.querySelectorAll("[role=slider]");
      return se ? Array.from(se) : [];
    }
  }), K = $e(), O = ym(l ?? K), oe = S(
    ($) => {
      var se, fe;
      if (!k.current)
        return;
      N.current.eventSource = "pointer";
      const ve = k.current.getBoundingClientRect(), { clientX: Ne, clientY: Me } = (fe = (se = $.touches) == null ? void 0 : se[0]) != null ? fe : $, Te = J ? ve.bottom - Me : Ne - ve.left, De = J ? ve.height : ve.width;
      let Bn = Te / De;
      return R && (Bn = 1 - Bn), Oa(Bn, t, n);
    },
    [J, R, n, t]
  ), we = (n - t) / 10, be = y || (n - t) / 100, xe = _e(
    () => ({
      setValueAtIndex($, se) {
        if (!le)
          return;
        const fe = N.current.valueBounds[$];
        se = parseFloat(xr(se, fe.min, be)), se = At(se, fe.min, fe.max);
        const ve = [...N.current.value];
        ve[$] = se, ee(ve);
      },
      setActiveIndex: B,
      stepUp($, se = be) {
        const fe = N.current.value[$], ve = R ? fe - se : fe + se;
        xe.setValueAtIndex($, ve);
      },
      stepDown($, se = be) {
        const fe = N.current.value[$], ve = R ? fe + se : fe - se;
        xe.setValueAtIndex($, ve);
      },
      reset() {
        ee(x.current);
      }
    }),
    [be, R, ee, le]
  ), je = S(
    ($) => {
      const se = $.key, ve = {
        ArrowRight: () => xe.stepUp(z),
        ArrowUp: () => xe.stepUp(z),
        ArrowLeft: () => xe.stepDown(z),
        ArrowDown: () => xe.stepDown(z),
        PageUp: () => xe.stepUp(z, we),
        PageDown: () => xe.stepDown(z, we),
        Home: () => {
          const { min: Ne } = U[z];
          xe.setValueAtIndex(z, Ne);
        },
        End: () => {
          const { max: Ne } = U[z];
          xe.setValueAtIndex(z, Ne);
        }
      }[se];
      ve && ($.preventDefault(), $.stopPropagation(), ve($), N.current.eventSource = "keyboard");
    },
    [xe, z, we, U]
  ), { getThumbStyle: Re, rootStyle: Ge, trackStyle: He, innerTrackStyle: Qe } = _e(
    () => oi({
      isReversed: R,
      orientation: c,
      thumbRects: G,
      thumbPercents: Z
    }),
    [R, c, Z, G]
  ), Je = S(
    ($) => {
      var se;
      const fe = $ ?? z;
      if (fe !== -1 && A) {
        const ve = O.getThumb(fe), Ne = (se = M.current) == null ? void 0 : se.ownerDocument.getElementById(ve);
        Ne && setTimeout(() => Ne.focus());
      }
    },
    [A, z, O]
  );
  Qt(() => {
    N.current.eventSource === "keyboard" && (D == null || D(N.current.value));
  }, [_, D]);
  const Bt = ($) => {
    const se = oe($) || 0, fe = N.current.value.map(
      (De) => Math.abs(De - se)
    ), ve = Math.min(...fe);
    let Ne = fe.indexOf(ve);
    const Me = fe.filter(
      (De) => De === ve
    );
    Me.length > 1 && se > N.current.value[Ne] && (Ne = Ne + Me.length - 1), B(Ne), xe.setValueAtIndex(Ne, se), Je(Ne);
  }, $t = ($) => {
    if (z == -1)
      return;
    const se = oe($) || 0;
    B(z), xe.setValueAtIndex(z, se), Je(z);
  };
  li(M, {
    onPanSessionStart($) {
      le && (ie(!0), Bt($), j == null || j(N.current.value));
    },
    onPanSessionEnd() {
      le && (ie(!1), D == null || D(N.current.value));
    },
    onPan($) {
      le && $t($);
    }
  });
  const Vt = S(
    ($ = {}, se = null) => ({
      ...$,
      ...E,
      id: O.root,
      ref: Se(se, M),
      tabIndex: -1,
      "aria-disabled": Rt(u),
      "data-focused": Le(ue),
      style: { ...$.style, ...Ge }
    }),
    [E, u, ue, Ge, O]
  ), V = S(
    ($ = {}, se = null) => ({
      ...$,
      ref: Se(se, k),
      id: O.track,
      "data-disabled": Le(u),
      style: { ...$.style, ...He }
    }),
    [u, He, O]
  ), he = S(
    ($ = {}, se = null) => ({
      ...$,
      ref: se,
      id: O.innerTrack,
      style: {
        ...$.style,
        ...Qe
      }
    }),
    [Qe, O]
  ), Ce = S(
    ($, se = null) => {
      var fe;
      const { index: ve, ...Ne } = $, Me = _[ve];
      if (Me == null)
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${ve}\`. The \`value\` or \`defaultValue\` length is : ${_.length}`
        );
      const Te = U[ve];
      return {
        ...Ne,
        ref: se,
        role: "slider",
        tabIndex: le ? 0 : void 0,
        id: O.getThumb(ve),
        "data-active": Le(Q && z === ve),
        "aria-valuetext": (fe = W == null ? void 0 : W(Me)) != null ? fe : h == null ? void 0 : h[ve],
        "aria-valuemin": Te.min,
        "aria-valuemax": Te.max,
        "aria-valuenow": Me,
        "aria-orientation": c,
        "aria-disabled": Rt(u),
        "aria-readonly": Rt(d),
        "aria-label": w == null ? void 0 : w[ve],
        "aria-labelledby": w != null && w[ve] || P == null ? void 0 : P[ve],
        style: { ...$.style, ...Re(ve) },
        onKeyDown: Mt($.onKeyDown, je),
        onFocus: Mt($.onFocus, () => {
          ne(!0), B(ve);
        }),
        onBlur: Mt($.onBlur, () => {
          ne(!1), B(-1);
        })
      };
    },
    [
      O,
      _,
      U,
      le,
      Q,
      z,
      W,
      h,
      c,
      u,
      d,
      w,
      P,
      Re,
      je,
      ne
    ]
  ), Ie = S(
    ($ = {}, se = null) => ({
      ...$,
      ref: se,
      id: O.output,
      htmlFor: _.map((fe, ve) => O.getThumb(ve)).join(" "),
      "aria-live": "off"
    }),
    [O, _]
  ), q = S(
    ($, se = null) => {
      const { value: fe, ...ve } = $, Ne = !(fe < t || fe > n), Me = fe >= _[0] && fe <= _[_.length - 1];
      let Te = bn(fe, t, n);
      Te = R ? 100 - Te : Te;
      const De = {
        position: "absolute",
        pointerEvents: "none",
        ...Wt({
          orientation: c,
          vertical: { bottom: `${Te}%` },
          horizontal: { left: `${Te}%` }
        })
      };
      return {
        ...ve,
        ref: se,
        id: O.getMarker($.value),
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": Le(u),
        "data-invalid": Le(!Ne),
        "data-highlighted": Le(Me),
        style: {
          ...$.style,
          ...De
        }
      };
    },
    [u, R, n, t, c, _, O]
  ), ce = S(
    ($, se = null) => {
      const { index: fe, ...ve } = $;
      return {
        ...ve,
        ref: se,
        id: O.getInput(fe),
        type: "hidden",
        value: _[fe],
        name: Array.isArray(I) ? I[fe] : `${I}-${fe}`
      };
    },
    [I, _, O]
  );
  return {
    state: {
      value: _,
      isFocused: ue,
      isDragging: Q,
      getThumbPercent: ($) => Z[$],
      getThumbMinValue: ($) => U[$].min,
      getThumbMaxValue: ($) => U[$].max
    },
    actions: xe,
    getRootProps: Vt,
    getTrackProps: V,
    getInnerTrackProps: he,
    getThumbProps: Ce,
    getMarkerProps: q,
    getInputProps: ce,
    getOutputProps: Ie
  };
}
function Bm(e, t, n, r) {
  return e.map((o, a) => {
    const s = a === 0 ? t : e[a - 1] + r, i = a === e.length - 1 ? n : e[a + 1] - r;
    return { min: s, max: i };
  });
}
var [$m, Fn] = ge({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}), [Vm, Rn] = ge({
  name: "RangeSliderStylesContext",
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
}), Hm = b(
  function(t, n) {
    const r = {
      orientation: "horizontal",
      ...t
    }, o = ke("Slider", r), a = me(r), { direction: s } = ot();
    a.direction = s;
    const { getRootProps: i, ...c } = Lm(a), l = _e(
      () => ({ ...c, name: r.name }),
      [c, r.name]
    );
    return /* @__PURE__ */ f.jsx($m, { value: l, children: /* @__PURE__ */ f.jsx(Vm, { value: o, children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...i({}, n),
        className: "chakra-slider",
        __css: o.container,
        children: r.children
      }
    ) }) });
  }
);
Hm.displayName = "RangeSlider";
var Wm = b(
  function(t, n) {
    const { getThumbProps: r, getInputProps: o, name: a } = Fn(), s = Rn(), i = r(t, n);
    return /* @__PURE__ */ f.jsxs(
      g.div,
      {
        ...i,
        className: it("chakra-slider__thumb", t.className),
        __css: s.thumb,
        children: [
          i.children,
          a && /* @__PURE__ */ f.jsx("input", { ...o({ index: t.index }) })
        ]
      }
    );
  }
);
Wm.displayName = "RangeSliderThumb";
var zm = b(
  function(t, n) {
    const { getTrackProps: r } = Fn(), o = Rn(), a = r(t, n);
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...a,
        className: it("chakra-slider__track", t.className),
        __css: o.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
zm.displayName = "RangeSliderTrack";
var Um = b(function(t, n) {
  const { getInnerTrackProps: r } = Fn(), o = Rn(), a = r(t, n);
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...a,
      className: "chakra-slider__filled-track",
      __css: o.filledTrack
    }
  );
});
Um.displayName = "RangeSliderFilledTrack";
var Gm = b(
  function(t, n) {
    const { getMarkerProps: r } = Fn(), o = Rn(), a = r(t, n);
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...a,
        className: it("chakra-slider__marker", t.className),
        __css: o.mark
      }
    );
  }
);
Gm.displayName = "RangeSliderMark";
function Km(e) {
  var t;
  const {
    min: n = 0,
    max: r = 100,
    onChange: o,
    value: a,
    defaultValue: s,
    isReversed: i,
    direction: c = "ltr",
    orientation: l = "horizontal",
    id: u,
    isDisabled: d,
    isReadOnly: v,
    onChangeStart: p,
    onChangeEnd: y,
    step: m = 1,
    getAriaValueText: h,
    "aria-valuetext": w,
    "aria-label": P,
    "aria-labelledby": I,
    name: A,
    focusThumbOnChange: T = !0,
    ...E
  } = e, j = Ee(p), D = Ee(y), W = Ee(h), R = ai({
    isReversed: i,
    direction: c,
    orientation: l
  }), [L, ee] = pt({
    value: a,
    defaultValue: s ?? Ym(n, r),
    onChange: o
  }), [Q, ie] = te(!1), [ue, ne] = te(!1), z = !(d || v), B = (r - n) / 10, le = m || (r - n) / 100, x = At(L, n, r), _ = r - x + n, U = bn(R ? _ : x, n, r), N = l === "vertical", F = ci({
    min: n,
    max: r,
    step: m,
    isDisabled: d,
    value: x,
    isInteractive: z,
    isReversed: R,
    isVertical: N,
    eventSource: null,
    focusThumbOnChange: T,
    orientation: l
  }), X = ae(null), Z = ae(null), J = ae(null), k = $e(), M = u ?? k, [G, K] = [`slider-thumb-${M}`, `slider-track-${M}`], ye = S(
    (q) => {
      var ce, Ye;
      if (!X.current)
        return;
      const $ = F.current;
      $.eventSource = "pointer";
      const se = X.current.getBoundingClientRect(), { clientX: fe, clientY: ve } = (Ye = (ce = q.touches) == null ? void 0 : ce[0]) != null ? Ye : q, Ne = N ? se.bottom - ve : fe - se.left, Me = N ? se.height : se.width;
      let Te = Ne / Me;
      R && (Te = 1 - Te);
      let De = Oa(Te, $.min, $.max);
      return $.step && (De = parseFloat(
        xr(De, $.min, $.step)
      )), De = At(De, $.min, $.max), De;
    },
    [N, R, F]
  ), O = S(
    (q) => {
      const ce = F.current;
      ce.isInteractive && (q = parseFloat(xr(q, ce.min, le)), q = At(q, ce.min, ce.max), ee(q));
    },
    [le, ee, F]
  ), oe = _e(
    () => ({
      stepUp(q = le) {
        const ce = R ? x - q : x + q;
        O(ce);
      },
      stepDown(q = le) {
        const ce = R ? x + q : x - q;
        O(ce);
      },
      reset() {
        O(s || 0);
      },
      stepTo(q) {
        O(q);
      }
    }),
    [O, R, x, le, s]
  ), we = S(
    (q) => {
      const ce = F.current, $ = {
        ArrowRight: () => oe.stepUp(),
        ArrowUp: () => oe.stepUp(),
        ArrowLeft: () => oe.stepDown(),
        ArrowDown: () => oe.stepDown(),
        PageUp: () => oe.stepUp(B),
        PageDown: () => oe.stepDown(B),
        Home: () => O(ce.min),
        End: () => O(ce.max)
      }[q.key];
      $ && (q.preventDefault(), q.stopPropagation(), $(q), ce.eventSource = "keyboard");
    },
    [oe, O, B, F]
  ), be = (t = W == null ? void 0 : W(x)) != null ? t : w, xe = Om(Z), { getThumbStyle: je, rootStyle: Re, trackStyle: Ge, innerTrackStyle: He } = _e(() => {
    const q = F.current, ce = xe ?? { width: 0, height: 0 };
    return oi({
      isReversed: R,
      orientation: q.orientation,
      thumbRects: [ce],
      thumbPercents: [U]
    });
  }, [R, xe, U, F]), Qe = S(() => {
    F.current.focusThumbOnChange && setTimeout(() => {
      var ce;
      return (ce = Z.current) == null ? void 0 : ce.focus();
    });
  }, [F]);
  Qt(() => {
    const q = F.current;
    Qe(), q.eventSource === "keyboard" && (D == null || D(q.value));
  }, [x, D]);
  function Je(q) {
    const ce = ye(q);
    ce != null && ce !== F.current.value && ee(ce);
  }
  li(J, {
    onPanSessionStart(q) {
      const ce = F.current;
      ce.isInteractive && (ie(!0), Qe(), Je(q), j == null || j(ce.value));
    },
    onPanSessionEnd() {
      const q = F.current;
      q.isInteractive && (ie(!1), D == null || D(q.value));
    },
    onPan(q) {
      F.current.isInteractive && Je(q);
    }
  });
  const Bt = S(
    (q = {}, ce = null) => ({
      ...q,
      ...E,
      ref: Se(ce, J),
      tabIndex: -1,
      "aria-disabled": Rt(d),
      "data-focused": Le(ue),
      style: {
        ...q.style,
        ...Re
      }
    }),
    [E, d, ue, Re]
  ), $t = S(
    (q = {}, ce = null) => ({
      ...q,
      ref: Se(ce, X),
      id: K,
      "data-disabled": Le(d),
      style: {
        ...q.style,
        ...Ge
      }
    }),
    [d, K, Ge]
  ), Vt = S(
    (q = {}, ce = null) => ({
      ...q,
      ref: ce,
      style: {
        ...q.style,
        ...He
      }
    }),
    [He]
  ), V = S(
    (q = {}, ce = null) => ({
      ...q,
      ref: Se(ce, Z),
      role: "slider",
      tabIndex: z ? 0 : void 0,
      id: G,
      "data-active": Le(Q),
      "aria-valuetext": be,
      "aria-valuemin": n,
      "aria-valuemax": r,
      "aria-valuenow": x,
      "aria-orientation": l,
      "aria-disabled": Rt(d),
      "aria-readonly": Rt(v),
      "aria-label": P,
      "aria-labelledby": P ? void 0 : I,
      style: {
        ...q.style,
        ...je(0)
      },
      onKeyDown: Mt(q.onKeyDown, we),
      onFocus: Mt(q.onFocus, () => ne(!0)),
      onBlur: Mt(q.onBlur, () => ne(!1))
    }),
    [
      z,
      G,
      Q,
      be,
      n,
      r,
      x,
      l,
      d,
      v,
      P,
      I,
      je,
      we
    ]
  ), he = S(
    (q, ce = null) => {
      const Ye = !(q.value < n || q.value > r), $ = x >= q.value, se = bn(q.value, n, r), fe = {
        position: "absolute",
        pointerEvents: "none",
        ...qm({
          orientation: l,
          vertical: {
            bottom: R ? `${100 - se}%` : `${se}%`
          },
          horizontal: {
            left: R ? `${100 - se}%` : `${se}%`
          }
        })
      };
      return {
        ...q,
        ref: ce,
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": Le(d),
        "data-invalid": Le(!Ye),
        "data-highlighted": Le($),
        style: {
          ...q.style,
          ...fe
        }
      };
    },
    [d, R, r, n, l, x]
  ), Ce = S(
    (q = {}, ce = null) => ({
      ...q,
      ref: ce,
      type: "hidden",
      value: x,
      name: A
    }),
    [A, x]
  );
  return {
    state: { value: x, isFocused: ue, isDragging: Q },
    actions: oe,
    getRootProps: Bt,
    getTrackProps: $t,
    getInnerTrackProps: Vt,
    getThumbProps: V,
    getMarkerProps: he,
    getInputProps: Ce
  };
}
function qm(e) {
  const { orientation: t, vertical: n, horizontal: r } = e;
  return t === "vertical" ? n : r;
}
function Ym(e, t) {
  return t < e ? e : e + (t - e) / 2;
}
var [Xm, Mn] = ge({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
}), [Zm, On] = ge({
  name: "SliderStylesContext",
  hookName: "useSliderStyles",
  providerName: "<Slider />"
}), Qm = b((e, t) => {
  var n;
  const r = {
    ...e,
    orientation: (n = e == null ? void 0 : e.orientation) != null ? n : "horizontal"
  }, o = ke("Slider", r), a = me(r), { direction: s } = ot();
  a.direction = s;
  const { getInputProps: i, getRootProps: c, ...l } = Km(a), u = c(), d = i({}, t);
  return /* @__PURE__ */ f.jsx(Xm, { value: l, children: /* @__PURE__ */ f.jsx(Zm, { value: o, children: /* @__PURE__ */ f.jsxs(
    g.div,
    {
      ...u,
      className: it("chakra-slider", r.className),
      __css: o.container,
      children: [
        r.children,
        /* @__PURE__ */ f.jsx("input", { ...d })
      ]
    }
  ) }) });
});
Qm.displayName = "Slider";
var Jm = b((e, t) => {
  const { getThumbProps: n } = Mn(), r = On(), o = n(e, t);
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...o,
      className: it("chakra-slider__thumb", e.className),
      __css: r.thumb
    }
  );
});
Jm.displayName = "SliderThumb";
var eh = b((e, t) => {
  const { getTrackProps: n } = Mn(), r = On(), o = n(e, t);
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...o,
      className: it("chakra-slider__track", e.className),
      __css: r.track
    }
  );
});
eh.displayName = "SliderTrack";
var th = b(
  (e, t) => {
    const { getInnerTrackProps: n } = Mn(), r = On(), o = n(e, t);
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...o,
        className: it("chakra-slider__filled-track", e.className),
        __css: r.filledTrack
      }
    );
  }
);
th.displayName = "SliderFilledTrack";
var nh = b((e, t) => {
  const { getMarkerProps: n } = Mn(), r = On(), o = n(e, t);
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...o,
      className: it("chakra-slider__marker", e.className),
      __css: r.mark
    }
  );
});
nh.displayName = "SliderMark";
var [rh, Ln] = ge({
  name: "StatStylesContext",
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
}), oh = b(function(t, n) {
  const r = ke("Stat", t), o = {
    position: "relative",
    flex: "1 1 0%",
    ...r.container
  }, { className: a, children: s, ...i } = me(t);
  return /* @__PURE__ */ f.jsx(rh, { value: r, children: /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      ...i,
      className: C("chakra-stat", a),
      __css: o,
      children: /* @__PURE__ */ f.jsx("dl", { children: s })
    }
  ) });
});
oh.displayName = "Stat";
var di = (e) => /* @__PURE__ */ f.jsx(Ve, { color: "red.400", ...e, children: /* @__PURE__ */ f.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
di.displayName = "StatDownArrow";
function fi(e) {
  return /* @__PURE__ */ f.jsx(Ve, { color: "green.400", ...e, children: /* @__PURE__ */ f.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
    }
  ) });
}
fi.displayName = "StatUpArrow";
function ah(e) {
  const { type: t, "aria-label": n, ...r } = e, o = Ln(), a = t === "increase" ? fi : di, i = n || (t === "increase" ? "increased by" : "decreased by");
  return /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    /* @__PURE__ */ f.jsx(g.span, { srOnly: !0, children: i }),
    /* @__PURE__ */ f.jsx(a, { "aria-hidden": !0, ...r, __css: o.icon })
  ] });
}
ah.displayName = "StatArrow";
var sh = b(function(t, n) {
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...t,
      ref: n,
      role: "group",
      className: C("chakra-stat__group", t.className),
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start"
      }
    }
  );
});
sh.displayName = "StatGroup";
var ih = b(
  function(t, n) {
    const r = Ln();
    return /* @__PURE__ */ f.jsx(
      g.dd,
      {
        ref: n,
        ...t,
        className: C("chakra-stat__help-text", t.className),
        __css: r.helpText
      }
    );
  }
);
ih.displayName = "StatHelpText";
var ch = b(function(t, n) {
  const r = Ln();
  return /* @__PURE__ */ f.jsx(
    g.dt,
    {
      ref: n,
      ...t,
      className: C("chakra-stat__label", t.className),
      __css: r.label
    }
  );
});
ch.displayName = "StatLabel";
var lh = b(function(t, n) {
  const r = Ln();
  return /* @__PURE__ */ f.jsx(
    g.dd,
    {
      ref: n,
      ...t,
      className: C("chakra-stat__number", t.className),
      __css: {
        ...r.number,
        fontFeatureSettings: "pnum",
        fontVariantNumeric: "proportional-nums"
      }
    }
  );
});
lh.displayName = "StatNumber";
var [uh, ct] = ge(
  { name: "StepContext" }
), [dh, xt] = pa("Stepper"), tg = b(function(t, n) {
  const { status: r } = ct(), o = xt();
  return /* @__PURE__ */ f.jsx(
    g.h3,
    {
      ref: n,
      "data-status": r,
      ...t,
      __css: o.title,
      className: C("chakra-step__title", t.className)
    }
  );
}), ng = b(function(t, n) {
  const { orientation: r, status: o, showLastSeparator: a } = ct(), s = xt();
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      "data-status": o,
      "data-orientation": r,
      "data-stretch": pe(a),
      __css: s.step,
      ...t,
      className: C("chakra-step", t.className)
    }
  );
}), rg = b(function(t, n) {
  const r = ke("Stepper", t), {
    children: o,
    index: a,
    orientation: s = "horizontal",
    showLastSeparator: i = !1,
    ...c
  } = me(t), l = at.toArray(o), u = l.length;
  function d(v) {
    return v < a ? "complete" : v > a ? "incomplete" : "active";
  }
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      "aria-label": "Progress",
      "data-orientation": s,
      ...c,
      __css: r.stepper,
      className: C("chakra-stepper", t.className),
      children: /* @__PURE__ */ f.jsx(dh, { value: r, children: l.map((v, p) => /* @__PURE__ */ f.jsx(
        uh,
        {
          value: {
            index: p,
            status: d(p),
            orientation: s,
            showLastSeparator: i,
            count: u,
            isFirst: p === 0,
            isLast: p === u - 1
          },
          children: v
        },
        p
      )) })
    }
  );
});
function og(e = {}) {
  const { index: t = 0, count: n } = e, [r, o] = te(t), a = typeof n == "number" ? n - 1 : 0, s = r / a;
  return {
    activeStep: r,
    setActiveStep: o,
    activeStepPercent: s,
    isActiveStep(i) {
      return i === r;
    },
    isCompleteStep(i) {
      return i < r;
    },
    isIncompleteStep(i) {
      return i > r;
    },
    getStatus(i) {
      return i < r ? "complete" : i > r ? "incomplete" : "active";
    },
    goToNext() {
      o((i) => typeof n == "number" ? Math.min(n, i + 1) : i + 1);
    },
    goToPrevious() {
      o((i) => Math.max(0, i - 1));
    }
  };
}
var ag = b(function(t, n) {
  const { status: r } = ct(), o = xt();
  return /* @__PURE__ */ f.jsx(
    g.p,
    {
      ref: n,
      "data-status": r,
      ...t,
      className: C("chakra-step__description", t.className),
      __css: o.description
    }
  );
});
function fh(e) {
  const { complete: t, incomplete: n, active: r } = e, o = ct();
  let a = null;
  switch (o.status) {
    case "complete":
      a = Ut(t, o);
      break;
    case "incomplete":
      a = Ut(n, o);
      break;
    case "active":
      a = Ut(r, o);
      break;
  }
  return a ? /* @__PURE__ */ f.jsx(f.Fragment, { children: a }) : null;
}
function vh(e) {
  return /* @__PURE__ */ f.jsx(
    "svg",
    {
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0",
      viewBox: "0 0 20 20",
      "aria-hidden": "true",
      height: "1em",
      width: "1em",
      ...e,
      children: /* @__PURE__ */ f.jsx(
        "path",
        {
          fillRule: "evenodd",
          d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",
          clipRule: "evenodd"
        }
      )
    }
  );
}
function ph(e) {
  const { status: t } = ct(), n = xt(), r = t === "complete" ? vh : void 0;
  return /* @__PURE__ */ f.jsx(
    Ve,
    {
      as: r,
      __css: n.icon,
      ...e,
      className: C("chakra-step__icon", e.className)
    }
  );
}
var ta = b(function(t, n) {
  const { children: r, ...o } = t, { status: a, index: s } = ct(), i = xt();
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      "data-status": a,
      __css: i.number,
      ...o,
      className: C("chakra-step__number", t.className),
      children: r || s + 1
    }
  );
});
function sg(e) {
  const { status: t } = ct(), n = xt();
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      "data-status": t,
      ...e,
      __css: n.indicator,
      className: C("chakra-step__indicator", e.className)
    }
  );
}
function ig() {
  return /* @__PURE__ */ f.jsx(
    fh,
    {
      complete: /* @__PURE__ */ f.jsx(ph, {}),
      incomplete: /* @__PURE__ */ f.jsx(ta, {}),
      active: /* @__PURE__ */ f.jsx(ta, {})
    }
  );
}
var cg = b(function(t, n) {
  const { orientation: r, status: o, isLast: a, showLastSeparator: s } = ct(), i = xt();
  return a && !s ? null : /* @__PURE__ */ f.jsx(
    g.div,
    {
      ref: n,
      role: "separator",
      "data-orientation": r,
      "data-status": o,
      __css: i.separator,
      ...t,
      className: C("chakra-step__separator", t.className)
    }
  );
}), mh = b(function(t, n) {
  const r = ke("Switch", t), { spacing: o = "0.5rem", children: a, ...s } = me(t), {
    state: i,
    getInputProps: c,
    getCheckboxProps: l,
    getRootProps: u,
    getLabelProps: d
  } = Ma(s), v = _e(
    () => ({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      lineHeight: 0,
      ...r.container
    }),
    [r.container]
  ), p = _e(
    () => ({
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      boxSizing: "content-box",
      cursor: "pointer",
      ...r.track
    }),
    [r.track]
  ), y = _e(
    () => ({
      userSelect: "none",
      marginStart: o,
      ...r.label
    }),
    [o, r.label]
  );
  return /* @__PURE__ */ f.jsxs(
    g.label,
    {
      ...u(),
      className: C("chakra-switch", t.className),
      __css: v,
      children: [
        /* @__PURE__ */ f.jsx("input", { className: "chakra-switch__input", ...c({}, n) }),
        /* @__PURE__ */ f.jsx(
          g.span,
          {
            ...l(),
            className: "chakra-switch__track",
            __css: p,
            children: /* @__PURE__ */ f.jsx(
              g.span,
              {
                __css: r.thumb,
                className: "chakra-switch__thumb",
                "data-checked": pe(i.isChecked),
                "data-hover": pe(i.isHovered)
              }
            )
          }
        ),
        a && /* @__PURE__ */ f.jsx(
          g.span,
          {
            className: "chakra-switch__label",
            ...d(),
            __css: y,
            children: a
          }
        )
      ]
    }
  );
});
mh.displayName = "Switch";
var [hh, St] = ge({
  name: "TableStylesContext",
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
}), yh = b((e, t) => {
  const n = ke("Table", e), { className: r, layout: o, ...a } = me(e);
  return /* @__PURE__ */ f.jsx(hh, { value: n, children: /* @__PURE__ */ f.jsx(
    g.table,
    {
      ref: t,
      __css: { tableLayout: o, ...n.table },
      className: C("chakra-table", r),
      ...a
    }
  ) });
});
yh.displayName = "Table";
var lg = b((e, t) => {
  const n = St();
  return /* @__PURE__ */ f.jsx(g.thead, { ...e, ref: t, __css: n.thead });
}), ug = b((e, t) => {
  const n = St();
  return /* @__PURE__ */ f.jsx(g.tr, { ...e, ref: t, __css: n.tr });
}), gh = b(
  (e, t) => {
    const { placement: n = "bottom", ...r } = e, o = St();
    return /* @__PURE__ */ f.jsx(
      g.caption,
      {
        ...r,
        ref: t,
        __css: {
          ...o.caption,
          captionSide: n
        }
      }
    );
  }
);
gh.displayName = "TableCaption";
var dg = b(
  (e, t) => {
    var n;
    const { overflow: r, overflowX: o, className: a, ...s } = e;
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: t,
        className: C("chakra-table__container", a),
        ...s,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: (n = r ?? o) != null ? n : "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
), fg = b((e, t) => {
  const n = St();
  return /* @__PURE__ */ f.jsx(g.tbody, { ...e, ref: t, __css: n.tbody });
}), vg = b(
  ({ isNumeric: e, ...t }, n) => {
    const r = St();
    return /* @__PURE__ */ f.jsx(
      g.td,
      {
        ...t,
        ref: n,
        __css: r.td,
        "data-is-numeric": e
      }
    );
  }
), pg = b((e, t) => {
  const n = St();
  return /* @__PURE__ */ f.jsx(g.tfoot, { ...e, ref: t, __css: n.tfoot });
}), mg = b(
  ({ isNumeric: e, ...t }, n) => {
    const r = St();
    return /* @__PURE__ */ f.jsx(
      g.th,
      {
        ...t,
        ref: n,
        __css: r.th,
        "data-is-numeric": e
      }
    );
  }
), [
  bh,
  vi,
  xh,
  Sh
] = jr();
function wh(e) {
  var t;
  const {
    defaultIndex: n,
    onChange: r,
    index: o,
    isManual: a,
    isLazy: s,
    lazyBehavior: i = "unmount",
    orientation: c = "horizontal",
    direction: l = "ltr",
    ...u
  } = e, [d, v] = te(n ?? 0), [p, y] = pt({
    defaultValue: n ?? 0,
    value: o,
    onChange: r
  });
  de(() => {
    o != null && v(o);
  }, [o]);
  const m = xh(), h = $e();
  return {
    id: `tabs-${(t = e.id) != null ? t : h}`,
    selectedIndex: p,
    focusedIndex: d,
    setSelectedIndex: y,
    setFocusedIndex: v,
    isManual: a,
    isLazy: s,
    lazyBehavior: i,
    orientation: c,
    descendants: m,
    direction: l,
    htmlProps: u
  };
}
var [Ph, rn] = ge({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function _h(e) {
  const { focusedIndex: t, orientation: n, direction: r } = rn(), o = vi(), a = S(
    (s) => {
      const i = () => {
        var P;
        const I = o.nextEnabled(t);
        I && ((P = I.node) == null || P.focus());
      }, c = () => {
        var P;
        const I = o.prevEnabled(t);
        I && ((P = I.node) == null || P.focus());
      }, l = () => {
        var P;
        const I = o.firstEnabled();
        I && ((P = I.node) == null || P.focus());
      }, u = () => {
        var P;
        const I = o.lastEnabled();
        I && ((P = I.node) == null || P.focus());
      }, d = n === "horizontal", v = n === "vertical", p = s.key, y = r === "ltr" ? "ArrowLeft" : "ArrowRight", m = r === "ltr" ? "ArrowRight" : "ArrowLeft", w = {
        [y]: () => d && c(),
        [m]: () => d && i(),
        ArrowDown: () => v && i(),
        ArrowUp: () => v && c(),
        Home: l,
        End: u
      }[p];
      w && (s.preventDefault(), w(s));
    },
    [o, t, n, r]
  );
  return {
    ...e,
    role: "tablist",
    "aria-orientation": n,
    onKeyDown: H(e.onKeyDown, a)
  };
}
function kh(e) {
  const { isDisabled: t, isFocusable: n, ...r } = e, { setSelectedIndex: o, isManual: a, id: s, setFocusedIndex: i, selectedIndex: c } = rn(), { index: l, register: u } = Sh({
    disabled: t && !n
  }), d = l === c, v = () => {
    o(l);
  }, p = () => {
    i(l), !a && !(t && n) && o(l);
  }, y = Di({
    ...r,
    ref: Se(u, e.ref),
    isDisabled: t,
    isFocusable: n,
    onClick: H(e.onClick, v)
  }), m = "button";
  return {
    ...y,
    id: pi(s, l),
    role: "tab",
    tabIndex: d ? 0 : -1,
    type: m,
    "aria-selected": d,
    "aria-controls": mi(s, l),
    onFocus: t ? void 0 : H(e.onFocus, p)
  };
}
var [Ch, Nh] = ge({});
function Eh(e) {
  const t = rn(), { id: n, selectedIndex: r } = t, a = mt(e.children).map(
    (s, i) => Ki(
      Ch,
      {
        key: i,
        value: {
          isSelected: i === r,
          id: mi(n, i),
          tabId: pi(n, i),
          selectedIndex: r
        }
      },
      s
    )
  );
  return { ...e, children: a };
}
function Ih(e) {
  const { children: t, ...n } = e, { isLazy: r, lazyBehavior: o } = rn(), { isSelected: a, id: s, tabId: i } = Nh(), c = ae(!1);
  a && (c.current = !0);
  const l = aa({
    wasSelected: c.current,
    isSelected: a,
    enabled: r,
    mode: o
  });
  return {
    tabIndex: 0,
    ...n,
    children: l ? t : null,
    role: "tabpanel",
    "aria-labelledby": i,
    hidden: !a,
    id: s
  };
}
function Th() {
  const e = rn(), t = vi(), { selectedIndex: n, orientation: r } = e, o = r === "horizontal", a = r === "vertical", [s, i] = te(() => {
    if (o)
      return { left: 0, width: 0 };
    if (a)
      return { top: 0, height: 0 };
  }), [c, l] = te(!1);
  return It(() => {
    if (n == null)
      return;
    const u = t.item(n);
    if (u == null)
      return;
    o && i({ left: u.node.offsetLeft, width: u.node.offsetWidth }), a && i({ top: u.node.offsetTop, height: u.node.offsetHeight });
    const d = requestAnimationFrame(() => {
      l(!0);
    });
    return () => {
      d && cancelAnimationFrame(d);
    };
  }, [n, o, a, t]), {
    position: "absolute",
    transitionProperty: "left, right, top, bottom, height, width",
    transitionDuration: c ? "200ms" : "0ms",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    ...s
  };
}
function pi(e, t) {
  return `${e}--tab-${t}`;
}
function mi(e, t) {
  return `${e}--tabpanel-${t}`;
}
var [Ah, on] = ge({
  name: "TabsStylesContext",
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
}), jh = b(function(t, n) {
  const r = ke("Tabs", t), { children: o, className: a, ...s } = me(t), { htmlProps: i, descendants: c, ...l } = wh(s), u = _e(() => l, [l]), { isFitted: d, ...v } = i;
  return /* @__PURE__ */ f.jsx(bh, { value: c, children: /* @__PURE__ */ f.jsx(Ph, { value: u, children: /* @__PURE__ */ f.jsx(Ah, { value: r, children: /* @__PURE__ */ f.jsx(
    g.div,
    {
      className: C("chakra-tabs", a),
      ref: n,
      ...v,
      __css: r.root,
      children: o
    }
  ) }) }) });
});
jh.displayName = "Tabs";
var Dh = b(
  function(t, n) {
    const r = Th(), o = {
      ...t.style,
      ...r
    }, a = on();
    return /* @__PURE__ */ f.jsx(
      g.div,
      {
        ref: n,
        ...t,
        className: C("chakra-tabs__tab-indicator", t.className),
        style: o,
        __css: a.indicator
      }
    );
  }
);
Dh.displayName = "TabIndicator";
var Fh = b(function(t, n) {
  const r = _h({ ...t, ref: n }), a = {
    display: "flex",
    ...on().tablist
  };
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...r,
      className: C("chakra-tabs__tablist", t.className),
      __css: a
    }
  );
});
Fh.displayName = "TabList";
var Rh = b(function(t, n) {
  const r = Ih({ ...t, ref: n }), o = on();
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      outline: "0",
      ...r,
      className: C("chakra-tabs__tab-panel", t.className),
      __css: o.tabpanel
    }
  );
});
Rh.displayName = "TabPanel";
var Mh = b(function(t, n) {
  const r = Eh(t), o = on();
  return /* @__PURE__ */ f.jsx(
    g.div,
    {
      ...r,
      width: "100%",
      ref: n,
      className: C("chakra-tabs__tab-panels", t.className),
      __css: o.tabpanels
    }
  );
});
Mh.displayName = "TabPanels";
var Oh = b(function(t, n) {
  const r = on(), o = kh({ ...t, ref: n }), a = {
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...r.tab
  };
  return /* @__PURE__ */ f.jsx(
    g.button,
    {
      ...o,
      className: C("chakra-tabs__tab", t.className),
      __css: a
    }
  );
});
Oh.displayName = "Tab";
var [Lh, hi] = ge({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), Bh = b((e, t) => {
  const n = ke("Tag", e), r = me(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...n.container
  };
  return /* @__PURE__ */ f.jsx(Lh, { value: n, children: /* @__PURE__ */ f.jsx(g.span, { ref: t, ...r, __css: o }) });
});
Bh.displayName = "Tag";
var $h = b((e, t) => {
  const n = hi();
  return /* @__PURE__ */ f.jsx(g.span, { ref: t, noOfLines: 1, ...e, __css: n.label });
});
$h.displayName = "TagLabel";
var Vh = b((e, t) => /* @__PURE__ */ f.jsx(Ve, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
Vh.displayName = "TagLeftIcon";
var Hh = b((e, t) => /* @__PURE__ */ f.jsx(Ve, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
Hh.displayName = "TagRightIcon";
var yi = (e) => /* @__PURE__ */ f.jsx(Ve, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ f.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
yi.displayName = "TagCloseIcon";
var Wh = b(
  (e, t) => {
    const { isDisabled: n, children: r, ...o } = e, s = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...hi().closeButton
    };
    return /* @__PURE__ */ f.jsx(
      g.button,
      {
        ref: t,
        "aria-label": "close",
        ...o,
        type: "button",
        disabled: n,
        __css: s,
        children: r || /* @__PURE__ */ f.jsx(yi, {})
      }
    );
  }
);
Wh.displayName = "TagCloseButton";
function zh(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
var Uh = ["h", "minH", "height", "minHeight"], Gh = b((e, t) => {
  const n = Be("Textarea", e), { className: r, rows: o, ...a } = me(e), s = zr(a), i = o ? zh(n, Uh) : n;
  return /* @__PURE__ */ f.jsx(
    g.textarea,
    {
      ref: t,
      rows: o,
      ...s,
      className: C("chakra-textarea", r),
      __css: i
    }
  );
});
Gh.displayName = "Textarea";
var Kh = {
  exit: {
    scale: 0.85,
    opacity: 0,
    transition: {
      opacity: { duration: 0.15, easings: "easeInOut" },
      scale: { duration: 0.2, easings: "easeInOut" }
    }
  },
  enter: {
    scale: 1,
    opacity: 1,
    transition: {
      opacity: { easings: "easeOut", duration: 0.2 },
      scale: { duration: 0.2, ease: [0.175, 0.885, 0.4, 1.1] }
    }
  }
}, Ar = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, yn = (e) => {
  var t, n;
  return ((n = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : n.defaultView) || window;
};
function qh(e = {}) {
  const {
    openDelay: t = 0,
    closeDelay: n = 0,
    closeOnClick: r = !0,
    closeOnMouseDown: o,
    closeOnScroll: a,
    closeOnPointerDown: s = o,
    closeOnEsc: i = !0,
    onOpen: c,
    onClose: l,
    placement: u,
    id: d,
    isOpen: v,
    defaultIsOpen: p,
    arrowSize: y = 10,
    arrowShadowColor: m,
    arrowPadding: h,
    modifiers: w,
    isDisabled: P,
    gutter: I,
    offset: A,
    direction: T,
    ...E
  } = e, { isOpen: j, onOpen: D, onClose: W } = ra({
    isOpen: v,
    defaultIsOpen: p,
    onOpen: c,
    onClose: l
  }), { referenceRef: R, getPopperProps: L, getArrowInnerProps: ee, getArrowProps: Q } = oa({
    enabled: j,
    placement: u,
    arrowPadding: h,
    modifiers: w,
    gutter: I,
    offset: A,
    direction: T
  }), ie = $e(), ne = `tooltip-${d ?? ie}`, z = ae(null), B = ae(), le = S(() => {
    B.current && (clearTimeout(B.current), B.current = void 0);
  }, []), x = ae(), _ = S(() => {
    x.current && (clearTimeout(x.current), x.current = void 0);
  }, []), Y = S(() => {
    _(), W();
  }, [W, _]), U = Yh(z, Y), N = S(() => {
    if (!P && !B.current) {
      U();
      const K = yn(z);
      B.current = K.setTimeout(D, t);
    }
  }, [U, P, D, t]), F = S(() => {
    le();
    const K = yn(z);
    x.current = K.setTimeout(Y, n);
  }, [n, Y, le]), X = S(() => {
    j && r && F();
  }, [r, F, j]), Z = S(() => {
    j && s && F();
  }, [s, F, j]), J = S(
    (K) => {
      j && K.key === "Escape" && F();
    },
    [j, F]
  );
  zt(
    () => Ar(z),
    "keydown",
    i ? J : void 0
  ), zt(
    () => {
      const K = z.current;
      if (!K)
        return null;
      const ye = gs(K);
      return ye.localName === "body" ? yn(z) : ye;
    },
    "scroll",
    () => {
      j && a && Y();
    },
    { passive: !0, capture: !0 }
  ), de(() => {
    P && (le(), j && W());
  }, [P, j, W, le]), de(() => () => {
    le(), _();
  }, [le, _]), zt(() => z.current, "pointerleave", F);
  const k = S(
    (K = {}, ye = null) => ({
      ...K,
      ref: Se(z, ye, R),
      onPointerEnter: H(K.onPointerEnter, (oe) => {
        oe.pointerType !== "touch" && N();
      }),
      onClick: H(K.onClick, X),
      onPointerDown: H(K.onPointerDown, Z),
      onFocus: H(K.onFocus, N),
      onBlur: H(K.onBlur, F),
      "aria-describedby": j ? ne : void 0
    }),
    [
      N,
      F,
      Z,
      j,
      ne,
      X,
      R
    ]
  ), M = S(
    (K = {}, ye = null) => L(
      {
        ...K,
        style: {
          ...K.style,
          [dt.arrowSize.var]: y ? `${y}px` : void 0,
          [dt.arrowShadowColor.var]: m
        }
      },
      ye
    ),
    [L, y, m]
  ), G = S(
    (K = {}, ye = null) => {
      const O = {
        ...K.style,
        position: "relative",
        transformOrigin: dt.transformOrigin.varRef
      };
      return {
        ref: ye,
        ...E,
        ...K,
        id: ne,
        role: "tooltip",
        style: O
      };
    },
    [E, ne]
  );
  return {
    isOpen: j,
    show: N,
    hide: F,
    getTriggerProps: k,
    getTooltipProps: G,
    getTooltipPositionerProps: M,
    getArrowProps: Q,
    getArrowInnerProps: ee
  };
}
var lr = "chakra-ui:close-tooltip";
function Yh(e, t) {
  return de(() => {
    const n = Ar(e);
    return n.addEventListener(lr, t), () => n.removeEventListener(lr, t);
  }, [t, e]), () => {
    const n = Ar(e), r = yn(e);
    n.dispatchEvent(new r.CustomEvent(lr));
  };
}
function Xh(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
function Zh(e, t) {
  const n = {};
  for (const r of t)
    r in e && (n[r] = e[r]);
  return n;
}
var Qh = g(Xe.div), Jh = b((e, t) => {
  var n, r;
  const o = Be("Tooltip", e), a = me(e), s = ot(), {
    children: i,
    label: c,
    shouldWrapChildren: l,
    "aria-label": u,
    hasArrow: d,
    bg: v,
    portalProps: p,
    background: y,
    backgroundColor: m,
    bgColor: h,
    motionProps: w,
    ...P
  } = a, I = (r = (n = y ?? m) != null ? n : v) != null ? r : h;
  if (I) {
    o.bg = I;
    const L = Wi(s, "colors", I);
    o[dt.arrowBg.var] = L;
  }
  const A = qh({ ...P, direction: s.direction }), T = typeof i == "string" || l;
  let E;
  if (T)
    E = /* @__PURE__ */ f.jsx(
      g.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ...A.getTriggerProps(),
        children: i
      }
    );
  else {
    const L = at.only(i);
    E = Ae(
      L,
      A.getTriggerProps(L.props, L.ref)
    );
  }
  const j = !!u, D = A.getTooltipProps({}, t), W = j ? Xh(D, ["role", "id"]) : D, R = Zh(D, ["role", "id"]);
  return c ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
    E,
    /* @__PURE__ */ f.jsx(ht, { children: A.isOpen && /* @__PURE__ */ f.jsx(ma, { ...p, children: /* @__PURE__ */ f.jsx(
      g.div,
      {
        ...A.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ f.jsxs(
          Qh,
          {
            variants: Kh,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...w,
            ...W,
            __css: o,
            children: [
              c,
              j && /* @__PURE__ */ f.jsx(g.span, { srOnly: !0, ...R, children: u }),
              d && /* @__PURE__ */ f.jsx(
                g.div,
                {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ f.jsx(
                    g.div,
                    {
                      "data-popper-arrow-inner": !0,
                      className: "chakra-tooltip__arrow",
                      __css: { bg: o.bg }
                    }
                  )
                }
              )
            ]
          }
        )
      }
    ) }) })
  ] }) : /* @__PURE__ */ f.jsx(f.Fragment, { children: i });
});
Jh.displayName = "Tooltip";
export {
  qy as AbsoluteCenter,
  kl as Accordion,
  al as AccordionButton,
  vl as AccordionIcon,
  pl as AccordionItem,
  _l as AccordionPanel,
  il as AccordionProvider,
  Kb as Alert,
  qb as AlertDescription,
  Zy as AlertDialog,
  qv as AlertDialogBody,
  Yv as AlertDialogCloseButton,
  Qy as AlertDialogContent,
  zv as AlertDialogFooter,
  Uv as AlertDialogHeader,
  Kv as AlertDialogOverlay,
  Yb as AlertIcon,
  Xb as AlertTitle,
  Df as AspectRatio,
  gg as Avatar,
  Nl as AvatarBadge,
  Il as AvatarGroup,
  Ff as Badge,
  fo as Box,
  jl as Breadcrumb,
  Al as BreadcrumbItem,
  ja as BreadcrumbLink,
  hr as BreadcrumbSeparator,
  wi as Button,
  Rl as ButtonGroup,
  bg as ButtonSpinner,
  Zb as CSSPolyfill,
  Qb as CSSReset,
  Jb as CSSVars,
  hy as Card,
  vy as CardBody,
  py as CardFooter,
  my as CardHeader,
  Rf as Center,
  e0 as ChakraBaseProvider,
  t0 as ChakraProvider,
  gu as Checkbox,
  Vl as CheckboxGroup,
  Ul as CheckboxIcon,
  Cf as Circle,
  Hp as CircularProgress,
  Mp as CircularProgressLabel,
  ha as CloseButton,
  Of as Code,
  Ea as Collapse,
  Bi as ColorModeContext,
  n0 as ColorModeProvider,
  ay as ColorModeScript,
  Lf as Container,
  bu as ControlBox,
  r0 as DarkMode,
  xg as Divider,
  Jy as Drawer,
  qv as DrawerBody,
  Yv as DrawerCloseButton,
  Wv as DrawerContent,
  zv as DrawerFooter,
  Uv as DrawerHeader,
  Kv as DrawerOverlay,
  ut as EASINGS,
  Fu as Editable,
  _u as EditableInput,
  ku as EditablePreview,
  Cu as EditableTextarea,
  o0 as EnvironmentProvider,
  gl as Fade,
  Bf as Flex,
  bs as FocusLock,
  Yl as FormControl,
  eu as FormErrorIcon,
  Jl as FormErrorMessage,
  Xl as FormHelperText,
  tu as FormLabel,
  Sg as GenericAvatarIcon,
  a0 as GlobalStyle,
  wg as Grid,
  kf as GridItem,
  Pg as HStack,
  _g as Heading,
  $f as Hide,
  zy as Highlight,
  Ve as Icon,
  Ml as IconButton,
  kg as Image,
  fy as Img,
  Uy as Indicator,
  Es as Input,
  lo as InputAddon,
  ff as InputGroup,
  _s as InputLeftAddon,
  Cs as InputLeftElement,
  ks as InputRightAddon,
  Ns as InputRightElement,
  jf as Kbd,
  s0 as LightMode,
  hf as Link,
  Ky as LinkBox,
  Gy as LinkOverlay,
  uo as List,
  Sf as ListIcon,
  xf as ListItem,
  Af as Mark,
  Cg as Menu,
  Ng as MenuButton,
  Fs as MenuCommand,
  Eg as MenuDescendantsProvider,
  Kf as MenuDivider,
  Ms as MenuGroup,
  vo as MenuIcon,
  Uf as MenuItem,
  Os as MenuItemOption,
  Ig as MenuList,
  Gf as MenuOptionGroup,
  Tg as MenuProvider,
  po as Modal,
  qv as ModalBody,
  Yv as ModalCloseButton,
  qs as ModalContent,
  uv as ModalContextProvider,
  Ks as ModalFocusScope,
  zv as ModalFooter,
  Uv as ModalHeader,
  Kv as ModalOverlay,
  up as NumberDecrementStepper,
  dp as NumberIncrementStepper,
  ip as NumberInput,
  lp as NumberInputField,
  cp as NumberInputStepper,
  gf as OrderedList,
  bp as PinInput,
  fp as PinInputDescendantsProvider,
  xp as PinInputField,
  mp as PinInputProvider,
  Cp as Popover,
  Np as PopoverAnchor,
  Ep as PopoverArrow,
  Ip as PopoverBody,
  Tp as PopoverCloseButton,
  Fp as PopoverContent,
  Rp as PopoverFooter,
  Pp as PopoverHeader,
  _p as PopoverTrigger,
  ma as Portal,
  i0 as PortalManager,
  Up as Progress,
  Gp as ProgressLabel,
  tm as Radio,
  Xp as RadioGroup,
  Hm as RangeSlider,
  Um as RangeSliderFilledTrack,
  Gm as RangeSliderMark,
  $m as RangeSliderProvider,
  Wm as RangeSliderThumb,
  zm as RangeSliderTrack,
  Fa as RequiredIndicator,
  xl as ScaleFade,
  rm as Select,
  ti as SelectField,
  Vf as Show,
  Ag as SimpleGrid,
  ho as Skeleton,
  dm as SkeletonCircle,
  vm as SkeletonText,
  hm as SkipNavContent,
  mm as SkipNavLink,
  Aa as Slide,
  wl as SlideFade,
  Qm as Slider,
  th as SliderFilledTrack,
  nh as SliderMark,
  Xm as SliderProvider,
  Jm as SliderThumb,
  eh as SliderTrack,
  wf as Spacer,
  qg as Spinner,
  As as Square,
  jg as Stack,
  _f as StackDivider,
  Dg as StackItem,
  oh as Stat,
  ah as StatArrow,
  di as StatDownArrow,
  sh as StatGroup,
  ih as StatHelpText,
  ch as StatLabel,
  lh as StatNumber,
  fi as StatUpArrow,
  ng as Step,
  ag as StepDescription,
  ph as StepIcon,
  sg as StepIndicator,
  ig as StepIndicatorContent,
  ta as StepNumber,
  cg as StepSeparator,
  fh as StepStatus,
  tg as StepTitle,
  rg as Stepper,
  c0 as StylesProvider,
  mh as Switch,
  Oh as Tab,
  Dh as TabIndicator,
  Fh as TabList,
  Rh as TabPanel,
  Mh as TabPanels,
  yh as Table,
  gh as TableCaption,
  dg as TableContainer,
  jh as Tabs,
  bh as TabsDescendantsProvider,
  Ph as TabsProvider,
  Bh as Tag,
  Wh as TagCloseButton,
  $h as TagLabel,
  Vh as TagLeftIcon,
  Hh as TagRightIcon,
  fg as Tbody,
  vg as Td,
  Fg as Text,
  Gh as Textarea,
  pg as Tfoot,
  mg as Th,
  lg as Thead,
  Xi as ThemeProvider,
  l0 as Toast,
  u0 as ToastOptionProvider,
  Zi as ToastProvider,
  Jh as Tooltip,
  ug as Tr,
  bf as UnorderedList,
  Rg as VStack,
  nu as VisuallyHidden,
  ru as VisuallyHiddenInput,
  Pf as Wrap,
  Ts as WrapItem,
  Yg as addPrefix,
  Jd as assignRef,
  Xg as background,
  Zg as baseTheme,
  Qg as border,
  Jg as calc,
  g as chakra,
  eb as color,
  d0 as cookieStorageManager,
  f0 as cookieStorageManagerSSR,
  v0 as createCookieStorageManager,
  iy as createIcon,
  p0 as createLocalStorageManager,
  tb as createMultiStyleConfigHelpers,
  m0 as createRenderToast,
  ly as createStandaloneToast,
  pa as createStylesContext,
  va as createToastFn,
  nb as css,
  da as cssVar,
  rb as defineCssVars,
  ob as defineStyle,
  ab as defineStyleConfig,
  sb as effect,
  ib as extendBaseTheme,
  cb as extendTheme,
  Ia as fadeConfig,
  lb as filter,
  ub as flattenTokens,
  db as flexbox,
  b as forwardRef,
  Wi as getCSSVar,
  fb as getCss,
  tc as getScriptSrc,
  pr as getSlideTransition,
  h0 as getToastPlacement,
  vb as getToken,
  pb as grid,
  mb as interactivity,
  hb as isChakraTheme,
  yb as isStyleProp,
  Ze as keyframes,
  gb as layout,
  ua as layoutPropNames,
  bb as list,
  y0 as localStorageManager,
  Dr as mergeThemeOverride,
  me as omitThemingProps,
  xb as others,
  dt as popperCSSVars,
  Sb as position,
  wb as propNames,
  Pb as pseudoPropNames,
  _b as pseudoSelectors,
  kb as requiredChakraThemeKeys,
  Cb as resolveStyleConfig,
  Nb as ring,
  Ta as scaleFadeConfig,
  Eb as scroll,
  Ib as shouldForwardProp,
  mr as slideFadeConfig,
  Tb as space,
  Ab as styled,
  jb as systemProps,
  Db as textDecoration,
  Fb as theme,
  Rb as toCSSObject,
  Mb as toCSSVar,
  Ob as toVarDefinition,
  Lb as toVarReference,
  Bb as tokenToCSSVar,
  $b as transform,
  Vb as transition,
  Hb as typography,
  sl as useAccordion,
  Vr as useAccordionContext,
  cl as useAccordionItem,
  dy as useAccordionItemState,
  Cn as useAccordionStyles,
  g0 as useAlertStyles,
  By as useAnimationState,
  gi as useAvatarStyles,
  $y as useBoolean,
  Hr as useBreadcrumbStyles,
  Wf as useBreakpoint,
  zf as useBreakpointValue,
  Mg as useButtonGroup,
  nt as useCallbackRef,
  Wr as useCardStyles,
  Oi as useChakra,
  Ma as useCheckbox,
  $l as useCheckboxGroup,
  Vy as useClipboard,
  Wb as useColorMode,
  Xy as useColorModePreference,
  zb as useColorModeValue,
  Ub as useComponentStyles__unstable,
  Hy as useConst,
  ef as useControllableProp,
  Ay as useControllableState,
  Su as useCounter,
  Wy as useDimensions,
  jy as useDisclosure,
  Bv as useDrawerContext,
  Du as useEditable,
  nn as useEditableContext,
  gy as useEditableControls,
  yy as useEditableState,
  Yr as useEditableStyles,
  Qi as useEnvironment,
  In as useEventListener,
  Dy as useEventListenerMap,
  Fy as useFocusEffect,
  Ry as useFocusOnHide,
  My as useFocusOnPointerDown,
  Oy as useFocusOnShow,
  Ly as useForceUpdate,
  zr as useFormControl,
  gt as useFormControlContext,
  Ur as useFormControlProps,
  Da as useFormControlStyles,
  Ql as useFormErrorStyles,
  Tf as useHighlight,
  ws as useId,
  Iy as useIds,
  Og as useImage,
  Ps as useInputGroupStyles,
  Py as useInterval,
  _y as useLatestRef,
  Is as useListStyles,
  An as useMediaQuery,
  Lg as useMenu,
  Bg as useMenuButton,
  $g as useMenuContext,
  Vg as useMenuDescendant,
  Hg as useMenuDescendants,
  Wg as useMenuDescendantsContext,
  Ni as useMenuItem,
  zg as useMenuList,
  Ii as useMenuOption,
  Ei as useMenuOptionGroup,
  Ug as useMenuPositioner,
  Gg as useMenuState,
  Pn as useMenuStyles,
  ky as useMergeRefs,
  sv as useModal,
  rt as useModalContext,
  Bs as useModalManager,
  bt as useModalStyles,
  Cy as useMouseDownRef,
  ke as useMultiStyleConfig,
  op as useNumberInput,
  Dn as useNumberInputStyles,
  Ty as useOptionalPart,
  Ny as useOutsideClick,
  Ey as usePanGesture,
  yp as usePinInput,
  hp as usePinInputContext,
  gp as usePinInputField,
  xs as usePointerEvent,
  kp as usePopover,
  st as usePopoverContext,
  Lt as usePopoverStyles,
  oa as usePopper,
  b0 as usePortalManager,
  Yy as usePrefersReducedMotion,
  by as usePrevious,
  Js as useProgressStyles,
  Ds as useQuery,
  Qp as useRadio,
  qp as useRadioGroup,
  ei as useRadioGroupContext,
  Lm as useRangeSlider,
  Fn as useRangeSliderContext,
  Rn as useRangeSliderStyles,
  io as useSafeLayoutEffect,
  xy as useShortcut,
  Km as useSlider,
  Mn as useSliderContext,
  On as useSliderStyles,
  Ln as useStatStyles,
  ct as useStepContext,
  xt as useStepperStyles,
  og as useSteps,
  Be as useStyleConfig,
  x0 as useStyles,
  kh as useTab,
  Th as useTabIndicator,
  _h as useTabList,
  Ih as useTabPanel,
  Eh as useTabPanels,
  St as useTableStyles,
  wh as useTabs,
  rn as useTabsContext,
  Sh as useTabsDescendant,
  xh as useTabsDescendants,
  vi as useTabsDescendantsContext,
  on as useTabsStyles,
  hi as useTagStyles,
  ot as useTheme,
  Sy as useTimeout,
  cy as useToast,
  Hi as useToken,
  qh as useTooltip,
  Ss as useUnmountEffect,
  co as useUpdateEffect,
  wy as useWhyDidYouUpdate,
  Gr as visuallyHiddenStyle,
  qi as withDefaultColorScheme,
  sy as withDefaultProps,
  nc as withDefaultSize,
  rc as withDefaultVariant,
  Ue as withDelay
};
