webpackJsonp([3],{"1kS7":function(t,n){n.f=Object.getOwnPropertySymbols},COBD:function(t,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=o("Dd8w"),c=o.n(e),r=o("+WBB"),i=(o("IcnI"),o("NYxO")),a=o("Du/2"),s={name:"cart",components:{storehead:r.a},data:function(){return{}},computed:c()({},Object(i.b)(["totalPrice","list"])),methods:c()({},Object(i.c)([a.d,a.b,a.c]),{changeCount:function(t){var n=t.id,o=t.count;this[a.b]({id:n,count:o})},remove:function(t){this[a.d](t)},clear:function(){this[a.c]()}}),created:function(){},filters:{toFixed:function(t,n){return"￥"+t.toFixed(n)}}},u={render:function(){var t=this,n=t.$createElement,o=t._self._c||n;return o("div",{staticClass:"box"},[o("storehead",{attrs:{flag:!0}},[t._v("购物车")]),t._v(" "),o("div",{staticClass:"content"},[o("ul",t._l(t.list,function(n,e){return o("li",{key:e},[o("img",{attrs:{src:n.bookCover}}),t._v(" "),o("div",{staticClass:"book-data"},[o("h4",[t._v(t._s(n.bookName))]),t._v(" "),o("span",[t._v(t._s(n.bookInfo))]),o("br"),t._v(" "),o("strong",[t._v(t._s(t._f("toFixed")(n.bookPrice,2)))]),t._v(" "),o("p",[o("b",{on:{click:function(o){t.changeCount({id:n.bookId,count:-1})}}},[t._v("-")]),t._v(" "),o("input",{directives:[{name:"model",rawName:"v-model",value:n.count,expression:"book.count"}],attrs:{type:"number",min:"1"},domProps:{value:n.count},on:{input:function(o){o.target.composing||t.$set(n,"count",o.target.value)}}}),t._v(" "),o("b",{on:{click:function(o){t.changeCount({id:n.bookId,count:1})}}},[t._v("+")])]),t._v(" "),o("i",{on:{click:function(o){t.remove(n.bookId)}}},[t._v("×")])])])})),t._v(" "),o("div",{staticClass:"total-prices"},[o("h4",[t._v("合计:\n        "),o("strong",[t._v(t._s(t._f("toFixed")(t.totalPrice,2)))]),t._v(" "),o("button",{on:{click:t.clear}},[t._v("清空")])])])])],1)},staticRenderFns:[]};var l=o("VU/8")(s,u,!1,function(t){o("OvJX")},"data-v-5e5631b1",null);n.default=l.exports},Dd8w:function(t,n,o){"use strict";n.__esModule=!0;var e,c=o("woOf"),r=(e=c)&&e.__esModule?e:{default:e};n.default=r.default||function(t){for(var n=1;n<arguments.length;n++){var o=arguments[n];for(var e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e])}return t}},NpIQ:function(t,n){n.f={}.propertyIsEnumerable},OvJX:function(t,n){},R4wc:function(t,n,o){var e=o("kM2E");e(e.S+e.F,"Object",{assign:o("To3L")})},To3L:function(t,n,o){"use strict";var e=o("lktj"),c=o("1kS7"),r=o("NpIQ"),i=o("sB3e"),a=o("MU5D"),s=Object.assign;t.exports=!s||o("S82l")(function(){var t={},n={},o=Symbol(),e="abcdefghijklmnopqrst";return t[o]=7,e.split("").forEach(function(t){n[t]=t}),7!=s({},t)[o]||Object.keys(s({},n)).join("")!=e})?function(t,n){for(var o=i(t),s=arguments.length,u=1,l=c.f,f=r.f;s>u;)for(var v,d=a(arguments[u++]),_=l?e(d).concat(l(d)):e(d),b=_.length,p=0;b>p;)f.call(d,v=_[p++])&&(o[v]=d[v]);return o}:s},V3tA:function(t,n,o){o("R4wc"),t.exports=o("FeBl").Object.assign},woOf:function(t,n,o){t.exports={default:o("V3tA"),__esModule:!0}}});
//# sourceMappingURL=3.a627b298095688123fcf.js.map