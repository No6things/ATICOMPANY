/*!
 * jQuery JavaScript Library v2.1.1
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-05-01T17:11Z
 */

!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){function c(a){var b=a.length,c=_.type(a);return"function"===c||_.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}function d(a,b,c){if(_.isFunction(b))return _.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return _.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(hb.test(b))return _.filter(b,a,c);b=_.filter(b,a)}return _.grep(a,function(a){return U.call(b,a)>=0!==c})}function e(a,b){for(;(a=a[b])&&1!==a.nodeType;);return a}function f(a){var b=ob[a]={};return _.each(a.match(nb)||[],function(a,c){b[c]=!0}),b}function g(){Z.removeEventListener("DOMContentLoaded",g,!1),a.removeEventListener("load",g,!1),_.ready()}function h(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=_.expando+Math.random()}function i(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(ub,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:tb.test(c)?_.parseJSON(c):c}catch(e){}sb.set(a,b,c)}else c=void 0;return c}function j(){return!0}function k(){return!1}function l(){try{return Z.activeElement}catch(a){}}function m(a,b){return _.nodeName(a,"table")&&_.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function n(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function o(a){var b=Kb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function p(a,b){for(var c=0,d=a.length;d>c;c++)rb.set(a[c],"globalEval",!b||rb.get(b[c],"globalEval"))}function q(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(rb.hasData(a)&&(f=rb.access(a),g=rb.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)_.event.add(b,e,j[e][c])}sb.hasData(a)&&(h=sb.access(a),i=_.extend({},h),sb.set(b,i))}}function r(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&_.nodeName(a,b)?_.merge([a],c):c}function s(a,b){var c=b.nodeName.toLowerCase();"input"===c&&yb.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}function t(b,c){var d,e=_(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:_.css(e[0],"display");return e.detach(),f}function u(a){var b=Z,c=Ob[a];return c||(c=t(a,b),"none"!==c&&c||(Nb=(Nb||_("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=Nb[0].contentDocument,b.write(),b.close(),c=t(a,b),Nb.detach()),Ob[a]=c),c}function v(a,b,c){var d,e,f,g,h=a.style;return c=c||Rb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||_.contains(a.ownerDocument,a)||(g=_.style(a,b)),Qb.test(g)&&Pb.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function w(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}function x(a,b){if(b in a)return b;for(var c=b[0].toUpperCase()+b.slice(1),d=b,e=Xb.length;e--;)if(b=Xb[e]+c,b in a)return b;return d}function y(a,b,c){var d=Tb.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function z(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=_.css(a,c+wb[f],!0,e)),d?("content"===c&&(g-=_.css(a,"padding"+wb[f],!0,e)),"margin"!==c&&(g-=_.css(a,"border"+wb[f]+"Width",!0,e))):(g+=_.css(a,"padding"+wb[f],!0,e),"padding"!==c&&(g+=_.css(a,"border"+wb[f]+"Width",!0,e)));return g}function A(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Rb(a),g="border-box"===_.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=v(a,b,f),(0>e||null==e)&&(e=a.style[b]),Qb.test(e))return e;d=g&&(Y.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+z(a,b,c||(g?"border":"content"),d,f)+"px"}function B(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=rb.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&xb(d)&&(f[g]=rb.access(d,"olddisplay",u(d.nodeName)))):(e=xb(d),"none"===c&&e||rb.set(d,"olddisplay",e?c:_.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}function C(a,b,c,d,e){return new C.prototype.init(a,b,c,d,e)}function D(){return setTimeout(function(){Yb=void 0}),Yb=_.now()}function E(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=wb[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function F(a,b,c){for(var d,e=(cc[b]||[]).concat(cc["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function G(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},n=a.style,o=a.nodeType&&xb(a),p=rb.get(a,"fxshow");c.queue||(h=_._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,_.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[n.overflow,n.overflowX,n.overflowY],j=_.css(a,"display"),k="none"===j?rb.get(a,"olddisplay")||u(a.nodeName):j,"inline"===k&&"none"===_.css(a,"float")&&(n.display="inline-block")),c.overflow&&(n.overflow="hidden",l.always(function(){n.overflow=c.overflow[0],n.overflowX=c.overflow[1],n.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],$b.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(o?"hide":"show")){if("show"!==e||!p||void 0===p[d])continue;o=!0}m[d]=p&&p[d]||_.style(a,d)}else j=void 0;if(_.isEmptyObject(m))"inline"===("none"===j?u(a.nodeName):j)&&(n.display=j);else{p?"hidden"in p&&(o=p.hidden):p=rb.access(a,"fxshow",{}),f&&(p.hidden=!o),o?_(a).show():l.done(function(){_(a).hide()}),l.done(function(){var b;rb.remove(a,"fxshow");for(b in m)_.style(a,b,m[b])});for(d in m)g=F(o?p[d]:0,d,l),d in p||(p[d]=g.start,o&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function H(a,b){var c,d,e,f,g;for(c in a)if(d=_.camelCase(c),e=b[d],f=a[c],_.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=_.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function I(a,b,c){var d,e,f=0,g=bc.length,h=_.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Yb||D(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:_.extend({},b),opts:_.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Yb||D(),duration:c.duration,tweens:[],createTween:function(b,c){var d=_.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(H(k,j.opts.specialEasing);g>f;f++)if(d=bc[f].call(j,a,k,j.opts))return d;return _.map(k,F,j),_.isFunction(j.opts.start)&&j.opts.start.call(a,j),_.fx.timer(_.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}function J(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(nb)||[];if(_.isFunction(c))for(;d=f[e++];)"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function K(a,b,c,d){function e(h){var i;return f[h]=!0,_.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||g||f[j]?g?!(i=j):void 0:(b.dataTypes.unshift(j),e(j),!1)}),i}var f={},g=a===vc;return e(b.dataTypes[0])||!f["*"]&&e("*")}function L(a,b){var c,d,e=_.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&_.extend(!0,a,d),a}function M(a,b,c){for(var d,e,f,g,h=a.contents,i=a.dataTypes;"*"===i[0];)i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function N(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];for(f=k.shift();f;)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}function O(a,b,c,d){var e;if(_.isArray(b))_.each(b,function(b,e){c||zc.test(a)?d(a,e):O(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==_.type(b))d(a,b);else for(e in b)O(a+"["+e+"]",b[e],c,d)}function P(a){return _.isWindow(a)?a:9===a.nodeType&&a.defaultView}var Q=[],R=Q.slice,S=Q.concat,T=Q.push,U=Q.indexOf,V={},W=V.toString,X=V.hasOwnProperty,Y={},Z=a.document,$="2.1.1",_=function(a,b){return new _.fn.init(a,b)},ab=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,bb=/^-ms-/,cb=/-([\da-z])/gi,db=function(a,b){return b.toUpperCase()};_.fn=_.prototype={jquery:$,constructor:_,selector:"",length:0,toArray:function(){return R.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:R.call(this)},pushStack:function(a){var b=_.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return _.each(this,a,b)},map:function(a){return this.pushStack(_.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(R.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:T,sort:Q.sort,splice:Q.splice},_.extend=_.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||_.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(_.isPlainObject(d)||(e=_.isArray(d)))?(e?(e=!1,f=c&&_.isArray(c)?c:[]):f=c&&_.isPlainObject(c)?c:{},g[b]=_.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},_.extend({expando:"jQuery"+($+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===_.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!_.isArray(a)&&a-parseFloat(a)>=0},isPlainObject:function(a){return"object"!==_.type(a)||a.nodeType||_.isWindow(a)?!1:a.constructor&&!X.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?V[W.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=_.trim(a),a&&(1===a.indexOf("use strict")?(b=Z.createElement("script"),b.text=a,Z.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(bb,"ms-").replace(cb,db)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,d){var e,f=0,g=a.length,h=c(a);if(d){if(h)for(;g>f&&(e=b.apply(a[f],d),e!==!1);f++);else for(f in a)if(e=b.apply(a[f],d),e===!1)break}else if(h)for(;g>f&&(e=b.call(a[f],f,a[f]),e!==!1);f++);else for(f in a)if(e=b.call(a[f],f,a[f]),e===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(ab,"")},makeArray:function(a,b){var d=b||[];return null!=a&&(c(Object(a))?_.merge(d,"string"==typeof a?[a]:a):T.call(d,a)),d},inArray:function(a,b,c){return null==b?-1:U.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,d){var e,f=0,g=a.length,h=c(a),i=[];if(h)for(;g>f;f++)e=b(a[f],f,d),null!=e&&i.push(e);else for(f in a)e=b(a[f],f,d),null!=e&&i.push(e);return S.apply([],i)},guid:1,proxy:function(a,b){var c,d,e;return"string"==typeof b&&(c=a[b],b=a,a=c),_.isFunction(a)?(d=R.call(arguments,2),e=function(){return a.apply(b||this,d.concat(R.call(arguments)))},e.guid=a.guid=a.guid||_.guid++,e):void 0},now:Date.now,support:Y}),_.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){V["[object "+b+"]"]=b.toLowerCase()});var eb=/*!
 * Sizzle CSS Selector Engine v1.10.19
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-04-18
 */
function(a){function b(a,b,c,d){var e,f,g,h,i,j,l,n,o,p;if((b?b.ownerDocument||b:O)!==G&&F(b),b=b||G,c=c||[],!a||"string"!=typeof a)return c;if(1!==(h=b.nodeType)&&9!==h)return[];if(I&&!d){if(e=sb.exec(a))if(g=e[1]){if(9===h){if(f=b.getElementById(g),!f||!f.parentNode)return c;if(f.id===g)return c.push(f),c}else if(b.ownerDocument&&(f=b.ownerDocument.getElementById(g))&&M(b,f)&&f.id===g)return c.push(f),c}else{if(e[2])return _.apply(c,b.getElementsByTagName(a)),c;if((g=e[3])&&v.getElementsByClassName&&b.getElementsByClassName)return _.apply(c,b.getElementsByClassName(g)),c}if(v.qsa&&(!J||!J.test(a))){if(n=l=N,o=b,p=9===h&&a,1===h&&"object"!==b.nodeName.toLowerCase()){for(j=z(a),(l=b.getAttribute("id"))?n=l.replace(ub,"\\$&"):b.setAttribute("id",n),n="[id='"+n+"'] ",i=j.length;i--;)j[i]=n+m(j[i]);o=tb.test(a)&&k(b.parentNode)||b,p=j.join(",")}if(p)try{return _.apply(c,o.querySelectorAll(p)),c}catch(q){}finally{l||b.removeAttribute("id")}}}return B(a.replace(ib,"$1"),b,c,d)}function c(){function a(c,d){return b.push(c+" ")>w.cacheLength&&delete a[b.shift()],a[c+" "]=d}var b=[];return a}function d(a){return a[N]=!0,a}function e(a){var b=G.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function f(a,b){for(var c=a.split("|"),d=a.length;d--;)w.attrHandle[c[d]]=b}function g(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||W)-(~a.sourceIndex||W);if(d)return d;if(c)for(;c=c.nextSibling;)if(c===b)return-1;return a?1:-1}function h(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function i(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function j(a){return d(function(b){return b=+b,d(function(c,d){for(var e,f=a([],c.length,b),g=f.length;g--;)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function k(a){return a&&typeof a.getElementsByTagName!==V&&a}function l(){}function m(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function n(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=Q++;return b.first?function(b,c,f){for(;b=b[d];)if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[P,f];if(g){for(;b=b[d];)if((1===b.nodeType||e)&&a(b,c,g))return!0}else for(;b=b[d];)if(1===b.nodeType||e){if(i=b[N]||(b[N]={}),(h=i[d])&&h[0]===P&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function o(a){return a.length>1?function(b,c,d){for(var e=a.length;e--;)if(!a[e](b,c,d))return!1;return!0}:a[0]}function p(a,c,d){for(var e=0,f=c.length;f>e;e++)b(a,c[e],d);return d}function q(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function r(a,b,c,e,f,g){return e&&!e[N]&&(e=r(e)),f&&!f[N]&&(f=r(f,g)),d(function(d,g,h,i){var j,k,l,m=[],n=[],o=g.length,r=d||p(b||"*",h.nodeType?[h]:h,[]),s=!a||!d&&b?r:q(r,m,a,h,i),t=c?f||(d?a:o||e)?[]:g:s;if(c&&c(s,t,h,i),e)for(j=q(t,n),e(j,[],h,i),k=j.length;k--;)(l=j[k])&&(t[n[k]]=!(s[n[k]]=l));if(d){if(f||a){if(f){for(j=[],k=t.length;k--;)(l=t[k])&&j.push(s[k]=l);f(null,t=[],j,i)}for(k=t.length;k--;)(l=t[k])&&(j=f?bb.call(d,l):m[k])>-1&&(d[j]=!(g[j]=l))}}else t=q(t===g?t.splice(o,t.length):t),f?f(null,g,t,i):_.apply(g,t)})}function s(a){for(var b,c,d,e=a.length,f=w.relative[a[0].type],g=f||w.relative[" "],h=f?1:0,i=n(function(a){return a===b},g,!0),j=n(function(a){return bb.call(b,a)>-1},g,!0),k=[function(a,c,d){return!f&&(d||c!==C)||((b=c).nodeType?i(a,c,d):j(a,c,d))}];e>h;h++)if(c=w.relative[a[h].type])k=[n(o(k),c)];else{if(c=w.filter[a[h].type].apply(null,a[h].matches),c[N]){for(d=++h;e>d&&!w.relative[a[d].type];d++);return r(h>1&&o(k),h>1&&m(a.slice(0,h-1).concat({value:" "===a[h-2].type?"*":""})).replace(ib,"$1"),c,d>h&&s(a.slice(h,d)),e>d&&s(a=a.slice(d)),e>d&&m(a))}k.push(c)}return o(k)}function t(a,c){var e=c.length>0,f=a.length>0,g=function(d,g,h,i,j){var k,l,m,n=0,o="0",p=d&&[],r=[],s=C,t=d||f&&w.find.TAG("*",j),u=P+=null==s?1:Math.random()||.1,v=t.length;for(j&&(C=g!==G&&g);o!==v&&null!=(k=t[o]);o++){if(f&&k){for(l=0;m=a[l++];)if(m(k,g,h)){i.push(k);break}j&&(P=u)}e&&((k=!m&&k)&&n--,d&&p.push(k))}if(n+=o,e&&o!==n){for(l=0;m=c[l++];)m(p,r,g,h);if(d){if(n>0)for(;o--;)p[o]||r[o]||(r[o]=Z.call(i));r=q(r)}_.apply(i,r),j&&!d&&r.length>0&&n+c.length>1&&b.uniqueSort(i)}return j&&(P=u,C=s),p};return e?d(g):g}var u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N="sizzle"+-new Date,O=a.document,P=0,Q=0,R=c(),S=c(),T=c(),U=function(a,b){return a===b&&(E=!0),0},V="undefined",W=1<<31,X={}.hasOwnProperty,Y=[],Z=Y.pop,$=Y.push,_=Y.push,ab=Y.slice,bb=Y.indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]===a)return b;return-1},cb="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",db="[\\x20\\t\\r\\n\\f]",eb="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",fb=eb.replace("w","w#"),gb="\\["+db+"*("+eb+")(?:"+db+"*([*^$|!~]?=)"+db+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+fb+"))|)"+db+"*\\]",hb=":("+eb+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+gb+")*)|.*)\\)|)",ib=new RegExp("^"+db+"+|((?:^|[^\\\\])(?:\\\\.)*)"+db+"+$","g"),jb=new RegExp("^"+db+"*,"+db+"*"),kb=new RegExp("^"+db+"*([>+~]|"+db+")"+db+"*"),lb=new RegExp("="+db+"*([^\\]'\"]*?)"+db+"*\\]","g"),mb=new RegExp(hb),nb=new RegExp("^"+fb+"$"),ob={ID:new RegExp("^#("+eb+")"),CLASS:new RegExp("^\\.("+eb+")"),TAG:new RegExp("^("+eb.replace("w","w*")+")"),ATTR:new RegExp("^"+gb),PSEUDO:new RegExp("^"+hb),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+db+"*(even|odd|(([+-]|)(\\d*)n|)"+db+"*(?:([+-]|)"+db+"*(\\d+)|))"+db+"*\\)|)","i"),bool:new RegExp("^(?:"+cb+")$","i"),needsContext:new RegExp("^"+db+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+db+"*((?:-\\d)?\\d*)"+db+"*\\)|)(?=[^-]|$)","i")},pb=/^(?:input|select|textarea|button)$/i,qb=/^h\d$/i,rb=/^[^{]+\{\s*\[native \w/,sb=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,tb=/[+~]/,ub=/'|\\/g,vb=new RegExp("\\\\([\\da-f]{1,6}"+db+"?|("+db+")|.)","ig"),wb=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)};try{_.apply(Y=ab.call(O.childNodes),O.childNodes),Y[O.childNodes.length].nodeType}catch(xb){_={apply:Y.length?function(a,b){$.apply(a,ab.call(b))}:function(a,b){for(var c=a.length,d=0;a[c++]=b[d++];);a.length=c-1}}}v=b.support={},y=b.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},F=b.setDocument=function(a){var b,c=a?a.ownerDocument||a:O,d=c.defaultView;return c!==G&&9===c.nodeType&&c.documentElement?(G=c,H=c.documentElement,I=!y(c),d&&d!==d.top&&(d.addEventListener?d.addEventListener("unload",function(){F()},!1):d.attachEvent&&d.attachEvent("onunload",function(){F()})),v.attributes=e(function(a){return a.className="i",!a.getAttribute("className")}),v.getElementsByTagName=e(function(a){return a.appendChild(c.createComment("")),!a.getElementsByTagName("*").length}),v.getElementsByClassName=rb.test(c.getElementsByClassName)&&e(function(a){return a.innerHTML="<div class='a'></div><div class='a i'></div>",a.firstChild.className="i",2===a.getElementsByClassName("i").length}),v.getById=e(function(a){return H.appendChild(a).id=N,!c.getElementsByName||!c.getElementsByName(N).length}),v.getById?(w.find.ID=function(a,b){if(typeof b.getElementById!==V&&I){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){return a.getAttribute("id")===b}}):(delete w.find.ID,w.filter.ID=function(a){var b=a.replace(vb,wb);return function(a){var c=typeof a.getAttributeNode!==V&&a.getAttributeNode("id");return c&&c.value===b}}),w.find.TAG=v.getElementsByTagName?function(a,b){return typeof b.getElementsByTagName!==V?b.getElementsByTagName(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){for(;c=f[e++];)1===c.nodeType&&d.push(c);return d}return f},w.find.CLASS=v.getElementsByClassName&&function(a,b){return typeof b.getElementsByClassName!==V&&I?b.getElementsByClassName(a):void 0},K=[],J=[],(v.qsa=rb.test(c.querySelectorAll))&&(e(function(a){a.innerHTML="<select msallowclip=''><option selected=''></option></select>",a.querySelectorAll("[msallowclip^='']").length&&J.push("[*^$]="+db+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||J.push("\\["+db+"*(?:value|"+cb+")"),a.querySelectorAll(":checked").length||J.push(":checked")}),e(function(a){var b=c.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&J.push("name"+db+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||J.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),J.push(",.*:")})),(v.matchesSelector=rb.test(L=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&e(function(a){v.disconnectedMatch=L.call(a,"div"),L.call(a,"[s!='']:x"),K.push("!=",hb)}),J=J.length&&new RegExp(J.join("|")),K=K.length&&new RegExp(K.join("|")),b=rb.test(H.compareDocumentPosition),M=b||rb.test(H.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)for(;b=b.parentNode;)if(b===a)return!0;return!1},U=b?function(a,b){if(a===b)return E=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!v.sortDetached&&b.compareDocumentPosition(a)===d?a===c||a.ownerDocument===O&&M(O,a)?-1:b===c||b.ownerDocument===O&&M(O,b)?1:D?bb.call(D,a)-bb.call(D,b):0:4&d?-1:1)}:function(a,b){if(a===b)return E=!0,0;var d,e=0,f=a.parentNode,h=b.parentNode,i=[a],j=[b];if(!f||!h)return a===c?-1:b===c?1:f?-1:h?1:D?bb.call(D,a)-bb.call(D,b):0;if(f===h)return g(a,b);for(d=a;d=d.parentNode;)i.unshift(d);for(d=b;d=d.parentNode;)j.unshift(d);for(;i[e]===j[e];)e++;return e?g(i[e],j[e]):i[e]===O?-1:j[e]===O?1:0},c):G},b.matches=function(a,c){return b(a,null,null,c)},b.matchesSelector=function(a,c){if((a.ownerDocument||a)!==G&&F(a),c=c.replace(lb,"='$1']"),!(!v.matchesSelector||!I||K&&K.test(c)||J&&J.test(c)))try{var d=L.call(a,c);if(d||v.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return b(c,G,null,[a]).length>0},b.contains=function(a,b){return(a.ownerDocument||a)!==G&&F(a),M(a,b)},b.attr=function(a,b){(a.ownerDocument||a)!==G&&F(a);var c=w.attrHandle[b.toLowerCase()],d=c&&X.call(w.attrHandle,b.toLowerCase())?c(a,b,!I):void 0;return void 0!==d?d:v.attributes||!I?a.getAttribute(b):(d=a.getAttributeNode(b))&&d.specified?d.value:null},b.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},b.uniqueSort=function(a){var b,c=[],d=0,e=0;if(E=!v.detectDuplicates,D=!v.sortStable&&a.slice(0),a.sort(U),E){for(;b=a[e++];)b===a[e]&&(d=c.push(e));for(;d--;)a.splice(c[d],1)}return D=null,a},x=b.getText=function(a){var b,c="",d=0,e=a.nodeType;if(e){if(1===e||9===e||11===e){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=x(a)}else if(3===e||4===e)return a.nodeValue}else for(;b=a[d++];)c+=x(b);return c},w=b.selectors={cacheLength:50,createPseudo:d,match:ob,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(vb,wb),a[3]=(a[3]||a[4]||a[5]||"").replace(vb,wb),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||b.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&b.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return ob.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&mb.test(c)&&(b=z(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(vb,wb).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=R[a+" "];return b||(b=new RegExp("(^|"+db+")"+a+"("+db+"|$)"))&&R(a,function(a){return b.test("string"==typeof a.className&&a.className||typeof a.getAttribute!==V&&a.getAttribute("class")||"")})},ATTR:function(a,c,d){return function(e){var f=b.attr(e,a);return null==f?"!="===c:c?(f+="","="===c?f===d:"!="===c?f!==d:"^="===c?d&&0===f.indexOf(d):"*="===c?d&&f.indexOf(d)>-1:"$="===c?d&&f.slice(-d.length)===d:"~="===c?(" "+f+" ").indexOf(d)>-1:"|="===c?f===d||f.slice(0,d.length+1)===d+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){for(;p;){for(l=b;l=l[p];)if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){for(k=q[N]||(q[N]={}),j=k[a]||[],n=j[0]===P&&j[1],m=j[0]===P&&j[2],l=n&&q.childNodes[n];l=++n&&l&&l[p]||(m=n=0)||o.pop();)if(1===l.nodeType&&++m&&l===b){k[a]=[P,n,m];break}}else if(s&&(j=(b[N]||(b[N]={}))[a])&&j[0]===P)m=j[1];else for(;(l=++n&&l&&l[p]||(m=n=0)||o.pop())&&((h?l.nodeName.toLowerCase()!==r:1!==l.nodeType)||!++m||(s&&((l[N]||(l[N]={}))[a]=[P,m]),l!==b)););return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,c){var e,f=w.pseudos[a]||w.setFilters[a.toLowerCase()]||b.error("unsupported pseudo: "+a);return f[N]?f(c):f.length>1?(e=[a,a,"",c],w.setFilters.hasOwnProperty(a.toLowerCase())?d(function(a,b){for(var d,e=f(a,c),g=e.length;g--;)d=bb.call(a,e[g]),a[d]=!(b[d]=e[g])}):function(a){return f(a,0,e)}):f}},pseudos:{not:d(function(a){var b=[],c=[],e=A(a.replace(ib,"$1"));return e[N]?d(function(a,b,c,d){for(var f,g=e(a,null,d,[]),h=a.length;h--;)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,d,f){return b[0]=a,e(b,null,f,c),!c.pop()}}),has:d(function(a){return function(c){return b(a,c).length>0}}),contains:d(function(a){return function(b){return(b.textContent||b.innerText||x(b)).indexOf(a)>-1}}),lang:d(function(a){return nb.test(a||"")||b.error("unsupported lang: "+a),a=a.replace(vb,wb).toLowerCase(),function(b){var c;do if(c=I?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===H},focus:function(a){return a===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!w.pseudos.empty(a)},header:function(a){return qb.test(a.nodeName)},input:function(a){return pb.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:j(function(){return[0]}),last:j(function(a,b){return[b-1]}),eq:j(function(a,b,c){return[0>c?c+b:c]}),even:j(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:j(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:j(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:j(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},w.pseudos.nth=w.pseudos.eq;for(u in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})w.pseudos[u]=h(u);for(u in{submit:!0,reset:!0})w.pseudos[u]=i(u);return l.prototype=w.filters=w.pseudos,w.setFilters=new l,z=b.tokenize=function(a,c){var d,e,f,g,h,i,j,k=S[a+" "];if(k)return c?0:k.slice(0);for(h=a,i=[],j=w.preFilter;h;){(!d||(e=jb.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),d=!1,(e=kb.exec(h))&&(d=e.shift(),f.push({value:d,type:e[0].replace(ib," ")}),h=h.slice(d.length));for(g in w.filter)!(e=ob[g].exec(h))||j[g]&&!(e=j[g](e))||(d=e.shift(),f.push({value:d,type:g,matches:e}),h=h.slice(d.length));if(!d)break}return c?h.length:h?b.error(a):S(a,i).slice(0)},A=b.compile=function(a,b){var c,d=[],e=[],f=T[a+" "];if(!f){for(b||(b=z(a)),c=b.length;c--;)f=s(b[c]),f[N]?d.push(f):e.push(f);f=T(a,t(e,d)),f.selector=a}return f},B=b.select=function(a,b,c,d){var e,f,g,h,i,j="function"==typeof a&&a,l=!d&&z(a=j.selector||a);if(c=c||[],1===l.length){if(f=l[0]=l[0].slice(0),f.length>2&&"ID"===(g=f[0]).type&&v.getById&&9===b.nodeType&&I&&w.relative[f[1].type]){if(b=(w.find.ID(g.matches[0].replace(vb,wb),b)||[])[0],!b)return c;j&&(b=b.parentNode),a=a.slice(f.shift().value.length)}for(e=ob.needsContext.test(a)?0:f.length;e--&&(g=f[e],!w.relative[h=g.type]);)if((i=w.find[h])&&(d=i(g.matches[0].replace(vb,wb),tb.test(f[0].type)&&k(b.parentNode)||b))){if(f.splice(e,1),a=d.length&&m(f),!a)return _.apply(c,d),c;break}}return(j||A(a,l))(d,b,!I,c,tb.test(a)&&k(b.parentNode)||b),c},v.sortStable=N.split("").sort(U).join("")===N,v.detectDuplicates=!!E,F(),v.sortDetached=e(function(a){return 1&a.compareDocumentPosition(G.createElement("div"))}),e(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||f("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),v.attributes&&e(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||f("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),e(function(a){return null==a.getAttribute("disabled")})||f(cb,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),b}(a);_.find=eb,_.expr=eb.selectors,_.expr[":"]=_.expr.pseudos,_.unique=eb.uniqueSort,_.text=eb.getText,_.isXMLDoc=eb.isXML,_.contains=eb.contains;var fb=_.expr.match.needsContext,gb=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,hb=/^.[^:#\[\.,]*$/;_.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?_.find.matchesSelector(d,a)?[d]:[]:_.find.matches(a,_.grep(b,function(a){return 1===a.nodeType}))},_.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(_(a).filter(function(){for(b=0;c>b;b++)if(_.contains(e[b],this))return!0}));for(b=0;c>b;b++)_.find(a,e[b],d);return d=this.pushStack(c>1?_.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(d(this,a||[],!1))},not:function(a){return this.pushStack(d(this,a||[],!0))},is:function(a){return!!d(this,"string"==typeof a&&fb.test(a)?_(a):a||[],!1).length}});var ib,jb=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,kb=_.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:jb.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||ib).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof _?b[0]:b,_.merge(this,_.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:Z,!0)),gb.test(c[1])&&_.isPlainObject(b))for(c in b)_.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=Z.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=Z,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):_.isFunction(a)?"undefined"!=typeof ib.ready?ib.ready(a):a(_):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),_.makeArray(a,this))};kb.prototype=_.fn,ib=_(Z);var lb=/^(?:parents|prev(?:Until|All))/,mb={children:!0,contents:!0,next:!0,prev:!0};_.extend({dir:function(a,b,c){for(var d=[],e=void 0!==c;(a=a[b])&&9!==a.nodeType;)if(1===a.nodeType){if(e&&_(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),_.fn.extend({has:function(a){var b=_(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(_.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=fb.test(a)||"string"!=typeof a?_(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&_.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?_.unique(f):f)},index:function(a){return a?"string"==typeof a?U.call(_(a),this[0]):U.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(_.unique(_.merge(this.get(),_(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}}),_.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return _.dir(a,"parentNode")},parentsUntil:function(a,b,c){return _.dir(a,"parentNode",c)},next:function(a){return e(a,"nextSibling")},prev:function(a){return e(a,"previousSibling")},nextAll:function(a){return _.dir(a,"nextSibling")},prevAll:function(a){return _.dir(a,"previousSibling")},nextUntil:function(a,b,c){return _.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return _.dir(a,"previousSibling",c)},siblings:function(a){return _.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return _.sibling(a.firstChild)},contents:function(a){return a.contentDocument||_.merge([],a.childNodes)}},function(a,b){_.fn[a]=function(c,d){var e=_.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=_.filter(d,e)),this.length>1&&(mb[a]||_.unique(e),lb.test(a)&&e.reverse()),this.pushStack(e)}});var nb=/\S+/g,ob={};_.Callbacks=function(a){a="string"==typeof a?ob[a]||f(a):_.extend({},a);var b,c,d,e,g,h,i=[],j=!a.once&&[],k=function(f){for(b=a.memory&&f,c=!0,h=e||0,e=0,g=i.length,d=!0;i&&g>h;h++)if(i[h].apply(f[0],f[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,i&&(j?j.length&&k(j.shift()):b?i=[]:l.disable())},l={add:function(){if(i){var c=i.length;!function f(b){_.each(b,function(b,c){var d=_.type(c);"function"===d?a.unique&&l.has(c)||i.push(c):c&&c.length&&"string"!==d&&f(c)})}(arguments),d?g=i.length:b&&(e=c,k(b))}return this},remove:function(){return i&&_.each(arguments,function(a,b){for(var c;(c=_.inArray(b,i,c))>-1;)i.splice(c,1),d&&(g>=c&&g--,h>=c&&h--)}),this},has:function(a){return a?_.inArray(a,i)>-1:!(!i||!i.length)},empty:function(){return i=[],g=0,this},disable:function(){return i=j=b=void 0,this},disabled:function(){return!i},lock:function(){return j=void 0,b||l.disable(),this},locked:function(){return!j},fireWith:function(a,b){return!i||c&&!j||(b=b||[],b=[a,b.slice?b.slice():b],d?j.push(b):k(b)),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!c}};return l},_.extend({Deferred:function(a){var b=[["resolve","done",_.Callbacks("once memory"),"resolved"],["reject","fail",_.Callbacks("once memory"),"rejected"],["notify","progress",_.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return _.Deferred(function(c){_.each(b,function(b,f){var g=_.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&_.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?_.extend(a,d):d}},e={};return d.pipe=d.then,_.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b,c,d,e=0,f=R.call(arguments),g=f.length,h=1!==g||a&&_.isFunction(a.promise)?g:0,i=1===h?a:_.Deferred(),j=function(a,c,d){return function(e){c[a]=this,d[a]=arguments.length>1?R.call(arguments):e,d===b?i.notifyWith(c,d):--h||i.resolveWith(c,d)}};if(g>1)for(b=new Array(g),c=new Array(g),d=new Array(g);g>e;e++)f[e]&&_.isFunction(f[e].promise)?f[e].promise().done(j(e,d,f)).fail(i.reject).progress(j(e,c,b)):--h;return h||i.resolveWith(d,f),i.promise()}});var pb;_.fn.ready=function(a){return _.ready.promise().done(a),this},_.extend({isReady:!1,readyWait:1,holdReady:function(a){a?_.readyWait++:_.ready(!0)},ready:function(a){(a===!0?--_.readyWait:_.isReady)||(_.isReady=!0,a!==!0&&--_.readyWait>0||(pb.resolveWith(Z,[_]),_.fn.triggerHandler&&(_(Z).triggerHandler("ready"),_(Z).off("ready"))))}}),_.ready.promise=function(b){return pb||(pb=_.Deferred(),"complete"===Z.readyState?setTimeout(_.ready):(Z.addEventListener("DOMContentLoaded",g,!1),a.addEventListener("load",g,!1))),pb.promise(b)},_.ready.promise();var qb=_.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===_.type(c)){e=!0;for(h in c)_.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,_.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(_(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};_.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType},h.uid=1,h.accepts=_.acceptData,h.prototype={key:function(a){if(!h.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=h.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,_.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(_.isEmptyObject(f))_.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,_.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{_.isArray(b)?d=b.concat(b.map(_.camelCase)):(e=_.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(nb)||[])),c=d.length;for(;c--;)delete g[d[c]]}},hasData:function(a){return!_.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var rb=new h,sb=new h,tb=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ub=/([A-Z])/g;_.extend({hasData:function(a){return sb.hasData(a)||rb.hasData(a)},data:function(a,b,c){return sb.access(a,b,c)},removeData:function(a,b){sb.remove(a,b)},_data:function(a,b,c){return rb.access(a,b,c)},_removeData:function(a,b){rb.remove(a,b)}}),_.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=sb.get(f),1===f.nodeType&&!rb.get(f,"hasDataAttrs"))){for(c=g.length;c--;)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=_.camelCase(d.slice(5)),i(f,d,e[d])));rb.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){sb.set(this,a)}):qb(this,function(b){var c,d=_.camelCase(a);if(f&&void 0===b){if(c=sb.get(f,a),void 0!==c)return c;if(c=sb.get(f,d),void 0!==c)return c;if(c=i(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=sb.get(this,d);sb.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&sb.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){sb.remove(this,a)})}}),_.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=rb.get(a,b),c&&(!d||_.isArray(c)?d=rb.access(a,b,_.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=_.queue(a,b),d=c.length,e=c.shift(),f=_._queueHooks(a,b),g=function(){_.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return rb.get(a,c)||rb.access(a,c,{empty:_.Callbacks("once memory").add(function(){rb.remove(a,[b+"queue",c])})})}}),_.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?_.queue(this[0],a):void 0===b?this:this.each(function(){var c=_.queue(this,a,b);_._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&_.dequeue(this,a)})},dequeue:function(a){return this.each(function(){_.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=_.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};for("string"!=typeof a&&(b=a,a=void 0),a=a||"fx";g--;)c=rb.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var vb=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,wb=["Top","Right","Bottom","Left"],xb=function(a,b){return a=b||a,"none"===_.css(a,"display")||!_.contains(a.ownerDocument,a)},yb=/^(?:checkbox|radio)$/i;!function(){var a=Z.createDocumentFragment(),b=a.appendChild(Z.createElement("div")),c=Z.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),Y.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var zb="undefined";Y.focusinBubbles="onfocusin"in a;var Ab=/^key/,Bb=/^(?:mouse|pointer|contextmenu)|click/,Cb=/^(?:focusinfocus|focusoutblur)$/,Db=/^([^.]*)(?:\.(.+)|)$/;_.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.get(a);if(q)for(c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=_.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return typeof _!==zb&&_.event.triggered!==b.type?_.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(nb)||[""],j=b.length;j--;)h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=_.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=_.event.special[n]||{},k=_.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&_.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),_.event.global[n]=!0)},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=rb.hasData(a)&&rb.get(a);if(q&&(i=q.events)){for(b=(b||"").match(nb)||[""],j=b.length;j--;)if(h=Db.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){for(l=_.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;f--;)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||_.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)_.event.remove(a,n+b[j],c,d,!0);_.isEmptyObject(i)&&(delete q.handle,rb.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,j,k,l,m=[d||Z],n=X.call(b,"type")?b.type:b,o=X.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||Z,3!==d.nodeType&&8!==d.nodeType&&!Cb.test(n+_.event.triggered)&&(n.indexOf(".")>=0&&(o=n.split("."),n=o.shift(),o.sort()),j=n.indexOf(":")<0&&"on"+n,b=b[_.expando]?b:new _.Event(n,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=o.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:_.makeArray(c,[b]),l=_.event.special[n]||{},e||!l.trigger||l.trigger.apply(d,c)!==!1)){if(!e&&!l.noBubble&&!_.isWindow(d)){for(i=l.delegateType||n,Cb.test(i+n)||(g=g.parentNode);g;g=g.parentNode)m.push(g),h=g;
h===(d.ownerDocument||Z)&&m.push(h.defaultView||h.parentWindow||a)}for(f=0;(g=m[f++])&&!b.isPropagationStopped();)b.type=f>1?i:l.bindType||n,k=(rb.get(g,"events")||{})[b.type]&&rb.get(g,"handle"),k&&k.apply(g,c),k=j&&g[j],k&&k.apply&&_.acceptData(g)&&(b.result=k.apply(g,c),b.result===!1&&b.preventDefault());return b.type=n,e||b.isDefaultPrevented()||l._default&&l._default.apply(m.pop(),c)!==!1||!_.acceptData(d)||j&&_.isFunction(d[n])&&!_.isWindow(d)&&(h=d[j],h&&(d[j]=null),_.event.triggered=n,d[n](),_.event.triggered=void 0,h&&(d[j]=h)),b.result}},dispatch:function(a){a=_.event.fix(a);var b,c,d,e,f,g=[],h=R.call(arguments),i=(rb.get(this,"events")||{})[a.type]||[],j=_.event.special[a.type]||{};if(h[0]=a,a.delegateTarget=this,!j.preDispatch||j.preDispatch.call(this,a)!==!1){for(g=_.event.handlers.call(this,a,i),b=0;(e=g[b++])&&!a.isPropagationStopped();)for(a.currentTarget=e.elem,c=0;(f=e.handlers[c++])&&!a.isImmediatePropagationStopped();)(!a.namespace_re||a.namespace_re.test(f.namespace))&&(a.handleObj=f,a.data=f.data,d=((_.event.special[f.origType]||{}).handle||f.handler).apply(e.elem,h),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));return j.postDispatch&&j.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?_(e,this).index(i)>=0:_.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||Z,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[_.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];for(g||(this.fixHooks[e]=g=Bb.test(e)?this.mouseHooks:Ab.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new _.Event(f),b=d.length;b--;)c=d[b],a[c]=f[c];return a.target||(a.target=Z),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==l()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===l()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&_.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return _.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=_.extend(new _.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?_.event.trigger(e,null,b):_.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},_.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},_.Event=function(a,b){return this instanceof _.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?j:k):this.type=a,b&&_.extend(this,b),this.timeStamp=a&&a.timeStamp||_.now(),void(this[_.expando]=!0)):new _.Event(a,b)},_.Event.prototype={isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=j,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=j,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=j,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},_.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){_.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!_.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),Y.focusinBubbles||_.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){_.event.simulate(b,a.target,_.event.fix(a),!0)};_.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=rb.access(d,b);e||d.addEventListener(a,c,!0),rb.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=rb.access(d,b)-1;e?rb.access(d,b,e):(d.removeEventListener(a,c,!0),rb.remove(d,b))}}}),_.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=k;else if(!d)return this;return 1===e&&(f=d,d=function(a){return _().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=_.guid++)),this.each(function(){_.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,_(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=k),this.each(function(){_.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){_.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?_.event.trigger(a,b,c,!0):void 0}});var Eb=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Fb=/<([\w:]+)/,Gb=/<|&#?\w+;/,Hb=/<(?:script|style|link)/i,Ib=/checked\s*(?:[^=]|=\s*.checked.)/i,Jb=/^$|\/(?:java|ecma)script/i,Kb=/^true\/(.*)/,Lb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mb={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mb.optgroup=Mb.option,Mb.tbody=Mb.tfoot=Mb.colgroup=Mb.caption=Mb.thead,Mb.th=Mb.td,_.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=_.contains(a.ownerDocument,a);if(!(Y.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||_.isXMLDoc(a)))for(g=r(h),f=r(a),d=0,e=f.length;e>d;d++)s(f[d],g[d]);if(b)if(c)for(f=f||r(a),g=g||r(h),d=0,e=f.length;e>d;d++)q(f[d],g[d]);else q(a,h);return g=r(h,"script"),g.length>0&&p(g,!i&&r(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,n=a.length;n>m;m++)if(e=a[m],e||0===e)if("object"===_.type(e))_.merge(l,e.nodeType?[e]:e);else if(Gb.test(e)){for(f=f||k.appendChild(b.createElement("div")),g=(Fb.exec(e)||["",""])[1].toLowerCase(),h=Mb[g]||Mb._default,f.innerHTML=h[1]+e.replace(Eb,"<$1></$2>")+h[2],j=h[0];j--;)f=f.lastChild;_.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));for(k.textContent="",m=0;e=l[m++];)if((!d||-1===_.inArray(e,d))&&(i=_.contains(e.ownerDocument,e),f=r(k.appendChild(e),"script"),i&&p(f),c))for(j=0;e=f[j++];)Jb.test(e.type||"")&&c.push(e);return k},cleanData:function(a){for(var b,c,d,e,f=_.event.special,g=0;void 0!==(c=a[g]);g++){if(_.acceptData(c)&&(e=c[rb.expando],e&&(b=rb.cache[e]))){if(b.events)for(d in b.events)f[d]?_.event.remove(c,d):_.removeEvent(c,d,b.handle);rb.cache[e]&&delete rb.cache[e]}delete sb.cache[c[sb.expando]]}}}),_.fn.extend({text:function(a){return qb(this,function(a){return void 0===a?_.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=m(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?_.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||_.cleanData(r(c)),c.parentNode&&(b&&_.contains(c.ownerDocument,c)&&p(r(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(_.cleanData(r(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return _.clone(this,a,b)})},html:function(a){return qb(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Hb.test(a)&&!Mb[(Fb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Eb,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(_.cleanData(r(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,_.cleanData(r(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=S.apply([],a);var c,d,e,f,g,h,i=0,j=this.length,k=this,l=j-1,m=a[0],p=_.isFunction(m);if(p||j>1&&"string"==typeof m&&!Y.checkClone&&Ib.test(m))return this.each(function(c){var d=k.eq(c);p&&(a[0]=m.call(this,c,d.html())),d.domManip(a,b)});if(j&&(c=_.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(e=_.map(r(c,"script"),n),f=e.length;j>i;i++)g=c,i!==l&&(g=_.clone(g,!0,!0),f&&_.merge(e,r(g,"script"))),b.call(this[i],g,i);if(f)for(h=e[e.length-1].ownerDocument,_.map(e,o),i=0;f>i;i++)g=e[i],Jb.test(g.type||"")&&!rb.access(g,"globalEval")&&_.contains(h,g)&&(g.src?_._evalUrl&&_._evalUrl(g.src):_.globalEval(g.textContent.replace(Lb,"")))}return this}}),_.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){_.fn[a]=function(a){for(var c,d=[],e=_(a),f=e.length-1,g=0;f>=g;g++)c=g===f?this:this.clone(!0),_(e[g])[b](c),T.apply(d,c.get());return this.pushStack(d)}});var Nb,Ob={},Pb=/^margin/,Qb=new RegExp("^("+vb+")(?!px)[a-z%]+$","i"),Rb=function(a){return a.ownerDocument.defaultView.getComputedStyle(a,null)};!function(){function b(){g.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",g.innerHTML="",e.appendChild(f);var b=a.getComputedStyle(g,null);c="1%"!==b.top,d="4px"===b.width,e.removeChild(f)}var c,d,e=Z.documentElement,f=Z.createElement("div"),g=Z.createElement("div");g.style&&(g.style.backgroundClip="content-box",g.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle="content-box"===g.style.backgroundClip,f.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",f.appendChild(g),a.getComputedStyle&&_.extend(Y,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return null==d&&b(),d},reliableMarginRight:function(){var b,c=g.appendChild(Z.createElement("div"));return c.style.cssText=g.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",g.style.width="1px",e.appendChild(f),b=!parseFloat(a.getComputedStyle(c,null).marginRight),e.removeChild(f),b}}))}(),_.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var Sb=/^(none|table(?!-c[ea]).+)/,Tb=new RegExp("^("+vb+")(.*)$","i"),Ub=new RegExp("^([+-])=("+vb+")","i"),Vb={position:"absolute",visibility:"hidden",display:"block"},Wb={letterSpacing:"0",fontWeight:"400"},Xb=["Webkit","O","Moz","ms"];_.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=v(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=_.camelCase(b),i=a.style;return b=_.cssProps[h]||(_.cssProps[h]=x(i,h)),g=_.cssHooks[b]||_.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ub.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(_.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||_.cssNumber[h]||(c+="px"),Y.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=_.camelCase(b);return b=_.cssProps[h]||(_.cssProps[h]=x(a.style,h)),g=_.cssHooks[b]||_.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=v(a,b,d)),"normal"===e&&b in Wb&&(e=Wb[b]),""===c||c?(f=parseFloat(e),c===!0||_.isNumeric(f)?f||0:e):e}}),_.each(["height","width"],function(a,b){_.cssHooks[b]={get:function(a,c,d){return c?Sb.test(_.css(a,"display"))&&0===a.offsetWidth?_.swap(a,Vb,function(){return A(a,b,d)}):A(a,b,d):void 0},set:function(a,c,d){var e=d&&Rb(a);return y(a,c,d?z(a,b,d,"border-box"===_.css(a,"boxSizing",!1,e),e):0)}}}),_.cssHooks.marginRight=w(Y.reliableMarginRight,function(a,b){return b?_.swap(a,{display:"inline-block"},v,[a,"marginRight"]):void 0}),_.each({margin:"",padding:"",border:"Width"},function(a,b){_.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+wb[d]+b]=f[d]||f[d-2]||f[0];return e}},Pb.test(a)||(_.cssHooks[a+b].set=y)}),_.fn.extend({css:function(a,b){return qb(this,function(a,b,c){var d,e,f={},g=0;if(_.isArray(b)){for(d=Rb(a),e=b.length;e>g;g++)f[b[g]]=_.css(a,b[g],!1,d);return f}return void 0!==c?_.style(a,b,c):_.css(a,b)},a,b,arguments.length>1)},show:function(){return B(this,!0)},hide:function(){return B(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){xb(this)?_(this).show():_(this).hide()})}}),_.Tween=C,C.prototype={constructor:C,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(_.cssNumber[c]?"":"px")},cur:function(){var a=C.propHooks[this.prop];return a&&a.get?a.get(this):C.propHooks._default.get(this)},run:function(a){var b,c=C.propHooks[this.prop];return this.pos=b=this.options.duration?_.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):C.propHooks._default.set(this),this}},C.prototype.init.prototype=C.prototype,C.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=_.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){_.fx.step[a.prop]?_.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[_.cssProps[a.prop]]||_.cssHooks[a.prop])?_.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},C.propHooks.scrollTop=C.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},_.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},_.fx=C.prototype.init,_.fx.step={};var Yb,Zb,$b=/^(?:toggle|show|hide)$/,_b=new RegExp("^(?:([+-])=|)("+vb+")([a-z%]*)$","i"),ac=/queueHooks$/,bc=[G],cc={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=_b.exec(b),f=e&&e[3]||(_.cssNumber[a]?"":"px"),g=(_.cssNumber[a]||"px"!==f&&+d)&&_b.exec(_.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,_.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};_.Animation=_.extend(I,{tweener:function(a,b){_.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],cc[c]=cc[c]||[],cc[c].unshift(b)},prefilter:function(a,b){b?bc.unshift(a):bc.push(a)}}),_.speed=function(a,b,c){var d=a&&"object"==typeof a?_.extend({},a):{complete:c||!c&&b||_.isFunction(a)&&a,duration:a,easing:c&&b||b&&!_.isFunction(b)&&b};return d.duration=_.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in _.fx.speeds?_.fx.speeds[d.duration]:_.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){_.isFunction(d.old)&&d.old.call(this),d.queue&&_.dequeue(this,d.queue)},d},_.fn.extend({fadeTo:function(a,b,c,d){return this.filter(xb).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=_.isEmptyObject(a),f=_.speed(b,c,d),g=function(){var b=I(this,_.extend({},a),f);(e||rb.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=_.timers,g=rb.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&ac.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&_.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=rb.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=_.timers,g=d?d.length:0;for(c.finish=!0,_.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),_.each(["toggle","show","hide"],function(a,b){var c=_.fn[b];_.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(E(b,!0),a,d,e)}}),_.each({slideDown:E("show"),slideUp:E("hide"),slideToggle:E("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){_.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),_.timers=[],_.fx.tick=function(){var a,b=0,c=_.timers;for(Yb=_.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||_.fx.stop(),Yb=void 0},_.fx.timer=function(a){_.timers.push(a),a()?_.fx.start():_.timers.pop()},_.fx.interval=13,_.fx.start=function(){Zb||(Zb=setInterval(_.fx.tick,_.fx.interval))},_.fx.stop=function(){clearInterval(Zb),Zb=null},_.fx.speeds={slow:600,fast:200,_default:400},_.fn.delay=function(a,b){return a=_.fx?_.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=Z.createElement("input"),b=Z.createElement("select"),c=b.appendChild(Z.createElement("option"));a.type="checkbox",Y.checkOn=""!==a.value,Y.optSelected=c.selected,b.disabled=!0,Y.optDisabled=!c.disabled,a=Z.createElement("input"),a.value="t",a.type="radio",Y.radioValue="t"===a.value}();var dc,ec,fc=_.expr.attrHandle;_.fn.extend({attr:function(a,b){return qb(this,_.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){_.removeAttr(this,a)})}}),_.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===zb?_.prop(a,b,c):(1===f&&_.isXMLDoc(a)||(b=b.toLowerCase(),d=_.attrHooks[b]||(_.expr.match.bool.test(b)?ec:dc)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=_.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void _.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(nb);if(f&&1===a.nodeType)for(;c=f[e++];)d=_.propFix[c]||c,_.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!Y.radioValue&&"radio"===b&&_.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),ec={set:function(a,b,c){return b===!1?_.removeAttr(a,c):a.setAttribute(c,c),c}},_.each(_.expr.match.bool.source.match(/\w+/g),function(a,b){var c=fc[b]||_.find.attr;fc[b]=function(a,b,d){var e,f;return d||(f=fc[b],fc[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,fc[b]=f),e}});var gc=/^(?:input|select|textarea|button)$/i;_.fn.extend({prop:function(a,b){return qb(this,_.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[_.propFix[a]||a]})}}),_.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!_.isXMLDoc(a),f&&(b=_.propFix[b]||b,e=_.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||gc.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),Y.optSelected||(_.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),_.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){_.propFix[this.toLowerCase()]=this});var hc=/[\t\r\n\f]/g;_.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):" ")){for(f=0;e=b[f++];)d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=_.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(_.isFunction(a))return this.each(function(b){_(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(nb)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(hc," "):"")){for(f=0;e=b[f++];)for(;d.indexOf(" "+e+" ")>=0;)d=d.replace(" "+e+" "," ");g=a?_.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(_.isFunction(a)?function(c){_(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c)for(var b,d=0,e=_(this),f=a.match(nb)||[];b=f[d++];)e.hasClass(b)?e.removeClass(b):e.addClass(b);else(c===zb||"boolean"===c)&&(this.className&&rb.set(this,"__className__",this.className),this.className=this.className||a===!1?"":rb.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(hc," ").indexOf(b)>=0)return!0;return!1}});var ic=/\r/g;_.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=_.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,_(this).val()):a,null==e?e="":"number"==typeof e?e+="":_.isArray(e)&&(e=_.map(e,function(a){return null==a?"":a+""})),b=_.valHooks[this.type]||_.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=_.valHooks[e.type]||_.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(ic,""):null==c?"":c)}}}),_.extend({valHooks:{option:{get:function(a){var b=_.find.attr(a,"value");return null!=b?b:_.trim(_.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(Y.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&_.nodeName(c.parentNode,"optgroup"))){if(b=_(c).val(),f)return b;g.push(b)}return g},set:function(a,b){for(var c,d,e=a.options,f=_.makeArray(b),g=e.length;g--;)d=e[g],(d.selected=_.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),_.each(["radio","checkbox"],function(){_.valHooks[this]={set:function(a,b){return _.isArray(b)?a.checked=_.inArray(_(a).val(),b)>=0:void 0}},Y.checkOn||(_.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),_.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){_.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),_.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var jc=_.now(),kc=/\?/;_.parseJSON=function(a){return JSON.parse(a+"")},_.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&_.error("Invalid XML: "+a),b};var lc,mc,nc=/#.*$/,oc=/([?&])_=[^&]*/,pc=/^(.*?):[ \t]*([^\r\n]*)$/gm,qc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rc=/^(?:GET|HEAD)$/,sc=/^\/\//,tc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,uc={},vc={},wc="*/".concat("*");try{mc=location.href}catch(xc){mc=Z.createElement("a"),mc.href="",mc=mc.href}lc=tc.exec(mc.toLowerCase())||[],_.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:mc,type:"GET",isLocal:qc.test(lc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":_.parseJSON,"text xml":_.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?L(L(a,_.ajaxSettings),b):L(_.ajaxSettings,a)},ajaxPrefilter:J(uc),ajaxTransport:J(vc),ajax:function(a,b){function c(a,b,c,g){var i,k,r,s,u,w=b;2!==t&&(t=2,h&&clearTimeout(h),d=void 0,f=g||"",v.readyState=a>0?4:0,i=a>=200&&300>a||304===a,c&&(s=M(l,v,c)),s=N(l,s,v,i),i?(l.ifModified&&(u=v.getResponseHeader("Last-Modified"),u&&(_.lastModified[e]=u),u=v.getResponseHeader("etag"),u&&(_.etag[e]=u)),204===a||"HEAD"===l.type?w="nocontent":304===a?w="notmodified":(w=s.state,k=s.data,r=s.error,i=!r)):(r=w,(a||!w)&&(w="error",0>a&&(a=0))),v.status=a,v.statusText=(b||w)+"",i?o.resolveWith(m,[k,w,v]):o.rejectWith(m,[v,w,r]),v.statusCode(q),q=void 0,j&&n.trigger(i?"ajaxSuccess":"ajaxError",[v,l,i?k:r]),p.fireWith(m,[v,w]),j&&(n.trigger("ajaxComplete",[v,l]),--_.active||_.event.trigger("ajaxStop")))}"object"==typeof a&&(b=a,a=void 0),b=b||{};var d,e,f,g,h,i,j,k,l=_.ajaxSetup({},b),m=l.context||l,n=l.context&&(m.nodeType||m.jquery)?_(m):_.event,o=_.Deferred(),p=_.Callbacks("once memory"),q=l.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!g)for(g={};b=pc.exec(f);)g[b[1].toLowerCase()]=b[2];b=g[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?f:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(l.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return d&&d.abort(b),c(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,l.url=((a||l.url||mc)+"").replace(nc,"").replace(sc,lc[1]+"//"),l.type=b.method||b.type||l.method||l.type,l.dataTypes=_.trim(l.dataType||"*").toLowerCase().match(nb)||[""],null==l.crossDomain&&(i=tc.exec(l.url.toLowerCase()),l.crossDomain=!(!i||i[1]===lc[1]&&i[2]===lc[2]&&(i[3]||("http:"===i[1]?"80":"443"))===(lc[3]||("http:"===lc[1]?"80":"443")))),l.data&&l.processData&&"string"!=typeof l.data&&(l.data=_.param(l.data,l.traditional)),K(uc,l,b,v),2===t)return v;j=l.global,j&&0===_.active++&&_.event.trigger("ajaxStart"),l.type=l.type.toUpperCase(),l.hasContent=!rc.test(l.type),e=l.url,l.hasContent||(l.data&&(e=l.url+=(kc.test(e)?"&":"?")+l.data,delete l.data),l.cache===!1&&(l.url=oc.test(e)?e.replace(oc,"$1_="+jc++):e+(kc.test(e)?"&":"?")+"_="+jc++)),l.ifModified&&(_.lastModified[e]&&v.setRequestHeader("If-Modified-Since",_.lastModified[e]),_.etag[e]&&v.setRequestHeader("If-None-Match",_.etag[e])),(l.data&&l.hasContent&&l.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",l.contentType),v.setRequestHeader("Accept",l.dataTypes[0]&&l.accepts[l.dataTypes[0]]?l.accepts[l.dataTypes[0]]+("*"!==l.dataTypes[0]?", "+wc+"; q=0.01":""):l.accepts["*"]);for(k in l.headers)v.setRequestHeader(k,l.headers[k]);if(l.beforeSend&&(l.beforeSend.call(m,v,l)===!1||2===t))return v.abort();u="abort";for(k in{success:1,error:1,complete:1})v[k](l[k]);if(d=K(vc,l,b,v)){v.readyState=1,j&&n.trigger("ajaxSend",[v,l]),l.async&&l.timeout>0&&(h=setTimeout(function(){v.abort("timeout")},l.timeout));try{t=1,d.send(r,c)}catch(w){if(!(2>t))throw w;c(-1,w)}}else c(-1,"No Transport");return v},getJSON:function(a,b,c){return _.get(a,b,c,"json")},getScript:function(a,b){return _.get(a,void 0,b,"script")}}),_.each(["get","post"],function(a,b){_[b]=function(a,c,d,e){return _.isFunction(c)&&(e=e||d,d=c,c=void 0),_.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),_.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){_.fn[b]=function(a){return this.on(b,a)}}),_._evalUrl=function(a){return _.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},_.fn.extend({wrapAll:function(a){var b;return _.isFunction(a)?this.each(function(b){_(this).wrapAll(a.call(this,b))}):(this[0]&&(b=_(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){for(var a=this;a.firstElementChild;)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(_.isFunction(a)?function(b){_(this).wrapInner(a.call(this,b))}:function(){var b=_(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=_.isFunction(a);return this.each(function(c){_(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){_.nodeName(this,"body")||_(this).replaceWith(this.childNodes)}).end()}}),_.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},_.expr.filters.visible=function(a){return!_.expr.filters.hidden(a)};var yc=/%20/g,zc=/\[\]$/,Ac=/\r?\n/g,Bc=/^(?:submit|button|image|reset|file)$/i,Cc=/^(?:input|select|textarea|keygen)/i;_.param=function(a,b){var c,d=[],e=function(a,b){b=_.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=_.ajaxSettings&&_.ajaxSettings.traditional),_.isArray(a)||a.jquery&&!_.isPlainObject(a))_.each(a,function(){e(this.name,this.value)
});else for(c in a)O(c,a[c],b,e);return d.join("&").replace(yc,"+")},_.fn.extend({serialize:function(){return _.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=_.prop(this,"elements");return a?_.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!_(this).is(":disabled")&&Cc.test(this.nodeName)&&!Bc.test(a)&&(this.checked||!yb.test(a))}).map(function(a,b){var c=_(this).val();return null==c?null:_.isArray(c)?_.map(c,function(a){return{name:b.name,value:a.replace(Ac,"\r\n")}}):{name:b.name,value:c.replace(Ac,"\r\n")}}).get()}}),_.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Dc=0,Ec={},Fc={0:200,1223:204},Gc=_.ajaxSettings.xhr();a.ActiveXObject&&_(a).on("unload",function(){for(var a in Ec)Ec[a]()}),Y.cors=!!Gc&&"withCredentials"in Gc,Y.ajax=Gc=!!Gc,_.ajaxTransport(function(a){var b;return Y.cors||Gc&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Dc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Ec[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Fc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Ec[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),_.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return _.globalEval(a),a}}}),_.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),_.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=_("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),Z.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Hc=[],Ic=/(=)\?(?=&|$)|\?\?/;_.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Hc.pop()||_.expando+"_"+jc++;return this[a]=!0,a}}),_.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ic.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ic.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=_.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ic,"$1"+e):b.jsonp!==!1&&(b.url+=(kc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||_.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Hc.push(e)),g&&_.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),_.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||Z;var d=gb.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=_.buildFragment([a],b,e),e&&e.length&&_(e).remove(),_.merge([],d.childNodes))};var Jc=_.fn.load;_.fn.load=function(a,b,c){if("string"!=typeof a&&Jc)return Jc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=_.trim(a.slice(h)),a=a.slice(0,h)),_.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&_.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?_("<div>").append(_.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},_.expr.filters.animated=function(a){return _.grep(_.timers,function(b){return a===b.elem}).length};var Kc=a.document.documentElement;_.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=_.css(a,"position"),l=_(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=_.css(a,"top"),i=_.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),_.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},_.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){_.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,_.contains(b,d)?(typeof d.getBoundingClientRect!==zb&&(e=d.getBoundingClientRect()),c=P(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===_.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),_.nodeName(a[0],"html")||(d=a.offset()),d.top+=_.css(a[0],"borderTopWidth",!0),d.left+=_.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-_.css(c,"marginTop",!0),left:b.left-d.left-_.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||Kc;a&&!_.nodeName(a,"html")&&"static"===_.css(a,"position");)a=a.offsetParent;return a||Kc})}}),_.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;_.fn[b]=function(e){return qb(this,function(b,e,f){var g=P(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),_.each(["top","left"],function(a,b){_.cssHooks[b]=w(Y.pixelPosition,function(a,c){return c?(c=v(a,b),Qb.test(c)?_(a).position()[b]+"px":c):void 0})}),_.each({Height:"height",Width:"width"},function(a,b){_.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){_.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return qb(this,function(b,c,d){var e;return _.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?_.css(b,c,g):_.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),_.fn.size=function(){return this.length},_.fn.andSelf=_.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return _});var Lc=a.jQuery,Mc=a.$;return _.noConflict=function(b){return a.$===_&&(a.$=Mc),b&&a.jQuery===_&&(a.jQuery=Lc),_},typeof b===zb&&(a.jQuery=a.$=_),_});
(function($, undefined) {

/**
 * Unobtrusive scripting adapter for jQuery
 * https://github.com/rails/jquery-ujs
 *
 * Requires jQuery 1.8.0 or later.
 *
 * Released under the MIT license
 *
 */

  // Cut down on the number of issues from people inadvertently including jquery_ujs twice
  // by detecting and raising an error when it happens.
  if ( $.rails !== undefined ) {
    $.error('jquery-ujs has already been loaded!');
  }

  // Shorthand to make it a little easier to call public rails functions from within rails.js
  var rails;
  var $document = $(document);

  $.rails = rails = {
    // Link elements bound by jquery-ujs
    linkClickSelector: 'a[data-confirm], a[data-method], a[data-remote], a[data-disable-with], a[data-disable]',

    // Button elements bound by jquery-ujs
    buttonClickSelector: 'button[data-remote]:not(form button), button[data-confirm]:not(form button)',

    // Select elements bound by jquery-ujs
    inputChangeSelector: 'select[data-remote], input[data-remote], textarea[data-remote]',

    // Form elements bound by jquery-ujs
    formSubmitSelector: 'form',

    // Form input elements bound by jquery-ujs
    formInputClickSelector: 'form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])',

    // Form input elements disabled during form submission
    disableSelector: 'input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled',

    // Form input elements re-enabled after form submission
    enableSelector: 'input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled',

    // Form required input elements
    requiredInputSelector: 'input[name][required]:not([disabled]),textarea[name][required]:not([disabled])',

    // Form file input elements
    fileInputSelector: 'input[type=file]',

    // Link onClick disable selector with possible reenable after remote submission
    linkDisableSelector: 'a[data-disable-with], a[data-disable]',

    // Button onClick disable selector with possible reenable after remote submission
    buttonDisableSelector: 'button[data-remote][data-disable-with], button[data-remote][data-disable]',

    // Make sure that every Ajax request sends the CSRF token
    CSRFProtection: function(xhr) {
      var token = $('meta[name="csrf-token"]').attr('content');
      if (token) xhr.setRequestHeader('X-CSRF-Token', token);
    },

    // making sure that all forms have actual up-to-date token(cached forms contain old one)
    refreshCSRFTokens: function(){
      var csrfToken = $('meta[name=csrf-token]').attr('content');
      var csrfParam = $('meta[name=csrf-param]').attr('content');
      $('form input[name="' + csrfParam + '"]').val(csrfToken);
    },

    // Triggers an event on an element and returns false if the event result is false
    fire: function(obj, name, data) {
      var event = $.Event(name);
      obj.trigger(event, data);
      return event.result !== false;
    },

    // Default confirm dialog, may be overridden with custom confirm dialog in $.rails.confirm
    confirm: function(message) {
      return confirm(message);
    },

    // Default ajax function, may be overridden with custom function in $.rails.ajax
    ajax: function(options) {
      return $.ajax(options);
    },

    // Default way to get an element's href. May be overridden at $.rails.href.
    href: function(element) {
      return element.attr('href');
    },

    // Submits "remote" forms and links with ajax
    handleRemote: function(element) {
      var method, url, data, elCrossDomain, crossDomain, withCredentials, dataType, options;

      if (rails.fire(element, 'ajax:before')) {
        elCrossDomain = element.data('cross-domain');
        crossDomain = elCrossDomain === undefined ? null : elCrossDomain;
        withCredentials = element.data('with-credentials') || null;
        dataType = element.data('type') || ($.ajaxSettings && $.ajaxSettings.dataType);

        if (element.is('form')) {
          method = element.attr('method');
          url = element.attr('action');
          data = element.serializeArray();
          // memoized value from clicked submit button
          var button = element.data('ujs:submit-button');
          if (button) {
            data.push(button);
            element.data('ujs:submit-button', null);
          }
        } else if (element.is(rails.inputChangeSelector)) {
          method = element.data('method');
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else if (element.is(rails.buttonClickSelector)) {
          method = element.data('method') || 'get';
          url = element.data('url');
          data = element.serialize();
          if (element.data('params')) data = data + "&" + element.data('params');
        } else {
          method = element.data('method');
          url = rails.href(element);
          data = element.data('params') || null;
        }

        options = {
          type: method || 'GET', data: data, dataType: dataType,
          // stopping the "ajax:beforeSend" event will cancel the ajax request
          beforeSend: function(xhr, settings) {
            if (settings.dataType === undefined) {
              xhr.setRequestHeader('accept', '*/*;q=0.5, ' + settings.accepts.script);
            }
            if (rails.fire(element, 'ajax:beforeSend', [xhr, settings])) {
              element.trigger('ajax:send', xhr);
            } else {
              return false;
            }
          },
          success: function(data, status, xhr) {
            element.trigger('ajax:success', [data, status, xhr]);
          },
          complete: function(xhr, status) {
            element.trigger('ajax:complete', [xhr, status]);
          },
          error: function(xhr, status, error) {
            element.trigger('ajax:error', [xhr, status, error]);
          },
          crossDomain: crossDomain
        };

        // There is no withCredentials for IE6-8 when
        // "Enable native XMLHTTP support" is disabled
        if (withCredentials) {
          options.xhrFields = {
            withCredentials: withCredentials
          };
        }

        // Only pass url to `ajax` options if not blank
        if (url) { options.url = url; }

        return rails.ajax(options);
      } else {
        return false;
      }
    },

    // Handles "data-method" on links such as:
    // <a href="/users/5" data-method="delete" rel="nofollow" data-confirm="Are you sure?">Delete</a>
    handleMethod: function(link) {
      var href = rails.href(link),
        method = link.data('method'),
        target = link.attr('target'),
        csrfToken = $('meta[name=csrf-token]').attr('content'),
        csrfParam = $('meta[name=csrf-param]').attr('content'),
        form = $('<form method="post" action="' + href + '"></form>'),
        metadataInput = '<input name="_method" value="' + method + '" type="hidden" />';

      if (csrfParam !== undefined && csrfToken !== undefined) {
        metadataInput += '<input name="' + csrfParam + '" value="' + csrfToken + '" type="hidden" />';
      }

      if (target) { form.attr('target', target); }

      form.hide().append(metadataInput).appendTo('body');
      form.submit();
    },

    // Helper function that returns form elements that match the specified CSS selector
    // If form is actually a "form" element this will return associated elements outside the from that have
    // the html form attribute set
    formElements: function(form, selector) {
      return form.is('form') ? $(form[0].elements).filter(selector) : form.find(selector);
    },

    /* Disables form elements:
      - Caches element value in 'ujs:enable-with' data store
      - Replaces element text with value of 'data-disable-with' attribute
      - Sets disabled property to true
    */
    disableFormElements: function(form) {
      rails.formElements(form, rails.disableSelector).each(function() {
        rails.disableFormElement($(this));
      });
    },

    disableFormElement: function(element) {
      var method, replacement;

      method = element.is('button') ? 'html' : 'val';
      replacement = element.data('disable-with');

      element.data('ujs:enable-with', element[method]());
      if (replacement !== undefined) {
        element[method](replacement);
      }

      element.prop('disabled', true);
    },

    /* Re-enables disabled form elements:
      - Replaces element text with cached value from 'ujs:enable-with' data store (created in `disableFormElements`)
      - Sets disabled property to false
    */
    enableFormElements: function(form) {
      rails.formElements(form, rails.enableSelector).each(function() {
        rails.enableFormElement($(this));
      });
    },

    enableFormElement: function(element) {
      var method = element.is('button') ? 'html' : 'val';
      if (element.data('ujs:enable-with')) element[method](element.data('ujs:enable-with'));
      element.prop('disabled', false);
    },

   /* For 'data-confirm' attribute:
      - Fires `confirm` event
      - Shows the confirmation dialog
      - Fires the `confirm:complete` event

      Returns `true` if no function stops the chain and user chose yes; `false` otherwise.
      Attaching a handler to the element's `confirm` event that returns a `falsy` value cancels the confirmation dialog.
      Attaching a handler to the element's `confirm:complete` event that returns a `falsy` value makes this function
      return false. The `confirm:complete` event is fired whether or not the user answered true or false to the dialog.
   */
    allowAction: function(element) {
      var message = element.data('confirm'),
          answer = false, callback;
      if (!message) { return true; }

      if (rails.fire(element, 'confirm')) {
        answer = rails.confirm(message);
        callback = rails.fire(element, 'confirm:complete', [answer]);
      }
      return answer && callback;
    },

    // Helper function which checks for blank inputs in a form that match the specified CSS selector
    blankInputs: function(form, specifiedSelector, nonBlank) {
      var inputs = $(), input, valueToCheck,
          selector = specifiedSelector || 'input,textarea',
          allInputs = form.find(selector);

      allInputs.each(function() {
        input = $(this);
        valueToCheck = input.is('input[type=checkbox],input[type=radio]') ? input.is(':checked') : input.val();
        // If nonBlank and valueToCheck are both truthy, or nonBlank and valueToCheck are both falsey
        if (!valueToCheck === !nonBlank) {

          // Don't count unchecked required radio if other radio with same name is checked
          if (input.is('input[type=radio]') && allInputs.filter('input[type=radio]:checked[name="' + input.attr('name') + '"]').length) {
            return true; // Skip to next input
          }

          inputs = inputs.add(input);
        }
      });
      return inputs.length ? inputs : false;
    },

    // Helper function which checks for non-blank inputs in a form that match the specified CSS selector
    nonBlankInputs: function(form, specifiedSelector) {
      return rails.blankInputs(form, specifiedSelector, true); // true specifies nonBlank
    },

    // Helper function, needed to provide consistent behavior in IE
    stopEverything: function(e) {
      $(e.target).trigger('ujs:everythingStopped');
      e.stopImmediatePropagation();
      return false;
    },

    //  replace element's html with the 'data-disable-with' after storing original html
    //  and prevent clicking on it
    disableElement: function(element) {
      var replacement = element.data('disable-with');

      element.data('ujs:enable-with', element.html()); // store enabled state
      if (replacement !== undefined) {
        element.html(replacement);
      }

      element.bind('click.railsDisable', function(e) { // prevent further clicking
        return rails.stopEverything(e);
      });
    },

    // restore element to its original state which was disabled by 'disableElement' above
    enableElement: function(element) {
      if (element.data('ujs:enable-with') !== undefined) {
        element.html(element.data('ujs:enable-with')); // set to old enabled state
        element.removeData('ujs:enable-with'); // clean up cache
      }
      element.unbind('click.railsDisable'); // enable element
    }
  };

  if (rails.fire($document, 'rails:attachBindings')) {

    $.ajaxPrefilter(function(options, originalOptions, xhr){ if ( !options.crossDomain ) { rails.CSRFProtection(xhr); }});

    $document.delegate(rails.linkDisableSelector, 'ajax:complete', function() {
        rails.enableElement($(this));
    });

    $document.delegate(rails.buttonDisableSelector, 'ajax:complete', function() {
        rails.enableFormElement($(this));
    });

    $document.delegate(rails.linkClickSelector, 'click.rails', function(e) {
      var link = $(this), method = link.data('method'), data = link.data('params'), metaClick = e.metaKey || e.ctrlKey;
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      if (!metaClick && link.is(rails.linkDisableSelector)) rails.disableElement(link);

      if (link.data('remote') !== undefined) {
        if (metaClick && (!method || method === 'GET') && !data) { return true; }

        var handleRemote = rails.handleRemote(link);
        // response from rails.handleRemote() will either be false or a deferred object promise.
        if (handleRemote === false) {
          rails.enableElement(link);
        } else {
          handleRemote.error( function() { rails.enableElement(link); } );
        }
        return false;

      } else if (link.data('method')) {
        rails.handleMethod(link);
        return false;
      }
    });

    $document.delegate(rails.buttonClickSelector, 'click.rails', function(e) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(e);

      if (button.is(rails.buttonDisableSelector)) rails.disableFormElement(button);

      var handleRemote = rails.handleRemote(button);
      // response from rails.handleRemote() will either be false or a deferred object promise.
      if (handleRemote === false) {
        rails.enableFormElement(button);
      } else {
        handleRemote.error( function() { rails.enableFormElement(button); } );
      }
      return false;
    });

    $document.delegate(rails.inputChangeSelector, 'change.rails', function(e) {
      var link = $(this);
      if (!rails.allowAction(link)) return rails.stopEverything(e);

      rails.handleRemote(link);
      return false;
    });

    $document.delegate(rails.formSubmitSelector, 'submit.rails', function(e) {
      var form = $(this),
        remote = form.data('remote') !== undefined,
        blankRequiredInputs,
        nonBlankFileInputs;

      if (!rails.allowAction(form)) return rails.stopEverything(e);

      // skip other logic when required values are missing or file upload is present
      if (form.attr('novalidate') == undefined) {
        blankRequiredInputs = rails.blankInputs(form, rails.requiredInputSelector);
        if (blankRequiredInputs && rails.fire(form, 'ajax:aborted:required', [blankRequiredInputs])) {
          return rails.stopEverything(e);
        }
      }

      if (remote) {
        nonBlankFileInputs = rails.nonBlankInputs(form, rails.fileInputSelector);
        if (nonBlankFileInputs) {
          // slight timeout so that the submit button gets properly serialized
          // (make it easy for event handler to serialize form without disabled values)
          setTimeout(function(){ rails.disableFormElements(form); }, 13);
          var aborted = rails.fire(form, 'ajax:aborted:file', [nonBlankFileInputs]);

          // re-enable form elements if event bindings return false (canceling normal form submission)
          if (!aborted) { setTimeout(function(){ rails.enableFormElements(form); }, 13); }

          return aborted;
        }

        rails.handleRemote(form);
        return false;

      } else {
        // slight timeout so that the submit button gets properly serialized
        setTimeout(function(){ rails.disableFormElements(form); }, 13);
      }
    });

    $document.delegate(rails.formInputClickSelector, 'click.rails', function(event) {
      var button = $(this);

      if (!rails.allowAction(button)) return rails.stopEverything(event);

      // register the pressed submit button
      var name = button.attr('name'),
        data = name ? {name:name, value:button.val()} : null;

      button.closest('form').data('ujs:submit-button', data);
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:send.rails', function(event) {
      if (this == event.target) rails.disableFormElements($(this));
    });

    $document.delegate(rails.formSubmitSelector, 'ajax:complete.rails', function(event) {
      if (this == event.target) rails.enableFormElements($(this));
    });

    $(function(){
      rails.refreshCSRFTokens();
    });
  }

})( jQuery );
(function() {
  var CSRFToken, Click, ComponentUrl, EVENTS, Link, ProgressBar, browserCompatibleDocumentParser, browserIsntBuggy, browserSupportsCustomEvents, browserSupportsPushState, browserSupportsTurbolinks, bypassOnLoadPopstate, cacheCurrentPage, cacheSize, changePage, clone, constrainPageCacheTo, createDocument, crossOriginRedirect, currentState, enableProgressBar, enableTransitionCache, executeScriptTags, extractTitleAndBody, fetch, fetchHistory, fetchReplacement, historyStateIsDefined, initializeTurbolinks, installDocumentReadyPageEventTriggers, installHistoryChangeHandler, installJqueryAjaxSuccessPageUpdateTrigger, loadedAssets, manuallyTriggerHashChangeForFirefox, pageCache, pageChangePrevented, pagesCached, popCookie, processResponse, progressBar, recallScrollPosition, referer, reflectNewUrl, reflectRedirectedUrl, rememberCurrentState, rememberCurrentUrl, rememberReferer, removeNoscriptTags, requestMethodIsSafe, resetScrollPosition, setAutofocusElement, transitionCacheEnabled, transitionCacheFor, triggerEvent, visit, xhr, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    __slice = [].slice,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  pageCache = {};

  cacheSize = 10;

  transitionCacheEnabled = false;

  progressBar = null;

  currentState = null;

  loadedAssets = null;

  referer = null;

  createDocument = null;

  xhr = null;

  EVENTS = {
    BEFORE_CHANGE: 'page:before-change',
    FETCH: 'page:fetch',
    RECEIVE: 'page:receive',
    CHANGE: 'page:change',
    UPDATE: 'page:update',
    LOAD: 'page:load',
    RESTORE: 'page:restore',
    BEFORE_UNLOAD: 'page:before-unload',
    EXPIRE: 'page:expire'
  };

  fetch = function(url) {
    var cachedPage;
    url = new ComponentUrl(url);
    rememberReferer();
    cacheCurrentPage();
    if (progressBar != null) {
      progressBar.start();
    }
    if (transitionCacheEnabled && (cachedPage = transitionCacheFor(url.absolute))) {
      fetchHistory(cachedPage);
      return fetchReplacement(url, null, false);
    } else {
      return fetchReplacement(url, resetScrollPosition);
    }
  };

  transitionCacheFor = function(url) {
    var cachedPage;
    cachedPage = pageCache[url];
    if (cachedPage && !cachedPage.transitionCacheDisabled) {
      return cachedPage;
    }
  };

  enableTransitionCache = function(enable) {
    if (enable == null) {
      enable = true;
    }
    return transitionCacheEnabled = enable;
  };

  enableProgressBar = function(enable) {
    if (enable == null) {
      enable = true;
    }
    if (enable) {
      return progressBar != null ? progressBar : progressBar = new ProgressBar('html');
    } else {
      if (progressBar != null) {
        progressBar.uninstall();
      }
      return progressBar = null;
    }
  };

  fetchReplacement = function(url, onLoadFunction, showProgressBar) {
    if (showProgressBar == null) {
      showProgressBar = true;
    }
    triggerEvent(EVENTS.FETCH, {
      url: url.absolute
    });
    if (xhr != null) {
      xhr.abort();
    }
    xhr = new XMLHttpRequest;
    xhr.open('GET', url.withoutHashForIE10compatibility(), true);
    xhr.setRequestHeader('Accept', 'text/html, application/xhtml+xml, application/xml');
    xhr.setRequestHeader('X-XHR-Referer', referer);
    xhr.onload = function() {
      var doc;
      triggerEvent(EVENTS.RECEIVE, {
        url: url.absolute
      });
      if (doc = processResponse()) {
        reflectNewUrl(url);
        reflectRedirectedUrl();
        changePage.apply(null, extractTitleAndBody(doc));
        manuallyTriggerHashChangeForFirefox();
        if (typeof onLoadFunction === "function") {
          onLoadFunction();
        }
        return triggerEvent(EVENTS.LOAD);
      } else {
        return document.location.href = crossOriginRedirect() || url.absolute;
      }
    };
    if (progressBar && showProgressBar) {
      xhr.onprogress = (function(_this) {
        return function(event) {
          var percent;
          percent = event.lengthComputable ? event.loaded / event.total * 100 : progressBar.value + (100 - progressBar.value) / 10;
          return progressBar.advanceTo(percent);
        };
      })(this);
    }
    xhr.onloadend = function() {
      return xhr = null;
    };
    xhr.onerror = function() {
      return document.location.href = url.absolute;
    };
    return xhr.send();
  };

  fetchHistory = function(cachedPage) {
    if (xhr != null) {
      xhr.abort();
    }
    changePage(cachedPage.title, cachedPage.body);
    recallScrollPosition(cachedPage);
    return triggerEvent(EVENTS.RESTORE);
  };

  cacheCurrentPage = function() {
    var currentStateUrl;
    currentStateUrl = new ComponentUrl(currentState.url);
    pageCache[currentStateUrl.absolute] = {
      url: currentStateUrl.relative,
      body: document.body,
      title: document.title,
      positionY: window.pageYOffset,
      positionX: window.pageXOffset,
      cachedAt: new Date().getTime(),
      transitionCacheDisabled: document.querySelector('[data-no-transition-cache]') != null
    };
    return constrainPageCacheTo(cacheSize);
  };

  pagesCached = function(size) {
    if (size == null) {
      size = cacheSize;
    }
    if (/^[\d]+$/.test(size)) {
      return cacheSize = parseInt(size);
    }
  };

  constrainPageCacheTo = function(limit) {
    var cacheTimesRecentFirst, key, pageCacheKeys, _i, _len, _results;
    pageCacheKeys = Object.keys(pageCache);
    cacheTimesRecentFirst = pageCacheKeys.map(function(url) {
      return pageCache[url].cachedAt;
    }).sort(function(a, b) {
      return b - a;
    });
    _results = [];
    for (_i = 0, _len = pageCacheKeys.length; _i < _len; _i++) {
      key = pageCacheKeys[_i];
      if (!(pageCache[key].cachedAt <= cacheTimesRecentFirst[limit])) {
        continue;
      }
      triggerEvent(EVENTS.EXPIRE, pageCache[key]);
      _results.push(delete pageCache[key]);
    }
    return _results;
  };

  changePage = function(title, body, csrfToken, runScripts) {
    triggerEvent(EVENTS.BEFORE_UNLOAD);
    document.title = title;
    document.documentElement.replaceChild(body, document.body);
    if (csrfToken != null) {
      CSRFToken.update(csrfToken);
    }
    setAutofocusElement();
    if (runScripts) {
      executeScriptTags();
    }
    currentState = window.history.state;
    if (progressBar != null) {
      progressBar.done();
    }
    triggerEvent(EVENTS.CHANGE);
    return triggerEvent(EVENTS.UPDATE);
  };

  executeScriptTags = function() {
    var attr, copy, nextSibling, parentNode, script, scripts, _i, _j, _len, _len1, _ref, _ref1;
    scripts = Array.prototype.slice.call(document.body.querySelectorAll('script:not([data-turbolinks-eval="false"])'));
    for (_i = 0, _len = scripts.length; _i < _len; _i++) {
      script = scripts[_i];
      if (!((_ref = script.type) === '' || _ref === 'text/javascript')) {
        continue;
      }
      copy = document.createElement('script');
      _ref1 = script.attributes;
      for (_j = 0, _len1 = _ref1.length; _j < _len1; _j++) {
        attr = _ref1[_j];
        copy.setAttribute(attr.name, attr.value);
      }
      if (!script.hasAttribute('async')) {
        copy.async = false;
      }
      copy.appendChild(document.createTextNode(script.innerHTML));
      parentNode = script.parentNode, nextSibling = script.nextSibling;
      parentNode.removeChild(script);
      parentNode.insertBefore(copy, nextSibling);
    }
  };

  removeNoscriptTags = function(node) {
    node.innerHTML = node.innerHTML.replace(/<noscript[\S\s]*?<\/noscript>/ig, '');
    return node;
  };

  setAutofocusElement = function() {
    var autofocusElement, list;
    autofocusElement = (list = document.querySelectorAll('input[autofocus], textarea[autofocus]'))[list.length - 1];
    if (autofocusElement && document.activeElement !== autofocusElement) {
      return autofocusElement.focus();
    }
  };

  reflectNewUrl = function(url) {
    if ((url = new ComponentUrl(url)).absolute !== referer) {
      return window.history.pushState({
        turbolinks: true,
        url: url.absolute
      }, '', url.absolute);
    }
  };

  reflectRedirectedUrl = function() {
    var location, preservedHash;
    if (location = xhr.getResponseHeader('X-XHR-Redirected-To')) {
      location = new ComponentUrl(location);
      preservedHash = location.hasNoHash() ? document.location.hash : '';
      return window.history.replaceState(currentState, '', location.href + preservedHash);
    }
  };

  crossOriginRedirect = function() {
    var redirect;
    if (((redirect = xhr.getResponseHeader('Location')) != null) && (new ComponentUrl(redirect)).crossOrigin()) {
      return redirect;
    }
  };

  rememberReferer = function() {
    return referer = document.location.href;
  };

  rememberCurrentUrl = function() {
    return window.history.replaceState({
      turbolinks: true,
      url: document.location.href
    }, '', document.location.href);
  };

  rememberCurrentState = function() {
    return currentState = window.history.state;
  };

  manuallyTriggerHashChangeForFirefox = function() {
    var url;
    if (navigator.userAgent.match(/Firefox/) && !(url = new ComponentUrl).hasNoHash()) {
      window.history.replaceState(currentState, '', url.withoutHash());
      return document.location.hash = url.hash;
    }
  };

  recallScrollPosition = function(page) {
    return window.scrollTo(page.positionX, page.positionY);
  };

  resetScrollPosition = function() {
    if (document.location.hash) {
      return document.location.href = document.location.href;
    } else {
      return window.scrollTo(0, 0);
    }
  };

  clone = function(original) {
    var copy, key, value;
    if ((original == null) || typeof original !== 'object') {
      return original;
    }
    copy = new original.constructor();
    for (key in original) {
      value = original[key];
      copy[key] = clone(value);
    }
    return copy;
  };

  popCookie = function(name) {
    var value, _ref;
    value = ((_ref = document.cookie.match(new RegExp(name + "=(\\w+)"))) != null ? _ref[1].toUpperCase() : void 0) || '';
    document.cookie = name + '=; expires=Thu, 01-Jan-70 00:00:01 GMT; path=/';
    return value;
  };

  triggerEvent = function(name, data) {
    var event;
    if (typeof Prototype !== 'undefined') {
      Event.fire(document, name, data, true);
    }
    event = document.createEvent('Events');
    if (data) {
      event.data = data;
    }
    event.initEvent(name, true, true);
    return document.dispatchEvent(event);
  };

  pageChangePrevented = function(url) {
    return !triggerEvent(EVENTS.BEFORE_CHANGE, {
      url: url
    });
  };

  processResponse = function() {
    var assetsChanged, clientOrServerError, doc, extractTrackAssets, intersection, validContent;
    clientOrServerError = function() {
      var _ref;
      return (400 <= (_ref = xhr.status) && _ref < 600);
    };
    validContent = function() {
      var contentType;
      return ((contentType = xhr.getResponseHeader('Content-Type')) != null) && contentType.match(/^(?:text\/html|application\/xhtml\+xml|application\/xml)(?:;|$)/);
    };
    extractTrackAssets = function(doc) {
      var node, _i, _len, _ref, _results;
      _ref = doc.querySelector('head').childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        node = _ref[_i];
        if ((typeof node.getAttribute === "function" ? node.getAttribute('data-turbolinks-track') : void 0) != null) {
          _results.push(node.getAttribute('src') || node.getAttribute('href'));
        }
      }
      return _results;
    };
    assetsChanged = function(doc) {
      var fetchedAssets;
      loadedAssets || (loadedAssets = extractTrackAssets(document));
      fetchedAssets = extractTrackAssets(doc);
      return fetchedAssets.length !== loadedAssets.length || intersection(fetchedAssets, loadedAssets).length !== loadedAssets.length;
    };
    intersection = function(a, b) {
      var value, _i, _len, _ref, _results;
      if (a.length > b.length) {
        _ref = [b, a], a = _ref[0], b = _ref[1];
      }
      _results = [];
      for (_i = 0, _len = a.length; _i < _len; _i++) {
        value = a[_i];
        if (__indexOf.call(b, value) >= 0) {
          _results.push(value);
        }
      }
      return _results;
    };
    if (!clientOrServerError() && validContent()) {
      doc = createDocument(xhr.responseText);
      if (doc && !assetsChanged(doc)) {
        return doc;
      }
    }
  };

  extractTitleAndBody = function(doc) {
    var title;
    title = doc.querySelector('title');
    return [title != null ? title.textContent : void 0, removeNoscriptTags(doc.querySelector('body')), CSRFToken.get(doc).token, 'runScripts'];
  };

  CSRFToken = {
    get: function(doc) {
      var tag;
      if (doc == null) {
        doc = document;
      }
      return {
        node: tag = doc.querySelector('meta[name="csrf-token"]'),
        token: tag != null ? typeof tag.getAttribute === "function" ? tag.getAttribute('content') : void 0 : void 0
      };
    },
    update: function(latest) {
      var current;
      current = this.get();
      if ((current.token != null) && (latest != null) && current.token !== latest) {
        return current.node.setAttribute('content', latest);
      }
    }
  };

  browserCompatibleDocumentParser = function() {
    var buildTestsUsing, createDocumentUsingDOM, createDocumentUsingFragment, createDocumentUsingParser, createDocumentUsingWrite, docTest, docTests, e, _i, _len;
    createDocumentUsingParser = function(html) {
      return (new DOMParser).parseFromString(html, 'text/html');
    };
    createDocumentUsingDOM = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.documentElement.innerHTML = html;
      return doc;
    };
    createDocumentUsingWrite = function(html) {
      var doc;
      doc = document.implementation.createHTMLDocument('');
      doc.open('replace');
      doc.write(html);
      doc.close();
      return doc;
    };
    createDocumentUsingFragment = function(html) {
      var body, doc, head, htmlWrapper, _ref, _ref1;
      head = ((_ref = html.match(/<head[^>]*>([\s\S.]*)<\/head>/i)) != null ? _ref[0] : void 0) || '<head></head>';
      body = ((_ref1 = html.match(/<body[^>]*>([\s\S.]*)<\/body>/i)) != null ? _ref1[0] : void 0) || '<body></body>';
      htmlWrapper = document.createElement('html');
      htmlWrapper.innerHTML = head + body;
      doc = document.createDocumentFragment();
      doc.appendChild(htmlWrapper);
      return doc;
    };
    buildTestsUsing = function(createMethod) {
      var buildTest, formNestingTest, structureTest;
      buildTest = function(fallback, passes) {
        return {
          passes: passes(),
          fallback: fallback
        };
      };
      structureTest = buildTest(createDocumentUsingWrite, (function(_this) {
        return function() {
          var _ref, _ref1;
          return ((_ref = createMethod('<html><body><p>test')) != null ? (_ref1 = _ref.body) != null ? _ref1.childNodes.length : void 0 : void 0) === 1;
        };
      })(this));
      formNestingTest = buildTest(createDocumentUsingFragment, (function(_this) {
        return function() {
          var _ref, _ref1;
          return ((_ref = createMethod('<html><body><form></form><div></div></body></html>')) != null ? (_ref1 = _ref.body) != null ? _ref1.childNodes.length : void 0 : void 0) === 2;
        };
      })(this));
      return [structureTest, formNestingTest];
    };
    try {
      if (window.DOMParser) {
        docTests = buildTestsUsing(createDocumentUsingParser);
        return createDocumentUsingParser;
      }
    } catch (_error) {
      e = _error;
      docTests = buildTestsUsing(createDocumentUsingDOM);
      return createDocumentUsingDOM;
    } finally {
      for (_i = 0, _len = docTests.length; _i < _len; _i++) {
        docTest = docTests[_i];
        if (!docTest.passes) {
          return docTest.fallback;
        }
      }
    }
  };

  ComponentUrl = (function() {
    function ComponentUrl(original) {
      this.original = original != null ? original : document.location.href;
      if (this.original.constructor === ComponentUrl) {
        return this.original;
      }
      this._parse();
    }

    ComponentUrl.prototype.withoutHash = function() {
      return this.href.replace(this.hash, '').replace('#', '');
    };

    ComponentUrl.prototype.withoutHashForIE10compatibility = function() {
      return this.withoutHash();
    };

    ComponentUrl.prototype.hasNoHash = function() {
      return this.hash.length === 0;
    };

    ComponentUrl.prototype.crossOrigin = function() {
      return this.origin !== (new ComponentUrl).origin;
    };

    ComponentUrl.prototype._parse = function() {
      var _ref;
      (this.link != null ? this.link : this.link = document.createElement('a')).href = this.original;
      _ref = this.link, this.href = _ref.href, this.protocol = _ref.protocol, this.host = _ref.host, this.hostname = _ref.hostname, this.port = _ref.port, this.pathname = _ref.pathname, this.search = _ref.search, this.hash = _ref.hash;
      this.origin = [this.protocol, '//', this.hostname].join('');
      if (this.port.length !== 0) {
        this.origin += ":" + this.port;
      }
      this.relative = [this.pathname, this.search, this.hash].join('');
      return this.absolute = this.href;
    };

    return ComponentUrl;

  })();

  Link = (function(_super) {
    __extends(Link, _super);

    Link.HTML_EXTENSIONS = ['html'];

    Link.allowExtensions = function() {
      var extension, extensions, _i, _len;
      extensions = 1 <= arguments.length ? __slice.call(arguments, 0) : [];
      for (_i = 0, _len = extensions.length; _i < _len; _i++) {
        extension = extensions[_i];
        Link.HTML_EXTENSIONS.push(extension);
      }
      return Link.HTML_EXTENSIONS;
    };

    function Link(link) {
      this.link = link;
      if (this.link.constructor === Link) {
        return this.link;
      }
      this.original = this.link.href;
      this.originalElement = this.link;
      this.link = this.link.cloneNode(false);
      Link.__super__.constructor.apply(this, arguments);
    }

    Link.prototype.shouldIgnore = function() {
      return this.crossOrigin() || this._anchored() || this._nonHtml() || this._optOut() || this._target();
    };

    Link.prototype._anchored = function() {
      return (this.hash.length > 0 || this.href.charAt(this.href.length - 1) === '#') && (this.withoutHash() === (new ComponentUrl).withoutHash());
    };

    Link.prototype._nonHtml = function() {
      return this.pathname.match(/\.[a-z]+$/g) && !this.pathname.match(new RegExp("\\.(?:" + (Link.HTML_EXTENSIONS.join('|')) + ")?$", 'g'));
    };

    Link.prototype._optOut = function() {
      var ignore, link;
      link = this.originalElement;
      while (!(ignore || link === document)) {
        ignore = link.getAttribute('data-no-turbolink') != null;
        link = link.parentNode;
      }
      return ignore;
    };

    Link.prototype._target = function() {
      return this.link.target.length !== 0;
    };

    return Link;

  })(ComponentUrl);

  Click = (function() {
    Click.installHandlerLast = function(event) {
      if (!event.defaultPrevented) {
        document.removeEventListener('click', Click.handle, false);
        return document.addEventListener('click', Click.handle, false);
      }
    };

    Click.handle = function(event) {
      return new Click(event);
    };

    function Click(event) {
      this.event = event;
      if (this.event.defaultPrevented) {
        return;
      }
      this._extractLink();
      if (this._validForTurbolinks()) {
        if (!pageChangePrevented(this.link.absolute)) {
          visit(this.link.href);
        }
        this.event.preventDefault();
      }
    }

    Click.prototype._extractLink = function() {
      var link;
      link = this.event.target;
      while (!(!link.parentNode || link.nodeName === 'A')) {
        link = link.parentNode;
      }
      if (link.nodeName === 'A' && link.href.length !== 0) {
        return this.link = new Link(link);
      }
    };

    Click.prototype._validForTurbolinks = function() {
      return (this.link != null) && !(this.link.shouldIgnore() || this._nonStandardClick());
    };

    Click.prototype._nonStandardClick = function() {
      return this.event.which > 1 || this.event.metaKey || this.event.ctrlKey || this.event.shiftKey || this.event.altKey;
    };

    return Click;

  })();

  ProgressBar = (function() {
    var className;

    className = 'turbolinks-progress-bar';

    function ProgressBar(elementSelector) {
      this.elementSelector = elementSelector;
      this._trickle = __bind(this._trickle, this);
      this.value = 0;
      this.opacity = 1;
      this.content = '';
      this.speed = 300;
      this.install();
    }

    ProgressBar.prototype.install = function() {
      this.element = document.querySelector(this.elementSelector);
      this.element.classList.add(className);
      this.styleElement = document.createElement('style');
      document.head.appendChild(this.styleElement);
      return this._updateStyle();
    };

    ProgressBar.prototype.uninstall = function() {
      this.element.classList.remove(className);
      return document.head.removeChild(this.styleElement);
    };

    ProgressBar.prototype.start = function() {
      return this.advanceTo(5);
    };

    ProgressBar.prototype.advanceTo = function(value) {
      var _ref;
      if ((value > (_ref = this.value) && _ref <= 100)) {
        this.value = value;
        this._updateStyle();
        if (this.value === 100) {
          return this._stopTrickle();
        } else if (this.value > 0) {
          return this._startTrickle();
        }
      }
    };

    ProgressBar.prototype.done = function() {
      if (this.value > 0) {
        this.advanceTo(100);
        return this._reset();
      }
    };

    ProgressBar.prototype._reset = function() {
      setTimeout((function(_this) {
        return function() {
          _this.opacity = 0;
          return _this._updateStyle();
        };
      })(this), this.speed / 2);
      return setTimeout((function(_this) {
        return function() {
          _this.value = 0;
          _this.opacity = 1;
          return _this._withSpeed(0, function() {
            return _this._updateStyle(true);
          });
        };
      })(this), this.speed);
    };

    ProgressBar.prototype._startTrickle = function() {
      if (this.trickling) {
        return;
      }
      this.trickling = true;
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._stopTrickle = function() {
      return delete this.trickling;
    };

    ProgressBar.prototype._trickle = function() {
      if (!this.trickling) {
        return;
      }
      this.advanceTo(this.value + Math.random() / 2);
      return setTimeout(this._trickle, this.speed);
    };

    ProgressBar.prototype._withSpeed = function(speed, fn) {
      var originalSpeed, result;
      originalSpeed = this.speed;
      this.speed = speed;
      result = fn();
      this.speed = originalSpeed;
      return result;
    };

    ProgressBar.prototype._updateStyle = function(forceRepaint) {
      if (forceRepaint == null) {
        forceRepaint = false;
      }
      if (forceRepaint) {
        this._changeContentToForceRepaint();
      }
      return this.styleElement.textContent = this._createCSSRule();
    };

    ProgressBar.prototype._changeContentToForceRepaint = function() {
      return this.content = this.content === '' ? ' ' : '';
    };

    ProgressBar.prototype._createCSSRule = function() {
      return "" + this.elementSelector + "." + className + "::before {\n  content: '" + this.content + "';\n  position: fixed;\n  top: 0;\n  left: 0;\n  background-color: #0076ff;\n  height: 3px;\n  opacity: " + this.opacity + ";\n  width: " + this.value + "%;\n  transition: width " + this.speed + "ms ease-out, opacity " + (this.speed / 2) + "ms ease-in;\n  transform: translate3d(0,0,0);\n}";
    };

    return ProgressBar;

  })();

  bypassOnLoadPopstate = function(fn) {
    return setTimeout(fn, 500);
  };

  installDocumentReadyPageEventTriggers = function() {
    return document.addEventListener('DOMContentLoaded', (function() {
      triggerEvent(EVENTS.CHANGE);
      return triggerEvent(EVENTS.UPDATE);
    }), true);
  };

  installJqueryAjaxSuccessPageUpdateTrigger = function() {
    if (typeof jQuery !== 'undefined') {
      return jQuery(document).on('ajaxSuccess', function(event, xhr, settings) {
        if (!jQuery.trim(xhr.responseText)) {
          return;
        }
        return triggerEvent(EVENTS.UPDATE);
      });
    }
  };

  installHistoryChangeHandler = function(event) {
    var cachedPage, _ref;
    if ((_ref = event.state) != null ? _ref.turbolinks : void 0) {
      if (cachedPage = pageCache[(new ComponentUrl(event.state.url)).absolute]) {
        cacheCurrentPage();
        return fetchHistory(cachedPage);
      } else {
        return visit(event.target.location.href);
      }
    }
  };

  initializeTurbolinks = function() {
    rememberCurrentUrl();
    rememberCurrentState();
    createDocument = browserCompatibleDocumentParser();
    document.addEventListener('click', Click.installHandlerLast, true);
    window.addEventListener('hashchange', function(event) {
      rememberCurrentUrl();
      return rememberCurrentState();
    }, false);
    return bypassOnLoadPopstate(function() {
      return window.addEventListener('popstate', installHistoryChangeHandler, false);
    });
  };

  historyStateIsDefined = window.history.state !== void 0 || navigator.userAgent.match(/Firefox\/2[6|7]/);

  browserSupportsPushState = window.history && window.history.pushState && window.history.replaceState && historyStateIsDefined;

  browserIsntBuggy = !navigator.userAgent.match(/CriOS\//);

  requestMethodIsSafe = (_ref = popCookie('request_method')) === 'GET' || _ref === '';

  browserSupportsTurbolinks = browserSupportsPushState && browserIsntBuggy && requestMethodIsSafe;

  browserSupportsCustomEvents = document.addEventListener && document.createEvent;

  if (browserSupportsCustomEvents) {
    installDocumentReadyPageEventTriggers();
    installJqueryAjaxSuccessPageUpdateTrigger();
  }

  if (browserSupportsTurbolinks) {
    visit = fetch;
    initializeTurbolinks();
  } else {
    visit = function(url) {
      return document.location.href = url;
    };
  }

  this.Turbolinks = {
    visit: visit,
    pagesCached: pagesCached,
    enableTransitionCache: enableTransitionCache,
    enableProgressBar: enableProgressBar,
    allowLinkExtensions: Link.allowExtensions,
    supported: browserSupportsTurbolinks,
    EVENTS: clone(EVENTS)
  };

}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
(function() {


}).call(this);
/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */

function FastClick(a,b){"use strict";function c(a,b){return function(){return a.apply(b,arguments)}}var d;if(b=b||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=b.touchBoundary||10,this.layer=a,this.tapDelay=b.tapDelay||200,!FastClick.notNeeded(a)){for(var e=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],f=this,g=0,h=e.length;h>g;g++)f[e[g]]=c(f[e[g]],f);deviceIsAndroid&&(a.addEventListener("mouseover",this.onMouse,!0),a.addEventListener("mousedown",this.onMouse,!0),a.addEventListener("mouseup",this.onMouse,!0)),a.addEventListener("click",this.onClick,!0),a.addEventListener("touchstart",this.onTouchStart,!1),a.addEventListener("touchmove",this.onTouchMove,!1),a.addEventListener("touchend",this.onTouchEnd,!1),a.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(a.removeEventListener=function(b,c,d){var e=Node.prototype.removeEventListener;"click"===b?e.call(a,b,c.hijacked||c,d):e.call(a,b,c,d)},a.addEventListener=function(b,c,d){var e=Node.prototype.addEventListener;"click"===b?e.call(a,b,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(a,b,c,d)}),"function"==typeof a.onclick&&(d=a.onclick,a.addEventListener("click",function(a){d(a)},!1),a.onclick=null)}}var deviceIsAndroid=navigator.userAgent.indexOf("Android")>0,deviceIsIOS=/iP(ad|hone|od)/.test(navigator.userAgent),deviceIsIOS4=deviceIsIOS&&/OS 4_\d(_\d)?/.test(navigator.userAgent),deviceIsIOSWithBadTarget=deviceIsIOS&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent),deviceIsBlackBerry10=navigator.userAgent.indexOf("BB10")>0;FastClick.prototype.needsClick=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(deviceIsIOS&&"file"===a.type||a.disabled)return!0;break;case"label":case"video":return!0}return/\bneedsclick\b/.test(a.className)},FastClick.prototype.needsFocus=function(a){"use strict";switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!deviceIsAndroid;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},FastClick.prototype.sendClick=function(a,b){"use strict";var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},FastClick.prototype.determineEventType=function(a){"use strict";return deviceIsAndroid&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},FastClick.prototype.focus=function(a){"use strict";var b;deviceIsIOS&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},FastClick.prototype.updateScrollParent=function(a){"use strict";var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},FastClick.prototype.getTargetElementFromEventTarget=function(a){"use strict";return a.nodeType===Node.TEXT_NODE?a.parentNode:a},FastClick.prototype.onTouchStart=function(a){"use strict";var b,c,d;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],deviceIsIOS){if(d=window.getSelection(),d.rangeCount&&!d.isCollapsed)return!0;if(!deviceIsIOS4){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},FastClick.prototype.touchHasMoved=function(a){"use strict";var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c?!0:!1},FastClick.prototype.onTouchMove=function(a){"use strict";return this.trackingClick?((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0):!0},FastClick.prototype.findControl=function(a){"use strict";return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},FastClick.prototype.onTouchEnd=function(a){"use strict";var b,c,d,e,f,g=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,c=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,deviceIsIOSWithBadTarget&&(f=a.changedTouches[0],g=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||g,g.fastClickScrollParent=this.targetElement.fastClickScrollParent),d=g.tagName.toLowerCase(),"label"===d){if(b=this.findControl(g)){if(this.focus(g),deviceIsAndroid)return!1;g=b}}else if(this.needsFocus(g))return a.timeStamp-c>100||deviceIsIOS&&window.top!==window&&"input"===d?(this.targetElement=null,!1):(this.focus(g),this.sendClick(g,a),deviceIsIOS&&"select"===d||(this.targetElement=null,a.preventDefault()),!1);return deviceIsIOS&&!deviceIsIOS4&&(e=g.fastClickScrollParent,e&&e.fastClickLastScrollTop!==e.scrollTop)?!0:(this.needsClick(g)||(a.preventDefault(),this.sendClick(g,a)),!1)},FastClick.prototype.onTouchCancel=function(){"use strict";this.trackingClick=!1,this.targetElement=null},FastClick.prototype.onMouse=function(a){"use strict";return this.targetElement?a.forwardedTouchEvent?!0:a.cancelable&&(!this.needsClick(this.targetElement)||this.cancelNextClick)?(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1):!0:!0},FastClick.prototype.onClick=function(a){"use strict";var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail?!0:(b=this.onMouse(a),b||(this.targetElement=null),b)},FastClick.prototype.destroy=function(){"use strict";var a=this.layer;deviceIsAndroid&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},FastClick.notNeeded=function(a){"use strict";var b,c,d;if("undefined"==typeof window.ontouchstart)return!0;if(c=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!deviceIsAndroid)return!0;if(b=document.querySelector("meta[name=viewport]")){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(c>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(deviceIsBlackBerry10&&(d=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),d[1]>=10&&d[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(-1!==b.content.indexOf("user-scalable=no"))return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction?!0:!1},FastClick.attach=function(a,b){"use strict";return new FastClick(a,b)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){"use strict";return FastClick}):"undefined"!=typeof module&&module.exports?(module.exports=FastClick.attach,module.exports.FastClick=FastClick):window.FastClick=FastClick;
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/


(function ($, window, document, undefined) {
  'use strict';

  var header_helpers = function (class_array) {
    var i = class_array.length;
    var head = $('head');

    while (i--) {
      if(head.has('.' + class_array[i]).length === 0) {
        head.append('<meta class="' + class_array[i] + '" />');
      }
    }
  };

  header_helpers([
    'foundation-mq-small',
    'foundation-mq-medium',
    'foundation-mq-large',
    'foundation-mq-xlarge',
    'foundation-mq-xxlarge',
    'foundation-data-attribute-namespace']);

  // Enable FastClick if present

  $(function() {
    if (typeof FastClick !== 'undefined') {
      // Don't attach to body if undefined
      if (typeof document.body !== 'undefined') {
        FastClick.attach(document.body);
      }
    }
  });

  // private Fast Selector wrapper,
  // returns jQuery object. Only use where
  // getElementById is not available.
  var S = function (selector, context) {
    if (typeof selector === 'string') {
      if (context) {
        var cont;
        if (context.jquery) {
          cont = context[0];
          if (!cont) return context;
        } else {
          cont = context;
        }
        return $(cont.querySelectorAll(selector));
      }

      return $(document.querySelectorAll(selector));
    }

    return $(selector, context);
  };

  // Namespace functions.

  var attr_name = function (init) {
    var arr = [];
    if (!init) arr.push('data');
    if (this.namespace.length > 0) arr.push(this.namespace);
    arr.push(this.name);

    return arr.join('-');
  };

  var add_namespace = function (str) {
    var parts = str.split('-'),
        i = parts.length,
        arr = [];

    while (i--) {
      if (i !== 0) {
        arr.push(parts[i]);
      } else {
        if (this.namespace.length > 0) {
          arr.push(this.namespace, parts[i]);
        } else {
          arr.push(parts[i]);
        }
      }
    }

    return arr.reverse().join('-');
  };

  // Event binding and data-options updating.

  var bindings = function (method, options) {
    var self = this,
        should_bind_events = !S(this).data(this.attr_name(true));


    if (S(this.scope).is('[' + this.attr_name() +']')) {
      S(this.scope).data(this.attr_name(true) + '-init', $.extend({}, this.settings, (options || method), this.data_options(S(this.scope))));

      if (should_bind_events) {
        this.events(this.scope);
      }

    } else {
      S('[' + this.attr_name() +']', this.scope).each(function () {
        var should_bind_events = !S(this).data(self.attr_name(true) + '-init');
        S(this).data(self.attr_name(true) + '-init', $.extend({}, self.settings, (options || method), self.data_options(S(this))));

        if (should_bind_events) {
          self.events(this);
        }
      });
    }
    // # Patch to fix #5043 to move this *after* the if/else clause in order for Backbone and similar frameworks to have improved control over event binding and data-options updating.
    if (typeof method === 'string') {
      return this[method].call(this, options);
    }

  };

  var single_image_loaded = function (image, callback) {
    function loaded () {
      callback(image[0]);
    }

    function bindLoad () {
      this.one('load', loaded);

      if (/MSIE (\d+\.\d+);/.test(navigator.userAgent)) {
        var src = this.attr( 'src' ),
            param = src.match( /\?/ ) ? '&' : '?';

        param += 'random=' + (new Date()).getTime();
        this.attr('src', src + param);
      }
    }

    if (!image.attr('src')) {
      loaded();
      return;
    }

    if (image[0].complete || image[0].readyState === 4) {
      loaded();
    } else {
      bindLoad.call(image);
    }
  };

  /*
    https://github.com/paulirish/matchMedia.js
  */

  window.matchMedia = window.matchMedia || (function( doc ) {

    "use strict";

    var bool,
        docElem = doc.documentElement,
        refNode = docElem.firstElementChild || docElem.firstChild,
        // fakeBody required for <FF4 when executed in <head>
        fakeBody = doc.createElement( "body" ),
        div = doc.createElement( "div" );

    div.id = "mq-test-1";
    div.style.cssText = "position:absolute;top:-100em";
    fakeBody.style.background = "none";
    fakeBody.appendChild(div);

    return function (q) {

      div.innerHTML = "&shy;<style media=\"" + q + "\"> #mq-test-1 { width: 42px; }</style>";

      docElem.insertBefore( fakeBody, refNode );
      bool = div.offsetWidth === 42;
      docElem.removeChild( fakeBody );

      return {
        matches: bool,
        media: q
      };

    };

  }( document ));

  /*
   * jquery.requestAnimationFrame
   * https://github.com/gnarf37/jquery-requestAnimationFrame
   * Requires jQuery 1.8+
   *
   * Copyright (c) 2012 Corey Frang
   * Licensed under the MIT license.
   */

  (function($) {

  // requestAnimationFrame polyfill adapted from Erik Möller
  // fixes from Paul Irish and Tino Zijdel
  // http://paulirish.com/2011/requestanimationframe-for-smart-animating/
  // http://my.opera.com/emoller/blog/2011/12/20/requestanimationframe-for-smart-er-animating

  var animating,
      lastTime = 0,
      vendors = ['webkit', 'moz'],
      requestAnimationFrame = window.requestAnimationFrame,
      cancelAnimationFrame = window.cancelAnimationFrame,
      jqueryFxAvailable = 'undefined' !== typeof jQuery.fx;

  for (; lastTime < vendors.length && !requestAnimationFrame; lastTime++) {
    requestAnimationFrame = window[ vendors[lastTime] + "RequestAnimationFrame" ];
    cancelAnimationFrame = cancelAnimationFrame ||
      window[ vendors[lastTime] + "CancelAnimationFrame" ] ||
      window[ vendors[lastTime] + "CancelRequestAnimationFrame" ];
  }

  function raf() {
    if (animating) {
      requestAnimationFrame(raf);

      if (jqueryFxAvailable) {
        jQuery.fx.tick();
      }
    }
  }

  if (requestAnimationFrame) {
    // use rAF
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;

    if (jqueryFxAvailable) {
      jQuery.fx.timer = function (timer) {
        if (timer() && jQuery.timers.push(timer) && !animating) {
          animating = true;
          raf();
        }
      };

      jQuery.fx.stop = function () {
        animating = false;
      };
    }
  } else {
    // polyfill
    window.requestAnimationFrame = function (callback) {
      var currTime = new Date().getTime(),
        timeToCall = Math.max(0, 16 - (currTime - lastTime)),
        id = window.setTimeout(function () {
          callback(currTime + timeToCall);
        }, timeToCall);
      lastTime = currTime + timeToCall;
      return id;
    };

    window.cancelAnimationFrame = function (id) {
      clearTimeout(id);
    };

  }

  }( jQuery ));


  function removeQuotes (string) {
    if (typeof string === 'string' || string instanceof String) {
      string = string.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g, '');
    }

    return string;
  }

  window.Foundation = {
    name : 'Foundation',

    version : '5.4.5',

    media_queries : {
      small : S('.foundation-mq-small').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      medium : S('.foundation-mq-medium').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      large : S('.foundation-mq-large').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      xlarge: S('.foundation-mq-xlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, ''),
      xxlarge: S('.foundation-mq-xxlarge').css('font-family').replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g, '')
    },

    stylesheet : $('<style></style>').appendTo('head')[0].sheet,

    global: {
      namespace: undefined
    },

    init : function (scope, libraries, method, options, response) {
      var args = [scope, method, options, response],
          responses = [];

      // check RTL
      this.rtl = /rtl/i.test(S('html').attr('dir'));

      // set foundation global scope
      this.scope = scope || this.scope;

      this.set_namespace();

      if (libraries && typeof libraries === 'string' && !/reflow/i.test(libraries)) {
        if (this.libs.hasOwnProperty(libraries)) {
          responses.push(this.init_lib(libraries, args));
        }
      } else {
        for (var lib in this.libs) {
          responses.push(this.init_lib(lib, libraries));
        }
      }

      S(window).load(function(){
        S(window)
          .trigger('resize.fndtn.clearing')
          .trigger('resize.fndtn.dropdown')
          .trigger('resize.fndtn.equalizer')
          .trigger('resize.fndtn.interchange')
          .trigger('resize.fndtn.joyride')
          .trigger('resize.fndtn.magellan')
          .trigger('resize.fndtn.topbar')
          .trigger('resize.fndtn.slider');
      });

      return scope;
    },

    init_lib : function (lib, args) {
      if (this.libs.hasOwnProperty(lib)) {
        this.patch(this.libs[lib]);

        if (args && args.hasOwnProperty(lib)) {
            if (typeof this.libs[lib].settings !== 'undefined') {
                $.extend(true, this.libs[lib].settings, args[lib]);
            }
            else if (typeof this.libs[lib].defaults !== 'undefined') {
                $.extend(true, this.libs[lib].defaults, args[lib]);
            }
          return this.libs[lib].init.apply(this.libs[lib], [this.scope, args[lib]]);
        }

        args = args instanceof Array ? args : new Array(args);    // PATCH: added this line
        return this.libs[lib].init.apply(this.libs[lib], args);
      }

      return function () {};
    },

    patch : function (lib) {
      lib.scope = this.scope;
      lib.namespace = this.global.namespace;
      lib.rtl = this.rtl;
      lib['data_options'] = this.utils.data_options;
      lib['attr_name'] = attr_name;
      lib['add_namespace'] = add_namespace;
      lib['bindings'] = bindings;
      lib['S'] = this.utils.S;
    },

    inherit : function (scope, methods) {
      var methods_arr = methods.split(' '),
          i = methods_arr.length;

      while (i--) {
        if (this.utils.hasOwnProperty(methods_arr[i])) {
          scope[methods_arr[i]] = this.utils[methods_arr[i]];
        }
      }
    },

    set_namespace: function () {

      // Description:
      //    Don't bother reading the namespace out of the meta tag
      //    if the namespace has been set globally in javascript
      //
      // Example:
      //    Foundation.global.namespace = 'my-namespace';
      // or make it an empty string:
      //    Foundation.global.namespace = '';
      //
      //

      // If the namespace has not been set (is undefined), try to read it out of the meta element.
      // Otherwise use the globally defined namespace, even if it's empty ('')
      var namespace = ( this.global.namespace === undefined ) ? $('.foundation-data-attribute-namespace').css('font-family') : this.global.namespace;

      // Finally, if the namsepace is either undefined or false, set it to an empty string.
      // Otherwise use the namespace value.
      this.global.namespace = ( namespace === undefined || /false/i.test(namespace) ) ? '' : namespace;
    },

    libs : {},

    // methods that can be inherited in libraries
    utils : {

      // Description:
      //    Fast Selector wrapper returns jQuery object. Only use where getElementById
      //    is not available.
      //
      // Arguments:
      //    Selector (String): CSS selector describing the element(s) to be
      //    returned as a jQuery object.
      //
      //    Scope (String): CSS selector describing the area to be searched. Default
      //    is document.
      //
      // Returns:
      //    Element (jQuery Object): jQuery object containing elements matching the
      //    selector within the scope.
      S : S,

      // Description:
      //    Executes a function a max of once every n milliseconds
      //
      // Arguments:
      //    Func (Function): Function to be throttled.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      // Returns:
      //    Lazy_function (Function): Function with throttling applied.
      throttle : function (func, delay) {
        var timer = null;

        return function () {
          var context = this, args = arguments;

          if (timer == null) {
            timer = setTimeout(function () {
              func.apply(context, args);
              timer = null;
            }, delay);
          }
        };
      },

      // Description:
      //    Executes a function when it stops being invoked for n seconds
      //    Modified version of _.debounce() http://underscorejs.org
      //
      // Arguments:
      //    Func (Function): Function to be debounced.
      //
      //    Delay (Integer): Function execution threshold in milliseconds.
      //
      //    Immediate (Bool): Whether the function should be called at the beginning
      //    of the delay instead of the end. Default is false.
      //
      // Returns:
      //    Lazy_function (Function): Function with debouncing applied.
      debounce : function (func, delay, immediate) {
        var timeout, result;
        return function () {
          var context = this, args = arguments;
          var later = function () {
            timeout = null;
            if (!immediate) result = func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, delay);
          if (callNow) result = func.apply(context, args);
          return result;
        };
      },

      // Description:
      //    Parses data-options attribute
      //
      // Arguments:
      //    El (jQuery Object): Element to be parsed.
      //
      // Returns:
      //    Options (Javascript Object): Contents of the element's data-options
      //    attribute.
      data_options : function (el, data_attr_name) {
        data_attr_name = data_attr_name || 'options';
        var opts = {}, ii, p, opts_arr,
            data_options = function (el) {
              var namespace = Foundation.global.namespace;

              if (namespace.length > 0) {
                return el.data(namespace + '-' + data_attr_name);
              }

              return el.data(data_attr_name);
            };

        var cached_options = data_options(el);

        if (typeof cached_options === 'object') {
          return cached_options;
        }

        opts_arr = (cached_options || ':').split(';');
        ii = opts_arr.length;

        function isNumber (o) {
          return ! isNaN (o-0) && o !== null && o !== "" && o !== false && o !== true;
        }

        function trim (str) {
          if (typeof str === 'string') return $.trim(str);
          return str;
        }

        while (ii--) {
          p = opts_arr[ii].split(':');
          p = [p[0], p.slice(1).join(':')];

          if (/true/i.test(p[1])) p[1] = true;
          if (/false/i.test(p[1])) p[1] = false;
          if (isNumber(p[1])) {
            if (p[1].indexOf('.') === -1) {
              p[1] = parseInt(p[1], 10);
            } else {
              p[1] = parseFloat(p[1]);
            }
          }

          if (p.length === 2 && p[0].length > 0) {
            opts[trim(p[0])] = trim(p[1]);
          }
        }

        return opts;
      },

      // Description:
      //    Adds JS-recognizable media queries
      //
      // Arguments:
      //    Media (String): Key string for the media query to be stored as in
      //    Foundation.media_queries
      //
      //    Class (String): Class name for the generated <meta> tag
      register_media : function (media, media_class) {
        if(Foundation.media_queries[media] === undefined) {
          $('head').append('<meta class="' + media_class + '"/>');
          Foundation.media_queries[media] = removeQuotes($('.' + media_class).css('font-family'));
        }
      },

      // Description:
      //    Add custom CSS within a JS-defined media query
      //
      // Arguments:
      //    Rule (String): CSS rule to be appended to the document.
      //
      //    Media (String): Optional media query string for the CSS rule to be
      //    nested under.
      add_custom_rule : function (rule, media) {
        if (media === undefined && Foundation.stylesheet) {
          Foundation.stylesheet.insertRule(rule, Foundation.stylesheet.cssRules.length);
        } else {
          var query = Foundation.media_queries[media];

          if (query !== undefined) {
            Foundation.stylesheet.insertRule('@media ' +
              Foundation.media_queries[media] + '{ ' + rule + ' }');
          }
        }
      },

      // Description:
      //    Performs a callback function when an image is fully loaded
      //
      // Arguments:
      //    Image (jQuery Object): Image(s) to check if loaded.
      //
      //    Callback (Function): Function to execute when image is fully loaded.
      image_loaded : function (images, callback) {
        var self = this,
            unloaded = images.length;

        if (unloaded === 0) {
          callback(images);
        }

        images.each(function () {
          single_image_loaded(self.S(this), function () {
            unloaded -= 1;
            if (unloaded === 0) {
              callback(images);
            }
          });
        });
      },

      // Description:
      //    Returns a random, alphanumeric string
      //
      // Arguments:
      //    Length (Integer): Length of string to be generated. Defaults to random
      //    integer.
      //
      // Returns:
      //    Rand (String): Pseudo-random, alphanumeric string.
      random_str : function () {
        if (!this.fidx) this.fidx = 0;
        this.prefix = this.prefix || [(this.name || 'F'), (+new Date).toString(36)].join('-');

        return this.prefix + (this.fidx++).toString(36);
      }
    }
  };

  $.fn.foundation = function () {
    var args = Array.prototype.slice.call(arguments, 0);

    return this.each(function () {
      Foundation.init.apply(Foundation, [this].concat(args));
      return this;
    });
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs['magellan-expedition'] = {
    name : 'magellan-expedition',

    version : '5.4.5',

    settings : {
      active_class: 'active',
      threshold: 0, // pixels from the top of the expedition for it to become fixes
      destination_threshold: 20, // pixels from the top of destination for it to be considered active
      throttle_delay: 30, // calculation throttling to increase framerate
      fixed_top: 0 // top distance in pixels assigend to the fixed element on scroll
    },

    init : function (scope, method, options) {
      Foundation.inherit(this, 'throttle');
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = self.S,
          settings = self.settings;

      // initialize expedition offset
      self.set_expedition_position();

      S(self.scope)
        .off('.magellan')
        .on('click.fndtn.magellan', '[' + self.add_namespace('data-magellan-arrival') + '] a[href^="#"]', function (e) {
          e.preventDefault();
          var expedition = $(this).closest('[' + self.attr_name() + ']'),
              settings = expedition.data('magellan-expedition-init'),
              hash = this.hash.split('#').join(''),
              target = $("a[name='"+hash+"']");

          if (target.length === 0) {
            target = $('#'+hash);

          }


          // Account for expedition height if fixed position
          var scroll_top = target.offset().top - settings.destination_threshold + 1;
          scroll_top = scroll_top - expedition.outerHeight();

          $('html, body').stop().animate({
            'scrollTop': scroll_top
          }, 700, 'swing', function () {
            if(history.pushState) {
              history.pushState(null, null, '#'+hash);
            }
            else {
              location.hash = '#'+hash;
            }
          });
        })
        .on('scroll.fndtn.magellan', self.throttle(this.check_for_arrivals.bind(this), settings.throttle_delay));

      $(window)
        .on('resize.fndtn.magellan', self.throttle(this.set_expedition_position.bind(this), settings.throttle_delay));
    },

    check_for_arrivals : function() {
      var self = this;
      self.update_arrivals();
      self.update_expedition_positions();
    },

    set_expedition_position : function() {
      var self = this;
      $('[' + this.attr_name() + '=fixed]', self.scope).each(function(idx, el) {
        var expedition = $(this),
            settings = expedition.data('magellan-expedition-init'),
            styles = expedition.attr('styles'), // save styles
            top_offset, fixed_top;

        expedition.attr('style', '');
        top_offset = expedition.offset().top + settings.threshold;

        //set fixed-top by attribute
        fixed_top = parseInt(expedition.data('magellan-fixed-top'));
        if(!isNaN(fixed_top))
            self.settings.fixed_top = fixed_top;

        expedition.data(self.data_attr('magellan-top-offset'), top_offset);
        expedition.attr('style', styles);
      });
    },

    update_expedition_positions : function() {
      var self = this,
          window_top_offset = $(window).scrollTop();

      $('[' + this.attr_name() + '=fixed]', self.scope).each(function() {
        var expedition = $(this),
            settings = expedition.data('magellan-expedition-init'),
            styles = expedition.attr('style'), // save styles
            top_offset = expedition.data('magellan-top-offset');

        //scroll to the top distance
        if (window_top_offset+self.settings.fixed_top >= top_offset) {
          // Placeholder allows height calculations to be consistent even when
          // appearing to switch between fixed/non-fixed placement
          var placeholder = expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']');
          if (placeholder.length === 0) {
            placeholder = expedition.clone();
            placeholder.removeAttr(self.attr_name());
            placeholder.attr(self.add_namespace('data-magellan-expedition-clone'),'');
            expedition.before(placeholder);
          }
          expedition.css({position:'fixed', top: settings.fixed_top}).addClass('fixed');
        } else {
          expedition.prev('[' + self.add_namespace('data-magellan-expedition-clone') + ']').remove();
          expedition.attr('style',styles).css('position','').css('top','').removeClass('fixed');
        }
      });
    },

    update_arrivals : function() {
      var self = this,
          window_top_offset = $(window).scrollTop();

      $('[' + this.attr_name() + ']', self.scope).each(function() {
        var expedition = $(this),
            settings = expedition.data(self.attr_name(true) + '-init'),
            offsets = self.offsets(expedition, window_top_offset),
            arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']'),
            active_item = false;
        offsets.each(function(idx, item) {
          if (item.viewport_offset >= item.top_offset) {
            var arrivals = expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']');
            arrivals.not(item.arrival).removeClass(settings.active_class);
            item.arrival.addClass(settings.active_class);
            active_item = true;
            return true;
          }
        });

        if (!active_item) arrivals.removeClass(settings.active_class);
      });
    },

    offsets : function(expedition, window_offset) {
      var self = this,
          settings = expedition.data(self.attr_name(true) + '-init'),
          viewport_offset = window_offset;

      return expedition.find('[' + self.add_namespace('data-magellan-arrival') + ']').map(function(idx, el) {
        var name = $(this).data(self.data_attr('magellan-arrival')),
            dest = $('[' + self.add_namespace('data-magellan-destination') + '=' + name + ']');
        if (dest.length > 0) {
          var top_offset = Math.floor(dest.offset().top - settings.destination_threshold - expedition.outerHeight());
          return {
            destination : dest,
            arrival : $(this),
            top_offset : top_offset,
            viewport_offset : viewport_offset
          }
        }
      }).sort(function(a, b) {
        if (a.top_offset < b.top_offset) return -1;
        if (a.top_offset > b.top_offset) return 1;
        return 0;
      });
    },

    data_attr: function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    off : function () {
      this.S(this.scope).off('.magellan');
      this.S(window).off('.magellan');
    },

    reflow : function () {
      var self = this;
      // remove placeholder expeditions used for height calculation purposes
      $('[' + self.add_namespace('data-magellan-expedition-clone') + ']', self.scope).remove();
    }
  };
}(jQuery, window, window.document));
/*
 * Foundation Responsive Library
 * http://foundation.zurb.com
 * Copyright 2014, ZURB
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

(function(e,t,n,r){"use strict";function l(e){if(typeof e=="string"||e instanceof String)e=e.replace(/^['\\/"]+|(;\s?})+|['\\/"]+$/g,"");return e}var i=function(t){var n=t.length,r=e("head");while(n--)r.has("."+t[n]).length===0&&r.append('<meta class="'+t[n]+'" />')};i(["foundation-mq-small","foundation-mq-medium","foundation-mq-large","foundation-mq-xlarge","foundation-mq-xxlarge","foundation-data-attribute-namespace"]),e(function(){typeof FastClick!="undefined"&&typeof n.body!="undefined"&&FastClick.attach(n.body)});var s=function(t,r){if(typeof t=="string"){if(r){var i;if(r.jquery){i=r[0];if(!i)return r}else i=r;return e(i.querySelectorAll(t))}return e(n.querySelectorAll(t))}return e(t,r)},o=function(e){var t=[];return e||t.push("data"),this.namespace.length>0&&t.push(this.namespace),t.push(this.name),t.join("-")},u=function(e){var t=e.split("-"),n=t.length,r=[];while(n--)n!==0?r.push(t[n]):this.namespace.length>0?r.push(this.namespace,t[n]):r.push(t[n]);return r.reverse().join("-")},a=function(t,n){var r=this,i=!s(this).data(this.attr_name(!0));s(this.scope).is("["+this.attr_name()+"]")?(s(this.scope).data(this.attr_name(!0)+"-init",e.extend({},this.settings,n||t,this.data_options(s(this.scope)))),i&&this.events(this.scope)):s("["+this.attr_name()+"]",this.scope).each(function(){var i=!s(this).data(r.attr_name(!0)+"-init");s(this).data(r.attr_name(!0)+"-init",e.extend({},r.settings,n||t,r.data_options(s(this)))),i&&r.events(this)});if(typeof t=="string")return this[t].call(this,n)},f=function(e,t){function n(){t(e[0])}function r(){this.one("load",n);if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){var e=this.attr("src"),t=e.match(/\?/)?"&":"?";t+="random="+(new Date).getTime(),this.attr("src",e+t)}}if(!e.attr("src")){n();return}e[0].complete||e[0].readyState===4?n():r.call(e)};t.matchMedia=t.matchMedia||function(e){var t,n=e.documentElement,r=n.firstElementChild||n.firstChild,i=e.createElement("body"),s=e.createElement("div");return s.id="mq-test-1",s.style.cssText="position:absolute;top:-100em",i.style.background="none",i.appendChild(s),function(e){return s.innerHTML='&shy;<style media="'+e+'"> #mq-test-1 { width: 42px; }</style>',n.insertBefore(i,r),t=s.offsetWidth===42,n.removeChild(i),{matches:t,media:e}}}(n),function(e){function a(){n&&(s(a),u&&jQuery.fx.tick())}var n,r=0,i=["webkit","moz"],s=t.requestAnimationFrame,o=t.cancelAnimationFrame,u="undefined"!=typeof jQuery.fx;for(;r<i.length&&!s;r++)s=t[i[r]+"RequestAnimationFrame"],o=o||t[i[r]+"CancelAnimationFrame"]||t[i[r]+"CancelRequestAnimationFrame"];s?(t.requestAnimationFrame=s,t.cancelAnimationFrame=o,u&&(jQuery.fx.timer=function(e){e()&&jQuery.timers.push(e)&&!n&&(n=!0,a())},jQuery.fx.stop=function(){n=!1})):(t.requestAnimationFrame=function(e){var n=(new Date).getTime(),i=Math.max(0,16-(n-r)),s=t.setTimeout(function(){e(n+i)},i);return r=n+i,s},t.cancelAnimationFrame=function(e){clearTimeout(e)})}(jQuery),t.Foundation={name:"Foundation",version:"5.4.5",media_queries:{small:s(".foundation-mq-small").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),medium:s(".foundation-mq-medium").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),large:s(".foundation-mq-large").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xlarge:s(".foundation-mq-xlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,""),xxlarge:s(".foundation-mq-xxlarge").css("font-family").replace(/^[\/\\'"]+|(;\s?})+|[\/\\'"]+$/g,"")},stylesheet:e("<style></style>").appendTo("head")[0].sheet,global:{namespace:r},init:function(e,n,r,i,o){var u=[e,r,i,o],a=[];this.rtl=/rtl/i.test(s("html").attr("dir")),this.scope=e||this.scope,this.set_namespace();if(n&&typeof n=="string"&&!/reflow/i.test(n))this.libs.hasOwnProperty(n)&&a.push(this.init_lib(n,u));else for(var f in this.libs)a.push(this.init_lib(f,n));return s(t).load(function(){s(t).trigger("resize.fndtn.clearing").trigger("resize.fndtn.dropdown").trigger("resize.fndtn.equalizer").trigger("resize.fndtn.interchange").trigger("resize.fndtn.joyride").trigger("resize.fndtn.magellan").trigger("resize.fndtn.topbar").trigger("resize.fndtn.slider")}),e},init_lib:function(t,n){return this.libs.hasOwnProperty(t)?(this.patch(this.libs[t]),n&&n.hasOwnProperty(t)?(typeof this.libs[t].settings!="undefined"?e.extend(!0,this.libs[t].settings,n[t]):typeof this.libs[t].defaults!="undefined"&&e.extend(!0,this.libs[t].defaults,n[t]),this.libs[t].init.apply(this.libs[t],[this.scope,n[t]])):(n=n instanceof Array?n:new Array(n),this.libs[t].init.apply(this.libs[t],n))):function(){}},patch:function(e){e.scope=this.scope,e.namespace=this.global.namespace,e.rtl=this.rtl,e.data_options=this.utils.data_options,e.attr_name=o,e.add_namespace=u,e.bindings=a,e.S=this.utils.S},inherit:function(e,t){var n=t.split(" "),r=n.length;while(r--)this.utils.hasOwnProperty(n[r])&&(e[n[r]]=this.utils[n[r]])},set_namespace:function(){var t=this.global.namespace===r?e(".foundation-data-attribute-namespace").css("font-family"):this.global.namespace;this.global.namespace=t===r||/false/i.test(t)?"":t},libs:{},utils:{S:s,throttle:function(e,t){var n=null;return function(){var r=this,i=arguments;n==null&&(n=setTimeout(function(){e.apply(r,i),n=null},t))}},debounce:function(e,t,n){var r,i;return function(){var s=this,o=arguments,u=function(){r=null,n||(i=e.apply(s,o))},a=n&&!r;return clearTimeout(r),r=setTimeout(u,t),a&&(i=e.apply(s,o)),i}},data_options:function(t,n){function f(e){return!isNaN(e-0)&&e!==null&&e!==""&&e!==!1&&e!==!0}function l(t){return typeof t=="string"?e.trim(t):t}n=n||"options";var r={},i,s,o,u=function(e){var t=Foundation.global.namespace;return t.length>0?e.data(t+"-"+n):e.data(n)},a=u(t);if(typeof a=="object")return a;o=(a||":").split(";"),i=o.length;while(i--)s=o[i].split(":"),s=[s[0],s.slice(1).join(":")],/true/i.test(s[1])&&(s[1]=!0),/false/i.test(s[1])&&(s[1]=!1),f(s[1])&&(s[1].indexOf(".")===-1?s[1]=parseInt(s[1],10):s[1]=parseFloat(s[1])),s.length===2&&s[0].length>0&&(r[l(s[0])]=l(s[1]));return r},register_media:function(t,n){Foundation.media_queries[t]===r&&(e("head").append('<meta class="'+n+'"/>'),Foundation.media_queries[t]=l(e("."+n).css("font-family")))},add_custom_rule:function(e,t){if(t===r&&Foundation.stylesheet)Foundation.stylesheet.insertRule(e,Foundation.stylesheet.cssRules.length);else{var n=Foundation.media_queries[t];n!==r&&Foundation.stylesheet.insertRule("@media "+Foundation.media_queries[t]+"{ "+e+" }")}},image_loaded:function(e,t){var n=this,r=e.length;r===0&&t(e),e.each(function(){f(n.S(this),function(){r-=1,r===0&&t(e)})})},random_str:function(){return this.fidx||(this.fidx=0),this.prefix=this.prefix||[this.name||"F",(+(new Date)).toString(36)].join("-"),this.prefix+(this.fidx++).toString(36)}}},e.fn.foundation=function(){var e=Array.prototype.slice.call(arguments,0);return this.each(function(){return Foundation.init.apply(Foundation,[this].concat(e)),this})}})(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.slider={name:"slider",version:"5.4.5",settings:{start:0,end:100,step:1,initial:null,display_selector:"",vertical:!1,on_change:function(){}},cache:{},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n),this.reflow()},events:function(){var n=this;e(this.scope).off(".slider").on("mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider","["+n.attr_name()+"]:not(.disabled, [disabled]) .range-slider-handle",function(t){n.cache.active||(t.preventDefault(),n.set_active_slider(e(t.target)))}).on("mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider",function(r){if(!!n.cache.active){r.preventDefault();if(e.data(n.cache.active[0],"settings").vertical){var i=0;r.pageY||(i=t.scrollY),n.calculate_position(n.cache.active,(r.pageY||r.originalEvent.clientY||r.originalEvent.touches[0].clientY||r.currentPoint.y)+i)}else n.calculate_position(n.cache.active,r.pageX||r.originalEvent.clientX||r.originalEvent.touches[0].clientX||r.currentPoint.x)}}).on("mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider",function(e){n.remove_active_slider()}).on("change.fndtn.slider",function(e){n.settings.on_change()}),n.S(t).on("resize.fndtn.slider",n.throttle(function(e){n.reflow()},300))},set_active_slider:function(e){this.cache.active=e},remove_active_slider:function(){this.cache.active=null},calculate_position:function(t,n){var r=this,i=e.data(t[0],"settings"),s=e.data(t[0],"handle_l"),o=e.data(t[0],"handle_o"),u=e.data(t[0],"bar_l"),a=e.data(t[0],"bar_o");requestAnimationFrame(function(){var e;Foundation.rtl&&!i.vertical?e=r.limit_to((a+u-n)/u,0,1):e=r.limit_to((n-a)/u,0,1),e=i.vertical?1-e:e;var s=r.normalized_value(e,i.start,i.end,i.step);r.set_ui(t,s)})},set_ui:function(t,n){var r=e.data(t[0],"settings"),i=e.data(t[0],"handle_l"),s=e.data(t[0],"bar_l"),o=this.normalized_percentage(n,r.start,r.end),u=o*(s-i)-1,a=o*100;Foundation.rtl&&!r.vertical&&(u=-u),u=r.vertical?-u+s-i+1:u,this.set_translate(t,u,r.vertical),r.vertical?t.siblings(".range-slider-active-segment").css("height",a+"%"):t.siblings(".range-slider-active-segment").css("width",a+"%"),t.parent().attr(this.attr_name(),n).trigger("change").trigger("change.fndtn.slider"),t.parent().children("input[type=hidden]").val(n),t[0].hasAttribute("aria-valuemin")||t.attr({"aria-valuemin":r.start,"aria-valuemax":r.end}),t.attr("aria-valuenow",n)},normalized_percentage:function(e,t,n){return Math.min(1,(e-t)/(n-t))},normalized_value:function(e,t,n,r){var i=n-t,s=e*i,o=(s-s%r)/r,u=s%r,a=u>=r*.5?r:0;return o*r+a+t},set_translate:function(t,n,r){r?e(t).css("-webkit-transform","translateY("+n+"px)").css("-moz-transform","translateY("+n+"px)").css("-ms-transform","translateY("+n+"px)").css("-o-transform","translateY("+n+"px)").css("transform","translateY("+n+"px)"):e(t).css("-webkit-transform","translateX("+n+"px)").css("-moz-transform","translateX("+n+"px)").css("-ms-transform","translateX("+n+"px)").css("-o-transform","translateX("+n+"px)").css("transform","translateX("+n+"px)")},limit_to:function(e,t,n){return Math.min(Math.max(e,t),n)},initialize_settings:function(t){var n=e.extend({},this.settings,this.data_options(e(t).parent()));n.vertical?(e.data(t,"bar_o",e(t).parent().offset().top),e.data(t,"bar_l",e(t).parent().outerHeight()),e.data(t,"handle_o",e(t).offset().top),e.data(t,"handle_l",e(t).outerHeight())):(e.data(t,"bar_o",e(t).parent().offset().left),e.data(t,"bar_l",e(t).parent().outerWidth()),e.data(t,"handle_o",e(t).offset().left),e.data(t,"handle_l",e(t).outerWidth())),e.data(t,"bar",e(t).parent()),e.data(t,"settings",n)},set_initial_position:function(t){var n=e.data(t.children(".range-slider-handle")[0],"settings"),r=n.initial?n.initial:Math.floor((n.end-n.start)*.5/n.step)*n.step+n.start,i=t.children(".range-slider-handle");this.set_ui(i,r)},set_value:function(t){var n=this;e("["+n.attr_name()+"]",this.scope).each(function(){e(this).attr(n.attr_name(),t)}),!e(this.scope).attr(n.attr_name())||e(this.scope).attr(n.attr_name(),t),n.reflow()},reflow:function(){var t=this;t.S("["+this.attr_name()+"]").each(function(){var n=e(this).children(".range-slider-handle")[0],r=e(this).attr(t.attr_name());t.initialize_settings(n),r?t.set_ui(e(n),parseFloat(r)):t.set_initial_position(e(this))})}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";var i=i||!1;Foundation.libs.joyride={name:"joyride",version:"5.4.5",defaults:{expose:!1,modal:!0,keyboard:!0,tip_location:"bottom",nub_position:"auto",scroll_speed:1500,scroll_animation:"linear",timer:0,start_timer_on_click:!0,start_offset:0,next_button:!0,prev_button:!0,tip_animation:"fade",pause_after:[],exposed:[],tip_animation_fade_speed:300,cookie_monster:!1,cookie_name:"joyride",cookie_domain:!1,cookie_expires:365,tip_container:"body",abort_on_close:!0,tip_location_patterns:{top:["bottom"],bottom:[],left:["right","top","bottom"],right:["left","top","bottom"]},post_ride_callback:function(){},post_step_callback:function(){},pre_step_callback:function(){},pre_ride_callback:function(){},post_expose_callback:function(){},template:{link:'<a href="#close" class="joyride-close-tip">&times;</a>',timer:'<div class="joyride-timer-indicator-wrap"><span class="joyride-timer-indicator"></span></div>',tip:'<div class="joyride-tip-guide"><span class="joyride-nub"></span></div>',wrapper:'<div class="joyride-content-wrapper"></div>',button:'<a href="#" class="small button joyride-next-tip"></a>',prev_button:'<a href="#" class="small button joyride-prev-tip"></a>',modal:'<div class="joyride-modal-bg"></div>',expose:'<div class="joyride-expose-wrapper"></div>',expose_cover:'<div class="joyride-expose-cover"></div>'},expose_add_class:""},init:function(t,n,r){Foundation.inherit(this,"throttle random_str"),this.settings=this.settings||e.extend({},this.defaults,r||n),this.bindings(n,r)},go_next:function(){this.settings.$li.next().length<1?this.end():this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(),this.startTimer()):(this.hide(),this.show())},go_prev:function(){this.settings.$li.prev().length<1||(this.settings.timer>0?(clearTimeout(this.settings.automate),this.hide(),this.show(null,!0),this.startTimer()):(this.hide(),this.show(null,!0)))},events:function(){var n=this;e(this.scope).off(".joyride").on("click.fndtn.joyride",".joyride-next-tip, .joyride-modal-bg",function(e){e.preventDefault(),this.go_next()}.bind(this)).on("click.fndtn.joyride",".joyride-prev-tip",function(e){e.preventDefault(),this.go_prev()}.bind(this)).on("click.fndtn.joyride",".joyride-close-tip",function(e){e.preventDefault(),this.end(this.settings.abort_on_close)}.bind(this)).on("keyup.joyride",function(e){if(!this.settings.keyboard)return;switch(e.which){case 39:e.preventDefault(),this.go_next();break;case 37:e.preventDefault(),this.go_prev();break;case 27:e.preventDefault(),this.end(this.settings.abort_on_close)}}.bind(this)),e(t).off(".joyride").on("resize.fndtn.joyride",n.throttle(function(){if(e("["+n.attr_name()+"]").length>0&&n.settings.$next_tip&&n.settings.riding){if(n.settings.exposed.length>0){var t=e(n.settings.exposed);t.each(function(){var t=e(this);n.un_expose(t),n.expose(t)})}n.is_phone()?n.pos_phone():n.pos_default(!1)}},100))},start:function(){var t=this,n=e("["+this.attr_name()+"]",this.scope),r=["timer","scrollSpeed","startOffset","tipAnimationFadeSpeed","cookieExpires"],i=r.length;if(!n.length>0)return;this.settings.init||this.events(),this.settings=n.data(this.attr_name(!0)+"-init"),this.settings.$content_el=n,this.settings.$body=e(this.settings.tip_container),this.settings.body_offset=e(this.settings.tip_container).position(),this.settings.$tip_content=this.settings.$content_el.find("> li"),this.settings.paused=!1,this.settings.attempts=0,this.settings.riding=!0,typeof e.cookie!="function"&&(this.settings.cookie_monster=!1);if(!this.settings.cookie_monster||this.settings.cookie_monster&&!e.cookie(this.settings.cookie_name))this.settings.$tip_content.each(function(n){var s=e(this);this.settings=e.extend({},t.defaults,t.data_options(s));var o=i;while(o--)t.settings[r[o]]=parseInt(t.settings[r[o]],10);t.create({$li:s,index:n})}),!this.settings.start_timer_on_click&&this.settings.timer>0?(this.show("init"),this.startTimer()):this.show("init")},resume:function(){this.set_li(),this.show()},tip_template:function(t){var n,r;return t.tip_class=t.tip_class||"",n=e(this.settings.template.tip).addClass(t.tip_class),r=e.trim(e(t.li).html())+this.prev_button_text(t.prev_button_text,t.index)+this.button_text(t.button_text)+this.settings.template.link+this.timer_instance(t.index),n.append(e(this.settings.template.wrapper)),n.first().attr(this.add_namespace("data-index"),t.index),e(".joyride-content-wrapper",n).append(r),n[0]},timer_instance:function(t){var n;return t===0&&this.settings.start_timer_on_click&&this.settings.timer>0||this.settings.timer===0?n="":n=e(this.settings.template.timer)[0].outerHTML,n},button_text:function(t){return this.settings.tip_settings.next_button?(t=e.trim(t)||"Next",t=e(this.settings.template.button).append(t)[0].outerHTML):t="",t},prev_button_text:function(t,n){return this.settings.tip_settings.prev_button?(t=e.trim(t)||"Previous",n==0?t=e(this.settings.template.prev_button).append(t).addClass("disabled")[0].outerHTML:t=e(this.settings.template.prev_button).append(t)[0].outerHTML):t="",t},create:function(t){this.settings.tip_settings=e.extend({},this.settings,this.data_options(t.$li));var n=t.$li.attr(this.add_namespace("data-button"))||t.$li.attr(this.add_namespace("data-text")),r=t.$li.attr(this.add_namespace("data-button-prev"))||t.$li.attr(this.add_namespace("data-prev-text")),i=t.$li.attr("class"),s=e(this.tip_template({tip_class:i,index:t.index,button_text:n,prev_button_text:r,li:t.$li}));e(this.settings.tip_container).append(s)},show:function(t,n){var i=null;this.settings.$li===r||e.inArray(this.settings.$li.index(),this.settings.pause_after)===-1?(this.settings.paused?this.settings.paused=!1:this.set_li(t,n),this.settings.attempts=0,this.settings.$li.length&&this.settings.$target.length>0?(t&&(this.settings.pre_ride_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.show_modal()),this.settings.pre_step_callback(this.settings.$li.index(),this.settings.$next_tip),this.settings.modal&&this.settings.expose&&this.expose(),this.settings.tip_settings=e.extend({},this.settings,this.data_options(this.settings.$li)),this.settings.timer=parseInt(this.settings.timer,10),this.settings.tip_settings.tip_location_pattern=this.settings.tip_location_patterns[this.settings.tip_settings.tip_location],/body/i.test(this.settings.$target.selector)||this.scroll_to(),this.is_phone()?this.pos_phone(!0):this.pos_default(!0),i=this.settings.$next_tip.find(".joyride-timer-indicator"),/pop/i.test(this.settings.tip_animation)?(i.width(0),this.settings.timer>0?(this.settings.$next_tip.show(),setTimeout(function(){i.animate({width:i.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.show()):/fade/i.test(this.settings.tip_animation)&&(i.width(0),this.settings.timer>0?(this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed).show(),setTimeout(function(){i.animate({width:i.parent().width()},this.settings.timer,"linear")}.bind(this),this.settings.tip_animation_fade_speed)):this.settings.$next_tip.fadeIn(this.settings.tip_animation_fade_speed)),this.settings.$current_tip=this.settings.$next_tip):this.settings.$li&&this.settings.$target.length<1?this.show():this.end()):this.settings.paused=!0},is_phone:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},hide:function(){this.settings.modal&&this.settings.expose&&this.un_expose(),this.settings.modal||e(".joyride-modal-bg").hide(),this.settings.$current_tip.css("visibility","hidden"),setTimeout(e.proxy(function(){this.hide(),this.css("visibility","visible")},this.settings.$current_tip),0),this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip)},set_li:function(e,t){e?(this.settings.$li=this.settings.$tip_content.eq(this.settings.start_offset),this.set_next_tip(),this.settings.$current_tip=this.settings.$next_tip):(t?this.settings.$li=this.settings.$li.prev():this.settings.$li=this.settings.$li.next(),this.set_next_tip()),this.set_target()},set_next_tip:function(){this.settings.$next_tip=e(".joyride-tip-guide").eq(this.settings.$li.index()),this.settings.$next_tip.data("closed","")},set_target:function(){var t=this.settings.$li.attr(this.add_namespace("data-class")),r=this.settings.$li.attr(this.add_namespace("data-id")),i=function(){return r?e(n.getElementById(r)):t?e("."+t).first():e("body")};this.settings.$target=i()},scroll_to:function(){var n,r;n=e(t).height()/2,r=Math.ceil(this.settings.$target.offset().top-n+this.settings.$next_tip.outerHeight()),r!=0&&e("html, body").stop().animate({scrollTop:r},this.settings.scroll_speed,"swing")},paused:function(){return e.inArray(this.settings.$li.index()+1,this.settings.pause_after)===-1},restart:function(){this.hide(),this.settings.$li=r,this.show("init")},pos_default:function(e){var t=this.settings.$next_tip.find(".joyride-nub"),n=Math.ceil(t.outerWidth()/2),r=Math.ceil(t.outerHeight()/2),i=e||!1;i&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show());if(!/body/i.test(this.settings.$target.selector)){var s=this.settings.tip_settings.tipAdjustmentY?parseInt(this.settings.tip_settings.tipAdjustmentY):0,o=this.settings.tip_settings.tipAdjustmentX?parseInt(this.settings.tip_settings.tipAdjustmentX):0;this.bottom()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top+r+this.settings.$target.outerHeight()+s,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()+o}):this.settings.$next_tip.css({top:this.settings.$target.offset().top+r+this.settings.$target.outerHeight()+s,left:this.settings.$target.offset().left+o}),this.nub_position(t,this.settings.tip_settings.nub_position,"top")):this.top()?(this.rtl?this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-r+s,left:this.settings.$target.offset().left+this.settings.$target.outerWidth()-this.settings.$next_tip.outerWidth()}):this.settings.$next_tip.css({top:this.settings.$target.offset().top-this.settings.$next_tip.outerHeight()-r+s,left:this.settings.$target.offset().left+o}),this.nub_position(t,this.settings.tip_settings.nub_position,"bottom")):this.right()?(this.settings.$next_tip.css({top:this.settings.$target.offset().top+s,left:this.settings.$target.outerWidth()+this.settings.$target.offset().left+n+o}),this.nub_position(t,this.settings.tip_settings.nub_position,"left")):this.left()&&(this.settings.$next_tip.css({top:this.settings.$target.offset().top+s,left:this.settings.$target.offset().left-this.settings.$next_tip.outerWidth()-n+o}),this.nub_position(t,this.settings.tip_settings.nub_position,"right")),!this.visible(this.corners(this.settings.$next_tip))&&this.settings.attempts<this.settings.tip_settings.tip_location_pattern.length&&(t.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),this.settings.tip_settings.tip_location=this.settings.tip_settings.tip_location_pattern[this.settings.attempts],this.settings.attempts++,this.pos_default())}else this.settings.$li.length&&this.pos_modal(t);i&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_phone:function(t){var n=this.settings.$next_tip.outerHeight(),r=this.settings.$next_tip.offset(),i=this.settings.$target.outerHeight(),s=e(".joyride-nub",this.settings.$next_tip),o=Math.ceil(s.outerHeight()/2),u=t||!1;s.removeClass("bottom").removeClass("top").removeClass("right").removeClass("left"),u&&(this.settings.$next_tip.css("visibility","hidden"),this.settings.$next_tip.show()),/body/i.test(this.settings.$target.selector)?this.settings.$li.length&&this.pos_modal(s):this.top()?(this.settings.$next_tip.offset({top:this.settings.$target.offset().top-n-o}),s.addClass("bottom")):(this.settings.$next_tip.offset({top:this.settings.$target.offset().top+i+o}),s.addClass("top")),u&&(this.settings.$next_tip.hide(),this.settings.$next_tip.css("visibility","visible"))},pos_modal:function(e){this.center(),e.hide(),this.show_modal()},show_modal:function(){if(!this.settings.$next_tip.data("closed")){var t=e(".joyride-modal-bg");t.length<1&&e("body").append(this.settings.template.modal).show(),/pop/i.test(this.settings.tip_animation)?t.show():t.fadeIn(this.settings.tip_animation_fade_speed)}},expose:function(){var n,r,i,s,o,u="expose-"+this.random_str(6);if(arguments.length>0&&arguments[0]instanceof e)i=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;i=this.settings.$target}if(i.length<1)return t.console&&console.error("element not valid",i),!1;n=e(this.settings.template.expose),this.settings.$body.append(n),n.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),r=e(this.settings.template.expose_cover),s={zIndex:i.css("z-index"),position:i.css("position")},o=i.attr("class")==null?"":i.attr("class"),i.css("z-index",parseInt(n.css("z-index"))+1),s.position=="static"&&i.css("position","relative"),i.data("expose-css",s),i.data("orig-class",o),i.attr("class",o+" "+this.settings.expose_add_class),r.css({top:i.offset().top,left:i.offset().left,width:i.outerWidth(!0),height:i.outerHeight(!0)}),this.settings.modal&&this.show_modal(),this.settings.$body.append(r),n.addClass(u),r.addClass(u),i.data("expose",u),this.settings.post_expose_callback(this.settings.$li.index(),this.settings.$next_tip,i),this.add_exposed(i)},un_expose:function(){var n,r,i,s,o,u=!1;if(arguments.length>0&&arguments[0]instanceof e)r=arguments[0];else{if(!this.settings.$target||!!/body/i.test(this.settings.$target.selector))return!1;r=this.settings.$target}if(r.length<1)return t.console&&console.error("element not valid",r),!1;n=r.data("expose"),i=e("."+n),arguments.length>1&&(u=arguments[1]),u===!0?e(".joyride-expose-wrapper,.joyride-expose-cover").remove():i.remove(),s=r.data("expose-css"),s.zIndex=="auto"?r.css("z-index",""):r.css("z-index",s.zIndex),s.position!=r.css("position")&&(s.position=="static"?r.css("position",""):r.css("position",s.position)),o=r.data("orig-class"),r.attr("class",o),r.removeData("orig-classes"),r.removeData("expose"),r.removeData("expose-z-index"),this.remove_exposed(r)},add_exposed:function(t){this.settings.exposed=this.settings.exposed||[],t instanceof e||typeof t=="object"?this.settings.exposed.push(t[0]):typeof t=="string"&&this.settings.exposed.push(t)},remove_exposed:function(t){var n,r;t instanceof e?n=t[0]:typeof t=="string"&&(n=t),this.settings.exposed=this.settings.exposed||[],r=this.settings.exposed.length;while(r--)if(this.settings.exposed[r]==n){this.settings.exposed.splice(r,1);return}},center:function(){var n=e(t);return this.settings.$next_tip.css({top:(n.height()-this.settings.$next_tip.outerHeight())/2+n.scrollTop(),left:(n.width()-this.settings.$next_tip.outerWidth())/2+n.scrollLeft()}),!0},bottom:function(){return/bottom/i.test(this.settings.tip_settings.tip_location)},top:function(){return/top/i.test(this.settings.tip_settings.tip_location)},right:function(){return/right/i.test(this.settings.tip_settings.tip_location)},left:function(){return/left/i.test(this.settings.tip_settings.tip_location)},corners:function(n){var r=e(t),i=r.height()/2,s=Math.ceil(this.settings.$target.offset().top-i+this.settings.$next_tip.outerHeight()),o=r.width()+r.scrollLeft(),u=r.height()+s,a=r.height()+r.scrollTop(),f=r.scrollTop();return s<f&&(s<0?f=0:f=s),u>a&&(a=u),[n.offset().top<f,o<n.offset().left+n.outerWidth(),a<n.offset().top+n.outerHeight(),r.scrollLeft()>n.offset().left]},visible:function(e){var t=e.length;while(t--)if(e[t])return!1;return!0},nub_position:function(e,t,n){t==="auto"?e.addClass(n):e.addClass(t)},startTimer:function(){this.settings.$li.length?this.settings.automate=setTimeout(function(){this.hide(),this.show(),this.startTimer()}.bind(this),this.settings.timer):clearTimeout(this.settings.automate)},end:function(t){this.settings.cookie_monster&&e.cookie(this.settings.cookie_name,"ridden",{expires:this.settings.cookie_expires,domain:this.settings.cookie_domain}),this.settings.timer>0&&clearTimeout(this.settings.automate),this.settings.modal&&this.settings.expose&&this.un_expose(),e(this.scope).off("keyup.joyride"),this.settings.$next_tip.data("closed",!0),this.settings.riding=!1,e(".joyride-modal-bg").hide(),this.settings.$current_tip.hide();if(typeof t=="undefined"||t===!1)this.settings.post_step_callback(this.settings.$li.index(),this.settings.$current_tip),this.settings.post_ride_callback(this.settings.$li.index(),this.settings.$current_tip);e(".joyride-tip-guide").remove()},off:function(){e(this.scope).off(".joyride"),e(t).off(".joyride"),e(".joyride-close-tip, .joyride-next-tip, .joyride-modal-bg").off(".joyride"),e(".joyride-tip-guide, .joyride-modal-bg").remove(),clearTimeout(this.settings.automate),this.settings={}},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.equalizer={name:"equalizer",version:"5.4.5",settings:{use_tallest:!0,before_height_change:e.noop,after_height_change:e.noop,equalize_on_stack:!1},init:function(e,t,n){Foundation.inherit(this,"image_loaded"),this.bindings(t,n),this.reflow()},events:function(){this.S(t).off(".equalizer").on("resize.fndtn.equalizer",function(e){this.reflow()}.bind(this))},equalize:function(t){var n=!1,r=t.find("["+this.attr_name()+"-watch]:visible"),i=t.data(this.attr_name(!0)+"-init");if(r.length===0)return;var s=r.first().offset().top;i.before_height_change(),t.trigger("before-height-change").trigger("before-height-change.fndth.equalizer"),r.height("inherit"),r.each(function(){var t=e(this);t.offset().top!==s&&(n=!0)});if(i.equalize_on_stack===!1&&n)return;var o=r.map(function(){return e(this).outerHeight(!1)}).get();if(i.use_tallest){var u=Math.max.apply(null,o);r.css("height",u)}else{var a=Math.min.apply(null,o);r.css("height",a)}i.after_height_change(),t.trigger("after-height-change").trigger("after-height-change.fndtn.equalizer")},reflow:function(){var t=this;this.S("["+this.attr_name()+"]",this.scope).each(function(){var n=e(this);t.image_loaded(t.S("img",this),function(){t.equalize(n)})})}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.dropdown={name:"dropdown",version:"5.4.5",settings:{active_class:"open",mega_class:"mega",align:"bottom",is_hover:!1,opened:function(){},closed:function(){}},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(n){var r=this,i=r.S;i(this.scope).off(".dropdown").on("click.fndtn.dropdown","["+this.attr_name()+"]",function(t){var n=i(this).data(r.attr_name(!0)+"-init")||r.settings;if(!n.is_hover||Modernizr.touch)t.preventDefault(),r.toggle(e(this))}).on("mouseenter.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=i(this),n,s;clearTimeout(r.timeout),t.data(r.data_attr())?(n=i("#"+t.data(r.data_attr())),s=t):(n=t,s=i("["+r.attr_name()+"='"+n.attr("id")+"']"));var o=s.data(r.attr_name(!0)+"-init")||r.settings;i(e.target).data(r.data_attr())&&o.is_hover&&r.closeall.call(r),o.is_hover&&r.open.apply(r,[n,s])}).on("mouseleave.fndtn.dropdown","["+this.attr_name()+"], ["+this.attr_name()+"-content]",function(e){var t=i(this);r.timeout=setTimeout(function(){if(t.data(r.data_attr())){var e=t.data(r.data_attr(!0)+"-init")||r.settings;e.is_hover&&r.close.call(r,i("#"+t.data(r.data_attr())))}else{var n=i("["+r.attr_name()+'="'+i(this).attr("id")+'"]'),e=n.data(r.attr_name(!0)+"-init")||r.settings;e.is_hover&&r.close.call(r,t)}}.bind(this),150)}).on("click.fndtn.dropdown",function(t){var n=i(t.target).closest("["+r.attr_name()+"-content]");if(i(t.target).closest("["+r.attr_name()+"]").length>0)return;if(!i(t.target).data("revealId")&&n.length>0&&(i(t.target).is("["+r.attr_name()+"-content]")||e.contains(n.first()[0],t.target))){t.stopPropagation();return}r.close.call(r,i("["+r.attr_name()+"-content]"))}).on("opened.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.opened.call(this)}).on("closed.fndtn.dropdown","["+r.attr_name()+"-content]",function(){r.settings.closed.call(this)}),i(t).off(".dropdown").on("resize.fndtn.dropdown",r.throttle(function(){r.resize.call(r)},50)),this.resize()},close:function(t){var n=this;t.each(function(){var r=e("["+n.attr_name()+"="+t[0].id+"]")||e("aria-controls="+t[0].id+"]");r.attr("aria-expanded","false"),n.S(this).hasClass(n.settings.active_class)&&(n.S(this).css(Foundation.rtl?"right":"left","-99999px").attr("aria-hidden","true").removeClass(n.settings.active_class).prev("["+n.attr_name()+"]").removeClass(n.settings.active_class).removeData("target"),n.S(this).trigger("closed").trigger("closed.fndtn.dropdown",[t]))})},closeall:function(){var t=this;e.each(t.S("["+this.attr_name()+"-content]"),function(){t.close.call(t,t.S(this))})},open:function(e,t){this.css(e.addClass(this.settings.active_class),t),e.prev("["+this.attr_name()+"]").addClass(this.settings.active_class),e.data("target",t.get(0)).trigger("opened").trigger("opened.fndtn.dropdown",[e,t]),e.attr("aria-hidden","false"),t.attr("aria-expanded","true"),e.focus()},data_attr:function(){return this.namespace.length>0?this.namespace+"-"+this.name:this.name},toggle:function(e){var t=this.S("#"+e
.data(this.data_attr()));if(t.length===0)return;this.close.call(this,this.S("["+this.attr_name()+"-content]").not(t)),t.hasClass(this.settings.active_class)?(this.close.call(this,t),t.data("target")!==e.get(0)&&this.open.call(this,t,e)):this.open.call(this,t,e)},resize:function(){var e=this.S("["+this.attr_name()+"-content].open"),t=this.S("["+this.attr_name()+"='"+e.attr("id")+"']");e.length&&t.length&&this.css(e,t)},css:function(e,t){var n=Math.max((t.width()-e.width())/2,8),r=t.data(this.attr_name(!0)+"-init")||this.settings;this.clear_idx();if(this.small()){var i=this.dirs.bottom.call(e,t,r);e.attr("style","").removeClass("drop-left drop-right drop-top").css({position:"absolute",width:"95%","max-width":"none",top:i.top}),e.css(Foundation.rtl?"right":"left",n)}else this.style(e,t,r);return e},style:function(t,n,r){var i=e.extend({position:"absolute"},this.dirs[r.align].call(t,n,r));t.attr("style","").css(i)},dirs:{_base:function(e){var t=this.offsetParent(),n=t.offset(),r=e.offset();return r.top-=n.top,r.left-=n.left,r},top:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e);return this.addClass("drop-top"),(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,r),Foundation.rtl?{left:r.left-this.outerWidth()+e.outerWidth(),top:r.top-this.outerHeight()}:{left:r.left,top:r.top-this.outerHeight()}},bottom:function(e,t){var n=Foundation.libs.dropdown,r=n.dirs._base.call(this,e);return(e.outerWidth()<this.outerWidth()||n.small()||this.hasClass(t.mega_menu))&&n.adjust_pip(this,e,t,r),n.rtl?{left:r.left-this.outerWidth()+e.outerWidth(),top:r.top+e.outerHeight()}:{left:r.left,top:r.top+e.outerHeight()}},left:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-left"),{left:n.left-this.outerWidth(),top:n.top}},right:function(e,t){var n=Foundation.libs.dropdown.dirs._base.call(this,e);return this.addClass("drop-right"),{left:n.left+e.outerWidth(),top:n.top}}},adjust_pip:function(e,t,n,r){var i=Foundation.stylesheet,s=8;e.hasClass(n.mega_class)?s=r.left+t.outerWidth()/2-8:this.small()&&(s+=r.left-8),this.rule_idx=i.cssRules.length;var o=".f-dropdown.open:before",u=".f-dropdown.open:after",a="left: "+s+"px;",f="left: "+(s-1)+"px;";i.insertRule?(i.insertRule([o,"{",a,"}"].join(" "),this.rule_idx),i.insertRule([u,"{",f,"}"].join(" "),this.rule_idx+1)):(i.addRule(o,a,this.rule_idx),i.addRule(u,f,this.rule_idx+1))},clear_idx:function(){var e=Foundation.stylesheet;if(e.cssRules.length>0){this.rule_idx&&(e.deleteRule(this.rule_idx),e.deleteRule(this.rule_idx),delete this.rule_idx)}},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},off:function(){this.S(this.scope).off(".fndtn.dropdown"),this.S("html, body").off(".fndtn.dropdown"),this.S(t).off(".fndtn.dropdown"),this.S("[data-dropdown-content]").off(".fndtn.dropdown")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.clearing={name:"clearing",version:"5.4.5",settings:{templates:{viewing:'<a href="#" class="clearing-close">&times;</a><div class="visible-img" style="display: none"><div class="clearing-touch-label"></div><img src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs%3D" alt="" /><p class="clearing-caption"></p><a href="#" class="clearing-main-prev"><span></span></a><a href="#" class="clearing-main-next"><span></span></a></div>'},close_selectors:".clearing-close, div.clearing-blackout",open_selectors:"",skip_selector:"",touch_label:"",init:!1,locked:!1},init:function(e,t,n){var r=this;Foundation.inherit(this,"throttle image_loaded"),this.bindings(t,n),r.S(this.scope).is("["+this.attr_name()+"]")?this.assemble(r.S("li",this.scope)):r.S("["+this.attr_name()+"]",this.scope).each(function(){r.assemble(r.S("li",this))})},events:function(r){var i=this,s=i.S,o=e(".scroll-container");o.length>0&&(this.scope=o),s(this.scope).off(".clearing").on("click.fndtn.clearing","ul["+this.attr_name()+"] li "+this.settings.open_selectors,function(e,t,n){var t=t||s(this),n=n||t,r=t.next("li"),o=t.closest("["+i.attr_name()+"]").data(i.attr_name(!0)+"-init"),u=s(e.target);e.preventDefault(),o||(i.init(),o=t.closest("["+i.attr_name()+"]").data(i.attr_name(!0)+"-init")),n.hasClass("visible")&&t[0]===n[0]&&r.length>0&&i.is_open(t)&&(n=r,u=s("img",n)),i.open(u,t,n),i.update_paddles(n)}).on("click.fndtn.clearing",".clearing-main-next",function(e){i.nav(e,"next")}).on("click.fndtn.clearing",".clearing-main-prev",function(e){i.nav(e,"prev")}).on("click.fndtn.clearing",this.settings.close_selectors,function(e){Foundation.libs.clearing.close(e,this)}),e(n).on("keydown.fndtn.clearing",function(e){i.keydown(e)}),s(t).off(".clearing").on("resize.fndtn.clearing",function(){i.resize()}),this.swipe_events(r)},swipe_events:function(e){var t=this,n=t.S;n(this.scope).on("touchstart.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};n(this).data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.clearing",".visible-img",function(e){e.touches||(e=e.originalEvent);if(e.touches.length>1||e.scale&&e.scale!==1)return;var r=n(this).data("swipe-transition");typeof r=="undefined"&&(r={}),r.delta_x=e.touches[0].pageX-r.start_page_x,Foundation.rtl&&(r.delta_x=-r.delta_x),typeof r.is_scrolling=="undefined"&&(r.is_scrolling=!!(r.is_scrolling||Math.abs(r.delta_x)<Math.abs(e.touches[0].pageY-r.start_page_y)));if(!r.is_scrolling&&!r.active){e.preventDefault();var i=r.delta_x<0?"next":"prev";r.active=!0,t.nav(e,i)}}).on("touchend.fndtn.clearing",".visible-img",function(e){n(this).data("swipe-transition",{}),e.stopPropagation()})},assemble:function(t){var n=t.parent();if(n.parent().hasClass("carousel"))return;n.after('<div id="foundationClearingHolder"></div>');var r=n.detach(),i="";if(r[0]==null)return;i=r[0].outerHTML;var s=this.S("#foundationClearingHolder"),o=n.data(this.attr_name(!0)+"-init"),u={grid:'<div class="carousel">'+i+"</div>",viewing:o.templates.viewing},a='<div class="clearing-assembled"><div>'+u.viewing+u.grid+"</div></div>",f=this.settings.touch_label;Modernizr.touch&&(a=e(a).find(".clearing-touch-label").html(f).end()),s.after(a).remove()},open:function(t,r,i){function p(){setTimeout(function(){this.image_loaded(l,function(){l.outerWidth()===1&&!h?p.call(this):d.call(this,l)}.bind(this))}.bind(this),100)}function d(t){var n=e(t);n.css("visibility","visible"),o.css("overflow","hidden"),u.addClass("clearing-blackout"),a.addClass("clearing-container"),f.show(),this.fix_height(i).caption(s.S(".clearing-caption",f),s.S("img",i)).center_and_label(t,c).shift(r,i,function(){i.closest("li").siblings().removeClass("visible"),i.closest("li").addClass("visible")}),f.trigger("opened.fndtn.clearing")}var s=this,o=e(n.body),u=i.closest(".clearing-assembled"),a=s.S("div",u).first(),f=s.S(".visible-img",a),l=s.S("img",f).not(t),c=s.S(".clearing-touch-label",a),h=!1;e("body").on("touchmove",function(e){e.preventDefault()}),l.error(function(){h=!0}),this.locked()||(f.trigger("open.fndtn.clearing"),l.attr("src",this.load(t)).css("visibility","hidden"),p.call(this))},close:function(t,r){t.preventDefault();var i=function(e){return/blackout/.test(e.selector)?e:e.closest(".clearing-blackout")}(e(r)),s=e(n.body),o,u;return r===t.target&&i&&(s.css("overflow",""),o=e("div",i).first(),u=e(".visible-img",o),u.trigger("close.fndtn.clearing"),this.settings.prev_index=0,e("ul["+this.attr_name()+"]",i).attr("style","").closest(".clearing-blackout").removeClass("clearing-blackout"),o.removeClass("clearing-container"),u.hide(),u.trigger("closed.fndtn.clearing")),e("body").off("touchmove"),!1},is_open:function(e){return e.parent().prop("style").length>0},keydown:function(t){var n=e(".clearing-blackout ul["+this.attr_name()+"]"),r=this.rtl?37:39,i=this.rtl?39:37,s=27;t.which===r&&this.go(n,"next"),t.which===i&&this.go(n,"prev"),t.which===s&&this.S("a.clearing-close").trigger("click").trigger("click.fndtn.clearing")},nav:function(t,n){var r=e("ul["+this.attr_name()+"]",".clearing-blackout");t.preventDefault(),this.go(r,n)},resize:function(){var t=e("img",".clearing-blackout .visible-img"),n=e(".clearing-touch-label",".clearing-blackout");t.length&&(this.center_and_label(t,n),t.trigger("resized.fndtn.clearing"))},fix_height:function(e){var t=e.parent().children(),n=this;return t.each(function(){var e=n.S(this),t=e.find("img");e.height()>t.outerHeight()&&e.addClass("fix-height")}).closest("ul").width(t.length*100+"%"),this},update_paddles:function(e){e=e.closest("li");var t=e.closest(".carousel").siblings(".visible-img");e.next().length>0?this.S(".clearing-main-next",t).removeClass("disabled"):this.S(".clearing-main-next",t).addClass("disabled"),e.prev().length>0?this.S(".clearing-main-prev",t).removeClass("disabled"):this.S(".clearing-main-prev",t).addClass("disabled")},center_and_label:function(e,t){return this.rtl?(e.css({marginRight:-(e.outerWidth()/2),marginTop:-(e.outerHeight()/2),left:"auto",right:"50%"}),t.length>0&&t.css({marginRight:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10,left:"auto",right:"50%"})):(e.css({marginLeft:-(e.outerWidth()/2),marginTop:-(e.outerHeight()/2)}),t.length>0&&t.css({marginLeft:-(t.outerWidth()/2),marginTop:-(e.outerHeight()/2)-t.outerHeight()-10})),this},load:function(e){var t;return e[0].nodeName==="A"?t=e.attr("href"):t=e.parent().attr("href"),this.preload(e),t?t:e.attr("src")},preload:function(e){this.img(e.closest("li").next()).img(e.closest("li").prev())},img:function(e){if(e.length){var t=new Image,n=this.S("a",e);n.length?t.src=n.attr("href"):t.src=this.S("img",e).attr("src")}return this},caption:function(e,t){var n=t.attr("data-caption");return n?e.html(n).show():e.text("").hide(),this},go:function(e,t){var n=this.S(".visible",e),r=n[t]();this.settings.skip_selector&&r.find(this.settings.skip_selector).length!=0&&(r=r[t]()),r.length&&this.S("img",r).trigger("click",[n,r]).trigger("click.fndtn.clearing",[n,r]).trigger("change.fndtn.clearing")},shift:function(e,t,n){var r=t.parent(),i=this.settings.prev_index||t.index(),s=this.direction(r,e,t),o=this.rtl?"right":"left",u=parseInt(r.css("left"),10),a=t.outerWidth(),f,l={};t.index()!==i&&!/skip/.test(s)?/left/.test(s)?(this.lock(),l[o]=u+a,r.animate(l,300,this.unlock())):/right/.test(s)&&(this.lock(),l[o]=u-a,r.animate(l,300,this.unlock())):/skip/.test(s)&&(f=t.index()-this.settings.up_count,this.lock(),f>0?(l[o]=-(f*a),r.animate(l,300,this.unlock())):(l[o]=0,r.animate(l,300,this.unlock()))),n()},direction:function(e,t,n){var r=this.S("li",e),i=r.outerWidth()+r.outerWidth()/4,s=Math.floor(this.S(".clearing-container").outerWidth()/i)-1,o=r.index(n),u;return this.settings.up_count=s,this.adjacent(this.settings.prev_index,o)?o>s&&o>this.settings.prev_index?u="right":o>s-1&&o<=this.settings.prev_index?u="left":u=!1:u="skip",this.settings.prev_index=o,u},adjacent:function(e,t){for(var n=t+1;n>=t-1;n--)if(n===e)return!0;return!1},lock:function(){this.settings.locked=!0},unlock:function(){this.settings.locked=!1},locked:function(){return this.settings.locked},off:function(){this.S(this.scope).off(".fndtn.clearing"),this.S(t).off(".fndtn.clearing")},reflow:function(){this.init()}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";var i=function(){},s=function(i,s){if(i.hasClass(s.slides_container_class))return this;var f=this,l,c=i,h,p,d,v=0,m,g,y=!1,b=!1;f.slides=function(){return c.children(s.slide_selector)},f.slides().first().addClass(s.active_slide_class),f.update_slide_number=function(t){s.slide_number&&(h.find("span:first").text(parseInt(t)+1),h.find("span:last").text(f.slides().length)),s.bullets&&(p.children().removeClass(s.bullets_active_class),e(p.children().get(t)).addClass(s.bullets_active_class))},f.update_active_link=function(t){var n=e('[data-orbit-link="'+f.slides().eq(t).attr("data-orbit-slide")+'"]');n.siblings().removeClass(s.bullets_active_class),n.addClass(s.bullets_active_class)},f.build_markup=function(){c.wrap('<div class="'+s.container_class+'"></div>'),l=c.parent(),c.addClass(s.slides_container_class),s.stack_on_small&&l.addClass(s.stack_on_small_class),s.navigation_arrows&&(l.append(e('<a href="#"><span></span></a>').addClass(s.prev_class)),l.append(e('<a href="#"><span></span></a>').addClass(s.next_class))),s.timer&&(d=e("<div>").addClass(s.timer_container_class),d.append("<span>"),d.append(e("<div>").addClass(s.timer_progress_class)),d.addClass(s.timer_paused_class),l.append(d)),s.slide_number&&(h=e("<div>").addClass(s.slide_number_class),h.append("<span></span> "+s.slide_number_text+" <span></span>"),l.append(h)),s.bullets&&(p=e("<ol>").addClass(s.bullets_container_class),l.append(p),p.wrap('<div class="orbit-bullets-container"></div>'),f.slides().each(function(t,n){var r=e("<li>").attr("data-orbit-slide",t).on("click",f.link_bullet);p.append(r)}))},f._goto=function(t,n){if(t===v)return!1;typeof g=="object"&&g.restart();var r=f.slides(),i="next";y=!0,t<v&&(i="prev");if(t>=r.length){if(!s.circular)return!1;t=0}else if(t<0){if(!s.circular)return!1;t=r.length-1}var o=e(r.get(v)),u=e(r.get(t));o.css("zIndex",2),o.removeClass(s.active_slide_class),u.css("zIndex",4).addClass(s.active_slide_class),c.trigger("before-slide-change.fndtn.orbit"),s.before_slide_change(),f.update_active_link(t);var a=function(){var e=function(){v=t,y=!1,n===!0&&(g=f.create_timer(),g.start()),f.update_slide_number(v),c.trigger("after-slide-change.fndtn.orbit",[{slide_number:v,total_slides:r.length}]),s.after_slide_change(v,r.length)};c.height()!=u.height()&&s.variable_height?c.animate({height:u.height()},250,"linear",e):e()};if(r.length===1)return a(),!1;var l=function(){i==="next"&&m.next(o,u,a),i==="prev"&&m.prev(o,u,a)};u.height()>c.height()&&s.variable_height?c.animate({height:u.height()},250,"linear",l):l()},f.next=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(v+1)},f.prev=function(e){e.stopImmediatePropagation(),e.preventDefault(),f._goto(v-1)},f.link_custom=function(t){t.preventDefault();var n=e(this).attr("data-orbit-link");if(typeof n=="string"&&(n=e.trim(n))!=""){var r=l.find("[data-orbit-slide="+n+"]");r.index()!=-1&&f._goto(r.index())}},f.link_bullet=function(t){var n=e(this).attr("data-orbit-slide");if(typeof n=="string"&&(n=e.trim(n))!="")if(isNaN(parseInt(n))){var r=l.find("[data-orbit-slide="+n+"]");r.index()!=-1&&f._goto(r.index()+1)}else f._goto(parseInt(n))},f.timer_callback=function(){f._goto(v+1,!0)},f.compute_dimensions=function(){var t=e(f.slides().get(v)),n=t.height();s.variable_height||f.slides().each(function(){e(this).height()>n&&(n=e(this).height())}),c.height(n)},f.create_timer=function(){var e=new o(l.find("."+s.timer_container_class),s,f.timer_callback);return e},f.stop_timer=function(){typeof g=="object"&&g.stop()},f.toggle_timer=function(){var e=l.find("."+s.timer_container_class);e.hasClass(s.timer_paused_class)?(typeof g=="undefined"&&(g=f.create_timer()),g.start()):typeof g=="object"&&g.stop()},f.init=function(){f.build_markup(),s.timer&&(g=f.create_timer(),Foundation.utils.image_loaded(this.slides().children("img"),g.start)),m=new a(s,c),s.animation==="slide"&&(m=new u(s,c)),l.on("click","."+s.next_class,f.next),l.on("click","."+s.prev_class,f.prev),s.next_on_click&&l.on("click","."+s.slides_container_class+" [data-orbit-slide]",f.link_bullet),l.on("click",f.toggle_timer),s.swipe&&l.on("touchstart.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);var t={start_page_x:e.touches[0].pageX,start_page_y:e.touches[0].pageY,start_time:(new Date).getTime(),delta_x:0,is_scrolling:r};l.data("swipe-transition",t),e.stopPropagation()}).on("touchmove.fndtn.orbit",function(e){e.touches||(e=e.originalEvent);if(e.touches.length>1||e.scale&&e.scale!==1)return;var t=l.data("swipe-transition");typeof t=="undefined"&&(t={}),t.delta_x=e.touches[0].pageX-t.start_page_x,typeof t.is_scrolling=="undefined"&&(t.is_scrolling=!!(t.is_scrolling||Math.abs(t.delta_x)<Math.abs(e.touches[0].pageY-t.start_page_y)));if(!t.is_scrolling&&!t.active){e.preventDefault();var n=t.delta_x<0?v+1:v-1;t.active=!0,f._goto(n)}}).on("touchend.fndtn.orbit",function(e){l.data("swipe-transition",{}),e.stopPropagation()}),l.on("mouseenter.fndtn.orbit",function(e){s.timer&&s.pause_on_hover&&f.stop_timer()}).on("mouseleave.fndtn.orbit",function(e){s.timer&&s.resume_on_mouseout&&g.start()}),e(n).on("click","[data-orbit-link]",f.link_custom),e(t).on("load resize",f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),f.compute_dimensions),Foundation.utils.image_loaded(this.slides().children("img"),function(){l.prev("."+s.preloader_class).css("display","none"),f.update_slide_number(0),f.update_active_link(0),c.trigger("ready.fndtn.orbit")})},f.init()},o=function(e,t,n){var r=this,i=t.timer_speed,s=e.find("."+t.timer_progress_class),o,u,a=-1;this.update_progress=function(e){var t=s.clone();t.attr("style",""),t.css("width",e+"%"),s.replaceWith(t),s=t},this.restart=function(){clearTimeout(u),e.addClass(t.timer_paused_class),a=-1,r.update_progress(0)},this.start=function(){if(!e.hasClass(t.timer_paused_class))return!0;a=a===-1?i:a,e.removeClass(t.timer_paused_class),o=(new Date).getTime(),s.animate({width:"100%"},a,"linear"),u=setTimeout(function(){r.restart(),n()},a),e.trigger("timer-started.fndtn.orbit")},this.stop=function(){if(e.hasClass(t.timer_paused_class))return!0;clearTimeout(u),e.addClass(t.timer_paused_class);var n=(new Date).getTime();a-=n-o;var s=100-a/i*100;r.update_progress(s),e.trigger("timer-stopped.fndtn.orbit")}},u=function(t,n){var r=t.animation_speed,i=e("html[dir=rtl]").length===1,s=i?"marginRight":"marginLeft",o={};o[s]="0%",this.next=function(e,t,n){e.animate({marginLeft:"-100%"},r),t.animate(o,r,function(){e.css(s,"100%"),n()})},this.prev=function(e,t,n){e.animate({marginLeft:"100%"},r),t.css(s,"-100%"),t.animate(o,r,function(){e.css(s,"100%"),n()})}},a=function(t,n){var r=t.animation_speed,i=e("html[dir=rtl]").length===1,s=i?"marginRight":"marginLeft";this.next=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},r,"linear",function(){e.css("margin","100%"),n()})},this.prev=function(e,t,n){t.css({margin:"0%",opacity:"0.01"}),t.animate({opacity:"1"},r,"linear",function(){e.css("margin","100%"),n()})}};Foundation.libs=Foundation.libs||{},Foundation.libs.orbit={name:"orbit",version:"5.4.5",settings:{animation:"slide",timer_speed:1e4,pause_on_hover:!0,resume_on_mouseout:!1,next_on_click:!0,animation_speed:500,stack_on_small:!1,navigation_arrows:!0,slide_number:!0,slide_number_text:"of",container_class:"orbit-container",stack_on_small_class:"orbit-stack-on-small",next_class:"orbit-next",prev_class:"orbit-prev",timer_container_class:"orbit-timer",timer_paused_class:"paused",timer_progress_class:"orbit-progress",slides_container_class:"orbit-slides-container",preloader_class:"preloader",slide_selector:"*",bullets_container_class:"orbit-bullets",bullets_active_class:"active",slide_number_class:"orbit-slide-number",caption_class:"orbit-caption",active_slide_class:"active",orbit_transition_class:"orbit-transitioning",bullets:!0,circular:!0,timer:!0,variable_height:!1,swipe:!0,before_slide_change:i,after_slide_change:i},init:function(e,t,n){var r=this;this.bindings(t,n)},events:function(e){var t=new s(this.S(e),this.S(e).data("orbit-init"));this.S(e).data(this.name+"-instance",t)},reflow:function(){var e=this;if(e.S(e.scope).is("[data-orbit]")){var t=e.S(e.scope),n=t.data(e.name+"-instance");n.compute_dimensions()}else e.S("[data-orbit]",e.scope).each(function(t,n){var r=e.S(n),i=e.data_options(r),s=r.data(e.name+"-instance");s.compute_dimensions()})}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.offcanvas={name:"offcanvas",version:"5.4.5",settings:{open_method:"move",close_on_click:!1},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=t.S,r="",i="",s="";this.settings.open_method==="move"?(r="move-",i="right",s="left"):this.settings.open_method==="overlap_single"?(r="offcanvas-overlap-",i="right",s="left"):this.settings.open_method==="overlap"&&(r="offcanvas-overlap"),n(this.scope).off(".offcanvas").on("click.fndtn.offcanvas",".left-off-canvas-toggle",function(s){t.click_toggle_class(s,r+i),t.settings.open_method!=="overlap"&&n(".left-submenu").removeClass(r+i),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".left-off-canvas-menu a",function(s){var o=t.get_settings(s),u=n(this).parent();o.close_on_click&&!u.hasClass("has-submenu")&&!u.hasClass("back")?(t.hide.call(t,r+i,t.get_wrapper(s)),u.parent().removeClass(r+i)):n(this).parent().hasClass("has-submenu")?(s.preventDefault(),n(this).siblings(".left-submenu").toggleClass(r+i)):u.hasClass("back")&&(s.preventDefault(),u.parent().removeClass(r+i)),e(".left-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-toggle",function(i){t.click_toggle_class(i,r+s),t.settings.open_method!=="overlap"&&n(".right-submenu").removeClass(r+s),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".right-off-canvas-menu a",function(i){var o=t.get_settings(i),u=n(this).parent();o.close_on_click&&!u.hasClass("has-submenu")&&!u.hasClass("back")?(t.hide.call(t,r+s,t.get_wrapper(i)),u.parent().removeClass(r+s)):n(this).parent().hasClass("has-submenu")?(i.preventDefault(),n(this).siblings(".right-submenu").toggleClass(r+s)):u.hasClass("back")&&(i.preventDefault(),u.parent().removeClass(r+s)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(o){t.click_remove_class(o,r+s),n(".right-submenu").removeClass(r+s),i&&(t.click_remove_class(o,r+i),n(".left-submenu").removeClass(r+s)),e(".right-off-canvas-toggle").attr("aria-expanded","true")}).on("click.fndtn.offcanvas",".exit-off-canvas",function(n){t.click_remove_class(n,r+s),e(".left-off-canvas-toggle").attr("aria-expanded","false"),i&&(t.click_remove_class(n,r+i),e(".right-off-canvas-toggle").attr("aria-expanded","false"))})},toggle:function(e,t){t=t||this.get_wrapper(),t.is("."+e)?this.hide(e,t):this.show(e,t)},show:function(e,t){t=t||this.get_wrapper(),t.trigger("open").trigger("open.fndtn.offcanvas"),t.addClass(e)},hide:function(e,t){t=t||this.get_wrapper(),t.trigger("close").trigger("close.fndtn.offcanvas"),t.removeClass(e)},click_toggle_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.toggle(t,n)},click_remove_class:function(e,t){e.preventDefault();var n=this.get_wrapper(e);this.hide(t,n)},get_settings:function(e){var t=this.S(e.target).closest("["+this.attr_name()+"]");return t.data(this.attr_name(!0)+"-init")||this.settings},get_wrapper:function(e){var t=this.S(e?e.target:this.scope).closest(".off-canvas-wrap");return t.length===0&&(t=this.S(".off-canvas-wrap")),t},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.alert={name:"alert",version:"5.4.5",settings:{callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;e(this.scope).off(".alert").on("click.fndtn.alert","["+this.attr_name()+"] .close",function(e){var r=n(this).closest("["+t.attr_name()+"]"),i=r.data(t.attr_name(!0)+"-init")||t.settings;e.preventDefault(),Modernizr.csstransitions?(r.addClass("alert-close"),r.on("transitionend webkitTransitionEnd oTransitionEnd",function(e){n(this).trigger("close").trigger("close.fndtn.alert").remove(),i.callback()})):r.fadeOut(300,function(){n(this).trigger("close").trigger("close.fndtn.alert").remove(),i.callback()})})},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";function i(e){var t=/fade/i.test(e),n=/pop/i.test(e);return{animate:t||n,pop:n,fade:t}}Foundation.libs.reveal={name:"reveal",version:"5.4.5",locked:!1,settings:{animation:"fadeAndPop",animation_speed:250,close_on_background_click:!0,close_on_esc:!0,dismiss_modal_class:"close-reveal-modal",bg_class:"reveal-modal-bg",root_element:"body",open:function(){},opened:function(){},close:function(){},closed:function(){},bg:e(".reveal-modal-bg"),css:{open:{opacity:0,visibility:"visible",display:"block"},close:{opacity:1,visibility:"hidden",display:"none"}}},init:function(t,n,r){e.extend(!0,this.settings,n,r),this.bindings(n,r)},events:function(e){var t=this,r=t.S;return r(this.scope).off(".reveal").on("click.fndtn.reveal","["+this.add_namespace("data-reveal-id")+"]:not([disabled])",function(e){e.preventDefault();if(!t.locked){var n=r(this),i=n.data(t.data_attr("reveal-ajax"));t.locked=!0;if(typeof i=="undefined")t.open.call(t,n);else{var s=i===!0?n.attr("href"):i;t.open.call(t,n,{url:s})}}}),r(n).on("click.fndtn.reveal",this.close_targets(),function(e){e.preventDefault();if(!t.locked){var n=r("["+t.attr_name()+"].open").data(t.attr_name(!0)+"-init"),i=r(e.target)[0]===r("."+n.bg_class)[0];if(i){if(!n.close_on_background_click)return;e.stopPropagation()}t.locked=!0,t.close.call(t,i?r("["+t.attr_name()+"].open"):r(this).closest("["+t.attr_name()+"]"))}}),r("["+t.attr_name()+"]",this.scope).length>0?r(this.scope).on("open.fndtn.reveal",this.settings.open).on("opened.fndtn.reveal",this.settings.opened).on("opened.fndtn.reveal",this.open_video).on("close.fndtn.reveal",this.settings.close).on("closed.fndtn.reveal",this.settings.closed).on("closed.fndtn.reveal",this.close_video):r(this.scope).on("open.fndtn.reveal","["+t.attr_name()+"]",this.settings.open).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.settings.opened).on("opened.fndtn.reveal","["+t.attr_name()+"]",this.open_video).on("close.fndtn.reveal","["+t.attr_name()+"]",this.settings.close).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.settings.closed).on("closed.fndtn.reveal","["+t.attr_name()+"]",this.close_video),!0},key_up_on:function(e){var t=this;return t.S("body").off("keyup.fndtn.reveal").on("keyup.fndtn.reveal",function(e){var n=t.S("["+t.attr_name()+"].open"),r=n.data(t.attr_name(!0)+"-init")||t.settings;r&&e.which===27&&r.close_on_esc&&!t.locked&&t.close.call(t,n)}),!0},key_up_off:function(e){return this.S("body").off("keyup.fndtn.reveal"),!0},open:function(n,r){var i=this,s;n?typeof n.selector!="undefined"?s=i.S("#"+n.data(i.data_attr("reveal-id"))).first():(s=i.S(this.scope),r=n):s=i.S(this.scope);var o=s.data(i.attr_name(!0)+"-init");o=o||this.settings;if(s.hasClass("open")&&n.attr("data-reveal-id")==s.attr("id"))return i.close(s);if(!s.hasClass("open")){var u=i.S("["+i.attr_name()+"].open");typeof s.data("css-top")=="undefined"&&s.data("css-top",parseInt(s.css("top"),10)).data("offset",this.cache_offset(s)),this.key_up_on(s),s.trigger("open").trigger("open.fndtn.reveal"),u.length<1&&this.toggle_bg(s,!0),typeof r=="string"&&(r={url:r});if(typeof r=="undefined"||!r.url)u.length>0&&this.hide(u,o.css.close),this.show(s,o.css.open);else{var a=typeof r.success!="undefined"?r.success:null;e.extend(r,{success:function(t,n,r){e.isFunction(a)&&a(t,n,r),s.html(t),i.S(s).foundation("section","reflow"),i.S(s).children().foundation(),u.length>0&&i.hide(u,o.css.close),i.show(s,o.css.open)}}),e.ajax(r)}}i.S(t).trigger("resize")},close:function(e){var e=e&&e.length?e:this.S(this.scope),t=this.S("["+this.attr_name()+"].open"),n=e.data(this.attr_name(!0)+"-init")||this.settings;t.length>0&&(this.locked=!0,this.key_up_off(e),e.trigger("close").trigger("close.fndtn.reveal"),this.toggle_bg(e,!1),this.hide(t,n.css.close,n))},close_targets:function(){var e="."+this.settings.dismiss_modal_class;return this.settings.close_on_background_click?e+", ."+this.settings.bg_class:e},toggle_bg:function(t,n){this.S("."+this.settings.bg_class).length===0&&(this.settings.bg=e("<div />",{"class":this.settings.bg_class}).appendTo("body").hide());var i=this.settings.bg.filter(":visible").length>0;n!=i&&((n==r?i:!n)?this.hide(this.settings.bg):this.show(this.settings.bg))},show:function(n,r){if(r){var s=n.data(this.attr_name(!0)+"-init")||this.settings,o=s.root_element;if(n.parent(o).length===0){var u=n.wrap('<div style="display: none;" />').parent();n.on("closed.fndtn.reveal.wrapped",function(){n.detach().appendTo(u),n.unwrap().unbind("closed.fndtn.reveal.wrapped")}),n.detach().appendTo(o)}var a=i(s.animation);a.animate||(this.locked=!1);if(a.pop){r.top=e(t).scrollTop()-n.data("offset")+"px";var f={top:e(t).scrollTop()+n.data("css-top")+"px",opacity:1};return setTimeout(function(){return n.css(r).animate(f,s.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),s.animation_speed/2)}if(a.fade){r.top=e(t).scrollTop()+n.data("css-top")+"px";var f={opacity:1};return setTimeout(function(){return n.css(r).animate(f,s.animation_speed,"linear",function(){this.locked=!1,n.trigger("opened").trigger("opened.fndtn.reveal")}.bind(this)).addClass("open")}.bind(this),s.animation_speed/2)}return n.css(r).show().css({opacity:1}).addClass("open").trigger("opened").trigger("opened.fndtn.reveal")}var s=this.settings;return i(s.animation).fade?n.fadeIn(s.animation_speed/2):(this.locked=!1,n.show())},hide:function(n,r){if(r){var s=n.data(this.attr_name(!0)+"-init");s=s||this.settings;var o=i(s.animation);o.animate||(this.locked=!1);if(o.pop){var u={top:-e(t).scrollTop()-n.data("offset")+"px",opacity:0};return setTimeout(function(){return n.animate(u,s.animation_speed,"linear",function(){this.locked=!1,n.css(r).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),s.animation_speed/2)}if(o.fade){var u={opacity:0};return setTimeout(function(){return n.animate(u,s.animation_speed,"linear",function(){this.locked=!1,n.css(r).trigger("closed").trigger("closed.fndtn.reveal")}.bind(this)).removeClass("open")}.bind(this),s.animation_speed/2)}return n.hide().css(r).removeClass("open").trigger("closed").trigger("closed.fndtn.reveal")}var s=this.settings;return i(s.animation).fade?n.fadeOut(s.animation_speed/2):n.hide()},close_video:function(t){var n=e(".flex-video",t.target),r=e("iframe",n);r.length>0&&(r.attr("data-src",r[0].src),r.attr("src",r.attr("src")),n.hide())},open_video:function(t){var n=e(".flex-video",t.target),i=n.find("iframe");if(i.length>0){var s=i.attr("data-src");if(typeof s=="string")i[0].src=i.attr("data-src");else{var o=i[0].src;i[0].src=r,i[0].src=o}n.show()}},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},cache_offset:function(e){var t=e.show().height()+parseInt(e.css("top"),10);return e.hide(),t},off:function(){e(this.scope).off(".fndtn.reveal")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.interchange={name:"interchange",version:"5.4.5",cache:{},images_loaded:!1,nodes_loaded:!1,settings:{load_attr:"interchange",named_queries:{"default":"only screen",small:Foundation.media_queries.small,medium:Foundation.media_queries.medium,large:Foundation.media_queries.large,xlarge:Foundation.media_queries.xlarge,xxlarge:Foundation.media_queries.xxlarge,landscape:"only screen and (orientation: landscape)",portrait:"only screen and (orientation: portrait)",retina:"only screen and (-webkit-min-device-pixel-ratio: 2),only screen and (min--moz-device-pixel-ratio: 2),only screen and (-o-min-device-pixel-ratio: 2/1),only screen and (min-device-pixel-ratio: 2),only screen and (min-resolution: 192dpi),only screen and (min-resolution: 2dppx)"},directives:{replace:function(t,n,r){if(/IMG/.test(t[0].nodeName)){var i=t[0].src;if((new RegExp(n,"i")).test(i))return;return t[0].src=n,r(t[0].src)}var s=t.data(this.data_attr+"-last-path"),o=this;if(s==n)return;return/\.(gif|jpg|jpeg|tiff|png)([?#].*)?/i.test(n)?(e(t).css("background-image","url("+n+")"),t.data("interchange-last-path",n),r(n)):e.get(n,function(e){t.html(e),t.data(o.data_attr+"-last-path",n),r()})}}},init:function(t,n,r){Foundation.inherit(this,"throttle random_str"),this.data_attr=this.set_data_attr(),e.extend(!0,this.settings,n,r),this.bindings(n,r),this.load("images"),this.load("nodes")},get_media_hash:function(){var e="";for(var t in this.settings.named_queries)e+=matchMedia(this.settings.named_queries[t]).matches.toString();return e},events:function(){var n=this,r;return e(t).off(".interchange").on("resize.fndtn.interchange",n.throttle(function(){var e=n.get_media_hash();e!==r&&n.resize(),r=e},50)),this},resize:function(){var t=this.cache;if(!this.images_loaded||!this.nodes_loaded){setTimeout(e.proxy(this.resize,this),50);return}for(var n in t)if(t.hasOwnProperty(n)){var r=this.results(n,t[n]);r&&this.settings.directives[r.scenario[1]].call(this,r.el,r.scenario[0],function(){if(arguments[0]instanceof Array)var e=arguments
[0];else var e=Array.prototype.slice.call(arguments,0);r.el.trigger(r.scenario[1],e)})}},results:function(e,t){var n=t.length;if(n>0){var r=this.S("["+this.add_namespace("data-uuid")+'="'+e+'"]');while(n--){var i,s=t[n][2];this.settings.named_queries.hasOwnProperty(s)?i=matchMedia(this.settings.named_queries[s]):i=matchMedia(s);if(i.matches)return{el:r,scenario:t[n]}}}return!1},load:function(e,t){return(typeof this["cached_"+e]=="undefined"||t)&&this["update_"+e](),this["cached_"+e]},update_images:function(){var e=this.S("img["+this.data_attr+"]"),t=e.length,n=t,r=0,i=this.data_attr;this.cache={},this.cached_images=[],this.images_loaded=t===0;while(n--){r++;if(e[n]){var s=e[n].getAttribute(i)||"";s.length>0&&this.cached_images.push(e[n])}r===t&&(this.images_loaded=!0,this.enhance("images"))}return this},update_nodes:function(){var e=this.S("["+this.data_attr+"]").not("img"),t=e.length,n=t,r=0,i=this.data_attr;this.cached_nodes=[],this.nodes_loaded=t===0;while(n--){r++;var s=e[n].getAttribute(i)||"";s.length>0&&this.cached_nodes.push(e[n]),r===t&&(this.nodes_loaded=!0,this.enhance("nodes"))}return this},enhance:function(n){var r=this["cached_"+n].length;while(r--)this.object(e(this["cached_"+n][r]));return e(t).trigger("resize").trigger("resize.fndtn.interchange")},convert_directive:function(e){var t=this.trim(e);return t.length>0?t:"replace"},parse_scenario:function(e){var t=e[0].match(/(.+),\s*(\w+)\s*$/),n=e[1];if(t)var r=t[1],i=t[2];else var s=e[0].split(/,\s*$/),r=s[0],i="";return[this.trim(r),this.convert_directive(i),this.trim(n)]},object:function(e){var t=this.parse_data_attr(e),n=[],r=t.length;if(r>0)while(r--){var i=t[r].split(/\((.*?)(\))$/);if(i.length>1){var s=this.parse_scenario(i);n.push(s)}}return this.store(e,n)},store:function(e,t){var n=this.random_str(),r=e.data(this.add_namespace("uuid",!0));return this.cache[r]?this.cache[r]:(e.attr(this.add_namespace("data-uuid"),n),this.cache[n]=t)},trim:function(t){return typeof t=="string"?e.trim(t):t},set_data_attr:function(e){return e?this.namespace.length>0?this.namespace+"-"+this.settings.load_attr:this.settings.load_attr:this.namespace.length>0?"data-"+this.namespace+"-"+this.settings.load_attr:"data-"+this.settings.load_attr},parse_data_attr:function(e){var t=e.attr(this.attr_name()).split(/\[(.*?)\]/),n=t.length,r=[];while(n--)t[n].replace(/[\W\d]+/,"").length>4&&r.push(t[n]);return r},reflow:function(){this.load("images",!0),this.load("nodes",!0)}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs["magellan-expedition"]={name:"magellan-expedition",version:"5.4.5",settings:{active_class:"active",threshold:0,destination_threshold:20,throttle_delay:30,fixed_top:0},init:function(e,t,n){Foundation.inherit(this,"throttle"),this.bindings(t,n)},events:function(){var n=this,r=n.S,i=n.settings;n.set_expedition_position(),r(n.scope).off(".magellan").on("click.fndtn.magellan","["+n.add_namespace("data-magellan-arrival")+'] a[href^="#"]',function(t){t.preventDefault();var r=e(this).closest("["+n.attr_name()+"]"),i=r.data("magellan-expedition-init"),s=this.hash.split("#").join(""),o=e("a[name='"+s+"']");o.length===0&&(o=e("#"+s));var u=o.offset().top-i.destination_threshold+1;u-=r.outerHeight(),e("html, body").stop().animate({scrollTop:u},700,"swing",function(){history.pushState?history.pushState(null,null,"#"+s):location.hash="#"+s})}).on("scroll.fndtn.magellan",n.throttle(this.check_for_arrivals.bind(this),i.throttle_delay)),e(t).on("resize.fndtn.magellan",n.throttle(this.set_expedition_position.bind(this),i.throttle_delay))},check_for_arrivals:function(){var e=this;e.update_arrivals(),e.update_expedition_positions()},set_expedition_position:function(){var t=this;e("["+this.attr_name()+"=fixed]",t.scope).each(function(n,r){var i=e(this),s=i.data("magellan-expedition-init"),o=i.attr("styles"),u,a;i.attr("style",""),u=i.offset().top+s.threshold,a=parseInt(i.data("magellan-fixed-top")),isNaN(a)||(t.settings.fixed_top=a),i.data(t.data_attr("magellan-top-offset"),u),i.attr("style",o)})},update_expedition_positions:function(){var n=this,r=e(t).scrollTop();e("["+this.attr_name()+"=fixed]",n.scope).each(function(){var t=e(this),i=t.data("magellan-expedition-init"),s=t.attr("style"),o=t.data("magellan-top-offset");if(r+n.settings.fixed_top>=o){var u=t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]");u.length===0&&(u=t.clone(),u.removeAttr(n.attr_name()),u.attr(n.add_namespace("data-magellan-expedition-clone"),""),t.before(u)),t.css({position:"fixed",top:i.fixed_top}).addClass("fixed")}else t.prev("["+n.add_namespace("data-magellan-expedition-clone")+"]").remove(),t.attr("style",s).css("position","").css("top","").removeClass("fixed")})},update_arrivals:function(){var n=this,r=e(t).scrollTop();e("["+this.attr_name()+"]",n.scope).each(function(){var t=e(this),i=t.data(n.attr_name(!0)+"-init"),s=n.offsets(t,r),o=t.find("["+n.add_namespace("data-magellan-arrival")+"]"),u=!1;s.each(function(e,r){if(r.viewport_offset>=r.top_offset){var s=t.find("["+n.add_namespace("data-magellan-arrival")+"]");return s.not(r.arrival).removeClass(i.active_class),r.arrival.addClass(i.active_class),u=!0,!0}}),u||o.removeClass(i.active_class)})},offsets:function(t,n){var r=this,i=t.data(r.attr_name(!0)+"-init"),s=n;return t.find("["+r.add_namespace("data-magellan-arrival")+"]").map(function(n,o){var u=e(this).data(r.data_attr("magellan-arrival")),a=e("["+r.add_namespace("data-magellan-destination")+"="+u+"]");if(a.length>0){var f=Math.floor(a.offset().top-i.destination_threshold-t.outerHeight());return{destination:a,arrival:e(this),top_offset:f,viewport_offset:s}}}).sort(function(e,t){return e.top_offset<t.top_offset?-1:e.top_offset>t.top_offset?1:0})},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){this.S(this.scope).off(".magellan"),this.S(t).off(".magellan")},reflow:function(){var t=this;e("["+t.add_namespace("data-magellan-expedition-clone")+"]",t.scope).remove()}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.accordion={name:"accordion",version:"5.4.5",settings:{active_class:"active",multi_expand:!1,toggleable:!0,callback:function(){}},init:function(e,t,n){this.bindings(t,n)},events:function(){var t=this,n=this.S;n(this.scope).off(".fndtn.accordion").on("click.fndtn.accordion","["+this.attr_name()+"] > dd > a",function(r){var i=n(this).closest("["+t.attr_name()+"]"),s=t.attr_name()+"="+i.attr(t.attr_name()),o=i.data(t.attr_name(!0)+"-init"),u=n("#"+this.href.split("#")[1]),a=e("> dd",i),f=a.children(".content"),l=f.filter("."+o.active_class);r.preventDefault(),i.attr(t.attr_name())&&(f=f.add("["+s+"] dd > .content"),a=a.add("["+s+"] dd"));if(o.toggleable&&u.is(l)){u.parent("dd").toggleClass(o.active_class,!1),u.toggleClass(o.active_class,!1),o.callback(u),u.triggerHandler("toggled",[i]),i.triggerHandler("toggled",[u]);return}o.multi_expand||(f.removeClass(o.active_class),a.removeClass(o.active_class)),u.addClass(o.active_class).parent().addClass(o.active_class),o.callback(u),u.triggerHandler("toggled",[i]),i.triggerHandler("toggled",[u])})},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.topbar={name:"topbar",version:"5.4.5",settings:{index:0,sticky_class:"sticky",custom_back_text:!0,back_text:"Back",mobile_show_parent_link:!0,is_hover:!0,scrolltop:!0,sticky_on:"all"},init:function(t,n,r){Foundation.inherit(this,"add_custom_rule register_media throttle");var i=this;i.register_media("topbar","foundation-mq-topbar"),this.bindings(n,r),i.S("["+this.attr_name()+"]",this.scope).each(function(){var t=e(this),n=t.data(i.attr_name(!0)+"-init"),r=i.S("section, .top-bar-section",this);t.data("index",0);var s=t.parent();s.hasClass("fixed")||i.is_sticky(t,s,n)?(i.settings.sticky_class=n.sticky_class,i.settings.sticky_topbar=t,t.data("height",s.outerHeight()),t.data("stickyoffset",s.offset().top)):t.data("height",t.outerHeight()),n.assembled||i.assemble(t),n.is_hover?i.S(".has-dropdown",t).addClass("not-click"):i.S(".has-dropdown",t).removeClass("not-click"),i.add_custom_rule(".f-topbar-fixed { padding-top: "+t.data("height")+"px }"),s.hasClass("fixed")&&i.S("body").addClass("f-topbar-fixed")})},is_sticky:function(e,t,n){var r=t.hasClass(n.sticky_class);return r&&n.sticky_on==="all"?!0:r&&this.small()&&n.sticky_on==="small"?matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:r&&this.medium()&&n.sticky_on==="medium"?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&!matchMedia(Foundation.media_queries.large).matches:r&&this.large()&&n.sticky_on==="large"?matchMedia(Foundation.media_queries.small).matches&&matchMedia(Foundation.media_queries.medium).matches&&matchMedia(Foundation.media_queries.large).matches:!1},toggle:function(n){var r=this,i;n?i=r.S(n).closest("["+this.attr_name()+"]"):i=r.S("["+this.attr_name()+"]");var s=i.data(this.attr_name(!0)+"-init"),o=r.S("section, .top-bar-section",i);r.breakpoint()&&(r.rtl?(o.css({right:"0%"}),e(">.name",o).css({right:"100%"})):(o.css({left:"0%"}),e(">.name",o).css({left:"100%"})),r.S("li.moved",o).removeClass("moved"),i.data("index",0),i.toggleClass("expanded").css("height","")),s.scrolltop?i.hasClass("expanded")?i.parent().hasClass("fixed")&&(s.scrolltop?(i.parent().removeClass("fixed"),i.addClass("fixed"),r.S("body").removeClass("f-topbar-fixed"),t.scrollTo(0,0)):i.parent().removeClass("expanded")):i.hasClass("fixed")&&(i.parent().addClass("fixed"),i.removeClass("fixed"),r.S("body").addClass("f-topbar-fixed")):(r.is_sticky(i,i.parent(),s)&&i.parent().addClass("fixed"),i.parent().hasClass("fixed")&&(i.hasClass("expanded")?(i.addClass("fixed"),i.parent().addClass("expanded"),r.S("body").addClass("f-topbar-fixed")):(i.removeClass("fixed"),i.parent().removeClass("expanded"),r.update_sticky_positioning())))},timer:null,events:function(n){var r=this,i=this.S;i(this.scope).off(".topbar").on("click.fndtn.topbar","["+this.attr_name()+"] .toggle-topbar",function(e){e.preventDefault(),r.toggle(this)}).on("click.fndtn.topbar",'.top-bar .top-bar-section li a[href^="#"],['+this.attr_name()+'] .top-bar-section li a[href^="#"]',function(t){var n=e(this).closest("li");r.breakpoint()&&!n.hasClass("back")&&!n.hasClass("has-dropdown")&&r.toggle()}).on("click.fndtn.topbar","["+this.attr_name()+"] li.has-dropdown",function(t){var n=i(this),s=i(t.target),o=n.closest("["+r.attr_name()+"]"),u=o.data(r.attr_name(!0)+"-init");if(s.data("revealId")){r.toggle();return}if(r.breakpoint())return;if(u.is_hover&&!Modernizr.touch)return;t.stopImmediatePropagation(),n.hasClass("hover")?(n.removeClass("hover").find("li").removeClass("hover"),n.parents("li.hover").removeClass("hover")):(n.addClass("hover"),e(n).siblings().removeClass("hover"),s[0].nodeName==="A"&&s.parent().hasClass("has-dropdown")&&t.preventDefault())}).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown>a",function(e){if(r.breakpoint()){e.preventDefault();var t=i(this),n=t.closest("["+r.attr_name()+"]"),s=n.find("section, .top-bar-section"),o=t.next(".dropdown").outerHeight(),u=t.closest("li");n.data("index",n.data("index")+1),u.addClass("moved"),r.rtl?(s.css({right:-(100*n.data("index"))+"%"}),s.find(">.name").css({right:100*n.data("index")+"%"})):(s.css({left:-(100*n.data("index"))+"%"}),s.find(">.name").css({left:100*n.data("index")+"%"})),n.css("height",t.siblings("ul").outerHeight(!0)+n.data("height"))}}),i(t).off(".topbar").on("resize.fndtn.topbar",r.throttle(function(){r.resize.call(r)},50)).trigger("resize").trigger("resize.fndtn.topbar").load(function(){i(this).trigger("resize.fndtn.topbar")}),i("body").off(".topbar").on("click.fndtn.topbar",function(e){var t=i(e.target).closest("li").closest("li.hover");if(t.length>0)return;i("["+r.attr_name()+"] li.hover").removeClass("hover")}),i(this.scope).on("click.fndtn.topbar","["+this.attr_name()+"] .has-dropdown .back",function(e){e.preventDefault();var t=i(this),n=t.closest("["+r.attr_name()+"]"),s=n.find("section, .top-bar-section"),o=n.data(r.attr_name(!0)+"-init"),u=t.closest("li.moved"),a=u.parent();n.data("index",n.data("index")-1),r.rtl?(s.css({right:-(100*n.data("index"))+"%"}),s.find(">.name").css({right:100*n.data("index")+"%"})):(s.css({left:-(100*n.data("index"))+"%"}),s.find(">.name").css({left:100*n.data("index")+"%"})),n.data("index")===0?n.css("height",""):n.css("height",a.outerHeight(!0)+n.data("height")),setTimeout(function(){u.removeClass("moved")},300)}),i(this.scope).find(".dropdown a").focus(function(){e(this).parents(".has-dropdown").addClass("hover")}).blur(function(){e(this).parents(".has-dropdown").removeClass("hover")})},resize:function(){var e=this;e.S("["+this.attr_name()+"]").each(function(){var t=e.S(this),r=t.data(e.attr_name(!0)+"-init"),i=t.parent("."+e.settings.sticky_class),s;if(!e.breakpoint()){var o=t.hasClass("expanded");t.css("height","").removeClass("expanded").find("li").removeClass("hover"),o&&e.toggle(t)}e.is_sticky(t,i,r)&&(i.hasClass("fixed")?(i.removeClass("fixed"),s=i.offset().top,e.S(n.body).hasClass("f-topbar-fixed")&&(s-=t.data("height")),t.data("stickyoffset",s),i.addClass("fixed")):(s=i.offset().top,t.data("stickyoffset",s)))})},breakpoint:function(){return!matchMedia(Foundation.media_queries.topbar).matches},small:function(){return matchMedia(Foundation.media_queries.small).matches},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},assemble:function(t){var n=this,r=t.data(this.attr_name(!0)+"-init"),i=n.S("section, .top-bar-section",t);i.detach(),n.S(".has-dropdown>a",i).each(function(){var t=n.S(this),i=t.siblings(".dropdown"),s=t.attr("href"),o;i.find(".title.back").length||(r.mobile_show_parent_link==1&&s?o=e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="'+s+'">'+t.html()+"</a></li>"):o=e('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>'),r.custom_back_text==1?e("h5>a",o).html(r.back_text):e("h5>a",o).html("&laquo; "+t.html()),i.prepend(o))}),i.appendTo(t),this.sticky(),this.assembled(t)},assembled:function(t){t.data(this.attr_name(!0),e.extend({},t.data(this.attr_name(!0)),{assembled:!0}))},height:function(t){var n=0,r=this;return e("> li",t).each(function(){n+=r.S(this).outerHeight(!0)}),n},sticky:function(){var e=this;this.S(t).on("scroll",function(){e.update_sticky_positioning()})},update_sticky_positioning:function(){var e="."+this.settings.sticky_class,n=this.S(t),r=this;if(r.settings.sticky_topbar&&r.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(),this.settings)){var i=this.settings.sticky_topbar.data("stickyoffset");r.S(e).hasClass("expanded")||(n.scrollTop()>i?r.S(e).hasClass("fixed")||(r.S(e).addClass("fixed"),r.S("body").addClass("f-topbar-fixed")):n.scrollTop()<=i&&r.S(e).hasClass("fixed")&&(r.S(e).removeClass("fixed"),r.S("body").removeClass("f-topbar-fixed")))}},off:function(){this.S(this.scope).off(".fndtn.topbar"),this.S(t).off(".fndtn.topbar")},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.tab={name:"tab",version:"5.4.5",settings:{active_class:"active",callback:function(){},deep_linking:!1,scroll_to_content:!0,is_hover:!1},default_tab_hashes:[],init:function(e,t,n){var r=this,i=this.S;this.bindings(t,n),this.handle_location_hash_change(),i("["+this.attr_name()+"] > .active > a",this.scope).each(function(){r.default_tab_hashes.push(this.hash)})},events:function(){var e=this,n=this.S,r=function(t){var r=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");if(!r.is_hover||Modernizr.touch)t.preventDefault(),t.stopPropagation(),e.toggle_active_tab(n(this).parent())};n(this.scope).off(".tab").on("focus.fndtn.tab","["+this.attr_name()+"] > * > a",r).on("click.fndtn.tab","["+this.attr_name()+"] > * > a",r).on("mouseenter.fndtn.tab","["+this.attr_name()+"] > * > a",function(t){var r=n(this).closest("["+e.attr_name()+"]").data(e.attr_name(!0)+"-init");r.is_hover&&e.toggle_active_tab(n(this).parent())}),n(t).on("hashchange.fndtn.tab",function(t){t.preventDefault(),e.handle_location_hash_change()})},handle_location_hash_change:function(){var t=this,n=this.S;n("["+this.attr_name()+"]",this.scope).each(function(){var i=n(this).data(t.attr_name(!0)+"-init");if(i.deep_linking){var s;i.scroll_to_content?s=t.scope.location.hash:s=t.scope.location.hash.replace("fndtn-","");if(s!=""){var o=n(s);if(o.hasClass("content")&&o.parent().hasClass("tab-content"))t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+s+"]").parent());else{var u=o.closest(".content").attr("id");u!=r&&t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href=#"+u+"]").parent(),s)}}else for(var a in t.default_tab_hashes)t.toggle_active_tab(e("["+t.attr_name()+"] > * > a[href="+t.default_tab_hashes[a]+"]").parent())}})},toggle_active_tab:function(i,s){var o=this.S,u=i.closest("["+this.attr_name()+"]"),a=i.find("a"),f=i.children("a").first(),l="#"+f.attr("href").split("#")[1],c=o(l),h=i.siblings(),p=u.data(this.attr_name(!0)+"-init"),d=function(t){var r=e(this),i=e(this).parents("li").prev().children('[role="tab"]'),s=e(this).parents("li").next().children('[role="tab"]'),o;switch(t.keyCode){case 37:o=i;break;case 39:o=s;break;default:o=!1}o.length&&(r.attr({tabindex:"-1","aria-selected":null}),o.attr({tabindex:"0","aria-selected":!0}).focus()),e('[role="tabpanel"]').attr("aria-hidden","true"),e("#"+e(n.activeElement).attr("href").substring(1)).attr("aria-hidden",null)};o(this).data(this.data_attr("tab-content"))&&(l="#"+o(this).data(this.data_attr("tab-content")).split("#")[1],c=o(l)),p.deep_linking&&(p.scroll_to_content?(t.location.hash=s||l,s==r||s==l?i.parent()[0].scrollIntoView():o(l)[0].scrollIntoView()):s!=r?t.location.hash="fndtn-"+s.replace("#",""):t.location.hash="fndtn-"+l.replace("#","")),i.addClass(p.active_class).triggerHandler("opened"),a.attr({"aria-selected":"true",tabindex:0}),h.removeClass(p.active_class),h.find("a").attr({"aria-selected":"false",tabindex:-1}),c.siblings().removeClass(p.active_class).attr({"aria-hidden":"true",tabindex:-1}).end().addClass(p.active_class).attr("aria-hidden","false").find(":first-child").attr("tabindex",0),p.callback(i),c.children().attr("tab-index",0),c.triggerHandler("toggled",[i]),u.triggerHandler("toggled",[c]),a.on("keydown",d)},data_attr:function(e){return this.namespace.length>0?this.namespace+"-"+e:e},off:function(){},reflow:function(){}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.abide={name:"abide",version:"5.4.5",settings:{live_validate:!0,focus_on_invalid:!0,error_labels:!0,timeout:1e3,patterns:{alpha:/^[a-zA-Z]+$/,alpha_numeric:/^[a-zA-Z0-9]+$/,integer:/^[-+]?\d+$/,number:/^[-+]?\d*(?:[\.\,]\d+)?$/,card:/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/,cvv:/^([0-9]){3,4}$/,email:/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/,url:/^(https?|ftp|file|ssh):\/\/(((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-zA-Z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/,domain:/^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,6}$/,datetime:/^([0-2][0-9]{3})\-([0-1][0-9])\-([0-3][0-9])T([0-5][0-9])\:([0-5][0-9])\:([0-5][0-9])(Z|([\-\+]([0-1][0-9])\:00))$/,date:/(?:19|20)[0-9]{2}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-9])|(?:(?!02)(?:0[1-9]|1[0-2])-(?:30))|(?:(?:0[13578]|1[02])-31))$/,time:/^(0[0-9]|1[0-9]|2[0-3])(:[0-5][0-9]){2}$/,dateISO:/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/,month_day_year:/^(0[1-9]|1[012])[- \/.](0[1-9]|[12][0-9]|3[01])[- \/.]\d{4}$/,day_month_year:/^(0[1-9]|[12][0-9]|3[01])[- \/.](0[1-9]|1[012])[- \/.]\d{4}$/,color:/^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/},validators:{equalTo:function(e,t,r){var i=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,s=e.value,o=i===s;return o}}},timer:null,init:function(e,t,n){this.bindings(t,n)},events:function(t){var n=this,r=n.S(t).attr("novalidate","novalidate"),i=r.data(this.attr_name(!0)+"-init")||{};this.invalid_attr=this.add_namespace("data-invalid"),r.off(".abide").on("submit.fndtn.abide validate.fndtn.abide",function(e){var t=/ajax/i.test(n.S(this).attr(n.attr_name()));return n.validate(n.S(this).find("input, textarea, select").get(),e,t)}).on("reset",function(){return n.reset(e(this))}).find("input, textarea, select").off(".abide").on("blur.fndtn.abide change.fndtn.abide",function(e){n.validate([this],e)}).on("keydown.fndtn.abide",function(e){i.live_validate===!0&&(clearTimeout(n.timer),n.timer=setTimeout(function(){n.validate([this],e)}.bind(this),i.timeout))})},reset:function(t){t.removeAttr(this.invalid_attr),e(this.invalid_attr,t).removeAttr(this.invalid_attr),e(".error",t).not("small").removeClass("error")},validate:function(e,t,n){var r=this.parse_patterns(e),i=r.length,s=this.S(e[0]).closest("form"),o=/submit/.test(t.type);for(var u=0;u<i;u++)if(!r[u]&&(o||n))return this.settings.focus_on_invalid&&e[u].focus(),s.trigger("invalid"),this.S(e[u]).closest("form").attr(this.invalid_attr,""),!1;return(o||n)&&s.trigger("valid"),s.removeAttr(this.invalid_attr),n?!1:!0},parse_patterns:function(e){var t=e.length,n=[];while(t--)n.push(this.pattern(e[t]));return this.check_validation_and_apply_styles(n)},pattern:function(e){var t=e.getAttribute("type"),n=typeof e.getAttribute("required")=="string",r=e.getAttribute("pattern")||"";return this.settings.patterns.hasOwnProperty(r)&&r.length>0?[e,this.settings.patterns[r],n]:r.length>0?[e,new RegExp(r),n]:this.settings.patterns.hasOwnProperty(t)?[e,this.settings.patterns[t],n]:(r=/.*/,[e,r,n])},check_validation_and_apply_styles:function(t){var n=t.length,r=[],i=this.S(t[0][0]).closest("[data-"+this.attr_name(!0)+"]"),s=i.data(this.attr_name(!0)+"-init")||{};while(n--){var o=t[n][0],u=t[n][2],a=o.value.trim(),f=this.S(o).parent(),l=o.getAttribute(this.add_namespace("data-abide-validator")),c=o.type==="radio",h=o.type==="checkbox",p=this.S('label[for="'+o.getAttribute("id")+'"]'),d=u?o.value.length>0:!0,v=[],m,g;o.getAttribute(this.add_namespace("data-equalto"))&&(l="equalTo"),f.is("label")?m=f.parent():m=f,l&&(g=this.settings.validators[l].apply(this,[o,u,m]),v.push(g));if(c&&u)v.push(this.valid_radio(o,u));else if(h&&u)v.push(this.valid_checkbox(o,u));else{t[n][1].test(a)&&d||!u&&o.value.length<1||e(o).attr("disabled")?v.push(!0):v.push(!1),v=[v.every(function(e){return e})];if(v[0])this.S(o).removeAttr(this.invalid_attr),o.setAttribute("aria-invalid","false"),o.removeAttribute("aria-describedby"),m.removeClass("error"),p.length>0&&this.settings.error_labels&&p.removeClass("error").removeAttr("role"),e(o).triggerHandler("valid");else{this.S(o).attr(this.invalid_attr,""),o.setAttribute("aria-invalid","true");var y=m.find("small.error, span.error"),b=y.length>0?y[0].id:"";b.length>0&&o.setAttribute("aria-describedby",b),m.addClass("error"),p.length>0&&this.settings.error_labels&&p.addClass("error").attr("role","alert"),e(o).triggerHandler("invalid")}r.push(v[0])}}return r=[r.every(function(e){return e})],r},valid_checkbox:function(e,t){var e=this.S(e),n=e.is(":checked")||!t;return n?e.removeAttr(this.invalid_attr).parent().removeClass("error"):e.attr(this.invalid_attr,"").parent().addClass("error"),n},valid_radio:function(e,t){var n=e.getAttribute("name"),r=this.S(e).closest("[data-"+this.attr_name(!0)+"]").find("[name='"+n+"']"),i=r.length,s=!1;for(var o=0;o<i;o++)r[o].checked&&(s=!0);for(var o=0;o<i;o++)s?this.S(r[o]).removeAttr(this.invalid_attr).parent().removeClass("error"):this.S(r[o]).attr(this.invalid_attr,"").parent().addClass("error");return s},valid_equal:function(e,t,r){var i=n.getElementById(e.getAttribute(this.add_namespace("data-equalto"))).value,s=e.value,o=i===s;return o?(this.S(e).removeAttr(this.invalid_attr),r.removeClass("error"),label.length>0&&settings.error_labels&&label.removeClass("error")):(this.S(e).attr(this.invalid_attr,""),r.addClass("error"),label.length>0&&settings.error_labels&&label.addClass("error")),o},valid_oneof:function(e,t,n,r){var e=this.S(e),i=this.S("["+this.add_namespace("data-oneof")+"]"),s=i.filter(":checked").length>0;s?e.removeAttr(this.invalid_attr).parent().removeClass("error"):e.attr(this.invalid_attr,"").parent().addClass("error");if(!r){var o=this;i.each(function(){o.valid_oneof.call(o,this,null,null,!0)})}return s}}}(jQuery,window,window.document),function(e,t,n,r){"use strict";Foundation.libs.tooltip={name:"tooltip",version:"5.4.5",settings:{additional_inheritable_classes:[],tooltip_class:".tooltip",append_to:"body",touch_close_text:"Tap To Close",disable_for_touch:!1,hover_delay:200,show_on:"all",tip_template:function(e,t){return'<span data-selector="'+e+'" id="'+e+'" class="'+Foundation.libs.tooltip.settings.tooltip_class.substring(1)+'" role="tooltip">'+t+'<span class="nub"></span></span>'}},cache:{},init:function(e,t,n){Foundation.inherit(this,"random_str"),this.bindings(t,n)},should_show:function(t,n){var r=e.extend({},this.settings,this.data_options(t));return r.show_on==="all"?!0:this.small()&&r.show_on==="small"?!0:this.medium()&&r.show_on==="medium"?!0:this.large()&&r.show_on==="large"?!0:!1},medium:function(){return matchMedia(Foundation.media_queries.medium).matches},large:function(){return matchMedia(Foundation.media_queries.large).matches},events:function(t){var n=this,r=n.S;n.create(this.S(t)),e(this.scope).off(".tooltip").on("mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"]",function(t){var i=r(this),s=e.extend({},n.settings,n.data_options(i)),o=!1;if(Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&r(t.target).is("a"))return!1;if(/mouse/i.test(t.type)&&n.ie_touch(t))return!1;if(i.hasClass("open"))Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&t.preventDefault(),n.hide(i);else{if(s.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type))return;!s.disable_for_touch&&Modernizr.touch&&/touchstart|MSPointerDown/i.test(t.type)&&(t.preventDefault(),r(s.tooltip_class+".open").hide(),o=!0),/enter|over/i.test(t.type)?this.timer=setTimeout(function(){var e=n.showTip(i)}.bind(this),n.settings.hover_delay):t.type==="mouseout"||t.type==="mouseleave"?(clearTimeout(this.timer),n.hide(i)):n.showTip(i)}}).on("mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip","["+this.attr_name()+"].open",function(t){if(/mouse/i.test(t.type)&&n.ie_touch(t))return!1;if(e(this).data("tooltip-open-event-type")=="touch"&&t.type=="mouseleave")return;e(this).data("tooltip-open-event-type")=="mouse"&&/MSPointerDown|touchstart/i.test(t.type)?n.convert_to_touch(e(this)):n.hide(e(this))}).on("DOMNodeRemoved DOMAttrModified","["+this.attr_name()+"]:not(a)",function(e){n.hide(r(this))})},ie_touch:function(e){return!1},showTip:function(e){var t=this.getTip(e);if(this.should_show(e,t))return this.show(e);return},getTip:function(t){var n=this.selector(t),r=e.extend({},this.settings,this.data_options(t)),i=null;return n&&(i=this.S('span[data-selector="'+n+'"]'+r.tooltip_class)),typeof i=="object"?i:!1},selector:function(e){var t=e.attr("id"),n=e.attr(this.attr_name())||e.attr("data-selector");return(t&&t.length<1||!t)&&typeof n!="string"&&(n=this.random_str(6),e.attr("data-selector",n).attr("aria-describedby",n)),t&&t.length>0?t:n},create:function(n){var r=this,i=e.extend({},this.settings,this.data_options(n)),s=this.settings.tip_template;typeof i.tip_template=="string"&&t.hasOwnProperty(i.tip_template)&&(s=t[i.tip_template]);var o=e(s(this.selector(n),e("<div></div>").html(n.attr("title")).html())),u=this.inheritable_classes(n);o.addClass(u).appendTo(i.append_to),Modernizr.touch&&(o.append('<span class="tap-to-close">'+i.touch_close_text+"</span>"),o.on("touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip",function(e){r.hide(n)})),n.removeAttr("title").attr("title","")},reposition:function(t,n,r){var i,s,o,u,a,f;n.css("visibility","hidden").show(),i=t.data("width"),s=n.children(".nub"),o=s.outerHeight(),u=s.outerHeight(),this.small()?n.css({width:"100%"}):n.css({width:i?i:"auto"}),f=function(e,t,n,r,i,s){return e.css({top:t?t:"auto",bottom:r?r:"auto",left:i?i:"auto",right:n?n:"auto"}).end()},f(n,t.offset().top+t.outerHeight()+10,"auto","auto",t.offset().left);if(this.small())f(n,t.offset().top+t.outerHeight()+10,"auto","auto",12.5,e(this.scope).width()),n.addClass("tip-override"),f(s,-o,"auto","auto",t.offset().left);else{var l=t.offset().left;Foundation.rtl&&(s.addClass("rtl"),l=t.offset().left+t.outerWidth()-n.outerWidth()),f(n,t.offset().top+t.outerHeight()+10,"auto","auto",l),n.removeClass("tip-override"),r&&r.indexOf("tip-top")>-1?(Foundation.rtl&&s.addClass("rtl"),f(n,t.offset().top-n.outerHeight(),"auto","auto",l).removeClass("tip-override")):r&&r.indexOf("tip-left")>-1?(f(n,t.offset().top+t.outerHeight()/2-n.outerHeight()/2,"auto","auto",t.offset().left-n.outerWidth()-o).removeClass("tip-override"),s.removeClass("rtl")):r&&r.indexOf("tip-right")>-1&&(f(n,t.offset().top+t.outerHeight()/2-n.outerHeight()/2,"auto","auto",t.offset().left+t.outerWidth()+o).removeClass("tip-override"),s.removeClass("rtl"))}n.css("visibility","visible").hide()},small:function(){return matchMedia(Foundation.media_queries.small).matches&&!matchMedia(Foundation.media_queries.medium).matches},inheritable_classes:function(t){var n=e.extend({},this.settings,this.data_options(t)),r=["tip-top","tip-left","tip-bottom","tip-right","radius","round"].concat(n.additional_inheritable_classes),i=t.attr("class"),s=i?e.map(i.split(" "),function(t,n){if(e.inArray(t,r)!==-1)return t}).join(" "):"";return e.trim(s)},convert_to_touch:function(t){var n=this,r=n.getTip(t),i=e.extend({},n.settings,n.data_options(t));r.find(".tap-to-close").length===0&&(r.append('<span class="tap-to-close">'+i.touch_close_text+"</span>"),r.on("click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose",function(e){n.hide(t)})),t.data("tooltip-open-event-type","touch")},show:function(e){var t=this.getTip(e);e.data("tooltip-open-event-type")=="touch"&&this.convert_to_touch(e),this.reposition(e,t,e.attr("class")),e.addClass("open"),t.fadeIn(150)},hide:function(e){var t=this.getTip(e);t.fadeOut(150,function(){t.find(".tap-to-close").remove(),t.off("click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose"),e.removeClass("open")})},off:function(){var t=this;this.S(this.scope).off(".fndtn.tooltip"),this.S(this.settings.tooltip_class).each(function(n){e("["+t.attr_name()+"]").eq(n).attr("title",e(this).text())}).remove()},reflow:function(){}}}(jQuery,window,window.document);
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.offcanvas = {
    name : 'offcanvas',

    version : '5.4.5',

    settings : {
      open_method: 'move',
      close_on_click: false
    },

    init : function (scope, method, options) {
      this.bindings(method, options);
    },

    events : function () {
      var self = this,
          S = self.S,
          move_class = '',
          right_postfix = '',
          left_postfix = '';

      if (this.settings.open_method === 'move') {
        move_class = 'move-';
        right_postfix = 'right';
        left_postfix = 'left';
      } else if (this.settings.open_method === 'overlap_single') {
        move_class = 'offcanvas-overlap-';
        right_postfix = 'right';
        left_postfix = 'left';
      } else if (this.settings.open_method === 'overlap') {
        move_class = 'offcanvas-overlap';
      }

      S(this.scope).off('.offcanvas')
        .on('click.fndtn.offcanvas', '.left-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + right_postfix);
          if (self.settings.open_method !== 'overlap'){
            S(".left-submenu").removeClass(move_class + right_postfix);
          }
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.left-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if(settings.close_on_click && !parent.hasClass("has-submenu") && !parent.hasClass("back")){
            self.hide.call(self, move_class + right_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + right_postfix);
          }else if(S(this).parent().hasClass("has-submenu")){
            e.preventDefault();
            S(this).siblings(".left-submenu").toggleClass(move_class + right_postfix);
          }else if(parent.hasClass("back")){
            e.preventDefault();
            parent.parent().removeClass(move_class + right_postfix);
          }
          $('.left-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-toggle', function (e) {
          self.click_toggle_class(e, move_class + left_postfix);
          if (self.settings.open_method !== 'overlap'){
            S(".right-submenu").removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.right-off-canvas-menu a', function (e) {
          var settings = self.get_settings(e);
          var parent = S(this).parent();

          if(settings.close_on_click && !parent.hasClass("has-submenu") && !parent.hasClass("back")){
            self.hide.call(self, move_class + left_postfix, self.get_wrapper(e));
            parent.parent().removeClass(move_class + left_postfix);
          }else if(S(this).parent().hasClass("has-submenu")){
            e.preventDefault();
            S(this).siblings(".right-submenu").toggleClass(move_class + left_postfix);
          }else if(parent.hasClass("back")){
            e.preventDefault();
            parent.parent().removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + left_postfix);
          S(".right-submenu").removeClass(move_class + left_postfix);
          if (right_postfix){
            self.click_remove_class(e, move_class + right_postfix);
            S(".left-submenu").removeClass(move_class + left_postfix);
          }
          $('.right-off-canvas-toggle').attr('aria-expanded', 'true');
        })
        .on('click.fndtn.offcanvas', '.exit-off-canvas', function (e) {
          self.click_remove_class(e, move_class + left_postfix);
          $('.left-off-canvas-toggle').attr('aria-expanded', 'false');
          if (right_postfix) {
            self.click_remove_class(e, move_class + right_postfix);
            $('.right-off-canvas-toggle').attr('aria-expanded', "false");
          }
        });
    },

    toggle: function(class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      if ($off_canvas.is('.' + class_name)) {
        this.hide(class_name, $off_canvas);
      } else {
        this.show(class_name, $off_canvas);
      }
    },

    show: function(class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      $off_canvas.trigger('open').trigger('open.fndtn.offcanvas');
      $off_canvas.addClass(class_name);
    },

    hide: function(class_name, $off_canvas) {
      $off_canvas = $off_canvas || this.get_wrapper();
      $off_canvas.trigger('close').trigger('close.fndtn.offcanvas');
      $off_canvas.removeClass(class_name);
    },

    click_toggle_class: function(e, class_name) {
      e.preventDefault();
      var $off_canvas = this.get_wrapper(e);
      this.toggle(class_name, $off_canvas);
    },

    click_remove_class: function(e, class_name) {
      e.preventDefault();
      var $off_canvas = this.get_wrapper(e);
      this.hide(class_name, $off_canvas);
    },

    get_settings: function(e) {
      var offcanvas  = this.S(e.target).closest('[' + this.attr_name() + ']');
      return offcanvas.data(this.attr_name(true) + '-init') || this.settings;
    },

    get_wrapper: function(e) {
      var $off_canvas = this.S(e ? e.target : this.scope).closest('.off-canvas-wrap');

      if ($off_canvas.length === 0) {
        $off_canvas = this.S('.off-canvas-wrap');
      }
      return $off_canvas;
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  var noop = function() {};

  var Orbit = function(el, settings) {
    // Don't reinitialize plugin
    if (el.hasClass(settings.slides_container_class)) {
      return this;
    }

    var self = this,
        container,
        slides_container = el,
        number_container,
        bullets_container,
        timer_container,
        idx = 0,
        animate,
        timer,
        locked = false,
        adjust_height_after = false;


    self.slides = function() {
      return slides_container.children(settings.slide_selector);
    };

    self.slides().first().addClass(settings.active_slide_class);

    self.update_slide_number = function(index) {
      if (settings.slide_number) {
        number_container.find('span:first').text(parseInt(index)+1);
        number_container.find('span:last').text(self.slides().length);
      }
      if (settings.bullets) {
        bullets_container.children().removeClass(settings.bullets_active_class);
        $(bullets_container.children().get(index)).addClass(settings.bullets_active_class);
      }
    };

    self.update_active_link = function(index) {
      var link = $('[data-orbit-link="'+self.slides().eq(index).attr('data-orbit-slide')+'"]');
      link.siblings().removeClass(settings.bullets_active_class);
      link.addClass(settings.bullets_active_class);
    };

    self.build_markup = function() {
      slides_container.wrap('<div class="'+settings.container_class+'"></div>');
      container = slides_container.parent();
      slides_container.addClass(settings.slides_container_class);

      if (settings.stack_on_small) {
        container.addClass(settings.stack_on_small_class);
      }

      if (settings.navigation_arrows) {
        container.append($('<a href="#"><span></span></a>').addClass(settings.prev_class));
        container.append($('<a href="#"><span></span></a>').addClass(settings.next_class));
      }

      if (settings.timer) {
        timer_container = $('<div>').addClass(settings.timer_container_class);
        timer_container.append('<span>');
        timer_container.append($('<div>').addClass(settings.timer_progress_class));
        timer_container.addClass(settings.timer_paused_class);
        container.append(timer_container);
      }

      if (settings.slide_number) {
        number_container = $('<div>').addClass(settings.slide_number_class);
        number_container.append('<span></span> ' + settings.slide_number_text + ' <span></span>');
        container.append(number_container);
      }

      if (settings.bullets) {
        bullets_container = $('<ol>').addClass(settings.bullets_container_class);
        container.append(bullets_container);
        bullets_container.wrap('<div class="orbit-bullets-container"></div>');
        self.slides().each(function(idx, el) {
          var bullet = $('<li>').attr('data-orbit-slide', idx).on('click', self.link_bullet);;
          bullets_container.append(bullet);
        });
      }

    };

    self._goto = function(next_idx, start_timer) {
      // if (locked) {return false;}
      if (next_idx === idx) {return false;}
      if (typeof timer === 'object') {timer.restart();}
      var slides = self.slides();

      var dir = 'next';
      locked = true;
      if (next_idx < idx) {dir = 'prev';}
      if (next_idx >= slides.length) {
        if (!settings.circular) return false;
        next_idx = 0;
      } else if (next_idx < 0) {
        if (!settings.circular) return false;
        next_idx = slides.length - 1;
      }

      var current = $(slides.get(idx));
      var next = $(slides.get(next_idx));

      current.css('zIndex', 2);
      current.removeClass(settings.active_slide_class);
      next.css('zIndex', 4).addClass(settings.active_slide_class);

      slides_container.trigger('before-slide-change.fndtn.orbit');
      settings.before_slide_change();
      self.update_active_link(next_idx);

      var callback = function() {
        var unlock = function() {
          idx = next_idx;
          locked = false;
          if (start_timer === true) {timer = self.create_timer(); timer.start();}
          self.update_slide_number(idx);
          slides_container.trigger('after-slide-change.fndtn.orbit',[{slide_number: idx, total_slides: slides.length}]);
          settings.after_slide_change(idx, slides.length);
        };
        if (slides_container.height() != next.height() && settings.variable_height) {
          slides_container.animate({'height': next.height()}, 250, 'linear', unlock);
        } else {
          unlock();
        }
      };

      if (slides.length === 1) {callback(); return false;}

      var start_animation = function() {
        if (dir === 'next') {animate.next(current, next, callback);}
        if (dir === 'prev') {animate.prev(current, next, callback);}
      };

      if (next.height() > slides_container.height() && settings.variable_height) {
        slides_container.animate({'height': next.height()}, 250, 'linear', start_animation);
      } else {
        start_animation();
      }
    };

    self.next = function(e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      self._goto(idx + 1);
    };

    self.prev = function(e) {
      e.stopImmediatePropagation();
      e.preventDefault();
      self._goto(idx - 1);
    };

    self.link_custom = function(e) {
      e.preventDefault();
      var link = $(this).attr('data-orbit-link');
      if ((typeof link === 'string') && (link = $.trim(link)) != "") {
        var slide = container.find('[data-orbit-slide='+link+']');
        if (slide.index() != -1) {self._goto(slide.index());}
      }
    };

    self.link_bullet = function(e) {
      var index = $(this).attr('data-orbit-slide');
      if ((typeof index === 'string') && (index = $.trim(index)) != "") {
        if(isNaN(parseInt(index)))
        {
          var slide = container.find('[data-orbit-slide='+index+']');
          if (slide.index() != -1) {self._goto(slide.index() + 1);}
        }
        else
        {
          self._goto(parseInt(index));
        }
      }

    }

    self.timer_callback = function() {
      self._goto(idx + 1, true);
    }

    self.compute_dimensions = function() {
      var current = $(self.slides().get(idx));
      var h = current.height();
      if (!settings.variable_height) {
        self.slides().each(function(){
          if ($(this).height() > h) { h = $(this).height(); }
        });
      }
      slides_container.height(h);
    };

    self.create_timer = function() {
      var t = new Timer(
        container.find('.'+settings.timer_container_class),
        settings,
        self.timer_callback
      );
      return t;
    };

    self.stop_timer = function() {
      if (typeof timer === 'object') timer.stop();
    };

    self.toggle_timer = function() {
      var t = container.find('.'+settings.timer_container_class);
      if (t.hasClass(settings.timer_paused_class)) {
        if (typeof timer === 'undefined') {timer = self.create_timer();}
        timer.start();
      }
      else {
        if (typeof timer === 'object') {timer.stop();}
      }
    };

    self.init = function() {
      self.build_markup();
      if (settings.timer) {
        timer = self.create_timer();
        Foundation.utils.image_loaded(this.slides().children('img'), timer.start);
      }
      animate = new FadeAnimation(settings, slides_container);
      if (settings.animation === 'slide')
        animate = new SlideAnimation(settings, slides_container);

      container.on('click', '.'+settings.next_class, self.next);
      container.on('click', '.'+settings.prev_class, self.prev);

      if (settings.next_on_click) {
        container.on('click', '.'+settings.slides_container_class+' [data-orbit-slide]', self.link_bullet);
      }

      container.on('click', self.toggle_timer);
      if (settings.swipe) {
        container.on('touchstart.fndtn.orbit', function(e) {
          if (!e.touches) {e = e.originalEvent;}
          var data = {
            start_page_x: e.touches[0].pageX,
            start_page_y: e.touches[0].pageY,
            start_time: (new Date()).getTime(),
            delta_x: 0,
            is_scrolling: undefined
          };
          container.data('swipe-transition', data);
          e.stopPropagation();
        })
        .on('touchmove.fndtn.orbit', function(e) {
          if (!e.touches) { e = e.originalEvent; }
          // Ignore pinch/zoom events
          if(e.touches.length > 1 || e.scale && e.scale !== 1) return;

          var data = container.data('swipe-transition');
          if (typeof data === 'undefined') {data = {};}

          data.delta_x = e.touches[0].pageX - data.start_page_x;

          if ( typeof data.is_scrolling === 'undefined') {
            data.is_scrolling = !!( data.is_scrolling || Math.abs(data.delta_x) < Math.abs(e.touches[0].pageY - data.start_page_y) );
          }

          if (!data.is_scrolling && !data.active) {
            e.preventDefault();
            var direction = (data.delta_x < 0) ? (idx+1) : (idx-1);
            data.active = true;
            self._goto(direction);
          }
        })
        .on('touchend.fndtn.orbit', function(e) {
          container.data('swipe-transition', {});
          e.stopPropagation();
        })
      }
      container.on('mouseenter.fndtn.orbit', function(e) {
        if (settings.timer && settings.pause_on_hover) {
          self.stop_timer();
        }
      })
      .on('mouseleave.fndtn.orbit', function(e) {
        if (settings.timer && settings.resume_on_mouseout) {
          timer.start();
        }
      });

      $(document).on('click', '[data-orbit-link]', self.link_custom);
      $(window).on('load resize', self.compute_dimensions);
      Foundation.utils.image_loaded(this.slides().children('img'), self.compute_dimensions);
      Foundation.utils.image_loaded(this.slides().children('img'), function() {
        container.prev('.'+settings.preloader_class).css('display', 'none');
        self.update_slide_number(0);
        self.update_active_link(0);
        slides_container.trigger('ready.fndtn.orbit');
      });
    };

    self.init();
  };

  var Timer = function(el, settings, callback) {
    var self = this,
        duration = settings.timer_speed,
        progress = el.find('.'+settings.timer_progress_class),
        start,
        timeout,
        left = -1;

    this.update_progress = function(w) {
      var new_progress = progress.clone();
      new_progress.attr('style', '');
      new_progress.css('width', w+'%');
      progress.replaceWith(new_progress);
      progress = new_progress;
    };

    this.restart = function() {
      clearTimeout(timeout);
      el.addClass(settings.timer_paused_class);
      left = -1;
      self.update_progress(0);
    };

    this.start = function() {
      if (!el.hasClass(settings.timer_paused_class)) {return true;}
      left = (left === -1) ? duration : left;
      el.removeClass(settings.timer_paused_class);
      start = new Date().getTime();
      progress.animate({'width': '100%'}, left, 'linear');
      timeout = setTimeout(function() {
        self.restart();
        callback();
      }, left);
      el.trigger('timer-started.fndtn.orbit')
    };

    this.stop = function() {
      if (el.hasClass(settings.timer_paused_class)) {return true;}
      clearTimeout(timeout);
      el.addClass(settings.timer_paused_class);
      var end = new Date().getTime();
      left = left - (end - start);
      var w = 100 - ((left / duration) * 100);
      self.update_progress(w);
      el.trigger('timer-stopped.fndtn.orbit');
    };
  };

  var SlideAnimation = function(settings, container) {
    var duration = settings.animation_speed;
    var is_rtl = ($('html[dir=rtl]').length === 1);
    var margin = is_rtl ? 'marginRight' : 'marginLeft';
    var animMargin = {};
    animMargin[margin] = '0%';

    this.next = function(current, next, callback) {
      current.animate({marginLeft:'-100%'}, duration);
      next.animate(animMargin, duration, function() {
        current.css(margin, '100%');
        callback();
      });
    };

    this.prev = function(current, prev, callback) {
      current.animate({marginLeft:'100%'}, duration);
      prev.css(margin, '-100%');
      prev.animate(animMargin, duration, function() {
        current.css(margin, '100%');
        callback();
      });
    };
  };

  var FadeAnimation = function(settings, container) {
    var duration = settings.animation_speed;
    var is_rtl = ($('html[dir=rtl]').length === 1);
    var margin = is_rtl ? 'marginRight' : 'marginLeft';

    this.next = function(current, next, callback) {
      next.css({'margin':'0%', 'opacity':'0.01'});
      next.animate({'opacity':'1'}, duration, 'linear', function() {
        current.css('margin', '100%');
        callback();
      });
    };

    this.prev = function(current, prev, callback) {
      prev.css({'margin':'0%', 'opacity':'0.01'});
      prev.animate({'opacity':'1'}, duration, 'linear', function() {
        current.css('margin', '100%');
        callback();
      });
    };
  };


  Foundation.libs = Foundation.libs || {};

  Foundation.libs.orbit = {
    name: 'orbit',

    version: '5.4.5',

    settings: {
      animation: 'slide',
      timer_speed: 10000,
      pause_on_hover: true,
      resume_on_mouseout: false,
      next_on_click: true,
      animation_speed: 500,
      stack_on_small: false,
      navigation_arrows: true,
      slide_number: true,
      slide_number_text: 'of',
      container_class: 'orbit-container',
      stack_on_small_class: 'orbit-stack-on-small',
      next_class: 'orbit-next',
      prev_class: 'orbit-prev',
      timer_container_class: 'orbit-timer',
      timer_paused_class: 'paused',
      timer_progress_class: 'orbit-progress',
      slides_container_class: 'orbit-slides-container',
      preloader_class: 'preloader',
      slide_selector: '*',
      bullets_container_class: 'orbit-bullets',
      bullets_active_class: 'active',
      slide_number_class: 'orbit-slide-number',
      caption_class: 'orbit-caption',
      active_slide_class: 'active',
      orbit_transition_class: 'orbit-transitioning',
      bullets: true,
      circular: true,
      timer: true,
      variable_height: false,
      swipe: true,
      before_slide_change: noop,
      after_slide_change: noop
    },

    init : function (scope, method, options) {
      var self = this;
      this.bindings(method, options);
    },

    events : function (instance) {
      var orbit_instance = new Orbit(this.S(instance), this.S(instance).data('orbit-init'));
      this.S(instance).data(this.name + '-instance', orbit_instance);
    },

    reflow : function () {
      var self = this;

      if (self.S(self.scope).is('[data-orbit]')) {
        var $el = self.S(self.scope);
        var instance = $el.data(self.name + '-instance');
        instance.compute_dimensions();
      } else {
        self.S('[data-orbit]', self.scope).each(function(idx, el) {
          var $el = self.S(el);
          var opts = self.data_options($el);
          var instance = $el.data(self.name + '-instance');
          instance.compute_dimensions();
        });
      }
    }
  };


}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.reveal = {
    name : 'reveal',

    version : '5.4.5',

    locked : false,

    settings : {
      animation: 'fadeAndPop',
      animation_speed: 250,
      close_on_background_click: true,
      close_on_esc: true,
      dismiss_modal_class: 'close-reveal-modal',
      bg_class: 'reveal-modal-bg',
      root_element: 'body',
      open: function(){},
      opened: function(){},
      close: function(){},
      closed: function(){},
      bg : $('.reveal-modal-bg'),
      css : {
        open : {
          'opacity': 0,
          'visibility': 'visible',
          'display' : 'block'
        },
        close : {
          'opacity': 1,
          'visibility': 'hidden',
          'display': 'none'
        }
      }
    },

    init : function (scope, method, options) {
      $.extend(true, this.settings, method, options);
      this.bindings(method, options);
    },

    events : function (scope) {
      var self = this,
          S = self.S;

      S(this.scope)
        .off('.reveal')
        .on('click.fndtn.reveal', '[' + this.add_namespace('data-reveal-id') + ']:not([disabled])', function (e) {
          e.preventDefault();
        
          if (!self.locked) {
            var element = S(this),
                ajax = element.data(self.data_attr('reveal-ajax'));

            self.locked = true;

            if (typeof ajax === 'undefined') {
              self.open.call(self, element);
            } else {
              var url = ajax === true ? element.attr('href') : ajax;

              self.open.call(self, element, {url: url});
            }
          }
        });

      S(document)
        .on('click.fndtn.reveal', this.close_targets(), function (e) {

          e.preventDefault();

          if (!self.locked) {
            var settings = S('[' + self.attr_name() + '].open').data(self.attr_name(true) + '-init'),
                bg_clicked = S(e.target)[0] === S('.' + settings.bg_class)[0];

            if (bg_clicked) {
              if (settings.close_on_background_click) {
                e.stopPropagation();
              } else {
                return;
              }
            }

            self.locked = true;
            self.close.call(self, bg_clicked ? S('[' + self.attr_name() + '].open') : S(this).closest('[' + self.attr_name() + ']'));
          }
        });

      if(S('[' + self.attr_name() + ']', this.scope).length > 0) {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', this.settings.open)
          .on('opened.fndtn.reveal', this.settings.opened)
          .on('opened.fndtn.reveal', this.open_video)
          .on('close.fndtn.reveal', this.settings.close)
          .on('closed.fndtn.reveal', this.settings.closed)
          .on('closed.fndtn.reveal', this.close_video);
      } else {
        S(this.scope)
          // .off('.reveal')
          .on('open.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.open)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.opened)
          .on('opened.fndtn.reveal', '[' + self.attr_name() + ']', this.open_video)
          .on('close.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.close)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.settings.closed)
          .on('closed.fndtn.reveal', '[' + self.attr_name() + ']', this.close_video);
      }

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_on : function (scope) {
      var self = this;

      // PATCH #1: fixing multiple keyup event trigger from single key press
      self.S('body').off('keyup.fndtn.reveal').on('keyup.fndtn.reveal', function ( event ) {
        var open_modal = self.S('[' + self.attr_name() + '].open'),
            settings = open_modal.data(self.attr_name(true) + '-init') || self.settings ;
        // PATCH #2: making sure that the close event can be called only while unlocked,
        //           so that multiple keyup.fndtn.reveal events don't prevent clean closing of the reveal window.
        if ( settings && event.which === 27  && settings.close_on_esc && !self.locked) { // 27 is the keycode for the Escape key
          self.close.call(self, open_modal);
        }
      });

      return true;
    },

    // PATCH #3: turning on key up capture only when a reveal window is open
    key_up_off : function (scope) {
      this.S('body').off('keyup.fndtn.reveal');
      return true;
    },


    open : function (target, ajax_settings) {
      var self = this,
          modal;

      if (target) {
        if (typeof target.selector !== 'undefined') {
          // Find the named node; only use the first one found, since the rest of the code assumes there's only one node
          modal = self.S('#' + target.data(self.data_attr('reveal-id'))).first();
        } else {
          modal = self.S(this.scope);

          ajax_settings = target;
        }
      } else {
        modal = self.S(this.scope);
      }

      var settings = modal.data(self.attr_name(true) + '-init');
      settings = settings || this.settings;


      if (modal.hasClass('open') && target.attr('data-reveal-id') == modal.attr('id')) {
        return self.close(modal);
      }

      if (!modal.hasClass('open')) {
        var open_modal = self.S('[' + self.attr_name() + '].open');

        if (typeof modal.data('css-top') === 'undefined') {
          modal.data('css-top', parseInt(modal.css('top'), 10))
            .data('offset', this.cache_offset(modal));
        }

        this.key_up_on(modal);    // PATCH #3: turning on key up capture only when a reveal window is open
        modal.trigger('open').trigger('open.fndtn.reveal');

        if (open_modal.length < 1) {
          this.toggle_bg(modal, true);
        }

        if (typeof ajax_settings === 'string') {
          ajax_settings = {
            url: ajax_settings
          };
        }

        if (typeof ajax_settings === 'undefined' || !ajax_settings.url) {
          if (open_modal.length > 0) {
            this.hide(open_modal, settings.css.close);
          }

          this.show(modal, settings.css.open);
        } else {
          var old_success = typeof ajax_settings.success !== 'undefined' ? ajax_settings.success : null;

          $.extend(ajax_settings, {
            success: function (data, textStatus, jqXHR) {
              if ( $.isFunction(old_success) ) {
                old_success(data, textStatus, jqXHR);
              }

              modal.html(data);
              self.S(modal).foundation('section', 'reflow');
              self.S(modal).children().foundation();

              if (open_modal.length > 0) {
                self.hide(open_modal, settings.css.close);
              }
              self.show(modal, settings.css.open);
            }
          });

          $.ajax(ajax_settings);
        }
      }
      self.S(window).trigger('resize');
    },

    close : function (modal) {
      var modal = modal && modal.length ? modal : this.S(this.scope),
          open_modals = this.S('[' + this.attr_name() + '].open'),
          settings = modal.data(this.attr_name(true) + '-init') || this.settings;

      if (open_modals.length > 0) {
        this.locked = true;
        this.key_up_off(modal);   // PATCH #3: turning on key up capture only when a reveal window is open
        modal.trigger('close').trigger('close.fndtn.reveal');
        this.toggle_bg(modal, false);
        this.hide(open_modals, settings.css.close, settings);
      }
    },

    close_targets : function () {
      var base = '.' + this.settings.dismiss_modal_class;

      if (this.settings.close_on_background_click) {
        return base + ', .' + this.settings.bg_class;
      }

      return base;
    },

    toggle_bg : function (modal, state) {
      if (this.S('.' + this.settings.bg_class).length === 0) {
        this.settings.bg = $('<div />', {'class': this.settings.bg_class})
          .appendTo('body').hide();
      }

      var visible = this.settings.bg.filter(':visible').length > 0;
      if ( state != visible ) {
        if ( state == undefined ? visible : !state ) {
          this.hide(this.settings.bg);
        } else {
          this.show(this.settings.bg);
        }
      }
    },

    show : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init') || this.settings,
            root_element = settings.root_element;

        if (el.parent(root_element).length === 0) {
          var placeholder = el.wrap('<div style="display: none;" />').parent();

          el.on('closed.fndtn.reveal.wrapped', function() {
            el.detach().appendTo(placeholder);
            el.unwrap().unbind('closed.fndtn.reveal.wrapped');
          });

          el.detach().appendTo(root_element);
        }

        var animData = getAnimationData(settings.animation);
        if (!animData.animate) {
          this.locked = false;
        }
        if (animData.pop) {
          css.top = $(window).scrollTop() - el.data('offset') + 'px';
          var end_css = {
            top: $(window).scrollTop() + el.data('css-top') + 'px',
            opacity: 1
          };

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.trigger('opened').trigger('opened.fndtn.reveal');
              }.bind(this))
              .addClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        if (animData.fade) {
          css.top = $(window).scrollTop() + el.data('css-top') + 'px';
          var end_css = {opacity: 1};

          return setTimeout(function () {
            return el
              .css(css)
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.trigger('opened').trigger('opened.fndtn.reveal');
              }.bind(this))
              .addClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        return el.css(css).show().css({opacity: 1}).addClass('open').trigger('opened').trigger('opened.fndtn.reveal');
      }

      var settings = this.settings;

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeIn(settings.animation_speed / 2);
      }

      this.locked = false;

      return el.show();
    },

    hide : function (el, css) {
      // is modal
      if (css) {
        var settings = el.data(this.attr_name(true) + '-init');
        settings = settings || this.settings;

        var animData = getAnimationData(settings.animation);
        if (!animData.animate) {
          this.locked = false;
        }
        if (animData.pop) {
          var end_css = {
            top: - $(window).scrollTop() - el.data('offset') + 'px',
            opacity: 0
          };

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed').trigger('closed.fndtn.reveal');
              }.bind(this))
              .removeClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        if (animData.fade) {
          var end_css = {opacity: 0};

          return setTimeout(function () {
            return el
              .animate(end_css, settings.animation_speed, 'linear', function () {
                this.locked = false;
                el.css(css).trigger('closed').trigger('closed.fndtn.reveal');
              }.bind(this))
              .removeClass('open');
          }.bind(this), settings.animation_speed / 2);
        }

        return el.hide().css(css).removeClass('open').trigger('closed').trigger('closed.fndtn.reveal');
      }

      var settings = this.settings;

      // should we animate the background?
      if (getAnimationData(settings.animation).fade) {
        return el.fadeOut(settings.animation_speed / 2);
      }

      return el.hide();
    },

    close_video : function (e) {
      var video = $('.flex-video', e.target),
          iframe = $('iframe', video);

      if (iframe.length > 0) {
        iframe.attr('data-src', iframe[0].src);
        iframe.attr('src', iframe.attr('src'));
        video.hide();
      }
    },

    open_video : function (e) {
      var video = $('.flex-video', e.target),
          iframe = video.find('iframe');

      if (iframe.length > 0) {
        var data_src = iframe.attr('data-src');
        if (typeof data_src === 'string') {
          iframe[0].src = iframe.attr('data-src');
        } else {
          var src = iframe[0].src;
          iframe[0].src = undefined;
          iframe[0].src = src;
        }
        video.show();
      }
    },

    data_attr: function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    cache_offset : function (modal) {
      var offset = modal.show().height() + parseInt(modal.css('top'), 10);

      modal.hide();

      return offset;
    },

    off : function () {
      $(this.scope).off('.fndtn.reveal');
    },

    reflow : function () {}
  };

  /*
   * getAnimationData('popAndFade') // {animate: true,  pop: true,  fade: true}
   * getAnimationData('fade')       // {animate: true,  pop: false, fade: true}
   * getAnimationData('pop')        // {animate: true,  pop: true,  fade: false}
   * getAnimationData('foo')        // {animate: false, pop: false, fade: false}
   * getAnimationData(null)         // {animate: false, pop: false, fade: false}
   */
  function getAnimationData(str) {
    var fade = /fade/i.test(str);
    var pop = /pop/i.test(str);
    return {
      animate: fade || pop,
      pop: pop,
      fade: fade
    };
  }
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.slider = {
    name : 'slider',

    version : '5.4.5',

    settings: {
      start: 0,
      end: 100,
      step: 1,
      initial: null,
      display_selector: '',
      vertical: false,
      on_change: function(){}
    },

    cache : {},

    init : function (scope, method, options) {
      Foundation.inherit(this,'throttle');
      this.bindings(method, options);
      this.reflow();
    },

    events : function() {
      var self = this;

      $(this.scope)
        .off('.slider')
        .on('mousedown.fndtn.slider touchstart.fndtn.slider pointerdown.fndtn.slider',
        '[' + self.attr_name() + ']:not(.disabled, [disabled]) .range-slider-handle', function(e) {
          if (!self.cache.active) {
            e.preventDefault();
            self.set_active_slider($(e.target));
          }
        })
        .on('mousemove.fndtn.slider touchmove.fndtn.slider pointermove.fndtn.slider', function(e) {
          if (!!self.cache.active) {
            e.preventDefault();
            if ($.data(self.cache.active[0], 'settings').vertical) {
              var scroll_offset = 0;
              if (!e.pageY) {
                scroll_offset = window.scrollY;
              }
              self.calculate_position(self.cache.active, (e.pageY || 
                                                          e.originalEvent.clientY || 
                                                          e.originalEvent.touches[0].clientY || 
                                                          e.currentPoint.y) 
                                                          + scroll_offset);
            } else {
              self.calculate_position(self.cache.active, e.pageX || 
                                                         e.originalEvent.clientX || 
                                                         e.originalEvent.touches[0].clientX || 
                                                         e.currentPoint.x);
            }
          }
        })
        .on('mouseup.fndtn.slider touchend.fndtn.slider pointerup.fndtn.slider', function(e) {
          self.remove_active_slider();
        })
        .on('change.fndtn.slider', function(e) {
          self.settings.on_change();
        });

      self.S(window)
        .on('resize.fndtn.slider', self.throttle(function(e) {
          self.reflow();
        }, 300));
    },

    set_active_slider : function($handle) {
      this.cache.active = $handle;
    },

    remove_active_slider : function() {
      this.cache.active = null;
    },

    calculate_position : function($handle, cursor_x) {
      var self = this,
          settings = $.data($handle[0], 'settings'),
          handle_l = $.data($handle[0], 'handle_l'),
          handle_o = $.data($handle[0], 'handle_o'),
          bar_l = $.data($handle[0], 'bar_l'),
          bar_o = $.data($handle[0], 'bar_o');

      requestAnimationFrame(function(){
        var pct;

        if (Foundation.rtl && !settings.vertical) {
          pct = self.limit_to(((bar_o+bar_l-cursor_x)/bar_l),0,1);
        } else {
          pct = self.limit_to(((cursor_x-bar_o)/bar_l),0,1);
        }

        pct = settings.vertical ? 1-pct : pct;

        var norm = self.normalized_value(pct, settings.start, settings.end, settings.step);

        self.set_ui($handle, norm);
      });
    },

    set_ui : function($handle, value) {
      var settings = $.data($handle[0], 'settings'),
          handle_l = $.data($handle[0], 'handle_l'),
          bar_l = $.data($handle[0], 'bar_l'),
          norm_pct = this.normalized_percentage(value, settings.start, settings.end),
          handle_offset = norm_pct*(bar_l-handle_l)-1,
          progress_bar_length = norm_pct*100;

      if (Foundation.rtl && !settings.vertical) {
        handle_offset = -handle_offset;
      }

      handle_offset = settings.vertical ? -handle_offset + bar_l - handle_l + 1 : handle_offset;
      this.set_translate($handle, handle_offset, settings.vertical);

      if (settings.vertical) {
        $handle.siblings('.range-slider-active-segment').css('height', progress_bar_length + '%');
      } else {
        $handle.siblings('.range-slider-active-segment').css('width', progress_bar_length + '%');
      }

      $handle.parent().attr(this.attr_name(), value).trigger('change').trigger('change.fndtn.slider');

      $handle.parent().children('input[type=hidden]').val(value);

      if (!$handle[0].hasAttribute('aria-valuemin')) {
        $handle.attr({
          'aria-valuemin': settings.start,
          'aria-valuemax': settings.end,
        });
      }
      $handle.attr('aria-valuenow', value);

      // if (settings.input_id != '') {
      //   $(settings.display_selector).each(function(){
      //     if (this.hasOwnProperty('value')) {
      //       $(this).val(value);
      //     } else {
      //       $(this).text(value);
      //     }
      //   });
      // }

    },

    normalized_percentage : function(val, start, end) {
      return Math.min(1, (val - start)/(end - start));
    },

    normalized_value : function(val, start, end, step) {
      var range = end - start,
          point = val*range,
          mod = (point-(point%step)) / step,
          rem = point % step,
          round = ( rem >= step*0.5 ? step : 0);
      return (mod*step + round) + start;
    },

    set_translate : function(ele, offset, vertical) {
      if (vertical) {
        $(ele)
          .css('-webkit-transform', 'translateY('+offset+'px)')
          .css('-moz-transform', 'translateY('+offset+'px)')
          .css('-ms-transform', 'translateY('+offset+'px)')
          .css('-o-transform', 'translateY('+offset+'px)')
          .css('transform', 'translateY('+offset+'px)');
      } else {
        $(ele)
          .css('-webkit-transform', 'translateX('+offset+'px)')
          .css('-moz-transform', 'translateX('+offset+'px)')
          .css('-ms-transform', 'translateX('+offset+'px)')
          .css('-o-transform', 'translateX('+offset+'px)')
          .css('transform', 'translateX('+offset+'px)');
      }
    },

    limit_to : function(val, min, max) {
      return Math.min(Math.max(val, min), max);
    },

    initialize_settings : function(handle) {
      var settings = $.extend({}, this.settings, this.data_options($(handle).parent()));

      if (settings.vertical) {
        $.data(handle, 'bar_o', $(handle).parent().offset().top);
        $.data(handle, 'bar_l', $(handle).parent().outerHeight());
        $.data(handle, 'handle_o', $(handle).offset().top);
        $.data(handle, 'handle_l', $(handle).outerHeight());
      } else {
        $.data(handle, 'bar_o', $(handle).parent().offset().left);
        $.data(handle, 'bar_l', $(handle).parent().outerWidth());
        $.data(handle, 'handle_o', $(handle).offset().left);
        $.data(handle, 'handle_l', $(handle).outerWidth());
      }

      $.data(handle, 'bar', $(handle).parent());
      $.data(handle, 'settings', settings);
    },

    set_initial_position : function($ele) {
      var settings = $.data($ele.children('.range-slider-handle')[0], 'settings'),
          initial = (!!settings.initial ? settings.initial : Math.floor((settings.end-settings.start)*0.5/settings.step)*settings.step+settings.start),
          $handle = $ele.children('.range-slider-handle');
      this.set_ui($handle, initial);
    },

    set_value : function(value) {
      var self = this;
      $('[' + self.attr_name() + ']', this.scope).each(function(){
        $(this).attr(self.attr_name(), value);
      });
      if (!!$(this.scope).attr(self.attr_name())) {
        $(this.scope).attr(self.attr_name(), value);
      }
      self.reflow();
    },

    reflow : function() {
      var self = this;
      self.S('[' + this.attr_name() + ']').each(function() {
        var handle = $(this).children('.range-slider-handle')[0],
            val = $(this).attr(self.attr_name());
        self.initialize_settings(handle);

        if (val) {
          self.set_ui($(handle), parseFloat(val));
        } else {
          self.set_initial_position($(this));
        }
      });
    }
  };

}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.tab = {
    name : 'tab',

    version : '5.4.5',

    settings : {
      active_class: 'active',
      callback : function () {},
      deep_linking: false,
      scroll_to_content: true,
      is_hover: false
    },

    default_tab_hashes: [],

    init : function (scope, method, options) {
      var self = this,
          S = this.S;

      this.bindings(method, options);
      this.handle_location_hash_change();

      // Store the default active tabs which will be referenced when the
      // location hash is absent, as in the case of navigating the tabs and
      // returning to the first viewing via the browser Back button.
      S('[' + this.attr_name() + '] > .active > a', this.scope).each(function () {
        self.default_tab_hashes.push(this.hash);
      });
    },

    events : function () {
      var self = this,
          S = this.S;

      var usual_tab_behavior =  function (e) {
          var settings = S(this).closest('[' + self.attr_name() +']').data(self.attr_name(true) + '-init');
          if (!settings.is_hover || Modernizr.touch) {
            e.preventDefault();
            e.stopPropagation();
            self.toggle_active_tab(S(this).parent());
          }
        };

      S(this.scope)
        .off('.tab')
        // Click event: tab title
        .on('focus.fndtn.tab', '[' + this.attr_name() + '] > * > a', usual_tab_behavior )
        .on('click.fndtn.tab', '[' + this.attr_name() + '] > * > a', usual_tab_behavior )
        // Hover event: tab title
        .on('mouseenter.fndtn.tab', '[' + this.attr_name() + '] > * > a', function (e) {
          var settings = S(this).closest('[' + self.attr_name() +']').data(self.attr_name(true) + '-init');
          if (settings.is_hover) self.toggle_active_tab(S(this).parent());
        });

      // Location hash change event
      S(window).on('hashchange.fndtn.tab', function (e) {
        e.preventDefault();
        self.handle_location_hash_change();
      });
    },

    handle_location_hash_change : function () {

      var self = this,
          S = this.S;

      S('[' + this.attr_name() + ']', this.scope).each(function () {
        var settings = S(this).data(self.attr_name(true) + '-init');
        if (settings.deep_linking) {
          // Match the location hash to a label
          var hash;
          if (settings.scroll_to_content) {
            hash = self.scope.location.hash;
          } else {
            // prefix the hash to prevent anchor scrolling
            hash = self.scope.location.hash.replace('fndtn-', '');
          }
          if (hash != '') {
            // Check whether the location hash references a tab content div or
            // another element on the page (inside or outside the tab content div)
            var hash_element = S(hash);
            if (hash_element.hasClass('content') && hash_element.parent().hasClass('tab-content')) {
              // Tab content div
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + hash + ']').parent());
            } else {
              // Not the tab content div. If inside the tab content, find the
              // containing tab and toggle it as active.
              var hash_tab_container_id = hash_element.closest('.content').attr('id');
              if (hash_tab_container_id != undefined) {
                self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=#' + hash_tab_container_id + ']').parent(), hash);
              }
            }
          } else {
            // Reference the default tab hashes which were initialized in the init function
            for (var ind in self.default_tab_hashes) {
              self.toggle_active_tab($('[' + self.attr_name() + '] > * > a[href=' + self.default_tab_hashes[ind] + ']').parent());
            }
          }
        }
       });
     },

    toggle_active_tab: function (tab, location_hash) {
      var S = this.S,
          tabs = tab.closest('[' + this.attr_name() + ']'),
          tab_link = tab.find('a'),
          anchor = tab.children('a').first(),
          target_hash = '#' + anchor.attr('href').split('#')[1],
          target = S(target_hash),
          siblings = tab.siblings(),
          settings = tabs.data(this.attr_name(true) + '-init'),
          interpret_keyup_action = function(e) {
            // Light modification of Heydon Pickering's Practical ARIA Examples: http://heydonworks.com/practical_aria_examples/js/a11y.js 

            // define current, previous and next (possible) tabs

            var $original = $(this);
            var $prev = $(this).parents('li').prev().children('[role="tab"]');
            var $next = $(this).parents('li').next().children('[role="tab"]');
            var $target;

            // find the direction (prev or next)

            switch (e.keyCode) {
              case 37:
                $target = $prev;
                break;
              case 39:
                $target = $next;
                break;
              default:
                $target = false
                  break;
            }

            if ($target.length) {
              $original.attr({
                'tabindex' : '-1',
                'aria-selected' : null
              });
              $target.attr({
                'tabindex' : '0',
                'aria-selected' : true
              }).focus();
            }

            // Hide panels

            $('[role="tabpanel"]')
              .attr('aria-hidden', 'true');

            // Show panel which corresponds to target

            $('#' + $(document.activeElement).attr('href').substring(1))
              .attr('aria-hidden', null);

          };

      // allow usage of data-tab-content attribute instead of href
      if (S(this).data(this.data_attr('tab-content'))) {
        target_hash = '#' + S(this).data(this.data_attr('tab-content')).split('#')[1];
        target = S(target_hash);
      }

      if (settings.deep_linking) {

        if (settings.scroll_to_content) {
          // retain current hash to scroll to content
          window.location.hash = location_hash || target_hash;
          if (location_hash == undefined || location_hash == target_hash) {
            tab.parent()[0].scrollIntoView();
          } else {
            S(target_hash)[0].scrollIntoView();
          }
        } else {
          // prefix the hashes so that the browser doesn't scroll down
          if (location_hash != undefined) {
            window.location.hash = 'fndtn-' + location_hash.replace('#', '');
          } else {
            window.location.hash = 'fndtn-' + target_hash.replace('#', '');
          }
        }
      }

      // WARNING: The activation and deactivation of the tab content must
      // occur after the deep linking in order to properly refresh the browser
      // window (notably in Chrome).
      // Clean up multiple attr instances to done once
      tab.addClass(settings.active_class).triggerHandler('opened');
      tab_link.attr({"aria-selected": "true",  tabindex: 0});
      siblings.removeClass(settings.active_class)
      siblings.find('a').attr({"aria-selected": "false",  tabindex: -1});
      target.siblings().removeClass(settings.active_class).attr({"aria-hidden": "true",  tabindex: -1}).end().addClass(settings.active_class).attr('aria-hidden', 'false').find(':first-child').attr('tabindex', 0);
      settings.callback(tab);
      target.children().attr('tab-index', 0);
      target.triggerHandler('toggled', [tab]);
      tabs.triggerHandler('toggled', [target]);

      tab_link.on('keydown', interpret_keyup_action );
    },

    data_attr: function (str) {
      if (this.namespace.length > 0) {
        return this.namespace + '-' + str;
      }

      return str;
    },

    off : function () {},

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.tooltip = {
    name : 'tooltip',

    version : '5.4.5',

    settings : {
      additional_inheritable_classes : [],
      tooltip_class : '.tooltip',
      append_to: 'body',
      touch_close_text: 'Tap To Close',
      disable_for_touch: false,
      hover_delay: 200,
      show_on : 'all',
      tip_template : function (selector, content) {
        return '<span data-selector="' + selector + '" id="' + selector + '" class="'
          + Foundation.libs.tooltip.settings.tooltip_class.substring(1)
          + '" role="tooltip">' + content + '<span class="nub"></span></span>';
      }
    },

    cache : {},

    init : function (scope, method, options) {
      Foundation.inherit(this, 'random_str');
      this.bindings(method, options);
    },

    should_show: function (target, tip) {
      var settings = $.extend({}, this.settings, this.data_options(target));

      if (settings.show_on === 'all') {
        return true;
      } else if (this.small() && settings.show_on === 'small') {
        return true;
      } else if (this.medium() && settings.show_on === 'medium') {
        return true;
      } else if (this.large() && settings.show_on === 'large') {
        return true;
      }
      return false;
    },

    medium : function () {
      return matchMedia(Foundation.media_queries['medium']).matches;
    },

    large : function () {
      return matchMedia(Foundation.media_queries['large']).matches;
    },

    events : function (instance) {
      var self = this,
          S = self.S;

      self.create(this.S(instance));

      $(this.scope)
        .off('.tooltip')
        .on('mouseenter.fndtn.tooltip mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip',
          '[' + this.attr_name() + ']', function (e) {
          var $this = S(this),
              settings = $.extend({}, self.settings, self.data_options($this)),
              is_touch = false;

          if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type) && S(e.target).is('a')) {
            return false;
          }

          if (/mouse/i.test(e.type) && self.ie_touch(e)) return false;

          if ($this.hasClass('open')) {
            if (Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) e.preventDefault();
            self.hide($this);
          } else {
            if (settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              return;
            } else if(!settings.disable_for_touch && Modernizr.touch && /touchstart|MSPointerDown/i.test(e.type)) {
              e.preventDefault();
              S(settings.tooltip_class + '.open').hide();
              is_touch = true;
            }

            if (/enter|over/i.test(e.type)) {
              this.timer = setTimeout(function () {
                var tip = self.showTip($this);
              }.bind(this), self.settings.hover_delay);
            } else if (e.type === 'mouseout' || e.type === 'mouseleave') {
              clearTimeout(this.timer);
              self.hide($this);
            } else {
              self.showTip($this);
            }
          }
        })
        .on('mouseleave.fndtn.tooltip touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', '[' + this.attr_name() + '].open', function (e) {
          if (/mouse/i.test(e.type) && self.ie_touch(e)) return false;

          if($(this).data('tooltip-open-event-type') == 'touch' && e.type == 'mouseleave') {
            return;
          }
          else if($(this).data('tooltip-open-event-type') == 'mouse' && /MSPointerDown|touchstart/i.test(e.type)) {
            self.convert_to_touch($(this));
          } else {
            self.hide($(this));
          }
        })
        .on('DOMNodeRemoved DOMAttrModified', '[' + this.attr_name() + ']:not(a)', function (e) {
          self.hide(S(this));
        });
    },

    ie_touch : function (e) {
      // How do I distinguish between IE11 and Windows Phone 8?????
      return false;
    },

    showTip : function ($target) {
      var $tip = this.getTip($target);
      if (this.should_show($target, $tip)){
        return this.show($target);
      }
      return;
    },

    getTip : function ($target) {
      var selector = this.selector($target),
          settings = $.extend({}, this.settings, this.data_options($target)),
          tip = null;

      if (selector) {
        tip = this.S('span[data-selector="' + selector + '"]' + settings.tooltip_class);
      }

      return (typeof tip === 'object') ? tip : false;
    },

    selector : function ($target) {
      var id = $target.attr('id'),
          dataSelector = $target.attr(this.attr_name()) || $target.attr('data-selector');

      if ((id && id.length < 1 || !id) && typeof dataSelector != 'string') {
        dataSelector = this.random_str(6);
        $target
          .attr('data-selector', dataSelector)
          .attr('aria-describedby', dataSelector);
      }

      return (id && id.length > 0) ? id : dataSelector;
    },

    create : function ($target) {
      var self = this,
          settings = $.extend({}, this.settings, this.data_options($target)),
          tip_template = this.settings.tip_template;

      if (typeof settings.tip_template === 'string' && window.hasOwnProperty(settings.tip_template)) {
        tip_template = window[settings.tip_template];
      }

      var $tip = $(tip_template(this.selector($target), $('<div></div>').html($target.attr('title')).html())),
          classes = this.inheritable_classes($target);

      $tip.addClass(classes).appendTo(settings.append_to);

      if (Modernizr.touch) {
        $tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');
        $tip.on('touchstart.fndtn.tooltip MSPointerDown.fndtn.tooltip', function(e) {
          self.hide($target);
        });
      }

      $target.removeAttr('title').attr('title','');
    },

    reposition : function (target, tip, classes) {
      var width, nub, nubHeight, nubWidth, column, objPos;

      tip.css('visibility', 'hidden').show();

      width = target.data('width');
      nub = tip.children('.nub');
      nubHeight = nub.outerHeight();
      nubWidth = nub.outerHeight();

      if (this.small()) {
        tip.css({'width' : '100%' });
      } else {
        tip.css({'width' : (width) ? width : 'auto'});
      }

      objPos = function (obj, top, right, bottom, left, width) {
        return obj.css({
          'top' : (top) ? top : 'auto',
          'bottom' : (bottom) ? bottom : 'auto',
          'left' : (left) ? left : 'auto',
          'right' : (right) ? right : 'auto'
        }).end();
      };

      objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', target.offset().left);

      if (this.small()) {
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', 12.5, $(this.scope).width());
        tip.addClass('tip-override');
        objPos(nub, -nubHeight, 'auto', 'auto', target.offset().left);
      } else {
        var left = target.offset().left;
        if (Foundation.rtl) {
          nub.addClass('rtl');
          left = target.offset().left + target.outerWidth() - tip.outerWidth();
        }
        objPos(tip, (target.offset().top + target.outerHeight() + 10), 'auto', 'auto', left);
        tip.removeClass('tip-override');
        if (classes && classes.indexOf('tip-top') > -1) {
          if (Foundation.rtl) nub.addClass('rtl');
          objPos(tip, (target.offset().top - tip.outerHeight()), 'auto', 'auto', left)
            .removeClass('tip-override');
        } else if (classes && classes.indexOf('tip-left') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left - tip.outerWidth() - nubHeight))
            .removeClass('tip-override');
          nub.removeClass('rtl');
        } else if (classes && classes.indexOf('tip-right') > -1) {
          objPos(tip, (target.offset().top + (target.outerHeight() / 2) - (tip.outerHeight() / 2)), 'auto', 'auto', (target.offset().left + target.outerWidth() + nubHeight))
            .removeClass('tip-override');
          nub.removeClass('rtl');
        }
      }

      tip.css('visibility', 'visible').hide();
    },

    small : function () {
      return matchMedia(Foundation.media_queries.small).matches &&
        !matchMedia(Foundation.media_queries.medium).matches;
    },

    inheritable_classes : function ($target) {
      var settings = $.extend({}, this.settings, this.data_options($target)),
          inheritables = ['tip-top', 'tip-left', 'tip-bottom', 'tip-right', 'radius', 'round'].concat(settings.additional_inheritable_classes),
          classes = $target.attr('class'),
          filtered = classes ? $.map(classes.split(' '), function (el, i) {
            if ($.inArray(el, inheritables) !== -1) {
              return el;
            }
          }).join(' ') : '';

      return $.trim(filtered);
    },

    convert_to_touch : function($target) {
      var self = this,
          $tip = self.getTip($target),
          settings = $.extend({}, self.settings, self.data_options($target));

      if ($tip.find('.tap-to-close').length === 0) {
        $tip.append('<span class="tap-to-close">'+settings.touch_close_text+'</span>');
        $tip.on('click.fndtn.tooltip.tapclose touchstart.fndtn.tooltip.tapclose MSPointerDown.fndtn.tooltip.tapclose', function(e) {
          self.hide($target);
        });
      }

      $target.data('tooltip-open-event-type', 'touch');
    },

    show : function ($target) {
      var $tip = this.getTip($target);

      if ($target.data('tooltip-open-event-type') == 'touch') {
        this.convert_to_touch($target);
      }

      this.reposition($target, $tip, $target.attr('class'));
      $target.addClass('open');
      $tip.fadeIn(150);
    },

    hide : function ($target) {
      var $tip = this.getTip($target);

      $tip.fadeOut(150, function() {
        $tip.find('.tap-to-close').remove();
        $tip.off('click.fndtn.tooltip.tapclose MSPointerDown.fndtn.tapclose');
        $target.removeClass('open');
      });
    },

    off : function () {
      var self = this;
      this.S(this.scope).off('.fndtn.tooltip');
      this.S(this.settings.tooltip_class).each(function (i) {
        $('[' + self.attr_name() + ']').eq(i).attr('title', $(this).text());
      }).remove();
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.topbar = {
    name : 'topbar',

    version: '5.4.5',

    settings : {
      index : 0,
      sticky_class : 'sticky',
      custom_back_text: true,
      back_text: 'Back',
      mobile_show_parent_link: true,
      is_hover: true,
      scrolltop : true, // jump to top when sticky nav menu toggle is clicked
      sticky_on : 'all'
    },

    init : function (section, method, options) {
      Foundation.inherit(this, 'add_custom_rule register_media throttle');
      var self = this;

      self.register_media('topbar', 'foundation-mq-topbar');

      this.bindings(method, options);

      self.S('[' + this.attr_name() + ']', this.scope).each(function () {
        var topbar = $(this),
            settings = topbar.data(self.attr_name(true) + '-init'),
            section = self.S('section, .top-bar-section', this);
        topbar.data('index', 0);
        var topbarContainer = topbar.parent();
        if (topbarContainer.hasClass('fixed') || self.is_sticky(topbar, topbarContainer, settings) ) {
          self.settings.sticky_class = settings.sticky_class;
          self.settings.sticky_topbar = topbar;
          topbar.data('height', topbarContainer.outerHeight());
          topbar.data('stickyoffset', topbarContainer.offset().top);
        } else {
          topbar.data('height', topbar.outerHeight());
        }

        if (!settings.assembled) {
          self.assemble(topbar);
        }

        if (settings.is_hover) {
          self.S('.has-dropdown', topbar).addClass('not-click');
        } else {
          self.S('.has-dropdown', topbar).removeClass('not-click');
        }

        // Pad body when sticky (scrolled) or fixed.
        self.add_custom_rule('.f-topbar-fixed { padding-top: ' + topbar.data('height') + 'px }');

        if (topbarContainer.hasClass('fixed')) {
          self.S('body').addClass('f-topbar-fixed');
        }
      });

    },

    is_sticky: function (topbar, topbarContainer, settings) {
      var sticky = topbarContainer.hasClass(settings.sticky_class);

      if (sticky && settings.sticky_on === 'all') {
        return true;
      } else if (sticky && this.small() && settings.sticky_on === 'small') {
        return (matchMedia(Foundation.media_queries.small).matches && !matchMedia(Foundation.media_queries.medium).matches &&
            !matchMedia(Foundation.media_queries.large).matches);
        //return true;
      } else if (sticky && this.medium() && settings.sticky_on === 'medium') {
        return (matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches &&
            !matchMedia(Foundation.media_queries.large).matches);
        //return true;
      } else if(sticky && this.large() && settings.sticky_on === 'large') {
        return (matchMedia(Foundation.media_queries.small).matches && matchMedia(Foundation.media_queries.medium).matches &&
            matchMedia(Foundation.media_queries.large).matches);
        //return true;
      }

      return false;
    },

    toggle: function (toggleEl) {
      var self = this,
          topbar;

      if (toggleEl) {
        topbar = self.S(toggleEl).closest('[' + this.attr_name() + ']');
      } else {
        topbar = self.S('[' + this.attr_name() + ']');
      }

      var settings = topbar.data(this.attr_name(true) + '-init');

      var section = self.S('section, .top-bar-section', topbar);

      if (self.breakpoint()) {
        if (!self.rtl) {
          section.css({left: '0%'});
          $('>.name', section).css({left: '100%'});
        } else {
          section.css({right: '0%'});
          $('>.name', section).css({right: '100%'});
        }

        self.S('li.moved', section).removeClass('moved');
        topbar.data('index', 0);

        topbar
          .toggleClass('expanded')
          .css('height', '');
      }

      if (settings.scrolltop) {
        if (!topbar.hasClass('expanded')) {
          if (topbar.hasClass('fixed')) {
            topbar.parent().addClass('fixed');
            topbar.removeClass('fixed');
            self.S('body').addClass('f-topbar-fixed');
          }
        } else if (topbar.parent().hasClass('fixed')) {
          if (settings.scrolltop) {
            topbar.parent().removeClass('fixed');
            topbar.addClass('fixed');
            self.S('body').removeClass('f-topbar-fixed');

            window.scrollTo(0,0);
          } else {
            topbar.parent().removeClass('expanded');
          }
        }
      } else {
        if (self.is_sticky(topbar, topbar.parent(), settings)) {
          topbar.parent().addClass('fixed');
        }

        if (topbar.parent().hasClass('fixed')) {
          if (!topbar.hasClass('expanded')) {
            topbar.removeClass('fixed');
            topbar.parent().removeClass('expanded');
            self.update_sticky_positioning();
          } else {
            topbar.addClass('fixed');
            topbar.parent().addClass('expanded');
            self.S('body').addClass('f-topbar-fixed');
          }
        }
      }
    },

    timer : null,

    events : function (bar) {
      var self = this,
          S = this.S;

      S(this.scope)
        .off('.topbar')
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .toggle-topbar', function (e) {
          e.preventDefault();
          self.toggle(this);
        })
        .on('click.fndtn.topbar','.top-bar .top-bar-section li a[href^="#"],[' + this.attr_name() + '] .top-bar-section li a[href^="#"]',function (e) {
            var li = $(this).closest('li');
            if(self.breakpoint() && !li.hasClass('back') && !li.hasClass('has-dropdown'))
            {
            self.toggle();
            }
        })
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] li.has-dropdown', function (e) {
          var li = S(this),
              target = S(e.target),
              topbar = li.closest('[' + self.attr_name() + ']'),
              settings = topbar.data(self.attr_name(true) + '-init');

          if(target.data('revealId')) {
            self.toggle();
            return;
          }

          if (self.breakpoint()) return;
          if (settings.is_hover && !Modernizr.touch) return;

          e.stopImmediatePropagation();

          if (li.hasClass('hover')) {
            li
              .removeClass('hover')
              .find('li')
              .removeClass('hover');

            li.parents('li.hover')
              .removeClass('hover');
          } else {
            li.addClass('hover');

            $(li).siblings().removeClass('hover');

            if (target[0].nodeName === 'A' && target.parent().hasClass('has-dropdown')) {
              e.preventDefault();
            }
          }
        })
        .on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown>a', function (e) {
          if (self.breakpoint()) {

            e.preventDefault();

            var $this = S(this),
                topbar = $this.closest('[' + self.attr_name() + ']'),
                section = topbar.find('section, .top-bar-section'),
                dropdownHeight = $this.next('.dropdown').outerHeight(),
                $selectedLi = $this.closest('li');

            topbar.data('index', topbar.data('index') + 1);
            $selectedLi.addClass('moved');

            if (!self.rtl) {
              section.css({left: -(100 * topbar.data('index')) + '%'});
              section.find('>.name').css({left: 100 * topbar.data('index') + '%'});
            } else {
              section.css({right: -(100 * topbar.data('index')) + '%'});
              section.find('>.name').css({right: 100 * topbar.data('index') + '%'});
            }

            topbar.css('height', $this.siblings('ul').outerHeight(true) + topbar.data('height'));
          }
        });

      S(window).off(".topbar").on("resize.fndtn.topbar", self.throttle(function() {
          self.resize.call(self);
      }, 50)).trigger("resize").trigger("resize.fndtn.topbar").load(function(){
          // Ensure that the offset is calculated after all of the pages resources have loaded
          S(this).trigger("resize.fndtn.topbar");
      });

      S('body').off('.topbar').on('click.fndtn.topbar', function (e) {
        var parent = S(e.target).closest('li').closest('li.hover');

        if (parent.length > 0) {
          return;
        }

        S('[' + self.attr_name() + '] li.hover').removeClass('hover');
      });

      // Go up a level on Click
      S(this.scope).on('click.fndtn.topbar', '[' + this.attr_name() + '] .has-dropdown .back', function (e) {
        e.preventDefault();

        var $this = S(this),
            topbar = $this.closest('[' + self.attr_name() + ']'),
            section = topbar.find('section, .top-bar-section'),
            settings = topbar.data(self.attr_name(true) + '-init'),
            $movedLi = $this.closest('li.moved'),
            $previousLevelUl = $movedLi.parent();

        topbar.data('index', topbar.data('index') - 1);

        if (!self.rtl) {
          section.css({left: -(100 * topbar.data('index')) + '%'});
          section.find('>.name').css({left: 100 * topbar.data('index') + '%'});
        } else {
          section.css({right: -(100 * topbar.data('index')) + '%'});
          section.find('>.name').css({right: 100 * topbar.data('index') + '%'});
        }

        if (topbar.data('index') === 0) {
          topbar.css('height', '');
        } else {
          topbar.css('height', $previousLevelUl.outerHeight(true) + topbar.data('height'));
        }

        setTimeout(function () {
          $movedLi.removeClass('moved');
        }, 300);
      });

      // Show dropdown menus when their items are focused
      S(this.scope).find('.dropdown a')
        .focus(function() {
          $(this).parents('.has-dropdown').addClass('hover');
        })
        .blur(function() {
          $(this).parents('.has-dropdown').removeClass('hover');
        });
    },

    resize : function () {
      var self = this;
      self.S('[' + this.attr_name() + ']').each(function () {
        var topbar = self.S(this),
            settings = topbar.data(self.attr_name(true) + '-init');

        var stickyContainer = topbar.parent('.' + self.settings.sticky_class);
        var stickyOffset;

        if (!self.breakpoint()) {
          var doToggle = topbar.hasClass('expanded');
          topbar
            .css('height', '')
            .removeClass('expanded')
            .find('li')
            .removeClass('hover');

            if(doToggle) {
              self.toggle(topbar);
            }
        }

        if(self.is_sticky(topbar, stickyContainer, settings)) {
          if(stickyContainer.hasClass('fixed')) {
            // Remove the fixed to allow for correct calculation of the offset.
            stickyContainer.removeClass('fixed');

            stickyOffset = stickyContainer.offset().top;
            if(self.S(document.body).hasClass('f-topbar-fixed')) {
              stickyOffset -= topbar.data('height');
            }

            topbar.data('stickyoffset', stickyOffset);
            stickyContainer.addClass('fixed');
          } else {
            stickyOffset = stickyContainer.offset().top;
            topbar.data('stickyoffset', stickyOffset);
          }
        }

      });
    },

    breakpoint : function () {
      return !matchMedia(Foundation.media_queries['topbar']).matches;
    },

    small : function () {
      return matchMedia(Foundation.media_queries['small']).matches;
    },

    medium : function () {
      return matchMedia(Foundation.media_queries['medium']).matches;
    },

    large : function () {
      return matchMedia(Foundation.media_queries['large']).matches;
    },

    assemble : function (topbar) {
      var self = this,
          settings = topbar.data(this.attr_name(true) + '-init'),
          section = self.S('section, .top-bar-section', topbar);

      // Pull element out of the DOM for manipulation
      section.detach();

      self.S('.has-dropdown>a', section).each(function () {
        var $link = self.S(this),
            $dropdown = $link.siblings('.dropdown'),
            url = $link.attr('href'),
            $titleLi;


        if (!$dropdown.find('.title.back').length) {

          if (settings.mobile_show_parent_link == true && url) {
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5></li><li class="parent-link show-for-small"><a class="parent-link js-generated" href="' + url + '">' + $link.html() +'</a></li>');
          } else {
            $titleLi = $('<li class="title back js-generated"><h5><a href="javascript:void(0)"></a></h5>');
          }

          // Copy link to subnav
          if (settings.custom_back_text == true) {
            $('h5>a', $titleLi).html(settings.back_text);
          } else {
            $('h5>a', $titleLi).html('&laquo; ' + $link.html());
          }
          $dropdown.prepend($titleLi);
        }
      });

      // Put element back in the DOM
      section.appendTo(topbar);

      // check for sticky
      this.sticky();

      this.assembled(topbar);
    },

    assembled : function (topbar) {
      topbar.data(this.attr_name(true), $.extend({}, topbar.data(this.attr_name(true)), {assembled: true}));
    },

    height : function (ul) {
      var total = 0,
          self = this;

      $('> li', ul).each(function () {
        total += self.S(this).outerHeight(true);
      });

      return total;
    },

    sticky : function () {
      var self = this;

      this.S(window).on('scroll', function() {
        self.update_sticky_positioning();
      });
    },

    update_sticky_positioning: function() {
      var klass = '.' + this.settings.sticky_class,
          $window = this.S(window),
          self = this;

      if (self.settings.sticky_topbar && self.is_sticky(this.settings.sticky_topbar,this.settings.sticky_topbar.parent(), this.settings)) {
        var distance = this.settings.sticky_topbar.data('stickyoffset');
        if (!self.S(klass).hasClass('expanded')) {
          if ($window.scrollTop() > (distance)) {
            if (!self.S(klass).hasClass('fixed')) {
              self.S(klass).addClass('fixed');
              self.S('body').addClass('f-topbar-fixed');
            }
          } else if ($window.scrollTop() <= distance) {
            if (self.S(klass).hasClass('fixed')) {
              self.S(klass).removeClass('fixed');
              self.S('body').removeClass('f-topbar-fixed');
            }
          }
        }
      }
    },

    off : function () {
      this.S(this.scope).off('.fndtn.topbar');
      this.S(window).off('.fndtn.topbar');
    },

    reflow : function () {}
  };
}(jQuery, window, window.document));
$(function(){

	$.ajaxSetup({
	  headers: {
	    'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content'),
	    'enterprise-token': $('meta[name="enterprise_token"]').attr('content')
	  }
	});

	$.get( "/enterprise_data", function( r ) {		
	  $("#eporc").html(r.data.porcentaje_tarifa);
	  $("#econst").html(r.data.constante_tarifa);	  
	});
	
	$(".login-form").on('submit', function(event) {
	 	event.preventDefault();
	  	event.stopImmediatePropagation();

		$.ajax({
			type: 'POST',
			url: 'http://localhost:3000/login',
			crossDomain: true,
			xhrFields: {
			  withCredentials: true
			},
			data: {
			'login': $(this).find("input[name='login']").val(), 
			'passwd': $(this).find("input[name='passwd']").val()
			},			
			success: function(server_data) {
				$('#modal_notificacion .notification-content').html(server_data["success_mssg"]);
				$('#modal_notificacion').foundation('reveal','open');
			},
			error: function(xhr, textStatus, errorThrown) {
				console.log("error")
				$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
				$('#modal_notificacion').foundation('reveal','open');
			}
		});
		$.find("input[name='login']").val(" ");
		$.find("input[name='passwd']").val(" ");
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
	});


	$(".register-form").on('submit', function(event) {
	 	event.preventDefault();
	  	event.stopImmediatePropagation();

		$.ajax({
			type: 'POST',
			url: '/register',
			data: {
			'fname': $(this).find("input[name='fname']").val(), 
			'lname': $(this).find("input[name='lname']").val(), 
			'email': $(this).find("input[name='email']").val(), 
			'passwd': $(this).find("input[name='passwd']").val()
			},			
			success: function(server_data) {
				$('#modal_notificacion .notification-content').html(server_data["success_mssg"]);
				$('#modal_notificacion').foundation('reveal','open');
			},
			error: function(xhr, textStatus, errorThrown) {
				console.log("error")
				$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
				$('#modal_notificacion').foundation('reveal','open');
			}
		});
		$.find("input[name='fname']").val(" ");
		$.find("input[name='lname']").val(" ");
		$.find("input[name='email']").val(" ");
		$.find("input[name='passwd']").val(" ");
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
	});

	$(".empresa_setting_form").on('submit', function(event) {
		event.preventDefault();
	 	event.stopImmediatePropagation();

	 	$.ajax({
	 		type: 'PATCH',
	 		url: '/empresas/'+$('meta[name="enterprise_token"]').attr('content'),
	 		data: {
	 			'constante_tarifa':$(this).find("input[name='constante_tarifa']").val(),
	 			'porcentaje_tarifa':$(this).find("input[name='porcentaje_tarifa']").val(),
	 			'_method': "PATCH",
	 		},
	 		success: function(server_data) {
				$('#modal_notificacion .notification-content').html(server_data["success_mssg"]);
				$('#modal_notificacion').foundation('reveal','open');
	 		},
	 		error: function(xhr, textStatus, errorThrown) {
	 			console.log("error")
	 			$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
	 			$('#modal_notificacion').foundation('reveal','open');
	 		}
	 	});

	});

	$("body").delegate(".get_agencia_paquete","click", function(event) {		
	 	event.preventDefault();
	 	event.stopImmediatePropagation();	 	

	 	$.ajax({
	 		type: 'GET',
	 		url: $(this).attr("href"),
	 		data: {},
	 		success: function(server_data) {
				$('#modal_transaccion .modal-content #fecha ').html(server_data.data.fecha_arribo);
				$('#modal_transaccion .modal-content #guia ').html(server_data.data.paquete.numero_guia);
				$('#modal_transaccion .modal-content #estado ').html(server_data.data.tipo_estado.nombre);
				$('#modal_transaccion .modal-content #emisor ').html(server_data.data.paquete.emisor.nombre+" / "+server_data.data.paquete.emisor.correo_electronico);
				$('#modal_transaccion .modal-content #receptor ').html(server_data.data.paquete.receptor.nombre+" / "+server_data.data.paquete.receptor.correo_electronico);
				$('#modal_transaccion .modal-content #agencia ').html(server_data.data.agencia.nombre);
				$('#modal_transaccion .modal-content #peso ').html(server_data.data.paquete.peso);
				$('#modal_transaccion .modal-content #alto ').html(server_data.data.paquete.alto);
				$('#modal_transaccion .modal-content #ancho ').html(server_data.data.paquete.ancho);
				$('#modal_transaccion .modal-content #profundo ').html(server_data.data.paquete.profundidad);
				$('#modal_transaccion .modal-content #costo ').html(server_data.data.paquete.costo);
				$('#modal_transaccion .modal-content #descripcion ').html(server_data.data.paquete.descripcion);
				
				$('#modal_transaccion').foundation('reveal','open');
				
	 		},
	 		error: function(xhr, textStatus, errorThrown) {
	 			console.log("error")
	 			$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
	 			$('#modal_notificacion').foundation('reveal','open');
	 		}
	 	});

	});
	
	$(".arrow").on('click', function(event) {		
	 	event.preventDefault();
	 	event.stopImmediatePropagation();	 		 	
	 	var p = $(this).parent().attr("current_page");
	 	
	 	$.ajax({
	 		type: 'GET',
	 		url: "/pager_transactions",
	 		data: {
	 			"page": p,
	 			"sense":$(this).attr("sentido"),
	 		},
	 		success: function(server_data) {				
				$("#tabla-transacciones").fadeOut("300");				
				var l = server_data.page.length;				
				console.log(server_data)
				if(l!=0)
					$("#tabla-transacciones tbody").html("");
				
				
				for(var i=0; i< l;++i)
				{
					if(server_data.page[i].tipo_estado.abreviacion === "OT" || server_data.page[i].tipo_estado.abreviacion === "R")
					{
						label = "warning";
					}else if(server_data.page[i].tipo_estado.abreviacion === "D")
					{
						label = "success";
					}
					else if(server_data.page[i].tipo_estado.abreviacion === "S")
					{
						label = "regular";
					}
					$("#tabla-transacciones tbody").append(
						'<tr> \
							<td>'+server_data.page[i].fecha_arribo+'</td> \
							<td colspan="2">'+server_data.page[i].paquete.numero_guia+'</td> \
							<td>\
							<label class="'+label+' label">'+server_data.page[i].tipo_estado.nombre+'</label> \
							</td> \
							<td class="ui-helper-center"> \
								<a class="get_agencia_paquete button alert tiny tiny-custom" href="/agencia_paquetes/'+server_data.page[i].id+'"> \
									<i class="fa fa-eye fa-lg"></i> \
								</a> \
							</td> \
						</tr>'
					);	
				}
		
				$("#tabla-transacciones").fadeIn("300");						
				$("#paginador").attr("current_page",server_data.current_page===undefined?p: server_data.current_page);	 		
			},
	 		error: function(xhr, textStatus, errorThrown) {
	 			console.log("error")
	 			$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
	 			$('#modal_notificacion').foundation('reveal','open');
	 		}
	 	});

	});

	$(".paquete-form").on('submit', function(event) {		
	 	event.preventDefault();
	  	event.stopImmediatePropagation();	
	  	
		$.ajax({
			type: 'POST',
			url: '/create',
			data: {
			'agencia': $('#newp_agencia').val(), 
			'alto': $('#newp_alto').val(), 
			'ancho':  $('#newp_ancho').val(), 
			'profundidad': $('#newp_profundidad').val(), 
			'peso': $('#newp_peso').val(), 
			'valor': $('#newp_valor').val(), 
			'costo': $('#newp_costo').val(), 
			'emisor': $('#newp_origen').val(), 
			'receptor': $('#newp_destino').val(), 
			'descripcion': $('#newp_descripcion').val(), 
			},			
			success: function(server_data) {
				$('#modal_notificacion .notification-content').html(server_data["success_mssg"]);
				$('#modal_notificacion').foundation('reveal','open');
			},
			error: function(xhr, textStatus, errorThrown) {
				console.log("error")
				$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
				$('#modal_notificacion').foundation('reveal','open');
			}
		});
		$('#modal_notificacion .notification-content').html('');
		$(this).trigger("reset");
	});

	$('.keyup_target').keyup(function(){
		var costo = 0;
		var alto =$('#newp_alto').val();
		var ancho =$('#newp_ancho').val();
		var profundidad =$('#newp_profundidad').val();
		var peso =$('#newp_peso').val();
		var valor = $('#newp_valor').val();

		if(
			alto!="" &&
			ancho!="" &&
			profundidad!="" &&
			peso!="" &&
			valor!="" 
		){
			$.ajax({
				type: 'POST',
				url: '/enterprise',
				data: {			
				'ancho': ancho,	
				'alto': alto,
				'peso': peso,
				'valor': valor,
				'profundidad': profundidad,
				},			
				success: function(server_data) {
					$('#newp_costo').val(server_data.costo)
				},
				fail: function(xhr, textStatus, errorThrown) {
					console.log("error")
					$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
					$('#modal_notificacion').foundation('reveal','open');
				}
			});

		}else{
			$('#newp_costo').val(0);
		}		
	});

	$(".calculadora-form").on('submit', function(event) {
	 	event.preventDefault();
	  	event.stopImmediatePropagation();

		$.ajax({
			type: 'POST',
			url: '/enterprise',
			data: {			
			'ancho': $("#anchop").val(),	
			'alto': $("#altop").val(),
			'peso': $("#pesop").val(),
			'valor': $("#valorp").val(),
			'profundidad': $("#profundidadp").val(),
			},			
			success: function(server_data) {
				$('#modal_notificacion .notification-content').html("El Costo estimado a pagar por tu producto es de  "+server_data.costo+"  Bsf");
				$('#modal_notificacion').foundation('reveal','open');

			},
			fail: function(xhr, textStatus, errorThrown) {
				console.log("error")
				$('#modal_notificacion .notification-content').html(xhr.responseJSON.err_mssg);
				$('#modal_notificacion').foundation('reveal','open');
			}
		});
	});	

});
(function() {


}).call(this);
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2013 Klaus Hartl
 * Released under the MIT license
 */

!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a("object"==typeof exports?require("jquery"):jQuery)}(function(a){function b(a){return h.raw?a:encodeURIComponent(a)}function c(a){return h.raw?a:decodeURIComponent(a)}function d(a){return b(h.json?JSON.stringify(a):String(a))}function e(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(g," ")),h.json?JSON.parse(a):a}catch(b){}}function f(b,c){var d=h.raw?b:e(b);return a.isFunction(c)?c(d):d}var g=/\+/g,h=a.cookie=function(e,g,i){if(void 0!==g&&!a.isFunction(g)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[b(e),"=",d(g),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=e?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=c(p.shift()),r=p.join("=");if(e&&e===q){l=f(r,g);break}e||void 0===(r=f(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});
(function() {


}).call(this);
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

window.Modernizr=function(a,b,c){function d(a){t.cssText=a}function e(a,b){return d(x.join(a+";")+(b||""))}function f(a,b){return typeof a===b}function g(a,b){return!!~(""+a).indexOf(b)}function h(a,b){for(var d in a){var e=a[d];if(!g(e,"-")&&t[e]!==c)return"pfx"==b?e:!0}return!1}function i(a,b,d){for(var e in a){var g=b[a[e]];if(g!==c)return d===!1?a[e]:f(g,"function")?g.bind(d||b):g}return!1}function j(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+z.join(d+" ")+d).split(" ");return f(b,"string")||f(b,"undefined")?h(e,b):(e=(a+" "+A.join(d+" ")+d).split(" "),i(e,b,c))}function k(){o.input=function(c){for(var d=0,e=c.length;e>d;d++)E[c[d]]=!!(c[d]in u);return E.list&&(E.list=!(!b.createElement("datalist")||!a.HTMLDataListElement)),E}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),o.inputtypes=function(a){for(var d,e,f,g=0,h=a.length;h>g;g++)u.setAttribute("type",e=a[g]),d="text"!==u.type,d&&(u.value=v,u.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(e)&&u.style.WebkitAppearance!==c?(q.appendChild(u),f=b.defaultView,d=f.getComputedStyle&&"textfield"!==f.getComputedStyle(u,null).WebkitAppearance&&0!==u.offsetHeight,q.removeChild(u)):/^(search|tel)$/.test(e)||(d=/^(url|email)$/.test(e)?u.checkValidity&&u.checkValidity()===!1:u.value!=v)),D[a[g]]=!!d;return D}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var l,m,n="2.8.3",o={},p=!0,q=b.documentElement,r="modernizr",s=b.createElement(r),t=s.style,u=b.createElement("input"),v=":)",w={}.toString,x=" -webkit- -moz- -o- -ms- ".split(" "),y="Webkit Moz O ms",z=y.split(" "),A=y.toLowerCase().split(" "),B={svg:"http://www.w3.org/2000/svg"},C={},D={},E={},F=[],G=F.slice,H=function(a,c,d,e){var f,g,h,i,j=b.createElement("div"),k=b.body,l=k||b.createElement("body");if(parseInt(d,10))for(;d--;)h=b.createElement("div"),h.id=e?e[d]:r+(d+1),j.appendChild(h);return f=["&#173;",'<style id="s',r,'">',a,"</style>"].join(""),j.id=r,(k?j:l).innerHTML+=f,l.appendChild(j),k||(l.style.background="",l.style.overflow="hidden",i=q.style.overflow,q.style.overflow="hidden",q.appendChild(l)),g=c(j,a),k?j.parentNode.removeChild(j):(l.parentNode.removeChild(l),q.style.overflow=i),!!g},I=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b)&&c(b).matches||!1;var d;return H("@media "+b+" { #"+r+" { position: absolute; } }",function(b){d="absolute"==(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle).position}),d},J=function(){function a(a,e){e=e||b.createElement(d[a]||"div"),a="on"+a;var g=a in e;return g||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(a,""),g=f(e[a],"function"),f(e[a],"undefined")||(e[a]=c),e.removeAttribute(a))),e=null,g}var d={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return a}(),K={}.hasOwnProperty;m=f(K,"undefined")||f(K.call,"undefined")?function(a,b){return b in a&&f(a.constructor.prototype[b],"undefined")}:function(a,b){return K.call(a,b)},Function.prototype.bind||(Function.prototype.bind=function(a){var b=this;if("function"!=typeof b)throw new TypeError;var c=G.call(arguments,1),d=function(){if(this instanceof d){var e=function(){};e.prototype=b.prototype;var f=new e,g=b.apply(f,c.concat(G.call(arguments)));return Object(g)===g?g:f}return b.apply(a,c.concat(G.call(arguments)))};return d}),C.flexbox=function(){return j("flexWrap")},C.flexboxlegacy=function(){return j("boxDirection")},C.canvas=function(){var a=b.createElement("canvas");return!(!a.getContext||!a.getContext("2d"))},C.canvastext=function(){return!(!o.canvas||!f(b.createElement("canvas").getContext("2d").fillText,"function"))},C.webgl=function(){return!!a.WebGLRenderingContext},C.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:H(["@media (",x.join("touch-enabled),("),r,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=9===a.offsetTop}),c},C.geolocation=function(){return"geolocation"in navigator},C.postmessage=function(){return!!a.postMessage},C.websqldatabase=function(){return!!a.openDatabase},C.indexedDB=function(){return!!j("indexedDB",a)},C.hashchange=function(){return J("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},C.history=function(){return!(!a.history||!history.pushState)},C.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},C.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},C.rgba=function(){return d("background-color:rgba(150,255,150,.5)"),g(t.backgroundColor,"rgba")},C.hsla=function(){return d("background-color:hsla(120,40%,100%,.5)"),g(t.backgroundColor,"rgba")||g(t.backgroundColor,"hsla")},C.multiplebgs=function(){return d("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(t.background)},C.backgroundsize=function(){return j("backgroundSize")},C.borderimage=function(){return j("borderImage")},C.borderradius=function(){return j("borderRadius")},C.boxshadow=function(){return j("boxShadow")},C.textshadow=function(){return""===b.createElement("div").style.textShadow},C.opacity=function(){return e("opacity:.55"),/^0.55$/.test(t.opacity)},C.cssanimations=function(){return j("animationName")},C.csscolumns=function(){return j("columnCount")},C.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return d((a+"-webkit- ".split(" ").join(b+a)+x.join(c+a)).slice(0,-a.length)),g(t.backgroundImage,"gradient")},C.cssreflections=function(){return j("boxReflect")},C.csstransforms=function(){return!!j("transform")},C.csstransforms3d=function(){var a=!!j("perspective");return a&&"webkitPerspective"in q.style&&H("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b){a=9===b.offsetLeft&&3===b.offsetHeight}),a},C.csstransitions=function(){return j("transition")},C.fontface=function(){var a;return H('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&0===g.indexOf(d.split(" ")[0])}),a},C.generatedcontent=function(){var a;return H(["#",r,"{font:0/0 a}#",r,':after{content:"',v,'";visibility:hidden;font:3px/1 a}'].join(""),function(b){a=b.offsetHeight>=3}),a},C.video=function(){var a=b.createElement("video"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(d){}return c},C.audio=function(){var a=b.createElement("audio"),c=!1;try{(c=!!a.canPlayType)&&(c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(d){}return c},C.localstorage=function(){try{return localStorage.setItem(r,r),localStorage.removeItem(r),!0}catch(a){return!1}},C.sessionstorage=function(){try{return sessionStorage.setItem(r,r),sessionStorage.removeItem(r),!0}catch(a){return!1}},C.webworkers=function(){return!!a.Worker},C.applicationcache=function(){return!!a.applicationCache},C.svg=function(){return!!b.createElementNS&&!!b.createElementNS(B.svg,"svg").createSVGRect},C.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==B.svg},C.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(w.call(b.createElementNS(B.svg,"animate")))},C.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(w.call(b.createElementNS(B.svg,"clipPath")))};for(var L in C)m(C,L)&&(l=L.toLowerCase(),o[l]=C[L](),F.push((o[l]?"":"no-")+l));return o.input||k(),o.addTest=function(a,b){if("object"==typeof a)for(var d in a)m(a,d)&&o.addTest(d,a[d]);else{if(a=a.toLowerCase(),o[a]!==c)return o;b="function"==typeof b?b():b,"undefined"!=typeof p&&p&&(q.className+=" "+(b?"":"no-")+a),o[a]=b}return o},d(""),s=u=null,function(a,b){function c(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function d(){var a=s.elements;return"string"==typeof a?a.split(" "):a}function e(a){var b=r[a[p]];return b||(b={},q++,a[p]=q,r[q]=b),b}function f(a,c,d){if(c||(c=b),k)return c.createElement(a);d||(d=e(c));var f;return f=d.cache[a]?d.cache[a].cloneNode():o.test(a)?(d.cache[a]=d.createElem(a)).cloneNode():d.createElem(a),!f.canHaveChildren||n.test(a)||f.tagUrn?f:d.frag.appendChild(f)}function g(a,c){if(a||(a=b),k)return a.createDocumentFragment();c=c||e(a);for(var f=c.frag.cloneNode(),g=0,h=d(),i=h.length;i>g;g++)f.createElement(h[g]);return f}function h(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return s.shivMethods?f(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+d().join().replace(/[\w\-]+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(s,b.frag)}function i(a){a||(a=b);var d=e(a);return!s.shivCSS||j||d.hasCSS||(d.hasCSS=!!c(a,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),k||h(a,d),a}var j,k,l="3.7.0",m=a.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,o=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,p="_html5shiv",q=0,r={};!function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",j="hidden"in a,k=1==a.childNodes.length||function(){b.createElement("a");var a=b.createDocumentFragment();return"undefined"==typeof a.cloneNode||"undefined"==typeof a.createDocumentFragment||"undefined"==typeof a.createElement}()}catch(c){j=!0,k=!0}}();var s={elements:m.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:l,shivCSS:m.shivCSS!==!1,supportsUnknownElements:k,shivMethods:m.shivMethods!==!1,type:"default",shivDocument:i,createElement:f,createDocumentFragment:g};a.html5=s,i(b)}(this,b),o._version=n,o._prefixes=x,o._domPrefixes=A,o._cssomPrefixes=z,o.mq=I,o.hasEvent=J,o.testProp=function(a){return h([a])},o.testAllProps=j,o.testStyles=H,o.prefixed=function(a,b,c){return b?j(a,b,c):j(a,"pfx")},q.className=q.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(p?" js "+F.join(" "):""),o}(this,this.document);
/*! http://mths.be/placeholder v2.0.8 by @mathias */

!function(a,b,c){function d(a){var b={},d=/^jQuery\d+$/;return c.each(a.attributes,function(a,c){c.specified&&!d.test(c.name)&&(b[c.name]=c.value)}),b}function e(a,b){var d=this,e=c(d);if(d.value==e.attr("placeholder")&&e.hasClass("placeholder"))if(e.data("placeholder-password")){if(e=e.hide().next().show().attr("id",e.removeAttr("id").data("placeholder-id")),a===!0)return e[0].value=b;e.focus()}else d.value="",e.removeClass("placeholder"),d==g()&&d.select()}function f(){var a,b=this,f=c(b),g=this.id;if(""==b.value){if("password"==b.type){if(!f.data("placeholder-textinput")){try{a=f.clone().attr({type:"text"})}catch(h){a=c("<input>").attr(c.extend(d(this),{type:"text"}))}a.removeAttr("name").data({"placeholder-password":f,"placeholder-id":g}).bind("focus.placeholder",e),f.data({"placeholder-textinput":a,"placeholder-id":g}).before(a)}f=f.removeAttr("id").hide().prev().attr("id",g).show()}f.addClass("placeholder"),f[0].value=f.attr("placeholder")}else f.removeClass("placeholder")}function g(){try{return b.activeElement}catch(a){}}var h,i,j="[object OperaMini]"==Object.prototype.toString.call(a.operamini),k="placeholder"in b.createElement("input")&&!j,l="placeholder"in b.createElement("textarea")&&!j,m=c.fn,n=c.valHooks,o=c.propHooks;k&&l?(i=m.placeholder=function(){return this},i.input=i.textarea=!0):(i=m.placeholder=function(){var a=this;return a.filter((k?"textarea":":input")+"[placeholder]").not(".placeholder").bind({"focus.placeholder":e,"blur.placeholder":f}).data("placeholder-enabled",!0).trigger("blur.placeholder"),a},i.input=k,i.textarea=l,h={get:function(a){var b=c(a),d=b.data("placeholder-password");return d?d[0].value:b.data("placeholder-enabled")&&b.hasClass("placeholder")?"":a.value},set:function(a,b){var d=c(a),h=d.data("placeholder-password");return h?h[0].value=b:d.data("placeholder-enabled")?(""==b?(a.value=b,a!=g()&&f.call(a)):d.hasClass("placeholder")?e.call(a,!0,b)||(a.value=b):a.value=b,d):a.value=b}},k||(n.input=h,o.value=h),l||(n.textarea=h,o.value=h),c(function(){c(b).delegate("form","submit.placeholder",function(){var a=c(".placeholder",this).each(e);setTimeout(function(){a.each(f)},10)})}),c(a).bind("beforeunload.placeholder",function(){c(".placeholder").each(function(){this.value=""})}))}(this,document,jQuery);
(function() {


}).call(this);
// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//




;
