import { j as l, aC as B, c as z, v as _, C as U, m as _e, i as ze, ap as Ie, aD as Ne, T as Re, aE as Le, E as De, a0 as Oe, l as Be, aF as re, aG as Fe, aH as qe, aI as Ve, aJ as Ue, aK as Ze, aL as Ge, x as J, h as We, a as M, A as V, f as I, b as N, r as se, S as He, o as ae, k as Ke, az as Ye, aw as Je } from "./chunk-NO6MRLPK-0daf97be.js";
import * as x from "react";
import { useState as P, useRef as j, useEffect as $, useMemo as b, useCallback as O, createContext as ie, useContext as Z, useReducer as Qe, useId as le, useInsertionEffect as Xe, cloneElement as et, Children as tt, isValidElement as nt, memo as ot, useSyncExternalStore as rt } from "react";
import { createPortal as ce } from "react-dom";
var de = String.raw, ue = de`
  :root,
  :host {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root,
    :host {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root,
    :host {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root,
    :host {
      --chakra-vh: 100dvh;
    }
  }
`, st = () => /* @__PURE__ */ l.jsx(B, { styles: ue }), at = ({ scope: e = "" }) => /* @__PURE__ */ l.jsx(
  B,
  {
    styles: de`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        margin: 0;
        font-feature-settings: "kern";
      }

      ${e} :where(*, *::before, *::after) {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
        word-wrap: break-word;
      }

      main {
        display: block;
      }

      ${e} hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      ${e} :where(pre, code, kbd,samp) {
        font-family: SFMono-Regular, Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      ${e} a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      ${e} abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      ${e} :where(b, strong) {
        font-weight: bold;
      }

      ${e} small {
        font-size: 80%;
      }

      ${e} :where(sub,sup) {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      ${e} sub {
        bottom: -0.25em;
      }

      ${e} sup {
        top: -0.5em;
      }

      ${e} img {
        border-style: none;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      ${e} :where(button, input) {
        overflow: visible;
      }

      ${e} :where(button, select) {
        text-transform: none;
      }

      ${e} :where(
          button::-moz-focus-inner,
          [type="button"]::-moz-focus-inner,
          [type="reset"]::-moz-focus-inner,
          [type="submit"]::-moz-focus-inner
        ) {
        border-style: none;
        padding: 0;
      }

      ${e} fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      ${e} legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      ${e} progress {
        vertical-align: baseline;
      }

      ${e} textarea {
        overflow: auto;
      }

      ${e} :where([type="checkbox"], [type="radio"]) {
        box-sizing: border-box;
        padding: 0;
      }

      ${e} input[type="number"]::-webkit-inner-spin-button,
      ${e} input[type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      ${e} input[type="number"] {
        -moz-appearance: textfield;
      }

      ${e} input[type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      ${e} input[type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ${e} ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      ${e} details {
        display: block;
      }

      ${e} summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      ${e} :where(
          blockquote,
          dl,
          dd,
          h1,
          h2,
          h3,
          h4,
          h5,
          h6,
          hr,
          figure,
          p,
          pre
        ) {
        margin: 0;
      }

      ${e} button {
        background: transparent;
        padding: 0;
      }

      ${e} fieldset {
        margin: 0;
        padding: 0;
      }

      ${e} :where(ol, ul) {
        margin: 0;
        padding: 0;
      }

      ${e} textarea {
        resize: vertical;
      }

      ${e} :where(button, [role="button"]) {
        cursor: pointer;
      }

      ${e} button::-moz-focus-inner {
        border: 0 !important;
      }

      ${e} table {
        border-collapse: collapse;
      }

      ${e} :where(h1, h2, h3, h4, h5, h6) {
        font-size: inherit;
        font-weight: inherit;
      }

      ${e} :where(button, input, optgroup, select, textarea) {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      ${e} :where(img, svg, video, canvas, audio, iframe, embed, object) {
        display: block;
      }

      ${e} :where(img, video) {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible]
        :focus:not([data-focus-visible-added]):not(
          [data-focus-visible-disabled]
        ) {
        outline: none;
        box-shadow: none;
      }

      ${e} select::-ms-expand {
        display: none;
      }

      ${ue}
    `
  }
), [it, lt] = z({
  strict: !1,
  name: "PortalManagerContext"
});
function me(e) {
  const { children: t, zIndex: o } = e;
  return /* @__PURE__ */ l.jsx(it, { value: { zIndex: o }, children: t });
}
me.displayName = "PortalManager";
var [he, ct] = z({
  strict: !1,
  name: "PortalContext"
}), G = "chakra-portal", dt = ".chakra-portal", ut = (e) => /* @__PURE__ */ l.jsx(
  "div",
  {
    className: "chakra-portal-zIndex",
    style: {
      position: "absolute",
      zIndex: e.zIndex,
      top: 0,
      left: 0,
      right: 0
    },
    children: e.children
  }
), mt = (e) => {
  const { appendToParentPortal: t, children: o } = e, [n, r] = P(null), s = j(null), [, a] = P({});
  $(() => a({}), []);
  const i = ct(), c = lt();
  _(() => {
    if (!n)
      return;
    const d = n.ownerDocument, m = t ? i ?? d.body : d.body;
    if (!m)
      return;
    s.current = d.createElement("div"), s.current.className = G, m.appendChild(s.current), a({});
    const f = s.current;
    return () => {
      m.contains(f) && m.removeChild(f);
    };
  }, [n]);
  const u = c != null && c.zIndex ? /* @__PURE__ */ l.jsx(ut, { zIndex: c == null ? void 0 : c.zIndex, children: o }) : o;
  return s.current ? ce(
    /* @__PURE__ */ l.jsx(he, { value: s.current, children: u }),
    s.current
  ) : /* @__PURE__ */ l.jsx(
    "span",
    {
      ref: (d) => {
        d && r(d);
      }
    }
  );
}, ht = (e) => {
  const { children: t, containerRef: o, appendToParentPortal: n } = e, r = o.current, s = r ?? (typeof window < "u" ? document.body : void 0), a = b(() => {
    const c = r == null ? void 0 : r.ownerDocument.createElement("div");
    return c && (c.className = G), c;
  }, [r]), [, i] = P({});
  return _(() => i({}), []), _(() => {
    if (!(!a || !s))
      return s.appendChild(a), () => {
        s.removeChild(a);
      };
  }, [a, s]), s && a ? ce(
    /* @__PURE__ */ l.jsx(he, { value: n ? a : null, children: t }),
    a
  ) : null;
};
function F(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: o, ...n } = t;
  return o ? /* @__PURE__ */ l.jsx(ht, { containerRef: o, ...n }) : /* @__PURE__ */ l.jsx(mt, { ...n });
}
F.className = G;
F.selector = dt;
F.displayName = "Portal";
var D = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function ft(e = {}) {
  const { preventTransition: t = !0 } = e, o = {
    setDataset: (n) => {
      const r = t ? o.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, r == null || r();
    },
    setClassName(n) {
      document.body.classList.add(n ? D.dark : D.light), document.body.classList.remove(n ? D.light : D.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(n) {
      var r;
      return ((r = o.query().matches) != null ? r : n === "dark") ? "dark" : "light";
    },
    addListener(n) {
      const r = o.query(), s = (a) => {
        n(a.matches ? "dark" : "light");
      };
      return typeof r.addListener == "function" ? r.addListener(s) : r.addEventListener("change", s), () => {
        typeof r.removeListener == "function" ? r.removeListener(s) : r.removeEventListener("change", s);
      };
    },
    preventTransition() {
      const n = document.createElement("style");
      return n.appendChild(
        document.createTextNode(
          "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}"
        )
      ), document.head.appendChild(n), () => {
        window.getComputedStyle(document.body), requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            document.head.removeChild(n);
          });
        });
      };
    }
  };
  return o;
}
var W = "chakra-ui-color-mode";
function pt(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let o;
      try {
        o = localStorage.getItem(e) || t;
      } catch {
      }
      return o || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var vt = pt(W);
function Q(e, t) {
  const o = e.match(new RegExp(`(^| )${t}=([^;]+)`));
  return o == null ? void 0 : o[2];
}
function fe(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get(o) {
      return t ? Q(t, e) : globalThis != null && globalThis.document && Q(document.cookie, e) || o;
    },
    set(o) {
      document.cookie = `${e}=${o}; max-age=31536000; path=/`;
    }
  };
}
var Xt = fe(W), en = (e) => fe(W, e), A = () => {
};
function X(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function pe(e) {
  const {
    value: t,
    children: o,
    options: {
      useSystemColorMode: n,
      initialColorMode: r,
      disableTransitionOnChange: s
    } = {},
    colorModeManager: a = vt
  } = e, i = r === "dark" ? "dark" : "light", [c, u] = P(
    () => X(a, i)
  ), [d, m] = P(
    () => X(a)
  ), { getSystemTheme: f, setClassName: p, setDataset: y, addListener: C } = b(
    () => ft({ preventTransition: s }),
    [s]
  ), w = r === "system" && !c ? d : c, g = O(
    (k) => {
      const T = k === "system" ? f() : k;
      u(T), p(T === "dark"), y(T), a.set(T);
    },
    [a, f, p, y]
  );
  _(() => {
    r === "system" && m(f());
  }, []), $(() => {
    const k = a.get();
    if (k) {
      g(k);
      return;
    }
    if (r === "system") {
      g("system");
      return;
    }
    g(i);
  }, [a, i, r, g]);
  const h = O(() => {
    g(w === "dark" ? "light" : "dark");
  }, [w, g]);
  $(() => {
    if (n)
      return C(g);
  }, [n, C, g]);
  const v = b(
    () => ({
      colorMode: t ?? w,
      toggleColorMode: t ? A : h,
      setColorMode: t ? A : g,
      forced: t !== void 0
    }),
    [w, h, g, t]
  );
  return /* @__PURE__ */ l.jsx(U.Provider, { value: v, children: o });
}
pe.displayName = "ColorModeProvider";
function gt(e) {
  const t = b(
    () => ({
      colorMode: "dark",
      toggleColorMode: A,
      setColorMode: A,
      forced: !0
    }),
    []
  );
  return /* @__PURE__ */ l.jsx(U.Provider, { value: t, ...e });
}
gt.displayName = "DarkMode";
function xt(e) {
  const t = b(
    () => ({
      colorMode: "light",
      toggleColorMode: A,
      setColorMode: A,
      forced: !0
    }),
    []
  );
  return /* @__PURE__ */ l.jsx(U.Provider, { value: t, ...e });
}
xt.displayName = "LightMode";
function tn({
  colorScheme: e,
  components: t
}) {
  return (o) => {
    let n = Object.keys(o.components || {});
    return Array.isArray(t) ? n = t : ze(t) && (n = Object.keys(t)), _e(o, {
      components: Object.fromEntries(
        n.map((r) => [r, {
          defaultProps: {
            colorScheme: e
          }
        }])
      )
    });
  };
}
function ve(e = {}) {
  const {
    strict: t = !0,
    errorMessage: o = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, r = ie(void 0);
  r.displayName = n;
  function s() {
    var a;
    const i = Z(r);
    if (!i && t) {
      const c = new Error(o);
      throw c.name = "ContextError", (a = Error.captureStackTrace) == null || a.call(Error, c, s), c;
    }
    return i;
  }
  return [
    r.Provider,
    s,
    r
  ];
}
function bt(e) {
  const { cssVarsRoot: t, theme: o, children: n } = e, r = b(() => Ie(o), [o]);
  return /* @__PURE__ */ l.jsxs(Ne, { theme: r, children: [
    /* @__PURE__ */ l.jsx(yt, { root: t }),
    n
  ] });
}
function yt({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ l.jsx(B, { styles: (o) => ({ [t]: o.__cssVars }) });
}
var [nn, on] = ve({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function rn(e) {
  return ve({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `
  });
}
function Ct() {
  const { colorMode: e } = Re();
  return /* @__PURE__ */ l.jsx(
    B,
    {
      styles: (t) => {
        const o = Le(t, "styles.global"), n = De(o, { theme: t, colorMode: e });
        return n ? Oe(n)(t) : void 0;
      }
    }
  );
}
var H = ie({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
H.displayName = "EnvironmentContext";
function sn({ defer: e } = {}) {
  const [, t] = Qe((o) => o + 1, 0);
  return _(() => {
    e && t();
  }, [e]), Z(H);
}
function ge(e) {
  const { children: t, environment: o, disabled: n } = e, r = j(null), s = b(() => o || {
    getDocument: () => {
      var i, c;
      return (c = (i = r.current) == null ? void 0 : i.ownerDocument) != null ? c : document;
    },
    getWindow: () => {
      var i, c;
      return (c = (i = r.current) == null ? void 0 : i.ownerDocument.defaultView) != null ? c : window;
    }
  }, [o]), a = !n || !o;
  return /* @__PURE__ */ l.jsxs(H.Provider, { value: s, children: [
    t,
    a && /* @__PURE__ */ l.jsx("span", { id: "__chakra_env", hidden: !0, ref: r })
  ] });
}
ge.displayName = "EnvironmentProvider";
var wt = (e) => {
  const {
    children: t,
    colorModeManager: o,
    portalZIndex: n,
    resetScope: r,
    resetCSS: s = !0,
    theme: a = {},
    environment: i,
    cssVarsRoot: c,
    disableEnvironment: u,
    disableGlobalStyle: d
  } = e, m = /* @__PURE__ */ l.jsx(
    ge,
    {
      environment: i,
      disabled: u,
      children: t
    }
  );
  return /* @__PURE__ */ l.jsx(bt, { theme: a, cssVarsRoot: c, children: /* @__PURE__ */ l.jsxs(
    pe,
    {
      colorModeManager: o,
      options: a.config,
      children: [
        s ? /* @__PURE__ */ l.jsx(at, { scope: r }) : /* @__PURE__ */ l.jsx(st, {}),
        !d && /* @__PURE__ */ l.jsx(Ct, {}),
        n ? /* @__PURE__ */ l.jsx(me, { zIndex: n, children: m }) : m
      ]
    }
  ) });
}, St = (e, t) => e.find((o) => o.id === t);
function ee(e, t) {
  const o = xe(e, t), n = o ? e[o].findIndex((r) => r.id === t) : -1;
  return {
    position: o,
    index: n
  };
}
function xe(e, t) {
  for (const [o, n] of Object.entries(e))
    if (St(n, t))
      return o;
}
function kt(e) {
  const t = e.includes("right"), o = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), o && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function jt(e) {
  const o = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, r = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, s = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", a = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: o,
    top: n,
    bottom: r,
    right: s,
    left: a
  };
}
function Mt(e, t) {
  const o = Be(e);
  $(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      o();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, o]);
}
function be() {
  const e = j(!1);
  return re(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Pt() {
  const e = be(), [t, o] = P(0), n = O(() => {
    e.current && o(t + 1);
  }, [t]);
  return [O(() => Fe.postRender(n), [n]), t];
}
class Tt extends x.Component {
  getSnapshotBeforeUpdate(t) {
    const o = this.props.childRef.current;
    if (o && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = o.offsetHeight || 0, n.width = o.offsetWidth || 0, n.top = o.offsetTop, n.left = o.offsetLeft;
    }
    return null;
  }
  /**
   * Required with getSnapshotBeforeUpdate to stop React complaining.
   */
  componentDidUpdate() {
  }
  render() {
    return this.props.children;
  }
}
function Et({ children: e, isPresent: t }) {
  const o = le(), n = j(null), r = j({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return Xe(() => {
    const { width: s, height: a, top: i, left: c } = r.current;
    if (t || !n.current || !s || !a)
      return;
    n.current.dataset.motionPopId = o;
    const u = document.createElement("style");
    return document.head.appendChild(u), u.sheet && u.sheet.insertRule(`
          [data-motion-pop-id="${o}"] {
            position: absolute !important;
            width: ${s}px !important;
            height: ${a}px !important;
            top: ${i}px !important;
            left: ${c}px !important;
          }
        `), () => {
      document.head.removeChild(u);
    };
  }, [t]), x.createElement(Tt, { isPresent: t, childRef: n, sizeRef: r }, x.cloneElement(e, { ref: n }));
}
const q = ({ children: e, initial: t, isPresent: o, onExitComplete: n, custom: r, presenceAffectsLayout: s, mode: a }) => {
  const i = qe($t), c = le(), u = b(
    () => ({
      id: c,
      initial: t,
      isPresent: o,
      custom: r,
      onExitComplete: (d) => {
        i.set(d, !0);
        for (const m of i.values())
          if (!m)
            return;
        n && n();
      },
      register: (d) => (i.set(d, !1), () => i.delete(d))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    s ? void 0 : [o]
  );
  return b(() => {
    i.forEach((d, m) => i.set(m, !1));
  }, [o]), x.useEffect(() => {
    !o && !i.size && n && n();
  }, [o]), a === "popLayout" && (e = x.createElement(Et, { isPresent: o }, e)), x.createElement(Ve.Provider, { value: u }, e);
};
function $t() {
  return /* @__PURE__ */ new Map();
}
function At(e) {
  return $(() => () => e(), []);
}
const E = (e) => e.key || "";
function _t(e, t) {
  e.forEach((o) => {
    const n = E(o);
    t.set(n, o);
  });
}
function zt(e) {
  const t = [];
  return tt.forEach(e, (o) => {
    nt(o) && t.push(o);
  }), t;
}
const It = ({ children: e, custom: t, initial: o = !0, onExitComplete: n, exitBeforeEnter: r, presenceAffectsLayout: s = !0, mode: a = "sync" }) => {
  Ze(!r, "Replace exitBeforeEnter with mode='wait'");
  const i = Z(Ue).forceRender || Pt()[0], c = be(), u = zt(e);
  let d = u;
  const m = j(/* @__PURE__ */ new Map()).current, f = j(d), p = j(/* @__PURE__ */ new Map()).current, y = j(!0);
  if (re(() => {
    y.current = !1, _t(u, p), f.current = d;
  }), At(() => {
    y.current = !0, p.clear(), m.clear();
  }), y.current)
    return x.createElement(x.Fragment, null, d.map((h) => x.createElement(q, { key: E(h), isPresent: !0, initial: o ? void 0 : !1, presenceAffectsLayout: s, mode: a }, h)));
  d = [...d];
  const C = f.current.map(E), w = u.map(E), g = C.length;
  for (let h = 0; h < g; h++) {
    const v = C[h];
    w.indexOf(v) === -1 && !m.has(v) && m.set(v, void 0);
  }
  return a === "wait" && m.size && (d = []), m.forEach((h, v) => {
    if (w.indexOf(v) !== -1)
      return;
    const k = p.get(v);
    if (!k)
      return;
    const T = C.indexOf(v);
    let L = h;
    if (!L) {
      const Ee = () => {
        p.delete(v), m.delete(v);
        const $e = f.current.findIndex((Ae) => Ae.key === v);
        if (f.current.splice($e, 1), !m.size) {
          if (f.current = u, c.current === !1)
            return;
          i(), n && n();
        }
      };
      L = x.createElement(q, { key: E(k), isPresent: !1, onExitComplete: Ee, custom: t, presenceAffectsLayout: s, mode: a }, k), m.set(v, L);
    }
    d.splice(T, 0, L);
  }), d = d.map((h) => {
    const v = h.key;
    return m.has(v) ? h : x.createElement(q, { key: E(h), isPresent: !0, presenceAffectsLayout: s, mode: a }, h);
  }), process.env.NODE_ENV !== "production" && a === "wait" && d.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), x.createElement(x.Fragment, null, m.size ? d : d.map((h) => et(h)));
};
var Nt = {
  initial: (e) => {
    const { position: t } = e, o = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [o]: n * 24
    };
  },
  animate: {
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  exit: {
    opacity: 0,
    scale: 0.85,
    transition: {
      duration: 0.2,
      ease: [0.4, 0, 1, 1]
    }
  }
}, ye = ot((e) => {
  const {
    id: t,
    message: o,
    onCloseComplete: n,
    onRequestRemove: r,
    requestClose: s = !1,
    position: a = "bottom",
    duration: i = 5e3,
    containerStyle: c,
    motionVariants: u = Nt,
    toastSpacing: d = "0.5rem"
  } = e, [m, f] = P(i), p = Ge();
  J(() => {
    p || n == null || n();
  }, [p]), J(() => {
    f(i);
  }, [i]);
  const y = () => f(null), C = () => f(i), w = () => {
    p && r();
  };
  $(() => {
    p && s && r();
  }, [p, s, r]), Mt(w, m);
  const g = b(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: d,
      ...c
    }),
    [c, d]
  ), h = b(() => kt(a), [a]);
  return /* @__PURE__ */ l.jsx(
    We.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: u,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: y,
      onHoverEnd: C,
      custom: { position: a },
      style: h,
      children: /* @__PURE__ */ l.jsx(
        M.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: g,
          children: V(o, { id: t, onClose: w })
        }
      )
    }
  );
});
ye.displayName = "ToastComponent";
function Rt(e, t) {
  var o;
  const n = e ?? "bottom", s = {
    "top-start": { ltr: "top-left", rtl: "top-right" },
    "top-end": { ltr: "top-right", rtl: "top-left" },
    "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
    "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
  }[n];
  return (o = s == null ? void 0 : s[t]) != null ? o : n;
}
var te = {
  path: /* @__PURE__ */ l.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ l.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ l.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ l.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, R = I((e, t) => {
  const {
    as: o,
    viewBox: n,
    color: r = "currentColor",
    focusable: s = !1,
    children: a,
    className: i,
    __css: c,
    ...u
  } = e, d = N("chakra-icon", i), m = se("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: r,
    ...c,
    ...m
  }, p = {
    ref: t,
    focusable: s,
    className: d,
    __css: f
  }, y = n ?? te.viewBox;
  if (o && typeof o != "string")
    return /* @__PURE__ */ l.jsx(M.svg, { as: o, ...p, ...u });
  const C = a ?? te.path;
  return /* @__PURE__ */ l.jsx(M.svg, { verticalAlign: "middle", viewBox: y, ...p, ...u, children: C });
});
R.displayName = "Icon";
function Lt(e) {
  return /* @__PURE__ */ l.jsx(R, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function Dt(e) {
  return /* @__PURE__ */ l.jsx(R, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function ne(e) {
  return /* @__PURE__ */ l.jsx(R, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var [Ot, K] = z({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [Bt, Y] = z({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), Ce = {
  info: { icon: Dt, colorScheme: "blue" },
  warning: { icon: ne, colorScheme: "orange" },
  success: { icon: Lt, colorScheme: "green" },
  error: { icon: ne, colorScheme: "red" },
  loading: { icon: He, colorScheme: "blue" }
};
function Ft(e) {
  return Ce[e].colorScheme;
}
function qt(e) {
  return Ce[e].icon;
}
var we = I(
  function(t, o) {
    const n = Y(), { status: r } = K(), s = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ l.jsx(
      M.div,
      {
        ref: o,
        "data-status": r,
        ...t,
        className: N("chakra-alert__desc", t.className),
        __css: s
      }
    );
  }
);
we.displayName = "AlertDescription";
function Se(e) {
  const { status: t } = K(), o = qt(t), n = Y(), r = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ l.jsx(
    M.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: N("chakra-alert__icon", e.className),
      __css: r,
      children: e.children || /* @__PURE__ */ l.jsx(o, { h: "100%", w: "100%" })
    }
  );
}
Se.displayName = "AlertIcon";
var ke = I(
  function(t, o) {
    const n = Y(), { status: r } = K();
    return /* @__PURE__ */ l.jsx(
      M.div,
      {
        ref: o,
        "data-status": r,
        ...t,
        className: N("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
ke.displayName = "AlertTitle";
var je = I(function(t, o) {
  var n;
  const { status: r = "info", addRole: s = !0, ...a } = ae(t), i = (n = t.colorScheme) != null ? n : Ft(r), c = Ke("Alert", { ...t, colorScheme: i }), u = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...c.container
  };
  return /* @__PURE__ */ l.jsx(Ot, { value: { status: r }, children: /* @__PURE__ */ l.jsx(Bt, { value: c, children: /* @__PURE__ */ l.jsx(
    M.div,
    {
      "data-status": r,
      role: s ? "alert" : void 0,
      ref: o,
      ...a,
      className: N("chakra-alert", t.className),
      __css: u
    }
  ) }) });
});
je.displayName = "Alert";
function Vt(e) {
  return /* @__PURE__ */ l.jsx(R, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ l.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var Me = I(
  function(t, o) {
    const n = se("CloseButton", t), { children: r, isDisabled: s, __css: a, ...i } = ae(t), c = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ l.jsx(
      M.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: o,
        disabled: s,
        __css: {
          ...c,
          ...n,
          ...a
        },
        ...i,
        children: r || /* @__PURE__ */ l.jsx(Vt, { width: "1em", height: "1em" })
      }
    );
  }
);
Me.displayName = "CloseButton";
var Ut = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, S = Zt(Ut);
function Zt(e) {
  let t = e;
  const o = /* @__PURE__ */ new Set(), n = (r) => {
    t = r(t), o.forEach((s) => s());
  };
  return {
    getState: () => t,
    subscribe: (r) => (o.add(r), () => {
      n(() => e), o.delete(r);
    }),
    removeToast: (r, s) => {
      n((a) => ({
        ...a,
        [s]: a[s].filter((i) => i.id != r)
      }));
    },
    notify: (r, s) => {
      const a = Gt(r, s), { position: i, id: c } = a;
      return n((u) => {
        var d, m;
        const p = i.includes("top") ? [a, ...(d = u[i]) != null ? d : []] : [...(m = u[i]) != null ? m : [], a];
        return {
          ...u,
          [i]: p
        };
      }), c;
    },
    update: (r, s) => {
      r && n((a) => {
        const i = { ...a }, { position: c, index: u } = ee(i, r);
        return c && u !== -1 && (i[c][u] = {
          ...i[c][u],
          ...s,
          message: Pe(s)
        }), i;
      });
    },
    closeAll: ({ positions: r } = {}) => {
      n((s) => (r ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (c, u) => (c[u] = s[u].map((d) => ({
          ...d,
          requestClose: !0
        })), c),
        { ...s }
      ));
    },
    close: (r) => {
      n((s) => {
        const a = xe(s, r);
        return a ? {
          ...s,
          [a]: s[a].map((i) => i.id == r ? {
            ...i,
            requestClose: !0
          } : i)
        } : s;
      });
    },
    isActive: (r) => !!ee(S.getState(), r).position
  };
}
var oe = 0;
function Gt(e, t = {}) {
  var o, n;
  oe += 1;
  const r = (o = t.id) != null ? o : oe, s = (n = t.position) != null ? n : "bottom";
  return {
    id: r,
    message: e,
    position: s,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => S.removeToast(String(r), s),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var Wt = (e) => {
  const {
    status: t,
    variant: o = "solid",
    id: n,
    title: r,
    isClosable: s,
    onClose: a,
    description: i,
    colorScheme: c,
    icon: u
  } = e, d = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ l.jsxs(
    je,
    {
      addRole: !1,
      status: t,
      variant: o,
      id: d == null ? void 0 : d.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: c,
      children: [
        /* @__PURE__ */ l.jsx(Se, { children: u }),
        /* @__PURE__ */ l.jsxs(M.div, { flex: "1", maxWidth: "100%", children: [
          r && /* @__PURE__ */ l.jsx(ke, { id: d == null ? void 0 : d.title, children: r }),
          i && /* @__PURE__ */ l.jsx(we, { id: d == null ? void 0 : d.description, display: "block", children: i })
        ] }),
        s && /* @__PURE__ */ l.jsx(
          Me,
          {
            size: "sm",
            onClick: a,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function Pe(e = {}) {
  const { render: t, toastComponent: o = Wt } = e;
  return (r) => typeof t == "function" ? t({ ...r, ...e }) : /* @__PURE__ */ l.jsx(o, { ...r, ...e });
}
function an(e, t) {
  const o = (r) => {
    var s;
    return {
      ...t,
      ...r,
      position: Rt(
        (s = r == null ? void 0 : r.position) != null ? s : t == null ? void 0 : t.position,
        e
      )
    };
  }, n = (r) => {
    const s = o(r), a = Pe(s);
    return S.notify(a, s);
  };
  return n.update = (r, s) => {
    S.update(r, o(s));
  }, n.promise = (r, s) => {
    const a = n({
      ...s.loading,
      status: "loading",
      duration: null
    });
    r.then(
      (i) => n.update(a, {
        status: "success",
        duration: 5e3,
        ...V(s.success, i)
      })
    ).catch(
      (i) => n.update(a, {
        status: "error",
        duration: 5e3,
        ...V(s.error, i)
      })
    );
  }, n.closeAll = S.closeAll, n.close = S.close, n.isActive = S.isActive, n;
}
var [Ht, ln] = z({
  name: "ToastOptionsContext",
  strict: !1
}), Kt = (e) => {
  const t = rt(
    S.subscribe,
    S.getState,
    S.getState
  ), {
    motionVariants: o,
    component: n = ye,
    portalProps: r
  } = e, a = Object.keys(t).map((i) => {
    const c = t[i];
    return /* @__PURE__ */ l.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        id: `chakra-toast-manager-${i}`,
        style: jt(i),
        children: /* @__PURE__ */ l.jsx(It, { initial: !1, children: c.map((u) => /* @__PURE__ */ l.jsx(
          n,
          {
            motionVariants: o,
            ...u
          },
          u.id
        )) })
      },
      i
    );
  });
  return /* @__PURE__ */ l.jsx(F, { ...r, children: a });
}, Te = (e) => function({
  children: o,
  theme: n = e,
  toastOptions: r,
  ...s
}) {
  return /* @__PURE__ */ l.jsxs(wt, { theme: n, ...s, children: [
    /* @__PURE__ */ l.jsx(Ht, { value: r == null ? void 0 : r.defaultOptions, children: o }),
    /* @__PURE__ */ l.jsx(Kt, { ...r })
  ] });
}, cn = Te(Ye), dn = Te(Je);
export {
  It as A,
  Ht as B,
  Me as C,
  gt as D,
  ge as E,
  Pe as F,
  Ct as G,
  Rt as H,
  R as I,
  xt as L,
  F as P,
  nn as S,
  bt as T,
  Kt as a,
  rn as b,
  an as c,
  sn as d,
  dn as e,
  cn as f,
  je as g,
  we as h,
  Se as i,
  ke as j,
  Y as k,
  st as l,
  at as m,
  me as n,
  lt as o,
  yt as p,
  on as q,
  pe as r,
  Xt as s,
  en as t,
  ln as u,
  fe as v,
  tn as w,
  pt as x,
  vt as y,
  Wt as z
};
