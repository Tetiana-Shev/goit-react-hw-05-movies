"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var r=n(861),a=n(439),s=n(757),c=n.n(s),i=n(791),o=n(87),u=n(689),l=n(675),p="MovieCard_card__G6MP-",d="MovieCard_info__QTHMi",v="MovieCard_title__mQEBM",f="MovieCard_overview__cHLpI",h="MovieCard_genres__EDNHv",m="MovieCard_text__NNMdE",_=n(184),x=function(e){var t=e.movie,n=t.poster_path,r=t.original_title,a=t.vote_average,s=t.overview,c=t.genres;return(0,_.jsxs)("div",{className:p,children:[(0,_.jsx)("img",{src:n?"https://image.tmdb.org/t/p/w300".concat(n):"https://eshop.spartan.gr/images/virtuemart/product/noimage.jpg",alt:"movie poster",width:300}),(0,_.jsxs)("div",{className:d,children:[(0,_.jsx)("h3",{className:v,children:r}),(0,_.jsxs)("p",{className:m,children:["User score: ",Math.round(10*a),"%"]}),(0,_.jsx)("h4",{className:f,children:"Overview"}),(0,_.jsx)("p",{className:m,children:s}),(0,_.jsx)("h5",{className:h,children:"Genres"}),(0,_.jsx)("p",{className:m,children:c.map((function(e){return e.name})).join(" ")})]})]})},g="MovieDetails_details__TGlfg",j="MovieDetails_button__uXZxd",w="MovieDetails_link__U+v+7",k=n(474),y=function(){var e,t,n,s,p,d,v=(0,i.useState)(null),f=(0,a.Z)(v,2),h=f[0],m=f[1],y=(0,i.useState)(!1),b=(0,a.Z)(y,2),N=b[0],Z=b[1],M=(0,u.UO)().id,C=(0,u.TH)(),U=(0,u.s0)(),S=null!==(e=null===(t=C.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/";return(0,i.useEffect)((function(){var e=function(){var e=(0,r.Z)(c().mark((function e(){return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Z(!0),e.prev=1,e.t0=m,e.next=5,(0,l.s_)(M);case 5:e.t1=e.sent,(0,e.t0)(e.t1),e.next=12;break;case 9:e.prev=9,e.t2=e.catch(1),console.log(e.t2);case 12:return e.prev=12,Z(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[1,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[M]),(0,_.jsxs)("section",{className:g,children:[(0,_.jsx)("button",{className:j,onClick:function(){return U(S)},children:"Go back"}),N&&(0,_.jsx)(k.Z,{}),h&&(0,_.jsxs)("div",{children:[(0,_.jsx)(x,{movie:h}),(0,_.jsxs)("div",{children:[(0,_.jsx)("h2",{children:" Additional information"}),(0,_.jsx)("div",{children:(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:(0,_.jsx)(o.rU,{className:w,to:"cast",state:{from:null!==(n=null===(s=C.state)||void 0===s?void 0:s.from)&&void 0!==n?n:"/"},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(o.rU,{className:w,to:"reviews",state:{from:null!==(p=null===(d=C.state)||void 0===d?void 0:d.from)&&void 0!==p?p:"/"},children:"Reviews"})})]})}),(0,_.jsx)(i.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(u.j3,{})})]})]})]})}},675:function(e,t,n){n.d(t,{Hg:function(){return u},Tn:function(){return m},s_:function(){return d},uP:function(){return l},v:function(){return f}});var r=n(861),a=n(757),s=n.n(a),c=n(263),i="https://api.themoviedb.org/3/",o="13e2a29aed9f0226aba2a38fa096c989",u=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o,"&language=en-US"));case 2:return t=e.sent,n=t.data,e.abrupt("return",n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();function l(e){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/search/movie?api_key=").concat(o,"&query=").concat(t,"&include_adult=false&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.results);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function d(e){return v.apply(this,arguments)}function v(){return(v=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"movie/").concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function f(e){return h.apply(this,arguments)}function h(){return(h=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.cast);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e){return _.apply(this,arguments)}function _(){return(_=(0,r.Z)(s().mark((function e(t){var n,r;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("".concat(i,"/movie/").concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return n=e.sent,r=n.data,e.abrupt("return",r.result);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=597.b16604cb.chunk.js.map