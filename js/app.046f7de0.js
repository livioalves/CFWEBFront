(function(e){function t(t){for(var r,i,u=t[0],s=t[1],c=t[2],l=0,f=[];l<u.length;l++)i=u[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&f.push(o[i][0]),o[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={2:0},a=[];function i(e){return u.p+"js/"+({}[e]||e)+"."+{1:"61c04679",3:"ac2034ce",4:"57d0243e",5:"6721f3d7",6:"8275e657"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=i(e);var c=new Error;a=function(t){s.onerror=s.onload=null,clearTimeout(l);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;c.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",c.name="ChunkLoadError",c.type=r,c.request=a,n[1](c)}o[e]=void 0}};var l=setTimeout((function(){a({type:"timeout",target:s})}),12e4);s.onerror=s.onload=a,document.head.appendChild(s)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="",u.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var p=c;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var r={};n.r(r),n.d(r,"updatetoken",(function(){return g}));n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("985d"),n("31cd");var o=n("2b0e"),a=n("1f91"),i=n("42d2"),u=n("b05d"),s=n("2a19"),c=n("18d6");o["a"].use(u["a"],{config:{},lang:a["a"],iconSet:i["a"],plugins:{Notify:s["a"],LocalStorage:c["a"]}});var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},p=[],f={name:"App"},h=f,d=n("2877"),m=Object(d["a"])(h,l,p,!1,null,null,null),b=m.exports,v=n("2f62"),y=function(){return{token:""}},w=n("43a3");const g=(e,t)=>{e.token=t};var P=n("e048"),O={namespaced:!0,state:y,getters:w,mutations:r,actions:P};o["a"].use(v["a"]);var j=function(){const e=new v["a"].Store({modules:{app:O},strict:!1});return e},k=n("8c4f");const x=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"8b24"))}]},{path:"/Users",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"051b"))}],meta:{requiresAuth:!0}},{path:"/Permissoes",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"4f94"))}],meta:{requiresAuth:!0}},{path:"*",component:()=>Promise.all([n.e(0),n.e(3)]).then(n.bind(null,"e51e"))}];var S=x;o["a"].use(k["a"]);var A=function({store:e,ssrContext:t}){const n=new k["a"]({scrollBehavior:()=>({x:0,y:0}),routes:S,mode:"hash",base:""});return n.beforeEach(((t,n,r)=>{t.matched.some((e=>e.meta.requiresAuth))&&(null==e.state.app.token||""===e.state.app.token)?r({path:"/",params:{nextUrl:t.fullPath}}):r()})),n},_=async function(){const e="function"===typeof j?await j({Vue:o["a"]}):j,t="function"===typeof A?await A({Vue:o["a"],store:e}):A;e.$router=t;const n={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:n,store:e,router:t}},q=n("bc3a"),C=n.n(q);o["a"].prototype.$axios=C.a;const J="https://cfcsb.herokuapp.com/";C.a.create({baseURL:J});s["a"].setDefaults({position:"top-right",timeout:2500,textColor:"white",actions:[{icon:"close",color:"white"}]});const E="https://cfcsb.herokuapp.com/",N={async postAuth(e,t){const n=JSON.stringify(JSON.stringify(t)),r={method:"post",url:E+e,headers:{"Content-Type":"application/json",Authorization:this.store.state.app.token},data:n};return await C()(r)},async getAuth(e,t){try{var n="";return t&&void 0!==t&&null!=t&&(n="?query="+JSON.stringify(JSON.stringify(t))),await C.a.get(E+e+n,{headers:{Authorization:"Bearer "+this.store.state.app.token}})}catch(r){console.error(r)}}};var T=async({Vue:e,store:t})=>{N&&(N.Vue=e,N.store=t),e.prototype.$api=N};const V="";async function L(){const{app:e,store:t,router:n}=await _();let r=!1;const a=e=>{r=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),u=[void 0,void 0,T];for(let c=0;!1===r&&c<u.length;c++)if("function"===typeof u[c])try{await u[c]({app:e,router:n,store:t,Vue:o["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:V})}catch(s){return s&&s.url?void(window.location.href=s.url):void console.error("[Quasar] boot error:",s)}!0!==r&&new o["a"](e)}L()},"31cd":function(e,t,n){},"43a3":function(e,t){},e048:function(e,t){}});