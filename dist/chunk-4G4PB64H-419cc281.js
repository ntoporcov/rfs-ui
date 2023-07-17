import { c as ke, l as de, j as S, a as j, f as $, v as Rt, k as Bt, o as xe, b as ne, q as Ie, e as Le, S as wn, r as Fe, i as On, H as Ft, N as En, x as We, A as Cn, h as Pn, z as Sn } from "./chunk-NO6MRLPK-0daf97be.js";
import { useLayoutEffect as In, useEffect as oe, useMemo as pe, useRef as B, useState as X, useCallback as I, cloneElement as $e, Children as An, isValidElement as Wt, Fragment as Dn, useId as tt } from "react";
function kn(e) {
  const t = Object.assign({}, e);
  for (let n in t)
    t[n] === void 0 && delete t[n];
  return t;
}
var Nn = Object.defineProperty, Mn = (e, t, n) => t in e ? Nn(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n, _ = (e, t, n) => (Mn(e, typeof t != "symbol" ? t + "" : t, n), n);
function xt(e) {
  return e.sort((t, n) => {
    const r = t.compareDocumentPosition(n);
    if (r & Node.DOCUMENT_POSITION_FOLLOWING || r & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (r & Node.DOCUMENT_POSITION_PRECEDING || r & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (r & Node.DOCUMENT_POSITION_DISCONNECTED || r & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var _n = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function wt(e, t, n) {
  let r = e + 1;
  return n && r >= t && (r = 0), r;
}
function Ot(e, t, n) {
  let r = e - 1;
  return n && r < 0 && (r = t), r;
}
var Ke = typeof window < "u" ? In : oe, Re = (e) => e, Tn = class {
  constructor() {
    _(this, "descendants", /* @__PURE__ */ new Map()), _(this, "register", (e) => {
      if (e != null)
        return _n(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), _(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = xt(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), _(this, "destroy", () => {
      this.descendants.clear();
    }), _(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const n = e.indexOf(t.node);
        t.index = n, t.node.dataset.index = t.index.toString();
      });
    }), _(this, "count", () => this.descendants.size), _(this, "enabledCount", () => this.enabledValues().length), _(this, "values", () => Array.from(this.descendants.values()).sort((t, n) => t.index - n.index)), _(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), _(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), _(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), _(this, "first", () => this.item(0)), _(this, "firstEnabled", () => this.enabledItem(0)), _(this, "last", () => this.item(this.descendants.size - 1)), _(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), _(this, "indexOf", (e) => {
      var t, n;
      return e && (n = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? n : -1;
    }), _(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), _(this, "next", (e, t = !0) => {
      const n = wt(e, this.count(), t);
      return this.item(n);
    }), _(this, "nextEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = wt(
        r,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), _(this, "prev", (e, t = !0) => {
      const n = Ot(e, this.count() - 1, t);
      return this.item(n);
    }), _(this, "prevEnabled", (e, t = !0) => {
      const n = this.item(e);
      if (!n)
        return;
      const r = this.enabledIndexOf(n.node), o = Ot(
        r,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), _(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const n = Array.from(this.descendants.keys()).concat(e), r = xt(n);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(r);
    });
  }
};
function jn(e, t) {
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
function ae(...e) {
  return (t) => {
    e.forEach((n) => {
      jn(n, t);
    });
  };
}
function Ln(...e) {
  return pe(() => ae(...e), e);
}
function Rn() {
  const e = B(new Tn());
  return Ke(() => () => e.current.destroy()), e.current;
}
var [Bn, $t] = ke({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function Fn(e) {
  const t = $t(), [n, r] = X(-1), o = B(null);
  Ke(() => () => {
    o.current && t.unregister(o.current);
  }, []), Ke(() => {
    if (!o.current)
      return;
    const s = Number(o.current.dataset.index);
    n != s && !Number.isNaN(s) && r(s);
  });
  const a = Re(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: n,
    enabledIndex: t.enabledIndexOf(o.current),
    register: ae(a, o)
  };
}
function Wn() {
  return [
    Re(Bn),
    () => Re($t()),
    () => Rn(),
    (o) => Fn(o)
  ];
}
function $n(e) {
  const {
    value: t,
    defaultValue: n,
    onChange: r,
    shouldUpdate: o = (m, f) => m !== f
  } = e, a = de(r), s = de(o), [i, u] = X(n), l = t !== void 0, c = l ? t : i, d = de(
    (m) => {
      const p = typeof m == "function" ? m(c) : m;
      s(c, p) && (l || u(p), a(p));
    },
    [l, a, c, s]
  );
  return [c, d];
}
var [Hn, zn] = ke({
  name: "AvatarStylesContext",
  hookName: "useAvatarStyles",
  providerName: "<Avatar/>"
});
function Vn(e) {
  var t;
  const n = e.split(" "), r = (t = n[0]) != null ? t : "", o = n.length > 1 ? n[n.length - 1] : "";
  return r && o ? `${r.charAt(0)}${o.charAt(0)}` : r.charAt(0);
}
function Ht(e) {
  const { name: t, getInitials: n, ...r } = e, o = zn();
  return /* @__PURE__ */ S.jsx(j.div, { role: "img", "aria-label": t, ...r, __css: o.label, children: t ? n == null ? void 0 : n(t) : null });
}
Ht.displayName = "AvatarName";
var zt = (e) => /* @__PURE__ */ S.jsxs(
  j.svg,
  {
    viewBox: "0 0 128 128",
    color: "#fff",
    width: "100%",
    height: "100%",
    className: "chakra-avatar__svg",
    ...e,
    children: [
      /* @__PURE__ */ S.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
        }
      ),
      /* @__PURE__ */ S.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
        }
      )
    ]
  }
), Xe = $(function(t, n) {
  const { htmlWidth: r, htmlHeight: o, alt: a, ...s } = t;
  return /* @__PURE__ */ S.jsx("img", { width: r, height: o, ref: n, alt: a, ...s });
});
Xe.displayName = "NativeImage";
function Vt(e) {
  const {
    loading: t,
    src: n,
    srcSet: r,
    onLoad: o,
    onError: a,
    crossOrigin: s,
    sizes: i,
    ignoreFallback: u
  } = e, [l, c] = X("pending");
  oe(() => {
    c(n ? "loading" : "pending");
  }, [n]);
  const d = B(), m = I(() => {
    if (!n)
      return;
    f();
    const p = new Image();
    p.src = n, s && (p.crossOrigin = s), r && (p.srcset = r), i && (p.sizes = i), t && (p.loading = t), p.onload = (v) => {
      f(), c("loaded"), o == null || o(v);
    }, p.onerror = (v) => {
      f(), c("failed"), a == null || a(v);
    }, d.current = p;
  }, [n, s, r, i, o, a, t]), f = () => {
    d.current && (d.current.onload = null, d.current.onerror = null, d.current = null);
  };
  return Rt(() => {
    if (!u)
      return l === "loading" && m(), () => {
        f();
      };
  }, [l, m, u]), u ? "loaded" : l;
}
var Un = (e, t) => e !== "loaded" && t === "beforeLoadOrError" || e === "failed" && t === "onError";
function qn(e, t = []) {
  const n = Object.assign({}, e);
  for (const r of t)
    r in n && delete n[r];
  return n;
}
var Gn = $(function(t, n) {
  const {
    fallbackSrc: r,
    fallback: o,
    src: a,
    srcSet: s,
    align: i,
    fit: u,
    loading: l,
    ignoreFallback: c,
    crossOrigin: d,
    fallbackStrategy: m = "beforeLoadOrError",
    referrerPolicy: f,
    ...p
  } = t, v = r !== void 0 || o !== void 0, g = l != null || c || !v, b = Vt({
    ...t,
    crossOrigin: d,
    ignoreFallback: g
  }), x = Un(b, m), w = {
    ref: n,
    objectFit: u,
    objectPosition: i,
    ...g ? p : qn(p, ["onError", "onLoad"])
  };
  return x ? o || /* @__PURE__ */ S.jsx(
    j.img,
    {
      as: Xe,
      className: "chakra-image__placeholder",
      src: r,
      ...w
    }
  ) : /* @__PURE__ */ S.jsx(
    j.img,
    {
      as: Xe,
      src: a,
      srcSet: s,
      crossOrigin: d,
      loading: l,
      referrerPolicy: f,
      className: "chakra-image",
      ...w
    }
  );
});
Gn.displayName = "Image";
function Ut(e) {
  const {
    src: t,
    srcSet: n,
    onError: r,
    onLoad: o,
    getInitials: a,
    name: s,
    borderRadius: i,
    loading: u,
    iconLabel: l,
    icon: c = /* @__PURE__ */ S.jsx(zt, {}),
    ignoreFallback: d,
    referrerPolicy: m,
    crossOrigin: f
  } = e, v = Vt({ src: t, onError: r, crossOrigin: f, ignoreFallback: d }) === "loaded";
  return !t || !v ? s ? /* @__PURE__ */ S.jsx(
    Ht,
    {
      className: "chakra-avatar__initials",
      getInitials: a,
      name: s
    }
  ) : $e(c, {
    role: "img",
    "aria-label": l
  }) : /* @__PURE__ */ S.jsx(
    j.img,
    {
      src: t,
      srcSet: n,
      alt: s,
      onLoad: o,
      referrerPolicy: m,
      crossOrigin: f ?? void 0,
      className: "chakra-avatar__img",
      loading: u,
      __css: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: i
      }
    }
  );
}
Ut.displayName = "AvatarImage";
var Kn = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
}, Xn = $((e, t) => {
  const n = Bt("Avatar", e), [r, o] = X(!1), {
    src: a,
    srcSet: s,
    name: i,
    showBorder: u,
    borderRadius: l = "full",
    onError: c,
    onLoad: d,
    getInitials: m = Vn,
    icon: f = /* @__PURE__ */ S.jsx(zt, {}),
    iconLabel: p = " avatar",
    loading: v,
    children: g,
    borderColor: b,
    ignoreFallback: x,
    crossOrigin: w,
    ...y
  } = xe(e), C = {
    borderRadius: l,
    borderWidth: u ? "2px" : void 0,
    ...Kn,
    ...n.container
  };
  return b && (C.borderColor = b), /* @__PURE__ */ S.jsx(
    j.span,
    {
      ref: t,
      ...y,
      className: ne("chakra-avatar", e.className),
      "data-loaded": Ie(r),
      __css: C,
      children: /* @__PURE__ */ S.jsxs(Hn, { value: n, children: [
        /* @__PURE__ */ S.jsx(
          Ut,
          {
            src: a,
            srcSet: s,
            loading: v,
            onLoad: Le(d, () => {
              o(!0);
            }),
            onError: c,
            getInitials: m,
            name: i,
            borderRadius: l,
            icon: f,
            iconLabel: p,
            ignoreFallback: x,
            crossOrigin: w
          }
        ),
        g
      ] })
    }
  );
});
Xn.displayName = "Avatar";
function qt(e) {
  return An.toArray(e).filter(
    (t) => Wt(t)
  );
}
var [Ca, Yn] = ke({
  strict: !1,
  name: "ButtonGroupContext"
});
function Zn(e) {
  const [t, n] = X(!e);
  return { ref: I((a) => {
    a && n(a.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Ye(e) {
  const { children: t, className: n, ...r } = e, o = Wt(t) ? $e(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, a = ne("chakra-button__icon", n);
  return /* @__PURE__ */ S.jsx(
    j.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...r,
      className: a,
      children: o
    }
  );
}
Ye.displayName = "ButtonIcon";
function Ze(e) {
  const {
    label: t,
    placement: n,
    spacing: r = "0.5rem",
    children: o = /* @__PURE__ */ S.jsx(wn, { color: "currentColor", width: "1em", height: "1em" }),
    className: a,
    __css: s,
    ...i
  } = e, u = ne("chakra-button__spinner", a), l = n === "start" ? "marginEnd" : "marginStart", c = pe(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [l]: t ? r : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...s
    }),
    [s, t, l, r]
  );
  return /* @__PURE__ */ S.jsx(j.div, { className: u, ...i, __css: c, children: o });
}
Ze.displayName = "ButtonSpinner";
var Jn = $((e, t) => {
  const n = Yn(), r = Fe("Button", { ...n, ...e }), {
    isDisabled: o = n == null ? void 0 : n.isDisabled,
    isLoading: a,
    isActive: s,
    children: i,
    leftIcon: u,
    rightIcon: l,
    loadingText: c,
    iconSpacing: d = "0.5rem",
    type: m,
    spinner: f,
    spinnerPlacement: p = "start",
    className: v,
    as: g,
    ...b
  } = xe(e), x = pe(() => {
    const E = { ...r == null ? void 0 : r._focus, zIndex: 1 };
    return {
      display: "inline-flex",
      appearance: "none",
      alignItems: "center",
      justifyContent: "center",
      userSelect: "none",
      position: "relative",
      whiteSpace: "nowrap",
      verticalAlign: "middle",
      outline: "none",
      ...r,
      ...!!n && { _focus: E }
    };
  }, [r, n]), { ref: w, type: y } = Zn(g), C = { rightIcon: l, leftIcon: u, iconSpacing: d, children: i };
  return /* @__PURE__ */ S.jsxs(
    j.button,
    {
      ref: Ln(t, w),
      as: g,
      type: m ?? y,
      "data-active": Ie(s),
      "data-loading": Ie(a),
      __css: x,
      className: ne("chakra-button", v),
      ...b,
      disabled: o || a,
      children: [
        a && p === "start" && /* @__PURE__ */ S.jsx(
          Ze,
          {
            className: "chakra-button__spinner--start",
            label: c,
            placement: "start",
            spacing: d,
            children: f
          }
        ),
        a ? c || /* @__PURE__ */ S.jsx(j.span, { opacity: 0, children: /* @__PURE__ */ S.jsx(Et, { ...C }) }) : /* @__PURE__ */ S.jsx(Et, { ...C }),
        a && p === "end" && /* @__PURE__ */ S.jsx(
          Ze,
          {
            className: "chakra-button__spinner--end",
            label: c,
            placement: "end",
            spacing: d,
            children: f
          }
        )
      ]
    }
  );
});
Jn.displayName = "Button";
function Et(e) {
  const { leftIcon: t, rightIcon: n, children: r, iconSpacing: o } = e;
  return /* @__PURE__ */ S.jsxs(S.Fragment, { children: [
    t && /* @__PURE__ */ S.jsx(Ye, { marginEnd: o, children: t }),
    r,
    n && /* @__PURE__ */ S.jsx(Ye, { marginStart: o, children: n })
  ] });
}
function Gt(e, t, n, r) {
  const o = de(n);
  return oe(() => {
    const a = typeof e == "function" ? e() : e ?? document;
    if (!(!n || !a))
      return a.addEventListener(t, o, r), () => {
        a.removeEventListener(t, o, r);
      };
  }, [t, e, r, o, n]), () => {
    const a = typeof e == "function" ? e() : e ?? document;
    a == null || a.removeEventListener(t, o, r);
  };
}
function Kt(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Xt(e) {
  var t;
  if (!Kt(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function Qn(e) {
  var t, n;
  return (n = (t = Yt(e)) == null ? void 0 : t.defaultView) != null ? n : window;
}
function Yt(e) {
  return Kt(e) ? e.ownerDocument : document;
}
function er(e) {
  return Yt(e).activeElement;
}
var Zt = (e) => e.hasAttribute("tabindex"), tr = (e) => Zt(e) && e.tabIndex === -1;
function nr(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function Jt(e) {
  return e.parentElement && Jt(e.parentElement) ? !0 : e.hidden;
}
function rr(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function Qt(e) {
  if (!Xt(e) || Jt(e) || nr(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const r = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in r ? r[t]() : rr(e) ? !0 : Zt(e);
}
function or(e) {
  return e ? Xt(e) && Qt(e) && !tr(e) : !1;
}
var ar = [
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
], sr = ar.join(), ir = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function cr(e) {
  const t = Array.from(
    e.querySelectorAll(sr)
  );
  return t.unshift(e), t.filter((n) => Qt(n) && ir(n));
}
var en = $(function(t, n) {
  const {
    templateAreas: r,
    gap: o,
    rowGap: a,
    columnGap: s,
    column: i,
    row: u,
    autoFlow: l,
    autoRows: c,
    templateRows: d,
    autoColumns: m,
    templateColumns: f,
    ...p
  } = t, v = {
    display: "grid",
    gridTemplateAreas: r,
    gridGap: o,
    gridRowGap: a,
    gridColumnGap: s,
    gridAutoColumns: m,
    gridColumn: i,
    gridRow: u,
    gridAutoFlow: l,
    gridAutoRows: c,
    gridTemplateRows: d,
    gridTemplateColumns: f
  };
  return /* @__PURE__ */ S.jsx(j.div, { ref: n, __css: v, ...p });
});
en.displayName = "Grid";
var ur = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function nt(e, t) {
  return Array.isArray(e) ? e.map((n) => n === null ? null : t(n)) : On(e) ? Object.keys(e).reduce((n, r) => (n[r] = t(e[r]), n), {}) : e != null ? t(e) : null;
}
function Pa(e, t = ur) {
  const n = {};
  return e.forEach((r, o) => {
    const a = t[o];
    r != null && (n[a] = r);
  }), n;
}
var lr = $(
  function(t, n) {
    const { columns: r, spacingX: o, spacingY: a, spacing: s, minChildWidth: i, ...u } = t, l = Ft(), c = i ? fr(i, l) : pr(r);
    return /* @__PURE__ */ S.jsx(
      en,
      {
        ref: n,
        gap: s,
        columnGap: o,
        rowGap: a,
        templateColumns: c,
        ...u
      }
    );
  }
);
lr.displayName = "SimpleGrid";
function dr(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function fr(e, t) {
  return nt(e, (n) => {
    const r = En("sizes", n, dr(n))(t);
    return n === null ? null : `repeat(auto-fit, minmax(${r}, 1fr))`;
  });
}
function pr(e) {
  return nt(
    e,
    (t) => t === null ? null : `repeat(${t}, minmax(0, 1fr))`
  );
}
var vr = $(function(t, n) {
  const r = Fe("Text", t), { className: o, align: a, decoration: s, casing: i, ...u } = xe(t), l = kn({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ S.jsx(
    j.p,
    {
      ref: n,
      className: ne("chakra-text", t.className),
      ...l,
      ...u,
      __css: r
    }
  );
});
vr.displayName = "Text";
var tn = (e) => /* @__PURE__ */ S.jsx(
  j.div,
  {
    className: "chakra-stack__item",
    ...e,
    __css: {
      display: "inline-block",
      flex: "0 0 auto",
      minWidth: 0,
      ...e.__css
    }
  }
);
tn.displayName = "StackItem";
function mr(e) {
  const { spacing: t, direction: n } = e, r = {
    column: {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    "column-reverse": {
      my: t,
      mx: 0,
      borderLeftWidth: 0,
      borderBottomWidth: "1px"
    },
    row: {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    },
    "row-reverse": {
      mx: t,
      my: 0,
      borderLeftWidth: "1px",
      borderBottomWidth: 0
    }
  };
  return {
    "&": nt(
      n,
      (o) => r[o]
    )
  };
}
var rt = $((e, t) => {
  const {
    isInline: n,
    direction: r,
    align: o,
    justify: a,
    spacing: s = "0.5rem",
    wrap: i,
    children: u,
    divider: l,
    className: c,
    shouldWrapChildren: d,
    ...m
  } = e, f = n ? "row" : r ?? "column", p = pe(
    () => mr({ spacing: s, direction: f }),
    [s, f]
  ), v = !!l, g = !d && !v, b = pe(() => {
    const w = qt(u);
    return g ? w : w.map((y, C) => {
      const E = typeof y.key < "u" ? y.key : C, P = C + 1 === w.length, D = d ? /* @__PURE__ */ S.jsx(tn, { children: y }, E) : y;
      if (!v)
        return D;
      const O = $e(
        l,
        {
          __css: p
        }
      ), k = P ? null : O;
      return /* @__PURE__ */ S.jsxs(Dn, { children: [
        D,
        k
      ] }, E);
    });
  }, [
    l,
    p,
    v,
    g,
    d,
    u
  ]), x = ne("chakra-stack", c);
  return /* @__PURE__ */ S.jsx(
    j.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: a,
      flexDirection: f,
      flexWrap: i,
      gap: v ? void 0 : s,
      className: x,
      ...m,
      children: b
    }
  );
});
rt.displayName = "Stack";
var hr = $((e, t) => /* @__PURE__ */ S.jsx(rt, { align: "center", ...e, direction: "column", ref: t }));
hr.displayName = "VStack";
var gr = $((e, t) => /* @__PURE__ */ S.jsx(rt, { align: "center", ...e, direction: "row", ref: t }));
gr.displayName = "HStack";
var br = $(function(t, n) {
  const r = Fe("Heading", t), { className: o, ...a } = xe(t);
  return /* @__PURE__ */ S.jsx(
    j.h2,
    {
      ref: n,
      className: ne("chakra-heading", t.className),
      ...a,
      __css: r
    }
  );
});
br.displayName = "Heading";
var yr = $(function(t, n) {
  const {
    borderLeftWidth: r,
    borderBottomWidth: o,
    borderTopWidth: a,
    borderRightWidth: s,
    borderWidth: i,
    borderStyle: u,
    borderColor: l,
    ...c
  } = Fe("Divider", t), {
    className: d,
    orientation: m = "horizontal",
    __css: f,
    ...p
  } = xe(t), v = {
    vertical: {
      borderLeftWidth: r || s || i || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || a || i || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ S.jsx(
    j.hr,
    {
      ref: n,
      "aria-orientation": m,
      ...p,
      __css: {
        ...c,
        border: "0",
        borderColor: l,
        borderStyle: u,
        ...v[m],
        ...f
      },
      className: ne("chakra-divider", d)
    }
  );
});
yr.displayName = "Divider";
function xr(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function wr(e = {}) {
  const { timeout: t = 300, preventDefault: n = () => !0 } = e, [r, o] = X([]), a = B(), s = () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }, i = () => {
    s(), a.current = setTimeout(() => {
      o([]), a.current = null;
    }, t);
  };
  oe(() => s, []);
  function u(l) {
    return (c) => {
      if (c.key === "Backspace") {
        const d = [...r];
        d.pop(), o(d);
        return;
      }
      if (xr(c)) {
        const d = r.concat(c.key);
        n(c) && (c.preventDefault(), c.stopPropagation()), o(d), l(d.join("")), i();
      }
    };
  }
  return u;
}
function Or(e, t, n, r) {
  if (t == null)
    return r;
  if (!r)
    return e.find(
      (s) => n(s).toLowerCase().startsWith(t.toLowerCase())
    );
  const o = e.filter(
    (a) => n(a).toLowerCase().startsWith(t.toLowerCase())
  );
  if (o.length > 0) {
    let a;
    return o.includes(r) ? (a = o.indexOf(r) + 1, a === o.length && (a = 0), o[a]) : (a = e.indexOf(o[0]), e[a]);
  }
  return r;
}
function Er() {
  const e = B(/* @__PURE__ */ new Map()), t = e.current, n = I((o, a, s, i) => {
    e.current.set(s, { type: a, el: o, options: i }), o.addEventListener(a, s, i);
  }, []), r = I(
    (o, a, s, i) => {
      o.removeEventListener(a, s, i), e.current.delete(s);
    },
    []
  );
  return oe(
    () => () => {
      t.forEach((o, a) => {
        r(o.el, o.type, a, o.options);
      });
    },
    [r, t]
  ), { add: n, remove: r };
}
function qe(e) {
  const t = e.target, { tagName: n, isContentEditable: r } = t;
  return n !== "INPUT" && n !== "TEXTAREA" && r !== !0;
}
function Cr(e = {}) {
  const {
    ref: t,
    isDisabled: n,
    isFocusable: r,
    clickOnEnter: o = !0,
    clickOnSpace: a = !0,
    onMouseDown: s,
    onMouseUp: i,
    onClick: u,
    onKeyDown: l,
    onKeyUp: c,
    tabIndex: d,
    onMouseOver: m,
    onMouseLeave: f,
    ...p
  } = e, [v, g] = X(!0), [b, x] = X(!1), w = Er(), y = (h) => {
    h && h.tagName !== "BUTTON" && g(!1);
  }, C = v ? d : d || 0, E = n && !r, P = I(
    (h) => {
      if (n) {
        h.stopPropagation(), h.preventDefault();
        return;
      }
      h.currentTarget.focus(), u == null || u(h);
    },
    [n, u]
  ), A = I(
    (h) => {
      b && qe(h) && (h.preventDefault(), h.stopPropagation(), x(!1), w.remove(document, "keyup", A, !1));
    },
    [b, w]
  ), D = I(
    (h) => {
      if (l == null || l(h), n || h.defaultPrevented || h.metaKey || !qe(h.nativeEvent) || v)
        return;
      const H = o && h.key === "Enter";
      a && h.key === " " && (h.preventDefault(), x(!0)), H && (h.preventDefault(), h.currentTarget.click()), w.add(document, "keyup", A, !1);
    },
    [
      n,
      v,
      l,
      o,
      a,
      w,
      A
    ]
  ), O = I(
    (h) => {
      if (c == null || c(h), n || h.defaultPrevented || h.metaKey || !qe(h.nativeEvent) || v)
        return;
      a && h.key === " " && (h.preventDefault(), x(!1), h.currentTarget.click());
    },
    [a, v, n, c]
  ), k = I(
    (h) => {
      h.button === 0 && (x(!1), w.remove(document, "mouseup", k, !1));
    },
    [w]
  ), T = I(
    (h) => {
      if (h.button !== 0)
        return;
      if (n) {
        h.stopPropagation(), h.preventDefault();
        return;
      }
      v || x(!0), h.currentTarget.focus({ preventScroll: !0 }), w.add(document, "mouseup", k, !1), s == null || s(h);
    },
    [n, v, s, w, k]
  ), N = I(
    (h) => {
      h.button === 0 && (v || x(!1), i == null || i(h));
    },
    [i, v]
  ), F = I(
    (h) => {
      if (n) {
        h.preventDefault();
        return;
      }
      m == null || m(h);
    },
    [n, m]
  ), W = I(
    (h) => {
      b && (h.preventDefault(), x(!1)), f == null || f(h);
    },
    [b, f]
  ), M = ae(t, y);
  return v ? {
    ...p,
    ref: M,
    type: "button",
    "aria-disabled": E ? void 0 : n,
    disabled: E,
    onClick: P,
    onMouseDown: s,
    onMouseUp: i,
    onKeyUp: c,
    onKeyDown: l,
    onMouseOver: m,
    onMouseLeave: f
  } : {
    ...p,
    ref: M,
    role: "button",
    "data-active": Ie(b),
    "aria-disabled": n ? "true" : void 0,
    tabIndex: E ? void 0 : C,
    onClick: P,
    onMouseDown: T,
    onMouseUp: N,
    onKeyUp: O,
    onKeyDown: D,
    onMouseOver: F,
    onMouseLeave: W
  };
}
function Pr(e) {
  const t = e.current;
  if (!t)
    return !1;
  const n = er(t);
  return !n || t.contains(n) ? !1 : !!or(n);
}
function Sr(e, t) {
  const { shouldFocus: n, visible: r, focusRef: o } = t, a = n && !r;
  We(() => {
    if (!a || Pr(e))
      return;
    const s = (o == null ? void 0 : o.current) || e.current;
    let i;
    if (s)
      return i = requestAnimationFrame(() => {
        s.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(i);
      };
  }, [a, e, o]);
}
var Ir = {
  preventScroll: !0,
  shouldFocus: !1
};
function Sa(e, t = Ir) {
  const { focusRef: n, preventScroll: r, shouldFocus: o, visible: a } = t, s = Ar(e) ? e.current : e, i = o && a, u = B(i), l = B(a);
  Rt(() => {
    !l.current && a && (u.current = i), l.current = a;
  }, [a, i]);
  const c = I(() => {
    if (!(!a || !s || !u.current) && (u.current = !1, !s.contains(document.activeElement)))
      if (n != null && n.current)
        requestAnimationFrame(() => {
          var d;
          (d = n.current) == null || d.focus({ preventScroll: r });
        });
      else {
        const d = cr(s);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: r });
        });
      }
  }, [a, r, s, n]);
  We(() => {
    c();
  }, [c]), Gt(s, "transitionend", c);
}
function Ar(e) {
  return "current" in e;
}
var me = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), q = {
  arrowShadowColor: me("--popper-arrow-shadow-color"),
  arrowSize: me("--popper-arrow-size", "8px"),
  arrowSizeHalf: me("--popper-arrow-size-half"),
  arrowBg: me("--popper-arrow-bg"),
  transformOrigin: me("--popper-transform-origin"),
  arrowOffset: me("--popper-arrow-offset")
};
function Dr(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var kr = {
  top: "bottom center",
  "top-start": "bottom left",
  "top-end": "bottom right",
  bottom: "top center",
  "bottom-start": "top left",
  "bottom-end": "top right",
  left: "right center",
  "left-start": "right top",
  "left-end": "right bottom",
  right: "left center",
  "right-start": "left top",
  "right-end": "left bottom"
}, Nr = (e) => kr[e], Ct = {
  scroll: !0,
  resize: !0
};
function Mr(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...Ct, ...e }
  } : t = {
    enabled: e,
    options: Ct
  }, t;
}
var _r = {
  name: "matchWidth",
  enabled: !0,
  phase: "beforeWrite",
  requires: ["computeStyles"],
  fn: ({ state: e }) => {
    e.styles.popper.width = `${e.rects.reference.width}px`;
  },
  effect: ({ state: e }) => () => {
    const t = e.elements.reference;
    e.elements.popper.style.width = `${t.offsetWidth}px`;
  }
}, Tr = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    Pt(e);
  },
  effect: ({ state: e }) => () => {
    Pt(e);
  }
}, Pt = (e) => {
  e.elements.popper.style.setProperty(
    q.transformOrigin.var,
    Nr(e.placement)
  );
}, jr = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    Lr(e);
  }
}, Lr = (e) => {
  var t;
  if (!e.placement)
    return;
  const n = Rr(e.placement);
  if ((t = e.elements) != null && t.arrow && n) {
    Object.assign(e.elements.arrow.style, {
      [n.property]: n.value,
      width: q.arrowSize.varRef,
      height: q.arrowSize.varRef,
      zIndex: -1
    });
    const r = {
      [q.arrowSizeHalf.var]: `calc(${q.arrowSize.varRef} / 2 - 1px)`,
      [q.arrowOffset.var]: `calc(${q.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in r)
      e.elements.arrow.style.setProperty(o, r[o]);
  }
}, Rr = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: q.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: q.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: q.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: q.arrowOffset.varRef };
}, Br = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    St(e);
  },
  effect: ({ state: e }) => () => {
    St(e);
  }
}, St = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const n = Dr(e.placement);
  n && t.style.setProperty("--popper-arrow-default-shadow", n), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: q.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, Fr = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, Wr = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function $r(e, t = "ltr") {
  var n, r;
  const o = ((n = Fr[e]) == null ? void 0 : n[t]) || e;
  return t === "ltr" ? o : (r = Wr[e]) != null ? r : o;
}
var z = "top", Y = "bottom", Z = "right", V = "left", ot = "auto", Ne = [z, Y, Z, V], he = "start", Ae = "end", Hr = "clippingParents", nn = "viewport", Ce = "popper", zr = "reference", It = /* @__PURE__ */ Ne.reduce(function(e, t) {
  return e.concat([t + "-" + he, t + "-" + Ae]);
}, []), rn = /* @__PURE__ */ [].concat(Ne, [ot]).reduce(function(e, t) {
  return e.concat([t, t + "-" + he, t + "-" + Ae]);
}, []), Vr = "beforeRead", Ur = "read", qr = "afterRead", Gr = "beforeMain", Kr = "main", Xr = "afterMain", Yr = "beforeWrite", Zr = "write", Jr = "afterWrite", Qr = [Vr, Ur, qr, Gr, Kr, Xr, Yr, Zr, Jr];
function te(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function G(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function ve(e) {
  var t = G(e).Element;
  return e instanceof t || e instanceof Element;
}
function K(e) {
  var t = G(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function at(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = G(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function eo(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(n) {
    var r = t.styles[n] || {}, o = t.attributes[n] || {}, a = t.elements[n];
    !K(a) || !te(a) || (Object.assign(a.style, r), Object.keys(o).forEach(function(s) {
      var i = o[s];
      i === !1 ? a.removeAttribute(s) : a.setAttribute(s, i === !0 ? "" : i);
    }));
  });
}
function to(e) {
  var t = e.state, n = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var o = t.elements[r], a = t.attributes[r] || {}, s = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : n[r]), i = s.reduce(function(u, l) {
        return u[l] = "", u;
      }, {});
      !K(o) || !te(o) || (Object.assign(o.style, i), Object.keys(a).forEach(function(u) {
        o.removeAttribute(u);
      }));
    });
  };
}
const no = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: eo,
  effect: to,
  requires: ["computeStyles"]
};
function ee(e) {
  return e.split("-")[0];
}
var fe = Math.max, Be = Math.min, ge = Math.round;
function Je() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function on() {
  return !/^((?!chrome|android).)*safari/i.test(Je());
}
function be(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(), o = 1, a = 1;
  t && K(e) && (o = e.offsetWidth > 0 && ge(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && ge(r.height) / e.offsetHeight || 1);
  var s = ve(e) ? G(e) : window, i = s.visualViewport, u = !on() && n, l = (r.left + (u && i ? i.offsetLeft : 0)) / o, c = (r.top + (u && i ? i.offsetTop : 0)) / a, d = r.width / o, m = r.height / a;
  return {
    width: d,
    height: m,
    top: c,
    right: l + d,
    bottom: c + m,
    left: l,
    x: l,
    y: c
  };
}
function st(e) {
  var t = be(e), n = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: n,
    height: r
  };
}
function an(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (n && at(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function re(e) {
  return G(e).getComputedStyle(e);
}
function ro(e) {
  return ["table", "td", "th"].indexOf(te(e)) >= 0;
}
function se(e) {
  return ((ve(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function He(e) {
  return te(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (at(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    se(e)
  );
}
function At(e) {
  return !K(e) || // https://github.com/popperjs/popper-core/issues/837
  re(e).position === "fixed" ? null : e.offsetParent;
}
function oo(e) {
  var t = /firefox/i.test(Je()), n = /Trident/i.test(Je());
  if (n && K(e)) {
    var r = re(e);
    if (r.position === "fixed")
      return null;
  }
  var o = He(e);
  for (at(o) && (o = o.host); K(o) && ["html", "body"].indexOf(te(o)) < 0; ) {
    var a = re(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Me(e) {
  for (var t = G(e), n = At(e); n && ro(n) && re(n).position === "static"; )
    n = At(n);
  return n && (te(n) === "html" || te(n) === "body" && re(n).position === "static") ? t : n || oo(e) || t;
}
function it(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Pe(e, t, n) {
  return fe(e, Be(t, n));
}
function ao(e, t, n) {
  var r = Pe(e, t, n);
  return r > n ? n : r;
}
function sn() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function cn(e) {
  return Object.assign({}, sn(), e);
}
function un(e, t) {
  return t.reduce(function(n, r) {
    return n[r] = e, n;
  }, {});
}
var so = function(t, n) {
  return t = typeof t == "function" ? t(Object.assign({}, n.rects, {
    placement: n.placement
  })) : t, cn(typeof t != "number" ? t : un(t, Ne));
};
function io(e) {
  var t, n = e.state, r = e.name, o = e.options, a = n.elements.arrow, s = n.modifiersData.popperOffsets, i = ee(n.placement), u = it(i), l = [V, Z].indexOf(i) >= 0, c = l ? "height" : "width";
  if (!(!a || !s)) {
    var d = so(o.padding, n), m = st(a), f = u === "y" ? z : V, p = u === "y" ? Y : Z, v = n.rects.reference[c] + n.rects.reference[u] - s[u] - n.rects.popper[c], g = s[u] - n.rects.reference[u], b = Me(a), x = b ? u === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, w = v / 2 - g / 2, y = d[f], C = x - m[c] - d[p], E = x / 2 - m[c] / 2 + w, P = Pe(y, E, C), A = u;
    n.modifiersData[r] = (t = {}, t[A] = P, t.centerOffset = P - E, t);
  }
}
function co(e) {
  var t = e.state, n = e.options, r = n.element, o = r === void 0 ? "[data-popper-arrow]" : r;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || an(t.elements.popper, o) && (t.elements.arrow = o));
}
const uo = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: io,
  effect: co,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ye(e) {
  return e.split("-")[1];
}
var lo = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function fo(e, t) {
  var n = e.x, r = e.y, o = t.devicePixelRatio || 1;
  return {
    x: ge(n * o) / o || 0,
    y: ge(r * o) / o || 0
  };
}
function Dt(e) {
  var t, n = e.popper, r = e.popperRect, o = e.placement, a = e.variation, s = e.offsets, i = e.position, u = e.gpuAcceleration, l = e.adaptive, c = e.roundOffsets, d = e.isFixed, m = s.x, f = m === void 0 ? 0 : m, p = s.y, v = p === void 0 ? 0 : p, g = typeof c == "function" ? c({
    x: f,
    y: v
  }) : {
    x: f,
    y: v
  };
  f = g.x, v = g.y;
  var b = s.hasOwnProperty("x"), x = s.hasOwnProperty("y"), w = V, y = z, C = window;
  if (l) {
    var E = Me(n), P = "clientHeight", A = "clientWidth";
    if (E === G(n) && (E = se(n), re(E).position !== "static" && i === "absolute" && (P = "scrollHeight", A = "scrollWidth")), E = E, o === z || (o === V || o === Z) && a === Ae) {
      y = Y;
      var D = d && E === C && C.visualViewport ? C.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        E[P]
      );
      v -= D - r.height, v *= u ? 1 : -1;
    }
    if (o === V || (o === z || o === Y) && a === Ae) {
      w = Z;
      var O = d && E === C && C.visualViewport ? C.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        E[A]
      );
      f -= O - r.width, f *= u ? 1 : -1;
    }
  }
  var k = Object.assign({
    position: i
  }, l && lo), T = c === !0 ? fo({
    x: f,
    y: v
  }, G(n)) : {
    x: f,
    y: v
  };
  if (f = T.x, v = T.y, u) {
    var N;
    return Object.assign({}, k, (N = {}, N[y] = x ? "0" : "", N[w] = b ? "0" : "", N.transform = (C.devicePixelRatio || 1) <= 1 ? "translate(" + f + "px, " + v + "px)" : "translate3d(" + f + "px, " + v + "px, 0)", N));
  }
  return Object.assign({}, k, (t = {}, t[y] = x ? v + "px" : "", t[w] = b ? f + "px" : "", t.transform = "", t));
}
function po(e) {
  var t = e.state, n = e.options, r = n.gpuAcceleration, o = r === void 0 ? !0 : r, a = n.adaptive, s = a === void 0 ? !0 : a, i = n.roundOffsets, u = i === void 0 ? !0 : i, l = {
    placement: ee(t.placement),
    variation: ye(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, Dt(Object.assign({}, l, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: s,
    roundOffsets: u
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, Dt(Object.assign({}, l, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: u
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const vo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: po,
  data: {}
};
var Te = {
  passive: !0
};
function mo(e) {
  var t = e.state, n = e.instance, r = e.options, o = r.scroll, a = o === void 0 ? !0 : o, s = r.resize, i = s === void 0 ? !0 : s, u = G(t.elements.popper), l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && l.forEach(function(c) {
    c.addEventListener("scroll", n.update, Te);
  }), i && u.addEventListener("resize", n.update, Te), function() {
    a && l.forEach(function(c) {
      c.removeEventListener("scroll", n.update, Te);
    }), i && u.removeEventListener("resize", n.update, Te);
  };
}
const ho = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: mo,
  data: {}
};
var go = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function je(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return go[t];
  });
}
var bo = {
  start: "end",
  end: "start"
};
function kt(e) {
  return e.replace(/start|end/g, function(t) {
    return bo[t];
  });
}
function ct(e) {
  var t = G(e), n = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: n,
    scrollTop: r
  };
}
function ut(e) {
  return be(se(e)).left + ct(e).scrollLeft;
}
function yo(e, t) {
  var n = G(e), r = se(e), o = n.visualViewport, a = r.clientWidth, s = r.clientHeight, i = 0, u = 0;
  if (o) {
    a = o.width, s = o.height;
    var l = on();
    (l || !l && t === "fixed") && (i = o.offsetLeft, u = o.offsetTop);
  }
  return {
    width: a,
    height: s,
    x: i + ut(e),
    y: u
  };
}
function xo(e) {
  var t, n = se(e), r = ct(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = fe(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), s = fe(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), i = -r.scrollLeft + ut(e), u = -r.scrollTop;
  return re(o || n).direction === "rtl" && (i += fe(n.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: s,
    x: i,
    y: u
  };
}
function lt(e) {
  var t = re(e), n = t.overflow, r = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + o + r);
}
function ln(e) {
  return ["html", "body", "#document"].indexOf(te(e)) >= 0 ? e.ownerDocument.body : K(e) && lt(e) ? e : ln(He(e));
}
function Se(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = ln(e), o = r === ((n = e.ownerDocument) == null ? void 0 : n.body), a = G(r), s = o ? [a].concat(a.visualViewport || [], lt(r) ? r : []) : r, i = t.concat(s);
  return o ? i : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    i.concat(Se(He(s)))
  );
}
function Qe(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function wo(e, t) {
  var n = be(e, !1, t === "fixed");
  return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n;
}
function Nt(e, t, n) {
  return t === nn ? Qe(yo(e, n)) : ve(t) ? wo(t, n) : Qe(xo(se(e)));
}
function Oo(e) {
  var t = Se(He(e)), n = ["absolute", "fixed"].indexOf(re(e).position) >= 0, r = n && K(e) ? Me(e) : e;
  return ve(r) ? t.filter(function(o) {
    return ve(o) && an(o, r) && te(o) !== "body";
  }) : [];
}
function Eo(e, t, n, r) {
  var o = t === "clippingParents" ? Oo(e) : [].concat(t), a = [].concat(o, [n]), s = a[0], i = a.reduce(function(u, l) {
    var c = Nt(e, l, r);
    return u.top = fe(c.top, u.top), u.right = Be(c.right, u.right), u.bottom = Be(c.bottom, u.bottom), u.left = fe(c.left, u.left), u;
  }, Nt(e, s, r));
  return i.width = i.right - i.left, i.height = i.bottom - i.top, i.x = i.left, i.y = i.top, i;
}
function dn(e) {
  var t = e.reference, n = e.element, r = e.placement, o = r ? ee(r) : null, a = r ? ye(r) : null, s = t.x + t.width / 2 - n.width / 2, i = t.y + t.height / 2 - n.height / 2, u;
  switch (o) {
    case z:
      u = {
        x: s,
        y: t.y - n.height
      };
      break;
    case Y:
      u = {
        x: s,
        y: t.y + t.height
      };
      break;
    case Z:
      u = {
        x: t.x + t.width,
        y: i
      };
      break;
    case V:
      u = {
        x: t.x - n.width,
        y: i
      };
      break;
    default:
      u = {
        x: t.x,
        y: t.y
      };
  }
  var l = o ? it(o) : null;
  if (l != null) {
    var c = l === "y" ? "height" : "width";
    switch (a) {
      case he:
        u[l] = u[l] - (t[c] / 2 - n[c] / 2);
        break;
      case Ae:
        u[l] = u[l] + (t[c] / 2 - n[c] / 2);
        break;
    }
  }
  return u;
}
function De(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = r === void 0 ? e.placement : r, a = n.strategy, s = a === void 0 ? e.strategy : a, i = n.boundary, u = i === void 0 ? Hr : i, l = n.rootBoundary, c = l === void 0 ? nn : l, d = n.elementContext, m = d === void 0 ? Ce : d, f = n.altBoundary, p = f === void 0 ? !1 : f, v = n.padding, g = v === void 0 ? 0 : v, b = cn(typeof g != "number" ? g : un(g, Ne)), x = m === Ce ? zr : Ce, w = e.rects.popper, y = e.elements[p ? x : m], C = Eo(ve(y) ? y : y.contextElement || se(e.elements.popper), u, c, s), E = be(e.elements.reference), P = dn({
    reference: E,
    element: w,
    strategy: "absolute",
    placement: o
  }), A = Qe(Object.assign({}, w, P)), D = m === Ce ? A : E, O = {
    top: C.top - D.top + b.top,
    bottom: D.bottom - C.bottom + b.bottom,
    left: C.left - D.left + b.left,
    right: D.right - C.right + b.right
  }, k = e.modifiersData.offset;
  if (m === Ce && k) {
    var T = k[o];
    Object.keys(O).forEach(function(N) {
      var F = [Z, Y].indexOf(N) >= 0 ? 1 : -1, W = [z, Y].indexOf(N) >= 0 ? "y" : "x";
      O[N] += T[W] * F;
    });
  }
  return O;
}
function Co(e, t) {
  t === void 0 && (t = {});
  var n = t, r = n.placement, o = n.boundary, a = n.rootBoundary, s = n.padding, i = n.flipVariations, u = n.allowedAutoPlacements, l = u === void 0 ? rn : u, c = ye(r), d = c ? i ? It : It.filter(function(p) {
    return ye(p) === c;
  }) : Ne, m = d.filter(function(p) {
    return l.indexOf(p) >= 0;
  });
  m.length === 0 && (m = d);
  var f = m.reduce(function(p, v) {
    return p[v] = De(e, {
      placement: v,
      boundary: o,
      rootBoundary: a,
      padding: s
    })[ee(v)], p;
  }, {});
  return Object.keys(f).sort(function(p, v) {
    return f[p] - f[v];
  });
}
function Po(e) {
  if (ee(e) === ot)
    return [];
  var t = je(e);
  return [kt(e), t, kt(t)];
}
function So(e) {
  var t = e.state, n = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !0 : s, u = n.fallbackPlacements, l = n.padding, c = n.boundary, d = n.rootBoundary, m = n.altBoundary, f = n.flipVariations, p = f === void 0 ? !0 : f, v = n.allowedAutoPlacements, g = t.options.placement, b = ee(g), x = b === g, w = u || (x || !p ? [je(g)] : Po(g)), y = [g].concat(w).reduce(function(R, U) {
      return R.concat(ee(U) === ot ? Co(t, {
        placement: U,
        boundary: c,
        rootBoundary: d,
        padding: l,
        flipVariations: p,
        allowedAutoPlacements: v
      }) : U);
    }, []), C = t.rects.reference, E = t.rects.popper, P = /* @__PURE__ */ new Map(), A = !0, D = y[0], O = 0; O < y.length; O++) {
      var k = y[O], T = ee(k), N = ye(k) === he, F = [z, Y].indexOf(T) >= 0, W = F ? "width" : "height", M = De(t, {
        placement: k,
        boundary: c,
        rootBoundary: d,
        altBoundary: m,
        padding: l
      }), h = F ? N ? Z : V : N ? Y : z;
      C[W] > E[W] && (h = je(h));
      var H = je(h), J = [];
      if (a && J.push(M[T] <= 0), i && J.push(M[h] <= 0, M[H] <= 0), J.every(function(R) {
        return R;
      })) {
        D = k, A = !1;
        break;
      }
      P.set(k, J);
    }
    if (A)
      for (var ie = p ? 3 : 1, Oe = function(U) {
        var ue = y.find(function(Ee) {
          var Q = P.get(Ee);
          if (Q)
            return Q.slice(0, U).every(function(ze) {
              return ze;
            });
        });
        if (ue)
          return D = ue, "break";
      }, ce = ie; ce > 0; ce--) {
        var L = Oe(ce);
        if (L === "break")
          break;
      }
    t.placement !== D && (t.modifiersData[r]._skip = !0, t.placement = D, t.reset = !0);
  }
}
const Io = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: So,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Mt(e, t, n) {
  return n === void 0 && (n = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - n.y,
    right: e.right - t.width + n.x,
    bottom: e.bottom - t.height + n.y,
    left: e.left - t.width - n.x
  };
}
function _t(e) {
  return [z, Z, Y, V].some(function(t) {
    return e[t] >= 0;
  });
}
function Ao(e) {
  var t = e.state, n = e.name, r = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, s = De(t, {
    elementContext: "reference"
  }), i = De(t, {
    altBoundary: !0
  }), u = Mt(s, r), l = Mt(i, o, a), c = _t(u), d = _t(l);
  t.modifiersData[n] = {
    referenceClippingOffsets: u,
    popperEscapeOffsets: l,
    isReferenceHidden: c,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": d
  });
}
const Do = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ao
};
function ko(e, t, n) {
  var r = ee(e), o = [V, z].indexOf(r) >= 0 ? -1 : 1, a = typeof n == "function" ? n(Object.assign({}, t, {
    placement: e
  })) : n, s = a[0], i = a[1];
  return s = s || 0, i = (i || 0) * o, [V, Z].indexOf(r) >= 0 ? {
    x: i,
    y: s
  } : {
    x: s,
    y: i
  };
}
function No(e) {
  var t = e.state, n = e.options, r = e.name, o = n.offset, a = o === void 0 ? [0, 0] : o, s = rn.reduce(function(c, d) {
    return c[d] = ko(d, t.rects, a), c;
  }, {}), i = s[t.placement], u = i.x, l = i.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += u, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = s;
}
const Mo = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: No
};
function _o(e) {
  var t = e.state, n = e.name;
  t.modifiersData[n] = dn({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const To = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: _o,
  data: {}
};
function jo(e) {
  return e === "x" ? "y" : "x";
}
function Lo(e) {
  var t = e.state, n = e.options, r = e.name, o = n.mainAxis, a = o === void 0 ? !0 : o, s = n.altAxis, i = s === void 0 ? !1 : s, u = n.boundary, l = n.rootBoundary, c = n.altBoundary, d = n.padding, m = n.tether, f = m === void 0 ? !0 : m, p = n.tetherOffset, v = p === void 0 ? 0 : p, g = De(t, {
    boundary: u,
    rootBoundary: l,
    padding: d,
    altBoundary: c
  }), b = ee(t.placement), x = ye(t.placement), w = !x, y = it(b), C = jo(y), E = t.modifiersData.popperOffsets, P = t.rects.reference, A = t.rects.popper, D = typeof v == "function" ? v(Object.assign({}, t.rects, {
    placement: t.placement
  })) : v, O = typeof D == "number" ? {
    mainAxis: D,
    altAxis: D
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, D), k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, T = {
    x: 0,
    y: 0
  };
  if (E) {
    if (a) {
      var N, F = y === "y" ? z : V, W = y === "y" ? Y : Z, M = y === "y" ? "height" : "width", h = E[y], H = h + g[F], J = h - g[W], ie = f ? -A[M] / 2 : 0, Oe = x === he ? P[M] : A[M], ce = x === he ? -A[M] : -P[M], L = t.elements.arrow, R = f && L ? st(L) : {
        width: 0,
        height: 0
      }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : sn(), ue = U[F], Ee = U[W], Q = Pe(0, P[M], R[M]), ze = w ? P[M] / 2 - ie - Q - ue - O.mainAxis : Oe - Q - ue - O.mainAxis, mn = w ? -P[M] / 2 + ie + Q + Ee + O.mainAxis : ce + Q + Ee + O.mainAxis, Ve = t.elements.arrow && Me(t.elements.arrow), hn = Ve ? y === "y" ? Ve.clientTop || 0 : Ve.clientLeft || 0 : 0, dt = (N = k == null ? void 0 : k[y]) != null ? N : 0, gn = h + ze - dt - hn, bn = h + mn - dt, ft = Pe(f ? Be(H, gn) : H, h, f ? fe(J, bn) : J);
      E[y] = ft, T[y] = ft - h;
    }
    if (i) {
      var pt, yn = y === "x" ? z : V, xn = y === "x" ? Y : Z, le = E[C], _e = C === "y" ? "height" : "width", vt = le + g[yn], mt = le - g[xn], Ue = [z, V].indexOf(b) !== -1, ht = (pt = k == null ? void 0 : k[C]) != null ? pt : 0, gt = Ue ? vt : le - P[_e] - A[_e] - ht + O.altAxis, bt = Ue ? le + P[_e] + A[_e] - ht - O.altAxis : mt, yt = f && Ue ? ao(gt, le, bt) : Pe(f ? gt : vt, le, f ? bt : mt);
      E[C] = yt, T[C] = yt - le;
    }
    t.modifiersData[r] = T;
  }
}
const Ro = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Lo,
  requiresIfExists: ["offset"]
};
function Bo(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fo(e) {
  return e === G(e) || !K(e) ? ct(e) : Bo(e);
}
function Wo(e) {
  var t = e.getBoundingClientRect(), n = ge(t.width) / e.offsetWidth || 1, r = ge(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function $o(e, t, n) {
  n === void 0 && (n = !1);
  var r = K(t), o = K(t) && Wo(t), a = se(t), s = be(e, o, n), i = {
    scrollLeft: 0,
    scrollTop: 0
  }, u = {
    x: 0,
    y: 0
  };
  return (r || !r && !n) && ((te(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  lt(a)) && (i = Fo(t)), K(t) ? (u = be(t, !0), u.x += t.clientLeft, u.y += t.clientTop) : a && (u.x = ut(a))), {
    x: s.left + i.scrollLeft - u.x,
    y: s.top + i.scrollTop - u.y,
    width: s.width,
    height: s.height
  };
}
function Ho(e) {
  var t = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    n.add(a.name);
    var s = [].concat(a.requires || [], a.requiresIfExists || []);
    s.forEach(function(i) {
      if (!n.has(i)) {
        var u = t.get(i);
        u && o(u);
      }
    }), r.push(a);
  }
  return e.forEach(function(a) {
    n.has(a.name) || o(a);
  }), r;
}
function zo(e) {
  var t = Ho(e);
  return Qr.reduce(function(n, r) {
    return n.concat(t.filter(function(o) {
      return o.phase === r;
    }));
  }, []);
}
function Vo(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(n) {
      Promise.resolve().then(function() {
        t = void 0, n(e());
      });
    })), t;
  };
}
function Uo(e) {
  var t = e.reduce(function(n, r) {
    var o = n[r.name];
    return n[r.name] = o ? Object.assign({}, o, r, {
      options: Object.assign({}, o.options, r.options),
      data: Object.assign({}, o.data, r.data)
    }) : r, n;
  }, {});
  return Object.keys(t).map(function(n) {
    return t[n];
  });
}
var Tt = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function jt() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function qo(e) {
  e === void 0 && (e = {});
  var t = e, n = t.defaultModifiers, r = n === void 0 ? [] : n, o = t.defaultOptions, a = o === void 0 ? Tt : o;
  return function(i, u, l) {
    l === void 0 && (l = a);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Tt, a),
      modifiersData: {},
      elements: {
        reference: i,
        popper: u
      },
      attributes: {},
      styles: {}
    }, d = [], m = !1, f = {
      state: c,
      setOptions: function(b) {
        var x = typeof b == "function" ? b(c.options) : b;
        v(), c.options = Object.assign({}, a, c.options, x), c.scrollParents = {
          reference: ve(i) ? Se(i) : i.contextElement ? Se(i.contextElement) : [],
          popper: Se(u)
        };
        var w = zo(Uo([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = w.filter(function(y) {
          return y.enabled;
        }), p(), f.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!m) {
          var b = c.elements, x = b.reference, w = b.popper;
          if (jt(x, w)) {
            c.rects = {
              reference: $o(x, Me(w), c.options.strategy === "fixed"),
              popper: st(w)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(O) {
              return c.modifiersData[O.name] = Object.assign({}, O.data);
            });
            for (var y = 0; y < c.orderedModifiers.length; y++) {
              if (c.reset === !0) {
                c.reset = !1, y = -1;
                continue;
              }
              var C = c.orderedModifiers[y], E = C.fn, P = C.options, A = P === void 0 ? {} : P, D = C.name;
              typeof E == "function" && (c = E({
                state: c,
                options: A,
                name: D,
                instance: f
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Vo(function() {
        return new Promise(function(g) {
          f.forceUpdate(), g(c);
        });
      }),
      destroy: function() {
        v(), m = !0;
      }
    };
    if (!jt(i, u))
      return f;
    f.setOptions(l).then(function(g) {
      !m && l.onFirstUpdate && l.onFirstUpdate(g);
    });
    function p() {
      c.orderedModifiers.forEach(function(g) {
        var b = g.name, x = g.options, w = x === void 0 ? {} : x, y = g.effect;
        if (typeof y == "function") {
          var C = y({
            state: c,
            name: b,
            instance: f,
            options: w
          }), E = function() {
          };
          d.push(C || E);
        }
      });
    }
    function v() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return f;
  };
}
var Go = [ho, To, vo, no, Mo, Io, Ro, uo, Do], Ko = /* @__PURE__ */ qo({
  defaultModifiers: Go
});
function Xo(e = {}) {
  const {
    enabled: t = !0,
    modifiers: n,
    placement: r = "bottom",
    strategy: o = "absolute",
    arrowPadding: a = 8,
    eventListeners: s = !0,
    offset: i,
    gutter: u = 8,
    flip: l = !0,
    boundary: c = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: m,
    direction: f = "ltr"
  } = e, p = B(null), v = B(null), g = B(null), b = $r(r, f), x = B(() => {
  }), w = I(() => {
    var O;
    !t || !p.current || !v.current || ((O = x.current) == null || O.call(x), g.current = Ko(p.current, v.current, {
      placement: b,
      modifiers: [
        Br,
        jr,
        Tr,
        {
          ..._r,
          enabled: !!m
        },
        {
          name: "eventListeners",
          ...Mr(s)
        },
        {
          name: "arrow",
          options: { padding: a }
        },
        {
          name: "offset",
          options: {
            offset: i ?? [0, u]
          }
        },
        {
          name: "flip",
          enabled: !!l,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: c }
        },
        ...n ?? []
      ],
      strategy: o
    }), g.current.forceUpdate(), x.current = g.current.destroy);
  }, [
    b,
    t,
    n,
    m,
    s,
    a,
    i,
    u,
    l,
    d,
    c,
    o
  ]);
  oe(() => () => {
    var O;
    !p.current && !v.current && ((O = g.current) == null || O.destroy(), g.current = null);
  }, []);
  const y = I(
    (O) => {
      p.current = O, w();
    },
    [w]
  ), C = I(
    (O = {}, k = null) => ({
      ...O,
      ref: ae(y, k)
    }),
    [y]
  ), E = I(
    (O) => {
      v.current = O, w();
    },
    [w]
  ), P = I(
    (O = {}, k = null) => ({
      ...O,
      ref: ae(E, k),
      style: {
        ...O.style,
        position: o,
        minWidth: m ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, E, m]
  ), A = I((O = {}, k = null) => {
    const { size: T, shadowColor: N, bg: F, style: W, ...M } = O;
    return {
      ...M,
      ref: k,
      "data-popper-arrow": "",
      style: Yo(O)
    };
  }, []), D = I(
    (O = {}, k = null) => ({
      ...O,
      ref: k,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var O;
      (O = g.current) == null || O.update();
    },
    forceUpdate() {
      var O;
      (O = g.current) == null || O.forceUpdate();
    },
    transformOrigin: q.transformOrigin.varRef,
    referenceRef: y,
    popperRef: E,
    getPopperProps: P,
    getArrowProps: A,
    getArrowInnerProps: D,
    getReferenceProps: C
  };
}
function Yo(e) {
  const { size: t, shadowColor: n, bg: r, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), n && (a["--popper-arrow-shadow-color"] = n), r && (a["--popper-arrow-bg"] = r), a;
}
function Zo(e = {}) {
  const {
    onClose: t,
    onOpen: n,
    isOpen: r,
    id: o
  } = e, a = de(n), s = de(t), [i, u] = X(e.defaultIsOpen || !1), l = r !== void 0 ? r : i, c = r !== void 0, d = tt(), m = o ?? `disclosure-${d}`, f = I(() => {
    c || u(!1), s == null || s();
  }, [c, s]), p = I(() => {
    c || u(!0), a == null || a();
  }, [c, a]), v = I(() => {
    l ? f() : p();
  }, [l, p, f]);
  function g(x = {}) {
    return {
      ...x,
      "aria-expanded": l,
      "aria-controls": m,
      onClick(w) {
        var y;
        (y = x.onClick) == null || y.call(x, w), v();
      }
    };
  }
  function b(x = {}) {
    return {
      ...x,
      hidden: !l,
      id: m
    };
  }
  return {
    isOpen: l,
    onOpen: p,
    onClose: f,
    onToggle: v,
    isControlled: c,
    getButtonProps: g,
    getDisclosureProps: b
  };
}
function Jo(e) {
  const { ref: t, handler: n, enabled: r = !0 } = e, o = de(n), s = B({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  oe(() => {
    if (!r)
      return;
    const i = (d) => {
      Ge(d, t) && (s.isPointerDown = !0);
    }, u = (d) => {
      if (s.ignoreEmulatedMouseEvents) {
        s.ignoreEmulatedMouseEvents = !1;
        return;
      }
      s.isPointerDown && n && Ge(d, t) && (s.isPointerDown = !1, o(d));
    }, l = (d) => {
      s.ignoreEmulatedMouseEvents = !0, n && s.isPointerDown && Ge(d, t) && (s.isPointerDown = !1, o(d));
    }, c = fn(t.current);
    return c.addEventListener("mousedown", i, !0), c.addEventListener("mouseup", u, !0), c.addEventListener("touchstart", i, !0), c.addEventListener("touchend", l, !0), () => {
      c.removeEventListener("mousedown", i, !0), c.removeEventListener("mouseup", u, !0), c.removeEventListener("touchstart", i, !0), c.removeEventListener("touchend", l, !0);
    };
  }, [n, t, o, s, r]);
}
function Ge(e, t) {
  var n;
  const r = e.target;
  return r && !fn(r).contains(r) ? !1 : !((n = t.current) != null && n.contains(r));
}
function fn(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Qo(e) {
  const { isOpen: t, ref: n } = e, [r, o] = X(t), [a, s] = X(!1);
  return oe(() => {
    a || (o(t), s(!0));
  }, [t, a, r]), Gt(
    () => n.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !r),
    onComplete() {
      var u;
      const l = Qn(n.current), c = new l.CustomEvent("animationend", { bubbles: !0 });
      (u = n.current) == null || u.dispatchEvent(c);
    }
  };
}
function ea(e) {
  const { wasSelected: t, enabled: n, isSelected: r, mode: o = "unmount" } = e;
  return !!(!n || r || o === "keepMounted" && t);
}
var [
  ta,
  na,
  ra,
  oa
] = Wn(), [aa, we] = ke({
  strict: !1,
  name: "MenuContext"
});
function sa(e, ...t) {
  const n = tt(), r = e || n;
  return pe(() => t.map((o) => `${o}-${r}`), [r, t]);
}
function pn(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function Lt(e) {
  return pn(e).activeElement === e;
}
function ia(e = {}) {
  const {
    id: t,
    closeOnSelect: n = !0,
    closeOnBlur: r = !0,
    initialFocusRef: o,
    autoSelect: a = !0,
    isLazy: s,
    isOpen: i,
    defaultIsOpen: u,
    onClose: l,
    onOpen: c,
    placement: d = "bottom-start",
    lazyBehavior: m = "unmount",
    direction: f,
    computePositionOnMount: p = !1,
    ...v
  } = e, g = B(null), b = B(null), x = ra(), w = I(() => {
    requestAnimationFrame(() => {
      var L;
      (L = g.current) == null || L.focus({ preventScroll: !1 });
    });
  }, []), y = I(() => {
    const L = setTimeout(() => {
      var R;
      if (o)
        (R = o.current) == null || R.focus();
      else {
        const U = x.firstEnabled();
        U && N(U.index);
      }
    });
    H.current.add(L);
  }, [x, o]), C = I(() => {
    const L = setTimeout(() => {
      const R = x.lastEnabled();
      R && N(R.index);
    });
    H.current.add(L);
  }, [x]), E = I(() => {
    c == null || c(), a ? y() : w();
  }, [a, y, w, c]), { isOpen: P, onOpen: A, onClose: D, onToggle: O } = Zo({
    isOpen: i,
    defaultIsOpen: u,
    onClose: l,
    onOpen: E
  });
  Jo({
    enabled: P && r,
    ref: g,
    handler: (L) => {
      var R;
      (R = b.current) != null && R.contains(L.target) || D();
    }
  });
  const k = Xo({
    ...v,
    enabled: P || p,
    placement: d,
    direction: f
  }), [T, N] = X(-1);
  We(() => {
    P || N(-1);
  }, [P]), Sr(g, {
    focusRef: b,
    visible: P,
    shouldFocus: !0
  });
  const F = Qo({ isOpen: P, ref: g }), [W, M] = sa(t, "menu-button", "menu-list"), h = I(() => {
    A(), w();
  }, [A, w]), H = B(/* @__PURE__ */ new Set([]));
  va(() => {
    H.current.forEach((L) => clearTimeout(L)), H.current.clear();
  });
  const J = I(() => {
    A(), y();
  }, [y, A]), ie = I(() => {
    A(), C();
  }, [A, C]), Oe = I(() => {
    var L, R;
    const U = pn(g.current), ue = (L = g.current) == null ? void 0 : L.contains(U.activeElement);
    if (!(P && !ue))
      return;
    const Q = (R = x.item(T)) == null ? void 0 : R.node;
    Q == null || Q.focus();
  }, [P, T, x]), ce = B(null);
  return {
    openAndFocusMenu: h,
    openAndFocusFirstItem: J,
    openAndFocusLastItem: ie,
    onTransitionEnd: Oe,
    unstable__animationState: F,
    descendants: x,
    popper: k,
    buttonId: W,
    menuId: M,
    forceUpdate: k.forceUpdate,
    orientation: "vertical",
    isOpen: P,
    onToggle: O,
    onOpen: A,
    onClose: D,
    menuRef: g,
    buttonRef: b,
    focusedIndex: T,
    closeOnSelect: n,
    closeOnBlur: r,
    autoSelect: a,
    setFocusedIndex: N,
    isLazy: s,
    lazyBehavior: m,
    initialFocusRef: o,
    rafId: ce
  };
}
function ca(e = {}, t = null) {
  const n = we(), { onToggle: r, popper: o, openAndFocusFirstItem: a, openAndFocusLastItem: s } = n, i = I(
    (u) => {
      const l = u.key, d = {
        Enter: a,
        ArrowDown: a,
        ArrowUp: s
      }[l];
      d && (u.preventDefault(), u.stopPropagation(), d(u));
    },
    [a, s]
  );
  return {
    ...e,
    ref: ae(n.buttonRef, t, o.referenceRef),
    id: n.buttonId,
    "data-active": Ie(n.isOpen),
    "aria-expanded": n.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": n.menuId,
    onClick: Le(e.onClick, r),
    onKeyDown: Le(e.onKeyDown, i)
  };
}
function et(e) {
  var t;
  return fa(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function ua(e = {}, t = null) {
  const n = we();
  if (!n)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
    focusedIndex: r,
    setFocusedIndex: o,
    menuRef: a,
    isOpen: s,
    onClose: i,
    menuId: u,
    isLazy: l,
    lazyBehavior: c,
    unstable__animationState: d
  } = n, m = na(), f = wr({
    preventDefault: (b) => b.key !== " " && et(b.target)
  }), p = I(
    (b) => {
      if (!b.currentTarget.contains(b.target))
        return;
      const x = b.key, y = {
        Tab: (E) => E.preventDefault(),
        Escape: i,
        ArrowDown: () => {
          const E = m.nextEnabled(r);
          E && o(E.index);
        },
        ArrowUp: () => {
          const E = m.prevEnabled(r);
          E && o(E.index);
        }
      }[x];
      if (y) {
        b.preventDefault(), y(b);
        return;
      }
      const C = f((E) => {
        const P = Or(
          m.values(),
          E,
          (A) => {
            var D, O;
            return (O = (D = A == null ? void 0 : A.node) == null ? void 0 : D.textContent) != null ? O : "";
          },
          m.item(r)
        );
        if (P) {
          const A = m.indexOf(P.node);
          o(A);
        }
      });
      et(b.target) && C(b);
    },
    [
      m,
      r,
      f,
      i,
      o
    ]
  ), v = B(!1);
  s && (v.current = !0);
  const g = ea({
    wasSelected: v.current,
    enabled: l,
    mode: c,
    isSelected: d.present
  });
  return {
    ...e,
    ref: ae(a, t),
    children: g ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: u,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: Le(e.onKeyDown, p)
  };
}
function la(e = {}) {
  const { popper: t, isOpen: n } = we();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: n ? "visible" : "hidden",
      ...e.style
    }
  });
}
function da(e = {}, t = null) {
  const {
    onMouseEnter: n,
    onMouseMove: r,
    onMouseLeave: o,
    onClick: a,
    onFocus: s,
    isDisabled: i,
    isFocusable: u,
    closeOnSelect: l,
    type: c,
    ...d
  } = e, m = we(), {
    setFocusedIndex: f,
    focusedIndex: p,
    closeOnSelect: v,
    onClose: g,
    menuRef: b,
    isOpen: x,
    menuId: w,
    rafId: y
  } = m, C = B(null), E = `${w}-menuitem-${tt()}`, { index: P, register: A } = oa({
    disabled: i && !u
  }), D = I(
    (h) => {
      n == null || n(h), !i && f(P);
    },
    [f, P, i, n]
  ), O = I(
    (h) => {
      r == null || r(h), C.current && !Lt(C.current) && D(h);
    },
    [D, r]
  ), k = I(
    (h) => {
      o == null || o(h), !i && f(-1);
    },
    [f, i, o]
  ), T = I(
    (h) => {
      a == null || a(h), et(h.currentTarget) && (l ?? v) && g();
    },
    [g, a, v, l]
  ), N = I(
    (h) => {
      s == null || s(h), f(P);
    },
    [f, s, P]
  ), F = P === p, W = i && !u;
  We(() => {
    x && (F && !W && C.current ? (y.current && cancelAnimationFrame(y.current), y.current = requestAnimationFrame(() => {
      var h;
      (h = C.current) == null || h.focus(), y.current = null;
    })) : b.current && !Lt(b.current) && b.current.focus({ preventScroll: !0 }));
  }, [F, W, b, x]);
  const M = Cr({
    onClick: T,
    onFocus: N,
    onMouseEnter: D,
    onMouseMove: O,
    onMouseLeave: k,
    ref: ae(A, C, t),
    isDisabled: i,
    isFocusable: u
  });
  return {
    ...d,
    ...M,
    type: c ?? M.type,
    id: E,
    role: "menuitem",
    tabIndex: F ? 0 : -1
  };
}
function Ia(e = {}, t = null) {
  const { type: n = "radio", isChecked: r, ...o } = e;
  return {
    ...da(o, t),
    role: `menuitem${n}`,
    "aria-checked": r
  };
}
function Aa(e = {}) {
  const {
    children: t,
    type: n = "radio",
    value: r,
    defaultValue: o,
    onChange: a,
    ...s
  } = e, u = n === "radio" ? "" : [], [l, c] = $n({
    defaultValue: o ?? u,
    value: r,
    onChange: a
  }), d = I(
    (p) => {
      if (n === "radio" && typeof l == "string" && c(p), n === "checkbox" && Array.isArray(l)) {
        const v = l.includes(p) ? l.filter((g) => g !== p) : l.concat(p);
        c(v);
      }
    },
    [l, c, n]
  ), f = qt(t).map((p) => {
    if (p.type.id !== "MenuItemOption")
      return p;
    const v = (b) => {
      var x, w;
      d(p.props.value), (w = (x = p.props).onClick) == null || w.call(x, b);
    }, g = n === "radio" ? p.props.value === l : l.includes(p.props.value);
    return $e(p, {
      type: n,
      onClick: v,
      isChecked: g
    });
  });
  return {
    ...s,
    children: f
  };
}
function Da() {
  const { isOpen: e, onClose: t } = we();
  return { isOpen: e, onClose: t };
}
function fa(e) {
  var t;
  if (!pa(e))
    return !1;
  const n = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof n.HTMLElement;
}
function pa(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function va(e, t = []) {
  return oe(
    () => () => e(),
    t
  );
}
var [ma, vn] = ke({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), ha = (e) => {
  const { children: t } = e, n = Bt("Menu", e), r = xe(e), { direction: o } = Ft(), { descendants: a, ...s } = ia({ ...r, direction: o }), i = pe(() => s, [s]), { isOpen: u, onClose: l, forceUpdate: c } = i;
  return /* @__PURE__ */ S.jsx(ta, { value: a, children: /* @__PURE__ */ S.jsx(aa, { value: i, children: /* @__PURE__ */ S.jsx(ma, { value: n, children: Cn(t, { isOpen: u, onClose: l, forceUpdate: c }) }) }) });
};
ha.displayName = "Menu";
var ga = {
  enter: {
    visibility: "visible",
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    transitionEnd: {
      visibility: "hidden"
    },
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.1,
      easings: "easeOut"
    }
  }
}, ba = j(Pn.div), ya = $(function(t, n) {
  var r, o;
  const { rootProps: a, motionProps: s, ...i } = t, {
    isOpen: u,
    onTransitionEnd: l,
    unstable__animationState: c
  } = we(), d = ua(i, n), m = la(a), f = vn();
  return /* @__PURE__ */ S.jsx(
    j.div,
    {
      ...m,
      __css: { zIndex: (o = t.zIndex) != null ? o : (r = f.list) == null ? void 0 : r.zIndex },
      children: /* @__PURE__ */ S.jsx(
        ba,
        {
          variants: ga,
          initial: !1,
          animate: u ? "enter" : "exit",
          __css: { outline: 0, ...f.list },
          ...s,
          className: ne("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: l,
          onAnimationComplete: Sn(
            c.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
ya.displayName = "MenuList";
var xa = $((e, t) => {
  const n = vn();
  return /* @__PURE__ */ S.jsx(
    j.button,
    {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...n.button
      }
    }
  );
}), wa = $(
  (e, t) => {
    const { children: n, as: r, ...o } = e, a = ca(o, t), s = r || xa;
    return /* @__PURE__ */ S.jsx(
      s,
      {
        ...a,
        className: ne("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ S.jsx(
          j.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
wa.displayName = "MenuButton";
export {
  na as $,
  Xn as A,
  Ca as B,
  Ze as C,
  Yn as D,
  Vt as E,
  yr as F,
  zt as G,
  en as H,
  Gn as I,
  gr as J,
  br as K,
  rt as L,
  tn as M,
  Xe as N,
  ha as O,
  wa as P,
  ta as Q,
  ya as R,
  lr as S,
  vr as T,
  aa as U,
  hr as V,
  ia as W,
  ca as X,
  we as Y,
  oa as Z,
  ra as _,
  zn as a,
  ua as a0,
  la as a1,
  Da as a2,
  Kn as b,
  Wn as c,
  Jn as d,
  Gt as e,
  cr as f,
  qt as g,
  kn as h,
  Xt as i,
  nt as j,
  ur as k,
  Pa as l,
  ae as m,
  vn as n,
  da as o,
  Aa as p,
  Ia as q,
  Zo as r,
  Xo as s,
  Qo as t,
  $n as u,
  Sr as v,
  Sa as w,
  ea as x,
  q as y,
  Cr as z
};
