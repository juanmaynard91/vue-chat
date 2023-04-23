(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();function Lc(t,e){const n=Object.create(null),s=t.split(",");for(let i=0;i<s.length;i++)n[s[i]]=!0;return e?i=>!!n[i.toLowerCase()]:i=>!!n[i]}function Bc(t){if(J(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?Iv(s):Bc(s);if(i)for(const r in i)e[r]=i[r]}return e}else{if(Oe(t))return t;if(Ie(t))return t}}const bv=/;(?![^(]*\))/g,Ev=/:([^]+)/,_v=/\/\*.*?\*\//gs;function Iv(t){const e={};return t.replace(_v,"").split(bv).forEach(n=>{if(n){const s=n.split(Ev);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function yo(t){let e="";if(Oe(t))e=t;else if(J(t))for(let n=0;n<t.length;n++){const s=yo(t[n]);s&&(e+=s+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Tv="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Cv=Lc(Tv);function Ld(t){return!!t||t===""}const ma=t=>Oe(t)?t:t==null?"":J(t)||Ie(t)&&(t.toString===$d||!ne(t.toString))?JSON.stringify(t,Bd,2):String(t),Bd=(t,e)=>e&&e.__v_isRef?Bd(t,e.value):ys(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i])=>(n[`${s} =>`]=i,n),{})}:Fd(e)?{[`Set(${e.size})`]:[...e.values()]}:Ie(e)&&!J(e)&&!Vd(e)?String(e):e,ye={},ms=[],Dt=()=>{},Av=()=>!1,Sv=/^on[^a-z]/,wo=t=>Sv.test(t),Fc=t=>t.startsWith("onUpdate:"),Je=Object.assign,Uc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},kv=Object.prototype.hasOwnProperty,ce=(t,e)=>kv.call(t,e),J=Array.isArray,ys=t=>vo(t)==="[object Map]",Fd=t=>vo(t)==="[object Set]",ne=t=>typeof t=="function",Oe=t=>typeof t=="string",$c=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",Ud=t=>Ie(t)&&ne(t.then)&&ne(t.catch),$d=Object.prototype.toString,vo=t=>$d.call(t),xv=t=>vo(t).slice(8,-1),Vd=t=>vo(t)==="[object Object]",Vc=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,xr=Lc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),bo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Rv=/-(\w)/g,Cs=bo(t=>t.replace(Rv,(e,n)=>n?n.toUpperCase():"")),Dv=/\B([A-Z])/g,Fs=bo(t=>t.replace(Dv,"-$1").toLowerCase()),jd=bo(t=>t.charAt(0).toUpperCase()+t.slice(1)),ya=bo(t=>t?`on${jd(t)}`:""),bi=(t,e)=>!Object.is(t,e),Rr=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Vr=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},qa=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let $u;const Nv=()=>$u||($u=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let At;class Pv{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=At,!e&&At&&(this.index=(At.scopes||(At.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=At;try{return At=this,e()}finally{At=n}}}on(){At=this}off(){At=this.parent}stop(e){if(this._active){let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.scopes)for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ov(t,e=At){e&&e.active&&e.effects.push(t)}function Mv(){return At}const jc=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Hd=t=>(t.w&In)>0,qd=t=>(t.n&In)>0,Lv=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=In},Bv=t=>{const{deps:e}=t;if(e.length){let n=0;for(let s=0;s<e.length;s++){const i=e[s];Hd(i)&&!qd(i)?i.delete(t):e[n++]=i,i.w&=~In,i.n&=~In}e.length=n}},za=new WeakMap;let ii=0,In=1;const Ka=30;let kt;const zn=Symbol(""),Wa=Symbol("");class Hc{constructor(e,n=null,s){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ov(this,s)}run(){if(!this.active)return this.fn();let e=kt,n=yn;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=kt,kt=this,yn=!0,In=1<<++ii,ii<=Ka?Lv(this):Vu(this),this.fn()}finally{ii<=Ka&&Bv(this),In=1<<--ii,kt=this.parent,yn=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){kt===this?this.deferStop=!0:this.active&&(Vu(this),this.onStop&&this.onStop(),this.active=!1)}}function Vu(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let yn=!0;const zd=[];function Us(){zd.push(yn),yn=!1}function $s(){const t=zd.pop();yn=t===void 0?!0:t}function dt(t,e,n){if(yn&&kt){let s=za.get(t);s||za.set(t,s=new Map);let i=s.get(n);i||s.set(n,i=jc()),Kd(i)}}function Kd(t,e){let n=!1;ii<=Ka?qd(t)||(t.n|=In,n=!Hd(t)):n=!t.has(kt),n&&(t.add(kt),kt.deps.push(t))}function en(t,e,n,s,i,r){const o=za.get(t);if(!o)return;let c=[];if(e==="clear")c=[...o.values()];else if(n==="length"&&J(t)){const u=Number(s);o.forEach((h,f)=>{(f==="length"||f>=u)&&c.push(h)})}else switch(n!==void 0&&c.push(o.get(n)),e){case"add":J(t)?Vc(n)&&c.push(o.get("length")):(c.push(o.get(zn)),ys(t)&&c.push(o.get(Wa)));break;case"delete":J(t)||(c.push(o.get(zn)),ys(t)&&c.push(o.get(Wa)));break;case"set":ys(t)&&c.push(o.get(zn));break}if(c.length===1)c[0]&&Ga(c[0]);else{const u=[];for(const h of c)h&&u.push(...h);Ga(jc(u))}}function Ga(t,e){const n=J(t)?t:[...t];for(const s of n)s.computed&&ju(s);for(const s of n)s.computed||ju(s)}function ju(t,e){(t!==kt||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const Fv=Lc("__proto__,__v_isRef,__isVue"),Wd=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($c)),Uv=qc(),$v=qc(!1,!0),Vv=qc(!0),Hu=jv();function jv(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const s=he(this);for(let r=0,o=this.length;r<o;r++)dt(s,"get",r+"");const i=s[e](...n);return i===-1||i===!1?s[e](...n.map(he)):i}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){Us();const s=he(this)[e].apply(this,n);return $s(),s}}),t}function Hv(t){const e=he(this);return dt(e,"has",t),e.hasOwnProperty(t)}function qc(t=!1,e=!1){return function(s,i,r){if(i==="__v_isReactive")return!t;if(i==="__v_isReadonly")return t;if(i==="__v_isShallow")return e;if(i==="__v_raw"&&r===(t?e?rb:Jd:e?Xd:Qd).get(s))return s;const o=J(s);if(!t){if(o&&ce(Hu,i))return Reflect.get(Hu,i,r);if(i==="hasOwnProperty")return Hv}const c=Reflect.get(s,i,r);return($c(i)?Wd.has(i):Fv(i))||(t||dt(s,"get",i),e)?c:Ye(c)?o&&Vc(i)?c:c.value:Ie(c)?t?Zd(c):Wc(c):c}}const qv=Gd(),zv=Gd(!0);function Gd(t=!1){return function(n,s,i,r){let o=n[s];if(As(o)&&Ye(o)&&!Ye(i))return!1;if(!t&&(!jr(i)&&!As(i)&&(o=he(o),i=he(i)),!J(n)&&Ye(o)&&!Ye(i)))return o.value=i,!0;const c=J(n)&&Vc(s)?Number(s)<n.length:ce(n,s),u=Reflect.set(n,s,i,r);return n===he(r)&&(c?bi(i,o)&&en(n,"set",s,i):en(n,"add",s,i)),u}}function Kv(t,e){const n=ce(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&n&&en(t,"delete",e,void 0),s}function Wv(t,e){const n=Reflect.has(t,e);return(!$c(e)||!Wd.has(e))&&dt(t,"has",e),n}function Gv(t){return dt(t,"iterate",J(t)?"length":zn),Reflect.ownKeys(t)}const Yd={get:Uv,set:qv,deleteProperty:Kv,has:Wv,ownKeys:Gv},Yv={get:Vv,set(t,e){return!0},deleteProperty(t,e){return!0}},Qv=Je({},Yd,{get:$v,set:zv}),zc=t=>t,Eo=t=>Reflect.getPrototypeOf(t);function pr(t,e,n=!1,s=!1){t=t.__v_raw;const i=he(t),r=he(e);n||(e!==r&&dt(i,"get",e),dt(i,"get",r));const{has:o}=Eo(i),c=s?zc:n?Yc:Ei;if(o.call(i,e))return c(t.get(e));if(o.call(i,r))return c(t.get(r));t!==i&&t.get(e)}function gr(t,e=!1){const n=this.__v_raw,s=he(n),i=he(t);return e||(t!==i&&dt(s,"has",t),dt(s,"has",i)),t===i?n.has(t):n.has(t)||n.has(i)}function mr(t,e=!1){return t=t.__v_raw,!e&&dt(he(t),"iterate",zn),Reflect.get(t,"size",t)}function qu(t){t=he(t);const e=he(this);return Eo(e).has.call(e,t)||(e.add(t),en(e,"add",t,t)),this}function zu(t,e){e=he(e);const n=he(this),{has:s,get:i}=Eo(n);let r=s.call(n,t);r||(t=he(t),r=s.call(n,t));const o=i.call(n,t);return n.set(t,e),r?bi(e,o)&&en(n,"set",t,e):en(n,"add",t,e),this}function Ku(t){const e=he(this),{has:n,get:s}=Eo(e);let i=n.call(e,t);i||(t=he(t),i=n.call(e,t)),s&&s.call(e,t);const r=e.delete(t);return i&&en(e,"delete",t,void 0),r}function Wu(){const t=he(this),e=t.size!==0,n=t.clear();return e&&en(t,"clear",void 0,void 0),n}function yr(t,e){return function(s,i){const r=this,o=r.__v_raw,c=he(o),u=e?zc:t?Yc:Ei;return!t&&dt(c,"iterate",zn),o.forEach((h,f)=>s.call(i,u(h),u(f),r))}}function wr(t,e,n){return function(...s){const i=this.__v_raw,r=he(i),o=ys(r),c=t==="entries"||t===Symbol.iterator&&o,u=t==="keys"&&o,h=i[t](...s),f=n?zc:e?Yc:Ei;return!e&&dt(r,"iterate",u?Wa:zn),{next(){const{value:m,done:w}=h.next();return w?{value:m,done:w}:{value:c?[f(m[0]),f(m[1])]:f(m),done:w}},[Symbol.iterator](){return this}}}}function ln(t){return function(...e){return t==="delete"?!1:this}}function Xv(){const t={get(r){return pr(this,r)},get size(){return mr(this)},has:gr,add:qu,set:zu,delete:Ku,clear:Wu,forEach:yr(!1,!1)},e={get(r){return pr(this,r,!1,!0)},get size(){return mr(this)},has:gr,add:qu,set:zu,delete:Ku,clear:Wu,forEach:yr(!1,!0)},n={get(r){return pr(this,r,!0)},get size(){return mr(this,!0)},has(r){return gr.call(this,r,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:yr(!0,!1)},s={get(r){return pr(this,r,!0,!0)},get size(){return mr(this,!0)},has(r){return gr.call(this,r,!0)},add:ln("add"),set:ln("set"),delete:ln("delete"),clear:ln("clear"),forEach:yr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=wr(r,!1,!1),n[r]=wr(r,!0,!1),e[r]=wr(r,!1,!0),s[r]=wr(r,!0,!0)}),[t,n,e,s]}const[Jv,Zv,eb,tb]=Xv();function Kc(t,e){const n=e?t?tb:eb:t?Zv:Jv;return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const nb={get:Kc(!1,!1)},sb={get:Kc(!1,!0)},ib={get:Kc(!0,!1)},Qd=new WeakMap,Xd=new WeakMap,Jd=new WeakMap,rb=new WeakMap;function ob(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ab(t){return t.__v_skip||!Object.isExtensible(t)?0:ob(xv(t))}function Wc(t){return As(t)?t:Gc(t,!1,Yd,nb,Qd)}function cb(t){return Gc(t,!1,Qv,sb,Xd)}function Zd(t){return Gc(t,!0,Yv,ib,Jd)}function Gc(t,e,n,s,i){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=ab(t);if(o===0)return t;const c=new Proxy(t,o===2?s:n);return i.set(t,c),c}function ws(t){return As(t)?ws(t.__v_raw):!!(t&&t.__v_isReactive)}function As(t){return!!(t&&t.__v_isReadonly)}function jr(t){return!!(t&&t.__v_isShallow)}function ef(t){return ws(t)||As(t)}function he(t){const e=t&&t.__v_raw;return e?he(e):t}function tf(t){return Vr(t,"__v_skip",!0),t}const Ei=t=>Ie(t)?Wc(t):t,Yc=t=>Ie(t)?Zd(t):t;function nf(t){yn&&kt&&(t=he(t),Kd(t.dep||(t.dep=jc())))}function sf(t,e){t=he(t);const n=t.dep;n&&Ga(n)}function Ye(t){return!!(t&&t.__v_isRef===!0)}function li(t){return lb(t,!1)}function lb(t,e){return Ye(t)?t:new ub(t,e)}class ub{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:he(e),this._value=n?e:Ei(e)}get value(){return nf(this),this._value}set value(e){const n=this.__v_isShallow||jr(e)||As(e);e=n?e:he(e),bi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:Ei(e),sf(this))}}function hb(t){return Ye(t)?t.value:t}const db={get:(t,e,n)=>hb(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Ye(i)&&!Ye(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function rf(t){return ws(t)?t:new Proxy(t,db)}var of;class fb{constructor(e,n,s,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[of]=!1,this._dirty=!0,this.effect=new Hc(e,()=>{this._dirty||(this._dirty=!0,sf(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=s}get value(){const e=he(this);return nf(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}of="__v_isReadonly";function pb(t,e,n=!1){let s,i;const r=ne(t);return r?(s=t,i=Dt):(s=t.get,i=t.set),new fb(s,i,r||!i,n)}function wn(t,e,n,s){let i;try{i=s?t(...s):t()}catch(r){_o(r,e,n)}return i}function Ct(t,e,n,s){if(ne(t)){const r=wn(t,e,n,s);return r&&Ud(r)&&r.catch(o=>{_o(o,e,n)}),r}const i=[];for(let r=0;r<t.length;r++)i.push(Ct(t[r],e,n,s));return i}function _o(t,e,n,s=!0){const i=e?e.vnode:null;if(e){let r=e.parent;const o=e.proxy,c=n;for(;r;){const h=r.ec;if(h){for(let f=0;f<h.length;f++)if(h[f](t,o,c)===!1)return}r=r.parent}const u=e.appContext.config.errorHandler;if(u){wn(u,null,10,[t,o,c]);return}}gb(t,n,i,s)}function gb(t,e,n,s=!0){console.error(t)}let _i=!1,Ya=!1;const Ke=[];let Ut=0;const vs=[];let Wt=null,Bn=0;const af=Promise.resolve();let Qc=null;function mb(t){const e=Qc||af;return t?e.then(this?t.bind(this):t):e}function yb(t){let e=Ut+1,n=Ke.length;for(;e<n;){const s=e+n>>>1;Ii(Ke[s])<t?e=s+1:n=s}return e}function Xc(t){(!Ke.length||!Ke.includes(t,_i&&t.allowRecurse?Ut+1:Ut))&&(t.id==null?Ke.push(t):Ke.splice(yb(t.id),0,t),cf())}function cf(){!_i&&!Ya&&(Ya=!0,Qc=af.then(uf))}function wb(t){const e=Ke.indexOf(t);e>Ut&&Ke.splice(e,1)}function vb(t){J(t)?vs.push(...t):(!Wt||!Wt.includes(t,t.allowRecurse?Bn+1:Bn))&&vs.push(t),cf()}function Gu(t,e=_i?Ut+1:0){for(;e<Ke.length;e++){const n=Ke[e];n&&n.pre&&(Ke.splice(e,1),e--,n())}}function lf(t){if(vs.length){const e=[...new Set(vs)];if(vs.length=0,Wt){Wt.push(...e);return}for(Wt=e,Wt.sort((n,s)=>Ii(n)-Ii(s)),Bn=0;Bn<Wt.length;Bn++)Wt[Bn]();Wt=null,Bn=0}}const Ii=t=>t.id==null?1/0:t.id,bb=(t,e)=>{const n=Ii(t)-Ii(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function uf(t){Ya=!1,_i=!0,Ke.sort(bb);const e=Dt;try{for(Ut=0;Ut<Ke.length;Ut++){const n=Ke[Ut];n&&n.active!==!1&&wn(n,null,14)}}finally{Ut=0,Ke.length=0,lf(),_i=!1,Qc=null,(Ke.length||vs.length)&&uf()}}function Eb(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ye;let i=n;const r=e.startsWith("update:"),o=r&&e.slice(7);if(o&&o in s){const f=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:w}=s[f]||ye;w&&(i=n.map(_=>Oe(_)?_.trim():_)),m&&(i=n.map(qa))}let c,u=s[c=ya(e)]||s[c=ya(Cs(e))];!u&&r&&(u=s[c=ya(Fs(e))]),u&&Ct(u,t,6,i);const h=s[c+"Once"];if(h){if(!t.emitted)t.emitted={};else if(t.emitted[c])return;t.emitted[c]=!0,Ct(h,t,6,i)}}function hf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},c=!1;if(!ne(t)){const u=h=>{const f=hf(h,e,!0);f&&(c=!0,Je(o,f))};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}return!r&&!c?(Ie(t)&&s.set(t,null),null):(J(r)?r.forEach(u=>o[u]=null):Je(o,r),Ie(t)&&s.set(t,o),o)}function Io(t,e){return!t||!wo(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,Fs(e))||ce(t,e))}let Tt=null,df=null;function Hr(t){const e=Tt;return Tt=t,df=t&&t.type.__scopeId||null,e}function _b(t,e=Tt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&sh(-1);const r=Hr(e);let o;try{o=t(...i)}finally{Hr(r),s._d&&sh(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function wa(t){const{type:e,vnode:n,proxy:s,withProxy:i,props:r,propsOptions:[o],slots:c,attrs:u,emit:h,render:f,renderCache:m,data:w,setupState:_,ctx:N,inheritAttrs:A}=t;let F,H;const oe=Hr(t);try{if(n.shapeFlag&4){const se=i||s;F=Ft(f.call(se,se,m,r,_,w,N)),H=u}else{const se=e;F=Ft(se.length>1?se(r,{attrs:u,slots:c,emit:h}):se(r,null)),H=e.props?u:Ib(u)}}catch(se){di.length=0,_o(se,t,1),F=Jt(Nt)}let P=F;if(H&&A!==!1){const se=Object.keys(H),{shapeFlag:ee}=P;se.length&&ee&7&&(o&&se.some(Fc)&&(H=Tb(H,o)),P=Tn(P,H))}return n.dirs&&(P=Tn(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),F=P,Hr(oe),F}const Ib=t=>{let e;for(const n in t)(n==="class"||n==="style"||wo(n))&&((e||(e={}))[n]=t[n]);return e},Tb=(t,e)=>{const n={};for(const s in t)(!Fc(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Cb(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:c,patchFlag:u}=e,h=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&u>=0){if(u&1024)return!0;if(u&16)return s?Yu(s,o,h):!!o;if(u&8){const f=e.dynamicProps;for(let m=0;m<f.length;m++){const w=f[m];if(o[w]!==s[w]&&!Io(h,w))return!0}}}else return(i||c)&&(!c||!c.$stable)?!0:s===o?!1:s?o?Yu(s,o,h):!0:!!o;return!1}function Yu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!Io(n,r))return!0}return!1}function Ab({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const Sb=t=>t.__isSuspense;function kb(t,e){e&&e.pendingBranch?J(t)?e.effects.push(...t):e.effects.push(t):vb(t)}function ff(t,e){if(xe){let n=xe.provides;const s=xe.parent&&xe.parent.provides;s===n&&(n=xe.provides=Object.create(s)),n[t]=e}}function ui(t,e,n=!1){const s=xe||Tt;if(s){const i=s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides;if(i&&t in i)return i[t];if(arguments.length>1)return n&&ne(e)?e.call(s.proxy):e}}function xb(t,e){return Jc(t,null,e)}const vr={};function va(t,e,n){return Jc(t,e,n)}function Jc(t,e,{immediate:n,deep:s,flush:i,onTrack:r,onTrigger:o}=ye){const c=Mv()===(xe==null?void 0:xe.scope)?xe:null;let u,h=!1,f=!1;if(Ye(t)?(u=()=>t.value,h=jr(t)):ws(t)?(u=()=>t,s=!0):J(t)?(f=!0,h=t.some(P=>ws(P)||jr(P)),u=()=>t.map(P=>{if(Ye(P))return P.value;if(ws(P))return $n(P);if(ne(P))return wn(P,c,2)})):ne(t)?e?u=()=>wn(t,c,2):u=()=>{if(!(c&&c.isUnmounted))return m&&m(),Ct(t,c,3,[w])}:u=Dt,e&&s){const P=u;u=()=>$n(P())}let m,w=P=>{m=H.onStop=()=>{wn(P,c,4)}},_;if(Ci)if(w=Dt,e?n&&Ct(e,c,3,[u(),f?[]:void 0,w]):u(),i==="sync"){const P=k0();_=P.__watcherHandles||(P.__watcherHandles=[])}else return Dt;let N=f?new Array(t.length).fill(vr):vr;const A=()=>{if(H.active)if(e){const P=H.run();(s||h||(f?P.some((se,ee)=>bi(se,N[ee])):bi(P,N)))&&(m&&m(),Ct(e,c,3,[P,N===vr?void 0:f&&N[0]===vr?[]:N,w]),N=P)}else H.run()};A.allowRecurse=!!e;let F;i==="sync"?F=A:i==="post"?F=()=>ht(A,c&&c.suspense):(A.pre=!0,c&&(A.id=c.uid),F=()=>Xc(A));const H=new Hc(u,F);e?n?A():N=H.run():i==="post"?ht(H.run.bind(H),c&&c.suspense):H.run();const oe=()=>{H.stop(),c&&c.scope&&Uc(c.scope.effects,H)};return _&&_.push(oe),oe}function Rb(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?pf(s,t):()=>s[t]:t.bind(s,s);let r;ne(e)?r=e:(r=e.handler,n=e);const o=xe;Ss(this);const c=Jc(i,r.bind(s),n);return o?Ss(o):Kn(),c}function pf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}function $n(t,e){if(!Ie(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Ye(t))$n(t.value,e);else if(J(t))for(let n=0;n<t.length;n++)$n(t[n],e);else if(Fd(t)||ys(t))t.forEach(n=>{$n(n,e)});else if(Vd(t))for(const n in t)$n(t[n],e);return t}function Db(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return wf(()=>{t.isMounted=!0}),vf(()=>{t.isUnmounting=!0}),t}const Et=[Function,Array],Nb={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Et,onEnter:Et,onAfterEnter:Et,onEnterCancelled:Et,onBeforeLeave:Et,onLeave:Et,onAfterLeave:Et,onLeaveCancelled:Et,onBeforeAppear:Et,onAppear:Et,onAfterAppear:Et,onAppearCancelled:Et},setup(t,{slots:e}){const n=b0(),s=Db();let i;return()=>{const r=e.default&&mf(e.default(),!0);if(!r||!r.length)return;let o=r[0];if(r.length>1){for(const A of r)if(A.type!==Nt){o=A;break}}const c=he(t),{mode:u}=c;if(s.isLeaving)return ba(o);const h=Qu(o);if(!h)return ba(o);const f=Qa(h,c,s,n);Xa(h,f);const m=n.subTree,w=m&&Qu(m);let _=!1;const{getTransitionKey:N}=h.type;if(N){const A=N();i===void 0?i=A:A!==i&&(i=A,_=!0)}if(w&&w.type!==Nt&&(!Fn(h,w)||_)){const A=Qa(w,c,s,n);if(Xa(w,A),u==="out-in")return s.isLeaving=!0,A.afterLeave=()=>{s.isLeaving=!1,n.update.active!==!1&&n.update()},ba(o);u==="in-out"&&h.type!==Nt&&(A.delayLeave=(F,H,oe)=>{const P=gf(s,w);P[String(w.key)]=w,F._leaveCb=()=>{H(),F._leaveCb=void 0,delete f.delayedLeave},f.delayedLeave=oe})}return o}}},Pb=Nb;function gf(t,e){const{leavingVNodes:n}=t;let s=n.get(e.type);return s||(s=Object.create(null),n.set(e.type,s)),s}function Qa(t,e,n,s){const{appear:i,mode:r,persisted:o=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:f,onBeforeLeave:m,onLeave:w,onAfterLeave:_,onLeaveCancelled:N,onBeforeAppear:A,onAppear:F,onAfterAppear:H,onAppearCancelled:oe}=e,P=String(t.key),se=gf(n,t),ee=(Q,me)=>{Q&&Ct(Q,s,9,me)},G=(Q,me)=>{const fe=me[1];ee(Q,me),J(Q)?Q.every(je=>je.length<=1)&&fe():Q.length<=1&&fe()},De={mode:r,persisted:o,beforeEnter(Q){let me=c;if(!n.isMounted)if(i)me=A||c;else return;Q._leaveCb&&Q._leaveCb(!0);const fe=se[P];fe&&Fn(t,fe)&&fe.el._leaveCb&&fe.el._leaveCb(),ee(me,[Q])},enter(Q){let me=u,fe=h,je=f;if(!n.isMounted)if(i)me=F||u,fe=H||h,je=oe||f;else return;let ot=!1;const at=Q._enterCb=Fe=>{ot||(ot=!0,Fe?ee(je,[Q]):ee(fe,[Q]),De.delayedLeave&&De.delayedLeave(),Q._enterCb=void 0)};me?G(me,[Q,at]):at()},leave(Q,me){const fe=String(t.key);if(Q._enterCb&&Q._enterCb(!0),n.isUnmounting)return me();ee(m,[Q]);let je=!1;const ot=Q._leaveCb=at=>{je||(je=!0,me(),at?ee(N,[Q]):ee(_,[Q]),Q._leaveCb=void 0,se[fe]===t&&delete se[fe])};se[fe]=t,w?G(w,[Q,ot]):ot()},clone(Q){return Qa(Q,e,n,s)}};return De}function ba(t){if(To(t))return t=Tn(t),t.children=null,t}function Qu(t){return To(t)?t.children?t.children[0]:void 0:t}function Xa(t,e){t.shapeFlag&6&&t.component?Xa(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function mf(t,e=!1,n){let s=[],i=0;for(let r=0;r<t.length;r++){let o=t[r];const c=n==null?o.key:String(n)+String(o.key!=null?o.key:r);o.type===_t?(o.patchFlag&128&&i++,s=s.concat(mf(o.children,e,c))):(e||o.type!==Nt)&&s.push(c!=null?Tn(o,{key:c}):o)}if(i>1)for(let r=0;r<s.length;r++)s[r].patchFlag=-2;return s}const Dr=t=>!!t.type.__asyncLoader,To=t=>t.type.__isKeepAlive;function Ob(t,e){yf(t,"a",e)}function Mb(t,e){yf(t,"da",e)}function yf(t,e,n=xe){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Co(e,s,n),n){let i=n.parent;for(;i&&i.parent;)To(i.parent.vnode)&&Lb(s,e,n,i),i=i.parent}}function Lb(t,e,n,s){const i=Co(e,t,s,!0);bf(()=>{Uc(s[e],i)},n)}function Co(t,e,n=xe,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;Us(),Ss(n);const c=Ct(e,n,t,o);return Kn(),$s(),c});return s?i.unshift(r):i.push(r),r}}const an=t=>(e,n=xe)=>(!Ci||t==="sp")&&Co(t,(...s)=>e(...s),n),Bb=an("bm"),wf=an("m"),Fb=an("bu"),Ub=an("u"),vf=an("bum"),bf=an("um"),$b=an("sp"),Vb=an("rtg"),jb=an("rtc");function Hb(t,e=xe){Co("ec",t,e)}function qb(t,e){const n=Tt;if(n===null)return t;const s=ko(n)||n.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[o,c,u,h=ye]=e[r];o&&(ne(o)&&(o={mounted:o,updated:o}),o.deep&&$n(c),i.push({dir:o,instance:s,value:c,oldValue:void 0,arg:u,modifiers:h}))}return t}function Pn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const c=i[o];r&&(c.oldValue=r[o].value);let u=c.dir[s];u&&(Us(),Ct(u,n,8,[t.el,c,t,e]),$s())}}const zb=Symbol();function Kb(t,e,n,s){let i;const r=n&&n[s];if(J(t)||Oe(t)){i=new Array(t.length);for(let o=0,c=t.length;o<c;o++)i[o]=e(t[o],o,void 0,r&&r[o])}else if(typeof t=="number"){i=new Array(t);for(let o=0;o<t;o++)i[o]=e(o+1,o,void 0,r&&r[o])}else if(Ie(t))if(t[Symbol.iterator])i=Array.from(t,(o,c)=>e(o,c,void 0,r&&r[c]));else{const o=Object.keys(t);i=new Array(o.length);for(let c=0,u=o.length;c<u;c++){const h=o[c];i[c]=e(t[h],h,c,r&&r[c])}}else i=[];return n&&(n[s]=i),i}const Ja=t=>t?Df(t)?ko(t)||t.proxy:Ja(t.parent):null,hi=Je(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Ja(t.parent),$root:t=>Ja(t.root),$emit:t=>t.emit,$options:t=>Zc(t),$forceUpdate:t=>t.f||(t.f=()=>Xc(t.update)),$nextTick:t=>t.n||(t.n=mb.bind(t.proxy)),$watch:t=>Rb.bind(t)}),Ea=(t,e)=>t!==ye&&!t.__isScriptSetup&&ce(t,e),Wb={get({_:t},e){const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:c,appContext:u}=t;let h;if(e[0]!=="$"){const _=o[e];if(_!==void 0)switch(_){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Ea(s,e))return o[e]=1,s[e];if(i!==ye&&ce(i,e))return o[e]=2,i[e];if((h=t.propsOptions[0])&&ce(h,e))return o[e]=3,r[e];if(n!==ye&&ce(n,e))return o[e]=4,n[e];Za&&(o[e]=0)}}const f=hi[e];let m,w;if(f)return e==="$attrs"&&dt(t,"get",e),f(t);if((m=c.__cssModules)&&(m=m[e]))return m;if(n!==ye&&ce(n,e))return o[e]=4,n[e];if(w=u.config.globalProperties,ce(w,e))return w[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Ea(i,e)?(i[e]=n,!0):s!==ye&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let c;return!!n[o]||t!==ye&&ce(t,o)||Ea(e,o)||(c=r[0])&&ce(c,o)||ce(s,o)||ce(hi,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Za=!0;function Gb(t){const e=Zc(t),n=t.proxy,s=t.ctx;Za=!1,e.beforeCreate&&Xu(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:c,provide:u,inject:h,created:f,beforeMount:m,mounted:w,beforeUpdate:_,updated:N,activated:A,deactivated:F,beforeDestroy:H,beforeUnmount:oe,destroyed:P,unmounted:se,render:ee,renderTracked:G,renderTriggered:De,errorCaptured:Q,serverPrefetch:me,expose:fe,inheritAttrs:je,components:ot,directives:at,filters:Fe}=e;if(h&&Yb(h,s,null,t.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const ae=o[Ee];ne(ae)&&(s[Ee]=ae.bind(n))}if(i){const Ee=i.call(n,n);Ie(Ee)&&(t.data=Wc(Ee))}if(Za=!0,r)for(const Ee in r){const ae=r[Ee],ft=ne(ae)?ae.bind(n,n):ne(ae.get)?ae.get.bind(n,n):Dt,Rn=!ne(ae)&&ne(ae.set)?ae.set.bind(n):Dt,vt=A0({get:ft,set:Rn});Object.defineProperty(s,Ee,{enumerable:!0,configurable:!0,get:()=>vt.value,set:ct=>vt.value=ct})}if(c)for(const Ee in c)Ef(c[Ee],s,n,Ee);if(u){const Ee=ne(u)?u.call(n):u;Reflect.ownKeys(Ee).forEach(ae=>{ff(ae,Ee[ae])})}f&&Xu(f,t,"c");function be(Ee,ae){J(ae)?ae.forEach(ft=>Ee(ft.bind(n))):ae&&Ee(ae.bind(n))}if(be(Bb,m),be(wf,w),be(Fb,_),be(Ub,N),be(Ob,A),be(Mb,F),be(Hb,Q),be(jb,G),be(Vb,De),be(vf,oe),be(bf,se),be($b,me),J(fe))if(fe.length){const Ee=t.exposed||(t.exposed={});fe.forEach(ae=>{Object.defineProperty(Ee,ae,{get:()=>n[ae],set:ft=>n[ae]=ft})})}else t.exposed||(t.exposed={});ee&&t.render===Dt&&(t.render=ee),je!=null&&(t.inheritAttrs=je),ot&&(t.components=ot),at&&(t.directives=at)}function Yb(t,e,n=Dt,s=!1){J(t)&&(t=ec(t));for(const i in t){const r=t[i];let o;Ie(r)?"default"in r?o=ui(r.from||i,r.default,!0):o=ui(r.from||i):o=ui(r),Ye(o)&&s?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>o.value,set:c=>o.value=c}):e[i]=o}}function Xu(t,e,n){Ct(J(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Ef(t,e,n,s){const i=s.includes(".")?pf(n,s):()=>n[s];if(Oe(t)){const r=e[t];ne(r)&&va(i,r)}else if(ne(t))va(i,t.bind(n));else if(Ie(t))if(J(t))t.forEach(r=>Ef(r,e,n,s));else{const r=ne(t.handler)?t.handler.bind(n):e[t.handler];ne(r)&&va(i,r,t)}}function Zc(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,c=r.get(e);let u;return c?u=c:!i.length&&!n&&!s?u=e:(u={},i.length&&i.forEach(h=>qr(u,h,o,!0)),qr(u,e,o)),Ie(e)&&r.set(e,u),u}function qr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&qr(t,r,n,!0),i&&i.forEach(o=>qr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const c=Qb[o]||n&&n[o];t[o]=c?c(t[o],e[o]):e[o]}return t}const Qb={data:Ju,props:Mn,emits:Mn,methods:Mn,computed:Mn,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:Mn,directives:Mn,watch:Jb,provide:Ju,inject:Xb};function Ju(t,e){return e?t?function(){return Je(ne(t)?t.call(this,this):t,ne(e)?e.call(this,this):e)}:e:t}function Xb(t,e){return Mn(ec(t),ec(e))}function ec(t){if(J(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function st(t,e){return t?[...new Set([].concat(t,e))]:e}function Mn(t,e){return t?Je(Je(Object.create(null),t),e):e}function Jb(t,e){if(!t)return e;if(!e)return t;const n=Je(Object.create(null),t);for(const s in e)n[s]=st(t[s],e[s]);return n}function Zb(t,e,n,s=!1){const i={},r={};Vr(r,So,1),t.propsDefaults=Object.create(null),_f(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:cb(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function e0(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,c=he(i),[u]=t.propsOptions;let h=!1;if((s||o>0)&&!(o&16)){if(o&8){const f=t.vnode.dynamicProps;for(let m=0;m<f.length;m++){let w=f[m];if(Io(t.emitsOptions,w))continue;const _=e[w];if(u)if(ce(r,w))_!==r[w]&&(r[w]=_,h=!0);else{const N=Cs(w);i[N]=tc(u,c,N,_,t,!1)}else _!==r[w]&&(r[w]=_,h=!0)}}}else{_f(t,e,i,r)&&(h=!0);let f;for(const m in c)(!e||!ce(e,m)&&((f=Fs(m))===m||!ce(e,f)))&&(u?n&&(n[m]!==void 0||n[f]!==void 0)&&(i[m]=tc(u,c,m,void 0,t,!0)):delete i[m]);if(r!==c)for(const m in r)(!e||!ce(e,m))&&(delete r[m],h=!0)}h&&en(t,"set","$attrs")}function _f(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,c;if(e)for(let u in e){if(xr(u))continue;const h=e[u];let f;i&&ce(i,f=Cs(u))?!r||!r.includes(f)?n[f]=h:(c||(c={}))[f]=h:Io(t.emitsOptions,u)||(!(u in s)||h!==s[u])&&(s[u]=h,o=!0)}if(r){const u=he(n),h=c||ye;for(let f=0;f<r.length;f++){const m=r[f];n[m]=tc(i,u,m,h[m],t,!ce(h,m))}}return o}function tc(t,e,n,s,i,r){const o=t[n];if(o!=null){const c=ce(o,"default");if(c&&s===void 0){const u=o.default;if(o.type!==Function&&ne(u)){const{propsDefaults:h}=i;n in h?s=h[n]:(Ss(i),s=h[n]=u.call(null,e),Kn())}else s=u}o[0]&&(r&&!c?s=!1:o[1]&&(s===""||s===Fs(n))&&(s=!0))}return s}function If(t,e,n=!1){const s=e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},c=[];let u=!1;if(!ne(t)){const f=m=>{u=!0;const[w,_]=If(m,e,!0);Je(o,w),_&&c.push(..._)};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}if(!r&&!u)return Ie(t)&&s.set(t,ms),ms;if(J(r))for(let f=0;f<r.length;f++){const m=Cs(r[f]);Zu(m)&&(o[m]=ye)}else if(r)for(const f in r){const m=Cs(f);if(Zu(m)){const w=r[f],_=o[m]=J(w)||ne(w)?{type:w}:Object.assign({},w);if(_){const N=nh(Boolean,_.type),A=nh(String,_.type);_[0]=N>-1,_[1]=A<0||N<A,(N>-1||ce(_,"default"))&&c.push(m)}}}const h=[o,c];return Ie(t)&&s.set(t,h),h}function Zu(t){return t[0]!=="$"}function eh(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function th(t,e){return eh(t)===eh(e)}function nh(t,e){return J(e)?e.findIndex(n=>th(n,t)):ne(e)&&th(e,t)?0:-1}const Tf=t=>t[0]==="_"||t==="$stable",el=t=>J(t)?t.map(Ft):[Ft(t)],t0=(t,e,n)=>{if(e._n)return e;const s=_b((...i)=>el(e(...i)),n);return s._c=!1,s},Cf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Tf(i))continue;const r=t[i];if(ne(r))e[i]=t0(i,r,s);else if(r!=null){const o=el(r);e[i]=()=>o}}},Af=(t,e)=>{const n=el(e);t.slots.default=()=>n},n0=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=he(e),Vr(e,"_",n)):Cf(e,t.slots={})}else t.slots={},e&&Af(t,e);Vr(t.slots,So,1)},s0=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ye;if(s.shapeFlag&32){const c=e._;c?n&&c===1?r=!1:(Je(i,e),!n&&c===1&&delete i._):(r=!e.$stable,Cf(e,i)),o=e}else e&&(Af(t,e),o={default:1});if(r)for(const c in i)!Tf(c)&&!(c in o)&&delete i[c]};function Sf(){return{app:null,config:{isNativeTag:Av,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let i0=0;function r0(t,e){return function(s,i=null){ne(s)||(s=Object.assign({},s)),i!=null&&!Ie(i)&&(i=null);const r=Sf(),o=new Set;let c=!1;const u=r.app={_uid:i0++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:x0,get config(){return r.config},set config(h){},use(h,...f){return o.has(h)||(h&&ne(h.install)?(o.add(h),h.install(u,...f)):ne(h)&&(o.add(h),h(u,...f))),u},mixin(h){return r.mixins.includes(h)||r.mixins.push(h),u},component(h,f){return f?(r.components[h]=f,u):r.components[h]},directive(h,f){return f?(r.directives[h]=f,u):r.directives[h]},mount(h,f,m){if(!c){const w=Jt(s,i);return w.appContext=r,f&&e?e(w,h):t(w,h,m),c=!0,u._container=h,h.__vue_app__=u,ko(w.component)||w.component.proxy}},unmount(){c&&(t(null,u._container),delete u._container.__vue_app__)},provide(h,f){return r.provides[h]=f,u}};return u}}function nc(t,e,n,s,i=!1){if(J(t)){t.forEach((w,_)=>nc(w,e&&(J(e)?e[_]:e),n,s,i));return}if(Dr(s)&&!i)return;const r=s.shapeFlag&4?ko(s.component)||s.component.proxy:s.el,o=i?null:r,{i:c,r:u}=t,h=e&&e.r,f=c.refs===ye?c.refs={}:c.refs,m=c.setupState;if(h!=null&&h!==u&&(Oe(h)?(f[h]=null,ce(m,h)&&(m[h]=null)):Ye(h)&&(h.value=null)),ne(u))wn(u,c,12,[o,f]);else{const w=Oe(u),_=Ye(u);if(w||_){const N=()=>{if(t.f){const A=w?ce(m,u)?m[u]:f[u]:u.value;i?J(A)&&Uc(A,r):J(A)?A.includes(r)||A.push(r):w?(f[u]=[r],ce(m,u)&&(m[u]=f[u])):(u.value=[r],t.k&&(f[t.k]=u.value))}else w?(f[u]=o,ce(m,u)&&(m[u]=o)):_&&(u.value=o,t.k&&(f[t.k]=o))};o?(N.id=-1,ht(N,n)):N()}}}const ht=kb;function o0(t){return a0(t)}function a0(t,e){const n=Nv();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:c,createComment:u,setText:h,setElementText:f,parentNode:m,nextSibling:w,setScopeId:_=Dt,insertStaticContent:N}=t,A=(g,y,E,C=null,v=null,k=null,D=!1,x=null,S=!!y.dynamicChildren)=>{if(g===y)return;g&&!Fn(g,y)&&(C=os(g),ct(g,v,k,!0),g=null),y.patchFlag===-2&&(S=!1,y.dynamicChildren=null);const{type:I,ref:$,shapeFlag:M}=y;switch(I){case Ao:F(g,y,E,C);break;case Nt:H(g,y,E,C);break;case _a:g==null&&oe(y,E,C,D);break;case _t:ot(g,y,E,C,v,k,D,x,S);break;default:M&1?ee(g,y,E,C,v,k,D,x,S):M&6?at(g,y,E,C,v,k,D,x,S):(M&64||M&128)&&I.process(g,y,E,C,v,k,D,x,S,Ae)}$!=null&&v&&nc($,g&&g.ref,k,y||g,!y)},F=(g,y,E,C)=>{if(g==null)s(y.el=c(y.children),E,C);else{const v=y.el=g.el;y.children!==g.children&&h(v,y.children)}},H=(g,y,E,C)=>{g==null?s(y.el=u(y.children||""),E,C):y.el=g.el},oe=(g,y,E,C)=>{[g.el,g.anchor]=N(g.children,y,E,C,g.el,g.anchor)},P=({el:g,anchor:y},E,C)=>{let v;for(;g&&g!==y;)v=w(g),s(g,E,C),g=v;s(y,E,C)},se=({el:g,anchor:y})=>{let E;for(;g&&g!==y;)E=w(g),i(g),g=E;i(y)},ee=(g,y,E,C,v,k,D,x,S)=>{D=D||y.type==="svg",g==null?G(y,E,C,v,k,D,x,S):me(g,y,v,k,D,x,S)},G=(g,y,E,C,v,k,D,x)=>{let S,I;const{type:$,props:M,shapeFlag:O,transition:q,dirs:te}=g;if(S=g.el=o(g.type,k,M&&M.is,M),O&8?f(S,g.children):O&16&&Q(g.children,S,null,C,v,k&&$!=="foreignObject",D,x),te&&Pn(g,null,C,"created"),De(S,g,g.scopeId,D,C),M){for(const le in M)le!=="value"&&!xr(le)&&r(S,le,null,M[le],k,g.children,C,v,lt);"value"in M&&r(S,"value",null,M.value),(I=M.onVnodeBeforeMount)&&Bt(I,C,g)}te&&Pn(g,null,C,"beforeMount");const pe=(!v||v&&!v.pendingBranch)&&q&&!q.persisted;pe&&q.beforeEnter(S),s(S,y,E),((I=M&&M.onVnodeMounted)||pe||te)&&ht(()=>{I&&Bt(I,C,g),pe&&q.enter(S),te&&Pn(g,null,C,"mounted")},v)},De=(g,y,E,C,v)=>{if(E&&_(g,E),C)for(let k=0;k<C.length;k++)_(g,C[k]);if(v){let k=v.subTree;if(y===k){const D=v.vnode;De(g,D,D.scopeId,D.slotScopeIds,v.parent)}}},Q=(g,y,E,C,v,k,D,x,S=0)=>{for(let I=S;I<g.length;I++){const $=g[I]=x?dn(g[I]):Ft(g[I]);A(null,$,y,E,C,v,k,D,x)}},me=(g,y,E,C,v,k,D)=>{const x=y.el=g.el;let{patchFlag:S,dynamicChildren:I,dirs:$}=y;S|=g.patchFlag&16;const M=g.props||ye,O=y.props||ye;let q;E&&On(E,!1),(q=O.onVnodeBeforeUpdate)&&Bt(q,E,y,g),$&&Pn(y,g,E,"beforeUpdate"),E&&On(E,!0);const te=v&&y.type!=="foreignObject";if(I?fe(g.dynamicChildren,I,x,E,C,te,k):D||ae(g,y,x,null,E,C,te,k,!1),S>0){if(S&16)je(x,y,M,O,E,C,v);else if(S&2&&M.class!==O.class&&r(x,"class",null,O.class,v),S&4&&r(x,"style",M.style,O.style,v),S&8){const pe=y.dynamicProps;for(let le=0;le<pe.length;le++){const Te=pe[le],gt=M[Te],Y=O[Te];(Y!==gt||Te==="value")&&r(x,Te,gt,Y,v,g.children,E,C,lt)}}S&1&&g.children!==y.children&&f(x,y.children)}else!D&&I==null&&je(x,y,M,O,E,C,v);((q=O.onVnodeUpdated)||$)&&ht(()=>{q&&Bt(q,E,y,g),$&&Pn(y,g,E,"updated")},C)},fe=(g,y,E,C,v,k,D)=>{for(let x=0;x<y.length;x++){const S=g[x],I=y[x],$=S.el&&(S.type===_t||!Fn(S,I)||S.shapeFlag&70)?m(S.el):E;A(S,I,$,null,C,v,k,D,!0)}},je=(g,y,E,C,v,k,D)=>{if(E!==C){if(E!==ye)for(const x in E)!xr(x)&&!(x in C)&&r(g,x,E[x],null,D,y.children,v,k,lt);for(const x in C){if(xr(x))continue;const S=C[x],I=E[x];S!==I&&x!=="value"&&r(g,x,I,S,D,y.children,v,k,lt)}"value"in C&&r(g,"value",E.value,C.value)}},ot=(g,y,E,C,v,k,D,x,S)=>{const I=y.el=g?g.el:c(""),$=y.anchor=g?g.anchor:c("");let{patchFlag:M,dynamicChildren:O,slotScopeIds:q}=y;q&&(x=x?x.concat(q):q),g==null?(s(I,E,C),s($,E,C),Q(y.children,E,$,v,k,D,x,S)):M>0&&M&64&&O&&g.dynamicChildren?(fe(g.dynamicChildren,O,E,v,k,D,x),(y.key!=null||v&&y===v.subTree)&&kf(g,y,!0)):ae(g,y,E,$,v,k,D,x,S)},at=(g,y,E,C,v,k,D,x,S)=>{y.slotScopeIds=x,g==null?y.shapeFlag&512?v.ctx.activate(y,E,C,D,S):Fe(y,E,C,v,k,D,S):Ot(g,y,S)},Fe=(g,y,E,C,v,k,D)=>{const x=g.component=v0(g,C,v);if(To(g)&&(x.ctx.renderer=Ae),E0(x),x.asyncDep){if(v&&v.registerDep(x,be),!g.el){const S=x.subTree=Jt(Nt);H(null,S,y,E)}return}be(x,g,y,E,v,k,D)},Ot=(g,y,E)=>{const C=y.component=g.component;if(Cb(g,y,E))if(C.asyncDep&&!C.asyncResolved){Ee(C,y,E);return}else C.next=y,wb(C.update),C.update();else y.el=g.el,C.vnode=y},be=(g,y,E,C,v,k,D)=>{const x=()=>{if(g.isMounted){let{next:$,bu:M,u:O,parent:q,vnode:te}=g,pe=$,le;On(g,!1),$?($.el=te.el,Ee(g,$,D)):$=te,M&&Rr(M),(le=$.props&&$.props.onVnodeBeforeUpdate)&&Bt(le,q,$,te),On(g,!0);const Te=wa(g),gt=g.subTree;g.subTree=Te,A(gt,Te,m(gt.el),os(gt),g,v,k),$.el=Te.el,pe===null&&Ab(g,Te.el),O&&ht(O,v),(le=$.props&&$.props.onVnodeUpdated)&&ht(()=>Bt(le,q,$,te),v)}else{let $;const{el:M,props:O}=y,{bm:q,m:te,parent:pe}=g,le=Dr(y);if(On(g,!1),q&&Rr(q),!le&&($=O&&O.onVnodeBeforeMount)&&Bt($,pe,y),On(g,!0),M&&Xs){const Te=()=>{g.subTree=wa(g),Xs(M,g.subTree,g,v,null)};le?y.type.__asyncLoader().then(()=>!g.isUnmounted&&Te()):Te()}else{const Te=g.subTree=wa(g);A(null,Te,E,C,g,v,k),y.el=Te.el}if(te&&ht(te,v),!le&&($=O&&O.onVnodeMounted)){const Te=y;ht(()=>Bt($,pe,Te),v)}(y.shapeFlag&256||pe&&Dr(pe.vnode)&&pe.vnode.shapeFlag&256)&&g.a&&ht(g.a,v),g.isMounted=!0,y=E=C=null}},S=g.effect=new Hc(x,()=>Xc(I),g.scope),I=g.update=()=>S.run();I.id=g.uid,On(g,!0),I()},Ee=(g,y,E)=>{y.component=g;const C=g.vnode.props;g.vnode=y,g.next=null,e0(g,y.props,C,E),s0(g,y.children,E),Us(),Gu(),$s()},ae=(g,y,E,C,v,k,D,x,S=!1)=>{const I=g&&g.children,$=g?g.shapeFlag:0,M=y.children,{patchFlag:O,shapeFlag:q}=y;if(O>0){if(O&128){Rn(I,M,E,C,v,k,D,x,S);return}else if(O&256){ft(I,M,E,C,v,k,D,x,S);return}}q&8?($&16&&lt(I,v,k),M!==I&&f(E,M)):$&16?q&16?Rn(I,M,E,C,v,k,D,x,S):lt(I,v,k,!0):($&8&&f(E,""),q&16&&Q(M,E,C,v,k,D,x,S))},ft=(g,y,E,C,v,k,D,x,S)=>{g=g||ms,y=y||ms;const I=g.length,$=y.length,M=Math.min(I,$);let O;for(O=0;O<M;O++){const q=y[O]=S?dn(y[O]):Ft(y[O]);A(g[O],q,E,null,v,k,D,x,S)}I>$?lt(g,v,k,!0,!1,M):Q(y,E,C,v,k,D,x,S,M)},Rn=(g,y,E,C,v,k,D,x,S)=>{let I=0;const $=y.length;let M=g.length-1,O=$-1;for(;I<=M&&I<=O;){const q=g[I],te=y[I]=S?dn(y[I]):Ft(y[I]);if(Fn(q,te))A(q,te,E,null,v,k,D,x,S);else break;I++}for(;I<=M&&I<=O;){const q=g[M],te=y[O]=S?dn(y[O]):Ft(y[O]);if(Fn(q,te))A(q,te,E,null,v,k,D,x,S);else break;M--,O--}if(I>M){if(I<=O){const q=O+1,te=q<$?y[q].el:C;for(;I<=O;)A(null,y[I]=S?dn(y[I]):Ft(y[I]),E,te,v,k,D,x,S),I++}}else if(I>O)for(;I<=M;)ct(g[I],v,k,!0),I++;else{const q=I,te=I,pe=new Map;for(I=te;I<=O;I++){const tt=y[I]=S?dn(y[I]):Ft(y[I]);tt.key!=null&&pe.set(tt.key,I)}let le,Te=0;const gt=O-te+1;let Y=!1,lr=0;const Dn=new Array(gt);for(I=0;I<gt;I++)Dn[I]=0;for(I=q;I<=M;I++){const tt=g[I];if(Te>=gt){ct(tt,v,k,!0);continue}let bt;if(tt.key!=null)bt=pe.get(tt.key);else for(le=te;le<=O;le++)if(Dn[le-te]===0&&Fn(tt,y[le])){bt=le;break}bt===void 0?ct(tt,v,k,!0):(Dn[bt-te]=I+1,bt>=lr?lr=bt:Y=!0,A(tt,y[bt],E,null,v,k,D,x,S),Te++)}const Js=Y?c0(Dn):ms;for(le=Js.length-1,I=gt-1;I>=0;I--){const tt=te+I,bt=y[tt],Mt=tt+1<$?y[tt+1].el:C;Dn[I]===0?A(null,bt,E,Mt,v,k,D,x,S):Y&&(le<0||I!==Js[le]?vt(bt,E,Mt,2):le--)}}},vt=(g,y,E,C,v=null)=>{const{el:k,type:D,transition:x,children:S,shapeFlag:I}=g;if(I&6){vt(g.component.subTree,y,E,C);return}if(I&128){g.suspense.move(y,E,C);return}if(I&64){D.move(g,y,E,Ae);return}if(D===_t){s(k,y,E);for(let M=0;M<S.length;M++)vt(S[M],y,E,C);s(g.anchor,y,E);return}if(D===_a){P(g,y,E);return}if(C!==2&&I&1&&x)if(C===0)x.beforeEnter(k),s(k,y,E),ht(()=>x.enter(k),v);else{const{leave:M,delayLeave:O,afterLeave:q}=x,te=()=>s(k,y,E),pe=()=>{M(k,()=>{te(),q&&q()})};O?O(k,te,pe):pe()}else s(k,y,E)},ct=(g,y,E,C=!1,v=!1)=>{const{type:k,props:D,ref:x,children:S,dynamicChildren:I,shapeFlag:$,patchFlag:M,dirs:O}=g;if(x!=null&&nc(x,null,E,g,!0),$&256){y.ctx.deactivate(g);return}const q=$&1&&O,te=!Dr(g);let pe;if(te&&(pe=D&&D.onVnodeBeforeUnmount)&&Bt(pe,y,g),$&6)Qs(g.component,E,C);else{if($&128){g.suspense.unmount(E,C);return}q&&Pn(g,null,y,"beforeUnmount"),$&64?g.type.remove(g,y,E,v,Ae,C):I&&(k!==_t||M>0&&M&64)?lt(I,y,E,!1,!0):(k===_t&&M&384||!v&&$&16)&&lt(S,y,E),C&&cr(g)}(te&&(pe=D&&D.onVnodeUnmounted)||q)&&ht(()=>{pe&&Bt(pe,y,g),q&&Pn(g,null,y,"unmounted")},E)},cr=g=>{const{type:y,el:E,anchor:C,transition:v}=g;if(y===_t){Ys(E,C);return}if(y===_a){se(g);return}const k=()=>{i(E),v&&!v.persisted&&v.afterLeave&&v.afterLeave()};if(g.shapeFlag&1&&v&&!v.persisted){const{leave:D,delayLeave:x}=v,S=()=>D(E,k);x?x(g.el,k,S):S()}else k()},Ys=(g,y)=>{let E;for(;g!==y;)E=w(g),i(g),g=E;i(y)},Qs=(g,y,E)=>{const{bum:C,scope:v,update:k,subTree:D,um:x}=g;C&&Rr(C),v.stop(),k&&(k.active=!1,ct(D,g,y,E)),x&&ht(x,y),ht(()=>{g.isUnmounted=!0},y),y&&y.pendingBranch&&!y.isUnmounted&&g.asyncDep&&!g.asyncResolved&&g.suspenseId===y.pendingId&&(y.deps--,y.deps===0&&y.resolve())},lt=(g,y,E,C=!1,v=!1,k=0)=>{for(let D=k;D<g.length;D++)ct(g[D],y,E,C,v)},os=g=>g.shapeFlag&6?os(g.component.subTree):g.shapeFlag&128?g.suspense.next():w(g.anchor||g.el),Kt=(g,y,E)=>{g==null?y._vnode&&ct(y._vnode,null,null,!0):A(y._vnode||null,g,y,null,null,null,E),Gu(),lf(),y._vnode=g},Ae={p:A,um:ct,m:vt,r:cr,mt:Fe,mc:Q,pc:ae,pbc:fe,n:os,o:t};let pt,Xs;return e&&([pt,Xs]=e(Ae)),{render:Kt,hydrate:pt,createApp:r0(Kt,pt)}}function On({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function kf(t,e,n=!1){const s=t.children,i=e.children;if(J(s)&&J(i))for(let r=0;r<s.length;r++){const o=s[r];let c=i[r];c.shapeFlag&1&&!c.dynamicChildren&&((c.patchFlag<=0||c.patchFlag===32)&&(c=i[r]=dn(i[r]),c.el=o.el),n||kf(o,c)),c.type===Ao&&(c.el=o.el)}}function c0(t){const e=t.slice(),n=[0];let s,i,r,o,c;const u=t.length;for(s=0;s<u;s++){const h=t[s];if(h!==0){if(i=n[n.length-1],t[i]<h){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)c=r+o>>1,t[n[c]]<h?r=c+1:o=c;h<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}const l0=t=>t.__isTeleport,_t=Symbol(void 0),Ao=Symbol(void 0),Nt=Symbol(void 0),_a=Symbol(void 0),di=[];let xt=null;function St(t=!1){di.push(xt=t?null:[])}function u0(){di.pop(),xt=di[di.length-1]||null}let Ti=1;function sh(t){Ti+=t}function xf(t){return t.dynamicChildren=Ti>0?xt||ms:null,u0(),Ti>0&&xt&&xt.push(t),t}function mn(t,e,n,s,i,r){return xf(We(t,e,n,s,i,r,!0))}function sc(t,e,n,s,i){return xf(Jt(t,e,n,s,i,!0))}function h0(t){return t?t.__v_isVNode===!0:!1}function Fn(t,e){return t.type===e.type&&t.key===e.key}const So="__vInternal",Rf=({key:t})=>t??null,Nr=({ref:t,ref_key:e,ref_for:n})=>t!=null?Oe(t)||Ye(t)||ne(t)?{i:Tt,r:t,k:e,f:!!n}:t:null;function We(t,e=null,n=null,s=0,i=null,r=t===_t?0:1,o=!1,c=!1){const u={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Rf(e),ref:e&&Nr(e),scopeId:df,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Tt};return c?(tl(u,n),r&128&&t.normalize(u)):n&&(u.shapeFlag|=Oe(n)?8:16),Ti>0&&!o&&xt&&(u.patchFlag>0||r&6)&&u.patchFlag!==32&&xt.push(u),u}const Jt=d0;function d0(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===zb)&&(t=Nt),h0(t)){const c=Tn(t,e,!0);return n&&tl(c,n),Ti>0&&!r&&xt&&(c.shapeFlag&6?xt[xt.indexOf(t)]=c:xt.push(c)),c.patchFlag|=-2,c}if(C0(t)&&(t=t.__vccOpts),e){e=f0(e);let{class:c,style:u}=e;c&&!Oe(c)&&(e.class=yo(c)),Ie(u)&&(ef(u)&&!J(u)&&(u=Je({},u)),e.style=Bc(u))}const o=Oe(t)?1:Sb(t)?128:l0(t)?64:Ie(t)?4:ne(t)?2:0;return We(t,e,n,s,i,o,r,!0)}function f0(t){return t?ef(t)||So in t?Je({},t):t:null}function Tn(t,e,n=!1){const{props:s,ref:i,patchFlag:r,children:o}=t,c=e?m0(s||{},e):s;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&Rf(c),ref:e&&e.ref?n&&i?J(i)?i.concat(Nr(e)):[i,Nr(e)]:Nr(e):i,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==_t?r===-1?16:r|16:r,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Tn(t.ssContent),ssFallback:t.ssFallback&&Tn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function p0(t=" ",e=0){return Jt(Ao,null,t,e)}function g0(t="",e=!1){return e?(St(),sc(Nt,null,t)):Jt(Nt,null,t)}function Ft(t){return t==null||typeof t=="boolean"?Jt(Nt):J(t)?Jt(_t,null,t.slice()):typeof t=="object"?dn(t):Jt(Ao,null,String(t))}function dn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Tn(t)}function tl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(J(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),tl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!(So in e)?e._ctx=Tt:i===3&&Tt&&(Tt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ne(e)?(e={default:e,_ctx:Tt},n=32):(e=String(e),s&64?(n=16,e=[p0(e)]):n=8);t.children=e,t.shapeFlag|=n}function m0(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=yo([e.class,s.class]));else if(i==="style")e.style=Bc([e.style,s.style]);else if(wo(i)){const r=e[i],o=s[i];o&&r!==o&&!(J(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Bt(t,e,n,s=null){Ct(t,e,7,[n,s])}const y0=Sf();let w0=0;function v0(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||y0,r={uid:w0++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Pv(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:If(s,i),emitsOptions:hf(s,i),emit:null,emitted:null,propsDefaults:ye,inheritAttrs:s.inheritAttrs,ctx:ye,data:ye,props:ye,attrs:ye,slots:ye,refs:ye,setupState:ye,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=Eb.bind(null,r),t.ce&&t.ce(r),r}let xe=null;const b0=()=>xe||Tt,Ss=t=>{xe=t,t.scope.on()},Kn=()=>{xe&&xe.scope.off(),xe=null};function Df(t){return t.vnode.shapeFlag&4}let Ci=!1;function E0(t,e=!1){Ci=e;const{props:n,children:s}=t.vnode,i=Df(t);Zb(t,n,i,e),n0(t,s);const r=i?_0(t,e):void 0;return Ci=!1,r}function _0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=tf(new Proxy(t.ctx,Wb));const{setup:s}=n;if(s){const i=t.setupContext=s.length>1?T0(t):null;Ss(t),Us();const r=wn(s,t,0,[t.props,i]);if($s(),Kn(),Ud(r)){if(r.then(Kn,Kn),e)return r.then(o=>{ih(t,o,e)}).catch(o=>{_o(o,t,0)});t.asyncDep=r}else ih(t,r,e)}else Nf(t,e)}function ih(t,e,n){ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=rf(e)),Nf(t,n)}let rh;function Nf(t,e,n){const s=t.type;if(!t.render){if(!e&&rh&&!s.render){const i=s.template||Zc(t).template;if(i){const{isCustomElement:r,compilerOptions:o}=t.appContext.config,{delimiters:c,compilerOptions:u}=s,h=Je(Je({isCustomElement:r,delimiters:c},o),u);s.render=rh(i,h)}}t.render=s.render||Dt}Ss(t),Us(),Gb(t),$s(),Kn()}function I0(t){return new Proxy(t.attrs,{get(e,n){return dt(t,"get","$attrs"),e[n]}})}function T0(t){const e=s=>{t.exposed=s||{}};let n;return{get attrs(){return n||(n=I0(t))},slots:t.slots,emit:t.emit,expose:e}}function ko(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(rf(tf(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in hi)return hi[n](t)},has(e,n){return n in e||n in hi}}))}function C0(t){return ne(t)&&"__vccOpts"in t}const A0=(t,e)=>pb(t,e,Ci),S0=Symbol(""),k0=()=>ui(S0),x0="3.2.47",R0="http://www.w3.org/2000/svg",Un=typeof document<"u"?document:null,oh=Un&&Un.createElement("template"),D0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e?Un.createElementNS(R0,t):Un.createElement(t,n?{is:n}:void 0);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Un.createTextNode(t),createComment:t=>Un.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Un.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{oh.innerHTML=s?`<svg>${t}</svg>`:t;const c=oh.content;if(s){const u=c.firstChild;for(;u.firstChild;)c.appendChild(u.firstChild);c.removeChild(u)}e.insertBefore(c,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function N0(t,e,n){const s=t._vtc;s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function P0(t,e,n){const s=t.style,i=Oe(n);if(n&&!i){if(e&&!Oe(e))for(const r in e)n[r]==null&&ic(s,r,"");for(const r in n)ic(s,r,n[r])}else{const r=s.display;i?e!==n&&(s.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(s.display=r)}}const ah=/\s*!important$/;function ic(t,e,n){if(J(n))n.forEach(s=>ic(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=O0(t,e);ah.test(n)?t.setProperty(Fs(s),n.replace(ah,""),"important"):t[s]=n}}const ch=["Webkit","Moz","ms"],Ia={};function O0(t,e){const n=Ia[e];if(n)return n;let s=Cs(e);if(s!=="filter"&&s in t)return Ia[e]=s;s=jd(s);for(let i=0;i<ch.length;i++){const r=ch[i]+s;if(r in t)return Ia[e]=r}return e}const lh="http://www.w3.org/1999/xlink";function M0(t,e,n,s,i){if(s&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(lh,e.slice(6,e.length)):t.setAttributeNS(lh,e,n);else{const r=Cv(e);n==null||r&&!Ld(n)?t.removeAttribute(e):t.setAttribute(e,r?"":n)}}function L0(t,e,n,s,i,r,o){if(e==="innerHTML"||e==="textContent"){s&&o(s,i,r),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const u=n??"";(t.value!==u||t.tagName==="OPTION")&&(t.value=u),n==null&&t.removeAttribute(e);return}let c=!1;if(n===""||n==null){const u=typeof t[e];u==="boolean"?n=Ld(n):n==null&&u==="string"?(n="",c=!0):u==="number"&&(n=0,c=!0)}try{t[e]=n}catch{}c&&t.removeAttribute(e)}function ds(t,e,n,s){t.addEventListener(e,n,s)}function B0(t,e,n,s){t.removeEventListener(e,n,s)}function F0(t,e,n,s,i=null){const r=t._vei||(t._vei={}),o=r[e];if(s&&o)o.value=s;else{const[c,u]=U0(e);if(s){const h=r[e]=j0(s,i);ds(t,c,h,u)}else o&&(B0(t,c,o,u),r[e]=void 0)}}const uh=/(?:Once|Passive|Capture)$/;function U0(t){let e;if(uh.test(t)){e={};let s;for(;s=t.match(uh);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Fs(t.slice(2)),e]}let Ta=0;const $0=Promise.resolve(),V0=()=>Ta||($0.then(()=>Ta=0),Ta=Date.now());function j0(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Ct(H0(s,n.value),e,5,[s])};return n.value=t,n.attached=V0(),n}function H0(t,e){if(J(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const hh=/^on[a-z]/,q0=(t,e,n,s,i=!1,r,o,c,u)=>{e==="class"?N0(t,s,i):e==="style"?P0(t,n,s):wo(e)?Fc(e)||F0(t,e,n,s,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):z0(t,e,s,i))?L0(t,e,s,r,o,c,u):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),M0(t,e,s,i))};function z0(t,e,n,s){return s?!!(e==="innerHTML"||e==="textContent"||e in t&&hh.test(e)&&ne(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||hh.test(e)&&Oe(n)?!1:e in t}const K0={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Pb.props;const dh=t=>{const e=t.props["onUpdate:modelValue"]||!1;return J(e)?n=>Rr(e,n):e};function W0(t){t.target.composing=!0}function fh(t){const e=t.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const G0={created(t,{modifiers:{lazy:e,trim:n,number:s}},i){t._assign=dh(i);const r=s||i.props&&i.props.type==="number";ds(t,e?"change":"input",o=>{if(o.target.composing)return;let c=t.value;n&&(c=c.trim()),r&&(c=qa(c)),t._assign(c)}),n&&ds(t,"change",()=>{t.value=t.value.trim()}),e||(ds(t,"compositionstart",W0),ds(t,"compositionend",fh),ds(t,"change",fh))},mounted(t,{value:e}){t.value=e??""},beforeUpdate(t,{value:e,modifiers:{lazy:n,trim:s,number:i}},r){if(t._assign=dh(r),t.composing||document.activeElement===t&&t.type!=="range"&&(n||s&&t.value.trim()===e||(i||t.type==="number")&&qa(t.value)===e))return;const o=e??"";t.value!==o&&(t.value=o)}},Y0=["ctrl","shift","alt","meta"],Q0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>Y0.some(n=>t[`${n}Key`]&&!e.includes(n))},X0=(t,e)=>(n,...s)=>{for(let i=0;i<e.length;i++){const r=Q0[e[i]];if(r&&r(n,e))return}return t(n,...s)},J0=Je({patchProp:q0},D0);let ph;function Z0(){return ph||(ph=o0(J0))}const eE=(...t)=>{const e=Z0().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=tE(s);if(!i)return;const r=e._component;!ne(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function tE(t){return Oe(t)?document.querySelector(t):t}const nE="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAABUFBMVEUAAABBuIM1SV5BuINBuINAsIFBuINBuINBuINAsoE2TmBBuINBuINBuINBuINBuINBuINBuINBuINBuINBuINBuoRBuINBuINBuINBuINApn5BuINBuINBuINBuINBuINBuIM8d3BBuINBuIM4XGVBuIM5ZmpBuINBuINBuIM8enI2UWE3VGM3VWNBuINBuIM3V2RBuIM4WmQ5YmhBuIM5Y2k6amtBuINBuIM6bm07cG47b207dG9BuINBuIMzO1k6Z2o6aGpBuINBuIM1SV5Bt4NDyok0Qlw0QFtCxogzOFk1R10zNldDzIk1Rl00RFwyNVczPVozO1lCw4dBvIRBvoVBv4VCyIhCwYZBuoM1S187gHEzN1dAqX8/nns+kXc9i3U7eW85bms5Z2k/o30+mHk4YWc4XGY3V2Q3UmJAroE8hXM6c21Bs4JBsYEzNFcFmwh9AAAAQ3RSTlMAu7v7IA7y5sQG/typi3pcQhT27cy9mmoxKAmhkoNUSTsqGdG/tpJjTzcb9evj4NjY1Muyr6F3dHBlVUk6LbO7hYGyQ6Q7BwAABvRJREFUeNrs11lP4mAUxvHjqCi4L6ASE0NEoqiJ0WDikqh53y60tKVQUAFxX3D5/rcz45gZBwvniSl3/V0ToDnpyflTKBQKhUKhUCjESsT7APF4+ugHL0WES/3gHaXj2P9LUEJA8vWGZDk5IlzOkaxGPS8gCaIRAVCqlacS/yAyRbCU5B+k9FSpKgIwQkSTAqGo9yVbcvRtgm3rkmMb96oiEJP0S59AePnbhuSYzj6B9h1Tchq3eU8g+ui3AWwk+QtNkxxtg0AbwJdpF3lsIAP0bkxA1OuiZGknBDnRJKt4rQrIGP0RjUAjOVNqLv8gsSwBsjH+QdyYcgYNJBKlDxMCoVhXBcnSdwiwo0tW4cpSBGKC/loWiEr50ZAc2zwk1qFpS47xeFYRiGX6Zw1cwc2Sw49ki1hb/ECcUhNcvWv0yahAnKs3BckxtT1i7Gmm5BRu1HOBGKXPpvqxFfxs65KjrUepq+i6xs/VfsZWb/8U/WdcQKw6sIL1DHWV0YHVW7cEZJzaDGEr2Gu5kuPUstRFtuZIjtvysNU7RO1Wwff90jD5kaSpizQ/ENO4BN/0VfpiGDy5HgzJMe0D6ujANiXHeCh7AjFMXy1gIzm9c4EVvEkdbQKr1707xQayQD7AxFJfi8AK3qUOdoHVW3xV0ZzyMzgNjaT8JnXg5BokX4MxYPXKtzI0kOkOPzInINYLcnLlyFcOObJeLAGZI19w9Vax6v1+31bhvvWHV6+BVm/v+9bfSqDV2+O+XSF/wVdvz/u2E7x6Lah6j6nNMdS3Ftq33URnsJNLxIDqrWXbj6wA+3aGObHB6lWx6v1O36po3zJme1K9eN+Wsb6dJc48eHI1Xbx68b51m+CRNU+MoKu3Z33LCLx6k/QhGXDfMoKv3h71LQuv3qrXKgHVm6J3KaBvSy2vCvYtZinY6g2+b5cIEHz14n2bR/sWhFevDtxOm+99C3xQx/sWthho9WJ9W0D7dpFwyQhYvTWkeomQvq2BfRtJEgivXgWr3kwG61sF71vcT+bNXjWBKIyCX6HgC1gZRUxhpwiCNqaI10RwMf4URiMGYhFszPt36VIZ9uzOKZw3kAX5hjunr51civUuDoeF4LfiI0I/itE2vvUu8n/HcqP6bTsK8qydXLtzlgxk5512ZD1FUTpG6zX6bScK09StF/Oj+m0zSmCzXsFvp6LfRhla6sl1TJDjp/jX24ocmPXmnFzCkcX81mq9AOC3Kg2H9fr8thFlqWrWu73mWG+e3241v61GaUbYeo1+OwpAT8zr/rVewW/FSK4XCtx6l6kUS+a3OnX20OB7RKgHo4Ks1+i3lYA8gLwORHLAb6H1zm5Yr+C3M9lvMd0pzut4JNcNAwPt5Hr/3qSCbNRIbhA63HpPN6w3x29Pst9aGIrW+5UVPbJEvx2GgNN6317vxm916+Un1+rjRfVbD3pet7+sk8z6slcjOR8t8NCAHxFaYaQGrBf6bS2cTMRP8pfXCZGc+EEmYaWhPjRkSUF/RGgEAOR11zRPAvN0BZEcYqzmdasksFIjuXGYAaMyNgLj8LzOH8lxwKgMj8A4PK/jkZwZMCpjIzAz3lHZ+qCPwMyAURkbgZkBozISyT2GGToq4yMwDs/reCTH4Xkdj+Q4PK/DkZwdPirjIzAOHJXxERiH53U8kvPDR2V8BMbhozI+AuPwURkfgXHoqAyMwOzwURkfgXG49d6N3/62by+rCQRBFIYrjELAKzHmglHEEEw2iiCYjW5q6TYo7nz/p8gmy1Jnuqbpc0J/b/FTp7xPZc4nMFuS6oXpW+9TmeMJLAL/U1n5kVy0vvU/lf09gSXvW+9TmeMJzCHGvC7KSC5F9cL0rbt6YfrWW704fet7Ktvvfw4gfeua1x3P52PkkZy/eks5HBSmb13VezoB9a1rXhd9JBdnXmeLP5KLX71gfWtbak2WktZUazKVxHZai52kNtNazCS5sdZgLAAG6jYQBBN1mwiEa9UL2rfVqxe1b20jdRkJimahDkVTYGzUYSNAFhpsIUjs6sXuW9tQAw0Fi3VowDsilPHG17eXqpevb21zDTAXQCutbCWIpoR9a1trRWvBNCPsW9uYsG9vHBqQjwhlTAj79sqhAf2IUMZWS9sKtBFf316e1yGN5KI/lX0LvBbWSC5cH2wkF/Wp7E4YNAj71tbBGsl5nspuPoGR6IGN5CI9lb0Lj6/rT2BE2lgjOc+8DmskF64LNpJzVC9f31Z6KvsUOvd8fWt7BRvJ1fpU9iSMmg98fWt7BhvJhWvx9a2tT9i3JZ7KPoRXg7BvbR2+vr31VDag6Vtbj7BvbY9YI7lwL2AjuXBtvr69VL18fWvrEvatrSjkf5hDTmeyLMuyLMuyjNYv/GbbYR0WTIQAAAAASUVORK5CYII=";/**
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
 */const Pf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},sE=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],c=t[n++],u=((i&7)<<18|(r&63)<<12|(o&63)<<6|c&63)-65536;e[s++]=String.fromCharCode(55296+(u>>10)),e[s++]=String.fromCharCode(56320+(u&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Of={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,c=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=r>>2,m=(r&3)<<4|c>>4;let w=(c&15)<<2|h>>6,_=h&63;u||(_=64,o||(w=64)),s.push(n[f],n[m],n[w],n[_])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Pf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):sE(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],c=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const m=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||c==null||h==null||m==null)throw new iE;const w=r<<2|c>>4;if(s.push(w),h!==64){const _=c<<4&240|h>>2;if(s.push(_),m!==64){const N=h<<6&192|m;s.push(N)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class iE extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const rE=function(t){const e=Pf(t);return Of.encodeByteArray(e,!0)},zr=function(t){return rE(t).replace(/\./g,"")},Mf=function(t){try{return Of.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function oE(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const aE=()=>oE().__FIREBASE_DEFAULTS__,cE=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},lE=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mf(t[1]);return e&&JSON.parse(e)},nl=()=>{try{return aE()||cE()||lE()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Lf=t=>{var e,n;return(n=(e=nl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},uE=t=>{const e=Lf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},hE=()=>{var t;return(t=nl())===null||t===void 0?void 0:t.config},Bf=t=>{var e;return(e=nl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class dE{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function fE(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t),c="";return[zr(JSON.stringify(n)),zr(JSON.stringify(o)),c].join(".")}/**
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
 */function Ze(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pE(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ze())}function gE(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mE(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function yE(){const t=Ze();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function wE(){try{return typeof indexedDB=="object"}catch{return!1}}function vE(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const bE="FirebaseError";class cn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=bE,Object.setPrototypeOf(this,cn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,$i.prototype.create)}}class $i{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?EE(r,s):"Error",c=`${this.serviceName}: ${o} (${i}).`;return new cn(i,c,s)}}function EE(t,e){return t.replace(_E,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const _E=/\{\$([^}]+)}/g;function IE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Kr(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(gh(r)&&gh(o)){if(!Kr(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function gh(t){return t!==null&&typeof t=="object"}/**
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
 */function Vi(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}function TE(t,e){const n=new CE(t,e);return n.subscribe.bind(n)}class CE{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");AE(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function AE(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Ca(){}/**
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
 */function rt(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ln="[DEFAULT]";/**
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
 */class SE{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new dE;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(xE(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const c=this.normalizeInstanceIdentifier(r);s===c&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:kE(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kE(t){return t===Ln?void 0:t}function xE(t){return t.instantiationMode==="EAGER"}/**
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
 */class RE{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new SE(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ue;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ue||(ue={}));const DE={debug:ue.DEBUG,verbose:ue.VERBOSE,info:ue.INFO,warn:ue.WARN,error:ue.ERROR,silent:ue.SILENT},NE=ue.INFO,PE={[ue.DEBUG]:"log",[ue.VERBOSE]:"log",[ue.INFO]:"info",[ue.WARN]:"warn",[ue.ERROR]:"error"},OE=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=PE[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class sl{constructor(e){this.name=e,this._logLevel=NE,this._logHandler=OE,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ue))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?DE[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ue.DEBUG,...e),this._logHandler(this,ue.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ue.VERBOSE,...e),this._logHandler(this,ue.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ue.INFO,...e),this._logHandler(this,ue.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ue.WARN,...e),this._logHandler(this,ue.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ue.ERROR,...e),this._logHandler(this,ue.ERROR,...e)}}const ME=(t,e)=>e.some(n=>t instanceof n);let mh,yh;function LE(){return mh||(mh=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function BE(){return yh||(yh=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ff=new WeakMap,rc=new WeakMap,Uf=new WeakMap,Aa=new WeakMap,il=new WeakMap;function FE(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(vn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Ff.set(n,t)}).catch(()=>{}),il.set(e,t),e}function UE(t){if(rc.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});rc.set(t,e)}let oc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return rc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Uf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return vn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function $E(t){oc=t(oc)}function VE(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Sa(this),e,...n);return Uf.set(s,e.sort?e.sort():[e]),vn(s)}:BE().includes(t)?function(...e){return t.apply(Sa(this),e),vn(Ff.get(this))}:function(...e){return vn(t.apply(Sa(this),e))}}function jE(t){return typeof t=="function"?VE(t):(t instanceof IDBTransaction&&UE(t),ME(t,LE())?new Proxy(t,oc):t)}function vn(t){if(t instanceof IDBRequest)return FE(t);if(Aa.has(t))return Aa.get(t);const e=jE(t);return e!==t&&(Aa.set(t,e),il.set(e,t)),e}const Sa=t=>il.get(t);function HE(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),c=vn(o);return s&&o.addEventListener("upgradeneeded",u=>{s(vn(o.result),u.oldVersion,u.newVersion,vn(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),c.then(u=>{r&&u.addEventListener("close",()=>r()),i&&u.addEventListener("versionchange",()=>i())}).catch(()=>{}),c}const qE=["get","getKey","getAll","getAllKeys","count"],zE=["put","add","delete","clear"],ka=new Map;function wh(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=zE.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||qE.includes(n)))return;const r=async function(o,...c){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return s&&(h=h.index(c.shift())),(await Promise.all([h[n](...c),i&&u.done]))[0]};return ka.set(e,r),r}$E(t=>({...t,get:(e,n,s)=>wh(e,n)||t.get(e,n,s),has:(e,n)=>!!wh(e,n)||t.has(e,n)}));/**
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
 */class KE{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(WE(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function WE(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ac="@firebase/app",vh="0.9.8";/**
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
 */const Jn=new sl("@firebase/app"),GE="@firebase/app-compat",YE="@firebase/analytics-compat",QE="@firebase/analytics",XE="@firebase/app-check-compat",JE="@firebase/app-check",ZE="@firebase/auth",e_="@firebase/auth-compat",t_="@firebase/database",n_="@firebase/database-compat",s_="@firebase/functions",i_="@firebase/functions-compat",r_="@firebase/installations",o_="@firebase/installations-compat",a_="@firebase/messaging",c_="@firebase/messaging-compat",l_="@firebase/performance",u_="@firebase/performance-compat",h_="@firebase/remote-config",d_="@firebase/remote-config-compat",f_="@firebase/storage",p_="@firebase/storage-compat",g_="@firebase/firestore",m_="@firebase/firestore-compat",y_="firebase",w_="9.20.0";/**
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
 */const cc="[DEFAULT]",v_={[ac]:"fire-core",[GE]:"fire-core-compat",[QE]:"fire-analytics",[YE]:"fire-analytics-compat",[JE]:"fire-app-check",[XE]:"fire-app-check-compat",[ZE]:"fire-auth",[e_]:"fire-auth-compat",[t_]:"fire-rtdb",[n_]:"fire-rtdb-compat",[s_]:"fire-fn",[i_]:"fire-fn-compat",[r_]:"fire-iid",[o_]:"fire-iid-compat",[a_]:"fire-fcm",[c_]:"fire-fcm-compat",[l_]:"fire-perf",[u_]:"fire-perf-compat",[h_]:"fire-rc",[d_]:"fire-rc-compat",[f_]:"fire-gcs",[p_]:"fire-gcs-compat",[g_]:"fire-fst",[m_]:"fire-fst-compat","fire-js":"fire-js",[y_]:"fire-js-all"};/**
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
 */const Wr=new Map,lc=new Map;function b_(t,e){try{t.container.addComponent(e)}catch(n){Jn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function ks(t){const e=t.name;if(lc.has(e))return Jn.debug(`There were multiple attempts to register component ${e}.`),!1;lc.set(e,t);for(const n of Wr.values())b_(n,t);return!0}function rl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const E_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},bn=new $i("app","Firebase",E_);/**
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
 */class __{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw bn.create("app-deleted",{appName:this._name})}}/**
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
 */const Vs=w_;function $f(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:cc,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw bn.create("bad-app-name",{appName:String(i)});if(n||(n=hE()),!n)throw bn.create("no-options");const r=Wr.get(i);if(r){if(Kr(n,r.options)&&Kr(s,r.config))return r;throw bn.create("duplicate-app",{appName:i})}const o=new RE(i);for(const u of lc.values())o.addComponent(u);const c=new __(n,s,o);return Wr.set(i,c),c}function Vf(t=cc){const e=Wr.get(t);if(!e&&t===cc)return $f();if(!e)throw bn.create("no-app",{appName:t});return e}function En(t,e,n){var s;let i=(s=v_[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const c=[`Unable to register library "${i}" with version "${e}":`];r&&c.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&c.push("and"),o&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Jn.warn(c.join(" "));return}ks(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const I_="firebase-heartbeat-database",T_=1,Ai="firebase-heartbeat-store";let xa=null;function jf(){return xa||(xa=HE(I_,T_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ai)}}}).catch(t=>{throw bn.create("idb-open",{originalErrorMessage:t.message})})),xa}async function C_(t){try{return(await jf()).transaction(Ai).objectStore(Ai).get(Hf(t))}catch(e){if(e instanceof cn)Jn.warn(e.message);else{const n=bn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Jn.warn(n.message)}}}async function bh(t,e){try{const s=(await jf()).transaction(Ai,"readwrite");return await s.objectStore(Ai).put(e,Hf(t)),s.done}catch(n){if(n instanceof cn)Jn.warn(n.message);else{const s=bn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Jn.warn(s.message)}}}function Hf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const A_=1024,S_=30*24*60*60*1e3;class k_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new R_(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=Eh();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(i=>i.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const r=new Date(i.date).valueOf();return Date.now()-r<=S_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Eh(),{heartbeatsToSend:n,unsentEntries:s}=x_(this._heartbeatsCache.heartbeats),i=zr(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Eh(){return new Date().toISOString().substring(0,10)}function x_(t,e=A_){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),_h(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),_h(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class R_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return wE()?vE().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await C_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return bh(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function _h(t){return zr(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function D_(t){ks(new Xn("platform-logger",e=>new KE(e),"PRIVATE")),ks(new Xn("heartbeat",e=>new k_(e),"PRIVATE")),En(ac,vh,t),En(ac,vh,"esm2017"),En("fire-js","")}D_("");var N_="firebase",P_="9.20.0";/**
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
 */En(N_,P_,"app");function ol(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function qf(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const O_=qf,zf=new $i("auth","Firebase",qf());/**
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
 */const Gr=new sl("@firebase/auth");function M_(t,...e){Gr.logLevel<=ue.WARN&&Gr.warn(`Auth (${Vs}): ${t}`,...e)}function Pr(t,...e){Gr.logLevel<=ue.ERROR&&Gr.error(`Auth (${Vs}): ${t}`,...e)}/**
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
 */function qt(t,...e){throw al(t,...e)}function Vt(t,...e){return al(t,...e)}function Kf(t,e,n){const s=Object.assign(Object.assign({},O_()),{[e]:n});return new $i("auth","Firebase",s).create(e,{appName:t.name})}function L_(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&qt(t,"argument-error"),Kf(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function al(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return zf.create(t,...e)}function K(t,e,...n){if(!t)throw al(e,...n)}function Yt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Pr(e),new Error(e)}function tn(t,e){t||Yt(e)}/**
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
 */function uc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function B_(){return Ih()==="http:"||Ih()==="https:"}function Ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function F_(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(B_()||gE()||"connection"in navigator)?navigator.onLine:!0}function U_(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ji{constructor(e,n){this.shortDelay=e,this.longDelay=n,tn(n>e,"Short delay should be less than long delay!"),this.isMobile=pE()||mE()}get(){return F_()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function cl(t,e){tn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Wf{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const $_={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const V_=new ji(3e4,6e4);function Gf(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Hi(t,e,n,s,i={}){return Yf(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const c=Vi(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Wf.fetch()(Qf(t,t.config.apiHost,n,c),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},r))})}async function Yf(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},$_),e);try{const i=new H_(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw br(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const c=r.ok?o.errorMessage:o.error.message,[u,h]=c.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw br(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw br(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw br(t,"user-disabled",o);const f=s[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Kf(t,f,h);qt(t,f)}}catch(i){if(i instanceof cn)throw i;qt(t,"network-request-failed",{message:String(i)})}}async function j_(t,e,n,s,i={}){const r=await Hi(t,e,n,s,i);return"mfaPendingCredential"in r&&qt(t,"multi-factor-auth-required",{_serverResponse:r}),r}function Qf(t,e,n,s){const i=`${e}${n}?${s}`;return t.config.emulator?cl(t.config,i):`${t.config.apiScheme}://${i}`}class H_{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Vt(this.auth,"network-request-failed")),V_.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function br(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Vt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function q_(t,e){return Hi(t,"POST","/v1/accounts:delete",e)}async function z_(t,e){return Hi(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fi(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function K_(t,e=!1){const n=rt(t),s=await n.getIdToken(e),i=ll(s);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:fi(Ra(i.auth_time)),issuedAtTime:fi(Ra(i.iat)),expirationTime:fi(Ra(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Ra(t){return Number(t)*1e3}function ll(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Pr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mf(n);return i?JSON.parse(i):(Pr("Failed to decode base64 JWT payload"),null)}catch(i){return Pr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function W_(t){const e=ll(t);return K(e,"internal-error"),K(typeof e.exp<"u","internal-error"),K(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Si(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof cn&&G_(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function G_({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class Y_{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Xf{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fi(this.lastLoginAt),this.creationTime=fi(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Yr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Si(t,z_(n,{idToken:s}));K(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?J_(r.providerUserInfo):[],c=X_(t.providerData,o),u=t.isAnonymous,h=!(t.email&&r.passwordHash)&&!(c!=null&&c.length),f=u?h:!1,m={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:c,metadata:new Xf(r.createdAt,r.lastLoginAt),isAnonymous:f};Object.assign(t,m)}async function Q_(t){const e=rt(t);await Yr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function X_(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function J_(t){return t.map(e=>{var{providerId:n}=e,s=ol(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function Z_(t,e){const n=await Yf(t,{},async()=>{const s=Vi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=Qf(t,i,"/v1/token",`key=${r}`),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/x-www-form-urlencoded",Wf.fetch()(o,{method:"POST",headers:c,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class ki{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){K(e.idToken,"internal-error"),K(typeof e.idToken<"u","internal-error"),K(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):W_(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return K(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await Z_(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ki;return s&&(K(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(K(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(K(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ki,this.toJSON())}_performRefresh(){return Yt("not implemented")}}/**
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
 */function un(t,e){K(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Wn{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=ol(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Y_(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Xf(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Si(this,this.stsTokenManager.getToken(this.auth,e));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return K_(this,e)}reload(){return Q_(this)}_assign(e){this!==e&&(K(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Wn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Yr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Si(this,q_(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,c,u,h,f;const m=(s=n.displayName)!==null&&s!==void 0?s:void 0,w=(i=n.email)!==null&&i!==void 0?i:void 0,_=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,N=(o=n.photoURL)!==null&&o!==void 0?o:void 0,A=(c=n.tenantId)!==null&&c!==void 0?c:void 0,F=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,H=(h=n.createdAt)!==null&&h!==void 0?h:void 0,oe=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:P,emailVerified:se,isAnonymous:ee,providerData:G,stsTokenManager:De}=n;K(P&&De,e,"internal-error");const Q=ki.fromJSON(this.name,De);K(typeof P=="string",e,"internal-error"),un(m,e.name),un(w,e.name),K(typeof se=="boolean",e,"internal-error"),K(typeof ee=="boolean",e,"internal-error"),un(_,e.name),un(N,e.name),un(A,e.name),un(F,e.name),un(H,e.name),un(oe,e.name);const me=new Wn({uid:P,auth:e,email:w,emailVerified:se,displayName:m,isAnonymous:ee,photoURL:N,phoneNumber:_,tenantId:A,stsTokenManager:Q,createdAt:H,lastLoginAt:oe});return G&&Array.isArray(G)&&(me.providerData=G.map(fe=>Object.assign({},fe))),F&&(me._redirectEventId=F),me}static async _fromIdTokenResponse(e,n,s=!1){const i=new ki;i.updateFromServerResponse(n);const r=new Wn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Yr(r),r}}/**
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
 */const Th=new Map;function Qt(t){tn(t instanceof Function,"Expected a class definition");let e=Th.get(t);return e?(tn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Th.set(t,e),e)}/**
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
 */class Jf{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Jf.type="NONE";const Ch=Jf;/**
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
 */function Or(t,e,n){return`firebase:${t}:${e}:${n}`}class bs{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Or(this.userKey,i.apiKey,r),this.fullPersistenceKey=Or("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Wn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new bs(Qt(Ch),e,s);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let r=i[0]||Qt(Ch);const o=Or(s,e.config.apiKey,e.name);let c=null;for(const h of n)try{const f=await h._get(o);if(f){const m=Wn._fromJSON(e,f);h!==r&&(c=m),r=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!r._shouldAllowMigration||!u.length?new bs(r,e,s):(r=u[0],c&&await r._set(o,c.toJSON()),await Promise.all(n.map(async h=>{if(h!==r)try{await h._remove(o)}catch{}})),new bs(r,e,s))}}/**
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
 */function Ah(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(tp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Zf(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sp(e))return"Blackberry";if(ip(e))return"Webos";if(ul(e))return"Safari";if((e.includes("chrome/")||ep(e))&&!e.includes("edge/"))return"Chrome";if(np(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function Zf(t=Ze()){return/firefox\//i.test(t)}function ul(t=Ze()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ep(t=Ze()){return/crios\//i.test(t)}function tp(t=Ze()){return/iemobile/i.test(t)}function np(t=Ze()){return/android/i.test(t)}function sp(t=Ze()){return/blackberry/i.test(t)}function ip(t=Ze()){return/webos/i.test(t)}function xo(t=Ze()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function eI(t=Ze()){var e;return xo(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function tI(){return yE()&&document.documentMode===10}function rp(t=Ze()){return xo(t)||np(t)||ip(t)||sp(t)||/windows phone/i.test(t)||tp(t)}function nI(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function op(t,e=[]){let n;switch(t){case"Browser":n=Ah(Ze());break;case"Worker":n=`${Ah(Ze())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Vs}/${s}`}async function ap(t,e){return Hi(t,"GET","/v2/recaptchaConfig",Gf(t,e))}function Sh(t){return t!==void 0&&t.enterprise!==void 0}class cp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function sI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function lp(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Vt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",sI().appendChild(s)})}function iI(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const rI="https://www.google.com/recaptcha/enterprise.js?render=",oI="recaptcha-enterprise";class aI{constructor(e){this.type=oI,this.auth=qi(e)}async verify(e="verify",n=!1){async function s(r){if(!n){if(r.tenantId==null&&r._agentRecaptchaConfig!=null)return r._agentRecaptchaConfig.siteKey;if(r.tenantId!=null&&r._tenantRecaptchaConfigs[r.tenantId]!==void 0)return r._tenantRecaptchaConfigs[r.tenantId].siteKey}return new Promise(async(o,c)=>{ap(r,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)c(new Error("recaptcha Enterprise site key undefined"));else{const h=new cp(u);return r.tenantId==null?r._agentRecaptchaConfig=h:r._tenantRecaptchaConfigs[r.tenantId]=h,o(h.siteKey)}}).catch(u=>{c(u)})})}function i(r,o,c){const u=window.grecaptcha;Sh(u)?u.enterprise.ready(()=>{try{u.enterprise.execute(r,{action:e}).then(h=>{o(h)}).catch(h=>{c(h)})}catch(h){c(h)}}):c(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((r,o)=>{s(this.auth).then(c=>{if(!n&&Sh(window.grecaptcha))i(c,r,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}lp(rI+c).then(()=>{i(c,r,o)}).catch(u=>{o(u)})}}).catch(c=>{o(c)})})}}/**
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
 */class cI{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,c)=>{try{const u=e(r);o(u)}catch(u){c(u)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */class lI{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kh(this),this.idTokenSubscription=new kh(this),this.beforeStateQueue=new cI(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=zf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Qt(n)),this._initializationPromise=this.queue(async()=>{var s,i;if(!this._deleted&&(this.persistenceManager=await bs.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,c=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===c)&&(u!=null&&u.user)&&(i=u.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Yr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=U_()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?rt(e):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&K(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Qt(e))})}async initializeRecaptchaConfig(){const e=await ap(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new cp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new aI(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new $i("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Qt(e)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await bs.create(this,[Qt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return K(o,this,"internal-error"),o.then(()=>r(this.currentUser)),typeof n=="function"?e.addObserver(n,s,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=op(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&M_(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function qi(t){return rt(t)}class kh{constructor(e){this.auth=e,this.observer=null,this.addObserver=TE(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function uI(t,e){const n=rl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Kr(r,e??{}))return i;qt(i,"already-initialized")}return n.initialize({options:e})}function hI(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(Qt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function dI(t,e,n){const s=qi(t);K(s._canInitEmulator,s,"emulator-config-failed"),K(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),r=up(e),{host:o,port:c}=fI(e),u=c===null?"":`:${c}`;s.config.emulator={url:`${r}//${o}${u}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:o,port:c,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||pI()}function up(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function fI(t){const e=up(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:xh(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:xh(o)}}}function xh(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function pI(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class hp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Yt("not implemented")}_getIdTokenResponse(e){return Yt("not implemented")}_linkToIdToken(e,n){return Yt("not implemented")}_getReauthenticationResolver(e){return Yt("not implemented")}}/**
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
 */async function Es(t,e){return j_(t,"POST","/v1/accounts:signInWithIdp",Gf(t,e))}/**
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
 */const gI="http://localhost";class Zn extends hp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):qt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=ol(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new Zn(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Es(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Es(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Es(e,n)}buildRequest(){const e={requestUri:gI,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Vi(n)}return e}}/**
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
 */class hl{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class zi extends hl{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class fn extends zi{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:fn.PROVIDER_ID,signInMethod:fn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return fn.credentialFromTaggedObject(e)}static credentialFromError(e){return fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return fn.credential(e.oauthAccessToken)}catch{return null}}}fn.FACEBOOK_SIGN_IN_METHOD="facebook.com";fn.PROVIDER_ID="facebook.com";/**
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
 */class Gt extends zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Gt.PROVIDER_ID,signInMethod:Gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Gt.credentialFromTaggedObject(e)}static credentialFromError(e){return Gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return Gt.credential(n,s)}catch{return null}}}Gt.GOOGLE_SIGN_IN_METHOD="google.com";Gt.PROVIDER_ID="google.com";/**
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
 */class pn extends zi{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:pn.PROVIDER_ID,signInMethod:pn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return pn.credentialFromTaggedObject(e)}static credentialFromError(e){return pn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return pn.credential(e.oauthAccessToken)}catch{return null}}}pn.GITHUB_SIGN_IN_METHOD="github.com";pn.PROVIDER_ID="github.com";/**
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
 */class gn extends zi{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return gn.credential(n,s)}catch{return null}}}gn.TWITTER_SIGN_IN_METHOD="twitter.com";gn.PROVIDER_ID="twitter.com";/**
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
 */class xs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Wn._fromIdTokenResponse(e,s,i),o=Rh(s);return new xs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Rh(s);return new xs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Rh(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Qr extends cn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Qr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Qr(e,n,s,i)}}function dp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qr._fromErrorAndOperation(t,r,e,s):r})}async function mI(t,e,n=!1){const s=await Si(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return xs._forOperation(t,"link",s)}/**
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
 */async function yI(t,e,n=!1){const{auth:s}=t,i="reauthenticate";try{const r=await Si(t,dp(s,i,e,t),n);K(r.idToken,s,"internal-error");const o=ll(r.idToken);K(o,s,"internal-error");const{sub:c}=o;return K(t.uid===c,s,"user-mismatch"),xs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&qt(s,"user-mismatch"),r}}/**
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
 */async function wI(t,e,n=!1){const s="signIn",i=await dp(t,s,e),r=await xs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function vI(t,e,n,s){return rt(t).onIdTokenChanged(e,n,s)}function bI(t,e,n){return rt(t).beforeAuthStateChanged(e,n)}function EI(t,e,n,s){return rt(t).onAuthStateChanged(e,n,s)}function _I(t){return rt(t).signOut()}const Xr="__sak";/**
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
 */class fp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Xr,"1"),this.storage.removeItem(Xr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function II(){const t=Ze();return ul(t)||xo(t)}const TI=1e3,CI=10;class pp extends fp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=II()&&nI(),this.fallbackToPolling=rp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,c,u)=>{this.notifyListeners(o,u)});return}const s=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(s);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(s,e.newValue):this.storage.removeItem(s);else if(this.localCache[s]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);tI()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,CI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},TI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}pp.type="LOCAL";const AI=pp;/**
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
 */class gp extends fp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}gp.type="SESSION";const mp=gp;/**
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
 */function SI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ro{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ro(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const c=Array.from(o).map(async h=>h(n.origin,r)),u=await SI(c);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ro.receivers=[];/**
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
 */function dl(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class kI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((c,u)=>{const h=dl("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(m){const w=m;if(w.data.eventId===h)switch(w.data.status){case"ack":clearTimeout(f),r=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),c(w.data.response);break;default:clearTimeout(f),clearTimeout(r),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function jt(){return window}function xI(t){jt().location.href=t}/**
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
 */function yp(){return typeof jt().WorkerGlobalScope<"u"&&typeof jt().importScripts=="function"}async function RI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function DI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function NI(){return yp()?self:null}/**
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
 */const wp="firebaseLocalStorageDb",PI=1,Jr="firebaseLocalStorage",vp="fbase_key";class Ki{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Do(t,e){return t.transaction([Jr],e?"readwrite":"readonly").objectStore(Jr)}function OI(){const t=indexedDB.deleteDatabase(wp);return new Ki(t).toPromise()}function hc(){const t=indexedDB.open(wp,PI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Jr,{keyPath:vp})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Jr)?e(s):(s.close(),await OI(),e(await hc()))})})}async function Dh(t,e,n){const s=Do(t,!0).put({[vp]:e,value:n});return new Ki(s).toPromise()}async function MI(t,e){const n=Do(t,!1).get(e),s=await new Ki(n).toPromise();return s===void 0?null:s.value}function Nh(t,e){const n=Do(t,!0).delete(e);return new Ki(n).toPromise()}const LI=800,BI=3;class bp{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await hc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>BI)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return yp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ro._getInstance(NI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await RI(),!this.activeServiceWorker)return;this.sender=new kI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||DI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await hc();return await Dh(e,Xr,"1"),await Nh(e,Xr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Dh(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>MI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Nh(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Do(i,!1).getAll();return new Ki(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),LI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}bp.type="LOCAL";const FI=bp;new ji(3e4,6e4);/**
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
 */function Ep(t,e){return e?Qt(e):(K(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class fl extends hp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Es(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Es(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Es(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function UI(t){return wI(t.auth,new fl(t),t.bypassAuthState)}function $I(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),yI(n,new fl(t),t.bypassAuthState)}async function VI(t){const{auth:e,user:n}=t;return K(n,e,"internal-error"),mI(n,new fl(t),t.bypassAuthState)}/**
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
 */class _p{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:c}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(c)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return UI;case"linkViaPopup":case"linkViaRedirect":return VI;case"reauthViaPopup":case"reauthViaRedirect":return $I;default:qt(this.auth,"internal-error")}}resolve(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){tn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const jI=new ji(2e3,1e4);async function HI(t,e,n){const s=qi(t);L_(t,e,hl);const i=Ep(s,n);return new Vn(s,"signInViaPopup",e,i).executeNotNull()}class Vn extends _p{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return K(e,this.auth,"internal-error"),e}async onExecution(){tn(this.filter.length===1,"Popup operations only handle one event");const e=dl();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Vt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Vt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Vt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,jI.get())};e()}}Vn.currentPopupAction=null;/**
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
 */const qI="pendingRedirect",Mr=new Map;class zI extends _p{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Mr.get(this.auth._key());if(!e){try{const s=await KI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Mr.set(this.auth._key(),e)}return this.bypassAuthState||Mr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function KI(t,e){const n=YI(e),s=GI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function WI(t,e){Mr.set(t._key(),e)}function GI(t){return Qt(t._redirectPersistence)}function YI(t){return Or(qI,t.config.apiKey,t.name)}async function QI(t,e,n=!1){const s=qi(t),i=Ep(s,e),o=await new zI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const XI=10*60*1e3;class JI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ZI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Ip(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Vt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=XI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ph(e))}saveEventToCache(e){this.cachedEventUids.add(Ph(e)),this.lastProcessedEventTime=Date.now()}}function Ph(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Ip({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ZI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ip(t);default:return!1}}/**
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
 */async function eT(t,e={}){return Hi(t,"GET","/v1/projects",e)}/**
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
 */const tT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,nT=/^https?/;async function sT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await eT(t);for(const n of e)try{if(iT(n))return}catch{}qt(t,"unauthorized-domain")}function iT(t){const e=uc(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!nT.test(n))return!1;if(tT.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const rT=new ji(3e4,6e4);function Oh(){const t=jt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function oT(t){return new Promise((e,n)=>{var s,i,r;function o(){Oh(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Oh(),n(Vt(t,"network-request-failed"))},timeout:rT.get()})}if(!((i=(s=jt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=jt().gapi)===null||r===void 0)&&r.load)o();else{const c=iI("iframefcb");return jt()[c]=()=>{gapi.load?o():n(Vt(t,"network-request-failed"))},lp(`https://apis.google.com/js/api.js?onload=${c}`).catch(u=>n(u))}}).catch(e=>{throw Lr=null,e})}let Lr=null;function aT(t){return Lr=Lr||oT(t),Lr}/**
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
 */const cT=new ji(5e3,15e3),lT="__/auth/iframe",uT="emulator/auth/iframe",hT={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function fT(t){const e=t.config;K(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?cl(e,uT):`https://${t.config.authDomain}/${lT}`,s={apiKey:e.apiKey,appName:t.name,v:Vs},i=dT.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Vi(s).slice(1)}`}async function pT(t){const e=await aT(t),n=jt().gapi;return K(n,t,"internal-error"),e.open({where:document.body,url:fT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:hT,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Vt(t,"network-request-failed"),c=jt().setTimeout(()=>{r(o)},cT.get());function u(){jt().clearTimeout(c),i(s)}s.ping(u).then(u,()=>{r(o)})}))}/**
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
 */const gT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mT=500,yT=600,wT="_blank",vT="http://localhost";class Mh{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function bT(t,e,n,s=mT,i=yT){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let c="";const u=Object.assign(Object.assign({},gT),{width:s.toString(),height:i.toString(),top:r,left:o}),h=Ze().toLowerCase();n&&(c=ep(h)?wT:n),Zf(h)&&(e=e||vT,u.scrollbars="yes");const f=Object.entries(u).reduce((w,[_,N])=>`${w}${_}=${N},`,"");if(eI(h)&&c!=="_self")return ET(e||"",c),new Mh(null);const m=window.open(e||"",c,f);K(m,t,"popup-blocked");try{m.focus()}catch{}return new Mh(m)}function ET(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const _T="__/auth/handler",IT="emulator/auth/handler",TT=encodeURIComponent("fac");async function Lh(t,e,n,s,i,r){K(t.config.authDomain,t,"auth-domain-config-required"),K(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Vs,eventId:i};if(e instanceof hl){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",IE(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,m]of Object.entries(r||{}))o[f]=m}if(e instanceof zi){const f=e.getScopes().filter(m=>m!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const c=o;for(const f of Object.keys(c))c[f]===void 0&&delete c[f];const u=await t._getAppCheckToken(),h=u?`#${TT}=${encodeURIComponent(u)}`:"";return`${CT(t)}?${Vi(c).slice(1)}${h}`}function CT({config:t}){return t.emulator?cl(t,IT):`https://${t.authDomain}/${_T}`}/**
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
 */const Da="webStorageSupport";class AT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=mp,this._completeRedirectFn=QI,this._overrideRedirectResult=WI}async _openPopup(e,n,s,i){var r;tn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Lh(e,n,s,uc(),i);return bT(e,o,dl())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Lh(e,n,s,uc(),i);return xI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(tn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await pT(e),s=new JI(e);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Da,{type:Da},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Da];o!==void 0&&n(!!o),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=sT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return rp()||ul()||xo()}}const ST=AT;var Bh="@firebase/auth",Fh="0.23.0";/**
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
 */class kT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function xT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function RT(t){ks(new Xn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:c}=s.options;K(o&&!o.includes(":"),"invalid-api-key",{appName:s.name}),K(!(c!=null&&c.includes(":")),"argument-error",{appName:s.name});const u={apiKey:o,authDomain:c,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:op(t)},h=new lI(s,i,r,u);return hI(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),ks(new Xn("auth-internal",e=>{const n=qi(e.getProvider("auth").getImmediate());return(s=>new kT(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),En(Bh,Fh,xT(t)),En(Bh,Fh,"esm2017")}/**
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
 */const DT=5*60,NT=Bf("authIdTokenMaxAge")||DT;let Uh=null;const PT=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>NT)return;const i=n==null?void 0:n.token;Uh!==i&&(Uh=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function OT(t=Vf()){const e=rl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=uI(t,{popupRedirectResolver:ST,persistence:[FI,AI,mp]}),s=Bf("authTokenSyncURL");if(s){const r=PT(s);bI(n,r,()=>r(n.currentUser)),vI(n,o=>r(o))}const i=Lf("auth");return i&&dI(n,`http://${i}`),n}RT("Browser");var MT=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,pl=pl||{},W=MT||self;function Zr(){}function No(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Wi(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function LT(t){return Object.prototype.hasOwnProperty.call(t,Na)&&t[Na]||(t[Na]=++BT)}var Na="closure_uid_"+(1e9*Math.random()>>>0),BT=0;function FT(t,e,n){return t.call.apply(t.bind,arguments)}function UT(t,e,n){if(!t)throw Error();if(2<arguments.length){var s=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,s),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function Qe(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Qe=FT:Qe=UT,Qe.apply(null,arguments)}function Er(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var s=n.slice();return s.push.apply(s,arguments),t.apply(this,s)}}function Ve(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(s,i,r){for(var o=Array(arguments.length-2),c=2;c<arguments.length;c++)o[c-2]=arguments[c];return e.prototype[i].apply(s,o)}}function kn(){this.s=this.s,this.o=this.o}var $T=0;kn.prototype.s=!1;kn.prototype.na=function(){!this.s&&(this.s=!0,this.M(),$T!=0)&&LT(this)};kn.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Tp=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function gl(t){const e=t.length;if(0<e){const n=Array(e);for(let s=0;s<e;s++)n[s]=t[s];return n}return[]}function $h(t,e){for(let n=1;n<arguments.length;n++){const s=arguments[n];if(No(s)){const i=t.length||0,r=s.length||0;t.length=i+r;for(let o=0;o<r;o++)t[i+o]=s[o]}else t.push(s)}}function Xe(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Xe.prototype.h=function(){this.defaultPrevented=!0};var VT=function(){if(!W.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{W.addEventListener("test",Zr,e),W.removeEventListener("test",Zr,e)}catch{}return t}();function eo(t){return/^[\s\xa0]*$/.test(t)}var Vh=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Pa(t,e){return t<e?-1:t>e?1:0}function Po(){var t=W.navigator;return t&&(t=t.userAgent)?t:""}function $t(t){return Po().indexOf(t)!=-1}function ml(t){return ml[" "](t),t}ml[" "]=Zr;function jT(t){var e=zT;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var HT=$t("Opera"),Rs=$t("Trident")||$t("MSIE"),Cp=$t("Edge"),dc=Cp||Rs,Ap=$t("Gecko")&&!(Po().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge"))&&!($t("Trident")||$t("MSIE"))&&!$t("Edge"),qT=Po().toLowerCase().indexOf("webkit")!=-1&&!$t("Edge");function Sp(){var t=W.document;return t?t.documentMode:void 0}var to;e:{var Oa="",Ma=function(){var t=Po();if(Ap)return/rv:([^\);]+)(\)|;)/.exec(t);if(Cp)return/Edge\/([\d\.]+)/.exec(t);if(Rs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(qT)return/WebKit\/(\S+)/.exec(t);if(HT)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ma&&(Oa=Ma?Ma[1]:""),Rs){var La=Sp();if(La!=null&&La>parseFloat(Oa)){to=String(La);break e}}to=Oa}var zT={};function KT(){return jT(function(){let t=0;const e=Vh(String(to)).split("."),n=Vh("9").split("."),s=Math.max(e.length,n.length);for(let o=0;t==0&&o<s;o++){var i=e[o]||"",r=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],i[0].length==0&&r[0].length==0)break;t=Pa(i[1].length==0?0:parseInt(i[1],10),r[1].length==0?0:parseInt(r[1],10))||Pa(i[2].length==0,r[2].length==0)||Pa(i[2],r[2]),i=i[3],r=r[3]}while(t==0)}return 0<=t})}var fc;if(W.document&&Rs){var jh=Sp();fc=jh||parseInt(to,10)||void 0}else fc=void 0;var WT=fc;function xi(t,e){if(Xe.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,s=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(Ap){e:{try{ml(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,s?(this.clientX=s.clientX!==void 0?s.clientX:s.pageX,this.clientY=s.clientY!==void 0?s.clientY:s.pageY,this.screenX=s.screenX||0,this.screenY=s.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:GT[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&xi.X.h.call(this)}}Ve(xi,Xe);var GT={2:"touch",3:"pen",4:"mouse"};xi.prototype.h=function(){xi.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Gi="closure_listenable_"+(1e6*Math.random()|0),YT=0;function QT(t,e,n,s,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!s,this.ha=i,this.key=++YT,this.ba=this.ea=!1}function Oo(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function yl(t,e,n){for(const s in t)e.call(n,t[s],s,t)}function kp(t){const e={};for(const n in t)e[n]=t[n];return e}const Hh="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function xp(t,e){let n,s;for(let i=1;i<arguments.length;i++){s=arguments[i];for(n in s)t[n]=s[n];for(let r=0;r<Hh.length;r++)n=Hh[r],Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n])}}function Mo(t){this.src=t,this.g={},this.h=0}Mo.prototype.add=function(t,e,n,s,i){var r=t.toString();t=this.g[r],t||(t=this.g[r]=[],this.h++);var o=gc(t,e,s,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new QT(e,this.src,r,!!s,i),e.ea=n,t.push(e)),e};function pc(t,e){var n=e.type;if(n in t.g){var s=t.g[n],i=Tp(s,e),r;(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(Oo(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function gc(t,e,n,s){for(var i=0;i<t.length;++i){var r=t[i];if(!r.ba&&r.listener==e&&r.capture==!!n&&r.ha==s)return i}return-1}var wl="closure_lm_"+(1e6*Math.random()|0),Ba={};function Rp(t,e,n,s,i){if(s&&s.once)return Np(t,e,n,s,i);if(Array.isArray(e)){for(var r=0;r<e.length;r++)Rp(t,e[r],n,s,i);return null}return n=El(n),t&&t[Gi]?t.N(e,n,Wi(s)?!!s.capture:!!s,i):Dp(t,e,n,!1,s,i)}function Dp(t,e,n,s,i,r){if(!e)throw Error("Invalid event type");var o=Wi(i)?!!i.capture:!!i,c=bl(t);if(c||(t[wl]=c=new Mo(t)),n=c.add(e,n,s,o,r),n.proxy)return n;if(s=XT(),n.proxy=s,s.src=t,s.listener=n,t.addEventListener)VT||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),s,i);else if(t.attachEvent)t.attachEvent(Op(e.toString()),s);else if(t.addListener&&t.removeListener)t.addListener(s);else throw Error("addEventListener and attachEvent are unavailable.");return n}function XT(){function t(n){return e.call(t.src,t.listener,n)}const e=JT;return t}function Np(t,e,n,s,i){if(Array.isArray(e)){for(var r=0;r<e.length;r++)Np(t,e[r],n,s,i);return null}return n=El(n),t&&t[Gi]?t.O(e,n,Wi(s)?!!s.capture:!!s,i):Dp(t,e,n,!0,s,i)}function Pp(t,e,n,s,i){if(Array.isArray(e))for(var r=0;r<e.length;r++)Pp(t,e[r],n,s,i);else s=Wi(s)?!!s.capture:!!s,n=El(n),t&&t[Gi]?(t=t.i,e=String(e).toString(),e in t.g&&(r=t.g[e],n=gc(r,n,s,i),-1<n&&(Oo(r[n]),Array.prototype.splice.call(r,n,1),r.length==0&&(delete t.g[e],t.h--)))):t&&(t=bl(t))&&(e=t.g[e.toString()],t=-1,e&&(t=gc(e,n,s,i)),(n=-1<t?e[t]:null)&&vl(n))}function vl(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Gi])pc(e.i,t);else{var n=t.type,s=t.proxy;e.removeEventListener?e.removeEventListener(n,s,t.capture):e.detachEvent?e.detachEvent(Op(n),s):e.addListener&&e.removeListener&&e.removeListener(s),(n=bl(e))?(pc(n,t),n.h==0&&(n.src=null,e[wl]=null)):Oo(t)}}}function Op(t){return t in Ba?Ba[t]:Ba[t]="on"+t}function JT(t,e){if(t.ba)t=!0;else{e=new xi(e,this);var n=t.listener,s=t.ha||t.src;t.ea&&vl(t),t=n.call(s,e)}return t}function bl(t){return t=t[wl],t instanceof Mo?t:null}var Fa="__closure_events_fn_"+(1e9*Math.random()>>>0);function El(t){return typeof t=="function"?t:(t[Fa]||(t[Fa]=function(e){return t.handleEvent(e)}),t[Fa])}function Be(){kn.call(this),this.i=new Mo(this),this.P=this,this.I=null}Ve(Be,kn);Be.prototype[Gi]=!0;Be.prototype.removeEventListener=function(t,e,n,s){Pp(this,t,e,n,s)};function $e(t,e){var n,s=t.I;if(s)for(n=[];s;s=s.I)n.push(s);if(t=t.P,s=e.type||e,typeof e=="string")e=new Xe(e,t);else if(e instanceof Xe)e.target=e.target||t;else{var i=e;e=new Xe(s,t),xp(e,i)}if(i=!0,n)for(var r=n.length-1;0<=r;r--){var o=e.g=n[r];i=_r(o,s,!0,e)&&i}if(o=e.g=t,i=_r(o,s,!0,e)&&i,i=_r(o,s,!1,e)&&i,n)for(r=0;r<n.length;r++)o=e.g=n[r],i=_r(o,s,!1,e)&&i}Be.prototype.M=function(){if(Be.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],s=0;s<n.length;s++)Oo(n[s]);delete t.g[e],t.h--}}this.I=null};Be.prototype.N=function(t,e,n,s){return this.i.add(String(t),e,!1,n,s)};Be.prototype.O=function(t,e,n,s){return this.i.add(String(t),e,!0,n,s)};function _r(t,e,n,s){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,r=0;r<e.length;++r){var o=e[r];if(o&&!o.ba&&o.capture==n){var c=o.listener,u=o.ha||o.src;o.ea&&pc(t.i,o),i=c.call(u,s)!==!1&&i}}return i&&!s.defaultPrevented}var _l=W.JSON.stringify;function ZT(){var t=Bp;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class eC{constructor(){this.h=this.g=null}add(e,n){const s=Mp.get();s.set(e,n),this.h?this.h.next=s:this.g=s,this.h=s}}var Mp=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new tC,t=>t.reset());class tC{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function nC(t){W.setTimeout(()=>{throw t},0)}function Lp(t,e){mc||sC(),yc||(mc(),yc=!0),Bp.add(t,e)}var mc;function sC(){var t=W.Promise.resolve(void 0);mc=function(){t.then(iC)}}var yc=!1,Bp=new eC;function iC(){for(var t;t=ZT();){try{t.h.call(t.g)}catch(n){nC(n)}var e=Mp;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}yc=!1}function Lo(t,e){Be.call(this),this.h=t||1,this.g=e||W,this.j=Qe(this.lb,this),this.l=Date.now()}Ve(Lo,Be);B=Lo.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),$e(this,"tick"),this.ca&&(Il(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Il(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){Lo.X.M.call(this),Il(this),delete this.g};function Tl(t,e,n){if(typeof t=="function")n&&(t=Qe(t,n));else if(t&&typeof t.handleEvent=="function")t=Qe(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:W.setTimeout(t,e||0)}function Fp(t){t.g=Tl(()=>{t.g=null,t.i&&(t.i=!1,Fp(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class rC extends kn{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Fp(this)}M(){super.M(),this.g&&(W.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ri(t){kn.call(this),this.h=t,this.g={}}Ve(Ri,kn);var qh=[];function Up(t,e,n,s){Array.isArray(n)||(n&&(qh[0]=n.toString()),n=qh);for(var i=0;i<n.length;i++){var r=Rp(e,n[i],s||t.handleEvent,!1,t.h||t);if(!r)break;t.g[r.key]=r}}function $p(t){yl(t.g,function(e,n){this.g.hasOwnProperty(n)&&vl(e)},t),t.g={}}Ri.prototype.M=function(){Ri.X.M.call(this),$p(this)};Ri.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Bo(){this.g=!0}Bo.prototype.Aa=function(){this.g=!1};function oC(t,e,n,s,i,r){t.info(function(){if(t.g)if(r)for(var o="",c=r.split("&"),u=0;u<c.length;u++){var h=c[u].split("=");if(1<h.length){var f=h[0];h=h[1];var m=f.split("_");o=2<=m.length&&m[1]=="type"?o+(f+"="+h+"&"):o+(f+"=redacted&")}}else o=null;else o=r;return"XMLHTTP REQ ("+s+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function aC(t,e,n,s,i,r,o){t.info(function(){return"XMLHTTP RESP ("+s+") [ attempt "+i+"]: "+e+`
`+n+`
`+r+" "+o})}function gs(t,e,n,s){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+lC(t,n)+(s?" "+s:"")})}function cC(t,e){t.info(function(){return"TIMEOUT: "+e})}Bo.prototype.info=function(){};function lC(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var s=n[t];if(!(2>s.length)){var i=s[1];if(Array.isArray(i)&&!(1>i.length)){var r=i[0];if(r!="noop"&&r!="stop"&&r!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return _l(n)}catch{return e}}var ns={},zh=null;function Fo(){return zh=zh||new Be}ns.Pa="serverreachability";function Vp(t){Xe.call(this,ns.Pa,t)}Ve(Vp,Xe);function Di(t){const e=Fo();$e(e,new Vp(e))}ns.STAT_EVENT="statevent";function jp(t,e){Xe.call(this,ns.STAT_EVENT,t),this.stat=e}Ve(jp,Xe);function it(t){const e=Fo();$e(e,new jp(e,t))}ns.Qa="timingevent";function Hp(t,e){Xe.call(this,ns.Qa,t),this.size=e}Ve(Hp,Xe);function Yi(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return W.setTimeout(function(){t()},e)}var Uo={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},qp={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Cl(){}Cl.prototype.h=null;function Kh(t){return t.h||(t.h=t.i())}function zp(){}var Qi={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Al(){Xe.call(this,"d")}Ve(Al,Xe);function Sl(){Xe.call(this,"c")}Ve(Sl,Xe);var wc;function $o(){}Ve($o,Cl);$o.prototype.g=function(){return new XMLHttpRequest};$o.prototype.i=function(){return{}};wc=new $o;function Xi(t,e,n,s){this.l=t,this.j=e,this.m=n,this.U=s||1,this.S=new Ri(this),this.O=uC,t=dc?125:void 0,this.T=new Lo(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new Kp}function Kp(){this.i=null,this.g="",this.h=!1}var uC=45e3,vc={},no={};B=Xi.prototype;B.setTimeout=function(t){this.O=t};function bc(t,e,n){t.K=1,t.v=jo(nn(e)),t.s=n,t.P=!0,Wp(t,null)}function Wp(t,e){t.F=Date.now(),Ji(t),t.A=nn(t.v);var n=t.A,s=t.U;Array.isArray(s)||(s=[String(s)]),tg(n.i,"t",s),t.C=0,n=t.l.H,t.h=new Kp,t.g=_g(t.l,n?e:null,!t.s),0<t.N&&(t.L=new rC(Qe(t.La,t,t.g),t.N)),Up(t.S,t.g,"readystatechange",t.ib),e=t.H?kp(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),Di(),oC(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&Xt(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const f=Xt(this.g);var e=this.g.Ea();const m=this.g.aa();if(!(3>f)&&(f!=3||dc||this.g&&(this.h.h||this.g.fa()||Qh(this.g)))){this.I||f!=4||e==7||(e==8||0>=m?Di(3):Di(2)),Vo(this);var n=this.g.aa();this.Y=n;t:if(Gp(this)){var s=Qh(this.g);t="";var i=s.length,r=Xt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){jn(this),pi(this);var o="";break t}this.h.i=new W.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(s[e],{stream:r&&e==i-1});s.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,aC(this.j,this.u,this.A,this.m,this.U,f,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var c,u=this.g;if((c=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!eo(c)){var h=c;break t}}h=null}if(n=h)gs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ec(this,n);else{this.i=!1,this.o=3,it(12),jn(this),pi(this);break e}}this.P?(Yp(this,f,o),dc&&this.i&&f==3&&(Up(this.S,this.T,"tick",this.hb),this.T.start())):(gs(this.j,this.m,o,null),Ec(this,o)),f==4&&jn(this),this.i&&!this.I&&(f==4?wg(this.l,this):(this.i=!1,Ji(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,it(12)):(this.o=0,it(13)),jn(this),pi(this)}}}catch{}finally{}};function Gp(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function Yp(t,e,n){let s=!0,i;for(;!t.I&&t.C<n.length;)if(i=hC(t,n),i==no){e==4&&(t.o=4,it(14),s=!1),gs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==vc){t.o=4,it(15),gs(t.j,t.m,n,"[Invalid Chunk]"),s=!1;break}else gs(t.j,t.m,i,null),Ec(t,i);Gp(t)&&i!=no&&i!=vc&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,it(16),s=!1),t.i=t.i&&s,s?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),Ol(e),e.K=!0,it(11))):(gs(t.j,t.m,n,"[Invalid Chunked Response]"),jn(t),pi(t))}B.hb=function(){if(this.g){var t=Xt(this.g),e=this.g.fa();this.C<e.length&&(Vo(this),Yp(this,t,e),this.i&&t!=4&&Ji(this))}};function hC(t,e){var n=t.C,s=e.indexOf(`
`,n);return s==-1?no:(n=Number(e.substring(n,s)),isNaN(n)?vc:(s+=1,s+n>e.length?no:(e=e.substr(s,n),t.C=s+n,e)))}B.cancel=function(){this.I=!0,jn(this)};function Ji(t){t.V=Date.now()+t.O,Qp(t,t.O)}function Qp(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Yi(Qe(t.gb,t),e)}function Vo(t){t.B&&(W.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(cC(this.j,this.A),this.K!=2&&(Di(),it(17)),jn(this),this.o=2,pi(this)):Qp(this,this.V-t)};function pi(t){t.l.G==0||t.I||wg(t.l,t)}function jn(t){Vo(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Il(t.T),$p(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ec(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||_c(n.h,t))){if(!t.J&&_c(n.h,t)&&n.G==3){try{var s=n.Fa.g.parse(e)}catch{s=null}if(Array.isArray(s)&&s.length==3){var i=s;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)ro(n),zo(n);else break e;Pl(n),it(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Yi(Qe(n.cb,n),6e3));if(1>=ig(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else Hn(n,11)}else if((t.J||n.g==t)&&ro(n),!eo(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let h=i[e];if(n.T=h[0],h=h[1],n.G==2)if(h[0]=="c"){n.I=h[1],n.ka=h[2];const f=h[3];f!=null&&(n.ma=f,n.j.info("VER="+n.ma));const m=h[4];m!=null&&(n.Ca=m,n.j.info("SVER="+n.Ca));const w=h[5];w!=null&&typeof w=="number"&&0<w&&(s=1.5*w,n.J=s,n.j.info("backChannelRequestTimeoutMs_="+s)),s=n;const _=t.g;if(_){const N=_.g?_.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(N){var r=s.h;r.g||N.indexOf("spdy")==-1&&N.indexOf("quic")==-1&&N.indexOf("h2")==-1||(r.j=r.l,r.g=new Set,r.h&&(kl(r,r.h),r.h=null))}if(s.D){const A=_.g?_.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(s.za=A,_e(s.F,s.D,A))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),s=n;var o=t;if(s.sa=Eg(s,s.H?s.ka:null,s.V),o.J){rg(s.h,o);var c=o,u=s.J;u&&c.setTimeout(u),c.B&&(Vo(c),Ji(c)),s.g=o}else mg(s);0<n.i.length&&Ko(n)}else h[0]!="stop"&&h[0]!="close"||Hn(n,7);else n.G==3&&(h[0]=="stop"||h[0]=="close"?h[0]=="stop"?Hn(n,7):Nl(n):h[0]!="noop"&&n.l&&n.l.wa(h),n.A=0)}}Di(4)}catch{}}function dC(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(No(t)){for(var e=[],n=t.length,s=0;s<n;s++)e.push(t[s]);return e}e=[],n=0;for(s in t)e[n++]=t[s];return e}function fC(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(No(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const s in t)e[n++]=s;return e}}}function Xp(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(No(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=fC(t),s=dC(t),i=s.length,r=0;r<i;r++)e.call(void 0,s[r],n&&n[r],t)}var Jp=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function pC(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var s=t[n].indexOf("="),i=null;if(0<=s){var r=t[n].substring(0,s);i=t[n].substring(s+1)}else r=t[n];e(r,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gn(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Gn){this.h=e!==void 0?e:t.h,so(this,t.j),this.s=t.s,this.g=t.g,io(this,t.m),this.l=t.l,e=t.i;var n=new Ni;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),Wh(this,n),this.o=t.o}else t&&(n=String(t).match(Jp))?(this.h=!!e,so(this,n[1]||"",!0),this.s=ri(n[2]||""),this.g=ri(n[3]||"",!0),io(this,n[4]),this.l=ri(n[5]||"",!0),Wh(this,n[6]||"",!0),this.o=ri(n[7]||"")):(this.h=!!e,this.i=new Ni(null,this.h))}Gn.prototype.toString=function(){var t=[],e=this.j;e&&t.push(oi(e,Gh,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(oi(e,Gh,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(oi(n,n.charAt(0)=="/"?yC:mC,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",oi(n,vC)),t.join("")};function nn(t){return new Gn(t)}function so(t,e,n){t.j=n?ri(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function io(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Wh(t,e,n){e instanceof Ni?(t.i=e,bC(t.i,t.h)):(n||(e=oi(e,wC)),t.i=new Ni(e,t.h))}function _e(t,e,n){t.i.set(e,n)}function jo(t){return _e(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function ri(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function oi(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,gC),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function gC(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gh=/[#\/\?@]/g,mC=/[#\?:]/g,yC=/[#\?]/g,wC=/[#\?@]/g,vC=/#/g;function Ni(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function xn(t){t.g||(t.g=new Map,t.h=0,t.i&&pC(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=Ni.prototype;B.add=function(t,e){xn(this),this.i=null,t=js(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function Zp(t,e){xn(t),e=js(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function eg(t,e){return xn(t),e=js(t,e),t.g.has(e)}B.forEach=function(t,e){xn(this),this.g.forEach(function(n,s){n.forEach(function(i){t.call(e,i,s,this)},this)},this)};B.oa=function(){xn(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let s=0;s<e.length;s++){const i=t[s];for(let r=0;r<i.length;r++)n.push(e[s])}return n};B.W=function(t){xn(this);let e=[];if(typeof t=="string")eg(this,t)&&(e=e.concat(this.g.get(js(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return xn(this),this.i=null,t=js(this,t),eg(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function tg(t,e,n){Zp(t,e),0<n.length&&(t.i=null,t.g.set(js(t,e),gl(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var s=e[n];const r=encodeURIComponent(String(s)),o=this.W(s);for(s=0;s<o.length;s++){var i=r;o[s]!==""&&(i+="="+encodeURIComponent(String(o[s]))),t.push(i)}}return this.i=t.join("&")};function js(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function bC(t,e){e&&!t.j&&(xn(t),t.i=null,t.g.forEach(function(n,s){var i=s.toLowerCase();s!=i&&(Zp(this,s),tg(this,i,n))},t)),t.j=e}var EC=class{constructor(e,n){this.h=e,this.g=n}};function ng(t){this.l=t||_C,W.PerformanceNavigationTiming?(t=W.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(W.g&&W.g.Ga&&W.g.Ga()&&W.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var _C=10;function sg(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function ig(t){return t.h?1:t.g?t.g.size:0}function _c(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function kl(t,e){t.g?t.g.add(e):t.h=e}function rg(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}ng.prototype.cancel=function(){if(this.i=og(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function og(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return gl(t.i)}function xl(){}xl.prototype.stringify=function(t){return W.JSON.stringify(t,void 0)};xl.prototype.parse=function(t){return W.JSON.parse(t,void 0)};function IC(){this.g=new xl}function TC(t,e,n){const s=n||"";try{Xp(t,function(i,r){let o=i;Wi(i)&&(o=_l(i)),e.push(s+r+"="+encodeURIComponent(o))})}catch(i){throw e.push(s+"type="+encodeURIComponent("_badmap")),i}}function CC(t,e){const n=new Bo;if(W.Image){const s=new Image;s.onload=Er(Ir,n,s,"TestLoadImage: loaded",!0,e),s.onerror=Er(Ir,n,s,"TestLoadImage: error",!1,e),s.onabort=Er(Ir,n,s,"TestLoadImage: abort",!1,e),s.ontimeout=Er(Ir,n,s,"TestLoadImage: timeout",!1,e),W.setTimeout(function(){s.ontimeout&&s.ontimeout()},1e4),s.src=t}else e(!1)}function Ir(t,e,n,s,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(s)}catch{}}function Zi(t){this.l=t.ac||null,this.j=t.jb||!1}Ve(Zi,Cl);Zi.prototype.g=function(){return new Ho(this.l,this.j)};Zi.prototype.i=function(t){return function(){return t}}({});function Ho(t,e){Be.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=Rl,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Ve(Ho,Be);var Rl=0;B=Ho.prototype;B.open=function(t,e){if(this.readyState!=Rl)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Pi(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||W).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,er(this)),this.readyState=Rl};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Pi(this)),this.g&&(this.readyState=3,Pi(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof W.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;ag(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function ag(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?er(this):Pi(this),this.readyState==3&&ag(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,er(this))};B.Ua=function(t){this.g&&(this.response=t,er(this))};B.ga=function(){this.g&&er(this)};function er(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Pi(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Pi(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(Ho.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var AC=W.JSON.parse;function Ce(t){Be.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=cg,this.K=this.L=!1}Ve(Ce,Be);var cg="",SC=/^https?$/i,kC=["POST","PUT"];B=Ce.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,s){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():wc.g(),this.C=this.u?Kh(this.u):Kh(wc),this.g.onreadystatechange=Qe(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(r){Yh(this,r);return}if(t=n||"",n=new Map(this.headers),s)if(Object.getPrototypeOf(s)===Object.prototype)for(var i in s)n.set(i,s[i]);else if(typeof s.keys=="function"&&typeof s.get=="function")for(const r of s.keys())n.set(r,s.get(r));else throw Error("Unknown input type for opt_headers: "+String(s));s=Array.from(n.keys()).find(r=>r.toLowerCase()=="content-type"),i=W.FormData&&t instanceof W.FormData,!(0<=Tp(kC,e))||s||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[r,o]of n)this.g.setRequestHeader(r,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{hg(this),0<this.B&&((this.K=xC(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Qe(this.qa,this)):this.A=Tl(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(r){Yh(this,r)}};function xC(t){return Rs&&KT()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof pl<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,$e(this,"timeout"),this.abort(8))};function Yh(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,lg(t),qo(t)}function lg(t){t.D||(t.D=!0,$e(t,"complete"),$e(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,$e(this,"complete"),$e(this,"abort"),qo(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),qo(this,!0)),Ce.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?ug(this):this.fb())};B.fb=function(){ug(this)};function ug(t){if(t.h&&typeof pl<"u"&&(!t.C[1]||Xt(t)!=4||t.aa()!=2)){if(t.v&&Xt(t)==4)Tl(t.Ha,0,t);else if($e(t,"readystatechange"),Xt(t)==4){t.h=!1;try{const c=t.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var s;if(s=c===0){var i=String(t.H).match(Jp)[1]||null;if(!i&&W.self&&W.self.location){var r=W.self.location.protocol;i=r.substr(0,r.length-1)}s=!SC.test(i?i.toLowerCase():"")}n=s}if(n)$e(t,"complete"),$e(t,"success");else{t.m=6;try{var o=2<Xt(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",lg(t)}}finally{qo(t)}}}}function qo(t,e){if(t.g){hg(t);const n=t.g,s=t.C[0]?Zr:null;t.g=null,t.C=null,e||$e(t,"ready");try{n.onreadystatechange=s}catch{}}}function hg(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(W.clearTimeout(t.A),t.A=null)}function Xt(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<Xt(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),AC(e)}};function Qh(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case cg:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function dg(t){let e="";return yl(t,function(n,s){e+=s,e+=":",e+=n,e+=`\r
`}),e}function Dl(t,e,n){e:{for(s in n){var s=!1;break e}s=!0}s||(n=dg(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):_e(t,e,n))}function si(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function fg(t){this.Ca=0,this.i=[],this.j=new Bo,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=si("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=si("baseRetryDelayMs",5e3,t),this.bb=si("retryDelaySeedMs",1e4,t),this.$a=si("forwardChannelMaxRetries",2,t),this.ta=si("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new ng(t&&t.concurrentRequestLimit),this.Fa=new IC,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=fg.prototype;B.ma=8;B.G=1;function Nl(t){if(pg(t),t.G==3){var e=t.U++,n=nn(t.F);_e(n,"SID",t.I),_e(n,"RID",e),_e(n,"TYPE","terminate"),tr(t,n),e=new Xi(t,t.j,e,void 0),e.K=2,e.v=jo(nn(n)),n=!1,W.navigator&&W.navigator.sendBeacon&&(n=W.navigator.sendBeacon(e.v.toString(),"")),!n&&W.Image&&(new Image().src=e.v,n=!0),n||(e.g=_g(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ji(e)}bg(t)}function zo(t){t.g&&(Ol(t),t.g.cancel(),t.g=null)}function pg(t){zo(t),t.u&&(W.clearTimeout(t.u),t.u=null),ro(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&W.clearTimeout(t.m),t.m=null)}function Ko(t){sg(t.h)||t.m||(t.m=!0,Lp(t.Ja,t),t.C=0)}function RC(t,e){return ig(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Yi(Qe(t.Ja,t,e),vg(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Xi(this,this.j,t,void 0);let r=this.s;if(this.S&&(r?(r=kp(r),xp(r,this.S)):r=this.S),this.o!==null||this.N||(i.H=r,r=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var s=this.i[n];if("__data__"in s.g&&(s=s.g.__data__,typeof s=="string")){s=s.length;break t}s=void 0}if(s===void 0)break;if(e+=s,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=gg(this,i,e),n=nn(this.F),_e(n,"RID",t),_e(n,"CVER",22),this.D&&_e(n,"X-HTTP-Session-Id",this.D),tr(this,n),r&&(this.N?e="headers="+encodeURIComponent(String(dg(r)))+"&"+e:this.o&&Dl(n,this.o,r)),kl(this.h,i),this.Ya&&_e(n,"TYPE","init"),this.O?(_e(n,"$req",e),_e(n,"SID","null"),i.Z=!0,bc(i,n,null)):bc(i,n,e),this.G=2}}else this.G==3&&(t?Xh(this,t):this.i.length==0||sg(this.h)||Xh(this))};function Xh(t,e){var n;e?n=e.m:n=t.U++;const s=nn(t.F);_e(s,"SID",t.I),_e(s,"RID",n),_e(s,"AID",t.T),tr(t,s),t.o&&t.s&&Dl(s,t.o,t.s),n=new Xi(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=gg(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),kl(t.h,n),bc(n,s,e)}function tr(t,e){t.ia&&yl(t.ia,function(n,s){_e(e,s,n)}),t.l&&Xp({},function(n,s){_e(e,s,n)})}function gg(t,e,n){n=Math.min(t.i.length,n);var s=t.l?Qe(t.l.Ra,t.l,t):null;e:{var i=t.i;let r=-1;for(;;){const o=["count="+n];r==-1?0<n?(r=i[0].h,o.push("ofs="+r)):r=0:o.push("ofs="+r);let c=!0;for(let u=0;u<n;u++){let h=i[u].h;const f=i[u].g;if(h-=r,0>h)r=Math.max(0,i[u].h-100),c=!1;else try{TC(f,o,"req"+h+"_")}catch{s&&s(f)}}if(c){s=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,s}function mg(t){t.g||t.u||(t.Z=1,Lp(t.Ia,t),t.A=0)}function Pl(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Yi(Qe(t.Ia,t),vg(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,yg(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Yi(Qe(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,it(10),zo(this),yg(this))};function Ol(t){t.B!=null&&(W.clearTimeout(t.B),t.B=null)}function yg(t){t.g=new Xi(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=nn(t.sa);_e(e,"RID","rpc"),_e(e,"SID",t.I),_e(e,"CI",t.L?"0":"1"),_e(e,"AID",t.T),_e(e,"TYPE","xmlhttp"),tr(t,e),t.o&&t.s&&Dl(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=jo(nn(e)),n.s=null,n.P=!0,Wp(n,t)}B.cb=function(){this.v!=null&&(this.v=null,zo(this),Pl(this),it(19))};function ro(t){t.v!=null&&(W.clearTimeout(t.v),t.v=null)}function wg(t,e){var n=null;if(t.g==e){ro(t),Ol(t),t.g=null;var s=2}else if(_c(t.h,e))n=e.D,rg(t.h,e),s=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(s==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;s=Fo(),$e(s,new Hp(s,n)),Ko(t)}else mg(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(s==1&&RC(t,e)||s==2&&Pl(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:Hn(t,5);break;case 4:Hn(t,10);break;case 3:Hn(t,6);break;default:Hn(t,2)}}}function vg(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function Hn(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var s=Qe(t.kb,t);n||(n=new Gn("//www.google.com/images/cleardot.gif"),W.location&&W.location.protocol=="http"||so(n,"https"),jo(n)),CC(n.toString(),s)}else it(2);t.G=0,t.l&&t.l.va(e),bg(t),pg(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),it(2)):(this.j.info("Failed to ping google.com"),it(1))};function bg(t){if(t.G=0,t.la=[],t.l){const e=og(t.h);(e.length!=0||t.i.length!=0)&&($h(t.la,e),$h(t.la,t.i),t.h.i.length=0,gl(t.i),t.i.length=0),t.l.ua()}}function Eg(t,e,n){var s=n instanceof Gn?nn(n):new Gn(n,void 0);if(s.g!="")e&&(s.g=e+"."+s.g),io(s,s.m);else{var i=W.location;s=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var r=new Gn(null,void 0);s&&so(r,s),e&&(r.g=e),i&&io(r,i),n&&(r.l=n),s=r}return n=t.D,e=t.za,n&&e&&_e(s,n,e),_e(s,"VER",t.ma),tr(t,s),s}function _g(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Ce(new Zi({jb:!0})):new Ce(t.ra),e.Ka(t.H),e}function Ig(){}B=Ig.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function oo(){if(Rs&&!(10<=Number(WT)))throw Error("Environmental error: no available transport.")}oo.prototype.g=function(t,e){return new wt(t,e)};function wt(t,e){Be.call(this),this.g=new fg(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!eo(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!eo(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hs(this)}Ve(wt,Be);wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;it(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=Eg(t,null,t.V),Ko(t)};wt.prototype.close=function(){Nl(this.g)};wt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=_l(t),t=n);e.i.push(new EC(e.ab++,t)),e.G==3&&Ko(e)};wt.prototype.M=function(){this.g.l=null,delete this.j,Nl(this.g),delete this.g,wt.X.M.call(this)};function Tg(t){Al.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}Ve(Tg,Al);function Cg(){Sl.call(this),this.status=1}Ve(Cg,Sl);function Hs(t){this.g=t}Ve(Hs,Ig);Hs.prototype.xa=function(){$e(this.g,"a")};Hs.prototype.wa=function(t){$e(this.g,new Tg(t))};Hs.prototype.va=function(t){$e(this.g,new Cg)};Hs.prototype.ua=function(){$e(this.g,"b")};oo.prototype.createWebChannel=oo.prototype.g;wt.prototype.send=wt.prototype.u;wt.prototype.open=wt.prototype.m;wt.prototype.close=wt.prototype.close;Uo.NO_ERROR=0;Uo.TIMEOUT=8;Uo.HTTP_ERROR=6;qp.COMPLETE="complete";zp.EventType=Qi;Qi.OPEN="a";Qi.CLOSE="b";Qi.ERROR="c";Qi.MESSAGE="d";Be.prototype.listen=Be.prototype.N;Ce.prototype.listenOnce=Ce.prototype.O;Ce.prototype.getLastError=Ce.prototype.Oa;Ce.prototype.getLastErrorCode=Ce.prototype.Ea;Ce.prototype.getStatus=Ce.prototype.aa;Ce.prototype.getResponseJson=Ce.prototype.Sa;Ce.prototype.getResponseText=Ce.prototype.fa;Ce.prototype.send=Ce.prototype.da;Ce.prototype.setWithCredentials=Ce.prototype.Ka;var DC=function(){return new oo},NC=function(){return Fo()},Ua=Uo,PC=qp,OC=ns,Jh={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},MC=Zi,Tr=zp,LC=Ce;const Zh="@firebase/firestore";/**
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
 */class qe{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}qe.UNAUTHENTICATED=new qe(null),qe.GOOGLE_CREDENTIALS=new qe("google-credentials-uid"),qe.FIRST_PARTY=new qe("first-party-uid"),qe.MOCK_USER=new qe("mock-user");/**
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
 */let qs="9.20.0";/**
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
 */const es=new sl("@firebase/firestore");function ed(){return es.logLevel}function U(t,...e){if(es.logLevel<=ue.DEBUG){const n=e.map(Ml);es.debug(`Firestore (${qs}): ${t}`,...n)}}function sn(t,...e){if(es.logLevel<=ue.ERROR){const n=e.map(Ml);es.error(`Firestore (${qs}): ${t}`,...n)}}function ao(t,...e){if(es.logLevel<=ue.WARN){const n=e.map(Ml);es.warn(`Firestore (${qs}): ${t}`,...n)}}function Ml(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function z(t="Unexpected state"){const e=`FIRESTORE (${qs}) INTERNAL ASSERTION FAILED: `+t;throw sn(e),new Error(e)}function ve(t,e){t||z()}function Z(t,e){return t}/**
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
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class L extends cn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Yn{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class Ag{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class BC{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(qe.UNAUTHENTICATED))}shutdown(){}}class FC{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class UC{constructor(e){this.t=e,this.currentUser=qe.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let s=this.i;const i=u=>this.i!==s?(s=this.i,n(u)):Promise.resolve();let r=new Yn;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new Yn,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=r;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},c=u=>{U("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>c(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?c(u):(U("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new Yn)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(s=>this.i!==e?(U("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):s?(ve(typeof s.accessToken=="string"),new Ag(s.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return ve(e===null||typeof e=="string"),new qe(e)}}class $C{constructor(e,n,s){this.h=e,this.l=n,this.m=s,this.type="FirstParty",this.user=qe.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class VC{constructor(e,n,s){this.h=e,this.l=n,this.m=s}getToken(){return Promise.resolve(new $C(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(qe.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class jC{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class HC{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const s=r=>{r.error!=null&&U("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${r.error.message}`);const o=r.token!==this.T;return this.T=r.token,U("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(r.token):Promise.resolve()};this.o=r=>{e.enqueueRetryable(()=>s(r))};const i=r=>{U("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=r,this.appCheck.addTokenListener(this.o)};this.I.onInit(r=>i(r)),setTimeout(()=>{if(!this.appCheck){const r=this.I.getImmediate({optional:!0});r?i(r):U("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(ve(typeof n.token=="string"),this.T=n.token,new jC(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function qC(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let s=0;s<t;s++)n[s]=Math.floor(256*Math.random());return n}/**
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
 */class Sg{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let s="";for(;s.length<20;){const i=qC(40);for(let r=0;r<i.length;++r)s.length<20&&i[r]<n&&(s+=e.charAt(i[r]%e.length))}return s}}function de(t,e){return t<e?-1:t>e?1:0}function Ds(t,e,n){return t.length===e.length&&t.every((s,i)=>n(s,e[i]))}/**
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
 */class Ne{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new L(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new L(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ne.fromMillis(Date.now())}static fromDate(e){return Ne.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),s=Math.floor(1e6*(e-1e3*n));return new Ne(n,s)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class X{constructor(e){this.timestamp=e}static fromTimestamp(e){return new X(e)}static min(){return new X(new Ne(0,0))}static max(){return new X(new Ne(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class Oi{constructor(e,n,s){n===void 0?n=0:n>e.length&&z(),s===void 0?s=e.length-n:s>e.length-n&&z(),this.segments=e,this.offset=n,this.len=s}get length(){return this.len}isEqual(e){return Oi.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Oi?e.forEach(s=>{n.push(s)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,s=this.limit();n<s;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const s=Math.min(e.length,n.length);for(let i=0;i<s;i++){const r=e.get(i),o=n.get(i);if(r<o)return-1;if(r>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class we extends Oi{construct(e,n,s){return new we(e,n,s)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const s of e){if(s.indexOf("//")>=0)throw new L(T.INVALID_ARGUMENT,`Invalid segment (${s}). Paths must not contain // in them.`);n.push(...s.split("/").filter(i=>i.length>0))}return new we(n)}static emptyPath(){return new we([])}}const zC=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ge extends Oi{construct(e,n,s){return new Ge(e,n,s)}static isValidIdentifier(e){return zC.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ge.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ge(["__name__"])}static fromServerFormat(e){const n=[];let s="",i=0;const r=()=>{if(s.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(s),s=""};let o=!1;for(;i<e.length;){const c=e[i];if(c==="\\"){if(i+1===e.length)throw new L(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new L(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);s+=u,i+=2}else c==="`"?(o=!o,i++):c!=="."||o?(s+=c,i++):(r(),i++)}if(r(),o)throw new L(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ge(n)}static emptyPath(){return new Ge([])}}/**
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
 */class j{constructor(e){this.path=e}static fromPath(e){return new j(we.fromString(e))}static fromName(e){return new j(we.fromString(e).popFirst(5))}static empty(){return new j(we.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&we.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return we.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new j(new we(e.slice()))}}function KC(t,e){const n=t.toTimestamp().seconds,s=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(s===1e9?new Ne(n+1,0):new Ne(n,s));return new Cn(i,j.empty(),e)}function WC(t){return new Cn(t.readTime,t.key,-1)}class Cn{constructor(e,n,s){this.readTime=e,this.documentKey=n,this.largestBatchId=s}static min(){return new Cn(X.min(),j.empty(),-1)}static max(){return new Cn(X.max(),j.empty(),-1)}}function GC(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=j.comparator(t.documentKey,e.documentKey),n!==0?n:de(t.largestBatchId,e.largestBatchId))}/**
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
 */const YC="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class QC{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function nr(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==YC)throw t;U("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class R{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&z(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new R((s,i)=>{this.nextCallback=r=>{this.wrapSuccess(e,r).next(s,i)},this.catchCallback=r=>{this.wrapFailure(n,r).next(s,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof R?n:R.resolve(n)}catch(n){return R.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):R.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):R.reject(n)}static resolve(e){return new R((n,s)=>{n(e)})}static reject(e){return new R((n,s)=>{s(e)})}static waitFor(e){return new R((n,s)=>{let i=0,r=0,o=!1;e.forEach(c=>{++i,c.next(()=>{++r,o&&r===i&&n()},u=>s(u))}),o=!0,r===i&&n()})}static or(e){let n=R.resolve(!1);for(const s of e)n=n.next(i=>i?R.resolve(i):s());return n}static forEach(e,n){const s=[];return e.forEach((i,r)=>{s.push(n.call(this,i,r))}),this.waitFor(s)}static mapArray(e,n){return new R((s,i)=>{const r=e.length,o=new Array(r);let c=0;for(let u=0;u<r;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++c,c===r&&s(o)},f=>i(f))}})}static doWhile(e,n){return new R((s,i)=>{const r=()=>{e()===!0?n().next(()=>{r()},i):s()};r()})}}function sr(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class Ll{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=s=>this.ot(s),this.ut=s=>n.writeSequenceNumber(s))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ll.ct=-1;function Wo(t){return t==null}function co(t){return t===0&&1/t==-1/0}function XC(t){return typeof t=="number"&&Number.isInteger(t)&&!co(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function td(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function zs(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function kg(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class Me{constructor(e,n){this.comparator=e,this.root=n||Ue.EMPTY}insert(e,n){return new Me(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Ue.BLACK,null,null))}remove(e){return new Me(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ue.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const s=this.comparator(e,n.key);if(s===0)return n.value;s<0?n=n.left:s>0&&(n=n.right)}return null}indexOf(e){let n=0,s=this.root;for(;!s.isEmpty();){const i=this.comparator(e,s.key);if(i===0)return n+s.left.size;i<0?s=s.left:(n+=s.left.size+1,s=s.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,s)=>(e(n,s),!1))}toString(){const e=[];return this.inorderTraversal((n,s)=>(e.push(`${n}:${s}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Cr(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Cr(this.root,e,this.comparator,!1)}getReverseIterator(){return new Cr(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Cr(this.root,e,this.comparator,!0)}}class Cr{constructor(e,n,s,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=n?s(e.key,n):1,n&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(r===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ue{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Ue.RED,this.left=i??Ue.EMPTY,this.right=r??Ue.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,s,i,r){return new Ue(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Ue.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let s,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Ue.EMPTY;s=i.right.min(),i=i.copy(s.key,s.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ue.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ue.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw z();const e=this.left.check();if(e!==this.right.check())throw z();return e+(this.isRed()?0:1)}}Ue.EMPTY=null,Ue.RED=!0,Ue.BLACK=!1;Ue.EMPTY=new class{constructor(){this.size=0}get key(){throw z()}get value(){throw z()}get color(){throw z()}get left(){throw z()}get right(){throw z()}copy(t,e,n,s,i){return this}insert(t,e,n){return new Ue(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Pe{constructor(e){this.comparator=e,this.data=new Me(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,s)=>(e(n),!1))}forEachInRange(e,n){const s=this.data.getIteratorFrom(e[0]);for(;s.hasNext();){const i=s.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let s;for(s=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();s.hasNext();)if(!e(s.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new nd(this.data.getIterator())}getIteratorFrom(e){return new nd(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(s=>{n=n.add(s)}),n}isEqual(e){if(!(e instanceof Pe)||this.size!==e.size)return!1;const n=this.data.getIterator(),s=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(this.comparator(i,r)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Pe(this.comparator);return n.data=e,n}}class nd{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Rt{constructor(e){this.fields=e,e.sort(Ge.comparator)}static empty(){return new Rt([])}unionWith(e){let n=new Pe(Ge.comparator);for(const s of this.fields)n=n.add(s);for(const s of e)n=n.add(s);return new Rt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ds(this.fields,e.fields,(n,s)=>n.isEqual(s))}}/**
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
 */class JC extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class et{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(s){try{return atob(s)}catch(i){throw typeof DOMException<"u"&&i instanceof DOMException?new JC("Invalid base64 string: "+i):i}}(e);return new et(n)}static fromUint8Array(e){const n=function(s){let i="";for(let r=0;r<s.length;++r)i+=String.fromCharCode(s[r]);return i}(e);return new et(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let s=0;s<e.length;s++)n[s]=e.charCodeAt(s);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}et.EMPTY_BYTE_STRING=new et("");const ZC=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function An(t){if(ve(!!t),typeof t=="string"){let e=0;const n=ZC.exec(t);if(ve(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const s=new Date(t);return{seconds:Math.floor(s.getTime()/1e3),nanos:e}}return{seconds:ke(t.seconds),nanos:ke(t.nanos)}}function ke(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ns(t){return typeof t=="string"?et.fromBase64String(t):et.fromUint8Array(t)}/**
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
 */function xg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function Rg(t){const e=t.mapValue.fields.__previous_value__;return xg(e)?Rg(e):e}function Mi(t){const e=An(t.mapValue.fields.__local_write_time__.timestampValue);return new Ne(e.seconds,e.nanos)}/**
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
 */class eA{constructor(e,n,s,i,r,o,c,u){this.databaseId=e,this.appId=n,this.persistenceKey=s,this.host=i,this.ssl=r,this.forceLongPolling=o,this.autoDetectLongPolling=c,this.useFetchStreams=u}}class Li{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Li("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Li&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const Ar={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ts(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?xg(t)?4:tA(t)?9007199254740991:10:z()}function zt(t,e){if(t===e)return!0;const n=ts(t);if(n!==ts(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Mi(t).isEqual(Mi(e));case 3:return function(s,i){if(typeof s.timestampValue=="string"&&typeof i.timestampValue=="string"&&s.timestampValue.length===i.timestampValue.length)return s.timestampValue===i.timestampValue;const r=An(s.timestampValue),o=An(i.timestampValue);return r.seconds===o.seconds&&r.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(s,i){return Ns(s.bytesValue).isEqual(Ns(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(s,i){return ke(s.geoPointValue.latitude)===ke(i.geoPointValue.latitude)&&ke(s.geoPointValue.longitude)===ke(i.geoPointValue.longitude)}(t,e);case 2:return function(s,i){if("integerValue"in s&&"integerValue"in i)return ke(s.integerValue)===ke(i.integerValue);if("doubleValue"in s&&"doubleValue"in i){const r=ke(s.doubleValue),o=ke(i.doubleValue);return r===o?co(r)===co(o):isNaN(r)&&isNaN(o)}return!1}(t,e);case 9:return Ds(t.arrayValue.values||[],e.arrayValue.values||[],zt);case 10:return function(s,i){const r=s.mapValue.fields||{},o=i.mapValue.fields||{};if(td(r)!==td(o))return!1;for(const c in r)if(r.hasOwnProperty(c)&&(o[c]===void 0||!zt(r[c],o[c])))return!1;return!0}(t,e);default:return z()}}function Bi(t,e){return(t.values||[]).find(n=>zt(n,e))!==void 0}function Ps(t,e){if(t===e)return 0;const n=ts(t),s=ts(e);if(n!==s)return de(n,s);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(t.booleanValue,e.booleanValue);case 2:return function(i,r){const o=ke(i.integerValue||i.doubleValue),c=ke(r.integerValue||r.doubleValue);return o<c?-1:o>c?1:o===c?0:isNaN(o)?isNaN(c)?0:-1:1}(t,e);case 3:return sd(t.timestampValue,e.timestampValue);case 4:return sd(Mi(t),Mi(e));case 5:return de(t.stringValue,e.stringValue);case 6:return function(i,r){const o=Ns(i),c=Ns(r);return o.compareTo(c)}(t.bytesValue,e.bytesValue);case 7:return function(i,r){const o=i.split("/"),c=r.split("/");for(let u=0;u<o.length&&u<c.length;u++){const h=de(o[u],c[u]);if(h!==0)return h}return de(o.length,c.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,r){const o=de(ke(i.latitude),ke(r.latitude));return o!==0?o:de(ke(i.longitude),ke(r.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,r){const o=i.values||[],c=r.values||[];for(let u=0;u<o.length&&u<c.length;++u){const h=Ps(o[u],c[u]);if(h)return h}return de(o.length,c.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,r){if(i===Ar.mapValue&&r===Ar.mapValue)return 0;if(i===Ar.mapValue)return 1;if(r===Ar.mapValue)return-1;const o=i.fields||{},c=Object.keys(o),u=r.fields||{},h=Object.keys(u);c.sort(),h.sort();for(let f=0;f<c.length&&f<h.length;++f){const m=de(c[f],h[f]);if(m!==0)return m;const w=Ps(o[c[f]],u[h[f]]);if(w!==0)return w}return de(c.length,h.length)}(t.mapValue,e.mapValue);default:throw z()}}function sd(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return de(t,e);const n=An(t),s=An(e),i=de(n.seconds,s.seconds);return i!==0?i:de(n.nanos,s.nanos)}function Os(t){return Ic(t)}function Ic(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(s){const i=An(s);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ns(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,j.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(s){let i="[",r=!0;for(const o of s.values||[])r?r=!1:i+=",",i+=Ic(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(s){const i=Object.keys(s.fields||{}).sort();let r="{",o=!0;for(const c of i)o?o=!1:r+=",",r+=`${c}:${Ic(s.fields[c])}`;return r+"}"}(t.mapValue):z();var e,n}function id(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Tc(t){return!!t&&"integerValue"in t}function Bl(t){return!!t&&"arrayValue"in t}function rd(t){return!!t&&"nullValue"in t}function od(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Br(t){return!!t&&"mapValue"in t}function gi(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return zs(t.mapValue.fields,(n,s)=>e.mapValue.fields[n]=gi(s)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=gi(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tA(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class It{constructor(e){this.value=e}static empty(){return new It({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let s=0;s<e.length-1;++s)if(n=(n.mapValue.fields||{})[e.get(s)],!Br(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=gi(n)}setAll(e){let n=Ge.emptyPath(),s={},i=[];e.forEach((o,c)=>{if(!n.isImmediateParentOf(c)){const u=this.getFieldsMap(n);this.applyChanges(u,s,i),s={},i=[],n=c.popLast()}o?s[c.lastSegment()]=gi(o):i.push(c.lastSegment())});const r=this.getFieldsMap(n);this.applyChanges(r,s,i)}delete(e){const n=this.field(e.popLast());Br(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return zt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let s=0;s<e.length;++s){let i=n.mapValue.fields[e.get(s)];Br(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(s)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,s){zs(n,(i,r)=>e[i]=r);for(const i of s)delete e[i]}clone(){return new It(gi(this.value))}}function Dg(t){const e=[];return zs(t.fields,(n,s)=>{const i=new Ge([n]);if(Br(s)){const r=Dg(s.mapValue).fields;if(r.length===0)e.push(i);else for(const o of r)e.push(i.child(o))}else e.push(i)}),new Rt(e)}/**
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
 */class ze{constructor(e,n,s,i,r,o,c){this.key=e,this.documentType=n,this.version=s,this.readTime=i,this.createTime=r,this.data=o,this.documentState=c}static newInvalidDocument(e){return new ze(e,0,X.min(),X.min(),X.min(),It.empty(),0)}static newFoundDocument(e,n,s,i){return new ze(e,1,n,X.min(),s,i,0)}static newNoDocument(e,n){return new ze(e,2,n,X.min(),X.min(),It.empty(),0)}static newUnknownDocument(e,n){return new ze(e,3,n,X.min(),X.min(),It.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=It.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=It.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ze&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ze(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class lo{constructor(e,n){this.position=e,this.inclusive=n}}function ad(t,e,n){let s=0;for(let i=0;i<t.position.length;i++){const r=e[i],o=t.position[i];if(r.field.isKeyField()?s=j.comparator(j.fromName(o.referenceValue),n.key):s=Ps(o,n.data.field(r.field)),r.dir==="desc"&&(s*=-1),s!==0)break}return s}function cd(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!zt(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class _s{constructor(e,n="asc"){this.field=e,this.dir=n}}function nA(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class Ng{}class Re extends Ng{constructor(e,n,s){super(),this.field=e,this.op=n,this.value=s}static create(e,n,s){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,s):new iA(e,n,s):n==="array-contains"?new aA(e,s):n==="in"?new cA(e,s):n==="not-in"?new lA(e,s):n==="array-contains-any"?new uA(e,s):new Re(e,n,s)}static createKeyFieldInFilter(e,n,s){return n==="in"?new rA(e,s):new oA(e,s)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Ps(n,this.value)):n!==null&&ts(this.value)===ts(n)&&this.matchesComparison(Ps(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return z()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Pt extends Ng{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Pt(e,n)}matches(e){return Pg(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function Pg(t){return t.op==="and"}function Og(t){return sA(t)&&Pg(t)}function sA(t){for(const e of t.filters)if(e instanceof Pt)return!1;return!0}function Cc(t){if(t instanceof Re)return t.field.canonicalString()+t.op.toString()+Os(t.value);if(Og(t))return t.filters.map(e=>Cc(e)).join(",");{const e=t.filters.map(n=>Cc(n)).join(",");return`${t.op}(${e})`}}function Mg(t,e){return t instanceof Re?function(n,s){return s instanceof Re&&n.op===s.op&&n.field.isEqual(s.field)&&zt(n.value,s.value)}(t,e):t instanceof Pt?function(n,s){return s instanceof Pt&&n.op===s.op&&n.filters.length===s.filters.length?n.filters.reduce((i,r,o)=>i&&Mg(r,s.filters[o]),!0):!1}(t,e):void z()}function Lg(t){return t instanceof Re?function(e){return`${e.field.canonicalString()} ${e.op} ${Os(e.value)}`}(t):t instanceof Pt?function(e){return e.op.toString()+" {"+e.getFilters().map(Lg).join(" ,")+"}"}(t):"Filter"}class iA extends Re{constructor(e,n,s){super(e,n,s),this.key=j.fromName(s.referenceValue)}matches(e){const n=j.comparator(e.key,this.key);return this.matchesComparison(n)}}class rA extends Re{constructor(e,n){super(e,"in",n),this.keys=Bg("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oA extends Re{constructor(e,n){super(e,"not-in",n),this.keys=Bg("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function Bg(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(s=>j.fromName(s.referenceValue))}class aA extends Re{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Bl(n)&&Bi(n.arrayValue,this.value)}}class cA extends Re{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&Bi(this.value.arrayValue,n)}}class lA extends Re{constructor(e,n){super(e,"not-in",n)}matches(e){if(Bi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!Bi(this.value.arrayValue,n)}}class uA extends Re{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Bl(n)||!n.arrayValue.values)&&n.arrayValue.values.some(s=>Bi(this.value.arrayValue,s))}}/**
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
 */class hA{constructor(e,n=null,s=[],i=[],r=null,o=null,c=null){this.path=e,this.collectionGroup=n,this.orderBy=s,this.filters=i,this.limit=r,this.startAt=o,this.endAt=c,this.ft=null}}function ld(t,e=null,n=[],s=[],i=null,r=null,o=null){return new hA(t,e,n,s,i,r,o)}function Fl(t){const e=Z(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(s=>Cc(s)).join(","),n+="|ob:",n+=e.orderBy.map(s=>function(i){return i.field.canonicalString()+i.dir}(s)).join(","),Wo(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Os(s)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Os(s)).join(",")),e.ft=n}return e.ft}function Ul(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nA(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!Mg(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!cd(t.startAt,e.startAt)&&cd(t.endAt,e.endAt)}function Ac(t){return j.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
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
 */class Ks{constructor(e,n=null,s=[],i=[],r=null,o="F",c=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=s,this.filters=i,this.limit=r,this.limitType=o,this.startAt=c,this.endAt=u,this.dt=null,this.wt=null,this.startAt,this.endAt}}function dA(t,e,n,s,i,r,o,c){return new Ks(t,e,n,s,i,r,o,c)}function $l(t){return new Ks(t)}function ud(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function Vl(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Go(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function Fg(t){return t.collectionGroup!==null}function Is(t){const e=Z(t);if(e.dt===null){e.dt=[];const n=Go(e),s=Vl(e);if(n!==null&&s===null)n.isKeyField()||e.dt.push(new _s(n)),e.dt.push(new _s(Ge.keyField(),"asc"));else{let i=!1;for(const r of e.explicitOrderBy)e.dt.push(r),r.field.isKeyField()&&(i=!0);if(!i){const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new _s(Ge.keyField(),r))}}}return e.dt}function rn(t){const e=Z(t);if(!e.wt)if(e.limitType==="F")e.wt=ld(e.path,e.collectionGroup,Is(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const r of Is(e)){const o=r.dir==="desc"?"asc":"desc";n.push(new _s(r.field,o))}const s=e.endAt?new lo(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new lo(e.startAt.position,e.startAt.inclusive):null;e.wt=ld(e.path,e.collectionGroup,n,e.filters,e.limit,s,i)}return e.wt}function Sc(t,e){e.getFirstInequalityField(),Go(t);const n=t.filters.concat([e]);return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),n,t.limit,t.limitType,t.startAt,t.endAt)}function kc(t,e,n){return new Ks(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Yo(t,e){return Ul(rn(t),rn(e))&&t.limitType===e.limitType}function Ug(t){return`${Fl(rn(t))}|lt:${t.limitType}`}function xc(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(s=>Lg(s)).join(", ")}]`),Wo(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(s=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(s)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(s=>Os(s)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(s=>Os(s)).join(",")),`Target(${n})`}(rn(t))}; limitType=${t.limitType})`}function Qo(t,e){return e.isFoundDocument()&&function(n,s){const i=s.key.path;return n.collectionGroup!==null?s.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):j.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,s){for(const i of Is(n))if(!i.field.isKeyField()&&s.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,s){for(const i of n.filters)if(!i.matches(s))return!1;return!0}(t,e)&&function(n,s){return!(n.startAt&&!function(i,r,o){const c=ad(i,r,o);return i.inclusive?c<=0:c<0}(n.startAt,Is(n),s)||n.endAt&&!function(i,r,o){const c=ad(i,r,o);return i.inclusive?c>=0:c>0}(n.endAt,Is(n),s))}(t,e)}function fA(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function $g(t){return(e,n)=>{let s=!1;for(const i of Is(t)){const r=pA(i,e,n);if(r!==0)return r;s=s||i.field.isKeyField()}return 0}}function pA(t,e,n){const s=t.field.isKeyField()?j.comparator(e.key,n.key):function(i,r,o){const c=r.data.field(i),u=o.data.field(i);return c!==null&&u!==null?Ps(c,u):z()}(t.field,e,n);switch(t.dir){case"asc":return s;case"desc":return-1*s;default:return z()}}/**
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
 */class Ws{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s!==void 0){for(const[i,r]of s)if(this.equalsFn(i,e))return r}}has(e){return this.get(e)!==void 0}set(e,n){const s=this.mapKeyFn(e),i=this.inner[s];if(i===void 0)return this.inner[s]=[[e,n]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),s=this.inner[n];if(s===void 0)return!1;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return s.length===1?delete this.inner[n]:s.splice(i,1),this.innerSize--,!0;return!1}forEach(e){zs(this.inner,(n,s)=>{for(const[i,r]of s)e(i,r)})}isEmpty(){return kg(this.inner)}size(){return this.innerSize}}/**
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
 */const gA=new Me(j.comparator);function on(){return gA}const Vg=new Me(j.comparator);function ai(...t){let e=Vg;for(const n of t)e=e.insert(n.key,n);return e}function jg(t){let e=Vg;return t.forEach((n,s)=>e=e.insert(n,s.overlayedDocument)),e}function qn(){return mi()}function Hg(){return mi()}function mi(){return new Ws(t=>t.toString(),(t,e)=>t.isEqual(e))}const mA=new Me(j.comparator),yA=new Pe(j.comparator);function ie(...t){let e=yA;for(const n of t)e=e.add(n);return e}const wA=new Pe(de);function qg(){return wA}/**
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
 */function zg(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:co(e)?"-0":e}}function Kg(t){return{integerValue:""+t}}function vA(t,e){return XC(e)?Kg(e):zg(t,e)}/**
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
 */class Xo{constructor(){this._=void 0}}function bA(t,e,n){return t instanceof uo?function(s,i){const r={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return i&&(r.fields.__previous_value__=i),{mapValue:r}}(n,e):t instanceof Fi?Gg(t,e):t instanceof Ui?Yg(t,e):function(s,i){const r=Wg(s,i),o=hd(r)+hd(s._t);return Tc(r)&&Tc(s._t)?Kg(o):zg(s.serializer,o)}(t,e)}function EA(t,e,n){return t instanceof Fi?Gg(t,e):t instanceof Ui?Yg(t,e):n}function Wg(t,e){return t instanceof ho?Tc(n=e)||function(s){return!!s&&"doubleValue"in s}(n)?e:{integerValue:0}:null;var n}class uo extends Xo{}class Fi extends Xo{constructor(e){super(),this.elements=e}}function Gg(t,e){const n=Qg(e);for(const s of t.elements)n.some(i=>zt(i,s))||n.push(s);return{arrayValue:{values:n}}}class Ui extends Xo{constructor(e){super(),this.elements=e}}function Yg(t,e){let n=Qg(e);for(const s of t.elements)n=n.filter(i=>!zt(i,s));return{arrayValue:{values:n}}}class ho extends Xo{constructor(e,n){super(),this.serializer=e,this._t=n}}function hd(t){return ke(t.integerValue||t.doubleValue)}function Qg(t){return Bl(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function _A(t,e){return t.field.isEqual(e.field)&&function(n,s){return n instanceof Fi&&s instanceof Fi||n instanceof Ui&&s instanceof Ui?Ds(n.elements,s.elements,zt):n instanceof ho&&s instanceof ho?zt(n._t,s._t):n instanceof uo&&s instanceof uo}(t.transform,e.transform)}class IA{constructor(e,n){this.version=e,this.transformResults=n}}class Zt{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Zt}static exists(e){return new Zt(void 0,e)}static updateTime(e){return new Zt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fr(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Jo{}function Xg(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new Zg(t.key,Zt.none()):new ir(t.key,t.data,Zt.none());{const n=t.data,s=It.empty();let i=new Pe(Ge.comparator);for(let r of e.fields)if(!i.has(r)){let o=n.field(r);o===null&&r.length>1&&(r=r.popLast(),o=n.field(r)),o===null?s.delete(r):s.set(r,o),i=i.add(r)}return new ss(t.key,s,new Rt(i.toArray()),Zt.none())}}function TA(t,e,n){t instanceof ir?function(s,i,r){const o=s.value.clone(),c=fd(s.fieldTransforms,i,r.transformResults);o.setAll(c),i.convertToFoundDocument(r.version,o).setHasCommittedMutations()}(t,e,n):t instanceof ss?function(s,i,r){if(!Fr(s.precondition,i))return void i.convertToUnknownDocument(r.version);const o=fd(s.fieldTransforms,i,r.transformResults),c=i.data;c.setAll(Jg(s)),c.setAll(o),i.convertToFoundDocument(r.version,c).setHasCommittedMutations()}(t,e,n):function(s,i,r){i.convertToNoDocument(r.version).setHasCommittedMutations()}(0,e,n)}function yi(t,e,n,s){return t instanceof ir?function(i,r,o,c){if(!Fr(i.precondition,r))return o;const u=i.value.clone(),h=pd(i.fieldTransforms,c,r);return u.setAll(h),r.convertToFoundDocument(r.version,u).setHasLocalMutations(),null}(t,e,n,s):t instanceof ss?function(i,r,o,c){if(!Fr(i.precondition,r))return o;const u=pd(i.fieldTransforms,c,r),h=r.data;return h.setAll(Jg(i)),h.setAll(u),r.convertToFoundDocument(r.version,h).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(f=>f.field))}(t,e,n,s):function(i,r,o){return Fr(i.precondition,r)?(r.convertToNoDocument(r.version).setHasLocalMutations(),null):o}(t,e,n)}function CA(t,e){let n=null;for(const s of t.fieldTransforms){const i=e.data.field(s.field),r=Wg(s.transform,i||null);r!=null&&(n===null&&(n=It.empty()),n.set(s.field,r))}return n||null}function dd(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,s){return n===void 0&&s===void 0||!(!n||!s)&&Ds(n,s,(i,r)=>_A(i,r))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class ir extends Jo{constructor(e,n,s,i=[]){super(),this.key=e,this.value=n,this.precondition=s,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class ss extends Jo{constructor(e,n,s,i,r=[]){super(),this.key=e,this.data=n,this.fieldMask=s,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Jg(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const s=t.data.field(n);e.set(n,s)}}),e}function fd(t,e,n){const s=new Map;ve(t.length===n.length);for(let i=0;i<n.length;i++){const r=t[i],o=r.transform,c=e.data.field(r.field);s.set(r.field,EA(o,c,n[i]))}return s}function pd(t,e,n){const s=new Map;for(const i of t){const r=i.transform,o=n.data.field(i.field);s.set(i.field,bA(r,o,e))}return s}class Zg extends Jo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class AA extends Jo{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class SA{constructor(e,n,s,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=s,this.mutations=i}applyToRemoteDocument(e,n){const s=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const r=this.mutations[i];r.key.isEqual(e.key)&&TA(r,e,s[i])}}applyToLocalView(e,n){for(const s of this.baseMutations)s.key.isEqual(e.key)&&(n=yi(s,e,n,this.localWriteTime));for(const s of this.mutations)s.key.isEqual(e.key)&&(n=yi(s,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const s=Hg();return this.mutations.forEach(i=>{const r=e.get(i.key),o=r.overlayedDocument;let c=this.applyToLocalView(o,r.mutatedFields);c=n.has(i.key)?null:c;const u=Xg(o,c);u!==null&&s.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),s}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ie())}isEqual(e){return this.batchId===e.batchId&&Ds(this.mutations,e.mutations,(n,s)=>dd(n,s))&&Ds(this.baseMutations,e.baseMutations,(n,s)=>dd(n,s))}}class jl{constructor(e,n,s,i){this.batch=e,this.commitVersion=n,this.mutationResults=s,this.docVersions=i}static from(e,n,s){ve(e.mutations.length===s.length);let i=mA;const r=e.mutations;for(let o=0;o<r.length;o++)i=i.insert(r[o].key,s[o].version);return new jl(e,n,s,i)}}/**
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
 */class kA{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class xA{constructor(e){this.count=e}}/**
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
 */var Se,re;function RA(t){switch(t){default:return z();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function em(t){if(t===void 0)return sn("GRPC error has no .code"),T.UNKNOWN;switch(t){case Se.OK:return T.OK;case Se.CANCELLED:return T.CANCELLED;case Se.UNKNOWN:return T.UNKNOWN;case Se.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case Se.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case Se.INTERNAL:return T.INTERNAL;case Se.UNAVAILABLE:return T.UNAVAILABLE;case Se.UNAUTHENTICATED:return T.UNAUTHENTICATED;case Se.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case Se.NOT_FOUND:return T.NOT_FOUND;case Se.ALREADY_EXISTS:return T.ALREADY_EXISTS;case Se.PERMISSION_DENIED:return T.PERMISSION_DENIED;case Se.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case Se.ABORTED:return T.ABORTED;case Se.OUT_OF_RANGE:return T.OUT_OF_RANGE;case Se.UNIMPLEMENTED:return T.UNIMPLEMENTED;case Se.DATA_LOSS:return T.DATA_LOSS;default:return z()}}(re=Se||(Se={}))[re.OK=0]="OK",re[re.CANCELLED=1]="CANCELLED",re[re.UNKNOWN=2]="UNKNOWN",re[re.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",re[re.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",re[re.NOT_FOUND=5]="NOT_FOUND",re[re.ALREADY_EXISTS=6]="ALREADY_EXISTS",re[re.PERMISSION_DENIED=7]="PERMISSION_DENIED",re[re.UNAUTHENTICATED=16]="UNAUTHENTICATED",re[re.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",re[re.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",re[re.ABORTED=10]="ABORTED",re[re.OUT_OF_RANGE=11]="OUT_OF_RANGE",re[re.UNIMPLEMENTED=12]="UNIMPLEMENTED",re[re.INTERNAL=13]="INTERNAL",re[re.UNAVAILABLE=14]="UNAVAILABLE",re[re.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class Hl{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Sr}static getOrCreateInstance(){return Sr===null&&(Sr=new Hl),Sr}onExistenceFilterMismatch(e){const n=Symbol();return this.onExistenceFilterMismatchCallbacks.set(n,e),()=>this.onExistenceFilterMismatchCallbacks.delete(n)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(n=>n(e))}}let Sr=null;/**
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
 */class Zo{constructor(e,n,s,i,r){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=s,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,n,s){const i=new Map;return i.set(e,rr.createSynthesizedTargetChangeForCurrentChange(e,n,s)),new Zo(X.min(),i,qg(),on(),ie())}}class rr{constructor(e,n,s,i,r){this.resumeToken=e,this.current=n,this.addedDocuments=s,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,n,s){return new rr(s,n,ie(),ie(),ie())}}/**
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
 */class Ur{constructor(e,n,s,i){this.It=e,this.removedTargetIds=n,this.key=s,this.Tt=i}}class tm{constructor(e,n){this.targetId=e,this.Et=n}}class nm{constructor(e,n,s=et.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=s,this.cause=i}}class gd{constructor(){this.At=0,this.Rt=yd(),this.vt=et.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=ie(),n=ie(),s=ie();return this.Rt.forEach((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:s=s.add(i);break;default:z()}}),new rr(this.vt,this.bt,e,n,s)}xt(){this.Pt=!1,this.Rt=yd()}Nt(e,n){this.Pt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class DA{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=on(),this.qt=md(),this.Ut=new Pe(de)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}zt(e){this.forEachTarget(e,n=>{const s=this.jt(n);switch(e.state){case 0:this.Wt(n)&&s.Dt(e.resumeToken);break;case 1:s.$t(),s.Vt||s.xt(),s.Dt(e.resumeToken);break;case 2:s.$t(),s.Vt||this.removeTarget(n);break;case 3:this.Wt(n)&&(s.Mt(),s.Dt(e.resumeToken));break;case 4:this.Wt(n)&&(this.Ht(n),s.Dt(e.resumeToken));break;default:z()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((s,i)=>{this.Wt(i)&&n(i)})}Jt(e){var n;const s=e.targetId,i=e.Et.count,r=this.Yt(s);if(r){const o=r.target;if(Ac(o))if(i===0){const c=new j(o.path);this.Qt(s,c,ze.newNoDocument(c,X.min()))}else ve(i===1);else{const c=this.Zt(s);c!==i&&(this.Ht(s),this.Ut=this.Ut.add(s),(n=Hl.instance)===null||n===void 0||n.notifyOnExistenceFilterMismatch({localCacheCount:c,existenceFilterCount:e.Et.count}))}}}Xt(e){const n=new Map;this.Bt.forEach((r,o)=>{const c=this.Yt(o);if(c){if(r.current&&Ac(c.target)){const u=new j(c.target.path);this.Lt.get(u)!==null||this.te(o,u)||this.Qt(o,u,ze.newNoDocument(u,e))}r.St&&(n.set(o,r.Ct()),r.xt())}});let s=ie();this.qt.forEach((r,o)=>{let c=!0;o.forEachWhile(u=>{const h=this.Yt(u);return!h||h.purpose===2||(c=!1,!1)}),c&&(s=s.add(r))}),this.Lt.forEach((r,o)=>o.setReadTime(e));const i=new Zo(e,n,this.Ut,this.Lt,s);return this.Lt=on(),this.qt=md(),this.Ut=new Pe(de),i}Gt(e,n){if(!this.Wt(e))return;const s=this.te(e,n.key)?2:0;this.jt(e).Nt(n.key,s),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,s){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),s&&(this.Lt=this.Lt.insert(n,s))}removeTarget(e){this.Bt.delete(e)}Zt(e){const n=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let n=this.Bt.get(e);return n||(n=new gd,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Pe(de),this.qt=this.qt.insert(e,n)),n}Wt(e){const n=this.Yt(e)!==null;return n||U("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new gd),this.Ft.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.Ft.getRemoteKeysForTarget(e).has(n)}}function md(){return new Me(j.comparator)}function yd(){return new Me(j.comparator)}/**
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
 */const NA=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),PA=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),OA=(()=>({and:"AND",or:"OR"}))();class MA{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function fo(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sm(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function LA(t,e){return fo(t,e.toTimestamp())}function Ht(t){return ve(!!t),X.fromTimestamp(function(e){const n=An(e);return new Ne(n.seconds,n.nanos)}(t))}function ql(t,e){return function(n){return new we(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function im(t){const e=we.fromString(t);return ve(cm(e)),e}function Rc(t,e){return ql(t.databaseId,e.path)}function $a(t,e){const n=im(e);if(n.get(1)!==t.databaseId.projectId)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new L(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new j(rm(n))}function Dc(t,e){return ql(t.databaseId,e)}function BA(t){const e=im(t);return e.length===4?we.emptyPath():rm(e)}function Nc(t){return new we(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function rm(t){return ve(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function wd(t,e,n){return{name:Rc(t,e),fields:n.value.mapValue.fields}}function FA(t,e){let n;if("targetChange"in e){e.targetChange;const s=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:z()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],r=function(u,h){return u.useProto3Json?(ve(h===void 0||typeof h=="string"),et.fromBase64String(h||"")):(ve(h===void 0||h instanceof Uint8Array),et.fromUint8Array(h||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,c=o&&function(u){const h=u.code===void 0?T.UNKNOWN:em(u.code);return new L(h,u.message||"")}(o);n=new nm(s,i,r,c||null)}else if("documentChange"in e){e.documentChange;const s=e.documentChange;s.document,s.document.name,s.document.updateTime;const i=$a(t,s.document.name),r=Ht(s.document.updateTime),o=s.document.createTime?Ht(s.document.createTime):X.min(),c=new It({mapValue:{fields:s.document.fields}}),u=ze.newFoundDocument(i,r,o,c),h=s.targetIds||[],f=s.removedTargetIds||[];n=new Ur(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const s=e.documentDelete;s.document;const i=$a(t,s.document),r=s.readTime?Ht(s.readTime):X.min(),o=ze.newNoDocument(i,r),c=s.removedTargetIds||[];n=new Ur([],c,o.key,o)}else if("documentRemove"in e){e.documentRemove;const s=e.documentRemove;s.document;const i=$a(t,s.document),r=s.removedTargetIds||[];n=new Ur([],r,i,null)}else{if(!("filter"in e))return z();{e.filter;const s=e.filter;s.targetId;const i=s.count||0,r=new xA(i),o=s.targetId;n=new tm(o,r)}}return n}function UA(t,e){let n;if(e instanceof ir)n={update:wd(t,e.key,e.value)};else if(e instanceof Zg)n={delete:Rc(t,e.key)};else if(e instanceof ss)n={update:wd(t,e.key,e.data),updateMask:GA(e.fieldMask)};else{if(!(e instanceof AA))return z();n={verify:Rc(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(s=>function(i,r){const o=r.transform;if(o instanceof uo)return{fieldPath:r.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Fi)return{fieldPath:r.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ui)return{fieldPath:r.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof ho)return{fieldPath:r.field.canonicalString(),increment:o._t};throw z()}(0,s))),e.precondition.isNone||(n.currentDocument=function(s,i){return i.updateTime!==void 0?{updateTime:LA(s,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:z()}(t,e.precondition)),n}function $A(t,e){return t&&t.length>0?(ve(e!==void 0),t.map(n=>function(s,i){let r=s.updateTime?Ht(s.updateTime):Ht(i);return r.isEqual(X.min())&&(r=Ht(i)),new IA(r,s.transformResults||[])}(n,e))):[]}function VA(t,e){return{documents:[Dc(t,e.path)]}}function jA(t,e){const n={structuredQuery:{}},s=e.path;e.collectionGroup!==null?(n.parent=Dc(t,s),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Dc(t,s.popLast()),n.structuredQuery.from=[{collectionId:s.lastSegment()}]);const i=function(u){if(u.length!==0)return am(Pt.create(u,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const r=function(u){if(u.length!==0)return u.map(h=>function(f){return{field:fs(f.field),direction:zA(f.dir)}}(h))}(e.orderBy);r&&(n.structuredQuery.orderBy=r);const o=function(u,h){return u.useProto3Json||Wo(h)?h:{value:h}}(t,e.limit);var c;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(c=e.startAt).inclusive,values:c.position}),e.endAt&&(n.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(e.endAt)),n}function HA(t){let e=BA(t.parent);const n=t.structuredQuery,s=n.from?n.from.length:0;let i=null;if(s>0){ve(s===1);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let r=[];n.where&&(r=function(f){const m=om(f);return m instanceof Pt&&Og(m)?m.getFilters():[m]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(f=>function(m){return new _s(ps(m.field),function(w){switch(w){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(m.direction))}(f)));let c=null;n.limit&&(c=function(f){let m;return m=typeof f=="object"?f.value:f,Wo(m)?null:m}(n.limit));let u=null;n.startAt&&(u=function(f){const m=!!f.before,w=f.values||[];return new lo(w,m)}(n.startAt));let h=null;return n.endAt&&(h=function(f){const m=!f.before,w=f.values||[];return new lo(w,m)}(n.endAt)),dA(e,i,o,r,c,"F",u,h)}function qA(t,e){const n=function(s,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return z()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function om(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=ps(e.unaryFilter.field);return Re.create(n,"==",{doubleValue:NaN});case"IS_NULL":const s=ps(e.unaryFilter.field);return Re.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=ps(e.unaryFilter.field);return Re.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=ps(e.unaryFilter.field);return Re.create(r,"!=",{nullValue:"NULL_VALUE"});default:return z()}}(t):t.fieldFilter!==void 0?function(e){return Re.create(ps(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return z()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Pt.create(e.compositeFilter.filters.map(n=>om(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return z()}}(e.compositeFilter.op))}(t):z()}function zA(t){return NA[t]}function KA(t){return PA[t]}function WA(t){return OA[t]}function fs(t){return{fieldPath:t.canonicalString()}}function ps(t){return Ge.fromServerFormat(t.fieldPath)}function am(t){return t instanceof Re?function(e){if(e.op==="=="){if(od(e.value))return{unaryFilter:{field:fs(e.field),op:"IS_NAN"}};if(rd(e.value))return{unaryFilter:{field:fs(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(od(e.value))return{unaryFilter:{field:fs(e.field),op:"IS_NOT_NAN"}};if(rd(e.value))return{unaryFilter:{field:fs(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:fs(e.field),op:KA(e.op),value:e.value}}}(t):t instanceof Pt?function(e){const n=e.getFilters().map(s=>am(s));return n.length===1?n[0]:{compositeFilter:{op:WA(e.op),filters:n}}}(t):z()}function GA(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function cm(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class Qn{constructor(e,n,s,i,r=X.min(),o=X.min(),c=et.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=s,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=c}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class YA{constructor(e){this.se=e}}function QA(t){const e=HA({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?kc(e,e.limit,"L"):e}/**
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
 */class XA{constructor(){this.He=new JA}addToCollectionParentIndex(e,n){return this.He.add(n),R.resolve()}getCollectionParents(e,n){return R.resolve(this.He.getEntries(n))}addFieldIndex(e,n){return R.resolve()}deleteFieldIndex(e,n){return R.resolve()}getDocumentsMatchingTarget(e,n){return R.resolve(null)}getIndexType(e,n){return R.resolve(0)}getFieldIndexes(e,n){return R.resolve([])}getNextCollectionGroupToUpdate(e){return R.resolve(null)}getMinOffset(e,n){return R.resolve(Cn.min())}getMinOffsetFromCollectionGroup(e,n){return R.resolve(Cn.min())}updateCollectionGroup(e,n,s){return R.resolve()}updateIndexEntries(e,n){return R.resolve()}}class JA{constructor(){this.index={}}add(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n]||new Pe(we.comparator),r=!i.has(s);return this.index[n]=i.add(s),r}has(e){const n=e.lastSegment(),s=e.popLast(),i=this.index[n];return i&&i.has(s)}getEntries(e){return(this.index[e]||new Pe(we.comparator)).toArray()}}/**
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
 */class Ms{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ms(0)}static bn(){return new Ms(-1)}}/**
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
 */class ZA{constructor(){this.changes=new Ws(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,ze.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const s=this.changes.get(n);return s!==void 0?R.resolve(s):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class eS{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class tS{constructor(e,n,s,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=s,this.indexManager=i}getDocument(e,n){let s=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(s=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(s!==null&&yi(s.mutation,i,Rt.empty(),Ne.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.getLocalViewOfDocuments(e,s,ie()).next(()=>s))}getLocalViewOfDocuments(e,n,s=ie()){const i=qn();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,s).next(r=>{let o=ai();return r.forEach((c,u)=>{o=o.insert(c,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const s=qn();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,ie()))}populateOverlays(e,n,s){const i=[];return s.forEach(r=>{n.has(r)||i.push(r)}),this.documentOverlayCache.getOverlays(e,i).next(r=>{r.forEach((o,c)=>{n.set(o,c)})})}computeViews(e,n,s,i){let r=on();const o=mi(),c=mi();return n.forEach((u,h)=>{const f=s.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof ss)?r=r.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),yi(f.mutation,h,f.mutation.getFieldMask(),Ne.now())):o.set(h.key,Rt.empty())}),this.recalculateAndSaveOverlays(e,r).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var m;return c.set(h,new eS(f,(m=o.get(h))!==null&&m!==void 0?m:null))}),c))}recalculateAndSaveOverlays(e,n){const s=mi();let i=new Me((o,c)=>o-c),r=ie();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const c of o)c.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=s.get(u)||Rt.empty();f=c.applyToLocalView(h,f),s.set(u,f);const m=(i.get(c.batchId)||ie()).add(u);i=i.insert(c.batchId,m)})}).next(()=>{const o=[],c=i.getReverseIterator();for(;c.hasNext();){const u=c.getNext(),h=u.key,f=u.value,m=Hg();f.forEach(w=>{if(!r.has(w)){const _=Xg(n.get(w),s.get(w));_!==null&&m.set(w,_),r=r.add(w)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,m))}return R.waitFor(o)}).next(()=>s)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(s=>this.recalculateAndSaveOverlays(e,s))}getDocumentsMatchingQuery(e,n,s){return function(i){return j.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):Fg(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,s):this.getDocumentsMatchingCollectionQuery(e,n,s)}getNextDocuments(e,n,s,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,s,i).next(r=>{const o=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,s.largestBatchId,i-r.size):R.resolve(qn());let c=-1,u=r;return o.next(h=>R.forEach(h,(f,m)=>(c<m.largestBatchId&&(c=m.largestBatchId),r.get(f)?R.resolve():this.remoteDocumentCache.getEntry(e,f).next(w=>{u=u.insert(f,w)}))).next(()=>this.populateOverlays(e,h,r)).next(()=>this.computeViews(e,u,h,ie())).next(f=>({batchId:c,changes:jg(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new j(n)).next(s=>{let i=ai();return s.isFoundDocument()&&(i=i.insert(s.key,s)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,s){const i=n.collectionGroup;let r=ai();return this.indexManager.getCollectionParents(e,i).next(o=>R.forEach(o,c=>{const u=function(h,f){return new Ks(f,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(n,c.child(i));return this.getDocumentsMatchingCollectionQuery(e,u,s).next(h=>{h.forEach((f,m)=>{r=r.insert(f,m)})})}).next(()=>r))}getDocumentsMatchingCollectionQuery(e,n,s){let i;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,s.largestBatchId).next(r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,s,i))).next(r=>{i.forEach((c,u)=>{const h=u.getKey();r.get(h)===null&&(r=r.insert(h,ze.newInvalidDocument(h)))});let o=ai();return r.forEach((c,u)=>{const h=i.get(c);h!==void 0&&yi(h.mutation,u,Rt.empty(),Ne.now()),Qo(n,u)&&(o=o.insert(c,u))}),o})}}/**
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
 */class nS{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,n){return R.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var s;return this.Zn.set(n.id,{id:(s=n).id,version:s.version,createTime:Ht(s.createTime)}),R.resolve()}getNamedQuery(e,n){return R.resolve(this.Xn.get(n))}saveNamedQuery(e,n){return this.Xn.set(n.name,function(s){return{name:s.name,query:QA(s.bundledQuery),readTime:Ht(s.readTime)}}(n)),R.resolve()}}/**
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
 */class sS{constructor(){this.overlays=new Me(j.comparator),this.ts=new Map}getOverlay(e,n){return R.resolve(this.overlays.get(n))}getOverlays(e,n){const s=qn();return R.forEach(n,i=>this.getOverlay(e,i).next(r=>{r!==null&&s.set(i,r)})).next(()=>s)}saveOverlays(e,n,s){return s.forEach((i,r)=>{this.re(e,n,r)}),R.resolve()}removeOverlaysForBatchId(e,n,s){const i=this.ts.get(s);return i!==void 0&&(i.forEach(r=>this.overlays=this.overlays.remove(r)),this.ts.delete(s)),R.resolve()}getOverlaysForCollection(e,n,s){const i=qn(),r=n.length+1,o=new j(n.child("")),c=this.overlays.getIteratorFrom(o);for(;c.hasNext();){const u=c.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===r&&u.largestBatchId>s&&i.set(u.getKey(),u)}return R.resolve(i)}getOverlaysForCollectionGroup(e,n,s,i){let r=new Me((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>s){let f=r.get(h.largestBatchId);f===null&&(f=qn(),r=r.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const c=qn(),u=r.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>c.set(h,f)),!(c.size()>=i)););return R.resolve(c)}re(e,n,s){const i=this.overlays.get(s.key);if(i!==null){const o=this.ts.get(i.largestBatchId).delete(s.key);this.ts.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(s.key,new kA(n,s));let r=this.ts.get(n);r===void 0&&(r=ie(),this.ts.set(n,r)),this.ts.set(n,r.add(s.key))}}/**
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
 */class zl{constructor(){this.es=new Pe(Le.ns),this.ss=new Pe(Le.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,n){const s=new Le(e,n);this.es=this.es.add(s),this.ss=this.ss.add(s)}os(e,n){e.forEach(s=>this.addReference(s,n))}removeReference(e,n){this.us(new Le(e,n))}cs(e,n){e.forEach(s=>this.removeReference(s,n))}hs(e){const n=new j(new we([])),s=new Le(n,e),i=new Le(n,e+1),r=[];return this.ss.forEachInRange([s,i],o=>{this.us(o),r.push(o.key)}),r}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const n=new j(new we([])),s=new Le(n,e),i=new Le(n,e+1);let r=ie();return this.ss.forEachInRange([s,i],o=>{r=r.add(o.key)}),r}containsKey(e){const n=new Le(e,0),s=this.es.firstAfterOrEqual(n);return s!==null&&e.isEqual(s.key)}}class Le{constructor(e,n){this.key=e,this.ds=n}static ns(e,n){return j.comparator(e.key,n.key)||de(e.ds,n.ds)}static rs(e,n){return de(e.ds,n.ds)||j.comparator(e.key,n.key)}}/**
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
 */class iS{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this._s=new Pe(Le.ns)}checkEmpty(e){return R.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,s,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new SA(r,n,s,i);this.mutationQueue.push(o);for(const c of i)this._s=this._s.add(new Le(c.key,r)),this.indexManager.addToCollectionParentIndex(e,c.key.path.popLast());return R.resolve(o)}lookupMutationBatch(e,n){return R.resolve(this.gs(n))}getNextMutationBatchAfterBatchId(e,n){const s=n+1,i=this.ys(s),r=i<0?0:i;return R.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return R.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return R.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const s=new Le(n,0),i=new Le(n,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([s,i],o=>{const c=this.gs(o.ds);r.push(c)}),R.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,n){let s=new Pe(de);return n.forEach(i=>{const r=new Le(i,0),o=new Le(i,Number.POSITIVE_INFINITY);this._s.forEachInRange([r,o],c=>{s=s.add(c.ds)})}),R.resolve(this.ps(s))}getAllMutationBatchesAffectingQuery(e,n){const s=n.path,i=s.length+1;let r=s;j.isDocumentKey(r)||(r=r.child(""));const o=new Le(new j(r),0);let c=new Pe(de);return this._s.forEachWhile(u=>{const h=u.key.path;return!!s.isPrefixOf(h)&&(h.length===i&&(c=c.add(u.ds)),!0)},o),R.resolve(this.ps(c))}ps(e){const n=[];return e.forEach(s=>{const i=this.gs(s);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){ve(this.Is(n.batchId,"removed")===0),this.mutationQueue.shift();let s=this._s;return R.forEach(n.mutations,i=>{const r=new Le(i.key,n.batchId);return s=s.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this._s=s})}En(e){}containsKey(e,n){const s=new Le(n,0),i=this._s.firstAfterOrEqual(s);return R.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,R.resolve()}Is(e,n){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const n=this.ys(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class rS{constructor(e){this.Ts=e,this.docs=new Me(j.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const s=n.key,i=this.docs.get(s),r=i?i.size:0,o=this.Ts(n);return this.docs=this.docs.insert(s,{document:n.mutableCopy(),size:o}),this.size+=o-r,this.indexManager.addToCollectionParentIndex(e,s.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const s=this.docs.get(n);return R.resolve(s?s.document.mutableCopy():ze.newInvalidDocument(n))}getEntries(e,n){let s=on();return n.forEach(i=>{const r=this.docs.get(i);s=s.insert(i,r?r.document.mutableCopy():ze.newInvalidDocument(i))}),R.resolve(s)}getDocumentsMatchingQuery(e,n,s,i){let r=on();const o=n.path,c=new j(o.child("")),u=this.docs.getIteratorFrom(c);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||GC(WC(f),s)<=0||(i.has(f.key)||Qo(n,f))&&(r=r.insert(f.key,f.mutableCopy()))}return R.resolve(r)}getAllFromCollectionGroup(e,n,s,i){z()}Es(e,n){return R.forEach(this.docs,s=>n(s))}newChangeBuffer(e){return new oS(this)}getSize(e){return R.resolve(this.size)}}class oS extends ZA{constructor(e){super(),this.Jn=e}applyChanges(e){const n=[];return this.changes.forEach((s,i)=>{i.isValidDocument()?n.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(s)}),R.waitFor(n)}getFromCache(e,n){return this.Jn.getEntry(e,n)}getAllFromCache(e,n){return this.Jn.getEntries(e,n)}}/**
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
 */class aS{constructor(e){this.persistence=e,this.As=new Ws(n=>Fl(n),Ul),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this.Rs=0,this.vs=new zl,this.targetCount=0,this.bs=Ms.vn()}forEachTarget(e,n){return this.As.forEach((s,i)=>n(i)),R.resolve()}getLastRemoteSnapshotVersion(e){return R.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return R.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),R.resolve(this.highestTargetId)}setTargetsMetadata(e,n,s){return s&&(this.lastRemoteSnapshotVersion=s),n>this.Rs&&(this.Rs=n),R.resolve()}Sn(e){this.As.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Ms(n),this.highestTargetId=n),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,n){return this.Sn(n),this.targetCount+=1,R.resolve()}updateTargetData(e,n){return this.Sn(n),R.resolve()}removeTargetData(e,n){return this.As.delete(n.target),this.vs.hs(n.targetId),this.targetCount-=1,R.resolve()}removeTargets(e,n,s){let i=0;const r=[];return this.As.forEach((o,c)=>{c.sequenceNumber<=n&&s.get(c.targetId)===null&&(this.As.delete(o),r.push(this.removeMatchingKeysForTargetId(e,c.targetId)),i++)}),R.waitFor(r).next(()=>i)}getTargetCount(e){return R.resolve(this.targetCount)}getTargetData(e,n){const s=this.As.get(n)||null;return R.resolve(s)}addMatchingKeys(e,n,s){return this.vs.os(n,s),R.resolve()}removeMatchingKeys(e,n,s){this.vs.cs(n,s);const i=this.persistence.referenceDelegate,r=[];return i&&n.forEach(o=>{r.push(i.markPotentiallyOrphaned(e,o))}),R.waitFor(r)}removeMatchingKeysForTargetId(e,n){return this.vs.hs(n),R.resolve()}getMatchingKeysForTargetId(e,n){const s=this.vs.fs(n);return R.resolve(s)}containsKey(e,n){return R.resolve(this.vs.containsKey(n))}}/**
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
 */class cS{constructor(e,n){this.Ps={},this.overlays={},this.Vs=new Ll(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new aS(this),this.indexManager=new XA,this.remoteDocumentCache=function(s){return new rS(s)}(s=>this.referenceDelegate.Cs(s)),this.serializer=new YA(n),this.xs=new nS(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new sS,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let s=this.Ps[e.toKey()];return s||(s=new iS(n,this.referenceDelegate),this.Ps[e.toKey()]=s),s}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,n,s){U("MemoryPersistence","Starting transaction:",e);const i=new lS(this.Vs.next());return this.referenceDelegate.Ns(),s(i).next(r=>this.referenceDelegate.ks(i).next(()=>r)).toPromise().then(r=>(i.raiseOnCommittedEvent(),r))}Os(e,n){return R.or(Object.values(this.Ps).map(s=>()=>s.containsKey(e,n)))}}class lS extends QC{constructor(e){super(),this.currentSequenceNumber=e}}class Kl{constructor(e){this.persistence=e,this.$s=new zl,this.Ms=null}static Fs(e){return new Kl(e)}get Bs(){if(this.Ms)return this.Ms;throw z()}addReference(e,n,s){return this.$s.addReference(s,n),this.Bs.delete(s.toString()),R.resolve()}removeReference(e,n,s){return this.$s.removeReference(s,n),this.Bs.add(s.toString()),R.resolve()}markPotentiallyOrphaned(e,n){return this.Bs.add(n.toString()),R.resolve()}removeTarget(e,n){this.$s.hs(n.targetId).forEach(i=>this.Bs.add(i.toString()));const s=this.persistence.getTargetCache();return s.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(r=>this.Bs.add(r.toString()))}).next(()=>s.removeTargetData(e,n))}Ns(){this.Ms=new Set}ks(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return R.forEach(this.Bs,s=>{const i=j.fromPath(s);return this.Ls(e,i).next(r=>{r||n.removeEntry(i,X.min())})}).next(()=>(this.Ms=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ls(e,n).next(s=>{s?this.Bs.delete(n.toString()):this.Bs.add(n.toString())})}Cs(e){return 0}Ls(e,n){return R.or([()=>R.resolve(this.$s.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Os(e,n)])}}/**
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
 */class Wl{constructor(e,n,s,i){this.targetId=e,this.fromCache=n,this.Vi=s,this.Si=i}static Di(e,n){let s=ie(),i=ie();for(const r of n.docChanges)switch(r.type){case 0:s=s.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Wl(e,n.fromCache,s,i)}}/**
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
 */class uS{constructor(){this.Ci=!1}initialize(e,n){this.xi=e,this.indexManager=n,this.Ci=!0}getDocumentsMatchingQuery(e,n,s,i){return this.Ni(e,n).next(r=>r||this.ki(e,n,i,s)).next(r=>r||this.Oi(e,n))}Ni(e,n){if(ud(n))return R.resolve(null);let s=rn(n);return this.indexManager.getIndexType(e,s).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=kc(n,null,"F"),s=rn(n)),this.indexManager.getDocumentsMatchingTarget(e,s).next(r=>{const o=ie(...r);return this.xi.getDocuments(e,o).next(c=>this.indexManager.getMinOffset(e,s).next(u=>{const h=this.$i(n,c);return this.Mi(n,h,o,u.readTime)?this.Ni(e,kc(n,null,"F")):this.Fi(e,h,n,u)}))})))}ki(e,n,s,i){return ud(n)||i.isEqual(X.min())?this.Oi(e,n):this.xi.getDocuments(e,s).next(r=>{const o=this.$i(n,r);return this.Mi(n,o,s,i)?this.Oi(e,n):(ed()<=ue.DEBUG&&U("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),xc(n)),this.Fi(e,o,n,KC(i,-1)))})}$i(e,n){let s=new Pe($g(e));return n.forEach((i,r)=>{Qo(e,r)&&(s=s.add(r))}),s}Mi(e,n,s,i){if(e.limit===null)return!1;if(s.size!==n.size)return!0;const r=e.limitType==="F"?n.last():n.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,n){return ed()<=ue.DEBUG&&U("QueryEngine","Using full collection scan to execute query:",xc(n)),this.xi.getDocumentsMatchingQuery(e,n,Cn.min())}Fi(e,n,s,i){return this.xi.getDocumentsMatchingQuery(e,s,i).next(r=>(n.forEach(o=>{r=r.insert(o.key,o)}),r))}}/**
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
 */class hS{constructor(e,n,s,i){this.persistence=e,this.Bi=n,this.serializer=i,this.Li=new Me(de),this.qi=new Ws(r=>Fl(r),Ul),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(s)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new tS(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Li))}}function dS(t,e,n,s){return new hS(t,e,n,s)}async function lm(t,e){const n=Z(t);return await n.persistence.runTransaction("Handle user change","readonly",s=>{let i;return n.mutationQueue.getAllMutationBatches(s).next(r=>(i=r,n.Gi(e),n.mutationQueue.getAllMutationBatches(s))).next(r=>{const o=[],c=[];let u=ie();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of r){c.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(s,u).next(h=>({Qi:h,removedBatchIds:o,addedBatchIds:c}))})})}function fS(t,e){const n=Z(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",s=>{const i=e.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(o,c,u,h){const f=u.batch,m=f.keys();let w=R.resolve();return m.forEach(_=>{w=w.next(()=>h.getEntry(c,_)).next(N=>{const A=u.docVersions.get(_);ve(A!==null),N.version.compareTo(A)<0&&(f.applyToRemoteDocument(N,u),N.isValidDocument()&&(N.setReadTime(u.commitVersion),h.addEntry(N)))})}),w.next(()=>o.mutationQueue.removeMutationBatch(c,f))}(n,s,e,r).next(()=>r.apply(s)).next(()=>n.mutationQueue.performConsistencyCheck(s)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(s,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(s,function(o){let c=ie();for(let u=0;u<o.mutationResults.length;++u)o.mutationResults[u].transformResults.length>0&&(c=c.add(o.batch.mutations[u].key));return c}(e))).next(()=>n.localDocuments.getDocuments(s,i))})}function um(t){const e=Z(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ds.getLastRemoteSnapshotVersion(n))}function pS(t,e){const n=Z(t),s=e.snapshotVersion;let i=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",r=>{const o=n.Ki.newChangeBuffer({trackRemovals:!0});i=n.Li;const c=[];e.targetChanges.forEach((f,m)=>{const w=i.get(m);if(!w)return;c.push(n.Ds.removeMatchingKeys(r,f.removedDocuments,m).next(()=>n.Ds.addMatchingKeys(r,f.addedDocuments,m)));let _=w.withSequenceNumber(r.currentSequenceNumber);e.targetMismatches.has(m)?_=_.withResumeToken(et.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(_=_.withResumeToken(f.resumeToken,s)),i=i.insert(m,_),function(N,A,F){return N.resumeToken.approximateByteSize()===0||A.snapshotVersion.toMicroseconds()-N.snapshotVersion.toMicroseconds()>=3e8?!0:F.addedDocuments.size+F.modifiedDocuments.size+F.removedDocuments.size>0}(w,_,f)&&c.push(n.Ds.updateTargetData(r,_))});let u=on(),h=ie();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&c.push(n.persistence.referenceDelegate.updateLimboDocument(r,f))}),c.push(gS(r,o,e.documentUpdates).next(f=>{u=f.zi,h=f.ji})),!s.isEqual(X.min())){const f=n.Ds.getLastRemoteSnapshotVersion(r).next(m=>n.Ds.setTargetsMetadata(r,r.currentSequenceNumber,s));c.push(f)}return R.waitFor(c).next(()=>o.apply(r)).next(()=>n.localDocuments.getLocalViewOfDocuments(r,u,h)).next(()=>u)}).then(r=>(n.Li=i,r))}function gS(t,e,n){let s=ie(),i=ie();return n.forEach(r=>s=s.add(r)),e.getEntries(t,s).next(r=>{let o=on();return n.forEach((c,u)=>{const h=r.get(c);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(c)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(c,u.readTime),o=o.insert(c,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(c,u)):U("LocalStore","Ignoring outdated watch update for ",c,". Current version:",h.version," Watch version:",u.version)}),{zi:o,ji:i}})}function mS(t,e){const n=Z(t);return n.persistence.runTransaction("Get next mutation batch","readonly",s=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(s,e)))}function yS(t,e){const n=Z(t);return n.persistence.runTransaction("Allocate target","readwrite",s=>{let i;return n.Ds.getTargetData(s,e).next(r=>r?(i=r,R.resolve(i)):n.Ds.allocateTargetId(s).next(o=>(i=new Qn(e,o,0,s.currentSequenceNumber),n.Ds.addTargetData(s,i).next(()=>i))))}).then(s=>{const i=n.Li.get(s.targetId);return(i===null||s.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(s.targetId,s),n.qi.set(e,s.targetId)),s})}async function Pc(t,e,n){const s=Z(t),i=s.Li.get(e),r=n?"readwrite":"readwrite-primary";try{n||await s.persistence.runTransaction("Release target",r,o=>s.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!sr(o))throw o;U("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}s.Li=s.Li.remove(e),s.qi.delete(i.target)}function vd(t,e,n){const s=Z(t);let i=X.min(),r=ie();return s.persistence.runTransaction("Execute query","readonly",o=>function(c,u,h){const f=Z(c),m=f.qi.get(h);return m!==void 0?R.resolve(f.Li.get(m)):f.Ds.getTargetData(u,h)}(s,o,rn(e)).next(c=>{if(c)return i=c.lastLimboFreeSnapshotVersion,s.Ds.getMatchingKeysForTargetId(o,c.targetId).next(u=>{r=u})}).next(()=>s.Bi.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?r:ie())).next(c=>(wS(s,fA(e),c),{documents:c,Wi:r})))}function wS(t,e,n){let s=t.Ui.get(e)||X.min();n.forEach((i,r)=>{r.readTime.compareTo(s)>0&&(s=r.readTime)}),t.Ui.set(e,s)}class bd{constructor(){this.activeTargetIds=qg()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class vS{constructor(){this.Br=new bd,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,s){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,n,s){this.Lr[e]=n}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new bd,Promise.resolve()}handleUserChange(e,n,s){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class bS{qr(e){}shutdown(){}}/**
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
 */class Ed{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){U("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){U("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let kr=null;function Va(){return kr===null?kr=268435456+Math.round(2147483648*Math.random()):kr++,"0x"+kr.toString(16)}/**
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
 */const ES={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class _S{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const He="WebChannelConnection";class IS extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.ro=n+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,n,s,i,r){const o=Va(),c=this.ao(e,n);U("RestConnection",`Sending RPC '${e}' ${o}:`,c,s);const u={};return this.ho(u,i,r),this.lo(e,c,u,s).then(h=>(U("RestConnection",`Received RPC '${e}' ${o}: `,h),h),h=>{throw ao("RestConnection",`RPC '${e}' ${o} failed with error: `,h,"url: ",c,"request:",s),h})}fo(e,n,s,i,r,o){return this.co(e,n,s,i,r)}ho(e,n,s){e["X-Goog-Api-Client"]="gl-js/ fire/"+qs,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,r)=>e[r]=i),s&&s.headers.forEach((i,r)=>e[r]=i)}ao(e,n){const s=ES[e];return`${this.ro}/v1/${n}:${s}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,n,s,i){const r=Va();return new Promise((o,c)=>{const u=new LC;u.setWithCredentials(!0),u.listenOnce(PC.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Ua.NO_ERROR:const f=u.getResponseJson();U(He,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(f)),o(f);break;case Ua.TIMEOUT:U(He,`RPC '${e}' ${r} timed out`),c(new L(T.DEADLINE_EXCEEDED,"Request time out"));break;case Ua.HTTP_ERROR:const m=u.getStatus();if(U(He,`RPC '${e}' ${r} failed with status:`,m,"response text:",u.getResponseText()),m>0){let w=u.getResponseJson();Array.isArray(w)&&(w=w[0]);const _=w==null?void 0:w.error;if(_&&_.status&&_.message){const N=function(A){const F=A.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(F)>=0?F:T.UNKNOWN}(_.status);c(new L(N,_.message))}else c(new L(T.UNKNOWN,"Server responded with status "+u.getStatus()))}else c(new L(T.UNAVAILABLE,"Connection failed."));break;default:z()}}finally{U(He,`RPC '${e}' ${r} completed.`)}});const h=JSON.stringify(i);U(He,`RPC '${e}' ${r} sending request:`,i),u.send(n,"POST",h,s,15)})}wo(e,n,s){const i=Va(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=DC(),c=NC(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(u.xmlHttpFactory=new MC({})),this.ho(u.initMessageHeaders,n,s),u.encodeInitMessageHeaders=!0;const h=r.join("");U(He,`Creating RPC '${e}' stream ${i}: ${h}`,u);const f=o.createWebChannel(h,u);let m=!1,w=!1;const _=new _S({Wr:A=>{w?U(He,`Not sending because RPC '${e}' stream ${i} is closed:`,A):(m||(U(He,`Opening RPC '${e}' stream ${i} transport.`),f.open(),m=!0),U(He,`RPC '${e}' stream ${i} sending:`,A),f.send(A))},Hr:()=>f.close()}),N=(A,F,H)=>{A.listen(F,oe=>{try{H(oe)}catch(P){setTimeout(()=>{throw P},0)}})};return N(f,Tr.EventType.OPEN,()=>{w||U(He,`RPC '${e}' stream ${i} transport opened.`)}),N(f,Tr.EventType.CLOSE,()=>{w||(w=!0,U(He,`RPC '${e}' stream ${i} transport closed`),_.so())}),N(f,Tr.EventType.ERROR,A=>{w||(w=!0,ao(He,`RPC '${e}' stream ${i} transport errored:`,A),_.so(new L(T.UNAVAILABLE,"The operation could not be completed")))}),N(f,Tr.EventType.MESSAGE,A=>{var F;if(!w){const H=A.data[0];ve(!!H);const oe=H,P=oe.error||((F=oe[0])===null||F===void 0?void 0:F.error);if(P){U(He,`RPC '${e}' stream ${i} received error:`,P);const se=P.status;let ee=function(De){const Q=Se[De];if(Q!==void 0)return em(Q)}(se),G=P.message;ee===void 0&&(ee=T.INTERNAL,G="Unknown error status: "+se+" with message "+P.message),w=!0,_.so(new L(ee,G)),f.close()}else U(He,`RPC '${e}' stream ${i} received:`,H),_.io(H)}}),N(c,OC.STAT_EVENT,A=>{A.stat===Jh.PROXY?U(He,`RPC '${e}' stream ${i} detected buffering proxy`):A.stat===Jh.NOPROXY&&U(He,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{_.no()},0),_}}function ja(){return typeof document<"u"?document:null}/**
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
 */function ea(t){return new MA(t,!0)}/**
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
 */class hm{constructor(e,n,s=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=n,this._o=s,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const n=Math.floor(this.po+this.Ro()),s=Math.max(0,Date.now()-this.To),i=Math.max(0,n-s);i>0&&U("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${n} ms, last attempt: ${s} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class dm{constructor(e,n,s,i,r,o,c,u){this.Ws=e,this.bo=s,this.Po=i,this.connection=r,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=c,this.listener=u,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new hm(e,n)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,n){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(sn(n.toString()),sn("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),n=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([s,i])=>{this.Vo===n&&this.Ko(s,i)},s=>{e(()=>{const i=new L(T.UNKNOWN,"Fetching auth token failed: "+s.message);return this.Go(i)})})}Ko(e,n){const s=this.Uo(this.Vo);this.stream=this.Qo(e,n),this.stream.Jr(()=>{s(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(i=>{s(()=>this.Go(i))}),this.stream.onMessage(i=>{s(()=>this.onMessage(i))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return U("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return n=>{this.Ws.enqueueAndForget(()=>this.Vo===e?n():(U("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class TS extends dm{constructor(e,n,s,i,r,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r}Qo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.Co.reset();const n=FA(this.serializer,e),s=function(i){if(!("targetChange"in i))return X.min();const r=i.targetChange;return r.targetIds&&r.targetIds.length?X.min():r.readTime?Ht(r.readTime):X.min()}(e);return this.listener.zo(n,s)}jo(e){const n={};n.database=Nc(this.serializer),n.addTarget=function(i,r){let o;const c=r.target;return o=Ac(c)?{documents:VA(i,c)}:{query:jA(i,c)},o.targetId=r.targetId,r.resumeToken.approximateByteSize()>0?o.resumeToken=sm(i,r.resumeToken):r.snapshotVersion.compareTo(X.min())>0&&(o.readTime=fo(i,r.snapshotVersion.toTimestamp())),o}(this.serializer,e);const s=qA(this.serializer,e);s&&(n.labels=s),this.Fo(n)}Wo(e){const n={};n.database=Nc(this.serializer),n.removeTarget=e,this.Fo(n)}}class CS extends dm{constructor(e,n,s,i,r,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,s,i,o),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(ve(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const n=$A(e.writeResults,e.commitTime),s=Ht(e.commitTime);return this.listener.Zo(s,n)}return ve(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Nc(this.serializer),this.Fo(e)}Yo(e){const n={streamToken:this.lastStreamToken,writes:e.map(s=>UA(this.serializer,s))};this.Fo(n)}}/**
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
 */class AS extends class{}{constructor(e,n,s,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=s,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,n,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,r])=>this.connection.co(e,n,s,i,r)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new L(T.UNKNOWN,i.toString())})}fo(e,n,s,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([r,o])=>this.connection.fo(e,n,s,r,o,i)).catch(r=>{throw r.name==="FirebaseError"?(r.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),r):new L(T.UNKNOWN,r.toString())})}terminate(){this.eu=!0}}class SS{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(sn(n),this.ru=!1):U("OnlineStateTracker",n)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class kS{constructor(e,n,s,i,r){this.localStore=e,this.datastore=n,this.asyncQueue=s,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr(o=>{s.enqueueAndForget(async()=>{is(this)&&(U("RemoteStore","Restarting streams for network reachability change."),await async function(c){const u=Z(c);u.du.add(4),await or(u),u.mu.set("Unknown"),u.du.delete(4),await ta(u)}(this))})}),this.mu=new SS(s,i)}}async function ta(t){if(is(t))for(const e of t.wu)await e(!0)}async function or(t){for(const e of t.wu)await e(!1)}function fm(t,e){const n=Z(t);n.fu.has(e.targetId)||(n.fu.set(e.targetId,e),Ql(n)?Yl(n):Gs(n).No()&&Gl(n,e))}function pm(t,e){const n=Z(t),s=Gs(n);n.fu.delete(e),s.No()&&gm(n,e),n.fu.size===0&&(s.No()?s.$o():is(n)&&n.mu.set("Unknown"))}function Gl(t,e){t.gu.Ot(e.targetId),Gs(t).jo(e)}function gm(t,e){t.gu.Ot(e),Gs(t).Wo(e)}function Yl(t){t.gu=new DA({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.fu.get(e)||null}),Gs(t).start(),t.mu.ou()}function Ql(t){return is(t)&&!Gs(t).xo()&&t.fu.size>0}function is(t){return Z(t).du.size===0}function mm(t){t.gu=void 0}async function xS(t){t.fu.forEach((e,n)=>{Gl(t,e)})}async function RS(t,e){mm(t),Ql(t)?(t.mu.au(e),Yl(t)):t.mu.set("Unknown")}async function DS(t,e,n){if(t.mu.set("Online"),e instanceof nm&&e.state===2&&e.cause)try{await async function(s,i){const r=i.cause;for(const o of i.targetIds)s.fu.has(o)&&(await s.remoteSyncer.rejectListen(o,r),s.fu.delete(o),s.gu.removeTarget(o))}(t,e)}catch(s){U("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),s),await po(t,s)}else if(e instanceof Ur?t.gu.Kt(e):e instanceof tm?t.gu.Jt(e):t.gu.zt(e),!n.isEqual(X.min()))try{const s=await um(t.localStore);n.compareTo(s)>=0&&await function(i,r){const o=i.gu.Xt(r);return o.targetChanges.forEach((c,u)=>{if(c.resumeToken.approximateByteSize()>0){const h=i.fu.get(u);h&&i.fu.set(u,h.withResumeToken(c.resumeToken,r))}}),o.targetMismatches.forEach(c=>{const u=i.fu.get(c);if(!u)return;i.fu.set(c,u.withResumeToken(et.EMPTY_BYTE_STRING,u.snapshotVersion)),gm(i,c);const h=new Qn(u.target,c,1,u.sequenceNumber);Gl(i,h)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(s){U("RemoteStore","Failed to raise snapshot:",s),await po(t,s)}}async function po(t,e,n){if(!sr(e))throw e;t.du.add(1),await or(t),t.mu.set("Offline"),n||(n=()=>um(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{U("RemoteStore","Retrying IndexedDB access"),await n(),t.du.delete(1),await ta(t)})}function ym(t,e){return e().catch(n=>po(t,n,e))}async function na(t){const e=Z(t),n=Sn(e);let s=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;NS(e);)try{const i=await mS(e.localStore,s);if(i===null){e.lu.length===0&&n.$o();break}s=i.batchId,PS(e,i)}catch(i){await po(e,i)}wm(e)&&vm(e)}function NS(t){return is(t)&&t.lu.length<10}function PS(t,e){t.lu.push(e);const n=Sn(t);n.No()&&n.Jo&&n.Yo(e.mutations)}function wm(t){return is(t)&&!Sn(t).xo()&&t.lu.length>0}function vm(t){Sn(t).start()}async function OS(t){Sn(t).tu()}async function MS(t){const e=Sn(t);for(const n of t.lu)e.Yo(n.mutations)}async function LS(t,e,n){const s=t.lu.shift(),i=jl.from(s,e,n);await ym(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await na(t)}async function BS(t,e){e&&Sn(t).Jo&&await async function(n,s){if(i=s.code,RA(i)&&i!==T.ABORTED){const r=n.lu.shift();Sn(n).Oo(),await ym(n,()=>n.remoteSyncer.rejectFailedWrite(r.batchId,s)),await na(n)}var i}(t,e),wm(t)&&vm(t)}async function _d(t,e){const n=Z(t);n.asyncQueue.verifyOperationInProgress(),U("RemoteStore","RemoteStore received new credentials");const s=is(n);n.du.add(3),await or(n),s&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.du.delete(3),await ta(n)}async function FS(t,e){const n=Z(t);e?(n.du.delete(2),await ta(n)):e||(n.du.add(2),await or(n),n.mu.set("Unknown"))}function Gs(t){return t.yu||(t.yu=function(e,n,s){const i=Z(e);return i.nu(),new TS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:xS.bind(null,t),Zr:RS.bind(null,t),zo:DS.bind(null,t)}),t.wu.push(async e=>{e?(t.yu.Oo(),Ql(t)?Yl(t):t.mu.set("Unknown")):(await t.yu.stop(),mm(t))})),t.yu}function Sn(t){return t.pu||(t.pu=function(e,n,s){const i=Z(e);return i.nu(),new CS(n,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,s)}(t.datastore,t.asyncQueue,{Jr:OS.bind(null,t),Zr:BS.bind(null,t),Xo:MS.bind(null,t),Zo:LS.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Oo(),await na(t)):(await t.pu.stop(),t.lu.length>0&&(U("RemoteStore",`Stopping write stream with ${t.lu.length} pending writes`),t.lu=[]))})),t.pu}/**
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
 */class Xl{constructor(e,n,s,i,r){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=s,this.op=i,this.removalCallback=r,this.deferred=new Yn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,s,i,r){const o=Date.now()+s,c=new Xl(e,n,o,i,r);return c.start(s),c}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new L(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Jl(t,e){if(sn("AsyncQueue",`${e}: ${t}`),sr(t))return new L(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
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
 */class Ts{constructor(e){this.comparator=e?(n,s)=>e(n,s)||j.comparator(n.key,s.key):(n,s)=>j.comparator(n.key,s.key),this.keyedMap=ai(),this.sortedSet=new Me(this.comparator)}static emptySet(e){return new Ts(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,s)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof Ts)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),s=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,r=s.getNext().key;if(!i.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const s=new Ts;return s.comparator=this.comparator,s.keyedMap=e,s.sortedSet=n,s}}/**
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
 */class Id{constructor(){this.Iu=new Me(j.comparator)}track(e){const n=e.doc.key,s=this.Iu.get(n);s?e.type!==0&&s.type===3?this.Iu=this.Iu.insert(n,e):e.type===3&&s.type!==1?this.Iu=this.Iu.insert(n,{type:s.type,doc:e.doc}):e.type===2&&s.type===2?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):e.type===2&&s.type===0?this.Iu=this.Iu.insert(n,{type:0,doc:e.doc}):e.type===1&&s.type===0?this.Iu=this.Iu.remove(n):e.type===1&&s.type===2?this.Iu=this.Iu.insert(n,{type:1,doc:s.doc}):e.type===0&&s.type===1?this.Iu=this.Iu.insert(n,{type:2,doc:e.doc}):z():this.Iu=this.Iu.insert(n,e)}Tu(){const e=[];return this.Iu.inorderTraversal((n,s)=>{e.push(s)}),e}}class Ls{constructor(e,n,s,i,r,o,c,u,h){this.query=e,this.docs=n,this.oldDocs=s,this.docChanges=i,this.mutatedKeys=r,this.fromCache=o,this.syncStateChanged=c,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,s,i,r){const o=[];return n.forEach(c=>{o.push({type:0,doc:c})}),new Ls(e,n,Ts.emptySet(n),o,s,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Yo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,s=e.docChanges;if(n.length!==s.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==s[i].type||!n[i].doc.isEqual(s[i].doc))return!1;return!0}}/**
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
 */class US{constructor(){this.Eu=void 0,this.listeners=[]}}class $S{constructor(){this.queries=new Ws(e=>Ug(e),Yo),this.onlineState="Unknown",this.Au=new Set}}async function VS(t,e){const n=Z(t),s=e.query;let i=!1,r=n.queries.get(s);if(r||(i=!0,r=new US),i)try{r.Eu=await n.onListen(s)}catch(o){const c=Jl(o,`Initialization of query '${xc(e.query)}' failed`);return void e.onError(c)}n.queries.set(s,r),r.listeners.push(e),e.Ru(n.onlineState),r.Eu&&e.vu(r.Eu)&&Zl(n)}async function jS(t,e){const n=Z(t),s=e.query;let i=!1;const r=n.queries.get(s);if(r){const o=r.listeners.indexOf(e);o>=0&&(r.listeners.splice(o,1),i=r.listeners.length===0)}if(i)return n.queries.delete(s),n.onUnlisten(s)}function HS(t,e){const n=Z(t);let s=!1;for(const i of e){const r=i.query,o=n.queries.get(r);if(o){for(const c of o.listeners)c.vu(i)&&(s=!0);o.Eu=i}}s&&Zl(n)}function qS(t,e,n){const s=Z(t),i=s.queries.get(e);if(i)for(const r of i.listeners)r.onError(n);s.queries.delete(e)}function Zl(t){t.Au.forEach(e=>{e.next()})}class zS{constructor(e,n,s){this.query=e,this.bu=n,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=s||{}}vu(e){if(!this.options.includeMetadataChanges){const s=[];for(const i of e.docChanges)i.type!==3&&s.push(i);e=new Ls(e.query,e.docs,e.oldDocs,s,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),n=!0):this.Du(e,this.onlineState)&&(this.Cu(e),n=!0),this.Vu=e,n}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let n=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),n=!0),n}Du(e,n){if(!e.fromCache)return!0;const s=n!=="Offline";return(!this.options.xu||!s)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const n=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ls.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class bm{constructor(e){this.key=e}}class Em{constructor(e){this.key=e}}class KS{constructor(e,n){this.query=e,this.Lu=n,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=ie(),this.mutatedKeys=ie(),this.Ku=$g(e),this.Gu=new Ts(this.Ku)}get Qu(){return this.Lu}zu(e,n){const s=n?n.ju:new Id,i=n?n.Gu:this.Gu;let r=n?n.mutatedKeys:this.mutatedKeys,o=i,c=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,m)=>{const w=i.get(f),_=Qo(this.query,m)?m:null,N=!!w&&this.mutatedKeys.has(w.key),A=!!_&&(_.hasLocalMutations||this.mutatedKeys.has(_.key)&&_.hasCommittedMutations);let F=!1;w&&_?w.data.isEqual(_.data)?N!==A&&(s.track({type:3,doc:_}),F=!0):this.Wu(w,_)||(s.track({type:2,doc:_}),F=!0,(u&&this.Ku(_,u)>0||h&&this.Ku(_,h)<0)&&(c=!0)):!w&&_?(s.track({type:0,doc:_}),F=!0):w&&!_&&(s.track({type:1,doc:w}),F=!0,(u||h)&&(c=!0)),F&&(_?(o=o.add(_),r=A?r.add(f):r.delete(f)):(o=o.delete(f),r=r.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),r=r.delete(f.key),s.track({type:1,doc:f})}return{Gu:o,ju:s,Mi:c,mutatedKeys:r}}Wu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,s){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort((h,f)=>function(m,w){const _=N=>{switch(N){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return z()}};return _(m)-_(w)}(h.type,f.type)||this.Ku(h.doc,f.doc)),this.Hu(s);const o=n?this.Ju():[],c=this.Uu.size===0&&this.current?1:0,u=c!==this.qu;return this.qu=c,r.length!==0||u?{snapshot:new Ls(this.query,e.Gu,i,r,e.mutatedKeys,c===0,u,!1,!!s&&s.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Id,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(n=>this.Lu=this.Lu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Lu=this.Lu.delete(n)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=ie(),this.Gu.forEach(s=>{this.Zu(s.key)&&(this.Uu=this.Uu.add(s.key))});const n=[];return e.forEach(s=>{this.Uu.has(s)||n.push(new Em(s))}),this.Uu.forEach(s=>{e.has(s)||n.push(new bm(s))}),n}Xu(e){this.Lu=e.Wi,this.Uu=ie();const n=this.zu(e.documents);return this.applyChanges(n,!0)}tc(){return Ls.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class WS{constructor(e,n,s){this.query=e,this.targetId=n,this.view=s}}class GS{constructor(e){this.key=e,this.ec=!1}}class YS{constructor(e,n,s,i,r,o){this.localStore=e,this.remoteStore=n,this.eventManager=s,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Ws(c=>Ug(c),Yo),this.ic=new Map,this.rc=new Set,this.oc=new Me(j.comparator),this.uc=new Map,this.cc=new zl,this.ac={},this.hc=new Map,this.lc=Ms.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function QS(t,e){const n=ok(t);let s,i;const r=n.sc.get(e);if(r)s=r.targetId,n.sharedClientState.addLocalQueryTarget(s),i=r.view.tc();else{const o=await yS(n.localStore,rn(e));n.isPrimaryClient&&fm(n.remoteStore,o);const c=n.sharedClientState.addLocalQueryTarget(o.targetId);s=o.targetId,i=await XS(n,e,s,c==="current",o.resumeToken)}return i}async function XS(t,e,n,s,i){t.dc=(m,w,_)=>async function(N,A,F,H){let oe=A.view.zu(F);oe.Mi&&(oe=await vd(N.localStore,A.query,!1).then(({documents:ee})=>A.view.zu(ee,oe)));const P=H&&H.targetChanges.get(A.targetId),se=A.view.applyChanges(oe,N.isPrimaryClient,P);return Cd(N,A.targetId,se.Yu),se.snapshot}(t,m,w,_);const r=await vd(t.localStore,e,!0),o=new KS(e,r.Wi),c=o.zu(r.documents),u=rr.createSynthesizedTargetChangeForCurrentChange(n,s&&t.onlineState!=="Offline",i),h=o.applyChanges(c,t.isPrimaryClient,u);Cd(t,n,h.Yu);const f=new WS(e,n,o);return t.sc.set(e,f),t.ic.has(n)?t.ic.get(n).push(e):t.ic.set(n,[e]),h.snapshot}async function JS(t,e){const n=Z(t),s=n.sc.get(e),i=n.ic.get(s.targetId);if(i.length>1)return n.ic.set(s.targetId,i.filter(r=>!Yo(r,e))),void n.sc.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(s.targetId),n.sharedClientState.isActiveQueryTarget(s.targetId)||await Pc(n.localStore,s.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(s.targetId),pm(n.remoteStore,s.targetId),Oc(n,s.targetId)}).catch(nr)):(Oc(n,s.targetId),await Pc(n.localStore,s.targetId,!0))}async function ZS(t,e,n){const s=ak(t);try{const i=await function(r,o){const c=Z(r),u=Ne.now(),h=o.reduce((w,_)=>w.add(_.key),ie());let f,m;return c.persistence.runTransaction("Locally write mutations","readwrite",w=>{let _=on(),N=ie();return c.Ki.getEntries(w,h).next(A=>{_=A,_.forEach((F,H)=>{H.isValidDocument()||(N=N.add(F))})}).next(()=>c.localDocuments.getOverlayedDocuments(w,_)).next(A=>{f=A;const F=[];for(const H of o){const oe=CA(H,f.get(H.key).overlayedDocument);oe!=null&&F.push(new ss(H.key,oe,Dg(oe.value.mapValue),Zt.exists(!0)))}return c.mutationQueue.addMutationBatch(w,u,F,o)}).next(A=>{m=A;const F=A.applyToLocalDocumentSet(f,N);return c.documentOverlayCache.saveOverlays(w,A.batchId,F)})}).then(()=>({batchId:m.batchId,changes:jg(f)}))}(s.localStore,e);s.sharedClientState.addPendingMutation(i.batchId),function(r,o,c){let u=r.ac[r.currentUser.toKey()];u||(u=new Me(de)),u=u.insert(o,c),r.ac[r.currentUser.toKey()]=u}(s,i.batchId,n),await ar(s,i.changes),await na(s.remoteStore)}catch(i){const r=Jl(i,"Failed to persist write");n.reject(r)}}async function _m(t,e){const n=Z(t);try{const s=await pS(n.localStore,e);e.targetChanges.forEach((i,r)=>{const o=n.uc.get(r);o&&(ve(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.ec=!0:i.modifiedDocuments.size>0?ve(o.ec):i.removedDocuments.size>0&&(ve(o.ec),o.ec=!1))}),await ar(n,s,e)}catch(s){await nr(s)}}function Td(t,e,n){const s=Z(t);if(s.isPrimaryClient&&n===0||!s.isPrimaryClient&&n===1){const i=[];s.sc.forEach((r,o)=>{const c=o.view.Ru(e);c.snapshot&&i.push(c.snapshot)}),function(r,o){const c=Z(r);c.onlineState=o;let u=!1;c.queries.forEach((h,f)=>{for(const m of f.listeners)m.Ru(o)&&(u=!0)}),u&&Zl(c)}(s.eventManager,e),i.length&&s.nc.zo(i),s.onlineState=e,s.isPrimaryClient&&s.sharedClientState.setOnlineState(e)}}async function ek(t,e,n){const s=Z(t);s.sharedClientState.updateQueryState(e,"rejected",n);const i=s.uc.get(e),r=i&&i.key;if(r){let o=new Me(j.comparator);o=o.insert(r,ze.newNoDocument(r,X.min()));const c=ie().add(r),u=new Zo(X.min(),new Map,new Pe(de),o,c);await _m(s,u),s.oc=s.oc.remove(r),s.uc.delete(e),eu(s)}else await Pc(s.localStore,e,!1).then(()=>Oc(s,e,n)).catch(nr)}async function tk(t,e){const n=Z(t),s=e.batch.batchId;try{const i=await fS(n.localStore,e);Tm(n,s,null),Im(n,s),n.sharedClientState.updateMutationState(s,"acknowledged"),await ar(n,i)}catch(i){await nr(i)}}async function nk(t,e,n){const s=Z(t);try{const i=await function(r,o){const c=Z(r);return c.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let h;return c.mutationQueue.lookupMutationBatch(u,o).next(f=>(ve(f!==null),h=f.keys(),c.mutationQueue.removeMutationBatch(u,f))).next(()=>c.mutationQueue.performConsistencyCheck(u)).next(()=>c.documentOverlayCache.removeOverlaysForBatchId(u,h,o)).next(()=>c.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(u,h)).next(()=>c.localDocuments.getDocuments(u,h))})}(s.localStore,e);Tm(s,e,n),Im(s,e),s.sharedClientState.updateMutationState(e,"rejected",n),await ar(s,i)}catch(i){await nr(i)}}function Im(t,e){(t.hc.get(e)||[]).forEach(n=>{n.resolve()}),t.hc.delete(e)}function Tm(t,e,n){const s=Z(t);let i=s.ac[s.currentUser.toKey()];if(i){const r=i.get(e);r&&(n?r.reject(n):r.resolve(),i=i.remove(e)),s.ac[s.currentUser.toKey()]=i}}function Oc(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const s of t.ic.get(e))t.sc.delete(s),n&&t.nc.wc(s,n);t.ic.delete(e),t.isPrimaryClient&&t.cc.hs(e).forEach(s=>{t.cc.containsKey(s)||Cm(t,s)})}function Cm(t,e){t.rc.delete(e.path.canonicalString());const n=t.oc.get(e);n!==null&&(pm(t.remoteStore,n),t.oc=t.oc.remove(e),t.uc.delete(n),eu(t))}function Cd(t,e,n){for(const s of n)s instanceof bm?(t.cc.addReference(s.key,e),sk(t,s)):s instanceof Em?(U("SyncEngine","Document no longer in limbo: "+s.key),t.cc.removeReference(s.key,e),t.cc.containsKey(s.key)||Cm(t,s.key)):z()}function sk(t,e){const n=e.key,s=n.path.canonicalString();t.oc.get(n)||t.rc.has(s)||(U("SyncEngine","New document in limbo: "+n),t.rc.add(s),eu(t))}function eu(t){for(;t.rc.size>0&&t.oc.size<t.maxConcurrentLimboResolutions;){const e=t.rc.values().next().value;t.rc.delete(e);const n=new j(we.fromString(e)),s=t.lc.next();t.uc.set(s,new GS(n)),t.oc=t.oc.insert(n,s),fm(t.remoteStore,new Qn(rn($l(n.path)),s,2,Ll.ct))}}async function ar(t,e,n){const s=Z(t),i=[],r=[],o=[];s.sc.isEmpty()||(s.sc.forEach((c,u)=>{o.push(s.dc(u,e,n).then(h=>{if((h||n)&&s.isPrimaryClient&&s.sharedClientState.updateQueryState(u.targetId,h!=null&&h.fromCache?"not-current":"current"),h){i.push(h);const f=Wl.Di(u.targetId,h);r.push(f)}}))}),await Promise.all(o),s.nc.zo(i),await async function(c,u){const h=Z(c);try{await h.persistence.runTransaction("notifyLocalViewChanges","readwrite",f=>R.forEach(u,m=>R.forEach(m.Vi,w=>h.persistence.referenceDelegate.addReference(f,m.targetId,w)).next(()=>R.forEach(m.Si,w=>h.persistence.referenceDelegate.removeReference(f,m.targetId,w)))))}catch(f){if(!sr(f))throw f;U("LocalStore","Failed to update sequence numbers: "+f)}for(const f of u){const m=f.targetId;if(!f.fromCache){const w=h.Li.get(m),_=w.snapshotVersion,N=w.withLastLimboFreeSnapshotVersion(_);h.Li=h.Li.insert(m,N)}}}(s.localStore,r))}async function ik(t,e){const n=Z(t);if(!n.currentUser.isEqual(e)){U("SyncEngine","User change. New user:",e.toKey());const s=await lm(n.localStore,e);n.currentUser=e,function(i,r){i.hc.forEach(o=>{o.forEach(c=>{c.reject(new L(T.CANCELLED,r))})}),i.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,s.removedBatchIds,s.addedBatchIds),await ar(n,s.Qi)}}function rk(t,e){const n=Z(t),s=n.uc.get(e);if(s&&s.ec)return ie().add(s.key);{let i=ie();const r=n.ic.get(e);if(!r)return i;for(const o of r){const c=n.sc.get(o);i=i.unionWith(c.view.Qu)}return i}}function ok(t){const e=Z(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=_m.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=ek.bind(null,e),e.nc.zo=HS.bind(null,e.eventManager),e.nc.wc=qS.bind(null,e.eventManager),e}function ak(t){const e=Z(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=tk.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=nk.bind(null,e),e}class Ad{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=ea(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return dS(this.persistence,new uS,e.initialUser,this.serializer)}createPersistence(e){return new cS(Kl.Fs,this.serializer)}createSharedClientState(e){return new vS}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class ck{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=s=>Td(this.syncEngine,s,1),this.remoteStore.remoteSyncer.handleCredentialChange=ik.bind(null,this.syncEngine),await FS(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new $S}createDatastore(e){const n=ea(e.databaseInfo.databaseId),s=(i=e.databaseInfo,new IS(i));var i;return function(r,o,c,u){return new AS(r,o,c,u)}(e.authCredentials,e.appCheckCredentials,s,n)}createRemoteStore(e){return n=this.localStore,s=this.datastore,i=e.asyncQueue,r=c=>Td(this.syncEngine,c,0),o=Ed.D()?new Ed:new bS,new kS(n,s,i,r,o);var n,s,i,r,o}createSyncEngine(e,n){return function(s,i,r,o,c,u,h){const f=new YS(s,i,r,o,c,u);return h&&(f.fc=!0),f}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=Z(e);U("RemoteStore","RemoteStore shutting down."),n.du.add(5),await or(n),n._u.shutdown(),n.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */class lk{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):sn("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
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
 */class uk{constructor(e,n,s,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=s,this.databaseInfo=i,this.user=qe.UNAUTHENTICATED,this.clientId=Sg.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(s,async r=>{U("FirestoreClient","Received user=",r.uid),await this.authCredentialListener(r),this.user=r}),this.appCheckCredentials.start(s,r=>(U("FirestoreClient","Received new app check token=",r),this.appCheckCredentialListener(r,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new L(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Yn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const s=Jl(n,"Failed to shutdown persistence");e.reject(s)}}),e.promise}}async function Ha(t,e){t.asyncQueue.verifyOperationInProgress(),U("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let s=n.initialUser;t.setCredentialChangeListener(async i=>{s.isEqual(i)||(await lm(e.localStore,i),s=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Sd(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dk(t);U("FirestoreClient","Initializing OnlineComponentProvider");const s=await t.getConfiguration();await e.initialize(n,s),t.setCredentialChangeListener(i=>_d(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,r)=>_d(e.remoteStore,r)),t._onlineComponents=e}function hk(t){return t.name==="FirebaseError"?t.code===T.FAILED_PRECONDITION||t.code===T.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function dk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){U("FirestoreClient","Using user provided OfflineComponentProvider");try{await Ha(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!hk(n))throw n;ao("Error using user provided cache. Falling back to memory cache: "+n),await Ha(t,new Ad)}}else U("FirestoreClient","Using default OfflineComponentProvider"),await Ha(t,new Ad);return t._offlineComponents}async function Am(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(U("FirestoreClient","Using user provided OnlineComponentProvider"),await Sd(t,t._uninitializedComponentsProvider._online)):(U("FirestoreClient","Using default OnlineComponentProvider"),await Sd(t,new ck))),t._onlineComponents}function fk(t){return Am(t).then(e=>e.syncEngine)}async function kd(t){const e=await Am(t),n=e.eventManager;return n.onListen=QS.bind(null,e.syncEngine),n.onUnlisten=JS.bind(null,e.syncEngine),n}/**
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
 */const xd=new Map;/**
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
 */function Sm(t,e,n){if(!n)throw new L(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function pk(t,e,n,s){if(e===!0&&s===!0)throw new L(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Rd(t){if(!j.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Dd(t){if(j.isDocumentKey(t))throw new L(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function sa(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":z()}function wi(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new L(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=sa(t);throw new L(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Nd{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new L(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new L(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,pk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ia{constructor(e,n,s,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=s,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Nd({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new L(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new L(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Nd(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new BC;switch(n.type){case"firstParty":return new VC(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new L(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=xd.get(e);n&&(U("ComponentProvider","Removing Datastore"),xd.delete(e),n.terminate())}(this),Promise.resolve()}}function gk(t,e,n,s={}){var i;const r=(t=wi(t,ia))._getSettings();if(r.host!=="firestore.googleapis.com"&&r.host!==e&&ao("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},r),{host:`${e}:${n}`,ssl:!1})),s.mockUserToken){let o,c;if(typeof s.mockUserToken=="string")o=s.mockUserToken,c=qe.MOCK_USER;else{o=fE(s.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=s.mockUserToken.sub||s.mockUserToken.user_id;if(!u)throw new L(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");c=new qe(u)}t._authCredentials=new FC(new Ag(o,c))}}/**
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
 */class yt{constructor(e,n,s){this.converter=n,this._key=s,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new _n(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new yt(this.firestore,e,this._key)}}class rs{constructor(e,n,s){this.converter=n,this._query=s,this.type="query",this.firestore=e}withConverter(e){return new rs(this.firestore,e,this._query)}}class _n extends rs{constructor(e,n,s){super(e,n,$l(s)),this._path=s,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new yt(this.firestore,null,new j(e))}withConverter(e){return new _n(this.firestore,e,this._path)}}function km(t,e,...n){if(t=rt(t),Sm("collection","path",e),t instanceof ia){const s=we.fromString(e,...n);return Dd(s),new _n(t,null,s)}{if(!(t instanceof yt||t instanceof _n))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Dd(s),new _n(t.firestore,null,s)}}function mk(t,e,...n){if(t=rt(t),arguments.length===1&&(e=Sg.A()),Sm("doc","path",e),t instanceof ia){const s=we.fromString(e,...n);return Rd(s),new yt(t,null,new j(s))}{if(!(t instanceof yt||t instanceof _n))throw new L(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const s=t._path.child(we.fromString(e,...n));return Rd(s),new yt(t.firestore,t instanceof _n?t.converter:null,new j(s))}}/**
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
 */class yk{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new hm(this,"async_queue_retry"),this.qc=()=>{const n=ja();n&&U("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Co.vo()};const e=ja();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const n=ja();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const n=new Yn;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!sr(e))throw e;U("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const n=this.Nc.then(()=>(this.Fc=!0,e().catch(s=>{this.Mc=s,this.Fc=!1;const i=function(r){let o=r.message||"";return r.stack&&(o=r.stack.includes(r.message)?r.stack:r.message+`
`+r.stack),o}(s);throw sn("INTERNAL UNHANDLED ERROR: ",i),s}).then(s=>(this.Fc=!1,s))));return this.Nc=n,n}enqueueAfterDelay(e,n,s){this.Uc(),this.Lc.indexOf(e)>-1&&(n=0);const i=Xl.createAndSchedule(this,e,n,s,r=>this.Qc(r));return this.$c.push(i),i}Uc(){this.Mc&&z()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const n of this.$c)if(n.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((n,s)=>n.targetTimeMs-s.targetTimeMs);for(const n of this.$c)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const n=this.$c.indexOf(e);this.$c.splice(n,1)}}function Pd(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const s=e;for(const i of n)if(i in s&&typeof s[i]=="function")return!0;return!1}(t,["next","error","complete"])}class go extends ia{constructor(e,n,s,i){super(e,n,s,i),this.type="firestore",this._queue=new yk,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Rm(this),this._firestoreClient.terminate()}}function wk(t,e){const n=typeof t=="object"?t:Vf(),s=typeof t=="string"?t:e||"(default)",i=rl(n,"firestore").getImmediate({identifier:s});if(!i._initialized){const r=uE("firestore");r&&gk(i,...r)}return i}function xm(t){return t._firestoreClient||Rm(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Rm(t){var e,n,s;const i=t._freezeSettings(),r=function(o,c,u,h){return new eA(o,c,u,h.host,h.ssl,h.experimentalForceLongPolling,h.experimentalAutoDetectLongPolling,h.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._firestoreClient=new uk(t._authCredentials,t._appCheckCredentials,t._queue,r),!((n=i.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((s=i.cache)===null||s===void 0)&&s._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.cache.kind,_offline:i.cache._offlineComponentProvider,_online:i.cache._onlineComponentProvider})}/**
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
 */class Bs{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Bs(et.fromBase64String(e))}catch(n){throw new L(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Bs(et.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class tu{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new L(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ge(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Dm{constructor(e){this._methodName=e}}/**
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
 */class nu{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new L(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new L(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}}/**
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
 */const vk=/^__.*__$/;class bk{constructor(e,n,s){this.data=e,this.fieldMask=n,this.fieldTransforms=s}toMutation(e,n){return this.fieldMask!==null?new ss(e,this.data,this.fieldMask,n,this.fieldTransforms):new ir(e,this.data,n,this.fieldTransforms)}}function Nm(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw z()}}class su{constructor(e,n,s,i,r,o){this.settings=e,this.databaseId=n,this.serializer=s,this.ignoreUndefinedProperties=i,r===void 0&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new su(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.ea(e),i}na(e){var n;const s=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Zc({path:s,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return mo(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(Nm(this.Yc)&&vk.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Ek{constructor(e,n,s){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=s||ea(e)}ua(e,n,s,i=!1){return new su({Yc:e,methodName:n,oa:s,path:Ge.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Pm(t){const e=t._freezeSettings(),n=ea(t._databaseId);return new Ek(t._databaseId,!!e.ignoreUndefinedProperties,n)}function _k(t,e,n,s,i,r={}){const o=t.ua(r.merge||r.mergeFields?2:0,e,n,i);Lm("Data must be an object, but it was:",o,s);const c=Om(s,o);let u,h;if(r.merge)u=new Rt(o.fieldMask),h=o.fieldTransforms;else if(r.mergeFields){const f=[];for(const m of r.mergeFields){const w=Tk(e,m,n);if(!o.contains(w))throw new L(T.INVALID_ARGUMENT,`Field '${w}' is specified in your field mask but missing from your input data.`);Ak(f,w)||f.push(w)}u=new Rt(f),h=o.fieldTransforms.filter(m=>u.covers(m.field))}else u=null,h=o.fieldTransforms;return new bk(new It(c),u,h)}function Ik(t,e,n,s=!1){return iu(n,t.ua(s?4:3,e))}function iu(t,e){if(Mm(t=rt(t)))return Lm("Unsupported field value:",e,t),Om(t,e);if(t instanceof Dm)return function(n,s){if(!Nm(s.Yc))throw s.ia(`${n._methodName}() can only be used with update() and set()`);if(!s.path)throw s.ia(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(s);i&&s.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(n,s){const i=[];let r=0;for(const o of n){let c=iu(o,s.sa(r));c==null&&(c={nullValue:"NULL_VALUE"}),i.push(c),r++}return{arrayValue:{values:i}}}(t,e)}return function(n,s){if((n=rt(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return vA(s.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ne.fromDate(n);return{timestampValue:fo(s.serializer,i)}}if(n instanceof Ne){const i=new Ne(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:fo(s.serializer,i)}}if(n instanceof nu)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Bs)return{bytesValue:sm(s.serializer,n._byteString)};if(n instanceof yt){const i=s.databaseId,r=n.firestore._databaseId;if(!r.isEqual(i))throw s.ia(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:ql(n.firestore._databaseId||s.databaseId,n._key.path)}}throw s.ia(`Unsupported field value: ${sa(n)}`)}(t,e)}function Om(t,e){const n={};return kg(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):zs(t,(s,i)=>{const r=iu(i,e.Xc(s));r!=null&&(n[s]=r)}),{mapValue:{fields:n}}}function Mm(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ne||t instanceof nu||t instanceof Bs||t instanceof yt||t instanceof Dm)}function Lm(t,e,n){if(!Mm(n)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(n)){const s=sa(n);throw s==="an object"?e.ia(t+" a custom object"):e.ia(t+" "+s)}}function Tk(t,e,n){if((e=rt(e))instanceof tu)return e._internalPath;if(typeof e=="string")return Bm(t,e);throw mo("Field path arguments must be of type string or ",t,!1,void 0,n)}const Ck=new RegExp("[~\\*/\\[\\]]");function Bm(t,e,n){if(e.search(Ck)>=0)throw mo(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new tu(...e.split("."))._internalPath}catch{throw mo(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function mo(t,e,n,s,i){const r=s&&!s.isEmpty(),o=i!==void 0;let c=`Function ${e}() called with invalid data`;n&&(c+=" (via `toFirestore()`)"),c+=". ";let u="";return(r||o)&&(u+=" (found",r&&(u+=` in field ${s}`),o&&(u+=` in document ${i}`),u+=")"),new L(T.INVALID_ARGUMENT,c+t+u)}function Ak(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */class Fm{constructor(e,n,s,i,r){this._firestore=e,this._userDataWriter=n,this._key=s,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new yt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Sk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(ru("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Sk extends Fm{data(){return super.data()}}function ru(t,e){return typeof e=="string"?Bm(t,e):e instanceof tu?e._internalPath:e._delegate._internalPath}/**
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
 */function kk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new L(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ou{}class Um extends ou{}function xk(t,e,...n){let s=[];e instanceof ou&&s.push(e),s=s.concat(n),function(i){const r=i.filter(c=>c instanceof cu).length,o=i.filter(c=>c instanceof au).length;if(r>1||r>0&&o>0)throw new L(T.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(s);for(const i of s)t=i._apply(t);return t}class au extends Um{constructor(e,n,s){super(),this._field=e,this._op=n,this._value=s,this.type="where"}static _create(e,n,s){return new au(e,n,s)}_apply(e){const n=this._parse(e);return $m(e._query,n),new rs(e.firestore,e.converter,Sc(e._query,n))}_parse(e){const n=Pm(e.firestore);return function(i,r,o,c,u,h,f){let m;if(u.isKeyField()){if(h==="array-contains"||h==="array-contains-any")throw new L(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${h}' queries on documentId().`);if(h==="in"||h==="not-in"){Md(f,h);const w=[];for(const _ of f)w.push(Od(c,i,_));m={arrayValue:{values:w}}}else m=Od(c,i,f)}else h!=="in"&&h!=="not-in"&&h!=="array-contains-any"||Md(f,h),m=Ik(o,r,f,h==="in"||h==="not-in");return Re.create(u,h,m)}(e._query,"where",n,e.firestore._databaseId,this._field,this._op,this._value)}}class cu extends ou{constructor(e,n){super(),this.type=e,this._queryConstraints=n}static _create(e,n){return new cu(e,n)}_parse(e){const n=this._queryConstraints.map(s=>s._parse(e)).filter(s=>s.getFilters().length>0);return n.length===1?n[0]:Pt.create(n,this._getOperator())}_apply(e){const n=this._parse(e);return n.getFilters().length===0?e:(function(s,i){let r=s;const o=i.getFlattenedFilters();for(const c of o)$m(r,c),r=Sc(r,c)}(e._query,n),new rs(e.firestore,e.converter,Sc(e._query,n)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class lu extends Um{constructor(e,n){super(),this._field=e,this._direction=n,this.type="orderBy"}static _create(e,n){return new lu(e,n)}_apply(e){const n=function(s,i,r){if(s.startAt!==null)throw new L(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(s.endAt!==null)throw new L(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new _s(i,r);return function(c,u){if(Vl(c)===null){const h=Go(c);h!==null&&Vm(c,h,u.field)}}(s,o),o}(e._query,this._field,this._direction);return new rs(e.firestore,e.converter,function(s,i){const r=s.explicitOrderBy.concat([i]);return new Ks(s.path,s.collectionGroup,r,s.filters.slice(),s.limit,s.limitType,s.startAt,s.endAt)}(e._query,n))}}function Rk(t,e="asc"){const n=e,s=ru("orderBy",t);return lu._create(s,n)}function Od(t,e,n){if(typeof(n=rt(n))=="string"){if(n==="")throw new L(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Fg(e)&&n.indexOf("/")!==-1)throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const s=e.path.child(we.fromString(n));if(!j.isDocumentKey(s))throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${s}' is not because it has an odd number of segments (${s.length}).`);return id(t,new j(s))}if(n instanceof yt)return id(t,n._key);throw new L(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${sa(n)}.`)}function Md(t,e){if(!Array.isArray(t)||t.length===0)throw new L(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function $m(t,e){if(e.isInequality()){const s=Go(t),i=e.field;if(s!==null&&!s.isEqual(i))throw new L(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${s.toString()}' and '${i.toString()}'`);const r=Vl(t);r!==null&&Vm(t,i,r)}const n=function(s,i){for(const r of s)for(const o of r.getFlattenedFilters())if(i.indexOf(o.op)>=0)return o.op;return null}(t.filters,function(s){switch(s){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(n!==null)throw n===e.op?new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new L(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${n.toString()}' filters.`)}function Vm(t,e,n){if(!n.isEqual(e))throw new L(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Dk{convertValue(e,n="none"){switch(ts(e)){case 0:return null;case 1:return e.booleanValue;case 2:return ke(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ns(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw z()}}convertObject(e,n){const s={};return zs(e.fields,(i,r)=>{s[i]=this.convertValue(r,n)}),s}convertGeoPoint(e){return new nu(ke(e.latitude),ke(e.longitude))}convertArray(e,n){return(e.values||[]).map(s=>this.convertValue(s,n))}convertServerTimestamp(e,n){switch(n){case"previous":const s=Rg(e);return s==null?null:this.convertValue(s,n);case"estimate":return this.convertTimestamp(Mi(e));default:return null}}convertTimestamp(e){const n=An(e);return new Ne(n.seconds,n.nanos)}convertDocumentKey(e,n){const s=we.fromString(e);ve(cm(s));const i=new Li(s.get(1),s.get(3)),r=new j(s.popFirst(5));return i.isEqual(n)||sn(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),r}}/**
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
 */function Nk(t,e,n){let s;return s=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,s}/**
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
 */class ci{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class jm extends Fm{constructor(e,n,s,i,r,o){super(e,n,s,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new $r(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const s=this._document.data.field(ru("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s,n.serverTimestamps)}}}class $r extends jm{data(e={}){return super.data(e)}}class Pk{constructor(e,n,s,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new ci(i.hasPendingWrites,i.fromCache),this.query=s}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(s=>{e.call(n,new $r(this._firestore,this._userDataWriter,s.key,s,new ci(this._snapshot.mutatedKeys.has(s.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new L(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(s,i){if(s._snapshot.oldDocs.isEmpty()){let r=0;return s._snapshot.docChanges.map(o=>{const c=new $r(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ci(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);return o.doc,{type:"added",doc:c,oldIndex:-1,newIndex:r++}})}{let r=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const c=new $r(s._firestore,s._userDataWriter,o.doc.key,o.doc,new ci(s._snapshot.mutatedKeys.has(o.doc.key),s._snapshot.fromCache),s.query.converter);let u=-1,h=-1;return o.type!==0&&(u=r.indexOf(o.doc.key),r=r.delete(o.doc.key)),o.type!==1&&(r=r.add(o.doc),h=r.indexOf(o.doc.key)),{type:Ok(o.type),doc:c,oldIndex:u,newIndex:h}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ok(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return z()}}class Hm extends Dk{constructor(e){super(),this.firestore=e}convertBytes(e){return new Bs(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new yt(this.firestore,null,n)}}function Mk(t,e){const n=wi(t.firestore,go),s=mk(t),i=Nk(t.converter,e);return Bk(n,[_k(Pm(t.firestore),"addDoc",s._key,i,t.converter!==null,{}).toMutation(s._key,Zt.exists(!1))]).then(()=>s)}function Lk(t,...e){var n,s,i;t=rt(t);let r={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Pd(e[o])||(r=e[o],o++);const c={includeMetadataChanges:r.includeMetadataChanges};if(Pd(e[o])){const m=e[o];e[o]=(n=m.next)===null||n===void 0?void 0:n.bind(m),e[o+1]=(s=m.error)===null||s===void 0?void 0:s.bind(m),e[o+2]=(i=m.complete)===null||i===void 0?void 0:i.bind(m)}let u,h,f;if(t instanceof yt)h=wi(t.firestore,go),f=$l(t._key.path),u={next:m=>{e[o]&&e[o](Fk(h,t,m))},error:e[o+1],complete:e[o+2]};else{const m=wi(t,rs);h=wi(m.firestore,go),f=m._query;const w=new Hm(h);u={next:_=>{e[o]&&e[o](new Pk(h,w,m,_))},error:e[o+1],complete:e[o+2]},kk(t._query)}return function(m,w,_,N){const A=new lk(N),F=new zS(w,A,_);return m.asyncQueue.enqueueAndForget(async()=>VS(await kd(m),F)),()=>{A.yc(),m.asyncQueue.enqueueAndForget(async()=>jS(await kd(m),F))}}(xm(h),f,c,u)}function Bk(t,e){return function(n,s){const i=new Yn;return n.asyncQueue.enqueueAndForget(async()=>ZS(await fk(n),s,i)),i.promise}(xm(t),e)}function Fk(t,e,n){const s=n.docs.get(e._key),i=new Hm(t);return new jm(t,i,e._key,s,new ci(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){qs=n})(Vs),ks(new Xn("firestore",(n,{instanceIdentifier:s,options:i})=>{const r=n.getProvider("app").getImmediate(),o=new go(new UC(n.getProvider("auth-internal")),new HC(n.getProvider("app-check-internal")),function(c,u){if(!Object.prototype.hasOwnProperty.apply(c.options,["projectId"]))throw new L(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Li(c.options.projectId,u)}(r,s),r);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),En(Zh,"3.10.1",t),En(Zh,"3.10.1","esm2017")})();const Uk={apiKey:"AIzaSyAvYxCTq6ud4lDwK8gFl19VZvrVKQ8DuVU",authDomain:"chat-vue-fad8b.firebaseapp.com",projectId:"chat-vue-fad8b",storageBucket:"chat-vue-fad8b.appspot.com",messagingSenderId:"231817000560",appId:"1:231817000560:web:8cdafd7c3b432814e3a6b5"},qm=$f(Uk),vi=OT(qm),zm=wk(qm);var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Mc={},$k={get exports(){return Mc},set exports(t){Mc=t}};/*!
* sweetalert2 v11.7.3
* Released under the MIT License.
*/(function(t,e){(function(n,s){t.exports=s()})(hn,function(){var n={awaitingPromise:new WeakMap,promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const s="swal2-",i=a=>{const l={};for(const d in a)l[a[d]]=s+a[d];return l},r=i(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),o=i(["success","warning","info","question","error"]),c="SweetAlert2:",u=a=>{const l=[];for(let d=0;d<a.length;d++)l.indexOf(a[d])===-1&&l.push(a[d]);return l},h=a=>a.charAt(0).toUpperCase()+a.slice(1),f=a=>{console.warn(`${c} ${typeof a=="object"?a.join(" "):a}`)},m=a=>{console.error(`${c} ${a}`)},w=[],_=a=>{w.includes(a)||(w.push(a),f(a))},N=(a,l)=>{_(`"${a}" is deprecated and will be removed in the next major release. Please use "${l}" instead.`)},A=a=>typeof a=="function"?a():a,F=a=>a&&typeof a.toPromise=="function",H=a=>F(a)?a.toPromise():Promise.resolve(a),oe=a=>a&&Promise.resolve(a)===a,P=()=>document.body.querySelector(`.${r.container}`),se=a=>{const l=P();return l?l.querySelector(a):null},ee=a=>se(`.${a}`),G=()=>ee(r.popup),De=()=>ee(r.icon),Q=()=>ee(r["icon-content"]),me=()=>ee(r.title),fe=()=>ee(r["html-container"]),je=()=>ee(r.image),ot=()=>ee(r["progress-steps"]),at=()=>ee(r["validation-message"]),Fe=()=>se(`.${r.actions} .${r.confirm}`),Ot=()=>se(`.${r.actions} .${r.cancel}`),be=()=>se(`.${r.actions} .${r.deny}`),Ee=()=>ee(r["input-label"]),ae=()=>se(`.${r.loader}`),ft=()=>ee(r.actions),Rn=()=>ee(r.footer),vt=()=>ee(r["timer-progress-bar"]),ct=()=>ee(r.close),cr=`
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
`,Ys=()=>{const a=Array.from(G().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((d,p)=>{const b=parseInt(d.getAttribute("tabindex")),V=parseInt(p.getAttribute("tabindex"));return b>V?1:b<V?-1:0}),l=Array.from(G().querySelectorAll(cr)).filter(d=>d.getAttribute("tabindex")!=="-1");return u(a.concat(l)).filter(d=>O(d))},Qs=()=>pt(document.body,r.shown)&&!pt(document.body,r["toast-shown"])&&!pt(document.body,r["no-backdrop"]),lt=()=>G()&&pt(G(),r.toast),os=()=>G().hasAttribute("data-loading"),Kt={previousBodyPadding:null},Ae=(a,l)=>{if(a.textContent="",l){const p=new DOMParser().parseFromString(l,"text/html");Array.from(p.querySelector("head").childNodes).forEach(b=>{a.appendChild(b)}),Array.from(p.querySelector("body").childNodes).forEach(b=>{b instanceof HTMLVideoElement||b instanceof HTMLAudioElement?a.appendChild(b.cloneNode(!0)):a.appendChild(b)})}},pt=(a,l)=>{if(!l)return!1;const d=l.split(/\s+/);for(let p=0;p<d.length;p++)if(!a.classList.contains(d[p]))return!1;return!0},Xs=(a,l)=>{Array.from(a.classList).forEach(d=>{!Object.values(r).includes(d)&&!Object.values(o).includes(d)&&!Object.values(l.showClass).includes(d)&&a.classList.remove(d)})},g=(a,l,d)=>{if(Xs(a,l),l.customClass&&l.customClass[d]){if(typeof l.customClass[d]!="string"&&!l.customClass[d].forEach){f(`Invalid type of customClass.${d}! Expected string or iterable object, got "${typeof l.customClass[d]}"`);return}v(a,l.customClass[d])}},y=(a,l)=>{if(!l)return null;switch(l){case"select":case"textarea":case"file":return a.querySelector(`.${r.popup} > .${r[l]}`);case"checkbox":return a.querySelector(`.${r.popup} > .${r.checkbox} input`);case"radio":return a.querySelector(`.${r.popup} > .${r.radio} input:checked`)||a.querySelector(`.${r.popup} > .${r.radio} input:first-child`);case"range":return a.querySelector(`.${r.popup} > .${r.range} input`);default:return a.querySelector(`.${r.popup} > .${r.input}`)}},E=a=>{if(a.focus(),a.type!=="file"){const l=a.value;a.value="",a.value=l}},C=(a,l,d)=>{!a||!l||(typeof l=="string"&&(l=l.split(/\s+/).filter(Boolean)),l.forEach(p=>{Array.isArray(a)?a.forEach(b=>{d?b.classList.add(p):b.classList.remove(p)}):d?a.classList.add(p):a.classList.remove(p)}))},v=(a,l)=>{C(a,l,!0)},k=(a,l)=>{C(a,l,!1)},D=(a,l)=>{const d=Array.from(a.children);for(let p=0;p<d.length;p++){const b=d[p];if(b instanceof HTMLElement&&pt(b,l))return b}},x=(a,l,d)=>{d===`${parseInt(d)}`&&(d=parseInt(d)),d||parseInt(d)===0?a.style[l]=typeof d=="number"?`${d}px`:d:a.style.removeProperty(l)},S=function(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";a.style.display=l},I=a=>{a.style.display="none"},$=(a,l,d,p)=>{const b=a.querySelector(l);b&&(b.style[d]=p)},M=function(a,l){let d=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";l?S(a,d):I(a)},O=a=>!!(a&&(a.offsetWidth||a.offsetHeight||a.getClientRects().length)),q=()=>!O(Fe())&&!O(be())&&!O(Ot()),te=a=>a.scrollHeight>a.clientHeight,pe=a=>{const l=window.getComputedStyle(a),d=parseFloat(l.getPropertyValue("animation-duration")||"0"),p=parseFloat(l.getPropertyValue("transition-duration")||"0");return d>0||p>0},le=function(a){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const d=vt();O(d)&&(l&&(d.style.transition="none",d.style.width="100%"),setTimeout(()=>{d.style.transition=`width ${a/1e3}s linear`,d.style.width="0%"},10))},Te=()=>{const a=vt(),l=parseInt(window.getComputedStyle(a).width);a.style.removeProperty("transition"),a.style.width="100%";const d=parseInt(window.getComputedStyle(a).width),p=l/d*100;a.style.width=`${p}%`},gt=100,Y={},lr=()=>{Y.previousActiveElement instanceof HTMLElement?(Y.previousActiveElement.focus(),Y.previousActiveElement=null):document.body&&document.body.focus()},Dn=a=>new Promise(l=>{if(!a)return l();const d=window.scrollX,p=window.scrollY;Y.restoreFocusTimeout=setTimeout(()=>{lr(),l()},gt),window.scrollTo(d,p)}),Js=()=>typeof window>"u"||typeof document>"u",tt=`
 <div aria-labelledby="${r.title}" aria-describedby="${r["html-container"]}" class="${r.popup}" tabindex="-1">
   <button type="button" class="${r.close}"></button>
   <ul class="${r["progress-steps"]}"></ul>
   <div class="${r.icon}"></div>
   <img class="${r.image}" />
   <h2 class="${r.title}" id="${r.title}"></h2>
   <div class="${r["html-container"]}" id="${r["html-container"]}"></div>
   <input class="${r.input}" />
   <input type="file" class="${r.file}" />
   <div class="${r.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${r.select}"></select>
   <div class="${r.radio}"></div>
   <label for="${r.checkbox}" class="${r.checkbox}">
     <input type="checkbox" />
     <span class="${r.label}"></span>
   </label>
   <textarea class="${r.textarea}"></textarea>
   <div class="${r["validation-message"]}" id="${r["validation-message"]}"></div>
   <div class="${r.actions}">
     <div class="${r.loader}"></div>
     <button type="button" class="${r.confirm}"></button>
     <button type="button" class="${r.deny}"></button>
     <button type="button" class="${r.cancel}"></button>
   </div>
   <div class="${r.footer}"></div>
   <div class="${r["timer-progress-bar-container"]}">
     <div class="${r["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),bt=()=>{const a=P();return a?(a.remove(),k([document.documentElement,document.body],[r["no-backdrop"],r["toast-shown"],r["has-column"]]),!0):!1},Mt=()=>{Y.currentInstance.resetValidationMessage()},Km=()=>{const a=G(),l=D(a,r.input),d=D(a,r.file),p=a.querySelector(`.${r.range} input`),b=a.querySelector(`.${r.range} output`),V=D(a,r.select),ge=a.querySelector(`.${r.checkbox} input`),mt=D(a,r.textarea);l.oninput=Mt,d.onchange=Mt,V.onchange=Mt,ge.onchange=Mt,mt.oninput=Mt,p.oninput=()=>{Mt(),b.value=p.value},p.onchange=()=>{Mt(),b.value=p.value}},Wm=a=>typeof a=="string"?document.querySelector(a):a,Gm=a=>{const l=G();l.setAttribute("role",a.toast?"alert":"dialog"),l.setAttribute("aria-live",a.toast?"polite":"assertive"),a.toast||l.setAttribute("aria-modal","true")},Ym=a=>{window.getComputedStyle(a).direction==="rtl"&&v(P(),r.rtl)},Qm=a=>{const l=bt();if(Js()){m("SweetAlert2 requires document to initialize");return}const d=document.createElement("div");d.className=r.container,l&&v(d,r["no-transition"]),Ae(d,tt);const p=Wm(a.target);p.appendChild(d),Gm(a),Ym(p),Km()},ra=(a,l)=>{a instanceof HTMLElement?l.appendChild(a):typeof a=="object"?Xm(a,l):a&&Ae(l,a)},Xm=(a,l)=>{a.jquery?Jm(l,a):Ae(l,a.toString())},Jm=(a,l)=>{if(a.textContent="",0 in l)for(let d=0;d in l;d++)a.appendChild(l[d].cloneNode(!0));else a.appendChild(l.cloneNode(!0))},Zs=(()=>{if(Js())return!1;const a=document.createElement("div"),l={WebkitAnimation:"webkitAnimationEnd",animation:"animationend"};for(const d in l)if(Object.prototype.hasOwnProperty.call(l,d)&&typeof a.style[d]<"u")return l[d];return!1})(),Zm=()=>{const a=document.createElement("div");a.className=r["scrollbar-measure"],document.body.appendChild(a);const l=a.getBoundingClientRect().width-a.clientWidth;return document.body.removeChild(a),l},ey=(a,l)=>{const d=ft(),p=ae();!l.showConfirmButton&&!l.showDenyButton&&!l.showCancelButton?I(d):S(d),g(d,l,"actions"),ty(d,p,l),Ae(p,l.loaderHtml),g(p,l,"loader")};function ty(a,l,d){const p=Fe(),b=be(),V=Ot();oa(p,"confirm",d),oa(b,"deny",d),oa(V,"cancel",d),ny(p,b,V,d),d.reverseButtons&&(d.toast?(a.insertBefore(V,p),a.insertBefore(b,p)):(a.insertBefore(V,l),a.insertBefore(b,l),a.insertBefore(p,l)))}function ny(a,l,d,p){if(!p.buttonsStyling){k([a,l,d],r.styled);return}v([a,l,d],r.styled),p.confirmButtonColor&&(a.style.backgroundColor=p.confirmButtonColor,v(a,r["default-outline"])),p.denyButtonColor&&(l.style.backgroundColor=p.denyButtonColor,v(l,r["default-outline"])),p.cancelButtonColor&&(d.style.backgroundColor=p.cancelButtonColor,v(d,r["default-outline"]))}function oa(a,l,d){M(a,d[`show${h(l)}Button`],"inline-block"),Ae(a,d[`${l}ButtonText`]),a.setAttribute("aria-label",d[`${l}ButtonAriaLabel`]),a.className=r[l],g(a,d,`${l}Button`),v(a,d[`${l}ButtonClass`])}const sy=(a,l)=>{const d=ct();Ae(d,l.closeButtonHtml),g(d,l,"closeButton"),M(d,l.showCloseButton),d.setAttribute("aria-label",l.closeButtonAriaLabel)},iy=(a,l)=>{const d=P();d&&(ry(d,l.backdrop),oy(d,l.position),ay(d,l.grow),g(d,l,"container"))};function ry(a,l){typeof l=="string"?a.style.background=l:l||v([document.documentElement,document.body],r["no-backdrop"])}function oy(a,l){l in r?v(a,r[l]):(f('The "position" parameter is not valid, defaulting to "center"'),v(a,r.center))}function ay(a,l){if(l&&typeof l=="string"){const d=`grow-${l}`;d in r&&v(a,r[d])}}const cy=["input","file","range","select","radio","checkbox","textarea"],ly=(a,l)=>{const d=G(),p=n.innerParams.get(a),b=!p||l.input!==p.input;cy.forEach(V=>{const ge=D(d,r[V]);dy(V,l.inputAttributes),ge.className=r[V],b&&I(ge)}),l.input&&(b&&uy(l),fy(l))},uy=a=>{if(!ut[a.input]){m(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${a.input}"`);return}const l=uu(a.input),d=ut[a.input](l,a);S(l),a.inputAutoFocus&&setTimeout(()=>{E(d)})},hy=a=>{for(let l=0;l<a.attributes.length;l++){const d=a.attributes[l].name;["type","value","style"].includes(d)||a.removeAttribute(d)}},dy=(a,l)=>{const d=y(G(),a);if(d){hy(d);for(const p in l)d.setAttribute(p,l[p])}},fy=a=>{const l=uu(a.input);typeof a.customClass=="object"&&v(l,a.customClass.input)},aa=(a,l)=>{(!a.placeholder||l.inputPlaceholder)&&(a.placeholder=l.inputPlaceholder)},ei=(a,l,d)=>{if(d.inputLabel){a.id=r.input;const p=document.createElement("label"),b=r["input-label"];p.setAttribute("for",a.id),p.className=b,typeof d.customClass=="object"&&v(p,d.customClass.inputLabel),p.innerText=d.inputLabel,l.insertAdjacentElement("beforebegin",p)}},uu=a=>D(G(),r[a]||r.input),ur=(a,l)=>{["string","number"].includes(typeof l)?a.value=`${l}`:oe(l)||f(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof l}"`)},ut={};ut.text=ut.email=ut.password=ut.number=ut.tel=ut.url=(a,l)=>(ur(a,l.inputValue),ei(a,a,l),aa(a,l),a.type=l.input,a),ut.file=(a,l)=>(ei(a,a,l),aa(a,l),a),ut.range=(a,l)=>{const d=a.querySelector("input"),p=a.querySelector("output");return ur(d,l.inputValue),d.type=l.input,ur(p,l.inputValue),ei(d,a,l),a},ut.select=(a,l)=>{if(a.textContent="",l.inputPlaceholder){const d=document.createElement("option");Ae(d,l.inputPlaceholder),d.value="",d.disabled=!0,d.selected=!0,a.appendChild(d)}return ei(a,a,l),a},ut.radio=a=>(a.textContent="",a),ut.checkbox=(a,l)=>{const d=y(G(),"checkbox");d.value="1",d.id=r.checkbox,d.checked=!!l.inputValue;const p=a.querySelector("span");return Ae(p,l.inputPlaceholder),d},ut.textarea=(a,l)=>{ur(a,l.inputValue),aa(a,l),ei(a,a,l);const d=p=>parseInt(window.getComputedStyle(p).marginLeft)+parseInt(window.getComputedStyle(p).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const p=parseInt(window.getComputedStyle(G()).width),b=()=>{const V=a.offsetWidth+d(a);V>p?G().style.width=`${V}px`:G().style.width=null};new MutationObserver(b).observe(a,{attributes:!0,attributeFilter:["style"]})}}),a};const py=(a,l)=>{const d=fe();g(d,l,"htmlContainer"),l.html?(ra(l.html,d),S(d,"block")):l.text?(d.textContent=l.text,S(d,"block")):I(d),ly(a,l)},gy=(a,l)=>{const d=Rn();M(d,l.footer),l.footer&&ra(l.footer,d),g(d,l,"footer")},my=(a,l)=>{const d=n.innerParams.get(a),p=De();if(d&&l.icon===d.icon){du(p,l),hu(p,l);return}if(!l.icon&&!l.iconHtml){I(p);return}if(l.icon&&Object.keys(o).indexOf(l.icon)===-1){m(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${l.icon}"`),I(p);return}S(p),du(p,l),hu(p,l),v(p,l.showClass.icon)},hu=(a,l)=>{for(const d in o)l.icon!==d&&k(a,o[d]);v(a,o[l.icon]),by(a,l),yy(),g(a,l,"icon")},yy=()=>{const a=G(),l=window.getComputedStyle(a).getPropertyValue("background-color"),d=a.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let p=0;p<d.length;p++)d[p].style.backgroundColor=l},wy=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,vy=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,du=(a,l)=>{let d=a.innerHTML,p;l.iconHtml?p=fu(l.iconHtml):l.icon==="success"?(p=wy,d=d.replace(/ style=".*?"/g,"")):l.icon==="error"?p=vy:p=fu({question:"?",warning:"!",info:"i"}[l.icon]),d.trim()!==p.trim()&&Ae(a,p)},by=(a,l)=>{if(l.iconColor){a.style.color=l.iconColor,a.style.borderColor=l.iconColor;for(const d of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])$(a,d,"backgroundColor",l.iconColor);$(a,".swal2-success-ring","borderColor",l.iconColor)}},fu=a=>`<div class="${r["icon-content"]}">${a}</div>`,Ey=(a,l)=>{const d=je();if(!l.imageUrl){I(d);return}S(d,""),d.setAttribute("src",l.imageUrl),d.setAttribute("alt",l.imageAlt),x(d,"width",l.imageWidth),x(d,"height",l.imageHeight),d.className=r.image,g(d,l,"image")},_y=(a,l)=>{const d=P(),p=G();l.toast?(x(d,"width",l.width),p.style.width="100%",p.insertBefore(ae(),De())):x(p,"width",l.width),x(p,"padding",l.padding),l.color&&(p.style.color=l.color),l.background&&(p.style.background=l.background),I(at()),Iy(p,l)},Iy=(a,l)=>{a.className=`${r.popup} ${O(a)?l.showClass.popup:""}`,l.toast?(v([document.documentElement,document.body],r["toast-shown"]),v(a,r.toast)):v(a,r.modal),g(a,l,"popup"),typeof l.customClass=="string"&&v(a,l.customClass),l.icon&&v(a,r[`icon-${l.icon}`])},Ty=(a,l)=>{const d=ot();if(!l.progressSteps||l.progressSteps.length===0){I(d);return}S(d),d.textContent="",l.currentProgressStep>=l.progressSteps.length&&f("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),l.progressSteps.forEach((p,b)=>{const V=Cy(p);if(d.appendChild(V),b===l.currentProgressStep&&v(V,r["active-progress-step"]),b!==l.progressSteps.length-1){const ge=Ay(l);d.appendChild(ge)}})},Cy=a=>{const l=document.createElement("li");return v(l,r["progress-step"]),Ae(l,a),l},Ay=a=>{const l=document.createElement("li");return v(l,r["progress-step-line"]),a.progressStepsDistance&&x(l,"width",a.progressStepsDistance),l},Sy=(a,l)=>{const d=me();M(d,l.title||l.titleText,"block"),l.title&&ra(l.title,d),l.titleText&&(d.innerText=l.titleText),g(d,l,"title")},pu=(a,l)=>{_y(a,l),iy(a,l),Ty(a,l),my(a,l),Ey(a,l),Sy(a,l),sy(a,l),py(a,l),ey(a,l),gy(a,l),typeof l.didRender=="function"&&l.didRender(G())};function gu(){const a=n.innerParams.get(this);if(!a)return;const l=n.domCache.get(this);I(l.loader),lt()?a.icon&&S(De()):ky(l),k([l.popup,l.actions],r.loading),l.popup.removeAttribute("aria-busy"),l.popup.removeAttribute("data-loading"),l.confirmButton.disabled=!1,l.denyButton.disabled=!1,l.cancelButton.disabled=!1}const ky=a=>{const l=a.popup.getElementsByClassName(a.loader.getAttribute("data-button-to-replace"));l.length?S(l[0],"inline-block"):q()&&I(a.actions)};function xy(a){const l=n.innerParams.get(a||this),d=n.domCache.get(a||this);return d?y(d.popup,l.input):null}const Ry=()=>O(G()),mu=()=>Fe()&&Fe().click(),Dy=()=>be()&&be().click(),Ny=()=>Ot()&&Ot().click(),as=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),yu=a=>{a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1)},Py=(a,l,d,p)=>{yu(l),d.toast||(l.keydownHandler=b=>My(a,b,p),l.keydownTarget=d.keydownListenerCapture?window:G(),l.keydownListenerCapture=d.keydownListenerCapture,l.keydownTarget.addEventListener("keydown",l.keydownHandler,{capture:l.keydownListenerCapture}),l.keydownHandlerAdded=!0)},ca=(a,l)=>{const d=Ys();if(d.length){a=a+l,a===d.length?a=0:a===-1&&(a=d.length-1),d[a].focus();return}G().focus()},wu=["ArrowRight","ArrowDown"],Oy=["ArrowLeft","ArrowUp"],My=(a,l,d)=>{const p=n.innerParams.get(a);p&&(l.isComposing||l.keyCode===229||(p.stopKeydownPropagation&&l.stopPropagation(),l.key==="Enter"?Ly(a,l,p):l.key==="Tab"?By(l):[...wu,...Oy].includes(l.key)?Fy(l.key):l.key==="Escape"&&Uy(l,p,d)))},Ly=(a,l,d)=>{if(A(d.allowEnterKey)&&l.target&&a.getInput()&&l.target instanceof HTMLElement&&l.target.outerHTML===a.getInput().outerHTML){if(["textarea","file"].includes(d.input))return;mu(),l.preventDefault()}},By=a=>{const l=a.target,d=Ys();let p=-1;for(let b=0;b<d.length;b++)if(l===d[b]){p=b;break}a.shiftKey?ca(p,-1):ca(p,1),a.stopPropagation(),a.preventDefault()},Fy=a=>{const l=Fe(),d=be(),p=Ot(),b=[l,d,p];if(document.activeElement instanceof HTMLElement&&!b.includes(document.activeElement))return;const V=wu.includes(a)?"nextElementSibling":"previousElementSibling";let ge=document.activeElement;for(let mt=0;mt<ft().children.length;mt++){if(ge=ge[V],!ge)return;if(ge instanceof HTMLButtonElement&&O(ge))break}ge instanceof HTMLButtonElement&&ge.focus()},Uy=(a,l,d)=>{A(l.allowEscapeKey)&&(a.preventDefault(),d(as.esc))};var ti={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const $y=()=>{Array.from(document.body.children).forEach(l=>{l===P()||l.contains(P())||(l.hasAttribute("aria-hidden")&&l.setAttribute("data-previous-aria-hidden",l.getAttribute("aria-hidden")),l.setAttribute("aria-hidden","true"))})},vu=()=>{Array.from(document.body.children).forEach(l=>{l.hasAttribute("data-previous-aria-hidden")?(l.setAttribute("aria-hidden",l.getAttribute("data-previous-aria-hidden")),l.removeAttribute("data-previous-aria-hidden")):l.removeAttribute("aria-hidden")})},Vy=()=>{if((/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1)&&!pt(document.body,r.iosfix)){const l=document.body.scrollTop;document.body.style.top=`${l*-1}px`,v(document.body,r.iosfix),Hy(),jy()}},jy=()=>{const a=navigator.userAgent,l=!!a.match(/iPad/i)||!!a.match(/iPhone/i),d=!!a.match(/WebKit/i);l&&d&&!a.match(/CriOS/i)&&G().scrollHeight>window.innerHeight-44&&(P().style.paddingBottom="44px")},Hy=()=>{const a=P();let l;a.ontouchstart=d=>{l=qy(d)},a.ontouchmove=d=>{l&&(d.preventDefault(),d.stopPropagation())}},qy=a=>{const l=a.target,d=P();return zy(a)||Ky(a)?!1:l===d||!te(d)&&l instanceof HTMLElement&&l.tagName!=="INPUT"&&l.tagName!=="TEXTAREA"&&!(te(fe())&&fe().contains(l))},zy=a=>a.touches&&a.touches.length&&a.touches[0].touchType==="stylus",Ky=a=>a.touches&&a.touches.length>1,Wy=()=>{if(pt(document.body,r.iosfix)){const a=parseInt(document.body.style.top,10);k(document.body,r.iosfix),document.body.style.top="",document.body.scrollTop=a*-1}},Gy=()=>{Kt.previousBodyPadding===null&&document.body.scrollHeight>window.innerHeight&&(Kt.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Kt.previousBodyPadding+Zm()}px`)},Yy=()=>{Kt.previousBodyPadding!==null&&(document.body.style.paddingRight=`${Kt.previousBodyPadding}px`,Kt.previousBodyPadding=null)};function bu(a,l,d,p){lt()?Eu(a,p):(Dn(d).then(()=>Eu(a,p)),yu(Y)),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(l.setAttribute("style","display:none !important"),l.removeAttribute("class"),l.innerHTML=""):l.remove(),Qs()&&(Yy(),Wy(),vu()),Qy()}function Qy(){k([document.documentElement,document.body],[r.shown,r["height-auto"],r["no-backdrop"],r["toast-shown"]])}function hr(a){a=ew(a);const l=ti.swalPromiseResolve.get(this),d=Jy(this);this.isAwaitingPromise()?a.isDismissed||(ni(this),l(a)):d&&l(a)}function Xy(){return!!n.awaitingPromise.get(this)}const Jy=a=>{const l=G();if(!l)return!1;const d=n.innerParams.get(a);if(!d||pt(l,d.hideClass.popup))return!1;k(l,d.showClass.popup),v(l,d.hideClass.popup);const p=P();return k(p,d.showClass.backdrop),v(p,d.hideClass.backdrop),tw(a,l,d),!0};function Zy(a){const l=ti.swalPromiseReject.get(this);ni(this),l&&l(a)}const ni=a=>{a.isAwaitingPromise()&&(n.awaitingPromise.delete(a),n.innerParams.get(a)||a._destroy())},ew=a=>typeof a>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},a),tw=(a,l,d)=>{const p=P(),b=Zs&&pe(l);typeof d.willClose=="function"&&d.willClose(l),b?nw(a,l,p,d.returnFocus,d.didClose):bu(a,p,d.returnFocus,d.didClose)},nw=(a,l,d,p,b)=>{Y.swalCloseEventFinishedCallback=bu.bind(null,a,d,p,b),l.addEventListener(Zs,function(V){V.target===l&&(Y.swalCloseEventFinishedCallback(),delete Y.swalCloseEventFinishedCallback)})},Eu=(a,l)=>{setTimeout(()=>{typeof l=="function"&&l.bind(a.params)(),a._destroy()})};function _u(a,l,d){const p=n.domCache.get(a);l.forEach(b=>{p[b].disabled=d})}function Iu(a,l){if(a)if(a.type==="radio"){const p=a.parentNode.parentNode.querySelectorAll("input");for(let b=0;b<p.length;b++)p[b].disabled=l}else a.disabled=l}function sw(){_u(this,["confirmButton","denyButton","cancelButton"],!1)}function iw(){_u(this,["confirmButton","denyButton","cancelButton"],!0)}function rw(){Iu(this.getInput(),!1)}function ow(){Iu(this.getInput(),!0)}function aw(a){const l=n.domCache.get(this),d=n.innerParams.get(this);Ae(l.validationMessage,a),l.validationMessage.className=r["validation-message"],d.customClass&&d.customClass.validationMessage&&v(l.validationMessage,d.customClass.validationMessage),S(l.validationMessage);const p=this.getInput();p&&(p.setAttribute("aria-invalid",!0),p.setAttribute("aria-describedby",r["validation-message"]),E(p),v(p,r.inputerror))}function cw(){const a=n.domCache.get(this);a.validationMessage&&I(a.validationMessage);const l=this.getInput();l&&(l.removeAttribute("aria-invalid"),l.removeAttribute("aria-describedby"),k(l,r.inputerror))}const cs={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},lw=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],uw={},hw=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Tu=a=>Object.prototype.hasOwnProperty.call(cs,a),Cu=a=>lw.indexOf(a)!==-1,la=a=>uw[a],dw=a=>{Tu(a)||f(`Unknown parameter "${a}"`)},fw=a=>{hw.includes(a)&&f(`The parameter "${a}" is incompatible with toasts`)},pw=a=>{la(a)&&N(a,la(a))},gw=a=>{a.backdrop===!1&&a.allowOutsideClick&&f('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');for(const l in a)dw(l),a.toast&&fw(l),pw(l)};function mw(a){const l=G(),d=n.innerParams.get(this);if(!l||pt(l,d.hideClass.popup)){f("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const p=yw(a),b=Object.assign({},d,p);pu(this,b),n.innerParams.set(this,b),Object.defineProperties(this,{params:{value:Object.assign({},this.params,a),writable:!1,enumerable:!0}})}const yw=a=>{const l={};return Object.keys(a).forEach(d=>{Cu(d)?l[d]=a[d]:f(`Invalid parameter to update: ${d}`)}),l};function ww(){const a=n.domCache.get(this),l=n.innerParams.get(this);if(!l){Au(this);return}a.popup&&Y.swalCloseEventFinishedCallback&&(Y.swalCloseEventFinishedCallback(),delete Y.swalCloseEventFinishedCallback),typeof l.didDestroy=="function"&&l.didDestroy(),vw(this)}const vw=a=>{Au(a),delete a.params,delete Y.keydownHandler,delete Y.keydownTarget,delete Y.currentInstance},Au=a=>{a.isAwaitingPromise()?(ua(n,a),n.awaitingPromise.set(a,!0)):(ua(ti,a),ua(n,a))},ua=(a,l)=>{for(const d in a)a[d].delete(l)};var Su=Object.freeze({__proto__:null,_destroy:ww,close:hr,closeModal:hr,closePopup:hr,closeToast:hr,disableButtons:iw,disableInput:ow,disableLoading:gu,enableButtons:sw,enableInput:rw,getInput:xy,handleAwaitingPromise:ni,hideLoading:gu,isAwaitingPromise:Xy,rejectPromise:Zy,resetValidationMessage:cw,showValidationMessage:aw,update:mw});const ls=a=>{let l=G();l||new fr,l=G();const d=ae();lt()?I(De()):bw(l,a),S(d),l.setAttribute("data-loading","true"),l.setAttribute("aria-busy","true"),l.focus()},bw=(a,l)=>{const d=ft(),p=ae();!l&&O(Fe())&&(l=Fe()),S(d),l&&(I(l),p.setAttribute("data-button-to-replace",l.className)),p.parentNode.insertBefore(p,l),v([a,d],r.loading)},Ew=(a,l)=>{l.input==="select"||l.input==="radio"?Aw(a,l):["text","email","number","tel","textarea"].includes(l.input)&&(F(l.inputValue)||oe(l.inputValue))&&(ls(Fe()),Sw(a,l))},_w=(a,l)=>{const d=a.getInput();if(!d)return null;switch(l.input){case"checkbox":return Iw(d);case"radio":return Tw(d);case"file":return Cw(d);default:return l.inputAutoTrim?d.value.trim():d.value}},Iw=a=>a.checked?1:0,Tw=a=>a.checked?a.value:null,Cw=a=>a.files.length?a.getAttribute("multiple")!==null?a.files:a.files[0]:null,Aw=(a,l)=>{const d=G(),p=b=>{kw[l.input](d,ha(b),l)};F(l.inputOptions)||oe(l.inputOptions)?(ls(Fe()),H(l.inputOptions).then(b=>{a.hideLoading(),p(b)})):typeof l.inputOptions=="object"?p(l.inputOptions):m(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof l.inputOptions}`)},Sw=(a,l)=>{const d=a.getInput();I(d),H(l.inputValue).then(p=>{d.value=l.input==="number"?`${parseFloat(p)||0}`:`${p}`,S(d),d.focus(),a.hideLoading()}).catch(p=>{m(`Error in inputValue promise: ${p}`),d.value="",S(d),d.focus(),a.hideLoading()})},kw={select:(a,l,d)=>{const p=D(a,r.select),b=(V,ge,mt)=>{const nt=document.createElement("option");nt.value=mt,Ae(nt,ge),nt.selected=ku(mt,d.inputValue),V.appendChild(nt)};l.forEach(V=>{const ge=V[0],mt=V[1];if(Array.isArray(mt)){const nt=document.createElement("optgroup");nt.label=ge,nt.disabled=!1,p.appendChild(nt),mt.forEach(hs=>b(nt,hs[1],hs[0]))}else b(p,mt,ge)}),p.focus()},radio:(a,l,d)=>{const p=D(a,r.radio);l.forEach(V=>{const ge=V[0],mt=V[1],nt=document.createElement("input"),hs=document.createElement("label");nt.type="radio",nt.name=r.radio,nt.value=ge,ku(ge,d.inputValue)&&(nt.checked=!0);const ga=document.createElement("span");Ae(ga,mt),ga.className=r.label,hs.appendChild(nt),hs.appendChild(ga),p.appendChild(hs)});const b=p.querySelectorAll("input");b.length&&b[0].focus()}},ha=a=>{const l=[];return typeof Map<"u"&&a instanceof Map?a.forEach((d,p)=>{let b=d;typeof b=="object"&&(b=ha(b)),l.push([p,b])}):Object.keys(a).forEach(d=>{let p=a[d];typeof p=="object"&&(p=ha(p)),l.push([d,p])}),l},ku=(a,l)=>l&&l.toString()===a.toString(),xw=a=>{const l=n.innerParams.get(a);a.disableButtons(),l.input?xu(a,"confirm"):fa(a,!0)},Rw=a=>{const l=n.innerParams.get(a);a.disableButtons(),l.returnInputValueOnDeny?xu(a,"deny"):da(a,!1)},Dw=(a,l)=>{a.disableButtons(),l(as.cancel)},xu=(a,l)=>{const d=n.innerParams.get(a);if(!d.input){m(`The "input" parameter is needed to be set when using returnInputValueOn${h(l)}`);return}const p=_w(a,d);d.inputValidator?Nw(a,p,l):a.getInput().checkValidity()?l==="deny"?da(a,p):fa(a,p):(a.enableButtons(),a.showValidationMessage(d.validationMessage))},Nw=(a,l,d)=>{const p=n.innerParams.get(a);a.disableInput(),Promise.resolve().then(()=>H(p.inputValidator(l,p.validationMessage))).then(V=>{a.enableButtons(),a.enableInput(),V?a.showValidationMessage(V):d==="deny"?da(a,l):fa(a,l)})},da=(a,l)=>{const d=n.innerParams.get(a||void 0);d.showLoaderOnDeny&&ls(be()),d.preDeny?(n.awaitingPromise.set(a||void 0,!0),Promise.resolve().then(()=>H(d.preDeny(l,d.validationMessage))).then(b=>{b===!1?(a.hideLoading(),ni(a)):a.close({isDenied:!0,value:typeof b>"u"?l:b})}).catch(b=>Du(a||void 0,b))):a.close({isDenied:!0,value:l})},Ru=(a,l)=>{a.close({isConfirmed:!0,value:l})},Du=(a,l)=>{a.rejectPromise(l)},fa=(a,l)=>{const d=n.innerParams.get(a||void 0);d.showLoaderOnConfirm&&ls(),d.preConfirm?(a.resetValidationMessage(),n.awaitingPromise.set(a||void 0,!0),Promise.resolve().then(()=>H(d.preConfirm(l,d.validationMessage))).then(b=>{O(at())||b===!1?(a.hideLoading(),ni(a)):Ru(a,typeof b>"u"?l:b)}).catch(b=>Du(a||void 0,b))):Ru(a,l)},Pw=(a,l,d)=>{n.innerParams.get(a).toast?Ow(a,l,d):(Lw(l),Bw(l),Fw(a,l,d))},Ow=(a,l,d)=>{l.popup.onclick=()=>{const p=n.innerParams.get(a);p&&(Mw(p)||p.timer||p.input)||d(as.close)}},Mw=a=>a.showConfirmButton||a.showDenyButton||a.showCancelButton||a.showCloseButton;let dr=!1;const Lw=a=>{a.popup.onmousedown=()=>{a.container.onmouseup=function(l){a.container.onmouseup=void 0,l.target===a.container&&(dr=!0)}}},Bw=a=>{a.container.onmousedown=()=>{a.popup.onmouseup=function(l){a.popup.onmouseup=void 0,(l.target===a.popup||a.popup.contains(l.target))&&(dr=!0)}}},Fw=(a,l,d)=>{l.container.onclick=p=>{const b=n.innerParams.get(a);if(dr){dr=!1;return}p.target===l.container&&A(b.allowOutsideClick)&&d(as.backdrop)}},Uw=a=>typeof a=="object"&&a.jquery,Nu=a=>a instanceof Element||Uw(a),$w=a=>{const l={};return typeof a[0]=="object"&&!Nu(a[0])?Object.assign(l,a[0]):["title","html","icon"].forEach((d,p)=>{const b=a[p];typeof b=="string"||Nu(b)?l[d]=b:b!==void 0&&m(`Unexpected type of ${d}! Expected "string" or "Element", got ${typeof b}`)}),l};function Vw(){const a=this;for(var l=arguments.length,d=new Array(l),p=0;p<l;p++)d[p]=arguments[p];return new a(...d)}function jw(a){class l extends this{_main(p,b){return super._main(p,Object.assign({},a,b))}}return l}const Hw=()=>Y.timeout&&Y.timeout.getTimerLeft(),Pu=()=>{if(Y.timeout)return Te(),Y.timeout.stop()},Ou=()=>{if(Y.timeout){const a=Y.timeout.start();return le(a),a}},qw=()=>{const a=Y.timeout;return a&&(a.running?Pu():Ou())},zw=a=>{if(Y.timeout){const l=Y.timeout.increase(a);return le(l,!0),l}},Kw=()=>Y.timeout&&Y.timeout.isRunning();let Mu=!1;const pa={};function Ww(){let a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";pa[a]=this,Mu||(document.body.addEventListener("click",Gw),Mu=!0)}const Gw=a=>{for(let l=a.target;l&&l!==document;l=l.parentNode)for(const d in pa){const p=l.getAttribute(d);if(p){pa[d].fire({template:p});return}}};var Yw=Object.freeze({__proto__:null,argsToParams:$w,bindClickHandler:Ww,clickCancel:Ny,clickConfirm:mu,clickDeny:Dy,enableLoading:ls,fire:Vw,getActions:ft,getCancelButton:Ot,getCloseButton:ct,getConfirmButton:Fe,getContainer:P,getDenyButton:be,getFocusableElements:Ys,getFooter:Rn,getHtmlContainer:fe,getIcon:De,getIconContent:Q,getImage:je,getInputLabel:Ee,getLoader:ae,getPopup:G,getProgressSteps:ot,getTimerLeft:Hw,getTimerProgressBar:vt,getTitle:me,getValidationMessage:at,increaseTimer:zw,isDeprecatedParameter:la,isLoading:os,isTimerRunning:Kw,isUpdatableParameter:Cu,isValidParameter:Tu,isVisible:Ry,mixin:jw,resumeTimer:Ou,showLoading:ls,stopTimer:Pu,toggleTimer:qw});class Qw{constructor(l,d){this.callback=l,this.remaining=d,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(l){const d=this.running;return d&&this.stop(),this.remaining+=l,d&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Lu=["swal-title","swal-html","swal-footer"],Xw=a=>{const l=typeof a.template=="string"?document.querySelector(a.template):a.template;if(!l)return{};const d=l.content;return rv(d),Object.assign(Jw(d),Zw(d),ev(d),tv(d),nv(d),sv(d),iv(d,Lu))},Jw=a=>{const l={};return Array.from(a.querySelectorAll("swal-param")).forEach(p=>{Nn(p,["name","value"]);const b=p.getAttribute("name"),V=p.getAttribute("value");typeof cs[b]=="boolean"?l[b]=V!=="false":typeof cs[b]=="object"?l[b]=JSON.parse(V):l[b]=V}),l},Zw=a=>{const l={};return Array.from(a.querySelectorAll("swal-function-param")).forEach(p=>{const b=p.getAttribute("name"),V=p.getAttribute("value");l[b]=new Function(`return ${V}`)()}),l},ev=a=>{const l={};return Array.from(a.querySelectorAll("swal-button")).forEach(p=>{Nn(p,["type","color","aria-label"]);const b=p.getAttribute("type");l[`${b}ButtonText`]=p.innerHTML,l[`show${h(b)}Button`]=!0,p.hasAttribute("color")&&(l[`${b}ButtonColor`]=p.getAttribute("color")),p.hasAttribute("aria-label")&&(l[`${b}ButtonAriaLabel`]=p.getAttribute("aria-label"))}),l},tv=a=>{const l={},d=a.querySelector("swal-image");return d&&(Nn(d,["src","width","height","alt"]),d.hasAttribute("src")&&(l.imageUrl=d.getAttribute("src")),d.hasAttribute("width")&&(l.imageWidth=d.getAttribute("width")),d.hasAttribute("height")&&(l.imageHeight=d.getAttribute("height")),d.hasAttribute("alt")&&(l.imageAlt=d.getAttribute("alt"))),l},nv=a=>{const l={},d=a.querySelector("swal-icon");return d&&(Nn(d,["type","color"]),d.hasAttribute("type")&&(l.icon=d.getAttribute("type")),d.hasAttribute("color")&&(l.iconColor=d.getAttribute("color")),l.iconHtml=d.innerHTML),l},sv=a=>{const l={},d=a.querySelector("swal-input");d&&(Nn(d,["type","label","placeholder","value"]),l.input=d.getAttribute("type")||"text",d.hasAttribute("label")&&(l.inputLabel=d.getAttribute("label")),d.hasAttribute("placeholder")&&(l.inputPlaceholder=d.getAttribute("placeholder")),d.hasAttribute("value")&&(l.inputValue=d.getAttribute("value")));const p=Array.from(a.querySelectorAll("swal-input-option"));return p.length&&(l.inputOptions={},p.forEach(b=>{Nn(b,["value"]);const V=b.getAttribute("value"),ge=b.innerHTML;l.inputOptions[V]=ge})),l},iv=(a,l)=>{const d={};for(const p in l){const b=l[p],V=a.querySelector(b);V&&(Nn(V,[]),d[b.replace(/^swal-/,"")]=V.innerHTML.trim())}return d},rv=a=>{const l=Lu.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(a.children).forEach(d=>{const p=d.tagName.toLowerCase();l.includes(p)||f(`Unrecognized element <${p}>`)})},Nn=(a,l)=>{Array.from(a.attributes).forEach(d=>{l.indexOf(d.name)===-1&&f([`Unrecognized attribute "${d.name}" on <${a.tagName.toLowerCase()}>.`,`${l.length?`Allowed attributes are: ${l.join(", ")}`:"To set the value, use HTML within the element."}`])})},Bu=10,ov=a=>{const l=P(),d=G();typeof a.willOpen=="function"&&a.willOpen(d);const b=window.getComputedStyle(document.body).overflowY;lv(l,d,a),setTimeout(()=>{av(l,d)},Bu),Qs()&&(cv(l,a.scrollbarPadding,b),$y()),!lt()&&!Y.previousActiveElement&&(Y.previousActiveElement=document.activeElement),typeof a.didOpen=="function"&&setTimeout(()=>a.didOpen(d)),k(l,r["no-transition"])},Fu=a=>{const l=G();if(a.target!==l)return;const d=P();l.removeEventListener(Zs,Fu),d.style.overflowY="auto"},av=(a,l)=>{Zs&&pe(l)?(a.style.overflowY="hidden",l.addEventListener(Zs,Fu)):a.style.overflowY="auto"},cv=(a,l,d)=>{Vy(),l&&d!=="hidden"&&Gy(),setTimeout(()=>{a.scrollTop=0})},lv=(a,l,d)=>{v(a,d.showClass.backdrop),l.style.setProperty("opacity","0","important"),S(l,"grid"),setTimeout(()=>{v(l,d.showClass.popup),l.style.removeProperty("opacity")},Bu),v([document.documentElement,document.body],r.shown),d.heightAuto&&d.backdrop&&!d.toast&&v([document.documentElement,document.body],r["height-auto"])};var Uu={email:(a,l)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(a)?Promise.resolve():Promise.resolve(l||"Invalid email address"),url:(a,l)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(a)?Promise.resolve():Promise.resolve(l||"Invalid URL")};function uv(a){a.inputValidator||Object.keys(Uu).forEach(l=>{a.input===l&&(a.inputValidator=Uu[l])})}function hv(a){(!a.target||typeof a.target=="string"&&!document.querySelector(a.target)||typeof a.target!="string"&&!a.target.appendChild)&&(f('Target parameter is not valid, defaulting to "body"'),a.target="body")}function dv(a){uv(a),a.showLoaderOnConfirm&&!a.preConfirm&&f(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),hv(a),typeof a.title=="string"&&(a.title=a.title.split(`
`).join("<br />")),Qm(a)}let Lt;class us{constructor(){if(typeof window>"u")return;Lt=this;for(var l=arguments.length,d=new Array(l),p=0;p<l;p++)d[p]=arguments[p];const b=Object.freeze(this.constructor.argsToParams(d));Object.defineProperties(this,{params:{value:b,writable:!1,enumerable:!0,configurable:!0}});const V=Lt._main(Lt.params);n.promise.set(this,V)}_main(l){let d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};gw(Object.assign({},d,l)),Y.currentInstance&&(Y.currentInstance._destroy(),Qs()&&vu()),Y.currentInstance=Lt;const p=pv(l,d);dv(p),Object.freeze(p),Y.timeout&&(Y.timeout.stop(),delete Y.timeout),clearTimeout(Y.restoreFocusTimeout);const b=gv(Lt);return pu(Lt,p),n.innerParams.set(Lt,p),fv(Lt,b,p)}then(l){return n.promise.get(this).then(l)}finally(l){return n.promise.get(this).finally(l)}}const fv=(a,l,d)=>new Promise((p,b)=>{const V=ge=>{a.close({isDismissed:!0,dismiss:ge})};ti.swalPromiseResolve.set(a,p),ti.swalPromiseReject.set(a,b),l.confirmButton.onclick=()=>{xw(a)},l.denyButton.onclick=()=>{Rw(a)},l.cancelButton.onclick=()=>{Dw(a,V)},l.closeButton.onclick=()=>{V(as.close)},Pw(a,l,V),Py(a,Y,d,V),Ew(a,d),ov(d),mv(Y,d,V),yv(l,d),setTimeout(()=>{l.container.scrollTop=0})}),pv=(a,l)=>{const d=Xw(a),p=Object.assign({},cs,l,d,a);return p.showClass=Object.assign({},cs.showClass,p.showClass),p.hideClass=Object.assign({},cs.hideClass,p.hideClass),p},gv=a=>{const l={popup:G(),container:P(),actions:ft(),confirmButton:Fe(),denyButton:be(),cancelButton:Ot(),loader:ae(),closeButton:ct(),validationMessage:at(),progressSteps:ot()};return n.domCache.set(a,l),l},mv=(a,l,d)=>{const p=vt();I(p),l.timer&&(a.timeout=new Qw(()=>{d("timer"),delete a.timeout},l.timer),l.timerProgressBar&&(S(p),g(p,l,"timerProgressBar"),setTimeout(()=>{a.timeout&&a.timeout.running&&le(l.timer)})))},yv=(a,l)=>{if(!l.toast){if(!A(l.allowEnterKey)){vv();return}wv(a,l)||ca(-1,1)}},wv=(a,l)=>l.focusDeny&&O(a.denyButton)?(a.denyButton.focus(),!0):l.focusCancel&&O(a.cancelButton)?(a.cancelButton.focus(),!0):l.focusConfirm&&O(a.confirmButton)?(a.confirmButton.focus(),!0):!1,vv=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|xn--p1ai)$/)){const a=new Date,l=localStorage.getItem("swal-initiation");l?(a.getTime()-Date.parse(l))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const d=document.createElement("audio");d.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",d.loop=!0,document.body.appendChild(d),setTimeout(()=>{d.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${a}`)}Object.assign(us.prototype,Su),Object.assign(us,Yw),Object.keys(Su).forEach(a=>{us[a]=function(){if(Lt)return Lt[a](...arguments)}}),us.DismissReason=as,us.version="11.7.3";const fr=us;return fr.default=fr,fr}),typeof hn<"u"&&hn.Sweetalert2&&(hn.swal=hn.sweetAlert=hn.Swal=hn.SweetAlert=hn.Sweetalert2),typeof document<"u"&&function(n,s){var i=n.createElement("style");if(n.getElementsByTagName("head")[0].appendChild(i),i.styleSheet)i.styleSheet.disabled||(i.styleSheet.cssText=s);else try{i.innerHTML=s}catch{i.innerText=s}}(document,'.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}')})($k);const Vk=Mc;const jk={class:"navbar navbar-expand-lg bg-dark footer"},Hk=["onSubmit"],qk={__name:"Form",setup(t){const e=li(""),n=async()=>{try{e.value===""?Vk.fire({text:"No puedes ingresar un mensaje vacio!",icon:"error"}):await Mk(km(zm,"chats"),{text:e.value,time:new Date().toLocaleTimeString(),uid:vi.currentUser.uid,displayName:vi.currentUser.displayName})}catch(s){console.log(s)}e.value=""};return(s,i)=>(St(),mn("footer",jk,[We("form",{onSubmit:X0(n,["prevent"])},[qb(We("input",{type:"text",placeholder:"Mensaje",spellcheck:"true","onUpdate:modelValue":i[0]||(i[0]=r=>e.value=r)},null,512),[[G0,e.value,void 0,{trim:!0}]])],40,Hk)]))}};const zk={class:"card-body"},Kk={class:"card-title"},Wk={class:"card-text"},Gk={class:"card-text"},Yk={__name:"Chat",setup(t){const e=ui("userGoogle"),n=li([]),s=li({uid:"umeAFZhnrGZMr9NfgTWnh4xtTKX2"}),i=li(null);return xb(r=>{if(e.value){const o=xk(km(zm,"chats"),Rk("time")),c=Lk(o,u=>{u.docChanges().forEach(h=>{h.type==="added"&&(n.value.push({id:h.doc.id,...h.doc.data()}),setTimeout(()=>{i.value!==null&&window.scrollTo(0,i.value.scrollHeight)},500))})});r(c)}}),(r,o)=>(St(),mn("div",{ref_key:"chatRef",ref:i},[(St(!0),mn(_t,null,Kb(n.value,c=>(St(),mn("div",{key:c.id,class:yo(["card mb-3 mt-3",c.uid===s.value.uid?"mi-mensaje":"otro-mensaje"]),style:{"max-width":"20rem"}},[We("div",zk,[We("h5",Kk,ma(c.displayName),1),We("p",Wk,ma(c.text),1),We("p",Gk,[We("small",null,ma(c.time),1)])])],2))),128))],512))}};const Qk={class:"navbar bg-dark navbar-expand-lg"},Xk={class:"container-fluid"},Jk=We("img",{src:nE,alt:"",width:"50",height:"50",loading:"lazy"},null,-1),Zk={class:"botones"},e1={class:"container min-vh-100"},t1={key:1},n1=We("h1",{class:"session-title"},"Iniciar sesion para ver los chats",-1),s1=[n1],i1={__name:"App",setup(t){const e=li(!1);ff("userGoogle",e);const n=async()=>{try{const i=new Gt,{user:r}=await HI(vi,i)}catch(i){console.log(i)}},s=async()=>{await _I(vi)};return EI(vi,i=>{e.value=i}),(i,r)=>(St(),mn(_t,null,[We("header",null,[We("nav",Qk,[We("div",Xk,[Jk,We("div",Zk,[e.value?(St(),mn("button",{key:1,class:"btn",onClick:s},"Salir")):(St(),mn("button",{key:0,class:"btn",onClick:n},"Acceder"))])])])]),We("main",e1,[e.value?(St(),sc(Yk,{key:0})):(St(),mn("div",t1,s1))]),e.value?(St(),sc(qk,{key:0})):g0("",!0)],64))}};eE(i1).mount("#app");
