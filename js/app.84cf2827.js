(function(e){function t(t){for(var o,i,s=t[0],u=t[1],l=t[2],c=0,h=[];c<s.length;c++)i=s[c],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&h.push(r[i][0]),r[i]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(e[o]=u[o]);p&&p(t);while(h.length)h.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],o=!0,i=1;i<n.length;i++){var u=n[i];0!==r[u]&&(o=!1)}o&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var o={},r={3:0},a=[];function i(e){return s.p+"js/"+({}[e]||e)+"."+{1:"a1608dc3",2:"b72bab30",4:"d3eeaedd",5:"3bf12045",6:"dfb170d0",7:"5aeb2282"}[e]+".js"}function s(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var l=new Error;a=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+o+": "+a+")",l.name="ChunkLoadError",l.type=o,l.request=a,n[1](l)}r[e]=void 0}};var c=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=o,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)s.d(n,o,function(t){return e[t]}.bind(null,o));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var c=0;c<u.length;c++)t(u[c]);var p=l;a.push([0,0]),n()})({0:function(e,t,n){e.exports=n("2f39")},"2f39":function(e,t,n){"use strict";n.r(t);var o={};n.r(o),n.d(o,"updatetoken",(function(){return w}));n("e6cf"),n("5319"),n("7d6e"),n("e54f"),n("a4b7"),n("985d"),n("31cd");var r=n("2b0e"),a=n("1f91"),i=n("42d2"),s=n("b05d"),u=n("2a19"),l=n("18d6");r["a"].use(s["a"],{config:{},lang:a["a"],iconSet:i["a"],plugins:{Notify:u["a"],LocalStorage:l["a"]}});var c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("router-view")],1)},p=[],h={name:"App"},f=h,d=n("2877"),m=Object(d["a"])(f,c,p,!1,null,null,null),b=m.exports,v=n("2f62"),y=function(){return{token:""}},g=n("43a3");const w=(e,t)=>{e.token=t};var P=n("e048"),O={namespaced:!0,state:y,getters:g,mutations:o,actions:P};r["a"].use(v["a"]);var j=function(){const e=new v["a"].Store({modules:{app:O},strict:!1});return e},k=n("8c4f");const x=[{path:"/",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}]},{path:"/Users",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(7)]).then(n.bind(null,"051b"))}],meta:{requiresAuth:!0}},{path:"/Permissions",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(6)]).then(n.bind(null,"dd53"))}],meta:{requiresAuth:!0}},{path:"/Brokers",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(4)]).then(n.bind(null,"214c"))}],meta:{requiresAuth:!0}},{path:"/Properties",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}],meta:{requiresAuth:!0}},{path:"/Units",component:()=>Promise.all([n.e(0),n.e(1)]).then(n.bind(null,"713b")),children:[{path:"",component:()=>Promise.all([n.e(0),n.e(2)]).then(n.bind(null,"8b24"))}],meta:{requiresAuth:!0}},{path:"*",component:()=>Promise.all([n.e(0),n.e(5)]).then(n.bind(null,"e51e"))}];var A=x;r["a"].use(k["a"]);var S=function({store:e,ssrContext:t}){const n=new k["a"]({scrollBehavior:()=>({x:0,y:0}),routes:A,mode:"hash",base:""});return n.beforeEach(((t,n,o)=>{t.matched.some((e=>e.meta.requiresAuth))&&(null==e.state.app.token||""===e.state.app.token)?(u["a"].create({color:"negative",position:"top",message:"Efetue o login para acessar esse menu!",icon:"report_problem"}),o({path:"/",params:{nextUrl:t.fullPath}})):o()})),n},q=async function(){const e="function"===typeof j?await j({Vue:r["a"]}):j,t="function"===typeof S?await S({Vue:r["a"],store:e}):S;e.$router=t;const n={router:t,store:e,render:e=>e(b),el:"#q-app"};return{app:n,store:e,router:t}},_=n("bc3a"),C=n.n(_);r["a"].prototype.$axios=C.a;const E="https://cfcsb.herokuapp.com/";C.a.create({baseURL:E});u["a"].setDefaults({position:"top-right",timeout:2500,textColor:"white",actions:[{icon:"close",color:"white"}]});const J="https://cfcsb.herokuapp.com/",N={async postAuth(e,t){const n=JSON.stringify(JSON.stringify(t)),o={method:"post",url:J+e,headers:{"Content-Type":"application/json",Authorization:this.store.state.app.token},data:n};return await C()(o)},async getAuth(e,t){try{var n="";return t&&void 0!==t&&null!=t&&(n="?query="+JSON.stringify(JSON.stringify(t))),await C.a.get(J+e+n,{headers:{Authorization:"Bearer "+this.store.state.app.token}})}catch(o){console.error(o)}}};var T=async({Vue:e,store:t})=>{N&&(N.Vue=e,N.store=t),e.prototype.$api=N};const V="";async function L(){const{app:e,store:t,router:n}=await q();let o=!1;const a=e=>{o=!0;const t=Object(e)===e?n.resolve(e).route.fullPath:e;window.location.href=t},i=window.location.href.replace(window.location.origin,""),s=[void 0,void 0,T];for(let l=0;!1===o&&l<s.length;l++)if("function"===typeof s[l])try{await s[l]({app:e,router:n,store:t,Vue:r["a"],ssrContext:null,redirect:a,urlPath:i,publicPath:V})}catch(u){return u&&u.url?void(window.location.href=u.url):void console.error("[Quasar] boot error:",u)}!0!==o&&new r["a"](e)}L()},"31cd":function(e,t,n){},"43a3":function(e,t){},e048:function(e,t){}});