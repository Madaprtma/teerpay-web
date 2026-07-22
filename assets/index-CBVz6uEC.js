import{g as Yi,c as vn,a as nf}from"./index-BJeq06jQ.js";function sf(n,r){for(var u=0;u<r.length;u++){const l=r[u];if(typeof l!="string"&&!Array.isArray(l)){for(const d in l)if(d!=="default"&&!(d in n)){const y=Object.getOwnPropertyDescriptor(l,d);y&&Object.defineProperty(n,d,y.get?y:{enumerable:!0,get:()=>l[d]})}}}return Object.freeze(Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}))}var mt={},yn={},_n={},Ft={},Gi=function(n,r){return Gi=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(u,l){u.__proto__=l}||function(u,l){for(var d in l)Object.prototype.hasOwnProperty.call(l,d)&&(u[d]=l[d])},Gi(n,r)};function fc(n,r){if(typeof r!="function"&&r!==null)throw new TypeError("Class extends value "+String(r)+" is not a constructor or null");Gi(n,r);function u(){this.constructor=n}n.prototype=r===null?Object.create(r):(u.prototype=r.prototype,new u)}var Cr=function(){return Cr=Object.assign||function(r){for(var u,l=1,d=arguments.length;l<d;l++){u=arguments[l];for(var y in u)Object.prototype.hasOwnProperty.call(u,y)&&(r[y]=u[y])}return r},Cr.apply(this,arguments)};function hc(n,r){var u={};for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&r.indexOf(l)<0&&(u[l]=n[l]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var d=0,l=Object.getOwnPropertySymbols(n);d<l.length;d++)r.indexOf(l[d])<0&&Object.prototype.propertyIsEnumerable.call(n,l[d])&&(u[l[d]]=n[l[d]]);return u}function pc(n,r,u,l){var d=arguments.length,y=d<3?r:l===null?l=Object.getOwnPropertyDescriptor(r,u):l,p;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")y=Reflect.decorate(n,r,u,l);else for(var g=n.length-1;g>=0;g--)(p=n[g])&&(y=(d<3?p(y):d>3?p(r,u,y):p(r,u))||y);return d>3&&y&&Object.defineProperty(r,u,y),y}function mc(n,r){return function(u,l){r(u,l,n)}}function gc(n,r,u,l,d,y){function p(I){if(I!==void 0&&typeof I!="function")throw new TypeError("Function expected");return I}for(var g=l.kind,w=g==="getter"?"get":g==="setter"?"set":"value",E=!r&&n?l.static?n:n.prototype:null,a=r||(E?Object.getOwnPropertyDescriptor(E,l.name):{}),f,_=!1,h=u.length-1;h>=0;h--){var P={};for(var S in l)P[S]=S==="access"?{}:l[S];for(var S in l.access)P.access[S]=l.access[S];P.addInitializer=function(I){if(_)throw new TypeError("Cannot add initializers after decoration has completed");y.push(p(I||null))};var R=(0,u[h])(g==="accessor"?{get:a.get,set:a.set}:a[w],P);if(g==="accessor"){if(R===void 0)continue;if(R===null||typeof R!="object")throw new TypeError("Object expected");(f=p(R.get))&&(a.get=f),(f=p(R.set))&&(a.set=f),(f=p(R.init))&&d.unshift(f)}else(f=p(R))&&(g==="field"?d.unshift(f):a[w]=f)}E&&Object.defineProperty(E,l.name,a),_=!0}function vc(n,r,u){for(var l=arguments.length>2,d=0;d<r.length;d++)u=l?r[d].call(n,u):r[d].call(n);return l?u:void 0}function yc(n){return typeof n=="symbol"?n:"".concat(n)}function _c(n,r,u){return typeof r=="symbol"&&(r=r.description?"[".concat(r.description,"]"):""),Object.defineProperty(n,"name",{configurable:!0,value:u?"".concat(u," ",r):r})}function Ic(n,r){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,r)}function Ec(n,r,u,l){function d(y){return y instanceof u?y:new u(function(p){p(y)})}return new(u||(u=Promise))(function(y,p){function g(a){try{E(l.next(a))}catch(f){p(f)}}function w(a){try{E(l.throw(a))}catch(f){p(f)}}function E(a){a.done?y(a.value):d(a.value).then(g,w)}E((l=l.apply(n,r||[])).next())})}function wc(n,r){var u={label:0,sent:function(){if(y[0]&1)throw y[1];return y[1]},trys:[],ops:[]},l,d,y,p=Object.create((typeof Iterator=="function"?Iterator:Object).prototype);return p.next=g(0),p.throw=g(1),p.return=g(2),typeof Symbol=="function"&&(p[Symbol.iterator]=function(){return this}),p;function g(E){return function(a){return w([E,a])}}function w(E){if(l)throw new TypeError("Generator is already executing.");for(;p&&(p=0,E[0]&&(u=0)),u;)try{if(l=1,d&&(y=E[0]&2?d.return:E[0]?d.throw||((y=d.return)&&y.call(d),0):d.next)&&!(y=y.call(d,E[1])).done)return y;switch(d=0,y&&(E=[E[0]&2,y.value]),E[0]){case 0:case 1:y=E;break;case 4:return u.label++,{value:E[1],done:!1};case 5:u.label++,d=E[1],E=[0];continue;case 7:E=u.ops.pop(),u.trys.pop();continue;default:if(y=u.trys,!(y=y.length>0&&y[y.length-1])&&(E[0]===6||E[0]===2)){u=0;continue}if(E[0]===3&&(!y||E[1]>y[0]&&E[1]<y[3])){u.label=E[1];break}if(E[0]===6&&u.label<y[1]){u.label=y[1],y=E;break}if(y&&u.label<y[2]){u.label=y[2],u.ops.push(E);break}y[2]&&u.ops.pop(),u.trys.pop();continue}E=r.call(n,u)}catch(a){E=[6,a],d=0}finally{l=y=0}if(E[0]&5)throw E[1];return{value:E[0]?E[1]:void 0,done:!0}}}var Ur=Object.create?(function(n,r,u,l){l===void 0&&(l=u);var d=Object.getOwnPropertyDescriptor(r,u);(!d||("get"in d?!r.__esModule:d.writable||d.configurable))&&(d={enumerable:!0,get:function(){return r[u]}}),Object.defineProperty(n,l,d)}):(function(n,r,u,l){l===void 0&&(l=u),n[l]=r[u]});function Sc(n,r){for(var u in n)u!=="default"&&!Object.prototype.hasOwnProperty.call(r,u)&&Ur(r,n,u)}function Dr(n){var r=typeof Symbol=="function"&&Symbol.iterator,u=r&&n[r],l=0;if(u)return u.call(n);if(n&&typeof n.length=="number")return{next:function(){return n&&l>=n.length&&(n=void 0),{value:n&&n[l++],done:!n}}};throw new TypeError(r?"Object is not iterable.":"Symbol.iterator is not defined.")}function Xi(n,r){var u=typeof Symbol=="function"&&n[Symbol.iterator];if(!u)return n;var l=u.call(n),d,y=[],p;try{for(;(r===void 0||r-- >0)&&!(d=l.next()).done;)y.push(d.value)}catch(g){p={error:g}}finally{try{d&&!d.done&&(u=l.return)&&u.call(l)}finally{if(p)throw p.error}}return y}function bc(){for(var n=[],r=0;r<arguments.length;r++)n=n.concat(Xi(arguments[r]));return n}function Tc(){for(var n=0,r=0,u=arguments.length;r<u;r++)n+=arguments[r].length;for(var l=Array(n),d=0,r=0;r<u;r++)for(var y=arguments[r],p=0,g=y.length;p<g;p++,d++)l[d]=y[p];return l}function Ac(n,r,u){if(u||arguments.length===2)for(var l=0,d=r.length,y;l<d;l++)(y||!(l in r))&&(y||(y=Array.prototype.slice.call(r,0,l)),y[l]=r[l]);return n.concat(y||Array.prototype.slice.call(r))}function Bt(n){return this instanceof Bt?(this.v=n,this):new Bt(n)}function Rc(n,r,u){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var l=u.apply(n,r||[]),d,y=[];return d=Object.create((typeof AsyncIterator=="function"?AsyncIterator:Object).prototype),g("next"),g("throw"),g("return",p),d[Symbol.asyncIterator]=function(){return this},d;function p(h){return function(P){return Promise.resolve(P).then(h,f)}}function g(h,P){l[h]&&(d[h]=function(S){return new Promise(function(R,I){y.push([h,S,R,I])>1||w(h,S)})},P&&(d[h]=P(d[h])))}function w(h,P){try{E(l[h](P))}catch(S){_(y[0][3],S)}}function E(h){h.value instanceof Bt?Promise.resolve(h.value.v).then(a,f):_(y[0][2],h)}function a(h){w("next",h)}function f(h){w("throw",h)}function _(h,P){h(P),y.shift(),y.length&&w(y[0][0],y[0][1])}}function Pc(n){var r,u;return r={},l("next"),l("throw",function(d){throw d}),l("return"),r[Symbol.iterator]=function(){return this},r;function l(d,y){r[d]=n[d]?function(p){return(u=!u)?{value:Bt(n[d](p)),done:!1}:y?y(p):p}:y}}function Oc(n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var r=n[Symbol.asyncIterator],u;return r?r.call(n):(n=typeof Dr=="function"?Dr(n):n[Symbol.iterator](),u={},l("next"),l("throw"),l("return"),u[Symbol.asyncIterator]=function(){return this},u);function l(y){u[y]=n[y]&&function(p){return new Promise(function(g,w){p=n[y](p),d(g,w,p.done,p.value)})}}function d(y,p,g,w){Promise.resolve(w).then(function(E){y({value:E,done:g})},p)}}function Nc(n,r){return Object.defineProperty?Object.defineProperty(n,"raw",{value:r}):n.raw=r,n}var of=Object.create?(function(n,r){Object.defineProperty(n,"default",{enumerable:!0,value:r})}):function(n,r){n.default=r},zi=function(n){return zi=Object.getOwnPropertyNames||function(r){var u=[];for(var l in r)Object.prototype.hasOwnProperty.call(r,l)&&(u[u.length]=l);return u},zi(n)};function Lc(n){if(n&&n.__esModule)return n;var r={};if(n!=null)for(var u=zi(n),l=0;l<u.length;l++)u[l]!=="default"&&Ur(r,n,u[l]);return of(r,n),r}function kc(n){return n&&n.__esModule?n:{default:n}}function Cc(n,r,u,l){if(u==="a"&&!l)throw new TypeError("Private accessor was defined without a getter");if(typeof r=="function"?n!==r||!l:!r.has(n))throw new TypeError("Cannot read private member from an object whose class did not declare it");return u==="m"?l:u==="a"?l.call(n):l?l.value:r.get(n)}function Dc(n,r,u,l,d){if(l==="m")throw new TypeError("Private method is not writable");if(l==="a"&&!d)throw new TypeError("Private accessor was defined without a setter");if(typeof r=="function"?n!==r||!d:!r.has(n))throw new TypeError("Cannot write private member to an object whose class did not declare it");return l==="a"?d.call(n,u):d?d.value=u:r.set(n,u),u}function Mc(n,r){if(r===null||typeof r!="object"&&typeof r!="function")throw new TypeError("Cannot use 'in' operator on non-object");return typeof n=="function"?r===n:n.has(r)}function Uc(n,r,u){if(r!=null){if(typeof r!="object"&&typeof r!="function")throw new TypeError("Object expected.");var l,d;if(u){if(!Symbol.asyncDispose)throw new TypeError("Symbol.asyncDispose is not defined.");l=r[Symbol.asyncDispose]}if(l===void 0){if(!Symbol.dispose)throw new TypeError("Symbol.dispose is not defined.");l=r[Symbol.dispose],u&&(d=l)}if(typeof l!="function")throw new TypeError("Object not disposable.");d&&(l=function(){try{d.call(this)}catch(y){return Promise.reject(y)}}),n.stack.push({value:r,dispose:l,async:u})}else u&&n.stack.push({async:!0});return r}var af=typeof SuppressedError=="function"?SuppressedError:function(n,r,u){var l=new Error(u);return l.name="SuppressedError",l.error=n,l.suppressed=r,l};function Fc(n){function r(y){n.error=n.hasError?new af(y,n.error,"An error was suppressed during disposal."):y,n.hasError=!0}var u,l=0;function d(){for(;u=n.stack.pop();)try{if(!u.async&&l===1)return l=0,n.stack.push(u),Promise.resolve().then(d);if(u.dispose){var y=u.dispose.call(u.value);if(u.async)return l|=2,Promise.resolve(y).then(d,function(p){return r(p),d()})}else l|=1}catch(p){r(p)}if(l===1)return n.hasError?Promise.reject(n.error):Promise.resolve();if(n.hasError)throw n.error}return d()}function xc(n,r){return typeof n=="string"&&/^\.\.?\//.test(n)?n.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i,function(u,l,d,y,p){return l?r?".jsx":".js":d&&(!y||!p)?u:d+y+"."+p.toLowerCase()+"js"}):n}const cf={__extends:fc,__assign:Cr,__rest:hc,__decorate:pc,__param:mc,__esDecorate:gc,__runInitializers:vc,__propKey:yc,__setFunctionName:_c,__metadata:Ic,__awaiter:Ec,__generator:wc,__createBinding:Ur,__exportStar:Sc,__values:Dr,__read:Xi,__spread:bc,__spreadArrays:Tc,__spreadArray:Ac,__await:Bt,__asyncGenerator:Rc,__asyncDelegator:Pc,__asyncValues:Oc,__makeTemplateObject:Nc,__importStar:Lc,__importDefault:kc,__classPrivateFieldGet:Cc,__classPrivateFieldSet:Dc,__classPrivateFieldIn:Mc,__addDisposableResource:Uc,__disposeResources:Fc,__rewriteRelativeImportExtension:xc},uf=Object.freeze(Object.defineProperty({__proto__:null,__addDisposableResource:Uc,get __assign(){return Cr},__asyncDelegator:Pc,__asyncGenerator:Rc,__asyncValues:Oc,__await:Bt,__awaiter:Ec,__classPrivateFieldGet:Cc,__classPrivateFieldIn:Mc,__classPrivateFieldSet:Dc,__createBinding:Ur,__decorate:pc,__disposeResources:Fc,__esDecorate:gc,__exportStar:Sc,__extends:fc,__generator:wc,__importDefault:kc,__importStar:Lc,__makeTemplateObject:Nc,__metadata:Ic,__param:mc,__propKey:yc,__read:Xi,__rest:hc,__rewriteRelativeImportExtension:xc,__runInitializers:vc,__setFunctionName:_c,__spread:bc,__spreadArray:Ac,__spreadArrays:Tc,__values:Dr,default:cf},Symbol.toStringTag,{value:"Module"})),Fr=Yi(uf);var ce={},fo;function xr(){if(fo)return ce;fo=1;var n={};Object.defineProperty(ce,"__esModule",{value:!0});/**
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
 */const r={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const u=function(N,T){if(!N)throw l(T)},l=function(N){return new Error("Firebase Database ("+r.SDK_VERSION+") INTERNAL ASSERT FAILED: "+N)};/**
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
 */const d=function(N){const T=[];let k=0;for(let U=0;U<N.length;U++){let D=N.charCodeAt(U);D<128?T[k++]=D:D<2048?(T[k++]=D>>6|192,T[k++]=D&63|128):(D&64512)===55296&&U+1<N.length&&(N.charCodeAt(U+1)&64512)===56320?(D=65536+((D&1023)<<10)+(N.charCodeAt(++U)&1023),T[k++]=D>>18|240,T[k++]=D>>12&63|128,T[k++]=D>>6&63|128,T[k++]=D&63|128):(T[k++]=D>>12|224,T[k++]=D>>6&63|128,T[k++]=D&63|128)}return T},y=function(N){const T=[];let k=0,U=0;for(;k<N.length;){const D=N[k++];if(D<128)T[U++]=String.fromCharCode(D);else if(D>191&&D<224){const ee=N[k++];T[U++]=String.fromCharCode((D&31)<<6|ee&63)}else if(D>239&&D<365){const ee=N[k++],me=N[k++],Se=N[k++],Re=((D&7)<<18|(ee&63)<<12|(me&63)<<6|Se&63)-65536;T[U++]=String.fromCharCode(55296+(Re>>10)),T[U++]=String.fromCharCode(56320+(Re&1023))}else{const ee=N[k++],me=N[k++];T[U++]=String.fromCharCode((D&15)<<12|(ee&63)<<6|me&63)}}return T.join("")},p={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(N,T){if(!Array.isArray(N))throw Error("encodeByteArray takes an array as a parameter");this.init_();const k=T?this.byteToCharMapWebSafe_:this.byteToCharMap_,U=[];for(let D=0;D<N.length;D+=3){const ee=N[D],me=D+1<N.length,Se=me?N[D+1]:0,Re=D+2<N.length,Me=Re?N[D+2]:0,We=ee>>2,Pe=(ee&3)<<4|Se>>4;let Ke=(Se&15)<<2|Me>>6,De=Me&63;Re||(De=64,me||(Ke=64)),U.push(k[We],k[Pe],k[Ke],k[De])}return U.join("")},encodeString(N,T){return this.HAS_NATIVE_SUPPORT&&!T?btoa(N):this.encodeByteArray(d(N),T)},decodeString(N,T){return this.HAS_NATIVE_SUPPORT&&!T?atob(N):y(this.decodeStringToByteArray(N,T))},decodeStringToByteArray(N,T){this.init_();const k=T?this.charToByteMapWebSafe_:this.charToByteMap_,U=[];for(let D=0;D<N.length;){const ee=k[N.charAt(D++)],Se=D<N.length?k[N.charAt(D)]:0;++D;const Me=D<N.length?k[N.charAt(D)]:64;++D;const Pe=D<N.length?k[N.charAt(D)]:64;if(++D,ee==null||Se==null||Me==null||Pe==null)throw new g;const Ke=ee<<2|Se>>4;if(U.push(Ke),Me!==64){const De=Se<<4&240|Me>>2;if(U.push(De),Pe!==64){const lr=Me<<6&192|Pe;U.push(lr)}}}return U},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let N=0;N<this.ENCODED_VALS.length;N++)this.byteToCharMap_[N]=this.ENCODED_VALS.charAt(N),this.charToByteMap_[this.byteToCharMap_[N]]=N,this.byteToCharMapWebSafe_[N]=this.ENCODED_VALS_WEBSAFE.charAt(N),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[N]]=N,N>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(N)]=N,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(N)]=N)}}};class g extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const w=function(N){const T=d(N);return p.encodeByteArray(T,!0)},E=function(N){return w(N).replace(/\./g,"")},a=function(N){try{return p.decodeString(N,!0)}catch(T){console.error("base64Decode failed: ",T)}return null};/**
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
 */function f(N){return _(void 0,N)}function _(N,T){if(!(T instanceof Object))return T;switch(T.constructor){case Date:const k=T;return new Date(k.getTime());case Object:N===void 0&&(N={});break;case Array:N=[];break;default:return T}for(const k in T)!T.hasOwnProperty(k)||!h(k)||(N[k]=_(N[k],T[k]));return N}function h(N){return N!=="__proto__"}/**
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
 */function P(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof vn<"u")return vn;throw new Error("Unable to locate global object.")}/**
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
 */const S=()=>P().__FIREBASE_DEFAULTS__,R=()=>{if(typeof process>"u"||typeof n>"u")return;const N=n.__FIREBASE_DEFAULTS__;if(N)return JSON.parse(N)},I=()=>{if(typeof document>"u")return;let N;try{N=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const T=N&&a(N[1]);return T&&JSON.parse(T)},A=()=>{try{return S()||R()||I()}catch(N){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${N}`);return}},L=N=>{var T,k;return(k=(T=A())===null||T===void 0?void 0:T.emulatorHosts)===null||k===void 0?void 0:k[N]},B=N=>{const T=L(N);if(!T)return;const k=T.lastIndexOf(":");if(k<=0||k+1===T.length)throw new Error(`Invalid host ${T} with no separate hostname and port!`);const U=parseInt(T.substring(k+1),10);return T[0]==="["?[T.substring(1,k-1),U]:[T.substring(0,k),U]},V=()=>{var N;return(N=A())===null||N===void 0?void 0:N.config},q=N=>{var T;return(T=A())===null||T===void 0?void 0:T[`_${N}`]};/**
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
 */class re{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((T,k)=>{this.resolve=T,this.reject=k})}wrapCallback(T){return(k,U)=>{k?this.reject(k):this.resolve(U),typeof T=="function"&&(this.promise.catch(()=>{}),T.length===1?T(k):T(k,U))}}}/**
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
 */function W(N,T){if(N.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const k={alg:"none",type:"JWT"},U=T||"demo-project",D=N.iat||0,ee=N.sub||N.user_id;if(!ee)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const me=Object.assign({iss:`https://securetoken.google.com/${U}`,aud:U,iat:D,exp:D+3600,auth_time:D,sub:ee,user_id:ee,firebase:{sign_in_provider:"custom",identities:{}}},N);return[E(JSON.stringify(k)),E(JSON.stringify(me)),""].join(".")}/**
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
 */function F(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function de(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(F())}function fe(){var N;const T=(N=A())===null||N===void 0?void 0:N.forceEnvironment;if(T==="node")return!0;if(T==="browser")return!1;try{return Object.prototype.toString.call(vn.process)==="[object process]"}catch{return!1}}function we(){return typeof window<"u"||Q()}function Q(){return typeof WorkerGlobalScope<"u"&&typeof self<"u"&&self instanceof WorkerGlobalScope}function he(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function ie(){const N=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof N=="object"&&N.id!==void 0}function _e(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function K(){return F().indexOf("Electron/")>=0}function H(){const N=F();return N.indexOf("MSIE ")>=0||N.indexOf("Trident/")>=0}function oe(){return F().indexOf("MSAppHost/")>=0}function ue(){return r.NODE_CLIENT===!0||r.NODE_ADMIN===!0}function ae(){return!fe()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function j(){try{return typeof indexedDB=="object"}catch{return!1}}function te(){return new Promise((N,T)=>{try{let k=!0;const U="validate-browser-context-for-indexeddb-analytics-module",D=self.indexedDB.open(U);D.onsuccess=()=>{D.result.close(),k||self.indexedDB.deleteDatabase(U),N(!0)},D.onupgradeneeded=()=>{k=!1},D.onerror=()=>{var ee;T(((ee=D.error)===null||ee===void 0?void 0:ee.message)||"")}}catch(k){T(k)}})}function Ee(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
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
 */const le="FirebaseError";class ye extends Error{constructor(T,k,U){super(k),this.code=T,this.customData=U,this.name=le,Object.setPrototypeOf(this,ye.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Le.prototype.create)}}class Le{constructor(T,k,U){this.service=T,this.serviceName=k,this.errors=U}create(T,...k){const U=k[0]||{},D=`${this.service}/${T}`,ee=this.errors[T],me=ee?Te(ee,U):"Error",Se=`${this.serviceName}: ${me} (${D}).`;return new ye(D,Se,U)}}function Te(N,T){return N.replace(Ue,(k,U)=>{const D=T[U];return D!=null?String(D):`<${U}?>`})}const Ue=/\{\$([^}]+)}/g;/**
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
 */function Fe(N){return JSON.parse(N)}function Xe(N){return JSON.stringify(N)}/**
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
 */const $=function(N){let T={},k={},U={},D="";try{const ee=N.split(".");T=Fe(a(ee[0])||""),k=Fe(a(ee[1])||""),D=ee[2],U=k.d||{},delete k.d}catch{}return{header:T,claims:k,data:U,signature:D}},pe=function(N){const T=$(N).claims,k=Math.floor(new Date().getTime()/1e3);let U=0,D=0;return typeof T=="object"&&(T.hasOwnProperty("nbf")?U=T.nbf:T.hasOwnProperty("iat")&&(U=T.iat),T.hasOwnProperty("exp")?D=T.exp:D=U+86400),!!k&&!!U&&!!D&&k>=U&&k<=D},ve=function(N){const T=$(N).claims;return typeof T=="object"&&T.hasOwnProperty("iat")?T.iat:null},xe=function(N){const T=$(N),k=T.claims;return!!k&&typeof k=="object"&&k.hasOwnProperty("iat")},Oe=function(N){const T=$(N).claims;return typeof T=="object"&&T.admin===!0};/**
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
 */function qe(N,T){return Object.prototype.hasOwnProperty.call(N,T)}function Be(N,T){if(Object.prototype.hasOwnProperty.call(N,T))return N[T]}function vt(N){for(const T in N)if(Object.prototype.hasOwnProperty.call(N,T))return!1;return!0}function ot(N,T,k){const U={};for(const D in N)Object.prototype.hasOwnProperty.call(N,D)&&(U[D]=T.call(k,N[D],D,N));return U}function Je(N,T){if(N===T)return!0;const k=Object.keys(N),U=Object.keys(T);for(const D of k){if(!U.includes(D))return!1;const ee=N[D],me=T[D];if($e(ee)&&$e(me)){if(!Je(ee,me))return!1}else if(ee!==me)return!1}for(const D of U)if(!k.includes(D))return!1;return!0}function $e(N){return N!==null&&typeof N=="object"}/**
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
 */function et(N,T=2e3){const k=new re;return setTimeout(()=>k.reject("timeout!"),T),N.then(k.resolve,k.reject),k.promise}/**
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
 */function Ge(N){const T=[];for(const[k,U]of Object.entries(N))Array.isArray(U)?U.forEach(D=>{T.push(encodeURIComponent(k)+"="+encodeURIComponent(D))}):T.push(encodeURIComponent(k)+"="+encodeURIComponent(U));return T.length?"&"+T.join("&"):""}function ze(N){const T={};return N.replace(/^\?/,"").split("&").forEach(U=>{if(U){const[D,ee]=U.split("=");T[decodeURIComponent(D)]=decodeURIComponent(ee)}}),T}function yt(N){const T=N.indexOf("?");if(!T)return"";const k=N.indexOf("#",T);return N.substring(T,k>0?k:void 0)}/**
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
 */class v{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let T=1;T<this.blockSize;++T)this.pad_[T]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(T,k){k||(k=0);const U=this.W_;if(typeof T=="string")for(let Pe=0;Pe<16;Pe++)U[Pe]=T.charCodeAt(k)<<24|T.charCodeAt(k+1)<<16|T.charCodeAt(k+2)<<8|T.charCodeAt(k+3),k+=4;else for(let Pe=0;Pe<16;Pe++)U[Pe]=T[k]<<24|T[k+1]<<16|T[k+2]<<8|T[k+3],k+=4;for(let Pe=16;Pe<80;Pe++){const Ke=U[Pe-3]^U[Pe-8]^U[Pe-14]^U[Pe-16];U[Pe]=(Ke<<1|Ke>>>31)&4294967295}let D=this.chain_[0],ee=this.chain_[1],me=this.chain_[2],Se=this.chain_[3],Re=this.chain_[4],Me,We;for(let Pe=0;Pe<80;Pe++){Pe<40?Pe<20?(Me=Se^ee&(me^Se),We=1518500249):(Me=ee^me^Se,We=1859775393):Pe<60?(Me=ee&me|Se&(ee|me),We=2400959708):(Me=ee^me^Se,We=3395469782);const Ke=(D<<5|D>>>27)+Me+Re+We+U[Pe]&4294967295;Re=Se,Se=me,me=(ee<<30|ee>>>2)&4294967295,ee=D,D=Ke}this.chain_[0]=this.chain_[0]+D&4294967295,this.chain_[1]=this.chain_[1]+ee&4294967295,this.chain_[2]=this.chain_[2]+me&4294967295,this.chain_[3]=this.chain_[3]+Se&4294967295,this.chain_[4]=this.chain_[4]+Re&4294967295}update(T,k){if(T==null)return;k===void 0&&(k=T.length);const U=k-this.blockSize;let D=0;const ee=this.buf_;let me=this.inbuf_;for(;D<k;){if(me===0)for(;D<=U;)this.compress_(T,D),D+=this.blockSize;if(typeof T=="string"){for(;D<k;)if(ee[me]=T.charCodeAt(D),++me,++D,me===this.blockSize){this.compress_(ee),me=0;break}}else for(;D<k;)if(ee[me]=T[D],++me,++D,me===this.blockSize){this.compress_(ee),me=0;break}}this.inbuf_=me,this.total_+=k}digest(){const T=[];let k=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let D=this.blockSize-1;D>=56;D--)this.buf_[D]=k&255,k/=256;this.compress_(this.buf_);let U=0;for(let D=0;D<5;D++)for(let ee=24;ee>=0;ee-=8)T[U]=this.chain_[D]>>ee&255,++U;return T}}function o(N,T){const k=new c(N,T);return k.subscribe.bind(k)}class c{constructor(T,k){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=k,this.task.then(()=>{T(this)}).catch(U=>{this.error(U)})}next(T){this.forEachObserver(k=>{k.next(T)})}error(T){this.forEachObserver(k=>{k.error(T)}),this.close(T)}complete(){this.forEachObserver(T=>{T.complete()}),this.close()}subscribe(T,k,U){let D;if(T===void 0&&k===void 0&&U===void 0)throw new Error("Missing Observer.");M(T,["next","error","complete"])?D=T:D={next:T,error:k,complete:U},D.next===void 0&&(D.next=x),D.error===void 0&&(D.error=x),D.complete===void 0&&(D.complete=x);const ee=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?D.error(this.finalError):D.complete()}catch{}}),this.observers.push(D),ee}unsubscribeOne(T){this.observers===void 0||this.observers[T]===void 0||(delete this.observers[T],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(T){if(!this.finalized)for(let k=0;k<this.observers.length;k++)this.sendOne(k,T)}sendOne(T,k){this.task.then(()=>{if(this.observers!==void 0&&this.observers[T]!==void 0)try{k(this.observers[T])}catch(U){typeof console<"u"&&console.error&&console.error(U)}})}close(T){this.finalized||(this.finalized=!0,T!==void 0&&(this.finalError=T),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O(N,T){return(...k)=>{Promise.resolve(!0).then(()=>{N(...k)}).catch(U=>{T&&T(U)})}}function M(N,T){if(typeof N!="object"||N===null)return!1;for(const k of T)if(k in N&&typeof N[k]=="function")return!0;return!1}function x(){}/**
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
 */const G=function(N,T,k,U){let D;if(U<T?D="at least "+T:U>k&&(D=k===0?"none":"no more than "+k),D){const ee=N+" failed: Was called with "+U+(U===1?" argument.":" arguments.")+" Expects "+D+".";throw new Error(ee)}};function Ie(N,T){return`${N} failed: ${T} argument `}function Ne(N,T,k){if(!(k&&!T)&&typeof T!="string")throw new Error(Ie(N,"namespace")+"must be a valid firebase namespace.")}function Ae(N,T,k,U){if(!(U&&!k)&&typeof k!="function")throw new Error(Ie(N,T)+"must be a valid function.")}function Ce(N,T,k,U){if(!(U&&!k)&&(typeof k!="object"||k===null))throw new Error(Ie(N,T)+"must be a valid context object.")}/**
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
 */const be=function(N){const T=[];let k=0;for(let U=0;U<N.length;U++){let D=N.charCodeAt(U);if(D>=55296&&D<=56319){const ee=D-55296;U++,u(U<N.length,"Surrogate pair missing trail surrogate.");const me=N.charCodeAt(U)-56320;D=65536+(ee<<10)+me}D<128?T[k++]=D:D<2048?(T[k++]=D>>6|192,T[k++]=D&63|128):D<65536?(T[k++]=D>>12|224,T[k++]=D>>6&63|128,T[k++]=D&63|128):(T[k++]=D>>18|240,T[k++]=D>>12&63|128,T[k++]=D>>6&63|128,T[k++]=D&63|128)}return T},Ot=function(N){let T=0;for(let k=0;k<N.length;k++){const U=N.charCodeAt(k);U<128?T++:U<2048?T+=2:U>=55296&&U<=56319?(T+=4,k++):T+=3}return T};/**
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
 */const St=function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,N=>{const T=Math.random()*16|0;return(N==="x"?T:T&3|8).toString(16)})};/**
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
 */const tt=1e3,rt=2,bt=14400*1e3,_t=.5;function Nt(N,T=tt,k=rt){const U=T*Math.pow(k,N),D=Math.round(_t*U*(Math.random()-.5)*2);return Math.min(bt,U+D)}/**
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
 */function Z(N){return Number.isFinite(N)?N+Y(N):`${N}`}function Y(N){N=Math.abs(N);const T=N%100;if(T>=10&&T<=20)return"th";const k=N%10;return k===1?"st":k===2?"nd":k===3?"rd":"th"}/**
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
 */function se(N){return N&&N._delegate?N._delegate:N}return ce.CONSTANTS=r,ce.DecodeBase64StringError=g,ce.Deferred=re,ce.ErrorFactory=Le,ce.FirebaseError=ye,ce.MAX_VALUE_MILLIS=bt,ce.RANDOM_FACTOR=_t,ce.Sha1=v,ce.areCookiesEnabled=Ee,ce.assert=u,ce.assertionError=l,ce.async=O,ce.base64=p,ce.base64Decode=a,ce.base64Encode=w,ce.base64urlEncodeWithoutPadding=E,ce.calculateBackoffMillis=Nt,ce.contains=qe,ce.createMockUserToken=W,ce.createSubscribe=o,ce.decode=$,ce.deepCopy=f,ce.deepEqual=Je,ce.deepExtend=_,ce.errorPrefix=Ie,ce.extractQuerystring=yt,ce.getDefaultAppConfig=V,ce.getDefaultEmulatorHost=L,ce.getDefaultEmulatorHostnameAndPort=B,ce.getDefaults=A,ce.getExperimentalSetting=q,ce.getGlobal=P,ce.getModularInstance=se,ce.getUA=F,ce.isAdmin=Oe,ce.isBrowser=we,ce.isBrowserExtension=ie,ce.isCloudflareWorker=he,ce.isElectron=K,ce.isEmpty=vt,ce.isIE=H,ce.isIndexedDBAvailable=j,ce.isMobileCordova=de,ce.isNode=fe,ce.isNodeSdk=ue,ce.isReactNative=_e,ce.isSafari=ae,ce.isUWP=oe,ce.isValidFormat=xe,ce.isValidTimestamp=pe,ce.isWebWorker=Q,ce.issuedAtTime=ve,ce.jsonEval=Fe,ce.map=ot,ce.ordinal=Z,ce.promiseWithTimeout=et,ce.querystring=Ge,ce.querystringDecode=ze,ce.safeGet=Be,ce.stringLength=Ot,ce.stringToByteArray=be,ce.stringify=Xe,ce.uuidv4=St,ce.validateArgCount=G,ce.validateCallback=Ae,ce.validateContextObject=Ce,ce.validateIndexedDBOpenable=te,ce.validateNamespace=Ne,ce}var ho;function Qi(){if(ho)return Ft;ho=1,Object.defineProperty(Ft,"__esModule",{value:!0});var n=Fr,r=xr(),u=(function(){function w(E,a,f){this.name=E,this.instanceFactory=a,this.type=f,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return w.prototype.setInstantiationMode=function(E){return this.instantiationMode=E,this},w.prototype.setMultipleInstances=function(E){return this.multipleInstances=E,this},w.prototype.setServiceProps=function(E){return this.serviceProps=E,this},w.prototype.setInstanceCreatedCallback=function(E){return this.onInstanceCreated=E,this},w})();/**
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
 */var l="[DEFAULT]";/**
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
 */var d=(function(){function w(E,a){this.name=E,this.container=a,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return w.prototype.get=function(E){var a=this.normalizeInstanceIdentifier(E);if(!this.instancesDeferred.has(a)){var f=new r.Deferred;if(this.instancesDeferred.set(a,f),this.isInitialized(a)||this.shouldAutoInitialize())try{var _=this.getOrInitializeService({instanceIdentifier:a});_&&f.resolve(_)}catch{}}return this.instancesDeferred.get(a).promise},w.prototype.getImmediate=function(E){var a,f=this.normalizeInstanceIdentifier(E==null?void 0:E.identifier),_=(a=E==null?void 0:E.optional)!==null&&a!==void 0?a:!1;if(this.isInitialized(f)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:f})}catch(h){if(_)return null;throw h}else{if(_)return null;throw Error("Service ".concat(this.name," is not available"))}},w.prototype.getComponent=function(){return this.component},w.prototype.setComponent=function(E){var a,f;if(E.name!==this.name)throw Error("Mismatching Component ".concat(E.name," for Provider ").concat(this.name,"."));if(this.component)throw Error("Component for ".concat(this.name," has already been provided"));if(this.component=E,!!this.shouldAutoInitialize()){if(p(E))try{this.getOrInitializeService({instanceIdentifier:l})}catch{}try{for(var _=n.__values(this.instancesDeferred.entries()),h=_.next();!h.done;h=_.next()){var P=n.__read(h.value,2),S=P[0],R=P[1],I=this.normalizeInstanceIdentifier(S);try{var A=this.getOrInitializeService({instanceIdentifier:I});R.resolve(A)}catch{}}}catch(L){a={error:L}}finally{try{h&&!h.done&&(f=_.return)&&f.call(_)}finally{if(a)throw a.error}}}},w.prototype.clearInstance=function(E){E===void 0&&(E=l),this.instancesDeferred.delete(E),this.instancesOptions.delete(E),this.instances.delete(E)},w.prototype.delete=function(){return n.__awaiter(this,void 0,void 0,function(){var E;return n.__generator(this,function(a){switch(a.label){case 0:return E=Array.from(this.instances.values()),[4,Promise.all(n.__spreadArray(n.__spreadArray([],n.__read(E.filter(function(f){return"INTERNAL"in f}).map(function(f){return f.INTERNAL.delete()})),!1),n.__read(E.filter(function(f){return"_delete"in f}).map(function(f){return f._delete()})),!1))];case 1:return a.sent(),[2]}})})},w.prototype.isComponentSet=function(){return this.component!=null},w.prototype.isInitialized=function(E){return E===void 0&&(E=l),this.instances.has(E)},w.prototype.getOptions=function(E){return E===void 0&&(E=l),this.instancesOptions.get(E)||{}},w.prototype.initialize=function(E){var a,f;E===void 0&&(E={});var _=E.options,h=_===void 0?{}:_,P=this.normalizeInstanceIdentifier(E.instanceIdentifier);if(this.isInitialized(P))throw Error("".concat(this.name,"(").concat(P,") has already been initialized"));if(!this.isComponentSet())throw Error("Component ".concat(this.name," has not been registered yet"));var S=this.getOrInitializeService({instanceIdentifier:P,options:h});try{for(var R=n.__values(this.instancesDeferred.entries()),I=R.next();!I.done;I=R.next()){var A=n.__read(I.value,2),L=A[0],B=A[1],V=this.normalizeInstanceIdentifier(L);P===V&&B.resolve(S)}}catch(q){a={error:q}}finally{try{I&&!I.done&&(f=R.return)&&f.call(R)}finally{if(a)throw a.error}}return S},w.prototype.onInit=function(E,a){var f,_=this.normalizeInstanceIdentifier(a),h=(f=this.onInitCallbacks.get(_))!==null&&f!==void 0?f:new Set;h.add(E),this.onInitCallbacks.set(_,h);var P=this.instances.get(_);return P&&E(P,_),function(){h.delete(E)}},w.prototype.invokeOnInitCallbacks=function(E,a){var f,_,h=this.onInitCallbacks.get(a);if(h)try{for(var P=n.__values(h),S=P.next();!S.done;S=P.next()){var R=S.value;try{R(E,a)}catch{}}}catch(I){f={error:I}}finally{try{S&&!S.done&&(_=P.return)&&_.call(P)}finally{if(f)throw f.error}}},w.prototype.getOrInitializeService=function(E){var a=E.instanceIdentifier,f=E.options,_=f===void 0?{}:f,h=this.instances.get(a);if(!h&&this.component&&(h=this.component.instanceFactory(this.container,{instanceIdentifier:y(a),options:_}),this.instances.set(a,h),this.instancesOptions.set(a,_),this.invokeOnInitCallbacks(h,a),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,a,h)}catch{}return h||null},w.prototype.normalizeInstanceIdentifier=function(E){return E===void 0&&(E=l),this.component?this.component.multipleInstances?E:l:E},w.prototype.shouldAutoInitialize=function(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"},w})();function y(w){return w===l?void 0:w}function p(w){return w.instantiationMode==="EAGER"}/**
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
 */var g=(function(){function w(E){this.name=E,this.providers=new Map}return w.prototype.addComponent=function(E){var a=this.getProvider(E.name);if(a.isComponentSet())throw new Error("Component ".concat(E.name," has already been registered with ").concat(this.name));a.setComponent(E)},w.prototype.addOrOverwriteComponent=function(E){var a=this.getProvider(E.name);a.isComponentSet()&&this.providers.delete(E.name),this.addComponent(E)},w.prototype.getProvider=function(E){if(this.providers.has(E))return this.providers.get(E);var a=new d(E,this);return this.providers.set(E,a),a},w.prototype.getProviders=function(){return Array.from(this.providers.values())},w})();return Ft.Component=u,Ft.ComponentContainer=g,Ft.Provider=d,Ft}var In={},po;function Zi(){return po||(po=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0});var r=Fr;/**
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
 */var u,l=[];n.LogLevel=void 0,(function(f){f[f.DEBUG=0]="DEBUG",f[f.VERBOSE=1]="VERBOSE",f[f.INFO=2]="INFO",f[f.WARN=3]="WARN",f[f.ERROR=4]="ERROR",f[f.SILENT=5]="SILENT"})(n.LogLevel||(n.LogLevel={}));var d={debug:n.LogLevel.DEBUG,verbose:n.LogLevel.VERBOSE,info:n.LogLevel.INFO,warn:n.LogLevel.WARN,error:n.LogLevel.ERROR,silent:n.LogLevel.SILENT},y=n.LogLevel.INFO,p=(u={},u[n.LogLevel.DEBUG]="log",u[n.LogLevel.VERBOSE]="log",u[n.LogLevel.INFO]="info",u[n.LogLevel.WARN]="warn",u[n.LogLevel.ERROR]="error",u),g=function(f,_){for(var h=[],P=2;P<arguments.length;P++)h[P-2]=arguments[P];if(!(_<f.logLevel)){var S=new Date().toISOString(),R=p[_];if(R)console[R].apply(console,r.__spreadArray(["[".concat(S,"]  ").concat(f.name,":")],h,!1));else throw new Error("Attempted to log a message with an invalid logType (value: ".concat(_,")"))}},w=(function(){function f(_){this.name=_,this._logLevel=y,this._logHandler=g,this._userLogHandler=null,l.push(this)}return Object.defineProperty(f.prototype,"logLevel",{get:function(){return this._logLevel},set:function(_){if(!(_ in n.LogLevel))throw new TypeError('Invalid value "'.concat(_,'" assigned to `logLevel`'));this._logLevel=_},enumerable:!1,configurable:!0}),f.prototype.setLogLevel=function(_){this._logLevel=typeof _=="string"?d[_]:_},Object.defineProperty(f.prototype,"logHandler",{get:function(){return this._logHandler},set:function(_){if(typeof _!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=_},enumerable:!1,configurable:!0}),Object.defineProperty(f.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(_){this._userLogHandler=_},enumerable:!1,configurable:!0}),f.prototype.debug=function(){for(var _=[],h=0;h<arguments.length;h++)_[h]=arguments[h];this._userLogHandler&&this._userLogHandler.apply(this,r.__spreadArray([this,n.LogLevel.DEBUG],_,!1)),this._logHandler.apply(this,r.__spreadArray([this,n.LogLevel.DEBUG],_,!1))},f.prototype.log=function(){for(var _=[],h=0;h<arguments.length;h++)_[h]=arguments[h];this._userLogHandler&&this._userLogHandler.apply(this,r.__spreadArray([this,n.LogLevel.VERBOSE],_,!1)),this._logHandler.apply(this,r.__spreadArray([this,n.LogLevel.VERBOSE],_,!1))},f.prototype.info=function(){for(var _=[],h=0;h<arguments.length;h++)_[h]=arguments[h];this._userLogHandler&&this._userLogHandler.apply(this,r.__spreadArray([this,n.LogLevel.INFO],_,!1)),this._logHandler.apply(this,r.__spreadArray([this,n.LogLevel.INFO],_,!1))},f.prototype.warn=function(){for(var _=[],h=0;h<arguments.length;h++)_[h]=arguments[h];this._userLogHandler&&this._userLogHandler.apply(this,r.__spreadArray([this,n.LogLevel.WARN],_,!1)),this._logHandler.apply(this,r.__spreadArray([this,n.LogLevel.WARN],_,!1))},f.prototype.error=function(){for(var _=[],h=0;h<arguments.length;h++)_[h]=arguments[h];this._userLogHandler&&this._userLogHandler.apply(this,r.__spreadArray([this,n.LogLevel.ERROR],_,!1)),this._logHandler.apply(this,r.__spreadArray([this,n.LogLevel.ERROR],_,!1))},f})();function E(f){l.forEach(function(_){_.setLogLevel(f)})}function a(f,_){for(var h=function(I){var A=null;_&&_.level&&(A=d[_.level]),f===null?I.userLogHandler=null:I.userLogHandler=function(L,B){for(var V=[],q=2;q<arguments.length;q++)V[q-2]=arguments[q];var re=V.map(function(W){if(W==null)return null;if(typeof W=="string")return W;if(typeof W=="number"||typeof W=="boolean")return W.toString();if(W instanceof Error)return W.message;try{return JSON.stringify(W)}catch{return null}}).filter(function(W){return W}).join(" ");B>=(A??L.logLevel)&&f({level:n.LogLevel[B].toLowerCase(),message:re,args:V,type:L.name})}},P=0,S=l;P<S.length;P++){var R=S[P];h(R)}}n.Logger=w,n.setLogLevel=E,n.setUserLogHandler=a})(In)),In}const lf=(n,r)=>r.some(u=>n instanceof u);let mo,go;function df(){return mo||(mo=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ff(){return go||(go=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bc=new WeakMap,Ki=new WeakMap,$c=new WeakMap,En=new WeakMap,es=new WeakMap;function hf(n){const r=new Promise((u,l)=>{const d=()=>{n.removeEventListener("success",y),n.removeEventListener("error",p)},y=()=>{u(it(n.result)),d()},p=()=>{l(n.error),d()};n.addEventListener("success",y),n.addEventListener("error",p)});return r.then(u=>{u instanceof IDBCursor&&Bc.set(u,n)}).catch(()=>{}),es.set(r,n),r}function pf(n){if(Ki.has(n))return;const r=new Promise((u,l)=>{const d=()=>{n.removeEventListener("complete",y),n.removeEventListener("error",p),n.removeEventListener("abort",p)},y=()=>{u(),d()},p=()=>{l(n.error||new DOMException("AbortError","AbortError")),d()};n.addEventListener("complete",y),n.addEventListener("error",p),n.addEventListener("abort",p)});Ki.set(n,r)}let Ji={get(n,r,u){if(n instanceof IDBTransaction){if(r==="done")return Ki.get(n);if(r==="objectStoreNames")return n.objectStoreNames||$c.get(n);if(r==="store")return u.objectStoreNames[1]?void 0:u.objectStore(u.objectStoreNames[0])}return it(n[r])},set(n,r,u){return n[r]=u,!0},has(n,r){return n instanceof IDBTransaction&&(r==="done"||r==="store")?!0:r in n}};function mf(n){Ji=n(Ji)}function gf(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(r,...u){const l=n.call(kr(this),r,...u);return $c.set(l,r.sort?r.sort():[r]),it(l)}:ff().includes(n)?function(...r){return n.apply(kr(this),r),it(Bc.get(this))}:function(...r){return it(n.apply(kr(this),r))}}function vf(n){return typeof n=="function"?gf(n):(n instanceof IDBTransaction&&pf(n),lf(n,df())?new Proxy(n,Ji):n)}function it(n){if(n instanceof IDBRequest)return hf(n);if(En.has(n))return En.get(n);const r=vf(n);return r!==n&&(En.set(n,r),es.set(r,n)),r}const kr=n=>es.get(n);function yf(n,r,{blocked:u,upgrade:l,blocking:d,terminated:y}={}){const p=indexedDB.open(n,r),g=it(p);return l&&p.addEventListener("upgradeneeded",w=>{l(it(p.result),w.oldVersion,w.newVersion,it(p.transaction),w)}),u&&p.addEventListener("blocked",w=>u(w.oldVersion,w.newVersion,w)),g.then(w=>{y&&w.addEventListener("close",()=>y()),d&&w.addEventListener("versionchange",E=>d(E.oldVersion,E.newVersion,E))}).catch(()=>{}),g}function _f(n,{blocked:r}={}){const u=indexedDB.deleteDatabase(n);return r&&u.addEventListener("blocked",l=>r(l.oldVersion,l)),it(u).then(()=>{})}const If=["get","getKey","getAll","getAllKeys","count"],Ef=["put","add","delete","clear"],wn=new Map;function vo(n,r){if(!(n instanceof IDBDatabase&&!(r in n)&&typeof r=="string"))return;if(wn.get(r))return wn.get(r);const u=r.replace(/FromIndex$/,""),l=r!==u,d=Ef.includes(u);if(!(u in(l?IDBIndex:IDBObjectStore).prototype)||!(d||If.includes(u)))return;const y=async function(p,...g){const w=this.transaction(p,d?"readwrite":"readonly");let E=w.store;return l&&(E=E.index(g.shift())),(await Promise.all([E[u](...g),d&&w.done]))[0]};return wn.set(r,y),y}mf(n=>({...n,get:(r,u,l)=>vo(r,u)||n.get(r,u,l),has:(r,u)=>!!vo(r,u)||n.has(r,u)}));const wf=Object.freeze(Object.defineProperty({__proto__:null,deleteDB:_f,openDB:yf,unwrap:kr,wrap:it},Symbol.toStringTag,{value:"Module"})),Sf=Yi(wf);var yo;function ts(){return yo||(yo=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0});var r=Qi(),u=Fr,l=Zi(),d=xr(),y=Sf;/**
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
 */var p=(function(){function Z(Y){this.container=Y}return Z.prototype.getPlatformInfoString=function(){var Y=this.container.getProviders();return Y.map(function(se){if(g(se)){var N=se.getImmediate();return"".concat(N.library,"/").concat(N.version)}else return null}).filter(function(se){return se}).join(" ")},Z})();function g(Z){var Y=Z.getComponent();return(Y==null?void 0:Y.type)==="VERSION"}var w="@firebase/app",E="0.10.13";/**
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
 */var a=new l.Logger("@firebase/app"),f="@firebase/app-compat",_="@firebase/analytics-compat",h="@firebase/analytics",P="@firebase/app-check-compat",S="@firebase/app-check",R="@firebase/auth",I="@firebase/auth-compat",A="@firebase/database",L="@firebase/data-connect",B="@firebase/database-compat",V="@firebase/functions",q="@firebase/functions-compat",re="@firebase/installations",W="@firebase/installations-compat",F="@firebase/messaging",de="@firebase/messaging-compat",fe="@firebase/performance",we="@firebase/performance-compat",Q="@firebase/remote-config",he="@firebase/remote-config-compat",ie="@firebase/storage",_e="@firebase/storage-compat",K="@firebase/firestore",H="@firebase/vertexai-preview",oe="@firebase/firestore-compat",ue="firebase",ae="10.14.1";/**
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
 */var j,te="[DEFAULT]",Ee=(j={},j[w]="fire-core",j[f]="fire-core-compat",j[h]="fire-analytics",j[_]="fire-analytics-compat",j[S]="fire-app-check",j[P]="fire-app-check-compat",j[R]="fire-auth",j[I]="fire-auth-compat",j[A]="fire-rtdb",j[L]="fire-data-connect",j[B]="fire-rtdb-compat",j[V]="fire-fn",j[q]="fire-fn-compat",j[re]="fire-iid",j[W]="fire-iid-compat",j[F]="fire-fcm",j[de]="fire-fcm-compat",j[fe]="fire-perf",j[we]="fire-perf-compat",j[Q]="fire-rc",j[he]="fire-rc-compat",j[ie]="fire-gcs",j[_e]="fire-gcs-compat",j[K]="fire-fst",j[oe]="fire-fst-compat",j[H]="fire-vertex",j["fire-js"]="fire-js",j[ue]="fire-js-all",j);/**
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
 */var le=new Map,ye=new Map,Le=new Map;function Te(Z,Y){try{Z.container.addComponent(Y)}catch(se){a.debug("Component ".concat(Y.name," failed to register with FirebaseApp ").concat(Z.name),se)}}function Ue(Z,Y){Z.container.addOrOverwriteComponent(Y)}function Fe(Z){var Y,se,N,T,k=Z.name;if(Le.has(k))return a.debug("There were multiple attempts to register component ".concat(k,".")),!1;Le.set(k,Z);try{for(var U=u.__values(le.values()),D=U.next();!D.done;D=U.next()){var ee=D.value;Te(ee,Z)}}catch(Me){Y={error:Me}}finally{try{D&&!D.done&&(se=U.return)&&se.call(U)}finally{if(Y)throw Y.error}}try{for(var me=u.__values(ye.values()),Se=me.next();!Se.done;Se=me.next()){var Re=Se.value;Te(Re,Z)}}catch(Me){N={error:Me}}finally{try{Se&&!Se.done&&(T=me.return)&&T.call(me)}finally{if(N)throw N.error}}return!0}function Xe(Z,Y){var se=Z.container.getProvider("heartbeat").getImmediate({optional:!0});return se&&se.triggerHeartbeat(),Z.container.getProvider(Y)}function $(Z,Y,se){se===void 0&&(se=te),Xe(Z,Y).clearInstance(se)}function pe(Z){return Z.options!==void 0}function ve(Z){return Z.settings!==void 0}function xe(){Le.clear()}/**
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
 */var Oe,qe=(Oe={},Oe["no-app"]="No Firebase App '{$appName}' has been created - call initializeApp() first",Oe["bad-app-name"]="Illegal App name: '{$appName}'",Oe["duplicate-app"]="Firebase App named '{$appName}' already exists with different options or config",Oe["app-deleted"]="Firebase App named '{$appName}' already deleted",Oe["server-app-deleted"]="Firebase Server App has been deleted",Oe["no-options"]="Need to provide options, when not being deployed to hosting via source.",Oe["invalid-app-argument"]="firebase.{$appName}() takes either no argument or a Firebase App instance.",Oe["invalid-log-argument"]="First argument to `onLog` must be null or a function.",Oe["idb-open"]="Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",Oe["idb-get"]="Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",Oe["idb-set"]="Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",Oe["idb-delete"]="Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.",Oe["finalization-registry-not-supported"]="FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.",Oe["invalid-server-app-environment"]="FirebaseServerApp is not for use in browser environments.",Oe),Be=new d.ErrorFactory("app","Firebase",qe);/**
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
 */var vt=(function(){function Z(Y,se,N){var T=this;this._isDeleted=!1,this._options=u.__assign({},Y),this._config=u.__assign({},se),this._name=se.name,this._automaticDataCollectionEnabled=se.automaticDataCollectionEnabled,this._container=N,this.container.addComponent(new r.Component("app",function(){return T},"PUBLIC"))}return Object.defineProperty(Z.prototype,"automaticDataCollectionEnabled",{get:function(){return this.checkDestroyed(),this._automaticDataCollectionEnabled},set:function(Y){this.checkDestroyed(),this._automaticDataCollectionEnabled=Y},enumerable:!1,configurable:!0}),Object.defineProperty(Z.prototype,"name",{get:function(){return this.checkDestroyed(),this._name},enumerable:!1,configurable:!0}),Object.defineProperty(Z.prototype,"options",{get:function(){return this.checkDestroyed(),this._options},enumerable:!1,configurable:!0}),Object.defineProperty(Z.prototype,"config",{get:function(){return this.checkDestroyed(),this._config},enumerable:!1,configurable:!0}),Object.defineProperty(Z.prototype,"container",{get:function(){return this._container},enumerable:!1,configurable:!0}),Object.defineProperty(Z.prototype,"isDeleted",{get:function(){return this._isDeleted},set:function(Y){this._isDeleted=Y},enumerable:!1,configurable:!0}),Z.prototype.checkDestroyed=function(){if(this.isDeleted)throw Be.create("app-deleted",{appName:this._name})},Z})();/**
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
 */var ot=(function(Z){u.__extends(Y,Z);function Y(se,N,T,k){var U=this,D=N.automaticDataCollectionEnabled!==void 0?N.automaticDataCollectionEnabled:!1,ee={name:T,automaticDataCollectionEnabled:D};if(se.apiKey!==void 0)U=Z.call(this,se,ee,k)||this;else{var me=se;U=Z.call(this,me.options,ee,k)||this}return U._serverConfig=u.__assign({automaticDataCollectionEnabled:D},N),U._finalizationRegistry=null,typeof FinalizationRegistry<"u"&&(U._finalizationRegistry=new FinalizationRegistry(function(){U.automaticCleanup()})),U._refCount=0,U.incRefCount(U._serverConfig.releaseOnDeref),U._serverConfig.releaseOnDeref=void 0,N.releaseOnDeref=void 0,v(w,E,"serverapp"),U}return Y.prototype.toJSON=function(){},Object.defineProperty(Y.prototype,"refCount",{get:function(){return this._refCount},enumerable:!1,configurable:!0}),Y.prototype.incRefCount=function(se){this.isDeleted||(this._refCount++,se!==void 0&&this._finalizationRegistry!==null&&this._finalizationRegistry.register(se,this))},Y.prototype.decRefCount=function(){return this.isDeleted?0:--this._refCount},Y.prototype.automaticCleanup=function(){yt(this)},Object.defineProperty(Y.prototype,"settings",{get:function(){return this.checkDestroyed(),this._serverConfig},enumerable:!1,configurable:!0}),Y.prototype.checkDestroyed=function(){if(this.isDeleted)throw Be.create("server-app-deleted")},Y})(vt);/**
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
 */var Je=ae;function $e(Z,Y){var se,N;Y===void 0&&(Y={});var T=Z;if(typeof Y!="object"){var k=Y;Y={name:k}}var U=u.__assign({name:te,automaticDataCollectionEnabled:!1},Y),D=U.name;if(typeof D!="string"||!D)throw Be.create("bad-app-name",{appName:String(D)});if(T||(T=d.getDefaultAppConfig()),!T)throw Be.create("no-options");var ee=le.get(D);if(ee){if(d.deepEqual(T,ee.options)&&d.deepEqual(U,ee.config))return ee;throw Be.create("duplicate-app",{appName:D})}var me=new r.ComponentContainer(D);try{for(var Se=u.__values(Le.values()),Re=Se.next();!Re.done;Re=Se.next()){var Me=Re.value;me.addComponent(Me)}}catch(Pe){se={error:Pe}}finally{try{Re&&!Re.done&&(N=Se.return)&&N.call(Se)}finally{if(se)throw se.error}}var We=new vt(T,U,me);return le.set(D,We),We}function et(Z,Y){var se,N;if(d.isBrowser()&&!d.isWebWorker())throw Be.create("invalid-server-app-environment");Y.automaticDataCollectionEnabled===void 0&&(Y.automaticDataCollectionEnabled=!1);var T;pe(Z)?T=Z.options:T=Z;var k=u.__assign(u.__assign({},Y),T);k.releaseOnDeref!==void 0&&delete k.releaseOnDeref;var U=function(Pe){return u.__spreadArray([],u.__read(Pe),!1).reduce(function(Ke,De){return Math.imul(31,Ke)+De.charCodeAt(0)|0},0)};if(Y.releaseOnDeref!==void 0&&typeof FinalizationRegistry>"u")throw Be.create("finalization-registry-not-supported",{});var D=""+U(JSON.stringify(k)),ee=ye.get(D);if(ee)return ee.incRefCount(Y.releaseOnDeref),ee;var me=new r.ComponentContainer(D);try{for(var Se=u.__values(Le.values()),Re=Se.next();!Re.done;Re=Se.next()){var Me=Re.value;me.addComponent(Me)}}catch(Pe){se={error:Pe}}finally{try{Re&&!Re.done&&(N=Se.return)&&N.call(Se)}finally{if(se)throw se.error}}var We=new ot(T,Y,D,me);return ye.set(D,We),We}function Ge(Z){Z===void 0&&(Z=te);var Y=le.get(Z);if(!Y&&Z===te&&d.getDefaultAppConfig())return $e();if(!Y)throw Be.create("no-app",{appName:Z});return Y}function ze(){return Array.from(le.values())}function yt(Z){return u.__awaiter(this,void 0,void 0,function(){var Y,se,N;return u.__generator(this,function(T){switch(T.label){case 0:return Y=!1,se=Z.name,le.has(se)?(Y=!0,le.delete(se)):ye.has(se)&&(N=Z,N.decRefCount()<=0&&(ye.delete(se),Y=!0)),Y?[4,Promise.all(Z.container.getProviders().map(function(k){return k.delete()}))]:[3,2];case 1:T.sent(),Z.isDeleted=!0,T.label=2;case 2:return[2]}})})}function v(Z,Y,se){var N,T=(N=Ee[Z])!==null&&N!==void 0?N:Z;se&&(T+="-".concat(se));var k=T.match(/\s|\//),U=Y.match(/\s|\//);if(k||U){var D=['Unable to register library "'.concat(T,'" with version "').concat(Y,'":')];k&&D.push('library name "'.concat(T,'" contains illegal characters (whitespace or "/")')),k&&U&&D.push("and"),U&&D.push('version name "'.concat(Y,'" contains illegal characters (whitespace or "/")')),a.warn(D.join(" "));return}Fe(new r.Component("".concat(T,"-version"),function(){return{library:T,version:Y}},"VERSION"))}function o(Z,Y){if(Z!==null&&typeof Z!="function")throw Be.create("invalid-log-argument");l.setUserLogHandler(Z,Y)}function c(Z){l.setLogLevel(Z)}/**
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
 */var O="firebase-heartbeat-database",M=1,x="firebase-heartbeat-store",G=null;function Ie(){return G||(G=y.openDB(O,M,{upgrade:function(Z,Y){switch(Y){case 0:try{Z.createObjectStore(x)}catch(se){console.warn(se)}}}}).catch(function(Z){throw Be.create("idb-open",{originalErrorMessage:Z.message})})),G}function Ne(Z){return u.__awaiter(this,void 0,void 0,function(){var Y,se,N,T,k;return u.__generator(this,function(U){switch(U.label){case 0:return U.trys.push([0,4,,5]),[4,Ie()];case 1:return Y=U.sent(),se=Y.transaction(x),[4,se.objectStore(x).get(Ce(Z))];case 2:return N=U.sent(),[4,se.done];case 3:return U.sent(),[2,N];case 4:return T=U.sent(),T instanceof d.FirebaseError?a.warn(T.message):(k=Be.create("idb-get",{originalErrorMessage:T==null?void 0:T.message}),a.warn(k.message)),[3,5];case 5:return[2]}})})}function Ae(Z,Y){return u.__awaiter(this,void 0,void 0,function(){var se,N,T,k,U;return u.__generator(this,function(D){switch(D.label){case 0:return D.trys.push([0,4,,5]),[4,Ie()];case 1:return se=D.sent(),N=se.transaction(x,"readwrite"),T=N.objectStore(x),[4,T.put(Y,Ce(Z))];case 2:return D.sent(),[4,N.done];case 3:return D.sent(),[3,5];case 4:return k=D.sent(),k instanceof d.FirebaseError?a.warn(k.message):(U=Be.create("idb-set",{originalErrorMessage:k==null?void 0:k.message}),a.warn(U.message)),[3,5];case 5:return[2]}})})}function Ce(Z){return"".concat(Z.name,"!").concat(Z.options.appId)}/**
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
 */var be=1024,Ot=720*60*60*1e3,St=(function(){function Z(Y){var se=this;this.container=Y,this._heartbeatsCache=null;var N=this.container.getProvider("app").getImmediate();this._storage=new bt(N),this._heartbeatsCachePromise=this._storage.read().then(function(T){return se._heartbeatsCache=T,T})}return Z.prototype.triggerHeartbeat=function(){var Y,se;return u.__awaiter(this,void 0,void 0,function(){var N,T,k,U,D;return u.__generator(this,function(ee){switch(ee.label){case 0:return ee.trys.push([0,3,,4]),N=this.container.getProvider("platform-logger").getImmediate(),T=N.getPlatformInfoString(),k=tt(),((Y=this._heartbeatsCache)===null||Y===void 0?void 0:Y.heartbeats)!=null?[3,2]:(U=this,[4,this._heartbeatsCachePromise]);case 1:if(U._heartbeatsCache=ee.sent(),((se=this._heartbeatsCache)===null||se===void 0?void 0:se.heartbeats)==null)return[2];ee.label=2;case 2:return this._heartbeatsCache.lastSentHeartbeatDate===k||this._heartbeatsCache.heartbeats.some(function(me){return me.date===k})?[2]:(this._heartbeatsCache.heartbeats.push({date:k,agent:T}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(function(me){var Se=new Date(me.date).valueOf(),Re=Date.now();return Re-Se<=Ot}),[2,this._storage.overwrite(this._heartbeatsCache)]);case 3:return D=ee.sent(),a.warn(D),[3,4];case 4:return[2]}})})},Z.prototype.getHeartbeatsHeader=function(){var Y;return u.__awaiter(this,void 0,void 0,function(){var se,N,T,k,U,D;return u.__generator(this,function(ee){switch(ee.label){case 0:return ee.trys.push([0,6,,7]),this._heartbeatsCache!==null?[3,2]:[4,this._heartbeatsCachePromise];case 1:ee.sent(),ee.label=2;case 2:return((Y=this._heartbeatsCache)===null||Y===void 0?void 0:Y.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0?[2,""]:(se=tt(),N=rt(this._heartbeatsCache.heartbeats),T=N.heartbeatsToSend,k=N.unsentEntries,U=d.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:T})),this._heartbeatsCache.lastSentHeartbeatDate=se,k.length>0?(this._heartbeatsCache.heartbeats=k,[4,this._storage.overwrite(this._heartbeatsCache)]):[3,4]);case 3:return ee.sent(),[3,5];case 4:this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache),ee.label=5;case 5:return[2,U];case 6:return D=ee.sent(),a.warn(D),[2,""];case 7:return[2]}})})},Z})();function tt(){var Z=new Date;return Z.toISOString().substring(0,10)}function rt(Z,Y){var se,N;Y===void 0&&(Y=be);var T=[],k=Z.slice(),U=function(Re){var Me=T.find(function(We){return We.agent===Re.agent});if(Me){if(Me.dates.push(Re.date),_t(T)>Y)return Me.dates.pop(),"break"}else if(T.push({agent:Re.agent,dates:[Re.date]}),_t(T)>Y)return T.pop(),"break";k=k.slice(1)};try{for(var D=u.__values(Z),ee=D.next();!ee.done;ee=D.next()){var me=ee.value,Se=U(me);if(Se==="break")break}}catch(Re){se={error:Re}}finally{try{ee&&!ee.done&&(N=D.return)&&N.call(D)}finally{if(se)throw se.error}}return{heartbeatsToSend:T,unsentEntries:k}}var bt=(function(){function Z(Y){this.app=Y,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}return Z.prototype.runIndexedDBEnvironmentCheck=function(){return u.__awaiter(this,void 0,void 0,function(){return u.__generator(this,function(Y){return d.isIndexedDBAvailable()?[2,d.validateIndexedDBOpenable().then(function(){return!0}).catch(function(){return!1})]:[2,!1]})})},Z.prototype.read=function(){return u.__awaiter(this,void 0,void 0,function(){var Y,se;return u.__generator(this,function(N){switch(N.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return Y=N.sent(),Y?[3,2]:[2,{heartbeats:[]}];case 2:return[4,Ne(this.app)];case 3:return se=N.sent(),se!=null&&se.heartbeats?[2,se]:[2,{heartbeats:[]}];case 4:return[2]}})})},Z.prototype.overwrite=function(Y){var se;return u.__awaiter(this,void 0,void 0,function(){var N,T;return u.__generator(this,function(k){switch(k.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return N=k.sent(),N?[3,2]:[2];case 2:return[4,this.read()];case 3:return T=k.sent(),[2,Ae(this.app,{lastSentHeartbeatDate:(se=Y.lastSentHeartbeatDate)!==null&&se!==void 0?se:T.lastSentHeartbeatDate,heartbeats:Y.heartbeats})]}})})},Z.prototype.add=function(Y){var se;return u.__awaiter(this,void 0,void 0,function(){var N,T;return u.__generator(this,function(k){switch(k.label){case 0:return[4,this._canUseIndexedDBPromise];case 1:return N=k.sent(),N?[3,2]:[2];case 2:return[4,this.read()];case 3:return T=k.sent(),[2,Ae(this.app,{lastSentHeartbeatDate:(se=Y.lastSentHeartbeatDate)!==null&&se!==void 0?se:T.lastSentHeartbeatDate,heartbeats:u.__spreadArray(u.__spreadArray([],u.__read(T.heartbeats),!1),u.__read(Y.heartbeats),!1)})]}})})},Z})();function _t(Z){return d.base64urlEncodeWithoutPadding(JSON.stringify({version:2,heartbeats:Z})).length}/**
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
 */function Nt(Z){Fe(new r.Component("platform-logger",function(Y){return new p(Y)},"PRIVATE")),Fe(new r.Component("heartbeat",function(Y){return new St(Y)},"PRIVATE")),v(w,E,Z),v(w,E,"cjs5"),v("fire-js","")}Nt("node"),Object.defineProperty(n,"FirebaseError",{enumerable:!0,get:function(){return d.FirebaseError}}),n.SDK_VERSION=Je,n._DEFAULT_ENTRY_NAME=te,n._addComponent=Te,n._addOrOverwriteComponent=Ue,n._apps=le,n._clearComponents=xe,n._components=Le,n._getProvider=Xe,n._isFirebaseApp=pe,n._isFirebaseServerApp=ve,n._registerComponent=Fe,n._removeServiceInstance=$,n._serverApps=ye,n.deleteApp=yt,n.getApp=Ge,n.getApps=ze,n.initializeApp=$e,n.initializeServerApp=et,n.onLog=o,n.registerVersion=v,n.setLogLevel=c})(_n)),_n}var _o;function bf(){return _o||(_o=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0});var r=ts(),u="firebase",l="10.14.1";/**
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
 */r.registerVersion(u,l,"app"),Object.keys(r).forEach(function(d){d!=="default"&&!n.hasOwnProperty(d)&&Object.defineProperty(n,d,{enumerable:!0,get:function(){return r[d]}})})})(yn)),yn}var Sn={},ne={},X={},Io;function Tf(){if(Io)return X;Io=1;var n=ts(),r=xr(),u=Zi(),l=Fr,d=Qi();/**
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
 */const y={PHONE:"phone",TOTP:"totp"},p={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},g={EMAIL_LINK:"emailLink",EMAIL_PASSWORD:"password",FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PHONE:"phone",TWITTER:"twitter.com"},w={LINK:"link",REAUTHENTICATE:"reauthenticate",SIGN_IN:"signIn"},E={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function a(){return{"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","emulator-config-failed":'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',"expired-action-code":"The action code has expired.","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal AuthError has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registered for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal AuthError has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-emulator-scheme":"Emulator URL must start with a valid scheme (http:// or https://).","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is incorrect, malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","login-blocked":"Login blocked by user-provided method: {$originalMessage}","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal AuthError has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-password":"A non-empty password must be provided","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal AuthError has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled.","already-initialized":"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.","missing-recaptcha-token":"The reCAPTCHA token is missing when sending request to the backend.","invalid-recaptcha-token":"The reCAPTCHA token is invalid when sending request to the backend.","invalid-recaptcha-action":"The reCAPTCHA action is invalid when sending request to the backend.","recaptcha-not-enabled":"reCAPTCHA Enterprise integration is not enabled for this project.","missing-client-type":"The reCAPTCHA client type is missing when sending request to the backend.","missing-recaptcha-version":"The reCAPTCHA version is missing when sending request to the backend.","invalid-req-type":"Invalid request parameters.","invalid-recaptcha-version":"The reCAPTCHA version is invalid when sending request to the backend.","unsupported-password-policy-schema-version":"The password policy received from the backend uses a schema version that is not supported by this version of the Firebase SDK.","password-does-not-meet-requirements":"The password does not meet the requirements."}}function f(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const _=a,h=f,P=new r.ErrorFactory("auth","Firebase",f()),S={ADMIN_ONLY_OPERATION:"auth/admin-restricted-operation",ARGUMENT_ERROR:"auth/argument-error",APP_NOT_AUTHORIZED:"auth/app-not-authorized",APP_NOT_INSTALLED:"auth/app-not-installed",CAPTCHA_CHECK_FAILED:"auth/captcha-check-failed",CODE_EXPIRED:"auth/code-expired",CORDOVA_NOT_READY:"auth/cordova-not-ready",CORS_UNSUPPORTED:"auth/cors-unsupported",CREDENTIAL_ALREADY_IN_USE:"auth/credential-already-in-use",CREDENTIAL_MISMATCH:"auth/custom-token-mismatch",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"auth/requires-recent-login",DEPENDENT_SDK_INIT_BEFORE_AUTH:"auth/dependent-sdk-initialized-before-auth",DYNAMIC_LINK_NOT_ACTIVATED:"auth/dynamic-link-not-activated",EMAIL_CHANGE_NEEDS_VERIFICATION:"auth/email-change-needs-verification",EMAIL_EXISTS:"auth/email-already-in-use",EMULATOR_CONFIG_FAILED:"auth/emulator-config-failed",EXPIRED_OOB_CODE:"auth/expired-action-code",EXPIRED_POPUP_REQUEST:"auth/cancelled-popup-request",INTERNAL_ERROR:"auth/internal-error",INVALID_API_KEY:"auth/invalid-api-key",INVALID_APP_CREDENTIAL:"auth/invalid-app-credential",INVALID_APP_ID:"auth/invalid-app-id",INVALID_AUTH:"auth/invalid-user-token",INVALID_AUTH_EVENT:"auth/invalid-auth-event",INVALID_CERT_HASH:"auth/invalid-cert-hash",INVALID_CODE:"auth/invalid-verification-code",INVALID_CONTINUE_URI:"auth/invalid-continue-uri",INVALID_CORDOVA_CONFIGURATION:"auth/invalid-cordova-configuration",INVALID_CUSTOM_TOKEN:"auth/invalid-custom-token",INVALID_DYNAMIC_LINK_DOMAIN:"auth/invalid-dynamic-link-domain",INVALID_EMAIL:"auth/invalid-email",INVALID_EMULATOR_SCHEME:"auth/invalid-emulator-scheme",INVALID_IDP_RESPONSE:"auth/invalid-credential",INVALID_LOGIN_CREDENTIALS:"auth/invalid-credential",INVALID_MESSAGE_PAYLOAD:"auth/invalid-message-payload",INVALID_MFA_SESSION:"auth/invalid-multi-factor-session",INVALID_OAUTH_CLIENT_ID:"auth/invalid-oauth-client-id",INVALID_OAUTH_PROVIDER:"auth/invalid-oauth-provider",INVALID_OOB_CODE:"auth/invalid-action-code",INVALID_ORIGIN:"auth/unauthorized-domain",INVALID_PASSWORD:"auth/wrong-password",INVALID_PERSISTENCE:"auth/invalid-persistence-type",INVALID_PHONE_NUMBER:"auth/invalid-phone-number",INVALID_PROVIDER_ID:"auth/invalid-provider-id",INVALID_RECIPIENT_EMAIL:"auth/invalid-recipient-email",INVALID_SENDER:"auth/invalid-sender",INVALID_SESSION_INFO:"auth/invalid-verification-id",INVALID_TENANT_ID:"auth/invalid-tenant-id",MFA_INFO_NOT_FOUND:"auth/multi-factor-info-not-found",MFA_REQUIRED:"auth/multi-factor-auth-required",MISSING_ANDROID_PACKAGE_NAME:"auth/missing-android-pkg-name",MISSING_APP_CREDENTIAL:"auth/missing-app-credential",MISSING_AUTH_DOMAIN:"auth/auth-domain-config-required",MISSING_CODE:"auth/missing-verification-code",MISSING_CONTINUE_URI:"auth/missing-continue-uri",MISSING_IFRAME_START:"auth/missing-iframe-start",MISSING_IOS_BUNDLE_ID:"auth/missing-ios-bundle-id",MISSING_OR_INVALID_NONCE:"auth/missing-or-invalid-nonce",MISSING_MFA_INFO:"auth/missing-multi-factor-info",MISSING_MFA_SESSION:"auth/missing-multi-factor-session",MISSING_PHONE_NUMBER:"auth/missing-phone-number",MISSING_SESSION_INFO:"auth/missing-verification-id",MODULE_DESTROYED:"auth/app-deleted",NEED_CONFIRMATION:"auth/account-exists-with-different-credential",NETWORK_REQUEST_FAILED:"auth/network-request-failed",NULL_USER:"auth/null-user",NO_AUTH_EVENT:"auth/no-auth-event",NO_SUCH_PROVIDER:"auth/no-such-provider",OPERATION_NOT_ALLOWED:"auth/operation-not-allowed",OPERATION_NOT_SUPPORTED:"auth/operation-not-supported-in-this-environment",POPUP_BLOCKED:"auth/popup-blocked",POPUP_CLOSED_BY_USER:"auth/popup-closed-by-user",PROVIDER_ALREADY_LINKED:"auth/provider-already-linked",QUOTA_EXCEEDED:"auth/quota-exceeded",REDIRECT_CANCELLED_BY_USER:"auth/redirect-cancelled-by-user",REDIRECT_OPERATION_PENDING:"auth/redirect-operation-pending",REJECTED_CREDENTIAL:"auth/rejected-credential",SECOND_FACTOR_ALREADY_ENROLLED:"auth/second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"auth/maximum-second-factor-count-exceeded",TENANT_ID_MISMATCH:"auth/tenant-id-mismatch",TIMEOUT:"auth/timeout",TOKEN_EXPIRED:"auth/user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"auth/too-many-requests",UNAUTHORIZED_DOMAIN:"auth/unauthorized-continue-uri",UNSUPPORTED_FIRST_FACTOR:"auth/unsupported-first-factor",UNSUPPORTED_PERSISTENCE:"auth/unsupported-persistence-type",UNSUPPORTED_TENANT_OPERATION:"auth/unsupported-tenant-operation",UNVERIFIED_EMAIL:"auth/unverified-email",USER_CANCELLED:"auth/user-cancelled",USER_DELETED:"auth/user-not-found",USER_DISABLED:"auth/user-disabled",USER_MISMATCH:"auth/user-mismatch",USER_SIGNED_OUT:"auth/user-signed-out",WEAK_PASSWORD:"auth/weak-password",WEB_STORAGE_UNSUPPORTED:"auth/web-storage-unsupported",ALREADY_INITIALIZED:"auth/already-initialized",RECAPTCHA_NOT_ENABLED:"auth/recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"auth/missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"auth/invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"auth/invalid-recaptcha-action",MISSING_CLIENT_TYPE:"auth/missing-client-type",MISSING_RECAPTCHA_VERSION:"auth/missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"auth/invalid-recaptcha-version",INVALID_REQ_TYPE:"auth/invalid-req-type"};/**
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
 */const R=new u.Logger("@firebase/auth");function I(i,...e){R.logLevel<=u.LogLevel.WARN&&R.warn(`Auth (${n.SDK_VERSION}): ${i}`,...e)}function A(i,...e){R.logLevel<=u.LogLevel.ERROR&&R.error(`Auth (${n.SDK_VERSION}): ${i}`,...e)}/**
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
 */function L(i,...e){throw W(i,...e)}function B(i,...e){return W(i,...e)}function V(i,e,t){const s=Object.assign(Object.assign({},h()),{[e]:t});return new r.ErrorFactory("auth","Firebase",s).create(e,{appName:i.name})}function q(i){return V(i,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function re(i,e,t){const s=t;if(!(e instanceof s))throw s.name!==e.constructor.name&&L(i,"argument-error"),V(i,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function W(i,...e){if(typeof i!="string"){const t=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=i.name),i._errorFactory.create(t,...s)}return P.create(i,...e)}function F(i,e,...t){if(!i)throw W(e,...t)}function de(i){const e="INTERNAL ASSERTION FAILED: "+i;throw A(e),new Error(e)}function fe(i,e){i||de(e)}/**
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
 */function we(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.href)||""}function Q(){return he()==="http:"||he()==="https:"}function he(){var i;return typeof self<"u"&&((i=self.location)===null||i===void 0?void 0:i.protocol)||null}/**
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
 */function ie(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Q()||r.isBrowserExtension()||"connection"in navigator)?navigator.onLine:!0}function _e(){if(typeof navigator>"u")return null;const i=navigator;return i.languages&&i.languages[0]||i.language||null}/**
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
 */class K{constructor(e,t){this.shortDelay=e,this.longDelay=t,fe(t>e,"Short delay should be less than long delay!"),this.isMobile=r.isMobileCordova()||r.isReactNative()}get(){return ie()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function H(i,e){fe(i.emulator,"Emulator should always be set here");const{url:t}=i.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class oe{static initialize(e,t,s){this.fetchImpl=e,t&&(this.headersImpl=t),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;de("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;de("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;de("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const ue={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const ae=new K(3e4,6e4);function j(i,e){return i.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:i.tenantId}):e}async function te(i,e,t,s,m={}){return Ee(i,m,async()=>{let b={},C={};s&&(e==="GET"?C=s:b={body:JSON.stringify(s)});const z=r.querystring(Object.assign({key:i.config.apiKey},C)).slice(1),J=await i._getAdditionalHeaders();J["Content-Type"]="application/json",i.languageCode&&(J["X-Firebase-Locale"]=i.languageCode);const ge=Object.assign({method:e,headers:J},b);return r.isCloudflareWorker()||(ge.referrerPolicy="no-referrer"),oe.fetch()(ye(i,i.config.apiHost,t,z),ge)})}async function Ee(i,e,t){i._canInitEmulator=!1;const s=Object.assign(Object.assign({},ue),e);try{const m=new Te(i),b=await Promise.race([t(),m.promise]);m.clearNetworkTimeout();const C=await b.json();if("needConfirmation"in C)throw Ue(i,"account-exists-with-different-credential",C);if(b.ok&&!("errorMessage"in C))return C;{const z=b.ok?C.errorMessage:C.error.message,[J,ge]=z.split(" : ");if(J==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ue(i,"credential-already-in-use",C);if(J==="EMAIL_EXISTS")throw Ue(i,"email-already-in-use",C);if(J==="USER_DISABLED")throw Ue(i,"user-disabled",C);const ke=s[J]||J.toLowerCase().replace(/[_\s]+/g,"-");if(ge)throw V(i,ke,ge);L(i,ke)}}catch(m){if(m instanceof r.FirebaseError)throw m;L(i,"network-request-failed",{message:String(m)})}}async function le(i,e,t,s,m={}){const b=await te(i,e,t,s,m);return"mfaPendingCredential"in b&&L(i,"multi-factor-auth-required",{_serverResponse:b}),b}function ye(i,e,t,s){const m=`${e}${t}?${s}`;return i.config.emulator?H(i.config,m):`${i.config.apiScheme}://${m}`}function Le(i){switch(i){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Te{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,s)=>{this.timer=setTimeout(()=>s(B(this.auth,"network-request-failed")),ae.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ue(i,e,t){const s={appName:i.name};t.email&&(s.email=t.email),t.phoneNumber&&(s.phoneNumber=t.phoneNumber);const m=B(i,e,s);return m.customData._tokenResponse=t,m}/**
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
 */function Fe(i){return i!==void 0&&i.getResponse!==void 0}function Xe(i){return i!==void 0&&i.enterprise!==void 0}class ${constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return Le(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}/**
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
 */async function pe(i){return(await te(i,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function ve(i,e){return te(i,"GET","/v2/recaptchaConfig",j(i,e))}/**
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
 */async function xe(i,e){return te(i,"POST","/v1/accounts:delete",e)}async function Oe(i,e){return te(i,"POST","/v1/accounts:update",e)}async function qe(i,e){return te(i,"POST","/v1/accounts:lookup",e)}/**
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
 */function Be(i){if(i)try{const e=new Date(Number(i));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}/**
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
 */function vt(i,e=!1){return r.getModularInstance(i).getIdToken(e)}async function ot(i,e=!1){const t=r.getModularInstance(i),s=await t.getIdToken(e),m=$e(s);F(m&&m.exp&&m.auth_time&&m.iat,t.auth,"internal-error");const b=typeof m.firebase=="object"?m.firebase:void 0,C=b==null?void 0:b.sign_in_provider;return{claims:m,token:s,authTime:Be(Je(m.auth_time)),issuedAtTime:Be(Je(m.iat)),expirationTime:Be(Je(m.exp)),signInProvider:C||null,signInSecondFactor:(b==null?void 0:b.sign_in_second_factor)||null}}function Je(i){return Number(i)*1e3}function $e(i){const[e,t,s]=i.split(".");if(e===void 0||t===void 0||s===void 0)return A("JWT malformed, contained fewer than 3 sections"),null;try{const m=r.base64Decode(t);return m?JSON.parse(m):(A("Failed to decode base64 JWT payload"),null)}catch(m){return A("Caught error parsing JWT payload as JSON",m==null?void 0:m.toString()),null}}function et(i){const e=$e(i);return F(e,"internal-error"),F(typeof e.exp<"u","internal-error"),F(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ge(i,e,t=!1){if(t)return e;try{return await e}catch(s){throw s instanceof r.FirebaseError&&ze(s)&&i.auth.currentUser===i&&await i.auth.signOut(),s}}function ze({code:i}){return i==="auth/user-disabled"||i==="auth/user-token-expired"}/**
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
 */class yt{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const m=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,m)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class v{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Be(this.lastLoginAt),this.creationTime=Be(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function o(i){var e;const t=i.auth,s=await i.getIdToken(),m=await Ge(i,qe(t,{idToken:s}));F(m==null?void 0:m.users.length,t,"internal-error");const b=m.users[0];i._notifyReloadListener(b);const C=!((e=b.providerUserInfo)===null||e===void 0)&&e.length?M(b.providerUserInfo):[],z=O(i.providerData,C),J=i.isAnonymous,ge=!(i.email&&b.passwordHash)&&!(z!=null&&z.length),ke=J?ge:!1,je={uid:b.localId,displayName:b.displayName||null,photoURL:b.photoUrl||null,email:b.email||null,emailVerified:b.emailVerified||!1,phoneNumber:b.phoneNumber||null,tenantId:b.tenantId||null,providerData:z,metadata:new v(b.createdAt,b.lastLoginAt),isAnonymous:ke};Object.assign(i,je)}async function c(i){const e=r.getModularInstance(i);await o(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O(i,e){return[...i.filter(s=>!e.some(m=>m.providerId===s.providerId)),...e]}function M(i){return i.map(e=>{var{providerId:t}=e,s=l.__rest(e,["providerId"]);return{providerId:t,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function x(i,e){const t=await Ee(i,{},async()=>{const s=r.querystring({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:m,apiKey:b}=i.config,C=ye(i,m,"/v1/token",`key=${b}`),z=await i._getAdditionalHeaders();return z["Content-Type"]="application/x-www-form-urlencoded",oe.fetch()(C,{method:"POST",headers:z,body:s})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function G(i,e){return te(i,"POST","/v2/accounts:revokeToken",j(i,e))}/**
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
 */class Ie{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){F(e.idToken,"internal-error"),F(typeof e.idToken<"u","internal-error"),F(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):et(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){F(e.length!==0,"internal-error");const t=et(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(F(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:s,refreshToken:m,expiresIn:b}=await x(e,t);this.updateTokensAndExpiration(s,m,Number(b))}updateTokensAndExpiration(e,t,s){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,t){const{refreshToken:s,accessToken:m,expirationTime:b}=t,C=new Ie;return s&&(F(typeof s=="string","internal-error",{appName:e}),C.refreshToken=s),m&&(F(typeof m=="string","internal-error",{appName:e}),C.accessToken=m),b&&(F(typeof b=="number","internal-error",{appName:e}),C.expirationTime=b),C}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ie,this.toJSON())}_performRefresh(){return de("not implemented")}}/**
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
 */function Ne(i,e){F(typeof i=="string"||typeof i>"u","internal-error",{appName:e})}class Ae{constructor(e){var{uid:t,auth:s,stsTokenManager:m}=e,b=l.__rest(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yt(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=s,this.stsTokenManager=m,this.accessToken=m.accessToken,this.displayName=b.displayName||null,this.email=b.email||null,this.emailVerified=b.emailVerified||!1,this.phoneNumber=b.phoneNumber||null,this.photoURL=b.photoURL||null,this.isAnonymous=b.isAnonymous||!1,this.tenantId=b.tenantId||null,this.providerData=b.providerData?[...b.providerData]:[],this.metadata=new v(b.createdAt||void 0,b.lastLoginAt||void 0)}async getIdToken(e){const t=await Ge(this,this.stsTokenManager.getToken(this.auth,e));return F(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return ot(this,e)}reload(){return c(this)}_assign(e){this!==e&&(F(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ae(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){F(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),t&&await o(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(n._isFirebaseServerApp(this.auth.app))return Promise.reject(q(this.auth));const e=await this.getIdToken();return await Ge(this,xe(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var s,m,b,C,z,J,ge,ke;const je=(s=t.displayName)!==null&&s!==void 0?s:void 0,pt=(m=t.email)!==null&&m!==void 0?m:void 0,Ar=(b=t.phoneNumber)!==null&&b!==void 0?b:void 0,Rr=(C=t.photoURL)!==null&&C!==void 0?C:void 0,so=(z=t.tenantId)!==null&&z!==void 0?z:void 0,hn=(J=t._redirectEventId)!==null&&J!==void 0?J:void 0,oo=(ge=t.createdAt)!==null&&ge!==void 0?ge:void 0,ao=(ke=t.lastLoginAt)!==null&&ke!==void 0?ke:void 0,{uid:pn,emailVerified:co,isAnonymous:uo,providerData:mn,stsTokenManager:lo}=t;F(pn&&lo,e,"internal-error");const tf=Ie.fromJSON(this.name,lo);F(typeof pn=="string",e,"internal-error"),Ne(je,e.name),Ne(pt,e.name),F(typeof co=="boolean",e,"internal-error"),F(typeof uo=="boolean",e,"internal-error"),Ne(Ar,e.name),Ne(Rr,e.name),Ne(so,e.name),Ne(hn,e.name),Ne(oo,e.name),Ne(ao,e.name);const gn=new Ae({uid:pn,auth:e,email:pt,emailVerified:co,displayName:je,isAnonymous:uo,photoURL:Rr,phoneNumber:Ar,tenantId:so,stsTokenManager:tf,createdAt:oo,lastLoginAt:ao});return mn&&Array.isArray(mn)&&(gn.providerData=mn.map(rf=>Object.assign({},rf))),hn&&(gn._redirectEventId=hn),gn}static async _fromIdTokenResponse(e,t,s=!1){const m=new Ie;m.updateFromServerResponse(t);const b=new Ae({uid:t.localId,auth:e,stsTokenManager:m,isAnonymous:s});return await o(b),b}static async _fromGetAccountInfoResponse(e,t,s){const m=t.users[0];F(m.localId!==void 0,"internal-error");const b=m.providerUserInfo!==void 0?M(m.providerUserInfo):[],C=!(m.email&&m.passwordHash)&&!(b!=null&&b.length),z=new Ie;z.updateFromIdToken(s);const J=new Ae({uid:m.localId,auth:e,stsTokenManager:z,isAnonymous:C}),ge={uid:m.localId,displayName:m.displayName||null,photoURL:m.photoUrl||null,email:m.email||null,emailVerified:m.emailVerified||!1,phoneNumber:m.phoneNumber||null,tenantId:m.tenantId||null,providerData:b,metadata:new v(m.createdAt,m.lastLoginAt),isAnonymous:!(m.email&&m.passwordHash)&&!(b!=null&&b.length)};return Object.assign(J,ge),J}}/**
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
 */const Ce=new Map;function be(i){fe(i instanceof Function,"Expected a class definition");let e=Ce.get(i);return e?(fe(e instanceof i,"Instance stored in cache mismatched with class"),e):(e=new i,Ce.set(i,e),e)}/**
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
 */class Ot{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}Ot.type="NONE";const St=Ot;/**
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
 */function tt(i,e,t){return`firebase:${i}:${e}:${t}`}class rt{constructor(e,t,s){this.persistence=e,this.auth=t,this.userKey=s;const{config:m,name:b}=this.auth;this.fullUserKey=tt(this.userKey,m.apiKey,b),this.fullPersistenceKey=tt("persistence",m.apiKey,b),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ae._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,s="authUser"){if(!t.length)return new rt(be(St),e,s);const m=(await Promise.all(t.map(async ge=>{if(await ge._isAvailable())return ge}))).filter(ge=>ge);let b=m[0]||be(St);const C=tt(s,e.config.apiKey,e.name);let z=null;for(const ge of t)try{const ke=await ge._get(C);if(ke){const je=Ae._fromJSON(e,ke);ge!==b&&(z=je),b=ge;break}}catch{}const J=m.filter(ge=>ge._shouldAllowMigration);return!b._shouldAllowMigration||!J.length?new rt(b,e,s):(b=J[0],z&&await b._set(C,z.toJSON()),await Promise.all(t.map(async ge=>{if(ge!==b)try{await ge._remove(C)}catch{}})),new rt(b,e,s))}}/**
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
 */function bt(i){const e=i.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Y(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(_t(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(N(e))return"Blackberry";if(T(e))return"Webos";if(Nt(e))return"Safari";if((e.includes("chrome/")||Z(e))&&!e.includes("edge/"))return"Chrome";if(se(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=i.match(t);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function _t(i=r.getUA()){return/firefox\//i.test(i)}function Nt(i=r.getUA()){const e=i.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Z(i=r.getUA()){return/crios\//i.test(i)}function Y(i=r.getUA()){return/iemobile/i.test(i)}function se(i=r.getUA()){return/android/i.test(i)}function N(i=r.getUA()){return/blackberry/i.test(i)}function T(i=r.getUA()){return/webos/i.test(i)}function k(i=r.getUA()){return/iphone|ipad|ipod/i.test(i)||/macintosh/i.test(i)&&/mobile/i.test(i)}function U(i=r.getUA()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(i)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(i)}function D(i=r.getUA()){var e;return k(i)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ee(){return r.isIE()&&document.documentMode===10}function me(i=r.getUA()){return k(i)||se(i)||T(i)||N(i)||/windows phone/i.test(i)||Y(i)}/**
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
 */function Se(i,e=[]){let t;switch(i){case"Browser":t=bt(r.getUA());break;case"Worker":t=`${bt(r.getUA())}-${i}`;break;default:t=i}const s=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${n.SDK_VERSION}/${s}`}/**
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
 */class Re{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const s=b=>new Promise((C,z)=>{try{const J=e(b);C(J)}catch(J){z(J)}});s.onAbort=t,this.queue.push(s);const m=this.queue.length-1;return()=>{this.queue[m]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const s of this.queue)await s(e),s.onAbort&&t.push(s.onAbort)}catch(s){t.reverse();for(const m of t)try{m()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function Me(i,e={}){return te(i,"GET","/v2/passwordPolicy",j(i,e))}/**
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
 */const We=6;class Pe{constructor(e){var t,s,m,b;const C=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=C.minPasswordLength)!==null&&t!==void 0?t:We,C.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=C.maxPasswordLength),C.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=C.containsLowercaseCharacter),C.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=C.containsUppercaseCharacter),C.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=C.containsNumericCharacter),C.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=C.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(m=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&m!==void 0?m:"",this.forceUpgradeOnSignin=(b=e.forceUpgradeOnSignin)!==null&&b!==void 0?b:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,s,m,b,C,z;const J={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,J),this.validatePasswordCharacterOptions(e,J),J.isValid&&(J.isValid=(t=J.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),J.isValid&&(J.isValid=(s=J.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),J.isValid&&(J.isValid=(m=J.containsLowercaseLetter)!==null&&m!==void 0?m:!0),J.isValid&&(J.isValid=(b=J.containsUppercaseLetter)!==null&&b!==void 0?b:!0),J.isValid&&(J.isValid=(C=J.containsNumericCharacter)!==null&&C!==void 0?C:!0),J.isValid&&(J.isValid=(z=J.containsNonAlphanumericCharacter)!==null&&z!==void 0?z:!0),J}validatePasswordLengthOptions(e,t){const s=this.customStrengthOptions.minPasswordLength,m=this.customStrengthOptions.maxPasswordLength;s&&(t.meetsMinPasswordLength=e.length>=s),m&&(t.meetsMaxPasswordLength=e.length<=m)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let s;for(let m=0;m<e.length;m++)s=e.charAt(m),this.updatePasswordCharacterOptionsStatuses(t,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,t,s,m,b){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=m)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=b))}}/**
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
 */class Ke{constructor(e,t,s,m){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=s,this.config=m,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new lr(this),this.idTokenSubscription=new lr(this),this.beforeStateQueue=new Re(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=P,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=m.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=be(t)),this._initializationPromise=this.queue(async()=>{var s,m;if(!this._deleted&&(this.persistenceManager=await rt.create(this,e),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((m=this.currentUser)===null||m===void 0?void 0:m.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await qe(this,{idToken:e}),s=await Ae._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(s)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(n._isFirebaseServerApp(this.app)){const C=this.app.settings.authIdToken;return C?new Promise(z=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(C).then(z,z))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let m=s,b=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const C=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,z=m==null?void 0:m._redirectEventId,J=await this.tryRedirectSignIn(e);(!C||C===z)&&(J!=null&&J.user)&&(m=J.user,b=!0)}if(!m)return this.directlySetCurrentUser(null);if(!m._redirectEventId){if(b)try{await this.beforeStateQueue.runMiddleware(m)}catch(C){m=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(C))}return m?this.reloadAndSetCurrentUserOrClear(m):this.directlySetCurrentUser(null)}return F(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===m._redirectEventId?this.directlySetCurrentUser(m):this.reloadAndSetCurrentUserOrClear(m)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await o(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=_e()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(n._isFirebaseServerApp(this.app))return Promise.reject(q(this));const t=e?r.getModularInstance(e):null;return t&&F(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&F(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return n._isFirebaseServerApp(this.app)?Promise.reject(q(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return n._isFirebaseServerApp(this.app)?Promise.reject(q(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(be(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Me(this),t=new Pe(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.ErrorFactory("auth","Firebase",e())}onAuthStateChanged(e,t,s){return this.registerStateListener(this.authStateSubscription,e,t,s)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,s){return this.registerStateListener(this.idTokenSubscription,e,t,s)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(s.tenantId=this.tenantId),await G(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const s=await this.getOrInitRedirectPersistenceManager(t);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&be(e)||this._popupRedirectResolver;F(t,this,"argument-error"),this.redirectPersistenceManager=await rt.create(this,[be(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,s;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,s,m){if(this._deleted)return()=>{};const b=typeof t=="function"?t:t.next.bind(t);let C=!1;const z=this._isInitialized?Promise.resolve():this._initializationPromise;if(F(z,this,"internal-error"),z.then(()=>{C||b(this.currentUser)}),typeof t=="function"){const J=e.addObserver(t,s,m);return()=>{C=!0,J()}}else{const J=e.addObserver(t);return()=>{C=!0,J()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return F(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(t["X-Firebase-Client"]=s);const m=await this._getAppCheckToken();return m&&(t["X-Firebase-AppCheck"]=m),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&I(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function De(i){return r.getModularInstance(i)}class lr{constructor(e){this.auth=e,this.observer=null,this.addObserver=r.createSubscribe(t=>this.observer=t)}get next(){return F(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let $t={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function iu(i){$t=i}function Gr(i){return $t.loadJS(i)}function su(){return $t.recaptchaV2Script}function ou(){return $t.recaptchaEnterpriseScript}function au(){return $t.gapiScript}function ls(i){return`__${i}${Math.floor(Math.random()*1e6)}`}const cu="recaptcha-enterprise",uu="NO_RECAPTCHA";class ds{constructor(e){this.type=cu,this.auth=De(e)}async verify(e="verify",t=!1){async function s(b){if(!t){if(b.tenantId==null&&b._agentRecaptchaConfig!=null)return b._agentRecaptchaConfig.siteKey;if(b.tenantId!=null&&b._tenantRecaptchaConfigs[b.tenantId]!==void 0)return b._tenantRecaptchaConfigs[b.tenantId].siteKey}return new Promise(async(C,z)=>{ve(b,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(J=>{if(J.recaptchaKey===void 0)z(new Error("recaptcha Enterprise site key undefined"));else{const ge=new $(J);return b.tenantId==null?b._agentRecaptchaConfig=ge:b._tenantRecaptchaConfigs[b.tenantId]=ge,C(ge.siteKey)}}).catch(J=>{z(J)})})}function m(b,C,z){const J=window.grecaptcha;Xe(J)?J.enterprise.ready(()=>{J.enterprise.execute(b,{action:e}).then(ge=>{C(ge)}).catch(()=>{C(uu)})}):z(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((b,C)=>{s(this.auth).then(z=>{if(!t&&Xe(window.grecaptcha))m(z,b,C);else{if(typeof window>"u"){C(new Error("RecaptchaVerifier is only supported in browser"));return}let J=ou();J.length!==0&&(J+=z),Gr(J).then(()=>{m(z,b,C)}).catch(ge=>{C(ge)})}}).catch(z=>{C(z)})})}}async function fs(i,e,t,s=!1){const m=new ds(i);let b;try{b=await m.verify(t)}catch{b=await m.verify(t,!0)}const C=Object.assign({},e);return s?Object.assign(C,{captchaResp:b}):Object.assign(C,{captchaResponse:b}),Object.assign(C,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(C,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),C}async function jt(i,e,t,s){var m;if(!((m=i._getRecaptchaConfig())===null||m===void 0)&&m.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const b=await fs(i,e,t,t==="getOobCode");return s(i,b)}else return s(i,e).catch(async b=>{if(b.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const C=await fs(i,e,t,t==="getOobCode");return s(i,C)}else return Promise.reject(b)})}async function lu(i){const e=De(i),t=await ve(e,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),s=new $(t);e.tenantId==null?e._agentRecaptchaConfig=s:e._tenantRecaptchaConfigs[e.tenantId]=s,s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")&&new ds(e).verify()}/**
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
 */function hs(i,e){const t=n._getProvider(i,"auth");if(t.isInitialized()){const m=t.getImmediate(),b=t.getOptions();if(r.deepEqual(b,e??{}))return m;L(m,"already-initialized")}return t.initialize({options:e})}function du(i,e){const t=(e==null?void 0:e.persistence)||[],s=(Array.isArray(t)?t:[t]).map(be);e!=null&&e.errorMap&&i._updateErrorMap(e.errorMap),i._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function ps(i,e,t){const s=De(i);F(s._canInitEmulator,s,"emulator-config-failed"),F(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const m=!!(t!=null&&t.disableWarnings),b=ms(e),{host:C,port:z}=fu(e),J=z===null?"":`:${z}`;s.config.emulator={url:`${b}//${C}${J}/`},s.settings.appVerificationDisabledForTesting=!0,s.emulatorConfig=Object.freeze({host:C,port:z,protocol:b.replace(":",""),options:Object.freeze({disableWarnings:m})}),m||hu()}function ms(i){const e=i.indexOf(":");return e<0?"":i.substr(0,e+1)}function fu(i){const e=ms(i),t=/(\/\/)?([^?#/]+)/.exec(i.substr(e.length));if(!t)return{host:"",port:null};const s=t[2].split("@").pop()||"",m=/^(\[[^\]]+\])(:|$)/.exec(s);if(m){const b=m[1];return{host:b,port:gs(s.substr(b.length+1))}}else{const[b,C]=s.split(":");return{host:b,port:gs(C)}}}function gs(i){if(!i)return null;const e=Number(i);return isNaN(e)?null:e}function hu(){function i(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",i):i())}/**
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
 */class Lt{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return de("not implemented")}_getIdTokenResponse(e){return de("not implemented")}_linkToIdToken(e,t){return de("not implemented")}_getReauthenticationResolver(e){return de("not implemented")}}/**
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
 */async function vs(i,e){return te(i,"POST","/v1/accounts:resetPassword",j(i,e))}async function pu(i,e){return te(i,"POST","/v1/accounts:update",e)}async function mu(i,e){return te(i,"POST","/v1/accounts:signUp",e)}async function gu(i,e){return te(i,"POST","/v1/accounts:update",j(i,e))}/**
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
 */async function vu(i,e){return le(i,"POST","/v1/accounts:signInWithPassword",j(i,e))}async function dr(i,e){return te(i,"POST","/v1/accounts:sendOobCode",j(i,e))}async function yu(i,e){return dr(i,e)}async function _u(i,e){return dr(i,e)}async function Iu(i,e){return dr(i,e)}async function Eu(i,e){return dr(i,e)}/**
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
 */async function wu(i,e){return le(i,"POST","/v1/accounts:signInWithEmailLink",j(i,e))}async function Su(i,e){return le(i,"POST","/v1/accounts:signInWithEmailLink",j(i,e))}/**
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
 */class kt extends Lt{constructor(e,t,s,m=null){super("password",s),this._email=e,this._password=t,this._tenantId=m}static _fromEmailAndPassword(e,t){return new kt(e,t,"password")}static _fromEmailAndCode(e,t,s=null){return new kt(e,t,"emailLink",s)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jt(e,t,"signInWithPassword",vu);case"emailLink":return wu(e,{email:this._email,oobCode:this._password});default:L(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const s={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return jt(e,s,"signUpPassword",mu);case"emailLink":return Su(e,{idToken:t,email:this._email,oobCode:this._password});default:L(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function at(i,e){return le(i,"POST","/v1/accounts:signInWithIdp",j(i,e))}/**
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
 */const bu="http://localhost";class nt extends Lt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new nt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):L("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:m}=t,b=l.__rest(t,["providerId","signInMethod"]);if(!s||!m)return null;const C=new nt(s,m);return C.idToken=b.idToken||void 0,C.accessToken=b.accessToken||void 0,C.secret=b.secret,C.nonce=b.nonce,C.pendingToken=b.pendingToken||null,C}_getIdTokenResponse(e){const t=this.buildRequest();return at(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,at(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,at(e,t)}buildRequest(){const e={requestUri:bu,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=r.querystring(t)}return e}}/**
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
 */async function Tu(i,e){return te(i,"POST","/v1/accounts:sendVerificationCode",j(i,e))}async function Au(i,e){return le(i,"POST","/v1/accounts:signInWithPhoneNumber",j(i,e))}async function Ru(i,e){const t=await le(i,"POST","/v1/accounts:signInWithPhoneNumber",j(i,e));if(t.temporaryProof)throw Ue(i,"account-exists-with-different-credential",t);return t}const Pu={USER_NOT_FOUND:"user-not-found"};async function Ou(i,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return le(i,"POST","/v1/accounts:signInWithPhoneNumber",j(i,t),Pu)}/**
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
 */class It extends Lt{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new It({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new It({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Au(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ru(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ou(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:s,verificationCode:m}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:s,code:m}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:s,phoneNumber:m,temporaryProof:b}=e;return!s&&!t&&!m&&!b?null:new It({verificationId:t,verificationCode:s,phoneNumber:m,temporaryProof:b})}}/**
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
 */function Nu(i){switch(i){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Lu(i){const e=r.querystringDecode(r.extractQuerystring(i)).link,t=e?r.querystringDecode(r.extractQuerystring(e)).deep_link_id:null,s=r.querystringDecode(r.extractQuerystring(i)).deep_link_id;return(s?r.querystringDecode(r.extractQuerystring(s)).link:null)||s||t||e||i}class Ct{constructor(e){var t,s,m,b,C,z;const J=r.querystringDecode(r.extractQuerystring(e)),ge=(t=J.apiKey)!==null&&t!==void 0?t:null,ke=(s=J.oobCode)!==null&&s!==void 0?s:null,je=Nu((m=J.mode)!==null&&m!==void 0?m:null);F(ge&&ke&&je,"argument-error"),this.apiKey=ge,this.operation=je,this.code=ke,this.continueUrl=(b=J.continueUrl)!==null&&b!==void 0?b:null,this.languageCode=(C=J.languageCode)!==null&&C!==void 0?C:null,this.tenantId=(z=J.tenantId)!==null&&z!==void 0?z:null}static parseLink(e){const t=Lu(e);try{return new Ct(t)}catch{return null}}}function ku(i){return Ct.parseLink(i)}/**
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
 */class Et{constructor(){this.providerId=Et.PROVIDER_ID}static credential(e,t){return kt._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const s=Ct.parseLink(t);return F(s,"argument-error"),kt._fromEmailAndCode(e,s.code,s.tenantId)}}Et.PROVIDER_ID="password",Et.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Et.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class ct{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Dt extends ct{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class qt extends Dt{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return F("providerId"in t&&"signInMethod"in t,"argument-error"),nt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return F(e.idToken||e.accessToken,"argument-error"),nt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return qt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return qt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s,oauthTokenSecret:m,pendingToken:b,nonce:C,providerId:z}=e;if(!s&&!m&&!t&&!b||!z)return null;try{return new qt(z)._credential({idToken:t,accessToken:s,nonce:C,pendingToken:b})}catch{return null}}}/**
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
 */class ut extends Dt{constructor(){super("facebook.com")}static credential(e){return nt._fromParams({providerId:ut.PROVIDER_ID,signInMethod:ut.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ut.credentialFromTaggedObject(e)}static credentialFromError(e){return ut.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ut.credential(e.oauthAccessToken)}catch{return null}}}ut.FACEBOOK_SIGN_IN_METHOD="facebook.com",ut.PROVIDER_ID="facebook.com";/**
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
 */class lt extends Dt{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return nt._fromParams({providerId:lt.PROVIDER_ID,signInMethod:lt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return lt.credentialFromTaggedObject(e)}static credentialFromError(e){return lt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:s}=e;if(!t&&!s)return null;try{return lt.credential(t,s)}catch{return null}}}lt.GOOGLE_SIGN_IN_METHOD="google.com",lt.PROVIDER_ID="google.com";/**
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
 */class dt extends Dt{constructor(){super("github.com")}static credential(e){return nt._fromParams({providerId:dt.PROVIDER_ID,signInMethod:dt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dt.credentialFromTaggedObject(e)}static credentialFromError(e){return dt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dt.credential(e.oauthAccessToken)}catch{return null}}}dt.GITHUB_SIGN_IN_METHOD="github.com",dt.PROVIDER_ID="github.com";/**
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
 */const Cu="http://localhost";class Mt extends Lt{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return at(e,t)}_linkToIdToken(e,t){const s=this.buildRequest();return s.idToken=t,at(e,s)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,at(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:m,pendingToken:b}=t;return!s||!m||!b||s!==m?null:new Mt(s,b)}static _create(e,t){return new Mt(e,t)}buildRequest(){return{requestUri:Cu,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const Du="saml.";class fr extends ct{constructor(e){F(e.startsWith(Du),"argument-error"),super(e)}static credentialFromResult(e){return fr.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return fr.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Mt.fromJSON(e);return F(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:s}=e;if(!t||!s)return null;try{return Mt._create(s,t)}catch{return null}}}/**
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
 */class ft extends Dt{constructor(){super("twitter.com")}static credential(e,t){return nt._fromParams({providerId:ft.PROVIDER_ID,signInMethod:ft.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return ft.credentialFromTaggedObject(e)}static credentialFromError(e){return ft.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:s}=e;if(!t||!s)return null;try{return ft.credential(t,s)}catch{return null}}}ft.TWITTER_SIGN_IN_METHOD="twitter.com",ft.PROVIDER_ID="twitter.com";/**
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
 */async function ys(i,e){return le(i,"POST","/v1/accounts:signUp",j(i,e))}/**
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
 */class Ye{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,s,m=!1){const b=await Ae._fromIdTokenResponse(e,s,m),C=_s(s);return new Ye({user:b,providerId:C,_tokenResponse:s,operationType:t})}static async _forOperation(e,t,s){await e._updateTokensIfNecessary(s,!0);const m=_s(s);return new Ye({user:e,providerId:m,_tokenResponse:s,operationType:t})}}function _s(i){return i.providerId?i.providerId:"phoneNumber"in i?"phone":null}/**
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
 */async function Mu(i){var e;if(n._isFirebaseServerApp(i.app))return Promise.reject(q(i));const t=De(i);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Ye({user:t.currentUser,providerId:null,operationType:"signIn"});const s=await ys(t,{returnSecureToken:!0}),m=await Ye._fromIdTokenResponse(t,"signIn",s,!0);return await t._updateCurrentUser(m.user),m}/**
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
 */class hr extends r.FirebaseError{constructor(e,t,s,m){var b;super(t.code,t.message),this.operationType=s,this.user=m,Object.setPrototypeOf(this,hr.prototype),this.customData={appName:e.name,tenantId:(b=e.tenantId)!==null&&b!==void 0?b:void 0,_serverResponse:t.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,t,s,m){return new hr(e,t,s,m)}}function Is(i,e,t,s){return(e==="reauthenticate"?t._getReauthenticationResolver(i):t._getIdTokenResponse(i)).catch(b=>{throw b.code==="auth/multi-factor-auth-required"?hr._fromErrorAndOperation(i,b,e,s):b})}/**
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
 */function Es(i){return new Set(i.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function Uu(i,e){const t=r.getModularInstance(i);await pr(!0,t,e);const{providerUserInfo:s}=await Oe(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),m=Es(s||[]);return t.providerData=t.providerData.filter(b=>m.has(b.providerId)),m.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function zr(i,e,t=!1){const s=await Ge(i,e._linkToIdToken(i.auth,await i.getIdToken()),t);return Ye._forOperation(i,"link",s)}async function pr(i,e,t){await o(e);const s=Es(e.providerData),m=i===!1?"provider-already-linked":"no-such-provider";F(s.has(t)===i,e.auth,m)}/**
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
 */async function ws(i,e,t=!1){const{auth:s}=i;if(n._isFirebaseServerApp(s.app))return Promise.reject(q(s));const m="reauthenticate";try{const b=await Ge(i,Is(s,m,e,i),t);F(b.idToken,s,"internal-error");const C=$e(b.idToken);F(C,s,"internal-error");const{sub:z}=C;return F(i.uid===z,s,"user-mismatch"),Ye._forOperation(i,m,b)}catch(b){throw(b==null?void 0:b.code)==="auth/user-not-found"&&L(s,"user-mismatch"),b}}/**
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
 */async function Ss(i,e,t=!1){if(n._isFirebaseServerApp(i.app))return Promise.reject(q(i));const s="signIn",m=await Is(i,s,e),b=await Ye._fromIdTokenResponse(i,s,m);return t||await i._updateCurrentUser(b.user),b}async function mr(i,e){return Ss(De(i),e)}async function bs(i,e){const t=r.getModularInstance(i);return await pr(!1,t,e.providerId),zr(t,e)}async function Ts(i,e){return ws(r.getModularInstance(i),e)}/**
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
 */async function Fu(i,e){return le(i,"POST","/v1/accounts:signInWithCustomToken",j(i,e))}/**
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
 */async function xu(i,e){if(n._isFirebaseServerApp(i.app))return Promise.reject(q(i));const t=De(i),s=await Fu(t,{token:e,returnSecureToken:!0}),m=await Ye._fromIdTokenResponse(t,"signIn",s);return await t._updateCurrentUser(m.user),m}/**
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
 */class Vt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Kr._fromServerResponse(e,t):"totpInfo"in t?Jr._fromServerResponse(e,t):L(e,"internal-error")}}class Kr extends Vt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Kr(t)}}class Jr extends Vt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new Jr(t)}}/**
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
 */function gr(i,e,t){var s;F(((s=t.url)===null||s===void 0?void 0:s.length)>0,i,"invalid-continue-uri"),F(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,i,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(F(t.iOS.bundleId.length>0,i,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(F(t.android.packageName.length>0,i,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function Yr(i){const e=De(i);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function Bu(i,e,t){const s=De(i),m={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};t&&gr(s,m,t),await jt(s,m,"getOobCode",_u)}async function $u(i,e,t){await vs(r.getModularInstance(i),{oobCode:e,newPassword:t}).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Yr(i),s})}async function ju(i,e){await gu(r.getModularInstance(i),{oobCode:e})}async function As(i,e){const t=r.getModularInstance(i),s=await vs(t,{oobCode:e}),m=s.requestType;switch(F(m,t,"internal-error"),m){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":F(s.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":F(s.mfaInfo,t,"internal-error");default:F(s.email,t,"internal-error")}let b=null;return s.mfaInfo&&(b=Vt._fromServerResponse(De(t),s.mfaInfo)),{data:{email:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.newEmail:s.email)||null,previousEmail:(s.requestType==="VERIFY_AND_CHANGE_EMAIL"?s.email:s.newEmail)||null,multiFactorInfo:b},operation:m}}async function qu(i,e){const{data:t}=await As(r.getModularInstance(i),e);return t.email}async function Vu(i,e,t){if(n._isFirebaseServerApp(i.app))return Promise.reject(q(i));const s=De(i),C=await jt(s,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",ys).catch(J=>{throw J.code==="auth/password-does-not-meet-requirements"&&Yr(i),J}),z=await Ye._fromIdTokenResponse(s,"signIn",C);return await s._updateCurrentUser(z.user),z}function Wu(i,e,t){return n._isFirebaseServerApp(i.app)?Promise.reject(q(i)):mr(r.getModularInstance(i),Et.credential(e,t)).catch(async s=>{throw s.code==="auth/password-does-not-meet-requirements"&&Yr(i),s})}/**
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
 */async function Hu(i,e,t){const s=De(i),m={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function b(C,z){F(z.handleCodeInApp,s,"argument-error"),z&&gr(s,C,z)}b(m,t),await jt(s,m,"getOobCode",Iu)}function Gu(i,e){const t=Ct.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function zu(i,e,t){if(n._isFirebaseServerApp(i.app))return Promise.reject(q(i));const s=r.getModularInstance(i),m=Et.credentialWithLink(e,t||we());return F(m._tenantId===(s.tenantId||null),s,"tenant-id-mismatch"),mr(s,m)}/**
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
 */async function Ku(i,e){return te(i,"POST","/v1/accounts:createAuthUri",j(i,e))}/**
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
 */async function Ju(i,e){const t=Q()?we():"http://localhost",s={identifier:e,continueUri:t},{signinMethods:m}=await Ku(r.getModularInstance(i),s);return m||[]}async function Yu(i,e){const t=r.getModularInstance(i),m={requestType:"VERIFY_EMAIL",idToken:await i.getIdToken()};e&&gr(t.auth,m,e);const{email:b}=await yu(t.auth,m);b!==i.email&&await i.reload()}async function Xu(i,e,t){const s=r.getModularInstance(i),b={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await i.getIdToken(),newEmail:e};t&&gr(s.auth,b,t);const{email:C}=await Eu(s.auth,b);C!==i.email&&await i.reload()}/**
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
 */async function Qu(i,e){return te(i,"POST","/v1/accounts:update",e)}/**
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
 */async function Zu(i,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const s=r.getModularInstance(i),b={idToken:await s.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},C=await Ge(s,Qu(s.auth,b));s.displayName=C.displayName||null,s.photoURL=C.photoUrl||null;const z=s.providerData.find(({providerId:J})=>J==="password");z&&(z.displayName=s.displayName,z.photoURL=s.photoURL),await s._updateTokensIfNecessary(C)}function el(i,e){const t=r.getModularInstance(i);return n._isFirebaseServerApp(t.auth.app)?Promise.reject(q(t.auth)):Rs(t,e,null)}function tl(i,e){return Rs(r.getModularInstance(i),null,e)}async function Rs(i,e,t){const{auth:s}=i,b={idToken:await i.getIdToken(),returnSecureToken:!0};e&&(b.email=e),t&&(b.password=t);const C=await Ge(i,pu(s,b));await i._updateTokensIfNecessary(C,!0)}/**
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
 */function rl(i){var e,t;if(!i)return null;const{providerId:s}=i,m=i.rawUserInfo?JSON.parse(i.rawUserInfo):{},b=i.isNewUser||i.kind==="identitytoolkit#SignupNewUserResponse";if(!s&&(i!=null&&i.idToken)){const C=(t=(e=$e(i.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(C){const z=C!=="anonymous"&&C!=="custom"?C:null;return new Ut(b,z)}}if(!s)return null;switch(s){case"facebook.com":return new nl(b,m);case"github.com":return new il(b,m);case"google.com":return new sl(b,m);case"twitter.com":return new ol(b,m,i.screenName||null);case"custom":case"anonymous":return new Ut(b,null);default:return new Ut(b,s,m)}}class Ut{constructor(e,t,s={}){this.isNewUser=e,this.providerId=t,this.profile=s}}class Ps extends Ut{constructor(e,t,s,m){super(e,t,s),this.username=m}}class nl extends Ut{constructor(e,t){super(e,"facebook.com",t)}}class il extends Ps{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class sl extends Ut{constructor(e,t){super(e,"google.com",t)}}class ol extends Ps{constructor(e,t,s){super(e,"twitter.com",t,s)}}function al(i){const{user:e,_tokenResponse:t}=i;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:rl(t)}/**
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
 */function cl(i,e){return r.getModularInstance(i).setPersistence(e)}function ul(i){return lu(i)}async function ll(i,e){return De(i).validatePassword(e)}function Os(i,e,t,s){return r.getModularInstance(i).onIdTokenChanged(e,t,s)}function Ns(i,e,t){return r.getModularInstance(i).beforeAuthStateChanged(e,t)}function dl(i,e,t,s){return r.getModularInstance(i).onAuthStateChanged(e,t,s)}function fl(i){r.getModularInstance(i).useDeviceLanguage()}function hl(i,e){return r.getModularInstance(i).updateCurrentUser(e)}function pl(i){return r.getModularInstance(i).signOut()}function ml(i,e){return De(i).revokeAccessToken(e)}async function gl(i){return r.getModularInstance(i).delete()}/**
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
 */class Tt{constructor(e,t,s){this.type=e,this.credential=t,this.user=s}static _fromIdtoken(e,t){return new Tt("enroll",e,t)}static _fromMfaPendingCredential(e){return new Tt("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,s;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return Tt._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((s=e.multiFactorSession)===null||s===void 0)&&s.idToken)return Tt._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class Xr{constructor(e,t,s){this.session=e,this.hints=t,this.signInResolver=s}static _fromError(e,t){const s=De(e),m=t.customData._serverResponse,b=(m.mfaInfo||[]).map(z=>Vt._fromServerResponse(s,z));F(m.mfaPendingCredential,s,"internal-error");const C=Tt._fromMfaPendingCredential(m.mfaPendingCredential);return new Xr(C,b,async z=>{const J=await z._process(s,C);delete m.mfaInfo,delete m.mfaPendingCredential;const ge=Object.assign(Object.assign({},m),{idToken:J.idToken,refreshToken:J.refreshToken});switch(t.operationType){case"signIn":const ke=await Ye._fromIdTokenResponse(s,t.operationType,ge);return await s._updateCurrentUser(ke.user),ke;case"reauthenticate":return F(t.user,s,"internal-error"),Ye._forOperation(t.user,t.operationType,ge);default:L(s,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function vl(i,e){var t;const s=r.getModularInstance(i),m=e;return F(e.customData.operationType,s,"argument-error"),F((t=m.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,s,"argument-error"),Xr._fromError(s,m)}/**
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
 */function yl(i,e){return te(i,"POST","/v2/accounts/mfaEnrollment:start",j(i,e))}function _l(i,e){return te(i,"POST","/v2/accounts/mfaEnrollment:finalize",j(i,e))}function Il(i,e){return te(i,"POST","/v2/accounts/mfaEnrollment:start",j(i,e))}function El(i,e){return te(i,"POST","/v2/accounts/mfaEnrollment:finalize",j(i,e))}function wl(i,e){return te(i,"POST","/v2/accounts/mfaEnrollment:withdraw",j(i,e))}class Qr{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(s=>Vt._fromServerResponse(e.auth,s)))})}static _fromUser(e){return new Qr(e)}async getSession(){return Tt._fromIdtoken(await this.user.getIdToken(),this.user)}async enroll(e,t){const s=e,m=await this.getSession(),b=await Ge(this.user,s._process(this.user.auth,m,t));return await this.user._updateTokensIfNecessary(b),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,s=await this.user.getIdToken();try{const m=await Ge(this.user,wl(this.user.auth,{idToken:s,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:b})=>b!==t),await this.user._updateTokensIfNecessary(m),await this.user.reload()}catch(m){throw m}}}const Zr=new WeakMap;function Sl(i){const e=r.getModularInstance(i);return Zr.has(e)||Zr.set(e,Qr._fromUser(e)),Zr.get(e)}const vr="__sak";/**
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
 */class Ls{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(vr,"1"),this.storage.removeItem(vr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const bl=1e3,Tl=10;class ks extends Ls{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=me(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const s=this.storage.getItem(t),m=this.localCache[t];s!==m&&e(t,m,s)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((C,z,J)=>{this.notifyListeners(C,J)});return}const s=e.key;t?this.detachListener():this.stopPolling();const m=()=>{const C=this.storage.getItem(s);!t&&this.localCache[s]===C||this.notifyListeners(s,C)},b=this.storage.getItem(s);ee()&&b!==e.newValue&&e.newValue!==e.oldValue?setTimeout(m,Tl):m()}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const m of Array.from(s))m(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:s}),!0)})},bl)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}ks.type="LOCAL";const Cs=ks;/**
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
 */class Ds extends Ls{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ds.type="SESSION";const en=Ds;/**
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
 */function Al(i){return Promise.all(i.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class yr{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(m=>m.isListeningto(e));if(t)return t;const s=new yr(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:s,eventType:m,data:b}=t.data,C=this.handlersMap[m];if(!(C!=null&&C.size))return;t.ports[0].postMessage({status:"ack",eventId:s,eventType:m});const z=Array.from(C).map(async ge=>ge(t.origin,b)),J=await Al(z);t.ports[0].postMessage({status:"done",eventId:s,eventType:m,response:J})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}yr.receivers=[];/**
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
 */function Wt(i="",e=10){let t="";for(let s=0;s<e;s++)t+=Math.floor(Math.random()*10);return i+t}/**
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
 */class Rl{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,s=50){const m=typeof MessageChannel<"u"?new MessageChannel:null;if(!m)throw new Error("connection_unavailable");let b,C;return new Promise((z,J)=>{const ge=Wt("",20);m.port1.start();const ke=setTimeout(()=>{J(new Error("unsupported_event"))},s);C={messageChannel:m,onMessage(je){const pt=je;if(pt.data.eventId===ge)switch(pt.data.status){case"ack":clearTimeout(ke),b=setTimeout(()=>{J(new Error("timeout"))},3e3);break;case"done":clearTimeout(b),z(pt.data.response);break;default:clearTimeout(ke),clearTimeout(b),J(new Error("invalid_response"));break}}},this.handlers.add(C),m.port1.addEventListener("message",C.onMessage),this.target.postMessage({eventType:e,eventId:ge,data:t},[m.port2])}).finally(()=>{C&&this.removeMessageHandler(C)})}}/**
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
 */function Ve(){return window}function Pl(i){Ve().location.href=i}/**
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
 */function tn(){return typeof Ve().WorkerGlobalScope<"u"&&typeof Ve().importScripts=="function"}async function Ol(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Nl(){var i;return((i=navigator==null?void 0:navigator.serviceWorker)===null||i===void 0?void 0:i.controller)||null}function Ll(){return tn()?self:null}/**
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
 */const Ms="firebaseLocalStorageDb",kl=1,_r="firebaseLocalStorage",Us="fbase_key";class Ht{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ir(i,e){return i.transaction([_r],e?"readwrite":"readonly").objectStore(_r)}function Cl(){const i=indexedDB.deleteDatabase(Ms);return new Ht(i).toPromise()}function rn(){const i=indexedDB.open(Ms,kl);return new Promise((e,t)=>{i.addEventListener("error",()=>{t(i.error)}),i.addEventListener("upgradeneeded",()=>{const s=i.result;try{s.createObjectStore(_r,{keyPath:Us})}catch(m){t(m)}}),i.addEventListener("success",async()=>{const s=i.result;s.objectStoreNames.contains(_r)?e(s):(s.close(),await Cl(),e(await rn()))})})}async function Fs(i,e,t){const s=Ir(i,!0).put({[Us]:e,value:t});return new Ht(s).toPromise()}async function Dl(i,e){const t=Ir(i,!1).get(e),s=await new Ht(t).toPromise();return s===void 0?null:s.value}function xs(i,e){const t=Ir(i,!0).delete(e);return new Ht(t).toPromise()}const Ml=800,Ul=3;class Bs{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await rn(),this.db)}async _withRetries(e){let t=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(t++>Ul)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=yr._getInstance(Ll()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Ol(),!this.activeServiceWorker)return;this.sender=new Rl(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((t=s[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Nl()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await rn();return await Fs(e,vr,"1"),await xs(e,vr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(s=>Fs(s,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(s=>Dl(s,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>xs(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(m=>{const b=Ir(m,!1).getAll();return new Ht(b).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],s=new Set;if(e.length!==0)for(const{fbase_key:m,value:b}of e)s.add(m),JSON.stringify(this.localCache[m])!==JSON.stringify(b)&&(this.notifyListeners(m,b),t.push(m));for(const m of Object.keys(this.localCache))this.localCache[m]&&!s.has(m)&&(this.notifyListeners(m,null),t.push(m));return t}notifyListeners(e,t){this.localCache[e]=t;const s=this.listeners[e];if(s)for(const m of Array.from(s))m(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Ml)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Bs.type="LOCAL";const $s=Bs;/**
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
 */function Fl(i,e){return te(i,"POST","/v2/accounts/mfaSignIn:start",j(i,e))}function xl(i,e){return te(i,"POST","/v2/accounts/mfaSignIn:finalize",j(i,e))}function Bl(i,e){return te(i,"POST","/v2/accounts/mfaSignIn:finalize",j(i,e))}/**
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
 */const $l=500,jl=6e4,Er=1e12;class ql{constructor(e){this.auth=e,this.counter=Er,this._widgets=new Map}render(e,t){const s=this.counter;return this._widgets.set(s,new Vl(e,this.auth.name,t||{})),this.counter++,s}reset(e){var t;const s=e||Er;(t=this._widgets.get(s))===null||t===void 0||t.delete(),this._widgets.delete(s)}getResponse(e){var t;const s=e||Er;return((t=this._widgets.get(s))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const s=e||Er;return(t=this._widgets.get(s))===null||t===void 0||t.execute(),""}}class Vl{constructor(e,t,s){this.params=s,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const m=typeof e=="string"?document.getElementById(e):e;F(m,"argument-error",{appName:t}),this.container=m,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=Wl(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},jl)},$l))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function Wl(i){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let s=0;s<i;s++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const nn=ls("rcb"),Hl=new K(3e4,6e4);class Gl{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Ve().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return F(zl(t),e,"argument-error"),this.shouldResolveImmediately(t)&&Fe(Ve().grecaptcha)?Promise.resolve(Ve().grecaptcha):new Promise((s,m)=>{const b=Ve().setTimeout(()=>{m(B(e,"network-request-failed"))},Hl.get());Ve()[nn]=()=>{Ve().clearTimeout(b),delete Ve()[nn];const z=Ve().grecaptcha;if(!z||!Fe(z)){m(B(e,"internal-error"));return}const J=z.render;z.render=(ge,ke)=>{const je=J(ge,ke);return this.counter++,je},this.hostLanguage=t,s(z)};const C=`${su()}?${r.querystring({onload:nn,render:"explicit",hl:t})}`;Gr(C).catch(()=>{clearTimeout(b),m(B(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Ve().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function zl(i){return i.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(i)}class Kl{async load(e){return new ql(e)}clearedOneInstance(){}}/**
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
 */const js="recaptcha",Jl={theme:"light",type:"image"};class Yl{constructor(e,t,s=Object.assign({},Jl)){this.parameters=s,this.type=js,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=De(e),this.isInvisible=this.parameters.size==="invisible",F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const m=typeof t=="string"?document.getElementById(t):t;F(m,this.auth,"argument-error"),this.container=m,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Kl:new Gl,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),s=t.getResponse(e);return s||new Promise(m=>{const b=C=>{C&&(this.tokenChangeListeners.delete(b),m(C))};this.tokenChangeListeners.add(b),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){F(!this.parameters.sitekey,this.auth,"argument-error"),F(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),F(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(s=>s(t)),typeof e=="function")e(t);else if(typeof e=="string"){const s=Ve()[e];typeof s=="function"&&s(t)}}}assertNotDestroyed(){F(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){F(Q()&&!tn(),this.auth,"internal-error"),await Xl(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await pe(this.auth);F(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return F(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Xl(){let i=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}i=()=>e(),window.addEventListener("load",i)}).catch(e=>{throw i&&window.removeEventListener("load",i),e})}/**
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
 */class sn{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=It._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ql(i,e,t){if(n._isFirebaseServerApp(i.app))return Promise.reject(q(i));const s=De(i),m=await wr(s,e,r.getModularInstance(t));return new sn(m,b=>mr(s,b))}async function Zl(i,e,t){const s=r.getModularInstance(i);await pr(!1,s,"phone");const m=await wr(s.auth,e,r.getModularInstance(t));return new sn(m,b=>bs(s,b))}async function ed(i,e,t){const s=r.getModularInstance(i);if(n._isFirebaseServerApp(s.auth.app))return Promise.reject(q(s.auth));const m=await wr(s.auth,e,r.getModularInstance(t));return new sn(m,b=>Ts(s,b))}async function wr(i,e,t){var s;const m=await t.verify();try{F(typeof m=="string",i,"argument-error"),F(t.type===js,i,"argument-error");let b;if(typeof e=="string"?b={phoneNumber:e}:b=e,"session"in b){const C=b.session;if("phoneNumber"in b)return F(C.type==="enroll",i,"internal-error"),(await yl(i,{idToken:C.credential,phoneEnrollmentInfo:{phoneNumber:b.phoneNumber,recaptchaToken:m}})).phoneSessionInfo.sessionInfo;{F(C.type==="signin",i,"internal-error");const z=((s=b.multiFactorHint)===null||s===void 0?void 0:s.uid)||b.multiFactorUid;return F(z,i,"missing-multi-factor-info"),(await Fl(i,{mfaPendingCredential:C.credential,mfaEnrollmentId:z,phoneSignInInfo:{recaptchaToken:m}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:C}=await Tu(i,{phoneNumber:b.phoneNumber,recaptchaToken:m});return C}}finally{t._reset()}}async function td(i,e){const t=r.getModularInstance(i);if(n._isFirebaseServerApp(t.auth.app))return Promise.reject(q(t.auth));await zr(t,e)}/**
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
 */class At{constructor(e){this.providerId=At.PROVIDER_ID,this.auth=De(e)}verifyPhoneNumber(e,t){return wr(this.auth,e,r.getModularInstance(t))}static credential(e,t){return It._fromVerification(e,t)}static credentialFromResult(e){const t=e;return At.credentialFromTaggedObject(t)}static credentialFromError(e){return At.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:s}=e;return t&&s?It._fromTokenResponse(t,s):null}}At.PROVIDER_ID="phone",At.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Rt(i,e){return e?be(e):(F(i._popupRedirectResolver,i,"argument-error"),i._popupRedirectResolver)}/**
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
 */class on extends Lt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return at(e,this._buildIdpRequest())}_linkToIdToken(e,t){return at(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return at(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function rd(i){return Ss(i.auth,new on(i),i.bypassAuthState)}function nd(i){const{auth:e,user:t}=i;return F(t,e,"internal-error"),ws(t,new on(i),i.bypassAuthState)}async function id(i){const{auth:e,user:t}=i;return F(t,e,"internal-error"),zr(t,new on(i),i.bypassAuthState)}/**
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
 */class qs{constructor(e,t,s,m,b=!1){this.auth=e,this.resolver=s,this.user=m,this.bypassAuthState=b,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:s,postBody:m,tenantId:b,error:C,type:z}=e;if(C){this.reject(C);return}const J={auth:this.auth,requestUri:t,sessionId:s,tenantId:b||void 0,postBody:m||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(z)(J))}catch(ge){this.reject(ge)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return rd;case"linkViaPopup":case"linkViaRedirect":return id;case"reauthViaPopup":case"reauthViaRedirect":return nd;default:L(this.auth,"internal-error")}}resolve(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){fe(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sd=new K(2e3,1e4);async function od(i,e,t){if(n._isFirebaseServerApp(i.app))return Promise.reject(B(i,"operation-not-supported-in-this-environment"));const s=De(i);re(i,e,ct);const m=Rt(s,t);return new ht(s,"signInViaPopup",e,m).executeNotNull()}async function ad(i,e,t){const s=r.getModularInstance(i);if(n._isFirebaseServerApp(s.auth.app))return Promise.reject(B(s.auth,"operation-not-supported-in-this-environment"));re(s.auth,e,ct);const m=Rt(s.auth,t);return new ht(s.auth,"reauthViaPopup",e,m,s).executeNotNull()}async function cd(i,e,t){const s=r.getModularInstance(i);re(s.auth,e,ct);const m=Rt(s.auth,t);return new ht(s.auth,"linkViaPopup",e,m,s).executeNotNull()}class ht extends qs{constructor(e,t,s,m,b){super(e,t,m,b),this.provider=s,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return F(e,this.auth,"internal-error"),e}async onExecution(){fe(this.filter.length===1,"Popup operations only handle one event");const e=Wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(B(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(B(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,s;if(!((s=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(B(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sd.get())};e()}}ht.currentPopupAction=null;/**
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
 */const ud="pendingRedirect",Gt=new Map;class ld extends qs{constructor(e,t,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,s),this.eventId=null}async execute(){let e=Gt.get(this.auth._key());if(!e){try{const s=await dd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(t){e=()=>Promise.reject(t)}Gt.set(this.auth._key(),e)}return this.bypassAuthState||Gt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function dd(i,e){const t=Hs(e),s=Ws(i);if(!await s._isAvailable())return!1;const m=await s._get(t)==="true";return await s._remove(t),m}async function an(i,e){return Ws(i)._set(Hs(e),"true")}function fd(){Gt.clear()}function Vs(i,e){Gt.set(i._key(),e)}function Ws(i){return be(i._redirectPersistence)}function Hs(i){return tt(ud,i.config.apiKey,i.name)}/**
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
 */function hd(i,e,t){return pd(i,e,t)}async function pd(i,e,t){if(n._isFirebaseServerApp(i.app))return Promise.reject(q(i));const s=De(i);re(i,e,ct),await s._initializationPromise;const m=Rt(s,t);return await an(m,s),m._openRedirect(s,e,"signInViaRedirect")}function md(i,e,t){return gd(i,e,t)}async function gd(i,e,t){const s=r.getModularInstance(i);if(re(s.auth,e,ct),n._isFirebaseServerApp(s.auth.app))return Promise.reject(q(s.auth));await s.auth._initializationPromise;const m=Rt(s.auth,t);await an(m,s.auth);const b=await Gs(s);return m._openRedirect(s.auth,e,"reauthViaRedirect",b)}function vd(i,e,t){return yd(i,e,t)}async function yd(i,e,t){const s=r.getModularInstance(i);re(s.auth,e,ct),await s.auth._initializationPromise;const m=Rt(s.auth,t);await pr(!1,s,e.providerId),await an(m,s.auth);const b=await Gs(s);return m._openRedirect(s.auth,e,"linkViaRedirect",b)}async function _d(i,e){return await De(i)._initializationPromise,cn(i,e,!1)}async function cn(i,e,t=!1){if(n._isFirebaseServerApp(i.app))return Promise.reject(q(i));const s=De(i),m=Rt(s,e),C=await new ld(s,m,t).execute();return C&&!t&&(delete C.user._redirectEventId,await s._persistUserIfCurrent(C.user),await s._setRedirectUser(null,e)),C}async function Gs(i){const e=Wt(`${i.uid}:::`);return i._redirectEventId=e,await i.auth._setRedirectUser(i),await i.auth._persistUserIfCurrent(i),e}/**
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
 */const Id=600*1e3;class zs{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(t=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Ed(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var s;if(e.error&&!Js(e)){const m=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";t.onError(B(this.auth,m))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const s=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Id&&this.cachedEventUids.clear(),this.cachedEventUids.has(Ks(e))}saveEventToCache(e){this.cachedEventUids.add(Ks(e)),this.lastProcessedEventTime=Date.now()}}function Ks(i){return[i.type,i.eventId,i.sessionId,i.tenantId].filter(e=>e).join("-")}function Js({type:i,error:e}){return i==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function Ed(i){switch(i.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Js(i);default:return!1}}/**
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
 */async function Ys(i,e={}){return te(i,"GET","/v1/projects",e)}/**
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
 */const wd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Sd=/^https?/;async function bd(i){if(i.config.emulator)return;const{authorizedDomains:e}=await Ys(i);for(const t of e)try{if(Td(t))return}catch{}L(i,"unauthorized-domain")}function Td(i){const e=we(),{protocol:t,hostname:s}=new URL(e);if(i.startsWith("chrome-extension://")){const C=new URL(i);return C.hostname===""&&s===""?t==="chrome-extension:"&&i.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&C.hostname===s}if(!Sd.test(t))return!1;if(wd.test(i))return s===i;const m=i.replace(/\./g,"\\.");return new RegExp("^(.+\\."+m+"|"+m+")$","i").test(s)}/**
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
 */const Ad=new K(3e4,6e4);function Xs(){const i=Ve().___jsl;if(i!=null&&i.H){for(const e of Object.keys(i.H))if(i.H[e].r=i.H[e].r||[],i.H[e].L=i.H[e].L||[],i.H[e].r=[...i.H[e].L],i.CP)for(let t=0;t<i.CP.length;t++)i.CP[t]=null}}function Rd(i){return new Promise((e,t)=>{var s,m,b;function C(){Xs(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xs(),t(B(i,"network-request-failed"))},timeout:Ad.get()})}if(!((m=(s=Ve().gapi)===null||s===void 0?void 0:s.iframes)===null||m===void 0)&&m.Iframe)e(gapi.iframes.getContext());else if(!((b=Ve().gapi)===null||b===void 0)&&b.load)C();else{const z=ls("iframefcb");return Ve()[z]=()=>{gapi.load?C():t(B(i,"network-request-failed"))},Gr(`${au()}?onload=${z}`).catch(J=>t(J))}}).catch(e=>{throw Sr=null,e})}let Sr=null;function Pd(i){return Sr=Sr||Rd(i),Sr}/**
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
 */const Od=new K(5e3,15e3),Nd="__/auth/iframe",Ld="emulator/auth/iframe",kd={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Cd=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dd(i){const e=i.config;F(e.authDomain,i,"auth-domain-config-required");const t=e.emulator?H(e,Ld):`https://${i.config.authDomain}/${Nd}`,s={apiKey:e.apiKey,appName:i.name,v:n.SDK_VERSION},m=Cd.get(i.config.apiHost);m&&(s.eid=m);const b=i._getFrameworks();return b.length&&(s.fw=b.join(",")),`${t}?${r.querystring(s).slice(1)}`}async function Md(i){const e=await Pd(i),t=Ve().gapi;return F(t,i,"internal-error"),e.open({where:document.body,url:Dd(i),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:kd,dontclear:!0},s=>new Promise(async(m,b)=>{await s.restyle({setHideOnLeave:!1});const C=B(i,"network-request-failed"),z=Ve().setTimeout(()=>{b(C)},Od.get());function J(){Ve().clearTimeout(z),m(s)}s.ping(J).then(J,()=>{b(C)})}))}/**
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
 */const Ud={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fd=500,xd=600,Bd="_blank",$d="http://localhost";class un{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jd(i,e,t,s=Fd,m=xd){const b=Math.max((window.screen.availHeight-m)/2,0).toString(),C=Math.max((window.screen.availWidth-s)/2,0).toString();let z="";const J=Object.assign(Object.assign({},Ud),{width:s.toString(),height:m.toString(),top:b,left:C}),ge=r.getUA().toLowerCase();t&&(z=Z(ge)?Bd:t),_t(ge)&&(e=e||$d,J.scrollbars="yes");const ke=Object.entries(J).reduce((pt,[Ar,Rr])=>`${pt}${Ar}=${Rr},`,"");if(D(ge)&&z!=="_self")return qd(e||"",z),new un(null);const je=window.open(e||"",z,ke);F(je,i,"popup-blocked");try{je.focus()}catch{}return new un(je)}function qd(i,e){const t=document.createElement("a");t.href=i,t.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(s)}/**
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
 */const Vd="__/auth/handler",Wd="emulator/auth/handler",Hd=encodeURIComponent("fac");async function ln(i,e,t,s,m,b){F(i.config.authDomain,i,"auth-domain-config-required"),F(i.config.apiKey,i,"invalid-api-key");const C={apiKey:i.config.apiKey,appName:i.name,authType:t,redirectUrl:s,v:n.SDK_VERSION,eventId:m};if(e instanceof ct){e.setDefaultLanguage(i.languageCode),C.providerId=e.providerId||"",r.isEmpty(e.getCustomParameters())||(C.customParameters=JSON.stringify(e.getCustomParameters()));for(const[ke,je]of Object.entries(b||{}))C[ke]=je}if(e instanceof Dt){const ke=e.getScopes().filter(je=>je!=="");ke.length>0&&(C.scopes=ke.join(","))}i.tenantId&&(C.tid=i.tenantId);const z=C;for(const ke of Object.keys(z))z[ke]===void 0&&delete z[ke];const J=await i._getAppCheckToken(),ge=J?`#${Hd}=${encodeURIComponent(J)}`:"";return`${Gd(i)}?${r.querystring(z).slice(1)}${ge}`}function Gd({config:i}){return i.emulator?H(i,Wd):`https://${i.authDomain}/${Vd}`}/**
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
 */const dn="webStorageSupport";class zd{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=en,this._completeRedirectFn=cn,this._overrideRedirectResult=Vs}async _openPopup(e,t,s,m){var b;fe((b=this.eventManagers[e._key()])===null||b===void 0?void 0:b.manager,"_initialize() not called before _openPopup()");const C=await ln(e,t,s,we(),m);return jd(e,C,Wt())}async _openRedirect(e,t,s,m){await this._originValidation(e);const b=await ln(e,t,s,we(),m);return Pl(b),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:m,promise:b}=this.eventManagers[t];return m?Promise.resolve(m):(fe(b,"If manager is not set, promise should be"),b)}const s=this.initAndGetManager(e);return this.eventManagers[t]={promise:s},s.catch(()=>{delete this.eventManagers[t]}),s}async initAndGetManager(e){const t=await Md(e),s=new zs(e);return t.register("authEvent",m=>(F(m==null?void 0:m.authEvent,e,"invalid-auth-event"),{status:s.onEvent(m.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=t,s}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(dn,{type:dn},m=>{var b;const C=(b=m==null?void 0:m[0])===null||b===void 0?void 0:b[dn];C!==void 0&&t(!!C),L(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=bd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return me()||Nt()||k()}}const Qs=zd;class Zs{constructor(e){this.factorId=e}_process(e,t,s){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,s);case"signin":return this._finalizeSignIn(e,t.credential);default:return de("unexpected MultiFactorSessionType")}}}class fn extends Zs{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new fn(e)}_finalizeEnroll(e,t,s){return _l(e,{idToken:t,displayName:s,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return xl(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class eo{constructor(){}static assertion(e){return fn._fromCredential(e)}}eo.FACTOR_ID="phone";class to{static assertionForEnrollment(e,t){return zt._fromSecret(e,t)}static assertionForSignIn(e,t){return zt._fromEnrollmentId(e,t)}static async generateSecret(e){var t;const s=e;F(typeof((t=s.user)===null||t===void 0?void 0:t.auth)<"u","internal-error");const m=await Il(s.user.auth,{idToken:s.credential,totpEnrollmentInfo:{}});return br._fromStartTotpMfaEnrollmentResponse(m,s.user.auth)}}to.FACTOR_ID="totp";class zt extends Zs{constructor(e,t,s){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=s}static _fromSecret(e,t){return new zt(t,void 0,e)}static _fromEnrollmentId(e,t){return new zt(t,e)}async _finalizeEnroll(e,t,s){return F(typeof this.secret<"u",e,"argument-error"),El(e,{idToken:t,displayName:s,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){F(this.enrollmentId!==void 0&&this.otp!==void 0,e,"argument-error");const s={verificationCode:this.otp};return Bl(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:s})}}class br{constructor(e,t,s,m,b,C,z){this.sessionInfo=C,this.auth=z,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=s,this.codeIntervalSeconds=m,this.enrollmentCompletionDeadline=b}static _fromStartTotpMfaEnrollmentResponse(e,t){return new br(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var s;let m=!1;return(Tr(e)||Tr(t))&&(m=!0),m&&(Tr(e)&&(e=((s=this.auth.currentUser)===null||s===void 0?void 0:s.email)||"unknownuser"),Tr(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function Tr(i){return typeof i>"u"||(i==null?void 0:i.length)===0}var ro="@firebase/auth",no="1.7.9";/**
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
 */class Kd{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){F(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function Jd(i){switch(i){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Yd(i){n._registerComponent(new d.Component("auth",(e,{options:t})=>{const s=e.getProvider("app").getImmediate(),m=e.getProvider("heartbeat"),b=e.getProvider("app-check-internal"),{apiKey:C,authDomain:z}=s.options;F(C&&!C.includes(":"),"invalid-api-key",{appName:s.name});const J={apiKey:C,authDomain:z,clientPlatform:i,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(i)},ge=new Ke(s,m,b,J);return du(ge,t),ge},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,s)=>{e.getProvider("auth-internal").initialize()})),n._registerComponent(new d.Component("auth-internal",e=>{const t=De(e.getProvider("auth").getImmediate());return(s=>new Kd(s))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),n.registerVersion(ro,no,Jd(i)),n.registerVersion(ro,no,"cjs2017")}/**
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
 */const Xd=r.getExperimentalSetting("authIdTokenMaxAge")||300;let io=null;const Qd=i=>async e=>{const t=e&&await e.getIdTokenResult(),s=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(s&&s>Xd)return;const m=t==null?void 0:t.token;io!==m&&(io=m,await fetch(i,{method:m?"POST":"DELETE",headers:m?{Authorization:`Bearer ${m}`}:{}}))};function Zd(i=n.getApp()){const e=n._getProvider(i,"auth");if(e.isInitialized())return e.getImmediate();const t=hs(i,{popupRedirectResolver:Qs,persistence:[$s,Cs,en]}),s=r.getExperimentalSetting("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const b=new URL(s,location.origin);if(location.origin===b.origin){const C=Qd(b.toString());Ns(t,C,()=>C(t.currentUser)),Os(t,z=>C(z))}}const m=r.getDefaultEmulatorHost("auth");return m&&ps(t,`http://${m}`),t}function ef(){var i,e;return(e=(i=document.getElementsByTagName("head"))===null||i===void 0?void 0:i[0])!==null&&e!==void 0?e:document}return iu({loadJS(i){return new Promise((e,t)=>{const s=document.createElement("script");s.setAttribute("src",i),s.onload=e,s.onerror=m=>{const b=B("internal-error");b.customData=m,t(b)},s.type="text/javascript",s.charset="UTF-8",ef().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="}),Yd("Browser"),X.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY=S,X.ActionCodeOperation=E,X.ActionCodeURL=Ct,X.AuthCredential=Lt,X.AuthEventManager=zs,X.AuthImpl=Ke,X.AuthPopup=un,X.EmailAuthCredential=kt,X.EmailAuthProvider=Et,X.FacebookAuthProvider=ut,X.FactorId=y,X.FetchProvider=oe,X.GithubAuthProvider=dt,X.GoogleAuthProvider=lt,X.OAuthCredential=nt,X.OAuthProvider=qt,X.OperationType=w,X.PhoneAuthCredential=It,X.PhoneAuthProvider=At,X.PhoneMultiFactorGenerator=eo,X.ProviderId=p,X.RecaptchaVerifier=Yl,X.SAMLAuthCredential=Mt,X.SAMLAuthProvider=fr,X.SignInMethod=g,X.TotpMultiFactorGenerator=to,X.TotpSecret=br,X.TwitterAuthProvider=ft,X.UserImpl=Ae,X._assert=F,X._castAuth=De,X._clearRedirectOutcomes=fd,X._createError=B,X._fail=L,X._generateEventId=Wt,X._getClientVersion=Se,X._getInstance=be,X._getProjectConfig=Ys,X._getRedirectResult=cn,X._getRedirectUrl=ln,X._isAndroid=se,X._isIOS=k,X._isIOS7Or8=U,X._overrideRedirectResult=Vs,X._persistenceKeyName=tt,X.applyActionCode=ju,X.beforeAuthStateChanged=Ns,X.browserLocalPersistence=Cs,X.browserPopupRedirectResolver=Qs,X.browserSessionPersistence=en,X.checkActionCode=As,X.confirmPasswordReset=$u,X.connectAuthEmulator=ps,X.createUserWithEmailAndPassword=Vu,X.debugAssert=fe,X.debugErrorMap=_,X.deleteUser=gl,X.fetchSignInMethodsForEmail=Ju,X.getAdditionalUserInfo=al,X.getAuth=Zd,X.getIdToken=vt,X.getIdTokenResult=ot,X.getMultiFactorResolver=vl,X.getRedirectResult=_d,X.inMemoryPersistence=St,X.indexedDBLocalPersistence=$s,X.initializeAuth=hs,X.initializeRecaptchaConfig=ul,X.isSignInWithEmailLink=Gu,X.linkWithCredential=bs,X.linkWithPhoneNumber=Zl,X.linkWithPopup=cd,X.linkWithRedirect=vd,X.multiFactor=Sl,X.onAuthStateChanged=dl,X.onIdTokenChanged=Os,X.parseActionCodeURL=ku,X.prodErrorMap=h,X.reauthenticateWithCredential=Ts,X.reauthenticateWithPhoneNumber=ed,X.reauthenticateWithPopup=ad,X.reauthenticateWithRedirect=md,X.reload=c,X.revokeAccessToken=ml,X.sendEmailVerification=Yu,X.sendPasswordResetEmail=Bu,X.sendSignInLinkToEmail=Hu,X.setPersistence=cl,X.signInAnonymously=Mu,X.signInWithCredential=mr,X.signInWithCustomToken=xu,X.signInWithEmailAndPassword=Wu,X.signInWithEmailLink=zu,X.signInWithPhoneNumber=Ql,X.signInWithPopup=od,X.signInWithRedirect=hd,X.signOut=pl,X.unlink=Uu,X.updateCurrentUser=hl,X.updateEmail=el,X.updatePassword=tl,X.updatePhoneNumber=td,X.updateProfile=Zu,X.useDeviceLanguage=fl,X.validatePassword=ll,X.verifyBeforeUpdateEmail=Xu,X.verifyPasswordResetCode=qu,X}var Eo;function Af(){if(Eo)return ne;Eo=1,Object.defineProperty(ne,"__esModule",{value:!0});var n=Tf();return ts(),xr(),Zi(),Qi(),ne.ActionCodeOperation=n.ActionCodeOperation,ne.ActionCodeURL=n.ActionCodeURL,ne.AuthCredential=n.AuthCredential,ne.AuthErrorCodes=n.AUTH_ERROR_CODES_MAP_DO_NOT_USE_INTERNALLY,ne.EmailAuthCredential=n.EmailAuthCredential,ne.EmailAuthProvider=n.EmailAuthProvider,ne.FacebookAuthProvider=n.FacebookAuthProvider,ne.FactorId=n.FactorId,ne.GithubAuthProvider=n.GithubAuthProvider,ne.GoogleAuthProvider=n.GoogleAuthProvider,ne.OAuthCredential=n.OAuthCredential,ne.OAuthProvider=n.OAuthProvider,ne.OperationType=n.OperationType,ne.PhoneAuthCredential=n.PhoneAuthCredential,ne.PhoneAuthProvider=n.PhoneAuthProvider,ne.PhoneMultiFactorGenerator=n.PhoneMultiFactorGenerator,ne.ProviderId=n.ProviderId,ne.RecaptchaVerifier=n.RecaptchaVerifier,ne.SAMLAuthProvider=n.SAMLAuthProvider,ne.SignInMethod=n.SignInMethod,ne.TotpMultiFactorGenerator=n.TotpMultiFactorGenerator,ne.TotpSecret=n.TotpSecret,ne.TwitterAuthProvider=n.TwitterAuthProvider,ne.applyActionCode=n.applyActionCode,ne.beforeAuthStateChanged=n.beforeAuthStateChanged,ne.browserLocalPersistence=n.browserLocalPersistence,ne.browserPopupRedirectResolver=n.browserPopupRedirectResolver,ne.browserSessionPersistence=n.browserSessionPersistence,ne.checkActionCode=n.checkActionCode,ne.confirmPasswordReset=n.confirmPasswordReset,ne.connectAuthEmulator=n.connectAuthEmulator,ne.createUserWithEmailAndPassword=n.createUserWithEmailAndPassword,ne.debugErrorMap=n.debugErrorMap,ne.deleteUser=n.deleteUser,ne.fetchSignInMethodsForEmail=n.fetchSignInMethodsForEmail,ne.getAdditionalUserInfo=n.getAdditionalUserInfo,ne.getAuth=n.getAuth,ne.getIdToken=n.getIdToken,ne.getIdTokenResult=n.getIdTokenResult,ne.getMultiFactorResolver=n.getMultiFactorResolver,ne.getRedirectResult=n.getRedirectResult,ne.inMemoryPersistence=n.inMemoryPersistence,ne.indexedDBLocalPersistence=n.indexedDBLocalPersistence,ne.initializeAuth=n.initializeAuth,ne.initializeRecaptchaConfig=n.initializeRecaptchaConfig,ne.isSignInWithEmailLink=n.isSignInWithEmailLink,ne.linkWithCredential=n.linkWithCredential,ne.linkWithPhoneNumber=n.linkWithPhoneNumber,ne.linkWithPopup=n.linkWithPopup,ne.linkWithRedirect=n.linkWithRedirect,ne.multiFactor=n.multiFactor,ne.onAuthStateChanged=n.onAuthStateChanged,ne.onIdTokenChanged=n.onIdTokenChanged,ne.parseActionCodeURL=n.parseActionCodeURL,ne.prodErrorMap=n.prodErrorMap,ne.reauthenticateWithCredential=n.reauthenticateWithCredential,ne.reauthenticateWithPhoneNumber=n.reauthenticateWithPhoneNumber,ne.reauthenticateWithPopup=n.reauthenticateWithPopup,ne.reauthenticateWithRedirect=n.reauthenticateWithRedirect,ne.reload=n.reload,ne.revokeAccessToken=n.revokeAccessToken,ne.sendEmailVerification=n.sendEmailVerification,ne.sendPasswordResetEmail=n.sendPasswordResetEmail,ne.sendSignInLinkToEmail=n.sendSignInLinkToEmail,ne.setPersistence=n.setPersistence,ne.signInAnonymously=n.signInAnonymously,ne.signInWithCredential=n.signInWithCredential,ne.signInWithCustomToken=n.signInWithCustomToken,ne.signInWithEmailAndPassword=n.signInWithEmailAndPassword,ne.signInWithEmailLink=n.signInWithEmailLink,ne.signInWithPhoneNumber=n.signInWithPhoneNumber,ne.signInWithPopup=n.signInWithPopup,ne.signInWithRedirect=n.signInWithRedirect,ne.signOut=n.signOut,ne.unlink=n.unlink,ne.updateCurrentUser=n.updateCurrentUser,ne.updateEmail=n.updateEmail,ne.updatePassword=n.updatePassword,ne.updatePhoneNumber=n.updatePhoneNumber,ne.updateProfile=n.updateProfile,ne.useDeviceLanguage=n.useDeviceLanguage,ne.validatePassword=n.validatePassword,ne.verifyBeforeUpdateEmail=n.verifyBeforeUpdateEmail,ne.verifyPasswordResetCode=n.verifyPasswordResetCode,ne}var wo;function Rf(){return wo||(wo=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0});var r=Af();Object.keys(r).forEach(function(u){u!=="default"&&!n.hasOwnProperty(u)&&Object.defineProperty(n,u,{enumerable:!0,get:function(){return r[u]}})})})(Sn)),Sn}var gt={},Pr={exports:{}},bn={},Kt={},So;function Pf(){if(So)return Kt;So=1,Kt.byteLength=g,Kt.toByteArray=E,Kt.fromByteArray=_;for(var n=[],r=[],u=typeof Uint8Array<"u"?Uint8Array:Array,l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",d=0,y=l.length;d<y;++d)n[d]=l[d],r[l.charCodeAt(d)]=d;r[45]=62,r[95]=63;function p(h){var P=h.length;if(P%4>0)throw new Error("Invalid string. Length must be a multiple of 4");var S=h.indexOf("=");S===-1&&(S=P);var R=S===P?0:4-S%4;return[S,R]}function g(h){var P=p(h),S=P[0],R=P[1];return(S+R)*3/4-R}function w(h,P,S){return(P+S)*3/4-S}function E(h){var P,S=p(h),R=S[0],I=S[1],A=new u(w(h,R,I)),L=0,B=I>0?R-4:R,V;for(V=0;V<B;V+=4)P=r[h.charCodeAt(V)]<<18|r[h.charCodeAt(V+1)]<<12|r[h.charCodeAt(V+2)]<<6|r[h.charCodeAt(V+3)],A[L++]=P>>16&255,A[L++]=P>>8&255,A[L++]=P&255;return I===2&&(P=r[h.charCodeAt(V)]<<2|r[h.charCodeAt(V+1)]>>4,A[L++]=P&255),I===1&&(P=r[h.charCodeAt(V)]<<10|r[h.charCodeAt(V+1)]<<4|r[h.charCodeAt(V+2)]>>2,A[L++]=P>>8&255,A[L++]=P&255),A}function a(h){return n[h>>18&63]+n[h>>12&63]+n[h>>6&63]+n[h&63]}function f(h,P,S){for(var R,I=[],A=P;A<S;A+=3)R=(h[A]<<16&16711680)+(h[A+1]<<8&65280)+(h[A+2]&255),I.push(a(R));return I.join("")}function _(h){for(var P,S=h.length,R=S%3,I=[],A=16383,L=0,B=S-R;L<B;L+=A)I.push(f(h,L,L+A>B?B:L+A));return R===1?(P=h[S-1],I.push(n[P>>2]+n[P<<4&63]+"==")):R===2&&(P=(h[S-2]<<8)+h[S-1],I.push(n[P>>10]+n[P>>4&63]+n[P<<2&63]+"=")),I.join("")}return Kt}var Or={};/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */var bo;function Of(){return bo||(bo=1,Or.read=function(n,r,u,l,d){var y,p,g=d*8-l-1,w=(1<<g)-1,E=w>>1,a=-7,f=u?d-1:0,_=u?-1:1,h=n[r+f];for(f+=_,y=h&(1<<-a)-1,h>>=-a,a+=g;a>0;y=y*256+n[r+f],f+=_,a-=8);for(p=y&(1<<-a)-1,y>>=-a,a+=l;a>0;p=p*256+n[r+f],f+=_,a-=8);if(y===0)y=1-E;else{if(y===w)return p?NaN:(h?-1:1)*(1/0);p=p+Math.pow(2,l),y=y-E}return(h?-1:1)*p*Math.pow(2,y-l)},Or.write=function(n,r,u,l,d,y){var p,g,w,E=y*8-d-1,a=(1<<E)-1,f=a>>1,_=d===23?Math.pow(2,-24)-Math.pow(2,-77):0,h=l?0:y-1,P=l?1:-1,S=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(g=isNaN(r)?1:0,p=a):(p=Math.floor(Math.log(r)/Math.LN2),r*(w=Math.pow(2,-p))<1&&(p--,w*=2),p+f>=1?r+=_/w:r+=_*Math.pow(2,1-f),r*w>=2&&(p++,w/=2),p+f>=a?(g=0,p=a):p+f>=1?(g=(r*w-1)*Math.pow(2,d),p=p+f):(g=r*Math.pow(2,f-1)*Math.pow(2,d),p=0));d>=8;n[u+h]=g&255,h+=P,g/=256,d-=8);for(p=p<<d|g,E+=d;E>0;n[u+h]=p&255,h+=P,p/=256,E-=8);n[u+h-P]|=S*128}),Or}/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */var To;function Mr(){return To||(To=1,(function(n){const r=Pf(),u=Of(),l=typeof Symbol=="function"&&typeof Symbol.for=="function"?Symbol.for("nodejs.util.inspect.custom"):null;n.Buffer=g,n.SlowBuffer=A,n.INSPECT_MAX_BYTES=50;const d=2147483647;n.kMaxLength=d,g.TYPED_ARRAY_SUPPORT=y(),!g.TYPED_ARRAY_SUPPORT&&typeof console<"u"&&typeof console.error=="function"&&console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.");function y(){try{const v=new Uint8Array(1),o={foo:function(){return 42}};return Object.setPrototypeOf(o,Uint8Array.prototype),Object.setPrototypeOf(v,o),v.foo()===42}catch{return!1}}Object.defineProperty(g.prototype,"parent",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.buffer}}),Object.defineProperty(g.prototype,"offset",{enumerable:!0,get:function(){if(g.isBuffer(this))return this.byteOffset}});function p(v){if(v>d)throw new RangeError('The value "'+v+'" is invalid for option "size"');const o=new Uint8Array(v);return Object.setPrototypeOf(o,g.prototype),o}function g(v,o,c){if(typeof v=="number"){if(typeof o=="string")throw new TypeError('The "string" argument must be of type string. Received type number');return f(v)}return w(v,o,c)}g.poolSize=8192;function w(v,o,c){if(typeof v=="string")return _(v,o);if(ArrayBuffer.isView(v))return P(v);if(v==null)throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v);if($e(v,ArrayBuffer)||v&&$e(v.buffer,ArrayBuffer)||typeof SharedArrayBuffer<"u"&&($e(v,SharedArrayBuffer)||v&&$e(v.buffer,SharedArrayBuffer)))return S(v,o,c);if(typeof v=="number")throw new TypeError('The "value" argument must not be of type number. Received type number');const O=v.valueOf&&v.valueOf();if(O!=null&&O!==v)return g.from(O,o,c);const M=R(v);if(M)return M;if(typeof Symbol<"u"&&Symbol.toPrimitive!=null&&typeof v[Symbol.toPrimitive]=="function")return g.from(v[Symbol.toPrimitive]("string"),o,c);throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type "+typeof v)}g.from=function(v,o,c){return w(v,o,c)},Object.setPrototypeOf(g.prototype,Uint8Array.prototype),Object.setPrototypeOf(g,Uint8Array);function E(v){if(typeof v!="number")throw new TypeError('"size" argument must be of type number');if(v<0)throw new RangeError('The value "'+v+'" is invalid for option "size"')}function a(v,o,c){return E(v),v<=0?p(v):o!==void 0?typeof c=="string"?p(v).fill(o,c):p(v).fill(o):p(v)}g.alloc=function(v,o,c){return a(v,o,c)};function f(v){return E(v),p(v<0?0:I(v)|0)}g.allocUnsafe=function(v){return f(v)},g.allocUnsafeSlow=function(v){return f(v)};function _(v,o){if((typeof o!="string"||o==="")&&(o="utf8"),!g.isEncoding(o))throw new TypeError("Unknown encoding: "+o);const c=L(v,o)|0;let O=p(c);const M=O.write(v,o);return M!==c&&(O=O.slice(0,M)),O}function h(v){const o=v.length<0?0:I(v.length)|0,c=p(o);for(let O=0;O<o;O+=1)c[O]=v[O]&255;return c}function P(v){if($e(v,Uint8Array)){const o=new Uint8Array(v);return S(o.buffer,o.byteOffset,o.byteLength)}return h(v)}function S(v,o,c){if(o<0||v.byteLength<o)throw new RangeError('"offset" is outside of buffer bounds');if(v.byteLength<o+(c||0))throw new RangeError('"length" is outside of buffer bounds');let O;return o===void 0&&c===void 0?O=new Uint8Array(v):c===void 0?O=new Uint8Array(v,o):O=new Uint8Array(v,o,c),Object.setPrototypeOf(O,g.prototype),O}function R(v){if(g.isBuffer(v)){const o=I(v.length)|0,c=p(o);return c.length===0||v.copy(c,0,0,o),c}if(v.length!==void 0)return typeof v.length!="number"||et(v.length)?p(0):h(v);if(v.type==="Buffer"&&Array.isArray(v.data))return h(v.data)}function I(v){if(v>=d)throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+d.toString(16)+" bytes");return v|0}function A(v){return+v!=v&&(v=0),g.alloc(+v)}g.isBuffer=function(o){return o!=null&&o._isBuffer===!0&&o!==g.prototype},g.compare=function(o,c){if($e(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),$e(c,Uint8Array)&&(c=g.from(c,c.offset,c.byteLength)),!g.isBuffer(o)||!g.isBuffer(c))throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');if(o===c)return 0;let O=o.length,M=c.length;for(let x=0,G=Math.min(O,M);x<G;++x)if(o[x]!==c[x]){O=o[x],M=c[x];break}return O<M?-1:M<O?1:0},g.isEncoding=function(o){switch(String(o).toLowerCase()){case"hex":case"utf8":case"utf-8":case"ascii":case"latin1":case"binary":case"base64":case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return!0;default:return!1}},g.concat=function(o,c){if(!Array.isArray(o))throw new TypeError('"list" argument must be an Array of Buffers');if(o.length===0)return g.alloc(0);let O;if(c===void 0)for(c=0,O=0;O<o.length;++O)c+=o[O].length;const M=g.allocUnsafe(c);let x=0;for(O=0;O<o.length;++O){let G=o[O];if($e(G,Uint8Array))x+G.length>M.length?(g.isBuffer(G)||(G=g.from(G)),G.copy(M,x)):Uint8Array.prototype.set.call(M,G,x);else if(g.isBuffer(G))G.copy(M,x);else throw new TypeError('"list" argument must be an Array of Buffers');x+=G.length}return M};function L(v,o){if(g.isBuffer(v))return v.length;if(ArrayBuffer.isView(v)||$e(v,ArrayBuffer))return v.byteLength;if(typeof v!="string")throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type '+typeof v);const c=v.length,O=arguments.length>2&&arguments[2]===!0;if(!O&&c===0)return 0;let M=!1;for(;;)switch(o){case"ascii":case"latin1":case"binary":return c;case"utf8":case"utf-8":return qe(v).length;case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return c*2;case"hex":return c>>>1;case"base64":return ot(v).length;default:if(M)return O?-1:qe(v).length;o=(""+o).toLowerCase(),M=!0}}g.byteLength=L;function B(v,o,c){let O=!1;if((o===void 0||o<0)&&(o=0),o>this.length||((c===void 0||c>this.length)&&(c=this.length),c<=0)||(c>>>=0,o>>>=0,c<=o))return"";for(v||(v="utf8");;)switch(v){case"hex":return oe(this,o,c);case"utf8":case"utf-8":return he(this,o,c);case"ascii":return K(this,o,c);case"latin1":case"binary":return H(this,o,c);case"base64":return Q(this,o,c);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return ue(this,o,c);default:if(O)throw new TypeError("Unknown encoding: "+v);v=(v+"").toLowerCase(),O=!0}}g.prototype._isBuffer=!0;function V(v,o,c){const O=v[o];v[o]=v[c],v[c]=O}g.prototype.swap16=function(){const o=this.length;if(o%2!==0)throw new RangeError("Buffer size must be a multiple of 16-bits");for(let c=0;c<o;c+=2)V(this,c,c+1);return this},g.prototype.swap32=function(){const o=this.length;if(o%4!==0)throw new RangeError("Buffer size must be a multiple of 32-bits");for(let c=0;c<o;c+=4)V(this,c,c+3),V(this,c+1,c+2);return this},g.prototype.swap64=function(){const o=this.length;if(o%8!==0)throw new RangeError("Buffer size must be a multiple of 64-bits");for(let c=0;c<o;c+=8)V(this,c,c+7),V(this,c+1,c+6),V(this,c+2,c+5),V(this,c+3,c+4);return this},g.prototype.toString=function(){const o=this.length;return o===0?"":arguments.length===0?he(this,0,o):B.apply(this,arguments)},g.prototype.toLocaleString=g.prototype.toString,g.prototype.equals=function(o){if(!g.isBuffer(o))throw new TypeError("Argument must be a Buffer");return this===o?!0:g.compare(this,o)===0},g.prototype.inspect=function(){let o="";const c=n.INSPECT_MAX_BYTES;return o=this.toString("hex",0,c).replace(/(.{2})/g,"$1 ").trim(),this.length>c&&(o+=" ... "),"<Buffer "+o+">"},l&&(g.prototype[l]=g.prototype.inspect),g.prototype.compare=function(o,c,O,M,x){if($e(o,Uint8Array)&&(o=g.from(o,o.offset,o.byteLength)),!g.isBuffer(o))throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type '+typeof o);if(c===void 0&&(c=0),O===void 0&&(O=o?o.length:0),M===void 0&&(M=0),x===void 0&&(x=this.length),c<0||O>o.length||M<0||x>this.length)throw new RangeError("out of range index");if(M>=x&&c>=O)return 0;if(M>=x)return-1;if(c>=O)return 1;if(c>>>=0,O>>>=0,M>>>=0,x>>>=0,this===o)return 0;let G=x-M,Ie=O-c;const Ne=Math.min(G,Ie),Ae=this.slice(M,x),Ce=o.slice(c,O);for(let be=0;be<Ne;++be)if(Ae[be]!==Ce[be]){G=Ae[be],Ie=Ce[be];break}return G<Ie?-1:Ie<G?1:0};function q(v,o,c,O,M){if(v.length===0)return-1;if(typeof c=="string"?(O=c,c=0):c>2147483647?c=2147483647:c<-2147483648&&(c=-2147483648),c=+c,et(c)&&(c=M?0:v.length-1),c<0&&(c=v.length+c),c>=v.length){if(M)return-1;c=v.length-1}else if(c<0)if(M)c=0;else return-1;if(typeof o=="string"&&(o=g.from(o,O)),g.isBuffer(o))return o.length===0?-1:re(v,o,c,O,M);if(typeof o=="number")return o=o&255,typeof Uint8Array.prototype.indexOf=="function"?M?Uint8Array.prototype.indexOf.call(v,o,c):Uint8Array.prototype.lastIndexOf.call(v,o,c):re(v,[o],c,O,M);throw new TypeError("val must be string, number or Buffer")}function re(v,o,c,O,M){let x=1,G=v.length,Ie=o.length;if(O!==void 0&&(O=String(O).toLowerCase(),O==="ucs2"||O==="ucs-2"||O==="utf16le"||O==="utf-16le")){if(v.length<2||o.length<2)return-1;x=2,G/=2,Ie/=2,c/=2}function Ne(Ce,be){return x===1?Ce[be]:Ce.readUInt16BE(be*x)}let Ae;if(M){let Ce=-1;for(Ae=c;Ae<G;Ae++)if(Ne(v,Ae)===Ne(o,Ce===-1?0:Ae-Ce)){if(Ce===-1&&(Ce=Ae),Ae-Ce+1===Ie)return Ce*x}else Ce!==-1&&(Ae-=Ae-Ce),Ce=-1}else for(c+Ie>G&&(c=G-Ie),Ae=c;Ae>=0;Ae--){let Ce=!0;for(let be=0;be<Ie;be++)if(Ne(v,Ae+be)!==Ne(o,be)){Ce=!1;break}if(Ce)return Ae}return-1}g.prototype.includes=function(o,c,O){return this.indexOf(o,c,O)!==-1},g.prototype.indexOf=function(o,c,O){return q(this,o,c,O,!0)},g.prototype.lastIndexOf=function(o,c,O){return q(this,o,c,O,!1)};function W(v,o,c,O){c=Number(c)||0;const M=v.length-c;O?(O=Number(O),O>M&&(O=M)):O=M;const x=o.length;O>x/2&&(O=x/2);let G;for(G=0;G<O;++G){const Ie=parseInt(o.substr(G*2,2),16);if(et(Ie))return G;v[c+G]=Ie}return G}function F(v,o,c,O){return Je(qe(o,v.length-c),v,c,O)}function de(v,o,c,O){return Je(Be(o),v,c,O)}function fe(v,o,c,O){return Je(ot(o),v,c,O)}function we(v,o,c,O){return Je(vt(o,v.length-c),v,c,O)}g.prototype.write=function(o,c,O,M){if(c===void 0)M="utf8",O=this.length,c=0;else if(O===void 0&&typeof c=="string")M=c,O=this.length,c=0;else if(isFinite(c))c=c>>>0,isFinite(O)?(O=O>>>0,M===void 0&&(M="utf8")):(M=O,O=void 0);else throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");const x=this.length-c;if((O===void 0||O>x)&&(O=x),o.length>0&&(O<0||c<0)||c>this.length)throw new RangeError("Attempt to write outside buffer bounds");M||(M="utf8");let G=!1;for(;;)switch(M){case"hex":return W(this,o,c,O);case"utf8":case"utf-8":return F(this,o,c,O);case"ascii":case"latin1":case"binary":return de(this,o,c,O);case"base64":return fe(this,o,c,O);case"ucs2":case"ucs-2":case"utf16le":case"utf-16le":return we(this,o,c,O);default:if(G)throw new TypeError("Unknown encoding: "+M);M=(""+M).toLowerCase(),G=!0}},g.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this._arr||this,0)}};function Q(v,o,c){return o===0&&c===v.length?r.fromByteArray(v):r.fromByteArray(v.slice(o,c))}function he(v,o,c){c=Math.min(v.length,c);const O=[];let M=o;for(;M<c;){const x=v[M];let G=null,Ie=x>239?4:x>223?3:x>191?2:1;if(M+Ie<=c){let Ne,Ae,Ce,be;switch(Ie){case 1:x<128&&(G=x);break;case 2:Ne=v[M+1],(Ne&192)===128&&(be=(x&31)<<6|Ne&63,be>127&&(G=be));break;case 3:Ne=v[M+1],Ae=v[M+2],(Ne&192)===128&&(Ae&192)===128&&(be=(x&15)<<12|(Ne&63)<<6|Ae&63,be>2047&&(be<55296||be>57343)&&(G=be));break;case 4:Ne=v[M+1],Ae=v[M+2],Ce=v[M+3],(Ne&192)===128&&(Ae&192)===128&&(Ce&192)===128&&(be=(x&15)<<18|(Ne&63)<<12|(Ae&63)<<6|Ce&63,be>65535&&be<1114112&&(G=be))}}G===null?(G=65533,Ie=1):G>65535&&(G-=65536,O.push(G>>>10&1023|55296),G=56320|G&1023),O.push(G),M+=Ie}return _e(O)}const ie=4096;function _e(v){const o=v.length;if(o<=ie)return String.fromCharCode.apply(String,v);let c="",O=0;for(;O<o;)c+=String.fromCharCode.apply(String,v.slice(O,O+=ie));return c}function K(v,o,c){let O="";c=Math.min(v.length,c);for(let M=o;M<c;++M)O+=String.fromCharCode(v[M]&127);return O}function H(v,o,c){let O="";c=Math.min(v.length,c);for(let M=o;M<c;++M)O+=String.fromCharCode(v[M]);return O}function oe(v,o,c){const O=v.length;(!o||o<0)&&(o=0),(!c||c<0||c>O)&&(c=O);let M="";for(let x=o;x<c;++x)M+=Ge[v[x]];return M}function ue(v,o,c){const O=v.slice(o,c);let M="";for(let x=0;x<O.length-1;x+=2)M+=String.fromCharCode(O[x]+O[x+1]*256);return M}g.prototype.slice=function(o,c){const O=this.length;o=~~o,c=c===void 0?O:~~c,o<0?(o+=O,o<0&&(o=0)):o>O&&(o=O),c<0?(c+=O,c<0&&(c=0)):c>O&&(c=O),c<o&&(c=o);const M=this.subarray(o,c);return Object.setPrototypeOf(M,g.prototype),M};function ae(v,o,c){if(v%1!==0||v<0)throw new RangeError("offset is not uint");if(v+o>c)throw new RangeError("Trying to access beyond buffer length")}g.prototype.readUintLE=g.prototype.readUIntLE=function(o,c,O){o=o>>>0,c=c>>>0,O||ae(o,c,this.length);let M=this[o],x=1,G=0;for(;++G<c&&(x*=256);)M+=this[o+G]*x;return M},g.prototype.readUintBE=g.prototype.readUIntBE=function(o,c,O){o=o>>>0,c=c>>>0,O||ae(o,c,this.length);let M=this[o+--c],x=1;for(;c>0&&(x*=256);)M+=this[o+--c]*x;return M},g.prototype.readUint8=g.prototype.readUInt8=function(o,c){return o=o>>>0,c||ae(o,1,this.length),this[o]},g.prototype.readUint16LE=g.prototype.readUInt16LE=function(o,c){return o=o>>>0,c||ae(o,2,this.length),this[o]|this[o+1]<<8},g.prototype.readUint16BE=g.prototype.readUInt16BE=function(o,c){return o=o>>>0,c||ae(o,2,this.length),this[o]<<8|this[o+1]},g.prototype.readUint32LE=g.prototype.readUInt32LE=function(o,c){return o=o>>>0,c||ae(o,4,this.length),(this[o]|this[o+1]<<8|this[o+2]<<16)+this[o+3]*16777216},g.prototype.readUint32BE=g.prototype.readUInt32BE=function(o,c){return o=o>>>0,c||ae(o,4,this.length),this[o]*16777216+(this[o+1]<<16|this[o+2]<<8|this[o+3])},g.prototype.readBigUInt64LE=ze(function(o){o=o>>>0,pe(o,"offset");const c=this[o],O=this[o+7];(c===void 0||O===void 0)&&ve(o,this.length-8);const M=c+this[++o]*2**8+this[++o]*2**16+this[++o]*2**24,x=this[++o]+this[++o]*2**8+this[++o]*2**16+O*2**24;return BigInt(M)+(BigInt(x)<<BigInt(32))}),g.prototype.readBigUInt64BE=ze(function(o){o=o>>>0,pe(o,"offset");const c=this[o],O=this[o+7];(c===void 0||O===void 0)&&ve(o,this.length-8);const M=c*2**24+this[++o]*2**16+this[++o]*2**8+this[++o],x=this[++o]*2**24+this[++o]*2**16+this[++o]*2**8+O;return(BigInt(M)<<BigInt(32))+BigInt(x)}),g.prototype.readIntLE=function(o,c,O){o=o>>>0,c=c>>>0,O||ae(o,c,this.length);let M=this[o],x=1,G=0;for(;++G<c&&(x*=256);)M+=this[o+G]*x;return x*=128,M>=x&&(M-=Math.pow(2,8*c)),M},g.prototype.readIntBE=function(o,c,O){o=o>>>0,c=c>>>0,O||ae(o,c,this.length);let M=c,x=1,G=this[o+--M];for(;M>0&&(x*=256);)G+=this[o+--M]*x;return x*=128,G>=x&&(G-=Math.pow(2,8*c)),G},g.prototype.readInt8=function(o,c){return o=o>>>0,c||ae(o,1,this.length),this[o]&128?(255-this[o]+1)*-1:this[o]},g.prototype.readInt16LE=function(o,c){o=o>>>0,c||ae(o,2,this.length);const O=this[o]|this[o+1]<<8;return O&32768?O|4294901760:O},g.prototype.readInt16BE=function(o,c){o=o>>>0,c||ae(o,2,this.length);const O=this[o+1]|this[o]<<8;return O&32768?O|4294901760:O},g.prototype.readInt32LE=function(o,c){return o=o>>>0,c||ae(o,4,this.length),this[o]|this[o+1]<<8|this[o+2]<<16|this[o+3]<<24},g.prototype.readInt32BE=function(o,c){return o=o>>>0,c||ae(o,4,this.length),this[o]<<24|this[o+1]<<16|this[o+2]<<8|this[o+3]},g.prototype.readBigInt64LE=ze(function(o){o=o>>>0,pe(o,"offset");const c=this[o],O=this[o+7];(c===void 0||O===void 0)&&ve(o,this.length-8);const M=this[o+4]+this[o+5]*2**8+this[o+6]*2**16+(O<<24);return(BigInt(M)<<BigInt(32))+BigInt(c+this[++o]*2**8+this[++o]*2**16+this[++o]*2**24)}),g.prototype.readBigInt64BE=ze(function(o){o=o>>>0,pe(o,"offset");const c=this[o],O=this[o+7];(c===void 0||O===void 0)&&ve(o,this.length-8);const M=(c<<24)+this[++o]*2**16+this[++o]*2**8+this[++o];return(BigInt(M)<<BigInt(32))+BigInt(this[++o]*2**24+this[++o]*2**16+this[++o]*2**8+O)}),g.prototype.readFloatLE=function(o,c){return o=o>>>0,c||ae(o,4,this.length),u.read(this,o,!0,23,4)},g.prototype.readFloatBE=function(o,c){return o=o>>>0,c||ae(o,4,this.length),u.read(this,o,!1,23,4)},g.prototype.readDoubleLE=function(o,c){return o=o>>>0,c||ae(o,8,this.length),u.read(this,o,!0,52,8)},g.prototype.readDoubleBE=function(o,c){return o=o>>>0,c||ae(o,8,this.length),u.read(this,o,!1,52,8)};function j(v,o,c,O,M,x){if(!g.isBuffer(v))throw new TypeError('"buffer" argument must be a Buffer instance');if(o>M||o<x)throw new RangeError('"value" argument is out of bounds');if(c+O>v.length)throw new RangeError("Index out of range")}g.prototype.writeUintLE=g.prototype.writeUIntLE=function(o,c,O,M){if(o=+o,c=c>>>0,O=O>>>0,!M){const Ie=Math.pow(2,8*O)-1;j(this,o,c,O,Ie,0)}let x=1,G=0;for(this[c]=o&255;++G<O&&(x*=256);)this[c+G]=o/x&255;return c+O},g.prototype.writeUintBE=g.prototype.writeUIntBE=function(o,c,O,M){if(o=+o,c=c>>>0,O=O>>>0,!M){const Ie=Math.pow(2,8*O)-1;j(this,o,c,O,Ie,0)}let x=O-1,G=1;for(this[c+x]=o&255;--x>=0&&(G*=256);)this[c+x]=o/G&255;return c+O},g.prototype.writeUint8=g.prototype.writeUInt8=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,1,255,0),this[c]=o&255,c+1},g.prototype.writeUint16LE=g.prototype.writeUInt16LE=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,2,65535,0),this[c]=o&255,this[c+1]=o>>>8,c+2},g.prototype.writeUint16BE=g.prototype.writeUInt16BE=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,2,65535,0),this[c]=o>>>8,this[c+1]=o&255,c+2},g.prototype.writeUint32LE=g.prototype.writeUInt32LE=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,4,4294967295,0),this[c+3]=o>>>24,this[c+2]=o>>>16,this[c+1]=o>>>8,this[c]=o&255,c+4},g.prototype.writeUint32BE=g.prototype.writeUInt32BE=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,4,4294967295,0),this[c]=o>>>24,this[c+1]=o>>>16,this[c+2]=o>>>8,this[c+3]=o&255,c+4};function te(v,o,c,O,M){$(o,O,M,v,c,7);let x=Number(o&BigInt(4294967295));v[c++]=x,x=x>>8,v[c++]=x,x=x>>8,v[c++]=x,x=x>>8,v[c++]=x;let G=Number(o>>BigInt(32)&BigInt(4294967295));return v[c++]=G,G=G>>8,v[c++]=G,G=G>>8,v[c++]=G,G=G>>8,v[c++]=G,c}function Ee(v,o,c,O,M){$(o,O,M,v,c,7);let x=Number(o&BigInt(4294967295));v[c+7]=x,x=x>>8,v[c+6]=x,x=x>>8,v[c+5]=x,x=x>>8,v[c+4]=x;let G=Number(o>>BigInt(32)&BigInt(4294967295));return v[c+3]=G,G=G>>8,v[c+2]=G,G=G>>8,v[c+1]=G,G=G>>8,v[c]=G,c+8}g.prototype.writeBigUInt64LE=ze(function(o,c=0){return te(this,o,c,BigInt(0),BigInt("0xffffffffffffffff"))}),g.prototype.writeBigUInt64BE=ze(function(o,c=0){return Ee(this,o,c,BigInt(0),BigInt("0xffffffffffffffff"))}),g.prototype.writeIntLE=function(o,c,O,M){if(o=+o,c=c>>>0,!M){const Ne=Math.pow(2,8*O-1);j(this,o,c,O,Ne-1,-Ne)}let x=0,G=1,Ie=0;for(this[c]=o&255;++x<O&&(G*=256);)o<0&&Ie===0&&this[c+x-1]!==0&&(Ie=1),this[c+x]=(o/G>>0)-Ie&255;return c+O},g.prototype.writeIntBE=function(o,c,O,M){if(o=+o,c=c>>>0,!M){const Ne=Math.pow(2,8*O-1);j(this,o,c,O,Ne-1,-Ne)}let x=O-1,G=1,Ie=0;for(this[c+x]=o&255;--x>=0&&(G*=256);)o<0&&Ie===0&&this[c+x+1]!==0&&(Ie=1),this[c+x]=(o/G>>0)-Ie&255;return c+O},g.prototype.writeInt8=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,1,127,-128),o<0&&(o=255+o+1),this[c]=o&255,c+1},g.prototype.writeInt16LE=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,2,32767,-32768),this[c]=o&255,this[c+1]=o>>>8,c+2},g.prototype.writeInt16BE=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,2,32767,-32768),this[c]=o>>>8,this[c+1]=o&255,c+2},g.prototype.writeInt32LE=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,4,2147483647,-2147483648),this[c]=o&255,this[c+1]=o>>>8,this[c+2]=o>>>16,this[c+3]=o>>>24,c+4},g.prototype.writeInt32BE=function(o,c,O){return o=+o,c=c>>>0,O||j(this,o,c,4,2147483647,-2147483648),o<0&&(o=4294967295+o+1),this[c]=o>>>24,this[c+1]=o>>>16,this[c+2]=o>>>8,this[c+3]=o&255,c+4},g.prototype.writeBigInt64LE=ze(function(o,c=0){return te(this,o,c,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))}),g.prototype.writeBigInt64BE=ze(function(o,c=0){return Ee(this,o,c,-BigInt("0x8000000000000000"),BigInt("0x7fffffffffffffff"))});function le(v,o,c,O,M,x){if(c+O>v.length)throw new RangeError("Index out of range");if(c<0)throw new RangeError("Index out of range")}function ye(v,o,c,O,M){return o=+o,c=c>>>0,M||le(v,o,c,4),u.write(v,o,c,O,23,4),c+4}g.prototype.writeFloatLE=function(o,c,O){return ye(this,o,c,!0,O)},g.prototype.writeFloatBE=function(o,c,O){return ye(this,o,c,!1,O)};function Le(v,o,c,O,M){return o=+o,c=c>>>0,M||le(v,o,c,8),u.write(v,o,c,O,52,8),c+8}g.prototype.writeDoubleLE=function(o,c,O){return Le(this,o,c,!0,O)},g.prototype.writeDoubleBE=function(o,c,O){return Le(this,o,c,!1,O)},g.prototype.copy=function(o,c,O,M){if(!g.isBuffer(o))throw new TypeError("argument should be a Buffer");if(O||(O=0),!M&&M!==0&&(M=this.length),c>=o.length&&(c=o.length),c||(c=0),M>0&&M<O&&(M=O),M===O||o.length===0||this.length===0)return 0;if(c<0)throw new RangeError("targetStart out of bounds");if(O<0||O>=this.length)throw new RangeError("Index out of range");if(M<0)throw new RangeError("sourceEnd out of bounds");M>this.length&&(M=this.length),o.length-c<M-O&&(M=o.length-c+O);const x=M-O;return this===o&&typeof Uint8Array.prototype.copyWithin=="function"?this.copyWithin(c,O,M):Uint8Array.prototype.set.call(o,this.subarray(O,M),c),x},g.prototype.fill=function(o,c,O,M){if(typeof o=="string"){if(typeof c=="string"?(M=c,c=0,O=this.length):typeof O=="string"&&(M=O,O=this.length),M!==void 0&&typeof M!="string")throw new TypeError("encoding must be a string");if(typeof M=="string"&&!g.isEncoding(M))throw new TypeError("Unknown encoding: "+M);if(o.length===1){const G=o.charCodeAt(0);(M==="utf8"&&G<128||M==="latin1")&&(o=G)}}else typeof o=="number"?o=o&255:typeof o=="boolean"&&(o=Number(o));if(c<0||this.length<c||this.length<O)throw new RangeError("Out of range index");if(O<=c)return this;c=c>>>0,O=O===void 0?this.length:O>>>0,o||(o=0);let x;if(typeof o=="number")for(x=c;x<O;++x)this[x]=o;else{const G=g.isBuffer(o)?o:g.from(o,M),Ie=G.length;if(Ie===0)throw new TypeError('The value "'+o+'" is invalid for argument "value"');for(x=0;x<O-c;++x)this[x+c]=G[x%Ie]}return this};const Te={};function Ue(v,o,c){Te[v]=class extends c{constructor(){super(),Object.defineProperty(this,"message",{value:o.apply(this,arguments),writable:!0,configurable:!0}),this.name=`${this.name} [${v}]`,this.stack,delete this.name}get code(){return v}set code(M){Object.defineProperty(this,"code",{configurable:!0,enumerable:!0,value:M,writable:!0})}toString(){return`${this.name} [${v}]: ${this.message}`}}}Ue("ERR_BUFFER_OUT_OF_BOUNDS",function(v){return v?`${v} is outside of buffer bounds`:"Attempt to access memory outside buffer bounds"},RangeError),Ue("ERR_INVALID_ARG_TYPE",function(v,o){return`The "${v}" argument must be of type number. Received type ${typeof o}`},TypeError),Ue("ERR_OUT_OF_RANGE",function(v,o,c){let O=`The value of "${v}" is out of range.`,M=c;return Number.isInteger(c)&&Math.abs(c)>2**32?M=Fe(String(c)):typeof c=="bigint"&&(M=String(c),(c>BigInt(2)**BigInt(32)||c<-(BigInt(2)**BigInt(32)))&&(M=Fe(M)),M+="n"),O+=` It must be ${o}. Received ${M}`,O},RangeError);function Fe(v){let o="",c=v.length;const O=v[0]==="-"?1:0;for(;c>=O+4;c-=3)o=`_${v.slice(c-3,c)}${o}`;return`${v.slice(0,c)}${o}`}function Xe(v,o,c){pe(o,"offset"),(v[o]===void 0||v[o+c]===void 0)&&ve(o,v.length-(c+1))}function $(v,o,c,O,M,x){if(v>c||v<o){const G=typeof o=="bigint"?"n":"";let Ie;throw o===0||o===BigInt(0)?Ie=`>= 0${G} and < 2${G} ** ${(x+1)*8}${G}`:Ie=`>= -(2${G} ** ${(x+1)*8-1}${G}) and < 2 ** ${(x+1)*8-1}${G}`,new Te.ERR_OUT_OF_RANGE("value",Ie,v)}Xe(O,M,x)}function pe(v,o){if(typeof v!="number")throw new Te.ERR_INVALID_ARG_TYPE(o,"number",v)}function ve(v,o,c){throw Math.floor(v)!==v?(pe(v,c),new Te.ERR_OUT_OF_RANGE("offset","an integer",v)):o<0?new Te.ERR_BUFFER_OUT_OF_BOUNDS:new Te.ERR_OUT_OF_RANGE("offset",`>= 0 and <= ${o}`,v)}const xe=/[^+/0-9A-Za-z-_]/g;function Oe(v){if(v=v.split("=")[0],v=v.trim().replace(xe,""),v.length<2)return"";for(;v.length%4!==0;)v=v+"=";return v}function qe(v,o){o=o||1/0;let c;const O=v.length;let M=null;const x=[];for(let G=0;G<O;++G){if(c=v.charCodeAt(G),c>55295&&c<57344){if(!M){if(c>56319){(o-=3)>-1&&x.push(239,191,189);continue}else if(G+1===O){(o-=3)>-1&&x.push(239,191,189);continue}M=c;continue}if(c<56320){(o-=3)>-1&&x.push(239,191,189),M=c;continue}c=(M-55296<<10|c-56320)+65536}else M&&(o-=3)>-1&&x.push(239,191,189);if(M=null,c<128){if((o-=1)<0)break;x.push(c)}else if(c<2048){if((o-=2)<0)break;x.push(c>>6|192,c&63|128)}else if(c<65536){if((o-=3)<0)break;x.push(c>>12|224,c>>6&63|128,c&63|128)}else if(c<1114112){if((o-=4)<0)break;x.push(c>>18|240,c>>12&63|128,c>>6&63|128,c&63|128)}else throw new Error("Invalid code point")}return x}function Be(v){const o=[];for(let c=0;c<v.length;++c)o.push(v.charCodeAt(c)&255);return o}function vt(v,o){let c,O,M;const x=[];for(let G=0;G<v.length&&!((o-=2)<0);++G)c=v.charCodeAt(G),O=c>>8,M=c%256,x.push(M),x.push(O);return x}function ot(v){return r.toByteArray(Oe(v))}function Je(v,o,c,O){let M;for(M=0;M<O&&!(M+c>=o.length||M>=v.length);++M)o[M+c]=v[M];return M}function $e(v,o){return v instanceof o||v!=null&&v.constructor!=null&&v.constructor.name!=null&&v.constructor.name===o.name}function et(v){return v!==v}const Ge=(function(){const v="0123456789abcdef",o=new Array(256);for(let c=0;c<16;++c){const O=c*16;for(let M=0;M<16;++M)o[O+M]=v[c]+v[M]}return o})();function ze(v){return typeof BigInt>"u"?yt:v}function yt(){throw new Error("BigInt not supported")}})(bn)),bn}/*! safe-buffer. MIT License. Feross Aboukhadijeh <https://feross.org/opensource> */var Ao;function ar(){return Ao||(Ao=1,(function(n,r){var u=Mr(),l=u.Buffer;function d(p,g){for(var w in p)g[w]=p[w]}l.from&&l.alloc&&l.allocUnsafe&&l.allocUnsafeSlow?n.exports=u:(d(u,r),r.Buffer=y);function y(p,g,w){return l(p,g,w)}y.prototype=Object.create(l.prototype),d(l,y),y.from=function(p,g,w){if(typeof p=="number")throw new TypeError("Argument must not be a number");return l(p,g,w)},y.alloc=function(p,g,w){if(typeof p!="number")throw new TypeError("Argument must be a number");var E=l(p);return g!==void 0?typeof w=="string"?E.fill(g,w):E.fill(g):E.fill(0),E},y.allocUnsafe=function(p){if(typeof p!="number")throw new TypeError("Argument must be a number");return l(p)},y.allocUnsafeSlow=function(p){if(typeof p!="number")throw new TypeError("Argument must be a number");return u.SlowBuffer(p)}})(Pr,Pr.exports)),Pr.exports}const Nf={},Lf=Object.freeze(Object.defineProperty({__proto__:null,default:Nf},Symbol.toStringTag,{value:"Module"})),st=Yi(Lf);var Tn,Ro;function jc(){if(Ro)return Tn;Ro=1;var n=ar().Buffer,r=st,u=st;function l(d){if(this.buffer=null,this.writable=!0,this.readable=!0,!d)return this.buffer=n.alloc(0),this;if(typeof d.pipe=="function")return this.buffer=n.alloc(0),d.pipe(this),this;if(d.length||typeof d=="object")return this.buffer=d,this.writable=!1,process.nextTick((function(){this.emit("end",d),this.readable=!1,this.emit("close")}).bind(this)),this;throw new TypeError("Unexpected data type ("+typeof d+")")}return u.inherits(l,r),l.prototype.write=function(y){this.buffer=n.concat([this.buffer,n.from(y)]),this.emit("data",y)},l.prototype.end=function(y){y&&this.write(y),this.emit("end",y),this.emit("close"),this.writable=!1,this.readable=!1},Tn=l,Tn}var An,Po;function kf(){if(Po)return An;Po=1;function n(l){var d=(l/8|0)+(l%8===0?0:1);return d}var r={ES256:n(256),ES384:n(384),ES512:n(521)};function u(l){var d=r[l];if(d)return d;throw new Error('Unknown algorithm "'+l+'"')}return An=u,An}var Rn,Oo;function Cf(){if(Oo)return Rn;Oo=1;var n=ar().Buffer,r=kf(),u=128,l=0,d=32,y=16,p=2,g=y|d|l<<6,w=p|l<<6;function E(P){return P.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function a(P){if(n.isBuffer(P))return P;if(typeof P=="string")return n.from(P,"base64");throw new TypeError("ECDSA signature must be a Base64 string or a Buffer")}function f(P,S){P=a(P);var R=r(S),I=R+1,A=P.length,L=0;if(P[L++]!==g)throw new Error('Could not find expected "seq"');var B=P[L++];if(B===(u|1)&&(B=P[L++]),A-L<B)throw new Error('"seq" specified length of "'+B+'", only "'+(A-L)+'" remaining');if(P[L++]!==w)throw new Error('Could not find expected "int" for "r"');var V=P[L++];if(A-L-2<V)throw new Error('"r" specified length of "'+V+'", only "'+(A-L-2)+'" available');if(I<V)throw new Error('"r" specified length of "'+V+'", max of "'+I+'" is acceptable');var q=L;if(L+=V,P[L++]!==w)throw new Error('Could not find expected "int" for "s"');var re=P[L++];if(A-L!==re)throw new Error('"s" specified length of "'+re+'", expected "'+(A-L)+'"');if(I<re)throw new Error('"s" specified length of "'+re+'", max of "'+I+'" is acceptable');var W=L;if(L+=re,L!==A)throw new Error('Expected to consume entire buffer, but "'+(A-L)+'" bytes remain');var F=R-V,de=R-re,fe=n.allocUnsafe(F+V+de+re);for(L=0;L<F;++L)fe[L]=0;P.copy(fe,L,q+Math.max(-F,0),q+V),L=R;for(var we=L;L<we+de;++L)fe[L]=0;return P.copy(fe,L,W+Math.max(-de,0),W+re),fe=fe.toString("base64"),fe=E(fe),fe}function _(P,S,R){for(var I=0;S+I<R&&P[S+I]===0;)++I;var A=P[S+I]>=u;return A&&--I,I}function h(P,S){P=a(P);var R=r(S),I=P.length;if(I!==R*2)throw new TypeError('"'+S+'" signatures must be "'+R*2+'" bytes, saw "'+I+'"');var A=_(P,0,R),L=_(P,R,P.length),B=R-A,V=R-L,q=2+B+1+1+V,re=q<u,W=n.allocUnsafe((re?2:3)+q),F=0;return W[F++]=g,re?W[F++]=q:(W[F++]=u|1,W[F++]=q&255),W[F++]=w,W[F++]=B,A<0?(W[F++]=0,F+=P.copy(W,F,0,R)):F+=P.copy(W,F,A,R),W[F++]=w,W[F++]=V,L<0?(W[F++]=0,P.copy(W,F,R)):P.copy(W,F,R+L),W}return Rn={derToJose:f,joseToDer:h},Rn}var Pn,No;function Df(){if(No)return Pn;No=1;var n=Mr().Buffer,r=Mr().SlowBuffer;Pn=u;function u(y,p){if(!n.isBuffer(y)||!n.isBuffer(p)||y.length!==p.length)return!1;for(var g=0,w=0;w<y.length;w++)g|=y[w]^p[w];return g===0}u.install=function(){n.prototype.equal=r.prototype.equal=function(p){return u(this,p)}};var l=n.prototype.equal,d=r.prototype.equal;return u.restore=function(){n.prototype.equal=l,r.prototype.equal=d},Pn}var On,Lo;function qc(){if(Lo)return On;Lo=1;var n=ar().Buffer,r=st,u=Cf(),l=st,d=`"%s" is not a valid algorithm.
  Supported algorithms are:
  "HS256", "HS384", "HS512", "RS256", "RS384", "RS512", "PS256", "PS384", "PS512", "ES256", "ES384", "ES512" and "none".`,y="secret must be a string or buffer",p="key must be a string or a buffer",g="key must be a string, a buffer or an object",w=typeof r.createPublicKey=="function";w&&(p+=" or a KeyObject",y+="or a KeyObject");function E(Q){if(!n.isBuffer(Q)&&typeof Q!="string"&&(!w||typeof Q!="object"||typeof Q.type!="string"||typeof Q.asymmetricKeyType!="string"||typeof Q.export!="function"))throw P(p)}function a(Q){if(!n.isBuffer(Q)&&typeof Q!="string"&&typeof Q!="object")throw P(g)}function f(Q){if(!n.isBuffer(Q)){if(typeof Q=="string")return Q;if(!w||typeof Q!="object"||Q.type!=="secret"||typeof Q.export!="function")throw P(y)}}function _(Q){return Q.replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function h(Q){Q=Q.toString();var he=4-Q.length%4;if(he!==4)for(var ie=0;ie<he;++ie)Q+="=";return Q.replace(/\-/g,"+").replace(/_/g,"/")}function P(Q){var he=[].slice.call(arguments,1),ie=l.format.bind(l,Q).apply(null,he);return new TypeError(ie)}function S(Q){return n.isBuffer(Q)||typeof Q=="string"}function R(Q){return S(Q)||(Q=JSON.stringify(Q)),Q}function I(Q){return function(ie,_e){f(_e),ie=R(ie);var K=r.createHmac("sha"+Q,_e),H=(K.update(ie),K.digest("base64"));return _(H)}}var A,L="timingSafeEqual"in r?function(he,ie){return he.byteLength!==ie.byteLength?!1:r.timingSafeEqual(he,ie)}:function(he,ie){return A||(A=Df()),A(he,ie)};function B(Q){return function(ie,_e,K){var H=I(Q)(ie,K);return L(n.from(_e),n.from(H))}}function V(Q){return function(ie,_e){a(_e),ie=R(ie);var K=r.createSign("RSA-SHA"+Q),H=(K.update(ie),K.sign(_e,"base64"));return _(H)}}function q(Q){return function(ie,_e,K){E(K),ie=R(ie),_e=h(_e);var H=r.createVerify("RSA-SHA"+Q);return H.update(ie),H.verify(K,_e,"base64")}}function re(Q){return function(ie,_e){a(_e),ie=R(ie);var K=r.createSign("RSA-SHA"+Q),H=(K.update(ie),K.sign({key:_e,padding:r.constants.RSA_PKCS1_PSS_PADDING,saltLength:r.constants.RSA_PSS_SALTLEN_DIGEST},"base64"));return _(H)}}function W(Q){return function(ie,_e,K){E(K),ie=R(ie),_e=h(_e);var H=r.createVerify("RSA-SHA"+Q);return H.update(ie),H.verify({key:K,padding:r.constants.RSA_PKCS1_PSS_PADDING,saltLength:r.constants.RSA_PSS_SALTLEN_DIGEST},_e,"base64")}}function F(Q){var he=V(Q);return function(){var _e=he.apply(null,arguments);return _e=u.derToJose(_e,"ES"+Q),_e}}function de(Q){var he=q(Q);return function(_e,K,H){K=u.joseToDer(K,"ES"+Q).toString("base64");var oe=he(_e,K,H);return oe}}function fe(){return function(){return""}}function we(){return function(he,ie){return ie===""}}return On=function(he){var ie={hs:I,rs:V,ps:re,es:F,none:fe},_e={hs:B,rs:q,ps:W,es:de,none:we},K=he.match(/^(RS|PS|ES|HS)(256|384|512)$|^(none)$/);if(!K)throw P(d,he);var H=(K[1]||K[3]).toLowerCase(),oe=K[2];return{sign:ie[H](oe),verify:_e[H](oe)}},On}var Nn,ko;function Vc(){if(ko)return Nn;ko=1;var n=Mr().Buffer;return Nn=function(u){return typeof u=="string"?u:typeof u=="number"||n.isBuffer(u)?u.toString():JSON.stringify(u)},Nn}var Ln,Co;function Mf(){if(Co)return Ln;Co=1;var n=ar().Buffer,r=jc(),u=qc(),l=st,d=Vc(),y=st;function p(a,f){return n.from(a,f).toString("base64").replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function g(a,f,_){_=_||"utf8";var h=p(d(a),"binary"),P=p(d(f),_);return y.format("%s.%s",h,P)}function w(a){var f=a.header,_=a.payload,h=a.secret||a.privateKey,P=a.encoding,S=u(f.alg),R=g(f,_,P),I=S.sign(R,h);return y.format("%s.%s",R,I)}function E(a){var f=a.secret;if(f=f??a.privateKey,f=f??a.key,/^hs/i.test(a.header.alg)===!0&&f==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var _=new r(f);this.readable=!0,this.header=a.header,this.encoding=a.encoding,this.secret=this.privateKey=this.key=_,this.payload=new r(a.payload),this.secret.once("close",(function(){!this.payload.writable&&this.readable&&this.sign()}).bind(this)),this.payload.once("close",(function(){!this.secret.writable&&this.readable&&this.sign()}).bind(this))}return y.inherits(E,l),E.prototype.sign=function(){try{var f=w({header:this.header,payload:this.payload.buffer,secret:this.secret.buffer,encoding:this.encoding});return this.emit("done",f),this.emit("data",f),this.emit("end"),this.readable=!1,f}catch(_){this.readable=!1,this.emit("error",_),this.emit("close")}},E.sign=w,Ln=E,Ln}var kn,Do;function Uf(){if(Do)return kn;Do=1;var n=ar().Buffer,r=jc(),u=qc(),l=st,d=Vc(),y=st,p=/^[a-zA-Z0-9\-_]+?\.[a-zA-Z0-9\-_]+?\.([a-zA-Z0-9\-_]+)?$/;function g(I){return Object.prototype.toString.call(I)==="[object Object]"}function w(I){if(g(I))return I;try{return JSON.parse(I)}catch{return}}function E(I){var A=I.split(".",1)[0];return w(n.from(A,"base64").toString("binary"))}function a(I){return I.split(".",2).join(".")}function f(I){return I.split(".")[2]}function _(I,A){A=A||"utf8";var L=I.split(".")[1];return n.from(L,"base64").toString(A)}function h(I){return p.test(I)&&!!E(I)}function P(I,A,L){if(!A){var B=new Error("Missing algorithm parameter for jws.verify");throw B.code="MISSING_ALGORITHM",B}I=d(I);var V=f(I),q=a(I),re=u(A);return re.verify(q,V,L)}function S(I,A){if(A=A||{},I=d(I),!h(I))return null;var L=E(I);if(!L)return null;var B=_(I);return(L.typ==="JWT"||A.json)&&(B=JSON.parse(B,A.encoding)),{header:L,payload:B,signature:f(I)}}function R(I){I=I||{};var A=I.secret;if(A=A??I.publicKey,A=A??I.key,/^hs/i.test(I.algorithm)===!0&&A==null)throw new TypeError("secret must be a string or buffer or a KeyObject");var L=new r(A);this.readable=!0,this.algorithm=I.algorithm,this.encoding=I.encoding,this.secret=this.publicKey=this.key=L,this.signature=new r(I.signature),this.secret.once("close",(function(){!this.signature.writable&&this.readable&&this.verify()}).bind(this)),this.signature.once("close",(function(){!this.secret.writable&&this.readable&&this.verify()}).bind(this))}return y.inherits(R,l),R.prototype.verify=function(){try{var A=P(this.signature.buffer,this.algorithm,this.key.buffer),L=S(this.signature.buffer,this.encoding);return this.emit("done",A,L),this.emit("data",A),this.emit("end"),this.readable=!1,A}catch(B){this.readable=!1,this.emit("error",B),this.emit("close")}},R.decode=S,R.isValid=h,R.verify=P,kn=R,kn}var Mo;function rs(){if(Mo)return gt;Mo=1;var n=Mf(),r=Uf(),u=["HS256","HS384","HS512","RS256","RS384","RS512","PS256","PS384","PS512","ES256","ES384","ES512"];return gt.ALGORITHMS=u,gt.sign=n.sign,gt.verify=r.verify,gt.decode=r.decode,gt.isValid=r.isValid,gt.createSign=function(d){return new n(d)},gt.createVerify=function(d){return new r(d)},gt}var Cn,Uo;function Wc(){if(Uo)return Cn;Uo=1;var n=rs();return Cn=function(r,u){u=u||{};var l=n.decode(r,u);if(!l)return null;var d=l.payload;if(typeof d=="string")try{var y=JSON.parse(d);y!==null&&typeof y=="object"&&(d=y)}catch{}return u.complete===!0?{header:l.header,payload:d,signature:l.signature}:d},Cn}var Dn,Fo;function Br(){if(Fo)return Dn;Fo=1;var n=function(r,u){Error.call(this,r),Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor),this.name="JsonWebTokenError",this.message=r,u&&(this.inner=u)};return n.prototype=Object.create(Error.prototype),n.prototype.constructor=n,Dn=n,Dn}var Mn,xo;function Hc(){if(xo)return Mn;xo=1;var n=Br(),r=function(u,l){n.call(this,u),this.name="NotBeforeError",this.date=l};return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,Mn=r,Mn}var Un,Bo;function Gc(){if(Bo)return Un;Bo=1;var n=Br(),r=function(u,l){n.call(this,u),this.name="TokenExpiredError",this.expiredAt=l};return r.prototype=Object.create(n.prototype),r.prototype.constructor=r,Un=r,Un}var Fn,$o;function Ff(){if($o)return Fn;$o=1;var n=1e3,r=n*60,u=r*60,l=u*24,d=l*7,y=l*365.25;Fn=function(a,f){f=f||{};var _=typeof a;if(_==="string"&&a.length>0)return p(a);if(_==="number"&&isFinite(a))return f.long?w(a):g(a);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(a))};function p(a){if(a=String(a),!(a.length>100)){var f=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(a);if(f){var _=parseFloat(f[1]),h=(f[2]||"ms").toLowerCase();switch(h){case"years":case"year":case"yrs":case"yr":case"y":return _*y;case"weeks":case"week":case"w":return _*d;case"days":case"day":case"d":return _*l;case"hours":case"hour":case"hrs":case"hr":case"h":return _*u;case"minutes":case"minute":case"mins":case"min":case"m":return _*r;case"seconds":case"second":case"secs":case"sec":case"s":return _*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return _;default:return}}}}function g(a){var f=Math.abs(a);return f>=l?Math.round(a/l)+"d":f>=u?Math.round(a/u)+"h":f>=r?Math.round(a/r)+"m":f>=n?Math.round(a/n)+"s":a+"ms"}function w(a){var f=Math.abs(a);return f>=l?E(a,f,l,"day"):f>=u?E(a,f,u,"hour"):f>=r?E(a,f,r,"minute"):f>=n?E(a,f,n,"second"):a+" ms"}function E(a,f,_,h){var P=f>=_*1.5;return Math.round(a/_)+" "+h+(P?"s":"")}return Fn}var xn,jo;function zc(){if(jo)return xn;jo=1;var n=Ff();return xn=function(r,u){var l=u||Math.floor(Date.now()/1e3);if(typeof r=="string"){var d=n(r);return typeof d>"u"?void 0:Math.floor(l+d/1e3)}else return typeof r=="number"?l+r:void 0},xn}var Nr={exports:{}},Bn,qo;function cr(){if(qo)return Bn;qo=1;const n="2.0.0",r=256,u=Number.MAX_SAFE_INTEGER||9007199254740991,l=16,d=r-6;return Bn={MAX_LENGTH:r,MAX_SAFE_COMPONENT_LENGTH:l,MAX_SAFE_BUILD_LENGTH:d,MAX_SAFE_INTEGER:u,RELEASE_TYPES:["major","premajor","minor","preminor","patch","prepatch","prerelease"],SEMVER_SPEC_VERSION:n,FLAG_INCLUDE_PRERELEASE:1,FLAG_LOOSE:2},Bn}var $n,Vo;function $r(){if(Vo)return $n;Vo=1;var n={};return $n=typeof process=="object"&&n&&n.NODE_DEBUG&&/\bsemver\b/i.test(n.NODE_DEBUG)?(...u)=>console.error("SEMVER",...u):()=>{},$n}var Wo;function ur(){return Wo||(Wo=1,(function(n,r){const{MAX_SAFE_COMPONENT_LENGTH:u,MAX_SAFE_BUILD_LENGTH:l,MAX_LENGTH:d}=cr(),y=$r();r=n.exports={};const p=r.re=[],g=r.safeRe=[],w=r.src=[],E=r.safeSrc=[],a=r.t={};let f=0;const _="[a-zA-Z0-9-]",h=[["\\s",1],["\\d",d],[_,l]],P=R=>{for(const[I,A]of h)R=R.split(`${I}*`).join(`${I}{0,${A}}`).split(`${I}+`).join(`${I}{1,${A}}`);return R},S=(R,I,A)=>{const L=P(I),B=f++;y(R,B,I),a[R]=B,w[B]=I,E[B]=L,p[B]=new RegExp(I,A?"g":void 0),g[B]=new RegExp(L,A?"g":void 0)};S("NUMERICIDENTIFIER","0|[1-9]\\d*"),S("NUMERICIDENTIFIERLOOSE","\\d+"),S("NONNUMERICIDENTIFIER",`\\d*[a-zA-Z-]${_}*`),S("MAINVERSION",`(${w[a.NUMERICIDENTIFIER]})\\.(${w[a.NUMERICIDENTIFIER]})\\.(${w[a.NUMERICIDENTIFIER]})`),S("MAINVERSIONLOOSE",`(${w[a.NUMERICIDENTIFIERLOOSE]})\\.(${w[a.NUMERICIDENTIFIERLOOSE]})\\.(${w[a.NUMERICIDENTIFIERLOOSE]})`),S("PRERELEASEIDENTIFIER",`(?:${w[a.NONNUMERICIDENTIFIER]}|${w[a.NUMERICIDENTIFIER]})`),S("PRERELEASEIDENTIFIERLOOSE",`(?:${w[a.NONNUMERICIDENTIFIER]}|${w[a.NUMERICIDENTIFIERLOOSE]})`),S("PRERELEASE",`(?:-(${w[a.PRERELEASEIDENTIFIER]}(?:\\.${w[a.PRERELEASEIDENTIFIER]})*))`),S("PRERELEASELOOSE",`(?:-?(${w[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${w[a.PRERELEASEIDENTIFIERLOOSE]})*))`),S("BUILDIDENTIFIER",`${_}+`),S("BUILD",`(?:\\+(${w[a.BUILDIDENTIFIER]}(?:\\.${w[a.BUILDIDENTIFIER]})*))`),S("FULLPLAIN",`v?${w[a.MAINVERSION]}${w[a.PRERELEASE]}?${w[a.BUILD]}?`),S("FULL",`^${w[a.FULLPLAIN]}$`),S("LOOSEPLAIN",`[v=\\s]*${w[a.MAINVERSIONLOOSE]}${w[a.PRERELEASELOOSE]}?${w[a.BUILD]}?`),S("LOOSE",`^${w[a.LOOSEPLAIN]}$`),S("GTLT","((?:<|>)?=?)"),S("XRANGEIDENTIFIERLOOSE",`${w[a.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`),S("XRANGEIDENTIFIER",`${w[a.NUMERICIDENTIFIER]}|x|X|\\*`),S("XRANGEPLAIN",`[v=\\s]*(${w[a.XRANGEIDENTIFIER]})(?:\\.(${w[a.XRANGEIDENTIFIER]})(?:\\.(${w[a.XRANGEIDENTIFIER]})(?:${w[a.PRERELEASE]})?${w[a.BUILD]}?)?)?`),S("XRANGEPLAINLOOSE",`[v=\\s]*(${w[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${w[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${w[a.XRANGEIDENTIFIERLOOSE]})(?:${w[a.PRERELEASELOOSE]})?${w[a.BUILD]}?)?)?`),S("XRANGE",`^${w[a.GTLT]}\\s*${w[a.XRANGEPLAIN]}$`),S("XRANGELOOSE",`^${w[a.GTLT]}\\s*${w[a.XRANGEPLAINLOOSE]}$`),S("COERCEPLAIN",`(^|[^\\d])(\\d{1,${u}})(?:\\.(\\d{1,${u}}))?(?:\\.(\\d{1,${u}}))?`),S("COERCE",`${w[a.COERCEPLAIN]}(?:$|[^\\d])`),S("COERCEFULL",w[a.COERCEPLAIN]+`(?:${w[a.PRERELEASE]})?(?:${w[a.BUILD]})?(?:$|[^\\d])`),S("COERCERTL",w[a.COERCE],!0),S("COERCERTLFULL",w[a.COERCEFULL],!0),S("LONETILDE","(?:~>?)"),S("TILDETRIM",`(\\s*)${w[a.LONETILDE]}\\s+`,!0),r.tildeTrimReplace="$1~",S("TILDE",`^${w[a.LONETILDE]}${w[a.XRANGEPLAIN]}$`),S("TILDELOOSE",`^${w[a.LONETILDE]}${w[a.XRANGEPLAINLOOSE]}$`),S("LONECARET","(?:\\^)"),S("CARETTRIM",`(\\s*)${w[a.LONECARET]}\\s+`,!0),r.caretTrimReplace="$1^",S("CARET",`^${w[a.LONECARET]}${w[a.XRANGEPLAIN]}$`),S("CARETLOOSE",`^${w[a.LONECARET]}${w[a.XRANGEPLAINLOOSE]}$`),S("COMPARATORLOOSE",`^${w[a.GTLT]}\\s*(${w[a.LOOSEPLAIN]})$|^$`),S("COMPARATOR",`^${w[a.GTLT]}\\s*(${w[a.FULLPLAIN]})$|^$`),S("COMPARATORTRIM",`(\\s*)${w[a.GTLT]}\\s*(${w[a.LOOSEPLAIN]}|${w[a.XRANGEPLAIN]})`,!0),r.comparatorTrimReplace="$1$2$3",S("HYPHENRANGE",`^\\s*(${w[a.XRANGEPLAIN]})\\s+-\\s+(${w[a.XRANGEPLAIN]})\\s*$`),S("HYPHENRANGELOOSE",`^\\s*(${w[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${w[a.XRANGEPLAINLOOSE]})\\s*$`),S("STAR","(<|>)?=?\\s*\\*"),S("GTE0","^\\s*>=\\s*0\\.0\\.0\\s*$"),S("GTE0PRE","^\\s*>=\\s*0\\.0\\.0-0\\s*$")})(Nr,Nr.exports)),Nr.exports}var jn,Ho;function ns(){if(Ho)return jn;Ho=1;const n=Object.freeze({loose:!0}),r=Object.freeze({});return jn=l=>l?typeof l!="object"?n:l:r,jn}var qn,Go;function Kc(){if(Go)return qn;Go=1;const n=/^[0-9]+$/,r=(l,d)=>{if(typeof l=="number"&&typeof d=="number")return l===d?0:l<d?-1:1;const y=n.test(l),p=n.test(d);return y&&p&&(l=+l,d=+d),l===d?0:y&&!p?-1:p&&!y?1:l<d?-1:1};return qn={compareIdentifiers:r,rcompareIdentifiers:(l,d)=>r(d,l)},qn}var Vn,zo;function He(){if(zo)return Vn;zo=1;const n=$r(),{MAX_LENGTH:r,MAX_SAFE_INTEGER:u}=cr(),{safeRe:l,t:d}=ur(),y=ns(),{compareIdentifiers:p}=Kc(),g=(E,a)=>{const f=a.split(".");if(f.length>E.length)return!1;for(let _=0;_<f.length;_++)if(p(E[_],f[_])!==0)return!1;return!0};class w{constructor(a,f){if(f=y(f),a instanceof w){if(a.loose===!!f.loose&&a.includePrerelease===!!f.includePrerelease)return a;a=a.version}else if(typeof a!="string")throw new TypeError(`Invalid version. Must be a string. Got type "${typeof a}".`);if(a.length>r)throw new TypeError(`version is longer than ${r} characters`);n("SemVer",a,f),this.options=f,this.loose=!!f.loose,this.includePrerelease=!!f.includePrerelease;const _=a.trim().match(f.loose?l[d.LOOSE]:l[d.FULL]);if(!_)throw new TypeError(`Invalid Version: ${a}`);if(this.raw=a,this.major=+_[1],this.minor=+_[2],this.patch=+_[3],this.major>u||this.major<0)throw new TypeError("Invalid major version");if(this.minor>u||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>u||this.patch<0)throw new TypeError("Invalid patch version");_[4]?this.prerelease=_[4].split(".").map(h=>{if(/^[0-9]+$/.test(h)){const P=+h;if(P>=0&&P<u)return P}return h}):this.prerelease=[],this.build=_[5]?_[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+=`-${this.prerelease.join(".")}`),this.version}toString(){return this.version}compare(a){if(n("SemVer.compare",this.version,this.options,a),!(a instanceof w)){if(typeof a=="string"&&a===this.version)return 0;a=new w(a,this.options)}return a.version===this.version?0:this.compareMain(a)||this.comparePre(a)}compareMain(a){return a instanceof w||(a=new w(a,this.options)),this.major<a.major?-1:this.major>a.major?1:this.minor<a.minor?-1:this.minor>a.minor?1:this.patch<a.patch?-1:this.patch>a.patch?1:0}comparePre(a){if(a instanceof w||(a=new w(a,this.options)),this.prerelease.length&&!a.prerelease.length)return-1;if(!this.prerelease.length&&a.prerelease.length)return 1;if(!this.prerelease.length&&!a.prerelease.length)return 0;let f=0;do{const _=this.prerelease[f],h=a.prerelease[f];if(n("prerelease compare",f,_,h),_===void 0&&h===void 0)return 0;if(h===void 0)return 1;if(_===void 0)return-1;if(_===h)continue;return p(_,h)}while(++f)}compareBuild(a){a instanceof w||(a=new w(a,this.options));let f=0;do{const _=this.build[f],h=a.build[f];if(n("build compare",f,_,h),_===void 0&&h===void 0)return 0;if(h===void 0)return 1;if(_===void 0)return-1;if(_===h)continue;return p(_,h)}while(++f)}inc(a,f,_){if(a.startsWith("pre")){if(!f&&_===!1)throw new Error("invalid increment argument: identifier is empty");if(f){const h=`-${f}`.match(this.options.loose?l[d.PRERELEASELOOSE]:l[d.PRERELEASE]);if(!h||h[1]!==f)throw new Error(`invalid identifier: ${f}`)}}switch(a){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",f,_);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",f,_);break;case"prepatch":this.prerelease.length=0,this.inc("patch",f,_),this.inc("pre",f,_);break;case"prerelease":this.prerelease.length===0&&this.inc("patch",f,_),this.inc("pre",f,_);break;case"release":if(this.prerelease.length===0)throw new Error(`version ${this.raw} is not a prerelease`);this.prerelease.length=0;break;case"major":(this.minor!==0||this.patch!==0||this.prerelease.length===0)&&this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":(this.patch!==0||this.prerelease.length===0)&&this.minor++,this.patch=0,this.prerelease=[];break;case"patch":this.prerelease.length===0&&this.patch++,this.prerelease=[];break;case"pre":{const h=Number(_)?1:0;if(this.prerelease.length===0)this.prerelease=[h];else{let P=this.prerelease.length;for(;--P>=0;)typeof this.prerelease[P]=="number"&&(this.prerelease[P]++,P=-2);if(P===-1){if(f===this.prerelease.join(".")&&_===!1)throw new Error("invalid increment argument: identifier already exists");this.prerelease.push(h)}}if(f){let P=[f,h];if(_===!1&&(P=[f]),g(this.prerelease,f)){const S=this.prerelease[f.split(".").length];isNaN(S)&&(this.prerelease=P)}else this.prerelease=P}break}default:throw new Error(`invalid increment argument: ${a}`)}return this.raw=this.format(),this.build.length&&(this.raw+=`+${this.build.join(".")}`),this}}return Vn=w,Vn}var Wn,Ko;function Pt(){if(Ko)return Wn;Ko=1;const n=He();return Wn=(u,l,d=!1)=>{if(u instanceof n)return u;try{return new n(u,l)}catch(y){if(!d)return null;throw y}},Wn}var Hn,Jo;function xf(){if(Jo)return Hn;Jo=1;const n=Pt();return Hn=(u,l)=>{const d=n(u,l);return d?d.version:null},Hn}var Gn,Yo;function Bf(){if(Yo)return Gn;Yo=1;const n=Pt();return Gn=(u,l)=>{const d=n(u.trim().replace(/^[=v]+/,""),l);return d?d.version:null},Gn}var zn,Xo;function $f(){if(Xo)return zn;Xo=1;const n=He();return zn=(u,l,d,y,p)=>{typeof d=="string"&&(p=y,y=d,d=void 0);try{return new n(u instanceof n?u.version:u,d).inc(l,y,p).version}catch{return null}},zn}var Kn,Qo;function jf(){if(Qo)return Kn;Qo=1;const n=Pt();return Kn=(u,l)=>{const d=n(u,null,!0),y=n(l,null,!0),p=d.compare(y);if(p===0)return null;const g=p>0,w=g?d:y,E=g?y:d,a=!!w.prerelease.length;if(!!E.prerelease.length&&!a){if(!E.patch&&!E.minor)return"major";if(E.compareMain(w)===0)return E.minor&&!E.patch?"minor":"patch"}const _=a?"pre":"";return d.major!==y.major?_+"major":d.minor!==y.minor?_+"minor":d.patch!==y.patch?_+"patch":"prerelease"},Kn}var Jn,Zo;function qf(){if(Zo)return Jn;Zo=1;const n=He();return Jn=(u,l)=>new n(u,l).major,Jn}var Yn,ea;function Vf(){if(ea)return Yn;ea=1;const n=He();return Yn=(u,l)=>new n(u,l).minor,Yn}var Xn,ta;function Wf(){if(ta)return Xn;ta=1;const n=He();return Xn=(u,l)=>new n(u,l).patch,Xn}var Qn,ra;function Hf(){if(ra)return Qn;ra=1;const n=Pt();return Qn=(u,l)=>{const d=n(u,l);return d&&d.prerelease.length?d.prerelease:null},Qn}var Zn,na;function Qe(){if(na)return Zn;na=1;const n=He();return Zn=(u,l,d)=>new n(u,d).compare(new n(l,d)),Zn}var ei,ia;function Gf(){if(ia)return ei;ia=1;const n=Qe();return ei=(u,l,d)=>n(l,u,d),ei}var ti,sa;function zf(){if(sa)return ti;sa=1;const n=Qe();return ti=(u,l)=>n(u,l,!0),ti}var ri,oa;function is(){if(oa)return ri;oa=1;const n=He();return ri=(u,l,d)=>{const y=new n(u,d),p=new n(l,d);return y.compare(p)||y.compareBuild(p)},ri}var ni,aa;function Kf(){if(aa)return ni;aa=1;const n=is();return ni=(u,l)=>u.sort((d,y)=>n(d,y,l)),ni}var ii,ca;function Jf(){if(ca)return ii;ca=1;const n=is();return ii=(u,l)=>u.sort((d,y)=>n(y,d,l)),ii}var si,ua;function jr(){if(ua)return si;ua=1;const n=Qe();return si=(u,l,d)=>n(u,l,d)>0,si}var oi,la;function ss(){if(la)return oi;la=1;const n=Qe();return oi=(u,l,d)=>n(u,l,d)<0,oi}var ai,da;function Jc(){if(da)return ai;da=1;const n=Qe();return ai=(u,l,d)=>n(u,l,d)===0,ai}var ci,fa;function Yc(){if(fa)return ci;fa=1;const n=Qe();return ci=(u,l,d)=>n(u,l,d)!==0,ci}var ui,ha;function os(){if(ha)return ui;ha=1;const n=Qe();return ui=(u,l,d)=>n(u,l,d)>=0,ui}var li,pa;function as(){if(pa)return li;pa=1;const n=Qe();return li=(u,l,d)=>n(u,l,d)<=0,li}var di,ma;function Xc(){if(ma)return di;ma=1;const n=Jc(),r=Yc(),u=jr(),l=os(),d=ss(),y=as();return di=(g,w,E,a)=>{switch(w){case"===":return typeof g=="object"&&(g=g.version),typeof E=="object"&&(E=E.version),g===E;case"!==":return typeof g=="object"&&(g=g.version),typeof E=="object"&&(E=E.version),g!==E;case"":case"=":case"==":return n(g,E,a);case"!=":return r(g,E,a);case">":return u(g,E,a);case">=":return l(g,E,a);case"<":return d(g,E,a);case"<=":return y(g,E,a);default:throw new TypeError(`Invalid operator: ${w}`)}},di}var fi,ga;function Yf(){if(ga)return fi;ga=1;const n=He(),r=Pt(),{safeRe:u,t:l}=ur();return fi=(y,p)=>{if(y instanceof n)return y;if(typeof y=="number"&&(y=String(y)),typeof y!="string")return null;p=p||{};let g=null;if(!p.rtl)g=y.match(p.includePrerelease?u[l.COERCEFULL]:u[l.COERCE]);else{const h=p.includePrerelease?u[l.COERCERTLFULL]:u[l.COERCERTL];let P;for(;(P=h.exec(y))&&(!g||g.index+g[0].length!==y.length);)(!g||P.index+P[0].length!==g.index+g[0].length)&&(g=P),h.lastIndex=P.index+P[1].length+P[2].length;h.lastIndex=-1}if(g===null)return null;const w=g[2],E=g[3]||"0",a=g[4]||"0",f=p.includePrerelease&&g[5]?`-${g[5]}`:"",_=p.includePrerelease&&g[6]?`+${g[6]}`:"";return r(`${w}.${E}.${a}${f}${_}`,p)},fi}var hi,va;function Xf(){if(va)return hi;va=1;const n=Pt(),r=cr(),u=He(),l=(g,w,E)=>{if(!r.RELEASE_TYPES.includes(w))return null;const a=d(g,E);return a&&y(a,w)},d=(g,w)=>{const E=g instanceof u?g.version:g;return n(E,w)},y=(g,w)=>{if(p(w))return g.version;switch(g.prerelease=[],w){case"major":g.minor=0,g.patch=0;break;case"minor":g.patch=0;break}return g.format()},p=g=>g.startsWith("pre");return hi=l,hi}var pi,ya;function Qf(){if(ya)return pi;ya=1;class n{constructor(){this.max=1e3,this.map=new Map}get(u){const l=this.map.get(u);if(l!==void 0)return this.map.delete(u),this.map.set(u,l),l}delete(u){return this.map.delete(u)}set(u,l){if(!this.delete(u)&&l!==void 0){if(this.map.size>=this.max){const y=this.map.keys().next().value;this.delete(y)}this.map.set(u,l)}return this}}return pi=n,pi}var mi,_a;function Ze(){if(_a)return mi;_a=1;const n=/\s+/g;class r{constructor(H,oe){if(oe=d(oe),H instanceof r)return H.loose===!!oe.loose&&H.includePrerelease===!!oe.includePrerelease?H:new r(H.raw,oe);if(H instanceof y)return this.raw=H.value,this.set=[[H]],this.formatted=void 0,this;if(this.options=oe,this.loose=!!oe.loose,this.includePrerelease=!!oe.includePrerelease,this.raw=H.trim().replace(n," "),this.set=this.raw.split("||").map(ue=>this.parseRange(ue.trim())).filter(ue=>ue.length),!this.set.length)throw new TypeError(`Invalid SemVer Range: ${this.raw}`);if(this.set.length>1){const ue=this.set[0];if(this.set=this.set.filter(ae=>!I(ae[0])),this.set.length===0)this.set=[ue];else if(this.set.length>1){for(const ae of this.set)if(ae.length===1&&A(ae[0])){this.set=[ae];break}}}this.formatted=void 0}get range(){if(this.formatted===void 0){this.formatted="";for(let H=0;H<this.set.length;H++){H>0&&(this.formatted+="||");const oe=this.set[H];for(let ue=0;ue<oe.length;ue++)ue>0&&(this.formatted+=" "),this.formatted+=oe[ue].toString().trim()}}return this.formatted}format(){return this.range}toString(){return this.range}parseRange(H){H=H.replace(R,"");const ue=((this.options.includePrerelease&&P)|(this.options.loose&&S))+":"+H,ae=l.get(ue);if(ae)return ae;const j=this.options.loose,te=j?w[a.HYPHENRANGELOOSE]:w[a.HYPHENRANGE];H=H.replace(te,ie(this.options.includePrerelease)),p("hyphen replace",H),H=H.replace(w[a.COMPARATORTRIM],f),p("comparator trim",H),H=H.replace(w[a.TILDETRIM],_),p("tilde trim",H),H=H.replace(w[a.CARETTRIM],h),p("caret trim",H);let Ee=H.split(" ").map(Te=>B(Te,this.options)).join(" ").split(/\s+/).map(Te=>he(Te,this.options));j&&(Ee=Ee.filter(Te=>(p("loose invalid filter",Te,this.options),!!Te.match(w[a.COMPARATORLOOSE])))),p("range list",Ee);const le=new Map,ye=Ee.map(Te=>new y(Te,this.options));for(const Te of ye){if(I(Te))return[Te];le.set(Te.value,Te)}le.size>1&&le.has("")&&le.delete("");const Le=[...le.values()];return l.set(ue,Le),Le}intersects(H,oe){if(!(H instanceof r))throw new TypeError("a Range is required");return this.set.some(ue=>L(ue,oe)&&H.set.some(ae=>L(ae,oe)&&ue.every(j=>ae.every(te=>j.intersects(te,oe)))))}test(H){if(!H)return!1;if(typeof H=="string")try{H=new g(H,this.options)}catch{return!1}for(let oe=0;oe<this.set.length;oe++)if(_e(this.set[oe],H,this.options))return!0;return!1}}mi=r;const u=Qf(),l=new u,d=ns(),y=qr(),p=$r(),g=He(),{safeRe:w,src:E,t:a,comparatorTrimReplace:f,tildeTrimReplace:_,caretTrimReplace:h}=ur(),{FLAG_INCLUDE_PRERELEASE:P,FLAG_LOOSE:S}=cr(),R=new RegExp(E[a.BUILD],"g"),I=K=>K.value==="<0.0.0-0",A=K=>K.value==="",L=(K,H)=>{let oe=!0;const ue=K.slice();let ae=ue.pop();for(;oe&&ue.length;)oe=ue.every(j=>ae.intersects(j,H)),ae=ue.pop();return oe},B=(K,H)=>(K=K.replace(w[a.BUILD],""),p("comp",K,H),K=F(K,H),p("caret",K),K=re(K,H),p("tildes",K),K=fe(K,H),p("xrange",K),K=Q(K,H),p("stars",K),K),V=K=>!K||K.toLowerCase()==="x"||K==="*",q=(K,H,oe)=>V(K)&&!V(H)||V(H)&&oe&&!V(oe),re=(K,H)=>K.trim().split(/\s+/).map(oe=>W(oe,H)).join(" "),W=(K,H)=>{const oe=H.loose?w[a.TILDELOOSE]:w[a.TILDE],ue=H.includePrerelease?"-0":"";return K.replace(oe,(ae,j,te,Ee,le)=>{p("tilde",K,ae,j,te,Ee,le);let ye;return V(j)?ye="":V(te)?ye=`>=${j}.0.0${ue} <${+j+1}.0.0-0`:V(Ee)?ye=`>=${j}.${te}.0${ue} <${j}.${+te+1}.0-0`:le?(p("replaceTilde pr",le),ye=`>=${j}.${te}.${Ee}-${le} <${j}.${+te+1}.0-0`):ye=`>=${j}.${te}.${Ee} <${j}.${+te+1}.0-0`,p("tilde return",ye),ye})},F=(K,H)=>K.trim().split(/\s+/).map(oe=>de(oe,H)).join(" "),de=(K,H)=>{p("caret",K,H);const oe=H.loose?w[a.CARETLOOSE]:w[a.CARET],ue=H.includePrerelease?"-0":"";return K.replace(oe,(ae,j,te,Ee,le)=>{p("caret",K,ae,j,te,Ee,le);let ye;return V(j)?ye="":V(te)?ye=`>=${j}.0.0${ue} <${+j+1}.0.0-0`:V(Ee)?j==="0"?ye=`>=${j}.${te}.0${ue} <${j}.${+te+1}.0-0`:ye=`>=${j}.${te}.0${ue} <${+j+1}.0.0-0`:le?(p("replaceCaret pr",le),j==="0"?te==="0"?ye=`>=${j}.${te}.${Ee}-${le} <${j}.${te}.${+Ee+1}-0`:ye=`>=${j}.${te}.${Ee}-${le} <${j}.${+te+1}.0-0`:ye=`>=${j}.${te}.${Ee}-${le} <${+j+1}.0.0-0`):(p("no pr"),j==="0"?te==="0"?ye=`>=${j}.${te}.${Ee} <${j}.${te}.${+Ee+1}-0`:ye=`>=${j}.${te}.${Ee} <${j}.${+te+1}.0-0`:ye=`>=${j}.${te}.${Ee} <${+j+1}.0.0-0`),p("caret return",ye),ye})},fe=(K,H)=>(p("replaceXRanges",K,H),K.split(/\s+/).map(oe=>we(oe,H)).join(" ")),we=(K,H)=>{K=K.trim();const oe=H.loose?w[a.XRANGELOOSE]:w[a.XRANGE];return K.replace(oe,(ue,ae,j,te,Ee,le)=>{if(p("xRange",K,ue,ae,j,te,Ee,le),q(j,te,Ee))return K;const ye=V(j),Le=ye||V(te),Te=Le||V(Ee),Ue=Te;return ae==="="&&Ue&&(ae=""),le=H.includePrerelease?"-0":"",ye?ae===">"||ae==="<"?ue="<0.0.0-0":ue="*":ae&&Ue?(Le&&(te=0),Ee=0,ae===">"?(ae=">=",Le?(j=+j+1,te=0,Ee=0):(te=+te+1,Ee=0)):ae==="<="&&(ae="<",Le?j=+j+1:te=+te+1),ae==="<"&&(le="-0"),ue=`${ae+j}.${te}.${Ee}${le}`):Le?ue=`>=${j}.0.0${le} <${+j+1}.0.0-0`:Te&&(ue=`>=${j}.${te}.0${le} <${j}.${+te+1}.0-0`),p("xRange return",ue),ue})},Q=(K,H)=>(p("replaceStars",K,H),K.trim().replace(w[a.STAR],"")),he=(K,H)=>(p("replaceGTE0",K,H),K.trim().replace(w[H.includePrerelease?a.GTE0PRE:a.GTE0],"")),ie=K=>(H,oe,ue,ae,j,te,Ee,le,ye,Le,Te,Ue)=>(V(ue)?oe="":V(ae)?oe=`>=${ue}.0.0${K?"-0":""}`:V(j)?oe=`>=${ue}.${ae}.0${K?"-0":""}`:te?oe=`>=${oe}`:oe=`>=${oe}${K?"-0":""}`,V(ye)?le="":V(Le)?le=`<${+ye+1}.0.0-0`:V(Te)?le=`<${ye}.${+Le+1}.0-0`:Ue?le=`<=${ye}.${Le}.${Te}-${Ue}`:K?le=`<${ye}.${Le}.${+Te+1}-0`:le=`<=${le}`,`${oe} ${le}`.trim()),_e=(K,H,oe)=>{for(let ue=0;ue<K.length;ue++)if(!K[ue].test(H))return!1;if(H.prerelease.length&&!oe.includePrerelease){for(let ue=0;ue<K.length;ue++)if(p(K[ue].semver),K[ue].semver!==y.ANY&&K[ue].semver.prerelease.length>0){const ae=K[ue].semver;if(ae.major===H.major&&ae.minor===H.minor&&ae.patch===H.patch)return!0}return!1}return!0};return mi}var gi,Ia;function qr(){if(Ia)return gi;Ia=1;const n=Symbol("SemVer ANY");class r{static get ANY(){return n}constructor(a,f){if(f=u(f),a instanceof r){if(a.loose===!!f.loose)return a;a=a.value}a=a.trim().split(/\s+/).join(" "),p("comparator",a,f),this.options=f,this.loose=!!f.loose,this.parse(a),this.semver===n?this.value="":this.value=this.operator+this.semver.version,p("comp",this)}parse(a){const f=this.options.loose?l[d.COMPARATORLOOSE]:l[d.COMPARATOR],_=a.match(f);if(!_)throw new TypeError(`Invalid comparator: ${a}`);this.operator=_[1]!==void 0?_[1]:"",this.operator==="="&&(this.operator=""),_[2]?this.semver=new g(_[2],this.options.loose):this.semver=n}toString(){return this.value}test(a){if(p("Comparator.test",a,this.options.loose),this.semver===n||a===n)return!0;if(typeof a=="string")try{a=new g(a,this.options)}catch{return!1}return y(a,this.operator,this.semver,this.options)}intersects(a,f){if(!(a instanceof r))throw new TypeError("a Comparator is required");return this.operator===""?this.value===""?!0:new w(a.value,f).test(this.value):a.operator===""?a.value===""?!0:new w(this.value,f).test(a.semver):(f=u(f),f.includePrerelease&&(this.value==="<0.0.0-0"||a.value==="<0.0.0-0")||!f.includePrerelease&&(this.value.startsWith("<0.0.0")||a.value.startsWith("<0.0.0"))?!1:!!(this.operator.startsWith(">")&&a.operator.startsWith(">")||this.operator.startsWith("<")&&a.operator.startsWith("<")||this.semver.version===a.semver.version&&this.operator.includes("=")&&a.operator.includes("=")||y(this.semver,"<",a.semver,f)&&this.operator.startsWith(">")&&a.operator.startsWith("<")||y(this.semver,">",a.semver,f)&&this.operator.startsWith("<")&&a.operator.startsWith(">")))}}gi=r;const u=ns(),{safeRe:l,t:d}=ur(),y=Xc(),p=$r(),g=He(),w=Ze();return gi}var vi,Ea;function Vr(){if(Ea)return vi;Ea=1;const n=Ze();return vi=(u,l,d)=>{try{l=new n(l,d)}catch{return!1}return l.test(u)},vi}var yi,wa;function Zf(){if(wa)return yi;wa=1;const n=Ze();return yi=(u,l)=>new n(u,l).set.map(d=>d.map(y=>y.value).join(" ").trim().split(" ")),yi}var _i,Sa;function eh(){if(Sa)return _i;Sa=1;const n=He(),r=Ze();return _i=(l,d,y)=>{let p=null,g=null,w=null;try{w=new r(d,y)}catch{return null}return l.forEach(E=>{w.test(E)&&(!p||g.compare(E)===-1)&&(p=E,g=new n(p,y))}),p},_i}var Ii,ba;function th(){if(ba)return Ii;ba=1;const n=He(),r=Ze();return Ii=(l,d,y)=>{let p=null,g=null,w=null;try{w=new r(d,y)}catch{return null}return l.forEach(E=>{w.test(E)&&(!p||g.compare(E)===1)&&(p=E,g=new n(p,y))}),p},Ii}var Ei,Ta;function rh(){if(Ta)return Ei;Ta=1;const n=He(),r=Ze(),u=jr();return Ei=(d,y)=>{d=new r(d,y);let p=new n("0.0.0");if(d.test(p)||(p=new n("0.0.0-0"),d.test(p)))return p;p=null;for(let g=0;g<d.set.length;++g){const w=d.set[g];let E=null;w.forEach(a=>{const f=new n(a.semver.version);switch(a.operator){case">":f.prerelease.length===0?f.patch++:f.prerelease.push(0),f.raw=f.format();case"":case">=":(!E||u(f,E))&&(E=f);break;case"<":case"<=":break;default:throw new Error(`Unexpected operation: ${a.operator}`)}}),E&&(!p||u(p,E))&&(p=E)}return p&&d.test(p)?p:null},Ei}var wi,Aa;function nh(){if(Aa)return wi;Aa=1;const n=Ze();return wi=(u,l)=>{try{return new n(u,l).range||"*"}catch{return null}},wi}var Si,Ra;function cs(){if(Ra)return Si;Ra=1;const n=He(),r=qr(),{ANY:u}=r,l=Ze(),d=Vr(),y=jr(),p=ss(),g=as(),w=os();return Si=(a,f,_,h)=>{a=new n(a,h),f=new l(f,h);let P,S,R,I,A;switch(_){case">":P=y,S=g,R=p,I=">",A=">=";break;case"<":P=p,S=w,R=y,I="<",A="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(d(a,f,h))return!1;for(let L=0;L<f.set.length;++L){const B=f.set[L];let V=null,q=null;if(B.forEach(re=>{re.semver===u&&(re=new r(">=0.0.0")),V=V||re,q=q||re,P(re.semver,V.semver,h)?V=re:R(re.semver,q.semver,h)&&(q=re)}),V.operator===I||V.operator===A||(!q.operator||q.operator===I)&&S(a,q.semver))return!1;if(q.operator===A&&R(a,q.semver))return!1}return!0},Si}var bi,Pa;function ih(){if(Pa)return bi;Pa=1;const n=cs();return bi=(u,l,d)=>n(u,l,">",d),bi}var Ti,Oa;function sh(){if(Oa)return Ti;Oa=1;const n=cs();return Ti=(u,l,d)=>n(u,l,"<",d),Ti}var Ai,Na;function oh(){if(Na)return Ai;Na=1;const n=Ze();return Ai=(u,l,d)=>(u=new n(u,d),l=new n(l,d),u.intersects(l,d)),Ai}var Ri,La;function ah(){if(La)return Ri;La=1;const n=Vr(),r=Qe();return Ri=(u,l,d)=>{const y=[];let p=null,g=null;const w=u.sort((_,h)=>r(_,h,d));for(const _ of w)n(_,l,d)?(g=_,p||(p=_)):(g&&y.push([p,g]),g=null,p=null);p&&y.push([p,null]);const E=[];for(const[_,h]of y)_===h?E.push(_):!h&&_===w[0]?E.push("*"):h?_===w[0]?E.push(`<=${h}`):E.push(`${_} - ${h}`):E.push(`>=${_}`);const a=E.join(" || "),f=typeof l.raw=="string"?l.raw:String(l);return a.length<f.length?a:l},Ri}var Pi,ka;function ch(){if(ka)return Pi;ka=1;const n=Ze(),r=qr(),{ANY:u}=r,l=Vr(),d=Qe(),y=(f,_,h={})=>{if(f===_)return!0;f=new n(f,h),_=new n(_,h);let P=!1;e:for(const S of f.set){for(const R of _.set){const I=w(S,R,h);if(P=P||I!==null,I)continue e}if(P)return!1}return!0},p=[new r(">=0.0.0-0")],g=[new r(">=0.0.0")],w=(f,_,h)=>{if(f===_)return!0;if(f.length===1&&f[0].semver===u){if(_.length===1&&_[0].semver===u)return!0;h.includePrerelease?f=p:f=g}if(_.length===1&&_[0].semver===u){if(h.includePrerelease)return!0;_=g}const P=new Set;let S,R;for(const W of f)W.operator===">"||W.operator===">="?S=E(S,W,h):W.operator==="<"||W.operator==="<="?R=a(R,W,h):P.add(W.semver);if(P.size>1)return null;let I;if(S&&R){if(I=d(S.semver,R.semver,h),I>0)return null;if(I===0&&(S.operator!==">="||R.operator!=="<="))return null}for(const W of P){if(S&&!l(W,String(S),h)||R&&!l(W,String(R),h))return null;for(const F of _)if(!l(W,String(F),h))return!1;return!0}let A,L,B,V,q=R&&!h.includePrerelease&&R.semver.prerelease.length?R.semver:!1,re=S&&!h.includePrerelease&&S.semver.prerelease.length?S.semver:!1;q&&q.prerelease.length===1&&R.operator==="<"&&q.prerelease[0]===0&&(q=!1);for(const W of _){if(V=V||W.operator===">"||W.operator===">=",B=B||W.operator==="<"||W.operator==="<=",S){if(re&&W.semver.prerelease&&W.semver.prerelease.length&&W.semver.major===re.major&&W.semver.minor===re.minor&&W.semver.patch===re.patch&&(re=!1),W.operator===">"||W.operator===">="){if(A=E(S,W,h),A===W&&A!==S)return!1}else if(S.operator===">="&&!W.test(S.semver))return!1}if(R){if(q&&W.semver.prerelease&&W.semver.prerelease.length&&W.semver.major===q.major&&W.semver.minor===q.minor&&W.semver.patch===q.patch&&(q=!1),W.operator==="<"||W.operator==="<="){if(L=a(R,W,h),L===W&&L!==R)return!1}else if(R.operator==="<="&&!W.test(R.semver))return!1}if(!W.operator&&(R||S)&&I!==0)return!1}return!(S&&B&&!R&&I!==0||R&&V&&!S&&I!==0||re||q)},E=(f,_,h)=>{if(!f)return _;const P=d(f.semver,_.semver,h);return P>0?f:P<0||_.operator===">"&&f.operator===">="?_:f},a=(f,_,h)=>{if(!f)return _;const P=d(f.semver,_.semver,h);return P<0?f:P>0||_.operator==="<"&&f.operator==="<="?_:f};return Pi=y,Pi}var Oi,Ca;function us(){if(Ca)return Oi;Ca=1;const n=ur(),r=cr(),u=He(),l=Kc(),d=Pt(),y=xf(),p=Bf(),g=$f(),w=jf(),E=qf(),a=Vf(),f=Wf(),_=Hf(),h=Qe(),P=Gf(),S=zf(),R=is(),I=Kf(),A=Jf(),L=jr(),B=ss(),V=Jc(),q=Yc(),re=os(),W=as(),F=Xc(),de=Yf(),fe=Xf(),we=qr(),Q=Ze(),he=Vr(),ie=Zf(),_e=eh(),K=th(),H=rh(),oe=nh(),ue=cs(),ae=ih(),j=sh(),te=oh(),Ee=ah(),le=ch();return Oi={parse:d,valid:y,clean:p,inc:g,diff:w,major:E,minor:a,patch:f,prerelease:_,compare:h,rcompare:P,compareLoose:S,compareBuild:R,sort:I,rsort:A,gt:L,lt:B,eq:V,neq:q,gte:re,lte:W,cmp:F,coerce:de,truncate:fe,Comparator:we,Range:Q,satisfies:he,toComparators:ie,maxSatisfying:_e,minSatisfying:K,minVersion:H,validRange:oe,outside:ue,gtr:ae,ltr:j,intersects:te,simplifyRange:Ee,subset:le,SemVer:u,re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:r.SEMVER_SPEC_VERSION,RELEASE_TYPES:r.RELEASE_TYPES,compareIdentifiers:l.compareIdentifiers,rcompareIdentifiers:l.rcompareIdentifiers},Oi}var Ni,Da;function uh(){return Da||(Da=1,Ni=us().satisfies(process.version,">=15.7.0")),Ni}var Li,Ma;function lh(){return Ma||(Ma=1,Li=us().satisfies(process.version,">=16.9.0")),Li}var ki,Ua;function Qc(){if(Ua)return ki;Ua=1;const n=uh(),r=lh(),u={ec:["ES256","ES384","ES512"],rsa:["RS256","PS256","RS384","PS384","RS512","PS512"],"rsa-pss":["PS256","PS384","PS512"]},l={ES256:"prime256v1",ES384:"secp384r1",ES512:"secp521r1"};return ki=function(d,y){if(!d||!y)return;const p=y.asymmetricKeyType;if(!p)return;const g=u[p];if(!g)throw new Error(`Unknown key type "${p}".`);if(!g.includes(d))throw new Error(`"alg" parameter for "${p}" key type must be one of: ${g.join(", ")}.`);if(n)switch(p){case"ec":const w=y.asymmetricKeyDetails.namedCurve,E=l[d];if(w!==E)throw new Error(`"alg" parameter "${d}" requires curve "${E}".`);break;case"rsa-pss":if(r){const a=parseInt(d.slice(-3),10),{hashAlgorithm:f,mgf1HashAlgorithm:_,saltLength:h}=y.asymmetricKeyDetails;if(f!==`sha${a}`||_!==f)throw new Error(`Invalid key for this operation, its RSA-PSS parameters do not meet the requirements of "alg" ${d}.`);if(h!==void 0&&h>a>>3)throw new Error(`Invalid key for this operation, its RSA-PSS parameter saltLength does not meet the requirements of "alg" ${d}.`)}break}},ki}var Ci,Fa;function Zc(){if(Fa)return Ci;Fa=1;var n=us();return Ci=n.satisfies(process.version,"^6.12.0 || >=8.0.0"),Ci}var Di,xa;function dh(){if(xa)return Di;xa=1;const n=Br(),r=Hc(),u=Gc(),l=Wc(),d=zc(),y=Qc(),p=Zc(),g=rs(),{KeyObject:w,createSecretKey:E,createPublicKey:a}=st,f=["RS256","RS384","RS512"],_=["ES256","ES384","ES512"],h=["RS256","RS384","RS512"],P=["HS256","HS384","HS512"];return p&&(f.splice(f.length,0,"PS256","PS384","PS512"),h.splice(h.length,0,"PS256","PS384","PS512")),Di=function(S,R,I,A){typeof I=="function"&&!A&&(A=I,I={}),I||(I={}),I=Object.assign({},I);let L;if(A?L=A:L=function(F,de){if(F)throw F;return de},I.clockTimestamp&&typeof I.clockTimestamp!="number")return L(new n("clockTimestamp must be a number"));if(I.nonce!==void 0&&(typeof I.nonce!="string"||I.nonce.trim()===""))return L(new n("nonce must be a non-empty string"));if(I.allowInvalidAsymmetricKeyTypes!==void 0&&typeof I.allowInvalidAsymmetricKeyTypes!="boolean")return L(new n("allowInvalidAsymmetricKeyTypes must be a boolean"));const B=I.clockTimestamp||Math.floor(Date.now()/1e3);if(!S)return L(new n("jwt must be provided"));if(typeof S!="string")return L(new n("jwt must be a string"));const V=S.split(".");if(V.length!==3)return L(new n("jwt malformed"));let q;try{q=l(S,{complete:!0})}catch(F){return L(F)}if(!q)return L(new n("invalid token"));const re=q.header;let W;if(typeof R=="function"){if(!A)return L(new n("verify must be called asynchronous if secret or public key is provided as a callback"));W=R}else W=function(F,de){return de(null,R)};return W(re,function(F,de){if(F)return L(new n("error in secret or public key callback: "+F.message));const fe=V[2].trim()!=="";if(!fe&&de)return L(new n("jwt signature is required"));if(fe&&!de)return L(new n("secret or public key must be provided"));if(!fe&&!I.algorithms)return L(new n('please specify "none" in "algorithms" to verify unsigned tokens'));if(de!=null&&!(de instanceof w))try{de=a(de)}catch{try{de=E(typeof de=="string"?Buffer.from(de):de)}catch{return L(new n("secretOrPublicKey is not valid key material"))}}if(I.algorithms||(de.type==="secret"?I.algorithms=P:["rsa","rsa-pss"].includes(de.asymmetricKeyType)?I.algorithms=h:de.asymmetricKeyType==="ec"?I.algorithms=_:I.algorithms=f),I.algorithms.indexOf(q.header.alg)===-1)return L(new n("invalid algorithm"));if(re.alg.startsWith("HS")&&de.type!=="secret")return L(new n(`secretOrPublicKey must be a symmetric key when using ${re.alg}`));if(/^(?:RS|PS|ES)/.test(re.alg)&&de.type!=="public")return L(new n(`secretOrPublicKey must be an asymmetric key when using ${re.alg}`));if(!I.allowInvalidAsymmetricKeyTypes)try{y(re.alg,de)}catch(he){return L(he)}let we;try{we=g.verify(S,q.header.alg,de)}catch(he){return L(he)}if(!we)return L(new n("invalid signature"));const Q=q.payload;if(typeof Q.nbf<"u"&&!I.ignoreNotBefore){if(typeof Q.nbf!="number")return L(new n("invalid nbf value"));if(Q.nbf>B+(I.clockTolerance||0))return L(new r("jwt not active",new Date(Q.nbf*1e3)))}if(typeof Q.exp<"u"&&!I.ignoreExpiration){if(typeof Q.exp!="number")return L(new n("invalid exp value"));if(B>=Q.exp+(I.clockTolerance||0))return L(new u("jwt expired",new Date(Q.exp*1e3)))}if(I.audience){const he=Array.isArray(I.audience)?I.audience:[I.audience];if(!(Array.isArray(Q.aud)?Q.aud:[Q.aud]).some(function(K){return he.some(function(H){return H instanceof RegExp?H.test(K):H===K})}))return L(new n("jwt audience invalid. expected: "+he.join(" or ")))}if(I.issuer&&(typeof I.issuer=="string"&&Q.iss!==I.issuer||Array.isArray(I.issuer)&&I.issuer.indexOf(Q.iss)===-1))return L(new n("jwt issuer invalid. expected: "+I.issuer));if(I.subject&&Q.sub!==I.subject)return L(new n("jwt subject invalid. expected: "+I.subject));if(I.jwtid&&Q.jti!==I.jwtid)return L(new n("jwt jwtid invalid. expected: "+I.jwtid));if(I.nonce&&Q.nonce!==I.nonce)return L(new n("jwt nonce invalid. expected: "+I.nonce));if(I.maxAge){if(typeof Q.iat!="number")return L(new n("iat required when maxAge is specified"));const he=d(I.maxAge,Q.iat);if(typeof he>"u")return L(new n('"maxAge" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'));if(B>=he+(I.clockTolerance||0))return L(new u("maxAge exceeded",new Date(he*1e3)))}if(I.complete===!0){const he=q.signature;return L(null,{header:re,payload:Q,signature:he})}return L(null,Q)})},Di}var Mi,Ba;function fh(){if(Ba)return Mi;Ba=1;var n=1/0,r=9007199254740991,u=17976931348623157e292,l=NaN,d="[object Arguments]",y="[object Function]",p="[object GeneratorFunction]",g="[object String]",w="[object Symbol]",E=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,_=/^0o[0-7]+$/i,h=/^(?:0|[1-9]\d*)$/,P=parseInt;function S($,pe){for(var ve=-1,xe=$?$.length:0,Oe=Array(xe);++ve<xe;)Oe[ve]=pe($[ve],ve,$);return Oe}function R($,pe,ve,xe){for(var Oe=$.length,qe=ve+-1;++qe<Oe;)if(pe($[qe],qe,$))return qe;return-1}function I($,pe,ve){if(pe!==pe)return R($,A,ve);for(var xe=ve-1,Oe=$.length;++xe<Oe;)if($[xe]===pe)return xe;return-1}function A($){return $!==$}function L($,pe){for(var ve=-1,xe=Array($);++ve<$;)xe[ve]=pe(ve);return xe}function B($,pe){return S(pe,function(ve){return $[ve]})}function V($,pe){return function(ve){return $(pe(ve))}}var q=Object.prototype,re=q.hasOwnProperty,W=q.toString,F=q.propertyIsEnumerable,de=V(Object.keys,Object),fe=Math.max;function we($,pe){var ve=H($)||K($)?L($.length,String):[],xe=ve.length,Oe=!!xe;for(var qe in $)re.call($,qe)&&!(Oe&&(qe=="length"||he(qe,xe)))&&ve.push(qe);return ve}function Q($){if(!ie($))return de($);var pe=[];for(var ve in Object($))re.call($,ve)&&ve!="constructor"&&pe.push(ve);return pe}function he($,pe){return pe=pe??r,!!pe&&(typeof $=="number"||h.test($))&&$>-1&&$%1==0&&$<pe}function ie($){var pe=$&&$.constructor,ve=typeof pe=="function"&&pe.prototype||q;return $===ve}function _e($,pe,ve,xe){$=oe($)?$:Xe($),ve=ve&&!xe?Te(ve):0;var Oe=$.length;return ve<0&&(ve=fe(Oe+ve,0)),le($)?ve<=Oe&&$.indexOf(pe,ve)>-1:!!Oe&&I($,pe,ve)>-1}function K($){return ue($)&&re.call($,"callee")&&(!F.call($,"callee")||W.call($)==d)}var H=Array.isArray;function oe($){return $!=null&&j($.length)&&!ae($)}function ue($){return Ee($)&&oe($)}function ae($){var pe=te($)?W.call($):"";return pe==y||pe==p}function j($){return typeof $=="number"&&$>-1&&$%1==0&&$<=r}function te($){var pe=typeof $;return!!$&&(pe=="object"||pe=="function")}function Ee($){return!!$&&typeof $=="object"}function le($){return typeof $=="string"||!H($)&&Ee($)&&W.call($)==g}function ye($){return typeof $=="symbol"||Ee($)&&W.call($)==w}function Le($){if(!$)return $===0?$:0;if($=Ue($),$===n||$===-n){var pe=$<0?-1:1;return pe*u}return $===$?$:0}function Te($){var pe=Le($),ve=pe%1;return pe===pe?ve?pe-ve:pe:0}function Ue($){if(typeof $=="number")return $;if(ye($))return l;if(te($)){var pe=typeof $.valueOf=="function"?$.valueOf():$;$=te(pe)?pe+"":pe}if(typeof $!="string")return $===0?$:+$;$=$.replace(E,"");var ve=f.test($);return ve||_.test($)?P($.slice(2),ve?2:8):a.test($)?l:+$}function Fe($){return oe($)?we($):Q($)}function Xe($){return $?B($,Fe($)):[]}return Mi=_e,Mi}var Ui,$a;function hh(){if($a)return Ui;$a=1;var n="[object Boolean]",r=Object.prototype,u=r.toString;function l(y){return y===!0||y===!1||d(y)&&u.call(y)==n}function d(y){return!!y&&typeof y=="object"}return Ui=l,Ui}var Fi,ja;function ph(){if(ja)return Fi;ja=1;var n=1/0,r=17976931348623157e292,u=NaN,l="[object Symbol]",d=/^\s+|\s+$/g,y=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,g=/^0o[0-7]+$/i,w=parseInt,E=Object.prototype,a=E.toString;function f(A){return typeof A=="number"&&A==R(A)}function _(A){var L=typeof A;return!!A&&(L=="object"||L=="function")}function h(A){return!!A&&typeof A=="object"}function P(A){return typeof A=="symbol"||h(A)&&a.call(A)==l}function S(A){if(!A)return A===0?A:0;if(A=I(A),A===n||A===-n){var L=A<0?-1:1;return L*r}return A===A?A:0}function R(A){var L=S(A),B=L%1;return L===L?B?L-B:L:0}function I(A){if(typeof A=="number")return A;if(P(A))return u;if(_(A)){var L=typeof A.valueOf=="function"?A.valueOf():A;A=_(L)?L+"":L}if(typeof A!="string")return A===0?A:+A;A=A.replace(d,"");var B=p.test(A);return B||g.test(A)?w(A.slice(2),B?2:8):y.test(A)?u:+A}return Fi=f,Fi}var xi,qa;function mh(){if(qa)return xi;qa=1;var n="[object Number]",r=Object.prototype,u=r.toString;function l(y){return!!y&&typeof y=="object"}function d(y){return typeof y=="number"||l(y)&&u.call(y)==n}return xi=d,xi}var Bi,Va;function gh(){if(Va)return Bi;Va=1;var n="[object Object]";function r(_){var h=!1;if(_!=null&&typeof _.toString!="function")try{h=!!(_+"")}catch{}return h}function u(_,h){return function(P){return _(h(P))}}var l=Function.prototype,d=Object.prototype,y=l.toString,p=d.hasOwnProperty,g=y.call(Object),w=d.toString,E=u(Object.getPrototypeOf,Object);function a(_){return!!_&&typeof _=="object"}function f(_){if(!a(_)||w.call(_)!=n||r(_))return!1;var h=E(_);if(h===null)return!0;var P=p.call(h,"constructor")&&h.constructor;return typeof P=="function"&&P instanceof P&&y.call(P)==g}return Bi=f,Bi}var $i,Wa;function vh(){if(Wa)return $i;Wa=1;var n="[object String]",r=Object.prototype,u=r.toString,l=Array.isArray;function d(p){return!!p&&typeof p=="object"}function y(p){return typeof p=="string"||!l(p)&&d(p)&&u.call(p)==n}return $i=y,$i}var ji,Ha;function yh(){if(Ha)return ji;Ha=1;var n="Expected a function",r=1/0,u=17976931348623157e292,l=NaN,d="[object Symbol]",y=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,g=/^0b[01]+$/i,w=/^0o[0-7]+$/i,E=parseInt,a=Object.prototype,f=a.toString;function _(B,V){var q;if(typeof V!="function")throw new TypeError(n);return B=A(B),function(){return--B>0&&(q=V.apply(this,arguments)),B<=1&&(V=void 0),q}}function h(B){return _(2,B)}function P(B){var V=typeof B;return!!B&&(V=="object"||V=="function")}function S(B){return!!B&&typeof B=="object"}function R(B){return typeof B=="symbol"||S(B)&&f.call(B)==d}function I(B){if(!B)return B===0?B:0;if(B=L(B),B===r||B===-r){var V=B<0?-1:1;return V*u}return B===B?B:0}function A(B){var V=I(B),q=V%1;return V===V?q?V-q:V:0}function L(B){if(typeof B=="number")return B;if(R(B))return l;if(P(B)){var V=typeof B.valueOf=="function"?B.valueOf():B;B=P(V)?V+"":V}if(typeof B!="string")return B===0?B:+B;B=B.replace(y,"");var q=g.test(B);return q||w.test(B)?E(B.slice(2),q?2:8):p.test(B)?l:+B}return ji=h,ji}var qi,Ga;function _h(){if(Ga)return qi;Ga=1;const n=zc(),r=Zc(),u=Qc(),l=rs(),d=fh(),y=hh(),p=ph(),g=mh(),w=gh(),E=vh(),a=yh(),{KeyObject:f,createSecretKey:_,createPrivateKey:h}=st,P=["RS256","RS384","RS512","ES256","ES384","ES512","HS256","HS384","HS512","none"];r&&P.splice(3,0,"PS256","PS384","PS512");const S={expiresIn:{isValid:function(q){return p(q)||E(q)&&q},message:'"expiresIn" should be a number of seconds or string representing a timespan'},notBefore:{isValid:function(q){return p(q)||E(q)&&q},message:'"notBefore" should be a number of seconds or string representing a timespan'},audience:{isValid:function(q){return E(q)||Array.isArray(q)},message:'"audience" must be a string or array'},algorithm:{isValid:d.bind(null,P),message:'"algorithm" must be a valid string enum value'},header:{isValid:w,message:'"header" must be an object'},encoding:{isValid:E,message:'"encoding" must be a string'},issuer:{isValid:E,message:'"issuer" must be a string'},subject:{isValid:E,message:'"subject" must be a string'},jwtid:{isValid:E,message:'"jwtid" must be a string'},noTimestamp:{isValid:y,message:'"noTimestamp" must be a boolean'},keyid:{isValid:E,message:'"keyid" must be a string'},mutatePayload:{isValid:y,message:'"mutatePayload" must be a boolean'},allowInsecureKeySizes:{isValid:y,message:'"allowInsecureKeySizes" must be a boolean'},allowInvalidAsymmetricKeyTypes:{isValid:y,message:'"allowInvalidAsymmetricKeyTypes" must be a boolean'}},R={iat:{isValid:g,message:'"iat" should be a number of seconds'},exp:{isValid:g,message:'"exp" should be a number of seconds'},nbf:{isValid:g,message:'"nbf" should be a number of seconds'}};function I(q,re,W,F){if(!w(W))throw new Error('Expected "'+F+'" to be a plain object.');Object.keys(W).forEach(function(de){const fe=q[de];if(!fe){if(!re)throw new Error('"'+de+'" is not allowed in "'+F+'"');return}if(!fe.isValid(W[de]))throw new Error(fe.message)})}function A(q){return I(S,!1,q,"options")}function L(q){return I(R,!0,q,"payload")}const B={audience:"aud",issuer:"iss",subject:"sub",jwtid:"jti"},V=["expiresIn","notBefore","noTimestamp","audience","issuer","subject","jwtid"];return qi=function(q,re,W,F){typeof W=="function"?(F=W,W={}):W=W||{};const de=typeof q=="object"&&!Buffer.isBuffer(q),fe=Object.assign({alg:W.algorithm||"HS256",typ:de?"JWT":void 0,kid:W.keyid},W.header);function we(ie){if(F)return F(ie);throw ie}if(!re&&W.algorithm!=="none")return we(new Error("secretOrPrivateKey must have a value"));if(re!=null&&!(re instanceof f))try{re=h(re)}catch{try{re=_(typeof re=="string"?Buffer.from(re):re)}catch{return we(new Error("secretOrPrivateKey is not valid key material"))}}if(fe.alg.startsWith("HS")&&re.type!=="secret")return we(new Error(`secretOrPrivateKey must be a symmetric key when using ${fe.alg}`));if(/^(?:RS|PS|ES)/.test(fe.alg)){if(re.type!=="private")return we(new Error(`secretOrPrivateKey must be an asymmetric key when using ${fe.alg}`));if(!W.allowInsecureKeySizes&&!fe.alg.startsWith("ES")&&re.asymmetricKeyDetails!==void 0&&re.asymmetricKeyDetails.modulusLength<2048)return we(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${fe.alg}`))}if(typeof q>"u")return we(new Error("payload is required"));if(de){try{L(q)}catch(ie){return we(ie)}W.mutatePayload||(q=Object.assign({},q))}else{const ie=V.filter(function(_e){return typeof W[_e]<"u"});if(ie.length>0)return we(new Error("invalid "+ie.join(",")+" option for "+typeof q+" payload"))}if(typeof q.exp<"u"&&typeof W.expiresIn<"u")return we(new Error('Bad "options.expiresIn" option the payload already has an "exp" property.'));if(typeof q.nbf<"u"&&typeof W.notBefore<"u")return we(new Error('Bad "options.notBefore" option the payload already has an "nbf" property.'));try{A(W)}catch(ie){return we(ie)}if(!W.allowInvalidAsymmetricKeyTypes)try{u(fe.alg,re)}catch(ie){return we(ie)}const Q=q.iat||Math.floor(Date.now()/1e3);if(W.noTimestamp?delete q.iat:de&&(q.iat=Q),typeof W.notBefore<"u"){try{q.nbf=n(W.notBefore,Q)}catch(ie){return we(ie)}if(typeof q.nbf>"u")return we(new Error('"notBefore" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}if(typeof W.expiresIn<"u"&&typeof q=="object"){try{q.exp=n(W.expiresIn,Q)}catch(ie){return we(ie)}if(typeof q.exp>"u")return we(new Error('"expiresIn" should be a number of seconds or string representing a timespan eg: "1d", "20h", 60'))}Object.keys(B).forEach(function(ie){const _e=B[ie];if(typeof W[ie]<"u"){if(typeof q[_e]<"u")return we(new Error('Bad "options.'+ie+'" option. The payload already has an "'+_e+'" property.'));q[_e]=W[ie]}});const he=W.encoding||"utf8";if(typeof F=="function")F=F&&a(F),l.createSign({header:fe,privateKey:re,payload:q,encoding:he}).once("error",F).once("done",function(ie){if(!W.allowInsecureKeySizes&&/^(?:RS|PS)/.test(fe.alg)&&ie.length<256)return F(new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${fe.alg}`));F(null,ie)});else{let ie=l.sign({header:fe,payload:q,secret:re,encoding:he});if(!W.allowInsecureKeySizes&&/^(?:RS|PS)/.test(fe.alg)&&ie.length<256)throw new Error(`secretOrPrivateKey has a minimum key size of 2048 bits for ${fe.alg}`);return ie}},qi}var Vi,za;function Ih(){return za||(za=1,Vi={decode:Wc(),verify:dh(),sign:_h(),JsonWebTokenError:Br(),NotBeforeError:Hc(),TokenExpiredError:Gc()}),Vi}var Wi={},Jt={},Lr={},Ka;function eu(){if(Ka)return Lr;Ka=1,Object.defineProperty(Lr,"__esModule",{value:!0}),Lr.default=u;let n;const r=new Uint8Array(16);function u(){if(!n&&(n=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!n))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return n(r)}return Lr}var xt={},Yt={},Xt={},Ja;function Eh(){if(Ja)return Xt;Ja=1,Object.defineProperty(Xt,"__esModule",{value:!0}),Xt.default=void 0;var n=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;return Xt.default=n,Xt}var Ya;function Wr(){if(Ya)return Yt;Ya=1,Object.defineProperty(Yt,"__esModule",{value:!0}),Yt.default=void 0;var n=r(Eh());function r(d){return d&&d.__esModule?d:{default:d}}function u(d){return typeof d=="string"&&n.default.test(d)}var l=u;return Yt.default=l,Yt}var Xa;function Hr(){if(Xa)return xt;Xa=1,Object.defineProperty(xt,"__esModule",{value:!0}),xt.default=void 0,xt.unsafeStringify=l;var n=r(Wr());function r(p){return p&&p.__esModule?p:{default:p}}const u=[];for(let p=0;p<256;++p)u.push((p+256).toString(16).slice(1));function l(p,g=0){return u[p[g+0]]+u[p[g+1]]+u[p[g+2]]+u[p[g+3]]+"-"+u[p[g+4]]+u[p[g+5]]+"-"+u[p[g+6]]+u[p[g+7]]+"-"+u[p[g+8]]+u[p[g+9]]+"-"+u[p[g+10]]+u[p[g+11]]+u[p[g+12]]+u[p[g+13]]+u[p[g+14]]+u[p[g+15]]}function d(p,g=0){const w=l(p,g);if(!(0,n.default)(w))throw TypeError("Stringified UUID is invalid");return w}var y=d;return xt.default=y,xt}var Qa;function wh(){if(Qa)return Jt;Qa=1,Object.defineProperty(Jt,"__esModule",{value:!0}),Jt.default=void 0;var n=u(eu()),r=Hr();function u(E){return E&&E.__esModule?E:{default:E}}let l,d,y=0,p=0;function g(E,a,f){let _=a&&f||0;const h=a||new Array(16);E=E||{};let P=E.node||l,S=E.clockseq!==void 0?E.clockseq:d;if(P==null||S==null){const V=E.random||(E.rng||n.default)();P==null&&(P=l=[V[0]|1,V[1],V[2],V[3],V[4],V[5]]),S==null&&(S=d=(V[6]<<8|V[7])&16383)}let R=E.msecs!==void 0?E.msecs:Date.now(),I=E.nsecs!==void 0?E.nsecs:p+1;const A=R-y+(I-p)/1e4;if(A<0&&E.clockseq===void 0&&(S=S+1&16383),(A<0||R>y)&&E.nsecs===void 0&&(I=0),I>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");y=R,p=I,d=S,R+=122192928e5;const L=((R&268435455)*1e4+I)%4294967296;h[_++]=L>>>24&255,h[_++]=L>>>16&255,h[_++]=L>>>8&255,h[_++]=L&255;const B=R/4294967296*1e4&268435455;h[_++]=B>>>8&255,h[_++]=B&255,h[_++]=B>>>24&15|16,h[_++]=B>>>16&255,h[_++]=S>>>8|128,h[_++]=S&255;for(let V=0;V<6;++V)h[_+V]=P[V];return a||(0,r.unsafeStringify)(h)}var w=g;return Jt.default=w,Jt}var Qt={},wt={},Zt={},Za;function tu(){if(Za)return Zt;Za=1,Object.defineProperty(Zt,"__esModule",{value:!0}),Zt.default=void 0;var n=r(Wr());function r(d){return d&&d.__esModule?d:{default:d}}function u(d){if(!(0,n.default)(d))throw TypeError("Invalid UUID");let y;const p=new Uint8Array(16);return p[0]=(y=parseInt(d.slice(0,8),16))>>>24,p[1]=y>>>16&255,p[2]=y>>>8&255,p[3]=y&255,p[4]=(y=parseInt(d.slice(9,13),16))>>>8,p[5]=y&255,p[6]=(y=parseInt(d.slice(14,18),16))>>>8,p[7]=y&255,p[8]=(y=parseInt(d.slice(19,23),16))>>>8,p[9]=y&255,p[10]=(y=parseInt(d.slice(24,36),16))/1099511627776&255,p[11]=y/4294967296&255,p[12]=y>>>24&255,p[13]=y>>>16&255,p[14]=y>>>8&255,p[15]=y&255,p}var l=u;return Zt.default=l,Zt}var ec;function ru(){if(ec)return wt;ec=1,Object.defineProperty(wt,"__esModule",{value:!0}),wt.URL=wt.DNS=void 0,wt.default=p;var n=Hr(),r=u(tu());function u(g){return g&&g.__esModule?g:{default:g}}function l(g){g=unescape(encodeURIComponent(g));const w=[];for(let E=0;E<g.length;++E)w.push(g.charCodeAt(E));return w}const d="6ba7b810-9dad-11d1-80b4-00c04fd430c8";wt.DNS=d;const y="6ba7b811-9dad-11d1-80b4-00c04fd430c8";wt.URL=y;function p(g,w,E){function a(f,_,h,P){var S;if(typeof f=="string"&&(f=l(f)),typeof _=="string"&&(_=(0,r.default)(_)),((S=_)===null||S===void 0?void 0:S.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let R=new Uint8Array(16+f.length);if(R.set(_),R.set(f,_.length),R=E(R),R[6]=R[6]&15|w,R[8]=R[8]&63|128,h){P=P||0;for(let I=0;I<16;++I)h[P+I]=R[I];return h}return(0,n.unsafeStringify)(R)}try{a.name=g}catch{}return a.DNS=d,a.URL=y,a}return wt}var er={},tc;function Sh(){if(tc)return er;tc=1,Object.defineProperty(er,"__esModule",{value:!0}),er.default=void 0;function n(h){if(typeof h=="string"){const P=unescape(encodeURIComponent(h));h=new Uint8Array(P.length);for(let S=0;S<P.length;++S)h[S]=P.charCodeAt(S)}return r(l(d(h),h.length*8))}function r(h){const P=[],S=h.length*32,R="0123456789abcdef";for(let I=0;I<S;I+=8){const A=h[I>>5]>>>I%32&255,L=parseInt(R.charAt(A>>>4&15)+R.charAt(A&15),16);P.push(L)}return P}function u(h){return(h+64>>>9<<4)+14+1}function l(h,P){h[P>>5]|=128<<P%32,h[u(P)-1]=P;let S=1732584193,R=-271733879,I=-1732584194,A=271733878;for(let L=0;L<h.length;L+=16){const B=S,V=R,q=I,re=A;S=w(S,R,I,A,h[L],7,-680876936),A=w(A,S,R,I,h[L+1],12,-389564586),I=w(I,A,S,R,h[L+2],17,606105819),R=w(R,I,A,S,h[L+3],22,-1044525330),S=w(S,R,I,A,h[L+4],7,-176418897),A=w(A,S,R,I,h[L+5],12,1200080426),I=w(I,A,S,R,h[L+6],17,-1473231341),R=w(R,I,A,S,h[L+7],22,-45705983),S=w(S,R,I,A,h[L+8],7,1770035416),A=w(A,S,R,I,h[L+9],12,-1958414417),I=w(I,A,S,R,h[L+10],17,-42063),R=w(R,I,A,S,h[L+11],22,-1990404162),S=w(S,R,I,A,h[L+12],7,1804603682),A=w(A,S,R,I,h[L+13],12,-40341101),I=w(I,A,S,R,h[L+14],17,-1502002290),R=w(R,I,A,S,h[L+15],22,1236535329),S=E(S,R,I,A,h[L+1],5,-165796510),A=E(A,S,R,I,h[L+6],9,-1069501632),I=E(I,A,S,R,h[L+11],14,643717713),R=E(R,I,A,S,h[L],20,-373897302),S=E(S,R,I,A,h[L+5],5,-701558691),A=E(A,S,R,I,h[L+10],9,38016083),I=E(I,A,S,R,h[L+15],14,-660478335),R=E(R,I,A,S,h[L+4],20,-405537848),S=E(S,R,I,A,h[L+9],5,568446438),A=E(A,S,R,I,h[L+14],9,-1019803690),I=E(I,A,S,R,h[L+3],14,-187363961),R=E(R,I,A,S,h[L+8],20,1163531501),S=E(S,R,I,A,h[L+13],5,-1444681467),A=E(A,S,R,I,h[L+2],9,-51403784),I=E(I,A,S,R,h[L+7],14,1735328473),R=E(R,I,A,S,h[L+12],20,-1926607734),S=a(S,R,I,A,h[L+5],4,-378558),A=a(A,S,R,I,h[L+8],11,-2022574463),I=a(I,A,S,R,h[L+11],16,1839030562),R=a(R,I,A,S,h[L+14],23,-35309556),S=a(S,R,I,A,h[L+1],4,-1530992060),A=a(A,S,R,I,h[L+4],11,1272893353),I=a(I,A,S,R,h[L+7],16,-155497632),R=a(R,I,A,S,h[L+10],23,-1094730640),S=a(S,R,I,A,h[L+13],4,681279174),A=a(A,S,R,I,h[L],11,-358537222),I=a(I,A,S,R,h[L+3],16,-722521979),R=a(R,I,A,S,h[L+6],23,76029189),S=a(S,R,I,A,h[L+9],4,-640364487),A=a(A,S,R,I,h[L+12],11,-421815835),I=a(I,A,S,R,h[L+15],16,530742520),R=a(R,I,A,S,h[L+2],23,-995338651),S=f(S,R,I,A,h[L],6,-198630844),A=f(A,S,R,I,h[L+7],10,1126891415),I=f(I,A,S,R,h[L+14],15,-1416354905),R=f(R,I,A,S,h[L+5],21,-57434055),S=f(S,R,I,A,h[L+12],6,1700485571),A=f(A,S,R,I,h[L+3],10,-1894986606),I=f(I,A,S,R,h[L+10],15,-1051523),R=f(R,I,A,S,h[L+1],21,-2054922799),S=f(S,R,I,A,h[L+8],6,1873313359),A=f(A,S,R,I,h[L+15],10,-30611744),I=f(I,A,S,R,h[L+6],15,-1560198380),R=f(R,I,A,S,h[L+13],21,1309151649),S=f(S,R,I,A,h[L+4],6,-145523070),A=f(A,S,R,I,h[L+11],10,-1120210379),I=f(I,A,S,R,h[L+2],15,718787259),R=f(R,I,A,S,h[L+9],21,-343485551),S=y(S,B),R=y(R,V),I=y(I,q),A=y(A,re)}return[S,R,I,A]}function d(h){if(h.length===0)return[];const P=h.length*8,S=new Uint32Array(u(P));for(let R=0;R<P;R+=8)S[R>>5]|=(h[R/8]&255)<<R%32;return S}function y(h,P){const S=(h&65535)+(P&65535);return(h>>16)+(P>>16)+(S>>16)<<16|S&65535}function p(h,P){return h<<P|h>>>32-P}function g(h,P,S,R,I,A){return y(p(y(y(P,h),y(R,A)),I),S)}function w(h,P,S,R,I,A,L){return g(P&S|~P&R,h,P,I,A,L)}function E(h,P,S,R,I,A,L){return g(P&R|S&~R,h,P,I,A,L)}function a(h,P,S,R,I,A,L){return g(P^S^R,h,P,I,A,L)}function f(h,P,S,R,I,A,L){return g(S^(P|~R),h,P,I,A,L)}var _=n;return er.default=_,er}var rc;function bh(){if(rc)return Qt;rc=1,Object.defineProperty(Qt,"__esModule",{value:!0}),Qt.default=void 0;var n=u(ru()),r=u(Sh());function u(y){return y&&y.__esModule?y:{default:y}}var d=(0,n.default)("v3",48,r.default);return Qt.default=d,Qt}var tr={},rr={},nc;function Th(){if(nc)return rr;nc=1,Object.defineProperty(rr,"__esModule",{value:!0}),rr.default=void 0;var r={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};return rr.default=r,rr}var ic;function Ah(){if(ic)return tr;ic=1,Object.defineProperty(tr,"__esModule",{value:!0}),tr.default=void 0;var n=l(Th()),r=l(eu()),u=Hr();function l(p){return p&&p.__esModule?p:{default:p}}function d(p,g,w){if(n.default.randomUUID&&!g&&!p)return n.default.randomUUID();p=p||{};const E=p.random||(p.rng||r.default)();if(E[6]=E[6]&15|64,E[8]=E[8]&63|128,g){w=w||0;for(let a=0;a<16;++a)g[w+a]=E[a];return g}return(0,u.unsafeStringify)(E)}var y=d;return tr.default=y,tr}var nr={},ir={},sc;function Rh(){if(sc)return ir;sc=1,Object.defineProperty(ir,"__esModule",{value:!0}),ir.default=void 0;function n(d,y,p,g){switch(d){case 0:return y&p^~y&g;case 1:return y^p^g;case 2:return y&p^y&g^p&g;case 3:return y^p^g}}function r(d,y){return d<<y|d>>>32-y}function u(d){const y=[1518500249,1859775393,2400959708,3395469782],p=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof d=="string"){const a=unescape(encodeURIComponent(d));d=[];for(let f=0;f<a.length;++f)d.push(a.charCodeAt(f))}else Array.isArray(d)||(d=Array.prototype.slice.call(d));d.push(128);const g=d.length/4+2,w=Math.ceil(g/16),E=new Array(w);for(let a=0;a<w;++a){const f=new Uint32Array(16);for(let _=0;_<16;++_)f[_]=d[a*64+_*4]<<24|d[a*64+_*4+1]<<16|d[a*64+_*4+2]<<8|d[a*64+_*4+3];E[a]=f}E[w-1][14]=(d.length-1)*8/Math.pow(2,32),E[w-1][14]=Math.floor(E[w-1][14]),E[w-1][15]=(d.length-1)*8&4294967295;for(let a=0;a<w;++a){const f=new Uint32Array(80);for(let I=0;I<16;++I)f[I]=E[a][I];for(let I=16;I<80;++I)f[I]=r(f[I-3]^f[I-8]^f[I-14]^f[I-16],1);let _=p[0],h=p[1],P=p[2],S=p[3],R=p[4];for(let I=0;I<80;++I){const A=Math.floor(I/20),L=r(_,5)+n(A,h,P,S)+R+y[A]+f[I]>>>0;R=S,S=P,P=r(h,30)>>>0,h=_,_=L}p[0]=p[0]+_>>>0,p[1]=p[1]+h>>>0,p[2]=p[2]+P>>>0,p[3]=p[3]+S>>>0,p[4]=p[4]+R>>>0}return[p[0]>>24&255,p[0]>>16&255,p[0]>>8&255,p[0]&255,p[1]>>24&255,p[1]>>16&255,p[1]>>8&255,p[1]&255,p[2]>>24&255,p[2]>>16&255,p[2]>>8&255,p[2]&255,p[3]>>24&255,p[3]>>16&255,p[3]>>8&255,p[3]&255,p[4]>>24&255,p[4]>>16&255,p[4]>>8&255,p[4]&255]}var l=u;return ir.default=l,ir}var oc;function Ph(){if(oc)return nr;oc=1,Object.defineProperty(nr,"__esModule",{value:!0}),nr.default=void 0;var n=u(ru()),r=u(Rh());function u(y){return y&&y.__esModule?y:{default:y}}var d=(0,n.default)("v5",80,r.default);return nr.default=d,nr}var sr={},ac;function Oh(){if(ac)return sr;ac=1,Object.defineProperty(sr,"__esModule",{value:!0}),sr.default=void 0;var n="00000000-0000-0000-0000-000000000000";return sr.default=n,sr}var or={},cc;function Nh(){if(cc)return or;cc=1,Object.defineProperty(or,"__esModule",{value:!0}),or.default=void 0;var n=r(Wr());function r(d){return d&&d.__esModule?d:{default:d}}function u(d){if(!(0,n.default)(d))throw TypeError("Invalid UUID");return parseInt(d.slice(14,15),16)}var l=u;return or.default=l,or}var uc;function Lh(){return uc||(uc=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),Object.defineProperty(n,"NIL",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(n,"parse",{enumerable:!0,get:function(){return E.default}}),Object.defineProperty(n,"stringify",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(n,"v1",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(n,"v3",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(n,"v4",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(n,"v5",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(n,"validate",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(n,"version",{enumerable:!0,get:function(){return p.default}});var r=a(wh()),u=a(bh()),l=a(Ah()),d=a(Ph()),y=a(Oh()),p=a(Nh()),g=a(Wr()),w=a(Hr()),E=a(tu());function a(f){return f&&f.__esModule?f:{default:f}}})(Wi)),Wi}const kh="@circle-fin/w3s-pw-web-sdk",Ch="1.1.11",Dh="Javascript/Typescript SDK for Circle Programmable Wallets",Mh="dist/src/index.js",Uh="dist/src/index.d.ts",Fh={build:"npx tsc",test:"jest --env=jsdom","test:watch":"jest --watch --env=jsdom",lint:"eslint . --ext .ts","lint-fix":"eslint . --ext .ts --fix",format:"prettier --write .","format-check":"prettier --check src/"},xh={type:"git",url:"git+https://github.com/circlefin/w3s-pw-web-sdk.git"},Bh=["circle","circle.com","usdc","euroc","stablecoins","programmable wallets"],$h="https://github.com/circlefin/w3s-pw-web-sdk#readme",jh={registry:"https://registry.npmjs.com/"},qh="Apache-2.0",Vh={url:"https://github.com/circlefin/w3s-pw-web-sdk/issues"},Wh={node:">=10.0.0"},Hh={dotenv:"^16.3.1",firebase:"^10.12.1",jsonwebtoken:"^9.0.2",uuid:"^9.0.1"},Gh={"@types/jest":"^28.1.7","@types/node":"^14.14.14","@typescript-eslint/eslint-plugin":"^5.0.0",eslint:"^8.0.1","eslint-config-standard-with-typescript":"^22.0.0","eslint-plugin-import":"^2.25.2","eslint-plugin-n":"^16.3.0","eslint-plugin-promise":"^6.1.1",jest:"^29.6.1","jest-environment-jsdom":"^29.6.1",prettier:"^2.7.1","ts-jest":"^29.1.1",typescript:"^4.9.5"},zh={name:kh,version:Ch,description:Dh,main:Mh,types:Uh,scripts:Fh,repository:xh,keywords:Bh,homepage:$h,publishConfig:jh,license:qh,bugs:Vh,engines:Wh,dependencies:Hh,devDependencies:Gh};var Hi={},lc;function Kh(){return lc||(lc=1,(function(n){Object.defineProperty(n,"__esModule",{value:!0}),n.SocialLoginProvider=n.ErrorCode=n.QuestionType=n.ChallengeStatus=n.ChallengeType=void 0,(function(r){r.INITIALIZE="INITIALIZE",r.SET_PIN="SET_PIN",r.CHANGE_PIN="CHANGE_PIN",r.RESTORE_PIN="RESTORE_PIN",r.SET_SECURITY_QUESTIONS="SET_SECURITY_QUESTIONS",r.CREATE_WALLET="CREATE_WALLET",r.CREATE_TRANSACTION="CREATE_TRANSACTION",r.ACCELERATE_TRANSACTION="ACCELERATE_TRANSACTION",r.CANCEL_TRANSACTION="CANCEL_TRANSACTION",r.SIGN_MESSAGE="SIGN_MESSAGE",r.SIGN_TYPEDDATA="SIGN_TYPEDDATA",r.SIGN_TRANSACTION="SIGN_TRANSACTION",r.UNKNOWN="UNKNOWN"})(n.ChallengeType||(n.ChallengeType={})),(function(r){r.COMPLETE="COMPLETE",r.EXPIRED="EXPIRED",r.FAILED="FAILED",r.IN_PROGRESS="IN_PROGRESS",r.PENDING="PENDING"})(n.ChallengeStatus||(n.ChallengeStatus={})),(function(r){r.DATE="DATE",r.TEXT="TEXT"})(n.QuestionType||(n.QuestionType={})),(function(r){r[r.unknown=-1]="unknown",r[r.success=0]="success",r[r.apiParameterMissing=1]="apiParameterMissing",r[r.apiParameterInvalid=2]="apiParameterInvalid",r[r.forbidden=3]="forbidden",r[r.unauthorized=4]="unauthorized",r[r.retry=9]="retry",r[r.customerSuspended=10]="customerSuspended",r[r.pending=11]="pending",r[r.invalidSession=12]="invalidSession",r[r.invalidPartnerId=13]="invalidPartnerId",r[r.invalidMessage=14]="invalidMessage",r[r.invalidPhone=15]="invalidPhone",r[r.userAlreadyExisted=155101]="userAlreadyExisted",r[r.userNotFound=155102]="userNotFound",r[r.userTokenNotFound=155103]="userTokenNotFound",r[r.userTokenExpired=155104]="userTokenExpired",r[r.invalidUserToken=155105]="invalidUserToken",r[r.userWasInitialized=155106]="userWasInitialized",r[r.userHasSetPin=155107]="userHasSetPin",r[r.userHasSetSecurityQuestion=155108]="userHasSetSecurityQuestion",r[r.userWasDisabled=155109]="userWasDisabled",r[r.userDoesNotSetPinYet=155110]="userDoesNotSetPinYet",r[r.userDoesNotSetSecurityQuestionYet=155111]="userDoesNotSetSecurityQuestionYet",r[r.incorrectUserPin=155112]="incorrectUserPin",r[r.incorrectDeviceId=155113]="incorrectDeviceId",r[r.incorrectAppId=155114]="incorrectAppId",r[r.incorrectSecurityAnswers=155115]="incorrectSecurityAnswers",r[r.invalidChallengeId=155116]="invalidChallengeId",r[r.invalidApproveContent=155117]="invalidApproveContent",r[r.invalidEncryptionKey=155118]="invalidEncryptionKey",r[r.userPinLocked=155119]="userPinLocked",r[r.securityAnswersLocked=155120]="securityAnswersLocked",r[r.userOTPTokenExpiredError=155130]="userOTPTokenExpiredError",r[r.userOTPTokenInvalidError=155131]="userOTPTokenInvalidError",r[r.userOTPNotFoundError=155132]="userOTPNotFoundError",r[r.userOTPInvalidError=155133]="userOTPInvalidError",r[r.userOTPNotMatchError=155134]="userOTPNotMatchError",r[r.userEmailInvalidError=155135]="userEmailInvalidError",r[r.userEmailMismatchError=155136]="userEmailMismatchError",r[r.deviceIDInvalidError=155137]="deviceIDInvalidError",r[r.emailSendingFailedError=155138]="emailSendingFailedError",r[r.socialLoginTokenExpiredError=155139]="socialLoginTokenExpiredError",r[r.socialLoginProviderAppIDNotMatchError=155140]="socialLoginProviderAppIDNotMatchError",r[r.userOTPIsLockedError=155141]="userOTPIsLockedError",r[r.userOTPSendCountsOverLimitError=155142]="userOTPSendCountsOverLimitError",r[r.deviceTokenExpiredError=155143]="deviceTokenExpiredError",r[r.deviceTokenInvalidError=155144]="deviceTokenInvalidError",r[r.deviceTokenNotFoundError=155145]="deviceTokenNotFoundError",r[r.notEnoughFunds=155201]="notEnoughFunds",r[r.notEnoughBalance=155202]="notEnoughBalance",r[r.exceedWithdrawLimit=155203]="exceedWithdrawLimit",r[r.minimumFundsRequired=155204]="minimumFundsRequired",r[r.invalidTransactionFee=155205]="invalidTransactionFee",r[r.rejectedOnAmlScreening=155206]="rejectedOnAmlScreening",r[r.tagRequired=155207]="tagRequired",r[r.gasLimitTooLow=155208]="gasLimitTooLow",r[r.transactionDataNotEncodedProperly=155209]="transactionDataNotEncodedProperly",r[r.fullNodeReturnedError=155210]="fullNodeReturnedError",r[r.walletSetupRequired=155211]="walletSetupRequired",r[r.lowerThenMinimumAccountBalance=155212]="lowerThenMinimumAccountBalance",r[r.rejectedByBlockchain=155213]="rejectedByBlockchain",r[r.droppedAsPartOfReorg=155214]="droppedAsPartOfReorg",r[r.operationNotSupport=155215]="operationNotSupport",r[r.amountBelowMinimum=155216]="amountBelowMinimum",r[r.wrongNftTokenIdNumber=155217]="wrongNftTokenIdNumber",r[r.invalidDestinationAddress=155218]="invalidDestinationAddress",r[r.tokenWalletChainMismatch=155219]="tokenWalletChainMismatch",r[r.wrongAmountsNumber=155220]="wrongAmountsNumber",r[r.walletIsFrozen=155501]="walletIsFrozen",r[r.maxWalletLimitReached=155502]="maxWalletLimitReached",r[r.walletSetIdMutuallyExclusive=155503]="walletSetIdMutuallyExclusive",r[r.metadataUnmatched=155504]="metadataUnmatched",r[r.userCanceled=155701]="userCanceled",r[r.launchUiFailed=155702]="launchUiFailed",r[r.pinCodeNotMatched=155703]="pinCodeNotMatched",r[r.insecurePinCode=155704]="insecurePinCode",r[r.hintsMatchAnswers=155705]="hintsMatchAnswers",r[r.networkError=155706]="networkError",r[r.userSecretMissing=155717]="userSecretMissing",r[r.invalidUserTokenFormat=155718]="invalidUserTokenFormat",r[r.userTokenMismatch=155719]="userTokenMismatch",r[r.walletIdNotFound=156001]="walletIdNotFound",r[r.tokenIdNotFound=156002]="tokenIdNotFound",r[r.transactionIdNotFound=156003]="transactionIdNotFound",r[r.entityCredentialNotFound=156004]="entityCredentialNotFound",r[r.walletSetIdNotFound=156005]="walletSetIdNotFound"})(n.ErrorCode||(n.ErrorCode={})),(function(r){r.APPLE="Apple",r.FACEBOOK="Facebook",r.GOOGLE="Google"})(n.SocialLoginProvider||(n.SocialLoginProvider={}))})(Hi)),Hi}var dc;function Jh(){if(dc)return mt;dc=1;var n=mt&&mt.__awaiter||function(E,a,f,_){function h(P){return P instanceof f?P:new f(function(S){S(P)})}return new(f||(f=Promise))(function(P,S){function R(L){try{A(_.next(L))}catch(B){S(B)}}function I(L){try{A(_.throw(L))}catch(B){S(B)}}function A(L){L.done?P(L.value):h(L.value).then(R,I)}A((_=_.apply(E,a||[])).next())})},r=mt&&mt.__importDefault||function(E){return E&&E.__esModule?E:{default:E}};Object.defineProperty(mt,"__esModule",{value:!0}),mt.W3SSdk=void 0;const u=bf(),l=Rf(),d=Ih(),y=Lh(),p=r(zh),g=Kh();class w{constructor(a,f){if(this.serviceUrl="https://pw-auth.circle.com",this.window=window,this.securityQuestionsRequiredCount=2,this.shouldCloseModalOnForgotPin=!1,this.receivedResponseFromService=!1,this.messageHandler=_=>{var h,P,S,R,I,A,L,B,V,q,re,W,F,de,fe,we,Q,he,ie,_e,K,H,oe,ue,ae,j,te,Ee,le,ye,Le,Te,Ue;if(_.origin===this.serviceUrl)if(!((h=_.data)===null||h===void 0)&&h.onFrameReady){this.receivedResponseFromService=!0;const Fe=this.window.document.getElementById("sdkIframe");(P=Fe==null?void 0:Fe.contentWindow)===null||P===void 0||P.postMessage({w3s:{appSettings:(S=this.configs)===null||S===void 0?void 0:S.appSettings,auth:(R=this.configs)===null||R===void 0?void 0:R.authentication,challenge:this.challenge,customizations:{securityQuestions:{questions:this.securityQuestions,requiredCount:this.securityQuestionsRequiredCount,securityConfirmItems:this.securityConfirmItems},themeColor:this.themeColor,localizations:this.localizations,resources:this.resources,customLinks:this.customLinks},deviceInfo:this.deviceInfo,socialVerification:{token:this.socialLoginToken,deviceToken:(A=(I=this.configs)===null||I===void 0?void 0:I.loginConfigs)===null||A===void 0?void 0:A.deviceToken,deviceEncryptionKey:(B=(L=this.configs)===null||L===void 0?void 0:L.loginConfigs)===null||B===void 0?void 0:B.deviceEncryptionKey,socialLoginProvider:this.socialLoginProvider},emailVerification:{deviceToken:(q=(V=this.configs)===null||V===void 0?void 0:V.loginConfigs)===null||q===void 0?void 0:q.deviceToken,deviceEncryptionKey:(W=(re=this.configs)===null||re===void 0?void 0:re.loginConfigs)===null||W===void 0?void 0:W.deviceEncryptionKey,otpToken:(de=(F=this.configs)===null||F===void 0?void 0:F.loginConfigs)===null||de===void 0?void 0:de.otpToken}}},this.serviceUrl)}else if(!((fe=_.data)===null||fe===void 0)&&fe.onForgotPin)(we=this.onForgotPin)===null||we===void 0||we.call(this);else if(!((Q=_.data)===null||Q===void 0)&&Q.onComplete){const Fe=this.window.document.getElementById("sdkIframe");(he=Fe==null?void 0:Fe.parentNode)===null||he===void 0||he.removeChild(Fe),(ie=this.onComplete)===null||ie===void 0||ie.call(this,void 0,(_e=_.data)===null||_e===void 0?void 0:_e.result)}else!((K=_.data)===null||K===void 0)&&K.deviceId?((H=this.resolveDeviceIdPromise)===null||H===void 0||H.call(this,_.data.deviceId),this.closeModal(),this.unSubscribeMessage()):!((oe=_.data)===null||oe===void 0)&&oe.showUi?(this.iframe.width="100%",this.iframe.height="100%",this.iframe.style.zIndex="2147483647",this.iframe.style.position="fixed",this.iframe.style.top="50%",this.iframe.style.left="50%",this.iframe.style.transform="translate(-50%, -50%)",this.iframe.style.display=""):!((ue=_.data)===null||ue===void 0)&&ue.onSocialLoginVerified?((ae=this.onLoginComplete)===null||ae===void 0||ae.call(this,_.data.onSocialLoginVerified.error,_.data.onSocialLoginVerified.result),this.closeModal(),this.unSubscribeMessage()):!((j=_.data)===null||j===void 0)&&j.onEmailLoginVerified?((te=this.onLoginComplete)===null||te===void 0||te.call(this,_.data.onEmailLoginVerified.error,_.data.onEmailLoginVerified.result),_.data.onEmailLoginVerified.result&&!_.data.onEmailLoginVerified.error&&(this.unSubscribeMessage(),this.closeModal())):!((Ee=_.data)===null||Ee===void 0)&&Ee.onResendOtpEmail?(le=this.onResendOtpEmail)===null||le===void 0||le.call(this):!((ye=_.data)===null||ye===void 0)&&ye.onError?(Le=this.onComplete)===null||Le===void 0||Le.call(this,(Te=_.data)===null||Te===void 0?void 0:Te.error,void 0):!((Ue=_.data)===null||Ue===void 0)&&Ue.onClose&&(this.closeModal(),this.unSubscribeMessage())},w.instance!=null)return this.setupInstance(a,f),w.instance;this.iframe=document.createElement("iframe"),this.setupInstance(a,f),w.instance=this}setAppSettings(a){this.configs?this.configs.appSettings=a:this.configs={appSettings:a}}setAuthentication(a){this.configs?this.configs.authentication=a:this.configs={appSettings:{appId:""},authentication:a}}updateConfigs(a,f){this.setupInstance(a,f??this.onLoginComplete)}getDeviceId(){return new Promise((a,f)=>{this.resolveDeviceIdPromise=a,this.rejectDeviceIdPromise=f,this.subscribeMessage(),this.appendIframe(!1,"device-id"),setTimeout(()=>{var _;this.receivedResponseFromService||((_=this.rejectDeviceIdPromise)===null||_===void 0||_.call(this,"Failed to receive deviceId"),this.closeModal(),this.unSubscribeMessage())},1e3*10)})}performLogin(a){var f;return n(this,void 0,void 0,function*(){a===g.SocialLoginProvider.GOOGLE?this.performGoogleLogin():a===g.SocialLoginProvider.FACEBOOK?this.performFacebookLogin():a===g.SocialLoginProvider.APPLE?yield this.performAppleLogin():(f=this.onLoginComplete)===null||f===void 0||f.call(this,{code:155140,message:"Invalid social login provider"},void 0)})}verifyOtp(){this.subscribeMessage(),this.appendIframe(!0,"social/verify-email"),setTimeout(()=>{var a;this.receivedResponseFromService||(a=this.onComplete)===null||a===void 0||a.call(this,{code:155706,message:"Network error"},void 0)},1e3*10)}execute(a,f){this.subscribeMessage(),this.setChallenge({challengeId:a}),this.exec(f,!1)}setCustomSecurityQuestions(a,f=2,_){this.securityQuestions=a,this.securityConfirmItems=_,f<=0?this.securityQuestionsRequiredCount=2:this.securityQuestionsRequiredCount=f}setLocalizations(a){this.localizations=a}setResources(a){this.resources=a}setThemeColor(a){this.themeColor=a}setCustomLinks(a){this.customLinks=a}setOnForgotPin(a,f=!1){this.shouldCloseModalOnForgotPin=f,this.onForgotPin=()=>{this.shouldCloseModalOnForgotPin&&this.closeModal(),a==null||a()}}setOnResendOtpEmail(a){this.onResendOtpEmail=a}setupInstance(a,f){var _;!((_=a==null?void 0:a.loginConfigs)===null||_===void 0)&&_.apple&&(0,u.getApps)().length===0?this.firebaseApp=(0,u.initializeApp)(a.loginConfigs.apple):(0,u.getApps)().length!==0&&(this.firebaseApp=(0,u.getApps)()[0]),this.onLoginComplete=f,this.configs=a,this.deviceInfo={model:"Web",version:p.default.version},this.execSocialLoginStatusCheck()}setChallenge(a){this.challenge=a}appendIframe(a=!0,f=""){const _=this.window.location.protocol,h=this.window.location.host,P=`${_}//${h}`;this.iframe.src=`${this.serviceUrl}/${f}?origin=${P}`,this.iframe.id="sdkIframe",this.iframe.width=a?"100%":"0%",this.iframe.height=a?"100%":"0%",this.iframe.style.zIndex=a?"2147483647":"-1",this.iframe.style.display="none",a&&(this.iframe.style.position="fixed",this.iframe.style.top="50%",this.iframe.style.left="50%",this.iframe.style.transform="translate(-50%, -50%)",this.iframe.style.display=""),document.body.appendChild(this.iframe)}exec(a,f=!0){this.appendIframe(f),this.onComplete=a,setTimeout(()=>{var _;this.receivedResponseFromService||(_=this.onComplete)===null||_===void 0||_.call(this,{code:155706,message:"Network error"},void 0)},1e3*10)}performAppleLogin(){var a;return n(this,void 0,void 0,function*(){if(!this.firebaseApp){(a=this.onLoginComplete)===null||a===void 0||a.call(this,{code:155140,message:"Please provide the Apple social login configurations."},void 0);return}this.saveOAuthInfo(g.SocialLoginProvider.APPLE);const f=new l.OAuthProvider("apple.com"),_=(0,l.getAuth)(this.firebaseApp);try{const h=yield(0,l.signInWithPopup)(_,f);if(!this.extractTokenFromResultAndSave(h))return;this.verifyTokenViaService(),this.window.localStorage.setItem("socialLoginProvider","")}catch(h){h instanceof u.FirebaseError&&h.code!=="auth/cancelled-popup-request"&&h.code!=="auth/popup-closed-by-user"?yield this.handleFirebaseFailure(h):h instanceof u.FirebaseError||this.handleLoginFailure()}})}performFacebookLogin(){var a,f,_;if(!(!((f=(a=this===null||this===void 0?void 0:this.configs)===null||a===void 0?void 0:a.loginConfigs)===null||f===void 0)&&f.facebook)){(_=this.onLoginComplete)===null||_===void 0||_.call(this,{code:155140,message:"Please provide the Facebook social login configurations."},void 0);return}const{appId:h,redirectUri:P}=this.configs.loginConfigs.facebook,{url:S="",state:R=""}=this.generateOauthUrlWithParams(g.SocialLoginProvider.FACEBOOK,h,P)||{};this.saveOAuthInfo(g.SocialLoginProvider.FACEBOOK,R),this.window.location.href=S}performGoogleLogin(){var a,f,_;if(!(!((f=(a=this.configs)===null||a===void 0?void 0:a.loginConfigs)===null||f===void 0)&&f.google)){(_=this.onLoginComplete)===null||_===void 0||_.call(this,{code:155140,message:"Please provide the Google social login configurations."},void 0);return}const{clientId:h,redirectUri:P,selectAccountPrompt:S}=this.configs.loginConfigs.google,{url:R="",state:I="",nonce:A=""}=this.generateOauthUrlWithParams(g.SocialLoginProvider.GOOGLE,h,P,S)||{};this.saveOAuthInfo(g.SocialLoginProvider.GOOGLE,I,A),this.window.location.href=R}generateOauthUrlWithParams(a,f,_,h=!1){const P=(0,y.v4)();if(a===g.SocialLoginProvider.GOOGLE){const S=encodeURIComponent("openid https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email"),R=encodeURIComponent("id_token token"),I=(0,y.v4)();return{url:`https://accounts.google.com/o/oauth2/v2/auth?client_id=${f}&redirect_uri=${encodeURIComponent(_)}&scope=${S}&state=${P}&response_type=${R}&nonce=${I}&prompt=${h?"select_account":"none"}`,state:P,nonce:I}}else if(a===g.SocialLoginProvider.FACEBOOK){const S=encodeURIComponent("email");return{url:`https://www.facebook.com/v13.0/dialog/oauth?client_id=${f}&redirect_uri=${encodeURIComponent(_)}&scope=${S}&state=${P}&response_type=token`,state:P}}}execSocialLoginStatusCheck(){return n(this,void 0,void 0,function*(){const a=this.window.localStorage.getItem("socialLoginProvider");a===g.SocialLoginProvider.APPLE?yield this.handleAppleLoginResponse():this.isValidHash(this.window.location.hash)&&this.handleHashLoginResponse(a)})}handleAppleLoginResponse(){return n(this,void 0,void 0,function*(){const a=(0,l.getAuth)(this.firebaseApp);try{const f=yield(0,l.getRedirectResult)(a);if(!f||!this.extractTokenFromResultAndSave(f))return;this.verifyTokenViaService(),this.window.localStorage.setItem("socialLoginProvider","")}catch{this.handleLoginFailure()}})}handleHashLoginResponse(a){const f=new URLSearchParams(window.location.hash.slice(1));a===g.SocialLoginProvider.GOOGLE?this.handleGoogleLogin(f):a===g.SocialLoginProvider.FACEBOOK&&this.handleFacebookLogin(f),this.verifyTokenViaService(),history.replaceState(null,"",window.location.href.split("#")[0])}handleGoogleLogin(a){this.isLoginStateValid(a)&&this.isLoginNonceValid(a)&&(this.socialLoginToken=a.get("id_token"),this.socialLoginProvider=g.SocialLoginProvider.GOOGLE)}handleFacebookLogin(a){this.isLoginStateValid(a)&&(this.socialLoginToken=a.get("access_token"),this.socialLoginProvider=g.SocialLoginProvider.FACEBOOK)}isLoginStateValid(a){return this.checkSocialLoginState(a)}isLoginNonceValid(a){return this.checkSocialLoginNonce(a)}isValidHash(a){return/^#(?:[a-zA-Z0-9-_.%]+=[^&]*&)*[a-zA-Z0-9-_.%]+=[^&]*$/.test(a)}extractTokenFromResultAndSave(a){const f=l.OAuthProvider.credentialFromResult(a);return f&&f.idToken?(this.socialLoginToken=f.idToken,this.socialLoginProvider=g.SocialLoginProvider.APPLE,!0):!1}handleFirebaseFailure(a){var f;return n(this,void 0,void 0,function*(){yield(f=this.onLoginComplete)===null||f===void 0?void 0:f.call(this,{code:-1,message:a.message},void 0)})}handleLoginFailure(){var a;(a=this.onLoginComplete)===null||a===void 0||a.call(this,{code:155140,message:"Failed to validate the idToken / accessToken"},void 0)}verifyTokenViaService(){this.subscribeMessage(),this.appendIframe(!1,"social/verify-token"),setTimeout(()=>{var a;this.receivedResponseFromService||(a=this.onComplete)===null||a===void 0||a.call(this,{code:155706,message:"Network error"},void 0)},1e3*10)}saveOAuthInfo(a,f,_){this.window.localStorage.setItem("socialLoginProvider",a),this.window.localStorage.setItem("state",f??""),this.window.localStorage.setItem("nonce",_??"")}checkSocialLoginState(a){var f;const _=a.get("state"),h=this.window.localStorage.getItem("state");return!h||_!==h?((f=this.onLoginComplete)===null||f===void 0||f.call(this,{code:155140,message:"Failed to validate the idToken / accessToken"},void 0),!1):!0}checkSocialLoginNonce(a){var f,_,h;const P=a.get("id_token"),S=(0,d.decode)(P||""),R={code:155140,message:"Failed to validate the idToken/ accessToken"};if(S===null)return(f=this.onLoginComplete)===null||f===void 0||f.call(this,R,void 0),!1;try{const I=this.window.localStorage.getItem("nonce");if(!I||(S==null?void 0:S.nonce)!==I)return(_=this.onLoginComplete)===null||_===void 0||_.call(this,R,void 0),!1}catch{return(h=this.onLoginComplete)===null||h===void 0||h.call(this,R,void 0),!1}return!0}closeModal(){var a;const f=this.window.document.getElementById("sdkIframe");(a=f==null?void 0:f.parentNode)===null||a===void 0||a.removeChild(f)}subscribeMessage(){this.window.addEventListener("message",this.messageHandler,!1)}unSubscribeMessage(){this.window.removeEventListener("message",this.messageHandler,!1)}}return mt.W3SSdk=w,w.instance=null,mt}var nu=Jh();const Yh=nf(nu),ep=sf({__proto__:null,default:Yh},[nu]);export{ep as i};
