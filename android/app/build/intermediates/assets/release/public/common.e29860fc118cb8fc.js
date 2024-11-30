"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{4556:(M,w,l)=>{l.d(w,{c:()=>c});var v=l(4261),u=l(1086),d=l(8607);const c=(i,a)=>{let n,r;const o=(s,_,h)=>{if(typeof document>"u")return;const E=document.elementFromPoint(s,_);E&&a(E)&&!E.disabled?E!==n&&(t(),e(E,h)):t()},e=(s,_)=>{n=s,r||(r=n);const h=n;(0,v.w)(()=>h.classList.add("ion-activated")),_()},t=(s=!1)=>{if(!n)return;const _=n;(0,v.w)(()=>_.classList.remove("ion-activated")),s&&r!==n&&n.click(),n=void 0};return(0,d.createGesture)({el:i,gestureName:"buttonActiveDrag",threshold:0,onStart:s=>o(s.currentX,s.currentY,u.a),onMove:s=>o(s.currentX,s.currentY,u.b),onEnd:()=>{t(!0),(0,u.h)(),r=void 0}})}},8438:(M,w,l)=>{l.d(w,{g:()=>u});var v=l(8476);const u=()=>{if(void 0!==v.w)return v.w.Capacitor}},5572:(M,w,l)=>{l.d(w,{c:()=>v,i:()=>u});const v=(d,c,i)=>"function"==typeof i?i(d,c):"string"==typeof i?d[i]===c[i]:Array.isArray(c)?c.includes(d):d===c,u=(d,c,i)=>void 0!==d&&(Array.isArray(d)?d.some(a=>v(a,c,i)):v(d,c,i))},3351:(M,w,l)=>{l.d(w,{g:()=>v});const v=(a,n,r,o,e)=>d(a[1],n[1],r[1],o[1],e).map(t=>u(a[0],n[0],r[0],o[0],t)),u=(a,n,r,o,e)=>e*(3*n*Math.pow(e-1,2)+e*(-3*r*e+3*r+o*e))-a*Math.pow(e-1,3),d=(a,n,r,o,e)=>i((o-=e)-3*(r-=e)+3*(n-=e)-(a-=e),3*r-6*n+3*a,3*n-3*a,a).filter(s=>s>=0&&s<=1),i=(a,n,r,o)=>{if(0===a)return((a,n,r)=>{const o=n*n-4*a*r;return o<0?[]:[(-n+Math.sqrt(o))/(2*a),(-n-Math.sqrt(o))/(2*a)]})(n,r,o);const e=(3*(r/=a)-(n/=a)*n)/3,t=(2*n*n*n-9*n*r+27*(o/=a))/27;if(0===e)return[Math.pow(-t,1/3)];if(0===t)return[Math.sqrt(-e),-Math.sqrt(-e)];const s=Math.pow(t/2,2)+Math.pow(e/3,3);if(0===s)return[Math.pow(t/2,.5)-n/3];if(s>0)return[Math.pow(-t/2+Math.sqrt(s),1/3)-Math.pow(t/2+Math.sqrt(s),1/3)-n/3];const _=Math.sqrt(Math.pow(-e/3,3)),h=Math.acos(-t/(2*Math.sqrt(Math.pow(-e/3,3)))),E=2*Math.pow(_,1/3);return[E*Math.cos(h/3)-n/3,E*Math.cos((h+2*Math.PI)/3)-n/3,E*Math.cos((h+4*Math.PI)/3)-n/3]}},5083:(M,w,l)=>{l.d(w,{i:()=>v});const v=u=>u&&""!==u.dir?"rtl"===u.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},3126:(M,w,l)=>{l.r(w),l.d(w,{startFocusVisible:()=>c});const v="ion-focused",d=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],c=i=>{let a=[],n=!0;const r=i?i.shadowRoot:document,o=i||document.body,e=y=>{a.forEach(f=>f.classList.remove(v)),y.forEach(f=>f.classList.add(v)),a=y},t=()=>{n=!1,e([])},s=y=>{n=d.includes(y.key),n||e([])},_=y=>{if(n&&void 0!==y.composedPath){const f=y.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));e(f)}},h=()=>{r.activeElement===o&&e([])};return r.addEventListener("keydown",s),r.addEventListener("focusin",_),r.addEventListener("focusout",h),r.addEventListener("touchstart",t,{passive:!0}),r.addEventListener("mousedown",t),{destroy:()=>{r.removeEventListener("keydown",s),r.removeEventListener("focusin",_),r.removeEventListener("focusout",h),r.removeEventListener("touchstart",t),r.removeEventListener("mousedown",t)},setFocus:e}}},1086:(M,w,l)=>{l.d(w,{I:()=>u,a:()=>n,b:()=>r,c:()=>a,d:()=>e,h:()=>o});var v=l(8438),u=function(t){return t.Heavy="HEAVY",t.Medium="MEDIUM",t.Light="LIGHT",t}(u||{});const c={getEngine(){const t=(0,v.g)();if(null!=t&&t.isPluginAvailable("Haptics"))return t.Plugins.Haptics},available(){if(!this.getEngine())return!1;const s=(0,v.g)();return"web"!==(null==s?void 0:s.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(t){const s=this.getEngine();s&&s.impact({style:t.style})},notification(t){const s=this.getEngine();s&&s.notification({type:t.type})},selection(){this.impact({style:u.Light})},selectionStart(){const t=this.getEngine();t&&t.selectionStart()},selectionChanged(){const t=this.getEngine();t&&t.selectionChanged()},selectionEnd(){const t=this.getEngine();t&&t.selectionEnd()}},i=()=>c.available(),a=()=>{i()&&c.selection()},n=()=>{i()&&c.selectionStart()},r=()=>{i()&&c.selectionChanged()},o=()=>{i()&&c.selectionEnd()},e=t=>{i()&&c.impact(t)}},909:(M,w,l)=>{l.d(w,{I:()=>a,a:()=>e,b:()=>i,c:()=>_,d:()=>E,f:()=>t,g:()=>o,i:()=>r,p:()=>h,r:()=>y,s:()=>s});var v=l(467),u=l(4920),d=l(4929);const i="ion-content",a=".ion-content-scroll-host",n=`${i}, ${a}`,r=f=>"ION-CONTENT"===f.tagName,o=function(){var f=(0,v.A)(function*(m){return r(m)?(yield new Promise(p=>(0,u.c)(m,p)),m.getScrollElement()):m});return function(p){return f.apply(this,arguments)}}(),e=f=>f.querySelector(a)||f.querySelector(n),t=f=>f.closest(n),s=(f,m)=>r(f)?f.scrollToTop(m):Promise.resolve(f.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),_=(f,m,p,A)=>r(f)?f.scrollByPoint(m,p,A):Promise.resolve(f.scrollBy({top:p,left:m,behavior:A>0?"smooth":"auto"})),h=f=>(0,d.b)(f,i),E=f=>{if(r(f)){const p=f.scrollY;return f.scrollY=!1,p}return f.style.setProperty("overflow","hidden"),!0},y=(f,m)=>{r(f)?f.scrollY=m:f.style.removeProperty("overflow")}},3992:(M,w,l)=>{l.d(w,{a:()=>v,b:()=>_,c:()=>n,d:()=>h,e:()=>C,f:()=>a,g:()=>E,h:()=>d,i:()=>u,j:()=>g,k:()=>D,l:()=>r,m:()=>t,n:()=>y,o:()=>e,p:()=>i,q:()=>c,r:()=>O,s:()=>S,t:()=>s,u:()=>p,v:()=>A,w:()=>o,x:()=>f,y:()=>m});const v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",a="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",E="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",A="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",S="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",C="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},243:(M,w,l)=>{l.d(w,{c:()=>c,g:()=>i});var v=l(8476),u=l(4920),d=l(4929);const c=(n,r,o)=>{let e,t;if(void 0!==v.w&&"MutationObserver"in v.w){const E=Array.isArray(r)?r:[r];e=new MutationObserver(y=>{for(const f of y)for(const m of f.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&E.includes(m.slot))return o(),void(0,u.r)(()=>s(m))}),e.observe(n,{childList:!0,subtree:!0})}const s=E=>{var y;t&&(t.disconnect(),t=void 0),t=new MutationObserver(f=>{o();for(const m of f)for(const p of m.removedNodes)p.nodeType===Node.ELEMENT_NODE&&p.slot===r&&h()}),t.observe(null!==(y=E.parentElement)&&void 0!==y?y:E,{subtree:!0,childList:!0})},h=()=>{t&&(t.disconnect(),t=void 0)};return{destroy:()=>{e&&(e.disconnect(),e=void 0),h()}}},i=(n,r,o)=>{const e=null==n?0:n.toString().length,t=a(e,r);if(void 0===o)return t;try{return o(e,r)}catch(s){return(0,d.a)("Exception in provided `counterFormatter`.",s),t}},a=(n,r)=>`${n} / ${r}`},1622:(M,w,l)=>{l.r(w),l.d(w,{KEYBOARD_DID_CLOSE:()=>i,KEYBOARD_DID_OPEN:()=>c,copyVisualViewport:()=>O,keyboardDidClose:()=>f,keyboardDidOpen:()=>E,keyboardDidResize:()=>y,resetKeyboardAssist:()=>e,setKeyboardClose:()=>h,setKeyboardOpen:()=>_,startKeyboardAssist:()=>t,trackViewportChanges:()=>A});var v=l(4379);l(8438),l(8476);const c="ionKeyboardDidShow",i="ionKeyboardDidHide";let n={},r={},o=!1;const e=()=>{n={},r={},o=!1},t=g=>{if(v.K.getEngine())s(g);else{if(!g.visualViewport)return;r=O(g.visualViewport),g.visualViewport.onresize=()=>{A(g),E()||y(g)?_(g):f(g)&&h(g)}}},s=g=>{g.addEventListener("keyboardDidShow",D=>_(g,D)),g.addEventListener("keyboardDidHide",()=>h(g))},_=(g,D)=>{m(g,D),o=!0},h=g=>{p(g),o=!1},E=()=>!o&&n.width===r.width&&(n.height-r.height)*r.scale>150,y=g=>o&&!f(g),f=g=>o&&r.height===g.innerHeight,m=(g,D)=>{const C=new CustomEvent(c,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-r.height}});g.dispatchEvent(C)},p=g=>{const D=new CustomEvent(i);g.dispatchEvent(D)},A=g=>{n=Object.assign({},r),r=O(g.visualViewport)},O=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},4379:(M,w,l)=>{l.d(w,{K:()=>c,a:()=>d});var v=l(8438),u=function(i){return i.Unimplemented="UNIMPLEMENTED",i.Unavailable="UNAVAILABLE",i}(u||{}),d=function(i){return i.Body="body",i.Ionic="ionic",i.Native="native",i.None="none",i}(d||{});const c={getEngine(){const i=(0,v.g)();if(null!=i&&i.isPluginAvailable("Keyboard"))return i.Plugins.Keyboard},getResizeMode(){const i=this.getEngine();return null!=i&&i.getResizeMode?i.getResizeMode().catch(a=>{if(a.code!==u.Unimplemented)throw a}):Promise.resolve(void 0)}}},4731:(M,w,l)=>{l.d(w,{c:()=>a});var v=l(467),u=l(8476),d=l(4379);const c=n=>{if(void 0===u.d||n===d.a.None||void 0===n)return null;const r=u.d.querySelector("ion-app");return null!=r?r:u.d.body},i=n=>{const r=c(n);return null===r?0:r.clientHeight},a=function(){var n=(0,v.A)(function*(r){let o,e,t,s;const _=function(){var m=(0,v.A)(function*(){const p=yield d.K.getResizeMode(),A=void 0===p?void 0:p.mode;o=()=>{void 0===s&&(s=i(A)),t=!0,h(t,A)},e=()=>{t=!1,h(t,A)},null==u.w||u.w.addEventListener("keyboardWillShow",o),null==u.w||u.w.addEventListener("keyboardWillHide",e)});return function(){return m.apply(this,arguments)}}(),h=(m,p)=>{r&&r(m,E(p))},E=m=>{if(0===s||s===i(m))return;const p=c(m);return null!==p?new Promise(A=>{const g=new ResizeObserver(()=>{p.clientHeight===s&&(g.disconnect(),A())});g.observe(p)}):void 0};return yield _(),{init:_,destroy:()=>{null==u.w||u.w.removeEventListener("keyboardWillShow",o),null==u.w||u.w.removeEventListener("keyboardWillHide",e),o=e=void 0},isKeyboardVisible:()=>t}});return function(o){return n.apply(this,arguments)}}()},7838:(M,w,l)=>{l.d(w,{c:()=>u});var v=l(467);const u=()=>{let d;return{lock:function(){var i=(0,v.A)(function*(){const a=d;let n;return d=new Promise(r=>n=r),void 0!==a&&(yield a),n});return function(){return i.apply(this,arguments)}}()}}},9001:(M,w,l)=>{l.d(w,{c:()=>d});var v=l(8476),u=l(4920);const d=(c,i,a)=>{let n;const r=()=>!(void 0===i()||void 0!==c.label||null===a()),e=()=>{const s=i();if(void 0===s)return;if(!r())return void s.style.removeProperty("width");const _=a().scrollWidth;if(0===_&&null===s.offsetParent&&void 0!==v.w&&"IntersectionObserver"in v.w){if(void 0!==n)return;const h=n=new IntersectionObserver(E=>{1===E[0].intersectionRatio&&(e(),h.disconnect(),n=void 0)},{threshold:.01,root:c});h.observe(s)}else s.style.setProperty("width",.75*_+"px")};return{calculateNotchWidth:()=>{r()&&(0,u.r)(()=>{e()})},destroy:()=>{n&&(n.disconnect(),n=void 0)}}}},7895:(M,w,l)=>{l.d(w,{S:()=>u});const u={bubbles:{dur:1e3,circles:9,fn:(d,c,i)=>{const a=d*c/i-d+"ms",n=2*Math.PI*c/i;return{r:5,style:{top:32*Math.sin(n)+"%",left:32*Math.cos(n)+"%","animation-delay":a}}}},circles:{dur:1e3,circles:8,fn:(d,c,i)=>{const a=c/i,n=d*a-d+"ms",r=2*Math.PI*a;return{r:5,style:{top:32*Math.sin(r)+"%",left:32*Math.cos(r)+"%","animation-delay":n}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(d,c)=>({r:6,style:{left:32-32*c+"%","animation-delay":-110*c+"ms"}})},lines:{dur:1e3,lines:8,fn:(d,c,i)=>({y1:14,y2:26,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(d,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${360/i*c+(c<i/2?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(d,c,i)=>({y1:17,y2:29,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(d,c,i)=>({y1:12,y2:20,style:{transform:`rotate(${30*c+(c<6?180:-180)}deg)`,"animation-delay":d*c/i-d+"ms"}})}}},7166:(M,w,l)=>{l.r(w),l.d(w,{createSwipeBackGesture:()=>i});var v=l(4920),u=l(5083),d=l(8607);l(1970);const i=(a,n,r,o,e)=>{const t=a.ownerDocument.defaultView;let s=(0,u.i)(a);const h=p=>s?-p.deltaX:p.deltaX;return(0,d.createGesture)({el:a,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:p=>(s=(0,u.i)(a),(p=>{const{startX:O}=p;return s?O>=t.innerWidth-50:O<=50})(p)&&n()),onStart:r,onMove:p=>{const O=h(p)/t.innerWidth;o(O)},onEnd:p=>{const A=h(p),O=t.innerWidth,g=A/O,D=(p=>s?-p.velocityX:p.velocityX)(p),C=D>=0&&(D>.2||A>O/2),L=(C?1-g:g)*O;let b=0;if(L>5){const P=L/Math.abs(D);b=Math.min(P,540)}e(C,g<=0?.01:(0,v.j)(0,g,.9999),b)}})}},2935:(M,w,l)=>{l.d(w,{w:()=>v});const v=(c,i,a)=>{if(typeof MutationObserver>"u")return;const n=new MutationObserver(r=>{a(u(r,i))});return n.observe(c,{childList:!0,subtree:!0}),n},u=(c,i)=>{let a;return c.forEach(n=>{for(let r=0;r<n.addedNodes.length;r++)a=d(n.addedNodes[r],i)||a}),a},d=(c,i)=>{if(1!==c.nodeType)return;const a=c;return(a.tagName===i.toUpperCase()?[a]:Array.from(a.querySelectorAll(i))).find(r=>r.value===a.value)}},9885:(M,w,l)=>{l.d(w,{D:()=>i});var v=l(467),u=l(4438),d=l(369),c=l(4796);let i=(()=>{var a;class n{constructor(o,e){this.storage=o,this.authService=e,this._Storage=null,this.usuarioActual="",this.init()}init(){var o=this;return(0,v.A)(function*(){const e=yield o.storage.create();o._Storage=e,o.usuarioActual=(yield o._Storage.get("usuarioActual"))||""})()}setUsuarioActual(o){var e;this.usuarioActual=o,null===(e=this._Storage)||void 0===e||e.set("usuarioActual",o)}VerificarUsuario(o){var e=this;return(0,v.A)(function*(){var t;const s=(yield null===(t=e._Storage)||void 0===t?void 0:t.get("usuarios"))||[];for(const _ of s)if(_.nombre===o)return alert("El nombre de usuario ya existe"),!1;return!0})()}CrearUsuario(o){var e=this;return(0,v.A)(function*(){var t,s;const _=(yield null===(t=e._Storage)||void 0===t?void 0:t.get("usuarios"))||[];return!!(yield e.VerificarUsuario(o.nombre))&&(_.push(o),yield null===(s=e._Storage)||void 0===s?void 0:s.set("usuarios",_),!0)})()}Iniciarsesion(o,e){var t=this;return(0,v.A)(function*(){var s;const _=(yield null===(s=t._Storage)||void 0===s?void 0:s.get("usuarios"))||[];for(const h of _)if(h.nombre===o&&h.contrase\u00f1a===e)return t.setUsuarioActual(h.nombre),t.authService.login("token"),!0;return!1})()}restablecercontra(o,e){var t=this;return(0,v.A)(function*(){var s;const _=(yield null===(s=t._Storage)||void 0===s?void 0:s.get("usuarios"))||[];for(const E of _)if(E.nombre===o){var h;return E.contrase\u00f1a=e,yield null===(h=t._Storage)||void 0===h?void 0:h.set("usuarios",_),!0}return!1})()}CrearListaNotasUser(){var o=this;return(0,v.A)(function*(){var e;const t=(yield null===(e=o._Storage)||void 0===e?void 0:e.get("usuariosNotas"))||{};var s;t[o.usuarioActual]||""===o.usuarioActual||(t[o.usuarioActual]=[],yield null===(s=o._Storage)||void 0===s?void 0:s.set("usuariosNotas",t))})()}AgregarNotaUser(o){var e=this;return(0,v.A)(function*(){var t;const s=(yield null===(t=e._Storage)||void 0===t?void 0:t.get("usuariosNotas"))||{};if(e.usuarioActual&&s[e.usuarioActual]){var _;const h={id:Date.now()+Math.floor(1e5*Math.random()),contenido:o};return s[e.usuarioActual].push(h),yield null===(_=e._Storage)||void 0===_?void 0:_.set("usuariosNotas",s),!0}return alert("No se ha iniciado sesi\xf3n"),!1})()}ObtenerNotas(){var o=this;return(0,v.A)(function*(){var e;return((yield null===(e=o._Storage)||void 0===e?void 0:e.get("usuariosNotas"))||{})[o.usuarioActual]||[]})()}ModificarNota(o,e){var t=this;return(0,v.A)(function*(){var s;const _=(yield null===(s=t._Storage)||void 0===s?void 0:s.get("usuariosNotas"))||{},h=_[t.usuarioActual]||[];for(const y of h)if(y.id===o){var E;return y.contenido=e,yield null===(E=t._Storage)||void 0===E?void 0:E.set("usuariosNotas",_),!0}return!1})()}EliminarNota(o){var e=this;return(0,v.A)(function*(){var t;const s=(yield null===(t=e._Storage)||void 0===t?void 0:t.get("usuariosNotas"))||{},_=s[e.usuarioActual]||[],h=_.findIndex(y=>y.id===o);var E;return-1!==h&&(_.splice(h,1),s[e.usuarioActual]=_,yield null===(E=e._Storage)||void 0===E?void 0:E.set("usuariosNotas",s),!0)})()}CrearListaEventosUser(){var o=this;return(0,v.A)(function*(){var e;const t=(yield null===(e=o._Storage)||void 0===e?void 0:e.get("usuariosEventos"))||{};var s;t[o.usuarioActual]||(t[o.usuarioActual]=[],yield null===(s=o._Storage)||void 0===s?void 0:s.set("usuariosEventos",t))})()}AgregarEventoUser(o){var e=this;return(0,v.A)(function*(){var t;const s=(yield null===(t=e._Storage)||void 0===t?void 0:t.get("usuariosEventos"))||{};var _;return e.usuarioActual&&s[e.usuarioActual]?(s[e.usuarioActual].push(o),yield null===(_=e._Storage)||void 0===_?void 0:_.set("usuariosEventos",s),!0):(alert("No se ha iniciado sesi\xf3n"),!1)})()}ObtenerEventos(){var o=this;return(0,v.A)(function*(){var e;return((yield null===(e=o._Storage)||void 0===e?void 0:e.get("usuariosEventos"))||{})[o.usuarioActual]||[]})()}getUsuarioActual(){var o=this;return(0,v.A)(function*(){var e;return(yield null===(e=o._Storage)||void 0===e?void 0:e.get("usuarioActual"))||null})()}CerrarSesion(){var o=this;return(0,v.A)(function*(){var e;o.usuarioActual="",yield null===(e=o._Storage)||void 0===e?void 0:e.remove("usuarioActual"),o.authService.logout()})()}}return(a=n).\u0275fac=function(o){return new(o||a)(u.KVO(d.w),u.KVO(c.u))},a.\u0275prov=u.jDH({token:a,factory:a.\u0275fac,providedIn:"root"}),n})()}}]);