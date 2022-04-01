// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).sparsearray2iterator=e()}(this,(function(){"use strict";function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,f=i.__lookupSetter__;var s=function(r,e,t){var n,s,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((s="value"in t)&&(c.call(r,e)||f.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,s&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=s,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},d=g,m=/./;var h=function(r){return"boolean"==typeof r};var b=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var y=function(){return b&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,E=w;var j=function(r){return E.call(r)},P=Object.prototype.hasOwnProperty;var _=function(r,e){return null!=r&&P.call(r,e)},T="function"==typeof Symbol?Symbol.toStringTag:"",S=_,x=T,O=w;var V=j,k=function(r){var e,t,n;if(null==r)return O.call(r);t=r[x],e=S(r,x);try{r[x]=void 0}catch(e){return O.call(r)}return n=O.call(r),e?r[x]=t:delete r[x],n},I=y()?k:V,A=Boolean.prototype.toString;var F=I,R=function(r){try{return A.call(r),!0}catch(r){return!1}},$=y();var M=function(r){return"object"==typeof r&&(r instanceof Boolean||($?R(r):"[object Boolean]"===F(r)))},C=h,N=M;var B=d,G=function(r){return C(r)||N(r)},L=M;B(G,"isPrimitive",h),B(G,"isObject",L);var Z=G;var W=function(){return new Function("return this;")()},X="object"==typeof self?self:null,z="object"==typeof window?window:null,U="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Y="object"==typeof U?U:null;module.exports=Y;var D=Z.isPrimitive,q=W,H=X,J=z,K=r(Object.freeze({__proto__:null}));var Q=function(r){if(arguments.length){if(!D(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return q()}if(H)return H;if(J)return J;if(K)return K;throw new Error("unexpected error. Unable to resolve global object.")},rr=Q(),er=rr.document&&rr.document.childNodes,tr=Int8Array,nr=m,ir=er,or=tr;var ar=function(){return"function"==typeof nr||"object"==typeof or||"function"==typeof ir};var ur=function(){return/^\s*function\s*([^(]*)/i},cr=ur;d(cr,"REGEXP",ur());var fr=cr,sr=I;var lr=Array.isArray?Array.isArray:function(r){return"[object Array]"===sr(r)};var pr=function(r){return null!==r&&"object"==typeof r};d(pr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!lr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(pr));var vr=pr;var gr=I,dr=fr.REGEXP,mr=function(r){return vr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var hr=function(r){var e,t,n;if(("Object"===(t=gr(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=dr.exec(n.toString()))return e[1]}return mr(r)?"Buffer":t},br=hr;var yr=hr;var wr=function(r){var e;return null===r?"null":"object"===(e=typeof r)?br(r).toLowerCase():e},Er=function(r){return yr(r).toLowerCase()},jr=ar()?Er:wr;var Pr=function(r){return"function"===jr(r)},_r=Math.floor;var Tr=function(r){return _r(r)===r},Sr=Tr;var xr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Sr(r.length)&&r.length>=0&&r.length<=9007199254740991},Or=_;var Vr=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")&&Or(Symbol,"iterator")&&"symbol"==typeof Symbol.iterator}()?Symbol.iterator:null;var kr=function(r,e){return r[e]},Ir=function(r,e){return r.get(e)},Ar=function(r,e,t){r[e]=t},Fr=function(r,e,t){r.set(t,e)};var Rr=function(r){var e=Boolean(r.get&&r.set);return{data:r,accessors:e,getter:e?Ir:kr,setter:e?Fr:Ar}};var $r=function(r){return"string"==typeof r},Mr=String.prototype.valueOf;var Cr=I,Nr=function(r){try{return Mr.call(r),!0}catch(r){return!1}},Br=y();var Gr=function(r){return"object"==typeof r&&(r instanceof String||(Br?Nr(r):"[object String]"===Cr(r)))},Lr=$r,Zr=Gr;var Wr=d,Xr=function(r){return Lr(r)||Zr(r)},zr=Gr;Wr(Xr,"isPrimitive",$r),Wr(Xr,"isObject",zr);var Ur=Xr;var Yr=function(r){return"number"==typeof r},Dr=Number,qr=Dr.prototype.toString;var Hr=I,Jr=Dr,Kr=function(r){try{return qr.call(r),!0}catch(r){return!1}},Qr=y();var re=function(r){return"object"==typeof r&&(r instanceof Jr||(Qr?Kr(r):"[object Number]"===Hr(r)))},ee=Yr,te=re;var ne=d,ie=function(r){return ee(r)||te(r)},oe=re;ne(ie,"isPrimitive",Yr),ne(ie,"isObject",oe);var ae=ie,ue=Number.POSITIVE_INFINITY,ce=Dr.NEGATIVE_INFINITY,fe=ue,se=ce,le=Tr;var pe=function(r){return r<fe&&r>se&&le(r)},ve=ae.isPrimitive,ge=pe;var de=function(r){return ve(r)&&ge(r)},me=ae.isObject,he=pe;var be=function(r){return me(r)&&he(r.valueOf())},ye=de,we=be;var Ee=d,je=function(r){return ye(r)||we(r)},Pe=be;Ee(je,"isPrimitive",de),Ee(je,"isObject",Pe);var _e=je;var Te=function(r){return r!=r},Se=ae.isPrimitive,xe=Te;var Oe=function(r){return Se(r)&&xe(r)},Ve=ae.isObject,ke=Te;var Ie=function(r){return Ve(r)&&ke(r.valueOf())},Ae=Oe,Fe=Ie;var Re=d,$e=function(r){return Ae(r)||Fe(r)},Me=Ie;Re($e,"isPrimitive",Oe),Re($e,"isObject",Me);var Ce=xr,Ne=_e.isPrimitive,Be=Ur.isPrimitive,Ge=$e.isPrimitive;var Le=function(r,e,t){var n,i,o;if(!Ce(r)&&!Be(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!Ne(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(Be(r)){if(!Be(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,Ge(e)){for(o=i;o<n;o++)if(Ge(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},Ze=Le,We=Ur.isPrimitive;var Xe=function(r){if(!We(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ze=Ur.isPrimitive;var Ue=function(r){if(!ze(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},Ye=Xe,De=Ue,qe=Ur.isPrimitive;var He=function(r){return qe(r)&&r===De(r)&&r!==Ye(r)},Je=ue,Ke=ce;var Qe=function(r){return r==r&&r>Ke&&r<Je},rt=_e.isPrimitive;var et=function(r){return rt(r)&&r>=0},tt=_e.isObject;var nt=function(r){return tt(r)&&r.valueOf()>=0},it=et,ot=nt;var at=d,ut=function(r){return it(r)||ot(r)},ct=nt;at(ut,"isPrimitive",et),at(ut,"isObject",ct);var ft=ut.isPrimitive,st=Ur.isPrimitive;var lt=function(r,e){var t,n;if(!st(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!ft(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},pt=_e.isPrimitive,vt=Ur.isPrimitive;var gt=function(r,e,t){var n,i;if(!vt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!vt(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!pt(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0},dt=lt,mt=gt;var ht=function(r,e,t){var n=!1,i=e-r.length;return i<0||(mt(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+dt("0",i):dt("0",i)+r,n&&(r="-"+r)),r},bt=He,yt=Ue,wt=Xe,Et=Qe,jt=ae.isPrimitive,Pt=ht;var _t=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Et(n)){if(!jt(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Pt(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Pt(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=bt(r.specifier)?yt(t):wt(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Tt=Ur.isPrimitive,St=/[-\/\\^$*+?.()|[\]{}]/g;var xt=function(r){var e,t;if(!Tt(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(St,"\\$&"):(e=(e=r.substring(1,t)).replace(St,"\\$&"),r=r[0]+e+r.substring(t))},Ot=RegExp.prototype.exec;var Vt=I,kt=function(r){try{return Ot.call(r),!0}catch(r){return!1}},It=y();var At=xt,Ft=Pr,Rt=Ur.isPrimitive,$t=function(r){return"object"==typeof r&&(r instanceof RegExp||(It?kt(r):"[object RegExp]"===Vt(r)))};var Mt=He,Ct=Ue,Nt=Xe,Bt=function(r,e,t){if(!Rt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Rt(e))e=At(e),e=new RegExp(e,"g");else if(!$t(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Rt(t)&&!Ft(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Gt=Qe,Lt=ae.isPrimitive,Zt=function(r){return Math.abs(r)},Wt=/e\+(\d)$/,Xt=/e-(\d)$/,zt=/^(\d+)$/,Ut=/^(\d+)e/,Yt=/\.0$/,Dt=/\.0*e/,qt=/(\..*[^0])0*e/;var Ht=function(r){var e,t,n=parseFloat(r.arg);if(!Gt(n)){if(!Lt(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Zt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Bt(t,qt,"$1e"),t=Bt(t,Dt,"e"),t=Bt(t,Yt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Bt(t,Wt,"e+0$1"),t=Bt(t,Xt,"e-0$1"),r.alternate&&(t=Bt(t,zt,"$1."),t=Bt(t,Ut,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Mt(r.specifier)?Ct(t):Nt(t)},Jt=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var Kt=lt;var Qt=Ur.isPrimitive,rn=Ze,en=Te,tn=_t,nn=Ht,on=function(r){var e,t,n,i,o;for(e=0,n=[],o=Jt.exec(r);o;)(t=r.slice(e,Jt.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=Jt.lastIndex,o=Jt.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},an=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+Kt(" ",n):Kt(" ",n)+r},un=ht,cn=String.fromCharCode;var fn=function(r){var e,t,n,i,o,a,u,c,f;if(!Qt(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=on(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],Qt(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,f=0;f<t.length;f++)switch(i=t.charAt(f)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!rn(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,en(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,en(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=tn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!en(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=en(o)?String(n.arg):cn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=nn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=un(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=an(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},sn=d,ln=Pr,pn=xr,vn=Vr,gn=Rr,dn=fn;var mn=function r(e){var t,n,i,o,a,u;if(!pn(e))throw new TypeError(dn("invalid argument. First argument must be an array-like object. Value: `%s`.",e));if(arguments.length>1){if(!ln(o=arguments[1]))throw new TypeError(dn("invalid argument. Second argument must be a function. Value: `%s`.",o));t=arguments[2]}return u=-1,sn(n={},"next",o?c:f),sn(n,"return",s),vn&&sn(n,vn,l),a=gn(e).getter,n;function c(){var r;if(i)return{done:!0};for(r=e.length,u+=1;u<r&&void 0===a(e,u);)u+=1;return u>=r?(i=!0,{done:!0}):{value:o.call(t,a(e,u),u,e),done:!1}}function f(){var r;if(i)return{done:!0};for(r=e.length,u+=1;u<r&&void 0===a(e,u);)u+=1;return u>=r?(i=!0,{done:!0}):{value:a(e,u),done:!1}}function s(r){return i=!0,arguments.length?{value:r,done:!0}:{done:!0}}function l(){return o?r(e,o,t):r(e)}};return mn}));
//# sourceMappingURL=bundle.js.map
