// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).sparsearray2iterator=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function f(r){return"string"==typeof r}var l=Math.abs,c=String.prototype.toLowerCase,s=String.prototype.toUpperCase,y=String.prototype.replace,h=/e\+(\d)$/,p=/e-(\d)$/,g=/^(\d+)$/,m=/^(\d+)e/,w=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function d(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":l(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=y.call(n,v,"$1e"),n=y.call(n,b,"e"),n=y.call(n,w,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=y.call(n,h,"e+0$1"),n=y.call(n,p,"e-0$1"),r.alternate&&(n=y.call(n,g,"$1."),n=y.call(n,m,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===s.call(r.specifier)?s.call(n):c.call(n)}function E(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}function A(r,e,t){var n=e-r.length;return n<0?r:r=t?r+E(n):E(n)+r}var T=String.fromCharCode,_=isNaN,x=Array.isArray;function j(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function k(r){var e,t,n,o,a,l,c,s,y;if(!x(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(l="",c=1,s=0;s<r.length;s++)if(f(n=r[s]))l+=n;else{if(e=void 0!==n.precision,!(n=j(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+n+"`.");for(n.mapping&&(c=n.mapping),t=n.flags,y=0;y<t.length;y++)switch(o=t.charAt(y)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[c],10),c+=1,_(n.width))throw new TypeError("the argument for * width at position "+c+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[c],10),c+=1,_(n.precision))throw new TypeError("the argument for * precision at position "+c+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[c],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!_(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=_(a)?String(n.arg):T(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=d(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=A(n.arg,n.width,n.padRight)),l+=n.arg||"",c+=1}return l}var V=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function L(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function R(r){var e,t,n,i;for(t=[],i=0,n=V.exec(r);n;)(e=r.slice(i,V.lastIndex-n[0].length)).length&&t.push(e),t.push(L(n)),i=V.lastIndex,n=V.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function S(r){return"string"==typeof r}function B(r){var e,t,n;if(!S(r))throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=R(r),(t=new Array(arguments.length))[0]=e,n=1;n<t.length;n++)t[n]=arguments[n];return k.apply(null,t)}var I,C=Object.prototype,F=C.toString,O=C.__defineGetter__,M=C.__defineSetter__,U=C.__lookupGetter__,N=C.__lookupSetter__;I=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===F.call(t))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(U.call(r,e)||N.call(r,e)?(n=r.__proto__,r.__proto__=C,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&O&&O.call(r,e,t.get),a&&M&&M.call(r,e,t.set),r};var P=I;function Y(r,e,t){P(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var W=/./;function $(r){return"boolean"==typeof r}var G="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function Z(){return G&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var J=Object.prototype.hasOwnProperty;function z(r,e){return null!=r&&J.call(r,e)}var H="function"==typeof Symbol?Symbol:void 0,q="function"==typeof H?H.toStringTag:"";var D=Z()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[q],e=z(r,q);try{r[q]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[q]=t:delete r[q],n}:function(r){return X.call(r)},K=Boolean,Q=Boolean.prototype.toString;var rr=Z();function er(r){return"object"==typeof r&&(r instanceof K||(rr?function(r){try{return Q.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===D(r)))}function tr(r){return $(r)||er(r)}function nr(){return new Function("return this;")()}Y(tr,"isPrimitive",$),Y(tr,"isObject",er);var ir="object"==typeof self?self:null,or="object"==typeof window?window:null,ar="object"==typeof global?global:null,ur="object"==typeof globalThis?globalThis:null;var fr=function(r){if(arguments.length){if(!$(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return nr()}if(ur)return ur;if(ir)return ir;if(or)return or;if(ar)return ar;throw new Error("unexpected error. Unable to resolve global object.")}(),lr=fr.document&&fr.document.childNodes,cr=Int8Array;function sr(){return/^\s*function\s*([^(]*)/i}var yr=/^\s*function\s*([^(]*)/i;Y(sr,"REGEXP",yr);var hr=Array.isArray?Array.isArray:function(r){return"[object Array]"===D(r)};function pr(r){return null!==r&&"object"==typeof r}function gr(r){return pr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}function mr(r){var e,t,n;if(("Object"===(t=D(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=yr.exec(n.toString()))return e[1]}return gr(r)?"Buffer":t}Y(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!hr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var wr="function"==typeof W||"object"==typeof cr||"function"==typeof lr?function(r){return mr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?mr(r).toLowerCase():e};function br(r){return"function"===wr(r)}var vr=Math.floor;function dr(r){return vr(r)===r}function Er(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dr(r.length)&&r.length>=0&&r.length<=9007199254740991}var Ar="function";function Tr(r){return typeof r.get===Ar&&typeof r.set===Ar}function _r(){return"function"==typeof H&&"symbol"==typeof H("foo")&&z(H,"iterator")&&"symbol"==typeof H.iterator}var xr=_r()?Symbol.iterator:null,jr={complex128:function(r,e){return r.get(e)},complex64:function(r,e){return r.get(e)},default:function(r,e){return r.get(e)}};function kr(r){var e=jr[r];return"function"==typeof e?e:jr.default}var Vr={float64:function(r,e){return r[e]},float32:function(r,e){return r[e]},int32:function(r,e){return r[e]},int16:function(r,e){return r[e]},int8:function(r,e){return r[e]},uint32:function(r,e){return r[e]},uint16:function(r,e){return r[e]},uint8:function(r,e){return r[e]},uint8c:function(r,e){return r[e]},generic:function(r,e){return r[e]},default:function(r,e){return r[e]}};function Lr(r){var e=Vr[r];return"function"==typeof e?e:Vr.default}var Rr={Float32Array:"float32",Float64Array:"float64",Array:"generic",Int16Array:"int16",Int32Array:"int32",Int8Array:"int8",Uint16Array:"uint16",Uint32Array:"uint32",Uint8Array:"uint8",Uint8ClampedArray:"uint8c",Complex64Array:"complex64",Complex128Array:"complex128"},Sr="function"==typeof Float64Array;var Br="function"==typeof Float64Array?Float64Array:null;var Ir="function"==typeof Float64Array?Float64Array:void 0;var Cr=function(){var r,e,t;if("function"!=typeof Br)return!1;try{e=new Br([1,3.14,-3.14,NaN]),t=e,r=(Sr&&t instanceof Float64Array||"[object Float64Array]"===D(t))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?Ir:function(){throw new Error("not implemented")},Fr="function"==typeof Float32Array;var Or=Number.POSITIVE_INFINITY,Mr="function"==typeof Float32Array?Float32Array:null;var Ur="function"==typeof Float32Array?Float32Array:void 0;var Nr=function(){var r,e,t;if("function"!=typeof Mr)return!1;try{e=new Mr([1,3.14,-3.14,5e40]),t=e,r=(Fr&&t instanceof Float32Array||"[object Float32Array]"===D(t))&&1===e[0]&&3.140000104904175===e[1]&&-3.140000104904175===e[2]&&e[3]===Or}catch(e){r=!1}return r}()?Ur:function(){throw new Error("not implemented")},Pr="function"==typeof Uint32Array;var Yr="function"==typeof Uint32Array?Uint32Array:null;var Wr="function"==typeof Uint32Array?Uint32Array:void 0;var $r=function(){var r,e,t;if("function"!=typeof Yr)return!1;try{e=new Yr(e=[1,3.14,-3.14,4294967296,4294967297]),t=e,r=(Pr&&t instanceof Uint32Array||"[object Uint32Array]"===D(t))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Wr:function(){throw new Error("not implemented")},Gr="function"==typeof Int32Array;var Zr="function"==typeof Int32Array?Int32Array:null;var Xr="function"==typeof Int32Array?Int32Array:void 0;var Jr=function(){var r,e,t;if("function"!=typeof Zr)return!1;try{e=new Zr([1,3.14,-3.14,2147483648]),t=e,r=(Gr&&t instanceof Int32Array||"[object Int32Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-2147483648===e[3]}catch(e){r=!1}return r}()?Xr:function(){throw new Error("not implemented")},zr="function"==typeof Uint16Array;var Hr="function"==typeof Uint16Array?Uint16Array:null;var qr="function"==typeof Uint16Array?Uint16Array:void 0;var Dr=function(){var r,e,t;if("function"!=typeof Hr)return!1;try{e=new Hr(e=[1,3.14,-3.14,65536,65537]),t=e,r=(zr&&t instanceof Uint16Array||"[object Uint16Array]"===D(t))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?qr:function(){throw new Error("not implemented")},Kr="function"==typeof Int16Array;var Qr="function"==typeof Int16Array?Int16Array:null;var re="function"==typeof Int16Array?Int16Array:void 0;var ee=function(){var r,e,t;if("function"!=typeof Qr)return!1;try{e=new Qr([1,3.14,-3.14,32768]),t=e,r=(Kr&&t instanceof Int16Array||"[object Int16Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-32768===e[3]}catch(e){r=!1}return r}()?re:function(){throw new Error("not implemented")},te="function"==typeof Uint8Array;var ne="function"==typeof Uint8Array?Uint8Array:null;var ie="function"==typeof Uint8Array?Uint8Array:void 0;var oe=function(){var r,e,t;if("function"!=typeof ne)return!1;try{e=new ne(e=[1,3.14,-3.14,256,257]),t=e,r=(te&&t instanceof Uint8Array||"[object Uint8Array]"===D(t))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ie:function(){throw new Error("not implemented")},ae="function"==typeof Uint8ClampedArray;var ue="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var fe="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;var le=function(){var r,e,t;if("function"!=typeof ue)return!1;try{e=new ue([-1,0,1,3.14,4.99,255,256]),t=e,r=(ae&&t instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===D(t))&&0===e[0]&&0===e[1]&&1===e[2]&&3===e[3]&&5===e[4]&&255===e[5]&&255===e[6]}catch(e){r=!1}return r}()?fe:function(){throw new Error("not implemented")},ce="function"==typeof Int8Array;var se="function"==typeof Int8Array?Int8Array:null;var ye="function"==typeof Int8Array?Int8Array:void 0;var he=function(){var r,e,t;if("function"!=typeof se)return!1;try{e=new se([1,3.14,-3.14,128]),t=e,r=(ce&&t instanceof Int8Array||"[object Int8Array]"===D(t))&&1===e[0]&&3===e[1]&&-3===e[2]&&-128===e[3]}catch(e){r=!1}return r}()?ye:function(){throw new Error("not implemented")};function pe(r){return"number"==typeof r}var ge=Number,me=ge.prototype.toString;var we=Z();function be(r){return"object"==typeof r&&(r instanceof ge||(we?function(r){try{return me.call(r),!0}catch(r){return!1}}(r):"[object Number]"===D(r)))}function ve(r){return pe(r)||be(r)}Y(ve,"isPrimitive",pe),Y(ve,"isObject",be);var de=ge.NEGATIVE_INFINITY;function Ee(r){return r<Or&&r>de&&dr(r)}function Ae(r){return pe(r)&&Ee(r)}function Te(r){return be(r)&&Ee(r.valueOf())}function _e(r){return Ae(r)||Te(r)}function xe(r){return Ae(r)&&r>=0}function je(r){return Te(r)&&r.valueOf()>=0}function ke(r){return xe(r)||je(r)}Y(_e,"isPrimitive",Ae),Y(_e,"isObject",Te),Y(ke,"isPrimitive",xe),Y(ke,"isObject",je);function Ve(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&dr(r.length)&&r.length>=0&&r.length<=4294967295}var Le="function"==typeof ArrayBuffer;function Re(r){return Le&&r instanceof ArrayBuffer||"[object ArrayBuffer]"===D(r)}function Se(r){return"object"==typeof r&&null!==r&&!hr(r)}function Be(r,e){if(!(this instanceof Be))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!pe(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!pe(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:r}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:e}),this}Y(Be,"BYTES_PER_ELEMENT",8),Y(Be.prototype,"BYTES_PER_ELEMENT",8),Y(Be.prototype,"byteLength",16),Y(Be.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Be.prototype,"toJSON",(function(){var r={type:"Complex128"};return r.re=this.re,r.im=this.im,r}));var Ie="function"==typeof Math.fround?Math.fround:null,Ce=new Nr(1);var Fe="function"==typeof Ie?Ie:function(r){return Ce[0]=r,Ce[0]};function Oe(r,e){if(!(this instanceof Oe))throw new TypeError("invalid invocation. Constructor must be called with the `new` keyword.");if(!pe(r))throw new TypeError(B("invalid argument. Real component must be a number. Value: `%s`.",r));if(!pe(e))throw new TypeError(B("invalid argument. Imaginary component must be a number. Value: `%s`.",e));return P(this,"re",{configurable:!1,enumerable:!0,writable:!1,value:Fe(r)}),P(this,"im",{configurable:!1,enumerable:!0,writable:!1,value:Fe(e)}),this}function Me(r){return r instanceof Be||r instanceof Oe||"object"==typeof r&&null!==r&&"number"==typeof r.re&&"number"==typeof r.im}function Ue(r){return dr(r/2)}function Ne(r,e,t){P(r,e,{configurable:!1,enumerable:!1,get:t})}function Pe(r){return r.re}function Ye(r){return r.im}function We(r,e){return new Nr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function $e(r,e){return new Cr(r.buffer,r.byteOffset+r.BYTES_PER_ELEMENT*e,2*(r.length-e))}function Ge(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Ve(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Me(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(Pe(n),Ye(n))}return e}function Ze(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Ve(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Me(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(Pe(o),Ye(o))}return n}function Xe(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Me(n=e[i]))return null;r[o]=Pe(n),r[o+1]=Ye(n),o+=2}return r}Y(Oe,"BYTES_PER_ELEMENT",4),Y(Oe.prototype,"BYTES_PER_ELEMENT",4),Y(Oe.prototype,"byteLength",8),Y(Oe.prototype,"toString",(function(){var r=""+this.re;return this.im<0?r+=" - "+-this.im:r+=" + "+this.im,r+="i"})),Y(Oe.prototype,"toJSON",(function(){var r={type:"Complex64"};return r.re=this.re,r.im=this.im,r}));var Je=2*Nr.BYTES_PER_ELEMENT,ze=_r();function He(r){return r instanceof Qe||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function qe(r){return r===Qe||"Complex128Array"===r.name}function De(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===Je}function Ke(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===2*Je}function Qe(){var r,e,t,n;if(e=arguments.length,!(this instanceof Qe))return 0===e?new Qe:1===e?new Qe(arguments[0]):2===e?new Qe(arguments[0],arguments[1]):new Qe(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Nr(0);else if(1===e)if(xe(arguments[0]))t=new Nr(2*arguments[0]);else if(Er(arguments[0]))if((n=(t=arguments[0]).length)&&hr(t)&&Me(t[0])){if(null===(t=Xe(new Nr(2*n),t))){if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Nr(arguments[0])}}else{if(De(t))t=We(t,0);else if(Ke(t))t=$e(t,0);else if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Nr(t)}else if(Re(arguments[0])){if(!dr((t=arguments[0]).byteLength/Je))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",Je,t.byteLength));t=new Nr(t)}else{if(!Se(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===ze)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!br(t[xr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!br((t=t[xr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=Ge(t))instanceof Error)throw t;t=new Nr(t)}else{if(!Re(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!xe(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!dr(r/Je))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",Je,r));if(2===e){if(!dr((n=t.byteLength-r)/Je))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",Je,n));t=new Nr(t,r)}else{if(!xe(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*Je>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*Je));t=new Nr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}function rt(r){return r.re}function et(r){return r.im}function tt(r){var e,t,n;for(e=[];!(t=r.next()).done;)if(Ve(n=t.value)&&n.length>=2)e.push(n[0],n[1]);else{if(!Me(n))return new TypeError(B("invalid argument. An iterator must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",n));e.push(rt(n),et(n))}return e}function nt(r,e,t){var n,i,o,a;for(n=[],a=-1;!(i=r.next()).done;)if(a+=1,Ve(o=e.call(t,i.value,a))&&o.length>=2)n.push(o[0],o[1]);else{if(!Me(o))return new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",o));n.push(rt(o),et(o))}return n}function it(r,e){var t,n,i,o;for(t=e.length,o=0,i=0;i<t;i++){if(!Me(n=e[i]))return null;r[o]=rt(n),r[o+1]=et(n),o+=2}return r}Y(Qe,"BYTES_PER_ELEMENT",Je),Y(Qe,"name","Complex64Array"),Y(Qe,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!br(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(He(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,r.get(s),s)))o[y]=Pe(c),o[y+1]=Ye(c);else{if(!(Ve(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Er(r)){if(n){for(f=r.length,u=r.get&&r.set?kr("default"):Lr("default"),s=0;s<f;s++)if(!Me(u(r,s))){l=!0;break}if(l){if(!Ue(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of %u. Length: `%u`.",2,f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,u(r,s),s)))o[y]=Pe(c),o[y+1]=Ye(c);else{if(!(Ve(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Se(r)&&ze&&br(r[xr])){if(!br((o=r[xr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?Ze(o,n,e):Ge(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(Qe,"of",(function(){var r,e;if(!br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!qe(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ne(Qe.prototype,"buffer",(function(){return this._buffer.buffer})),Ne(Qe.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ne(Qe.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(Qe.prototype,"BYTES_PER_ELEMENT",Qe.BYTES_PER_ELEMENT),Y(Qe.prototype,"copyWithin",(function(r,e){if(!He(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(Qe.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!He(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Oe(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),xr&&Y(t,xr,(function(){return e.entries()})),t})),Y(Qe.prototype,"get",(function(r){var e;if(!He(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xe(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Oe((e=this._buffer)[r*=2],e[r+1])})),Ne(Qe.prototype,"length",(function(){return this._length})),Y(Qe.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!He(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!xe(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Me(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=Pe(r),void(n[t+1]=Ye(r))}if(He(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*Je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Nr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Er(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Me(r[f])){o=!0;break}if(o){if(!Ue(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*Je,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Nr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=Pe(u),n[t+1]=Ye(u),t+=2}}));var ot=2*Cr.BYTES_PER_ELEMENT,at=_r();function ut(r){return r instanceof st||"object"==typeof r&&null!==r&&("Complex64Array"===r.constructor.name||"Complex128Array"===r.constructor.name)&&"number"==typeof r._length&&"object"==typeof r._buffer}function ft(r){return r===st||"Complex64Array"===r.name}function lt(r){return"object"==typeof r&&null!==r&&"Complex64Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ot/2}function ct(r){return"object"==typeof r&&null!==r&&"Complex128Array"===r.constructor.name&&r.BYTES_PER_ELEMENT===ot}function st(){var r,e,t,n;if(e=arguments.length,!(this instanceof st))return 0===e?new st:1===e?new st(arguments[0]):2===e?new st(arguments[0],arguments[1]):new st(arguments[0],arguments[1],arguments[2]);if(0===e)t=new Cr(0);else if(1===e)if(xe(arguments[0]))t=new Cr(2*arguments[0]);else if(Er(arguments[0]))if((n=(t=arguments[0]).length)&&hr(t)&&Me(t[0])){if(null===(t=it(new Cr(2*n),t))){if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Cr(arguments[0])}}else{if(lt(t))t=We(t,0);else if(ct(t))t=$e(t,0);else if(!Ue(n))throw new RangeError(B("invalid argument. Array-like object and typed array arguments must have a length which is a multiple of two. Length: `%u`.",n));t=new Cr(t)}else if(Re(arguments[0])){if(!dr((t=arguments[0]).byteLength/ot))throw new RangeError(B("invalid argument. ArrayBuffer byte length must be a multiple of %u. Byte length: `%u`.",ot,t.byteLength));t=new Cr(t)}else{if(!Se(arguments[0]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",arguments[0]));if(t=arguments[0],!1===at)throw new TypeError(B("invalid argument. Environment lacks Symbol.iterator support. Must provide a length, ArrayBuffer, typed array, or array-like object. Value: `%s`.",t));if(!br(t[xr]))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if(!br((t=t[xr]()).next))throw new TypeError(B("invalid argument. Must provide a length, ArrayBuffer, typed array, array-like object, or an iterable. Value: `%s`.",t));if((t=tt(t))instanceof Error)throw t;t=new Cr(t)}else{if(!Re(t=arguments[0]))throw new TypeError(B("invalid argument. First argument must be an ArrayBuffer. Value: `%s`.",t));if(!xe(r=arguments[1]))throw new TypeError(B("invalid argument. Byte offset must be a nonnegative integer. Value: `%s`.",r));if(!dr(r/ot))throw new RangeError(B("invalid argument. Byte offset must be a multiple of %u. Value: `%u`.",ot,r));if(2===e){if(!dr((n=t.byteLength-r)/ot))throw new RangeError(B("invalid arguments. ArrayBuffer view byte length must be a multiple of %u. View byte length: `%u`.",ot,n));t=new Cr(t,r)}else{if(!xe(n=arguments[2]))throw new TypeError(B("invalid argument. Length must be a nonnegative integer. Value: `%s`.",n));if(n*ot>t.byteLength-r)throw new RangeError(B("invalid arguments. ArrayBuffer has insufficient capacity. Either decrease the array length or provide a bigger buffer. Minimum capacity: `%u`.",n*ot));t=new Cr(t,r,2*n)}}return Y(this,"_buffer",t),Y(this,"_length",t.length/2),this}Y(st,"BYTES_PER_ELEMENT",ot),Y(st,"name","Complex128Array"),Y(st,"from",(function(r){var e,t,n,i,o,a,u,f,l,c,s,y;if(!br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if((t=arguments.length)>1){if(!br(n=arguments[1]))throw new TypeError(B("invalid argument. Second argument must be a function. Value: `%s`.",n));t>2&&(e=arguments[2])}if(ut(r)){if(f=r.length,n){for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,r.get(s),s)))o[y]=rt(c),o[y+1]=et(c);else{if(!(Ve(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Er(r)){if(n){for(f=r.length,u=r.get&&r.set?kr("default"):Lr("default"),s=0;s<f;s++)if(!Me(u(r,s))){l=!0;break}if(l){if(!Ue(f))throw new RangeError(B("invalid argument. First argument must have a length which is a multiple of two. Length: `%u`.",f));for(o=(i=new this(f/2))._buffer,s=0;s<f;s++)o[s]=n.call(e,u(r,s),s);return i}for(o=(i=new this(f))._buffer,y=0,s=0;s<f;s++){if(Me(c=n.call(e,u(r,s),s)))o[y]=rt(c),o[y+1]=et(c);else{if(!(Ve(c)&&c.length>=2))throw new TypeError(B("invalid argument. Callback must return either a two-element array containing real and imaginary components or a complex number. Value: `%s`.",c));o[y]=c[0],o[y+1]=c[1]}y+=2}return i}return new this(r)}if(Se(r)&&at&&br(r[xr])){if(!br((o=r[xr]()).next))throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r));if((a=n?nt(o,n,e):tt(o))instanceof Error)throw a;for(o=(i=new this(f=a.length/2))._buffer,s=0;s<f;s++)o[s]=a[s];return i}throw new TypeError(B("invalid argument. First argument must be an array-like object or an iterable. Value: `%s`.",r))})),Y(st,"of",(function(){var r,e;if(!br(this))throw new TypeError("invalid invocation. `this` context must be a constructor.");if(!ft(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");for(r=[],e=0;e<arguments.length;e++)r.push(arguments[e]);return new this(r)})),Ne(st.prototype,"buffer",(function(){return this._buffer.buffer})),Ne(st.prototype,"byteLength",(function(){return this._buffer.byteLength})),Ne(st.prototype,"byteOffset",(function(){return this._buffer.byteOffset})),Y(st.prototype,"BYTES_PER_ELEMENT",st.BYTES_PER_ELEMENT),Y(st.prototype,"copyWithin",(function(r,e){if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return 2===arguments.length?this._buffer.copyWithin(2*r,2*e):this._buffer.copyWithin(2*r,2*e,2*arguments[2]),this})),Y(st.prototype,"entries",(function(){var r,e,t,n,i,o,a;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");return e=this,r=this._buffer,n=this._length,o=-1,a=-2,Y(t={},"next",(function(){var e;if(o+=1,i||o>=n)return{done:!0};return e=new Be(r[a+=2],r[a+1]),{value:[o,e],done:!1}})),Y(t,"return",(function(r){if(i=!0,arguments.length)return{value:r,done:!0};return{done:!0}})),xr&&Y(t,xr,(function(){return e.entries()})),t})),Y(st.prototype,"get",(function(r){var e;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(!xe(r))throw new TypeError(B("invalid argument. Must provide a nonnegative integer. Value: `%s`.",r));if(!(r>=this._length))return new Be((e=this._buffer)[r*=2],e[r+1])})),Ne(st.prototype,"length",(function(){return this._length})),Y(st.prototype,"set",(function(r){var e,t,n,i,o,a,u,f,l;if(!ut(this))throw new TypeError("invalid invocation. `this` is not a complex number array.");if(n=this._buffer,arguments.length>1){if(!xe(t=arguments[1]))throw new TypeError(B("invalid argument. Index argument must be a nonnegative integer. Value: `%s`.",t))}else t=0;if(Me(r)){if(t>=this._length)throw new RangeError(B("invalid argument. Index argument is out-of-bounds. Value: `%u`.",t));return n[t*=2]=rt(r),void(n[t+1]=et(r))}if(ut(r)){if(t+(a=r._length)>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r._buffer,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Cr(e.length),f=0;f<e.length;f++)i[f]=e[f];e=i}for(t*=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2}else{if(!Er(r))throw new TypeError(B("invalid argument. First argument must be either a complex number, an array-like object, or a complex number array. Value: `%s`.",r));for(a=r.length,f=0;f<a;f++)if(!Me(r[f])){o=!0;break}if(o){if(!Ue(a))throw new RangeError(B("invalid argument. Array-like object arguments must have a length which is a multiple of two. Length: `%u`.",a));if(t+a/2>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");if(e=r,l=n.byteOffset+t*ot,e.buffer===n.buffer&&e.byteOffset<l&&e.byteOffset+e.byteLength>l){for(i=new Cr(a),f=0;f<a;f++)i[f]=e[f];e=i}for(t*=2,a/=2,l=0,f=0;f<a;f++)n[t]=e[l],n[t+1]=e[l+1],t+=2,l+=2;return}if(t+a>this._length)throw new RangeError("invalid arguments. Target array lacks sufficient storage to accommodate source values.");for(t*=2,f=0;f<a;f++)u=r[f],n[t]=rt(u),n[t+1]=et(u),t+=2}}));var yt=[Cr,Nr,Jr,$r,ee,Dr,he,oe,le,Qe,st],ht=["float64","float32","int32","uint32","int16","uint16","int8","uint8","uint8c","complex64","complex128"],pt=ht.length;function gt(r){var e;if(hr(r))return"generic";if(gr(r))return null;for(e=0;e<pt;e++)if(r instanceof yt[e])return ht[e];return Rr[mr(r)]||null}function mt(){var r,e=arguments,t=e[0],n="https://stdlib.io/e/"+t+"?";for(r=1;r<e.length;r++)n+="&arg[]="+encodeURIComponent(e[r]);return n}return function r(e){var t,n,i,o,a,u,f;if(!Er(e))throw new TypeError(mt("01f2O,GW",e));if(arguments.length>1){if(!br(o=arguments[1]))throw new TypeError(mt("01f2H,G6",o));t=arguments[2]}return f=-1,Y(n={},"next",o?l:c),Y(n,"return",s),xr&&Y(n,xr,y),u=gt(e),a=Tr(e)?kr(u):Lr(u),n;function l(){var r;if(i)return{done:!0};for(r=e.length,f+=1;f<r&&void 0===a(e,f);)f+=1;return f>=r?(i=!0,{done:!0}):{value:o.call(t,a(e,f),f,e),done:!1}}function c(){var r;if(i)return{done:!0};for(r=e.length,f+=1;f<r&&void 0===a(e,f);)f+=1;return f>=r?(i=!0,{done:!0}):{value:a(e,f),done:!1}}function s(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function y(){return o?r(e,o,t):r(e)}}}));
//# sourceMappingURL=index.js.map