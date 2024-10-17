var docs = function() {
	"use strict";

	function t() {}

	function e(t, e) {
		for (const i in e) t[i] = e[i];
		return t
	}

	function i(t) {
		return t()
	}

	function r() {
		return Object.create(null)
	}

	function n(t) {
		t.forEach(i)
	}

	function s(t) {
		return "function" == typeof t
	}

	function a(t, e) {
		return t != t ? e == e : t !== e || t && "object" == typeof t || "function" == typeof t
	}
	let o, l;

	function h(t, e) {
		return o || (o = document.createElement("a")), o.href = e, t === o.href
	}

	function d(t, e, i, r) {
		if (t) {
			const n = c(t, e, i, r);
			return t[0](n)
		}
	}

	function c(t, i, r, n) {
		return t[1] && n ? e(r.ctx.slice(), t[1](n(i))) : r.ctx
	}

	function p(t, e, i, r) {
		if (t[2] && r) {
			const n = t[2](r(i));
			if (void 0 === e.dirty) return n;
			if ("object" == typeof n) {
				const t = [],
					i = Math.max(e.dirty.length, n.length);
				for (let r = 0; r < i; r += 1) t[r] = e.dirty[r] | n[r];
				return t
			}
			return e.dirty | n
		}
		return e.dirty
	}

	function u(t, e, i, r, n, s) {
		if (n) {
			const a = c(e, i, r, s);
			t.p(a, n)
		}
	}

	function f(t) {
		if (t.ctx.length > 32) {
			const e = [],
				i = t.ctx.length / 32;
			for (let t = 0; t < i; t++) e[t] = -1;
			return e
		}
		return -1
	}

	function m(t) {
		const e = {};
		for (const i in t) "$" !== i[0] && (e[i] = t[i]);
		return e
	}

	function g(t, e) {
		const i = {};
		e = new Set(e);
		for (const r in t) e.has(r) || "$" === r[0] || (i[r] = t[r]);
		return i
	}

	function _(t, e) {
		t.appendChild(e)
	}

	function y(t, e, i) {
		t.insertBefore(e, i || null)
	}

	function b(t) {
		t.parentNode && t.parentNode.removeChild(t)
	}

	function x(t, e) {
		for (let i = 0; i < t.length; i += 1) t[i] && t[i].d(e)
	}

	function w(t) {
		return document.createElement(t)
	}

	function v(t) {
		return document.createTextNode(t)
	}

	function S() {
		return v(" ")
	}

	function U() {
		return v("")
	}

	function k(t, e, i, r) {
		return t.addEventListener(e, i, r), () => t.removeEventListener(e, i, r)
	}

	function $(t, e, i) {
		null == i ? t.removeAttribute(e) : t.getAttribute(e) !== i && t.setAttribute(e, i)
	}

	function E(t, e) {
		e = "" + e, t.wholeText !== e && (t.data = e)
	}

	function z(t, e) {
		t.value = null == e ? "" : e
	}
	class A {
		constructor(t = !1) {
			this.is_svg = !1, this.is_svg = t, this.e = this.n = null
		}
		c(t) {
			this.h(t)
		}
		m(t, e, i = null) {
			var r;
			this.e || (this.is_svg ? this.e = (r = e.nodeName, document.createElementNS("http://www.w3.org/2000/svg", r)) : this.e = w(e.nodeName), this.t = e, this.c(t)), this.i(i)
		}
		h(t) {
			this.e.innerHTML = t, this.n = Array.from(this.e.childNodes)
		}
		i(t) {
			for (let e = 0; e < this.n.length; e += 1) y(this.t, this.n[e], t)
		}
		p(t) {
			this.d(), this.h(t), this.i(this.a)
		}
		d() {
			this.n.forEach(b)
		}
	}

	function T(t, e) {
		return new t(e)
	}

	function B(t) {
		l = t
	}

	function I() {
		if (!l) throw new Error("Function called outside component initialization");
		return l
	}

	function C(t) {
		I().$$.on_mount.push(t)
	}

	function P() {
		const t = I();
		return (e, i, {
			cancelable: r = !1
		} = {}) => {
			const n = t.$$.callbacks[e];
			if (n) {
				const s = function(t, e, {
					bubbles: i = !1,
					cancelable: r = !1
				} = {}) {
					const n = document.createEvent("CustomEvent");
					return n.initCustomEvent(t, i, r, e), n
				}(e, i, {
					cancelable: r
				});
				return n.slice().forEach((e => {
					e.call(t, s)
				})), !s.defaultPrevented
			}
			return !0
		}
	}

	function F(t, e) {
		return I().$$.context.set(t, e), e
	}

	function L(t) {
		return I().$$.context.get(t)
	}
	const R = [],
		D = [],
		N = [],
		O = [],
		M = Promise.resolve();
	let G = !1;

	function H(t) {
		N.push(t)
	}
	const V = new Set;
	let Y = 0;

	function j() {
		if (0 !== Y) return;
		const t = l;
		do {
			try {
				for (; Y < R.length;) {
					const t = R[Y];
					Y++, B(t), q(t.$$)
				}
			} catch (t) {
				throw R.length = 0, Y = 0, t
			}
			for (B(null), R.length = 0, Y = 0; D.length;) D.pop()();
			for (let t = 0; t < N.length; t += 1) {
				const e = N[t];
				V.has(e) || (V.add(e), e())
			}
			N.length = 0
		} while (R.length);
		for (; O.length;) O.pop()();
		G = !1, V.clear(), B(t)
	}

	function q(t) {
		if (null !== t.fragment) {
			t.update(), n(t.before_update);
			const e = t.dirty;
			t.dirty = [-1], t.fragment && t.fragment.p(t.ctx, e), t.after_update.forEach(H)
		}
	}
	const Z = new Set;
	let W;

	function K() {
		W = {
			r: 0,
			c: [],
			p: W
		}
	}

	function X() {
		W.r || n(W.c), W = W.p
	}

	function Q(t, e) {
		t && t.i && (Z.delete(t), t.i(e))
	}

	function J(t, e, i, r) {
		if (t && t.o) {
			if (Z.has(t)) return;
			Z.add(t), W.c.push((() => {
				Z.delete(t), r && (i && t.d(1), r())
			})), t.o(e)
		} else r && r()
	}

	function tt(t, e) {
		const i = e.token = {};

		function r(t, r, n, s) {
			if (e.token !== i) return;
			e.resolved = s;
			let a = e.ctx;
			void 0 !== n && (a = a.slice(), a[n] = s);
			const o = t && (e.current = t)(a);
			let l = !1;
			e.block && (e.blocks ? e.blocks.forEach(((t, i) => {
				i !== r && t && (K(), J(t, 1, 1, (() => {
					e.blocks[i] === t && (e.blocks[i] = null)
				})), X())
			})) : e.block.d(1), o.c(), Q(o, 1), o.m(e.mount(), e.anchor), l = !0), e.block = o, e.blocks && (e.blocks[r] = o), l && j()
		}
		if (!(n = t) || "object" != typeof n && "function" != typeof n || "function" != typeof n.then) {
			if (e.current !== e.then) return r(e.then, 1, e.value, t), !0;
			e.resolved = t
		} else {
			const i = I();
			if (t.then((t => {
					B(i), r(e.then, 1, e.value, t), B(null)
				}), (t => {
					if (B(i), r(e.catch, 2, e.error, t), B(null), !e.hasCatch) throw t
				})), e.current !== e.pending) return r(e.pending, 0), !0
		}
		var n
	}

	function et(t, e, i) {
		const r = e.slice(),
			{
				resolved: n
			} = t;
		t.current === t.then && (r[t.value] = n), t.current === t.catch && (r[t.error] = n), t.block.p(r, i)
	}

	function it(t, e) {
		const i = {},
			r = {},
			n = {
				$$scope: 1
			};
		let s = t.length;
		for (; s--;) {
			const a = t[s],
				o = e[s];
			if (o) {
				for (const t in a) t in o || (r[t] = 1);
				for (const t in o) n[t] || (i[t] = o[t], n[t] = 1);
				t[s] = o
			} else
				for (const t in a) n[t] = 1
		}
		for (const t in r) t in i || (i[t] = void 0);
		return i
	}

	function rt(t) {
		return "object" == typeof t && null !== t ? t : {}
	}

	function nt(t) {
		t && t.c()
	}

	function st(t, e, r, a) {
		const {
			fragment: o,
			after_update: l
		} = t.$$;
		o && o.m(e, r), a || H((() => {
			const e = t.$$.on_mount.map(i).filter(s);
			t.$$.on_destroy ? t.$$.on_destroy.push(...e) : n(e), t.$$.on_mount = []
		})), l.forEach(H)
	}

	function at(t, e) {
		const i = t.$$;
		null !== i.fragment && (n(i.on_destroy), i.fragment && i.fragment.d(e), i.on_destroy = i.fragment = null, i.ctx = [])
	}

	function ot(t, e) {
		-1 === t.$$.dirty[0] && (R.push(t), G || (G = !0, M.then(j)), t.$$.dirty.fill(0)), t.$$.dirty[e / 31 | 0] |= 1 << e % 31
	}

	function lt(e, i, s, a, o, h, d, c = [-1]) {
		const p = l;
		B(e);
		const u = e.$$ = {
			fragment: null,
			ctx: [],
			props: h,
			update: t,
			not_equal: o,
			bound: r(),
			on_mount: [],
			on_destroy: [],
			on_disconnect: [],
			before_update: [],
			after_update: [],
			context: new Map(i.context || (p ? p.$$.context : [])),
			callbacks: r(),
			dirty: c,
			skip_bound: !1,
			root: i.target || p.$$.root
		};
		d && d(u.root);
		let f = !1;
		if (u.ctx = s ? s(e, i.props || {}, ((t, i, ...r) => {
				const n = r.length ? r[0] : i;
				return u.ctx && o(u.ctx[t], u.ctx[t] = n) && (!u.skip_bound && u.bound[t] && u.bound[t](n), f && ot(e, t)), i
			})) : [], u.update(), f = !0, n(u.before_update), u.fragment = !!a && a(u.ctx), i.target) {
			if (i.hydrate) {
				const t = function(t) {
					return Array.from(t.childNodes)
				}(i.target);
				u.fragment && u.fragment.l(t), t.forEach(b)
			} else u.fragment && u.fragment.c();
			i.intro && Q(e.$$.fragment), st(e, i.target, i.anchor, i.customElement), j()
		}
		B(p)
	}
	class ht {
		$destroy() {
			at(this, 1), this.$destroy = t
		}
		$on(e, i) {
			if (!s(i)) return t;
			const r = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
			return r.push(i), () => {
				const t = r.indexOf(i); - 1 !== t && r.splice(t, 1)
			}
		}
		$set(t) {
			var e;
			this.$$set && (e = t, 0 !== Object.keys(e).length) && (this.$$.skip_bound = !0, this.$$set(t), this.$$.skip_bound = !1)
		}
	}

	function dt(e) {
		return {
			c: t,
			m: t,
			p: t,
			d: t
		}
	}

	function ct(e) {
		let i, r, n, s = e[1] + "";
		return {
			c() {
				i = w("pre"), r = v("version "), n = v(s), $(i, "class", "svelte-1anaj0w")
			},
			m(t, e) {
				y(t, i, e), _(i, r), _(i, n)
			},
			p: t,
			d(t) {
				t && b(i)
			}
		}
	}

	function pt(e) {
		return {
			c: t,
			m: t,
			p: t,
			d: t
		}
	}

	function ut(e) {
		let i, r, n, s, a, o, l, h, d, c = {
			ctx: e,
			current: null,
			token: null,
			hasCatch: !1,
			pending: pt,
			then: ct,
			catch: dt,
			value: 1
		};
		return tt(e[0], c), {
			c() {
				i = w("div"), c.block.c(), r = S(), n = w("h1"), n.textContent = "ScrollyVideo.js", s = S(), a = w("p"), a.textContent = "Responsive scrollable videos without obscure video encoding requirements. Compatible with React, Svelte, Vue, and plain HTML.", o = S(), l = w("a"), l.textContent = "npm", h = S(), d = w("a"), d.textContent = "github", $(n, "class", "svelte-1anaj0w"), $(a, "class", "svelte-1anaj0w"), $(l, "class", "npm svelte-1anaj0w"), $(l, "target", "_blank"), $(l, "rel", "noopener noreferrer"), $(l, "href", "https://www.npmjs.com/package/scrolly-video"), $(d, "class", "github svelte-1anaj0w"), $(d, "target", "_blank"), $(d, "rel", "noopener noreferrer"), $(d, "href", "https://github.com/dkaoster/scrolly-video"), $(i, "class", "intro svelte-1anaj0w")
			},
			m(t, e) {
				y(t, i, e), c.block.m(i, c.anchor = null), c.mount = () => i, c.anchor = r, _(i, r), _(i, n), _(i, s), _(i, a), _(i, o), _(i, l), _(i, h), _(i, d)
			},
			p(t, [i]) {
				et(c, e = t, i)
			},
			i: t,
			o: t,
			d(t) {
				t && b(i), c.block.d(), c.token = null, c = null
			}
		}
	}

	function ft(t) {
		return [L("npm").then((t => t["dist-tags"].latest))]
	}
	class mt extends ht {
		constructor(t) {
			super(), lt(this, t, ft, ut, a, {})
		}
	}
	var gt, _t, yt = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
		bt = {
			exports: {}
		};
	gt = bt, _t = bt.exports,
		function(t, e) {
			var i = "function",
				r = "undefined",
				n = "object",
				s = "string",
				a = "model",
				o = "name",
				l = "type",
				h = "vendor",
				d = "version",
				c = "architecture",
				p = "console",
				u = "mobile",
				f = "tablet",
				m = "smarttv",
				g = "wearable",
				_ = "embedded",
				y = "Amazon",
				b = "Apple",
				x = "ASUS",
				w = "BlackBerry",
				v = "Browser",
				S = "Chrome",
				U = "Firefox",
				k = "Google",
				$ = "Huawei",
				E = "LG",
				z = "Microsoft",
				A = "Motorola",
				T = "Opera",
				B = "Samsung",
				I = "Sharp",
				C = "Sony",
				P = "Xiaomi",
				F = "Zebra",
				L = "Facebook",
				R = function(t) {
					for (var e = {}, i = 0; i < t.length; i++) e[t[i].toUpperCase()] = t[i];
					return e
				},
				D = function(t, e) {
					return typeof t === s && -1 !== N(e).indexOf(N(t))
				},
				N = function(t) {
					return t.toLowerCase()
				},
				O = function(t, e) {
					if (typeof t === s) return t = t.replace(/^\s\s*/, ""), typeof e === r ? t : t.substring(0, 350)
				},
				M = function(t, r) {
					for (var s, a, o, l, h, d, c = 0; c < r.length && !h;) {
						var p = r[c],
							u = r[c + 1];
						for (s = a = 0; s < p.length && !h;)
							if (h = p[s++].exec(t))
								for (o = 0; o < u.length; o++) d = h[++a], typeof(l = u[o]) === n && l.length > 0 ? 2 === l.length ? typeof l[1] == i ? this[l[0]] = l[1].call(this, d) : this[l[0]] = l[1] : 3 === l.length ? typeof l[1] !== i || l[1].exec && l[1].test ? this[l[0]] = d ? d.replace(l[1], l[2]) : e : this[l[0]] = d ? l[1].call(this, d, l[2]) : e : 4 === l.length && (this[l[0]] = d ? l[3].call(this, d.replace(l[1], l[2])) : e) : this[l] = d || e;
						c += 2
					}
				},
				G = function(t, i) {
					for (var r in i)
						if (typeof i[r] === n && i[r].length > 0) {
							for (var s = 0; s < i[r].length; s++)
								if (D(i[r][s], t)) return "?" === r ? e : r
						} else if (D(i[r], t)) return "?" === r ? e : r;
					return t
				},
				H = {
					ME: "4.90",
					"NT 3.11": "NT3.51",
					"NT 4.0": "NT4.0",
					2e3: "NT 5.0",
					XP: ["NT 5.1", "NT 5.2"],
					Vista: "NT 6.0",
					7: "NT 6.1",
					8: "NT 6.2",
					8.1: "NT 6.3",
					10: ["NT 6.4", "NT 10.0"],
					RT: "ARM"
				},
				V = {
					browser: [
						[/\b(?:crmo|crios)\/([\w\.]+)/i],
						[d, [o, "Chrome"]],
						[/edg(?:e|ios|a)?\/([\w\.]+)/i],
						[d, [o, "Edge"]],
						[/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
						[o, d],
						[/opios[\/ ]+([\w\.]+)/i],
						[d, [o, T + " Mini"]],
						[/\bopr\/([\w\.]+)/i],
						[d, [o, T]],
						[/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
						[o, d],
						[/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
						[d, [o, "UC" + v]],
						[/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
						[d, [o, "WeChat(Win) Desktop"]],
						[/micromessenger\/([\w\.]+)/i],
						[d, [o, "WeChat"]],
						[/konqueror\/([\w\.]+)/i],
						[d, [o, "Konqueror"]],
						[/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
						[d, [o, "IE"]],
						[/yabrowser\/([\w\.]+)/i],
						[d, [o, "Yandex"]],
						[/(avast|avg)\/([\w\.]+)/i],
						[
							[o, /(.+)/, "$1 Secure " + v], d
						],
						[/\bfocus\/([\w\.]+)/i],
						[d, [o, U + " Focus"]],
						[/\bopt\/([\w\.]+)/i],
						[d, [o, T + " Touch"]],
						[/coc_coc\w+\/([\w\.]+)/i],
						[d, [o, "Coc Coc"]],
						[/dolfin\/([\w\.]+)/i],
						[d, [o, "Dolphin"]],
						[/coast\/([\w\.]+)/i],
						[d, [o, T + " Coast"]],
						[/miuibrowser\/([\w\.]+)/i],
						[d, [o, "MIUI " + v]],
						[/fxios\/([-\w\.]+)/i],
						[d, [o, U]],
						[/\bqihu|(qi?ho?o?|360)browser/i],
						[
							[o, "360 " + v]
						],
						[/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
						[
							[o, /(.+)/, "$1 " + v], d
						],
						[/(comodo_dragon)\/([\w\.]+)/i],
						[
							[o, /_/g, " "], d
						],
						[/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
						[o, d],
						[/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
						[o],
						[/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
						[
							[o, L], d
						],
						[/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
						[o, d],
						[/\bgsa\/([\w\.]+) .*safari\//i],
						[d, [o, "GSA"]],
						[/headlesschrome(?:\/([\w\.]+)| )/i],
						[d, [o, S + " Headless"]],
						[/ wv\).+(chrome)\/([\w\.]+)/i],
						[
							[o, S + " WebView"], d
						],
						[/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
						[d, [o, "Android " + v]],
						[/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
						[o, d],
						[/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
						[d, [o, "Mobile Safari"]],
						[/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
						[d, o],
						[/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
						[o, [d, G, {
							"1.0": "/8",
							1.2: "/1",
							1.3: "/3",
							"2.0": "/412",
							"2.0.2": "/416",
							"2.0.3": "/417",
							"2.0.4": "/419",
							"?": "/"
						}]],
						[/(webkit|khtml)\/([\w\.]+)/i],
						[o, d],
						[/(navigator|netscape\d?)\/([-\w\.]+)/i],
						[
							[o, "Netscape"], d
						],
						[/mobile vr; rv:([\w\.]+)\).+firefox/i],
						[d, [o, U + " Reality"]],
						[/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
						[o, d],
						[/(cobalt)\/([\w\.]+)/i],
						[o, [d, /master.|lts./, ""]]
					],
					cpu: [
						[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
						[
							[c, "amd64"]
						],
						[/(ia32(?=;))/i],
						[
							[c, N]
						],
						[/((?:i[346]|x)86)[;\)]/i],
						[
							[c, "ia32"]
						],
						[/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
						[
							[c, "arm64"]
						],
						[/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
						[
							[c, "armhf"]
						],
						[/windows (ce|mobile); ppc;/i],
						[
							[c, "arm"]
						],
						[/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
						[
							[c, /ower/, "", N]
						],
						[/(sun4\w)[;\)]/i],
						[
							[c, "sparc"]
						],
						[/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
						[
							[c, N]
						]
					],
					device: [
						[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
						[a, [h, B],
							[l, f]
						],
						[/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
						[a, [h, B],
							[l, u]
						],
						[/\((ip(?:hone|od)[\w ]*);/i],
						[a, [h, b],
							[l, u]
						],
						[/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
						[a, [h, b],
							[l, f]
						],
						[/(macintosh);/i],
						[a, [h, b]],
						[/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
						[a, [h, $],
							[l, f]
						],
						[/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
						[a, [h, $],
							[l, u]
						],
						[/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
						[
							[a, /_/g, " "],
							[h, P],
							[l, u]
						],
						[/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
						[
							[a, /_/g, " "],
							[h, P],
							[l, f]
						],
						[/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
						[a, [h, "OPPO"],
							[l, u]
						],
						[/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
						[a, [h, "Vivo"],
							[l, u]
						],
						[/\b(rmx[12]\d{3})(?: bui|;|\))/i],
						[a, [h, "Realme"],
							[l, u]
						],
						[/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
						[a, [h, A],
							[l, u]
						],
						[/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
						[a, [h, A],
							[l, f]
						],
						[/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
						[a, [h, E],
							[l, f]
						],
						[/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
						[a, [h, E],
							[l, u]
						],
						[/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
						[a, [h, "Lenovo"],
							[l, f]
						],
						[/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
						[
							[a, /_/g, " "],
							[h, "Nokia"],
							[l, u]
						],
						[/(pixel c)\b/i],
						[a, [h, k],
							[l, f]
						],
						[/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
						[a, [h, k],
							[l, u]
						],
						[/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
						[a, [h, C],
							[l, u]
						],
						[/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
						[
							[a, "Xperia Tablet"],
							[h, C],
							[l, f]
						],
						[/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
						[a, [h, "OnePlus"],
							[l, u]
						],
						[/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
						[a, [h, y],
							[l, f]
						],
						[/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
						[
							[a, /(.+)/g, "Fire Phone $1"],
							[h, y],
							[l, u]
						],
						[/(playbook);[-\w\),; ]+(rim)/i],
						[a, h, [l, f]],
						[/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
						[a, [h, w],
							[l, u]
						],
						[/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
						[a, [h, x],
							[l, f]
						],
						[/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
						[a, [h, x],
							[l, u]
						],
						[/(nexus 9)/i],
						[a, [h, "HTC"],
							[l, f]
						],
						[/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
						[h, [a, /_/g, " "],
							[l, u]
						],
						[/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
						[a, [h, "Acer"],
							[l, f]
						],
						[/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
						[a, [h, "Meizu"],
							[l, u]
						],
						[/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
						[a, [h, I],
							[l, u]
						],
						[/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
						[h, a, [l, u]],
						[/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
						[h, a, [l, f]],
						[/(surface duo)/i],
						[a, [h, z],
							[l, f]
						],
						[/droid [\d\.]+; (fp\du?)(?: b|\))/i],
						[a, [h, "Fairphone"],
							[l, u]
						],
						[/(u304aa)/i],
						[a, [h, "AT&T"],
							[l, u]
						],
						[/\bsie-(\w*)/i],
						[a, [h, "Siemens"],
							[l, u]
						],
						[/\b(rct\w+) b/i],
						[a, [h, "RCA"],
							[l, f]
						],
						[/\b(venue[\d ]{2,7}) b/i],
						[a, [h, "Dell"],
							[l, f]
						],
						[/\b(q(?:mv|ta)\w+) b/i],
						[a, [h, "Verizon"],
							[l, f]
						],
						[/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
						[a, [h, "Barnes & Noble"],
							[l, f]
						],
						[/\b(tm\d{3}\w+) b/i],
						[a, [h, "NuVision"],
							[l, f]
						],
						[/\b(k88) b/i],
						[a, [h, "ZTE"],
							[l, f]
						],
						[/\b(nx\d{3}j) b/i],
						[a, [h, "ZTE"],
							[l, u]
						],
						[/\b(gen\d{3}) b.+49h/i],
						[a, [h, "Swiss"],
							[l, u]
						],
						[/\b(zur\d{3}) b/i],
						[a, [h, "Swiss"],
							[l, f]
						],
						[/\b((zeki)?tb.*\b) b/i],
						[a, [h, "Zeki"],
							[l, f]
						],
						[/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
						[
							[h, "Dragon Touch"], a, [l, f]
						],
						[/\b(ns-?\w{0,9}) b/i],
						[a, [h, "Insignia"],
							[l, f]
						],
						[/\b((nxa|next)-?\w{0,9}) b/i],
						[a, [h, "NextBook"],
							[l, f]
						],
						[/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
						[
							[h, "Voice"], a, [l, u]
						],
						[/\b(lvtel\-)?(v1[12]) b/i],
						[
							[h, "LvTel"], a, [l, u]
						],
						[/\b(ph-1) /i],
						[a, [h, "Essential"],
							[l, u]
						],
						[/\b(v(100md|700na|7011|917g).*\b) b/i],
						[a, [h, "Envizen"],
							[l, f]
						],
						[/\b(trio[-\w\. ]+) b/i],
						[a, [h, "MachSpeed"],
							[l, f]
						],
						[/\btu_(1491) b/i],
						[a, [h, "Rotor"],
							[l, f]
						],
						[/(shield[\w ]+) b/i],
						[a, [h, "Nvidia"],
							[l, f]
						],
						[/(sprint) (\w+)/i],
						[h, a, [l, u]],
						[/(kin\.[onetw]{3})/i],
						[
							[a, /\./g, " "],
							[h, z],
							[l, u]
						],
						[/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
						[a, [h, F],
							[l, f]
						],
						[/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
						[a, [h, F],
							[l, u]
						],
						[/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
						[h, a, [l, p]],
						[/droid.+; (shield) bui/i],
						[a, [h, "Nvidia"],
							[l, p]
						],
						[/(playstation [345portablevi]+)/i],
						[a, [h, C],
							[l, p]
						],
						[/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
						[a, [h, z],
							[l, p]
						],
						[/smart-tv.+(samsung)/i],
						[h, [l, m]],
						[/hbbtv.+maple;(\d+)/i],
						[
							[a, /^/, "SmartTV"],
							[h, B],
							[l, m]
						],
						[/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
						[
							[h, E],
							[l, m]
						],
						[/(apple) ?tv/i],
						[h, [a, b + " TV"],
							[l, m]
						],
						[/crkey/i],
						[
							[a, S + "cast"],
							[h, k],
							[l, m]
						],
						[/droid.+aft(\w)( bui|\))/i],
						[a, [h, y],
							[l, m]
						],
						[/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
						[a, [h, I],
							[l, m]
						],
						[/(bravia[\w ]+)( bui|\))/i],
						[a, [h, C],
							[l, m]
						],
						[/(mitv-\w{5}) bui/i],
						[a, [h, P],
							[l, m]
						],
						[/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
						[
							[h, O],
							[a, O],
							[l, m]
						],
						[/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
						[
							[l, m]
						],
						[/((pebble))app/i],
						[h, a, [l, g]],
						[/droid.+; (glass) \d/i],
						[a, [h, k],
							[l, g]
						],
						[/droid.+; (wt63?0{2,3})\)/i],
						[a, [h, F],
							[l, g]
						],
						[/(quest( 2)?)/i],
						[a, [h, L],
							[l, g]
						],
						[/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
						[h, [l, _]],
						[/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
						[a, [l, u]],
						[/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
						[a, [l, f]],
						[/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
						[
							[l, f]
						],
						[/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
						[
							[l, u]
						],
						[/(android[-\w\. ]{0,9});.+buil/i],
						[a, [h, "Generic"]]
					],
					engine: [
						[/windows.+ edge\/([\w\.]+)/i],
						[d, [o, "EdgeHTML"]],
						[/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
						[d, [o, "Blink"]],
						[/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
						[o, d],
						[/rv\:([\w\.]{1,9})\b.+(gecko)/i],
						[d, o]
					],
					os: [
						[/microsoft (windows) (vista|xp)/i],
						[o, d],
						[/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
						[o, [d, G, H]],
						[/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
						[
							[o, "Windows"],
							[d, G, H]
						],
						[/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
						[
							[d, /_/g, "."],
							[o, "iOS"]
						],
						[/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
						[
							[o, "Mac OS"],
							[d, /_/g, "."]
						],
						[/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
						[d, o],
						[/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
						[o, d],
						[/\(bb(10);/i],
						[d, [o, w]],
						[/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
						[d, [o, "Symbian"]],
						[/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
						[d, [o, U + " OS"]],
						[/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
						[d, [o, "webOS"]],
						[/crkey\/([\d\.]+)/i],
						[d, [o, S + "cast"]],
						[/(cros) [\w]+ ([\w\.]+\w)/i],
						[
							[o, "Chromium OS"], d
						],
						[/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
						[o, d],
						[/(sunos) ?([\w\.\d]*)/i],
						[
							[o, "Solaris"], d
						],
						[/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
						[o, d]
					]
				},
				Y = function(i, p) {
					if (typeof i === n && (p = i, i = e), !(this instanceof Y)) return new Y(i, p).getResult();
					var u = i || (typeof t !== r && t.navigator && t.navigator.userAgent ? t.navigator.userAgent : ""),
						f = p ? function(t, e) {
							var i = {};
							for (var r in t) e[r] && e[r].length % 2 == 0 ? i[r] = e[r].concat(t[r]) : i[r] = t[r];
							return i
						}(V, p) : V;
					return this.getBrowser = function() {
						var t, i = {};
						return i[o] = e, i[d] = e, M.call(i, u, f.browser), i.major = typeof(t = i.version) === s ? t.replace(/[^\d\.]/g, "").split(".")[0] : e, i
					}, this.getCPU = function() {
						var t = {};
						return t[c] = e, M.call(t, u, f.cpu), t
					}, this.getDevice = function() {
						var t = {};
						return t[h] = e, t[a] = e, t[l] = e, M.call(t, u, f.device), t
					}, this.getEngine = function() {
						var t = {};
						return t[o] = e, t[d] = e, M.call(t, u, f.engine), t
					}, this.getOS = function() {
						var t = {};
						return t[o] = e, t[d] = e, M.call(t, u, f.os), t
					}, this.getResult = function() {
						return {
							ua: this.getUA(),
							browser: this.getBrowser(),
							engine: this.getEngine(),
							os: this.getOS(),
							device: this.getDevice(),
							cpu: this.getCPU()
						}
					}, this.getUA = function() {
						return u
					}, this.setUA = function(t) {
						return u = typeof t === s && t.length > 350 ? O(t, 350) : t, this
					}, this.setUA(u), this
				};
			Y.VERSION = "1.0.33", Y.BROWSER = R([o, d, "major"]), Y.CPU = R([c]), Y.DEVICE = R([a, h, l, p, u, m, f, g, _]), Y.ENGINE = Y.OS = R([o, d]), gt.exports && (_t = gt.exports = Y), _t.UAParser = Y;
			var j = typeof t !== r && (t.jQuery || t.Zepto);
			if (j && !j.ua) {
				var q = new Y;
				j.ua = q.getResult(), j.ua.get = function() {
					return q.getUA()
				}, j.ua.set = function(t) {
					q.setUA(t);
					var e = q.getResult();
					for (var i in e) j.ua[i] = e[i]
				}
			}
		}("object" == typeof window ? window : yt);
	var xt = bt.exports,
		wt = {};
	! function(t) {
		var e, i, r, n = (e = new Date, i = 4, r = {
			setLogLevel: function(t) {
				i = t == this.debug ? 1 : t == this.info ? 2 : t == this.warn ? 3 : (this.error, 4)
			},
			debug: function(t, r) {
				void 0 === console.debug && (console.debug = console.log), 1 >= i && console.debug("[" + n.getDurationString(new Date - e, 1e3) + "]", "[" + t + "]", r)
			},
			log: function(t, e) {
				this.debug(t.msg)
			},
			info: function(t, r) {
				2 >= i && console.info("[" + n.getDurationString(new Date - e, 1e3) + "]", "[" + t + "]", r)
			},
			warn: function(t, r) {
				3 >= i && console.warn("[" + n.getDurationString(new Date - e, 1e3) + "]", "[" + t + "]", r)
			},
			error: function(t, r) {
				4 >= i && console.error("[" + n.getDurationString(new Date - e, 1e3) + "]", "[" + t + "]", r)
			}
		}, r);
		n.getDurationString = function(t, e) {
			var i;

			function r(t, e) {
				for (var i = ("" + t).split("."); i[0].length < e;) i[0] = "0" + i[0];
				return i.join(".")
			}
			t < 0 ? (i = !0, t = -t) : i = !1;
			var n = t / (e || 1),
				s = Math.floor(n / 3600);
			n -= 3600 * s;
			var a = Math.floor(n / 60),
				o = 1e3 * (n -= 60 * a);
			return o -= 1e3 * (n = Math.floor(n)), o = Math.floor(o), (i ? "-" : "") + s + ":" + r(a, 2) + ":" + r(n, 2) + "." + r(o, 3)
		}, n.printRanges = function(t) {
			var e = t.length;
			if (e > 0) {
				for (var i = "", r = 0; r < e; r++) r > 0 && (i += ","), i += "[" + n.getDurationString(t.start(r)) + "," + n.getDurationString(t.end(r)) + "]";
				return i
			}
			return "(empty)"
		}, t.Log = n;
		var s = function(t) {
			if (!(t instanceof ArrayBuffer)) throw "Needs an array buffer";
			this.buffer = t, this.dataview = new DataView(t), this.position = 0
		};
		s.prototype.getPosition = function() {
			return this.position
		}, s.prototype.getEndPosition = function() {
			return this.buffer.byteLength
		}, s.prototype.getLength = function() {
			return this.buffer.byteLength
		}, s.prototype.seek = function(t) {
			var e = Math.max(0, Math.min(this.buffer.byteLength, t));
			return this.position = isNaN(e) || !isFinite(e) ? 0 : e, !0
		}, s.prototype.isEos = function() {
			return this.getPosition() >= this.getEndPosition()
		}, s.prototype.readAnyInt = function(t, e) {
			var i = 0;
			if (this.position + t <= this.buffer.byteLength) {
				switch (t) {
					case 1:
						i = e ? this.dataview.getInt8(this.position) : this.dataview.getUint8(this.position);
						break;
					case 2:
						i = e ? this.dataview.getInt16(this.position) : this.dataview.getUint16(this.position);
						break;
					case 3:
						if (e) throw "No method for reading signed 24 bits values";
						i = this.dataview.getUint8(this.position) << 16, i |= this.dataview.getUint8(this.position + 1) << 8, i |= this.dataview.getUint8(this.position + 2);
						break;
					case 4:
						i = e ? this.dataview.getInt32(this.position) : this.dataview.getUint32(this.position);
						break;
					case 8:
						if (e) throw "No method for reading signed 64 bits values";
						i = this.dataview.getUint32(this.position) << 32, i |= this.dataview.getUint32(this.position + 4);
						break;
					default:
						throw "readInt method not implemented for size: " + t
				}
				return this.position += t, i
			}
			throw "Not enough bytes in buffer"
		}, s.prototype.readUint8 = function() {
			return this.readAnyInt(1, !1)
		}, s.prototype.readUint16 = function() {
			return this.readAnyInt(2, !1)
		}, s.prototype.readUint24 = function() {
			return this.readAnyInt(3, !1)
		}, s.prototype.readUint32 = function() {
			return this.readAnyInt(4, !1)
		}, s.prototype.readUint64 = function() {
			return this.readAnyInt(8, !1)
		}, s.prototype.readString = function(t) {
			if (this.position + t <= this.buffer.byteLength) {
				for (var e = "", i = 0; i < t; i++) e += String.fromCharCode(this.readUint8());
				return e
			}
			throw "Not enough bytes in buffer"
		}, s.prototype.readCString = function() {
			for (var t = [];;) {
				var e = this.readUint8();
				if (0 === e) break;
				t.push(e)
			}
			return String.fromCharCode.apply(null, t)
		}, s.prototype.readInt8 = function() {
			return this.readAnyInt(1, !0)
		}, s.prototype.readInt16 = function() {
			return this.readAnyInt(2, !0)
		}, s.prototype.readInt32 = function() {
			return this.readAnyInt(4, !0)
		}, s.prototype.readInt64 = function() {
			return this.readAnyInt(8, !1)
		}, s.prototype.readUint8Array = function(t) {
			for (var e = new Uint8Array(t), i = 0; i < t; i++) e[i] = this.readUint8();
			return e
		}, s.prototype.readInt16Array = function(t) {
			for (var e = new Int16Array(t), i = 0; i < t; i++) e[i] = this.readInt16();
			return e
		}, s.prototype.readUint16Array = function(t) {
			for (var e = new Int16Array(t), i = 0; i < t; i++) e[i] = this.readUint16();
			return e
		}, s.prototype.readUint32Array = function(t) {
			for (var e = new Uint32Array(t), i = 0; i < t; i++) e[i] = this.readUint32();
			return e
		}, s.prototype.readInt32Array = function(t) {
			for (var e = new Int32Array(t), i = 0; i < t; i++) e[i] = this.readInt32();
			return e
		}, t.MP4BoxStream = s;
		var a = function(t, e, i) {
			this._byteOffset = e || 0, t instanceof ArrayBuffer ? this.buffer = t : "object" == typeof t ? (this.dataView = t, e && (this._byteOffset += e)) : this.buffer = new ArrayBuffer(t || 0), this.position = 0, this.endianness = null == i ? a.LITTLE_ENDIAN : i
		};
		a.prototype = {}, a.prototype.getPosition = function() {
			return this.position
		}, a.prototype._realloc = function(t) {
			if (this._dynamicSize) {
				var e = this._byteOffset + this.position + t,
					i = this._buffer.byteLength;
				if (e <= i) e > this._byteLength && (this._byteLength = e);
				else {
					for (i < 1 && (i = 1); e > i;) i *= 2;
					var r = new ArrayBuffer(i),
						n = new Uint8Array(this._buffer);
					new Uint8Array(r, 0, n.length).set(n), this.buffer = r, this._byteLength = e
				}
			}
		}, a.prototype._trimAlloc = function() {
			if (this._byteLength != this._buffer.byteLength) {
				var t = new ArrayBuffer(this._byteLength),
					e = new Uint8Array(t),
					i = new Uint8Array(this._buffer, 0, e.length);
				e.set(i), this.buffer = t
			}
		}, a.BIG_ENDIAN = !1, a.LITTLE_ENDIAN = !0, a.prototype._byteLength = 0, Object.defineProperty(a.prototype, "byteLength", {
			get: function() {
				return this._byteLength - this._byteOffset
			}
		}), Object.defineProperty(a.prototype, "buffer", {
			get: function() {
				return this._trimAlloc(), this._buffer
			},
			set: function(t) {
				this._buffer = t, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
			}
		}), Object.defineProperty(a.prototype, "byteOffset", {
			get: function() {
				return this._byteOffset
			},
			set: function(t) {
				this._byteOffset = t, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._buffer.byteLength
			}
		}), Object.defineProperty(a.prototype, "dataView", {
			get: function() {
				return this._dataView
			},
			set: function(t) {
				this._byteOffset = t.byteOffset, this._buffer = t.buffer, this._dataView = new DataView(this._buffer, this._byteOffset), this._byteLength = this._byteOffset + t.byteLength
			}
		}), a.prototype.seek = function(t) {
			var e = Math.max(0, Math.min(this.byteLength, t));
			this.position = isNaN(e) || !isFinite(e) ? 0 : e
		}, a.prototype.isEof = function() {
			return this.position >= this._byteLength
		}, a.prototype.mapUint8Array = function(t) {
			this._realloc(1 * t);
			var e = new Uint8Array(this._buffer, this.byteOffset + this.position, t);
			return this.position += 1 * t, e
		}, a.prototype.readInt32Array = function(t, e) {
			t = null == t ? this.byteLength - this.position / 4 : t;
			var i = new Int32Array(t);
			return a.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), a.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
		}, a.prototype.readInt16Array = function(t, e) {
			t = null == t ? this.byteLength - this.position / 2 : t;
			var i = new Int16Array(t);
			return a.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), a.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
		}, a.prototype.readInt8Array = function(t) {
			t = null == t ? this.byteLength - this.position : t;
			var e = new Int8Array(t);
			return a.memcpy(e.buffer, 0, this.buffer, this.byteOffset + this.position, t * e.BYTES_PER_ELEMENT), this.position += e.byteLength, e
		}, a.prototype.readUint32Array = function(t, e) {
			t = null == t ? this.byteLength - this.position / 4 : t;
			var i = new Uint32Array(t);
			return a.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), a.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
		}, a.prototype.readUint16Array = function(t, e) {
			t = null == t ? this.byteLength - this.position / 2 : t;
			var i = new Uint16Array(t);
			return a.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), a.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
		}, a.prototype.readUint8Array = function(t) {
			t = null == t ? this.byteLength - this.position : t;
			var e = new Uint8Array(t);
			return a.memcpy(e.buffer, 0, this.buffer, this.byteOffset + this.position, t * e.BYTES_PER_ELEMENT), this.position += e.byteLength, e
		}, a.prototype.readFloat64Array = function(t, e) {
			t = null == t ? this.byteLength - this.position / 8 : t;
			var i = new Float64Array(t);
			return a.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), a.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
		}, a.prototype.readFloat32Array = function(t, e) {
			t = null == t ? this.byteLength - this.position / 4 : t;
			var i = new Float32Array(t);
			return a.memcpy(i.buffer, 0, this.buffer, this.byteOffset + this.position, t * i.BYTES_PER_ELEMENT), a.arrayToNative(i, null == e ? this.endianness : e), this.position += i.byteLength, i
		}, a.prototype.readInt32 = function(t) {
			var e = this._dataView.getInt32(this.position, null == t ? this.endianness : t);
			return this.position += 4, e
		}, a.prototype.readInt16 = function(t) {
			var e = this._dataView.getInt16(this.position, null == t ? this.endianness : t);
			return this.position += 2, e
		}, a.prototype.readInt8 = function() {
			var t = this._dataView.getInt8(this.position);
			return this.position += 1, t
		}, a.prototype.readUint32 = function(t) {
			var e = this._dataView.getUint32(this.position, null == t ? this.endianness : t);
			return this.position += 4, e
		}, a.prototype.readUint16 = function(t) {
			var e = this._dataView.getUint16(this.position, null == t ? this.endianness : t);
			return this.position += 2, e
		}, a.prototype.readUint8 = function() {
			var t = this._dataView.getUint8(this.position);
			return this.position += 1, t
		}, a.prototype.readFloat32 = function(t) {
			var e = this._dataView.getFloat32(this.position, null == t ? this.endianness : t);
			return this.position += 4, e
		}, a.prototype.readFloat64 = function(t) {
			var e = this._dataView.getFloat64(this.position, null == t ? this.endianness : t);
			return this.position += 8, e
		}, a.endianness = new Int8Array(new Int16Array([1]).buffer)[0] > 0, a.memcpy = function(t, e, i, r, n) {
			var s = new Uint8Array(t, e, n),
				a = new Uint8Array(i, r, n);
			s.set(a)
		}, a.arrayToNative = function(t, e) {
			return e == this.endianness ? t : this.flipArrayEndianness(t)
		}, a.nativeToEndian = function(t, e) {
			return this.endianness == e ? t : this.flipArrayEndianness(t)
		}, a.flipArrayEndianness = function(t) {
			for (var e = new Uint8Array(t.buffer, t.byteOffset, t.byteLength), i = 0; i < t.byteLength; i += t.BYTES_PER_ELEMENT)
				for (var r = i + t.BYTES_PER_ELEMENT - 1, n = i; r > n; r--, n++) {
					var s = e[n];
					e[n] = e[r], e[r] = s
				}
			return t
		}, a.prototype.failurePosition = 0, String.fromCharCodeUint8 = function(t) {
			for (var e = [], i = 0; i < t.length; i++) e[i] = t[i];
			return String.fromCharCode.apply(null, e)
		}, a.prototype.readString = function(t, e) {
			return null == e || "ASCII" == e ? String.fromCharCodeUint8.apply(null, [this.mapUint8Array(null == t ? this.byteLength - this.position : t)]) : new TextDecoder(e).decode(this.mapUint8Array(t))
		}, a.prototype.readCString = function(t) {
			var e = this.byteLength - this.position,
				i = new Uint8Array(this._buffer, this._byteOffset + this.position),
				r = e;
			null != t && (r = Math.min(t, e));
			for (var n = 0; n < r && 0 !== i[n]; n++);
			var s = String.fromCharCodeUint8.apply(null, [this.mapUint8Array(n)]);
			return null != t ? this.position += r - n : n != e && (this.position += 1), s
		};
		var o = Math.pow(2, 32);
		a.prototype.readInt64 = function() {
			return this.readInt32() * o + this.readUint32()
		}, a.prototype.readUint64 = function() {
			return this.readUint32() * o + this.readUint32()
		}, a.prototype.readInt64 = function() {
			return this.readUint32() * o + this.readUint32()
		}, a.prototype.readUint24 = function() {
			return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8()
		}, t.DataStream = a, a.prototype.save = function(t) {
			var e = new Blob([this.buffer]);
			if (!window.URL || !URL.createObjectURL) throw "DataStream.save: Can't create object URL.";
			var i = window.URL.createObjectURL(e),
				r = document.createElement("a");
			document.body.appendChild(r), r.setAttribute("href", i), r.setAttribute("download", t), r.setAttribute("target", "_self"), r.click(), window.URL.revokeObjectURL(i)
		}, a.prototype._dynamicSize = !0, Object.defineProperty(a.prototype, "dynamicSize", {
			get: function() {
				return this._dynamicSize
			},
			set: function(t) {
				t || this._trimAlloc(), this._dynamicSize = t
			}
		}), a.prototype.shift = function(t) {
			var e = new ArrayBuffer(this._byteLength - t),
				i = new Uint8Array(e),
				r = new Uint8Array(this._buffer, t, i.length);
			i.set(r), this.buffer = e, this.position -= t
		}, a.prototype.writeInt32Array = function(t, e) {
			if (this._realloc(4 * t.length), t instanceof Int32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) a.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt32Array(t.length, e);
			else
				for (var i = 0; i < t.length; i++) this.writeInt32(t[i], e)
		}, a.prototype.writeInt16Array = function(t, e) {
			if (this._realloc(2 * t.length), t instanceof Int16Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) a.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt16Array(t.length, e);
			else
				for (var i = 0; i < t.length; i++) this.writeInt16(t[i], e)
		}, a.prototype.writeInt8Array = function(t) {
			if (this._realloc(1 * t.length), t instanceof Int8Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) a.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapInt8Array(t.length);
			else
				for (var e = 0; e < t.length; e++) this.writeInt8(t[e])
		}, a.prototype.writeUint32Array = function(t, e) {
			if (this._realloc(4 * t.length), t instanceof Uint32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) a.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint32Array(t.length, e);
			else
				for (var i = 0; i < t.length; i++) this.writeUint32(t[i], e)
		}, a.prototype.writeUint16Array = function(t, e) {
			if (this._realloc(2 * t.length), t instanceof Uint16Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) a.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint16Array(t.length, e);
			else
				for (var i = 0; i < t.length; i++) this.writeUint16(t[i], e)
		}, a.prototype.writeUint8Array = function(t) {
			if (this._realloc(1 * t.length), t instanceof Uint8Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) a.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapUint8Array(t.length);
			else
				for (var e = 0; e < t.length; e++) this.writeUint8(t[e])
		}, a.prototype.writeFloat64Array = function(t, e) {
			if (this._realloc(8 * t.length), t instanceof Float64Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) a.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapFloat64Array(t.length, e);
			else
				for (var i = 0; i < t.length; i++) this.writeFloat64(t[i], e)
		}, a.prototype.writeFloat32Array = function(t, e) {
			if (this._realloc(4 * t.length), t instanceof Float32Array && this.byteOffset + this.position % t.BYTES_PER_ELEMENT === 0) a.memcpy(this._buffer, this.byteOffset + this.position, t.buffer, 0, t.byteLength), this.mapFloat32Array(t.length, e);
			else
				for (var i = 0; i < t.length; i++) this.writeFloat32(t[i], e)
		}, a.prototype.writeInt32 = function(t, e) {
			this._realloc(4), this._dataView.setInt32(this.position, t, null == e ? this.endianness : e), this.position += 4
		}, a.prototype.writeInt16 = function(t, e) {
			this._realloc(2), this._dataView.setInt16(this.position, t, null == e ? this.endianness : e), this.position += 2
		}, a.prototype.writeInt8 = function(t) {
			this._realloc(1), this._dataView.setInt8(this.position, t), this.position += 1
		}, a.prototype.writeUint32 = function(t, e) {
			this._realloc(4), this._dataView.setUint32(this.position, t, null == e ? this.endianness : e), this.position += 4
		}, a.prototype.writeUint16 = function(t, e) {
			this._realloc(2), this._dataView.setUint16(this.position, t, null == e ? this.endianness : e), this.position += 2
		}, a.prototype.writeUint8 = function(t) {
			this._realloc(1), this._dataView.setUint8(this.position, t), this.position += 1
		}, a.prototype.writeFloat32 = function(t, e) {
			this._realloc(4), this._dataView.setFloat32(this.position, t, null == e ? this.endianness : e), this.position += 4
		}, a.prototype.writeFloat64 = function(t, e) {
			this._realloc(8), this._dataView.setFloat64(this.position, t, null == e ? this.endianness : e), this.position += 8
		}, a.prototype.writeUCS2String = function(t, e, i) {
			null == i && (i = t.length);
			for (var r = 0; r < t.length && r < i; r++) this.writeUint16(t.charCodeAt(r), e);
			for (; r < i; r++) this.writeUint16(0)
		}, a.prototype.writeString = function(t, e, i) {
			var r = 0;
			if (null == e || "ASCII" == e)
				if (null != i) {
					var n = Math.min(t.length, i);
					for (r = 0; r < n; r++) this.writeUint8(t.charCodeAt(r));
					for (; r < i; r++) this.writeUint8(0)
				} else
					for (r = 0; r < t.length; r++) this.writeUint8(t.charCodeAt(r));
			else this.writeUint8Array(new TextEncoder(e).encode(t.substring(0, i)))
		}, a.prototype.writeCString = function(t, e) {
			var i = 0;
			if (null != e) {
				var r = Math.min(t.length, e);
				for (i = 0; i < r; i++) this.writeUint8(t.charCodeAt(i));
				for (; i < e; i++) this.writeUint8(0)
			} else {
				for (i = 0; i < t.length; i++) this.writeUint8(t.charCodeAt(i));
				this.writeUint8(0)
			}
		}, a.prototype.writeStruct = function(t, e) {
			for (var i = 0; i < t.length; i += 2) {
				var r = t[i + 1];
				this.writeType(r, e[t[i]], e)
			}
		}, a.prototype.writeType = function(t, e, i) {
			var r;
			if ("function" == typeof t) return t(this, e);
			if ("object" == typeof t && !(t instanceof Array)) return t.set(this, e, i);
			var n = null,
				s = "ASCII",
				o = this.position;
			switch ("string" == typeof t && /:/.test(t) && (r = t.split(":"), t = r[0], n = parseInt(r[1])), "string" == typeof t && /,/.test(t) && (r = t.split(","), t = r[0], s = parseInt(r[1])), t) {
				case "uint8":
					this.writeUint8(e);
					break;
				case "int8":
					this.writeInt8(e);
					break;
				case "uint16":
					this.writeUint16(e, this.endianness);
					break;
				case "int16":
					this.writeInt16(e, this.endianness);
					break;
				case "uint32":
					this.writeUint32(e, this.endianness);
					break;
				case "int32":
					this.writeInt32(e, this.endianness);
					break;
				case "float32":
					this.writeFloat32(e, this.endianness);
					break;
				case "float64":
					this.writeFloat64(e, this.endianness);
					break;
				case "uint16be":
					this.writeUint16(e, a.BIG_ENDIAN);
					break;
				case "int16be":
					this.writeInt16(e, a.BIG_ENDIAN);
					break;
				case "uint32be":
					this.writeUint32(e, a.BIG_ENDIAN);
					break;
				case "int32be":
					this.writeInt32(e, a.BIG_ENDIAN);
					break;
				case "float32be":
					this.writeFloat32(e, a.BIG_ENDIAN);
					break;
				case "float64be":
					this.writeFloat64(e, a.BIG_ENDIAN);
					break;
				case "uint16le":
					this.writeUint16(e, a.LITTLE_ENDIAN);
					break;
				case "int16le":
					this.writeInt16(e, a.LITTLE_ENDIAN);
					break;
				case "uint32le":
					this.writeUint32(e, a.LITTLE_ENDIAN);
					break;
				case "int32le":
					this.writeInt32(e, a.LITTLE_ENDIAN);
					break;
				case "float32le":
					this.writeFloat32(e, a.LITTLE_ENDIAN);
					break;
				case "float64le":
					this.writeFloat64(e, a.LITTLE_ENDIAN);
					break;
				case "cstring":
					this.writeCString(e, n);
					break;
				case "string":
					this.writeString(e, s, n);
					break;
				case "u16string":
					this.writeUCS2String(e, this.endianness, n);
					break;
				case "u16stringle":
					this.writeUCS2String(e, a.LITTLE_ENDIAN, n);
					break;
				case "u16stringbe":
					this.writeUCS2String(e, a.BIG_ENDIAN, n);
					break;
				default:
					if (3 == t.length) {
						for (var l = t[1], h = 0; h < e.length; h++) this.writeType(l, e[h]);
						break
					}
					this.writeStruct(t, e)
			}
			null != n && (this.position = o, this._realloc(n), this.position = o + n)
		}, a.prototype.writeUint64 = function(t) {
			var e = Math.floor(t / o);
			this.writeUint32(e), this.writeUint32(4294967295 & t)
		}, a.prototype.writeUint24 = function(t) {
			this.writeUint8((16711680 & t) >> 16), this.writeUint8((65280 & t) >> 8), this.writeUint8(255 & t)
		}, a.prototype.adjustUint32 = function(t, e) {
			var i = this.position;
			this.seek(t), this.writeUint32(e), this.seek(i)
		}, a.prototype.mapInt32Array = function(t, e) {
			this._realloc(4 * t);
			var i = new Int32Array(this._buffer, this.byteOffset + this.position, t);
			return a.arrayToNative(i, null == e ? this.endianness : e), this.position += 4 * t, i
		}, a.prototype.mapInt16Array = function(t, e) {
			this._realloc(2 * t);
			var i = new Int16Array(this._buffer, this.byteOffset + this.position, t);
			return a.arrayToNative(i, null == e ? this.endianness : e), this.position += 2 * t, i
		}, a.prototype.mapInt8Array = function(t) {
			this._realloc(1 * t);
			var e = new Int8Array(this._buffer, this.byteOffset + this.position, t);
			return this.position += 1 * t, e
		}, a.prototype.mapUint32Array = function(t, e) {
			this._realloc(4 * t);
			var i = new Uint32Array(this._buffer, this.byteOffset + this.position, t);
			return a.arrayToNative(i, null == e ? this.endianness : e), this.position += 4 * t, i
		}, a.prototype.mapUint16Array = function(t, e) {
			this._realloc(2 * t);
			var i = new Uint16Array(this._buffer, this.byteOffset + this.position, t);
			return a.arrayToNative(i, null == e ? this.endianness : e), this.position += 2 * t, i
		}, a.prototype.mapFloat64Array = function(t, e) {
			this._realloc(8 * t);
			var i = new Float64Array(this._buffer, this.byteOffset + this.position, t);
			return a.arrayToNative(i, null == e ? this.endianness : e), this.position += 8 * t, i
		}, a.prototype.mapFloat32Array = function(t, e) {
			this._realloc(4 * t);
			var i = new Float32Array(this._buffer, this.byteOffset + this.position, t);
			return a.arrayToNative(i, null == e ? this.endianness : e), this.position += 4 * t, i
		};
		var l = function(t) {
			this.buffers = [], this.bufferIndex = -1, t && (this.insertBuffer(t), this.bufferIndex = 0)
		};
		(l.prototype = new a(new ArrayBuffer, 0, a.BIG_ENDIAN)).initialized = function() {
			var t;
			return this.bufferIndex > -1 || (this.buffers.length > 0 ? 0 === (t = this.buffers[0]).fileStart ? (this.buffer = t, this.bufferIndex = 0, n.debug("MultiBufferStream", "Stream ready for parsing"), !0) : (n.warn("MultiBufferStream", "The first buffer should have a fileStart of 0"), this.logBufferLevel(), !1) : (n.warn("MultiBufferStream", "No buffer to start parsing from"), this.logBufferLevel(), !1))
		}, ArrayBuffer.concat = function(t, e) {
			n.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (t.byteLength + e.byteLength));
			var i = new Uint8Array(t.byteLength + e.byteLength);
			return i.set(new Uint8Array(t), 0), i.set(new Uint8Array(e), t.byteLength), i.buffer
		}, l.prototype.reduceBuffer = function(t, e, i) {
			var r;
			return (r = new Uint8Array(i)).set(new Uint8Array(t, e, i)), r.buffer.fileStart = t.fileStart + e, r.buffer.usedBytes = 0, r.buffer
		}, l.prototype.insertBuffer = function(t) {
			for (var e = !0, i = 0; i < this.buffers.length; i++) {
				var r = this.buffers[i];
				if (t.fileStart <= r.fileStart) {
					if (t.fileStart === r.fileStart) {
						if (t.byteLength > r.byteLength) {
							this.buffers.splice(i, 1), i--;
							continue
						}
						n.warn("MultiBufferStream", "Buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ") already appended, ignoring")
					} else t.fileStart + t.byteLength <= r.fileStart || (t = this.reduceBuffer(t, 0, r.fileStart - t.fileStart)), n.debug("MultiBufferStream", "Appending new buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ")"), this.buffers.splice(i, 0, t), 0 === i && (this.buffer = t);
					e = !1;
					break
				}
				if (t.fileStart < r.fileStart + r.byteLength) {
					var s = r.fileStart + r.byteLength - t.fileStart,
						a = t.byteLength - s;
					if (!(a > 0)) {
						e = !1;
						break
					}
					t = this.reduceBuffer(t, s, a)
				}
			}
			e && (n.debug("MultiBufferStream", "Appending new buffer (fileStart: " + t.fileStart + " - Length: " + t.byteLength + ")"), this.buffers.push(t), 0 === i && (this.buffer = t))
		}, l.prototype.logBufferLevel = function(t) {
			var e, i, r, s, a, o = [],
				l = "";
			for (r = 0, s = 0, e = 0; e < this.buffers.length; e++) i = this.buffers[e], 0 === e ? (a = {}, o.push(a), a.start = i.fileStart, a.end = i.fileStart + i.byteLength, l += "[" + a.start + "-") : a.end === i.fileStart ? a.end = i.fileStart + i.byteLength : ((a = {}).start = i.fileStart, l += o[o.length - 1].end - 1 + "], [" + a.start + "-", a.end = i.fileStart + i.byteLength, o.push(a)), r += i.usedBytes, s += i.byteLength;
			o.length > 0 && (l += a.end - 1 + "]");
			var h = t ? n.info : n.debug;
			0 === this.buffers.length ? h("MultiBufferStream", "No more buffer in memory") : h("MultiBufferStream", this.buffers.length + " stored buffer(s) (" + r + "/" + s + " bytes), continuous ranges: " + l)
		}, l.prototype.cleanBuffers = function() {
			var t, e;
			for (t = 0; t < this.buffers.length; t++)(e = this.buffers[t]).usedBytes === e.byteLength && (n.debug("MultiBufferStream", "Removing buffer #" + t), this.buffers.splice(t, 1), t--)
		}, l.prototype.mergeNextBuffer = function() {
			var t;
			if (this.bufferIndex + 1 < this.buffers.length) {
				if ((t = this.buffers[this.bufferIndex + 1]).fileStart === this.buffer.fileStart + this.buffer.byteLength) {
					var e = this.buffer.byteLength,
						i = this.buffer.usedBytes,
						r = this.buffer.fileStart;
					return this.buffers[this.bufferIndex] = ArrayBuffer.concat(this.buffer, t), this.buffer = this.buffers[this.bufferIndex], this.buffers.splice(this.bufferIndex + 1, 1), this.buffer.usedBytes = i, this.buffer.fileStart = r, n.debug("ISOFile", "Concatenating buffer for box parsing (length: " + e + "->" + this.buffer.byteLength + ")"), !0
				}
				return !1
			}
			return !1
		}, l.prototype.findPosition = function(t, e, i) {
			var r, s = null,
				a = -1;
			for (r = !0 === t ? 0 : this.bufferIndex; r < this.buffers.length && (s = this.buffers[r]).fileStart <= e;) a = r, i && (s.fileStart + s.byteLength <= e ? s.usedBytes = s.byteLength : s.usedBytes = e - s.fileStart, this.logBufferLevel()), r++;
			return -1 !== a && (s = this.buffers[a]).fileStart + s.byteLength >= e ? (n.debug("MultiBufferStream", "Found position in existing buffer #" + a), a) : -1
		}, l.prototype.findEndContiguousBuf = function(t) {
			var e, i, r, n = void 0 !== t ? t : this.bufferIndex;
			if (i = this.buffers[n], this.buffers.length > n + 1)
				for (e = n + 1; e < this.buffers.length && (r = this.buffers[e]).fileStart === i.fileStart + i.byteLength; e++) i = r;
			return i.fileStart + i.byteLength
		}, l.prototype.getEndFilePositionAfter = function(t) {
			var e = this.findPosition(!0, t, !1);
			return -1 !== e ? this.findEndContiguousBuf(e) : t
		}, l.prototype.addUsedBytes = function(t) {
			this.buffer.usedBytes += t, this.logBufferLevel()
		}, l.prototype.setAllUsedBytes = function() {
			this.buffer.usedBytes = this.buffer.byteLength, this.logBufferLevel()
		}, l.prototype.seek = function(t, e, i) {
			var r;
			return -1 !== (r = this.findPosition(e, t, i)) ? (this.buffer = this.buffers[r], this.bufferIndex = r, this.position = t - this.buffer.fileStart, n.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position), !0) : (n.debug("MultiBufferStream", "Position " + t + " not found in buffered data"), !1)
		}, l.prototype.getPosition = function() {
			if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
			return this.buffers[this.bufferIndex].fileStart + this.position
		}, l.prototype.getLength = function() {
			return this.byteLength
		}, l.prototype.getEndPosition = function() {
			if (-1 === this.bufferIndex || null === this.buffers[this.bufferIndex]) throw "Error accessing position in the MultiBufferStream";
			return this.buffers[this.bufferIndex].fileStart + this.byteLength
		}, t.MultiBufferStream = l;
		var h = function() {
			var t = [];
			t[3] = "ES_Descriptor", t[4] = "DecoderConfigDescriptor", t[5] = "DecoderSpecificInfo", t[6] = "SLConfigDescriptor", this.getDescriptorName = function(e) {
				return t[e]
			};
			var e = this,
				i = {};
			return this.parseOneDescriptor = function(e) {
				var r, s, a, o = 0;
				for (r = e.readUint8(), a = e.readUint8(); 128 & a;) o = (127 & a) << 7, a = e.readUint8();
				return o += 127 & a, n.debug("MPEG4DescriptorParser", "Found " + (t[r] || "Descriptor " + r) + ", size " + o + " at position " + e.getPosition()), (s = t[r] ? new i[t[r]](o) : new i.Descriptor(o)).parse(e), s
			}, i.Descriptor = function(t, e) {
				this.tag = t, this.size = e, this.descs = []
			}, i.Descriptor.prototype.parse = function(t) {
				this.data = t.readUint8Array(this.size)
			}, i.Descriptor.prototype.findDescriptor = function(t) {
				for (var e = 0; e < this.descs.length; e++)
					if (this.descs[e].tag == t) return this.descs[e];
				return null
			}, i.Descriptor.prototype.parseRemainingDescriptors = function(t) {
				for (var i = t.position; t.position < i + this.size;) {
					var r = e.parseOneDescriptor(t);
					this.descs.push(r)
				}
			}, i.ES_Descriptor = function(t) {
				i.Descriptor.call(this, 3, t)
			}, i.ES_Descriptor.prototype = new i.Descriptor, i.ES_Descriptor.prototype.parse = function(t) {
				if (this.ES_ID = t.readUint16(), this.flags = t.readUint8(), this.size -= 3, 128 & this.flags ? (this.dependsOn_ES_ID = t.readUint16(), this.size -= 2) : this.dependsOn_ES_ID = 0, 64 & this.flags) {
					var e = t.readUint8();
					this.URL = t.readString(e), this.size -= e + 1
				} else this.URL = "";
				32 & this.flags ? (this.OCR_ES_ID = t.readUint16(), this.size -= 2) : this.OCR_ES_ID = 0, this.parseRemainingDescriptors(t)
			}, i.ES_Descriptor.prototype.getOTI = function(t) {
				var e = this.findDescriptor(4);
				return e ? e.oti : 0
			}, i.ES_Descriptor.prototype.getAudioConfig = function(t) {
				var e = this.findDescriptor(4);
				if (!e) return null;
				var i = e.findDescriptor(5);
				if (i && i.data) {
					var r = (248 & i.data[0]) >> 3;
					return 31 === r && i.data.length >= 2 && (r = 32 + ((7 & i.data[0]) << 3) + ((224 & i.data[1]) >> 5)), r
				}
				return null
			}, i.DecoderConfigDescriptor = function(t) {
				i.Descriptor.call(this, 4, t)
			}, i.DecoderConfigDescriptor.prototype = new i.Descriptor, i.DecoderConfigDescriptor.prototype.parse = function(t) {
				this.oti = t.readUint8(), this.streamType = t.readUint8(), this.bufferSize = t.readUint24(), this.maxBitrate = t.readUint32(), this.avgBitrate = t.readUint32(), this.size -= 13, this.parseRemainingDescriptors(t)
			}, i.DecoderSpecificInfo = function(t) {
				i.Descriptor.call(this, 5, t)
			}, i.DecoderSpecificInfo.prototype = new i.Descriptor, i.SLConfigDescriptor = function(t) {
				i.Descriptor.call(this, 6, t)
			}, i.SLConfigDescriptor.prototype = new i.Descriptor, this
		};
		t.MPEG4DescriptorParser = h;
		var d = {
			ERR_INVALID_DATA: -1,
			ERR_NOT_ENOUGH_DATA: 0,
			OK: 1,
			BASIC_BOXES: ["mdat", "idat", "free", "skip", "meco", "strk"],
			FULL_BOXES: ["hmhd", "nmhd", "iods", "xml ", "bxml", "ipro", "mere"],
			CONTAINER_BOXES: [
				["moov", ["trak", "pssh"]],
				["trak"],
				["edts"],
				["mdia"],
				["minf"],
				["dinf"],
				["stbl", ["sgpd", "sbgp"]],
				["mvex", ["trex"]],
				["moof", ["traf"]],
				["traf", ["trun", "sgpd", "sbgp"]],
				["vttc"],
				["tref"],
				["iref"],
				["mfra", ["tfra"]],
				["meco"],
				["hnti"],
				["hinf"],
				["strk"],
				["strd"],
				["sinf"],
				["rinf"],
				["schi"],
				["trgr"],
				["udta", ["kind"]],
				["iprp", ["ipma"]],
				["ipco"]
			],
			boxCodes: [],
			fullBoxCodes: [],
			containerBoxCodes: [],
			sampleEntryCodes: {},
			sampleGroupEntryCodes: [],
			trackGroupTypes: [],
			UUIDBoxes: {},
			UUIDs: [],
			initialize: function() {
				d.FullBox.prototype = new d.Box, d.ContainerBox.prototype = new d.Box, d.SampleEntry.prototype = new d.Box, d.TrackGroupTypeBox.prototype = new d.FullBox, d.BASIC_BOXES.forEach((function(t) {
					d.createBoxCtor(t)
				})), d.FULL_BOXES.forEach((function(t) {
					d.createFullBoxCtor(t)
				})), d.CONTAINER_BOXES.forEach((function(t) {
					d.createContainerBoxCtor(t[0], null, t[1])
				}))
			},
			Box: function(t, e, i) {
				this.type = t, this.size = e, this.uuid = i
			},
			FullBox: function(t, e, i) {
				d.Box.call(this, t, e, i), this.flags = 0, this.version = 0
			},
			ContainerBox: function(t, e, i) {
				d.Box.call(this, t, e, i), this.boxes = []
			},
			SampleEntry: function(t, e, i, r) {
				d.ContainerBox.call(this, t, e), this.hdr_size = i, this.start = r
			},
			SampleGroupEntry: function(t) {
				this.grouping_type = t
			},
			TrackGroupTypeBox: function(t, e) {
				d.FullBox.call(this, t, e)
			},
			createBoxCtor: function(t, e) {
				d.boxCodes.push(t), d[t + "Box"] = function(e) {
					d.Box.call(this, t, e)
				}, d[t + "Box"].prototype = new d.Box, e && (d[t + "Box"].prototype.parse = e)
			},
			createFullBoxCtor: function(t, e) {
				d[t + "Box"] = function(e) {
					d.FullBox.call(this, t, e)
				}, d[t + "Box"].prototype = new d.FullBox, d[t + "Box"].prototype.parse = function(t) {
					this.parseFullHeader(t), e && e.call(this, t)
				}
			},
			addSubBoxArrays: function(t) {
				if (t) {
					this.subBoxNames = t;
					for (var e = t.length, i = 0; i < e; i++) this[t[i] + "s"] = []
				}
			},
			createContainerBoxCtor: function(t, e, i) {
				d[t + "Box"] = function(e) {
					d.ContainerBox.call(this, t, e), d.addSubBoxArrays.call(this, i)
				}, d[t + "Box"].prototype = new d.ContainerBox, e && (d[t + "Box"].prototype.parse = e)
			},
			createMediaSampleEntryCtor: function(t, e, i) {
				d.sampleEntryCodes[t] = [], d[t + "SampleEntry"] = function(t, e) {
					d.SampleEntry.call(this, t, e), d.addSubBoxArrays.call(this, i)
				}, d[t + "SampleEntry"].prototype = new d.SampleEntry, e && (d[t + "SampleEntry"].prototype.parse = e)
			},
			createSampleEntryCtor: function(t, e, i, r) {
				d.sampleEntryCodes[t].push(e), d[e + "SampleEntry"] = function(i) {
					d[t + "SampleEntry"].call(this, e, i), d.addSubBoxArrays.call(this, r)
				}, d[e + "SampleEntry"].prototype = new d[t + "SampleEntry"], i && (d[e + "SampleEntry"].prototype.parse = i)
			},
			createEncryptedSampleEntryCtor: function(t, e, i) {
				d.createSampleEntryCtor.call(this, t, e, i, ["sinf"])
			},
			createSampleGroupCtor: function(t, e) {
				d[t + "SampleGroupEntry"] = function(e) {
					d.SampleGroupEntry.call(this, t, e)
				}, d[t + "SampleGroupEntry"].prototype = new d.SampleGroupEntry, e && (d[t + "SampleGroupEntry"].prototype.parse = e)
			},
			createTrackGroupCtor: function(t, e) {
				d[t + "TrackGroupTypeBox"] = function(e) {
					d.TrackGroupTypeBox.call(this, t, e)
				}, d[t + "TrackGroupTypeBox"].prototype = new d.TrackGroupTypeBox, e && (d[t + "TrackGroupTypeBox"].prototype.parse = e)
			},
			createUUIDBox: function(t, e, i, r) {
				d.UUIDs.push(t), d.UUIDBoxes[t] = function(r) {
					e ? d.FullBox.call(this, "uuid", r, t) : i ? d.ContainerBox.call(this, "uuid", r, t) : d.Box.call(this, "uuid", r, t)
				}, d.UUIDBoxes[t].prototype = e ? new d.FullBox : i ? new d.ContainerBox : new d.Box, r && (d.UUIDBoxes[t].prototype.parse = e ? function(t) {
					this.parseFullHeader(t), r && r.call(this, t)
				} : r)
			}
		};
		d.initialize(), d.TKHD_FLAG_ENABLED = 1, d.TKHD_FLAG_IN_MOVIE = 2, d.TKHD_FLAG_IN_PREVIEW = 4, d.TFHD_FLAG_BASE_DATA_OFFSET = 1, d.TFHD_FLAG_SAMPLE_DESC = 2, d.TFHD_FLAG_SAMPLE_DUR = 8, d.TFHD_FLAG_SAMPLE_SIZE = 16, d.TFHD_FLAG_SAMPLE_FLAGS = 32, d.TFHD_FLAG_DUR_EMPTY = 65536, d.TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072, d.TRUN_FLAGS_DATA_OFFSET = 1, d.TRUN_FLAGS_FIRST_FLAG = 4, d.TRUN_FLAGS_DURATION = 256, d.TRUN_FLAGS_SIZE = 512, d.TRUN_FLAGS_FLAGS = 1024, d.TRUN_FLAGS_CTS_OFFSET = 2048, d.Box.prototype.add = function(t) {
			return this.addBox(new d[t + "Box"])
		}, d.Box.prototype.addBox = function(t) {
			return this.boxes.push(t), this[t.type + "s"] ? this[t.type + "s"].push(t) : this[t.type] = t, t
		}, d.Box.prototype.set = function(t, e) {
			return this[t] = e, this
		}, d.Box.prototype.addEntry = function(t, e) {
			var i = e || "entries";
			return this[i] || (this[i] = []), this[i].push(t), this
		}, t.BoxParser = d, d.parseUUID = function(t) {
			return d.parseHex16(t)
		}, d.parseHex16 = function(t) {
			for (var e = "", i = 0; i < 16; i++) {
				var r = t.readUint8().toString(16);
				e += 1 === r.length ? "0" + r : r
			}
			return e
		}, d.parseOneBox = function(t, e, i) {
			var r, s, a, o = t.getPosition(),
				l = 0;
			if (t.getEndPosition() - o < 8) return n.debug("BoxParser", "Not enough data in stream to parse the type and size of the box"), {
				code: d.ERR_NOT_ENOUGH_DATA
			};
			if (i && i < 8) return n.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box"), {
				code: d.ERR_NOT_ENOUGH_DATA
			};
			var h = t.readUint32(),
				c = t.readString(4),
				p = c;
			if (n.debug("BoxParser", "Found box of type '" + c + "' and size " + h + " at position " + o), l = 8, "uuid" == c) {
				if (t.getEndPosition() - t.getPosition() < 16 || i - l < 16) return t.seek(o), n.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box"), {
					code: d.ERR_NOT_ENOUGH_DATA
				};
				l += 16, p = a = d.parseUUID(t)
			}
			if (1 == h) {
				if (t.getEndPosition() - t.getPosition() < 8 || i && i - l < 8) return t.seek(o), n.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + c + '" box'), {
					code: d.ERR_NOT_ENOUGH_DATA
				};
				h = t.readUint64(), l += 8
			} else if (0 === h)
				if (i) h = i;
				else if ("mdat" !== c) return n.error("BoxParser", "Unlimited box size not supported for type: '" + c + "'"), r = new d.Box(c, h), {
				code: d.OK,
				box: r,
				size: r.size
			};
			return h < l ? (n.error("BoxParser", "Box of type " + c + " has an invalid size " + h + " (too small to be a box)"), {
				code: d.ERR_NOT_ENOUGH_DATA,
				type: c,
				size: h,
				hdr_size: l,
				start: o
			}) : i && h > i ? (n.error("BoxParser", "Box of type '" + c + "' has a size " + h + " greater than its container size " + i), {
				code: d.ERR_NOT_ENOUGH_DATA,
				type: c,
				size: h,
				hdr_size: l,
				start: o
			}) : o + h > t.getEndPosition() ? (t.seek(o), n.info("BoxParser", "Not enough data in stream to parse the entire '" + c + "' box"), {
				code: d.ERR_NOT_ENOUGH_DATA,
				type: c,
				size: h,
				hdr_size: l,
				start: o
			}) : e ? {
				code: d.OK,
				type: c,
				size: h,
				hdr_size: l,
				start: o
			} : (d[c + "Box"] ? r = new d[c + "Box"](h) : "uuid" !== c ? (n.warn("BoxParser", "Unknown box type: '" + c + "'"), (r = new d.Box(c, h)).has_unparsed_data = !0) : d.UUIDBoxes[a] ? r = new d.UUIDBoxes[a](h) : (n.warn("BoxParser", "Unknown uuid type: '" + a + "'"), (r = new d.Box(c, h)).uuid = a, r.has_unparsed_data = !0), r.hdr_size = l, r.start = o, r.write === d.Box.prototype.write && "mdat" !== r.type && (n.info("BoxParser", "'" + p + "' box writing not yet implemented, keeping unparsed data in memory for later write"), r.parseDataAndRewind(t)), r.parse(t), (s = t.getPosition() - (r.start + r.size)) < 0 ? (n.warn("BoxParser", "Parsing of box '" + p + "' did not read the entire indicated box data size (missing " + -s + " bytes), seeking forward"), t.seek(r.start + r.size)) : s > 0 && (n.error("BoxParser", "Parsing of box '" + p + "' read " + s + " more bytes than the indicated box data size, seeking backwards"), t.seek(r.start + r.size)), {
				code: d.OK,
				box: r,
				size: r.size
			})
		}, d.Box.prototype.parse = function(t) {
			"mdat" != this.type ? this.data = t.readUint8Array(this.size - this.hdr_size) : 0 === this.size ? t.seek(t.getEndPosition()) : t.seek(this.start + this.size)
		}, d.Box.prototype.parseDataAndRewind = function(t) {
			this.data = t.readUint8Array(this.size - this.hdr_size), t.position -= this.size - this.hdr_size
		}, d.FullBox.prototype.parseDataAndRewind = function(t) {
			this.parseFullHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 4, t.position -= this.size - this.hdr_size
		}, d.FullBox.prototype.parseFullHeader = function(t) {
			this.version = t.readUint8(), this.flags = t.readUint24(), this.hdr_size += 4
		}, d.FullBox.prototype.parse = function(t) {
			this.parseFullHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size)
		}, d.ContainerBox.prototype.parse = function(t) {
			for (var e, i; t.getPosition() < this.start + this.size;) {
				if ((e = d.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== d.OK) return;
				if (i = e.box, this.boxes.push(i), this.subBoxNames && -1 != this.subBoxNames.indexOf(i.type)) this[this.subBoxNames[this.subBoxNames.indexOf(i.type)] + "s"].push(i);
				else {
					var r = "uuid" !== i.type ? i.type : i.uuid;
					this[r] ? n.warn("Box of type " + r + " already stored in field of this type") : this[r] = i
				}
			}
		}, d.Box.prototype.parseLanguage = function(t) {
			this.language = t.readUint16();
			var e = [];
			e[0] = this.language >> 10 & 31, e[1] = this.language >> 5 & 31, e[2] = 31 & this.language, this.languageString = String.fromCharCode(e[0] + 96, e[1] + 96, e[2] + 96)
		}, d.SAMPLE_ENTRY_TYPE_VISUAL = "Visual", d.SAMPLE_ENTRY_TYPE_AUDIO = "Audio", d.SAMPLE_ENTRY_TYPE_HINT = "Hint", d.SAMPLE_ENTRY_TYPE_METADATA = "Metadata", d.SAMPLE_ENTRY_TYPE_SUBTITLE = "Subtitle", d.SAMPLE_ENTRY_TYPE_SYSTEM = "System", d.SAMPLE_ENTRY_TYPE_TEXT = "Text", d.SampleEntry.prototype.parseHeader = function(t) {
			t.readUint8Array(6), this.data_reference_index = t.readUint16(), this.hdr_size += 8
		}, d.SampleEntry.prototype.parse = function(t) {
			this.parseHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size)
		}, d.SampleEntry.prototype.parseDataAndRewind = function(t) {
			this.parseHeader(t), this.data = t.readUint8Array(this.size - this.hdr_size), this.hdr_size -= 8, t.position -= this.size - this.hdr_size
		}, d.SampleEntry.prototype.parseFooter = function(t) {
			d.ContainerBox.prototype.parse.call(this, t)
		}, d.createMediaSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_HINT), d.createMediaSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_METADATA), d.createMediaSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_SUBTITLE), d.createMediaSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_SYSTEM), d.createMediaSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_TEXT), d.createMediaSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, (function(t) {
			var e;
			this.parseHeader(t), t.readUint16(), t.readUint16(), t.readUint32Array(3), this.width = t.readUint16(), this.height = t.readUint16(), this.horizresolution = t.readUint32(), this.vertresolution = t.readUint32(), t.readUint32(), this.frame_count = t.readUint16(), e = Math.min(31, t.readUint8()), this.compressorname = t.readString(e), e < 31 && t.readString(31 - e), this.depth = t.readUint16(), t.readUint16(), this.parseFooter(t)
		})), d.createMediaSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_AUDIO, (function(t) {
			this.parseHeader(t), t.readUint32Array(2), this.channel_count = t.readUint16(), this.samplesize = t.readUint16(), t.readUint16(), t.readUint16(), this.samplerate = t.readUint32() / 65536, this.parseFooter(t)
		})), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, "avc1"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, "avc2"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, "avc3"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, "avc4"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, "av01"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, "hvc1"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, "hev1"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_AUDIO, "mp4a"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_AUDIO, "ac-3"), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_AUDIO, "ec-3"), d.createEncryptedSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_VISUAL, "encv"), d.createEncryptedSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_AUDIO, "enca"), d.createEncryptedSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_SUBTITLE, "encu"), d.createEncryptedSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_SYSTEM, "encs"), d.createEncryptedSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_TEXT, "enct"), d.createEncryptedSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_METADATA, "encm"), d.createBoxCtor("a1lx", (function(t) {
			var e = 16 * (1 + (1 & (1 & t.readUint8())));
			this.layer_size = [];
			for (var i = 0; i < 3; i++) this.layer_size[i] = 16 == e ? t.readUint16() : t.readUint32()
		})), d.createBoxCtor("a1op", (function(t) {
			this.op_index = t.readUint8()
		})), d.createFullBoxCtor("auxC", (function(t) {
			this.aux_type = t.readCString();
			var e = this.size - this.hdr_size - (this.aux_type.length + 1);
			this.aux_subtype = t.readUint8Array(e)
		})), d.createBoxCtor("av1C", (function(t) {
			var e = t.readUint8();
			if (e >> 7 & !1) n.error("av1C marker problem");
			else if (this.version = 127 & e, 1 === this.version)
				if (e = t.readUint8(), this.seq_profile = e >> 5 & 7, this.seq_level_idx_0 = 31 & e, e = t.readUint8(), this.seq_tier_0 = e >> 7 & 1, this.high_bitdepth = e >> 6 & 1, this.twelve_bit = e >> 5 & 1, this.monochrome = e >> 4 & 1, this.chroma_subsampling_x = e >> 3 & 1, this.chroma_subsampling_y = e >> 2 & 1, this.chroma_sample_position = 3 & e, e = t.readUint8(), this.reserved_1 = e >> 5 & 7, 0 === this.reserved_1) {
					if (this.initial_presentation_delay_present = e >> 4 & 1, 1 === this.initial_presentation_delay_present) this.initial_presentation_delay_minus_one = 15 & e;
					else if (this.reserved_2 = 15 & e, 0 !== this.reserved_2) return void n.error("av1C reserved_2 parsing problem");
					var i = this.size - this.hdr_size - 4;
					this.configOBUs = t.readUint8Array(i)
				} else n.error("av1C reserved_1 parsing problem");
			else n.error("av1C version " + this.version + " not supported")
		})), d.createBoxCtor("avcC", (function(t) {
			var e, i;
			for (this.configurationVersion = t.readUint8(), this.AVCProfileIndication = t.readUint8(), this.profile_compatibility = t.readUint8(), this.AVCLevelIndication = t.readUint8(), this.lengthSizeMinusOne = 3 & t.readUint8(), this.nb_SPS_nalus = 31 & t.readUint8(), i = this.size - this.hdr_size - 6, this.SPS = [], e = 0; e < this.nb_SPS_nalus; e++) this.SPS[e] = {}, this.SPS[e].length = t.readUint16(), this.SPS[e].nalu = t.readUint8Array(this.SPS[e].length), i -= 2 + this.SPS[e].length;
			for (this.nb_PPS_nalus = t.readUint8(), i--, this.PPS = [], e = 0; e < this.nb_PPS_nalus; e++) this.PPS[e] = {}, this.PPS[e].length = t.readUint16(), this.PPS[e].nalu = t.readUint8Array(this.PPS[e].length), i -= 2 + this.PPS[e].length;
			i > 0 && (this.ext = t.readUint8Array(i))
		})), d.createBoxCtor("btrt", (function(t) {
			this.bufferSizeDB = t.readUint32(), this.maxBitrate = t.readUint32(), this.avgBitrate = t.readUint32()
		})), d.createBoxCtor("clap", (function(t) {
			this.cleanApertureWidthN = t.readUint32(), this.cleanApertureWidthD = t.readUint32(), this.cleanApertureHeightN = t.readUint32(), this.cleanApertureHeightD = t.readUint32(), this.horizOffN = t.readUint32(), this.horizOffD = t.readUint32(), this.vertOffN = t.readUint32(), this.vertOffD = t.readUint32()
		})), d.createBoxCtor("clli", (function(t) {
			this.max_content_light_level = t.readUint16(), this.max_pic_average_light_level = t.readUint16()
		})), d.createFullBoxCtor("co64", (function(t) {
			var e, i;
			if (e = t.readUint32(), this.chunk_offsets = [], 0 === this.version)
				for (i = 0; i < e; i++) this.chunk_offsets.push(t.readUint64())
		})), d.createFullBoxCtor("CoLL", (function(t) {
			this.maxCLL = t.readUint16(), this.maxFALL = t.readUint16()
		})), d.createBoxCtor("colr", (function(t) {
			if (this.colour_type = t.readString(4), "nclx" === this.colour_type) {
				this.colour_primaries = t.readUint16(), this.transfer_characteristics = t.readUint16(), this.matrix_coefficients = t.readUint16();
				var e = t.readUint8();
				this.full_range_flag = e >> 7
			} else("rICC" === this.colour_type || "prof" === this.colour_type) && (this.ICC_profile = t.readUint8Array(this.size - 4))
		})), d.createFullBoxCtor("cprt", (function(t) {
			this.parseLanguage(t), this.notice = t.readCString()
		})), d.createFullBoxCtor("cslg", (function(t) {
			0 === this.version && (this.compositionToDTSShift = t.readInt32(), this.leastDecodeToDisplayDelta = t.readInt32(), this.greatestDecodeToDisplayDelta = t.readInt32(), this.compositionStartTime = t.readInt32(), this.compositionEndTime = t.readInt32())
		})), d.createFullBoxCtor("ctts", (function(t) {
			var e, i;
			if (e = t.readUint32(), this.sample_counts = [], this.sample_offsets = [], 0 === this.version)
				for (i = 0; i < e; i++) {
					this.sample_counts.push(t.readUint32());
					var r = t.readInt32();
					r < 0 && n.warn("BoxParser", "ctts box uses negative values without using version 1"), this.sample_offsets.push(r)
				} else if (1 == this.version)
					for (i = 0; i < e; i++) this.sample_counts.push(t.readUint32()), this.sample_offsets.push(t.readInt32())
		})), d.createBoxCtor("dac3", (function(t) {
			var e = t.readUint8(),
				i = t.readUint8(),
				r = t.readUint8();
			this.fscod = e >> 6, this.bsid = e >> 1 & 31, this.bsmod = (1 & e) << 2 | i >> 6 & 3, this.acmod = i >> 3 & 7, this.lfeon = i >> 2 & 1, this.bit_rate_code = 3 & i | r >> 5 & 7
		})), d.createBoxCtor("dec3", (function(t) {
			var e = t.readUint16();
			this.data_rate = e >> 3, this.num_ind_sub = 7 & e, this.ind_subs = [];
			for (var i = 0; i < this.num_ind_sub + 1; i++) {
				var r = {};
				this.ind_subs.push(r);
				var n = t.readUint8(),
					s = t.readUint8(),
					a = t.readUint8();
				r.fscod = n >> 6, r.bsid = n >> 1 & 31, r.bsmod = (1 & n) << 4 | s >> 4 & 15, r.acmod = s >> 1 & 7, r.lfeon = 1 & s, r.num_dep_sub = a >> 1 & 15, r.num_dep_sub > 0 && (r.chan_loc = (1 & a) << 8 | t.readUint8())
			}
		})), d.createFullBoxCtor("dfLa", (function(t) {
			var e = [],
				i = ["STREAMINFO", "PADDING", "APPLICATION", "SEEKTABLE", "VORBIS_COMMENT", "CUESHEET", "PICTURE", "RESERVED"];
			for (this.parseFullHeader(t);;) {
				var r = t.readUint8(),
					n = Math.min(127 & r, i.length - 1);
				if (n ? t.readUint8Array(t.readUint24()) : (t.readUint8Array(13), this.samplerate = t.readUint32() >> 12, t.readUint8Array(20)), e.push(i[n]), 128 & r) break
			}
			this.numMetadataBlocks = e.length + " (" + e.join(", ") + ")"
		})), d.createBoxCtor("dimm", (function(t) {
			this.bytessent = t.readUint64()
		})), d.createBoxCtor("dmax", (function(t) {
			this.time = t.readUint32()
		})), d.createBoxCtor("dmed", (function(t) {
			this.bytessent = t.readUint64()
		})), d.createFullBoxCtor("dref", (function(t) {
			var e, i;
			this.entries = [];
			for (var r = t.readUint32(), n = 0; n < r; n++) {
				if ((e = d.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== d.OK) return;
				i = e.box, this.entries.push(i)
			}
		})), d.createBoxCtor("drep", (function(t) {
			this.bytessent = t.readUint64()
		})), d.createFullBoxCtor("elng", (function(t) {
			this.extended_language = t.readString(this.size - this.hdr_size)
		})), d.createFullBoxCtor("elst", (function(t) {
			this.entries = [];
			for (var e = t.readUint32(), i = 0; i < e; i++) {
				var r = {};
				this.entries.push(r), 1 === this.version ? (r.segment_duration = t.readUint64(), r.media_time = t.readInt64()) : (r.segment_duration = t.readUint32(), r.media_time = t.readInt32()), r.media_rate_integer = t.readInt16(), r.media_rate_fraction = t.readInt16()
			}
		})), d.createFullBoxCtor("emsg", (function(t) {
			1 == this.version ? (this.timescale = t.readUint32(), this.presentation_time = t.readUint64(), this.event_duration = t.readUint32(), this.id = t.readUint32(), this.scheme_id_uri = t.readCString(), this.value = t.readCString()) : (this.scheme_id_uri = t.readCString(), this.value = t.readCString(), this.timescale = t.readUint32(), this.presentation_time_delta = t.readUint32(), this.event_duration = t.readUint32(), this.id = t.readUint32());
			var e = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
			1 == this.version && (e -= 4), this.message_data = t.readUint8Array(e)
		})), d.createFullBoxCtor("esds", (function(t) {
			var e = t.readUint8Array(this.size - this.hdr_size);
			if (void 0 !== h) {
				var i = new h;
				this.esd = i.parseOneDescriptor(new a(e.buffer, 0, a.BIG_ENDIAN))
			}
		})), d.createBoxCtor("fiel", (function(t) {
			this.fieldCount = t.readUint8(), this.fieldOrdering = t.readUint8()
		})), d.createBoxCtor("frma", (function(t) {
			this.data_format = t.readString(4)
		})), d.createBoxCtor("ftyp", (function(t) {
			var e = this.size - this.hdr_size;
			this.major_brand = t.readString(4), this.minor_version = t.readUint32(), e -= 8, this.compatible_brands = [];
			for (var i = 0; e >= 4;) this.compatible_brands[i] = t.readString(4), e -= 4, i++
		})), d.createFullBoxCtor("hdlr", (function(t) {
			0 === this.version && (t.readUint32(), this.handler = t.readString(4), t.readUint32Array(3), this.name = t.readString(this.size - this.hdr_size - 20), "\0" === this.name[this.name.length - 1] && (this.name = this.name.slice(0, -1)))
		})), d.createBoxCtor("hvcC", (function(t) {
			var e, i, r, n;
			this.configurationVersion = t.readUint8(), n = t.readUint8(), this.general_profile_space = n >> 6, this.general_tier_flag = (32 & n) >> 5, this.general_profile_idc = 31 & n, this.general_profile_compatibility = t.readUint32(), this.general_constraint_indicator = t.readUint8Array(6), this.general_level_idc = t.readUint8(), this.min_spatial_segmentation_idc = 4095 & t.readUint16(), this.parallelismType = 3 & t.readUint8(), this.chroma_format_idc = 3 & t.readUint8(), this.bit_depth_luma_minus8 = 7 & t.readUint8(), this.bit_depth_chroma_minus8 = 7 & t.readUint8(), this.avgFrameRate = t.readUint16(), n = t.readUint8(), this.constantFrameRate = n >> 6, this.numTemporalLayers = (13 & n) >> 3, this.temporalIdNested = (4 & n) >> 2, this.lengthSizeMinusOne = 3 & n, this.nalu_arrays = [];
			var s = t.readUint8();
			for (e = 0; e < s; e++) {
				var a = [];
				this.nalu_arrays.push(a), n = t.readUint8(), a.completeness = (128 & n) >> 7, a.nalu_type = 63 & n;
				var o = t.readUint16();
				for (i = 0; i < o; i++) {
					var l = {};
					a.push(l), r = t.readUint16(), l.data = t.readUint8Array(r)
				}
			}
		})), d.createFullBoxCtor("iinf", (function(t) {
			var e;
			0 === this.version ? this.entry_count = t.readUint16() : this.entry_count = t.readUint32(), this.item_infos = [];
			for (var i = 0; i < this.entry_count; i++) {
				if ((e = d.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== d.OK) return;
				"infe" !== e.box.type && n.error("BoxParser", "Expected 'infe' box, got " + e.box.type), this.item_infos[i] = e.box
			}
		})), d.createFullBoxCtor("iloc", (function(t) {
			var e;
			e = t.readUint8(), this.offset_size = e >> 4 & 15, this.length_size = 15 & e, e = t.readUint8(), this.base_offset_size = e >> 4 & 15, 1 === this.version || 2 === this.version ? this.index_size = 15 & e : this.index_size = 0, this.items = [];
			var i = 0;
			if (this.version < 2) i = t.readUint16();
			else {
				if (2 !== this.version) throw "version of iloc box not supported";
				i = t.readUint32()
			}
			for (var r = 0; r < i; r++) {
				var n = {};
				if (this.items.push(n), this.version < 2) n.item_ID = t.readUint16();
				else {
					if (2 !== this.version) throw "version of iloc box not supported";
					n.item_ID = t.readUint16()
				}
				switch (1 === this.version || 2 === this.version ? n.construction_method = 15 & t.readUint16() : n.construction_method = 0, n.data_reference_index = t.readUint16(), this.base_offset_size) {
					case 0:
						n.base_offset = 0;
						break;
					case 4:
						n.base_offset = t.readUint32();
						break;
					case 8:
						n.base_offset = t.readUint64();
						break;
					default:
						throw "Error reading base offset size"
				}
				var s = t.readUint16();
				n.extents = [];
				for (var a = 0; a < s; a++) {
					var o = {};
					if (n.extents.push(o), 1 === this.version || 2 === this.version) switch (this.index_size) {
						case 0:
							o.extent_index = 0;
							break;
						case 4:
							o.extent_index = t.readUint32();
							break;
						case 8:
							o.extent_index = t.readUint64();
							break;
						default:
							throw "Error reading extent index"
					}
					switch (this.offset_size) {
						case 0:
							o.extent_offset = 0;
							break;
						case 4:
							o.extent_offset = t.readUint32();
							break;
						case 8:
							o.extent_offset = t.readUint64();
							break;
						default:
							throw "Error reading extent index"
					}
					switch (this.length_size) {
						case 0:
							o.extent_length = 0;
							break;
						case 4:
							o.extent_length = t.readUint32();
							break;
						case 8:
							o.extent_length = t.readUint64();
							break;
						default:
							throw "Error reading extent index"
					}
				}
			}
		})), d.createBoxCtor("imir", (function(t) {
			var e = t.readUint8();
			this.reserved = e >> 7, this.axis = 1 & e
		})), d.createFullBoxCtor("infe", (function(t) {
			if (0 !== this.version && 1 !== this.version || (this.item_ID = t.readUint16(), this.item_protection_index = t.readUint16(), this.item_name = t.readCString(), this.content_type = t.readCString(), this.content_encoding = t.readCString()), 1 === this.version) return this.extension_type = t.readString(4), n.warn("BoxParser", "Cannot parse extension type"), void t.seek(this.start + this.size);
			this.version >= 2 && (2 === this.version ? this.item_ID = t.readUint16() : 3 === this.version && (this.item_ID = t.readUint32()), this.item_protection_index = t.readUint16(), this.item_type = t.readString(4), this.item_name = t.readCString(), "mime" === this.item_type ? (this.content_type = t.readCString(), this.content_encoding = t.readCString()) : "uri " === this.item_type && (this.item_uri_type = t.readCString()))
		})), d.createFullBoxCtor("ipma", (function(t) {
			var e, i;
			for (entry_count = t.readUint32(), this.associations = [], e = 0; e < entry_count; e++) {
				var r = {};
				this.associations.push(r), this.version < 1 ? r.id = t.readUint16() : r.id = t.readUint32();
				var n = t.readUint8();
				for (r.props = [], i = 0; i < n; i++) {
					var s = t.readUint8(),
						a = {};
					r.props.push(a), a.essential = (128 & s) >> 7 == 1, 1 & this.flags ? a.property_index = (127 & s) << 8 | t.readUint8() : a.property_index = 127 & s
				}
			}
		})), d.createFullBoxCtor("iref", (function(t) {
			var e, i;
			for (this.references = []; t.getPosition() < this.start + this.size;) {
				if ((e = d.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== d.OK) return;
				(i = 0 === this.version ? new d.SingleItemTypeReferenceBox(e.type, e.size, e.hdr_size, e.start) : new d.SingleItemTypeReferenceBoxLarge(e.type, e.size, e.hdr_size, e.start)).write === d.Box.prototype.write && "mdat" !== i.type && (n.warn("BoxParser", i.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(t)), i.parse(t), this.references.push(i)
			}
		})), d.createBoxCtor("irot", (function(t) {
			this.angle = 3 & t.readUint8()
		})), d.createFullBoxCtor("ispe", (function(t) {
			this.image_width = t.readUint32(), this.image_height = t.readUint32()
		})), d.createFullBoxCtor("kind", (function(t) {
			this.schemeURI = t.readCString(), this.value = t.readCString()
		})), d.createFullBoxCtor("leva", (function(t) {
			var e = t.readUint8();
			this.levels = [];
			for (var i = 0; i < e; i++) {
				var r = {};
				this.levels[i] = r, r.track_ID = t.readUint32();
				var s = t.readUint8();
				switch (r.padding_flag = s >> 7, r.assignment_type = 127 & s, r.assignment_type) {
					case 0:
						r.grouping_type = t.readString(4);
						break;
					case 1:
						r.grouping_type = t.readString(4), r.grouping_type_parameter = t.readUint32();
						break;
					case 2:
					case 3:
						break;
					case 4:
						r.sub_track_id = t.readUint32();
						break;
					default:
						n.warn("BoxParser", "Unknown leva assignement type")
				}
			}
		})), d.createBoxCtor("lsel", (function(t) {
			this.layer_id = t.readUint16()
		})), d.createBoxCtor("maxr", (function(t) {
			this.period = t.readUint32(), this.bytes = t.readUint32()
		})), d.createBoxCtor("mdcv", (function(t) {
			this.display_primaries = [], this.display_primaries[0] = {}, this.display_primaries[0].x = t.readUint16(), this.display_primaries[0].y = t.readUint16(), this.display_primaries[1] = {}, this.display_primaries[1].x = t.readUint16(), this.display_primaries[1].y = t.readUint16(), this.display_primaries[2] = {}, this.display_primaries[2].x = t.readUint16(), this.display_primaries[2].y = t.readUint16(), this.white_point = {}, this.white_point.x = t.readUint16(), this.white_point.y = t.readUint16(), this.max_display_mastering_luminance = t.readUint32(), this.min_display_mastering_luminance = t.readUint32()
		})), d.createFullBoxCtor("mdhd", (function(t) {
			1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.timescale = t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.timescale = t.readUint32(), this.duration = t.readUint32()), this.parseLanguage(t), t.readUint16()
		})), d.createFullBoxCtor("mehd", (function(t) {
			1 & this.flags && (n.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1"), this.version = 1), 1 == this.version ? this.fragment_duration = t.readUint64() : this.fragment_duration = t.readUint32()
		})), d.createFullBoxCtor("meta", (function(t) {
			this.boxes = [], d.ContainerBox.prototype.parse.call(this, t)
		})), d.createFullBoxCtor("mfhd", (function(t) {
			this.sequence_number = t.readUint32()
		})), d.createFullBoxCtor("mfro", (function(t) {
			this._size = t.readUint32()
		})), d.createFullBoxCtor("mvhd", (function(t) {
			1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.timescale = t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.timescale = t.readUint32(), this.duration = t.readUint32()), this.rate = t.readUint32(), this.volume = t.readUint16() >> 8, t.readUint16(), t.readUint32Array(2), this.matrix = t.readUint32Array(9), t.readUint32Array(6), this.next_track_id = t.readUint32()
		})), d.createBoxCtor("npck", (function(t) {
			this.packetssent = t.readUint32()
		})), d.createBoxCtor("nump", (function(t) {
			this.packetssent = t.readUint64()
		})), d.createFullBoxCtor("padb", (function(t) {
			var e = t.readUint32();
			this.padbits = [];
			for (var i = 0; i < Math.floor((e + 1) / 2); i++) this.padbits = t.readUint8()
		})), d.createBoxCtor("pasp", (function(t) {
			this.hSpacing = t.readUint32(), this.vSpacing = t.readUint32()
		})), d.createBoxCtor("payl", (function(t) {
			this.text = t.readString(this.size - this.hdr_size)
		})), d.createBoxCtor("payt", (function(t) {
			this.payloadID = t.readUint32();
			var e = t.readUint8();
			this.rtpmap_string = t.readString(e)
		})), d.createFullBoxCtor("pdin", (function(t) {
			var e = (this.size - this.hdr_size) / 8;
			this.rate = [], this.initial_delay = [];
			for (var i = 0; i < e; i++) this.rate[i] = t.readUint32(), this.initial_delay[i] = t.readUint32()
		})), d.createFullBoxCtor("pitm", (function(t) {
			0 === this.version ? this.item_id = t.readUint16() : this.item_id = t.readUint32()
		})), d.createFullBoxCtor("pixi", (function(t) {
			var e;
			for (this.num_channels = t.readUint8(), this.bits_per_channels = [], e = 0; e < this.num_channels; e++) this.bits_per_channels[e] = t.readUint8()
		})), d.createBoxCtor("pmax", (function(t) {
			this.bytes = t.readUint32()
		})), d.createFullBoxCtor("prft", (function(t) {
			this.ref_track_id = t.readUint32(), this.ntp_timestamp = t.readUint64(), 0 === this.version ? this.media_time = t.readUint32() : this.media_time = t.readUint64()
		})), d.createFullBoxCtor("pssh", (function(t) {
			if (this.system_id = d.parseHex16(t), this.version > 0) {
				var e = t.readUint32();
				this.kid = [];
				for (var i = 0; i < e; i++) this.kid[i] = d.parseHex16(t)
			}
			var r = t.readUint32();
			r > 0 && (this.data = t.readUint8Array(r))
		})), d.createFullBoxCtor("clef", (function(t) {
			this.width = t.readUint32(), this.height = t.readUint32()
		})), d.createFullBoxCtor("enof", (function(t) {
			this.width = t.readUint32(), this.height = t.readUint32()
		})), d.createFullBoxCtor("prof", (function(t) {
			this.width = t.readUint32(), this.height = t.readUint32()
		})), d.createContainerBoxCtor("tapt", null, ["clef", "prof", "enof"]), d.createBoxCtor("rtp ", (function(t) {
			this.descriptionformat = t.readString(4), this.sdptext = t.readString(this.size - this.hdr_size - 4)
		})), d.createFullBoxCtor("saio", (function(t) {
			1 & this.flags && (this.aux_info_type = t.readUint32(), this.aux_info_type_parameter = t.readUint32());
			var e = t.readUint32();
			this.offset = [];
			for (var i = 0; i < e; i++) 0 === this.version ? this.offset[i] = t.readUint32() : this.offset[i] = t.readUint64()
		})), d.createFullBoxCtor("saiz", (function(t) {
			1 & this.flags && (this.aux_info_type = t.readUint32(), this.aux_info_type_parameter = t.readUint32()), this.default_sample_info_size = t.readUint8();
			var e = t.readUint32();
			if (this.sample_info_size = [], 0 === this.default_sample_info_size)
				for (var i = 0; i < e; i++) this.sample_info_size[i] = t.readUint8()
		})), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_METADATA, "mett", (function(t) {
			this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
		})), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_METADATA, "metx", (function(t) {
			this.parseHeader(t), this.content_encoding = t.readCString(), this.namespace = t.readCString(), this.schema_location = t.readCString(), this.parseFooter(t)
		})), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_SUBTITLE, "sbtt", (function(t) {
			this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
		})), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_SUBTITLE, "stpp", (function(t) {
			this.parseHeader(t), this.namespace = t.readCString(), this.schema_location = t.readCString(), this.auxiliary_mime_types = t.readCString(), this.parseFooter(t)
		})), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_SUBTITLE, "stxt", (function(t) {
			this.parseHeader(t), this.content_encoding = t.readCString(), this.mime_format = t.readCString(), this.parseFooter(t)
		})), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_SUBTITLE, "tx3g", (function(t) {
			this.parseHeader(t), this.displayFlags = t.readUint32(), this.horizontal_justification = t.readInt8(), this.vertical_justification = t.readInt8(), this.bg_color_rgba = t.readUint8Array(4), this.box_record = t.readInt16Array(4), this.style_record = t.readUint8Array(12), this.parseFooter(t)
		})), d.createSampleEntryCtor(d.SAMPLE_ENTRY_TYPE_METADATA, "wvtt", (function(t) {
			this.parseHeader(t), this.parseFooter(t)
		})), d.createSampleGroupCtor("alst", (function(t) {
			var e, i = t.readUint16();
			for (this.first_output_sample = t.readUint16(), this.sample_offset = [], e = 0; e < i; e++) this.sample_offset[e] = t.readUint32();
			var r = this.description_length - 4 - 4 * i;
			for (this.num_output_samples = [], this.num_total_samples = [], e = 0; e < r / 4; e++) this.num_output_samples[e] = t.readUint16(), this.num_total_samples[e] = t.readUint16()
		})), d.createSampleGroupCtor("avll", (function(t) {
			this.layerNumber = t.readUint8(), this.accurateStatisticsFlag = t.readUint8(), this.avgBitRate = t.readUint16(), this.avgFrameRate = t.readUint16()
		})), d.createSampleGroupCtor("avss", (function(t) {
			this.subSequenceIdentifier = t.readUint16(), this.layerNumber = t.readUint8();
			var e = t.readUint8();
			this.durationFlag = e >> 7, this.avgRateFlag = e >> 6 & 1, this.durationFlag && (this.duration = t.readUint32()), this.avgRateFlag && (this.accurateStatisticsFlag = t.readUint8(), this.avgBitRate = t.readUint16(), this.avgFrameRate = t.readUint16()), this.dependency = [];
			for (var i = t.readUint8(), r = 0; r < i; r++) {
				var n = {};
				this.dependency.push(n), n.subSeqDirectionFlag = t.readUint8(), n.layerNumber = t.readUint8(), n.subSequenceIdentifier = t.readUint16()
			}
		})), d.createSampleGroupCtor("dtrt", (function(t) {
			n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
		})), d.createSampleGroupCtor("mvif", (function(t) {
			n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
		})), d.createSampleGroupCtor("prol", (function(t) {
			this.roll_distance = t.readInt16()
		})), d.createSampleGroupCtor("rap ", (function(t) {
			var e = t.readUint8();
			this.num_leading_samples_known = e >> 7, this.num_leading_samples = 127 & e
		})), d.createSampleGroupCtor("rash", (function(t) {
			if (this.operation_point_count = t.readUint16(), this.description_length !== 2 + (1 === this.operation_point_count ? 2 : 6 * this.operation_point_count) + 9) n.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length"), this.data = t.readUint8Array(this.description_length - 2);
			else {
				if (1 === this.operation_point_count) this.target_rate_share = t.readUint16();
				else {
					this.target_rate_share = [], this.available_bitrate = [];
					for (var e = 0; e < this.operation_point_count; e++) this.available_bitrate[e] = t.readUint32(), this.target_rate_share[e] = t.readUint16()
				}
				this.maximum_bitrate = t.readUint32(), this.minimum_bitrate = t.readUint32(), this.discard_priority = t.readUint8()
			}
		})), d.createSampleGroupCtor("roll", (function(t) {
			this.roll_distance = t.readInt16()
		})), d.SampleGroupEntry.prototype.parse = function(t) {
			n.warn("BoxParser", "Unknown Sample Group type: " + this.grouping_type), this.data = t.readUint8Array(this.description_length)
		}, d.createSampleGroupCtor("scif", (function(t) {
			n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
		})), d.createSampleGroupCtor("scnm", (function(t) {
			n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
		})), d.createSampleGroupCtor("seig", (function(t) {
			this.reserved = t.readUint8();
			var e = t.readUint8();
			this.crypt_byte_block = e >> 4, this.skip_byte_block = 15 & e, this.isProtected = t.readUint8(), this.Per_Sample_IV_Size = t.readUint8(), this.KID = d.parseHex16(t), this.constant_IV_size = 0, this.constant_IV = 0, 1 === this.isProtected && 0 === this.Per_Sample_IV_Size && (this.constant_IV_size = t.readUint8(), this.constant_IV = t.readUint8Array(this.constant_IV_size))
		})), d.createSampleGroupCtor("stsa", (function(t) {
			n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
		})), d.createSampleGroupCtor("sync", (function(t) {
			var e = t.readUint8();
			this.NAL_unit_type = 63 & e
		})), d.createSampleGroupCtor("tele", (function(t) {
			var e = t.readUint8();
			this.level_independently_decodable = e >> 7
		})), d.createSampleGroupCtor("tsas", (function(t) {
			n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
		})), d.createSampleGroupCtor("tscl", (function(t) {
			n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
		})), d.createSampleGroupCtor("vipr", (function(t) {
			n.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed")
		})), d.createFullBoxCtor("sbgp", (function(t) {
			this.grouping_type = t.readString(4), 1 === this.version ? this.grouping_type_parameter = t.readUint32() : this.grouping_type_parameter = 0, this.entries = [];
			for (var e = t.readUint32(), i = 0; i < e; i++) {
				var r = {};
				this.entries.push(r), r.sample_count = t.readInt32(), r.group_description_index = t.readInt32()
			}
		})), d.createFullBoxCtor("schm", (function(t) {
			this.scheme_type = t.readString(4), this.scheme_version = t.readUint32(), 1 & this.flags && (this.scheme_uri = t.readString(this.size - this.hdr_size - 8))
		})), d.createBoxCtor("sdp ", (function(t) {
			this.sdptext = t.readString(this.size - this.hdr_size)
		})), d.createFullBoxCtor("sdtp", (function(t) {
			var e, i = this.size - this.hdr_size;
			this.is_leading = [], this.sample_depends_on = [], this.sample_is_depended_on = [], this.sample_has_redundancy = [];
			for (var r = 0; r < i; r++) e = t.readUint8(), this.is_leading[r] = e >> 6, this.sample_depends_on[r] = e >> 4 & 3, this.sample_is_depended_on[r] = e >> 2 & 3, this.sample_has_redundancy[r] = 3 & e
		})), d.createFullBoxCtor("senc"), d.createFullBoxCtor("sgpd", (function(t) {
			this.grouping_type = t.readString(4), n.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type), 1 === this.version ? this.default_length = t.readUint32() : this.default_length = 0, this.version >= 2 && (this.default_group_description_index = t.readUint32()), this.entries = [];
			for (var e = t.readUint32(), i = 0; i < e; i++) {
				var r;
				r = d[this.grouping_type + "SampleGroupEntry"] ? new d[this.grouping_type + "SampleGroupEntry"](this.grouping_type) : new d.SampleGroupEntry(this.grouping_type), this.entries.push(r), 1 === this.version && 0 === this.default_length ? r.description_length = t.readUint32() : r.description_length = this.default_length, r.write === d.SampleGroupEntry.prototype.write && (n.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write"), r.data = t.readUint8Array(r.description_length), t.position -= r.description_length), r.parse(t)
			}
		})), d.createFullBoxCtor("sidx", (function(t) {
			this.reference_ID = t.readUint32(), this.timescale = t.readUint32(), 0 === this.version ? (this.earliest_presentation_time = t.readUint32(), this.first_offset = t.readUint32()) : (this.earliest_presentation_time = t.readUint64(), this.first_offset = t.readUint64()), t.readUint16(), this.references = [];
			for (var e = t.readUint16(), i = 0; i < e; i++) {
				var r = {};
				this.references.push(r);
				var n = t.readUint32();
				r.reference_type = n >> 31 & 1, r.referenced_size = 2147483647 & n, r.subsegment_duration = t.readUint32(), n = t.readUint32(), r.starts_with_SAP = n >> 31 & 1, r.SAP_type = n >> 28 & 7, r.SAP_delta_time = 268435455 & n
			}
		})), d.SingleItemTypeReferenceBox = function(t, e, i, r) {
			d.Box.call(this, t, e), this.hdr_size = i, this.start = r
		}, d.SingleItemTypeReferenceBox.prototype = new d.Box, d.SingleItemTypeReferenceBox.prototype.parse = function(t) {
			this.from_item_ID = t.readUint16();
			var e = t.readUint16();
			this.references = [];
			for (var i = 0; i < e; i++) this.references[i] = t.readUint16()
		}, d.SingleItemTypeReferenceBoxLarge = function(t, e, i, r) {
			d.Box.call(this, t, e), this.hdr_size = i, this.start = r
		}, d.SingleItemTypeReferenceBoxLarge.prototype = new d.Box, d.SingleItemTypeReferenceBoxLarge.prototype.parse = function(t) {
			this.from_item_ID = t.readUint32();
			var e = t.readUint16();
			this.references = [];
			for (var i = 0; i < e; i++) this.references[i] = t.readUint32()
		}, d.createFullBoxCtor("SmDm", (function(t) {
			this.primaryRChromaticity_x = t.readUint16(), this.primaryRChromaticity_y = t.readUint16(), this.primaryGChromaticity_x = t.readUint16(), this.primaryGChromaticity_y = t.readUint16(), this.primaryBChromaticity_x = t.readUint16(), this.primaryBChromaticity_y = t.readUint16(), this.whitePointChromaticity_x = t.readUint16(), this.whitePointChromaticity_y = t.readUint16(), this.luminanceMax = t.readUint32(), this.luminanceMin = t.readUint32()
		})), d.createFullBoxCtor("smhd", (function(t) {
			this.balance = t.readUint16(), t.readUint16()
		})), d.createFullBoxCtor("ssix", (function(t) {
			this.subsegments = [];
			for (var e = t.readUint32(), i = 0; i < e; i++) {
				var r = {};
				this.subsegments.push(r), r.ranges = [];
				for (var n = t.readUint32(), s = 0; s < n; s++) {
					var a = {};
					r.ranges.push(a), a.level = t.readUint8(), a.range_size = t.readUint24()
				}
			}
		})), d.createFullBoxCtor("stco", (function(t) {
			var e;
			if (e = t.readUint32(), this.chunk_offsets = [], 0 === this.version)
				for (var i = 0; i < e; i++) this.chunk_offsets.push(t.readUint32())
		})), d.createFullBoxCtor("stdp", (function(t) {
			var e = (this.size - this.hdr_size) / 2;
			this.priority = [];
			for (var i = 0; i < e; i++) this.priority[i] = t.readUint16()
		})), d.createFullBoxCtor("sthd"), d.createFullBoxCtor("stri", (function(t) {
			this.switch_group = t.readUint16(), this.alternate_group = t.readUint16(), this.sub_track_id = t.readUint32();
			var e = (this.size - this.hdr_size - 8) / 4;
			this.attribute_list = [];
			for (var i = 0; i < e; i++) this.attribute_list[i] = t.readUint32()
		})), d.createFullBoxCtor("stsc", (function(t) {
			var e, i;
			if (e = t.readUint32(), this.first_chunk = [], this.samples_per_chunk = [], this.sample_description_index = [], 0 === this.version)
				for (i = 0; i < e; i++) this.first_chunk.push(t.readUint32()), this.samples_per_chunk.push(t.readUint32()), this.sample_description_index.push(t.readUint32())
		})), d.createFullBoxCtor("stsd", (function(t) {
			var e, i, r, s;
			for (this.entries = [], r = t.readUint32(), e = 1; e <= r; e++) {
				if ((i = d.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== d.OK) return;
				d[i.type + "SampleEntry"] ? ((s = new d[i.type + "SampleEntry"](i.size)).hdr_size = i.hdr_size, s.start = i.start) : (n.warn("BoxParser", "Unknown sample entry type: " + i.type), s = new d.SampleEntry(i.type, i.size, i.hdr_size, i.start)), s.write === d.SampleEntry.prototype.write && (n.info("BoxParser", "SampleEntry " + s.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), s.parseDataAndRewind(t)), s.parse(t), this.entries.push(s)
			}
		})), d.createFullBoxCtor("stsg", (function(t) {
			this.grouping_type = t.readUint32();
			var e = t.readUint16();
			this.group_description_index = [];
			for (var i = 0; i < e; i++) this.group_description_index[i] = t.readUint32()
		})), d.createFullBoxCtor("stsh", (function(t) {
			var e, i;
			if (e = t.readUint32(), this.shadowed_sample_numbers = [], this.sync_sample_numbers = [], 0 === this.version)
				for (i = 0; i < e; i++) this.shadowed_sample_numbers.push(t.readUint32()), this.sync_sample_numbers.push(t.readUint32())
		})), d.createFullBoxCtor("stss", (function(t) {
			var e, i;
			if (i = t.readUint32(), 0 === this.version)
				for (this.sample_numbers = [], e = 0; e < i; e++) this.sample_numbers.push(t.readUint32())
		})), d.createFullBoxCtor("stsz", (function(t) {
			var e;
			if (this.sample_sizes = [], 0 === this.version)
				for (this.sample_size = t.readUint32(), this.sample_count = t.readUint32(), e = 0; e < this.sample_count; e++) 0 === this.sample_size ? this.sample_sizes.push(t.readUint32()) : this.sample_sizes[e] = this.sample_size
		})), d.createFullBoxCtor("stts", (function(t) {
			var e, i, r;
			if (e = t.readUint32(), this.sample_counts = [], this.sample_deltas = [], 0 === this.version)
				for (i = 0; i < e; i++) this.sample_counts.push(t.readUint32()), (r = t.readInt32()) < 0 && (n.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!"), r = 1), this.sample_deltas.push(r)
		})), d.createFullBoxCtor("stvi", (function(t) {
			var e = t.readUint32();
			this.single_view_allowed = 3 & e, this.stereo_scheme = t.readUint32();
			var i, r, n = t.readUint32();
			for (this.stereo_indication_type = t.readString(n), this.boxes = []; t.getPosition() < this.start + this.size;) {
				if ((i = d.parseOneBox(t, !1, this.size - (t.getPosition() - this.start))).code !== d.OK) return;
				r = i.box, this.boxes.push(r), this[r.type] = r
			}
		})), d.createBoxCtor("styp", (function(t) {
			d.ftypBox.prototype.parse.call(this, t)
		})), d.createFullBoxCtor("stz2", (function(t) {
			var e, i;
			if (this.sample_sizes = [], 0 === this.version)
				if (this.reserved = t.readUint24(), this.field_size = t.readUint8(), i = t.readUint32(), 4 === this.field_size)
					for (e = 0; e < i; e += 2) {
						var r = t.readUint8();
						this.sample_sizes[e] = r >> 4 & 15, this.sample_sizes[e + 1] = 15 & r
					} else if (8 === this.field_size)
						for (e = 0; e < i; e++) this.sample_sizes[e] = t.readUint8();
					else if (16 === this.field_size)
				for (e = 0; e < i; e++) this.sample_sizes[e] = t.readUint16();
			else n.error("BoxParser", "Error in length field in stz2 box")
		})), d.createFullBoxCtor("subs", (function(t) {
			var e, i, r, n;
			for (r = t.readUint32(), this.entries = [], e = 0; e < r; e++) {
				var s = {};
				if (this.entries[e] = s, s.sample_delta = t.readUint32(), s.subsamples = [], (n = t.readUint16()) > 0)
					for (i = 0; i < n; i++) {
						var a = {};
						s.subsamples.push(a), 1 == this.version ? a.size = t.readUint32() : a.size = t.readUint16(), a.priority = t.readUint8(), a.discardable = t.readUint8(), a.codec_specific_parameters = t.readUint32()
					}
			}
		})), d.createFullBoxCtor("tenc", (function(t) {
			if (t.readUint8(), 0 === this.version) t.readUint8();
			else {
				var e = t.readUint8();
				this.default_crypt_byte_block = e >> 4 & 15, this.default_skip_byte_block = 15 & e
			}
			this.default_isProtected = t.readUint8(), this.default_Per_Sample_IV_Size = t.readUint8(), this.default_KID = d.parseHex16(t), 1 === this.default_isProtected && 0 === this.default_Per_Sample_IV_Size && (this.default_constant_IV_size = t.readUint8(), this.default_constant_IV = t.readUint8Array(this.default_constant_IV_size))
		})), d.createFullBoxCtor("tfdt", (function(t) {
			1 == this.version ? this.baseMediaDecodeTime = t.readUint64() : this.baseMediaDecodeTime = t.readUint32()
		})), d.createFullBoxCtor("tfhd", (function(t) {
			var e = 0;
			this.track_id = t.readUint32(), this.size - this.hdr_size > e && this.flags & d.TFHD_FLAG_BASE_DATA_OFFSET ? (this.base_data_offset = t.readUint64(), e += 8) : this.base_data_offset = 0, this.size - this.hdr_size > e && this.flags & d.TFHD_FLAG_SAMPLE_DESC ? (this.default_sample_description_index = t.readUint32(), e += 4) : this.default_sample_description_index = 0, this.size - this.hdr_size > e && this.flags & d.TFHD_FLAG_SAMPLE_DUR ? (this.default_sample_duration = t.readUint32(), e += 4) : this.default_sample_duration = 0, this.size - this.hdr_size > e && this.flags & d.TFHD_FLAG_SAMPLE_SIZE ? (this.default_sample_size = t.readUint32(), e += 4) : this.default_sample_size = 0, this.size - this.hdr_size > e && this.flags & d.TFHD_FLAG_SAMPLE_FLAGS ? (this.default_sample_flags = t.readUint32(), e += 4) : this.default_sample_flags = 0
		})), d.createFullBoxCtor("tfra", (function(t) {
			this.track_ID = t.readUint32(), t.readUint24();
			var e = t.readUint8();
			this.length_size_of_traf_num = e >> 4 & 3, this.length_size_of_trun_num = e >> 2 & 3, this.length_size_of_sample_num = 3 & e, this.entries = [];
			for (var i = t.readUint32(), r = 0; r < i; r++) 1 === this.version ? (this.time = t.readUint64(), this.moof_offset = t.readUint64()) : (this.time = t.readUint32(), this.moof_offset = t.readUint32()), this.traf_number = t["readUint" + 8 * (this.length_size_of_traf_num + 1)](), this.trun_number = t["readUint" + 8 * (this.length_size_of_trun_num + 1)](), this.sample_number = t["readUint" + 8 * (this.length_size_of_sample_num + 1)]()
		})), d.createFullBoxCtor("tkhd", (function(t) {
			1 == this.version ? (this.creation_time = t.readUint64(), this.modification_time = t.readUint64(), this.track_id = t.readUint32(), t.readUint32(), this.duration = t.readUint64()) : (this.creation_time = t.readUint32(), this.modification_time = t.readUint32(), this.track_id = t.readUint32(), t.readUint32(), this.duration = t.readUint32()), t.readUint32Array(2), this.layer = t.readInt16(), this.alternate_group = t.readInt16(), this.volume = t.readInt16() >> 8, t.readUint16(), this.matrix = t.readInt32Array(9), this.width = t.readUint32(), this.height = t.readUint32()
		})), d.createBoxCtor("tmax", (function(t) {
			this.time = t.readUint32()
		})), d.createBoxCtor("tmin", (function(t) {
			this.time = t.readUint32()
		})), d.createBoxCtor("totl", (function(t) {
			this.bytessent = t.readUint32()
		})), d.createBoxCtor("tpay", (function(t) {
			this.bytessent = t.readUint32()
		})), d.createBoxCtor("tpyl", (function(t) {
			this.bytessent = t.readUint64()
		})), d.TrackGroupTypeBox.prototype.parse = function(t) {
			this.parseFullHeader(t), this.track_group_id = t.readUint32()
		}, d.createTrackGroupCtor("msrc"), d.TrackReferenceTypeBox = function(t, e, i, r) {
			d.Box.call(this, t, e), this.hdr_size = i, this.start = r
		}, d.TrackReferenceTypeBox.prototype = new d.Box, d.TrackReferenceTypeBox.prototype.parse = function(t) {
			this.track_ids = t.readUint32Array((this.size - this.hdr_size) / 4)
		}, d.trefBox.prototype.parse = function(t) {
			for (var e, i; t.getPosition() < this.start + this.size;) {
				if ((e = d.parseOneBox(t, !0, this.size - (t.getPosition() - this.start))).code !== d.OK) return;
				(i = new d.TrackReferenceTypeBox(e.type, e.size, e.hdr_size, e.start)).write === d.Box.prototype.write && "mdat" !== i.type && (n.info("BoxParser", "TrackReference " + i.type + " box writing not yet implemented, keeping unparsed data in memory for later write"), i.parseDataAndRewind(t)), i.parse(t), this.boxes.push(i)
			}
		}, d.createFullBoxCtor("trep", (function(t) {
			for (this.track_ID = t.readUint32(), this.boxes = []; t.getPosition() < this.start + this.size;) {
				if (ret = d.parseOneBox(t, !1, this.size - (t.getPosition() - this.start)), ret.code !== d.OK) return;
				box = ret.box, this.boxes.push(box)
			}
		})), d.createFullBoxCtor("trex", (function(t) {
			this.track_id = t.readUint32(), this.default_sample_description_index = t.readUint32(), this.default_sample_duration = t.readUint32(), this.default_sample_size = t.readUint32(), this.default_sample_flags = t.readUint32()
		})), d.createBoxCtor("trpy", (function(t) {
			this.bytessent = t.readUint64()
		})), d.createFullBoxCtor("trun", (function(t) {
			var e = 0;
			if (this.sample_count = t.readUint32(), e += 4, this.size - this.hdr_size > e && this.flags & d.TRUN_FLAGS_DATA_OFFSET ? (this.data_offset = t.readInt32(), e += 4) : this.data_offset = 0, this.size - this.hdr_size > e && this.flags & d.TRUN_FLAGS_FIRST_FLAG ? (this.first_sample_flags = t.readUint32(), e += 4) : this.first_sample_flags = 0, this.sample_duration = [], this.sample_size = [], this.sample_flags = [], this.sample_composition_time_offset = [], this.size - this.hdr_size > e)
				for (var i = 0; i < this.sample_count; i++) this.flags & d.TRUN_FLAGS_DURATION && (this.sample_duration[i] = t.readUint32()), this.flags & d.TRUN_FLAGS_SIZE && (this.sample_size[i] = t.readUint32()), this.flags & d.TRUN_FLAGS_FLAGS && (this.sample_flags[i] = t.readUint32()), this.flags & d.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? this.sample_composition_time_offset[i] = t.readUint32() : this.sample_composition_time_offset[i] = t.readInt32())
		})), d.createFullBoxCtor("tsel", (function(t) {
			this.switch_group = t.readUint32();
			var e = (this.size - this.hdr_size - 4) / 4;
			this.attribute_list = [];
			for (var i = 0; i < e; i++) this.attribute_list[i] = t.readUint32()
		})), d.createFullBoxCtor("txtC", (function(t) {
			this.config = t.readCString()
		})), d.createFullBoxCtor("url ", (function(t) {
			1 !== this.flags && (this.location = t.readCString())
		})), d.createFullBoxCtor("urn ", (function(t) {
			this.name = t.readCString(), this.size - this.hdr_size - this.name.length - 1 > 0 && (this.location = t.readCString())
		})), d.createUUIDBox("a5d40b30e81411ddba2f0800200c9a66", !0, !1, (function(t) {
			this.LiveServerManifest = t.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")
		})), d.createUUIDBox("d08a4f1810f34a82b6c832d8aba183d3", !0, !1, (function(t) {
			this.system_id = d.parseHex16(t);
			var e = t.readUint32();
			e > 0 && (this.data = t.readUint8Array(e))
		})), d.createUUIDBox("a2394f525a9b4f14a2446c427c648df4", !0, !1), d.createUUIDBox("8974dbce7be74c5184f97148f9882554", !0, !1, (function(t) {
			this.default_AlgorithmID = t.readUint24(), this.default_IV_size = t.readUint8(), this.default_KID = d.parseHex16(t)
		})), d.createUUIDBox("d4807ef2ca3946958e5426cb9e46a79f", !0, !1, (function(t) {
			this.fragment_count = t.readUint8(), this.entries = [];
			for (var e = 0; e < this.fragment_count; e++) {
				var i = {},
					r = 0,
					n = 0;
				1 === this.version ? (r = t.readUint64(), n = t.readUint64()) : (r = t.readUint32(), n = t.readUint32()), i.absolute_time = r, i.absolute_duration = n, this.entries.push(i)
			}
		})), d.createUUIDBox("6d1d9b0542d544e680e2141daff757b2", !0, !1, (function(t) {
			1 === this.version ? (this.absolute_time = t.readUint64(), this.duration = t.readUint64()) : (this.absolute_time = t.readUint32(), this.duration = t.readUint32())
		})), d.createFullBoxCtor("vmhd", (function(t) {
			this.graphicsmode = t.readUint16(), this.opcolor = t.readUint16Array(3)
		})), d.createFullBoxCtor("vpcC", (function(t) {
			var e;
			1 === this.version ? (this.profile = t.readUint8(), this.level = t.readUint8(), e = t.readUint8(), this.bitDepth = e >> 4, this.chromaSubsampling = e >> 1 & 7, this.videoFullRangeFlag = 1 & e, this.colourPrimaries = t.readUint8(), this.transferCharacteristics = t.readUint8(), this.matrixCoefficients = t.readUint8(), this.codecIntializationDataSize = t.readUint16(), this.codecIntializationData = t.readUint8Array(this.codecIntializationDataSize)) : (this.profile = t.readUint8(), this.level = t.readUint8(), e = t.readUint8(), this.bitDepth = e >> 4 & 15, this.colorSpace = 15 & e, e = t.readUint8(), this.chromaSubsampling = e >> 4 & 15, this.transferFunction = e >> 1 & 7, this.videoFullRangeFlag = 1 & e, this.codecIntializationDataSize = t.readUint16(), this.codecIntializationData = t.readUint8Array(this.codecIntializationDataSize))
		})), d.createBoxCtor("vttC", (function(t) {
			this.text = t.readString(this.size - this.hdr_size)
		})), d.SampleEntry.prototype.isVideo = function() {
			return !1
		}, d.SampleEntry.prototype.isAudio = function() {
			return !1
		}, d.SampleEntry.prototype.isSubtitle = function() {
			return !1
		}, d.SampleEntry.prototype.isMetadata = function() {
			return !1
		}, d.SampleEntry.prototype.isHint = function() {
			return !1
		}, d.SampleEntry.prototype.getCodec = function() {
			return this.type.replace(".", "")
		}, d.SampleEntry.prototype.getWidth = function() {
			return ""
		}, d.SampleEntry.prototype.getHeight = function() {
			return ""
		}, d.SampleEntry.prototype.getChannelCount = function() {
			return ""
		}, d.SampleEntry.prototype.getSampleRate = function() {
			return ""
		}, d.SampleEntry.prototype.getSampleSize = function() {
			return ""
		}, d.VisualSampleEntry.prototype.isVideo = function() {
			return !0
		}, d.VisualSampleEntry.prototype.getWidth = function() {
			return this.width
		}, d.VisualSampleEntry.prototype.getHeight = function() {
			return this.height
		}, d.AudioSampleEntry.prototype.isAudio = function() {
			return !0
		}, d.AudioSampleEntry.prototype.getChannelCount = function() {
			return this.channel_count
		}, d.AudioSampleEntry.prototype.getSampleRate = function() {
			return this.samplerate
		}, d.AudioSampleEntry.prototype.getSampleSize = function() {
			return this.samplesize
		}, d.SubtitleSampleEntry.prototype.isSubtitle = function() {
			return !0
		}, d.MetadataSampleEntry.prototype.isMetadata = function() {
			return !0
		}, d.decimalToHex = function(t, e) {
			var i = Number(t).toString(16);
			for (e = null == e ? e = 2 : e; i.length < e;) i = "0" + i;
			return i
		}, d.avc1SampleEntry.prototype.getCodec = d.avc2SampleEntry.prototype.getCodec = d.avc3SampleEntry.prototype.getCodec = d.avc4SampleEntry.prototype.getCodec = function() {
			var t = d.SampleEntry.prototype.getCodec.call(this);
			return this.avcC ? t + "." + d.decimalToHex(this.avcC.AVCProfileIndication) + d.decimalToHex(this.avcC.profile_compatibility) + d.decimalToHex(this.avcC.AVCLevelIndication) : t
		}, d.hev1SampleEntry.prototype.getCodec = d.hvc1SampleEntry.prototype.getCodec = function() {
			var t, e = d.SampleEntry.prototype.getCodec.call(this);
			if (this.hvcC) {
				switch (e += ".", this.hvcC.general_profile_space) {
					case 0:
						e += "";
						break;
					case 1:
						e += "A";
						break;
					case 2:
						e += "B";
						break;
					case 3:
						e += "C"
				}
				e += this.hvcC.general_profile_idc, e += ".";
				var i = this.hvcC.general_profile_compatibility,
					r = 0;
				for (t = 0; t < 32 && (r |= 1 & i, 31 != t); t++) r <<= 1, i >>= 1;
				e += d.decimalToHex(r, 0), e += ".", 0 === this.hvcC.general_tier_flag ? e += "L" : e += "H", e += this.hvcC.general_level_idc;
				var n = !1,
					s = "";
				for (t = 5; t >= 0; t--)(this.hvcC.general_constraint_indicator[t] || n) && (s = "." + d.decimalToHex(this.hvcC.general_constraint_indicator[t], 0) + s, n = !0);
				e += s
			}
			return e
		}, d.mp4aSampleEntry.prototype.getCodec = function() {
			var t = d.SampleEntry.prototype.getCodec.call(this);
			if (this.esds && this.esds.esd) {
				var e = this.esds.esd.getOTI(),
					i = this.esds.esd.getAudioConfig();
				return t + "." + d.decimalToHex(e) + (i ? "." + i : "")
			}
			return t
		}, d.stxtSampleEntry.prototype.getCodec = function() {
			var t = d.SampleEntry.prototype.getCodec.call(this);
			return this.mime_format ? t + "." + this.mime_format : t
		}, d.av01SampleEntry.prototype.getCodec = function() {
			var t, e = d.SampleEntry.prototype.getCodec.call(this);
			return 2 === this.av1C.seq_profile && 1 === this.av1C.high_bitdepth ? t = 1 === this.av1C.twelve_bit ? "12" : "10" : this.av1C.seq_profile <= 2 && (t = 1 === this.av1C.high_bitdepth ? "10" : "08"), e + "." + this.av1C.seq_profile + "." + this.av1C.seq_level_idx_0 + (this.av1C.seq_tier_0 ? "H" : "M") + "." + t
		}, d.Box.prototype.writeHeader = function(t, e) {
			this.size += 8, this.size > o && (this.size += 8), "uuid" === this.type && (this.size += 16), n.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + t.getPosition() + (e || "")), this.size > o ? t.writeUint32(1) : (this.sizePosition = t.getPosition(), t.writeUint32(this.size)), t.writeString(this.type, null, 4), "uuid" === this.type && t.writeUint8Array(this.uuid), this.size > o && t.writeUint64(this.size)
		}, d.FullBox.prototype.writeHeader = function(t) {
			this.size += 4, d.Box.prototype.writeHeader.call(this, t, " v=" + this.version + " f=" + this.flags), t.writeUint8(this.version), t.writeUint24(this.flags)
		}, d.Box.prototype.write = function(t) {
			"mdat" === this.type ? this.data && (this.size = this.data.length, this.writeHeader(t), t.writeUint8Array(this.data)) : (this.size = this.data ? this.data.length : 0, this.writeHeader(t), this.data && t.writeUint8Array(this.data))
		}, d.ContainerBox.prototype.write = function(t) {
			this.size = 0, this.writeHeader(t);
			for (var e = 0; e < this.boxes.length; e++) this.boxes[e] && (this.boxes[e].write(t), this.size += this.boxes[e].size);
			n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
		}, d.TrackReferenceTypeBox.prototype.write = function(t) {
			this.size = 4 * this.track_ids.length, this.writeHeader(t), t.writeUint32Array(this.track_ids)
		}, d.avcCBox.prototype.write = function(t) {
			var e;
			for (this.size = 7, e = 0; e < this.SPS.length; e++) this.size += 2 + this.SPS[e].length;
			for (e = 0; e < this.PPS.length; e++) this.size += 2 + this.PPS[e].length;
			for (this.ext && (this.size += this.ext.length), this.writeHeader(t), t.writeUint8(this.configurationVersion), t.writeUint8(this.AVCProfileIndication), t.writeUint8(this.profile_compatibility), t.writeUint8(this.AVCLevelIndication), t.writeUint8(this.lengthSizeMinusOne + 252), t.writeUint8(this.SPS.length + 224), e = 0; e < this.SPS.length; e++) t.writeUint16(this.SPS[e].length), t.writeUint8Array(this.SPS[e].nalu);
			for (t.writeUint8(this.PPS.length), e = 0; e < this.PPS.length; e++) t.writeUint16(this.PPS[e].length), t.writeUint8Array(this.PPS[e].nalu);
			this.ext && t.writeUint8Array(this.ext)
		}, d.co64Box.prototype.write = function(t) {
			var e;
			for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.chunk_offsets.length, this.writeHeader(t), t.writeUint32(this.chunk_offsets.length), e = 0; e < this.chunk_offsets.length; e++) t.writeUint64(this.chunk_offsets[e])
		}, d.cslgBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(t), t.writeInt32(this.compositionToDTSShift), t.writeInt32(this.leastDecodeToDisplayDelta), t.writeInt32(this.greatestDecodeToDisplayDelta), t.writeInt32(this.compositionStartTime), t.writeInt32(this.compositionEndTime)
		}, d.cttsBox.prototype.write = function(t) {
			var e;
			for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(t), t.writeUint32(this.sample_counts.length), e = 0; e < this.sample_counts.length; e++) t.writeUint32(this.sample_counts[e]), 1 === this.version ? t.writeInt32(this.sample_offsets[e]) : t.writeUint32(this.sample_offsets[e])
		}, d.drefBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.entries.length);
			for (var e = 0; e < this.entries.length; e++) this.entries[e].write(t), this.size += this.entries[e].size;
			n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
		}, d.elngBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = this.extended_language.length, this.writeHeader(t), t.writeString(this.extended_language)
		}, d.elstBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 4 + 12 * this.entries.length, this.writeHeader(t), t.writeUint32(this.entries.length);
			for (var e = 0; e < this.entries.length; e++) {
				var i = this.entries[e];
				t.writeUint32(i.segment_duration), t.writeInt32(i.media_time), t.writeInt16(i.media_rate_integer), t.writeInt16(i.media_rate_fraction)
			}
		}, d.emsgBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1), this.writeHeader(t), t.writeCString(this.scheme_id_uri), t.writeCString(this.value), t.writeUint32(this.timescale), t.writeUint32(this.presentation_time_delta), t.writeUint32(this.event_duration), t.writeUint32(this.id), t.writeUint8Array(this.message_data)
		}, d.ftypBox.prototype.write = function(t) {
			this.size = 8 + 4 * this.compatible_brands.length, this.writeHeader(t), t.writeString(this.major_brand, null, 4), t.writeUint32(this.minor_version);
			for (var e = 0; e < this.compatible_brands.length; e++) t.writeString(this.compatible_brands[e], null, 4)
		}, d.hdlrBox.prototype.write = function(t) {
			this.size = 20 + this.name.length + 1, this.version = 0, this.flags = 0, this.writeHeader(t), t.writeUint32(0), t.writeString(this.handler, null, 4), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeCString(this.name)
		}, d.kindBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = this.schemeURI.length + 1 + (this.value.length + 1), this.writeHeader(t), t.writeCString(this.schemeURI), t.writeCString(this.value)
		}, d.mdhdBox.prototype.write = function(t) {
			this.size = 20, this.flags = 0, this.version = 0, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.timescale), t.writeUint32(this.duration), t.writeUint16(this.language), t.writeUint16(0)
		}, d.mehdBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.fragment_duration)
		}, d.mfhdBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 4, this.writeHeader(t), t.writeUint32(this.sequence_number)
		}, d.mvhdBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 96, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.timescale), t.writeUint32(this.duration), t.writeUint32(this.rate), t.writeUint16(this.volume << 8), t.writeUint16(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32Array(this.matrix), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(this.next_track_id)
		}, d.SampleEntry.prototype.writeHeader = function(t) {
			this.size = 8, d.Box.prototype.writeHeader.call(this, t), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint8(0), t.writeUint16(this.data_reference_index)
		}, d.SampleEntry.prototype.writeFooter = function(t) {
			for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(t), this.size += this.boxes[e].size;
			n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
		}, d.SampleEntry.prototype.write = function(t) {
			this.writeHeader(t), t.writeUint8Array(this.data), this.size += this.data.length, n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
		}, d.VisualSampleEntry.prototype.write = function(t) {
			this.writeHeader(t), this.size += 70, t.writeUint16(0), t.writeUint16(0), t.writeUint32(0), t.writeUint32(0), t.writeUint32(0), t.writeUint16(this.width), t.writeUint16(this.height), t.writeUint32(this.horizresolution), t.writeUint32(this.vertresolution), t.writeUint32(0), t.writeUint16(this.frame_count), t.writeUint8(Math.min(31, this.compressorname.length)), t.writeString(this.compressorname, null, 31), t.writeUint16(this.depth), t.writeInt16(-1), this.writeFooter(t)
		}, d.AudioSampleEntry.prototype.write = function(t) {
			this.writeHeader(t), this.size += 20, t.writeUint32(0), t.writeUint32(0), t.writeUint16(this.channel_count), t.writeUint16(this.samplesize), t.writeUint16(0), t.writeUint16(0), t.writeUint32(this.samplerate << 16), this.writeFooter(t)
		}, d.stppSampleEntry.prototype.write = function(t) {
			this.writeHeader(t), this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1, t.writeCString(this.namespace), t.writeCString(this.schema_location), t.writeCString(this.auxiliary_mime_types), this.writeFooter(t)
		}, d.SampleGroupEntry.prototype.write = function(t) {
			t.writeUint8Array(this.data)
		}, d.sbgpBox.prototype.write = function(t) {
			this.version = 1, this.flags = 0, this.size = 12 + 8 * this.entries.length, this.writeHeader(t), t.writeString(this.grouping_type, null, 4), t.writeUint32(this.grouping_type_parameter), t.writeUint32(this.entries.length);
			for (var e = 0; e < this.entries.length; e++) {
				var i = this.entries[e];
				t.writeInt32(i.sample_count), t.writeInt32(i.group_description_index)
			}
		}, d.sgpdBox.prototype.write = function(t) {
			var e, i;
			for (this.flags = 0, this.size = 12, e = 0; e < this.entries.length; e++) i = this.entries[e], 1 === this.version && (0 === this.default_length && (this.size += 4), this.size += i.data.length);
			for (this.writeHeader(t), t.writeString(this.grouping_type, null, 4), 1 === this.version && t.writeUint32(this.default_length), this.version >= 2 && t.writeUint32(this.default_sample_description_index), t.writeUint32(this.entries.length), e = 0; e < this.entries.length; e++) i = this.entries[e], 1 === this.version && 0 === this.default_length && t.writeUint32(i.description_length), i.write(t)
		}, d.sidxBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 20 + 12 * this.references.length, this.writeHeader(t), t.writeUint32(this.reference_ID), t.writeUint32(this.timescale), t.writeUint32(this.earliest_presentation_time), t.writeUint32(this.first_offset), t.writeUint16(0), t.writeUint16(this.references.length);
			for (var e = 0; e < this.references.length; e++) {
				var i = this.references[e];
				t.writeUint32(i.reference_type << 31 | i.referenced_size), t.writeUint32(i.subsegment_duration), t.writeUint32(i.starts_with_SAP << 31 | i.SAP_type << 28 | i.SAP_delta_time)
			}
		}, d.stcoBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 4 + 4 * this.chunk_offsets.length, this.writeHeader(t), t.writeUint32(this.chunk_offsets.length), t.writeUint32Array(this.chunk_offsets)
		}, d.stscBox.prototype.write = function(t) {
			var e;
			for (this.version = 0, this.flags = 0, this.size = 4 + 12 * this.first_chunk.length, this.writeHeader(t), t.writeUint32(this.first_chunk.length), e = 0; e < this.first_chunk.length; e++) t.writeUint32(this.first_chunk[e]), t.writeUint32(this.samples_per_chunk[e]), t.writeUint32(this.sample_description_index[e])
		}, d.stsdBox.prototype.write = function(t) {
			var e;
			for (this.version = 0, this.flags = 0, this.size = 0, this.writeHeader(t), t.writeUint32(this.entries.length), this.size += 4, e = 0; e < this.entries.length; e++) this.entries[e].write(t), this.size += this.entries[e].size;
			n.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size), t.adjustUint32(this.sizePosition, this.size)
		}, d.stshBox.prototype.write = function(t) {
			var e;
			for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.shadowed_sample_numbers.length, this.writeHeader(t), t.writeUint32(this.shadowed_sample_numbers.length), e = 0; e < this.shadowed_sample_numbers.length; e++) t.writeUint32(this.shadowed_sample_numbers[e]), t.writeUint32(this.sync_sample_numbers[e])
		}, d.stssBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 4 + 4 * this.sample_numbers.length, this.writeHeader(t), t.writeUint32(this.sample_numbers.length), t.writeUint32Array(this.sample_numbers)
		}, d.stszBox.prototype.write = function(t) {
			var e, i = !0;
			if (this.version = 0, this.flags = 0, this.sample_sizes.length > 0)
				for (e = 0; e + 1 < this.sample_sizes.length;) {
					if (this.sample_sizes[e + 1] !== this.sample_sizes[0]) {
						i = !1;
						break
					}
					e++
				} else i = !1;
			this.size = 8, i || (this.size += 4 * this.sample_sizes.length), this.writeHeader(t), i ? t.writeUint32(this.sample_sizes[0]) : t.writeUint32(0), t.writeUint32(this.sample_sizes.length), i || t.writeUint32Array(this.sample_sizes)
		}, d.sttsBox.prototype.write = function(t) {
			var e;
			for (this.version = 0, this.flags = 0, this.size = 4 + 8 * this.sample_counts.length, this.writeHeader(t), t.writeUint32(this.sample_counts.length), e = 0; e < this.sample_counts.length; e++) t.writeUint32(this.sample_counts[e]), t.writeUint32(this.sample_deltas[e])
		}, d.tfdtBox.prototype.write = function(t) {
			var e = Math.pow(2, 32) - 1;
			this.version = this.baseMediaDecodeTime > e ? 1 : 0, this.flags = 0, this.size = 4, 1 === this.version && (this.size += 4), this.writeHeader(t), 1 === this.version ? t.writeUint64(this.baseMediaDecodeTime) : t.writeUint32(this.baseMediaDecodeTime)
		}, d.tfhdBox.prototype.write = function(t) {
			this.version = 0, this.size = 4, this.flags & d.TFHD_FLAG_BASE_DATA_OFFSET && (this.size += 8), this.flags & d.TFHD_FLAG_SAMPLE_DESC && (this.size += 4), this.flags & d.TFHD_FLAG_SAMPLE_DUR && (this.size += 4), this.flags & d.TFHD_FLAG_SAMPLE_SIZE && (this.size += 4), this.flags & d.TFHD_FLAG_SAMPLE_FLAGS && (this.size += 4), this.writeHeader(t), t.writeUint32(this.track_id), this.flags & d.TFHD_FLAG_BASE_DATA_OFFSET && t.writeUint64(this.base_data_offset), this.flags & d.TFHD_FLAG_SAMPLE_DESC && t.writeUint32(this.default_sample_description_index), this.flags & d.TFHD_FLAG_SAMPLE_DUR && t.writeUint32(this.default_sample_duration), this.flags & d.TFHD_FLAG_SAMPLE_SIZE && t.writeUint32(this.default_sample_size), this.flags & d.TFHD_FLAG_SAMPLE_FLAGS && t.writeUint32(this.default_sample_flags)
		}, d.tkhdBox.prototype.write = function(t) {
			this.version = 0, this.size = 80, this.writeHeader(t), t.writeUint32(this.creation_time), t.writeUint32(this.modification_time), t.writeUint32(this.track_id), t.writeUint32(0), t.writeUint32(this.duration), t.writeUint32(0), t.writeUint32(0), t.writeInt16(this.layer), t.writeInt16(this.alternate_group), t.writeInt16(this.volume << 8), t.writeUint16(0), t.writeInt32Array(this.matrix), t.writeUint32(this.width), t.writeUint32(this.height)
		}, d.trexBox.prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = 20, this.writeHeader(t), t.writeUint32(this.track_id), t.writeUint32(this.default_sample_description_index), t.writeUint32(this.default_sample_duration), t.writeUint32(this.default_sample_size), t.writeUint32(this.default_sample_flags)
		}, d.trunBox.prototype.write = function(t) {
			this.version = 0, this.size = 4, this.flags & d.TRUN_FLAGS_DATA_OFFSET && (this.size += 4), this.flags & d.TRUN_FLAGS_FIRST_FLAG && (this.size += 4), this.flags & d.TRUN_FLAGS_DURATION && (this.size += 4 * this.sample_duration.length), this.flags & d.TRUN_FLAGS_SIZE && (this.size += 4 * this.sample_size.length), this.flags & d.TRUN_FLAGS_FLAGS && (this.size += 4 * this.sample_flags.length), this.flags & d.TRUN_FLAGS_CTS_OFFSET && (this.size += 4 * this.sample_composition_time_offset.length), this.writeHeader(t), t.writeUint32(this.sample_count), this.flags & d.TRUN_FLAGS_DATA_OFFSET && (this.data_offset_position = t.getPosition(), t.writeInt32(this.data_offset)), this.flags & d.TRUN_FLAGS_FIRST_FLAG && t.writeUint32(this.first_sample_flags);
			for (var e = 0; e < this.sample_count; e++) this.flags & d.TRUN_FLAGS_DURATION && t.writeUint32(this.sample_duration[e]), this.flags & d.TRUN_FLAGS_SIZE && t.writeUint32(this.sample_size[e]), this.flags & d.TRUN_FLAGS_FLAGS && t.writeUint32(this.sample_flags[e]), this.flags & d.TRUN_FLAGS_CTS_OFFSET && (0 === this.version ? t.writeUint32(this.sample_composition_time_offset[e]) : t.writeInt32(this.sample_composition_time_offset[e]))
		}, d["url Box"].prototype.write = function(t) {
			this.version = 0, this.location ? (this.flags = 0, this.size = this.location.length + 1) : (this.flags = 1, this.size = 0), this.writeHeader(t), this.location && t.writeCString(this.location)
		}, d["urn Box"].prototype.write = function(t) {
			this.version = 0, this.flags = 0, this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0), this.writeHeader(t), t.writeCString(this.name), this.location && t.writeCString(this.location)
		}, d.vmhdBox.prototype.write = function(t) {
			this.version = 0, this.flags = 1, this.size = 8, this.writeHeader(t), t.writeUint16(this.graphicsmode), t.writeUint16Array(this.opcolor)
		}, d.cttsBox.prototype.unpack = function(t) {
			var e, i, r;
			for (r = 0, e = 0; e < this.sample_counts.length; e++)
				for (i = 0; i < this.sample_counts[e]; i++) t[r].pts = t[r].dts + this.sample_offsets[e], r++
		}, d.sttsBox.prototype.unpack = function(t) {
			var e, i, r;
			for (r = 0, e = 0; e < this.sample_counts.length; e++)
				for (i = 0; i < this.sample_counts[e]; i++) t[r].dts = 0 === r ? 0 : t[r - 1].dts + this.sample_deltas[e], r++
		}, d.stcoBox.prototype.unpack = function(t) {
			var e;
			for (e = 0; e < this.chunk_offsets.length; e++) t[e].offset = this.chunk_offsets[e]
		}, d.stscBox.prototype.unpack = function(t) {
			var e, i, r, n, s;
			for (n = 0, s = 0, e = 0; e < this.first_chunk.length; e++)
				for (i = 0; i < (e + 1 < this.first_chunk.length ? this.first_chunk[e + 1] : 1 / 0); i++)
					for (s++, r = 0; r < this.samples_per_chunk[e]; r++) {
						if (!t[n]) return;
						t[n].description_index = this.sample_description_index[e], t[n].chunk_index = s, n++
					}
		}, d.stszBox.prototype.unpack = function(t) {
			var e;
			for (e = 0; e < this.sample_sizes.length; e++) t[e].size = this.sample_sizes[e]
		}, d.DIFF_BOXES_PROP_NAMES = ["boxes", "entries", "references", "subsamples", "items", "item_infos", "extents", "associations", "subsegments", "ranges", "seekLists", "seekPoints", "esd", "levels"], d.DIFF_PRIMITIVE_ARRAY_PROP_NAMES = ["compatible_brands", "matrix", "opcolor", "sample_counts", "sample_counts", "sample_deltas", "first_chunk", "samples_per_chunk", "sample_sizes", "chunk_offsets", "sample_offsets", "sample_description_index", "sample_duration"], d.boxEqualFields = function(t, e) {
			if (t && !e) return !1;
			var i;
			for (i in t)
				if (!(d.DIFF_BOXES_PROP_NAMES.indexOf(i) > -1 || t[i] instanceof d.Box || e[i] instanceof d.Box || void 0 === t[i] || void 0 === e[i] || "function" == typeof t[i] || "function" == typeof e[i] || t.subBoxNames && t.subBoxNames.indexOf(i.slice(0, 4)) > -1 || e.subBoxNames && e.subBoxNames.indexOf(i.slice(0, 4)) > -1 || "data" === i || "start" === i || "size" === i || "creation_time" === i || "modification_time" === i || d.DIFF_PRIMITIVE_ARRAY_PROP_NAMES.indexOf(i) > -1 || t[i] === e[i])) return !1;
			return !0
		}, d.boxEqual = function(t, e) {
			if (!d.boxEqualFields(t, e)) return !1;
			for (var i = 0; i < d.DIFF_BOXES_PROP_NAMES.length; i++) {
				var r = d.DIFF_BOXES_PROP_NAMES[i];
				if (t[r] && e[r] && !d.boxEqual(t[r], e[r])) return !1
			}
			return !0
		};
		var c = function() {};
		c.prototype.parseSample = function(t) {
			var e, i = {};
			i.resources = [];
			var r = new s(t.data.buffer);
			if (t.subsamples && 0 !== t.subsamples.length) {
				if (i.documentString = r.readString(t.subsamples[0].size), t.subsamples.length > 1)
					for (e = 1; e < t.subsamples.length; e++) i.resources[e] = r.readUint8Array(t.subsamples[e].size)
			} else i.documentString = r.readString(t.data.length);
			return "undefined" != typeof DOMParser && (i.document = (new DOMParser).parseFromString(i.documentString, "application/xml")), i
		};
		var p = function() {};
		p.prototype.parseSample = function(t) {
			return new s(t.data.buffer).readString(t.data.length)
		}, p.prototype.parseConfig = function(t) {
			var e = new s(t.buffer);
			return e.readUint32(), e.readCString()
		}, t.XMLSubtitlein4Parser = c, t.Textin4Parser = p;
		var u = function(t) {
			this.stream = t || new l, this.boxes = [], this.mdats = [], this.moofs = [], this.isProgressive = !1, this.moovStartFound = !1, this.onMoovStart = null, this.moovStartSent = !1, this.onReady = null, this.readySent = !1, this.onSegment = null, this.onSamples = null, this.onError = null, this.sampleListBuilt = !1, this.fragmentedTracks = [], this.extractedTracks = [], this.isFragmentationInitialized = !1, this.sampleProcessingStarted = !1, this.nextMoofNumber = 0, this.itemListBuilt = !1, this.onSidx = null, this.sidxSent = !1
		};
		u.prototype.setSegmentOptions = function(t, e, i) {
			var r = this.getTrackById(t);
			if (r) {
				var n = {};
				this.fragmentedTracks.push(n), n.id = t, n.user = e, n.trak = r, r.nextSample = 0, n.segmentStream = null, n.nb_samples = 1e3, n.rapAlignement = !0, i && (i.nbSamples && (n.nb_samples = i.nbSamples), i.rapAlignement && (n.rapAlignement = i.rapAlignement))
			}
		}, u.prototype.unsetSegmentOptions = function(t) {
			for (var e = -1, i = 0; i < this.fragmentedTracks.length; i++) {
				this.fragmentedTracks[i].id == t && (e = i)
			}
			e > -1 && this.fragmentedTracks.splice(e, 1)
		}, u.prototype.setExtractionOptions = function(t, e, i) {
			var r = this.getTrackById(t);
			if (r) {
				var n = {};
				this.extractedTracks.push(n), n.id = t, n.user = e, n.trak = r, r.nextSample = 0, n.nb_samples = 1e3, n.samples = [], i && i.nbSamples && (n.nb_samples = i.nbSamples)
			}
		}, u.prototype.unsetExtractionOptions = function(t) {
			for (var e = -1, i = 0; i < this.extractedTracks.length; i++) {
				this.extractedTracks[i].id == t && (e = i)
			}
			e > -1 && this.extractedTracks.splice(e, 1)
		}, u.prototype.parse = function() {
			var t, e;
			if (!this.restoreParsePosition || this.restoreParsePosition())
				for (;;) {
					if (this.hasIncompleteMdat && this.hasIncompleteMdat()) {
						if (this.processIncompleteMdat()) continue;
						return
					}
					if (this.saveParsePosition && this.saveParsePosition(), (t = d.parseOneBox(this.stream, false)).code === d.ERR_NOT_ENOUGH_DATA) {
						if (this.processIncompleteBox) {
							if (this.processIncompleteBox(t)) continue;
							return
						}
						return
					}
					var i;
					switch (i = "uuid" !== (e = t.box).type ? e.type : e.uuid, this.boxes.push(e), i) {
						case "mdat":
							this.mdats.push(e);
							break;
						case "moof":
							this.moofs.push(e);
							break;
						case "moov":
							this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0);
						default:
							void 0 !== this[i] && n.warn("ISOFile", "Duplicate Box of type: " + i + ", overriding previous occurrence"), this[i] = e
					}
					this.updateUsedBytes && this.updateUsedBytes(e, t)
				}
		}, u.prototype.checkBuffer = function(t) {
			if (null == t) throw "Buffer must be defined and non empty";
			if (void 0 === t.fileStart) throw "Buffer must have a fileStart property";
			return 0 === t.byteLength ? (n.warn("ISOFile", "Ignoring empty buffer (fileStart: " + t.fileStart + ")"), this.stream.logBufferLevel(), !1) : (n.info("ISOFile", "Processing buffer (fileStart: " + t.fileStart + ")"), t.usedBytes = 0, this.stream.insertBuffer(t), this.stream.logBufferLevel(), !!this.stream.initialized() || (n.warn("ISOFile", "Not ready to start parsing"), !1))
		}, u.prototype.appendBuffer = function(t, e) {
			var i;
			if (this.checkBuffer(t)) return this.parse(), this.moovStartFound && !this.moovStartSent && (this.moovStartSent = !0, this.onMoovStart && this.onMoovStart()), this.moov ? (this.sampleListBuilt || (this.buildSampleLists(), this.sampleListBuilt = !0), this.updateSampleLists(), this.onReady && !this.readySent && (this.readySent = !0, this.onReady(this.getInfo())), this.processSamples(e), this.nextSeekPosition ? (i = this.nextSeekPosition, this.nextSeekPosition = void 0) : i = this.nextParsePosition, this.stream.getEndFilePositionAfter && (i = this.stream.getEndFilePositionAfter(i))) : i = this.nextParsePosition ? this.nextParsePosition : 0, this.sidx && this.onSidx && !this.sidxSent && (this.onSidx(this.sidx), this.sidxSent = !0), this.meta && (this.flattenItemInfo && !this.itemListBuilt && (this.flattenItemInfo(), this.itemListBuilt = !0), this.processItems && this.processItems(this.onItem)), this.stream.cleanBuffers && (n.info("ISOFile", "Done processing buffer (fileStart: " + t.fileStart + ") - next buffer to fetch should have a fileStart position of " + i), this.stream.logBufferLevel(), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0), n.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize())), i
		}, u.prototype.getInfo = function() {
			var t, e, i, r, n, s = {},
				a = new Date("1904-01-01T00:00:00Z").getTime();
			if (this.moov)
				for (s.hasMoov = !0, s.duration = this.moov.mvhd.duration, s.timescale = this.moov.mvhd.timescale, s.isFragmented = null != this.moov.mvex, s.isFragmented && this.moov.mvex.mehd && (s.fragment_duration = this.moov.mvex.mehd.fragment_duration), s.isProgressive = this.isProgressive, s.hasIOD = null != this.moov.iods, s.brands = [], s.brands.push(this.ftyp.major_brand), s.brands = s.brands.concat(this.ftyp.compatible_brands), s.created = new Date(a + 1e3 * this.moov.mvhd.creation_time), s.modified = new Date(a + 1e3 * this.moov.mvhd.modification_time), s.tracks = [], s.audioTracks = [], s.videoTracks = [], s.subtitleTracks = [], s.metadataTracks = [], s.hintTracks = [], s.otherTracks = [], t = 0; t < this.moov.traks.length; t++) {
					if (n = (i = this.moov.traks[t]).mdia.minf.stbl.stsd.entries[0], r = {}, s.tracks.push(r), r.id = i.tkhd.track_id, r.name = i.mdia.hdlr.name, r.references = [], i.tref)
						for (e = 0; e < i.tref.boxes.length; e++) ref = {}, r.references.push(ref), ref.type = i.tref.boxes[e].type, ref.track_ids = i.tref.boxes[e].track_ids;
					i.edts && (r.edits = i.edts.elst.entries), r.created = new Date(a + 1e3 * i.tkhd.creation_time), r.modified = new Date(a + 1e3 * i.tkhd.modification_time), r.movie_duration = i.tkhd.duration, r.movie_timescale = s.timescale, r.layer = i.tkhd.layer, r.alternate_group = i.tkhd.alternate_group, r.volume = i.tkhd.volume, r.matrix = i.tkhd.matrix, r.track_width = i.tkhd.width / 65536, r.track_height = i.tkhd.height / 65536, r.timescale = i.mdia.mdhd.timescale, r.cts_shift = i.mdia.minf.stbl.cslg, r.duration = i.mdia.mdhd.duration, r.samples_duration = i.samples_duration, r.codec = n.getCodec(), r.kind = i.udta && i.udta.kinds.length ? i.udta.kinds[0] : {
						schemeURI: "",
						value: ""
					}, r.language = i.mdia.elng ? i.mdia.elng.extended_language : i.mdia.mdhd.languageString, r.nb_samples = i.samples.length, r.size = i.samples_size, r.bitrate = 8 * r.size * r.timescale / r.samples_duration, n.isAudio() ? (r.type = "audio", s.audioTracks.push(r), r.audio = {}, r.audio.sample_rate = n.getSampleRate(), r.audio.channel_count = n.getChannelCount(), r.audio.sample_size = n.getSampleSize()) : n.isVideo() ? (r.type = "video", s.videoTracks.push(r), r.video = {}, r.video.width = n.getWidth(), r.video.height = n.getHeight()) : n.isSubtitle() ? (r.type = "subtitles", s.subtitleTracks.push(r)) : n.isHint() ? (r.type = "metadata", s.hintTracks.push(r)) : n.isMetadata() ? (r.type = "metadata", s.metadataTracks.push(r)) : (r.type = "metadata", s.otherTracks.push(r))
				} else s.hasMoov = !1;
			if (s.mime = "", s.hasMoov && s.tracks) {
				for (s.videoTracks && s.videoTracks.length > 0 ? s.mime += 'video/mp4; codecs="' : s.audioTracks && s.audioTracks.length > 0 ? s.mime += 'audio/mp4; codecs="' : s.mime += 'application/mp4; codecs="', t = 0; t < s.tracks.length; t++) 0 !== t && (s.mime += ","), s.mime += s.tracks[t].codec;
				s.mime += '"; profiles="', s.mime += this.ftyp.compatible_brands.join(), s.mime += '"'
			}
			return s
		}, u.prototype.processSamples = function(t) {
			var e, i;
			if (this.sampleProcessingStarted) {
				if (this.isFragmentationInitialized && null !== this.onSegment)
					for (e = 0; e < this.fragmentedTracks.length; e++) {
						var r = this.fragmentedTracks[e];
						for (i = r.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted;) {
							n.debug("ISOFile", "Creating media fragment on track #" + r.id + " for sample " + i.nextSample);
							var s = this.createFragment(r.id, i.nextSample, r.segmentStream);
							if (!s) break;
							if (r.segmentStream = s, i.nextSample++, (i.nextSample % r.nb_samples == 0 || t || i.nextSample >= i.samples.length) && (n.info("ISOFile", "Sending fragmented data on track #" + r.id + " for samples [" + Math.max(0, i.nextSample - r.nb_samples) + "," + (i.nextSample - 1) + "]"), n.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize()), this.onSegment && this.onSegment(r.id, r.user, r.segmentStream.buffer, i.nextSample, t || i.nextSample >= i.samples.length), r.segmentStream = null, r !== this.fragmentedTracks[e])) break
						}
					}
				if (null !== this.onSamples)
					for (e = 0; e < this.extractedTracks.length; e++) {
						var a = this.extractedTracks[e];
						for (i = a.trak; i.nextSample < i.samples.length && this.sampleProcessingStarted;) {
							n.debug("ISOFile", "Exporting on track #" + a.id + " sample #" + i.nextSample);
							var o = this.getSample(i, i.nextSample);
							if (!o) break;
							if (i.nextSample++, a.samples.push(o), (i.nextSample % a.nb_samples == 0 || i.nextSample >= i.samples.length) && (n.debug("ISOFile", "Sending samples on track #" + a.id + " for sample " + i.nextSample), this.onSamples && this.onSamples(a.id, a.user, a.samples), a.samples = [], a !== this.extractedTracks[e])) break
						}
					}
			}
		}, u.prototype.getBox = function(t) {
			var e = this.getBoxes(t, !0);
			return e.length ? e[0] : null
		}, u.prototype.getBoxes = function(t, e) {
			var i = [];
			return u._sweep.call(this, t, i, e), i
		}, u._sweep = function(t, e, i) {
			for (var r in this.type && this.type == t && e.push(this), this.boxes) {
				if (e.length && i) return;
				u._sweep.call(this.boxes[r], t, e, i)
			}
		}, u.prototype.getTrackSamplesInfo = function(t) {
			var e = this.getTrackById(t);
			return e ? e.samples : void 0
		}, u.prototype.getTrackSample = function(t, e) {
			var i = this.getTrackById(t);
			return this.getSample(i, e)
		}, u.prototype.releaseUsedSamples = function(t, e) {
			var i = 0,
				r = this.getTrackById(t);
			r.lastValidSample || (r.lastValidSample = 0);
			for (var s = r.lastValidSample; s < e; s++) i += this.releaseSample(r, s);
			n.info("ISOFile", "Track #" + t + " released samples up to " + e + " (released size: " + i + ", remaining: " + this.samplesDataSize + ")"), r.lastValidSample = e
		}, u.prototype.start = function() {
			this.sampleProcessingStarted = !0, this.processSamples(!1)
		}, u.prototype.stop = function() {
			this.sampleProcessingStarted = !1
		}, u.prototype.flush = function() {
			n.info("ISOFile", "Flushing remaining samples"), this.updateSampleLists(), this.processSamples(!0), this.stream.cleanBuffers(), this.stream.logBufferLevel(!0)
		}, u.prototype.seekTrack = function(t, e, i) {
			var r, s, a, o, l = 0,
				h = 0;
			if (0 === i.samples.length) return n.info("ISOFile", "No sample in track, cannot seek! Using time " + n.getDurationString(0, 1) + " and offset: 0"), {
				offset: 0,
				time: 0
			};
			for (r = 0; r < i.samples.length; r++) {
				if (s = i.samples[r], 0 === r) h = 0, o = s.timescale;
				else if (s.cts > t * s.timescale) {
					h = r - 1;
					break
				}
				e && s.is_sync && (l = r)
			}
			for (e && (h = l), t = i.samples[h].cts, i.nextSample = h; i.samples[h].alreadyRead === i.samples[h].size && i.samples[h + 1];) h++;
			return a = i.samples[h].offset + i.samples[h].alreadyRead, n.info("ISOFile", "Seeking to " + (e ? "RAP" : "") + " sample #" + i.nextSample + " on track " + i.tkhd.track_id + ", time " + n.getDurationString(t, o) + " and offset: " + a), {
				offset: a,
				time: t / o
			}
		}, u.prototype.seek = function(t, e) {
			var i, r, s, a = this.moov,
				o = {
					offset: 1 / 0,
					time: 1 / 0
				};
			if (this.moov) {
				for (s = 0; s < a.traks.length; s++) i = a.traks[s], (r = this.seekTrack(t, e, i)).offset < o.offset && (o.offset = r.offset), r.time < o.time && (o.time = r.time);
				return n.info("ISOFile", "Seeking at time " + n.getDurationString(o.time, 1) + " needs a buffer with a fileStart position of " + o.offset), o.offset === 1 / 0 ? o = {
					offset: this.nextParsePosition,
					time: 0
				} : o.offset = this.stream.getEndFilePositionAfter(o.offset), n.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + o.offset), o
			}
			throw "Cannot seek: moov not received!"
		}, u.prototype.equal = function(t) {
			for (var e = 0; e < this.boxes.length && e < t.boxes.length;) {
				var i = this.boxes[e],
					r = t.boxes[e];
				if (!d.boxEqual(i, r)) return !1;
				e++
			}
			return !0
		}, t.ISOFile = u, u.prototype.lastBoxStartPosition = 0, u.prototype.parsingMdat = null, u.prototype.nextParsePosition = 0, u.prototype.discardMdatData = !1, u.prototype.processIncompleteBox = function(t) {
			var e;
			return "mdat" === t.type ? (e = new d[t.type + "Box"](t.size), this.parsingMdat = e, this.boxes.push(e), this.mdats.push(e), e.start = t.start, e.hdr_size = t.hdr_size, this.stream.addUsedBytes(e.hdr_size), this.lastBoxStartPosition = e.start + e.size, this.stream.seek(e.start + e.size, !1, this.discardMdatData) ? (this.parsingMdat = null, !0) : (this.moovStartFound ? this.nextParsePosition = this.stream.findEndContiguousBuf() : this.nextParsePosition = e.start + e.size, !1)) : ("moov" === t.type && (this.moovStartFound = !0, 0 === this.mdats.length && (this.isProgressive = !0)), !!this.stream.mergeNextBuffer && this.stream.mergeNextBuffer() ? (this.nextParsePosition = this.stream.getEndPosition(), !0) : (t.type ? this.moovStartFound ? this.nextParsePosition = this.stream.getEndPosition() : this.nextParsePosition = this.stream.getPosition() + t.size : this.nextParsePosition = this.stream.getEndPosition(), !1))
		}, u.prototype.hasIncompleteMdat = function() {
			return null !== this.parsingMdat
		}, u.prototype.processIncompleteMdat = function() {
			var t;
			return t = this.parsingMdat, this.stream.seek(t.start + t.size, !1, this.discardMdatData) ? (n.debug("ISOFile", "Found 'mdat' end in buffered data"), this.parsingMdat = null, !0) : (this.nextParsePosition = this.stream.findEndContiguousBuf(), !1)
		}, u.prototype.restoreParsePosition = function() {
			return this.stream.seek(this.lastBoxStartPosition, !0, this.discardMdatData)
		}, u.prototype.saveParsePosition = function() {
			this.lastBoxStartPosition = this.stream.getPosition()
		}, u.prototype.updateUsedBytes = function(t, e) {
			this.stream.addUsedBytes && ("mdat" === t.type ? (this.stream.addUsedBytes(t.hdr_size), this.discardMdatData && this.stream.addUsedBytes(t.size - t.hdr_size)) : this.stream.addUsedBytes(t.size))
		}, u.prototype.add = d.Box.prototype.add, u.prototype.addBox = d.Box.prototype.addBox, u.prototype.init = function(t) {
			var e = t || {};
			this.add("ftyp").set("major_brand", e.brands && e.brands[0] || "iso4").set("minor_version", 0).set("compatible_brands", e.brands || ["iso4"]);
			var i = this.add("moov");
			return i.add("mvhd").set("timescale", e.timescale || 600).set("rate", e.rate || 65536).set("creation_time", 0).set("modification_time", 0).set("duration", e.duration || 0).set("volume", e.width ? 0 : 256).set("matrix", [65536, 0, 0, 0, 65536, 0, 0, 0, 1073741824]).set("next_track_id", 1), i.add("mvex"), this
		}, u.prototype.addTrack = function(t) {
			this.moov || this.init(t);
			var e = t || {};
			e.width = e.width || 320, e.height = e.height || 320, e.id = e.id || this.moov.mvhd.next_track_id, e.type = e.type || "avc1";
			var i = this.moov.add("trak");
			this.moov.mvhd.next_track_id = e.id + 1, i.add("tkhd").set("flags", d.TKHD_FLAG_ENABLED | d.TKHD_FLAG_IN_MOVIE | d.TKHD_FLAG_IN_PREVIEW).set("creation_time", 0).set("modification_time", 0).set("track_id", e.id).set("duration", e.duration || 0).set("layer", e.layer || 0).set("alternate_group", 0).set("volume", 1).set("matrix", [0, 0, 0, 0, 0, 0, 0, 0, 0]).set("width", e.width).set("height", e.height);
			var r = i.add("mdia");
			r.add("mdhd").set("creation_time", 0).set("modification_time", 0).set("timescale", e.timescale || 1).set("duration", e.media_duration || 0).set("language", e.language || "und"), r.add("hdlr").set("handler", e.hdlr || "vide").set("name", e.name || "Track created with MP4Box.js"), r.add("elng").set("extended_language", e.language || "fr-FR");
			var n = r.add("minf");
			if (void 0 !== d[e.type + "SampleEntry"]) {
				var a = new d[e.type + "SampleEntry"];
				a.data_reference_index = 1;
				var o = "";
				for (var l in d.sampleEntryCodes)
					for (var h = d.sampleEntryCodes[l], c = 0; c < h.length; c++)
						if (h.indexOf(e.type) > -1) {
							o = l;
							break
						} switch (o) {
					case "Visual":
						if (n.add("vmhd").set("graphicsmode", 0).set("opcolor", [0, 0, 0]), a.set("width", e.width).set("height", e.height).set("horizresolution", 72 << 16).set("vertresolution", 72 << 16).set("frame_count", 1).set("compressorname", e.type + " Compressor").set("depth", 24), e.avcDecoderConfigRecord) {
							var p = new d.avcCBox,
								u = new s(e.avcDecoderConfigRecord);
							p.parse(u), a.addBox(p)
						}
						break;
					case "Audio":
						n.add("smhd").set("balance", e.balance || 0), a.set("channel_count", e.channel_count || 2).set("samplesize", e.samplesize || 16).set("samplerate", e.samplerate || 65536);
						break;
					case "Hint":
						n.add("hmhd");
						break;
					case "Subtitle":
						if (n.add("sthd"), "stpp" === e.type) a.set("namespace", e.namespace || "nonamespace").set("schema_location", e.schema_location || "").set("auxiliary_mime_types", e.auxiliary_mime_types || "");
						break;
					default:
						n.add("nmhd")
				}
				e.description && a.addBox(e.description), e.description_boxes && e.description_boxes.forEach((function(t) {
					a.addBox(t)
				})), n.add("dinf").add("dref").addEntry((new d["url Box"]).set("flags", 1));
				var f = n.add("stbl");
				return f.add("stsd").addEntry(a), f.add("stts").set("sample_counts", []).set("sample_deltas", []), f.add("stsc").set("first_chunk", []).set("samples_per_chunk", []).set("sample_description_index", []), f.add("stco").set("chunk_offsets", []), f.add("stsz").set("sample_sizes", []), this.moov.mvex.add("trex").set("track_id", e.id).set("default_sample_description_index", e.default_sample_description_index || 1).set("default_sample_duration", e.default_sample_duration || 0).set("default_sample_size", e.default_sample_size || 0).set("default_sample_flags", e.default_sample_flags || 0), this.buildTrakSampleLists(i), e.id
			}
		}, d.Box.prototype.computeSize = function(t) {
			var e = t || new a;
			e.endianness = a.BIG_ENDIAN, this.write(e)
		}, u.prototype.addSample = function(t, e, i) {
			var r = i || {},
				n = {},
				s = this.getTrackById(t);
			if (null !== s) {
				n.number = s.samples.length, n.track_id = s.tkhd.track_id, n.timescale = s.mdia.mdhd.timescale, n.description_index = r.sample_description_index ? r.sample_description_index - 1 : 0, n.description = s.mdia.minf.stbl.stsd.entries[n.description_index], n.data = e, n.size = e.byteLength, n.alreadyRead = n.size, n.duration = r.duration || 1, n.cts = r.cts || 0, n.dts = r.dts || 0, n.is_sync = r.is_sync || !1, n.is_leading = r.is_leading || 0, n.depends_on = r.depends_on || 0, n.is_depended_on = r.is_depended_on || 0, n.has_redundancy = r.has_redundancy || 0, n.degradation_priority = r.degradation_priority || 0, n.offset = 0, n.subsamples = r.subsamples, s.samples.push(n), s.samples_size += n.size, s.samples_duration += n.duration, s.first_dts || (s.first_dts = r.dts), this.processSamples();
				var a = this.createSingleSampleMoof(n);
				return this.addBox(a), a.computeSize(), a.trafs[0].truns[0].data_offset = a.size + 8, this.add("mdat").data = new Uint8Array(e), n
			}
		}, u.prototype.createSingleSampleMoof = function(t) {
			var e = 0;
			e = t.is_sync ? 1 << 25 : 65536;
			var i = new d.moofBox;
			i.add("mfhd").set("sequence_number", this.nextMoofNumber), this.nextMoofNumber++;
			var r = i.add("traf"),
				n = this.getTrackById(t.track_id);
			return r.add("tfhd").set("track_id", t.track_id).set("flags", d.TFHD_FLAG_DEFAULT_BASE_IS_MOOF), r.add("tfdt").set("baseMediaDecodeTime", t.dts - n.first_dts), r.add("trun").set("flags", d.TRUN_FLAGS_DATA_OFFSET | d.TRUN_FLAGS_DURATION | d.TRUN_FLAGS_SIZE | d.TRUN_FLAGS_FLAGS | d.TRUN_FLAGS_CTS_OFFSET).set("data_offset", 0).set("first_sample_flags", 0).set("sample_count", 1).set("sample_duration", [t.duration]).set("sample_size", [t.size]).set("sample_flags", [e]).set("sample_composition_time_offset", [t.cts - t.dts]), i
		}, u.prototype.lastMoofIndex = 0, u.prototype.samplesDataSize = 0, u.prototype.resetTables = function() {
			var t, e, i, r, n, s;
			for (this.initial_duration = this.moov.mvhd.duration, this.moov.mvhd.duration = 0, t = 0; t < this.moov.traks.length; t++) {
				(e = this.moov.traks[t]).tkhd.duration = 0, e.mdia.mdhd.duration = 0, (e.mdia.minf.stbl.stco || e.mdia.minf.stbl.co64).chunk_offsets = [], (i = e.mdia.minf.stbl.stsc).first_chunk = [], i.samples_per_chunk = [], i.sample_description_index = [], (e.mdia.minf.stbl.stsz || e.mdia.minf.stbl.stz2).sample_sizes = [], (r = e.mdia.minf.stbl.stts).sample_counts = [], r.sample_deltas = [], (n = e.mdia.minf.stbl.ctts) && (n.sample_counts = [], n.sample_offsets = []), s = e.mdia.minf.stbl.stss;
				var a = e.mdia.minf.stbl.boxes.indexOf(s); - 1 != a && (e.mdia.minf.stbl.boxes[a] = null)
			}
		}, u.initSampleGroups = function(t, e, i, r, n) {
			var s, a, o, l;

			function h(t, e, i) {
				this.grouping_type = t, this.grouping_type_parameter = e, this.sbgp = i, this.last_sample_in_run = -1, this.entry_index = -1
			}
			for (e && (e.sample_groups_info = []), t.sample_groups_info || (t.sample_groups_info = []), a = 0; a < i.length; a++) {
				for (l = i[a].grouping_type + "/" + i[a].grouping_type_parameter, o = new h(i[a].grouping_type, i[a].grouping_type_parameter, i[a]), e && (e.sample_groups_info[l] = o), t.sample_groups_info[l] || (t.sample_groups_info[l] = o), s = 0; s < r.length; s++) r[s].grouping_type === i[a].grouping_type && (o.description = r[s], o.description.used = !0);
				if (n)
					for (s = 0; s < n.length; s++) n[s].grouping_type === i[a].grouping_type && (o.fragment_description = n[s], o.fragment_description.used = !0, o.is_fragment = !0)
			}
			if (e) {
				if (n)
					for (a = 0; a < n.length; a++) !n[a].used && n[a].version >= 2 && (l = n[a].grouping_type + "/0", (o = new h(n[a].grouping_type, 0)).is_fragment = !0, e.sample_groups_info[l] || (e.sample_groups_info[l] = o))
			} else
				for (a = 0; a < r.length; a++) !r[a].used && r[a].version >= 2 && (l = r[a].grouping_type + "/0", o = new h(r[a].grouping_type, 0), t.sample_groups_info[l] || (t.sample_groups_info[l] = o))
		}, u.setSampleGroupProperties = function(t, e, i, r) {
			var n, s;
			for (n in e.sample_groups = [], r) {
				var a;
				if (e.sample_groups[n] = {}, e.sample_groups[n].grouping_type = r[n].grouping_type, e.sample_groups[n].grouping_type_parameter = r[n].grouping_type_parameter, i >= r[n].last_sample_in_run && (r[n].last_sample_in_run < 0 && (r[n].last_sample_in_run = 0), r[n].entry_index++, r[n].entry_index <= r[n].sbgp.entries.length - 1 && (r[n].last_sample_in_run += r[n].sbgp.entries[r[n].entry_index].sample_count)), r[n].entry_index <= r[n].sbgp.entries.length - 1 ? e.sample_groups[n].group_description_index = r[n].sbgp.entries[r[n].entry_index].group_description_index : e.sample_groups[n].group_description_index = -1, 0 !== e.sample_groups[n].group_description_index) a = r[n].fragment_description ? r[n].fragment_description : r[n].description, e.sample_groups[n].group_description_index > 0 ? (s = e.sample_groups[n].group_description_index > 65535 ? (e.sample_groups[n].group_description_index >> 16) - 1 : e.sample_groups[n].group_description_index - 1, a && s >= 0 && (e.sample_groups[n].description = a.entries[s])) : a && a.version >= 2 && a.default_group_description_index > 0 && (e.sample_groups[n].description = a.entries[a.default_group_description_index - 1])
			}
		}, u.process_sdtp = function(t, e, i) {
			e && (t ? (e.is_leading = t.is_leading[i], e.depends_on = t.sample_depends_on[i], e.is_depended_on = t.sample_is_depended_on[i], e.has_redundancy = t.sample_has_redundancy[i]) : (e.is_leading = 0, e.depends_on = 0, e.is_depended_on = 0, e.has_redundancy = 0))
		}, u.prototype.buildSampleLists = function() {
			var t, e;
			for (t = 0; t < this.moov.traks.length; t++) e = this.moov.traks[t], this.buildTrakSampleLists(e)
		}, u.prototype.buildTrakSampleLists = function(t) {
			var e, i, r, n, s, a, o, l, h, d, c, p, f, m, g, _, y, b, x, w, v, S, U, k;
			if (t.samples = [], t.samples_duration = 0, t.samples_size = 0, i = t.mdia.minf.stbl.stco || t.mdia.minf.stbl.co64, r = t.mdia.minf.stbl.stsc, n = t.mdia.minf.stbl.stsz || t.mdia.minf.stbl.stz2, s = t.mdia.minf.stbl.stts, a = t.mdia.minf.stbl.ctts, o = t.mdia.minf.stbl.stss, l = t.mdia.minf.stbl.stsd, h = t.mdia.minf.stbl.subs, p = t.mdia.minf.stbl.stdp, d = t.mdia.minf.stbl.sbgps, c = t.mdia.minf.stbl.sgpds, b = -1, x = -1, w = -1, v = -1, S = 0, U = 0, k = 0, u.initSampleGroups(t, null, d, c), void 0 !== n) {
				for (e = 0; e < n.sample_sizes.length; e++) {
					var $ = {};
					$.number = e, $.track_id = t.tkhd.track_id, $.timescale = t.mdia.mdhd.timescale, $.alreadyRead = 0, t.samples[e] = $, $.size = n.sample_sizes[e], t.samples_size += $.size, 0 === e ? (m = 1, f = 0, $.chunk_index = m, $.chunk_run_index = f, y = r.samples_per_chunk[f], _ = 0, g = f + 1 < r.first_chunk.length ? r.first_chunk[f + 1] - 1 : 1 / 0) : e < y ? ($.chunk_index = m, $.chunk_run_index = f) : (m++, $.chunk_index = m, _ = 0, m <= g || (g = ++f + 1 < r.first_chunk.length ? r.first_chunk[f + 1] - 1 : 1 / 0), $.chunk_run_index = f, y += r.samples_per_chunk[f]), $.description_index = r.sample_description_index[$.chunk_run_index] - 1, $.description = l.entries[$.description_index], $.offset = i.chunk_offsets[$.chunk_index - 1] + _, _ += $.size, e > b && (x++, b < 0 && (b = 0), b += s.sample_counts[x]), e > 0 ? (t.samples[e - 1].duration = s.sample_deltas[x], t.samples_duration += t.samples[e - 1].duration, $.dts = t.samples[e - 1].dts + t.samples[e - 1].duration) : $.dts = 0, a ? (e >= w && (v++, w < 0 && (w = 0), w += a.sample_counts[v]), $.cts = t.samples[e].dts + a.sample_offsets[v]) : $.cts = $.dts, o ? (e == o.sample_numbers[S] - 1 ? ($.is_sync = !0, S++) : ($.is_sync = !1, $.degradation_priority = 0), h && h.entries[U].sample_delta + k == e + 1 && ($.subsamples = h.entries[U].subsamples, k += h.entries[U].sample_delta, U++)) : $.is_sync = !0, u.process_sdtp(t.mdia.minf.stbl.sdtp, $, $.number), $.degradation_priority = p ? p.priority[e] : 0, h && h.entries[U].sample_delta + k == e && ($.subsamples = h.entries[U].subsamples, k += h.entries[U].sample_delta), (d.length > 0 || c.length > 0) && u.setSampleGroupProperties(t, $, e, t.sample_groups_info)
				}
				e > 0 && (t.samples[e - 1].duration = Math.max(t.mdia.mdhd.duration - t.samples[e - 1].dts, 0), t.samples_duration += t.samples[e - 1].duration)
			}
		}, u.prototype.updateSampleLists = function() {
			var t, e, i, r, n, s, a, o, l, h, c, p, f, m, g;
			if (void 0 !== this.moov)
				for (; this.lastMoofIndex < this.moofs.length;)
					if (l = this.moofs[this.lastMoofIndex], this.lastMoofIndex++, "moof" == l.type)
						for (h = l, t = 0; t < h.trafs.length; t++) {
							for (c = h.trafs[t], p = this.getTrackById(c.tfhd.track_id), f = this.getTrexById(c.tfhd.track_id), r = c.tfhd.flags & d.TFHD_FLAG_SAMPLE_DESC ? c.tfhd.default_sample_description_index : f ? f.default_sample_description_index : 1, n = c.tfhd.flags & d.TFHD_FLAG_SAMPLE_DUR ? c.tfhd.default_sample_duration : f ? f.default_sample_duration : 0, s = c.tfhd.flags & d.TFHD_FLAG_SAMPLE_SIZE ? c.tfhd.default_sample_size : f ? f.default_sample_size : 0, a = c.tfhd.flags & d.TFHD_FLAG_SAMPLE_FLAGS ? c.tfhd.default_sample_flags : f ? f.default_sample_flags : 0, c.sample_number = 0, c.sbgps.length > 0 && u.initSampleGroups(p, c, c.sbgps, p.mdia.minf.stbl.sgpds, c.sgpds), e = 0; e < c.truns.length; e++) {
								var _ = c.truns[e];
								for (i = 0; i < _.sample_count; i++) {
									(m = {}).moof_number = this.lastMoofIndex, m.number_in_traf = c.sample_number, c.sample_number++, m.number = p.samples.length, c.first_sample_index = p.samples.length, p.samples.push(m), m.track_id = p.tkhd.track_id, m.timescale = p.mdia.mdhd.timescale, m.description_index = r - 1, m.description = p.mdia.minf.stbl.stsd.entries[m.description_index], m.size = s, _.flags & d.TRUN_FLAGS_SIZE && (m.size = _.sample_size[i]), p.samples_size += m.size, m.duration = n, _.flags & d.TRUN_FLAGS_DURATION && (m.duration = _.sample_duration[i]), p.samples_duration += m.duration, p.first_traf_merged || i > 0 ? m.dts = p.samples[p.samples.length - 2].dts + p.samples[p.samples.length - 2].duration : (c.tfdt ? m.dts = c.tfdt.baseMediaDecodeTime : m.dts = 0, p.first_traf_merged = !0), m.cts = m.dts, _.flags & d.TRUN_FLAGS_CTS_OFFSET && (m.cts = m.dts + _.sample_composition_time_offset[i]), g = a, _.flags & d.TRUN_FLAGS_FLAGS ? g = _.sample_flags[i] : 0 === i && _.flags & d.TRUN_FLAGS_FIRST_FLAG && (g = _.first_sample_flags), m.is_sync = !(g >> 16 & 1), m.is_leading = g >> 26 & 3, m.depends_on = g >> 24 & 3, m.is_depended_on = g >> 22 & 3, m.has_redundancy = g >> 20 & 3, m.degradation_priority = 65535 & g;
									var y = !!(c.tfhd.flags & d.TFHD_FLAG_BASE_DATA_OFFSET),
										b = !!(c.tfhd.flags & d.TFHD_FLAG_DEFAULT_BASE_IS_MOOF),
										x = !!(_.flags & d.TRUN_FLAGS_DATA_OFFSET),
										w = 0;
									w = y ? c.tfhd.base_data_offset : b || 0 === e ? h.start : o, m.offset = 0 === e && 0 === i ? x ? w + _.data_offset : w : o, o = m.offset + m.size, (c.sbgps.length > 0 || c.sgpds.length > 0 || p.mdia.minf.stbl.sbgps.length > 0 || p.mdia.minf.stbl.sgpds.length > 0) && u.setSampleGroupProperties(p, m, m.number_in_traf, c.sample_groups_info)
								}
							}
							if (c.subs) {
								p.has_fragment_subsamples = !0;
								var v = c.first_sample_index;
								for (e = 0; e < c.subs.entries.length; e++) v += c.subs.entries[e].sample_delta, (m = p.samples[v - 1]).subsamples = c.subs.entries[e].subsamples
							}
						}
		}, u.prototype.getSample = function(t, e) {
			var i, r = t.samples[e];
			if (!this.moov) return null;
			if (r.data) {
				if (r.alreadyRead == r.size) return r
			} else r.data = new Uint8Array(r.size), r.alreadyRead = 0, this.samplesDataSize += r.size, n.debug("ISOFile", "Allocating sample #" + e + " on track #" + t.tkhd.track_id + " of size " + r.size + " (total: " + this.samplesDataSize + ")");
			for (;;) {
				var s = this.stream.findPosition(!0, r.offset + r.alreadyRead, !1);
				if (!(s > -1)) return null;
				var o = (i = this.stream.buffers[s]).byteLength - (r.offset + r.alreadyRead - i.fileStart);
				if (r.size - r.alreadyRead <= o) return n.debug("ISOFile", "Getting sample #" + e + " data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - i.fileStart) + " read size: " + (r.size - r.alreadyRead) + " full size: " + r.size + ")"), a.memcpy(r.data.buffer, r.alreadyRead, i, r.offset + r.alreadyRead - i.fileStart, r.size - r.alreadyRead), i.usedBytes += r.size - r.alreadyRead, this.stream.logBufferLevel(), r.alreadyRead = r.size, r;
				if (0 === o) return null;
				n.debug("ISOFile", "Getting sample #" + e + " partial data (alreadyRead: " + r.alreadyRead + " offset: " + (r.offset + r.alreadyRead - i.fileStart) + " read size: " + o + " full size: " + r.size + ")"), a.memcpy(r.data.buffer, r.alreadyRead, i, r.offset + r.alreadyRead - i.fileStart, o), r.alreadyRead += o, i.usedBytes += o, this.stream.logBufferLevel()
			}
		}, u.prototype.releaseSample = function(t, e) {
			var i = t.samples[e];
			return i.data ? (this.samplesDataSize -= i.size, i.data = null, i.alreadyRead = 0, i.size) : 0
		}, u.prototype.getAllocatedSampleDataSize = function() {
			return this.samplesDataSize
		}, u.prototype.getCodecs = function() {
			var t, e = "";
			for (t = 0; t < this.moov.traks.length; t++) {
				t > 0 && (e += ","), e += this.moov.traks[t].mdia.minf.stbl.stsd.entries[0].getCodec()
			}
			return e
		}, u.prototype.getTrexById = function(t) {
			var e;
			if (!this.moov || !this.moov.mvex) return null;
			for (e = 0; e < this.moov.mvex.trexs.length; e++) {
				var i = this.moov.mvex.trexs[e];
				if (i.track_id == t) return i
			}
			return null
		}, u.prototype.getTrackById = function(t) {
			if (void 0 === this.moov) return null;
			for (var e = 0; e < this.moov.traks.length; e++) {
				var i = this.moov.traks[e];
				if (i.tkhd.track_id == t) return i
			}
			return null
		}, u.prototype.items = [], u.prototype.itemsDataSize = 0, u.prototype.flattenItemInfo = function() {
			var t, e, i, r = this.items,
				s = this.meta;
			if (null != s && void 0 !== s.hdlr && void 0 !== s.iinf) {
				for (t = 0; t < s.iinf.item_infos.length; t++)(i = {}).id = s.iinf.item_infos[t].item_ID, r[i.id] = i, i.ref_to = [], i.name = s.iinf.item_infos[t].item_name, s.iinf.item_infos[t].protection_index > 0 && (i.protection = s.ipro.protections[s.iinf.item_infos[t].protection_index - 1]), s.iinf.item_infos[t].item_type ? i.type = s.iinf.item_infos[t].item_type : i.type = "mime", i.content_type = s.iinf.item_infos[t].content_type, i.content_encoding = s.iinf.item_infos[t].content_encoding;
				if (s.iloc)
					for (t = 0; t < s.iloc.items.length; t++) {
						var a = s.iloc.items[t];
						switch (i = r[a.item_ID], 0 !== a.data_reference_index && (n.warn("Item storage with reference to other files: not supported"), i.source = s.dinf.boxes[a.data_reference_index - 1]), a.construction_method) {
							case 0:
								break;
							case 1:
							case 2:
								n.warn("Item storage with construction_method : not supported")
						}
						for (i.extents = [], i.size = 0, e = 0; e < a.extents.length; e++) i.extents[e] = {}, i.extents[e].offset = a.extents[e].extent_offset + a.base_offset, i.extents[e].length = a.extents[e].extent_length, i.extents[e].alreadyRead = 0, i.size += i.extents[e].length
					}
				if (s.pitm && (r[s.pitm.item_id].primary = !0), s.iref)
					for (t = 0; t < s.iref.references.length; t++) {
						var o = s.iref.references[t];
						for (e = 0; e < o.references.length; e++) r[o.from_item_ID].ref_to.push({
							type: o.type,
							id: o.references[e]
						})
					}
				if (s.iprp)
					for (var l = 0; l < s.iprp.ipmas.length; l++) {
						var h = s.iprp.ipmas[l];
						for (t = 0; t < h.associations.length; t++) {
							var d = h.associations[t];
							for (void 0 === (i = r[d.id]).properties && (i.properties = {}, i.properties.boxes = []), e = 0; e < d.props.length; e++) {
								var c = d.props[e];
								if (c.property_index > 0 && c.property_index - 1 < s.iprp.ipco.boxes.length) {
									var p = s.iprp.ipco.boxes[c.property_index - 1];
									i.properties[p.type] = p, i.properties.boxes.push(p)
								}
							}
						}
					}
			}
		}, u.prototype.getItem = function(t) {
			var e, i;
			if (!this.meta) return null;
			if (!(i = this.items[t]).data && i.size) i.data = new Uint8Array(i.size), i.alreadyRead = 0, this.itemsDataSize += i.size, n.debug("ISOFile", "Allocating item #" + t + " of size " + i.size + " (total: " + this.itemsDataSize + ")");
			else if (i.alreadyRead === i.size) return i;
			for (var r = 0; r < i.extents.length; r++) {
				var s = i.extents[r];
				if (s.alreadyRead !== s.length) {
					var o = this.stream.findPosition(!0, s.offset + s.alreadyRead, !1);
					if (!(o > -1)) return null;
					var l = (e = this.stream.buffers[o]).byteLength - (s.offset + s.alreadyRead - e.fileStart);
					if (!(s.length - s.alreadyRead <= l)) return n.debug("ISOFile", "Getting item #" + t + " extent #" + r + " partial data (alreadyRead: " + s.alreadyRead + " offset: " + (s.offset + s.alreadyRead - e.fileStart) + " read size: " + l + " full extent size: " + s.length + " full item size: " + i.size + ")"), a.memcpy(i.data.buffer, i.alreadyRead, e, s.offset + s.alreadyRead - e.fileStart, l), s.alreadyRead += l, i.alreadyRead += l, e.usedBytes += l, this.stream.logBufferLevel(), null;
					n.debug("ISOFile", "Getting item #" + t + " extent #" + r + " data (alreadyRead: " + s.alreadyRead + " offset: " + (s.offset + s.alreadyRead - e.fileStart) + " read size: " + (s.length - s.alreadyRead) + " full extent size: " + s.length + " full item size: " + i.size + ")"), a.memcpy(i.data.buffer, i.alreadyRead, e, s.offset + s.alreadyRead - e.fileStart, s.length - s.alreadyRead), e.usedBytes += s.length - s.alreadyRead, this.stream.logBufferLevel(), i.alreadyRead += s.length - s.alreadyRead, s.alreadyRead = s.length
				}
			}
			return i.alreadyRead === i.size ? i : null
		}, u.prototype.releaseItem = function(t) {
			var e = this.items[t];
			if (e.data) {
				this.itemsDataSize -= e.size, e.data = null, e.alreadyRead = 0;
				for (var i = 0; i < e.extents.length; i++) {
					e.extents[i].alreadyRead = 0
				}
				return e.size
			}
			return 0
		}, u.prototype.processItems = function(t) {
			for (var e in this.items) {
				var i = this.items[e];
				this.getItem(i.id), t && !i.sent && (t(i), i.sent = !0, i.data = null)
			}
		}, u.prototype.hasItem = function(t) {
			for (var e in this.items) {
				var i = this.items[e];
				if (i.name === t) return i.id
			}
			return -1
		}, u.prototype.getMetaHandler = function() {
			return this.meta ? this.meta.hdlr.handler : null
		}, u.prototype.getPrimaryItem = function() {
			return this.meta && this.meta.pitm ? this.getItem(this.meta.pitm.item_id) : null
		}, u.prototype.itemToFragmentedTrackFile = function(t) {
			var e = t || {},
				i = null;
			if (null == (i = e.itemId ? this.getItem(e.itemId) : this.getPrimaryItem())) return null;
			var r = new u;
			r.discardMdatData = !1;
			var n = {
				type: i.type,
				description_boxes: i.properties.boxes
			};
			i.properties.ispe && (n.width = i.properties.ispe.image_width, n.height = i.properties.ispe.image_height);
			var s = r.addTrack(n);
			return s ? (r.addSample(s, i.data), r) : null
		}, u.prototype.write = function(t) {
			for (var e = 0; e < this.boxes.length; e++) this.boxes[e].write(t)
		}, u.prototype.createFragment = function(t, e, i) {
			var r = this.getTrackById(t),
				s = this.getSample(r, e);
			if (null == s) return s = r.samples[e], this.nextSeekPosition ? this.nextSeekPosition = Math.min(s.offset + s.alreadyRead, this.nextSeekPosition) : this.nextSeekPosition = r.samples[e].offset + s.alreadyRead, null;
			var o = i || new a;
			o.endianness = a.BIG_ENDIAN;
			var l = this.createSingleSampleMoof(s);
			l.write(o), l.trafs[0].truns[0].data_offset = l.size + 8, n.debug("MP4Box", "Adjusting data_offset with new value " + l.trafs[0].truns[0].data_offset), o.adjustUint32(l.trafs[0].truns[0].data_offset_position, l.trafs[0].truns[0].data_offset);
			var h = new d.mdatBox;
			return h.data = s.data, h.write(o), o
		}, u.writeInitializationSegment = function(t, e, i, r) {
			var s;
			n.debug("ISOFile", "Generating initialization segment");
			var o = new a;
			o.endianness = a.BIG_ENDIAN, t.write(o);
			var l = e.add("mvex");
			for (i && l.add("mehd").set("fragment_duration", i), s = 0; s < e.traks.length; s++) l.add("trex").set("track_id", e.traks[s].tkhd.track_id).set("default_sample_description_index", 1).set("default_sample_duration", r).set("default_sample_size", 0).set("default_sample_flags", 65536);
			return e.write(o), o.buffer
		}, u.prototype.save = function(t) {
			var e = new a;
			e.endianness = a.BIG_ENDIAN, this.write(e), e.save(t)
		}, u.prototype.getBuffer = function() {
			var t = new a;
			return t.endianness = a.BIG_ENDIAN, this.write(t), t.buffer
		}, u.prototype.initializeSegmentation = function() {
			var t, e, i, r;
			for (null === this.onSegment && n.warn("MP4Box", "No segmentation callback set!"), this.isFragmentationInitialized || (this.isFragmentationInitialized = !0, this.nextMoofNumber = 0, this.resetTables()), e = [], t = 0; t < this.fragmentedTracks.length; t++) {
				var s = new d.moovBox;
				s.mvhd = this.moov.mvhd, s.boxes.push(s.mvhd), i = this.getTrackById(this.fragmentedTracks[t].id), s.boxes.push(i), s.traks.push(i), (r = {}).id = i.tkhd.track_id, r.user = this.fragmentedTracks[t].user, r.buffer = u.writeInitializationSegment(this.ftyp, s, this.moov.mvex && this.moov.mvex.mehd ? this.moov.mvex.mehd.fragment_duration : void 0, this.moov.traks[t].samples.length > 0 ? this.moov.traks[t].samples[0].duration : 0), e.push(r)
			}
			return e
		}, d.Box.prototype.printHeader = function(t) {
			this.size += 8, this.size > o && (this.size += 8), "uuid" === this.type && (this.size += 16), t.log(t.indent + "size:" + this.size), t.log(t.indent + "type:" + this.type)
		}, d.FullBox.prototype.printHeader = function(t) {
			this.size += 4, d.Box.prototype.printHeader.call(this, t), t.log(t.indent + "version:" + this.version), t.log(t.indent + "flags:" + this.flags)
		}, d.Box.prototype.print = function(t) {
			this.printHeader(t)
		}, d.ContainerBox.prototype.print = function(t) {
			this.printHeader(t);
			for (var e = 0; e < this.boxes.length; e++)
				if (this.boxes[e]) {
					var i = t.indent;
					t.indent += " ", this.boxes[e].print(t), t.indent = i
				}
		}, u.prototype.print = function(t) {
			t.indent = "";
			for (var e = 0; e < this.boxes.length; e++) this.boxes[e] && this.boxes[e].print(t)
		}, d.mvhdBox.prototype.print = function(t) {
			d.FullBox.prototype.printHeader.call(this, t), t.log(t.indent + "creation_time: " + this.creation_time), t.log(t.indent + "modification_time: " + this.modification_time), t.log(t.indent + "timescale: " + this.timescale), t.log(t.indent + "duration: " + this.duration), t.log(t.indent + "rate: " + this.rate), t.log(t.indent + "volume: " + (this.volume >> 8)), t.log(t.indent + "matrix: " + this.matrix.join(", ")), t.log(t.indent + "next_track_id: " + this.next_track_id)
		}, d.tkhdBox.prototype.print = function(t) {
			d.FullBox.prototype.printHeader.call(this, t), t.log(t.indent + "creation_time: " + this.creation_time), t.log(t.indent + "modification_time: " + this.modification_time), t.log(t.indent + "track_id: " + this.track_id), t.log(t.indent + "duration: " + this.duration), t.log(t.indent + "volume: " + (this.volume >> 8)), t.log(t.indent + "matrix: " + this.matrix.join(", ")), t.log(t.indent + "layer: " + this.layer), t.log(t.indent + "alternate_group: " + this.alternate_group), t.log(t.indent + "width: " + this.width), t.log(t.indent + "height: " + this.height)
		};
		var f = {
			createFile: function(t, e) {
				var i = void 0 === t || t,
					r = new u(e);
				return r.discardMdatData = !i, r
			}
		};
		t.createFile = f.createFile
	}(wt);
	class vt {
		constructor(t) {
			this.data = new Uint8Array(t), this.idx = 0, this.size = t
		}
		getData() {
			if (this.idx !== this.size) throw new Error("Mismatch between size reserved and sized used");
			return this.data.slice(0, this.idx)
		}
		writeUint8(t) {
			this.data.set([t], this.idx), this.idx += 1
		}
		writeUint16(t) {
			const e = new Uint16Array(1);
			e[0] = t;
			const i = new Uint8Array(e.buffer);
			this.data.set([i[1], i[0]], this.idx), this.idx += 2
		}
		writeUint8Array(t) {
			this.data.set(t, this.idx), this.idx += t.length
		}
	}
	const St = (t, e, {
		VideoDecoder: i,
		EncodedVideoChunk: r,
		debug: n
	}) => new Promise(((s, a) => {
		n && console.info("Decoding video from", t);
		try {
			const o = wt.createFile();
			let l;
			const h = new i({
				output: t => {
					createImageBitmap(t, {
						resizeQuality: "low"
					}).then((i => {
						e(i), t.close(), h.decodeQueueSize <= 0 && setTimeout((() => {
							"closed" !== h.state && (h.close(), s())
						}), 500)
					}))
				},
				error: t => {
					console.error(t), a(t)
				}
			});
			o.onReady = t => {
				if (t && t.videoTracks && t.videoTracks[0]) {
					[{
						codec: l
					}] = t.videoTracks, n && console.info("Video with codec:", l);
					const e = (t => {
						let e, i = 7;
						for (e = 0; e < t.SPS.length; e += 1) i += 2 + t.SPS[e].length;
						for (e = 0; e < t.PPS.length; e += 1) i += 2 + t.PPS[e].length;
						const r = new vt(i);
						for (r.writeUint8(t.configurationVersion), r.writeUint8(t.AVCProfileIndication), r.writeUint8(t.profile_compatibility), r.writeUint8(t.AVCLevelIndication), r.writeUint8(t.lengthSizeMinusOne + 252), r.writeUint8(t.nb_SPS_nalus + 224), e = 0; e < t.SPS.length; e += 1) r.writeUint16(t.SPS[e].length), r.writeUint8Array(t.SPS[e].nalu);
						for (r.writeUint8(t.nb_PPS_nalus), e = 0; e < t.PPS.length; e += 1) r.writeUint16(t.PPS[e].length), r.writeUint8Array(t.PPS[e].nalu);
						return r.getData()
					})(o.moov.traks[0].mdia.minf.stbl.stsd.entries[0].avcC);
					h.configure({
						codec: l,
						description: e
					}), o.setExtractionOptions(t.videoTracks[0].id), o.start()
				} else a(new Error("URL provided is not a valid mp4 video file."))
			}, o.onSamples = (t, e, i) => {
				for (let t = 0; t < i.length; t += 1) {
					const e = i[t],
						n = e.is_sync ? "key" : "delta",
						s = new r({
							type: n,
							timestamp: e.cts,
							duration: e.duration,
							data: e.data
						});
					h.decode(s)
				}
			}, fetch(t).then((t => {
				const e = t.body.getReader();
				let i = 0;
				return e.read().then((function t({
					done: r,
					value: n
				}) {
					if (r) return o.flush(), null;
					const s = n.buffer;
					return s.fileStart = i, i += s.byteLength, o.appendBuffer(s), e.read().then(t)
				}))
			}))
		} catch (t) {
			a(t)
		}
	}));
	class Ut {
		constructor({
			src: t,
			scrollyVideoContainer: e,
			cover: i = !0,
			sticky: r = !0,
			full: n = !0,
			trackScroll: s = !0,
			transitionSpeed: a = 8,
			frameThreshold: o = .1,
			useWebCodecs: l = !0,
			debug: h = !1
		}) {
			if ("object" != typeof document) return void console.error("ScrollyVideo must be initiated in a DOM context");
			if (!e) return void console.error("scrollyVideoContainer must be a valid DOM object");
			if (!t) return void console.error("Must provide valid video src to ScrollyVideo");
			if (e instanceof Element) this.container = e;
			else {
				if ("string" != typeof e) throw new Error("scrollyVideoContainer must be a valid DOM object");
				if (this.container = document.getElementById(e), !this.container) throw new Error("scrollyVideoContainer must be a valid DOM object")
			}
			this.src = t, this.transitionSpeed = a, this.frameThreshold = o, this.useWebCodecs = l, this.cover = i, this.sticky = r, this.full = n, this.trackScroll = s, this.debug = h, this.video = document.createElement("video"), this.video.src = t, this.video.preload = "auto", this.video.tabIndex = 0, this.video.autobuffer = !0, this.video.playsInline = !0, this.video.muted = !0, this.video.pause(), this.video.load(), this.container.appendChild(this.video), r && (this.container.style.display = "block", this.container.style.position = "sticky", this.container.style.top = "0"), n && (this.container.style.width = "100%", this.container.style.height = "100vh", this.container.style.overflow = "hidden"), i && this.setCoverStyle(this.video);
			const d = (new xt).getEngine();
			this.isSafari = "WebKit" === d.name, h && this.isSafari && console.info("Safari browser detected"), this.currentTime = 0, this.targetTime = 0, this.canvas = null, this.context = null, this.frames = [], this.frameRate = 0, this.updateScrollPercentage = t => {
				const e = this.container.parentNode.getBoundingClientRect(),
					i = -e.top / (e.height - window.innerHeight);
				this.debug && console.info("ScrollyVideo scrolled to", i), this.setTargetTimePercent(i, t)
			}, this.trackScroll ? (window.addEventListener("scroll", this.updateScrollPercentage), this.video.addEventListener("loadedmetadata", (() => this.updateScrollPercentage(!0)), {
				once: !0
			})) : this.video.addEventListener("loadedmetadata", (() => this.setTargetTimePercent(0, !0)), {
				once: !0
			}), this.resize = () => {
				this.debug && console.info("ScrollyVideo resizing..."), this.cover && this.setCoverStyle(this.canvas || this.video), this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate))
			}, window.addEventListener("resize", this.resize), this.video.addEventListener("progress", this.resize), this.decodeVideo()
		}
		setCoverStyle(t) {
			if (this.cover) {
				t.style.position = "absolute", t.style.top = "50%", t.style.left = "50%", t.style.transform = "translate(-50%, -50%)", t.style.minWidth = "101%", t.style.minHeight = "101%";
				const {
					width: e,
					height: i
				} = this.container.getBoundingClientRect(), r = t.videoWidth || t.width, n = t.videoHeight || t.height;
				this.debug && console.info("Container dimensions:", [e, i]), this.debug && console.info("Element dimensions:", [r, n]), e / i > r / n ? (t.style.width = "100%", t.style.height = "auto") : (t.style.height = "100%", t.style.width = "auto")
			}
		}
		decodeVideo() {
			var t, e, i;
			this.useWebCodecs && this.src && (t = this.src, e = t => {
				this.frames.push(t)
			}, i = this.debug, "function" == typeof VideoDecoder && "function" == typeof EncodedVideoChunk ? (i && console.info("WebCodecs is natively supported, using native version..."), St(t, e, {
				VideoDecoder: VideoDecoder,
				EncodedVideoChunk: EncodedVideoChunk,
				debug: i
			})) : (i && console.info("WebCodecs is not available in this browser."), Promise.resolve())).catch((() => {
				this.debug && console.error("Error encountered while decoding video"), this.frames = [], this.video.load()
			})).then((() => {
				0 !== this.frames.length ? (this.frameRate = this.frames.length / this.video.duration, this.debug && console.info("Received", this.frames.length, "frames"), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.video.style.display = "none", this.container.appendChild(this.canvas), this.cover && this.setCoverStyle(this.canvas), this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate))) : this.debug && console.error("No frames were received from webCodecs")
			}))
		}
		paintCanvasFrame(t) {
			if (this.canvas) {
				const e = this.frames[t];
				if (e) {
					this.debug && console.info("Painting frame", t), this.canvas.width = e.width, this.canvas.height = e.height;
					const {
						width: i,
						height: r
					} = this.container.getBoundingClientRect();
					i / r > e.width / e.height ? (this.canvas.style.width = "100%", this.canvas.style.height = "auto") : (this.canvas.style.height = "100%", this.canvas.style.width = "auto"), this.context.drawImage(e, 0, 0, e.width, e.height)
				}
			}
		}
		transitionToTargetTime(t) {
			if (this.debug && console.info("Transitioning targetTime:", this.targetTime, "currentTime:", this.currentTime), isNaN(this.targetTime) || Math.abs(this.currentTime - this.targetTime) < this.frameThreshold) return this.video.pause(), void(this.transitioning = !1);
			this.targetTime > this.video.duration && (this.targetTime = this.video.duration), this.targetTime < 0 && (this.targetTime = 0);
			const e = this.targetTime - this.currentTime;
			if (this.canvas) this.currentTime += e / (256 / this.transitionSpeed), t && (this.currentTime = this.targetTime), this.paintCanvasFrame(Math.floor(this.currentTime * this.frameRate));
			else if (t || this.isSafari || this.targetTime - this.currentTime < 0) this.video.pause(), this.currentTime += e / (64 / this.transitionSpeed), t && (this.currentTime = this.targetTime), this.video.currentTime = this.currentTime;
			else {
				const t = Math.max(Math.min(4 * e, this.transitionSpeed, 16), 1);
				this.debug && console.info("ScrollyVideo playbackRate:", t), isNaN(t) || (this.video.playbackRate = t, this.video.play()), this.currentTime = this.video.currentTime
			}
			"function" == typeof requestAnimationFrame && requestAnimationFrame((() => this.transitionToTargetTime()))
		}
		setTargetTimePercent(t, e) {
			this.targetTime = Math.max(Math.min(t, 1), 0) * (this.frames.length && this.frameRate ? this.frames.length / this.frameRate : this.video.duration), !e && Math.abs(this.currentTime - this.targetTime) < this.frameThreshold || !e && this.transitioning || (this.canvas || this.video.play(), this.transitioning = !0, this.transitionToTargetTime(e))
		}
		destroy() {
			this.debug && console.info("Destroying ScrollyVideo"), this.trackScroll && window.removeEventListener("scroll", this.updateScrollPercentage), window.removeEventListener("resize", this.resize), this.container && (this.container.innerHTML = "")
		}
	}

	function kt(e) {
		let i;
		return {
			c() {
				i = w("div")
			},
			m(t, r) {
				y(t, i, r), e[3](i)
			},
			p: t,
			i: t,
			o: t,
			d(t) {
				t && b(i), e[3](null)
			}
		}
	}

	function $t(t, i, r) {
		let n, s, a = "";
		var o;
		return o = () => {
			s && s.destroy && s.destroy()
		}, I().$$.on_destroy.push(o), t.$$set = t => {
			r(4, i = e(e({}, i), m(t)))
		}, t.$$.update = () => {
			if (n) {
				const {
					videoPercentage: t,
					...e
				} = i;
				JSON.stringify(e) !== a && (s && s.destroy && s.destroy(), r(1, s = new Ut({
					...e,
					scrollyVideoContainer: n
				})), r(2, a = JSON.stringify(e))), s && "number" == typeof t && t >= 0 && t <= 1 && s.setTargetTimePercent(t)
			}
		}, i = m(i), [n, s, a, function(t) {
			D[t ? "unshift" : "push"]((() => {
				n = t, r(0, n)
			}))
		}]
	}
	class Et extends ht {
		constructor(t) {
			super(), lt(this, t, $t, kt, a, {})
		}
	}

	function zt(t, e, i) {
		const r = t.slice();
		return r[9] = e[i], r
	}

	function At(t) {
		let e, i;
		return e = new Et({
			props: {
				src: t[1],
				trackScroll: t[2],
				videoPercentage: t[3]
			}
		}), {
			c() {
				nt(e.$$.fragment)
			},
			m(t, r) {
				st(e, t, r), i = !0
			},
			p(t, i) {
				const r = {};
				2 & i && (r.src = t[1]), 4 & i && (r.trackScroll = t[2]), 8 & i && (r.videoPercentage = t[3]), e.$set(r)
			},
			i(t) {
				i || (Q(e.$$.fragment, t), i = !0)
			},
			o(t) {
				J(e.$$.fragment, t), i = !1
			},
			d(t) {
				at(e, t)
			}
		}
	}

	function Tt(e) {
		let i, r, n, s = e[9] + "";
		return {
			c() {
				i = w("div"), r = w("div"), n = v(s), $(r, "class", "card svelte-161tbt5"), $(i, "class", "card-wrap svelte-161tbt5")
			},
			m(t, e) {
				y(t, i, e), _(i, r), _(r, n)
			},
			p: t,
			d(t) {
				t && b(i)
			}
		}
	}

	function Bt(t) {
		let e, i, r, s, a, o, l, h, d, c, p, u = Math.floor(100 * t[3]) + "";
		return {
			c() {
				e = w("div"), i = w("h3"), i.textContent = "Video Position", r = S(), s = w("div"), a = w("label"), o = v(u), l = v("%"), h = S(), d = w("input"), $(i, "class", "svelte-161tbt5"), $(a, "for", "video-position"), $(a, "class", "svelte-161tbt5"), $(d, "id", "video-position"), $(d, "type", "range"), $(d, "min", "0"), $(d, "max", "1"), $(d, "step", "0.01"), $(d, "class", "svelte-161tbt5"), $(s, "class", "option-wrap svelte-161tbt5"), $(e, "class", "scroll-track svelte-161tbt5")
			},
			m(n, u) {
				y(n, e, u), _(e, i), _(e, r), _(e, s), _(s, a), _(a, o), _(a, l), _(s, h), _(s, d), z(d, t[3]), c || (p = [k(d, "change", t[8]), k(d, "input", t[8])], c = !0)
			},
			p(t, e) {
				8 & e && u !== (u = Math.floor(100 * t[3]) + "") && E(o, u), 8 & e && z(d, t[3])
			},
			d(t) {
				t && b(e), c = !1, n(p)
			}
		}
	}

	function It(t) {
		let e, i, r, s, a, o, l, h, d, c, p, u, f, m, g, v, U, E, A, T;
		H(t[5]);
		let B = t[1] && At(t),
			I = t[4],
			C = [];
		for (let e = 0; e < I.length; e += 1) C[e] = Tt(zt(t, I, e));
		let P = !t[2] && Bt(t);
		return {
			c() {
				e = w("div"), B && B.c(), i = S();
				for (let t = 0; t < C.length; t += 1) C[t].c();
				r = S(), s = w("div"), a = w("div"), o = w("h3"), o.textContent = "Try It", l = S(), h = w("div"), d = w("label"), d.textContent = "Video URL", c = S(), p = w("input"), u = S(), f = w("div"), m = w("label"), m.textContent = "Track Scroll", g = S(), v = w("input"), U = S(), P && P.c(), $(o, "class", "svelte-161tbt5"), $(d, "for", "video-url"), $(d, "class", "svelte-161tbt5"), $(p, "id", "video-url"), $(p, "type", "text"), $(p, "class", "svelte-161tbt5"), $(h, "class", "option-wrap svelte-161tbt5"), $(m, "for", "track-scroll"), $(m, "class", "svelte-161tbt5"), $(v, "id", "track-scroll"), $(v, "type", "checkbox"), $(v, "class", "svelte-161tbt5"), $(f, "class", "option-wrap svelte-161tbt5"), $(a, "class", "card options svelte-161tbt5"), $(s, "class", "card-wrap svelte-161tbt5"), $(e, "class", "video-container svelte-161tbt5")
			},
			m(n, b) {
				y(n, e, b), B && B.m(e, null), _(e, i);
				for (let t = 0; t < C.length; t += 1) C[t].m(e, null);
				_(e, r), _(e, s), _(s, a), _(a, o), _(a, l), _(a, h), _(h, d), _(h, c), _(h, p), z(p, t[1]), _(a, u), _(a, f), _(f, m), _(f, g), _(f, v), v.checked = t[2], _(e, U), P && P.m(e, null), E = !0, A || (T = [k(window, "resize", t[5]), k(p, "input", t[6]), k(v, "change", t[7])], A = !0)
			},
			p(t, [n]) {
				if (t[1] ? B ? (B.p(t, n), 2 & n && Q(B, 1)) : (B = At(t), B.c(), Q(B, 1), B.m(e, i)) : B && (K(), J(B, 1, 1, (() => {
						B = null
					})), X()), 16 & n) {
					let i;
					for (I = t[4], i = 0; i < I.length; i += 1) {
						const s = zt(t, I, i);
						C[i] ? C[i].p(s, n) : (C[i] = Tt(s), C[i].c(), C[i].m(e, r))
					}
					for (; i < C.length; i += 1) C[i].d(1);
					C.length = I.length
				}
				2 & n && p.value !== t[1] && z(p, t[1]), 4 & n && (v.checked = t[2]), t[2] ? P && (P.d(1), P = null) : P ? P.p(t, n) : (P = Bt(t), P.c(), P.m(e, null))
			},
			i(t) {
				E || (Q(B), E = !0)
			},
			o(t) {
				J(B), E = !1
			},
			d(t) {
				t && b(e), B && B.d(), x(C, t), P && P.d(), A = !1, n(T)
			}
		}
	}

	function Ct(t, e, i) {
		let r, n, s = !0,
			a = 0;
		return t.$$.update = () => {
			1 & t.$$.dirty && n && i(1, r = n > 760 ? "https://scrollyvideo.js.org/goldengate.mp4" : "https://scrollyvideo.js.org/goldengate_mobile.mp4")
		}, [n, r, s, a, ["This kind of scrolling video is common in visual journalism, marketing materials, or other scrollytelling applications.", "This library provides a way to easily create these kinds of scrolling video experiences, without fussing with special video encoding formats.", "Compatible with React, Svelte, Vue, and plain HTML."], function() {
			i(0, n = window.innerWidth)
		}, function() {
			r = this.value, i(1, r), i(0, n)
		}, function() {
			s = this.checked, i(2, s)
		}, function() {
			var t;
			t = this.value, a = "" === t ? null : +t, i(3, a)
		}]
	}
	class Pt extends ht {
		constructor(t) {
			super(), lt(this, t, Ct, It, a, {})
		}
	}

	function Ft(t, e, i) {
		const r = t.slice();
		return r[18] = e[i], r
	}

	function Lt(t, e, i) {
		const r = t.slice();
		return r[18] = e[i], r
	}

	function Rt(t, e, i) {
		const r = t.slice();
		return r[10] = e[i], r
	}

	function Dt(t, e, i) {
		const r = t.slice();
		return r[13] = e[i], r[15] = i, r
	}

	function Nt(t, e, i) {
		const r = t.slice();
		return r[16] = e[i], r[15] = i, r
	}

	function Ot(t, e, i) {
		const r = t.slice();
		return r[7] = e[i], r
	}

	function Mt(t) {
		let e, i, r, n;
		const s = [Yt, Vt, Ht],
			a = [];

		function o(t, e) {
			return "table" === t[0] ? 0 : "list" === t[0] ? 1 : 2
		}
		return e = o(t), i = a[e] = s[e](t), {
			c() {
				i.c(), r = U()
			},
			m(t, i) {
				a[e].m(t, i), y(t, r, i), n = !0
			},
			p(t, n) {
				let l = e;
				e = o(t), e === l ? a[e].p(t, n) : (K(), J(a[l], 1, 1, (() => {
					a[l] = null
				})), X(), i = a[e], i ? i.p(t, n) : (i = a[e] = s[e](t), i.c()), Q(i, 1), i.m(r.parentNode, r))
			},
			i(t) {
				n || (Q(i), n = !0)
			},
			o(t) {
				J(i), n = !1
			},
			d(t) {
				a[e].d(t), t && b(r)
			}
		}
	}

	function Gt(t) {
		let e, i, r = t[1],
			n = [];
		for (let e = 0; e < r.length; e += 1) n[e] = ue(Ot(t, r, e));
		const s = t => J(n[t], 1, 1, (() => {
			n[t] = null
		}));
		return {
			c() {
				for (let t = 0; t < n.length; t += 1) n[t].c();
				e = U()
			},
			m(t, r) {
				for (let e = 0; e < n.length; e += 1) n[e].m(t, r);
				y(t, e, r), i = !0
			},
			p(t, i) {
				if (34 & i) {
					let a;
					for (r = t[1], a = 0; a < r.length; a += 1) {
						const s = Ot(t, r, a);
						n[a] ? (n[a].p(s, i), Q(n[a], 1)) : (n[a] = ue(s), n[a].c(), Q(n[a], 1), n[a].m(e.parentNode, e))
					}
					for (K(), a = r.length; a < n.length; a += 1) s(a);
					X()
				}
			},
			i(t) {
				if (!i) {
					for (let t = 0; t < r.length; t += 1) Q(n[t]);
					i = !0
				}
			},
			o(t) {
				n = n.filter(Boolean);
				for (let t = 0; t < n.length; t += 1) J(n[t]);
				i = !1
			},
			d(t) {
				x(n, t), t && b(e)
			}
		}
	}

	function Ht(t) {
		let i, r, n;
		const s = [t[6]];
		var a = t[5][t[0]];

		function o(t) {
			let i = {
				$$slots: {
					default: [Zt]
				},
				$$scope: {
					ctx: t
				}
			};
			for (let t = 0; t < s.length; t += 1) i = e(i, s[t]);
			return {
				props: i
			}
		}
		return a && (i = T(a, o(t))), {
			c() {
				i && nt(i.$$.fragment), r = U()
			},
			m(t, e) {
				i && st(i, t, e), y(t, r, e), n = !0
			},
			p(t, e) {
				const n = 64 & e ? it(s, [rt(t[6])]) : {};
				if (8388706 & e && (n.$$scope = {
						dirty: e,
						ctx: t
					}), a !== (a = t[5][t[0]])) {
					if (i) {
						K();
						const t = i;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					a ? (i = T(a, o(t)), nt(i.$$.fragment), Q(i.$$.fragment, 1), st(i, r.parentNode, r)) : i = null
				} else a && i.$set(n)
			},
			i(t) {
				n || (i && Q(i.$$.fragment, t), n = !0)
			},
			o(t) {
				i && J(i.$$.fragment, t), n = !1
			},
			d(t) {
				t && b(r), i && at(i, t)
			}
		}
	}

	function Vt(t) {
		let e, i, r, n;
		const s = [Kt, Wt],
			a = [];

		function o(t, e) {
			return t[4] ? 0 : 1
		}
		return e = o(t), i = a[e] = s[e](t), {
			c() {
				i.c(), r = U()
			},
			m(t, i) {
				a[e].m(t, i), y(t, r, i), n = !0
			},
			p(t, n) {
				let l = e;
				e = o(t), e === l ? a[e].p(t, n) : (K(), J(a[l], 1, 1, (() => {
					a[l] = null
				})), X(), i = a[e], i ? i.p(t, n) : (i = a[e] = s[e](t), i.c()), Q(i, 1), i.m(r.parentNode, r))
			},
			i(t) {
				n || (Q(i), n = !0)
			},
			o(t) {
				J(i), n = !1
			},
			d(t) {
				a[e].d(t), t && b(r)
			}
		}
	}

	function Yt(t) {
		let e, i, r;
		var n = t[5].table;

		function s(t) {
			return {
				props: {
					$$slots: {
						default: [pe]
					},
					$$scope: {
						ctx: t
					}
				}
			}
		}
		return n && (e = T(n, s(t))), {
			c() {
				e && nt(e.$$.fragment), i = U()
			},
			m(t, n) {
				e && st(e, t, n), y(t, i, n), r = !0
			},
			p(t, r) {
				const a = {};
				if (8388716 & r && (a.$$scope = {
						dirty: r,
						ctx: t
					}), n !== (n = t[5].table)) {
					if (e) {
						K();
						const t = e;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					n ? (e = T(n, s(t)), nt(e.$$.fragment), Q(e.$$.fragment, 1), st(e, i.parentNode, i)) : e = null
				} else n && e.$set(a)
			},
			i(t) {
				r || (e && Q(e.$$.fragment, t), r = !0)
			},
			o(t) {
				e && J(e.$$.fragment, t), r = !1
			},
			d(t) {
				t && b(i), e && at(e, t)
			}
		}
	}

	function jt(e) {
		let i, r = e[6].raw + "";
		return {
			c() {
				i = v(r)
			},
			m(t, e) {
				y(t, i, e)
			},
			p(t, e) {
				64 & e && r !== (r = t[6].raw + "") && E(i, r)
			},
			i: t,
			o: t,
			d(t) {
				t && b(i)
			}
		}
	}

	function qt(t) {
		let e, i;
		return e = new ge({
			props: {
				tokens: t[1],
				renderers: t[5]
			}
		}), {
			c() {
				nt(e.$$.fragment)
			},
			m(t, r) {
				st(e, t, r), i = !0
			},
			p(t, i) {
				const r = {};
				2 & i && (r.tokens = t[1]), 32 & i && (r.renderers = t[5]), e.$set(r)
			},
			i(t) {
				i || (Q(e.$$.fragment, t), i = !0)
			},
			o(t) {
				J(e.$$.fragment, t), i = !1
			},
			d(t) {
				at(e, t)
			}
		}
	}

	function Zt(t) {
		let e, i, r, n;
		const s = [qt, jt],
			a = [];

		function o(t, e) {
			return t[1] ? 0 : 1
		}
		return e = o(t), i = a[e] = s[e](t), {
			c() {
				i.c(), r = U()
			},
			m(t, i) {
				a[e].m(t, i), y(t, r, i), n = !0
			},
			p(t, n) {
				let l = e;
				e = o(t), e === l ? a[e].p(t, n) : (K(), J(a[l], 1, 1, (() => {
					a[l] = null
				})), X(), i = a[e], i ? i.p(t, n) : (i = a[e] = s[e](t), i.c()), Q(i, 1), i.m(r.parentNode, r))
			},
			i(t) {
				n || (Q(i), n = !0)
			},
			o(t) {
				J(i), n = !1
			},
			d(t) {
				a[e].d(t), t && b(r)
			}
		}
	}

	function Wt(t) {
		let i, r, n;
		const s = [{
			ordered: t[4]
		}, t[6]];
		var a = t[5].list;

		function o(t) {
			let i = {
				$$slots: {
					default: [Jt]
				},
				$$scope: {
					ctx: t
				}
			};
			for (let t = 0; t < s.length; t += 1) i = e(i, s[t]);
			return {
				props: i
			}
		}
		return a && (i = T(a, o(t))), {
			c() {
				i && nt(i.$$.fragment), r = U()
			},
			m(t, e) {
				i && st(i, t, e), y(t, r, e), n = !0
			},
			p(t, e) {
				const n = 80 & e ? it(s, [16 & e && {
					ordered: t[4]
				}, 64 & e && rt(t[6])]) : {};
				if (8388704 & e && (n.$$scope = {
						dirty: e,
						ctx: t
					}), a !== (a = t[5].list)) {
					if (i) {
						K();
						const t = i;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					a ? (i = T(a, o(t)), nt(i.$$.fragment), Q(i.$$.fragment, 1), st(i, r.parentNode, r)) : i = null
				} else a && i.$set(n)
			},
			i(t) {
				n || (i && Q(i.$$.fragment, t), n = !0)
			},
			o(t) {
				i && J(i.$$.fragment, t), n = !1
			},
			d(t) {
				t && b(r), i && at(i, t)
			}
		}
	}

	function Kt(t) {
		let i, r, n;
		const s = [{
			ordered: t[4]
		}, t[6]];
		var a = t[5].list;

		function o(t) {
			let i = {
				$$slots: {
					default: [ie]
				},
				$$scope: {
					ctx: t
				}
			};
			for (let t = 0; t < s.length; t += 1) i = e(i, s[t]);
			return {
				props: i
			}
		}
		return a && (i = T(a, o(t))), {
			c() {
				i && nt(i.$$.fragment), r = U()
			},
			m(t, e) {
				i && st(i, t, e), y(t, r, e), n = !0
			},
			p(t, e) {
				const n = 80 & e ? it(s, [16 & e && {
					ordered: t[4]
				}, 64 & e && rt(t[6])]) : {};
				if (8388704 & e && (n.$$scope = {
						dirty: e,
						ctx: t
					}), a !== (a = t[5].list)) {
					if (i) {
						K();
						const t = i;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					a ? (i = T(a, o(t)), nt(i.$$.fragment), Q(i.$$.fragment, 1), st(i, r.parentNode, r)) : i = null
				} else a && i.$set(n)
			},
			i(t) {
				n || (i && Q(i.$$.fragment, t), n = !0)
			},
			o(t) {
				i && J(i.$$.fragment, t), n = !1
			},
			d(t) {
				t && b(r), i && at(i, t)
			}
		}
	}

	function Xt(t) {
		let e, i, r;
		return e = new ge({
			props: {
				tokens: t[18].tokens,
				renderers: t[5]
			}
		}), {
			c() {
				nt(e.$$.fragment), i = S()
			},
			m(t, n) {
				st(e, t, n), y(t, i, n), r = !0
			},
			p(t, i) {
				const r = {};
				64 & i && (r.tokens = t[18].tokens), 32 & i && (r.renderers = t[5]), e.$set(r)
			},
			i(t) {
				r || (Q(e.$$.fragment, t), r = !0)
			},
			o(t) {
				J(e.$$.fragment, t), r = !1
			},
			d(t) {
				at(e, t), t && b(i)
			}
		}
	}

	function Qt(t) {
		let i, r, n;
		const s = [t[18]];
		var a = t[5].unorderedlistitem || t[5].listitem;

		function o(t) {
			let i = {
				$$slots: {
					default: [Xt]
				},
				$$scope: {
					ctx: t
				}
			};
			for (let t = 0; t < s.length; t += 1) i = e(i, s[t]);
			return {
				props: i
			}
		}
		return a && (i = T(a, o(t))), {
			c() {
				i && nt(i.$$.fragment), r = U()
			},
			m(t, e) {
				i && st(i, t, e), y(t, r, e), n = !0
			},
			p(t, e) {
				const n = 64 & e ? it(s, [rt(t[18])]) : {};
				if (8388704 & e && (n.$$scope = {
						dirty: e,
						ctx: t
					}), a !== (a = t[5].unorderedlistitem || t[5].listitem)) {
					if (i) {
						K();
						const t = i;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					a ? (i = T(a, o(t)), nt(i.$$.fragment), Q(i.$$.fragment, 1), st(i, r.parentNode, r)) : i = null
				} else a && i.$set(n)
			},
			i(t) {
				n || (i && Q(i.$$.fragment, t), n = !0)
			},
			o(t) {
				i && J(i.$$.fragment, t), n = !1
			},
			d(t) {
				t && b(r), i && at(i, t)
			}
		}
	}

	function Jt(t) {
		let e, i, r = t[6].items,
			n = [];
		for (let e = 0; e < r.length; e += 1) n[e] = Qt(Ft(t, r, e));
		const s = t => J(n[t], 1, 1, (() => {
			n[t] = null
		}));
		return {
			c() {
				for (let t = 0; t < n.length; t += 1) n[t].c();
				e = U()
			},
			m(t, r) {
				for (let e = 0; e < n.length; e += 1) n[e].m(t, r);
				y(t, e, r), i = !0
			},
			p(t, i) {
				if (96 & i) {
					let a;
					for (r = t[6].items, a = 0; a < r.length; a += 1) {
						const s = Ft(t, r, a);
						n[a] ? (n[a].p(s, i), Q(n[a], 1)) : (n[a] = Qt(s), n[a].c(), Q(n[a], 1), n[a].m(e.parentNode, e))
					}
					for (K(), a = r.length; a < n.length; a += 1) s(a);
					X()
				}
			},
			i(t) {
				if (!i) {
					for (let t = 0; t < r.length; t += 1) Q(n[t]);
					i = !0
				}
			},
			o(t) {
				n = n.filter(Boolean);
				for (let t = 0; t < n.length; t += 1) J(n[t]);
				i = !1
			},
			d(t) {
				x(n, t), t && b(e)
			}
		}
	}

	function te(t) {
		let e, i, r;
		return e = new ge({
			props: {
				tokens: t[18].tokens,
				renderers: t[5]
			}
		}), {
			c() {
				nt(e.$$.fragment), i = S()
			},
			m(t, n) {
				st(e, t, n), y(t, i, n), r = !0
			},
			p(t, i) {
				const r = {};
				64 & i && (r.tokens = t[18].tokens), 32 & i && (r.renderers = t[5]), e.$set(r)
			},
			i(t) {
				r || (Q(e.$$.fragment, t), r = !0)
			},
			o(t) {
				J(e.$$.fragment, t), r = !1
			},
			d(t) {
				at(e, t), t && b(i)
			}
		}
	}

	function ee(t) {
		let i, r, n;
		const s = [t[18]];
		var a = t[5].orderedlistitem || t[5].listitem;

		function o(t) {
			let i = {
				$$slots: {
					default: [te]
				},
				$$scope: {
					ctx: t
				}
			};
			for (let t = 0; t < s.length; t += 1) i = e(i, s[t]);
			return {
				props: i
			}
		}
		return a && (i = T(a, o(t))), {
			c() {
				i && nt(i.$$.fragment), r = U()
			},
			m(t, e) {
				i && st(i, t, e), y(t, r, e), n = !0
			},
			p(t, e) {
				const n = 64 & e ? it(s, [rt(t[18])]) : {};
				if (8388704 & e && (n.$$scope = {
						dirty: e,
						ctx: t
					}), a !== (a = t[5].orderedlistitem || t[5].listitem)) {
					if (i) {
						K();
						const t = i;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					a ? (i = T(a, o(t)), nt(i.$$.fragment), Q(i.$$.fragment, 1), st(i, r.parentNode, r)) : i = null
				} else a && i.$set(n)
			},
			i(t) {
				n || (i && Q(i.$$.fragment, t), n = !0)
			},
			o(t) {
				i && J(i.$$.fragment, t), n = !1
			},
			d(t) {
				t && b(r), i && at(i, t)
			}
		}
	}

	function ie(t) {
		let e, i, r = t[6].items,
			n = [];
		for (let e = 0; e < r.length; e += 1) n[e] = ee(Lt(t, r, e));
		const s = t => J(n[t], 1, 1, (() => {
			n[t] = null
		}));
		return {
			c() {
				for (let t = 0; t < n.length; t += 1) n[t].c();
				e = U()
			},
			m(t, r) {
				for (let e = 0; e < n.length; e += 1) n[e].m(t, r);
				y(t, e, r), i = !0
			},
			p(t, i) {
				if (96 & i) {
					let a;
					for (r = t[6].items, a = 0; a < r.length; a += 1) {
						const s = Lt(t, r, a);
						n[a] ? (n[a].p(s, i), Q(n[a], 1)) : (n[a] = ee(s), n[a].c(), Q(n[a], 1), n[a].m(e.parentNode, e))
					}
					for (K(), a = r.length; a < n.length; a += 1) s(a);
					X()
				}
			},
			i(t) {
				if (!i) {
					for (let t = 0; t < r.length; t += 1) Q(n[t]);
					i = !0
				}
			},
			o(t) {
				n = n.filter(Boolean);
				for (let t = 0; t < n.length; t += 1) J(n[t]);
				i = !1
			},
			d(t) {
				x(n, t), t && b(e)
			}
		}
	}

	function re(t) {
		let e, i, r;
		return e = new ge({
			props: {
				tokens: t[16].tokens,
				renderers: t[5]
			}
		}), {
			c() {
				nt(e.$$.fragment), i = S()
			},
			m(t, n) {
				st(e, t, n), y(t, i, n), r = !0
			},
			p(t, i) {
				const r = {};
				4 & i && (r.tokens = t[16].tokens), 32 & i && (r.renderers = t[5]), e.$set(r)
			},
			i(t) {
				r || (Q(e.$$.fragment, t), r = !0)
			},
			o(t) {
				J(e.$$.fragment, t), r = !1
			},
			d(t) {
				at(e, t), t && b(i)
			}
		}
	}

	function ne(t) {
		let e, i, r;
		var n = t[5].tablecell;

		function s(t) {
			return {
				props: {
					header: !0,
					align: t[6].align[t[15]] || "center",
					$$slots: {
						default: [re]
					},
					$$scope: {
						ctx: t
					}
				}
			}
		}
		return n && (e = T(n, s(t))), {
			c() {
				e && nt(e.$$.fragment), i = U()
			},
			m(t, n) {
				e && st(e, t, n), y(t, i, n), r = !0
			},
			p(t, r) {
				const a = {};
				if (64 & r && (a.align = t[6].align[t[15]] || "center"), 8388644 & r && (a.$$scope = {
						dirty: r,
						ctx: t
					}), n !== (n = t[5].tablecell)) {
					if (e) {
						K();
						const t = e;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					n ? (e = T(n, s(t)), nt(e.$$.fragment), Q(e.$$.fragment, 1), st(e, i.parentNode, i)) : e = null
				} else n && e.$set(a)
			},
			i(t) {
				r || (e && Q(e.$$.fragment, t), r = !0)
			},
			o(t) {
				e && J(e.$$.fragment, t), r = !1
			},
			d(t) {
				t && b(i), e && at(e, t)
			}
		}
	}

	function se(t) {
		let e, i, r = t[2],
			n = [];
		for (let e = 0; e < r.length; e += 1) n[e] = ne(Nt(t, r, e));
		const s = t => J(n[t], 1, 1, (() => {
			n[t] = null
		}));
		return {
			c() {
				for (let t = 0; t < n.length; t += 1) n[t].c();
				e = U()
			},
			m(t, r) {
				for (let e = 0; e < n.length; e += 1) n[e].m(t, r);
				y(t, e, r), i = !0
			},
			p(t, i) {
				if (100 & i) {
					let a;
					for (r = t[2], a = 0; a < r.length; a += 1) {
						const s = Nt(t, r, a);
						n[a] ? (n[a].p(s, i), Q(n[a], 1)) : (n[a] = ne(s), n[a].c(), Q(n[a], 1), n[a].m(e.parentNode, e))
					}
					for (K(), a = r.length; a < n.length; a += 1) s(a);
					X()
				}
			},
			i(t) {
				if (!i) {
					for (let t = 0; t < r.length; t += 1) Q(n[t]);
					i = !0
				}
			},
			o(t) {
				n = n.filter(Boolean);
				for (let t = 0; t < n.length; t += 1) J(n[t]);
				i = !1
			},
			d(t) {
				x(n, t), t && b(e)
			}
		}
	}

	function ae(t) {
		let e, i, r;
		var n = t[5].tablerow;

		function s(t) {
			return {
				props: {
					$$slots: {
						default: [se]
					},
					$$scope: {
						ctx: t
					}
				}
			}
		}
		return n && (e = T(n, s(t))), {
			c() {
				e && nt(e.$$.fragment), i = U()
			},
			m(t, n) {
				e && st(e, t, n), y(t, i, n), r = !0
			},
			p(t, r) {
				const a = {};
				if (8388708 & r && (a.$$scope = {
						dirty: r,
						ctx: t
					}), n !== (n = t[5].tablerow)) {
					if (e) {
						K();
						const t = e;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					n ? (e = T(n, s(t)), nt(e.$$.fragment), Q(e.$$.fragment, 1), st(e, i.parentNode, i)) : e = null
				} else n && e.$set(a)
			},
			i(t) {
				r || (e && Q(e.$$.fragment, t), r = !0)
			},
			o(t) {
				e && J(e.$$.fragment, t), r = !1
			},
			d(t) {
				t && b(i), e && at(e, t)
			}
		}
	}

	function oe(t) {
		let e, i;
		return e = new ge({
			props: {
				tokens: t[13].tokens,
				renderers: t[5]
			}
		}), {
			c() {
				nt(e.$$.fragment)
			},
			m(t, r) {
				st(e, t, r), i = !0
			},
			p(t, i) {
				const r = {};
				8 & i && (r.tokens = t[13].tokens), 32 & i && (r.renderers = t[5]), e.$set(r)
			},
			i(t) {
				i || (Q(e.$$.fragment, t), i = !0)
			},
			o(t) {
				J(e.$$.fragment, t), i = !1
			},
			d(t) {
				at(e, t)
			}
		}
	}

	function le(t) {
		let e, i, r;
		var n = t[5].tablecell;

		function s(t) {
			return {
				props: {
					header: !1,
					align: t[6].align[t[15]] || "center",
					$$slots: {
						default: [oe]
					},
					$$scope: {
						ctx: t
					}
				}
			}
		}
		return n && (e = T(n, s(t))), {
			c() {
				e && nt(e.$$.fragment), i = U()
			},
			m(t, n) {
				e && st(e, t, n), y(t, i, n), r = !0
			},
			p(t, r) {
				const a = {};
				if (64 & r && (a.align = t[6].align[t[15]] || "center"), 8388648 & r && (a.$$scope = {
						dirty: r,
						ctx: t
					}), n !== (n = t[5].tablecell)) {
					if (e) {
						K();
						const t = e;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					n ? (e = T(n, s(t)), nt(e.$$.fragment), Q(e.$$.fragment, 1), st(e, i.parentNode, i)) : e = null
				} else n && e.$set(a)
			},
			i(t) {
				r || (e && Q(e.$$.fragment, t), r = !0)
			},
			o(t) {
				e && J(e.$$.fragment, t), r = !1
			},
			d(t) {
				t && b(i), e && at(e, t)
			}
		}
	}

	function he(t) {
		let e, i, r = t[10],
			n = [];
		for (let e = 0; e < r.length; e += 1) n[e] = le(Dt(t, r, e));
		const s = t => J(n[t], 1, 1, (() => {
			n[t] = null
		}));
		return {
			c() {
				for (let t = 0; t < n.length; t += 1) n[t].c();
				e = S()
			},
			m(t, r) {
				for (let e = 0; e < n.length; e += 1) n[e].m(t, r);
				y(t, e, r), i = !0
			},
			p(t, i) {
				if (104 & i) {
					let a;
					for (r = t[10], a = 0; a < r.length; a += 1) {
						const s = Dt(t, r, a);
						n[a] ? (n[a].p(s, i), Q(n[a], 1)) : (n[a] = le(s), n[a].c(), Q(n[a], 1), n[a].m(e.parentNode, e))
					}
					for (K(), a = r.length; a < n.length; a += 1) s(a);
					X()
				}
			},
			i(t) {
				if (!i) {
					for (let t = 0; t < r.length; t += 1) Q(n[t]);
					i = !0
				}
			},
			o(t) {
				n = n.filter(Boolean);
				for (let t = 0; t < n.length; t += 1) J(n[t]);
				i = !1
			},
			d(t) {
				x(n, t), t && b(e)
			}
		}
	}

	function de(t) {
		let e, i, r;
		var n = t[5].tablerow;

		function s(t) {
			return {
				props: {
					$$slots: {
						default: [he]
					},
					$$scope: {
						ctx: t
					}
				}
			}
		}
		return n && (e = T(n, s(t))), {
			c() {
				e && nt(e.$$.fragment), i = U()
			},
			m(t, n) {
				e && st(e, t, n), y(t, i, n), r = !0
			},
			p(t, r) {
				const a = {};
				if (8388712 & r && (a.$$scope = {
						dirty: r,
						ctx: t
					}), n !== (n = t[5].tablerow)) {
					if (e) {
						K();
						const t = e;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					n ? (e = T(n, s(t)), nt(e.$$.fragment), Q(e.$$.fragment, 1), st(e, i.parentNode, i)) : e = null
				} else n && e.$set(a)
			},
			i(t) {
				r || (e && Q(e.$$.fragment, t), r = !0)
			},
			o(t) {
				e && J(e.$$.fragment, t), r = !1
			},
			d(t) {
				t && b(i), e && at(e, t)
			}
		}
	}

	function ce(t) {
		let e, i, r = t[3],
			n = [];
		for (let e = 0; e < r.length; e += 1) n[e] = de(Rt(t, r, e));
		const s = t => J(n[t], 1, 1, (() => {
			n[t] = null
		}));
		return {
			c() {
				for (let t = 0; t < n.length; t += 1) n[t].c();
				e = U()
			},
			m(t, r) {
				for (let e = 0; e < n.length; e += 1) n[e].m(t, r);
				y(t, e, r), i = !0
			},
			p(t, i) {
				if (104 & i) {
					let a;
					for (r = t[3], a = 0; a < r.length; a += 1) {
						const s = Rt(t, r, a);
						n[a] ? (n[a].p(s, i), Q(n[a], 1)) : (n[a] = de(s), n[a].c(), Q(n[a], 1), n[a].m(e.parentNode, e))
					}
					for (K(), a = r.length; a < n.length; a += 1) s(a);
					X()
				}
			},
			i(t) {
				if (!i) {
					for (let t = 0; t < r.length; t += 1) Q(n[t]);
					i = !0
				}
			},
			o(t) {
				n = n.filter(Boolean);
				for (let t = 0; t < n.length; t += 1) J(n[t]);
				i = !1
			},
			d(t) {
				x(n, t), t && b(e)
			}
		}
	}

	function pe(t) {
		let e, i, r, n, s;
		var a = t[5].tablehead;

		function o(t) {
			return {
				props: {
					$$slots: {
						default: [ae]
					},
					$$scope: {
						ctx: t
					}
				}
			}
		}
		a && (e = T(a, o(t)));
		var l = t[5].tablebody;

		function h(t) {
			return {
				props: {
					$$slots: {
						default: [ce]
					},
					$$scope: {
						ctx: t
					}
				}
			}
		}
		return l && (r = T(l, h(t))), {
			c() {
				e && nt(e.$$.fragment), i = S(), r && nt(r.$$.fragment), n = U()
			},
			m(t, a) {
				e && st(e, t, a), y(t, i, a), r && st(r, t, a), y(t, n, a), s = !0
			},
			p(t, s) {
				const d = {};
				if (8388708 & s && (d.$$scope = {
						dirty: s,
						ctx: t
					}), a !== (a = t[5].tablehead)) {
					if (e) {
						K();
						const t = e;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					a ? (e = T(a, o(t)), nt(e.$$.fragment), Q(e.$$.fragment, 1), st(e, i.parentNode, i)) : e = null
				} else a && e.$set(d);
				const c = {};
				if (8388712 & s && (c.$$scope = {
						dirty: s,
						ctx: t
					}), l !== (l = t[5].tablebody)) {
					if (r) {
						K();
						const t = r;
						J(t.$$.fragment, 1, 0, (() => {
							at(t, 1)
						})), X()
					}
					l ? (r = T(l, h(t)), nt(r.$$.fragment), Q(r.$$.fragment, 1), st(r, n.parentNode, n)) : r = null
				} else l && r.$set(c)
			},
			i(t) {
				s || (e && Q(e.$$.fragment, t), r && Q(r.$$.fragment, t), s = !0)
			},
			o(t) {
				e && J(e.$$.fragment, t), r && J(r.$$.fragment, t), s = !1
			},
			d(t) {
				e && at(e, t), t && b(i), t && b(n), r && at(r, t)
			}
		}
	}

	function ue(t) {
		let i, r;
		const n = [t[7], {
			renderers: t[5]
		}];
		let s = {};
		for (let t = 0; t < n.length; t += 1) s = e(s, n[t]);
		return i = new ge({
			props: s
		}), {
			c() {
				nt(i.$$.fragment)
			},
			m(t, e) {
				st(i, t, e), r = !0
			},
			p(t, e) {
				const r = 34 & e ? it(n, [2 & e && rt(t[7]), 32 & e && {
					renderers: t[5]
				}]) : {};
				i.$set(r)
			},
			i(t) {
				r || (Q(i.$$.fragment, t), r = !0)
			},
			o(t) {
				J(i.$$.fragment, t), r = !1
			},
			d(t) {
				at(i, t)
			}
		}
	}

	function fe(t) {
		let e, i, r, n;
		const s = [Gt, Mt],
			a = [];

		function o(t, e) {
			return t[0] ? t[5][t[0]] ? 1 : -1 : 0
		}
		return ~(e = o(t)) && (i = a[e] = s[e](t)), {
			c() {
				i && i.c(), r = U()
			},
			m(t, i) {
				~e && a[e].m(t, i), y(t, r, i), n = !0
			},
			p(t, [n]) {
				let l = e;
				e = o(t), e === l ? ~e && a[e].p(t, n) : (i && (K(), J(a[l], 1, 1, (() => {
					a[l] = null
				})), X()), ~e ? (i = a[e], i ? i.p(t, n) : (i = a[e] = s[e](t), i.c()), Q(i, 1), i.m(r.parentNode, r)) : i = null)
			},
			i(t) {
				n || (Q(i), n = !0)
			},
			o(t) {
				J(i), n = !1
			},
			d(t) {
				~e && a[e].d(t), t && b(r)
			}
		}
	}

	function me(t, i, r) {
		const n = ["type", "tokens", "header", "rows", "ordered", "renderers"];
		let s = g(i, n),
			{
				type: a
			} = i,
			{
				tokens: o
			} = i,
			{
				header: l
			} = i,
			{
				rows: h
			} = i,
			{
				ordered: d = !1
			} = i,
			{
				renderers: c
			} = i;
		return function() {
			const t = console.warn;
			console.warn = e => {
				e.includes("unknown prop") || e.includes("unexpected slot") || t(e)
			}, C((() => {
				console.warn = t
			}))
		}(), t.$$set = t => {
			i = e(e({}, i), m(t)), r(6, s = g(i, n)), "type" in t && r(0, a = t.type), "tokens" in t && r(1, o = t.tokens), "header" in t && r(2, l = t.header), "rows" in t && r(3, h = t.rows), "ordered" in t && r(4, d = t.ordered), "renderers" in t && r(5, c = t.renderers)
		}, [a, o, l, h, d, c, s]
	}
	class ge extends ht {
		constructor(t) {
			super(), lt(this, t, me, fe, a, {
				type: 0,
				tokens: 1,
				header: 2,
				rows: 3,
				ordered: 4,
				renderers: 5
			})
		}
	}

	function _e() {
		return {
			async: !1,
			baseUrl: null,
			breaks: !1,
			extensions: null,
			gfm: !0,
			headerIds: !0,
			headerPrefix: "",
			highlight: null,
			langPrefix: "language-",
			mangle: !0,
			pedantic: !1,
			renderer: null,
			sanitize: !1,
			sanitizer: null,
			silent: !1,
			smartypants: !1,
			tokenizer: null,
			walkTokens: null,
			xhtml: !1
		}
	}
	let ye = {
		async: !1,
		baseUrl: null,
		breaks: !1,
		extensions: null,
		gfm: !0,
		headerIds: !0,
		headerPrefix: "",
		highlight: null,
		langPrefix: "language-",
		mangle: !0,
		pedantic: !1,
		renderer: null,
		sanitize: !1,
		sanitizer: null,
		silent: !1,
		smartypants: !1,
		tokenizer: null,
		walkTokens: null,
		xhtml: !1
	};
	const be = /[&<>"']/,
		xe = new RegExp(be.source, "g"),
		we = /[<>"']|&(?!(#\d{1,7}|#[Xx][a-fA-F0-9]{1,6}|\w+);)/,
		ve = new RegExp(we.source, "g"),
		Se = {
			"&": "&amp;",
			"<": "&lt;",
			">": "&gt;",
			'"': "&quot;",
			"'": "&#39;"
		},
		Ue = t => Se[t];

	function ke(t, e) {
		if (e) {
			if (be.test(t)) return t.replace(xe, Ue)
		} else if (we.test(t)) return t.replace(ve, Ue);
		return t
	}
	const $e = /&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi;

	function Ee(t) {
		return t.replace($e, ((t, e) => "colon" === (e = e.toLowerCase()) ? ":" : "#" === e.charAt(0) ? "x" === e.charAt(1) ? String.fromCharCode(parseInt(e.substring(2), 16)) : String.fromCharCode(+e.substring(1)) : ""))
	}
	const ze = /(^|[^\[])\^/g;

	function Ae(t, e) {
		t = "string" == typeof t ? t : t.source, e = e || "";
		const i = {
			replace: (e, r) => (r = (r = r.source || r).replace(ze, "$1"), t = t.replace(e, r), i),
			getRegex: () => new RegExp(t, e)
		};
		return i
	}
	const Te = /[^\w:]/g,
		Be = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

	function Ie(t, e, i) {
		if (t) {
			let t;
			try {
				t = decodeURIComponent(Ee(i)).replace(Te, "").toLowerCase()
			} catch (t) {
				return null
			}
			if (0 === t.indexOf("javascript:") || 0 === t.indexOf("vbscript:") || 0 === t.indexOf("data:")) return null
		}
		e && !Be.test(i) && (i = function(t, e) {
			Ce[" " + t] || (Pe.test(t) ? Ce[" " + t] = t + "/" : Ce[" " + t] = Oe(t, "/", !0));
			t = Ce[" " + t];
			const i = -1 === t.indexOf(":");
			return "//" === e.substring(0, 2) ? i ? e : t.replace(Fe, "$1") + e : "/" === e.charAt(0) ? i ? e : t.replace(Le, "$1") + e : t + e
		}(e, i));
		try {
			i = encodeURI(i).replace(/%25/g, "%")
		} catch (t) {
			return null
		}
		return i
	}
	const Ce = {},
		Pe = /^[^:]+:\/*[^/]*$/,
		Fe = /^([^:]+:)[\s\S]*$/,
		Le = /^([^:]+:\/*[^/]*)[\s\S]*$/;
	const Re = {
		exec: function() {}
	};

	function De(t) {
		let e, i, r = 1;
		for (; r < arguments.length; r++)
			for (i in e = arguments[r], e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
		return t
	}

	function Ne(t, e) {
		const i = t.replace(/\|/g, ((t, e, i) => {
			let r = !1,
				n = e;
			for (; --n >= 0 && "\\" === i[n];) r = !r;
			return r ? "|" : " |"
		})).split(/ \|/);
		let r = 0;
		if (i[0].trim() || i.shift(), i.length > 0 && !i[i.length - 1].trim() && i.pop(), i.length > e) i.splice(e);
		else
			for (; i.length < e;) i.push("");
		for (; r < i.length; r++) i[r] = i[r].trim().replace(/\\\|/g, "|");
		return i
	}

	function Oe(t, e, i) {
		const r = t.length;
		if (0 === r) return "";
		let n = 0;
		for (; n < r;) {
			const s = t.charAt(r - n - 1);
			if (s !== e || i) {
				if (s === e || !i) break;
				n++
			} else n++
		}
		return t.slice(0, r - n)
	}

	function Me(t) {
		t && t.sanitize && !t.silent && console.warn("marked(): sanitize and sanitizer parameters are deprecated since version 0.7.0, should not be used and will be removed in the future. Read more here: https://marked.js.org/#/USING_ADVANCED.md#options")
	}

	function Ge(t, e) {
		if (e < 1) return "";
		let i = "";
		for (; e > 1;) 1 & e && (i += t), e >>= 1, t += t;
		return i + t
	}

	function He(t, e, i, r) {
		const n = e.href,
			s = e.title ? ke(e.title) : null,
			a = t[1].replace(/\\([\[\]])/g, "$1");
		if ("!" !== t[0].charAt(0)) {
			r.state.inLink = !0;
			const t = {
				type: "link",
				raw: i,
				href: n,
				title: s,
				text: a,
				tokens: r.inlineTokens(a)
			};
			return r.state.inLink = !1, t
		}
		return {
			type: "image",
			raw: i,
			href: n,
			title: s,
			text: ke(a)
		}
	}
	class Ve {
		constructor(t) {
			this.options = t || ye
		}
		space(t) {
			const e = this.rules.block.newline.exec(t);
			if (e && e[0].length > 0) return {
				type: "space",
				raw: e[0]
			}
		}
		code(t) {
			const e = this.rules.block.code.exec(t);
			if (e) {
				const t = e[0].replace(/^ {1,4}/gm, "");
				return {
					type: "code",
					raw: e[0],
					codeBlockStyle: "indented",
					text: this.options.pedantic ? t : Oe(t, "\n")
				}
			}
		}
		fences(t) {
			const e = this.rules.block.fences.exec(t);
			if (e) {
				const t = e[0],
					i = function(t, e) {
						const i = t.match(/^(\s+)(?:```)/);
						if (null === i) return e;
						const r = i[1];
						return e.split("\n").map((t => {
							const e = t.match(/^\s+/);
							if (null === e) return t;
							const [i] = e;
							return i.length >= r.length ? t.slice(r.length) : t
						})).join("\n")
					}(t, e[3] || "");
				return {
					type: "code",
					raw: t,
					lang: e[2] ? e[2].trim().replace(this.rules.inline._escapes, "$1") : e[2],
					text: i
				}
			}
		}
		heading(t) {
			const e = this.rules.block.heading.exec(t);
			if (e) {
				let t = e[2].trim();
				if (/#$/.test(t)) {
					const e = Oe(t, "#");
					this.options.pedantic ? t = e.trim() : e && !/ $/.test(e) || (t = e.trim())
				}
				return {
					type: "heading",
					raw: e[0],
					depth: e[1].length,
					text: t,
					tokens: this.lexer.inline(t)
				}
			}
		}
		hr(t) {
			const e = this.rules.block.hr.exec(t);
			if (e) return {
				type: "hr",
				raw: e[0]
			}
		}
		blockquote(t) {
			const e = this.rules.block.blockquote.exec(t);
			if (e) {
				const t = e[0].replace(/^ *>[ \t]?/gm, ""),
					i = this.lexer.state.top;
				this.lexer.state.top = !0;
				const r = this.lexer.blockTokens(t);
				return this.lexer.state.top = i, {
					type: "blockquote",
					raw: e[0],
					tokens: r,
					text: t
				}
			}
		}
		list(t) {
			let e = this.rules.block.list.exec(t);
			if (e) {
				let i, r, n, s, a, o, l, h, d, c, p, u, f = e[1].trim();
				const m = f.length > 1,
					g = {
						type: "list",
						raw: "",
						ordered: m,
						start: m ? +f.slice(0, -1) : "",
						loose: !1,
						items: []
					};
				f = m ? `\\d{1,9}\\${f.slice(-1)}` : `\\${f}`, this.options.pedantic && (f = m ? f : "[*+-]");
				const _ = new RegExp(`^( {0,3}${f})((?:[\t ][^\\n]*)?(?:\\n|$))`);
				for (; t && (u = !1, e = _.exec(t)) && !this.rules.block.hr.test(t);) {
					if (i = e[0], t = t.substring(i.length), h = e[2].split("\n", 1)[0].replace(/^\t+/, (t => " ".repeat(3 * t.length))), d = t.split("\n", 1)[0], this.options.pedantic ? (s = 2, p = h.trimLeft()) : (s = e[2].search(/[^ ]/), s = s > 4 ? 1 : s, p = h.slice(s), s += e[1].length), o = !1, !h && /^ *$/.test(d) && (i += d + "\n", t = t.substring(d.length + 1), u = !0), !u) {
						const e = new RegExp(`^ {0,${Math.min(3,s-1)}}(?:[*+-]|\\d{1,9}[.)])((?:[ \t][^\\n]*)?(?:\\n|$))`),
							r = new RegExp(`^ {0,${Math.min(3,s-1)}}((?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$)`),
							n = new RegExp(`^ {0,${Math.min(3,s-1)}}(?:\`\`\`|~~~)`),
							a = new RegExp(`^ {0,${Math.min(3,s-1)}}#`);
						for (; t && (c = t.split("\n", 1)[0], d = c, this.options.pedantic && (d = d.replace(/^ {1,4}(?=( {4})*[^ ])/g, "  ")), !n.test(d)) && !a.test(d) && !e.test(d) && !r.test(t);) {
							if (d.search(/[^ ]/) >= s || !d.trim()) p += "\n" + d.slice(s);
							else {
								if (o) break;
								if (h.search(/[^ ]/) >= 4) break;
								if (n.test(h)) break;
								if (a.test(h)) break;
								if (r.test(h)) break;
								p += "\n" + d
							}
							o || d.trim() || (o = !0), i += c + "\n", t = t.substring(c.length + 1), h = d.slice(s)
						}
					}
					g.loose || (l ? g.loose = !0 : /\n *\n *$/.test(i) && (l = !0)), this.options.gfm && (r = /^\[[ xX]\] /.exec(p), r && (n = "[ ] " !== r[0], p = p.replace(/^\[[ xX]\] +/, ""))), g.items.push({
						type: "list_item",
						raw: i,
						task: !!r,
						checked: n,
						loose: !1,
						text: p
					}), g.raw += i
				}
				g.items[g.items.length - 1].raw = i.trimRight(), g.items[g.items.length - 1].text = p.trimRight(), g.raw = g.raw.trimRight();
				const y = g.items.length;
				for (a = 0; a < y; a++)
					if (this.lexer.state.top = !1, g.items[a].tokens = this.lexer.blockTokens(g.items[a].text, []), !g.loose) {
						const t = g.items[a].tokens.filter((t => "space" === t.type)),
							e = t.length > 0 && t.some((t => /\n.*\n/.test(t.raw)));
						g.loose = e
					} if (g.loose)
					for (a = 0; a < y; a++) g.items[a].loose = !0;
				return g
			}
		}
		html(t) {
			const e = this.rules.block.html.exec(t);
			if (e) {
				const t = {
					type: "html",
					raw: e[0],
					pre: !this.options.sanitizer && ("pre" === e[1] || "script" === e[1] || "style" === e[1]),
					text: e[0]
				};
				if (this.options.sanitize) {
					const i = this.options.sanitizer ? this.options.sanitizer(e[0]) : ke(e[0]);
					t.type = "paragraph", t.text = i, t.tokens = this.lexer.inline(i)
				}
				return t
			}
		}
		def(t) {
			const e = this.rules.block.def.exec(t);
			if (e) {
				const t = e[1].toLowerCase().replace(/\s+/g, " "),
					i = e[2] ? e[2].replace(/^<(.*)>$/, "$1").replace(this.rules.inline._escapes, "$1") : "",
					r = e[3] ? e[3].substring(1, e[3].length - 1).replace(this.rules.inline._escapes, "$1") : e[3];
				return {
					type: "def",
					tag: t,
					raw: e[0],
					href: i,
					title: r
				}
			}
		}
		table(t) {
			const e = this.rules.block.table.exec(t);
			if (e) {
				const t = {
					type: "table",
					header: Ne(e[1]).map((t => ({
						text: t
					}))),
					align: e[2].replace(/^ *|\| *$/g, "").split(/ *\| */),
					rows: e[3] && e[3].trim() ? e[3].replace(/\n[ \t]*$/, "").split("\n") : []
				};
				if (t.header.length === t.align.length) {
					t.raw = e[0];
					let i, r, n, s, a = t.align.length;
					for (i = 0; i < a; i++) /^ *-+: *$/.test(t.align[i]) ? t.align[i] = "right" : /^ *:-+: *$/.test(t.align[i]) ? t.align[i] = "center" : /^ *:-+ *$/.test(t.align[i]) ? t.align[i] = "left" : t.align[i] = null;
					for (a = t.rows.length, i = 0; i < a; i++) t.rows[i] = Ne(t.rows[i], t.header.length).map((t => ({
						text: t
					})));
					for (a = t.header.length, r = 0; r < a; r++) t.header[r].tokens = this.lexer.inline(t.header[r].text);
					for (a = t.rows.length, r = 0; r < a; r++)
						for (s = t.rows[r], n = 0; n < s.length; n++) s[n].tokens = this.lexer.inline(s[n].text);
					return t
				}
			}
		}
		lheading(t) {
			const e = this.rules.block.lheading.exec(t);
			if (e) return {
				type: "heading",
				raw: e[0],
				depth: "=" === e[2].charAt(0) ? 1 : 2,
				text: e[1],
				tokens: this.lexer.inline(e[1])
			}
		}
		paragraph(t) {
			const e = this.rules.block.paragraph.exec(t);
			if (e) {
				const t = "\n" === e[1].charAt(e[1].length - 1) ? e[1].slice(0, -1) : e[1];
				return {
					type: "paragraph",
					raw: e[0],
					text: t,
					tokens: this.lexer.inline(t)
				}
			}
		}
		text(t) {
			const e = this.rules.block.text.exec(t);
			if (e) return {
				type: "text",
				raw: e[0],
				text: e[0],
				tokens: this.lexer.inline(e[0])
			}
		}
		escape(t) {
			const e = this.rules.inline.escape.exec(t);
			if (e) return {
				type: "escape",
				raw: e[0],
				text: ke(e[1])
			}
		}
		tag(t) {
			const e = this.rules.inline.tag.exec(t);
			if (e) return !this.lexer.state.inLink && /^<a /i.test(e[0]) ? this.lexer.state.inLink = !0 : this.lexer.state.inLink && /^<\/a>/i.test(e[0]) && (this.lexer.state.inLink = !1), !this.lexer.state.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(e[0]) ? this.lexer.state.inRawBlock = !0 : this.lexer.state.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(e[0]) && (this.lexer.state.inRawBlock = !1), {
				type: this.options.sanitize ? "text" : "html",
				raw: e[0],
				inLink: this.lexer.state.inLink,
				inRawBlock: this.lexer.state.inRawBlock,
				text: this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(e[0]) : ke(e[0]) : e[0]
			}
		}
		link(t) {
			const e = this.rules.inline.link.exec(t);
			if (e) {
				const t = e[2].trim();
				if (!this.options.pedantic && /^</.test(t)) {
					if (!/>$/.test(t)) return;
					const e = Oe(t.slice(0, -1), "\\");
					if ((t.length - e.length) % 2 == 0) return
				} else {
					const t = function(t, e) {
						if (-1 === t.indexOf(e[1])) return -1;
						const i = t.length;
						let r = 0,
							n = 0;
						for (; n < i; n++)
							if ("\\" === t[n]) n++;
							else if (t[n] === e[0]) r++;
						else if (t[n] === e[1] && (r--, r < 0)) return n;
						return -1
					}(e[2], "()");
					if (t > -1) {
						const i = (0 === e[0].indexOf("!") ? 5 : 4) + e[1].length + t;
						e[2] = e[2].substring(0, t), e[0] = e[0].substring(0, i).trim(), e[3] = ""
					}
				}
				let i = e[2],
					r = "";
				if (this.options.pedantic) {
					const t = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(i);
					t && (i = t[1], r = t[3])
				} else r = e[3] ? e[3].slice(1, -1) : "";
				return i = i.trim(), /^</.test(i) && (i = this.options.pedantic && !/>$/.test(t) ? i.slice(1) : i.slice(1, -1)), He(e, {
					href: i ? i.replace(this.rules.inline._escapes, "$1") : i,
					title: r ? r.replace(this.rules.inline._escapes, "$1") : r
				}, e[0], this.lexer)
			}
		}
		reflink(t, e) {
			let i;
			if ((i = this.rules.inline.reflink.exec(t)) || (i = this.rules.inline.nolink.exec(t))) {
				let t = (i[2] || i[1]).replace(/\s+/g, " ");
				if (t = e[t.toLowerCase()], !t) {
					const t = i[0].charAt(0);
					return {
						type: "text",
						raw: t,
						text: t
					}
				}
				return He(i, t, i[0], this.lexer)
			}
		}
		emStrong(t, e, i = "") {
			let r = this.rules.inline.emStrong.lDelim.exec(t);
			if (!r) return;
			if (r[3] && i.match(/[\p{L}\p{N}]/u)) return;
			const n = r[1] || r[2] || "";
			if (!n || n && ("" === i || this.rules.inline.punctuation.exec(i))) {
				const i = r[0].length - 1;
				let n, s, a = i,
					o = 0;
				const l = "*" === r[0][0] ? this.rules.inline.emStrong.rDelimAst : this.rules.inline.emStrong.rDelimUnd;
				for (l.lastIndex = 0, e = e.slice(-1 * t.length + i); null != (r = l.exec(e));) {
					if (n = r[1] || r[2] || r[3] || r[4] || r[5] || r[6], !n) continue;
					if (s = n.length, r[3] || r[4]) {
						a += s;
						continue
					}
					if ((r[5] || r[6]) && i % 3 && !((i + s) % 3)) {
						o += s;
						continue
					}
					if (a -= s, a > 0) continue;
					s = Math.min(s, s + a + o);
					const e = t.slice(0, i + r.index + (r[0].length - n.length) + s);
					if (Math.min(i, s) % 2) {
						const t = e.slice(1, -1);
						return {
							type: "em",
							raw: e,
							text: t,
							tokens: this.lexer.inlineTokens(t)
						}
					}
					const l = e.slice(2, -2);
					return {
						type: "strong",
						raw: e,
						text: l,
						tokens: this.lexer.inlineTokens(l)
					}
				}
			}
		}
		codespan(t) {
			const e = this.rules.inline.code.exec(t);
			if (e) {
				let t = e[2].replace(/\n/g, " ");
				const i = /[^ ]/.test(t),
					r = /^ /.test(t) && / $/.test(t);
				return i && r && (t = t.substring(1, t.length - 1)), t = ke(t, !0), {
					type: "codespan",
					raw: e[0],
					text: t
				}
			}
		}
		br(t) {
			const e = this.rules.inline.br.exec(t);
			if (e) return {
				type: "br",
				raw: e[0]
			}
		}
		del(t) {
			const e = this.rules.inline.del.exec(t);
			if (e) return {
				type: "del",
				raw: e[0],
				text: e[2],
				tokens: this.lexer.inlineTokens(e[2])
			}
		}
		autolink(t, e) {
			const i = this.rules.inline.autolink.exec(t);
			if (i) {
				let t, r;
				return "@" === i[2] ? (t = ke(this.options.mangle ? e(i[1]) : i[1]), r = "mailto:" + t) : (t = ke(i[1]), r = t), {
					type: "link",
					raw: i[0],
					text: t,
					href: r,
					tokens: [{
						type: "text",
						raw: t,
						text: t
					}]
				}
			}
		}
		url(t, e) {
			let i;
			if (i = this.rules.inline.url.exec(t)) {
				let t, r;
				if ("@" === i[2]) t = ke(this.options.mangle ? e(i[0]) : i[0]), r = "mailto:" + t;
				else {
					let e;
					do {
						e = i[0], i[0] = this.rules.inline._backpedal.exec(i[0])[0]
					} while (e !== i[0]);
					t = ke(i[0]), r = "www." === i[1] ? "http://" + i[0] : i[0]
				}
				return {
					type: "link",
					raw: i[0],
					text: t,
					href: r,
					tokens: [{
						type: "text",
						raw: t,
						text: t
					}]
				}
			}
		}
		inlineText(t, e) {
			const i = this.rules.inline.text.exec(t);
			if (i) {
				let t;
				return t = this.lexer.state.inRawBlock ? this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(i[0]) : ke(i[0]) : i[0] : ke(this.options.smartypants ? e(i[0]) : i[0]), {
					type: "text",
					raw: i[0],
					text: t
				}
			}
		}
	}
	const Ye = {
		newline: /^(?: *(?:\n|$))+/,
		code: /^( {4}[^\n]+(?:\n(?: *(?:\n|$))*)?)+/,
		fences: /^ {0,3}(`{3,}(?=[^`\n]*\n)|~{3,})([^\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?=\n|$)|$)/,
		hr: /^ {0,3}((?:-[\t ]*){3,}|(?:_[ \t]*){3,}|(?:\*[ \t]*){3,})(?:\n+|$)/,
		heading: /^ {0,3}(#{1,6})(?=\s|$)(.*)(?:\n+|$)/,
		blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
		list: /^( {0,3}bull)([ \t][^\n]+?)?(?:\n|$)/,
		html: "^ {0,3}(?:<(script|pre|style|textarea)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)|comment[^\\n]*(\\n+|$)|<\\?[\\s\\S]*?(?:\\?>\\n*|$)|<![A-Z][\\s\\S]*?(?:>\\n*|$)|<!\\[CDATA\\[[\\s\\S]*?(?:\\]\\]>\\n*|$)|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:(?:\\n *)+\\n|$)|<(?!script|pre|style|textarea)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$)|</(?!script|pre|style|textarea)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:(?:\\n *)+\\n|$))",
		def: /^ {0,3}\[(label)\]: *(?:\n *)?([^<\s][^\s]*|<.*?>)(?:(?: +(?:\n *)?| *\n *)(title))? *(?:\n+|$)/,
		table: Re,
		lheading: /^((?:.|\n(?!\n))+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
		_paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading|blockquote|fences|list|html|table| +\n)[^\n]+)*)/,
		text: /^[^\n]+/,
		_label: /(?!\s*\])(?:\\.|[^\[\]\\])+/,
		_title: /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/
	};
	Ye.def = Ae(Ye.def).replace("label", Ye._label).replace("title", Ye._title).getRegex(), Ye.bullet = /(?:[*+-]|\d{1,9}[.)])/, Ye.listItemStart = Ae(/^( *)(bull) */).replace("bull", Ye.bullet).getRegex(), Ye.list = Ae(Ye.list).replace(/bull/g, Ye.bullet).replace("hr", "\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def", "\\n+(?=" + Ye.def.source + ")").getRegex(), Ye._tag = "address|article|aside|base|basefont|blockquote|body|caption|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr|track|ul", Ye._comment = /<!--(?!-?>)[\s\S]*?(?:-->|$)/, Ye.html = Ae(Ye.html, "i").replace("comment", Ye._comment).replace("tag", Ye._tag).replace("attribute", / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex(), Ye.paragraph = Ae(Ye._paragraph).replace("hr", Ye.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("|table", "").replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ye._tag).getRegex(), Ye.blockquote = Ae(Ye.blockquote).replace("paragraph", Ye.paragraph).getRegex(), Ye.normal = De({}, Ye), Ye.gfm = De({}, Ye.normal, {
		table: "^ *([^\\n ].*\\|.*)\\n {0,3}(?:\\| *)?(:?-+:? *(?:\\| *:?-+:? *)*)(?:\\| *)?(?:\\n((?:(?! *\\n|hr|heading|blockquote|code|fences|list|html).*(?:\\n|$))*)\\n*|$)"
	}), Ye.gfm.table = Ae(Ye.gfm.table).replace("hr", Ye.hr).replace("heading", " {0,3}#{1,6} ").replace("blockquote", " {0,3}>").replace("code", " {4}[^\\n]").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ye._tag).getRegex(), Ye.gfm.paragraph = Ae(Ye._paragraph).replace("hr", Ye.hr).replace("heading", " {0,3}#{1,6} ").replace("|lheading", "").replace("table", Ye.gfm.table).replace("blockquote", " {0,3}>").replace("fences", " {0,3}(?:`{3,}(?=[^`\\n]*\\n)|~{3,})[^\\n]*\\n").replace("list", " {0,3}(?:[*+-]|1[.)]) ").replace("html", "</?(?:tag)(?: +|\\n|/?>)|<(?:script|pre|style|textarea|!--)").replace("tag", Ye._tag).getRegex(), Ye.pedantic = De({}, Ye.normal, {
		html: Ae("^ *(?:comment *(?:\\n|\\s*$)|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)|<tag(?:\"[^\"]*\"|'[^']*'|\\s[^'\"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))").replace("comment", Ye._comment).replace(/tag/g, "(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b").getRegex(),
		def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/,
		heading: /^(#{1,6})(.*)(?:\n+|$)/,
		fences: Re,
		lheading: /^(.+?)\n {0,3}(=+|-+) *(?:\n+|$)/,
		paragraph: Ae(Ye.normal._paragraph).replace("hr", Ye.hr).replace("heading", " *#{1,6} *[^\n]").replace("lheading", Ye.lheading).replace("blockquote", " {0,3}>").replace("|fences", "").replace("|list", "").replace("|html", "").getRegex()
	});
	const je = {
		escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
		autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
		url: Re,
		tag: "^comment|^</[a-zA-Z][\\w:-]*\\s*>|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>|^<\\?[\\s\\S]*?\\?>|^<![a-zA-Z]+\\s[\\s\\S]*?>|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",
		link: /^!?\[(label)\]\(\s*(href)(?:\s+(title))?\s*\)/,
		reflink: /^!?\[(label)\]\[(ref)\]/,
		nolink: /^!?\[(ref)\](?:\[\])?/,
		reflinkSearch: "reflink|nolink(?!\\()",
		emStrong: {
			lDelim: /^(?:\*+(?:([punct_])|[^\s*]))|^_+(?:([punct*])|([^\s_]))/,
			rDelimAst: /^(?:[^_*\\]|\\.)*?\_\_(?:[^_*\\]|\\.)*?\*(?:[^_*\\]|\\.)*?(?=\_\_)|(?:[^*\\]|\\.)+(?=[^*])|[punct_](\*+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\*+)(?=[punct_\s]|$)|[punct_\s](\*+)(?=[^punct*_\s])|[\s](\*+)(?=[punct_])|[punct_](\*+)(?=[punct_])|(?:[^punct*_\s\\]|\\.)(\*+)(?=[^punct*_\s])/,
			rDelimUnd: /^(?:[^_*\\]|\\.)*?\*\*(?:[^_*\\]|\\.)*?\_(?:[^_*\\]|\\.)*?(?=\*\*)|(?:[^_\\]|\\.)+(?=[^_])|[punct*](\_+)(?=[\s]|$)|(?:[^punct*_\s\\]|\\.)(\_+)(?=[punct*\s]|$)|[punct*\s](\_+)(?=[^punct*_\s])|[\s](\_+)(?=[punct*])|[punct*](\_+)(?=[punct*])/
		},
		code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
		br: /^( {2,}|\\)\n(?!\s*$)/,
		del: Re,
		text: /^(`+|[^`])(?:(?= {2,}\n)|[\s\S]*?(?:(?=[\\<!\[`*_]|\b_|$)|[^ ](?= {2,}\n)))/,
		punctuation: /^([\spunctuation])/
	};

	function qe(t) {
		return t.replace(/---/g, "—").replace(/--/g, "–").replace(/(^|[-\u2014/(\[{"\s])'/g, "$1‘").replace(/'/g, "’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g, "$1“").replace(/"/g, "”").replace(/\.{3}/g, "…")
	}

	function Ze(t) {
		let e, i, r = "";
		const n = t.length;
		for (e = 0; e < n; e++) i = t.charCodeAt(e), Math.random() > .5 && (i = "x" + i.toString(16)), r += "&#" + i + ";";
		return r
	}
	je._punctuation = "!\"#$%&'()+\\-.,/:;<=>?@\\[\\]`^{|}~", je.punctuation = Ae(je.punctuation).replace(/punctuation/g, je._punctuation).getRegex(), je.blockSkip = /\[[^\]]*?\]\([^\)]*?\)|`[^`]*?`|<[^>]*?>/g, je.escapedEmSt = /(?:^|[^\\])(?:\\\\)*\\[*_]/g, je._comment = Ae(Ye._comment).replace("(?:--\x3e|$)", "--\x3e").getRegex(), je.emStrong.lDelim = Ae(je.emStrong.lDelim).replace(/punct/g, je._punctuation).getRegex(), je.emStrong.rDelimAst = Ae(je.emStrong.rDelimAst, "g").replace(/punct/g, je._punctuation).getRegex(), je.emStrong.rDelimUnd = Ae(je.emStrong.rDelimUnd, "g").replace(/punct/g, je._punctuation).getRegex(), je._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g, je._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/, je._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/, je.autolink = Ae(je.autolink).replace("scheme", je._scheme).replace("email", je._email).getRegex(), je._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/, je.tag = Ae(je.tag).replace("comment", je._comment).replace("attribute", je._attribute).getRegex(), je._label = /(?:\[(?:\\.|[^\[\]\\])*\]|\\.|`[^`]*`|[^\[\]\\`])*?/, je._href = /<(?:\\.|[^\n<>\\])+>|[^\s\x00-\x1f]*/, je._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/, je.link = Ae(je.link).replace("label", je._label).replace("href", je._href).replace("title", je._title).getRegex(), je.reflink = Ae(je.reflink).replace("label", je._label).replace("ref", Ye._label).getRegex(), je.nolink = Ae(je.nolink).replace("ref", Ye._label).getRegex(), je.reflinkSearch = Ae(je.reflinkSearch, "g").replace("reflink", je.reflink).replace("nolink", je.nolink).getRegex(), je.normal = De({}, je), je.pedantic = De({}, je.normal, {
		strong: {
			start: /^__|\*\*/,
			middle: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
			endAst: /\*\*(?!\*)/g,
			endUnd: /__(?!_)/g
		},
		em: {
			start: /^_|\*/,
			middle: /^()\*(?=\S)([\s\S]*?\S)\*(?!\*)|^_(?=\S)([\s\S]*?\S)_(?!_)/,
			endAst: /\*(?!\*)/g,
			endUnd: /_(?!_)/g
		},
		link: Ae(/^!?\[(label)\]\((.*?)\)/).replace("label", je._label).getRegex(),
		reflink: Ae(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace("label", je._label).getRegex()
	}), je.gfm = De({}, je.normal, {
		escape: Ae(je.escape).replace("])", "~|])").getRegex(),
		_extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
		url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
		_backpedal: /(?:[^?!.,:;*_'"~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_'"~)]+(?!$))+/,
		del: /^(~~?)(?=[^\s~])([\s\S]*?[^\s~])\1(?=[^~]|$)/,
		text: /^([`~]+|[^`~])(?:(?= {2,}\n)|(?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)|[\s\S]*?(?:(?=[\\<!\[`*~_]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@)))/
	}), je.gfm.url = Ae(je.gfm.url, "i").replace("email", je.gfm._extended_email).getRegex(), je.breaks = De({}, je.gfm, {
		br: Ae(je.br).replace("{2,}", "*").getRegex(),
		text: Ae(je.gfm.text).replace("\\b_", "\\b_| {2,}\\n").replace(/\{2,\}/g, "*").getRegex()
	});
	class We {
		constructor(t) {
			this.tokens = [], this.tokens.links = Object.create(null), this.options = t || ye, this.options.tokenizer = this.options.tokenizer || new Ve, this.tokenizer = this.options.tokenizer, this.tokenizer.options = this.options, this.tokenizer.lexer = this, this.inlineQueue = [], this.state = {
				inLink: !1,
				inRawBlock: !1,
				top: !0
			};
			const e = {
				block: Ye.normal,
				inline: je.normal
			};
			this.options.pedantic ? (e.block = Ye.pedantic, e.inline = je.pedantic) : this.options.gfm && (e.block = Ye.gfm, this.options.breaks ? e.inline = je.breaks : e.inline = je.gfm), this.tokenizer.rules = e
		}
		static get rules() {
			return {
				block: Ye,
				inline: je
			}
		}
		static lex(t, e) {
			return new We(e).lex(t)
		}
		static lexInline(t, e) {
			return new We(e).inlineTokens(t)
		}
		lex(t) {
			let e;
			for (t = t.replace(/\r\n|\r/g, "\n"), this.blockTokens(t, this.tokens); e = this.inlineQueue.shift();) this.inlineTokens(e.src, e.tokens);
			return this.tokens
		}
		blockTokens(t, e = []) {
			let i, r, n, s;
			for (t = this.options.pedantic ? t.replace(/\t/g, "    ").replace(/^ +$/gm, "") : t.replace(/^( *)(\t+)/gm, ((t, e, i) => e + "    ".repeat(i.length))); t;)
				if (!(this.options.extensions && this.options.extensions.block && this.options.extensions.block.some((r => !!(i = r.call({
						lexer: this
					}, t, e)) && (t = t.substring(i.raw.length), e.push(i), !0)))))
					if (i = this.tokenizer.space(t)) t = t.substring(i.raw.length), 1 === i.raw.length && e.length > 0 ? e[e.length - 1].raw += "\n" : e.push(i);
					else if (i = this.tokenizer.code(t)) t = t.substring(i.raw.length), r = e[e.length - 1], !r || "paragraph" !== r.type && "text" !== r.type ? e.push(i) : (r.raw += "\n" + i.raw, r.text += "\n" + i.text, this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
			else if (i = this.tokenizer.fences(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.heading(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.hr(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.blockquote(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.list(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.html(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.def(t)) t = t.substring(i.raw.length), r = e[e.length - 1], !r || "paragraph" !== r.type && "text" !== r.type ? this.tokens.links[i.tag] || (this.tokens.links[i.tag] = {
				href: i.href,
				title: i.title
			}) : (r.raw += "\n" + i.raw, r.text += "\n" + i.raw, this.inlineQueue[this.inlineQueue.length - 1].src = r.text);
			else if (i = this.tokenizer.table(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.lheading(t)) t = t.substring(i.raw.length), e.push(i);
			else {
				if (n = t, this.options.extensions && this.options.extensions.startBlock) {
					let e = 1 / 0;
					const i = t.slice(1);
					let r;
					this.options.extensions.startBlock.forEach((function(t) {
						r = t.call({
							lexer: this
						}, i), "number" == typeof r && r >= 0 && (e = Math.min(e, r))
					})), e < 1 / 0 && e >= 0 && (n = t.substring(0, e + 1))
				}
				if (this.state.top && (i = this.tokenizer.paragraph(n))) r = e[e.length - 1], s && "paragraph" === r.type ? (r.raw += "\n" + i.raw, r.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : e.push(i), s = n.length !== t.length, t = t.substring(i.raw.length);
				else if (i = this.tokenizer.text(t)) t = t.substring(i.raw.length), r = e[e.length - 1], r && "text" === r.type ? (r.raw += "\n" + i.raw, r.text += "\n" + i.text, this.inlineQueue.pop(), this.inlineQueue[this.inlineQueue.length - 1].src = r.text) : e.push(i);
				else if (t) {
					const e = "Infinite loop on byte: " + t.charCodeAt(0);
					if (this.options.silent) {
						console.error(e);
						break
					}
					throw new Error(e)
				}
			}
			return this.state.top = !0, e
		}
		inline(t, e = []) {
			return this.inlineQueue.push({
				src: t,
				tokens: e
			}), e
		}
		inlineTokens(t, e = []) {
			let i, r, n, s, a, o, l = t;
			if (this.tokens.links) {
				const t = Object.keys(this.tokens.links);
				if (t.length > 0)
					for (; null != (s = this.tokenizer.rules.inline.reflinkSearch.exec(l));) t.includes(s[0].slice(s[0].lastIndexOf("[") + 1, -1)) && (l = l.slice(0, s.index) + "[" + Ge("a", s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.reflinkSearch.lastIndex))
			}
			for (; null != (s = this.tokenizer.rules.inline.blockSkip.exec(l));) l = l.slice(0, s.index) + "[" + Ge("a", s[0].length - 2) + "]" + l.slice(this.tokenizer.rules.inline.blockSkip.lastIndex);
			for (; null != (s = this.tokenizer.rules.inline.escapedEmSt.exec(l));) l = l.slice(0, s.index + s[0].length - 2) + "++" + l.slice(this.tokenizer.rules.inline.escapedEmSt.lastIndex), this.tokenizer.rules.inline.escapedEmSt.lastIndex--;
			for (; t;)
				if (a || (o = ""), a = !1, !(this.options.extensions && this.options.extensions.inline && this.options.extensions.inline.some((r => !!(i = r.call({
						lexer: this
					}, t, e)) && (t = t.substring(i.raw.length), e.push(i), !0)))))
					if (i = this.tokenizer.escape(t)) t = t.substring(i.raw.length), e.push(i);
					else if (i = this.tokenizer.tag(t)) t = t.substring(i.raw.length), r = e[e.length - 1], r && "text" === i.type && "text" === r.type ? (r.raw += i.raw, r.text += i.text) : e.push(i);
			else if (i = this.tokenizer.link(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.reflink(t, this.tokens.links)) t = t.substring(i.raw.length), r = e[e.length - 1], r && "text" === i.type && "text" === r.type ? (r.raw += i.raw, r.text += i.text) : e.push(i);
			else if (i = this.tokenizer.emStrong(t, l, o)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.codespan(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.br(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.del(t)) t = t.substring(i.raw.length), e.push(i);
			else if (i = this.tokenizer.autolink(t, Ze)) t = t.substring(i.raw.length), e.push(i);
			else if (this.state.inLink || !(i = this.tokenizer.url(t, Ze))) {
				if (n = t, this.options.extensions && this.options.extensions.startInline) {
					let e = 1 / 0;
					const i = t.slice(1);
					let r;
					this.options.extensions.startInline.forEach((function(t) {
						r = t.call({
							lexer: this
						}, i), "number" == typeof r && r >= 0 && (e = Math.min(e, r))
					})), e < 1 / 0 && e >= 0 && (n = t.substring(0, e + 1))
				}
				if (i = this.tokenizer.inlineText(n, qe)) t = t.substring(i.raw.length), "_" !== i.raw.slice(-1) && (o = i.raw.slice(-1)), a = !0, r = e[e.length - 1], r && "text" === r.type ? (r.raw += i.raw, r.text += i.text) : e.push(i);
				else if (t) {
					const e = "Infinite loop on byte: " + t.charCodeAt(0);
					if (this.options.silent) {
						console.error(e);
						break
					}
					throw new Error(e)
				}
			} else t = t.substring(i.raw.length), e.push(i);
			return e
		}
	}
	class Ke {
		constructor(t) {
			this.options = t || ye
		}
		code(t, e, i) {
			const r = (e || "").match(/\S*/)[0];
			if (this.options.highlight) {
				const e = this.options.highlight(t, r);
				null != e && e !== t && (i = !0, t = e)
			}
			return t = t.replace(/\n$/, "") + "\n", r ? '<pre><code class="' + this.options.langPrefix + ke(r) + '">' + (i ? t : ke(t, !0)) + "</code></pre>\n" : "<pre><code>" + (i ? t : ke(t, !0)) + "</code></pre>\n"
		}
		blockquote(t) {
			return `<blockquote>\n${t}</blockquote>\n`
		}
		html(t) {
			return t
		}
		heading(t, e, i, r) {
			if (this.options.headerIds) {
				return `<h${e} id="${this.options.headerPrefix+r.slug(i)}">${t}</h${e}>\n`
			}
			return `<h${e}>${t}</h${e}>\n`
		}
		hr() {
			return this.options.xhtml ? "<hr/>\n" : "<hr>\n"
		}
		list(t, e, i) {
			const r = e ? "ol" : "ul";
			return "<" + r + (e && 1 !== i ? ' start="' + i + '"' : "") + ">\n" + t + "</" + r + ">\n"
		}
		listitem(t) {
			return `<li>${t}</li>\n`
		}
		checkbox(t) {
			return "<input " + (t ? 'checked="" ' : "") + 'disabled="" type="checkbox"' + (this.options.xhtml ? " /" : "") + "> "
		}
		paragraph(t) {
			return `<p>${t}</p>\n`
		}
		table(t, e) {
			return e && (e = `<tbody>${e}</tbody>`), "<table>\n<thead>\n" + t + "</thead>\n" + e + "</table>\n"
		}
		tablerow(t) {
			return `<tr>\n${t}</tr>\n`
		}
		tablecell(t, e) {
			const i = e.header ? "th" : "td";
			return (e.align ? `<${i} align="${e.align}">` : `<${i}>`) + t + `</${i}>\n`
		}
		strong(t) {
			return `<strong>${t}</strong>`
		}
		em(t) {
			return `<em>${t}</em>`
		}
		codespan(t) {
			return `<code>${t}</code>`
		}
		br() {
			return this.options.xhtml ? "<br/>" : "<br>"
		}
		del(t) {
			return `<del>${t}</del>`
		}
		link(t, e, i) {
			if (null === (t = Ie(this.options.sanitize, this.options.baseUrl, t))) return i;
			let r = '<a href="' + t + '"';
			return e && (r += ' title="' + e + '"'), r += ">" + i + "</a>", r
		}
		image(t, e, i) {
			if (null === (t = Ie(this.options.sanitize, this.options.baseUrl, t))) return i;
			let r = `<img src="${t}" alt="${i}"`;
			return e && (r += ` title="${e}"`), r += this.options.xhtml ? "/>" : ">", r
		}
		text(t) {
			return t
		}
	}
	class Xe {
		strong(t) {
			return t
		}
		em(t) {
			return t
		}
		codespan(t) {
			return t
		}
		del(t) {
			return t
		}
		html(t) {
			return t
		}
		text(t) {
			return t
		}
		link(t, e, i) {
			return "" + i
		}
		image(t, e, i) {
			return "" + i
		}
		br() {
			return ""
		}
	}
	class Qe {
		constructor() {
			this.seen = {}
		}
		serialize(t) {
			return t.toLowerCase().trim().replace(/<[!\/a-z].*?>/gi, "").replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, "").replace(/\s/g, "-")
		}
		getNextSafeSlug(t, e) {
			let i = t,
				r = 0;
			if (this.seen.hasOwnProperty(i)) {
				r = this.seen[t];
				do {
					r++, i = t + "-" + r
				} while (this.seen.hasOwnProperty(i))
			}
			return e || (this.seen[t] = r, this.seen[i] = 0), i
		}
		slug(t, e = {}) {
			const i = this.serialize(t);
			return this.getNextSafeSlug(i, e.dryrun)
		}
	}
	class Je {
		constructor(t) {
			this.options = t || ye, this.options.renderer = this.options.renderer || new Ke, this.renderer = this.options.renderer, this.renderer.options = this.options, this.textRenderer = new Xe, this.slugger = new Qe
		}
		static parse(t, e) {
			return new Je(e).parse(t)
		}
		static parseInline(t, e) {
			return new Je(e).parseInline(t)
		}
		parse(t, e = !0) {
			let i, r, n, s, a, o, l, h, d, c, p, u, f, m, g, _, y, b, x, w = "";
			const v = t.length;
			for (i = 0; i < v; i++)
				if (c = t[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[c.type] && (x = this.options.extensions.renderers[c.type].call({
						parser: this
					}, c), !1 !== x || !["space", "hr", "heading", "code", "table", "blockquote", "list", "html", "paragraph", "text"].includes(c.type))) w += x || "";
				else switch (c.type) {
					case "space":
						continue;
					case "hr":
						w += this.renderer.hr();
						continue;
					case "heading":
						w += this.renderer.heading(this.parseInline(c.tokens), c.depth, Ee(this.parseInline(c.tokens, this.textRenderer)), this.slugger);
						continue;
					case "code":
						w += this.renderer.code(c.text, c.lang, c.escaped);
						continue;
					case "table":
						for (h = "", l = "", s = c.header.length, r = 0; r < s; r++) l += this.renderer.tablecell(this.parseInline(c.header[r].tokens), {
							header: !0,
							align: c.align[r]
						});
						for (h += this.renderer.tablerow(l), d = "", s = c.rows.length, r = 0; r < s; r++) {
							for (o = c.rows[r], l = "", a = o.length, n = 0; n < a; n++) l += this.renderer.tablecell(this.parseInline(o[n].tokens), {
								header: !1,
								align: c.align[n]
							});
							d += this.renderer.tablerow(l)
						}
						w += this.renderer.table(h, d);
						continue;
					case "blockquote":
						d = this.parse(c.tokens), w += this.renderer.blockquote(d);
						continue;
					case "list":
						for (p = c.ordered, u = c.start, f = c.loose, s = c.items.length, d = "", r = 0; r < s; r++) g = c.items[r], _ = g.checked, y = g.task, m = "", g.task && (b = this.renderer.checkbox(_), f ? g.tokens.length > 0 && "paragraph" === g.tokens[0].type ? (g.tokens[0].text = b + " " + g.tokens[0].text, g.tokens[0].tokens && g.tokens[0].tokens.length > 0 && "text" === g.tokens[0].tokens[0].type && (g.tokens[0].tokens[0].text = b + " " + g.tokens[0].tokens[0].text)) : g.tokens.unshift({
							type: "text",
							text: b
						}) : m += b), m += this.parse(g.tokens, f), d += this.renderer.listitem(m, y, _);
						w += this.renderer.list(d, p, u);
						continue;
					case "html":
						w += this.renderer.html(c.text);
						continue;
					case "paragraph":
						w += this.renderer.paragraph(this.parseInline(c.tokens));
						continue;
					case "text":
						for (d = c.tokens ? this.parseInline(c.tokens) : c.text; i + 1 < v && "text" === t[i + 1].type;) c = t[++i], d += "\n" + (c.tokens ? this.parseInline(c.tokens) : c.text);
						w += e ? this.renderer.paragraph(d) : d;
						continue;
					default: {
						const t = 'Token with "' + c.type + '" type was not found.';
						if (this.options.silent) return void console.error(t);
						throw new Error(t)
					}
				}
			return w
		}
		parseInline(t, e) {
			e = e || this.renderer;
			let i, r, n, s = "";
			const a = t.length;
			for (i = 0; i < a; i++)
				if (r = t[i], this.options.extensions && this.options.extensions.renderers && this.options.extensions.renderers[r.type] && (n = this.options.extensions.renderers[r.type].call({
						parser: this
					}, r), !1 !== n || !["escape", "html", "link", "image", "strong", "em", "codespan", "br", "del", "text"].includes(r.type))) s += n || "";
				else switch (r.type) {
					case "escape":
					case "text":
						s += e.text(r.text);
						break;
					case "html":
						s += e.html(r.text);
						break;
					case "link":
						s += e.link(r.href, r.title, this.parseInline(r.tokens, e));
						break;
					case "image":
						s += e.image(r.href, r.title, r.text);
						break;
					case "strong":
						s += e.strong(this.parseInline(r.tokens, e));
						break;
					case "em":
						s += e.em(this.parseInline(r.tokens, e));
						break;
					case "codespan":
						s += e.codespan(r.text);
						break;
					case "br":
						s += e.br();
						break;
					case "del":
						s += e.del(this.parseInline(r.tokens, e));
						break;
					default: {
						const t = 'Token with "' + r.type + '" type was not found.';
						if (this.options.silent) return void console.error(t);
						throw new Error(t)
					}
				}
			return s
		}
	}

	function ti(t, e, i) {
		if (null == t) throw new Error("marked(): input parameter is undefined or null");
		if ("string" != typeof t) throw new Error("marked(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected");
		if ("function" == typeof e && (i = e, e = null), Me(e = De({}, ti.defaults, e || {})), i) {
			const r = e.highlight;
			let n;
			try {
				n = We.lex(t, e)
			} catch (t) {
				return i(t)
			}
			const s = function(t) {
				let s;
				if (!t) try {
					e.walkTokens && ti.walkTokens(n, e.walkTokens), s = Je.parse(n, e)
				} catch (e) {
					t = e
				}
				return e.highlight = r, t ? i(t) : i(null, s)
			};
			if (!r || r.length < 3) return s();
			if (delete e.highlight, !n.length) return s();
			let a = 0;
			return ti.walkTokens(n, (function(t) {
				"code" === t.type && (a++, setTimeout((() => {
					r(t.text, t.lang, (function(e, i) {
						if (e) return s(e);
						null != i && i !== t.text && (t.text = i, t.escaped = !0), a--, 0 === a && s()
					}))
				}), 0))
			})), void(0 === a && s())
		}

		function r(t) {
			if (t.message += "\nPlease report this to https://github.com/markedjs/marked.", e.silent) return "<p>An error occurred:</p><pre>" + ke(t.message + "", !0) + "</pre>";
			throw t
		}
		try {
			const i = We.lex(t, e);
			if (e.walkTokens) {
				if (e.async) return Promise.all(ti.walkTokens(i, e.walkTokens)).then((() => Je.parse(i, e))).catch(r);
				ti.walkTokens(i, e.walkTokens)
			}
			return Je.parse(i, e)
		} catch (t) {
			r(t)
		}
	}
	ti.options = ti.setOptions = function(t) {
		var e;
		return De(ti.defaults, t), e = ti.defaults, ye = e, ti
	}, ti.getDefaults = _e, ti.defaults = ye, ti.use = function(...t) {
		const e = ti.defaults.extensions || {
			renderers: {},
			childTokens: {}
		};
		t.forEach((t => {
			const i = De({}, t);
			if (i.async = ti.defaults.async || i.async, t.extensions && (t.extensions.forEach((t => {
					if (!t.name) throw new Error("extension name required");
					if (t.renderer) {
						const i = e.renderers[t.name];
						e.renderers[t.name] = i ? function(...e) {
							let r = t.renderer.apply(this, e);
							return !1 === r && (r = i.apply(this, e)), r
						} : t.renderer
					}
					if (t.tokenizer) {
						if (!t.level || "block" !== t.level && "inline" !== t.level) throw new Error("extension level must be 'block' or 'inline'");
						e[t.level] ? e[t.level].unshift(t.tokenizer) : e[t.level] = [t.tokenizer], t.start && ("block" === t.level ? e.startBlock ? e.startBlock.push(t.start) : e.startBlock = [t.start] : "inline" === t.level && (e.startInline ? e.startInline.push(t.start) : e.startInline = [t.start]))
					}
					t.childTokens && (e.childTokens[t.name] = t.childTokens)
				})), i.extensions = e), t.renderer) {
				const e = ti.defaults.renderer || new Ke;
				for (const i in t.renderer) {
					const r = e[i];
					e[i] = (...n) => {
						let s = t.renderer[i].apply(e, n);
						return !1 === s && (s = r.apply(e, n)), s
					}
				}
				i.renderer = e
			}
			if (t.tokenizer) {
				const e = ti.defaults.tokenizer || new Ve;
				for (const i in t.tokenizer) {
					const r = e[i];
					e[i] = (...n) => {
						let s = t.tokenizer[i].apply(e, n);
						return !1 === s && (s = r.apply(e, n)), s
					}
				}
				i.tokenizer = e
			}
			if (t.walkTokens) {
				const e = ti.defaults.walkTokens;
				i.walkTokens = function(i) {
					let r = [];
					return r.push(t.walkTokens.call(this, i)), e && (r = r.concat(e.call(this, i))), r
				}
			}
			ti.setOptions(i)
		}))
	}, ti.walkTokens = function(t, e) {
		let i = [];
		for (const r of t) switch (i = i.concat(e.call(ti, r)), r.type) {
			case "table":
				for (const t of r.header) i = i.concat(ti.walkTokens(t.tokens, e));
				for (const t of r.rows)
					for (const r of t) i = i.concat(ti.walkTokens(r.tokens, e));
				break;
			case "list":
				i = i.concat(ti.walkTokens(r.items, e));
				break;
			default:
				ti.defaults.extensions && ti.defaults.extensions.childTokens && ti.defaults.extensions.childTokens[r.type] ? ti.defaults.extensions.childTokens[r.type].forEach((function(t) {
					i = i.concat(ti.walkTokens(r[t], e))
				})) : r.tokens && (i = i.concat(ti.walkTokens(r.tokens, e)))
		}
		return i
	}, ti.parseInline = function(t, e) {
		if (null == t) throw new Error("marked.parseInline(): input parameter is undefined or null");
		if ("string" != typeof t) throw new Error("marked.parseInline(): input parameter is of type " + Object.prototype.toString.call(t) + ", string expected");
		Me(e = De({}, ti.defaults, e || {}));
		try {
			const i = We.lexInline(t, e);
			return e.walkTokens && ti.walkTokens(i, e.walkTokens), Je.parseInline(i, e)
		} catch (t) {
			if (t.message += "\nPlease report this to https://github.com/markedjs/marked.", e.silent) return "<p>An error occurred:</p><pre>" + ke(t.message + "", !0) + "</pre>";
			throw t
		}
	}, ti.Parser = Je, ti.parser = Je.parse, ti.Renderer = Ke, ti.TextRenderer = Xe, ti.Lexer = We, ti.lexer = We.lex, ti.Tokenizer = Ve, ti.Slugger = Qe, ti.parse = ti, ti.options, ti.setOptions, ti.use, ti.walkTokens, ti.parseInline, Je.parse, We.lex;
	const ei = {};

	function ii(e) {
		let i;
		return {
			c() {
				i = v(e[1])
			},
			m(t, e) {
				y(t, i, e)
			},
			p(t, e) {
				2 & e && E(i, t[1])
			},
			i: t,
			o: t,
			d(t) {
				t && b(i)
			}
		}
	}

	function ri(t) {
		let e, i;
		const r = t[5].default,
			n = d(r, t, t[4], null);
		return {
			c() {
				e = w("h6"), n && n.c(), $(e, "id", t[2])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 16 & s) && u(n, r, t, t[4], i ? p(r, t[4], s, null) : f(t[4]), null), (!i || 4 & s) && $(e, "id", t[2])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function ni(t) {
		let e, i;
		const r = t[5].default,
			n = d(r, t, t[4], null);
		return {
			c() {
				e = w("h5"), n && n.c(), $(e, "id", t[2])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 16 & s) && u(n, r, t, t[4], i ? p(r, t[4], s, null) : f(t[4]), null), (!i || 4 & s) && $(e, "id", t[2])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function si(t) {
		let e, i;
		const r = t[5].default,
			n = d(r, t, t[4], null);
		return {
			c() {
				e = w("h4"), n && n.c(), $(e, "id", t[2])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 16 & s) && u(n, r, t, t[4], i ? p(r, t[4], s, null) : f(t[4]), null), (!i || 4 & s) && $(e, "id", t[2])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function ai(t) {
		let e, i;
		const r = t[5].default,
			n = d(r, t, t[4], null);
		return {
			c() {
				e = w("h3"), n && n.c(), $(e, "id", t[2])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 16 & s) && u(n, r, t, t[4], i ? p(r, t[4], s, null) : f(t[4]), null), (!i || 4 & s) && $(e, "id", t[2])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function oi(t) {
		let e, i;
		const r = t[5].default,
			n = d(r, t, t[4], null);
		return {
			c() {
				e = w("h2"), n && n.c(), $(e, "id", t[2])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 16 & s) && u(n, r, t, t[4], i ? p(r, t[4], s, null) : f(t[4]), null), (!i || 4 & s) && $(e, "id", t[2])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function li(t) {
		let e, i;
		const r = t[5].default,
			n = d(r, t, t[4], null);
		return {
			c() {
				e = w("h1"), n && n.c(), $(e, "id", t[2])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 16 & s) && u(n, r, t, t[4], i ? p(r, t[4], s, null) : f(t[4]), null), (!i || 4 & s) && $(e, "id", t[2])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function hi(t) {
		let e, i, r, n;
		const s = [li, oi, ai, si, ni, ri, ii],
			a = [];

		function o(t, e) {
			return 1 === t[0] ? 0 : 2 === t[0] ? 1 : 3 === t[0] ? 2 : 4 === t[0] ? 3 : 5 === t[0] ? 4 : 6 === t[0] ? 5 : 6
		}
		return e = o(t), i = a[e] = s[e](t), {
			c() {
				i.c(), r = U()
			},
			m(t, i) {
				a[e].m(t, i), y(t, r, i), n = !0
			},
			p(t, [n]) {
				let l = e;
				e = o(t), e === l ? a[e].p(t, n) : (K(), J(a[l], 1, 1, (() => {
					a[l] = null
				})), X(), i = a[e], i ? i.p(t, n) : (i = a[e] = s[e](t), i.c()), Q(i, 1), i.m(r.parentNode, r))
			},
			i(t) {
				n || (Q(i), n = !0)
			},
			o(t) {
				J(i), n = !1
			},
			d(t) {
				a[e].d(t), t && b(r)
			}
		}
	}

	function di(t, e, i) {
		let r, {
				$$slots: n = {},
				$$scope: s
			} = e,
			{
				depth: a
			} = e,
			{
				raw: o
			} = e,
			{
				text: l
			} = e;
		const {
			slug: h,
			getOptions: d
		} = L(ei), c = d();
		return t.$$set = t => {
			"depth" in t && i(0, a = t.depth), "raw" in t && i(1, o = t.raw), "text" in t && i(3, l = t.text), "$$scope" in t && i(4, s = t.$$scope)
		}, t.$$.update = () => {
			8 & t.$$.dirty && i(2, r = c.headerIds ? c.headerPrefix + h(l) : void 0)
		}, [a, o, r, l, s, n]
	}

	function ci(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("p"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function pi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function ui(t) {
		let e;
		const i = t[3].default,
			r = d(i, t, t[2], null);
		return {
			c() {
				r && r.c()
			},
			m(t, i) {
				r && r.m(t, i), e = !0
			},
			p(t, [n]) {
				r && r.p && (!e || 4 & n) && u(r, i, t, t[2], e ? p(i, t[2], n, null) : f(t[2]), null)
			},
			i(t) {
				e || (Q(r, t), e = !0)
			},
			o(t) {
				J(r, t), e = !1
			},
			d(t) {
				r && r.d(t)
			}
		}
	}

	function fi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e, {
			text: s
		} = e, {
			raw: a
		} = e;
		return t.$$set = t => {
			"text" in t && i(0, s = t.text), "raw" in t && i(1, a = t.raw), "$$scope" in t && i(2, n = t.$$scope)
		}, [s, a, n, r]
	}

	function mi(e) {
		let i, r;
		return {
			c() {
				i = w("img"), h(i.src, r = e[0]) || $(i, "src", r), $(i, "title", e[1]), $(i, "alt", e[2])
			},
			m(t, e) {
				y(t, i, e)
			},
			p(t, [e]) {
				1 & e && !h(i.src, r = t[0]) && $(i, "src", r), 2 & e && $(i, "title", t[1]), 4 & e && $(i, "alt", t[2])
			},
			i: t,
			o: t,
			d(t) {
				t && b(i)
			}
		}
	}

	function gi(t, e, i) {
		let {
			href: r = ""
		} = e, {
			title: n
		} = e, {
			text: s = ""
		} = e;
		return t.$$set = t => {
			"href" in t && i(0, r = t.href), "title" in t && i(1, n = t.title), "text" in t && i(2, s = t.text)
		}, [r, n, s]
	}

	function _i(t) {
		let e, i;
		const r = t[3].default,
			n = d(r, t, t[2], null);
		return {
			c() {
				e = w("a"), n && n.c(), $(e, "href", t[0]), $(e, "title", t[1])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [s]) {
				n && n.p && (!i || 4 & s) && u(n, r, t, t[2], i ? p(r, t[2], s, null) : f(t[2]), null), (!i || 1 & s) && $(e, "href", t[0]), (!i || 2 & s) && $(e, "title", t[1])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function yi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e, {
			href: s = ""
		} = e, {
			title: a
		} = e;
		return t.$$set = t => {
			"href" in t && i(0, s = t.href), "title" in t && i(1, a = t.title), "$$scope" in t && i(2, n = t.$$scope)
		}, [s, a, n, r]
	}

	function bi(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("em"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function xi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function wi(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("del"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function vi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function Si(e) {
		let i, r, n = e[0].replace(/`/g, "") + "";
		return {
			c() {
				i = w("code"), r = v(n)
			},
			m(t, e) {
				y(t, i, e), _(i, r)
			},
			p(t, [e]) {
				1 & e && n !== (n = t[0].replace(/`/g, "") + "") && E(r, n)
			},
			i: t,
			o: t,
			d(t) {
				t && b(i)
			}
		}
	}

	function Ui(t, e, i) {
		let {
			raw: r
		} = e;
		return t.$$set = t => {
			"raw" in t && i(0, r = t.raw)
		}, [r]
	}

	function ki(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("strong"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function $i(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function Ei(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("table"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function zi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function Ai(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("thead"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Ti(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function Bi(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("tbody"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Ii(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function Ci(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("tr"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Pi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function Fi(t) {
		let e, i;
		const r = t[3].default,
			n = d(r, t, t[2], null);
		return {
			c() {
				e = w("td"), n && n.c(), $(e, "align", t[1])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 4 & s) && u(n, r, t, t[2], i ? p(r, t[2], s, null) : f(t[2]), null), (!i || 2 & s) && $(e, "align", t[1])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Li(t) {
		let e, i;
		const r = t[3].default,
			n = d(r, t, t[2], null);
		return {
			c() {
				e = w("th"), n && n.c(), $(e, "align", t[1])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 4 & s) && u(n, r, t, t[2], i ? p(r, t[2], s, null) : f(t[2]), null), (!i || 2 & s) && $(e, "align", t[1])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Ri(t) {
		let e, i, r, n;
		const s = [Li, Fi],
			a = [];

		function o(t, e) {
			return t[0] ? 0 : 1
		}
		return e = o(t), i = a[e] = s[e](t), {
			c() {
				i.c(), r = U()
			},
			m(t, i) {
				a[e].m(t, i), y(t, r, i), n = !0
			},
			p(t, [n]) {
				let l = e;
				e = o(t), e === l ? a[e].p(t, n) : (K(), J(a[l], 1, 1, (() => {
					a[l] = null
				})), X(), i = a[e], i ? i.p(t, n) : (i = a[e] = s[e](t), i.c()), Q(i, 1), i.m(r.parentNode, r))
			},
			i(t) {
				n || (Q(i), n = !0)
			},
			o(t) {
				J(i), n = !1
			},
			d(t) {
				a[e].d(t), t && b(r)
			}
		}
	}

	function Di(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e, {
			header: s
		} = e, {
			align: a
		} = e;
		return t.$$set = t => {
			"header" in t && i(0, s = t.header), "align" in t && i(1, a = t.align), "$$scope" in t && i(2, n = t.$$scope)
		}, [s, a, n, r]
	}

	function Ni(t) {
		let e, i;
		const r = t[3].default,
			n = d(r, t, t[2], null);
		return {
			c() {
				e = w("ul"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, e) {
				n && n.p && (!i || 4 & e) && u(n, r, t, t[2], i ? p(r, t[2], e, null) : f(t[2]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Oi(t) {
		let e, i;
		const r = t[3].default,
			n = d(r, t, t[2], null);
		return {
			c() {
				e = w("ol"), n && n.c(), $(e, "start", t[1])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, s) {
				n && n.p && (!i || 4 & s) && u(n, r, t, t[2], i ? p(r, t[2], s, null) : f(t[2]), null), (!i || 2 & s) && $(e, "start", t[1])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Mi(t) {
		let e, i, r, n;
		const s = [Oi, Ni],
			a = [];

		function o(t, e) {
			return t[0] ? 0 : 1
		}
		return e = o(t), i = a[e] = s[e](t), {
			c() {
				i.c(), r = U()
			},
			m(t, i) {
				a[e].m(t, i), y(t, r, i), n = !0
			},
			p(t, [n]) {
				let l = e;
				e = o(t), e === l ? a[e].p(t, n) : (K(), J(a[l], 1, 1, (() => {
					a[l] = null
				})), X(), i = a[e], i ? i.p(t, n) : (i = a[e] = s[e](t), i.c()), Q(i, 1), i.m(r.parentNode, r))
			},
			i(t) {
				n || (Q(i), n = !0)
			},
			o(t) {
				J(i), n = !1
			},
			d(t) {
				a[e].d(t), t && b(r)
			}
		}
	}

	function Gi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e, {
			ordered: s
		} = e, {
			start: a
		} = e;
		return t.$$set = t => {
			"ordered" in t && i(0, s = t.ordered), "start" in t && i(1, a = t.start), "$$scope" in t && i(2, n = t.$$scope)
		}, [s, a, n, r]
	}

	function Hi(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("li"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Vi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function Yi(e) {
		let i;
		return {
			c() {
				i = w("hr")
			},
			m(t, e) {
				y(t, i, e)
			},
			p: t,
			i: t,
			o: t,
			d(t) {
				t && b(i)
			}
		}
	}

	function ji(e) {
		let i, r;
		return {
			c() {
				i = new A(!1), r = U(), i.a = r
			},
			m(t, n) {
				i.m(e[0], t, n), y(t, r, n)
			},
			p(t, [e]) {
				1 & e && i.p(t[0])
			},
			i: t,
			o: t,
			d(t) {
				t && b(r), t && i.d()
			}
		}
	}

	function qi(t, e, i) {
		let {
			text: r
		} = e;
		return t.$$set = t => {
			"text" in t && i(0, r = t.text)
		}, [r]
	}

	function Zi(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("blockquote"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Wi(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}

	function Ki(e) {
		let i, r, n;
		return {
			c() {
				i = w("pre"), r = w("code"), n = v(e[1]), $(i, "class", e[0])
			},
			m(t, e) {
				y(t, i, e), _(i, r), _(r, n)
			},
			p(t, [e]) {
				2 & e && E(n, t[1]), 1 & e && $(i, "class", t[0])
			},
			i: t,
			o: t,
			d(t) {
				t && b(i)
			}
		}
	}

	function Xi(t, e, i) {
		let {
			lang: r
		} = e, {
			text: n
		} = e;
		return t.$$set = t => {
			"lang" in t && i(0, r = t.lang), "text" in t && i(1, n = t.text)
		}, [r, n]
	}

	function Qi(t) {
		let e, i;
		const r = t[1].default,
			n = d(r, t, t[0], null);
		return {
			c() {
				e = w("br"), n && n.c()
			},
			m(t, r) {
				y(t, e, r), n && n.m(t, r), i = !0
			},
			p(t, [e]) {
				n && n.p && (!i || 1 & e) && u(n, r, t, t[0], i ? p(r, t[0], e, null) : f(t[0]), null)
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function Ji(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e;
		return t.$$set = t => {
			"$$scope" in t && i(0, n = t.$$scope)
		}, [n, r]
	}
	const tr = {
			heading: class extends ht {
				constructor(t) {
					super(), lt(this, t, di, hi, a, {
						depth: 0,
						raw: 1,
						text: 3
					})
				}
			},
			paragraph: class extends ht {
				constructor(t) {
					super(), lt(this, t, pi, ci, a, {})
				}
			},
			text: class extends ht {
				constructor(t) {
					super(), lt(this, t, fi, ui, a, {
						text: 0,
						raw: 1
					})
				}
			},
			image: class extends ht {
				constructor(t) {
					super(), lt(this, t, gi, mi, a, {
						href: 0,
						title: 1,
						text: 2
					})
				}
			},
			link: class extends ht {
				constructor(t) {
					super(), lt(this, t, yi, _i, a, {
						href: 0,
						title: 1
					})
				}
			},
			em: class extends ht {
				constructor(t) {
					super(), lt(this, t, xi, bi, a, {})
				}
			},
			strong: class extends ht {
				constructor(t) {
					super(), lt(this, t, $i, ki, a, {})
				}
			},
			codespan: class extends ht {
				constructor(t) {
					super(), lt(this, t, Ui, Si, a, {
						raw: 0
					})
				}
			},
			del: class extends ht {
				constructor(t) {
					super(), lt(this, t, vi, wi, a, {})
				}
			},
			table: class extends ht {
				constructor(t) {
					super(), lt(this, t, zi, Ei, a, {})
				}
			},
			tablehead: class extends ht {
				constructor(t) {
					super(), lt(this, t, Ti, Ai, a, {})
				}
			},
			tablebody: class extends ht {
				constructor(t) {
					super(), lt(this, t, Ii, Bi, a, {})
				}
			},
			tablerow: class extends ht {
				constructor(t) {
					super(), lt(this, t, Pi, Ci, a, {})
				}
			},
			tablecell: class extends ht {
				constructor(t) {
					super(), lt(this, t, Di, Ri, a, {
						header: 0,
						align: 1
					})
				}
			},
			list: class extends ht {
				constructor(t) {
					super(), lt(this, t, Gi, Mi, a, {
						ordered: 0,
						start: 1
					})
				}
			},
			orderedlistitem: null,
			unorderedlistitem: null,
			listitem: class extends ht {
				constructor(t) {
					super(), lt(this, t, Vi, Hi, a, {})
				}
			},
			hr: class extends ht {
				constructor(t) {
					super(), lt(this, t, null, Yi, a, {})
				}
			},
			html: class extends ht {
				constructor(t) {
					super(), lt(this, t, qi, ji, a, {
						text: 0
					})
				}
			},
			blockquote: class extends ht {
				constructor(t) {
					super(), lt(this, t, Wi, Zi, a, {})
				}
			},
			code: class extends ht {
				constructor(t) {
					super(), lt(this, t, Xi, Ki, a, {
						lang: 0,
						text: 1
					})
				}
			},
			br: class extends ht {
				constructor(t) {
					super(), lt(this, t, Ji, Qi, a, {})
				}
			}
		},
		er = {
			baseUrl: null,
			breaks: !1,
			gfm: !0,
			headerIds: !0,
			headerPrefix: "",
			highlight: null,
			langPrefix: "language-",
			mangle: !0,
			pedantic: !1,
			renderer: null,
			sanitize: !1,
			sanitizer: null,
			silent: !1,
			smartLists: !1,
			smartypants: !1,
			tokenizer: null,
			xhtml: !1
		};

	function ir(t) {
		let e, i;
		return e = new ge({
			props: {
				tokens: t[0],
				renderers: t[1]
			}
		}), {
			c() {
				nt(e.$$.fragment)
			},
			m(t, r) {
				st(e, t, r), i = !0
			},
			p(t, [i]) {
				const r = {};
				1 & i && (r.tokens = t[0]), 2 & i && (r.renderers = t[1]), e.$set(r)
			},
			i(t) {
				i || (Q(e.$$.fragment, t), i = !0)
			},
			o(t) {
				J(e.$$.fragment, t), i = !1
			},
			d(t) {
				at(e, t)
			}
		}
	}

	function rr(t, e, i) {
		let r, n, s, a, {
				source: o = []
			} = e,
			{
				renderers: l = {}
			} = e,
			{
				options: h = {}
			} = e,
			{
				isInline: d = !1
			} = e;
		const c = P();
		let p, u, f;
		return F(ei, {
			slug: t => n ? n.slug(t) : "",
			getOptions: () => s
		}), C((() => {
			i(7, f = !0)
		})), t.$$set = t => {
			"source" in t && i(2, o = t.source), "renderers" in t && i(3, l = t.renderers), "options" in t && i(4, h = t.options), "isInline" in t && i(5, d = t.isInline)
		}, t.$$.update = () => {
			4 & t.$$.dirty && i(8, r = Array.isArray(o)), 4 & t.$$.dirty && (n = o ? new Qe : void 0), 16 & t.$$.dirty && i(9, s = {
				...er,
				...h
			}), 869 & t.$$.dirty && (r ? i(0, p = o) : (i(6, u = new We(s)), i(0, p = d ? u.inlineTokens(o) : u.lex(o)), c("parsed", {
				tokens: p
			}))), 8 & t.$$.dirty && i(1, a = {
				...tr,
				...l
			}), 385 & t.$$.dirty && f && !r && c("parsed", {
				tokens: p
			})
		}, [p, a, o, l, h, d, u, f, r, s]
	}
	class nr extends ht {
		constructor(t) {
			super(), lt(this, t, rr, ir, a, {
				source: 2,
				renderers: 3,
				options: 4,
				isInline: 5
			})
		}
	}

	function sr(t) {
		let e, i;
		const r = t[3].default,
			n = d(r, t, t[2], null);
		return {
			c() {
				e = w("a"), n && n.c(), $(e, "target", "_blank"), $(e, "rel", "noopener noreferrer"), $(e, "href", t[0]), $(e, "title", t[1])
			},
			m(t, r) {
				y(t, e, r), n && n.m(e, null), i = !0
			},
			p(t, [s]) {
				n && n.p && (!i || 4 & s) && u(n, r, t, t[2], i ? p(r, t[2], s, null) : f(t[2]), null), (!i || 1 & s) && $(e, "href", t[0]), (!i || 2 & s) && $(e, "title", t[1])
			},
			i(t) {
				i || (Q(n, t), i = !0)
			},
			o(t) {
				J(n, t), i = !1
			},
			d(t) {
				t && b(e), n && n.d(t)
			}
		}
	}

	function ar(t, e, i) {
		let {
			$$slots: r = {},
			$$scope: n
		} = e, {
			href: s = ""
		} = e, {
			title: a
		} = e;
		return t.$$set = t => {
			"href" in t && i(0, s = t.href), "title" in t && i(1, a = t.title), "$$scope" in t && i(2, n = t.$$scope)
		}, [s, a, n, r]
	}
	class or extends ht {
		constructor(t) {
			super(), lt(this, t, ar, sr, a, {
				href: 0,
				title: 1
			})
		}
	}

	function lr(e) {
		return {
			c: t,
			m: t,
			p: t,
			i: t,
			o: t,
			d: t
		}
	}

	function hr(e) {
		let i, r;
		return i = new nr({
			props: {
				source: e[2],
				renderers: e[1]
			}
		}), {
			c() {
				nt(i.$$.fragment)
			},
			m(t, e) {
				st(i, t, e), r = !0
			},
			p: t,
			i(t) {
				r || (Q(i.$$.fragment, t), r = !0)
			},
			o(t) {
				J(i.$$.fragment, t), r = !1
			},
			d(t) {
				at(i, t)
			}
		}
	}

	function dr(e) {
		return {
			c: t,
			m: t,
			p: t,
			i: t,
			o: t,
			d: t
		}
	}

	function cr(t) {
		let e, i, r = {
			ctx: t,
			current: null,
			token: null,
			hasCatch: !1,
			pending: dr,
			then: hr,
			catch: lr,
			value: 2,
			blocks: [, , , ]
		};
		return tt(t[0], r), {
			c() {
				e = w("div"), r.block.c(), $(e, "class", "docs markdown-body svelte-bew0xw")
			},
			m(t, n) {
				y(t, e, n), r.block.m(e, r.anchor = null), r.mount = () => e, r.anchor = null, i = !0
			},
			p(e, [i]) {
				et(r, t = e, i)
			},
			i(t) {
				i || (Q(r.block), i = !0)
			},
			o(t) {
				for (let t = 0; t < 3; t += 1) {
					J(r.blocks[t])
				}
				i = !1
			},
			d(t) {
				t && b(e), r.block.d(), r.token = null, r = null
			}
		}
	}

	function pr(t) {
		return [fetch("README.md").then((t => t.text())), {
			link: or
		}]
	}
	class ur extends ht {
		constructor(t) {
			super(), lt(this, t, pr, cr, a, {})
		}
	}

	function fr(e) {
		let i, r, n, s, a, o;
		return i = new mt({}), n = new Pt({}), a = new ur({}), {
			c() {
				nt(i.$$.fragment), r = S(), nt(n.$$.fragment), s = S(), nt(a.$$.fragment)
			},
			m(t, e) {
				st(i, t, e), y(t, r, e), st(n, t, e), y(t, s, e), st(a, t, e), o = !0
			},
			p: t,
			i(t) {
				o || (Q(i.$$.fragment, t), Q(n.$$.fragment, t), Q(a.$$.fragment, t), o = !0)
			},
			o(t) {
				J(i.$$.fragment, t), J(n.$$.fragment, t), J(a.$$.fragment, t), o = !1
			},
			d(t) {
				at(i, t), t && b(r), at(n, t), t && b(s), at(a, t)
			}
		}
	}

	function mr(t) {
		return F("npm", fetch("https://registry.npmjs.org/scrolly-video").then((t => t.json()))), []
	}
	return new class extends ht {
		constructor(t) {
			super(), lt(this, t, mr, fr, a, {})
		}
	}({
		target: document.body
	})
}();