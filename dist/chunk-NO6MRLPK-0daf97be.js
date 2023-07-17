import * as ae from "react";
import zr, { forwardRef as ja, useContext as Se, createContext as Zt, useLayoutEffect as eu, useEffect as Gt, useRef as Mr, useCallback as tu, useInsertionEffect as qf, useMemo as Go, createElement as Kf, useId as Xf } from "react";
function Zf(e) {
  if (e.sheet)
    return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e)
      return document.styleSheets[t];
}
function Jf(e) {
  var t = document.createElement("style");
  return t.setAttribute("data-emotion", e.key), e.nonce !== void 0 && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t.setAttribute("data-s", ""), t;
}
var Qf = /* @__PURE__ */ function() {
  function e(r) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = r.speedy === void 0 ? process.env.NODE_ENV === "production" : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var t = e.prototype;
  return t.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, t.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Jf(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = Zf(o);
      try {
        a.insertRule(n, a.cssRules.length);
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
}(), Ce = "-ms-", $o = "-moz-", q = "-webkit-", Ia = "comm", La = "rule", Na = "decl", eh = "@import", ru = "@keyframes", th = "@layer", rh = Math.abs, qo = String.fromCharCode, nh = Object.assign;
function oh(e, t) {
  return Te(e, 0) ^ 45 ? (((t << 2 ^ Te(e, 0)) << 2 ^ Te(e, 1)) << 2 ^ Te(e, 2)) << 2 ^ Te(e, 3) : 0;
}
function nu(e) {
  return e.trim();
}
function ih(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function K(e, t, r) {
  return e.replace(t, r);
}
function ua(e, t) {
  return e.indexOf(t);
}
function Te(e, t) {
  return e.charCodeAt(t) | 0;
}
function xn(e, t, r) {
  return e.slice(t, r);
}
function ht(e) {
  return e.length;
}
function Wa(e) {
  return e.length;
}
function eo(e, t) {
  return t.push(e), e;
}
function ah(e, t) {
  return e.map(t).join("");
}
var Ko = 1, Or = 1, ou = 0, Be = 0, be = 0, Lr = "";
function Xo(e, t, r, n, o, i, a) {
  return { value: e, root: t, parent: r, type: n, props: o, children: i, line: Ko, column: Or, length: a, return: "" };
}
function Kr(e, t) {
  return nh(Xo("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function sh() {
  return be;
}
function lh() {
  return be = Be > 0 ? Te(Lr, --Be) : 0, Or--, be === 10 && (Or = 1, Ko--), be;
}
function Ne() {
  return be = Be < ou ? Te(Lr, Be++) : 0, Or++, be === 10 && (Or = 1, Ko++), be;
}
function pt() {
  return Te(Lr, Be);
}
function po() {
  return Be;
}
function Dn(e, t) {
  return xn(Lr, e, t);
}
function wn(e) {
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
function iu(e) {
  return Ko = Or = 1, ou = ht(Lr = e), Be = 0, [];
}
function au(e) {
  return Lr = "", e;
}
function mo(e) {
  return nu(Dn(Be - 1, da(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ch(e) {
  for (; (be = pt()) && be < 33; )
    Ne();
  return wn(e) > 2 || wn(be) > 3 ? "" : " ";
}
function uh(e, t) {
  for (; --t && Ne() && !(be < 48 || be > 102 || be > 57 && be < 65 || be > 70 && be < 97); )
    ;
  return Dn(e, po() + (t < 6 && pt() == 32 && Ne() == 32));
}
function da(e) {
  for (; Ne(); )
    switch (be) {
      case e:
        return Be;
      case 34:
      case 39:
        e !== 34 && e !== 39 && da(be);
        break;
      case 40:
        e === 41 && da(e);
        break;
      case 92:
        Ne();
        break;
    }
  return Be;
}
function dh(e, t) {
  for (; Ne() && e + be !== 47 + 10; )
    if (e + be === 42 + 42 && pt() === 47)
      break;
  return "/*" + Dn(t, Be - 1) + "*" + qo(e === 47 ? e : Ne());
}
function fh(e) {
  for (; !wn(pt()); )
    Ne();
  return Dn(e, Be);
}
function hh(e) {
  return au(go("", null, null, null, [""], e = iu(e), 0, [0], e));
}
function go(e, t, r, n, o, i, a, s, l) {
  for (var c = 0, u = 0, d = a, h = 0, m = 0, b = 0, S = 1, T = 1, _ = 1, x = 0, k = "", P = o, w = i, F = n, R = k; T; )
    switch (b = x, x = Ne()) {
      case 40:
        if (b != 108 && Te(R, d - 1) == 58) {
          ua(R += K(mo(x), "&", "&\f"), "&\f") != -1 && (_ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        R += mo(x);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        R += ch(b);
        break;
      case 92:
        R += uh(po() - 1, 7);
        continue;
      case 47:
        switch (pt()) {
          case 42:
          case 47:
            eo(ph(dh(Ne(), po()), t, r), l);
            break;
          default:
            R += "/";
        }
        break;
      case 123 * S:
        s[c++] = ht(R) * _;
      case 125 * S:
      case 59:
      case 0:
        switch (x) {
          case 0:
          case 125:
            T = 0;
          case 59 + u:
            _ == -1 && (R = K(R, /\f/g, "")), m > 0 && ht(R) - d && eo(m > 32 ? zs(R + ";", n, r, d - 1) : zs(K(R, " ", "") + ";", n, r, d - 2), l);
            break;
          case 59:
            R += ";";
          default:
            if (eo(F = Vs(R, t, r, c, u, o, s, k, P = [], w = [], d), i), x === 123)
              if (u === 0)
                go(R, t, F, F, P, i, d, s, w);
              else
                switch (h === 99 && Te(R, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    go(e, F, F, n && eo(Vs(e, F, F, 0, 0, o, s, k, o, P = [], d), w), o, w, d, s, n ? P : w);
                    break;
                  default:
                    go(R, F, F, F, [""], w, 0, s, w);
                }
        }
        c = u = m = 0, S = _ = 1, k = R = "", d = a;
        break;
      case 58:
        d = 1 + ht(R), m = b;
      default:
        if (S < 1) {
          if (x == 123)
            --S;
          else if (x == 125 && S++ == 0 && lh() == 125)
            continue;
        }
        switch (R += qo(x), x * S) {
          case 38:
            _ = u > 0 ? 1 : (R += "\f", -1);
            break;
          case 44:
            s[c++] = (ht(R) - 1) * _, _ = 1;
            break;
          case 64:
            pt() === 45 && (R += mo(Ne())), h = pt(), u = d = ht(k = R += fh(po())), x++;
            break;
          case 45:
            b === 45 && ht(R) == 2 && (S = 0);
        }
    }
  return i;
}
function Vs(e, t, r, n, o, i, a, s, l, c, u) {
  for (var d = o - 1, h = o === 0 ? i : [""], m = Wa(h), b = 0, S = 0, T = 0; b < n; ++b)
    for (var _ = 0, x = xn(e, d + 1, d = rh(S = a[b])), k = e; _ < m; ++_)
      (k = nu(S > 0 ? h[_] + " " + x : K(x, /&\f/g, h[_]))) && (l[T++] = k);
  return Xo(e, t, r, o === 0 ? La : s, l, c, u);
}
function ph(e, t, r) {
  return Xo(e, t, r, Ia, qo(sh()), xn(e, 2, -2), 0);
}
function zs(e, t, r, n) {
  return Xo(e, t, r, Na, xn(e, 0, n), xn(e, n + 1, -1), n);
}
function Er(e, t) {
  for (var r = "", n = Wa(e), o = 0; o < n; o++)
    r += t(e[o], o, e, t) || "";
  return r;
}
function mh(e, t, r, n) {
  switch (e.type) {
    case th:
      if (e.children.length)
        break;
    case eh:
    case Na:
      return e.return = e.return || e.value;
    case Ia:
      return "";
    case ru:
      return e.return = e.value + "{" + Er(e.children, n) + "}";
    case La:
      e.value = e.props.join(",");
  }
  return ht(r = Er(e.children, n)) ? e.return = e.value + "{" + r + "}" : "";
}
function gh(e) {
  var t = Wa(e);
  return function(r, n, o, i) {
    for (var a = "", s = 0; s < t; s++)
      a += e[s](r, n, o, i) || "";
    return a;
  };
}
function vh(e) {
  return function(t) {
    t.root || (t = t.return) && e(t);
  };
}
var Ms = function(t) {
  var r = /* @__PURE__ */ new WeakMap();
  return function(n) {
    if (r.has(n))
      return r.get(n);
    var o = t(n);
    return r.set(n, o), o;
  };
};
function su(e) {
  var t = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return t[r] === void 0 && (t[r] = e(r)), t[r];
  };
}
var bh = function(t, r, n) {
  for (var o = 0, i = 0; o = i, i = pt(), o === 38 && i === 12 && (r[n] = 1), !wn(i); )
    Ne();
  return Dn(t, Be);
}, yh = function(t, r) {
  var n = -1, o = 44;
  do
    switch (wn(o)) {
      case 0:
        o === 38 && pt() === 12 && (r[n] = 1), t[n] += bh(Be - 1, r, n);
        break;
      case 2:
        t[n] += mo(o);
        break;
      case 4:
        if (o === 44) {
          t[++n] = pt() === 58 ? "&\f" : "", r[n] = t[n].length;
          break;
        }
      default:
        t[n] += qo(o);
    }
  while (o = Ne());
  return t;
}, Sh = function(t, r) {
  return au(yh(iu(t), r));
}, Os = /* @__PURE__ */ new WeakMap(), xh = function(t) {
  if (!(t.type !== "rule" || !t.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  t.length < 1)) {
    for (var r = t.value, n = t.parent, o = t.column === n.column && t.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(t.props.length === 1 && r.charCodeAt(0) !== 58 && !Os.get(n)) && !o) {
      Os.set(t, !0);
      for (var i = [], a = Sh(r, i), s = n.props, l = 0, c = 0; l < a.length; l++)
        for (var u = 0; u < s.length; u++, c++)
          t.props[c] = i[l] ? a[l].replace(/&\f/g, s[u]) : s[u] + " " + a[l];
    }
  }
}, wh = function(t) {
  if (t.type === "decl") {
    var r = t.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (t.return = "", t.value = "");
  }
}, _h = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", kh = function(t) {
  return t.type === "comm" && t.children.indexOf(_h) > -1;
}, Th = function(t) {
  return function(r, n, o) {
    if (!(r.type !== "rule" || t.compat)) {
      var i = r.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!r.parent, s = a ? r.parent.children : (
          // global rule at the root level
          o
        ), l = s.length - 1; l >= 0; l--) {
          var c = s[l];
          if (c.line < r.line)
            break;
          if (c.column < r.column) {
            if (kh(c))
              return;
            break;
          }
        }
        i.forEach(function(u) {
          console.error('The pseudo class "' + u + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + u.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, lu = function(t) {
  return t.type.charCodeAt(1) === 105 && t.type.charCodeAt(0) === 64;
}, Ch = function(t, r) {
  for (var n = t - 1; n >= 0; n--)
    if (!lu(r[n]))
      return !0;
  return !1;
}, Fs = function(t) {
  t.type = "", t.value = "", t.return = "", t.children = "", t.props = "";
}, Ph = function(t, r, n) {
  lu(t) && (t.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Fs(t)) : Ch(r, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Fs(t)));
};
function cu(e, t) {
  switch (oh(e, t)) {
    case 5103:
      return q + "print-" + e + e;
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
      return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + e + $o + e + Ce + e + e;
    case 6828:
    case 4268:
      return q + e + Ce + e + e;
    case 6165:
      return q + e + Ce + "flex-" + e + e;
    case 5187:
      return q + e + K(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + Ce + "flex-$1$2") + e;
    case 5443:
      return q + e + Ce + "flex-item-" + K(e, /flex-|-self/, "") + e;
    case 4675:
      return q + e + Ce + "flex-line-pack" + K(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return q + e + Ce + K(e, "shrink", "negative") + e;
    case 5292:
      return q + e + Ce + K(e, "basis", "preferred-size") + e;
    case 6060:
      return q + "box-" + K(e, "-grow", "") + q + e + Ce + K(e, "grow", "positive") + e;
    case 4554:
      return q + K(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
      return K(K(K(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return K(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return K(K(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + Ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + q + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return K(e, /(.+)-inline(.+)/, q + "$1$2") + e;
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
      if (ht(e) - 1 - t > 6)
        switch (Te(e, t + 1)) {
          case 109:
            if (Te(e, t + 4) !== 45)
              break;
          case 102:
            return K(e, /(.+:)(.+)-([^]+)/, "$1" + q + "$2-$3$1" + $o + (Te(e, t + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~ua(e, "stretch") ? cu(K(e, "stretch", "fill-available"), t) + e : e;
        }
      break;
    case 4949:
      if (Te(e, t + 1) !== 115)
        break;
    case 6444:
      switch (Te(e, ht(e) - 3 - (~ua(e, "!important") && 10))) {
        case 107:
          return K(e, ":", ":" + q) + e;
        case 101:
          return K(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + q + (Te(e, 14) === 45 ? "inline-" : "") + "box$3$1" + q + "$2$3$1" + Ce + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Te(e, t + 11)) {
        case 114:
          return q + e + Ce + K(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return q + e + Ce + K(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return q + e + Ce + K(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return q + e + Ce + e + e;
  }
  return e;
}
var Eh = function(t, r, n, o) {
  if (t.length > -1 && !t.return)
    switch (t.type) {
      case Na:
        t.return = cu(t.value, t.length);
        break;
      case ru:
        return Er([Kr(t, {
          value: K(t.value, "@", "@" + q)
        })], o);
      case La:
        if (t.length)
          return ah(t.props, function(i) {
            switch (ih(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Er([Kr(t, {
                  props: [K(i, /:(read-\w+)/, ":" + $o + "$1")]
                })], o);
              case "::placeholder":
                return Er([Kr(t, {
                  props: [K(i, /:(plac\w+)/, ":" + q + "input-$1")]
                }), Kr(t, {
                  props: [K(i, /:(plac\w+)/, ":" + $o + "$1")]
                }), Kr(t, {
                  props: [K(i, /:(plac\w+)/, Ce + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, $h = [Eh], Ah = function(t) {
  var r = t.key;
  if (process.env.NODE_ENV !== "production" && !r)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (r === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(S) {
      var T = S.getAttribute("data-emotion");
      T.indexOf(" ") !== -1 && (document.head.appendChild(S), S.setAttribute("data-s", ""));
    });
  }
  var o = t.stylisPlugins || $h;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(r))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + r + '" was passed');
  var i = {}, a, s = [];
  a = t.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(S) {
      for (var T = S.getAttribute("data-emotion").split(" "), _ = 1; _ < T.length; _++)
        i[T[_]] = !0;
      s.push(S);
    }
  );
  var l, c = [xh, wh];
  process.env.NODE_ENV !== "production" && c.push(Th({
    get compat() {
      return b.compat;
    }
  }), Ph);
  {
    var u, d = [mh, process.env.NODE_ENV !== "production" ? function(S) {
      S.root || (S.return ? u.insert(S.return) : S.value && S.type !== Ia && u.insert(S.value + "{}"));
    } : vh(function(S) {
      u.insert(S);
    })], h = gh(c.concat(o, d)), m = function(T) {
      return Er(hh(T), h);
    };
    l = function(T, _, x, k) {
      u = x, process.env.NODE_ENV !== "production" && _.map !== void 0 && (u = {
        insert: function(w) {
          x.insert(w + _.map);
        }
      }), m(T ? T + "{" + _.styles + "}" : _.styles), k && (b.inserted[_.name] = !0);
    };
  }
  var b = {
    key: r,
    sheet: new Qf({
      key: r,
      container: a,
      nonce: t.nonce,
      speedy: t.speedy,
      prepend: t.prepend,
      insertionPoint: t.insertionPoint
    }),
    nonce: t.nonce,
    inserted: i,
    registered: {},
    insert: l
  };
  return b.sheet.hydrate(s), b;
};
function Ao() {
  return Ao = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ao.apply(this, arguments);
}
var to = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function uu(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fa = { exports: {} }, Q = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bs;
function Rh() {
  if (Bs)
    return Q;
  Bs = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
  function k(w) {
    if (typeof w == "object" && w !== null) {
      var F = w.$$typeof;
      switch (F) {
        case t:
          switch (w = w.type, w) {
            case l:
            case c:
            case n:
            case i:
            case o:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case s:
                case u:
                case b:
                case m:
                case a:
                  return w;
                default:
                  return F;
              }
          }
        case r:
          return F;
      }
    }
  }
  function P(w) {
    return k(w) === c;
  }
  return Q.AsyncMode = l, Q.ConcurrentMode = c, Q.ContextConsumer = s, Q.ContextProvider = a, Q.Element = t, Q.ForwardRef = u, Q.Fragment = n, Q.Lazy = b, Q.Memo = m, Q.Portal = r, Q.Profiler = i, Q.StrictMode = o, Q.Suspense = d, Q.isAsyncMode = function(w) {
    return P(w) || k(w) === l;
  }, Q.isConcurrentMode = P, Q.isContextConsumer = function(w) {
    return k(w) === s;
  }, Q.isContextProvider = function(w) {
    return k(w) === a;
  }, Q.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Q.isForwardRef = function(w) {
    return k(w) === u;
  }, Q.isFragment = function(w) {
    return k(w) === n;
  }, Q.isLazy = function(w) {
    return k(w) === b;
  }, Q.isMemo = function(w) {
    return k(w) === m;
  }, Q.isPortal = function(w) {
    return k(w) === r;
  }, Q.isProfiler = function(w) {
    return k(w) === i;
  }, Q.isStrictMode = function(w) {
    return k(w) === o;
  }, Q.isSuspense = function(w) {
    return k(w) === d;
  }, Q.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === c || w === i || w === o || w === d || w === h || typeof w == "object" && w !== null && (w.$$typeof === b || w.$$typeof === m || w.$$typeof === a || w.$$typeof === s || w.$$typeof === u || w.$$typeof === T || w.$$typeof === _ || w.$$typeof === x || w.$$typeof === S);
  }, Q.typeOf = k, Q;
}
var ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var js;
function Dh() {
  return js || (js = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, b = e ? Symbol.for("react.lazy") : 60116, S = e ? Symbol.for("react.block") : 60121, T = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, x = e ? Symbol.for("react.scope") : 60119;
    function k(A) {
      return typeof A == "string" || typeof A == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      A === n || A === c || A === i || A === o || A === d || A === h || typeof A == "object" && A !== null && (A.$$typeof === b || A.$$typeof === m || A.$$typeof === a || A.$$typeof === s || A.$$typeof === u || A.$$typeof === T || A.$$typeof === _ || A.$$typeof === x || A.$$typeof === S);
    }
    function P(A) {
      if (typeof A == "object" && A !== null) {
        var st = A.$$typeof;
        switch (st) {
          case t:
            var Ot = A.type;
            switch (Ot) {
              case l:
              case c:
              case n:
              case i:
              case o:
              case d:
                return Ot;
              default:
                var xt = Ot && Ot.$$typeof;
                switch (xt) {
                  case s:
                  case u:
                  case b:
                  case m:
                  case a:
                    return xt;
                  default:
                    return st;
                }
            }
          case r:
            return st;
        }
      }
    }
    var w = l, F = c, R = s, O = a, L = t, ge = u, Pe = n, Ee = b, he = m, Z = r, re = i, $e = o, Ie = d, bt = !1;
    function yt(A) {
      return bt || (bt = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), at(A) || P(A) === l;
    }
    function at(A) {
      return P(A) === c;
    }
    function J(A) {
      return P(A) === s;
    }
    function He(A) {
      return P(A) === a;
    }
    function U(A) {
      return typeof A == "object" && A !== null && A.$$typeof === t;
    }
    function St(A) {
      return P(A) === u;
    }
    function Mt(A) {
      return P(A) === n;
    }
    function we(A) {
      return P(A) === b;
    }
    function Je(A) {
      return P(A) === m;
    }
    function Ve(A) {
      return P(A) === r;
    }
    function Ye(A) {
      return P(A) === i;
    }
    function Ae(A) {
      return P(A) === o;
    }
    function ze(A) {
      return P(A) === d;
    }
    ee.AsyncMode = w, ee.ConcurrentMode = F, ee.ContextConsumer = R, ee.ContextProvider = O, ee.Element = L, ee.ForwardRef = ge, ee.Fragment = Pe, ee.Lazy = Ee, ee.Memo = he, ee.Portal = Z, ee.Profiler = re, ee.StrictMode = $e, ee.Suspense = Ie, ee.isAsyncMode = yt, ee.isConcurrentMode = at, ee.isContextConsumer = J, ee.isContextProvider = He, ee.isElement = U, ee.isForwardRef = St, ee.isFragment = Mt, ee.isLazy = we, ee.isMemo = Je, ee.isPortal = Ve, ee.isProfiler = Ye, ee.isStrictMode = Ae, ee.isSuspense = ze, ee.isValidElementType = k, ee.typeOf = P;
  }()), ee;
}
process.env.NODE_ENV === "production" ? fa.exports = Rh() : fa.exports = Dh();
var Vh = fa.exports, du = Vh, zh = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Mh = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, fu = {};
fu[du.ForwardRef] = zh;
fu[du.Memo] = Mh;
var Oh = !0;
function Ua(e, t, r) {
  var n = "";
  return r.split(" ").forEach(function(o) {
    e[o] !== void 0 ? t.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Zo = function(t, r, n) {
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
  Oh === !1) && t.registered[o] === void 0 && (t.registered[o] = r.styles);
}, Jo = function(t, r, n) {
  Zo(t, r, n);
  var o = t.key + "-" + r.name;
  if (t.inserted[r.name] === void 0) {
    var i = r;
    do
      t.insert(r === i ? "." + o : "", i, t.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Fh(e) {
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
var Bh = {
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
}, Is = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, jh = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Ih = /[A-Z]|^ms/g, hu = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Ha = function(t) {
  return t.charCodeAt(1) === 45;
}, Ls = function(t) {
  return t != null && typeof t != "boolean";
}, Di = /* @__PURE__ */ su(function(e) {
  return Ha(e) ? e : e.replace(Ih, "-$&").toLowerCase();
}), Ro = function(t, r) {
  switch (t) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(hu, function(n, o, i) {
          return rt = {
            name: o,
            styles: i,
            next: rt
          }, o;
        });
  }
  return Bh[t] !== 1 && !Ha(t) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
if (process.env.NODE_ENV !== "production") {
  var Lh = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Nh = ["normal", "none", "initial", "inherit", "unset"], Wh = Ro, Uh = /^-ms-/, Hh = /-(.)/g, Ns = {};
  Ro = function(t, r) {
    if (t === "content" && (typeof r != "string" || Nh.indexOf(r) === -1 && !Lh.test(r) && (r.charAt(0) !== r.charAt(r.length - 1) || r.charAt(0) !== '"' && r.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + r + "\"'`");
    var n = Wh(t, r);
    return n !== "" && !Ha(t) && t.indexOf("-") !== -1 && Ns[t] === void 0 && (Ns[t] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + t.replace(Uh, "ms-").replace(Hh, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var pu = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function _n(e, t, r) {
  if (r == null)
    return "";
  if (r.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && r.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(pu);
    return r;
  }
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      if (r.anim === 1)
        return rt = {
          name: r.name,
          styles: r.styles,
          next: rt
        }, r.name;
      if (r.styles !== void 0) {
        var n = r.next;
        if (n !== void 0)
          for (; n !== void 0; )
            rt = {
              name: n.name,
              styles: n.styles,
              next: rt
            }, n = n.next;
        var o = r.styles + ";";
        return process.env.NODE_ENV !== "production" && r.map !== void 0 && (o += r.map), o;
      }
      return Yh(e, t, r);
    }
    case "function": {
      if (e !== void 0) {
        var i = rt, a = r(e);
        return rt = i, _n(e, t, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], l = r.replace(hu, function(u, d, h) {
          var m = "animation" + s.length;
          return s.push("const " + m + " = keyframes`" + h.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + m + "}";
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
function Yh(e, t, r) {
  var n = "";
  if (Array.isArray(r))
    for (var o = 0; o < r.length; o++)
      n += _n(e, t, r[o]) + ";";
  else
    for (var i in r) {
      var a = r[i];
      if (typeof a != "object")
        t != null && t[a] !== void 0 ? n += i + "{" + t[a] + "}" : Ls(a) && (n += Di(i) + ":" + Ro(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(pu);
        if (Array.isArray(a) && typeof a[0] == "string" && (t == null || t[a[0]] === void 0))
          for (var s = 0; s < a.length; s++)
            Ls(a[s]) && (n += Di(i) + ":" + Ro(i, a[s]) + ";");
        else {
          var l = _n(e, t, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += Di(i) + ":" + l + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(jh), n += i + "{" + l + "}";
          }
        }
      }
    }
  return n;
}
var Ws = /label:\s*([^\s;\n{]+)\s*(;|$)/g, mu;
process.env.NODE_ENV !== "production" && (mu = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var rt, Fr = function(t, r, n) {
  if (t.length === 1 && typeof t[0] == "object" && t[0] !== null && t[0].styles !== void 0)
    return t[0];
  var o = !0, i = "";
  rt = void 0;
  var a = t[0];
  a == null || a.raw === void 0 ? (o = !1, i += _n(n, r, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(Is), i += a[0]);
  for (var s = 1; s < t.length; s++)
    i += _n(n, r, t[s]), o && (process.env.NODE_ENV !== "production" && a[s] === void 0 && console.error(Is), i += a[s]);
  var l;
  process.env.NODE_ENV !== "production" && (i = i.replace(mu, function(h) {
    return l = h, "";
  })), Ws.lastIndex = 0;
  for (var c = "", u; (u = Ws.exec(i)) !== null; )
    c += "-" + // $FlowFixMe we know it's not null
    u[1];
  var d = Fh(i) + c;
  return process.env.NODE_ENV !== "production" ? {
    name: d,
    styles: i,
    map: l,
    next: rt,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: d,
    styles: i,
    next: rt
  };
}, Gh = function(t) {
  return t();
}, gu = ae["useInsertionEffect"] ? ae["useInsertionEffect"] : !1, Ya = gu || Gh, Us = gu || ae.useLayoutEffect, qh = {}.hasOwnProperty, Ga = /* @__PURE__ */ ae.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ah({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ga.displayName = "EmotionCacheContext");
Ga.Provider;
var Qo = function(t) {
  return /* @__PURE__ */ ja(function(r, n) {
    var o = Se(Ga);
    return t(r, o, n);
  });
}, qt = /* @__PURE__ */ ae.createContext({});
process.env.NODE_ENV !== "production" && (qt.displayName = "EmotionThemeContext");
var Kh = function(t, r) {
  if (typeof r == "function") {
    var n = r(t);
    if (process.env.NODE_ENV !== "production" && (n == null || typeof n != "object" || Array.isArray(n)))
      throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");
    return n;
  }
  if (process.env.NODE_ENV !== "production" && (r == null || typeof r != "object" || Array.isArray(r)))
    throw new Error("[ThemeProvider] Please make your theme prop a plain object");
  return Ao({}, t, r);
}, Xh = /* @__PURE__ */ Ms(function(e) {
  return Ms(function(t) {
    return Kh(e, t);
  });
}), jk = function(t) {
  var r = ae.useContext(qt);
  return t.theme !== r && (r = Xh(r)(t.theme)), /* @__PURE__ */ ae.createElement(qt.Provider, {
    value: r
  }, t.children);
}, Hs = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ys = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Zh = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Zo(r, n, o), Ya(function() {
    return Jo(r, n, o);
  }), null;
}, Jh = /* @__PURE__ */ Qo(function(e, t, r) {
  var n = e.css;
  typeof n == "string" && t.registered[n] !== void 0 && (n = t.registered[n]);
  var o = e[Hs], i = [n], a = "";
  typeof e.className == "string" ? a = Ua(t.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Fr(i, void 0, ae.useContext(qt));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var l = e[Ys];
    l && (s = Fr([s, "label:" + l + ";"]));
  }
  a += t.key + "-" + s.name;
  var c = {};
  for (var u in e)
    qh.call(e, u) && u !== "css" && u !== Hs && (process.env.NODE_ENV === "production" || u !== Ys) && (c[u] = e[u]);
  return c.ref = r, c.className = a, /* @__PURE__ */ ae.createElement(ae.Fragment, null, /* @__PURE__ */ ae.createElement(Zh, {
    cache: t,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ ae.createElement(o, c));
});
process.env.NODE_ENV !== "production" && (Jh.displayName = "EmotionCssPropInternal");
var Qh = {
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
}, Gs = !1, ep = /* @__PURE__ */ Qo(function(e, t) {
  process.env.NODE_ENV !== "production" && !Gs && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Gs = !0);
  var r = e.styles, n = Fr([r], void 0, ae.useContext(qt)), o = ae.useRef();
  return Us(function() {
    var i = t.key + "-global", a = new t.sheet.constructor({
      key: i,
      nonce: t.sheet.nonce,
      container: t.sheet.container,
      speedy: t.sheet.isSpeedy
    }), s = !1, l = document.querySelector('style[data-emotion="' + i + " " + n.name + '"]');
    return t.sheet.tags.length && (a.before = t.sheet.tags[0]), l !== null && (s = !0, l.setAttribute("data-emotion", i), a.hydrate([l])), o.current = [a, s], function() {
      a.flush();
    };
  }, [t]), Us(function() {
    var i = o.current, a = i[0], s = i[1];
    if (s) {
      i[1] = !1;
      return;
    }
    if (n.next !== void 0 && Jo(t, n.next, !0), a.tags.length) {
      var l = a.tags[a.tags.length - 1].nextElementSibling;
      a.before = l, a.flush();
    }
    t.insert("", n, a, !1);
  }, [t, n.name]), null;
});
process.env.NODE_ENV !== "production" && (ep.displayName = "EmotionGlobal");
function tp() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return Fr(t);
}
var rp = function() {
  var t = tp.apply(void 0, arguments), r = "animation-" + t.name;
  return {
    name: r,
    styles: "@keyframes " + r + "{" + t.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, np = function e(t) {
  for (var r = t.length, n = 0, o = ""; n < r; n++) {
    var i = t[n];
    if (i != null) {
      var a = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            a = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), a = "";
            for (var s in i)
              i[s] && s && (a && (a += " "), a += s);
          }
          break;
        }
        default:
          a = i;
      }
      a && (o && (o += " "), o += a);
    }
  }
  return o;
};
function op(e, t, r) {
  var n = [], o = Ua(e, n, r);
  return n.length < 2 ? r : o + t(n);
}
var ip = function(t) {
  var r = t.cache, n = t.serializedArr;
  return Ya(function() {
    for (var o = 0; o < n.length; o++)
      Jo(r, n[o], !1);
  }), null;
}, ap = /* @__PURE__ */ Qo(function(e, t) {
  var r = !1, n = [], o = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    var h = Fr(u, t.registered);
    return n.push(h), Zo(t, h, !1), t.key + "-" + h.name;
  }, i = function() {
    if (r && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var c = arguments.length, u = new Array(c), d = 0; d < c; d++)
      u[d] = arguments[d];
    return op(t.registered, o, np(u));
  }, a = {
    css: o,
    cx: i,
    theme: ae.useContext(qt)
  }, s = e.children(a);
  return r = !0, /* @__PURE__ */ ae.createElement(ae.Fragment, null, /* @__PURE__ */ ae.createElement(ip, {
    cache: t,
    serializedArr: n
  }), s);
});
process.env.NODE_ENV !== "production" && (ap.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var qs = !0, sp = typeof jest < "u" || typeof vi < "u";
  if (qs && !sp) {
    var Ks = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : qs ? window : global
    ), Xs = "__EMOTION_REACT_" + Qh.version.split(".")[0] + "__";
    Ks[Xs] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), Ks[Xs] = !0;
  }
}
var ha = { exports: {} }, Xr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zs;
function lp() {
  if (Zs)
    return Xr;
  Zs = 1;
  var e = zr, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, l, c) {
    var u, d = {}, h = null, m = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (m = l.ref);
    for (u in l)
      n.call(l, u) && !i.hasOwnProperty(u) && (d[u] = l[u]);
    if (s && s.defaultProps)
      for (u in l = s.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: s, key: h, ref: m, props: d, _owner: o.current };
  }
  return Xr.Fragment = r, Xr.jsx = a, Xr.jsxs = a, Xr;
}
var Zr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Js;
function cp() {
  return Js || (Js = 1, process.env.NODE_ENV !== "production" && function() {
    var e = zr, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), b = Symbol.iterator, S = "@@iterator";
    function T(p) {
      if (p === null || typeof p != "object")
        return null;
      var C = b && p[b] || p[S];
      return typeof C == "function" ? C : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(p) {
      {
        for (var C = arguments.length, E = new Array(C > 1 ? C - 1 : 0), z = 1; z < C; z++)
          E[z - 1] = arguments[z];
        k("error", p, E);
      }
    }
    function k(p, C, E) {
      {
        var z = _.ReactDebugCurrentFrame, H = z.getStackAddendum();
        H !== "" && (C += "%s", E = E.concat([H]));
        var N = E.map(function(j) {
          return String(j);
        });
        N.unshift("Warning: " + C), Function.prototype.apply.call(console[p], console, N);
      }
    }
    var P = !1, w = !1, F = !1, R = !1, O = !1, L;
    L = Symbol.for("react.module.reference");
    function ge(p) {
      return !!(typeof p == "string" || typeof p == "function" || p === n || p === i || O || p === o || p === c || p === u || R || p === m || P || w || F || typeof p == "object" && p !== null && (p.$$typeof === h || p.$$typeof === d || p.$$typeof === a || p.$$typeof === s || p.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      p.$$typeof === L || p.getModuleId !== void 0));
    }
    function Pe(p, C, E) {
      var z = p.displayName;
      if (z)
        return z;
      var H = C.displayName || C.name || "";
      return H !== "" ? E + "(" + H + ")" : E;
    }
    function Ee(p) {
      return p.displayName || "Context";
    }
    function he(p) {
      if (p == null)
        return null;
      if (typeof p.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof p == "function")
        return p.displayName || p.name || null;
      if (typeof p == "string")
        return p;
      switch (p) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case o:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case s:
            var C = p;
            return Ee(C) + ".Consumer";
          case a:
            var E = p;
            return Ee(E._context) + ".Provider";
          case l:
            return Pe(p, p.render, "ForwardRef");
          case d:
            var z = p.displayName || null;
            return z !== null ? z : he(p.type) || "Memo";
          case h: {
            var H = p, N = H._payload, j = H._init;
            try {
              return he(j(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Z = Object.assign, re = 0, $e, Ie, bt, yt, at, J, He;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function St() {
      {
        if (re === 0) {
          $e = console.log, Ie = console.info, bt = console.warn, yt = console.error, at = console.group, J = console.groupCollapsed, He = console.groupEnd;
          var p = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: p,
            log: p,
            warn: p,
            error: p,
            group: p,
            groupCollapsed: p,
            groupEnd: p
          });
        }
        re++;
      }
    }
    function Mt() {
      {
        if (re--, re === 0) {
          var p = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Z({}, p, {
              value: $e
            }),
            info: Z({}, p, {
              value: Ie
            }),
            warn: Z({}, p, {
              value: bt
            }),
            error: Z({}, p, {
              value: yt
            }),
            group: Z({}, p, {
              value: at
            }),
            groupCollapsed: Z({}, p, {
              value: J
            }),
            groupEnd: Z({}, p, {
              value: He
            })
          });
        }
        re < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var we = _.ReactCurrentDispatcher, Je;
    function Ve(p, C, E) {
      {
        if (Je === void 0)
          try {
            throw Error();
          } catch (H) {
            var z = H.stack.trim().match(/\n( *(at )?)/);
            Je = z && z[1] || "";
          }
        return `
` + Je + p;
      }
    }
    var Ye = !1, Ae;
    {
      var ze = typeof WeakMap == "function" ? WeakMap : Map;
      Ae = new ze();
    }
    function A(p, C) {
      if (!p || Ye)
        return "";
      {
        var E = Ae.get(p);
        if (E !== void 0)
          return E;
      }
      var z;
      Ye = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = we.current, we.current = null, St();
      try {
        if (C) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (Oe) {
              z = Oe;
            }
            Reflect.construct(p, [], j);
          } else {
            try {
              j.call();
            } catch (Oe) {
              z = Oe;
            }
            p.call(j.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Oe) {
            z = Oe;
          }
          p();
        }
      } catch (Oe) {
        if (Oe && z && typeof Oe.stack == "string") {
          for (var B = Oe.stack.split(`
`), _e = z.stack.split(`
`), ce = B.length - 1, pe = _e.length - 1; ce >= 1 && pe >= 0 && B[ce] !== _e[pe]; )
            pe--;
          for (; ce >= 1 && pe >= 0; ce--, pe--)
            if (B[ce] !== _e[pe]) {
              if (ce !== 1 || pe !== 1)
                do
                  if (ce--, pe--, pe < 0 || B[ce] !== _e[pe]) {
                    var Me = `
` + B[ce].replace(" at new ", " at ");
                    return p.displayName && Me.includes("<anonymous>") && (Me = Me.replace("<anonymous>", p.displayName)), typeof p == "function" && Ae.set(p, Me), Me;
                  }
                while (ce >= 1 && pe >= 0);
              break;
            }
        }
      } finally {
        Ye = !1, we.current = N, Mt(), Error.prepareStackTrace = H;
      }
      var ct = p ? p.displayName || p.name : "", Xn = ct ? Ve(ct) : "";
      return typeof p == "function" && Ae.set(p, Xn), Xn;
    }
    function st(p, C, E) {
      return A(p, !1);
    }
    function Ot(p) {
      var C = p.prototype;
      return !!(C && C.isReactComponent);
    }
    function xt(p, C, E) {
      if (p == null)
        return "";
      if (typeof p == "function")
        return A(p, Ot(p));
      if (typeof p == "string")
        return Ve(p);
      switch (p) {
        case c:
          return Ve("Suspense");
        case u:
          return Ve("SuspenseList");
      }
      if (typeof p == "object")
        switch (p.$$typeof) {
          case l:
            return st(p.render);
          case d:
            return xt(p.type, C, E);
          case h: {
            var z = p, H = z._payload, N = z._init;
            try {
              return xt(N(H), C, E);
            } catch {
            }
          }
        }
      return "";
    }
    var pr = Object.prototype.hasOwnProperty, jn = {}, In = _.ReactDebugCurrentFrame;
    function mr(p) {
      if (p) {
        var C = p._owner, E = xt(p.type, p._source, C ? C.type : null);
        In.setExtraStackFrame(E);
      } else
        In.setExtraStackFrame(null);
    }
    function gr(p, C, E, z, H) {
      {
        var N = Function.call.bind(pr);
        for (var j in p)
          if (N(p, j)) {
            var B = void 0;
            try {
              if (typeof p[j] != "function") {
                var _e = Error((z || "React class") + ": " + E + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof p[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw _e.name = "Invariant Violation", _e;
              }
              B = p[j](C, j, z, E, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ce) {
              B = ce;
            }
            B && !(B instanceof Error) && (mr(H), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", E, j, typeof B), mr(null)), B instanceof Error && !(B.message in jn) && (jn[B.message] = !0, mr(H), x("Failed %s type: %s", E, B.message), mr(null));
          }
      }
    }
    var Nr = Array.isArray;
    function Ft(p) {
      return Nr(p);
    }
    function Qe(p) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, E = C && p[Symbol.toStringTag] || p.constructor.name || "Object";
        return E;
      }
    }
    function Ln(p) {
      try {
        return Wr(p), !1;
      } catch {
        return !0;
      }
    }
    function Wr(p) {
      return "" + p;
    }
    function Nn(p) {
      if (Ln(p))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Qe(p)), Wr(p);
    }
    var Qt = _.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ur, Hr, br;
    br = {};
    function Wn(p) {
      if (pr.call(p, "ref")) {
        var C = Object.getOwnPropertyDescriptor(p, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return p.ref !== void 0;
    }
    function Un(p) {
      if (pr.call(p, "key")) {
        var C = Object.getOwnPropertyDescriptor(p, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return p.key !== void 0;
    }
    function hi(p, C) {
      if (typeof p.ref == "string" && Qt.current && C && Qt.current.stateNode !== C) {
        var E = he(Qt.current.type);
        br[E] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', he(Qt.current.type), p.ref), br[E] = !0);
      }
    }
    function pi(p, C) {
      {
        var E = function() {
          Ur || (Ur = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        E.isReactWarning = !0, Object.defineProperty(p, "key", {
          get: E,
          configurable: !0
        });
      }
    }
    function wt(p, C) {
      {
        var E = function() {
          Hr || (Hr = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        E.isReactWarning = !0, Object.defineProperty(p, "ref", {
          get: E,
          configurable: !0
        });
      }
    }
    var yr = function(p, C, E, z, H, N, j) {
      var B = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: p,
        key: C,
        ref: E,
        props: j,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return B._store = {}, Object.defineProperty(B._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(B, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(B, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(B.props), Object.freeze(B)), B;
    };
    function mi(p, C, E, z, H) {
      {
        var N, j = {}, B = null, _e = null;
        E !== void 0 && (Nn(E), B = "" + E), Un(C) && (Nn(C.key), B = "" + C.key), Wn(C) && (_e = C.ref, hi(C, H));
        for (N in C)
          pr.call(C, N) && !vr.hasOwnProperty(N) && (j[N] = C[N]);
        if (p && p.defaultProps) {
          var ce = p.defaultProps;
          for (N in ce)
            j[N] === void 0 && (j[N] = ce[N]);
        }
        if (B || _e) {
          var pe = typeof p == "function" ? p.displayName || p.name || "Unknown" : p;
          B && pi(j, pe), _e && wt(j, pe);
        }
        return yr(p, B, _e, H, z, Qt.current, j);
      }
    }
    var Sr = _.ReactCurrentOwner, Hn = _.ReactDebugCurrentFrame;
    function _t(p) {
      if (p) {
        var C = p._owner, E = xt(p.type, p._source, C ? C.type : null);
        Hn.setExtraStackFrame(E);
      } else
        Hn.setExtraStackFrame(null);
    }
    var kt;
    kt = !1;
    function Yr(p) {
      return typeof p == "object" && p !== null && p.$$typeof === t;
    }
    function lt() {
      {
        if (Sr.current) {
          var p = he(Sr.current.type);
          if (p)
            return `

Check the render method of \`` + p + "`.";
        }
        return "";
      }
    }
    function gi(p) {
      {
        if (p !== void 0) {
          var C = p.fileName.replace(/^.*[\\\/]/, ""), E = p.lineNumber;
          return `

Check your code at ` + C + ":" + E + ".";
        }
        return "";
      }
    }
    var Yn = {};
    function bi(p) {
      {
        var C = lt();
        if (!C) {
          var E = typeof p == "string" ? p : p.displayName || p.name;
          E && (C = `

Check the top-level render call using <` + E + ">.");
        }
        return C;
      }
    }
    function Gn(p, C) {
      {
        if (!p._store || p._store.validated || p.key != null)
          return;
        p._store.validated = !0;
        var E = bi(C);
        if (Yn[E])
          return;
        Yn[E] = !0;
        var z = "";
        p && p._owner && p._owner !== Sr.current && (z = " It was passed a child from " + he(p._owner.type) + "."), _t(p), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', E, z), _t(null);
      }
    }
    function qn(p, C) {
      {
        if (typeof p != "object")
          return;
        if (Ft(p))
          for (var E = 0; E < p.length; E++) {
            var z = p[E];
            Yr(z) && Gn(z, C);
          }
        else if (Yr(p))
          p._store && (p._store.validated = !0);
        else if (p) {
          var H = T(p);
          if (typeof H == "function" && H !== p.entries)
            for (var N = H.call(p), j; !(j = N.next()).done; )
              Yr(j.value) && Gn(j.value, C);
        }
      }
    }
    function et(p) {
      {
        var C = p.type;
        if (C == null || typeof C == "string")
          return;
        var E;
        if (typeof C == "function")
          E = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === d))
          E = C.propTypes;
        else
          return;
        if (E) {
          var z = he(C);
          gr(E, p.props, "prop", z, p);
        } else if (C.PropTypes !== void 0 && !kt) {
          kt = !0;
          var H = he(C);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function yi(p) {
      {
        for (var C = Object.keys(p.props), E = 0; E < C.length; E++) {
          var z = C[E];
          if (z !== "children" && z !== "key") {
            _t(p), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), _t(null);
            break;
          }
        }
        p.ref !== null && (_t(p), x("Invalid attribute `ref` supplied to `React.Fragment`."), _t(null));
      }
    }
    function Kn(p, C, E, z, H, N) {
      {
        var j = ge(p);
        if (!j) {
          var B = "";
          (p === void 0 || typeof p == "object" && p !== null && Object.keys(p).length === 0) && (B += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = gi(H);
          _e ? B += _e : B += lt();
          var ce;
          p === null ? ce = "null" : Ft(p) ? ce = "array" : p !== void 0 && p.$$typeof === t ? (ce = "<" + (he(p.type) || "Unknown") + " />", B = " Did you accidentally export a JSX literal instead of a component?") : ce = typeof p, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ce, B);
        }
        var pe = mi(p, C, E, H, N);
        if (pe == null)
          return pe;
        if (j) {
          var Me = C.children;
          if (Me !== void 0)
            if (z)
              if (Ft(Me)) {
                for (var ct = 0; ct < Me.length; ct++)
                  qn(Me[ct], p);
                Object.freeze && Object.freeze(Me);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              qn(Me, p);
        }
        return p === n ? yi(pe) : et(pe), pe;
      }
    }
    function Si(p, C, E) {
      return Kn(p, C, E, !0);
    }
    function xi(p, C, E) {
      return Kn(p, C, E, !1);
    }
    var wi = xi, Bt = Si;
    Zr.Fragment = n, Zr.jsx = wi, Zr.jsxs = Bt;
  }()), Zr;
}
process.env.NODE_ENV === "production" ? ha.exports = lp() : ha.exports = cp();
var Qs = ha.exports;
function up(e, t) {
  return `${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`;
}
function Ik(e = {}) {
  const {
    name: t,
    strict: r = !0,
    hookName: n = "useContext",
    providerName: o = "Provider",
    errorMessage: i,
    defaultValue: a
  } = e, s = Zt(a);
  s.displayName = t;
  function l() {
    var c;
    const u = Se(s);
    if (!u && r) {
      const d = new Error(
        i ?? up(n, o)
      );
      throw d.name = "ContextError", (c = Error.captureStackTrace) == null || c.call(Error, d, l), d;
    }
    return u;
  }
  return [s.Provider, l, s];
}
var Lk = globalThis != null && globalThis.document ? eu : Gt;
function vu() {
  const e = Se(
    qt
  );
  if (!e)
    throw Error(
      "useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`"
    );
  return e;
}
var bu = Zt({});
bu.displayName = "ColorModeContext";
function qa() {
  const e = Se(bu);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Nk(e, t) {
  const { colorMode: r } = qa();
  return r === "dark" ? t : e;
}
function yu() {
  const e = qa(), t = vu();
  return { ...e, theme: t };
}
function dp(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const i = (a) => {
    var s, l;
    return (l = (s = e.__breakpoints) == null ? void 0 : s.asArray) == null ? void 0 : l[a];
  };
  return (o = (n = i(t)) != null ? n : i(r)) != null ? o : r;
}
function fp(e, t, r) {
  var n, o;
  if (t == null)
    return t;
  const i = (a) => {
    var s, l;
    return (l = (s = e.__cssMap) == null ? void 0 : s[a]) == null ? void 0 : l.value;
  };
  return (o = (n = i(t)) != null ? n : i(r)) != null ? o : r;
}
function Wk(e, t, r) {
  const n = vu();
  return hp(e, t, r)(n);
}
function hp(e, t, r) {
  const n = Array.isArray(t) ? t : [t], o = Array.isArray(r) ? r : [r];
  return (i) => {
    const a = o.filter(Boolean), s = n.map((l, c) => {
      var u, d;
      if (e === "breakpoints")
        return dp(i, l, (u = a[c]) != null ? u : l);
      const h = `${e}.${l}`;
      return fp(i, h, (d = a[c]) != null ? d : l);
    });
    return Array.isArray(t) ? s : s[0];
  };
}
var pp = (...e) => e.filter(Boolean).join(" ");
function mp() {
  return process.env.NODE_ENV !== "production";
}
function it(e) {
  const t = typeof e;
  return e != null && (t === "object" || t === "function") && !Array.isArray(e);
}
var Uk = (e) => {
  const { condition: t, message: r } = e;
  t && mp() && console.warn(r);
};
function ar(e, ...t) {
  return gp(e) ? e(...t) : e;
}
var gp = (e) => typeof e == "function", Hk = (e) => e ? "" : void 0, Yk = (e) => e ? !0 : void 0;
function Gk(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function qk(...e) {
  return function(r) {
    e.forEach((n) => {
      n == null || n(r);
    });
  };
}
var Do = { exports: {} };
Do.exports;
(function(e, t) {
  var r = 200, n = "__lodash_hash_undefined__", o = 800, i = 16, a = 9007199254740991, s = "[object Arguments]", l = "[object Array]", c = "[object AsyncFunction]", u = "[object Boolean]", d = "[object Date]", h = "[object Error]", m = "[object Function]", b = "[object GeneratorFunction]", S = "[object Map]", T = "[object Number]", _ = "[object Null]", x = "[object Object]", k = "[object Proxy]", P = "[object RegExp]", w = "[object Set]", F = "[object String]", R = "[object Undefined]", O = "[object WeakMap]", L = "[object ArrayBuffer]", ge = "[object DataView]", Pe = "[object Float32Array]", Ee = "[object Float64Array]", he = "[object Int8Array]", Z = "[object Int16Array]", re = "[object Int32Array]", $e = "[object Uint8Array]", Ie = "[object Uint8ClampedArray]", bt = "[object Uint16Array]", yt = "[object Uint32Array]", at = /[\\^$.*+?()[\]{}|]/g, J = /^\[object .+?Constructor\]$/, He = /^(?:0|[1-9]\d*)$/, U = {};
  U[Pe] = U[Ee] = U[he] = U[Z] = U[re] = U[$e] = U[Ie] = U[bt] = U[yt] = !0, U[s] = U[l] = U[L] = U[u] = U[ge] = U[d] = U[h] = U[m] = U[S] = U[T] = U[x] = U[P] = U[w] = U[F] = U[O] = !1;
  var St = typeof to == "object" && to && to.Object === Object && to, Mt = typeof self == "object" && self && self.Object === Object && self, we = St || Mt || Function("return this")(), Je = t && !t.nodeType && t, Ve = Je && !0 && e && !e.nodeType && e, Ye = Ve && Ve.exports === Je, Ae = Ye && St.process, ze = function() {
    try {
      var f = Ve && Ve.require && Ve.require("util").types;
      return f || Ae && Ae.binding && Ae.binding("util");
    } catch {
    }
  }(), A = ze && ze.isTypedArray;
  function st(f, g, y) {
    switch (y.length) {
      case 0:
        return f.call(g);
      case 1:
        return f.call(g, y[0]);
      case 2:
        return f.call(g, y[0], y[1]);
      case 3:
        return f.call(g, y[0], y[1], y[2]);
    }
    return f.apply(g, y);
  }
  function Ot(f, g) {
    for (var y = -1, $ = Array(f); ++y < f; )
      $[y] = g(y);
    return $;
  }
  function xt(f) {
    return function(g) {
      return f(g);
    };
  }
  function pr(f, g) {
    return f == null ? void 0 : f[g];
  }
  function jn(f, g) {
    return function(y) {
      return f(g(y));
    };
  }
  var In = Array.prototype, mr = Function.prototype, gr = Object.prototype, Nr = we["__core-js_shared__"], Ft = mr.toString, Qe = gr.hasOwnProperty, Ln = function() {
    var f = /[^.]+$/.exec(Nr && Nr.keys && Nr.keys.IE_PROTO || "");
    return f ? "Symbol(src)_1." + f : "";
  }(), Wr = gr.toString, Nn = Ft.call(Object), Qt = RegExp(
    "^" + Ft.call(Qe).replace(at, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), vr = Ye ? we.Buffer : void 0, Ur = we.Symbol, Hr = we.Uint8Array, br = vr ? vr.allocUnsafe : void 0, Wn = jn(Object.getPrototypeOf, Object), Un = Object.create, hi = gr.propertyIsEnumerable, pi = In.splice, wt = Ur ? Ur.toStringTag : void 0, yr = function() {
    try {
      var f = ki(Object, "defineProperty");
      return f({}, "", {}), f;
    } catch {
    }
  }(), mi = vr ? vr.isBuffer : void 0, Sr = Math.max, Hn = Date.now, _t = ki(we, "Map"), kt = ki(Object, "create"), Yr = function() {
    function f() {
    }
    return function(g) {
      if (!er(g))
        return {};
      if (Un)
        return Un(g);
      f.prototype = g;
      var y = new f();
      return f.prototype = void 0, y;
    };
  }();
  function lt(f) {
    var g = -1, y = f == null ? 0 : f.length;
    for (this.clear(); ++g < y; ) {
      var $ = f[g];
      this.set($[0], $[1]);
    }
  }
  function gi() {
    this.__data__ = kt ? kt(null) : {}, this.size = 0;
  }
  function Yn(f) {
    var g = this.has(f) && delete this.__data__[f];
    return this.size -= g ? 1 : 0, g;
  }
  function bi(f) {
    var g = this.__data__;
    if (kt) {
      var y = g[f];
      return y === n ? void 0 : y;
    }
    return Qe.call(g, f) ? g[f] : void 0;
  }
  function Gn(f) {
    var g = this.__data__;
    return kt ? g[f] !== void 0 : Qe.call(g, f);
  }
  function qn(f, g) {
    var y = this.__data__;
    return this.size += this.has(f) ? 0 : 1, y[f] = kt && g === void 0 ? n : g, this;
  }
  lt.prototype.clear = gi, lt.prototype.delete = Yn, lt.prototype.get = bi, lt.prototype.has = Gn, lt.prototype.set = qn;
  function et(f) {
    var g = -1, y = f == null ? 0 : f.length;
    for (this.clear(); ++g < y; ) {
      var $ = f[g];
      this.set($[0], $[1]);
    }
  }
  function yi() {
    this.__data__ = [], this.size = 0;
  }
  function Kn(f) {
    var g = this.__data__, y = Oe(g, f);
    if (y < 0)
      return !1;
    var $ = g.length - 1;
    return y == $ ? g.pop() : pi.call(g, y, 1), --this.size, !0;
  }
  function Si(f) {
    var g = this.__data__, y = Oe(g, f);
    return y < 0 ? void 0 : g[y][1];
  }
  function xi(f) {
    return Oe(this.__data__, f) > -1;
  }
  function wi(f, g) {
    var y = this.__data__, $ = Oe(y, f);
    return $ < 0 ? (++this.size, y.push([f, g])) : y[$][1] = g, this;
  }
  et.prototype.clear = yi, et.prototype.delete = Kn, et.prototype.get = Si, et.prototype.has = xi, et.prototype.set = wi;
  function Bt(f) {
    var g = -1, y = f == null ? 0 : f.length;
    for (this.clear(); ++g < y; ) {
      var $ = f[g];
      this.set($[0], $[1]);
    }
  }
  function p() {
    this.size = 0, this.__data__ = {
      hash: new lt(),
      map: new (_t || et)(),
      string: new lt()
    };
  }
  function C(f) {
    var g = Jn(this, f).delete(f);
    return this.size -= g ? 1 : 0, g;
  }
  function E(f) {
    return Jn(this, f).get(f);
  }
  function z(f) {
    return Jn(this, f).has(f);
  }
  function H(f, g) {
    var y = Jn(this, f), $ = y.size;
    return y.set(f, g), this.size += y.size == $ ? 0 : 1, this;
  }
  Bt.prototype.clear = p, Bt.prototype.delete = C, Bt.prototype.get = E, Bt.prototype.has = z, Bt.prototype.set = H;
  function N(f) {
    var g = this.__data__ = new et(f);
    this.size = g.size;
  }
  function j() {
    this.__data__ = new et(), this.size = 0;
  }
  function B(f) {
    var g = this.__data__, y = g.delete(f);
    return this.size = g.size, y;
  }
  function _e(f) {
    return this.__data__.get(f);
  }
  function ce(f) {
    return this.__data__.has(f);
  }
  function pe(f, g) {
    var y = this.__data__;
    if (y instanceof et) {
      var $ = y.__data__;
      if (!_t || $.length < r - 1)
        return $.push([f, g]), this.size = ++y.size, this;
      y = this.__data__ = new Bt($);
    }
    return y.set(f, g), this.size = y.size, this;
  }
  N.prototype.clear = j, N.prototype.delete = B, N.prototype.get = _e, N.prototype.has = ce, N.prototype.set = pe;
  function Me(f, g) {
    var y = Pi(f), $ = !y && Ci(f), W = !y && !$ && Ps(f), ne = !y && !$ && !W && $s(f), se = y || $ || W || ne, I = se ? Ot(f.length, String) : [], le = I.length;
    for (var Ge in f)
      (g || Qe.call(f, Ge)) && !(se && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ge == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      W && (Ge == "offset" || Ge == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      ne && (Ge == "buffer" || Ge == "byteLength" || Ge == "byteOffset") || // Skip index properties.
      Ts(Ge, le))) && I.push(Ge);
    return I;
  }
  function ct(f, g, y) {
    (y !== void 0 && !Qn(f[g], y) || y === void 0 && !(g in f)) && _i(f, g, y);
  }
  function Xn(f, g, y) {
    var $ = f[g];
    (!(Qe.call(f, g) && Qn($, y)) || y === void 0 && !(g in f)) && _i(f, g, y);
  }
  function Oe(f, g) {
    for (var y = f.length; y--; )
      if (Qn(f[y][0], g))
        return y;
    return -1;
  }
  function _i(f, g, y) {
    g == "__proto__" && yr ? yr(f, g, {
      configurable: !0,
      enumerable: !0,
      value: y,
      writable: !0
    }) : f[g] = y;
  }
  var vf = Af();
  function Zn(f) {
    return f == null ? f === void 0 ? R : _ : wt && wt in Object(f) ? Rf(f) : Ff(f);
  }
  function _s(f) {
    return Gr(f) && Zn(f) == s;
  }
  function bf(f) {
    if (!er(f) || Mf(f))
      return !1;
    var g = $i(f) ? Qt : J;
    return g.test(Lf(f));
  }
  function yf(f) {
    return Gr(f) && Es(f.length) && !!U[Zn(f)];
  }
  function Sf(f) {
    if (!er(f))
      return Of(f);
    var g = Cs(f), y = [];
    for (var $ in f)
      $ == "constructor" && (g || !Qe.call(f, $)) || y.push($);
    return y;
  }
  function ks(f, g, y, $, W) {
    f !== g && vf(g, function(ne, se) {
      if (W || (W = new N()), er(ne))
        xf(f, g, se, y, ks, $, W);
      else {
        var I = $ ? $(Ti(f, se), ne, se + "", f, g, W) : void 0;
        I === void 0 && (I = ne), ct(f, se, I);
      }
    }, As);
  }
  function xf(f, g, y, $, W, ne, se) {
    var I = Ti(f, y), le = Ti(g, y), Ge = se.get(le);
    if (Ge) {
      ct(f, y, Ge);
      return;
    }
    var Le = ne ? ne(I, le, y + "", f, g, se) : void 0, qr = Le === void 0;
    if (qr) {
      var Ai = Pi(le), Ri = !Ai && Ps(le), Ds = !Ai && !Ri && $s(le);
      Le = le, Ai || Ri || Ds ? Pi(I) ? Le = I : Nf(I) ? Le = Pf(I) : Ri ? (qr = !1, Le = kf(le, !0)) : Ds ? (qr = !1, Le = Cf(le, !0)) : Le = [] : Wf(le) || Ci(le) ? (Le = I, Ci(I) ? Le = Uf(I) : (!er(I) || $i(I)) && (Le = Df(le))) : qr = !1;
    }
    qr && (se.set(le, Le), W(Le, le, $, ne, se), se.delete(le)), ct(f, y, Le);
  }
  function wf(f, g) {
    return jf(Bf(f, g, Rs), f + "");
  }
  var _f = yr ? function(f, g) {
    return yr(f, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Yf(g),
      writable: !0
    });
  } : Rs;
  function kf(f, g) {
    if (g)
      return f.slice();
    var y = f.length, $ = br ? br(y) : new f.constructor(y);
    return f.copy($), $;
  }
  function Tf(f) {
    var g = new f.constructor(f.byteLength);
    return new Hr(g).set(new Hr(f)), g;
  }
  function Cf(f, g) {
    var y = g ? Tf(f.buffer) : f.buffer;
    return new f.constructor(y, f.byteOffset, f.length);
  }
  function Pf(f, g) {
    var y = -1, $ = f.length;
    for (g || (g = Array($)); ++y < $; )
      g[y] = f[y];
    return g;
  }
  function Ef(f, g, y, $) {
    var W = !y;
    y || (y = {});
    for (var ne = -1, se = g.length; ++ne < se; ) {
      var I = g[ne], le = $ ? $(y[I], f[I], I, y, f) : void 0;
      le === void 0 && (le = f[I]), W ? _i(y, I, le) : Xn(y, I, le);
    }
    return y;
  }
  function $f(f) {
    return wf(function(g, y) {
      var $ = -1, W = y.length, ne = W > 1 ? y[W - 1] : void 0, se = W > 2 ? y[2] : void 0;
      for (ne = f.length > 3 && typeof ne == "function" ? (W--, ne) : void 0, se && Vf(y[0], y[1], se) && (ne = W < 3 ? void 0 : ne, W = 1), g = Object(g); ++$ < W; ) {
        var I = y[$];
        I && f(g, I, $, ne);
      }
      return g;
    });
  }
  function Af(f) {
    return function(g, y, $) {
      for (var W = -1, ne = Object(g), se = $(g), I = se.length; I--; ) {
        var le = se[f ? I : ++W];
        if (y(ne[le], le, ne) === !1)
          break;
      }
      return g;
    };
  }
  function Jn(f, g) {
    var y = f.__data__;
    return zf(g) ? y[typeof g == "string" ? "string" : "hash"] : y.map;
  }
  function ki(f, g) {
    var y = pr(f, g);
    return bf(y) ? y : void 0;
  }
  function Rf(f) {
    var g = Qe.call(f, wt), y = f[wt];
    try {
      f[wt] = void 0;
      var $ = !0;
    } catch {
    }
    var W = Wr.call(f);
    return $ && (g ? f[wt] = y : delete f[wt]), W;
  }
  function Df(f) {
    return typeof f.constructor == "function" && !Cs(f) ? Yr(Wn(f)) : {};
  }
  function Ts(f, g) {
    var y = typeof f;
    return g = g ?? a, !!g && (y == "number" || y != "symbol" && He.test(f)) && f > -1 && f % 1 == 0 && f < g;
  }
  function Vf(f, g, y) {
    if (!er(y))
      return !1;
    var $ = typeof g;
    return ($ == "number" ? Ei(y) && Ts(g, y.length) : $ == "string" && g in y) ? Qn(y[g], f) : !1;
  }
  function zf(f) {
    var g = typeof f;
    return g == "string" || g == "number" || g == "symbol" || g == "boolean" ? f !== "__proto__" : f === null;
  }
  function Mf(f) {
    return !!Ln && Ln in f;
  }
  function Cs(f) {
    var g = f && f.constructor, y = typeof g == "function" && g.prototype || gr;
    return f === y;
  }
  function Of(f) {
    var g = [];
    if (f != null)
      for (var y in Object(f))
        g.push(y);
    return g;
  }
  function Ff(f) {
    return Wr.call(f);
  }
  function Bf(f, g, y) {
    return g = Sr(g === void 0 ? f.length - 1 : g, 0), function() {
      for (var $ = arguments, W = -1, ne = Sr($.length - g, 0), se = Array(ne); ++W < ne; )
        se[W] = $[g + W];
      W = -1;
      for (var I = Array(g + 1); ++W < g; )
        I[W] = $[W];
      return I[g] = y(se), st(f, this, I);
    };
  }
  function Ti(f, g) {
    if (!(g === "constructor" && typeof f[g] == "function") && g != "__proto__")
      return f[g];
  }
  var jf = If(_f);
  function If(f) {
    var g = 0, y = 0;
    return function() {
      var $ = Hn(), W = i - ($ - y);
      if (y = $, W > 0) {
        if (++g >= o)
          return arguments[0];
      } else
        g = 0;
      return f.apply(void 0, arguments);
    };
  }
  function Lf(f) {
    if (f != null) {
      try {
        return Ft.call(f);
      } catch {
      }
      try {
        return f + "";
      } catch {
      }
    }
    return "";
  }
  function Qn(f, g) {
    return f === g || f !== f && g !== g;
  }
  var Ci = _s(function() {
    return arguments;
  }()) ? _s : function(f) {
    return Gr(f) && Qe.call(f, "callee") && !hi.call(f, "callee");
  }, Pi = Array.isArray;
  function Ei(f) {
    return f != null && Es(f.length) && !$i(f);
  }
  function Nf(f) {
    return Gr(f) && Ei(f);
  }
  var Ps = mi || Gf;
  function $i(f) {
    if (!er(f))
      return !1;
    var g = Zn(f);
    return g == m || g == b || g == c || g == k;
  }
  function Es(f) {
    return typeof f == "number" && f > -1 && f % 1 == 0 && f <= a;
  }
  function er(f) {
    var g = typeof f;
    return f != null && (g == "object" || g == "function");
  }
  function Gr(f) {
    return f != null && typeof f == "object";
  }
  function Wf(f) {
    if (!Gr(f) || Zn(f) != x)
      return !1;
    var g = Wn(f);
    if (g === null)
      return !0;
    var y = Qe.call(g, "constructor") && g.constructor;
    return typeof y == "function" && y instanceof y && Ft.call(y) == Nn;
  }
  var $s = A ? xt(A) : yf;
  function Uf(f) {
    return Ef(f, As(f));
  }
  function As(f) {
    return Ei(f) ? Me(f, !0) : Sf(f);
  }
  var Hf = $f(function(f, g, y, $) {
    ks(f, g, y, $);
  });
  function Yf(f) {
    return function() {
      return f;
    };
  }
  function Rs(f) {
    return f;
  }
  function Gf() {
    return !1;
  }
  e.exports = Hf;
})(Do, Do.exports);
var vp = Do.exports;
const Ze = /* @__PURE__ */ uu(vp);
var bp = (e) => /!(important)?$/.test(e), el = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, yp = (e, t) => (r) => {
  const n = String(t), o = bp(n), i = el(n), a = e ? `${e}.${i}` : i;
  let s = it(r.__cssMap) && a in r.__cssMap ? r.__cssMap[a].varRef : t;
  return s = el(s), o ? `${s} !important` : s;
};
function Ka(e) {
  const { scale: t, transform: r, compose: n } = e;
  return (i, a) => {
    var s;
    const l = yp(t, i)(a);
    let c = (s = r == null ? void 0 : r(l, a)) != null ? s : l;
    return n && (c = n(c, a)), c;
  };
}
var ro = (...e) => (t) => e.reduce((r, n) => n(r), t);
function qe(e, t) {
  return (r) => {
    const n = { property: r, scale: e };
    return n.transform = Ka({
      scale: e,
      transform: t
    }), n;
  };
}
var Sp = ({ rtl: e, ltr: t }) => (r) => r.direction === "rtl" ? e : t;
function xp(e) {
  const { property: t, scale: r, transform: n } = e;
  return {
    scale: r,
    property: Sp(t),
    transform: r ? Ka({
      scale: r,
      compose: n
    }) : n
  };
}
var Su = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function wp() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Su
  ].join(" ");
}
function _p() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Su
  ].join(" ");
}
var kp = {
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
}, Tp = {
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
function Cp(e) {
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
var Pp = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, pa = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, Ep = new Set(Object.values(pa)), ma = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), $p = (e) => e.trim();
function Ap(e, t) {
  if (e == null || ma.has(e))
    return e;
  if (!(ga(e) || ma.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = o == null ? void 0 : o[1], a = o == null ? void 0 : o[2];
  if (!i || !a)
    return e;
  const s = i.includes("-gradient") ? i : `${i}-gradient`, [l, ...c] = a.split(",").map($p).filter(Boolean);
  if ((c == null ? void 0 : c.length) === 0)
    return e;
  const u = l in pa ? pa[l] : l;
  c.unshift(u);
  const d = c.map((h) => {
    if (Ep.has(h))
      return h;
    const m = h.indexOf(" "), [b, S] = m !== -1 ? [h.substr(0, m), h.substr(m + 1)] : [h], T = ga(S) ? S : S && S.split(" "), _ = `colors.${b}`, x = _ in t.__cssMap ? t.__cssMap[_].varRef : b;
    return T ? [
      x,
      ...Array.isArray(T) ? T : [T]
    ].join(" ") : x;
  });
  return `${s}(${d.join(", ")})`;
}
var ga = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), Rp = (e, t) => Ap(e, t ?? {});
function Dp(e) {
  return /^var\(--.+\)$/.test(e);
}
var Vp = (e) => {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}, ut = (e) => (t) => `${e}(${t})`, Y = {
  filter(e) {
    return e !== "auto" ? e : kp;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : Tp;
  },
  ring(e) {
    return Cp(Y.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? wp() : e === "auto-gpu" ? _p() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: t } = Vp(e);
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
    if (Dp(e) || e == null)
      return e;
    const t = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || t ? `${e}deg` : e;
  },
  gradient: Rp,
  blur: ut("blur"),
  opacity: ut("opacity"),
  brightness: ut("brightness"),
  contrast: ut("contrast"),
  dropShadow: ut("drop-shadow"),
  grayscale: ut("grayscale"),
  hueRotate: ut("hue-rotate"),
  invert: ut("invert"),
  saturate: ut("saturate"),
  sepia: ut("sepia"),
  bgImage(e) {
    return e == null || ga(e) || ma.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const t = String(e) === "0" || String(e) === "none";
    return e !== null && t ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var t;
    const { space: r, divide: n } = (t = Pp[e]) != null ? t : {}, o = { flexDirection: e };
    return r && (o[r] = 1), n && (o[n] = 1), o;
  }
}, v = {
  borderWidths: qe("borderWidths"),
  borderStyles: qe("borderStyles"),
  colors: qe("colors"),
  borders: qe("borders"),
  gradients: qe("gradients", Y.gradient),
  radii: qe("radii", Y.px),
  space: qe("space", ro(Y.vh, Y.px)),
  spaceT: qe("space", ro(Y.vh, Y.px)),
  degreeT(e) {
    return { property: e, transform: Y.degree };
  },
  prop(e, t, r) {
    return {
      property: e,
      scale: t,
      ...t && {
        transform: Ka({ scale: t, transform: r })
      }
    };
  },
  propT(e, t) {
    return { property: e, transform: t };
  },
  sizes: qe("sizes", ro(Y.vh, Y.px)),
  sizesT: qe("sizes", ro(Y.vh, Y.fraction)),
  shadows: qe("shadows"),
  logical: xp,
  blur: qe("blur", Y.blur)
}, vo = {
  background: v.colors("background"),
  backgroundColor: v.colors("backgroundColor"),
  backgroundImage: v.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: Y.bgClip },
  bgSize: v.prop("backgroundSize"),
  bgPosition: v.prop("backgroundPosition"),
  bg: v.colors("background"),
  bgColor: v.colors("backgroundColor"),
  bgPos: v.prop("backgroundPosition"),
  bgRepeat: v.prop("backgroundRepeat"),
  bgAttachment: v.prop("backgroundAttachment"),
  bgGradient: v.gradients("backgroundImage"),
  bgClip: { transform: Y.bgClip }
};
Object.assign(vo, {
  bgImage: vo.backgroundImage,
  bgImg: vo.backgroundImage
});
var G = {
  border: v.borders("border"),
  borderWidth: v.borderWidths("borderWidth"),
  borderStyle: v.borderStyles("borderStyle"),
  borderColor: v.colors("borderColor"),
  borderRadius: v.radii("borderRadius"),
  borderTop: v.borders("borderTop"),
  borderBlockStart: v.borders("borderBlockStart"),
  borderTopLeftRadius: v.radii("borderTopLeftRadius"),
  borderStartStartRadius: v.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: v.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: v.radii("borderTopRightRadius"),
  borderStartEndRadius: v.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: v.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: v.borders("borderRight"),
  borderInlineEnd: v.borders("borderInlineEnd"),
  borderBottom: v.borders("borderBottom"),
  borderBlockEnd: v.borders("borderBlockEnd"),
  borderBottomLeftRadius: v.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: v.radii("borderBottomRightRadius"),
  borderLeft: v.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: v.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: v.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: v.borders(["borderLeft", "borderRight"]),
  borderInline: v.borders("borderInline"),
  borderY: v.borders(["borderTop", "borderBottom"]),
  borderBlock: v.borders("borderBlock"),
  borderTopWidth: v.borderWidths("borderTopWidth"),
  borderBlockStartWidth: v.borderWidths("borderBlockStartWidth"),
  borderTopColor: v.colors("borderTopColor"),
  borderBlockStartColor: v.colors("borderBlockStartColor"),
  borderTopStyle: v.borderStyles("borderTopStyle"),
  borderBlockStartStyle: v.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: v.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: v.borderWidths("borderBlockEndWidth"),
  borderBottomColor: v.colors("borderBottomColor"),
  borderBlockEndColor: v.colors("borderBlockEndColor"),
  borderBottomStyle: v.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: v.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: v.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: v.borderWidths("borderInlineStartWidth"),
  borderLeftColor: v.colors("borderLeftColor"),
  borderInlineStartColor: v.colors("borderInlineStartColor"),
  borderLeftStyle: v.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: v.borderStyles("borderInlineStartStyle"),
  borderRightWidth: v.borderWidths("borderRightWidth"),
  borderInlineEndWidth: v.borderWidths("borderInlineEndWidth"),
  borderRightColor: v.colors("borderRightColor"),
  borderInlineEndColor: v.colors("borderInlineEndColor"),
  borderRightStyle: v.borderStyles("borderRightStyle"),
  borderInlineEndStyle: v.borderStyles("borderInlineEndStyle"),
  borderTopRadius: v.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: v.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: v.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: v.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(G, {
  rounded: G.borderRadius,
  roundedTop: G.borderTopRadius,
  roundedTopLeft: G.borderTopLeftRadius,
  roundedTopRight: G.borderTopRightRadius,
  roundedTopStart: G.borderStartStartRadius,
  roundedTopEnd: G.borderStartEndRadius,
  roundedBottom: G.borderBottomRadius,
  roundedBottomLeft: G.borderBottomLeftRadius,
  roundedBottomRight: G.borderBottomRightRadius,
  roundedBottomStart: G.borderEndStartRadius,
  roundedBottomEnd: G.borderEndEndRadius,
  roundedLeft: G.borderLeftRadius,
  roundedRight: G.borderRightRadius,
  roundedStart: G.borderInlineStartRadius,
  roundedEnd: G.borderInlineEndRadius,
  borderStart: G.borderInlineStart,
  borderEnd: G.borderInlineEnd,
  borderTopStartRadius: G.borderStartStartRadius,
  borderTopEndRadius: G.borderStartEndRadius,
  borderBottomStartRadius: G.borderEndStartRadius,
  borderBottomEndRadius: G.borderEndEndRadius,
  borderStartRadius: G.borderInlineStartRadius,
  borderEndRadius: G.borderInlineEndRadius,
  borderStartWidth: G.borderInlineStartWidth,
  borderEndWidth: G.borderInlineEndWidth,
  borderStartColor: G.borderInlineStartColor,
  borderEndColor: G.borderInlineEndColor,
  borderStartStyle: G.borderInlineStartStyle,
  borderEndStyle: G.borderInlineEndStyle
});
var zp = {
  color: v.colors("color"),
  textColor: v.colors("color"),
  fill: v.colors("fill"),
  stroke: v.colors("stroke")
}, va = {
  boxShadow: v.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: v.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: v.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(va, {
  shadow: va.boxShadow
});
var Mp = {
  filter: { transform: Y.filter },
  blur: v.blur("--chakra-blur"),
  brightness: v.propT("--chakra-brightness", Y.brightness),
  contrast: v.propT("--chakra-contrast", Y.contrast),
  hueRotate: v.degreeT("--chakra-hue-rotate"),
  invert: v.propT("--chakra-invert", Y.invert),
  saturate: v.propT("--chakra-saturate", Y.saturate),
  dropShadow: v.propT("--chakra-drop-shadow", Y.dropShadow),
  backdropFilter: { transform: Y.backdropFilter },
  backdropBlur: v.blur("--chakra-backdrop-blur"),
  backdropBrightness: v.propT(
    "--chakra-backdrop-brightness",
    Y.brightness
  ),
  backdropContrast: v.propT("--chakra-backdrop-contrast", Y.contrast),
  backdropHueRotate: v.degreeT("--chakra-backdrop-hue-rotate"),
  backdropInvert: v.propT("--chakra-backdrop-invert", Y.invert),
  backdropSaturate: v.propT("--chakra-backdrop-saturate", Y.saturate)
}, Vo = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: Y.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: v.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: v.space("gap"),
  rowGap: v.space("rowGap"),
  columnGap: v.space("columnGap")
};
Object.assign(Vo, {
  flexDir: Vo.flexDirection
});
var xu = {
  gridGap: v.space("gridGap"),
  gridColumnGap: v.space("gridColumnGap"),
  gridRowGap: v.space("gridRowGap"),
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
}, Op = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: Y.outline },
  outlineOffset: !0,
  outlineColor: v.colors("outlineColor")
}, Xe = {
  width: v.sizesT("width"),
  inlineSize: v.sizesT("inlineSize"),
  height: v.sizes("height"),
  blockSize: v.sizes("blockSize"),
  boxSize: v.sizes(["width", "height"]),
  minWidth: v.sizes("minWidth"),
  minInlineSize: v.sizes("minInlineSize"),
  minHeight: v.sizes("minHeight"),
  minBlockSize: v.sizes("minBlockSize"),
  maxWidth: v.sizes("maxWidth"),
  maxInlineSize: v.sizes("maxInlineSize"),
  maxHeight: v.sizes("maxHeight"),
  maxBlockSize: v.sizes("maxBlockSize"),
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
  float: v.propT("float", Y.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Xe, {
  w: Xe.width,
  h: Xe.height,
  minW: Xe.minWidth,
  maxW: Xe.maxWidth,
  minH: Xe.minHeight,
  maxH: Xe.maxHeight,
  overscroll: Xe.overscrollBehavior,
  overscrollX: Xe.overscrollBehaviorX,
  overscrollY: Xe.overscrollBehaviorY
});
var Fp = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: v.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: v.prop("listStyleImage")
};
function Bp(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var jp = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, Ip = jp(Bp), Lp = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Np = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Vi = (e, t, r) => {
  const n = {}, o = Ip(e, t, {});
  for (const i in o)
    i in r && r[i] != null || (n[i] = o[i]);
  return n;
}, Wp = {
  srOnly: {
    transform(e) {
      return e === !0 ? Lp : e === "focusable" ? Np : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, t, r) => Vi(t, `layerStyles.${e}`, r)
  },
  textStyle: {
    processResult: !0,
    transform: (e, t, r) => Vi(t, `textStyles.${e}`, r)
  },
  apply: {
    processResult: !0,
    transform: (e, t, r) => Vi(t, e, r)
  }
}, dn = {
  position: !0,
  pos: v.prop("position"),
  zIndex: v.prop("zIndex", "zIndices"),
  inset: v.spaceT("inset"),
  insetX: v.spaceT(["left", "right"]),
  insetInline: v.spaceT("insetInline"),
  insetY: v.spaceT(["top", "bottom"]),
  insetBlock: v.spaceT("insetBlock"),
  top: v.spaceT("top"),
  insetBlockStart: v.spaceT("insetBlockStart"),
  bottom: v.spaceT("bottom"),
  insetBlockEnd: v.spaceT("insetBlockEnd"),
  left: v.spaceT("left"),
  insetInlineStart: v.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: v.spaceT("right"),
  insetInlineEnd: v.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(dn, {
  insetStart: dn.insetInlineStart,
  insetEnd: dn.insetInlineEnd
});
var Up = {
  ring: { transform: Y.ring },
  ringColor: v.colors("--chakra-ring-color"),
  ringOffset: v.prop("--chakra-ring-offset-width"),
  ringOffsetColor: v.colors("--chakra-ring-offset-color"),
  ringInset: v.prop("--chakra-ring-inset")
}, ie = {
  margin: v.spaceT("margin"),
  marginTop: v.spaceT("marginTop"),
  marginBlockStart: v.spaceT("marginBlockStart"),
  marginRight: v.spaceT("marginRight"),
  marginInlineEnd: v.spaceT("marginInlineEnd"),
  marginBottom: v.spaceT("marginBottom"),
  marginBlockEnd: v.spaceT("marginBlockEnd"),
  marginLeft: v.spaceT("marginLeft"),
  marginInlineStart: v.spaceT("marginInlineStart"),
  marginX: v.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: v.spaceT("marginInline"),
  marginY: v.spaceT(["marginTop", "marginBottom"]),
  marginBlock: v.spaceT("marginBlock"),
  padding: v.space("padding"),
  paddingTop: v.space("paddingTop"),
  paddingBlockStart: v.space("paddingBlockStart"),
  paddingRight: v.space("paddingRight"),
  paddingBottom: v.space("paddingBottom"),
  paddingBlockEnd: v.space("paddingBlockEnd"),
  paddingLeft: v.space("paddingLeft"),
  paddingInlineStart: v.space("paddingInlineStart"),
  paddingInlineEnd: v.space("paddingInlineEnd"),
  paddingX: v.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: v.space("paddingInline"),
  paddingY: v.space(["paddingTop", "paddingBottom"]),
  paddingBlock: v.space("paddingBlock")
};
Object.assign(ie, {
  m: ie.margin,
  mt: ie.marginTop,
  mr: ie.marginRight,
  me: ie.marginInlineEnd,
  marginEnd: ie.marginInlineEnd,
  mb: ie.marginBottom,
  ml: ie.marginLeft,
  ms: ie.marginInlineStart,
  marginStart: ie.marginInlineStart,
  mx: ie.marginX,
  my: ie.marginY,
  p: ie.padding,
  pt: ie.paddingTop,
  py: ie.paddingY,
  px: ie.paddingX,
  pb: ie.paddingBottom,
  pl: ie.paddingLeft,
  ps: ie.paddingInlineStart,
  paddingStart: ie.paddingInlineStart,
  pr: ie.paddingRight,
  pe: ie.paddingInlineEnd,
  paddingEnd: ie.paddingInlineEnd
});
var Hp = {
  textDecorationColor: v.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: v.shadows("textShadow")
}, Yp = {
  clipPath: !0,
  transform: v.propT("transform", Y.transform),
  transformOrigin: !0,
  translateX: v.spaceT("--chakra-translate-x"),
  translateY: v.spaceT("--chakra-translate-y"),
  skewX: v.degreeT("--chakra-skew-x"),
  skewY: v.degreeT("--chakra-skew-y"),
  scaleX: v.prop("--chakra-scale-x"),
  scaleY: v.prop("--chakra-scale-y"),
  scale: v.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: v.degreeT("--chakra-rotate")
}, Gp = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: v.prop("transitionDuration", "transition.duration"),
  transitionProperty: v.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: v.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, qp = {
  fontFamily: v.prop("fontFamily", "fonts"),
  fontSize: v.prop("fontSize", "fontSizes", Y.px),
  fontWeight: v.prop("fontWeight", "fontWeights"),
  lineHeight: v.prop("lineHeight", "lineHeights"),
  letterSpacing: v.prop("letterSpacing", "letterSpacings"),
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
}, Kp = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  scrollMargin: v.spaceT("scrollMargin"),
  scrollMarginTop: v.spaceT("scrollMarginTop"),
  scrollMarginBottom: v.spaceT("scrollMarginBottom"),
  scrollMarginLeft: v.spaceT("scrollMarginLeft"),
  scrollMarginRight: v.spaceT("scrollMarginRight"),
  scrollMarginX: v.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: v.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  scrollPadding: v.spaceT("scrollPadding"),
  scrollPaddingTop: v.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: v.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: v.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: v.spaceT("scrollPaddingRight"),
  scrollPaddingX: v.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: v.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function wu(e) {
  return it(e) && e.reference ? e.reference : String(e);
}
var ei = (e, ...t) => t.map(wu).join(` ${e} `).replace(/calc/g, ""), tl = (...e) => `calc(${ei("+", ...e)})`, rl = (...e) => `calc(${ei("-", ...e)})`, ba = (...e) => `calc(${ei("*", ...e)})`, nl = (...e) => `calc(${ei("/", ...e)})`, ol = (e) => {
  const t = wu(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : ba(t, -1);
}, or = Object.assign(
  (e) => ({
    add: (...t) => or(tl(e, ...t)),
    subtract: (...t) => or(rl(e, ...t)),
    multiply: (...t) => or(ba(e, ...t)),
    divide: (...t) => or(nl(e, ...t)),
    negate: () => or(ol(e)),
    toString: () => e.toString()
  }),
  {
    add: tl,
    subtract: rl,
    multiply: ba,
    divide: nl,
    negate: ol
  }
);
function Xp(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Zp(e) {
  const t = Xp(e.toString());
  return Qp(Jp(t));
}
function Jp(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Qp(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function em(e, t = "") {
  return [t, e].filter(Boolean).join("-");
}
function tm(e, t) {
  return `var(${e}${t ? `, ${t}` : ""})`;
}
function rm(e, t = "") {
  return Zp(`--${em(e, t)}`);
}
function M(e, t, r) {
  const n = rm(e, r);
  return {
    variable: n,
    reference: tm(n, t)
  };
}
function nm(e, t) {
  const r = {};
  for (const n of t) {
    if (Array.isArray(n)) {
      const [o, i] = n;
      r[o] = M(`${e}-${o}`, i);
      continue;
    }
    r[n] = M(`${e}-${n}`);
  }
  return r;
}
function om(e) {
  const t = e == null ? 0 : e.length;
  return t ? e[t - 1] : void 0;
}
function im(e) {
  const t = parseFloat(e.toString()), r = e.toString().replace(String(t), "");
  return { unitless: !r, value: t, unit: r };
}
function ya(e) {
  if (e == null)
    return e;
  const { unitless: t } = im(e);
  return t || typeof e == "number" ? `${e}px` : e;
}
var _u = (e, t) => parseInt(e[1], 10) > parseInt(t[1], 10) ? 1 : -1, Xa = (e) => Object.fromEntries(Object.entries(e).sort(_u));
function il(e) {
  const t = Xa(e);
  return Object.assign(Object.values(t), t);
}
function am(e) {
  const t = Object.keys(Xa(e));
  return new Set(t);
}
function al(e) {
  var t;
  if (!e)
    return e;
  e = (t = ya(e)) != null ? t : e;
  const r = -0.02;
  return typeof e == "number" ? `${e + r}` : e.replace(/(\d+\.?\d*)/u, (n) => `${parseFloat(n) + r}`);
}
function nn(e, t) {
  const r = ["@media screen"];
  return e && r.push("and", `(min-width: ${ya(e)})`), t && r.push("and", `(max-width: ${ya(t)})`), r.join(" ");
}
function sm(e) {
  var t;
  if (!e)
    return null;
  e.base = (t = e.base) != null ? t : "0px";
  const r = il(e), n = Object.entries(e).sort(_u).map(([a, s], l, c) => {
    var u;
    let [, d] = (u = c[l + 1]) != null ? u : [];
    return d = parseFloat(d) > 0 ? al(d) : void 0, {
      _minW: al(s),
      breakpoint: a,
      minW: s,
      maxW: d,
      maxWQuery: nn(null, d),
      minWQuery: nn(s),
      minMaxQuery: nn(s, d)
    };
  }), o = am(e), i = Array.from(o.values());
  return {
    keys: o,
    normalized: r,
    isResponsive(a) {
      const s = Object.keys(a);
      return s.length > 0 && s.every((l) => o.has(l));
    },
    asObject: Xa(e),
    asArray: il(e),
    details: n,
    get(a) {
      return n.find((s) => s.breakpoint === a);
    },
    media: [
      null,
      ...r.map((a) => nn(a)).slice(1)
    ],
    toArrayValue(a) {
      if (!it(a))
        throw new Error("toArrayValue: value must be an object");
      const s = i.map((l) => {
        var c;
        return (c = a[l]) != null ? c : null;
      });
      for (; om(s) === null; )
        s.pop();
      return s;
    },
    toObjectValue(a) {
      if (!Array.isArray(a))
        throw new Error("toObjectValue: value must be an array");
      return a.reduce((s, l, c) => {
        const u = i[c];
        return u != null && l != null && (s[u] = l), s;
      }, {});
    }
  };
}
var ke = {
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
}, jt = (e) => ku((t) => e(t, "&"), "[role=group]", "[data-group]", ".group"), Tt = (e) => ku((t) => e(t, "~ &"), "[data-peer]", ".peer"), ku = (e, ...t) => t.map(e).join(", "), ti = {
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
  _groupHover: jt(ke.hover),
  _peerHover: Tt(ke.hover),
  _groupFocus: jt(ke.focus),
  _peerFocus: Tt(ke.focus),
  _groupFocusVisible: jt(ke.focusVisible),
  _peerFocusVisible: Tt(ke.focusVisible),
  _groupActive: jt(ke.active),
  _peerActive: Tt(ke.active),
  _groupDisabled: jt(ke.disabled),
  _peerDisabled: Tt(ke.disabled),
  _groupInvalid: jt(ke.invalid),
  _peerInvalid: Tt(ke.invalid),
  _groupChecked: jt(ke.checked),
  _peerChecked: Tt(ke.checked),
  _groupFocusWithin: jt(ke.focusWithin),
  _peerFocusWithin: Tt(ke.focusWithin),
  _peerPlaceholderShown: Tt(ke.placeholderShown),
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
}, Tu = Object.keys(
  ti
);
function sl(e, t) {
  return M(String(e).replace(/\./g, "-"), void 0, t);
}
function lm(e, t) {
  let r = {};
  const n = {};
  for (const [o, i] of Object.entries(e)) {
    const { isSemantic: a, value: s } = i, { variable: l, reference: c } = sl(o, t == null ? void 0 : t.cssVarPrefix);
    if (!a) {
      if (o.startsWith("space")) {
        const h = o.split("."), [m, ...b] = h, S = `${m}.-${b.join(".")}`, T = or.negate(s), _ = or.negate(c);
        n[S] = {
          value: T,
          var: l,
          varRef: _
        };
      }
      r[l] = s, n[o] = {
        value: s,
        var: l,
        varRef: c
      };
      continue;
    }
    const u = (h) => {
      const b = [String(o).split(".")[0], h].join(".");
      if (!e[b])
        return h;
      const { reference: T } = sl(b, t == null ? void 0 : t.cssVarPrefix);
      return T;
    }, d = it(s) ? s : { default: s };
    r = Ze(
      r,
      Object.entries(d).reduce(
        (h, [m, b]) => {
          var S, T;
          if (!b)
            return h;
          const _ = u(`${b}`);
          if (m === "default")
            return h[l] = _, h;
          const x = (T = (S = ti) == null ? void 0 : S[m]) != null ? T : m;
          return h[x] = { [l]: _ }, h;
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
function cm(e, t = []) {
  const r = Object.assign({}, e);
  for (const n of t)
    n in r && delete r[n];
  return r;
}
function um(e, t) {
  const r = {};
  for (const n of t)
    n in e && (r[n] = e[n]);
  return r;
}
function dm(e) {
  return typeof e == "object" && e != null && !Array.isArray(e);
}
function ll(e, t, r = {}) {
  const { stop: n, getKey: o } = r;
  function i(a, s = []) {
    var l;
    if (dm(a) || Array.isArray(a)) {
      const c = {};
      for (const [u, d] of Object.entries(a)) {
        const h = (l = o == null ? void 0 : o(u)) != null ? l : u, m = [...s, h];
        if (n != null && n(a, m))
          return t(a, s);
        c[h] = i(d, m);
      }
      return c;
    }
    return t(a, s);
  }
  return i(e);
}
var fm = [
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
function hm(e) {
  return um(e, fm);
}
function pm(e) {
  return e.semanticTokens;
}
function mm(e) {
  const { __cssMap: t, __cssVars: r, __breakpoints: n, ...o } = e;
  return o;
}
var gm = (e) => Tu.includes(e) || e === "default";
function vm({
  tokens: e,
  semanticTokens: t
}) {
  const r = {};
  return ll(e, (n, o) => {
    n != null && (r[o.join(".")] = { isSemantic: !1, value: n });
  }), ll(
    t,
    (n, o) => {
      n != null && (r[o.join(".")] = { isSemantic: !0, value: n });
    },
    {
      stop: (n) => Object.keys(n).every(gm)
    }
  ), r;
}
function Kk(e) {
  var t;
  const r = mm(e), n = hm(r), o = pm(r), i = vm({ tokens: n, semanticTokens: o }), a = (t = r.config) == null ? void 0 : t.cssVarPrefix, {
    cssMap: s,
    cssVars: l
  } = lm(i, { cssVarPrefix: a });
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
    __breakpoints: sm(r.breakpoints)
  }), r;
}
var Za = Ze(
  {},
  vo,
  G,
  zp,
  Vo,
  Xe,
  Mp,
  Up,
  Op,
  xu,
  Wp,
  dn,
  va,
  ie,
  Kp,
  qp,
  Hp,
  Yp,
  Fp,
  Gp
), bm = Object.assign({}, ie, Xe, Vo, xu, dn), Xk = Object.keys(
  bm
), ym = [...Object.keys(Za), ...Tu], Sm = { ...Za, ...ti }, xm = (e) => e in Sm, wm = (e) => (t) => {
  if (!t.__breakpoints)
    return e;
  const { isResponsive: r, toArrayValue: n, media: o } = t.__breakpoints, i = {};
  for (const a in e) {
    let s = ar(e[a], t);
    if (s == null)
      continue;
    if (s = it(s) && r(s) ? n(s) : s, !Array.isArray(s)) {
      i[a] = s;
      continue;
    }
    const l = s.slice(0, o.length).length;
    for (let c = 0; c < l; c += 1) {
      const u = o == null ? void 0 : o[c];
      if (!u) {
        i[a] = s[c];
        continue;
      }
      i[u] = i[u] || {}, s[c] != null && (i[u][a] = s[c]);
    }
  }
  return i;
};
function _m(e) {
  const t = [];
  let r = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    i === "(" ? (n = !0, r += i) : i === ")" ? (n = !1, r += i) : i === "," && !n ? (t.push(r), r = "") : r += i;
  }
  return r = r.trim(), r && t.push(r), t;
}
function km(e) {
  return /^var\(--.+\)$/.test(e);
}
var Tm = (e, t) => e.startsWith("--") && typeof t == "string" && !km(t), Cm = (e, t) => {
  var r, n;
  if (t == null)
    return t;
  const o = (l) => {
    var c, u;
    return (u = (c = e.__cssMap) == null ? void 0 : c[l]) == null ? void 0 : u.varRef;
  }, i = (l) => {
    var c;
    return (c = o(l)) != null ? c : l;
  }, [a, s] = _m(t);
  return t = (n = (r = o(a)) != null ? r : i(s)) != null ? n : i(t), t;
};
function Pm(e) {
  const { configs: t = {}, pseudos: r = {}, theme: n } = e, o = (i, a = !1) => {
    var s, l, c;
    const u = ar(i, n), d = wm(u)(n);
    let h = {};
    for (let m in d) {
      const b = d[m];
      let S = ar(b, n);
      m in r && (m = r[m]), Tm(m, S) && (S = Cm(n, S));
      let T = t[m];
      if (T === !0 && (T = { property: m }), it(S)) {
        h[m] = (s = h[m]) != null ? s : {}, h[m] = Ze(
          {},
          h[m],
          o(S, !0)
        );
        continue;
      }
      let _ = (c = (l = T == null ? void 0 : T.transform) == null ? void 0 : l.call(T, S, n, u)) != null ? c : S;
      _ = T != null && T.processResult ? o(_, !0) : _;
      const x = ar(T == null ? void 0 : T.property, n);
      if (!a && (T != null && T.static)) {
        const k = ar(T.static, n);
        h = Ze({}, h, k);
      }
      if (x && Array.isArray(x)) {
        for (const k of x)
          h[k] = _;
        continue;
      }
      if (x) {
        x === "&" && it(_) ? h = Ze({}, h, _) : h[x] = _;
        continue;
      }
      if (it(_)) {
        h = Ze({}, h, _);
        continue;
      }
      h[m] = _;
    }
    return h;
  };
  return o;
}
var Em = (e) => (t) => Pm({
  theme: t,
  pseudos: ti,
  configs: Za
})(e);
function Zk(e) {
  return e;
}
function Jk(e) {
  return e;
}
function oe(e) {
  return {
    definePartsStyle(t) {
      return t;
    },
    defineMultiStyleConfig(t) {
      return { parts: e, ...t };
    }
  };
}
function $m(e, t) {
  if (Array.isArray(e))
    return e;
  if (it(e))
    return t(e);
  if (e != null)
    return [e];
}
function Am(e, t) {
  for (let r = t + 1; r < e.length; r++)
    if (e[r] != null)
      return r;
  return -1;
}
function Rm(e) {
  const t = e.__breakpoints;
  return function(n, o, i, a) {
    var s, l;
    if (!t)
      return;
    const c = {}, u = $m(i, t.toArrayValue);
    if (!u)
      return c;
    const d = u.length, h = d === 1, m = !!n.parts;
    for (let b = 0; b < d; b++) {
      const S = t.details[b], T = t.details[Am(u, b)], _ = nn(S.minW, T == null ? void 0 : T._minW), x = ar((s = n[o]) == null ? void 0 : s[u[b]], a);
      if (x) {
        if (m) {
          (l = n.parts) == null || l.forEach((k) => {
            Ze(c, {
              [k]: h ? x[k] : { [_]: x[k] }
            });
          });
          continue;
        }
        if (!m) {
          h ? Ze(c, x) : c[_] = x;
          continue;
        }
        c[_] = x;
      }
    }
    return c;
  };
}
function Dm(e) {
  return (t) => {
    var r;
    const { variant: n, size: o, theme: i } = t, a = Rm(i);
    return Ze(
      {},
      ar((r = e.baseStyle) != null ? r : {}, t),
      a(e, "sizes", o, t),
      a(e, "variants", n, t)
    );
  };
}
function Vm(e, t, r) {
  var n, o, i;
  return (i = (o = (n = e.__cssMap) == null ? void 0 : n[`${t}.${r}`]) == null ? void 0 : o.varRef) != null ? i : r;
}
function zm(e) {
  return cm(e, ["styleConfig", "size", "variant", "colorScheme"]);
}
var Mm = [
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
function Om(e) {
  return it(e) ? Mm.every(
    (t) => Object.prototype.hasOwnProperty.call(e, t)
  ) : !1;
}
var Fm = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, Bm = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, jm = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, Im = {
  property: Fm,
  easing: Bm,
  duration: jm
}, Lm = Im, Nm = {
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
}, Wm = Nm, Um = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, Hm = Um, Ym = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, Gm = Ym, qm = {
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
}, Km = qm, Xm = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, Zm = Xm, Jm = {
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
}, Qm = Jm, eg = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, tg = eg, rg = {
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
}, Cu = rg, Pu = {
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
}, ng = {
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
}, og = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, ig = {
  ...Pu,
  ...ng,
  container: og
}, Eu = ig, $u = {
  breakpoints: Gm,
  zIndices: Wm,
  radii: Zm,
  blur: tg,
  colors: Km,
  ...Cu,
  sizes: Eu,
  shadows: Qm,
  space: Pu,
  borders: Hm,
  transition: Lm
}, { defineMultiStyleConfig: ag, definePartsStyle: on } = oe([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Ct = M("stepper-indicator-size"), wr = M("stepper-icon-size"), _r = M("stepper-title-font-size"), an = M("stepper-description-font-size"), Jr = M("stepper-accent-color"), sg = on(({ colorScheme: e }) => ({
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
    [Jr.variable]: `colors.${e}.500`,
    _dark: {
      [Jr.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: _r.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: an.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: _r.reference
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
    width: wr.reference,
    height: wr.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Ct.reference,
    height: Ct.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: Jr.reference
    },
    "&[data-status=complete]": {
      bg: Jr.reference,
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
      bg: Jr.reference
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
      maxHeight: `calc(100% - ${Ct.reference} - 8px)`,
      top: `calc(${Ct.reference} + 4px)`,
      insetStart: `calc(${Ct.reference} / 2 - 1px)`
    }
  }
})), lg = ag({
  baseStyle: sg,
  sizes: {
    xs: on({
      stepper: {
        [Ct.variable]: "sizes.4",
        [wr.variable]: "sizes.3",
        [_r.variable]: "fontSizes.xs",
        [an.variable]: "fontSizes.xs"
      }
    }),
    sm: on({
      stepper: {
        [Ct.variable]: "sizes.6",
        [wr.variable]: "sizes.4",
        [_r.variable]: "fontSizes.sm",
        [an.variable]: "fontSizes.xs"
      }
    }),
    md: on({
      stepper: {
        [Ct.variable]: "sizes.8",
        [wr.variable]: "sizes.5",
        [_r.variable]: "fontSizes.md",
        [an.variable]: "fontSizes.sm"
      }
    }),
    lg: on({
      stepper: {
        [Ct.variable]: "sizes.10",
        [wr.variable]: "sizes.6",
        [_r.variable]: "fontSizes.lg",
        [an.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function te(e, t = {}) {
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
    return te(e, t);
  }
  function i(...u) {
    for (const d of u)
      d in t || (t[d] = l(d));
    return te(e, t);
  }
  function a() {
    return Object.fromEntries(
      Object.entries(t).map(([d, h]) => [d, h.selector])
    );
  }
  function s() {
    return Object.fromEntries(
      Object.entries(t).map(([d, h]) => [d, h.className])
    );
  }
  function l(u) {
    const m = `chakra-${(["container", "root"].includes(u ?? "") ? [e] : [e, u]).filter(Boolean).join("__")}`;
    return {
      className: m,
      selector: `.${m}`,
      toString: () => u
    };
  }
  return {
    parts: o,
    toPart: l,
    extend: i,
    selectors: a,
    classnames: s,
    get keys() {
      return Object.keys(t);
    },
    __type: {}
  };
}
var cg = te("accordion").parts("root", "container", "button", "panel").extend("icon"), ug = te("alert").parts("title", "description", "container").extend("icon", "spinner"), dg = te("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), fg = te("breadcrumb").parts("link", "item", "container").extend("separator");
te("button").parts();
var hg = te("checkbox").parts("control", "icon", "container").extend("label");
te("progress").parts("track", "filledTrack").extend("label");
var pg = te("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), mg = te("editable").parts(
  "preview",
  "input",
  "textarea"
), gg = te("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), vg = te("formError").parts("text", "icon"), bg = te("input").parts("addon", "field", "element"), yg = te("list").parts("container", "item", "icon"), Sg = te("menu").parts("button", "list", "item").extend("groupTitle", "command", "divider"), xg = te("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), wg = te("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
te("pininput").parts("field");
var _g = te("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), kg = te("progress").parts(
  "label",
  "filledTrack",
  "track"
), Tg = te("radio").parts(
  "container",
  "control",
  "label"
), Cg = te("select").parts("field", "icon"), Pg = te("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), Eg = te("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), $g = te("switch").parts(
  "container",
  "track",
  "thumb"
), Ag = te("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), Rg = te("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), Dg = te("tag").parts(
  "container",
  "label",
  "closeButton"
), Vg = te("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
function sr(e, t, r) {
  return Math.min(Math.max(e, r), t);
}
class zg extends Error {
  constructor(t) {
    super(`Failed to parse color: "${t}"`);
  }
}
var sn = zg;
function Ja(e) {
  if (typeof e != "string")
    throw new sn(e);
  if (e.trim().toLowerCase() === "transparent")
    return [0, 0, 0, 0];
  let t = e.trim();
  t = Ng.test(e) ? Fg(e) : e;
  const r = Bg.exec(t);
  if (r) {
    const a = Array.from(r).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(kn(s, 2), 16)), parseInt(kn(a[3] || "f", 2), 16) / 255];
  }
  const n = jg.exec(t);
  if (n) {
    const a = Array.from(n).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 16)), parseInt(a[3] || "ff", 16) / 255];
  }
  const o = Ig.exec(t);
  if (o) {
    const a = Array.from(o).slice(1);
    return [...a.slice(0, 3).map((s) => parseInt(s, 10)), parseFloat(a[3] || "1")];
  }
  const i = Lg.exec(t);
  if (i) {
    const [a, s, l, c] = Array.from(i).slice(1).map(parseFloat);
    if (sr(0, 100, s) !== s)
      throw new sn(e);
    if (sr(0, 100, l) !== l)
      throw new sn(e);
    return [...Wg(a, s, l), Number.isNaN(c) ? 1 : c];
  }
  throw new sn(e);
}
function Mg(e) {
  let t = 5381, r = e.length;
  for (; r; )
    t = t * 33 ^ e.charCodeAt(--r);
  return (t >>> 0) % 2341;
}
const cl = (e) => parseInt(e.replace(/_/g, ""), 36), Og = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, t) => {
  const r = cl(t.substring(0, 3)), n = cl(t.substring(3)).toString(16);
  let o = "";
  for (let i = 0; i < 6 - n.length; i++)
    o += "0";
  return e[r] = `${o}${n}`, e;
}, {});
function Fg(e) {
  const t = e.toLowerCase().trim(), r = Og[Mg(t)];
  if (!r)
    throw new sn(e);
  return `#${r}`;
}
const kn = (e, t) => Array.from(Array(t)).map(() => e).join(""), Bg = new RegExp(`^#${kn("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), jg = new RegExp(`^#${kn("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Ig = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${kn(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Lg = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Ng = /^[a-z]+$/i, ul = (e) => Math.round(e * 255), Wg = (e, t, r) => {
  let n = r / 100;
  if (t === 0)
    return [n, n, n].map(ul);
  const o = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * n - 1)) * (t / 100), a = i * (1 - Math.abs(o % 2 - 1));
  let s = 0, l = 0, c = 0;
  o >= 0 && o < 1 ? (s = i, l = a) : o >= 1 && o < 2 ? (s = a, l = i) : o >= 2 && o < 3 ? (l = i, c = a) : o >= 3 && o < 4 ? (l = a, c = i) : o >= 4 && o < 5 ? (s = a, c = i) : o >= 5 && o < 6 && (s = i, c = a);
  const u = n - i / 2, d = s + u, h = l + u, m = c + u;
  return [d, h, m].map(ul);
};
function Ug(e, t, r, n) {
  return `rgba(${sr(0, 255, e).toFixed()}, ${sr(0, 255, t).toFixed()}, ${sr(0, 255, r).toFixed()}, ${parseFloat(sr(0, 1, n).toFixed(3))})`;
}
function Hg(e, t) {
  const [r, n, o, i] = Ja(e);
  return Ug(r, n, o, i - t);
}
function Yg(e) {
  const [t, r, n, o] = Ja(e);
  let i = (a) => {
    const s = sr(0, 255, a).toString(16);
    return s.length === 1 ? `0${s}` : s;
  };
  return `#${i(t)}${i(r)}${i(n)}${o < 1 ? i(Math.round(o * 255)) : ""}`;
}
function Gg(e, t, r, n, o) {
  for (t = t.split ? t.split(".") : t, n = 0; n < t.length; n++)
    e = e ? e[t[n]] : o;
  return e === o ? r : e;
}
var qg = (e) => Object.keys(e).length === 0, zo = (e, t, r) => {
  const n = Gg(e, `colors.${t}`, t);
  try {
    return Yg(n), n;
  } catch {
    return r ?? "#000000";
  }
}, ot = (e, t, r) => {
  var n;
  return (n = Vm(e, "colors", t)) != null ? n : r;
}, Kg = (e) => {
  const [t, r, n] = Ja(e);
  return (t * 299 + r * 587 + n * 114) / 1e3;
}, Xg = (e) => (t) => {
  const r = zo(t, e);
  return Kg(r) < 128 ? "dark" : "light";
}, Zg = (e) => (t) => Xg(e)(t) === "dark", Br = (e, t) => (r) => {
  const n = zo(r, e);
  return Hg(n, 1 - t);
};
function dl(e = "1rem", t = "rgba(255, 255, 255, 0.15)") {
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
var Jg = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function Qg(e) {
  const t = Jg();
  return !e || qg(e) ? t : e.string && e.colors ? tv(e.string, e.colors) : e.string && !e.colors ? ev(e.string) : e.colors && !e.string ? rv(e.colors) : t;
}
function ev(e) {
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
function tv(e, t) {
  let r = 0;
  if (e.length === 0)
    return t[0];
  for (let n = 0; n < e.length; n += 1)
    r = e.charCodeAt(n) + ((r << 5) - r), r = r & r;
  return r = (r % t.length + t.length) % t.length, t[r];
}
function rv(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function D(e, t) {
  return (r) => r.colorMode === "dark" ? t : e;
}
function Qa(e) {
  const { orientation: t, vertical: r, horizontal: n } = e;
  return t ? t === "vertical" ? r : n : {};
}
function Au(e) {
  return it(e) && e.reference ? e.reference : String(e);
}
var ri = (e, ...t) => t.map(Au).join(` ${e} `).replace(/calc/g, ""), fl = (...e) => `calc(${ri("+", ...e)})`, hl = (...e) => `calc(${ri("-", ...e)})`, Sa = (...e) => `calc(${ri("*", ...e)})`, pl = (...e) => `calc(${ri("/", ...e)})`, ml = (e) => {
  const t = Au(e);
  return t != null && !Number.isNaN(parseFloat(t)) ? String(t).startsWith("-") ? String(t).slice(1) : `-${t}` : Sa(t, -1);
}, Pt = Object.assign(
  (e) => ({
    add: (...t) => Pt(fl(e, ...t)),
    subtract: (...t) => Pt(hl(e, ...t)),
    multiply: (...t) => Pt(Sa(e, ...t)),
    divide: (...t) => Pt(pl(e, ...t)),
    negate: () => Pt(ml(e)),
    toString: () => e.toString()
  }),
  {
    add: fl,
    subtract: hl,
    multiply: Sa,
    divide: pl,
    negate: ml
  }
);
function nv(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function ov(e, t = "-") {
  return e.replace(/\s+/g, t);
}
function Ru(e) {
  const t = ov(e.toString());
  return t.includes("\\.") ? e : nv(e) ? t.replace(".", "\\.") : e;
}
function iv(e, t = "") {
  return [t, Ru(e)].filter(Boolean).join("-");
}
function av(e, t) {
  return `var(${Ru(e)}${t ? `, ${t}` : ""})`;
}
function sv(e, t = "") {
  return `--${iv(e, t)}`;
}
function xe(e, t) {
  const r = sv(e, t == null ? void 0 : t.prefix);
  return {
    variable: r,
    reference: av(r, lv(t == null ? void 0 : t.fallback))
  };
}
function lv(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: cv, definePartsStyle: bo } = oe($g.keys), fn = xe("switch-track-width"), cr = xe("switch-track-height"), zi = xe("switch-track-diff"), uv = Pt.subtract(fn, cr), xa = xe("switch-thumb-x"), Qr = xe("switch-bg"), dv = (e) => {
  const { colorScheme: t } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [fn.reference],
    height: [cr.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [Qr.variable]: "colors.gray.300",
    _dark: {
      [Qr.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [Qr.variable]: `colors.${t}.500`,
      _dark: {
        [Qr.variable]: `colors.${t}.200`
      }
    },
    bg: Qr.reference
  };
}, fv = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [cr.reference],
  height: [cr.reference],
  _checked: {
    transform: `translateX(${xa.reference})`
  }
}, hv = bo((e) => ({
  container: {
    [zi.variable]: uv,
    [xa.variable]: zi.reference,
    _rtl: {
      [xa.variable]: Pt(zi).negate().toString()
    }
  },
  track: dv(e),
  thumb: fv
})), pv = {
  sm: bo({
    container: {
      [fn.variable]: "1.375rem",
      [cr.variable]: "sizes.3"
    }
  }),
  md: bo({
    container: {
      [fn.variable]: "1.875rem",
      [cr.variable]: "sizes.4"
    }
  }),
  lg: bo({
    container: {
      [fn.variable]: "2.875rem",
      [cr.variable]: "sizes.6"
    }
  })
}, mv = cv({
  baseStyle: hv,
  sizes: pv,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: gv, definePartsStyle: $r } = oe(Ag.keys), vv = $r({
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
}), Mo = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, bv = $r((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: D("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: D(`${t}.100`, `${t}.700`)(e),
      ...Mo
    },
    td: {
      borderBottom: "1px",
      borderColor: D(`${t}.100`, `${t}.700`)(e),
      ...Mo
    },
    caption: {
      color: D("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), yv = $r((e) => {
  const { colorScheme: t } = e;
  return {
    th: {
      color: D("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: D(`${t}.100`, `${t}.700`)(e),
      ...Mo
    },
    td: {
      borderBottom: "1px",
      borderColor: D(`${t}.100`, `${t}.700`)(e),
      ...Mo
    },
    caption: {
      color: D("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: D(`${t}.100`, `${t}.700`)(e)
          },
          td: {
            background: D(`${t}.100`, `${t}.700`)(e)
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
}), Sv = {
  simple: bv,
  striped: yv,
  unstyled: {}
}, xv = {
  sm: $r({
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
  md: $r({
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
  lg: $r({
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
}, wv = gv({
  baseStyle: vv,
  variants: Sv,
  sizes: xv,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Fe = M("tabs-color"), nt = M("tabs-bg"), no = M("tabs-border-color"), { defineMultiStyleConfig: _v, definePartsStyle: mt } = oe(Rg.keys), kv = (e) => {
  const { orientation: t } = e;
  return {
    display: t === "vertical" ? "flex" : "block"
  };
}, Tv = (e) => {
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
}, Cv = (e) => {
  const { align: t = "start", orientation: r } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[t],
    flexDirection: r === "vertical" ? "column" : "row"
  };
}, Pv = {
  p: 4
}, Ev = mt((e) => ({
  root: kv(e),
  tab: Tv(e),
  tablist: Cv(e),
  tabpanel: Pv
})), $v = {
  sm: mt({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: mt({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: mt({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, Av = mt((e) => {
  const { colorScheme: t, orientation: r } = e, n = r === "vertical", o = n ? "borderStart" : "borderBottom", i = n ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [o]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [o]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [Fe.variable]: `colors.${t}.600`,
        _dark: {
          [Fe.variable]: `colors.${t}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [nt.variable]: "colors.gray.200",
        _dark: {
          [nt.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Fe.reference,
      bg: nt.reference
    }
  };
}), Rv = mt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [no.variable]: "transparent",
      _selected: {
        [Fe.variable]: `colors.${t}.600`,
        [no.variable]: "colors.white",
        _dark: {
          [Fe.variable]: `colors.${t}.300`,
          [no.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: no.reference
      },
      color: Fe.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Dv = mt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [nt.variable]: "colors.gray.50",
      _dark: {
        [nt.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [nt.variable]: "colors.white",
        [Fe.variable]: `colors.${t}.600`,
        _dark: {
          [nt.variable]: "colors.gray.800",
          [Fe.variable]: `colors.${t}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Fe.reference,
      bg: nt.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Vv = mt((e) => {
  const { colorScheme: t, theme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: zo(r, `${t}.700`),
        bg: zo(r, `${t}.100`)
      }
    }
  };
}), zv = mt((e) => {
  const { colorScheme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Fe.variable]: "colors.gray.600",
      _dark: {
        [Fe.variable]: "inherit"
      },
      _selected: {
        [Fe.variable]: "colors.white",
        [nt.variable]: `colors.${t}.600`,
        _dark: {
          [Fe.variable]: "colors.gray.800",
          [nt.variable]: `colors.${t}.300`
        }
      },
      color: Fe.reference,
      bg: nt.reference
    }
  };
}), Mv = mt({}), Ov = {
  line: Av,
  enclosed: Rv,
  "enclosed-colored": Dv,
  "soft-rounded": Vv,
  "solid-rounded": zv,
  unstyled: Mv
}, Fv = _v({
  baseStyle: Ev,
  sizes: $v,
  variants: Ov,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), me = nm("badge", ["bg", "color", "shadow"]), Bv = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: me.bg.reference,
  color: me.color.reference,
  boxShadow: me.shadow.reference
}, jv = (e) => {
  const { colorScheme: t, theme: r } = e, n = Br(`${t}.500`, 0.6)(r);
  return {
    [me.bg.variable]: `colors.${t}.500`,
    [me.color.variable]: "colors.white",
    _dark: {
      [me.bg.variable]: n,
      [me.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, Iv = (e) => {
  const { colorScheme: t, theme: r } = e, n = Br(`${t}.200`, 0.16)(r);
  return {
    [me.bg.variable]: `colors.${t}.100`,
    [me.color.variable]: `colors.${t}.800`,
    _dark: {
      [me.bg.variable]: n,
      [me.color.variable]: `colors.${t}.200`
    }
  };
}, Lv = (e) => {
  const { colorScheme: t, theme: r } = e, n = Br(`${t}.200`, 0.8)(r);
  return {
    [me.color.variable]: `colors.${t}.500`,
    _dark: {
      [me.color.variable]: n
    },
    [me.shadow.variable]: `inset 0 0 0px 1px ${me.color.reference}`
  };
}, Nv = {
  solid: jv,
  subtle: Iv,
  outline: Lv
}, hn = {
  baseStyle: Bv,
  variants: Nv,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: Wv, definePartsStyle: ur } = oe(Dg.keys), gl = M("tag-bg"), vl = M("tag-color"), Mi = M("tag-shadow"), yo = M("tag-min-height"), So = M("tag-min-width"), xo = M("tag-font-size"), wo = M("tag-padding-inline"), Uv = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [vl.variable]: me.color.reference,
  [gl.variable]: me.bg.reference,
  [Mi.variable]: me.shadow.reference,
  color: vl.reference,
  bg: gl.reference,
  boxShadow: Mi.reference,
  borderRadius: "md",
  minH: yo.reference,
  minW: So.reference,
  fontSize: xo.reference,
  px: wo.reference,
  _focusVisible: {
    [Mi.variable]: "shadows.outline"
  }
}, Hv = {
  lineHeight: 1.2,
  overflow: "visible"
}, Yv = {
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
}, Gv = ur({
  container: Uv,
  label: Hv,
  closeButton: Yv
}), qv = {
  sm: ur({
    container: {
      [yo.variable]: "sizes.5",
      [So.variable]: "sizes.5",
      [xo.variable]: "fontSizes.xs",
      [wo.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: ur({
    container: {
      [yo.variable]: "sizes.6",
      [So.variable]: "sizes.6",
      [xo.variable]: "fontSizes.sm",
      [wo.variable]: "space.2"
    }
  }),
  lg: ur({
    container: {
      [yo.variable]: "sizes.8",
      [So.variable]: "sizes.8",
      [xo.variable]: "fontSizes.md",
      [wo.variable]: "space.3"
    }
  })
}, Kv = {
  subtle: ur((e) => {
    var t;
    return {
      container: (t = hn.variants) == null ? void 0 : t.subtle(e)
    };
  }),
  solid: ur((e) => {
    var t;
    return {
      container: (t = hn.variants) == null ? void 0 : t.solid(e)
    };
  }),
  outline: ur((e) => {
    var t;
    return {
      container: (t = hn.variants) == null ? void 0 : t.outline(e)
    };
  })
}, Xv = Wv({
  variants: Kv,
  baseStyle: Gv,
  sizes: qv,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Et, defineMultiStyleConfig: Zv } = oe(bg.keys), Jv = Et({
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
}), It = {
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
}, Qv = {
  lg: Et({
    field: It.lg,
    addon: It.lg
  }),
  md: Et({
    field: It.md,
    addon: It.md
  }),
  sm: Et({
    field: It.sm,
    addon: It.sm
  }),
  xs: Et({
    field: It.xs,
    addon: It.xs
  })
};
function es(e) {
  const { focusBorderColor: t, errorBorderColor: r } = e;
  return {
    focusBorderColor: t || D("blue.500", "blue.300")(e),
    errorBorderColor: r || D("red.500", "red.300")(e)
  };
}
var eb = Et((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = es(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: D("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ot(t, n),
        boxShadow: `0 0 0 1px ${ot(t, n)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: ot(t, r),
        boxShadow: `0 0 0 1px ${ot(t, r)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: D("inherit", "whiteAlpha.50")(e),
      bg: D("gray.100", "whiteAlpha.300")(e)
    }
  };
}), tb = Et((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = es(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: D("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: D("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ot(t, n)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: ot(t, r)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: D("gray.100", "whiteAlpha.50")(e)
    }
  };
}), rb = Et((e) => {
  const { theme: t } = e, { focusBorderColor: r, errorBorderColor: n } = es(e);
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
        borderColor: ot(t, n),
        boxShadow: `0px 1px 0px 0px ${ot(t, n)}`
      },
      _focusVisible: {
        borderColor: ot(t, r),
        boxShadow: `0px 1px 0px 0px ${ot(t, r)}`
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
}), nb = Et({
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
}), ob = {
  outline: eb,
  filled: tb,
  flushed: rb,
  unstyled: nb
}, X = Zv({
  baseStyle: Jv,
  sizes: Qv,
  variants: ob,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), bl, ib = {
  ...(bl = X.baseStyle) == null ? void 0 : bl.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, yl, Sl, ab = {
  outline: (e) => {
    var t, r;
    return (r = (t = X.variants) == null ? void 0 : t.outline(e).field) != null ? r : {};
  },
  flushed: (e) => {
    var t, r;
    return (r = (t = X.variants) == null ? void 0 : t.flushed(e).field) != null ? r : {};
  },
  filled: (e) => {
    var t, r;
    return (r = (t = X.variants) == null ? void 0 : t.filled(e).field) != null ? r : {};
  },
  unstyled: (Sl = (yl = X.variants) == null ? void 0 : yl.unstyled.field) != null ? Sl : {}
}, xl, wl, _l, kl, Tl, Cl, Pl, El, sb = {
  xs: (wl = (xl = X.sizes) == null ? void 0 : xl.xs.field) != null ? wl : {},
  sm: (kl = (_l = X.sizes) == null ? void 0 : _l.sm.field) != null ? kl : {},
  md: (Cl = (Tl = X.sizes) == null ? void 0 : Tl.md.field) != null ? Cl : {},
  lg: (El = (Pl = X.sizes) == null ? void 0 : Pl.lg.field) != null ? El : {}
}, lb = {
  baseStyle: ib,
  sizes: sb,
  variants: ab,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, oo = xe("tooltip-bg"), Oi = xe("tooltip-fg"), cb = xe("popper-arrow-bg"), ub = {
  bg: oo.reference,
  color: Oi.reference,
  [oo.variable]: "colors.gray.700",
  [Oi.variable]: "colors.whiteAlpha.900",
  _dark: {
    [oo.variable]: "colors.gray.300",
    [Oi.variable]: "colors.gray.900"
  },
  [cb.variable]: oo.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, db = {
  baseStyle: ub
}, { defineMultiStyleConfig: fb, definePartsStyle: ln } = oe(kg.keys), hb = (e) => {
  const { colorScheme: t, theme: r, isIndeterminate: n, hasStripe: o } = e, i = D(
    dl(),
    dl("1rem", "rgba(0,0,0,0.1)")
  )(e), a = D(`${t}.500`, `${t}.200`)(e), s = `linear-gradient(
    to right,
    transparent 0%,
    ${ot(r, a)} 50%,
    transparent 100%
  )`;
  return {
    ...!n && o && i,
    ...n ? { bgImage: s } : { bgColor: a }
  };
}, pb = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, mb = (e) => ({
  bg: D("gray.100", "whiteAlpha.300")(e)
}), gb = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...hb(e)
}), vb = ln((e) => ({
  label: pb,
  filledTrack: gb(e),
  track: mb(e)
})), bb = {
  xs: ln({
    track: { h: "1" }
  }),
  sm: ln({
    track: { h: "2" }
  }),
  md: ln({
    track: { h: "3" }
  }),
  lg: ln({
    track: { h: "4" }
  })
}, yb = fb({
  sizes: bb,
  baseStyle: vb,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Sb = (e) => typeof e == "function";
function De(e, ...t) {
  return Sb(e) ? e(...t) : e;
}
var { definePartsStyle: _o, defineMultiStyleConfig: xb } = oe(hg.keys), pn = M("checkbox-size"), wb = (e) => {
  const { colorScheme: t } = e;
  return {
    w: pn.reference,
    h: pn.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: D(`${t}.500`, `${t}.200`)(e),
      borderColor: D(`${t}.500`, `${t}.200`)(e),
      color: D("white", "gray.900")(e),
      _hover: {
        bg: D(`${t}.600`, `${t}.300`)(e),
        borderColor: D(`${t}.600`, `${t}.300`)(e)
      },
      _disabled: {
        borderColor: D("gray.200", "transparent")(e),
        bg: D("gray.200", "whiteAlpha.300")(e),
        color: D("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: D(`${t}.500`, `${t}.200`)(e),
      borderColor: D(`${t}.500`, `${t}.200`)(e),
      color: D("white", "gray.900")(e)
    },
    _disabled: {
      bg: D("gray.100", "whiteAlpha.100")(e),
      borderColor: D("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: D("red.500", "red.300")(e)
    }
  };
}, _b = {
  _disabled: { cursor: "not-allowed" }
}, kb = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, Tb = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Cb = _o((e) => ({
  icon: Tb,
  container: _b,
  control: De(wb, e),
  label: kb
})), Pb = {
  sm: _o({
    control: { [pn.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: _o({
    control: { [pn.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: _o({
    control: { [pn.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Oo = xb({
  baseStyle: Cb,
  sizes: Pb,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Eb, definePartsStyle: ko } = oe(Tg.keys), $b = (e) => {
  var t;
  const r = (t = De(Oo.baseStyle, e)) == null ? void 0 : t.control;
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
}, Ab = ko((e) => {
  var t, r, n, o;
  return {
    label: (r = (t = Oo).baseStyle) == null ? void 0 : r.call(t, e).label,
    container: (o = (n = Oo).baseStyle) == null ? void 0 : o.call(n, e).container,
    control: $b(e)
  };
}), Rb = {
  md: ko({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: ko({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: ko({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, Db = Eb({
  baseStyle: Ab,
  sizes: Rb,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Vb, definePartsStyle: zb } = oe(Cg.keys), io = M("select-bg"), $l, Mb = {
  ...($l = X.baseStyle) == null ? void 0 : $l.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: io.reference,
  [io.variable]: "colors.white",
  _dark: {
    [io.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: io.reference
  }
}, Ob = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, Fb = zb({
  field: Mb,
  icon: Ob
}), ao = {
  paddingInlineEnd: "8"
}, Al, Rl, Dl, Vl, zl, Ml, Ol, Fl, Bb = {
  lg: {
    ...(Al = X.sizes) == null ? void 0 : Al.lg,
    field: {
      ...(Rl = X.sizes) == null ? void 0 : Rl.lg.field,
      ...ao
    }
  },
  md: {
    ...(Dl = X.sizes) == null ? void 0 : Dl.md,
    field: {
      ...(Vl = X.sizes) == null ? void 0 : Vl.md.field,
      ...ao
    }
  },
  sm: {
    ...(zl = X.sizes) == null ? void 0 : zl.sm,
    field: {
      ...(Ml = X.sizes) == null ? void 0 : Ml.sm.field,
      ...ao
    }
  },
  xs: {
    ...(Ol = X.sizes) == null ? void 0 : Ol.xs,
    field: {
      ...(Fl = X.sizes) == null ? void 0 : Fl.xs.field,
      ...ao
    },
    icon: {
      insetEnd: "1"
    }
  }
}, jb = Vb({
  baseStyle: Fb,
  sizes: Bb,
  variants: X.variants,
  defaultProps: X.defaultProps
}), Fi = M("skeleton-start-color"), Bi = M("skeleton-end-color"), Ib = {
  [Fi.variable]: "colors.gray.100",
  [Bi.variable]: "colors.gray.400",
  _dark: {
    [Fi.variable]: "colors.gray.800",
    [Bi.variable]: "colors.gray.600"
  },
  background: Fi.reference,
  borderColor: Bi.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, Lb = {
  baseStyle: Ib
}, ji = M("skip-link-bg"), Nb = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [ji.variable]: "colors.white",
    _dark: {
      [ji.variable]: "colors.gray.700"
    },
    bg: ji.reference
  }
}, Wb = {
  baseStyle: Nb
}, { defineMultiStyleConfig: Ub, definePartsStyle: ni } = oe(Pg.keys), Tn = M("slider-thumb-size"), Cn = M("slider-track-size"), Ut = M("slider-bg"), Hb = (e) => {
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
    ...Qa({
      orientation: t,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, Yb = (e) => ({
  ...Qa({
    orientation: e.orientation,
    horizontal: { h: Cn.reference },
    vertical: { w: Cn.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [Ut.variable]: "colors.gray.200",
  _dark: {
    [Ut.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [Ut.variable]: "colors.gray.300",
    _dark: {
      [Ut.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: Ut.reference
}), Gb = (e) => {
  const { orientation: t } = e;
  return {
    ...Qa({
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
    w: Tn.reference,
    h: Tn.reference,
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
}, qb = (e) => {
  const { colorScheme: t } = e;
  return {
    width: "inherit",
    height: "inherit",
    [Ut.variable]: `colors.${t}.500`,
    _dark: {
      [Ut.variable]: `colors.${t}.200`
    },
    bg: Ut.reference
  };
}, Kb = ni((e) => ({
  container: Hb(e),
  track: Yb(e),
  thumb: Gb(e),
  filledTrack: qb(e)
})), Xb = ni({
  container: {
    [Tn.variable]: "sizes.4",
    [Cn.variable]: "sizes.1"
  }
}), Zb = ni({
  container: {
    [Tn.variable]: "sizes.3.5",
    [Cn.variable]: "sizes.1"
  }
}), Jb = ni({
  container: {
    [Tn.variable]: "sizes.2.5",
    [Cn.variable]: "sizes.0.5"
  }
}), Qb = {
  lg: Xb,
  md: Zb,
  sm: Jb
}, ey = Ub({
  baseStyle: Kb,
  sizes: Qb,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), ir = xe("spinner-size"), ty = {
  width: [ir.reference],
  height: [ir.reference]
}, ry = {
  xs: {
    [ir.variable]: "sizes.3"
  },
  sm: {
    [ir.variable]: "sizes.4"
  },
  md: {
    [ir.variable]: "sizes.6"
  },
  lg: {
    [ir.variable]: "sizes.8"
  },
  xl: {
    [ir.variable]: "sizes.12"
  }
}, ny = {
  baseStyle: ty,
  sizes: ry,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: oy, definePartsStyle: Du } = oe(Eg.keys), iy = {
  fontWeight: "medium"
}, ay = {
  opacity: 0.8,
  marginBottom: "2"
}, sy = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, ly = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, cy = Du({
  container: {},
  label: iy,
  helpText: ay,
  number: sy,
  icon: ly
}), uy = {
  md: Du({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, dy = oy({
  baseStyle: cy,
  sizes: uy,
  defaultProps: {
    size: "md"
  }
}), Ii = M("kbd-bg"), fy = {
  [Ii.variable]: "colors.gray.100",
  _dark: {
    [Ii.variable]: "colors.whiteAlpha.100"
  },
  bg: Ii.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, hy = {
  baseStyle: fy
}, py = {
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
}, my = {
  baseStyle: py
}, { defineMultiStyleConfig: gy, definePartsStyle: vy } = oe(yg.keys), by = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, yy = vy({
  icon: by
}), Sy = gy({
  baseStyle: yy
}), { defineMultiStyleConfig: xy, definePartsStyle: wy } = oe(Sg.keys), ft = M("menu-bg"), Li = M("menu-shadow"), _y = {
  [ft.variable]: "#fff",
  [Li.variable]: "shadows.sm",
  _dark: {
    [ft.variable]: "colors.gray.700",
    [Li.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: ft.reference,
  boxShadow: Li.reference
}, ky = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [ft.variable]: "colors.gray.100",
    _dark: {
      [ft.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [ft.variable]: "colors.gray.200",
    _dark: {
      [ft.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [ft.variable]: "colors.gray.100",
    _dark: {
      [ft.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: ft.reference
}, Ty = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, Cy = {
  opacity: 0.6
}, Py = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, Ey = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, $y = wy({
  button: Ey,
  list: _y,
  item: ky,
  groupTitle: Ty,
  command: Cy,
  divider: Py
}), Ay = xy({
  baseStyle: $y
}), { defineMultiStyleConfig: Ry, definePartsStyle: wa } = oe(xg.keys), Ni = M("modal-bg"), Wi = M("modal-shadow"), Dy = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Vy = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: t ? "center" : "flex-start",
    overflow: r === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, zy = (e) => {
  const { isCentered: t, scrollBehavior: r } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: t ? "auto" : "16",
    mx: t ? "auto" : void 0,
    zIndex: "modal",
    maxH: r === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Ni.variable]: "colors.white",
    [Wi.variable]: "shadows.lg",
    _dark: {
      [Ni.variable]: "colors.gray.700",
      [Wi.variable]: "shadows.dark-lg"
    },
    bg: Ni.reference,
    boxShadow: Wi.reference
  };
}, My = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Oy = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Fy = (e) => {
  const { scrollBehavior: t } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: t === "inside" ? "auto" : void 0
  };
}, By = {
  px: "6",
  py: "4"
}, jy = wa((e) => ({
  overlay: Dy,
  dialogContainer: De(Vy, e),
  dialog: De(zy, e),
  header: My,
  closeButton: Oy,
  body: De(Fy, e),
  footer: By
}));
function tt(e) {
  return wa(e === "full" ? {
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
var Iy = {
  xs: tt("xs"),
  sm: tt("sm"),
  md: tt("md"),
  lg: tt("lg"),
  xl: tt("xl"),
  "2xl": tt("2xl"),
  "3xl": tt("3xl"),
  "4xl": tt("4xl"),
  "5xl": tt("5xl"),
  "6xl": tt("6xl"),
  full: tt("full")
}, Ly = Ry({
  baseStyle: jy,
  sizes: Iy,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: Ny, definePartsStyle: Vu } = oe(wg.keys), ts = xe("number-input-stepper-width"), zu = xe("number-input-input-padding"), Wy = Pt(ts).add("0.5rem").toString(), Ui = xe("number-input-bg"), Hi = xe("number-input-color"), Yi = xe("number-input-border-color"), Uy = {
  [ts.variable]: "sizes.6",
  [zu.variable]: Wy
}, Hy = (e) => {
  var t, r;
  return (r = (t = De(X.baseStyle, e)) == null ? void 0 : t.field) != null ? r : {};
}, Yy = {
  width: ts.reference
}, Gy = {
  borderStart: "1px solid",
  borderStartColor: Yi.reference,
  color: Hi.reference,
  bg: Ui.reference,
  [Hi.variable]: "colors.chakra-body-text",
  [Yi.variable]: "colors.chakra-border-color",
  _dark: {
    [Hi.variable]: "colors.whiteAlpha.800",
    [Yi.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Ui.variable]: "colors.gray.200",
    _dark: {
      [Ui.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, qy = Vu((e) => {
  var t;
  return {
    root: Uy,
    field: (t = De(Hy, e)) != null ? t : {},
    stepperGroup: Yy,
    stepper: Gy
  };
});
function so(e) {
  var t, r, n;
  const o = (t = X.sizes) == null ? void 0 : t[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, a = (n = (r = o.field) == null ? void 0 : r.fontSize) != null ? n : "md", s = Cu.fontSizes[a];
  return Vu({
    field: {
      ...o.field,
      paddingInlineEnd: zu.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Pt(s).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: i[e]
      },
      _last: {
        borderBottomEndRadius: i[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var Ky = {
  xs: so("xs"),
  sm: so("sm"),
  md: so("md"),
  lg: so("lg")
}, Xy = Ny({
  baseStyle: qy,
  sizes: Ky,
  variants: X.variants,
  defaultProps: X.defaultProps
}), Bl, Zy = {
  ...(Bl = X.baseStyle) == null ? void 0 : Bl.field,
  textAlign: "center"
}, Jy = {
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
}, jl, Il, Qy = {
  outline: (e) => {
    var t, r, n;
    return (n = (r = De((t = X.variants) == null ? void 0 : t.outline, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  flushed: (e) => {
    var t, r, n;
    return (n = (r = De((t = X.variants) == null ? void 0 : t.flushed, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  filled: (e) => {
    var t, r, n;
    return (n = (r = De((t = X.variants) == null ? void 0 : t.filled, e)) == null ? void 0 : r.field) != null ? n : {};
  },
  unstyled: (Il = (jl = X.variants) == null ? void 0 : jl.unstyled.field) != null ? Il : {}
}, e0 = {
  baseStyle: Zy,
  sizes: Jy,
  variants: Qy,
  defaultProps: X.defaultProps
}, { defineMultiStyleConfig: t0, definePartsStyle: r0 } = oe(_g.keys), lo = xe("popper-bg"), n0 = xe("popper-arrow-bg"), Ll = xe("popper-arrow-shadow-color"), o0 = { zIndex: 10 }, i0 = {
  [lo.variable]: "colors.white",
  bg: lo.reference,
  [n0.variable]: lo.reference,
  [Ll.variable]: "colors.gray.200",
  _dark: {
    [lo.variable]: "colors.gray.700",
    [Ll.variable]: "colors.whiteAlpha.300"
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
}, a0 = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, s0 = {
  px: 3,
  py: 2
}, l0 = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, c0 = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, u0 = r0({
  popper: o0,
  content: i0,
  header: a0,
  body: s0,
  footer: l0,
  closeButton: c0
}), d0 = t0({
  baseStyle: u0
}), { definePartsStyle: _a, defineMultiStyleConfig: f0 } = oe(pg.keys), Gi = M("drawer-bg"), qi = M("drawer-box-shadow");
function xr(e) {
  return _a(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var h0 = {
  bg: "blackAlpha.600",
  zIndex: "overlay"
}, p0 = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, m0 = (e) => {
  const { isFullHeight: t } = e;
  return {
    ...t && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Gi.variable]: "colors.white",
    [qi.variable]: "shadows.lg",
    _dark: {
      [Gi.variable]: "colors.gray.700",
      [qi.variable]: "shadows.dark-lg"
    },
    bg: Gi.reference,
    boxShadow: qi.reference
  };
}, g0 = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, v0 = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, b0 = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, y0 = {
  px: "6",
  py: "4"
}, S0 = _a((e) => ({
  overlay: h0,
  dialogContainer: p0,
  dialog: De(m0, e),
  header: g0,
  closeButton: v0,
  body: b0,
  footer: y0
})), x0 = {
  xs: xr("xs"),
  sm: xr("md"),
  md: xr("lg"),
  lg: xr("2xl"),
  xl: xr("4xl"),
  full: xr("full")
}, w0 = f0({
  baseStyle: S0,
  sizes: x0,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: _0, defineMultiStyleConfig: k0 } = oe(mg.keys), T0 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, C0 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, P0 = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, E0 = _0({
  preview: T0,
  input: C0,
  textarea: P0
}), $0 = k0({
  baseStyle: E0
}), { definePartsStyle: A0, defineMultiStyleConfig: R0 } = oe(gg.keys), Ar = M("form-control-color"), D0 = {
  marginStart: "1",
  [Ar.variable]: "colors.red.500",
  _dark: {
    [Ar.variable]: "colors.red.300"
  },
  color: Ar.reference
}, V0 = {
  mt: "2",
  [Ar.variable]: "colors.gray.600",
  _dark: {
    [Ar.variable]: "colors.whiteAlpha.600"
  },
  color: Ar.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, z0 = A0({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: D0,
  helperText: V0
}), M0 = R0({
  baseStyle: z0
}), { definePartsStyle: O0, defineMultiStyleConfig: F0 } = oe(vg.keys), Rr = M("form-error-color"), B0 = {
  [Rr.variable]: "colors.red.500",
  _dark: {
    [Rr.variable]: "colors.red.300"
  },
  color: Rr.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, j0 = {
  marginEnd: "0.5em",
  [Rr.variable]: "colors.red.500",
  _dark: {
    [Rr.variable]: "colors.red.300"
  },
  color: Rr.reference
}, I0 = O0({
  text: B0,
  icon: j0
}), L0 = F0({
  baseStyle: I0
}), N0 = {
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
}, W0 = {
  baseStyle: N0
}, U0 = {
  fontFamily: "heading",
  fontWeight: "bold"
}, H0 = {
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
}, Y0 = {
  baseStyle: U0,
  sizes: H0,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: G0, definePartsStyle: q0 } = oe(fg.keys), Ki = M("breadcrumb-link-decor"), K0 = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Ki.reference,
  [Ki.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Ki.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, X0 = q0({
  link: K0
}), Z0 = G0({
  baseStyle: X0
}), J0 = {
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
}, Mu = (e) => {
  const { colorScheme: t, theme: r } = e;
  if (t === "gray")
    return {
      color: D("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: D("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: D("gray.200", "whiteAlpha.300")(e) }
    };
  const n = Br(`${t}.200`, 0.12)(r), o = Br(`${t}.200`, 0.24)(r);
  return {
    color: D(`${t}.600`, `${t}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: D(`${t}.50`, n)(e)
    },
    _active: {
      bg: D(`${t}.100`, o)(e)
    }
  };
}, Q0 = (e) => {
  const { colorScheme: t } = e, r = D("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: t === "gray" ? r : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...De(Mu, e)
  };
}, eS = {
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
}, tS = (e) => {
  var t;
  const { colorScheme: r } = e;
  if (r === "gray") {
    const l = D("gray.100", "whiteAlpha.200")(e);
    return {
      bg: l,
      color: D("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: D("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: l
        }
      },
      _active: { bg: D("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: n = `${r}.500`,
    color: o = "white",
    hoverBg: i = `${r}.600`,
    activeBg: a = `${r}.700`
  } = (t = eS[r]) != null ? t : {}, s = D(n, `${r}.200`)(e);
  return {
    bg: s,
    color: D(o, "gray.800")(e),
    _hover: {
      bg: D(i, `${r}.300`)(e),
      _disabled: {
        bg: s
      }
    },
    _active: { bg: D(a, `${r}.400`)(e) }
  };
}, rS = (e) => {
  const { colorScheme: t } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: D(`${t}.500`, `${t}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: D(`${t}.700`, `${t}.500`)(e)
    }
  };
}, nS = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, oS = {
  ghost: Mu,
  outline: Q0,
  solid: tS,
  link: rS,
  unstyled: nS
}, iS = {
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
}, aS = {
  baseStyle: J0,
  variants: oS,
  sizes: iS,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: dr, defineMultiStyleConfig: sS } = oe(Vg.keys), Fo = M("card-bg"), At = M("card-padding"), Ou = M("card-shadow"), To = M("card-radius"), Fu = M("card-border-width", "0"), Bu = M("card-border-color"), lS = dr({
  container: {
    [Fo.variable]: "colors.chakra-body-bg",
    backgroundColor: Fo.reference,
    boxShadow: Ou.reference,
    borderRadius: To.reference,
    color: "chakra-body-text",
    borderWidth: Fu.reference,
    borderColor: Bu.reference
  },
  body: {
    padding: At.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: At.reference
  },
  footer: {
    padding: At.reference
  }
}), cS = {
  sm: dr({
    container: {
      [To.variable]: "radii.base",
      [At.variable]: "space.3"
    }
  }),
  md: dr({
    container: {
      [To.variable]: "radii.md",
      [At.variable]: "space.5"
    }
  }),
  lg: dr({
    container: {
      [To.variable]: "radii.xl",
      [At.variable]: "space.7"
    }
  })
}, uS = {
  elevated: dr({
    container: {
      [Ou.variable]: "shadows.base",
      _dark: {
        [Fo.variable]: "colors.gray.700"
      }
    }
  }),
  outline: dr({
    container: {
      [Fu.variable]: "1px",
      [Bu.variable]: "colors.chakra-border-color"
    }
  }),
  filled: dr({
    container: {
      [Fo.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [At.variable]: 0
    },
    header: {
      [At.variable]: 0
    },
    footer: {
      [At.variable]: 0
    }
  }
}, dS = sS({
  baseStyle: lS,
  variants: uS,
  sizes: cS,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), mn = xe("close-button-size"), en = xe("close-button-bg"), fS = {
  w: [mn.reference],
  h: [mn.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [en.variable]: "colors.blackAlpha.100",
    _dark: {
      [en.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [en.variable]: "colors.blackAlpha.200",
    _dark: {
      [en.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: en.reference
}, hS = {
  lg: {
    [mn.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [mn.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [mn.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, pS = {
  baseStyle: fS,
  sizes: hS,
  defaultProps: {
    size: "md"
  }
}, { variants: mS, defaultProps: gS } = hn, vS = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: me.bg.reference,
  color: me.color.reference,
  boxShadow: me.shadow.reference
}, bS = {
  baseStyle: vS,
  variants: mS,
  defaultProps: gS
}, yS = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, SS = {
  baseStyle: yS
}, xS = {
  opacity: 0.6,
  borderColor: "inherit"
}, wS = {
  borderStyle: "solid"
}, _S = {
  borderStyle: "dashed"
}, kS = {
  solid: wS,
  dashed: _S
}, TS = {
  baseStyle: xS,
  variants: kS,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: CS, defineMultiStyleConfig: PS } = oe(cg.keys), ES = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, $S = {
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
}, AS = {
  pt: "2",
  px: "4",
  pb: "5"
}, RS = {
  fontSize: "1.25em"
}, DS = CS({
  container: ES,
  button: $S,
  panel: AS,
  icon: RS
}), VS = PS({ baseStyle: DS }), { definePartsStyle: Vn, defineMultiStyleConfig: zS } = oe(ug.keys), We = M("alert-fg"), Vt = M("alert-bg"), MS = Vn({
  container: {
    bg: Vt.reference,
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
    color: We.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: We.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function rs(e) {
  const { theme: t, colorScheme: r } = e, n = Br(`${r}.200`, 0.16)(t);
  return {
    light: `colors.${r}.100`,
    dark: n
  };
}
var OS = Vn((e) => {
  const { colorScheme: t } = e, r = rs(e);
  return {
    container: {
      [We.variable]: `colors.${t}.500`,
      [Vt.variable]: r.light,
      _dark: {
        [We.variable]: `colors.${t}.200`,
        [Vt.variable]: r.dark
      }
    }
  };
}), FS = Vn((e) => {
  const { colorScheme: t } = e, r = rs(e);
  return {
    container: {
      [We.variable]: `colors.${t}.500`,
      [Vt.variable]: r.light,
      _dark: {
        [We.variable]: `colors.${t}.200`,
        [Vt.variable]: r.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: We.reference
    }
  };
}), BS = Vn((e) => {
  const { colorScheme: t } = e, r = rs(e);
  return {
    container: {
      [We.variable]: `colors.${t}.500`,
      [Vt.variable]: r.light,
      _dark: {
        [We.variable]: `colors.${t}.200`,
        [Vt.variable]: r.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: We.reference
    }
  };
}), jS = Vn((e) => {
  const { colorScheme: t } = e;
  return {
    container: {
      [We.variable]: "colors.white",
      [Vt.variable]: `colors.${t}.500`,
      _dark: {
        [We.variable]: "colors.gray.900",
        [Vt.variable]: `colors.${t}.200`
      },
      color: We.reference
    }
  };
}), IS = {
  subtle: OS,
  "left-accent": FS,
  "top-accent": BS,
  solid: jS
}, LS = zS({
  baseStyle: MS,
  variants: IS,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: ju, defineMultiStyleConfig: NS } = oe(dg.keys), Dr = M("avatar-border-color"), gn = M("avatar-bg"), Pn = M("avatar-font-size"), jr = M("avatar-size"), WS = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Dr.reference,
  [Dr.variable]: "white",
  _dark: {
    [Dr.variable]: "colors.gray.800"
  }
}, US = {
  bg: gn.reference,
  fontSize: Pn.reference,
  width: jr.reference,
  height: jr.reference,
  lineHeight: "1",
  [gn.variable]: "colors.gray.200",
  _dark: {
    [gn.variable]: "colors.whiteAlpha.400"
  }
}, HS = (e) => {
  const { name: t, theme: r } = e, n = t ? Qg({ string: t }) : "colors.gray.400", o = Zg(n)(r);
  let i = "white";
  return o || (i = "gray.800"), {
    bg: gn.reference,
    fontSize: Pn.reference,
    color: i,
    borderColor: Dr.reference,
    verticalAlign: "top",
    width: jr.reference,
    height: jr.reference,
    "&:not([data-loaded])": {
      [gn.variable]: n
    },
    [Dr.variable]: "colors.white",
    _dark: {
      [Dr.variable]: "colors.gray.800"
    }
  };
}, YS = {
  fontSize: Pn.reference,
  lineHeight: "1"
}, GS = ju((e) => ({
  badge: De(WS, e),
  excessLabel: De(US, e),
  container: De(HS, e),
  label: YS
}));
function Lt(e) {
  const t = e !== "100%" ? Eu[e] : void 0;
  return ju({
    container: {
      [jr.variable]: t ?? e,
      [Pn.variable]: `calc(${t ?? e} / 2.5)`
    },
    excessLabel: {
      [jr.variable]: t ?? e,
      [Pn.variable]: `calc(${t ?? e} / 2.5)`
    }
  });
}
var qS = {
  "2xs": Lt(4),
  xs: Lt(6),
  sm: Lt(8),
  md: Lt(12),
  lg: Lt(16),
  xl: Lt(24),
  "2xl": Lt(32),
  full: Lt("100%")
}, KS = NS({
  baseStyle: GS,
  sizes: qS,
  defaultProps: {
    size: "md"
  }
}), XS = {
  Accordion: VS,
  Alert: LS,
  Avatar: KS,
  Badge: hn,
  Breadcrumb: Z0,
  Button: aS,
  Checkbox: Oo,
  CloseButton: pS,
  Code: bS,
  Container: SS,
  Divider: TS,
  Drawer: w0,
  Editable: $0,
  Form: M0,
  FormError: L0,
  FormLabel: W0,
  Heading: Y0,
  Input: X,
  Kbd: hy,
  Link: my,
  List: Sy,
  Menu: Ay,
  Modal: Ly,
  NumberInput: Xy,
  PinInput: e0,
  Popover: d0,
  Progress: yb,
  Radio: Db,
  Select: jb,
  Skeleton: Lb,
  SkipLink: Wb,
  Slider: ey,
  Spinner: ny,
  Stat: dy,
  Switch: mv,
  Table: wv,
  Tabs: Fv,
  Tag: Xv,
  Textarea: lb,
  Tooltip: db,
  Card: dS,
  Stepper: lg
}, Iu = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, Lu = {
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
}, Nu = "ltr", Wu = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, Uu = {
  semanticTokens: Iu,
  direction: Nu,
  ...$u,
  components: XS,
  styles: Lu,
  config: Wu
}, Qk = Uu, ZS = {
  semanticTokens: Iu,
  direction: Nu,
  components: {},
  ...$u,
  styles: Lu,
  config: Wu
};
function cn(e) {
  return typeof e == "function";
}
function JS(...e) {
  return (t) => e.reduce((r, n) => n(r), t);
}
var Hu = (e) => function(...r) {
  let n = [...r], o = r[r.length - 1];
  return Om(o) && n.length > 1 ? n = n.slice(0, n.length - 1) : o = e, JS(
    ...n.map(
      (i) => (a) => cn(i) ? i(a) : Yu(a, i)
    )
  )(o);
}, eT = Hu(Uu), tT = Hu(ZS);
function Yu(...e) {
  return Ze({}, ...e, Gu);
}
function Gu(e, t, r, n) {
  if ((cn(e) || cn(t)) && Object.prototype.hasOwnProperty.call(n, r))
    return (...o) => {
      const i = cn(e) ? e(...o) : e, a = cn(t) ? t(...o) : t;
      return Ze({}, i, a, Gu);
    };
}
function QS(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    t.includes(n) || (r[n] = e[n]);
  }), r;
}
function ex(e, t, r, n) {
  const o = typeof t == "string" ? t.split(".") : [t];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? r : e;
}
var tx = (e) => {
  const t = /* @__PURE__ */ new WeakMap();
  return (n, o, i, a) => {
    if (typeof n > "u")
      return e(n, o, i);
    t.has(n) || t.set(n, /* @__PURE__ */ new Map());
    const s = t.get(n);
    if (s.has(o))
      return s.get(o);
    const l = e(n, o, i, a);
    return s.set(o, l), l;
  };
}, rx = tx(ex);
function qu(e, t) {
  const r = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    t(o, n, e) && (r[n] = o);
  }), r;
}
var Ku = (e) => qu(e, (t) => t != null);
function Nl(e) {
  return typeof e == "number";
}
function nx(e) {
  return typeof e == "function";
}
var ox = process.env.NODE_ENV !== "production";
process.env.NODE_ENV;
function rT(e) {
  return "current" in e;
}
function ix(e, ...t) {
  return nx(e) ? e(...t) : e;
}
function nT(...e) {
  return function(r) {
    e.some((n) => (n == null || n(r), r == null ? void 0 : r.defaultPrevented));
  };
}
function ax(e) {
  let t;
  return function(...n) {
    return e && (t = e.apply(this, n), e = null), t;
  };
}
var oT = () => {
}, iT = /* @__PURE__ */ ax((e) => () => {
  const { condition: t, message: r } = e;
  t && ox && console.warn(r);
}), aT = (...e) => (t) => e.reduce((r, n) => n(r), t), Xi = (e, t) => Math.abs(e - t), Wl = (e) => "x" in e && "y" in e;
function sT(e, t) {
  if (Nl(e) && Nl(t))
    return Xi(e, t);
  if (Wl(e) && Wl(t)) {
    const r = Xi(e.x, t.x), n = Xi(e.y, t.y);
    return Math.sqrt(r ** 2 + n ** 2);
  }
  return 0;
}
var sx = typeof Element < "u", lx = typeof Map == "function", cx = typeof Set == "function", ux = typeof ArrayBuffer == "function" && !!ArrayBuffer.isView;
function Co(e, t) {
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
        if (!Co(e[n], t[n]))
          return !1;
      return !0;
    }
    var i;
    if (lx && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!Co(n.value[1], t.get(n.value[0])))
          return !1;
      return !0;
    }
    if (cx && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size)
        return !1;
      for (i = e.entries(); !(n = i.next()).done; )
        if (!t.has(n.value[0]))
          return !1;
      return !0;
    }
    if (ux && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
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
    if (sx && e instanceof Element)
      return !1;
    for (n = r; n-- !== 0; )
      if (!((o[n] === "_owner" || o[n] === "__v" || o[n] === "__o") && e.$$typeof) && !Co(e[o[n]], t[o[n]]))
        return !1;
    return !0;
  }
  return e !== e && t !== t;
}
var dx = function(t, r) {
  try {
    return Co(t, r);
  } catch (n) {
    if ((n.message || "").match(/stack|recursion/i))
      return console.warn("react-fast-compare cannot handle circular refs"), !1;
    throw n;
  }
};
const fx = /* @__PURE__ */ uu(dx);
function ns(e, t = {}) {
  var r;
  const { styleConfig: n, ...o } = t, { theme: i, colorMode: a } = yu(), s = e ? rx(i, `components.${e}`) : void 0, l = n || s, c = Ze(
    { theme: i, colorMode: a },
    (r = l == null ? void 0 : l.defaultProps) != null ? r : {},
    Ku(QS(o, ["children"]))
  ), u = Mr({});
  if (l) {
    const h = Dm(l)(c);
    fx(u.current, h) || (u.current = h);
  }
  return u.current;
}
function hx(e, t = {}) {
  return ns(e, t);
}
function lT(e, t = {}) {
  return ns(e, t);
}
function cT(e, t) {
  var r;
  const { baseConfig: n, ...o } = t, { theme: i } = yu(), a = (r = i.components) == null ? void 0 : r[e], s = a ? Yu(a, n) : n;
  return ns(null, {
    ...o,
    styleConfig: s
  });
}
var px = /* @__PURE__ */ new Set([
  ...ym,
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
]), mx = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function gx(e) {
  return mx.has(e) || !px.has(e);
}
function vx(e, ...t) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const r = { ...e };
  for (const n of t)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in r && delete r[o], r[o] = n[o]);
  return r;
}
var bx = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, yx = /* @__PURE__ */ su(
  function(e) {
    return bx.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Sx = yx, xx = function(t) {
  return t !== "theme";
}, Ul = function(t) {
  return typeof t == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  t.charCodeAt(0) > 96 ? Sx : xx;
}, Hl = function(t, r, n) {
  var o;
  if (r) {
    var i = r.shouldForwardProp;
    o = t.__emotion_forwardProp && i ? function(a) {
      return t.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = t.__emotion_forwardProp), o;
}, Yl = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, wx = function(t) {
  var r = t.cache, n = t.serialized, o = t.isStringTag;
  return Zo(r, n, o), Ya(function() {
    return Jo(r, n, o);
  }), null;
}, _x = function e(t, r) {
  if (process.env.NODE_ENV !== "production" && t === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = t.__emotion_real === t, o = n && t.__emotion_base || t, i, a;
  r !== void 0 && (i = r.label, a = r.target);
  var s = Hl(t, r, n), l = s || Ul(o), c = !l("as");
  return function() {
    var u = arguments, d = n && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
    if (i !== void 0 && d.push("label:" + i + ";"), u[0] == null || u[0].raw === void 0)
      d.push.apply(d, u);
    else {
      process.env.NODE_ENV !== "production" && u[0][0] === void 0 && console.error(Yl), d.push(u[0][0]);
      for (var h = u.length, m = 1; m < h; m++)
        process.env.NODE_ENV !== "production" && u[0][m] === void 0 && console.error(Yl), d.push(u[m], u[0][m]);
    }
    var b = Qo(function(S, T, _) {
      var x = c && S.as || o, k = "", P = [], w = S;
      if (S.theme == null) {
        w = {};
        for (var F in S)
          w[F] = S[F];
        w.theme = ae.useContext(qt);
      }
      typeof S.className == "string" ? k = Ua(T.registered, P, S.className) : S.className != null && (k = S.className + " ");
      var R = Fr(d.concat(P), T.registered, w);
      k += T.key + "-" + R.name, a !== void 0 && (k += " " + a);
      var O = c && s === void 0 ? Ul(x) : l, L = {};
      for (var ge in S)
        c && ge === "as" || // $FlowFixMe
        O(ge) && (L[ge] = S[ge]);
      return L.className = k, L.ref = _, /* @__PURE__ */ ae.createElement(ae.Fragment, null, /* @__PURE__ */ ae.createElement(wx, {
        cache: T,
        serialized: R,
        isStringTag: typeof x == "string"
      }), /* @__PURE__ */ ae.createElement(x, L));
    });
    return b.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", b.defaultProps = t.defaultProps, b.__emotion_real = b, b.__emotion_base = o, b.__emotion_styles = d, b.__emotion_forwardProp = s, Object.defineProperty(b, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), b.withComponent = function(S, T) {
      return e(S, Ao({}, r, T, {
        shouldForwardProp: Hl(b, T, !0)
      })).apply(void 0, d);
    }, b;
  };
}, kx = [
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
], Bo = _x.bind();
kx.forEach(function(e) {
  Bo[e] = Bo(e);
});
var Gl, Tx = (Gl = Bo.default) != null ? Gl : Bo, Cx = ({ baseStyle: e }) => (t) => {
  const { theme: r, css: n, __css: o, sx: i, ...a } = t, s = qu(a, (d, h) => xm(h)), l = ix(e, t), c = vx(
    {},
    o,
    l,
    Ku(s),
    i
  ), u = Em(c)(t.theme);
  return n ? [u, n] : u;
};
function Zi(e, t) {
  const { baseStyle: r, ...n } = t ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = gx);
  const o = Cx({ baseStyle: r }), i = Tx(
    e,
    n
  )(o);
  return zr.forwardRef(function(l, c) {
    const { colorMode: u, forced: d } = qa();
    return zr.createElement(i, {
      ref: c,
      "data-theme": d ? u : void 0,
      ...l
    });
  });
}
function Px() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Zi, {
    apply(t, r, n) {
      return Zi(...n);
    },
    get(t, r) {
      return e.has(r) || e.set(r, Zi(r)), e.get(r);
    }
  });
}
var ql = Px();
function Ex(e) {
  return ja(e);
}
function uT(e, t = []) {
  const r = Mr(e);
  return Gt(() => {
    r.current = e;
  }), tu((...n) => {
    var o;
    return (o = r.current) == null ? void 0 : o.call(r, ...n);
  }, t);
}
function dT(e, t) {
  const r = Mr(!1), n = Mr(!1);
  Gt(() => {
    if (r.current && n.current)
      return e();
    n.current = !0;
  }, t), Gt(() => (r.current = !0, () => {
    r.current = !1;
  }), []);
}
const Xu = Zt({
  transformPagePoint: (e) => e,
  isStatic: !1,
  reducedMotion: "never"
}), oi = Zt({}), ii = Zt(null), ai = typeof document < "u", Kl = ai ? eu : Gt, Zu = Zt({ strict: !1 });
function $x(e, t, r, n) {
  const { visualElement: o } = Se(oi), i = Se(Zu), a = Se(ii), s = Se(Xu).reducedMotion, l = Mr();
  n = n || i.renderer, !l.current && n && (l.current = n(e, {
    visualState: t,
    parent: o,
    props: r,
    presenceContext: a,
    blockInitialAnimation: a ? a.initial === !1 : !1,
    reducedMotionConfig: s
  }));
  const c = l.current;
  return qf(() => {
    c && c.update(r, a);
  }), Kl(() => {
    c && c.render();
  }), Gt(() => {
    c && c.updateFeatures();
  }), (window.HandoffAppearAnimations ? Kl : Gt)(() => {
    c && c.animationState && c.animationState.animateChanges();
  }), c;
}
function kr(e) {
  return typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current");
}
function Ax(e, t, r) {
  return tu(
    (n) => {
      n && e.mount && e.mount(n), t && (n ? t.mount(n) : t.unmount()), r && (typeof r == "function" ? r(n) : kr(r) && (r.current = n));
    },
    /**
     * Only pass a new ref callback to React if we've received a visual element
     * factory. Otherwise we'll be mounting/remounting every time externalRef
     * or other dependencies change.
     */
    [t]
  );
}
function En(e) {
  return typeof e == "string" || Array.isArray(e);
}
function si(e) {
  return typeof e == "object" && typeof e.start == "function";
}
const os = [
  "animate",
  "whileInView",
  "whileFocus",
  "whileHover",
  "whileTap",
  "whileDrag",
  "exit"
], is = ["initial", ...os];
function li(e) {
  return si(e.animate) || is.some((t) => En(e[t]));
}
function Ju(e) {
  return !!(li(e) || e.variants);
}
function Rx(e, t) {
  if (li(e)) {
    const { initial: r, animate: n } = e;
    return {
      initial: r === !1 || En(r) ? r : void 0,
      animate: En(n) ? n : void 0
    };
  }
  return e.inherit !== !1 ? t : {};
}
function Dx(e) {
  const { initial: t, animate: r } = Rx(e, Se(oi));
  return Go(() => ({ initial: t, animate: r }), [Xl(t), Xl(r)]);
}
function Xl(e) {
  return Array.isArray(e) ? e.join(" ") : e;
}
const Zl = {
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
}, $n = {};
for (const e in Zl)
  $n[e] = {
    isEnabled: (t) => Zl[e].some((r) => !!t[r])
  };
function Vx(e) {
  for (const t in e)
    $n[t] = {
      ...$n[t],
      ...e[t]
    };
}
const Qu = Zt({}), ed = Zt({}), zx = Symbol.for("motionComponentSymbol");
function Mx({ preloadedFeatures: e, createVisualElement: t, useRender: r, useVisualState: n, Component: o }) {
  e && Vx(e);
  function i(s, l) {
    let c;
    const u = {
      ...Se(Xu),
      ...s,
      layoutId: Ox(s)
    }, { isStatic: d } = u, h = Dx(s), m = n(s, d);
    if (!d && ai) {
      h.visualElement = $x(o, m, u, t);
      const b = Se(ed), S = Se(Zu).strict;
      h.visualElement && (c = h.visualElement.loadFeatures(
        // Note: Pass the full new combined props to correctly re-render dynamic feature components.
        u,
        S,
        e,
        b
      ));
    }
    return ae.createElement(
      oi.Provider,
      { value: h },
      c && h.visualElement ? ae.createElement(c, { visualElement: h.visualElement, ...u }) : null,
      r(o, s, Ax(m, h.visualElement, l), m, d, h.visualElement)
    );
  }
  const a = ja(i);
  return a[zx] = o, a;
}
function Ox({ layoutId: e }) {
  const t = Se(Qu).id;
  return t && e !== void 0 ? t + "-" + e : e;
}
function Fx(e) {
  function t(n, o = {}) {
    return Mx(e(n, o));
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
const Bx = [
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
function as(e) {
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
      !!(Bx.indexOf(e) > -1 || /**
       * If it contains a capital letter, it's an SVG component
       */
      /[A-Z]/.test(e))
    )
  );
}
const jo = {};
function jx(e) {
  Object.assign(jo, e);
}
const zn = [
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
], fr = new Set(zn);
function td(e, { layout: t, layoutId: r }) {
  return fr.has(e) || e.startsWith("origin") || (t || r !== void 0) && (!!jo[e] || e === "opacity");
}
const je = (e) => !!(e && e.getVelocity), Ix = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}, Lx = zn.length;
function Nx(e, { enableHardwareAcceleration: t = !0, allowTransformNone: r = !0 }, n, o) {
  let i = "";
  for (let a = 0; a < Lx; a++) {
    const s = zn[a];
    if (e[s] !== void 0) {
      const l = Ix[s] || s;
      i += `${l}(${e[s]}) `;
    }
  }
  return t && !e.z && (i += "translateZ(0)"), i = i.trim(), o ? i = o(e, n ? "" : i) : r && n && (i = "none"), i;
}
const rd = (e) => (t) => typeof t == "string" && t.startsWith(e), nd = rd("--"), ka = rd("var(--"), Wx = /var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g, Ux = (e, t) => t && typeof e == "number" ? t.transform(e) : e, Kt = (e, t, r) => Math.min(Math.max(r, e), t), hr = {
  test: (e) => typeof e == "number",
  parse: parseFloat,
  transform: (e) => e
}, vn = {
  ...hr,
  transform: (e) => Kt(0, 1, e)
}, co = {
  ...hr,
  default: 1
}, bn = (e) => Math.round(e * 1e5) / 1e5, ci = /(-)?([\d]*\.?[\d])+/g, od = /(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi, Hx = /^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;
function Mn(e) {
  return typeof e == "string";
}
const On = (e) => ({
  test: (t) => Mn(t) && t.endsWith(e) && t.split(" ").length === 1,
  parse: parseFloat,
  transform: (t) => `${t}${e}`
}), Nt = On("deg"), gt = On("%"), V = On("px"), Yx = On("vh"), Gx = On("vw"), Jl = {
  ...gt,
  parse: (e) => gt.parse(e) / 100,
  transform: (e) => gt.transform(e * 100)
}, Ql = {
  ...hr,
  transform: Math.round
}, id = {
  // Border props
  borderWidth: V,
  borderTopWidth: V,
  borderRightWidth: V,
  borderBottomWidth: V,
  borderLeftWidth: V,
  borderRadius: V,
  radius: V,
  borderTopLeftRadius: V,
  borderTopRightRadius: V,
  borderBottomRightRadius: V,
  borderBottomLeftRadius: V,
  // Positioning props
  width: V,
  maxWidth: V,
  height: V,
  maxHeight: V,
  size: V,
  top: V,
  right: V,
  bottom: V,
  left: V,
  // Spacing props
  padding: V,
  paddingTop: V,
  paddingRight: V,
  paddingBottom: V,
  paddingLeft: V,
  margin: V,
  marginTop: V,
  marginRight: V,
  marginBottom: V,
  marginLeft: V,
  // Transform props
  rotate: Nt,
  rotateX: Nt,
  rotateY: Nt,
  rotateZ: Nt,
  scale: co,
  scaleX: co,
  scaleY: co,
  scaleZ: co,
  skew: Nt,
  skewX: Nt,
  skewY: Nt,
  distance: V,
  translateX: V,
  translateY: V,
  translateZ: V,
  x: V,
  y: V,
  z: V,
  perspective: V,
  transformPerspective: V,
  opacity: vn,
  originX: Jl,
  originY: Jl,
  originZ: V,
  // Misc
  zIndex: Ql,
  // SVG
  fillOpacity: vn,
  strokeOpacity: vn,
  numOctaves: Ql
};
function ss(e, t, r, n) {
  const { style: o, vars: i, transform: a, transformOrigin: s } = e;
  let l = !1, c = !1, u = !0;
  for (const d in t) {
    const h = t[d];
    if (nd(d)) {
      i[d] = h;
      continue;
    }
    const m = id[d], b = Ux(h, m);
    if (fr.has(d)) {
      if (l = !0, a[d] = b, !u)
        continue;
      h !== (m.default || 0) && (u = !1);
    } else
      d.startsWith("origin") ? (c = !0, s[d] = b) : o[d] = b;
  }
  if (t.transform || (l || n ? o.transform = Nx(e.transform, r, u, n) : o.transform && (o.transform = "none")), c) {
    const { originX: d = "50%", originY: h = "50%", originZ: m = 0 } = s;
    o.transformOrigin = `${d} ${h} ${m}`;
  }
}
const ls = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function ad(e, t, r) {
  for (const n in t)
    !je(t[n]) && !td(n, r) && (e[n] = t[n]);
}
function qx({ transformTemplate: e }, t, r) {
  return Go(() => {
    const n = ls();
    return ss(n, t, { enableHardwareAcceleration: !r }, e), Object.assign({}, n.vars, n.style);
  }, [t]);
}
function Kx(e, t, r) {
  const n = e.style || {}, o = {};
  return ad(o, n, e), Object.assign(o, qx(e, t, r)), e.transformValues ? e.transformValues(o) : o;
}
function Xx(e, t, r) {
  const n = {}, o = Kx(e, t, r);
  return e.drag && e.dragListener !== !1 && (n.draggable = !1, o.userSelect = o.WebkitUserSelect = o.WebkitTouchCallout = "none", o.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`), e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (n.tabIndex = 0), n.style = o, n;
}
const Zx = /* @__PURE__ */ new Set([
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
function Io(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || Zx.has(e);
}
let sd = (e) => !Io(e);
function Jx(e) {
  e && (sd = (t) => t.startsWith("on") ? !Io(t) : e(t));
}
try {
  Jx(require("@emotion/is-prop-valid").default);
} catch {
}
function Qx(e, t, r) {
  const n = {};
  for (const o in e)
    o === "values" && typeof e.values == "object" || (sd(o) || r === !0 && Io(o) || !t && !Io(o) || // If trying to use native HTML drag events, forward drag listeners
    e.draggable && o.startsWith("onDrag")) && (n[o] = e[o]);
  return n;
}
function ec(e, t, r) {
  return typeof e == "string" ? e : V.transform(t + r * e);
}
function e1(e, t, r) {
  const n = ec(t, e.x, e.width), o = ec(r, e.y, e.height);
  return `${n} ${o}`;
}
const t1 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}, r1 = {
  offset: "strokeDashoffset",
  array: "strokeDasharray"
};
function n1(e, t, r = 1, n = 0, o = !0) {
  e.pathLength = 1;
  const i = o ? t1 : r1;
  e[i.offset] = V.transform(-n);
  const a = V.transform(t), s = V.transform(r);
  e[i.array] = `${a} ${s}`;
}
function cs(e, {
  attrX: t,
  attrY: r,
  attrScale: n,
  originX: o,
  originY: i,
  pathLength: a,
  pathSpacing: s = 1,
  pathOffset: l = 0,
  // This is object creation, which we try to avoid per-frame.
  ...c
}, u, d, h) {
  if (ss(e, c, u, h), d) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return;
  }
  e.attrs = e.style, e.style = {};
  const { attrs: m, style: b, dimensions: S } = e;
  m.transform && (S && (b.transform = m.transform), delete m.transform), S && (o !== void 0 || i !== void 0 || b.transform) && (b.transformOrigin = e1(S, o !== void 0 ? o : 0.5, i !== void 0 ? i : 0.5)), t !== void 0 && (m.x = t), r !== void 0 && (m.y = r), n !== void 0 && (m.scale = n), a !== void 0 && n1(m, a, s, l, !1);
}
const ld = () => ({
  ...ls(),
  attrs: {}
}), us = (e) => typeof e == "string" && e.toLowerCase() === "svg";
function o1(e, t, r, n) {
  const o = Go(() => {
    const i = ld();
    return cs(i, t, { enableHardwareAcceleration: !1 }, us(n), e.transformTemplate), {
      ...i.attrs,
      style: { ...i.style }
    };
  }, [t]);
  if (e.style) {
    const i = {};
    ad(i, e.style, e), o.style = { ...i, ...o.style };
  }
  return o;
}
function i1(e = !1) {
  return (r, n, o, { latestValues: i }, a) => {
    const l = (as(r) ? o1 : Xx)(n, i, a, r), u = {
      ...Qx(n, typeof r == "string", e),
      ...l,
      ref: o
    }, { children: d } = n, h = Go(() => je(d) ? d.get() : d, [d]);
    return Kf(r, {
      ...u,
      children: h
    });
  };
}
const ds = (e) => e.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
function cd(e, { style: t, vars: r }, n, o) {
  Object.assign(e.style, t, o && o.getProjectionStyles(n));
  for (const i in r)
    e.style.setProperty(i, r[i]);
}
const ud = /* @__PURE__ */ new Set([
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
function dd(e, t, r, n) {
  cd(e, t, void 0, n);
  for (const o in t.attrs)
    e.setAttribute(ud.has(o) ? o : ds(o), t.attrs[o]);
}
function fs(e, t) {
  const { style: r } = e, n = {};
  for (const o in r)
    (je(r[o]) || t.style && je(t.style[o]) || td(o, e)) && (n[o] = r[o]);
  return n;
}
function fd(e, t) {
  const r = fs(e, t);
  for (const n in e)
    if (je(e[n]) || je(t[n])) {
      const o = zn.indexOf(n) !== -1 ? "attr" + n.charAt(0).toUpperCase() + n.substring(1) : n;
      r[o] = e[n];
    }
  return r;
}
function hs(e, t, r, n = {}, o = {}) {
  return typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), typeof t == "string" && (t = e.variants && e.variants[t]), typeof t == "function" && (t = t(r !== void 0 ? r : e.custom, n, o)), t;
}
function a1(e) {
  const t = Mr(null);
  return t.current === null && (t.current = e()), t.current;
}
const Lo = (e) => Array.isArray(e), s1 = (e) => !!(e && typeof e == "object" && e.mix && e.toValue), l1 = (e) => Lo(e) ? e[e.length - 1] || 0 : e;
function Po(e) {
  const t = je(e) ? e.get() : e;
  return s1(t) ? t.toValue() : t;
}
function c1({ scrapeMotionValuesFromProps: e, createRenderState: t, onMount: r }, n, o, i) {
  const a = {
    latestValues: u1(n, o, i, e),
    renderState: t()
  };
  return r && (a.mount = (s) => r(n, s, a)), a;
}
const hd = (e) => (t, r) => {
  const n = Se(oi), o = Se(ii), i = () => c1(e, t, n, o);
  return r ? i() : a1(i);
};
function u1(e, t, r, n) {
  const o = {}, i = n(e, {});
  for (const h in i)
    o[h] = Po(i[h]);
  let { initial: a, animate: s } = e;
  const l = li(e), c = Ju(e);
  t && c && !l && e.inherit !== !1 && (a === void 0 && (a = t.initial), s === void 0 && (s = t.animate));
  let u = r ? r.initial === !1 : !1;
  u = u || a === !1;
  const d = u ? s : a;
  return d && typeof d != "boolean" && !si(d) && (Array.isArray(d) ? d : [d]).forEach((m) => {
    const b = hs(e, m);
    if (!b)
      return;
    const { transitionEnd: S, transition: T, ..._ } = b;
    for (const x in _) {
      let k = _[x];
      if (Array.isArray(k)) {
        const P = u ? k.length - 1 : 0;
        k = k[P];
      }
      k !== null && (o[x] = k);
    }
    for (const x in S)
      o[x] = S[x];
  }), o;
}
const d1 = {
  useVisualState: hd({
    scrapeMotionValuesFromProps: fd,
    createRenderState: ld,
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
      cs(r, n, { enableHardwareAcceleration: !1 }, us(t.tagName), e.transformTemplate), dd(t, r);
    }
  })
}, f1 = {
  useVisualState: hd({
    scrapeMotionValuesFromProps: fs,
    createRenderState: ls
  })
};
function h1(e, { forwardMotionProps: t = !1 }, r, n) {
  return {
    ...as(e) ? d1 : f1,
    preloadedFeatures: r,
    useRender: i1(t),
    createVisualElement: n,
    Component: e
  };
}
function $t(e, t, r, n = { passive: !0 }) {
  return e.addEventListener(t, r, n), () => e.removeEventListener(t, r);
}
const pd = (e) => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1;
function ui(e, t = "page") {
  return {
    point: {
      x: e[t + "X"],
      y: e[t + "Y"]
    }
  };
}
const p1 = (e) => (t) => pd(t) && e(t, ui(t));
function Rt(e, t, r, n) {
  return $t(e, t, p1(r), n);
}
const m1 = (e, t) => (r) => t(e(r)), Ht = (...e) => e.reduce(m1);
function md(e) {
  let t = null;
  return () => {
    const r = () => {
      t = null;
    };
    return t === null ? (t = e, r) : !1;
  };
}
const tc = md("dragHorizontal"), rc = md("dragVertical");
function gd(e) {
  let t = !1;
  if (e === "y")
    t = rc();
  else if (e === "x")
    t = tc();
  else {
    const r = tc(), n = rc();
    r && n ? t = () => {
      r(), n();
    } : (r && r(), n && n());
  }
  return t;
}
function vd() {
  const e = gd(!0);
  return e ? (e(), !1) : !0;
}
class Jt {
  constructor(t) {
    this.isMounted = !1, this.node = t;
  }
  update() {
  }
}
function g1(e) {
  let t = [], r = [], n = 0, o = !1, i = !1;
  const a = /* @__PURE__ */ new WeakSet(), s = {
    /**
     * Schedule a process to run on the next frame.
     */
    schedule: (l, c = !1, u = !1) => {
      const d = u && o, h = d ? t : r;
      return c && a.add(l), h.indexOf(l) === -1 && (h.push(l), d && o && (n = t.length)), l;
    },
    /**
     * Cancel the provided callback from running on the next frame.
     */
    cancel: (l) => {
      const c = r.indexOf(l);
      c !== -1 && r.splice(c, 1), a.delete(l);
    },
    /**
     * Execute all schedule callbacks.
     */
    process: (l) => {
      if (o) {
        i = !0;
        return;
      }
      if (o = !0, [t, r] = [r, t], r.length = 0, n = t.length, n)
        for (let c = 0; c < n; c++) {
          const u = t[c];
          u(l), a.has(u) && (s.schedule(u), e());
        }
      o = !1, i && (i = !1, s.process(l));
    }
  };
  return s;
}
const ue = {
  delta: 0,
  timestamp: 0,
  isProcessing: !1
}, v1 = 40;
let Ta = !0, An = !1;
const di = [
  "read",
  "update",
  "preRender",
  "render",
  "postRender"
], Vr = di.reduce((e, t) => (e[t] = g1(() => An = !0), e), {}), b1 = (e) => Vr[e].process(ue), bd = (e) => {
  An = !1, ue.delta = Ta ? 1e3 / 60 : Math.max(Math.min(e - ue.timestamp, v1), 1), ue.timestamp = e, ue.isProcessing = !0, di.forEach(b1), ue.isProcessing = !1, An && (Ta = !1, requestAnimationFrame(bd));
}, y1 = () => {
  An = !0, Ta = !0, ue.isProcessing || requestAnimationFrame(bd);
}, fe = di.reduce((e, t) => {
  const r = Vr[t];
  return e[t] = (n, o = !1, i = !1) => (An || y1(), r.schedule(n, o, i)), e;
}, {});
function zt(e) {
  di.forEach((t) => Vr[t].cancel(e));
}
function nc(e, t) {
  const r = "pointer" + (t ? "enter" : "leave"), n = "onHover" + (t ? "Start" : "End"), o = (i, a) => {
    if (i.type === "touch" || vd())
      return;
    const s = e.getProps();
    e.animationState && s.whileHover && e.animationState.setActive("whileHover", t), s[n] && fe.update(() => s[n](i, a));
  };
  return Rt(e.current, r, o, {
    passive: !e.getProps()[n]
  });
}
class S1 extends Jt {
  mount() {
    this.unmount = Ht(nc(this.node, !0), nc(this.node, !1));
  }
  unmount() {
  }
}
class x1 extends Jt {
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
    this.unmount = Ht($t(this.node.current, "focus", () => this.onFocus()), $t(this.node.current, "blur", () => this.onBlur()));
  }
  unmount() {
  }
}
const yd = (e, t) => t ? e === t ? !0 : yd(e, t.parentElement) : !1, ye = (e) => e;
function Ji(e, t) {
  if (!t)
    return;
  const r = new PointerEvent("pointer" + e);
  t(r, ui(r));
}
class w1 extends Jt {
  constructor() {
    super(...arguments), this.removeStartListeners = ye, this.removeEndListeners = ye, this.removeAccessibleListeners = ye, this.startPointerPress = (t, r) => {
      if (this.removeEndListeners(), this.isPressing)
        return;
      const n = this.node.getProps(), i = Rt(window, "pointerup", (s, l) => {
        if (!this.checkPressEnd())
          return;
        const { onTap: c, onTapCancel: u } = this.node.getProps();
        fe.update(() => {
          yd(this.node.current, s.target) ? c && c(s, l) : u && u(s, l);
        });
      }, { passive: !(n.onTap || n.onPointerUp) }), a = Rt(window, "pointercancel", (s, l) => this.cancelPress(s, l), { passive: !(n.onTapCancel || n.onPointerCancel) });
      this.removeEndListeners = Ht(i, a), this.startPress(t, r);
    }, this.startAccessiblePress = () => {
      const t = (i) => {
        if (i.key !== "Enter" || this.isPressing)
          return;
        const a = (s) => {
          s.key !== "Enter" || !this.checkPressEnd() || Ji("up", (l, c) => {
            const { onTap: u } = this.node.getProps();
            u && fe.update(() => u(l, c));
          });
        };
        this.removeEndListeners(), this.removeEndListeners = $t(this.node.current, "keyup", a), Ji("down", (s, l) => {
          this.startPress(s, l);
        });
      }, r = $t(this.node.current, "keydown", t), n = () => {
        this.isPressing && Ji("cancel", (i, a) => this.cancelPress(i, a));
      }, o = $t(this.node.current, "blur", n);
      this.removeAccessibleListeners = Ht(r, o);
    };
  }
  startPress(t, r) {
    this.isPressing = !0;
    const { onTapStart: n, whileTap: o } = this.node.getProps();
    o && this.node.animationState && this.node.animationState.setActive("whileTap", !0), n && fe.update(() => n(t, r));
  }
  checkPressEnd() {
    return this.removeEndListeners(), this.isPressing = !1, this.node.getProps().whileTap && this.node.animationState && this.node.animationState.setActive("whileTap", !1), !vd();
  }
  cancelPress(t, r) {
    if (!this.checkPressEnd())
      return;
    const { onTapCancel: n } = this.node.getProps();
    n && fe.update(() => n(t, r));
  }
  mount() {
    const t = this.node.getProps(), r = Rt(this.node.current, "pointerdown", this.startPointerPress, { passive: !(t.onTapStart || t.onPointerStart) }), n = $t(this.node.current, "focus", this.startAccessiblePress);
    this.removeStartListeners = Ht(r, n);
  }
  unmount() {
    this.removeStartListeners(), this.removeEndListeners(), this.removeAccessibleListeners();
  }
}
const Ca = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), _1 = (e) => {
  const t = Ca.get(e.target);
  t && t(e);
}, k1 = (e) => {
  e.forEach(_1);
};
function T1({ root: e, ...t }) {
  const r = e || document;
  Qi.has(r) || Qi.set(r, {});
  const n = Qi.get(r), o = JSON.stringify(t);
  return n[o] || (n[o] = new IntersectionObserver(k1, { root: e, ...t })), n[o];
}
function C1(e, t, r) {
  const n = T1(t);
  return Ca.set(e, r), n.observe(e), () => {
    Ca.delete(e), n.unobserve(e);
  };
}
const P1 = {
  some: 0,
  all: 1
};
class E1 extends Jt {
  constructor() {
    super(...arguments), this.hasEnteredView = !1, this.isInView = !1;
  }
  startObserver() {
    this.unmount();
    const { viewport: t = {} } = this.node.getProps(), { root: r, margin: n, amount: o = "some", once: i } = t, a = {
      root: r ? r.current : void 0,
      rootMargin: n,
      threshold: typeof o == "number" ? o : P1[o]
    }, s = (l) => {
      const { isIntersecting: c } = l;
      if (this.isInView === c || (this.isInView = c, i && !c && this.hasEnteredView))
        return;
      c && (this.hasEnteredView = !0), this.node.animationState && this.node.animationState.setActive("whileInView", c);
      const { onViewportEnter: u, onViewportLeave: d } = this.node.getProps(), h = c ? u : d;
      h && h(l);
    };
    return C1(this.node.current, a, s);
  }
  mount() {
    this.startObserver();
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: t, prevProps: r } = this.node;
    ["amount", "margin", "root"].some($1(t, r)) && this.startObserver();
  }
  unmount() {
  }
}
function $1({ viewport: e = {} }, { viewport: t = {} } = {}) {
  return (r) => e[r] !== t[r];
}
const A1 = {
  inView: {
    Feature: E1
  },
  tap: {
    Feature: w1
  },
  focus: {
    Feature: x1
  },
  hover: {
    Feature: S1
  }
};
function Sd(e, t) {
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
function R1(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.get()), t;
}
function D1(e) {
  const t = {};
  return e.values.forEach((r, n) => t[n] = r.getVelocity()), t;
}
function fi(e, t, r) {
  const n = e.getProps();
  return hs(n, t, r !== void 0 ? r : n.custom, R1(e), D1(e));
}
const V1 = "framerAppearId", z1 = "data-" + ds(V1);
let Fn = ye, vt = ye;
process.env.NODE_ENV !== "production" && (Fn = (e, t) => {
  !e && typeof console < "u" && console.warn(t);
}, vt = (e, t) => {
  if (!e)
    throw new Error(t);
});
const Yt = (e) => e * 1e3, Dt = (e) => e / 1e3, M1 = {
  current: !1
}, xd = (e) => Array.isArray(e) && typeof e[0] == "number";
function wd(e) {
  return !!(!e || typeof e == "string" && _d[e] || xd(e) || Array.isArray(e) && e.every(wd));
}
const un = ([e, t, r, n]) => `cubic-bezier(${e}, ${t}, ${r}, ${n})`, _d = {
  linear: "linear",
  ease: "ease",
  easeIn: "ease-in",
  easeOut: "ease-out",
  easeInOut: "ease-in-out",
  circIn: un([0, 0.65, 0.55, 1]),
  circOut: un([0.55, 0, 1, 0.45]),
  backIn: un([0.31, 0.01, 0.66, -0.59]),
  backOut: un([0.33, 1.53, 0.69, 0.99])
};
function kd(e) {
  if (e)
    return xd(e) ? un(e) : Array.isArray(e) ? e.map(kd) : _d[e];
}
function O1(e, t, r, { delay: n = 0, duration: o, repeat: i = 0, repeatType: a = "loop", ease: s, times: l } = {}) {
  const c = { [t]: r };
  l && (c.offset = l);
  const u = kd(s);
  return Array.isArray(u) && (c.easing = u), e.animate(c, {
    delay: n,
    duration: o,
    easing: Array.isArray(u) ? "linear" : u,
    fill: "both",
    iterations: i + 1,
    direction: a === "reverse" ? "alternate" : "normal"
  });
}
const oc = {
  waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate")
}, ea = {}, Td = {};
for (const e in oc)
  Td[e] = () => (ea[e] === void 0 && (ea[e] = oc[e]()), ea[e]);
function F1(e, { repeat: t, repeatType: r = "loop" }) {
  const n = t && r !== "loop" && t % 2 === 1 ? 0 : e.length - 1;
  return e[n];
}
const Cd = (e, t, r) => (((1 - 3 * r + 3 * t) * e + (3 * r - 6 * t)) * e + 3 * t) * e, B1 = 1e-7, j1 = 12;
function I1(e, t, r, n, o) {
  let i, a, s = 0;
  do
    a = t + (r - t) / 2, i = Cd(a, n, o) - e, i > 0 ? r = a : t = a;
  while (Math.abs(i) > B1 && ++s < j1);
  return a;
}
function Bn(e, t, r, n) {
  if (e === t && r === n)
    return ye;
  const o = (i) => I1(i, 0, 1, e, r);
  return (i) => i === 0 || i === 1 ? i : Cd(o(i), t, n);
}
const L1 = Bn(0.42, 0, 1, 1), N1 = Bn(0, 0, 0.58, 1), Pd = Bn(0.42, 0, 0.58, 1), W1 = (e) => Array.isArray(e) && typeof e[0] != "number", Ed = (e) => (t) => t <= 0.5 ? e(2 * t) / 2 : (2 - e(2 * (1 - t))) / 2, $d = (e) => (t) => 1 - e(1 - t), Ad = (e) => 1 - Math.sin(Math.acos(e)), ps = $d(Ad), U1 = Ed(ps), Rd = Bn(0.33, 1.53, 0.69, 0.99), ms = $d(Rd), H1 = Ed(ms), Y1 = (e) => (e *= 2) < 1 ? 0.5 * ms(e) : 0.5 * (2 - Math.pow(2, -10 * (e - 1))), ic = {
  linear: ye,
  easeIn: L1,
  easeInOut: Pd,
  easeOut: N1,
  circIn: Ad,
  circInOut: U1,
  circOut: ps,
  backIn: ms,
  backInOut: H1,
  backOut: Rd,
  anticipate: Y1
}, ac = (e) => {
  if (Array.isArray(e)) {
    vt(e.length === 4, "Cubic bezier arrays must contain four numerical values.");
    const [t, r, n, o] = e;
    return Bn(t, r, n, o);
  } else if (typeof e == "string")
    return vt(ic[e] !== void 0, `Invalid easing type '${e}'`), ic[e];
  return e;
}, gs = (e, t) => (r) => !!(Mn(r) && Hx.test(r) && r.startsWith(e) || t && Object.prototype.hasOwnProperty.call(r, t)), Dd = (e, t, r) => (n) => {
  if (!Mn(n))
    return n;
  const [o, i, a, s] = n.match(ci);
  return {
    [e]: parseFloat(o),
    [t]: parseFloat(i),
    [r]: parseFloat(a),
    alpha: s !== void 0 ? parseFloat(s) : 1
  };
}, G1 = (e) => Kt(0, 255, e), ta = {
  ...hr,
  transform: (e) => Math.round(G1(e))
}, lr = {
  test: gs("rgb", "red"),
  parse: Dd("red", "green", "blue"),
  transform: ({ red: e, green: t, blue: r, alpha: n = 1 }) => "rgba(" + ta.transform(e) + ", " + ta.transform(t) + ", " + ta.transform(r) + ", " + bn(vn.transform(n)) + ")"
};
function q1(e) {
  let t = "", r = "", n = "", o = "";
  return e.length > 5 ? (t = e.substring(1, 3), r = e.substring(3, 5), n = e.substring(5, 7), o = e.substring(7, 9)) : (t = e.substring(1, 2), r = e.substring(2, 3), n = e.substring(3, 4), o = e.substring(4, 5), t += t, r += r, n += n, o += o), {
    red: parseInt(t, 16),
    green: parseInt(r, 16),
    blue: parseInt(n, 16),
    alpha: o ? parseInt(o, 16) / 255 : 1
  };
}
const Pa = {
  test: gs("#"),
  parse: q1,
  transform: lr.transform
}, Tr = {
  test: gs("hsl", "hue"),
  parse: Dd("hue", "saturation", "lightness"),
  transform: ({ hue: e, saturation: t, lightness: r, alpha: n = 1 }) => "hsla(" + Math.round(e) + ", " + gt.transform(bn(t)) + ", " + gt.transform(bn(r)) + ", " + bn(vn.transform(n)) + ")"
}, Re = {
  test: (e) => lr.test(e) || Pa.test(e) || Tr.test(e),
  parse: (e) => lr.test(e) ? lr.parse(e) : Tr.test(e) ? Tr.parse(e) : Pa.parse(e),
  transform: (e) => Mn(e) ? e : e.hasOwnProperty("red") ? lr.transform(e) : Tr.transform(e)
}, de = (e, t, r) => -r * e + r * t + e;
function ra(e, t, r) {
  return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + (t - e) * 6 * r : r < 1 / 2 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e;
}
function K1({ hue: e, saturation: t, lightness: r, alpha: n }) {
  e /= 360, t /= 100, r /= 100;
  let o = 0, i = 0, a = 0;
  if (!t)
    o = i = a = r;
  else {
    const s = r < 0.5 ? r * (1 + t) : r + t - r * t, l = 2 * r - s;
    o = ra(l, s, e + 1 / 3), i = ra(l, s, e), a = ra(l, s, e - 1 / 3);
  }
  return {
    red: Math.round(o * 255),
    green: Math.round(i * 255),
    blue: Math.round(a * 255),
    alpha: n
  };
}
const na = (e, t, r) => {
  const n = e * e;
  return Math.sqrt(Math.max(0, r * (t * t - n) + n));
}, X1 = [Pa, lr, Tr], Z1 = (e) => X1.find((t) => t.test(e));
function sc(e) {
  const t = Z1(e);
  vt(!!t, `'${e}' is not an animatable color. Use the equivalent color code instead.`);
  let r = t.parse(e);
  return t === Tr && (r = K1(r)), r;
}
const Vd = (e, t) => {
  const r = sc(e), n = sc(t), o = { ...r };
  return (i) => (o.red = na(r.red, n.red, i), o.green = na(r.green, n.green, i), o.blue = na(r.blue, n.blue, i), o.alpha = de(r.alpha, n.alpha, i), lr.transform(o));
};
function J1(e) {
  var t, r;
  return isNaN(e) && Mn(e) && (((t = e.match(ci)) === null || t === void 0 ? void 0 : t.length) || 0) + (((r = e.match(od)) === null || r === void 0 ? void 0 : r.length) || 0) > 0;
}
const zd = {
  regex: Wx,
  countKey: "Vars",
  token: "${v}",
  parse: ye
}, Md = {
  regex: od,
  countKey: "Colors",
  token: "${c}",
  parse: Re.parse
}, Od = {
  regex: ci,
  countKey: "Numbers",
  token: "${n}",
  parse: hr.parse
};
function oa(e, { regex: t, countKey: r, token: n, parse: o }) {
  const i = e.tokenised.match(t);
  i && (e["num" + r] = i.length, e.tokenised = e.tokenised.replace(t, n), e.values.push(...i.map(o)));
}
function No(e) {
  const t = e.toString(), r = {
    value: t,
    tokenised: t,
    values: [],
    numVars: 0,
    numColors: 0,
    numNumbers: 0
  };
  return r.value.includes("var(--") && oa(r, zd), oa(r, Md), oa(r, Od), r;
}
function Fd(e) {
  return No(e).values;
}
function Bd(e) {
  const { values: t, numColors: r, numVars: n, tokenised: o } = No(e), i = t.length;
  return (a) => {
    let s = o;
    for (let l = 0; l < i; l++)
      l < n ? s = s.replace(zd.token, a[l]) : l < n + r ? s = s.replace(Md.token, Re.transform(a[l])) : s = s.replace(Od.token, bn(a[l]));
    return s;
  };
}
const Q1 = (e) => typeof e == "number" ? 0 : e;
function ew(e) {
  const t = Fd(e);
  return Bd(e)(t.map(Q1));
}
const Xt = {
  test: J1,
  parse: Fd,
  createTransformer: Bd,
  getAnimatableNone: ew
}, jd = (e, t) => (r) => `${r > 0 ? t : e}`;
function Id(e, t) {
  return typeof e == "number" ? (r) => de(e, t, r) : Re.test(e) ? Vd(e, t) : e.startsWith("var(") ? jd(e, t) : Nd(e, t);
}
const Ld = (e, t) => {
  const r = [...e], n = r.length, o = e.map((i, a) => Id(i, t[a]));
  return (i) => {
    for (let a = 0; a < n; a++)
      r[a] = o[a](i);
    return r;
  };
}, tw = (e, t) => {
  const r = { ...e, ...t }, n = {};
  for (const o in r)
    e[o] !== void 0 && t[o] !== void 0 && (n[o] = Id(e[o], t[o]));
  return (o) => {
    for (const i in n)
      r[i] = n[i](o);
    return r;
  };
}, Nd = (e, t) => {
  const r = Xt.createTransformer(t), n = No(e), o = No(t);
  return n.numVars === o.numVars && n.numColors === o.numColors && n.numNumbers >= o.numNumbers ? Ht(Ld(n.values, o.values), r) : (Fn(!0, `Complex values '${e}' and '${t}' too different to mix. Ensure all colors are of the same type, and that each contains the same quantity of number and color values. Falling back to instant transition.`), jd(e, t));
}, Rn = (e, t, r) => {
  const n = t - e;
  return n === 0 ? 1 : (r - e) / n;
}, lc = (e, t) => (r) => de(e, t, r);
function rw(e) {
  return typeof e == "number" ? lc : typeof e == "string" ? Re.test(e) ? Vd : Nd : Array.isArray(e) ? Ld : typeof e == "object" ? tw : lc;
}
function nw(e, t, r) {
  const n = [], o = r || rw(e[0]), i = e.length - 1;
  for (let a = 0; a < i; a++) {
    let s = o(e[a], e[a + 1]);
    if (t) {
      const l = Array.isArray(t) ? t[a] || ye : t;
      s = Ht(l, s);
    }
    n.push(s);
  }
  return n;
}
function Wd(e, t, { clamp: r = !0, ease: n, mixer: o } = {}) {
  const i = e.length;
  if (vt(i === t.length, "Both input and output ranges must be the same length"), i === 1)
    return () => t[0];
  e[0] > e[i - 1] && (e = [...e].reverse(), t = [...t].reverse());
  const a = nw(t, n, o), s = a.length, l = (c) => {
    let u = 0;
    if (s > 1)
      for (; u < e.length - 2 && !(c < e[u + 1]); u++)
        ;
    const d = Rn(e[u], e[u + 1], c);
    return a[u](d);
  };
  return r ? (c) => l(Kt(e[0], e[i - 1], c)) : l;
}
function ow(e, t) {
  const r = e[e.length - 1];
  for (let n = 1; n <= t; n++) {
    const o = Rn(0, t, n);
    e.push(de(r, 1, o));
  }
}
function iw(e) {
  const t = [0];
  return ow(t, e.length - 1), t;
}
function aw(e, t) {
  return e.map((r) => r * t);
}
function sw(e, t) {
  return e.map(() => t || Pd).splice(0, e.length - 1);
}
function Wo({ duration: e = 300, keyframes: t, times: r, ease: n = "easeInOut" }) {
  const o = W1(n) ? n.map(ac) : ac(n), i = {
    done: !1,
    value: t[0]
  }, a = aw(
    // Only use the provided offsets if they're the correct length
    // TODO Maybe we should warn here if there's a length mismatch
    r && r.length === t.length ? r : iw(t),
    e
  ), s = Wd(a, t, {
    ease: Array.isArray(o) ? o : sw(t, o)
  });
  return {
    calculatedDuration: e,
    next: (l) => (i.value = s(l), i.done = l >= e, i)
  };
}
function Ud(e, t) {
  return t ? e * (1e3 / t) : 0;
}
const lw = 5;
function Hd(e, t, r) {
  const n = Math.max(t - lw, 0);
  return Ud(r - e(n), t - n);
}
const ia = 1e-3, cw = 0.01, cc = 10, uw = 0.05, dw = 1;
function fw({ duration: e = 800, bounce: t = 0.25, velocity: r = 0, mass: n = 1 }) {
  let o, i;
  Fn(e <= Yt(cc), "Spring duration must be 10 seconds or less");
  let a = 1 - t;
  a = Kt(uw, dw, a), e = Kt(cw, cc, Dt(e)), a < 1 ? (o = (c) => {
    const u = c * a, d = u * e, h = u - r, m = Ea(c, a), b = Math.exp(-d);
    return ia - h / m * b;
  }, i = (c) => {
    const d = c * a * e, h = d * r + r, m = Math.pow(a, 2) * Math.pow(c, 2) * e, b = Math.exp(-d), S = Ea(Math.pow(c, 2), a);
    return (-o(c) + ia > 0 ? -1 : 1) * ((h - m) * b) / S;
  }) : (o = (c) => {
    const u = Math.exp(-c * e), d = (c - r) * e + 1;
    return -ia + u * d;
  }, i = (c) => {
    const u = Math.exp(-c * e), d = (r - c) * (e * e);
    return u * d;
  });
  const s = 5 / e, l = pw(o, i, s);
  if (e = Yt(e), isNaN(l))
    return {
      stiffness: 100,
      damping: 10,
      duration: e
    };
  {
    const c = Math.pow(l, 2) * n;
    return {
      stiffness: c,
      damping: a * 2 * Math.sqrt(n * c),
      duration: e
    };
  }
}
const hw = 12;
function pw(e, t, r) {
  let n = r;
  for (let o = 1; o < hw; o++)
    n = n - e(n) / t(n);
  return n;
}
function Ea(e, t) {
  return e * Math.sqrt(1 - t * t);
}
const mw = ["duration", "bounce"], gw = ["stiffness", "damping", "mass"];
function uc(e, t) {
  return t.some((r) => e[r] !== void 0);
}
function vw(e) {
  let t = {
    velocity: 0,
    stiffness: 100,
    damping: 10,
    mass: 1,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!uc(e, gw) && uc(e, mw)) {
    const r = fw(e);
    t = {
      ...t,
      ...r,
      velocity: 0,
      mass: 1
    }, t.isResolvedFromDuration = !0;
  }
  return t;
}
function Yd({ keyframes: e, restDelta: t, restSpeed: r, ...n }) {
  const o = e[0], i = e[e.length - 1], a = { done: !1, value: o }, { stiffness: s, damping: l, mass: c, velocity: u, duration: d, isResolvedFromDuration: h } = vw(n), m = u ? -Dt(u) : 0, b = l / (2 * Math.sqrt(s * c)), S = i - o, T = Dt(Math.sqrt(s / c)), _ = Math.abs(S) < 5;
  r || (r = _ ? 0.01 : 2), t || (t = _ ? 5e-3 : 0.5);
  let x;
  if (b < 1) {
    const k = Ea(T, b);
    x = (P) => {
      const w = Math.exp(-b * T * P);
      return i - w * ((m + b * T * S) / k * Math.sin(k * P) + S * Math.cos(k * P));
    };
  } else if (b === 1)
    x = (k) => i - Math.exp(-T * k) * (S + (m + T * S) * k);
  else {
    const k = T * Math.sqrt(b * b - 1);
    x = (P) => {
      const w = Math.exp(-b * T * P), F = Math.min(k * P, 300);
      return i - w * ((m + b * T * S) * Math.sinh(F) + k * S * Math.cosh(F)) / k;
    };
  }
  return {
    calculatedDuration: h && d || null,
    next: (k) => {
      const P = x(k);
      if (h)
        a.done = k >= d;
      else {
        let w = m;
        k !== 0 && (b < 1 ? w = Hd(x, k, P) : w = 0);
        const F = Math.abs(w) <= r, R = Math.abs(i - P) <= t;
        a.done = F && R;
      }
      return a.value = a.done ? i : P, a;
    }
  };
}
function dc({ keyframes: e, velocity: t = 0, power: r = 0.8, timeConstant: n = 325, bounceDamping: o = 10, bounceStiffness: i = 500, modifyTarget: a, min: s, max: l, restDelta: c = 0.5, restSpeed: u }) {
  const d = e[0], h = {
    done: !1,
    value: d
  }, m = (O) => s !== void 0 && O < s || l !== void 0 && O > l, b = (O) => s === void 0 ? l : l === void 0 || Math.abs(s - O) < Math.abs(l - O) ? s : l;
  let S = r * t;
  const T = d + S, _ = a === void 0 ? T : a(T);
  _ !== T && (S = _ - d);
  const x = (O) => -S * Math.exp(-O / n), k = (O) => _ + x(O), P = (O) => {
    const L = x(O), ge = k(O);
    h.done = Math.abs(L) <= c, h.value = h.done ? _ : ge;
  };
  let w, F;
  const R = (O) => {
    m(h.value) && (w = O, F = Yd({
      keyframes: [h.value, b(h.value)],
      velocity: Hd(k, O, h.value),
      damping: o,
      stiffness: i,
      restDelta: c,
      restSpeed: u
    }));
  };
  return R(0), {
    calculatedDuration: null,
    next: (O) => {
      let L = !1;
      return !F && w === void 0 && (L = !0, P(O), R(O)), w !== void 0 && O > w ? F.next(O - w) : (!L && P(O), h);
    }
  };
}
const bw = (e) => {
  const t = ({ timestamp: r }) => e(r);
  return {
    start: () => fe.update(t, !0),
    stop: () => zt(t),
    /**
     * If we're processing this frame we can use the
     * framelocked timestamp to keep things in sync.
     */
    now: () => ue.isProcessing ? ue.timestamp : performance.now()
  };
}, fc = 2e4;
function hc(e) {
  let t = 0;
  const r = 50;
  let n = e.next(t);
  for (; !n.done && t < fc; )
    t += r, n = e.next(t);
  return t >= fc ? 1 / 0 : t;
}
const yw = {
  decay: dc,
  inertia: dc,
  tween: Wo,
  keyframes: Wo,
  spring: Yd
};
function Uo({ autoplay: e = !0, delay: t = 0, driver: r = bw, keyframes: n, type: o = "keyframes", repeat: i = 0, repeatDelay: a = 0, repeatType: s = "loop", onPlay: l, onStop: c, onComplete: u, onUpdate: d, ...h }) {
  let m = 1, b = !1, S, T;
  const _ = () => {
    S && S(), T = new Promise((J) => {
      S = J;
    });
  };
  _();
  let x;
  const k = yw[o] || Wo;
  let P;
  k !== Wo && typeof n[0] != "number" && (P = Wd([0, 100], n, {
    clamp: !1
  }), n = [0, 100]);
  const w = k({ ...h, keyframes: n });
  let F;
  s === "mirror" && (F = k({
    ...h,
    keyframes: [...n].reverse(),
    velocity: -(h.velocity || 0)
  }));
  let R = "idle", O = null, L = null, ge = null;
  w.calculatedDuration === null && i && (w.calculatedDuration = hc(w));
  const { calculatedDuration: Pe } = w;
  let Ee = 1 / 0, he = 1 / 0;
  Pe !== null && (Ee = Pe + a, he = Ee * (i + 1) - a);
  let Z = 0;
  const re = (J) => {
    if (L === null)
      return;
    m > 0 && (L = Math.min(L, J)), m < 0 && (L = Math.min(J - he / m, L)), O !== null ? Z = O : Z = Math.round(J - L) * m;
    const He = Z - t * (m >= 0 ? 1 : -1), U = m >= 0 ? He < 0 : He > he;
    Z = Math.max(He, 0), R === "finished" && O === null && (Z = he);
    let St = Z, Mt = w;
    if (i) {
      const Ye = Z / Ee;
      let Ae = Math.floor(Ye), ze = Ye % 1;
      !ze && Ye >= 1 && (ze = 1), ze === 1 && Ae--, Ae = Math.min(Ae, i + 1);
      const A = !!(Ae % 2);
      A && (s === "reverse" ? (ze = 1 - ze, a && (ze -= a / Ee)) : s === "mirror" && (Mt = F));
      let st = Kt(0, 1, ze);
      Z > he && (st = s === "reverse" && A ? 1 : 0), St = st * Ee;
    }
    const we = U ? { done: !1, value: n[0] } : Mt.next(St);
    P && (we.value = P(we.value));
    let { done: Je } = we;
    !U && Pe !== null && (Je = m >= 0 ? Z >= he : Z <= 0);
    const Ve = O === null && (R === "finished" || R === "running" && Je);
    return d && d(we.value), Ve && bt(), we;
  }, $e = () => {
    x && x.stop(), x = void 0;
  }, Ie = () => {
    R = "idle", $e(), _(), L = ge = null;
  }, bt = () => {
    R = "finished", u && u(), $e(), _();
  }, yt = () => {
    if (b)
      return;
    x || (x = r(re));
    const J = x.now();
    l && l(), O !== null ? L = J - O : (!L || R === "finished") && (L = J), ge = L, O = null, R = "running", x.start();
  };
  e && yt();
  const at = {
    then(J, He) {
      return T.then(J, He);
    },
    get time() {
      return Dt(Z);
    },
    set time(J) {
      J = Yt(J), Z = J, O !== null || !x || m === 0 ? O = J : L = x.now() - J / m;
    },
    get duration() {
      const J = w.calculatedDuration === null ? hc(w) : w.calculatedDuration;
      return Dt(J);
    },
    get speed() {
      return m;
    },
    set speed(J) {
      J === m || !x || (m = J, at.time = Dt(Z));
    },
    get state() {
      return R;
    },
    play: yt,
    pause: () => {
      R = "paused", O = Z;
    },
    stop: () => {
      b = !0, R !== "idle" && (R = "idle", c && c(), Ie());
    },
    cancel: () => {
      ge !== null && re(ge), Ie();
    },
    complete: () => {
      R = "finished";
    },
    sample: (J) => (L = 0, re(J))
  };
  return at;
}
const Sw = /* @__PURE__ */ new Set([
  "opacity",
  "clipPath",
  "filter",
  "transform",
  "backgroundColor"
]), uo = 10, xw = 2e4, ww = (e, t) => t.type === "spring" || e === "backgroundColor" || !wd(t.ease);
function _w(e, t, { onUpdate: r, onComplete: n, ...o }) {
  if (!(Td.waapi() && Sw.has(t) && !o.repeatDelay && o.repeatType !== "mirror" && o.damping !== 0 && o.type !== "inertia"))
    return !1;
  let a = !1, s, l;
  const c = () => {
    l = new Promise((_) => {
      s = _;
    });
  };
  c();
  let { keyframes: u, duration: d = 300, ease: h, times: m } = o;
  if (ww(t, o)) {
    const _ = Uo({
      ...o,
      repeat: 0,
      delay: 0
    });
    let x = { done: !1, value: u[0] };
    const k = [];
    let P = 0;
    for (; !x.done && P < xw; )
      x = _.sample(P), k.push(x.value), P += uo;
    m = void 0, u = k, d = P - uo, h = "linear";
  }
  const b = O1(e.owner.current, t, u, {
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
    ease: h,
    times: m
  }), S = () => b.cancel(), T = () => {
    fe.update(S), s(), c();
  };
  return b.onfinish = () => {
    e.set(F1(u, o)), n && n(), T();
  }, {
    then(_, x) {
      return l.then(_, x);
    },
    get time() {
      return Dt(b.currentTime || 0);
    },
    set time(_) {
      b.currentTime = Yt(_);
    },
    get speed() {
      return b.playbackRate;
    },
    set speed(_) {
      b.playbackRate = _;
    },
    get duration() {
      return Dt(d);
    },
    play: () => {
      a || (b.play(), zt(S));
    },
    pause: () => b.pause(),
    stop: () => {
      if (a = !0, b.playState === "idle")
        return;
      const { currentTime: _ } = b;
      if (_) {
        const x = Uo({
          ...o,
          autoplay: !1
        });
        e.setWithVelocity(x.sample(_ - uo).value, x.sample(_).value, uo);
      }
      T();
    },
    complete: () => b.finish(),
    cancel: T
  };
}
function kw({ keyframes: e, delay: t, onUpdate: r, onComplete: n }) {
  const o = () => (r && r(e[e.length - 1]), n && n(), {
    time: 0,
    speed: 1,
    duration: 0,
    play: ye,
    pause: ye,
    stop: ye,
    then: (i) => (i(), Promise.resolve()),
    cancel: ye,
    complete: ye
  });
  return t ? Uo({
    keyframes: [0, 1],
    duration: 0,
    delay: t,
    onComplete: o
  }) : o();
}
const Tw = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}, Cw = (e) => ({
  type: "spring",
  stiffness: 550,
  damping: e === 0 ? 2 * Math.sqrt(550) : 30,
  restSpeed: 10
}), Pw = {
  type: "keyframes",
  duration: 0.8
}, Ew = {
  type: "keyframes",
  ease: [0.25, 0.1, 0.35, 1],
  duration: 0.3
}, $w = (e, { keyframes: t }) => t.length > 2 ? Pw : fr.has(e) ? e.startsWith("scale") ? Cw(t[1]) : Tw : Ew, $a = (e, t) => e === "zIndex" ? !1 : !!(typeof t == "number" || Array.isArray(t) || typeof t == "string" && // It's animatable if we have a string
(Xt.test(t) || t === "0") && // And it contains numbers and/or colors
!t.startsWith("url(")), Aw = /* @__PURE__ */ new Set(["brightness", "contrast", "saturate", "opacity"]);
function Rw(e) {
  const [t, r] = e.slice(0, -1).split("(");
  if (t === "drop-shadow")
    return e;
  const [n] = r.match(ci) || [];
  if (!n)
    return e;
  const o = r.replace(n, "");
  let i = Aw.has(t) ? 1 : 0;
  return n !== r && (i *= 100), t + "(" + i + o + ")";
}
const Dw = /([a-z-]*)\(.*?\)/g, Aa = {
  ...Xt,
  getAnimatableNone: (e) => {
    const t = e.match(Dw);
    return t ? t.map(Rw).join(" ") : e;
  }
}, Vw = {
  ...id,
  // Color props
  color: Re,
  backgroundColor: Re,
  outlineColor: Re,
  fill: Re,
  stroke: Re,
  // Border props
  borderColor: Re,
  borderTopColor: Re,
  borderRightColor: Re,
  borderBottomColor: Re,
  borderLeftColor: Re,
  filter: Aa,
  WebkitFilter: Aa
}, vs = (e) => Vw[e];
function Gd(e, t) {
  let r = vs(e);
  return r !== Aa && (r = Xt), r.getAnimatableNone ? r.getAnimatableNone(t) : void 0;
}
const qd = (e) => /^0[^.\s]+$/.test(e);
function zw(e) {
  if (typeof e == "number")
    return e === 0;
  if (e !== null)
    return e === "none" || e === "0" || qd(e);
}
function Mw(e, t, r, n) {
  const o = $a(t, r);
  let i;
  Array.isArray(r) ? i = [...r] : i = [null, r];
  const a = n.from !== void 0 ? n.from : e.get();
  let s;
  const l = [];
  for (let c = 0; c < i.length; c++)
    i[c] === null && (i[c] = c === 0 ? a : i[c - 1]), zw(i[c]) && l.push(c), typeof i[c] == "string" && i[c] !== "none" && i[c] !== "0" && (s = i[c]);
  if (o && l.length && s)
    for (let c = 0; c < l.length; c++) {
      const u = l[c];
      i[u] = Gd(t, s);
    }
  return i;
}
function Ow({ when: e, delay: t, delayChildren: r, staggerChildren: n, staggerDirection: o, repeat: i, repeatType: a, repeatDelay: s, from: l, elapsed: c, ...u }) {
  return !!Object.keys(u).length;
}
function Kd(e, t) {
  return e[t] || e.default || e;
}
const bs = (e, t, r, n = {}) => (o) => {
  const i = Kd(n, e) || {}, a = i.delay || n.delay || 0;
  let { elapsed: s = 0 } = n;
  s = s - Yt(a);
  const l = Mw(t, e, r, i), c = l[0], u = l[l.length - 1], d = $a(e, c), h = $a(e, u);
  Fn(d === h, `You are trying to animate ${e} from "${c}" to "${u}". ${c} is not an animatable value - to enable this animation set ${c} to a value animatable to ${u} via the \`style\` property.`);
  let m = {
    keyframes: l,
    velocity: t.getVelocity(),
    ease: "easeOut",
    ...i,
    delay: -s,
    onUpdate: (b) => {
      t.set(b), i.onUpdate && i.onUpdate(b);
    },
    onComplete: () => {
      o(), i.onComplete && i.onComplete();
    }
  };
  if (Ow(i) || (m = {
    ...m,
    ...$w(e, m)
  }), m.duration && (m.duration = Yt(m.duration)), m.repeatDelay && (m.repeatDelay = Yt(m.repeatDelay)), !d || !h || M1.current || i.type === !1)
    return kw(m);
  if (t.owner && t.owner.current instanceof HTMLElement && !t.owner.getProps().onUpdate) {
    const b = _w(t, e, m);
    if (b)
      return b;
  }
  return Uo(m);
};
function Ho(e) {
  return !!(je(e) && e.add);
}
const Fw = (e) => /^\-?\d*\.?\d+$/.test(e);
function ys(e, t) {
  e.indexOf(t) === -1 && e.push(t);
}
function Ss(e, t) {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}
class xs {
  constructor() {
    this.subscriptions = [];
  }
  add(t) {
    return ys(this.subscriptions, t), () => Ss(this.subscriptions, t);
  }
  notify(t, r, n) {
    const o = this.subscriptions.length;
    if (o)
      if (o === 1)
        this.subscriptions[0](t, r, n);
      else
        for (let i = 0; i < o; i++) {
          const a = this.subscriptions[i];
          a && a(t, r, n);
        }
  }
  getSize() {
    return this.subscriptions.length;
  }
  clear() {
    this.subscriptions.length = 0;
  }
}
const pc = /* @__PURE__ */ new Set();
function ws(e, t, r) {
  e || pc.has(t) || (console.warn(t), r && console.warn(r), pc.add(t));
}
const Bw = (e) => !isNaN(parseFloat(e));
class jw {
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
      const { delta: i, timestamp: a } = ue;
      this.lastUpdated !== a && (this.timeDelta = i, this.lastUpdated = a, fe.postRender(this.scheduleVelocityCheck)), this.prev !== this.current && this.events.change && this.events.change.notify(this.current), this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()), o && this.events.renderRequest && this.events.renderRequest.notify(this.current);
    }, this.scheduleVelocityCheck = () => fe.postRender(this.velocityCheck), this.velocityCheck = ({ timestamp: n }) => {
      n !== this.lastUpdated && (this.prev = this.current, this.events.velocityChange && this.events.velocityChange.notify(this.getVelocity()));
    }, this.hasAnimated = !1, this.prev = this.current = t, this.canTrackVelocity = Bw(this.current), this.owner = r.owner;
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
    return process.env.NODE_ENV !== "production" && ws(!1, 'value.onChange(callback) is deprecated. Switch to value.on("change", callback).'), this.on("change", t);
  }
  on(t, r) {
    this.events[t] || (this.events[t] = new xs());
    const n = this.events[t].add(r);
    return t === "change" ? () => {
      n(), fe.read(() => {
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
      Ud(parseFloat(this.current) - parseFloat(this.prev), this.timeDelta)
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
function Ir(e, t) {
  return new jw(e, t);
}
const Xd = (e) => (t) => t.test(e), Iw = {
  test: (e) => e === "auto",
  parse: (e) => e
}, Zd = [hr, V, gt, Nt, Gx, Yx, Iw], tn = (e) => Zd.find(Xd(e)), Lw = [...Zd, Re, Xt], Nw = (e) => Lw.find(Xd(e));
function Ww(e, t, r) {
  e.hasValue(t) ? e.getValue(t).set(r) : e.addValue(t, Ir(r));
}
function Uw(e, t) {
  const r = fi(e, t);
  let { transitionEnd: n = {}, transition: o = {}, ...i } = r ? e.makeTargetAnimatable(r, !1) : {};
  i = { ...i, ...n };
  for (const a in i) {
    const s = l1(i[a]);
    Ww(e, a, s);
  }
}
function Hw(e, t, r) {
  var n, o;
  const i = Object.keys(t).filter((s) => !e.hasValue(s)), a = i.length;
  if (a)
    for (let s = 0; s < a; s++) {
      const l = i[s], c = t[l];
      let u = null;
      Array.isArray(c) && (u = c[0]), u === null && (u = (o = (n = r[l]) !== null && n !== void 0 ? n : e.readValue(l)) !== null && o !== void 0 ? o : t[l]), u != null && (typeof u == "string" && (Fw(u) || qd(u)) ? u = parseFloat(u) : !Nw(u) && Xt.test(c) && (u = Gd(l, c)), e.addValue(l, Ir(u, { owner: e })), r[l] === void 0 && (r[l] = u), u !== null && e.setBaseTarget(l, u));
    }
}
function Yw(e, t) {
  return t ? (t[e] || t.default || t).from : void 0;
}
function Gw(e, t, r) {
  const n = {};
  for (const o in e) {
    const i = Yw(o, t);
    if (i !== void 0)
      n[o] = i;
    else {
      const a = r.getValue(o);
      a && (n[o] = a.get());
    }
  }
  return n;
}
function qw({ protectedKeys: e, needsAnimating: t }, r) {
  const n = e.hasOwnProperty(r) && t[r] !== !0;
  return t[r] = !1, n;
}
function Jd(e, t, { delay: r = 0, transitionOverride: n, type: o } = {}) {
  let { transition: i = e.getDefaultTransition(), transitionEnd: a, ...s } = e.makeTargetAnimatable(t);
  const l = e.getValue("willChange");
  n && (i = n);
  const c = [], u = o && e.animationState && e.animationState.getState()[o];
  for (const d in s) {
    const h = e.getValue(d), m = s[d];
    if (!h || m === void 0 || u && qw(u, d))
      continue;
    const b = { delay: r, elapsed: 0, ...i };
    if (window.HandoffAppearAnimations && !h.hasAnimated) {
      const T = e.getProps()[z1];
      T && (b.elapsed = window.HandoffAppearAnimations(T, d, h, fe));
    }
    h.start(bs(d, h, m, e.shouldReduceMotion && fr.has(d) ? { type: !1 } : b));
    const S = h.animation;
    Ho(l) && (l.add(d), S.then(() => l.remove(d))), c.push(S);
  }
  return a && Promise.all(c).then(() => {
    a && Uw(e, a);
  }), c;
}
function Ra(e, t, r = {}) {
  const n = fi(e, t, r.custom);
  let { transition: o = e.getDefaultTransition() || {} } = n || {};
  r.transitionOverride && (o = r.transitionOverride);
  const i = n ? () => Promise.all(Jd(e, n, r)) : () => Promise.resolve(), a = e.variantChildren && e.variantChildren.size ? (l = 0) => {
    const { delayChildren: c = 0, staggerChildren: u, staggerDirection: d } = o;
    return Kw(e, t, c + l, u, d, r);
  } : () => Promise.resolve(), { when: s } = o;
  if (s) {
    const [l, c] = s === "beforeChildren" ? [i, a] : [a, i];
    return l().then(() => c());
  } else
    return Promise.all([i(), a(r.delay)]);
}
function Kw(e, t, r = 0, n = 0, o = 1, i) {
  const a = [], s = (e.variantChildren.size - 1) * n, l = o === 1 ? (c = 0) => c * n : (c = 0) => s - c * n;
  return Array.from(e.variantChildren).sort(Xw).forEach((c, u) => {
    c.notify("AnimationStart", t), a.push(Ra(c, t, {
      ...i,
      delay: r + l(u)
    }).then(() => c.notify("AnimationComplete", t)));
  }), Promise.all(a);
}
function Xw(e, t) {
  return e.sortNodePosition(t);
}
function Zw(e, t, r = {}) {
  e.notify("AnimationStart", t);
  let n;
  if (Array.isArray(t)) {
    const o = t.map((i) => Ra(e, i, r));
    n = Promise.all(o);
  } else if (typeof t == "string")
    n = Ra(e, t, r);
  else {
    const o = typeof t == "function" ? fi(e, t, r.custom) : t;
    n = Promise.all(Jd(e, o, r));
  }
  return n.then(() => e.notify("AnimationComplete", t));
}
const Jw = [...os].reverse(), Qw = os.length;
function e_(e) {
  return (t) => Promise.all(t.map(({ animation: r, options: n }) => Zw(e, r, n)));
}
function t_(e) {
  let t = e_(e);
  const r = n_();
  let n = !0;
  const o = (l, c) => {
    const u = fi(e, c);
    if (u) {
      const { transition: d, transitionEnd: h, ...m } = u;
      l = { ...l, ...m, ...h };
    }
    return l;
  };
  function i(l) {
    t = l(e);
  }
  function a(l, c) {
    const u = e.getProps(), d = e.getVariantContext(!0) || {}, h = [], m = /* @__PURE__ */ new Set();
    let b = {}, S = 1 / 0;
    for (let _ = 0; _ < Qw; _++) {
      const x = Jw[_], k = r[x], P = u[x] !== void 0 ? u[x] : d[x], w = En(P), F = x === c ? k.isActive : null;
      F === !1 && (S = _);
      let R = P === d[x] && P !== u[x] && w;
      if (R && n && e.manuallyAnimateOnMount && (R = !1), k.protectedKeys = { ...b }, // If it isn't active and hasn't *just* been set as inactive
      !k.isActive && F === null || // If we didn't and don't have any defined prop for this animation type
      !P && !k.prevProp || // Or if the prop doesn't define an animation
      si(P) || typeof P == "boolean")
        continue;
      const O = r_(k.prevProp, P);
      let L = O || // If we're making this variant active, we want to always make it active
      x === c && k.isActive && !R && w || // If we removed a higher-priority variant (i is in reverse order)
      _ > S && w;
      const ge = Array.isArray(P) ? P : [P];
      let Pe = ge.reduce(o, {});
      F === !1 && (Pe = {});
      const { prevResolvedValues: Ee = {} } = k, he = {
        ...Ee,
        ...Pe
      }, Z = (re) => {
        L = !0, m.delete(re), k.needsAnimating[re] = !0;
      };
      for (const re in he) {
        const $e = Pe[re], Ie = Ee[re];
        b.hasOwnProperty(re) || ($e !== Ie ? Lo($e) && Lo(Ie) ? !Sd($e, Ie) || O ? Z(re) : k.protectedKeys[re] = !0 : $e !== void 0 ? Z(re) : m.add(re) : $e !== void 0 && m.has(re) ? Z(re) : k.protectedKeys[re] = !0);
      }
      k.prevProp = P, k.prevResolvedValues = Pe, k.isActive && (b = { ...b, ...Pe }), n && e.blockInitialAnimation && (L = !1), L && !R && h.push(...ge.map((re) => ({
        animation: re,
        options: { type: x, ...l }
      })));
    }
    if (m.size) {
      const _ = {};
      m.forEach((x) => {
        const k = e.getBaseTarget(x);
        k !== void 0 && (_[x] = k);
      }), h.push({ animation: _ });
    }
    let T = !!h.length;
    return n && u.initial === !1 && !e.manuallyAnimateOnMount && (T = !1), n = !1, T ? t(h) : Promise.resolve();
  }
  function s(l, c, u) {
    var d;
    if (r[l].isActive === c)
      return Promise.resolve();
    (d = e.variantChildren) === null || d === void 0 || d.forEach((m) => {
      var b;
      return (b = m.animationState) === null || b === void 0 ? void 0 : b.setActive(l, c);
    }), r[l].isActive = c;
    const h = a(u, l);
    for (const m in r)
      r[m].protectedKeys = {};
    return h;
  }
  return {
    animateChanges: a,
    setActive: s,
    setAnimateFunction: i,
    getState: () => r
  };
}
function r_(e, t) {
  return typeof t == "string" ? t !== e : Array.isArray(t) ? !Sd(t, e) : !1;
}
function tr(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  };
}
function n_() {
  return {
    animate: tr(!0),
    whileInView: tr(),
    whileHover: tr(),
    whileTap: tr(),
    whileDrag: tr(),
    whileFocus: tr(),
    exit: tr()
  };
}
class o_ extends Jt {
  /**
   * We dynamically generate the AnimationState manager as it contains a reference
   * to the underlying animation library. We only want to load that if we load this,
   * so people can optionally code split it out using the `m` component.
   */
  constructor(t) {
    super(t), t.animationState || (t.animationState = t_(t));
  }
  updateAnimationControlsSubscription() {
    const { animate: t } = this.node.getProps();
    this.unmount(), si(t) && (this.unmount = t.subscribe(this.node));
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
let i_ = 0;
class a_ extends Jt {
  constructor() {
    super(...arguments), this.id = i_++;
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: t, onExitComplete: r, custom: n } = this.node.presenceContext, { isPresent: o } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || t === o)
      return;
    const i = this.node.animationState.setActive("exit", !t, { custom: n ?? this.node.getProps().custom });
    r && !t && i.then(() => r(this.id));
  }
  mount() {
    const { register: t } = this.node.presenceContext || {};
    t && (this.unmount = t(this.id));
  }
  unmount() {
  }
}
const s_ = {
  animation: {
    Feature: o_
  },
  exit: {
    Feature: a_
  }
}, mc = (e, t) => Math.abs(e - t);
function l_(e, t) {
  const r = mc(e.x, t.x), n = mc(e.y, t.y);
  return Math.sqrt(r ** 2 + n ** 2);
}
class Qd {
  constructor(t, r, { transformPagePoint: n } = {}) {
    if (this.startEvent = null, this.lastMoveEvent = null, this.lastMoveEventInfo = null, this.handlers = {}, this.updatePoint = () => {
      if (!(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const c = sa(this.lastMoveEventInfo, this.history), u = this.startEvent !== null, d = l_(c.offset, { x: 0, y: 0 }) >= 3;
      if (!u && !d)
        return;
      const { point: h } = c, { timestamp: m } = ue;
      this.history.push({ ...h, timestamp: m });
      const { onStart: b, onMove: S } = this.handlers;
      u || (b && b(this.lastMoveEvent, c), this.startEvent = this.lastMoveEvent), S && S(this.lastMoveEvent, c);
    }, this.handlePointerMove = (c, u) => {
      this.lastMoveEvent = c, this.lastMoveEventInfo = aa(u, this.transformPagePoint), fe.update(this.updatePoint, !0);
    }, this.handlePointerUp = (c, u) => {
      if (this.end(), !(this.lastMoveEvent && this.lastMoveEventInfo))
        return;
      const { onEnd: d, onSessionEnd: h } = this.handlers, m = sa(c.type === "pointercancel" ? this.lastMoveEventInfo : aa(u, this.transformPagePoint), this.history);
      this.startEvent && d && d(c, m), h && h(c, m);
    }, !pd(t))
      return;
    this.handlers = r, this.transformPagePoint = n;
    const o = ui(t), i = aa(o, this.transformPagePoint), { point: a } = i, { timestamp: s } = ue;
    this.history = [{ ...a, timestamp: s }];
    const { onSessionStart: l } = r;
    l && l(t, sa(i, this.history)), this.removeListeners = Ht(Rt(window, "pointermove", this.handlePointerMove), Rt(window, "pointerup", this.handlePointerUp), Rt(window, "pointercancel", this.handlePointerUp));
  }
  updateHandlers(t) {
    this.handlers = t;
  }
  end() {
    this.removeListeners && this.removeListeners(), zt(this.updatePoint);
  }
}
function aa(e, t) {
  return t ? { point: t(e.point) } : e;
}
function gc(e, t) {
  return { x: e.x - t.x, y: e.y - t.y };
}
function sa({ point: e }, t) {
  return {
    point: e,
    delta: gc(e, ef(t)),
    offset: gc(e, c_(t)),
    velocity: u_(t, 0.1)
  };
}
function c_(e) {
  return e[0];
}
function ef(e) {
  return e[e.length - 1];
}
function u_(e, t) {
  if (e.length < 2)
    return { x: 0, y: 0 };
  let r = e.length - 1, n = null;
  const o = ef(e);
  for (; r >= 0 && (n = e[r], !(o.timestamp - n.timestamp > Yt(t))); )
    r--;
  if (!n)
    return { x: 0, y: 0 };
  const i = Dt(o.timestamp - n.timestamp);
  if (i === 0)
    return { x: 0, y: 0 };
  const a = {
    x: (o.x - n.x) / i,
    y: (o.y - n.y) / i
  };
  return a.x === 1 / 0 && (a.x = 0), a.y === 1 / 0 && (a.y = 0), a;
}
function Ue(e) {
  return e.max - e.min;
}
function Da(e, t = 0, r = 0.01) {
  return Math.abs(e - t) <= r;
}
function vc(e, t, r, n = 0.5) {
  e.origin = n, e.originPoint = de(t.min, t.max, e.origin), e.scale = Ue(r) / Ue(t), (Da(e.scale, 1, 1e-4) || isNaN(e.scale)) && (e.scale = 1), e.translate = de(r.min, r.max, e.origin) - e.originPoint, (Da(e.translate) || isNaN(e.translate)) && (e.translate = 0);
}
function yn(e, t, r, n) {
  vc(e.x, t.x, r.x, n ? n.originX : void 0), vc(e.y, t.y, r.y, n ? n.originY : void 0);
}
function bc(e, t, r) {
  e.min = r.min + t.min, e.max = e.min + Ue(t);
}
function d_(e, t, r) {
  bc(e.x, t.x, r.x), bc(e.y, t.y, r.y);
}
function yc(e, t, r) {
  e.min = t.min - r.min, e.max = e.min + Ue(t);
}
function Sn(e, t, r) {
  yc(e.x, t.x, r.x), yc(e.y, t.y, r.y);
}
function f_(e, { min: t, max: r }, n) {
  return t !== void 0 && e < t ? e = n ? de(t, e, n.min) : Math.max(e, t) : r !== void 0 && e > r && (e = n ? de(r, e, n.max) : Math.min(e, r)), e;
}
function Sc(e, t, r) {
  return {
    min: t !== void 0 ? e.min + t : void 0,
    max: r !== void 0 ? e.max + r - (e.max - e.min) : void 0
  };
}
function h_(e, { top: t, left: r, bottom: n, right: o }) {
  return {
    x: Sc(e.x, r, o),
    y: Sc(e.y, t, n)
  };
}
function xc(e, t) {
  let r = t.min - e.min, n = t.max - e.max;
  return t.max - t.min < e.max - e.min && ([r, n] = [n, r]), { min: r, max: n };
}
function p_(e, t) {
  return {
    x: xc(e.x, t.x),
    y: xc(e.y, t.y)
  };
}
function m_(e, t) {
  let r = 0.5;
  const n = Ue(e), o = Ue(t);
  return o > n ? r = Rn(t.min, t.max - n, e.min) : n > o && (r = Rn(e.min, e.max - o, t.min)), Kt(0, 1, r);
}
function g_(e, t) {
  const r = {};
  return t.min !== void 0 && (r.min = t.min - e.min), t.max !== void 0 && (r.max = t.max - e.min), r;
}
const Va = 0.35;
function v_(e = Va) {
  return e === !1 ? e = 0 : e === !0 && (e = Va), {
    x: wc(e, "left", "right"),
    y: wc(e, "top", "bottom")
  };
}
function wc(e, t, r) {
  return {
    min: _c(e, t),
    max: _c(e, r)
  };
}
function _c(e, t) {
  return typeof e == "number" ? e : e[t] || 0;
}
const kc = () => ({
  translate: 0,
  scale: 1,
  origin: 0,
  originPoint: 0
}), Cr = () => ({
  x: kc(),
  y: kc()
}), Tc = () => ({ min: 0, max: 0 }), ve = () => ({
  x: Tc(),
  y: Tc()
});
function dt(e) {
  return [e("x"), e("y")];
}
function tf({ top: e, left: t, right: r, bottom: n }) {
  return {
    x: { min: t, max: r },
    y: { min: e, max: n }
  };
}
function b_({ x: e, y: t }) {
  return { top: t.min, right: e.max, bottom: t.max, left: e.min };
}
function y_(e, t) {
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
function la(e) {
  return e === void 0 || e === 1;
}
function za({ scale: e, scaleX: t, scaleY: r }) {
  return !la(e) || !la(t) || !la(r);
}
function rr(e) {
  return za(e) || rf(e) || e.z || e.rotate || e.rotateX || e.rotateY;
}
function rf(e) {
  return Cc(e.x) || Cc(e.y);
}
function Cc(e) {
  return e && e !== "0%";
}
function Yo(e, t, r) {
  const n = e - r, o = t * n;
  return r + o;
}
function Pc(e, t, r, n, o) {
  return o !== void 0 && (e = Yo(e, o, n)), Yo(e, r, n) + t;
}
function Ma(e, t = 0, r = 1, n, o) {
  e.min = Pc(e.min, t, r, n, o), e.max = Pc(e.max, t, r, n, o);
}
function nf(e, { x: t, y: r }) {
  Ma(e.x, t.translate, t.scale, t.originPoint), Ma(e.y, r.translate, r.scale, r.originPoint);
}
function S_(e, t, r, n = !1) {
  const o = r.length;
  if (!o)
    return;
  t.x = t.y = 1;
  let i, a;
  for (let s = 0; s < o; s++) {
    i = r[s], a = i.projectionDelta;
    const l = i.instance;
    l && l.style && l.style.display === "contents" || (n && i.options.layoutScroll && i.scroll && i !== i.root && Pr(e, {
      x: -i.scroll.offset.x,
      y: -i.scroll.offset.y
    }), a && (t.x *= a.x.scale, t.y *= a.y.scale, nf(e, a)), n && rr(i.latestValues) && Pr(e, i.latestValues));
  }
  t.x = Ec(t.x), t.y = Ec(t.y);
}
function Ec(e) {
  return Number.isInteger(e) || e > 1.0000000000001 || e < 0.999999999999 ? e : 1;
}
function Wt(e, t) {
  e.min = e.min + t, e.max = e.max + t;
}
function $c(e, t, [r, n, o]) {
  const i = t[o] !== void 0 ? t[o] : 0.5, a = de(e.min, e.max, i);
  Ma(e, t[r], t[n], a, t.scale);
}
const x_ = ["x", "scaleX", "originX"], w_ = ["y", "scaleY", "originY"];
function Pr(e, t) {
  $c(e.x, t, x_), $c(e.y, t, w_);
}
function of(e, t) {
  return tf(y_(e.getBoundingClientRect(), t));
}
function __(e, t, r) {
  const n = of(e, r), { scroll: o } = t;
  return o && (Wt(n.x, o.offset.x), Wt(n.y, o.offset.y)), n;
}
const k_ = /* @__PURE__ */ new WeakMap();
class T_ {
  constructor(t) {
    this.openGlobalLock = null, this.isDragging = !1, this.currentDirection = null, this.originPoint = { x: 0, y: 0 }, this.constraints = !1, this.hasMutatedConstraints = !1, this.elastic = ve(), this.visualElement = t;
  }
  start(t, { snapToCursor: r = !1 } = {}) {
    const { presenceContext: n } = this.visualElement;
    if (n && n.isPresent === !1)
      return;
    const o = (l) => {
      this.stopAnimation(), r && this.snapToCursor(ui(l, "page").point);
    }, i = (l, c) => {
      const { drag: u, dragPropagation: d, onDragStart: h } = this.getProps();
      if (u && !d && (this.openGlobalLock && this.openGlobalLock(), this.openGlobalLock = gd(u), !this.openGlobalLock))
        return;
      this.isDragging = !0, this.currentDirection = null, this.resolveConstraints(), this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0, this.visualElement.projection.target = void 0), dt((b) => {
        let S = this.getAxisMotionValue(b).get() || 0;
        if (gt.test(S)) {
          const { projection: T } = this.visualElement;
          if (T && T.layout) {
            const _ = T.layout.layoutBox[b];
            _ && (S = Ue(_) * (parseFloat(S) / 100));
          }
        }
        this.originPoint[b] = S;
      }), h && fe.update(() => h(l, c), !1, !0);
      const { animationState: m } = this.visualElement;
      m && m.setActive("whileDrag", !0);
    }, a = (l, c) => {
      const { dragPropagation: u, dragDirectionLock: d, onDirectionLock: h, onDrag: m } = this.getProps();
      if (!u && !this.openGlobalLock)
        return;
      const { offset: b } = c;
      if (d && this.currentDirection === null) {
        this.currentDirection = C_(b), this.currentDirection !== null && h && h(this.currentDirection);
        return;
      }
      this.updateAxis("x", c.point, b), this.updateAxis("y", c.point, b), this.visualElement.render(), m && m(l, c);
    }, s = (l, c) => this.stop(l, c);
    this.panSession = new Qd(t, {
      onSessionStart: o,
      onStart: i,
      onMove: a,
      onSessionEnd: s
    }, { transformPagePoint: this.visualElement.getTransformPagePoint() });
  }
  stop(t, r) {
    const n = this.isDragging;
    if (this.cancel(), !n)
      return;
    const { velocity: o } = r;
    this.startAnimation(o);
    const { onDragEnd: i } = this.getProps();
    i && fe.update(() => i(t, r));
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
    if (!n || !fo(t, o, this.currentDirection))
      return;
    const i = this.getAxisMotionValue(t);
    let a = this.originPoint[t] + n[t];
    this.constraints && this.constraints[t] && (a = f_(a, this.constraints[t], this.elastic[t])), i.set(a);
  }
  resolveConstraints() {
    const { dragConstraints: t, dragElastic: r } = this.getProps(), { layout: n } = this.visualElement.projection || {}, o = this.constraints;
    t && kr(t) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : t && n ? this.constraints = h_(n.layoutBox, t) : this.constraints = !1, this.elastic = v_(r), o !== this.constraints && n && this.constraints && !this.hasMutatedConstraints && dt((i) => {
      this.getAxisMotionValue(i) && (this.constraints[i] = g_(n.layoutBox[i], this.constraints[i]));
    });
  }
  resolveRefConstraints() {
    const { dragConstraints: t, onMeasureDragConstraints: r } = this.getProps();
    if (!t || !kr(t))
      return !1;
    const n = t.current;
    vt(n !== null, "If `dragConstraints` is set as a React ref, that ref must be passed to another component's `ref` prop.");
    const { projection: o } = this.visualElement;
    if (!o || !o.layout)
      return !1;
    const i = __(n, o.root, this.visualElement.getTransformPagePoint());
    let a = p_(o.layout.layoutBox, i);
    if (r) {
      const s = r(b_(a));
      this.hasMutatedConstraints = !!s, s && (a = tf(s));
    }
    return a;
  }
  startAnimation(t) {
    const { drag: r, dragMomentum: n, dragElastic: o, dragTransition: i, dragSnapToOrigin: a, onDragTransitionEnd: s } = this.getProps(), l = this.constraints || {}, c = dt((u) => {
      if (!fo(u, r, this.currentDirection))
        return;
      let d = l && l[u] || {};
      a && (d = { min: 0, max: 0 });
      const h = o ? 200 : 1e6, m = o ? 40 : 1e7, b = {
        type: "inertia",
        velocity: n ? t[u] : 0,
        bounceStiffness: h,
        bounceDamping: m,
        timeConstant: 750,
        restDelta: 1,
        restSpeed: 10,
        ...i,
        ...d
      };
      return this.startAxisValueAnimation(u, b);
    });
    return Promise.all(c).then(s);
  }
  startAxisValueAnimation(t, r) {
    const n = this.getAxisMotionValue(t);
    return n.start(bs(t, n, 0, r));
  }
  stopAnimation() {
    dt((t) => this.getAxisMotionValue(t).stop());
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
    dt((r) => {
      const { drag: n } = this.getProps();
      if (!fo(r, n, this.currentDirection))
        return;
      const { projection: o } = this.visualElement, i = this.getAxisMotionValue(r);
      if (o && o.layout) {
        const { min: a, max: s } = o.layout.layoutBox[r];
        i.set(t[r] - de(a, s, 0.5));
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
    if (!kr(r) || !n || !this.constraints)
      return;
    this.stopAnimation();
    const o = { x: 0, y: 0 };
    dt((a) => {
      const s = this.getAxisMotionValue(a);
      if (s) {
        const l = s.get();
        o[a] = m_({ min: l, max: l }, this.constraints[a]);
      }
    });
    const { transformTemplate: i } = this.visualElement.getProps();
    this.visualElement.current.style.transform = i ? i({}, "") : "none", n.root && n.root.updateScroll(), n.updateLayout(), this.resolveConstraints(), dt((a) => {
      if (!fo(a, t, null))
        return;
      const s = this.getAxisMotionValue(a), { min: l, max: c } = this.constraints[a];
      s.set(de(l, c, o[a]));
    });
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    k_.set(this.visualElement, this);
    const t = this.visualElement.current, r = Rt(t, "pointerdown", (l) => {
      const { drag: c, dragListener: u = !0 } = this.getProps();
      c && u && this.start(l);
    }), n = () => {
      const { dragConstraints: l } = this.getProps();
      kr(l) && (this.constraints = this.resolveRefConstraints());
    }, { projection: o } = this.visualElement, i = o.addEventListener("measure", n);
    o && !o.layout && (o.root && o.root.updateScroll(), o.updateLayout()), n();
    const a = $t(window, "resize", () => this.scalePositionWithinConstraints()), s = o.addEventListener("didUpdate", ({ delta: l, hasLayoutChanged: c }) => {
      this.isDragging && c && (dt((u) => {
        const d = this.getAxisMotionValue(u);
        d && (this.originPoint[u] += l[u].translate, d.set(d.get() + l[u].translate));
      }), this.visualElement.render());
    });
    return () => {
      a(), r(), i(), s && s();
    };
  }
  getProps() {
    const t = this.visualElement.getProps(), { drag: r = !1, dragDirectionLock: n = !1, dragPropagation: o = !1, dragConstraints: i = !1, dragElastic: a = Va, dragMomentum: s = !0 } = t;
    return {
      ...t,
      drag: r,
      dragDirectionLock: n,
      dragPropagation: o,
      dragConstraints: i,
      dragElastic: a,
      dragMomentum: s
    };
  }
}
function fo(e, t, r) {
  return (t === !0 || t === e) && (r === null || r === e);
}
function C_(e, t = 10) {
  let r = null;
  return Math.abs(e.y) > t ? r = "y" : Math.abs(e.x) > t && (r = "x"), r;
}
class P_ extends Jt {
  constructor(t) {
    super(t), this.removeGroupControls = ye, this.removeListeners = ye, this.controls = new T_(t);
  }
  mount() {
    const { dragControls: t } = this.node.getProps();
    t && (this.removeGroupControls = t.subscribe(this.controls)), this.removeListeners = this.controls.addListeners() || ye;
  }
  unmount() {
    this.removeGroupControls(), this.removeListeners();
  }
}
const Ac = (e) => (t, r) => {
  e && fe.update(() => e(t, r));
};
class E_ extends Jt {
  constructor() {
    super(...arguments), this.removePointerDownListener = ye;
  }
  onPointerDown(t) {
    this.session = new Qd(t, this.createPanHandlers(), { transformPagePoint: this.node.getTransformPagePoint() });
  }
  createPanHandlers() {
    const { onPanSessionStart: t, onPanStart: r, onPan: n, onPanEnd: o } = this.node.getProps();
    return {
      onSessionStart: Ac(t),
      onStart: Ac(r),
      onMove: n,
      onEnd: (i, a) => {
        delete this.session, o && fe.update(() => o(i, a));
      }
    };
  }
  mount() {
    this.removePointerDownListener = Rt(this.node.current, "pointerdown", (t) => this.onPointerDown(t));
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers());
  }
  unmount() {
    this.removePointerDownListener(), this.session && this.session.end();
  }
}
function $_() {
  const e = Se(ii);
  if (e === null)
    return [!0, null];
  const { isPresent: t, onExitComplete: r, register: n } = e, o = Xf();
  return Gt(() => n(o), []), !t && r ? [!1, () => r && r(o)] : [!0];
}
function fT() {
  return A_(Se(ii));
}
function A_(e) {
  return e === null ? !0 : e.isPresent;
}
const Eo = {
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
function Rc(e, t) {
  return t.max === t.min ? 0 : e / (t.max - t.min) * 100;
}
const rn = {
  correct: (e, t) => {
    if (!t.target)
      return e;
    if (typeof e == "string")
      if (V.test(e))
        e = parseFloat(e);
      else
        return e;
    const r = Rc(e, t.target.x), n = Rc(e, t.target.y);
    return `${r}% ${n}%`;
  }
}, R_ = {
  correct: (e, { treeScale: t, projectionDelta: r }) => {
    const n = e, o = Xt.parse(e);
    if (o.length > 5)
      return n;
    const i = Xt.createTransformer(e), a = typeof o[0] != "number" ? 1 : 0, s = r.x.scale * t.x, l = r.y.scale * t.y;
    o[0 + a] /= s, o[1 + a] /= l;
    const c = de(s, l, 0.5);
    return typeof o[2 + a] == "number" && (o[2 + a] /= c), typeof o[3 + a] == "number" && (o[3 + a] /= c), i(o);
  }
};
class D_ extends zr.Component {
  /**
   * This only mounts projection nodes for components that
   * need measuring, we might want to do it for all components
   * in order to incorporate transforms
   */
  componentDidMount() {
    const { visualElement: t, layoutGroup: r, switchLayoutGroup: n, layoutId: o } = this.props, { projection: i } = t;
    jx(V_), i && (r.group && r.group.add(i), n && n.register && o && n.register(i), i.root.didUpdate(), i.addEventListener("animationComplete", () => {
      this.safeToRemove();
    }), i.setOptions({
      ...i.options,
      onExitComplete: () => this.safeToRemove()
    })), Eo.hasEverUpdated = !0;
  }
  getSnapshotBeforeUpdate(t) {
    const { layoutDependency: r, visualElement: n, drag: o, isPresent: i } = this.props, a = n.projection;
    return a && (a.isPresent = i, o || t.layoutDependency !== r || r === void 0 ? a.willUpdate() : this.safeToRemove(), t.isPresent !== i && (i ? a.promote() : a.relegate() || fe.postRender(() => {
      const s = a.getStack();
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
function af(e) {
  const [t, r] = $_(), n = Se(Qu);
  return zr.createElement(D_, { ...e, layoutGroup: n, switchLayoutGroup: Se(ed), isPresent: t, safeToRemove: r });
}
const V_ = {
  borderRadius: {
    ...rn,
    applyTo: [
      "borderTopLeftRadius",
      "borderTopRightRadius",
      "borderBottomLeftRadius",
      "borderBottomRightRadius"
    ]
  },
  borderTopLeftRadius: rn,
  borderTopRightRadius: rn,
  borderBottomLeftRadius: rn,
  borderBottomRightRadius: rn,
  boxShadow: R_
}, sf = ["TopLeft", "TopRight", "BottomLeft", "BottomRight"], z_ = sf.length, Dc = (e) => typeof e == "string" ? parseFloat(e) : e, Vc = (e) => typeof e == "number" || V.test(e);
function M_(e, t, r, n, o, i) {
  o ? (e.opacity = de(
    0,
    // TODO Reinstate this if only child
    r.opacity !== void 0 ? r.opacity : 1,
    O_(n)
  ), e.opacityExit = de(t.opacity !== void 0 ? t.opacity : 1, 0, F_(n))) : i && (e.opacity = de(t.opacity !== void 0 ? t.opacity : 1, r.opacity !== void 0 ? r.opacity : 1, n));
  for (let a = 0; a < z_; a++) {
    const s = `border${sf[a]}Radius`;
    let l = zc(t, s), c = zc(r, s);
    if (l === void 0 && c === void 0)
      continue;
    l || (l = 0), c || (c = 0), l === 0 || c === 0 || Vc(l) === Vc(c) ? (e[s] = Math.max(de(Dc(l), Dc(c), n), 0), (gt.test(c) || gt.test(l)) && (e[s] += "%")) : e[s] = c;
  }
  (t.rotate || r.rotate) && (e.rotate = de(t.rotate || 0, r.rotate || 0, n));
}
function zc(e, t) {
  return e[t] !== void 0 ? e[t] : e.borderRadius;
}
const O_ = lf(0, 0.5, ps), F_ = lf(0.5, 0.95, ye);
function lf(e, t, r) {
  return (n) => n < e ? 0 : n > t ? 1 : r(Rn(e, t, n));
}
function Mc(e, t) {
  e.min = t.min, e.max = t.max;
}
function Ke(e, t) {
  Mc(e.x, t.x), Mc(e.y, t.y);
}
function Oc(e, t, r, n, o) {
  return e -= t, e = Yo(e, 1 / r, n), o !== void 0 && (e = Yo(e, 1 / o, n)), e;
}
function B_(e, t = 0, r = 1, n = 0.5, o, i = e, a = e) {
  if (gt.test(t) && (t = parseFloat(t), t = de(a.min, a.max, t / 100) - a.min), typeof t != "number")
    return;
  let s = de(i.min, i.max, n);
  e === i && (s -= t), e.min = Oc(e.min, t, r, s, o), e.max = Oc(e.max, t, r, s, o);
}
function Fc(e, t, [r, n, o], i, a) {
  B_(e, t[r], t[n], t[o], t.scale, i, a);
}
const j_ = ["x", "scaleX", "originX"], I_ = ["y", "scaleY", "originY"];
function Bc(e, t, r, n) {
  Fc(e.x, t, j_, r ? r.x : void 0, n ? n.x : void 0), Fc(e.y, t, I_, r ? r.y : void 0, n ? n.y : void 0);
}
function jc(e) {
  return e.translate === 0 && e.scale === 1;
}
function cf(e) {
  return jc(e.x) && jc(e.y);
}
function Oa(e, t) {
  return e.x.min === t.x.min && e.x.max === t.x.max && e.y.min === t.y.min && e.y.max === t.y.max;
}
function Ic(e) {
  return Ue(e.x) / Ue(e.y);
}
class L_ {
  constructor() {
    this.members = [];
  }
  add(t) {
    ys(this.members, t), t.scheduleRender();
  }
  remove(t) {
    if (Ss(this.members, t), t === this.prevLead && (this.prevLead = void 0), t === this.lead) {
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
      const i = this.members[o];
      if (i.isPresent !== !1) {
        n = i;
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
function Lc(e, t, r) {
  let n = "";
  const o = e.x.translate / t.x, i = e.y.translate / t.y;
  if ((o || i) && (n = `translate3d(${o}px, ${i}px, 0) `), (t.x !== 1 || t.y !== 1) && (n += `scale(${1 / t.x}, ${1 / t.y}) `), r) {
    const { rotate: l, rotateX: c, rotateY: u } = r;
    l && (n += `rotate(${l}deg) `), c && (n += `rotateX(${c}deg) `), u && (n += `rotateY(${u}deg) `);
  }
  const a = e.x.scale * t.x, s = e.y.scale * t.y;
  return (a !== 1 || s !== 1) && (n += `scale(${a}, ${s})`), n || "none";
}
const N_ = (e, t) => e.depth - t.depth;
class W_ {
  constructor() {
    this.children = [], this.isDirty = !1;
  }
  add(t) {
    ys(this.children, t), this.isDirty = !0;
  }
  remove(t) {
    Ss(this.children, t), this.isDirty = !0;
  }
  forEach(t) {
    this.isDirty && this.children.sort(N_), this.isDirty = !1, this.children.forEach(t);
  }
}
function U_(e, t) {
  const r = performance.now(), n = ({ timestamp: o }) => {
    const i = o - r;
    i >= t && (zt(n), e(i - t));
  };
  return fe.read(n, !0), () => zt(n);
}
function H_(e) {
  window.MotionDebug && window.MotionDebug.record(e);
}
function Y_(e) {
  return e instanceof SVGElement && e.tagName !== "svg";
}
function G_(e, t, r) {
  const n = je(e) ? e : Ir(e);
  return n.start(bs("", n, t, r)), n.animation;
}
const Nc = ["", "X", "Y", "Z"], Wc = 1e3;
let q_ = 0;
const nr = {
  type: "projectionFrame",
  totalNodes: 0,
  resolvedTargetDeltas: 0,
  recalculatedProjection: 0
};
function uf({ attachResizeListener: e, defaultParent: t, measureScroll: r, checkIsScrollRoot: n, resetTransform: o }) {
  return class {
    constructor(a = {}, s = t == null ? void 0 : t()) {
      this.id = q_++, this.animationId = 0, this.children = /* @__PURE__ */ new Set(), this.options = {}, this.isTreeAnimating = !1, this.isAnimationBlocked = !1, this.isLayoutDirty = !1, this.isProjectionDirty = !1, this.isSharedProjectionDirty = !1, this.isTransformDirty = !1, this.updateManuallyBlocked = !1, this.updateBlockedByResize = !1, this.isUpdating = !1, this.isSVG = !1, this.needsReset = !1, this.shouldResetTransform = !1, this.treeScale = { x: 1, y: 1 }, this.eventHandlers = /* @__PURE__ */ new Map(), this.hasTreeAnimated = !1, this.updateScheduled = !1, this.checkUpdateFailed = () => {
        this.isUpdating && (this.isUpdating = !1, this.clearAllSnapshots());
      }, this.updateProjection = () => {
        nr.totalNodes = nr.resolvedTargetDeltas = nr.recalculatedProjection = 0, this.nodes.forEach(Z_), this.nodes.forEach(rk), this.nodes.forEach(nk), this.nodes.forEach(J_), H_(nr);
      }, this.hasProjected = !1, this.isVisible = !0, this.animationProgress = 0, this.sharedNodes = /* @__PURE__ */ new Map(), this.latestValues = a, this.root = s ? s.root || s : this, this.path = s ? [...s.path, s] : [], this.parent = s, this.depth = s ? s.depth + 1 : 0;
      for (let l = 0; l < this.path.length; l++)
        this.path[l].shouldResetTransform = !0;
      this.root === this && (this.nodes = new W_());
    }
    addEventListener(a, s) {
      return this.eventHandlers.has(a) || this.eventHandlers.set(a, new xs()), this.eventHandlers.get(a).add(s);
    }
    notifyListeners(a, ...s) {
      const l = this.eventHandlers.get(a);
      l && l.notify(...s);
    }
    hasListeners(a) {
      return this.eventHandlers.has(a);
    }
    /**
     * Lifecycles
     */
    mount(a, s = this.root.hasTreeAnimated) {
      if (this.instance)
        return;
      this.isSVG = Y_(a), this.instance = a;
      const { layoutId: l, layout: c, visualElement: u } = this.options;
      if (u && !u.current && u.mount(a), this.root.nodes.add(this), this.parent && this.parent.children.add(this), s && (c || l) && (this.isLayoutDirty = !0), e) {
        let d;
        const h = () => this.root.updateBlockedByResize = !1;
        e(a, () => {
          this.root.updateBlockedByResize = !0, d && d(), d = U_(h, 250), Eo.hasAnimatedSinceResize && (Eo.hasAnimatedSinceResize = !1, this.nodes.forEach(Hc));
        });
      }
      l && this.root.registerSharedNode(l, this), this.options.animate !== !1 && u && (l || c) && this.addEventListener("didUpdate", ({ delta: d, hasLayoutChanged: h, hasRelativeTargetChanged: m, layout: b }) => {
        if (this.isTreeAnimationBlocked()) {
          this.target = void 0, this.relativeTarget = void 0;
          return;
        }
        const S = this.options.transition || u.getDefaultTransition() || lk, { onLayoutAnimationStart: T, onLayoutAnimationComplete: _ } = u.getProps(), x = !this.targetLayout || !Oa(this.targetLayout, b) || m, k = !h && m;
        if (this.options.layoutRoot || this.resumeFrom && this.resumeFrom.instance || k || h && (x || !this.currentAnimation)) {
          this.resumeFrom && (this.resumingFrom = this.resumeFrom, this.resumingFrom.resumingFrom = void 0), this.setAnimationOrigin(d, k);
          const P = {
            ...Kd(S, "layout"),
            onPlay: T,
            onComplete: _
          };
          (u.shouldReduceMotion || this.options.layoutRoot) && (P.delay = 0, P.type = !1), this.startAnimation(P);
        } else
          h || Hc(this), this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
        this.targetLayout = b;
      });
    }
    unmount() {
      this.options.layoutId && this.willUpdate(), this.root.nodes.remove(this);
      const a = this.getStack();
      a && a.remove(this), this.parent && this.parent.children.delete(this), this.instance = void 0, zt(this.updateProjection);
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
      this.isUpdateBlocked() || (this.isUpdating = !0, this.nodes && this.nodes.forEach(ok), this.animationId++);
    }
    getTransformTemplate() {
      const { visualElement: a } = this.options;
      return a && a.getProps().transformTemplate;
    }
    willUpdate(a = !0) {
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
      this.prevTransformTemplateValue = c ? c(this.latestValues, "") : void 0, this.updateSnapshot(), a && this.notifyListeners("willUpdate");
    }
    update() {
      if (this.updateScheduled = !1, this.isUpdateBlocked()) {
        this.unblockUpdate(), this.clearAllSnapshots(), this.nodes.forEach(Uc);
        return;
      }
      this.isUpdating || this.nodes.forEach(ek), this.isUpdating = !1, this.nodes.forEach(tk), this.nodes.forEach(K_), this.nodes.forEach(X_), this.clearAllSnapshots();
      const s = performance.now();
      ue.delta = Kt(0, 1e3 / 60, s - ue.timestamp), ue.timestamp = s, ue.isProcessing = !0, Vr.update.process(ue), Vr.preRender.process(ue), Vr.render.process(ue), ue.isProcessing = !1;
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0, queueMicrotask(() => this.update()));
    }
    clearAllSnapshots() {
      this.nodes.forEach(Q_), this.sharedNodes.forEach(ik);
    }
    scheduleUpdateProjection() {
      fe.preRender(this.updateProjection, !1, !0);
    }
    scheduleCheckAfterUnmount() {
      fe.postRender(() => {
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
      const a = this.layout;
      this.layout = this.measure(!1), this.layoutCorrected = ve(), this.isLayoutDirty = !1, this.projectionDelta = void 0, this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: s } = this.options;
      s && s.notify("LayoutMeasure", this.layout.layoutBox, a ? a.layoutBox : void 0);
    }
    updateScroll(a = "measure") {
      let s = !!(this.options.layoutScroll && this.instance);
      this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === a && (s = !1), s && (this.scroll = {
        animationId: this.root.animationId,
        phase: a,
        isRoot: n(this.instance),
        offset: r(this.instance)
      });
    }
    resetTransform() {
      if (!o)
        return;
      const a = this.isLayoutDirty || this.shouldResetTransform, s = this.projectionDelta && !cf(this.projectionDelta), l = this.getTransformTemplate(), c = l ? l(this.latestValues, "") : void 0, u = c !== this.prevTransformTemplateValue;
      a && (s || rr(this.latestValues) || u) && (o(this.instance, c), this.shouldResetTransform = !1, this.scheduleRender());
    }
    measure(a = !0) {
      const s = this.measurePageBox();
      let l = this.removeElementScroll(s);
      return a && (l = this.removeTransform(l)), ck(l), {
        animationId: this.root.animationId,
        measuredBox: s,
        layoutBox: l,
        latestValues: {},
        source: this.id
      };
    }
    measurePageBox() {
      const { visualElement: a } = this.options;
      if (!a)
        return ve();
      const s = a.measureViewportBox(), { scroll: l } = this.root;
      return l && (Wt(s.x, l.offset.x), Wt(s.y, l.offset.y)), s;
    }
    removeElementScroll(a) {
      const s = ve();
      Ke(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l], { scroll: u, options: d } = c;
        if (c !== this.root && u && d.layoutScroll) {
          if (u.isRoot) {
            Ke(s, a);
            const { scroll: h } = this.root;
            h && (Wt(s.x, -h.offset.x), Wt(s.y, -h.offset.y));
          }
          Wt(s.x, u.offset.x), Wt(s.y, u.offset.y);
        }
      }
      return s;
    }
    applyTransform(a, s = !1) {
      const l = ve();
      Ke(l, a);
      for (let c = 0; c < this.path.length; c++) {
        const u = this.path[c];
        !s && u.options.layoutScroll && u.scroll && u !== u.root && Pr(l, {
          x: -u.scroll.offset.x,
          y: -u.scroll.offset.y
        }), rr(u.latestValues) && Pr(l, u.latestValues);
      }
      return rr(this.latestValues) && Pr(l, this.latestValues), l;
    }
    removeTransform(a) {
      const s = ve();
      Ke(s, a);
      for (let l = 0; l < this.path.length; l++) {
        const c = this.path[l];
        if (!c.instance || !rr(c.latestValues))
          continue;
        za(c.latestValues) && c.updateSnapshot();
        const u = ve(), d = c.measurePageBox();
        Ke(u, d), Bc(s, c.latestValues, c.snapshot ? c.snapshot.layoutBox : void 0, u);
      }
      return rr(this.latestValues) && Bc(s, this.latestValues), s;
    }
    setTargetDelta(a) {
      this.targetDelta = a, this.root.scheduleUpdateProjection(), this.isProjectionDirty = !0;
    }
    setOptions(a) {
      this.options = {
        ...this.options,
        ...a,
        crossfade: a.crossfade !== void 0 ? a.crossfade : !0
      };
    }
    clearMeasurements() {
      this.scroll = void 0, this.layout = void 0, this.snapshot = void 0, this.prevTransformTemplateValue = void 0, this.targetDelta = void 0, this.target = void 0, this.isLayoutDirty = !1;
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== ue.timestamp && this.relativeParent.resolveTargetDelta(!0);
    }
    resolveTargetDelta(a = !1) {
      var s;
      const l = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = l.isProjectionDirty), this.isTransformDirty || (this.isTransformDirty = l.isTransformDirty), this.isSharedProjectionDirty || (this.isSharedProjectionDirty = l.isSharedProjectionDirty);
      const c = !!this.resumingFrom || this !== l;
      if (!(a || c && this.isSharedProjectionDirty || this.isProjectionDirty || !((s = this.parent) === null || s === void 0) && s.isProjectionDirty || this.attemptToResolveRelativeTarget))
        return;
      const { layout: d, layoutId: h } = this.options;
      if (!(!this.layout || !(d || h))) {
        if (this.resolvedRelativeTargetAt = ue.timestamp, !this.targetDelta && !this.relativeTarget) {
          const m = this.getClosestProjectingParent();
          m && m.layout && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Sn(this.relativeTargetOrigin, this.layout.layoutBox, m.layout.layoutBox), Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
        }
        if (!(!this.relativeTarget && !this.targetDelta)) {
          if (this.target || (this.target = ve(), this.targetWithTransforms = ve()), this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(), d_(this.target, this.relativeTarget, this.relativeParent.target)) : this.targetDelta ? (this.resumingFrom ? this.target = this.applyTransform(this.layout.layoutBox) : Ke(this.target, this.layout.layoutBox), nf(this.target, this.targetDelta)) : Ke(this.target, this.layout.layoutBox), this.attemptToResolveRelativeTarget) {
            this.attemptToResolveRelativeTarget = !1;
            const m = this.getClosestProjectingParent();
            m && !!m.resumingFrom == !!this.resumingFrom && !m.options.layoutScroll && m.target && this.animationProgress !== 1 ? (this.relativeParent = m, this.forceRelativeParentToResolveTarget(), this.relativeTarget = ve(), this.relativeTargetOrigin = ve(), Sn(this.relativeTargetOrigin, this.target, m.target), Ke(this.relativeTarget, this.relativeTargetOrigin)) : this.relativeParent = this.relativeTarget = void 0;
          }
          nr.resolvedTargetDeltas++;
        }
      }
    }
    getClosestProjectingParent() {
      if (!(!this.parent || za(this.parent.latestValues) || rf(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent();
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout);
    }
    calcProjection() {
      var a;
      const s = this.getLead(), l = !!this.resumingFrom || this !== s;
      let c = !0;
      if ((this.isProjectionDirty || !((a = this.parent) === null || a === void 0) && a.isProjectionDirty) && (c = !1), l && (this.isSharedProjectionDirty || this.isTransformDirty) && (c = !1), this.resolvedRelativeTargetAt === ue.timestamp && (c = !1), c)
        return;
      const { layout: u, layoutId: d } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation), this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0), !this.layout || !(u || d))
        return;
      Ke(this.layoutCorrected, this.layout.layoutBox);
      const h = this.treeScale.x, m = this.treeScale.y;
      S_(this.layoutCorrected, this.treeScale, this.path, l), s.layout && !s.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (s.target = s.layout.layoutBox);
      const { target: b } = s;
      if (!b) {
        this.projectionTransform && (this.projectionDelta = Cr(), this.projectionTransform = "none", this.scheduleRender());
        return;
      }
      this.projectionDelta || (this.projectionDelta = Cr(), this.projectionDeltaWithTransform = Cr());
      const S = this.projectionTransform;
      yn(this.projectionDelta, this.layoutCorrected, b, this.latestValues), this.projectionTransform = Lc(this.projectionDelta, this.treeScale), (this.projectionTransform !== S || this.treeScale.x !== h || this.treeScale.y !== m) && (this.hasProjected = !0, this.scheduleRender(), this.notifyListeners("projectionUpdate", b)), nr.recalculatedProjection++;
    }
    hide() {
      this.isVisible = !1;
    }
    show() {
      this.isVisible = !0;
    }
    scheduleRender(a = !0) {
      if (this.options.scheduleRender && this.options.scheduleRender(), a) {
        const s = this.getStack();
        s && s.scheduleRender();
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0);
    }
    setAnimationOrigin(a, s = !1) {
      const l = this.snapshot, c = l ? l.latestValues : {}, u = { ...this.latestValues }, d = Cr();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0), this.attemptToResolveRelativeTarget = !s;
      const h = ve(), m = l ? l.source : void 0, b = this.layout ? this.layout.source : void 0, S = m !== b, T = this.getStack(), _ = !T || T.members.length <= 1, x = !!(S && !_ && this.options.crossfade === !0 && !this.path.some(sk));
      this.animationProgress = 0;
      let k;
      this.mixTargetDelta = (P) => {
        const w = P / 1e3;
        Yc(d.x, a.x, w), Yc(d.y, a.y, w), this.setTargetDelta(d), this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (Sn(h, this.layout.layoutBox, this.relativeParent.layout.layoutBox), ak(this.relativeTarget, this.relativeTargetOrigin, h, w), k && Oa(this.relativeTarget, k) && (this.isProjectionDirty = !1), k || (k = ve()), Ke(k, this.relativeTarget)), S && (this.animationValues = u, M_(u, c, this.latestValues, w, x, _)), this.root.scheduleUpdateProjection(), this.scheduleRender(), this.animationProgress = w;
      }, this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0);
    }
    startAnimation(a) {
      this.notifyListeners("animationStart"), this.currentAnimation && this.currentAnimation.stop(), this.resumingFrom && this.resumingFrom.currentAnimation && this.resumingFrom.currentAnimation.stop(), this.pendingAnimation && (zt(this.pendingAnimation), this.pendingAnimation = void 0), this.pendingAnimation = fe.update(() => {
        Eo.hasAnimatedSinceResize = !0, this.currentAnimation = G_(0, Wc, {
          ...a,
          onUpdate: (s) => {
            this.mixTargetDelta(s), a.onUpdate && a.onUpdate(s);
          },
          onComplete: () => {
            a.onComplete && a.onComplete(), this.completeAnimation();
          }
        }), this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation), this.pendingAnimation = void 0;
      });
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0, this.resumingFrom.preserveOpacity = void 0);
      const a = this.getStack();
      a && a.exitAnimationComplete(), this.resumingFrom = this.currentAnimation = this.animationValues = void 0, this.notifyListeners("animationComplete");
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(Wc), this.currentAnimation.stop()), this.completeAnimation();
    }
    applyTransformsToTarget() {
      const a = this.getLead();
      let { targetWithTransforms: s, target: l, layout: c, latestValues: u } = a;
      if (!(!s || !l || !c)) {
        if (this !== a && this.layout && c && df(this.options.animationType, this.layout.layoutBox, c.layoutBox)) {
          l = this.target || ve();
          const d = Ue(this.layout.layoutBox.x);
          l.x.min = a.target.x.min, l.x.max = l.x.min + d;
          const h = Ue(this.layout.layoutBox.y);
          l.y.min = a.target.y.min, l.y.max = l.y.min + h;
        }
        Ke(s, l), Pr(s, u), yn(this.projectionDeltaWithTransform, this.layoutCorrected, s, u);
      }
    }
    registerSharedNode(a, s) {
      this.sharedNodes.has(a) || this.sharedNodes.set(a, new L_()), this.sharedNodes.get(a).add(s);
      const c = s.options.initialPromotionConfig;
      s.promote({
        transition: c ? c.transition : void 0,
        preserveFollowOpacity: c && c.shouldPreserveFollowOpacity ? c.shouldPreserveFollowOpacity(s) : void 0
      });
    }
    isLead() {
      const a = this.getStack();
      return a ? a.lead === this : !0;
    }
    getLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? ((a = this.getStack()) === null || a === void 0 ? void 0 : a.lead) || this : this;
    }
    getPrevLead() {
      var a;
      const { layoutId: s } = this.options;
      return s ? (a = this.getStack()) === null || a === void 0 ? void 0 : a.prevLead : void 0;
    }
    getStack() {
      const { layoutId: a } = this.options;
      if (a)
        return this.root.sharedNodes.get(a);
    }
    promote({ needsReset: a, transition: s, preserveFollowOpacity: l } = {}) {
      const c = this.getStack();
      c && c.promote(this, l), a && (this.projectionDelta = void 0, this.needsReset = !0), s && this.setOptions({ transition: s });
    }
    relegate() {
      const a = this.getStack();
      return a ? a.relegate(this) : !1;
    }
    resetRotation() {
      const { visualElement: a } = this.options;
      if (!a)
        return;
      let s = !1;
      const { latestValues: l } = a;
      if ((l.rotate || l.rotateX || l.rotateY || l.rotateZ) && (s = !0), !s)
        return;
      const c = {};
      for (let u = 0; u < Nc.length; u++) {
        const d = "rotate" + Nc[u];
        l[d] && (c[d] = l[d], a.setStaticValue(d, 0));
      }
      a.render();
      for (const u in c)
        a.setStaticValue(u, c[u]);
      a.scheduleRender();
    }
    getProjectionStyles(a = {}) {
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
        return this.needsReset = !1, c.opacity = "", c.pointerEvents = Po(a.pointerEvents) || "", c.transform = u ? u(this.latestValues, "") : "none", c;
      const d = this.getLead();
      if (!this.projectionDelta || !this.layout || !d.target) {
        const S = {};
        return this.options.layoutId && (S.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1, S.pointerEvents = Po(a.pointerEvents) || ""), this.hasProjected && !rr(this.latestValues) && (S.transform = u ? u({}, "") : "none", this.hasProjected = !1), S;
      }
      const h = d.animationValues || d.latestValues;
      this.applyTransformsToTarget(), c.transform = Lc(this.projectionDeltaWithTransform, this.treeScale, h), u && (c.transform = u(h, c.transform));
      const { x: m, y: b } = this.projectionDelta;
      c.transformOrigin = `${m.origin * 100}% ${b.origin * 100}% 0`, d.animationValues ? c.opacity = d === this ? (l = (s = h.opacity) !== null && s !== void 0 ? s : this.latestValues.opacity) !== null && l !== void 0 ? l : 1 : this.preserveOpacity ? this.latestValues.opacity : h.opacityExit : c.opacity = d === this ? h.opacity !== void 0 ? h.opacity : "" : h.opacityExit !== void 0 ? h.opacityExit : 0;
      for (const S in jo) {
        if (h[S] === void 0)
          continue;
        const { correct: T, applyTo: _ } = jo[S], x = c.transform === "none" ? h[S] : T(h[S], d);
        if (_) {
          const k = _.length;
          for (let P = 0; P < k; P++)
            c[_[P]] = x;
        } else
          c[S] = x;
      }
      return this.options.layoutId && (c.pointerEvents = d === this ? Po(a.pointerEvents) || "" : "none"), c;
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0;
    }
    // Only run on root
    resetTree() {
      this.root.nodes.forEach((a) => {
        var s;
        return (s = a.currentAnimation) === null || s === void 0 ? void 0 : s.stop();
      }), this.root.nodes.forEach(Uc), this.root.sharedNodes.clear();
    }
  };
}
function K_(e) {
  e.updateLayout();
}
function X_(e) {
  var t;
  const r = ((t = e.resumeFrom) === null || t === void 0 ? void 0 : t.snapshot) || e.snapshot;
  if (e.isLead() && e.layout && r && e.hasListeners("didUpdate")) {
    const { layoutBox: n, measuredBox: o } = e.layout, { animationType: i } = e.options, a = r.source !== e.layout.source;
    i === "size" ? dt((d) => {
      const h = a ? r.measuredBox[d] : r.layoutBox[d], m = Ue(h);
      h.min = n[d].min, h.max = h.min + m;
    }) : df(i, r.layoutBox, n) && dt((d) => {
      const h = a ? r.measuredBox[d] : r.layoutBox[d], m = Ue(n[d]);
      h.max = h.min + m, e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0, e.relativeTarget[d].max = e.relativeTarget[d].min + m);
    });
    const s = Cr();
    yn(s, n, r.layoutBox);
    const l = Cr();
    a ? yn(l, e.applyTransform(o, !0), r.measuredBox) : yn(l, n, r.layoutBox);
    const c = !cf(s);
    let u = !1;
    if (!e.resumeFrom) {
      const d = e.getClosestProjectingParent();
      if (d && !d.resumeFrom) {
        const { snapshot: h, layout: m } = d;
        if (h && m) {
          const b = ve();
          Sn(b, r.layoutBox, h.layoutBox);
          const S = ve();
          Sn(S, n, m.layoutBox), Oa(b, S) || (u = !0), d.options.layoutRoot && (e.relativeTarget = S, e.relativeTargetOrigin = b, e.relativeParent = d);
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
function Z_(e) {
  nr.totalNodes++, e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty), e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)), e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty));
}
function J_(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1;
}
function Q_(e) {
  e.clearSnapshot();
}
function Uc(e) {
  e.clearMeasurements();
}
function ek(e) {
  e.isLayoutDirty = !1;
}
function tk(e) {
  const { visualElement: t } = e.options;
  t && t.getProps().onBeforeLayoutMeasure && t.notify("BeforeLayoutMeasure"), e.resetTransform();
}
function Hc(e) {
  e.finishAnimation(), e.targetDelta = e.relativeTarget = e.target = void 0, e.isProjectionDirty = !0;
}
function rk(e) {
  e.resolveTargetDelta();
}
function nk(e) {
  e.calcProjection();
}
function ok(e) {
  e.resetRotation();
}
function ik(e) {
  e.removeLeadSnapshot();
}
function Yc(e, t, r) {
  e.translate = de(t.translate, 0, r), e.scale = de(t.scale, 1, r), e.origin = t.origin, e.originPoint = t.originPoint;
}
function Gc(e, t, r, n) {
  e.min = de(t.min, r.min, n), e.max = de(t.max, r.max, n);
}
function ak(e, t, r, n) {
  Gc(e.x, t.x, r.x, n), Gc(e.y, t.y, r.y, n);
}
function sk(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0;
}
const lk = {
  duration: 0.45,
  ease: [0.4, 0, 0.1, 1]
};
function qc(e) {
  e.min = Math.round(e.min), e.max = Math.round(e.max);
}
function ck(e) {
  qc(e.x), qc(e.y);
}
function df(e, t, r) {
  return e === "position" || e === "preserve-aspect" && !Da(Ic(t), Ic(r), 0.2);
}
const uk = uf({
  attachResizeListener: (e, t) => $t(e, "resize", t),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body.scrollLeft,
    y: document.documentElement.scrollTop || document.body.scrollTop
  }),
  checkIsScrollRoot: () => !0
}), ca = {
  current: void 0
}, ff = uf({
  measureScroll: (e) => ({
    x: e.scrollLeft,
    y: e.scrollTop
  }),
  defaultParent: () => {
    if (!ca.current) {
      const e = new uk({});
      e.mount(window), e.setOptions({ layoutScroll: !0 }), ca.current = e;
    }
    return ca.current;
  },
  resetTransform: (e, t) => {
    e.style.transform = t !== void 0 ? t : "none";
  },
  checkIsScrollRoot: (e) => window.getComputedStyle(e).position === "fixed"
}), dk = {
  pan: {
    Feature: E_
  },
  drag: {
    Feature: P_,
    ProjectionNode: ff,
    MeasureLayout: af
  }
}, fk = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;
function hk(e) {
  const t = fk.exec(e);
  if (!t)
    return [,];
  const [, r, n] = t;
  return [r, n];
}
const pk = 4;
function Fa(e, t, r = 1) {
  vt(r <= pk, `Max CSS variable fallback depth detected in property "${e}". This may indicate a circular fallback dependency.`);
  const [n, o] = hk(e);
  if (!n)
    return;
  const i = window.getComputedStyle(t).getPropertyValue(n);
  return i ? i.trim() : ka(o) ? Fa(o, t, r + 1) : o;
}
function mk(e, { ...t }, r) {
  const n = e.current;
  if (!(n instanceof Element))
    return { target: t, transitionEnd: r };
  r && (r = { ...r }), e.values.forEach((o) => {
    const i = o.get();
    if (!ka(i))
      return;
    const a = Fa(i, n);
    a && o.set(a);
  });
  for (const o in t) {
    const i = t[o];
    if (!ka(i))
      continue;
    const a = Fa(i, n);
    a && (t[o] = a, r || (r = {}), r[o] === void 0 && (r[o] = i));
  }
  return { target: t, transitionEnd: r };
}
const gk = /* @__PURE__ */ new Set([
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
]), hf = (e) => gk.has(e), vk = (e) => Object.keys(e).some(hf), ho = (e) => e === hr || e === V, Kc = (e, t) => parseFloat(e.split(", ")[t]), Xc = (e, t) => (r, { transform: n }) => {
  if (n === "none" || !n)
    return 0;
  const o = n.match(/^matrix3d\((.+)\)$/);
  if (o)
    return Kc(o[1], t);
  {
    const i = n.match(/^matrix\((.+)\)$/);
    return i ? Kc(i[1], e) : 0;
  }
}, bk = /* @__PURE__ */ new Set(["x", "y", "z"]), yk = zn.filter((e) => !bk.has(e));
function Sk(e) {
  const t = [];
  return yk.forEach((r) => {
    const n = e.getValue(r);
    n !== void 0 && (t.push([r, n.get()]), n.set(r.startsWith("scale") ? 1 : 0));
  }), t.length && e.render(), t;
}
const Zc = {
  // Dimensions
  width: ({ x: e }, { paddingLeft: t = "0", paddingRight: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  height: ({ y: e }, { paddingTop: t = "0", paddingBottom: r = "0" }) => e.max - e.min - parseFloat(t) - parseFloat(r),
  top: (e, { top: t }) => parseFloat(t),
  left: (e, { left: t }) => parseFloat(t),
  bottom: ({ y: e }, { top: t }) => parseFloat(t) + (e.max - e.min),
  right: ({ x: e }, { left: t }) => parseFloat(t) + (e.max - e.min),
  // Transform
  x: Xc(4, 13),
  y: Xc(5, 14)
}, xk = (e, t, r) => {
  const n = t.measureViewportBox(), o = t.current, i = getComputedStyle(o), { display: a } = i, s = {};
  a === "none" && t.setStaticValue("display", e.display || "block"), r.forEach((c) => {
    s[c] = Zc[c](n, i);
  }), t.render();
  const l = t.measureViewportBox();
  return r.forEach((c) => {
    const u = t.getValue(c);
    u && u.jump(s[c]), e[c] = Zc[c](l, i);
  }), e;
}, wk = (e, t, r = {}, n = {}) => {
  t = { ...t }, n = { ...n };
  const o = Object.keys(t).filter(hf);
  let i = [], a = !1;
  const s = [];
  if (o.forEach((l) => {
    const c = e.getValue(l);
    if (!e.hasValue(l))
      return;
    let u = r[l], d = tn(u);
    const h = t[l];
    let m;
    if (Lo(h)) {
      const b = h.length, S = h[0] === null ? 1 : 0;
      u = h[S], d = tn(u);
      for (let T = S; T < b && h[T] !== null; T++)
        m ? vt(tn(h[T]) === m, "All keyframes must be of the same type") : (m = tn(h[T]), vt(m === d || ho(d) && ho(m), "Keyframes must be of the same dimension as the current value"));
    } else
      m = tn(h);
    if (d !== m)
      if (ho(d) && ho(m)) {
        const b = c.get();
        typeof b == "string" && c.set(parseFloat(b)), typeof h == "string" ? t[l] = parseFloat(h) : Array.isArray(h) && m === V && (t[l] = h.map(parseFloat));
      } else
        d != null && d.transform && (m != null && m.transform) && (u === 0 || h === 0) ? u === 0 ? c.set(m.transform(u)) : t[l] = d.transform(h) : (a || (i = Sk(e), a = !0), s.push(l), n[l] = n[l] !== void 0 ? n[l] : t[l], c.jump(h));
  }), s.length) {
    const l = s.indexOf("height") >= 0 ? window.pageYOffset : null, c = xk(t, e, s);
    return i.length && i.forEach(([u, d]) => {
      e.getValue(u).set(d);
    }), e.render(), ai && l !== null && window.scrollTo({ top: l }), { target: c, transitionEnd: n };
  } else
    return { target: t, transitionEnd: n };
};
function _k(e, t, r, n) {
  return vk(t) ? wk(e, t, r, n) : { target: t, transitionEnd: n };
}
const kk = (e, t, r, n) => {
  const o = mk(e, t, n);
  return t = o.target, n = o.transitionEnd, _k(e, t, r, n);
}, Ba = { current: null }, pf = { current: !1 };
function Tk() {
  if (pf.current = !0, !!ai)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)"), t = () => Ba.current = e.matches;
      e.addListener(t), t();
    } else
      Ba.current = !1;
}
function Ck(e, t, r) {
  const { willChange: n } = t;
  for (const o in t) {
    const i = t[o], a = r[o];
    if (je(i))
      e.addValue(o, i), Ho(n) && n.add(o), process.env.NODE_ENV === "development" && ws(i.version === "10.12.18", `Attempting to mix Framer Motion versions ${i.version} with 10.12.18 may not work as expected.`);
    else if (je(a))
      e.addValue(o, Ir(i, { owner: e })), Ho(n) && n.remove(o);
    else if (a !== i)
      if (e.hasValue(o)) {
        const s = e.getValue(o);
        !s.hasAnimated && s.set(i);
      } else {
        const s = e.getStaticValue(o);
        e.addValue(o, Ir(s !== void 0 ? s : i, { owner: e }));
      }
  }
  for (const o in r)
    t[o] === void 0 && e.removeValue(o);
  return t;
}
const Jc = /* @__PURE__ */ new WeakMap(), mf = Object.keys($n), Pk = mf.length, Qc = [
  "AnimationStart",
  "AnimationComplete",
  "Update",
  "BeforeLayoutMeasure",
  "LayoutMeasure",
  "LayoutAnimationStart",
  "LayoutAnimationComplete"
], Ek = is.length;
class $k {
  constructor({ parent: t, props: r, presenceContext: n, reducedMotionConfig: o, visualState: i }, a = {}) {
    this.current = null, this.children = /* @__PURE__ */ new Set(), this.isVariantNode = !1, this.isControllingVariants = !1, this.shouldReduceMotion = null, this.values = /* @__PURE__ */ new Map(), this.features = {}, this.valueSubscriptions = /* @__PURE__ */ new Map(), this.prevMotionValues = {}, this.events = {}, this.propEventSubscriptions = {}, this.notifyUpdate = () => this.notify("Update", this.latestValues), this.render = () => {
      this.current && (this.triggerBuild(), this.renderInstance(this.current, this.renderState, this.props.style, this.projection));
    }, this.scheduleRender = () => fe.render(this.render, !1, !0);
    const { latestValues: s, renderState: l } = i;
    this.latestValues = s, this.baseTarget = { ...s }, this.initialValues = r.initial ? { ...s } : {}, this.renderState = l, this.parent = t, this.props = r, this.presenceContext = n, this.depth = t ? t.depth + 1 : 0, this.reducedMotionConfig = o, this.options = a, this.isControllingVariants = li(r), this.isVariantNode = Ju(r), this.isVariantNode && (this.variantChildren = /* @__PURE__ */ new Set()), this.manuallyAnimateOnMount = !!(t && t.current);
    const { willChange: c, ...u } = this.scrapeMotionValuesFromProps(r, {});
    for (const d in u) {
      const h = u[d];
      s[d] !== void 0 && je(h) && (h.set(s[d], !1), Ho(c) && c.add(d));
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
    this.current = t, Jc.set(t, this), this.projection && !this.projection.instance && this.projection.mount(t), this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)), this.values.forEach((r, n) => this.bindToMotionValue(n, r)), pf.current || Tk(), this.shouldReduceMotion = this.reducedMotionConfig === "never" ? !1 : this.reducedMotionConfig === "always" ? !0 : Ba.current, process.env.NODE_ENV !== "production" && ws(this.shouldReduceMotion !== !0, "You have Reduced Motion enabled on your device. Animations may not appear as expected."), this.parent && this.parent.children.add(this), this.update(this.props, this.presenceContext);
  }
  unmount() {
    Jc.delete(this.current), this.projection && this.projection.unmount(), zt(this.notifyUpdate), zt(this.render), this.valueSubscriptions.forEach((t) => t()), this.removeFromVariantTree && this.removeFromVariantTree(), this.parent && this.parent.children.delete(this);
    for (const t in this.events)
      this.events[t].clear();
    for (const t in this.features)
      this.features[t].unmount();
    this.current = null;
  }
  bindToMotionValue(t, r) {
    const n = fr.has(t), o = r.on("change", (a) => {
      this.latestValues[t] = a, this.props.onUpdate && fe.update(this.notifyUpdate, !1, !0), n && this.projection && (this.projection.isTransformDirty = !0);
    }), i = r.on("renderRequest", this.scheduleRender);
    this.valueSubscriptions.set(t, () => {
      o(), i();
    });
  }
  sortNodePosition(t) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== t.type ? 0 : this.sortInstanceNodePosition(this.current, t.current);
  }
  loadFeatures({ children: t, ...r }, n, o, i) {
    let a, s;
    if (process.env.NODE_ENV !== "production" && o && n) {
      const l = "You have rendered a `motion` component within a `LazyMotion` component. This will break tree shaking. Import and render a `m` component instead.";
      r.ignoreStrict ? Fn(!1, l) : vt(!1, l);
    }
    for (let l = 0; l < Pk; l++) {
      const c = mf[l], { isEnabled: u, Feature: d, ProjectionNode: h, MeasureLayout: m } = $n[c];
      h && (a = h), u(r) && (!this.features[c] && d && (this.features[c] = new d(this)), m && (s = m));
    }
    if (!this.projection && a) {
      this.projection = new a(this.latestValues, this.parent && this.parent.projection);
      const { layoutId: l, layout: c, drag: u, dragConstraints: d, layoutScroll: h, layoutRoot: m } = r;
      this.projection.setOptions({
        layoutId: l,
        layout: c,
        alwaysMeasureLayout: !!u || d && kr(d),
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
        initialPromotionConfig: i,
        layoutScroll: h,
        layoutRoot: m
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
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : ve();
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
    for (let n = 0; n < Qc.length; n++) {
      const o = Qc[n];
      this.propEventSubscriptions[o] && (this.propEventSubscriptions[o](), delete this.propEventSubscriptions[o]);
      const i = t["on" + o];
      i && (this.propEventSubscriptions[o] = this.on(o, i));
    }
    this.prevMotionValues = Ck(this, this.scrapeMotionValuesFromProps(t, this.prevProps), this.prevMotionValues), this.handleChildMotionValue && this.handleChildMotionValue();
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
    for (let n = 0; n < Ek; n++) {
      const o = is[n], i = this.props[o];
      (En(i) || i === !1) && (r[o] = i);
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
    return n === void 0 && r !== void 0 && (n = Ir(r, { owner: this }), this.addValue(t, n)), n;
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
    const { initial: n } = this.props, o = typeof n == "string" || typeof n == "object" ? (r = hs(this.props, n)) === null || r === void 0 ? void 0 : r[t] : void 0;
    if (n && o !== void 0)
      return o;
    const i = this.getBaseTargetFromProps(this.props, t);
    return i !== void 0 && !je(i) ? i : this.initialValues[t] !== void 0 && o === void 0 ? void 0 : this.baseTarget[t];
  }
  on(t, r) {
    return this.events[t] || (this.events[t] = new xs()), this.events[t].add(r);
  }
  notify(t, ...r) {
    this.events[t] && this.events[t].notify(...r);
  }
}
class gf extends $k {
  sortInstanceNodePosition(t, r) {
    return t.compareDocumentPosition(r) & 2 ? 1 : -1;
  }
  getBaseTargetFromProps(t, r) {
    return t.style ? t.style[r] : void 0;
  }
  removeValueFromRenderState(t, { vars: r, style: n }) {
    delete r[t], delete n[t];
  }
  makeTargetAnimatableFromInstance({ transition: t, transitionEnd: r, ...n }, { transformValues: o }, i) {
    let a = Gw(n, t || {}, this);
    if (o && (r && (r = o(r)), n && (n = o(n)), a && (a = o(a))), i) {
      Hw(this, n, a);
      const s = kk(this, n, a, r);
      r = s.transitionEnd, n = s.target;
    }
    return {
      transition: t,
      transitionEnd: r,
      ...n
    };
  }
}
function Ak(e) {
  return window.getComputedStyle(e);
}
class Rk extends gf {
  readValueFromInstance(t, r) {
    if (fr.has(r)) {
      const n = vs(r);
      return n && n.default || 0;
    } else {
      const n = Ak(t), o = (nd(r) ? n.getPropertyValue(r) : n[r]) || 0;
      return typeof o == "string" ? o.trim() : o;
    }
  }
  measureInstanceViewportBox(t, { transformPagePoint: r }) {
    return of(t, r);
  }
  build(t, r, n, o) {
    ss(t, r, n, o.transformTemplate);
  }
  scrapeMotionValuesFromProps(t, r) {
    return fs(t, r);
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(), delete this.childSubscription);
    const { children: t } = this.props;
    je(t) && (this.childSubscription = t.on("change", (r) => {
      this.current && (this.current.textContent = `${r}`);
    }));
  }
  renderInstance(t, r, n, o) {
    cd(t, r, n, o);
  }
}
class Dk extends gf {
  constructor() {
    super(...arguments), this.isSVGTag = !1;
  }
  getBaseTargetFromProps(t, r) {
    return t[r];
  }
  readValueFromInstance(t, r) {
    if (fr.has(r)) {
      const n = vs(r);
      return n && n.default || 0;
    }
    return r = ud.has(r) ? r : ds(r), t.getAttribute(r);
  }
  measureInstanceViewportBox() {
    return ve();
  }
  scrapeMotionValuesFromProps(t, r) {
    return fd(t, r);
  }
  build(t, r, n, o) {
    cs(t, r, n, this.isSVGTag, o.transformTemplate);
  }
  renderInstance(t, r, n, o) {
    dd(t, r, n, o);
  }
  mount(t) {
    this.isSVGTag = us(t.tagName), super.mount(t);
  }
}
const Vk = (e, t) => as(e) ? new Dk(t, { enableHardwareAcceleration: !1 }) : new Rk(t, { enableHardwareAcceleration: !0 }), zk = {
  layout: {
    ProjectionNode: ff,
    MeasureLayout: af
  }
}, Mk = {
  ...s_,
  ...A1,
  ...dk,
  ...zk
}, pT = /* @__PURE__ */ Fx((e, t) => h1(e, t, Mk, Vk));
var Ok = rp({
  "0%": {
    transform: "rotate(0deg)"
  },
  "100%": {
    transform: "rotate(360deg)"
  }
}), Fk = Ex((e, t) => {
  const r = hx("Spinner", e), {
    label: n = "Loading...",
    thickness: o = "2px",
    speed: i = "0.45s",
    emptyColor: a = "transparent",
    className: s,
    ...l
  } = zm(e), c = pp("chakra-spinner", s), u = {
    display: "inline-block",
    borderColor: "currentColor",
    borderStyle: "solid",
    borderRadius: "99999px",
    borderWidth: o,
    borderBottomColor: a,
    borderLeftColor: a,
    animation: `${Ok} ${i} linear infinite`,
    ...r
  };
  return /* @__PURE__ */ Qs.jsx(
    ql.div,
    {
      ref: t,
      __css: u,
      className: c,
      ...l,
      children: n && /* @__PURE__ */ Qs.jsx(ql.span, { srOnly: !0, children: n })
    }
  );
});
Fk.displayName = "Spinner";
export {
  oe as $,
  ar as A,
  Vh as B,
  bu as C,
  uu as D,
  ix as E,
  nT as F,
  rT as G,
  vu as H,
  $_ as I,
  Xk as J,
  M as K,
  Wk as L,
  Vm as M,
  hp as N,
  gx as O,
  Zi as P,
  Cx as Q,
  cT as R,
  Fk as S,
  qa as T,
  Nk as U,
  em as V,
  vo as W,
  G as X,
  or as Y,
  zp as Z,
  Ao as _,
  ql as a,
  Em as a0,
  nm as a1,
  Zk as a2,
  Jk as a3,
  va as a4,
  Mp as a5,
  vm as a6,
  Vo as a7,
  Pm as a8,
  xu as a9,
  tT as aA,
  eT as aB,
  ep as aC,
  jk as aD,
  rx as aE,
  Kl as aF,
  fe as aG,
  a1 as aH,
  ii as aI,
  Qu as aJ,
  vt as aK,
  fT as aL,
  Op as aa,
  xm as ab,
  Xe as ac,
  Fp as ad,
  Wp as ae,
  dn as af,
  ym as ag,
  Tu as ah,
  ti as ai,
  Dm as aj,
  Up as ak,
  Kp as al,
  ie as am,
  Za as an,
  Hp as ao,
  Kk as ap,
  rm as aq,
  tm as ar,
  yp as as,
  Yp as at,
  Gp as au,
  qp as av,
  ZS as aw,
  Om as ax,
  Mm as ay,
  Uu as az,
  pp as b,
  Ik as c,
  sT as d,
  Gk as e,
  Ex as f,
  Uk as g,
  pT as h,
  it as i,
  Qs as j,
  lT as k,
  uT as l,
  Yu as m,
  oT as n,
  zm as o,
  aT as p,
  Hk as q,
  hx as r,
  Qk as s,
  Yk as t,
  yu as u,
  Lk as v,
  iT as w,
  dT as x,
  rp as y,
  qk as z
};
