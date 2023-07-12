import * as Q from "react";
import Gt, { forwardRef as sn, useContext as bt, createContext as Wr, useLayoutEffect as Qa, useEffect as ge, useState as de, useRef as ie, useMemo as we, useCallback as I, useReducer as _C, useInsertionEffect as Og, createElement as Dg, useId as It, cloneElement as Tt, Children as Hr, isValidElement as Xo, memo as CC, useSyncExternalStore as kC, PureComponent as PC, Fragment as jg } from "react";
import { createPortal as Mg } from "react-dom";
function EC(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function TC(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var AC = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var a;
      n.tags.length === 0 ? n.insertionPoint ? a = n.insertionPoint.nextSibling : n.prepend ? a = n.container.firstChild : a = n.before : a = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, a), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(TC(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var a = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      a && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !a;
    }
    if (this.isSpeedy) {
      var i = EC(o);
      try {
        i.insertRule(n, i.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', s);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, t.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), Ft = "-ms-", Is = "-moz-", He = "-webkit-", yd = "comm", bd = "rule", xd = "decl", IC = "@import", Fg = "@keyframes", RC = "@layer", $C = Math.abs, sl = String.fromCharCode, NC = Object.assign;
function OC(e, t) {
  return jt(e, 0) ^ 45 ? (((t << 2 ^ jt(e, 0)) << 2 ^ jt(e, 1)) << 2 ^ jt(e, 2)) << 2 ^ jt(e, 3) : 0;
}
function Bg(e) {
  return e.trim();
}
function DC(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Ue(e, t, r) {
  return e.replace(t, r);
}
function Su(e, t) {
  return e.indexOf(t);
}
function jt(e, t) {
  return e.charCodeAt(t) | 0;
}
function Na(e, t, r) {
  return e.slice(t, r);
}
function Or(e) {
  return e.length;
}
function Sd(e) {
  return e.length;
}
function ji(e, t) {
  return t.push(e), e;
}
function jC(e, t) {
  return e.map(t).join("");
}
var ll = 1, Lo = 1, Lg = 0, Yt = 0, kt = 0, Zo = "";
function cl(e, t, r, n, o, a, i) {
  return { value: e, root: t, parent: r, type: n, props: o, children: a, line: ll, column: Lo, length: i, return: "" };
}
function na(e, t) {
  return NC(cl("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function MC() {
  return kt;
}
function FC() {
  return kt = Yt > 0 ? jt(Zo, --Yt) : 0, Lo--, kt === 10 && (Lo = 1, ll--), kt;
}
function tr() {
  return kt = Yt < Lg ? jt(Zo, Yt++) : 0, Lo++, kt === 10 && (Lo = 1, ll++), kt;
}
function Fr() {
  return jt(Zo, Yt);
}
function os() {
  return Yt;
}
function ei(e, t) {
  return Na(Zo, e, t);
}
function Oa(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Vg(e) {
  return ll = Lo = 1, Lg = Or(Zo = e), Yt = 0, [];
}
function zg(e) {
  return Zo = "", e;
}
function as(e) {
  return Bg(ei(Yt - 1, wu(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function BC(e) {
  for (; (kt = Fr()) && kt < 33; )
    tr();
  return Oa(e) > 2 || Oa(kt) > 3 ? "" : " ";
}
function LC(e, t) {
  for (; --t && tr() && !(kt < 48 || kt > 102 || kt > 57 && kt < 65 || kt > 70 && kt < 97); )
    ;
  return ei(e, os() + (t < 6 && Fr() == 32 && tr() == 32));
}
function wu(e) {
  for (; tr(); )
    switch (kt) {
      case e:
        return Yt;
      case 34:
      case 39:
        e !== 34 && e !== 39 && wu(kt);
        break;
      case 40:
        e === 41 && wu(e);
        break;
      case 92:
        tr();
        break;
    }
  return Yt;
}
function VC(e, t) {
  for (; tr() && e + kt !== 47 + 10; )
    if (e + kt === 42 + 42 && Fr() === 47)
      break;
  return "/*" + ei(t, Yt - 1) + "*" + sl(e === 47 ? e : tr());
}
function zC(e) {
  for (; !Oa(Fr()); )
    tr();
  return ei(e, Yt);
}
function WC(e) {
  return zg(is("", null, null, null, [""], e = Vg(e), 0, [0], e));
}
function is(e, t, r, n, o, a, i, s, l) {
  for (var c = 0, u = 0, d = i, f = 0, p = 0, v = 0, m = 1, g = 1, b = 1, y = 0, x = "", _ = o, w = a, P = n, k = x; g; )
    switch (v = y, y = tr()) {
      case 40:
        if (v != 108 && jt(k, d - 1) == 58) {
          Su(k += Ue(as(y), "&", "&\f"), "&\f") != -1 && (b = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        k += as(y);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        k += BC(v);
        break;
      case 92:
        k += LC(os() - 1, 7);
        continue;
      case 47:
        switch (Fr()) {
          case 42:
          case 47:
            ji(HC(VC(tr(), os()), t, r), l);
            break;
          default:
            k += "/";
        }
        break;
      case 123 * m:
        s[c++] = Or(k) * b;
      case 125 * m:
      case 59:
      case 0:
        switch (y) {
          case 0:
          case 125:
            g = 0;
          case 59 + u:
            b == -1 && (k = Ue(k, /\f/g, "")), p > 0 && Or(k) - d && ji(p > 32 ? ch(k + ";", n, r, d - 1) : ch(Ue(k, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            k += ";";
          default:
            if (ji(P = lh(k, t, r, c, u, o, s, x, _ = [], w = [], d), a), y === 123)
              if (u === 0)
                is(k, t, P, P, _, a, d, s, w);
              else
                switch (f === 99 && jt(k, 3) === 110 ? 100 : f) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    is(e, P, P, n && ji(lh(e, P, P, 0, 0, o, s, x, o, _ = [], d), w), o, w, d, s, n ? _ : w);
                    break;
                  default:
                    is(k, P, P, P, [""], w, 0, s, w);
                }
        }
        c = u = p = 0, m = b = 1, x = k = "", d = i;
        break;
      case 58:
        d = 1 + Or(k), p = v;
      default:
        if (m < 1) {
          if (y == 123)
            --m;
          else if (y == 125 && m++ == 0 && FC() == 125)
            continue;
        }
        switch (k += sl(y), y * m) {
          case 38:
            b = u > 0 ? 1 : (k += "\f", -1);
            break;
          case 44:
            s[c++] = (Or(k) - 1) * b, b = 1;
            break;
          case 64:
            Fr() === 45 && (k += as(tr())), f = Fr(), u = d = Or(x = k += zC(os())), y++;
            break;
          case 45:
            v === 45 && Or(k) == 2 && (m = 0);
        }
    }
  return a;
}
function lh(e, t, r, n, o, a, i, s, l, c, u) {
  for (var d = o - 1, f = o === 0 ? a : [""], p = Sd(f), v = 0, m = 0, g = 0; v < n; ++v)
    for (var b = 0, y = Na(e, d + 1, d = $C(m = i[v])), x = e; b < p; ++b)
      (x = Bg(m > 0 ? f[b] + " " + y : Ue(y, /&\f/g, f[b]))) && (l[g++] = x);
  return cl(e, t, r, o === 0 ? bd : s, l, c, u);
}
function HC(e, t, r) {
  return cl(e, t, r, yd, sl(MC()), Na(e, 2, -2), 0);
}
function ch(e, t, r, n) {
  return cl(e, t, r, xd, Na(e, 0, n), Na(e, n + 1, -1), n);
}
function ko(e, t) {
  for (var r = "", n = Sd(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function UC(e, t, r, n) {
  switch (e.type) {
    case RC:
      if (e.children.length)
        break;
    case IC:
    case xd:
      return e.return = e.return || e.value;
    case yd:
      return "";
    case Fg:
      return e.return = e.value + "{" + ko(e.children, n) + "}";
    case bd:
      e.value = e.props.join(",");
  }
  return Or(r = ko(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function GC(e) {
  var t = Sd(e);
  return function(r, n, o, a) {
    for (var i = "", s = 0; s < t; s++)
      i += e[s](r, n, o, a) || "";
    return i;
  };
}
function qC(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var uh = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function Wg(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var KC = function(t, r, n) {
  for (var o = 0, a = 0; o = a, a = Fr(), o === 38 && a === 12 && (r[n] = 1), !Oa(a); )
    tr();
  return ei(t, Yt);
}, YC = function(t, r) {
  var n = -1, o = 44;
  do
    switch (Oa(o)) {
      case 0:
        o === 38 && Fr() === 12 && (r[n] = 1), t[n] += KC(Yt - 1, r, n);
        break;
      case 2:
        t[n] += as(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = Fr() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += sl(o);
    }
  while (o = tr());
  return t;
}, XC = function(t, r) {
  return zg(YC(Vg(t), r));
}, dh = /* @__PURE__ */ new WeakMap(), ZC = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !dh.get(n)) && !o) {
      dh.set(t, !0);
      for (var a = [], i = XC(r, a), s = n.props, l = 0, c = 0; l < i.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = a[l] ? i[l].replace(/&\f/g, s[u]) : s[u] + " " + i[l];
    }
  }
}, JC = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, QC = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ek = function(t) {
  return t.type === "comm" && t.children.indexOf(QC) > -1;
}, tk = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var a = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (a) {
        for (var i = !!r.parent, s = i ? r.parent.children : (
          // global rule at the root level
          o
        ), l = s.length - 1; l >= 0; l--) {
          var c = s[l];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (ek(c))
              return;
            break;
          }
        }
        a.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Hg = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, rk = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!Hg(r[n]))
      return !0;
  return !1;
}, fh = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, nk = function(t, r, n) {
  Hg(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), fh(t)) : rk(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), fh(t)));
};
function Ug(e, t) {
  switch (OC(e, t)) {
    case 5103:
      return He + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return He + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return He + e + Is + e + Ft + e + e;
    case 6828:
    case 4268:
      return He + e + Ft + e + e;
    case 6165:
      return He + e + Ft + "flex-" + e + e;
    case 5187:
      return He + e + Ue(e, /(\w+).+(:[^]+)/, He + "box-$1$2" + Ft + "flex-$1$2") + e;
    case 5443:
      return He + e + Ft + "flex-item-" + Ue(e, /flex-|-self/, "") + e;
    case 4675:
      return He + e + Ft + "flex-line-pack" + Ue(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return He + e + Ft + Ue(e, "shrink", "negative") + e;
    case 5292:
      return He + e + Ft + Ue(e, "basis", "preferred-size") + e;
    case 6060:
      return He + "box-" + Ue(e, "-grow", "") + He + e + Ft + Ue(e, "grow", "positive") + e;
    case 4554:
      return He + Ue(e, /([^-])(transform)/g, "$1" + He + "$2") + e;
    case 6187:
      return Ue(Ue(Ue(e, /(zoom-|grab)/, He + "$1"), /(image-set)/, He + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return Ue(e, /(image-set\([^]*)/, He + "$1$`$1");
    case 4968:
      return Ue(Ue(e, /(.+:)(flex-)?(.*)/, He + "box-pack:$3" + Ft + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + He + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ue(e, /(.+)-inline(.+)/, He + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (Or(e) - 1 - t > 6)
        switch (jt(e, t + 1)) {
          case 109:
            if (jt(e, t + 4) !== 45)
              break;
          case 102:
            return Ue(e, /(.+:)(.+)-([^]+)/, "$1" + He + "$2-$3$1" + Is + (jt(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~Su(e, "stretch") ? Ug(Ue(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (jt(e, t + 1) !== 115)
        break;
    case 6444:
      switch (jt(e, Or(e) - 3 - (~Su(e, "!important") && 10))) {
        case 107:
          return Ue(e, ":", ":" + He) + e;
        case 101:
          return Ue(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + He + (jt(e, 14) === 45 ? "inline-" : "") + "box$3$1" + He + "$2$3$1" + Ft + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (jt(e, t + 11)) {
        case 114:
          return He + e + Ft + Ue(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return He + e + Ft + Ue(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return He + e + Ft + Ue(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return He + e + Ft + e + e;
  }
  return e;
}
var ok = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case xd:
        t.return = Ug(t.value, t.length);
        break;
      case Fg:
        return ko([na(t, {
          value: Ue(t.value, "@", "@" + He)
        })], o);
      case bd:
        if (t.length)
          return jC(t.props, function(a) {
            switch (DC(a, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return ko([na(t, {
                  props: [Ue(a, /:(read-\w+)/, ":" + Is + "$1")]
                })], o);
              case "::placeholder":
                return ko([na(t, {
                  props: [Ue(a, /:(plac\w+)/, ":" + He + "input-$1")]
                }), na(t, {
                  props: [Ue(a, /:(plac\w+)/, ":" + Is + "$1")]
                }), na(t, {
                  props: [Ue(a, /:(plac\w+)/, Ft + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, ak = [ok], ik = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(m) {
      var g = m.getAttribute("data-emotion");
      g.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || ak;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var a = {}, i, s = [];
  i = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(m) {
      for (var g = m.getAttribute("data-emotion").split(" "), b = 1; b < g.length; b++)
        a[g[b]] = !0;
      s.push(m);
    }
  );
  var l, c = [ZC, JC];
  process.env.NODE_ENV !== "production" && c.push(tk({
    get compat() {
      return v.compat;
    }
  }), nk);
  {
    var u, d = [UC, process.env.NODE_ENV !== "production" ? function(m) {
      m.root || (m.return ? u.insert(m.return) : m.value && m.type !== yd && u.insert(m.value + "{}"));
    } : qC(function(m) {
      u.insert(m);
    })], f = GC(c.concat(o, d)), p = function(g) {
      return ko(WC(g), f);
    };
    l = function(g, b, y, x) {
      u = y, process.env.NODE_ENV !== "production" && b.map !== void 0 && (u = {
        insert: function(w) {
          y.insert(w + b.map);
        }
      }), p(g ? g + "{" + b.styles + "}" : b.styles), x && (v.inserted[b.name] = !0);
    };
  }
  var v = {
    key: r,
    sheet: new AC({
      key: r,
      container: i,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: a,
    registered: {},
    insert: l
  };
  return v.sheet.hydrate(s), v;
};
function Yn() {
  return Yn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Yn.apply(this, arguments);
}
var Mi = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ul(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var _u = { exports: {} }, Ke = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ph;
function sk() {
  if (ph)
    return Ke;
  ph = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
  function x(w) {
    if (typeof w == "object" && w !== null) {
      var P = w.$$typeof;
      switch (P) {
        case t:
          switch (w = w.type, w) {
            case l:
            case c:
            case n:
            case a:
            case o:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case u:
                case v:
                case p:
                case i:
                  return w;
                default:
                  return P;
              }
          }
        case r:
          return P;
      }
    }
  }
  function _(w) {
    return x(w) === c;
  }
  return Ke.AsyncMode = l, Ke.ConcurrentMode = c, Ke.ContextConsumer = s, Ke.ContextProvider = i, Ke.Element = t, Ke.ForwardRef = u, Ke.Fragment = n, Ke.Lazy = v, Ke.Memo = p, Ke.Portal = r, Ke.Profiler = a, Ke.StrictMode = o, Ke.Suspense = d, Ke.isAsyncMode = function(w) {
    return _(w) || x(w) === l;
  }, Ke.isConcurrentMode = _, Ke.isContextConsumer = function(w) {
    return x(w) === s;
  }, Ke.isContextProvider = function(w) {
    return x(w) === i;
  }, Ke.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Ke.isForwardRef = function(w) {
    return x(w) === u;
  }, Ke.isFragment = function(w) {
    return x(w) === n;
  }, Ke.isLazy = function(w) {
    return x(w) === v;
  }, Ke.isMemo = function(w) {
    return x(w) === p;
  }, Ke.isPortal = function(w) {
    return x(w) === r;
  }, Ke.isProfiler = function(w) {
    return x(w) === a;
  }, Ke.isStrictMode = function(w) {
    return x(w) === o;
  }, Ke.isSuspense = function(w) {
    return x(w) === d;
  }, Ke.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === c || w === a || w === o || w === d || w === f || typeof w == "object" && w !== null && (w.$$typeof === v || w.$$typeof === p || w.$$typeof === i || w.$$typeof === s || w.$$typeof === u || w.$$typeof === g || w.$$typeof === b || w.$$typeof === y || w.$$typeof === m);
  }, Ke.typeOf = x, Ke;
}
var Ye = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hh;
function lk() {
  return hh || (hh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, a = e ? Symbol.for("react.profiler") : 60114, i = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, f = e ? Symbol.for("react.suspense_list") : 60120, p = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, g = e ? Symbol.for("react.fundamental") : 60117, b = e ? Symbol.for("react.responder") : 60118, y = e ? Symbol.for("react.scope") : 60119;
    function x(B) {
      return typeof B == "string" || typeof B == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      B === n || B === c || B === a || B === o || B === d || B === f || typeof B == "object" && B !== null && (B.$$typeof === v || B.$$typeof === p || B.$$typeof === i || B.$$typeof === s || B.$$typeof === u || B.$$typeof === g || B.$$typeof === b || B.$$typeof === y || B.$$typeof === m);
    }
    function _(B) {
      if (typeof B == "object" && B !== null) {
        var Ce = B.$$typeof;
        switch (Ce) {
          case t:
            var ee = B.type;
            switch (ee) {
              case l:
              case c:
              case n:
              case a:
              case o:
              case d:
                return ee;
              default:
                var ve = ee && ee.$$typeof;
                switch (ve) {
                  case s:
                  case u:
                  case v:
                  case p:
                  case i:
                    return ve;
                  default:
                    return Ce;
                }
            }
          case r:
            return Ce;
        }
      }
    }
    var w = l, P = c, k = s, R = i, j = t, $ = u, L = n, J = v, G = p, K = r, te = a, Z = o, N = d, q = !1;
    function he(B) {
      return q || (q = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), D(B) || _(B) === l;
    }
    function D(B) {
      return _(B) === c;
    }
    function M(B) {
      return _(B) === s;
    }
    function re(B) {
      return _(B) === i;
    }
    function V(B) {
      return typeof B == "object" && B !== null && B.$$typeof === t;
    }
    function z(B) {
      return _(B) === u;
    }
    function U(B) {
      return _(B) === n;
    }
    function oe(B) {
      return _(B) === v;
    }
    function ce(B) {
      return _(B) === p;
    }
    function se(B) {
      return _(B) === r;
    }
    function W(B) {
      return _(B) === a;
    }
    function Y(B) {
      return _(B) === o;
    }
    function ne(B) {
      return _(B) === d;
    }
    Ye.AsyncMode = w, Ye.ConcurrentMode = P, Ye.ContextConsumer = k, Ye.ContextProvider = R, Ye.Element = j, Ye.ForwardRef = $, Ye.Fragment = L, Ye.Lazy = J, Ye.Memo = G, Ye.Portal = K, Ye.Profiler = te, Ye.StrictMode = Z, Ye.Suspense = N, Ye.isAsyncMode = he, Ye.isConcurrentMode = D, Ye.isContextConsumer = M, Ye.isContextProvider = re, Ye.isElement = V, Ye.isForwardRef = z, Ye.isFragment = U, Ye.isLazy = oe, Ye.isMemo = ce, Ye.isPortal = se, Ye.isProfiler = W, Ye.isStrictMode = Y, Ye.isSuspense = ne, Ye.isValidElementType = x, Ye.typeOf = _;
  }()), Ye;
}
process.env.NODE_ENV === "production" ? _u.exports = sk() : _u.exports = lk();
var wd = _u.exports, Gg = wd, ck = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, uk = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, qg = {};
qg[Gg.ForwardRef] = ck;
qg[Gg.Memo] = uk;
var dk = !0;
function _d(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var dl = function(t, r, n) {
  var o = t.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  dk === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, fl = function(t, r, n) {
  dl(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var a = r;
    do
      t.insert(r === a ? "." + o : "", a, t.sheet, !0), a = a.next;
    while (a !== void 0);
  }
};
function fk(e) {
  for (var t = 0, r, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    r = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      t ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(n) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
var pk = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, mh = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, hk = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", mk = /[A-Z]|^ms/g, Kg = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Cd = function(t) {
  return t.charCodeAt(1) === 45;
}, vh = function(t) {
  return t != null && typeof t != "boolean";
}, gc = /* @__PURE__ */ Wg(function(e) {
  return Cd(e) ? e : e.replace(mk, "-$&").toLowerCase();
}), Rs = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(Kg, function(n, o, a) {
          return wr = {
            name: o,
            styles: a,
            next: wr
          }, o;
        });
  }
  return pk[t] !== 1 && !Cd(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var vk = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, gk = ["normal", "none", "initial", "inherit", "unset"], yk = Rs, bk = /^-ms-/, xk = /-(.)/g, gh = {};
  Rs = function(t, r) {
    if (t === "content" && (typeof r != "string" || gk.indexOf(r) === -1 && !vk.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = yk(t, r);
    return n !== "" && !Cd(t) && t.indexOf("-") !== -1 && gh[t] === void 0 && (gh[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(bk, "ms-").replace(xk, function(o, a) {
      return a.toUpperCase();
    }) + "?")), n;
  };
}
var Yg = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Da(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Yg);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return wr = {
          name: r.name,
          styles: r.styles,
          next: wr
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            wr = {
              name: n.name,
              styles: n.styles,
              next: wr
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Sk(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var a = wr, i = r(e);
        return wr = a, Da(e, t, i);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(Kg, function(u, d, f) {
          var p = "animation" + s.length;
          return s.push("const " + p + " = keyframes`" + f.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + p + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + l + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + l + "`"));
      }
      break;
  }
  if (t == null)
    return r;
  var c = t[r];
  return c !== void 0 ? c : r;
}
function Sk(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += Da(e, t, r[o]) + ";";
  else
    for (var a in r) {
      var i = r[a];
      if (typeof i != "object")
        t != null && t[i] !== void 0 ? n += a + "{" + t[i] + "}" : vh(i) && (n += gc(a) + ":" + Rs(a, i) + ";");
      else {
        if (a === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Yg);
        if (Array.isArray(i) && typeof i[0] == "string" && (t == null || t[i[0]] === void 0))
          for (var s = 0; s < i.length; s++)
            vh(i[s]) && (n += gc(a) + ":" + Rs(a, i[s]) + ";");
        else {
          var l = Da(e, t, i);
          switch (a) {
            case "animation":
            case "animationName": {
              n += gc(a) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && a === "undefined" && console.error(hk), n += a + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var yh = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Xg;
process.env.NODE_ENV !== "production" && (Xg = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var wr, Vo = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, a = "";
  wr = void 0;
  var i = t[0];
  i == null || i.raw === void 0 ? (o = !1, a += Da(n, r, i)) : (process.env.NODE_ENV !== "production" && i[0] === void 0 && console.error(mh), a += i[0]);
  for (var s = 1; s < t.length; s++)
    a += Da(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && i[s] === void 0 && console.error(mh), a += i[s]);
  var l;
  process.env.NODE_ENV !== "production" && (a = a.replace(Xg, function(f) {
    return l = f, "";
  })), yh.lastIndex = 0;
  for (var c = "", u; (u = yh.exec(a)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = fk(a) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: a,
    map: l,
    next: wr,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: a,
    next: wr
  };
}, wk = function(t) {
  return t();
}, Zg = Q["useInsertionEffect"] ? Q["useInsertionEffect"] : !1, kd = Zg || wk, bh = Zg || Q.useLayoutEffect, _k = {}.hasOwnProperty, Pd = /* @__PURE__ */ Q.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ik({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Pd.displayName = "EmotionCacheContext");
Pd.Provider;
var pl = function(t) {
  return /* @__PURE__ */ sn(function(r, n) {
    var o = bt(Pd);
    return t(r, o, n);
  });
}, Cn = /* @__PURE__ */ Q.createContext({});
process.env.NODE_ENV !== "production" && (Cn.displayName = "EmotionThemeContext");
var Ck = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Yn({}, t, r);
}, kk = /* @__PURE__ */ uh(function(e) {
  return uh(function(t) {
    return Ck(e, t);
  });
}), Pk = function(t) {
  var r = Q.useContext(Cn);
  return t.theme !== r && (r = kk(r)(t.theme)), /* @__PURE__ */ Q.createElement(Cn.Provider, {
    value: r
  }, t.children);
}, xh = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Sh = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Ek = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return dl(r, n, o), kd(function() {
    return fl(r, n, o);
  }), null;
}, Tk = /* @__PURE__ */ pl(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[xh], a = [n], i = "";
  typeof e.className == "string" ? i = _d(t.registered, a, e.className) : e.className != null && (i = e.className + " ");
  var s = Vo(a, void 0, Q.useContext(Cn));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[Sh];
    l && (s = Vo([s, "label:" + l + ";"]));
  }
  i += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    _k.call(e, u) && u !== "css" && u !== xh && (process.env.NODE_ENV === "production" || u !== Sh) && (c[u] = e[u]);
  return c.ref = r, c.className = i, /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(Ek, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ Q.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (Tk.displayName = "EmotionCssPropInternal");
var Ak = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, wh = !1, ti = /* @__PURE__ */ pl(function(e, t) {
  process.env.NODE_ENV !== "production" && !wh && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), wh = !0);
  var r = e.styles, n = Vo([r], void 0, Q.useContext(Cn)), o = Q.useRef();
  return bh(function() {
    var a = t.key + "-global", i = new t.sheet.constructor({
      key: a,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + a + " " + n.name + '"]');
    return t.sheet.tags.length && (i.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", a), i.hydrate([l])), o.current = [i, s], function() {
      i.flush();
    };
  }, [t]), bh(function() {
    var a = o.current, i = a[0], s = a[1];
    if (s) {
      a[1] = !1;
      return;
    }
    if (n.next !== void 0 && fl(t, n.next, !0), i.tags.length) {
      var l = i.tags[i.tags.length - 1].nextElementSibling;
      i.before = l, i.flush();
    }
    t.insert("", n, i, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ti.displayName = "EmotionGlobal");
function Ik() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Vo(t);
}
var Er = function() {
  var t = Ik.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Rk = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var a = t[n];
    if (a != null) {
      var i = void 0;
      switch (typeof a) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(a))
            i = e(a);
          else {
            process.env.NODE_ENV !== "production" && a.styles !== void 0 && a.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), i = "";
            for (var s in a)
              a[s] && s && (i && (i += " "), i += s);
          }
          break;
        }
        default:
          i = a;
      }
      i && (o && (o += " "), o += i);
    }
  }
  return o;
};
function $k(e, t, r) {
  var n = [], o = _d(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var Nk = function(t) {
  var r = t.cache, n = t.serializedArr;
  return kd(function() {
    for (var o = 0; o < n.length; o++)
      fl(r, n[o], !1);
  }), null;
}, Ok = /* @__PURE__ */ pl(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var f = Vo(u, t.registered);
    return n.push(f), dl(t, f, !1), t.key + "-" + f.name;
  }, a = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return $k(t.registered, o, Rk(u));
  }, i = {
    css: o,
    cx: a,
    theme: Q.useContext(Cn)
  }, s = e.children(i);
  return r = !0, /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(Nk, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (Ok.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var _h = !0, Dk = typeof jest < "u" || typeof vi < "u";
  if (_h && !Dk) {
    var Ch = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : _h ? window : global
    ), kh = "__EMOTION_REACT_" + Ak.version.split(".")[0] + "__";
    Ch[kh] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Ch[kh] = !0;
  }
}
var Cu = { exports: {} }, oa = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ph;
function jk() {
  if (Ph)
    return oa;
  Ph = 1;
  var e = Gt, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function i(s, l, c) {
    var u, d = {}, f = null, p = null;
    c !== void 0 && (f = "" + c), l.key !== void 0 && (f = "" + l.key), l.ref !== void 0 && (p = l.ref);
    for (u in l)
      n.call(l, u) && !a.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: f, ref: p, props: d, _owner: o.current };
  }
  return oa.Fragment = r, oa.jsx = i, oa.jsxs = i, oa;
}
var aa = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Eh;
function Mk() {
  return Eh || (Eh = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Gt, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), f = Symbol.for("react.lazy"), p = Symbol.for("react.offscreen"), v = Symbol.iterator, m = "@@iterator";
    function g(C) {
      if (C === null || typeof C != "object")
        return null;
      var X = v && C[v] || C[m];
      return typeof X == "function" ? X : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(C) {
      {
        for (var X = arguments.length, pe = new Array(X > 1 ? X - 1 : 0), ke = 1; ke < X; ke++)
          pe[ke - 1] = arguments[ke];
        x("error", C, pe);
      }
    }
    function x(C, X, pe) {
      {
        var ke = b.ReactDebugCurrentFrame, Ve = ke.getStackAddendum();
        Ve !== "" && (X += "%s", pe = pe.concat([Ve]));
        var Be = pe.map(function(Me) {
          return String(Me);
        });
        Be.unshift("Warning: " + X), Function.prototype.apply.call(console[C], console, Be);
      }
    }
    var _ = !1, w = !1, P = !1, k = !1, R = !1, j;
    j = Symbol.for("react.module.reference");
    function $(C) {
      return !!(typeof C == "string" || typeof C == "function" || C === n || C === a || R || C === o || C === c || C === u || k || C === p || _ || w || P || typeof C == "object" && C !== null && (C.$$typeof === f || C.$$typeof === d || C.$$typeof === i || C.$$typeof === s || C.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      C.$$typeof === j || C.getModuleId !== void 0));
    }
    function L(C, X, pe) {
      var ke = C.displayName;
      if (ke)
        return ke;
      var Ve = X.displayName || X.name || "";
      return Ve !== "" ? pe + "(" + Ve + ")" : pe;
    }
    function J(C) {
      return C.displayName || "Context";
    }
    function G(C) {
      if (C == null)
        return null;
      if (typeof C.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof C == "function")
        return C.displayName || C.name || null;
      if (typeof C == "string")
        return C;
      switch (C) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case a:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case s:
            var X = C;
            return J(X) + ".Consumer";
          case i:
            var pe = C;
            return J(pe._context) + ".Provider";
          case l:
            return L(C, C.render, "ForwardRef");
          case d:
            var ke = C.displayName || null;
            return ke !== null ? ke : G(C.type) || "Memo";
          case f: {
            var Ve = C, Be = Ve._payload, Me = Ve._init;
            try {
              return G(Me(Be));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, te = 0, Z, N, q, he, D, M, re;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function z() {
      {
        if (te === 0) {
          Z = console.log, N = console.info, q = console.warn, he = console.error, D = console.group, M = console.groupCollapsed, re = console.groupEnd;
          var C = {
            configurable: !0,
            enumerable: !0,
            value: V,
            writable: !0
          };
          Object.defineProperties(console, {
            info: C,
            log: C,
            warn: C,
            error: C,
            group: C,
            groupCollapsed: C,
            groupEnd: C
          });
        }
        te++;
      }
    }
    function U() {
      {
        if (te--, te === 0) {
          var C = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, C, {
              value: Z
            }),
            info: K({}, C, {
              value: N
            }),
            warn: K({}, C, {
              value: q
            }),
            error: K({}, C, {
              value: he
            }),
            group: K({}, C, {
              value: D
            }),
            groupCollapsed: K({}, C, {
              value: M
            }),
            groupEnd: K({}, C, {
              value: re
            })
          });
        }
        te < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var oe = b.ReactCurrentDispatcher, ce;
    function se(C, X, pe) {
      {
        if (ce === void 0)
          try {
            throw Error();
          } catch (Ve) {
            var ke = Ve.stack.trim().match(/\n( *(at )?)/);
            ce = ke && ke[1] || "";
          }
        return `
` + ce + C;
      }
    }
    var W = !1, Y;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      Y = new ne();
    }
    function B(C, X) {
      if (!C || W)
        return "";
      {
        var pe = Y.get(C);
        if (pe !== void 0)
          return pe;
      }
      var ke;
      W = !0;
      var Ve = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Be;
      Be = oe.current, oe.current = null, z();
      try {
        if (X) {
          var Me = function() {
            throw Error();
          };
          if (Object.defineProperty(Me.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Me, []);
            } catch (Ht) {
              ke = Ht;
            }
            Reflect.construct(C, [], Me);
          } else {
            try {
              Me.call();
            } catch (Ht) {
              ke = Ht;
            }
            C.call(Me.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ht) {
            ke = Ht;
          }
          C();
        }
      } catch (Ht) {
        if (Ht && ke && typeof Ht.stack == "string") {
          for (var De = Ht.stack.split(`
`), Ot = ke.stack.split(`
`), pt = De.length - 1, gt = Ot.length - 1; pt >= 1 && gt >= 0 && De[pt] !== Ot[gt]; )
            gt--;
          for (; pt >= 1 && gt >= 0; pt--, gt--)
            if (De[pt] !== Ot[gt]) {
              if (pt !== 1 || gt !== 1)
                do
                  if (pt--, gt--, gt < 0 || De[pt] !== Ot[gt]) {
                    var Wt = `
` + De[pt].replace(" at new ", " at ");
                    return C.displayName && Wt.includes("<anonymous>") && (Wt = Wt.replace("<anonymous>", C.displayName)), typeof C == "function" && Y.set(C, Wt), Wt;
                  }
                while (pt >= 1 && gt >= 0);
              break;
            }
        }
      } finally {
        W = !1, oe.current = Be, U(), Error.prepareStackTrace = Ve;
      }
      var Ir = C ? C.displayName || C.name : "", $i = Ir ? se(Ir) : "";
      return typeof C == "function" && Y.set(C, $i), $i;
    }
    function Ce(C, X, pe) {
      return B(C, !1);
    }
    function ee(C) {
      var X = C.prototype;
      return !!(X && X.isReactComponent);
    }
    function ve(C, X, pe) {
      if (C == null)
        return "";
      if (typeof C == "function")
        return B(C, ee(C));
      if (typeof C == "string")
        return se(C);
      switch (C) {
        case c:
          return se("Suspense");
        case u:
          return se("SuspenseList");
      }
      if (typeof C == "object")
        switch (C.$$typeof) {
          case l:
            return Ce(C.render);
          case d:
            return ve(C.type, X, pe);
          case f: {
            var ke = C, Ve = ke._payload, Be = ke._init;
            try {
              return ve(Be(Ve), X, pe);
            } catch {
            }
          }
        }
      return "";
    }
    var Ne = Object.prototype.hasOwnProperty, $e = {}, Oe = b.ReactDebugCurrentFrame;
    function vt(C) {
      if (C) {
        var X = C._owner, pe = ve(C.type, C._source, X ? X.type : null);
        Oe.setExtraStackFrame(pe);
      } else
        Oe.setExtraStackFrame(null);
    }
    function Qe(C, X, pe, ke, Ve) {
      {
        var Be = Function.call.bind(Ne);
        for (var Me in C)
          if (Be(C, Me)) {
            var De = void 0;
            try {
              if (typeof C[Me] != "function") {
                var Ot = Error((ke || "React class") + ": " + pe + " type `" + Me + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof C[Me] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ot.name = "Invariant Violation", Ot;
              }
              De = C[Me](X, Me, ke, pe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (pt) {
              De = pt;
            }
            De && !(De instanceof Error) && (vt(Ve), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", ke || "React class", pe, Me, typeof De), vt(null)), De instanceof Error && !(De.message in $e) && ($e[De.message] = !0, vt(Ve), y("Failed %s type: %s", pe, De.message), vt(null));
          }
      }
    }
    var xt = Array.isArray;
    function ct(C) {
      return xt(C);
    }
    function ut(C) {
      {
        var X = typeof Symbol == "function" && Symbol.toStringTag, pe = X && C[Symbol.toStringTag] || C.constructor.name || "Object";
        return pe;
      }
    }
    function $t(C) {
      try {
        return zt(C), !1;
      } catch {
        return !0;
      }
    }
    function zt(C) {
      return "" + C;
    }
    function Zt(C) {
      if ($t(C))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ut(C)), zt(C);
    }
    var Mt = b.ReactCurrentOwner, ae = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Re, qe, dt;
    dt = {};
    function fe(C) {
      if (Ne.call(C, "ref")) {
        var X = Object.getOwnPropertyDescriptor(C, "ref").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return C.ref !== void 0;
    }
    function be(C) {
      if (Ne.call(C, "key")) {
        var X = Object.getOwnPropertyDescriptor(C, "key").get;
        if (X && X.isReactWarning)
          return !1;
      }
      return C.key !== void 0;
    }
    function Jt(C, X) {
      if (typeof C.ref == "string" && Mt.current && X && Mt.current.stateNode !== X) {
        var pe = G(Mt.current.type);
        dt[pe] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', G(Mt.current.type), C.ref), dt[pe] = !0);
      }
    }
    function le(C, X) {
      {
        var pe = function() {
          Re || (Re = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        pe.isReactWarning = !0, Object.defineProperty(C, "key", {
          get: pe,
          configurable: !0
        });
      }
    }
    function ye(C, X) {
      {
        var pe = function() {
          qe || (qe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", X));
        };
        pe.isReactWarning = !0, Object.defineProperty(C, "ref", {
          get: pe,
          configurable: !0
        });
      }
    }
    var Pe = function(C, X, pe, ke, Ve, Be, Me) {
      var De = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: C,
        key: X,
        ref: pe,
        props: Me,
        // Record the component responsible for creating this element.
        _owner: Be
      };
      return De._store = {}, Object.defineProperty(De._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(De, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.defineProperty(De, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ve
      }), Object.freeze && (Object.freeze(De.props), Object.freeze(De)), De;
    };
    function Te(C, X, pe, ke, Ve) {
      {
        var Be, Me = {}, De = null, Ot = null;
        pe !== void 0 && (Zt(pe), De = "" + pe), be(X) && (Zt(X.key), De = "" + X.key), fe(X) && (Ot = X.ref, Jt(X, Ve));
        for (Be in X)
          Ne.call(X, Be) && !ae.hasOwnProperty(Be) && (Me[Be] = X[Be]);
        if (C && C.defaultProps) {
          var pt = C.defaultProps;
          for (Be in pt)
            Me[Be] === void 0 && (Me[Be] = pt[Be]);
        }
        if (De || Ot) {
          var gt = typeof C == "function" ? C.displayName || C.name || "Unknown" : C;
          De && le(Me, gt), Ot && ye(Me, gt);
        }
        return Pe(C, De, Ot, Ve, ke, Mt.current, Me);
      }
    }
    var Je = b.ReactCurrentOwner, Nt = b.ReactDebugCurrentFrame;
    function at(C) {
      if (C) {
        var X = C._owner, pe = ve(C.type, C._source, X ? X.type : null);
        Nt.setExtraStackFrame(pe);
      } else
        Nt.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function Gr(C) {
      return typeof C == "object" && C !== null && C.$$typeof === t;
    }
    function Ar() {
      {
        if (Je.current) {
          var C = G(Je.current.type);
          if (C)
            return `

Check the render method of \`` + C + "`.";
        }
        return "";
      }
    }
    function rc(C) {
      {
        if (C !== void 0) {
          var X = C.fileName.replace(/^.*[\\\/]/, ""), pe = C.lineNumber;
          return `

Check your code at ` + X + ":" + pe + ".";
        }
        return "";
      }
    }
    var Ti = {};
    function nc(C) {
      {
        var X = Ar();
        if (!X) {
          var pe = typeof C == "string" ? C : C.displayName || C.name;
          pe && (X = `

Check the top-level render call using <` + pe + ">.");
        }
        return X;
      }
    }
    function Ai(C, X) {
      {
        if (!C._store || C._store.validated || C.key != null)
          return;
        C._store.validated = !0;
        var pe = nc(X);
        if (Ti[pe])
          return;
        Ti[pe] = !0;
        var ke = "";
        C && C._owner && C._owner !== Je.current && (ke = " It was passed a child from " + G(C._owner.type) + "."), at(C), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', pe, ke), at(null);
      }
    }
    function Ii(C, X) {
      {
        if (typeof C != "object")
          return;
        if (ct(C))
          for (var pe = 0; pe < C.length; pe++) {
            var ke = C[pe];
            Gr(ke) && Ai(ke, X);
          }
        else if (Gr(C))
          C._store && (C._store.validated = !0);
        else if (C) {
          var Ve = g(C);
          if (typeof Ve == "function" && Ve !== C.entries)
            for (var Be = Ve.call(C), Me; !(Me = Be.next()).done; )
              Gr(Me.value) && Ai(Me.value, X);
        }
      }
    }
    function yr(C) {
      {
        var X = C.type;
        if (X == null || typeof X == "string")
          return;
        var pe;
        if (typeof X == "function")
          pe = X.propTypes;
        else if (typeof X == "object" && (X.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        X.$$typeof === d))
          pe = X.propTypes;
        else
          return;
        if (pe) {
          var ke = G(X);
          Qe(pe, C.props, "prop", ke, C);
        } else if (X.PropTypes !== void 0 && !ft) {
          ft = !0;
          var Ve = G(X);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ve || "Unknown");
        }
        typeof X.getDefaultProps == "function" && !X.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function oc(C) {
      {
        for (var X = Object.keys(C.props), pe = 0; pe < X.length; pe++) {
          var ke = X[pe];
          if (ke !== "children" && ke !== "key") {
            at(C), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", ke), at(null);
            break;
          }
        }
        C.ref !== null && (at(C), y("Invalid attribute `ref` supplied to `React.Fragment`."), at(null));
      }
    }
    function Ri(C, X, pe, ke, Ve, Be) {
      {
        var Me = $(C);
        if (!Me) {
          var De = "";
          (C === void 0 || typeof C == "object" && C !== null && Object.keys(C).length === 0) && (De += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ot = rc(Ve);
          Ot ? De += Ot : De += Ar();
          var pt;
          C === null ? pt = "null" : ct(C) ? pt = "array" : C !== void 0 && C.$$typeof === t ? (pt = "<" + (G(C.type) || "Unknown") + " />", De = " Did you accidentally export a JSX literal instead of a component?") : pt = typeof C, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", pt, De);
        }
        var gt = Te(C, X, pe, Ve, Be);
        if (gt == null)
          return gt;
        if (Me) {
          var Wt = X.children;
          if (Wt !== void 0)
            if (ke)
              if (ct(Wt)) {
                for (var Ir = 0; Ir < Wt.length; Ir++)
                  Ii(Wt[Ir], C);
                Object.freeze && Object.freeze(Wt);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ii(Wt, C);
        }
        return C === n ? oc(gt) : yr(gt), gt;
      }
    }
    function ac(C, X, pe) {
      return Ri(C, X, pe, !0);
    }
    function ic(C, X, pe) {
      return Ri(C, X, pe, !1);
    }
    var sc = ic, dn = ac;
    aa.Fragment = n, aa.jsx = sc, aa.jsxs = dn;
  }()), aa;
}
process.env.NODE_ENV === "production" ? Cu.exports = jk() : Cu.exports = Mk();
var h = Cu.exports, Jg = String.raw, Qg = Jg`
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
`, ey = () => /* @__PURE__ */ h.jsx(ti, { styles: Qg }), ty = ({ scope: e = "" }) => /* @__PURE__ */ h.jsx(
  ti,
  {
    styles: Jg`
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

      ${Qg}
    `
  }
);
function Fk(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ie(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: a,
    defaultValue: i
  } = e, s = Wr(i);
  s.displayName = t;
  function l() {
    var c;
    const u = bt(s);
    if (!u && r) {
      const d = new Error(
        a ?? Fk(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var [Bk, ry] = Ie({
  strict: !1,
  name: "PortalManagerContext"
});
function Ed(e) {
  const { children: t, zIndex: r } = e;
  return /* @__PURE__ */ h.jsx(Bk, { value: { zIndex: r }, children: t });
}
Ed.displayName = "PortalManager";
var rr = globalThis != null && globalThis.document ? Qa : ge, [ny, Lk] = Ie({
  strict: !1,
  name: "PortalContext"
}), Td = "chakra-portal", Vk = ".chakra-portal", zk = (e) => /* @__PURE__ */ h.jsx(
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
), Wk = (e) => {
  const { appendToParentPortal: t, children: r } = e, [n, o] = de(null), a = ie(null), [, i] = de({});
  ge(() => i({}), []);
  const s = Lk(), l = ry();
  rr(() => {
    if (!n)
      return;
    const u = n.ownerDocument, d = t ? s ?? u.body : u.body;
    if (!d)
      return;
    a.current = u.createElement("div"), a.current.className = Td, d.appendChild(a.current), i({});
    const f = a.current;
    return () => {
      d.contains(f) && d.removeChild(f);
    };
  }, [n]);
  const c = l != null && l.zIndex ? /* @__PURE__ */ h.jsx(zk, { zIndex: l == null ? void 0 : l.zIndex, children: r }) : r;
  return a.current ? Mg(
    /* @__PURE__ */ h.jsx(ny, { value: a.current, children: c }),
    a.current
  ) : /* @__PURE__ */ h.jsx(
    "span",
    {
      ref: (u) => {
        u && o(u);
      }
    }
  );
}, Hk = (e) => {
  const { children: t, containerRef: r, appendToParentPortal: n } = e, o = r.current, a = o ?? (typeof window < "u" ? document.body : void 0), i = we(() => {
    const l = o == null ? void 0 : o.ownerDocument.createElement("div");
    return l && (l.className = Td), l;
  }, [o]), [, s] = de({});
  return rr(() => s({}), []), rr(() => {
    if (!(!i || !a))
      return a.appendChild(i), () => {
        a.removeChild(i);
      };
  }, [i, a]), a && i ? Mg(
    /* @__PURE__ */ h.jsx(ny, { value: n ? i : null, children: t }),
    i
  ) : null;
};
function Jn(e) {
  const t = {
    appendToParentPortal: !0,
    ...e
  }, { containerRef: r, ...n } = t;
  return r ? /* @__PURE__ */ h.jsx(Hk, { containerRef: r, ...n }) : /* @__PURE__ */ h.jsx(Wk, { ...n });
}
Jn.className = Td;
Jn.selector = Vk;
Jn.displayName = "Portal";
function sr() {
  const e = bt(
    Cn
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var Qn = Wr({});
Qn.displayName = "ColorModeContext";
function ri() {
  const e = bt(Qn);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Uk(e, t) {
  const { colorMode: r } = ri();
  return r === "dark" ? t : e;
}
var Fi = {
  light: "chakra-ui-light",
  dark: "chakra-ui-dark"
};
function Gk(e = {}) {
  const { preventTransition: t = !0 } = e, r = {
    setDataset: (n) => {
      const o = t ? r.preventTransition() : void 0;
      document.documentElement.dataset.theme = n, document.documentElement.style.colorScheme = n, o == null || o();
    },
    setClassName(n) {
      document.body.classList.add(n ? Fi.dark : Fi.light), document.body.classList.remove(n ? Fi.light : Fi.dark);
    },
    query() {
      return window.matchMedia("(prefers-color-scheme: dark)");
    },
    getSystemTheme(n) {
      var o;
      return ((o = r.query().matches) != null ? o : n === "dark") ? "dark" : "light";
    },
    addListener(n) {
      const o = r.query(), a = (i) => {
        n(i.matches ? "dark" : "light");
      };
      return typeof o.addListener == "function" ? o.addListener(a) : o.addEventListener("change", a), () => {
        typeof o.removeListener == "function" ? o.removeListener(a) : o.removeEventListener("change", a);
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
  return r;
}
var Ad = "chakra-ui-color-mode";
function oy(e) {
  return {
    ssr: !1,
    type: "localStorage",
    get(t) {
      if (!(globalThis != null && globalThis.document))
        return t;
      let r;
      try {
        r = localStorage.getItem(e) || t;
      } catch {
      }
      return r || t;
    },
    set(t) {
      try {
        localStorage.setItem(e, t);
      } catch {
      }
    }
  };
}
var ay = oy(Ad);
function Th(e, t) {
  const r = e.match(new RegExp(`(^| )${t}=([^;]+)`));
  return r == null ? void 0 : r[2];
}
function Id(e, t) {
  return {
    ssr: !!t,
    type: "cookie",
    get(r) {
      return t ? Th(t, e) : globalThis != null && globalThis.document && Th(document.cookie, e) || r;
    },
    set(r) {
      document.cookie = `${e}=${r}; max-age=31536000; path=/`;
    }
  };
}
var qk = Id(Ad), Kk = (e) => Id(Ad, e), zo = () => {
};
function Ah(e, t) {
  return e.type === "cookie" && e.ssr ? e.get(t) : t;
}
function Rd(e) {
  const {
    value: t,
    children: r,
    options: {
      useSystemColorMode: n,
      initialColorMode: o,
      disableTransitionOnChange: a
    } = {},
    colorModeManager: i = ay
  } = e, s = o === "dark" ? "dark" : "light", [l, c] = de(
    () => Ah(i, s)
  ), [u, d] = de(
    () => Ah(i)
  ), { getSystemTheme: f, setClassName: p, setDataset: v, addListener: m } = we(
    () => Gk({ preventTransition: a }),
    [a]
  ), g = o === "system" && !l ? u : l, b = I(
    (_) => {
      const w = _ === "system" ? f() : _;
      c(w), p(w === "dark"), v(w), i.set(w);
    },
    [i, f, p, v]
  );
  rr(() => {
    o === "system" && d(f());
  }, []), ge(() => {
    const _ = i.get();
    if (_) {
      b(_);
      return;
    }
    if (o === "system") {
      b("system");
      return;
    }
    b(s);
  }, [i, s, o, b]);
  const y = I(() => {
    b(g === "dark" ? "light" : "dark");
  }, [g, b]);
  ge(() => {
    if (n)
      return m(b);
  }, [n, m, b]);
  const x = we(
    () => ({
      colorMode: t ?? g,
      toggleColorMode: t ? zo : y,
      setColorMode: t ? zo : b,
      forced: t !== void 0
    }),
    [g, y, b, t]
  );
  return /* @__PURE__ */ h.jsx(Qn.Provider, { value: x, children: r });
}
Rd.displayName = "ColorModeProvider";
function iy(e) {
  const t = we(
    () => ({
      colorMode: "dark",
      toggleColorMode: zo,
      setColorMode: zo,
      forced: !0
    }),
    []
  );
  return /* @__PURE__ */ h.jsx(Qn.Provider, { value: t, ...e });
}
iy.displayName = "DarkMode";
function sy(e) {
  const t = we(
    () => ({
      colorMode: "light",
      toggleColorMode: zo,
      setColorMode: zo,
      forced: !0
    }),
    []
  );
  return /* @__PURE__ */ h.jsx(Qn.Provider, { value: t, ...e });
}
sy.displayName = "LightMode";
var Yk = /* @__PURE__ */ new Set(["dark", "light", "system"]);
function Xk(e) {
  let t = e;
  return Yk.has(t) || (t = "light"), t;
}
function ly(e = {}) {
  const {
    initialColorMode: t = "light",
    type: r = "localStorage",
    storageKey: n = "chakra-ui-color-mode"
  } = e, o = Xk(t), a = r === "cookie", i = `(function(){try{var a=function(o){var l="(prefers-color-scheme: dark)",v=window.matchMedia(l).matches?"dark":"light",e=o==="system"?v:o,d=document.documentElement,m=document.body,i="chakra-ui-light",n="chakra-ui-dark",s=e==="dark";return m.classList.add(s?n:i),m.classList.remove(s?i:n),d.style.colorScheme=e,d.dataset.theme=e,e},u=a,h="${o}",r="${n}",t=document.cookie.match(new RegExp("(^| )".concat(r,"=([^;]+)"))),c=t?t[2]:null;c?a(c):document.cookie="".concat(r,"=").concat(a(h),"; max-age=31536000; path=/")}catch(a){}})();
  `, s = `(function(){try{var a=function(c){var v="(prefers-color-scheme: dark)",h=window.matchMedia(v).matches?"dark":"light",r=c==="system"?h:c,o=document.documentElement,s=document.body,l="chakra-ui-light",d="chakra-ui-dark",i=r==="dark";return s.classList.add(i?d:l),s.classList.remove(i?l:d),o.style.colorScheme=r,o.dataset.theme=r,r},n=a,m="${o}",e="${n}",t=localStorage.getItem(e);t?a(t):localStorage.setItem(e,a(m))}catch(a){}})();
  `;
  return `!${a ? i : s}`.trim();
}
function Zk(e = {}) {
  const { nonce: t } = e;
  return /* @__PURE__ */ h.jsx(
    "script",
    {
      id: "chakra-script",
      nonce: t,
      dangerouslySetInnerHTML: { __html: ly(e) }
    }
  );
}
function hl() {
  const e = ri(), t = sr();
  return { ...e, theme: t };
}
function Jk(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[i];
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function Qk(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const a = (i) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[i]) == null ? void 0 : l.value;
  };
  return (o = (n = a(t)) != null ? n : a(r)) != null ? o : r;
}
function cy(e, t, r) {
  const n = sr();
  return $d(e, t, r)(n);
}
function $d(e, t, r) {
  const n = Array.isArray(t) ? t : [t], o = Array.isArray(r) ? r : [r];
  return (a) => {
    const i = o.filter(Boolean), s = n.map((l, c) => {
      var u, d;
      if (e === "breakpoints")
        return Jk(a, l, (u = i[c]) != null ? u : l);
      const f = `${e}.${l}`;
      return Qk(a, f, (d = i[c]) != null ? d : l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
var H = (...e) => e.filter(Boolean).join(" ");
function eP() {
  return process.env.NODE_ENV !== "production";
}
function _t(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var ni = (e) => {
  const { condition: t, message: r } = e;
  t && eP() && console.warn(r);
};
function Bt(e, ...t) {
  return tP(e) ? e(...t) : e;
}
var tP = (e) => typeof e == "function", Ae = (e) => e ? "" : void 0, nr = (e) => e ? !0 : void 0;
function ue(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function ml(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var $s = { exports: {} };
$s.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, a = 16, i = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", f = "[object Error]", p = "[object Function]", v = "[object GeneratorFunction]", m = "[object Map]", g = "[object Number]", b = "[object Null]", y = "[object Object]", x = "[object Proxy]", _ = "[object RegExp]", w = "[object Set]", P = "[object String]", k = "[object Undefined]", R = "[object WeakMap]", j = "[object ArrayBuffer]", $ = "[object DataView]", L = "[object Float32Array]", J = "[object Float64Array]", G = "[object Int8Array]", K = "[object Int16Array]", te = "[object Int32Array]", Z = "[object Uint8Array]", N = "[object Uint8ClampedArray]", q = "[object Uint16Array]", he = "[object Uint32Array]", D = /[\\^$.*+?()[\]{}|]/g, M = /^\[object .+?Constructor\]$/, re = /^(?:0|[1-9]\d*)$/, V = {};
  V[L] = V[J] = V[G] = V[K] = V[te] = V[Z] = V[N] = V[q] = V[he] = !0, V[s] = V[l] = V[j] = V[u] = V[$] = V[d] = V[f] = V[p] = V[m] = V[g] = V[y] = V[_] = V[w] = V[P] = V[R] = !1;
  var z = typeof Mi == "object" && Mi && Mi.Object === Object && Mi, U = typeof self == "object" && self && self.Object === Object && self, oe = z || U || Function("return this")(), ce = t && !t.nodeType && t, se = ce && !0 && e && !e.nodeType && e, W = se && se.exports === ce, Y = W && z.process, ne = function() {
    try {
      var S = se && se.require && se.require("util").types;
      return S || Y && Y.binding && Y.binding("util");
    } catch {
    }
  }(), B = ne && ne.isTypedArray;
  function Ce(S, T, F) {
    switch (F.length) {
      case 0:
        return S.call(T);
      case 1:
        return S.call(T, F[0]);
      case 2:
        return S.call(T, F[0], F[1]);
      case 3:
        return S.call(T, F[0], F[1], F[2]);
    }
    return S.apply(T, F);
  }
  function ee(S, T) {
    for (var F = -1, me = Array(S); ++F < S; )
      me[F] = T(F);
    return me;
  }
  function ve(S) {
    return function(T) {
      return S(T);
    };
  }
  function Ne(S, T) {
    return S == null ? void 0 : S[T];
  }
  function $e(S, T) {
    return function(F) {
      return S(T(F));
    };
  }
  var Oe = Array.prototype, vt = Function.prototype, Qe = Object.prototype, xt = oe["__core-js_shared__"], ct = vt.toString, ut = Qe.hasOwnProperty, $t = function() {
    var S = /[^.]+$/.exec(xt && xt.keys && xt.keys.IE_PROTO || "");
    return S ? "Symbol(src)_1." + S : "";
  }(), zt = Qe.toString, Zt = ct.call(Object), Mt = RegExp(
    "^" + ct.call(ut).replace(D, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ae = W ? oe.Buffer : void 0, Re = oe.Symbol, qe = oe.Uint8Array, dt = ae ? ae.allocUnsafe : void 0, fe = $e(Object.getPrototypeOf, Object), be = Object.create, Jt = Qe.propertyIsEnumerable, le = Oe.splice, ye = Re ? Re.toStringTag : void 0, Pe = function() {
    try {
      var S = cc(Object, "defineProperty");
      return S({}, "", {}), S;
    } catch {
    }
  }(), Te = ae ? ae.isBuffer : void 0, Je = Math.max, Nt = Date.now, at = cc(oe, "Map"), ft = cc(Object, "create"), Gr = function() {
    function S() {
    }
    return function(T) {
      if (!jn(T))
        return {};
      if (be)
        return be(T);
      S.prototype = T;
      var F = new S();
      return S.prototype = void 0, F;
    };
  }();
  function Ar(S) {
    var T = -1, F = S == null ? 0 : S.length;
    for (this.clear(); ++T < F; ) {
      var me = S[T];
      this.set(me[0], me[1]);
    }
  }
  function rc() {
    this.__data__ = ft ? ft(null) : {}, this.size = 0;
  }
  function Ti(S) {
    var T = this.has(S) && delete this.__data__[S];
    return this.size -= T ? 1 : 0, T;
  }
  function nc(S) {
    var T = this.__data__;
    if (ft) {
      var F = T[S];
      return F === n ? void 0 : F;
    }
    return ut.call(T, S) ? T[S] : void 0;
  }
  function Ai(S) {
    var T = this.__data__;
    return ft ? T[S] !== void 0 : ut.call(T, S);
  }
  function Ii(S, T) {
    var F = this.__data__;
    return this.size += this.has(S) ? 0 : 1, F[S] = ft && T === void 0 ? n : T, this;
  }
  Ar.prototype.clear = rc, Ar.prototype.delete = Ti, Ar.prototype.get = nc, Ar.prototype.has = Ai, Ar.prototype.set = Ii;
  function yr(S) {
    var T = -1, F = S == null ? 0 : S.length;
    for (this.clear(); ++T < F; ) {
      var me = S[T];
      this.set(me[0], me[1]);
    }
  }
  function oc() {
    this.__data__ = [], this.size = 0;
  }
  function Ri(S) {
    var T = this.__data__, F = Ht(T, S);
    if (F < 0)
      return !1;
    var me = T.length - 1;
    return F == me ? T.pop() : le.call(T, F, 1), --this.size, !0;
  }
  function ac(S) {
    var T = this.__data__, F = Ht(T, S);
    return F < 0 ? void 0 : T[F][1];
  }
  function ic(S) {
    return Ht(this.__data__, S) > -1;
  }
  function sc(S, T) {
    var F = this.__data__, me = Ht(F, S);
    return me < 0 ? (++this.size, F.push([S, T])) : F[me][1] = T, this;
  }
  yr.prototype.clear = oc, yr.prototype.delete = Ri, yr.prototype.get = ac, yr.prototype.has = ic, yr.prototype.set = sc;
  function dn(S) {
    var T = -1, F = S == null ? 0 : S.length;
    for (this.clear(); ++T < F; ) {
      var me = S[T];
      this.set(me[0], me[1]);
    }
  }
  function C() {
    this.size = 0, this.__data__ = {
      hash: new Ar(),
      map: new (at || yr)(),
      string: new Ar()
    };
  }
  function X(S) {
    var T = Oi(this, S).delete(S);
    return this.size -= T ? 1 : 0, T;
  }
  function pe(S) {
    return Oi(this, S).get(S);
  }
  function ke(S) {
    return Oi(this, S).has(S);
  }
  function Ve(S, T) {
    var F = Oi(this, S), me = F.size;
    return F.set(S, T), this.size += F.size == me ? 0 : 1, this;
  }
  dn.prototype.clear = C, dn.prototype.delete = X, dn.prototype.get = pe, dn.prototype.has = ke, dn.prototype.set = Ve;
  function Be(S) {
    var T = this.__data__ = new yr(S);
    this.size = T.size;
  }
  function Me() {
    this.__data__ = new yr(), this.size = 0;
  }
  function De(S) {
    var T = this.__data__, F = T.delete(S);
    return this.size = T.size, F;
  }
  function Ot(S) {
    return this.__data__.get(S);
  }
  function pt(S) {
    return this.__data__.has(S);
  }
  function gt(S, T) {
    var F = this.__data__;
    if (F instanceof yr) {
      var me = F.__data__;
      if (!at || me.length < r - 1)
        return me.push([S, T]), this.size = ++F.size, this;
      F = this.__data__ = new dn(me);
    }
    return F.set(S, T), this.size = F.size, this;
  }
  Be.prototype.clear = Me, Be.prototype.delete = De, Be.prototype.get = Ot, Be.prototype.has = pt, Be.prototype.set = gt;
  function Wt(S, T) {
    var F = fc(S), me = !F && dc(S), Le = !F && !me && rh(S), et = !F && !me && !Le && oh(S), it = F || me || Le || et, Fe = it ? ee(S.length, String) : [], st = Fe.length;
    for (var lr in S)
      (T || ut.call(S, lr)) && !(it && // Safari 9 has enumerable `arguments.length` in strict mode.
      (lr == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      Le && (lr == "offset" || lr == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      et && (lr == "buffer" || lr == "byteLength" || lr == "byteOffset") || // Skip index properties.
      eh(lr, st))) && Fe.push(lr);
    return Fe;
  }
  function Ir(S, T, F) {
    (F !== void 0 && !Di(S[T], F) || F === void 0 && !(T in S)) && lc(S, T, F);
  }
  function $i(S, T, F) {
    var me = S[T];
    (!(ut.call(S, T) && Di(me, F)) || F === void 0 && !(T in S)) && lc(S, T, F);
  }
  function Ht(S, T) {
    for (var F = S.length; F--; )
      if (Di(S[F][0], T))
        return F;
    return -1;
  }
  function lc(S, T, F) {
    T == "__proto__" && Pe ? Pe(S, T, {
      configurable: !0,
      enumerable: !0,
      value: F,
      writable: !0
    }) : S[T] = F;
  }
  var G_ = aC();
  function Ni(S) {
    return S == null ? S === void 0 ? k : b : ye && ye in Object(S) ? iC(S) : fC(S);
  }
  function Jp(S) {
    return ta(S) && Ni(S) == s;
  }
  function q_(S) {
    if (!jn(S) || uC(S))
      return !1;
    var T = hc(S) ? Mt : M;
    return T.test(vC(S));
  }
  function K_(S) {
    return ta(S) && nh(S.length) && !!V[Ni(S)];
  }
  function Y_(S) {
    if (!jn(S))
      return dC(S);
    var T = th(S), F = [];
    for (var me in S)
      me == "constructor" && (T || !ut.call(S, me)) || F.push(me);
    return F;
  }
  function Qp(S, T, F, me, Le) {
    S !== T && G_(T, function(et, it) {
      if (Le || (Le = new Be()), jn(et))
        X_(S, T, it, F, Qp, me, Le);
      else {
        var Fe = me ? me(uc(S, it), et, it + "", S, T, Le) : void 0;
        Fe === void 0 && (Fe = et), Ir(S, it, Fe);
      }
    }, ah);
  }
  function X_(S, T, F, me, Le, et, it) {
    var Fe = uc(S, F), st = uc(T, F), lr = it.get(st);
    if (lr) {
      Ir(S, F, lr);
      return;
    }
    var Qt = et ? et(Fe, st, F + "", S, T, it) : void 0, ra = Qt === void 0;
    if (ra) {
      var mc = fc(st), vc = !mc && rh(st), sh = !mc && !vc && oh(st);
      Qt = st, mc || vc || sh ? fc(Fe) ? Qt = Fe : gC(Fe) ? Qt = rC(Fe) : vc ? (ra = !1, Qt = Q_(st, !0)) : sh ? (ra = !1, Qt = tC(st, !0)) : Qt = [] : yC(st) || dc(st) ? (Qt = Fe, dc(Fe) ? Qt = bC(Fe) : (!jn(Fe) || hc(Fe)) && (Qt = sC(st))) : ra = !1;
    }
    ra && (it.set(st, Qt), Le(Qt, st, me, et, it), it.delete(st)), Ir(S, F, Qt);
  }
  function Z_(S, T) {
    return hC(pC(S, T, ih), S + "");
  }
  var J_ = Pe ? function(S, T) {
    return Pe(S, "toString", {
      configurable: !0,
      enumerable: !1,
      value: SC(T),
      writable: !0
    });
  } : ih;
  function Q_(S, T) {
    if (T)
      return S.slice();
    var F = S.length, me = dt ? dt(F) : new S.constructor(F);
    return S.copy(me), me;
  }
  function eC(S) {
    var T = new S.constructor(S.byteLength);
    return new qe(T).set(new qe(S)), T;
  }
  function tC(S, T) {
    var F = T ? eC(S.buffer) : S.buffer;
    return new S.constructor(F, S.byteOffset, S.length);
  }
  function rC(S, T) {
    var F = -1, me = S.length;
    for (T || (T = Array(me)); ++F < me; )
      T[F] = S[F];
    return T;
  }
  function nC(S, T, F, me) {
    var Le = !F;
    F || (F = {});
    for (var et = -1, it = T.length; ++et < it; ) {
      var Fe = T[et], st = me ? me(F[Fe], S[Fe], Fe, F, S) : void 0;
      st === void 0 && (st = S[Fe]), Le ? lc(F, Fe, st) : $i(F, Fe, st);
    }
    return F;
  }
  function oC(S) {
    return Z_(function(T, F) {
      var me = -1, Le = F.length, et = Le > 1 ? F[Le - 1] : void 0, it = Le > 2 ? F[2] : void 0;
      for (et = S.length > 3 && typeof et == "function" ? (Le--, et) : void 0, it && lC(F[0], F[1], it) && (et = Le < 3 ? void 0 : et, Le = 1), T = Object(T); ++me < Le; ) {
        var Fe = F[me];
        Fe && S(T, Fe, me, et);
      }
      return T;
    });
  }
  function aC(S) {
    return function(T, F, me) {
      for (var Le = -1, et = Object(T), it = me(T), Fe = it.length; Fe--; ) {
        var st = it[S ? Fe : ++Le];
        if (F(et[st], st, et) === !1)
          break;
      }
      return T;
    };
  }
  function Oi(S, T) {
    var F = S.__data__;
    return cC(T) ? F[typeof T == "string" ? "string" : "hash"] : F.map;
  }
  function cc(S, T) {
    var F = Ne(S, T);
    return q_(F) ? F : void 0;
  }
  function iC(S) {
    var T = ut.call(S, ye), F = S[ye];
    try {
      S[ye] = void 0;
      var me = !0;
    } catch {
    }
    var Le = zt.call(S);
    return me && (T ? S[ye] = F : delete S[ye]), Le;
  }
  function sC(S) {
    return typeof S.constructor == "function" && !th(S) ? Gr(fe(S)) : {};
  }
  function eh(S, T) {
    var F = typeof S;
    return T = T ?? i, !!T && (F == "number" || F != "symbol" && re.test(S)) && S > -1 && S % 1 == 0 && S < T;
  }
  function lC(S, T, F) {
    if (!jn(F))
      return !1;
    var me = typeof T;
    return (me == "number" ? pc(F) && eh(T, F.length) : me == "string" && T in F) ? Di(F[T], S) : !1;
  }
  function cC(S) {
    var T = typeof S;
    return T == "string" || T == "number" || T == "symbol" || T == "boolean" ? S !== "__proto__" : S === null;
  }
  function uC(S) {
    return !!$t && $t in S;
  }
  function th(S) {
    var T = S && S.constructor, F = typeof T == "function" && T.prototype || Qe;
    return S === F;
  }
  function dC(S) {
    var T = [];
    if (S != null)
      for (var F in Object(S))
        T.push(F);
    return T;
  }
  function fC(S) {
    return zt.call(S);
  }
  function pC(S, T, F) {
    return T = Je(T === void 0 ? S.length - 1 : T, 0), function() {
      for (var me = arguments, Le = -1, et = Je(me.length - T, 0), it = Array(et); ++Le < et; )
        it[Le] = me[T + Le];
      Le = -1;
      for (var Fe = Array(T + 1); ++Le < T; )
        Fe[Le] = me[Le];
      return Fe[T] = F(it), Ce(S, this, Fe);
    };
  }
  function uc(S, T) {
    if (!(T === "constructor" && typeof S[T] == "function") && T != "__proto__")
      return S[T];
  }
  var hC = mC(J_);
  function mC(S) {
    var T = 0, F = 0;
    return function() {
      var me = Nt(), Le = a - (me - F);
      if (F = me, Le > 0) {
        if (++T >= o)
          return arguments[0];
      } else
        T = 0;
      return S.apply(void 0, arguments);
    };
  }
  function vC(S) {
    if (S != null) {
      try {
        return ct.call(S);
      } catch {
      }
      try {
        return S + "";
      } catch {
      }
    }
    return "";
  }
  function Di(S, T) {
    return S === T || S !== S && T !== T;
  }
  var dc = Jp(function() {
    return arguments;
  }()) ? Jp : function(S) {
    return ta(S) && ut.call(S, "callee") && !Jt.call(S, "callee");
  }, fc = Array.isArray;
  function pc(S) {
    return S != null && nh(S.length) && !hc(S);
  }
  function gC(S) {
    return ta(S) && pc(S);
  }
  var rh = Te || wC;
  function hc(S) {
    if (!jn(S))
      return !1;
    var T = Ni(S);
    return T == p || T == v || T == c || T == x;
  }
  function nh(S) {
    return typeof S == "number" && S > -1 && S % 1 == 0 && S <= i;
  }
  function jn(S) {
    var T = typeof S;
    return S != null && (T == "object" || T == "function");
  }
  function ta(S) {
    return S != null && typeof S == "object";
  }
  function yC(S) {
    if (!ta(S) || Ni(S) != y)
      return !1;
    var T = fe(S);
    if (T === null)
      return !0;
    var F = ut.call(T, "constructor") && T.constructor;
    return typeof F == "function" && F instanceof F && ct.call(F) == Zt;
  }
  var oh = B ? ve(B) : K_;
  function bC(S) {
    return nC(S, ah(S));
  }
  function ah(S) {
    return pc(S) ? Wt(S, !0) : Y_(S);
  }
  var xC = oC(function(S, T, F, me) {
    Qp(S, T, F, me);
  });
  function SC(S) {
    return function() {
      return S;
    };
  }
  function ih(S) {
    return S;
  }
  function wC() {
    return !1;
  }
  e.exports = xC;
})($s, $s.exports);
var rP = $s.exports;
const pr = /* @__PURE__ */ ul(rP);
var nP = (e) => /!(important)?$/.test(e), Ih = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, uy = (e, t) => (r) => {
  const n = String(t), o = nP(n), a = Ih(n), i = e ? `${e}.${a}` : a;
  let s = _t(r.__cssMap) && i in r.__cssMap ? r.__cssMap[i].varRef : t;
  return s = Ih(s), o ? `${s} !important` : s;
};
function Nd(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (a, i) => {
    var s;
    const l = uy(t, a)(i);
    let c = (s = r == null ? void 0 : r(l, i)) != null ? s : l;
    return n && (c = n(c, i)), c;
  };
}
var Bi = (...e) => (t) => e.reduce((r, n) => n(r), t);
function cr(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = Nd({
      scale: e,
      transform: t
    }), n;
  };
}
var oP = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function aP(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: oP(t),
    transform: r ? Nd({
      scale: r,
      compose: n
    }) : n
  };
}
var dy = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function iP() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...dy
  ].join(" ");
}
function sP() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...dy
  ].join(" ");
}
var lP = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, cP = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function uP(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var dP = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, ku = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, fP = new Set(Object.values(ku)), Pu = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), pP = (e) => e.trim();
function hP(e, t) {
  if (e == null || Pu.has(e))
    return e;
  if (!(Eu(e) || Pu.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), a = o == null ? void 0 : o[1], i = o == null ? void 0 : o[2];
  if (!a || !i)
    return e;
  const s = a.includes("-gradient") ? a : `${a}-gradient`, [l, ...c] = i.split(",").map(pP).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in ku ? ku[l] : l;
  c.unshift(u);
  const d = c.map((f) => {
    if (fP.has(f))
      return f;
    const p = f.indexOf(" "), [v, m] = p !== -1 ? [f.substr(0, p), f.substr(p + 1)] : [f], g = Eu(m) ? m : m && m.split(" "), b = `colors.${v}`, y = b in t.__cssMap ? t.__cssMap[b].varRef : v;
    return g ? [
      y,
      ...Array.isArray(g) ? g : [g]
    ].join(" ") : y;
  });
  return `${s}(${d.join(", ")})`;
}
var Eu = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), mP = (e, t) => hP(e, t ?? {});
function vP(e) {
  return /^var\(--.+\)$/.test(e);
}
var gP = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, Rr = (e) => (t) => `${e}(${t})`, We = {
  filter(e) {
    return e !== "auto" ? e : lP;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : cP;
  },
  ring(e) {
    return uP(We.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? iP() : e === "auto-gpu" ? sP() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = gP(e);
    return t || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, t) {
    const r = { left: "right", right: "left" };
    return t.direction === "rtl" ? r[e] : e;
  },
  degree(e) {
    if (vP(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: mP,
  blur: Rr("blur"),
  opacity: Rr("opacity"),
  brightness: Rr("brightness"),
  contrast: Rr("contrast"),
  dropShadow: Rr("drop-shadow"),
  grayscale: Rr("grayscale"),
  hueRotate: Rr("hue-rotate"),
  invert: Rr("invert"),
  saturate: Rr("saturate"),
  sepia: Rr("sepia"),
  bgImage(e) {
    return e == null || Eu(e) || Pu.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = dP[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, A = {
  borderWidths: cr("borderWidths"),
  borderStyles: cr("borderStyles"),
  colors: cr("colors"),
  borders: cr("borders"),
  gradients: cr("gradients", We.gradient),
  radii: cr("radii", We.px),
  space: cr("space", Bi(We.vh, We.px)),
  spaceT: cr("space", Bi(We.vh, We.px)),
  degreeT(e) {
    return { property: e, transform: We.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Nd({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: cr("sizes", Bi(We.vh, We.px)),
  sizesT: cr("sizes", Bi(We.vh, We.fraction)),
  shadows: cr("shadows"),
  logical: aP,
  blur: cr("blur", We.blur)
}, Sa = {
  background: A.colors("background"),
  backgroundColor: A.colors("backgroundColor"),
  backgroundImage: A.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: We.bgClip },
  bgSize: A.prop("backgroundSize"),
  bgPosition: A.prop("backgroundPosition"),
  bg: A.colors("background"),
  bgColor: A.colors("backgroundColor"),
  bgPos: A.prop("backgroundPosition"),
  bgRepeat: A.prop("backgroundRepeat"),
  bgAttachment: A.prop("backgroundAttachment"),
  bgGradient: A.gradients("backgroundImage"),
  bgClip: { transform: We.bgClip }
};
Object.assign(Sa, {
  bgImage: Sa.backgroundImage,
  bgImg: Sa.backgroundImage
});
var ze = {
  border: A.borders("border"),
  borderWidth: A.borderWidths("borderWidth"),
  borderStyle: A.borderStyles("borderStyle"),
  borderColor: A.colors("borderColor"),
  borderRadius: A.radii("borderRadius"),
  borderTop: A.borders("borderTop"),
  borderBlockStart: A.borders("borderBlockStart"),
  borderTopLeftRadius: A.radii("borderTopLeftRadius"),
  borderStartStartRadius: A.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: A.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: A.radii("borderTopRightRadius"),
  borderStartEndRadius: A.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: A.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: A.borders("borderRight"),
  borderInlineEnd: A.borders("borderInlineEnd"),
  borderBottom: A.borders("borderBottom"),
  borderBlockEnd: A.borders("borderBlockEnd"),
  borderBottomLeftRadius: A.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: A.radii("borderBottomRightRadius"),
  borderLeft: A.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: A.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: A.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: A.borders(["borderLeft", "borderRight"]),
  borderInline: A.borders("borderInline"),
  borderY: A.borders(["borderTop", "borderBottom"]),
  borderBlock: A.borders("borderBlock"),
  borderTopWidth: A.borderWidths("borderTopWidth"),
  borderBlockStartWidth: A.borderWidths("borderBlockStartWidth"),
  borderTopColor: A.colors("borderTopColor"),
  borderBlockStartColor: A.colors("borderBlockStartColor"),
  borderTopStyle: A.borderStyles("borderTopStyle"),
  borderBlockStartStyle: A.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: A.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: A.borderWidths("borderBlockEndWidth"),
  borderBottomColor: A.colors("borderBottomColor"),
  borderBlockEndColor: A.colors("borderBlockEndColor"),
  borderBottomStyle: A.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: A.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: A.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: A.borderWidths("borderInlineStartWidth"),
  borderLeftColor: A.colors("borderLeftColor"),
  borderInlineStartColor: A.colors("borderInlineStartColor"),
  borderLeftStyle: A.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: A.borderStyles("borderInlineStartStyle"),
  borderRightWidth: A.borderWidths("borderRightWidth"),
  borderInlineEndWidth: A.borderWidths("borderInlineEndWidth"),
  borderRightColor: A.colors("borderRightColor"),
  borderInlineEndColor: A.colors("borderInlineEndColor"),
  borderRightStyle: A.borderStyles("borderRightStyle"),
  borderInlineEndStyle: A.borderStyles("borderInlineEndStyle"),
  borderTopRadius: A.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: A.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: A.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: A.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(ze, {
  rounded: ze.borderRadius,
  roundedTop: ze.borderTopRadius,
  roundedTopLeft: ze.borderTopLeftRadius,
  roundedTopRight: ze.borderTopRightRadius,
  roundedTopStart: ze.borderStartStartRadius,
  roundedTopEnd: ze.borderStartEndRadius,
  roundedBottom: ze.borderBottomRadius,
  roundedBottomLeft: ze.borderBottomLeftRadius,
  roundedBottomRight: ze.borderBottomRightRadius,
  roundedBottomStart: ze.borderEndStartRadius,
  roundedBottomEnd: ze.borderEndEndRadius,
  roundedLeft: ze.borderLeftRadius,
  roundedRight: ze.borderRightRadius,
  roundedStart: ze.borderInlineStartRadius,
  roundedEnd: ze.borderInlineEndRadius,
  borderStart: ze.borderInlineStart,
  borderEnd: ze.borderInlineEnd,
  borderTopStartRadius: ze.borderStartStartRadius,
  borderTopEndRadius: ze.borderStartEndRadius,
  borderBottomStartRadius: ze.borderEndStartRadius,
  borderBottomEndRadius: ze.borderEndEndRadius,
  borderStartRadius: ze.borderInlineStartRadius,
  borderEndRadius: ze.borderInlineEndRadius,
  borderStartWidth: ze.borderInlineStartWidth,
  borderEndWidth: ze.borderInlineEndWidth,
  borderStartColor: ze.borderInlineStartColor,
  borderEndColor: ze.borderInlineEndColor,
  borderStartStyle: ze.borderInlineStartStyle,
  borderEndStyle: ze.borderInlineEndStyle
});
var fy = {
  color: A.colors("color"),
  textColor: A.colors("color"),
  fill: A.colors("fill"),
  stroke: A.colors("stroke")
}, Ns = {
  boxShadow: A.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: A.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: A.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Ns, {
  shadow: Ns.boxShadow
});
var py = {
  filter: { transform: We.filter },
  blur: A.blur("--chakra-blur"),
  brightness: A.propT("--chakra-brightness", We.brightness),
  contrast: A.propT("--chakra-contrast", We.contrast),
  hueRotate: A.degreeT("--chakra-hue-rotate"),
  invert: A.propT("--chakra-invert", We.invert),
  saturate: A.propT("--chakra-saturate", We.saturate),
  dropShadow: A.propT("--chakra-drop-shadow", We.dropShadow),
  backdropFilter: { transform: We.backdropFilter },
  backdropBlur: A.blur("--chakra-backdrop-blur"),
  backdropBrightness: A.propT(
    "--chakra-backdrop-brightness",
    We.brightness
  ),
  backdropContrast: A.propT("--chakra-backdrop-contrast", We.contrast),
  backdropHueRotate: A.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: A.propT("--chakra-backdrop-invert", We.invert),
  backdropSaturate: A.propT("--chakra-backdrop-saturate", We.saturate)
}, ja = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: We.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: A.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: A.space("gap"),
  rowGap: A.space("rowGap"),
  columnGap: A.space("columnGap")
};
Object.assign(ja, {
  flexDir: ja.flexDirection
});
var Od = {
  gridGap: A.space("gridGap"),
  gridColumnGap: A.space("gridColumnGap"),
  gridRowGap: A.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, hy = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: We.outline },
  outlineOffset: !0,
  outlineColor: A.colors("outlineColor")
}, er = {
  width: A.sizesT("width"),
  inlineSize: A.sizesT("inlineSize"),
  height: A.sizes("height"),
  blockSize: A.sizes("blockSize"),
  boxSize: A.sizes(["width", "height"]),
  minWidth: A.sizes("minWidth"),
  minInlineSize: A.sizes("minInlineSize"),
  minHeight: A.sizes("minHeight"),
  minBlockSize: A.sizes("minBlockSize"),
  maxWidth: A.sizes("maxWidth"),
  maxInlineSize: A.sizes("maxInlineSize"),
  maxHeight: A.sizes("maxHeight"),
  maxBlockSize: A.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (min-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, t) => {
      var r, n, o;
      return { [`@media screen and (max-width: ${(o = (n = (r = t.__breakpoints) == null ? void 0 : r.get(e)) == null ? void 0 : n._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: A.propT("float", We.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(er, {
  w: er.width,
  h: er.height,
  minW: er.minWidth,
  maxW: er.maxWidth,
  minH: er.minHeight,
  maxH: er.maxHeight,
  overscroll: er.overscrollBehavior,
  overscrollX: er.overscrollBehaviorX,
  overscrollY: er.overscrollBehaviorY
});
var my = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: A.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: A.prop("listStyleImage")
};
function yP(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var bP = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, a, i) => {
    if (typeof n > "u")
      return e(n, o, a);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, a, i);
    return s.set(o, l), l;
  };
}, xP = bP(yP), SP = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, wP = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, yc = (e, t, r) => {
  const n = {}, o = xP(e, t, {});
  for (const a in o)
    a in r && r[a] != null || (n[a] = o[a]);
  return n;
}, vy = {
  srOnly: {
    transform(e) {
      return e === !0 ? SP : e === "focusable" ? wP : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => yc(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => yc(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => yc(t, e, r)
  }
}, Po = {
  position: !0,
  pos: A.prop("position"),
  zIndex: A.prop("zIndex", "zIndices"),
  inset: A.spaceT("inset"),
  insetX: A.spaceT(["left", "right"]),
  insetInline: A.spaceT("insetInline"),
  insetY: A.spaceT(["top", "bottom"]),
  insetBlock: A.spaceT("insetBlock"),
  top: A.spaceT("top"),
  insetBlockStart: A.spaceT("insetBlockStart"),
  bottom: A.spaceT("bottom"),
  insetBlockEnd: A.spaceT("insetBlockEnd"),
  left: A.spaceT("left"),
  insetInlineStart: A.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: A.spaceT("right"),
  insetInlineEnd: A.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Po, {
  insetStart: Po.insetInlineStart,
  insetEnd: Po.insetInlineEnd
});
var gy = {
  ring: { transform: We.ring },
  ringColor: A.colors("--chakra-ring-color"),
  ringOffset: A.prop("--chakra-ring-offset-width"),
  ringOffsetColor: A.colors("--chakra-ring-offset-color"),
  ringInset: A.prop("--chakra-ring-inset")
}, nt = {
  margin: A.spaceT("margin"),
  marginTop: A.spaceT("marginTop"),
  marginBlockStart: A.spaceT("marginBlockStart"),
  marginRight: A.spaceT("marginRight"),
  marginInlineEnd: A.spaceT("marginInlineEnd"),
  marginBottom: A.spaceT("marginBottom"),
  marginBlockEnd: A.spaceT("marginBlockEnd"),
  marginLeft: A.spaceT("marginLeft"),
  marginInlineStart: A.spaceT("marginInlineStart"),
  marginX: A.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: A.spaceT("marginInline"),
  marginY: A.spaceT(["marginTop", "marginBottom"]),
  marginBlock: A.spaceT("marginBlock"),
  padding: A.space("padding"),
  paddingTop: A.space("paddingTop"),
  paddingBlockStart: A.space("paddingBlockStart"),
  paddingRight: A.space("paddingRight"),
  paddingBottom: A.space("paddingBottom"),
  paddingBlockEnd: A.space("paddingBlockEnd"),
  paddingLeft: A.space("paddingLeft"),
  paddingInlineStart: A.space("paddingInlineStart"),
  paddingInlineEnd: A.space("paddingInlineEnd"),
  paddingX: A.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: A.space("paddingInline"),
  paddingY: A.space(["paddingTop", "paddingBottom"]),
  paddingBlock: A.space("paddingBlock")
};
Object.assign(nt, {
  m: nt.margin,
  mt: nt.marginTop,
  mr: nt.marginRight,
  me: nt.marginInlineEnd,
  marginEnd: nt.marginInlineEnd,
  mb: nt.marginBottom,
  ml: nt.marginLeft,
  ms: nt.marginInlineStart,
  marginStart: nt.marginInlineStart,
  mx: nt.marginX,
  my: nt.marginY,
  p: nt.padding,
  pt: nt.paddingTop,
  py: nt.paddingY,
  px: nt.paddingX,
  pb: nt.paddingBottom,
  pl: nt.paddingLeft,
  ps: nt.paddingInlineStart,
  paddingStart: nt.paddingInlineStart,
  pr: nt.paddingRight,
  pe: nt.paddingInlineEnd,
  paddingEnd: nt.paddingInlineEnd
});
var yy = {
  textDecorationColor: A.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: A.shadows("textShadow")
}, by = {
  clipPath: !0,
  transform: A.propT("transform", We.transform),
  transformOrigin: !0,
  translateX: A.spaceT("--chakra-translate-x"),
  translateY: A.spaceT("--chakra-translate-y"),
  skewX: A.degreeT("--chakra-skew-x"),
  skewY: A.degreeT("--chakra-skew-y"),
  scaleX: A.prop("--chakra-scale-x"),
  scaleY: A.prop("--chakra-scale-y"),
  scale: A.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: A.degreeT("--chakra-rotate")
}, xy = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: A.prop("transitionDuration", "transition.duration"),
  transitionProperty: A.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: A.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, Sy = {
  fontFamily: A.prop("fontFamily", "fonts"),
  fontSize: A.prop("fontSize", "fontSizes", We.px),
  fontWeight: A.prop("fontWeight", "fontWeights"),
  lineHeight: A.prop("lineHeight", "lineHeights"),
  letterSpacing: A.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, wy = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: A.spaceT("scrollMargin"),
  scrollMarginTop: A.spaceT("scrollMarginTop"),
  scrollMarginBottom: A.spaceT("scrollMarginBottom"),
  scrollMarginLeft: A.spaceT("scrollMarginLeft"),
  scrollMarginRight: A.spaceT("scrollMarginRight"),
  scrollMarginX: A.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: A.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: A.spaceT("scrollPadding"),
  scrollPaddingTop: A.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: A.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: A.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: A.spaceT("scrollPaddingRight"),
  scrollPaddingX: A.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: A.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function _y(e) {
  return _t(e) && e.reference ? e.reference : String(e);
}
var vl = (e, ...t) => t.map(_y).join(` ${e} `).replace(/calc/g, ""), Rh = (...e) => `calc(${vl("+", ...e)})`, $h = (...e) => `calc(${vl("-", ...e)})`, Tu = (...e) => `calc(${vl("*", ...e)})`, Nh = (...e) => `calc(${vl("/", ...e)})`, Oh = (e) => {
  const t = _y(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Tu(t, -1);
}, yn = Object.assign(
  (e) => ({
    add: (...t) => yn(Rh(e, ...t)),
    subtract: (...t) => yn($h(e, ...t)),
    multiply: (...t) => yn(Tu(e, ...t)),
    divide: (...t) => yn(Nh(e, ...t)),
    negate: () => yn(Oh(e)),
    toString: () => e.toString()
  }),
  {
    add: Rh,
    subtract: $h,
    multiply: Tu,
    divide: Nh,
    negate: Oh
  }
);
function _P(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function CP(e) {
  const t = _P(e.toString());
  return PP(kP(t));
}
function kP(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function PP(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Cy(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function ky(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function Py(e, t = "") {
  return CP(`--${Cy(e, t)}`);
}
function Se(e, t, r) {
  const n = Py(e, r);
  return {
    variable: n,
    reference: ky(n, t)
  };
}
function Ey(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, a] = n;
      r[o] = Se(`${e}-${o}`, a);
      continue;
    }
    r[n] = Se(`${e}-${n}`);
  }
  return r;
}
function EP(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function TP(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function Au(e) {
  if (e == null)
    return e;
  const { unitless: t } = TP(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var Ty = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Dd = (e) => Object.fromEntries(Object.entries(e).sort(Ty));
function Dh(e) {
  const t = Dd(e);
  return Object.assign(Object.values(t), t);
}
function AP(e) {
  const t = Object.keys(Dd(e));
  return new Set(t);
}
function jh(e) {
  var t;
  if (!e)
    return e;
  e = (t = Au(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function pa(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${Au(e)})`), t && r.push("and", `(max-width: ${Au(t)})`), r.join(" ");
}
function IP(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = Dh(e), n = Object.entries(e).sort(Ty).map(([i, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? jh(d) : void 0, {
      _minW: jh(s),
      breakpoint: i,
      minW: s,
      maxW: d,
      maxWQuery: pa(null, d),
      minWQuery: pa(s),
      minMaxQuery: pa(s, d)
    };
  }), o = AP(e), a = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(i) {
      const s = Object.keys(i);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Dd(e),
    asArray: Dh(e),
    details: n,
    get(i) {
      return n.find((s) => s.breakpoint === i);
    },
    media: [
      null,
      ...r.map((i) => pa(i)).slice(1)
    ],
    toArrayValue(i) {
      if (!_t(i))
        throw new Error("toArrayValue: value must be an object");
      const s = a.map((l) => {
        var c;
        return (c = i[l]) != null ? c : null;
      });
      for (; EP(s) === null; )
        s.pop();
      return s;
    },
    toObjectValue(i) {
      if (!Array.isArray(i))
        throw new Error("toObjectValue: value must be an array");
      return i.reduce((s, l, c) => {
        const u = a[c];
        return u != null && l != null && (s[u] = l), s;
      }, {});
    }
  };
}
var Dt = {
  hover: (e, t) => `${e}:hover ${t}, ${e}[data-hover] ${t}`,
  focus: (e, t) => `${e}:focus ${t}, ${e}[data-focus] ${t}`,
  focusVisible: (e, t) => `${e}:focus-visible ${t}`,
  focusWithin: (e, t) => `${e}:focus-within ${t}`,
  active: (e, t) => `${e}:active ${t}, ${e}[data-active] ${t}`,
  disabled: (e, t) => `${e}:disabled ${t}, ${e}[data-disabled] ${t}`,
  invalid: (e, t) => `${e}:invalid ${t}, ${e}[data-invalid] ${t}`,
  checked: (e, t) => `${e}:checked ${t}, ${e}[data-checked] ${t}`,
  indeterminate: (e, t) => `${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,
  readOnly: (e, t) => `${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,
  expanded: (e, t) => `${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,
  placeholderShown: (e, t) => `${e}:placeholder-shown ${t}`
}, fn = (e) => Ay((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), qr = (e) => Ay((t) => e(t, "~ &"), "[data-peer]", ".peer"), Ay = (e, ...t) => t.map(e).join(", "), oi = {
  _hover: "&:hover, &[data-hover]",
  _active: "&:active, &[data-active]",
  _focus: "&:focus, &[data-focus]",
  _highlighted: "&[data-highlighted]",
  _focusWithin: "&:focus-within",
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  _before: "&::before",
  _after: "&::after",
  _empty: "&:empty",
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  _checked: "&[aria-checked=true], &[data-checked]",
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  _valid: "&[data-valid], &[data-state=valid]",
  _loading: "&[data-loading], &[aria-busy=true]",
  _selected: "&[aria-selected=true], &[data-selected]",
  _hidden: "&[hidden], &[data-hidden]",
  _autofill: "&:-webkit-autofill",
  _even: "&:nth-of-type(even)",
  _odd: "&:nth-of-type(odd)",
  _first: "&:first-of-type",
  _firstLetter: "&::first-letter",
  _last: "&:last-of-type",
  _notFirst: "&:not(:first-of-type)",
  _notLast: "&:not(:last-of-type)",
  _visited: "&:visited",
  _activeLink: "&[aria-current=page]",
  _activeStep: "&[aria-current=step]",
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  _groupHover: fn(Dt.hover),
  _peerHover: qr(Dt.hover),
  _groupFocus: fn(Dt.focus),
  _peerFocus: qr(Dt.focus),
  _groupFocusVisible: fn(Dt.focusVisible),
  _peerFocusVisible: qr(Dt.focusVisible),
  _groupActive: fn(Dt.active),
  _peerActive: qr(Dt.active),
  _groupDisabled: fn(Dt.disabled),
  _peerDisabled: qr(Dt.disabled),
  _groupInvalid: fn(Dt.invalid),
  _peerInvalid: qr(Dt.invalid),
  _groupChecked: fn(Dt.checked),
  _peerChecked: qr(Dt.checked),
  _groupFocusWithin: fn(Dt.focusWithin),
  _peerFocusWithin: qr(Dt.focusWithin),
  _peerPlaceholderShown: qr(Dt.placeholderShown),
  _placeholder: "&::placeholder",
  _placeholderShown: "&:placeholder-shown",
  _fullScreen: "&:fullscreen",
  _selection: "&::selection",
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  _mediaDark: "@media (prefers-color-scheme: dark)",
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  _horizontal: "&[data-orientation=horizontal]",
  _vertical: "&[data-orientation=vertical]"
}, jd = Object.keys(
  oi
);
function Mh(e, t) {
  return Se(String(e).replace(/\./g, "-"), void 0, t);
}
function RP(e, t) {
  let r = {};
  const n = {};
  for (const [o, a] of Object.entries(e)) {
    const { isSemantic: i, value: s } = a, { variable: l, reference: c } = Mh(o, t == null ? void 0 : t.cssVarPrefix);
    if (!i) {
      if (o.startsWith("space")) {
        const f = o.split("."), [p, ...v] = f, m = `${p}.-${v.join(".")}`, g = yn.negate(s), b = yn.negate(c);
        n[m] = {
          value: g,
          var: l,
          varRef: b
        };
      }
      r[l] = s, n[o] = {
        value: s,
        var: l,
        varRef: c
      };
      continue;
    }
    const u = (f) => {
      const v = [String(o).split(".")[0], f].join(".");
      if (!e[v])
        return f;
      const { reference: g } = Mh(v, t == null ? void 0 : t.cssVarPrefix);
      return g;
    }, d = _t(s) ? s : { default: s };
    r = pr(
      r,
      Object.entries(d).reduce(
        (f, [p, v]) => {
          var m, g;
          if (!v)
            return f;
          const b = u(`${v}`);
          if (p === "default")
            return f[l] = b, f;
          const y = (g = (m = oi) == null ? void 0 : m[p]) != null ? g : p;
          return f[y] = { [l]: b }, f;
        },
        {}
      )
    ), n[o] = {
      value: c,
      var: l,
      varRef: c
    };
  }
  return {
    cssVars: r,
    cssMap: n
  };
}
function $P(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function NP(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function OP(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function Fh(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function a(i, s = []) {
    var l;
    if (OP(i) || Array.isArray(i)) {
      const c = {};
      for (const [u, d] of Object.entries(i)) {
        const f = (l = o == null ? void 0 : o(u)) != null ? l : u, p = [...s, f];
        if (n != null && n(i, p))
          return t(i, s);
        c[f] = a(d, p);
      }
      return c;
    }
    return t(i, s);
  }
  return a(e);
}
var DP = [
  "colors",
  "borders",
  "borderWidths",
  "borderStyles",
  "fonts",
  "fontSizes",
  "fontWeights",
  "gradients",
  "letterSpacings",
  "lineHeights",
  "radii",
  "space",
  "shadows",
  "sizes",
  "zIndices",
  "transition",
  "blur",
  "breakpoints"
];
function jP(e) {
  return NP(e, DP);
}
function MP(e) {
  return e.semanticTokens;
}
function FP(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var BP = (e) => jd.includes(e) || e === "default";
function Iy({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return Fh(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), Fh(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(BP)
    }
  ), r;
}
function Ry(e) {
  var t;
  const r = FP(e), n = jP(r), o = MP(r), a = Iy({ tokens: n, semanticTokens: o }), i = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = RP(a, { cssVarPrefix: i });
  return Object.assign(r, {
    __cssVars: { ...{
      "--chakra-ring-inset": "var(--chakra-empty,/*!*/ /*!*/)",
      "--chakra-ring-offset-width": "0px",
      "--chakra-ring-offset-color": "#fff",
      "--chakra-ring-color": "rgba(66, 153, 225, 0.6)",
      "--chakra-ring-offset-shadow": "0 0 #0000",
      "--chakra-ring-shadow": "0 0 #0000",
      "--chakra-space-x-reverse": "0",
      "--chakra-space-y-reverse": "0"
    }, ...l },
    __cssMap: s,
    __breakpoints: IP(r.breakpoints)
  }), r;
}
var gl = pr(
  {},
  Sa,
  ze,
  fy,
  ja,
  er,
  py,
  gy,
  hy,
  Od,
  vy,
  Po,
  Ns,
  nt,
  wy,
  Sy,
  yy,
  by,
  my,
  xy
), LP = Object.assign({}, nt, er, ja, Od, Po), Md = Object.keys(
  LP
), $y = [...Object.keys(gl), ...jd], VP = { ...gl, ...oi }, Ny = (e) => e in VP, zP = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, a = {};
  for (const i in e) {
    let s = Bt(e[i], t);
    if (s == null)
      continue;
    if (s = _t(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      a[i] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let c = 0; c < l; c += 1) {
      const u = o == null ? void 0 : o[c];
      if (!u) {
        a[i] = s[c];
        continue;
      }
      a[u] = a[u] || {}, s[c] != null && (a[u][i] = s[c]);
    }
  }
  return a;
};
function WP(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const a = e[o];
    a === "(" ? (n = !0, r += a) : a === ")" ? (n = !1, r += a) : a === "," && !n ? (t.push(r), r = "") : r += a;
  }
  return r = r.trim(), r && t.push(r), t;
}
function HP(e) {
  return /^var\(--.+\)$/.test(e);
}
var UP = (e, t) => e.startsWith("--") && typeof t == "string" && !HP(t), GP = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, a = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [i, s] = WP(t);
  return t = (n = (r = o(i)) != null ? r : a(s)) != null ? n : a(t), t;
};
function Oy(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (a, i = !1) => {
    var s, l, c;
    const u = Bt(a, n), d = zP(u)(n);
    let f = {};
    for (let p in d) {
      const v = d[p];
      let m = Bt(v, n);
      p in r && (p = r[p]), UP(p, m) && (m = GP(n, m));
      let g = t[p];
      if (g === !0 && (g = { property: p }), _t(m)) {
        f[p] = (s = f[p]) != null ? s : {}, f[p] = pr(
          {},
          f[p],
          o(m, !0)
        );
        continue;
      }
      let b = (c = (l = g == null ? void 0 : g.transform) == null ? void 0 : l.call(g, m, n, u)) != null ? c : m;
      b = g != null && g.processResult ? o(b, !0) : b;
      const y = Bt(g == null ? void 0 : g.property, n);
      if (!i && (g != null && g.static)) {
        const x = Bt(g.static, n);
        f = pr({}, f, x);
      }
      if (y && Array.isArray(y)) {
        for (const x of y)
          f[x] = b;
        continue;
      }
      if (y) {
        y === "&" && _t(b) ? f = pr({}, f, b) : f[y] = b;
        continue;
      }
      if (_t(b)) {
        f = pr({}, f, b);
        continue;
      }
      f[p] = b;
    }
    return f;
  };
  return o;
}
var Fd = (e) => (t) => Oy({
  theme: t,
  pseudos: oi,
  configs: gl
})(e);
function qP(e) {
  return e;
}
function KP(e) {
  return e;
}
function rt(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function YP(e, t) {
  if (Array.isArray(e))
    return e;
  if (_t(e))
    return t(e);
  if (e != null)
    return [e];
}
function XP(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function ZP(e) {
  const t = e.__breakpoints;
  return function(n, o, a, i) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = YP(a, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, f = d === 1, p = !!n.parts;
    for (let v = 0; v < d; v++) {
      const m = t.details[v], g = t.details[XP(u, v)], b = pa(m.minW, g == null ? void 0 : g._minW), y = Bt((s = n[o]) == null ? void 0 : s[u[v]], i);
      if (y) {
        if (p) {
          (l = n.parts) == null || l.forEach((x) => {
            pr(c, {
              [x]: f ? y[x] : { [b]: y[x] }
            });
          });
          continue;
        }
        if (!p) {
          f ? pr(c, y) : c[b] = y;
          continue;
        }
        c[b] = y;
      }
    }
    return c;
  };
}
function Dy(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: a } = t, i = ZP(a);
    return pr(
      {},
      Bt((r = e.baseStyle) != null ? r : {}, t),
      i(e, "sizes", o, t),
      i(e, "variants", n, t)
    );
  };
}
function Bd(e, t, r) {
  var n, o, a;
  return (a = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? a : r;
}
function Ee(e) {
  return $P(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var jy = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function My(e) {
  return _t(e) ? jy.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var JP = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, QP = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, eE = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, tE = {
  property: JP,
  easing: QP,
  duration: eE
}, rE = tE, nE = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, oE = nE, aE = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, iE = aE, sE = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, lE = sE, cE = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, uE = cE, dE = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, fE = dE, pE = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, hE = pE, mE = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, vE = mE, gE = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, Fy = gE, By = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, yE = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, bE = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, xE = {
  ...By,
  ...yE,
  container: bE
}, Ly = xE, Vy = {
  breakpoints: lE,
  zIndices: oE,
  radii: fE,
  blur: vE,
  colors: uE,
  ...Fy,
  sizes: Ly,
  shadows: hE,
  space: By,
  borders: iE,
  transition: rE
}, { defineMultiStyleConfig: SE, definePartsStyle: ha } = rt([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Kr = Se("stepper-indicator-size"), go = Se("stepper-icon-size"), yo = Se("stepper-title-font-size"), ma = Se("stepper-description-font-size"), ia = Se("stepper-accent-color"), wE = ha(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [ia.variable]: `colors.${e}.500`,
    _dark: {
      [ia.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: yo.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ma.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: yo.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: go.reference,
    height: go.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Kr.reference,
    height: Kr.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: ia.reference
    },
    "&[data-status=complete]": {
      bg: ia.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: ia.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${Kr.reference} - 8px)`,
      top: `calc(${Kr.reference} + 4px)`,
      insetStart: `calc(${Kr.reference} / 2 - 1px)`
    }
  }
})), _E = SE({
  baseStyle: wE,
  sizes: {
    xs: ha({
      stepper: {
        [Kr.variable]: "sizes.4",
        [go.variable]: "sizes.3",
        [yo.variable]: "fontSizes.xs",
        [ma.variable]: "fontSizes.xs"
      }
    }),
    sm: ha({
      stepper: {
        [Kr.variable]: "sizes.6",
        [go.variable]: "sizes.4",
        [yo.variable]: "fontSizes.sm",
        [ma.variable]: "fontSizes.xs"
      }
    }),
    md: ha({
      stepper: {
        [Kr.variable]: "sizes.8",
        [go.variable]: "sizes.5",
        [yo.variable]: "fontSizes.md",
        [ma.variable]: "fontSizes.sm"
      }
    }),
    lg: ha({
      stepper: {
        [Kr.variable]: "sizes.10",
        [go.variable]: "sizes.6",
        [yo.variable]: "fontSizes.lg",
        [ma.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Xe(e, t = {}) {
  let r = !1;
  function n() {
    if (!r) {
      r = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function o(...u) {
    n();
    for (const d of u)
      t[d] = l(d);
    return Xe(e, t);
  }
  function a(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return Xe(e, t);
  }
  function i() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, f]) => [d, f.className])
    );
  }
  function l(u) {
    const p = `chakra-${(["container", "root"].includes(u ?? "") ? [e] : [e, u]).filter(Boolean).join("__")}`;
    return {
      className: p,
      selector: `.${p}`,
      toString: () => u
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: a,
    selectors: i,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var CE = Xe("accordion").parts("root", "container", "button", "panel").extend("icon"), kE = Xe("alert").parts("title", "description", "container").extend("icon", "spinner"), PE = Xe("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), EE = Xe("breadcrumb").parts("link", "item", "container").extend("separator");
Xe("button").parts();
var TE = Xe("checkbox").parts("control", "icon", "container").extend("label");
Xe("progress").parts("track", "filledTrack").extend("label");
var AE = Xe("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), IE = Xe("editable").parts(
  "preview",
  "input",
  "textarea"
), RE = Xe("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), $E = Xe("formError").parts("text", "icon"), NE = Xe("input").parts("addon", "field", "element"), OE = Xe("list").parts("container", "item", "icon"), DE = Xe("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), jE = Xe("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), ME = Xe("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Xe("pininput").parts("field");
var FE = Xe("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), BE = Xe("progress").parts(
  "label",
  "filledTrack",
  "track"
), LE = Xe("radio").parts(
  "container",
  "control",
  "label"
), VE = Xe("select").parts("field", "icon"), zE = Xe("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), WE = Xe("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), HE = Xe("switch").parts(
  "container",
  "track",
  "thumb"
), UE = Xe("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), GE = Xe("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), qE = Xe("tag").parts(
  "container",
  "label",
  "closeButton"
), KE = Xe("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function Vn(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class YE extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var va = YE;
function Ld(e) {
  if (typeof e != "string")
    throw new va(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = nT.test(e) ? JE(e) : e;
  const r = QE.exec(t);
  if (r) {
    const i = Array.from(r).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(Ma(s, 2), 16)), parseInt(Ma(i[3] || "f", 2), 16) / 255];
  }
  const n = eT.exec(t);
  if (n) {
    const i = Array.from(n).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(i[3] || "ff", 16) / 255];
  }
  const o = tT.exec(t);
  if (o) {
    const i = Array.from(o).slice(1);
    return [...i.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(i[3] || "1")];
  }
  const a = rT.exec(t);
  if (a) {
    const [i, s, l, c] = Array.from(a).slice(1).map(parseFloat);
    if (Vn(0, 100, s) !== s)
      throw new va(e);
    if (Vn(0, 100, l) !== l)
      throw new va(e);
    return [...oT(i, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new va(e);
}
function XE(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const Bh = (e) => parseInt(e.replace(/_/g, ""), 36), ZE = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = Bh(t.substring(0, 3)), n = Bh(t.substring(3)).toString(16);
  let o = "";
  for (let a = 0; a < 6 - n.length; a++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function JE(e) {
  const t = e.toLowerCase().trim(), r = ZE[XE(t)];
  if (!r)
    throw new va(e);
  return `#${r}`;
}
const Ma = (e, t) => Array.from(Array(t)).map(() => e).join(""), QE = new RegExp(`^#${Ma("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), eT = new RegExp(`^#${Ma("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), tT = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Ma(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), rT = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, nT = /^[a-z]+$/i, Lh = (e) => Math.round(e * 255), oT = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(Lh);
  const o = (e % 360 + 360) % 360 / 60, a = (1 - Math.abs(2 * n - 1)) * (t / 100), i = a * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = a, l = i) : o >= 1 && o < 2 ? (s = i, l = a) : o >= 2 && o < 3 ? (l = a, c = i) : o >= 3 && o < 4 ? (l = i, c = a) : o >= 4 && o < 5 ? (s = i, c = a) : o >= 5 && o < 6 && (s = a, c = i);
  const u = n - a / 2, d = s + u, f = l + u, p = c + u;
  return [d, f, p].map(Lh);
};
function aT(e, t, r, n) {
  return `rgba(${Vn(0, 255, e).toFixed()}, ${Vn(0, 255, t).toFixed()}, ${Vn(0, 255, r).toFixed()}, ${parseFloat(Vn(0, 1, n).toFixed(3))})`;
}
function iT(e, t) {
  const [r, n, o, a] = Ld(e);
  return aT(r, n, o, a - t);
}
function sT(e) {
  const [t, r, n, o] = Ld(e);
  let a = (i) => {
    const s = Vn(0, 255, i).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${a(t)}${a(r)}${a(n)}${o < 1 ? a(Math.round(o * 255)) : ""}`;
}
function lT(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var cT = (e) => Object.keys(e).length === 0, Os = (e, t, r) => {
  const n = lT(e, `colors.${t}`, t);
  try {
    return sT(n), n;
  } catch {
    return r ?? "#000000";
  }
}, Cr = (e, t, r) => {
  var n;
  return (n = Bd(e, "colors", t)) != null ? n : r;
}, uT = (e) => {
  const [t, r, n] = Ld(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, dT = (e) => (t) => {
  const r = Os(t, e);
  return uT(r) < 128 ? "dark" : "light";
}, fT = (e) => (t) => dT(e)(t) === "dark", Wo = (e, t) => (r) => {
  const n = Os(r, e);
  return iT(n, 1 - t);
};
function Vh(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var pT = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function hT(e) {
  const t = pT();
  return !e || cT(e) ? t : e.string && e.colors ? vT(e.string, e.colors) : e.string && !e.colors ? mT(e.string) : e.colors && !e.string ? gT(e.colors) : t;
}
function mT(e) {
  let t = 0;
  if (e.length === 0)
    return t.toString();
  for (let n = 0; n < e.length; n += 1)
    t = e.charCodeAt(n) + ((t << 5) - t), t = t & t;
  let r = "#";
  for (let n = 0; n < 3; n += 1) {
    const o = t >> n * 8 & 255;
    r += `00${o.toString(16)}`.substr(-2);
  }
  return r;
}
function vT(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function gT(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function xe(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Vd(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function zy(e) {
  return _t(e) && e.reference ? e.reference : String(e);
}
var yl = (e, ...t) => t.map(zy).join(` ${e} `).replace(/calc/g, ""), zh = (...e) => `calc(${yl("+", ...e)})`, Wh = (...e) => `calc(${yl("-", ...e)})`, Iu = (...e) => `calc(${yl("*", ...e)})`, Hh = (...e) => `calc(${yl("/", ...e)})`, Uh = (e) => {
  const t = zy(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Iu(t, -1);
}, Yr = Object.assign(
  (e) => ({
    add: (...t) => Yr(zh(e, ...t)),
    subtract: (...t) => Yr(Wh(e, ...t)),
    multiply: (...t) => Yr(Iu(e, ...t)),
    divide: (...t) => Yr(Hh(e, ...t)),
    negate: () => Yr(Uh(e)),
    toString: () => e.toString()
  }),
  {
    add: zh,
    subtract: Wh,
    multiply: Iu,
    divide: Hh,
    negate: Uh
  }
);
function yT(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function bT(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Wy(e) {
  const t = bT(e.toString());
  return t.includes("\\.") ? e : yT(e) ? t.replace(".", "\\.") : e;
}
function xT(e, t = "") {
  return [t, Wy(e)].filter(Boolean).join("-");
}
function ST(e, t) {
  return `var(${Wy(e)}${t ? `, ${t}` : ""})`;
}
function wT(e, t = "") {
  return `--${xT(e, t)}`;
}
function At(e, t) {
  const r = wT(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: ST(r, _T(t == null ? void 0 : t.fallback))
  };
}
function _T(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: CT, definePartsStyle: ss } = rt(HE.keys), wa = At("switch-track-width"), Wn = At("switch-track-height"), bc = At("switch-track-diff"), kT = Yr.subtract(wa, Wn), Ru = At("switch-thumb-x"), sa = At("switch-bg"), PT = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [wa.reference],
    height: [Wn.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [sa.variable]: "colors.gray.300",
    _dark: {
      [sa.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [sa.variable]: `colors.${t}.500`,
      _dark: {
        [sa.variable]: `colors.${t}.200`
      }
    },
    bg: sa.reference
  };
}, ET = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [Wn.reference],
  height: [Wn.reference],
  _checked: {
    transform: `translateX(${Ru.reference})`
  }
}, TT = ss((e) => ({
  container: {
    [bc.variable]: kT,
    [Ru.variable]: bc.reference,
    _rtl: {
      [Ru.variable]: Yr(bc).negate().toString()
    }
  },
  track: PT(e),
  thumb: ET
})), AT = {
  sm: ss({
    container: {
      [wa.variable]: "1.375rem",
      [Wn.variable]: "sizes.3"
    }
  }),
  md: ss({
    container: {
      [wa.variable]: "1.875rem",
      [Wn.variable]: "sizes.4"
    }
  }),
  lg: ss({
    container: {
      [wa.variable]: "2.875rem",
      [Wn.variable]: "sizes.6"
    }
  })
}, IT = CT({
  baseStyle: TT,
  sizes: AT,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: RT, definePartsStyle: Eo } = rt(UE.keys), $T = Eo({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), Ds = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, NT = Eo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: xe("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: xe(`${t}.100`, `${t}.700`)(e),
      ...Ds
    },
    td: {
      borderBottom: "1px",
      borderColor: xe(`${t}.100`, `${t}.700`)(e),
      ...Ds
    },
    caption: {
      color: xe("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), OT = Eo((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: xe("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: xe(`${t}.100`, `${t}.700`)(e),
      ...Ds
    },
    td: {
      borderBottom: "1px",
      borderColor: xe(`${t}.100`, `${t}.700`)(e),
      ...Ds
    },
    caption: {
      color: xe("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: xe(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: xe(`${t}.100`, `${t}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), DT = {
  simple: NT,
  striped: OT,
  unstyled: {}
}, jT = {
  sm: Eo({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: Eo({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: Eo({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, MT = RT({
  baseStyle: $T,
  variants: DT,
  sizes: jT,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Ut = Se("tabs-color"), _r = Se("tabs-bg"), Li = Se("tabs-border-color"), { defineMultiStyleConfig: FT, definePartsStyle: Br } = rt(GE.keys), BT = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, LT = (e) => {
  const { isFitted: t } = e;
  return {
    flex: t ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, VT = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, zT = {
  p: 4
}, WT = Br((e) => ({
  root: BT(e),
  tab: LT(e),
  tablist: VT(e),
  tabpanel: zT
})), HT = {
  sm: Br({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Br({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Br({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, UT = Br((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", a = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [a]: "-2px",
      _selected: {
        [Ut.variable]: `colors.${t}.600`,
        _dark: {
          [Ut.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [_r.variable]: "colors.gray.200",
        _dark: {
          [_r.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Ut.reference,
      bg: _r.reference
    }
  };
}), GT = Br((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [Li.variable]: "transparent",
      _selected: {
        [Ut.variable]: `colors.${t}.600`,
        [Li.variable]: "colors.white",
        _dark: {
          [Ut.variable]: `colors.${t}.300`,
          [Li.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: Li.reference
      },
      color: Ut.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), qT = Br((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [_r.variable]: "colors.gray.50",
      _dark: {
        [_r.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [_r.variable]: "colors.white",
        [Ut.variable]: `colors.${t}.600`,
        _dark: {
          [_r.variable]: "colors.gray.800",
          [Ut.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Ut.reference,
      bg: _r.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), KT = Br((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: Os(r, `${t}.700`),
        bg: Os(r, `${t}.100`)
      }
    }
  };
}), YT = Br((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Ut.variable]: "colors.gray.600",
      _dark: {
        [Ut.variable]: "inherit"
      },
      _selected: {
        [Ut.variable]: "colors.white",
        [_r.variable]: `colors.${t}.600`,
        _dark: {
          [Ut.variable]: "colors.gray.800",
          [_r.variable]: `colors.${t}.300`
        }
      },
      color: Ut.reference,
      bg: _r.reference
    }
  };
}), XT = Br({}), ZT = {
  line: UT,
  enclosed: GT,
  "enclosed-colored": qT,
  "soft-rounded": KT,
  "solid-rounded": YT,
  unstyled: XT
}, JT = FT({
  baseStyle: WT,
  sizes: HT,
  variants: ZT,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), wt = Ey("badge", ["bg", "color", "shadow"]), QT = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: wt.bg.reference,
  color: wt.color.reference,
  boxShadow: wt.shadow.reference
}, eA = (e) => {
  const { colorScheme: t, theme: r } = e, n = Wo(`${t}.500`, 0.6)(r);
  return {
    [wt.bg.variable]: `colors.${t}.500`,
    [wt.color.variable]: "colors.white",
    _dark: {
      [wt.bg.variable]: n,
      [wt.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, tA = (e) => {
  const { colorScheme: t, theme: r } = e, n = Wo(`${t}.200`, 0.16)(r);
  return {
    [wt.bg.variable]: `colors.${t}.100`,
    [wt.color.variable]: `colors.${t}.800`,
    _dark: {
      [wt.bg.variable]: n,
      [wt.color.variable]: `colors.${t}.200`
    }
  };
}, rA = (e) => {
  const { colorScheme: t, theme: r } = e, n = Wo(`${t}.200`, 0.8)(r);
  return {
    [wt.color.variable]: `colors.${t}.500`,
    _dark: {
      [wt.color.variable]: n
    },
    [wt.shadow.variable]: `inset 0 0 0px 1px ${wt.color.reference}`
  };
}, nA = {
  solid: eA,
  subtle: tA,
  outline: rA
}, _a = {
  baseStyle: QT,
  variants: nA,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: oA, definePartsStyle: Hn } = rt(qE.keys), Gh = Se("tag-bg"), qh = Se("tag-color"), xc = Se("tag-shadow"), ls = Se("tag-min-height"), cs = Se("tag-min-width"), us = Se("tag-font-size"), ds = Se("tag-padding-inline"), aA = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [qh.variable]: wt.color.reference,
  [Gh.variable]: wt.bg.reference,
  [xc.variable]: wt.shadow.reference,
  color: qh.reference,
  bg: Gh.reference,
  boxShadow: xc.reference,
  borderRadius: "md",
  minH: ls.reference,
  minW: cs.reference,
  fontSize: us.reference,
  px: ds.reference,
  _focusVisible: {
    [xc.variable]: "shadows.outline"
  }
}, iA = {
  lineHeight: 1.2,
  overflow: "visible"
}, sA = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, lA = Hn({
  container: aA,
  label: iA,
  closeButton: sA
}), cA = {
  sm: Hn({
    container: {
      [ls.variable]: "sizes.5",
      [cs.variable]: "sizes.5",
      [us.variable]: "fontSizes.xs",
      [ds.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Hn({
    container: {
      [ls.variable]: "sizes.6",
      [cs.variable]: "sizes.6",
      [us.variable]: "fontSizes.sm",
      [ds.variable]: "space.2"
    }
  }),
  lg: Hn({
    container: {
      [ls.variable]: "sizes.8",
      [cs.variable]: "sizes.8",
      [us.variable]: "fontSizes.md",
      [ds.variable]: "space.3"
    }
  })
}, uA = {
  subtle: Hn((e) => {
    var t;
    return {
      container: (t = _a.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: Hn((e) => {
    var t;
    return {
      container: (t = _a.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: Hn((e) => {
    var t;
    return {
      container: (t = _a.variants) == null ? void 0 : t.outline(e)
    };
  })
}, dA = oA({
  variants: uA,
  baseStyle: lA,
  sizes: cA,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Xr, defineMultiStyleConfig: fA } = rt(NE.keys), pA = Xr({
  field: {
    width: "100%",
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), pn = {
  lg: {
    fontSize: "lg",
    px: "4",
    h: "12",
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    px: "4",
    h: "10",
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    px: "3",
    h: "8",
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    px: "2",
    h: "6",
    borderRadius: "sm"
  }
}, hA = {
  lg: Xr({
    field: pn.lg,
    addon: pn.lg
  }),
  md: Xr({
    field: pn.md,
    addon: pn.md
  }),
  sm: Xr({
    field: pn.sm,
    addon: pn.sm
  }),
  xs: Xr({
    field: pn.xs,
    addon: pn.xs
  })
};
function zd(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || xe("blue.500", "blue.300")(e),
    errorBorderColor: r || xe("red.500", "red.300")(e)
  };
}
var mA = Xr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = zd(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: xe("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Cr(t, n),
        boxShadow: `0 0 0 1px ${Cr(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: Cr(t, r),
        boxShadow: `0 0 0 1px ${Cr(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: xe("inherit", "whiteAlpha.50")(e),
      bg: xe("gray.100", "whiteAlpha.300")(e)
    }
  };
}), vA = Xr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = zd(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: xe("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: xe("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Cr(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: Cr(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: xe("gray.100", "whiteAlpha.50")(e)
    }
  };
}), gA = Xr((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = zd(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: Cr(t, n),
        boxShadow: `0px 1px 0px 0px ${Cr(t, n)}`
      },
      _focusVisible: {
        borderColor: Cr(t, r),
        boxShadow: `0px 1px 0px 0px ${Cr(t, r)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), yA = Xr({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), bA = {
  outline: mA,
  filled: vA,
  flushed: gA,
  unstyled: yA
}, Ge = fA({
  baseStyle: pA,
  sizes: hA,
  variants: bA,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), Kh, xA = {
  ...(Kh = Ge.baseStyle) == null ? void 0 : Kh.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Yh, Xh, SA = {
  outline: (e) => {
    var t, r;
    return (r = (t = Ge.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = Ge.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = Ge.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (Xh = (Yh = Ge.variants) == null ? void 0 : Yh.unstyled.field) != null ? Xh : {}
}, Zh, Jh, Qh, em, tm, rm, nm, om, wA = {
  xs: (Jh = (Zh = Ge.sizes) == null ? void 0 : Zh.xs.field) != null ? Jh : {},
  sm: (em = (Qh = Ge.sizes) == null ? void 0 : Qh.sm.field) != null ? em : {},
  md: (rm = (tm = Ge.sizes) == null ? void 0 : tm.md.field) != null ? rm : {},
  lg: (om = (nm = Ge.sizes) == null ? void 0 : nm.lg.field) != null ? om : {}
}, _A = {
  baseStyle: xA,
  sizes: wA,
  variants: SA,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, Vi = At("tooltip-bg"), Sc = At("tooltip-fg"), CA = At("popper-arrow-bg"), kA = {
  bg: Vi.reference,
  color: Sc.reference,
  [Vi.variable]: "colors.gray.700",
  [Sc.variable]: "colors.whiteAlpha.900",
  _dark: {
    [Vi.variable]: "colors.gray.300",
    [Sc.variable]: "colors.gray.900"
  },
  [CA.variable]: Vi.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, PA = {
  baseStyle: kA
}, { defineMultiStyleConfig: EA, definePartsStyle: ga } = rt(BE.keys), TA = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, a = xe(
    Vh(),
    Vh("1rem", "rgba(0,0,0,0.1)")
  )(e), i = xe(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${Cr(r, i)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && a,
    ...n ? { bgImage: s } : { bgColor: i }
  };
}, AA = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, IA = (e) => ({
  bg: xe("gray.100", "whiteAlpha.300")(e)
}), RA = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...TA(e)
}), $A = ga((e) => ({
  label: AA,
  filledTrack: RA(e),
  track: IA(e)
})), NA = {
  xs: ga({
    track: { h: "1" }
  }),
  sm: ga({
    track: { h: "2" }
  }),
  md: ga({
    track: { h: "3" }
  }),
  lg: ga({
    track: { h: "4" }
  })
}, OA = EA({
  sizes: NA,
  baseStyle: $A,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), DA = (e) => typeof e == "function";
function Vt(e, ...t) {
  return DA(e) ? e(...t) : e;
}
var { definePartsStyle: fs, defineMultiStyleConfig: jA } = rt(TE.keys), Ca = Se("checkbox-size"), MA = (e) => {
  const { colorScheme: t } = e;
  return {
    w: Ca.reference,
    h: Ca.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: xe(`${t}.500`, `${t}.200`)(e),
      borderColor: xe(`${t}.500`, `${t}.200`)(e),
      color: xe("white", "gray.900")(e),
      _hover: {
        bg: xe(`${t}.600`, `${t}.300`)(e),
        borderColor: xe(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: xe("gray.200", "transparent")(e),
        bg: xe("gray.200", "whiteAlpha.300")(e),
        color: xe("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: xe(`${t}.500`, `${t}.200`)(e),
      borderColor: xe(`${t}.500`, `${t}.200`)(e),
      color: xe("white", "gray.900")(e)
    },
    _disabled: {
      bg: xe("gray.100", "whiteAlpha.100")(e),
      borderColor: xe("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: xe("red.500", "red.300")(e)
    }
  };
}, FA = {
  _disabled: { cursor: "not-allowed" }
}, BA = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, LA = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, VA = fs((e) => ({
  icon: LA,
  container: FA,
  control: Vt(MA, e),
  label: BA
})), zA = {
  sm: fs({
    control: { [Ca.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: fs({
    control: { [Ca.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: fs({
    control: { [Ca.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, js = jA({
  baseStyle: VA,
  sizes: zA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: WA, definePartsStyle: ps } = rt(LE.keys), HA = (e) => {
  var t;
  const r = (t = Vt(js.baseStyle, e)) == null ? void 0 : t.control;
  return {
    ...r,
    borderRadius: "full",
    _checked: {
      ...r == null ? void 0 : r._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, UA = ps((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = js).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = js).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: HA(e)
  };
}), GA = {
  md: ps({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: ps({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: ps({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, qA = WA({
  baseStyle: UA,
  sizes: GA,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: KA, definePartsStyle: YA } = rt(VE.keys), zi = Se("select-bg"), am, XA = {
  ...(am = Ge.baseStyle) == null ? void 0 : am.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: zi.reference,
  [zi.variable]: "colors.white",
  _dark: {
    [zi.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: zi.reference
  }
}, ZA = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, JA = YA({
  field: XA,
  icon: ZA
}), Wi = {
  paddingInlineEnd: "8"
}, im, sm, lm, cm, um, dm, fm, pm, QA = {
  lg: {
    ...(im = Ge.sizes) == null ? void 0 : im.lg,
    field: {
      ...(sm = Ge.sizes) == null ? void 0 : sm.lg.field,
      ...Wi
    }
  },
  md: {
    ...(lm = Ge.sizes) == null ? void 0 : lm.md,
    field: {
      ...(cm = Ge.sizes) == null ? void 0 : cm.md.field,
      ...Wi
    }
  },
  sm: {
    ...(um = Ge.sizes) == null ? void 0 : um.sm,
    field: {
      ...(dm = Ge.sizes) == null ? void 0 : dm.sm.field,
      ...Wi
    }
  },
  xs: {
    ...(fm = Ge.sizes) == null ? void 0 : fm.xs,
    field: {
      ...(pm = Ge.sizes) == null ? void 0 : pm.xs.field,
      ...Wi
    },
    icon: {
      insetEnd: "1"
    }
  }
}, eI = KA({
  baseStyle: JA,
  sizes: QA,
  variants: Ge.variants,
  defaultProps: Ge.defaultProps
}), wc = Se("skeleton-start-color"), _c = Se("skeleton-end-color"), tI = {
  [wc.variable]: "colors.gray.100",
  [_c.variable]: "colors.gray.400",
  _dark: {
    [wc.variable]: "colors.gray.800",
    [_c.variable]: "colors.gray.600"
  },
  background: wc.reference,
  borderColor: _c.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, rI = {
  baseStyle: tI
}, Cc = Se("skip-link-bg"), nI = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [Cc.variable]: "colors.white",
    _dark: {
      [Cc.variable]: "colors.gray.700"
    },
    bg: Cc.reference
  }
}, oI = {
  baseStyle: nI
}, { defineMultiStyleConfig: aI, definePartsStyle: bl } = rt(zE.keys), Fa = Se("slider-thumb-size"), Ba = Se("slider-track-size"), bn = Se("slider-bg"), iI = (e) => {
  const { orientation: t } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...Vd({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, sI = (e) => ({
  ...Vd({
    orientation: e.orientation,
    horizontal: { h: Ba.reference },
    vertical: { w: Ba.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [bn.variable]: "colors.gray.200",
  _dark: {
    [bn.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [bn.variable]: "colors.gray.300",
    _dark: {
      [bn.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: bn.reference
}), lI = (e) => {
  const { orientation: t } = e;
  return {
    ...Vd({
      orientation: t,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Fa.reference,
    h: Fa.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, cI = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [bn.variable]: `colors.${t}.500`,
    _dark: {
      [bn.variable]: `colors.${t}.200`
    },
    bg: bn.reference
  };
}, uI = bl((e) => ({
  container: iI(e),
  track: sI(e),
  thumb: lI(e),
  filledTrack: cI(e)
})), dI = bl({
  container: {
    [Fa.variable]: "sizes.4",
    [Ba.variable]: "sizes.1"
  }
}), fI = bl({
  container: {
    [Fa.variable]: "sizes.3.5",
    [Ba.variable]: "sizes.1"
  }
}), pI = bl({
  container: {
    [Fa.variable]: "sizes.2.5",
    [Ba.variable]: "sizes.0.5"
  }
}), hI = {
  lg: dI,
  md: fI,
  sm: pI
}, mI = aI({
  baseStyle: uI,
  sizes: hI,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Ln = At("spinner-size"), vI = {
  width: [Ln.reference],
  height: [Ln.reference]
}, gI = {
  xs: {
    [Ln.variable]: "sizes.3"
  },
  sm: {
    [Ln.variable]: "sizes.4"
  },
  md: {
    [Ln.variable]: "sizes.6"
  },
  lg: {
    [Ln.variable]: "sizes.8"
  },
  xl: {
    [Ln.variable]: "sizes.12"
  }
}, yI = {
  baseStyle: vI,
  sizes: gI,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: bI, definePartsStyle: Hy } = rt(WE.keys), xI = {
  fontWeight: "medium"
}, SI = {
  opacity: 0.8,
  marginBottom: "2"
}, wI = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, _I = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, CI = Hy({
  container: {},
  label: xI,
  helpText: SI,
  number: wI,
  icon: _I
}), kI = {
  md: Hy({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, PI = bI({
  baseStyle: CI,
  sizes: kI,
  defaultProps: {
    size: "md"
  }
}), kc = Se("kbd-bg"), EI = {
  [kc.variable]: "colors.gray.100",
  _dark: {
    [kc.variable]: "colors.whiteAlpha.100"
  },
  bg: kc.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, TI = {
  baseStyle: EI
}, AI = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, II = {
  baseStyle: AI
}, { defineMultiStyleConfig: RI, definePartsStyle: $I } = rt(OE.keys), NI = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, OI = $I({
  icon: NI
}), DI = RI({
  baseStyle: OI
}), { defineMultiStyleConfig: jI, definePartsStyle: MI } = rt(DE.keys), Nr = Se("menu-bg"), Pc = Se("menu-shadow"), FI = {
  [Nr.variable]: "#fff",
  [Pc.variable]: "shadows.sm",
  _dark: {
    [Nr.variable]: "colors.gray.700",
    [Pc.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Nr.reference,
  boxShadow: Pc.reference
}, BI = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Nr.variable]: "colors.gray.100",
    _dark: {
      [Nr.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Nr.variable]: "colors.gray.200",
    _dark: {
      [Nr.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Nr.variable]: "colors.gray.100",
    _dark: {
      [Nr.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Nr.reference
}, LI = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, VI = {
  opacity: 0.6
}, zI = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, WI = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, HI = MI({
  button: WI,
  list: FI,
  item: BI,
  groupTitle: LI,
  command: VI,
  divider: zI
}), UI = jI({
  baseStyle: HI
}), { defineMultiStyleConfig: GI, definePartsStyle: $u } = rt(jE.keys), Ec = Se("modal-bg"), Tc = Se("modal-shadow"), qI = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, KI = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, YI = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Ec.variable]: "colors.white",
    [Tc.variable]: "shadows.lg",
    _dark: {
      [Ec.variable]: "colors.gray.700",
      [Tc.variable]: "shadows.dark-lg"
    },
    bg: Ec.reference,
    boxShadow: Tc.reference
  };
}, XI = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, ZI = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, JI = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, QI = {
  px: "6",
  py: "4"
}, eR = $u((e) => ({
  overlay: qI,
  dialogContainer: Vt(KI, e),
  dialog: Vt(YI, e),
  header: XI,
  closeButton: ZI,
  body: Vt(JI, e),
  footer: QI
}));
function br(e) {
  return $u(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var tR = {
  xs: br("xs"),
  sm: br("sm"),
  md: br("md"),
  lg: br("lg"),
  xl: br("xl"),
  "2xl": br("2xl"),
  "3xl": br("3xl"),
  "4xl": br("4xl"),
  "5xl": br("5xl"),
  "6xl": br("6xl"),
  full: br("full")
}, rR = GI({
  baseStyle: eR,
  sizes: tR,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: nR, definePartsStyle: Uy } = rt(ME.keys), Wd = At("number-input-stepper-width"), Gy = At("number-input-input-padding"), oR = Yr(Wd).add("0.5rem").toString(), Ac = At("number-input-bg"), Ic = At("number-input-color"), Rc = At("number-input-border-color"), aR = {
  [Wd.variable]: "sizes.6",
  [Gy.variable]: oR
}, iR = (e) => {
  var t, r;
  return (r = (t = Vt(Ge.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, sR = {
  width: Wd.reference
}, lR = {
  borderStart: "1px solid",
  borderStartColor: Rc.reference,
  color: Ic.reference,
  bg: Ac.reference,
  [Ic.variable]: "colors.chakra-body-text",
  [Rc.variable]: "colors.chakra-border-color",
  _dark: {
    [Ic.variable]: "colors.whiteAlpha.800",
    [Rc.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Ac.variable]: "colors.gray.200",
    _dark: {
      [Ac.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, cR = Uy((e) => {
  var t;
  return {
    root: aR,
    field: (t = Vt(iR, e)) != null ? t : {},
    stepperGroup: sR,
    stepper: lR
  };
});
function Hi(e) {
  var t, r, n;
  const o = (t = Ge.sizes) == null ? void 0 : t[e], a = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, i = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = Fy.fontSizes[i];
  return Uy({
    field: {
      ...o.field,
      paddingInlineEnd: Gy.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Yr(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: a[e]
      },
      _last: {
        borderBottomEndRadius: a[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var uR = {
  xs: Hi("xs"),
  sm: Hi("sm"),
  md: Hi("md"),
  lg: Hi("lg")
}, dR = nR({
  baseStyle: cR,
  sizes: uR,
  variants: Ge.variants,
  defaultProps: Ge.defaultProps
}), hm, fR = {
  ...(hm = Ge.baseStyle) == null ? void 0 : hm.field,
  textAlign: "center"
}, pR = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, mm, vm, hR = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = Vt((t = Ge.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = Vt((t = Ge.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = Vt((t = Ge.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (vm = (mm = Ge.variants) == null ? void 0 : mm.unstyled.field) != null ? vm : {}
}, mR = {
  baseStyle: fR,
  sizes: pR,
  variants: hR,
  defaultProps: Ge.defaultProps
}, { defineMultiStyleConfig: vR, definePartsStyle: gR } = rt(FE.keys), Ui = At("popper-bg"), yR = At("popper-arrow-bg"), gm = At("popper-arrow-shadow-color"), bR = { zIndex: 10 }, xR = {
  [Ui.variable]: "colors.white",
  bg: Ui.reference,
  [yR.variable]: Ui.reference,
  [gm.variable]: "colors.gray.200",
  _dark: {
    [Ui.variable]: "colors.gray.700",
    [gm.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, SR = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, wR = {
  px: 3,
  py: 2
}, _R = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, CR = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, kR = gR({
  popper: bR,
  content: xR,
  header: SR,
  body: wR,
  footer: _R,
  closeButton: CR
}), PR = vR({
  baseStyle: kR
}), { definePartsStyle: Nu, defineMultiStyleConfig: ER } = rt(AE.keys), $c = Se("drawer-bg"), Nc = Se("drawer-box-shadow");
function so(e) {
  return Nu(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var TR = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, AR = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, IR = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$c.variable]: "colors.white",
    [Nc.variable]: "shadows.lg",
    _dark: {
      [$c.variable]: "colors.gray.700",
      [Nc.variable]: "shadows.dark-lg"
    },
    bg: $c.reference,
    boxShadow: Nc.reference
  };
}, RR = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, $R = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, NR = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, OR = {
  px: "6",
  py: "4"
}, DR = Nu((e) => ({
  overlay: TR,
  dialogContainer: AR,
  dialog: Vt(IR, e),
  header: RR,
  closeButton: $R,
  body: NR,
  footer: OR
})), jR = {
  xs: so("xs"),
  sm: so("md"),
  md: so("lg"),
  lg: so("2xl"),
  xl: so("4xl"),
  full: so("full")
}, MR = ER({
  baseStyle: DR,
  sizes: jR,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: FR, defineMultiStyleConfig: BR } = rt(IE.keys), LR = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, VR = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, zR = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, WR = FR({
  preview: LR,
  input: VR,
  textarea: zR
}), HR = BR({
  baseStyle: WR
}), { definePartsStyle: UR, defineMultiStyleConfig: GR } = rt(RE.keys), To = Se("form-control-color"), qR = {
  marginStart: "1",
  [To.variable]: "colors.red.500",
  _dark: {
    [To.variable]: "colors.red.300"
  },
  color: To.reference
}, KR = {
  mt: "2",
  [To.variable]: "colors.gray.600",
  _dark: {
    [To.variable]: "colors.whiteAlpha.600"
  },
  color: To.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, YR = UR({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: qR,
  helperText: KR
}), XR = GR({
  baseStyle: YR
}), { definePartsStyle: ZR, defineMultiStyleConfig: JR } = rt($E.keys), Ao = Se("form-error-color"), QR = {
  [Ao.variable]: "colors.red.500",
  _dark: {
    [Ao.variable]: "colors.red.300"
  },
  color: Ao.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, e$ = {
  marginEnd: "0.5em",
  [Ao.variable]: "colors.red.500",
  _dark: {
    [Ao.variable]: "colors.red.300"
  },
  color: Ao.reference
}, t$ = ZR({
  text: QR,
  icon: e$
}), r$ = JR({
  baseStyle: t$
}), n$ = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, o$ = {
  baseStyle: n$
}, a$ = {
  fontFamily: "heading",
  fontWeight: "bold"
}, i$ = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, s$ = {
  baseStyle: a$,
  sizes: i$,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: l$, definePartsStyle: c$ } = rt(EE.keys), Oc = Se("breadcrumb-link-decor"), u$ = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Oc.reference,
  [Oc.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Oc.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, d$ = c$({
  link: u$
}), f$ = l$({
  baseStyle: d$
}), p$ = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, qy = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: xe("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: xe("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: xe("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Wo(`${t}.200`, 0.12)(r), o = Wo(`${t}.200`, 0.24)(r);
  return {
    color: xe(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: xe(`${t}.50`, n)(e)
    },
    _active: {
      bg: xe(`${t}.100`, o)(e)
    }
  };
}, h$ = (e) => {
  const { colorScheme: t } = e, r = xe("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...Vt(qy, e)
  };
}, m$ = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, v$ = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = xe("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: xe("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: xe("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: xe("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: a = `${r}.600`,
    activeBg: i = `${r}.700`
  } = (t = m$[r]) != null ? t : {}, s = xe(n, `${r}.200`)(e);
  return {
    bg: s,
    color: xe(o, "gray.800")(e),
    _hover: {
      bg: xe(a, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: xe(i, `${r}.400`)(e) }
  };
}, g$ = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: xe(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: xe(`${t}.700`, `${t}.500`)(e)
    }
  };
}, y$ = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, b$ = {
  ghost: qy,
  outline: h$,
  solid: v$,
  link: g$,
  unstyled: y$
}, x$ = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, S$ = {
  baseStyle: p$,
  variants: b$,
  sizes: x$,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: Un, defineMultiStyleConfig: w$ } = rt(KE.keys), Ms = Se("card-bg"), Jr = Se("card-padding"), Ky = Se("card-shadow"), hs = Se("card-radius"), Yy = Se("card-border-width", "0"), Xy = Se("card-border-color"), _$ = Un({
  container: {
    [Ms.variable]: "colors.chakra-body-bg",
    backgroundColor: Ms.reference,
    boxShadow: Ky.reference,
    borderRadius: hs.reference,
    color: "chakra-body-text",
    borderWidth: Yy.reference,
    borderColor: Xy.reference
  },
  body: {
    padding: Jr.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Jr.reference
  },
  footer: {
    padding: Jr.reference
  }
}), C$ = {
  sm: Un({
    container: {
      [hs.variable]: "radii.base",
      [Jr.variable]: "space.3"
    }
  }),
  md: Un({
    container: {
      [hs.variable]: "radii.md",
      [Jr.variable]: "space.5"
    }
  }),
  lg: Un({
    container: {
      [hs.variable]: "radii.xl",
      [Jr.variable]: "space.7"
    }
  })
}, k$ = {
  elevated: Un({
    container: {
      [Ky.variable]: "shadows.base",
      _dark: {
        [Ms.variable]: "colors.gray.700"
      }
    }
  }),
  outline: Un({
    container: {
      [Yy.variable]: "1px",
      [Xy.variable]: "colors.chakra-border-color"
    }
  }),
  filled: Un({
    container: {
      [Ms.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Jr.variable]: 0
    },
    header: {
      [Jr.variable]: 0
    },
    footer: {
      [Jr.variable]: 0
    }
  }
}, P$ = w$({
  baseStyle: _$,
  variants: k$,
  sizes: C$,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), ka = At("close-button-size"), la = At("close-button-bg"), E$ = {
  w: [ka.reference],
  h: [ka.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [la.variable]: "colors.blackAlpha.100",
    _dark: {
      [la.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [la.variable]: "colors.blackAlpha.200",
    _dark: {
      [la.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: la.reference
}, T$ = {
  lg: {
    [ka.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [ka.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [ka.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, A$ = {
  baseStyle: E$,
  sizes: T$,
  defaultProps: {
    size: "md"
  }
}, { variants: I$, defaultProps: R$ } = _a, $$ = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: wt.bg.reference,
  color: wt.color.reference,
  boxShadow: wt.shadow.reference
}, N$ = {
  baseStyle: $$,
  variants: I$,
  defaultProps: R$
}, O$ = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, D$ = {
  baseStyle: O$
}, j$ = {
  opacity: 0.6,
  borderColor: "inherit"
}, M$ = {
  borderStyle: "solid"
}, F$ = {
  borderStyle: "dashed"
}, B$ = {
  solid: M$,
  dashed: F$
}, L$ = {
  baseStyle: j$,
  variants: B$,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: V$, defineMultiStyleConfig: z$ } = rt(CE.keys), W$ = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, H$ = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, U$ = {
  pt: "2",
  px: "4",
  pb: "5"
}, G$ = {
  fontSize: "1.25em"
}, q$ = V$({
  container: W$,
  button: H$,
  panel: U$,
  icon: G$
}), K$ = z$({ baseStyle: q$ }), { definePartsStyle: ai, defineMultiStyleConfig: Y$ } = rt(kE.keys), or = Se("alert-fg"), tn = Se("alert-bg"), X$ = ai({
  container: {
    bg: tn.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: or.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: or.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function Hd(e) {
  const { theme: t, colorScheme: r } = e, n = Wo(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var Z$ = ai((e) => {
  const { colorScheme: t } = e, r = Hd(e);
  return {
    container: {
      [or.variable]: `colors.${t}.500`,
      [tn.variable]: r.light,
      _dark: {
        [or.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      }
    }
  };
}), J$ = ai((e) => {
  const { colorScheme: t } = e, r = Hd(e);
  return {
    container: {
      [or.variable]: `colors.${t}.500`,
      [tn.variable]: r.light,
      _dark: {
        [or.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: or.reference
    }
  };
}), Q$ = ai((e) => {
  const { colorScheme: t } = e, r = Hd(e);
  return {
    container: {
      [or.variable]: `colors.${t}.500`,
      [tn.variable]: r.light,
      _dark: {
        [or.variable]: `colors.${t}.200`,
        [tn.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: or.reference
    }
  };
}), eN = ai((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [or.variable]: "colors.white",
      [tn.variable]: `colors.${t}.500`,
      _dark: {
        [or.variable]: "colors.gray.900",
        [tn.variable]: `colors.${t}.200`
      },
      color: or.reference
    }
  };
}), tN = {
  subtle: Z$,
  "left-accent": J$,
  "top-accent": Q$,
  solid: eN
}, rN = Y$({
  baseStyle: X$,
  variants: tN,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: Zy, defineMultiStyleConfig: nN } = rt(PE.keys), Io = Se("avatar-border-color"), Pa = Se("avatar-bg"), La = Se("avatar-font-size"), Ho = Se("avatar-size"), oN = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Io.reference,
  [Io.variable]: "white",
  _dark: {
    [Io.variable]: "colors.gray.800"
  }
}, aN = {
  bg: Pa.reference,
  fontSize: La.reference,
  width: Ho.reference,
  height: Ho.reference,
  lineHeight: "1",
  [Pa.variable]: "colors.gray.200",
  _dark: {
    [Pa.variable]: "colors.whiteAlpha.400"
  }
}, iN = (e) => {
  const { name: t, theme: r } = e, n = t ? hT({ string: t }) : "colors.gray.400", o = fT(n)(r);
  let a = "white";
  return o || (a = "gray.800"), {
    bg: Pa.reference,
    fontSize: La.reference,
    color: a,
    borderColor: Io.reference,
    verticalAlign: "top",
    width: Ho.reference,
    height: Ho.reference,
    "&:not([data-loaded])": {
      [Pa.variable]: n
    },
    [Io.variable]: "colors.white",
    _dark: {
      [Io.variable]: "colors.gray.800"
    }
  };
}, sN = {
  fontSize: La.reference,
  lineHeight: "1"
}, lN = Zy((e) => ({
  badge: Vt(oN, e),
  excessLabel: Vt(aN, e),
  container: Vt(iN, e),
  label: sN
}));
function hn(e) {
  const t = e !== "100%" ? Ly[e] : void 0;
  return Zy({
    container: {
      [Ho.variable]: t ?? e,
      [La.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [Ho.variable]: t ?? e,
      [La.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var cN = {
  "2xs": hn(4),
  xs: hn(6),
  sm: hn(8),
  md: hn(12),
  lg: hn(16),
  xl: hn(24),
  "2xl": hn(32),
  full: hn("100%")
}, uN = nN({
  baseStyle: lN,
  sizes: cN,
  defaultProps: {
    size: "md"
  }
}), dN = {
  Accordion: K$,
  Alert: rN,
  Avatar: uN,
  Badge: _a,
  Breadcrumb: f$,
  Button: S$,
  Checkbox: js,
  CloseButton: A$,
  Code: N$,
  Container: D$,
  Divider: L$,
  Drawer: MR,
  Editable: HR,
  Form: XR,
  FormError: r$,
  FormLabel: o$,
  Heading: s$,
  Input: Ge,
  Kbd: TI,
  Link: II,
  List: DI,
  Menu: UI,
  Modal: rR,
  NumberInput: dR,
  PinInput: mR,
  Popover: PR,
  Progress: OA,
  Radio: qA,
  Select: eI,
  Skeleton: rI,
  SkipLink: oI,
  Slider: mI,
  Spinner: yI,
  Stat: PI,
  Switch: IT,
  Table: MT,
  Tabs: JT,
  Tag: dA,
  Textarea: _A,
  Tooltip: PA,
  Card: P$,
  Stepper: _E
}, Jy = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Qy = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, eb = "ltr", tb = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, xl = {
  semanticTokens: Jy,
  direction: eb,
  ...Vy,
  components: dN,
  styles: Qy,
  config: tb
}, fN = xl, Ud = {
  semanticTokens: Jy,
  direction: eb,
  components: {},
  ...Vy,
  styles: Qy,
  config: tb
};
function ya(e) {
  return typeof e == "function";
}
function pN(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var rb = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return My(o) && n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, pN(
    ...n.map(
      (a) => (i) => ya(a) ? a(i) : eo(i, a)
    )
  )(o);
}, nb = rb(xl), hN = rb(Ud);
function eo(...e) {
  return pr({}, ...e, ob);
}
function ob(e, t, r, n) {
  if ((ya(e) || ya(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const a = ya(e) ? e(...o) : e, i = ya(t) ? t(...o) : t;
      return pr({}, a, i, ob);
    };
}
function ab({
  colorScheme: e,
  components: t
}) {
  return (r) => {
    let n = Object.keys(r.components || {});
    return Array.isArray(t) ? n = t : _t(t) && (n = Object.keys(t)), eo(r, {
      components: Object.fromEntries(
        n.map((o) => [o, {
          defaultProps: {
            colorScheme: e
          }
        }])
      )
    });
  };
}
function ib({
  size: e,
  components: t
}) {
  return (r) => {
    let n = Object.keys(r.components || {});
    return Array.isArray(t) ? n = t : _t(t) && (n = Object.keys(t)), eo(r, {
      components: Object.fromEntries(
        n.map((o) => [o, {
          defaultProps: {
            size: e
          }
        }])
      )
    });
  };
}
function sb({
  variant: e,
  components: t
}) {
  return (r) => {
    let n = Object.keys(r.components || {});
    return Array.isArray(t) ? n = t : _t(t) && (n = Object.keys(t)), eo(r, {
      components: Object.fromEntries(
        n.map((o) => [o, {
          defaultProps: {
            variant: e
          }
        }])
      )
    });
  };
}
function mN(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
function vN({
  defaultProps: { colorScheme: e, variant: t, size: r },
  components: n
}) {
  const o = (i) => i, a = [
    e ? ab({ colorScheme: e, components: n }) : o,
    r ? ib({ size: r, components: n }) : o,
    t ? sb({ variant: t, components: n }) : o
  ];
  return (i) => eo(mN(...a)(i));
}
function Gd(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function Sl(e) {
  var t;
  if (!Gd(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function gN(e) {
  var t, r;
  return Gd(e) && (r = (t = to(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function to(e) {
  var t;
  return Gd(e) && (t = e.ownerDocument) != null ? t : document;
}
function qd(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function yN() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var ii = /* @__PURE__ */ yN();
function bN(e) {
  const t = to(e);
  return t == null ? void 0 : t.activeElement;
}
function Kd(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function xN(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function SN(e) {
  const { userAgent: t, vendor: r } = e, n = /(android)/i.test(t);
  switch (!0) {
    case /CriOS/.test(t):
      return "Chrome for iOS";
    case /Edg\//.test(t):
      return "Edge";
    case (n && /Silk\//.test(t)):
      return "Silk";
    case (/Chrome/.test(t) && /Google Inc/.test(r)):
      return "Chrome";
    case /Firefox\/\d+\.\d+$/.test(t):
      return "Firefox";
    case n:
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
function wN(e) {
  return ii ? SN(window.navigator) === e : !1;
}
function _N(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function CN(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var kN = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, a, i) => {
    if (typeof n > "u")
      return e(n, o, a);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, a, i);
    return s.set(o, l), l;
  };
}, lb = kN(CN);
function cb(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var ub = (e) => cb(e, (t) => t != null);
function ym(e) {
  return typeof e == "number";
}
function PN(e) {
  return typeof e == "function";
}
var EN = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function db(e) {
  return "current" in e;
}
function Va(e, ...t) {
  return PN(e) ? e(...t) : e;
}
function TN(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function AN(e) {
  let t;
  return function(...n) {
    return e && (t = e.apply(this, n), e = null), t;
  };
}
var fb = () => {
}, IN = /* @__PURE__ */ AN((e) => () => {
  const { condition: t, message: r } = e;
  t && EN && console.warn(r);
}), RN = (...e) => (t) => e.reduce((r, n) => n(r), t), Dc = (e, t) => Math.abs(e - t), bm = (e) => "x" in e && "y" in e;
function $N(e, t) {
  if (ym(e) && ym(t))
    return Dc(e, t);
  if (bm(e) && bm(t)) {
    const r = Dc(e.x, t.x), n = Dc(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
function NN(e) {
  const t = qd(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function pb(e) {
  return !!e.touches;
}
function ON(e) {
  return (t) => {
    const r = qd(t), n = t instanceof r.MouseEvent;
    (!n || n && t.button === 0) && e(t);
  };
}
var DN = { pageX: 0, pageY: 0 };
function jN(e, t = "page") {
  const n = e.touches[0] || e.changedTouches[0] || DN;
  return {
    x: n[`${t}X`],
    y: n[`${t}Y`]
  };
}
function MN(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function hb(e, t = "page") {
  return {
    point: pb(e) ? jN(e, t) : MN(e, t)
  };
}
var Yd = (e, t = !1) => {
  const r = (n) => e(n, hb(n));
  return t ? ON(r) : r;
}, FN = () => ii && window.onpointerdown === null, BN = () => ii && window.ontouchstart === null, LN = () => ii && window.onmousedown === null, VN = {
  pointerdown: "mousedown",
  pointermove: "mousemove",
  pointerup: "mouseup",
  pointercancel: "mousecancel",
  pointerover: "mouseover",
  pointerout: "mouseout",
  pointerenter: "mouseenter",
  pointerleave: "mouseleave"
}, zN = {
  pointerdown: "touchstart",
  pointermove: "touchmove",
  pointerup: "touchend",
  pointercancel: "touchcancel"
};
function Xd(e) {
  return FN() ? e : BN() ? zN[e] : LN() ? VN[e] : e;
}
function jc(e, t, r, n) {
  return xN(
    e,
    Xd(t),
    Yd(r, t === "pointerdown"),
    n
  );
}
function WN(e) {
  return pb(e) && e.touches.length > 1;
}
var HN = Object.defineProperty, UN = (e, t, r) => t in e ? HN(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, xr = (e, t, r) => (UN(e, typeof t != "symbol" ? t + "" : t, r), r);
const mb = 1 / 60 * 1e3, GN = typeof performance < "u" ? () => performance.now() : () => Date.now(), vb = typeof window < "u" ? (e) => window.requestAnimationFrame(e) : (e) => setTimeout(() => e(GN()), mb);
function qN(e) {
  let t = [], r = [], n = 0, o = !1, a = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, f = d ? t : r;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)), l;
    },
    cancel: (l) => {
      const c = r.indexOf(l);
      c !== -1 && r.splice(c, 1), i.delete(l);
    },
    process: (l) => {
      if (o) {
        a = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const u = t[c];
          u(l), i.has(u) && (s.schedule(u), e());
        }
      o = !1, a && (a = !1, s.process(l));
    }
  };
  return s;
}
const KN = 40;
let Ou = !0, za = !1, Du = !1;
const Ro = {
  delta: 0,
  timestamp: 0
}, si = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], wl = si.reduce((e, t) => (e[t] = qN(() => za = !0), e), {}), gb = si.reduce((e, t) => {
  const r = wl[t];
  return e[t] = (n, o = !1, a = !1) => (za || XN(), r.schedule(n, o, a)), e;
}, {}), yb = si.reduce((e, t) => (e[t] = wl[t].cancel, e), {});
si.reduce((e, t) => (e[t] = () => wl[t].process(Ro), e), {});
const YN = (e) => wl[e].process(Ro), bb = (e) => {
  za = !1, Ro.delta = Ou ? mb : Math.max(Math.min(e - Ro.timestamp, KN), 1), Ro.timestamp = e, Du = !0, si.forEach(YN), Du = !1, za && (Ou = !1, vb(bb));
}, XN = () => {
  za = !0, Ou = !0, Du || vb(bb);
}, Fs = () => Ro;
var ZN = class {
  constructor(t, r, n) {
    if (xr(this, "history", []), xr(this, "startEvent", null), xr(this, "lastEvent", null), xr(this, "lastEventInfo", null), xr(this, "handlers", {}), xr(this, "removeListeners", fb), xr(this, "threshold", 3), xr(this, "win"), xr(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = Mc(this.lastEventInfo, this.history), l = this.startEvent !== null, c = $N(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!l && !c)
        return;
      const { timestamp: u } = Fs();
      this.history.push({ ...s.point, timestamp: u });
      const { onStart: d, onMove: f } = this.handlers;
      l || (d == null || d(this.lastEvent, s), this.startEvent = this.lastEvent), f == null || f(this.lastEvent, s);
    }), xr(this, "onPointerMove", (s, l) => {
      if (this.lastEvent = s, this.lastEventInfo = l, NN(s) && s.buttons === 0) {
        this.onPointerUp(s, l);
        return;
      }
      gb.update(this.updatePoint, !0);
    }), xr(this, "onPointerUp", (s, l) => {
      const c = Mc(l, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(s, c), this.end(), !(!u || !this.startEvent) && (u == null || u(s, c));
    }), this.win = qd(t), WN(t))
      return;
    this.handlers = r, n && (this.threshold = n), t.stopPropagation(), t.preventDefault();
    const o = hb(t), { timestamp: a } = Fs();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: i } = r;
    i == null || i(t, Mc(o, this.history)), this.removeListeners = RN(
      jc(this.win, "pointermove", this.onPointerMove),
      jc(this.win, "pointerup", this.onPointerUp),
      jc(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    var t;
    (t = this.removeListeners) == null || t.call(this), yb.update(this.updatePoint);
  }
};
function xm(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function JN(e) {
  return e[0];
}
function QN(e) {
  return e[e.length - 1];
}
function Mc(e, t) {
  return {
    point: e.point,
    delta: xm(e.point, QN(t)),
    offset: xm(e.point, JN(t)),
    velocity: rO(t, 0.1)
  };
}
function eO(e) {
  return e[e.length - 1];
}
var tO = (e) => e * 1e3;
function rO(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = eO(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > tO(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = (o.timestamp - n.timestamp) / 1e3;
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
var xb = (e) => e.hasAttribute("tabindex"), nO = (e) => xb(e) && e.tabIndex === -1;
function oO(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function aO(e) {
  return Sl(e) && e.localName === "input" && "select" in e;
}
function Sb(e) {
  return (Sl(e) ? to(e) : document).activeElement === e;
}
function iO(e) {
  return document.activeElement ? e.contains(document.activeElement) : !1;
}
function wb(e) {
  return e.parentElement && wb(e.parentElement) ? !0 : e.hidden;
}
function sO(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function _b(e) {
  if (!Sl(e) || wb(e) || oO(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : sO(e) ? !0 : xb(e);
}
function lO(e) {
  return e ? Sl(e) && _b(e) && !nO(e) : !1;
}
var cO = [
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
], uO = cO.join(), dO = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function fO(e) {
  const t = Array.from(
    e.querySelectorAll(uO)
  );
  return t.unshift(e), t.filter((r) => _b(r) && dO(r));
}
function Wa(e, t = {}) {
  const {
    isActive: r = Sb,
    nextTick: n,
    preventScroll: o = !0,
    selectTextIfInput: a = !0
  } = t;
  if (!e || r(e))
    return -1;
  function i() {
    if (!e) {
      IN({
        condition: !0,
        message: "[chakra-ui]: can't call focus() on `null` or `undefined` element"
      });
      return;
    }
    if (pO())
      e.focus({ preventScroll: o });
    else if (e.focus(), o) {
      const s = hO(e);
      mO(s);
    }
    if (a) {
      if (aO(e))
        e.select();
      else if ("setSelectionRange" in e) {
        const s = e;
        s.setSelectionRange(s.value.length, s.value.length);
      }
    }
  }
  return n ? requestAnimationFrame(i) : (i(), -1);
}
var Gi = null;
function pO() {
  if (Gi == null) {
    Gi = !1;
    try {
      document.createElement("div").focus({
        get preventScroll() {
          return Gi = !0, !0;
        }
      });
    } catch {
    }
  }
  return Gi;
}
function hO(e) {
  var t;
  const r = to(e), n = (t = r.defaultView) != null ? t : window;
  let o = e.parentNode;
  const a = [], i = r.scrollingElement || r.documentElement;
  for (; o instanceof n.HTMLElement && o !== i; )
    (o.offsetHeight < o.scrollHeight || o.offsetWidth < o.scrollWidth) && a.push({
      element: o,
      scrollTop: o.scrollTop,
      scrollLeft: o.scrollLeft
    }), o = o.parentNode;
  return i instanceof n.HTMLElement && a.push({
    element: i,
    scrollTop: i.scrollTop,
    scrollLeft: i.scrollLeft
  }), a;
}
function mO(e) {
  for (const { element: t, scrollTop: r, scrollLeft: n } of e)
    t.scrollTop = r, t.scrollLeft = n;
}
var vO = process.env.NODE_ENV === "production", Fc = "Invariant failed";
function Sm(e, t) {
  if (!e) {
    if (vO)
      throw new Error(Fc);
    var r = typeof t == "function" ? t() : t, n = r ? "".concat(Fc, ": ").concat(r) : Fc;
    throw new Error(n);
  }
}
var qi = function(t) {
  var r = t.top, n = t.right, o = t.bottom, a = t.left, i = n - a, s = o - r, l = {
    top: r,
    right: n,
    bottom: o,
    left: a,
    width: i,
    height: s,
    x: a,
    y: r,
    center: {
      x: (n + a) / 2,
      y: (o + r) / 2
    }
  };
  return l;
}, gO = function(t, r) {
  return {
    top: t.top - r.top,
    left: t.left - r.left,
    bottom: t.bottom + r.bottom,
    right: t.right + r.right
  };
}, wm = function(t, r) {
  return {
    top: t.top + r.top,
    left: t.left + r.left,
    bottom: t.bottom - r.bottom,
    right: t.right - r.right
  };
}, Bc = {
  top: 0,
  right: 0,
  bottom: 0,
  left: 0
}, yO = function(t) {
  var r = t.borderBox, n = t.margin, o = n === void 0 ? Bc : n, a = t.border, i = a === void 0 ? Bc : a, s = t.padding, l = s === void 0 ? Bc : s, c = qi(gO(r, o)), u = qi(wm(r, i)), d = qi(wm(u, l));
  return {
    marginBox: c,
    borderBox: qi(r),
    paddingBox: u,
    contentBox: d,
    margin: o,
    border: i,
    padding: l
  };
}, ur = function(t) {
  var r = t.slice(0, -2), n = t.slice(-2);
  if (n !== "px")
    return 0;
  var o = Number(r);
  return isNaN(o) && (process.env.NODE_ENV !== "production" ? Sm(!1, "Could not parse value [raw: " + t + ", without suffix: " + r + "]") : Sm(!1)), o;
}, bO = function(t, r) {
  var n = {
    top: ur(r.marginTop),
    right: ur(r.marginRight),
    bottom: ur(r.marginBottom),
    left: ur(r.marginLeft)
  }, o = {
    top: ur(r.paddingTop),
    right: ur(r.paddingRight),
    bottom: ur(r.paddingBottom),
    left: ur(r.paddingLeft)
  }, a = {
    top: ur(r.borderTopWidth),
    right: ur(r.borderRightWidth),
    bottom: ur(r.borderBottomWidth),
    left: ur(r.borderLeftWidth)
  };
  return yO({
    borderBox: t,
    margin: n,
    padding: o,
    border: a
  });
}, xO = function(t) {
  var r = t.getBoundingClientRect(), n = window.getComputedStyle(t);
  return bO(r, n);
}, SO = typeof Element < "u", wO = typeof Map == "function", _O = typeof Set == "function", CO = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function ms(e, t) {
  if (e === t)
    return !0;
  if (e && t && typeof e == "object" && typeof t == "object") {
    if (e.constructor !== t.constructor)
      return !1;
    var r, n, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (!ms(e[n], t[n]))
          return !1;
      return !0;
    }
    var a;
    if (wO && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!ms(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (_O && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (a = e.entries(); !(n = a.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (CO && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (r = e.length, r != t.length)
        return !1;
      for (n = r; n-- !== 0; )
        if (e[n] !== t[n])
          return !1;
      return !0;
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags;
    if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function")
      return e.valueOf() === t.valueOf();
    if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function")
      return e.toString() === t.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(t).length)
      return !1;
    for (n = r; n-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, o[n]))
        return !1;
    if (SO && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !ms(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var kO = function(t, r) {
  try {
    return ms(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const PO = /* @__PURE__ */ ul(kO);
function Zd(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: a, colorMode: i } = hl(), s = e ? lb(a, `components.${e}`) : void 0, l = n || s, c = pr(
    { theme: a, colorMode: i },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    ub(_N(o, ["children"]))
  ), u = ie({});
  if (l) {
    const f = Dy(l)(c);
    PO(u.current, f) || (u.current = f);
  }
  return u.current;
}
function Pt(e, t = {}) {
  return Zd(e, t);
}
function Ze(e, t = {}) {
  return Zd(e, t);
}
function EO(e, t) {
  var r;
  const { baseConfig: n, ...o } = t, { theme: a } = hl(), i = (r = a.components) == null ? void 0 : r[e], s = i ? eo(i, n) : n;
  return Zd(null, {
    ...o,
    styleConfig: s
  });
}
var TO = /* @__PURE__ */ new Set([
  ...$y,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), AO = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function Cb(e) {
  return AO.has(e) || !TO.has(e);
}
function IO(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
function Jd(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var RO = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, $O = /* @__PURE__ */ Wg(
  function(e) {
    return RO.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), NO = $O, OO = function(t) {
  return t !== "theme";
}, _m = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? NO : OO;
}, Cm = function(t, r, n) {
  var o;
  if (r) {
    var a = r.shouldForwardProp;
    o = t.__emotion_forwardProp && a ? function(i) {
      return t.__emotion_forwardProp(i) && a(i);
    } : a;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, km = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, DO = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return dl(r, n, o), kd(function() {
    return fl(r, n, o);
  }), null;
}, jO = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, a, i;
  r !== void 0 && (a = r.label, i = r.target);
  var s = Cm(t, r, n), l = s || _m(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (a !== void 0 && d.push("label:" + a + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(km), d.push(u[0][0]);
      for (var f = u.length, p = 1; p < f; p++)
        process.env.NODE_ENV !== "production" && u[0][p] === void 0 && console.error(km), d.push(u[p], u[0][p]);
    }
    var v = pl(function(m, g, b) {
      var y = c && m.as || o, x = "", _ = [], w = m;
      if (m.theme == null) {
        w = {};
        for (var P in m)
          w[P] = m[P];
        w.theme = Q.useContext(Cn);
      }
      typeof m.className == "string" ? x = _d(g.registered, _, m.className) : m.className != null && (x = m.className + " ");
      var k = Vo(d.concat(_), g.registered, w);
      x += g.key + "-" + k.name, i !== void 0 && (x += " " + i);
      var R = c && s === void 0 ? _m(y) : l, j = {};
      for (var $ in m)
        c && $ === "as" || // $FlowFixMe
        R($) && (j[$] = m[$]);
      return j.className = x, j.ref = b, /* @__PURE__ */ Q.createElement(Q.Fragment, null, /* @__PURE__ */ Q.createElement(DO, {
        cache: g,
        serialized: k,
        isStringTag: typeof y == "string"
      }), /* @__PURE__ */ Q.createElement(y, j));
    });
    return v.displayName = a !== void 0 ? a : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", v.defaultProps = t.defaultProps, v.__emotion_real = v, v.__emotion_base = o, v.__emotion_styles = d, v.__emotion_forwardProp = s, Object.defineProperty(v, "toString", {
      value: function() {
        return i === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + i;
      }
    }), v.withComponent = function(m, g) {
      return e(m, Yn({}, r, g, {
        shouldForwardProp: Cm(v, g, !0)
      })).apply(void 0, d);
    }, v;
  };
}, MO = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Bs = jO.bind();
MO.forEach(function(e) {
  Bs[e] = Bs(e);
});
var Pm, FO = (Pm = Bs.default) != null ? Pm : Bs, kb = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: a, ...i } = t, s = cb(i, (d, f) => Ny(f)), l = Va(e, t), c = IO(
    {},
    o,
    l,
    ub(s),
    a
  ), u = Fd(c)(t.theme);
  return n ? [u, n] : u;
};
function vs(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = Cb);
  const o = kb({ baseStyle: r }), a = FO(
    e,
    n
  )(o);
  return Gt.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = ri();
    return Gt.createElement(a, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function BO() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(vs, {
    apply(t, r, n) {
      return vs(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, vs(r)), e.get(r);
    }
  });
}
var E = BO();
function O(e) {
  return sn(e);
}
function Pb(e = {}) {
  const {
    strict: t = !0,
    errorMessage: r = "useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",
    name: n
  } = e, o = Wr(void 0);
  o.displayName = n;
  function a() {
    var i;
    const s = bt(o);
    if (!s && t) {
      const l = new Error(r);
      throw l.name = "ContextError", (i = Error.captureStackTrace) == null || i.call(Error, l, a), l;
    }
    return s;
  }
  return [
    o.Provider,
    a,
    o
  ];
}
function Qd(e) {
  const { cssVarsRoot: t, theme: r, children: n } = e, o = we(() => Ry(r), [r]);
  return /* @__PURE__ */ h.jsxs(Pk, { theme: o, children: [
    /* @__PURE__ */ h.jsx(Eb, { root: t }),
    n
  ] });
}
function Eb({ root: e = ":host, :root" }) {
  const t = [e, "[data-theme]"].join(",");
  return /* @__PURE__ */ h.jsx(ti, { styles: (r) => ({ [t]: r.__cssVars }) });
}
var [LO, VO] = Pb({
  name: "StylesContext",
  errorMessage: "useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "
});
function ef(e) {
  return Pb({
    name: `${e}StylesContext`,
    errorMessage: `useStyles: "styles" is undefined. Seems you forgot to wrap the components in "<${e} />" `
  });
}
function Tb() {
  const { colorMode: e } = ri();
  return /* @__PURE__ */ h.jsx(
    ti,
    {
      styles: (t) => {
        const r = lb(t, "styles.global"), n = Va(r, { theme: t, colorMode: e });
        return n ? Fd(n)(t) : void 0;
      }
    }
  );
}
var tf = Wr({
  getDocument() {
    return document;
  },
  getWindow() {
    return window;
  }
});
tf.displayName = "EnvironmentContext";
function Ab({ defer: e } = {}) {
  const [, t] = _C((r) => r + 1, 0);
  return rr(() => {
    e && t();
  }, [e]), bt(tf);
}
function rf(e) {
  const { children: t, environment: r, disabled: n } = e, o = ie(null), a = we(() => r || {
    getDocument: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument) != null ? l : document;
    },
    getWindow: () => {
      var s, l;
      return (l = (s = o.current) == null ? void 0 : s.ownerDocument.defaultView) != null ? l : window;
    }
  }, [r]), i = !n || !r;
  return /* @__PURE__ */ h.jsxs(tf.Provider, { value: a, children: [
    t,
    i && /* @__PURE__ */ h.jsx("span", { id: "__chakra_env", hidden: !0, ref: o })
  ] });
}
rf.displayName = "EnvironmentProvider";
var zO = (e) => {
  const {
    children: t,
    colorModeManager: r,
    portalZIndex: n,
    resetScope: o,
    resetCSS: a = !0,
    theme: i = {},
    environment: s,
    cssVarsRoot: l,
    disableEnvironment: c,
    disableGlobalStyle: u
  } = e, d = /* @__PURE__ */ h.jsx(
    rf,
    {
      environment: s,
      disabled: c,
      children: t
    }
  );
  return /* @__PURE__ */ h.jsx(Qd, { theme: i, cssVarsRoot: l, children: /* @__PURE__ */ h.jsxs(
    Rd,
    {
      colorModeManager: r,
      options: i.config,
      children: [
        a ? /* @__PURE__ */ h.jsx(ty, { scope: o }) : /* @__PURE__ */ h.jsx(ey, {}),
        !u && /* @__PURE__ */ h.jsx(Tb, {}),
        n ? /* @__PURE__ */ h.jsx(Ed, { zIndex: n, children: d }) : d
      ]
    }
  ) });
}, WO = (e, t) => e.find((r) => r.id === t);
function Em(e, t) {
  const r = Ib(e, t), n = r ? e[r].findIndex((o) => o.id === t) : -1;
  return {
    position: r,
    index: n
  };
}
function Ib(e, t) {
  for (const [r, n] of Object.entries(e))
    if (WO(n, t))
      return r;
}
function HO(e) {
  const t = e.includes("right"), r = e.includes("left");
  let n = "center";
  return t && (n = "flex-end"), r && (n = "flex-start"), {
    display: "flex",
    flexDirection: "column",
    alignItems: n
  };
}
function UO(e) {
  const r = e === "top" || e === "bottom" ? "0 auto" : void 0, n = e.includes("top") ? "env(safe-area-inset-top, 0px)" : void 0, o = e.includes("bottom") ? "env(safe-area-inset-bottom, 0px)" : void 0, a = e.includes("left") ? void 0 : "env(safe-area-inset-right, 0px)", i = e.includes("right") ? void 0 : "env(safe-area-inset-left, 0px)";
  return {
    position: "fixed",
    zIndex: "var(--toast-z-index, 5500)",
    pointerEvents: "none",
    display: "flex",
    flexDirection: "column",
    margin: r,
    top: n,
    bottom: o,
    right: a,
    left: i
  };
}
function ot(e, t = []) {
  const r = ie(e);
  return ge(() => {
    r.current = e;
  }), I((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function GO(e, t) {
  const r = ot(e);
  ge(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
function kr(e, t) {
  const r = ie(!1), n = ie(!1);
  ge(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), ge(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const Rb = Wr({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), _l = Wr({}), li = Wr(null), Cl = typeof document < "u", Ls = Cl ? Qa : ge, $b = Wr({ strict: !1 });
function qO(e, t, r, n) {
  const { visualElement: o } = bt(_l), a = bt($b), i = bt(li), s = bt(Rb).reducedMotion, l = ie();
  n = n || a.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: i,
    blockInitialAnimation: i ? i.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return Og(() => {
    c && c.update(r, i);
  }), Ls(() => {
    c && c.render();
  }), ge(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? Ls : ge)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function bo(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function KO(e, t, r) {
  return I(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : bo(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function Ha(e) {
  return typeof e == "string" || Array.isArray(e);
}
function kl(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const nf = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], of = ["initial", ...nf];
function Pl(e) {
  return kl(e.animate) || of.some((t) => Ha(e[t]));
}
function Nb(e) {
  return !!(Pl(e) || e.variants);
}
function YO(e, t) {
  if (Pl(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || Ha(r) ? r : void 0,
      animate: Ha(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function XO(e) {
  const { initial: t, animate: r } = YO(e, bt(_l));
  return we(() => ({ initial: t, animate: r }), [Tm(t), Tm(r)]);
}
function Tm(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Am = {
  animation: [
    "animate",
    "variants",
    "whileHover",
    "whileTap",
    "exit",
    "whileInView",
    "whileFocus",
    "whileDrag"
  ],
  exit: ["exit"],
  drag: ["drag", "dragControls"],
  focus: ["whileFocus"],
  hover: ["whileHover", "onHoverStart", "onHoverEnd"],
  tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
  pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
  inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
  layout: ["layout", "layoutId"]
}, Ua = {};
for (const e in Am)
  Ua[e] = {
    isEnabled: (t) => Am[e].some((r) => !!t[r])
  };
function ZO(e) {
  for (const t in e)
    Ua[t] = {
      ...Ua[t],
      ...e[t]
    };
}
const af = Wr({}), Ob = Wr({}), JO = Symbol.for("motionComponentSymbol");
function QO({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && ZO(e);
  function a(s, l) {
    let c;
    const u = {
      ...bt(Rb),
      ...s,
      layoutId: eD(s)
    }, { isStatic: d } = u, f = XO(s), p = n(s, d);
    if (!d && Cl) {
      f.visualElement = qO(o, p, u, t);
      const v = bt(Ob), m = bt($b).strict;
      f.visualElement && (c = f.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        m,
        e,
        v
      ));
    }
    return Q.createElement(
      _l.Provider,
      { value: f },
      c && f.visualElement ? Q.createElement(c, { visualElement: f.visualElement, ...u }) : null,
      r(o, s, KO(p, f.visualElement, l), p, d, f.visualElement)
    );
  }
  const i = sn(a);
  return i[JO] = o, i;
}
function eD({ layoutId: e }) {
  const t = bt(af).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function tD(e) {
  function t(n, o = {}) {
    return QO(e(n, o));
  }
  if (typeof Proxy > "u")
    return t;
  const r = /* @__PURE__ */ new Map();
  return new Proxy(t, {
    /**
     * Called when `motion` is referenced with a prop: `motion.div`, `motion.input` etc.
     * The prop name is passed through as `key` and we can use that to generate a `motion`
     * DOM component with that name.
     */
    get: (n, o) => (r.has(o) || r.set(o, t(o)), r.get(o))
  });
}
const rD = [
  "animate",
  "circle",
  "defs",
  "desc",
  "ellipse",
  "g",
  "image",
  "line",
  "filter",
  "marker",
  "mask",
  "metadata",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "rect",
  "stop",
  "switch",
  "symbol",
  "svg",
  "text",
  "tspan",
  "use",
  "view"
];
function sf(e) {
  return (
    /**
     * If it's not a string, it's a custom React component. Currently we only support
     * HTML custom React components.
     */
    typeof e != "string" || /**
     * If it contains a dash, the element is a custom HTML webcomponent.
     */
    e.includes("-") ? !1 : (
      /**
       * If it's in our list of lowercase SVG tags, it's an SVG component
       */
      !!(rD.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const Vs = {};
function nD(e) {
  Object.assign(Vs, e);
}
const ci = [
  "transformPerspective",
  "x",
  "y",
  "z",
  "translateX",
  "translateY",
  "translateZ",
  "scale",
  "scaleX",
  "scaleY",
  "rotate",
  "rotateX",
  "rotateY",
  "rotateZ",
  "skew",
  "skewX",
  "skewY"
], ro = new Set(ci);
function Db(e, { layout: t, layoutId: r }) {
  return ro.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!Vs[e] || e === "opacity");
}
const Xt = (e) => !!(e && e.getVelocity), oD = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, aD = ci.length;
function iD(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let a = "";
  for (let i = 0; i < aD; i++) {
    const s = ci[i];
    if (e[s] !== void 0) {
      const l = oD[s] || s;
      a += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (a += "translateZ(0)"), a = a.trim(), o ? a = o(e, n ? "" : a) : r && n && (a = "none"), a;
}
const jb = (e) => (t) => typeof t == "string" && t.startsWith(e), Mb = jb("--"), ju = jb("var(--"), sD = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, lD = (e, t) => t && typeof e == "number" ? t.transform(e) : e, kn = (e, t, r) => Math.min(Math.max(r, e), t), no = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, Ea = {
  ...no,
  transform: (e) => kn(0, 1, e)
}, Ki = {
  ...no,
  default: 1
}, Ta = (e) => Math.round(e * 1e5) / 1e5, El = /(-)?([\d]*\.?[\d])+/g, Fb = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, cD = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function ui(e) {
  return typeof e == "string";
}
const di = (e) => ({
  test: (t) => ui(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), mn = di("deg"), Lr = di("%"), _e = di("px"), uD = di("vh"), dD = di("vw"), Im = {
  ...Lr,
  parse: (e) => Lr.parse(e) / 100,
  transform: (e) => Lr.transform(e * 100)
}, Rm = {
  ...no,
  transform: Math.round
}, Bb = {
  // Border props
  borderWidth: _e,
  borderTopWidth: _e,
  borderRightWidth: _e,
  borderBottomWidth: _e,
  borderLeftWidth: _e,
  borderRadius: _e,
  radius: _e,
  borderTopLeftRadius: _e,
  borderTopRightRadius: _e,
  borderBottomRightRadius: _e,
  borderBottomLeftRadius: _e,
  // Positioning props
  width: _e,
  maxWidth: _e,
  height: _e,
  maxHeight: _e,
  size: _e,
  top: _e,
  right: _e,
  bottom: _e,
  left: _e,
  // Spacing props
  padding: _e,
  paddingTop: _e,
  paddingRight: _e,
  paddingBottom: _e,
  paddingLeft: _e,
  margin: _e,
  marginTop: _e,
  marginRight: _e,
  marginBottom: _e,
  marginLeft: _e,
  // Transform props
  rotate: mn,
  rotateX: mn,
  rotateY: mn,
  rotateZ: mn,
  scale: Ki,
  scaleX: Ki,
  scaleY: Ki,
  scaleZ: Ki,
  skew: mn,
  skewX: mn,
  skewY: mn,
  distance: _e,
  translateX: _e,
  translateY: _e,
  translateZ: _e,
  x: _e,
  y: _e,
  z: _e,
  perspective: _e,
  transformPerspective: _e,
  opacity: Ea,
  originX: Im,
  originY: Im,
  originZ: _e,
  // Misc
  zIndex: Rm,
  // SVG
  fillOpacity: Ea,
  strokeOpacity: Ea,
  numOctaves: Rm
};
function lf(e, t, r, n) {
  const { style: o, vars: a, transform: i, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const f = t[d];
    if (Mb(d)) {
      a[d] = f;
      continue;
    }
    const p = Bb[d], v = lD(f, p);
    if (ro.has(d)) {
      if (l = !0, i[d] = v, !u)
        continue;
      f !== (p.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = v) : o[d] = v;
  }
  if (t.transform || (l || n ? o.transform = iD(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: f = "50%", originZ: p = 0 } = s;
    o.transformOrigin = `${d} ${f} ${p}`;
  }
}
const cf = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function Lb(e, t, r) {
  for (const n in t)
    !Xt(t[n]) && !Db(n, r) && (e[n] = t[n]);
}
function fD({ transformTemplate: e }, t, r) {
  return we(() => {
    const n = cf();
    return lf(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function pD(e, t, r) {
  const n = e.style || {}, o = {};
  return Lb(o, n, e), Object.assign(o, fD(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function hD(e, t, r) {
  const n = {}, o = pD(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const mD = /* @__PURE__ */ new Set([
  "animate",
  "exit",
  "variants",
  "initial",
  "style",
  "values",
  "variants",
  "transition",
  "transformTemplate",
  "transformValues",
  "custom",
  "inherit",
  "onLayoutAnimationStart",
  "onLayoutAnimationComplete",
  "onLayoutMeasure",
  "onBeforeLayoutMeasure",
  "onAnimationStart",
  "onAnimationComplete",
  "onUpdate",
  "onDragStart",
  "onDrag",
  "onDragEnd",
  "onMeasureDragConstraints",
  "onDirectionLock",
  "onDragTransitionEnd",
  "_dragX",
  "_dragY",
  "onHoverStart",
  "onHoverEnd",
  "onViewportEnter",
  "onViewportLeave",
  "ignoreStrict",
  "viewport"
]);
function zs(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || mD.has(e);
}
let Vb = (e) => !zs(e);
function vD(e) {
  e && (Vb = (t) => t.startsWith("on") ? !zs(t) : e(t));
}
try {
  vD(require("@emotion/is-prop-valid").default);
} catch {
}
function gD(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (Vb(o) || r === !0 && zs(o) || !t && !zs(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function $m(e, t, r) {
  return typeof e == "string" ? e : _e.transform(t + r * e);
}
function yD(e, t, r) {
  const n = $m(t, e.x, e.width), o = $m(r, e.y, e.height);
  return `${n} ${o}`;
}
const bD = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, xD = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function SD(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const a = o ? bD : xD;
  e[a.offset] = _e.transform(-n);
  const i = _e.transform(t), s = _e.transform(r);
  e[a.array] = `${i} ${s}`;
}
function uf(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: a,
  pathLength: i,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d, f) {
  if (lf(e, c, u, f), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: p, style: v, dimensions: m } = e;
  p.transform && (m && (v.transform = p.transform), delete p.transform), m && (o !== void 0 || a !== void 0 || v.transform) && (v.transformOrigin = yD(m, o !== void 0 ? o : 0.5, a !== void 0 ? a : 0.5)), t !== void 0 && (p.x = t), r !== void 0 && (p.y = r), n !== void 0 && (p.scale = n), i !== void 0 && SD(p, i, s, l, !1);
}
const zb = () => ({
  ...cf(),
  attrs: {}
}), df = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function wD(e, t, r, n) {
  const o = we(() => {
    const a = zb();
    return uf(a, t, { enableHardwareAcceleration: !1 }, df(n), e.transformTemplate), {
      ...a.attrs,
      style: { ...a.style }
    };
  }, [t]);
  if (e.style) {
    const a = {};
    Lb(a, e.style, e), o.style = { ...a, ...o.style };
  }
  return o;
}
function _D(e = !1) {
  return (r, n, o, { latestValues: a }, i) => {
    const l = (sf(r) ? wD : hD)(n, a, i, r), u = {
      ...gD(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, f = we(() => Xt(d) ? d.get() : d, [d]);
    return Dg(r, {
      ...u,
      children: f
    });
  };
}
const ff = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function Wb(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const a in r)
    e.style.setProperty(a, r[a]);
}
const Hb = /* @__PURE__ */ new Set([
  "baseFrequency",
  "diffuseConstant",
  "kernelMatrix",
  "kernelUnitLength",
  "keySplines",
  "keyTimes",
  "limitingConeAngle",
  "markerHeight",
  "markerWidth",
  "numOctaves",
  "targetX",
  "targetY",
  "surfaceScale",
  "specularConstant",
  "specularExponent",
  "stdDeviation",
  "tableValues",
  "viewBox",
  "gradientTransform",
  "pathLength",
  "startOffset",
  "textLength",
  "lengthAdjust"
]);
function Ub(e, t, r, n) {
  Wb(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(Hb.has(o) ? o : ff(o), t.attrs[o]);
}
function pf(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (Xt(r[o]) || t.style && Xt(t.style[o]) || Db(o, e)) && (n[o] = r[o]);
  return n;
}
function Gb(e, t) {
  const r = pf(e, t);
  for (const n in e)
    if (Xt(e[n]) || Xt(t[n])) {
      const o = ci.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function hf(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function qb(e) {
  const t = ie(null);
  return t.current === null && (t.current = e()), t.current;
}
const Ws = (e) => Array.isArray(e), CD = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), kD = (e) => Ws(e) ? e[e.length - 1] || 0 : e;
function gs(e) {
  const t = Xt(e) ? e.get() : e;
  return CD(t) ? t.toValue() : t;
}
function PD({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, a) {
  const i = {
    latestValues: ED(n, o, a, e),
    renderState: t()
  };
  return r && (i.mount = (s) => r(n, s, i)), i;
}
const Kb = (e) => (t, r) => {
  const n = bt(_l), o = bt(li), a = () => PD(e, t, n, o);
  return r ? a() : qb(a);
};
function ED(e, t, r, n) {
  const o = {}, a = n(e, {});
  for (const f in a)
    o[f] = gs(a[f]);
  let { initial: i, animate: s } = e;
  const l = Pl(e), c = Nb(e);
  t && c && !l && e.inherit !== !1 && (i === void 0 && (i = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || i === !1;
  const d = u ? s : i;
  return d && typeof d != "boolean" && !kl(d) && (Array.isArray(d) ? d : [d]).forEach((p) => {
    const v = hf(e, p);
    if (!v)
      return;
    const { transitionEnd: m, transition: g, ...b } = v;
    for (const y in b) {
      let x = b[y];
      if (Array.isArray(x)) {
        const _ = u ? x.length - 1 : 0;
        x = x[_];
      }
      x !== null && (o[y] = x);
    }
    for (const y in m)
      o[y] = m[y];
  }), o;
}
const TD = {
  useVisualState: Kb({
    scrapeMotionValuesFromProps: Gb,
    createRenderState: zb,
    onMount: (e, t, { renderState: r, latestValues: n }) => {
      try {
        r.dimensions = typeof t.getBBox == "function" ? t.getBBox() : t.getBoundingClientRect();
      } catch {
        r.dimensions = {
          x: 0,
          y: 0,
          width: 0,
          height: 0
        };
      }
      uf(r, n, { enableHardwareAcceleration: !1 }, df(t.tagName), e.transformTemplate), Ub(t, r);
    }
  })
}, AD = {
  useVisualState: Kb({
    scrapeMotionValuesFromProps: pf,
    createRenderState: cf
  })
};
function ID(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...sf(e) ? TD : AD,
    preloadedFeatures: r,
    useRender: _D(t),
    createVisualElement: n,
    Component: e
  };
}
function Zr(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const Yb = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function Tl(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const RD = (e) => (t) => Yb(t) && e(t, Tl(t));
function Qr(e, t, r, n) {
  return Zr(e, t, RD(r), n);
}
const $D = (e, t) => (r) => t(e(r)), Sn = (...e) => e.reduce($D);
function Xb(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const Nm = Xb("dragHorizontal"), Om = Xb("dragVertical");
function Zb(e) {
  let t = !1;
  if (e === "y")
    t = Om();
  else if (e === "x")
    t = Nm();
  else {
    const r = Nm(), n = Om();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function Jb() {
  const e = Zb(!0);
  return e ? (e(), !1) : !0;
}
class En {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function ND(e) {
  let t = [], r = [], n = 0, o = !1, a = !1;
  const i = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, f = d ? t : r;
      return c && i.add(l), f.indexOf(l) === -1 && (f.push(l), d && o && (n = t.length)), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      const c = r.indexOf(l);
      c !== -1 && r.splice(c, 1), i.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        a = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const u = t[c];
          u(l), i.has(u) && (s.schedule(u), e());
        }
      o = !1, a && (a = !1, s.process(l));
    }
  };
  return s;
}
const ht = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, OD = 40;
let Mu = !0, Ga = !1;
const Al = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], $o = Al.reduce((e, t) => (e[t] = ND(() => Ga = !0), e), {}), DD = (e) => $o[e].process(ht), Qb = (e) => {
  Ga = !1, ht.delta = Mu ? 1e3 / 60 : Math.max(Math.min(e - ht.timestamp, OD), 1), ht.timestamp = e, ht.isProcessing = !0, Al.forEach(DD), ht.isProcessing = !1, Ga && (Mu = !1, requestAnimationFrame(Qb));
}, jD = () => {
  Ga = !0, Mu = !0, ht.isProcessing || requestAnimationFrame(Qb);
}, lt = Al.reduce((e, t) => {
  const r = $o[t];
  return e[t] = (n, o = !1, a = !1) => (Ga || jD(), r.schedule(n, o, a)), e;
}, {});
function rn(e) {
  Al.forEach((t) => $o[t].cancel(e));
}
function Dm(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (a, i) => {
    if (a.type === "touch" || Jb())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && lt.update(() => s[n](a, i));
  };
  return Qr(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class MD extends En {
  mount() {
    this.unmount = Sn(Dm(this.node, !0), Dm(this.node, !1));
  }
  unmount() {
  }
}
class FD extends En {
  constructor() {
    super(...arguments), this.isActive = !1;
  }
  onFocus() {
    let t = !1;
    try {
      t = this.node.current.matches(":focus-visible");
    } catch {
      t = !0;
    }
    !t || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0), this.isActive = !0);
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1), this.isActive = !1);
  }
  mount() {
    this.unmount = Sn(Zr(this.node.current, "focus", () => this.onFocus()), Zr(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const e0 = (e, t) => t ? e === t ? !0 : e0(e, t.parentElement) : !1, Et = (e) => e;
function Lc(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, Tl(r));
}
class BD extends En {
  constructor() {
    super(...arguments), this.removeStartListeners = Et, this.removeEndListeners = Et, this.removeAccessibleListeners = Et, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), a = Qr(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        lt.update(() => {
          e0(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), i = Qr(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = Sn(a, i), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (a) => {
        if (a.key !== "Enter" || this.isPressing)
          return;
        const i = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Lc("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && lt.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = Zr(this.node.current, "keyup", i), Lc("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = Zr(this.node.current, "keydown", t), n = () => {
        this.isPressing && Lc("cancel", (a, i) => this.cancelPress(a, i));
      }, o = Zr(this.node.current, "blur", n);
      this.removeAccessibleListeners = Sn(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && lt.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !Jb();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && lt.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Qr(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = Zr(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Sn(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Fu = /* @__PURE__ */ new WeakMap(), Vc = /* @__PURE__ */ new WeakMap(), LD = (e) => {
  const t = Fu.get(e.target);
  t && t(e);
}, VD = (e) => {
  e.forEach(LD);
};
function zD({ root: e, ...t }) {
  const r = e || document;
  Vc.has(r) || Vc.set(r, {});
  const n = Vc.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(VD, { root: e, ...t })), n[o];
}
function WD(e, t, r) {
  const n = zD(t);
  return Fu.set(e, r), n.observe(e), () => {
    Fu.delete(e), n.unobserve(e);
  };
}
const HD = {
  some: 0,
  all: 1
};
class UD extends En {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: a } = t, i = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : HD[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, a && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), f = c ? u : d;
      f && f(l);
    };
    return WD(this.node.current, i, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some(GD(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function GD({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const qD = {
  inView: {
    Feature: UD
  },
  tap: {
    Feature: BD
  },
  focus: {
    Feature: FD
  },
  hover: {
    Feature: MD
  }
};
function t0(e, t) {
  if (!Array.isArray(t))
    return !1;
  const r = t.length;
  if (r !== e.length)
    return !1;
  for (let n = 0; n < r; n++)
    if (t[n] !== e[n])
      return !1;
  return !0;
}
function KD(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function YD(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function Il(e, t, r) {
  const n = e.getProps();
  return hf(n, t, r !== void 0 ? r : n.custom, KD(e), YD(e));
}
const XD = "framerAppearId", ZD = "data-" + ff(XD);
let fi = Et, Pr = Et;
process.env.NODE_ENV !== "production" && (fi = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, Pr = (e, t) => {
  if (!e)
    throw new Error(t);
});
const wn = (e) => e * 1e3, en = (e) => e / 1e3, JD = {
  current: !1
}, r0 = (e) => Array.isArray(e) && typeof e[0] == "number";
function n0(e) {
  return !!(!e || typeof e == "string" && o0[e] || r0(e) || Array.isArray(e) && e.every(n0));
}
const ba = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, o0 = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: ba([0, 0.65, 0.55, 1]),
  circOut: ba([0.55, 0, 1, 0.45]),
  backIn: ba([0.31, 0.01, 0.66, -0.59]),
  backOut: ba([0.33, 1.53, 0.69, 0.99])
};
function a0(e) {
  if (e)
    return r0(e) ? ba(e) : Array.isArray(e) ? e.map(a0) : o0[e];
}
function QD(e, t, r, { delay: n = 0, duration: o, repeat: a = 0, repeatType: i = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = a0(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: a + 1,
    direction: i === "reverse" ? "alternate" : "normal"
  });
}
const jm = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, zc = {}, i0 = {};
for (const e in jm)
  i0[e] = () => (zc[e] === void 0 && (zc[e] = jm[e]()), zc[e]);
function ej(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const s0 = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, tj = 1e-7, rj = 12;
function nj(e, t, r, n, o) {
  let a, i, s = 0;
  do
    i = t + (r - t) / 2, a = s0(i, n, o) - e, a > 0 ? r = i : t = i;
  while (Math.abs(a) > tj && ++s < rj);
  return i;
}
function pi(e, t, r, n) {
  if (e === t && r === n)
    return Et;
  const o = (a) => nj(a, 0, 1, e, r);
  return (a) => a === 0 || a === 1 ? a : s0(o(a), t, n);
}
const oj = pi(0.42, 0, 1, 1), aj = pi(0, 0, 0.58, 1), l0 = pi(0.42, 0, 0.58, 1), ij = (e) => Array.isArray(e) && typeof e[0] != "number", c0 = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, u0 = (e) => (t) => 1 - e(1 - t), d0 = (e) => 1 - Math.sin(Math.acos(e)), mf = u0(d0), sj = c0(mf), f0 = pi(0.33, 1.53, 0.69, 0.99), vf = u0(f0), lj = c0(vf), cj = (e) => (e *= 2) < 1 ? 0.5 * vf(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), Mm = {
  linear: Et,
  easeIn: oj,
  easeInOut: l0,
  easeOut: aj,
  circIn: d0,
  circInOut: sj,
  circOut: mf,
  backIn: vf,
  backInOut: lj,
  backOut: f0,
  anticipate: cj
}, Fm = (e) => {
  if (Array.isArray(e)) {
    Pr(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return pi(t, r, n, o);
  } else if (typeof e == "string")
    return Pr(Mm[e] !== void 0, `Invalid easing type '${e}'`), Mm[e];
  return e;
}, gf = (e, t) => (r) => !!(ui(r) && cD.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), p0 = (e, t, r) => (n) => {
  if (!ui(n))
    return n;
  const [o, a, i, s] = n.match(El);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(a),
    [r]: parseFloat(i),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, uj = (e) => kn(0, 255, e), Wc = {
  ...no,
  transform: (e) => Math.round(uj(e))
}, zn = {
  test: gf("rgb", "red"),
  parse: p0("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + Wc.transform(e) + ", " + Wc.transform(t) + ", " + Wc.transform(r) + ", " + Ta(Ea.transform(n)) + ")"
};
function dj(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Bu = {
  test: gf("#"),
  parse: dj,
  transform: zn.transform
}, xo = {
  test: gf("hsl", "hue"),
  parse: p0("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + Lr.transform(Ta(t)) + ", " + Lr.transform(Ta(r)) + ", " + Ta(Ea.transform(n)) + ")"
}, Lt = {
  test: (e) => zn.test(e) || Bu.test(e) || xo.test(e),
  parse: (e) => zn.test(e) ? zn.parse(e) : xo.test(e) ? xo.parse(e) : Bu.parse(e),
  transform: (e) => ui(e) ? e : e.hasOwnProperty("red") ? zn.transform(e) : xo.transform(e)
}, mt = (e, t, r) => -r * e + r * t + e;
function Hc(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function fj({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, a = 0, i = 0;
  if (!t)
    o = a = i = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = Hc(l, s, e + 1 / 3), a = Hc(l, s, e), i = Hc(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(a * 255),
    blue: Math.round(i * 255),
    alpha: n
  };
}
const Uc = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, pj = [Bu, zn, xo], hj = (e) => pj.find((t) => t.test(e));
function Bm(e) {
  const t = hj(e);
  Pr(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === xo && (r = fj(r)), r;
}
const h0 = (e, t) => {
  const r = Bm(e), n = Bm(t), o = { ...r };
  return (a) => (o.red = Uc(r.red, n.red, a), o.green = Uc(r.green, n.green, a), o.blue = Uc(r.blue, n.blue, a), o.alpha = mt(r.alpha, n.alpha, a), zn.transform(o));
};
function mj(e) {
  var t, r;
  return isNaN(e) && ui(e) && (((t = e.match(El)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(Fb)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const m0 = {
  regex: sD,
  countKey: "Vars",
  token: "${v}",
  parse: Et
}, v0 = {
  regex: Fb,
  countKey: "Colors",
  token: "${c}",
  parse: Lt.parse
}, g0 = {
  regex: El,
  countKey: "Numbers",
  token: "${n}",
  parse: no.parse
};
function Gc(e, { regex: t, countKey: r, token: n, parse: o }) {
  const a = e.tokenised.match(t);
  a && (e["num" + r] = a.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...a.map(o)));
}
function Hs(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && Gc(r, m0), Gc(r, v0), Gc(r, g0), r;
}
function y0(e) {
  return Hs(e).values;
}
function b0(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = Hs(e), a = t.length;
  return (i) => {
    let s = o;
    for (let l = 0; l < a; l++)
      l < n ? s = s.replace(m0.token, i[l]) : l < n + r ? s = s.replace(v0.token, Lt.transform(i[l])) : s = s.replace(g0.token, Ta(i[l]));
    return s;
  };
}
const vj = (e) => typeof e == "number" ? 0 : e;
function gj(e) {
  const t = y0(e);
  return b0(e)(t.map(vj));
}
const Pn = {
  test: mj,
  parse: y0,
  createTransformer: b0,
  getAnimatableNone: gj
}, x0 = (e, t) => (r) => `${r > 0 ? t : e}`;
function S0(e, t) {
  return typeof e == "number" ? (r) => mt(e, t, r) : Lt.test(e) ? h0(e, t) : e.startsWith("var(") ? x0(e, t) : _0(e, t);
}
const w0 = (e, t) => {
  const r = [...e], n = r.length, o = e.map((a, i) => S0(a, t[i]));
  return (a) => {
    for (let i = 0; i < n; i++)
      r[i] = o[i](a);
    return r;
  };
}, yj = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = S0(e[o], t[o]));
  return (o) => {
    for (const a in n)
      r[a] = n[a](o);
    return r;
  };
}, _0 = (e, t) => {
  const r = Pn.createTransformer(t), n = Hs(e), o = Hs(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? Sn(w0(n.values, o.values), r) : (fi(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), x0(e, t));
}, qa = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, Lm = (e, t) => (r) => mt(e, t, r);
function bj(e) {
  return typeof e == "number" ? Lm : typeof e == "string" ? Lt.test(e) ? h0 : _0 : Array.isArray(e) ? w0 : typeof e == "object" ? yj : Lm;
}
function xj(e, t, r) {
  const n = [], o = r || bj(e[0]), a = e.length - 1;
  for (let i = 0; i < a; i++) {
    let s = o(e[i], e[i + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[i] || Et : t;
      s = Sn(l, s);
    }
    n.push(s);
  }
  return n;
}
function C0(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const a = e.length;
  if (Pr(a === t.length, "Both input and output ranges must be the same length"), a === 1)
    return () => t[0];
  e[0] > e[a - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const i = xj(t, n, o), s = i.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = qa(e[u], e[u + 1], c);
    return i[u](d);
  };
  return r ? (c) => l(kn(e[0], e[a - 1], c)) : l;
}
function Sj(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = qa(0, t, n);
    e.push(mt(r, 1, o));
  }
}
function wj(e) {
  const t = [0];
  return Sj(t, e.length - 1), t;
}
function _j(e, t) {
  return e.map((r) => r * t);
}
function Cj(e, t) {
  return e.map(() => t || l0).splice(0, e.length - 1);
}
function Us({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = ij(n) ? n.map(Fm) : Fm(n), a = {
    done: !1,
    value: t[0]
  }, i = _j(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : wj(t),
    e
  ), s = C0(i, t, {
    ease: Array.isArray(o) ? o : Cj(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (a.value = s(l), a.done = l >= e, a)
  };
}
function k0(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const kj = 5;
function P0(e, t, r) {
  const n = Math.max(t - kj, 0);
  return k0(r - e(n), t - n);
}
const qc = 1e-3, Pj = 0.01, Vm = 10, Ej = 0.05, Tj = 1;
function Aj({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, a;
  fi(e <= wn(Vm), "Spring duration must be 10 seconds or less");
  let i = 1 - t;
  i = kn(Ej, Tj, i), e = kn(Pj, Vm, en(e)), i < 1 ? (o = (c) => {
    const u = c * i, d = u * e, f = u - r, p = Lu(c, i), v = Math.exp(-d);
    return qc - f / p * v;
  }, a = (c) => {
    const d = c * i * e, f = d * r + r, p = Math.pow(i, 2) * Math.pow(c, 2) * e, v = Math.exp(-d), m = Lu(Math.pow(c, 2), i);
    return (-o(c) + qc > 0 ? -1 : 1) * ((f - p) * v) / m;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -qc + u * d;
  }, a = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = Rj(o, a, s);
  if (e = wn(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: i * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const Ij = 12;
function Rj(e, t, r) {
  let n = r;
  for (let o = 1; o < Ij; o++)
    n = n - e(n) / t(n);
  return n;
}
function Lu(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const $j = ["duration", "bounce"], Nj = ["stiffness", "damping", "mass"];
function zm(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function Oj(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!zm(e, Nj) && zm(e, $j)) {
    const r = Aj(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function E0({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], a = e[e.length - 1], i = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: f } = Oj(n), p = u ? -en(u) : 0, v = l / (2 * Math.sqrt(s * c)), m = a - o, g = en(Math.sqrt(s / c)), b = Math.abs(m) < 5;
  r || (r = b ? 0.01 : 2), t || (t = b ? 5e-3 : 0.5);
  let y;
  if (v < 1) {
    const x = Lu(g, v);
    y = (_) => {
      const w = Math.exp(-v * g * _);
      return a - w * ((p + v * g * m) / x * Math.sin(x * _) + m * Math.cos(x * _));
    };
  } else if (v === 1)
    y = (x) => a - Math.exp(-g * x) * (m + (p + g * m) * x);
  else {
    const x = g * Math.sqrt(v * v - 1);
    y = (_) => {
      const w = Math.exp(-v * g * _), P = Math.min(x * _, 300);
      return a - w * ((p + v * g * m) * Math.sinh(P) + x * m * Math.cosh(P)) / x;
    };
  }
  return {
    calculatedDuration: f && d || null,
    next: (x) => {
      const _ = y(x);
      if (f)
        i.done = x >= d;
      else {
        let w = p;
        x !== 0 && (v < 1 ? w = P0(y, x, _) : w = 0);
        const P = Math.abs(w) <= r, k = Math.abs(a - _) <= t;
        i.done = P && k;
      }
      return i.value = i.done ? a : _, i;
    }
  };
}
function Wm({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: a = 500, modifyTarget: i, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], f = {
    done: !1,
    value: d
  }, p = (R) => s !== void 0 && R < s || l !== void 0 && R > l, v = (R) => s === void 0 ? l : l === void 0 || Math.abs(s - R) < Math.abs(l - R) ? s : l;
  let m = r * t;
  const g = d + m, b = i === void 0 ? g : i(g);
  b !== g && (m = b - d);
  const y = (R) => -m * Math.exp(-R / n), x = (R) => b + y(R), _ = (R) => {
    const j = y(R), $ = x(R);
    f.done = Math.abs(j) <= c, f.value = f.done ? b : $;
  };
  let w, P;
  const k = (R) => {
    p(f.value) && (w = R, P = E0({
      keyframes: [f.value, v(f.value)],
      velocity: P0(x, R, f.value),
      damping: o,
      stiffness: a,
      restDelta: c,
      restSpeed: u
    }));
  };
  return k(0), {
    calculatedDuration: null,
    next: (R) => {
      let j = !1;
      return !P && w === void 0 && (j = !0, _(R), k(R)), w !== void 0 && R > w ? P.next(R - w) : (!j && _(R), f);
    }
  };
}
const Dj = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => lt.update(t, !0),
    stop: () => rn(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ht.isProcessing ? ht.timestamp : performance.now()
  };
}, Hm = 2e4;
function Um(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < Hm; )
    t += r, n = e.next(t);
  return t >= Hm ? 1 / 0 : t;
}
const jj = {
  decay: Wm,
  inertia: Wm,
  tween: Us,
  keyframes: Us,
  spring: E0
};
function Gs({ autoplay: e = !0, delay: t = 0, driver: r = Dj, keyframes: n, type: o = "keyframes", repeat: a = 0, repeatDelay: i = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...f }) {
  let p = 1, v = !1, m, g;
  const b = () => {
    m && m(), g = new Promise((M) => {
      m = M;
    });
  };
  b();
  let y;
  const x = jj[o] || Us;
  let _;
  x !== Us && typeof n[0] != "number" && (_ = C0([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const w = x({ ...f, keyframes: n });
  let P;
  s === "mirror" && (P = x({
    ...f,
    keyframes: [...n].reverse(),
    velocity: -(f.velocity || 0)
  }));
  let k = "idle", R = null, j = null, $ = null;
  w.calculatedDuration === null && a && (w.calculatedDuration = Um(w));
  const { calculatedDuration: L } = w;
  let J = 1 / 0, G = 1 / 0;
  L !== null && (J = L + i, G = J * (a + 1) - i);
  let K = 0;
  const te = (M) => {
    if (j === null)
      return;
    p > 0 && (j = Math.min(j, M)), p < 0 && (j = Math.min(M - G / p, j)), R !== null ? K = R : K = Math.round(M - j) * p;
    const re = K - t * (p >= 0 ? 1 : -1), V = p >= 0 ? re < 0 : re > G;
    K = Math.max(re, 0), k === "finished" && R === null && (K = G);
    let z = K, U = w;
    if (a) {
      const W = K / J;
      let Y = Math.floor(W), ne = W % 1;
      !ne && W >= 1 && (ne = 1), ne === 1 && Y--, Y = Math.min(Y, a + 1);
      const B = !!(Y % 2);
      B && (s === "reverse" ? (ne = 1 - ne, i && (ne -= i / J)) : s === "mirror" && (U = P));
      let Ce = kn(0, 1, ne);
      K > G && (Ce = s === "reverse" && B ? 1 : 0), z = Ce * J;
    }
    const oe = V ? { done: !1, value: n[0] } : U.next(z);
    _ && (oe.value = _(oe.value));
    let { done: ce } = oe;
    !V && L !== null && (ce = p >= 0 ? K >= G : K <= 0);
    const se = R === null && (k === "finished" || k === "running" && ce);
    return d && d(oe.value), se && q(), oe;
  }, Z = () => {
    y && y.stop(), y = void 0;
  }, N = () => {
    k = "idle", Z(), b(), j = $ = null;
  }, q = () => {
    k = "finished", u && u(), Z(), b();
  }, he = () => {
    if (v)
      return;
    y || (y = r(te));
    const M = y.now();
    l && l(), R !== null ? j = M - R : (!j || k === "finished") && (j = M), $ = j, R = null, k = "running", y.start();
  };
  e && he();
  const D = {
    then(M, re) {
      return g.then(M, re);
    },
    get time() {
      return en(K);
    },
    set time(M) {
      M = wn(M), K = M, R !== null || !y || p === 0 ? R = M : j = y.now() - M / p;
    },
    get duration() {
      const M = w.calculatedDuration === null ? Um(w) : w.calculatedDuration;
      return en(M);
    },
    get speed() {
      return p;
    },
    set speed(M) {
      M === p || !y || (p = M, D.time = en(K));
    },
    get state() {
      return k;
    },
    play: he,
    pause: () => {
      k = "paused", R = K;
    },
    stop: () => {
      v = !0, k !== "idle" && (k = "idle", c && c(), N());
    },
    cancel: () => {
      $ !== null && te($), N();
    },
    complete: () => {
      k = "finished";
    },
    sample: (M) => (j = 0, te(M))
  };
  return D;
}
const Mj = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), Yi = 10, Fj = 2e4, Bj = (e, t) => t.type === "spring" || e === "backgroundColor" || !n0(t.ease);
function Lj(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(i0.waapi() && Mj.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let i = !1, s, l;
  const c = () => {
    l = new Promise((b) => {
      s = b;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: f, times: p } = o;
  if (Bj(t, o)) {
    const b = Gs({
      ...o,
      repeat: 0,
      delay: 0
    });
    let y = { done: !1, value: u[0] };
    const x = [];
    let _ = 0;
    for (; !y.done && _ < Fj; )
      y = b.sample(_), x.push(y.value), _ += Yi;
    p = void 0, u = x, d = _ - Yi, f = "linear";
  }
  const v = QD(e.owner.current, t, u, {
    ...o,
    duration: d,
    /**
     * This function is currently not called if ease is provided
     * as a function so the cast is safe.
     *
     * However it would be possible for a future refinement to port
     * in easing pregeneration from Motion One for browsers that
     * support the upcoming `linear()` easing function.
     */
    ease: f,
    times: p
  }), m = () => v.cancel(), g = () => {
    lt.update(m), s(), c();
  };
  return v.onfinish = () => {
    e.set(ej(u, o)), n && n(), g();
  }, {
    then(b, y) {
      return l.then(b, y);
    },
    get time() {
      return en(v.currentTime || 0);
    },
    set time(b) {
      v.currentTime = wn(b);
    },
    get speed() {
      return v.playbackRate;
    },
    set speed(b) {
      v.playbackRate = b;
    },
    get duration() {
      return en(d);
    },
    play: () => {
      i || (v.play(), rn(m));
    },
    pause: () => v.pause(),
    stop: () => {
      if (i = !0, v.playState === "idle")
        return;
      const { currentTime: b } = v;
      if (b) {
        const y = Gs({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(y.sample(b - Yi).value, y.sample(b).value, Yi);
      }
      g();
    },
    complete: () => v.finish(),
    cancel: g
  };
}
function Vj({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: Et,
    pause: Et,
    stop: Et,
    then: (a) => (a(), Promise.resolve()),
    cancel: Et,
    complete: Et
  });
  return t ? Gs({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const zj = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Wj = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Hj = {
  type: "keyframes",
  duration: 0.8
}, Uj = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, Gj = (e, { keyframes: t }) => t.length > 2 ? Hj : ro.has(e) ? e.startsWith("scale") ? Wj(t[1]) : zj : Uj, Vu = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Pn.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), qj = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Kj(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(El) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let a = qj.has(t) ? 1 : 0;
  return n !== r && (a *= 100), t + "(" + a + o + ")";
}
const Yj = /([a-z-]*)\(.*?\)/g, zu = {
  ...Pn,
  getAnimatableNone: (e) => {
    const t = e.match(Yj);
    return t ? t.map(Kj).join(" ") : e;
  }
}, Xj = {
  ...Bb,
  // Color props
  color: Lt,
  backgroundColor: Lt,
  outlineColor: Lt,
  fill: Lt,
  stroke: Lt,
  // Border props
  borderColor: Lt,
  borderTopColor: Lt,
  borderRightColor: Lt,
  borderBottomColor: Lt,
  borderLeftColor: Lt,
  filter: zu,
  WebkitFilter: zu
}, yf = (e) => Xj[e];
function T0(e, t) {
  let r = yf(e);
  return r !== zu && (r = Pn), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const A0 = (e) => /^0[^.\s]+$/.test(e);
function Zj(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || A0(e);
}
function Jj(e, t, r, n) {
  const o = Vu(t, r);
  let a;
  Array.isArray(r) ? a = [...r] : a = [null, r];
  const i = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < a.length; c++)
    a[c] === null && (a[c] = c === 0 ? i : a[c - 1]), Zj(a[c]) && l.push(c), typeof a[c] == "string" && a[c] !== "none" && a[c] !== "0" && (s = a[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      a[u] = T0(t, s);
    }
  return a;
}
function Qj({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: a, repeatType: i, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function I0(e, t) {
  return e[t] || e.default || e;
}
const bf = (e, t, r, n = {}) => (o) => {
  const a = I0(n, e) || {}, i = a.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - wn(i);
  const l = Jj(t, e, r, a), c = l[0], u = l[l.length - 1], d = Vu(e, c), f = Vu(e, u);
  fi(d === f, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let p = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...a,
    delay: -s,
    onUpdate: (v) => {
      t.set(v), a.onUpdate && a.onUpdate(v);
    },
    onComplete: () => {
      o(), a.onComplete && a.onComplete();
    }
  };
  if (Qj(a) || (p = {
    ...p,
    ...Gj(e, p)
  }), p.duration && (p.duration = wn(p.duration)), p.repeatDelay && (p.repeatDelay = wn(p.repeatDelay)), !d || !f || JD.current || a.type === !1)
    return Vj(p);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const v = Lj(t, e, p);
    if (v)
      return v;
  }
  return Gs(p);
};
function qs(e) {
  return !!(Xt(e) && e.add);
}
const eM = (e) => /^\-?\d*\.?\d+$/.test(e);
function xf(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Sf(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class wf {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return xf(this.subscriptions, t), () => Sf(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let a = 0; a < o; a++) {
          const i = this.subscriptions[a];
          i && i(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const Gm = /* @__PURE__ */ new Set();
function _f(e, t, r) {
  e || Gm.has(t) || (console.warn(t), r && console.warn(r), Gm.add(t));
}
const tM = (e) => !isNaN(parseFloat(e));
class rM {
  /**
   * @param init - The initiating value
   * @param config - Optional configuration options
   *
   * -  `transformer`: A function to transform incoming values with.
   *
   * @internal
   */
  constructor(t, r = {}) {
    this.version = "10.12.18", this.timeDelta = 0, this.lastUpdated = 0, this.canTrackVelocity = !1, this.events = {}, this.updateAndNotify = (n, o = !0) => {
      this.prev = this.current, this.current = n;
      const { delta: a, timestamp: i } = ht;
      this.lastUpdated !== i && (this.timeDelta = a, this.lastUpdated = i, lt.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => lt.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = tM(this.current), this.owner = r.owner;
  }
  /**
   * Adds a function that will be notified when the `MotionValue` is updated.
   *
   * It returns a function that, when called, will cancel the subscription.
   *
   * When calling `onChange` inside a React component, it should be wrapped with the
   * `useEffect` hook. As it returns an unsubscribe function, this should be returned
   * from the `useEffect` function to ensure you don't add duplicate subscribers..
   *
   * ```jsx
   * export const MyComponent = () => {
   *   const x = useMotionValue(0)
   *   const y = useMotionValue(0)
   *   const opacity = useMotionValue(1)
   *
   *   useEffect(() => {
   *     function updateOpacity() {
   *       const maxXY = Math.max(x.get(), y.get())
   *       const newOpacity = transform(maxXY, [0, 100], [1, 0])
   *       opacity.set(newOpacity)
   *     }
   *
   *     const unsubscribeX = x.on("change", updateOpacity)
   *     const unsubscribeY = y.on("change", updateOpacity)
   *
   *     return () => {
   *       unsubscribeX()
   *       unsubscribeY()
   *     }
   *   }, [])
   *
   *   return <motion.div style={{ x }} />
   * }
   * ```
   *
   * @param subscriber - A function that receives the latest value.
   * @returns A function that, when called, will cancel this subscription.
   *
   * @deprecated
   */
  onChange(t) {
    return process.env.NODE_ENV !== "production" && _f(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new wf());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), lt.read(() => {
        this.events.change.getSize() || this.stop();
      });
    } : n;
  }
  clearListeners() {
    for (const t in this.events)
      this.events[t].clear();
  }
  /**
   * Attaches a passive effect to the `MotionValue`.
   *
   * @internal
   */
  attach(t, r) {
    this.passiveEffect = t, this.stopPassiveEffect = r;
  }
  /**
   * Sets the state of the `MotionValue`.
   *
   * @remarks
   *
   * ```jsx
   * const x = useMotionValue(0)
   * x.set(10)
   * ```
   *
   * @param latest - Latest value to set.
   * @param render - Whether to notify render subscribers. Defaults to `true`
   *
   * @public
   */
  set(t, r = !0) {
    !r || !this.passiveEffect ? this.updateAndNotify(t, r) : this.passiveEffect(t, this.updateAndNotify);
  }
  setWithVelocity(t, r, n) {
    this.set(r), this.prev = t, this.timeDelta = n;
  }
  /**
   * Set the state of the `MotionValue`, stopping any active animations,
   * effects, and resets velocity to `0`.
   */
  jump(t) {
    this.updateAndNotify(t), this.prev = t, this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
  /**
   * Returns the latest state of `MotionValue`
   *
   * @returns - The latest state of `MotionValue`
   *
   * @public
   */
  get() {
    return this.current;
  }
  /**
   * @public
   */
  getPrevious() {
    return this.prev;
  }
  /**
   * Returns the latest velocity of `MotionValue`
   *
   * @returns - The latest velocity of `MotionValue`. Returns `0` if the state is non-numerical.
   *
   * @public
   */
  getVelocity() {
    return this.canTrackVelocity ? (
      // These casts could be avoided if parseFloat would be typed better
      k0(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
    ) : 0;
  }
  /**
   * Registers a new animation to control this `MotionValue`. Only one
   * animation can drive a `MotionValue` at one time.
   *
   * ```jsx
   * value.start()
   * ```
   *
   * @param animation - A function that starts the provided animation
   *
   * @internal
   */
  start(t) {
    return this.stop(), new Promise((r) => {
      this.hasAnimated = !0, this.animation = t(r), this.events.animationStart && this.events.animationStart.notify();
    }).then(() => {
      this.events.animationComplete && this.events.animationComplete.notify(), this.clearAnimation();
    });
  }
  /**
   * Stop the currently active animation.
   *
   * @public
   */
  stop() {
    this.animation && (this.animation.stop(), this.events.animationCancel && this.events.animationCancel.notify()), this.clearAnimation();
  }
  /**
   * Returns `true` if this value is currently animating.
   *
   * @public
   */
  isAnimating() {
    return !!this.animation;
  }
  clearAnimation() {
    delete this.animation;
  }
  /**
   * Destroy and clean up subscribers to this `MotionValue`.
   *
   * The `MotionValue` hooks like `useMotionValue` and `useTransform` automatically
   * handle the lifecycle of the returned `MotionValue`, so this method is only necessary if you've manually
   * created a `MotionValue` via the `motionValue` function.
   *
   * @public
   */
  destroy() {
    this.clearListeners(), this.stop(), this.stopPassiveEffect && this.stopPassiveEffect();
  }
}
function Uo(e, t) {
  return new rM(e, t);
}
const R0 = (e) => (t) => t.test(e), nM = {
  test: (e) => e === "auto",
  parse: (e) => e
}, $0 = [no, _e, Lr, mn, dD, uD, nM], ca = (e) => $0.find(R0(e)), oM = [...$0, Lt, Pn], aM = (e) => oM.find(R0(e));
function iM(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Uo(r));
}
function sM(e, t) {
  const r = Il(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...a } = r ? e.makeTargetAnimatable(r, !1) : {};
  a = { ...a, ...n };
  for (const i in a) {
    const s = kD(a[i]);
    iM(e, i, s);
  }
}
function lM(e, t, r) {
  var n, o;
  const a = Object.keys(t).filter((s) => !e.hasValue(s)), i = a.length;
  if (i)
    for (let s = 0; s < i; s++) {
      const l = a[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (eM(u) || A0(u)) ? u = parseFloat(u) : !aM(u) && Pn.test(c) && (u = T0(l, c)), e.addValue(l, Uo(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function cM(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function uM(e, t, r) {
  const n = {};
  for (const o in e) {
    const a = cM(o, t);
    if (a !== void 0)
      n[o] = a;
    else {
      const i = r.getValue(o);
      i && (n[o] = i.get());
    }
  }
  return n;
}
function dM({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function N0(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: a = e.getDefaultTransition(), transitionEnd: i, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (a = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const f = e.getValue(d), p = s[d];
    if (!f || p === void 0 || u && dM(u, d))
      continue;
    const v = { delay: r, elapsed: 0, ...a };
    if (window.HandoffAppearAnimations && !f.hasAnimated) {
      const g = e.getProps()[ZD];
      g && (v.elapsed = window.HandoffAppearAnimations(g, d, f, lt));
    }
    f.start(bf(d, f, p, e.shouldReduceMotion && ro.has(d) ? { type: !1 } : v));
    const m = f.animation;
    qs(l) && (l.add(d), m.then(() => l.remove(d))), c.push(m);
  }
  return i && Promise.all(c).then(() => {
    i && sM(e, i);
  }), c;
}
function Wu(e, t, r = {}) {
  const n = Il(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const a = n ? () => Promise.all(N0(e, n, r)) : () => Promise.resolve(), i = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return fM(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [a, i] : [i, a];
    return l().then(() => c());
  } else
    return Promise.all([a(), i(r.delay)]);
}
function fM(e, t, r = 0, n = 0, o = 1, a) {
  const i = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(pM).forEach((c, u) => {
    c.notify("AnimationStart", t), i.push(Wu(c, t, {
      ...a,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(i);
}
function pM(e, t) {
  return e.sortNodePosition(t);
}
function hM(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((a) => Wu(e, a, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Wu(e, t, r);
  else {
    const o = typeof t == "function" ? Il(e, t, r.custom) : t;
    n = Promise.all(N0(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const mM = [...nf].reverse(), vM = nf.length;
function gM(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => hM(e, r, n)));
}
function yM(e) {
  let t = gM(e);
  const r = xM();
  let n = !0;
  const o = (l, c) => {
    const u = Il(e, c);
    if (u) {
      const { transition: d, transitionEnd: f, ...p } = u;
      l = { ...l, ...p, ...f };
    }
    return l;
  };
  function a(l) {
    t = l(e);
  }
  function i(l, c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, f = [], p = /* @__PURE__ */ new Set();
    let v = {}, m = 1 / 0;
    for (let b = 0; b < vM; b++) {
      const y = mM[b], x = r[y], _ = u[y] !== void 0 ? u[y] : d[y], w = Ha(_), P = y === c ? x.isActive : null;
      P === !1 && (m = b);
      let k = _ === d[y] && _ !== u[y] && w;
      if (k && n && e.manuallyAnimateOnMount && (k = !1), x.protectedKeys = { ...v }, // If it isn't active and hasn't *just* been set as inactive
      !x.isActive && P === null || // If we didn't and don't have any defined prop for this animation type
      !_ && !x.prevProp || // Or if the prop doesn't define an animation
      kl(_) || typeof _ == "boolean")
        continue;
      const R = bM(x.prevProp, _);
      let j = R || // If we're making this variant active, we want to always make it active
      y === c && x.isActive && !k && w || // If we removed a higher-priority variant (i is in reverse order)
      b > m && w;
      const $ = Array.isArray(_) ? _ : [_];
      let L = $.reduce(o, {});
      P === !1 && (L = {});
      const { prevResolvedValues: J = {} } = x, G = {
        ...J,
        ...L
      }, K = (te) => {
        j = !0, p.delete(te), x.needsAnimating[te] = !0;
      };
      for (const te in G) {
        const Z = L[te], N = J[te];
        v.hasOwnProperty(te) || (Z !== N ? Ws(Z) && Ws(N) ? !t0(Z, N) || R ? K(te) : x.protectedKeys[te] = !0 : Z !== void 0 ? K(te) : p.add(te) : Z !== void 0 && p.has(te) ? K(te) : x.protectedKeys[te] = !0);
      }
      x.prevProp = _, x.prevResolvedValues = L, x.isActive && (v = { ...v, ...L }), n && e.blockInitialAnimation && (j = !1), j && !k && f.push(...$.map((te) => ({
        animation: te,
        options: { type: y, ...l }
      })));
    }
    if (p.size) {
      const b = {};
      p.forEach((y) => {
        const x = e.getBaseTarget(y);
        x !== void 0 && (b[y] = x);
      }), f.push({ animation: b });
    }
    let g = !!f.length;
    return n && u.initial === !1 && !e.manuallyAnimateOnMount && (g = !1), n = !1, g ? t(f) : Promise.resolve();
  }
  function s(l, c, u) {
    var d;
    if (r[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((p) => {
      var v;
      return (v = p.animationState) === null || v === void 0 ? void 0 : v.setActive(l, c);
    }), r[l].isActive = c;
    const f = i(u, l);
    for (const p in r)
      r[p].protectedKeys = {};
    return f;
  }
  return {
    animateChanges: i,
    setActive: s,
    setAnimateFunction: a,
    getState: () => r
  };
}
function bM(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !t0(t, e) : !1;
}
function Mn(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function xM() {
  return {
    animate: Mn(!0),
    whileInView: Mn(),
    whileHover: Mn(),
    whileTap: Mn(),
    whileDrag: Mn(),
    whileFocus: Mn(),
    exit: Mn()
  };
}
class SM extends En {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = yM(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), kl(t) && (this.unmount = t.subscribe(this.node));
  }
  /**
   * Subscribe any provided AnimationControls to the component's VisualElement
   */
  mount() {
    this.updateAnimationControlsSubscription();
  }
  update() {
    const { animate: t } = this.node.getProps(), { animate: r } = this.node.prevProps || {};
    t !== r && this.updateAnimationControlsSubscription();
  }
  unmount() {
  }
}
let wM = 0;
class _M extends En {
  constructor() {
    super(...arguments), this.id = wM++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const a = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && a.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const CM = {
  animation: {
    Feature: SM
  },
  exit: {
    Feature: _M
  }
}, qm = (e, t) => Math.abs(e - t);
function kM(e, t) {
  const r = qm(e.x, t.x), n = qm(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class O0 {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = Yc(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = kM(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: f } = c, { timestamp: p } = ht;
      this.history.push({ ...f, timestamp: p });
      const { onStart: v, onMove: m } = this.handlers;
      u || (v && v(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), m && m(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = Kc(u, this.transformPagePoint), lt.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: f } = this.handlers, p = Yc(c.type === "pointercancel" ? this.lastMoveEventInfo : Kc(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, p), f && f(c, p);
    }, !Yb(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = Tl(t), a = Kc(o, this.transformPagePoint), { point: i } = a, { timestamp: s } = ht;
    this.history = [{ ...i, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, Yc(a, this.history)), this.removeListeners = Sn(Qr(window, "pointermove", this.handlePointerMove), Qr(window, "pointerup", this.handlePointerUp), Qr(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), rn(this.updatePoint);
  }
}
function Kc(e, t) {
  return t ? { point: t(e.point) } : e;
}
function Km(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function Yc({ point: e }, t) {
  return {
    point: e,
    delta: Km(e, D0(t)),
    offset: Km(e, PM(t)),
    velocity: EM(t, 0.1)
  };
}
function PM(e) {
  return e[0];
}
function D0(e) {
  return e[e.length - 1];
}
function EM(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = D0(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > wn(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = en(o.timestamp - n.timestamp);
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function ar(e) {
  return e.max - e.min;
}
function Hu(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function Ym(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = mt(t.min, t.max, e.origin), e.scale = ar(r) / ar(t), (Hu(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = mt(r.min, r.max, e.origin) - e.originPoint, (Hu(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function Aa(e, t, r, n) {
  Ym(e.x, t.x, r.x, n ? n.originX : void 0), Ym(e.y, t.y, r.y, n ? n.originY : void 0);
}
function Xm(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + ar(t);
}
function TM(e, t, r) {
  Xm(e.x, t.x, r.x), Xm(e.y, t.y, r.y);
}
function Zm(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + ar(t);
}
function Ia(e, t, r) {
  Zm(e.x, t.x, r.x), Zm(e.y, t.y, r.y);
}
function AM(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? mt(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? mt(r, e, n.max) : Math.min(e, r)), e;
}
function Jm(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function IM(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Jm(e.x, r, o),
    y: Jm(e.y, t, n)
  };
}
function Qm(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function RM(e, t) {
  return {
    x: Qm(e.x, t.x),
    y: Qm(e.y, t.y)
  };
}
function $M(e, t) {
  let r = 0.5;
  const n = ar(e), o = ar(t);
  return o > n ? r = qa(t.min, t.max - n, e.min) : n > o && (r = qa(e.min, e.max - o, t.min)), kn(0, 1, r);
}
function NM(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Uu = 0.35;
function OM(e = Uu) {
  return e === !1 ? e = 0 : e === !0 && (e = Uu), {
    x: ev(e, "left", "right"),
    y: ev(e, "top", "bottom")
  };
}
function ev(e, t, r) {
  return {
    min: tv(e, t),
    max: tv(e, r)
  };
}
function tv(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const rv = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), So = () => ({
  x: rv(),
  y: rv()
}), nv = () => ({ min: 0, max: 0 }), Ct = () => ({
  x: nv(),
  y: nv()
});
function $r(e) {
  return [e("x"), e("y")];
}
function j0({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function DM({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function jM(e, t) {
  if (!t)
    return e;
  const r = t({ x: e.left, y: e.top }), n = t({ x: e.right, y: e.bottom });
  return {
    top: r.y,
    left: r.x,
    bottom: n.y,
    right: n.x
  };
}
function Xc(e) {
  return e === void 0 || e === 1;
}
function Gu({ scale: e, scaleX: t, scaleY: r }) {
  return !Xc(e) || !Xc(t) || !Xc(r);
}
function Fn(e) {
  return Gu(e) || M0(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function M0(e) {
  return ov(e.x) || ov(e.y);
}
function ov(e) {
  return e && e !== "0%";
}
function Ks(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function av(e, t, r, n, o) {
  return o !== void 0 && (e = Ks(e, o, n)), Ks(e, r, n) + t;
}
function qu(e, t = 0, r = 1, n, o) {
  e.min = av(e.min, t, r, n, o), e.max = av(e.max, t, r, n, o);
}
function F0(e, { x: t, y: r }) {
  qu(e.x, t.translate, t.scale, t.originPoint), qu(e.y, r.translate, r.scale, r.originPoint);
}
function MM(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let a, i;
  for (let s = 0; s < o; s++) {
    a = r[s], i = a.projectionDelta;
    const l = a.instance;
    l && l.style && l.style.display === "contents" || (n && a.options.layoutScroll && a.scroll && a !== a.root && wo(e, {
      x: -a.scroll.offset.x,
      y: -a.scroll.offset.y
    }), i && (t.x *= i.x.scale, t.y *= i.y.scale, F0(e, i)), n && Fn(a.latestValues) && wo(e, a.latestValues));
  }
  t.x = iv(t.x), t.y = iv(t.y);
}
function iv(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function gn(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function sv(e, t, [r, n, o]) {
  const a = t[o] !== void 0 ? t[o] : 0.5, i = mt(e.min, e.max, a);
  qu(e, t[r], t[n], i, t.scale);
}
const FM = ["x", "scaleX", "originX"], BM = ["y", "scaleY", "originY"];
function wo(e, t) {
  sv(e.x, t, FM), sv(e.y, t, BM);
}
function B0(e, t) {
  return j0(jM(e.getBoundingClientRect(), t));
}
function LM(e, t, r) {
  const n = B0(e, r), { scroll: o } = t;
  return o && (gn(n.x, o.offset.x), gn(n.y, o.offset.y)), n;
}
const VM = /* @__PURE__ */ new WeakMap();
class zM {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = Ct(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(Tl(l, "page").point);
    }, a = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: f } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = Zb(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), $r((v) => {
        let m = this.getAxisMotionValue(v).get() || 0;
        if (Lr.test(m)) {
          const { projection: g } = this.visualElement;
          if (g && g.layout) {
            const b = g.layout.layoutBox[v];
            b && (m = ar(b) * (parseFloat(m) / 100));
          }
        }
        this.originPoint[v] = m;
      }), f && lt.update(() => f(l, c), !1, !0);
      const { animationState: p } = this.visualElement;
      p && p.setActive("whileDrag", !0);
    }, i = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: f, onDrag: p } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: v } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = WM(v), this.currentDirection !== null && f && f(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, v), this.updateAxis("y", c.point, v), this.visualElement.render(), p && p(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new O0(t, {
      onSessionStart: o,
      onStart: a,
      onMove: i,
      onSessionEnd: s
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: a } = this.getProps();
    a && lt.update(() => a(t, r));
  }
  cancel() {
    this.isDragging = !1;
    const { projection: t, animationState: r } = this.visualElement;
    t && (t.isAnimationBlocked = !1), this.panSession && this.panSession.end(), this.panSession = void 0;
    const { dragPropagation: n } = this.getProps();
    !n && this.openGlobalLock && (this.openGlobalLock(), this.openGlobalLock = null), r && r.setActive("whileDrag", !1);
  }
  updateAxis(t, r, n) {
    const { drag: o } = this.getProps();
    if (!n || !Xi(t, o, this.currentDirection))
      return;
    const a = this.getAxisMotionValue(t);
    let i = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (i = AM(i, this.constraints[t], this.elastic[t])), a.set(i);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && bo(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = IM(n.layoutBox, t) : this.constraints = !1, this.elastic = OM(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && $r((a) => {
      this.getAxisMotionValue(a) && (this.constraints[a] = NM(n.layoutBox[a], this.constraints[a]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !bo(t))
      return !1;
    const n = t.current;
    Pr(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const a = LM(n, o.root, this.visualElement.getTransformPagePoint());
    let i = RM(o.layout.layoutBox, a);
    if (r) {
      const s = r(DM(i));
      this.hasMutatedConstraints = !!s, s && (i = j0(s));
    }
    return i;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: a, dragSnapToOrigin: i, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = $r((u) => {
      if (!Xi(u, r, this.currentDirection))
        return;
      let d = l && l[u] || {};
      i && (d = { min: 0, max: 0 });
      const f = o ? 200 : 1e6, p = o ? 40 : 1e7, v = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: f,
        bounceDamping: p,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...a,
        ...d
      };
      return this.startAxisValueAnimation(u, v);
    });
    return Promise.all(c).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(bf(t, n, 0, r));
  }
  stopAnimation() {
    $r((t) => this.getAxisMotionValue(t).stop());
  }
  /**
   * Drag works differently depending on which props are provided.
   *
   * - If _dragX and _dragY are provided, we output the gesture delta directly to those motion values.
   * - Otherwise, we apply the delta to the x/y motion values.
   */
  getAxisMotionValue(t) {
    const r = "_drag" + t.toUpperCase(), n = this.visualElement.getProps(), o = n[r];
    return o || this.visualElement.getValue(t, (n.initial ? n.initial[t] : void 0) || 0);
  }
  snapToCursor(t) {
    $r((r) => {
      const { drag: n } = this.getProps();
      if (!Xi(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, a = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: i, max: s } = o.layout.layoutBox[r];
        a.set(t[r] - mt(i, s, 0.5));
      }
    });
  }
  /**
   * When the viewport resizes we want to check if the measured constraints
   * have changed and, if so, reposition the element within those new constraints
   * relative to where it was before the resize.
   */
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: t, dragConstraints: r } = this.getProps(), { projection: n } = this.visualElement;
    if (!bo(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    $r((i) => {
      const s = this.getAxisMotionValue(i);
      if (s) {
        const l = s.get();
        o[i] = $M({ min: l, max: l }, this.constraints[i]);
      }
    });
    const { transformTemplate: a } = this.visualElement.getProps();
    this.visualElement.current.style.transform = a ? a({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), $r((i) => {
      if (!Xi(i, t, null))
        return;
      const s = this.getAxisMotionValue(i), { min: l, max: c } = this.constraints[i];
      s.set(mt(l, c, o[i]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    VM.set(this.visualElement, this);
    const t = this.visualElement.current, r = Qr(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      bo(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, a = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const i = Zr(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && ($r((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      i(), r(), a(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: a = !1, dragElastic: i = Uu, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: a,
      dragElastic: i,
      dragMomentum: s
    };
  }
}
function Xi(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function WM(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class HM extends En {
  constructor(t) {
    super(t), this.removeGroupControls = Et, this.removeListeners = Et, this.controls = new zM(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || Et;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const lv = (e) => (t, r) => {
  e && lt.update(() => e(t, r));
};
class UM extends En {
  constructor() {
    super(...arguments), this.removePointerDownListener = Et;
  }
  onPointerDown(t) {
    this.session = new O0(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: lv(t),
      onStart: lv(r),
      onMove: n,
      onEnd: (a, i) => {
        delete this.session, o && lt.update(() => o(a, i));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Qr(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function L0() {
  const e = bt(li);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = It();
  return ge(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function GM() {
  return qM(bt(li));
}
function qM(e) {
  return e === null ? !0 : e.isPresent;
}
const ys = {
  /**
   * Global flag as to whether the tree has animated since the last time
   * we resized the window
   */
  hasAnimatedSinceResize: !0,
  /**
   * We set this to true once, on the first update. Any nodes added to the tree beyond that
   * update will be given a `data-projection-id` attribute.
   */
  hasEverUpdated: !1
};
function cv(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const ua = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (_e.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = cv(e, t.target.x), n = cv(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, KM = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Pn.parse(e);
    if (o.length > 5)
      return n;
    const a = Pn.createTransformer(e), i = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + i] /= s, o[1 + i] /= l;
    const c = mt(s, l, 0.5);
    return typeof o[2 + i] == "number" && (o[2 + i] /= c), typeof o[3 + i] == "number" && (o[3 + i] /= c), a(o);
  }
};
class YM extends Gt.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: a } = t;
    nD(XM), a && (r.group && r.group.add(a), n && n.register && o && n.register(a), a.root.didUpdate(), a.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), a.setOptions({
      ...a.options,
      onExitComplete: () => this.safeToRemove()
    })), ys.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: a } = this.props, i = n.projection;
    return i && (i.isPresent = a, o || t.layoutDependency !== r || r === void 0 ? i.willUpdate() : this.safeToRemove(), t.isPresent !== a && (a ? i.promote() : i.relegate() || lt.postRender(() => {
      const s = i.getStack();
      (!s || !s.members.length) && this.safeToRemove();
    }))), null;
  }
  componentDidUpdate() {
    const { projection: t } = this.props.visualElement;
    t && (t.root.didUpdate(), queueMicrotask(() => {
      !t.currentAnimation && t.isLead() && this.safeToRemove();
    }));
  }
  componentWillUnmount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n } = this.props, { projection: o } = t;
    o && (o.scheduleCheckAfterUnmount(), r && r.group && r.group.remove(o), n && n.deregister && n.deregister(o));
  }
  safeToRemove() {
    const { safeToRemove: t } = this.props;
    t && t();
  }
  render() {
    return null;
  }
}
function V0(e) {
  const [t, r] = L0(), n = bt(af);
  return Gt.createElement(YM, { ...e, layoutGroup: n, switchLayoutGroup: bt(Ob), isPresent: t, safeToRemove: r });
}
const XM = {
  borderRadius: {
    ...ua,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: ua,
  borderTopRightRadius: ua,
  borderBottomLeftRadius: ua,
  borderBottomRightRadius: ua,
  boxShadow: KM
}, z0 = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], ZM = z0.length, uv = (e) => typeof e == "string" ? parseFloat(e) : e, dv = (e) => typeof e == "number" || _e.test(e);
function JM(e, t, r, n, o, a) {
  o ? (e.opacity = mt(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    QM(n)
  ), e.opacityExit = mt(t.opacity !== void 0 ? t.opacity : 1, 0, e2(n))) : a && (e.opacity = mt(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let i = 0; i < ZM; i++) {
    const s = `border${z0[i]}Radius`;
    let l = fv(t, s), c = fv(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || dv(l) === dv(c) ? (e[s] = Math.max(mt(uv(l), uv(c), n), 0), (Lr.test(c) || Lr.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = mt(t.rotate || 0, r.rotate || 0, n));
}
function fv(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const QM = W0(0, 0.5, mf), e2 = W0(0.5, 0.95, Et);
function W0(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(qa(e, t, n));
}
function pv(e, t) {
  e.min = t.min, e.max = t.max;
}
function dr(e, t) {
  pv(e.x, t.x), pv(e.y, t.y);
}
function hv(e, t, r, n, o) {
  return e -= t, e = Ks(e, 1 / r, n), o !== void 0 && (e = Ks(e, 1 / o, n)), e;
}
function t2(e, t = 0, r = 1, n = 0.5, o, a = e, i = e) {
  if (Lr.test(t) && (t = parseFloat(t), t = mt(i.min, i.max, t / 100) - i.min), typeof t != "number")
    return;
  let s = mt(a.min, a.max, n);
  e === a && (s -= t), e.min = hv(e.min, t, r, s, o), e.max = hv(e.max, t, r, s, o);
}
function mv(e, t, [r, n, o], a, i) {
  t2(e, t[r], t[n], t[o], t.scale, a, i);
}
const r2 = ["x", "scaleX", "originX"], n2 = ["y", "scaleY", "originY"];
function vv(e, t, r, n) {
  mv(e.x, t, r2, r ? r.x : void 0, n ? n.x : void 0), mv(e.y, t, n2, r ? r.y : void 0, n ? n.y : void 0);
}
function gv(e) {
  return e.translate === 0 && e.scale === 1;
}
function H0(e) {
  return gv(e.x) && gv(e.y);
}
function Ku(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function yv(e) {
  return ar(e.x) / ar(e.y);
}
class o2 {
  constructor() {
    this.members = [];
  }
  add(t) {
    xf(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Sf(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
      const r = this.members[this.members.length - 1];
      r && this.promote(r);
    }
  }
  relegate(t) {
    const r = this.members.findIndex((o) => t === o);
    if (r === 0)
      return !1;
    let n;
    for (let o = r; o >= 0; o--) {
      const a = this.members[o];
      if (a.isPresent !== !1) {
        n = a;
        break;
      }
    }
    return n ? (this.promote(n), !0) : !1;
  }
  promote(t, r) {
    const n = this.lead;
    if (t !== n && (this.prevLead = n, this.lead = t, t.show(), n)) {
      n.instance && n.scheduleRender(), t.scheduleRender(), t.resumeFrom = n, r && (t.resumeFrom.preserveOpacity = !0), n.snapshot && (t.snapshot = n.snapshot, t.snapshot.latestValues = n.animationValues || n.latestValues), t.root && t.root.isUpdating && (t.isLayoutDirty = !0);
      const { crossfade: o } = t.options;
      o === !1 && n.hide();
    }
  }
  exitAnimationComplete() {
    this.members.forEach((t) => {
      const { options: r, resumingFrom: n } = t;
      r.onExitComplete && r.onExitComplete(), n && n.options.onExitComplete && n.options.onExitComplete();
    });
  }
  scheduleRender() {
    this.members.forEach((t) => {
      t.instance && t.scheduleRender(!1);
    });
  }
  /**
   * Clear any leads that have been removed this render to prevent them from being
   * used in future animations and to prevent memory leaks
   */
  removeLeadSnapshot() {
    this.lead && this.lead.snapshot && (this.lead.snapshot = void 0);
  }
}
function bv(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, a = e.y.translate / t.y;
  if ((o || a) && (n = `translate3d(${o}px, ${a}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const i = e.x.scale * t.x, s = e.y.scale * t.y;
  return (i !== 1 || s !== 1) && (n += `scale(${i}, ${s})`), n || "none";
}
const a2 = (e, t) => e.depth - t.depth;
class i2 {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    xf(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Sf(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(a2), this.isDirty = !1, this.children.forEach(t);
  }
}
function s2(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const a = o - r;
    a >= t && (rn(n), e(a - t));
  };
  return lt.read(n, !0), () => rn(n);
}
function l2(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function c2(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function u2(e, t, r) {
  const n = Xt(e) ? e : Uo(e);
  return n.start(bf("", n, t, r)), n.animation;
}
const xv = ["", "X", "Y", "Z"], Sv = 1e3;
let d2 = 0;
const Bn = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function U0({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(i = {}, s = t == null ? void 0 : t()) {
      this.id = d2++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        Bn.totalNodes = Bn.resolvedTargetDeltas = Bn.recalculatedProjection = 0, this.nodes.forEach(h2), this.nodes.forEach(b2), this.nodes.forEach(x2), this.nodes.forEach(m2), l2(Bn);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = i, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new i2());
    }
    addEventListener(i, s) {
      return this.eventHandlers.has(i) || this.eventHandlers.set(i, new wf()), this.eventHandlers.get(i).add(s);
    }
    notifyListeners(i, ...s) {
      const l = this.eventHandlers.get(i);
      l && l.notify(...s);
    }
    hasListeners(i) {
      return this.eventHandlers.has(i);
    }
    /**
     * Lifecycles
     */
    mount(i, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = c2(i), this.instance = i;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(i), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const f = () => this.root.updateBlockedByResize = !1;
        e(i, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = s2(f, 250), ys.hasAnimatedSinceResize && (ys.hasAnimatedSinceResize = !1, this.nodes.forEach(_v));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: f, hasRelativeTargetChanged: p, layout: v }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const m = this.options.transition || u.getDefaultTransition() || k2, { onLayoutAnimationStart: g, onLayoutAnimationComplete: b } = u.getProps(), y = !this.targetLayout || !Ku(this.targetLayout, v) || p, x = !f && p;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || x || f && (y || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, x);
          const _ = {
            ...I0(m, "layout"),
            onPlay: g,
            onComplete: b
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (_.delay = 0, _.type = !1), this.startAnimation(_);
        } else
          f || _v(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = v;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const i = this.getStack();
      i && i.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, rn(this.updateProjection);
    }
    // only on the root
    blockUpdate() {
      this.updateManuallyBlocked = !0;
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1;
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize;
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1;
    }
    // Note: currently only running on root node
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(S2), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: i } = this.options;
      return i && i.getProps().transformTemplate;
    }
    willUpdate(i = !0) {
      if (this.root.hasTreeAnimated = !0, this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return;
      }
      if (!this.root.isUpdating && this.root.startUpdate(), this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let u = 0; u < this.path.length; u++) {
        const d = this.path[u];
        d.shouldResetTransform = !0, d.updateScroll("snapshot"), d.options.layoutRoot && d.willUpdate(!1);
      }
      const { layoutId: s, layout: l } = this.options;
      if (s === void 0 && !l)
        return;
      const c = this.getTransformTemplate();
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), i && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(wv);
        return;
      }
      this.isUpdating || this.nodes.forEach(g2), this.isUpdating = !1, this.nodes.forEach(y2), this.nodes.forEach(f2), this.nodes.forEach(p2), this.clearAllSnapshots();
      const s = performance.now();
      ht.delta = kn(0, 1e3 / 60, s - ht.timestamp), ht.timestamp = s, ht.isProcessing = !0, $o.update.process(ht), $o.preRender.process(ht), $o.render.process(ht), ht.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(v2), this.sharedNodes.forEach(w2);
    }
    scheduleUpdateProjection() {
      lt.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      lt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed();
      });
    }
    /**
     * Update measurements
     */
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure());
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(), !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let l = 0; l < this.path.length; l++)
          this.path[l].updateScroll();
      const i = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = Ct(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, i ? i.layoutBox : void 0);
    }
    updateScroll(i = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === i && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: i,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const i = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !H0(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      i && (s || Fn(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(i = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return i && (l = this.removeTransform(l)), P2(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: i } = this.options;
      if (!i)
        return Ct();
      const s = i.measureViewportBox(), { scroll: l } = this.root;
      return l && (gn(s.x, l.offset.x), gn(s.y, l.offset.y)), s;
    }
    removeElementScroll(i) {
      const s = Ct();
      dr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            dr(s, i);
            const { scroll: f } = this.root;
            f && (gn(s.x, -f.offset.x), gn(s.y, -f.offset.y));
          }
          gn(s.x, u.offset.x), gn(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(i, s = !1) {
      const l = Ct();
      dr(l, i);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && wo(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), Fn(u.latestValues) && wo(l, u.latestValues);
      }
      return Fn(this.latestValues) && wo(l, this.latestValues), l;
    }
    removeTransform(i) {
      const s = Ct();
      dr(s, i);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !Fn(c.latestValues))
          continue;
        Gu(c.latestValues) && c.updateSnapshot();
        const u = Ct(), d = c.measurePageBox();
        dr(u, d), vv(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return Fn(this.latestValues) && vv(s, this.latestValues), s;
    }
    setTargetDelta(i) {
      this.targetDelta = i, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(i) {
      this.options = {
        ...this.options,
        ...i,
        crossfade: i.crossfade !== void 0 ? i.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ht.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(i = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(i || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: f } = this.options;
      if (!(!this.layout || !(d || f))) {
        if (this.resolvedRelativeTargetAt = ht.timestamp, !this.targetDelta && !this.relativeTarget) {
          const p = this.getClosestProjectingParent();
          p && p.layout && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ct(), this.relativeTargetOrigin = Ct(), Ia(this.relativeTargetOrigin, this.layout.layoutBox, p.layout.layoutBox), dr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = Ct(), this.targetWithTransforms = Ct()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), TM(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : dr(this.target, this.layout.layoutBox), F0(this.target, this.targetDelta)) : dr(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const p = this.getClosestProjectingParent();
            p && !!p.resumingFrom == !!this.resumingFrom && !p.options.layoutScroll && p.target && this.animationProgress !== 1 ? (this.relativeParent = p, this.forceRelativeParentToResolveTarget(), this.relativeTarget = Ct(), this.relativeTargetOrigin = Ct(), Ia(this.relativeTargetOrigin, this.target, p.target), dr(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          Bn.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || Gu(this.parent.latestValues) || M0(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var i;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((i = this.parent) === null || i === void 0) && i.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ht.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      dr(this.layoutCorrected, this.layout.layoutBox);
      const f = this.treeScale.x, p = this.treeScale.y;
      MM(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: v } = s;
      if (!v) {
        this.projectionTransform && (this.projectionDelta = So(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = So(), this.projectionDeltaWithTransform = So());
      const m = this.projectionTransform;
      Aa(this.projectionDelta, this.layoutCorrected, v, this.latestValues), this.projectionTransform = bv(this.projectionDelta, this.treeScale), (this.projectionTransform !== m || this.treeScale.x !== f || this.treeScale.y !== p) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", v)), Bn.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(i = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), i) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(i, s = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = So();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const f = Ct(), p = l ? l.source : void 0, v = this.layout ? this.layout.source : void 0, m = p !== v, g = this.getStack(), b = !g || g.members.length <= 1, y = !!(m && !b && this.options.crossfade === !0 && !this.path.some(C2));
      this.animationProgress = 0;
      let x;
      this.mixTargetDelta = (_) => {
        const w = _ / 1e3;
        Cv(d.x, i.x, w), Cv(d.y, i.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Ia(f, this.layout.layoutBox, this.relativeParent.layout.layoutBox), _2(this.relativeTarget, this.relativeTargetOrigin, f, w), x && Ku(this.relativeTarget, x) && (this.isProjectionDirty = !1), x || (x = Ct()), dr(x, this.relativeTarget)), m && (this.animationValues = u, JM(u, c, this.latestValues, w, y, b)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(i) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (rn(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = lt.update(() => {
        ys.hasAnimatedSinceResize = !0, this.currentAnimation = u2(0, Sv, {
          ...i,
          onUpdate: (s) => {
            this.mixTargetDelta(s), i.onUpdate && i.onUpdate(s);
          },
          onComplete: () => {
            i.onComplete && i.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const i = this.getStack();
      i && i.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Sv), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const i = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = i;
      if (!(!s || !l || !c)) {
        if (this !== i && this.layout && c && G0(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || Ct();
          const d = ar(this.layout.layoutBox.x);
          l.x.min = i.target.x.min, l.x.max = l.x.min + d;
          const f = ar(this.layout.layoutBox.y);
          l.y.min = i.target.y.min, l.y.max = l.y.min + f;
        }
        dr(s, l), wo(s, u), Aa(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(i, s) {
      this.sharedNodes.has(i) || this.sharedNodes.set(i, new o2()), this.sharedNodes.get(i).add(s);
      const c = s.options.initialPromotionConfig;
      s.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const i = this.getStack();
      return i ? i.lead === this : !0;
    }
    getLead() {
      var i;
      const { layoutId: s } = this.options;
      return s ? ((i = this.getStack()) === null || i === void 0 ? void 0 : i.lead) || this : this;
    }
    getPrevLead() {
      var i;
      const { layoutId: s } = this.options;
      return s ? (i = this.getStack()) === null || i === void 0 ? void 0 : i.prevLead : void 0;
    }
    getStack() {
      const { layoutId: i } = this.options;
      if (i)
        return this.root.sharedNodes.get(i);
    }
    promote({ needsReset: i, transition: s, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), i && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const i = this.getStack();
      return i ? i.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: i } = this.options;
      if (!i)
        return;
      let s = !1;
      const { latestValues: l } = i;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const c = {};
      for (let u = 0; u < xv.length; u++) {
        const d = "rotate" + xv[u];
        l[d] && (c[d] = l[d], i.setStaticValue(d, 0));
      }
      i.render();
      for (const u in c)
        i.setStaticValue(u, c[u]);
      i.scheduleRender();
    }
    getProjectionStyles(i = {}) {
      var s, l;
      const c = {};
      if (!this.instance || this.isSVG)
        return c;
      if (this.isVisible)
        c.visibility = "";
      else
        return { visibility: "hidden" };
      const u = this.getTransformTemplate();
      if (this.needsReset)
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = gs(i.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const m = {};
        return this.options.layoutId && (m.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, m.pointerEvents = gs(i.pointerEvents) || ""), this.hasProjected && !Fn(this.latestValues) && (m.transform = u ? u({}, "") : "none", this.hasProjected = !1), m;
      }
      const f = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = bv(this.projectionDeltaWithTransform, this.treeScale, f), u && (c.transform = u(f, c.transform));
      const { x: p, y: v } = this.projectionDelta;
      c.transformOrigin = `${p.origin * 100}% ${v.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = f.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : f.opacityExit : c.opacity = d === this ? f.opacity !== void 0 ? f.opacity : "" : f.opacityExit !== void 0 ? f.opacityExit : 0;
      for (const m in Vs) {
        if (f[m] === void 0)
          continue;
        const { correct: g, applyTo: b } = Vs[m], y = c.transform === "none" ? f[m] : g(f[m], d);
        if (b) {
          const x = b.length;
          for (let _ = 0; _ < x; _++)
            c[b[_]] = y;
        } else
          c[m] = y;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? gs(i.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((i) => {
        var s;
        return (s = i.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(wv), this.root.sharedNodes.clear();
    }
  };
}
function f2(e) {
  e.updateLayout();
}
function p2(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: a } = e.options, i = r.source !== e.layout.source;
    a === "size" ? $r((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = ar(f);
      f.min = n[d].min, f.max = f.min + p;
    }) : G0(a, r.layoutBox, n) && $r((d) => {
      const f = i ? r.measuredBox[d] : r.layoutBox[d], p = ar(n[d]);
      f.max = f.min + p, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + p);
    });
    const s = So();
    Aa(s, n, r.layoutBox);
    const l = So();
    i ? Aa(l, e.applyTransform(o, !0), r.measuredBox) : Aa(l, n, r.layoutBox);
    const c = !H0(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: f, layout: p } = d;
        if (f && p) {
          const v = Ct();
          Ia(v, r.layoutBox, f.layoutBox);
          const m = Ct();
          Ia(m, n, p.layoutBox), Ku(v, m) || (u = !0), d.options.layoutRoot && (e.relativeTarget = m, e.relativeTargetOrigin = v, e.relativeParent = d);
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: n,
      snapshot: r,
      delta: l,
      layoutDelta: s,
      hasLayoutChanged: c,
      hasRelativeTargetChanged: u
    });
  } else if (e.isLead()) {
    const { onExitComplete: n } = e.options;
    n && n();
  }
  e.options.transition = void 0;
}
function h2(e) {
  Bn.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function m2(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function v2(e) {
  e.clearSnapshot();
}
function wv(e) {
  e.clearMeasurements();
}
function g2(e) {
  e.isLayoutDirty = !1;
}
function y2(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function _v(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function b2(e) {
  e.resolveTargetDelta();
}
function x2(e) {
  e.calcProjection();
}
function S2(e) {
  e.resetRotation();
}
function w2(e) {
  e.removeLeadSnapshot();
}
function Cv(e, t, r) {
  e.translate = mt(t.translate, 0, r), e.scale = mt(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function kv(e, t, r, n) {
  e.min = mt(t.min, r.min, n), e.max = mt(t.max, r.max, n);
}
function _2(e, t, r, n) {
  kv(e.x, t.x, r.x, n), kv(e.y, t.y, r.y, n);
}
function C2(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const k2 = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function Pv(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function P2(e) {
  Pv(e.x), Pv(e.y);
}
function G0(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Hu(yv(t), yv(r), 0.2);
}
const E2 = U0({
  attachResizeListener: (e, t) => Zr(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), Zc = {
  current: void 0
}, q0 = U0({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!Zc.current) {
      const e = new E2({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), Zc.current = e;
    }
    return Zc.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), T2 = {
  pan: {
    Feature: UM
  },
  drag: {
    Feature: HM,
    ProjectionNode: q0,
    MeasureLayout: V0
  }
}, A2 = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function I2(e) {
  const t = A2.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const R2 = 4;
function Yu(e, t, r = 1) {
  Pr(r <= R2, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = I2(e);
  if (!n)
    return;
  const a = window.getComputedStyle(t).getPropertyValue(n);
  return a ? a.trim() : ju(o) ? Yu(o, t, r + 1) : o;
}
function $2(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const a = o.get();
    if (!ju(a))
      return;
    const i = Yu(a, n);
    i && o.set(i);
  });
  for (const o in t) {
    const a = t[o];
    if (!ju(a))
      continue;
    const i = Yu(a, n);
    i && (t[o] = i, r || (r = {}), r[o] === void 0 && (r[o] = a));
  }
  return { target: t, transitionEnd: r };
}
const N2 = /* @__PURE__ */ new Set([
  "width",
  "height",
  "top",
  "left",
  "right",
  "bottom",
  "x",
  "y",
  "translateX",
  "translateY"
]), K0 = (e) => N2.has(e), O2 = (e) => Object.keys(e).some(K0), Zi = (e) => e === no || e === _e, Ev = (e, t) => parseFloat(e.split(", ")[t]), Tv = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Ev(o[1], t);
  {
    const a = n.match(/^matrix\((.+)\)$/);
    return a ? Ev(a[1], e) : 0;
  }
}, D2 = /* @__PURE__ */ new Set(["x", "y", "z"]), j2 = ci.filter((e) => !D2.has(e));
function M2(e) {
  const t = [];
  return j2.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Av = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Tv(4, 13),
  y: Tv(5, 14)
}, F2 = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, a = getComputedStyle(o), { display: i } = a, s = {};
  i === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = Av[c](n, a);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = Av[c](l, a);
  }), e;
}, B2 = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(K0);
  let a = [], i = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = ca(u);
    const f = t[l];
    let p;
    if (Ws(f)) {
      const v = f.length, m = f[0] === null ? 1 : 0;
      u = f[m], d = ca(u);
      for (let g = m; g < v && f[g] !== null; g++)
        p ? Pr(ca(f[g]) === p, "All keyframes must be of the same type") : (p = ca(f[g]), Pr(p === d || Zi(d) && Zi(p), "Keyframes must be of the same dimension as the current value"));
    } else
      p = ca(f);
    if (d !== p)
      if (Zi(d) && Zi(p)) {
        const v = c.get();
        typeof v == "string" && c.set(parseFloat(v)), typeof f == "string" ? t[l] = parseFloat(f) : Array.isArray(f) && p === _e && (t[l] = f.map(parseFloat));
      } else
        d != null && d.transform && (p != null && p.transform) && (u === 0 || f === 0) ? u === 0 ? c.set(p.transform(u)) : t[l] = d.transform(f) : (i || (a = M2(e), i = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(f));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = F2(t, e, s);
    return a.length && a.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), Cl && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function L2(e, t, r, n) {
  return O2(t) ? B2(e, t, r, n) : { target: t, transitionEnd: n };
}
const V2 = (e, t, r, n) => {
  const o = $2(e, t, n);
  return t = o.target, n = o.transitionEnd, L2(e, t, r, n);
}, Xu = { current: null }, Y0 = { current: !1 };
function z2() {
  if (Y0.current = !0, !!Cl)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Xu.current = e.matches;
      e.addListener(t), t();
    } else
      Xu.current = !1;
}
function W2(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const a = t[o], i = r[o];
    if (Xt(a))
      e.addValue(o, a), qs(n) && n.add(o), process.env.NODE_ENV === "development" && _f(a.version === "10.12.18", `Attempting to mix Framer Motion versions ${a.version} with 10.12.18 may not work as expected.`);
    else if (Xt(i))
      e.addValue(o, Uo(a, { owner: e })), qs(n) && n.remove(o);
    else if (i !== a)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(a);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Uo(s !== void 0 ? s : a, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Iv = /* @__PURE__ */ new WeakMap(), X0 = Object.keys(Ua), H2 = X0.length, Rv = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], U2 = of.length;
class G2 {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: a }, i = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => lt.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = a;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = i, this.isControllingVariants = Pl(r), this.isVariantNode = Nb(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const f = u[d];
      s[d] !== void 0 && Xt(f) && (f.set(s[d], !1), qs(c) && c.add(d));
    }
  }
  /**
   * This method takes React props and returns found MotionValues. For example, HTML
   * MotionValues will be found within the style prop, whereas for Three.js within attribute arrays.
   *
   * This isn't an abstract method as it needs calling in the constructor, but it is
   * intended to be one.
   */
  scrapeMotionValuesFromProps(t, r) {
    return {};
  }
  mount(t) {
    this.current = t, Iv.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), Y0.current || z2(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Xu.current, process.env.NODE_ENV !== "production" && _f(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Iv.delete(this.current), this.projection && this.projection.unmount(), rn(this.notifyUpdate), rn(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = ro.has(t), o = r.on("change", (i) => {
      this.latestValues[t] = i, this.props.onUpdate && lt.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), a = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), a();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, a) {
    let i, s;
    if (process.env.NODE_ENV !== "production" && o && n) {
      const l = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      r.ignoreStrict ? fi(!1, l) : Pr(!1, l);
    }
    for (let l = 0; l < H2; l++) {
      const c = X0[l], { isEnabled: u, Feature: d, ProjectionNode: f, MeasureLayout: p } = Ua[c];
      f && (i = f), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), p && (s = p));
    }
    if (!this.projection && i) {
      this.projection = new i(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: f, layoutRoot: p } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && bo(d),
        visualElement: this,
        scheduleRender: () => this.scheduleRender(),
        /**
         * TODO: Update options in an effect. This could be tricky as it'll be too late
         * to update by the time layout animations run.
         * We also need to fix this safeToRemove by linking it up to the one returned by usePresence,
         * ensuring it gets called if there's no potential layout animations.
         *
         */
        animationType: typeof c == "string" ? c : "both",
        initialPromotionConfig: a,
        layoutScroll: f,
        layoutRoot: p
      });
    }
    return s;
  }
  updateFeatures() {
    for (const t in this.features) {
      const r = this.features[t];
      r.isMounted ? r.update() : (r.mount(), r.isMounted = !0);
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.options, this.props);
  }
  /**
   * Measure the current viewport box with or without transforms.
   * Only measures axis-aligned boxes, rotate and skew must be manually
   * removed with a re-render to work.
   */
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : Ct();
  }
  getStaticValue(t) {
    return this.latestValues[t];
  }
  setStaticValue(t, r) {
    this.latestValues[t] = r;
  }
  /**
   * Make a target animatable by Popmotion. For instance, if we're
   * trying to animate width from 100px to 100vw we need to measure 100vw
   * in pixels to determine what we really need to animate to. This is also
   * pluggable to support Framer's custom value types like Color,
   * and CSS variables.
   */
  makeTargetAnimatable(t, r = !0) {
    return this.makeTargetAnimatableFromInstance(t, this.props, r);
  }
  /**
   * Update the provided props. Ensure any newly-added motion values are
   * added to our map, old ones removed, and listeners updated.
   */
  update(t, r) {
    (t.transformTemplate || this.props.transformTemplate) && this.scheduleRender(), this.prevProps = this.props, this.props = t, this.prevPresenceContext = this.presenceContext, this.presenceContext = r;
    for (let n = 0; n < Rv.length; n++) {
      const o = Rv[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const a = t["on" + o];
      a && (this.propEventSubscriptions[o] = this.on(o, a));
    }
    this.prevMotionValues = W2(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
  }
  getProps() {
    return this.props;
  }
  /**
   * Returns the variant definition with a given name.
   */
  getVariant(t) {
    return this.props.variants ? this.props.variants[t] : void 0;
  }
  /**
   * Returns the defined default transition on this component.
   */
  getDefaultTransition() {
    return this.props.transition;
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint;
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0;
  }
  getVariantContext(t = !1) {
    if (t)
      return this.parent ? this.parent.getVariantContext() : void 0;
    if (!this.isControllingVariants) {
      const n = this.parent ? this.parent.getVariantContext() || {} : {};
      return this.props.initial !== void 0 && (n.initial = this.props.initial), n;
    }
    const r = {};
    for (let n = 0; n < U2; n++) {
      const o = of[n], a = this.props[o];
      (Ha(a) || a === !1) && (r[o] = a);
    }
    return r;
  }
  /**
   * Add a child visual element to our set of children.
   */
  addVariantChild(t) {
    const r = this.getClosestVariantNode();
    if (r)
      return r.variantChildren && r.variantChildren.add(t), () => r.variantChildren.delete(t);
  }
  /**
   * Add a motion value and bind it to this visual element.
   */
  addValue(t, r) {
    r !== this.values.get(t) && (this.removeValue(t), this.bindToMotionValue(t, r)), this.values.set(t, r), this.latestValues[t] = r.get();
  }
  /**
   * Remove a motion value and unbind any active subscriptions.
   */
  removeValue(t) {
    this.values.delete(t);
    const r = this.valueSubscriptions.get(t);
    r && (r(), this.valueSubscriptions.delete(t)), delete this.latestValues[t], this.removeValueFromRenderState(t, this.renderState);
  }
  /**
   * Check whether we have a motion value for this key
   */
  hasValue(t) {
    return this.values.has(t);
  }
  getValue(t, r) {
    if (this.props.values && this.props.values[t])
      return this.props.values[t];
    let n = this.values.get(t);
    return n === void 0 && r !== void 0 && (n = Uo(r, { owner: this }), this.addValue(t, n)), n;
  }
  /**
   * If we're trying to animate to a previously unencountered value,
   * we need to check for it in our state and as a last resort read it
   * directly from the instance (which might have performance implications).
   */
  readValue(t) {
    return this.latestValues[t] !== void 0 || !this.current ? this.latestValues[t] : this.readValueFromInstance(this.current, t, this.options);
  }
  /**
   * Set the base target to later animate back to. This is currently
   * only hydrated on creation and when we first read a value.
   */
  setBaseTarget(t, r) {
    this.baseTarget[t] = r;
  }
  /**
   * Find the base target for a value thats been removed from all animation
   * props.
   */
  getBaseTarget(t) {
    var r;
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = hf(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const a = this.getBaseTargetFromProps(this.props, t);
    return a !== void 0 && !Xt(a) ? a : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new wf()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class Z0 extends G2 {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, a) {
    let i = uM(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), i && (i = o(i))), a) {
      lM(this, n, i);
      const s = V2(this, n, i, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function q2(e) {
  return window.getComputedStyle(e);
}
class K2 extends Z0 {
  readValueFromInstance(t, r) {
    if (ro.has(r)) {
      const n = yf(r);
      return n && n.default || 0;
    } else {
      const n = q2(t), o = (Mb(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return B0(t, r);
  }
  build(t, r, n, o) {
    lf(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return pf(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    Xt(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    Wb(t, r, n, o);
  }
}
class Y2 extends Z0 {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (ro.has(r)) {
      const n = yf(r);
      return n && n.default || 0;
    }
    return r = Hb.has(r) ? r : ff(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return Ct();
  }
  scrapeMotionValuesFromProps(t, r) {
    return Gb(t, r);
  }
  build(t, r, n, o) {
    uf(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    Ub(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = df(t.tagName), super.mount(t);
  }
}
const X2 = (e, t) => sf(e) ? new Y2(t, { enableHardwareAcceleration: !1 }) : new K2(t, { enableHardwareAcceleration: !0 }), Z2 = {
  layout: {
    ProjectionNode: q0,
    MeasureLayout: V0
  }
}, J2 = {
  ...CM,
  ...qD,
  ...T2,
  ...Z2
}, Tr = /* @__PURE__ */ tD((e, t) => ID(e, t, J2, X2));
function J0() {
  const e = ie(!1);
  return Ls(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Q2() {
  const e = J0(), [t, r] = de(0), n = I(() => {
    e.current && r(t + 1);
  }, [t]);
  return [I(() => lt.postRender(n), [n]), t];
}
class e5 extends Q.Component {
  getSnapshotBeforeUpdate(t) {
    const r = this.props.childRef.current;
    if (r && t.isPresent && !this.props.isPresent) {
      const n = this.props.sizeRef.current;
      n.height = r.offsetHeight || 0, n.width = r.offsetWidth || 0, n.top = r.offsetTop, n.left = r.offsetLeft;
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
function t5({ children: e, isPresent: t }) {
  const r = It(), n = ie(null), o = ie({
    width: 0,
    height: 0,
    top: 0,
    left: 0
  });
  return Og(() => {
    const { width: a, height: i, top: s, left: l } = o.current;
    if (t || !n.current || !a || !i)
      return;
    n.current.dataset.motionPopId = r;
    const c = document.createElement("style");
    return document.head.appendChild(c), c.sheet && c.sheet.insertRule(`
          [data-motion-pop-id="${r}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `), () => {
      document.head.removeChild(c);
    };
  }, [t]), Q.createElement(e5, { isPresent: t, childRef: n, sizeRef: o }, Q.cloneElement(e, { ref: n }));
}
const Jc = ({ children: e, initial: t, isPresent: r, onExitComplete: n, custom: o, presenceAffectsLayout: a, mode: i }) => {
  const s = qb(r5), l = It(), c = we(
    () => ({
      id: l,
      initial: t,
      isPresent: r,
      custom: o,
      onExitComplete: (u) => {
        s.set(u, !0);
        for (const d of s.values())
          if (!d)
            return;
        n && n();
      },
      register: (u) => (s.set(u, !1), () => s.delete(u))
    }),
    /**
     * If the presence of a child affects the layout of the components around it,
     * we want to make a new context value to ensure they get re-rendered
     * so they can detect that layout change.
     */
    a ? void 0 : [r]
  );
  return we(() => {
    s.forEach((u, d) => s.set(d, !1));
  }, [r]), Q.useEffect(() => {
    !r && !s.size && n && n();
  }, [r]), i === "popLayout" && (e = Q.createElement(t5, { isPresent: r }, e)), Q.createElement(li.Provider, { value: c }, e);
};
function r5() {
  return /* @__PURE__ */ new Map();
}
function n5(e) {
  return ge(() => () => e(), []);
}
const vo = (e) => e.key || "";
function o5(e, t) {
  e.forEach((r) => {
    const n = vo(r);
    t.set(n, r);
  });
}
function a5(e) {
  const t = [];
  return Hr.forEach(e, (r) => {
    Xo(r) && t.push(r);
  }), t;
}
const Tn = ({ children: e, custom: t, initial: r = !0, onExitComplete: n, exitBeforeEnter: o, presenceAffectsLayout: a = !0, mode: i = "sync" }) => {
  Pr(!o, "Replace exitBeforeEnter with mode='wait'");
  const s = bt(af).forceRender || Q2()[0], l = J0(), c = a5(e);
  let u = c;
  const d = ie(/* @__PURE__ */ new Map()).current, f = ie(u), p = ie(/* @__PURE__ */ new Map()).current, v = ie(!0);
  if (Ls(() => {
    v.current = !1, o5(c, p), f.current = u;
  }), n5(() => {
    v.current = !0, p.clear(), d.clear();
  }), v.current)
    return Q.createElement(Q.Fragment, null, u.map((y) => Q.createElement(Jc, { key: vo(y), isPresent: !0, initial: r ? void 0 : !1, presenceAffectsLayout: a, mode: i }, y)));
  u = [...u];
  const m = f.current.map(vo), g = c.map(vo), b = m.length;
  for (let y = 0; y < b; y++) {
    const x = m[y];
    g.indexOf(x) === -1 && !d.has(x) && d.set(x, void 0);
  }
  return i === "wait" && d.size && (u = []), d.forEach((y, x) => {
    if (g.indexOf(x) !== -1)
      return;
    const _ = p.get(x);
    if (!_)
      return;
    const w = m.indexOf(x);
    let P = y;
    if (!P) {
      const k = () => {
        p.delete(x), d.delete(x);
        const R = f.current.findIndex((j) => j.key === x);
        if (f.current.splice(R, 1), !d.size) {
          if (f.current = c, l.current === !1)
            return;
          s(), n && n();
        }
      };
      P = Q.createElement(Jc, { key: vo(_), isPresent: !1, onExitComplete: k, custom: t, presenceAffectsLayout: a, mode: i }, _), d.set(x, P);
    }
    u.splice(w, 0, P);
  }), u = u.map((y) => {
    const x = y.key;
    return d.has(x) ? y : Q.createElement(Jc, { key: vo(y), isPresent: !0, presenceAffectsLayout: a, mode: i }, y);
  }), process.env.NODE_ENV !== "production" && i === "wait" && u.length > 1 && console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`), Q.createElement(Q.Fragment, null, d.size ? u : u.map((y) => Tt(y)));
};
var i5 = {
  initial: (e) => {
    const { position: t } = e, r = ["top", "bottom"].includes(t) ? "y" : "x";
    let n = ["top-right", "bottom-right"].includes(t) ? 1 : -1;
    return t === "bottom" && (n = 1), {
      opacity: 0,
      [r]: n * 24
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
}, Q0 = CC((e) => {
  const {
    id: t,
    message: r,
    onCloseComplete: n,
    onRequestRemove: o,
    requestClose: a = !1,
    position: i = "bottom",
    duration: s = 5e3,
    containerStyle: l,
    motionVariants: c = i5,
    toastSpacing: u = "0.5rem"
  } = e, [d, f] = de(s), p = GM();
  kr(() => {
    p || n == null || n();
  }, [p]), kr(() => {
    f(s);
  }, [s]);
  const v = () => f(null), m = () => f(s), g = () => {
    p && o();
  };
  ge(() => {
    p && a && o();
  }, [p, a, o]), GO(g, d);
  const b = we(
    () => ({
      pointerEvents: "auto",
      maxWidth: 560,
      minWidth: 300,
      margin: u,
      ...l
    }),
    [l, u]
  ), y = we(() => HO(i), [i]);
  return /* @__PURE__ */ h.jsx(
    Tr.div,
    {
      layout: !0,
      className: "chakra-toast",
      variants: c,
      initial: "initial",
      animate: "animate",
      exit: "exit",
      onHoverStart: v,
      onHoverEnd: m,
      custom: { position: i },
      style: y,
      children: /* @__PURE__ */ h.jsx(
        E.div,
        {
          role: "status",
          "aria-atomic": "true",
          className: "chakra-toast__inner",
          __css: b,
          children: Bt(r, { id: t, onClose: g })
        }
      )
    }
  );
});
Q0.displayName = "ToastComponent";
function ex(e, t) {
  var r;
  const n = e ?? "bottom", a = {
    "top-start": { ltr: "top-left", rtl: "top-right" },
    "top-end": { ltr: "top-right", rtl: "top-left" },
    "bottom-start": { ltr: "bottom-left", rtl: "bottom-right" },
    "bottom-end": { ltr: "bottom-right", rtl: "bottom-left" }
  }[n];
  return (r = a == null ? void 0 : a[t]) != null ? r : n;
}
var $v = {
  path: /* @__PURE__ */ h.jsxs("g", { stroke: "currentColor", strokeWidth: "1.5", children: [
    /* @__PURE__ */ h.jsx(
      "path",
      {
        strokeLinecap: "round",
        fill: "none",
        d: "M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"
      }
    ),
    /* @__PURE__ */ h.jsx(
      "path",
      {
        fill: "currentColor",
        strokeLinecap: "round",
        d: "M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"
      }
    ),
    /* @__PURE__ */ h.jsx("circle", { fill: "none", strokeMiterlimit: "10", cx: "12", cy: "12", r: "11.25" })
  ] }),
  viewBox: "0 0 24 24"
}, Rt = O((e, t) => {
  const {
    as: r,
    viewBox: n,
    color: o = "currentColor",
    focusable: a = !1,
    children: i,
    className: s,
    __css: l,
    ...c
  } = e, u = H("chakra-icon", s), d = Pt("Icon", e), f = {
    w: "1em",
    h: "1em",
    display: "inline-block",
    lineHeight: "1em",
    flexShrink: 0,
    color: o,
    ...l,
    ...d
  }, p = {
    ref: t,
    focusable: a,
    className: u,
    __css: f
  }, v = n ?? $v.viewBox;
  if (r && typeof r != "string")
    return /* @__PURE__ */ h.jsx(E.svg, { as: r, ...p, ...c });
  const m = i ?? $v.path;
  return /* @__PURE__ */ h.jsx(E.svg, { verticalAlign: "middle", viewBox: v, ...p, ...c, children: m });
});
Rt.displayName = "Icon";
function s5(e) {
  const {
    viewBox: t = "0 0 24 24",
    d: r,
    displayName: n,
    defaultProps: o = {}
  } = e, a = Hr.toArray(e.path), i = O((s, l) => /* @__PURE__ */ h.jsx(Rt, { ref: l, viewBox: t, ...o, ...s, children: a.length ? a : /* @__PURE__ */ h.jsx("path", { fill: "currentColor", d: r }) }));
  return i.displayName = n, i;
}
function l5(e) {
  return /* @__PURE__ */ h.jsx(Rt, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ h.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
    }
  ) });
}
function c5(e) {
  return /* @__PURE__ */ h.jsx(Rt, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ h.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"
    }
  ) });
}
function Nv(e) {
  return /* @__PURE__ */ h.jsx(Rt, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ h.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
    }
  ) });
}
var u5 = Er({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Rl = O((e, t) => {
  const r = Pt("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: a = "0.45s",
    emptyColor: i = "transparent",
    className: s,
    ...l
  } = Ee(e), c = H("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: i,
    borderLeftColor: i,
    animation: `${u5} ${a} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: t,
      __css: u,
      className: c,
      ...l,
      children: n && /* @__PURE__ */ h.jsx(E.span, { srOnly: !0, children: n })
    }
  );
});
Rl.displayName = "Spinner";
var [d5, Cf] = Ie({
  name: "AlertContext",
  hookName: "useAlertContext",
  providerName: "<Alert />"
}), [f5, $l] = Ie({
  name: "AlertStylesContext",
  hookName: "useAlertStyles",
  providerName: "<Alert />"
}), tx = {
  info: { icon: c5, colorScheme: "blue" },
  warning: { icon: Nv, colorScheme: "orange" },
  success: { icon: l5, colorScheme: "green" },
  error: { icon: Nv, colorScheme: "red" },
  loading: { icon: Rl, colorScheme: "blue" }
};
function p5(e) {
  return tx[e].colorScheme;
}
function h5(e) {
  return tx[e].icon;
}
var kf = O(
  function(t, r) {
    const n = $l(), { status: o } = Cf(), a = {
      display: "inline",
      ...n.description
    };
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: H("chakra-alert__desc", t.className),
        __css: a
      }
    );
  }
);
kf.displayName = "AlertDescription";
function Pf(e) {
  const { status: t } = Cf(), r = h5(t), n = $l(), o = t === "loading" ? n.spinner : n.icon;
  return /* @__PURE__ */ h.jsx(
    E.span,
    {
      display: "inherit",
      "data-status": t,
      ...e,
      className: H("chakra-alert__icon", e.className),
      __css: o,
      children: e.children || /* @__PURE__ */ h.jsx(r, { h: "100%", w: "100%" })
    }
  );
}
Pf.displayName = "AlertIcon";
var Ef = O(
  function(t, r) {
    const n = $l(), { status: o } = Cf();
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        "data-status": o,
        ...t,
        className: H("chakra-alert__title", t.className),
        __css: n.title
      }
    );
  }
);
Ef.displayName = "AlertTitle";
var Tf = O(function(t, r) {
  var n;
  const { status: o = "info", addRole: a = !0, ...i } = Ee(t), s = (n = t.colorScheme) != null ? n : p5(o), l = Ze("Alert", { ...t, colorScheme: s }), c = {
    width: "100%",
    display: "flex",
    alignItems: "center",
    position: "relative",
    overflow: "hidden",
    ...l.container
  };
  return /* @__PURE__ */ h.jsx(d5, { value: { status: o }, children: /* @__PURE__ */ h.jsx(f5, { value: l, children: /* @__PURE__ */ h.jsx(
    E.div,
    {
      "data-status": o,
      role: a ? "alert" : void 0,
      ref: r,
      ...i,
      className: H("chakra-alert", t.className),
      __css: c
    }
  ) }) });
});
Tf.displayName = "Alert";
function m5(e) {
  return /* @__PURE__ */ h.jsx(Rt, { focusable: "false", "aria-hidden": !0, ...e, children: /* @__PURE__ */ h.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"
    }
  ) });
}
var hi = O(
  function(t, r) {
    const n = Pt("CloseButton", t), { children: o, isDisabled: a, __css: i, ...s } = Ee(t), l = {
      outline: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    };
    return /* @__PURE__ */ h.jsx(
      E.button,
      {
        type: "button",
        "aria-label": "Close",
        ref: r,
        disabled: a,
        __css: {
          ...l,
          ...n,
          ...i
        },
        ...s,
        children: o || /* @__PURE__ */ h.jsx(m5, { width: "1em", height: "1em" })
      }
    );
  }
);
hi.displayName = "CloseButton";
var v5 = {
  top: [],
  "top-left": [],
  "top-right": [],
  "bottom-left": [],
  bottom: [],
  "bottom-right": []
}, Dr = g5(v5);
function g5(e) {
  let t = e;
  const r = /* @__PURE__ */ new Set(), n = (o) => {
    t = o(t), r.forEach((a) => a());
  };
  return {
    getState: () => t,
    subscribe: (o) => (r.add(o), () => {
      n(() => e), r.delete(o);
    }),
    removeToast: (o, a) => {
      n((i) => ({
        ...i,
        [a]: i[a].filter((s) => s.id != o)
      }));
    },
    notify: (o, a) => {
      const i = y5(o, a), { position: s, id: l } = i;
      return n((c) => {
        var u, d;
        const p = s.includes("top") ? [i, ...(u = c[s]) != null ? u : []] : [...(d = c[s]) != null ? d : [], i];
        return {
          ...c,
          [s]: p
        };
      }), l;
    },
    update: (o, a) => {
      o && n((i) => {
        const s = { ...i }, { position: l, index: c } = Em(s, o);
        return l && c !== -1 && (s[l][c] = {
          ...s[l][c],
          ...a,
          message: Af(a)
        }), s;
      });
    },
    closeAll: ({ positions: o } = {}) => {
      n((a) => (o ?? [
        "bottom",
        "bottom-right",
        "bottom-left",
        "top",
        "top-left",
        "top-right"
      ]).reduce(
        (l, c) => (l[c] = a[c].map((u) => ({
          ...u,
          requestClose: !0
        })), l),
        { ...a }
      ));
    },
    close: (o) => {
      n((a) => {
        const i = Ib(a, o);
        return i ? {
          ...a,
          [i]: a[i].map((s) => s.id == o ? {
            ...s,
            requestClose: !0
          } : s)
        } : a;
      });
    },
    isActive: (o) => !!Em(Dr.getState(), o).position
  };
}
var Ov = 0;
function y5(e, t = {}) {
  var r, n;
  Ov += 1;
  const o = (r = t.id) != null ? r : Ov, a = (n = t.position) != null ? n : "bottom";
  return {
    id: o,
    message: e,
    position: a,
    duration: t.duration,
    onCloseComplete: t.onCloseComplete,
    onRequestRemove: () => Dr.removeToast(String(o), a),
    status: t.status,
    requestClose: !1,
    containerStyle: t.containerStyle
  };
}
var rx = (e) => {
  const {
    status: t,
    variant: r = "solid",
    id: n,
    title: o,
    isClosable: a,
    onClose: i,
    description: s,
    colorScheme: l,
    icon: c
  } = e, u = n ? {
    root: `toast-${n}`,
    title: `toast-${n}-title`,
    description: `toast-${n}-description`
  } : void 0;
  return /* @__PURE__ */ h.jsxs(
    Tf,
    {
      addRole: !1,
      status: t,
      variant: r,
      id: u == null ? void 0 : u.root,
      alignItems: "start",
      borderRadius: "md",
      boxShadow: "lg",
      paddingEnd: 8,
      textAlign: "start",
      width: "auto",
      colorScheme: l,
      children: [
        /* @__PURE__ */ h.jsx(Pf, { children: c }),
        /* @__PURE__ */ h.jsxs(E.div, { flex: "1", maxWidth: "100%", children: [
          o && /* @__PURE__ */ h.jsx(Ef, { id: u == null ? void 0 : u.title, children: o }),
          s && /* @__PURE__ */ h.jsx(kf, { id: u == null ? void 0 : u.description, display: "block", children: s })
        ] }),
        a && /* @__PURE__ */ h.jsx(
          hi,
          {
            size: "sm",
            onClick: i,
            position: "absolute",
            insetEnd: 1,
            top: 1
          }
        )
      ]
    }
  );
};
function Af(e = {}) {
  const { render: t, toastComponent: r = rx } = e;
  return (o) => typeof t == "function" ? t({ ...o, ...e }) : /* @__PURE__ */ h.jsx(r, { ...o, ...e });
}
function If(e, t) {
  const r = (o) => {
    var a;
    return {
      ...t,
      ...o,
      position: ex(
        (a = o == null ? void 0 : o.position) != null ? a : t == null ? void 0 : t.position,
        e
      )
    };
  }, n = (o) => {
    const a = r(o), i = Af(a);
    return Dr.notify(i, a);
  };
  return n.update = (o, a) => {
    Dr.update(o, r(a));
  }, n.promise = (o, a) => {
    const i = n({
      ...a.loading,
      status: "loading",
      duration: null
    });
    o.then(
      (s) => n.update(i, {
        status: "success",
        duration: 5e3,
        ...Bt(a.success, s)
      })
    ).catch(
      (s) => n.update(i, {
        status: "error",
        duration: 5e3,
        ...Bt(a.error, s)
      })
    );
  }, n.closeAll = Dr.closeAll, n.close = Dr.close, n.isActive = Dr.isActive, n;
}
var [nx, b5] = Ie({
  name: "ToastOptionsContext",
  strict: !1
}), Rf = (e) => {
  const t = kC(
    Dr.subscribe,
    Dr.getState,
    Dr.getState
  ), {
    motionVariants: r,
    component: n = Q0,
    portalProps: o
  } = e, i = Object.keys(t).map((s) => {
    const l = t[s];
    return /* @__PURE__ */ h.jsx(
      "div",
      {
        role: "region",
        "aria-live": "polite",
        id: `chakra-toast-manager-${s}`,
        style: UO(s),
        children: /* @__PURE__ */ h.jsx(Tn, { initial: !1, children: l.map((c) => /* @__PURE__ */ h.jsx(
          n,
          {
            motionVariants: r,
            ...c
          },
          c.id
        )) })
      },
      s
    );
  });
  return /* @__PURE__ */ h.jsx(Jn, { ...o, children: i });
};
function x5(e) {
  const { theme: t } = hl(), r = b5();
  return we(
    () => If(t.direction, {
      ...r,
      ...e
    }),
    [e, t.direction, r]
  );
}
var S5 = {
  duration: 5e3,
  variant: "solid"
}, lo = {
  theme: fN,
  colorMode: "light",
  toggleColorMode: () => {
  },
  setColorMode: () => {
  },
  defaultOptions: S5,
  forced: !1
};
function w5({
  theme: e = lo.theme,
  colorMode: t = lo.colorMode,
  toggleColorMode: r = lo.toggleColorMode,
  setColorMode: n = lo.setColorMode,
  defaultOptions: o = lo.defaultOptions,
  motionVariants: a,
  toastSpacing: i,
  component: s,
  forced: l
} = lo) {
  const c = {
    colorMode: t,
    setColorMode: n,
    toggleColorMode: r,
    forced: l
  };
  return {
    ToastContainer: () => /* @__PURE__ */ h.jsx(Qd, { theme: e, children: /* @__PURE__ */ h.jsx(Qn.Provider, { value: c, children: /* @__PURE__ */ h.jsx(
      Rf,
      {
        defaultOptions: o,
        motionVariants: a,
        toastSpacing: i,
        component: s
      }
    ) }) }),
    toast: If(e.direction, o)
  };
}
var ox = (e) => function({
  children: r,
  theme: n = e,
  toastOptions: o,
  ...a
}) {
  return /* @__PURE__ */ h.jsxs(zO, { theme: n, ...a, children: [
    /* @__PURE__ */ h.jsx(nx, { value: o == null ? void 0 : o.defaultOptions, children: r }),
    /* @__PURE__ */ h.jsx(Rf, { ...o })
  ] });
}, ax = ox(xl), _5 = ox(Ud), C5 = Object.defineProperty, k5 = (e, t, r) => t in e ? C5(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, yt = (e, t, r) => (k5(e, typeof t != "symbol" ? t + "" : t, r), r);
function Dv(e) {
  return e.sort((t, r) => {
    const n = t.compareDocumentPosition(r);
    if (n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY)
      return -1;
    if (n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS)
      return 1;
    if (n & Node.DOCUMENT_POSITION_DISCONNECTED || n & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC)
      throw Error("Cannot sort the given nodes.");
    return 0;
  });
}
var P5 = (e) => typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
function jv(e, t, r) {
  let n = e + 1;
  return r && n >= t && (n = 0), n;
}
function Mv(e, t, r) {
  let n = e - 1;
  return r && n < 0 && (n = t), n;
}
var Zu = typeof window < "u" ? Qa : ge, Ys = (e) => e, E5 = class {
  constructor() {
    yt(this, "descendants", /* @__PURE__ */ new Map()), yt(this, "register", (e) => {
      if (e != null)
        return P5(e) ? this.registerNode(e) : (t) => {
          this.registerNode(t, e);
        };
    }), yt(this, "unregister", (e) => {
      this.descendants.delete(e);
      const t = Dv(Array.from(this.descendants.keys()));
      this.assignIndex(t);
    }), yt(this, "destroy", () => {
      this.descendants.clear();
    }), yt(this, "assignIndex", (e) => {
      this.descendants.forEach((t) => {
        const r = e.indexOf(t.node);
        t.index = r, t.node.dataset.index = t.index.toString();
      });
    }), yt(this, "count", () => this.descendants.size), yt(this, "enabledCount", () => this.enabledValues().length), yt(this, "values", () => Array.from(this.descendants.values()).sort((t, r) => t.index - r.index)), yt(this, "enabledValues", () => this.values().filter((e) => !e.disabled)), yt(this, "item", (e) => {
      if (this.count() !== 0)
        return this.values()[e];
    }), yt(this, "enabledItem", (e) => {
      if (this.enabledCount() !== 0)
        return this.enabledValues()[e];
    }), yt(this, "first", () => this.item(0)), yt(this, "firstEnabled", () => this.enabledItem(0)), yt(this, "last", () => this.item(this.descendants.size - 1)), yt(this, "lastEnabled", () => {
      const e = this.enabledValues().length - 1;
      return this.enabledItem(e);
    }), yt(this, "indexOf", (e) => {
      var t, r;
      return e && (r = (t = this.descendants.get(e)) == null ? void 0 : t.index) != null ? r : -1;
    }), yt(this, "enabledIndexOf", (e) => e == null ? -1 : this.enabledValues().findIndex((t) => t.node.isSameNode(e))), yt(this, "next", (e, t = !0) => {
      const r = jv(e, this.count(), t);
      return this.item(r);
    }), yt(this, "nextEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = jv(
        n,
        this.enabledCount(),
        t
      );
      return this.enabledItem(o);
    }), yt(this, "prev", (e, t = !0) => {
      const r = Mv(e, this.count() - 1, t);
      return this.item(r);
    }), yt(this, "prevEnabled", (e, t = !0) => {
      const r = this.item(e);
      if (!r)
        return;
      const n = this.enabledIndexOf(r.node), o = Mv(
        n,
        this.enabledCount() - 1,
        t
      );
      return this.enabledItem(o);
    }), yt(this, "registerNode", (e, t) => {
      if (!e || this.descendants.has(e))
        return;
      const r = Array.from(this.descendants.keys()).concat(e), n = Dv(r);
      t != null && t.disabled && (t.disabled = !!t.disabled);
      const o = { node: e, index: -1, ...t };
      this.descendants.set(e, o), this.assignIndex(n);
    });
  }
};
function T5(e, t) {
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
function je(...e) {
  return (t) => {
    e.forEach((r) => {
      T5(r, t);
    });
  };
}
function A5(...e) {
  return we(() => je(...e), e);
}
function I5() {
  const e = ie(new E5());
  return Zu(() => () => e.current.destroy()), e.current;
}
var [R5, ix] = Ie({
  name: "DescendantsProvider",
  errorMessage: "useDescendantsContext must be used within DescendantsProvider"
});
function $5(e) {
  const t = ix(), [r, n] = de(-1), o = ie(null);
  Zu(() => () => {
    o.current && t.unregister(o.current);
  }, []), Zu(() => {
    if (!o.current)
      return;
    const i = Number(o.current.dataset.index);
    r != i && !Number.isNaN(i) && n(i);
  });
  const a = Ys(e ? t.register(e) : t.register);
  return {
    descendants: t,
    index: r,
    enabledIndex: t.enabledIndexOf(o.current),
    register: je(a, o)
  };
}
function Nl() {
  return [
    Ys(R5),
    () => Ys(ix()),
    () => I5(),
    (o) => $5(o)
  ];
}
var [N5, mi] = Ie({
  name: "AccordionStylesContext",
  hookName: "useAccordionStyles",
  providerName: "<Accordion />"
}), [O5, Ol] = Ie({
  name: "AccordionItemContext",
  hookName: "useAccordionItemContext",
  providerName: "<AccordionItem />"
}), [
  D5,
  t9,
  j5,
  M5
] = Nl(), sx = O(
  function(t, r) {
    const { getButtonProps: n } = Ol(), o = n(t, r), i = {
      display: "flex",
      alignItems: "center",
      width: "100%",
      outline: 0,
      ...mi().button
    };
    return /* @__PURE__ */ h.jsx(
      E.button,
      {
        ...o,
        className: H("chakra-accordion__button", t.className),
        __css: i
      }
    );
  }
);
sx.displayName = "AccordionButton";
function An(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, a = ot(n), i = ot(o), [s, l] = de(r), c = t !== void 0, u = c ? t : s, d = ot(
    (f) => {
      const v = typeof f == "function" ? f(u) : f;
      i(u, v) && (c || l(v), a(v));
    },
    [c, a, u, i]
  );
  return [u, d];
}
function lx(e) {
  const {
    onChange: t,
    defaultIndex: r,
    index: n,
    allowMultiple: o,
    allowToggle: a,
    ...i
  } = e;
  F5(e), B5(e);
  const s = j5(), [l, c] = de(-1);
  ge(() => () => {
    c(-1);
  }, []);
  const [u, d] = An({
    value: n,
    defaultValue() {
      return o ? r ?? [] : r ?? -1;
    },
    onChange: t
  });
  return {
    index: u,
    setIndex: d,
    htmlProps: i,
    getAccordionItemProps: (p) => {
      let v = !1;
      return p !== null && (v = Array.isArray(u) ? u.includes(p) : u === p), { isOpen: v, onChange: (g) => {
        if (p !== null)
          if (o && Array.isArray(u)) {
            const b = g ? u.concat(p) : u.filter((y) => y !== p);
            d(b);
          } else
            g ? d(p) : a && d(-1);
      } };
    },
    focusedIndex: l,
    setFocusedIndex: c,
    descendants: s
  };
}
var [cx, Dl] = Ie({
  name: "AccordionContext",
  hookName: "useAccordionContext",
  providerName: "Accordion"
});
function ux(e) {
  const { isDisabled: t, isFocusable: r, id: n, ...o } = e, { getAccordionItemProps: a, setFocusedIndex: i } = Dl(), s = ie(null), l = It(), c = n ?? l, u = `accordion-button-${c}`, d = `accordion-panel-${c}`;
  L5(e);
  const { register: f, index: p, descendants: v } = M5({
    disabled: t && !r
  }), { isOpen: m, onChange: g } = a(
    p === -1 ? null : p
  );
  V5({ isOpen: m, isDisabled: t });
  const b = () => {
    g == null || g(!0);
  }, y = () => {
    g == null || g(!1);
  }, x = I(() => {
    g == null || g(!m), i(p);
  }, [p, i, m, g]), _ = I(
    (R) => {
      const $ = {
        ArrowDown: () => {
          const L = v.nextEnabled(p);
          L == null || L.node.focus();
        },
        ArrowUp: () => {
          const L = v.prevEnabled(p);
          L == null || L.node.focus();
        },
        Home: () => {
          const L = v.firstEnabled();
          L == null || L.node.focus();
        },
        End: () => {
          const L = v.lastEnabled();
          L == null || L.node.focus();
        }
      }[R.key];
      $ && (R.preventDefault(), $(R));
    },
    [v, p]
  ), w = I(() => {
    i(p);
  }, [i, p]), P = I(
    function(j = {}, $ = null) {
      return {
        ...j,
        type: "button",
        ref: je(f, s, $),
        id: u,
        disabled: !!t,
        "aria-expanded": !!m,
        "aria-controls": d,
        onClick: ue(j.onClick, x),
        onFocus: ue(j.onFocus, w),
        onKeyDown: ue(j.onKeyDown, _)
      };
    },
    [
      u,
      t,
      m,
      x,
      w,
      _,
      d,
      f
    ]
  ), k = I(
    function(j = {}, $ = null) {
      return {
        ...j,
        ref: $,
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
    isFocusable: r,
    onOpen: b,
    onClose: y,
    getButtonProps: P,
    getPanelProps: k,
    htmlProps: o
  };
}
function F5(e) {
  const t = e.index || e.defaultIndex, r = t != null && !Array.isArray(t) && e.allowMultiple;
  ni({
    condition: !!r,
    message: `If 'allowMultiple' is passed, then 'index' or 'defaultIndex' must be an array. You passed: ${typeof t},`
  });
}
function B5(e) {
  ni({
    condition: !!(e.allowMultiple && e.allowToggle),
    message: "If 'allowMultiple' is passed, 'allowToggle' will be ignored. Either remove 'allowToggle' or 'allowMultiple' depending on whether you want multiple accordions visible or not"
  });
}
function L5(e) {
  ni({
    condition: !!(e.isFocusable && !e.isDisabled),
    message: `Using only 'isFocusable', this prop is reserved for situations where you pass 'isDisabled' but you still want the element to receive focus (A11y). Either remove it or pass 'isDisabled' as well.
    `
  });
}
function V5(e) {
  ni({
    condition: e.isOpen && !!e.isDisabled,
    message: "Cannot open a disabled accordion item"
  });
}
function dx(e) {
  const { isOpen: t, isDisabled: r } = Ol(), { reduceMotion: n } = Dl(), o = H("chakra-accordion__icon", e.className), a = mi(), i = {
    opacity: r ? 0.4 : 1,
    transform: t ? "rotate(-180deg)" : void 0,
    transition: n ? void 0 : "transform 0.2s",
    transformOrigin: "center",
    ...a.icon
  };
  return /* @__PURE__ */ h.jsx(
    Rt,
    {
      viewBox: "0 0 24 24",
      "aria-hidden": !0,
      className: o,
      __css: i,
      ...e,
      children: /* @__PURE__ */ h.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
        }
      )
    }
  );
}
dx.displayName = "AccordionIcon";
var fx = O(
  function(t, r) {
    const { children: n, className: o } = t, { htmlProps: a, ...i } = ux(t), l = {
      ...mi().container,
      overflowAnchor: "none"
    }, c = we(() => i, [i]);
    return /* @__PURE__ */ h.jsx(O5, { value: c, children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        ...a,
        className: H("chakra-accordion__item", o),
        __css: l,
        children: typeof n == "function" ? n({
          isExpanded: !!i.isOpen,
          isDisabled: !!i.isDisabled
        }) : n
      }
    ) });
  }
);
fx.displayName = "AccordionItem";
var xn = {
  ease: [0.25, 0.1, 0.25, 1],
  easeIn: [0.4, 0, 1, 1],
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]
}, da = {
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
function Xs(e) {
  var t;
  switch ((t = e == null ? void 0 : e.direction) != null ? t : "right") {
    case "right":
      return da.slideRight;
    case "left":
      return da.slideLeft;
    case "bottom":
      return da.slideDown;
    case "top":
      return da.slideUp;
    default:
      return da.slideRight;
  }
}
var Gn = {
  enter: {
    duration: 0.2,
    ease: xn.easeOut
  },
  exit: {
    duration: 0.1,
    ease: xn.easeIn
  }
}, hr = {
  enter: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.enter
  }),
  exit: (e, t) => ({
    ...e,
    delay: typeof t == "number" ? t : t == null ? void 0 : t.exit
  })
}, z5 = (e) => e != null && parseInt(e.toString(), 10) > 0, Fv = {
  exit: {
    height: { duration: 0.2, ease: xn.ease },
    opacity: { duration: 0.3, ease: xn.ease }
  },
  enter: {
    height: { duration: 0.3, ease: xn.ease },
    opacity: { duration: 0.4, ease: xn.ease }
  }
}, W5 = {
  exit: ({
    animateOpacity: e,
    startingHeight: t,
    transition: r,
    transitionEnd: n,
    delay: o
  }) => {
    var a;
    return {
      ...e && { opacity: z5(t) ? 1 : 0 },
      height: t,
      transitionEnd: n == null ? void 0 : n.exit,
      transition: (a = r == null ? void 0 : r.exit) != null ? a : hr.exit(Fv.exit, o)
    };
  },
  enter: ({
    animateOpacity: e,
    endingHeight: t,
    transition: r,
    transitionEnd: n,
    delay: o
  }) => {
    var a;
    return {
      ...e && { opacity: 1 },
      height: t,
      transitionEnd: n == null ? void 0 : n.enter,
      transition: (a = r == null ? void 0 : r.enter) != null ? a : hr.enter(Fv.enter, o)
    };
  }
}, $f = sn(
  (e, t) => {
    const {
      in: r,
      unmountOnExit: n,
      animateOpacity: o = !0,
      startingHeight: a = 0,
      endingHeight: i = "auto",
      style: s,
      className: l,
      transition: c,
      transitionEnd: u,
      ...d
    } = e, [f, p] = de(!1);
    ge(() => {
      const y = setTimeout(() => {
        p(!0);
      });
      return () => clearTimeout(y);
    }, []), ni({
      condition: Number(a) > 0 && !!n,
      message: "startingHeight and unmountOnExit are mutually exclusive. You can't use them together"
    });
    const v = parseFloat(a.toString()) > 0, m = {
      startingHeight: a,
      endingHeight: i,
      animateOpacity: o,
      transition: f ? c : { enter: { duration: 0 } },
      transitionEnd: {
        enter: u == null ? void 0 : u.enter,
        exit: n ? u == null ? void 0 : u.exit : {
          ...u == null ? void 0 : u.exit,
          display: v ? "block" : "none"
        }
      }
    }, g = n ? r : !0, b = r || n ? "enter" : "exit";
    return /* @__PURE__ */ h.jsx(Tn, { initial: !1, custom: m, children: g && /* @__PURE__ */ h.jsx(
      Tr.div,
      {
        ref: t,
        ...d,
        className: H("chakra-collapse", l),
        style: {
          overflow: "hidden",
          display: "block",
          ...s
        },
        custom: m,
        variants: W5,
        initial: n ? "exit" : !1,
        animate: b,
        exit: "exit"
      }
    ) });
  }
);
$f.displayName = "Collapse";
var H5 = {
  enter: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 1,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : hr.enter(Gn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ transition: e, transitionEnd: t, delay: r } = {}) => {
    var n;
    return {
      opacity: 0,
      transition: (n = e == null ? void 0 : e.exit) != null ? n : hr.exit(Gn.exit, r),
      transitionEnd: t == null ? void 0 : t.exit
    };
  }
}, Nf = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: H5
}, px = sn(function(t, r) {
  const {
    unmountOnExit: n,
    in: o,
    className: a,
    transition: i,
    transitionEnd: s,
    delay: l,
    ...c
  } = t, u = o || n ? "enter" : "exit", d = n ? o && n : !0, f = { transition: i, transitionEnd: s, delay: l };
  return /* @__PURE__ */ h.jsx(Tn, { custom: f, children: d && /* @__PURE__ */ h.jsx(
    Tr.div,
    {
      ref: r,
      className: H("chakra-fade", a),
      custom: f,
      ...Nf,
      animate: u,
      ...c
    }
  ) });
});
px.displayName = "Fade";
var U5 = {
  exit: ({ reverse: e, initialScale: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      ...e ? { scale: t, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { scale: t, ...n == null ? void 0 : n.exit } },
      transition: (a = r == null ? void 0 : r.exit) != null ? a : hr.exit(Gn.exit, o)
    };
  },
  enter: ({ transitionEnd: e, transition: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      scale: 1,
      transition: (n = t == null ? void 0 : t.enter) != null ? n : hr.enter(Gn.enter, r),
      transitionEnd: e == null ? void 0 : e.enter
    };
  }
}, Of = {
  initial: "exit",
  animate: "enter",
  exit: "exit",
  variants: U5
}, hx = sn(
  function(t, r) {
    const {
      unmountOnExit: n,
      in: o,
      reverse: a = !0,
      initialScale: i = 0.95,
      className: s,
      transition: l,
      transitionEnd: c,
      delay: u,
      ...d
    } = t, f = n ? o && n : !0, p = o || n ? "enter" : "exit", v = { initialScale: i, reverse: a, transition: l, transitionEnd: c, delay: u };
    return /* @__PURE__ */ h.jsx(Tn, { custom: v, children: f && /* @__PURE__ */ h.jsx(
      Tr.div,
      {
        ref: r,
        className: H("chakra-offset-slide", s),
        ...Of,
        animate: p,
        custom: v,
        ...d
      }
    ) });
  }
);
hx.displayName = "ScaleFade";
var G5 = {
  initial: ({ offsetX: e, offsetY: t, transition: r, transitionEnd: n, delay: o }) => {
    var a;
    return {
      opacity: 0,
      x: e,
      y: t,
      transition: (a = r == null ? void 0 : r.exit) != null ? a : hr.exit(Gn.exit, o),
      transitionEnd: n == null ? void 0 : n.exit
    };
  },
  enter: ({ transition: e, transitionEnd: t, delay: r }) => {
    var n;
    return {
      opacity: 1,
      x: 0,
      y: 0,
      transition: (n = e == null ? void 0 : e.enter) != null ? n : hr.enter(Gn.enter, r),
      transitionEnd: t == null ? void 0 : t.enter
    };
  },
  exit: ({ offsetY: e, offsetX: t, transition: r, transitionEnd: n, reverse: o, delay: a }) => {
    var i;
    const s = { x: t, y: e };
    return {
      opacity: 0,
      transition: (i = r == null ? void 0 : r.exit) != null ? i : hr.exit(Gn.exit, a),
      ...o ? { ...s, transitionEnd: n == null ? void 0 : n.exit } : { transitionEnd: { ...s, ...n == null ? void 0 : n.exit } }
    };
  }
}, Zs = {
  initial: "initial",
  animate: "enter",
  exit: "exit",
  variants: G5
}, mx = sn(
  function(t, r) {
    const {
      unmountOnExit: n,
      in: o,
      reverse: a = !0,
      className: i,
      offsetX: s = 0,
      offsetY: l = 8,
      transition: c,
      transitionEnd: u,
      delay: d,
      ...f
    } = t, p = n ? o && n : !0, v = o || n ? "enter" : "exit", m = {
      offsetX: s,
      offsetY: l,
      reverse: a,
      transition: c,
      transitionEnd: u,
      delay: d
    };
    return /* @__PURE__ */ h.jsx(Tn, { custom: m, children: p && /* @__PURE__ */ h.jsx(
      Tr.div,
      {
        ref: r,
        className: H("chakra-offset-slide", i),
        custom: m,
        ...Zs,
        animate: v,
        ...f
      }
    ) });
  }
);
mx.displayName = "SlideFade";
var Bv = {
  exit: {
    duration: 0.15,
    ease: xn.easeInOut
  },
  enter: {
    type: "spring",
    damping: 25,
    stiffness: 180
  }
}, q5 = {
  exit: ({ direction: e, transition: t, transitionEnd: r, delay: n }) => {
    var o;
    const { exit: a } = Xs({ direction: e });
    return {
      ...a,
      transition: (o = t == null ? void 0 : t.exit) != null ? o : hr.exit(Bv.exit, n),
      transitionEnd: r == null ? void 0 : r.exit
    };
  },
  enter: ({ direction: e, transitionEnd: t, transition: r, delay: n }) => {
    var o;
    const { enter: a } = Xs({ direction: e });
    return {
      ...a,
      transition: (o = r == null ? void 0 : r.enter) != null ? o : hr.enter(Bv.enter, n),
      transitionEnd: t == null ? void 0 : t.enter
    };
  }
}, Df = sn(function(t, r) {
  const {
    direction: n = "right",
    style: o,
    unmountOnExit: a,
    in: i,
    className: s,
    transition: l,
    transitionEnd: c,
    delay: u,
    motionProps: d,
    ...f
  } = t, p = Xs({ direction: n }), v = Object.assign(
    { position: "fixed" },
    p.position,
    o
  ), m = a ? i && a : !0, g = i || a ? "enter" : "exit", b = { transitionEnd: c, transition: l, direction: n, delay: u };
  return /* @__PURE__ */ h.jsx(Tn, { custom: b, children: m && /* @__PURE__ */ h.jsx(
    Tr.div,
    {
      ...f,
      ref: r,
      initial: "exit",
      className: H("chakra-slide", s),
      animate: g,
      exit: "exit",
      custom: b,
      variants: q5,
      style: v,
      ...d
    }
  ) });
});
Df.displayName = "Slide";
var vx = O(
  function(t, r) {
    const { className: n, motionProps: o, ...a } = t, { reduceMotion: i } = Dl(), { getPanelProps: s, isOpen: l } = Ol(), c = s(a, r), u = H("chakra-accordion__panel", n), d = mi();
    i || delete c.hidden;
    const f = /* @__PURE__ */ h.jsx(E.div, { ...c, __css: d.panel, className: u });
    return i ? f : /* @__PURE__ */ h.jsx($f, { in: l, ...o, children: f });
  }
);
vx.displayName = "AccordionPanel";
var gx = O(function({ children: t, reduceMotion: r, ...n }, o) {
  const a = Ze("Accordion", n), i = Ee(n), { htmlProps: s, descendants: l, ...c } = lx(i), u = we(
    () => ({ ...c, reduceMotion: !!r }),
    [c, r]
  );
  return /* @__PURE__ */ h.jsx(D5, { value: l, children: /* @__PURE__ */ h.jsx(cx, { value: u, children: /* @__PURE__ */ h.jsx(N5, { value: a, children: /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: o,
      ...s,
      className: H("chakra-accordion", n.className),
      __css: a.root,
      children: t
    }
  ) }) }) });
});
gx.displayName = "Accordion";
function K5() {
  const { isOpen: e, isDisabled: t, onClose: r, onOpen: n } = Ol();
  return { isOpen: e, onClose: r, isDisabled: t, onOpen: n };
}
var [Y5, jf] = Ie({
  name: "AvatarStylesContext",
  hookName: "useAvatarStyles",
  providerName: "<Avatar/>"
}), X5 = {
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
}, yx = O(
  function(t, r) {
    const { placement: n = "bottom-end", className: o, ...a } = t, i = jf(), l = {
      position: "absolute",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      ...X5[n],
      ...i.badge
    };
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        ...a,
        className: H("chakra-avatar__badge", o),
        __css: l
      }
    );
  }
);
yx.displayName = "AvatarBadge";
function Z5(e) {
  var t;
  const r = e.split(" "), n = (t = r[0]) != null ? t : "", o = r.length > 1 ? r[r.length - 1] : "";
  return n && o ? `${n.charAt(0)}${o.charAt(0)}` : n.charAt(0);
}
function bx(e) {
  const { name: t, getInitials: r, ...n } = e, o = jf();
  return /* @__PURE__ */ h.jsx(E.div, { role: "img", "aria-label": t, ...n, __css: o.label, children: t ? r == null ? void 0 : r(t) : null });
}
bx.displayName = "AvatarName";
var Mf = (e) => /* @__PURE__ */ h.jsxs(
  E.svg,
  {
    viewBox: "0 0 128 128",
    color: "#fff",
    width: "100%",
    height: "100%",
    className: "chakra-avatar__svg",
    ...e,
    children: [
      /* @__PURE__ */ h.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"
        }
      ),
      /* @__PURE__ */ h.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"
        }
      )
    ]
  }
), Js = O(function(t, r) {
  const { htmlWidth: n, htmlHeight: o, alt: a, ...i } = t;
  return /* @__PURE__ */ h.jsx("img", { width: n, height: o, ref: r, alt: a, ...i });
});
Js.displayName = "NativeImage";
function Ff(e) {
  const {
    loading: t,
    src: r,
    srcSet: n,
    onLoad: o,
    onError: a,
    crossOrigin: i,
    sizes: s,
    ignoreFallback: l
  } = e, [c, u] = de("pending");
  ge(() => {
    u(r ? "loading" : "pending");
  }, [r]);
  const d = ie(), f = I(() => {
    if (!r)
      return;
    p();
    const v = new Image();
    v.src = r, i && (v.crossOrigin = i), n && (v.srcset = n), s && (v.sizes = s), t && (v.loading = t), v.onload = (m) => {
      p(), u("loaded"), o == null || o(m);
    }, v.onerror = (m) => {
      p(), u("failed"), a == null || a(m);
    }, d.current = v;
  }, [r, i, n, s, o, a, t]), p = () => {
    d.current && (d.current.onload = null, d.current.onerror = null, d.current = null);
  };
  return rr(() => {
    if (!l)
      return c === "loading" && f(), () => {
        p();
      };
  }, [c, f, l]), l ? "loaded" : c;
}
var J5 = (e, t) => e !== "loaded" && t === "beforeLoadOrError" || e === "failed" && t === "onError";
function Q5(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
var Bf = O(function(t, r) {
  const {
    fallbackSrc: n,
    fallback: o,
    src: a,
    srcSet: i,
    align: s,
    fit: l,
    loading: c,
    ignoreFallback: u,
    crossOrigin: d,
    fallbackStrategy: f = "beforeLoadOrError",
    referrerPolicy: p,
    ...v
  } = t, m = n !== void 0 || o !== void 0, g = c != null || u || !m, b = Ff({
    ...t,
    crossOrigin: d,
    ignoreFallback: g
  }), y = J5(b, f), x = {
    ref: r,
    objectFit: l,
    objectPosition: s,
    ...g ? v : Q5(v, ["onError", "onLoad"])
  };
  return y ? o || /* @__PURE__ */ h.jsx(
    E.img,
    {
      as: Js,
      className: "chakra-image__placeholder",
      src: n,
      ...x
    }
  ) : /* @__PURE__ */ h.jsx(
    E.img,
    {
      as: Js,
      src: a,
      srcSet: i,
      crossOrigin: d,
      loading: c,
      referrerPolicy: p,
      className: "chakra-image",
      ...x
    }
  );
});
Bf.displayName = "Image";
var eF = O((e, t) => /* @__PURE__ */ h.jsx(E.img, { ref: t, as: Js, className: "chakra-image", ...e }));
function xx(e) {
  const {
    src: t,
    srcSet: r,
    onError: n,
    onLoad: o,
    getInitials: a,
    name: i,
    borderRadius: s,
    loading: l,
    iconLabel: c,
    icon: u = /* @__PURE__ */ h.jsx(Mf, {}),
    ignoreFallback: d,
    referrerPolicy: f,
    crossOrigin: p
  } = e, m = Ff({ src: t, onError: n, crossOrigin: p, ignoreFallback: d }) === "loaded";
  return !t || !m ? i ? /* @__PURE__ */ h.jsx(
    bx,
    {
      className: "chakra-avatar__initials",
      getInitials: a,
      name: i
    }
  ) : Tt(u, {
    role: "img",
    "aria-label": c
  }) : /* @__PURE__ */ h.jsx(
    E.img,
    {
      src: t,
      srcSet: r,
      alt: i,
      onLoad: o,
      referrerPolicy: f,
      crossOrigin: p ?? void 0,
      className: "chakra-avatar__img",
      loading: l,
      __css: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: s
      }
    }
  );
}
xx.displayName = "AvatarImage";
var Sx = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  textTransform: "uppercase",
  fontWeight: "medium",
  position: "relative",
  flexShrink: 0
}, Lf = O((e, t) => {
  const r = Ze("Avatar", e), [n, o] = de(!1), {
    src: a,
    srcSet: i,
    name: s,
    showBorder: l,
    borderRadius: c = "full",
    onError: u,
    onLoad: d,
    getInitials: f = Z5,
    icon: p = /* @__PURE__ */ h.jsx(Mf, {}),
    iconLabel: v = " avatar",
    loading: m,
    children: g,
    borderColor: b,
    ignoreFallback: y,
    crossOrigin: x,
    ..._
  } = Ee(e), w = {
    borderRadius: c,
    borderWidth: l ? "2px" : void 0,
    ...Sx,
    ...r.container
  };
  return b && (w.borderColor = b), /* @__PURE__ */ h.jsx(
    E.span,
    {
      ref: t,
      ..._,
      className: H("chakra-avatar", e.className),
      "data-loaded": Ae(n),
      __css: w,
      children: /* @__PURE__ */ h.jsxs(Y5, { value: r, children: [
        /* @__PURE__ */ h.jsx(
          xx,
          {
            src: a,
            srcSet: i,
            loading: m,
            onLoad: ue(d, () => {
              o(!0);
            }),
            onError: u,
            getInitials: f,
            name: s,
            borderRadius: c,
            icon: p,
            iconLabel: v,
            ignoreFallback: y,
            crossOrigin: x
          }
        ),
        g
      ] })
    }
  );
});
Lf.displayName = "Avatar";
function ln(e) {
  return Hr.toArray(e).filter(
    (t) => Xo(t)
  );
}
function tF(e) {
  const t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
var wx = O(
  function(t, r) {
    const n = Ze("Avatar", t), {
      children: o,
      borderColor: a,
      max: i,
      spacing: s = "-0.75rem",
      borderRadius: l = "full",
      ...c
    } = Ee(t), u = ln(o), d = i != null ? u.slice(0, i) : u, f = i != null ? u.length - i : 0, v = d.reverse().map((b, y) => {
      var x;
      const w = {
        marginEnd: y === 0 ? 0 : s,
        size: t.size,
        borderColor: (x = b.props.borderColor) != null ? x : a,
        showBorder: !0
      };
      return Tt(b, tF(w));
    }), m = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      flexDirection: "row-reverse",
      ...n.group
    }, g = {
      borderRadius: l,
      marginStart: s,
      ...Sx,
      ...n.excessLabel
    };
    return /* @__PURE__ */ h.jsxs(
      E.div,
      {
        ref: r,
        role: "group",
        __css: m,
        ...c,
        className: H("chakra-avatar__group", t.className),
        children: [
          f > 0 && /* @__PURE__ */ h.jsx(E.span, { className: "chakra-avatar__excess", __css: g, children: `+${f}` }),
          v
        ]
      }
    );
  }
);
wx.displayName = "AvatarGroup";
var [rF, jl] = Ie({
  name: "BreadcrumbStylesContext",
  errorMessage: `useBreadcrumbStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Breadcrumb />" `
}), Vf = O(
  function(t, r) {
    const { isCurrentPage: n, as: o, className: a, href: i, ...s } = t, l = jl(), c = {
      ref: r,
      as: o,
      className: H("chakra-breadcrumb__link", a),
      ...s
    };
    return n ? /* @__PURE__ */ h.jsx(E.span, { "aria-current": "page", __css: l.link, ...c }) : /* @__PURE__ */ h.jsx(E.a, { __css: l.link, href: i, ...c });
  }
);
Vf.displayName = "BreadcrumbLink";
var Qs = O(
  function(t, r) {
    const { spacing: n, ...o } = t, a = jl(), i = {
      mx: n,
      ...a.separator
    };
    return /* @__PURE__ */ h.jsx(
      E.span,
      {
        ref: r,
        role: "presentation",
        ...o,
        __css: i
      }
    );
  }
);
Qs.displayName = "BreadcrumbSeparator";
var _x = O(
  function(t, r) {
    const {
      isCurrentPage: n,
      separator: o,
      isLastChild: a,
      spacing: i,
      children: s,
      className: l,
      ...c
    } = t, d = ln(s).map((m) => m.type === Vf ? Tt(m, {
      isCurrentPage: n
    }) : m.type === Qs ? Tt(m, {
      spacing: i,
      children: m.props.children || o
    }) : m), p = {
      display: "inline-flex",
      alignItems: "center",
      ...jl().item
    }, v = H("chakra-breadcrumb__list-item", l);
    return /* @__PURE__ */ h.jsxs(E.li, { ref: r, className: v, ...c, __css: p, children: [
      d,
      !a && /* @__PURE__ */ h.jsx(Qs, { spacing: i, children: o })
    ] });
  }
);
_x.displayName = "BreadcrumbItem";
var Cx = O(
  function(t, r) {
    const n = Ze("Breadcrumb", t), o = Ee(t), {
      children: a,
      spacing: i = "0.5rem",
      separator: s = "/",
      className: l,
      listProps: c,
      ...u
    } = o, d = ln(a), f = d.length, p = d.map(
      (m, g) => Tt(m, {
        separator: s,
        spacing: i,
        isLastChild: f === g + 1
      })
    ), v = H("chakra-breadcrumb", l);
    return /* @__PURE__ */ h.jsx(
      E.nav,
      {
        ref: r,
        "aria-label": "breadcrumb",
        className: v,
        __css: n.container,
        ...u,
        children: /* @__PURE__ */ h.jsx(rF, { value: n, children: /* @__PURE__ */ h.jsx(
          E.ol,
          {
            className: "chakra-breadcrumb__list",
            ...c,
            __css: {
              display: "flex",
              alignItems: "center",
              ...n.list
            },
            children: p
          }
        ) })
      }
    );
  }
);
Cx.displayName = "Breadcrumb";
var [nF, kx] = Ie({
  strict: !1,
  name: "ButtonGroupContext"
}), oF = {
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
}, aF = {
  horizontal: (e) => ({
    "& > *:not(style) ~ *:not(style)": { marginStart: e }
  }),
  vertical: (e) => ({
    "& > *:not(style) ~ *:not(style)": { marginTop: e }
  })
}, Px = O(
  function(t, r) {
    const {
      size: n,
      colorScheme: o,
      variant: a,
      className: i,
      spacing: s = "0.5rem",
      isAttached: l,
      isDisabled: c,
      orientation: u = "horizontal",
      ...d
    } = t, f = H("chakra-button__group", i), p = we(
      () => ({ size: n, colorScheme: o, variant: a, isDisabled: c }),
      [n, o, a, c]
    );
    let v = {
      display: "inline-flex",
      ...l ? oF[u] : aF[u](s)
    };
    const m = u === "vertical";
    return /* @__PURE__ */ h.jsx(nF, { value: p, children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        role: "group",
        __css: v,
        className: f,
        "data-attached": l ? "" : void 0,
        "data-orientation": u,
        flexDir: m ? "column" : void 0,
        ...d
      }
    ) });
  }
);
Px.displayName = "ButtonGroup";
function iF(e) {
  const [t, r] = de(!e);
  return { ref: I((a) => {
    a && r(a.tagName === "BUTTON");
  }, []), type: t ? "button" : void 0 };
}
function Ju(e) {
  const { children: t, className: r, ...n } = e, o = Xo(t) ? Tt(t, {
    "aria-hidden": !0,
    focusable: !1
  }) : t, a = H("chakra-button__icon", r);
  return /* @__PURE__ */ h.jsx(
    E.span,
    {
      display: "inline-flex",
      alignSelf: "center",
      flexShrink: 0,
      ...n,
      className: a,
      children: o
    }
  );
}
Ju.displayName = "ButtonIcon";
function el(e) {
  const {
    label: t,
    placement: r,
    spacing: n = "0.5rem",
    children: o = /* @__PURE__ */ h.jsx(Rl, { color: "currentColor", width: "1em", height: "1em" }),
    className: a,
    __css: i,
    ...s
  } = e, l = H("chakra-button__spinner", a), c = r === "start" ? "marginEnd" : "marginStart", u = we(
    () => ({
      display: "flex",
      alignItems: "center",
      position: t ? "relative" : "absolute",
      [c]: t ? n : 0,
      fontSize: "1em",
      lineHeight: "normal",
      ...i
    }),
    [i, t, c, n]
  );
  return /* @__PURE__ */ h.jsx(E.div, { className: l, ...s, __css: u, children: o });
}
el.displayName = "ButtonSpinner";
var No = O((e, t) => {
  const r = kx(), n = Pt("Button", { ...r, ...e }), {
    isDisabled: o = r == null ? void 0 : r.isDisabled,
    isLoading: a,
    isActive: i,
    children: s,
    leftIcon: l,
    rightIcon: c,
    loadingText: u,
    iconSpacing: d = "0.5rem",
    type: f,
    spinner: p,
    spinnerPlacement: v = "start",
    className: m,
    as: g,
    ...b
  } = Ee(e), y = we(() => {
    const P = { ...n == null ? void 0 : n._focus, zIndex: 1 };
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
      ...n,
      ...!!r && { _focus: P }
    };
  }, [n, r]), { ref: x, type: _ } = iF(g), w = { rightIcon: c, leftIcon: l, iconSpacing: d, children: s };
  return /* @__PURE__ */ h.jsxs(
    E.button,
    {
      ref: A5(t, x),
      as: g,
      type: f ?? _,
      "data-active": Ae(i),
      "data-loading": Ae(a),
      __css: y,
      className: H("chakra-button", m),
      ...b,
      disabled: o || a,
      children: [
        a && v === "start" && /* @__PURE__ */ h.jsx(
          el,
          {
            className: "chakra-button__spinner--start",
            label: u,
            placement: "start",
            spacing: d,
            children: p
          }
        ),
        a ? u || /* @__PURE__ */ h.jsx(E.span, { opacity: 0, children: /* @__PURE__ */ h.jsx(Lv, { ...w }) }) : /* @__PURE__ */ h.jsx(Lv, { ...w }),
        a && v === "end" && /* @__PURE__ */ h.jsx(
          el,
          {
            className: "chakra-button__spinner--end",
            label: u,
            placement: "end",
            spacing: d,
            children: p
          }
        )
      ]
    }
  );
});
No.displayName = "Button";
function Lv(e) {
  const { leftIcon: t, rightIcon: r, children: n, iconSpacing: o } = e;
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    t && /* @__PURE__ */ h.jsx(Ju, { marginEnd: o, children: t }),
    n,
    r && /* @__PURE__ */ h.jsx(Ju, { marginStart: o, children: r })
  ] });
}
var Ex = O(
  (e, t) => {
    const { icon: r, children: n, isRound: o, "aria-label": a, ...i } = e, s = r || n, l = Xo(s) ? Tt(s, {
      "aria-hidden": !0,
      focusable: !1
    }) : null;
    return /* @__PURE__ */ h.jsx(
      No,
      {
        padding: "0",
        borderRadius: o ? "full" : void 0,
        ref: t,
        "aria-label": a,
        ...i,
        children: l
      }
    );
  }
);
Ex.displayName = "IconButton";
var [sF, Ml] = ef("Card"), lF = O(function(t, r) {
  const { className: n, ...o } = t, a = Ml();
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      className: H("chakra-card__body", n),
      __css: a.body,
      ...o
    }
  );
}), cF = O(
  function(t, r) {
    const { className: n, justify: o, ...a } = t, i = Ml();
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        className: H("chakra-card__footer", n),
        __css: {
          display: "flex",
          justifyContent: o,
          ...i.footer
        },
        ...a
      }
    );
  }
), uF = O(
  function(t, r) {
    const { className: n, ...o } = t, a = Ml();
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        className: H("chakra-card__header", n),
        __css: a.header,
        ...o
      }
    );
  }
), dF = O(function(t, r) {
  const {
    className: n,
    children: o,
    direction: a = "column",
    justify: i,
    align: s,
    ...l
  } = Ee(t), c = Ze("Card", t);
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      className: H("chakra-card", n),
      __css: {
        display: "flex",
        flexDirection: a,
        justifyContent: i,
        alignItems: s,
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        ...c.container
      },
      ...l,
      children: /* @__PURE__ */ h.jsx(sF, { value: c, children: o })
    }
  );
}), [fF, pF] = Ie({
  name: "CheckboxGroupContext",
  strict: !1
});
function Vv(e) {
  return e && _t(e) && _t(e.target);
}
function Tx(e = {}) {
  const {
    defaultValue: t,
    value: r,
    onChange: n,
    isDisabled: o,
    isNative: a
  } = e, i = ot(n), [s, l] = An({
    value: r,
    defaultValue: t || [],
    onChange: i
  }), c = I(
    (d) => {
      if (!s)
        return;
      const f = Vv(d) ? d.target.checked : !s.includes(d), p = Vv(d) ? d.target.value : d, v = f ? [...s, p] : s.filter((m) => String(m) !== String(p));
      l(v);
    },
    [l, s]
  ), u = I(
    (d = {}) => ({
      ...d,
      [a ? "checked" : "isChecked"]: s.some((p) => String(d.value) === String(p)),
      onChange: c
    }),
    [c, a, s]
  );
  return {
    value: s,
    isDisabled: o,
    onChange: c,
    setValue: l,
    getCheckboxProps: u
  };
}
function Ax(e) {
  const { colorScheme: t, size: r, variant: n, children: o, isDisabled: a } = e, { value: i, onChange: s } = Tx(e), l = we(
    () => ({
      size: r,
      onChange: s,
      colorScheme: t,
      value: i,
      variant: n,
      isDisabled: a
    }),
    [r, s, t, i, n, a]
  );
  return /* @__PURE__ */ h.jsx(fF, { value: l, children: o });
}
Ax.displayName = "CheckboxGroup";
function hF(e) {
  const [t, r] = de(e), [n, o] = de(!1);
  return e !== t && (o(!0), r(e)), n;
}
function mF(e) {
  return /* @__PURE__ */ h.jsx(
    E.svg,
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
      children: /* @__PURE__ */ h.jsx("polyline", { points: "1.5 6 4.5 9 10.5 1" })
    }
  );
}
function vF(e) {
  return /* @__PURE__ */ h.jsx(
    E.svg,
    {
      width: "1.2em",
      viewBox: "0 0 24 24",
      style: { stroke: "currentColor", strokeWidth: 4 },
      ...e,
      children: /* @__PURE__ */ h.jsx("line", { x1: "21", x2: "3", y1: "12", y2: "12" })
    }
  );
}
function Ix(e) {
  const { isIndeterminate: t, isChecked: r, ...n } = e, o = t ? vF : mF;
  return r || t ? /* @__PURE__ */ h.jsx(
    E.div,
    {
      style: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%"
      },
      children: /* @__PURE__ */ h.jsx(o, { ...n })
    }
  ) : null;
}
var [gF, zf] = Ie({
  name: "FormControlStylesContext",
  errorMessage: `useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `
}), [yF, In] = Ie({
  strict: !1,
  name: "FormControlContext"
});
function bF(e) {
  const {
    id: t,
    isRequired: r,
    isInvalid: n,
    isDisabled: o,
    isReadOnly: a,
    ...i
  } = e, s = It(), l = t || `field-${s}`, c = `${l}-label`, u = `${l}-feedback`, d = `${l}-helptext`, [f, p] = de(!1), [v, m] = de(!1), [g, b] = de(!1), y = I(
    (k = {}, R = null) => ({
      id: d,
      ...k,
      ref: je(R, (j) => {
        j && m(!0);
      })
    }),
    [d]
  ), x = I(
    (k = {}, R = null) => ({
      ...k,
      ref: R,
      "data-focus": Ae(g),
      "data-disabled": Ae(o),
      "data-invalid": Ae(n),
      "data-readonly": Ae(a),
      id: k.id !== void 0 ? k.id : c,
      htmlFor: k.htmlFor !== void 0 ? k.htmlFor : l
    }),
    [l, o, g, n, a, c]
  ), _ = I(
    (k = {}, R = null) => ({
      id: u,
      ...k,
      ref: je(R, (j) => {
        j && p(!0);
      }),
      "aria-live": "polite"
    }),
    [u]
  ), w = I(
    (k = {}, R = null) => ({
      ...k,
      ...i,
      ref: R,
      role: "group"
    }),
    [i]
  ), P = I(
    (k = {}, R = null) => ({
      ...k,
      ref: R,
      role: "presentation",
      "aria-hidden": !0,
      children: k.children || "*"
    }),
    []
  );
  return {
    isRequired: !!r,
    isInvalid: !!n,
    isReadOnly: !!a,
    isDisabled: !!o,
    isFocused: !!g,
    onFocus: () => b(!0),
    onBlur: () => b(!1),
    hasFeedbackText: f,
    setHasFeedbackText: p,
    hasHelpText: v,
    setHasHelpText: m,
    id: l,
    labelId: c,
    feedbackId: u,
    helpTextId: d,
    htmlProps: i,
    getHelpTextProps: y,
    getErrorMessageProps: _,
    getRootProps: w,
    getLabelProps: x,
    getRequiredIndicatorProps: P
  };
}
var Rx = O(
  function(t, r) {
    const n = Ze("Form", t), o = Ee(t), {
      getRootProps: a,
      htmlProps: i,
      ...s
    } = bF(o), l = H("chakra-form-control", t.className);
    return /* @__PURE__ */ h.jsx(yF, { value: s, children: /* @__PURE__ */ h.jsx(gF, { value: n, children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...a({}, r),
        className: l,
        __css: n.container
      }
    ) }) });
  }
);
Rx.displayName = "FormControl";
var $x = O(
  function(t, r) {
    const n = In(), o = zf(), a = H("chakra-form__helper-text", t.className);
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...n == null ? void 0 : n.getHelpTextProps(t, r),
        __css: o.helperText,
        className: a
      }
    );
  }
);
$x.displayName = "FormHelperText";
var [xF, Nx] = Ie({
  name: "FormErrorStylesContext",
  errorMessage: `useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `
}), Ox = O(
  (e, t) => {
    const r = Ze("FormError", e), n = Ee(e), o = In();
    return o != null && o.isInvalid ? /* @__PURE__ */ h.jsx(xF, { value: r, children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...o == null ? void 0 : o.getErrorMessageProps(n, t),
        className: H("chakra-form__error-message", e.className),
        __css: {
          display: "flex",
          alignItems: "center",
          ...r.text
        }
      }
    ) }) : null;
  }
);
Ox.displayName = "FormErrorMessage";
var Dx = O((e, t) => {
  const r = Nx(), n = In();
  if (!(n != null && n.isInvalid))
    return null;
  const o = H("chakra-form__error-icon", e.className);
  return /* @__PURE__ */ h.jsx(
    Rt,
    {
      ref: t,
      "aria-hidden": !0,
      ...e,
      __css: r.icon,
      className: o,
      children: /* @__PURE__ */ h.jsx(
        "path",
        {
          fill: "currentColor",
          d: "M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"
        }
      )
    }
  );
});
Dx.displayName = "FormErrorIcon";
var jx = O(function(t, r) {
  var n;
  const o = Pt("FormLabel", t), a = Ee(t), {
    className: i,
    children: s,
    requiredIndicator: l = /* @__PURE__ */ h.jsx(Wf, {}),
    optionalIndicator: c = null,
    ...u
  } = a, d = In(), f = (n = d == null ? void 0 : d.getLabelProps(u, r)) != null ? n : { ref: r, ...u };
  return /* @__PURE__ */ h.jsxs(
    E.label,
    {
      ...f,
      className: H("chakra-form__label", a.className),
      __css: {
        display: "block",
        textAlign: "start",
        ...o
      },
      children: [
        s,
        d != null && d.isRequired ? l : c
      ]
    }
  );
});
jx.displayName = "FormLabel";
var Wf = O(
  function(t, r) {
    const n = In(), o = zf();
    if (!(n != null && n.isRequired))
      return null;
    const a = H("chakra-form__required-indicator", t.className);
    return /* @__PURE__ */ h.jsx(
      E.span,
      {
        ...n == null ? void 0 : n.getRequiredIndicatorProps(t, r),
        __css: o.requiredIndicator,
        className: a
      }
    );
  }
);
Wf.displayName = "RequiredIndicator";
function Fl(e) {
  const { isDisabled: t, isInvalid: r, isReadOnly: n, isRequired: o, ...a } = Bl(e);
  return {
    ...a,
    disabled: t,
    readOnly: n,
    required: o,
    "aria-invalid": nr(r),
    "aria-required": nr(o),
    "aria-readonly": nr(n)
  };
}
function Bl(e) {
  var t, r, n;
  const o = In(), {
    id: a,
    disabled: i,
    readOnly: s,
    required: l,
    isRequired: c,
    isInvalid: u,
    isReadOnly: d,
    isDisabled: f,
    onFocus: p,
    onBlur: v,
    ...m
  } = e, g = e["aria-describedby"] ? [e["aria-describedby"]] : [];
  return o != null && o.hasFeedbackText && (o != null && o.isInvalid) && g.push(o.feedbackId), o != null && o.hasHelpText && g.push(o.helpTextId), {
    ...m,
    "aria-describedby": g.join(" ") || void 0,
    id: a ?? (o == null ? void 0 : o.id),
    isDisabled: (t = i ?? f) != null ? t : o == null ? void 0 : o.isDisabled,
    isReadOnly: (r = s ?? d) != null ? r : o == null ? void 0 : o.isReadOnly,
    isRequired: (n = l ?? c) != null ? n : o == null ? void 0 : o.isRequired,
    isInvalid: u ?? (o == null ? void 0 : o.isInvalid),
    onFocus: ue(o == null ? void 0 : o.onFocus, p),
    onBlur: ue(o == null ? void 0 : o.onBlur, v)
  };
}
var Ll = {
  border: "0",
  clip: "rect(0, 0, 0, 0)",
  height: "1px",
  width: "1px",
  margin: "-1px",
  padding: "0",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Mx = E("span", {
  baseStyle: Ll
});
Mx.displayName = "VisuallyHidden";
var Fx = E("input", {
  baseStyle: Ll
});
Fx.displayName = "VisuallyHiddenInput";
var zv = !1, gi = null, Xn = !1, Qu = !1, ed = /* @__PURE__ */ new Set();
function Hf(e, t) {
  ed.forEach((r) => r(e, t));
}
var SF = typeof window < "u" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : !1;
function wF(e) {
  return !(e.metaKey || !SF && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function Wv(e) {
  Xn = !0, wF(e) && (gi = "keyboard", Hf("keyboard", e));
}
function co(e) {
  if (gi = "pointer", e.type === "mousedown" || e.type === "pointerdown") {
    Xn = !0;
    const t = e.composedPath ? e.composedPath()[0] : e.target;
    let r = !1;
    try {
      r = t.matches(":focus-visible");
    } catch {
    }
    if (r)
      return;
    Hf("pointer", e);
  }
}
function _F(e) {
  return e.mozInputSource === 0 && e.isTrusted ? !0 : e.detail === 0 && !e.pointerType;
}
function CF(e) {
  _F(e) && (Xn = !0, gi = "virtual");
}
function kF(e) {
  e.target === window || e.target === document || (!Xn && !Qu && (gi = "virtual", Hf("virtual", e)), Xn = !1, Qu = !1);
}
function PF() {
  Xn = !1, Qu = !0;
}
function Hv() {
  return gi !== "pointer";
}
function EF() {
  if (typeof window > "u" || zv)
    return;
  const { focus: e } = HTMLElement.prototype;
  HTMLElement.prototype.focus = function(...r) {
    Xn = !0, e.apply(this, r);
  }, document.addEventListener("keydown", Wv, !0), document.addEventListener("keyup", Wv, !0), document.addEventListener("click", CF, !0), window.addEventListener("focus", kF, !0), window.addEventListener("blur", PF, !1), typeof PointerEvent < "u" ? (document.addEventListener("pointerdown", co, !0), document.addEventListener("pointermove", co, !0), document.addEventListener("pointerup", co, !0)) : (document.addEventListener("mousedown", co, !0), document.addEventListener("mousemove", co, !0), document.addEventListener("mouseup", co, !0)), zv = !0;
}
function Bx(e) {
  EF(), e(Hv());
  const t = () => e(Hv());
  return ed.add(t), () => {
    ed.delete(t);
  };
}
function TF(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function Uf(e = {}) {
  const t = Bl(e), {
    isDisabled: r,
    isReadOnly: n,
    isRequired: o,
    isInvalid: a,
    id: i,
    onBlur: s,
    onFocus: l,
    "aria-describedby": c
  } = t, {
    defaultChecked: u,
    isChecked: d,
    isFocusable: f,
    onChange: p,
    isIndeterminate: v,
    name: m,
    value: g,
    tabIndex: b = void 0,
    "aria-label": y,
    "aria-labelledby": x,
    "aria-invalid": _,
    ...w
  } = e, P = TF(w, [
    "isDisabled",
    "isReadOnly",
    "isRequired",
    "isInvalid",
    "id",
    "onBlur",
    "onFocus",
    "aria-describedby"
  ]), k = ot(p), R = ot(s), j = ot(l), [$, L] = de(!1), [J, G] = de(!1), [K, te] = de(!1), [Z, N] = de(!1);
  ge(() => Bx(L), []);
  const q = ie(null), [he, D] = de(!0), [M, re] = de(!!u), V = d !== void 0, z = V ? d : M, U = I(
    (ee) => {
      if (n || r) {
        ee.preventDefault();
        return;
      }
      V || re(z ? ee.target.checked : v ? !0 : ee.target.checked), k == null || k(ee);
    },
    [
      n,
      r,
      z,
      V,
      v,
      k
    ]
  );
  rr(() => {
    q.current && (q.current.indeterminate = !!v);
  }, [v]), kr(() => {
    r && G(!1);
  }, [r, G]), rr(() => {
    const ee = q.current;
    ee != null && ee.form && (ee.form.onreset = () => {
      re(!!u);
    });
  }, []);
  const oe = r && !f, ce = I(
    (ee) => {
      ee.key === " " && N(!0);
    },
    [N]
  ), se = I(
    (ee) => {
      ee.key === " " && N(!1);
    },
    [N]
  );
  rr(() => {
    if (!q.current)
      return;
    q.current.checked !== z && re(q.current.checked);
  }, [q.current]);
  const W = I(
    (ee = {}, ve = null) => {
      const Ne = ($e) => {
        J && $e.preventDefault(), N(!0);
      };
      return {
        ...ee,
        ref: ve,
        "data-active": Ae(Z),
        "data-hover": Ae(K),
        "data-checked": Ae(z),
        "data-focus": Ae(J),
        "data-focus-visible": Ae(J && $),
        "data-indeterminate": Ae(v),
        "data-disabled": Ae(r),
        "data-invalid": Ae(a),
        "data-readonly": Ae(n),
        "aria-hidden": !0,
        onMouseDown: ue(ee.onMouseDown, Ne),
        onMouseUp: ue(ee.onMouseUp, () => N(!1)),
        onMouseEnter: ue(
          ee.onMouseEnter,
          () => te(!0)
        ),
        onMouseLeave: ue(
          ee.onMouseLeave,
          () => te(!1)
        )
      };
    },
    [
      Z,
      z,
      r,
      J,
      $,
      K,
      v,
      a,
      n
    ]
  ), Y = I(
    (ee = {}, ve = null) => ({
      ...P,
      ...ee,
      ref: je(ve, (Ne) => {
        Ne && D(Ne.tagName === "LABEL");
      }),
      onClick: ue(ee.onClick, () => {
        var Ne;
        he || ((Ne = q.current) == null || Ne.click(), requestAnimationFrame(() => {
          var $e;
          ($e = q.current) == null || $e.focus({ preventScroll: !0 });
        }));
      }),
      "data-disabled": Ae(r),
      "data-checked": Ae(z),
      "data-invalid": Ae(a)
    }),
    [P, r, z, a, he]
  ), ne = I(
    (ee = {}, ve = null) => ({
      ...ee,
      ref: je(q, ve),
      type: "checkbox",
      name: m,
      value: g,
      id: i,
      tabIndex: b,
      onChange: ue(ee.onChange, U),
      onBlur: ue(
        ee.onBlur,
        R,
        () => G(!1)
      ),
      onFocus: ue(
        ee.onFocus,
        j,
        () => G(!0)
      ),
      onKeyDown: ue(ee.onKeyDown, ce),
      onKeyUp: ue(ee.onKeyUp, se),
      required: o,
      checked: z,
      disabled: oe,
      readOnly: n,
      "aria-label": y,
      "aria-labelledby": x,
      "aria-invalid": _ ? !!_ : a,
      "aria-describedby": c,
      "aria-disabled": r,
      style: Ll
    }),
    [
      m,
      g,
      i,
      U,
      R,
      j,
      ce,
      se,
      o,
      z,
      oe,
      n,
      y,
      x,
      _,
      a,
      c,
      r,
      b
    ]
  ), B = I(
    (ee = {}, ve = null) => ({
      ...ee,
      ref: ve,
      onMouseDown: ue(ee.onMouseDown, AF),
      "data-disabled": Ae(r),
      "data-checked": Ae(z),
      "data-invalid": Ae(a)
    }),
    [z, r, a]
  );
  return {
    state: {
      isInvalid: a,
      isFocused: J,
      isChecked: z,
      isActive: Z,
      isHovered: K,
      isIndeterminate: v,
      isDisabled: r,
      isReadOnly: n,
      isRequired: o
    },
    getRootProps: Y,
    getCheckboxProps: W,
    getInputProps: ne,
    getLabelProps: B,
    htmlProps: P
  };
}
function AF(e) {
  e.preventDefault(), e.stopPropagation();
}
var IF = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "top",
  userSelect: "none",
  flexShrink: 0
}, RF = {
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  verticalAlign: "top",
  position: "relative"
}, $F = Er({
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
}), NF = Er({
  from: {
    opacity: 0
  },
  to: {
    opacity: 1
  }
}), OF = Er({
  from: {
    transform: "scaleX(0.65)"
  },
  to: {
    transform: "scaleX(1)"
  }
}), Lx = O(function(t, r) {
  const n = pF(), o = { ...n, ...t }, a = Ze("Checkbox", o), i = Ee(t), {
    spacing: s = "0.5rem",
    className: l,
    children: c,
    iconColor: u,
    iconSize: d,
    icon: f = /* @__PURE__ */ h.jsx(Ix, {}),
    isChecked: p,
    isDisabled: v = n == null ? void 0 : n.isDisabled,
    onChange: m,
    inputProps: g,
    ...b
  } = i;
  let y = p;
  n != null && n.value && i.value && (y = n.value.includes(i.value));
  let x = m;
  n != null && n.onChange && i.value && (x = ml(n.onChange, m));
  const {
    state: _,
    getInputProps: w,
    getCheckboxProps: P,
    getLabelProps: k,
    getRootProps: R
  } = Uf({
    ...b,
    isDisabled: v,
    isChecked: y,
    onChange: x
  }), j = hF(_.isChecked), $ = we(
    () => ({
      animation: j ? _.isIndeterminate ? `${NF} 20ms linear, ${OF} 200ms linear` : `${$F} 200ms linear` : void 0,
      fontSize: d,
      color: u,
      ...a.icon
    }),
    [u, d, j, _.isIndeterminate, a.icon]
  ), L = Tt(f, {
    __css: $,
    isIndeterminate: _.isIndeterminate,
    isChecked: _.isChecked
  });
  return /* @__PURE__ */ h.jsxs(
    E.label,
    {
      __css: { ...RF, ...a.container },
      className: H("chakra-checkbox", l),
      ...R(),
      children: [
        /* @__PURE__ */ h.jsx(
          "input",
          {
            className: "chakra-checkbox__input",
            ...w(g, r)
          }
        ),
        /* @__PURE__ */ h.jsx(
          E.span,
          {
            __css: { ...IF, ...a.control },
            className: "chakra-checkbox__control",
            ...P(),
            children: L
          }
        ),
        c && /* @__PURE__ */ h.jsx(
          E.span,
          {
            className: "chakra-checkbox__label",
            ...k(),
            __css: {
              marginStart: s,
              ...a.label
            },
            children: c
          }
        )
      ]
    }
  );
});
Lx.displayName = "Checkbox";
var Vx = (e) => {
  const {
    type: t = "checkbox",
    _hover: r,
    _invalid: n,
    _disabled: o,
    _focus: a,
    _checked: i,
    _child: s = { opacity: 0 },
    _checkedAndChild: l = { opacity: 1 },
    _checkedAndDisabled: c,
    _checkedAndFocus: u,
    _checkedAndHover: d,
    children: f,
    ...p
  } = e, v = `input[type=${t}]:checked:disabled + &`, m = `input[type=${t}]:checked:hover:not(:disabled) + &`, g = `input[type=${t}]:checked:focus + &`, b = `input[type=${t}]:disabled + &`, y = `input[type=${t}]:focus + &`, x = `input[type=${t}]:hover:not(:disabled):not(:checked) + &`, _ = `input[type=${t}]:checked + &, input[type=${t}][aria-checked=mixed] + &`, w = `input[type=${t}][aria-invalid=true] + &`, P = "& > *";
  return /* @__PURE__ */ h.jsx(
    E.div,
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
        [y]: a,
        [x]: r,
        [b]: o,
        [w]: n,
        [v]: c,
        [g]: u,
        [m]: d,
        [P]: s,
        [_]: {
          ...i,
          [P]: l
        }
      },
      children: f
    }
  );
};
Vx.displayName = "ControlBox";
function DF(e) {
  const t = parseFloat(e);
  return typeof t != "number" || Number.isNaN(t) ? 0 : t;
}
function Gf(e, t) {
  let r = DF(e);
  const n = 10 ** (t ?? 10);
  return r = Math.round(r * n) / n, t ? r.toFixed(t) : r.toString();
}
function td(e) {
  if (!Number.isFinite(e))
    return 0;
  let t = 1, r = 0;
  for (; Math.round(e * t) / t !== e; )
    t *= 10, r += 1;
  return r;
}
function tl(e, t, r) {
  return (e - t) * 100 / (r - t);
}
function zx(e, t, r) {
  return (r - t) * e + t;
}
function rd(e, t, r) {
  const n = Math.round((e - t) / r) * r + t, o = td(r);
  return Gf(n, o);
}
function Oo(e, t, r) {
  return e == null ? e : (r < t && console.warn("clamp: max cannot be less than min"), Math.min(Math.max(e, t), r));
}
function Wx(e = {}) {
  const {
    onChange: t,
    precision: r,
    defaultValue: n,
    value: o,
    step: a = 1,
    min: i = Number.MIN_SAFE_INTEGER,
    max: s = Number.MAX_SAFE_INTEGER,
    keepWithinRange: l = !0
  } = e, c = ot(t), [u, d] = de(() => {
    var $;
    return n == null ? "" : ($ = Qc(n, a, r)) != null ? $ : "";
  }), f = typeof o < "u", p = f ? o : u, v = Hx(vn(p), a), m = r ?? v, g = I(
    ($) => {
      $ !== p && (f || d($.toString()), c == null || c($.toString(), vn($)));
    },
    [c, f, p]
  ), b = I(
    ($) => {
      let L = $;
      return l && (L = Oo(L, i, s)), Gf(L, m);
    },
    [m, l, s, i]
  ), y = I(
    ($ = a) => {
      let L;
      p === "" ? L = vn($) : L = vn(p) + $, L = b(L), g(L);
    },
    [b, a, g, p]
  ), x = I(
    ($ = a) => {
      let L;
      p === "" ? L = vn(-$) : L = vn(p) - $, L = b(L), g(L);
    },
    [b, a, g, p]
  ), _ = I(() => {
    var $;
    let L;
    n == null ? L = "" : L = ($ = Qc(n, a, r)) != null ? $ : i, g(L);
  }, [n, r, a, g, i]), w = I(
    ($) => {
      var L;
      const J = (L = Qc($, a, m)) != null ? L : i;
      g(J);
    },
    [m, a, g, i]
  ), P = vn(p);
  return {
    isOutOfRange: P > s || P < i,
    isAtMax: P === s,
    isAtMin: P === i,
    precision: m,
    value: p,
    valueAsNumber: P,
    update: g,
    reset: _,
    increment: y,
    decrement: x,
    clamp: b,
    cast: w,
    setValue: d
  };
}
function vn(e) {
  return parseFloat(e.toString().replace(/[^\w.-]+/g, ""));
}
function Hx(e, t) {
  return Math.max(td(t), td(e));
}
function Qc(e, t, r) {
  const n = vn(e);
  if (Number.isNaN(n))
    return;
  const o = Hx(n, t);
  return Gf(n, r ?? o);
}
var [jF, Vl] = Ie({
  name: "EditableStylesContext",
  errorMessage: `useEditableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Editable />" `
}), [MF, Jo] = Ie({
  name: "EditableContext",
  errorMessage: "useEditableContext: context is undefined. Seems you forgot to wrap the editable components in `<Editable />`"
});
function FF() {
  const { isEditing: e, onSubmit: t, onCancel: r, onEdit: n, isDisabled: o } = Jo();
  return {
    isEditing: e,
    onSubmit: t,
    onCancel: r,
    onEdit: n,
    isDisabled: o
  };
}
var qf = {
  fontSize: "inherit",
  fontWeight: "inherit",
  textAlign: "inherit",
  bg: "transparent"
}, Ux = O(
  function(t, r) {
    const { getInputProps: n } = Jo(), o = Vl(), a = n(t, r), i = H("chakra-editable__input", t.className);
    return /* @__PURE__ */ h.jsx(
      E.input,
      {
        ...a,
        __css: {
          outline: 0,
          ...qf,
          ...o.input
        },
        className: i
      }
    );
  }
);
Ux.displayName = "EditableInput";
var Gx = O(
  function(t, r) {
    const { getPreviewProps: n } = Jo(), o = Vl(), a = n(t, r), i = H("chakra-editable__preview", t.className);
    return /* @__PURE__ */ h.jsx(
      E.span,
      {
        ...a,
        __css: {
          cursor: "text",
          display: "inline-block",
          ...qf,
          ...o.preview
        },
        className: i
      }
    );
  }
);
Gx.displayName = "EditablePreview";
var qx = O(
  function(t, r) {
    const { getTextareaProps: n } = Jo(), o = Vl(), a = n(t, r), i = H("chakra-editable__textarea", t.className);
    return /* @__PURE__ */ h.jsx(
      E.textarea,
      {
        ...a,
        __css: {
          outline: 0,
          ...qf,
          ...o.textarea
        },
        className: i
      }
    );
  }
);
qx.displayName = "EditableTextarea";
function qn(e, t, r, n) {
  const o = ot(r);
  return ge(() => {
    const a = typeof e == "function" ? e() : e ?? document;
    if (!(!r || !a))
      return a.addEventListener(t, o, n), () => {
        a.removeEventListener(t, o, n);
      };
  }, [t, e, n, o, r]), () => {
    const a = typeof e == "function" ? e() : e ?? document;
    a == null || a.removeEventListener(t, o, n);
  };
}
function BF(e) {
  return "current" in e;
}
var Kx = () => typeof window < "u";
function LF() {
  var e;
  const t = navigator.userAgentData;
  return (e = t == null ? void 0 : t.platform) != null ? e : navigator.platform;
}
var VF = (e) => Kx() && e.test(navigator.vendor), zF = (e) => Kx() && e.test(LF()), WF = () => zF(/mac|iphone|ipad|ipod/i), HF = () => WF() && VF(/apple/i);
function Yx(e) {
  const { ref: t, elements: r, enabled: n } = e, o = () => {
    var a, i;
    return (i = (a = t.current) == null ? void 0 : a.ownerDocument) != null ? i : document;
  };
  qn(o, "pointerdown", (a) => {
    if (!HF() || !n)
      return;
    const i = a.target, l = (r ?? [t]).some((c) => {
      const u = BF(c) ? c.current : c;
      return (u == null ? void 0 : u.contains(i)) || u === i;
    });
    o().activeElement !== i && l && (a.preventDefault(), i.focus());
  });
}
function Uv(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function Xx(e = {}) {
  const {
    onChange: t,
    onCancel: r,
    onSubmit: n,
    onBlur: o,
    value: a,
    isDisabled: i,
    defaultValue: s,
    startWithEditView: l,
    isPreviewFocusable: c = !0,
    submitOnBlur: u = !0,
    selectAllOnFocus: d = !0,
    placeholder: f,
    onEdit: p,
    finalFocusRef: v,
    ...m
  } = e, g = ot(p), b = !!(l && !i), [y, x] = de(b), [_, w] = An({
    defaultValue: s || "",
    value: a,
    onChange: t
  }), [P, k] = de(_), R = ie(null), j = ie(null), $ = ie(null), L = ie(null), J = ie(null);
  Yx({
    ref: R,
    enabled: y,
    elements: [L, J]
  });
  const G = !y && !i;
  rr(() => {
    var W, Y;
    y && ((W = R.current) == null || W.focus(), d && ((Y = R.current) == null || Y.select()));
  }, []), kr(() => {
    var W, Y, ne, B;
    if (!y) {
      v ? (W = v.current) == null || W.focus() : (Y = $.current) == null || Y.focus();
      return;
    }
    (ne = R.current) == null || ne.focus(), d && ((B = R.current) == null || B.select()), g == null || g();
  }, [y, g, d]);
  const K = I(() => {
    G && x(!0);
  }, [G]), te = I(() => {
    k(_);
  }, [_]), Z = I(() => {
    x(!1), w(P), r == null || r(P), o == null || o(P);
  }, [r, o, w, P]), N = I(() => {
    x(!1), k(_), n == null || n(_), o == null || o(P);
  }, [_, n, o, P]);
  ge(() => {
    if (y)
      return;
    const W = R.current;
    (W == null ? void 0 : W.ownerDocument.activeElement) === W && (W == null || W.blur());
  }, [y]);
  const q = I(
    (W) => {
      w(W.currentTarget.value);
    },
    [w]
  ), he = I(
    (W) => {
      const Y = W.key, B = {
        Escape: Z,
        Enter: (Ce) => {
          !Ce.shiftKey && !Ce.metaKey && N();
        }
      }[Y];
      B && (W.preventDefault(), B(W));
    },
    [Z, N]
  ), D = I(
    (W) => {
      const Y = W.key, B = {
        Escape: Z
      }[Y];
      B && (W.preventDefault(), B(W));
    },
    [Z]
  ), M = _.length === 0, re = I(
    (W) => {
      var Y;
      if (!y)
        return;
      const ne = W.currentTarget.ownerDocument, B = (Y = W.relatedTarget) != null ? Y : ne.activeElement, Ce = Uv(L.current, B), ee = Uv(J.current, B);
      !Ce && !ee && (u ? N() : Z());
    },
    [u, N, Z, y]
  ), V = I(
    (W = {}, Y = null) => {
      const ne = G && c ? 0 : void 0;
      return {
        ...W,
        ref: je(Y, j),
        children: M ? f : _,
        hidden: y,
        "aria-disabled": nr(i),
        tabIndex: ne,
        onFocus: ue(W.onFocus, K, te)
      };
    },
    [
      i,
      y,
      G,
      c,
      M,
      K,
      te,
      f,
      _
    ]
  ), z = I(
    (W = {}, Y = null) => ({
      ...W,
      hidden: !y,
      placeholder: f,
      ref: je(Y, R),
      disabled: i,
      "aria-disabled": nr(i),
      value: _,
      onBlur: ue(W.onBlur, re),
      onChange: ue(W.onChange, q),
      onKeyDown: ue(W.onKeyDown, he),
      onFocus: ue(W.onFocus, te)
    }),
    [
      i,
      y,
      re,
      q,
      he,
      te,
      f,
      _
    ]
  ), U = I(
    (W = {}, Y = null) => ({
      ...W,
      hidden: !y,
      placeholder: f,
      ref: je(Y, R),
      disabled: i,
      "aria-disabled": nr(i),
      value: _,
      onBlur: ue(W.onBlur, re),
      onChange: ue(W.onChange, q),
      onKeyDown: ue(W.onKeyDown, D),
      onFocus: ue(W.onFocus, te)
    }),
    [
      i,
      y,
      re,
      q,
      D,
      te,
      f,
      _
    ]
  ), oe = I(
    (W = {}, Y = null) => ({
      "aria-label": "Edit",
      ...W,
      type: "button",
      onClick: ue(W.onClick, K),
      ref: je(Y, $),
      disabled: i
    }),
    [K, i]
  ), ce = I(
    (W = {}, Y = null) => ({
      ...W,
      "aria-label": "Submit",
      ref: je(J, Y),
      type: "button",
      onClick: ue(W.onClick, N),
      disabled: i
    }),
    [N, i]
  ), se = I(
    (W = {}, Y = null) => ({
      "aria-label": "Cancel",
      id: "cancel",
      ...W,
      ref: je(L, Y),
      type: "button",
      onClick: ue(W.onClick, Z),
      disabled: i
    }),
    [Z, i]
  );
  return {
    isEditing: y,
    isDisabled: i,
    isValueEmpty: M,
    value: _,
    onEdit: K,
    onCancel: Z,
    onSubmit: N,
    getPreviewProps: V,
    getInputProps: z,
    getTextareaProps: U,
    getEditButtonProps: oe,
    getSubmitButtonProps: ce,
    getCancelButtonProps: se,
    htmlProps: m
  };
}
var Zx = O(function(t, r) {
  const n = Ze("Editable", t), o = Ee(t), { htmlProps: a, ...i } = Xx(o), { isEditing: s, onSubmit: l, onCancel: c, onEdit: u } = i, d = H("chakra-editable", t.className), f = Bt(t.children, {
    isEditing: s,
    onSubmit: l,
    onCancel: c,
    onEdit: u
  });
  return /* @__PURE__ */ h.jsx(MF, { value: i, children: /* @__PURE__ */ h.jsx(jF, { value: n, children: /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      ...a,
      className: d,
      children: f
    }
  ) }) });
});
Zx.displayName = "Editable";
function UF() {
  const {
    isEditing: e,
    getEditButtonProps: t,
    getCancelButtonProps: r,
    getSubmitButtonProps: n
  } = Jo();
  return {
    isEditing: e,
    getEditButtonProps: t,
    getCancelButtonProps: r,
    getSubmitButtonProps: n
  };
}
function GF(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), o, a;
  for (a = 0; a < n.length; a++)
    o = n[a], !(t.indexOf(o) >= 0) && (r[o] = e[o]);
  return r;
}
var nd = { exports: {} };
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var eu, Gv;
function qF() {
  if (Gv)
    return eu;
  Gv = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(a) {
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
      for (var i = {}, s = 0; s < 10; s++)
        i["_" + String.fromCharCode(s)] = s;
      var l = Object.getOwnPropertyNames(i).map(function(u) {
        return i[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return eu = o() ? Object.assign : function(a, i) {
    for (var s, l = n(a), c, u = 1; u < arguments.length; u++) {
      s = Object(arguments[u]);
      for (var d in s)
        t.call(s, d) && (l[d] = s[d]);
      if (e) {
        c = e(s);
        for (var f = 0; f < c.length; f++)
          r.call(s, c[f]) && (l[c[f]] = s[c[f]]);
      }
    }
    return l;
  }, eu;
}
var tu, qv;
function Kf() {
  if (qv)
    return tu;
  qv = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return tu = e, tu;
}
var ru, Kv;
function Jx() {
  return Kv || (Kv = 1, ru = Function.call.bind(Object.prototype.hasOwnProperty)), ru;
}
var nu, Yv;
function KF() {
  if (Yv)
    return nu;
  Yv = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Kf(), r = {}, n = Jx();
    e = function(a) {
      var i = "Warning: " + a;
      typeof console < "u" && console.error(i);
      try {
        throw new Error(i);
      } catch {
      }
    };
  }
  function o(a, i, s, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in a)
        if (n(a, u)) {
          var d;
          try {
            if (typeof a[u] != "function") {
              var f = Error(
                (l || "React class") + ": " + s + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw f.name = "Invariant Violation", f;
            }
            d = a[u](i, u, l, s, null, t);
          } catch (v) {
            d = v;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + s + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var p = c ? c() : "";
            e(
              "Failed " + s + " type: " + d.message + (p ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, nu = o, nu;
}
var ou, Xv;
function YF() {
  if (Xv)
    return ou;
  Xv = 1;
  var e = wd, t = qF(), r = Kf(), n = Jx(), o = KF(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var l = "Warning: " + s;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function i() {
    return null;
  }
  return ou = function(s, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(D) {
      var M = D && (c && D[c] || D[u]);
      if (typeof M == "function")
        return M;
    }
    var f = "<<anonymous>>", p = {
      array: b("array"),
      bigint: b("bigint"),
      bool: b("boolean"),
      func: b("function"),
      number: b("number"),
      object: b("object"),
      string: b("string"),
      symbol: b("symbol"),
      any: y(),
      arrayOf: x,
      element: _(),
      elementType: w(),
      instanceOf: P,
      node: $(),
      objectOf: R,
      oneOf: k,
      oneOfType: j,
      shape: J,
      exact: G
    };
    function v(D, M) {
      return D === M ? D !== 0 || 1 / D === 1 / M : D !== D && M !== M;
    }
    function m(D, M) {
      this.message = D, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    m.prototype = Error.prototype;
    function g(D) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, re = 0;
      function V(U, oe, ce, se, W, Y, ne) {
        if (se = se || f, Y = Y || ce, ne !== r) {
          if (l) {
            var B = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw B.name = "Invariant Violation", B;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Ce = se + ":" + ce;
            !M[Ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            re < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Y + "` prop on `" + se + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[Ce] = !0, re++);
          }
        }
        return oe[ce] == null ? U ? oe[ce] === null ? new m("The " + W + " `" + Y + "` is marked as required " + ("in `" + se + "`, but its value is `null`.")) : new m("The " + W + " `" + Y + "` is marked as required in " + ("`" + se + "`, but its value is `undefined`.")) : null : D(oe, ce, se, W, Y);
      }
      var z = V.bind(null, !1);
      return z.isRequired = V.bind(null, !0), z;
    }
    function b(D) {
      function M(re, V, z, U, oe, ce) {
        var se = re[V], W = Z(se);
        if (W !== D) {
          var Y = N(se);
          return new m(
            "Invalid " + U + " `" + oe + "` of type " + ("`" + Y + "` supplied to `" + z + "`, expected ") + ("`" + D + "`."),
            { expectedType: D }
          );
        }
        return null;
      }
      return g(M);
    }
    function y() {
      return g(i);
    }
    function x(D) {
      function M(re, V, z, U, oe) {
        if (typeof D != "function")
          return new m("Property `" + oe + "` of component `" + z + "` has invalid PropType notation inside arrayOf.");
        var ce = re[V];
        if (!Array.isArray(ce)) {
          var se = Z(ce);
          return new m("Invalid " + U + " `" + oe + "` of type " + ("`" + se + "` supplied to `" + z + "`, expected an array."));
        }
        for (var W = 0; W < ce.length; W++) {
          var Y = D(ce, W, z, U, oe + "[" + W + "]", r);
          if (Y instanceof Error)
            return Y;
        }
        return null;
      }
      return g(M);
    }
    function _() {
      function D(M, re, V, z, U) {
        var oe = M[re];
        if (!s(oe)) {
          var ce = Z(oe);
          return new m("Invalid " + z + " `" + U + "` of type " + ("`" + ce + "` supplied to `" + V + "`, expected a single ReactElement."));
        }
        return null;
      }
      return g(D);
    }
    function w() {
      function D(M, re, V, z, U) {
        var oe = M[re];
        if (!e.isValidElementType(oe)) {
          var ce = Z(oe);
          return new m("Invalid " + z + " `" + U + "` of type " + ("`" + ce + "` supplied to `" + V + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return g(D);
    }
    function P(D) {
      function M(re, V, z, U, oe) {
        if (!(re[V] instanceof D)) {
          var ce = D.name || f, se = he(re[V]);
          return new m("Invalid " + U + " `" + oe + "` of type " + ("`" + se + "` supplied to `" + z + "`, expected ") + ("instance of `" + ce + "`."));
        }
        return null;
      }
      return g(M);
    }
    function k(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), i;
      function M(re, V, z, U, oe) {
        for (var ce = re[V], se = 0; se < D.length; se++)
          if (v(ce, D[se]))
            return null;
        var W = JSON.stringify(D, function(ne, B) {
          var Ce = N(B);
          return Ce === "symbol" ? String(B) : B;
        });
        return new m("Invalid " + U + " `" + oe + "` of value `" + String(ce) + "` " + ("supplied to `" + z + "`, expected one of " + W + "."));
      }
      return g(M);
    }
    function R(D) {
      function M(re, V, z, U, oe) {
        if (typeof D != "function")
          return new m("Property `" + oe + "` of component `" + z + "` has invalid PropType notation inside objectOf.");
        var ce = re[V], se = Z(ce);
        if (se !== "object")
          return new m("Invalid " + U + " `" + oe + "` of type " + ("`" + se + "` supplied to `" + z + "`, expected an object."));
        for (var W in ce)
          if (n(ce, W)) {
            var Y = D(ce, W, z, U, oe + "." + W, r);
            if (Y instanceof Error)
              return Y;
          }
        return null;
      }
      return g(M);
    }
    function j(D) {
      if (!Array.isArray(D))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), i;
      for (var M = 0; M < D.length; M++) {
        var re = D[M];
        if (typeof re != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + q(re) + " at index " + M + "."
          ), i;
      }
      function V(z, U, oe, ce, se) {
        for (var W = [], Y = 0; Y < D.length; Y++) {
          var ne = D[Y], B = ne(z, U, oe, ce, se, r);
          if (B == null)
            return null;
          B.data && n(B.data, "expectedType") && W.push(B.data.expectedType);
        }
        var Ce = W.length > 0 ? ", expected one of type [" + W.join(", ") + "]" : "";
        return new m("Invalid " + ce + " `" + se + "` supplied to " + ("`" + oe + "`" + Ce + "."));
      }
      return g(V);
    }
    function $() {
      function D(M, re, V, z, U) {
        return K(M[re]) ? null : new m("Invalid " + z + " `" + U + "` supplied to " + ("`" + V + "`, expected a ReactNode."));
      }
      return g(D);
    }
    function L(D, M, re, V, z) {
      return new m(
        (D || "React class") + ": " + M + " type `" + re + "." + V + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + z + "`."
      );
    }
    function J(D) {
      function M(re, V, z, U, oe) {
        var ce = re[V], se = Z(ce);
        if (se !== "object")
          return new m("Invalid " + U + " `" + oe + "` of type `" + se + "` " + ("supplied to `" + z + "`, expected `object`."));
        for (var W in D) {
          var Y = D[W];
          if (typeof Y != "function")
            return L(z, U, oe, W, N(Y));
          var ne = Y(ce, W, z, U, oe + "." + W, r);
          if (ne)
            return ne;
        }
        return null;
      }
      return g(M);
    }
    function G(D) {
      function M(re, V, z, U, oe) {
        var ce = re[V], se = Z(ce);
        if (se !== "object")
          return new m("Invalid " + U + " `" + oe + "` of type `" + se + "` " + ("supplied to `" + z + "`, expected `object`."));
        var W = t({}, re[V], D);
        for (var Y in W) {
          var ne = D[Y];
          if (n(D, Y) && typeof ne != "function")
            return L(z, U, oe, Y, N(ne));
          if (!ne)
            return new m(
              "Invalid " + U + " `" + oe + "` key `" + Y + "` supplied to `" + z + "`.\nBad object: " + JSON.stringify(re[V], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(D), null, "  ")
            );
          var B = ne(ce, Y, z, U, oe + "." + Y, r);
          if (B)
            return B;
        }
        return null;
      }
      return g(M);
    }
    function K(D) {
      switch (typeof D) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !D;
        case "object":
          if (Array.isArray(D))
            return D.every(K);
          if (D === null || s(D))
            return !0;
          var M = d(D);
          if (M) {
            var re = M.call(D), V;
            if (M !== D.entries) {
              for (; !(V = re.next()).done; )
                if (!K(V.value))
                  return !1;
            } else
              for (; !(V = re.next()).done; ) {
                var z = V.value;
                if (z && !K(z[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function te(D, M) {
      return D === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function Z(D) {
      var M = typeof D;
      return Array.isArray(D) ? "array" : D instanceof RegExp ? "object" : te(M, D) ? "symbol" : M;
    }
    function N(D) {
      if (typeof D > "u" || D === null)
        return "" + D;
      var M = Z(D);
      if (M === "object") {
        if (D instanceof Date)
          return "date";
        if (D instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function q(D) {
      var M = N(D);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function he(D) {
      return !D.constructor || !D.constructor.name ? f : D.constructor.name;
    }
    return p.checkPropTypes = o, p.resetWarningCache = o.resetWarningCache, p.PropTypes = p, p;
  }, ou;
}
var au, Zv;
function XF() {
  if (Zv)
    return au;
  Zv = 1;
  var e = Kf();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, au = function() {
    function n(i, s, l, c, u, d) {
      if (d !== e) {
        var f = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw f.name = "Invariant Violation", f;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var a = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return a.PropTypes = a, a;
  }, au;
}
if (process.env.NODE_ENV !== "production") {
  var ZF = wd, JF = !0;
  nd.exports = YF()(ZF.isElement, JF);
} else
  nd.exports = XF()();
var tt = nd.exports;
const Qx = /* @__PURE__ */ ul(tt);
var od = "data-focus-lock", eS = "data-focus-lock-disabled", QF = "data-no-focus-lock", eB = "data-autofocus-inside", tB = "data-no-autofocus";
function rB(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function nB(e, t) {
  var r = de(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var o = r.value;
          o !== n && (r.value = n, r.callback(n, o));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
function tS(e, t) {
  return nB(t || null, function(r) {
    return e.forEach(function(n) {
      return rB(n, r);
    });
  });
}
var iu = {
  width: "1px",
  height: "0px",
  padding: 0,
  overflow: "hidden",
  position: "fixed",
  top: "1px",
  left: "1px"
};
process.env.NODE_ENV !== "production" && Qx.node;
var jr = function() {
  return jr = Object.assign || function(t) {
    for (var r, n = 1, o = arguments.length; n < o; n++) {
      r = arguments[n];
      for (var a in r)
        Object.prototype.hasOwnProperty.call(r, a) && (t[a] = r[a]);
    }
    return t;
  }, jr.apply(this, arguments);
};
function rS(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
}
function oB(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, o = t.length, a; n < o; n++)
      (a || !(n in t)) && (a || (a = Array.prototype.slice.call(t, 0, n)), a[n] = t[n]);
  return e.concat(a || Array.prototype.slice.call(t));
}
function nS(e) {
  return e;
}
function oS(e, t) {
  t === void 0 && (t = nS);
  var r = [], n = !1, o = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(a) {
      var i = t(a, n);
      return r.push(i), function() {
        r = r.filter(function(s) {
          return s !== i;
        });
      };
    },
    assignSyncMedium: function(a) {
      for (n = !0; r.length; ) {
        var i = r;
        r = [], i.forEach(a);
      }
      r = {
        push: function(s) {
          return a(s);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(a) {
      n = !0;
      var i = [];
      if (r.length) {
        var s = r;
        r = [], s.forEach(a), i = r;
      }
      var l = function() {
        var u = i;
        i = [], u.forEach(a);
      }, c = function() {
        return Promise.resolve().then(l);
      };
      c(), r = {
        push: function(u) {
          i.push(u), c();
        },
        filter: function(u) {
          return i = i.filter(u), r;
        }
      };
    }
  };
  return o;
}
function Yf(e, t) {
  return t === void 0 && (t = nS), oS(e, t);
}
function aS(e) {
  e === void 0 && (e = {});
  var t = oS(null);
  return t.options = jr({ async: !0, ssr: !1 }, e), t;
}
var iS = function(e) {
  var t = e.sideCar, r = rS(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return Q.createElement(n, jr({}, r));
};
iS.isSideCarExport = !0;
function aB(e, t) {
  return e.useMedium(t), iS;
}
var sS = Yf({}, function(e) {
  var t = e.target, r = e.currentTarget;
  return {
    target: t,
    currentTarget: r
  };
}), lS = Yf(), iB = Yf(), sB = aS({
  async: !0
  // focus-lock sidecar is not required on the server
  // however, it might be required for JSDOM tests
  // ssr: true,
}), lB = [], Xf = /* @__PURE__ */ Q.forwardRef(function(t, r) {
  var n, o = Q.useState(), a = o[0], i = o[1], s = Q.useRef(), l = Q.useRef(!1), c = Q.useRef(null), u = t.children, d = t.disabled, f = t.noFocusGuards, p = t.persistentFocus, v = t.crossFrame, m = t.autoFocus, g = t.allowTextSelection, b = t.group, y = t.className, x = t.whiteList, _ = t.hasPositiveIndices, w = t.shards, P = w === void 0 ? lB : w, k = t.as, R = k === void 0 ? "div" : k, j = t.lockProps, $ = j === void 0 ? {} : j, L = t.sideCar, J = t.returnFocus, G = t.focusOptions, K = t.onActivation, te = t.onDeactivation, Z = Q.useState({}), N = Z[0], q = Q.useCallback(function() {
    c.current = c.current || document && document.activeElement, s.current && K && K(s.current), l.current = !0;
  }, [K]), he = Q.useCallback(function() {
    l.current = !1, te && te(s.current);
  }, [te]);
  ge(function() {
    d || (c.current = null);
  }, []);
  var D = Q.useCallback(function(se) {
    var W = c.current;
    if (W && W.focus) {
      var Y = typeof J == "function" ? J(W) : J;
      if (Y) {
        var ne = typeof Y == "object" ? Y : void 0;
        c.current = null, se ? Promise.resolve().then(function() {
          return W.focus(ne);
        }) : W.focus(ne);
      }
    }
  }, [J]), M = Q.useCallback(function(se) {
    l.current && sS.useMedium(se);
  }, []), re = lS.useMedium, V = Q.useCallback(function(se) {
    s.current !== se && (s.current = se, i(se));
  }, []);
  process.env.NODE_ENV !== "production" && (typeof g < "u" && console.warn("React-Focus-Lock: allowTextSelection is deprecated and enabled by default"), Q.useEffect(function() {
    !s.current && typeof R != "string" && console.error("FocusLock: could not obtain ref to internal node");
  }, []));
  var z = Yn((n = {}, n[eS] = d && "disabled", n[od] = b, n), $), U = f !== !0, oe = U && f !== "tail", ce = tS([r, V]);
  return /* @__PURE__ */ Q.createElement(Q.Fragment, null, U && [
    // nearest focus guard
    /* @__PURE__ */ Q.createElement("div", {
      key: "guard-first",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 0,
      style: iu
    }),
    // first tabbed element guard
    _ ? /* @__PURE__ */ Q.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": !0,
      tabIndex: d ? -1 : 1,
      style: iu
    }) : null
  ], !d && /* @__PURE__ */ Q.createElement(L, {
    id: N,
    sideCar: sB,
    observed: a,
    disabled: d,
    persistentFocus: p,
    crossFrame: v,
    autoFocus: m,
    whiteList: x,
    shards: P,
    onActivation: q,
    onDeactivation: he,
    returnFocus: D,
    focusOptions: G
  }), /* @__PURE__ */ Q.createElement(R, Yn({
    ref: ce
  }, z, {
    className: y,
    onBlur: re,
    onFocus: M
  }), u), oe && /* @__PURE__ */ Q.createElement("div", {
    "data-focus-guard": !0,
    tabIndex: d ? -1 : 0,
    style: iu
  }));
});
Xf.propTypes = process.env.NODE_ENV !== "production" ? {
  children: tt.node,
  disabled: tt.bool,
  returnFocus: tt.oneOfType([tt.bool, tt.object, tt.func]),
  focusOptions: tt.object,
  noFocusGuards: tt.bool,
  hasPositiveIndices: tt.bool,
  allowTextSelection: tt.bool,
  autoFocus: tt.bool,
  persistentFocus: tt.bool,
  crossFrame: tt.bool,
  group: tt.string,
  className: tt.string,
  whiteList: tt.func,
  shards: tt.arrayOf(tt.any),
  as: tt.oneOfType([tt.string, tt.func, tt.object]),
  lockProps: tt.object,
  onActivation: tt.func,
  onDeactivation: tt.func,
  sideCar: tt.any.isRequired
} : {};
Xf.defaultProps = {
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
const cS = Xf;
function ad(e, t) {
  return ad = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, o) {
    return n.__proto__ = o, n;
  }, ad(e, t);
}
function cB(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ad(e, t);
}
function Ka(e) {
  "@babel/helpers - typeof";
  return Ka = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Ka(e);
}
function uB(e, t) {
  if (Ka(e) !== "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Ka(n) !== "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function dB(e) {
  var t = uB(e, "string");
  return Ka(t) === "symbol" ? t : String(t);
}
function fB(e, t, r) {
  return t = dB(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function pB(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (typeof e != "function")
      throw new Error("Expected reducePropsToState to be a function.");
    if (typeof t != "function")
      throw new Error("Expected handleStateChangeOnClient to be a function.");
  }
  function r(n) {
    return n.displayName || n.name || "Component";
  }
  return function(o) {
    if (process.env.NODE_ENV !== "production" && typeof o != "function")
      throw new Error("Expected WrappedComponent to be a React component.");
    var a = [], i;
    function s() {
      i = e(a.map(function(c) {
        return c.props;
      })), t(i);
    }
    var l = /* @__PURE__ */ function(c) {
      cB(u, c);
      function u() {
        return c.apply(this, arguments) || this;
      }
      u.peek = function() {
        return i;
      };
      var d = u.prototype;
      return d.componentDidMount = function() {
        a.push(this), s();
      }, d.componentDidUpdate = function() {
        s();
      }, d.componentWillUnmount = function() {
        var p = a.indexOf(this);
        a.splice(p, 1), s();
      }, d.render = function() {
        return /* @__PURE__ */ Gt.createElement(o, this.props);
      }, u;
    }(PC);
    return fB(l, "displayName", "SideEffect(" + r(o) + ")"), l;
  };
}
var Ur = function(e) {
  for (var t = Array(e.length), r = 0; r < e.length; ++r)
    t[r] = e[r];
  return t;
}, rl = function(e) {
  return Array.isArray(e) ? e : [e];
}, uS = function(e) {
  return Array.isArray(e) ? e[0] : e;
}, hB = function(e) {
  if (e.nodeType !== Node.ELEMENT_NODE)
    return !1;
  var t = window.getComputedStyle(e, null);
  return !t || !t.getPropertyValue ? !1 : t.getPropertyValue("display") === "none" || t.getPropertyValue("visibility") === "hidden";
}, dS = function(e) {
  return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? (
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    e.parentNode.host
  ) : e.parentNode;
}, fS = function(e) {
  return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
}, mB = function(e, t) {
  return !e || fS(e) || !hB(e) && t(dS(e));
}, pS = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = mB(t, pS.bind(void 0, e));
  return e.set(t, n), n;
}, vB = function(e, t) {
  return e && !fS(e) ? bB(e) ? t(dS(e)) : !1 : !0;
}, hS = function(e, t) {
  var r = e.get(t);
  if (r !== void 0)
    return r;
  var n = vB(t, hS.bind(void 0, e));
  return e.set(t, n), n;
}, mS = function(e) {
  return e.dataset;
}, gB = function(e) {
  return e.tagName === "BUTTON";
}, vS = function(e) {
  return e.tagName === "INPUT";
}, gS = function(e) {
  return vS(e) && e.type === "radio";
}, yB = function(e) {
  return !((vS(e) || gB(e)) && (e.type === "hidden" || e.disabled));
}, bB = function(e) {
  var t = e.getAttribute(tB);
  return ![!0, "true", ""].includes(t);
}, Zf = function(e) {
  var t;
  return !!(e && (!((t = mS(e)) === null || t === void 0) && t.focusGuard));
}, nl = function(e) {
  return !Zf(e);
}, xB = function(e) {
  return !!e;
}, SB = function(e, t) {
  var r = e.tabIndex - t.tabIndex, n = e.index - t.index;
  if (r) {
    if (!e.tabIndex)
      return 1;
    if (!t.tabIndex)
      return -1;
  }
  return r || n;
}, yS = function(e, t, r) {
  return Ur(e).map(function(n, o) {
    return {
      node: n,
      index: o,
      tabIndex: r && n.tabIndex === -1 ? (n.dataset || {}).focusGuard ? 0 : -1 : n.tabIndex
    };
  }).filter(function(n) {
    return !t || n.tabIndex >= 0;
  }).sort(SB);
}, wB = [
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
], Jf = wB.join(","), _B = "".concat(Jf, ", [data-focus-guard]"), bS = function(e, t) {
  return Ur((e.shadowRoot || e).children).reduce(function(r, n) {
    return r.concat(n.matches(t ? _B : Jf) ? [n] : [], bS(n));
  }, []);
}, CB = function(e, t) {
  var r;
  return e instanceof HTMLIFrameElement && (!((r = e.contentDocument) === null || r === void 0) && r.body) ? zl([e.contentDocument.body], t) : [e];
}, zl = function(e, t) {
  return e.reduce(function(r, n) {
    var o, a = bS(n, t), i = (o = []).concat.apply(o, a.map(function(s) {
      return CB(s, t);
    }));
    return r.concat(
      // add all tabbables inside and within shadow DOMs in DOM order
      i,
      // add if node is tabbable itself
      n.parentNode ? Ur(n.parentNode.querySelectorAll(Jf)).filter(function(s) {
        return s === n;
      }) : []
    );
  }, []);
}, kB = function(e) {
  var t = e.querySelectorAll("[".concat(eB, "]"));
  return Ur(t).map(function(r) {
    return zl([r]);
  }).reduce(function(r, n) {
    return r.concat(n);
  }, []);
}, Qf = function(e, t) {
  return Ur(e).filter(function(r) {
    return pS(t, r);
  }).filter(function(r) {
    return yB(r);
  });
}, Jv = function(e, t) {
  return t === void 0 && (t = /* @__PURE__ */ new Map()), Ur(e).filter(function(r) {
    return hS(t, r);
  });
}, id = function(e, t, r) {
  return yS(Qf(zl(e, r), t), !0, r);
}, Qv = function(e, t) {
  return yS(Qf(zl(e), t), !1);
}, PB = function(e, t) {
  return Qf(kB(e), t);
}, Do = function(e, t) {
  return e.shadowRoot ? Do(e.shadowRoot, t) : Object.getPrototypeOf(e).contains !== void 0 && Object.getPrototypeOf(e).contains.call(e, t) ? !0 : Ur(e.children).some(function(r) {
    var n;
    if (r instanceof HTMLIFrameElement) {
      var o = (n = r.contentDocument) === null || n === void 0 ? void 0 : n.body;
      return o ? Do(o, t) : !1;
    }
    return Do(r, t);
  });
}, EB = function(e) {
  for (var t = /* @__PURE__ */ new Set(), r = e.length, n = 0; n < r; n += 1)
    for (var o = n + 1; o < r; o += 1) {
      var a = e[n].compareDocumentPosition(e[o]);
      (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(o), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(n);
    }
  return e.filter(function(i, s) {
    return !t.has(s);
  });
}, xS = function(e) {
  return e.parentNode ? xS(e.parentNode) : e;
}, ep = function(e) {
  var t = rl(e);
  return t.filter(Boolean).reduce(function(r, n) {
    var o = n.getAttribute(od);
    return r.push.apply(r, o ? EB(Ur(xS(n).querySelectorAll("[".concat(od, '="').concat(o, '"]:not([').concat(eS, '="disabled"])')))) : [n]), r;
  }, []);
}, TB = function(e) {
  try {
    return e();
  } catch {
    return;
  }
}, Ya = function(e) {
  if (e === void 0 && (e = document), !(!e || !e.activeElement)) {
    var t = e.activeElement;
    return t.shadowRoot ? Ya(t.shadowRoot) : t instanceof HTMLIFrameElement && TB(function() {
      return t.contentWindow.document;
    }) ? Ya(t.contentWindow.document) : t;
  }
}, AB = function(e, t) {
  return e === t;
}, IB = function(e, t) {
  return !!Ur(e.querySelectorAll("iframe")).some(function(r) {
    return AB(r, t);
  });
}, SS = function(e, t) {
  return t === void 0 && (t = Ya(uS(e).ownerDocument)), !t || t.dataset && t.dataset.focusGuard ? !1 : ep(e).some(function(r) {
    return Do(r, t) || IB(r, t);
  });
}, RB = function(e) {
  e === void 0 && (e = document);
  var t = Ya(e);
  return t ? Ur(e.querySelectorAll("[".concat(QF, "]"))).some(function(r) {
    return Do(r, t);
  }) : !1;
}, $B = function(e, t) {
  return t.filter(gS).filter(function(r) {
    return r.name === e.name;
  }).filter(function(r) {
    return r.checked;
  })[0] || e;
}, tp = function(e, t) {
  return gS(e) && e.name ? $B(e, t) : e;
}, NB = function(e) {
  var t = /* @__PURE__ */ new Set();
  return e.forEach(function(r) {
    return t.add(tp(r, e));
  }), e.filter(function(r) {
    return t.has(r);
  });
}, eg = function(e) {
  return e[0] && e.length > 1 ? tp(e[0], e) : e[0];
}, tg = function(e, t) {
  return e.length > 1 ? e.indexOf(tp(e[t], e)) : t;
}, wS = "NEW_FOCUS", OB = function(e, t, r, n) {
  var o = e.length, a = e[0], i = e[o - 1], s = Zf(r);
  if (!(r && e.indexOf(r) >= 0)) {
    var l = r !== void 0 ? t.indexOf(r) : -1, c = n ? t.indexOf(n) : l, u = n ? e.indexOf(n) : -1, d = l - c, f = t.indexOf(a), p = t.indexOf(i), v = NB(t), m = r !== void 0 ? v.indexOf(r) : -1, g = m - (n ? v.indexOf(n) : l), b = tg(e, 0), y = tg(e, o - 1);
    if (l === -1 || u === -1)
      return wS;
    if (!d && u >= 0)
      return u;
    if (l <= f && s && Math.abs(d) > 1)
      return y;
    if (l >= p && s && Math.abs(d) > 1)
      return b;
    if (d && Math.abs(g) > 1)
      return u;
    if (l <= f)
      return y;
    if (l > p)
      return b;
    if (d)
      return Math.abs(d) > 1 ? u : (o + u + d) % o;
  }
}, DB = function(e) {
  return function(t) {
    var r, n = (r = mS(t)) === null || r === void 0 ? void 0 : r.autofocus;
    return (
      // @ts-expect-error
      t.autofocus || //
      n !== void 0 && n !== "false" || //
      e.indexOf(t) >= 0
    );
  };
}, jB = function(e, t, r) {
  var n = e.map(function(a) {
    var i = a.node;
    return i;
  }), o = Jv(n.filter(DB(r)));
  return o && o.length ? eg(o) : eg(Jv(t));
}, sd = function(e, t) {
  return t === void 0 && (t = []), t.push(e), e.parentNode && sd(e.parentNode.host || e.parentNode, t), t;
}, su = function(e, t) {
  for (var r = sd(e), n = sd(t), o = 0; o < r.length; o += 1) {
    var a = r[o];
    if (n.indexOf(a) >= 0)
      return a;
  }
  return !1;
}, _S = function(e, t, r) {
  var n = rl(e), o = rl(t), a = n[0], i = !1;
  return o.filter(Boolean).forEach(function(s) {
    i = su(i || s, s) || i, r.filter(Boolean).forEach(function(l) {
      var c = su(a, l);
      c && (!i || Do(c, i) ? i = c : i = su(c, i));
    });
  }), i;
}, MB = function(e, t) {
  return e.reduce(function(r, n) {
    return r.concat(PB(n, t));
  }, []);
}, FB = function(e, t) {
  var r = /* @__PURE__ */ new Map();
  return t.forEach(function(n) {
    return r.set(n.node, n);
  }), e.map(function(n) {
    return r.get(n);
  }).filter(xB);
}, BB = function(e, t) {
  var r = Ya(rl(e).length > 0 ? document : uS(e).ownerDocument), n = ep(e).filter(nl), o = _S(r || e, e, n), a = /* @__PURE__ */ new Map(), i = Qv(n, a), s = id(n, a).filter(function(p) {
    var v = p.node;
    return nl(v);
  });
  if (!(!s[0] && (s = i, !s[0]))) {
    var l = Qv([o], a).map(function(p) {
      var v = p.node;
      return v;
    }), c = FB(l, s), u = c.map(function(p) {
      var v = p.node;
      return v;
    }), d = OB(u, l, r, t);
    if (d === wS) {
      var f = jB(i, u, MB(n, a));
      if (f)
        return { node: f };
      console.warn("focus-lock: cannot find any node to move focus into");
      return;
    }
    return d === void 0 ? d : c[d];
  }
}, LB = function(e) {
  var t = ep(e).filter(nl), r = _S(e, e, t), n = /* @__PURE__ */ new Map(), o = id([r], n, !0), a = id(t, n).filter(function(i) {
    var s = i.node;
    return nl(s);
  }).map(function(i) {
    var s = i.node;
    return s;
  });
  return o.map(function(i) {
    var s = i.node, l = i.index;
    return {
      node: s,
      index: l,
      lockItem: a.indexOf(s) >= 0,
      guard: Zf(s)
    };
  });
}, VB = function(e, t) {
  "focus" in e && e.focus(t), "contentWindow" in e && e.contentWindow && e.contentWindow.focus();
}, lu = 0, cu = !1, CS = function(e, t, r) {
  r === void 0 && (r = {});
  var n = BB(e, t);
  if (!cu && n) {
    if (lu > 2) {
      console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), cu = !0, setTimeout(function() {
        cu = !1;
      }, 1);
      return;
    }
    lu++, VB(n.node, r.focusOptions), lu--;
  }
};
function rp(e) {
  setTimeout(e, 1);
}
var zB = function() {
  return document && document.activeElement === document.body;
}, WB = function() {
  return zB() || RB();
}, jo = null, _o = null, Mo = null, Xa = !1, HB = function() {
  return !0;
}, UB = function(t) {
  return (jo.whiteList || HB)(t);
}, GB = function(t, r) {
  Mo = {
    observerNode: t,
    portaledElement: r
  };
}, qB = function(t) {
  return Mo && Mo.portaledElement === t;
};
function rg(e, t, r, n) {
  var o = null, a = e;
  do {
    var i = n[a];
    if (i.guard)
      i.node.dataset.focusAutoGuard && (o = i);
    else if (i.lockItem) {
      if (a !== e)
        return;
      o = null;
    } else
      break;
  } while ((a += r) !== t);
  o && (o.node.tabIndex = 0);
}
var KB = function(t) {
  return t && "current" in t ? t.current : t;
}, YB = function(t) {
  return t ? !!Xa : Xa === "meanwhile";
}, XB = function e(t, r, n) {
  return r && // find host equal to active element and check nested active element
  (r.host === t && (!r.activeElement || n.contains(r.activeElement)) || r.parentNode && e(t, r.parentNode, n));
}, ZB = function(t, r) {
  return r.some(function(n) {
    return XB(t, n, n);
  });
}, ol = function() {
  var t = !1;
  if (jo) {
    var r = jo, n = r.observed, o = r.persistentFocus, a = r.autoFocus, i = r.shards, s = r.crossFrame, l = r.focusOptions, c = n || Mo && Mo.portaledElement, u = document && document.activeElement;
    if (c) {
      var d = [c].concat(i.map(KB).filter(Boolean));
      if ((!u || UB(u)) && (o || YB(s) || !WB() || !_o && a) && (c && !// active element is "inside" working area
      (SS(d) || // check for shadow-dom contained elements
      u && ZB(u, d) || qB(u)) && (document && !_o && u && !a ? (u.blur && u.blur(), document.body.focus()) : (t = CS(d, _o, {
        focusOptions: l
      }), Mo = {})), Xa = !1, _o = document && document.activeElement), document) {
        var f = document && document.activeElement, p = LB(d), v = p.map(function(m) {
          var g = m.node;
          return g;
        }).indexOf(f);
        v > -1 && (p.filter(function(m) {
          var g = m.guard, b = m.node;
          return g && b.dataset.focusAutoGuard;
        }).forEach(function(m) {
          var g = m.node;
          return g.removeAttribute("tabIndex");
        }), rg(v, p.length, 1, p), rg(v, -1, -1, p));
      }
    }
  }
  return t;
}, kS = function(t) {
  ol() && t && (t.stopPropagation(), t.preventDefault());
}, np = function() {
  return rp(ol);
}, JB = function(t) {
  var r = t.target, n = t.currentTarget;
  n.contains(r) || GB(n, r);
}, QB = function() {
  return null;
};
process.env.NODE_ENV !== "production" && Qx.node.isRequired;
var PS = function() {
  Xa = "just", rp(function() {
    Xa = "meanwhile";
  });
}, eL = function() {
  document.addEventListener("focusin", kS), document.addEventListener("focusout", np), window.addEventListener("blur", PS);
}, tL = function() {
  document.removeEventListener("focusin", kS), document.removeEventListener("focusout", np), window.removeEventListener("blur", PS);
};
function rL(e) {
  return e.filter(function(t) {
    var r = t.disabled;
    return !r;
  });
}
function nL(e) {
  var t = e.slice(-1)[0];
  t && !jo && eL();
  var r = jo, n = r && t && t.id === r.id;
  jo = t, r && !n && (r.onDeactivation(), e.filter(function(o) {
    var a = o.id;
    return a === r.id;
  }).length || r.returnFocus(!t)), t ? (_o = null, (!n || r.observed !== t.observed) && t.onActivation(), ol(), rp(ol)) : (tL(), _o = null);
}
sS.assignSyncMedium(JB);
lS.assignMedium(np);
iB.assignMedium(function(e) {
  return e({
    moveFocusInside: CS,
    focusInside: SS
  });
});
const oL = pB(rL, nL)(QB);
var ES = /* @__PURE__ */ Q.forwardRef(function(t, r) {
  return /* @__PURE__ */ Q.createElement(cS, Yn({
    sideCar: oL,
    ref: r
  }, t));
}), TS = cS.propTypes || {};
TS.sideCar;
var aL = GF(TS, ["sideCar"]);
ES.propTypes = process.env.NODE_ENV !== "production" ? aL : {};
const ng = ES;
function AS(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function op(e) {
  var t;
  if (!AS(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function iL(e) {
  var t, r;
  return (r = (t = IS(e)) == null ? void 0 : t.defaultView) != null ? r : window;
}
function IS(e) {
  return AS(e) ? e.ownerDocument : document;
}
function sL(e) {
  return IS(e).activeElement;
}
function lL(e) {
  const t = e.ownerDocument.defaultView || window, { overflow: r, overflowX: n, overflowY: o } = t.getComputedStyle(e);
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function cL(e) {
  return e.localName === "html" ? e : e.assignedSlot || e.parentElement || e.ownerDocument.documentElement;
}
function RS(e) {
  return ["html", "body", "#document"].includes(e.localName) ? e.ownerDocument.body : op(e) && lL(e) ? e : RS(cL(e));
}
var $S = (e) => e.hasAttribute("tabindex"), uL = (e) => $S(e) && e.tabIndex === -1;
function dL(e) {
  return !!e.getAttribute("disabled") || !!e.getAttribute("aria-disabled");
}
function NS(e) {
  return e.parentElement && NS(e.parentElement) ? !0 : e.hidden;
}
function fL(e) {
  const t = e.getAttribute("contenteditable");
  return t !== "false" && t != null;
}
function OS(e) {
  if (!op(e) || NS(e) || dL(e))
    return !1;
  const { localName: t } = e;
  if (["input", "select", "textarea", "button"].indexOf(t) >= 0)
    return !0;
  const n = {
    a: () => e.hasAttribute("href"),
    audio: () => e.hasAttribute("controls"),
    video: () => e.hasAttribute("controls")
  };
  return t in n ? n[t]() : fL(e) ? !0 : $S(e);
}
function pL(e) {
  return e ? op(e) && OS(e) && !uL(e) : !1;
}
var hL = [
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
], mL = hL.join(), vL = (e) => e.offsetWidth > 0 && e.offsetHeight > 0;
function DS(e) {
  const t = Array.from(
    e.querySelectorAll(mL)
  );
  return t.unshift(e), t.filter((r) => OS(r) && vL(r));
}
var og, gL = (og = ng.default) != null ? og : ng, ap = (e) => {
  const {
    initialFocusRef: t,
    finalFocusRef: r,
    contentRef: n,
    restoreFocus: o,
    children: a,
    isDisabled: i,
    autoFocus: s,
    persistentFocus: l,
    lockFocusAcrossFrames: c
  } = e, u = I(() => {
    t != null && t.current ? t.current.focus() : n != null && n.current && DS(n.current).length === 0 && requestAnimationFrame(() => {
      var v;
      (v = n.current) == null || v.focus();
    });
  }, [t, n]), d = I(() => {
    var p;
    (p = r == null ? void 0 : r.current) == null || p.focus();
  }, [r]), f = o && !r;
  return /* @__PURE__ */ h.jsx(
    gL,
    {
      crossFrame: c,
      persistentFocus: l,
      autoFocus: s,
      disabled: i,
      onActivation: u,
      onDeactivation: d,
      returnFocus: f,
      children: a
    }
  );
};
ap.displayName = "FocusLock";
function yL(e) {
  const t = ie();
  return ge(() => {
    t.current = e;
  }, [e]), t.current;
}
function bL(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function xL(e = {}) {
  const { timeout: t = 300, preventDefault: r = () => !0 } = e, [n, o] = de([]), a = ie(), i = () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }, s = () => {
    i(), a.current = setTimeout(() => {
      o([]), a.current = null;
    }, t);
  };
  ge(() => i, []);
  function l(c) {
    return (u) => {
      if (u.key === "Backspace") {
        const d = [...n];
        d.pop(), o(d);
        return;
      }
      if (bL(u)) {
        const d = n.concat(u.key);
        r(u) && (u.preventDefault(), u.stopPropagation()), o(d), c(d.join("")), s();
      }
    };
  }
  return l;
}
var Wl = ii ? Qa : ge;
function nn(e, t = []) {
  const r = ie(e);
  return Wl(() => {
    r.current = e;
  }), I((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function SL(e, t) {
  const r = nn(e);
  ge(() => {
    if (t == null)
      return;
    let n = null;
    return n = window.setTimeout(() => {
      r();
    }, t), () => {
      n && window.clearTimeout(n);
    };
  }, [t, r]);
}
function wL(e, t) {
  const r = ie();
  ge(() => {
    if (r.current) {
      const n = Object.keys({ ...r.current, ...t }), o = {};
      n.forEach((a) => {
        r.current[a] !== t[a] && (o[a] = {
          from: r.current[a],
          to: t[a]
        });
      }), Object.keys(o).length && console.log("[why-did-you-update]", e, o);
    }
    r.current = t;
  });
}
function _L(e, t) {
  const r = nn(e);
  ge(() => {
    let n = null;
    const o = () => r();
    return t !== null && (n = window.setInterval(o, t)), () => {
      n && window.clearInterval(n);
    };
  }, [t, r]);
}
function CL(e) {
  const t = ie(null);
  return t.current = e, t;
}
function jS(e, t) {
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
function kL(...e) {
  return we(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((r) => {
      r && jS(r, t);
    });
  }, e);
}
function yi(e, t, r, n) {
  const o = nn(t);
  return ge(() => {
    var a;
    const i = (a = Va(r)) != null ? a : document;
    if (t)
      return i.addEventListener(e, o, n), () => {
        i.removeEventListener(e, o, n);
      };
  }, [e, r, n, o, t]), () => {
    var a;
    ((a = Va(r)) != null ? a : document).removeEventListener(e, o, n);
  };
}
function PL(e = !0) {
  const t = ie();
  return yi("mousedown", (r) => {
    e && (t.current = r.target);
  }), t;
}
function EL(e) {
  const { ref: t, handler: r, enabled: n = !0 } = e, o = nn(r), i = ie({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  ge(() => {
    if (!n)
      return;
    const s = (d) => {
      uu(d, t) && (i.isPointerDown = !0);
    }, l = (d) => {
      if (i.ignoreEmulatedMouseEvents) {
        i.ignoreEmulatedMouseEvents = !1;
        return;
      }
      i.isPointerDown && r && uu(d, t) && (i.isPointerDown = !1, o(d));
    }, c = (d) => {
      i.ignoreEmulatedMouseEvents = !0, r && i.isPointerDown && uu(d, t) && (i.isPointerDown = !1, o(d));
    }, u = to(t.current);
    return u.addEventListener("mousedown", s, !0), u.addEventListener("mouseup", l, !0), u.addEventListener("touchstart", s, !0), u.addEventListener("touchend", c, !0), () => {
      u.removeEventListener("mousedown", s, !0), u.removeEventListener("mouseup", l, !0), u.removeEventListener("touchstart", s, !0), u.removeEventListener("touchend", c, !0);
    };
  }, [r, t, o, i, n]);
}
function uu(e, t) {
  var r;
  const n = e.target;
  return n && !to(n).contains(n) ? !1 : !((r = t.current) != null && r.contains(n));
}
function ip(e, t, r, n) {
  return yi(
    Xd(t),
    Yd(r, t === "pointerdown"),
    e,
    n
  );
}
function sp(e, t = []) {
  return ge(
    () => () => e(),
    t
  );
}
function TL(e, t) {
  const {
    onPan: r,
    onPanStart: n,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: i,
    threshold: s
  } = t, l = !!(r || n || o || a || i), c = ie(null), u = {
    onSessionStart: a,
    onSessionEnd: i,
    onStart: n,
    onMove: r,
    onEnd(f, p) {
      c.current = null, o == null || o(f, p);
    }
  };
  ge(() => {
    var f;
    (f = c.current) == null || f.updateHandlers(u);
  });
  function d(f) {
    c.current = new ZN(f, u, s);
  }
  ip(
    () => e.current,
    "pointerdown",
    l ? d : fb
  ), sp(() => {
    var f;
    (f = c.current) == null || f.end(), c.current = null;
  });
}
function lp(e, t) {
  const r = It();
  return we(
    () => e || [t, r].filter(Boolean).join("-"),
    [e, t, r]
  );
}
function AL(e, ...t) {
  const r = lp(e);
  return we(() => t.map((n) => `${n}-${r}`), [r, t]);
}
function IL(e) {
  const [t, r] = de(null);
  return { ref: I(
    (o) => {
      r(o ? e : null);
    },
    [e]
  ), id: t, isRendered: !!t };
}
function MS(e, t) {
  const r = e !== void 0;
  return [r, r && typeof e < "u" ? e : t];
}
function RL(e) {
  const {
    value: t,
    defaultValue: r,
    onChange: n,
    shouldUpdate: o = (f, p) => f !== p
  } = e, a = nn(n), i = nn(o), [s, l] = de(r), c = t !== void 0, u = c ? t : s, d = I(
    (f) => {
      const p = Va(f, u);
      i(u, p) && (c || l(p), a(p));
    },
    [c, a, u, i]
  );
  return [u, d];
}
function $L(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = nn(r), i = nn(t), [s, l] = de(e.defaultIsOpen || !1), [c, u] = MS(n, s), d = lp(o, "disclosure"), f = I(() => {
    c || l(!1), i == null || i();
  }, [c, i]), p = I(() => {
    c || l(!0), a == null || a();
  }, [c, a]), v = I(() => {
    (u ? f : p)();
  }, [u, p, f]);
  return {
    isOpen: !!u,
    onOpen: p,
    onClose: f,
    onToggle: v,
    isControlled: c,
    getButtonProps: (m = {}) => ({
      ...m,
      "aria-expanded": u,
      "aria-controls": d,
      onClick: TN(m.onClick, v)
    }),
    getDisclosureProps: (m = {}) => ({
      ...m,
      hidden: !u,
      id: d
    })
  };
}
function NL() {
  const e = ie(/* @__PURE__ */ new Map()), t = e.current, r = I((o, a, i, s) => {
    const l = Yd(
      i,
      a === "pointerdown"
    );
    e.current.set(i, {
      __listener: l,
      type: Xd(a),
      el: o,
      options: s
    }), o.addEventListener(a, l, s);
  }, []), n = I(
    (o, a, i, s) => {
      const { __listener: l } = e.current.get(i);
      o.removeEventListener(a, l, s), e.current.delete(l);
    },
    []
  );
  return ge(
    () => () => {
      t.forEach((o, a) => {
        n(o.el, o.type, a, o.options);
      });
    },
    [n, t]
  ), { add: r, remove: n };
}
var Hl = (e, t) => {
  const r = ie(!1), n = ie(!1);
  ge(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), ge(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
};
function OL(e, t) {
  const { shouldFocus: r, preventScroll: n } = t;
  Hl(() => {
    const o = e.current;
    !o || !r || iO(o) || Wa(o, { preventScroll: n, nextTick: !0 });
  }, [r, e, n]);
}
function DL(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = bN(t);
  return !r || Kd(t, r) ? !1 : !!lO(r);
}
function jL(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, a = r && !n;
  Hl(() => {
    if (!a || DL(e))
      return;
    const i = (o == null ? void 0 : o.current) || e.current;
    i && Wa(i, { nextTick: !0 });
  }, [a, e, o]);
}
function ML(e) {
  const { ref: t, elements: r, enabled: n } = e, o = wN("Safari");
  ip(() => to(t.current), "pointerdown", (i) => {
    if (!o || !n)
      return;
    const s = i.target, c = (r ?? [t]).some((u) => {
      const d = db(u) ? u.current : u;
      return Kd(d, s);
    });
    !Sb(s) && c && (i.preventDefault(), Wa(s));
  });
}
var FL = {
  preventScroll: !0,
  shouldFocus: !1
};
function BL(e, t = FL) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: a } = t, i = db(e) ? e.current : e, s = o && a, l = ie(s), c = ie(a);
  Wl(() => {
    !c.current && a && (l.current = s), c.current = a;
  }, [a, s]);
  const u = I(() => {
    if (!(!a || !i || !l.current) && (l.current = !1, !Kd(i, document.activeElement)))
      if (r != null && r.current)
        Wa(r.current, { preventScroll: n, nextTick: !0 });
      else {
        const d = fO(i);
        d.length > 0 && Wa(d[0], { preventScroll: n, nextTick: !0 });
      }
  }, [a, n, i, r]);
  Hl(() => {
    u();
  }, [u]), yi("transitionend", u, i);
}
function LL() {
  const e = ie(!1), [t, r] = de(0);
  return sp(() => {
    e.current = !0;
  }), I(() => {
    e.current || r(t + 1);
  }, [t]);
}
function VL(e) {
  const { isOpen: t, ref: r } = e, [n, o] = de(t), [a, i] = de(!1);
  return ge(() => {
    a || (o(t), i(!0));
  }, [t, a, n]), yi(
    "animationend",
    () => {
      o(t);
    },
    () => r.current
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const c = gN(r.current), u = new c.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(u);
    }
  };
}
function zL(e = !1) {
  const [t, r] = de(e), n = we(
    () => ({
      on: () => r(!0),
      off: () => r(!1),
      toggle: () => r((o) => !o)
    }),
    []
  );
  return [t, n];
}
var WL = function() {
  var e = document.getSelection();
  if (!e.rangeCount)
    return function() {
    };
  for (var t = document.activeElement, r = [], n = 0; n < e.rangeCount; n++)
    r.push(e.getRangeAt(n));
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
    e.type === "Caret" && e.removeAllRanges(), e.rangeCount || r.forEach(function(o) {
      e.addRange(o);
    }), t && t.focus();
  };
}, HL = WL, ag = {
  "text/plain": "Text",
  "text/html": "Url",
  default: "Text"
}, UL = "Copy to clipboard: #{key}, Enter";
function GL(e) {
  var t = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return e.replace(/#{\s*key\s*}/g, t);
}
function qL(e, t) {
  var r, n, o, a, i, s, l = !1;
  t || (t = {}), r = t.debug || !1;
  try {
    o = HL(), a = document.createRange(), i = document.getSelection(), s = document.createElement("span"), s.textContent = e, s.ariaHidden = "true", s.style.all = "unset", s.style.position = "fixed", s.style.top = 0, s.style.clip = "rect(0, 0, 0, 0)", s.style.whiteSpace = "pre", s.style.webkitUserSelect = "text", s.style.MozUserSelect = "text", s.style.msUserSelect = "text", s.style.userSelect = "text", s.addEventListener("copy", function(u) {
      if (u.stopPropagation(), t.format)
        if (u.preventDefault(), typeof u.clipboardData > "u") {
          r && console.warn("unable to use e.clipboardData"), r && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
          var d = ag[t.format] || ag.default;
          window.clipboardData.setData(d, e);
        } else
          u.clipboardData.clearData(), u.clipboardData.setData(t.format, e);
      t.onCopy && (u.preventDefault(), t.onCopy(u.clipboardData));
    }), document.body.appendChild(s), a.selectNodeContents(s), i.addRange(a);
    var c = document.execCommand("copy");
    if (!c)
      throw new Error("copy command was unsuccessful");
    l = !0;
  } catch (u) {
    r && console.error("unable to copy using execCommand: ", u), r && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), l = !0;
    } catch (d) {
      r && console.error("unable to copy using clipboardData: ", d), r && console.error("falling back to prompt"), n = GL("message" in t ? t.message : UL), window.prompt(n, e);
    }
  } finally {
    i && (typeof i.removeRange == "function" ? i.removeRange(a) : i.removeAllRanges()), s && document.body.removeChild(s), o();
  }
  return l;
}
var KL = qL;
const YL = /* @__PURE__ */ ul(KL);
function XL(e, t = {}) {
  const [r, n] = de(!1), [o, a] = de(e);
  ge(() => a(e), [e]);
  const { timeout: i = 1500, ...s } = typeof t == "number" ? { timeout: t } : t, l = I(() => {
    const c = YL(o, s);
    n(c);
  }, [o, s]);
  return ge(() => {
    let c = null;
    return r && (c = window.setTimeout(() => {
      n(!1);
    }, i)), () => {
      c && window.clearTimeout(c);
    };
  }, [i, r]), {
    value: o,
    setValue: a,
    onCopy: l,
    hasCopied: r
  };
}
function ZL(e) {
  const t = ie(null);
  return t.current === null && (t.current = typeof e == "function" ? e() : e), t.current;
}
function JL(e, t) {
  const [r, n] = de(null), o = ie();
  return Wl(() => {
    function a() {
      const i = e.current;
      i && (o.current = requestAnimationFrame(() => {
        const s = xO(i);
        n(s);
      }));
    }
    return a(), t && (window.addEventListener("resize", a), window.addEventListener("scroll", a)), () => {
      t && (window.removeEventListener("resize", a), window.removeEventListener("scroll", a)), o.current && cancelAnimationFrame(o.current);
    };
  }, [t]), r;
}
var [QL, cp] = Ie({
  name: "InputGroupStylesContext",
  errorMessage: `useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `
}), FS = O(
  function(t, r) {
    const n = Ze("Input", t), { children: o, className: a, ...i } = Ee(t), s = H("chakra-input__group", a), l = {}, c = ln(o), u = n.field;
    c.forEach((f) => {
      var p, v;
      n && (u && f.type.id === "InputLeftElement" && (l.paddingStart = (p = u.height) != null ? p : u.h), u && f.type.id === "InputRightElement" && (l.paddingEnd = (v = u.height) != null ? v : u.h), f.type.id === "InputRightAddon" && (l.borderEndRadius = 0), f.type.id === "InputLeftAddon" && (l.borderStartRadius = 0));
    });
    const d = c.map((f) => {
      var p, v;
      const m = Jd({
        size: ((p = f.props) == null ? void 0 : p.size) || t.size,
        variant: ((v = f.props) == null ? void 0 : v.variant) || t.variant
      });
      return f.type.id !== "Input" ? Tt(f, m) : Tt(f, Object.assign(m, l, f.props));
    });
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        className: s,
        ref: r,
        __css: {
          width: "100%",
          display: "flex",
          position: "relative",
          isolation: "isolate"
        },
        "data-group": !0,
        ...i,
        children: /* @__PURE__ */ h.jsx(QL, { value: n, children: d })
      }
    );
  }
);
FS.displayName = "InputGroup";
var eV = {
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
}, tV = E("div", {
  baseStyle: {
    flex: "0 0 auto",
    width: "auto",
    display: "flex",
    alignItems: "center",
    whiteSpace: "nowrap"
  }
}), Ul = O(
  function(t, r) {
    var n;
    const { placement: o = "left", ...a } = t, i = (n = eV[o]) != null ? n : {}, s = cp();
    return /* @__PURE__ */ h.jsx(
      tV,
      {
        ref: r,
        ...a,
        __css: {
          ...s.addon,
          ...i
        }
      }
    );
  }
);
Ul.displayName = "InputAddon";
var up = O(
  function(t, r) {
    return /* @__PURE__ */ h.jsx(
      Ul,
      {
        ref: r,
        placement: "left",
        ...t,
        className: H("chakra-input__left-addon", t.className)
      }
    );
  }
);
up.displayName = "InputLeftAddon";
up.id = "InputLeftAddon";
var dp = O(
  function(t, r) {
    return /* @__PURE__ */ h.jsx(
      Ul,
      {
        ref: r,
        placement: "right",
        ...t,
        className: H("chakra-input__right-addon", t.className)
      }
    );
  }
);
dp.displayName = "InputRightAddon";
dp.id = "InputRightAddon";
var rV = E("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "0",
    zIndex: 2
  }
}), Gl = O(function(t, r) {
  var n, o;
  const { placement: a = "left", ...i } = t, s = cp(), l = s.field, u = {
    [a === "left" ? "insetStart" : "insetEnd"]: "0",
    width: (n = l == null ? void 0 : l.height) != null ? n : l == null ? void 0 : l.h,
    height: (o = l == null ? void 0 : l.height) != null ? o : l == null ? void 0 : l.h,
    fontSize: l == null ? void 0 : l.fontSize,
    ...s.element
  };
  return /* @__PURE__ */ h.jsx(rV, { ref: r, __css: u, ...i });
});
Gl.id = "InputElement";
Gl.displayName = "InputElement";
var fp = O(
  function(t, r) {
    const { className: n, ...o } = t, a = H("chakra-input__left-element", n);
    return /* @__PURE__ */ h.jsx(
      Gl,
      {
        ref: r,
        placement: "left",
        className: a,
        ...o
      }
    );
  }
);
fp.id = "InputLeftElement";
fp.displayName = "InputLeftElement";
var pp = O(
  function(t, r) {
    const { className: n, ...o } = t, a = H("chakra-input__right-element", n);
    return /* @__PURE__ */ h.jsx(
      Gl,
      {
        ref: r,
        placement: "right",
        className: a,
        ...o
      }
    );
  }
);
pp.id = "InputRightElement";
pp.displayName = "InputRightElement";
var hp = O(function(t, r) {
  const { htmlSize: n, ...o } = t, a = Ze("Input", o), i = Ee(o), s = Fl(i), l = H("chakra-input", t.className);
  return /* @__PURE__ */ h.jsx(
    E.input,
    {
      size: n,
      ...s,
      __css: a.field,
      ref: r,
      className: l
    }
  );
});
hp.displayName = "Input";
hp.id = "Input";
var BS = O(function(t, r) {
  const n = Pt("Link", t), { className: o, isExternal: a, ...i } = Ee(t);
  return /* @__PURE__ */ h.jsx(
    E.a,
    {
      target: a ? "_blank" : void 0,
      rel: a ? "noopener" : void 0,
      ref: r,
      className: H("chakra-link", o),
      ...i,
      __css: n
    }
  );
});
BS.displayName = "Link";
var [nV, mp] = Ie({
  name: "ListStylesContext",
  errorMessage: `useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `
}), ql = O(function(t, r) {
  const n = Ze("List", t), {
    children: o,
    styleType: a = "none",
    stylePosition: i,
    spacing: s,
    ...l
  } = Ee(t), c = ln(o), d = s ? { ["& > *:not(style) ~ *:not(style)"]: { mt: s } } : {};
  return /* @__PURE__ */ h.jsx(nV, { value: n, children: /* @__PURE__ */ h.jsx(
    E.ul,
    {
      ref: r,
      listStyleType: a,
      listStylePosition: i,
      role: "list",
      __css: { ...n.container, ...d },
      ...l,
      children: c
    }
  ) });
});
ql.displayName = "List";
var LS = O((e, t) => {
  const { as: r, ...n } = e;
  return /* @__PURE__ */ h.jsx(ql, { ref: t, as: "ol", styleType: "decimal", marginStart: "1em", ...n });
});
LS.displayName = "OrderedList";
var VS = O(function(t, r) {
  const { as: n, ...o } = t;
  return /* @__PURE__ */ h.jsx(ql, { ref: r, as: "ul", styleType: "initial", marginStart: "1em", ...o });
});
VS.displayName = "UnorderedList";
var zS = O(function(t, r) {
  const n = mp();
  return /* @__PURE__ */ h.jsx(E.li, { ref: r, ...t, __css: n.item });
});
zS.displayName = "ListItem";
var WS = O(function(t, r) {
  const n = mp();
  return /* @__PURE__ */ h.jsx(Rt, { ref: r, role: "presentation", ...t, __css: n.icon });
});
WS.displayName = "ListIcon";
var vp = O(function(t, r) {
  const {
    templateAreas: n,
    gap: o,
    rowGap: a,
    columnGap: i,
    column: s,
    row: l,
    autoFlow: c,
    autoRows: u,
    templateRows: d,
    autoColumns: f,
    templateColumns: p,
    ...v
  } = t, m = {
    display: "grid",
    gridTemplateAreas: n,
    gridGap: o,
    gridRowGap: a,
    gridColumnGap: i,
    gridAutoColumns: f,
    gridColumn: s,
    gridRow: l,
    gridAutoFlow: c,
    gridAutoRows: u,
    gridTemplateRows: d,
    gridTemplateColumns: p
  };
  return /* @__PURE__ */ h.jsx(E.div, { ref: r, __css: m, ...v });
});
vp.displayName = "Grid";
var HS = Object.freeze([
  "base",
  "sm",
  "md",
  "lg",
  "xl",
  "2xl"
]);
function Mr(e, t) {
  return Array.isArray(e) ? e.map((r) => r === null ? null : t(r)) : _t(e) ? Object.keys(e).reduce((r, n) => (r[n] = t(e[n]), r), {}) : e != null ? t(e) : null;
}
function oV(e, t = HS) {
  const r = {};
  return e.forEach((n, o) => {
    const a = t[o];
    n != null && (r[a] = n);
  }), r;
}
var gp = O(
  function(t, r) {
    const { columns: n, spacingX: o, spacingY: a, spacing: i, minChildWidth: s, ...l } = t, c = sr(), u = s ? iV(s, c) : sV(n);
    return /* @__PURE__ */ h.jsx(
      vp,
      {
        ref: r,
        gap: i,
        columnGap: o,
        rowGap: a,
        templateColumns: u,
        ...l
      }
    );
  }
);
gp.displayName = "SimpleGrid";
function aV(e) {
  return typeof e == "number" ? `${e}px` : e;
}
function iV(e, t) {
  return Mr(e, (r) => {
    const n = $d("sizes", r, aV(r))(t);
    return r === null ? null : `repeat(auto-fit, minmax(${n}, 1fr))`;
  });
}
function sV(e) {
  return Mr(
    e,
    (t) => t === null ? null : `repeat(${t}, minmax(0, 1fr))`
  );
}
var US = E("div", {
  baseStyle: {
    flex: 1,
    justifySelf: "stretch",
    alignSelf: "stretch"
  }
});
US.displayName = "Spacer";
var yp = O(function(t, r) {
  const n = Pt("Text", t), { className: o, align: a, decoration: i, casing: s, ...l } = Ee(t), c = Jd({
    textAlign: t.align,
    textDecoration: t.decoration,
    textTransform: t.casing
  });
  return /* @__PURE__ */ h.jsx(
    E.p,
    {
      ref: r,
      className: H("chakra-text", t.className),
      ...c,
      ...l,
      __css: n
    }
  );
});
yp.displayName = "Text";
var GS = O(function(t, r) {
  const {
    spacing: n = "0.5rem",
    spacingX: o,
    spacingY: a,
    children: i,
    justify: s,
    direction: l,
    align: c,
    className: u,
    shouldWrapChildren: d,
    ...f
  } = t, p = we(
    () => d ? Hr.map(i, (v, m) => /* @__PURE__ */ h.jsx(bp, { children: v }, m)) : i,
    [i, d]
  );
  return /* @__PURE__ */ h.jsx(E.div, { ref: r, className: H("chakra-wrap", u), ...f, children: /* @__PURE__ */ h.jsx(
    E.ul,
    {
      className: "chakra-wrap__list",
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: s,
        alignItems: c,
        flexDirection: l,
        listStyleType: "none",
        gap: n,
        columnGap: o,
        rowGap: a,
        padding: "0"
      },
      children: p
    }
  ) });
});
GS.displayName = "Wrap";
var bp = O(function(t, r) {
  const { className: n, ...o } = t;
  return /* @__PURE__ */ h.jsx(
    E.li,
    {
      ref: r,
      __css: { display: "flex", alignItems: "flex-start" },
      className: H("chakra-wrap__listitem", n),
      ...o
    }
  );
});
bp.displayName = "WrapItem";
var qS = (e) => /* @__PURE__ */ h.jsx(
  E.div,
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
qS.displayName = "StackDivider";
var xp = (e) => /* @__PURE__ */ h.jsx(
  E.div,
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
xp.displayName = "StackItem";
function lV(e) {
  const { spacing: t, direction: r } = e, n = {
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
    "&": Mr(
      r,
      (o) => n[o]
    )
  };
}
var Kl = O((e, t) => {
  const {
    isInline: r,
    direction: n,
    align: o,
    justify: a,
    spacing: i = "0.5rem",
    wrap: s,
    children: l,
    divider: c,
    className: u,
    shouldWrapChildren: d,
    ...f
  } = e, p = r ? "row" : n ?? "column", v = we(
    () => lV({ spacing: i, direction: p }),
    [i, p]
  ), m = !!c, g = !d && !m, b = we(() => {
    const x = ln(l);
    return g ? x : x.map((_, w) => {
      const P = typeof _.key < "u" ? _.key : w, k = w + 1 === x.length, j = d ? /* @__PURE__ */ h.jsx(xp, { children: _ }, P) : _;
      if (!m)
        return j;
      const $ = Tt(
        c,
        {
          __css: v
        }
      ), L = k ? null : $;
      return /* @__PURE__ */ h.jsxs(jg, { children: [
        j,
        L
      ] }, P);
    });
  }, [
    c,
    v,
    m,
    g,
    d,
    l
  ]), y = H("chakra-stack", u);
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: t,
      display: "flex",
      alignItems: o,
      justifyContent: a,
      flexDirection: p,
      flexWrap: s,
      gap: m ? void 0 : i,
      className: y,
      ...f,
      children: b
    }
  );
});
Kl.displayName = "Stack";
var Sp = O((e, t) => /* @__PURE__ */ h.jsx(Kl, { align: "center", ...e, direction: "column", ref: t }));
Sp.displayName = "VStack";
var Co = O((e, t) => /* @__PURE__ */ h.jsx(Kl, { align: "center", ...e, direction: "row", ref: t }));
Co.displayName = "HStack";
function ig(e) {
  return Mr(
    e,
    (t) => t === "auto" ? "auto" : `span ${t}/span ${t}`
  );
}
var KS = O(function(t, r) {
  const {
    area: n,
    colSpan: o,
    colStart: a,
    colEnd: i,
    rowEnd: s,
    rowSpan: l,
    rowStart: c,
    ...u
  } = t, d = Jd({
    gridArea: n,
    gridColumn: ig(o),
    gridRow: ig(l),
    gridColumnStart: a,
    gridColumnEnd: i,
    gridRowStart: c,
    gridRowEnd: s
  });
  return /* @__PURE__ */ h.jsx(E.div, { ref: r, __css: d, ...u });
});
KS.displayName = "GridItem";
var wp = O(function(t, r) {
  const n = Pt("Heading", t), { className: o, ...a } = Ee(t);
  return /* @__PURE__ */ h.jsx(
    E.h2,
    {
      ref: r,
      className: H("chakra-heading", t.className),
      ...a,
      __css: n
    }
  );
});
wp.displayName = "Heading";
var Yl = E("div");
Yl.displayName = "Box";
var _p = O(function(t, r) {
  const { size: n, centerContent: o = !0, ...a } = t, i = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ h.jsx(
    Yl,
    {
      ref: r,
      boxSize: n,
      __css: {
        ...i,
        flexShrink: 0,
        flexGrow: 0
      },
      ...a
    }
  );
});
_p.displayName = "Square";
var YS = O(function(t, r) {
  const { size: n, ...o } = t;
  return /* @__PURE__ */ h.jsx(_p, { size: n, ref: r, borderRadius: "9999px", ...o });
});
YS.displayName = "Circle";
var cV = (e) => e.replace(/[|\\{}()[\]^$+*?.-]/g, (t) => `\\${t}`);
function uV(e) {
  const t = e.filter((r) => r.length !== 0).map((r) => cV(r.trim()));
  return t.length ? new RegExp(`(${t.join("|")})`, "ig") : null;
}
function dV({ text: e, query: t }) {
  const r = uV(Array.isArray(t) ? t : [t]);
  return r ? e.split(r).filter(Boolean).map((o) => ({ text: o, match: r.test(o) })) : [{ text: e, match: !1 }];
}
function XS(e) {
  const { text: t, query: r } = e;
  return we(() => dV({ text: t, query: r }), [t, r]);
}
var ZS = O(function(t, r) {
  const n = Pt("Mark", t), o = Ee(t);
  return /* @__PURE__ */ h.jsx(
    Yl,
    {
      ref: r,
      ...o,
      as: "mark",
      __css: { bg: "transparent", whiteSpace: "nowrap", ...n }
    }
  );
});
function fV(e) {
  const { children: t, query: r, styles: n } = e;
  if (typeof t != "string")
    throw new Error("The children prop of Highlight must be a string");
  const o = XS({ query: r, text: t });
  return /* @__PURE__ */ h.jsx(h.Fragment, { children: o.map((a, i) => a.match ? /* @__PURE__ */ h.jsx(ZS, { sx: n, children: a.text }, i) : /* @__PURE__ */ h.jsx(jg, { children: a.text }, i)) });
}
var pV = O(function(t, r) {
  const {
    offsetX: n,
    offsetY: o,
    offset: a = "0",
    placement: i = "top-end",
    ...s
  } = t, l = we(
    () => ({
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      insetBlockStart: Mr(i, (c) => {
        const [u] = c.split("-");
        return {
          top: o ?? a,
          middle: "50%",
          bottom: "auto"
        }[u];
      }),
      insetBlockEnd: Mr(i, (c) => {
        const [u] = c.split("-");
        return {
          top: "auto",
          middle: "50%",
          bottom: o ?? a
        }[u];
      }),
      insetStart: Mr(i, (c) => {
        const [, u] = c.split("-");
        return {
          start: n ?? a,
          center: "50%",
          end: "auto"
        }[u];
      }),
      insetEnd: Mr(i, (c) => {
        const [, u] = c.split("-");
        return {
          start: "auto",
          center: "50%",
          end: n ?? a
        }[u];
      }),
      translate: Mr(i, (c) => {
        const [u, d] = c.split("-"), f = { start: "-50%", center: "-50%", end: "50%" }, p = { top: "-50%", middle: "-50%", bottom: "50%" };
        return `${f[d]} ${p[u]}`;
      })
    }),
    [a, n, o, i]
  );
  return /* @__PURE__ */ h.jsx(E.div, { ref: r, __css: l, ...s });
}), JS = O(function(t, r) {
  const n = Pt("Kbd", t), { className: o, ...a } = Ee(t);
  return /* @__PURE__ */ h.jsx(
    E.kbd,
    {
      ref: r,
      className: H("chakra-kbd", o),
      ...a,
      __css: {
        fontFamily: "mono",
        ...n
      }
    }
  );
});
JS.displayName = "Kbd";
var hV = O(
  function(t, r) {
    const { isExternal: n, target: o, rel: a, className: i, ...s } = t;
    return /* @__PURE__ */ h.jsx(
      E.a,
      {
        ...s,
        ref: r,
        className: H("chakra-linkbox__overlay", i),
        rel: n ? "noopener noreferrer" : a,
        target: n ? "_blank" : o,
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
), mV = O(function(t, r) {
  const { className: n, ...o } = t;
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      position: "relative",
      ...o,
      className: H("chakra-linkbox", n),
      __css: {
        "a[href]:not(.chakra-linkbox__overlay), abbr[title]": {
          position: "relative",
          zIndex: 1
        }
      }
    }
  );
}), QS = O(function(e, t) {
  const { ratio: r = 4 / 3, children: n, className: o, ...a } = e, i = Hr.only(n), s = H("chakra-aspect-ratio", o);
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: t,
      position: "relative",
      className: s,
      _before: {
        height: 0,
        content: '""',
        display: "block",
        paddingBottom: Mr(r, (l) => `${1 / l * 100}%`)
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
      children: i
    }
  );
});
QS.displayName = "AspectRatio";
var e1 = O(function(t, r) {
  const n = Pt("Badge", t), { className: o, ...a } = Ee(t);
  return /* @__PURE__ */ h.jsx(
    E.span,
    {
      ref: r,
      className: H("chakra-badge", t.className),
      ...a,
      __css: {
        display: "inline-block",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        ...n
      }
    }
  );
});
e1.displayName = "Badge";
var t1 = E("div", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
t1.displayName = "Center";
var vV = {
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
}, gV = O(
  function(t, r) {
    const { axis: n = "both", ...o } = t;
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        __css: vV[n],
        ...o,
        position: "absolute"
      }
    );
  }
), r1 = O(function(t, r) {
  const n = Pt("Code", t), { className: o, ...a } = Ee(t);
  return /* @__PURE__ */ h.jsx(
    E.code,
    {
      ref: r,
      className: H("chakra-code", t.className),
      ...a,
      __css: {
        display: "inline-block",
        ...n
      }
    }
  );
});
r1.displayName = "Code";
var n1 = O(function(t, r) {
  const { className: n, centerContent: o, ...a } = Ee(t), i = Pt("Container", t);
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      className: H("chakra-container", n),
      ...a,
      __css: {
        ...i,
        ...o && {
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }
      }
    }
  );
});
n1.displayName = "Container";
var al = O(function(t, r) {
  const {
    borderLeftWidth: n,
    borderBottomWidth: o,
    borderTopWidth: a,
    borderRightWidth: i,
    borderWidth: s,
    borderStyle: l,
    borderColor: c,
    ...u
  } = Pt("Divider", t), {
    className: d,
    orientation: f = "horizontal",
    __css: p,
    ...v
  } = Ee(t), m = {
    vertical: {
      borderLeftWidth: n || i || s || "1px",
      height: "100%"
    },
    horizontal: {
      borderBottomWidth: o || a || s || "1px",
      width: "100%"
    }
  };
  return /* @__PURE__ */ h.jsx(
    E.hr,
    {
      ref: r,
      "aria-orientation": f,
      ...v,
      __css: {
        ...u,
        border: "0",
        borderColor: c,
        borderStyle: l,
        ...m[f],
        ...p
      },
      className: H("chakra-divider", d)
    }
  );
});
al.displayName = "Divider";
var o1 = O(function(t, r) {
  const { direction: n, align: o, justify: a, wrap: i, basis: s, grow: l, shrink: c, ...u } = t, d = {
    display: "flex",
    flexDirection: n,
    alignItems: o,
    justifyContent: a,
    flexWrap: i,
    flexBasis: s,
    flexGrow: l,
    flexShrink: c
  };
  return /* @__PURE__ */ h.jsx(E.div, { ref: r, __css: d, ...u });
});
o1.displayName = "Flex";
function bi(e, t = {}) {
  const { ssr: r = !0, fallback: n } = t, { getWindow: o } = Ab(), a = Array.isArray(e) ? e : [e];
  let i = Array.isArray(n) ? n : [n];
  i = i.filter((c) => c != null);
  const [s, l] = de(() => a.map((c, u) => ({
    media: c,
    matches: r ? !!i[u] : o().matchMedia(c).matches
  })));
  return ge(() => {
    const c = o();
    l(
      a.map((f) => ({
        media: f,
        matches: c.matchMedia(f).matches
      }))
    );
    const u = a.map((f) => c.matchMedia(f)), d = (f) => {
      l((p) => p.slice().map((v) => v.media === f.media ? { ...v, matches: f.matches } : v));
    };
    return u.forEach((f) => {
      typeof f.addListener == "function" ? f.addListener(d) : f.addEventListener("change", d);
    }), () => {
      u.forEach((f) => {
        typeof f.removeListener == "function" ? f.removeListener(d) : f.removeEventListener("change", d);
      });
    };
  }, [o]), s.map((c) => c.matches);
}
function a1(e) {
  const { breakpoint: t, hide: r, children: n, ssr: o } = e, [a] = bi(t, { ssr: o });
  return (r ? !a : a) ? n : null;
}
var sg = (e, t) => {
  var r, n;
  return (n = (r = e == null ? void 0 : e.breakpoints) == null ? void 0 : r[t]) != null ? n : t;
};
function Cp(e) {
  const { breakpoint: t = "", below: r, above: n } = e, o = sr(), a = sg(o, r), i = sg(o, n);
  let s = t;
  return a ? s = `(max-width: ${a})` : i && (s = `(min-width: ${i})`), s;
}
function i1(e) {
  const { children: t, ssr: r } = e, n = Cp(e);
  return /* @__PURE__ */ h.jsx(a1, { breakpoint: n, hide: !0, ssr: r, children: t });
}
i1.displayName = "Hide";
function yV(e) {
  const [t] = bi(
    "(prefers-reduced-motion: reduce)",
    e
  );
  return t;
}
function bV(e) {
  const [t, r] = bi(
    ["(prefers-color-scheme: light)", "(prefers-color-scheme: dark)"],
    e
  );
  if (t)
    return "light";
  if (r)
    return "dark";
}
function s1(e) {
  const { children: t, ssr: r } = e, n = Cp(e);
  return /* @__PURE__ */ h.jsx(a1, { breakpoint: n, ssr: r, children: t });
}
s1.displayName = "Show";
function xV(e, t, r = HS) {
  let n = Object.keys(e).indexOf(t);
  if (n !== -1)
    return e[t];
  let o = r.indexOf(t);
  for (; o >= 0; ) {
    const a = r[o];
    if (e.hasOwnProperty(a)) {
      n = o;
      break;
    }
    o -= 1;
  }
  if (n !== -1) {
    const a = r[n];
    return e[a];
  }
}
function l1(e) {
  var t, r;
  const n = _t(e) ? e : { fallback: e ?? "base" }, a = sr().__breakpoints.details.map(
    ({ minMaxQuery: c, breakpoint: u }) => ({
      breakpoint: u,
      query: c.replace("@media screen and ", "")
    })
  ), i = a.map((c) => c.breakpoint === n.fallback), l = bi(
    a.map((c) => c.query),
    { fallback: i, ssr: n.ssr }
  ).findIndex((c) => c == !0);
  return (r = (t = a[l]) == null ? void 0 : t.breakpoint) != null ? r : n.fallback;
}
function c1(e, t) {
  var r;
  const n = _t(t) ? t : { fallback: t ?? "base" }, o = l1(n), a = sr();
  if (!o)
    return;
  const i = Array.from(((r = a.__breakpoints) == null ? void 0 : r.keys) || []), s = Array.isArray(e) ? Object.fromEntries(
    Object.entries(oV(e, i)).map(
      ([l, c]) => [l, c]
    )
  ) : e;
  return xV(s, o, i);
}
function SV(e) {
  const { key: t } = e;
  return t.length === 1 || t.length > 1 && /[^a-zA-Z0-9]/.test(t);
}
function wV(e = {}) {
  const { timeout: t = 300, preventDefault: r = () => !0 } = e, [n, o] = de([]), a = ie(), i = () => {
    a.current && (clearTimeout(a.current), a.current = null);
  }, s = () => {
    i(), a.current = setTimeout(() => {
      o([]), a.current = null;
    }, t);
  };
  ge(() => i, []);
  function l(c) {
    return (u) => {
      if (u.key === "Backspace") {
        const d = [...n];
        d.pop(), o(d);
        return;
      }
      if (SV(u)) {
        const d = n.concat(u.key);
        r(u) && (u.preventDefault(), u.stopPropagation()), o(d), c(d.join("")), s();
      }
    };
  }
  return l;
}
function _V(e, t, r, n) {
  if (t == null)
    return n;
  if (!n)
    return e.find(
      (i) => r(i).toLowerCase().startsWith(t.toLowerCase())
    );
  const o = e.filter(
    (a) => r(a).toLowerCase().startsWith(t.toLowerCase())
  );
  if (o.length > 0) {
    let a;
    return o.includes(n) ? (a = o.indexOf(n) + 1, a === o.length && (a = 0), o[a]) : (a = e.indexOf(o[0]), e[a]);
  }
  return n;
}
function CV() {
  const e = ie(/* @__PURE__ */ new Map()), t = e.current, r = I((o, a, i, s) => {
    e.current.set(i, { type: a, el: o, options: s }), o.addEventListener(a, i, s);
  }, []), n = I(
    (o, a, i, s) => {
      o.removeEventListener(a, i, s), e.current.delete(i);
    },
    []
  );
  return ge(
    () => () => {
      t.forEach((o, a) => {
        n(o.el, o.type, a, o.options);
      });
    },
    [n, t]
  ), { add: r, remove: n };
}
function du(e) {
  const t = e.target, { tagName: r, isContentEditable: n } = t;
  return r !== "INPUT" && r !== "TEXTAREA" && n !== !0;
}
function u1(e = {}) {
  const {
    ref: t,
    isDisabled: r,
    isFocusable: n,
    clickOnEnter: o = !0,
    clickOnSpace: a = !0,
    onMouseDown: i,
    onMouseUp: s,
    onClick: l,
    onKeyDown: c,
    onKeyUp: u,
    tabIndex: d,
    onMouseOver: f,
    onMouseLeave: p,
    ...v
  } = e, [m, g] = de(!0), [b, y] = de(!1), x = CV(), _ = (N) => {
    N && N.tagName !== "BUTTON" && g(!1);
  }, w = m ? d : d || 0, P = r && !n, k = I(
    (N) => {
      if (r) {
        N.stopPropagation(), N.preventDefault();
        return;
      }
      N.currentTarget.focus(), l == null || l(N);
    },
    [r, l]
  ), R = I(
    (N) => {
      b && du(N) && (N.preventDefault(), N.stopPropagation(), y(!1), x.remove(document, "keyup", R, !1));
    },
    [b, x]
  ), j = I(
    (N) => {
      if (c == null || c(N), r || N.defaultPrevented || N.metaKey || !du(N.nativeEvent) || m)
        return;
      const q = o && N.key === "Enter";
      a && N.key === " " && (N.preventDefault(), y(!0)), q && (N.preventDefault(), N.currentTarget.click()), x.add(document, "keyup", R, !1);
    },
    [
      r,
      m,
      c,
      o,
      a,
      x,
      R
    ]
  ), $ = I(
    (N) => {
      if (u == null || u(N), r || N.defaultPrevented || N.metaKey || !du(N.nativeEvent) || m)
        return;
      a && N.key === " " && (N.preventDefault(), y(!1), N.currentTarget.click());
    },
    [a, m, r, u]
  ), L = I(
    (N) => {
      N.button === 0 && (y(!1), x.remove(document, "mouseup", L, !1));
    },
    [x]
  ), J = I(
    (N) => {
      if (N.button !== 0)
        return;
      if (r) {
        N.stopPropagation(), N.preventDefault();
        return;
      }
      m || y(!0), N.currentTarget.focus({ preventScroll: !0 }), x.add(document, "mouseup", L, !1), i == null || i(N);
    },
    [r, m, i, x, L]
  ), G = I(
    (N) => {
      N.button === 0 && (m || y(!1), s == null || s(N));
    },
    [s, m]
  ), K = I(
    (N) => {
      if (r) {
        N.preventDefault();
        return;
      }
      f == null || f(N);
    },
    [r, f]
  ), te = I(
    (N) => {
      b && (N.preventDefault(), y(!1)), p == null || p(N);
    },
    [b, p]
  ), Z = je(t, _);
  return m ? {
    ...v,
    ref: Z,
    type: "button",
    "aria-disabled": P ? void 0 : r,
    disabled: P,
    onClick: k,
    onMouseDown: i,
    onMouseUp: s,
    onKeyUp: u,
    onKeyDown: c,
    onMouseOver: f,
    onMouseLeave: p
  } : {
    ...v,
    ref: Z,
    role: "button",
    "data-active": Ae(b),
    "aria-disabled": r ? "true" : void 0,
    tabIndex: P ? void 0 : w,
    onClick: k,
    onMouseDown: J,
    onMouseUp: G,
    onKeyUp: $,
    onKeyDown: j,
    onMouseOver: K,
    onMouseLeave: te
  };
}
function kV(e) {
  const t = e.current;
  if (!t)
    return !1;
  const r = sL(t);
  return !r || t.contains(r) ? !1 : !!pL(r);
}
function d1(e, t) {
  const { shouldFocus: r, visible: n, focusRef: o } = t, a = r && !n;
  kr(() => {
    if (!a || kV(e))
      return;
    const i = (o == null ? void 0 : o.current) || e.current;
    let s;
    if (i)
      return s = requestAnimationFrame(() => {
        i.focus({ preventScroll: !0 });
      }), () => {
        cancelAnimationFrame(s);
      };
  }, [a, e, o]);
}
var PV = {
  preventScroll: !0,
  shouldFocus: !1
};
function EV(e, t = PV) {
  const { focusRef: r, preventScroll: n, shouldFocus: o, visible: a } = t, i = TV(e) ? e.current : e, s = o && a, l = ie(s), c = ie(a);
  rr(() => {
    !c.current && a && (l.current = s), c.current = a;
  }, [a, s]);
  const u = I(() => {
    if (!(!a || !i || !l.current) && (l.current = !1, !i.contains(document.activeElement)))
      if (r != null && r.current)
        requestAnimationFrame(() => {
          var d;
          (d = r.current) == null || d.focus({ preventScroll: n });
        });
      else {
        const d = DS(i);
        d.length > 0 && requestAnimationFrame(() => {
          d[0].focus({ preventScroll: n });
        });
      }
  }, [a, n, i, r]);
  kr(() => {
    u();
  }, [u]), qn(i, "transitionend", u);
}
function TV(e) {
  return "current" in e;
}
var uo = (e, t) => ({
  var: e,
  varRef: t ? `var(${e}, ${t})` : `var(${e})`
}), St = {
  arrowShadowColor: uo("--popper-arrow-shadow-color"),
  arrowSize: uo("--popper-arrow-size", "8px"),
  arrowSizeHalf: uo("--popper-arrow-size-half"),
  arrowBg: uo("--popper-arrow-bg"),
  transformOrigin: uo("--popper-transform-origin"),
  arrowOffset: uo("--popper-arrow-offset")
};
function AV(e) {
  if (e.includes("top"))
    return "1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("bottom"))
    return "-1px -1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("right"))
    return "-1px 1px 0px 0 var(--popper-arrow-shadow-color)";
  if (e.includes("left"))
    return "1px -1px 0px 0 var(--popper-arrow-shadow-color)";
}
var IV = {
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
}, RV = (e) => IV[e], lg = {
  scroll: !0,
  resize: !0
};
function $V(e) {
  let t;
  return typeof e == "object" ? t = {
    enabled: !0,
    options: { ...lg, ...e }
  } : t = {
    enabled: e,
    options: lg
  }, t;
}
var NV = {
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
}, OV = {
  name: "transformOrigin",
  enabled: !0,
  phase: "write",
  fn: ({ state: e }) => {
    cg(e);
  },
  effect: ({ state: e }) => () => {
    cg(e);
  }
}, cg = (e) => {
  e.elements.popper.style.setProperty(
    St.transformOrigin.var,
    RV(e.placement)
  );
}, DV = {
  name: "positionArrow",
  enabled: !0,
  phase: "afterWrite",
  fn: ({ state: e }) => {
    jV(e);
  }
}, jV = (e) => {
  var t;
  if (!e.placement)
    return;
  const r = MV(e.placement);
  if ((t = e.elements) != null && t.arrow && r) {
    Object.assign(e.elements.arrow.style, {
      [r.property]: r.value,
      width: St.arrowSize.varRef,
      height: St.arrowSize.varRef,
      zIndex: -1
    });
    const n = {
      [St.arrowSizeHalf.var]: `calc(${St.arrowSize.varRef} / 2 - 1px)`,
      [St.arrowOffset.var]: `calc(${St.arrowSizeHalf.varRef} * -1)`
    };
    for (const o in n)
      e.elements.arrow.style.setProperty(o, n[o]);
  }
}, MV = (e) => {
  if (e.startsWith("top"))
    return { property: "bottom", value: St.arrowOffset.varRef };
  if (e.startsWith("bottom"))
    return { property: "top", value: St.arrowOffset.varRef };
  if (e.startsWith("left"))
    return { property: "right", value: St.arrowOffset.varRef };
  if (e.startsWith("right"))
    return { property: "left", value: St.arrowOffset.varRef };
}, FV = {
  name: "innerArrow",
  enabled: !0,
  phase: "main",
  requires: ["arrow"],
  fn: ({ state: e }) => {
    ug(e);
  },
  effect: ({ state: e }) => () => {
    ug(e);
  }
}, ug = (e) => {
  if (!e.elements.arrow)
    return;
  const t = e.elements.arrow.querySelector(
    "[data-popper-arrow-inner]"
  );
  if (!t)
    return;
  const r = AV(e.placement);
  r && t.style.setProperty("--popper-arrow-default-shadow", r), Object.assign(t.style, {
    transform: "rotate(45deg)",
    background: St.arrowBg.varRef,
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: "inherit",
    boxShadow: "var(--popper-arrow-shadow, var(--popper-arrow-default-shadow))"
  });
}, BV = {
  "start-start": { ltr: "left-start", rtl: "right-start" },
  "start-end": { ltr: "left-end", rtl: "right-end" },
  "end-start": { ltr: "right-start", rtl: "left-start" },
  "end-end": { ltr: "right-end", rtl: "left-end" },
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
}, LV = {
  "auto-start": "auto-end",
  "auto-end": "auto-start",
  "top-start": "top-end",
  "top-end": "top-start",
  "bottom-start": "bottom-end",
  "bottom-end": "bottom-start"
};
function VV(e, t = "ltr") {
  var r, n;
  const o = ((r = BV[e]) == null ? void 0 : r[t]) || e;
  return t === "ltr" ? o : (n = LV[e]) != null ? n : o;
}
var qt = "top", vr = "bottom", gr = "right", Kt = "left", kp = "auto", xi = [qt, vr, gr, Kt], Go = "start", Za = "end", zV = "clippingParents", f1 = "viewport", fa = "popper", WV = "reference", dg = /* @__PURE__ */ xi.reduce(function(e, t) {
  return e.concat([t + "-" + Go, t + "-" + Za]);
}, []), p1 = /* @__PURE__ */ [].concat(xi, [kp]).reduce(function(e, t) {
  return e.concat([t, t + "-" + Go, t + "-" + Za]);
}, []), HV = "beforeRead", UV = "read", GV = "afterRead", qV = "beforeMain", KV = "main", YV = "afterMain", XV = "beforeWrite", ZV = "write", JV = "afterWrite", QV = [HV, UV, GV, qV, KV, YV, XV, ZV, JV];
function zr(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ir(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function Zn(e) {
  var t = ir(e).Element;
  return e instanceof t || e instanceof Element;
}
function mr(e) {
  var t = ir(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Pp(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = ir(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ez(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(r) {
    var n = t.styles[r] || {}, o = t.attributes[r] || {}, a = t.elements[r];
    !mr(a) || !zr(a) || (Object.assign(a.style, n), Object.keys(o).forEach(function(i) {
      var s = o[i];
      s === !1 ? a.removeAttribute(i) : a.setAttribute(i, s === !0 ? "" : s);
    }));
  });
}
function tz(e) {
  var t = e.state, r = {
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
  return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow), function() {
    Object.keys(t.elements).forEach(function(n) {
      var o = t.elements[n], a = t.attributes[n] || {}, i = Object.keys(t.styles.hasOwnProperty(n) ? t.styles[n] : r[n]), s = i.reduce(function(l, c) {
        return l[c] = "", l;
      }, {});
      !mr(o) || !zr(o) || (Object.assign(o.style, s), Object.keys(a).forEach(function(l) {
        o.removeAttribute(l);
      }));
    });
  };
}
const rz = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ez,
  effect: tz,
  requires: ["computeStyles"]
};
function Vr(e) {
  return e.split("-")[0];
}
var Kn = Math.max, il = Math.min, qo = Math.round;
function ld() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function h1() {
  return !/^((?!chrome|android).)*safari/i.test(ld());
}
function Ko(e, t, r) {
  t === void 0 && (t = !1), r === void 0 && (r = !1);
  var n = e.getBoundingClientRect(), o = 1, a = 1;
  t && mr(e) && (o = e.offsetWidth > 0 && qo(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && qo(n.height) / e.offsetHeight || 1);
  var i = Zn(e) ? ir(e) : window, s = i.visualViewport, l = !h1() && r, c = (n.left + (l && s ? s.offsetLeft : 0)) / o, u = (n.top + (l && s ? s.offsetTop : 0)) / a, d = n.width / o, f = n.height / a;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u
  };
}
function Ep(e) {
  var t = Ko(e), r = e.offsetWidth, n = e.offsetHeight;
  return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: r,
    height: n
  };
}
function m1(e, t) {
  var r = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (r && Pp(r)) {
    var n = t;
    do {
      if (n && e.isSameNode(n))
        return !0;
      n = n.parentNode || n.host;
    } while (n);
  }
  return !1;
}
function on(e) {
  return ir(e).getComputedStyle(e);
}
function nz(e) {
  return ["table", "td", "th"].indexOf(zr(e)) >= 0;
}
function Rn(e) {
  return ((Zn(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function Xl(e) {
  return zr(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (Pp(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Rn(e)
  );
}
function fg(e) {
  return !mr(e) || // https://github.com/popperjs/popper-core/issues/837
  on(e).position === "fixed" ? null : e.offsetParent;
}
function oz(e) {
  var t = /firefox/i.test(ld()), r = /Trident/i.test(ld());
  if (r && mr(e)) {
    var n = on(e);
    if (n.position === "fixed")
      return null;
  }
  var o = Xl(e);
  for (Pp(o) && (o = o.host); mr(o) && ["html", "body"].indexOf(zr(o)) < 0; ) {
    var a = on(o);
    if (a.transform !== "none" || a.perspective !== "none" || a.contain === "paint" || ["transform", "perspective"].indexOf(a.willChange) !== -1 || t && a.willChange === "filter" || t && a.filter && a.filter !== "none")
      return o;
    o = o.parentNode;
  }
  return null;
}
function Si(e) {
  for (var t = ir(e), r = fg(e); r && nz(r) && on(r).position === "static"; )
    r = fg(r);
  return r && (zr(r) === "html" || zr(r) === "body" && on(r).position === "static") ? t : r || oz(e) || t;
}
function Tp(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function Ra(e, t, r) {
  return Kn(e, il(t, r));
}
function az(e, t, r) {
  var n = Ra(e, t, r);
  return n > r ? r : n;
}
function v1() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function g1(e) {
  return Object.assign({}, v1(), e);
}
function y1(e, t) {
  return t.reduce(function(r, n) {
    return r[n] = e, r;
  }, {});
}
var iz = function(t, r) {
  return t = typeof t == "function" ? t(Object.assign({}, r.rects, {
    placement: r.placement
  })) : t, g1(typeof t != "number" ? t : y1(t, xi));
};
function sz(e) {
  var t, r = e.state, n = e.name, o = e.options, a = r.elements.arrow, i = r.modifiersData.popperOffsets, s = Vr(r.placement), l = Tp(s), c = [Kt, gr].indexOf(s) >= 0, u = c ? "height" : "width";
  if (!(!a || !i)) {
    var d = iz(o.padding, r), f = Ep(a), p = l === "y" ? qt : Kt, v = l === "y" ? vr : gr, m = r.rects.reference[u] + r.rects.reference[l] - i[l] - r.rects.popper[u], g = i[l] - r.rects.reference[l], b = Si(a), y = b ? l === "y" ? b.clientHeight || 0 : b.clientWidth || 0 : 0, x = m / 2 - g / 2, _ = d[p], w = y - f[u] - d[v], P = y / 2 - f[u] / 2 + x, k = Ra(_, P, w), R = l;
    r.modifiersData[n] = (t = {}, t[R] = k, t.centerOffset = k - P, t);
  }
}
function lz(e) {
  var t = e.state, r = e.options, n = r.element, o = n === void 0 ? "[data-popper-arrow]" : n;
  o != null && (typeof o == "string" && (o = t.elements.popper.querySelector(o), !o) || m1(t.elements.popper, o) && (t.elements.arrow = o));
}
const cz = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: sz,
  effect: lz,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Yo(e) {
  return e.split("-")[1];
}
var uz = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function dz(e, t) {
  var r = e.x, n = e.y, o = t.devicePixelRatio || 1;
  return {
    x: qo(r * o) / o || 0,
    y: qo(n * o) / o || 0
  };
}
function pg(e) {
  var t, r = e.popper, n = e.popperRect, o = e.placement, a = e.variation, i = e.offsets, s = e.position, l = e.gpuAcceleration, c = e.adaptive, u = e.roundOffsets, d = e.isFixed, f = i.x, p = f === void 0 ? 0 : f, v = i.y, m = v === void 0 ? 0 : v, g = typeof u == "function" ? u({
    x: p,
    y: m
  }) : {
    x: p,
    y: m
  };
  p = g.x, m = g.y;
  var b = i.hasOwnProperty("x"), y = i.hasOwnProperty("y"), x = Kt, _ = qt, w = window;
  if (c) {
    var P = Si(r), k = "clientHeight", R = "clientWidth";
    if (P === ir(r) && (P = Rn(r), on(P).position !== "static" && s === "absolute" && (k = "scrollHeight", R = "scrollWidth")), P = P, o === qt || (o === Kt || o === gr) && a === Za) {
      _ = vr;
      var j = d && P === w && w.visualViewport ? w.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        P[k]
      );
      m -= j - n.height, m *= l ? 1 : -1;
    }
    if (o === Kt || (o === qt || o === vr) && a === Za) {
      x = gr;
      var $ = d && P === w && w.visualViewport ? w.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        P[R]
      );
      p -= $ - n.width, p *= l ? 1 : -1;
    }
  }
  var L = Object.assign({
    position: s
  }, c && uz), J = u === !0 ? dz({
    x: p,
    y: m
  }, ir(r)) : {
    x: p,
    y: m
  };
  if (p = J.x, m = J.y, l) {
    var G;
    return Object.assign({}, L, (G = {}, G[_] = y ? "0" : "", G[x] = b ? "0" : "", G.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", G));
  }
  return Object.assign({}, L, (t = {}, t[_] = y ? m + "px" : "", t[x] = b ? p + "px" : "", t.transform = "", t));
}
function fz(e) {
  var t = e.state, r = e.options, n = r.gpuAcceleration, o = n === void 0 ? !0 : n, a = r.adaptive, i = a === void 0 ? !0 : a, s = r.roundOffsets, l = s === void 0 ? !0 : s, c = {
    placement: Vr(t.placement),
    variation: Yo(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: o,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, pg(Object.assign({}, c, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: i,
    roundOffsets: l
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, pg(Object.assign({}, c, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: l
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const pz = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: fz,
  data: {}
};
var Ji = {
  passive: !0
};
function hz(e) {
  var t = e.state, r = e.instance, n = e.options, o = n.scroll, a = o === void 0 ? !0 : o, i = n.resize, s = i === void 0 ? !0 : i, l = ir(t.elements.popper), c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return a && c.forEach(function(u) {
    u.addEventListener("scroll", r.update, Ji);
  }), s && l.addEventListener("resize", r.update, Ji), function() {
    a && c.forEach(function(u) {
      u.removeEventListener("scroll", r.update, Ji);
    }), s && l.removeEventListener("resize", r.update, Ji);
  };
}
const mz = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: hz,
  data: {}
};
var vz = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function bs(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return vz[t];
  });
}
var gz = {
  start: "end",
  end: "start"
};
function hg(e) {
  return e.replace(/start|end/g, function(t) {
    return gz[t];
  });
}
function Ap(e) {
  var t = ir(e), r = t.pageXOffset, n = t.pageYOffset;
  return {
    scrollLeft: r,
    scrollTop: n
  };
}
function Ip(e) {
  return Ko(Rn(e)).left + Ap(e).scrollLeft;
}
function yz(e, t) {
  var r = ir(e), n = Rn(e), o = r.visualViewport, a = n.clientWidth, i = n.clientHeight, s = 0, l = 0;
  if (o) {
    a = o.width, i = o.height;
    var c = h1();
    (c || !c && t === "fixed") && (s = o.offsetLeft, l = o.offsetTop);
  }
  return {
    width: a,
    height: i,
    x: s + Ip(e),
    y: l
  };
}
function bz(e) {
  var t, r = Rn(e), n = Ap(e), o = (t = e.ownerDocument) == null ? void 0 : t.body, a = Kn(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0), i = Kn(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0), s = -n.scrollLeft + Ip(e), l = -n.scrollTop;
  return on(o || r).direction === "rtl" && (s += Kn(r.clientWidth, o ? o.clientWidth : 0) - a), {
    width: a,
    height: i,
    x: s,
    y: l
  };
}
function Rp(e) {
  var t = on(e), r = t.overflow, n = t.overflowX, o = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(r + o + n);
}
function b1(e) {
  return ["html", "body", "#document"].indexOf(zr(e)) >= 0 ? e.ownerDocument.body : mr(e) && Rp(e) ? e : b1(Xl(e));
}
function $a(e, t) {
  var r;
  t === void 0 && (t = []);
  var n = b1(e), o = n === ((r = e.ownerDocument) == null ? void 0 : r.body), a = ir(n), i = o ? [a].concat(a.visualViewport || [], Rp(n) ? n : []) : n, s = t.concat(i);
  return o ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat($a(Xl(i)))
  );
}
function cd(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function xz(e, t) {
  var r = Ko(e, !1, t === "fixed");
  return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r;
}
function mg(e, t, r) {
  return t === f1 ? cd(yz(e, r)) : Zn(t) ? xz(t, r) : cd(bz(Rn(e)));
}
function Sz(e) {
  var t = $a(Xl(e)), r = ["absolute", "fixed"].indexOf(on(e).position) >= 0, n = r && mr(e) ? Si(e) : e;
  return Zn(n) ? t.filter(function(o) {
    return Zn(o) && m1(o, n) && zr(o) !== "body";
  }) : [];
}
function wz(e, t, r, n) {
  var o = t === "clippingParents" ? Sz(e) : [].concat(t), a = [].concat(o, [r]), i = a[0], s = a.reduce(function(l, c) {
    var u = mg(e, c, n);
    return l.top = Kn(u.top, l.top), l.right = il(u.right, l.right), l.bottom = il(u.bottom, l.bottom), l.left = Kn(u.left, l.left), l;
  }, mg(e, i, n));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function x1(e) {
  var t = e.reference, r = e.element, n = e.placement, o = n ? Vr(n) : null, a = n ? Yo(n) : null, i = t.x + t.width / 2 - r.width / 2, s = t.y + t.height / 2 - r.height / 2, l;
  switch (o) {
    case qt:
      l = {
        x: i,
        y: t.y - r.height
      };
      break;
    case vr:
      l = {
        x: i,
        y: t.y + t.height
      };
      break;
    case gr:
      l = {
        x: t.x + t.width,
        y: s
      };
      break;
    case Kt:
      l = {
        x: t.x - r.width,
        y: s
      };
      break;
    default:
      l = {
        x: t.x,
        y: t.y
      };
  }
  var c = o ? Tp(o) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (a) {
      case Go:
        l[c] = l[c] - (t[u] / 2 - r[u] / 2);
        break;
      case Za:
        l[c] = l[c] + (t[u] / 2 - r[u] / 2);
        break;
    }
  }
  return l;
}
function Ja(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = n === void 0 ? e.placement : n, a = r.strategy, i = a === void 0 ? e.strategy : a, s = r.boundary, l = s === void 0 ? zV : s, c = r.rootBoundary, u = c === void 0 ? f1 : c, d = r.elementContext, f = d === void 0 ? fa : d, p = r.altBoundary, v = p === void 0 ? !1 : p, m = r.padding, g = m === void 0 ? 0 : m, b = g1(typeof g != "number" ? g : y1(g, xi)), y = f === fa ? WV : fa, x = e.rects.popper, _ = e.elements[v ? y : f], w = wz(Zn(_) ? _ : _.contextElement || Rn(e.elements.popper), l, u, i), P = Ko(e.elements.reference), k = x1({
    reference: P,
    element: x,
    strategy: "absolute",
    placement: o
  }), R = cd(Object.assign({}, x, k)), j = f === fa ? R : P, $ = {
    top: w.top - j.top + b.top,
    bottom: j.bottom - w.bottom + b.bottom,
    left: w.left - j.left + b.left,
    right: j.right - w.right + b.right
  }, L = e.modifiersData.offset;
  if (f === fa && L) {
    var J = L[o];
    Object.keys($).forEach(function(G) {
      var K = [gr, vr].indexOf(G) >= 0 ? 1 : -1, te = [qt, vr].indexOf(G) >= 0 ? "y" : "x";
      $[G] += J[te] * K;
    });
  }
  return $;
}
function _z(e, t) {
  t === void 0 && (t = {});
  var r = t, n = r.placement, o = r.boundary, a = r.rootBoundary, i = r.padding, s = r.flipVariations, l = r.allowedAutoPlacements, c = l === void 0 ? p1 : l, u = Yo(n), d = u ? s ? dg : dg.filter(function(v) {
    return Yo(v) === u;
  }) : xi, f = d.filter(function(v) {
    return c.indexOf(v) >= 0;
  });
  f.length === 0 && (f = d);
  var p = f.reduce(function(v, m) {
    return v[m] = Ja(e, {
      placement: m,
      boundary: o,
      rootBoundary: a,
      padding: i
    })[Vr(m)], v;
  }, {});
  return Object.keys(p).sort(function(v, m) {
    return p[v] - p[m];
  });
}
function Cz(e) {
  if (Vr(e) === kp)
    return [];
  var t = bs(e);
  return [hg(e), t, hg(t)];
}
function kz(e) {
  var t = e.state, r = e.options, n = e.name;
  if (!t.modifiersData[n]._skip) {
    for (var o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !0 : i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, v = p === void 0 ? !0 : p, m = r.allowedAutoPlacements, g = t.options.placement, b = Vr(g), y = b === g, x = l || (y || !v ? [bs(g)] : Cz(g)), _ = [g].concat(x).reduce(function(z, U) {
      return z.concat(Vr(U) === kp ? _z(t, {
        placement: U,
        boundary: u,
        rootBoundary: d,
        padding: c,
        flipVariations: v,
        allowedAutoPlacements: m
      }) : U);
    }, []), w = t.rects.reference, P = t.rects.popper, k = /* @__PURE__ */ new Map(), R = !0, j = _[0], $ = 0; $ < _.length; $++) {
      var L = _[$], J = Vr(L), G = Yo(L) === Go, K = [qt, vr].indexOf(J) >= 0, te = K ? "width" : "height", Z = Ja(t, {
        placement: L,
        boundary: u,
        rootBoundary: d,
        altBoundary: f,
        padding: c
      }), N = K ? G ? gr : Kt : G ? vr : qt;
      w[te] > P[te] && (N = bs(N));
      var q = bs(N), he = [];
      if (a && he.push(Z[J] <= 0), s && he.push(Z[N] <= 0, Z[q] <= 0), he.every(function(z) {
        return z;
      })) {
        j = L, R = !1;
        break;
      }
      k.set(L, he);
    }
    if (R)
      for (var D = v ? 3 : 1, M = function(U) {
        var oe = _.find(function(ce) {
          var se = k.get(ce);
          if (se)
            return se.slice(0, U).every(function(W) {
              return W;
            });
        });
        if (oe)
          return j = oe, "break";
      }, re = D; re > 0; re--) {
        var V = M(re);
        if (V === "break")
          break;
      }
    t.placement !== j && (t.modifiersData[n]._skip = !0, t.placement = j, t.reset = !0);
  }
}
const Pz = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: kz,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function vg(e, t, r) {
  return r === void 0 && (r = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - r.y,
    right: e.right - t.width + r.x,
    bottom: e.bottom - t.height + r.y,
    left: e.left - t.width - r.x
  };
}
function gg(e) {
  return [qt, gr, vr, Kt].some(function(t) {
    return e[t] >= 0;
  });
}
function Ez(e) {
  var t = e.state, r = e.name, n = t.rects.reference, o = t.rects.popper, a = t.modifiersData.preventOverflow, i = Ja(t, {
    elementContext: "reference"
  }), s = Ja(t, {
    altBoundary: !0
  }), l = vg(i, n), c = vg(s, o, a), u = gg(l), d = gg(c);
  t.modifiersData[r] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": d
  });
}
const Tz = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Ez
};
function Az(e, t, r) {
  var n = Vr(e), o = [Kt, qt].indexOf(n) >= 0 ? -1 : 1, a = typeof r == "function" ? r(Object.assign({}, t, {
    placement: e
  })) : r, i = a[0], s = a[1];
  return i = i || 0, s = (s || 0) * o, [Kt, gr].indexOf(n) >= 0 ? {
    x: s,
    y: i
  } : {
    x: i,
    y: s
  };
}
function Iz(e) {
  var t = e.state, r = e.options, n = e.name, o = r.offset, a = o === void 0 ? [0, 0] : o, i = p1.reduce(function(u, d) {
    return u[d] = Az(d, t.rects, a), u;
  }, {}), s = i[t.placement], l = s.x, c = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i;
}
const Rz = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Iz
};
function $z(e) {
  var t = e.state, r = e.name;
  t.modifiersData[r] = x1({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Nz = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: $z,
  data: {}
};
function Oz(e) {
  return e === "x" ? "y" : "x";
}
function Dz(e) {
  var t = e.state, r = e.options, n = e.name, o = r.mainAxis, a = o === void 0 ? !0 : o, i = r.altAxis, s = i === void 0 ? !1 : i, l = r.boundary, c = r.rootBoundary, u = r.altBoundary, d = r.padding, f = r.tether, p = f === void 0 ? !0 : f, v = r.tetherOffset, m = v === void 0 ? 0 : v, g = Ja(t, {
    boundary: l,
    rootBoundary: c,
    padding: d,
    altBoundary: u
  }), b = Vr(t.placement), y = Yo(t.placement), x = !y, _ = Tp(b), w = Oz(_), P = t.modifiersData.popperOffsets, k = t.rects.reference, R = t.rects.popper, j = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, $ = typeof j == "number" ? {
    mainAxis: j,
    altAxis: j
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, j), L = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, J = {
    x: 0,
    y: 0
  };
  if (P) {
    if (a) {
      var G, K = _ === "y" ? qt : Kt, te = _ === "y" ? vr : gr, Z = _ === "y" ? "height" : "width", N = P[_], q = N + g[K], he = N - g[te], D = p ? -R[Z] / 2 : 0, M = y === Go ? k[Z] : R[Z], re = y === Go ? -R[Z] : -k[Z], V = t.elements.arrow, z = p && V ? Ep(V) : {
        width: 0,
        height: 0
      }, U = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : v1(), oe = U[K], ce = U[te], se = Ra(0, k[Z], z[Z]), W = x ? k[Z] / 2 - D - se - oe - $.mainAxis : M - se - oe - $.mainAxis, Y = x ? -k[Z] / 2 + D + se + ce + $.mainAxis : re + se + ce + $.mainAxis, ne = t.elements.arrow && Si(t.elements.arrow), B = ne ? _ === "y" ? ne.clientTop || 0 : ne.clientLeft || 0 : 0, Ce = (G = L == null ? void 0 : L[_]) != null ? G : 0, ee = N + W - Ce - B, ve = N + Y - Ce, Ne = Ra(p ? il(q, ee) : q, N, p ? Kn(he, ve) : he);
      P[_] = Ne, J[_] = Ne - N;
    }
    if (s) {
      var $e, Oe = _ === "x" ? qt : Kt, vt = _ === "x" ? vr : gr, Qe = P[w], xt = w === "y" ? "height" : "width", ct = Qe + g[Oe], ut = Qe - g[vt], $t = [qt, Kt].indexOf(b) !== -1, zt = ($e = L == null ? void 0 : L[w]) != null ? $e : 0, Zt = $t ? ct : Qe - k[xt] - R[xt] - zt + $.altAxis, Mt = $t ? Qe + k[xt] + R[xt] - zt - $.altAxis : ut, ae = p && $t ? az(Zt, Qe, Mt) : Ra(p ? Zt : ct, Qe, p ? Mt : ut);
      P[w] = ae, J[w] = ae - Qe;
    }
    t.modifiersData[n] = J;
  }
}
const jz = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: Dz,
  requiresIfExists: ["offset"]
};
function Mz(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fz(e) {
  return e === ir(e) || !mr(e) ? Ap(e) : Mz(e);
}
function Bz(e) {
  var t = e.getBoundingClientRect(), r = qo(t.width) / e.offsetWidth || 1, n = qo(t.height) / e.offsetHeight || 1;
  return r !== 1 || n !== 1;
}
function Lz(e, t, r) {
  r === void 0 && (r = !1);
  var n = mr(t), o = mr(t) && Bz(t), a = Rn(t), i = Ko(e, o, r), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, l = {
    x: 0,
    y: 0
  };
  return (n || !n && !r) && ((zr(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  Rp(a)) && (s = Fz(t)), mr(t) ? (l = Ko(t, !0), l.x += t.clientLeft, l.y += t.clientTop) : a && (l.x = Ip(a))), {
    x: i.left + s.scrollLeft - l.x,
    y: i.top + s.scrollTop - l.y,
    width: i.width,
    height: i.height
  };
}
function Vz(e) {
  var t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Set(), n = [];
  e.forEach(function(a) {
    t.set(a.name, a);
  });
  function o(a) {
    r.add(a.name);
    var i = [].concat(a.requires || [], a.requiresIfExists || []);
    i.forEach(function(s) {
      if (!r.has(s)) {
        var l = t.get(s);
        l && o(l);
      }
    }), n.push(a);
  }
  return e.forEach(function(a) {
    r.has(a.name) || o(a);
  }), n;
}
function zz(e) {
  var t = Vz(e);
  return QV.reduce(function(r, n) {
    return r.concat(t.filter(function(o) {
      return o.phase === n;
    }));
  }, []);
}
function Wz(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(r) {
      Promise.resolve().then(function() {
        t = void 0, r(e());
      });
    })), t;
  };
}
function Hz(e) {
  var t = e.reduce(function(r, n) {
    var o = r[n.name];
    return r[n.name] = o ? Object.assign({}, o, n, {
      options: Object.assign({}, o.options, n.options),
      data: Object.assign({}, o.data, n.data)
    }) : n, r;
  }, {});
  return Object.keys(t).map(function(r) {
    return t[r];
  });
}
var yg = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function bg() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return !t.some(function(n) {
    return !(n && typeof n.getBoundingClientRect == "function");
  });
}
function Uz(e) {
  e === void 0 && (e = {});
  var t = e, r = t.defaultModifiers, n = r === void 0 ? [] : r, o = t.defaultOptions, a = o === void 0 ? yg : o;
  return function(s, l, c) {
    c === void 0 && (c = a);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, yg, a),
      modifiersData: {},
      elements: {
        reference: s,
        popper: l
      },
      attributes: {},
      styles: {}
    }, d = [], f = !1, p = {
      state: u,
      setOptions: function(b) {
        var y = typeof b == "function" ? b(u.options) : b;
        m(), u.options = Object.assign({}, a, u.options, y), u.scrollParents = {
          reference: Zn(s) ? $a(s) : s.contextElement ? $a(s.contextElement) : [],
          popper: $a(l)
        };
        var x = zz(Hz([].concat(n, u.options.modifiers)));
        return u.orderedModifiers = x.filter(function(_) {
          return _.enabled;
        }), v(), p.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!f) {
          var b = u.elements, y = b.reference, x = b.popper;
          if (bg(y, x)) {
            u.rects = {
              reference: Lz(y, Si(x), u.options.strategy === "fixed"),
              popper: Ep(x)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
              return u.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var _ = 0; _ < u.orderedModifiers.length; _++) {
              if (u.reset === !0) {
                u.reset = !1, _ = -1;
                continue;
              }
              var w = u.orderedModifiers[_], P = w.fn, k = w.options, R = k === void 0 ? {} : k, j = w.name;
              typeof P == "function" && (u = P({
                state: u,
                options: R,
                name: j,
                instance: p
              }) || u);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: Wz(function() {
        return new Promise(function(g) {
          p.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        m(), f = !0;
      }
    };
    if (!bg(s, l))
      return p;
    p.setOptions(c).then(function(g) {
      !f && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function v() {
      u.orderedModifiers.forEach(function(g) {
        var b = g.name, y = g.options, x = y === void 0 ? {} : y, _ = g.effect;
        if (typeof _ == "function") {
          var w = _({
            state: u,
            name: b,
            instance: p,
            options: x
          }), P = function() {
          };
          d.push(w || P);
        }
      });
    }
    function m() {
      d.forEach(function(g) {
        return g();
      }), d = [];
    }
    return p;
  };
}
var Gz = [mz, Nz, pz, rz, Rz, Pz, jz, cz, Tz], qz = /* @__PURE__ */ Uz({
  defaultModifiers: Gz
});
function Zl(e = {}) {
  const {
    enabled: t = !0,
    modifiers: r,
    placement: n = "bottom",
    strategy: o = "absolute",
    arrowPadding: a = 8,
    eventListeners: i = !0,
    offset: s,
    gutter: l = 8,
    flip: c = !0,
    boundary: u = "clippingParents",
    preventOverflow: d = !0,
    matchWidth: f,
    direction: p = "ltr"
  } = e, v = ie(null), m = ie(null), g = ie(null), b = VV(n, p), y = ie(() => {
  }), x = I(() => {
    var $;
    !t || !v.current || !m.current || (($ = y.current) == null || $.call(y), g.current = qz(v.current, m.current, {
      placement: b,
      modifiers: [
        FV,
        DV,
        OV,
        {
          ...NV,
          enabled: !!f
        },
        {
          name: "eventListeners",
          ...$V(i)
        },
        {
          name: "arrow",
          options: { padding: a }
        },
        {
          name: "offset",
          options: {
            offset: s ?? [0, l]
          }
        },
        {
          name: "flip",
          enabled: !!c,
          options: { padding: 8 }
        },
        {
          name: "preventOverflow",
          enabled: !!d,
          options: { boundary: u }
        },
        ...r ?? []
      ],
      strategy: o
    }), g.current.forceUpdate(), y.current = g.current.destroy);
  }, [
    b,
    t,
    r,
    f,
    i,
    a,
    s,
    l,
    c,
    d,
    u,
    o
  ]);
  ge(() => () => {
    var $;
    !v.current && !m.current && (($ = g.current) == null || $.destroy(), g.current = null);
  }, []);
  const _ = I(
    ($) => {
      v.current = $, x();
    },
    [x]
  ), w = I(
    ($ = {}, L = null) => ({
      ...$,
      ref: je(_, L)
    }),
    [_]
  ), P = I(
    ($) => {
      m.current = $, x();
    },
    [x]
  ), k = I(
    ($ = {}, L = null) => ({
      ...$,
      ref: je(P, L),
      style: {
        ...$.style,
        position: o,
        minWidth: f ? void 0 : "max-content",
        inset: "0 auto auto 0"
      }
    }),
    [o, P, f]
  ), R = I(($ = {}, L = null) => {
    const { size: J, shadowColor: G, bg: K, style: te, ...Z } = $;
    return {
      ...Z,
      ref: L,
      "data-popper-arrow": "",
      style: Kz($)
    };
  }, []), j = I(
    ($ = {}, L = null) => ({
      ...$,
      ref: L,
      "data-popper-arrow-inner": ""
    }),
    []
  );
  return {
    update() {
      var $;
      ($ = g.current) == null || $.update();
    },
    forceUpdate() {
      var $;
      ($ = g.current) == null || $.forceUpdate();
    },
    transformOrigin: St.transformOrigin.varRef,
    referenceRef: _,
    popperRef: P,
    getPopperProps: k,
    getArrowProps: R,
    getArrowInnerProps: j,
    getReferenceProps: w
  };
}
function Kz(e) {
  const { size: t, shadowColor: r, bg: n, style: o } = e, a = { ...o, position: "absolute" };
  return t && (a["--popper-arrow-size"] = t), r && (a["--popper-arrow-shadow-color"] = r), n && (a["--popper-arrow-bg"] = n), a;
}
function $p(e = {}) {
  const {
    onClose: t,
    onOpen: r,
    isOpen: n,
    id: o
  } = e, a = ot(r), i = ot(t), [s, l] = de(e.defaultIsOpen || !1), c = n !== void 0 ? n : s, u = n !== void 0, d = It(), f = o ?? `disclosure-${d}`, p = I(() => {
    u || l(!1), i == null || i();
  }, [u, i]), v = I(() => {
    u || l(!0), a == null || a();
  }, [u, a]), m = I(() => {
    c ? p() : v();
  }, [c, v, p]);
  function g(y = {}) {
    return {
      ...y,
      "aria-expanded": c,
      "aria-controls": f,
      onClick(x) {
        var _;
        (_ = y.onClick) == null || _.call(y, x), m();
      }
    };
  }
  function b(y = {}) {
    return {
      ...y,
      hidden: !c,
      id: f
    };
  }
  return {
    isOpen: c,
    onOpen: v,
    onClose: p,
    onToggle: m,
    isControlled: u,
    getButtonProps: g,
    getDisclosureProps: b
  };
}
function Yz(e) {
  const { ref: t, handler: r, enabled: n = !0 } = e, o = ot(r), i = ie({
    isPointerDown: !1,
    ignoreEmulatedMouseEvents: !1
  }).current;
  ge(() => {
    if (!n)
      return;
    const s = (d) => {
      fu(d, t) && (i.isPointerDown = !0);
    }, l = (d) => {
      if (i.ignoreEmulatedMouseEvents) {
        i.ignoreEmulatedMouseEvents = !1;
        return;
      }
      i.isPointerDown && r && fu(d, t) && (i.isPointerDown = !1, o(d));
    }, c = (d) => {
      i.ignoreEmulatedMouseEvents = !0, r && i.isPointerDown && fu(d, t) && (i.isPointerDown = !1, o(d));
    }, u = S1(t.current);
    return u.addEventListener("mousedown", s, !0), u.addEventListener("mouseup", l, !0), u.addEventListener("touchstart", s, !0), u.addEventListener("touchend", c, !0), () => {
      u.removeEventListener("mousedown", s, !0), u.removeEventListener("mouseup", l, !0), u.removeEventListener("touchstart", s, !0), u.removeEventListener("touchend", c, !0);
    };
  }, [r, t, o, i, n]);
}
function fu(e, t) {
  var r;
  const n = e.target;
  return n && !S1(n).contains(n) ? !1 : !((r = t.current) != null && r.contains(n));
}
function S1(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function w1(e) {
  const { isOpen: t, ref: r } = e, [n, o] = de(t), [a, i] = de(!1);
  return ge(() => {
    a || (o(t), i(!0));
  }, [t, a, n]), qn(
    () => r.current,
    "animationend",
    () => {
      o(t);
    }
  ), {
    present: !(t ? !1 : !n),
    onComplete() {
      var l;
      const c = iL(r.current), u = new c.CustomEvent("animationend", { bubbles: !0 });
      (l = r.current) == null || l.dispatchEvent(u);
    }
  };
}
function Np(e) {
  const { wasSelected: t, enabled: r, isSelected: n, mode: o = "unmount" } = e;
  return !!(!r || n || o === "keepMounted" && t);
}
var [
  _1,
  C1,
  k1,
  P1
] = Nl(), [E1, oo] = Ie({
  strict: !1,
  name: "MenuContext"
});
function Xz(e, ...t) {
  const r = It(), n = e || r;
  return we(() => t.map((o) => `${o}-${n}`), [n, t]);
}
function T1(e) {
  var t;
  return (t = e == null ? void 0 : e.ownerDocument) != null ? t : document;
}
function xg(e) {
  return T1(e).activeElement === e;
}
function A1(e = {}) {
  const {
    id: t,
    closeOnSelect: r = !0,
    closeOnBlur: n = !0,
    initialFocusRef: o,
    autoSelect: a = !0,
    isLazy: i,
    isOpen: s,
    defaultIsOpen: l,
    onClose: c,
    onOpen: u,
    placement: d = "bottom-start",
    lazyBehavior: f = "unmount",
    direction: p,
    computePositionOnMount: v = !1,
    ...m
  } = e, g = ie(null), b = ie(null), y = k1(), x = I(() => {
    requestAnimationFrame(() => {
      var V;
      (V = g.current) == null || V.focus({ preventScroll: !1 });
    });
  }, []), _ = I(() => {
    const V = setTimeout(() => {
      var z;
      if (o)
        (z = o.current) == null || z.focus();
      else {
        const U = y.firstEnabled();
        U && G(U.index);
      }
    });
    q.current.add(V);
  }, [y, o]), w = I(() => {
    const V = setTimeout(() => {
      const z = y.lastEnabled();
      z && G(z.index);
    });
    q.current.add(V);
  }, [y]), P = I(() => {
    u == null || u(), a ? _() : x();
  }, [a, _, x, u]), { isOpen: k, onOpen: R, onClose: j, onToggle: $ } = $p({
    isOpen: s,
    defaultIsOpen: l,
    onClose: c,
    onOpen: P
  });
  Yz({
    enabled: k && n,
    ref: g,
    handler: (V) => {
      var z;
      (z = b.current) != null && z.contains(V.target) || j();
    }
  });
  const L = Zl({
    ...m,
    enabled: k || v,
    placement: d,
    direction: p
  }), [J, G] = de(-1);
  kr(() => {
    k || G(-1);
  }, [k]), d1(g, {
    focusRef: b,
    visible: k,
    shouldFocus: !0
  });
  const K = w1({ isOpen: k, ref: g }), [te, Z] = Xz(t, "menu-button", "menu-list"), N = I(() => {
    R(), x();
  }, [R, x]), q = ie(/* @__PURE__ */ new Set([]));
  e3(() => {
    q.current.forEach((V) => clearTimeout(V)), q.current.clear();
  });
  const he = I(() => {
    R(), _();
  }, [_, R]), D = I(() => {
    R(), w();
  }, [R, w]), M = I(() => {
    var V, z;
    const U = T1(g.current), oe = (V = g.current) == null ? void 0 : V.contains(U.activeElement);
    if (!(k && !oe))
      return;
    const se = (z = y.item(J)) == null ? void 0 : z.node;
    se == null || se.focus();
  }, [k, J, y]), re = ie(null);
  return {
    openAndFocusMenu: N,
    openAndFocusFirstItem: he,
    openAndFocusLastItem: D,
    onTransitionEnd: M,
    unstable__animationState: K,
    descendants: y,
    popper: L,
    buttonId: te,
    menuId: Z,
    forceUpdate: L.forceUpdate,
    orientation: "vertical",
    isOpen: k,
    onToggle: $,
    onOpen: R,
    onClose: j,
    menuRef: g,
    buttonRef: b,
    focusedIndex: J,
    closeOnSelect: r,
    closeOnBlur: n,
    autoSelect: a,
    setFocusedIndex: G,
    isLazy: i,
    lazyBehavior: f,
    initialFocusRef: o,
    rafId: re
  };
}
function I1(e = {}, t = null) {
  const r = oo(), { onToggle: n, popper: o, openAndFocusFirstItem: a, openAndFocusLastItem: i } = r, s = I(
    (l) => {
      const c = l.key, d = {
        Enter: a,
        ArrowDown: a,
        ArrowUp: i
      }[c];
      d && (l.preventDefault(), l.stopPropagation(), d(l));
    },
    [a, i]
  );
  return {
    ...e,
    ref: je(r.buttonRef, t, o.referenceRef),
    id: r.buttonId,
    "data-active": Ae(r.isOpen),
    "aria-expanded": r.isOpen,
    "aria-haspopup": "menu",
    "aria-controls": r.menuId,
    onClick: ue(e.onClick, n),
    onKeyDown: ue(e.onKeyDown, s)
  };
}
function ud(e) {
  var t;
  return Jz(e) && !!((t = e == null ? void 0 : e.getAttribute("role")) != null && t.startsWith("menuitem"));
}
function R1(e = {}, t = null) {
  const r = oo();
  if (!r)
    throw new Error(
      "useMenuContext: context is undefined. Seems you forgot to wrap component within <Menu>"
    );
  const {
    focusedIndex: n,
    setFocusedIndex: o,
    menuRef: a,
    isOpen: i,
    onClose: s,
    menuId: l,
    isLazy: c,
    lazyBehavior: u,
    unstable__animationState: d
  } = r, f = C1(), p = wV({
    preventDefault: (b) => b.key !== " " && ud(b.target)
  }), v = I(
    (b) => {
      if (!b.currentTarget.contains(b.target))
        return;
      const y = b.key, _ = {
        Tab: (P) => P.preventDefault(),
        Escape: s,
        ArrowDown: () => {
          const P = f.nextEnabled(n);
          P && o(P.index);
        },
        ArrowUp: () => {
          const P = f.prevEnabled(n);
          P && o(P.index);
        }
      }[y];
      if (_) {
        b.preventDefault(), _(b);
        return;
      }
      const w = p((P) => {
        const k = _V(
          f.values(),
          P,
          (R) => {
            var j, $;
            return ($ = (j = R == null ? void 0 : R.node) == null ? void 0 : j.textContent) != null ? $ : "";
          },
          f.item(n)
        );
        if (k) {
          const R = f.indexOf(k.node);
          o(R);
        }
      });
      ud(b.target) && w(b);
    },
    [
      f,
      n,
      p,
      s,
      o
    ]
  ), m = ie(!1);
  i && (m.current = !0);
  const g = Np({
    wasSelected: m.current,
    enabled: c,
    mode: u,
    isSelected: d.present
  });
  return {
    ...e,
    ref: je(a, t),
    children: g ? e.children : null,
    tabIndex: -1,
    role: "menu",
    id: l,
    style: {
      ...e.style,
      transformOrigin: "var(--popper-transform-origin)"
    },
    "aria-orientation": "vertical",
    onKeyDown: ue(e.onKeyDown, v)
  };
}
function $1(e = {}) {
  const { popper: t, isOpen: r } = oo();
  return t.getPopperProps({
    ...e,
    style: {
      visibility: r ? "visible" : "hidden",
      ...e.style
    }
  });
}
function Op(e = {}, t = null) {
  const {
    onMouseEnter: r,
    onMouseMove: n,
    onMouseLeave: o,
    onClick: a,
    onFocus: i,
    isDisabled: s,
    isFocusable: l,
    closeOnSelect: c,
    type: u,
    ...d
  } = e, f = oo(), {
    setFocusedIndex: p,
    focusedIndex: v,
    closeOnSelect: m,
    onClose: g,
    menuRef: b,
    isOpen: y,
    menuId: x,
    rafId: _
  } = f, w = ie(null), P = `${x}-menuitem-${It()}`, { index: k, register: R } = P1({
    disabled: s && !l
  }), j = I(
    (N) => {
      r == null || r(N), !s && p(k);
    },
    [p, k, s, r]
  ), $ = I(
    (N) => {
      n == null || n(N), w.current && !xg(w.current) && j(N);
    },
    [j, n]
  ), L = I(
    (N) => {
      o == null || o(N), !s && p(-1);
    },
    [p, s, o]
  ), J = I(
    (N) => {
      a == null || a(N), ud(N.currentTarget) && (c ?? m) && g();
    },
    [g, a, m, c]
  ), G = I(
    (N) => {
      i == null || i(N), p(k);
    },
    [p, i, k]
  ), K = k === v, te = s && !l;
  kr(() => {
    y && (K && !te && w.current ? (_.current && cancelAnimationFrame(_.current), _.current = requestAnimationFrame(() => {
      var N;
      (N = w.current) == null || N.focus(), _.current = null;
    })) : b.current && !xg(b.current) && b.current.focus({ preventScroll: !0 }));
  }, [K, te, b, y]);
  const Z = u1({
    onClick: J,
    onFocus: G,
    onMouseEnter: j,
    onMouseMove: $,
    onMouseLeave: L,
    ref: je(R, w, t),
    isDisabled: s,
    isFocusable: l
  });
  return {
    ...d,
    ...Z,
    type: u ?? Z.type,
    id: P,
    role: "menuitem",
    tabIndex: K ? 0 : -1
  };
}
function N1(e = {}, t = null) {
  const { type: r = "radio", isChecked: n, ...o } = e;
  return {
    ...Op(o, t),
    role: `menuitem${r}`,
    "aria-checked": n
  };
}
function O1(e = {}) {
  const {
    children: t,
    type: r = "radio",
    value: n,
    defaultValue: o,
    onChange: a,
    ...i
  } = e, l = r === "radio" ? "" : [], [c, u] = An({
    defaultValue: o ?? l,
    value: n,
    onChange: a
  }), d = I(
    (v) => {
      if (r === "radio" && typeof c == "string" && u(v), r === "checkbox" && Array.isArray(c)) {
        const m = c.includes(v) ? c.filter((g) => g !== v) : c.concat(v);
        u(m);
      }
    },
    [c, u, r]
  ), p = ln(t).map((v) => {
    if (v.type.id !== "MenuItemOption")
      return v;
    const m = (b) => {
      var y, x;
      d(v.props.value), (x = (y = v.props).onClick) == null || x.call(y, b);
    }, g = r === "radio" ? v.props.value === c : c.includes(v.props.value);
    return Tt(v, {
      type: r,
      onClick: m,
      isChecked: g
    });
  });
  return {
    ...i,
    children: p
  };
}
function Zz() {
  const { isOpen: e, onClose: t } = oo();
  return { isOpen: e, onClose: t };
}
function Jz(e) {
  var t;
  if (!Qz(e))
    return !1;
  const r = (t = e.ownerDocument.defaultView) != null ? t : window;
  return e instanceof r.HTMLElement;
}
function Qz(e) {
  return e != null && typeof e == "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
}
function e3(e, t = []) {
  return ge(
    () => () => e(),
    t
  );
}
var [t3, ao] = Ie({
  name: "MenuStylesContext",
  errorMessage: `useMenuStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Menu />" `
}), Dp = (e) => {
  const { children: t } = e, r = Ze("Menu", e), n = Ee(e), { direction: o } = sr(), { descendants: a, ...i } = A1({ ...n, direction: o }), s = we(() => i, [i]), { isOpen: l, onClose: c, forceUpdate: u } = s;
  return /* @__PURE__ */ h.jsx(_1, { value: a, children: /* @__PURE__ */ h.jsx(E1, { value: s, children: /* @__PURE__ */ h.jsx(t3, { value: r, children: Bt(t, { isOpen: l, onClose: c, forceUpdate: u }) }) }) });
};
Dp.displayName = "Menu";
var jp = O(
  (e, t) => {
    const r = ao();
    return /* @__PURE__ */ h.jsx(
      E.span,
      {
        ref: t,
        ...e,
        __css: r.command,
        className: "chakra-menu__command"
      }
    );
  }
);
jp.displayName = "MenuCommand";
var D1 = O(
  (e, t) => {
    const { type: r, ...n } = e, o = ao(), a = n.as || r ? r ?? void 0 : "button", i = we(
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
    return /* @__PURE__ */ h.jsx(E.button, { ref: t, type: a, ...n, __css: i });
  }
), Jl = (e) => {
  const { className: t, children: r, ...n } = e, o = Hr.only(r), a = Xo(o) ? Tt(o, {
    focusable: "false",
    "aria-hidden": !0,
    className: H("chakra-menu__icon", o.props.className)
  }) : null, i = H("chakra-menu__icon-wrapper", t);
  return /* @__PURE__ */ h.jsx(
    E.span,
    {
      className: i,
      ...n,
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
Jl.displayName = "MenuIcon";
var j1 = O((e, t) => {
  const {
    icon: r,
    iconSpacing: n = "0.75rem",
    command: o,
    commandSpacing: a = "0.75rem",
    children: i,
    ...s
  } = e, l = Op(s, t), u = r || o ? /* @__PURE__ */ h.jsx("span", { style: { pointerEvents: "none", flex: 1 }, children: i }) : i;
  return /* @__PURE__ */ h.jsxs(
    D1,
    {
      ...l,
      className: H("chakra-menu__menuitem", l.className),
      children: [
        r && /* @__PURE__ */ h.jsx(Jl, { fontSize: "0.8em", marginEnd: n, children: r }),
        u,
        o && /* @__PURE__ */ h.jsx(jp, { marginStart: a, children: o })
      ]
    }
  );
});
j1.displayName = "MenuItem";
var r3 = {
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
}, n3 = E(Tr.div), Mp = O(function(t, r) {
  var n, o;
  const { rootProps: a, motionProps: i, ...s } = t, {
    isOpen: l,
    onTransitionEnd: c,
    unstable__animationState: u
  } = oo(), d = R1(s, r), f = $1(a), p = ao();
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...f,
      __css: { zIndex: (o = t.zIndex) != null ? o : (n = p.list) == null ? void 0 : n.zIndex },
      children: /* @__PURE__ */ h.jsx(
        n3,
        {
          variants: r3,
          initial: !1,
          animate: l ? "enter" : "exit",
          __css: { outline: 0, ...p.list },
          ...i,
          className: H("chakra-menu__menu-list", d.className),
          ...d,
          onUpdate: c,
          onAnimationComplete: ml(
            u.onComplete,
            d.onAnimationComplete
          )
        }
      )
    }
  );
});
Mp.displayName = "MenuList";
var Fp = O((e, t) => {
  const { title: r, children: n, className: o, ...a } = e, i = H("chakra-menu__group__title", o), s = ao();
  return /* @__PURE__ */ h.jsxs("div", { ref: t, className: "chakra-menu__group", role: "group", children: [
    r && /* @__PURE__ */ h.jsx(E.p, { className: i, ...a, __css: s.groupTitle, children: r }),
    n
  ] });
});
Fp.displayName = "MenuGroup";
var M1 = (e) => {
  const { className: t, title: r, ...n } = e, o = O1(n);
  return /* @__PURE__ */ h.jsx(
    Fp,
    {
      title: r,
      className: H("chakra-menu__option-group", t),
      ...o
    }
  );
};
M1.displayName = "MenuOptionGroup";
var o3 = O((e, t) => {
  const r = ao();
  return /* @__PURE__ */ h.jsx(
    E.button,
    {
      ref: t,
      ...e,
      __css: {
        display: "inline-flex",
        appearance: "none",
        alignItems: "center",
        outline: 0,
        ...r.button
      }
    }
  );
}), Bp = O(
  (e, t) => {
    const { children: r, as: n, ...o } = e, a = I1(o, t), i = n || o3;
    return /* @__PURE__ */ h.jsx(
      i,
      {
        ...a,
        className: H("chakra-menu__menu-button", e.className),
        children: /* @__PURE__ */ h.jsx(
          E.span,
          {
            __css: { pointerEvents: "none", flex: "1 1 auto", minW: 0 },
            children: e.children
          }
        )
      }
    );
  }
);
Bp.displayName = "MenuButton";
var F1 = (e) => {
  const { className: t, ...r } = e, n = ao();
  return /* @__PURE__ */ h.jsx(
    E.hr,
    {
      "aria-orientation": "horizontal",
      className: H("chakra-menu__divider", t),
      ...r,
      __css: n.divider
    }
  );
};
F1.displayName = "MenuDivider";
var a3 = (e) => /* @__PURE__ */ h.jsx("svg", { viewBox: "0 0 14 14", width: "1em", height: "1em", ...e, children: /* @__PURE__ */ h.jsx(
  "polygon",
  {
    fill: "currentColor",
    points: "5.5 11.9993304 14 3.49933039 12.5 2 5.5 8.99933039 1.5 4.9968652 0 6.49933039"
  }
) }), Lp = O(
  (e, t) => {
    const { icon: r, iconSpacing: n = "0.75rem", ...o } = e, a = N1(o, t);
    return /* @__PURE__ */ h.jsxs(
      D1,
      {
        ...a,
        className: H("chakra-menu__menuitem-option", o.className),
        children: [
          r !== null && /* @__PURE__ */ h.jsx(
            Jl,
            {
              fontSize: "0.8em",
              marginEnd: n,
              opacity: e.isChecked ? 1 : 0,
              children: r || /* @__PURE__ */ h.jsx(a3, {})
            }
          ),
          /* @__PURE__ */ h.jsx("span", { style: { flex: 1 }, children: a.children })
        ]
      }
    );
  }
);
Lp.id = "MenuItemOption";
Lp.displayName = "MenuItemOption";
var i3 = {
  slideInBottom: {
    ...Zs,
    custom: { offsetY: 16, reverse: !0 }
  },
  slideInRight: {
    ...Zs,
    custom: { offsetX: 16, reverse: !0 }
  },
  scale: {
    ...Of,
    custom: { initialScale: 0.95, reverse: !0 }
  },
  none: {}
}, s3 = E(Tr.section), l3 = (e) => i3[e || "none"], B1 = sn(
  (e, t) => {
    const { preset: r, motionProps: n = l3(r), ...o } = e;
    return /* @__PURE__ */ h.jsx(s3, { ref: t, ...n, ...o });
  }
);
B1.displayName = "ModalTransition";
var c3 = Object.defineProperty, u3 = (e, t, r) => t in e ? c3(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, d3 = (e, t, r) => (u3(e, typeof t != "symbol" ? t + "" : t, r), r), f3 = class {
  constructor() {
    d3(this, "modals"), this.modals = /* @__PURE__ */ new Map();
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
}, dd = new f3();
function Vp(e, t) {
  const [r, n] = de(0);
  return ge(() => {
    const o = e.current;
    if (o) {
      if (t) {
        const a = dd.add(o);
        n(a);
      }
      return () => {
        dd.remove(o), n(0);
      };
    }
  }, [t, e]), r;
}
var p3 = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, fo = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), es = {}, pu = 0, L1 = function(e) {
  return e && (e.host || L1(e.parentNode));
}, h3 = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = L1(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, m3 = function(e, t, r, n) {
  var o = h3(t, Array.isArray(e) ? e : [e]);
  es[r] || (es[r] = /* @__PURE__ */ new WeakMap());
  var a = es[r], i = [], s = /* @__PURE__ */ new Set(), l = new Set(o), c = function(d) {
    !d || s.has(d) || (s.add(d), c(d.parentNode));
  };
  o.forEach(c);
  var u = function(d) {
    !d || l.has(d) || Array.prototype.forEach.call(d.children, function(f) {
      if (s.has(f))
        u(f);
      else {
        var p = f.getAttribute(n), v = p !== null && p !== "false", m = (fo.get(f) || 0) + 1, g = (a.get(f) || 0) + 1;
        fo.set(f, m), a.set(f, g), i.push(f), m === 1 && v && Qi.set(f, !0), g === 1 && f.setAttribute(r, "true"), v || f.setAttribute(n, "true");
      }
    });
  };
  return u(t), s.clear(), pu++, function() {
    i.forEach(function(d) {
      var f = fo.get(d) - 1, p = a.get(d) - 1;
      fo.set(d, f), a.set(d, p), f || (Qi.has(d) || d.removeAttribute(n), Qi.delete(d)), p || d.removeAttribute(r);
    }), pu--, pu || (fo = /* @__PURE__ */ new WeakMap(), fo = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), es = {});
  };
}, v3 = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), o = t || p3(e);
  return o ? (n.push.apply(n, Array.from(o.querySelectorAll("[aria-live]"))), m3(n, o, r, "aria-hidden")) : function() {
    return null;
  };
};
function V1(e) {
  const {
    isOpen: t,
    onClose: r,
    id: n,
    closeOnOverlayClick: o = !0,
    closeOnEsc: a = !0,
    useInert: i = !0,
    onOverlayClick: s,
    onEsc: l
  } = e, c = ie(null), u = ie(null), [d, f, p] = y3(
    n,
    "chakra-modal",
    "chakra-modal--header",
    "chakra-modal--body"
  );
  g3(c, t && i);
  const v = Vp(c, t), m = ie(null), g = I((j) => {
    m.current = j.target;
  }, []), b = I(
    (j) => {
      j.key === "Escape" && (j.stopPropagation(), a && (r == null || r()), l == null || l());
    },
    [a, r, l]
  ), [y, x] = de(!1), [_, w] = de(!1), P = I(
    (j = {}, $ = null) => ({
      role: "dialog",
      ...j,
      ref: je($, c),
      id: d,
      tabIndex: -1,
      "aria-modal": !0,
      "aria-labelledby": y ? f : void 0,
      "aria-describedby": _ ? p : void 0,
      onClick: ue(
        j.onClick,
        (L) => L.stopPropagation()
      )
    }),
    [p, _, d, f, y]
  ), k = I(
    (j) => {
      j.stopPropagation(), m.current === j.target && dd.isTopModal(c.current) && (o && (r == null || r()), s == null || s());
    },
    [r, o, s]
  ), R = I(
    (j = {}, $ = null) => ({
      ...j,
      ref: je($, u),
      onClick: ue(j.onClick, k),
      onKeyDown: ue(j.onKeyDown, b),
      onMouseDown: ue(j.onMouseDown, g)
    }),
    [b, g, k]
  );
  return {
    isOpen: t,
    onClose: r,
    headerId: f,
    bodyId: p,
    setBodyMounted: w,
    setHeaderMounted: x,
    dialogRef: c,
    overlayRef: u,
    getDialogProps: P,
    getDialogContainerProps: R,
    index: v
  };
}
function g3(e, t) {
  const r = e.current;
  ge(() => {
    if (!(!e.current || !t))
      return v3(e.current);
  }, [t, e, r]);
}
function y3(e, ...t) {
  const r = It(), n = e || r;
  return we(() => t.map((o) => `${o}-${n}`), [n, t]);
}
var [b3, $n] = Ie({
  name: "ModalStylesContext",
  errorMessage: `useModalStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Modal />" `
}), [z1, an] = Ie({
  strict: !0,
  name: "ModalContext",
  errorMessage: "useModalContext: `context` is undefined. Seems you forgot to wrap modal components in `<Modal />`"
}), Ql = (e) => {
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
    portalProps: r,
    children: n,
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: c,
    allowPinchZoom: u,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p,
    onCloseComplete: v
  } = t, m = Ze("Modal", t), b = {
    ...V1(t),
    autoFocus: o,
    trapFocus: a,
    initialFocusRef: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    blockScrollOnMount: c,
    allowPinchZoom: u,
    preserveScrollBarGap: d,
    motionPreset: f,
    lockFocusAcrossFrames: p
  };
  return /* @__PURE__ */ h.jsx(z1, { value: b, children: /* @__PURE__ */ h.jsx(b3, { value: m, children: /* @__PURE__ */ h.jsx(Tn, { onExitComplete: v, children: b.isOpen && /* @__PURE__ */ h.jsx(Jn, { ...r, children: n }) }) }) });
};
Ql.displayName = "Modal";
var xs = "right-scroll-bar-position", Ss = "width-before-scroll-bar", x3 = "with-scroll-bars-hidden", S3 = "--removed-body-scroll-bar-size", W1 = aS(), hu = function() {
}, ec = Q.forwardRef(function(e, t) {
  var r = Q.useRef(null), n = Q.useState({
    onScrollCapture: hu,
    onWheelCapture: hu,
    onTouchMoveCapture: hu
  }), o = n[0], a = n[1], i = e.forwardProps, s = e.children, l = e.className, c = e.removeScrollBar, u = e.enabled, d = e.shards, f = e.sideCar, p = e.noIsolation, v = e.inert, m = e.allowPinchZoom, g = e.as, b = g === void 0 ? "div" : g, y = e.gapMode, x = rS(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]), _ = f, w = tS([r, t]), P = jr(jr({}, x), o);
  return Q.createElement(
    Q.Fragment,
    null,
    u && Q.createElement(_, { sideCar: W1, removeScrollBar: c, shards: d, noIsolation: p, inert: v, setCallbacks: a, allowPinchZoom: !!m, lockRef: r, gapMode: y }),
    i ? Q.cloneElement(Q.Children.only(s), jr(jr({}, P), { ref: w })) : Q.createElement(b, jr({}, P, { className: l, ref: w }), s)
  );
});
ec.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ec.classNames = {
  fullWidth: Ss,
  zeroRight: xs
};
var Sg, w3 = function() {
  if (Sg)
    return Sg;
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function _3() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = w3();
  return t && e.setAttribute("nonce", t), e;
}
function C3(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function k3(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var P3 = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = _3()) && (C3(t, r), k3(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, E3 = function() {
  var e = P3();
  return function(t, r) {
    Q.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, H1 = function() {
  var e = E3(), t = function(r) {
    var n = r.styles, o = r.dynamic;
    return e(n, o), null;
  };
  return t;
}, T3 = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, mu = function(e) {
  return parseInt(e || "", 10) || 0;
}, A3 = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], o = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [mu(r), mu(n), mu(o)];
}, I3 = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return T3;
  var t = A3(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, R3 = H1(), $3 = function(e, t, r, n) {
  var o = e.left, a = e.top, i = e.right, s = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(x3, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(s, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(a, `px;
    padding-right: `).concat(i, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(s, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(xs, ` {
    right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(Ss, ` {
    margin-right: `).concat(s, "px ").concat(n, `;
  }
  
  .`).concat(xs, " .").concat(xs, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Ss, " .").concat(Ss, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(S3, ": ").concat(s, `px;
  }
`);
}, N3 = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, o = n === void 0 ? "margin" : n, a = Q.useMemo(function() {
    return I3(o);
  }, [o]);
  return Q.createElement(R3, { styles: $3(a, !t, o, r ? "" : "!important") });
}, fd = !1;
if (typeof window < "u")
  try {
    var ts = Object.defineProperty({}, "passive", {
      get: function() {
        return fd = !0, !0;
      }
    });
    window.addEventListener("test", ts, ts), window.removeEventListener("test", ts, ts);
  } catch {
    fd = !1;
  }
var po = fd ? { passive: !1 } : !1, O3 = function(e) {
  return e.tagName === "TEXTAREA";
}, U1 = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !O3(e) && r[t] === "visible")
  );
}, D3 = function(e) {
  return U1(e, "overflowY");
}, j3 = function(e) {
  return U1(e, "overflowX");
}, wg = function(e, t) {
  var r = t.ownerDocument, n = t;
  do {
    typeof ShadowRoot < "u" && n instanceof ShadowRoot && (n = n.host);
    var o = G1(e, n);
    if (o) {
      var a = q1(e, n), i = a[1], s = a[2];
      if (i > s)
        return !0;
    }
    n = n.parentNode;
  } while (n && n !== r.body);
  return !1;
}, M3 = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, F3 = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, G1 = function(e, t) {
  return e === "v" ? D3(t) : j3(t);
}, q1 = function(e, t) {
  return e === "v" ? M3(t) : F3(t);
}, B3 = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, L3 = function(e, t, r, n, o) {
  var a = B3(e, window.getComputedStyle(t).direction), i = a * n, s = r.target, l = t.contains(s), c = !1, u = i > 0, d = 0, f = 0;
  do {
    var p = q1(e, s), v = p[0], m = p[1], g = p[2], b = m - g - a * v;
    (v || b) && G1(e, s) && (d += b, f += v), s = s.parentNode;
  } while (
    // portaled content
    !l && s !== document.body || // self content
    l && (t.contains(s) || t === s)
  );
  return (u && (o && d === 0 || !o && i > d) || !u && (o && f === 0 || !o && -i > f)) && (c = !0), c;
}, rs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, _g = function(e) {
  return [e.deltaX, e.deltaY];
}, Cg = function(e) {
  return e && "current" in e ? e.current : e;
}, V3 = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, z3 = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, W3 = 0, ho = [];
function H3(e) {
  var t = Q.useRef([]), r = Q.useRef([0, 0]), n = Q.useRef(), o = Q.useState(W3++)[0], a = Q.useState(H1)[0], i = Q.useRef(e);
  Q.useEffect(function() {
    i.current = e;
  }, [e]), Q.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(o));
      var m = oB([e.lockRef.current], (e.shards || []).map(Cg), !0).filter(Boolean);
      return m.forEach(function(g) {
        return g.classList.add("allow-interactivity-".concat(o));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(o)), m.forEach(function(g) {
          return g.classList.remove("allow-interactivity-".concat(o));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var s = Q.useCallback(function(m, g) {
    if ("touches" in m && m.touches.length === 2)
      return !i.current.allowPinchZoom;
    var b = rs(m), y = r.current, x = "deltaX" in m ? m.deltaX : y[0] - b[0], _ = "deltaY" in m ? m.deltaY : y[1] - b[1], w, P = m.target, k = Math.abs(x) > Math.abs(_) ? "h" : "v";
    if ("touches" in m && k === "h" && P.type === "range")
      return !1;
    var R = wg(k, P);
    if (!R)
      return !0;
    if (R ? w = k : (w = k === "v" ? "h" : "v", R = wg(k, P)), !R)
      return !1;
    if (!n.current && "changedTouches" in m && (x || _) && (n.current = w), !w)
      return !0;
    var j = n.current || w;
    return L3(j, g, m, j === "h" ? x : _, !0);
  }, []), l = Q.useCallback(function(m) {
    var g = m;
    if (!(!ho.length || ho[ho.length - 1] !== a)) {
      var b = "deltaY" in g ? _g(g) : rs(g), y = t.current.filter(function(w) {
        return w.name === g.type && w.target === g.target && V3(w.delta, b);
      })[0];
      if (y && y.should) {
        g.cancelable && g.preventDefault();
        return;
      }
      if (!y) {
        var x = (i.current.shards || []).map(Cg).filter(Boolean).filter(function(w) {
          return w.contains(g.target);
        }), _ = x.length > 0 ? s(g, x[0]) : !i.current.noIsolation;
        _ && g.cancelable && g.preventDefault();
      }
    }
  }, []), c = Q.useCallback(function(m, g, b, y) {
    var x = { name: m, delta: g, target: b, should: y };
    t.current.push(x), setTimeout(function() {
      t.current = t.current.filter(function(_) {
        return _ !== x;
      });
    }, 1);
  }, []), u = Q.useCallback(function(m) {
    r.current = rs(m), n.current = void 0;
  }, []), d = Q.useCallback(function(m) {
    c(m.type, _g(m), m.target, s(m, e.lockRef.current));
  }, []), f = Q.useCallback(function(m) {
    c(m.type, rs(m), m.target, s(m, e.lockRef.current));
  }, []);
  Q.useEffect(function() {
    return ho.push(a), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: f
    }), document.addEventListener("wheel", l, po), document.addEventListener("touchmove", l, po), document.addEventListener("touchstart", u, po), function() {
      ho = ho.filter(function(m) {
        return m !== a;
      }), document.removeEventListener("wheel", l, po), document.removeEventListener("touchmove", l, po), document.removeEventListener("touchstart", u, po);
    };
  }, []);
  var p = e.removeScrollBar, v = e.inert;
  return Q.createElement(
    Q.Fragment,
    null,
    v ? Q.createElement(a, { styles: z3(o) }) : null,
    p ? Q.createElement(N3, { gapMode: e.gapMode }) : null
  );
}
const U3 = aB(W1, H3);
var K1 = Q.forwardRef(function(e, t) {
  return Q.createElement(ec, jr({}, e, { ref: t, sideCar: U3 }));
});
K1.classNames = ec.classNames;
const G3 = K1;
function zp(e) {
  const {
    autoFocus: t,
    trapFocus: r,
    dialogRef: n,
    initialFocusRef: o,
    blockScrollOnMount: a,
    allowPinchZoom: i,
    finalFocusRef: s,
    returnFocusOnClose: l,
    preserveScrollBarGap: c,
    lockFocusAcrossFrames: u,
    isOpen: d
  } = an(), [f, p] = L0();
  ge(() => {
    !f && p && setTimeout(p);
  }, [f, p]);
  const v = Vp(n, d);
  return /* @__PURE__ */ h.jsx(
    ap,
    {
      autoFocus: t,
      isDisabled: !r,
      initialFocusRef: o,
      finalFocusRef: s,
      restoreFocus: l,
      contentRef: n,
      lockFocusAcrossFrames: u,
      children: /* @__PURE__ */ h.jsx(
        G3,
        {
          removeScrollBar: !c,
          allowPinchZoom: i,
          enabled: v === 1 && a,
          forwardProps: !0,
          children: e.children
        }
      )
    }
  );
}
var Wp = O(
  (e, t) => {
    const {
      className: r,
      children: n,
      containerProps: o,
      motionProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l } = an(), c = s(i, t), u = l(o), d = H("chakra-modal__content", r), f = $n(), p = {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%",
      outline: 0,
      ...f.dialog
    }, v = {
      display: "flex",
      width: "100vw",
      height: "$100vh",
      position: "fixed",
      left: 0,
      top: 0,
      ...f.dialogContainer
    }, { motionPreset: m } = an();
    return /* @__PURE__ */ h.jsx(zp, { children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...u,
        className: "chakra-modal__content-container",
        tabIndex: -1,
        __css: v,
        children: /* @__PURE__ */ h.jsx(
          B1,
          {
            preset: m,
            motionProps: a,
            className: d,
            ...c,
            __css: p,
            children: n
          }
        )
      }
    ) });
  }
);
Wp.displayName = "ModalContent";
function q3(e) {
  const { leastDestructiveRef: t, ...r } = e;
  return /* @__PURE__ */ h.jsx(Ql, { ...r, initialFocusRef: t });
}
var K3 = O(
  (e, t) => /* @__PURE__ */ h.jsx(Wp, { ref: t, role: "alertdialog", ...e })
), [Y3, Y1] = Ie(), X3 = {
  start: { ltr: "left", rtl: "right" },
  end: { ltr: "right", rtl: "left" }
};
function Z3(e, t) {
  var r, n;
  if (e)
    return (n = (r = X3[e]) == null ? void 0 : r[t]) != null ? n : e;
}
function J3(e) {
  var t;
  const {
    isOpen: r,
    onClose: n,
    placement: o = "right",
    children: a,
    ...i
  } = e, s = sr(), l = (t = s.components) == null ? void 0 : t.Drawer, c = Z3(o, s.direction);
  return /* @__PURE__ */ h.jsx(Y3, { value: { placement: c }, children: /* @__PURE__ */ h.jsx(
    Ql,
    {
      isOpen: r,
      onClose: n,
      styleConfig: l,
      ...i,
      children: a
    }
  ) });
}
var Q3 = E(Df), X1 = O(
  (e, t) => {
    const {
      className: r,
      children: n,
      motionProps: o,
      containerProps: a,
      ...i
    } = e, { getDialogProps: s, getDialogContainerProps: l, isOpen: c } = an(), u = s(i, t), d = l(a), f = H("chakra-modal__content", r), p = $n(), v = {
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
    }, { placement: g } = Y1();
    return /* @__PURE__ */ h.jsx(zp, { children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...d,
        className: "chakra-modal__content-container",
        __css: m,
        children: /* @__PURE__ */ h.jsx(
          Q3,
          {
            motionProps: o,
            direction: g,
            in: c,
            className: f,
            ...u,
            __css: v,
            children: n
          }
        )
      }
    ) });
  }
);
X1.displayName = "DrawerContent";
var ws = O(
  (e, t) => {
    const { className: r, ...n } = e, o = H("chakra-modal__footer", r), i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      ...$n().footer
    };
    return /* @__PURE__ */ h.jsx(
      E.footer,
      {
        ref: t,
        ...n,
        __css: i,
        className: o
      }
    );
  }
);
ws.displayName = "ModalFooter";
var _s = O(
  (e, t) => {
    const { className: r, ...n } = e, { headerId: o, setHeaderMounted: a } = an();
    ge(() => (a(!0), () => a(!1)), [a]);
    const i = H("chakra-modal__header", r), l = {
      flex: 0,
      ...$n().header
    };
    return /* @__PURE__ */ h.jsx(
      E.header,
      {
        ref: t,
        className: i,
        id: o,
        ...n,
        __css: l
      }
    );
  }
);
_s.displayName = "ModalHeader";
var e4 = E(Tr.div), Cs = O(
  (e, t) => {
    const { className: r, transition: n, motionProps: o, ...a } = e, i = H("chakra-modal__overlay", r), l = {
      pos: "fixed",
      left: "0",
      top: "0",
      w: "100vw",
      h: "100vh",
      ...$n().overlay
    }, { motionPreset: c } = an(), d = o || (c === "none" ? {} : Nf);
    return /* @__PURE__ */ h.jsx(
      e4,
      {
        ...d,
        __css: l,
        ref: t,
        className: i,
        ...a
      }
    );
  }
);
Cs.displayName = "ModalOverlay";
var ks = O((e, t) => {
  const { className: r, ...n } = e, { bodyId: o, setBodyMounted: a } = an();
  ge(() => (a(!0), () => a(!1)), [a]);
  const i = H("chakra-modal__body", r), s = $n();
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: t,
      className: i,
      id: o,
      ...n,
      __css: s.body
    }
  );
});
ks.displayName = "ModalBody";
var Ps = O(
  (e, t) => {
    const { onClick: r, className: n, ...o } = e, { onClose: a } = an(), i = H("chakra-modal__close-btn", n), s = $n();
    return /* @__PURE__ */ h.jsx(
      hi,
      {
        ref: t,
        __css: s.closeButton,
        className: i,
        onClick: ue(r, (l) => {
          l.stopPropagation(), a();
        }),
        ...o
      }
    );
  }
);
Ps.displayName = "ModalCloseButton";
var t4 = (e) => /* @__PURE__ */ h.jsx(Rt, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ h.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) }), r4 = (e) => /* @__PURE__ */ h.jsx(Rt, { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ h.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
  }
) });
function kg(e, t, r, n) {
  ge(() => {
    var o;
    if (!e.current || !n)
      return;
    const a = (o = e.current.ownerDocument.defaultView) != null ? o : window, i = Array.isArray(t) ? t : [t], s = new a.MutationObserver((l) => {
      for (const c of l)
        c.type === "attributes" && c.attributeName && i.includes(c.attributeName) && r(c);
    });
    return s.observe(e.current, { attributes: !0, attributeFilter: i }), () => s.disconnect();
  });
}
function n4(e, t) {
  const r = ot(e);
  ge(() => {
    let n = null;
    const o = () => r();
    return t !== null && (n = window.setInterval(o, t)), () => {
      n && window.clearInterval(n);
    };
  }, [t, r]);
}
var o4 = 50, Pg = 300;
function a4(e, t) {
  const [r, n] = de(!1), [o, a] = de(null), [i, s] = de(!0), l = ie(null), c = () => clearTimeout(l.current);
  n4(
    () => {
      o === "increment" && e(), o === "decrement" && t();
    },
    r ? o4 : null
  );
  const u = I(() => {
    i && e(), l.current = setTimeout(() => {
      s(!1), n(!0), a("increment");
    }, Pg);
  }, [e, i]), d = I(() => {
    i && t(), l.current = setTimeout(() => {
      s(!1), n(!0), a("decrement");
    }, Pg);
  }, [t, i]), f = I(() => {
    s(!0), n(!1), c();
  }, []);
  return ge(() => () => c(), []), { up: u, down: d, stop: f, isSpinning: r };
}
var i4 = /^[Ee0-9+\-.]$/;
function s4(e) {
  return i4.test(e);
}
function l4(e, t) {
  if (e.key == null)
    return !0;
  const r = e.ctrlKey || e.altKey || e.metaKey;
  return !(e.key.length === 1) || r ? !0 : t(e.key);
}
function Z1(e = {}) {
  const {
    focusInputOnChange: t = !0,
    clampValueOnBlur: r = !0,
    keepWithinRange: n = !0,
    min: o = Number.MIN_SAFE_INTEGER,
    max: a = Number.MAX_SAFE_INTEGER,
    step: i = 1,
    isReadOnly: s,
    isDisabled: l,
    isRequired: c,
    isInvalid: u,
    pattern: d = "[0-9]*(.[0-9]+)?",
    inputMode: f = "decimal",
    allowMouseWheel: p,
    id: v,
    onChange: m,
    precision: g,
    name: b,
    "aria-describedby": y,
    "aria-label": x,
    "aria-labelledby": _,
    onFocus: w,
    onBlur: P,
    onInvalid: k,
    getAriaValueText: R,
    isValidCharacter: j,
    format: $,
    parse: L,
    ...J
  } = e, G = ot(w), K = ot(P), te = ot(k), Z = ot(
    j ?? s4
  ), N = ot(R), q = Wx(e), {
    update: he,
    increment: D,
    decrement: M
  } = q, [re, V] = de(!1), z = !(s || l), U = ie(null), oe = ie(null), ce = ie(null), se = ie(null), W = I(
    (ae) => ae.split("").filter(Z).join(""),
    [Z]
  ), Y = I(
    (ae) => {
      var Re;
      return (Re = L == null ? void 0 : L(ae)) != null ? Re : ae;
    },
    [L]
  ), ne = I(
    (ae) => {
      var Re;
      return ((Re = $ == null ? void 0 : $(ae)) != null ? Re : ae).toString();
    },
    [$]
  );
  kr(() => {
    (q.valueAsNumber > a || q.valueAsNumber < o) && (te == null || te("rangeOverflow", ne(q.value), q.valueAsNumber));
  }, [q.valueAsNumber, q.value, ne, te]), rr(() => {
    if (!U.current)
      return;
    if (U.current.value != q.value) {
      const Re = Y(U.current.value);
      q.setValue(W(Re));
    }
  }, [Y, W]);
  const B = I(
    (ae = i) => {
      z && D(ae);
    },
    [D, z, i]
  ), Ce = I(
    (ae = i) => {
      z && M(ae);
    },
    [M, z, i]
  ), ee = a4(B, Ce);
  kg(
    ce,
    "disabled",
    ee.stop,
    ee.isSpinning
  ), kg(
    se,
    "disabled",
    ee.stop,
    ee.isSpinning
  );
  const ve = I(
    (ae) => {
      if (ae.nativeEvent.isComposing)
        return;
      const qe = Y(ae.currentTarget.value);
      he(W(qe)), oe.current = {
        start: ae.currentTarget.selectionStart,
        end: ae.currentTarget.selectionEnd
      };
    },
    [he, W, Y]
  ), Ne = I(
    (ae) => {
      var Re, qe, dt;
      G == null || G(ae), oe.current && (ae.target.selectionStart = (qe = oe.current.start) != null ? qe : (Re = ae.currentTarget.value) == null ? void 0 : Re.length, ae.currentTarget.selectionEnd = (dt = oe.current.end) != null ? dt : ae.currentTarget.selectionStart);
    },
    [G]
  ), $e = I(
    (ae) => {
      if (ae.nativeEvent.isComposing)
        return;
      l4(ae, Z) || ae.preventDefault();
      const Re = Oe(ae) * i, qe = ae.key, fe = {
        ArrowUp: () => B(Re),
        ArrowDown: () => Ce(Re),
        Home: () => he(o),
        End: () => he(a)
      }[qe];
      fe && (ae.preventDefault(), fe(ae));
    },
    [Z, i, B, Ce, he, o, a]
  ), Oe = (ae) => {
    let Re = 1;
    return (ae.metaKey || ae.ctrlKey) && (Re = 0.1), ae.shiftKey && (Re = 10), Re;
  }, vt = we(() => {
    const ae = N == null ? void 0 : N(q.value);
    if (ae != null)
      return ae;
    const Re = q.value.toString();
    return Re || void 0;
  }, [q.value, N]), Qe = I(() => {
    let ae = q.value;
    if (q.value === "")
      return;
    /^[eE]/.test(q.value.toString()) ? q.setValue("") : (q.valueAsNumber < o && (ae = o), q.valueAsNumber > a && (ae = a), q.cast(ae));
  }, [q, a, o]), xt = I(() => {
    V(!1), r && Qe();
  }, [r, V, Qe]), ct = I(() => {
    t && requestAnimationFrame(() => {
      var ae;
      (ae = U.current) == null || ae.focus();
    });
  }, [t]), ut = I(
    (ae) => {
      ae.preventDefault(), ee.up(), ct();
    },
    [ct, ee]
  ), $t = I(
    (ae) => {
      ae.preventDefault(), ee.down(), ct();
    },
    [ct, ee]
  );
  qn(
    () => U.current,
    "wheel",
    (ae) => {
      var Re, qe;
      const fe = ((qe = (Re = U.current) == null ? void 0 : Re.ownerDocument) != null ? qe : document).activeElement === U.current;
      if (!p || !fe)
        return;
      ae.preventDefault();
      const be = Oe(ae) * i, Jt = Math.sign(ae.deltaY);
      Jt === -1 ? B(be) : Jt === 1 && Ce(be);
    },
    { passive: !1 }
  );
  const zt = I(
    (ae = {}, Re = null) => {
      const qe = l || n && q.isAtMax;
      return {
        ...ae,
        ref: je(Re, ce),
        role: "button",
        tabIndex: -1,
        onPointerDown: ue(ae.onPointerDown, (dt) => {
          dt.button !== 0 || qe || ut(dt);
        }),
        onPointerLeave: ue(ae.onPointerLeave, ee.stop),
        onPointerUp: ue(ae.onPointerUp, ee.stop),
        disabled: qe,
        "aria-disabled": nr(qe)
      };
    },
    [q.isAtMax, n, ut, ee.stop, l]
  ), Zt = I(
    (ae = {}, Re = null) => {
      const qe = l || n && q.isAtMin;
      return {
        ...ae,
        ref: je(Re, se),
        role: "button",
        tabIndex: -1,
        onPointerDown: ue(ae.onPointerDown, (dt) => {
          dt.button !== 0 || qe || $t(dt);
        }),
        onPointerLeave: ue(ae.onPointerLeave, ee.stop),
        onPointerUp: ue(ae.onPointerUp, ee.stop),
        disabled: qe,
        "aria-disabled": nr(qe)
      };
    },
    [q.isAtMin, n, $t, ee.stop, l]
  ), Mt = I(
    (ae = {}, Re = null) => {
      var qe, dt, fe, be;
      return {
        name: b,
        inputMode: f,
        type: "text",
        pattern: d,
        "aria-labelledby": _,
        "aria-label": x,
        "aria-describedby": y,
        id: v,
        disabled: l,
        ...ae,
        readOnly: (qe = ae.readOnly) != null ? qe : s,
        "aria-readonly": (dt = ae.readOnly) != null ? dt : s,
        "aria-required": (fe = ae.required) != null ? fe : c,
        required: (be = ae.required) != null ? be : c,
        ref: je(U, Re),
        value: ne(q.value),
        role: "spinbutton",
        "aria-valuemin": o,
        "aria-valuemax": a,
        "aria-valuenow": Number.isNaN(q.valueAsNumber) ? void 0 : q.valueAsNumber,
        "aria-invalid": nr(u ?? q.isOutOfRange),
        "aria-valuetext": vt,
        autoComplete: "off",
        autoCorrect: "off",
        onChange: ue(ae.onChange, ve),
        onKeyDown: ue(ae.onKeyDown, $e),
        onFocus: ue(
          ae.onFocus,
          Ne,
          () => V(!0)
        ),
        onBlur: ue(ae.onBlur, K, xt)
      };
    },
    [
      b,
      f,
      d,
      _,
      x,
      ne,
      y,
      v,
      l,
      c,
      s,
      u,
      q.value,
      q.valueAsNumber,
      q.isOutOfRange,
      o,
      a,
      vt,
      ve,
      $e,
      Ne,
      K,
      xt
    ]
  );
  return {
    value: ne(q.value),
    valueAsNumber: q.valueAsNumber,
    isFocused: re,
    isDisabled: l,
    isReadOnly: s,
    getIncrementButtonProps: zt,
    getDecrementButtonProps: Zt,
    getInputProps: Mt,
    htmlProps: J
  };
}
var [c4, wi] = Ie({
  name: "NumberInputStylesContext",
  errorMessage: `useNumberInputStyles returned is 'undefined'. Seems you forgot to wrap the components in "<NumberInput />" `
}), [u4, Hp] = Ie({
  name: "NumberInputContext",
  errorMessage: "useNumberInputContext: `context` is undefined. Seems you forgot to wrap number-input's components within <NumberInput />"
}), J1 = O(
  function(t, r) {
    const n = Ze("NumberInput", t), o = Ee(t), a = Bl(o), { htmlProps: i, ...s } = Z1(a), l = we(() => s, [s]);
    return /* @__PURE__ */ h.jsx(u4, { value: l, children: /* @__PURE__ */ h.jsx(c4, { value: n, children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...i,
        ref: r,
        className: H("chakra-numberinput", t.className),
        __css: {
          position: "relative",
          zIndex: 0,
          ...n.root
        }
      }
    ) }) });
  }
);
J1.displayName = "NumberInput";
var Q1 = O(
  function(t, r) {
    const n = wi();
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        "aria-hidden": !0,
        ref: r,
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
          ...n.stepperGroup
        }
      }
    );
  }
);
Q1.displayName = "NumberInputStepper";
var ew = O(
  function(t, r) {
    const { getInputProps: n } = Hp(), o = n(t, r), a = wi();
    return /* @__PURE__ */ h.jsx(
      E.input,
      {
        ...o,
        className: H("chakra-numberinput__field", t.className),
        __css: {
          width: "100%",
          ...a.field
        }
      }
    );
  }
);
ew.displayName = "NumberInputField";
var tw = E("div", {
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
}), rw = O(function(t, r) {
  var n;
  const o = wi(), { getDecrementButtonProps: a } = Hp(), i = a(t, r);
  return /* @__PURE__ */ h.jsx(tw, { ...i, __css: o.stepper, children: (n = t.children) != null ? n : /* @__PURE__ */ h.jsx(t4, {}) });
});
rw.displayName = "NumberDecrementStepper";
var nw = O(function(t, r) {
  var n;
  const { getIncrementButtonProps: o } = Hp(), a = o(t, r), i = wi();
  return /* @__PURE__ */ h.jsx(tw, { ...a, __css: i.stepper, children: (n = t.children) != null ? n : /* @__PURE__ */ h.jsx(r4, {}) });
});
nw.displayName = "NumberIncrementStepper";
var [
  ow,
  r9,
  d4,
  f4
] = Nl(), [aw, iw] = Ie({
  name: "PinInputContext",
  errorMessage: "usePinInputContext: `context` is undefined. Seems you forgot to all pin input fields within `<PinInput />`"
}), Eg = (e) => e == null ? void 0 : e.split("");
function Tg(e, t) {
  return (t === "alphanumeric" ? /^[a-zA-Z0-9]+$/i : /^[0-9]+$/).test(e);
}
function sw(e = {}) {
  const {
    autoFocus: t,
    value: r,
    defaultValue: n,
    onChange: o,
    onComplete: a,
    placeholder: i = "○",
    manageFocus: s = !0,
    otp: l = !1,
    id: c,
    isDisabled: u,
    isInvalid: d,
    type: f = "number",
    mask: p
  } = e, v = It(), m = c ?? `pin-input-${v}`, g = d4(), [b, y] = de(!0), [x, _] = de(-1), [w, P] = An({
    defaultValue: Eg(n) || [],
    value: Eg(r),
    onChange: (J) => o == null ? void 0 : o(J.join(""))
  });
  ge(() => {
    if (t) {
      const J = g.first();
      J && requestAnimationFrame(() => {
        J.node.focus();
      });
    }
  }, [g]);
  const k = I(
    (J) => {
      if (!b || !s)
        return;
      const G = g.next(J, !1);
      G && requestAnimationFrame(() => {
        G.node.focus();
      });
    },
    [g, b, s]
  ), R = I(
    (J, G, K = !0) => {
      const te = [...w];
      te[G] = J, P(te), J !== "" && te.length === g.count() && te.every(
        (N) => N != null && N !== ""
      ) ? a == null || a(te.join("")) : K && k(G);
    },
    [w, P, k, a, g]
  ), j = I(() => {
    var J;
    const G = Array(g.count()).fill("");
    P(G);
    const K = g.first();
    (J = K == null ? void 0 : K.node) == null || J.focus();
  }, [g, P]), $ = I((J, G) => {
    let K = G;
    return (J == null ? void 0 : J.length) > 0 && (J[0] === G.charAt(0) ? K = G.charAt(1) : J[0] === G.charAt(1) && (K = G.charAt(0))), K;
  }, []);
  return {
    getInputProps: I(
      (J) => {
        const { index: G, ...K } = J, te = (M) => {
          const re = M.target.value, V = w[G], z = $(V, re);
          if (z === "") {
            R("", G);
            return;
          }
          if (re.length > 2) {
            if (Tg(re, f)) {
              const U = re.split("").filter((oe, ce) => ce < g.count());
              P(U), U.length === g.count() && (a == null || a(U.join("")));
            }
          } else
            Tg(z, f) && R(z, G), y(!0);
        }, Z = (M) => {
          var re;
          if (M.key === "Backspace" && s)
            if (M.target.value === "") {
              const V = g.prev(G, !1);
              V && (R("", G - 1, !1), (re = V.node) == null || re.focus(), y(!0));
            } else
              y(!1);
        }, N = () => {
          _(G);
        }, q = () => {
          _(-1);
        }, he = x === G;
        return {
          "aria-label": "Please enter your pin code",
          inputMode: f === "number" ? "numeric" : "text",
          type: p ? "password" : f === "number" ? "tel" : "text",
          ...K,
          id: `${m}-${G}`,
          disabled: u,
          "aria-invalid": nr(d),
          onChange: ue(K.onChange, te),
          onKeyDown: ue(K.onKeyDown, Z),
          onFocus: ue(K.onFocus, N),
          onBlur: ue(K.onBlur, q),
          value: w[G] || "",
          autoComplete: l ? "one-time-code" : "off",
          placeholder: he ? "" : i
        };
      },
      [
        g,
        x,
        $,
        m,
        u,
        p,
        d,
        s,
        a,
        l,
        i,
        R,
        P,
        f,
        w
      ]
    ),
    id: m,
    descendants: g,
    values: w,
    setValue: R,
    setValues: P,
    clear: j
  };
}
function lw(e = {}, t = null) {
  const { getInputProps: r } = iw(), { index: n, register: o } = f4();
  return r({
    ...e,
    ref: je(o, t),
    index: n
  });
}
function cw(e) {
  const t = Pt("PinInput", e), { children: r, ...n } = Ee(e), { descendants: o, ...a } = sw(n), i = ln(r).map(
    (s) => Tt(s, { __css: t })
  );
  return /* @__PURE__ */ h.jsx(ow, { value: o, children: /* @__PURE__ */ h.jsx(aw, { value: a, children: i }) });
}
cw.displayName = "PinInput";
var uw = O(
  function(t, r) {
    const n = lw(t, r);
    return /* @__PURE__ */ h.jsx(
      E.input,
      {
        ...n,
        className: H("chakra-pin-input", t.className)
      }
    );
  }
);
uw.displayName = "PinInputField";
var [p4, cn] = Ie({
  name: "PopoverContext",
  errorMessage: "usePopoverContext: `context` is undefined. Seems you forgot to wrap all popover components within `<Popover />`"
}), [h4, io] = Ie({
  name: "PopoverStylesContext",
  errorMessage: `usePopoverStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Popover />" `
}), dw = O(
  function(t, r) {
    const { getHeaderProps: n } = cn(), o = io();
    return /* @__PURE__ */ h.jsx(
      E.header,
      {
        ...n(t, r),
        className: H("chakra-popover__header", t.className),
        __css: o.header
      }
    );
  }
);
dw.displayName = "PopoverHeader";
function fw(e) {
  const t = Hr.only(e.children), { getTriggerProps: r } = cn();
  return Tt(t, r(t.props, t.ref));
}
fw.displayName = "PopoverTrigger";
var mo = {
  click: "click",
  hover: "hover"
};
function pw(e = {}) {
  const {
    closeOnBlur: t = !0,
    closeOnEsc: r = !0,
    initialFocusRef: n,
    id: o,
    returnFocusOnClose: a = !0,
    autoFocus: i = !0,
    arrowSize: s,
    arrowShadowColor: l,
    trigger: c = mo.click,
    openDelay: u = 200,
    closeDelay: d = 200,
    isLazy: f,
    lazyBehavior: p = "unmount",
    computePositionOnMount: v,
    ...m
  } = e, { isOpen: g, onClose: b, onOpen: y, onToggle: x } = $p(e), _ = ie(null), w = ie(null), P = ie(null), k = ie(!1), R = ie(!1);
  g && (R.current = !0);
  const [j, $] = de(!1), [L, J] = de(!1), G = It(), K = o ?? G, [te, Z, N, q] = [
    "popover-trigger",
    "popover-content",
    "popover-header",
    "popover-body"
  ].map((ve) => `${ve}-${K}`), {
    referenceRef: he,
    getArrowProps: D,
    getPopperProps: M,
    getArrowInnerProps: re,
    forceUpdate: V
  } = Zl({
    ...m,
    enabled: g || !!v
  }), z = w1({ isOpen: g, ref: P });
  Yx({
    enabled: g,
    ref: w
  }), d1(P, {
    focusRef: w,
    visible: g,
    shouldFocus: a && c === mo.click
  }), EV(P, {
    focusRef: n,
    visible: g,
    shouldFocus: i && c === mo.click
  });
  const U = Np({
    wasSelected: R.current,
    enabled: f,
    mode: p,
    isSelected: z.present
  }), oe = I(
    (ve = {}, Ne = null) => {
      const $e = {
        ...ve,
        style: {
          ...ve.style,
          transformOrigin: St.transformOrigin.varRef,
          [St.arrowSize.var]: s ? `${s}px` : void 0,
          [St.arrowShadowColor.var]: l
        },
        ref: je(P, Ne),
        children: U ? ve.children : null,
        id: Z,
        tabIndex: -1,
        role: "dialog",
        onKeyDown: ue(ve.onKeyDown, (Oe) => {
          r && Oe.key === "Escape" && b();
        }),
        onBlur: ue(ve.onBlur, (Oe) => {
          const vt = Ag(Oe), Qe = vu(P.current, vt), xt = vu(w.current, vt);
          g && t && (!Qe && !xt) && b();
        }),
        "aria-labelledby": j ? N : void 0,
        "aria-describedby": L ? q : void 0
      };
      return c === mo.hover && ($e.role = "tooltip", $e.onMouseEnter = ue(ve.onMouseEnter, () => {
        k.current = !0;
      }), $e.onMouseLeave = ue(
        ve.onMouseLeave,
        (Oe) => {
          Oe.nativeEvent.relatedTarget !== null && (k.current = !1, setTimeout(() => b(), d));
        }
      )), $e;
    },
    [
      U,
      Z,
      j,
      N,
      L,
      q,
      c,
      r,
      b,
      g,
      t,
      d,
      l,
      s
    ]
  ), ce = I(
    (ve = {}, Ne = null) => M(
      {
        ...ve,
        style: {
          visibility: g ? "visible" : "hidden",
          ...ve.style
        }
      },
      Ne
    ),
    [g, M]
  ), se = I(
    (ve, Ne = null) => ({
      ...ve,
      ref: je(Ne, _, he)
    }),
    [_, he]
  ), W = ie(), Y = ie(), ne = I(
    (ve) => {
      _.current == null && he(ve);
    },
    [he]
  ), B = I(
    (ve = {}, Ne = null) => {
      const $e = {
        ...ve,
        ref: je(w, Ne, ne),
        id: te,
        "aria-haspopup": "dialog",
        "aria-expanded": g,
        "aria-controls": Z
      };
      return c === mo.click && ($e.onClick = ue(ve.onClick, x)), c === mo.hover && ($e.onFocus = ue(ve.onFocus, () => {
        W.current === void 0 && y();
      }), $e.onBlur = ue(ve.onBlur, (Oe) => {
        const vt = Ag(Oe), Qe = !vu(P.current, vt);
        g && t && Qe && b();
      }), $e.onKeyDown = ue(ve.onKeyDown, (Oe) => {
        Oe.key === "Escape" && b();
      }), $e.onMouseEnter = ue(ve.onMouseEnter, () => {
        k.current = !0, W.current = window.setTimeout(() => y(), u);
      }), $e.onMouseLeave = ue(ve.onMouseLeave, () => {
        k.current = !1, W.current && (clearTimeout(W.current), W.current = void 0), Y.current = window.setTimeout(() => {
          k.current === !1 && b();
        }, d);
      })), $e;
    },
    [
      te,
      g,
      Z,
      c,
      ne,
      x,
      y,
      t,
      b,
      u,
      d
    ]
  );
  ge(() => () => {
    W.current && clearTimeout(W.current), Y.current && clearTimeout(Y.current);
  }, []);
  const Ce = I(
    (ve = {}, Ne = null) => ({
      ...ve,
      id: N,
      ref: je(Ne, ($e) => {
        $(!!$e);
      })
    }),
    [N]
  ), ee = I(
    (ve = {}, Ne = null) => ({
      ...ve,
      id: q,
      ref: je(Ne, ($e) => {
        J(!!$e);
      })
    }),
    [q]
  );
  return {
    forceUpdate: V,
    isOpen: g,
    onAnimationComplete: z.onComplete,
    onClose: b,
    getAnchorProps: se,
    getArrowProps: D,
    getArrowInnerProps: re,
    getPopoverPositionerProps: ce,
    getPopoverProps: oe,
    getTriggerProps: B,
    getHeaderProps: Ce,
    getBodyProps: ee
  };
}
function vu(e, t) {
  return e === t || (e == null ? void 0 : e.contains(t));
}
function Ag(e) {
  var t;
  const r = e.currentTarget.ownerDocument.activeElement;
  return (t = e.relatedTarget) != null ? t : r;
}
function hw(e) {
  const t = Ze("Popover", e), { children: r, ...n } = Ee(e), o = sr(), a = pw({ ...n, direction: o.direction });
  return /* @__PURE__ */ h.jsx(p4, { value: a, children: /* @__PURE__ */ h.jsx(h4, { value: t, children: Bt(r, {
    isOpen: a.isOpen,
    onClose: a.onClose,
    forceUpdate: a.forceUpdate
  }) }) });
}
hw.displayName = "Popover";
function mw(e) {
  const t = Hr.only(e.children), { getAnchorProps: r } = cn();
  return Tt(t, r(t.props, t.ref));
}
mw.displayName = "PopoverAnchor";
var gu = (e, t) => t ? `${e}.${t}, ${t}` : void 0;
function vw(e) {
  var t;
  const { bg: r, bgColor: n, backgroundColor: o, shadow: a, boxShadow: i, shadowColor: s } = e, { getArrowProps: l, getArrowInnerProps: c } = cn(), u = io(), d = (t = r ?? n) != null ? t : o, f = a ?? i;
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...l(),
      className: "chakra-popover__arrow-positioner",
      children: /* @__PURE__ */ h.jsx(
        E.div,
        {
          className: H("chakra-popover__arrow", e.className),
          ...c(e),
          __css: {
            "--popper-arrow-shadow-color": gu("colors", s),
            "--popper-arrow-bg": gu("colors", d),
            "--popper-arrow-shadow": gu("shadows", f),
            ...u.arrow
          }
        }
      )
    }
  );
}
vw.displayName = "PopoverArrow";
var gw = O(
  function(t, r) {
    const { getBodyProps: n } = cn(), o = io();
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...n(t, r),
        className: H("chakra-popover__body", t.className),
        __css: o.body
      }
    );
  }
);
gw.displayName = "PopoverBody";
var yw = O(
  function(t, r) {
    const { onClose: n } = cn(), o = io();
    return /* @__PURE__ */ h.jsx(
      hi,
      {
        size: "sm",
        onClick: n,
        className: H("chakra-popover__close-btn", t.className),
        __css: o.closeButton,
        ref: r,
        ...t
      }
    );
  }
);
yw.displayName = "PopoverCloseButton";
function m4(e) {
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
var v4 = {
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
}, g4 = E(Tr.section), bw = O(function(t, r) {
  const { variants: n = v4, ...o } = t, { isOpen: a } = cn();
  return /* @__PURE__ */ h.jsx(
    g4,
    {
      ref: r,
      variants: m4(n),
      initial: !1,
      animate: a ? "enter" : "exit",
      ...o
    }
  );
});
bw.displayName = "PopoverTransition";
var xw = O(
  function(t, r) {
    const { rootProps: n, motionProps: o, ...a } = t, { getPopoverProps: i, getPopoverPositionerProps: s, onAnimationComplete: l } = cn(), c = io(), u = {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      ...c.content
    };
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...s(n),
        __css: c.popper,
        className: "chakra-popover__popper",
        children: /* @__PURE__ */ h.jsx(
          bw,
          {
            ...o,
            ...i(a, r),
            onAnimationComplete: ml(
              l,
              a.onAnimationComplete
            ),
            className: H("chakra-popover__content", t.className),
            __css: u
          }
        )
      }
    );
  }
);
xw.displayName = "PopoverContent";
function Sw(e) {
  const t = io();
  return /* @__PURE__ */ h.jsx(
    E.footer,
    {
      ...e,
      className: H("chakra-popover__footer", e.className),
      __css: t.footer
    }
  );
}
Sw.displayName = "PopoverFooter";
var ww = E("div", {
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
ww.displayName = "CircularProgressLabel";
var pd = (e) => /* @__PURE__ */ h.jsx(E.circle, { cx: 50, cy: 50, r: 42, fill: "transparent", ...e });
pd.displayName = "Circle";
function y4(e, t, r) {
  return (e - t) * 100 / (r - t);
}
var b4 = Er({
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
}), x4 = Er({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), S4 = Er({
  "0%": { left: "-40%" },
  "100%": { left: "100%" }
}), w4 = Er({
  from: { backgroundPosition: "1rem 0" },
  to: { backgroundPosition: "0 0" }
});
function _w(e) {
  const {
    value: t = 0,
    min: r,
    max: n,
    valueText: o,
    getValueText: a,
    isIndeterminate: i,
    role: s = "progressbar"
  } = e, l = y4(t, r, n);
  return {
    bind: {
      "data-indeterminate": i ? "" : void 0,
      "aria-valuemax": n,
      "aria-valuemin": r,
      "aria-valuenow": i ? void 0 : t,
      "aria-valuetext": (() => {
        if (t != null)
          return typeof a == "function" ? a(t, l) : o;
      })(),
      role: s
    },
    percent: l,
    value: t
  };
}
var Cw = (e) => {
  const { size: t, isIndeterminate: r, ...n } = e;
  return /* @__PURE__ */ h.jsx(
    E.svg,
    {
      viewBox: "0 0 100 100",
      __css: {
        width: t,
        height: t,
        animation: r ? `${x4} 2s linear infinite` : void 0
      },
      ...n
    }
  );
};
Cw.displayName = "Shape";
var kw = O(
  (e, t) => {
    var r;
    const {
      size: n = "48px",
      max: o = 100,
      min: a = 0,
      valueText: i,
      getValueText: s,
      value: l,
      capIsRound: c,
      children: u,
      thickness: d = "10px",
      color: f = "#0078d4",
      trackColor: p = "#edebe9",
      isIndeterminate: v,
      ...m
    } = e, g = _w({
      min: a,
      max: o,
      value: l,
      valueText: i,
      getValueText: s,
      isIndeterminate: v
    }), b = v ? void 0 : ((r = g.percent) != null ? r : 0) * 2.64, y = b == null ? void 0 : `${b} ${264 - b}`, x = v ? {
      css: { animation: `${b4} 1.5s linear infinite` }
    } : {
      strokeDashoffset: 66,
      strokeDasharray: y,
      transitionProperty: "stroke-dasharray, stroke",
      transitionDuration: "0.6s",
      transitionTimingFunction: "ease"
    }, _ = {
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      fontSize: n
    };
    return /* @__PURE__ */ h.jsxs(
      E.div,
      {
        ref: t,
        className: "chakra-progress",
        ...g.bind,
        ...m,
        __css: _,
        children: [
          /* @__PURE__ */ h.jsxs(Cw, { size: n, isIndeterminate: v, children: [
            /* @__PURE__ */ h.jsx(
              pd,
              {
                stroke: p,
                strokeWidth: d,
                className: "chakra-progress__track"
              }
            ),
            /* @__PURE__ */ h.jsx(
              pd,
              {
                stroke: f,
                strokeWidth: d,
                className: "chakra-progress__indicator",
                strokeLinecap: c ? "round" : void 0,
                opacity: g.value === 0 && !v ? 0 : void 0,
                ...x
              }
            )
          ] }),
          u
        ]
      }
    );
  }
);
kw.displayName = "CircularProgress";
var [_4, Up] = Ie({
  name: "ProgressStylesContext",
  errorMessage: `useProgressStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Progress />" `
}), C4 = O(
  (e, t) => {
    const { min: r, max: n, value: o, isIndeterminate: a, role: i, ...s } = e, l = _w({
      value: o,
      min: r,
      max: n,
      isIndeterminate: a,
      role: i
    }), u = {
      height: "100%",
      ...Up().filledTrack
    };
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: t,
        style: { width: `${l.percent}%`, ...s.style },
        ...l.bind,
        ...s,
        __css: u
      }
    );
  }
), Pw = O((e, t) => {
  var r;
  const {
    value: n,
    min: o = 0,
    max: a = 100,
    hasStripe: i,
    isAnimated: s,
    children: l,
    borderRadius: c,
    isIndeterminate: u,
    "aria-label": d,
    "aria-labelledby": f,
    "aria-valuetext": p,
    title: v,
    role: m,
    ...g
  } = Ee(e), b = Ze("Progress", e), y = c ?? ((r = b.track) == null ? void 0 : r.borderRadius), x = { animation: `${w4} 1s linear infinite` }, P = {
    ...!u && i && s && x,
    ...u && {
      position: "absolute",
      willChange: "left",
      minWidth: "50%",
      animation: `${S4} 1s ease infinite normal none running`
    }
  }, k = {
    overflow: "hidden",
    position: "relative",
    ...b.track
  };
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: t,
      borderRadius: y,
      __css: k,
      ...g,
      children: /* @__PURE__ */ h.jsxs(_4, { value: b, children: [
        /* @__PURE__ */ h.jsx(
          C4,
          {
            "aria-label": d,
            "aria-labelledby": f,
            "aria-valuetext": p,
            min: o,
            max: a,
            value: n,
            isIndeterminate: u,
            css: P,
            borderRadius: y,
            title: v,
            role: m
          }
        ),
        l
      ] })
    }
  );
});
Pw.displayName = "Progress";
var Ew = (e) => {
  const r = {
    top: "50%",
    left: "50%",
    width: "100%",
    textAlign: "center",
    position: "absolute",
    transform: "translate(-50%, -50%)",
    ...Up().label
  };
  return /* @__PURE__ */ h.jsx(E.div, { ...e, __css: r });
};
Ew.displayName = "ProgressLabel";
function k4(e) {
  return e && _t(e) && _t(e.target);
}
function Tw(e = {}) {
  const {
    onChange: t,
    value: r,
    defaultValue: n,
    name: o,
    isDisabled: a,
    isFocusable: i,
    isNative: s,
    ...l
  } = e, [c, u] = de(n || ""), d = typeof r < "u", f = d ? r : c, p = ie(null), v = I(() => {
    const w = p.current;
    if (!w)
      return;
    let P = "input:not(:disabled):checked";
    const k = w.querySelector(
      P
    );
    if (k) {
      k.focus();
      return;
    }
    P = "input:not(:disabled)";
    const R = w.querySelector(P);
    R == null || R.focus();
  }, []), g = `radio-${It()}`, b = o || g, y = I(
    (w) => {
      const P = k4(w) ? w.target.value : w;
      d || u(P), t == null || t(String(P));
    },
    [t, d]
  ), x = I(
    (w = {}, P = null) => ({
      ...w,
      ref: je(P, p),
      role: "radiogroup"
    }),
    []
  ), _ = I(
    (w = {}, P = null) => ({
      ...w,
      ref: P,
      name: b,
      [s ? "checked" : "isChecked"]: f != null ? w.value === f : void 0,
      onChange(R) {
        y(R);
      },
      "data-radiogroup": !0
    }),
    [s, b, y, f]
  );
  return {
    getRootProps: x,
    getRadioProps: _,
    name: b,
    ref: p,
    focus: v,
    setValue: u,
    value: f,
    onChange: y,
    isDisabled: a,
    isFocusable: i,
    htmlProps: l
  };
}
var [P4, Gp] = Ie({
  name: "RadioGroupContext",
  strict: !1
}), Aw = O((e, t) => {
  const {
    colorScheme: r,
    size: n,
    variant: o,
    children: a,
    className: i,
    isDisabled: s,
    isFocusable: l,
    ...c
  } = e, { value: u, onChange: d, getRootProps: f, name: p, htmlProps: v } = Tw(c), m = we(
    () => ({
      name: p,
      size: n,
      onChange: d,
      colorScheme: r,
      value: u,
      variant: o,
      isDisabled: s,
      isFocusable: l
    }),
    [
      p,
      n,
      d,
      r,
      u,
      o,
      s,
      l
    ]
  );
  return /* @__PURE__ */ h.jsx(P4, { value: m, children: /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...f(v, t),
      className: H("chakra-radio-group", i),
      children: a
    }
  ) });
});
Aw.displayName = "RadioGroup";
var E4 = {
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
function Iw(e = {}) {
  const {
    defaultChecked: t,
    isChecked: r,
    isFocusable: n,
    isDisabled: o,
    isReadOnly: a,
    isRequired: i,
    onChange: s,
    isInvalid: l,
    name: c,
    value: u,
    id: d,
    "data-radiogroup": f,
    "aria-describedby": p,
    ...v
  } = e, m = `radio-${It()}`, g = In(), y = !!Gp() || !!f;
  let _ = !!g && !y ? g.id : m;
  _ = d ?? _;
  const w = o ?? (g == null ? void 0 : g.isDisabled), P = a ?? (g == null ? void 0 : g.isReadOnly), k = i ?? (g == null ? void 0 : g.isRequired), R = l ?? (g == null ? void 0 : g.isInvalid), [j, $] = de(!1), [L, J] = de(!1), [G, K] = de(!1), [te, Z] = de(!1), [N, q] = de(!!t), he = typeof r < "u", D = he ? r : N;
  ge(() => Bx($), []);
  const M = I(
    (ne) => {
      if (P || w) {
        ne.preventDefault();
        return;
      }
      he || q(ne.target.checked), s == null || s(ne);
    },
    [he, w, P, s]
  ), re = I(
    (ne) => {
      ne.key === " " && Z(!0);
    },
    [Z]
  ), V = I(
    (ne) => {
      ne.key === " " && Z(!1);
    },
    [Z]
  ), z = I(
    (ne = {}, B = null) => ({
      ...ne,
      ref: B,
      "data-active": Ae(te),
      "data-hover": Ae(G),
      "data-disabled": Ae(w),
      "data-invalid": Ae(R),
      "data-checked": Ae(D),
      "data-focus": Ae(L),
      "data-focus-visible": Ae(L && j),
      "data-readonly": Ae(P),
      "aria-hidden": !0,
      onMouseDown: ue(ne.onMouseDown, () => Z(!0)),
      onMouseUp: ue(ne.onMouseUp, () => Z(!1)),
      onMouseEnter: ue(
        ne.onMouseEnter,
        () => K(!0)
      ),
      onMouseLeave: ue(
        ne.onMouseLeave,
        () => K(!1)
      )
    }),
    [
      te,
      G,
      w,
      R,
      D,
      L,
      P,
      j
    ]
  ), { onFocus: U, onBlur: oe } = g ?? {}, ce = I(
    (ne = {}, B = null) => {
      const Ce = w && !n;
      return {
        ...ne,
        id: _,
        ref: B,
        type: "radio",
        name: c,
        value: u,
        onChange: ue(ne.onChange, M),
        onBlur: ue(
          oe,
          ne.onBlur,
          () => J(!1)
        ),
        onFocus: ue(
          U,
          ne.onFocus,
          () => J(!0)
        ),
        onKeyDown: ue(ne.onKeyDown, re),
        onKeyUp: ue(ne.onKeyUp, V),
        checked: D,
        disabled: Ce,
        readOnly: P,
        required: k,
        "aria-invalid": nr(R),
        "aria-disabled": nr(Ce),
        "aria-required": nr(k),
        "data-readonly": Ae(P),
        "aria-describedby": p,
        style: E4
      };
    },
    [
      w,
      n,
      _,
      c,
      u,
      M,
      oe,
      U,
      re,
      V,
      D,
      P,
      k,
      R,
      p
    ]
  );
  return {
    state: {
      isInvalid: R,
      isFocused: L,
      isChecked: D,
      isActive: te,
      isHovered: G,
      isDisabled: w,
      isReadOnly: P,
      isRequired: k
    },
    getCheckboxProps: z,
    getRadioProps: z,
    getInputProps: ce,
    getLabelProps: (ne = {}, B = null) => ({
      ...ne,
      ref: B,
      onMouseDown: ue(ne.onMouseDown, T4),
      "data-disabled": Ae(w),
      "data-checked": Ae(D),
      "data-invalid": Ae(R)
    }),
    getRootProps: (ne, B = null) => ({
      ...ne,
      ref: B,
      "data-disabled": Ae(w),
      "data-checked": Ae(D),
      "data-invalid": Ae(R)
    }),
    htmlProps: v
  };
}
function T4(e) {
  e.preventDefault(), e.stopPropagation();
}
function A4(e, t) {
  const r = {}, n = {};
  for (const [o, a] of Object.entries(e))
    t.includes(o) ? r[o] = a : n[o] = a;
  return [r, n];
}
var Rw = O((e, t) => {
  var r;
  const n = Gp(), { onChange: o, value: a } = e, i = Ze("Radio", { ...n, ...e }), s = Ee(e), {
    spacing: l = "0.5rem",
    children: c,
    isDisabled: u = n == null ? void 0 : n.isDisabled,
    isFocusable: d = n == null ? void 0 : n.isFocusable,
    inputProps: f,
    ...p
  } = s;
  let v = e.isChecked;
  (n == null ? void 0 : n.value) != null && a != null && (v = n.value === a);
  let m = o;
  n != null && n.onChange && a != null && (m = ml(n.onChange, o));
  const g = (r = e == null ? void 0 : e.name) != null ? r : n == null ? void 0 : n.name, {
    getInputProps: b,
    getCheckboxProps: y,
    getLabelProps: x,
    getRootProps: _,
    htmlProps: w
  } = Iw({
    ...p,
    isChecked: v,
    isFocusable: d,
    isDisabled: u,
    onChange: m,
    name: g
  }), [P, k] = A4(w, Md), R = y(k), j = b(f, t), $ = x(), L = Object.assign({}, P, _()), J = {
    display: "inline-flex",
    alignItems: "center",
    verticalAlign: "top",
    cursor: "pointer",
    position: "relative",
    ...i.container
  }, G = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    ...i.control
  }, K = {
    userSelect: "none",
    marginStart: l,
    ...i.label
  };
  return /* @__PURE__ */ h.jsxs(E.label, { className: "chakra-radio", ...L, __css: J, children: [
    /* @__PURE__ */ h.jsx("input", { className: "chakra-radio__input", ...j }),
    /* @__PURE__ */ h.jsx(
      E.span,
      {
        className: "chakra-radio__control",
        ...R,
        __css: G
      }
    ),
    c && /* @__PURE__ */ h.jsx(
      E.span,
      {
        className: "chakra-radio__label",
        ...$,
        __css: K,
        children: c
      }
    )
  ] });
});
Rw.displayName = "Radio";
var qp = O(
  function(t, r) {
    const { children: n, placeholder: o, className: a, ...i } = t;
    return /* @__PURE__ */ h.jsxs(
      E.select,
      {
        ...i,
        ref: r,
        className: H("chakra-select", a),
        children: [
          o && /* @__PURE__ */ h.jsx("option", { value: "", children: o }),
          n
        ]
      }
    );
  }
);
qp.displayName = "SelectField";
function I4(e, t) {
  const r = {}, n = {};
  for (const [o, a] of Object.entries(e))
    t.includes(o) ? r[o] = a : n[o] = a;
  return [r, n];
}
var $w = O((e, t) => {
  var r;
  const n = Ze("Select", e), {
    rootProps: o,
    placeholder: a,
    icon: i,
    color: s,
    height: l,
    h: c,
    minH: u,
    minHeight: d,
    iconColor: f,
    iconSize: p,
    ...v
  } = Ee(e), [m, g] = I4(v, Md), b = Fl(g), y = {
    width: "100%",
    height: "fit-content",
    position: "relative",
    color: s
  }, x = {
    paddingEnd: "2rem",
    ...n.field,
    _focus: {
      zIndex: "unset",
      ...(r = n.field) == null ? void 0 : r._focus
    }
  };
  return /* @__PURE__ */ h.jsxs(
    E.div,
    {
      className: "chakra-select__wrapper",
      __css: y,
      ...m,
      ...o,
      children: [
        /* @__PURE__ */ h.jsx(
          qp,
          {
            ref: t,
            height: c ?? l,
            minH: u ?? d,
            placeholder: a,
            ...b,
            __css: x,
            children: e.children
          }
        ),
        /* @__PURE__ */ h.jsx(
          Nw,
          {
            "data-disabled": Ae(b.disabled),
            ...(f || s) && { color: f || s },
            __css: n.icon,
            ...p && { fontSize: p },
            children: i
          }
        )
      ]
    }
  );
});
$w.displayName = "Select";
var R4 = (e) => /* @__PURE__ */ h.jsx("svg", { viewBox: "0 0 24 24", ...e, children: /* @__PURE__ */ h.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"
  }
) }), $4 = E("div", {
  baseStyle: {
    position: "absolute",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    pointerEvents: "none",
    top: "50%",
    transform: "translateY(-50%)"
  }
}), Nw = (e) => {
  const { children: t = /* @__PURE__ */ h.jsx(R4, {}), ...r } = e, n = Tt(t, {
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
  return /* @__PURE__ */ h.jsx($4, { ...r, className: "chakra-select__icon-wrapper", children: Xo(t) ? n : null });
};
Nw.displayName = "SelectIcon";
function N4() {
  const e = ie(!0);
  return ge(() => {
    e.current = !1;
  }, []), e.current;
}
function O4(e) {
  const t = ie();
  return ge(() => {
    t.current = e;
  }, [e]), t.current;
}
var D4 = E("div", {
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
}), hd = Se("skeleton-start-color"), md = Se("skeleton-end-color"), j4 = Er({
  from: { opacity: 0 },
  to: { opacity: 1 }
}), M4 = Er({
  from: {
    borderColor: hd.reference,
    background: hd.reference
  },
  to: {
    borderColor: md.reference,
    background: md.reference
  }
}), tc = O((e, t) => {
  const r = {
    ...e,
    fadeDuration: typeof e.fadeDuration == "number" ? e.fadeDuration : 0.4,
    speed: typeof e.speed == "number" ? e.speed : 0.8
  }, n = Pt("Skeleton", r), o = N4(), {
    startColor: a = "",
    endColor: i = "",
    isLoaded: s,
    fadeDuration: l,
    speed: c,
    className: u,
    fitContent: d,
    ...f
  } = Ee(r), [p, v] = cy("colors", [
    a,
    i
  ]), m = O4(s), g = H("chakra-skeleton", u), b = {
    ...p && { [hd.variable]: p },
    ...v && { [md.variable]: v }
  };
  if (s) {
    const y = o || m ? "none" : `${j4} ${l}s`;
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: t,
        className: g,
        __css: { animation: y },
        ...f
      }
    );
  }
  return /* @__PURE__ */ h.jsx(
    D4,
    {
      ref: t,
      className: g,
      ...f,
      __css: {
        width: d ? "fit-content" : void 0,
        ...n,
        ...b,
        _dark: { ...n._dark, ...b },
        animation: `${c}s linear infinite alternate ${M4}`
      }
    }
  );
});
tc.displayName = "Skeleton";
var Ow = ({
  size: e = "2rem",
  ...t
}) => /* @__PURE__ */ h.jsx(tc, { borderRadius: "full", boxSize: e, ...t });
Ow.displayName = "SkeletonCircle";
function F4(e) {
  return Array(e).fill(1).map((t, r) => r + 1);
}
var Ig = 3, Dw = (e) => {
  const {
    noOfLines: t = Ig,
    spacing: r = "0.5rem",
    skeletonHeight: n = "0.5rem",
    className: o,
    startColor: a,
    endColor: i,
    isLoaded: s,
    fadeDuration: l,
    speed: c,
    variant: u,
    size: d,
    colorScheme: f,
    children: p,
    ...v
  } = e, m = c1(
    typeof t == "number" ? [t] : t
  ) || Ig, g = F4(m), b = (x) => m > 1 && x === g.length ? "80%" : "100%", y = H("chakra-skeleton__group", o);
  return /* @__PURE__ */ h.jsx(E.div, { className: y, ...v, children: g.map((x, _) => {
    if (s && _ > 0)
      return null;
    const w = s ? null : {
      mb: x === g.length ? "0" : r,
      width: b(x),
      height: n
    };
    return /* @__PURE__ */ h.jsx(
      tc,
      {
        startColor: a,
        endColor: i,
        isLoaded: s,
        fadeDuration: l,
        speed: c,
        variant: u,
        size: d,
        colorScheme: f,
        ...w,
        children: _ === 0 ? p : void 0
      },
      g.length.toString() + x
    );
  }) });
};
Dw.displayName = "SkeletonText";
var jw = "chakra-skip-nav";
function B4(e) {
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
var Mw = O(
  function(t, r) {
    const n = Pt("SkipLink", t), { id: o = jw, ...a } = Ee(t);
    return /* @__PURE__ */ h.jsx(E.a, { ...a, ref: r, href: `#${o}`, __css: B4(n) });
  }
);
Mw.displayName = "SkipNavLink";
var Fw = O(
  function(t, r) {
    const { id: n = jw, ...o } = t;
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        id: n,
        tabIndex: -1,
        style: { outline: 0 },
        ...o
      }
    );
  }
);
Fw.displayName = "SkipNavContent";
var fr = (e) => e ? "" : void 0, Fo = (e) => e ? !0 : void 0, Nn = (...e) => e.filter(Boolean).join(" ");
function Bo(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function L4(e) {
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
function xa(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
var Es = { width: 0, height: 0 }, ns = (e) => e || Es;
function Bw(e) {
  const { orientation: t, thumbPercents: r, thumbRects: n, isReversed: o } = e, a = (m) => {
    var g;
    const b = (g = n[m]) != null ? g : Es;
    return {
      position: "absolute",
      userSelect: "none",
      WebkitUserSelect: "none",
      MozUserSelect: "none",
      msUserSelect: "none",
      touchAction: "none",
      ...xa({
        orientation: t,
        vertical: {
          bottom: `calc(${r[m]}% - ${b.height / 2}px)`
        },
        horizontal: {
          left: `calc(${r[m]}% - ${b.width / 2}px)`
        }
      })
    };
  }, i = t === "vertical" ? n.reduce(
    (m, g) => ns(m).height > ns(g).height ? m : g,
    Es
  ) : n.reduce(
    (m, g) => ns(m).width > ns(g).width ? m : g,
    Es
  ), s = {
    position: "relative",
    touchAction: "none",
    WebkitTapHighlightColor: "rgba(0,0,0,0)",
    userSelect: "none",
    outline: 0,
    ...xa({
      orientation: t,
      vertical: i ? {
        paddingLeft: i.width / 2,
        paddingRight: i.width / 2
      } : {},
      horizontal: i ? {
        paddingTop: i.height / 2,
        paddingBottom: i.height / 2
      } : {}
    })
  }, l = {
    position: "absolute",
    ...xa({
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
  }, c = r.length === 1, u = [0, o ? 100 - r[0] : r[0]], d = c ? u : r;
  let f = d[0];
  !c && o && (f = 100 - f);
  const p = Math.abs(d[d.length - 1] - d[0]), v = {
    ...l,
    ...xa({
      orientation: t,
      vertical: o ? { height: `${p}%`, top: `${f}%` } : { height: `${p}%`, bottom: `${f}%` },
      horizontal: o ? { width: `${p}%`, right: `${f}%` } : { width: `${p}%`, left: `${f}%` }
    })
  };
  return { trackStyle: l, innerTrackStyle: v, rootStyle: s, getThumbStyle: a };
}
function Lw(e) {
  const { isReversed: t, direction: r, orientation: n } = e;
  return r === "ltr" || n === "vertical" ? t : !t;
}
function V4(e, t, r, n) {
  return e.addEventListener(t, r, n), () => {
    e.removeEventListener(t, r, n);
  };
}
function z4(e) {
  const t = H4(e);
  return typeof t.PointerEvent < "u" && e instanceof t.PointerEvent ? e.pointerType === "mouse" : e instanceof t.MouseEvent;
}
function Vw(e) {
  return !!e.touches;
}
function W4(e) {
  return Vw(e) && e.touches.length > 1;
}
function H4(e) {
  var t;
  return (t = e.view) != null ? t : window;
}
function U4(e, t = "page") {
  const r = e.touches[0] || e.changedTouches[0];
  return { x: r[`${t}X`], y: r[`${t}Y`] };
}
function G4(e, t = "page") {
  return {
    x: e[`${t}X`],
    y: e[`${t}Y`]
  };
}
function zw(e, t = "page") {
  return Vw(e) ? U4(e, t) : G4(e, t);
}
function q4(e) {
  return (t) => {
    const r = z4(t);
    (!r || r && t.button === 0) && e(t);
  };
}
function K4(e, t = !1) {
  function r(o) {
    e(o, { point: zw(o) });
  }
  return t ? q4(r) : r;
}
function Ts(e, t, r, n) {
  return V4(e, t, K4(r, t === "pointerdown"), n);
}
var Y4 = Object.defineProperty, X4 = (e, t, r) => t in e ? Y4(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Sr = (e, t, r) => (X4(e, typeof t != "symbol" ? t + "" : t, r), r), Z4 = class {
  constructor(e, t, r) {
    Sr(this, "history", []), Sr(this, "startEvent", null), Sr(this, "lastEvent", null), Sr(this, "lastEventInfo", null), Sr(this, "handlers", {}), Sr(this, "removeListeners", () => {
    }), Sr(this, "threshold", 3), Sr(this, "win"), Sr(this, "updatePoint", () => {
      if (!(this.lastEvent && this.lastEventInfo))
        return;
      const s = yu(this.lastEventInfo, this.history), l = this.startEvent !== null, c = t6(s.offset, { x: 0, y: 0 }) >= this.threshold;
      if (!l && !c)
        return;
      const { timestamp: u } = Fs();
      this.history.push({ ...s.point, timestamp: u });
      const { onStart: d, onMove: f } = this.handlers;
      l || (d == null || d(this.lastEvent, s), this.startEvent = this.lastEvent), f == null || f(this.lastEvent, s);
    }), Sr(this, "onPointerMove", (s, l) => {
      this.lastEvent = s, this.lastEventInfo = l, gb.update(this.updatePoint, !0);
    }), Sr(this, "onPointerUp", (s, l) => {
      const c = yu(l, this.history), { onEnd: u, onSessionEnd: d } = this.handlers;
      d == null || d(s, c), this.end(), !(!u || !this.startEvent) && (u == null || u(s, c));
    });
    var n;
    if (this.win = (n = e.view) != null ? n : window, W4(e))
      return;
    this.handlers = t, r && (this.threshold = r), e.stopPropagation(), e.preventDefault();
    const o = { point: zw(e) }, { timestamp: a } = Fs();
    this.history = [{ ...o.point, timestamp: a }];
    const { onSessionStart: i } = t;
    i == null || i(e, yu(o, this.history)), this.removeListeners = e6(
      Ts(this.win, "pointermove", this.onPointerMove),
      Ts(this.win, "pointerup", this.onPointerUp),
      Ts(this.win, "pointercancel", this.onPointerUp)
    );
  }
  updateHandlers(e) {
    this.handlers = e;
  }
  end() {
    var e;
    (e = this.removeListeners) == null || e.call(this), yb.update(this.updatePoint);
  }
};
function Rg(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function yu(e, t) {
  return {
    point: e.point,
    delta: Rg(e.point, t[t.length - 1]),
    offset: Rg(e.point, t[0]),
    velocity: Q4(t, 0.1)
  };
}
var J4 = (e) => e * 1e3;
function Q4(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = e[e.length - 1];
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > J4(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const a = (o.timestamp - n.timestamp) / 1e3;
  if (a === 0)
    return { x: 0, y: 0 };
  const i = {
    x: (o.x - n.x) / a,
    y: (o.y - n.y) / a
  };
  return i.x === 1 / 0 && (i.x = 0), i.y === 1 / 0 && (i.y = 0), i;
}
function e6(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
function bu(e, t) {
  return Math.abs(e - t);
}
function $g(e) {
  return "x" in e && "y" in e;
}
function t6(e, t) {
  if (typeof e == "number" && typeof t == "number")
    return bu(e, t);
  if ($g(e) && $g(t)) {
    const r = bu(e.x, t.x), n = bu(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
function Ww(e) {
  const t = ie(null);
  return t.current = e, t;
}
function Hw(e, t) {
  const {
    onPan: r,
    onPanStart: n,
    onPanEnd: o,
    onPanSessionStart: a,
    onPanSessionEnd: i,
    threshold: s
  } = t, l = !!(r || n || o || a || i), c = ie(null), u = Ww({
    onSessionStart: a,
    onSessionEnd: i,
    onStart: n,
    onMove: r,
    onEnd(d, f) {
      c.current = null, o == null || o(d, f);
    }
  });
  ge(() => {
    var d;
    (d = c.current) == null || d.updateHandlers(u.current);
  }), ge(() => {
    const d = e.current;
    if (!d || !l)
      return;
    function f(p) {
      c.current = new Z4(p, u.current, s);
    }
    return Ts(d, "pointerdown", f);
  }, [e, l, u, s]), ge(() => () => {
    var d;
    (d = c.current) == null || d.end(), c.current = null;
  }, []);
}
function r6(e, t) {
  if (!e) {
    t(void 0);
    return;
  }
  t({ width: e.offsetWidth, height: e.offsetHeight });
  const r = e.ownerDocument.defaultView ?? window, n = new r.ResizeObserver((o) => {
    if (!Array.isArray(o) || !o.length)
      return;
    const [a] = o;
    let i, s;
    if ("borderBoxSize" in a) {
      const l = a.borderBoxSize, c = Array.isArray(l) ? l[0] : l;
      i = c.inlineSize, s = c.blockSize;
    } else
      i = e.offsetWidth, s = e.offsetHeight;
    t({ width: i, height: s });
  });
  return n.observe(e, { box: "border-box" }), () => n.unobserve(e);
}
var n6 = globalThis != null && globalThis.document ? Qa : ge;
function o6(e, t) {
  var r, n;
  if (!e || !e.parentElement)
    return;
  const o = (n = (r = e.ownerDocument) == null ? void 0 : r.defaultView) != null ? n : window, a = new o.MutationObserver(() => {
    t();
  });
  return a.observe(e.parentElement, { childList: !0 }), () => {
    a.disconnect();
  };
}
function Uw({
  getNodes: e,
  observeMutation: t = !0
}) {
  const [r, n] = de([]), [o, a] = de(0);
  return n6(() => {
    const i = e(), s = i.map(
      (l, c) => r6(l, (u) => {
        n((d) => [
          ...d.slice(0, c),
          u,
          ...d.slice(c + 1)
        ]);
      })
    );
    if (t) {
      const l = i[0];
      s.push(
        o6(l, () => {
          a((c) => c + 1);
        })
      );
    }
    return () => {
      s.forEach((l) => {
        l == null || l();
      });
    };
  }, [o]), r;
}
function a6(e) {
  return typeof e == "object" && e !== null && "current" in e;
}
function i6(e) {
  const [t] = Uw({
    observeMutation: !1,
    getNodes() {
      return [a6(e) ? e.current : e];
    }
  });
  return t;
}
function Gw(e) {
  const {
    min: t = 0,
    max: r = 100,
    onChange: n,
    value: o,
    defaultValue: a,
    isReversed: i,
    direction: s = "ltr",
    orientation: l = "horizontal",
    id: c,
    isDisabled: u,
    isReadOnly: d,
    onChangeStart: f,
    onChangeEnd: p,
    step: v = 1,
    getAriaValueText: m,
    "aria-valuetext": g,
    "aria-label": b,
    "aria-labelledby": y,
    name: x,
    focusThumbOnChange: _ = !0,
    minStepsBetweenThumbs: w = 0,
    ...P
  } = e, k = ot(f), R = ot(p), j = ot(m), $ = Lw({
    isReversed: i,
    direction: s,
    orientation: l
  }), [L, J] = An({
    value: o,
    defaultValue: a ?? [25, 75],
    onChange: n
  });
  if (!Array.isArray(L))
    throw new TypeError(
      `[range-slider] You passed an invalid value for \`value\` or \`defaultValue\`, expected \`Array\` but got \`${typeof L}\``
    );
  const [G, K] = de(!1), [te, Z] = de(!1), [N, q] = de(-1), he = !(u || d), D = ie(L), M = L.map((le) => Oo(le, t, r)), re = w * v, V = s6(M, t, r, re), z = ie({
    eventSource: null,
    value: [],
    valueBounds: []
  });
  z.current.value = M, z.current.valueBounds = V;
  const U = M.map((le) => r - le + t), ce = ($ ? U : M).map((le) => tl(le, t, r)), se = l === "vertical", W = ie(null), Y = ie(null), ne = Uw({
    getNodes() {
      const le = Y.current, ye = le == null ? void 0 : le.querySelectorAll("[role=slider]");
      return ye ? Array.from(ye) : [];
    }
  }), B = It(), ee = L4(c ?? B), ve = I(
    (le) => {
      var ye, Pe;
      if (!W.current)
        return;
      z.current.eventSource = "pointer";
      const Te = W.current.getBoundingClientRect(), { clientX: Je, clientY: Nt } = (Pe = (ye = le.touches) == null ? void 0 : ye[0]) != null ? Pe : le, at = se ? Te.bottom - Nt : Je - Te.left, ft = se ? Te.height : Te.width;
      let Gr = at / ft;
      return $ && (Gr = 1 - Gr), zx(Gr, t, r);
    },
    [se, $, r, t]
  ), Ne = (r - t) / 10, $e = v || (r - t) / 100, Oe = we(
    () => ({
      setValueAtIndex(le, ye) {
        if (!he)
          return;
        const Pe = z.current.valueBounds[le];
        ye = parseFloat(rd(ye, Pe.min, $e)), ye = Oo(ye, Pe.min, Pe.max);
        const Te = [...z.current.value];
        Te[le] = ye, J(Te);
      },
      setActiveIndex: q,
      stepUp(le, ye = $e) {
        const Pe = z.current.value[le], Te = $ ? Pe - ye : Pe + ye;
        Oe.setValueAtIndex(le, Te);
      },
      stepDown(le, ye = $e) {
        const Pe = z.current.value[le], Te = $ ? Pe + ye : Pe - ye;
        Oe.setValueAtIndex(le, Te);
      },
      reset() {
        J(D.current);
      }
    }),
    [$e, $, J, he]
  ), vt = I(
    (le) => {
      const ye = le.key, Te = {
        ArrowRight: () => Oe.stepUp(N),
        ArrowUp: () => Oe.stepUp(N),
        ArrowLeft: () => Oe.stepDown(N),
        ArrowDown: () => Oe.stepDown(N),
        PageUp: () => Oe.stepUp(N, Ne),
        PageDown: () => Oe.stepDown(N, Ne),
        Home: () => {
          const { min: Je } = V[N];
          Oe.setValueAtIndex(N, Je);
        },
        End: () => {
          const { max: Je } = V[N];
          Oe.setValueAtIndex(N, Je);
        }
      }[ye];
      Te && (le.preventDefault(), le.stopPropagation(), Te(le), z.current.eventSource = "keyboard");
    },
    [Oe, N, Ne, V]
  ), { getThumbStyle: Qe, rootStyle: xt, trackStyle: ct, innerTrackStyle: ut } = we(
    () => Bw({
      isReversed: $,
      orientation: l,
      thumbRects: ne,
      thumbPercents: ce
    }),
    [$, l, ce, ne]
  ), $t = I(
    (le) => {
      var ye;
      const Pe = le ?? N;
      if (Pe !== -1 && _) {
        const Te = ee.getThumb(Pe), Je = (ye = Y.current) == null ? void 0 : ye.ownerDocument.getElementById(Te);
        Je && setTimeout(() => Je.focus());
      }
    },
    [_, N, ee]
  );
  kr(() => {
    z.current.eventSource === "keyboard" && (R == null || R(z.current.value));
  }, [M, R]);
  const zt = (le) => {
    const ye = ve(le) || 0, Pe = z.current.value.map(
      (ft) => Math.abs(ft - ye)
    ), Te = Math.min(...Pe);
    let Je = Pe.indexOf(Te);
    const Nt = Pe.filter(
      (ft) => ft === Te
    );
    Nt.length > 1 && ye > z.current.value[Je] && (Je = Je + Nt.length - 1), q(Je), Oe.setValueAtIndex(Je, ye), $t(Je);
  }, Zt = (le) => {
    if (N == -1)
      return;
    const ye = ve(le) || 0;
    q(N), Oe.setValueAtIndex(N, ye), $t(N);
  };
  Hw(Y, {
    onPanSessionStart(le) {
      he && (K(!0), zt(le), k == null || k(z.current.value));
    },
    onPanSessionEnd() {
      he && (K(!1), R == null || R(z.current.value));
    },
    onPan(le) {
      he && Zt(le);
    }
  });
  const Mt = I(
    (le = {}, ye = null) => ({
      ...le,
      ...P,
      id: ee.root,
      ref: je(ye, Y),
      tabIndex: -1,
      "aria-disabled": Fo(u),
      "data-focused": fr(te),
      style: { ...le.style, ...xt }
    }),
    [P, u, te, xt, ee]
  ), ae = I(
    (le = {}, ye = null) => ({
      ...le,
      ref: je(ye, W),
      id: ee.track,
      "data-disabled": fr(u),
      style: { ...le.style, ...ct }
    }),
    [u, ct, ee]
  ), Re = I(
    (le = {}, ye = null) => ({
      ...le,
      ref: ye,
      id: ee.innerTrack,
      style: {
        ...le.style,
        ...ut
      }
    }),
    [ut, ee]
  ), qe = I(
    (le, ye = null) => {
      var Pe;
      const { index: Te, ...Je } = le, Nt = M[Te];
      if (Nt == null)
        throw new TypeError(
          `[range-slider > thumb] Cannot find value at index \`${Te}\`. The \`value\` or \`defaultValue\` length is : ${M.length}`
        );
      const at = V[Te];
      return {
        ...Je,
        ref: ye,
        role: "slider",
        tabIndex: he ? 0 : void 0,
        id: ee.getThumb(Te),
        "data-active": fr(G && N === Te),
        "aria-valuetext": (Pe = j == null ? void 0 : j(Nt)) != null ? Pe : g == null ? void 0 : g[Te],
        "aria-valuemin": at.min,
        "aria-valuemax": at.max,
        "aria-valuenow": Nt,
        "aria-orientation": l,
        "aria-disabled": Fo(u),
        "aria-readonly": Fo(d),
        "aria-label": b == null ? void 0 : b[Te],
        "aria-labelledby": b != null && b[Te] || y == null ? void 0 : y[Te],
        style: { ...le.style, ...Qe(Te) },
        onKeyDown: Bo(le.onKeyDown, vt),
        onFocus: Bo(le.onFocus, () => {
          Z(!0), q(Te);
        }),
        onBlur: Bo(le.onBlur, () => {
          Z(!1), q(-1);
        })
      };
    },
    [
      ee,
      M,
      V,
      he,
      G,
      N,
      j,
      g,
      l,
      u,
      d,
      b,
      y,
      Qe,
      vt,
      Z
    ]
  ), dt = I(
    (le = {}, ye = null) => ({
      ...le,
      ref: ye,
      id: ee.output,
      htmlFor: M.map((Pe, Te) => ee.getThumb(Te)).join(" "),
      "aria-live": "off"
    }),
    [ee, M]
  ), fe = I(
    (le, ye = null) => {
      const { value: Pe, ...Te } = le, Je = !(Pe < t || Pe > r), Nt = Pe >= M[0] && Pe <= M[M.length - 1];
      let at = tl(Pe, t, r);
      at = $ ? 100 - at : at;
      const ft = {
        position: "absolute",
        pointerEvents: "none",
        ...xa({
          orientation: l,
          vertical: { bottom: `${at}%` },
          horizontal: { left: `${at}%` }
        })
      };
      return {
        ...Te,
        ref: ye,
        id: ee.getMarker(le.value),
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": fr(u),
        "data-invalid": fr(!Je),
        "data-highlighted": fr(Nt),
        style: {
          ...le.style,
          ...ft
        }
      };
    },
    [u, $, r, t, l, M, ee]
  ), be = I(
    (le, ye = null) => {
      const { index: Pe, ...Te } = le;
      return {
        ...Te,
        ref: ye,
        id: ee.getInput(Pe),
        type: "hidden",
        value: M[Pe],
        name: Array.isArray(x) ? x[Pe] : `${x}-${Pe}`
      };
    },
    [x, M, ee]
  );
  return {
    state: {
      value: M,
      isFocused: te,
      isDragging: G,
      getThumbPercent: (le) => ce[le],
      getThumbMinValue: (le) => V[le].min,
      getThumbMaxValue: (le) => V[le].max
    },
    actions: Oe,
    getRootProps: Mt,
    getTrackProps: ae,
    getInnerTrackProps: Re,
    getThumbProps: qe,
    getMarkerProps: fe,
    getInputProps: be,
    getOutputProps: dt
  };
}
function s6(e, t, r, n) {
  return e.map((o, a) => {
    const i = a === 0 ? t : e[a - 1] + n, s = a === e.length - 1 ? r : e[a + 1] - n;
    return { min: i, max: s };
  });
}
var [qw, _i] = Ie({
  name: "SliderContext",
  errorMessage: "useSliderContext: `context` is undefined. Seems you forgot to wrap all slider components within <RangeSlider />"
}), [l6, Ci] = Ie({
  name: "RangeSliderStylesContext",
  errorMessage: `useRangeSliderStyles returned is 'undefined'. Seems you forgot to wrap the components in "<RangeSlider />" `
}), Kw = O(
  function(t, r) {
    const n = {
      orientation: "horizontal",
      ...t
    }, o = Ze("Slider", n), a = Ee(n), { direction: i } = sr();
    a.direction = i;
    const { getRootProps: s, ...l } = Gw(a), c = we(
      () => ({ ...l, name: n.name }),
      [l, n.name]
    );
    return /* @__PURE__ */ h.jsx(qw, { value: c, children: /* @__PURE__ */ h.jsx(l6, { value: o, children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...s({}, r),
        className: "chakra-slider",
        __css: o.container,
        children: n.children
      }
    ) }) });
  }
);
Kw.displayName = "RangeSlider";
var Yw = O(
  function(t, r) {
    const { getThumbProps: n, getInputProps: o, name: a } = _i(), i = Ci(), s = n(t, r);
    return /* @__PURE__ */ h.jsxs(
      E.div,
      {
        ...s,
        className: Nn("chakra-slider__thumb", t.className),
        __css: i.thumb,
        children: [
          s.children,
          a && /* @__PURE__ */ h.jsx("input", { ...o({ index: t.index }) })
        ]
      }
    );
  }
);
Yw.displayName = "RangeSliderThumb";
var Xw = O(
  function(t, r) {
    const { getTrackProps: n } = _i(), o = Ci(), a = n(t, r);
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...a,
        className: Nn("chakra-slider__track", t.className),
        __css: o.track,
        "data-testid": "chakra-range-slider-track"
      }
    );
  }
);
Xw.displayName = "RangeSliderTrack";
var Zw = O(function(t, r) {
  const { getInnerTrackProps: n } = _i(), o = Ci(), a = n(t, r);
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...a,
      className: "chakra-slider__filled-track",
      __css: o.filledTrack
    }
  );
});
Zw.displayName = "RangeSliderFilledTrack";
var Jw = O(
  function(t, r) {
    const { getMarkerProps: n } = _i(), o = Ci(), a = n(t, r);
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...a,
        className: Nn("chakra-slider__marker", t.className),
        __css: o.mark
      }
    );
  }
);
Jw.displayName = "RangeSliderMark";
function Qw(e) {
  var t;
  const {
    min: r = 0,
    max: n = 100,
    onChange: o,
    value: a,
    defaultValue: i,
    isReversed: s,
    direction: l = "ltr",
    orientation: c = "horizontal",
    id: u,
    isDisabled: d,
    isReadOnly: f,
    onChangeStart: p,
    onChangeEnd: v,
    step: m = 1,
    getAriaValueText: g,
    "aria-valuetext": b,
    "aria-label": y,
    "aria-labelledby": x,
    name: _,
    focusThumbOnChange: w = !0,
    ...P
  } = e, k = ot(p), R = ot(v), j = ot(g), $ = Lw({
    isReversed: s,
    direction: l,
    orientation: c
  }), [L, J] = An({
    value: a,
    defaultValue: i ?? u6(r, n),
    onChange: o
  }), [G, K] = de(!1), [te, Z] = de(!1), N = !(d || f), q = (n - r) / 10, he = m || (n - r) / 100, D = Oo(L, r, n), M = n - D + r, V = tl($ ? M : D, r, n), z = c === "vertical", U = Ww({
    min: r,
    max: n,
    step: m,
    isDisabled: d,
    value: D,
    isInteractive: N,
    isReversed: $,
    isVertical: z,
    eventSource: null,
    focusThumbOnChange: w,
    orientation: c
  }), oe = ie(null), ce = ie(null), se = ie(null), W = It(), Y = u ?? W, [ne, B] = [`slider-thumb-${Y}`, `slider-track-${Y}`], Ce = I(
    (fe) => {
      var be, Jt;
      if (!oe.current)
        return;
      const le = U.current;
      le.eventSource = "pointer";
      const ye = oe.current.getBoundingClientRect(), { clientX: Pe, clientY: Te } = (Jt = (be = fe.touches) == null ? void 0 : be[0]) != null ? Jt : fe, Je = z ? ye.bottom - Te : Pe - ye.left, Nt = z ? ye.height : ye.width;
      let at = Je / Nt;
      $ && (at = 1 - at);
      let ft = zx(at, le.min, le.max);
      return le.step && (ft = parseFloat(
        rd(ft, le.min, le.step)
      )), ft = Oo(ft, le.min, le.max), ft;
    },
    [z, $, U]
  ), ee = I(
    (fe) => {
      const be = U.current;
      be.isInteractive && (fe = parseFloat(rd(fe, be.min, he)), fe = Oo(fe, be.min, be.max), J(fe));
    },
    [he, J, U]
  ), ve = we(
    () => ({
      stepUp(fe = he) {
        const be = $ ? D - fe : D + fe;
        ee(be);
      },
      stepDown(fe = he) {
        const be = $ ? D + fe : D - fe;
        ee(be);
      },
      reset() {
        ee(i || 0);
      },
      stepTo(fe) {
        ee(fe);
      }
    }),
    [ee, $, D, he, i]
  ), Ne = I(
    (fe) => {
      const be = U.current, le = {
        ArrowRight: () => ve.stepUp(),
        ArrowUp: () => ve.stepUp(),
        ArrowLeft: () => ve.stepDown(),
        ArrowDown: () => ve.stepDown(),
        PageUp: () => ve.stepUp(q),
        PageDown: () => ve.stepDown(q),
        Home: () => ee(be.min),
        End: () => ee(be.max)
      }[fe.key];
      le && (fe.preventDefault(), fe.stopPropagation(), le(fe), be.eventSource = "keyboard");
    },
    [ve, ee, q, U]
  ), $e = (t = j == null ? void 0 : j(D)) != null ? t : b, Oe = i6(ce), { getThumbStyle: vt, rootStyle: Qe, trackStyle: xt, innerTrackStyle: ct } = we(() => {
    const fe = U.current, be = Oe ?? { width: 0, height: 0 };
    return Bw({
      isReversed: $,
      orientation: fe.orientation,
      thumbRects: [be],
      thumbPercents: [V]
    });
  }, [$, Oe, V, U]), ut = I(() => {
    U.current.focusThumbOnChange && setTimeout(() => {
      var be;
      return (be = ce.current) == null ? void 0 : be.focus();
    });
  }, [U]);
  kr(() => {
    const fe = U.current;
    ut(), fe.eventSource === "keyboard" && (R == null || R(fe.value));
  }, [D, R]);
  function $t(fe) {
    const be = Ce(fe);
    be != null && be !== U.current.value && J(be);
  }
  Hw(se, {
    onPanSessionStart(fe) {
      const be = U.current;
      be.isInteractive && (K(!0), ut(), $t(fe), k == null || k(be.value));
    },
    onPanSessionEnd() {
      const fe = U.current;
      fe.isInteractive && (K(!1), R == null || R(fe.value));
    },
    onPan(fe) {
      U.current.isInteractive && $t(fe);
    }
  });
  const zt = I(
    (fe = {}, be = null) => ({
      ...fe,
      ...P,
      ref: je(be, se),
      tabIndex: -1,
      "aria-disabled": Fo(d),
      "data-focused": fr(te),
      style: {
        ...fe.style,
        ...Qe
      }
    }),
    [P, d, te, Qe]
  ), Zt = I(
    (fe = {}, be = null) => ({
      ...fe,
      ref: je(be, oe),
      id: B,
      "data-disabled": fr(d),
      style: {
        ...fe.style,
        ...xt
      }
    }),
    [d, B, xt]
  ), Mt = I(
    (fe = {}, be = null) => ({
      ...fe,
      ref: be,
      style: {
        ...fe.style,
        ...ct
      }
    }),
    [ct]
  ), ae = I(
    (fe = {}, be = null) => ({
      ...fe,
      ref: je(be, ce),
      role: "slider",
      tabIndex: N ? 0 : void 0,
      id: ne,
      "data-active": fr(G),
      "aria-valuetext": $e,
      "aria-valuemin": r,
      "aria-valuemax": n,
      "aria-valuenow": D,
      "aria-orientation": c,
      "aria-disabled": Fo(d),
      "aria-readonly": Fo(f),
      "aria-label": y,
      "aria-labelledby": y ? void 0 : x,
      style: {
        ...fe.style,
        ...vt(0)
      },
      onKeyDown: Bo(fe.onKeyDown, Ne),
      onFocus: Bo(fe.onFocus, () => Z(!0)),
      onBlur: Bo(fe.onBlur, () => Z(!1))
    }),
    [
      N,
      ne,
      G,
      $e,
      r,
      n,
      D,
      c,
      d,
      f,
      y,
      x,
      vt,
      Ne
    ]
  ), Re = I(
    (fe, be = null) => {
      const Jt = !(fe.value < r || fe.value > n), le = D >= fe.value, ye = tl(fe.value, r, n), Pe = {
        position: "absolute",
        pointerEvents: "none",
        ...c6({
          orientation: c,
          vertical: {
            bottom: $ ? `${100 - ye}%` : `${ye}%`
          },
          horizontal: {
            left: $ ? `${100 - ye}%` : `${ye}%`
          }
        })
      };
      return {
        ...fe,
        ref: be,
        role: "presentation",
        "aria-hidden": !0,
        "data-disabled": fr(d),
        "data-invalid": fr(!Jt),
        "data-highlighted": fr(le),
        style: {
          ...fe.style,
          ...Pe
        }
      };
    },
    [d, $, n, r, c, D]
  ), qe = I(
    (fe = {}, be = null) => ({
      ...fe,
      ref: be,
      type: "hidden",
      value: D,
      name: _
    }),
    [_, D]
  );
  return {
    state: { value: D, isFocused: te, isDragging: G },
    actions: ve,
    getRootProps: zt,
    getTrackProps: Zt,
    getInnerTrackProps: Mt,
    getThumbProps: ae,
    getMarkerProps: Re,
    getInputProps: qe
  };
}
function c6(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t === "vertical" ? r : n;
}
function u6(e, t) {
  return t < e ? e : e + (t - e) / 2;
}
var [e_, ki] = Ie({
  name: "SliderContext",
  hookName: "useSliderContext",
  providerName: "<Slider />"
}), [d6, Pi] = Ie({
  name: "SliderStylesContext",
  hookName: "useSliderStyles",
  providerName: "<Slider />"
}), t_ = O((e, t) => {
  var r;
  const n = {
    ...e,
    orientation: (r = e == null ? void 0 : e.orientation) != null ? r : "horizontal"
  }, o = Ze("Slider", n), a = Ee(n), { direction: i } = sr();
  a.direction = i;
  const { getInputProps: s, getRootProps: l, ...c } = Qw(a), u = l(), d = s({}, t);
  return /* @__PURE__ */ h.jsx(e_, { value: c, children: /* @__PURE__ */ h.jsx(d6, { value: o, children: /* @__PURE__ */ h.jsxs(
    E.div,
    {
      ...u,
      className: Nn("chakra-slider", n.className),
      __css: o.container,
      children: [
        n.children,
        /* @__PURE__ */ h.jsx("input", { ...d })
      ]
    }
  ) }) });
});
t_.displayName = "Slider";
var r_ = O((e, t) => {
  const { getThumbProps: r } = ki(), n = Pi(), o = r(e, t);
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...o,
      className: Nn("chakra-slider__thumb", e.className),
      __css: n.thumb
    }
  );
});
r_.displayName = "SliderThumb";
var n_ = O((e, t) => {
  const { getTrackProps: r } = ki(), n = Pi(), o = r(e, t);
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...o,
      className: Nn("chakra-slider__track", e.className),
      __css: n.track
    }
  );
});
n_.displayName = "SliderTrack";
var o_ = O(
  (e, t) => {
    const { getInnerTrackProps: r } = ki(), n = Pi(), o = r(e, t);
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ...o,
        className: Nn("chakra-slider__filled-track", e.className),
        __css: n.filledTrack
      }
    );
  }
);
o_.displayName = "SliderFilledTrack";
var a_ = O((e, t) => {
  const { getMarkerProps: r } = ki(), n = Pi(), o = r(e, t);
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...o,
      className: Nn("chakra-slider__marker", e.className),
      __css: n.mark
    }
  );
});
a_.displayName = "SliderMark";
var [f6, Ei] = Ie({
  name: "StatStylesContext",
  errorMessage: `useStatStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Stat />" `
}), i_ = O(function(t, r) {
  const n = Ze("Stat", t), o = {
    position: "relative",
    flex: "1 1 0%",
    ...n.container
  }, { className: a, children: i, ...s } = Ee(t);
  return /* @__PURE__ */ h.jsx(f6, { value: n, children: /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      ...s,
      className: H("chakra-stat", a),
      __css: o,
      children: /* @__PURE__ */ h.jsx("dl", { children: i })
    }
  ) });
});
i_.displayName = "Stat";
var Kp = (e) => /* @__PURE__ */ h.jsx(Rt, { color: "red.400", ...e, children: /* @__PURE__ */ h.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M21,5H3C2.621,5,2.275,5.214,2.105,5.553C1.937,5.892,1.973,6.297,2.2,6.6l9,12 c0.188,0.252,0.485,0.4,0.8,0.4s0.611-0.148,0.8-0.4l9-12c0.228-0.303,0.264-0.708,0.095-1.047C21.725,5.214,21.379,5,21,5z"
  }
) });
Kp.displayName = "StatDownArrow";
function Yp(e) {
  return /* @__PURE__ */ h.jsx(Rt, { color: "green.400", ...e, children: /* @__PURE__ */ h.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M12.8,5.4c-0.377-0.504-1.223-0.504-1.6,0l-9,12c-0.228,0.303-0.264,0.708-0.095,1.047 C2.275,18.786,2.621,19,3,19h18c0.379,0,0.725-0.214,0.895-0.553c0.169-0.339,0.133-0.744-0.095-1.047L12.8,5.4z"
    }
  ) });
}
Yp.displayName = "StatUpArrow";
function s_(e) {
  const { type: t, "aria-label": r, ...n } = e, o = Ei(), a = t === "increase" ? Yp : Kp, s = r || (t === "increase" ? "increased by" : "decreased by");
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(E.span, { srOnly: !0, children: s }),
    /* @__PURE__ */ h.jsx(a, { "aria-hidden": !0, ...n, __css: o.icon })
  ] });
}
s_.displayName = "StatArrow";
var l_ = O(function(t, r) {
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...t,
      ref: r,
      role: "group",
      className: H("chakra-stat__group", t.className),
      __css: {
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        alignItems: "flex-start"
      }
    }
  );
});
l_.displayName = "StatGroup";
var c_ = O(
  function(t, r) {
    const n = Ei();
    return /* @__PURE__ */ h.jsx(
      E.dd,
      {
        ref: r,
        ...t,
        className: H("chakra-stat__help-text", t.className),
        __css: n.helpText
      }
    );
  }
);
c_.displayName = "StatHelpText";
var u_ = O(function(t, r) {
  const n = Ei();
  return /* @__PURE__ */ h.jsx(
    E.dt,
    {
      ref: r,
      ...t,
      className: H("chakra-stat__label", t.className),
      __css: n.label
    }
  );
});
u_.displayName = "StatLabel";
var d_ = O(function(t, r) {
  const n = Ei();
  return /* @__PURE__ */ h.jsx(
    E.dd,
    {
      ref: r,
      ...t,
      className: H("chakra-stat__number", t.className),
      __css: {
        ...n.number,
        fontFeatureSettings: "pnum",
        fontVariantNumeric: "proportional-nums"
      }
    }
  );
});
d_.displayName = "StatNumber";
var [p6, un] = Ie(
  { name: "StepContext" }
), [h6, On] = ef("Stepper"), m6 = O(function(t, r) {
  const { status: n } = un(), o = On();
  return /* @__PURE__ */ h.jsx(
    E.h3,
    {
      ref: r,
      "data-status": n,
      ...t,
      __css: o.title,
      className: H("chakra-step__title", t.className)
    }
  );
}), v6 = O(function(t, r) {
  const { orientation: n, status: o, showLastSeparator: a } = un(), i = On();
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      "data-status": o,
      "data-orientation": n,
      "data-stretch": Ae(a),
      __css: i.step,
      ...t,
      className: H("chakra-step", t.className)
    }
  );
}), g6 = O(function(t, r) {
  const n = Ze("Stepper", t), {
    children: o,
    index: a,
    orientation: i = "horizontal",
    showLastSeparator: s = !1,
    ...l
  } = Ee(t), c = Hr.toArray(o), u = c.length;
  function d(f) {
    return f < a ? "complete" : f > a ? "incomplete" : "active";
  }
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      "aria-label": "Progress",
      "data-orientation": i,
      ...l,
      __css: n.stepper,
      className: H("chakra-stepper", t.className),
      children: /* @__PURE__ */ h.jsx(h6, { value: n, children: c.map((f, p) => /* @__PURE__ */ h.jsx(
        p6,
        {
          value: {
            index: p,
            status: d(p),
            orientation: i,
            showLastSeparator: s,
            count: u,
            isFirst: p === 0,
            isLast: p === u - 1
          },
          children: f
        },
        p
      )) })
    }
  );
});
function y6(e = {}) {
  const { index: t = 0, count: r } = e, [n, o] = de(t), a = typeof r == "number" ? r - 1 : 0, i = n / a;
  return {
    activeStep: n,
    setActiveStep: o,
    activeStepPercent: i,
    isActiveStep(s) {
      return s === n;
    },
    isCompleteStep(s) {
      return s < n;
    },
    isIncompleteStep(s) {
      return s > n;
    },
    getStatus(s) {
      return s < n ? "complete" : s > n ? "incomplete" : "active";
    },
    goToNext() {
      o((s) => typeof r == "number" ? Math.min(r, s + 1) : s + 1);
    },
    goToPrevious() {
      o((s) => Math.max(0, s - 1));
    }
  };
}
var b6 = O(function(t, r) {
  const { status: n } = un(), o = On();
  return /* @__PURE__ */ h.jsx(
    E.p,
    {
      ref: r,
      "data-status": n,
      ...t,
      className: H("chakra-step__description", t.className),
      __css: o.description
    }
  );
});
function f_(e) {
  const { complete: t, incomplete: r, active: n } = e, o = un();
  let a = null;
  switch (o.status) {
    case "complete":
      a = Bt(t, o);
      break;
    case "incomplete":
      a = Bt(r, o);
      break;
    case "active":
      a = Bt(n, o);
      break;
  }
  return a ? /* @__PURE__ */ h.jsx(h.Fragment, { children: a }) : null;
}
function x6(e) {
  return /* @__PURE__ */ h.jsx(
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
      children: /* @__PURE__ */ h.jsx(
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
function p_(e) {
  const { status: t } = un(), r = On(), n = t === "complete" ? x6 : void 0;
  return /* @__PURE__ */ h.jsx(
    Rt,
    {
      as: n,
      __css: r.icon,
      ...e,
      className: H("chakra-step__icon", e.className)
    }
  );
}
var vd = O(function(t, r) {
  const { children: n, ...o } = t, { status: a, index: i } = un(), s = On();
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      "data-status": a,
      __css: s.number,
      ...o,
      className: H("chakra-step__number", t.className),
      children: n || i + 1
    }
  );
});
function S6(e) {
  const { status: t } = un(), r = On();
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      "data-status": t,
      ...e,
      __css: r.indicator,
      className: H("chakra-step__indicator", e.className)
    }
  );
}
function w6() {
  return /* @__PURE__ */ h.jsx(
    f_,
    {
      complete: /* @__PURE__ */ h.jsx(p_, {}),
      incomplete: /* @__PURE__ */ h.jsx(vd, {}),
      active: /* @__PURE__ */ h.jsx(vd, {})
    }
  );
}
var _6 = O(function(t, r) {
  const { orientation: n, status: o, isLast: a, showLastSeparator: i } = un(), s = On();
  return a && !i ? null : /* @__PURE__ */ h.jsx(
    E.div,
    {
      ref: r,
      role: "separator",
      "data-orientation": n,
      "data-status": o,
      __css: s.separator,
      ...t,
      className: H("chakra-step__separator", t.className)
    }
  );
}), h_ = O(function(t, r) {
  const n = Ze("Switch", t), { spacing: o = "0.5rem", children: a, ...i } = Ee(t), {
    state: s,
    getInputProps: l,
    getCheckboxProps: c,
    getRootProps: u,
    getLabelProps: d
  } = Uf(i), f = we(
    () => ({
      display: "inline-block",
      position: "relative",
      verticalAlign: "middle",
      lineHeight: 0,
      ...n.container
    }),
    [n.container]
  ), p = we(
    () => ({
      display: "inline-flex",
      flexShrink: 0,
      justifyContent: "flex-start",
      boxSizing: "content-box",
      cursor: "pointer",
      ...n.track
    }),
    [n.track]
  ), v = we(
    () => ({
      userSelect: "none",
      marginStart: o,
      ...n.label
    }),
    [o, n.label]
  );
  return /* @__PURE__ */ h.jsxs(
    E.label,
    {
      ...u(),
      className: H("chakra-switch", t.className),
      __css: f,
      children: [
        /* @__PURE__ */ h.jsx("input", { className: "chakra-switch__input", ...l({}, r) }),
        /* @__PURE__ */ h.jsx(
          E.span,
          {
            ...c(),
            className: "chakra-switch__track",
            __css: p,
            children: /* @__PURE__ */ h.jsx(
              E.span,
              {
                __css: n.thumb,
                className: "chakra-switch__thumb",
                "data-checked": Ae(s.isChecked),
                "data-hover": Ae(s.isHovered)
              }
            )
          }
        ),
        a && /* @__PURE__ */ h.jsx(
          E.span,
          {
            className: "chakra-switch__label",
            ...d(),
            __css: v,
            children: a
          }
        )
      ]
    }
  );
});
h_.displayName = "Switch";
var [C6, Dn] = Ie({
  name: "TableStylesContext",
  errorMessage: `useTableStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Table />" `
}), m_ = O((e, t) => {
  const r = Ze("Table", e), { className: n, layout: o, ...a } = Ee(e);
  return /* @__PURE__ */ h.jsx(C6, { value: r, children: /* @__PURE__ */ h.jsx(
    E.table,
    {
      ref: t,
      __css: { tableLayout: o, ...r.table },
      className: H("chakra-table", n),
      ...a
    }
  ) });
});
m_.displayName = "Table";
var k6 = O((e, t) => {
  const r = Dn();
  return /* @__PURE__ */ h.jsx(E.thead, { ...e, ref: t, __css: r.thead });
}), P6 = O((e, t) => {
  const r = Dn();
  return /* @__PURE__ */ h.jsx(E.tr, { ...e, ref: t, __css: r.tr });
}), v_ = O(
  (e, t) => {
    const { placement: r = "bottom", ...n } = e, o = Dn();
    return /* @__PURE__ */ h.jsx(
      E.caption,
      {
        ...n,
        ref: t,
        __css: {
          ...o.caption,
          captionSide: r
        }
      }
    );
  }
);
v_.displayName = "TableCaption";
var E6 = O(
  (e, t) => {
    var r;
    const { overflow: n, overflowX: o, className: a, ...i } = e;
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: t,
        className: H("chakra-table__container", a),
        ...i,
        __css: {
          display: "block",
          whiteSpace: "nowrap",
          WebkitOverflowScrolling: "touch",
          overflowX: (r = n ?? o) != null ? r : "auto",
          overflowY: "hidden",
          maxWidth: "100%"
        }
      }
    );
  }
), T6 = O((e, t) => {
  const r = Dn();
  return /* @__PURE__ */ h.jsx(E.tbody, { ...e, ref: t, __css: r.tbody });
}), A6 = O(
  ({ isNumeric: e, ...t }, r) => {
    const n = Dn();
    return /* @__PURE__ */ h.jsx(
      E.td,
      {
        ...t,
        ref: r,
        __css: n.td,
        "data-is-numeric": e
      }
    );
  }
), I6 = O((e, t) => {
  const r = Dn();
  return /* @__PURE__ */ h.jsx(E.tfoot, { ...e, ref: t, __css: r.tfoot });
}), R6 = O(
  ({ isNumeric: e, ...t }, r) => {
    const n = Dn();
    return /* @__PURE__ */ h.jsx(
      E.th,
      {
        ...t,
        ref: r,
        __css: n.th,
        "data-is-numeric": e
      }
    );
  }
), [
  g_,
  Xp,
  y_,
  b_
] = Nl();
function x_(e) {
  var t;
  const {
    defaultIndex: r,
    onChange: n,
    index: o,
    isManual: a,
    isLazy: i,
    lazyBehavior: s = "unmount",
    orientation: l = "horizontal",
    direction: c = "ltr",
    ...u
  } = e, [d, f] = de(r ?? 0), [p, v] = An({
    defaultValue: r ?? 0,
    value: o,
    onChange: n
  });
  ge(() => {
    o != null && f(o);
  }, [o]);
  const m = y_(), g = It();
  return {
    id: `tabs-${(t = e.id) != null ? t : g}`,
    selectedIndex: p,
    focusedIndex: d,
    setSelectedIndex: v,
    setFocusedIndex: f,
    isManual: a,
    isLazy: i,
    lazyBehavior: s,
    orientation: l,
    descendants: m,
    direction: c,
    htmlProps: u
  };
}
var [S_, Qo] = Ie({
  name: "TabsContext",
  errorMessage: "useTabsContext: `context` is undefined. Seems you forgot to wrap all tabs components within <Tabs />"
});
function w_(e) {
  const { focusedIndex: t, orientation: r, direction: n } = Qo(), o = Xp(), a = I(
    (i) => {
      const s = () => {
        var y;
        const x = o.nextEnabled(t);
        x && ((y = x.node) == null || y.focus());
      }, l = () => {
        var y;
        const x = o.prevEnabled(t);
        x && ((y = x.node) == null || y.focus());
      }, c = () => {
        var y;
        const x = o.firstEnabled();
        x && ((y = x.node) == null || y.focus());
      }, u = () => {
        var y;
        const x = o.lastEnabled();
        x && ((y = x.node) == null || y.focus());
      }, d = r === "horizontal", f = r === "vertical", p = i.key, v = n === "ltr" ? "ArrowLeft" : "ArrowRight", m = n === "ltr" ? "ArrowRight" : "ArrowLeft", b = {
        [v]: () => d && l(),
        [m]: () => d && s(),
        ArrowDown: () => f && s(),
        ArrowUp: () => f && l(),
        Home: c,
        End: u
      }[p];
      b && (i.preventDefault(), b(i));
    },
    [o, t, r, n]
  );
  return {
    ...e,
    role: "tablist",
    "aria-orientation": r,
    onKeyDown: ue(e.onKeyDown, a)
  };
}
function __(e) {
  const { isDisabled: t, isFocusable: r, ...n } = e, { setSelectedIndex: o, isManual: a, id: i, setFocusedIndex: s, selectedIndex: l } = Qo(), { index: c, register: u } = b_({
    disabled: t && !r
  }), d = c === l, f = () => {
    o(c);
  }, p = () => {
    s(c), !a && !(t && r) && o(c);
  }, v = u1({
    ...n,
    ref: je(u, e.ref),
    isDisabled: t,
    isFocusable: r,
    onClick: ue(e.onClick, f)
  }), m = "button";
  return {
    ...v,
    id: E_(i, c),
    role: "tab",
    tabIndex: d ? 0 : -1,
    type: m,
    "aria-selected": d,
    "aria-controls": T_(i, c),
    onFocus: t ? void 0 : ue(e.onFocus, p)
  };
}
var [$6, N6] = Ie({});
function C_(e) {
  const t = Qo(), { id: r, selectedIndex: n } = t, a = ln(e.children).map(
    (i, s) => Dg(
      $6,
      {
        key: s,
        value: {
          isSelected: s === n,
          id: T_(r, s),
          tabId: E_(r, s),
          selectedIndex: n
        }
      },
      i
    )
  );
  return { ...e, children: a };
}
function k_(e) {
  const { children: t, ...r } = e, { isLazy: n, lazyBehavior: o } = Qo(), { isSelected: a, id: i, tabId: s } = N6(), l = ie(!1);
  a && (l.current = !0);
  const c = Np({
    wasSelected: l.current,
    isSelected: a,
    enabled: n,
    mode: o
  });
  return {
    tabIndex: 0,
    ...r,
    children: c ? t : null,
    role: "tabpanel",
    "aria-labelledby": s,
    hidden: !a,
    id: i
  };
}
function P_() {
  const e = Qo(), t = Xp(), { selectedIndex: r, orientation: n } = e, o = n === "horizontal", a = n === "vertical", [i, s] = de(() => {
    if (o)
      return { left: 0, width: 0 };
    if (a)
      return { top: 0, height: 0 };
  }), [l, c] = de(!1);
  return rr(() => {
    if (r == null)
      return;
    const u = t.item(r);
    if (u == null)
      return;
    o && s({ left: u.node.offsetLeft, width: u.node.offsetWidth }), a && s({ top: u.node.offsetTop, height: u.node.offsetHeight });
    const d = requestAnimationFrame(() => {
      c(!0);
    });
    return () => {
      d && cancelAnimationFrame(d);
    };
  }, [r, o, a, t]), {
    position: "absolute",
    transitionProperty: "left, right, top, bottom, height, width",
    transitionDuration: l ? "200ms" : "0ms",
    transitionTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
    ...i
  };
}
function E_(e, t) {
  return `${e}--tab-${t}`;
}
function T_(e, t) {
  return `${e}--tabpanel-${t}`;
}
var [O6, ea] = Ie({
  name: "TabsStylesContext",
  errorMessage: `useTabsStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tabs />" `
}), A_ = O(function(t, r) {
  const n = Ze("Tabs", t), { children: o, className: a, ...i } = Ee(t), { htmlProps: s, descendants: l, ...c } = x_(i), u = we(() => c, [c]), { isFitted: d, ...f } = s;
  return /* @__PURE__ */ h.jsx(g_, { value: l, children: /* @__PURE__ */ h.jsx(S_, { value: u, children: /* @__PURE__ */ h.jsx(O6, { value: n, children: /* @__PURE__ */ h.jsx(
    E.div,
    {
      className: H("chakra-tabs", a),
      ref: r,
      ...f,
      __css: n.root,
      children: o
    }
  ) }) }) });
});
A_.displayName = "Tabs";
var I_ = O(
  function(t, r) {
    const n = P_(), o = {
      ...t.style,
      ...n
    }, a = ea();
    return /* @__PURE__ */ h.jsx(
      E.div,
      {
        ref: r,
        ...t,
        className: H("chakra-tabs__tab-indicator", t.className),
        style: o,
        __css: a.indicator
      }
    );
  }
);
I_.displayName = "TabIndicator";
var R_ = O(function(t, r) {
  const n = w_({ ...t, ref: r }), a = {
    display: "flex",
    ...ea().tablist
  };
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...n,
      className: H("chakra-tabs__tablist", t.className),
      __css: a
    }
  );
});
R_.displayName = "TabList";
var $_ = O(function(t, r) {
  const n = k_({ ...t, ref: r }), o = ea();
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      outline: "0",
      ...n,
      className: H("chakra-tabs__tab-panel", t.className),
      __css: o.tabpanel
    }
  );
});
$_.displayName = "TabPanel";
var N_ = O(function(t, r) {
  const n = C_(t), o = ea();
  return /* @__PURE__ */ h.jsx(
    E.div,
    {
      ...n,
      width: "100%",
      ref: r,
      className: H("chakra-tabs__tab-panels", t.className),
      __css: o.tabpanels
    }
  );
});
N_.displayName = "TabPanels";
var O_ = O(function(t, r) {
  const n = ea(), o = __({ ...t, ref: r }), a = {
    outline: "0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    ...n.tab
  };
  return /* @__PURE__ */ h.jsx(
    E.button,
    {
      ...o,
      className: H("chakra-tabs__tab", t.className),
      __css: a
    }
  );
});
O_.displayName = "Tab";
var [D6, Zp] = Ie({
  name: "TagStylesContext",
  errorMessage: `useTagStyles returned is 'undefined'. Seems you forgot to wrap the components in "<Tag />" `
}), D_ = O((e, t) => {
  const r = Ze("Tag", e), n = Ee(e), o = {
    display: "inline-flex",
    verticalAlign: "top",
    alignItems: "center",
    maxWidth: "100%",
    ...r.container
  };
  return /* @__PURE__ */ h.jsx(D6, { value: r, children: /* @__PURE__ */ h.jsx(E.span, { ref: t, ...n, __css: o }) });
});
D_.displayName = "Tag";
var j_ = O((e, t) => {
  const r = Zp();
  return /* @__PURE__ */ h.jsx(E.span, { ref: t, noOfLines: 1, ...e, __css: r.label });
});
j_.displayName = "TagLabel";
var M_ = O((e, t) => /* @__PURE__ */ h.jsx(Rt, { ref: t, verticalAlign: "top", marginEnd: "0.5rem", ...e }));
M_.displayName = "TagLeftIcon";
var F_ = O((e, t) => /* @__PURE__ */ h.jsx(Rt, { ref: t, verticalAlign: "top", marginStart: "0.5rem", ...e }));
F_.displayName = "TagRightIcon";
var B_ = (e) => /* @__PURE__ */ h.jsx(Rt, { verticalAlign: "inherit", viewBox: "0 0 512 512", ...e, children: /* @__PURE__ */ h.jsx(
  "path",
  {
    fill: "currentColor",
    d: "M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"
  }
) });
B_.displayName = "TagCloseIcon";
var L_ = O(
  (e, t) => {
    const { isDisabled: r, children: n, ...o } = e, i = {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      outline: "0",
      ...Zp().closeButton
    };
    return /* @__PURE__ */ h.jsx(
      E.button,
      {
        ref: t,
        "aria-label": "close",
        ...o,
        type: "button",
        disabled: r,
        __css: i,
        children: n || /* @__PURE__ */ h.jsx(B_, {})
      }
    );
  }
);
L_.displayName = "TagCloseButton";
function j6(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
var M6 = ["h", "minH", "height", "minHeight"], V_ = O((e, t) => {
  const r = Pt("Textarea", e), { className: n, rows: o, ...a } = Ee(e), i = Fl(a), s = o ? j6(r, M6) : r;
  return /* @__PURE__ */ h.jsx(
    E.textarea,
    {
      ref: t,
      rows: o,
      ...i,
      className: H("chakra-textarea", n),
      __css: s
    }
  );
});
V_.displayName = "Textarea";
var F6 = {
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
}, gd = (e) => {
  var t;
  return ((t = e.current) == null ? void 0 : t.ownerDocument) || document;
}, As = (e) => {
  var t, r;
  return ((r = (t = e.current) == null ? void 0 : t.ownerDocument) == null ? void 0 : r.defaultView) || window;
};
function z_(e = {}) {
  const {
    openDelay: t = 0,
    closeDelay: r = 0,
    closeOnClick: n = !0,
    closeOnMouseDown: o,
    closeOnScroll: a,
    closeOnPointerDown: i = o,
    closeOnEsc: s = !0,
    onOpen: l,
    onClose: c,
    placement: u,
    id: d,
    isOpen: f,
    defaultIsOpen: p,
    arrowSize: v = 10,
    arrowShadowColor: m,
    arrowPadding: g,
    modifiers: b,
    isDisabled: y,
    gutter: x,
    offset: _,
    direction: w,
    ...P
  } = e, { isOpen: k, onOpen: R, onClose: j } = $p({
    isOpen: f,
    defaultIsOpen: p,
    onOpen: l,
    onClose: c
  }), { referenceRef: $, getPopperProps: L, getArrowInnerProps: J, getArrowProps: G } = Zl({
    enabled: k,
    placement: u,
    arrowPadding: g,
    modifiers: b,
    gutter: x,
    offset: _,
    direction: w
  }), K = It(), Z = `tooltip-${d ?? K}`, N = ie(null), q = ie(), he = I(() => {
    q.current && (clearTimeout(q.current), q.current = void 0);
  }, []), D = ie(), M = I(() => {
    D.current && (clearTimeout(D.current), D.current = void 0);
  }, []), re = I(() => {
    M(), j();
  }, [j, M]), V = B6(N, re), z = I(() => {
    if (!y && !q.current) {
      V();
      const B = As(N);
      q.current = B.setTimeout(R, t);
    }
  }, [V, y, R, t]), U = I(() => {
    he();
    const B = As(N);
    D.current = B.setTimeout(re, r);
  }, [r, re, he]), oe = I(() => {
    k && n && U();
  }, [n, U, k]), ce = I(() => {
    k && i && U();
  }, [i, U, k]), se = I(
    (B) => {
      k && B.key === "Escape" && U();
    },
    [k, U]
  );
  qn(
    () => gd(N),
    "keydown",
    s ? se : void 0
  ), qn(
    () => {
      const B = N.current;
      if (!B)
        return null;
      const Ce = RS(B);
      return Ce.localName === "body" ? As(N) : Ce;
    },
    "scroll",
    () => {
      k && a && re();
    },
    { passive: !0, capture: !0 }
  ), ge(() => {
    y && (he(), k && j());
  }, [y, k, j, he]), ge(() => () => {
    he(), M();
  }, [he, M]), qn(() => N.current, "pointerleave", U);
  const W = I(
    (B = {}, Ce = null) => ({
      ...B,
      ref: je(N, Ce, $),
      onPointerEnter: ue(B.onPointerEnter, (ve) => {
        ve.pointerType !== "touch" && z();
      }),
      onClick: ue(B.onClick, oe),
      onPointerDown: ue(B.onPointerDown, ce),
      onFocus: ue(B.onFocus, z),
      onBlur: ue(B.onBlur, U),
      "aria-describedby": k ? Z : void 0
    }),
    [
      z,
      U,
      ce,
      k,
      Z,
      oe,
      $
    ]
  ), Y = I(
    (B = {}, Ce = null) => L(
      {
        ...B,
        style: {
          ...B.style,
          [St.arrowSize.var]: v ? `${v}px` : void 0,
          [St.arrowShadowColor.var]: m
        }
      },
      Ce
    ),
    [L, v, m]
  ), ne = I(
    (B = {}, Ce = null) => {
      const ee = {
        ...B.style,
        position: "relative",
        transformOrigin: St.transformOrigin.varRef
      };
      return {
        ref: Ce,
        ...P,
        ...B,
        id: Z,
        role: "tooltip",
        style: ee
      };
    },
    [P, Z]
  );
  return {
    isOpen: k,
    show: z,
    hide: U,
    getTriggerProps: W,
    getTooltipProps: ne,
    getTooltipPositionerProps: Y,
    getArrowProps: G,
    getArrowInnerProps: J
  };
}
var xu = "chakra-ui:close-tooltip";
function B6(e, t) {
  return ge(() => {
    const r = gd(e);
    return r.addEventListener(xu, t), () => r.removeEventListener(xu, t);
  }, [t, e]), () => {
    const r = gd(e), n = As(e);
    r.dispatchEvent(new n.CustomEvent(xu));
  };
}
function L6(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function V6(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
var z6 = E(Tr.div), W_ = O((e, t) => {
  var r, n;
  const o = Pt("Tooltip", e), a = Ee(e), i = sr(), {
    children: s,
    label: l,
    shouldWrapChildren: c,
    "aria-label": u,
    hasArrow: d,
    bg: f,
    portalProps: p,
    background: v,
    backgroundColor: m,
    bgColor: g,
    motionProps: b,
    ...y
  } = a, x = (n = (r = v ?? m) != null ? r : f) != null ? n : g;
  if (x) {
    o.bg = x;
    const L = Bd(i, "colors", x);
    o[St.arrowBg.var] = L;
  }
  const _ = z_({ ...y, direction: i.direction }), w = typeof s == "string" || c;
  let P;
  if (w)
    P = /* @__PURE__ */ h.jsx(
      E.span,
      {
        display: "inline-block",
        tabIndex: 0,
        ..._.getTriggerProps(),
        children: s
      }
    );
  else {
    const L = Hr.only(s);
    P = Tt(
      L,
      _.getTriggerProps(L.props, L.ref)
    );
  }
  const k = !!u, R = _.getTooltipProps({}, t), j = k ? L6(R, ["role", "id"]) : R, $ = V6(R, ["role", "id"]);
  return l ? /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    P,
    /* @__PURE__ */ h.jsx(Tn, { children: _.isOpen && /* @__PURE__ */ h.jsx(Jn, { ...p, children: /* @__PURE__ */ h.jsx(
      E.div,
      {
        ..._.getTooltipPositionerProps(),
        __css: {
          zIndex: o.zIndex,
          pointerEvents: "none"
        },
        children: /* @__PURE__ */ h.jsxs(
          z6,
          {
            variants: F6,
            initial: "exit",
            animate: "enter",
            exit: "exit",
            ...b,
            ...j,
            __css: o,
            children: [
              l,
              k && /* @__PURE__ */ h.jsx(E.span, { srOnly: !0, ...$, children: u }),
              d && /* @__PURE__ */ h.jsx(
                E.div,
                {
                  "data-popper-arrow": !0,
                  className: "chakra-tooltip__arrow-wrapper",
                  children: /* @__PURE__ */ h.jsx(
                    E.div,
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
  ] }) : /* @__PURE__ */ h.jsx(h.Fragment, { children: s });
});
W_.displayName = "Tooltip";
const W6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AbsoluteCenter: gV,
  Accordion: gx,
  AccordionButton: sx,
  AccordionIcon: dx,
  AccordionItem: fx,
  AccordionPanel: vx,
  AccordionProvider: cx,
  Alert: Tf,
  AlertDescription: kf,
  AlertDialog: q3,
  AlertDialogBody: ks,
  AlertDialogCloseButton: Ps,
  AlertDialogContent: K3,
  AlertDialogFooter: ws,
  AlertDialogHeader: _s,
  AlertDialogOverlay: Cs,
  AlertIcon: Pf,
  AlertTitle: Ef,
  AspectRatio: QS,
  Avatar: Lf,
  AvatarBadge: yx,
  AvatarGroup: wx,
  Badge: e1,
  Box: Yl,
  Breadcrumb: Cx,
  BreadcrumbItem: _x,
  BreadcrumbLink: Vf,
  BreadcrumbSeparator: Qs,
  Button: No,
  ButtonGroup: Px,
  ButtonSpinner: el,
  CSSPolyfill: ey,
  CSSReset: ty,
  CSSVars: Eb,
  Card: dF,
  CardBody: lF,
  CardFooter: cF,
  CardHeader: uF,
  Center: t1,
  ChakraBaseProvider: _5,
  ChakraProvider: ax,
  Checkbox: Lx,
  CheckboxGroup: Ax,
  CheckboxIcon: Ix,
  Circle: YS,
  CircularProgress: kw,
  CircularProgressLabel: ww,
  CloseButton: hi,
  Code: r1,
  Collapse: $f,
  ColorModeContext: Qn,
  ColorModeProvider: Rd,
  ColorModeScript: Zk,
  Container: n1,
  ControlBox: Vx,
  DarkMode: iy,
  Divider: al,
  Drawer: J3,
  DrawerBody: ks,
  DrawerCloseButton: Ps,
  DrawerContent: X1,
  DrawerFooter: ws,
  DrawerHeader: _s,
  DrawerOverlay: Cs,
  EASINGS: xn,
  Editable: Zx,
  EditableInput: Ux,
  EditablePreview: Gx,
  EditableTextarea: qx,
  EnvironmentProvider: rf,
  Fade: px,
  Flex: o1,
  FocusLock: ap,
  FormControl: Rx,
  FormErrorIcon: Dx,
  FormErrorMessage: Ox,
  FormHelperText: $x,
  FormLabel: jx,
  GenericAvatarIcon: Mf,
  GlobalStyle: Tb,
  Grid: vp,
  GridItem: KS,
  HStack: Co,
  Heading: wp,
  Hide: i1,
  Highlight: fV,
  Icon: Rt,
  IconButton: Ex,
  Image: Bf,
  Img: eF,
  Indicator: pV,
  Input: hp,
  InputAddon: Ul,
  InputGroup: FS,
  InputLeftAddon: up,
  InputLeftElement: fp,
  InputRightAddon: dp,
  InputRightElement: pp,
  Kbd: JS,
  LightMode: sy,
  Link: BS,
  LinkBox: mV,
  LinkOverlay: hV,
  List: ql,
  ListIcon: WS,
  ListItem: zS,
  Mark: ZS,
  Menu: Dp,
  MenuButton: Bp,
  MenuCommand: jp,
  MenuDescendantsProvider: _1,
  MenuDivider: F1,
  MenuGroup: Fp,
  MenuIcon: Jl,
  MenuItem: j1,
  MenuItemOption: Lp,
  MenuList: Mp,
  MenuOptionGroup: M1,
  MenuProvider: E1,
  Modal: Ql,
  ModalBody: ks,
  ModalCloseButton: Ps,
  ModalContent: Wp,
  ModalContextProvider: z1,
  ModalFocusScope: zp,
  ModalFooter: ws,
  ModalHeader: _s,
  ModalOverlay: Cs,
  NumberDecrementStepper: rw,
  NumberIncrementStepper: nw,
  NumberInput: J1,
  NumberInputField: ew,
  NumberInputStepper: Q1,
  OrderedList: LS,
  PinInput: cw,
  PinInputDescendantsProvider: ow,
  PinInputField: uw,
  PinInputProvider: aw,
  Popover: hw,
  PopoverAnchor: mw,
  PopoverArrow: vw,
  PopoverBody: gw,
  PopoverCloseButton: yw,
  PopoverContent: xw,
  PopoverFooter: Sw,
  PopoverHeader: dw,
  PopoverTrigger: fw,
  Portal: Jn,
  PortalManager: Ed,
  Progress: Pw,
  ProgressLabel: Ew,
  Radio: Rw,
  RadioGroup: Aw,
  RangeSlider: Kw,
  RangeSliderFilledTrack: Zw,
  RangeSliderMark: Jw,
  RangeSliderProvider: qw,
  RangeSliderThumb: Yw,
  RangeSliderTrack: Xw,
  RequiredIndicator: Wf,
  ScaleFade: hx,
  Select: $w,
  SelectField: qp,
  Show: s1,
  SimpleGrid: gp,
  Skeleton: tc,
  SkeletonCircle: Ow,
  SkeletonText: Dw,
  SkipNavContent: Fw,
  SkipNavLink: Mw,
  Slide: Df,
  SlideFade: mx,
  Slider: t_,
  SliderFilledTrack: o_,
  SliderMark: a_,
  SliderProvider: e_,
  SliderThumb: r_,
  SliderTrack: n_,
  Spacer: US,
  Spinner: Rl,
  Square: _p,
  Stack: Kl,
  StackDivider: qS,
  StackItem: xp,
  Stat: i_,
  StatArrow: s_,
  StatDownArrow: Kp,
  StatGroup: l_,
  StatHelpText: c_,
  StatLabel: u_,
  StatNumber: d_,
  StatUpArrow: Yp,
  Step: v6,
  StepDescription: b6,
  StepIcon: p_,
  StepIndicator: S6,
  StepIndicatorContent: w6,
  StepNumber: vd,
  StepSeparator: _6,
  StepStatus: f_,
  StepTitle: m6,
  Stepper: g6,
  StylesProvider: LO,
  Switch: h_,
  Tab: O_,
  TabIndicator: I_,
  TabList: R_,
  TabPanel: $_,
  TabPanels: N_,
  Table: m_,
  TableCaption: v_,
  TableContainer: E6,
  Tabs: A_,
  TabsDescendantsProvider: g_,
  TabsProvider: S_,
  Tag: D_,
  TagCloseButton: L_,
  TagLabel: j_,
  TagLeftIcon: M_,
  TagRightIcon: F_,
  Tbody: T6,
  Td: A6,
  Text: yp,
  Textarea: V_,
  Tfoot: I6,
  Th: R6,
  Thead: k6,
  ThemeProvider: Qd,
  Toast: rx,
  ToastOptionProvider: nx,
  ToastProvider: Rf,
  Tooltip: W_,
  Tr: P6,
  UnorderedList: VS,
  VStack: Sp,
  VisuallyHidden: Mx,
  VisuallyHiddenInput: Fx,
  Wrap: GS,
  WrapItem: bp,
  addPrefix: Cy,
  assignRef: jS,
  background: Sa,
  baseTheme: Ud,
  border: ze,
  calc: yn,
  chakra: E,
  color: fy,
  cookieStorageManager: qk,
  cookieStorageManagerSSR: Kk,
  createCookieStorageManager: Id,
  createIcon: s5,
  createLocalStorageManager: oy,
  createMultiStyleConfigHelpers: rt,
  createRenderToast: Af,
  createStandaloneToast: w5,
  createStylesContext: ef,
  createToastFn: If,
  css: Fd,
  cssVar: Se,
  defineCssVars: Ey,
  defineStyle: qP,
  defineStyleConfig: KP,
  effect: Ns,
  extendBaseTheme: hN,
  extendTheme: nb,
  fadeConfig: Nf,
  filter: py,
  flattenTokens: Iy,
  flexbox: ja,
  forwardRef: O,
  getCSSVar: Bd,
  getCss: Oy,
  getScriptSrc: ly,
  getSlideTransition: Xs,
  getToastPlacement: ex,
  getToken: $d,
  grid: Od,
  interactivity: hy,
  isChakraTheme: My,
  isStyleProp: Ny,
  keyframes: Er,
  layout: er,
  layoutPropNames: Md,
  list: my,
  localStorageManager: ay,
  mergeThemeOverride: eo,
  omitThemingProps: Ee,
  others: vy,
  popperCSSVars: St,
  position: Po,
  propNames: $y,
  pseudoPropNames: jd,
  pseudoSelectors: oi,
  requiredChakraThemeKeys: jy,
  resolveStyleConfig: Dy,
  ring: gy,
  scaleFadeConfig: Of,
  scroll: wy,
  shouldForwardProp: Cb,
  slideFadeConfig: Zs,
  space: nt,
  styled: vs,
  systemProps: gl,
  textDecoration: yy,
  theme: xl,
  toCSSObject: kb,
  toCSSVar: Ry,
  toVarDefinition: Py,
  toVarReference: ky,
  tokenToCSSVar: uy,
  transform: by,
  transition: xy,
  typography: Sy,
  useAccordion: lx,
  useAccordionContext: Dl,
  useAccordionItem: ux,
  useAccordionItemState: K5,
  useAccordionStyles: mi,
  useAlertStyles: $l,
  useAnimationState: VL,
  useAvatarStyles: jf,
  useBoolean: zL,
  useBreadcrumbStyles: jl,
  useBreakpoint: l1,
  useBreakpointValue: c1,
  useButtonGroup: kx,
  useCallbackRef: nn,
  useCardStyles: Ml,
  useChakra: hl,
  useCheckbox: Uf,
  useCheckboxGroup: Tx,
  useClipboard: XL,
  useColorMode: ri,
  useColorModePreference: bV,
  useColorModeValue: Uk,
  useComponentStyles__unstable: EO,
  useConst: ZL,
  useControllableProp: MS,
  useControllableState: RL,
  useCounter: Wx,
  useDimensions: JL,
  useDisclosure: $L,
  useDrawerContext: Y1,
  useEditable: Xx,
  useEditableContext: Jo,
  useEditableControls: UF,
  useEditableState: FF,
  useEditableStyles: Vl,
  useEnvironment: Ab,
  useEventListener: yi,
  useEventListenerMap: NL,
  useFocusEffect: OL,
  useFocusOnHide: jL,
  useFocusOnPointerDown: ML,
  useFocusOnShow: BL,
  useForceUpdate: LL,
  useFormControl: Fl,
  useFormControlContext: In,
  useFormControlProps: Bl,
  useFormControlStyles: zf,
  useFormErrorStyles: Nx,
  useHighlight: XS,
  useId: lp,
  useIds: AL,
  useImage: Ff,
  useInputGroupStyles: cp,
  useInterval: _L,
  useLatestRef: CL,
  useListStyles: mp,
  useMediaQuery: bi,
  useMenu: A1,
  useMenuButton: I1,
  useMenuContext: oo,
  useMenuDescendant: P1,
  useMenuDescendants: k1,
  useMenuDescendantsContext: C1,
  useMenuItem: Op,
  useMenuList: R1,
  useMenuOption: N1,
  useMenuOptionGroup: O1,
  useMenuPositioner: $1,
  useMenuState: Zz,
  useMenuStyles: ao,
  useMergeRefs: kL,
  useModal: V1,
  useModalContext: an,
  useModalManager: Vp,
  useModalStyles: $n,
  useMouseDownRef: PL,
  useMultiStyleConfig: Ze,
  useNumberInput: Z1,
  useNumberInputStyles: wi,
  useOptionalPart: IL,
  useOutsideClick: EL,
  usePanGesture: TL,
  usePinInput: sw,
  usePinInputContext: iw,
  usePinInputField: lw,
  usePointerEvent: ip,
  usePopover: pw,
  usePopoverContext: cn,
  usePopoverStyles: io,
  usePopper: Zl,
  usePortalManager: ry,
  usePrefersReducedMotion: yV,
  usePrevious: yL,
  useProgressStyles: Up,
  useQuery: Cp,
  useRadio: Iw,
  useRadioGroup: Tw,
  useRadioGroupContext: Gp,
  useRangeSlider: Gw,
  useRangeSliderContext: _i,
  useRangeSliderStyles: Ci,
  useSafeLayoutEffect: Wl,
  useShortcut: xL,
  useSlider: Qw,
  useSliderContext: ki,
  useSliderStyles: Pi,
  useStatStyles: Ei,
  useStepContext: un,
  useStepperStyles: On,
  useSteps: y6,
  useStyleConfig: Pt,
  useStyles: VO,
  useTab: __,
  useTabIndicator: P_,
  useTabList: w_,
  useTabPanel: k_,
  useTabPanels: C_,
  useTableStyles: Dn,
  useTabs: x_,
  useTabsContext: Qo,
  useTabsDescendant: b_,
  useTabsDescendants: y_,
  useTabsDescendantsContext: Xp,
  useTabsStyles: ea,
  useTagStyles: Zp,
  useTheme: sr,
  useTimeout: SL,
  useToast: x5,
  useToken: cy,
  useTooltip: z_,
  useUnmountEffect: sp,
  useUpdateEffect: Hl,
  useWhyDidYouUpdate: wL,
  visuallyHiddenStyle: Ll,
  withDefaultColorScheme: ab,
  withDefaultProps: vN,
  withDefaultSize: ib,
  withDefaultVariant: sb,
  withDelay: hr
}, Symbol.toStringTag, { value: "Module" })), H6 = nb({
  colors: {
    blue: {
      50: "#eef8ff",
      100: "#d9efff",
      200: "#bce3ff",
      300: "#8ed3ff",
      400: "#59b8ff",
      500: "#3399ff",
      600: "#1b79f5",
      700: "#1463e1",
      800: "#174fb6",
      900: "#19458f",
      950: "#142b57"
    }
  },
  components: {
    Menu: {
      baseStyle: {
        list: {
          p: 1
        },
        item: {
          rounded: 4
        }
      }
    },
    Button: {
      defaultProps: {
        colorScheme: "blue"
      }
    }
  }
}), U6 = (e) => /* @__PURE__ */ h.jsx(ax, { theme: { ...H6, ...e.theme }, children: e.children });
var H_ = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ng = Gt.createContext && Gt.createContext(H_), _n = globalThis && globalThis.__assign || function() {
  return _n = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var o in t)
        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
    }
    return e;
  }, _n.apply(this, arguments);
}, G6 = globalThis && globalThis.__rest || function(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]]);
  return r;
};
function U_(e) {
  return e && e.map(function(t, r) {
    return Gt.createElement(t.tag, _n({
      key: r
    }, t.attr), U_(t.child));
  });
}
function q6(e) {
  return function(t) {
    return Gt.createElement(K6, _n({
      attr: _n({}, e.attr)
    }, t), U_(e.child));
  };
}
function K6(e) {
  var t = function(r) {
    var n = e.attr, o = e.size, a = e.title, i = G6(e, ["attr", "size", "title"]), s = o || r.size || "1em", l;
    return r.className && (l = r.className), e.className && (l = (l ? l + " " : "") + e.className), Gt.createElement("svg", _n({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, r.attr, n, i, {
      className: l,
      style: _n(_n({
        color: e.color || r.color
      }, r.style), e.style),
      height: s,
      width: s,
      xmlns: "http://www.w3.org/2000/svg"
    }), a && Gt.createElement("title", null, a), e.children);
  };
  return Ng !== void 0 ? Gt.createElement(Ng.Consumer, null, function(r) {
    return t(r);
  }) : t(H_);
}
function Y6(e) {
  return q6({ tag: "svg", attr: { fill: "currentColor", viewBox: "0 0 16 16" }, child: [{ tag: "path", attr: { d: "M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm8 0A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm-8 8A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm8 0A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3z" } }] })(e);
}
const X6 = (e) => {
  var r, n;
  const t = we(() => {
    var o;
    return (o = e.apps) == null ? void 0 : o.find((a) => a.active);
  }, [e.apps]);
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsxs(Co, { justifyContent: "space-between", w: "full", spacing: 3, children: [
      /* @__PURE__ */ h.jsxs(Co, { children: [
        /* @__PURE__ */ h.jsxs(Dp, { children: [
          /* @__PURE__ */ h.jsx(Bp, { children: /* @__PURE__ */ h.jsx(No, { p: 1, variant: "ghost", rounded: "full", children: /* @__PURE__ */ h.jsx(Y6, {}) }) }),
          /* @__PURE__ */ h.jsx(Mp, { py: 3, children: /* @__PURE__ */ h.jsx(gp, { columns: 3, spacing: 5, children: e.apps.map((o) => /* @__PURE__ */ h.jsx(No, { h: "auto", py: 2, variant: "ghost", children: /* @__PURE__ */ h.jsxs(Sp, { spacing: 1, children: [
            /* @__PURE__ */ h.jsx(Bf, { src: o.image, h: 6, w: "auto" }),
            /* @__PURE__ */ h.jsx(yp, { fontSize: "sm", children: o.name })
          ] }) })) }) })
        ] }),
        /* @__PURE__ */ h.jsx(wp, { size: "md", children: t == null ? void 0 : t.name })
      ] }),
      /* @__PURE__ */ h.jsx(Co, { children: /* @__PURE__ */ h.jsx(Lf, { size: "sm" }) })
    ] }),
    /* @__PURE__ */ h.jsx(al, {}),
    (((r = e.navLinks) == null ? void 0 : r.length) || 0) > 0 && /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
      /* @__PURE__ */ h.jsx(Co, { px: 3, py: 1, children: (n = e.navLinks) == null ? void 0 : n.map((o) => /* @__PURE__ */ h.jsx(
        No,
        {
          fontSize: 11,
          py: 1,
          h: "auto",
          rounded: "full",
          px: 3,
          variant: o.active ? "solid" : "ghost",
          children: o.label
        }
      )) }),
      /* @__PURE__ */ h.jsx(al, {})
    ] })
  ] });
}, n9 = {
  ...W6,
  RfsThemeProvider: U6,
  AppsBar: X6
};
export {
  n9 as default
};
