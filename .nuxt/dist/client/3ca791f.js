(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{192:function(t,e,r){"use strict";r.d(e,"f",(function(){return c})),r.d(e,"h",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"d",(function(){return f})),r.d(e,"e",(function(){return v})),r.d(e,"c",(function(){return d})),r.d(e,"g",(function(){return m})),r.d(e,"a",(function(){return _}));var n=r(59),c=function(t){return Object(n.b)({url:"/api/articles",method:"Get",params:t})},o=function(t){return Object(n.b)({url:"/api/articles/feed",method:"Get",params:t})},l=function(t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/favorite")})},f=function(t){return Object(n.b)({method:"DELETE",url:"/api/articles/".concat(t,"/favorite")})},v=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t)})},d=function(data){return Object(n.b)({method:"POST",url:"/api/articles",data:data})},m=function(t){return Object(n.b)({method:"GET",url:"/api/articles/".concat(t,"/comments")})},_=function(data,t){return Object(n.b)({method:"POST",url:"/api/articles/".concat(t,"/comments"),data:data})}},204:function(t,e,r){"use strict";var n=r(4),c=r(20),o=r(25),l=r(122),f=r(61),v=r(10),d=r(44).f,m=r(62).f,_=r(9).f,h=r(205).trim,O=n.Number,C=O,y=O.prototype,x="Number"==o(r(79)(y)),j="trim"in String.prototype,k=function(t){var e=f(t,!1);if("string"==typeof e&&e.length>2){var r,n,c,o=(e=j?e.trim():h(e,3)).charCodeAt(0);if(43===o||45===o){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===o){switch(e.charCodeAt(1)){case 66:case 98:n=2,c=49;break;case 79:case 111:n=8,c=55;break;default:return+e}for(var code,l=e.slice(2),i=0,v=l.length;i<v;i++)if((code=l.charCodeAt(i))<48||code>c)return NaN;return parseInt(l,n)}}return+e};if(!O(" 0o1")||!O("0b1")||O("+0x1")){O=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof O&&(x?v((function(){y.valueOf.call(r)})):"Number"!=o(r))?l(new C(k(e)),r,O):k(e)};for(var E,N=r(7)?d(C):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),w=0;N.length>w;w++)c(C,E=N[w])&&!c(O,E)&&_(O,E,m(C,E));O.prototype=y,y.constructor=O,r(12)(n,"Number",O)}},205:function(t,e,r){var n=r(6),c=r(26),o=r(10),l=r(206),f="["+l+"]",v=RegExp("^"+f+f+"*"),d=RegExp(f+f+"*$"),m=function(t,e,r){var c={},f=o((function(){return!!l[t]()||"​"!="​"[t]()})),v=c[t]=f?e(_):l[t];r&&(c[r]=v),n(n.P+n.F*f,"String",c)},_=m.trim=function(t,e){return t=String(c(t)),1&e&&(t=t.replace(v,"")),2&e&&(t=t.replace(d,"")),t};t.exports=m},206:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},270:function(t,e,r){"use strict";r.r(e);r(77),r(31),r(60);var n=r(56),c=(r(32),r(13),r(45),r(22)),o=(r(204),r(30),r(3)),l=r(192),f=r(59),v=r(42);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _={name:"Home",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n,o,v,d,m,_,h,O,C,y,x;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.query,n=t.store,o=Number(r.page||1),v=r.tag,d=r.tab,console.log(v,d),m=n.state.user&&"your_feed"===d?l.h:l.f,_=m({limit:20,offset:20*(o-1),tag:v}),j=void 0,h=Object(f.b)({url:"/api/tags",method:"Get",params:j}),e.next=9,Promise.all([_,h]);case 9:return O=e.sent,C=Object(c.a)(O,2),y=C[0].data,x=C[1].data,e.abrupt("return",{articles:y.articles.map((function(article){return article.favoriteDisabled=!1,article})),articlesCount:y.articlesCount,limit:20,page:o,tags:x.tags.filter((function(t){return/^[a-z0-9A-Z]+$/.test(t)})),tag:v,tab:d||"global_feed"});case 14:case"end":return e.stop()}var j}),e)})))()},watchQuery:["page","tag","tab"],computed:m(m({},Object(v.b)(["user"])),{},{totalPage:function(){return Math.ceil(this.articlesCount/this.limit)}}),methods:{onFavorite:function(article){return Object(o.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(article.favoriteDisabled=!0,!article.favorited){t.next=8;break}return t.next=4,Object(l.d)(article.slug);case 4:article.favorited=!1,article.favoritesCount+=-1,t.next=12;break;case 8:return t.next=10,Object(l.b)(article.slug);case 10:article.favorited=!0,article.favoritesCount+=1;case 12:article.favoriteDisabled=!1;case 13:case"end":return t.stop()}}),t)})))()}}},h=r(23),component=Object(h.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home-page"},[t._m(0),t._v(" "),r("div",{staticClass:"container page"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-md-9"},[r("div",{staticClass:"feed-toggle"},[r("ul",{staticClass:"nav nav-pills outline-active"},[t.user?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"your_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"your_feed"}}}},[t._v("Your Feed")])],1):t._e(),t._v(" "),r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"global_feed"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"global_feed"}}}},[t._v("Global Feed")])],1),t._v(" "),t.tag?r("li",{staticClass:"nav-item"},[r("nuxt-link",{staticClass:"nav-link",class:{active:"tab"===t.tab},attrs:{exact:"",to:{name:"home",query:{tab:"tab",tag:t.tag}}}},[t._v("#"+t._s(t.tag))])],1):t._e()])]),t._v(" "),t._l(t.articles,(function(article){return r("div",{key:article.slug,staticClass:"article-preview"},[r("div",{staticClass:"article-meta"},[r("nuxt-link",{attrs:{exact:"",to:{name:"profile",params:{username:article.author.username}}}},[r("img",{attrs:{src:article.author.image}})]),t._v(" "),r("div",{staticClass:"info"},[r("nuxt-link",{attrs:{exact:"",to:{name:"profile",params:{username:article.author.username}}}},[t._v("\n                "+t._s(article.author.username)+"\n              ")]),t._v(" "),r("span",{staticClass:"date"},[t._v(t._s(t._f("date")(article.createdAt,"MMM DD, YYYY")))])],1),t._v(" "),r("button",{staticClass:"btn btn-outline-primary btn-sm pull-xs-right",class:{active:article.favorited},attrs:{disabled:article.favoriteDisabled},on:{click:function(e){return t.onFavorite(article)}}},[r("i",{staticClass:"ion-heart"}),t._v(" "+t._s(article.favoritesCount)+"\n            ")])],1),t._v(" "),r("nuxt-link",{attrs:{exact:"",to:{name:"article",params:{slug:article.slug}}}},[r("h1",[t._v(t._s(article.title))]),t._v(" "),r("p",[t._v(t._s(article.description))]),t._v(" "),r("span",[t._v("Read more...")])])],1)})),t._v(" "),r("ul",{staticClass:"pagination"},t._l(t.totalPage,(function(e){return r("li",{key:e,staticClass:"page-item",class:{active:e===t.page}},[r("nuxt-link",{staticClass:"page-link",attrs:{exact:"",to:{name:"home",query:{page:e,tag:t.tag,tab:t.tab}}}},[t._v(t._s(e))])],1)})),0)],2),t._v(" "),r("div",{staticClass:"col-md-3"},[r("div",{staticClass:"sidebar"},[r("p",[t._v("Popular Tags")]),t._v(" "),r("div",{staticClass:"tag-list"},t._l(t.tags,(function(e){return r("nuxt-link",{key:e,staticClass:"tag-pill tag-default",attrs:{to:{name:"home",query:{tag:e,tab:"tab"}}}},[t._v(t._s(e))])})),1)])])])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"banner"},[e("div",{staticClass:"container"},[e("h1",{staticClass:"logo-font"},[this._v("conduit")]),this._v(" "),e("p",[this._v("A place to share your knowledge.")])])])}],!1,null,null,null);e.default=component.exports}}]);