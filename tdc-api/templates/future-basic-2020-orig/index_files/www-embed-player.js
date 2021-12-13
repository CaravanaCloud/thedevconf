(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ca(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var da=ca(this);function r(a,b){if(b)a:{var c=da;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
r("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.h=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.h};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
r("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=da[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ea(aa(this))}})}return a});
function ea(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function t(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ha(a){if(!(a instanceof Array)){a=t(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
var ia="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},ja=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ia(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}(),ka;
if("function"==typeof Object.setPrototypeOf)ka=Object.setPrototypeOf;else{var la;a:{var ma={a:!0},na={};try{na.__proto__=ma;la=na.a;break a}catch(a){}la=!1}ka=la?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var oa=ka;
function v(a,b){a.prototype=ia(b.prototype);a.prototype.constructor=a;if(oa)oa(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.T=b.prototype}
function qa(){this.C=!1;this.l=null;this.i=void 0;this.h=1;this.s=this.m=0;this.A=this.j=null}
function ra(a){if(a.C)throw new TypeError("Generator is already running");a.C=!0}
qa.prototype.u=function(a){this.i=a};
function sa(a,b){a.j={kb:b,ob:!0};a.h=a.m||a.s}
qa.prototype.return=function(a){this.j={return:a};this.h=this.s};
function w(a,b,c){a.h=c;return{value:b}}
qa.prototype.o=function(a){this.h=a};
function ta(a,b,c){a.m=b;void 0!=c&&(a.s=c)}
function ua(a,b){a.h=b;a.m=0}
function va(a){a.m=0;var b=a.j.kb;a.j=null;return b}
function wa(a){a.A=[a.j];a.m=0;a.s=0}
function xa(a){var b=a.A.splice(0)[0];(b=a.j=a.j||b)?b.ob?a.h=a.m||a.s:void 0!=b.o&&a.s<b.o?(a.h=b.o,a.j=null):a.h=a.s:a.h=0}
function ya(a){this.h=new qa;this.i=a}
function za(a,b){ra(a.h);var c=a.h.l;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.h.return);
a.h.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.h.l,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.h.C=!1,e;var f=e.value}catch(g){return a.h.l=null,sa(a.h,g),Ba(a)}a.h.l=null;d.call(a.h,f);return Ba(a)}
function Ba(a){for(;a.h.h;)try{var b=a.i(a.h);if(b)return a.h.C=!1,{value:b.value,done:!1}}catch(c){a.h.i=void 0,sa(a.h,c)}a.h.C=!1;if(a.h.j){b=a.h.j;a.h.j=null;if(b.ob)throw b.kb;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ra(a.h);a.h.l?b=Aa(a,a.h.l.next,b,a.h.u):(a.h.u(b),b=Ba(a));return b};
this.throw=function(b){ra(a.h);a.h.l?b=Aa(a,a.h.l["throw"],b,a.h.u):(sa(a.h,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function x(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
r("Reflect",function(a){return a?a:{}});
r("Reflect.construct",function(){return ja});
r("Reflect.setPrototypeOf",function(a){return a?a:oa?function(b,c){try{return oa(b,c),!0}catch(d){return!1}}:null});
r("Promise",function(a){function b(g){this.h=0;this.j=void 0;this.i=[];this.C=!1;var h=this.l();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.h=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.i=function(g){if(null==this.h){this.h=[];var h=this;this.j(function(){h.s()})}this.h.push(g)};
var e=da.setTimeout;c.prototype.j=function(g){e(g,0)};
c.prototype.s=function(){for(;this.h&&this.h.length;){var g=this.h;this.h=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.l(l)}}}this.h=null};
c.prototype.l=function(g){this.j(function(){throw g;})};
b.prototype.l=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.N),reject:g(this.s)}};
b.prototype.N=function(g){if(g===this)this.s(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.aa(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.I(g):this.m(g)}};
b.prototype.I=function(g){var h=void 0;try{h=g.then}catch(k){this.s(k);return}"function"==typeof h?this.la(h,g):this.m(g)};
b.prototype.s=function(g){this.u(2,g)};
b.prototype.m=function(g){this.u(1,g)};
b.prototype.u=function(g,h){if(0!=this.h)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.h);this.h=g;this.j=h;2===this.h&&this.S();this.A()};
b.prototype.S=function(){var g=this;e(function(){if(g.H()){var h=da.console;"undefined"!==typeof h&&h.error(g.j)}},1)};
b.prototype.H=function(){if(this.C)return!1;var g=da.CustomEvent,h=da.Event,k=da.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=da.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.j;return k(g)};
b.prototype.A=function(){if(null!=this.i){for(var g=0;g<this.i.length;++g)f.i(this.i[g]);this.i=null}};
var f=new c;b.prototype.aa=function(g){var h=this.l();g.Aa(h.resolve,h.reject)};
b.prototype.la=function(g,h){var k=this.l();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(u,q){return"function"==typeof u?function(z){try{l(u(z))}catch(A){n(A)}}:q}
var l,n,p=new b(function(u,q){l=u;n=q});
this.Aa(k(g,l),k(h,n));return p};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.Aa=function(g,h){function k(){switch(l.h){case 1:g(l.j);break;case 2:h(l.j);break;default:throw Error("Unexpected state: "+l.h);}}
var l=this;null==this.i?f.i(k):this.i.push(k);this.C=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=t(g),n=l.next();!n.done;n=l.next())d(n.value).Aa(h,k)})};
b.all=function(g){var h=t(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(z){return function(A){u[z]=A;q--;0==q&&l(u)}}
var u=[],q=0;do u.push(void 0),q++,d(k.value).Aa(p(u.length-1),n),k=h.next();while(!k.done)})};
return b});
function Fa(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
r("WeakMap",function(a){function b(k){this.h=(h+=Math.random()+1).toString();if(k){k=t(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!Fa(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;Object.isExtensible(n)&&e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n.delete(k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!Fa(k,g))throw Error("WeakMap key fail: "+k);k[g][this.h]=l;return this};
b.prototype.get=function(k){return d(k)&&Fa(k,g)?k[g][this.h]:void 0};
b.prototype.has=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.h)};
b.prototype.delete=function(k){return d(k)&&Fa(k,g)&&Fa(k[g],this.h)?delete k[g][this.h]:!1};
return b});
r("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.h;return ea(function(){if(l){for(;l.head!=h.h;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.data_[l];if(n&&Fa(h.data_,l))for(h=0;h<n.length;h++){var p=n[h];if(k!==k&&p.key!==p.key||k===p.key)return{id:l,list:n,index:h,entry:p}}return{id:l,list:n,index:-1,entry:void 0}}
function e(h){this.data_={};this.h=b();this.size=0;if(h){h=t(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(t([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.data_[l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this.h,previous:this.h.previous,head:this.h,key:h,value:k},l.list.push(l.entry),this.h.previous.next=l.entry,this.h.previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.data_[h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.data_={};this.h=this.h.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ga(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
r("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
r("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
r("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ga(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
function Ha(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
r("Array.prototype.entries",function(a){return a?a:function(){return Ha(this,function(b,c){return[b,c]})}});
r("Object.setPrototypeOf",function(a){return a||oa});
var Ia="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)Fa(d,e)&&(a[e]=d[e])}return a};
r("Object.assign",function(a){return a||Ia});
r("Set",function(a){function b(c){this.h=new Map;if(c){c=t(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.h.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(t([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.h.set(c,c);this.size=this.h.size;return this};
b.prototype.delete=function(c){c=this.h.delete(c);this.size=this.h.size;return c};
b.prototype.clear=function(){this.h.clear();this.size=0};
b.prototype.has=function(c){return this.h.has(c)};
b.prototype.entries=function(){return this.h.entries()};
b.prototype.values=function(){return this.h.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.h.forEach(function(f){return c.call(d,f,f,e)})};
return b});
r("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push([d,b[d]]);return c}});
r("Array.prototype.keys",function(a){return a?a:function(){return Ha(this,function(b){return b})}});
r("Array.prototype.values",function(a){return a?a:function(){return Ha(this,function(b,c){return c})}});
r("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
r("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
r("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ga(this,b,"includes").indexOf(b,c||0)}});
r("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
r("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
r("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
r("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)Fa(b,d)&&c.push(b[d]);return c}});
var y=this||self;function B(a,b,c){a=a.split(".");c=c||y;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function C(a,b){a=a.split(".");b=b||y;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ja(){}
function La(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function Ma(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function Na(a){var b=Ma(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Oa(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Pa(a){return Object.prototype.hasOwnProperty.call(a,Qa)&&a[Qa]||(a[Qa]=++Ra)}
var Qa="closure_uid_"+(1E9*Math.random()>>>0),Ra=0;function Sa(a,b,c){return a.call.apply(a.bind,arguments)}
function Ua(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Va(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Va=Sa:Va=Ua;return Va.apply(null,arguments)}
function Wa(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
function Xa(a,b){B(a,b,void 0)}
function D(a,b){function c(){}
c.prototype=b.prototype;a.T=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.jn=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Ya(a){return a}
;function Za(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Za);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.Db=b)}
D(Za,Error);Za.prototype.name="CustomError";function $a(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.j=!b&&/[?&]ae=1(&|$)/.test(a);this.l=!b&&/[?&]ae=2(&|$)/.test(a);if((this.h=/[?&]adurl=([^&]*)/.exec(a))&&this.h[1]){try{var c=decodeURIComponent(this.h[1])}catch(d){c=null}this.i=c}}
;function ab(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var bb=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},E=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},cb=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},db=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},eb=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
E(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function fb(a,b){a:{for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:"string"===typeof a?a.charAt(b):a[b]}
function gb(a,b){b=bb(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function hb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function ib(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Na(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function jb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function kb(a){var b=lb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function mb(a){for(var b in a)return!1;return!0}
function nb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function ob(){var a=F("PLAYER_VARS",{});return null!==a&&"privembed"in a?a.privembed:!1}
function pb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function qb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function rb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=rb(a[c]);return b}
var sb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function tb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<sb.length;f++)c=sb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var ub;function vb(){if(void 0===ub){var a=null,b=y.trustedTypes;if(b&&b.createPolicy){try{a=b.createPolicy("goog#html",{createHTML:Ya,createScript:Ya,createScriptURL:Ya})}catch(c){y.console&&y.console.error(c.message)}ub=a}else ub=a}return ub}
;function wb(a,b){this.h=a===xb&&b||""}
wb.prototype.ea=!0;wb.prototype.da=function(){return this.h};
function yb(a){return new wb(xb,a)}
var xb={};yb("");var zb={};function Ab(a){this.h=zb===zb?a:"";this.ea=!0}
Ab.prototype.da=function(){return this.h.toString()};
Ab.prototype.toString=function(){return this.h.toString()};function Bb(a,b){this.h=b===Cb?a:""}
m=Bb.prototype;m.ea=!0;m.da=function(){return this.h.toString()};
m.Pa=!0;m.La=function(){return 1};
m.toString=function(){return this.h+""};
function Db(a){if(a instanceof Bb&&a.constructor===Bb)return a.h;Ma(a);return"type_error:TrustedResourceUrl"}
var Cb={};function Eb(a){var b=vb();a=b?b.createScriptURL(a):a;return new Bb(a,Cb)}
;var Fb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},Gb=/&/g,Hb=/</g,Ib=/>/g,Jb=/"/g,Kb=/'/g,Lb=/\x00/g,Mb=/[\x00&<>"']/;function Nb(a,b){this.h=b===Ob?a:""}
m=Nb.prototype;m.ea=!0;m.da=function(){return this.h.toString()};
m.Pa=!0;m.La=function(){return 1};
m.toString=function(){return this.h.toString()};
function Pb(a){if(a instanceof Nb&&a.constructor===Nb)return a.h;Ma(a);return"type_error:SafeUrl"}
var Qb=RegExp('^(?:audio/(?:3gpp2|3gpp|aac|L16|midi|mp3|mp4|mpeg|oga|ogg|opus|x-m4a|x-matroska|x-wav|wav|webm)|font/\\w+|image/(?:bmp|gif|jpeg|jpg|png|tiff|webp|x-icon)|video/(?:mpeg|mp4|ogg|webm|quicktime|x-matroska))(?:;\\w+=(?:\\w+|"[\\w;,= ]+"))*$',"i"),Rb=/^data:(.*);base64,[a-z0-9+\/]+=*$/i,Sb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Ob={},Tb=new Nb("about:invalid#zClosurez",Ob);function Ub(){var a=y.navigator;return a&&(a=a.userAgent)?a:""}
function G(a){return-1!=Ub().indexOf(a)}
;function Vb(){return(G("Chrome")||G("CriOS"))&&!G("Edge")||G("Silk")}
;var Wb={};function Xb(a,b,c){this.h=c===Wb?a:"";this.i=b;this.ea=this.Pa=!0}
Xb.prototype.La=function(){return this.i};
Xb.prototype.da=function(){return this.h.toString()};
Xb.prototype.toString=function(){return this.h.toString()};
function Yb(a,b){var c=vb();a=c?c.createHTML(a):a;return new Xb(a,b,Wb)}
;function Zb(a,b){b instanceof Nb||b instanceof Nb||(b="object"==typeof b&&b.ea?b.da():String(b),Sb.test(b)||(b="about:invalid#zClosurez"),b=new Nb(b,Ob));a.href=Pb(b)}
function $b(a,b){a.rel="stylesheet";a.href=Db(b).toString();(b=ac('style[nonce],link[rel="stylesheet"][nonce]',a.ownerDocument&&a.ownerDocument.defaultView))&&a.setAttribute("nonce",b)}
function bc(){return ac("script[nonce]",void 0)}
var cc=/^[\w+/_-]+[=]{0,2}$/;function ac(a,b){b=(b||y).document;return b.querySelector?(a=b.querySelector(a))&&(a=a.nonce||a.getAttribute("nonce"))&&cc.test(a)?a:"":""}
;function dc(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function fc(a){return a?decodeURI(a):a}
function gc(a){return fc(a.match(ec)[3]||null)}
function hc(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)hc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ic(a){var b=[],c;for(c in a)hc(c,a[c],b);return b.join("&")}
function jc(a,b){b=ic(b);if(b){var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);a=[a.substr(0,d),e,a.substr(c)];c=a[1];a[1]=b?c?c+"&"+b:b:c;b=a[0]+(a[1]?"?"+a[1]:"")+a[2]}else b=a;return b}
var kc=/#|$/;function lc(){return G("iPhone")&&!G("iPod")&&!G("iPad")}
;function mc(a){mc[" "](a);return a}
mc[" "]=Ja;var nc=G("Opera"),oc=G("Trident")||G("MSIE"),pc=G("Edge"),qc=G("Gecko")&&!(-1!=Ub().toLowerCase().indexOf("webkit")&&!G("Edge"))&&!(G("Trident")||G("MSIE"))&&!G("Edge"),rc=-1!=Ub().toLowerCase().indexOf("webkit")&&!G("Edge"),sc=G("Android");function tc(){var a=y.document;return a?a.documentMode:void 0}
var uc;a:{var vc="",wc=function(){var a=Ub();if(qc)return/rv:([^\);]+)(\)|;)/.exec(a);if(pc)return/Edge\/([\d\.]+)/.exec(a);if(oc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(rc)return/WebKit\/(\S+)/.exec(a);if(nc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
wc&&(vc=wc?wc[1]:"");if(oc){var xc=tc();if(null!=xc&&xc>parseFloat(vc)){uc=String(xc);break a}}uc=vc}var yc=uc,zc;if(y.document&&oc){var Ac=tc();zc=Ac?Ac:parseInt(yc,10)||void 0}else zc=void 0;var Bc=zc;var Cc=lc()||G("iPod"),Dc=G("iPad");!G("Android")||Vb();Vb();var Ec=G("Safari")&&!(Vb()||G("Coast")||G("Opera")||G("Edge")||G("Edg/")||G("OPR")||G("Firefox")||G("FxiOS")||G("Silk")||G("Android"))&&!(lc()||G("iPad")||G("iPod"));var Fc={},Gc=null;
function Hc(a,b){Na(a);void 0===b&&(b=0);if(!Gc){Gc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Fc[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Gc[h]&&(Gc[h]=g)}}}b=Fc[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Ic="function"===typeof Uint8Array;var Jc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol(void 0):void 0;function Kc(a){Object.isFrozen(a)||(Jc?a[Jc]|=1:void 0!==a.h?a.h|=1:Object.defineProperties(a,{h:{value:1,configurable:!0,writable:!0,enumerable:!1}}));return a}
;function Lc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Mc;function Nc(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "object":if(a&&!Array.isArray(a)&&Ic&&null!=a&&a instanceof Uint8Array)return Hc(a)}return a}
;function Oc(a,b){if(null!=a)return Array.isArray(a)||Lc(a)?Qc(a,b):b(a)}
function Qc(a,b){if(Array.isArray(a)){for(var c=Array(a.length),d=0;d<a.length;d++)c[d]=Oc(a[d],b);if(Array.isArray(a)){var e;Jc?e=a[Jc]:e=a.h;a=!!((null==e?0:e)&1)}else a=!1;a&&Kc(c);return c}e={};for(c in a)e[c]=Oc(a[c],b);return e}
function Rc(a){if(a&&"object"==typeof a&&a.toJSON)return a.toJSON();a=Nc(a);return Array.isArray(a)?Qc(a,Rc):a}
function Sc(a){return Ic&&null!=a&&a instanceof Uint8Array?new Uint8Array(a):a}
;var Tc;function H(a,b,c){var d=Tc;Tc=null;a||(a=d);d=this.constructor.qn;a||(a=d?[d]:[]);this.j=(d?0:-1)-(this.constructor.pn||0);this.h=null;this.K=a;a:{d=this.K.length;a=d-1;if(d&&(d=this.K[a],Lc(d))){this.l=a-this.j;this.i=d;break a}void 0!==b&&-1<b?(this.l=Math.max(b,a+1-this.j),this.i=null):this.l=Number.MAX_VALUE}if(c)for(b=0;b<c.length;b++)a=c[b],a<this.l?(a+=this.j,(d=this.K[a])?Array.isArray(d)&&Kc(d):this.K[a]=Uc):(Vc(this),(d=this.i[a])?Array.isArray(d)&&Kc(d):this.i[a]=Uc)}
var Uc=Object.freeze(Kc([]));function Vc(a){var b=a.l+a.j;a.K[b]||(a.i=a.K[b]={})}
function Wc(a,b,c){return-1===b?null:b>=a.l?a.i?a.i[b]:void 0:(void 0===c?0:c)&&a.i&&a.i[b]?a.i[b]:a.K[b+a.j]}
function Xc(a,b,c){c=void 0===c?!1:c;var d=Wc(a,b,c);null==d&&(d=Uc);d===Uc&&(d=Kc(d.slice()),I(a,b,d,c));return d}
function I(a,b,c,d){(void 0===d?0:d)||b>=a.l?(Vc(a),a.i[b]=c):a.K[b+a.j]=c;return a}
function Yc(a,b,c,d){(c=Zc(a,c))&&c!==b&&null!=d&&(a.h&&c in a.h&&(a.h[c]=void 0),I(a,c,void 0));return I(a,b,d)}
function Zc(a,b){for(var c=0,d=0;d<b.length;d++){var e=b[d];null!=Wc(a,e)&&(0!==c&&I(a,c,void 0,!1),c=e)}return c}
function $c(a,b,c,d,e){if(-1===c)return null;a.h||(a.h={});var f=a.h[c];if(f)return f;e=Wc(a,c,void 0===e?!1:e);if(null==e&&!d)return f;b=new b(e);return a.h[c]=b}
function ad(a,b,c,d){a.h||(a.h={});var e=a.h[c];if(!e){d=Xc(a,c,void 0===d?!1:d);e=[];for(var f=0;f<d.length;f++)e[f]=new b(d[f]);a.h[c]=e}return e}
function bd(a,b,c,d){a.h||(a.h={});var e=c?c.K:c;a.h[b]=c;return I(a,b,e,void 0===d?!1:d)}
function cd(a,b,c){var d=dd;a.h||(a.h={});var e=c?c.K:c;a.h[b]=c;Yc(a,b,d,e)}
function ed(a,b,c,d){var e=ad(a,d,b);c=c?c:new d;a=Xc(a,b);e.push(c);a.push(c.K)}
H.prototype.toJSON=function(){var a=this.K;return Mc?a:Qc(a,Rc)};
function fd(a,b){return Nc(b)}
H.prototype.toString=function(){return this.K.toString()};
H.prototype.clone=function(){var a=this.constructor,b=Qc(this.K,Sc);Tc=b;a=new a(b);Tc=null;gd(a,this);return a};
function gd(a,b){b.s&&(a.s=b.s.slice());var c=b.h;if(c){b=b.i;for(var d in c){var e=c[d];if(e){var f=!(!b||!b[d]),g=+d;if(Array.isArray(e)){if(e.length)for(f=ad(a,e[0].constructor,g,f),g=0;g<Math.min(f.length,e.length);g++)gd(f[g],e[g])}else(f=$c(a,e.constructor,g,void 0,f))&&gd(f,e)}}}}
;function hd(a,b){var c=this.h;if(this.isRepeated){var d=!0;d=void 0===d?!1:d;if(b){var e=Kc([]);for(var f=0;f<b.length;f++)e[f]=b[f].K;a.h||(a.h={});a.h[c]=b}else a.h&&(a.h[c]=void 0),e=Uc;a=I(a,c,e,d)}else a=bd(a,c,b,!0);return a}
;function id(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function jd(a){this.i=!1;var b=a.program;a=a.globalName;var c=new id;this.j=c.promise;this.l=t((0,y[a].a)(b,function(d,e){Promise.resolve().then(function(){c.resolve({Cb:d,fc:e})})},!0)).next().value;
this.ec=c.promise.then(function(){})}
jd.prototype.snapshot=function(a){if(this.i)throw Error("Already disposed");return this.j.then(function(b){var c=b.Cb;return new Promise(function(d){c(function(e){d(e)},[a.fb,
a.hc])})})};
jd.prototype.xb=function(a){if(this.i)throw Error("Already disposed");return this.l([a.fb,a.hc])};
jd.prototype.dispose=function(){this.i=!0;this.j.then(function(a){(a=a.fc)&&a()})};
jd.prototype.h=function(){return this.i};var kd=window;yb("csi.gstatic.com");yb("googleads.g.doubleclick.net");yb("pagead2.googlesyndication.com");yb("partner.googleadservices.com");yb("pubads.g.doubleclick.net");yb("securepubads.g.doubleclick.net");yb("tpc.googlesyndication.com");/*

 SPDX-License-Identifier: Apache-2.0
*/
var ld={};function md(){}
function nd(a){this.h=a}
v(nd,md);nd.prototype.toString=function(){return this.h};
var od=new nd("about:invalid#zTSz",ld);function pd(a){this.isValid=a}
function qd(a){return new pd(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var rd=[qd("data"),qd("http"),qd("https"),qd("mailto"),qd("ftp"),new pd(function(a){return/^[^:]*([/?#]|$)/.test(a)})];function sd(a){if(a instanceof md)if(a instanceof nd)a=a.h;else throw Error("");else a=Pb(a);return a}
;function td(a,b){a.src=Db(b);var c;b=(a.ownerDocument&&a.ownerDocument.defaultView||window).document;var d=null===(c=b.querySelector)||void 0===c?void 0:c.call(b,"script[nonce]");(c=d?d.nonce||d.getAttribute("nonce")||"":"")&&a.setAttribute("nonce",c)}
;function ud(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=ud.prototype;m.clone=function(){return new ud(this.x,this.y)};
m.equals=function(a){return a instanceof ud&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};
m.scale=function(a,b){this.x*=a;this.y*="number"===typeof b?b:a;return this};function vd(a,b){this.width=a;this.height=b}
m=vd.prototype;m.clone=function(){return new vd(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};
m.scale=function(a,b){this.width*=a;this.height*="number"===typeof b?b:a;return this};function wd(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function xd(a,b){jb(b,function(c,d){c&&"object"==typeof c&&c.ea&&(c=c.da());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:yd.hasOwnProperty(d)?a.setAttribute(yd[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var yd={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function zd(a,b,c){var d=arguments,e=document,f=d[1],g=Ad(e,String(d[0]));f&&("string"===typeof f?g.className=f:Array.isArray(f)?g.className=f.join(" "):xd(g,f));2<d.length&&Bd(e,g,d);return g}
function Bd(a,b,c){function d(h){h&&b.appendChild("string"===typeof h?a.createTextNode(h):h)}
for(var e=2;e<c.length;e++){var f=c[e];if(!Na(f)||Oa(f)&&0<f.nodeType)d(f);else{a:{if(f&&"number"==typeof f.length){if(Oa(f)){var g="function"==typeof f.item||"string"==typeof f.item;break a}if("function"===typeof f){g="function"==typeof f.item;break a}}g=!1}E(g?hb(f):f,d)}}}
function Ad(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Cd(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Dd(a){var b=Ed;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function Fd(){var a=[];Dd(function(b){a.push(b)});
return a}
var Ed={wc:"allow-forms",xc:"allow-modals",yc:"allow-orientation-lock",zc:"allow-pointer-lock",Ac:"allow-popups",Bc:"allow-popups-to-escape-sandbox",Cc:"allow-presentation",Dc:"allow-same-origin",Ec:"allow-scripts",Fc:"allow-top-navigation",Gc:"allow-top-navigation-by-user-activation"},Gd=ab(function(){return Fd()});
function Hd(){var a=Id(),b={};E(Gd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function Id(){var a=void 0===a?document:a;return a.createElement("iframe")}
;function Jd(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var Kd=(new Date).getTime();var Ld=new function(a,b){this.flag=a;this.defaultValue=void 0===b?!1:b}(1959);function Md(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==
c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function Nd(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var u=g,q=0;64>q;q+=4)u[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=u[q-3]^u[q-8]^u[q-14]^u[q-16],u[q]=(p<<1|p>>>31)&4294967295;p=e[0];var z=e[1],A=e[2],K=e[3],R=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var S=K^z&(A^K);var U=1518500249}else S=z^A^K,U=1859775393;else 60>q?(S=z&A|K&(z|A),U=2400959708):(S=z^A^K,U=3395469782);S=((p<<5|p>>>27)&4294967295)+S+R+U+u[q]&4294967295;R=K;K=A;A=(z<<30|z>>>2)&4294967295;z=p;p=S}e[0]=e[0]+p&4294967295;e[1]=e[1]+z&4294967295;e[2]=
e[2]+A&4294967295;e[3]=e[3]+K&4294967295;e[4]=e[4]+R&4294967295}
function c(p,u){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],z=0,A=p.length;z<A;++z)q.push(p.charCodeAt(z));p=q}u||(u=p.length);q=0;if(0==l)for(;q+64<u;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<u;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<u;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],u=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=u&255,u>>>=8;b(f);for(q=u=0;5>q;q++)for(var z=24;0<=z;z-=8)p[u++]=e[q]>>z&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,Fb:function(){for(var p=d(),u="",q=0;q<p.length;q++)u+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return u}}}
;function Od(a,b,c){var d=String(y.location.href);return d&&a&&b?[b,Pd(Md(d),a,c||null)].join(" "):null}
function Pd(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],E(d,function(h){e.push(h)}),Qd(e.join(" "));
var f=[],g=[];E(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];E(d,function(h){e.push(h)});
a=Qd(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Qd(a){var b=Nd();b.update(a);return b.Fb().toLowerCase()}
;var Rd={};function Sd(a){this.h=a||{cookie:""}}
m=Sd.prototype;m.isEnabled=function(){if(!y.navigator.cookieEnabled)return!1;if(!this.isEmpty())return!0;this.set("TESTCOOKIESENABLED","1",{Ta:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.vn;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Ta}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.h.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
m.get=function(a,b){for(var c=a+"=",d=(this.h.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Fb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Ta:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.h.cookie};
m.clear=function(){for(var a=(this.h.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Fb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Td=new Sd("undefined"==typeof document?null:document);function Ud(a){return!!Rd.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function Vd(a){a=void 0===a?!1:a;var b=y.__SAPISID||y.__APISID||y.__3PSAPISID||y.__OVERRIDE_SID;Ud(a)&&(b=b||y.__1PSAPISID);if(b)return!0;var c=new Sd(document);b=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID");Ud(a)&&(b=b||c.get("__Secure-1PAPISID"));return!!b}
function Wd(a,b,c,d){(a=y[a])||(a=(new Sd(document)).get(b));return a?Od(a,c,d):null}
function Xd(a){var b=void 0===b?!1:b;var c=Md(String(y.location.href)),d=[];if(Vd(b)){c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:");var e=c?y.__SAPISID:y.__APISID;e||(e=new Sd(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID"));(e=e?Od(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e);c&&Ud(b)&&((b=Wd("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=Wd("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a))}return 0==
d.length?null:d.join(" ")}
;function Yd(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Zd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Na(d)?Zd.apply(null,d):Yd(d)}}
;function J(){this.C=this.C;this.s=this.s}
J.prototype.C=!1;J.prototype.h=function(){return this.C};
J.prototype.dispose=function(){this.C||(this.C=!0,this.D())};
function $d(a,b){a.C?b():(a.s||(a.s=[]),a.s.push(b))}
J.prototype.D=function(){if(this.s)for(;this.s.length;)this.s.shift()()};function ae(a,b){this.type=a;this.h=this.target=b;this.defaultPrevented=this.j=!1}
ae.prototype.stopPropagation=function(){this.j=!0};
ae.prototype.preventDefault=function(){this.defaultPrevented=!0};function be(a){var b=C("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||y.$googDebugFname||b}catch(g){e="Not available",c=!0}b=ce(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,de[c])c=de[c];else{c=String(c);if(!de[c]){var f=/function\s+([^\(]+)/m.exec(c);de[c]=f?f[1]:"[Anonymous]"}c=de[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function ce(a,b){b||(b={});b[ee(a)]=!0;var c=a.stack||"";(a=a.Db)&&!b[ee(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=ce(a,b));return c}
function ee(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var de={};var fe=function(){if(!y.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{y.addEventListener("test",Ja,b),y.removeEventListener("test",Ja,b)}catch(c){}return a}();function ge(a,b){ae.call(this,a?a.type:"");this.relatedTarget=this.h=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.i=null;a&&this.init(a,b)}
D(ge,ae);var he={2:"touch",3:"pen",4:"mouse"};
ge.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.h=b;if(b=a.relatedTarget){if(qc){a:{try{mc(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:he[a.pointerType]||"";this.state=a.state;
this.i=a;a.defaultPrevented&&ge.T.preventDefault.call(this)};
ge.prototype.stopPropagation=function(){ge.T.stopPropagation.call(this);this.i.stopPropagation?this.i.stopPropagation():this.i.cancelBubble=!0};
ge.prototype.preventDefault=function(){ge.T.preventDefault.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var ie="closure_listenable_"+(1E6*Math.random()|0);var je=0;function ke(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Da=e;this.key=++je;this.ta=this.za=!1}
function le(a){a.ta=!0;a.listener=null;a.proxy=null;a.src=null;a.Da=null}
;function me(a){this.src=a;this.listeners={};this.h=0}
me.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.h++);var g=ne(a,b,d,e);-1<g?(b=a[g],c||(b.za=!1)):(b=new ke(b,this.src,f,!!d,e),b.za=c,a.push(b));return b};
me.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=ne(e,b,c,d);return-1<b?(le(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.h--),!0):!1};
function oe(a,b){var c=b.type;c in a.listeners&&gb(a.listeners[c],b)&&(le(b),0==a.listeners[c].length&&(delete a.listeners[c],a.h--))}
function ne(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.ta&&f.listener==b&&f.capture==!!c&&f.Da==d)return e}return-1}
;var pe="closure_lm_"+(1E6*Math.random()|0),qe={},re=0;function se(a,b,c,d,e){if(d&&d.once)te(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)se(a,b[f],c,d,e);else c=ue(c),a&&a[ie]?a.U(b,c,Oa(d)?!!d.capture:!!d,e):ve(a,b,c,!1,d,e)}
function ve(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Oa(e)?!!e.capture:!!e,h=we(a);h||(a[pe]=h=new me(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=xe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)fe||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(ye(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");re++}}
function xe(){function a(c){return b.call(a.src,a.listener,c)}
var b=ze;return a}
function te(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)te(a,b[f],c,d,e);else c=ue(c),a&&a[ie]?a.i.add(String(b),c,!0,Oa(d)?!!d.capture:!!d,e):ve(a,b,c,!0,d,e)}
function Ae(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Ae(a,b[f],c,d,e);else(d=Oa(d)?!!d.capture:!!d,c=ue(c),a&&a[ie])?a.i.remove(String(b),c,d,e):a&&(a=we(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=ne(b,c,d,e)),(c=-1<a?b[a]:null)&&Be(c))}
function Be(a){if("number"!==typeof a&&a&&!a.ta){var b=a.src;if(b&&b[ie])oe(b.i,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(ye(c),d):b.addListener&&b.removeListener&&b.removeListener(d);re--;(c=we(b))?(oe(c,a),0==c.h&&(c.src=null,b[pe]=null)):le(a)}}}
function ye(a){return a in qe?qe[a]:qe[a]="on"+a}
function ze(a,b){if(a.ta)a=!0;else{b=new ge(b,this);var c=a.listener,d=a.Da||a.src;a.za&&Be(a);a=c.call(d,b)}return a}
function we(a){a=a[pe];return a instanceof me?a:null}
var Ce="__closure_events_fn_"+(1E9*Math.random()>>>0);function ue(a){if("function"===typeof a)return a;a[Ce]||(a[Ce]=function(b){return a.handleEvent(b)});
return a[Ce]}
;function De(){J.call(this);this.i=new me(this);this.S=this;this.H=null}
D(De,J);De.prototype[ie]=!0;De.prototype.addEventListener=function(a,b,c,d){se(this,a,b,c,d)};
De.prototype.removeEventListener=function(a,b,c,d){Ae(this,a,b,c,d)};
function Ee(a,b){var c=a.H;if(c){var d=[];for(var e=1;c;c=c.H)d.push(c),++e}a=a.S;c=b.type||b;"string"===typeof b?b=new ae(b,a):b instanceof ae?b.target=b.target||a:(e=b,b=new ae(c,a),tb(b,e));e=!0;if(d)for(var f=d.length-1;!b.j&&0<=f;f--){var g=b.h=d[f];e=Fe(g,c,!0,b)&&e}b.j||(g=b.h=a,e=Fe(g,c,!0,b)&&e,b.j||(e=Fe(g,c,!1,b)&&e));if(d)for(f=0;!b.j&&f<d.length;f++)g=b.h=d[f],e=Fe(g,c,!1,b)&&e}
De.prototype.D=function(){De.T.D.call(this);if(this.i){var a=this.i,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,le(d[e]);delete a.listeners[c];a.h--}}this.H=null};
De.prototype.U=function(a,b,c,d){return this.i.add(String(a),b,!1,c,d)};
function Fe(a,b,c,d){b=a.i.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.ta&&g.capture==c){var h=g.listener,k=g.Da||g.src;g.za&&oe(a.i,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function Ge(a){var b,c;De.call(this);var d=this;this.A=this.l=0;this.P=null!==a&&void 0!==a?a:{L:function(e,f){return setTimeout(e,f)},
ca:clearTimeout};this.j=null!==(c=null===(b=window.navigator)||void 0===b?void 0:b.onLine)&&void 0!==c?c:!0;this.m=function(){return x(function(e){return w(e,He(d),0)})};
window.addEventListener("offline",this.m);window.addEventListener("online",this.m);this.A||Ie(this)}
v(Ge,De);Ge.prototype.dispose=function(){window.removeEventListener("offline",this.m);window.removeEventListener("online",this.m);this.P.ca(this.A);delete Ge.h};
Ge.prototype.F=function(){return this.j};
function Ie(a){a.A=a.P.L(function(){var b;return x(function(c){if(1==c.h)return a.j?(null===(b=window.navigator)||void 0===b?0:b.onLine)?c.o(3):w(c,He(a),3):w(c,He(a),3);Ie(a);c.h=0})},3E4)}
function He(a,b){return a.u?a.u:a.u=new Promise(function(c){var d,e,f;return x(function(g){switch(g.h){case 1:return d=window.AbortController?new window.AbortController:void 0,e=null===d||void 0===d?void 0:d.signal,f=!1,ta(g,2,3),d&&(a.l=a.P.L(function(){d.abort()},b||2E4)),w(g,fetch("/generate_204",{method:"HEAD",
signal:e}),5);case 5:f=!0;case 3:wa(g);a.u=void 0;a.l&&(a.P.ca(a.l),a.l=0);f!==a.j&&(a.j=f,a.j?Ee(a,"networkstatus-online"):Ee(a,"networkstatus-offline"));c(f);xa(g);break;case 2:va(g),f=!1,g.o(3)}})})}
;var Je={Sm:"WEB_DISPLAY_MODE_UNKNOWN",Om:"WEB_DISPLAY_MODE_BROWSER",Qm:"WEB_DISPLAY_MODE_MINIMAL_UI",Rm:"WEB_DISPLAY_MODE_STANDALONE",Pm:"WEB_DISPLAY_MODE_FULLSCREEN"};function Ke(){this.data_=[];this.h=-1}
Ke.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.data_[a]!=b&&(this.data_[a]=b,this.h=-1)};
Ke.prototype.get=function(a){return!!this.data_[a]};
function Le(a){-1==a.h&&(a.h=eb(a.data_,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.h}
;function Me(){var a={};this.B=function(b,c){return null!=a[b]?a[b]:c}}
;function Ne(a,b){this.j=a;this.l=b;this.i=0;this.h=null}
Ne.prototype.get=function(){if(0<this.i){this.i--;var a=this.h;this.h=a.next;a.next=null}else a=this.j();return a};
function Oe(a,b){a.l(b);100>a.i&&(a.i++,b.next=a.h,a.h=b)}
;var Pe;
function Qe(){var a=y.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!G("Presto")&&(a=function(){var e=Ad(document,"IFRAME");e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Va(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!G("Trident")&&!G("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.eb;c.eb=null;e()}};
return function(e){d.next={eb:e};d=d.next;b.port2.postMessage(0)}}return function(e){y.setTimeout(e,0)}}
;function Re(a){y.setTimeout(function(){throw a;},0)}
;function Se(){this.i=this.h=null}
Se.prototype.add=function(a,b){var c=Te.get();c.set(a,b);this.i?this.i.next=c:this.h=c;this.i=c};
Se.prototype.remove=function(){var a=null;this.h&&(a=this.h,this.h=this.h.next,this.h||(this.i=null),a.next=null);return a};
var Te=new Ne(function(){return new Ue},function(a){return a.reset()});
function Ue(){this.next=this.scope=this.h=null}
Ue.prototype.set=function(a,b){this.h=a;this.scope=b;this.next=null};
Ue.prototype.reset=function(){this.next=this.scope=this.h=null};function Ve(a,b){We||Xe();Ye||(We(),Ye=!0);Ze.add(a,b)}
var We;function Xe(){if(y.Promise&&y.Promise.resolve){var a=y.Promise.resolve(void 0);We=function(){a.then($e)}}else We=function(){var b=$e;
"function"!==typeof y.setImmediate||y.Window&&y.Window.prototype&&!G("Edge")&&y.Window.prototype.setImmediate==y.setImmediate?(Pe||(Pe=Qe()),Pe(b)):y.setImmediate(b)}}
var Ye=!1,Ze=new Se;function $e(){for(var a;a=Ze.remove();){try{a.h.call(a.scope)}catch(b){Re(b)}Oe(Te,a)}Ye=!1}
;function af(a,b){this.h=a[y.Symbol.iterator]();this.i=b;this.j=0}
af.prototype[Symbol.iterator]=function(){return this};
af.prototype.next=function(){var a=this.h.next();return{value:a.done?void 0:this.i.call(void 0,a.value,this.j++),done:a.done}};
function bf(a,b){return new af(a,b)}
;function cf(){this.blockSize=-1}
;function df(){this.blockSize=-1;this.blockSize=64;this.h=[];this.s=[];this.m=[];this.j=[];this.j[0]=128;for(var a=1;a<this.blockSize;++a)this.j[a]=0;this.l=this.i=0;this.reset()}
D(df,cf);df.prototype.reset=function(){this.h[0]=1732584193;this.h[1]=4023233417;this.h[2]=2562383102;this.h[3]=271733878;this.h[4]=3285377520;this.l=this.i=0};
function ef(a,b,c){c||(c=0);var d=a.m;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.h[0];c=a.h[1];var g=a.h[2],h=a.h[3],k=a.h[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.h[0]=a.h[0]+b&4294967295;a.h[1]=a.h[1]+c&4294967295;a.h[2]=a.h[2]+g&4294967295;a.h[3]=a.h[3]+h&4294967295;a.h[4]=a.h[4]+k&4294967295}
df.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.s,f=this.i;d<b;){if(0==f)for(;d<=c;)ef(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){ef(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){ef(this,e);f=0;break}}this.i=f;this.l+=b}};
df.prototype.digest=function(){var a=[],b=8*this.l;56>this.i?this.update(this.j,56-this.i):this.update(this.j,this.blockSize-(this.i-56));for(var c=this.blockSize-1;56<=c;c--)this.s[c]=b&255,b/=256;ef(this,this.s);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.h[c]>>d&255,++b;return a};function ff(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function gf(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function hf(a,b){a.classList?b=a.classList.contains(b):(a=a.classList?a.classList:ff(a).match(/\S+/g)||[],b=0<=bb(a,b));return b}
function jf(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):hf(a,"inverted-hdpi")&&gf(a,Array.prototype.filter.call(a.classList?a.classList:ff(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var kf="StopIteration"in y?y.StopIteration:{message:"StopIteration",stack:""};function lf(){}
lf.prototype.W=function(){throw kf;};
lf.prototype.next=function(){return mf};
var mf={done:!0,value:void 0};function nf(a){return{value:a,done:!1}}
function of(a){if(a.done)throw kf;return a.value}
lf.prototype.O=function(){return this};function pf(a){if(a instanceof qf||a instanceof rf||a instanceof sf)return a;if("function"==typeof a.W)return new qf(function(){return tf(a)});
if("function"==typeof a[Symbol.iterator])return new qf(function(){return a[Symbol.iterator]()});
if("function"==typeof a.O)return new qf(function(){return tf(a.O())});
throw Error("Not an iterator or iterable.");}
function tf(a){if(!(a instanceof lf))return a;var b=!1;return{next:function(){for(var c;!b;)try{c=a.W();break}catch(d){if(d!==kf)throw d;b=!0}return{value:c,done:b}}}}
function qf(a){this.h=a}
qf.prototype.O=function(){return new rf(this.h())};
qf.prototype[Symbol.iterator]=function(){return new sf(this.h())};
qf.prototype.i=function(){return new sf(this.h())};
function rf(a){this.h=a}
v(rf,lf);rf.prototype.W=function(){var a=this.h.next();if(a.done)throw kf;return a.value};
rf.prototype.next=function(){return this.h.next()};
rf.prototype[Symbol.iterator]=function(){return new sf(this.h)};
rf.prototype.i=function(){return new sf(this.h)};
function sf(a){qf.call(this,function(){return a});
this.j=a}
v(sf,qf);sf.prototype.next=function(){return this.j.next()};function uf(a,b){this.i={};this.h=[];this.ga=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof uf)for(c=vf(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function vf(a){wf(a);return a.h.concat()}
m=uf.prototype;m.has=function(a){return xf(this.i,a)};
m.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||yf;wf(this);for(var c,d=0;c=this.h[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function yf(a,b){return a===b}
m.isEmpty=function(){return 0==this.size};
m.clear=function(){this.i={};this.ga=this.size=this.h.length=0};
m.remove=function(a){return this.delete(a)};
m.delete=function(a){return xf(this.i,a)?(delete this.i[a],--this.size,this.ga++,this.h.length>2*this.size&&wf(this),!0):!1};
function wf(a){if(a.size!=a.h.length){for(var b=0,c=0;b<a.h.length;){var d=a.h[b];xf(a.i,d)&&(a.h[c++]=d);b++}a.h.length=c}if(a.size!=a.h.length){var e={};for(c=b=0;b<a.h.length;)d=a.h[b],xf(e,d)||(a.h[c++]=d,e[d]=1),b++;a.h.length=c}}
m.get=function(a,b){return xf(this.i,a)?this.i[a]:b};
m.set=function(a,b){xf(this.i,a)||(this.size+=1,this.h.push(a),this.ga++);this.i[a]=b};
m.forEach=function(a,b){for(var c=vf(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new uf(this)};
m.keys=function(){return pf(this.O(!0)).i()};
m.values=function(){return pf(this.O(!1)).i()};
m.entries=function(){var a=this;return bf(this.keys(),function(b){return[b,a.get(b)]})};
m.O=function(a){wf(this);var b=0,c=this.ga,d=this,e=new lf;e.next=function(){if(c!=d.ga)throw Error("The map has changed since the iterator was created");if(b>=d.h.length)return mf;var g=d.h[b++];return nf(a?g:d.i[g])};
var f=e.next;e.W=function(){return of(f.call(e))};
return e};
function xf(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;function zf(a){Af();return Eb(a)}
var Af=Ja;function Bf(a){var b=[];Cf(new Df,a,b);return b.join("")}
function Df(){}
function Cf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Array.isArray(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Cf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Ef(d,c),c.push(":"),Cf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Ef(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Ff={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Gf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Ef(a,b){b.push('"',a.replace(Gf,function(c){var d=Ff[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Ff[c]=d);return d}),'"')}
;function Hf(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function If(a){this.h=0;this.C=void 0;this.l=this.i=this.j=null;this.s=this.m=!1;if(a!=Ja)try{var b=this;a.call(void 0,function(c){Jf(b,2,c)},function(c){Jf(b,3,c)})}catch(c){Jf(this,3,c)}}
function Kf(){this.next=this.context=this.onRejected=this.i=this.h=null;this.j=!1}
Kf.prototype.reset=function(){this.context=this.onRejected=this.i=this.h=null;this.j=!1};
var Lf=new Ne(function(){return new Kf},function(a){a.reset()});
function Mf(a,b,c){var d=Lf.get();d.i=a;d.onRejected=b;d.context=c;return d}
function Nf(a){return new If(function(b,c){c(a)})}
If.prototype.then=function(a,b,c){return Of(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
If.prototype.$goog_Thenable=!0;function Pf(a,b){return Of(a,null,b,void 0)}
If.prototype.cancel=function(a){if(0==this.h){var b=new Qf(a);Ve(function(){Rf(this,b)},this)}};
function Rf(a,b){if(0==a.h)if(a.j){var c=a.j;if(c.i){for(var d=0,e=null,f=null,g=c.i;g&&(g.j||(d++,g.h==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.h&&1==d?Rf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Sf(c),Tf(c,e,3,b)))}a.j=null}else Jf(a,3,b)}
function Uf(a,b){a.i||2!=a.h&&3!=a.h||Vf(a);a.l?a.l.next=b:a.i=b;a.l=b}
function Of(a,b,c,d){var e=Mf(null,null,null);e.h=new If(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof Qf?g(h):f(k)}catch(l){g(l)}}:g});
e.h.j=a;Uf(a,e);return e.h}
If.prototype.A=function(a){this.h=0;Jf(this,2,a)};
If.prototype.H=function(a){this.h=0;Jf(this,3,a)};
function Jf(a,b,c){if(0==a.h){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.h=1;a:{var d=c,e=a.A,f=a.H;if(d instanceof If){Uf(d,Mf(e||Ja,f||null,a));var g=!0}else if(Hf(d))d.then(e,f,a),g=!0;else{if(Oa(d))try{var h=d.then;if("function"===typeof h){Wf(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.C=c,a.h=b,a.j=null,Vf(a),3!=b||c instanceof Qf||Xf(a,c))}}
function Wf(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function Vf(a){a.m||(a.m=!0,Ve(a.u,a))}
function Sf(a){var b=null;a.i&&(b=a.i,a.i=b.next,b.next=null);a.i||(a.l=null);return b}
If.prototype.u=function(){for(var a;a=Sf(this);)Tf(this,a,this.h,this.C);this.m=!1};
function Tf(a,b,c,d){if(3==c&&b.onRejected&&!b.j)for(;a&&a.s;a=a.j)a.s=!1;if(b.h)b.h.j=null,Yf(b,c,d);else try{b.j?b.i.call(b.context):Yf(b,c,d)}catch(e){Zf.call(null,e)}Oe(Lf,b)}
function Yf(a,b,c){2==b?a.i.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Xf(a,b){a.s=!0;Ve(function(){a.s&&Zf.call(null,b)})}
var Zf=Re;function Qf(a){Za.call(this,a)}
D(Qf,Za);Qf.prototype.name="cancel";function L(a){J.call(this);this.u=1;this.l=[];this.m=0;this.i=[];this.j={};this.A=!!a}
D(L,J);m=L.prototype;m.subscribe=function(a,b,c){var d=this.j[a];d||(d=this.j[a]=[]);var e=this.u;this.i[e]=a;this.i[e+1]=b;this.i[e+2]=c;this.u=e+3;d.push(e);return e};
function $f(a,b,c,d){if(b=a.j[b]){var e=a.i;(b=b.find(function(f){return e[f+1]==c&&e[f+2]==d}))&&a.oa(b)}}
m.oa=function(a){var b=this.i[a];if(b){var c=this.j[b];0!=this.m?(this.l.push(a),this.i[a+1]=Ja):(c&&gb(c,a),delete this.i[a],delete this.i[a+1],delete this.i[a+2])}return!!b};
m.ha=function(a,b){var c=this.j[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.A)for(e=0;e<c.length;e++){var g=c[e];ag(this.i[g+1],this.i[g+2],d)}else{this.m++;try{for(e=0,f=c.length;e<f&&!this.h();e++)g=c[e],this.i[g+1].apply(this.i[g+2],d)}finally{if(this.m--,0<this.l.length&&0==this.m)for(;c=this.l.pop();)this.oa(c)}}return 0!=e}return!1};
function ag(a,b,c){Ve(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.j[a];b&&(b.forEach(this.oa,this),delete this.j[a])}else this.i.length=0,this.j={}};
m.D=function(){L.T.D.call(this);this.clear();this.l.length=0};function bg(a){this.h=a}
bg.prototype.set=function(a,b){void 0===b?this.h.remove(a):this.h.set(a,Bf(b))};
bg.prototype.get=function(a){try{var b=this.h.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
bg.prototype.remove=function(a){this.h.remove(a)};function cg(a){this.h=a}
D(cg,bg);function eg(a){this.data=a}
function fg(a){return void 0===a||a instanceof eg?a:new eg(a)}
cg.prototype.set=function(a,b){cg.T.set.call(this,a,fg(b))};
cg.prototype.i=function(a){a=cg.T.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
cg.prototype.get=function(a){if(a=this.i(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function gg(a){this.h=a}
D(gg,cg);gg.prototype.set=function(a,b,c){if(b=fg(b)){if(c){if(c<Date.now()){gg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Date.now()}gg.T.set.call(this,a,b)};
gg.prototype.i=function(a){var b=gg.T.i.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Date.now()||c&&c>Date.now())gg.prototype.remove.call(this,a);else return b}};function hg(){}
;function ig(){}
D(ig,hg);ig.prototype[Symbol.iterator]=function(){return pf(this.O(!0)).i()};
ig.prototype.clear=function(){var a=Array.from(this);a=t(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function jg(a){this.h=a}
D(jg,ig);m=jg.prototype;m.isAvailable=function(){if(!this.h)return!1;try{return this.h.setItem("__sak","1"),this.h.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.h.setItem(a,b)}catch(c){if(0==this.h.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.h.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeItem(a)};
m.O=function(a){var b=0,c=this.h,d=new lf;d.next=function(){if(b>=c.length)return mf;var f=c.key(b++);if(a)return nf(f);f=c.getItem(f);if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return nf(f)};
var e=d.next;d.W=function(){return of(e.call(d))};
return d};
m.clear=function(){this.h.clear()};
m.key=function(a){return this.h.key(a)};function kg(){var a=null;try{a=window.localStorage||null}catch(b){}this.h=a}
D(kg,jg);function lg(a,b){this.i=a;this.h=null;var c;if(c=oc)c=!(9<=Number(Bc));if(c){mg||(mg=new uf);this.h=mg.get(a);this.h||(b?this.h=document.getElementById(b):(this.h=document.createElement("userdata"),this.h.addBehavior("#default#userData"),document.body.appendChild(this.h)),mg.set(a,this.h));try{this.h.load(this.i)}catch(d){this.h=null}}}
D(lg,ig);var ng={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},mg=null;function og(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return ng[b]})}
m=lg.prototype;m.isAvailable=function(){return!!this.h};
m.set=function(a,b){this.h.setAttribute(og(a),b);pg(this)};
m.get=function(a){a=this.h.getAttribute(og(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.h.removeAttribute(og(a));pg(this)};
m.O=function(a){var b=0,c=this.h.XMLDocument.documentElement.attributes,d=new lf;d.next=function(){if(b>=c.length)return mf;var f=c[b++];if(a)return nf(decodeURIComponent(f.nodeName.replace(/\./g,"%")).substr(1));f=f.nodeValue;if("string"!==typeof f)throw"Storage mechanism: Invalid value was encountered";return nf(f)};
var e=d.next;d.W=function(){return of(e.call(d))};
return d};
m.clear=function(){for(var a=this.h.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);pg(this)};
function pg(a){try{a.h.save(a.i)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function qg(a,b){this.i=a;this.h=b+"::"}
D(qg,ig);qg.prototype.set=function(a,b){this.i.set(this.h+a,b)};
qg.prototype.get=function(a){return this.i.get(this.h+a)};
qg.prototype.remove=function(a){this.i.remove(this.h+a)};
qg.prototype.O=function(a){var b=this.i.O(!0),c=this,d=new lf;d.next=function(){try{var f=b.W()}catch(g){if(g===kf)return mf;throw g;}for(;f.substr(0,c.h.length)!=c.h;)try{f=b.W()}catch(g){if(g===kf)return mf;throw g;}return nf(a?f.substr(c.h.length):c.i.get(f))};
var e=d.next;d.W=function(){return of(e.call(d))};
return d};function rg(a){H.call(this,a)}
v(rg,H);rg.prototype.getKey=function(){return Wc(this,1)};
rg.prototype.getValue=function(){return Wc(this,2===Zc(this,sg)?2:-1)};
rg.prototype.setValue=function(a){return Yc(this,2,sg,a)};
var sg=[2,3,4,5,6];function tg(a){H.call(this,a)}
v(tg,H);function ug(a){H.call(this,a)}
v(ug,H);function vg(a){H.call(this,a)}
v(vg,H);function wg(a){H.call(this,a,-1,xg)}
v(wg,H);wg.prototype.getPlayerType=function(){return Wc(this,36)};
wg.prototype.setHomeGroupInfo=function(a){return bd(this,81,a)};
var xg=[9,66,24,32,86,100,101];function yg(a){H.call(this,a,-1,zg)}
v(yg,H);var zg=[15,26,28];function Ag(a){H.call(this,a)}
v(Ag,H);Ag.prototype.setToken=function(a){return I(this,2,a)};function Bg(a){H.call(this,a,-1,Cg)}
v(Bg,H);Bg.prototype.setSafetyMode=function(a){return I(this,5,a)};
var Cg=[12];function Dg(a){H.call(this,a,-1,Eg)}
v(Dg,H);var Eg=[12];function Fg(a){H.call(this,a)}
v(Fg,H);function Gg(a){H.call(this,a)}
v(Gg,H);function Hg(a){H.call(this,a)}
v(Hg,H);function Ig(a){H.call(this,a)}
v(Ig,H);function Jg(a){H.call(this,a)}
v(Jg,H);
var dd=[23,24,11,6,7,5,2,3,20,21,28,32,37,229,241,45,59,225,288,72,73,78,208,156,202,215,74,76,79,80,111,85,91,97,100,102,105,119,126,127,136,146,157,158,159,163,164,168,176,222,383,177,178,179,411,184,188,189,190,191,193,194,195,196,198,199,200,201,203,204,205,206,258,259,260,261,209,226,227,232,233,234,240,247,248,251,254,255,270,278,291,293,300,304,308,309,310,311,313,314,319,321,323,324,328,330,331,332,337,338,340,344,348,350,351,352,353,354,355,356,357,358,361,363,364,368,369,370,373,374,375,
378,380,381,388,389,403,412,413,414,415,416,417,418,419,420,117];function Kg(a){H.call(this,a)}
v(Kg,H);function Lg(a){H.call(this,a)}
v(Lg,H);Lg.prototype.setVideoId=function(a){return Yc(this,1,Mg,a)};
Lg.prototype.getPlaylistId=function(){return Wc(this,2===Zc(this,Mg)?2:-1)};
var Mg=[1,2];function Ng(a){H.call(this,a,-1,Og)}
v(Ng,H);var Og=[3];function Pg(a){H.call(this,a,1)}
v(Pg,H);function Qg(a){H.call(this,a)}
v(Qg,H);var Rg;Rg=new function(a,b,c,d){this.h=a;this.fieldName=b;this.isRepeated=d;this.i=hd}(406606992,{mn:0},Qg,0);function Sg(){Qg.apply(this,arguments)}
v(Sg,Qg);function Tg(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var Ug,Vg,Wg,Xg=y.window,Yg=(null===(Ug=null===Xg||void 0===Xg?void 0:Xg.yt)||void 0===Ug?void 0:Ug.config_)||(null===(Vg=null===Xg||void 0===Xg?void 0:Xg.ytcfg)||void 0===Vg?void 0:Vg.data_)||{},Zg=(null===(Wg=null===Xg||void 0===Xg?void 0:Xg.ytcfg)||void 0===Wg?void 0:Wg.obfuscatedData_)||[];function $g(){Pg.apply(this,arguments)}
v($g,Pg);var ah=new $g(Zg),bh=Yg.EXPERIMENT_FLAGS;if(!bh||!bh.jspb_i18n_extension){var ch=new Sg;Rg.i(ah,ch)}B("yt.config_",Yg,void 0);B("yt.configJspb_",Zg,void 0);function dh(){Tg(Yg,arguments)}
function F(a,b){return a in Yg?Yg[a]:b}
;var eh=[];function fh(a){eh.forEach(function(b){return b(a)})}
function gh(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){hh(b)}}:a}
function hh(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"ERROR",b,c,d):(e=F("ERRORS",[]),e.push([a,"ERROR",b,c,d]),dh("ERRORS",e));fh(a)}
function ih(a,b,c,d){var e=C("yt.logging.errors.log");e?e(a,"WARNING",b,c,d):(e=F("ERRORS",[]),e.push([a,"WARNING",b,c,d]),dh("ERRORS",e))}
;var jh=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};B("yt.msgs_",jh,void 0);function kh(a){Tg(jh,arguments)}
;function M(a){a=lh(a);return"string"===typeof a&&"false"===a?!1:!!a}
function mh(a,b){a=lh(a);return void 0===a&&void 0!==b?b:Number(a||0)}
function lh(a){var b=F("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:F("EXPERIMENT_FLAGS",{})[a]}
function nh(){var a=[],b=F("EXPERIMENTS_FORCED_FLAGS",{});for(c in b)a.push({key:c,value:String(b[c])});var c=F("EXPERIMENT_FLAGS",{});for(var d in c)d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var oh={appSettingsCaptured:!0,visualElementAttached:!0,visualElementGestured:!0,visualElementHidden:!0,visualElementShown:!0,flowEvent:!0,visualElementStateChanged:!0,playbackAssociated:!0,youThere:!0,accountStateChangeSignedIn:!0,accountStateChangeSignedOut:!0},ph={latencyActionBaselined:!0,latencyActionInfo:!0,latencyActionTicked:!0,bedrockRepetitiveActionTimed:!0,adsClientStateChange:!0,streamzIncremented:!0,mdxDialAdditionalDataUpdateEvent:!0,tvhtml5WatchKeyEvent:!0,tvhtml5VideoSeek:!0,tokenRefreshEvent:!0,
adNotify:!0,adNotifyFilled:!0,tvhtml5LaunchUrlComponentChanged:!0,bedrockResourceConsumptionSnapshot:!0,deviceStartupMetrics:!0,mdxSignIn:!0,tvhtml5KeyboardLogging:!0,tvhtml5StartupSoundEvent:!0,tvhtml5LiveChatStatus:!0,tvhtml5DeviceStorageStatus:!0,tvhtml5LocalStorage:!0,directSignInEvent:!0,finalPayload:!0,tvhtml5SearchCompleted:!0,tvhtml5KeyboardPerformance:!0,adNotifyFailure:!0,latencyActionSpan:!0,tvhtml5AccountDialogOpened:!0,tvhtml5ApiTest:!0};var qh=0,rh=rc?"webkit":qc?"moz":oc?"ms":nc?"o":"";B("ytDomDomGetNextId",C("ytDomDomGetNextId")||function(){return++qh},void 0);var sh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function th(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.rotation=this.clientY=this.clientX=0;this.scale=1;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in sh||(this[b]=a[b]);this.scale=a.scale;this.rotation=a.rotation;var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;
if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.h=a.pageX;this.i=a.pageY}}catch(e){}}
function uh(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.h=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.i=a.clientY+b}}
th.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
th.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
th.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var lb=y.ytEventsEventsListeners||{};B("ytEventsEventsListeners",lb,void 0);var vh=y.ytEventsEventsCounter||{count:0};B("ytEventsEventsCounter",vh,void 0);
function wh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return kb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Oa(e[4])&&Oa(d)&&pb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var xh=ab(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function yh(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=wh(a,b,c,d);if(e)return e;e=++vh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new th(h);if(!Cd(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new th(h);
h.currentTarget=a;return c.call(a,h)};
g=gh(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),xh()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);lb[e]=[a,b,c,g,d];return e}
function zh(a){a&&("string"==typeof a&&(a=[a]),E(a,function(b){if(b in lb){var c=lb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?xh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete lb[b]}}))}
;var Ah=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Bh(a,b){"function"===typeof a&&(a=gh(a));return window.setTimeout(a,b)}
function Ch(a){window.clearTimeout(a)}
;function Dh(a){this.H=a;this.i=null;this.m=0;this.A=null;this.u=0;this.j=[];for(a=0;4>a;a++)this.j.push(0);this.l=0;this.N=yh(window,"mousemove",Va(this.S,this));a=Va(this.I,this);"function"===typeof a&&(a=gh(a));this.aa=window.setInterval(a,25)}
D(Dh,J);Dh.prototype.S=function(a){void 0===a.h&&uh(a);var b=a.h;void 0===a.i&&uh(a);this.i=new ud(b,a.i)};
Dh.prototype.I=function(){if(this.i){var a=Ah();if(0!=this.m){var b=this.A,c=this.i,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.m);this.j[this.l]=.5<Math.abs((d-this.u)/this.u)?1:0;for(c=b=0;4>c;c++)b+=this.j[c]||0;3<=b&&this.H();this.u=d}this.m=a;this.A=this.i;this.l=(this.l+1)%4}};
Dh.prototype.D=function(){window.clearInterval(this.aa);zh(this.N)};function Eh(){}
function Fh(a,b){return Gh(a,0,b)}
Eh.prototype.L=function(a,b){return Gh(a,1,b)};
function Hh(a,b){Gh(a,2,b)}
;function Ih(){Eh.apply(this,arguments)}
v(Ih,Eh);function Jh(){Ih.h||(Ih.h=new Ih);return Ih.h}
function Gh(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=C("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):Bh(a,c||0)}
Ih.prototype.ca=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=C("yt.scheduler.instance.cancelJob");b?b(a):Ch(a)}};
Ih.prototype.start=function(){var a=C("yt.scheduler.instance.start");a&&a()};
Ih.prototype.pause=function(){var a=C("yt.scheduler.instance.pause");a&&a()};var Kh=Jh();var Lh={};
function Mh(a){var b=void 0===a?{}:a;a=void 0===b.Rb?!1:b.Rb;b=void 0===b.Hb?!0:b.Hb;if(null==C("_lact",window)){var c=parseInt(F("LACT"),10);c=isFinite(c)?Date.now()-Math.max(c,0):-1;B("_lact",c,window);B("_fact",c,window);-1==c&&Nh();yh(document,"keydown",Nh);yh(document,"keyup",Nh);yh(document,"mousedown",Nh);yh(document,"mouseup",Nh);a?yh(window,"touchmove",function(){Oh("touchmove",200)},{passive:!0}):(yh(window,"resize",function(){Oh("resize",200)}),b&&yh(window,"scroll",function(){Oh("scroll",200)}));
new Dh(function(){Oh("mouse",100)});
yh(document,"touchstart",Nh,{passive:!0});yh(document,"touchend",Nh,{passive:!0})}}
function Oh(a,b){Lh[a]||(Lh[a]=!0,Kh.L(function(){Nh();Lh[a]=!1},b))}
function Nh(){null==C("_lact",window)&&Mh();var a=Date.now();B("_lact",a,window);-1==C("_fact",window)&&B("_fact",a,window);(a=C("ytglobal.ytUtilActivityCallback_"))&&a()}
function Ph(){var a=C("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;function Qh(){var a=Rh;C("yt.ads.biscotti.getId_")||B("yt.ads.biscotti.getId_",a,void 0)}
function Sh(a){B("yt.ads.biscotti.lastId_",a,void 0)}
;var Th=/^[\w.]*$/,Uh={q:!0,search_query:!0};function Vh(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Wh(f[0]||""),h=Wh(f[1]||"");g in c?Array.isArray(c[g])?ib(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(p){var k=p,l=f[0],n=String(Vh);k.args=[{key:l,value:f[1],query:a,method:Xh==n?"unchanged":n}];Uh.hasOwnProperty(l)||ih(k)}}return c}
var Xh=String(Vh);function Yh(a){var b=[];jb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];E(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Zh(a){"?"==a.charAt(0)&&(a=a.substr(1));return Vh(a,"&")}
function $h(){var a=window.location.href;return-1!=a.indexOf("?")?(a=(a||"").split("#")[0],a=a.split("?",2),Zh(1<a.length?a[1]:a[0])):{}}
function ai(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Zh(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return jc(a,e)+d}
function bi(a){if(!b)var b=window.location.href;var c=a.match(ec)[1]||null,d=gc(a);c&&d?(a=a.match(ec),b=b.match(ec),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?gc(b)==d&&(Number(b.match(ec)[4]||null)||null)==(Number(a.match(ec)[4]||null)||null):!0;return a}
function Wh(a){return a&&a.match(Th)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function ci(a){var b=di;a=void 0===a?C("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=Kd;e.flash="0";a:{try{var f=b.h.top.location.href}catch(Ta){f=2;break a}f=f?f===b.i.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?kd:g;try{var h=g.history.length}catch(Ta){h=0}e.u_his=h;var k;e.u_h=null==(k=kd.screen)?void 0:k.height;var l;e.u_w=null==(l=kd.screen)?void 0:l.width;var n;e.u_ah=null==(n=kd.screen)?void 0:n.availHeight;var p;e.u_aw=
null==(p=kd.screen)?void 0:p.availWidth;var u;e.u_cd=null==(u=kd.screen)?void 0:u.colorDepth}catch(Ta){}h=b.h;try{var q=h.screenX;var z=h.screenY}catch(Ta){}try{var A=h.outerWidth;var K=h.outerHeight}catch(Ta){}try{var R=h.innerWidth;var S=h.innerHeight}catch(Ta){}try{var U=h.screenLeft;var Pc=h.screenTop}catch(Ta){}try{R=h.innerWidth,S=h.innerHeight}catch(Ta){}try{var dg=h.screen.availWidth;var so=h.screen.availTop}catch(Ta){}q=[U,Pc,q,z,dg,so,A,K,R,S];z=b.h.top;try{var pa=(z||window).document,fa=
"CSS1Compat"==pa.compatMode?pa.documentElement:pa.body;var Ka=(new vd(fa.clientWidth,fa.clientHeight)).round()}catch(Ta){Ka=new vd(-12245933,-12245933)}pa=Ka;Ka={};fa=new Ke;y.SVGElement&&y.document.createElementNS&&fa.set(0);z=Hd();z["allow-top-navigation-by-user-activation"]&&fa.set(1);z["allow-popups-to-escape-sandbox"]&&fa.set(2);y.crypto&&y.crypto.subtle&&fa.set(3);y.TextDecoder&&y.TextEncoder&&fa.set(4);fa=Le(fa);Ka.bc=fa;Ka.bih=pa.height;Ka.biw=pa.width;Ka.brdim=q.join();b=b.i;pa="ia";Me.ia&&
Me.hasOwnProperty(pa)?pa=Me.ia:(fa=new Me,Me.ia=fa,Me.hasOwnProperty(pa),pa=fa);b=(Ka.vis=pa.B(Ld.flag,Ld.defaultValue)&&b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,Ka.wgl=!!kd.WebGLRenderingContext,Ka);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var di=new function(){var a=window.document;this.h=window;this.i=a};
B("yt.ads_.signals_.getAdSignalsString",function(a){return Yh(ci(a))},void 0);Date.now();var ei="XMLHttpRequest"in y?function(){return new XMLHttpRequest}:null;
function fi(){if(!ei)return null;var a=ei();return"open"in a?a:null}
function gi(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;var hi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL",
"X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ii="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(ha("client_dev_mss_url client_dev_regex_map client_dev_root_url expflag jsfeat jsmode client_rollout_override".split(" "))),ji=!1;
function ki(a,b){b=void 0===b?{}:b;var c=bi(a),d=M("web_ajax_ignore_global_headers_if_set"),e;for(e in hi){var f=F(hi[e]);!f||!c&&gc(a)||d&&void 0!==b[e]||(b[e]=f)}if(c||!gc(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!gc(a)){try{var g=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(h){}g&&(b["X-YouTube-Time-Zone"]=g)}if(c||!gc(a))b["X-YouTube-Ad-Signals"]=Yh(ci(void 0));return b}
function li(a){var b=window.location.search,c=gc(a);M("debug_handle_relative_url_for_query_forward_killswitch")||c||!bi(a)||(c=document.location.hostname);var d=fc(a.match(ec)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Zh(b),f={};E(ii,function(g){e[g]&&(f[g]=e[g])});
return ai(a,f||{},!1)}
function mi(a,b){var c=b.format||"JSON";a=ni(a,b);var d=oi(a,b),e=!1,f=pi(a,function(k){if(!e){e=!0;h&&Ch(h);var l=gi(k),n=null,p=400<=k.status&&500>k.status,u=500<=k.status&&600>k.status;if(l||p||u)n=qi(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(n&&n.return_code,10);break a;case "RAW":l=!0;break a}l=!!n}n=n||{};p=b.context||y;l?b.onSuccess&&b.onSuccess.call(p,k,n):b.onError&&b.onError.call(p,k,n);b.onFinish&&b.onFinish.call(p,k,n)}},b.method,
d,b.headers,b.responseType,b.withCredentials);
if(b.onTimeout&&0<b.timeout){var g=b.onTimeout;var h=Bh(function(){e||(e=!0,f.abort(),Ch(h),g.call(b.context||y,f))},b.timeout)}return f}
function ni(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=F("XSRF_FIELD_NAME",void 0);if(b=b.urlParams)b[c]&&delete b[c],a=ai(a,b||{},!0);return a}
function oi(a,b){var c=F("XSRF_FIELD_NAME",void 0),d=F("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.postParams,g=F("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||gc(a)&&!b.withCredentials&&gc(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Zh(e),tb(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?JSON.stringify(e):ic(e));f=e||f&&!mb(f);!ji&&f&&
"POST"!=b.method&&(ji=!0,hh(Error("AJAX request with postData should use POST")));return e}
function qi(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,ih(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?ri(a):null)e={},E(a.getElementsByTagName("*"),function(g){e[g.tagName]=si(g)})}d&&ti(e);
return e}
function ti(a){if(Oa(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;yb("HTML that is escaped and sanitized server-side and passed through yt.net.ajax");var d=Yb(a[b],null);a[c]=d}else ti(a[b])}}
function ri(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function si(a){var b="";E(a.childNodes,function(c){b+=c.nodeValue});
return b}
function pi(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&gh(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=fi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;M("debug_forward_web_query_parameters")&&(a=li(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=ki(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var ui=Cc||Dc;function vi(a){var b=Ub();return b?0<=b.toLowerCase().indexOf(a):!1}
;var wi={},xi=0;
function yi(a,b,c,d,e){e=void 0===e?"":e;if(a)if(c&&!vi("cobalt")){if(a){a instanceof Nb||(a="object"==typeof a&&a.ea?a.da():String(a),Sb.test(a)?a=new Nb(a,Ob):(a=String(a),a=a.replace(/(%0A|%0D)/g,""),a=(b=a.match(Rb))&&Qb.test(b[1])?new Nb(a,Ob):null));b=Pb(a||Tb);if("about:invalid#zClosurez"===b||b.startsWith("data"))a="";else{if(b instanceof Xb)a=b;else{var f="object"==typeof b;a=null;f&&b.Pa&&(a=b.La());b=f&&b.ea?b.da():String(b);Mb.test(b)&&(-1!=b.indexOf("&")&&(b=b.replace(Gb,"&amp;")),-1!=
b.indexOf("<")&&(b=b.replace(Hb,"&lt;")),-1!=b.indexOf(">")&&(b=b.replace(Ib,"&gt;")),-1!=b.indexOf('"')&&(b=b.replace(Jb,"&quot;")),-1!=b.indexOf("'")&&(b=b.replace(Kb,"&#39;")),-1!=b.indexOf("\x00")&&(b=b.replace(Lb,"&#0;")));a=Yb(b,a)}a instanceof Xb&&a.constructor===Xb?a=a.h:(Ma(a),a="type_error:SafeHtml");a=encodeURIComponent(String(Bf(a.toString())))}/^[\s\xa0]*$/.test(a)||(a=zd("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||
a.document).body.appendChild(a))}}else if(e)pi(a,b,"POST",e,d);else if(F("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d)pi(a,b,"GET","",d);else{b:{try{var g=new $a({url:a});if(g.j&&g.i||g.l){var h=fc(a.match(ec)[5]||null),k;if(!(k=!h||!h.endsWith("/aclk"))){var l=a.search(kc);d:{for(c=0;0<=(c=a.indexOf("ri",c))&&c<l;){var n=a.charCodeAt(c-1);if(38==n||63==n){var p=a.charCodeAt(c+2);if(!p||61==p||38==p||35==p){var u=c;break d}}c+=3}u=-1}if(0>u)var q=null;else{var z=a.indexOf("&",u);if(0>z||z>l)z=l;u+=3;
q=decodeURIComponent(a.substr(u,z-u).replace(/\+/g," "))}k="1"!==q}f=!k;break b}}catch(A){}f=!1}f?zi(a)?(b&&b(),f=!0):f=!1:f=!1;f||Ai(a,b)}}
function Bi(){var a=void 0===a?"":a;zi("/generate_204",a)||yi("/generate_204",void 0,void 0,void 0,a)}
function zi(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Ai(a,b){var c=new Image,d=""+xi++;wi[d]=c;c.onload=c.onerror=function(){b&&wi[d]&&b();delete wi[d]};
c.src=a}
;var Ci=y.ytPubsubPubsubInstance||new L,Di=y.ytPubsubPubsubSubscribedKeys||{},Ei=y.ytPubsubPubsubTopicToKeys||{},Fi=y.ytPubsubPubsubIsSynchronous||{};function Gi(a,b){var c=Hi();if(c&&b){var d=c.subscribe(a,function(){var e=arguments;var f=function(){Di[d]&&b.apply&&"function"==typeof b.apply&&b.apply(window,e)};
try{Fi[a]?f():Bh(f,0)}catch(g){hh(g)}},void 0);
Di[d]=!0;Ei[a]||(Ei[a]=[]);Ei[a].push(d);return d}return 0}
function Ii(a){var b=Hi();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),E(a,function(c){b.unsubscribeByKey(c);delete Di[c]}))}
function Ji(a,b){var c=Hi();c&&c.publish.apply(c,arguments)}
function Ki(a){var b=Hi();if(b)if(b.clear(a),a)Li(a);else for(var c in Ei)Li(c)}
function Hi(){return y.ytPubsubPubsubInstance}
function Li(a){Ei[a]&&(a=Ei[a],E(a,function(b){Di[b]&&delete Di[b]}),a.length=0)}
L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.oa;L.prototype.publish=L.prototype.ha;L.prototype.clear=L.prototype.clear;B("ytPubsubPubsubInstance",Ci,void 0);B("ytPubsubPubsubTopicToKeys",Ei,void 0);B("ytPubsubPubsubIsSynchronous",Fi,void 0);B("ytPubsubPubsubSubscribedKeys",Di,void 0);var Mi=window,N=Mi.ytcsi&&Mi.ytcsi.now?Mi.ytcsi.now:Mi.performance&&Mi.performance.timing&&Mi.performance.now&&Mi.performance.timing.navigationStart?function(){return Mi.performance.timing.navigationStart+Mi.performance.now()}:function(){return(new Date).getTime()};var Ni=mh("initial_gel_batch_timeout",2E3),Oi=Math.pow(2,16)-1,Pi=void 0;function Qi(){this.j=this.h=this.i=0}
var Ri=new Qi,Si=new Qi,Ti=!0,Ui=y.ytLoggingTransportGELQueue_||new Map;B("ytLoggingTransportGELQueue_",Ui,void 0);var Vi=y.ytLoggingTransportGELProtoQueue_||new Map;B("ytLoggingTransportGELProtoQueue_",Vi,void 0);var Wi=y.ytLoggingTransportTokensToCttTargetIds_||{};B("ytLoggingTransportTokensToCttTargetIds_",Wi,void 0);var Xi=y.ytLoggingTransportTokensToJspbCttTargetIds_||{};B("ytLoggingTransportTokensToJspbCttTargetIds_",Xi,void 0);
function Yi(a,b){if("log_event"===a.endpoint){var c=Zi(a),d=Ui.get(c)||[];Ui.set(c,d);d.push(a.payload);$i(b,d,c)}}
function aj(a,b){if("log_event"===a.endpoint){var c=Zi(a,!0),d=Vi.get(c)||[];Vi.set(c,d);d.push(a.payload);$i(b,d,c,!0)}}
function $i(a,b,c,d){d=void 0===d?!1:d;a&&(Pi=new a);a=mh("tvhtml5_logging_max_batch")||mh("web_logging_max_batch")||100;var e=N(),f=d?Si.j:Ri.j;b.length>=a?bj({writeThenSend:!0},M("flush_only_full_queue")?c:void 0,d):10<=e-f&&(cj(d),d?Si.j=e:Ri.j=e)}
function dj(a,b){if("log_event"===a.endpoint){var c=Zi(a),d=new Map;d.set(c,[a.payload]);b&&(Pi=new b);return new If(function(e){Pi&&Pi.isReady()?ej(d,e,{bypassNetworkless:!0},!0):e()})}}
function fj(a,b){if("log_event"===a.endpoint){var c=Zi(a,!0),d=new Map;d.set(c,[a.payload]);b&&(Pi=new b);return new If(function(e){Pi&&Pi.isReady()?gj(d,e,{bypassNetworkless:!0},!0):e()})}}
function Zi(a,b){var c="";if(a.qa)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Lg;c.videoId?d.setVideoId(c.videoId):c.playlistId&&Yc(d,2,Mg,c.playlistId);Xi[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Wi[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function bj(a,b,c){a=void 0===a?{}:a;c=void 0===c?!1:c;new If(function(d){c?(Ch(Si.i),Ch(Si.h),Si.h=0):(Ch(Ri.i),Ch(Ri.h),Ri.h=0);if(Pi&&Pi.isReady())if(void 0!==b)if(c){var e=new Map,f=Vi.get(b)||[];e.set(b,f);gj(e,d,a);Vi.delete(b)}else e=new Map,f=Ui.get(b)||[],e.set(b,f),ej(e,d,a),Ui.delete(b);else c?(gj(Vi,d,a),Vi.clear()):(ej(Ui,d,a),Ui.clear());else cj(c),d()})}
function cj(a){a=void 0===a?!1:a;if(M("web_gel_timeout_cap")&&(!a&&!Ri.h||a&&!Si.h)){var b=Bh(function(){bj({writeThenSend:!0},void 0,a)},6E4);
a?Si.h=b:Ri.h=b}Ch(a?Si.i:Ri.i);b=F("LOGGING_BATCH_TIMEOUT",mh("web_gel_debounce_ms",1E4));M("shorten_initial_gel_batch_timeout")&&Ti&&(b=Ni);b=Bh(function(){bj({writeThenSend:!0},void 0,a)},b);
a?Si.i=b:Ri.i=b}
function ej(a,b,c,d){var e=Pi;c=void 0===c?{}:c;var f=Math.round(N()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=rb({context:hj(e.config_||ij())});k.events=l;(l=Wi[h])&&jj(k,h,l);delete Wi[h];h="visitorOnlyApprovedKey"===h;kj(k,f,h);lj(c);M("send_beacon_before_gel")&&window.navigator&&window.navigator.sendBeacon&&!c.writeThenSend&&Bi();mj(e,"log_event",k,nj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d));
Ti=!1}}
function gj(a,b,c,d){var e=Pi;c=void 0===c?{}:c;var f=Math.round(N()),g=a.size;a=t(a);for(var h=a.next();!h.done;h=a.next()){var k=t(h.value);h=k.next().value;var l=k=k.next().value;k=new Ng;var n=oj(e.config_||ij());bd(k,1,n);for(n=0;n<l.length;n++)ed(k,3,l[n],Jg);(l=Xi[h])&&pj(k,h,l);delete Xi[h];h="visitorOnlyApprovedKey"===h;qj(k,f,h);lj(c);a:{Mc=!0;try{var p=JSON.stringify(k.toJSON(),fd);break a}finally{Mc=!1}p=void 0}k=p;h=nj(c,h,function(){g--;g||b()},function(){g--;
g||b()},d);
h.headers={"Content-Type":"application/json+protobuf"};h.postBodyFormat="JSPB";h.postBody=k;mj(e,"log_event","",h);Ti=!1}}
function lj(a){M("always_send_and_write")&&(a.writeThenSend=!1)}
function nj(a,b,c,d,e){return{retry:!0,onSuccess:c,onError:d,qb:a,qa:b,kn:!!e,headers:{},postBodyFormat:"",postBody:""}}
function kj(a,b,c){a.requestTimeMs=String(b);M("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=F("EVENT_ID",void 0))&&(c=rj(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function qj(a,b,c){I(a,2,b);if(!c&&(b=F("EVENT_ID",void 0))){c=rj();var d=new Kg;I(d,1,b);I(d,2,c);bd(a,5,d)}}
function rj(){var a=F("BATCH_CLIENT_COUNTER",void 0)||0;a||(a=Math.floor(Math.random()*Oi/2));a++;a>Oi&&(a=1);dh("BATCH_CLIENT_COUNTER",a);return a}
function jj(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function pj(a,b,c){if(Wc(c,1===Zc(c,Mg)?1:-1))var d=1;else if(c.getPlaylistId())d=2;else return;bd(a,4,c);a=$c(a,Dg,1)||new Dg;c=$c(a,Bg,3)||new Bg;var e=new Ag;e.setToken(b);I(e,1,d);ed(c,12,e,Ag);bd(a,3,c)}
;var sj=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",sj,void 0);
function tj(a,b,c,d){d=void 0===d?{}:d;if(M("lr_drop_other_and_business_payloads")){if(ph[a]||oh[a])return}else if(M("lr_drop_other_payloads")&&ph[a])return;var e={},f=Math.round(d.timestamp||N());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=Ph();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};M("log_sequence_info_on_gel_web")&&d.R&&(a=e.context,b=d.R,b={index:uj(b),groupKey:b},a.sequence=b,d.jb&&delete sj[d.R]);(d.Wb?dj:Yi)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,
qa:d.qa},c)}
function uj(a){sj[a]=a in sj?sj[a]+1:0;return sj[a]}
;function vj(){if(!y.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return y.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":y.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":y.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":y.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
function wj(){var a=vj();a=Object.keys(Je).indexOf(a);return-1===a?null:a}
;function xj(a,b,c,d,e){Td.set(""+a,b,{Ta:c,path:"/",domain:void 0===d?"youtube.com":d,secure:void 0===e?!1:e})}
;var yj=C("ytglobal.prefsUserPrefsPrefs_")||{};B("ytglobal.prefsUserPrefsPrefs_",yj,void 0);function zj(){this.h=F("ALT_PREF_COOKIE_NAME","PREF");this.i=F("ALT_PREF_COOKIE_DOMAIN","youtube.com");var a=Td.get(""+this.h,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(yj[d]=c.toString())}}}
zj.prototype.get=function(a,b){Aj(a);Bj(a);a=void 0!==yj[a]?yj[a].toString():null;return null!=a?a:b?b:""};
zj.prototype.set=function(a,b){Aj(a);Bj(a);if(null==b)throw Error("ExpectedNotNull");yj[a]=b.toString()};
zj.prototype.remove=function(a){Aj(a);Bj(a);delete yj[a]};
zj.prototype.clear=function(){for(var a in yj)delete yj[a]};
function Bj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function Aj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function Cj(a){a=void 0!==yj[a]?yj[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
La(zj);var Dj={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},Ej={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_INVALID:31},Fj={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},Gj={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function Hj(){var a=y.navigator;return a?a.connection:void 0}
;function Ij(){return"INNERTUBE_API_KEY"in Yg&&"INNERTUBE_API_VERSION"in Yg}
function ij(){return{innertubeApiKey:F("INNERTUBE_API_KEY",void 0),innertubeApiVersion:F("INNERTUBE_API_VERSION",void 0),Qa:F("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ra:F("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),Jb:F("INNERTUBE_CONTEXT_CLIENT_NAME",1),innertubeContextClientVersion:F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),nb:F("INNERTUBE_CONTEXT_HL",void 0),mb:F("INNERTUBE_CONTEXT_GL",void 0),Kb:F("INNERTUBE_HOST_OVERRIDE",void 0)||"",Mb:!!F("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),Lb:!!F("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",
!1),appInstallData:F("SERIALIZED_CLIENT_CONFIG_DATA",void 0)}}
function hj(a){var b={client:{hl:a.nb,gl:a.mb,clientName:a.Ra,clientVersion:a.innertubeContextClientVersion,configInfo:a.Qa}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=y.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=F("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=nh();0<c.length&&(b.request={internalExperimentFlags:c});Jj(a,void 0,b);Kj(a,void 0,b);Lj(void 0,b);Mj(a,void 0,b);Nj(void 0,b);F("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&
(b.user={onBehalfOfUser:F("DELEGATED_SESSION_ID")});a=Object;c=a.assign;for(var d=b.client,e={},f=t(Object.entries(Zh(F("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=t(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function oj(a){var b=new Dg,c=new wg;I(c,1,a.nb);I(c,2,a.mb);I(c,16,a.Jb);I(c,17,a.innertubeContextClientVersion);if(a.Qa){var d=a.Qa,e=new tg;d.coldConfigData&&I(e,1,d.coldConfigData);d.appInstallData&&I(e,6,d.appInstallData);d.coldHashData&&I(e,3,d.coldHashData);d.hotHashData&&I(e,5,d.hotHashData);bd(c,62,e)}(d=y.devicePixelRatio)&&1!=d&&I(c,65,d);d=F("EXPERIMENTS_TOKEN","");""!==d&&I(c,54,d);d=nh();if(0<d.length){e=new yg;for(var f=0;f<d.length;f++){var g=new rg;I(g,1,d[f].key);g.setValue(d[f].value);
ed(e,15,g,rg)}bd(b,5,e)}Jj(a,c);Kj(a,c);Lj(c);Mj(a,c);Nj(c);F("DELEGATED_SESSION_ID")&&!M("pageid_as_header_web")&&(a=new Bg,I(a,3,F("DELEGATED_SESSION_ID")));a=t(Object.entries(Zh(F("DEVICE",""))));for(d=a.next();!d.done;d=a.next())e=t(d.value),d=e.next().value,e=e.next().value,"cbrand"===d?I(c,12,e):"cmodel"===d?I(c,13,e):"cbr"===d?I(c,87,e):"cbrver"===d?I(c,88,e):"cos"===d?I(c,18,e):"cosver"===d?I(c,19,e):"cplatform"===d&&I(c,42,e);bd(b,1,c);return b}
function Jj(a,b,c){a=a.Ra;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=$c(b,ug,96)||new ug;var d=wj();null!==d&&I(c,3,d);bd(b,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=vj())}
function Kj(a,b,c){a=a.Ra;if(("WEB_REMIX"===a||76===a)&&!M("music_web_display_mode_killswitch"))if(b){var d;c=null!=(d=$c(b,vg,70))?d:new vg;d=wj();null!==d&&I(c,10,d);bd(b,70,c)}else if(c){var e;c.client.pb=null!=(e=c.client.pb)?e:{};c.client.pb.webDisplayMode=vj()}}
function Lj(a,b){var c;if(M("web_log_memory_total_kbytes")&&(null==(c=y.navigator)?0:c.deviceMemory)){var d;c=null==(d=y.navigator)?void 0:d.deviceMemory;a?I(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function Mj(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=$c(b,tg,62))?d:new tg;I(c,6,a.appInstallData);bd(b,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Nj(a,b){a:{var c=Hj();if(c){var d=Dj[c.type||"unknown"]||"CONN_UNKNOWN";c=Dj[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?I(a,61,Ej[d]):b&&(b.client.connectionType=d));M("web_log_effective_connection_type")&&(d=Hj(),d=null!==d&&void 0!==d&&d.effectiveType?Gj.hasOwnProperty(d.effectiveType)?Gj[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&
(a?I(a,94,Fj[d]):b&&(b.client.effectiveConnectionType=d)))}
function Oj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||F("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.hn||F("AUTHORIZATION"))||(a?b="Bearer "+C("gapi.auth.getToken")().gn:b=Xd([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=F("SESSION_INDEX",0),M("pageid_as_header_web")&&(d["X-Goog-PageId"]=F("DELEGATED_SESSION_ID")));return d}
;function Pj(a){a=Object.assign({},a);delete a.Authorization;var b=Xd();if(b){var c=new df;c.update(F("INNERTUBE_API_KEY",void 0));c.update(b);a.hash=Hc(c.digest(),3)}return a}
;function Qj(a){var b=new kg;(b=b.isAvailable()?a?new qg(b,a):b:null)||(a=new lg(a||"UserDataSharedStore"),b=a.isAvailable()?a:null);this.h=(a=b)?new gg(a):null;this.i=document.domain||window.location.hostname}
Qj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.h)try{this.h.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Bf(b))}catch(f){return}else e=escape(b);xj(a,e,c,this.i)};
Qj.prototype.get=function(a,b){var c=void 0,d=!this.h;if(!d)try{c=this.h.get(a)}catch(e){d=!0}if(d&&(c=Td.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Qj.prototype.remove=function(a){this.h&&this.h.remove(a);var b=this.i;Td.remove(""+a,"/",void 0===b?"youtube.com":b)};var Rj;function Sj(){Rj||(Rj=new Qj("yt.innertube"));return Rj}
function Tj(a,b,c,d){if(d)return null;d=Sj().get("nextId",!0)||1;var e=Sj().get("requests",!0)||{};e[d]={method:a,request:b,authState:Pj(c),requestTime:Math.round(N())};Sj().set("nextId",d+1,86400,!0);Sj().set("requests",e,86400,!0);return d}
function Uj(a){var b=Sj().get("requests",!0)||{};delete b[a];Sj().set("requests",b,86400,!0)}
function Vj(a){var b=Sj().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(N())-d.requestTime)){var e=d.authState,f=Pj(Oj(!1));pb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(N())),mj(a,d.method,e,{}));delete b[c]}}Sj().set("requests",b,86400,!0)}}
;var Wj=function(){var a;return function(){a||(a=new Qj("ytidb"));return a}}();
function Xj(){var a;return null===(a=Wj())||void 0===a?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var Yj=[],Zj,ak=!1;function bk(a){ak||(Zj?Zj.handleError(a):(Yj.push({type:"ERROR",payload:a}),10<Yj.length&&Yj.shift()))}
function ck(a,b){ak||(Zj?Zj.logEvent(a,b):(Yj.push({type:"EVENT",eventType:a,payload:b}),10<Yj.length&&Yj.shift()))}
;function dk(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(ha(b))}
v(dk,Error);function ek(){try{return fk(),!0}catch(a){return!1}}
function fk(){if(void 0!==F("DATASYNC_ID",void 0))return F("DATASYNC_ID",void 0);throw new dk("Datasync ID not set","unknown");}
;function gk(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function hk(a){return a.substr(0,a.indexOf(":"))||a}
;var ik={},jk=(ik.AUTH_INVALID="No user identifier specified.",ik.EXPLICIT_ABORT="Transaction was explicitly aborted.",ik.IDB_NOT_SUPPORTED="IndexedDB is not supported.",ik.MISSING_INDEX="Index not created.",ik.MISSING_OBJECT_STORES="Object stores not created.",ik.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",ik.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",ik.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",
ik.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",ik.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",ik.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",ik),kk={},lk=(kk.AUTH_INVALID="ERROR",kk.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",kk.EXPLICIT_ABORT="IGNORED",kk.IDB_NOT_SUPPORTED="ERROR",kk.MISSING_INDEX="WARNING",kk.MISSING_OBJECT_STORES="ERROR",kk.DB_DELETED_BY_MISSING_OBJECT_STORES=
"WARNING",kk.QUOTA_EXCEEDED="WARNING",kk.QUOTA_MAYBE_EXCEEDED="WARNING",kk.UNKNOWN_ABORT="WARNING",kk.INCOMPATIBLE_DB_VERSION="WARNING",kk),mk={},nk=(mk.AUTH_INVALID=!1,mk.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,mk.EXPLICIT_ABORT=!1,mk.IDB_NOT_SUPPORTED=!1,mk.MISSING_INDEX=!1,mk.MISSING_OBJECT_STORES=!1,mk.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,mk.QUOTA_EXCEEDED=!1,mk.QUOTA_MAYBE_EXCEEDED=!0,mk.UNKNOWN_ABORT=!0,mk.INCOMPATIBLE_DB_VERSION=!1,mk);
function O(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?jk[a]:c;d=void 0===d?lk[a]:d;e=void 0===e?nk[a]:e;dk.call(this,c,Object.assign({name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.h=e;Object.setPrototypeOf(this,O.prototype)}
v(O,dk);function ok(a,b){O.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},jk.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,ok.prototype)}
v(ok,O);function pk(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,pk.prototype)}
v(pk,Error);var qk=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function rk(a,b,c,d){b=hk(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof O)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new O("QUOTA_EXCEEDED",a);if(Ec&&"UnknownError"===e.name)return new O("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof pk)return new O("MISSING_INDEX",Object.assign(Object.assign({},a),{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&qk.some(function(f){return e.message.includes(f)}))return new O("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new O("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign(Object.assign({},a),{name:"IdbError",sn:e.name})];e.level="WARNING";return e}
function sk(a,b,c){var d=Xj();return new O("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null===d||void 0===d?void 0:d.hasSucceededOnce}})}
;function tk(a){if(!a)throw Error();throw a;}
function uk(a){return a}
function vk(a){this.h=a}
function P(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=t(d.onRejected);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=t(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.h=[];this.onRejected=[];a=a.h;try{a(c,b)}catch(e){b(e)}}
P.all=function(a){return new P(new vk(function(b,c){var d=[],e=a.length;0===e&&b(d);for(var f={ka:0};f.ka<a.length;f={ka:f.ka},++f.ka)wk(P.resolve(a[f.ka]).then(function(g){return function(h){d[g.ka]=h;e--;0===e&&b(d)}}(f)),function(g){c(g)})}))};
P.resolve=function(a){return new P(new vk(function(b,c){a instanceof P?a.then(b,c):b(a)}))};
P.reject=function(a){return new P(new vk(function(b,c){c(a)}))};
P.prototype.then=function(a,b){var c=this,d=null!==a&&void 0!==a?a:uk,e=null!==b&&void 0!==b?b:tk;return new P(new vk(function(f,g){"PENDING"===c.state.status?(c.h.push(function(){xk(c,c,d,f,g)}),c.onRejected.push(function(){yk(c,c,e,f,g)})):"FULFILLED"===c.state.status?xk(c,c,d,f,g):"REJECTED"===c.state.status&&yk(c,c,e,f,g)}))};
function wk(a,b){a.then(void 0,b)}
function xk(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof P?zk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function yk(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof P?zk(a,b,f,d,e):d(f)}catch(g){e(g)}}
function zk(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof P?zk(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Ak(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Bk(a){return new Promise(function(b,c){Ak(a,b,c)})}
function Q(a){return new P(new vk(function(b,c){Ak(a,b,c)}))}
;function Ck(a,b){return new P(new vk(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;function Dk(a,b){this.h=a;this.options=b;this.transactionCount=0;this.j=Math.round(N());this.i=!1}
m=Dk.prototype;m.add=function(a,b,c){return Ek(this,[a],{mode:"readwrite",M:!0},function(d){return d.objectStore(a).add(b,c)})};
m.clear=function(a){return Ek(this,[a],{mode:"readwrite",M:!0},function(b){return b.objectStore(a).clear()})};
m.close=function(){var a;this.h.close();(null===(a=this.options)||void 0===a?0:a.closed)&&this.options.closed()};
m.count=function(a,b){return Ek(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).count(b)})};
function Fk(a,b,c){a=a.h.createObjectStore(b,c);return new Gk(a)}
m.delete=function(a,b){return Ek(this,[a],{mode:"readwrite",M:!0},function(c){return c.objectStore(a).delete(b)})};
m.get=function(a,b){return Ek(this,[a],{mode:"readonly",M:!0},function(c){return c.objectStore(a).get(b)})};
function Hk(a,b){return Ek(a,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(c){c=c.objectStore("LogsRequestsStore");return Q(c.h.put(b,void 0))})}
m.objectStoreNames=function(){return Array.from(this.h.objectStoreNames)};
function Ek(a,b,c,d){var e,f,g,h,k,l,n,p,u,q,z,A;return x(function(K){switch(K.h){case 1:var R={mode:"readonly",M:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?R.mode=c:Object.assign(R,c);e=R;a.transactionCount++;f=e.M?3:1;g=0;case 2:if(h){K.o(3);break}g++;k=Math.round(N());ta(K,4);l=a.h.transaction(b,e.mode);R=new Ik(l);R=Jk(R,d);return w(K,R,6);case 6:return n=K.i,p=Math.round(N()),Kk(a,k,p,g,void 0,b.join(),e),K.return(n);case 4:u=va(K);q=Math.round(N());z=rk(u,a.h.name,b.join(),a.h.version);
if((A=z instanceof O&&!z.h)||g>=f)Kk(a,k,q,g,z,b.join(),e),h=z;K.o(2);break;case 3:return K.return(Promise.reject(h))}})}
function Kk(a,b,c,d,e,f,g){b=c-b;e?(e instanceof O&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&ck("QUOTA_EXCEEDED",{dbName:hk(a.h.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof O&&"UNKNOWN_ABORT"===e.type&&(c-=a.j,0>c&&c>=Math.pow(2,31)&&(c=0),ck("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.i=!0),Lk(a,!1,d,f,b,g.tag),bk(e)):Lk(a,!0,d,f,b,g.tag)}
function Lk(a,b,c,d,e,f){ck("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.i,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
m.getName=function(){return this.h.name};
function Gk(a){this.h=a}
m=Gk.prototype;m.add=function(a,b){return Q(this.h.add(a,b))};
m.autoIncrement=function(){return this.h.autoIncrement};
m.clear=function(){return Q(this.h.clear()).then(function(){})};
m.count=function(a){return Q(this.h.count(a))};
function Mk(a,b){return Nk(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
m.delete=function(a){return a instanceof IDBKeyRange?Mk(this,a):Q(this.h.delete(a))};
m.get=function(a){return Q(this.h.get(a))};
m.index=function(a){try{return new Ok(this.h.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new pk(a,this.h.name);throw b;}};
m.getName=function(){return this.h.name};
m.keyPath=function(){return this.h.keyPath};
function Nk(a,b,c){a=a.h.openCursor(b.query,b.direction);return Pk(a).then(function(d){return Ck(d,c)})}
function Ik(a){var b=this;this.h=a;this.j=new Map;this.i=!1;this.done=new Promise(function(c,d){b.h.addEventListener("complete",function(){c()});
b.h.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.h.error)});
b.h.addEventListener("abort",function(){var e=b.h.error;if(e)d(e);else if(!b.i){e=O;for(var f=b.h.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.h.db.name,mode:b.h.mode});d(e)}})})}
function Jk(a,b){var c=new Promise(function(d,e){try{wk(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return t(d).next().value})}
Ik.prototype.abort=function(){this.h.abort();this.i=!0;throw new O("EXPLICIT_ABORT");};
Ik.prototype.objectStore=function(a){a=this.h.objectStore(a);var b=this.j.get(a);b||(b=new Gk(a),this.j.set(a,b));return b};
function Ok(a){this.h=a}
m=Ok.prototype;m.count=function(a){return Q(this.h.count(a))};
m.delete=function(a){return Qk(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
m.get=function(a){return Q(this.h.get(a))};
m.getKey=function(a){return Q(this.h.getKey(a))};
m.keyPath=function(){return this.h.keyPath};
m.unique=function(){return this.h.unique};
function Qk(a,b,c){a=a.h.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Pk(a).then(function(d){return Ck(d,c)})}
function Rk(a,b){this.request=a;this.cursor=b}
function Pk(a){return Q(a).then(function(b){return b?new Rk(a,b):null})}
m=Rk.prototype;m.advance=function(a){this.cursor.advance(a);return Pk(this.request)};
m.continue=function(a){this.cursor.continue(a);return Pk(this.request)};
m.delete=function(){return Q(this.cursor.delete()).then(function(){})};
m.getKey=function(){return this.cursor.key};
m.getValue=function(){return this.cursor.value};
m.update=function(a){return Q(this.cursor.update(a))};function Sk(a,b,c){return new Promise(function(d,e){function f(){u||(u=new Dk(g.result,{closed:p}));return u}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.blocked,k=c.blocking,l=c.ic,n=c.upgrade,p=c.closed,u;g.addEventListener("upgradeneeded",function(q){try{if(null===q.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");q.dataLoss&&"none"!==q.dataLoss&&ck("IDB_DATA_CORRUPTED",{reason:q.dataLossMessage||"unknown reason",dbName:hk(a)});var z=f(),A=new Ik(g.transaction);
n&&n(z,function(K){return q.oldVersion<K&&q.newVersion>=K},A);
A.done.catch(function(K){e(K)})}catch(K){e(K)}});
g.addEventListener("success",function(){var q=g.result;k&&q.addEventListener("versionchange",function(){k(f())});
q.addEventListener("close",function(){ck("IDB_UNEXPECTEDLY_CLOSED",{dbName:hk(a),dbVersion:q.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function Tk(a,b,c){c=void 0===c?{}:c;return Sk(a,b,c)}
function Uk(a,b){b=void 0===b?{}:b;var c,d,e,f;return x(function(g){if(1==g.h)return ta(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.blocked)&&c.addEventListener("blocked",function(){e()}),w(g,Bk(c),4);
if(2!=g.h)return ua(g,0);f=va(g);throw rk(f,a,"",-1);})}
;function Vk(a){return new Promise(function(b){Hh(function(){b()},a)})}
function Wk(a,b){this.name=a;this.options=b;this.l=!0;this.s=0;this.i=500}
Wk.prototype.j=function(a,b,c){c=void 0===c?{}:c;return Tk(a,b,c)};
Wk.prototype.delete=function(a){a=void 0===a?{}:a;return Uk(this.name,a)};
function Xk(a,b){return new O("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function Yk(a,b){if(!b)throw sk("openWithToken",hk(a.name));return a.open()}
Wk.prototype.open=function(){function a(){var f,g,h,k,l,n,p,u,q,z;return x(function(A){switch(A.h){case 1:return h=null!==(f=Error().stack)&&void 0!==f?f:"",ta(A,2),w(A,c.j(c.name,c.options.version,e),4);case 4:k=A.i;for(var K=c.options,R=[],S=t(Object.keys(K.sa)),U=S.next();!U.done;U=S.next()){U=U.value;var Pc=K.sa[U],dg=void 0===Pc.Tb?Number.MAX_VALUE:Pc.Tb;!(k.h.version>=Pc.Ka)||k.h.version>=dg||k.h.objectStoreNames.contains(U)||R.push(U)}l=R;if(0===l.length){A.o(5);break}n=Object.keys(c.options.sa);
p=k.objectStoreNames();if(!(c.s<mh("ytidb_remake_db_retries",1))){A.o(6);break}c.s++;if(!M("ytidb_remake_db_enable_backoff_delay")){A.o(7);break}return w(A,Vk(c.i),8);case 8:c.i*=2;case 7:return w(A,c.delete(),9);case 9:return bk(new O("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:c.name,expectedObjectStores:n,foundObjectStores:p})),A.return(a());case 6:throw new ok(p,n);case 5:return A.return(k);case 2:u=va(A);if(u instanceof DOMException?"VersionError"!==u.name:"DOMError"in self&&u instanceof DOMError?
"VersionError"!==u.name:!(u instanceof Object&&"message"in u)||"An attempt was made to open a database using a lower version than the existing version."!==u.message){A.o(10);break}return w(A,c.j(c.name,void 0,Object.assign(Object.assign({},e),{upgrade:void 0})),11);case 11:q=A.i;z=q.h.version;if(void 0!==c.options.version&&z>c.options.version+1)throw q.close(),c.l=!1,Xk(c,z);return A.return(q);case 10:throw b(),u instanceof Error&&!M("ytidb_async_stack_killswitch")&&(u.stack=u.stack+"\n"+h.substring(h.indexOf("\n")+
1)),rk(u,c.name,"",null!==(g=c.options.version)&&void 0!==g?g:-1);}})}
function b(){c.h===d&&(c.h=void 0)}
var c=this;if(!this.l)throw Xk(this);if(this.h)return this.h;var d,e={blocking:function(f){f.close()},
closed:b,ic:b,upgrade:this.options.upgrade};return this.h=d=a()};var Zk=new Wk("YtIdbMeta",{sa:{databases:{Ka:1}},upgrade:function(a,b){b(1)&&Fk(a,"databases",{keyPath:"actualName"})}});
function $k(a,b){var c;return x(function(d){if(1==d.h)return w(d,Yk(Zk,b),2);c=d.i;return d.return(Ek(c,["databases"],{M:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Q(f.h.put(a,void 0)).then(function(){})})}))})}
function al(a,b){var c;return x(function(d){if(1==d.h)return a?w(d,Yk(Zk,b),2):d.return();c=d.i;return d.return(c.delete("databases",a))})}
function bl(a,b){var c,d;return x(function(e){return 1==e.h?(c=[],w(e,Yk(Zk,b),2)):3!=e.h?(d=e.i,w(e,Ek(d,["databases"],{M:!0,mode:"readonly"},function(f){c.length=0;return Nk(f.objectStore("databases"),{},function(g){a(g.getValue())&&c.push(g.getValue());return g.continue()})}),3)):e.return(c)})}
function cl(a){return bl(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var dl,el=new function(){}(new function(){});
function fl(){var a,b,c;return x(function(d){switch(d.h){case 1:a=Xj();if(null===a||void 0===a?0:a.hasSucceededOnce)return d.return(!0);var e;if(e=ui)e=/WebKit\/([0-9]+)/.exec(Ub()),e=!!(e&&600<=parseInt(e[1],10));e&&(e=/WebKit\/([0-9]+)/.exec(Ub()),e=!(e&&602<=parseInt(e[1],10)));if(e||pc)return d.return(!1);try{if(b=self,!(b.indexedDB&&b.IDBIndex&&b.IDBKeyRange&&b.IDBObjectStore))return d.return(!1)}catch(f){return d.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return d.return(!1);
ta(d,2);c={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return w(d,$k(c,el),4);case 4:return w(d,al("yt-idb-test-do-not-use",el),5);case 5:return d.return(!0);case 2:return va(d),d.return(!1)}})}
function gl(){if(void 0!==dl)return dl;ak=!0;return dl=fl().then(function(a){ak=!1;var b,c;null!==(b=Wj())&&void 0!==b&&b.h&&(b=Xj(),b={hasSucceededOnce:(null===b||void 0===b?void 0:b.hasSucceededOnce)||a},null===(c=Wj())||void 0===c?void 0:c.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0));return a})}
function hl(){return C("ytglobal.idbToken_")||void 0}
function il(){var a=hl();return a?Promise.resolve(a):gl().then(function(b){(b=b?el:void 0)&&B("ytglobal.idbToken_",b,void 0);return b})}
;new id;function jl(a){if(!ek())throw a=new O("AUTH_INVALID",{dbName:a}),bk(a),a;var b=fk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function kl(a,b,c,d){var e,f,g,h,k,l;return x(function(n){switch(n.h){case 1:return f=null!==(e=Error().stack)&&void 0!==e?e:"",w(n,il(),2);case 2:g=n.i;if(!g)throw h=sk("openDbImpl",a,b),M("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),bk(h),h;gk(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:jl(a);ta(n,3);return w(n,$k(k,g),5);case 5:return w(n,Tk(k.actualName,b,d),6);case 6:return n.return(n.i);case 3:return l=va(n),ta(n,7),w(n,al(k.actualName,
g),9);case 9:ua(n,8);break;case 7:va(n);case 8:throw l;}})}
function ll(a,b,c){c=void 0===c?{}:c;return kl(a,b,!1,c)}
function ml(a,b,c){c=void 0===c?{}:c;return kl(a,b,!0,c)}
function nl(a,b){b=void 0===b?{}:b;var c,d;return x(function(e){if(1==e.h)return w(e,il(),2);if(3!=e.h){c=e.i;if(!c)return e.return();gk(a);d=jl(a);return w(e,Uk(d.actualName,b),3)}return w(e,al(d.actualName,c),0)})}
function ol(a,b,c){a=a.map(function(d){return x(function(e){return 1==e.h?w(e,Uk(d.actualName,b),2):w(e,al(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function pl(){var a=void 0===a?{}:a;var b,c;return x(function(d){if(1==d.h)return w(d,il(),2);if(3!=d.h){b=d.i;if(!b)return d.return();gk("LogsDatabaseV2");return w(d,cl(b),3)}c=d.i;return w(d,ol(c,a,b),0)})}
function ql(a,b){b=void 0===b?{}:b;var c;return x(function(d){if(1==d.h)return w(d,il(),2);if(3!=d.h){c=d.i;if(!c)return d.return();gk(a);return w(d,Uk(a,b),3)}return w(d,al(a,c),0)})}
;function rl(a){var b,c,d,e,f,g,h,k;this.h=!1;this.potentialEsfErrorCounter=this.i=0;this.handleError=function(){};
this.na=function(){};
this.now=Date.now;this.ra=!1;this.yb=null!==(b=a.yb)&&void 0!==b?b:100;this.vb=null!==(c=a.vb)&&void 0!==c?c:1;this.tb=null!==(d=a.tb)&&void 0!==d?d:2592E6;this.rb=null!==(e=a.rb)&&void 0!==e?e:12E4;this.ub=null!==(f=a.ub)&&void 0!==f?f:5E3;this.v=null!==(g=a.v)&&void 0!==g?g:void 0;this.Ca=!!a.Ca;this.Ba=null!==(h=a.Ba)&&void 0!==h?h:.1;this.Ga=null!==(k=a.Ga)&&void 0!==k?k:10;a.handleError&&(this.handleError=a.handleError);a.na&&(this.na=a.na);a.ra&&(this.ra=a.ra);this.B=a.B;this.P=a.P;this.G=a.G;
this.J=a.J;this.Y=a.Y;this.Wa=a.Wa;this.Va=a.Va;this.v&&(!this.B||this.B("networkless_logging"))&&sl(this)}
function sl(a){return x(function(b){if(1==b.h)return!a.v||a.ra?b.return():a.Ca&&Math.random()<=a.Ba?w(b,a.G.Eb(a.v),2):b.o(2);tl(a);a.J.F()&&a.va();a.J.U(a.Wa,a.va.bind(a));a.J.U(a.Va,a.cb.bind(a));a.h=!0;b.h=0})}
m=rl.prototype;m.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.G.set(d,this.v).then(function(e){d.id=e;c.J.F()&&ul(c,d)}).catch(function(e){ul(c,d);
vl(c,e)})}else this.Y(a,b)};
m.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if(this.v&&this.h){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.B&&this.B("nwl_skip_retry")&&(e.skipRetry=c);if(this.J.F()||this.B&&this.B("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return x(function(k){if(1==k.h)return w(k,d.G.set(e,d.v).catch(function(l){vl(d,l)}),2);
f(g,h);k.h=0})}}this.Y(a,b,e.skipRetry)}else this.G.set(e,this.v).catch(function(g){d.Y(a,b,e.skipRetry);
vl(d,g)})}else this.Y(a,b,this.B&&this.B("nwl_skip_retry")&&c)};
m.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if(this.v&&this.h){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.G.ma(d.id,c.v):e=!0;c.J.V&&c.B&&c.B("vss_network_hint")&&c.J.V(!0);f(g,h)};
this.Y(d.url,d.options);this.G.set(d,this.v).then(function(g){d.id=g;e&&c.G.ma(d.id,c.v)}).catch(function(g){vl(c,g)})}else this.Y(a,b)};
m.va=function(){var a=this;if(!this.v)throw sk("throttleSend");this.i||(this.i=this.P.L(function(){var b;return x(function(c){if(1==c.h)return w(c,a.G.lb("NEW",a.v),2);if(3!=c.h)return b=c.i,b?w(c,ul(a,b),3):(a.cb(),c.return());a.i&&(a.i=0,a.va());c.h=0})},this.yb))};
m.cb=function(){this.P.ca(this.i);this.i=0};
function ul(a,b){var c,d;return x(function(e){switch(e.h){case 1:if(!a.v)throw c=sk("immediateSend"),c;if(void 0===b.id){e.o(2);break}return w(e,a.G.Nb(b.id,a.v),3);case 3:(d=e.i)?b=d:a.na(Error("The request cannot be found in the database."));case 2:if(wl(a,b,a.tb)){e.o(4);break}a.na(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){e.o(5);break}return w(e,a.G.ma(b.id,a.v),5);case 5:return e.return();case 4:b.skipRetry||(b=xl(a,b));if(!b){e.o(0);break}if(!b.skipRetry||
void 0===b.id){e.o(8);break}return w(e,a.G.ma(b.id,a.v),8);case 8:a.Y(b.url,b.options,!!b.skipRetry),e.h=0}})}
function xl(a,b){if(!a.v)throw sk("updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:g=yl(f);if(!(a.B&&a.B("nwl_consider_error_code")&&g||a.B&&!a.B("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Ga)){h.o(2);break}if(!a.J.Z){h.o(3);break}return w(h,a.J.Z(),3);case 3:if(a.J.F()){h.o(2);break}c(e,f);if(!a.B||!a.B("nwl_consider_error_code")||void 0===(null===b||void 0===b?void 0:b.id)){h.o(6);break}return w(h,a.G.Xa(b.id,a.v,!1),6);case 6:return h.return();case 2:if(a.B&&a.B("nwl_consider_error_code")&&
!g&&a.potentialEsfErrorCounter>a.Ga)return h.return();a.potentialEsfErrorCounter++;if(void 0===(null===b||void 0===b?void 0:b.id)){h.o(8);break}return b.sendCount<a.vb?w(h,a.G.Xa(b.id,a.v),12):w(h,a.G.ma(b.id,a.v),8);case 12:a.P.L(function(){a.J.F()&&a.va()},a.ub);
case 8:c(e,f),h.h=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return void 0===(null===b||void 0===b?void 0:b.id)?g.o(2):w(g,a.G.ma(b.id,a.v),2);a.J.V&&a.B&&a.B("vss_network_hint")&&a.J.V(!0);d(e,f);g.h=0})};
return b}
function wl(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function tl(a){if(!a.v)throw sk("retryQueuedRequests");a.G.lb("QUEUED",a.v).then(function(b){b&&!wl(a,b,a.rb)?a.P.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.o(2):w(c,a.G.Xa(b.id,a.v),2);tl(a);c.h=0})}):a.J.F()&&a.va()})}
function vl(a,b){a.zb&&!a.J.F()?a.zb(b):a.handleError(b)}
function yl(a){var b;return(a=null===(b=null===a||void 0===a?void 0:a.error)||void 0===b?void 0:b.code)&&400<=a&&599>=a?!1:!0}
;function zl(a,b){this.version=a;this.args=b}
;function Al(a,b){this.topic=a;this.h=b}
Al.prototype.toString=function(){return this.topic};var Bl=C("ytPubsub2Pubsub2Instance")||new L;L.prototype.subscribe=L.prototype.subscribe;L.prototype.unsubscribeByKey=L.prototype.oa;L.prototype.publish=L.prototype.ha;L.prototype.clear=L.prototype.clear;B("ytPubsub2Pubsub2Instance",Bl,void 0);var Cl=C("ytPubsub2Pubsub2SubscribedKeys")||{};B("ytPubsub2Pubsub2SubscribedKeys",Cl,void 0);var Dl=C("ytPubsub2Pubsub2TopicToKeys")||{};B("ytPubsub2Pubsub2TopicToKeys",Dl,void 0);var El=C("ytPubsub2Pubsub2IsAsync")||{};B("ytPubsub2Pubsub2IsAsync",El,void 0);
B("ytPubsub2Pubsub2SkipSubKey",null,void 0);function Fl(a,b){var c=Gl();c&&c.publish.call(c,a.toString(),a,b)}
function Hl(a){var b=Il,c=Gl();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=C("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(Cl[d])try{if(f&&b instanceof Al&&b!=e)try{var h=b.h,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.ga){var l=new h;h.ga=l.version}var n=h.ga}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
hb(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){hh(p)}},El[b.toString()]?C("yt.scheduler.instance")?Kh.L(g):Bh(g,0):g())});
Cl[d]=!0;Dl[b.toString()]||(Dl[b.toString()]=[]);Dl[b.toString()].push(d);return d}
function Jl(){var a=Kl,b=Hl(function(c){a.apply(void 0,arguments);Ll(b)});
return b}
function Ll(a){var b=Gl();b&&("number"===typeof a&&(a=[a]),E(a,function(c){b.unsubscribeByKey(c);delete Cl[c]}))}
function Gl(){return C("ytPubsub2Pubsub2Instance")}
;function Ml(a,b){Wk.call(this,a,b);this.options=b;gk(a)}
v(Ml,Wk);function Nl(a,b){var c;return function(){c||(c=new Ml(a,b));return c}}
Ml.prototype.j=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ya?ml:ll)(a,b,Object.assign({},c))};
Ml.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ya?ql:nl)(this.name,a)};
function Ol(a,b){return Nl(a,b)}
;var Pl;
function Ql(){if(Pl)return Pl();var a={};Pl=Ol("LogsDatabaseV2",{sa:(a.LogsRequestsStore={Ka:2},a),Ya:!1,upgrade:function(b,c,d){c(2)&&Fk(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.h.indexNames.contains("newRequest")&&d.h.deleteIndex("newRequest"),d.h.createIndex("newRequestV2",["status","interface","timestamp"],{unique:!1}));c(7)&&b.h.objectStoreNames.contains("sapisid")&&b.h.deleteObjectStore("sapisid");c(9)&&b.h.objectStoreNames.contains("SWHealthLog")&&b.h.deleteObjectStore("SWHealthLog")},
version:9});return Pl()}
;function Rl(a){return Yk(Ql(),a)}
function Sl(a,b){var c,d,e,f;return x(function(g){if(1==g.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},w(g,Rl(b),2);if(3!=g.h)return d=g.i,e=Object.assign(Object.assign({},a),{options:JSON.parse(JSON.stringify(a.options)),interface:F("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),w(g,Hk(d,e),3);f=g.i;c.jc=N();Tl(c);return g.return(f)})}
function Ul(a,b){var c,d,e,f,g,h,k;return x(function(l){if(1==l.h)return c={startTime:N(),transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},w(l,Rl(b),2);if(3!=l.h)return d=l.i,e=F("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,N()],h=IDBKeyRange.bound(f,g),k=void 0,w(l,Ek(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(n){return Qk(n.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(p){p.getValue()&&(k=p.getValue(),"NEW"===a&&(k.status="QUEUED",
p.update(k)))})}),3);
c.jc=N();Tl(c);return l.return(k)})}
function Vl(a,b){var c;return x(function(d){if(1==d.h)return w(d,Rl(b),2);c=d.i;return d.return(Ek(c,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Q(f.h.put(g,void 0)).then(function(){return g})})}))})}
function Wl(a,b,c){c=void 0===c?!0:c;var d;return x(function(e){if(1==e.h)return w(e,Rl(b),2);d=e.i;return e.return(Ek(d,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(f){var g=f.objectStore("LogsRequestsStore");return g.get(a).then(function(h){return h?(h.status="NEW",c&&(h.sendCount+=1),Q(g.h.put(h,void 0)).then(function(){return h})):P.resolve(void 0)})}))})}
function Xl(a,b){var c;return x(function(d){if(1==d.h)return w(d,Rl(b),2);c=d.i;return d.return(c.delete("LogsRequestsStore",a))})}
function Yl(a){var b,c;return x(function(d){if(1==d.h)return w(d,Rl(a),2);b=d.i;c=N()-2592E6;return w(d,Ek(b,["LogsRequestsStore"],{mode:"readwrite",M:!0},function(e){return Nk(e.objectStore("LogsRequestsStore"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function Zl(){return x(function(a){return w(a,pl(),0)})}
function Tl(a){M("nwl_csi_killswitch")||.01>=Math.random()&&Fl("nwl_transaction_latency_payload",a)}
;var $l={},am=Ol("ServiceWorkerLogsDatabase",{sa:($l.SWHealthLog={Ka:1},$l),Ya:!0,upgrade:function(a,b){b(1)&&Fk(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}).h.createIndex("swHealthNewRequest",["interface","timestamp"],{unique:!1})},
version:1});function bm(a){return Yk(am(),a)}
function cm(a){var b,c;return x(function(d){if(1==d.h)return w(d,bm(a),2);b=d.i;c=N()-2592E6;return w(d,Ek(b,["SWHealthLog"],{mode:"readwrite",M:!0},function(e){return Nk(e.objectStore("SWHealthLog"),{},function(f){if(f.getValue().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function dm(a){var b;return x(function(c){if(1==c.h)return w(c,bm(a),2);b=c.i;return w(c,b.clear("SWHealthLog"),0)})}
;function em(){this.h=new Map;this.i=!1}
function fm(){if(!em.h){var a=C("yt.networkRequestMonitor.instance")||new em;B("yt.networkRequestMonitor.instance",a,void 0);em.h=a}return em.h}
em.prototype.X=function(a,b){b&&(this.i=!0);a=a.split("?")[0];this.h.get(a)||this.h.set(a,b)};
em.prototype.Sa=function(a){return(a=this.h.get(a.split("?")[0]))?!1:!1===a&&this.i?!0:null};
em.prototype.isEndpointCFR=em.prototype.Sa;em.prototype.requestComplete=em.prototype.X;em.getInstance=fm;var gm;function hm(){gm||(gm=new Qj("yt.offline"));return gm}
function im(a){if(M("offline_error_handling")){var b=hm().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);hm().set("errors",b,2592E3,!0)}}
function jm(){if(M("offline_error_handling")){var a=hm().get("errors",!0);if(a){for(var b in a)if(a[b]){var c=new dk(b,"sent via offline_errors");c.name=a[b].name;c.stack=a[b].stack;c.level=a[b].level;hh(c)}hm().set("errors",{},2592E3,!0)}}}
;var km=mh("network_polling_interval",3E4);function T(){De.call(this);this.I=0;this.N=this.m=!1;this.l=this.Oa();M("use_shared_nsm")?(Ge.h||(Ge.h=new Ge(Kh)),this.j=Ge.h):(lm(this),mm(this))}
v(T,De);function nm(){if(!T.h){var a=C("yt.networkStatusManager.instance")||new T;B("yt.networkStatusManager.instance",a,void 0);T.h=a}return T.h}
m=T.prototype;m.F=function(){var a;return M("use_shared_nsm")&&this.j?null===(a=this.j)||void 0===a?void 0:a.F():this.l};
m.V=function(a){var b;M("use_shared_nsm")&&this.j?null===(b=this.j)||void 0===b?void 0:b.j=a:a!==this.l&&(this.l=a)};
m.Ob=function(a){!M("use_shared_nsm")&&(this.m=!0,void 0===a?0:a)&&(this.I||om(this))};
m.Oa=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
m.Gb=function(){this.N=!0};
m.U=function(a,b){return M("use_shared_nsm")&&this.j?this.j.U(a,b):De.prototype.U.call(this,a,b)};
function mm(a){window.addEventListener("online",function(){return x(function(b){if(1==b.h)return w(b,a.Z(),2);a.N&&jm();b.h=0})})}
function lm(a){window.addEventListener("offline",function(){return x(function(b){return w(b,a.Z(),0)})})}
function om(a){a.I=Fh(function(){return x(function(b){if(1==b.h)return a.l?a.Oa()||!a.m?b.o(3):w(b,a.Z(),3):w(b,a.Z(),3);om(a);b.h=0})},km)}
m.Z=function(a){var b=this;if(M("use_shared_nsm")&&this.j){var c=He(this.j,a);c.then(function(d){M("use_cfr_monitor")&&fm().X("generate_204",d)});
return c}return this.u?this.u:this.u=new Promise(function(d){var e,f,g;return x(function(h){switch(h.h){case 1:return e=window.AbortController?new window.AbortController:void 0,f=null===e||void 0===e?void 0:e.signal,g=!1,ta(h,2,3),e&&(b.A=Kh.L(function(){e.abort()},a||2E4)),w(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:wa(h);M("use_cfr_monitor")&&fm().X("generate_204",g);b.u=void 0;b.A&&Kh.ca(b.A);g!==b.l&&(b.l=g,b.l&&b.m?Ee(b,"ytnetworkstatus-online"):b.m&&Ee(b,"ytnetworkstatus-offline"));d(g);xa(h);break;case 2:va(h),g=!1,h.o(3)}})})};
T.prototype.sendNetworkCheckRequest=T.prototype.Z;T.prototype.listen=T.prototype.U;T.prototype.enableErrorFlushing=T.prototype.Gb;T.prototype.getWindowStatus=T.prototype.Oa;T.prototype.monitorNetworkStatusChange=T.prototype.Ob;T.prototype.networkStatusHint=T.prototype.V;T.prototype.isNetworkAvailable=T.prototype.F;T.getInstance=nm;function pm(a){a=void 0===a?{}:a;De.call(this);var b=this;this.l=this.I=0;this.m="ytnetworkstatus-offline";this.u="ytnetworkstatus-online";M("use_shared_nsm")&&(this.m="networkstatus-offline",this.u="networkstatus-online");this.j=nm();var c=C("yt.networkStatusManager.instance.monitorNetworkStatusChange").bind(this.j);c&&c(a.ib);a.Ea&&!M("use_shared_nsm")&&(c=C("yt.networkStatusManager.instance.enableErrorFlushing").bind(this.j))&&c();if(c=C("yt.networkStatusManager.instance.listen").bind(this.j))a.Ha?
(this.Ha=a.Ha,c(this.u,function(){qm(b,"publicytnetworkstatus-online");M("use_shared_nsm")&&a.Ea&&jm()}),c(this.m,function(){qm(b,"publicytnetworkstatus-offline")})):(c(this.u,function(){Ee(b,"publicytnetworkstatus-online");
M("use_shared_nsm")&&a.Ea&&jm()}),c(this.m,function(){Ee(b,"publicytnetworkstatus-offline")}))}
v(pm,De);pm.prototype.F=function(){var a=C("yt.networkStatusManager.instance.isNetworkAvailable").bind(this.j);return a?a():!0};
pm.prototype.V=function(a){var b=C("yt.networkStatusManager.instance.networkStatusHint").bind(this.j);b&&b(a)};
pm.prototype.Z=function(a){var b=this,c;return x(function(d){c=C("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.j);return M("skip_network_check_if_cfr")&&fm().Sa("generate_204")?d.return(new Promise(function(e){var f;b.V((null===(f=window.navigator)||void 0===f?void 0:f.onLine)||!0);e(b.F())})):c?d.return(c(a)):d.return(!0)})};
function qm(a,b){a.Ha?a.l?(Kh.ca(a.I),a.I=Kh.L(function(){a.A!==b&&(Ee(a,b),a.A=b,a.l=N())},a.Ha-(N()-a.l))):(Ee(a,b),a.A=b,a.l=N()):Ee(a,b)}
;var rm;function sm(){rl.call(this,{G:{Eb:Yl,ma:Xl,lb:Ul,Nb:Vl,Xa:Wl,set:Sl},J:tm(),handleError:hh,na:ih,Y:um,now:N,zb:im,P:Jh(),Wa:"publicytnetworkstatus-online",Va:"publicytnetworkstatus-offline",Ca:!0,Ba:.1,Ga:mh("potential_esf_error_limit",10),B:M,ra:!ek()});this.j=new id;this.Ca&&Math.random()<=this.Ba&&this.v&&cm(this.v);M("networkless_immediately_drop_sw_health_store")&&vm(this);M("networkless_immediately_drop_all_requests")&&Zl();ql("LogsDatabaseV2")}
v(sm,rl);function wm(){var a=C("yt.networklessRequestController.instance");a||(a=new sm,B("yt.networklessRequestController.instance",a,void 0),M("networkless_logging")&&il().then(function(b){return x(function(c){if(1==c.h)return a.v=b,w(c,sl(a),2);a.j.resolve();c.h=0})}));
return a}
sm.prototype.writeThenSend=function(a,b){b||(b={});ek()||(this.h=!1);rl.prototype.writeThenSend.call(this,a,b)};
sm.prototype.sendThenWrite=function(a,b,c){b||(b={});ek()||(this.h=!1);rl.prototype.sendThenWrite.call(this,a,b,c)};
sm.prototype.sendAndWrite=function(a,b){b||(b={});ek()||(this.h=!1);rl.prototype.sendAndWrite.call(this,a,b)};
function vm(a){var b;x(function(c){if(!a.v)throw b=sk("clearSWHealthLogsDb"),b;return c.return(dm(a.v).catch(function(d){a.handleError(d)}))})}
function um(a,b,c){M("use_cfr_monitor")&&xm(a,b);var d;if(null===(d=b.postParams)||void 0===d?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(N());c&&0===Object.keys(b).length?yi(a):mi(a,b)}
function tm(){rm||(rm=new pm({Ea:!0,ib:!0}));return rm}
function xm(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){fm().X(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){fm().X(a,!0);d(e,f)}}
;var ym=!1,zm=0,Am=0,Bm,Cm=y.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:ym,potentialEsfErrorCounter:Am};B("ytNetworklessLoggingInitializationOptions",Cm,void 0);
function Dm(){var a;x(function(b){switch(b.h){case 1:return w(b,il(),2);case 2:a=b.i;if(!a||!ek()&&!M("nwl_init_require_datasync_id_killswitch")){b.o(0);break}ym=!0;Cm.isNwlInitialized=ym;return w(b,ql("LogsDatabaseV2"),4);case 4:if(!(.1>=Math.random())){b.o(5);break}return w(b,Yl(a),6);case 6:return w(b,cm(a),5);case 5:Em();Fm().F()&&Gm();Fm().U("publicytnetworkstatus-online",Gm);Fm().U("publicytnetworkstatus-offline",Hm);if(!M("networkless_immediately_drop_sw_health_store")){b.o(8);break}return w(b,
Im(),8);case 8:if(M("networkless_immediately_drop_all_requests"))return w(b,Zl(),0);b.o(0)}})}
function Jm(a,b){function c(d){var e=Fm().F();if(!Km()||!d||e&&M("vss_networkless_bypass_write"))Lm(a,b);else{var f={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0};Sl(f,d).then(function(g){f.id=g;Fm().F()&&Mm(f)}).catch(function(g){Mm(f);
Fm().F()?hh(g):im(g)})}}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?il().then(function(d){c(d)}):c(hl())}
function Nm(a,b){function c(d){if(Km()&&d){var e={url:a,options:b,timestamp:N(),status:"NEW",sendCount:0},f=!1,g=b.onSuccess?b.onSuccess:function(){};
e.options.onSuccess=function(k,l){M("use_cfr_monitor")&&fm().X(e.url,!0);void 0!==e.id?Xl(e.id,d):f=!0;M("vss_network_hint")&&Fm().V(!0);g(k,l)};
if(M("use_cfr_monitor")){var h=b.onError?b.onError:function(){};
e.options.onError=function(k,l){fm().X(e.url,!1);h(k,l)}}Lm(e.url,e.options);
Sl(e,d).then(function(k){e.id=k;f&&Xl(e.id,d)}).catch(function(k){Fm().F()?hh(k):im(k)})}else Lm(a,b)}
b=void 0===b?{}:b;M("skip_is_supported_killswitch")?il().then(function(d){c(d)}):c(hl())}
function Gm(){var a=hl();if(!a)throw sk("throttleSend");zm||(zm=Kh.L(function(){var b;return x(function(c){if(1==c.h)return w(c,Ul("NEW",a),2);if(3!=c.h)return b=c.i,b?w(c,Mm(b),3):(Hm(),c.return());zm&&(zm=0,Gm());c.h=0})},100))}
function Hm(){Kh.ca(zm);zm=0}
function Mm(a){var b,c,d;return x(function(e){switch(e.h){case 1:b=hl();if(!b)throw c=sk("immediateSend"),c;if(void 0===a.id){e.o(2);break}return w(e,Vl(a.id,b),3);case 3:(d=e.i)?a=d:ih(Error("The request cannot be found in the database."));case 2:if(Om(a,2592E6)){e.o(4);break}ih(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===a.id){e.o(5);break}return w(e,Xl(a.id,b),5);case 5:return e.return();case 4:a.skipRetry||(a=Pm(a));var f=a,g,h;if(null===(h=null===(g=null===
f||void 0===f?void 0:f.options)||void 0===g?void 0:g.postParams)||void 0===h?0:h.requestTimeMs)f.options.postParams.requestTimeMs=Math.round(N());a=f;if(!a){e.o(0);break}if(!a.skipRetry||void 0===a.id){e.o(8);break}return w(e,Xl(a.id,b),8);case 8:Lm(a.url,a.options,!!a.skipRetry),e.h=0}})}
function Pm(a){var b=hl();if(!b)throw sk("updateRequestHandlers");var c=a.options.onError?a.options.onError:function(){};
a.options.onError=function(e,f){var g;return x(function(h){switch(h.h){case 1:M("use_cfr_monitor")&&fm().X(a.url,!1);g=yl(f);if(!(M("nwl_consider_error_code")&&g||!M("nwl_consider_error_code")&&Qm()<=mh("potential_esf_error_limit",10))){h.o(2);break}if(M("skip_checking_network_on_cfr_failure")&&(!M("skip_checking_network_on_cfr_failure")||fm().Sa(a.url))){h.o(3);break}return w(h,Fm().Z(),3);case 3:if(Fm().F()){h.o(2);break}c(e,f);if(!M("nwl_consider_error_code")||void 0===(null===a||void 0===a?void 0:
a.id)){h.o(6);break}return w(h,Wl(a.id,b,!1),6);case 6:return h.return();case 2:if(M("nwl_consider_error_code")&&!g&&Qm()>mh("potential_esf_error_limit",10))return h.return();C("ytNetworklessLoggingInitializationOptions")&&Cm.potentialEsfErrorCounter++;Am++;if(void 0===(null===a||void 0===a?void 0:a.id)){h.o(8);break}return 1>a.sendCount?w(h,Wl(a.id,b),12):w(h,Xl(a.id,b),8);case 12:Kh.L(function(){Fm().F()&&Gm()},5E3);
case 8:c(e,f),h.h=0}})};
var d=a.options.onSuccess?a.options.onSuccess:function(){};
a.options.onSuccess=function(e,f){return x(function(g){if(1==g.h)return M("use_cfr_monitor")&&fm().X(a.url,!0),void 0===(null===a||void 0===a?void 0:a.id)?g.o(2):w(g,Xl(a.id,b),2);M("vss_network_hint")&&Fm().V(!0);d(e,f);g.h=0})};
return a}
function Om(a,b){a=a.timestamp;return N()-a>=b?!1:!0}
function Em(){var a=hl();if(!a)throw sk("retryQueuedRequests");Ul("QUEUED",a).then(function(b){b&&!Om(b,12E4)?Kh.L(function(){return x(function(c){if(1==c.h)return void 0===b.id?c.o(2):w(c,Wl(b.id,a),2);Em();c.h=0})}):Fm().F()&&Gm()})}
function Im(){var a,b;return x(function(c){a=hl();if(!a)throw b=sk("clearSWHealthLogsDb"),b;return c.return(dm(a).catch(function(d){hh(d)}))})}
function Fm(){if(M("use_new_nwl"))return tm();Bm||(Bm=new pm({Ea:!0,ib:!0}));return Bm}
function Lm(a,b,c){c&&0===Object.keys(b).length?yi(a):mi(a,b)}
function Km(){return C("ytNetworklessLoggingInitializationOptions")?Cm.isNwlInitialized:ym}
function Qm(){return C("ytNetworklessLoggingInitializationOptions")?Cm.potentialEsfErrorCounter:Am}
;function Rm(a){var b=this;this.config_=null;a?this.config_=a:Ij()&&(this.config_=ij());Fh(function(){Vj(b)},5E3)}
Rm.prototype.isReady=function(){!this.config_&&Ij()&&(this.config_=ij());return!!this.config_};
function mj(a,b,c,d){function e(z){z=void 0===z?!1:z;var A;if(d.retry&&"www.youtube-nocookie.com"!=h&&(z||M("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(A=Tj(b,c,l,k)),A)){var K=g.onSuccess,R=g.onFetchSuccess;g.onSuccess=function(S,U){Uj(A);K(S,U)};
c.onFetchSuccess=function(S,U){Uj(A);R(S,U)}}try{z&&d.retry&&!d.qb.bypassNetworkless?(g.method="POST",d.qb.writeThenSend?M("use_new_nwl")?wm().writeThenSend(q,g):Jm(q,g):M("use_new_nwl")?wm().sendAndWrite(q,g):Nm(q,g)):(g.method="POST",g.postParams||(g.postParams={}),mi(q,g))}catch(S){if("InvalidAccessError"==S.name)A&&(Uj(A),A=0),ih(Error("An extension is blocking network request."));
else throw S;}A&&Fh(function(){Vj(a)},5E3)}
!F("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ih(new dk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new dk("innertube xhrclient not ready",b,c,d);hh(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(z,A){if(d.onSuccess)d.onSuccess(A)},
onFetchSuccess:function(z){if(d.onSuccess)d.onSuccess(z)},
onError:function(z,A){if(d.onError)d.onError(A)},
onFetchError:function(z){if(d.onError)d.onError(z)},
timeout:d.timeout,withCredentials:!0};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.Kb)&&(h=f);var k=a.config_.Mb||!1,l=Oj(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&(g.headers["x-origin"]=window.location.origin);var n="/youtubei/"+a.config_.innertubeApiVersion+"/"+b,p={alt:"json"},u=a.config_.Lb&&f;M("omit_innertube_api_key_for_bearer_auth_header")&&(u=u&&f.startsWith("Bearer"));u||(p.key=a.config_.innertubeApiKey);var q=ai(""+
h+n,p||{},!0);M("use_new_nwl")&&wm().h||!M("use_new_nwl")&&Km()?gl().then(function(z){e(z)}):e(!1)}
;function V(a,b,c){c=void 0===c?{}:c;var d=Rm;F("ytLoggingEventsDefaultDisabled",!1)&&Rm==Rm&&(d=null);tj(a,b,d,c)}
;var Sm=[{Ua:function(a){return"Cannot read property '"+a.key+"'"},
Fa:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Ua:function(a){return"Cannot call '"+a.key+"'"},
Fa:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Ua:function(a){return a.key+" is not defined"},
Fa:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var Um={fa:[],ba:[{bb:Tm,weight:500}]};function Tm(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function Vm(){this.ba=[];this.fa=[]}
var Wm;function Xm(){if(!Wm){var a=Wm=new Vm;a.fa.length=0;a.ba.length=0;Um.fa&&a.fa.push.apply(a.fa,Um.fa);Um.ba&&a.ba.push.apply(a.ba,Um.ba)}return Wm}
;var Ym=new L;function Zm(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=$m(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=$m(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=$m(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function $m(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function an(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=bn(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=Zm(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?bn(e+".ve",f,g,h):0;d+=g;d+=bn(e,a[e],b,c);if(500<d)break}}else c[b]=cn(a),d+=c[b].length;else c[b]=cn(a),d+=c[b].length;return d}
function bn(a,b,c,d){c+="."+a;a=cn(b);d[c]=a;return c.length+a.length}
function cn(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;var dn=new Set,en=0,fn=0,gn=0,hn=[],jn=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function kn(a){ln(a)}
function mn(a){ln(a,"WARNING")}
function ln(a,b,c,d,e,f){f=void 0===f?{}:f;f.name=c||F("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||F("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};b=void 0===b?"ERROR":b;b=void 0===b?"ERROR":b;if(a&&(a.hasOwnProperty("level")&&a.level&&(b=a.level),M("console_log_js_exceptions")&&(d=[],d.push("Name: "+a.name),d.push("Message: "+a.message),a.hasOwnProperty("params")&&d.push("Error Params: "+JSON.stringify(a.params)),a.hasOwnProperty("args")&&d.push("Error args: "+JSON.stringify(a.args)),d.push("File name: "+
a.fileName),d.push("Stacktrace: "+a.stack),window.console.log(d.join("\n"),a)),!(5<=en))){var g=be(a);d=g.message||"Unknown Error";e=g.name||"UnknownError";var h=g.stack||a.i||"Not available";h.startsWith(e+": "+d)&&(f=h.split("\n"),f.shift(),h=f.join("\n"));f=g.lineNumber||"Not available";g=g.fileName||"Not available";var k=0;if(a.hasOwnProperty("args")&&a.args&&a.args.length)for(var l=0;l<a.args.length&&!(k=an(a.args[l],"params."+l,c,k),500<=k);l++);else if(a.hasOwnProperty("params")&&a.params){var n=
a.params;if("object"===typeof a.params)for(l in n){if(n[l]){var p="params."+l,u=cn(n[l]);c[p]=u;k+=p.length+u.length;if(500<k)break}}else c.params=cn(n)}if(hn.length)for(l=0;l<hn.length&&!(k=an(hn[l],"params.context."+l,c,k),500<=k);l++);navigator.vendor&&!c.hasOwnProperty("vendor")&&(c["device.vendor"]=navigator.vendor);l={message:d,name:e,lineNumber:f,fileName:g,stack:h,params:c,sampleWeight:1};c=Number(a.columnNumber);isNaN(c)||(l.lineNumber=l.lineNumber+":"+c);if("IGNORED"===a.level)a=0;else a:{a=
Xm();c=t(a.fa);for(d=c.next();!d.done;d=c.next())if(d=d.value,l.message&&l.message.match(d.rn)){a=d.weight;break a}a=t(a.ba);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.bb(l)){a=c.weight;break a}a=1}l.sampleWeight=a;a=t(Sm);for(c=a.next();!c.done;c=a.next())if(c=c.value,c.Fa[l.name])for(e=t(c.Fa[l.name]),d=e.next();!d.done;d=e.next())if(f=d.value,d=l.message.match(f.regexp)){l.params["params.error.original"]=d[0];e=f.groups;f={};for(g=0;g<e.length;g++)f[e[g]]=d[g+1],l.params["params.error."+
e[g]]=d[g+1];l.message=c.Ua(f);break}l.params||(l.params={});a=Xm();l.params["params.errorServiceSignature"]="msg="+a.fa.length+"&cb="+a.ba.length;l.params["params.serviceWorker"]="false";y.document&&y.document.querySelectorAll&&(l.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));yb("sample").constructor!==wb&&(l.params["params.fconst"]="true");window.yterr&&"function"===typeof window.yterr&&window.yterr(l);if(0!==l.sampleWeight&&!dn.has(l.message)){"ERROR"===
b?(Ym.ha("handleError",l),M("record_app_crashed_web")&&0===gn&&1===l.sampleWeight&&(gn++,a={appCrashType:"APP_CRASH_TYPE_BREAKPAD"},M("report_client_error_with_app_crash_ks")||(a.systemHealth={crashData:{clientError:{logMessage:{message:l.message}}}}),V("appCrashed",a)),fn++):"WARNING"===b&&Ym.ha("handleWarning",l);if(M("kevlar_gel_error_routing")){a=b;b:{c=t(jn);for(d=c.next();!d.done;d=c.next())if(vi(d.value.toLowerCase())){c=!0;break b}c=!1}if(c)c=void 0;else{d={stackTrace:l.stack};l.fileName&&
(d.filename=l.fileName);c=l.lineNumber&&l.lineNumber.split?l.lineNumber.split(":"):[];0!==c.length&&(1!==c.length||isNaN(Number(c[0]))?2!==c.length||isNaN(Number(c[0]))||isNaN(Number(c[1]))||(d.lineNumber=Number(c[0]),d.columnNumber=Number(c[1])):d.lineNumber=Number(c[0]));c={level:"ERROR_LEVEL_UNKNOWN",message:l.message,errorClassName:l.name,sampleWeight:l.sampleWeight};"ERROR"===a?c.level="ERROR_LEVEL_ERROR":"WARNING"===a&&(c.level="ERROR_LEVEL_WARNNING");d={isObfuscated:!0,browserStackInfo:d};
e={pageUrl:window.location.href,kvPairs:[]};F("FEXP_EXPERIMENTS")&&(e.experimentIds=F("FEXP_EXPERIMENTS"));f=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0);g=Yg.EXPERIMENT_FLAGS;if((!g||!g.web_disable_gel_stp_ecatcher_killswitch)&&f)for(h=t(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:g,value:String(f[g])});if(f=l.params)for(h=t(Object.keys(f)),g=h.next();!g.done;g=h.next())g=g.value,e.kvPairs.push({key:"client."+g,value:String(f[g])});f=F("SERVER_NAME",void 0);
g=F("SERVER_VERSION",void 0);f&&g&&(e.kvPairs.push({key:"server.name",value:f}),e.kvPairs.push({key:"server.version",value:g}));c={errorMetadata:e,stackTrace:d,logMessage:c}}c&&(V("clientError",c),("ERROR"===a||M("errors_flush_gel_always_killswitch"))&&bj())}if(!M("suppress_error_204_logging")){a=l.params||{};b={urlParams:{a:"logerror",t:"jserror",type:l.name,msg:l.message.substr(0,250),line:l.lineNumber,level:b,"client.name":a.name},postParams:{url:F("PAGE_NAME",window.location.href),file:l.fileName},
method:"POST"};a.version&&(b["client.version"]=a.version);if(b.postParams){l.stack&&(b.postParams.stack=l.stack);c=t(Object.keys(a));for(d=c.next();!d.done;d=c.next())d=d.value,b.postParams["client."+d]=a[d];if(a=F("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(c=t(Object.keys(a)),d=c.next();!d.done;d=c.next())d=d.value,b.postParams[d]=a[d];a=F("SERVER_NAME",void 0);c=F("SERVER_VERSION",void 0);a&&c&&(b.postParams["server.name"]=a,b.postParams["server.version"]=c)}mi(F("ECATCHER_REPORT_HOST",
"")+"/error_204",b)}try{dn.add(l.message)}catch(q){}en++}}}
function nn(a){var b=Ea.apply(1,arguments),c=a;c.args||(c.args=[]);c.args.push.apply(c.args,ha(b))}
;var on={Uc:3611,kc:27686,lc:85013,mc:23462,oc:42016,pc:62407,qc:26926,nc:43781,sc:51236,tc:79148,uc:50160,vc:77504,Hc:87907,Ic:18630,Jc:54445,Kc:80935,Lc:105675,Mc:37521,Nc:47786,Oc:98349,Pc:123695,Qc:6827,Rc:29434,Sc:7282,Tc:124448,Xc:32276,Wc:76278,Yc:93911,Zc:106531,bd:27259,cd:27262,dd:27263,fd:21759,gd:27107,hd:62936,jd:49568,kd:38408,ld:80637,md:68727,nd:68728,od:80353,pd:80356,qd:74610,rd:45707,sd:83962,td:83970,ud:46713,vd:89711,wd:74612,xd:93265,yd:74611,zd:131380,Bd:128979,Cd:139311,Dd:128978,
Ad:131391,Ed:105350,Gd:139312,Hd:134800,Fd:131392,Jd:113533,Kd:93252,Ld:99357,Nd:94521,Od:114252,Pd:113532,Qd:94522,Md:94583,Rd:88E3,Sd:139580,Td:93253,Ud:93254,Vd:94387,Wd:94388,Xd:93255,Yd:97424,Id:72502,Zd:110111,ae:76019,ce:117092,de:117093,be:89431,ee:110466,ge:77240,he:60508,ie:137401,je:137402,ke:137046,le:73393,me:113534,ne:92098,oe:131381,pe:84517,qe:83759,re:80357,se:86113,te:72598,ue:72733,we:107349,xe:124275,ye:118203,ze:133275,Ae:133274,Be:133272,Ce:133273,De:133276,Fe:117431,Ee:133797,
Ge:128572,He:133405,Ie:117429,Je:117430,Ke:117432,Le:120080,Me:117259,Ne:121692,Oe:132972,Pe:133051,Qe:133658,Re:132971,Se:97615,Te:142303,Ue:31402,We:133624,Xe:133623,Ye:133622,Ve:133621,Ze:84774,af:95117,bf:98930,cf:98931,df:98932,ef:43347,ff:129889,gf:45474,hf:100352,jf:84758,kf:98443,lf:117985,mf:74613,nf:74614,pf:64502,qf:136032,rf:74615,sf:74616,tf:122224,uf:74617,vf:77820,wf:74618,xf:93278,yf:93274,zf:93275,Af:93276,Bf:22110,Cf:29433,Df:133798,Ef:132295,Gf:120541,If:82047,Jf:113550,Kf:75836,
Lf:75837,Mf:42352,Nf:84512,Of:76065,Pf:75989,Qf:16623,Rf:32594,Sf:27240,Tf:32633,Uf:74858,Wf:3945,Vf:16989,Xf:45520,Yf:25488,Zf:25492,ag:25494,cg:55760,dg:14057,eg:18451,fg:57204,gg:57203,hg:17897,ig:57205,jg:18198,kg:17898,lg:17909,mg:43980,ng:46220,og:11721,pg:49954,qg:96369,rg:3854,sg:56251,tg:25624,ug:16906,vg:99999,wg:68172,xg:27068,yg:47973,zg:72773,Ag:26970,Bg:26971,Cg:96805,Dg:17752,Eg:73233,Fg:109512,Gg:22256,Hg:14115,Ig:22696,Jg:89278,Kg:89277,Lg:109513,Mg:43278,Ng:43459,Og:43464,Pg:89279,
Qg:43717,Rg:55764,Sg:22255,Tg:89281,Ug:40963,Vg:43277,Wg:43442,Xg:91824,Yg:120137,Zg:96367,ah:36850,bh:72694,dh:37414,eh:36851,gh:124863,fh:121343,hh:73491,ih:54473,jh:43375,kh:46674,lh:139095,mh:32473,nh:72901,oh:72906,ph:50947,qh:50612,rh:50613,sh:50942,th:84938,uh:84943,vh:84939,wh:84941,xh:84944,yh:84940,zh:84942,Ah:35585,Bh:51926,Ch:79983,Dh:63238,Eh:18921,Fh:63241,Gh:57893,Hh:41182,Ih:135732,Jh:33424,Kh:22207,Lh:42993,Mh:36229,Nh:22206,Oh:22205,Ph:18993,Qh:19001,Rh:18990,Sh:18991,Th:18997,Uh:18725,
Vh:19003,Wh:36874,Xh:44763,Yh:33427,Zh:67793,ai:22182,bi:37091,ci:34650,di:50617,fi:47261,gi:22287,hi:25144,ii:97917,ji:62397,ki:125598,li:137935,mi:36961,ni:108035,oi:27426,ri:27857,si:27846,ti:27854,vi:69692,wi:61411,xi:39299,yi:38696,zi:62520,Ai:36382,Bi:108701,Ci:50663,Di:36387,Ei:14908,Fi:37533,Gi:105443,Hi:61635,Ii:62274,Ji:133818,Ki:65702,Li:65703,Mi:65701,Ni:76256,Oi:37671,Pi:49953,Ri:36216,Si:28237,Ti:39553,Ui:29222,Vi:26107,Wi:38050,Xi:26108,Zi:120745,Yi:26109,aj:26110,bj:66881,cj:28236,
dj:14586,ej:57929,fj:74723,gj:44098,hj:44099,kj:23528,lj:61699,ij:134104,jj:134103,mj:59149,nj:101951,oj:97346,pj:118051,qj:95102,rj:64882,sj:119505,tj:63595,uj:63349,vj:95101,wj:75240,xj:27039,yj:68823,zj:21537,Aj:83464,Bj:75707,Cj:83113,Dj:101952,Ej:101953,Gj:79610,Hj:125755,Ij:24402,Jj:24400,Kj:32925,Lj:57173,Mj:122502,Nj:138480,Oj:64423,Pj:64424,Qj:33986,Rj:100828,Sj:129089,Tj:21409,Xj:135155,Yj:135156,Zj:135157,ak:135158,bk:135159,ck:135160,dk:135161,ek:135162,fk:135163,gk:135164,hk:135165,ik:135166,
Uj:11070,Vj:11074,Wj:17880,jk:14001,lk:30709,mk:30707,nk:30711,pk:30710,qk:30708,kk:26984,rk:63648,sk:63649,tk:51879,uk:111059,vk:5754,wk:20445,yk:130975,xk:130976,zk:110386,Ak:113746,Bk:66557,Dk:17310,Ek:28631,Fk:21589,Gk:68012,Hk:60480,Ik:138664,Jk:141121,Kk:31571,Lk:141978,Mk:76980,Nk:41577,Ok:45469,Pk:38669,Qk:13768,Rk:13777,Sk:62985,Tk:4724,Uk:59369,Vk:43927,Wk:43928,Xk:12924,Yk:100355,bl:56219,dl:27669,fl:10337,al:47896,il:122629,kl:139723,jl:139722,ll:121258,ml:107598,nl:127991,ol:96639,pl:107536,
ql:130169,rl:96661,sl:96658,ul:116646,vl:121122,wl:96660,xl:127738,yl:127083,zl:104443,Al:96659,Bl:106442,Cl:134840,Dl:63667,El:63668,Fl:63669,Gl:130686,Hl:78314,Il:55761,Jl:127098,Kl:134841,Ll:96368,Ml:67374,Nl:48992,Ol:49956,Pl:31961,Ql:26388,Rl:23811,Sl:5E4,Tl:126250,Ul:96370,Vl:47355,Wl:47356,Xl:37935,Yl:45521,Zl:21760,am:83769,bm:49977,cm:49974,dm:93497,em:93498,fm:34325,gm:140759,hm:115803,im:123707,jm:100081,km:35309,lm:68314,mm:25602,nm:100339,om:59018,pm:18248,qm:50625,rm:9729,sm:37168,tm:37169,
um:21667,vm:16749,wm:18635,xm:39305,ym:18046,zm:53969,Am:8213,Bm:93926,Cm:102852,Dm:110099,Em:22678,Fm:69076,Gm:137575,Im:139224,Jm:100856,Km:17736,Lm:3832,Mm:55759,Nm:64031,Tm:93044,Um:93045,Vm:34388,Wm:17657,Xm:17655,Ym:39579,Zm:39578,an:77448,bn:8196,cn:11357,dn:69877,en:8197,fn:82039};function pn(){var a=qb(qn),b;return Pf(new If(function(c,d){a.onSuccess=function(e){gi(e)?c(new rn(e)):d(new sn("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new sn("Unknown request error","net.unknown",e))};
a.onTimeout=function(e){d(new sn("Request timed out","net.timeout",e))};
b=mi("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof Qf&&b.abort();
return Nf(c)})}
function sn(a,b,c){Za.call(this,a+", errorCode="+b);this.errorCode=b;this.xhr=c;this.name="PromiseAjaxError"}
v(sn,Za);function rn(a){this.xhr=a}
;function tn(){this.i=0;this.h=null}
tn.prototype.then=function(a,b,c){return 1===this.i&&a?(a=a.call(c,this.h),Hf(a)?a:un(a)):2===this.i&&b?(a=b.call(c,this.h),Hf(a)?a:vn(a)):this};
tn.prototype.getValue=function(){return this.h};
tn.prototype.$goog_Thenable=!0;function vn(a){var b=new tn;a=void 0===a?null:a;b.i=2;b.h=void 0===a?null:a;return b}
function un(a){var b=new tn;a=void 0===a?null:a;b.i=1;b.h=void 0===a?null:a;return b}
;function wn(){if(Vd())return!0;var a=F("INNERTUBE_CLIENT_NAME");return!a||"WEB"!==a&&"MWEB"!==a||ui&&vi("applewebkit")&&!vi("version")&&(!vi("safari")||vi("gsa/"))||sc&&vi("version/")?!0:(a=Td.get("CONSENT",void 0))?a.startsWith("YES+"):!0}
;function xn(a){Za.call(this,a.message||a.description||a.name);this.isMissing=a instanceof yn;this.isTimeout=a instanceof sn&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof Qf}
v(xn,Za);xn.prototype.name="BiscottiError";function yn(){Za.call(this,"Biscotti ID is missing from server")}
v(yn,Za);yn.prototype.name="BiscottiMissingError";var qn={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},zn=null;function Rh(){if(M("disable_biscotti_fetch_entirely_for_all_web_clients"))return Nf(Error("Biscotti id fetching has been disabled entirely."));if(!wn())return Nf(Error("User has not consented - not fetching biscotti id."));if("1"==ob())return Nf(Error("Biscotti ID is not available in private embed mode"));zn||(zn=Pf(pn().then(An),function(a){return Bn(2,a)}));
return zn}
function An(a){a=a.xhr.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new yn;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new yn;a=a.id;Sh(a);zn=un(a);Cn(18E5,2);return a}
function Bn(a,b){b=new xn(b);Sh("");zn=vn(b);0<a&&Cn(12E4,a-1);throw b;}
function Cn(a,b){Bh(function(){Pf(pn().then(An,function(c){return Bn(b,c)}),Ja)},a)}
function Dn(){try{var a=C("yt.ads.biscotti.getId_");return a?a():Rh()}catch(b){return Nf(b)}}
;function En(a){if("1"!=ob()){a&&Qh();try{Dn().then(function(){},function(){}),Bh(En,18E5)}catch(b){hh(b)}}}
;var Fn=Date.now().toString();
function Gn(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=Date.now();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Fn)for(a=1,b=0;b<Fn.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Fn.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Hn,In=y.ytLoggingDocDocumentNonce_;In||(In=Gn(),Xa("ytLoggingDocDocumentNonce_",In));Hn=In;var Jn={Ff:0,Vc:1,ed:2,Qi:3,Hf:4,Hm:5,Fj:6,Zk:7,Ck:8,0:"DEFAULT",1:"CHAT",2:"CONVERSATIONS",3:"MINIPLAYER",4:"DIALOG",5:"VOZ",6:"MUSIC_WATCH_TABS",7:"SHARE",8:"PUSH_NOTIFICATIONS"};function Kn(a){this.h=a}
function Ln(a){return new Kn({trackingParams:a})}
Kn.prototype.getAsJson=function(){var a={};void 0!==this.h.trackingParams?a.trackingParams=this.h.trackingParams:(a.veType=this.h.veType,void 0!==this.h.veCounter&&(a.veCounter=this.h.veCounter),void 0!==this.h.elementIndex&&(a.elementIndex=this.h.elementIndex));void 0!==this.h.dataElement&&(a.dataElement=this.h.dataElement.getAsJson());void 0!==this.h.youtubeData&&(a.youtubeData=this.h.youtubeData);return a};
Kn.prototype.toString=function(){return JSON.stringify(this.getAsJson())};
Kn.prototype.isClientVe=function(){return!this.h.trackingParams&&!!this.h.veType};function Mn(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Nn(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function On(a){return F(Nn(void 0===a?0:a),void 0)}
B("yt_logging_screen.getRootVeType",On,void 0);function Pn(a){return(a=On(void 0===a?0:a))?new Kn({veType:a,youtubeData:void 0}):null}
function Qn(){var a=F("csn-to-ctt-auth-info");a||(a={},dh("csn-to-ctt-auth-info",a));return a}
function Rn(a){a=void 0===a?0:a;var b=F(Mn(a));if(!b&&!F("USE_CSN_FALLBACK",!0))return null;b||!M("use_undefined_csn_any_layer")&&0!=a||(b="UNDEFINED_CSN");return b?b:null}
B("yt_logging_screen.getCurrentCsn",Rn,void 0);function Sn(a,b,c){var d=Qn();(c=Rn(c))&&delete d[c];b&&(d[a]=b)}
function Tn(a){return Qn()[a]}
B("yt_logging_screen.getCttAuthInfo",Tn,void 0);function Un(a,b,c,d){c=void 0===c?0:c;if(a!==F(Mn(c))||b!==F(Nn(c)))Sn(a,d,c),dh(Mn(c),a),dh(Nn(c),b),b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:Hn,clientScreenNonce:a};M("use_default_heartbeat_client")?V("foregroundHeartbeatScreenAssociated",e):tj("foregroundHeartbeatScreenAssociated",e,Rm)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b()}
B("yt_logging_screen.setCurrentScreen",Un,void 0);function Vn(a){zl.call(this,1,arguments);this.csn=a}
v(Vn,zl);var Il=new Al("screen-created",Vn),Wn=[],Yn=Xn,Zn=0;function $n(a,b,c,d){var e=d.filter(function(f){f.csn!==b?(f.csn=b,f=!0):f=!1;return f});
c={csn:b,parentVe:c.getAsJson(),childVes:db(e,function(f){return f.getAsJson()})};
d=t(d);for(e=d.next();!e.done;e=d.next())e=e.value.getAsJson(),(mb(e)||!e.trackingParams&&!e.veType)&&mn(Error("Child VE logged with no data"));d={cttAuthInfo:Tn(b),R:b};"UNDEFINED_CSN"==b?ao("visualElementAttached",c,d):a?tj("visualElementAttached",c,a,d):V("visualElementAttached",c,d)}
function Xn(){for(var a=Math.random()+"",b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);255<e&&(b[c++]=e&255,e>>=8);b[c++]=e}return Hc(b,3)}
function ao(a,b,c){Wn.push({payloadName:a,payload:b,options:c});Zn||(Zn=Jl())}
function Kl(a){if(Wn){for(var b=t(Wn),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,tj(c.payloadName,c.payload,null,c.options));Wn.length=0}Zn=0}
;function bo(){this.i=new Set;this.h=new Set;this.j=new Map}
bo.prototype.clear=function(){this.i.clear();this.h.clear();this.j.clear()};
La(bo);function co(a){var b=Ea.apply(1,arguments);if(!eo(a)||b.some(function(e){return!eo(e)}))throw Error("Only objects may be merged.");
var c=a;b=t(b);for(var d=b.next();!d.done;d=b.next())fo(c,d.value);return c}
function fo(a,b){for(var c in b)if(eo(b[c])){if(c in a&&!eo(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});fo(a[c],b[c])}else if(go(b[c])){if(c in a&&!go(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);ho(a[c],b[c])}else a[c]=b[c];return a}
function ho(a,b){b=t(b);for(var c=b.next();!c.done;c=b.next())c=c.value,eo(c)?a.push(fo({},c)):go(c)?a.push(ho([],c)):a.push(c);return a}
function eo(a){return"object"===typeof a&&!Array.isArray(a)}
function go(a){return"object"===typeof a&&Array.isArray(a)}
;function io(a,b){zl.call(this,1,arguments)}
v(io,zl);var jo=new Al("aft-recorded",io);var ko=window;function lo(){this.timing={};this.clearResourceTimings=function(){};
this.webkitClearResourceTimings=function(){};
this.mozClearResourceTimings=function(){};
this.msClearResourceTimings=function(){};
this.oClearResourceTimings=function(){}}
var W=ko.performance||ko.mozPerformance||ko.msPerformance||ko.webkitPerformance||new lo;var mo=!1,no={'script[name="scheduler/scheduler"]':"sj",'script[name="player/base"]':"pj",'link[rel="stylesheet"][name="www-player"]':"pc",'link[rel="stylesheet"][name="player/www-player"]':"pc",'script[name="desktop_polymer/desktop_polymer"]':"dpj",'link[rel="import"][name="desktop_polymer"]':"dph",'script[name="mobile-c3"]':"mcj",'link[rel="stylesheet"][name="mobile-c3"]':"mcc",'script[name="player-plasma-ias-phone/base"]':"mcppj",'script[name="player-plasma-ias-tablet/base"]':"mcptj",'link[rel="stylesheet"][name="mobile-polymer-player-ias"]':"mcpc",
'link[rel="stylesheet"][name="mobile-polymer-player-svg-ias"]':"mcpsc",'script[name="mobile_blazer_core_mod"]':"mbcj",'link[rel="stylesheet"][name="mobile_blazer_css"]':"mbc",'script[name="mobile_blazer_logged_in_users_mod"]':"mbliuj",'script[name="mobile_blazer_logged_out_users_mod"]':"mblouj",'script[name="mobile_blazer_noncore_mod"]':"mbnj","#player_css":"mbpc",'script[name="mobile_blazer_desktopplayer_mod"]':"mbpj",'link[rel="stylesheet"][name="mobile_blazer_tablet_css"]':"mbtc",'script[name="mobile_blazer_watch_mod"]':"mbwj"};
Va(W.clearResourceTimings||W.webkitClearResourceTimings||W.mozClearResourceTimings||W.msClearResourceTimings||W.oClearResourceTimings||Ja,W);function oo(a){var b=po(a);if(b.aft)return b.aft;a=F((a||"")+"TIMING_AFT_KEYS",["ol"]);for(var c=a.length,d=0;d<c;d++){var e=b[a[d]];if(e)return e}return NaN}
function qo(){var a;if(M("csi_use_performance_navigation_timing")){var b,c,d,e=null===(d=null===(c=null===(b=null===(a=null===W||void 0===W?void 0:W.getEntriesByType)||void 0===a?void 0:a.call(W,"navigation"))||void 0===b?void 0:b[0])||void 0===c?void 0:c.toJSON)||void 0===d?void 0:d.call(c);e?(e.requestStart=ro(e.requestStart),e.responseEnd=ro(e.responseEnd),e.redirectStart=ro(e.redirectStart),e.redirectEnd=ro(e.redirectEnd),e.domainLookupEnd=ro(e.domainLookupEnd),e.connectStart=ro(e.connectStart),
e.connectEnd=ro(e.connectEnd),e.responseStart=ro(e.responseStart),e.secureConnectionStart=ro(e.secureConnectionStart),e.domainLookupStart=ro(e.domainLookupStart),e.isPerformanceNavigationTiming=!0,a=e):a=W.timing}else a=W.timing;return a}
function to(){return M("csi_use_time_origin")&&W.timeOrigin?Math.floor(W.timeOrigin):W.timing.navigationStart}
function ro(a){return Math.round(to()+a)}
function uo(a){var b;(b=C("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Xa("ytcsi."+(a||"")+"data_",b));return b}
function vo(a){a=uo(a);a.info||(a.info={});return a.info}
function po(a){a=uo(a);a.tick||(a.tick={});return a.tick}
function wo(a){var b=uo(a).nonce;b||(b=Gn(),uo(a).nonce=b);return b}
function xo(a){var b=po(a||""),c=oo(a);c&&!mo&&(Fl(jo,new io(Math.round(c-b._start),a)),mo=!0)}
;function yo(){if(W.getEntriesByType){var a=W.getEntriesByType("paint");if(a=fb(a,function(b){return"first-paint"===b.name}))return ro(a.startTime)}a=W.timing;
return a.Pb?Math.max(0,a.Pb):0}
;function zo(){var a=C("ytcsi.debug");a||(a=[],B("ytcsi.debug",a,void 0),B("ytcsi.reference",{},void 0));return a}
function Ao(a){a=a||"";var b=C("ytcsi.reference");b||(zo(),b=C("ytcsi.reference"));if(b[a])return b[a];var c=zo(),d={timerName:a,info:{},tick:{},span:{}};c.push(d);return b[a]=d}
;var Bo=y.ytLoggingGelSequenceIdObj_||{};B("ytLoggingGelSequenceIdObj_",Bo,void 0);function Co(a,b){b=void 0===b?{}:b;var c=!1;F("ytLoggingEventsDefaultDisabled",!1)&&Rm===Rm&&(c=!0);c=c?null:Rm;b=void 0===b?{}:b;var d=Math.round(b.timestamp||N());I(a,1,d<Number.MAX_SAFE_INTEGER?d:0);var e=Ph();d=new Ig;I(d,1,b.timestamp||!isFinite(e)?-1:e);if(M("log_sequence_info_on_gel_web")&&b.R){e=b.R;var f=uj(e),g=new Hg;I(g,2,f);I(g,1,e);bd(d,3,g);b.jb&&delete Bo[b.R]}bd(a,33,d);(b.Wb?fj:aj)({endpoint:"log_event",payload:a,cttAuthInfo:b.cttAuthInfo,qa:b.qa},c)}
;var Do=y.ytLoggingLatencyUsageStats_||{};B("ytLoggingLatencyUsageStats_",Do,void 0);function Eo(){this.h=0}
function Fo(){Eo.h||(Eo.h=new Eo);return Eo.h}
Eo.prototype.tick=function(a,b,c,d){Go(this,"tick_"+a+"_"+b)||(c={timestamp:c,cttAuthInfo:d},M("web_csi_via_jspb")?(d=new Gg,I(d,1,a),I(d,2,b),a=new Jg,cd(a,5,d),Co(a,c)):V("latencyActionTicked",{tickName:a,clientActionNonce:b},c))};
Eo.prototype.info=function(a,b,c){var d=Object.keys(a).join("");Go(this,"info_"+d+"_"+b)||(a=Object.assign({},a),a.clientActionNonce=b,V("latencyActionInfo",a,{cttAuthInfo:c}))};
Eo.prototype.span=function(a,b,c){var d=Object.keys(a).join("");Go(this,"span_"+d+"_"+b)||(a.clientActionNonce=b,V("latencyActionSpan",a,{cttAuthInfo:c}))};
function Go(a,b){Do[b]=Do[b]||{count:0};var c=Do[b];c.count++;c.time=N();a.h||(a.h=Fh(function(){var d=N(),e;for(e in Do)Do[e]&&6E4<d-Do[e].time&&delete Do[e];a&&(a.h=0)},5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new dk("CSI data exceeded logging limit with key",b.split("_")),0<=b.indexOf("plev")||mn(c)),!0):!1}
;var X={},Ho=(X.auto_search="LATENCY_ACTION_AUTO_SEARCH",X.ad_to_ad="LATENCY_ACTION_AD_TO_AD",X.ad_to_video="LATENCY_ACTION_AD_TO_VIDEO",X["analytics.explore"]="LATENCY_ACTION_CREATOR_ANALYTICS_EXPLORE",X.app_startup="LATENCY_ACTION_APP_STARTUP",X["artist.analytics"]="LATENCY_ACTION_CREATOR_ARTIST_ANALYTICS",X["artist.events"]="LATENCY_ACTION_CREATOR_ARTIST_CONCERTS",X["artist.presskit"]="LATENCY_ACTION_CREATOR_ARTIST_PROFILE",X.browse="LATENCY_ACTION_BROWSE",X.channels="LATENCY_ACTION_CHANNELS",X.creator_channel_dashboard=
"LATENCY_ACTION_CREATOR_CHANNEL_DASHBOARD",X["channel.analytics"]="LATENCY_ACTION_CREATOR_CHANNEL_ANALYTICS",X["channel.comments"]="LATENCY_ACTION_CREATOR_CHANNEL_COMMENTS",X["channel.content"]="LATENCY_ACTION_CREATOR_POST_LIST",X["channel.copyright"]="LATENCY_ACTION_CREATOR_CHANNEL_COPYRIGHT",X["channel.editing"]="LATENCY_ACTION_CREATOR_CHANNEL_EDITING",X["channel.monetization"]="LATENCY_ACTION_CREATOR_CHANNEL_MONETIZATION",X["channel.music"]="LATENCY_ACTION_CREATOR_CHANNEL_MUSIC",X["channel.playlists"]=
"LATENCY_ACTION_CREATOR_CHANNEL_PLAYLISTS",X["channel.translations"]="LATENCY_ACTION_CREATOR_CHANNEL_TRANSLATIONS",X["channel.videos"]="LATENCY_ACTION_CREATOR_CHANNEL_VIDEOS",X["channel.live_streaming"]="LATENCY_ACTION_CREATOR_LIVE_STREAMING",X.chips="LATENCY_ACTION_CHIPS",X["dialog.copyright_strikes"]="LATENCY_ACTION_CREATOR_DIALOG_COPYRIGHT_STRIKES",X["dialog.uploads"]="LATENCY_ACTION_CREATOR_DIALOG_UPLOADS",X.direct_playback="LATENCY_ACTION_DIRECT_PLAYBACK",X.embed="LATENCY_ACTION_EMBED",X.entity_key_serialization_perf=
"LATENCY_ACTION_ENTITY_KEY_SERIALIZATION_PERF",X.entity_key_deserialization_perf="LATENCY_ACTION_ENTITY_KEY_DESERIALIZATION_PERF",X.explore="LATENCY_ACTION_EXPLORE",X.home="LATENCY_ACTION_HOME",X.library="LATENCY_ACTION_LIBRARY",X.live="LATENCY_ACTION_LIVE",X.live_pagination="LATENCY_ACTION_LIVE_PAGINATION",X.onboarding="LATENCY_ACTION_ONBOARDING",X.parent_profile_settings="LATENCY_ACTION_KIDS_PARENT_PROFILE_SETTINGS",X.parent_tools_collection="LATENCY_ACTION_PARENT_TOOLS_COLLECTION",X.parent_tools_dashboard=
"LATENCY_ACTION_PARENT_TOOLS_DASHBOARD",X.player_att="LATENCY_ACTION_PLAYER_ATTESTATION",X["post.comments"]="LATENCY_ACTION_CREATOR_POST_COMMENTS",X["post.edit"]="LATENCY_ACTION_CREATOR_POST_EDIT",X.prebuffer="LATENCY_ACTION_PREBUFFER",X.prefetch="LATENCY_ACTION_PREFETCH",X.profile_settings="LATENCY_ACTION_KIDS_PROFILE_SETTINGS",X.profile_switcher="LATENCY_ACTION_LOGIN",X.reel_watch="LATENCY_ACTION_REEL_WATCH",X.results="LATENCY_ACTION_RESULTS",X.search_ui="LATENCY_ACTION_SEARCH_UI",X.search_suggest=
"LATENCY_ACTION_SUGGEST",X.search_zero_state="LATENCY_ACTION_SEARCH_ZERO_STATE",X.secret_code="LATENCY_ACTION_KIDS_SECRET_CODE",X.seek="LATENCY_ACTION_PLAYER_SEEK",X.settings="LATENCY_ACTION_SETTINGS",X.tenx="LATENCY_ACTION_TENX",X.video_to_ad="LATENCY_ACTION_VIDEO_TO_AD",X.watch="LATENCY_ACTION_WATCH",X.watch_it_again="LATENCY_ACTION_KIDS_WATCH_IT_AGAIN",X["watch,watch7"]="LATENCY_ACTION_WATCH",X["watch,watch7_html5"]="LATENCY_ACTION_WATCH",X["watch,watch7ad"]="LATENCY_ACTION_WATCH",X["watch,watch7ad_html5"]=
"LATENCY_ACTION_WATCH",X.wn_comments="LATENCY_ACTION_LOAD_COMMENTS",X.ww_rqs="LATENCY_ACTION_WHO_IS_WATCHING",X["video.analytics"]="LATENCY_ACTION_CREATOR_VIDEO_ANALYTICS",X["video.comments"]="LATENCY_ACTION_CREATOR_VIDEO_COMMENTS",X["video.edit"]="LATENCY_ACTION_CREATOR_VIDEO_EDIT",X["video.editor"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR",X["video.editor_async"]="LATENCY_ACTION_CREATOR_VIDEO_VIDEO_EDITOR_ASYNC",X["video.live_settings"]="LATENCY_ACTION_CREATOR_VIDEO_LIVE_SETTINGS",X["video.live_streaming"]=
"LATENCY_ACTION_CREATOR_VIDEO_LIVE_STREAMING",X["video.monetization"]="LATENCY_ACTION_CREATOR_VIDEO_MONETIZATION",X["video.translations"]="LATENCY_ACTION_CREATOR_VIDEO_TRANSLATIONS",X.voice_assistant="LATENCY_ACTION_VOICE_ASSISTANT",X.cast_load_by_entity_to_watch="LATENCY_ACTION_CAST_LOAD_BY_ENTITY_TO_WATCH",X.networkless_performance="LATENCY_ACTION_NETWORKLESS_PERFORMANCE",X),Y={},Io=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an=
"adNetworks",Y.ad_at="adType",Y.aida="appInstallDataAgeMs",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cs="commandSource",Y.cpn="clientPlaybackNonce",Y.ccs="creatorInfo.creatorCanaryState",Y.ctop="creatorInfo.topEntityType",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="requestIds",Y.GetSearch_rid="requestIds",Y.GetPlayer_rid="requestIds",Y.GetWatchNext_rid="requestIds",Y.GetBrowse_rid="requestIds",Y.GetLibrary_rid="requestIds",Y.is_continuation="isContinuation",
Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.nav_type="kabukiInfo.navigationType",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.pnt="performanceNavigationTiming",
Y.prt="playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.rc="resourceInfo.resourceCache",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.ssdm="shellStartupDurationMs",Y.br_trs=
"tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.aac_type="tvInfo.authAccessCredentialType",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",
Y.GetSettings_rid="requestIds",Y.GetTrending_rid="requestIds",Y.GetMusicSearchSuggestions_rid="requestIds",Y.REQUEST_ID="requestIds",Y),Jo="isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized navigationRequestedSameUrl performanceNavigationTiming playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),Ko={},Lo=(Ko.ccs="CANARY_STATE_",
Ko.mver="MEASUREMENT_VERSION_",Ko.pis="PLAYER_INITIALIZED_STATE_",Ko.yt_pt="LATENCY_PLAYER_",Ko.pa="LATENCY_ACTION_",Ko.ctop="TOP_ENTITY_TYPE_",Ko.yt_vst="VIDEO_STREAM_TYPE_",Ko),Mo="all_vc ap aq c cbr cbrand cbrver cmodel cos cosver cplatform ctheme cver ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function No(a,b,c){var d=Oo(c);d.gelTicks&&(d.gelTicks["tick_"+a]=!0);c||b||N();Ao(c||"").tick[a]=b||N();d=wo(c);var e=uo(c).cttAuthInfo;"_start"===a?(a=Fo(),Go(a,"baseline_"+d)||(b={timestamp:b,cttAuthInfo:e},M("web_csi_via_jspb")?(a=new Fg,I(a,1,d),d=new Jg,cd(d,6,a),Co(d,b)):V("latencyActionBaselined",{clientActionNonce:d},b))):Fo().tick(a,d,b,e);xo(c)}
function Po(a,b,c){c=Oo(c);if(c.gelInfos)c.gelInfos["info_"+a]=!0;else{var d={};c.gelInfos=(d["info_"+a]=!0,d)}if(a.match("_rid")){var e=a.split("_rid")[0];a="REQUEST_ID"}if(a in Io){c=Io[a];0<=bb(Jo,c)&&(b=!!b);a in Lo&&"string"===typeof b&&(b=Lo[a]+b.toUpperCase());a=b;b=c.split(".");for(var f=d={},g=0;g<b.length-1;g++){var h=b[g];f[h]={};f=f[h]}f[b[b.length-1]]="requestIds"===c?[{id:a,endpoint:e}]:a;return co({},d)}0<=bb(Mo,a)||mn(new dk("Unknown label logged with GEL CSI",a))}
function Oo(a){a=uo(a);if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}else a.gel={gelTicks:{},gelInfos:{}};return a.gel}
function Qo(a){a=Oo(a);a.gelInfos||(a.gelInfos={});return a.gelInfos}
;function Ro(a,b,c){null!==b&&(vo(c)[a]=b,a=Po(a,b,c))&&(b=Ao(c||""),co(b.info,a),co(Qo(c),a),b=wo(c),c=uo(c).cttAuthInfo,Fo().info(a,b,c))}
function Z(a,b,c){var d=po(c);if(!b&&"_"!==a[0]){var e=a;W.mark&&(0==e.lastIndexOf("mark_",0)||(e="mark_"+e),c&&(e+=" ("+c+")"),W.mark(e))}e=b||N();d[a]=e;No(a,b,c);return d[a]}
function So(){var a=wo(void 0);requestAnimationFrame(function(){setTimeout(function(){a===wo(void 0)&&Z("ol",void 0,void 0)},0)})}
function To(){var a=document;if("visibilityState"in a)a=a.visibilityState;else{var b=rh+"VisibilityState";a=b in a?a[b]:void 0}switch(a){case "hidden":return 0;case "visible":return 1;case "prerender":return 2;case "unloaded":return 3;default:return-1}}
function Uo(a,b){a=document.querySelector(a);if(!a)return!1;var c="",d=a.nodeName;"SCRIPT"===d?(c=a.src,c||(c=a.getAttribute("data-timing-href"))&&(c=window.location.protocol+c)):"LINK"===d&&(c=a.href);bc()&&a.setAttribute("nonce",bc());return c?(a=W.getEntriesByName(c))&&a[0]&&(a=a[0],c=to(),Z("rsf_"+b,c+Math.round(a.fetchStart)),Z("rse_"+b,c+Math.round(a.responseEnd)),void 0!==a.transferSize&&0===a.transferSize)?!0:!1:!1}
function Vo(){var a=window.location.protocol,b=W.getEntriesByType("resource");b=cb(b,function(c){return 0===c.name.indexOf(a+"//fonts.gstatic.com/s/")});
(b=eb(b,function(c,d){return d.duration>c.duration?d:c},{duration:0}))&&0<b.startTime&&0<b.responseEnd&&(Z("wffs",ro(b.startTime)),Z("wffe",ro(b.responseEnd)))}
var Wo=window;Wo.ytcsi&&(Wo.ytcsi.info=Ro,Wo.ytcsi.tick=Z);function Xo(){this.s=[];this.C=[];this.h=[];this.l=[];this.m=[];this.i=new Set;this.u=new Map}
function Yo(a,b,c){c=void 0===c?0:c;b.then(function(d){var e,f;a.i.has(c)&&a.j&&a.j();var g=Rn(c),h=Pn(c);g&&h&&((null===(e=null===d||void 0===d?void 0:d.response)||void 0===e?0:e.trackingParams)&&$n(a.client,g,h,[Ln(d.response.trackingParams)]),(null===(f=null===d||void 0===d?void 0:d.playerResponse)||void 0===f?0:f.trackingParams)&&$n(a.client,g,h,[Ln(d.playerResponse.trackingParams)]))})}
function Zo(a,b,c,d){d=void 0===d?0:d;if(a.i.has(d))a.s.push([b,c]);else{var e=Rn(d);c=c||Pn(d);e&&c&&$n(a.client,e,c,[b])}}
Xo.prototype.clickCommand=function(a,b,c){a=a.clickTrackingParams;c=void 0===c?0:c;if(a)if(c=Rn(void 0===c?0:c)){var d=this.client;var e="INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK";a={csn:c,ve:Ln(a).getAsJson(),gestureType:e};b&&(a.clientData=b);b={cttAuthInfo:Tn(c),R:c};"UNDEFINED_CSN"==c?ao("visualElementGestured",a,b):d?tj("visualElementGestured",a,d,b):V("visualElementGestured",a,b);b=!0}else b=!1;else b=!1;return b};
function $o(a,b,c){c=void 0===c?{}:c;a.i.add(c.layer||0);a.j=function(){ap(a,b,c);var f=Pn(c.layer);if(f){for(var g=t(a.s),h=g.next();!h.done;h=g.next())h=h.value,Zo(a,h[0],h[1]||f,c.layer);f=t(a.C);for(g=f.next();!g.done;g=f.next()){var k=g.value;g=void 0;g=void 0===g?0:g;h=Rn(g);var l=k[0]||Pn(g);h&&l&&(g=a.client,k=k[1],k={csn:h,ve:l.getAsJson(),clientData:k},l={cttAuthInfo:Tn(h),R:h},"UNDEFINED_CSN"==h?ao("visualElementStateChanged",k,l):g?tj("visualElementStateChanged",k,g,l):V("visualElementStateChanged",
k,l))}}};
Rn(c.layer)||a.j();if(c.hb)for(var d=t(c.hb),e=d.next();!e.done;e=d.next())Yo(a,e.value,c.layer);else ln(Error("Delayed screen needs a data promise."))}
function ap(a,b,c){c=void 0===c?{}:c;c.layer||(c.layer=0);var d=void 0!==c.Qb?c.Qb:c.layer;var e=Rn(d);d=Pn(d);var f;d&&(void 0!==c.parentCsn?f={clientScreenNonce:c.parentCsn,visualElement:d}:e&&"UNDEFINED_CSN"!==e&&(f={clientScreenNonce:e,visualElement:d}));var g,h=F("EVENT_ID");"UNDEFINED_CSN"===e&&h&&(g={servletData:{serializedServletEventId:h}});try{var k=a.client;h=f;var l=c.gb,n=c.cttAuthInfo,p=c.nn,u=Yn(),q={csn:u,pageVe:(new Kn({veType:b,youtubeData:g})).getAsJson()};h&&h.visualElement?(q.implicitGesture=
{parentCsn:h.clientScreenNonce,gesturedVe:h.visualElement.getAsJson()},p&&(q.implicitGesture.gestureType=p)):h&&mn(new dk("newScreen() parent element does not have a VE - rootVe",b));l&&(q.cloneCsn=l);l={cttAuthInfo:n,R:u};k?tj("screenCreated",q,k,l):V("screenCreated",q,l);Fl(Il,new Vn(u));var z=u}catch(A){nn(A,{un:b,rootVe:d,parentVisualElement:void 0,ln:e,tn:f,gb:c.gb});ln(A);return}Un(z,b,c.layer,c.cttAuthInfo);if((b=e&&"UNDEFINED_CSN"!==e&&d)&&!(b=M("screen_manager_skip_hide_killswitch"))){a:{b=
t(Object.values(Jn));for(f=b.next();!f.done;f=b.next())if(Rn(f.value)==e){b=!0;break a}b=!1}b=!b}b&&(b=a.client,f=!0,k=(f=void 0===f?!1:f)?16:8,d={csn:e,ve:d.getAsJson(),eventType:k},f={cttAuthInfo:Tn(e),R:e,jb:f},"UNDEFINED_CSN"==e?ao("visualElementHidden",d,f):b?tj("visualElementHidden",d,b,f):V("visualElementHidden",d,f));a.h[a.h.length-1]&&!a.h[a.h.length-1].csn&&(a.h[a.h.length-1].csn=z||"");Ro("csn",z);bo.getInstance().clear();d=Pn(c.layer);e&&"UNDEFINED_CSN"!==e&&d&&(M("web_mark_root_visible")||
M("music_web_mark_root_visible"))&&(e=z,z={csn:e,ve:d.getAsJson(),eventType:1},b={cttAuthInfo:Tn(e),R:e},"UNDEFINED_CSN"==e?ao("visualElementShown",z,b):V("visualElementShown",z,b));a.i.delete(c.layer||0);a.j=void 0;e=t(a.u);for(z=e.next();!z.done;z=e.next())b=t(z.value),z=b.next().value,b=b.next().value,b.has(c.layer)&&d&&Zo(a,z,d,c.layer);for(c=0;c<a.l.length;c++){e=a.l[c];try{e()}catch(A){ln(A)}}for(c=a.l.length=0;c<a.m.length;c++){e=a.m[c];try{e()}catch(A){ln(A)}}}
;function bp(a){a&&(a.dataset?a.dataset[cp("loaded")]="true":a.setAttribute("data-loaded","true"))}
function dp(a,b){return a?a.dataset?a.dataset[cp(b)]:a.getAttribute("data-"+b):null}
var ep={};function cp(a){return ep[a]||(ep[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var fp=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,gp=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function hp(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(fp,""),c=c.replace(gp,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else ip(a,b,c)}
function ip(a,b,c){c=void 0===c?null:c;var d=jp(a),e=document.getElementById(d),f=e&&dp(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=Gi(d,b),b=""+Pa(b),kp[b]=f),g||(e=lp(a,d,function(){dp(e,"loaded")||(bp(e),Ji(d),Bh(Wa(Ki,d),0))},c)))}
function lp(a,b,c,d){d=void 0===d?null:d;var e=Ad(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);td(e,zf(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function mp(a){a=jp(a);var b=document.getElementById(a);b&&(Ki(a),b.parentNode.removeChild(b))}
function np(a,b){a&&b&&(a=""+Pa(b),(a=kp[a])&&Ii(a))}
function jp(a){var b=document.createElement("a");Zb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+dc(a)}
var kp={};var op=[],pp=!1;function qp(){if(!M("disable_biscotti_fetch_for_ad_blocker_detection")&&!M("disable_biscotti_fetch_entirely_for_all_web_clients")&&wn()&&"1"!=ob()){var a=function(){pp=!0;"google_ad_status"in window?dh("DCLKSTAT",1):dh("DCLKSTAT",2)};
try{hp("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}op.push(Kh.L(function(){if(!(pp||"google_ad_status"in window)){try{np("//static.doubleclick.net/instream/ad_status.js",a)}catch(b){}pp=!0;dh("DCLKSTAT",3)}},5E3))}}
function rp(){var a=Number(F("DCLKSTAT",0));return isNaN(a)?0:a}
;function sp(){this.i=!1;this.h=null}
sp.prototype.initialize=function(a,b,c,d){d=void 0===d?!1:d;var e,f;if(a.program){var g=null!==(e=a.interpreterScript)&&void 0!==e?e:null,h=null!==(f=a.interpreterUrl)&&void 0!==f?f:null;if(a.interpreterSafeScript){g=a.interpreterSafeScript;yb("From proto message. b/166824318");g=g.privateDoNotAccessOrElseSafeScriptWrappedValue||"";var k=vb();g=k?k.createScript(g):g;g=(new Ab(g)).toString()}a.interpreterSafeUrl&&(h=a.interpreterSafeUrl,yb("From proto message. b/166824318"),h=Eb(h.privateDoNotAccessOrElseTrustedResourceUrlWrappedValue||
"").toString());tp(this,g,h,a.program,b,c,d)}else mn(Error("Cannot initialize botguard without program"))};
function tp(a,b,c,d,e,f,g){g=void 0===g?!1:g;c?(a.i=!0,hp(c,function(){a.i=!1;var h=0<=c.indexOf("/th/");(h?window.trayride:window.botguard)?up(a,d,!!g,h,e):(mp(c),mn(new dk("Unable to load Botguard","from "+c)))},f)):b&&(f=Ad(document,"SCRIPT"),f.textContent=b,f.nonce=bc(),document.head.appendChild(f),document.head.removeChild(f),((b=b.includes("trayride"))?window.trayride:window.botguard)?up(a,d,!!g,b,e):mn(Error("Unable to load Botguard from JS")))}
sp.prototype.isInitialized=function(){return!!this.h};
function up(a,b,c,d,e){var f,g;if(M("use_bg_facade"))if(c=d?"trayride":"botguard",window[c])try{var h=new jd({program:b,globalName:c});e&&h.ec.then(function(){e(b)});
a.h=h}catch(k){k instanceof Error&&mn(k)}else mn(Error("VM not loaded, cannot start"));else if(h=d?null===(f=window.trayride)||void 0===f?void 0:f.ad:null===(g=window.botguard)||void 0===g?void 0:g.bg)if(c)try{vp(a,new h(b,e?function(){e(b)}:Ja))}catch(k){k instanceof Error&&mn(k)}else{try{vp(a,new h(b))}catch(k){k instanceof Error&&mn(k)}e&&e(b)}else mn(Error("Failed to finish initializing VM"))}
sp.prototype.invoke=function(a){a=void 0===a?{}:a;if(this.h){if(this.h.xb)return this.h.xb({fb:a});if(this.h.hot)return this.h.hot(void 0,void 0,a);if(this.h.invoke)return this.h.invoke(void 0,void 0,a);mn(Error("VM has unknown interface"))}return null};
sp.prototype.dispose=function(){this.h=null};
function vp(a,b){a.h=b}
;var wp=new sp;function xp(){return wp.isInitialized()}
function yp(a){a=void 0===a?{}:a;return wp.invoke(a)}
;function zp(){}
zp.getInstance=function(){var a=C("ytglobal.storage_");a||(a=new zp,B("ytglobal.storage_",a,void 0));return a};
zp.prototype.estimate=function(){var a,b,c;return x(function(d){c=navigator;return(null===(a=c.storage)||void 0===a?0:a.estimate)?d.return(c.storage.estimate()):(null===(b=c.webkitTemporaryStorage)||void 0===b?0:b.queryUsageAndQuota)?d.return(Ap()):d.return()})};
function Ap(){var a=navigator;return new Promise(function(b,c){var d;null!==(d=a.webkitTemporaryStorage)&&void 0!==d&&d.queryUsageAndQuota?a.webkitTemporaryStorage.queryUsageAndQuota(function(e,f){b({usage:e,quota:f})},function(e){c(e)}):c(Error("webkitTemporaryStorage is not supported."))})}
B("ytglobal.storageClass_",zp,void 0);function Bp(a,b){var c=this;this.handleError=a;this.h=b;this.i=!1;void 0===self.document||self.addEventListener("beforeunload",function(){c.i=!0});
this.j=Math.random()<=mh("ytidb_transaction_ended_event_rate_limit",.02)}
Bp.prototype.logEvent=function(a,b){switch(a){case "IDB_DATA_CORRUPTED":M("idb_data_corrupted_killswitch")||this.h("idbDataCorrupted",b);break;case "IDB_UNEXPECTEDLY_CLOSED":this.h("idbUnexpectedlyClosed",b);break;case "IS_SUPPORTED_COMPLETED":M("idb_is_supported_completed_killswitch")||this.h("idbIsSupportedCompleted",b);break;case "QUOTA_EXCEEDED":Cp(this,b);break;case "TRANSACTION_ENDED":this.j&&this.h("idbTransactionEnded",b);break;case "TRANSACTION_UNEXPECTEDLY_ABORTED":a=Object.assign(Object.assign({},
b),{hasWindowUnloaded:this.i}),this.h("idbTransactionAborted",a)}};
function Cp(a,b){zp.getInstance().estimate().then(function(c){c=Object.assign(Object.assign({},b),{isSw:void 0===self.document,isIframe:self!==self.top,deviceStorageUsageMbytes:Dp(null===c||void 0===c?void 0:c.usage),deviceStorageQuotaMbytes:Dp(null===c||void 0===c?void 0:c.quota)});a.h("idbQuotaExceeded",c)})}
function Dp(a){return"undefined"===typeof a?"-1":String(Math.ceil(a/1048576))}
;var Ep=window;
function Fp(){var a=Ep.uaChPolyfill.state;if(0===a.type)V("clientHintsPolyfillEvent",{clientHintsSupported:!1});else{var b=navigator.userAgent,c=void 0!==a.syntheticUa&&a.syntheticUa===b,d={clientHintsSupported:!0,uaAccessedBeforePolyfill:a.didAccessUaBeforePolyfillAvailable,syntheticUaMatches:c};a.didAccessUaBeforePolyfillAvailable&&(d.uaAccessBeforePolyfillCount=a.uaAccessBeforePolyfillCount,a.firstAccessUaError&&(d.firstUaAccessStack=String(a.firstAccessUaError.stack).replace(/\n/g,""),ln(a.firstAccessUaError)),
d.polyfillAvailabilityDelayMs=a.polyfillAvailabilityDelay);V("clientHintsPolyfillEvent",d);c||(b={syntheticUa:a.syntheticUa,ua:b},b.brand=a.data.brands.map(function(e){return'"'+e.brand+'"; v="'+e.version+'"'}),b.mobileness=a.data.mobile,a=a.data.values,a.architecture&&(b.platformArchitecture=a.architecture),a.model&&(b.model=a.model),a.platform&&(b.platformBrand=a.platform),a.platformVersion&&(b.platformVersion=a.platformVersion),a.uaFullVersion&&(b.fullVersion=a.uaFullVersion),V("clientHintsPolyfillDiagnostics",
b))}}
var Gp=!1;function Hp(){var a;1===(null===(a=Ep.uaChPolyfill)||void 0===a?void 0:a.state.type)?Gp||(Ep.uaChPolyfill.onReady=Hp,Gp=!0):Ep.uaChPolyfill&&Fp()}
;function Ip(a,b,c){J.call(this);var d=this;c=c||F("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.j=b||null;this.H="*";this.l=c;this.sessionId=null;this.channel="widget";this.I=!!a;this.A=function(e){a:if(!("*"!=d.l&&e.origin!=d.l||d.j&&e.source!=d.j||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.I&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.l=d.H=e.origin);d.j=e.source;d.sessionId=f.id;d.i&&(d.i(),d.i=null);break;case "command":d.m&&(!d.u||0<=bb(d.u,f.func))&&d.m(f.func,f.args,e.origin)}}};
this.u=this.i=this.m=null;window.addEventListener("message",this.A)}
v(Ip,J);Ip.prototype.sendMessage=function(a,b){if(b=b||this.j){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var c=JSON.stringify(a);b.postMessage(c,this.H)}catch(d){ih(d)}}};
Ip.prototype.D=function(){window.removeEventListener("message",this.A);J.prototype.D.call(this)};function Jp(){this.i=[];this.isReady=!1;this.j={};var a=this.h=new Ip(!!F("WIDGET_ID_ENFORCE")),b=this.Sb.bind(this);a.m=b;a.u=null;this.h.channel="widget";if(a=F("WIDGET_ID"))this.h.sessionId=a}
m=Jp.prototype;m.Sb=function(a,b,c){"addEventListener"===a&&b?(a=b[0],this.j[a]||"onReady"===a||(this.addEventListener(a,Kp(this,a)),this.j[a]=!0)):this.Za(a,b,c)};
m.Za=function(){};
function Kp(a,b){return function(c){return a.sendMessage(b,c)}}
m.addEventListener=function(){};
m.Ib=function(){this.isReady=!0;this.sendMessage("initialDelivery",this.Na());this.sendMessage("onReady");E(this.i,this.wb,this);this.i=[]};
m.Na=function(){return null};
function Lp(a,b){a.sendMessage("infoDelivery",b)}
m.wb=function(a){this.isReady?this.h.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.wb({event:a,info:void 0===b?null:b})};
m.dispose=function(){this.h=null};function Mp(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function Np(a,b,c){if("string"===typeof a)return{videoId:a,startSeconds:b,suggestedQuality:c};b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}
function Op(a,b,c,d){if(Oa(a)&&!Array.isArray(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16===a.length?b.list="PL"+a:b.playlist=a;return b}
;function Pp(a){Jp.call(this);this.listeners=[];this.api=a;this.addEventListener("onReady",this.onReady.bind(this));this.addEventListener("onVideoProgress",this.ac.bind(this));this.addEventListener("onVolumeChange",this.cc.bind(this));this.addEventListener("onApiChange",this.Ub.bind(this));this.addEventListener("onPlaybackQualityChange",this.Xb.bind(this));this.addEventListener("onPlaybackRateChange",this.Yb.bind(this));this.addEventListener("onStateChange",this.Zb.bind(this));this.addEventListener("onWebglSettingsChanged",
this.dc.bind(this))}
v(Pp,Jp);m=Pp.prototype;
m.Za=function(a,b,c){if(this.api.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&Mp(a)){var d=b;if(Oa(d[0])&&!Array.isArray(d[0]))var e=d[0];else switch(e={},a){case "loadVideoById":case "cueVideoById":e=Np(d[0],void 0!==d[1]?Number(d[1]):void 0,d[2]);break;case "loadVideoByUrl":case "cueVideoByUrl":e=d[0];"string"===typeof e&&(e={mediaContentUrl:e,startSeconds:void 0!==d[1]?Number(d[1]):void 0,suggestedQuality:d[2]});b:{if((d=e.mediaContentUrl)&&(d=/\/([ve]|embed)\/([^#?]+)/.exec(d))&&d[2]){d=
d[2];break b}d=null}e.videoId=d;e=Np(e);break;case "loadPlaylist":case "cuePlaylist":e=Op(d[0],d[1],d[2],d[3])}b.length=1;b[0]=e}this.api.handleExternalCall(a,b,c);Mp(a)&&Lp(this,this.Na())}};
m.onReady=function(){var a=this.Ib.bind(this);this.h.i=a};
m.addEventListener=function(a,b){this.listeners.push({eventType:a,listener:b});this.api.addEventListener(a,b)};
m.Na=function(){if(!this.api)return null;var a=this.api.getApiInterface();gb(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0===e.search("get")||0===e.search("is")){var f=0;0===e.search("get")?f=3:0===e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.api[e]();b[f]=g}catch(h){}}}b.videoData=this.api.getVideoData();b.currentTimeLastUpdated_=Date.now()/1E3;return b};
m.Zb=function(a){a={playerState:a,currentTime:this.api.getCurrentTime(),duration:this.api.getDuration(),videoData:this.api.getVideoData(),videoStartBytes:0,videoBytesTotal:this.api.getVideoBytesTotal(),videoLoadedFraction:this.api.getVideoLoadedFraction(),playbackQuality:this.api.getPlaybackQuality(),availableQualityLevels:this.api.getAvailableQualityLevels(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getVideoUrl&&
(a.videoUrl=this.api.getVideoUrl());this.api.getVideoContentRect&&(a.videoContentRect=this.api.getVideoContentRect());this.api.getProgressState&&(a.progressState=this.api.getProgressState());this.api.getPlaylist&&(a.playlist=this.api.getPlaylist());this.api.getPlaylistIndex&&(a.playlistIndex=this.api.getPlaylistIndex());this.api.getStoryboardFormat&&(a.storyboardFormat=this.api.getStoryboardFormat());Lp(this,a)};
m.Xb=function(a){Lp(this,{playbackQuality:a})};
m.Yb=function(a){Lp(this,{playbackRate:a})};
m.Ub=function(){for(var a=this.api.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.api.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.api.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.cc=function(){Lp(this,{muted:this.api.isMuted(),volume:this.api.getVolume()})};
m.ac=function(a){a={currentTime:a,videoBytesLoaded:this.api.getVideoBytesLoaded(),videoLoadedFraction:this.api.getVideoLoadedFraction(),currentTimeLastUpdated_:Date.now()/1E3,playbackRate:this.api.getPlaybackRate(),mediaReferenceTime:this.api.getMediaReferenceTime()};this.api.getProgressState&&(a.progressState=this.api.getProgressState());Lp(this,a)};
m.dc=function(){var a={sphericalProperties:this.api.getSphericalProperties()};Lp(this,a)};
m.dispose=function(){Jp.prototype.dispose.call(this);for(var a=0;a<this.listeners.length;a++){var b=this.listeners[a];this.api.removeEventListener(b.eventType,b.listener)}this.listeners=[]};function Qp(a){J.call(this);this.i={};this.started=!1;this.connection=a;this.connection.subscribe("command",this.sb,this)}
v(Qp,J);m=Qp.prototype;m.start=function(){this.started||this.h()||(this.started=!0,this.connection.ja("RECEIVING"))};
m.ja=function(a,b){this.started&&!this.h()&&this.connection.ja(a,b)};
m.sb=function(a,b,c){if(this.started&&!this.h()){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&this.addListener(d.event);break;case "removeEventListener":"string"===typeof d.event&&this.removeListener(d.event);break;default:this.api.isReady()&&this.api.isExternalMethodAvailable(a,c||null)&&(b=Rp(a,b||{}),c=this.api.handleExternalCall(a,b,c||null),(c=Sp(a,c))&&this.ja(a,c))}}};
m.addListener=function(a){if(!(a in this.i)){var b=this.Vb.bind(this,a);this.i[a]=b;this.addEventListener(a,b)}};
m.Vb=function(a,b){this.started&&!this.h()&&this.connection.ja(a,this.Ma(a,b))};
m.Ma=function(a,b){if(null!=b)return{value:b}};
m.removeListener=function(a){a in this.i&&(this.removeEventListener(a,this.i[a]),delete this.i[a])};
m.D=function(){var a=this.connection;a.h()||$f(a.i,"command",this.sb,this);this.connection=null;for(var b in this.i)this.i.hasOwnProperty(b)&&this.removeListener(b);J.prototype.D.call(this)};function Tp(a,b){Qp.call(this,b);this.api=a;this.start()}
v(Tp,Qp);Tp.prototype.addEventListener=function(a,b){this.api.addEventListener(a,b)};
Tp.prototype.removeEventListener=function(a,b){this.api.removeEventListener(a,b)};
function Rp(a,b){switch(a){case "loadVideoById":return a=Np(b),[a];case "cueVideoById":return a=Np(b),[a];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return a=Op(b),[a];case "cuePlaylist":return a=Op(b),[a];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Sp(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Tp.prototype.Ma=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Qp.prototype.Ma.call(this,a,b)};
Tp.prototype.D=function(){Qp.prototype.D.call(this);delete this.api};function Up(a){a=void 0===a?!1:a;J.call(this);this.i=new L(a);$d(this,Wa(Yd,this.i))}
D(Up,J);Up.prototype.subscribe=function(a,b,c){return this.h()?0:this.i.subscribe(a,b,c)};
Up.prototype.l=function(a,b){this.h()||this.i.ha.apply(this.i,arguments)};function Vp(a,b,c){Up.call(this);this.j=a;this.destination=b;this.id=c}
v(Vp,Up);Vp.prototype.ja=function(a,b){this.h()||this.j.ja(this.destination,this.id,a,b)};
Vp.prototype.D=function(){this.destination=this.j=null;Up.prototype.D.call(this)};function Wp(a,b,c){J.call(this);this.destination=a;this.origin=c;this.i=yh(window,"message",this.j.bind(this));this.connection=new Vp(this,a,b);$d(this,Wa(Yd,this.connection))}
v(Wp,J);Wp.prototype.ja=function(a,b,c,d){this.h()||a!==this.destination||(a={id:b,command:c},d&&(a.data=d),this.destination.postMessage(Bf(a),this.origin))};
Wp.prototype.j=function(a){var b;if(b=!this.h())if(b=a.origin===this.origin)a:{b=this.destination;do{b:{var c=a.source;do{if(c===b){c=!0;break b}if(c===c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.connection,c.h()||c.l("command",b.command,b.data,a.origin))}};
Wp.prototype.D=function(){zh(this.i);this.destination=null;J.prototype.D.call(this)};function Xp(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||qb(b);this.assets=a.assets||{};this.attrs=a.attrs||qb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
Xp.prototype.clone=function(){var a=new Xp,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Ma(c)?a[b]=qb(c):a[b]=c}return a};var Yp=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function Zp(a){a=a||"";if(window.spf){var b=a.match(Yp);spf.style.load(a,b?b[1]:"",void 0)}else $p(a)}
function $p(a){var b=aq(a),c=document.getElementById(b),d=c&&dp(c,"loaded");d||c&&!d||(c=bq(a,b,function(){dp(c,"loaded")||(bp(c),Ji(b),Bh(Wa(Ki,b),0))}))}
function bq(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=zf(a);$b(d,a);(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function aq(a){var b=Ad(document,"A");yb("This URL is never added to the DOM");Zb(b,new Nb(a,Ob));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+dc(a)}
;function cq(){J.call(this);this.i=[]}
v(cq,J);cq.prototype.D=function(){for(;this.i.length;){var a=this.i.pop();a.target.removeEventListener(a.name,a.bb,void 0)}J.prototype.D.call(this)};function dq(){cq.apply(this,arguments)}
v(dq,cq);function eq(a,b,c,d){J.call(this);var e=this;this.I=b;this.webPlayerContextConfig=d;this.Ia=!1;this.api={};this.wa=this.u=null;this.N=new L;this.i={};this.aa=this.xa=this.elementId=this.Ja=this.config=null;this.S=!1;this.l=this.A=null;this.ya={};this.Ab=["onReady"];this.lastError=null;this.ab=NaN;this.H={};this.Bb=new dq(this);this.la=0;this.j=this.m=a;$d(this,Wa(Yd,this.N));fq(this);gq(this);$d(this,Wa(Yd,this.Bb));c?this.la=Bh(function(){e.loadNewVideoConfig(c)},0):d&&(hq(this),iq(this))}
v(eq,J);m=eq.prototype;m.getId=function(){return this.I};
m.loadNewVideoConfig=function(a){if(!this.h()){this.la&&(Ch(this.la),this.la=0);var b=a||{};b instanceof Xp||(b=new Xp(b));this.config=b;this.setConfig(a);iq(this);this.isReady()&&jq(this)}};
function hq(a){var b,c;a.webPlayerContextConfig?c=a.webPlayerContextConfig.rootElementId:c=a.config.attrs.id;a.elementId=c||a.elementId;"video-player"===a.elementId&&(a.elementId=a.I,a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.I:a.config.attrs.id=a.I);(null===(b=a.j)||void 0===b?void 0:b.id)===a.elementId&&(a.elementId+="-player",a.webPlayerContextConfig?a.webPlayerContextConfig.rootElementId=a.elementId:a.config.attrs.id=a.elementId)}
m.setConfig=function(a){var b;this.Ja=a;this.config=kq(a);hq(this);this.xa||(this.xa=lq(this,(null===(b=this.config.args)||void 0===b?void 0:b.jsapicallback)||"onYouTubePlayerReady"));this.config.args?this.config.args.jsapicallback=null:this.config.args={jsapicallback:null};var c;if(null===(c=this.config)||void 0===c?0:c.attrs)a=this.config.attrs,(c=a.width)&&this.j&&(this.j.style.width=Jd(Number(c)||c)),(a=a.height)&&this.j&&(this.j.style.height=Jd(Number(a)||a))};
function jq(a){var b;a.config&&!0!==a.config.loaded&&(a.config.loaded=!0,!a.config.args||"0"!==a.config.args.autoplay&&0!==a.config.args.autoplay&&!1!==a.config.args.autoplay?a.api.loadVideoByPlayerVars(null!==(b=a.config.args)&&void 0!==b?b:null):a.api.cueVideoByPlayerVars(a.config.args))}
function mq(a){var b=!0,c=nq(a);c&&a.config&&(a=oq(a),b=dp(c,"version")===a);return b&&!!C("yt.player.Application.create")}
function iq(a){if(!a.h()&&!a.S){var b=mq(a);if(b&&"html5"===(nq(a)?"html5":null))a.aa="html5",a.isReady()||pq(a);else if(qq(a),a.aa="html5",b&&a.l&&a.m)a.m.appendChild(a.l),pq(a);else{a.config&&(a.config.loaded=!0);var c=!1;a.A=function(){c=!0;var d=rq(a,"player_bootstrap_method")?C("yt.player.Application.createAlternate")||C("yt.player.Application.create"):C("yt.player.Application.create");var e=a.config?kq(a.config):void 0;d&&d(a.m,e,a.webPlayerContextConfig);pq(a)};
a.S=!0;b?a.A():(hp(oq(a),a.A),(b=sq(a))&&Zp(b),tq(a)&&!c&&B("yt.player.Application.create",null,void 0))}}}
function nq(a){var b=wd(a.elementId);!b&&a.j&&a.j.querySelector&&(b=a.j.querySelector("#"+a.elementId));return b}
function pq(a){var b;if(!a.h()){var c=nq(a),d=!1;c&&c.getApiInterface&&c.getApiInterface()&&(d=!0);d?(a.S=!1,!rq(a,"html5_remove_not_servable_check_killswitch")&&(null===c||void 0===c?0:c.isNotServable)&&a.config&&(null===c||void 0===c?0:c.isNotServable(null===(b=a.config.args)||void 0===b?void 0:b.video_id))||uq(a)):a.ab=Bh(function(){pq(a)},50)}}
function uq(a){fq(a);a.Ia=!0;var b=nq(a);if(b){a.u=vq(a,b,"addEventListener");a.wa=vq(a,b,"removeEventListener");var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=a.api,e=0;e<c.length;e++){var f=c[e];d[f]||(d[f]=vq(a,b,f))}}for(var g in a.i)a.i.hasOwnProperty(g)&&a.u&&a.u(g,a.i[g]);jq(a);a.xa&&a.xa(a.api);a.N.ha("onReady",a.api)}
function vq(a,b,c){var d=b[c];return function(){var e=Ea.apply(0,arguments);try{return a.lastError=null,d.apply(b,e)}catch(f){"sendAbandonmentPing"!==c&&(f.params=c,a.lastError=f,mn(f))}}}
function fq(a){a.Ia=!1;if(a.wa)for(var b in a.i)a.i.hasOwnProperty(b)&&a.wa(b,a.i[b]);for(var c in a.H)a.H.hasOwnProperty(c)&&Ch(Number(c));a.H={};a.u=null;a.wa=null;b=a.api;for(var d in b)b.hasOwnProperty(d)&&(b[d]=null);b.addEventListener=function(e,f){a.addEventListener(e,f)};
b.removeEventListener=function(e,f){a.removeEventListener(e,f)};
b.destroy=function(){a.dispose()};
b.getLastError=function(){return a.getLastError()};
b.getPlayerType=function(){return a.getPlayerType()};
b.getCurrentVideoConfig=function(){return a.Ja};
b.loadNewVideoConfig=function(e){a.loadNewVideoConfig(e)};
b.isReady=function(){return a.isReady()}}
m.isReady=function(){return this.Ia};
function gq(a){a.addEventListener("WATCH_LATER_VIDEO_ADDED",function(b){Ji("WATCH_LATER_VIDEO_ADDED",b)});
a.addEventListener("WATCH_LATER_VIDEO_REMOVED",function(b){Ji("WATCH_LATER_VIDEO_REMOVED",b)});
a.addEventListener("onAdAnnounce",function(b){Ji("a11y-announce",b)})}
m.addEventListener=function(a,b){var c=this,d=lq(this,b);d&&(0<=bb(this.Ab,a)||this.i[a]||(b=wq(this,a),this.u&&this.u(a,b)),this.N.subscribe(a,d),"onReady"===a&&this.isReady()&&Bh(function(){d(c.api)},0))};
m.removeEventListener=function(a,b){this.h()||(b=lq(this,b))&&$f(this.N,a,b)};
function lq(a,b){var c=b;if("string"===typeof b){if(a.ya[b])return a.ya[b];c=function(){var d=Ea.apply(0,arguments),e=C(b);if(e)try{e.apply(y,d)}catch(f){ln(f)}};
a.ya[b]=c}return c?c:null}
function wq(a,b){var c="ytPlayer"+b+a.I;a.i[b]=c;y[c]=function(d){var e=Bh(function(){if(!a.h()){a.N.ha(b,null!==d&&void 0!==d?d:void 0);var f=a.H,g=String(e);g in f&&delete f[g]}},0);
nb(a.H,String(e))};
return c}
m.getPlayerType=function(){return this.aa||(nq(this)?"html5":null)};
m.getLastError=function(){return this.lastError};
function qq(a){a.cancel();fq(a);a.aa=null;a.config&&(a.config.loaded=!1);var b=nq(a);b&&(mq(a)||!tq(a)?a.l=b:(b&&b.destroy&&b.destroy(),a.l=null));if(a.m)for(a=a.m;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.A&&np(oq(this),this.A);Ch(this.ab);this.S=!1};
m.D=function(){qq(this);if(this.l&&this.config&&this.l.destroy)try{this.l.destroy()}catch(b){ln(b)}this.ya=null;for(var a in this.i)this.i.hasOwnProperty(a)&&(y[this.i[a]]=null);this.Ja=this.config=this.api=null;delete this.m;delete this.j;J.prototype.D.call(this)};
function tq(a){var b,c;a=null===(c=null===(b=a.config)||void 0===b?void 0:b.args)||void 0===c?void 0:c.fflags;return!!a&&-1!==a.indexOf("player_destroy_old_version=true")}
function oq(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.jsUrl:(a=a.config.assets)?a.js:""}
function sq(a){return a.webPlayerContextConfig?a.webPlayerContextConfig.cssUrl:(a=a.config.assets)?a.css:""}
function rq(a,b){var c;if(a.webPlayerContextConfig)var d=a.webPlayerContextConfig.serializedExperimentFlags;else if(null===(c=a.config)||void 0===c?0:c.args)d=a.config.args.fflags;return"true"===Vh(d||"","&")[b]}
function kq(a){for(var b={},c=t(Object.keys(a)),d=c.next();!d.done;d=c.next()){d=d.value;var e=a[d];b[d]="object"===typeof e?qb(e):e}return b}
;var xq={},yq="player_uid_"+(1E9*Math.random()>>>0);function zq(a,b,c){var d="player";c=void 0===c?!0:c;d="string"===typeof d?wd(d):d;var e=yq+"_"+Pa(d),f=xq[e];if(f&&c)return Aq(a,b)?f.api.loadVideoByPlayerVars(a.args||null):f.loadNewVideoConfig(a),f.api;f=new eq(d,e,a,b);xq[e]=f;Ji("player-added",f.api);$d(f,function(){delete xq[f.getId()]});
return f.api}
function Aq(a,b){return b&&b.serializedExperimentFlags?b.serializedExperimentFlags.includes("web_player_remove_playerproxy=true"):a&&a.args&&a.args.fflags?a.args.fflags.includes("web_player_remove_playerproxy=true"):!1}
;var Bq=null,Cq=null,Dq=null;function Eq(){var a=Bq.getVideoData(1);a=a.title?a.title+" - YouTube":"YouTube";document.title!==a&&(document.title=a)}
;function Fq(a,b,c){a="ST-"+dc(a).toString(36);b=b?ic(b):"";c=c||5;wn()&&xj(a,b,c)}
;function Gq(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=F("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=F("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=gc(window.location.href);g&&f.push(g);g=gc(d);if(0<=bb(f,g)||!g&&0==d.lastIndexOf("/",0))if(M("autoescape_tempdata_url")&&(f=document.createElement("a"),Zb(f,d),d=f.href),d){g=d.match(ec);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||b.ved)&&
(b=Object.assign({csn:Rn()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&Fq(d,b,k)}else Fq(d,b)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=jc(a,l)+n;var u=void 0===u?rd:u;a:{u=void 0===u?rd:u;for(l=0;l<u.length;++l)if(n=u[l],n instanceof pd&&n.isValid(a)){u=new nd(a,ld);break a}u=void 0}c.href=sd(u||od)}return!0}
;B("yt.setConfig",dh,void 0);B("yt.config.set",dh,void 0);B("yt.setMsg",kh,void 0);B("yt.msgs.set",kh,void 0);B("yt.logging.errors.log",ln,void 0);
B("writeEmbed",function(){var a=F("PLAYER_CONFIG",void 0);if(!a){var b=F("PLAYER_VARS",void 0);b&&(a={args:b})}En(!0);"gvn"===a.args.ps&&(document.body.style.backgroundColor="transparent");a.attrs||(a.attrs={width:"100%",height:"100%",id:"video-player"});var c=document.referrer;b=F("POST_MESSAGE_ORIGIN");window!==window.top&&c&&c!==document.URL&&(a.args.loaderUrl=c);M("embeds_js_api_set_1p_cookie")&&(c=$h(),c.embedsTokenValue&&(a.args.embedsTokenValue=c.embedsTokenValue));c=["ol"];Ao("").info.actionType=
"embed";c&&dh("TIMING_AFT_KEYS",c);dh("TIMING_ACTION","embed");c=F("TIMING_INFO",{});for(var d in c)c.hasOwnProperty(d)&&Ro(d,c[d]);Ro("is_nav",1);(d=Rn())&&Ro("csn",d);d=vo();c=F("CLIENT_PROTOCOL");var e=F("CLIENT_TRANSPORT");c&&Ro("p",c);e&&Ro("t",e);Ro("yt_vis",To());Ro("yt_lt","cold");c=qo();if(e=to())Z("srt",c.responseStart),1!==d.prerender&&(Ro("yt_sts","n",void 0),Z("_start",e,void 0));d=yo();0<d&&Z("fpt",d);d=qo();d.isPerformanceNavigationTiming&&Ro("pnt",1,void 0);Z("nreqs",d.requestStart,
void 0);Z("nress",d.responseStart,void 0);Z("nrese",d.responseEnd,void 0);0<d.redirectEnd-d.redirectStart&&(Z("nrs",d.redirectStart,void 0),Z("nre",d.redirectEnd,void 0));0<d.domainLookupEnd-d.domainLookupStart&&(Z("ndnss",d.domainLookupStart,void 0),Z("ndnse",d.domainLookupEnd,void 0));0<d.connectEnd-d.connectStart&&(Z("ntcps",d.connectStart,void 0),Z("ntcpe",d.connectEnd,void 0));d.secureConnectionStart>=to()&&0<d.connectEnd-d.secureConnectionStart&&(Z("nstcps",d.secureConnectionStart,void 0),Z("ntcpe",
d.connectEnd,void 0));W&&W.getEntriesByType&&Vo();d=[];if(document.querySelector&&W&&W.getEntriesByName)for(var f in no)no.hasOwnProperty(f)&&(c=no[f],Uo(f,c)&&d.push(c));for(f=0;f<d.length;f++)Ro("rc",d[f]);f={actionType:Ho[F("TIMING_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN",previousAction:Ho[F("PREVIOUS_ACTION",void 0)]||"LATENCY_ACTION_UNKNOWN"};if(d=Rn())f.clientScreenNonce=d;d=wo(void 0);c=uo(void 0).cttAuthInfo;Fo().info(f,d,c);f=vo();c=po();if("cold"===f.yt_lt){d=Oo();e=d.gelTicks?d.gelTicks:
d.gelTicks={};d=d.gelInfos?d.gelInfos:d.gelInfos={};for(var g in c)"tick_"+g in e||No(g,c[g]);g=Qo();c=wo();e=uo().cttAuthInfo;var h={},k=!1;for(n in f)if(!("info_"+n in d)){var l=Po(n,f[n]);l&&(co(g,l),co(h,l),k=!0)}k&&Fo().info(h,c,e)}B("ytglobal.timingready_",!0,void 0);var n=F("TIMING_ACTION",void 0);if(n=!!C("ytglobal.timingready_")&&n)n="_start"in po(void 0);n&&oo()&&xo();(n=F("WEB_PLAYER_CONTEXT_CONFIGS",void 0))&&"WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER"in n?(n=n.WEB_PLAYER_CONTEXT_CONFIG_ID_EMBEDDED_PLAYER,
n.serializedForcedExperimentIds||(g=$h(),g.forced_experiments&&(n.serializedForcedExperimentIds=g.forced_experiments)),Bq=zq(a,n,!1)):Bq=zq(a);Bq.addEventListener("onVideoDataChange",Eq);a=F("POST_MESSAGE_ID","player");F("ENABLE_JS_API")?Dq=new Pp(Bq):F("ENABLE_POST_API")&&"string"===typeof a&&"string"===typeof b&&(Cq=new Wp(window.parent,a,b),Dq=new Tp(Bq,Cq.connection));qp();if(!M("ytidb_create_logger_embed_killswitch"))for(a={},Zj=new Bp(void 0===a.handleError?kn:a.handleError,void 0===a.logEvent?
V:a.logEvent);0<Yj.length;)switch(a=Yj.shift(),a.type){case "ERROR":Zj.handleError(a.payload);break;case "EVENT":Zj.logEvent(a.eventType,a.payload)}M("networkless_logging_web_embedded")&&(M("embeds_web_enable_new_nwl")?wm():Dm());M("embeds_enable_ua_ch_polyfill")&&Hp()},void 0);
var Hq=gh(function(){So();var a=zj.getInstance(),b=!!((Cj("f"+(Math.floor(119/31)+1))||0)&67108864),c=1<window.devicePixelRatio;if(document.body&&hf(document.body,"exp-invert-logo"))if(c&&!hf(document.body,"inverted-hdpi")){var d=document.body;if(d.classList)d.classList.add("inverted-hdpi");else if(!hf(d,"inverted-hdpi")){var e=ff(d);gf(d,e+(0<e.length?" inverted-hdpi":"inverted-hdpi"))}}else!c&&hf(document.body,"inverted-hdpi")&&jf();if(b!=c){b="f"+(Math.floor(119/31)+1);d=Cj(b)||0;d=c?d|67108864:
d&-67108865;0==d?delete yj[b]:(c=d.toString(16),yj[b]=c.toString());c=!0;M("web_secure_pref_cookie_killswitch")&&(c=!1);b=a.h;d=[];for(var f in yj)d.push(f+"="+encodeURIComponent(String(yj[f])));xj(b,d.join("&"),63072E3,a.i,c)}Xo.h||(Xo.h=new Xo);a=Xo.h;f=16623;var g=void 0===g?{}:g;Object.values(on).includes(f)||(mn(new dk("createClientScreen() called with a non-page VE",f)),f=83769);g.isHistoryNavigation||a.h.push({rootVe:f,key:g.key||""});a.s=[];a.C=[];g.hb?$o(a,f,g):ap(a,f,g)}),Iq=gh(function(){Bq&&
Bq.sendAbandonmentPing&&Bq.sendAbandonmentPing();
F("PL_ATT")&&wp.dispose();for(var a=0,b=op.length;a<b;a++)Kh.ca(op[a]);op.length=0;mp("//static.doubleclick.net/instream/ad_status.js");pp=!1;dh("DCLKSTAT",0);(0,Zd)(Dq,Cq);Bq&&(Bq.removeEventListener("onVideoDataChange",Eq),Bq.destroy())});
window.addEventListener?(window.addEventListener("load",Hq),window.addEventListener("unload",Iq)):window.attachEvent&&(window.attachEvent("onload",Hq),window.attachEvent("onunload",Iq));Xa("yt.abuse.player.botguardInitialized",C("yt.abuse.player.botguardInitialized")||xp);Xa("yt.abuse.player.invokeBotguard",C("yt.abuse.player.invokeBotguard")||yp);Xa("yt.abuse.dclkstatus.checkDclkStatus",C("yt.abuse.dclkstatus.checkDclkStatus")||rp);
Xa("yt.player.exports.navigate",C("yt.player.exports.navigate")||Gq);Xa("yt.util.activity.init",C("yt.util.activity.init")||Mh);Xa("yt.util.activity.getTimeSinceActive",C("yt.util.activity.getTimeSinceActive")||Ph);Xa("yt.util.activity.setTimestamp",C("yt.util.activity.setTimestamp")||Nh);}).call(this);
