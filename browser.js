// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).sparsearray2iterator=r()}(this,(function(){"use strict";var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,t=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,a=n.__defineSetter__,u=n.__lookupGetter__,f=n.__lookupSetter__;r=function(){try{return e({},"x",{}),!0}catch(e){return!1}}()?t:function(e,r,t){var l,c,y,s;if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. First argument must be an object. Value: `"+e+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((c="value"in t)&&(u.call(e,r)||f.call(e,r)?(l=e.__proto__,e.__proto__=n,delete e[r],e[r]=t.value,e.__proto__=l):e[r]=t.value),y="get"in t,s="set"in t,c&&(y||s))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&i&&i.call(e,r,t.get),s&&a&&a.call(e,r,t.set),e};var l=r;function c(e,r,t){l(e,r,{configurable:!1,enumerable:!1,writable:!1,value:t})}var y=/./;function s(e){return"boolean"==typeof e}var h="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function p(){return h&&"symbol"==typeof Symbol.toStringTag}var m=Object.prototype.toString;var g=Object.prototype.hasOwnProperty;function w(e,r){return null!=e&&g.call(e,r)}var b="function"==typeof Symbol?Symbol.toStringTag:"";var v=p()?function(e){var r,t,n;if(null==e)return m.call(e);t=e[b],r=w(e,b);try{e[b]=void 0}catch(r){return m.call(e)}return n=m.call(e),r?e[b]=t:delete e[b],n}:function(e){return m.call(e)},d=Boolean.prototype.toString;var E=p();function A(e){return"object"==typeof e&&(e instanceof Boolean||(E?function(e){try{return d.call(e),!0}catch(e){return!1}}(e):"[object Boolean]"===v(e)))}function _(e){return s(e)||A(e)}function T(){return new Function("return this;")()}c(_,"isPrimitive",s),c(_,"isObject",A);var j="object"==typeof self?self:null,x="object"==typeof window?window:null,B="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},L="object"==typeof B?B:null;var S=function(e){if(arguments.length){if(!s(e))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+e+"`.");if(e)return T()}if(j)return j;if(x)return x;if(L)return L;throw new Error("unexpected error. Unable to resolve global object.")}(),R=S.document&&S.document.childNodes,V=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var I=/^\s*function\s*([^(]*)/i;c(k,"REGEXP",I);var C=Array.isArray?Array.isArray:function(e){return"[object Array]"===v(e)};function O(e){return null!==e&&"object"==typeof e}function M(e){return O(e)&&(e._isBuffer||e.constructor&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e))}function U(e){var r,t,n;if(("Object"===(t=v(e).slice(8,-1))||"Error"===t)&&e.constructor){if("string"==typeof(n=e.constructor).name)return n.name;if(r=I.exec(n.toString()))return r[1]}return M(e)?"Buffer":t}c(O,"isObjectLikeArray",function(e){if("function"!=typeof e)throw new TypeError("invalid argument. Must provide a function. Value: `"+e+"`.");return function(r){var t,n;if(!C(r))return!1;if(0===(t=r.length))return!1;for(n=0;n<t;n++)if(!1===e(r[n]))return!1;return!0}}(O));var N="function"==typeof y||"object"==typeof V||"function"==typeof R?function(e){return U(e).toLowerCase()}:function(e){var r;return null===e?"null":"object"===(r=typeof e)?U(e).toLowerCase():r};function F(e){return"function"===N(e)}var P=Math.floor;function Y(e){return P(e)===e}function W(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Y(e.length)&&e.length>=0&&e.length<=9007199254740991}var G="function";function J(e){return typeof e.get===G&&typeof e.set===G}function X(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&w(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}var q=X()?Symbol.iterator:null,z={complex128:function(e,r){return e.get(r)},complex64:function(e,r){return e.get(r)},default:function(e,r){return e.get(r)}};function D(e){var r=z[e];return"function"==typeof r?r:z.default}var H={float64:function(e,r){return e[r]},float32:function(e,r){return e[r]},int32:function(e,r){return e[r]},int16:function(e,r){return e[r]},int8:function(e,r){return e[r]},uint32:function(e,r){return e[r]},uint16:function(e,r){return e[r]},uint8:function(e,r){return e[r]},uint8c:function(e,r){return e[r]},generic:function(e,r){return e[r]},default:function(e,r){return e[r]}};function K(e){var r=H[e];return"function"==typeof r?r:H.default}var Q={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Z="function"==typeof Float64Array;var $="function"==typeof Float64Array?Float64Array:null;var ee="function"==typeof Float64Array?Float64Array:void 0;var re=function(){var e,r,t;if("function"!=typeof $)return!1;try{r=new $([1,3.14,-3.14,NaN]),t=r,e=(Z&&t instanceof Float64Array||"[object Float64Array]"===v(t))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){e=!1}return e}()?ee:function(){throw new Error("not implemented")},te="function"==typeof Float32Array;var ne=Number.POSITIVE_INFINITY,oe="function"==typeof Float32Array?Float32Array:null;var ie="function"==typeof Float32Array?Float32Array:void 0;var ae=function(){var e,r,t;if("function"!=typeof oe)return!1;try{r=new oe([1,3.14,-3.14,5e40]),t=r,e=(te&&t instanceof Float32Array||"[object Float32Array]"===v(t))&&1===r[0]&&3.140000104904175===r[1]&&-3.140000104904175===r[2]&&r[3]===ne}catch(r){e=!1}return e}()?ie:function(){throw new Error("not implemented")},ue="function"==typeof Uint32Array;var fe="function"==typeof Uint32Array?Uint32Array:null;var le="function"==typeof Uint32Array?Uint32Array:void 0;var ce=function(){var e,r,t;if("function"!=typeof fe)return!1;try{r=new fe(r=[1,3.14,-3.14,4294967296,4294967297]),t=r,e=(ue&&t instanceof Uint32Array||"[object Uint32Array]"===v(t))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?le:function(){throw new Error("not implemented")},ye="function"==typeof Int32Array;var se="function"==typeof Int32Array?Int32Array:null;var he="function"==typeof Int32Array?Int32Array:void 0;var pe=function(){var e,r,t;if("function"!=typeof se)return!1;try{r=new se([1,3.14,-3.14,2147483648]),t=r,e=(ye&&t instanceof Int32Array||"[object Int32Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-2147483648===r[3]}catch(r){e=!1}return e}()?he:function(){throw new Error("not implemented")},me="function"==typeof Uint16Array;var ge="function"==typeof Uint16Array?Uint16Array:null;var we="function"==typeof Uint16Array?Uint16Array:void 0;var be=function(){var e,r,t;if("function"!=typeof ge)return!1;try{r=new ge(r=[1,3.14,-3.14,65536,65537]),t=r,e=(me&&t instanceof Uint16Array||"[object Uint16Array]"===v(t))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?we:function(){throw new Error("not implemented")},ve="function"==typeof Int16Array;var de="function"==typeof Int16Array?Int16Array:null;var Ee="function"==typeof Int16Array?Int16Array:void 0;var Ae=function(){var e,r,t;if("function"!=typeof de)return!1;try{r=new de([1,3.14,-3.14,32768]),t=r,e=(ve&&t instanceof Int16Array||"[object Int16Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-32768===r[3]}catch(r){e=!1}return e}()?Ee:function(){throw new Error("not implemented")},_e="function"==typeof Uint8Array;var Te="function"==typeof Uint8Array?Uint8Array:null;var je="function"==typeof Uint8Array?Uint8Array:void 0;var xe=function(){var e,r,t;if("function"!=typeof Te)return!1;try{r=new Te(r=[1,3.14,-3.14,256,257]),t=r,e=(_e&&t instanceof Uint8Array||"[object Uint8Array]"===v(t))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){e=!1}return e}()?je:function(){throw new Error("not implemented")},Be="function"==typeof Uint8ClampedArray;var Le="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Se="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var Re=function(){var e,r,t;if("function"!=typeof Le)return!1;try{r=new Le([-1,0,1,3.14,4.99,255,256]),t=r,e=(Be&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===v(t))&&0===r[0]&&0===r[1]&&1===r[2]&&3===r[3]&&5===r[4]&&255===r[5]&&255===r[6]}catch(r){e=!1}return e}()?Se:function(){throw new Error("not implemented")},Ve="function"==typeof Int8Array;var ke="function"==typeof Int8Array?Int8Array:null;var Ie="function"==typeof Int8Array?Int8Array:void 0;var Ce=function(){var e,r,t;if("function"!=typeof ke)return!1;try{r=new ke([1,3.14,-3.14,128]),t=r,e=(Ve&&t instanceof Int8Array||"[object Int8Array]"===v(t))&&1===r[0]&&3===r[1]&&-3===r[2]&&-128===r[3]}catch(r){e=!1}return e}()?Ie:function(){throw new Error("not implemented")};function Oe(e){return"number"==typeof e}var Me=Number,Ue=Me.prototype.toString;var Ne=p();function Fe(e){return"object"==typeof e&&(e instanceof Me||(Ne?function(e){try{return Ue.call(e),!0}catch(e){return!1}}(e):"[object Number]"===v(e)))}function Pe(e){return Oe(e)||Fe(e)}c(Pe,"isPrimitive",Oe),c(Pe,"isObject",Fe);var Ye=Me.NEGATIVE_INFINITY;function We(e){return e<ne&&e>Ye&&Y(e)}function Ge(e){return Oe(e)&&We(e)}function Je(e){return Fe(e)&&We(e.valueOf())}function Xe(e){return Ge(e)||Je(e)}function qe(e){return Ge(e)&&e>=0}function ze(e){return Je(e)&&e.valueOf()>=0}function De(e){return qe(e)||ze(e)}c(Xe,"isPrimitive",Ge),c(Xe,"isObject",Je),c(De,"isPrimitive",qe),c(De,"isObject",ze);function He(e){return"object"==typeof e&&null!==e&&"number"==typeof e.length&&Y(e.length)&&e.length>=0&&e.length<=4294967295}var Ke="function"==typeof ArrayBuffer;function Qe(e){return Ke&&e instanceof ArrayBuffer||"[object ArrayBuffer]"===v(e)}function Ze(e){return"object"==typeof e&&null!==e&&!C(e)}function $e(e,r){if(!(this instanceof $e))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Oe(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!Oe(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:e}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:r}),this}c($e,"BYTES_PER_ELEMENT",8),c($e.prototype,"BYTES_PER_ELEMENT",8),c($e.prototype,"byteLength",16),c($e.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c($e.prototype,"toJSON",(function(){var e={type:"Complex128"};return e.re=this.re,e.im=this.im,e}));var er="function"==typeof Math.fround?Math.fround:null,rr=new ae(1);var tr="function"==typeof er?er:function(e){return rr[0]=e,rr[0]};function nr(e,r){if(!(this instanceof nr))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!Oe(e))throw new TypeError("invalid argument. Real component must be a number primitive. Value: `"+e+"`.");if(!Oe(r))throw new TypeError("invalid argument. Imaginary component must be a number primitive. Value: `"+r+"`.");return l(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:tr(e)}),l(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:tr(r)}),this}function or(e){return e instanceof $e||e instanceof nr||"object"==typeof e&&null!==e&&"number"==typeof e.re&&"number"==typeof e.im}function ir(e){return Y(e/2)}function ar(e,r,t){l(e,r,{configurable:!1,enumerable:!1,get:t})}function ur(e){return e.re}function fr(e){return e.im}function lr(e,r){return new ae(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function cr(e,r){return new re(e.buffer,e.byteOffset+e.BYTES_PER_ELEMENT*r,2*(e.length-r))}function yr(e,r){return e[r]}function sr(e,r){return e.get(r)}function hr(e,r,t){e[r]=t}function pr(e,r,t){e.set(t,r)}function mr(e){var r=Boolean(e.get&&e.set);return{data:e,accessors:r,getter:r?sr:yr,setter:r?pr:hr}}function gr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(He(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!or(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(ur(n),fr(n))}return r}function wr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,He(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!or(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(ur(i),fr(i))}return n}function br(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!or(n=r[o]))return null;e[i]=ur(n),e[i+1]=fr(n),i+=2}return e}c(nr,"BYTES_PER_ELEMENT",4),c(nr.prototype,"BYTES_PER_ELEMENT",4),c(nr.prototype,"byteLength",8),c(nr.prototype,"toString",(function(){var e=""+this.re;return this.im<0?e+=" - "+-this.im:e+=" + "+this.im,e+="i"})),c(nr.prototype,"toJSON",(function(){var e={type:"Complex64"};return e.re=this.re,e.im=this.im,e}));var vr=2*ae.BYTES_PER_ELEMENT,dr=X();function Er(e){return e instanceof jr||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Ar(e){return e===jr||"Complex128Array"===e.name}function _r(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===vr}function Tr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===2*vr}function jr(){var e,r,t,n;if(r=arguments.length,!(this instanceof jr))return 0===r?new jr:1===r?new jr(arguments[0]):2===r?new jr(arguments[0],arguments[1]):new jr(arguments[0],arguments[1],arguments[2]);if(0===r)t=new ae(0);else if(1===r)if(qe(arguments[0]))t=new ae(2*arguments[0]);else if(W(arguments[0]))if((n=(t=arguments[0]).length)&&C(t)&&or(t[0])){if(null===(t=br(new ae(2*n),t))){if(!ir(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ae(arguments[0])}}else{if(_r(t))t=lr(t,0);else if(Tr(t))t=cr(t,0);else if(!ir(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new ae(t)}else if(Qe(arguments[0])){if(!Y((t=arguments[0]).byteLength/vr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+vr+". Byte length: `"+t.byteLength+"`.");t=new ae(t)}else{if(!Ze(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===dr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!F(t[q]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!F((t=t[q]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=gr(t))instanceof Error)throw t;t=new ae(t)}else{if(!Qe(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!qe(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Y(e/vr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+vr+". Value: `"+e+"`.");if(2===r){if(!Y((n=t.byteLength-e)/vr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+vr+". View byte length: `"+n+"`.");t=new ae(t,e)}else{if(!qe(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*vr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*vr+"`.");t=new ae(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}function xr(e){return e.re}function Br(e){return e.im}function Lr(e){var r,t,n;for(r=[];!(t=e.next()).done;)if(He(n=t.value)&&n.length>=2)r.push(n[0],n[1]);else{if(!or(n))return new TypeError("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `"+n+"`.");r.push(xr(n),Br(n))}return r}function Sr(e,r,t){var n,o,i,a;for(n=[],a=-1;!(o=e.next()).done;)if(a+=1,He(i=r.call(t,o.value,a))&&i.length>=2)n.push(i[0],i[1]);else{if(!or(i))return new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+i+"`.");n.push(xr(i),Br(i))}return n}function Rr(e,r){var t,n,o,i;for(t=r.length,i=0,o=0;o<t;o++){if(!or(n=r[o]))return null;e[i]=xr(n),e[i+1]=Br(n),i+=2}return e}c(jr,"BYTES_PER_ELEMENT",vr),c(jr,"name","Complex64Array"),c(jr,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!F(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!F(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Er(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(or(l=n.call(r,e.get(c),c)))i[y]=ur(l),i[y+1]=fr(l);else{if(!(He(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(W(e)){if(n){for(u=e.length,a=mr(e),c=0;c<u;c++)if(!or(a.getter(e,c))){f=!0;break}if(f){if(!ir(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(or(l=n.call(r,a.getter(e,c),c)))i[y]=ur(l),i[y+1]=fr(l);else{if(!(He(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Ze(e)&&dr&&F(e[q])){if(!F((i=e[q]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?wr(i,n,r):gr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(jr,"of",(function(){var e,r;if(!F(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Ar(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),ar(jr.prototype,"buffer",(function(){return this._buffer.buffer})),ar(jr.prototype,"byteLength",(function(){return this._buffer.byteLength})),ar(jr.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(jr.prototype,"BYTES_PER_ELEMENT",jr.BYTES_PER_ELEMENT),c(jr.prototype,"copyWithin",(function(e,r){if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(jr.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new nr(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),q&&c(t,q,(function(){return r.entries()})),t})),c(jr.prototype,"get",(function(e){var r;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qe(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new nr((r=this._buffer)[e*=2],r[e+1])})),ar(jr.prototype,"length",(function(){return this._length})),c(jr.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Er(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!qe(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(or(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=ur(e),void(n[t+1]=fr(e))}if(Er(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new ae(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!W(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!or(e[f])){i=!0;break}if(i){if(!ir(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new ae(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=ur(u),n[t+1]=fr(u),t+=2}}));var Vr=2*re.BYTES_PER_ELEMENT,kr=X();function Ir(e){return e instanceof Ur||"object"==typeof e&&null!==e&&("Complex64Array"===e.constructor.name||"Complex128Array"===e.constructor.name)&&"number"==typeof e._length&&"object"==typeof e._buffer}function Cr(e){return e===Ur||"Complex64Array"===e.name}function Or(e){return"object"==typeof e&&null!==e&&"Complex64Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Vr/2}function Mr(e){return"object"==typeof e&&null!==e&&"Complex128Array"===e.constructor.name&&e.BYTES_PER_ELEMENT===Vr}function Ur(){var e,r,t,n;if(r=arguments.length,!(this instanceof Ur))return 0===r?new Ur:1===r?new Ur(arguments[0]):2===r?new Ur(arguments[0],arguments[1]):new Ur(arguments[0],arguments[1],arguments[2]);if(0===r)t=new re(0);else if(1===r)if(qe(arguments[0]))t=new re(2*arguments[0]);else if(W(arguments[0]))if((n=(t=arguments[0]).length)&&C(t)&&or(t[0])){if(null===(t=Rr(new re(2*n),t))){if(!ir(n))throw new RangeError("invalid argument. Array-like object input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new re(arguments[0])}}else{if(Or(t))t=lr(t,0);else if(Mr(t))t=cr(t,0);else if(!ir(n))throw new RangeError("invalid argument. Array-like object and typed array input arguments must have a length which is a multiple of two. Length: `"+n+"`.");t=new re(t)}else if(Qe(arguments[0])){if(!Y((t=arguments[0]).byteLength/Vr))throw new RangeError("invalid argument. ArrayBuffer byte length must be a multiple of "+Vr+". Byte length: `"+t.byteLength+"`.");t=new re(t)}else{if(!Ze(arguments[0]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+arguments[0]+"`.");if(t=arguments[0],!1===kr)throw new TypeError("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `"+t+"`.");if(!F(t[q]))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `"+t+"`.");if(!F((t=t[q]()).next))throw new TypeError("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable.");if((t=Lr(t))instanceof Error)throw t;t=new re(t)}else{if(!Qe(t=arguments[0]))throw new TypeError("invalid argument. First argument must be an array buffer. Value: `"+t+"`.");if(!qe(e=arguments[1]))throw new TypeError("invalid argument. Byte offset must be a nonnegative integer. Value: `"+e+"`.");if(!Y(e/Vr))throw new RangeError("invalid argument. Byte offset must be a multiple of "+Vr+". Value: `"+e+"`.");if(2===r){if(!Y((n=t.byteLength-e)/Vr))throw new RangeError("invalid arguments. ArrayBuffer view byte length must be a multiple of "+Vr+". View byte length: `"+n+"`.");t=new re(t,e)}else{if(!qe(n=arguments[2]))throw new TypeError("invalid argument. Length must be a nonnegative integer. Value: `"+n+"`.");if(n*Vr>t.byteLength-e)throw new RangeError("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `"+n*Vr+"`.");t=new re(t,e,2*n)}}return c(this,"_buffer",t),c(this,"_length",t.length/2),this}c(Ur,"BYTES_PER_ELEMENT",Vr),c(Ur,"name","Complex128Array"),c(Ur,"from",(function(e){var r,t,n,o,i,a,u,f,l,c,y;if(!F(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Cr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!F(n=arguments[1]))throw new TypeError("invalid argument. Second argument must be a function. Value: `"+n+"`.");t>2&&(r=arguments[2])}if(Ir(e)){if(u=e.length,n){for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(or(l=n.call(r,e.get(c),c)))i[y]=xr(l),i[y+1]=Br(l);else{if(!(He(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(W(e)){if(n){for(u=e.length,a=mr(e),c=0;c<u;c++)if(!or(a.getter(e,c))){f=!0;break}if(f){if(!ir(u))throw new RangeError("invalid argument. First argument must have a length which is a multiple of two. Length: `"+u+"`.");for(i=(o=new this(u/2))._buffer,c=0;c<u;c++)i[c]=n.call(r,a.getter(e,c),c);return o}for(i=(o=new this(u))._buffer,y=0,c=0;c<u;c++){if(or(l=n.call(r,a.getter(e,c),c)))i[y]=xr(l),i[y+1]=Br(l);else{if(!(He(l)&&l.length>=2))throw new TypeError("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `"+l+"`.");i[y]=l[0],i[y+1]=l[1]}y+=2}return o}return new this(e)}if(Ze(e)&&kr&&F(e[q])){if(!F((i=e[q]()).next))throw new TypeError("invalid argument. First argument must be an array-like object or an iterable.");if((a=n?Sr(i,n,r):Lr(i))instanceof Error)throw a;for(i=(o=new this(u=a.length/2))._buffer,c=0;c<u;c++)i[c]=a[c];return o}throw new TypeError("invalid argument. First argument must be an array-like object or an iterable. Value: `"+e+"`.")})),c(Ur,"of",(function(){var e,r;if(!F(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!Cr(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(e=[],r=0;r<arguments.length;r++)e.push(arguments[r]);return new this(e)})),ar(Ur.prototype,"buffer",(function(){return this._buffer.buffer})),ar(Ur.prototype,"byteLength",(function(){return this._buffer.byteLength})),ar(Ur.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),c(Ur.prototype,"BYTES_PER_ELEMENT",Ur.BYTES_PER_ELEMENT),c(Ur.prototype,"copyWithin",(function(e,r){if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*e,2*r):this._buffer.copyWithin(2*e,2*r,2*arguments[2]),this})),c(Ur.prototype,"entries",(function(){var e,r,t,n,o,i,a;if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return r=this,e=this._buffer,n=this._length,i=-1,a=-2,c(t={},"next",(function(){var r;if(i+=1,o||i>=n)return{done:!0};return r=new $e(e[a+=2],e[a+1]),{value:[i,r],done:!1}})),c(t,"return",(function(e){if(o=!0,arguments.length)return{value:e,done:!0};return{done:!0}})),q&&c(t,q,(function(){return r.entries()})),t})),c(Ur.prototype,"get",(function(e){var r;if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!qe(e))throw new TypeError("invalid argument. Must provide a nonnegative integer. Value: `"+e+"`.");if(!(e>=this._length))return new $e((r=this._buffer)[e*=2],r[e+1])})),ar(Ur.prototype,"length",(function(){return this._length})),c(Ur.prototype,"set",(function(e){var r,t,n,o,i,a,u,f,l;if(!Ir(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!qe(t=arguments[1]))throw new TypeError("invalid argument. Index argument must be a nonnegative integer. Value: `"+t+"`.")}else t=0;if(or(e)){if(t>=this._length)throw new RangeError("invalid argument. Index argument is out-of-bounds. Value: `"+t+"`.");return n[t*=2]=xr(e),void(n[t+1]=Br(e))}if(Ir(e)){if(t+(a=e._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e._buffer,l=n.byteOffset+t*Vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new re(r.length),f=0;f<r.length;f++)o[f]=r[f];r=o}for(t*=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2}else{if(!W(e))throw new TypeError("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `"+e+"`.");for(a=e.length,f=0;f<a;f++)if(!or(e[f])){i=!0;break}if(i){if(!ir(a))throw new RangeError("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `"+a+"`.");if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(r=e,l=n.byteOffset+t*Vr,r.buffer===n.buffer&&r.byteOffset<l&&r.byteOffset+r.byteLength>l){for(o=new re(a),f=0;f<a;f++)o[f]=r[f];r=o}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=r[l],n[t+1]=r[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=e[f],n[t]=xr(u),n[t+1]=Br(u),t+=2}}));var Nr=[re,ae,pe,ce,Ae,be,Ce,xe,Re,jr,Ur],Fr=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],Pr=Fr.length;function Yr(e){var r;if(C(e))return"generic";if(M(e))return null;for(r=0;r<Pr;r++)if(e instanceof Nr[r])return Fr[r];return Q[U(e)]||null}function Wr(){var e,r=arguments,t=r[0],n="https://stdlib.io/e/"+t+"?";for(e=1;e<r.length;e++)n+="&arg[]="+encodeURIComponent(r[e]);return n}return function e(r){var t,n,o,i,a,u,f;if(!W(r))throw new TypeError(Wr("00p2a",r));if(arguments.length>1){if(!F(i=arguments[1]))throw new TypeError(Wr("00p2S",i));t=arguments[2]}return f=-1,c(n={},"next",i?l:y),c(n,"return",s),q&&c(n,q,h),u=Yr(r),a=J(r)?D(u):K(u),n;function l(){var e;if(o)return{done:!0};for(e=r.length,f+=1;f<e&&void 0===a(r,f);)f+=1;return f>=e?(o=!0,{done:!0}):{value:i.call(t,a(r,f),f,r),done:!1}}function y(){var e;if(o)return{done:!0};for(e=r.length,f+=1;f<e&&void 0===a(r,f);)f+=1;return f>=e?(o=!0,{done:!0}):{value:a(r,f),done:!1}}function s(e){return o=!0,arguments.length?{value:e,done:!0}:{done:!0}}function h(){return i?e(r,i,t):e(r)}}}));
//# sourceMappingURL=browser.js.map
