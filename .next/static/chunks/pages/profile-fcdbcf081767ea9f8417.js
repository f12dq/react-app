(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[277],{8172:function(e,t,n){"use strict";function r(e){for(var t=arguments.length,n=Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw Error("[Immer] minified error nr: "+e+(n.length?" "+n.map((function(e){return"'"+e+"'"})).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function i(e){return!!e&&!!e[X]}function a(e){return!!e&&(function(e){if(!e||"object"!=typeof e)return!1;var t=Object.getPrototypeOf(e);return!t||t===Object.prototype}(e)||Array.isArray(e)||!!e[H]||!!e.constructor[H]||d(e)||p(e))}function o(e,t,n){void 0===n&&(n=!1),0===l(e)?(n?Object.keys:$)(e).forEach((function(r){n&&"symbol"==typeof r||t(r,e[r],e)})):e.forEach((function(n,r){return t(r,n,e)}))}function l(e){var t=e[X];return t?t.i>3?t.i-4:t.i:Array.isArray(e)?1:d(e)?2:p(e)?3:0}function u(e,t){return 2===l(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function c(e,t){return 2===l(e)?e.get(t):e[t]}function s(e,t,n){var r=l(e);2===r?e.set(t,n):3===r?(e.delete(t),e.add(n)):e[t]=n}function f(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t}function d(e){return K&&e instanceof Map}function p(e){return B&&e instanceof Set}function v(e){return e.o||e.t}function y(e){if(Array.isArray(e))return Array.prototype.slice.call(e);var t=J(e);delete t[X];for(var n=$(t),r=0;r<n.length;r++){var i=n[r],a=t[i];!1===a.writable&&(a.writable=!0,a.configurable=!0),(a.get||a.set)&&(t[i]={configurable:!0,writable:!0,enumerable:a.enumerable,value:e[i]})}return Object.create(Object.getPrototypeOf(e),t)}function m(e,t){return void 0===t&&(t=!1),h(e)||i(e)||!a(e)||(l(e)>1&&(e.set=e.add=e.clear=e.delete=b),Object.freeze(e),t&&o(e,(function(e,t){return m(t,!0)}),!0)),e}function b(){r(2)}function h(e){return null==e||"object"!=typeof e||Object.isFrozen(e)}function g(e){var t=V[e];return t||r(18,e),t}function x(){return R}function P(e,t){t&&(g("Patches"),e.u=[],e.s=[],e.v=t)}function w(e){N(e),e.p.forEach(k),e.p=null}function N(e){e===R&&(R=e.l)}function O(e){return R={p:[],l:R,h:e,m:!0,_:0}}function k(e){var t=e[X];0===t.i||1===t.i?t.j():t.g=!0}function j(e,t){t._=t.p.length;var n=t.p[0],i=void 0!==e&&e!==n;return t.h.O||g("ES5").S(t,e,i),i?(n[X].P&&(w(t),r(4)),a(e)&&(e=S(t,e),t.l||C(t,e)),t.u&&g("Patches").M(n[X],e,t.u,t.s)):e=S(t,n,[]),w(t),t.u&&t.v(t.u,t.s),e!==U?e:void 0}function S(e,t,n){if(h(t))return t;var r=t[X];if(!r)return o(t,(function(i,a){return A(e,r,t,i,a,n)}),!0),t;if(r.A!==e)return t;if(!r.P)return C(e,r.t,!0),r.t;if(!r.I){r.I=!0,r.A._--;var i=4===r.i||5===r.i?r.o=y(r.k):r.o;o(3===r.i?new Set(i):i,(function(t,a){return A(e,r,i,t,a,n)})),C(e,i,!1),n&&e.u&&g("Patches").R(r,n,e.u,e.s)}return r.o}function A(e,t,n,r,o,l){if(i(o)){var c=S(e,o,l&&t&&3!==t.i&&!u(t.D,r)?l.concat(r):void 0);if(s(n,r,c),!i(c))return;e.m=!1}if(a(o)&&!h(o)){if(!e.h.N&&e._<1)return;S(e,o),t&&t.A.l||C(e,o)}}function C(e,t,n){void 0===n&&(n=!1),e.h.N&&e.m&&m(t,n)}function E(e,t){var n=e[X];return(n?v(n):e)[t]}function _(e,t){if(t in e)for(var n=Object.getPrototypeOf(e);n;){var r=Object.getOwnPropertyDescriptor(n,t);if(r)return r;n=Object.getPrototypeOf(n)}}function D(e){e.P||(e.P=!0,e.l&&D(e.l))}function F(e){e.o||(e.o=y(e.t))}function M(e,t,n){var r=d(t)?g("MapSet").T(t,n):p(t)?g("MapSet").F(t,n):e.O?function(e,t){var n=Array.isArray(e),r={i:n?1:0,A:t?t.A:x(),P:!1,I:!1,D:{},l:t,t:e,k:null,o:null,j:null,C:!1},i=r,a=q;n&&(i=[r],a=G);var o=Proxy.revocable(i,a),l=o.revoke,u=o.proxy;return r.k=u,r.j=l,u}(t,n):g("ES5").J(t,n);return(n?n.A:x()).p.push(r),r}function I(e){return i(e)||r(22,e),function e(t){if(!a(t))return t;var n,r=t[X],i=l(t);if(r){if(!r.P&&(r.i<4||!g("ES5").K(r)))return r.t;r.I=!0,n=Z(t,i),r.I=!1}else n=Z(t,i);return o(n,(function(t,i){r&&c(r.t,t)===i||s(n,t,e(i))})),3===i?new Set(n):n}(e)}function Z(e,t){switch(t){case 2:return new Map(e);case 3:return Array.from(e)}return y(e)}var z,R,W="undefined"!=typeof Symbol&&"symbol"==typeof Symbol("x"),K="undefined"!=typeof Map,B="undefined"!=typeof Set,T="undefined"!=typeof Proxy&&void 0!==Proxy.revocable&&"undefined"!=typeof Reflect,U=W?Symbol.for("immer-nothing"):((z={})["immer-nothing"]=!0,z),H=W?Symbol.for("immer-draftable"):"__$immer_draftable",X=W?Symbol.for("immer-state"):"__$immer_state",$=("undefined"!=typeof Symbol&&Symbol.iterator,"undefined"!=typeof Reflect&&Reflect.ownKeys?Reflect.ownKeys:void 0!==Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:Object.getOwnPropertyNames),J=Object.getOwnPropertyDescriptors||function(e){var t={};return $(e).forEach((function(n){t[n]=Object.getOwnPropertyDescriptor(e,n)})),t},V={},q={get:function(e,t){if(t===X)return e;var n=v(e);if(!u(n,t))return function(e,t,n){var r,i=_(t,n);return i?"value"in i?i.value:null===(r=i.get)||void 0===r?void 0:r.call(e.k):void 0}(e,n,t);var r=n[t];return e.I||!a(r)?r:r===E(e.t,t)?(F(e),e.o[t]=M(e.A.h,r,e)):r},has:function(e,t){return t in v(e)},ownKeys:function(e){return Reflect.ownKeys(v(e))},set:function(e,t,n){var r=_(v(e),t);if(null==r?void 0:r.set)return r.set.call(e.k,n),!0;if(!e.P){var i=E(v(e),t),a=null==i?void 0:i[X];if(a&&a.t===n)return e.o[t]=n,e.D[t]=!1,!0;if(f(n,i)&&(void 0!==n||u(e.t,t)))return!0;F(e),D(e)}return e.o[t]=n,e.D[t]=!0,!0},deleteProperty:function(e,t){return void 0!==E(e.t,t)||t in e.t?(e.D[t]=!1,F(e),D(e)):delete e.D[t],e.o&&delete e.o[t],!0},getOwnPropertyDescriptor:function(e,t){var n=v(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r?{writable:!0,configurable:1!==e.i||"length"!==t,enumerable:r.enumerable,value:n[t]}:r},defineProperty:function(){r(11)},getPrototypeOf:function(e){return Object.getPrototypeOf(e.t)},setPrototypeOf:function(){r(12)}},G={};o(q,(function(e,t){G[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}})),G.deleteProperty=function(e,t){return q.deleteProperty.call(this,e[0],t)},G.set=function(e,t,n){return q.set.call(this,e[0],t,n,e[0])};var L=new(function(){function e(e){this.O=T,this.N=!0,"boolean"==typeof(null==e?void 0:e.useProxies)&&this.setUseProxies(e.useProxies),"boolean"==typeof(null==e?void 0:e.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),this.produce=this.produce.bind(this),this.produceWithPatches=this.produceWithPatches.bind(this)}var t=e.prototype;return t.produce=function(e,t,n){if("function"==typeof e&&"function"!=typeof t){var i=t;t=e;var o=this;return function(e){var n=this;void 0===e&&(e=i);for(var r=arguments.length,a=Array(r>1?r-1:0),l=1;l<r;l++)a[l-1]=arguments[l];return o.produce(e,(function(e){var r;return(r=t).call.apply(r,[n,e].concat(a))}))}}var l;if("function"!=typeof t&&r(6),void 0!==n&&"function"!=typeof n&&r(7),a(e)){var u=O(this),c=M(this,e,void 0),s=!0;try{l=t(c),s=!1}finally{s?w(u):N(u)}return"undefined"!=typeof Promise&&l instanceof Promise?l.then((function(e){return P(u,n),j(e,u)}),(function(e){throw w(u),e})):(P(u,n),j(l,u))}if(!e||"object"!=typeof e){if((l=t(e))===U)return;return void 0===l&&(l=e),this.N&&m(l,!0),l}r(21,e)},t.produceWithPatches=function(e,t){var n,r,i=this;return"function"==typeof e?function(t){for(var n=arguments.length,r=Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];return i.produceWithPatches(t,(function(t){return e.apply(void 0,[t].concat(r))}))}:[this.produce(e,t,(function(e,t){n=e,r=t})),n,r]},t.createDraft=function(e){a(e)||r(8),i(e)&&(e=I(e));var t=O(this),n=M(this,e,void 0);return n[X].C=!0,N(t),n},t.finishDraft=function(e,t){var n=(e&&e[X]).A;return P(n,t),j(void 0,n)},t.setAutoFreeze=function(e){this.N=e},t.setUseProxies=function(e){e&&!T&&r(20),this.O=e},t.applyPatches=function(e,t){var n;for(n=t.length-1;n>=0;n--){var r=t[n];if(0===r.path.length&&"replace"===r.op){e=r.value;break}}var a=g("Patches").$;return i(e)?a(e,t):this.produce(e,(function(e){return a(e,t.slice(n+1))}))},e}()),Q=L.produce;L.produceWithPatches.bind(L),L.setAutoFreeze.bind(L),L.setUseProxies.bind(L),L.applyPatches.bind(L),L.createDraft.bind(L),L.finishDraft.bind(L);t.ZP=Q},7605:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return O}});var r=n(7757),i=n.n(r),a=n(2137),o=n(4699),l=n(7294),u=n(8070),c=n(3872),s=n(4895),f=n(5503),d=n(7651),p=n(4624),v=(n(8172),l.createElement),y=function(e){var t=e.closeProfileModal,n=e.isProfileModalOpen,r=e.physicalStats,u=(e.setPhysicalStats,(0,d.a)().user),y=l.useState(null===r||void 0===r?void 0:r.weight),m=(0,o.Z)(y,2),b=m[0],h=m[1],g=l.useState(null===r||void 0===r?void 0:r.height),x=(0,o.Z)(g,2),P=x[0],w=x[1],N=l.useState(null===r||void 0===r?void 0:r.dailyCalories),O=(0,o.Z)(N,2),k=O[0],j=O[1],S=l.useState(null===r||void 0===r?void 0:r.bodyFatPercentageodyFat),A=(0,o.Z)(S,2),C=A[0],E=A[1],_=function(){var e=(0,a.Z)(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),e.next=3,s.db.collection("profiles").doc(null===u||void 0===u?void 0:u.uid).collection("stats").add({weight:b,height:P,dailyCalories:k,bodyFatPercentage:C,timeStamp:f.Z.firestore.FieldValue.serverTimestamp(),profileId:u.uid,userName:u.displayName,userEmail:u.email});case 3:t();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r&&v(c.Modal,{isOpen:n,onClose:t},v("form",{onSubmit:_},v(c.ModalHeader,{className:"text-center sm:text-left"},"Physical Stats"),v(c.ModalBody,null,v("div",{className:"flex flex-col  text-gray-600 dark:text-gray-200 "},v("div",{className:"text-center text-base pb-2"},v("label",null,"Weight (pounds)")),v("div",{className:"flex justify-center "},v("input",{className:"py-1 text-lg rounded w-1/3 border text-black text-center\t",type:"number",name:"weight",onChange:function(e){h(e.target.value)},value:b})),v("div",{className:"text-center text-base p-2"},v("label",null,"Height (inches)")),v("div",{className:"flex justify-center "},v("input",{className:"py-1 text-lg rounded w-1/3 border text-black text-center\t",name:"height",onChange:function(e){w(e.target.value)},value:P,type:"number"})),v("div",{className:"text-center text-base p-2"},v("label",null,"Daily Calories (kCal)")),v("div",{className:"flex justify-center "},v("input",{className:"py-1 text-lg rounded w-1/3 border text-black text-center\t",name:"dailyCalories",onChange:function(e){j(e.target.value)},value:k,type:"number"})),v("div",{className:"text-center text-base p-2"},v("label",null,"Body Fat Percentage (%)")),v("div",{className:"flex justify-center "},v("input",{className:"py-1 text-lg rounded w-1/3 border text-black text-center\t",onChange:function(e){E(e.target.value)},value:C,type:"number",name:"bodyFatPercentage"})))),v("div",{className:"flex justify-end"},v("div",{"aria-label":"correct",type:"submit"},v(p.Eh,{"aria-label":"correct"})))))},m=n(1163),b=l.createElement,h=function(e){var t=e.user;return null!==(null===t||void 0===t?void 0:t.displayName)&&null!==(null===t||void 0===t?void 0:t.email)&&b("div",{className:"w-full"},b(c.Card,null,b(c.CardBody,null,b("p",{className:"mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl"},"Personal Information"),b("div",{className:"flex flex-col justify-around p-2 mx-4 mb-2"},b("div",{className:"flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3"},b("label",null,"Username"),b("p",{className:" text-gray-800 font-medium ml-3 capitalize text-right dark:text-gray-100"},null!==t&&void 0!==t&&t.displayName?null===t||void 0===t?void 0:t.displayName:"")),b("div",{className:"flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3"},b("label",null,"Email"),b("p",{className:" text-gray-800 font-medium ml-3 break-all\t text-right dark:text-gray-100"},null!==t&&void 0!==t&&t.email?null===t||void 0===t?void 0:t.email:""))))))},g=n(5553),x=n(9008),P=n(9198),w=n.n(P),N=l.createElement,O=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1],r=(0,l.useState)({weight:0,height:0,dailyCalories:0,bodyFatPercentage:0,timeStamp:"",profileId:"",userName:"",userEmail:""}),f=r[0],v=r[1],b=l.useState(new Date),P=(0,o.Z)(b,2),O=P[0],k=(P[1],(0,d.a)().user),j=(0,m.useRouter)();(0,l.useEffect)((function(){k||j.push("/")}),[k]);var S=function(){var e=(0,a.Z)(i().mark((function e(){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,s.db.collection("profiles").doc(null===k||void 0===k?void 0:k.uid).collection("stats").orderBy("timeStamp","desc").limit(1).onSnapshot((function(e){var t,n;void 0===(null===e||void 0===e||null===(t=e.docs[0])||void 0===t?void 0:t.data())?v(f):v(null===e||void 0===e||null===(n=e.docs[0])||void 0===n?void 0:n.data())}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,l.useEffect)((function(){k&&S()}),[null===f||void 0===f?void 0:f.weight,null===f||void 0===f?void 0:f.height,null===f||void 0===f?void 0:f.bodyFatPercentage,null===f||void 0===f?void 0:f.dailyCalories]),N(l.Fragment,null,N(x.default,null,N("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"})),N("section",{className:"relative min-h-screen  overflow-hidden"},N(u.Z,null),N(w(),{selected:O,name:"startDate",dateFormat:"PPPP",closeOnScroll:!0,customInput:N((function(e){var t=e.value;return N("p",{className:"z-0 select-none py-1 px-4 w-screen text-center text-white bg-indigo-700 rounded font-medium md:text-lg shadow"},t)}),null)}),N("div",{className:"pb-20 dark:bg-black transition-colors"},(null===k||void 0===k?void 0:k.displayName)&&N("div",{className:"flex justify-center mt-10 pt-5"},N("div",{className:"w-full sm:w-1/2 lg:w-1/3 shadow text-gray-600 dark:text-gray-400 "},N(h,{user:k}))),N("div",{className:"flex justify-center mt-10 pt-2"},N("div",{className:"w-full sm:w-1/2 lg:w-1/3 shadow text-gray-600 dark:text-gray-400 "},N(c.Card,null,N(c.CardBody,null,N("p",{className:"mb-4 font-semibold text-gray-600 dark:text-gray-300 text-center text-xl"},"Physical Stats"),N("div",{className:"flex flex-col justify-around p-2 mx-4 mb-2"},N("div",{className:"flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3"},N("label",null,"Weight"),N("p",{className:" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100"},null===f||void 0===f?void 0:f.weight," pounds")),N("div",{className:"flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3"},N("label",null,"Height"),N("p",{className:" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100"},null!==f&&void 0!==f&&f.height?null===f||void 0===f?void 0:f.height:"0"," ","inches")),N("div",{className:"flex justify-between p-2 transition bg-gray-50 dark:bg-black rounded mb-3"},N("label",null,"Daily Calories"),N("p",{className:" text-gray-800 font-medium ml-3 uppercase text-right dark:text-gray-100"},null!==f&&void 0!==f&&f.dailyCalories?null===f||void 0===f?void 0:f.dailyCalories:"0"," ","calories"))),N("div",{onClick:function(){n(!0)},className:"flex justify-end"},N(p.I8,null)))))),N(y,{isProfileModalOpen:t,closeProfileModal:function(){n(!1)},physicalStats:f,setPhysicalStats:v})),N(g.Z,null)))}},3962:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/profile",function(){return n(7605)}])}},function(e){e.O(0,[774,868,935,888,179],(function(){return t=3962,e(e.s=t);var t}));var t=e.O();_N_E=t}]);