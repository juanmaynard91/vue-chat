function qc(e,t){const n=Object.create(null),s=e.split(",");for(let r=0;r<s.length;r++)n[s[r]]=!0;return t?r=>!!n[r.toLowerCase()]:r=>!!n[r]}function zc(e){if(tt(e)){const t={};for(let n=0;n<e.length;n++){const s=e[n],r=xt(s)?hv(s):zc(s);if(r)for(const i in r)t[i]=r[i]}return t}return xt(e)||bt(e)?e:void 0}(function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const n of document.querySelectorAll('link[rel="modulepreload"]'))t(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0})}function t(n){if(n.ep)return;n.ep=!0;const s=function(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}(n);fetch(n.href,s)}})();const cv=/;(?![^(]*\))/g,lv=/:([^]+)/,uv=/\/\*.*?\*\//gs;function hv(e){const t={};return e.replace(uv,"").split(cv).forEach(n=>{if(n){const s=n.split(lv);s.length>1&&(t[s[0].trim()]=s[1].trim())}}),t}function Po(e){let t="";if(xt(e))t=e;else if(tt(e))for(let n=0;n<e.length;n++){const s=Po(e[n]);s&&(t+=s+" ")}else if(bt(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const dv=qc("itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly");function ju(e){return!!e||e===""}const Ea=e=>xt(e)?e:e==null?"":tt(e)||bt(e)&&(e.toString===Zd||!st(e.toString))?JSON.stringify(e,Yd,2):String(e),Yd=(e,t)=>t&&t.__v_isRef?Yd(e,t.value):Cs(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[s,r])=>(n[`${s} =>`]=r,n),{})}:Xd(t)?{[`Set(${t.size})`]:[...t.values()]}:!bt(t)||tt(t)||tf(t)?t:String(t),mt={},ks=[],Ke=()=>{},fv=()=>!1,pv=/^on[^a-z]/,Lo=e=>pv.test(e),Hc=e=>e.startsWith("onUpdate:"),ue=Object.assign,Kc=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},mv=Object.prototype.hasOwnProperty,lt=(e,t)=>mv.call(e,t),tt=Array.isArray,Cs=e=>Mo(e)==="[object Map]",Xd=e=>Mo(e)==="[object Set]",st=e=>typeof e=="function",xt=e=>typeof e=="string",Gc=e=>typeof e=="symbol",bt=e=>e!==null&&typeof e=="object",Jd=e=>bt(e)&&st(e.then)&&st(e.catch),Zd=Object.prototype.toString,Mo=e=>Zd.call(e),gv=e=>Mo(e).slice(8,-1),tf=e=>Mo(e)==="[object Object]",Wc=e=>xt(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pi=qc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Fo=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},yv=/-(\w)/g,Ls=Fo(e=>e.replace(yv,(t,n)=>n?n.toUpperCase():"")),wv=/\B([A-Z])/g,Xs=Fo(e=>e.replace(wv,"-$1").toLowerCase()),ef=Fo(e=>e.charAt(0).toUpperCase()+e.slice(1)),Ia=Fo(e=>e?`on${ef(e)}`:""),Dr=(e,t)=>!Object.is(e,t),Li=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Xi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Wa=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let $u;const vv=()=>$u||($u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ae;class bv{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!t&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}const Qc=e=>{const t=new Set(e);return t.w=0,t.n=0,t},nf=e=>(e.w&wn)>0,sf=e=>(e.n&wn)>0,Qa=new WeakMap;let dr=0,wn=1;const Ya=30;let De;const Yn=Symbol(""),Xa=Symbol("");class Yc{constructor(t,n=null,s){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,function(r,i=Ae){i&&i.active&&i.effects.push(r)}(this,s)}run(){if(!this.active)return this.fn();let t=De,n=_n;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=De,De=this,_n=!0,wn=1<<++dr,dr<=Ya?(({deps:s})=>{if(s.length)for(let r=0;r<s.length;r++)s[r].w|=wn})(this):qu(this),this.fn()}finally{dr<=Ya&&(s=>{const{deps:r}=s;if(r.length){let i=0;for(let o=0;o<r.length;o++){const a=r[o];nf(a)&&!sf(a)?a.delete(s):r[i++]=a,a.w&=~wn,a.n&=~wn}r.length=i}})(this),wn=1<<--dr,De=this.parent,_n=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){De===this?this.deferStop=!0:this.active&&(qu(this),this.onStop&&this.onStop(),this.active=!1)}}function qu(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _n=!0;const rf=[];function Ms(){rf.push(_n),_n=!1}function Fs(){const e=rf.pop();_n=e===void 0||e}function ye(e,t,n){if(_n&&De){let s=Qa.get(e);s||Qa.set(e,s=new Map);let r=s.get(n);r||s.set(n,r=Qc()),of(r)}}function of(e,t){let n=!1;dr<=Ya?sf(e)||(e.n|=wn,n=!nf(e)):n=!e.has(De),n&&(e.add(De),De.deps.push(e))}function on(e,t,n,s,r,i){const o=Qa.get(e);if(!o)return;let a=[];if(t==="clear")a=[...o.values()];else if(n==="length"&&tt(e)){const l=Number(s);o.forEach((h,d)=>{(d==="length"||d>=l)&&a.push(h)})}else switch(n!==void 0&&a.push(o.get(n)),t){case"add":tt(e)?Wc(n)&&a.push(o.get("length")):(a.push(o.get(Yn)),Cs(e)&&a.push(o.get(Xa)));break;case"delete":tt(e)||(a.push(o.get(Yn)),Cs(e)&&a.push(o.get(Xa)));break;case"set":Cs(e)&&a.push(o.get(Yn))}if(a.length===1)a[0]&&Ja(a[0]);else{const l=[];for(const h of a)h&&l.push(...h);Ja(Qc(l))}}function Ja(e,t){const n=tt(e)?e:[...e];for(const s of n)s.computed&&zu(s);for(const s of n)s.computed||zu(s)}function zu(e,t){(e!==De||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ev=qc("__proto__,__v_isRef,__isVue"),af=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Gc)),Iv=Xc(),Tv=Xc(!1,!0),_v=Xc(!0),Hu=kv();function kv(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const s=ht(this);for(let i=0,o=this.length;i<o;i++)ye(s,0,i+"");const r=s[t](...n);return r===-1||r===!1?s[t](...n.map(ht)):r}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Ms();const s=ht(this)[t].apply(this,n);return Fs(),s}}),e}function Cv(e){const t=ht(this);return ye(t,0,e),t.hasOwnProperty(e)}function Xc(e=!1,t=!1){return function(n,s,r){if(s==="__v_isReactive")return!e;if(s==="__v_isReadonly")return e;if(s==="__v_isShallow")return t;if(s==="__v_raw"&&r===(e?t?Fv:df:t?hf:uf).get(n))return n;const i=tt(n);if(!e){if(i&&lt(Hu,s))return Reflect.get(Hu,s,r);if(s==="hasOwnProperty")return Cv}const o=Reflect.get(n,s,r);return(Gc(s)?af.has(s):Ev(s))?o:(e||ye(n,0,s),t?o:ee(o)?i&&Wc(s)?o:o.value:bt(o)?e?ff(o):tl(o):o)}}function cf(e=!1){return function(t,n,s,r){let i=t[n];if(Us(i)&&ee(i)&&!ee(s))return!1;if(!e&&(Ji(s)||Us(s)||(i=ht(i),s=ht(s)),!tt(t)&&ee(i)&&!ee(s)))return i.value=s,!0;const o=tt(t)&&Wc(n)?Number(n)<t.length:lt(t,n),a=Reflect.set(t,n,s,r);return t===ht(r)&&(o?Dr(s,i)&&on(t,"set",n,s):on(t,"add",n,s)),a}}const lf={get:Iv,set:cf(),deleteProperty:function(e,t){const n=lt(e,t);e[t];const s=Reflect.deleteProperty(e,t);return s&&n&&on(e,"delete",t,void 0),s},has:function(e,t){const n=Reflect.has(e,t);return Gc(t)&&af.has(t)||ye(e,0,t),n},ownKeys:function(e){return ye(e,0,tt(e)?"length":Yn),Reflect.ownKeys(e)}},Sv={get:_v,set:(e,t)=>!0,deleteProperty:(e,t)=>!0},Av=ue({},lf,{get:Tv,set:cf(!0)}),Jc=e=>e,Uo=e=>Reflect.getPrototypeOf(e);function yi(e,t,n=!1,s=!1){const r=ht(e=e.__v_raw),i=ht(t);n||(t!==i&&ye(r,0,t),ye(r,0,i));const{has:o}=Uo(r),a=s?Jc:n?nl:Rr;return o.call(r,t)?a(e.get(t)):o.call(r,i)?a(e.get(i)):void(e!==r&&e.get(t))}function wi(e,t=!1){const n=this.__v_raw,s=ht(n),r=ht(e);return t||(e!==r&&ye(s,0,e),ye(s,0,r)),e===r?n.has(e):n.has(e)||n.has(r)}function vi(e,t=!1){return e=e.__v_raw,!t&&ye(ht(e),0,Yn),Reflect.get(e,"size",e)}function Ku(e){e=ht(e);const t=ht(this);return Uo(t).has.call(t,e)||(t.add(e),on(t,"add",e,e)),this}function Gu(e,t){t=ht(t);const n=ht(this),{has:s,get:r}=Uo(n);let i=s.call(n,e);i||(e=ht(e),i=s.call(n,e));const o=r.call(n,e);return n.set(e,t),i?Dr(t,o)&&on(n,"set",e,t):on(n,"add",e,t),this}function Wu(e){const t=ht(this),{has:n,get:s}=Uo(t);let r=n.call(t,e);r||(e=ht(e),r=n.call(t,e)),s&&s.call(t,e);const i=t.delete(e);return r&&on(t,"delete",e,void 0),i}function Qu(){const e=ht(this),t=e.size!==0,n=e.clear();return t&&on(e,"clear",void 0,void 0),n}function bi(e,t){return function(n,s){const r=this,i=r.__v_raw,o=ht(i),a=t?Jc:e?nl:Rr;return!e&&ye(o,0,Yn),i.forEach((l,h)=>n.call(s,a(l),a(h),r))}}function Ei(e,t,n){return function(...s){const r=this.__v_raw,i=ht(r),o=Cs(i),a=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,h=r[e](...s),d=n?Jc:t?nl:Rr;return!t&&ye(i,0,l?Xa:Yn),{next(){const{value:p,done:g}=h.next();return g?{value:p,done:g}:{value:a?[d(p[0]),d(p[1])]:d(p),done:g}},[Symbol.iterator](){return this}}}}function mn(e){return function(...t){return e!=="delete"&&this}}function xv(){const e={get(r){return yi(this,r)},get size(){return vi(this)},has:wi,add:Ku,set:Gu,delete:Wu,clear:Qu,forEach:bi(!1,!1)},t={get(r){return yi(this,r,!1,!0)},get size(){return vi(this)},has:wi,add:Ku,set:Gu,delete:Wu,clear:Qu,forEach:bi(!1,!0)},n={get(r){return yi(this,r,!0)},get size(){return vi(this,!0)},has(r){return wi.call(this,r,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:bi(!0,!1)},s={get(r){return yi(this,r,!0,!0)},get size(){return vi(this,!0)},has(r){return wi.call(this,r,!0)},add:mn("add"),set:mn("set"),delete:mn("delete"),clear:mn("clear"),forEach:bi(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=Ei(r,!1,!1),n[r]=Ei(r,!0,!1),t[r]=Ei(r,!1,!0),s[r]=Ei(r,!0,!0)}),[e,n,t,s]}const[Nv,Dv,Rv,Ov]=xv();function Zc(e,t){const n=t?e?Ov:Rv:e?Dv:Nv;return(s,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?s:Reflect.get(lt(n,r)&&r in s?n:s,r,i)}const Pv={get:Zc(!1,!1)},Lv={get:Zc(!1,!0)},Mv={get:Zc(!0,!1)},uf=new WeakMap,hf=new WeakMap,df=new WeakMap,Fv=new WeakMap;function tl(e){return Us(e)?e:el(e,!1,lf,Pv,uf)}function ff(e){return el(e,!0,Sv,Mv,df)}function el(e,t,n,s,r){if(!bt(e)||e.__v_raw&&(!t||!e.__v_isReactive))return e;const i=r.get(e);if(i)return i;const o=(a=e).__v_skip||!Object.isExtensible(a)?0:function(h){switch(h){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}(gv(a));var a;if(o===0)return e;const l=new Proxy(e,o===2?s:n);return r.set(e,l),l}function Ss(e){return Us(e)?Ss(e.__v_raw):!(!e||!e.__v_isReactive)}function Us(e){return!(!e||!e.__v_isReadonly)}function Ji(e){return!(!e||!e.__v_isShallow)}function Yu(e){return Ss(e)||Us(e)}function ht(e){const t=e&&e.__v_raw;return t?ht(t):e}function pf(e){return Xi(e,"__v_skip",!0),e}const Rr=e=>bt(e)?tl(e):e,nl=e=>bt(e)?ff(e):e;function mf(e){_n&&De&&of((e=ht(e)).dep||(e.dep=Qc()))}function gf(e,t){const n=(e=ht(e)).dep;n&&Ja(n)}function ee(e){return!(!e||e.__v_isRef!==!0)}function vr(e){return function(t,n){return ee(t)?t:new Uv(t,n)}(e,!1)}class Uv{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ht(t),this._value=n?t:Rr(t)}get value(){return mf(this),this._value}set value(t){const n=this.__v_isShallow||Ji(t)||Us(t);t=n?t:ht(t),Dr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Rr(t),gf(this))}}const Vv={get:(e,t,n)=>function(s){return ee(s)?s.value:s}(Reflect.get(e,t,n)),set:(e,t,n,s)=>{const r=e[t];return ee(r)&&!ee(n)?(r.value=n,!0):Reflect.set(e,t,n,s)}};function yf(e){return Ss(e)?e:new Proxy(e,Vv)}var wf;class Bv{constructor(t,n,s,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[wf]=!1,this._dirty=!0,this.effect=new Yc(t,()=>{this._dirty||(this._dirty=!0,gf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=s}get value(){const t=ht(this);return mf(t),!t._dirty&&t._cacheable||(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function kn(e,t,n,s){let r;try{r=s?e(...s):e()}catch(i){Vo(i,t,n)}return r}function Le(e,t,n,s){if(st(e)){const i=kn(e,t,n,s);return i&&Jd(i)&&i.catch(o=>{Vo(o,t,n)}),i}const r=[];for(let i=0;i<e.length;i++)r.push(Le(e[i],t,n,s));return r}function Vo(e,t,n,s=!0){if(t&&t.vnode,t){let r=t.parent;const i=t.proxy,o=n;for(;r;){const l=r.ec;if(l){for(let h=0;h<l.length;h++)if(l[h](e,i,o)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void kn(a,null,10,[e,i,o])}(function(r,i,o,a=!0){console.error(r)})(e,0,0,s)}wf="__v_isReadonly";let Or=!1,Za=!1;const Xt=[];let ze=0;const As=[];let Je=null,zn=0;const vf=Promise.resolve();let sl=null;function jv(e){const t=sl||vf;return e?t.then(this?e.bind(this):e):t}function rl(e){Xt.length&&Xt.includes(e,Or&&e.allowRecurse?ze+1:ze)||(e.id==null?Xt.push(e):Xt.splice(function(t){let n=ze+1,s=Xt.length;for(;n<s;){const r=n+s>>>1;Pr(Xt[r])<t?n=r+1:s=r}return n}(e.id),0,e),bf())}function bf(){Or||Za||(Za=!0,sl=vf.then(If))}function Xu(e,t=Or?ze+1:0){for(;t<Xt.length;t++){const n=Xt[t];n&&n.pre&&(Xt.splice(t,1),t--,n())}}function Ef(e){if(As.length){const t=[...new Set(As)];if(As.length=0,Je)return void Je.push(...t);for(Je=t,Je.sort((n,s)=>Pr(n)-Pr(s)),zn=0;zn<Je.length;zn++)Je[zn]();Je=null,zn=0}}const Pr=e=>e.id==null?1/0:e.id,$v=(e,t)=>{const n=Pr(e)-Pr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function If(e){Za=!1,Or=!0,Xt.sort($v);try{for(ze=0;ze<Xt.length;ze++){const t=Xt[ze];t&&t.active!==!1&&kn(t,null,14)}}finally{ze=0,Xt.length=0,Ef(),Or=!1,sl=null,(Xt.length||As.length)&&If()}}function qv(e,t,...n){if(e.isUnmounted)return;const s=e.vnode.props||mt;let r=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in s){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:p,trim:g}=s[d]||mt;g&&(r=n.map(w=>xt(w)?w.trim():w)),p&&(r=n.map(Wa))}let a,l=s[a=Ia(t)]||s[a=Ia(Ls(t))];!l&&i&&(l=s[a=Ia(Xs(t))]),l&&Le(l,e,6,r);const h=s[a+"Once"];if(h){if(e.emitted){if(e.emitted[a])return}else e.emitted={};e.emitted[a]=!0,Le(h,e,6,r)}}function Tf(e,t,n=!1){const s=t.emitsCache,r=s.get(e);if(r!==void 0)return r;const i=e.emits;let o={},a=!1;if(!st(e)){const l=h=>{const d=Tf(h,t,!0);d&&(a=!0,ue(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return i||a?(tt(i)?i.forEach(l=>o[l]=null):ue(o,i),bt(e)&&s.set(e,o),o):(bt(e)&&s.set(e,null),null)}function Zi(e,t){return!(!e||!Lo(t))&&(t=t.slice(2).replace(/Once$/,""),lt(e,t[0].toLowerCase()+t.slice(1))||lt(e,Xs(t))||lt(e,t))}let Re=null,_f=null;function to(e){const t=Re;return Re=e,_f=e&&e.type.__scopeId||null,t}function Ta(e){const{type:t,vnode:n,proxy:s,withProxy:r,props:i,propsOptions:[o],slots:a,attrs:l,emit:h,render:d,renderCache:p,data:g,setupState:w,ctx:E,inheritAttrs:_}=e;let M,O;const H=to(e);try{if(4&n.shapeFlag){const j=r||s;M=qe(d.call(j,j,p,i,w,g,E)),O=l}else{const j=t;M=qe(j.length>1?j(i,{attrs:l,slots:a,emit:h}):j(i,null)),O=t.props?l:zv(l)}}catch(j){Ir.length=0,Vo(j,e,1),M=sn(ss)}let P=M;if(O&&_!==!1){const j=Object.keys(O),{shapeFlag:ft}=P;j.length&&7&ft&&(o&&j.some(Hc)&&(O=Hv(O,o)),P=Vs(P,O))}return n.dirs&&(P=Vs(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),M=P,to(H),M}const zv=e=>{let t;for(const n in e)(n==="class"||n==="style"||Lo(n))&&((t||(t={}))[n]=e[n]);return t},Hv=(e,t)=>{const n={};for(const s in e)Hc(s)&&s.slice(9)in t||(n[s]=e[s]);return n};function Ju(e,t,n){const s=Object.keys(t);if(s.length!==Object.keys(e).length)return!0;for(let r=0;r<s.length;r++){const i=s[r];if(t[i]!==e[i]&&!Zi(n,i))return!0}return!1}function kf(e,t){if(jt){let n=jt.provides;const s=jt.parent&&jt.parent.provides;s===n&&(n=jt.provides=Object.create(s)),n[e]=t}}function br(e,t,n=!1){const s=jt||Re;if(s){const r=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(r&&e in r)return r[e];if(arguments.length>1)return n&&st(t)?t.call(s.proxy):t}}const Ii={};function _a(e,t,n){return il(e,t,n)}function il(e,t,{immediate:n,deep:s,flush:r,onTrack:i,onTrigger:o}=mt){const a=Ae===(jt==null?void 0:jt.scope)?jt:null;let l,h,d=!1,p=!1;if(ee(e)?(l=()=>e.value,d=Ji(e)):Ss(e)?(l=()=>e,s=!0):tt(e)?(p=!0,d=e.some(P=>Ss(P)||Ji(P)),l=()=>e.map(P=>ee(P)?P.value:Ss(P)?Kn(P):st(P)?kn(P,a,2):void 0)):l=st(e)?t?()=>kn(e,a,2):()=>{if(!a||!a.isUnmounted)return h&&h(),Le(e,a,3,[w])}:Ke,t&&s){const P=l;l=()=>Kn(P())}let g,w=P=>{h=O.onStop=()=>{kn(P,a,4)}};if(Mr){if(w=Ke,t?n&&Le(t,a,3,[l(),p?[]:void 0,w]):l(),r!=="sync")return Ke;{const P=_0();g=P.__watcherHandles||(P.__watcherHandles=[])}}let E=p?new Array(e.length).fill(Ii):Ii;const _=()=>{if(O.active)if(t){const P=O.run();(s||d||(p?P.some((j,ft)=>Dr(j,E[ft])):Dr(P,E)))&&(h&&h(),Le(t,a,3,[P,E===Ii?void 0:p&&E[0]===Ii?[]:E,w]),E=P)}else O.run()};let M;_.allowRecurse=!!t,r==="sync"?M=_:r==="post"?M=()=>me(_,a&&a.suspense):(_.pre=!0,a&&(_.id=a.uid),M=()=>rl(_));const O=new Yc(l,M);t?n?_():E=O.run():r==="post"?me(O.run.bind(O),a&&a.suspense):O.run();const H=()=>{O.stop(),a&&a.scope&&Kc(a.scope.effects,O)};return g&&g.push(H),H}function Kv(e,t,n){const s=this.proxy,r=xt(e)?e.includes(".")?Cf(s,e):()=>s[e]:e.bind(s,s);let i;st(t)?i=t:(i=t.handler,n=t);const o=jt;Bs(this);const a=il(r,i.bind(s),n);return o?Bs(o):Xn(),a}function Cf(e,t){const n=t.split(".");return()=>{let s=e;for(let r=0;r<n.length&&s;r++)s=s[n[r]];return s}}function Kn(e,t){if(!bt(e)||e.__v_skip||(t=t||new Set).has(e))return e;if(t.add(e),ee(e))Kn(e.value,t);else if(tt(e))for(let n=0;n<e.length;n++)Kn(e[n],t);else if(Xd(e)||Cs(e))e.forEach(n=>{Kn(n,t)});else if(tf(e))for(const n in e)Kn(e[n],t);return e}const Mi=e=>!!e.type.__asyncLoader,Sf=e=>e.type.__isKeepAlive;function Gv(e,t){Af(e,"a",t)}function Wv(e,t){Af(e,"da",t)}function Af(e,t,n=jt){const s=e.__wdc||(e.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Bo(t,s,n),n){let r=n.parent;for(;r&&r.parent;)Sf(r.parent.vnode)&&Qv(s,t,n,r),r=r.parent}}function Qv(e,t,n,s){const r=Bo(t,e,s,!0);xf(()=>{Kc(s[t],r)},n)}function Bo(e,t,n=jt,s=!1){if(n){const r=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Ms(),Bs(n);const a=Le(t,n,e,o);return Xn(),Fs(),a});return s?r.unshift(i):r.push(i),i}}const dn=e=>(t,n=jt)=>(!Mr||e==="sp")&&Bo(e,(...s)=>t(...s),n),Yv=dn("bm"),Xv=dn("m"),Jv=dn("bu"),Zv=dn("u"),t0=dn("bum"),xf=dn("um"),e0=dn("sp"),n0=dn("rtg"),s0=dn("rtc");function r0(e,t=jt){Bo("ec",e,t)}function i0(e,t){const n=Re;if(n===null)return e;const s=qo(n)||n.proxy,r=e.dirs||(e.dirs=[]);for(let i=0;i<t.length;i++){let[o,a,l,h=mt]=t[i];o&&(st(o)&&(o={mounted:o,updated:o}),o.deep&&Kn(a),r.push({dir:o,instance:s,value:a,oldValue:void 0,arg:l,modifiers:h}))}return e}function Un(e,t,n,s){const r=e.dirs,i=t&&t.dirs;for(let o=0;o<r.length;o++){const a=r[o];i&&(a.oldValue=i[o].value);let l=a.dir[s];l&&(Ms(),Le(l,n,8,[e.el,a,e,t]),Fs())}}const o0=Symbol();function a0(e,t,n,s){let r;const i=n&&n[s];if(tt(e)||xt(e)){r=new Array(e.length);for(let o=0,a=e.length;o<a;o++)r[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=t(o+1,o,void 0,i&&i[o])}else if(bt(e))if(e[Symbol.iterator])r=Array.from(e,(o,a)=>t(o,a,void 0,i&&i[a]));else{const o=Object.keys(e);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const h=o[a];r[a]=t(e[h],h,a,i&&i[a])}}else r=[];return n&&(n[s]=r),r}const tc=e=>e?Bf(e)?qo(e)||e.proxy:tc(e.parent):null,Er=ue(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>tc(e.parent),$root:e=>tc(e.root),$emit:e=>e.emit,$options:e=>ol(e),$forceUpdate:e=>e.f||(e.f=()=>rl(e.update)),$nextTick:e=>e.n||(e.n=jv.bind(e.proxy)),$watch:e=>Kv.bind(e)}),ka=(e,t)=>e!==mt&&!e.__isScriptSetup&&lt(e,t),c0={get({_:e},t){const{ctx:n,setupState:s,data:r,props:i,accessCache:o,type:a,appContext:l}=e;let h;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return s[t];case 2:return r[t];case 4:return n[t];case 3:return i[t]}else{if(ka(s,t))return o[t]=1,s[t];if(r!==mt&&lt(r,t))return o[t]=2,r[t];if((h=e.propsOptions[0])&&lt(h,t))return o[t]=3,i[t];if(n!==mt&&lt(n,t))return o[t]=4,n[t];ec&&(o[t]=0)}}const d=Er[t];let p,g;return d?(t==="$attrs"&&ye(e,0,t),d(e)):(p=a.__cssModules)&&(p=p[t])?p:n!==mt&&lt(n,t)?(o[t]=4,n[t]):(g=l.config.globalProperties,lt(g,t)?g[t]:void 0)},set({_:e},t,n){const{data:s,setupState:r,ctx:i}=e;return ka(r,t)?(r[t]=n,!0):s!==mt&&lt(s,t)?(s[t]=n,!0):!lt(e.props,t)&&(t[0]!=="$"||!(t.slice(1)in e))&&(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:s,appContext:r,propsOptions:i}},o){let a;return!!n[o]||e!==mt&&lt(e,o)||ka(t,o)||(a=i[0])&&lt(a,o)||lt(s,o)||lt(Er,o)||lt(r.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:lt(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let ec=!0;function l0(e){const t=ol(e),n=e.proxy,s=e.ctx;ec=!1,t.beforeCreate&&Zu(t.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:a,provide:l,inject:h,created:d,beforeMount:p,mounted:g,beforeUpdate:w,updated:E,activated:_,deactivated:M,beforeDestroy:O,beforeUnmount:H,destroyed:P,unmounted:j,render:ft,renderTracked:pt,renderTriggered:wt,errorCaptured:It,serverPrefetch:we,expose:Ot,inheritAttrs:Ie,components:St,directives:de,filters:Te}=t;if(h&&function(it,ot,ve=Ke,Fe=!1){tt(it)&&(it=nc(it));for(const ie in it){const oe=it[ie];let Pt;Pt=bt(oe)?"default"in oe?br(oe.from||ie,oe.default,!0):br(oe.from||ie):br(oe),ee(Pt)&&Fe?Object.defineProperty(ot,ie,{enumerable:!0,configurable:!0,get:()=>Pt.value,set:pn=>Pt.value=pn}):ot[ie]=Pt}}(h,s,null,e.appContext.config.unwrapInjectedRef),o)for(const it in o){const ot=o[it];st(ot)&&(s[it]=ot.bind(n))}if(r){const it=r.call(n,n);bt(it)&&(e.data=tl(it))}if(ec=!0,i)for(const it in i){const ot=i[it],ve=st(ot)?ot.bind(n,n):st(ot.get)?ot.get.bind(n,n):Ke,Fe=!st(ot)&&st(ot.set)?ot.set.bind(n):Ke,ie=I0({get:ve,set:Fe});Object.defineProperty(s,it,{enumerable:!0,configurable:!0,get:()=>ie.value,set:oe=>ie.value=oe})}if(a)for(const it in a)Nf(a[it],s,n,it);if(l){const it=st(l)?l.call(n):l;Reflect.ownKeys(it).forEach(ot=>{kf(ot,it[ot])})}function Kt(it,ot){tt(ot)?ot.forEach(ve=>it(ve.bind(n))):ot&&it(ot.bind(n))}if(d&&Zu(d,e,"c"),Kt(Yv,p),Kt(Xv,g),Kt(Jv,w),Kt(Zv,E),Kt(Gv,_),Kt(Wv,M),Kt(r0,It),Kt(s0,pt),Kt(n0,wt),Kt(t0,H),Kt(xf,j),Kt(e0,we),tt(Ot))if(Ot.length){const it=e.exposed||(e.exposed={});Ot.forEach(ot=>{Object.defineProperty(it,ot,{get:()=>n[ot],set:ve=>n[ot]=ve})})}else e.exposed||(e.exposed={});ft&&e.render===Ke&&(e.render=ft),Ie!=null&&(e.inheritAttrs=Ie),St&&(e.components=St),de&&(e.directives=de)}function Zu(e,t,n){Le(tt(e)?e.map(s=>s.bind(t.proxy)):e.bind(t.proxy),t,n)}function Nf(e,t,n,s){const r=s.includes(".")?Cf(n,s):()=>n[s];if(xt(e)){const i=t[e];st(i)&&_a(r,i)}else if(st(e))_a(r,e.bind(n));else if(bt(e))if(tt(e))e.forEach(i=>Nf(i,t,n,s));else{const i=st(e.handler)?e.handler.bind(n):t[e.handler];st(i)&&_a(r,i,e)}}function ol(e){const t=e.type,{mixins:n,extends:s}=t,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,a=i.get(t);let l;return a?l=a:r.length||n||s?(l={},r.length&&r.forEach(h=>eo(l,h,o,!0)),eo(l,t,o)):l=t,bt(t)&&i.set(t,l),l}function eo(e,t,n,s=!1){const{mixins:r,extends:i}=t;i&&eo(e,i,n,!0),r&&r.forEach(o=>eo(e,o,n,!0));for(const o in t)if(!(s&&o==="expose")){const a=u0[o]||n&&n[o];e[o]=a?a(e[o],t[o]):t[o]}return e}const u0={data:th,props:Vn,emits:Vn,methods:Vn,computed:Vn,beforeCreate:ce,created:ce,beforeMount:ce,mounted:ce,beforeUpdate:ce,updated:ce,beforeDestroy:ce,beforeUnmount:ce,destroyed:ce,unmounted:ce,activated:ce,deactivated:ce,errorCaptured:ce,serverPrefetch:ce,components:Vn,directives:Vn,watch:function(e,t){if(!e)return t;if(!t)return e;const n=ue(Object.create(null),e);for(const s in t)n[s]=ce(e[s],t[s]);return n},provide:th,inject:function(e,t){return Vn(nc(e),nc(t))}};function th(e,t){return t?e?function(){return ue(st(e)?e.call(this,this):e,st(t)?t.call(this,this):t)}:t:e}function nc(e){if(tt(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function ce(e,t){return e?[...new Set([].concat(e,t))]:t}function Vn(e,t){return e?ue(ue(Object.create(null),e),t):t}function h0(e,t,n,s=!1){const r={},i={};Xi(i,$o,1),e.propsDefaults=Object.create(null),Df(e,t,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);n?e.props=s?r:el(r,!1,Av,Lv,hf):e.type.props?e.props=r:e.props=i,e.attrs=i}function Df(e,t,n,s){const[r,i]=e.propsOptions;let o,a=!1;if(t)for(let l in t){if(Pi(l))continue;const h=t[l];let d;r&&lt(r,d=Ls(l))?i&&i.includes(d)?(o||(o={}))[d]=h:n[d]=h:Zi(e.emitsOptions,l)||l in s&&h===s[l]||(s[l]=h,a=!0)}if(i){const l=ht(n),h=o||mt;for(let d=0;d<i.length;d++){const p=i[d];n[p]=sc(r,l,p,h[p],e,!lt(h,p))}}return a}function sc(e,t,n,s,r,i){const o=e[n];if(o!=null){const a=lt(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&st(l)){const{propsDefaults:h}=r;n in h?s=h[n]:(Bs(r),s=h[n]=l.call(null,t),Xn())}else s=l}o[0]&&(i&&!a?s=!1:!o[1]||s!==""&&s!==Xs(n)||(s=!0))}return s}function Rf(e,t,n=!1){const s=t.propsCache,r=s.get(e);if(r)return r;const i=e.props,o={},a=[];let l=!1;if(!st(e)){const d=p=>{l=!0;const[g,w]=Rf(p,t,!0);ue(o,g),w&&a.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return bt(e)&&s.set(e,ks),ks;if(tt(i))for(let d=0;d<i.length;d++){const p=Ls(i[d]);eh(p)&&(o[p]=mt)}else if(i)for(const d in i){const p=Ls(d);if(eh(p)){const g=i[d],w=o[p]=tt(g)||st(g)?{type:g}:Object.assign({},g);if(w){const E=rh(Boolean,w.type),_=rh(String,w.type);w[0]=E>-1,w[1]=_<0||E<_,(E>-1||lt(w,"default"))&&a.push(p)}}}const h=[o,a];return bt(e)&&s.set(e,h),h}function eh(e){return e[0]!=="$"}function nh(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function sh(e,t){return nh(e)===nh(t)}function rh(e,t){return tt(t)?t.findIndex(n=>sh(n,e)):st(t)&&sh(t,e)?0:-1}const Of=e=>e[0]==="_"||e==="$stable",al=e=>tt(e)?e.map(qe):[qe(e)],d0=(e,t,n)=>{if(t._n)return t;const s=function(r,i=Re,o){if(!i||r._n)return r;const a=(...l)=>{a._d&&ih(-1);const h=to(i);let d;try{d=r(...l)}finally{to(h),a._d&&ih(1)}return d};return a._n=!0,a._c=!0,a._d=!0,a}((...r)=>al(t(...r)),n);return s._c=!1,s},Pf=(e,t,n)=>{const s=e._ctx;for(const r in e){if(Of(r))continue;const i=e[r];if(st(i))t[r]=d0(0,i,s);else if(i!=null){const o=al(i);t[r]=()=>o}}},Lf=(e,t)=>{const n=al(t);e.slots.default=()=>n},f0=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=ht(t),Xi(t,"_",n)):Pf(t,e.slots={})}else e.slots={},t&&Lf(e,t);Xi(e.slots,$o,1)},p0=(e,t,n)=>{const{vnode:s,slots:r}=e;let i=!0,o=mt;if(32&s.shapeFlag){const a=t._;a?n&&a===1?i=!1:(ue(r,t),n||a!==1||delete r._):(i=!t.$stable,Pf(t,r)),o=t}else t&&(Lf(e,t),o={default:1});if(i)for(const a in r)Of(a)||a in o||delete r[a]};function Mf(){return{app:null,config:{isNativeTag:fv,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let m0=0;function g0(e,t){return function(n,s=null){st(n)||(n=Object.assign({},n)),s==null||bt(s)||(s=null);const r=Mf(),i=new Set;let o=!1;const a=r.app={_uid:m0++,_component:n,_props:s,_container:null,_context:r,_instance:null,version:k0,get config(){return r.config},set config(l){},use:(l,...h)=>(i.has(l)||(l&&st(l.install)?(i.add(l),l.install(a,...h)):st(l)&&(i.add(l),l(a,...h))),a),mixin:l=>(r.mixins.includes(l)||r.mixins.push(l),a),component:(l,h)=>h?(r.components[l]=h,a):r.components[l],directive:(l,h)=>h?(r.directives[l]=h,a):r.directives[l],mount(l,h,d){if(!o){const p=sn(n,s);return p.appContext=r,h&&t?t(p,l):e(p,l,d),o=!0,a._container=l,l.__vue_app__=a,qo(p.component)||p.component.proxy}},unmount(){o&&(e(null,a._container),delete a._container.__vue_app__)},provide:(l,h)=>(r.provides[l]=h,a)};return a}}function rc(e,t,n,s,r=!1){if(tt(e))return void e.forEach((g,w)=>rc(g,t&&(tt(t)?t[w]:t),n,s,r));if(Mi(s)&&!r)return;const i=4&s.shapeFlag?qo(s.component)||s.component.proxy:s.el,o=r?null:i,{i:a,r:l}=e,h=t&&t.r,d=a.refs===mt?a.refs={}:a.refs,p=a.setupState;if(h!=null&&h!==l&&(xt(h)?(d[h]=null,lt(p,h)&&(p[h]=null)):ee(h)&&(h.value=null)),st(l))kn(l,a,12,[o,d]);else{const g=xt(l),w=ee(l);if(g||w){const E=()=>{if(e.f){const _=g?lt(p,l)?p[l]:d[l]:l.value;r?tt(_)&&Kc(_,i):tt(_)?_.includes(i)||_.push(i):g?(d[l]=[i],lt(p,l)&&(p[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=o,lt(p,l)&&(p[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(E.id=-1,me(E,n)):E()}}}const me=function(e,t){t&&t.pendingBranch?tt(e)?t.effects.push(...e):t.effects.push(e):function(n){tt(n)?As.push(...n):Je&&Je.includes(n,n.allowRecurse?zn+1:zn)||As.push(n),bf()}(e)};function y0(e){return function(t,n){vv().__VUE__=!0;const{insert:s,remove:r,patchProp:i,createElement:o,createText:a,createComment:l,setText:h,setElementText:d,parentNode:p,nextSibling:g,setScopeId:w=Ke,insertStaticContent:E}=t,_=(y,v,b,k=null,I=null,S=null,R=!1,C=null,x=!!v.dynamicChildren)=>{if(y===v)return;y&&!cr(y,v)&&(k=Lt(y),Pt(y,I,S,!0),y=null),v.patchFlag===-2&&(x=!1,v.dynamicChildren=null);const{type:T,ref:F,shapeFlag:L}=v;switch(T){case jo:M(y,v,b,k);break;case ss:O(y,v,b,k);break;case Ca:y==null&&H(v,b,k,R);break;case xe:St(y,v,b,k,I,S,R,C,x);break;default:1&L?ft(y,v,b,k,I,S,R,C,x):6&L?de(y,v,b,k,I,S,R,C,x):(64&L||128&L)&&T.process(y,v,b,k,I,S,R,C,x,Pn)}F!=null&&I&&rc(F,y&&y.ref,S,v||y,!v)},M=(y,v,b,k)=>{if(y==null)s(v.el=a(v.children),b,k);else{const I=v.el=y.el;v.children!==y.children&&h(I,v.children)}},O=(y,v,b,k)=>{y==null?s(v.el=l(v.children||""),b,k):v.el=y.el},H=(y,v,b,k)=>{[y.el,y.anchor]=E(y.children,v,b,k,y.el,y.anchor)},P=({el:y,anchor:v},b,k)=>{let I;for(;y&&y!==v;)I=g(y),s(y,b,k),y=I;s(v,b,k)},j=({el:y,anchor:v})=>{let b;for(;y&&y!==v;)b=g(y),r(y),y=b;r(v)},ft=(y,v,b,k,I,S,R,C,x)=>{R=R||v.type==="svg",y==null?pt(v,b,k,I,S,R,C,x):we(y,v,I,S,R,C,x)},pt=(y,v,b,k,I,S,R,C)=>{let x,T;const{type:F,props:L,shapeFlag:U,transition:B,dirs:$}=y;if(x=y.el=o(y.type,S,L&&L.is,L),8&U?d(x,y.children):16&U&&It(y.children,x,null,k,I,S&&F!=="foreignObject",R,C),$&&Un(y,null,k,"created"),wt(x,y,y.scopeId,R,k),L){for(const Z in L)Z==="value"||Pi(Z)||i(x,Z,null,L[Z],S,y.children,k,I,Gt);"value"in L&&i(x,"value",null,L.value),(T=L.onVnodeBeforeMount)&&$e(T,k,y)}$&&Un(y,null,k,"beforeMount");const W=(!I||I&&!I.pendingBranch)&&B&&!B.persisted;W&&B.beforeEnter(x),s(x,v,b),((T=L&&L.onVnodeMounted)||W||$)&&me(()=>{T&&$e(T,k,y),W&&B.enter(x),$&&Un(y,null,k,"mounted")},I)},wt=(y,v,b,k,I)=>{if(b&&w(y,b),k)for(let S=0;S<k.length;S++)w(y,k[S]);if(I&&v===I.subTree){const S=I.vnode;wt(y,S,S.scopeId,S.slotScopeIds,I.parent)}},It=(y,v,b,k,I,S,R,C,x=0)=>{for(let T=x;T<y.length;T++){const F=y[T]=C?yn(y[T]):qe(y[T]);_(null,F,v,b,k,I,S,R,C)}},we=(y,v,b,k,I,S,R)=>{const C=v.el=y.el;let{patchFlag:x,dynamicChildren:T,dirs:F}=v;x|=16&y.patchFlag;const L=y.props||mt,U=v.props||mt;let B;b&&Bn(b,!1),(B=U.onVnodeBeforeUpdate)&&$e(B,b,v,y),F&&Un(v,y,b,"beforeUpdate"),b&&Bn(b,!0);const $=I&&v.type!=="foreignObject";if(T?Ot(y.dynamicChildren,T,C,b,k,$,S):R||ve(y,v,C,null,b,k,$,S,!1),x>0){if(16&x)Ie(C,v,L,U,b,k,I);else if(2&x&&L.class!==U.class&&i(C,"class",null,U.class,I),4&x&&i(C,"style",L.style,U.style,I),8&x){const W=v.dynamicProps;for(let Z=0;Z<W.length;Z++){const V=W[Z],Mt=L[V],$t=U[V];$t===Mt&&V!=="value"||i(C,V,Mt,$t,I,y.children,b,k,Gt)}}1&x&&y.children!==v.children&&d(C,v.children)}else R||T!=null||Ie(C,v,L,U,b,k,I);((B=U.onVnodeUpdated)||F)&&me(()=>{B&&$e(B,b,v,y),F&&Un(v,y,b,"updated")},k)},Ot=(y,v,b,k,I,S,R)=>{for(let C=0;C<v.length;C++){const x=y[C],T=v[C],F=x.el&&(x.type===xe||!cr(x,T)||70&x.shapeFlag)?p(x.el):b;_(x,T,F,null,k,I,S,R,!0)}},Ie=(y,v,b,k,I,S,R)=>{if(b!==k){if(b!==mt)for(const C in b)Pi(C)||C in k||i(y,C,b[C],null,R,v.children,I,S,Gt);for(const C in k){if(Pi(C))continue;const x=k[C],T=b[C];x!==T&&C!=="value"&&i(y,C,T,x,R,v.children,I,S,Gt)}"value"in k&&i(y,"value",b.value,k.value)}},St=(y,v,b,k,I,S,R,C,x)=>{const T=v.el=y?y.el:a(""),F=v.anchor=y?y.anchor:a("");let{patchFlag:L,dynamicChildren:U,slotScopeIds:B}=v;B&&(C=C?C.concat(B):B),y==null?(s(T,b,k),s(F,b,k),It(v.children,b,F,I,S,R,C,x)):L>0&&64&L&&U&&y.dynamicChildren?(Ot(y.dynamicChildren,U,b,I,S,R,C),(v.key!=null||I&&v===I.subTree)&&Ff(y,v,!0)):ve(y,v,b,F,I,S,R,C,x)},de=(y,v,b,k,I,S,R,C,x)=>{v.slotScopeIds=C,y==null?512&v.shapeFlag?I.ctx.activate(v,b,k,R,x):Te(v,b,k,I,S,R,x):Kt(y,v,x)},Te=(y,v,b,k,I,S,R)=>{const C=y.component=function(x,T,F){const L=x.type,U=(T?T.appContext:x.appContext)||b0,B={uid:E0++,vnode:x,type:L,parent:T,appContext:U,root:null,next:null,subTree:null,effect:null,update:null,scope:new bv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:T?T.provides:Object.create(U.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Rf(L,U),emitsOptions:Tf(L,U),emit:null,emitted:null,propsDefaults:mt,inheritAttrs:L.inheritAttrs,ctx:mt,data:mt,props:mt,attrs:mt,slots:mt,refs:mt,setupState:mt,setupContext:null,suspense:F,suspenseId:F?F.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return B.ctx={_:B},B.root=T?T.root:B,B.emit=qv.bind(null,B),x.ce&&x.ce(B),B}(y,k,I);if(Sf(y)&&(C.ctx.renderer=Pn),function(x,T=!1){Mr=T;const{props:F,children:L}=x.vnode,U=Bf(x);h0(x,F,U,T),f0(x,L);const B=U?function($,W){const Z=$.type;$.accessCache=Object.create(null),$.proxy=pf(new Proxy($.ctx,c0));const{setup:V}=Z;if(V){const Mt=$.setupContext=V.length>1?function(Tt){const Se=ct=>{Tt.exposed=ct||{}};let Mn;return{get attrs(){return Mn||(Mn=function(ct){return new Proxy(ct.attrs,{get:(Ft,At)=>(ye(ct,0,"$attrs"),Ft[At])})}(Tt))},slots:Tt.slots,emit:Tt.emit,expose:Se}}($):null;Bs($),Ms();const $t=kn(V,$,0,[$.props,Mt]);if(Fs(),Xn(),Jd($t)){if($t.then(Xn,Xn),W)return $t.then(Tt=>{ah($,Tt,W)}).catch(Tt=>{Vo(Tt,$,0)});$.asyncDep=$t}else ah($,$t,W)}else jf($,W)}(x,T):void 0;Mr=!1}(C),C.asyncDep){if(I&&I.registerDep(C,it),!y.el){const x=C.subTree=sn(ss);O(null,x,v,b)}}else it(C,y,v,b,I,S,R)},Kt=(y,v,b)=>{const k=v.component=y.component;if(function(I,S,R){const{props:C,children:x,component:T}=I,{props:F,children:L,patchFlag:U}=S,B=T.emitsOptions;if(S.dirs||S.transition)return!0;if(!(R&&U>=0))return!(!x&&!L||L&&L.$stable)||C!==F&&(C?!F||Ju(C,F,B):!!F);if(1024&U)return!0;if(16&U)return C?Ju(C,F,B):!!F;if(8&U){const $=S.dynamicProps;for(let W=0;W<$.length;W++){const Z=$[W];if(F[Z]!==C[Z]&&!Zi(B,Z))return!0}}return!1}(y,v,b)){if(k.asyncDep&&!k.asyncResolved)return void ot(k,v,b);k.next=v,function(I){const S=Xt.indexOf(I);S>ze&&Xt.splice(S,1)}(k.update),k.update()}else v.el=y.el,k.vnode=v},it=(y,v,b,k,I,S,R)=>{const C=()=>{if(y.isMounted){let F,{next:L,bu:U,u:B,parent:$,vnode:W}=y,Z=L;Bn(y,!1),L?(L.el=W.el,ot(y,L,R)):L=W,U&&Li(U),(F=L.props&&L.props.onVnodeBeforeUpdate)&&$e(F,$,L,W),Bn(y,!0);const V=Ta(y),Mt=y.subTree;y.subTree=V,_(Mt,V,p(Mt.el),Lt(Mt),y,I,S),L.el=V.el,Z===null&&function({vnode:$t,parent:Tt},Se){for(;Tt&&Tt.subTree===$t;)($t=Tt.vnode).el=Se,Tt=Tt.parent}(y,V.el),B&&me(B,I),(F=L.props&&L.props.onVnodeUpdated)&&me(()=>$e(F,$,L,W),I)}else{let F;const{el:L,props:U}=v,{bm:B,m:$,parent:W}=y,Z=Mi(v);if(Bn(y,!1),B&&Li(B),!Z&&(F=U&&U.onVnodeBeforeMount)&&$e(F,W,v),Bn(y,!0),L&&Ln){const V=()=>{y.subTree=Ta(y),Ln(L,y.subTree,y,I,null)};Z?v.type.__asyncLoader().then(()=>!y.isUnmounted&&V()):V()}else{const V=y.subTree=Ta(y);_(null,V,b,k,y,I,S),v.el=V.el}if($&&me($,I),!Z&&(F=U&&U.onVnodeMounted)){const V=v;me(()=>$e(F,W,V),I)}(256&v.shapeFlag||W&&Mi(W.vnode)&&256&W.vnode.shapeFlag)&&y.a&&me(y.a,I),y.isMounted=!0,v=b=k=null}},x=y.effect=new Yc(C,()=>rl(T),y.scope),T=y.update=()=>x.run();T.id=y.uid,Bn(y,!0),T()},ot=(y,v,b)=>{v.component=y;const k=y.vnode.props;y.vnode=v,y.next=null,function(I,S,R,C){const{props:x,attrs:T,vnode:{patchFlag:F}}=I,L=ht(x),[U]=I.propsOptions;let B=!1;if(!(C||F>0)||16&F){let $;Df(I,S,x,T)&&(B=!0);for(const W in L)S&&(lt(S,W)||($=Xs(W))!==W&&lt(S,$))||(U?!R||R[W]===void 0&&R[$]===void 0||(x[W]=sc(U,L,W,void 0,I,!0)):delete x[W]);if(T!==L)for(const W in T)S&&lt(S,W)||(delete T[W],B=!0)}else if(8&F){const $=I.vnode.dynamicProps;for(let W=0;W<$.length;W++){let Z=$[W];if(Zi(I.emitsOptions,Z))continue;const V=S[Z];if(U)if(lt(T,Z))V!==T[Z]&&(T[Z]=V,B=!0);else{const Mt=Ls(Z);x[Mt]=sc(U,L,Mt,V,I,!1)}else V!==T[Z]&&(T[Z]=V,B=!0)}}B&&on(I,"set","$attrs")}(y,v.props,k,b),p0(y,v.children,b),Ms(),Xu(),Fs()},ve=(y,v,b,k,I,S,R,C,x=!1)=>{const T=y&&y.children,F=y?y.shapeFlag:0,L=v.children,{patchFlag:U,shapeFlag:B}=v;if(U>0){if(128&U)return void ie(T,L,b,k,I,S,R,C,x);if(256&U)return void Fe(T,L,b,k,I,S,R,C,x)}8&B?(16&F&&Gt(T,I,S),L!==T&&d(b,L)):16&F?16&B?ie(T,L,b,k,I,S,R,C,x):Gt(T,I,S,!0):(8&F&&d(b,""),16&B&&It(L,b,k,I,S,R,C,x))},Fe=(y,v,b,k,I,S,R,C,x)=>{v=v||ks;const T=(y=y||ks).length,F=v.length,L=Math.min(T,F);let U;for(U=0;U<L;U++){const B=v[U]=x?yn(v[U]):qe(v[U]);_(y[U],B,b,null,I,S,R,C,x)}T>F?Gt(y,I,S,!0,!1,L):It(v,b,k,I,S,R,C,x,L)},ie=(y,v,b,k,I,S,R,C,x)=>{let T=0;const F=v.length;let L=y.length-1,U=F-1;for(;T<=L&&T<=U;){const B=y[T],$=v[T]=x?yn(v[T]):qe(v[T]);if(!cr(B,$))break;_(B,$,b,null,I,S,R,C,x),T++}for(;T<=L&&T<=U;){const B=y[L],$=v[U]=x?yn(v[U]):qe(v[U]);if(!cr(B,$))break;_(B,$,b,null,I,S,R,C,x),L--,U--}if(T>L){if(T<=U){const B=U+1,$=B<F?v[B].el:k;for(;T<=U;)_(null,v[T]=x?yn(v[T]):qe(v[T]),b,$,I,S,R,C,x),T++}}else if(T>U)for(;T<=L;)Pt(y[T],I,S,!0),T++;else{const B=T,$=T,W=new Map;for(T=$;T<=U;T++){const ct=v[T]=x?yn(v[T]):qe(v[T]);ct.key!=null&&W.set(ct.key,T)}let Z,V=0;const Mt=U-$+1;let $t=!1,Tt=0;const Se=new Array(Mt);for(T=0;T<Mt;T++)Se[T]=0;for(T=B;T<=L;T++){const ct=y[T];if(V>=Mt){Pt(ct,I,S,!0);continue}let Ft;if(ct.key!=null)Ft=W.get(ct.key);else for(Z=$;Z<=U;Z++)if(Se[Z-$]===0&&cr(ct,v[Z])){Ft=Z;break}Ft===void 0?Pt(ct,I,S,!0):(Se[Ft-$]=T+1,Ft>=Tt?Tt=Ft:$t=!0,_(ct,v[Ft],b,null,I,S,R,C,x),V++)}const Mn=$t?function(ct){const Ft=ct.slice(),At=[0];let Ue,rr,fe,ke,fs;const ua=ct.length;for(Ue=0;Ue<ua;Ue++){const Ve=ct[Ue];if(Ve!==0){if(rr=At[At.length-1],ct[rr]<Ve){Ft[Ue]=rr,At.push(Ue);continue}for(fe=0,ke=At.length-1;fe<ke;)fs=fe+ke>>1,ct[At[fs]]<Ve?fe=fs+1:ke=fs;Ve<ct[At[fe]]&&(fe>0&&(Ft[Ue]=At[fe-1]),At[fe]=Ue)}}for(fe=At.length,ke=At[fe-1];fe-- >0;)At[fe]=ke,ke=Ft[ke];return At}(Se):ks;for(Z=Mn.length-1,T=Mt-1;T>=0;T--){const ct=$+T,Ft=v[ct],At=ct+1<F?v[ct+1].el:k;Se[T]===0?_(null,Ft,b,At,I,S,R,C,x):$t&&(Z<0||T!==Mn[Z]?oe(Ft,b,At,2):Z--)}}},oe=(y,v,b,k,I=null)=>{const{el:S,type:R,transition:C,children:x,shapeFlag:T}=y;if(6&T)return void oe(y.component.subTree,v,b,k);if(128&T)return void y.suspense.move(v,b,k);if(64&T)return void R.move(y,v,b,Pn);if(R===xe){s(S,v,b);for(let F=0;F<x.length;F++)oe(x[F],v,b,k);return void s(y.anchor,v,b)}if(R===Ca)return void P(y,v,b);if(k!==2&&1&T&&C)if(k===0)C.beforeEnter(S),s(S,v,b),me(()=>C.enter(S),I);else{const{leave:F,delayLeave:L,afterLeave:U}=C,B=()=>s(S,v,b),$=()=>{F(S,()=>{B(),U&&U()})};L?L(S,B,$):$()}else s(S,v,b)},Pt=(y,v,b,k=!1,I=!1)=>{const{type:S,props:R,ref:C,children:x,dynamicChildren:T,shapeFlag:F,patchFlag:L,dirs:U}=y;if(C!=null&&rc(C,null,b,y,!0),256&F)return void v.ctx.deactivate(y);const B=1&F&&U,$=!Mi(y);let W;if($&&(W=R&&R.onVnodeBeforeUnmount)&&$e(W,v,y),6&F)la(y.component,b,k);else{if(128&F)return void y.suspense.unmount(b,k);B&&Un(y,null,v,"beforeUnmount"),64&F?y.type.remove(y,v,b,I,Pn,k):T&&(S!==xe||L>0&&64&L)?Gt(T,v,b,!1,!0):(S===xe&&384&L||!I&&16&F)&&Gt(x,v,b),k&&pn(y)}($&&(W=R&&R.onVnodeUnmounted)||B)&&me(()=>{W&&$e(W,v,y),B&&Un(y,null,v,"unmounted")},b)},pn=y=>{const{type:v,el:b,anchor:k,transition:I}=y;if(v===xe)return void ds(b,k);if(v===Ca)return void j(y);const S=()=>{r(b),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(1&y.shapeFlag&&I&&!I.persisted){const{leave:R,delayLeave:C}=I,x=()=>R(b,S);C?C(y.el,S,x):x()}else S()},ds=(y,v)=>{let b;for(;y!==v;)b=g(y),r(y),y=b;r(v)},la=(y,v,b)=>{const{bum:k,scope:I,update:S,subTree:R,um:C}=y;k&&Li(k),I.stop(),S&&(S.active=!1,Pt(R,y,v,b)),C&&me(C,v),me(()=>{y.isUnmounted=!0},v),v&&v.pendingBranch&&!v.isUnmounted&&y.asyncDep&&!y.asyncResolved&&y.suspenseId===v.pendingId&&(v.deps--,v.deps===0&&v.resolve())},Gt=(y,v,b,k=!1,I=!1,S=0)=>{for(let R=S;R<y.length;R++)Pt(y[R],v,b,k,I)},Lt=y=>6&y.shapeFlag?Lt(y.component.subTree):128&y.shapeFlag?y.suspense.next():g(y.anchor||y.el),_e=(y,v,b)=>{y==null?v._vnode&&Pt(v._vnode,null,null,!0):_(v._vnode||null,y,v,null,null,null,b),Xu(),Ef(),v._vnode=y},Pn={p:_,um:Pt,m:oe,r:pn,mt:Te,mc:It,pc:ve,pbc:Ot,n:Lt,o:t};let Wt,Ln;return n&&([Wt,Ln]=n(Pn)),{render:_e,hydrate:Wt,createApp:g0(_e,Wt)}}(e)}function Bn({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Ff(e,t,n=!1){const s=e.children,r=t.children;if(tt(s)&&tt(r))for(let i=0;i<s.length;i++){const o=s[i];let a=r[i];1&a.shapeFlag&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[i]=yn(r[i]),a.el=o.el),n||Ff(o,a)),a.type===jo&&(a.el=o.el)}}const xe=Symbol(void 0),jo=Symbol(void 0),ss=Symbol(void 0),Ca=Symbol(void 0),Ir=[];let Oe=null;function Ne(e=!1){Ir.push(Oe=e?null:[])}let Lr=1;function ih(e){Lr+=e}function Uf(e){return e.dynamicChildren=Lr>0?Oe||ks:null,Ir.pop(),Oe=Ir[Ir.length-1]||null,Lr>0&&Oe&&Oe.push(e),e}function Tn(e,t,n,s,r,i){return Uf(Zt(e,t,n,s,r,i,!0))}function ic(e,t,n,s,r){return Uf(sn(e,t,n,s,r,!0))}function cr(e,t){return e.type===t.type&&e.key===t.key}const $o="__vInternal",Vf=({key:e})=>e??null,Fi=({ref:e,ref_key:t,ref_for:n})=>e!=null?xt(e)||ee(e)||st(e)?{i:Re,r:e,k:t,f:!!n}:e:null;function Zt(e,t=null,n=null,s=0,r=null,i=e===xe?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Vf(t),ref:t&&Fi(t),scopeId:_f,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:s,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:Re};return a?(cl(l,n),128&i&&e.normalize(l)):n&&(l.shapeFlag|=xt(n)?8:16),Lr>0&&!o&&Oe&&(l.patchFlag>0||6&i)&&l.patchFlag!==32&&Oe.push(l),l}const sn=function(e,t=null,n=null,s=0,r=null,i=!1){if(e&&e!==o0||(e=ss),o=e,o&&o.__v_isVNode===!0){const l=Vs(e,t,!0);return n&&cl(l,n),Lr>0&&!i&&Oe&&(6&l.shapeFlag?Oe[Oe.indexOf(e)]=l:Oe.push(l)),l.patchFlag|=-2,l}var o;if(function(l){return st(l)&&"__vccOpts"in l}(e)&&(e=e.__vccOpts),t){t=function(d){return d?Yu(d)||$o in d?ue({},d):d:null}(t);let{class:l,style:h}=t;l&&!xt(l)&&(t.class=Po(l)),bt(h)&&(Yu(h)&&!tt(h)&&(h=ue({},h)),t.style=zc(h))}const a=xt(e)?1:(l=>l.__isSuspense)(e)?128:(l=>l.__isTeleport)(e)?64:bt(e)?4:st(e)?2:0;return Zt(e,t,n,s,r,a,i,!0)};function Vs(e,t,n=!1){const{props:s,ref:r,patchFlag:i,children:o}=e,a=t?function(...l){const h={};for(let d=0;d<l.length;d++){const p=l[d];for(const g in p)if(g==="class")h.class!==p.class&&(h.class=Po([h.class,p.class]));else if(g==="style")h.style=zc([h.style,p.style]);else if(Lo(g)){const w=h[g],E=p[g];!E||w===E||tt(w)&&w.includes(E)||(h[g]=w?[].concat(w,E):E)}else g!==""&&(h[g]=p[g])}return h}(s||{},t):s;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:a,key:a&&Vf(a),ref:t&&t.ref?n&&r?tt(r)?r.concat(Fi(t)):[r,Fi(t)]:Fi(t):r,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==xe?i===-1?16:16|i:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Vs(e.ssContent),ssFallback:e.ssFallback&&Vs(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function w0(e=" ",t=0){return sn(jo,null,e,t)}function v0(e="",t=!1){return t?(Ne(),ic(ss,null,e)):sn(ss,null,e)}function qe(e){return e==null||typeof e=="boolean"?sn(ss):tt(e)?sn(xe,null,e.slice()):typeof e=="object"?yn(e):sn(jo,null,String(e))}function yn(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Vs(e)}function cl(e,t){let n=0;const{shapeFlag:s}=e;if(t==null)t=null;else if(tt(t))n=16;else if(typeof t=="object"){if(65&s){const r=t.default;return void(r&&(r._c&&(r._d=!1),cl(e,r()),r._c&&(r._d=!0)))}{n=32;const r=t._;r||$o in t?r===3&&Re&&(Re.slots._===1?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=Re}}else st(t)?(t={default:t,_ctx:Re},n=32):(t=String(t),64&s?(n=16,t=[w0(t)]):n=8);e.children=t,e.shapeFlag|=n}function $e(e,t,n,s=null){Le(e,t,7,[n,s])}const b0=Mf();let E0=0,jt=null;const Bs=e=>{jt=e,e.scope.on()},Xn=()=>{jt&&jt.scope.off(),jt=null};function Bf(e){return 4&e.vnode.shapeFlag}let oh,Mr=!1;function ah(e,t,n){st(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:bt(t)&&(e.setupState=yf(t)),jf(e,n)}function jf(e,t,n){const s=e.type;if(!e.render){if(!t&&oh&&!s.render){const r=s.template||ol(e).template;if(r){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:a,compilerOptions:l}=s,h=ue(ue({isCustomElement:i,delimiters:a},o),l);s.render=oh(r,h)}}e.render=s.render||Ke}Bs(e),Ms(),l0(e),Fs(),Xn()}function qo(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(yf(pf(e.exposed)),{get:(t,n)=>n in t?t[n]:n in Er?Er[n](e):void 0,has:(t,n)=>n in t||n in Er}))}const I0=(e,t)=>function(n,s,r=!1){let i,o;const a=st(n);return a?(i=n,o=Ke):(i=n.get,o=n.set),new Bv(i,o,a||!o,r)}(e,0,Mr),T0=Symbol(""),_0=()=>br(T0),k0="3.2.47",Hn=typeof document<"u"?document:null,ch=Hn&&Hn.createElement("template"),C0={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,s)=>{const r=t?Hn.createElementNS("http://www.w3.org/2000/svg",e):Hn.createElement(e,n?{is:n}:void 0);return e==="select"&&s&&s.multiple!=null&&r.setAttribute("multiple",s.multiple),r},createText:e=>Hn.createTextNode(e),createComment:e=>Hn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Hn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,s,r,i){const o=n?n.previousSibling:t.lastChild;if(r&&(r===i||r.nextSibling))for(;t.insertBefore(r.cloneNode(!0),n),r!==i&&(r=r.nextSibling););else{ch.innerHTML=s?`<svg>${e}</svg>`:e;const a=ch.content;if(s){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}},lh=/\s*!important$/;function oc(e,t,n){if(tt(n))n.forEach(s=>oc(e,t,s));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const s=function(r,i){const o=Sa[i];if(o)return o;let a=Ls(i);if(a!=="filter"&&a in r)return Sa[i]=a;a=ef(a);for(let l=0;l<uh.length;l++){const h=uh[l]+a;if(h in r)return Sa[i]=h}return i}(e,t);lh.test(n)?e.setProperty(Xs(s),n.replace(lh,""),"important"):e[s]=n}}const uh=["Webkit","Moz","ms"],Sa={},hh="http://www.w3.org/1999/xlink";function bs(e,t,n,s){e.addEventListener(t,n,s)}function S0(e,t,n,s,r=null){const i=e._vei||(e._vei={}),o=i[t];if(s&&o)o.value=s;else{const[a,l]=function(h){let d;if(dh.test(h)){let g;for(d={};g=h.match(dh);)h=h.slice(0,h.length-g[0].length),d[g[0].toLowerCase()]=!0}return[h[2]===":"?h.slice(3):Xs(h.slice(2)),d]}(t);if(s){const h=i[t]=function(d,p){const g=w=>{if(w._vts){if(w._vts<=g.attached)return}else w._vts=Date.now();Le(function(E,_){if(tt(_)){const M=E.stopImmediatePropagation;return E.stopImmediatePropagation=()=>{M.call(E),E._stopped=!0},_.map(O=>H=>!H._stopped&&O&&O(H))}return _}(w,g.value),p,5,[w])};return g.value=d,g.attached=x0(),g}(s,r);bs(e,a,h,l)}else o&&(function(h,d,p,g){h.removeEventListener(d,p,g)}(e,a,o,l),i[t]=void 0)}}const dh=/(?:Once|Passive|Capture)$/;let Aa=0;const A0=Promise.resolve(),x0=()=>Aa||(A0.then(()=>Aa=0),Aa=Date.now()),fh=/^on[a-z]/,ph=e=>{const t=e.props["onUpdate:modelValue"]||!1;return tt(t)?n=>Li(t,n):t};function N0(e){e.target.composing=!0}function mh(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const D0={created(e,{modifiers:{lazy:t,trim:n,number:s}},r){e._assign=ph(r);const i=s||r.props&&r.props.type==="number";bs(e,t?"change":"input",o=>{if(o.target.composing)return;let a=e.value;n&&(a=a.trim()),i&&(a=Wa(a)),e._assign(a)}),n&&bs(e,"change",()=>{e.value=e.value.trim()}),t||(bs(e,"compositionstart",N0),bs(e,"compositionend",mh),bs(e,"change",mh))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:s,number:r}},i){if(e._assign=ph(i),e.composing||document.activeElement===e&&e.type!=="range"&&(n||s&&e.value.trim()===t||(r||e.type==="number")&&Wa(e.value)===t))return;const o=t??"";e.value!==o&&(e.value=o)}},R0=["ctrl","shift","alt","meta"],O0={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>R0.some(n=>e[`${n}Key`]&&!t.includes(n))},P0=(e,t)=>(n,...s)=>{for(let r=0;r<t.length;r++){const i=O0[t[r]];if(i&&i(n,t))return}return e(n,...s)},L0=ue({patchProp:(e,t,n,s,r=!1,i,o,a,l)=>{t==="class"?function(h,d,p){const g=h._vtc;g&&(d=(d?[d,...g]:[...g]).join(" ")),d==null?h.removeAttribute("class"):p?h.setAttribute("class",d):h.className=d}(e,s,r):t==="style"?function(h,d,p){const g=h.style,w=xt(p);if(p&&!w){if(d&&!xt(d))for(const E in d)p[E]==null&&oc(g,E,"");for(const E in p)oc(g,E,p[E])}else{const E=g.display;w?d!==p&&(g.cssText=p):d&&h.removeAttribute("style"),"_vod"in h&&(g.display=E)}}(e,n,s):Lo(t)?Hc(t)||S0(e,t,0,s,o):(t[0]==="."?(t=t.slice(1),1):t[0]==="^"?(t=t.slice(1),0):function(h,d,p,g){return g?d==="innerHTML"||d==="textContent"||!!(d in h&&fh.test(d)&&st(p)):d==="spellcheck"||d==="draggable"||d==="translate"||d==="form"||d==="list"&&h.tagName==="INPUT"||d==="type"&&h.tagName==="TEXTAREA"||fh.test(d)&&xt(p)?!1:d in h}(e,t,s,r))?function(h,d,p,g,w,E,_){if(d==="innerHTML"||d==="textContent")return g&&_(g,w,E),void(h[d]=p??"");if(d==="value"&&h.tagName!=="PROGRESS"&&!h.tagName.includes("-")){h._value=p;const O=p??"";return h.value===O&&h.tagName!=="OPTION"||(h.value=O),void(p==null&&h.removeAttribute(d))}let M=!1;if(p===""||p==null){const O=typeof h[d];O==="boolean"?p=ju(p):p==null&&O==="string"?(p="",M=!0):O==="number"&&(p=0,M=!0)}try{h[d]=p}catch{}M&&h.removeAttribute(d)}(e,t,s,i,o,a,l):(t==="true-value"?e._trueValue=s:t==="false-value"&&(e._falseValue=s),function(h,d,p,g,w){if(g&&d.startsWith("xlink:"))p==null?h.removeAttributeNS(hh,d.slice(6,d.length)):h.setAttributeNS(hh,d,p);else{const E=dv(d);p==null||E&&!ju(p)?h.removeAttribute(d):h.setAttribute(d,E?"":p)}}(e,t,s,r))}},C0);let gh;const $f=function(e){const t=[];let n=0;for(let s=0;s<e.length;s++){let r=e.charCodeAt(s);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):(64512&r)==55296&&s+1<e.length&&(64512&e.charCodeAt(s+1))==56320?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++s)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},qf={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let r=0;r<e.length;r+=3){const i=e[r],o=r+1<e.length,a=o?e[r+1]:0,l=r+2<e.length,h=l?e[r+2]:0,d=i>>2,p=(3&i)<<4|a>>4;let g=(15&a)<<2|h>>6,w=63&h;l||(w=64,o||(g=64)),s.push(n[d],n[p],n[g],n[w])}return s.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($f(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):function(n){const s=[];let r=0,i=0;for(;r<n.length;){const o=n[r++];if(o<128)s[i++]=String.fromCharCode(o);else if(o>191&&o<224){const a=n[r++];s[i++]=String.fromCharCode((31&o)<<6|63&a)}else if(o>239&&o<365){const a=((7&o)<<18|(63&n[r++])<<12|(63&n[r++])<<6|63&n[r++])-65536;s[i++]=String.fromCharCode(55296+(a>>10)),s[i++]=String.fromCharCode(56320+(1023&a))}else{const a=n[r++],l=n[r++];s[i++]=String.fromCharCode((15&o)<<12|(63&a)<<6|63&l)}}return s.join("")}(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let r=0;r<e.length;){const i=n[e.charAt(r++)],o=r<e.length?n[e.charAt(r)]:0;++r;const a=r<e.length?n[e.charAt(r)]:64;++r;const l=r<e.length?n[e.charAt(r)]:64;if(++r,i==null||o==null||a==null||l==null)throw new M0;const h=i<<2|o>>4;if(s.push(h),a!==64){const d=o<<4&240|a>>2;if(s.push(d),l!==64){const p=a<<6&192|l;s.push(p)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const no=function(e){return function(t){const n=$f(t);return qf.encodeByteArray(n,!0)}(e).replace(/\./g,"")},zf=function(e){try{return qf.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F0=()=>function(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}().__FIREBASE_DEFAULTS__,ll=()=>{try{return F0()||(()=>{if(typeof process>"u"||process.env===void 0)return;const e={}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0})()||(()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&zf(e[1]);return t&&JSON.parse(t)})()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},Hf=e=>{var t,n;return(n=(t=ll())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},U0=()=>{var e;return(e=ll())===null||e===void 0?void 0:e.config},Kf=e=>{var t;return(t=ll())===null||t===void 0?void 0:t[`_${e}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}class fn extends Error{constructor(t,n,s){super(n),this.code=t,this.customData=s,this.name="FirebaseError",Object.setPrototypeOf(this,fn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Xr.prototype.create)}}class Xr{constructor(t,n,s){this.service=t,this.serviceName=n,this.errors=s}create(t,...n){const s=n[0]||{},r=`${this.service}/${t}`,i=this.errors[t],o=i?function(l,h){return l.replace(B0,(d,p)=>{const g=h[p];return g!=null?String(g):`<${p}?>`})}(i,s):"Error",a=`${this.serviceName}: ${o} (${r}).`;return new fn(r,a,s)}}const B0=/\{\$([^}]+)}/g;function so(e,t){if(e===t)return!0;const n=Object.keys(e),s=Object.keys(t);for(const r of n){if(!s.includes(r))return!1;const i=e[r],o=t[r];if(yh(i)&&yh(o)){if(!so(i,o))return!1}else if(i!==o)return!1}for(const r of s)if(!n.includes(r))return!1;return!0}function yh(e){return e!==null&&typeof e=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(e){const t=[];for(const[n,s]of Object.entries(e))Array.isArray(s)?s.forEach(r=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(r))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return t.length?"&"+t.join("&"):""}class j0{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(s=>{this.error(s)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,s){let r;if(t===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");r=function(o,a){if(typeof o!="object"||o===null)return!1;for(const l of a)if(l in o&&typeof o[l]=="function")return!0;return!1}(t,["next","error","complete"])?t:{next:t,error:n,complete:s},r.next===void 0&&(r.next=xa),r.error===void 0&&(r.error=xa),r.complete===void 0&&(r.complete=xa);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch{}}),this.observers.push(r),i}unsubscribeOne(t){this.observers!==void 0&&this.observers[t]!==void 0&&(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function xa(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(e){return e&&e._delegate?e._delegate:e}class rs{constructor(t,n,s){this.name=t,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $0{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const s=new V0;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const r=this.getOrInitializeService({instanceIdentifier:n});r&&s.resolve(r)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const s=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),r=(n=t==null?void 0:t.optional)!==null&&n!==void 0&&n;if(!this.isInitialized(s)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:s})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,this.shouldAutoInitialize()){if(function(n){return n.instantiationMode==="EAGER"}(t))try{this.getOrInitializeService({instanceIdentifier:jn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(n);try{const i=this.getOrInitializeService({instanceIdentifier:r});s.resolve(i)}catch{}}}}clearInstance(t=jn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=jn){return this.instances.has(t)}getOptions(t=jn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,s=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[i,o]of this.instancesDeferred.entries())s===this.normalizeInstanceIdentifier(i)&&o.resolve(r);return r}onInit(t,n){var s;const r=this.normalizeInstanceIdentifier(n),i=(s=this.onInitCallbacks.get(r))!==null&&s!==void 0?s:new Set;i.add(t),this.onInitCallbacks.set(r,i);const o=this.instances.get(r);return o&&t(o,r),()=>{i.delete(t)}}invokeOnInitCallbacks(t,n){const s=this.onInitCallbacks.get(n);if(s)for(const r of s)try{r(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let s=this.instances.get(t);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(r=t,r===jn?void 0:r),options:n}),this.instances.set(t,s),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(s,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,s)}catch{}var r;return s||null}normalizeInstanceIdentifier(t=jn){return this.component?this.component.multipleInstances?t:jn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}class q0{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new $0(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ut;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ut||(ut={}));const z0={debug:ut.DEBUG,verbose:ut.VERBOSE,info:ut.INFO,warn:ut.WARN,error:ut.ERROR,silent:ut.SILENT},H0=ut.INFO,K0={[ut.DEBUG]:"log",[ut.VERBOSE]:"log",[ut.INFO]:"info",[ut.WARN]:"warn",[ut.ERROR]:"error"},G0=(e,t,...n)=>{if(t<e.logLevel)return;const s=new Date().toISOString(),r=K0[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${s}]  ${e.name}:`,...n)};class ul{constructor(t){this.name=t,this._logLevel=H0,this._logHandler=G0,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ut))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?z0[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ut.DEBUG,...t),this._logHandler(this,ut.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ut.VERBOSE,...t),this._logHandler(this,ut.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ut.INFO,...t),this._logHandler(this,ut.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ut.WARN,...t),this._logHandler(this,ut.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ut.ERROR,...t),this._logHandler(this,ut.ERROR,...t)}}const W0=(e,t)=>t.some(n=>e instanceof n);let wh,vh;const Gf=new WeakMap,ac=new WeakMap,Wf=new WeakMap,Na=new WeakMap,cc=new WeakMap;let lc={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ac.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Wf.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cn(e[t])},set:(e,t,n)=>(e[t]=n,!0),has:(e,t)=>e instanceof IDBTransaction&&(t==="done"||t==="store")||t in e};function Q0(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?(vh||(vh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])).includes(e)?function(...t){return e.apply(Da(this),t),Cn(Gf.get(this))}:function(...t){return Cn(e.apply(Da(this),t))}:function(t,...n){const s=e.call(Da(this),t,...n);return Wf.set(s,t.sort?t.sort():[t]),Cn(s)}}function Y0(e){return typeof e=="function"?Q0(e):(e instanceof IDBTransaction&&function(t){if(ac.has(t))return;const n=new Promise((s,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{s(),i()},a=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});ac.set(t,n)}(e),W0(e,wh||(wh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction]))?new Proxy(e,lc):e)}function Cn(e){if(e instanceof IDBRequest)return function(n){const s=new Promise((r,i)=>{const o=()=>{n.removeEventListener("success",a),n.removeEventListener("error",l)},a=()=>{r(Cn(n.result)),o()},l=()=>{i(n.error),o()};n.addEventListener("success",a),n.addEventListener("error",l)});return s.then(r=>{r instanceof IDBCursor&&Gf.set(r,n)}).catch(()=>{}),cc.set(s,n),s}(e);if(Na.has(e))return Na.get(e);const t=Y0(e);return t!==e&&(Na.set(e,t),cc.set(t,e)),t}const Da=e=>cc.get(e),X0=["get","getKey","getAll","getAllKeys","count"],J0=["put","add","delete","clear"],Ra=new Map;function bh(e,t){if(!(e instanceof IDBDatabase)||t in e||typeof t!="string")return;if(Ra.get(t))return Ra.get(t);const n=t.replace(/FromIndex$/,""),s=t!==n,r=J0.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!r&&!X0.includes(n))return;const i=async function(o,...a){const l=this.transaction(o,r?"readwrite":"readonly");let h=l.store;return s&&(h=h.index(a.shift())),(await Promise.all([h[n](...a),r&&l.done]))[0]};return Ra.set(t,i),i}lc=(e=>({...e,get:(t,n,s)=>bh(t,n)||e.get(t,n,s),has:(t,n)=>!!bh(t,n)||e.has(t,n)}))(lc);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z0{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(n){const s=n.getComponent();return(s==null?void 0:s.type)==="VERSION"}(t)){const n=t.getImmediate();return`${n.library}/${n.version}`}return null}).filter(t=>t).join(" ")}}const uc="@firebase/app",Eh="0.9.8",is=new ul("@firebase/app"),hc="[DEFAULT]",tb={[uc]:"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},ro=new Map,dc=new Map;function eb(e,t){try{e.container.addComponent(t)}catch(n){is.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function js(e){const t=e.name;if(dc.has(t))return is.debug(`There were multiple attempts to register component ${t}.`),!1;dc.set(t,e);for(const n of ro.values())eb(n,e);return!0}function fc(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sn=new Xr("app","Firebase",{"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."});/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{constructor(t,n,s){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new rs("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Sn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Js="9.20.0";function Qf(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const s=Object.assign({name:hc,automaticDataCollectionEnabled:!1},t),r=s.name;if(typeof r!="string"||!r)throw Sn.create("bad-app-name",{appName:String(r)});if(n||(n=U0()),!n)throw Sn.create("no-options");const i=ro.get(r);if(i){if(so(n,i.options)&&so(s,i.config))return i;throw Sn.create("duplicate-app",{appName:r})}const o=new q0(r);for(const l of dc.values())o.addComponent(l);const a=new nb(n,s,o);return ro.set(r,a),a}function Yf(e=hc){const t=ro.get(e);if(!t&&e===hc)return Qf();if(!t)throw Sn.create("no-app",{appName:e});return t}function An(e,t,n){var s;let r=(s=tb[e])!==null&&s!==void 0?s:e;n&&(r+=`-${n}`);const i=r.match(/\s|\//),o=t.match(/\s|\//);if(i||o){const a=[`Unable to register library "${r}" with version "${t}":`];return i&&a.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void is.warn(a.join(" "))}js(new rs(`${r}-version`,()=>({library:r,version:t}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sb="firebase-heartbeat-database",rb=1,Fr="firebase-heartbeat-store";let Oa=null;function Xf(){return Oa||(Oa=function(e,t,{blocked:n,upgrade:s,blocking:r,terminated:i}={}){const o=indexedDB.open(e,t),a=Cn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Cn(o.result),l.oldVersion,l.newVersion,Cn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{i&&l.addEventListener("close",()=>i()),r&&l.addEventListener("versionchange",()=>r())}).catch(()=>{}),a}(sb,rb,{upgrade:(e,t)=>{t===0&&e.createObjectStore(Fr)}}).catch(e=>{throw Sn.create("idb-open",{originalErrorMessage:e.message})})),Oa}async function Ih(e,t){try{const n=(await Xf()).transaction(Fr,"readwrite");return await n.objectStore(Fr).put(t,Jf(e)),n.done}catch(n){if(n instanceof fn)is.warn(n.message);else{const s=Sn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});is.warn(s.message)}}}function Jf(e){return`${e.name}!${e.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new ob(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),n=Th();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some(s=>s.date===n))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=2592e6}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Th(),{heartbeatsToSend:n,unsentEntries:s}=function(i,o=1024){const a=[];let l=i.slice();for(const h of i){const d=a.find(p=>p.agent===h.agent);if(d){if(d.dates.push(h.date),_h(a)>o){d.dates.pop();break}}else if(a.push({agent:h.agent,dates:[h.date]}),_h(a)>o){a.pop();break}l=l.slice(1)}return{heartbeatsToSend:a,unsentEntries:l}}(this._heartbeatsCache.heartbeats),r=no(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function Th(){return new Date().toISOString().substring(0,10)}class ob{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!function(){try{return typeof indexedDB=="object"}catch{return!1}}()&&new Promise((t,n)=>{try{let s=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),s||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{s=!1},i.onerror=()=>{var o;n(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(s){n(s)}}).then(()=>!0).catch(()=>!1)}async read(){return await this._canUseIndexedDBPromise?await async function(n){try{return(await Xf()).transaction(Fr).objectStore(Fr).get(Jf(n))}catch(s){if(s instanceof fn)is.warn(s.message);else{const r=Sn.create("idb-get",{originalErrorMessage:s==null?void 0:s.message});is.warn(r.message)}}}(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ih(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:t.heartbeats})}}async add(t){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Ih(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...t.heartbeats]})}}}function _h(e){return no(JSON.stringify({version:2,heartbeats:e})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var kh;kh="",js(new rs("platform-logger",e=>new Z0(e),"PRIVATE")),js(new rs("heartbeat",e=>new ib(e),"PRIVATE")),An(uc,Eh,kh),An(uc,Eh,"esm2017"),An("fire-js","");function hl(e,t){var n={};for(var s in e)Object.prototype.hasOwnProperty.call(e,s)&&t.indexOf(s)<0&&(n[s]=e[s]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var r=0;for(s=Object.getOwnPropertySymbols(e);r<s.length;r++)t.indexOf(s[r])<0&&Object.prototype.propertyIsEnumerable.call(e,s[r])&&(n[s[r]]=e[s[r]])}return n}function ab(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An("firebase","9.20.0","app");const cb=ab,Zf=new Xr("auth","Firebase",{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}),io=new ul("@firebase/auth");function Ui(e,...t){io.logLevel<=ut.ERROR&&io.error(`Auth (${Js}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(e,...t){throw dl(e,...t)}function We(e,...t){return dl(e,...t)}function tp(e,t,n){const s=Object.assign(Object.assign({},cb()),{[t]:n});return new Xr("auth","Firebase",s).create(t,{appName:e.name})}function dl(e,...t){if(typeof e!="string"){const n=t[0],s=[...t.slice(1)];return s[0]&&(s[0].appName=e.name),e._errorFactory.create(n,...s)}return Zf.create(e,...t)}function Y(e,t,...n){if(!e)throw dl(t,...n)}function tn(e){const t="INTERNAL ASSERTION FAILED: "+e;throw Ui(t),new Error(t)}function an(e,t){e||tn(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function Ch(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lb(){return typeof navigator>"u"||!navigator||!("onLine"in navigator)||typeof navigator.onLine!="boolean"||Ch()!=="http:"&&Ch()!=="https:"&&!function(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}()&&!("connection"in navigator)||navigator.onLine}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(t,n){this.shortDelay=t,this.longDelay=n,an(n>t,"Short delay should be less than long delay!"),this.isMobile=typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(se())||typeof navigator=="object"&&navigator.product==="ReactNative"}get(){return lb()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(e,t){an(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ep{static initialize(t,n,s){this.fetchImpl=t,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){return this.fetchImpl?this.fetchImpl:typeof self<"u"&&"fetch"in self?self.fetch:void tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:typeof self<"u"&&"Headers"in self?self.Headers:void tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:typeof self<"u"&&"Response"in self?self.Response:void tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ub={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"},hb=new Zr(3e4,6e4);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function np(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function ti(e,t,n,s,r={}){return sp(e,r,async()=>{let i={},o={};s&&(t==="GET"?o=s:i={body:JSON.stringify(s)});const a=Jr(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),ep.fetch()(rp(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},i))})}async function sp(e,t,n){e._canInitEmulator=!1;const s=Object.assign(Object.assign({},ub),t);try{const r=new db(e),i=await Promise.race([n(),r.promise]);r.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw Ti(e,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[l,h]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ti(e,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Ti(e,"email-already-in-use",o);if(l==="USER_DISABLED")throw Ti(e,"user-disabled",o);const d=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw tp(e,d,h);Ye(e,d)}}catch(r){if(r instanceof fn)throw r;Ye(e,"network-request-failed",{message:String(r)})}}function rp(e,t,n,s){const r=`${t}${n}?${s}`;return e.config.emulator?fl(e.config,r):`${e.config.apiScheme}://${r}`}class db{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(We(this.auth,"network-request-failed")),hb.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ti(e,t,n){const s={appName:e.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const r=We(e,t,s);return r.customData._tokenResponse=n,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}function Pa(e){return 1e3*Number(e)}function pl(e){const[t,n,s]=e.split(".");if(t===void 0||n===void 0||s===void 0)return Ui("JWT malformed, contained fewer than 3 sections"),null;try{const r=zf(n);return r?JSON.parse(r):(Ui("Failed to decode base64 JWT payload"),null)}catch(r){return Ui("Caught error parsing JWT payload as JSON",r==null?void 0:r.toString()),null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(e,t,n=!1){if(n)return t;try{return await t}catch(s){throw s instanceof fn&&function({code:r}){return r==="auth/user-disabled"||r==="auth/user-token-expired"}(s)&&e.auth.currentUser===e&&await e.auth.signOut(),s}}class fb{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const s=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),s}{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){return void((t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0))}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ip{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Tr(this.lastLoginAt),this.creationTime=Tr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vi(e){var t;const n=e.auth,s=await e.getIdToken(),r=await Ur(e,async function(E,_){return ti(E,"POST","/v1/accounts:lookup",_)}(n,{idToken:s}));Y(r==null?void 0:r.users.length,n,"internal-error");const i=r.users[0];e._notifyReloadListener(i);const o=!((t=i.providerUserInfo)===null||t===void 0)&&t.length?i.providerUserInfo.map(E=>{var{providerId:_}=E,M=hl(E,["providerId"]);return{providerId:_,uid:M.rawId||"",displayName:M.displayName||null,email:M.email||null,phoneNumber:M.phoneNumber||null,photoURL:M.photoUrl||null}}):[],a=(l=e.providerData,h=o,[...l.filter(E=>!h.some(_=>_.providerId===E.providerId)),...h]);var l,h;const d=e.isAnonymous,p=!(e.email&&i.passwordHash||a!=null&&a.length),g=!!d&&p,w={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ip(i.createdAt,i.lastLoginAt),isAnonymous:g};Object.assign(e,w)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){Y(t.idToken,"internal-error"),Y(t.idToken!==void 0,"internal-error"),Y(t.refreshToken!==void 0,"internal-error");const n="expiresIn"in t&&t.expiresIn!==void 0?Number(t.expiresIn):function(s){const r=pl(s);return Y(r,"internal-error"),Y(r.exp!==void 0,"internal-error"),Y(r.iat!==void 0,"internal-error"),Number(r.exp)-Number(r.iat)}(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return Y(!this.accessToken||this.refreshToken,t,"user-token-expired"),n||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:s,refreshToken:r,expiresIn:i}=await async function(o,a){const l=await sp(o,{},async()=>{const h=Jr({grant_type:"refresh_token",refresh_token:a}).slice(1),{tokenApiHost:d,apiKey:p}=o.config,g=rp(o,d,"/v1/token",`key=${p}`),w=await o._getAdditionalHeaders();return w["Content-Type"]="application/x-www-form-urlencoded",ep.fetch()(g,{method:"POST",headers:w,body:h})});return{accessToken:l.access_token,expiresIn:l.expires_in,refreshToken:l.refresh_token}}(t,n);this.updateTokensAndExpiration(s,r,Number(i))}updateTokensAndExpiration(t,n,s){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+1e3*s}static fromJSON(t,n){const{refreshToken:s,accessToken:r,expirationTime:i}=n,o=new Vr;return s&&(Y(typeof s=="string","internal-error",{appName:t}),o.refreshToken=s),r&&(Y(typeof r=="string","internal-error",{appName:t}),o.accessToken=r),i&&(Y(typeof i=="number","internal-error",{appName:t}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Vr,this.toJSON())}_performRefresh(){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(e,t){Y(typeof e=="string"||e===void 0,"internal-error",{appName:t})}class Jn{constructor(t){var{uid:n,auth:s,stsTokenManager:r}=t,i=hl(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fb(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ip(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(t){const n=await Ur(this,this.stsTokenManager.getToken(this.auth,t));return Y(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return async function(n,s=!1){const r=he(n),i=await r.getIdToken(s),o=pl(i);Y(o&&o.exp&&o.auth_time&&o.iat,r.auth,"internal-error");const a=typeof o.firebase=="object"?o.firebase:void 0,l=a==null?void 0:a.sign_in_provider;return{claims:o,token:i,authTime:Tr(Pa(o.auth_time)),issuedAtTime:Tr(Pa(o.iat)),expirationTime:Tr(Pa(o.exp)),signInProvider:l||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}(this,t)}reload(){return async function(t){const n=he(t);await Vi(n),await n.auth._persistUserIfCurrent(n),n.auth._notifyListenersIfCurrent(n)}(this)}_assign(t){this!==t&&(Y(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new Jn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){Y(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let s=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),s=!0),n&&await Vi(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ur(this,async function(n,s){return ti(n,"POST","/v1/accounts:delete",s)}(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var s,r,i,o,a,l,h,d;const p=(s=n.displayName)!==null&&s!==void 0?s:void 0,g=(r=n.email)!==null&&r!==void 0?r:void 0,w=(i=n.phoneNumber)!==null&&i!==void 0?i:void 0,E=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,O=(h=n.createdAt)!==null&&h!==void 0?h:void 0,H=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:P,emailVerified:j,isAnonymous:ft,providerData:pt,stsTokenManager:wt}=n;Y(P&&wt,t,"internal-error");const It=Vr.fromJSON(this.name,wt);Y(typeof P=="string",t,"internal-error"),gn(p,t.name),gn(g,t.name),Y(typeof j=="boolean",t,"internal-error"),Y(typeof ft=="boolean",t,"internal-error"),gn(w,t.name),gn(E,t.name),gn(_,t.name),gn(M,t.name),gn(O,t.name),gn(H,t.name);const we=new Jn({uid:P,auth:t,email:g,emailVerified:j,displayName:p,isAnonymous:ft,photoURL:E,phoneNumber:w,tenantId:_,stsTokenManager:It,createdAt:O,lastLoginAt:H});return pt&&Array.isArray(pt)&&(we.providerData=pt.map(Ot=>Object.assign({},Ot))),M&&(we._redirectEventId=M),we}static async _fromIdTokenResponse(t,n,s=!1){const r=new Vr;r.updateFromServerResponse(n);const i=new Jn({uid:n.localId,auth:t,stsTokenManager:r,isAnonymous:s});return await Vi(i),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sh=new Map;function en(e){an(e instanceof Function,"Expected a class definition");let t=Sh.get(e);return t?(an(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,Sh.set(e,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class op{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}op.type="NONE";const Ah=op;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bi(e,t,n){return`firebase:${e}:${t}:${n}`}class xs{constructor(t,n,s){this.persistence=t,this.auth=n,this.userKey=s;const{config:r,name:i}=this.auth;this.fullUserKey=Bi(this.userKey,r.apiKey,i),this.fullPersistenceKey=Bi("persistence",r.apiKey,i),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?Jn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=t,n?this.setCurrentUser(n):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,s="authUser"){if(!n.length)return new xs(en(Ah),t,s);const r=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let i=r[0]||en(Ah);const o=Bi(s,t.config.apiKey,t.name);let a=null;for(const h of n)try{const d=await h._get(o);if(d){const p=Jn._fromJSON(t,d);h!==i&&(a=p),i=h;break}}catch{}const l=r.filter(h=>h._shouldAllowMigration);return i._shouldAllowMigration&&l.length?(i=l[0],a&&await i._set(o,a.toJSON()),await Promise.all(n.map(async h=>{if(h!==i)try{await h._remove(o)}catch{}})),new xs(i,t,s)):new xs(i,t,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xh(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lp(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ap(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(hp(t))return"Blackberry";if(dp(t))return"Webos";if(ml(t))return"Safari";if((t.includes("chrome/")||cp(t))&&!t.includes("edge/"))return"Chrome";if(up(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=e.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function ap(e=se()){return/firefox\//i.test(e)}function ml(e=se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cp(e=se()){return/crios\//i.test(e)}function lp(e=se()){return/iemobile/i.test(e)}function up(e=se()){return/android/i.test(e)}function hp(e=se()){return/blackberry/i.test(e)}function dp(e=se()){return/webos/i.test(e)}function zo(e=se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function pb(){return function(){const e=se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}()&&document.documentMode===10}function fp(e=se()){return zo(e)||up(e)||dp(e)||hp(e)||/windows phone/i.test(e)||lp(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pp(e,t=[]){let n;switch(e){case"Browser":n=xh(se());break;case"Worker":n=`${xh(se())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Js}/${s}`}async function mp(e,t){return ti(e,"GET","/v2/recaptchaConfig",np(e,t))}function Nh(e){return e!==void 0&&e.enterprise!==void 0}class gp{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yp(e){return new Promise((t,n)=>{const s=document.createElement("script");s.setAttribute("src",e),s.onload=t,s.onerror=r=>{const i=We("internal-error");i.customData=r,n(i)},s.type="text/javascript",s.charset="UTF-8",function(){var r,i;return(i=(r=document.getElementsByTagName("head"))===null||r===void 0?void 0:r[0])!==null&&i!==void 0?i:document}().appendChild(s)})}class mb{constructor(t){this.type="recaptcha-enterprise",this.auth=ei(t)}async verify(t="verify",n=!1){function s(r,i,o){const a=window.grecaptcha;Nh(a)?a.enterprise.ready(()=>{try{a.enterprise.execute(r,{action:t}).then(l=>{i(l)}).catch(l=>{o(l)})}catch(l){o(l)}}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,i)=>{(async function(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(a,l)=>{mp(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(h=>{if(h.recaptchaKey!==void 0){const d=new gp(h);return o.tenantId==null?o._agentRecaptchaConfig=d:o._tenantRecaptchaConfigs[o.tenantId]=d,a(d.siteKey)}l(new Error("recaptcha Enterprise site key undefined"))}).catch(h=>{l(h)})})})(this.auth).then(o=>{if(!n&&Nh(window.grecaptcha))s(o,r,i);else{if(typeof window>"u")return void i(new Error("RecaptchaVerifier is only supported in browser"));yp("https://www.google.com/recaptcha/enterprise.js?render="+o).then(()=>{s(o,r,i)}).catch(a=>{i(a)})}}).catch(o=>{i(o)})})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gb{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const s=i=>new Promise((o,a)=>{try{o(t(i))}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const s of this.queue)await s(t),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const r of n)try{r()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yb{constructor(t,n,s,r){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dh(this),this.idTokenSubscription=new Dh(this),this.beforeStateQueue=new gb(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=en(n)),this._initializationPromise=this.queue(async()=>{var s,r;if(!this._deleted&&(this.persistenceManager=await xs.create(this,t),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();return this.currentUser||t?this.currentUser&&t&&this.currentUser.uid===t.uid?(this._currentUser._assign(t),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(t,!0):void 0}async initializeCurrentUser(t){var n;const s=await this.assertedPersistence.getCurrentUser();let r=s,i=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=r==null?void 0:r._redirectEventId,l=await this.tryRedirectSignIn(t);o&&o!==a||!(l!=null&&l.user)||(r=l.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(o){r=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return Y(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Vi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=function(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?he(t):null;return n&&Y(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&Y(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(en(t))})}async initializeRecaptchaConfig(){const t=await mp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new gp(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new mb(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Xr("auth","Firebase",t())}onAuthStateChanged(t,n,s){return this.registerStateListener(this.authStateSubscription,t,n,s)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,s){return this.registerStateListener(this.idTokenSubscription,t,n,s)}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const s=await this.getOrInitRedirectPersistenceManager(n);return t===null?s.removeCurrentUser():s.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&en(t)||this._popupRedirectResolver;Y(n,this,"argument-error"),this.redirectPersistenceManager=await xs.create(this,[en(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,s,r){if(this._deleted)return()=>{};const i=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Y(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof n=="function"?t.addObserver(n,s,r):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return Y(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){t&&!this.frameworks.includes(t)&&(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const r=await this._getAppCheckToken();return r&&(n["X-Firebase-AppCheck"]=r),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&function(s,...r){io.logLevel<=ut.WARN&&io.warn(`Auth (${Js}): ${s}`,...r)}(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ei(e){return he(e)}class Dh{constructor(t){this.auth=t,this.observer=null,this.addObserver=function(n,s){const r=new j0(n,s);return r.subscribe.bind(r)}(n=>this.observer=n)}get next(){return Y(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wb(e,t,n){const s=ei(e);Y(s._canInitEmulator,s,"emulator-config-failed"),Y(/^https?:\/\//.test(t),s,"invalid-emulator-scheme");const r=!!(n!=null&&n.disableWarnings),i=Rh(t),{host:o,port:a}=function(h){const d=Rh(h),p=/(\/\/)?([^?#/]+)/.exec(h.substr(d.length));if(!p)return{host:"",port:null};const g=p[2].split("@").pop()||"",w=/^(\[[^\]]+\])(:|$)/.exec(g);if(w){const E=w[1];return{host:E,port:Oh(g.substr(E.length+1))}}{const[E,_]=g.split(":");return{host:E,port:Oh(_)}}}(t),l=a===null?"":`:${a}`;s.config.emulator={url:`${i}//${o}${l}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||function(){function h(){const d=document.createElement("p"),p=d.style;d.innerText="Running in emulator mode. Do not use with production credentials.",p.position="fixed",p.width="100%",p.backgroundColor="#ffffff",p.border=".1em solid #000000",p.color="#b50000",p.bottom="0px",p.left="0px",p.margin="0px",p.zIndex="10000",p.textAlign="center",d.classList.add("firebase-emulator-warning"),document.body.appendChild(d)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",h):h())}()}function Rh(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Oh(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}class wp{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return tn("not implemented")}_getIdTokenResponse(t){return tn("not implemented")}_linkToIdToken(t,n){return tn("not implemented")}_getReauthenticationResolver(t){return tn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ns(e,t){return async function(n,s,r,i,o={}){const a=await ti(n,s,r,i,o);return"mfaPendingCredential"in a&&Ye(n,"multi-factor-auth-required",{_serverResponse:a}),a}(e,"POST","/v1/accounts:signInWithIdp",np(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os extends wp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new os(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ye("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:s,signInMethod:r}=n,i=hl(n,["providerId","signInMethod"]);if(!s||!r)return null;const o=new os(s,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(t){return Ns(t,this.buildRequest())}_linkToIdToken(t,n){const s=this.buildRequest();return s.idToken=n,Ns(t,s)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,Ns(t,n)}buildRequest(){const t={requestUri:"http://localhost",returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Jr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni extends gl{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends ni{constructor(){super("facebook.com")}static credential(t){return os._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return vn.credentialFromTaggedObject(t)}static credentialFromError(t){return vn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return vn.credential(t.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com",vn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze extends ni{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return os._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ze.credentialFromTaggedObject(t)}static credentialFromError(t){return Ze.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:s}=t;if(!n&&!s)return null;try{return Ze.credential(n,s)}catch{return null}}}Ze.GOOGLE_SIGN_IN_METHOD="google.com",Ze.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends ni{constructor(){super("github.com")}static credential(t){return os._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return bn.credentialFromTaggedObject(t)}static credentialFromError(t){return bn.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return bn.credential(t.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com",bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En extends ni{constructor(){super("twitter.com")}static credential(t,n){return os._fromParams({providerId:En.PROVIDER_ID,signInMethod:En.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return En.credentialFromTaggedObject(t)}static credentialFromError(t){return En.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=t;if(!n||!s)return null;try{return En.credential(n,s)}catch{return null}}}En.TWITTER_SIGN_IN_METHOD="twitter.com",En.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,s,r=!1){const i=await Jn._fromIdTokenResponse(t,s,r),o=Ph(s);return new $s({user:i,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(t,n,s){await t._updateTokensIfNecessary(s,!0);const r=Ph(s);return new $s({user:t,providerId:r,_tokenResponse:s,operationType:n})}}function Ph(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo extends fn{constructor(t,n,s,r){var i;super(n.code,n.message),this.operationType=s,this.user=r,Object.setPrototypeOf(this,oo.prototype),this.customData={appName:t.name,tenantId:(i=t.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(t,n,s,r){return new oo(t,n,s,r)}}function vp(e,t,n,s){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?oo._fromErrorAndOperation(e,r,t,s):r})}const ao="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bp{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(ao,"1"),this.storage.removeItem(ao),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ep extends bp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=function(){const t=se();return ml(t)||zo(t)}()&&function(){try{return!(!window||window===window.top)}catch{return!1}}(),this.fallbackToPolling=fp(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),r=this.localCache[n];s!==r&&t(n,r,s)}}onStorageEvent(t,n=!1){if(!t.key)return void this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});const s=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(s,t.newValue):this.storage.removeItem(s);else if(this.localCache[s]===t.newValue&&!n)return}const r=()=>{const o=this.storage.getItem(s);(n||this.localCache[s]!==o)&&this.notifyListeners(s,o)},i=this.storage.getItem(s);pb()&&i!==t.newValue&&t.newValue!==t.oldValue?setTimeout(r,10):r()}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:s}),!0)})},1e3)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ep.type="LOCAL";const vb=Ep;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends bp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Ip.type="SESSION";const Tp=Ip;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(r=>r.isListeningto(t));if(n)return n;const s=new Ho(t);return this.receivers.push(s),s}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:s,eventType:r,data:i}=n.data,o=this.handlersMap[r];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:r});const a=Array.from(o).map(async h=>h(n.origin,i)),l=await function(h){return Promise.all(h.map(async d=>{try{return{fulfilled:!0,value:await d}}catch(p){return{fulfilled:!1,reason:p}}}))}(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:r,response:l})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),n&&this.handlersMap[t].size!==0||delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yl(e="",t=10){let n="";for(let s=0;s<t;s++)n+=Math.floor(10*Math.random());return e+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ho.receivers=[];class bb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,s=50){const r=typeof MessageChannel<"u"?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,o;return new Promise((a,l)=>{const h=yl("",20);r.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:r,onMessage(p){const g=p;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(d),i=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(g.data.response);break;default:clearTimeout(d),clearTimeout(i),l(new Error("invalid_response"))}}},this.handlers.add(o),r.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:h,data:n},[r.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lh(){return Qe().WorkerGlobalScope!==void 0&&typeof Qe().importScripts=="function"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mh="firebaseLocalStorageDb",co="firebaseLocalStorage",_p="fbase_key";class Br{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function lo(e,t){return e.transaction([co],t?"readwrite":"readonly").objectStore(co)}function mc(){const e=indexedDB.open(Mh,1);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const s=e.result;try{s.createObjectStore(co,{keyPath:_p})}catch(r){n(r)}}),e.addEventListener("success",async()=>{const s=e.result;s.objectStoreNames.contains(co)?t(s):(s.close(),await function(){const r=indexedDB.deleteDatabase(Mh);return new Br(r).toPromise()}(),t(await mc()))})})}async function Fh(e,t,n){const s=lo(e,!0).put({[_p]:t,value:n});return new Br(s).toPromise()}function Uh(e,t){const n=lo(e,!0).delete(t);return new Br(n).toPromise()}class kp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db||(this.db=await mc()),this.db}async _withRetries(t){let n=0;for(;;)try{const s=await this._openDb();return await t(s)}catch(s){if(n++>3)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Lh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ho._getInstance(Lh()?self:null),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await async function(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}(),!this.activeServiceWorker)return;this.sender=new bb(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&(!((t=s[0])===null||t===void 0)&&t.fulfilled)&&(!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(this.sender&&this.activeServiceWorker&&function(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await mc();return await Fh(t,ao,"1"),await Uh(t,ao),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fh(s,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(s=>async function(r,i){const o=lo(r,!1).get(i),a=await new Br(o).toPromise();return a===void 0?null:a.value}(s,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Uh(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(r=>{const i=lo(r,!1).getAll();return new Br(i).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:r,value:i}of t)s.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),n.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!s.has(r)&&(this.notifyListeners(r,null),n.push(r));return n}notifyListeners(t,n){this.localCache[t]=n;const s=this.listeners[t];if(s)for(const r of Array.from(s))r(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),800)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}kp.type="LOCAL";const Eb=kp;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cp(e,t){return t?en(t):(Y(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Zr(3e4,6e4);class wl extends wp{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return Ns(t,this._buildIdpRequest())}_linkToIdToken(t,n){return Ns(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return Ns(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function Ib(e){/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */return async function(t,n,s=!1){const r="signIn",i=await vp(t,r,n),o=await $s._fromIdTokenResponse(t,r,i);return s||await t._updateCurrentUser(o.user),o}(e.auth,new wl(e),e.bypassAuthState)}function Tb(e){const{auth:t,user:n}=e;return Y(n,t,"internal-error"),async function(s,r,i=!1){const{auth:o}=s,a="reauthenticate";try{const l=await Ur(s,vp(o,a,r,s),i);Y(l.idToken,o,"internal-error");const h=pl(l.idToken);Y(h,o,"internal-error");const{sub:d}=h;return Y(s.uid===d,o,"user-mismatch"),$s._forOperation(s,a,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&Ye(o,"user-mismatch"),l}}(n,new wl(e),e.bypassAuthState)}async function _b(e){const{auth:t,user:n}=e;return Y(n,t,"internal-error"),async function(s,r,i=!1){const o=await Ur(s,r._linkToIdToken(s.auth,await s.getIdToken()),i);return $s._forOperation(s,"link",o)}(n,new wl(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(t,n,s,r,i=!1){this.auth=t,this.resolver=s,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:s,postBody:r,tenantId:i,error:o,type:a}=t;if(o)return void this.reject(o);const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(h){this.reject(h)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return Ib;case"linkViaPopup":case"linkViaRedirect":return _b;case"reauthViaPopup":case"reauthViaRedirect":return Tb;default:Ye(this.auth,"internal-error")}}resolve(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){an(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kb=new Zr(2e3,1e4);async function Cb(e,t,n){const s=ei(e);(function(i,o,a){if(!(o instanceof a))throw a.name!==o.constructor.name&&Ye(i,"argument-error"),tp(i,"argument-error",`Type of ${o.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)})(e,t,gl);const r=Cp(s,n);return new Gn(s,"signInViaPopup",t,r).executeNotNull()}class Gn extends Sp{constructor(t,n,s,r,i){super(t,n,r,i),this.provider=s,this.authWindow=null,this.pollId=null,Gn.currentPopupAction&&Gn.currentPopupAction.cancel(),Gn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return Y(t,this.auth,"internal-error"),t}async onExecution(){an(this.filter.length===1,"Popup operations only handle one event");const t=yl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(We(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(We(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,s;!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed?this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(We(this.auth,"popup-closed-by-user"))},2e3):this.pollId=window.setTimeout(t,kb.get())};t()}}Gn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb="pendingRedirect",ji=new Map;class Ab extends Sp{constructor(t,n,s=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let t=ji.get(this.auth._key());if(!t){try{const n=await async function(r,i){const o=function(h){return Bi(Sb,h.config.apiKey,h.name)}(i),a=function(h){return en(h._redirectPersistence)}(r);if(!await a._isAvailable())return!1;const l=await a._get(o)==="true";return await a._remove(o),l}(this.resolver,this.auth),s=n?await super.execute():null;t=()=>Promise.resolve(s)}catch(n){t=()=>Promise.reject(n)}ji.set(this.auth._key(),t)}return this.bypassAuthState||ji.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type!=="unknown"){if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}function xb(e,t){ji.set(e._key(),t)}async function Nb(e,t,n=!1){const s=ei(e),r=Cp(s,t),i=new Ab(s,r,n),o=await i.execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(t,s)&&(n=!0,this.sendToConsumer(t,s),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!function(s){switch(s.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Bh(s);default:return!1}}(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var s;if(t.error&&!Bh(t)){const r=((s=t.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(We(this.auth,r))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const s=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&s}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=6e5&&this.cachedEventUids.clear(),this.cachedEventUids.has(Vh(t))}saveEventToCache(t){this.cachedEventUids.add(Vh(t)),this.lastProcessedEventTime=Date.now()}}function Vh(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Bh({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ob=/^https?/;async function Pb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await async function(n,s={}){return ti(n,"GET","/v1/projects",s)}(e);for(const n of t)try{if(Lb(n))return}catch{}Ye(e,"unauthorized-domain")}function Lb(e){const t=pc(),{protocol:n,hostname:s}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return i.hostname===""&&s===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&i.hostname===s}if(!Ob.test(n))return!1;if(Rb.test(e))return s===e;const r=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+r+"|"+r+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mb=new Zr(3e4,6e4);function jh(){const e=Qe().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Fb(e){return new Promise((t,n)=>{var s,r,i;function o(){jh(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{jh(),n(We(e,"network-request-failed"))},timeout:Mb.get()})}if(!((r=(s=Qe().gapi)===null||s===void 0?void 0:s.iframes)===null||r===void 0)&&r.Iframe)t(gapi.iframes.getContext());else{if(!(!((i=Qe().gapi)===null||i===void 0)&&i.load)){const a=`__iframefcb${Math.floor(1e6*Math.random())}`;return Qe()[a]=()=>{gapi.load?o():n(We(e,"network-request-failed"))},yp(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}o()}}).catch(t=>{throw $i=null,t})}let $i=null;/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub=new Zr(5e3,15e3),Vb="__/auth/iframe",Bb="emulator/auth/iframe",jb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},$b=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function qb(e){const t=e.config;Y(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?fl(t,Bb):`https://${e.config.authDomain}/${Vb}`,s={apiKey:t.apiKey,appName:e.name,v:Js},r=$b.get(e.config.apiHost);r&&(s.eid=r);const i=e._getFrameworks();return i.length&&(s.fw=i.join(",")),`${n}?${Jr(s).slice(1)}`}async function zb(e){const t=await function(s){return $i=$i||Fb(s),$i}(e),n=Qe().gapi;return Y(n,e,"internal-error"),t.open({where:document.body,url:qb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:jb,dontclear:!0},s=>new Promise(async(r,i)=>{await s.restyle({setHideOnLeave:!1});const o=We(e,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},Ub.get());function l(){Qe().clearTimeout(a),r(s)}s.ping(l).then(l,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"};class $h{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kb(e,t,n,s=500,r=600){const i=Math.max((window.screen.availHeight-r)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Hb),{width:s.toString(),height:r.toString(),top:i,left:o}),h=se().toLowerCase();n&&(a=cp(h)?"_blank":n),ap(h)&&(t=t||"http://localhost",l.scrollbars="yes");const d=Object.entries(l).reduce((g,[w,E])=>`${g}${w}=${E},`,"");if(function(g=se()){var w;return zo(g)&&!!(!((w=window.navigator)===null||w===void 0)&&w.standalone)}(h)&&a!=="_self")return function(g,w){const E=document.createElement("a");E.href=g,E.target=w;const _=document.createEvent("MouseEvent");_.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),E.dispatchEvent(_)}(t||"",a),new $h(null);const p=window.open(t||"",a,d);Y(p,e,"popup-blocked");try{p.focus()}catch{}return new $h(p)}const Gb="__/auth/handler",Wb="emulator/auth/handler",Qb=encodeURIComponent("fac");async function qh(e,t,n,s,r,i){Y(e.config.authDomain,e,"auth-domain-config-required"),Y(e.config.apiKey,e,"invalid-api-key");const o={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:Js,eventId:r};if(t instanceof gl){t.setDefaultLanguage(e.languageCode),o.providerId=t.providerId||"",function(d){for(const p in d)if(Object.prototype.hasOwnProperty.call(d,p))return!1;return!0}(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[d,p]of Object.entries(i||{}))o[d]=p}if(t instanceof ni){const d=t.getScopes().filter(p=>p!=="");d.length>0&&(o.scopes=d.join(","))}e.tenantId&&(o.tid=e.tenantId);const a=o;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await e._getAppCheckToken(),h=l?`#${Qb}=${encodeURIComponent(l)}`:"";return`${function({config:d}){return d.emulator?fl(d,Wb):`https://${d.authDomain}/${Gb}`}(e)}?${Jr(a).slice(1)}${h}`}const La="webStorageSupport",Yb=class{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tp,this._completeRedirectFn=Nb,this._overrideRedirectResult=xb}async _openPopup(e,t,n,s){var r;return an((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()"),Kb(e,await qh(e,t,n,pc(),s),yl())}async _openRedirect(e,t,n,s){return await this._originValidation(e),function(r){Qe().location.href=r}(await qh(e,t,n,pc(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(an(r,"If manager is not set, promise should be"),r)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch(()=>{delete this.eventManagers[t]}),n}async initAndGetManager(e){const t=await zb(e),n=new Db(e);return t.register("authEvent",s=>(Y(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:n.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(La,{type:La},n=>{var s;const r=(s=n==null?void 0:n[0])===null||s===void 0?void 0:s[La];r!==void 0&&t(!!r),Ye(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Pb(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fp()||ml()||zo()}};var zh="@firebase/auth",Hh="0.23.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xb{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(s=>{t((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Y(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jb=Kf("authIdTokenMaxAge")||300;let Kh=null;var _i;_i="Browser",js(new rs("auth",(e,{options:t})=>{const n=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:i,authDomain:o}=n.options;Y(i&&!i.includes(":"),"invalid-api-key",{appName:n.name}),Y(!(o!=null&&o.includes(":")),"argument-error",{appName:n.name});const a={apiKey:i,authDomain:o,clientPlatform:_i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pp(_i)},l=new yb(n,s,r,a);return function(h,d){const p=(d==null?void 0:d.persistence)||[],g=(Array.isArray(p)?p:[p]).map(en);d!=null&&d.errorMap&&h._updateErrorMap(d.errorMap),h._initializeWithPersistence(g,d==null?void 0:d.popupRedirectResolver)}(l,t),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,n)=>{e.getProvider("auth-internal").initialize()})),js(new rs("auth-internal",e=>(t=>new Xb(t))(ei(e.getProvider("auth").getImmediate())),"PRIVATE").setInstantiationMode("EXPLICIT")),An(zh,Hh,function(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}(_i)),An(zh,Hh,"esm2017");var G,Zb=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},vl=vl||{},X=Zb||self;function uo(){}function qi(e){var t=typeof e;return(t=t!="object"?t:e?Array.isArray(e)?"array":t:"null")=="array"||t=="object"&&typeof e.length=="number"}function si(e){var t=typeof e;return t=="object"&&e!=null||t=="function"}var v_="closure_uid_"+(1e9*Math.random()>>>0);function tE(e,t,n){return e.call.apply(e.bind,arguments)}function eE(e,t,n){if(!e)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var r=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(r,s),e.apply(t,r)}}return function(){return e.apply(t,arguments)}}function ge(e,t,n){return(ge=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?tE:eE).apply(null,arguments)}function ki(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),e.apply(this,s)}}function Ht(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(s,r,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[r].apply(s,o)}}function xn(){this.s=this.s,this.o=this.o}xn.prototype.s=!1,xn.prototype.na=function(){var e;!this.s&&(this.s=!0,this.M())},xn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ap=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if(typeof e=="string")return typeof t!="string"||t.length!=1?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function bl(e){const t=e.length;if(0<t){const n=Array(t);for(let s=0;s<t;s++)n[s]=e[s];return n}return[]}function Gh(e,t){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(qi(s)){const r=e.length||0,i=s.length||0;e.length=r+i;for(let o=0;o<i;o++)e[r+o]=s[o]}else e.push(s)}}function ne(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}ne.prototype.h=function(){this.defaultPrevented=!0};var nE=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{X.addEventListener("test",uo,t),X.removeEventListener("test",uo,t)}catch{}return e}();function ho(e){return/^[\s\xa0]*$/.test(e)}var Wh=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function Ma(e,t){return e<t?-1:e>t?1:0}function Ko(){var e=X.navigator;return e&&(e=e.userAgent)?e:""}function He(e){return Ko().indexOf(e)!=-1}function El(e){return El[" "](e),e}El[" "]=uo;var fo,vs,sE=He("Opera"),qs=He("Trident")||He("MSIE"),xp=He("Edge"),gc=xp||qs,Np=He("Gecko")&&!(Ko().toLowerCase().indexOf("webkit")!=-1&&!He("Edge"))&&!(He("Trident")||He("MSIE"))&&!He("Edge"),rE=Ko().toLowerCase().indexOf("webkit")!=-1&&!He("Edge");function Dp(){var e=X.document;return e?e.documentMode:void 0}t:{var Fa="",Ua=(vs=Ko(),Np?/rv:([^\);]+)(\)|;)/.exec(vs):xp?/Edge\/([\d\.]+)/.exec(vs):qs?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(vs):rE?/WebKit\/(\S+)/.exec(vs):sE?/(?:Version)[ \/]?(\S+)/.exec(vs):void 0);if(Ua&&(Fa=Ua?Ua[1]:""),qs){var Va=Dp();if(Va!=null&&Va>parseFloat(Fa)){fo=String(Va);break t}}fo=Fa}var yc,iE={};function oE(){return function(e){var t=iE;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}(function(){let e=0;const t=Wh(String(fo)).split("."),n=Wh("9").split("."),s=Math.max(t.length,n.length);for(let o=0;e==0&&o<s;o++){var r=t[o]||"",i=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r[0].length==0&&i[0].length==0)break;e=Ma(r[1].length==0?0:parseInt(r[1],10),i[1].length==0?0:parseInt(i[1],10))||Ma(r[2].length==0,i[2].length==0)||Ma(r[2],i[2]),r=r[3],i=i[3]}while(e==0)}return 0<=e})}if(X.document&&qs){var aE=Dp();yc=aE||parseInt(fo,10)||void 0}else yc=void 0;var cE=yc;function jr(e,t){if(ne.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,s=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Np){t:{try{El(t.nodeName);var r=!0;break t}catch{}r=!1}r||(t=null)}}else n=="mouseover"?t=e.fromElement:n=="mouseout"&&(t=e.toElement);this.relatedTarget=t,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=e.clientX!==void 0?e.clientX:e.pageX,this.clientY=e.clientY!==void 0?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType=typeof e.pointerType=="string"?e.pointerType:lE[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&jr.X.h.call(this)}}Ht(jr,ne);var lE={2:"touch",3:"pen",4:"mouse"};jr.prototype.h=function(){jr.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ri="closure_listenable_"+(1e6*Math.random()|0),uE=0;function hE(e,t,n,s,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!s,this.ha=r,this.key=++uE,this.ba=this.ea=!1}function Go(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function Il(e,t,n){for(const s in e)t.call(n,e[s],s,e)}function Rp(e){const t={};for(const n in e)t[n]=e[n];return t}const Qh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Op(e,t){let n,s;for(let r=1;r<arguments.length;r++){for(n in s=arguments[r],s)e[n]=s[n];for(let i=0;i<Qh.length;i++)n=Qh[i],Object.prototype.hasOwnProperty.call(s,n)&&(e[n]=s[n])}}function Wo(e){this.src=e,this.g={},this.h=0}function wc(e,t){var n=t.type;if(n in e.g){var s,r=e.g[n],i=Ap(r,t);(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Go(t),e.g[n].length==0&&(delete e.g[n],e.h--))}}function vc(e,t,n,s){for(var r=0;r<e.length;++r){var i=e[r];if(!i.ba&&i.listener==t&&i.capture==!!n&&i.ha==s)return r}return-1}Wo.prototype.add=function(e,t,n,s,r){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=vc(e,t,s,r);return-1<o?(t=e[o],n||(t.ea=!1)):((t=new hE(t,this.src,i,!!s,r)).ea=n,e.push(t)),t};var Tl="closure_lm_"+(1e6*Math.random()|0),Ba={};function Pp(e,t,n,s,r){if(s&&s.once)return Mp(e,t,n,s,r);if(Array.isArray(t)){for(var i=0;i<t.length;i++)Pp(e,t[i],n,s,r);return null}return n=Cl(n),e&&e[ri]?e.N(t,n,si(s)?!!s.capture:!!s,r):Lp(e,t,n,!1,s,r)}function Lp(e,t,n,s,r,i){if(!t)throw Error("Invalid event type");var o=si(r)?!!r.capture:!!r,a=kl(e);if(a||(e[Tl]=a=new Wo(e)),(n=a.add(t,n,s,o,i)).proxy)return n;if(s=function(){function l(d){return h.call(l.src,l.listener,d)}const h=dE;return l}(),n.proxy=s,s.src=e,s.listener=n,e.addEventListener)nE||(r=o),r===void 0&&(r=!1),e.addEventListener(t.toString(),s,r);else if(e.attachEvent)e.attachEvent(Up(t.toString()),s);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(s)}return n}function Mp(e,t,n,s,r){if(Array.isArray(t)){for(var i=0;i<t.length;i++)Mp(e,t[i],n,s,r);return null}return n=Cl(n),e&&e[ri]?e.O(t,n,si(s)?!!s.capture:!!s,r):Lp(e,t,n,!0,s,r)}function Fp(e,t,n,s,r){if(Array.isArray(t))for(var i=0;i<t.length;i++)Fp(e,t[i],n,s,r);else s=si(s)?!!s.capture:!!s,n=Cl(n),e&&e[ri]?(e=e.i,(t=String(t).toString())in e.g&&-1<(n=vc(i=e.g[t],n,s,r))&&(Go(i[n]),Array.prototype.splice.call(i,n,1),i.length==0&&(delete e.g[t],e.h--))):e&&(e=kl(e))&&(t=e.g[t.toString()],e=-1,t&&(e=vc(t,n,s,r)),(n=-1<e?t[e]:null)&&_l(n))}function _l(e){if(typeof e!="number"&&e&&!e.ba){var t=e.src;if(t&&t[ri])wc(t.i,e);else{var n=e.type,s=e.proxy;t.removeEventListener?t.removeEventListener(n,s,e.capture):t.detachEvent?t.detachEvent(Up(n),s):t.addListener&&t.removeListener&&t.removeListener(s),(n=kl(t))?(wc(n,e),n.h==0&&(n.src=null,t[Tl]=null)):Go(e)}}}function Up(e){return e in Ba?Ba[e]:Ba[e]="on"+e}function dE(e,t){if(e.ba)e=!0;else{t=new jr(t,this);var n=e.listener,s=e.ha||e.src;e.ea&&_l(e),e=n.call(s,t)}return e}function kl(e){return(e=e[Tl])instanceof Wo?e:null}var ja="__closure_events_fn_"+(1e9*Math.random()>>>0);function Cl(e){return typeof e=="function"?e:(e[ja]||(e[ja]=function(t){return e.handleEvent(t)}),e[ja])}function Bt(){xn.call(this),this.i=new Wo(this),this.P=this,this.I=null}function zt(e,t){var n,s=e.I;if(s)for(n=[];s;s=s.I)n.push(s);if(e=e.P,s=t.type||t,typeof t=="string")t=new ne(t,e);else if(t instanceof ne)t.target=t.target||e;else{var r=t;Op(t=new ne(s,e),r)}if(r=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];r=Ci(o,s,!0,t)&&r}if(r=Ci(o=t.g=e,s,!0,t)&&r,r=Ci(o,s,!1,t)&&r,n)for(i=0;i<n.length;i++)r=Ci(o=t.g=n[i],s,!1,t)&&r}function Ci(e,t,n,s){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var r=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&wc(e.i,o),r=a.call(l,s)!==!1&&r}}return r&&!s.defaultPrevented}Ht(Bt,xn),Bt.prototype[ri]=!0,Bt.prototype.removeEventListener=function(e,t,n,s){Fp(this,e,t,n,s)},Bt.prototype.M=function(){if(Bt.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Go(n[s]);delete t.g[e],t.h--}}this.I=null},Bt.prototype.N=function(e,t,n,s){return this.i.add(String(e),t,!1,n,s)},Bt.prototype.O=function(e,t,n,s){return this.i.add(String(e),t,!0,n,s)};var Sl=X.JSON.stringify;function fE(){var e=jp;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var $a,Vp=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new pE,e=>e.reset());class pE{constructor(){this.next=this.g=this.h=null}set(t,n){this.h=t,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function mE(e){X.setTimeout(()=>{throw e},0)}function Bp(e,t){$a||function(){var n=X.Promise.resolve(void 0);$a=function(){n.then(gE)}}(),bc||($a(),bc=!0),jp.add(e,t)}var bc=!1,jp=new class{constructor(){this.h=this.g=null}add(e,t){const n=Vp.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}};function gE(){for(var e;e=fE();){try{e.h.call(e.g)}catch(n){mE(n)}var t=Vp;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}bc=!1}function zi(e,t){Bt.call(this),this.h=e||1,this.g=t||X,this.j=ge(this.lb,this),this.l=Date.now()}function Ec(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function Al(e,t,n){if(typeof e=="function")n&&(e=ge(e,n));else{if(!e||typeof e.handleEvent!="function")throw Error("Invalid listener argument");e=ge(e.handleEvent,e)}return 2147483647<Number(t)?-1:X.setTimeout(e,t||0)}function $p(e){e.g=Al(()=>{e.g=null,e.i&&(e.i=!1,$p(e))},e.j);const t=e.h;e.h=null,e.m.apply(null,t)}Ht(zi,Bt),(G=zi.prototype).ca=!1,G.R=null,G.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),zt(this,"tick"),this.ca&&(Ec(this),this.start()))}},G.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},G.M=function(){zi.X.M.call(this),Ec(this),delete this.g};class yE extends xn{constructor(t,n){super(),this.m=t,this.j=n,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:$p(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function _r(e){xn.call(this),this.h=e,this.g={}}Ht(_r,xn);var Yh=[];function qp(e,t,n,s){Array.isArray(n)||(n&&(Yh[0]=n.toString()),n=Yh);for(var r=0;r<n.length;r++){var i=Pp(t,n[r],s||e.handleEvent,!1,e.h||e);if(!i)break;e.g[i.key]=i}}function zp(e){Il(e.g,function(t,n){this.g.hasOwnProperty(n)&&_l(t)},e),e.g={}}function po(){this.g=!0}function _s(e,t,n,s){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(r,i){if(!r.g)return i;if(!i)return null;try{var o=JSON.parse(i);if(o){for(r=0;r<o.length;r++)if(Array.isArray(o[r])){var a=o[r];if(!(2>a.length)){var l=a[1];if(Array.isArray(l)&&!(1>l.length)){var h=l[0];if(h!="noop"&&h!="stop"&&h!="close")for(var d=1;d<l.length;d++)l[d]=""}}}}return Sl(o)}catch{return i}}(e,n)+(s?" "+s:"")})}_r.prototype.M=function(){_r.X.M.call(this),zp(this)},_r.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},po.prototype.Aa=function(){this.g=!1},po.prototype.info=function(){};var Zn={},Xh=null;function Qo(){return Xh=Xh||new Bt}function Hp(e){ne.call(this,Zn.Pa,e)}function mo(e){const t=Qo();zt(t,new Hp(t))}function Kp(e,t){ne.call(this,Zn.STAT_EVENT,e),this.stat=t}function le(e){const t=Qo();zt(t,new Kp(t,e))}function Gp(e,t){ne.call(this,Zn.Qa,e),this.size=t}function ii(e,t){if(typeof e!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){e()},t)}Zn.Pa="serverreachability",Ht(Hp,ne),Zn.STAT_EVENT="statevent",Ht(Kp,ne),Zn.Qa="timingevent",Ht(Gp,ne);var Hi={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},Wp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function xl(){}function Jh(e){return e.h||(e.h=e.i())}function Qp(){}xl.prototype.h=null;var Ic,lr={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Nl(){ne.call(this,"d")}function Dl(){ne.call(this,"c")}function Si(){}function oi(e,t,n,s){this.l=e,this.j=t,this.m=n,this.U=s||1,this.S=new _r(this),this.O=wE,e=gc?125:void 0,this.T=new zi(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Yp}function Yp(){this.i=null,this.g="",this.h=!1}Ht(Nl,ne),Ht(Dl,ne),Ht(Si,xl),Si.prototype.g=function(){return new XMLHttpRequest},Si.prototype.i=function(){return{}},Ic=new Si;var wE=45e3,Tc={},go={};function _c(e,t,n){e.K=1,e.v=Yo(cn(t)),e.s=n,e.P=!0,Xp(e,null)}function Xp(e,t){e.F=Date.now(),$r(e),e.A=cn(e.v);var n=e.A,s=e.U;Array.isArray(s)||(s=[String(s)]),sm(n.i,"t",s),e.C=0,n=e.l.H,e.h=new Yp,e.g=Em(e.l,n?t:null,!e.s),0<e.N&&(e.L=new yE(ge(e.La,e,e.g),e.N)),qp(e.S,e.g,"readystatechange",e.ib),t=e.H?Rp(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),mo(),function(r,i,o,a,l,h){r.info(function(){if(r.g)if(h)for(var d="",p=h.split("&"),g=0;g<p.length;g++){var w=p[g].split("=");if(1<w.length){var E=w[0];w=w[1];var _=E.split("_");d=2<=_.length&&_[1]=="type"?d+(E+"=")+w+"&":d+(E+"=redacted&")}}else d=null;else d=h;return"XMLHTTP REQ ("+a+") [attempt "+l+"]: "+i+`
`+o+`
`+d})}(e.j,e.u,e.A,e.m,e.U,e.s)}function Jp(e){return!!e.g&&e.u=="GET"&&e.K!=2&&e.l.Da}function Zh(e,t,n){let s,r=!0;for(;!e.I&&e.C<n.length;){if(s=vE(e,n),s==go){t==4&&(e.o=4,le(14),r=!1),_s(e.j,e.m,null,"[Incomplete Response]");break}if(s==Tc){e.o=4,le(15),_s(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}_s(e.j,e.m,s,null),kc(e,s)}Jp(e)&&s!=go&&s!=Tc&&(e.h.g="",e.C=0),t!=4||n.length!=0||e.h.h||(e.o=1,le(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,(t=e.l).g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ll(t),t.K=!0,le(11))):(_s(e.j,e.m,n,"[Invalid Chunked Response]"),qn(e),fr(e))}function vE(e,t){var n=e.C,s=t.indexOf(`
`,n);return s==-1?go:(n=Number(t.substring(n,s)),isNaN(n)?Tc:(s+=1)+n>t.length?go:(t=t.substr(s,n),e.C=s+n,t))}function $r(e){e.V=Date.now()+e.O,Zp(e,e.O)}function Zp(e,t){if(e.B!=null)throw Error("WatchDog timer not null");e.B=ii(ge(e.gb,e),t)}function yo(e){e.B&&(X.clearTimeout(e.B),e.B=null)}function fr(e){e.l.G==0||e.I||ym(e.l,e)}function qn(e){yo(e);var t=e.L;t&&typeof t.na=="function"&&t.na(),e.L=null,Ec(e.T),zp(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function kc(e,t){try{var n=e.l;if(n.G!=0&&(n.g==e||Cc(n.h,e))){if(!e.J&&Cc(n.h,e)&&n.G==3){try{var s=n.Fa.g.parse(t)}catch{s=null}if(Array.isArray(s)&&s.length==3){var r=s;if(r[0]==0){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break t;_o(n),Io(n)}Pl(n),le(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&n.A==0&&!n.v&&(n.v=ii(ge(n.cb,n),6e3));if(1>=om(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Wn(n,11)}else if((e.J||n.g==e)&&_o(n),!ho(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let h=r[t];if(n.T=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.I=h[1],n.ka=h[2];const d=h[3];d!=null&&(n.ma=d,n.j.info("VER="+n.ma));const p=h[4];p!=null&&(n.Ca=p,n.j.info("SVER="+n.Ca));const g=h[5];g!=null&&typeof g=="number"&&0<g&&(s=1.5*g,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const w=e.g;if(w){const E=w.g?w.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var i=s.h;i.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Rl(i,i.h),i.h=null))}if(s.D){const _=w.g?w.g.getResponseHeader("X-HTTP-Session-Id"):null;_&&(s.za=_,vt(s.F,s.D,_))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms"));var o=e;if((s=n).sa=bm(s,s.H?s.ka:null,s.V),o.J){am(s.h,o);var a=o,l=s.J;l&&a.setTimeout(l),a.B&&(yo(a),$r(a)),s.g=o}else gm(s);0<n.i.length&&To(n)}else h[0]!="stop"&&h[0]!="close"||Wn(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Wn(n,7):xc(n):h[0]!="noop"&&n.l&&n.l.wa(h),n.A=0)}}mo()}catch{}}function tm(e,t){if(e.forEach&&typeof e.forEach=="function")e.forEach(t,void 0);else if(qi(e)||typeof e=="string")Array.prototype.forEach.call(e,t,void 0);else for(var n=function(o){if(o.oa&&typeof o.oa=="function")return o.oa();if(!o.W||typeof o.W!="function"){if(typeof Map<"u"&&o instanceof Map)return Array.from(o.keys());if(!(typeof Set<"u"&&o instanceof Set)){if(qi(o)||typeof o=="string"){var a=[];o=o.length;for(var l=0;l<o;l++)a.push(l);return a}a=[],l=0;for(const h in o)a[l++]=h;return a}}}(e),s=function(o){if(o.W&&typeof o.W=="function")return o.W();if(typeof Map<"u"&&o instanceof Map||typeof Set<"u"&&o instanceof Set)return Array.from(o.values());if(typeof o=="string")return o.split("");if(qi(o)){for(var a=[],l=o.length,h=0;h<l;h++)a.push(o[h]);return a}for(h in a=[],l=0,o)a[l++]=o[h];return a}(e),r=s.length,i=0;i<r;i++)t.call(void 0,s[i],n&&n[i],e)}(G=oi.prototype).setTimeout=function(e){this.O=e},G.ib=function(e){e=e.target;const t=this.L;t&&nn(e)==3?t.l():this.La(e)},G.La=function(e){try{if(e==this.g)t:{const d=nn(this.g);var t=this.g.Ea();if(this.g.aa(),!(3>d)&&(d!=3||gc||this.g&&(this.h.h||this.g.fa()||od(this.g)))){this.I||d!=4||t==7||mo(),yo(this);var n=this.g.aa();this.Y=n;e:if(Jp(this)){var s=od(this.g);e="";var r=s.length,i=nn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){qn(this),fr(this);var o="";break e}this.h.i=new X.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(s[t],{stream:i&&t==r-1});s.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,function(p,g,w,E,_,M,O){p.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+_+"]: "+g+`
`+w+`
`+M+" "+O})}(this.j,this.u,this.A,this.m,this.U,d,n),this.i){if(this.Z&&!this.J){e:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!ho(a)){var h=a;break e}}h=null}if(!(n=h)){this.i=!1,this.o=3,le(12),qn(this),fr(this);break t}_s(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,kc(this,n)}this.P?(Zh(this,d,o),gc&&this.i&&d==3&&(qp(this.S,this.T,"tick",this.hb),this.T.start())):(_s(this.j,this.m,o,null),kc(this,o)),d==4&&qn(this),this.i&&!this.I&&(d==4?ym(this.l,this):(this.i=!1,$r(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,le(12)):(this.o=0,le(13)),qn(this),fr(this)}}}catch{}},G.hb=function(){if(this.g){var e=nn(this.g),t=this.g.fa();this.C<t.length&&(yo(this),Zh(this,e,t),this.i&&e!=4&&$r(this))}},G.cancel=function(){this.I=!0,qn(this)},G.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(function(t,n){t.info(function(){return"TIMEOUT: "+n})}(this.j,this.A),this.K!=2&&(mo(),le(17)),qn(this),this.o=2,fr(this)):Zp(this,this.V-e)};var em=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ts(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof ts){this.h=t!==void 0?t:e.h,wo(this,e.j),this.s=e.s,this.g=e.g,vo(this,e.m),this.l=e.l,t=e.i;var n=new qr;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),td(this,n),this.o=e.o}else e&&(n=String(e).match(em))?(this.h=!!t,wo(this,n[1]||"",!0),this.s=pr(n[2]||""),this.g=pr(n[3]||"",!0),vo(this,n[4]),this.l=pr(n[5]||"",!0),td(this,n[6]||"",!0),this.o=pr(n[7]||"")):(this.h=!!t,this.i=new qr(null,this.h))}function cn(e){return new ts(e)}function wo(e,t,n){e.j=n?pr(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function vo(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function td(e,t,n){t instanceof qr?(e.i=t,function(s,r){r&&!s.j&&(In(s),s.i=null,s.g.forEach(function(i,o){var a=o.toLowerCase();o!=a&&(nm(this,o),sm(this,a,i))},s)),s.j=r}(e.i,e.h)):(n||(t=mr(t,TE)),e.i=new qr(t,e.h))}function vt(e,t,n){e.i.set(t,n)}function Yo(e){return vt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function pr(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function mr(e,t,n){return typeof e=="string"?(e=encodeURI(e).replace(t,bE),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function bE(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}ts.prototype.toString=function(){var e=[],t=this.j;t&&e.push(mr(t,ed,!0),":");var n=this.g;return(n||t=="file")&&(e.push("//"),(t=this.s)&&e.push(mr(t,ed,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),(n=this.m)!=null&&e.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&e.push("/"),e.push(mr(n,n.charAt(0)=="/"?IE:EE,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",mr(n,_E)),e.join("")};var ed=/[#\/\?@]/g,EE=/[#\?:]/g,IE=/[#\?]/g,TE=/[#\?@]/g,_E=/#/g;function qr(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function In(e){e.g||(e.g=new Map,e.h=0,e.i&&function(t,n){if(t){t=t.split("&");for(var s=0;s<t.length;s++){var r=t[s].indexOf("="),i=null;if(0<=r){var o=t[s].substring(0,r);i=t[s].substring(r+1)}else o=t[s];n(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function nm(e,t){In(e),t=Ds(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function nd(e,t){return In(e),t=Ds(e,t),e.g.has(t)}function sm(e,t,n){nm(e,t),0<n.length&&(e.i=null,e.g.set(Ds(e,t),bl(n)),e.h+=n.length)}function Ds(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}(G=qr.prototype).add=function(e,t){In(this),this.i=null,e=Ds(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},G.forEach=function(e,t){In(this),this.g.forEach(function(n,s){n.forEach(function(r){e.call(t,r,s,this)},this)},this)},G.oa=function(){In(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let s=0;s<t.length;s++){const r=e[s];for(let i=0;i<r.length;i++)n.push(t[s])}return n},G.W=function(e){In(this);let t=[];if(typeof e=="string")nd(this,e)&&(t=t.concat(this.g.get(Ds(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},G.set=function(e,t){return In(this),this.i=null,nd(this,e=Ds(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},G.get=function(e,t){return e&&0<(e=this.W(e)).length?String(e[0]):t},G.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var s=t[n];const i=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var r=i;o[s]!==""&&(r+="="+encodeURIComponent(String(o[s]))),e.push(r)}}return this.i=e.join("&")};function rm(e){this.l=e||kE,X.PerformanceNavigationTiming?e=0<(e=X.performance.getEntriesByType("navigation")).length&&(e[0].nextHopProtocol=="hq"||e[0].nextHopProtocol=="h2"):e=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var kE=10;function im(e){return!!e.h||!!e.g&&e.g.size>=e.j}function om(e){return e.h?1:e.g?e.g.size:0}function Cc(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Rl(e,t){e.g?e.g.add(t):e.h=t}function am(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function cm(e){if(e.h!=null)return e.i.concat(e.h.D);if(e.g!=null&&e.g.size!==0){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return bl(e.i)}function Sc(){}function CE(){this.g=new Sc}function SE(e,t,n){const s=n||"";try{tm(e,function(r,i){let o=r;si(r)&&(o=Sl(r)),t.push(s+i+"="+encodeURIComponent(o))})}catch(r){throw t.push(s+"type="+encodeURIComponent("_badmap")),r}}function Ai(e,t,n,s,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(s)}catch{}}function kr(e){this.l=e.ac||null,this.j=e.jb||!1}function bo(e,t){Bt.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Ac,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}rm.prototype.cancel=function(){if(this.i=cm(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const e of this.g.values())e.cancel();this.g.clear()}},Sc.prototype.stringify=function(e){return X.JSON.stringify(e,void 0)},Sc.prototype.parse=function(e){return X.JSON.parse(e,void 0)},Ht(kr,xl),kr.prototype.g=function(){return new bo(this.l,this.j)},kr.prototype.i=function(e){return function(){return e}}({}),Ht(bo,Bt);var Ac=0;function sd(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function ur(e){e.readyState=4,e.l=null,e.j=null,e.A=null,gr(e)}function gr(e){e.onreadystatechange&&e.onreadystatechange.call(e)}(G=bo.prototype).open=function(e,t){if(this.readyState!=Ac)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,gr(this)},G.send=function(e){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||X).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},G.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ur(this)),this.readyState=Ac},G.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,gr(this)),this.g&&(this.readyState=3,gr(this),this.g)))if(this.responseType==="arraybuffer")e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(X.ReadableStream!==void 0&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;sd(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},G.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?ur(this):gr(this),this.readyState==3&&sd(this)}},G.Va=function(e){this.g&&(this.response=this.responseText=e,ur(this))},G.Ua=function(e){this.g&&(this.response=e,ur(this))},G.ga=function(){this.g&&ur(this)},G.setRequestHeader=function(e,t){this.v.append(e,t)},G.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},G.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join(`\r
`)},Object.defineProperty(bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(e){this.m=e?"include":"same-origin"}});var AE=X.JSON.parse;function Et(e){Bt.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lm,this.K=this.L=!1}Ht(Et,Bt);var lm="",xE=/^https?$/i,NE=["POST","PUT"];function rd(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,um(e),Eo(e)}function um(e){e.D||(e.D=!0,zt(e,"complete"),zt(e,"error"))}function id(e){if(e.h&&vl!==void 0&&(!e.C[1]||nn(e)!=4||e.aa()!=2)){if(e.v&&nn(e)==4)Al(e.Ha,0,e);else if(zt(e,"readystatechange"),nn(e)==4){e.h=!1;try{const a=e.aa();t:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var n;if(!(n=t)){var s;if(s=a===0){var r=String(e.H).match(em)[1]||null;if(!r&&X.self&&X.self.location){var i=X.self.location.protocol;r=i.substr(0,i.length-1)}s=!xE.test(r?r.toLowerCase():"")}n=s}if(n)zt(e,"complete"),zt(e,"success");else{e.m=6;try{var o=2<nn(e)?e.g.statusText:""}catch{o=""}e.j=o+" ["+e.aa()+"]",um(e)}}finally{Eo(e)}}}}function Eo(e,t){if(e.g){hm(e);const n=e.g,s=e.C[0]?uo:null;e.g=null,e.C=null,t||zt(e,"ready");try{n.onreadystatechange=s}catch{}}}function hm(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(X.clearTimeout(e.A),e.A=null)}function nn(e){return e.g?e.g.readyState:0}function od(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case lm:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch{return null}}function dm(e){let t="";return Il(e,function(n,s){t+=s,t+=":",t+=n,t+=`\r
`}),t}function Ol(e,t,n){t:{for(s in n){var s=!1;break t}s=!0}s||(n=dm(n),typeof e=="string"?n!=null&&encodeURIComponent(String(n)):vt(e,t,n))}function hr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function fm(e){this.Ca=0,this.i=[],this.j=new po,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=hr("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=hr("baseRetryDelayMs",5e3,e),this.bb=hr("retryDelaySeedMs",1e4,e),this.$a=hr("forwardChannelMaxRetries",2,e),this.ta=hr("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new rm(e&&e.concurrentRequestLimit),this.Fa=new CE,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function xc(e){if(pm(e),e.G==3){var t=e.U++,n=cn(e.F);vt(n,"SID",e.I),vt(n,"RID",t),vt(n,"TYPE","terminate"),ai(e,n),(t=new oi(e,e.j,t,void 0)).K=2,t.v=Yo(cn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(t.v.toString(),"")),!n&&X.Image&&(new Image().src=t.v,n=!0),n||(t.g=Em(t.l,null),t.g.da(t.v)),t.F=Date.now(),$r(t)}vm(e)}function Io(e){e.g&&(Ll(e),e.g.cancel(),e.g=null)}function pm(e){Io(e),e.u&&(X.clearTimeout(e.u),e.u=null),_o(e),e.h.cancel(),e.m&&(typeof e.m=="number"&&X.clearTimeout(e.m),e.m=null)}function To(e){im(e.h)||e.m||(e.m=!0,Bp(e.Ja,e),e.C=0)}function ad(e,t){var n;n=t?t.m:e.U++;const s=cn(e.F);vt(s,"SID",e.I),vt(s,"RID",n),vt(s,"AID",e.T),ai(e,s),e.o&&e.s&&Ol(s,e.o,e.s),n=new oi(e,e.j,n,e.C+1),e.o===null&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=mm(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),Rl(e.h,n),_c(n,s,t)}function ai(e,t){e.ia&&Il(e.ia,function(n,s){vt(t,s,n)}),e.l&&tm({},function(n,s){vt(t,s,n)})}function mm(e,t,n){n=Math.min(e.i.length,n);var s=e.l?ge(e.l.Ra,e.l,e):null;t:{var r=e.i;let i=-1;for(;;){const o=["count="+n];i==-1?0<n?(i=r[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let l=0;l<n;l++){let h=r[l].h;const d=r[l].g;if(h-=i,0>h)i=Math.max(0,r[l].h-100),a=!1;else try{SE(d,o,"req"+h+"_")}catch{s&&s(d)}}if(a){s=o.join("&");break t}}}return e=e.i.splice(0,n),t.D=e,s}function gm(e){e.g||e.u||(e.Z=1,Bp(e.Ia,e),e.A=0)}function Pl(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=ii(ge(e.Ia,e),wm(e,e.A)),e.A++,!0)}function Ll(e){e.B!=null&&(X.clearTimeout(e.B),e.B=null)}function cd(e){e.g=new oi(e,e.j,"rpc",e.Z),e.o===null&&(e.g.H=e.s),e.g.N=0;var t=cn(e.sa);vt(t,"RID","rpc"),vt(t,"SID",e.I),vt(t,"CI",e.L?"0":"1"),vt(t,"AID",e.T),vt(t,"TYPE","xmlhttp"),ai(e,t),e.o&&e.s&&Ol(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Yo(cn(t)),n.s=null,n.P=!0,Xp(n,e)}function _o(e){e.v!=null&&(X.clearTimeout(e.v),e.v=null)}function ym(e,t){var n=null;if(e.g==t){_o(e),Ll(e),e.g=null;var s=2}else{if(!Cc(e.h,t))return;n=t.D,am(e.h,t),s=1}if(e.G!=0){if(e.pa=t.Y,t.i)if(s==1){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;zt(s=Qo(),new Gp(s,n)),To(e)}else gm(e);else if((r=t.o)==3||r==0&&0<e.pa||!(s==1&&function(i,o){return!(om(i.h)>=i.h.j-(i.m?1:0)||(i.m?(i.i=o.D.concat(i.i),0):i.G==1||i.G==2||i.C>=(i.Za?0:i.$a)||(i.m=ii(ge(i.Ja,i,o),wm(i,i.C)),i.C++,0)))}(e,t)||s==2&&Pl(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:Wn(e,5);break;case 4:Wn(e,10);break;case 3:Wn(e,6);break;default:Wn(e,2)}}}function wm(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function Wn(e,t){if(e.j.info("Error code "+t),t==2){var n=null;e.l&&(n=null);var s=ge(e.kb,e);n||(n=new ts("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||wo(n,"https"),Yo(n)),function(r,i){const o=new po;if(X.Image){const a=new Image;a.onload=ki(Ai,o,a,"TestLoadImage: loaded",!0,i),a.onerror=ki(Ai,o,a,"TestLoadImage: error",!1,i),a.onabort=ki(Ai,o,a,"TestLoadImage: abort",!1,i),a.ontimeout=ki(Ai,o,a,"TestLoadImage: timeout",!1,i),X.setTimeout(function(){a.ontimeout&&a.ontimeout()},1e4),a.src=r}else i(!1)}(n.toString(),s)}else le(2);e.G=0,e.l&&e.l.va(t),vm(e),pm(e)}function vm(e){if(e.G=0,e.la=[],e.l){const t=cm(e.h);t.length==0&&e.i.length==0||(Gh(e.la,t),Gh(e.la,e.i),e.h.i.length=0,bl(e.i),e.i.length=0),e.l.ua()}}function bm(e,t,n){var s=n instanceof ts?cn(n):new ts(n,void 0);if(s.g!="")t&&(s.g=t+"."+s.g),vo(s,s.m);else{var r=X.location;s=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var i=new ts(null,void 0);s&&wo(i,s),t&&(i.g=t),r&&vo(i,r),n&&(i.l=n),s=i}return n=e.D,t=e.za,n&&t&&vt(s,n,t),vt(s,"VER",e.ma),ai(e,s),s}function Em(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return(t=n&&e.Da&&!e.ra?new Et(new kr({jb:!0})):new Et(e.ra)).Ka(e.H),t}function ld(){}function Ki(){if(qs&&!(10<=Number(cE)))throw Error("Environmental error: no available transport.")}function be(e,t){Bt.call(this),this.g=new fm(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!ho(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!ho(t)&&(this.g.D=t,(e=this.h)!==null&&t in e&&t in(e=this.h)&&delete e[t]),this.j=new Es(this)}function ud(e){Nl.call(this);var t=e.__sm__;if(t){t:{for(const n in t){e=n;break t}e=void 0}(this.i=e)&&(e=this.i,t=t!==null&&e in t?t[e]:void 0),this.data=t}else this.data=e}function hd(){Dl.call(this),this.status=1}function Es(e){this.g=e}(G=Et.prototype).Ka=function(e){this.L=e},G.da=function(e,t,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ic.g(),this.C=this.u?Jh(this.u):Jh(Ic),this.g.onreadystatechange=ge(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(i){return void rd(this,i)}if(e=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var r in s)n.set(r,s[r]);else{if(typeof s.keys!="function"||typeof s.get!="function")throw Error("Unknown input type for opt_headers: "+String(s));for(const i of s.keys())n.set(i,s.get(i))}s=Array.from(n.keys()).find(i=>i.toLowerCase()=="content-type"),r=X.FormData&&e instanceof X.FormData,!(0<=Ap(NE,t))||s||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of n)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hm(this),0<this.B&&((this.K=function(i){return qs&&oE()&&typeof i.timeout=="number"&&i.ontimeout!==void 0}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=ge(this.qa,this)):this.A=Al(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(i){rd(this,i)}},G.qa=function(){vl!==void 0&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,zt(this,"timeout"),this.abort(8))},G.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,zt(this,"complete"),zt(this,"abort"),Eo(this))},G.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Eo(this,!0)),Et.X.M.call(this)},G.Ha=function(){this.s||(this.F||this.v||this.l?id(this):this.fb())},G.fb=function(){id(this)},G.aa=function(){try{return 2<nn(this)?this.g.status:-1}catch{return-1}},G.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}},G.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&t.indexOf(e)==0&&(t=t.substring(e.length)),AE(t)}},G.Ea=function(){return this.m},G.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)},(G=fm.prototype).ma=8,G.G=1,G.Ja=function(e){if(this.m)if(this.m=null,this.G==1){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new oi(this,this.j,e,void 0);let i=this.s;if(this.S&&(i?(i=Rp(i),Op(i,this.S)):i=this.S),this.o!==null||this.N||(r.H=i,i=null),this.O)t:{for(var t=0,n=0;n<this.i.length;n++){var s=this.i[n];if((s="__data__"in s.g&&typeof(s=s.g.__data__)=="string"?s.length:void 0)===void 0)break;if(4096<(t+=s)){t=n;break t}if(t===4096||n===this.i.length-1){t=n+1;break t}}t=1e3}else t=1e3;t=mm(this,r,t),vt(n=cn(this.F),"RID",e),vt(n,"CVER",22),this.D&&vt(n,"X-HTTP-Session-Id",this.D),ai(this,n),i&&(this.N?t="headers="+encodeURIComponent(String(dm(i)))+"&"+t:this.o&&Ol(n,this.o,i)),Rl(this.h,r),this.Ya&&vt(n,"TYPE","init"),this.O?(vt(n,"$req",t),vt(n,"SID","null"),r.Z=!0,_c(r,n,null)):_c(r,n,t),this.G=2}}else this.G==3&&(e?ad(this,e):this.i.length==0||im(this.h)||ad(this))},G.Ia=function(){if(this.u=null,cd(this),this.$&&!(this.K||this.g==null||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=ii(ge(this.eb,this),e)}},G.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,le(10),Io(this),cd(this))},G.cb=function(){this.v!=null&&(this.v=null,Io(this),Pl(this),le(19))},G.kb=function(e){e?(this.j.info("Successfully pinged google.com"),le(2)):(this.j.info("Failed to ping google.com"),le(1))},(G=ld.prototype).xa=function(){},G.wa=function(){},G.va=function(){},G.ua=function(){},G.Ra=function(){},Ki.prototype.g=function(e,t){return new be(e,t)},Ht(be,Bt),be.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;le(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=bm(e,null,e.V),To(e)},be.prototype.close=function(){xc(this.g)},be.prototype.u=function(e){var t=this.g;if(typeof e=="string"){var n={};n.__data__=e,e=n}else this.v&&((n={}).__data__=Sl(e),e=n);t.i.push(new class{constructor(s,r){this.h=s,this.g=r}}(t.ab++,e)),t.G==3&&To(t)},be.prototype.M=function(){this.g.l=null,delete this.j,xc(this.g),delete this.g,be.X.M.call(this)},Ht(ud,Nl),Ht(hd,Dl),Ht(Es,ld),Es.prototype.xa=function(){zt(this.g,"a")},Es.prototype.wa=function(e){zt(this.g,new ud(e))},Es.prototype.va=function(e){zt(this.g,new hd)},Es.prototype.ua=function(){zt(this.g,"b")},Ki.prototype.createWebChannel=Ki.prototype.g,be.prototype.send=be.prototype.u,be.prototype.open=be.prototype.m,be.prototype.close=be.prototype.close,Hi.NO_ERROR=0,Hi.TIMEOUT=8,Hi.HTTP_ERROR=6,Wp.COMPLETE="complete",Qp.EventType=lr,lr.OPEN="a",lr.CLOSE="b",lr.ERROR="c",lr.MESSAGE="d",Bt.prototype.listen=Bt.prototype.N,Et.prototype.listenOnce=Et.prototype.O,Et.prototype.getLastError=Et.prototype.Oa,Et.prototype.getLastErrorCode=Et.prototype.Ea,Et.prototype.getStatus=Et.prototype.aa,Et.prototype.getResponseJson=Et.prototype.Sa,Et.prototype.getResponseText=Et.prototype.fa,Et.prototype.send=Et.prototype.da,Et.prototype.setWithCredentials=Et.prototype.Ka;var qa=Hi,DE=Wp,RE=Zn,OE=10,PE=11,LE=kr,xi=Qp,ME=Et;const dd="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Yt.UNAUTHENTICATED=new Yt(null),Yt.GOOGLE_CREDENTIALS=new Yt("google-credentials-uid"),Yt.FIRST_PARTY=new Yt("first-party-uid"),Yt.MOCK_USER=new Yt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Zs="9.20.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const as=new ul("@firebase/firestore");function fd(){return as.logLevel}function z(e,...t){if(as.logLevel<=ut.DEBUG){const n=t.map(Ml);as.debug(`Firestore (${Zs}): ${e}`,...n)}}function ln(e,...t){if(as.logLevel<=ut.ERROR){const n=t.map(Ml);as.error(`Firestore (${Zs}): ${e}`,...n)}}function ko(e,...t){if(as.logLevel<=ut.WARN){const n=t.map(Ml);as.warn(`Firestore (${Zs}): ${e}`,...n)}}function Ml(e){if(typeof e=="string")return e;try{return t=e,JSON.stringify(t)}catch{return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Q(e="Unexpected state"){const t=`FIRESTORE (${Zs}) INTERNAL ASSERTION FAILED: `+e;throw ln(t),new Error(t)}function yt(e,t){e||Q()}function et(e,t){return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const A={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class q extends fn{constructor(t,n){super(t,n),this.code=t,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Im{constructor(t,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class FE{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,n){t.enqueueRetryable(()=>n(Yt.UNAUTHENTICATED))}shutdown(){}}class UE{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,n){this.changeListener=n,t.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class VE{constructor(t){this.t=t,this.currentUser=Yt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,n){let s=this.i;const r=l=>this.i!==s?(s=this.i,n(l)):Promise.resolve();let i=new es;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new es,t.enqueueRetryable(()=>r(this.currentUser))};const o=()=>{const l=i;t.enqueueRetryable(async()=>{await l.promise,await r(this.currentUser)})},a=l=>{z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(z("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new es)}},0),o()}getToken(){const t=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==t?(z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(yt(typeof s.accessToken=="string"),new Im(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return yt(t===null||typeof t=="string"),new Yt(t)}}class BE{constructor(t,n,s){this.h=t,this.l=n,this.m=s,this.type="FirstParty",this.user=Yt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const t=this.p();return t&&this.g.set("Authorization",t),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class jE{constructor(t,n,s){this.h=t,this.l=n,this.m=s}getToken(){return Promise.resolve(new BE(this.h,this.l,this.m))}start(t,n){t.enqueueRetryable(()=>n(Yt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class $E{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class qE{constructor(t){this.I=t,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(t,n){const s=i=>{i.error!=null&&z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,z("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(i.token):Promise.resolve()};this.o=i=>{t.enqueueRetryable(()=>s(i))};const r=i=>{z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?r(i):z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(n=>n?(yt(typeof n.token=="string"),this.T=n.token,new $E(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(e){const t=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(n);else for(let s=0;s<e;s++)n[s]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{static A(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let s="";for(;s.length<20;){const r=zE(40);for(let i=0;i<r.length;++i)s.length<20&&r[i]<n&&(s+=t.charAt(r[i]%62))}return s}}function dt(e,t){return e<t?-1:e>t?1:0}function zs(e,t,n){return e.length===t.length&&e.every((s,r)=>n(s,t[r]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nt{constructor(t,n){if(this.seconds=t,this.nanoseconds=n,n<0)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new q(A.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(t<-62135596800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new q(A.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return Nt.fromMillis(Date.now())}static fromDate(t){return Nt.fromMillis(t.getTime())}static fromMillis(t){const n=Math.floor(t/1e3),s=Math.floor(1e6*(t-1e3*n));return new Nt(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?dt(this.nanoseconds,t.nanoseconds):dt(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(t){this.timestamp=t}static fromTimestamp(t){return new J(t)}static min(){return new J(new Nt(0,0))}static max(){return new J(new Nt(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,n,s){n===void 0?n=0:n>t.length&&Q(),s===void 0?s=t.length-n:s>t.length-n&&Q(),this.segments=t,this.offset=n,this.len=s}get length(){return this.len}isEqual(t){return zr.comparator(this,t)===0}child(t){const n=this.segments.slice(this.offset,this.limit());return t instanceof zr?t.forEach(s=>{n.push(s)}):n.push(t),this.construct(n)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==t.get(n))return!1;return!0}forEach(t){for(let n=this.offset,s=this.limit();n<s;n++)t(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,n){const s=Math.min(t.length,n.length);for(let r=0;r<s;r++){const i=t.get(r),o=n.get(r);if(i<o)return-1;if(i>o)return 1}return t.length<n.length?-1:t.length>n.length?1:0}}class gt extends zr{construct(t,n,s){return new gt(t,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const n=[];for(const s of t){if(s.indexOf("//")>=0)throw new q(A.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(r=>r.length>0))}return new gt(n)}static emptyPath(){return new gt([])}}const HE=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class te extends zr{construct(t,n,s){return new te(t,n,s)}static isValidIdentifier(t){return HE.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),te.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new te(["__name__"])}static fromServerFormat(t){const n=[];let s="",r=0;const i=()=>{if(s.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;r<t.length;){const a=t[r];if(a==="\\"){if(r+1===t.length)throw new q(A.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const l=t[r+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new q(A.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);s+=l,r+=2}else a==="`"?(o=!o,r++):a!=="."||o?(s+=a,r++):(i(),r++)}if(i(),o)throw new q(A.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new te(n)}static emptyPath(){return new te([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K{constructor(t){this.path=t}static fromPath(t){return new K(gt.fromString(t))}static fromName(t){return new K(gt.fromString(t).popFirst(5))}static empty(){return new K(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,n){return gt.comparator(t.path,n.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new K(new gt(t.slice()))}}function KE(e){return new Dn(e.readTime,e.key,-1)}class Dn{constructor(t,n,s){this.readTime=t,this.documentKey=n,this.largestBatchId=s}static min(){return new Dn(J.min(),K.empty(),-1)}static max(){return new Dn(J.max(),K.empty(),-1)}}function GE(e,t){let n=e.readTime.compareTo(t.readTime);return n!==0?n:(n=K.comparator(e.documentKey,t.documentKey),n!==0?n:dt(e.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QE{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ci(e){if(e.code!==A.FAILED_PRECONDITION||e.message!==WE)throw e;z("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(t){return this.next(void 0,t)}next(t,n){return this.callbackAttached&&Q(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(t,this.result):new D((s,r)=>{this.nextCallback=i=>{this.wrapSuccess(t,i).next(s,r)},this.catchCallback=i=>{this.wrapFailure(n,i).next(s,r)}})}toPromise(){return new Promise((t,n)=>{this.next(t,n)})}wrapUserFunction(t){try{const n=t();return n instanceof D?n:D.resolve(n)}catch(n){return D.reject(n)}}wrapSuccess(t,n){return t?this.wrapUserFunction(()=>t(n)):D.resolve(n)}wrapFailure(t,n){return t?this.wrapUserFunction(()=>t(n)):D.reject(n)}static resolve(t){return new D((n,s)=>{n(t)})}static reject(t){return new D((n,s)=>{s(t)})}static waitFor(t){return new D((n,s)=>{let r=0,i=0,o=!1;t.forEach(a=>{++r,a.next(()=>{++i,o&&i===r&&n()},l=>s(l))}),o=!0,i===r&&n()})}static or(t){let n=D.resolve(!1);for(const s of t)n=n.next(r=>r?D.resolve(r):s());return n}static forEach(t,n){const s=[];return t.forEach((r,i)=>{s.push(n.call(this,r,i))}),this.waitFor(s)}static mapArray(t,n){return new D((s,r)=>{const i=t.length,o=new Array(i);let a=0;for(let l=0;l<i;l++){const h=l;n(t[h]).next(d=>{o[h]=d,++a,a===i&&s(o)},d=>r(d))}})}static doWhile(t,n){return new D((s,r)=>{const i=()=>{t()===!0?n().next(()=>{i()},r):s()};i()})}}function li(e){return e.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,n){this.previousValue=t,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.ut&&this.ut(t),t}}function Xo(e){return e==null}function Co(e){return e===0&&1/e==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function tr(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function _m(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fl.ct=-1;class Rt{constructor(t,n){this.comparator=t,this.root=n||qt.EMPTY}insert(t,n){return new Rt(this.comparator,this.root.insert(t,n,this.comparator).copy(null,null,qt.BLACK,null,null))}remove(t){return new Rt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,qt.BLACK,null,null))}get(t){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(t,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(t){let n=0,s=this.root;for(;!s.isEmpty();){const r=this.comparator(t,s.key);if(r===0)return n+s.left.size;r<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((n,s)=>(t(n,s),!1))}toString(){const t=[];return this.inorderTraversal((n,s)=>(t.push(`${n}:${s}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new Ni(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new Ni(this.root,t,this.comparator,!1)}getReverseIterator(){return new Ni(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new Ni(this.root,t,this.comparator,!0)}}class Ni{constructor(t,n,s,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=n?s(t.key,n):1,n&&r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(i===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const n={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class qt{constructor(t,n,s,r,i){this.key=t,this.value=n,this.color=s??qt.RED,this.left=r??qt.EMPTY,this.right=i??qt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,n,s,r,i){return new qt(t??this.key,n??this.value,s??this.color,r??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,n,s){let r=this;const i=s(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,n,s),null):i===0?r.copy(null,n,null,null,null):r.copy(null,null,null,null,r.right.insert(t,n,s)),r.fixUp()}removeMin(){if(this.left.isEmpty())return qt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,n){let s,r=this;if(n(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,n),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),n(t,r.key)===0){if(r.right.isEmpty())return qt.EMPTY;s=r.right.min(),r=r.copy(s.key,s.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,n))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,qt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,qt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,n)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Q();const t=this.left.check();if(t!==this.right.check())throw Q();return t+(this.isRed()?0:1)}}qt.EMPTY=null,qt.RED=!0,qt.BLACK=!1,qt.EMPTY=new class{constructor(){this.size=0}get key(){throw Q()}get value(){throw Q()}get color(){throw Q()}get left(){throw Q()}get right(){throw Q()}copy(e,t,n,s,r){return this}insert(e,t,n){return new qt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(t){this.comparator=t,this.data=new Rt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((n,s)=>(t(n),!1))}forEachInRange(t,n){const s=this.data.getIteratorFrom(t[0]);for(;s.hasNext();){const r=s.getNext();if(this.comparator(r.key,t[1])>=0)return;n(r.key)}}forEachWhile(t,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!t(s.getNext().key))return}firstAfterOrEqual(t){const n=this.data.getIteratorFrom(t);return n.hasNext()?n.getNext().key:null}getIterator(){return new md(this.data.getIterator())}getIteratorFrom(t){return new md(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let n=this;return n.size<t.size&&(n=t,t=this),t.forEach(s=>{n=n.add(s)}),n}isEqual(t){if(!(t instanceof Dt)||this.size!==t.size)return!1;const n=this.data.getIterator(),s=t.data.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(this.comparator(r,i)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(n=>{t.push(n)}),t}toString(){const t=[];return this.forEach(n=>t.push(n)),"SortedSet("+t.toString()+")"}copy(t){const n=new Dt(this.comparator);return n.data=t,n}}class md{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pe{constructor(t){this.fields=t,t.sort(te.comparator)}static empty(){return new Pe([])}unionWith(t){let n=new Dt(te.comparator);for(const s of this.fields)n=n.add(s);for(const s of t)n=n.add(s);return new Pe(n.toArray())}covers(t){for(const n of this.fields)if(n.isPrefixOf(t))return!0;return!1}isEqual(t){return zs(this.fields,t.fields,(n,s)=>n.isEqual(s))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YE extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(t){this.binaryString=t}static fromBase64String(t){const n=function(s){try{return atob(s)}catch(r){throw typeof DOMException<"u"&&r instanceof DOMException?new YE("Invalid base64 string: "+r):r}}(t);return new re(n)}static fromUint8Array(t){const n=function(s){let r="";for(let i=0;i<s.length;++i)r+=String.fromCharCode(s[i]);return r}(t);return new re(n)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const n=new Uint8Array(t.length);for(let s=0;s<t.length;s++)n[s]=t.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return dt(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}re.EMPTY_BYTE_STRING=new re("");const XE=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Rn(e){if(yt(!!e),typeof e=="string"){let t=0;const n=XE.exec(e);if(yt(!!n),n[1]){let r=n[1];r=(r+"000000000").substr(0,9),t=Number(r)}const s=new Date(e);return{seconds:Math.floor(s.getTime()/1e3),nanos:t}}return{seconds:kt(e.seconds),nanos:kt(e.nanos)}}function kt(e){return typeof e=="number"?e:typeof e=="string"?Number(e):0}function Hs(e){return typeof e=="string"?re.fromBase64String(e):re.fromUint8Array(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function km(e){var t,n;return((n=(((t=e==null?void 0:e.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Cm(e){const t=e.mapValue.fields.__previous_value__;return km(t)?Cm(t):t}function Hr(e){const t=Rn(e.mapValue.fields.__local_write_time__.timestampValue);return new Nt(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JE{constructor(t,n,s,r,i,o,a,l){this.databaseId=t,this.appId=n,this.persistenceKey=s,this.host=r,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class Kr{constructor(t,n){this.projectId=t,this.database=n||"(default)"}static empty(){return new Kr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Kr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function cs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?km(e)?4:function(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}(e)?9007199254740991:10:Q()}function Xe(e,t){if(e===t)return!0;const n=cs(e);if(n!==cs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hr(e).isEqual(Hr(t));case 3:return function(s,r){if(typeof s.timestampValue=="string"&&typeof r.timestampValue=="string"&&s.timestampValue.length===r.timestampValue.length)return s.timestampValue===r.timestampValue;const i=Rn(s.timestampValue),o=Rn(r.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(s,r){return Hs(s.bytesValue).isEqual(Hs(r.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(s,r){return kt(s.geoPointValue.latitude)===kt(r.geoPointValue.latitude)&&kt(s.geoPointValue.longitude)===kt(r.geoPointValue.longitude)}(e,t);case 2:return function(s,r){if("integerValue"in s&&"integerValue"in r)return kt(s.integerValue)===kt(r.integerValue);if("doubleValue"in s&&"doubleValue"in r){const i=kt(s.doubleValue),o=kt(r.doubleValue);return i===o?Co(i)===Co(o):isNaN(i)&&isNaN(o)}return!1}(e,t);case 9:return zs(e.arrayValue.values||[],t.arrayValue.values||[],Xe);case 10:return function(s,r){const i=s.mapValue.fields||{},o=r.mapValue.fields||{};if(pd(i)!==pd(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Xe(i[a],o[a])))return!1;return!0}(e,t);default:return Q()}}function Gr(e,t){return(e.values||[]).find(n=>Xe(n,t))!==void 0}function Ks(e,t){if(e===t)return 0;const n=cs(e),s=cs(t);if(n!==s)return dt(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return dt(e.booleanValue,t.booleanValue);case 2:return function(r,i){const o=kt(r.integerValue||r.doubleValue),a=kt(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(e,t);case 3:return gd(e.timestampValue,t.timestampValue);case 4:return gd(Hr(e),Hr(t));case 5:return dt(e.stringValue,t.stringValue);case 6:return function(r,i){const o=Hs(r),a=Hs(i);return o.compareTo(a)}(e.bytesValue,t.bytesValue);case 7:return function(r,i){const o=r.split("/"),a=i.split("/");for(let l=0;l<o.length&&l<a.length;l++){const h=dt(o[l],a[l]);if(h!==0)return h}return dt(o.length,a.length)}(e.referenceValue,t.referenceValue);case 8:return function(r,i){const o=dt(kt(r.latitude),kt(i.latitude));return o!==0?o:dt(kt(r.longitude),kt(i.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(r,i){const o=r.values||[],a=i.values||[];for(let l=0;l<o.length&&l<a.length;++l){const h=Ks(o[l],a[l]);if(h)return h}return dt(o.length,a.length)}(e.arrayValue,t.arrayValue);case 10:return function(r,i){if(r===Di.mapValue&&i===Di.mapValue)return 0;if(r===Di.mapValue)return 1;if(i===Di.mapValue)return-1;const o=r.fields||{},a=Object.keys(o),l=i.fields||{},h=Object.keys(l);a.sort(),h.sort();for(let d=0;d<a.length&&d<h.length;++d){const p=dt(a[d],h[d]);if(p!==0)return p;const g=Ks(o[a[d]],l[h[d]]);if(g!==0)return g}return dt(a.length,h.length)}(e.mapValue,t.mapValue);default:throw Q()}}function gd(e,t){if(typeof e=="string"&&typeof t=="string"&&e.length===t.length)return dt(e,t);const n=Rn(e),s=Rn(t),r=dt(n.seconds,s.seconds);return r!==0?r:dt(n.nanos,s.nanos)}function Gs(e){return Nc(e)}function Nc(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(s){const r=Rn(s);return`time(${r.seconds},${r.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Hs(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,K.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(s){let r="[",i=!0;for(const o of s.values||[])i?i=!1:r+=",",r+=Nc(o);return r+"]"}(e.arrayValue):"mapValue"in e?function(s){const r=Object.keys(s.fields||{}).sort();let i="{",o=!0;for(const a of r)o?o=!1:i+=",",i+=`${a}:${Nc(s.fields[a])}`;return i+"}"}(e.mapValue):Q();var t,n}function yd(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Dc(e){return!!e&&"integerValue"in e}function Ul(e){return!!e&&"arrayValue"in e}function wd(e){return!!e&&"nullValue"in e}function vd(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Gi(e){return!!e&&"mapValue"in e}function Cr(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&typeof e.timestampValue=="object")return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return tr(e.mapValue.fields,(n,s)=>t.mapValue.fields[n]=Cr(s)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Cr(e.arrayValue.values[n]);return t}return Object.assign({},e)}class Ce{constructor(t){this.value=t}static empty(){return new Ce({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let n=this.value;for(let s=0;s<t.length-1;++s)if(n=(n.mapValue.fields||{})[t.get(s)],!Gi(n))return null;return n=(n.mapValue.fields||{})[t.lastSegment()],n||null}}set(t,n){this.getFieldsMap(t.popLast())[t.lastSegment()]=Cr(n)}setAll(t){let n=te.emptyPath(),s={},r=[];t.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,s,r),s={},r=[],n=a.popLast()}o?s[a.lastSegment()]=Cr(o):r.push(a.lastSegment())});const i=this.getFieldsMap(n);this.applyChanges(i,s,r)}delete(t){const n=this.field(t.popLast());Gi(n)&&n.mapValue.fields&&delete n.mapValue.fields[t.lastSegment()]}isEqual(t){return Xe(this.value,t.value)}getFieldsMap(t){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<t.length;++s){let r=n.mapValue.fields[t.get(s)];Gi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},n.mapValue.fields[t.get(s)]=r),n=r}return n.mapValue.fields}applyChanges(t,n,s){tr(n,(r,i)=>t[r]=i);for(const r of s)delete t[r]}clone(){return new Ce(Cr(this.value))}}function Sm(e){const t=[];return tr(e.fields,(n,s)=>{const r=new te([n]);if(Gi(s)){const i=Sm(s.mapValue).fields;if(i.length===0)t.push(r);else for(const o of i)t.push(r.child(o))}else t.push(r)}),new Pe(t);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Jt{constructor(t,n,s,r,i,o,a){this.key=t,this.documentType=n,this.version=s,this.readTime=r,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Jt(t,0,J.min(),J.min(),J.min(),Ce.empty(),0)}static newFoundDocument(t,n,s,r){return new Jt(t,1,n,J.min(),s,r,0)}static newNoDocument(t,n){return new Jt(t,2,n,J.min(),J.min(),Ce.empty(),0)}static newUnknownDocument(t,n){return new Jt(t,3,n,J.min(),J.min(),Ce.empty(),2)}convertToFoundDocument(t,n){return!this.createTime.isEqual(J.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Ce.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Ce.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=J.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Jt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Jt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t,n){this.position=t,this.inclusive=n}}function bd(e,t,n){let s=0;for(let r=0;r<e.position.length;r++){const i=t[r],o=e.position[r];if(s=i.field.isKeyField()?K.comparator(K.fromName(o.referenceValue),n.key):Ks(o,n.data.field(i.field)),i.dir==="desc"&&(s*=-1),s!==0)break}return s}function Ed(e,t){if(e===null)return t===null;if(t===null||e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Xe(e.position[n],t.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(t,n="asc"){this.field=t,this.dir=n}}function ZE(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Am{}class Ct extends Am{constructor(t,n,s){super(),this.field=t,this.op=n,this.value=s}static create(t,n,s){return t.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(t,n,s):new tI(t,n,s):n==="array-contains"?new sI(t,s):n==="in"?new rI(t,s):n==="not-in"?new iI(t,s):n==="array-contains-any"?new oI(t,s):new Ct(t,n,s)}static createKeyFieldInFilter(t,n,s){return n==="in"?new eI(t,s):new nI(t,s)}matches(t){const n=t.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ks(n,this.value)):n!==null&&cs(this.value)===cs(n)&&this.matchesComparison(Ks(n,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return Q()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Me extends Am{constructor(t,n){super(),this.filters=t,this.op=n,this.ht=null}static create(t,n){return new Me(t,n)}matches(t){return xm(this)?this.filters.find(n=>!n.matches(t))===void 0:this.filters.find(n=>n.matches(t))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((t,n)=>t.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const t=this.lt(n=>n.isInequality());return t!==null?t.field:null}lt(t){for(const n of this.getFlattenedFilters())if(t(n))return n;return null}}function xm(e){return e.op==="and"}function Nm(e){return function(t){for(const n of t.filters)if(n instanceof Me)return!1;return!0}(e)&&xm(e)}function Rc(e){if(e instanceof Ct)return e.field.canonicalString()+e.op.toString()+Gs(e.value);if(Nm(e))return e.filters.map(t=>Rc(t)).join(",");{const t=e.filters.map(n=>Rc(n)).join(",");return`${e.op}(${t})`}}function Dm(e,t){return e instanceof Ct?function(n,s){return s instanceof Ct&&n.op===s.op&&n.field.isEqual(s.field)&&Xe(n.value,s.value)}(e,t):e instanceof Me?function(n,s){return s instanceof Me&&n.op===s.op&&n.filters.length===s.filters.length&&n.filters.reduce((r,i,o)=>r&&Dm(i,s.filters[o]),!0)}(e,t):void Q()}function Rm(e){return e instanceof Ct?function(t){return`${t.field.canonicalString()} ${t.op} ${Gs(t.value)}`}(e):e instanceof Me?function(t){return t.op.toString()+" {"+t.getFilters().map(Rm).join(" ,")+"}"}(e):"Filter"}class tI extends Ct{constructor(t,n,s){super(t,n,s),this.key=K.fromName(s.referenceValue)}matches(t){const n=K.comparator(t.key,this.key);return this.matchesComparison(n)}}class eI extends Ct{constructor(t,n){super(t,"in",n),this.keys=Om("in",n)}matches(t){return this.keys.some(n=>n.isEqual(t.key))}}class nI extends Ct{constructor(t,n){super(t,"not-in",n),this.keys=Om("not-in",n)}matches(t){return!this.keys.some(n=>n.isEqual(t.key))}}function Om(e,t){var n;return(((n=t.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>K.fromName(s.referenceValue))}class sI extends Ct{constructor(t,n){super(t,"array-contains",n)}matches(t){const n=t.data.field(this.field);return Ul(n)&&Gr(n.arrayValue,this.value)}}class rI extends Ct{constructor(t,n){super(t,"in",n)}matches(t){const n=t.data.field(this.field);return n!==null&&Gr(this.value.arrayValue,n)}}class iI extends Ct{constructor(t,n){super(t,"not-in",n)}matches(t){if(Gr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=t.data.field(this.field);return n!==null&&!Gr(this.value.arrayValue,n)}}class oI extends Ct{constructor(t,n){super(t,"array-contains-any",n)}matches(t){const n=t.data.field(this.field);return!(!Ul(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Gr(this.value.arrayValue,s))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aI{constructor(t,n=null,s=[],r=[],i=null,o=null,a=null){this.path=t,this.collectionGroup=n,this.orderBy=s,this.filters=r,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Id(e,t=null,n=[],s=[],r=null,i=null,o=null){return new aI(e,t,n,s,r,i,o)}function Vl(e){const t=et(e);if(t.ft===null){let n=t.path.canonicalString();t.collectionGroup!==null&&(n+="|cg:"+t.collectionGroup),n+="|f:",n+=t.filters.map(s=>Rc(s)).join(","),n+="|ob:",n+=t.orderBy.map(s=>function(r){return r.field.canonicalString()+r.dir}(s)).join(","),Xo(t.limit)||(n+="|l:",n+=t.limit),t.startAt&&(n+="|lb:",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Gs(s)).join(",")),t.endAt&&(n+="|ub:",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Gs(s)).join(",")),t.ft=n}return t.ft}function Bl(e,t){if(e.limit!==t.limit||e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!ZE(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Dm(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ed(e.startAt,t.startAt)&&Ed(e.endAt,t.endAt)}function Oc(e){return K.isDocumentKey(e.path)&&e.collectionGroup===null&&e.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t,n=null,s=[],r=[],i=null,o="F",a=null,l=null){this.path=t,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=r,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this.wt=null,this.startAt,this.endAt}}function jl(e){return new er(e)}function Td(e){return e.filters.length===0&&e.limit===null&&e.startAt==null&&e.endAt==null&&(e.explicitOrderBy.length===0||e.explicitOrderBy.length===1&&e.explicitOrderBy[0].field.isKeyField())}function $l(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Jo(e){for(const t of e.filters){const n=t.getFirstInequalityField();if(n!==null)return n}return null}function Pm(e){return e.collectionGroup!==null}function Os(e){const t=et(e);if(t.dt===null){t.dt=[];const n=Jo(t),s=$l(t);if(n!==null&&s===null)n.isKeyField()||t.dt.push(new Rs(n)),t.dt.push(new Rs(te.keyField(),"asc"));else{let r=!1;for(const i of t.explicitOrderBy)t.dt.push(i),i.field.isKeyField()&&(r=!0);if(!r){const i=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new Rs(te.keyField(),i))}}}return t.dt}function un(e){const t=et(e);if(!t.wt)if(t.limitType==="F")t.wt=Id(t.path,t.collectionGroup,Os(t),t.filters,t.limit,t.startAt,t.endAt);else{const n=[];for(const i of Os(t)){const o=i.dir==="desc"?"asc":"desc";n.push(new Rs(i.field,o))}const s=t.endAt?new So(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new So(t.startAt.position,t.startAt.inclusive):null;t.wt=Id(t.path,t.collectionGroup,n,t.filters,t.limit,s,r)}return t.wt}function Pc(e,t){t.getFirstInequalityField(),Jo(e);const n=e.filters.concat([t]);return new er(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Lc(e,t,n){return new er(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Zo(e,t){return Bl(un(e),un(t))&&e.limitType===t.limitType}function Lm(e){return`${Vl(un(e))}|lt:${e.limitType}`}function Mc(e){return`Query(target=${function(t){let n=t.path.canonicalString();return t.collectionGroup!==null&&(n+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(n+=`, filters: [${t.filters.map(s=>Rm(s)).join(", ")}]`),Xo(t.limit)||(n+=", limit: "+t.limit),t.orderBy.length>0&&(n+=`, orderBy: [${t.orderBy.map(s=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(s)).join(", ")}]`),t.startAt&&(n+=", startAt: ",n+=t.startAt.inclusive?"b:":"a:",n+=t.startAt.position.map(s=>Gs(s)).join(",")),t.endAt&&(n+=", endAt: ",n+=t.endAt.inclusive?"a:":"b:",n+=t.endAt.position.map(s=>Gs(s)).join(",")),`Target(${n})`}(un(e))}; limitType=${e.limitType})`}function ta(e,t){return t.isFoundDocument()&&function(n,s){const r=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(r):K.isDocumentKey(n.path)?n.path.isEqual(r):n.path.isImmediateParentOf(r)}(e,t)&&function(n,s){for(const r of Os(n))if(!r.field.isKeyField()&&s.data.field(r.field)===null)return!1;return!0}(e,t)&&function(n,s){for(const r of n.filters)if(!r.matches(s))return!1;return!0}(e,t)&&function(n,s){return!(n.startAt&&!function(r,i,o){const a=bd(r,i,o);return r.inclusive?a<=0:a<0}(n.startAt,Os(n),s))&&!(n.endAt&&!function(r,i,o){const a=bd(r,i,o);return r.inclusive?a>=0:a>0}(n.endAt,Os(n),s))}(e,t)}function Mm(e){return(t,n)=>{let s=!1;for(const r of Os(e)){const i=cI(r,t,n);if(i!==0)return i;s=s||r.field.isKeyField()}return 0}}function cI(e,t,n){const s=e.field.isKeyField()?K.comparator(t.key,n.key):function(r,i,o){const a=i.data.field(r),l=o.data.field(r);return a!==null&&l!==null?Ks(a,l):Q()}(e.field,t,n);switch(e.dir){case"asc":return s;case"desc":return-1*s;default:return Q()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(t,n){this.mapKeyFn=t,this.equalsFn=n,this.inner={},this.innerSize=0}get(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s!==void 0){for(const[r,i]of s)if(this.equalsFn(r,t))return i}}has(t){return this.get(t)!==void 0}set(t,n){const s=this.mapKeyFn(t),r=this.inner[s];if(r===void 0)return this.inner[s]=[[t,n]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return void(r[i]=[t,n]);r.push([t,n]),this.innerSize++}delete(t){const n=this.mapKeyFn(t),s=this.inner[n];if(s===void 0)return!1;for(let r=0;r<s.length;r++)if(this.equalsFn(s[r][0],t))return s.length===1?delete this.inner[n]:s.splice(r,1),this.innerSize--,!0;return!1}forEach(t){tr(this.inner,(n,s)=>{for(const[r,i]of s)t(r,i)})}isEmpty(){return _m(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lI=new Rt(K.comparator);function hn(){return lI}const Fm=new Rt(K.comparator);function yr(...e){let t=Fm;for(const n of e)t=t.insert(n.key,n);return t}function Um(e){let t=Fm;return e.forEach((n,s)=>t=t.insert(n,s.overlayedDocument)),t}function Qn(){return Sr()}function Vm(){return Sr()}function Sr(){return new nr(e=>e.toString(),(e,t)=>e.isEqual(t))}const uI=new Rt(K.comparator),hI=new Dt(K.comparator);function rt(...e){let t=hI;for(const n of e)t=t.add(n);return t}const dI=new Dt(dt);function Bm(){return dI}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Co(t)?"-0":t}}function $m(e){return{integerValue:""+e}}function fI(e,t){return function(n){return typeof n=="number"&&Number.isInteger(n)&&!Co(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}(t)?$m(t):jm(e,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ea{constructor(){this._=void 0}}function pI(e,t,n){return e instanceof Ao?function(s,r){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return r&&(i.fields.__previous_value__=r),{mapValue:i}}(n,t):e instanceof Wr?zm(e,t):e instanceof Qr?Hm(e,t):function(s,r){const i=qm(s,r),o=_d(i)+_d(s._t);return Dc(i)&&Dc(s._t)?$m(o):jm(s.serializer,o)}(e,t)}function mI(e,t,n){return e instanceof Wr?zm(e,t):e instanceof Qr?Hm(e,t):n}function qm(e,t){return e instanceof xo?Dc(n=t)||function(s){return!!s&&"doubleValue"in s}(n)?t:{integerValue:0}:null;var n}class Ao extends ea{}class Wr extends ea{constructor(t){super(),this.elements=t}}function zm(e,t){const n=Km(t);for(const s of e.elements)n.some(r=>Xe(r,s))||n.push(s);return{arrayValue:{values:n}}}class Qr extends ea{constructor(t){super(),this.elements=t}}function Hm(e,t){let n=Km(t);for(const s of e.elements)n=n.filter(r=>!Xe(r,s));return{arrayValue:{values:n}}}class xo extends ea{constructor(t,n){super(),this.serializer=t,this._t=n}}function _d(e){return kt(e.integerValue||e.doubleValue)}function Km(e){return Ul(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}class gI{constructor(t,n){this.version=t,this.transformResults=n}}class rn{constructor(t,n){this.updateTime=t,this.exists=n}static none(){return new rn}static exists(t){return new rn(void 0,t)}static updateTime(t){return new rn(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function Wi(e,t){return e.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(e.updateTime):e.exists===void 0||e.exists===t.isFoundDocument()}class na{}function Gm(e,t){if(!e.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return e.isNoDocument()?new Qm(e.key,rn.none()):new ui(e.key,e.data,rn.none());{const n=e.data,s=Ce.empty();let r=new Dt(te.comparator);for(let i of t.fields)if(!r.has(i)){let o=n.field(i);o===null&&i.length>1&&(i=i.popLast(),o=n.field(i)),o===null?s.delete(i):s.set(i,o),r=r.add(i)}return new ls(e.key,s,new Pe(r.toArray()),rn.none())}}function yI(e,t,n){e instanceof ui?function(s,r,i){const o=s.value.clone(),a=Cd(s.fieldTransforms,r,i.transformResults);o.setAll(a),r.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(e,t,n):e instanceof ls?function(s,r,i){if(!Wi(s.precondition,r))return void r.convertToUnknownDocument(i.version);const o=Cd(s.fieldTransforms,r,i.transformResults),a=r.data;a.setAll(Wm(s)),a.setAll(o),r.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(e,t,n):function(s,r,i){r.convertToNoDocument(i.version).setHasCommittedMutations()}(0,t,n)}function Ar(e,t,n,s){return e instanceof ui?function(r,i,o,a){if(!Wi(r.precondition,i))return o;const l=r.value.clone(),h=Sd(r.fieldTransforms,a,i);return l.setAll(h),i.convertToFoundDocument(i.version,l).setHasLocalMutations(),null}(e,t,n,s):e instanceof ls?function(r,i,o,a){if(!Wi(r.precondition,i))return o;const l=Sd(r.fieldTransforms,a,i),h=i.data;return h.setAll(Wm(r)),h.setAll(l),i.convertToFoundDocument(i.version,h).setHasLocalMutations(),o===null?null:o.unionWith(r.fieldMask.fields).unionWith(r.fieldTransforms.map(d=>d.field))}(e,t,n,s):function(r,i,o){return Wi(r.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(e,t,n)}function wI(e,t){let n=null;for(const s of e.fieldTransforms){const r=t.data.field(s.field),i=qm(s.transform,r||null);i!=null&&(n===null&&(n=Ce.empty()),n.set(s.field,i))}return n||null}function kd(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&zs(n,s,(r,i)=>function(o,a){return o.field.isEqual(a.field)&&function(l,h){return l instanceof Wr&&h instanceof Wr||l instanceof Qr&&h instanceof Qr?zs(l.elements,h.elements,Xe):l instanceof xo&&h instanceof xo?Xe(l._t,h._t):l instanceof Ao&&h instanceof Ao}(o.transform,a.transform)}(r,i))}(e.fieldTransforms,t.fieldTransforms)&&(e.type===0?e.value.isEqual(t.value):e.type!==1||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class ui extends na{constructor(t,n,s,r=[]){super(),this.key=t,this.value=n,this.precondition=s,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ls extends na{constructor(t,n,s,r,i=[]){super(),this.key=t,this.data=n,this.fieldMask=s,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Wm(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=e.data.field(n);t.set(n,s)}}),t}function Cd(e,t,n){const s=new Map;yt(e.length===n.length);for(let r=0;r<n.length;r++){const i=e[r],o=i.transform,a=t.data.field(i.field);s.set(i.field,mI(o,a,n[r]))}return s}function Sd(e,t,n){const s=new Map;for(const r of e){const i=r.transform,o=n.data.field(r.field);s.set(r.field,pI(i,o,t))}return s}class Qm extends na{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class vI extends na{constructor(t,n){super(),this.key=t,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bI{constructor(t,n,s,r){this.batchId=t,this.localWriteTime=n,this.baseMutations=s,this.mutations=r}applyToRemoteDocument(t,n){const s=n.mutationResults;for(let r=0;r<this.mutations.length;r++){const i=this.mutations[r];i.key.isEqual(t.key)&&yI(i,t,s[r])}}applyToLocalView(t,n){for(const s of this.baseMutations)s.key.isEqual(t.key)&&(n=Ar(s,t,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(t.key)&&(n=Ar(s,t,n,this.localWriteTime));return n}applyToLocalDocumentSet(t,n){const s=Vm();return this.mutations.forEach(r=>{const i=t.get(r.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=n.has(r.key)?null:a;const l=Gm(o,a);l!==null&&s.set(r.key,l),o.isValidDocument()||o.convertToNoDocument(J.min())}),s}keys(){return this.mutations.reduce((t,n)=>t.add(n.key),rt())}isEqual(t){return this.batchId===t.batchId&&zs(this.mutations,t.mutations,(n,s)=>kd(n,s))&&zs(this.baseMutations,t.baseMutations,(n,s)=>kd(n,s))}}class ql{constructor(t,n,s,r){this.batch=t,this.commitVersion=n,this.mutationResults=s,this.docVersions=r}static from(t,n,s){yt(t.mutations.length===s.length);let r=uI;const i=t.mutations;for(let o=0;o<i.length;o++)r=r.insert(i[o].key,s[o].version);return new ql(t,n,s,r)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EI{constructor(t,n){this.largestBatchId=t,this.mutation=n}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class II{constructor(t){this.count=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var _t,at;function Ym(e){if(e===void 0)return ln("GRPC error has no .code"),A.UNKNOWN;switch(e){case _t.OK:return A.OK;case _t.CANCELLED:return A.CANCELLED;case _t.UNKNOWN:return A.UNKNOWN;case _t.DEADLINE_EXCEEDED:return A.DEADLINE_EXCEEDED;case _t.RESOURCE_EXHAUSTED:return A.RESOURCE_EXHAUSTED;case _t.INTERNAL:return A.INTERNAL;case _t.UNAVAILABLE:return A.UNAVAILABLE;case _t.UNAUTHENTICATED:return A.UNAUTHENTICATED;case _t.INVALID_ARGUMENT:return A.INVALID_ARGUMENT;case _t.NOT_FOUND:return A.NOT_FOUND;case _t.ALREADY_EXISTS:return A.ALREADY_EXISTS;case _t.PERMISSION_DENIED:return A.PERMISSION_DENIED;case _t.FAILED_PRECONDITION:return A.FAILED_PRECONDITION;case _t.ABORTED:return A.ABORTED;case _t.OUT_OF_RANGE:return A.OUT_OF_RANGE;case _t.UNIMPLEMENTED:return A.UNIMPLEMENTED;case _t.DATA_LOSS:return A.DATA_LOSS;default:return Q()}}(at=_t||(_t={}))[at.OK=0]="OK",at[at.CANCELLED=1]="CANCELLED",at[at.UNKNOWN=2]="UNKNOWN",at[at.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",at[at.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",at[at.NOT_FOUND=5]="NOT_FOUND",at[at.ALREADY_EXISTS=6]="ALREADY_EXISTS",at[at.PERMISSION_DENIED=7]="PERMISSION_DENIED",at[at.UNAUTHENTICATED=16]="UNAUTHENTICATED",at[at.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",at[at.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",at[at.ABORTED=10]="ABORTED",at[at.OUT_OF_RANGE=11]="OUT_OF_RANGE",at[at.UNIMPLEMENTED=12]="UNIMPLEMENTED",at[at.INTERNAL=13]="INTERNAL",at[at.UNAVAILABLE=14]="UNAVAILABLE",at[at.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ri}static getOrCreateInstance(){return Ri===null&&(Ri=new zl),Ri}onExistenceFilterMismatch(t){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,t),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(t){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(t))}}let Ri=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sa{constructor(t,n,s,r,i){this.snapshotVersion=t,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,n,s){const r=new Map;return r.set(t,hi.createSynthesizedTargetChangeForCurrentChange(t,n,s)),new sa(J.min(),r,Bm(),hn(),rt())}}class hi{constructor(t,n,s,r,i){this.resumeToken=t,this.current=n,this.addedDocuments=s,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,n,s){return new hi(s,n,rt(),rt(),rt())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi{constructor(t,n,s,r){this.It=t,this.removedTargetIds=n,this.key=s,this.Tt=r}}class Xm{constructor(t,n){this.targetId=t,this.Et=n}}class Jm{constructor(t,n,s=re.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=n,this.resumeToken=s,this.cause=r}}class Ad{constructor(){this.At=0,this.Rt=Nd(),this.vt=re.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(t){t.approximateByteSize()>0&&(this.Pt=!0,this.vt=t)}Ct(){let t=rt(),n=rt(),s=rt();return this.Rt.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:n=n.add(r);break;case 1:s=s.add(r);break;default:Q()}}),new hi(this.vt,this.bt,t,n,s)}xt(){this.Pt=!1,this.Rt=Nd()}Nt(t,n){this.Pt=!0,this.Rt=this.Rt.insert(t,n)}kt(t){this.Pt=!0,this.Rt=this.Rt.remove(t)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class TI{constructor(t){this.Ft=t,this.Bt=new Map,this.Lt=hn(),this.qt=xd(),this.Ut=new Dt(dt)}Kt(t){for(const n of t.It)t.Tt&&t.Tt.isFoundDocument()?this.Gt(n,t.Tt):this.Qt(n,t.key,t.Tt);for(const n of t.removedTargetIds)this.Qt(n,t.key,t.Tt)}zt(t){this.forEachTarget(t,n=>{const s=this.jt(n);switch(t.state){case 0:this.Wt(n)&&s.Dt(t.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(t.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(t.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(t.resumeToken));break;default:Q()}})}forEachTarget(t,n){t.targetIds.length>0?t.targetIds.forEach(n):this.Bt.forEach((s,r)=>{this.Wt(r)&&n(r)})}Jt(t){var n;const s=t.targetId,r=t.Et.count,i=this.Yt(s);if(i){const o=i.target;if(Oc(o))if(r===0){const a=new K(o.path);this.Qt(s,a,Jt.newNoDocument(a,J.min()))}else yt(r===1);else{const a=this.Zt(s);a!==r&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=zl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:t.Et.count}))}}}Xt(t){const n=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Oc(a.target)){const l=new K(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,Jt.newNoDocument(l,t))}i.St&&(n.set(o,i.Ct()),i.xt())}});let s=rt();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(l=>{const h=this.Yt(l);return!h||h.purpose===2||(a=!1,!1)}),a&&(s=s.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(t));const r=new sa(t,n,this.Ut,this.Lt,s);return this.Lt=hn(),this.qt=xd(),this.Ut=new Dt(dt),r}Gt(t,n){if(!this.Wt(t))return;const s=this.te(t,n.key)?2:0;this.jt(t).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(t))}Qt(t,n,s){if(!this.Wt(t))return;const r=this.jt(t);this.te(t,n)?r.Nt(n,1):r.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(t)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(t){this.Bt.delete(t)}Zt(t){const n=this.jt(t).Ct();return this.Ft.getRemoteKeysForTarget(t).size+n.addedDocuments.size-n.removedDocuments.size}Ot(t){this.jt(t).Ot()}jt(t){let n=this.Bt.get(t);return n||(n=new Ad,this.Bt.set(t,n)),n}ee(t){let n=this.qt.get(t);return n||(n=new Dt(dt),this.qt=this.qt.insert(t,n)),n}Wt(t){const n=this.Yt(t)!==null;return n||z("WatchChangeAggregator","Detected inactive target",t),n}Yt(t){const n=this.Bt.get(t);return n&&n.Vt?null:this.Ft.ne(t)}Ht(t){this.Bt.set(t,new Ad),this.Ft.getRemoteKeysForTarget(t).forEach(n=>{this.Qt(t,n,null)})}te(t,n){return this.Ft.getRemoteKeysForTarget(t).has(n)}}function xd(){return new Rt(K.comparator)}function Nd(){return new Rt(K.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _I={asc:"ASCENDING",desc:"DESCENDING"},kI={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},CI={and:"AND",or:"OR"};class SI{constructor(t,n){this.databaseId=t,this.useProto3Json=n}}function No(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Zm(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function AI(e,t){return No(e,t.toTimestamp())}function Ge(e){return yt(!!e),J.fromTimestamp(function(t){const n=Rn(t);return new Nt(n.seconds,n.nanos)}(e))}function Hl(e,t){return function(n){return new gt(["projects",n.projectId,"databases",n.database])}(e).child("documents").child(t).canonicalString()}function tg(e){const t=gt.fromString(e);return yt(rg(t)),t}function Fc(e,t){return Hl(e.databaseId,t.path)}function za(e,t){const n=tg(t);if(n.get(1)!==e.databaseId.projectId)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new q(A.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new K(eg(n))}function Uc(e,t){return Hl(e.databaseId,t)}function Vc(e){return new gt(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function eg(e){return yt(e.length>4&&e.get(4)==="documents"),e.popFirst(5)}function Dd(e,t,n){return{name:Fc(e,t),fields:n.value.mapValue.fields}}function xI(e,t){return{documents:[Uc(e,t.path)]}}function NI(e,t){const n={structuredQuery:{}},s=t.path;t.collectionGroup!==null?(n.parent=Uc(e,s),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Uc(e,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const r=function(l){if(l.length!==0)return sg(Me.create(l,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const i=function(l){if(l.length!==0)return l.map(h=>function(d){return{field:Is(d.field),direction:RI(d.dir)}}(h))}(t.orderBy);i&&(n.structuredQuery.orderBy=i);const o=function(l,h){return l.useProto3Json||Xo(h)?h:{value:h}}(e,t.limit);var a;return o!==null&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(t.endAt)),n}function DI(e){let t=function(d){const p=tg(d);return p.length===4?gt.emptyPath():eg(p)}(e.parent);const n=e.structuredQuery,s=n.from?n.from.length:0;let r=null;if(s>0){yt(s===1);const d=n.from[0];d.allDescendants?r=d.collectionId:t=t.child(d.collectionId)}let i=[];n.where&&(i=function(d){const p=ng(d);return p instanceof Me&&Nm(p)?p.getFilters():[p]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(d=>function(p){return new Rs(Ts(p.field),function(g){switch(g){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(p.direction))}(d)));let a=null;n.limit&&(a=function(d){let p;return p=typeof d=="object"?d.value:d,Xo(p)?null:p}(n.limit));let l=null;n.startAt&&(l=function(d){const p=!!d.before,g=d.values||[];return new So(g,p)}(n.startAt));let h=null;return n.endAt&&(h=function(d){const p=!d.before,g=d.values||[];return new So(g,p)}(n.endAt)),function(d,p,g,w,E,_,M,O){return new er(d,p,g,w,E,_,M,O)}(t,r,o,i,a,"F",l,h)}function ng(e){return e.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const n=Ts(t.unaryFilter.field);return Ct.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=Ts(t.unaryFilter.field);return Ct.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ts(t.unaryFilter.field);return Ct.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Ts(t.unaryFilter.field);return Ct.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Q()}}(e):e.fieldFilter!==void 0?function(t){return Ct.create(Ts(t.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Q()}}(t.fieldFilter.op),t.fieldFilter.value)}(e):e.compositeFilter!==void 0?function(t){return Me.create(t.compositeFilter.filters.map(n=>ng(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Q()}}(t.compositeFilter.op))}(e):Q()}function RI(e){return _I[e]}function OI(e){return kI[e]}function PI(e){return CI[e]}function Is(e){return{fieldPath:e.canonicalString()}}function Ts(e){return te.fromServerFormat(e.fieldPath)}function sg(e){return e instanceof Ct?function(t){if(t.op==="=="){if(vd(t.value))return{unaryFilter:{field:Is(t.field),op:"IS_NAN"}};if(wd(t.value))return{unaryFilter:{field:Is(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(vd(t.value))return{unaryFilter:{field:Is(t.field),op:"IS_NOT_NAN"}};if(wd(t.value))return{unaryFilter:{field:Is(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Is(t.field),op:OI(t.op),value:t.value}}}(e):e instanceof Me?function(t){const n=t.getFilters().map(s=>sg(s));return n.length===1?n[0]:{compositeFilter:{op:PI(t.op),filters:n}}}(e):Q()}function LI(e){const t=[];return e.fields.forEach(n=>t.push(n.canonicalString())),{fieldPaths:t}}function rg(e){return e.length>=4&&e.get(0)==="projects"&&e.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(t,n,s,r,i=J.min(),o=J.min(),a=re.EMPTY_BYTE_STRING){this.target=t,this.targetId=n,this.purpose=s,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(t){return new ns(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,n){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new ns(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(t){this.se=t}}function FI(e){const t=DI({parent:e.parent,structuredQuery:e.structuredQuery});return e.limitType==="LAST"?Lc(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UI{constructor(){this.He=new VI}addToCollectionParentIndex(t,n){return this.He.add(n),D.resolve()}getCollectionParents(t,n){return D.resolve(this.He.getEntries(n))}addFieldIndex(t,n){return D.resolve()}deleteFieldIndex(t,n){return D.resolve()}getDocumentsMatchingTarget(t,n){return D.resolve(null)}getIndexType(t,n){return D.resolve(0)}getFieldIndexes(t,n){return D.resolve([])}getNextCollectionGroupToUpdate(t){return D.resolve(null)}getMinOffset(t,n){return D.resolve(Dn.min())}getMinOffsetFromCollectionGroup(t,n){return D.resolve(Dn.min())}updateCollectionGroup(t,n,s){return D.resolve()}updateIndexEntries(t,n){return D.resolve()}}class VI{constructor(){this.index={}}add(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n]||new Dt(gt.comparator),i=!r.has(s);return this.index[n]=r.add(s),i}has(t){const n=t.lastSegment(),s=t.popLast(),r=this.index[n];return r&&r.has(s)}getEntries(t){return(this.index[t]||new Dt(gt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ws{constructor(t){this.Rn=t}next(){return this.Rn+=2,this.Rn}static vn(){return new Ws(0)}static bn(){return new Ws(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BI{constructor(){this.changes=new nr(t=>t.toString(),(t,n)=>t.isEqual(n)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,n){this.assertNotApplied(),this.changes.set(t,Jt.newInvalidDocument(t).setReadTime(n))}getEntry(t,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?D.resolve(s):this.getFromCache(t,n)}getEntries(t,n){return this.getAllFromCache(t,n)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jI{constructor(t,n){this.overlayedDocument=t,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $I{constructor(t,n,s,r){this.remoteDocumentCache=t,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=r}getDocument(t,n){let s=null;return this.documentOverlayCache.getOverlay(t,n).next(r=>(s=r,this.remoteDocumentCache.getEntry(t,n))).next(r=>(s!==null&&Ar(s.mutation,r,Pe.empty(),Nt.now()),r))}getDocuments(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.getLocalViewOfDocuments(t,s,rt()).next(()=>s))}getLocalViewOfDocuments(t,n,s=rt()){const r=Qn();return this.populateOverlays(t,r,n).next(()=>this.computeViews(t,n,r,s).next(i=>{let o=yr();return i.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(t,n){const s=Qn();return this.populateOverlays(t,s,n).next(()=>this.computeViews(t,n,s,rt()))}populateOverlays(t,n,s){const r=[];return s.forEach(i=>{n.has(i)||r.push(i)}),this.documentOverlayCache.getOverlays(t,r).next(i=>{i.forEach((o,a)=>{n.set(o,a)})})}computeViews(t,n,s,r){let i=hn();const o=Sr(),a=Sr();return n.forEach((l,h)=>{const d=s.get(h.key);r.has(h.key)&&(d===void 0||d.mutation instanceof ls)?i=i.insert(h.key,h):d!==void 0?(o.set(h.key,d.mutation.getFieldMask()),Ar(d.mutation,h,d.mutation.getFieldMask(),Nt.now())):o.set(h.key,Pe.empty())}),this.recalculateAndSaveOverlays(t,i).next(l=>(l.forEach((h,d)=>o.set(h,d)),n.forEach((h,d)=>{var p;return a.set(h,new jI(d,(p=o.get(h))!==null&&p!==void 0?p:null))}),a))}recalculateAndSaveOverlays(t,n){const s=Sr();let r=new Rt((o,a)=>o-a),i=rt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const h=n.get(l);if(h===null)return;let d=s.get(l)||Pe.empty();d=a.applyToLocalView(h,d),s.set(l,d);const p=(r.get(a.batchId)||rt()).add(l);r=r.insert(a.batchId,p)})}).next(()=>{const o=[],a=r.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),h=l.key,d=l.value,p=Vm();d.forEach(g=>{if(!i.has(g)){const w=Gm(n.get(g),s.get(g));w!==null&&p.set(g,w),i=i.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(t,h,p))}return D.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(t,n){return this.remoteDocumentCache.getEntries(t,n).next(s=>this.recalculateAndSaveOverlays(t,s))}getDocumentsMatchingQuery(t,n,s){return function(r){return K.isDocumentKey(r.path)&&r.collectionGroup===null&&r.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(t,n.path):Pm(n)?this.getDocumentsMatchingCollectionGroupQuery(t,n,s):this.getDocumentsMatchingCollectionQuery(t,n,s)}getNextDocuments(t,n,s,r){return this.remoteDocumentCache.getAllFromCollectionGroup(t,n,s,r).next(i=>{const o=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,n,s.largestBatchId,r-i.size):D.resolve(Qn());let a=-1,l=i;return o.next(h=>D.forEach(h,(d,p)=>(a<p.largestBatchId&&(a=p.largestBatchId),i.get(d)?D.resolve():this.remoteDocumentCache.getEntry(t,d).next(g=>{l=l.insert(d,g)}))).next(()=>this.populateOverlays(t,h,i)).next(()=>this.computeViews(t,l,h,rt())).next(d=>({batchId:a,changes:Um(d)})))})}getDocumentsMatchingDocumentQuery(t,n){return this.getDocument(t,new K(n)).next(s=>{let r=yr();return s.isFoundDocument()&&(r=r.insert(s.key,s)),r})}getDocumentsMatchingCollectionGroupQuery(t,n,s){const r=n.collectionGroup;let i=yr();return this.indexManager.getCollectionParents(t,r).next(o=>D.forEach(o,a=>{const l=function(h,d){return new er(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,a.child(r));return this.getDocumentsMatchingCollectionQuery(t,l,s).next(h=>{h.forEach((d,p)=>{i=i.insert(d,p)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(t,n,s){let r;return this.documentOverlayCache.getOverlaysForCollection(t,n.path,s.largestBatchId).next(i=>(r=i,this.remoteDocumentCache.getDocumentsMatchingQuery(t,n,s,r))).next(i=>{r.forEach((a,l)=>{const h=l.getKey();i.get(h)===null&&(i=i.insert(h,Jt.newInvalidDocument(h)))});let o=yr();return i.forEach((a,l)=>{const h=r.get(a);h!==void 0&&Ar(h.mutation,l,Pe.empty(),Nt.now()),ta(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qI{constructor(t){this.serializer=t,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(t,n){return D.resolve(this.Zn.get(n))}saveBundleMetadata(t,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ge(s.createTime)}),D.resolve()}getNamedQuery(t,n){return D.resolve(this.Xn.get(n))}saveNamedQuery(t,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:FI(s.bundledQuery),readTime:Ge(s.readTime)}}(n)),D.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zI{constructor(){this.overlays=new Rt(K.comparator),this.ts=new Map}getOverlay(t,n){return D.resolve(this.overlays.get(n))}getOverlays(t,n){const s=Qn();return D.forEach(n,r=>this.getOverlay(t,r).next(i=>{i!==null&&s.set(r,i)})).next(()=>s)}saveOverlays(t,n,s){return s.forEach((r,i)=>{this.re(t,n,i)}),D.resolve()}removeOverlaysForBatchId(t,n,s){const r=this.ts.get(s);return r!==void 0&&(r.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(s)),D.resolve()}getOverlaysForCollection(t,n,s){const r=Qn(),i=n.length+1,o=new K(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,h=l.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===i&&l.largestBatchId>s&&r.set(l.getKey(),l)}return D.resolve(r)}getOverlaysForCollectionGroup(t,n,s,r){let i=new Rt((h,d)=>h-d);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let d=i.get(h.largestBatchId);d===null&&(d=Qn(),i=i.insert(h.largestBatchId,d)),d.set(h.getKey(),h)}}const a=Qn(),l=i.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((h,d)=>a.set(h,d)),!(a.size()>=r)););return D.resolve(a)}re(t,n,s){const r=this.overlays.get(s.key);if(r!==null){const o=this.ts.get(r.largestBatchId).delete(s.key);this.ts.set(r.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new EI(n,s));let i=this.ts.get(n);i===void 0&&(i=rt(),this.ts.set(n,i)),this.ts.set(n,i.add(s.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(){this.es=new Dt(Vt.ns),this.ss=new Dt(Vt.rs)}isEmpty(){return this.es.isEmpty()}addReference(t,n){const s=new Vt(t,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(t,n){t.forEach(s=>this.addReference(s,n))}removeReference(t,n){this.us(new Vt(t,n))}cs(t,n){t.forEach(s=>this.removeReference(s,n))}hs(t){const n=new K(new gt([])),s=new Vt(n,t),r=new Vt(n,t+1),i=[];return this.ss.forEachInRange([s,r],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(t=>this.us(t))}us(t){this.es=this.es.delete(t),this.ss=this.ss.delete(t)}fs(t){const n=new K(new gt([])),s=new Vt(n,t),r=new Vt(n,t+1);let i=rt();return this.ss.forEachInRange([s,r],o=>{i=i.add(o.key)}),i}containsKey(t){const n=new Vt(t,0),s=this.es.firstAfterOrEqual(n);return s!==null&&t.isEqual(s.key)}}class Vt{constructor(t,n){this.key=t,this.ds=n}static ns(t,n){return K.comparator(t.key,n.key)||dt(t.ds,n.ds)}static rs(t,n){return dt(t.ds,n.ds)||K.comparator(t.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HI{constructor(t,n){this.indexManager=t,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Dt(Vt.ns)}checkEmpty(t){return D.resolve(this.mutationQueue.length===0)}addMutationBatch(t,n,s,r){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new bI(i,n,s,r);this.mutationQueue.push(o);for(const a of r)this._s=this._s.add(new Vt(a.key,i)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return D.resolve(o)}lookupMutationBatch(t,n){return D.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(t,n){const s=n+1,r=this.ys(s),i=r<0?0:r;return D.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return D.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(t){return D.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,n){const s=new Vt(n,0),r=new Vt(n,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([s,r],o=>{const a=this.gs(o.ds);i.push(a)}),D.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,n){let s=new Dt(dt);return n.forEach(r=>{const i=new Vt(r,0),o=new Vt(r,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{s=s.add(a.ds)})}),D.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(t,n){const s=n.path,r=s.length+1;let i=s;K.isDocumentKey(i)||(i=i.child(""));const o=new Vt(new K(i),0);let a=new Dt(dt);return this._s.forEachWhile(l=>{const h=l.key.path;return!!s.isPrefixOf(h)&&(h.length===r&&(a=a.add(l.ds)),!0)},o),D.resolve(this.ps(a))}ps(t){const n=[];return t.forEach(s=>{const r=this.gs(s);r!==null&&n.push(r)}),n}removeMutationBatch(t,n){yt(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return D.forEach(n.mutations,r=>{const i=new Vt(r.key,n.batchId);return s=s.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this._s=s})}En(t){}containsKey(t,n){const s=new Vt(n,0),r=this._s.firstAfterOrEqual(s);return D.resolve(n.isEqual(r&&r.key))}performConsistencyCheck(t){return this.mutationQueue.length,D.resolve()}Is(t,n){return this.ys(t)}ys(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}gs(t){const n=this.ys(t);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KI{constructor(t){this.Ts=t,this.docs=new Rt(K.comparator),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,n){const s=n.key,r=this.docs.get(s),i=r?r.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(t,s.path.popLast())}removeEntry(t){const n=this.docs.get(t);n&&(this.docs=this.docs.remove(t),this.size-=n.size)}getEntry(t,n){const s=this.docs.get(n);return D.resolve(s?s.document.mutableCopy():Jt.newInvalidDocument(n))}getEntries(t,n){let s=hn();return n.forEach(r=>{const i=this.docs.get(r);s=s.insert(r,i?i.document.mutableCopy():Jt.newInvalidDocument(r))}),D.resolve(s)}getDocumentsMatchingQuery(t,n,s,r){let i=hn();const o=n.path,a=new K(o.child("")),l=this.docs.getIteratorFrom(a);for(;l.hasNext();){const{key:h,value:{document:d}}=l.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||GE(KE(d),s)<=0||(r.has(d.key)||ta(n,d))&&(i=i.insert(d.key,d.mutableCopy()))}return D.resolve(i)}getAllFromCollectionGroup(t,n,s,r){Q()}Es(t,n){return D.forEach(this.docs,s=>n(s))}newChangeBuffer(t){return new GI(this)}getSize(t){return D.resolve(this.size)}}class GI extends BI{constructor(t){super(),this.Jn=t}applyChanges(t){const n=[];return this.changes.forEach((s,r)=>{r.isValidDocument()?n.push(this.Jn.addEntry(t,r)):this.Jn.removeEntry(s)}),D.waitFor(n)}getFromCache(t,n){return this.Jn.getEntry(t,n)}getAllFromCache(t,n){return this.Jn.getEntries(t,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WI{constructor(t){this.persistence=t,this.As=new nr(n=>Vl(n),Bl),this.lastRemoteSnapshotVersion=J.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Kl,this.targetCount=0,this.bs=Ws.vn()}forEachTarget(t,n){return this.As.forEach((s,r)=>n(r)),D.resolve()}getLastRemoteSnapshotVersion(t){return D.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return D.resolve(this.Rs)}allocateTargetId(t){return this.highestTargetId=this.bs.next(),D.resolve(this.highestTargetId)}setTargetsMetadata(t,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),D.resolve()}Sn(t){this.As.set(t.target,t);const n=t.targetId;n>this.highestTargetId&&(this.bs=new Ws(n),this.highestTargetId=n),t.sequenceNumber>this.Rs&&(this.Rs=t.sequenceNumber)}addTargetData(t,n){return this.Sn(n),this.targetCount+=1,D.resolve()}updateTargetData(t,n){return this.Sn(n),D.resolve()}removeTargetData(t,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,D.resolve()}removeTargets(t,n,s){let r=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=n&&s.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(t,a.targetId)),r++)}),D.waitFor(i).next(()=>r)}getTargetCount(t){return D.resolve(this.targetCount)}getTargetData(t,n){const s=this.As.get(n)||null;return D.resolve(s)}addMatchingKeys(t,n,s){return this.vs.os(n,s),D.resolve()}removeMatchingKeys(t,n,s){this.vs.cs(n,s);const r=this.persistence.referenceDelegate,i=[];return r&&n.forEach(o=>{i.push(r.markPotentiallyOrphaned(t,o))}),D.waitFor(i)}removeMatchingKeysForTargetId(t,n){return this.vs.hs(n),D.resolve()}getMatchingKeysForTargetId(t,n){const s=this.vs.fs(n);return D.resolve(s)}containsKey(t,n){return D.resolve(this.vs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QI{constructor(t,n){this.Ps={},this.overlays={},this.Vs=new Fl(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=t(this),this.Ds=new WI(this),this.indexManager=new UI,this.remoteDocumentCache=function(s){return new KI(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new MI(n),this.xs=new qI(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let n=this.overlays[t.toKey()];return n||(n=new zI,this.overlays[t.toKey()]=n),n}getMutationQueue(t,n){let s=this.Ps[t.toKey()];return s||(s=new HI(n,this.referenceDelegate),this.Ps[t.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(t,n,s){z("MemoryPersistence","Starting transaction:",t);const r=new YI(this.Vs.next());return this.referenceDelegate.Ns(),s(r).next(i=>this.referenceDelegate.ks(r).next(()=>i)).toPromise().then(i=>(r.raiseOnCommittedEvent(),i))}Os(t,n){return D.or(Object.values(this.Ps).map(s=>()=>s.containsKey(t,n)))}}class YI extends QE{constructor(t){super(),this.currentSequenceNumber=t}}class Gl{constructor(t){this.persistence=t,this.$s=new Kl,this.Ms=null}static Fs(t){return new Gl(t)}get Bs(){if(this.Ms)return this.Ms;throw Q()}addReference(t,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),D.resolve()}removeReference(t,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),D.resolve()}markPotentiallyOrphaned(t,n){return this.Bs.add(n.toString()),D.resolve()}removeTarget(t,n){this.$s.hs(n.targetId).forEach(r=>this.Bs.add(r.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(t,n.targetId).next(r=>{r.forEach(i=>this.Bs.add(i.toString()))}).next(()=>s.removeTargetData(t,n))}Ns(){this.Ms=new Set}ks(t){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return D.forEach(this.Bs,s=>{const r=K.fromPath(s);return this.Ls(t,r).next(i=>{i||n.removeEntry(r,J.min())})}).next(()=>(this.Ms=null,n.apply(t)))}updateLimboDocument(t,n){return this.Ls(t,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(t){return 0}Ls(t,n){return D.or([()=>D.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(t,n),()=>this.persistence.Os(t,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,n,s,r){this.targetId=t,this.fromCache=n,this.Vi=s,this.Si=r}static Di(t,n){let s=rt(),r=rt();for(const i of n.docChanges)switch(i.type){case 0:s=s.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new Wl(t,n.fromCache,s,r)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(){this.Ci=!1}initialize(t,n){this.xi=t,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(t,n,s,r){return this.Ni(t,n).next(i=>i||this.ki(t,n,r,s)).next(i=>i||this.Oi(t,n))}Ni(t,n){if(Td(n))return D.resolve(null);let s=un(n);return this.indexManager.getIndexType(t,s).next(r=>r===0?null:(n.limit!==null&&r===1&&(n=Lc(n,null,"F"),s=un(n)),this.indexManager.getDocumentsMatchingTarget(t,s).next(i=>{const o=rt(...i);return this.xi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,s).next(l=>{const h=this.$i(n,a);return this.Mi(n,h,o,l.readTime)?this.Ni(t,Lc(n,null,"F")):this.Fi(t,h,n,l)}))})))}ki(t,n,s,r){return Td(n)||r.isEqual(J.min())?this.Oi(t,n):this.xi.getDocuments(t,s).next(i=>{const o=this.$i(n,i);return this.Mi(n,o,s,r)?this.Oi(t,n):(fd()<=ut.DEBUG&&z("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Mc(n)),this.Fi(t,o,n,function(a,l){const h=a.toTimestamp().seconds,d=a.toTimestamp().nanoseconds+1,p=J.fromTimestamp(d===1e9?new Nt(h+1,0):new Nt(h,d));return new Dn(p,K.empty(),l)}(r,-1)))})}$i(t,n){let s=new Dt(Mm(t));return n.forEach((r,i)=>{ta(t,i)&&(s=s.add(i))}),s}Mi(t,n,s,r){if(t.limit===null)return!1;if(s.size!==n.size)return!0;const i=t.limitType==="F"?n.last():n.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Oi(t,n){return fd()<=ut.DEBUG&&z("QueryEngine","Using full collection scan to execute query:",Mc(n)),this.xi.getDocumentsMatchingQuery(t,n,Dn.min())}Fi(t,n,s,r){return this.xi.getDocumentsMatchingQuery(t,s,r).next(i=>(n.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(t,n,s,r){this.persistence=t,this.Bi=n,this.serializer=r,this.Li=new Rt(dt),this.qi=new nr(i=>Vl(i),Bl),this.Ui=new Map,this.Ki=t.getRemoteDocumentCache(),this.Ds=t.getTargetCache(),this.xs=t.getBundleCache(),this.Gi(s)}Gi(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new $I(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>t.collect(n,this.Li))}}async function ig(e,t){const n=et(e);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let r;return n.mutationQueue.getAllMutationBatches(s).next(i=>(r=i,n.Gi(t),n.mutationQueue.getAllMutationBatches(s))).next(i=>{const o=[],a=[];let l=rt();for(const h of r){o.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}for(const h of i){a.push(h.batchId);for(const d of h.mutations)l=l.add(d.key)}return n.localDocuments.getDocuments(s,l).next(h=>({Qi:h,removedBatchIds:o,addedBatchIds:a}))})})}function og(e){const t=et(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",n=>t.Ds.getLastRemoteSnapshotVersion(n))}function ZI(e,t){const n=et(e),s=t.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const a=[];t.targetChanges.forEach((d,p)=>{const g=r.get(p);if(!g)return;a.push(n.Ds.removeMatchingKeys(i,d.removedDocuments,p).next(()=>n.Ds.addMatchingKeys(i,d.addedDocuments,p)));let w=g.withSequenceNumber(i.currentSequenceNumber);t.targetMismatches.has(p)?w=w.withResumeToken(re.EMPTY_BYTE_STRING,J.min()).withLastLimboFreeSnapshotVersion(J.min()):d.resumeToken.approximateByteSize()>0&&(w=w.withResumeToken(d.resumeToken,s)),r=r.insert(p,w),function(E,_,M){return E.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-E.snapshotVersion.toMicroseconds()>=3e8||M.addedDocuments.size+M.modifiedDocuments.size+M.removedDocuments.size>0}(g,w,d)&&a.push(n.Ds.updateTargetData(i,w))});let l=hn(),h=rt();if(t.documentUpdates.forEach(d=>{t.resolvedLimboDocuments.has(d)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(i,d))}),a.push(function(d,p,g){let w=rt(),E=rt();return g.forEach(_=>w=w.add(_)),p.getEntries(d,w).next(_=>{let M=hn();return g.forEach((O,H)=>{const P=_.get(O);H.isFoundDocument()!==P.isFoundDocument()&&(E=E.add(O)),H.isNoDocument()&&H.version.isEqual(J.min())?(p.removeEntry(O,H.readTime),M=M.insert(O,H)):!P.isValidDocument()||H.version.compareTo(P.version)>0||H.version.compareTo(P.version)===0&&P.hasPendingWrites?(p.addEntry(H),M=M.insert(O,H)):z("LocalStore","Ignoring outdated watch update for ",O,". Current version:",P.version," Watch version:",H.version)}),{zi:M,ji:E}})}(i,o,t.documentUpdates).next(d=>{l=d.zi,h=d.ji})),!s.isEqual(J.min())){const d=n.Ds.getLastRemoteSnapshotVersion(i).next(p=>n.Ds.setTargetsMetadata(i,i.currentSequenceNumber,s));a.push(d)}return D.waitFor(a).next(()=>o.apply(i)).next(()=>n.localDocuments.getLocalViewOfDocuments(i,l,h)).next(()=>l)}).then(i=>(n.Li=r,i))}function tT(e,t){const n=et(e);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(t===void 0&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,t)))}async function Bc(e,t,n){const s=et(e),r=s.Li.get(t),i=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",i,o=>s.persistence.referenceDelegate.removeTarget(o,r))}catch(o){if(!li(o))throw o;z("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}s.Li=s.Li.remove(t),s.qi.delete(r.target)}function Rd(e,t,n){const s=et(e);let r=J.min(),i=rt();return s.persistence.runTransaction("Execute query","readonly",o=>function(a,l,h){const d=et(a),p=d.qi.get(h);return p!==void 0?D.resolve(d.Li.get(p)):d.Ds.getTargetData(l,h)}(s,o,un(t)).next(a=>{if(a)return r=a.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,a.targetId).next(l=>{i=l})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,t,n?r:J.min(),n?i:rt())).next(a=>(function(l,h,d){let p=l.Ui.get(h)||J.min();d.forEach((g,w)=>{w.readTime.compareTo(p)>0&&(p=w.readTime)}),l.Ui.set(h,p)}(s,function(l){return l.collectionGroup||(l.path.length%2==1?l.path.lastSegment():l.path.get(l.path.length-2))}(t),a),{documents:a,Wi:i})))}class Od{constructor(){this.activeTargetIds=Bm()}tr(t){this.activeTargetIds=this.activeTargetIds.add(t)}er(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Xi(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class eT{constructor(){this.Br=new Od,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,n,s){}addLocalQueryTarget(t){return this.Br.tr(t),this.Lr[t]||"not-current"}updateQueryState(t,n,s){this.Lr[t]=n}removeLocalQueryTarget(t){this.Br.er(t)}isLocalQueryTarget(t){return this.Br.activeTargetIds.has(t)}clearQueryState(t){delete this.Lr[t]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(t){return this.Br.activeTargetIds.has(t)}start(){return this.Br=new Od,Promise.resolve()}handleUserChange(t,n,s){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nT{qr(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pd{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(t){this.zr.push(t)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.zr)t(0)}Qr(){z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.zr)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Oi=null;function Ha(){return Oi===null?Oi=268435456+Math.round(2147483648*Math.random()):Oi++,"0x"+Oi.toString(16);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const sT={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rT{constructor(t){this.Wr=t.Wr,this.Hr=t.Hr}Jr(t){this.Yr=t}Zr(t){this.Xr=t}onMessage(t){this.eo=t}close(){this.Hr()}send(t){this.Wr(t)}no(){this.Yr()}so(t){this.Xr(t)}io(t){this.eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="WebChannelConnection";class iT extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const n=t.ssl?"https":"http";this.ro=n+"://"+t.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(t,n,s,r,i){const o=Ha(),a=this.ao(t,n);z("RestConnection",`Sending RPC '${t}' ${o}:`,a,s);const l={};return this.ho(l,r,i),this.lo(t,a,l,s).then(h=>(z("RestConnection",`Received RPC '${t}' ${o}: `,h),h),h=>{throw ko("RestConnection",`RPC '${t}' ${o} failed with error: `,h,"url: ",a,"request:",s),h})}fo(t,n,s,r,i,o){return this.co(t,n,s,r,i)}ho(t,n,s){t["X-Goog-Api-Client"]="gl-js/ fire/"+Zs,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((r,i)=>t[i]=r),s&&s.headers.forEach((r,i)=>t[i]=r)}ao(t,n){const s=sT[t];return`${this.ro}/v1/${n}:${s}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}lo(t,n,s,r){const i=Ha();return new Promise((o,a)=>{const l=new ME;l.setWithCredentials(!0),l.listenOnce(DE.COMPLETE,()=>{try{switch(l.getLastErrorCode()){case qa.NO_ERROR:const d=l.getResponseJson();z(Qt,`XHR for RPC '${t}' ${i} received:`,JSON.stringify(d)),o(d);break;case qa.TIMEOUT:z(Qt,`RPC '${t}' ${i} timed out`),a(new q(A.DEADLINE_EXCEEDED,"Request time out"));break;case qa.HTTP_ERROR:const p=l.getStatus();if(z(Qt,`RPC '${t}' ${i} failed with status:`,p,"response text:",l.getResponseText()),p>0){let g=l.getResponseJson();Array.isArray(g)&&(g=g[0]);const w=g==null?void 0:g.error;if(w&&w.status&&w.message){const E=function(_){const M=_.toLowerCase().replace(/_/g,"-");return Object.values(A).indexOf(M)>=0?M:A.UNKNOWN}(w.status);a(new q(E,w.message))}else a(new q(A.UNKNOWN,"Server responded with status "+l.getStatus()))}else a(new q(A.UNAVAILABLE,"Connection failed."));break;default:Q()}}finally{z(Qt,`RPC '${t}' ${i} completed.`)}});const h=JSON.stringify(r);z(Qt,`RPC '${t}' ${i} sending request:`,r),l.send(n,"POST",h,s,15)})}wo(t,n,s){const r=Ha(),i=[this.ro,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=new Ki,a=Qo(),l={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(l.xmlHttpFactory=new LE({})),this.ho(l.initMessageHeaders,n,s),l.encodeInitMessageHeaders=!0;const h=i.join("");z(Qt,`Creating RPC '${t}' stream ${r}: ${h}`,l);const d=o.createWebChannel(h,l);let p=!1,g=!1;const w=new rT({Wr:_=>{g?z(Qt,`Not sending because RPC '${t}' stream ${r} is closed:`,_):(p||(z(Qt,`Opening RPC '${t}' stream ${r} transport.`),d.open(),p=!0),z(Qt,`RPC '${t}' stream ${r} sending:`,_),d.send(_))},Hr:()=>d.close()}),E=(_,M,O)=>{_.listen(M,H=>{try{O(H)}catch(P){setTimeout(()=>{throw P},0)}})};return E(d,xi.EventType.OPEN,()=>{g||z(Qt,`RPC '${t}' stream ${r} transport opened.`)}),E(d,xi.EventType.CLOSE,()=>{g||(g=!0,z(Qt,`RPC '${t}' stream ${r} transport closed`),w.so())}),E(d,xi.EventType.ERROR,_=>{g||(g=!0,ko(Qt,`RPC '${t}' stream ${r} transport errored:`,_),w.so(new q(A.UNAVAILABLE,"The operation could not be completed")))}),E(d,xi.EventType.MESSAGE,_=>{var M;if(!g){const O=_.data[0];yt(!!O);const H=O,P=H.error||((M=H[0])===null||M===void 0?void 0:M.error);if(P){z(Qt,`RPC '${t}' stream ${r} received error:`,P);const j=P.status;let ft=function(wt){const It=_t[wt];if(It!==void 0)return Ym(It)}(j),pt=P.message;ft===void 0&&(ft=A.INTERNAL,pt="Unknown error status: "+j+" with message "+P.message),g=!0,w.so(new q(ft,pt)),d.close()}else z(Qt,`RPC '${t}' stream ${r} received:`,O),w.io(O)}}),E(a,RE.STAT_EVENT,_=>{_.stat===OE?z(Qt,`RPC '${t}' stream ${r} detected buffering proxy`):_.stat===PE&&z(Qt,`RPC '${t}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{w.no()},0),w}}function Ka(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(e){return new SI(e,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ag{constructor(t,n,s=1e3,r=1.5,i=6e4){this.Ws=t,this.timerId=n,this._o=s,this.mo=r,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(t){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),r=Math.max(0,n-s);r>0&&z("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,r,()=>(this.To=Date.now(),t())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cg{constructor(t,n,s,r,i,o,a,l){this.Ws=t,this.bo=s,this.Po=r,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new ag(t,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(t){this.Bo(),this.stream.send(t)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(t,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,t!==4?this.Co.reset():n&&n.code===A.RESOURCE_EXHAUSTED?(ln(n.toString()),ln("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===A.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const t=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,r])=>{this.Vo===n&&this.Ko(s,r)},s=>{t(()=>{const r=new q(A.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(r)})})}Ko(t,n){const s=this.Uo(this.Vo);this.stream=this.Qo(t,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(r=>{s(()=>this.Go(r))}),this.stream.onMessage(r=>{s(()=>this.onMessage(r))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(t){return z("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}Uo(t){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===t?n():(z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oT extends cg{constructor(t,n,s,r,i,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i}Qo(t,n){return this.connection.wo("Listen",t,n)}onMessage(t){this.Co.reset();const n=function(r,i){let o;if("targetChange"in i){i.targetChange;const a=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Q()}(i.targetChange.targetChangeType||"NO_CHANGE"),l=i.targetChange.targetIds||[],h=function(g,w){return g.useProto3Json?(yt(w===void 0||typeof w=="string"),re.fromBase64String(w||"")):(yt(w===void 0||w instanceof Uint8Array),re.fromUint8Array(w||new Uint8Array))}(r,i.targetChange.resumeToken),d=i.targetChange.cause,p=d&&function(g){const w=g.code===void 0?A.UNKNOWN:Ym(g.code);return new q(w,g.message||"")}(d);o=new Jm(a,l,h,p||null)}else if("documentChange"in i){i.documentChange;const a=i.documentChange;a.document,a.document.name,a.document.updateTime;const l=za(r,a.document.name),h=Ge(a.document.updateTime),d=a.document.createTime?Ge(a.document.createTime):J.min(),p=new Ce({mapValue:{fields:a.document.fields}}),g=Jt.newFoundDocument(l,h,d,p),w=a.targetIds||[],E=a.removedTargetIds||[];o=new Qi(w,E,g.key,g)}else if("documentDelete"in i){i.documentDelete;const a=i.documentDelete;a.document;const l=za(r,a.document),h=a.readTime?Ge(a.readTime):J.min(),d=Jt.newNoDocument(l,h),p=a.removedTargetIds||[];o=new Qi([],p,d.key,d)}else if("documentRemove"in i){i.documentRemove;const a=i.documentRemove;a.document;const l=za(r,a.document),h=a.removedTargetIds||[];o=new Qi([],h,l,null)}else{if(!("filter"in i))return Q();{i.filter;const a=i.filter;a.targetId;const l=a.count||0,h=new II(l),d=a.targetId;o=new Xm(d,h)}}return o}(this.serializer,t),s=function(r){if(!("targetChange"in r))return J.min();const i=r.targetChange;return i.targetIds&&i.targetIds.length?J.min():i.readTime?Ge(i.readTime):J.min()}(t);return this.listener.zo(n,s)}jo(t){const n={};n.database=Vc(this.serializer),n.addTarget=function(r,i){let o;const a=i.target;return o=Oc(a)?{documents:xI(r,a)}:{query:NI(r,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=Zm(r,i.resumeToken):i.snapshotVersion.compareTo(J.min())>0&&(o.readTime=No(r,i.snapshotVersion.toTimestamp())),o}(this.serializer,t);const s=function(r,i){const o=function(a,l){switch(l){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Q()}}(0,i.purpose);return o==null?null:{"goog-listen-tags":o}}(this.serializer,t);s&&(n.labels=s),this.Fo(n)}Wo(t){const n={};n.database=Vc(this.serializer),n.removeTarget=t,this.Fo(n)}}class aT extends cg{constructor(t,n,s,r,i,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,r,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(t,n){return this.connection.wo("Write",t,n)}onMessage(t){if(yt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Ho){this.Co.reset();const n=function(r,i){return r&&r.length>0?(yt(i!==void 0),r.map(o=>function(a,l){let h=a.updateTime?Ge(a.updateTime):Ge(l);return h.isEqual(J.min())&&(h=Ge(l)),new gI(h,a.transformResults||[])}(o,i))):[]}(t.writeResults,t.commitTime),s=Ge(t.commitTime);return this.listener.Zo(s,n)}return yt(!t.writeResults||t.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const t={};t.database=Vc(this.serializer),this.Fo(t)}Yo(t){const n={streamToken:this.lastStreamToken,writes:t.map(s=>function(r,i){let o;if(i instanceof ui)o={update:Dd(r,i.key,i.value)};else if(i instanceof Qm)o={delete:Fc(r,i.key)};else if(i instanceof ls)o={update:Dd(r,i.key,i.data),updateMask:LI(i.fieldMask)};else{if(!(i instanceof vI))return Q();o={verify:Fc(r,i.key)}}return i.fieldTransforms.length>0&&(o.updateTransforms=i.fieldTransforms.map(a=>function(l,h){const d=h.transform;if(d instanceof Ao)return{fieldPath:h.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Wr)return{fieldPath:h.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Qr)return{fieldPath:h.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof xo)return{fieldPath:h.field.canonicalString(),increment:d._t};throw Q()}(0,a))),i.precondition.isNone||(o.currentDocument=function(a,l){return l.updateTime!==void 0?{updateTime:AI(a,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Q()}(r,i.precondition)),o}(this.serializer,s))};this.Fo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cT extends class{}{constructor(t,n,s,r){super(),this.authCredentials=t,this.appCheckCredentials=n,this.connection=s,this.serializer=r,this.eu=!1}nu(){if(this.eu)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}co(t,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,i])=>this.connection.co(t,n,s,r,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new q(A.UNKNOWN,r.toString())})}fo(t,n,s,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(t,n,s,i,o,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===A.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new q(A.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class lT{constructor(t,n){this.asyncQueue=t,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(t){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.uu("Offline")))}set(t){this.hu(),this.su=0,t==="Online"&&(this.ru=!1),this.uu(t)}uu(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}cu(t){const n=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(ln(n),this.ru=!1):z("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uT{constructor(t,n,s,r,i){this.localStore=t,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{s.enqueueAndForget(async()=>{us(this)&&(z("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=et(a);l.du.add(4),await Yr(l),l.mu.set("Unknown"),l.du.delete(4),await ia(l)}(this))})}),this.mu=new lT(s,r)}}async function ia(e){if(us(e))for(const t of e.wu)await t(!0)}async function Yr(e){for(const t of e.wu)await t(!1)}function lg(e,t){const n=et(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Xl(n)?Yl(n):sr(n).No()&&Ql(n,t))}function ug(e,t){const n=et(e),s=sr(n);n.fu.delete(t),s.No()&&hg(n,t),n.fu.size===0&&(s.No()?s.$o():us(n)&&n.mu.set("Unknown"))}function Ql(e,t){e.gu.Ot(t.targetId),sr(e).jo(t)}function hg(e,t){e.gu.Ot(t),sr(e).Wo(t)}function Yl(e){e.gu=new TI({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),sr(e).start(),e.mu.ou()}function Xl(e){return us(e)&&!sr(e).xo()&&e.fu.size>0}function us(e){return et(e).du.size===0}function dg(e){e.gu=void 0}async function hT(e){e.fu.forEach((t,n)=>{Ql(e,t)})}async function dT(e,t){dg(e),Xl(e)?(e.mu.au(t),Yl(e)):e.mu.set("Unknown")}async function fT(e,t,n){if(e.mu.set("Online"),t instanceof Jm&&t.state===2&&t.cause)try{await async function(s,r){const i=r.cause;for(const o of r.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,i),s.fu.delete(o),s.gu.removeTarget(o))}(e,t)}catch(s){z("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),s),await Do(e,s)}else if(t instanceof Qi?e.gu.Kt(t):t instanceof Xm?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(J.min()))try{const s=await og(e.localStore);n.compareTo(s)>=0&&await function(r,i){const o=r.gu.Xt(i);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const h=r.fu.get(l);h&&r.fu.set(l,h.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const l=r.fu.get(a);if(!l)return;r.fu.set(a,l.withResumeToken(re.EMPTY_BYTE_STRING,l.snapshotVersion)),hg(r,a);const h=new ns(l.target,a,1,l.sequenceNumber);Ql(r,h)}),r.remoteSyncer.applyRemoteEvent(o)}(e,n)}catch(s){z("RemoteStore","Failed to raise snapshot:",s),await Do(e,s)}}async function Do(e,t,n){if(!li(t))throw t;e.du.add(1),await Yr(e),e.mu.set("Offline"),n||(n=()=>og(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{z("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await ia(e)})}function fg(e,t){return t().catch(n=>Do(e,n,t))}async function oa(e){const t=et(e),n=On(t);let s=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;pT(t);)try{const r=await tT(t.localStore,s);if(r===null){t.lu.length===0&&n.$o();break}s=r.batchId,mT(t,r)}catch(r){await Do(t,r)}pg(t)&&mg(t)}function pT(e){return us(e)&&e.lu.length<10}function mT(e,t){e.lu.push(t);const n=On(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function pg(e){return us(e)&&!On(e).xo()&&e.lu.length>0}function mg(e){On(e).start()}async function gT(e){On(e).tu()}async function yT(e){const t=On(e);for(const n of e.lu)t.Yo(n.mutations)}async function wT(e,t,n){const s=e.lu.shift(),r=ql.from(s,t,n);await fg(e,()=>e.remoteSyncer.applySuccessfulWrite(r)),await oa(e)}async function vT(e,t){t&&On(e).Jo&&await async function(n,s){if(function(i){switch(i){default:return Q();case A.CANCELLED:case A.UNKNOWN:case A.DEADLINE_EXCEEDED:case A.RESOURCE_EXHAUSTED:case A.INTERNAL:case A.UNAVAILABLE:case A.UNAUTHENTICATED:return!1;case A.INVALID_ARGUMENT:case A.NOT_FOUND:case A.ALREADY_EXISTS:case A.PERMISSION_DENIED:case A.FAILED_PRECONDITION:case A.ABORTED:case A.OUT_OF_RANGE:case A.UNIMPLEMENTED:case A.DATA_LOSS:return!0}}(r=s.code)&&r!==A.ABORTED){const i=n.lu.shift();On(n).Oo(),await fg(n,()=>n.remoteSyncer.rejectFailedWrite(i.batchId,s)),await oa(n)}var r}(e,t),pg(e)&&mg(e)}async function Ld(e,t){const n=et(e);n.asyncQueue.verifyOperationInProgress(),z("RemoteStore","RemoteStore received new credentials");const s=us(n);n.du.add(3),await Yr(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await ia(n)}function sr(e){return e.yu||(e.yu=function(t,n,s){const r=et(t);return r.nu(),new oT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Jr:hT.bind(null,e),Zr:dT.bind(null,e),zo:fT.bind(null,e)}),e.wu.push(async t=>{t?(e.yu.Oo(),Xl(e)?Yl(e):e.mu.set("Unknown")):(await e.yu.stop(),dg(e))})),e.yu}function On(e){return e.pu||(e.pu=function(t,n,s){const r=et(t);return r.nu(),new aT(n,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,s)}(e.datastore,e.asyncQueue,{Jr:gT.bind(null,e),Zr:vT.bind(null,e),Xo:yT.bind(null,e),Zo:wT.bind(null,e)}),e.wu.push(async t=>{t?(e.pu.Oo(),await oa(e)):(await e.pu.stop(),e.lu.length>0&&(z("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))})),e.pu;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Jl{constructor(t,n,s,r,i){this.asyncQueue=t,this.timerId=n,this.targetTimeMs=s,this.op=r,this.removalCallback=i,this.deferred=new es,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(t,n,s,r,i){const o=Date.now()+s,a=new Jl(t,n,o,r,i);return a.start(s),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new q(A.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Zl(e,t){if(ln("AsyncQueue",`${t}: ${e}`),li(e))return new q(A.UNAVAILABLE,`${t}: ${e}`);throw e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(t){this.comparator=t?(n,s)=>t(n,s)||K.comparator(n.key,s.key):(n,s)=>K.comparator(n.key,s.key),this.keyedMap=yr(),this.sortedSet=new Rt(this.comparator)}static emptySet(t){return new Ps(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const n=this.keyedMap.get(t);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((n,s)=>(t(n),!1))}add(t){const n=this.delete(t.key);return n.copy(n.keyedMap.insert(t.key,t),n.sortedSet.insert(t,null))}delete(t){const n=this.get(t);return n?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(n)):this}isEqual(t){if(!(t instanceof Ps)||this.size!==t.size)return!1;const n=this.sortedSet.getIterator(),s=t.sortedSet.getIterator();for(;n.hasNext();){const r=n.getNext().key,i=s.getNext().key;if(!r.isEqual(i))return!1}return!0}toString(){const t=[];return this.forEach(n=>{t.push(n.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,n){const s=new Ps;return s.comparator=this.comparator,s.keyedMap=t,s.sortedSet=n,s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Md{constructor(){this.Iu=new Rt(K.comparator)}track(t){const n=t.doc.key,s=this.Iu.get(n);s?t.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,t):t.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:t.doc}):t.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):t.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:t.doc}):t.type===1&&s.type===0?this.Iu=this.Iu.remove(n):t.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):t.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:t.doc}):Q():this.Iu=this.Iu.insert(n,t)}Tu(){const t=[];return this.Iu.inorderTraversal((n,s)=>{t.push(s)}),t}}class Qs{constructor(t,n,s,r,i,o,a,l,h){this.query=t,this.docs=n,this.oldDocs=s,this.docChanges=r,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=h}static fromInitialDocuments(t,n,s,r,i){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Qs(t,n,Ps.emptySet(n),o,s,r,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&Zo(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const n=this.docChanges,s=t.docChanges;if(n.length!==s.length)return!1;for(let r=0;r<n.length;r++)if(n[r].type!==s[r].type||!n[r].doc.isEqual(s[r].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bT{constructor(){this.Eu=void 0,this.listeners=[]}}class ET{constructor(){this.queries=new nr(t=>Lm(t),Zo),this.onlineState="Unknown",this.Au=new Set}}function IT(e,t){const n=et(e);let s=!1;for(const r of t){const i=r.query,o=n.queries.get(i);if(o){for(const a of o.listeners)a.vu(r)&&(s=!0);o.Eu=r}}s&&tu(n)}function TT(e,t,n){const s=et(e),r=s.queries.get(t);if(r)for(const i of r.listeners)i.onError(n);s.queries.delete(t)}function tu(e){e.Au.forEach(t=>{t.next()})}class _T{constructor(t,n,s){this.query=t,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(t){if(!this.options.includeMetadataChanges){const s=[];for(const r of t.docChanges)r.type!==3&&s.push(r);t=new Qs(t.query,t.docs,t.oldDocs,s,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let n=!1;return this.Pu?this.Su(t)&&(this.bu.next(t),n=!0):this.Du(t,this.onlineState)&&(this.Cu(t),n=!0),this.Vu=t,n}onError(t){this.bu.error(t)}Ru(t){this.onlineState=t;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,t)&&(this.Cu(this.Vu),n=!0),n}Du(t,n){if(!t.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!t.docs.isEmpty()||t.hasCachedResults||n==="Offline")}Su(t){if(t.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(t){t=Qs.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.Pu=!0,this.bu.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gg{constructor(t){this.key=t}}class yg{constructor(t){this.key=t}}class kT{constructor(t,n){this.query=t,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=rt(),this.mutatedKeys=rt(),this.Ku=Mm(t),this.Gu=new Ps(this.Ku)}get Qu(){return this.Lu}zu(t,n){const s=n?n.ju:new Md,r=n?n.Gu:this.Gu;let i=n?n.mutatedKeys:this.mutatedKeys,o=r,a=!1;const l=this.query.limitType==="F"&&r.size===this.query.limit?r.last():null,h=this.query.limitType==="L"&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((d,p)=>{const g=r.get(d),w=ta(this.query,p)?p:null,E=!!g&&this.mutatedKeys.has(g.key),_=!!w&&(w.hasLocalMutations||this.mutatedKeys.has(w.key)&&w.hasCommittedMutations);let M=!1;g&&w?g.data.isEqual(w.data)?E!==_&&(s.track({type:3,doc:w}),M=!0):this.Wu(g,w)||(s.track({type:2,doc:w}),M=!0,(l&&this.Ku(w,l)>0||h&&this.Ku(w,h)<0)&&(a=!0)):!g&&w?(s.track({type:0,doc:w}),M=!0):g&&!w&&(s.track({type:1,doc:g}),M=!0,(l||h)&&(a=!0)),M&&(w?(o=o.add(w),i=_?i.add(d):i.delete(d)):(o=o.delete(d),i=i.delete(d)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const d=this.query.limitType==="F"?o.last():o.first();o=o.delete(d.key),i=i.delete(d.key),s.track({type:1,doc:d})}return{Gu:o,ju:s,Mi:a,mutatedKeys:i}}Wu(t,n){return t.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(t,n,s){const r=this.Gu;this.Gu=t.Gu,this.mutatedKeys=t.mutatedKeys;const i=t.ju.Tu();i.sort((h,d)=>function(p,g){const w=E=>{switch(E){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Q()}};return w(p)-w(g)}(h.type,d.type)||this.Ku(h.doc,d.doc)),this.Hu(s);const o=n?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,l=a!==this.qu;return this.qu=a,i.length!==0||l?{snapshot:new Qs(this.query,t.Gu,r,i,t.mutatedKeys,a===0,l,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Md,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(t){return!this.Lu.has(t)&&!!this.Gu.has(t)&&!this.Gu.get(t).hasLocalMutations}Hu(t){t&&(t.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),t.modifiedDocuments.forEach(n=>{}),t.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=t.current)}Ju(){if(!this.current)return[];const t=this.Uu;this.Uu=rt(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return t.forEach(s=>{this.Uu.has(s)||n.push(new yg(s))}),this.Uu.forEach(s=>{t.has(s)||n.push(new gg(s))}),n}Xu(t){this.Lu=t.Wi,this.Uu=rt();const n=this.zu(t.documents);return this.applyChanges(n,!0)}tc(){return Qs.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class CT{constructor(t,n,s){this.query=t,this.targetId=n,this.view=s}}class ST{constructor(t){this.key=t,this.ec=!1}}class AT{constructor(t,n,s,r,i,o){this.localStore=t,this.remoteStore=n,this.eventManager=s,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new nr(a=>Lm(a),Zo),this.ic=new Map,this.rc=new Set,this.oc=new Rt(K.comparator),this.uc=new Map,this.cc=new Kl,this.ac={},this.hc=new Map,this.lc=Ws.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function xT(e,t){const n=function(o){const a=et(o);return a.remoteStore.remoteSyncer.applyRemoteEvent=wg.bind(null,a),a.remoteStore.remoteSyncer.getRemoteKeysForTarget=FT.bind(null,a),a.remoteStore.remoteSyncer.rejectListen=RT.bind(null,a),a.nc.zo=IT.bind(null,a.eventManager),a.nc.wc=TT.bind(null,a.eventManager),a}(e);let s,r;const i=n.sc.get(t);if(i)s=i.targetId,n.sharedClientState.addLocalQueryTarget(s),r=i.view.tc();else{const o=await function(l,h){const d=et(l);return d.persistence.runTransaction("Allocate target","readwrite",p=>{let g;return d.Ds.getTargetData(p,h).next(w=>w?(g=w,D.resolve(g)):d.Ds.allocateTargetId(p).next(E=>(g=new ns(h,E,0,p.currentSequenceNumber),d.Ds.addTargetData(p,g).next(()=>g))))}).then(p=>{const g=d.Li.get(p.targetId);return(g===null||p.snapshotVersion.compareTo(g.snapshotVersion)>0)&&(d.Li=d.Li.insert(p.targetId,p),d.qi.set(h,p.targetId)),p})}(n.localStore,un(t));n.isPrimaryClient&&lg(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,r=await async function(l,h,d,p,g){l.dc=(P,j,ft)=>async function(pt,wt,It,we){let Ot=wt.view.zu(It);Ot.Mi&&(Ot=await Rd(pt.localStore,wt.query,!1).then(({documents:de})=>wt.view.zu(de,Ot)));const Ie=we&&we.targetChanges.get(wt.targetId),St=wt.view.applyChanges(Ot,pt.isPrimaryClient,Ie);return Ud(pt,wt.targetId,St.Yu),St.snapshot}(l,P,j,ft);const w=await Rd(l.localStore,h,!0),E=new kT(h,w.Wi),_=E.zu(w.documents),M=hi.createSynthesizedTargetChangeForCurrentChange(d,p&&l.onlineState!=="Offline",g),O=E.applyChanges(_,l.isPrimaryClient,M);Ud(l,d,O.Yu);const H=new CT(h,d,E);return l.sc.set(h,H),l.ic.has(d)?l.ic.get(d).push(h):l.ic.set(d,[h]),O.snapshot}(n,t,s,a==="current",o.resumeToken)}return r}async function NT(e,t){const n=et(e),s=n.sc.get(t),r=n.ic.get(s.targetId);if(r.length>1)return n.ic.set(s.targetId,r.filter(i=>!Zo(i,t))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Bc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),ug(n.remoteStore,s.targetId),jc(n,s.targetId)}).catch(ci)):(jc(n,s.targetId),await Bc(n.localStore,s.targetId,!0))}async function DT(e,t,n){const s=function(r){const i=et(r);return i.remoteStore.remoteSyncer.applySuccessfulWrite=OT.bind(null,i),i.remoteStore.remoteSyncer.rejectFailedWrite=PT.bind(null,i),i}(e);try{const r=await function(i,o){const a=et(i),l=Nt.now(),h=o.reduce((g,w)=>g.add(w.key),rt());let d,p;return a.persistence.runTransaction("Locally write mutations","readwrite",g=>{let w=hn(),E=rt();return a.Ki.getEntries(g,h).next(_=>{w=_,w.forEach((M,O)=>{O.isValidDocument()||(E=E.add(M))})}).next(()=>a.localDocuments.getOverlayedDocuments(g,w)).next(_=>{d=_;const M=[];for(const O of o){const H=wI(O,d.get(O.key).overlayedDocument);H!=null&&M.push(new ls(O.key,H,Sm(H.value.mapValue),rn.exists(!0)))}return a.mutationQueue.addMutationBatch(g,l,M,o)}).next(_=>{p=_;const M=_.applyToLocalDocumentSet(d,E);return a.documentOverlayCache.saveOverlays(g,_.batchId,M)})}).then(()=>({batchId:p.batchId,changes:Um(d)}))}(s.localStore,t);s.sharedClientState.addPendingMutation(r.batchId),function(i,o,a){let l=i.ac[i.currentUser.toKey()];l||(l=new Rt(dt)),l=l.insert(o,a),i.ac[i.currentUser.toKey()]=l}(s,r.batchId,n),await di(s,r.changes),await oa(s.remoteStore)}catch(r){const i=Zl(r,"Failed to persist write");n.reject(i)}}async function wg(e,t){const n=et(e);try{const s=await ZI(n.localStore,t);t.targetChanges.forEach((r,i)=>{const o=n.uc.get(i);o&&(yt(r.addedDocuments.size+r.modifiedDocuments.size+r.removedDocuments.size<=1),r.addedDocuments.size>0?o.ec=!0:r.modifiedDocuments.size>0?yt(o.ec):r.removedDocuments.size>0&&(yt(o.ec),o.ec=!1))}),await di(n,s,t)}catch(s){await ci(s)}}function Fd(e,t,n){const s=et(e);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const r=[];s.sc.forEach((i,o)=>{const a=o.view.Ru(t);a.snapshot&&r.push(a.snapshot)}),function(i,o){const a=et(i);a.onlineState=o;let l=!1;a.queries.forEach((h,d)=>{for(const p of d.listeners)p.Ru(o)&&(l=!0)}),l&&tu(a)}(s.eventManager,t),r.length&&s.nc.zo(r),s.onlineState=t,s.isPrimaryClient&&s.sharedClientState.setOnlineState(t)}}async function RT(e,t,n){const s=et(e);s.sharedClientState.updateQueryState(t,"rejected",n);const r=s.uc.get(t),i=r&&r.key;if(i){let o=new Rt(K.comparator);o=o.insert(i,Jt.newNoDocument(i,J.min()));const a=rt().add(i),l=new sa(J.min(),new Map,new Dt(dt),o,a);await wg(s,l),s.oc=s.oc.remove(i),s.uc.delete(t),eu(s)}else await Bc(s.localStore,t,!1).then(()=>jc(s,t,n)).catch(ci)}async function OT(e,t){const n=et(e),s=t.batch.batchId;try{const r=await function(i,o){const a=et(i);return a.persistence.runTransaction("Acknowledge batch","readwrite-primary",l=>{const h=o.batch.keys(),d=a.Ki.newChangeBuffer({trackRemovals:!0});return function(p,g,w,E){const _=w.batch,M=_.keys();let O=D.resolve();return M.forEach(H=>{O=O.next(()=>E.getEntry(g,H)).next(P=>{const j=w.docVersions.get(H);yt(j!==null),P.version.compareTo(j)<0&&(_.applyToRemoteDocument(P,w),P.isValidDocument()&&(P.setReadTime(w.commitVersion),E.addEntry(P)))})}),O.next(()=>p.mutationQueue.removeMutationBatch(g,_))}(a,l,o,d).next(()=>d.apply(l)).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,h,o.batch.batchId)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,function(p){let g=rt();for(let w=0;w<p.mutationResults.length;++w)p.mutationResults[w].transformResults.length>0&&(g=g.add(p.batch.mutations[w].key));return g}(o))).next(()=>a.localDocuments.getDocuments(l,h))})}(n.localStore,t);bg(n,s,null),vg(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await di(n,r)}catch(r){await ci(r)}}async function PT(e,t,n){const s=et(e);try{const r=await function(i,o){const a=et(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let h;return a.mutationQueue.lookupMutationBatch(l,o).next(d=>(yt(d!==null),h=d.keys(),a.mutationQueue.removeMutationBatch(l,d))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,h,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,h)).next(()=>a.localDocuments.getDocuments(l,h))})}(s.localStore,t);bg(s,t,n),vg(s,t),s.sharedClientState.updateMutationState(t,"rejected",n),await di(s,r)}catch(r){await ci(r)}}function vg(e,t){(e.hc.get(t)||[]).forEach(n=>{n.resolve()}),e.hc.delete(t)}function bg(e,t,n){const s=et(e);let r=s.ac[s.currentUser.toKey()];if(r){const i=r.get(t);i&&(n?i.reject(n):i.resolve(),r=r.remove(t)),s.ac[s.currentUser.toKey()]=r}}function jc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const s of e.ic.get(t))e.sc.delete(s),n&&e.nc.wc(s,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach(s=>{e.cc.containsKey(s)||Eg(e,s)})}function Eg(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);n!==null&&(ug(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),eu(e))}function Ud(e,t,n){for(const s of n)s instanceof gg?(e.cc.addReference(s.key,t),LT(e,s)):s instanceof yg?(z("SyncEngine","Document no longer in limbo: "+s.key),e.cc.removeReference(s.key,t),e.cc.containsKey(s.key)||Eg(e,s.key)):Q()}function LT(e,t){const n=t.key,s=n.path.canonicalString();e.oc.get(n)||e.rc.has(s)||(z("SyncEngine","New document in limbo: "+n),e.rc.add(s),eu(e))}function eu(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new K(gt.fromString(t)),s=e.lc.next();e.uc.set(s,new ST(n)),e.oc=e.oc.insert(n,s),lg(e.remoteStore,new ns(un(jl(n.path)),s,2,Fl.ct))}}async function di(e,t,n){const s=et(e),r=[],i=[],o=[];s.sc.isEmpty()||(s.sc.forEach((a,l)=>{o.push(s.dc(l,t,n).then(h=>{if((h||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(l.targetId,h!=null&&h.fromCache?"not-current":"current"),h){r.push(h);const d=Wl.Di(l.targetId,h);i.push(d)}}))}),await Promise.all(o),s.nc.zo(r),await async function(a,l){const h=et(a);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",d=>D.forEach(l,p=>D.forEach(p.Vi,g=>h.persistence.referenceDelegate.addReference(d,p.targetId,g)).next(()=>D.forEach(p.Si,g=>h.persistence.referenceDelegate.removeReference(d,p.targetId,g)))))}catch(d){if(!li(d))throw d;z("LocalStore","Failed to update sequence numbers: "+d)}for(const d of l){const p=d.targetId;if(!d.fromCache){const g=h.Li.get(p),w=g.snapshotVersion,E=g.withLastLimboFreeSnapshotVersion(w);h.Li=h.Li.insert(p,E)}}}(s.localStore,i))}async function MT(e,t){const n=et(e);if(!n.currentUser.isEqual(t)){z("SyncEngine","User change. New user:",t.toKey());const s=await ig(n.localStore,t);n.currentUser=t,function(r,i){r.hc.forEach(o=>{o.forEach(a=>{a.reject(new q(A.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),r.hc.clear()}(n),n.sharedClientState.handleUserChange(t,s.removedBatchIds,s.addedBatchIds),await di(n,s.Qi)}}function FT(e,t){const n=et(e),s=n.uc.get(t);if(s&&s.ec)return rt().add(s.key);{let r=rt();const i=n.ic.get(t);if(!i)return r;for(const o of i){const a=n.sc.get(o);r=r.unionWith(a.view.Qu)}return r}}class Vd{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ra(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,n){return null}createIndexBackfillerScheduler(t,n){return null}createLocalStore(t){return function(n,s,r,i){return new JI(n,s,r,i)}(this.persistence,new XI,t.initialUser,this.serializer)}createPersistence(t){return new QI(Gl.Fs,this.serializer)}createSharedClientState(t){return new eT}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class UT{async initialize(t,n){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Fd(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=MT.bind(null,this.syncEngine),await async function(s,r){const i=et(s);r?(i.du.delete(2),await ia(i)):r||(i.du.add(2),await Yr(i),i.mu.set("Unknown"))}(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new ET}createDatastore(t){const n=ra(t.databaseInfo.databaseId),s=(r=t.databaseInfo,new iT(r));var r;return function(i,o,a,l){return new cT(i,o,a,l)}(t.authCredentials,t.appCheckCredentials,s,n)}createRemoteStore(t){return n=this.localStore,s=this.datastore,r=t.asyncQueue,i=a=>Fd(this.syncEngine,a,0),o=Pd.D()?new Pd:new nT,new uT(n,s,r,i,o);var n,s,r,i,o}createSyncEngine(t,n){return function(s,r,i,o,a,l,h){const d=new AT(s,r,i,o,a,l);return h&&(d.fc=!0),d}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,n)}terminate(){return async function(t){const n=et(t);z("RemoteStore","RemoteStore shutting down."),n.du.add(5),await Yr(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VT{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.gc(this.observer.next,t)}error(t){this.observer.error?this.gc(this.observer.error,t):ln("Uncaught Error in snapshot listener:",t.toString())}yc(){this.muted=!0}gc(t,n){this.muted||setTimeout(()=>{this.muted||t(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BT{constructor(t,n,s,r){this.authCredentials=t,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=r,this.user=Yt.UNAUTHENTICATED,this.clientId=Tm.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async i=>{z("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(s,i=>(z("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new q(A.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new es;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(n){const s=Zl(n,"Failed to shutdown persistence");t.reject(s)}}),t.promise}}async function Ga(e,t){e.asyncQueue.verifyOperationInProgress(),z("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let s=n.initialUser;e.setCredentialChangeListener(async r=>{s.isEqual(r)||(await ig(t.localStore,r),s=r)}),t.persistence.setDatabaseDeletedListener(()=>e.terminate()),e._offlineComponents=t}async function Bd(e,t){e.asyncQueue.verifyOperationInProgress();const n=await async function(r){if(!r._offlineComponents)if(r._uninitializedComponentsProvider){z("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ga(r,r._uninitializedComponentsProvider._offline)}catch(i){const o=i;if(!function(a){return a.name==="FirebaseError"?a.code===A.FAILED_PRECONDITION||a.code===A.UNIMPLEMENTED:!(typeof DOMException<"u"&&a instanceof DOMException)||a.code===22||a.code===20||a.code===11}(o))throw o;ko("Error using user provided cache. Falling back to memory cache: "+o),await Ga(r,new Vd)}}else z("FirestoreClient","Using default OfflineComponentProvider"),await Ga(r,new Vd);return r._offlineComponents}(e);z("FirestoreClient","Initializing OnlineComponentProvider");const s=await e.getConfiguration();await t.initialize(n,s),e.setCredentialChangeListener(r=>Ld(t.remoteStore,r)),e.setAppCheckTokenChangeListener((r,i)=>Ld(t.remoteStore,i)),e._onlineComponents=t}async function Ig(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(z("FirestoreClient","Using user provided OnlineComponentProvider"),await Bd(e,e._uninitializedComponentsProvider._online)):(z("FirestoreClient","Using default OnlineComponentProvider"),await Bd(e,new UT))),e._onlineComponents}async function jd(e){const t=await Ig(e),n=t.eventManager;return n.onListen=xT.bind(null,t.syncEngine),n.onUnlisten=NT.bind(null,t.syncEngine),n;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const $d=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tg(e,t,n){if(!n)throw new q(A.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function qd(e){if(!K.isDocumentKey(e))throw new q(A.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function zd(e){if(K.isDocumentKey(e))throw new q(A.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function aa(e){if(e===void 0)return"undefined";if(e===null)return"null";if(typeof e=="string")return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if(typeof e=="number"||typeof e=="boolean")return""+e;if(typeof e=="object"){if(e instanceof Array)return"an array";{const t=function(n){return n.constructor?n.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return typeof e=="function"?"a function":Q()}function xr(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new q(A.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=aa(e);throw new q(A.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hd{constructor(t){var n;if(t.host===void 0){if(t.ssl!==void 0)throw new q(A.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(n=t.ssl)===null||n===void 0||n;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.cache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new q(A.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(s,r,i,o){if(r===!0&&o===!0)throw new q(A.INVALID_ARGUMENT,`${s} and ${i} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,n,s,r){this._authCredentials=t,this._appCheckCredentials=n,this._databaseId=s,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Hd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new q(A.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new q(A.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Hd(t),t.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new FE;switch(n.type){case"firstParty":return new jE(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new q(A.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const n=$d.get(t);n&&(z("ComponentProvider","Removing Datastore"),$d.delete(t),n.terminate())}(this),Promise.resolve()}}function jT(e,t,n,s={}){var r;const i=(e=xr(e,ca))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==t&&ko("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},i),{host:`${t}:${n}`,ssl:!1})),s.mockUserToken){let o,a;if(typeof s.mockUserToken=="string")o=s.mockUserToken,a=Yt.MOCK_USER;else{o=function(h,d){if(h.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const p=d||"demo-project",g=h.iat||0,w=h.sub||h.user_id;if(!w)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const E=Object.assign({iss:`https://securetoken.google.com/${p}`,aud:p,iat:g,exp:g+3600,auth_time:g,sub:w,user_id:w,firebase:{sign_in_provider:"custom",identities:{}}},h);return[no(JSON.stringify({alg:"none",type:"JWT"})),no(JSON.stringify(E)),""].join(".")}(s.mockUserToken,(r=e._app)===null||r===void 0?void 0:r.options.projectId);const l=s.mockUserToken.sub||s.mockUserToken.user_id;if(!l)throw new q(A.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new Yt(l)}e._authCredentials=new UE(new Im(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(t,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Nn(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Ee(this.firestore,t,this._key)}}class hs{constructor(t,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=t}withConverter(t){return new hs(this.firestore,t,this._query)}}class Nn extends hs{constructor(t,n,s){super(t,n,jl(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Ee(this.firestore,null,new K(t))}withConverter(t){return new Nn(this.firestore,t,this._path)}}function _g(e,t,...n){if(e=he(e),Tg("collection","path",t),e instanceof ca){const s=gt.fromString(t,...n);return zd(s),new Nn(e,null,s)}{if(!(e instanceof Ee||e instanceof Nn))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=e._path.child(gt.fromString(t,...n));return zd(s),new Nn(e.firestore,null,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new ag(this,"async_queue_retry"),this.qc=()=>{const n=Ka();n&&z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const t=Ka();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Uc(),this.Kc(t)}enterRestrictedMode(t){if(!this.Oc){this.Oc=!0,this.Bc=t||!1;const n=Ka();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(t){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new es;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(t().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.kc.push(t),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(t){if(!li(t))throw t;z("AsyncQueue","Operation failed with retryable error: "+t)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(t){const n=this.Nc.then(()=>(this.Fc=!0,t().catch(s=>{this.Mc=s,this.Fc=!1;const r=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(s);throw ln("INTERNAL UNHANDLED ERROR: ",r),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(t,n,s){this.Uc(),this.Lc.indexOf(t)>-1&&(n=0);const r=Jl.createAndSchedule(this,t,n,s,i=>this.Qc(i));return this.$c.push(r),r}Uc(){this.Mc&&Q()}verifyOperationInProgress(){}async zc(){let t;do t=this.Nc,await t;while(t!==this.Nc)}jc(t){for(const n of this.$c)if(n.timerId===t)return!0;return!1}Wc(t){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),t!=="all"&&n.timerId===t)break;return this.zc()})}Hc(t){this.Lc.push(t)}Qc(t){const n=this.$c.indexOf(t);this.$c.splice(n,1)}}function Kd(e){return function(t,n){if(typeof t!="object"||t===null)return!1;const s=t;for(const r of["next","error","complete"])if(r in s&&typeof s[r]=="function")return!0;return!1}(e)}class Ro extends ca{constructor(t,n,s,r){super(t,n,s,r),this.type="firestore",this._queue=new $T,this._persistenceKey=(r==null?void 0:r.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Cg(this),this._firestoreClient.terminate()}}function kg(e){return e._firestoreClient||Cg(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Cg(e){var t,n,s;const r=e._freezeSettings(),i=function(o,a,l,h){return new JE(o,a,l,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,h.useFetchStreams)}(e._databaseId,((t=e._app)===null||t===void 0?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new BT(e._authCredentials,e._appCheckCredentials,e._queue,i),!((n=r.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=r.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Ys(re.fromBase64String(t))}catch(n){throw new q(A.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(t){return new Ys(re.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nu{constructor(...t){for(let n=0;n<t.length;++n)if(t[n].length===0)throw new q(A.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new te(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sg{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class su{constructor(t,n){if(!isFinite(t)||t<-90||t>90)throw new q(A.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(n)||n<-180||n>180)throw new q(A.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=t,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return dt(this._lat,t._lat)||dt(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qT=/^__.*__$/;class zT{constructor(t,n,s){this.data=t,this.fieldMask=n,this.fieldTransforms=s}toMutation(t,n){return this.fieldMask!==null?new ls(t,this.data,this.fieldMask,n,this.fieldTransforms):new ui(t,this.data,n,this.fieldTransforms)}}function Ag(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Q()}}class ru{constructor(t,n,s,r,i,o){this.settings=t,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=r,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(t){return new ru(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Zc({path:s,ta:!1});return r.ea(t),r}na(t){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(t),r=this.Zc({path:s,ta:!1});return r.Jc(),r}sa(t){return this.Zc({path:void 0,ta:!0})}ia(t){return Oo(t,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(t){return this.fieldMask.find(n=>t.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>t.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let t=0;t<this.path.length;t++)this.ea(this.path.get(t))}ea(t){if(t.length===0)throw this.ia("Document fields must not be empty");if(Ag(this.Yc)&&qT.test(t))throw this.ia('Document fields cannot begin and end with "__"')}}class HT{constructor(t,n,s){this.databaseId=t,this.ignoreUndefinedProperties=n,this.serializer=s||ra(t)}ua(t,n,s,r=!1){return new ru({Yc:t,methodName:n,oa:s,path:te.emptyPath(),ta:!1,ra:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function xg(e){const t=e._freezeSettings(),n=ra(e._databaseId);return new HT(e._databaseId,!!t.ignoreUndefinedProperties,n)}function KT(e,t,n,s,r,i={}){const o=e.ua(i.merge||i.mergeFields?2:0,t,n,r);Rg("Data must be an object, but it was:",o,s);const a=Ng(s,o);let l,h;if(i.merge)l=new Pe(o.fieldMask),h=o.fieldTransforms;else if(i.mergeFields){const d=[];for(const p of i.mergeFields){const g=GT(t,p,n);if(!o.contains(g))throw new q(A.INVALID_ARGUMENT,`Field '${g}' is specified in your field mask but missing from your input data.`);QT(d,g)||d.push(g)}l=new Pe(d),h=o.fieldTransforms.filter(p=>l.covers(p.field))}else l=null,h=o.fieldTransforms;return new zT(new Ce(a),l,h)}function iu(e,t){if(Dg(e=he(e)))return Rg("Unsupported field value:",t,e),Ng(e,t);if(e instanceof Sg)return function(n,s){if(!Ag(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const r=n._toFieldTransform(s);r&&s.fieldTransforms.push(r)}(e,t),null;if(e===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&t.Yc!==4)throw t.ia("Nested arrays are not supported");return function(n,s){const r=[];let i=0;for(const o of n){let a=iu(o,s.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),r.push(a),i++}return{arrayValue:{values:r}}}(e,t)}return function(n,s){if((n=he(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return fI(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const r=Nt.fromDate(n);return{timestampValue:No(s.serializer,r)}}if(n instanceof Nt){const r=new Nt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:No(s.serializer,r)}}if(n instanceof su)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Ys)return{bytesValue:Zm(s.serializer,n._byteString)};if(n instanceof Ee){const r=s.databaseId,i=n.firestore._databaseId;if(!i.isEqual(r))throw s.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${r.projectId}/${r.database}`);return{referenceValue:Hl(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${aa(n)}`)}(e,t)}function Ng(e,t){const n={};return _m(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):tr(e,(s,r)=>{const i=iu(r,t.Xc(s));i!=null&&(n[s]=i)}),{mapValue:{fields:n}}}function Dg(e){return!(typeof e!="object"||e===null||e instanceof Array||e instanceof Date||e instanceof Nt||e instanceof su||e instanceof Ys||e instanceof Ee||e instanceof Sg)}function Rg(e,t,n){if(!Dg(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=aa(n);throw s==="an object"?t.ia(e+" a custom object"):t.ia(e+" "+s)}}function GT(e,t,n){if((t=he(t))instanceof nu)return t._internalPath;if(typeof t=="string")return Og(e,t);throw Oo("Field path arguments must be of type string or ",e,!1,void 0,n)}const WT=new RegExp("[~\\*/\\[\\]]");function Og(e,t,n){if(t.search(WT)>=0)throw Oo(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new nu(...t.split("."))._internalPath}catch{throw Oo(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Oo(e,t,n,s,r){const i=s&&!s.isEmpty(),o=r!==void 0;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(i||o)&&(l+=" (found",i&&(l+=` in field ${s}`),o&&(l+=` in document ${r}`),l+=")"),new q(A.INVALID_ARGUMENT,a+e+l)}function QT(e,t){return e.some(n=>n.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pg{constructor(t,n,s,r,i){this._firestore=t,this._userDataWriter=n,this._key=s,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ee(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new YT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const n=this._document.data.field(ou("DocumentSnapshot.get",t));if(n!==null)return this._userDataWriter.convertValue(n)}}}class YT extends Pg{data(){return super.data()}}function ou(e,t){return typeof t=="string"?Og(e,t):t instanceof nu?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class au{}class Lg extends au{}class cu extends Lg{constructor(t,n,s){super(),this._field=t,this._op=n,this._value=s,this.type="where"}static _create(t,n,s){return new cu(t,n,s)}_apply(t){const n=this._parse(t);return Mg(t._query,n),new hs(t.firestore,t.converter,Pc(t._query,n))}_parse(t){const n=xg(t.firestore);return function(r,i,o,a,l,h,d){let p;if(l.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new q(A.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Wd(d,h);const g=[];for(const w of d)g.push(Gd(a,r,w));p={arrayValue:{values:g}}}else p=Gd(a,r,d)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Wd(d,h),p=function(g,w,E,_=!1){return iu(E,g.ua(_?4:3,w))}(o,"where",d,h==="in"||h==="not-in");return Ct.create(l,h,p)}(t._query,0,n,t.firestore._databaseId,this._field,this._op,this._value)}}class lu extends au{constructor(t,n){super(),this.type=t,this._queryConstraints=n}static _create(t,n){return new lu(t,n)}_parse(t){const n=this._queryConstraints.map(s=>s._parse(t)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Me.create(n,this._getOperator())}_apply(t){const n=this._parse(t);return n.getFilters().length===0?t:(function(s,r){let i=s;const o=r.getFlattenedFilters();for(const a of o)Mg(i,a),i=Pc(i,a)}(t._query,n),new hs(t.firestore,t.converter,Pc(t._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class uu extends Lg{constructor(t,n){super(),this._field=t,this._direction=n,this.type="orderBy"}static _create(t,n){return new uu(t,n)}_apply(t){const n=function(s,r,i){if(s.startAt!==null)throw new q(A.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new q(A.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Rs(r,i);return function(a,l){if($l(a)===null){const h=Jo(a);h!==null&&Fg(a,h,l.field)}}(s,o),o}(t._query,this._field,this._direction);return new hs(t.firestore,t.converter,function(s,r){const i=s.explicitOrderBy.concat([r]);return new er(s.path,s.collectionGroup,i,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(t._query,n))}}function Gd(e,t,n){if(typeof(n=he(n))=="string"){if(n==="")throw new q(A.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Pm(t)&&n.indexOf("/")!==-1)throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=t.path.child(gt.fromString(n));if(!K.isDocumentKey(s))throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return yd(e,new K(s))}if(n instanceof Ee)return yd(e,n._key);throw new q(A.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${aa(n)}.`)}function Wd(e,t){if(!Array.isArray(e)||e.length===0)throw new q(A.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function Mg(e,t){if(t.isInequality()){const s=Jo(e),r=t.field;if(s!==null&&!s.isEqual(r))throw new q(A.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${r.toString()}'`);const i=$l(e);i!==null&&Fg(e,r,i)}const n=function(s,r){for(const i of s)for(const o of i.getFlattenedFilters())if(r.indexOf(o.op)>=0)return o.op;return null}(e.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(n!==null)throw n===t.op?new q(A.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new q(A.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Fg(e,t,n){if(!n.isEqual(t))throw new q(A.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class XT{convertValue(t,n="none"){switch(cs(t)){case 0:return null;case 1:return t.booleanValue;case 2:return kt(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,n);case 5:return t.stringValue;case 6:return this.convertBytes(Hs(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,n);case 10:return this.convertObject(t.mapValue,n);default:throw Q()}}convertObject(t,n){const s={};return tr(t.fields,(r,i)=>{s[r]=this.convertValue(i,n)}),s}convertGeoPoint(t){return new su(kt(t.latitude),kt(t.longitude))}convertArray(t,n){return(t.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(t,n){switch(n){case"previous":const s=Cm(t);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Hr(t));default:return null}}convertTimestamp(t){const n=Rn(t);return new Nt(n.seconds,n.nanos)}convertDocumentKey(t,n){const s=gt.fromString(t);yt(rg(s));const r=new Kr(s.get(1),s.get(3)),i=new K(s.popFirst(5));return r.isEqual(n)||ln(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(t,n){this.hasPendingWrites=t,this.fromCache=n}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ug extends Pg{constructor(t,n,s,r,i,o){super(t,n,s,r,o),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const n=new Yi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,n={}){if(this._document){const s=this._document.data.field(ou("DocumentSnapshot.get",t));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class Yi extends Ug{data(t={}){return super.data(t)}}class JT{constructor(t,n,s,r){this._firestore=t,this._userDataWriter=n,this._snapshot=r,this.metadata=new wr(r.hasPendingWrites,r.fromCache),this.query=s}get docs(){const t=[];return this.forEach(n=>t.push(n)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,n){this._snapshot.docs.forEach(s=>{t.call(n,new Yi(this._firestore,this._userDataWriter,s.key,s,new wr(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const n=!!t.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new q(A.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,r){if(s._snapshot.oldDocs.isEmpty()){let i=0;return s._snapshot.docChanges.map(o=>{const a=new Yi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>r||o.type!==3).map(o=>{const a=new Yi(s._firestore,s._userDataWriter,o.doc.key,o.doc,new wr(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let l=-1,h=-1;return o.type!==0&&(l=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),h=i.indexOf(o.doc.key)),{type:ZT(o.type),doc:a,oldIndex:l,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function ZT(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Q()}}class Qd extends XT{constructor(t){super(),this.firestore=t}convertBytes(t){return new Ys(t)}convertReference(t){const n=this.convertDocumentKey(t,this.firestore._databaseId);return new Ee(this.firestore,null,n)}}function t_(e,t){const n=xr(e.firestore,Ro),s=function(i,o,...a){if(i=he(i),arguments.length===1&&(o=Tm.A()),Tg("doc","path",o),i instanceof ca){const l=gt.fromString(o,...a);return qd(l),new Ee(i,null,new K(l))}{if(!(i instanceof Ee||i instanceof Nn))throw new q(A.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const l=i._path.child(gt.fromString(o,...a));return qd(l),new Ee(i.firestore,i instanceof Nn?i.converter:null,new K(l))}}(e),r=function(i,o,a){let l;return l=i?a&&(a.merge||a.mergeFields)?i.toFirestore(o,a):i.toFirestore(o):o,l}(e.converter,t);return function(i,o){return function(a,l){const h=new es;return a.asyncQueue.enqueueAndForget(async()=>DT(await function(d){return Ig(d).then(p=>p.syncEngine)}(a),l,h)),h.promise}(kg(i),o)}(n,[KT(xg(e.firestore),"addDoc",s._key,r,e.converter!==null,{}).toMutation(s._key,rn.exists(!1))]).then(()=>s)}function e_(e,...t){var n,s,r;e=he(e);let i={includeMetadataChanges:!1},o=0;typeof t[o]!="object"||Kd(t[o])||(i=t[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Kd(t[o])){const p=t[o];t[o]=(n=p.next)===null||n===void 0?void 0:n.bind(p),t[o+1]=(s=p.error)===null||s===void 0?void 0:s.bind(p),t[o+2]=(r=p.complete)===null||r===void 0?void 0:r.bind(p)}let l,h,d;if(e instanceof Ee)h=xr(e.firestore,Ro),d=jl(e._key.path),l={next:p=>{t[o]&&t[o](function(g,w,E){const _=E.docs.get(w._key),M=new Qd(g);return new Ug(g,M,w._key,_,new wr(E.hasPendingWrites,E.fromCache),w.converter)}(h,e,p))},error:t[o+1],complete:t[o+2]};else{const p=xr(e,hs);h=xr(p.firestore,Ro),d=p._query;const g=new Qd(h);l={next:w=>{t[o]&&t[o](new JT(h,g,p,w))},error:t[o+1],complete:t[o+2]},function(w){if(w.limitType==="L"&&w.explicitOrderBy.length===0)throw new q(A.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}(e._query)}return function(p,g,w,E){const _=new VT(E),M=new _T(g,_,w);return p.asyncQueue.enqueueAndForget(async()=>async function(O,H){const P=et(O),j=H.query;let ft=!1,pt=P.queries.get(j);if(pt||(ft=!0,pt=new bT),ft)try{pt.Eu=await P.onListen(j)}catch(wt){const It=Zl(wt,`Initialization of query '${Mc(H.query)}' failed`);return void H.onError(It)}P.queries.set(j,pt),pt.listeners.push(H),H.Ru(P.onlineState),pt.Eu&&H.vu(pt.Eu)&&tu(P)}(await jd(p),M)),()=>{_.yc(),p.asyncQueue.enqueueAndForget(async()=>async function(O,H){const P=et(O),j=H.query;let ft=!1;const pt=P.queries.get(j);if(pt){const wt=pt.listeners.indexOf(H);wt>=0&&(pt.listeners.splice(wt,1),ft=pt.listeners.length===0)}if(ft)return P.queries.delete(j),P.onUnlisten(j)}(await jd(p),M))}}(kg(h),d,a,l)}(function(e,t=!0){Zs=Js,js(new rs("firestore",(n,{instanceIdentifier:s,options:r})=>{const i=n.getProvider("app").getImmediate(),o=new Ro(new VE(n.getProvider("auth-internal")),new qE(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new q(A.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Kr(a.options.projectId,l)}(i,s),i);return r=Object.assign({useFetchStreams:t},r),o._setSettings(r),o},"PUBLIC").setMultipleInstances(!0)),An(dd,"3.10.1",e),An(dd,"3.10.1","esm2017")})();const Vg=Qf({apiKey:"AIzaSyAvYxCTq6ud4lDwK8gFl19VZvrVKQ8DuVU",authDomain:"chat-vue-fad8b.firebaseapp.com",projectId:"chat-vue-fad8b",storageBucket:"chat-vue-fad8b.appspot.com",messagingSenderId:"231817000560",appId:"1:231817000560:web:8cdafd7c3b432814e3a6b5"}),Nr=function(e=Yf()){const t=fc(e,"auth");if(t.isInitialized())return t.getImmediate();const n=function(o,a){const l=fc(o,"auth");if(l.isInitialized()){const h=l.getImmediate();if(so(l.getOptions(),a??{}))return h;Ye(h,"already-initialized")}return l.initialize({options:a})}(e,{popupRedirectResolver:Yb,persistence:[Eb,vb,Tp]}),s=Kf("authTokenSyncURL");if(s){const o=(r=s,async a=>{const l=a&&await a.getIdTokenResult(),h=l&&(new Date().getTime()-Date.parse(l.issuedAtTime))/1e3;if(h&&h>Jb)return;const d=l==null?void 0:l.token;Kh!==d&&(Kh=d,await fetch(r,{method:d?"POST":"DELETE",headers:d?{Authorization:`Bearer ${d}`}:{}}))});(function(a,l,h){he(a).beforeAuthStateChanged(l,h)})(n,o,()=>o(n.currentUser)),function(a,l,h,d){he(a).onIdTokenChanged(l,h,d)}(n,a=>o(a))}var r;const i=Hf("auth");return i&&wb(n,`http://${i}`),n}(Vg),Bg=function(e,t){const n=typeof e=="string"?e:t||"(default)",s=fc(typeof e=="object"?e:Yf(),"firestore").getImmediate({identifier:n});if(!s._initialized){const r=(i=>{const o=Hf(i);if(!o)return;const a=o.lastIndexOf(":");if(a<=0||a+1===o.length)throw new Error(`Invalid host ${o} with no separate hostname and port!`);const l=parseInt(o.substring(a+1),10);return o[0]==="["?[o.substring(1,a-1),l]:[o.substring(0,a),l]})("firestore");r&&jT(s,...r)}return s}(Vg);var $n=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},$c={},n_={get exports(){return $c},set exports(e){$c=e}};n_.exports=function(){var e={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const t="swal2-",n=c=>{const u={};for(const f in c)u[c[f]]=t+c[f];return u},s=n(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),r=n(["success","warning","info","question","error"]),i="SweetAlert2:",o=c=>{const u=[];for(let f=0;f<c.length;f++)u.indexOf(c[f])===-1&&u.push(c[f]);return u},a=c=>c.charAt(0).toUpperCase()+c.slice(1),l=c=>{console.warn(`${i} ${typeof c=="object"?c.join(" "):c}`)},h=c=>{console.error(`${i} ${c}`)},d=[],p=c=>{d.includes(c)||(d.push(c),l(c))},g=(c,u)=>{p(`"${c}" is deprecated and will be removed in the next major release. Please use "${u}" instead.`)},w=c=>typeof c=="function"?c():c,E=c=>c&&typeof c.toPromise=="function",_=c=>E(c)?c.toPromise():Promise.resolve(c),M=c=>c&&Promise.resolve(c)===c,O=()=>document.body.querySelector(`.${s.container}`),H=c=>{const u=O();return u?u.querySelector(c):null},P=c=>H(`.${c}`),j=()=>P(s.popup),ft=()=>P(s.icon),pt=()=>P(s["icon-content"]),wt=()=>P(s.title),It=()=>P(s["html-container"]),we=()=>P(s.image),Ot=()=>P(s["progress-steps"]),Ie=()=>P(s["validation-message"]),St=()=>H(`.${s.actions} .${s.confirm}`),de=()=>H(`.${s.actions} .${s.cancel}`),Te=()=>H(`.${s.actions} .${s.deny}`),Kt=()=>P(s["input-label"]),it=()=>H(`.${s.loader}`),ot=()=>P(s.actions),ve=()=>P(s.footer),Fe=()=>P(s["timer-progress-bar"]),ie=()=>P(s.close),oe=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Pt=()=>{const c=Array.from(j().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((f,m)=>{const N=parseInt(f.getAttribute("tabindex")),nt=parseInt(m.getAttribute("tabindex"));return N>nt?1:N<nt?-1:0}),u=Array.from(j().querySelectorAll(oe)).filter(f=>f.getAttribute("tabindex")!=="-1");return o(c.concat(u)).filter(f=>F(f))},pn=()=>_e(document.body,s.shown)&&!_e(document.body,s["toast-shown"])&&!_e(document.body,s["no-backdrop"]),ds=()=>j()&&_e(j(),s.toast),la=()=>j().hasAttribute("data-loading"),Gt={previousBodyPadding:null},Lt=(c,u)=>{if(c.textContent="",u){const f=new DOMParser().parseFromString(u,"text/html");Array.from(f.querySelector("head").childNodes).forEach(m=>{c.appendChild(m)}),Array.from(f.querySelector("body").childNodes).forEach(m=>{m instanceof HTMLVideoElement||m instanceof HTMLAudioElement?c.appendChild(m.cloneNode(!0)):c.appendChild(m)})}},_e=(c,u)=>{if(!u)return!1;const f=u.split(/\s+/);for(let m=0;m<f.length;m++)if(!c.classList.contains(f[m]))return!1;return!0},Pn=(c,u)=>{Array.from(c.classList).forEach(f=>{Object.values(s).includes(f)||Object.values(r).includes(f)||Object.values(u.showClass).includes(f)||c.classList.remove(f)})},Wt=(c,u,f)=>{if(Pn(c,u),u.customClass&&u.customClass[f]){if(typeof u.customClass[f]!="string"&&!u.customClass[f].forEach)return void l(`Invalid type of customClass.${f}! Expected string or iterable object, got "${typeof u.customClass[f]}"`);b(c,u.customClass[f])}},Ln=(c,u)=>{if(!u)return null;switch(u){case"select":case"textarea":case"file":return c.querySelector(`.${s.popup} > .${s[u]}`);case"checkbox":return c.querySelector(`.${s.popup} > .${s.checkbox} input`);case"radio":return c.querySelector(`.${s.popup} > .${s.radio} input:checked`)||c.querySelector(`.${s.popup} > .${s.radio} input:first-child`);case"range":return c.querySelector(`.${s.popup} > .${s.range} input`);default:return c.querySelector(`.${s.popup} > .${s.input}`)}},y=c=>{if(c.focus(),c.type!=="file"){const u=c.value;c.value="",c.value=u}},v=(c,u,f)=>{c&&u&&(typeof u=="string"&&(u=u.split(/\s+/).filter(Boolean)),u.forEach(m=>{Array.isArray(c)?c.forEach(N=>{f?N.classList.add(m):N.classList.remove(m)}):f?c.classList.add(m):c.classList.remove(m)}))},b=(c,u)=>{v(c,u,!0)},k=(c,u)=>{v(c,u,!1)},I=(c,u)=>{const f=Array.from(c.children);for(let m=0;m<f.length;m++){const N=f[m];if(N instanceof HTMLElement&&_e(N,u))return N}},S=(c,u,f)=>{f===`${parseInt(f)}`&&(f=parseInt(f)),f||parseInt(f)===0?c.style[u]=typeof f=="number"?`${f}px`:f:c.style.removeProperty(u)},R=function(c){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";c.style.display=u},C=c=>{c.style.display="none"},x=(c,u,f,m)=>{const N=c.querySelector(u);N&&(N.style[f]=m)},T=function(c,u){u?R(c,arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex"):C(c)},F=c=>!(!c||!(c.offsetWidth||c.offsetHeight||c.getClientRects().length)),L=()=>!F(St())&&!F(Te())&&!F(de()),U=c=>c.scrollHeight>c.clientHeight,B=c=>{const u=window.getComputedStyle(c),f=parseFloat(u.getPropertyValue("animation-duration")||"0"),m=parseFloat(u.getPropertyValue("transition-duration")||"0");return f>0||m>0},$=function(c){let u=arguments.length>1&&arguments[1]!==void 0&&arguments[1];const f=Fe();F(f)&&(u&&(f.style.transition="none",f.style.width="100%"),setTimeout(()=>{f.style.transition=`width ${c/1e3}s linear`,f.style.width="0%"},10))},W=()=>{const c=Fe(),u=parseInt(window.getComputedStyle(c).width);c.style.removeProperty("transition"),c.style.width="100%";const f=u/parseInt(window.getComputedStyle(c).width)*100;c.style.width=`${f}%`},Z=100,V={},Mt=()=>{V.previousActiveElement instanceof HTMLElement?(V.previousActiveElement.focus(),V.previousActiveElement=null):document.body&&document.body.focus()},$t=c=>new Promise(u=>{if(!c)return u();const f=window.scrollX,m=window.scrollY;V.restoreFocusTimeout=setTimeout(()=>{Mt(),u()},Z),window.scrollTo(f,m)}),Tt=()=>typeof window>"u"||typeof document>"u",Se=`
 <div aria-labelledby="${s.title}" aria-describedby="${s["html-container"]}" class="${s.popup}" tabindex="-1">
   <button type="button" class="${s.close}"></button>
   <ul class="${s["progress-steps"]}"></ul>
   <div class="${s.icon}"></div>
   <img class="${s.image}" />
   <h2 class="${s.title}" id="${s.title}"></h2>
   <div class="${s["html-container"]}" id="${s["html-container"]}"></div>
   <input class="${s.input}" />
   <input type="file" class="${s.file}" />
   <div class="${s.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${s.select}"></select>
   <div class="${s.radio}"></div>
   <label for="${s.checkbox}" class="${s.checkbox}">
     <input type="checkbox" />
     <span class="${s.label}"></span>
   </label>
   <textarea class="${s.textarea}"></textarea>
   <div class="${s["validation-message"]}" id="${s["validation-message"]}"></div>
   <div class="${s.actions}">
     <div class="${s.loader}"></div>
     <button type="button" class="${s.confirm}"></button>
     <button type="button" class="${s.deny}"></button>
     <button type="button" class="${s.cancel}"></button>
   </div>
   <div class="${s.footer}"></div>
   <div class="${s["timer-progress-bar-container"]}">
     <div class="${s["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),Mn=()=>{const c=O();return!!c&&(c.remove(),k([document.documentElement,document.body],[s["no-backdrop"],s["toast-shown"],s["has-column"]]),!0)},ct=()=>{V.currentInstance.resetValidationMessage()},Ft=()=>{const c=j(),u=I(c,s.input),f=I(c,s.file),m=c.querySelector(`.${s.range} input`),N=c.querySelector(`.${s.range} output`),nt=I(c,s.select),Ut=c.querySelector(`.${s.checkbox} input`),je=I(c,s.textarea);u.oninput=ct,f.onchange=ct,nt.onchange=ct,Ut.onchange=ct,je.oninput=ct,m.oninput=()=>{ct(),N.value=m.value},m.onchange=()=>{ct(),N.value=m.value}},At=c=>typeof c=="string"?document.querySelector(c):c,Ue=c=>{const u=j();u.setAttribute("role",c.toast?"alert":"dialog"),u.setAttribute("aria-live",c.toast?"polite":"assertive"),c.toast||u.setAttribute("aria-modal","true")},rr=c=>{window.getComputedStyle(c).direction==="rtl"&&b(O(),s.rtl)},fe=c=>{const u=Mn();if(Tt())return void h("SweetAlert2 requires document to initialize");const f=document.createElement("div");f.className=s.container,u&&b(f,s["no-transition"]),Lt(f,Se);const m=At(c.target);m.appendChild(f),Ue(c),rr(m),Ft()},ke=(c,u)=>{c instanceof HTMLElement?u.appendChild(c):typeof c=="object"?fs(c,u):c&&Lt(u,c)},fs=(c,u)=>{c.jquery?ua(u,c):Lt(u,c.toString())},ua=(c,u)=>{if(c.textContent="",0 in u)for(let f=0;f in u;f++)c.appendChild(u[f].cloneNode(!0));else c.appendChild(u.cloneNode(!0))},Ve=(()=>{if(Tt())return!1;const c=document.createElement("div"),u={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const f in u)if(Object.prototype.hasOwnProperty.call(u,f)&&c.style[f]!==void 0)return u[f];return!1})(),jg=()=>{const c=document.createElement("div");c.className=s["scrollbar-measure"],document.body.appendChild(c);const u=c.getBoundingClientRect().width-c.clientWidth;return document.body.removeChild(c),u},$g=(c,u)=>{const f=ot(),m=it();u.showConfirmButton||u.showDenyButton||u.showCancelButton?R(f):C(f),Wt(f,u,"actions"),qg(f,m,u),Lt(m,u.loaderHtml),Wt(m,u,"loader")};function qg(c,u,f){const m=St(),N=Te(),nt=de();ha(m,"confirm",f),ha(N,"deny",f),ha(nt,"cancel",f),zg(m,N,nt,f),f.reverseButtons&&(f.toast?(c.insertBefore(nt,m),c.insertBefore(N,m)):(c.insertBefore(nt,u),c.insertBefore(N,u),c.insertBefore(m,u)))}function zg(c,u,f,m){m.buttonsStyling?(b([c,u,f],s.styled),m.confirmButtonColor&&(c.style.backgroundColor=m.confirmButtonColor,b(c,s["default-outline"])),m.denyButtonColor&&(u.style.backgroundColor=m.denyButtonColor,b(u,s["default-outline"])),m.cancelButtonColor&&(f.style.backgroundColor=m.cancelButtonColor,b(f,s["default-outline"]))):k([c,u,f],s.styled)}function ha(c,u,f){T(c,f[`show${a(u)}Button`],"inline-block"),Lt(c,f[`${u}ButtonText`]),c.setAttribute("aria-label",f[`${u}ButtonAriaLabel`]),c.className=s[u],Wt(c,f,`${u}Button`),b(c,f[`${u}ButtonClass`])}const Hg=(c,u)=>{const f=ie();Lt(f,u.closeButtonHtml),Wt(f,u,"closeButton"),T(f,u.showCloseButton),f.setAttribute("aria-label",u.closeButtonAriaLabel)},Kg=(c,u)=>{const f=O();f&&(Gg(f,u.backdrop),Wg(f,u.position),Qg(f,u.grow),Wt(f,u,"container"))};function Gg(c,u){typeof u=="string"?c.style.background=u:u||b([document.documentElement,document.body],s["no-backdrop"])}function Wg(c,u){u in s?b(c,s[u]):(l('The "position" parameter is not valid, defaulting to "center"'),b(c,s.center))}function Qg(c,u){if(u&&typeof u=="string"){const f=`grow-${u}`;f in s&&b(c,s[f])}}const Yg=["input","file","range","select","radio","checkbox","textarea"],Xg=(c,u)=>{const f=j(),m=e.innerParams.get(c),N=!m||u.input!==m.input;Yg.forEach(nt=>{const Ut=I(f,s[nt]);ty(nt,u.inputAttributes),Ut.className=s[nt],N&&C(Ut)}),u.input&&(N&&Jg(u),ey(u))},Jg=c=>{if(!pe[c.input])return void h(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${c.input}"`);const u=hu(c.input),f=pe[c.input](u,c);R(u),c.inputAutoFocus&&setTimeout(()=>{y(f)})},Zg=c=>{for(let u=0;u<c.attributes.length;u++){const f=c.attributes[u].name;["type","value","style"].includes(f)||c.removeAttribute(f)}},ty=(c,u)=>{const f=Ln(j(),c);if(f){Zg(f);for(const m in u)f.setAttribute(m,u[m])}},ey=c=>{const u=hu(c.input);typeof c.customClass=="object"&&b(u,c.customClass.input)},da=(c,u)=>{c.placeholder&&!u.inputPlaceholder||(c.placeholder=u.inputPlaceholder)},ir=(c,u,f)=>{if(f.inputLabel){c.id=s.input;const m=document.createElement("label"),N=s["input-label"];m.setAttribute("for",c.id),m.className=N,typeof f.customClass=="object"&&b(m,f.customClass.inputLabel),m.innerText=f.inputLabel,u.insertAdjacentElement("beforebegin",m)}},hu=c=>I(j(),s[c]||s.input),fi=(c,u)=>{["string","number"].includes(typeof u)?c.value=`${u}`:M(u)||l(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof u}"`)},pe={};pe.text=pe.email=pe.password=pe.number=pe.tel=pe.url=(c,u)=>(fi(c,u.inputValue),ir(c,c,u),da(c,u),c.type=u.input,c),pe.file=(c,u)=>(ir(c,c,u),da(c,u),c),pe.range=(c,u)=>{const f=c.querySelector("input"),m=c.querySelector("output");return fi(f,u.inputValue),f.type=u.input,fi(m,u.inputValue),ir(f,c,u),c},pe.select=(c,u)=>{if(c.textContent="",u.inputPlaceholder){const f=document.createElement("option");Lt(f,u.inputPlaceholder),f.value="",f.disabled=!0,f.selected=!0,c.appendChild(f)}return ir(c,c,u),c},pe.radio=c=>(c.textContent="",c),pe.checkbox=(c,u)=>{const f=Ln(j(),"checkbox");f.value="1",f.id=s.checkbox,f.checked=!!u.inputValue;const m=c.querySelector("span");return Lt(m,u.inputPlaceholder),f},pe.textarea=(c,u)=>{fi(c,u.inputValue),da(c,u),ir(c,c,u);const f=m=>parseInt(window.getComputedStyle(m).marginLeft)+parseInt(window.getComputedStyle(m).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const m=parseInt(window.getComputedStyle(j()).width);new MutationObserver(()=>{const N=c.offsetWidth+f(c);j().style.width=N>m?`${N}px`:null}).observe(c,{attributes:!0,attributeFilter:["style"]})}}),c};const ny=(c,u)=>{const f=It();Wt(f,u,"htmlContainer"),u.html?(ke(u.html,f),R(f,"block")):u.text?(f.textContent=u.text,R(f,"block")):C(f),Xg(c,u)},sy=(c,u)=>{const f=ve();T(f,u.footer),u.footer&&ke(u.footer,f),Wt(f,u,"footer")},ry=(c,u)=>{const f=e.innerParams.get(c),m=ft();if(f&&u.icon===f.icon)return fu(m,u),void du(m,u);if(u.icon||u.iconHtml){if(u.icon&&Object.keys(r).indexOf(u.icon)===-1)return h(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${u.icon}"`),void C(m);R(m),fu(m,u),du(m,u),b(m,u.showClass.icon)}else C(m)},du=(c,u)=>{for(const f in r)u.icon!==f&&k(c,r[f]);b(c,r[u.icon]),cy(c,u),iy(),Wt(c,u,"icon")},iy=()=>{const c=j(),u=window.getComputedStyle(c).getPropertyValue("background-color"),f=c.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let m=0;m<f.length;m++)f[m].style.backgroundColor=u},oy=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,ay=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,fu=(c,u)=>{let f,m=c.innerHTML;u.iconHtml?f=pu(u.iconHtml):u.icon==="success"?(f=oy,m=m.replace(/ style=".*?"/g,"")):f=u.icon==="error"?ay:pu({question:"?",warning:"!",info:"i"}[u.icon]),m.trim()!==f.trim()&&Lt(c,f)},cy=(c,u)=>{if(u.iconColor){c.style.color=u.iconColor,c.style.borderColor=u.iconColor;for(const f of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])x(c,f,"backgroundColor",u.iconColor);x(c,".swal2-success-ring","borderColor",u.iconColor)}},pu=c=>`<div class="${s["icon-content"]}">${c}</div>`,ly=(c,u)=>{const f=we();u.imageUrl?(R(f,""),f.setAttribute("src",u.imageUrl),f.setAttribute("alt",u.imageAlt),S(f,"width",u.imageWidth),S(f,"height",u.imageHeight),f.className=s.image,Wt(f,u,"image")):C(f)},uy=(c,u)=>{const f=O(),m=j();u.toast?(S(f,"width",u.width),m.style.width="100%",m.insertBefore(it(),ft())):S(m,"width",u.width),S(m,"padding",u.padding),u.color&&(m.style.color=u.color),u.background&&(m.style.background=u.background),C(Ie()),hy(m,u)},hy=(c,u)=>{c.className=`${s.popup} ${F(c)?u.showClass.popup:""}`,u.toast?(b([document.documentElement,document.body],s["toast-shown"]),b(c,s.toast)):b(c,s.modal),Wt(c,u,"popup"),typeof u.customClass=="string"&&b(c,u.customClass),u.icon&&b(c,s[`icon-${u.icon}`])},dy=(c,u)=>{const f=Ot();u.progressSteps&&u.progressSteps.length!==0?(R(f),f.textContent="",u.currentProgressStep>=u.progressSteps.length&&l("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),u.progressSteps.forEach((m,N)=>{const nt=fy(m);if(f.appendChild(nt),N===u.currentProgressStep&&b(nt,s["active-progress-step"]),N!==u.progressSteps.length-1){const Ut=py(u);f.appendChild(Ut)}})):C(f)},fy=c=>{const u=document.createElement("li");return b(u,s["progress-step"]),Lt(u,c),u},py=c=>{const u=document.createElement("li");return b(u,s["progress-step-line"]),c.progressStepsDistance&&S(u,"width",c.progressStepsDistance),u},my=(c,u)=>{const f=wt();T(f,u.title||u.titleText,"block"),u.title&&ke(u.title,f),u.titleText&&(f.innerText=u.titleText),Wt(f,u,"title")},mu=(c,u)=>{uy(c,u),Kg(c,u),dy(c,u),ry(c,u),ly(c,u),my(c,u),Hg(c,u),ny(c,u),$g(c,u),sy(c,u),typeof u.didRender=="function"&&u.didRender(j())};function gu(){const c=e.innerParams.get(this);if(!c)return;const u=e.domCache.get(this);C(u.loader),ds()?c.icon&&R(ft()):gy(u),k([u.popup,u.actions],s.loading),u.popup.removeAttribute("aria-busy"),u.popup.removeAttribute("data-loading"),u.confirmButton.disabled=!1,u.denyButton.disabled=!1,u.cancelButton.disabled=!1}const gy=c=>{const u=c.popup.getElementsByClassName(c.loader.getAttribute("data-button-to-replace"));u.length?R(u[0],"inline-block"):L()&&C(c.actions)};function yy(c){const u=e.innerParams.get(c||this),f=e.domCache.get(c||this);return f?Ln(f.popup,u.input):null}const wy=()=>F(j()),yu=()=>St()&&St().click(),vy=()=>Te()&&Te().click(),by=()=>de()&&de().click(),ps=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),wu=c=>{c.keydownTarget&&c.keydownHandlerAdded&&(c.keydownTarget.removeEventListener("keydown",c.keydownHandler,{capture:c.keydownListenerCapture}),c.keydownHandlerAdded=!1)},Ey=(c,u,f,m)=>{wu(u),f.toast||(u.keydownHandler=N=>Ty(c,N,m),u.keydownTarget=f.keydownListenerCapture?window:j(),u.keydownListenerCapture=f.keydownListenerCapture,u.keydownTarget.addEventListener("keydown",u.keydownHandler,{capture:u.keydownListenerCapture}),u.keydownHandlerAdded=!0)},fa=(c,u)=>{const f=Pt();if(f.length)return(c+=u)===f.length?c=0:c===-1&&(c=f.length-1),void f[c].focus();j().focus()},vu=["ArrowRight","ArrowDown"],Iy=["ArrowLeft","ArrowUp"],Ty=(c,u,f)=>{const m=e.innerParams.get(c);m&&(u.isComposing||u.keyCode===229||(m.stopKeydownPropagation&&u.stopPropagation(),u.key==="Enter"?_y(c,u,m):u.key==="Tab"?ky(u):[...vu,...Iy].includes(u.key)?Cy(u.key):u.key==="Escape"&&Sy(u,m,f)))},_y=(c,u,f)=>{if(w(f.allowEnterKey)&&u.target&&c.getInput()&&u.target instanceof HTMLElement&&u.target.outerHTML===c.getInput().outerHTML){if(["textarea","file"].includes(f.input))return;yu(),u.preventDefault()}},ky=c=>{const u=c.target,f=Pt();let m=-1;for(let N=0;N<f.length;N++)if(u===f[N]){m=N;break}c.shiftKey?fa(m,-1):fa(m,1),c.stopPropagation(),c.preventDefault()},Cy=c=>{const u=[St(),Te(),de()];if(document.activeElement instanceof HTMLElement&&!u.includes(document.activeElement))return;const f=vu.includes(c)?"nextElementSibling":"previousElementSibling";let m=document.activeElement;for(let N=0;N<ot().children.length;N++){if(m=m[f],!m)return;if(m instanceof HTMLButtonElement&&F(m))break}m instanceof HTMLButtonElement&&m.focus()},Sy=(c,u,f)=>{w(u.allowEscapeKey)&&(c.preventDefault(),f(ps.esc))};var or={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ay=()=>{Array.from(document.body.children).forEach(c=>{c===O()||c.contains(O())||(c.hasAttribute("aria-hidden")&&c.setAttribute("data-previous-aria-hidden",c.getAttribute("aria-hidden")),c.setAttribute("aria-hidden","true"))})},bu=()=>{Array.from(document.body.children).forEach(c=>{c.hasAttribute("data-previous-aria-hidden")?(c.setAttribute("aria-hidden",c.getAttribute("data-previous-aria-hidden")),c.removeAttribute("data-previous-aria-hidden")):c.removeAttribute("aria-hidden")})},xy=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!_e(document.body,s.iosfix)){const c=document.body.scrollTop;document.body.style.top=-1*c+"px",b(document.body,s.iosfix),Dy(),Ny()}},Ny=()=>{const c=navigator.userAgent,u=!!c.match(/iPad/i)||!!c.match(/iPhone/i),f=!!c.match(/WebKit/i);u&&f&&!c.match(/CriOS/i)&&j().scrollHeight>window.innerHeight-44&&(O().style.paddingBottom="44px")},Dy=()=>{const c=O();let u;c.ontouchstart=f=>{u=Ry(f)},c.ontouchmove=f=>{u&&(f.preventDefault(),f.stopPropagation())}},Ry=c=>{const u=c.target,f=O();return!(Oy(c)||Py(c)||u!==f&&(U(f)||!(u instanceof HTMLElement)||u.tagName==="INPUT"||u.tagName==="TEXTAREA"||U(It())&&It().contains(u)))},Oy=c=>c.touches&&c.touches.length&&c.touches[0].touchType==="stylus",Py=c=>c.touches&&c.touches.length>1,Ly=()=>{if(_e(document.body,s.iosfix)){const c=parseInt(document.body.style.top,10);k(document.body,s.iosfix),document.body.style.top="",document.body.scrollTop=-1*c}},My=()=>{Gt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Gt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Gt.previousBodyPadding+jg()}px`)},Fy=()=>{Gt.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Gt.previousBodyPadding}px`,Gt.previousBodyPadding=null)};function Eu(c,u,f,m){ds()?Iu(c,m):($t(f).then(()=>Iu(c,m)),wu(V)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(u.setAttribute("style","display:none !important"),u.removeAttribute("class"),u.innerHTML=""):u.remove(),pn()&&(Fy(),Ly(),bu()),Uy()}function Uy(){k([document.documentElement,document.body],[s.shown,s["height-auto"],s["no-backdrop"],s["toast-shown"]])}function pi(c){c=$y(c);const u=or.swalPromiseResolve.get(this),f=By(this);this.isAwaitingPromise()?c.isDismissed||(ar(this),u(c)):f&&u(c)}function Vy(){return!!e.awaitingPromise.get(this)}const By=c=>{const u=j();if(!u)return!1;const f=e.innerParams.get(c);if(!f||_e(u,f.hideClass.popup))return!1;k(u,f.showClass.popup),b(u,f.hideClass.popup);const m=O();return k(m,f.showClass.backdrop),b(m,f.hideClass.backdrop),qy(c,u,f),!0};function jy(c){const u=or.swalPromiseReject.get(this);ar(this),u&&u(c)}const ar=c=>{c.isAwaitingPromise()&&(e.awaitingPromise.delete(c),e.innerParams.get(c)||c._destroy())},$y=c=>c===void 0?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},c),qy=(c,u,f)=>{const m=O(),N=Ve&&B(u);typeof f.willClose=="function"&&f.willClose(u),N?zy(c,u,m,f.returnFocus,f.didClose):Eu(c,m,f.returnFocus,f.didClose)},zy=(c,u,f,m,N)=>{V.swalCloseEventFinishedCallback=Eu.bind(null,c,f,m,N),u.addEventListener(Ve,function(nt){nt.target===u&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback)})},Iu=(c,u)=>{setTimeout(()=>{typeof u=="function"&&u.bind(c.params)(),c._destroy()})};function Tu(c,u,f){const m=e.domCache.get(c);u.forEach(N=>{m[N].disabled=f})}function _u(c,u){if(c)if(c.type==="radio"){const f=c.parentNode.parentNode.querySelectorAll("input");for(let m=0;m<f.length;m++)f[m].disabled=u}else c.disabled=u}function Hy(){Tu(this,["confirmButton","denyButton","cancelButton"],!1)}function Ky(){Tu(this,["confirmButton","denyButton","cancelButton"],!0)}function Gy(){_u(this.getInput(),!1)}function Wy(){_u(this.getInput(),!0)}function Qy(c){const u=e.domCache.get(this),f=e.innerParams.get(this);Lt(u.validationMessage,c),u.validationMessage.className=s["validation-message"],f.customClass&&f.customClass.validationMessage&&b(u.validationMessage,f.customClass.validationMessage),R(u.validationMessage);const m=this.getInput();m&&(m.setAttribute("aria-invalid",!0),m.setAttribute("aria-describedby",s["validation-message"]),y(m),b(m,s.inputerror))}function Yy(){const c=e.domCache.get(this);c.validationMessage&&C(c.validationMessage);const u=this.getInput();u&&(u.removeAttribute("aria-invalid"),u.removeAttribute("aria-describedby"),k(u,s.inputerror))}const ms={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},Xy=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],Jy={},Zy=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ku=c=>Object.prototype.hasOwnProperty.call(ms,c),Cu=c=>Xy.indexOf(c)!==-1,pa=c=>Jy[c],tw=c=>{ku(c)||l(`Unknown parameter "${c}"`)},ew=c=>{Zy.includes(c)&&l(`The parameter "${c}" is incompatible with toasts`)},nw=c=>{pa(c)&&g(c,pa(c))},sw=c=>{c.backdrop===!1&&c.allowOutsideClick&&l('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const u in c)tw(u),c.toast&&ew(u),nw(u)};function rw(c){const u=j(),f=e.innerParams.get(this);if(!u||_e(u,f.hideClass.popup))return void l("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const m=iw(c),N=Object.assign({},f,m);mu(this,N),e.innerParams.set(this,N),Object.defineProperties(this,{params:{value:Object.assign({},this.params,c),writable:!1,enumerable:!0}})}const iw=c=>{const u={};return Object.keys(c).forEach(f=>{Cu(f)?u[f]=c[f]:l(`Invalid parameter to update: ${f}`)}),u};function ow(){const c=e.domCache.get(this),u=e.innerParams.get(this);u?(c.popup&&V.swalCloseEventFinishedCallback&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback),typeof u.didDestroy=="function"&&u.didDestroy(),aw(this)):Su(this)}const aw=c=>{Su(c),delete c.params,delete V.keydownHandler,delete V.keydownTarget,delete V.currentInstance},Su=c=>{c.isAwaitingPromise()?(ma(e,c),e.awaitingPromise.set(c,!0)):(ma(or,c),ma(e,c))},ma=(c,u)=>{for(const f in c)c[f].delete(u)};var Au=Object.freeze({__proto__:null,_destroy:ow,close:pi,closeModal:pi,closePopup:pi,closeToast:pi,disableButtons:Ky,disableInput:Wy,disableLoading:gu,enableButtons:Hy,enableInput:Gy,getInput:yy,handleAwaitingPromise:ar,hideLoading:gu,isAwaitingPromise:Vy,rejectPromise:jy,resetValidationMessage:Yy,showValidationMessage:Qy,update:rw});const gs=c=>{let u=j();u||new gi,u=j();const f=it();ds()?C(ft()):cw(u,c),R(f),u.setAttribute("data-loading","true"),u.setAttribute("aria-busy","true"),u.focus()},cw=(c,u)=>{const f=ot(),m=it();!u&&F(St())&&(u=St()),R(f),u&&(C(u),m.setAttribute("data-button-to-replace",u.className)),m.parentNode.insertBefore(m,u),b([c,f],s.loading)},lw=(c,u)=>{u.input==="select"||u.input==="radio"?pw(c,u):["text","email","number","tel","textarea"].includes(u.input)&&(E(u.inputValue)||M(u.inputValue))&&(gs(St()),mw(c,u))},uw=(c,u)=>{const f=c.getInput();if(!f)return null;switch(u.input){case"checkbox":return hw(f);case"radio":return dw(f);case"file":return fw(f);default:return u.inputAutoTrim?f.value.trim():f.value}},hw=c=>c.checked?1:0,dw=c=>c.checked?c.value:null,fw=c=>c.files.length?c.getAttribute("multiple")!==null?c.files:c.files[0]:null,pw=(c,u)=>{const f=j(),m=N=>{gw[u.input](f,ga(N),u)};E(u.inputOptions)||M(u.inputOptions)?(gs(St()),_(u.inputOptions).then(N=>{c.hideLoading(),m(N)})):typeof u.inputOptions=="object"?m(u.inputOptions):h("Unexpected type of inputOptions! Expected object, Map or Promise, got "+typeof u.inputOptions)},mw=(c,u)=>{const f=c.getInput();C(f),_(u.inputValue).then(m=>{f.value=u.input==="number"?`${parseFloat(m)||0}`:`${m}`,R(f),f.focus(),c.hideLoading()}).catch(m=>{h(`Error in inputValue promise: ${m}`),f.value="",R(f),f.focus(),c.hideLoading()})},gw={select:(c,u,f)=>{const m=I(c,s.select),N=(nt,Ut,je)=>{const ae=document.createElement("option");ae.value=je,Lt(ae,Ut),ae.selected=xu(je,f.inputValue),nt.appendChild(ae)};u.forEach(nt=>{const Ut=nt[0],je=nt[1];if(Array.isArray(je)){const ae=document.createElement("optgroup");ae.label=Ut,ae.disabled=!1,m.appendChild(ae),je.forEach(ws=>N(ae,ws[1],ws[0]))}else N(m,je,Ut)}),m.focus()},radio:(c,u,f)=>{const m=I(c,s.radio);u.forEach(nt=>{const Ut=nt[0],je=nt[1],ae=document.createElement("input"),ws=document.createElement("label");ae.type="radio",ae.name=s.radio,ae.value=Ut,xu(Ut,f.inputValue)&&(ae.checked=!0);const ba=document.createElement("span");Lt(ba,je),ba.className=s.label,ws.appendChild(ae),ws.appendChild(ba),m.appendChild(ws)});const N=m.querySelectorAll("input");N.length&&N[0].focus()}},ga=c=>{const u=[];return typeof Map<"u"&&c instanceof Map?c.forEach((f,m)=>{let N=f;typeof N=="object"&&(N=ga(N)),u.push([m,N])}):Object.keys(c).forEach(f=>{let m=c[f];typeof m=="object"&&(m=ga(m)),u.push([f,m])}),u},xu=(c,u)=>u&&u.toString()===c.toString(),yw=c=>{const u=e.innerParams.get(c);c.disableButtons(),u.input?Nu(c,"confirm"):wa(c,!0)},ww=c=>{const u=e.innerParams.get(c);c.disableButtons(),u.returnInputValueOnDeny?Nu(c,"deny"):ya(c,!1)},vw=(c,u)=>{c.disableButtons(),u(ps.cancel)},Nu=(c,u)=>{const f=e.innerParams.get(c);if(!f.input)return void h(`The "input" parameter is needed to be set when using returnInputValueOn${a(u)}`);const m=uw(c,f);f.inputValidator?bw(c,m,u):c.getInput().checkValidity()?u==="deny"?ya(c,m):wa(c,m):(c.enableButtons(),c.showValidationMessage(f.validationMessage))},bw=(c,u,f)=>{const m=e.innerParams.get(c);c.disableInput(),Promise.resolve().then(()=>_(m.inputValidator(u,m.validationMessage))).then(N=>{c.enableButtons(),c.enableInput(),N?c.showValidationMessage(N):f==="deny"?ya(c,u):wa(c,u)})},ya=(c,u)=>{const f=e.innerParams.get(c||void 0);f.showLoaderOnDeny&&gs(Te()),f.preDeny?(e.awaitingPromise.set(c||void 0,!0),Promise.resolve().then(()=>_(f.preDeny(u,f.validationMessage))).then(m=>{m===!1?(c.hideLoading(),ar(c)):c.close({isDenied:!0,value:m===void 0?u:m})}).catch(m=>Ru(c||void 0,m))):c.close({isDenied:!0,value:u})},Du=(c,u)=>{c.close({isConfirmed:!0,value:u})},Ru=(c,u)=>{c.rejectPromise(u)},wa=(c,u)=>{const f=e.innerParams.get(c||void 0);f.showLoaderOnConfirm&&gs(),f.preConfirm?(c.resetValidationMessage(),e.awaitingPromise.set(c||void 0,!0),Promise.resolve().then(()=>_(f.preConfirm(u,f.validationMessage))).then(m=>{F(Ie())||m===!1?(c.hideLoading(),ar(c)):Du(c,m===void 0?u:m)}).catch(m=>Ru(c||void 0,m))):Du(c,u)},Ew=(c,u,f)=>{e.innerParams.get(c).toast?Iw(c,u,f):(_w(u),kw(u),Cw(c,u,f))},Iw=(c,u,f)=>{u.popup.onclick=()=>{const m=e.innerParams.get(c);m&&(Tw(m)||m.timer||m.input)||f(ps.close)}},Tw=c=>c.showConfirmButton||c.showDenyButton||c.showCancelButton||c.showCloseButton;let mi=!1;const _w=c=>{c.popup.onmousedown=()=>{c.container.onmouseup=function(u){c.container.onmouseup=void 0,u.target===c.container&&(mi=!0)}}},kw=c=>{c.container.onmousedown=()=>{c.popup.onmouseup=function(u){c.popup.onmouseup=void 0,(u.target===c.popup||c.popup.contains(u.target))&&(mi=!0)}}},Cw=(c,u,f)=>{u.container.onclick=m=>{const N=e.innerParams.get(c);mi?mi=!1:m.target===u.container&&w(N.allowOutsideClick)&&f(ps.backdrop)}},Sw=c=>typeof c=="object"&&c.jquery,Ou=c=>c instanceof Element||Sw(c),Aw=c=>{const u={};return typeof c[0]!="object"||Ou(c[0])?["title","html","icon"].forEach((f,m)=>{const N=c[m];typeof N=="string"||Ou(N)?u[f]=N:N!==void 0&&h(`Unexpected type of ${f}! Expected "string" or "Element", got ${typeof N}`)}):Object.assign(u,c[0]),u};function xw(){const c=this;for(var u=arguments.length,f=new Array(u),m=0;m<u;m++)f[m]=arguments[m];return new c(...f)}function Nw(c){class u extends this{_main(m,N){return super._main(m,Object.assign({},c,N))}}return u}const Dw=()=>V.timeout&&V.timeout.getTimerLeft(),Pu=()=>{if(V.timeout)return W(),V.timeout.stop()},Lu=()=>{if(V.timeout){const c=V.timeout.start();return $(c),c}},Rw=()=>{const c=V.timeout;return c&&(c.running?Pu():Lu())},Ow=c=>{if(V.timeout){const u=V.timeout.increase(c);return $(u,!0),u}},Pw=()=>V.timeout&&V.timeout.isRunning();let Mu=!1;const va={};function Lw(){va[arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template"]=this,Mu||(document.body.addEventListener("click",Mw),Mu=!0)}const Mw=c=>{for(let u=c.target;u&&u!==document;u=u.parentNode)for(const f in va){const m=u.getAttribute(f);if(m)return void va[f].fire({template:m})}};var Fw=Object.freeze({__proto__:null,argsToParams:Aw,bindClickHandler:Lw,clickCancel:by,clickConfirm:yu,clickDeny:vy,enableLoading:gs,fire:xw,getActions:ot,getCancelButton:de,getCloseButton:ie,getConfirmButton:St,getContainer:O,getDenyButton:Te,getFocusableElements:Pt,getFooter:ve,getHtmlContainer:It,getIcon:ft,getIconContent:pt,getImage:we,getInputLabel:Kt,getLoader:it,getPopup:j,getProgressSteps:Ot,getTimerLeft:Dw,getTimerProgressBar:Fe,getTitle:wt,getValidationMessage:Ie,increaseTimer:Ow,isDeprecatedParameter:pa,isLoading:la,isTimerRunning:Pw,isUpdatableParameter:Cu,isValidParameter:ku,isVisible:wy,mixin:Nw,resumeTimer:Lu,showLoading:gs,stopTimer:Pu,toggleTimer:Rw});class Uw{constructor(u,f){this.callback=u,this.remaining=f,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(u){const f=this.running;return f&&this.stop(),this.remaining+=u,f&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Fu=["swal-title","swal-html","swal-footer"],Vw=c=>{const u=typeof c.template=="string"?document.querySelector(c.template):c.template;if(!u)return{};const f=u.content;return Gw(f),Object.assign(Bw(f),jw(f),$w(f),qw(f),zw(f),Hw(f),Kw(f,Fu))},Bw=c=>{const u={};return Array.from(c.querySelectorAll("swal-param")).forEach(f=>{Fn(f,["name","value"]);const m=f.getAttribute("name"),N=f.getAttribute("value");typeof ms[m]=="boolean"?u[m]=N!=="false":typeof ms[m]=="object"?u[m]=JSON.parse(N):u[m]=N}),u},jw=c=>{const u={};return Array.from(c.querySelectorAll("swal-function-param")).forEach(f=>{const m=f.getAttribute("name"),N=f.getAttribute("value");u[m]=new Function(`return ${N}`)()}),u},$w=c=>{const u={};return Array.from(c.querySelectorAll("swal-button")).forEach(f=>{Fn(f,["type","color","aria-label"]);const m=f.getAttribute("type");u[`${m}ButtonText`]=f.innerHTML,u[`show${a(m)}Button`]=!0,f.hasAttribute("color")&&(u[`${m}ButtonColor`]=f.getAttribute("color")),f.hasAttribute("aria-label")&&(u[`${m}ButtonAriaLabel`]=f.getAttribute("aria-label"))}),u},qw=c=>{const u={},f=c.querySelector("swal-image");return f&&(Fn(f,["src","width","height","alt"]),f.hasAttribute("src")&&(u.imageUrl=f.getAttribute("src")),f.hasAttribute("width")&&(u.imageWidth=f.getAttribute("width")),f.hasAttribute("height")&&(u.imageHeight=f.getAttribute("height")),f.hasAttribute("alt")&&(u.imageAlt=f.getAttribute("alt"))),u},zw=c=>{const u={},f=c.querySelector("swal-icon");return f&&(Fn(f,["type","color"]),f.hasAttribute("type")&&(u.icon=f.getAttribute("type")),f.hasAttribute("color")&&(u.iconColor=f.getAttribute("color")),u.iconHtml=f.innerHTML),u},Hw=c=>{const u={},f=c.querySelector("swal-input");f&&(Fn(f,["type","label","placeholder","value"]),u.input=f.getAttribute("type")||"text",f.hasAttribute("label")&&(u.inputLabel=f.getAttribute("label")),f.hasAttribute("placeholder")&&(u.inputPlaceholder=f.getAttribute("placeholder")),f.hasAttribute("value")&&(u.inputValue=f.getAttribute("value")));const m=Array.from(c.querySelectorAll("swal-input-option"));return m.length&&(u.inputOptions={},m.forEach(N=>{Fn(N,["value"]);const nt=N.getAttribute("value"),Ut=N.innerHTML;u.inputOptions[nt]=Ut})),u},Kw=(c,u)=>{const f={};for(const m in u){const N=u[m],nt=c.querySelector(N);nt&&(Fn(nt,[]),f[N.replace(/^swal-/,"")]=nt.innerHTML.trim())}return f},Gw=c=>{const u=Fu.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(c.children).forEach(f=>{const m=f.tagName.toLowerCase();u.includes(m)||l(`Unrecognized element <${m}>`)})},Fn=(c,u)=>{Array.from(c.attributes).forEach(f=>{u.indexOf(f.name)===-1&&l([`Unrecognized attribute "${f.name}" on <${c.tagName.toLowerCase()}>.`,u.length?`Allowed attributes are: ${u.join(", ")}`:"To set the value, use HTML within the element."])})},Uu=10,Ww=c=>{const u=O(),f=j();typeof c.willOpen=="function"&&c.willOpen(f);const m=window.getComputedStyle(document.body).overflowY;Xw(u,f,c),setTimeout(()=>{Qw(u,f)},Uu),pn()&&(Yw(u,c.scrollbarPadding,m),Ay()),ds()||V.previousActiveElement||(V.previousActiveElement=document.activeElement),typeof c.didOpen=="function"&&setTimeout(()=>c.didOpen(f)),k(u,s["no-transition"])},Vu=c=>{const u=j();if(c.target!==u)return;const f=O();u.removeEventListener(Ve,Vu),f.style.overflowY="auto"},Qw=(c,u)=>{Ve&&B(u)?(c.style.overflowY="hidden",u.addEventListener(Ve,Vu)):c.style.overflowY="auto"},Yw=(c,u,f)=>{xy(),u&&f!=="hidden"&&My(),setTimeout(()=>{c.scrollTop=0})},Xw=(c,u,f)=>{b(c,f.showClass.backdrop),u.style.setProperty("opacity","0","important"),R(u,"grid"),setTimeout(()=>{b(u,f.showClass.popup),u.style.removeProperty("opacity")},Uu),b([document.documentElement,document.body],s.shown),f.heightAuto&&f.backdrop&&!f.toast&&b([document.documentElement,document.body],s["height-auto"])};var Bu={email:(c,u)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(c)?Promise.resolve():Promise.resolve(u||"Invalid email address"),url:(c,u)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(c)?Promise.resolve():Promise.resolve(u||"Invalid URL")};function Jw(c){c.inputValidator||Object.keys(Bu).forEach(u=>{c.input===u&&(c.inputValidator=Bu[u])})}function Zw(c){(!c.target||typeof c.target=="string"&&!document.querySelector(c.target)||typeof c.target!="string"&&!c.target.appendChild)&&(l('Target parameter is not valid, defaulting to "body"'),c.target="body")}function tv(c){Jw(c),c.showLoaderOnConfirm&&!c.preConfirm&&l(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Zw(c),typeof c.title=="string"&&(c.title=c.title.split(`
`).join("<br />")),fe(c)}let Be;class ys{constructor(){if(typeof window>"u")return;Be=this;for(var u=arguments.length,f=new Array(u),m=0;m<u;m++)f[m]=arguments[m];const N=Object.freeze(this.constructor.argsToParams(f));Object.defineProperties(this,{params:{value:N,writable:!1,enumerable:!0,configurable:!0}});const nt=Be._main(Be.params);e.promise.set(this,nt)}_main(u){let f=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};sw(Object.assign({},f,u)),V.currentInstance&&(V.currentInstance._destroy(),pn()&&bu()),V.currentInstance=Be;const m=nv(u,f);tv(m),Object.freeze(m),V.timeout&&(V.timeout.stop(),delete V.timeout),clearTimeout(V.restoreFocusTimeout);const N=sv(Be);return mu(Be,m),e.innerParams.set(Be,m),ev(Be,N,m)}then(u){return e.promise.get(this).then(u)}finally(u){return e.promise.get(this).finally(u)}}const ev=(c,u,f)=>new Promise((m,N)=>{const nt=Ut=>{c.close({isDismissed:!0,dismiss:Ut})};or.swalPromiseResolve.set(c,m),or.swalPromiseReject.set(c,N),u.confirmButton.onclick=()=>{yw(c)},u.denyButton.onclick=()=>{ww(c)},u.cancelButton.onclick=()=>{vw(c,nt)},u.closeButton.onclick=()=>{nt(ps.close)},Ew(c,u,nt),Ey(c,V,f,nt),lw(c,f),Ww(f),rv(V,f,nt),iv(u,f),setTimeout(()=>{u.container.scrollTop=0})}),nv=(c,u)=>{const f=Vw(c),m=Object.assign({},ms,u,f,c);return m.showClass=Object.assign({},ms.showClass,m.showClass),m.hideClass=Object.assign({},ms.hideClass,m.hideClass),m},sv=c=>{const u={popup:j(),container:O(),actions:ot(),confirmButton:St(),denyButton:Te(),cancelButton:de(),loader:it(),closeButton:ie(),validationMessage:Ie(),progressSteps:Ot()};return e.domCache.set(c,u),u},rv=(c,u,f)=>{const m=Fe();C(m),u.timer&&(c.timeout=new Uw(()=>{f("timer"),delete c.timeout},u.timer),u.timerProgressBar&&(R(m),Wt(m,u,"timerProgressBar"),setTimeout(()=>{c.timeout&&c.timeout.running&&$(u.timer)})))},iv=(c,u)=>{u.toast||(w(u.allowEnterKey)?ov(c,u)||fa(-1,1):av())},ov=(c,u)=>u.focusDeny&&F(c.denyButton)?(c.denyButton.focus(),!0):u.focusCancel&&F(c.cancelButton)?(c.cancelButton.focus(),!0):!(!u.focusConfirm||!F(c.confirmButton)||(c.confirmButton.focus(),0)),av=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const c=new Date,u=localStorage.getItem("swal-initiation");u?(c.getTime()-Date.parse(u))/864e5>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const f=document.createElement("audio");f.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",f.loop=!0,document.body.appendChild(f),setTimeout(()=>{f.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${c}`)}Object.assign(ys.prototype,Au),Object.assign(ys,Fw),Object.keys(Au).forEach(c=>{ys[c]=function(){if(Be)return Be[c](...arguments)}}),ys.DismissReason=ps,ys.version="11.7.3";const gi=ys;return gi.default=gi,gi}(),$n!==void 0&&$n.Sweetalert2&&($n.swal=$n.sweetAlert=$n.Swal=$n.SweetAlert=$n.Sweetalert2),typeof document<"u"&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch{n.innerText=t}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');const s_=$c,r_={class:"navbar navbar-expand-lg bg-dark footer"},i_=["onSubmit"],o_={__name:"Form",setup(e){const t=vr(""),n=async()=>{try{t.value===""?s_.fire({text:"No puedes ingresar un mensaje vacio!",icon:"error"}):await t_(_g(Bg,"chats"),{text:t.value,time:new Date().toLocaleTimeString(),uid:Nr.currentUser.uid,displayName:Nr.currentUser.displayName})}catch(s){console.log(s)}t.value=""};return(s,r)=>(Ne(),Tn("footer",r_,[Zt("form",{onSubmit:P0(n,["prevent"])},[i0(Zt("input",{type:"text",placeholder:"Mensaje",spellcheck:"true","onUpdate:modelValue":r[0]||(r[0]=i=>t.value=i)},null,512),[[D0,t.value,void 0,{trim:!0}]])],40,i_)]))}},a_={class:"card-body"},c_={class:"card-title"},l_={class:"card-text"},u_={class:"card-text"},h_={__name:"Chat",setup(e){const t=br("userGoogle"),n=vr([]),s=vr({uid:"umeAFZhnrGZMr9NfgTWnh4xtTKX2"}),r=vr(null);var i,o;return i=a=>{if(t.value){const l=function(h,d,...p){let g=[];d instanceof au&&g.push(d),g=g.concat(p),function(w){const E=w.filter(M=>M instanceof lu).length,_=w.filter(M=>M instanceof cu).length;if(E>1||E>0&&_>0)throw new q(A.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(g);for(const w of g)h=w._apply(h);return h}(_g(Bg,"chats"),function(h,d="asc"){const p=d,g=ou("orderBy",h);return uu._create(g,p)}("time"));a(e_(l,h=>{h.docChanges().forEach(d=>{d.type==="added"&&(n.value.push({id:d.doc.id,...d.doc.data()}),setTimeout(()=>{r.value!==null&&window.scrollTo(0,r.value.scrollHeight)},500))})}))}},il(i,null,o),(a,l)=>(Ne(),Tn("div",{ref_key:"chatRef",ref:r},[(Ne(!0),Tn(xe,null,a0(n.value,h=>(Ne(),Tn("div",{key:h.id,class:Po(["card mb-3 mt-3",h.uid===s.value.uid?"mi-mensaje":"otro-mensaje"])},[Zt("div",a_,[Zt("h5",c_,Ea(h.displayName),1),Zt("p",l_,Ea(h.text),1),Zt("p",u_,[Zt("small",null,Ea(h.time),1)])])],2))),128))],512))}},d_={class:"navbar bg-dark navbar-expand-lg"},f_={class:"container-fluid"},p_=Zt("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABUFBMVEUAAABBuIM1SV5BuINBuINAsIFBuINBuINBuINAsoE2TmBBuINBuINBuINBuINBuINBuINBuINBuINBuINBuINBuoRBuINBuINBuINBuINApn5BuINBuINBuINBuINBuINBuIM8d3BBuINBuIM4XGVBuIM5ZmpBuINBuINBuIM8enI2UWE3VGM3VWNBuINBuIM3V2RBuIM4WmQ5YmhBuIM5Y2k6amtBuINBuIM6bm07cG47b207dG9BuINBuIMzO1k6Z2o6aGpBuINBuIM1SV5Bt4NDyok0Qlw0QFtCxogzOFk1R10zNldDzIk1Rl00RFwyNVczPVozO1lCw4dBvIRBvoVBv4VCyIhCwYZBuoM1S187gHEzN1dAqX8/nns+kXc9i3U7eW85bms5Z2k/o30+mHk4YWc4XGY3V2Q3UmJAroE8hXM6c21Bs4JBsYEzNFcFmwh9AAAAQ3RSTlMAu7v7IA7y5sQG/typi3pcQhT27cy9mmoxKAmhkoNUSTsqGdG/tpJjTzcb9evj4NjY1Muyr6F3dHBlVUk6LbO7hYGyQ6Q7BwAABvRJREFUeNrs11lP4mAUxvHjqCi4L6ASE0NEoqiJ0WDikqh53y60tKVQUAFxX3D5/rcz45gZBwvniSl3/V0ToDnpyflTKBQKhUKhUCjESsT7APF4+ugHL0WES/3gHaXj2P9LUEJA8vWGZDk5IlzOkaxGPS8gCaIRAVCqlacS/yAyRbCU5B+k9FSpKgIwQkSTAqGo9yVbcvRtgm3rkmMb96oiEJP0S59AePnbhuSYzj6B9h1Tchq3eU8g+ui3AWwk+QtNkxxtg0AbwJdpF3lsIAP0bkxA1OuiZGknBDnRJKt4rQrIGP0RjUAjOVNqLv8gsSwBsjH+QdyYcgYNJBKlDxMCoVhXBcnSdwiwo0tW4cpSBGKC/loWiEr50ZAc2zwk1qFpS47xeFYRiGX6Zw1cwc2Sw49ki1hb/ECcUhNcvWv0yahAnKs3BckxtT1i7Gmm5BRu1HOBGKXPpvqxFfxs65KjrUepq+i6xs/VfsZWb/8U/WdcQKw6sIL1DHWV0YHVW7cEZJzaDGEr2Gu5kuPUstRFtuZIjtvysNU7RO1Wwff90jD5kaSpizQ/ENO4BN/0VfpiGDy5HgzJMe0D6ujANiXHeCh7AjFMXy1gIzm9c4EVvEkdbQKr1707xQayQD7AxFJfi8AK3qUOdoHVW3xV0ZzyMzgNjaT8JnXg5BokX4MxYPXKtzI0kOkOPzInINYLcnLlyFcOObJeLAGZI19w9Vax6v1+31bhvvWHV6+BVm/v+9bfSqDV2+O+XSF/wVdvz/u2E7x6Lah6j6nNMdS3Ftq33URnsJNLxIDqrWXbj6wA+3aGObHB6lWx6v1O36po3zJme1K9eN+Wsb6dJc48eHI1Xbx68b51m+CRNU+MoKu3Z33LCLx6k/QhGXDfMoKv3h71LQuv3qrXKgHVm6J3KaBvSy2vCvYtZinY6g2+b5cIEHz14n2bR/sWhFevDtxOm+99C3xQx/sWthho9WJ9W0D7dpFwyQhYvTWkeomQvq2BfRtJEgivXgWr3kwG61sF71vcT+bNXjWBKIyCX6HgC1gZRUxhpwiCNqaI10RwMf4URiMGYhFszPt36VIZ9uzOKZw3kAX5hjunr51civUuDoeF4LfiI0I/itE2vvUu8n/HcqP6bTsK8qydXLtzlgxk5512ZD1FUTpG6zX6bScK09StF/Oj+m0zSmCzXsFvp6LfRhla6sl1TJDjp/jX24ocmPXmnFzCkcX81mq9AOC3Kg2H9fr8thFlqWrWu73mWG+e3241v61GaUbYeo1+OwpAT8zr/rVewW/FSK4XCtx6l6kUS+a3OnX20OB7RKgHo4Ks1+i3lYA8gLwORHLAb6H1zm5Yr+C3M9lvMd0pzut4JNcNAwPt5Hr/3qSCbNRIbhA63HpPN6w3x29Pst9aGIrW+5UVPbJEvx2GgNN6317vxm916+Un1+rjRfVbD3pet7+sk8z6slcjOR8t8NCAHxFaYaQGrBf6bS2cTMRP8pfXCZGc+EEmYaWhPjRkSUF/RGgEAOR11zRPAvN0BZEcYqzmdasksFIjuXGYAaMyNgLj8LzOH8lxwKgMj8A4PK/jkZwZMCpjIzAz3lHZ+qCPwMyAURkbgZkBozISyT2GGToq4yMwDs/reCTH4Xkdj+Q4PK/DkZwdPirjIzAOHJXxERiH53U8kvPDR2V8BMbhozI+AuPwURkfgXHoqAyMwOzwURkfgXG49d6N3/62by+rCQRBFIYrjELAKzHmglHEEEw2iiCYjW5q6TYo7nz/p8gmy1Jnuqbpc0J/b/FTp7xPZc4nMFuS6oXpW+9TmeMJLAL/U1n5kVy0vvU/lf09gSXvW+9TmeMJzCHGvC7KSC5F9cL0rbt6YfrWW704fet7Ktvvfw4gfeua1x3P52PkkZy/eks5HBSmb13VezoB9a1rXhd9JBdnXmeLP5KLX71gfWtbak2WktZUazKVxHZai52kNtNazCS5sdZgLAAG6jYQBBN1mwiEa9UL2rfVqxe1b20jdRkJimahDkVTYGzUYSNAFhpsIUjs6sXuW9tQAw0Fi3VowDsilPHG17eXqpevb21zDTAXQCutbCWIpoR9a1trRWvBNCPsW9uYsG9vHBqQjwhlTAj79sqhAf2IUMZWS9sKtBFf316e1yGN5KI/lX0LvBbWSC5cH2wkF/Wp7E4YNAj71tbBGsl5nspuPoGR6IGN5CI9lb0Lj6/rT2BE2lgjOc+8DmskF64LNpJzVC9f31Z6KvsUOvd8fWt7BRvJ1fpU9iSMmg98fWt7BhvJhWvx9a2tT9i3JZ7KPoRXg7BvbR2+vr31VDag6Vtbj7BvbY9YI7lwL2AjuXBtvr69VL18fWvrEvatrSjkf5hDTmeyLMuyLMuyjNYv/GbbYR0WTIQAAAAASUVORK5CYII=",alt:"logo de vue.js",loading:"lazy"},null,-1),m_={class:"container"},g_={key:1},y_=[Zt("h1",{class:"session-title"},"Iniciar sesion para ver los chats",-1)],w_={__name:"App",setup(e){const t=vr(!1);kf("userGoogle",t);const n=async()=>{try{const r=new Ze,{user:i}=await Cb(Nr,r)}catch(r){console.log(r)}},s=async()=>{await function(r){return he(r).signOut()}(Nr)};return function(r,i,o,a){he(r).onAuthStateChanged(i,o,a)}(Nr,r=>{t.value=r}),(r,i)=>(Ne(),Tn(xe,null,[Zt("header",null,[Zt("nav",d_,[Zt("div",f_,[p_,Zt("div",null,[t.value?(Ne(),Tn("button",{key:1,class:"btn-app",onClick:s},"Salir")):(Ne(),Tn("button",{key:0,class:"btn-app",onClick:n},"Acceder"))])])])]),Zt("main",m_,[t.value?(Ne(),ic(h_,{key:0})):(Ne(),Tn("div",g_,y_))]),t.value?(Ne(),ic(o_,{key:0})):v0("",!0)],64))}};((...e)=>{const t=(gh||(gh=y0(L0))).createApp(...e),{mount:n}=t;return t.mount=s=>{const r=function(a){return xt(a)?document.querySelector(a):a}(s);if(!r)return;const i=t._component;st(i)||i.render||i.template||(i.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,r instanceof SVGElement);return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},t})(w_).mount("#app");
