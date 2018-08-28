//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function(){function n(n){function t(t,r,e,u,i,o){for(;i>=0&&o>i;i+=n){var a=u?u[i]:i;e=r(e,t[a],a,t)}return e}return function(r,e,u,i){e=b(e,i,4);var o=!k(r)&&m.keys(r),a=(o||r).length,c=n>0?0:a-1;return arguments.length<3&&(u=r[o?o[c]:c],c+=n),t(r,e,u,o,c,a)}}function t(n){return function(t,r,e){r=x(r,e);for(var u=O(t),i=n>0?0:u-1;i>=0&&u>i;i+=n)if(r(t[i],i,t))return i;return-1}}function r(n,t,r){return function(e,u,i){var o=0,a=O(e);if("number"==typeof i)n>0?o=i>=0?i:Math.max(i+a,o):a=i>=0?Math.min(i+1,a):i+a+1;else if(r&&i&&a)return i=r(e,u),e[i]===u?i:-1;if(u!==u)return i=t(l.call(e,o,a),m.isNaN),i>=0?i+o:-1;for(i=n>0?o:a-1;i>=0&&a>i;i+=n)if(e[i]===u)return i;return-1}}function e(n,t){var r=I.length,e=n.constructor,u=m.isFunction(e)&&e.prototype||a,i="constructor";for(m.has(n,i)&&!m.contains(t,i)&&t.push(i);r--;)i=I[r],i in n&&n[i]!==u[i]&&!m.contains(t,i)&&t.push(i)}var u=this,i=u._,o=Array.prototype,a=Object.prototype,c=Function.prototype,f=o.push,l=o.slice,s=a.toString,p=a.hasOwnProperty,h=Array.isArray,v=Object.keys,g=c.bind,y=Object.create,d=function(){},m=function(n){return n instanceof m?n:this instanceof m?void(this._wrapped=n):new m(n)};"undefined"!=typeof exports?("undefined"!=typeof module&&module.exports&&(exports=module.exports=m),exports._=m):u._=m,m.VERSION="1.8.3";var b=function(n,t,r){if(t===void 0)return n;switch(null==r?3:r){case 1:return function(r){return n.call(t,r)};case 2:return function(r,e){return n.call(t,r,e)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)}}return function(){return n.apply(t,arguments)}},x=function(n,t,r){return null==n?m.identity:m.isFunction(n)?b(n,t,r):m.isObject(n)?m.matcher(n):m.property(n)};m.iteratee=function(n,t){return x(n,t,1/0)};var _=function(n,t){return function(r){var e=arguments.length;if(2>e||null==r)return r;for(var u=1;e>u;u++)for(var i=arguments[u],o=n(i),a=o.length,c=0;a>c;c++){var f=o[c];t&&r[f]!==void 0||(r[f]=i[f])}return r}},j=function(n){if(!m.isObject(n))return{};if(y)return y(n);d.prototype=n;var t=new d;return d.prototype=null,t},w=function(n){return function(t){return null==t?void 0:t[n]}},A=Math.pow(2,53)-1,O=w("length"),k=function(n){var t=O(n);return"number"==typeof t&&t>=0&&A>=t};m.each=m.forEach=function(n,t,r){t=b(t,r);var e,u;if(k(n))for(e=0,u=n.length;u>e;e++)t(n[e],e,n);else{var i=m.keys(n);for(e=0,u=i.length;u>e;e++)t(n[i[e]],i[e],n)}return n},m.map=m.collect=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=Array(u),o=0;u>o;o++){var a=e?e[o]:o;i[o]=t(n[a],a,n)}return i},m.reduce=m.foldl=m.inject=n(1),m.reduceRight=m.foldr=n(-1),m.find=m.detect=function(n,t,r){var e;return e=k(n)?m.findIndex(n,t,r):m.findKey(n,t,r),e!==void 0&&e!==-1?n[e]:void 0},m.filter=m.select=function(n,t,r){var e=[];return t=x(t,r),m.each(n,function(n,r,u){t(n,r,u)&&e.push(n)}),e},m.reject=function(n,t,r){return m.filter(n,m.negate(x(t)),r)},m.every=m.all=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(!t(n[o],o,n))return!1}return!0},m.some=m.any=function(n,t,r){t=x(t,r);for(var e=!k(n)&&m.keys(n),u=(e||n).length,i=0;u>i;i++){var o=e?e[i]:i;if(t(n[o],o,n))return!0}return!1},m.contains=m.includes=m.include=function(n,t,r,e){return k(n)||(n=m.values(n)),("number"!=typeof r||e)&&(r=0),m.indexOf(n,t,r)>=0},m.invoke=function(n,t){var r=l.call(arguments,2),e=m.isFunction(t);return m.map(n,function(n){var u=e?t:n[t];return null==u?u:u.apply(n,r)})},m.pluck=function(n,t){return m.map(n,m.property(t))},m.where=function(n,t){return m.filter(n,m.matcher(t))},m.findWhere=function(n,t){return m.find(n,m.matcher(t))},m.max=function(n,t,r){var e,u,i=-1/0,o=-1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],e>i&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(u>o||u===-1/0&&i===-1/0)&&(i=n,o=u)});return i},m.min=function(n,t,r){var e,u,i=1/0,o=1/0;if(null==t&&null!=n){n=k(n)?n:m.values(n);for(var a=0,c=n.length;c>a;a++)e=n[a],i>e&&(i=e)}else t=x(t,r),m.each(n,function(n,r,e){u=t(n,r,e),(o>u||1/0===u&&1/0===i)&&(i=n,o=u)});return i},m.shuffle=function(n){for(var t,r=k(n)?n:m.values(n),e=r.length,u=Array(e),i=0;e>i;i++)t=m.random(0,i),t!==i&&(u[i]=u[t]),u[t]=r[i];return u},m.sample=function(n,t,r){return null==t||r?(k(n)||(n=m.values(n)),n[m.random(n.length-1)]):m.shuffle(n).slice(0,Math.max(0,t))},m.sortBy=function(n,t,r){return t=x(t,r),m.pluck(m.map(n,function(n,r,e){return{value:n,index:r,criteria:t(n,r,e)}}).sort(function(n,t){var r=n.criteria,e=t.criteria;if(r!==e){if(r>e||r===void 0)return 1;if(e>r||e===void 0)return-1}return n.index-t.index}),"value")};var F=function(n){return function(t,r,e){var u={};return r=x(r,e),m.each(t,function(e,i){var o=r(e,i,t);n(u,e,o)}),u}};m.groupBy=F(function(n,t,r){m.has(n,r)?n[r].push(t):n[r]=[t]}),m.indexBy=F(function(n,t,r){n[r]=t}),m.countBy=F(function(n,t,r){m.has(n,r)?n[r]++:n[r]=1}),m.toArray=function(n){return n?m.isArray(n)?l.call(n):k(n)?m.map(n,m.identity):m.values(n):[]},m.size=function(n){return null==n?0:k(n)?n.length:m.keys(n).length},m.partition=function(n,t,r){t=x(t,r);var e=[],u=[];return m.each(n,function(n,r,i){(t(n,r,i)?e:u).push(n)}),[e,u]},m.first=m.head=m.take=function(n,t,r){return null==n?void 0:null==t||r?n[0]:m.initial(n,n.length-t)},m.initial=function(n,t,r){return l.call(n,0,Math.max(0,n.length-(null==t||r?1:t)))},m.last=function(n,t,r){return null==n?void 0:null==t||r?n[n.length-1]:m.rest(n,Math.max(0,n.length-t))},m.rest=m.tail=m.drop=function(n,t,r){return l.call(n,null==t||r?1:t)},m.compact=function(n){return m.filter(n,m.identity)};var S=function(n,t,r,e){for(var u=[],i=0,o=e||0,a=O(n);a>o;o++){var c=n[o];if(k(c)&&(m.isArray(c)||m.isArguments(c))){t||(c=S(c,t,r));var f=0,l=c.length;for(u.length+=l;l>f;)u[i++]=c[f++]}else r||(u[i++]=c)}return u};m.flatten=function(n,t){return S(n,t,!1)},m.without=function(n){return m.difference(n,l.call(arguments,1))},m.uniq=m.unique=function(n,t,r,e){m.isBoolean(t)||(e=r,r=t,t=!1),null!=r&&(r=x(r,e));for(var u=[],i=[],o=0,a=O(n);a>o;o++){var c=n[o],f=r?r(c,o,n):c;t?(o&&i===f||u.push(c),i=f):r?m.contains(i,f)||(i.push(f),u.push(c)):m.contains(u,c)||u.push(c)}return u},m.union=function(){return m.uniq(S(arguments,!0,!0))},m.intersection=function(n){for(var t=[],r=arguments.length,e=0,u=O(n);u>e;e++){var i=n[e];if(!m.contains(t,i)){for(var o=1;r>o&&m.contains(arguments[o],i);o++);o===r&&t.push(i)}}return t},m.difference=function(n){var t=S(arguments,!0,!0,1);return m.filter(n,function(n){return!m.contains(t,n)})},m.zip=function(){return m.unzip(arguments)},m.unzip=function(n){for(var t=n&&m.max(n,O).length||0,r=Array(t),e=0;t>e;e++)r[e]=m.pluck(n,e);return r},m.object=function(n,t){for(var r={},e=0,u=O(n);u>e;e++)t?r[n[e]]=t[e]:r[n[e][0]]=n[e][1];return r},m.findIndex=t(1),m.findLastIndex=t(-1),m.sortedIndex=function(n,t,r,e){r=x(r,e,1);for(var u=r(t),i=0,o=O(n);o>i;){var a=Math.floor((i+o)/2);r(n[a])<u?i=a+1:o=a}return i},m.indexOf=r(1,m.findIndex,m.sortedIndex),m.lastIndexOf=r(-1,m.findLastIndex),m.range=function(n,t,r){null==t&&(t=n||0,n=0),r=r||1;for(var e=Math.max(Math.ceil((t-n)/r),0),u=Array(e),i=0;e>i;i++,n+=r)u[i]=n;return u};var E=function(n,t,r,e,u){if(!(e instanceof t))return n.apply(r,u);var i=j(n.prototype),o=n.apply(i,u);return m.isObject(o)?o:i};m.bind=function(n,t){if(g&&n.bind===g)return g.apply(n,l.call(arguments,1));if(!m.isFunction(n))throw new TypeError("Bind must be called on a function");var r=l.call(arguments,2),e=function(){return E(n,e,t,this,r.concat(l.call(arguments)))};return e},m.partial=function(n){var t=l.call(arguments,1),r=function(){for(var e=0,u=t.length,i=Array(u),o=0;u>o;o++)i[o]=t[o]===m?arguments[e++]:t[o];for(;e<arguments.length;)i.push(arguments[e++]);return E(n,r,this,this,i)};return r},m.bindAll=function(n){var t,r,e=arguments.length;if(1>=e)throw new Error("bindAll must be passed function names");for(t=1;e>t;t++)r=arguments[t],n[r]=m.bind(n[r],n);return n},m.memoize=function(n,t){var r=function(e){var u=r.cache,i=""+(t?t.apply(this,arguments):e);return m.has(u,i)||(u[i]=n.apply(this,arguments)),u[i]};return r.cache={},r},m.delay=function(n,t){var r=l.call(arguments,2);return setTimeout(function(){return n.apply(null,r)},t)},m.defer=m.partial(m.delay,m,1),m.throttle=function(n,t,r){var e,u,i,o=null,a=0;r||(r={});var c=function(){a=r.leading===!1?0:m.now(),o=null,i=n.apply(e,u),o||(e=u=null)};return function(){var f=m.now();a||r.leading!==!1||(a=f);var l=t-(f-a);return e=this,u=arguments,0>=l||l>t?(o&&(clearTimeout(o),o=null),a=f,i=n.apply(e,u),o||(e=u=null)):o||r.trailing===!1||(o=setTimeout(c,l)),i}},m.debounce=function(n,t,r){var e,u,i,o,a,c=function(){var f=m.now()-o;t>f&&f>=0?e=setTimeout(c,t-f):(e=null,r||(a=n.apply(i,u),e||(i=u=null)))};return function(){i=this,u=arguments,o=m.now();var f=r&&!e;return e||(e=setTimeout(c,t)),f&&(a=n.apply(i,u),i=u=null),a}},m.wrap=function(n,t){return m.partial(t,n)},m.negate=function(n){return function(){return!n.apply(this,arguments)}},m.compose=function(){var n=arguments,t=n.length-1;return function(){for(var r=t,e=n[t].apply(this,arguments);r--;)e=n[r].call(this,e);return e}},m.after=function(n,t){return function(){return--n<1?t.apply(this,arguments):void 0}},m.before=function(n,t){var r;return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=null),r}},m.once=m.partial(m.before,2);var M=!{toString:null}.propertyIsEnumerable("toString"),I=["valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"];m.keys=function(n){if(!m.isObject(n))return[];if(v)return v(n);var t=[];for(var r in n)m.has(n,r)&&t.push(r);return M&&e(n,t),t},m.allKeys=function(n){if(!m.isObject(n))return[];var t=[];for(var r in n)t.push(r);return M&&e(n,t),t},m.values=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=n[t[u]];return e},m.mapObject=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=u.length,o={},a=0;i>a;a++)e=u[a],o[e]=t(n[e],e,n);return o},m.pairs=function(n){for(var t=m.keys(n),r=t.length,e=Array(r),u=0;r>u;u++)e[u]=[t[u],n[t[u]]];return e},m.invert=function(n){for(var t={},r=m.keys(n),e=0,u=r.length;u>e;e++)t[n[r[e]]]=r[e];return t},m.functions=m.methods=function(n){var t=[];for(var r in n)m.isFunction(n[r])&&t.push(r);return t.sort()},m.extend=_(m.allKeys),m.extendOwn=m.assign=_(m.keys),m.findKey=function(n,t,r){t=x(t,r);for(var e,u=m.keys(n),i=0,o=u.length;o>i;i++)if(e=u[i],t(n[e],e,n))return e},m.pick=function(n,t,r){var e,u,i={},o=n;if(null==o)return i;m.isFunction(t)?(u=m.allKeys(o),e=b(t,r)):(u=S(arguments,!1,!1,1),e=function(n,t,r){return t in r},o=Object(o));for(var a=0,c=u.length;c>a;a++){var f=u[a],l=o[f];e(l,f,o)&&(i[f]=l)}return i},m.omit=function(n,t,r){if(m.isFunction(t))t=m.negate(t);else{var e=m.map(S(arguments,!1,!1,1),String);t=function(n,t){return!m.contains(e,t)}}return m.pick(n,t,r)},m.defaults=_(m.allKeys,!0),m.create=function(n,t){var r=j(n);return t&&m.extendOwn(r,t),r},m.clone=function(n){return m.isObject(n)?m.isArray(n)?n.slice():m.extend({},n):n},m.tap=function(n,t){return t(n),n},m.isMatch=function(n,t){var r=m.keys(t),e=r.length;if(null==n)return!e;for(var u=Object(n),i=0;e>i;i++){var o=r[i];if(t[o]!==u[o]||!(o in u))return!1}return!0};var N=function(n,t,r,e){if(n===t)return 0!==n||1/n===1/t;if(null==n||null==t)return n===t;n instanceof m&&(n=n._wrapped),t instanceof m&&(t=t._wrapped);var u=s.call(n);if(u!==s.call(t))return!1;switch(u){case"[object RegExp]":case"[object String]":return""+n==""+t;case"[object Number]":return+n!==+n?+t!==+t:0===+n?1/+n===1/t:+n===+t;case"[object Date]":case"[object Boolean]":return+n===+t}var i="[object Array]"===u;if(!i){if("object"!=typeof n||"object"!=typeof t)return!1;var o=n.constructor,a=t.constructor;if(o!==a&&!(m.isFunction(o)&&o instanceof o&&m.isFunction(a)&&a instanceof a)&&"constructor"in n&&"constructor"in t)return!1}r=r||[],e=e||[];for(var c=r.length;c--;)if(r[c]===n)return e[c]===t;if(r.push(n),e.push(t),i){if(c=n.length,c!==t.length)return!1;for(;c--;)if(!N(n[c],t[c],r,e))return!1}else{var f,l=m.keys(n);if(c=l.length,m.keys(t).length!==c)return!1;for(;c--;)if(f=l[c],!m.has(t,f)||!N(n[f],t[f],r,e))return!1}return r.pop(),e.pop(),!0};m.isEqual=function(n,t){return N(n,t)},m.isEmpty=function(n){return null==n?!0:k(n)&&(m.isArray(n)||m.isString(n)||m.isArguments(n))?0===n.length:0===m.keys(n).length},m.isElement=function(n){return!(!n||1!==n.nodeType)},m.isArray=h||function(n){return"[object Array]"===s.call(n)},m.isObject=function(n){var t=typeof n;return"function"===t||"object"===t&&!!n},m.each(["Arguments","Function","String","Number","Date","RegExp","Error"],function(n){m["is"+n]=function(t){return s.call(t)==="[object "+n+"]"}}),m.isArguments(arguments)||(m.isArguments=function(n){return m.has(n,"callee")}),"function"!=typeof/./&&"object"!=typeof Int8Array&&(m.isFunction=function(n){return"function"==typeof n||!1}),m.isFinite=function(n){return isFinite(n)&&!isNaN(parseFloat(n))},m.isNaN=function(n){return m.isNumber(n)&&n!==+n},m.isBoolean=function(n){return n===!0||n===!1||"[object Boolean]"===s.call(n)},m.isNull=function(n){return null===n},m.isUndefined=function(n){return n===void 0},m.has=function(n,t){return null!=n&&p.call(n,t)},m.noConflict=function(){return u._=i,this},m.identity=function(n){return n},m.constant=function(n){return function(){return n}},m.noop=function(){},m.property=w,m.propertyOf=function(n){return null==n?function(){}:function(t){return n[t]}},m.matcher=m.matches=function(n){return n=m.extendOwn({},n),function(t){return m.isMatch(t,n)}},m.times=function(n,t,r){var e=Array(Math.max(0,n));t=b(t,r,1);for(var u=0;n>u;u++)e[u]=t(u);return e},m.random=function(n,t){return null==t&&(t=n,n=0),n+Math.floor(Math.random()*(t-n+1))},m.now=Date.now||function(){return(new Date).getTime()};var B={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},T=m.invert(B),R=function(n){var t=function(t){return n[t]},r="(?:"+m.keys(n).join("|")+")",e=RegExp(r),u=RegExp(r,"g");return function(n){return n=null==n?"":""+n,e.test(n)?n.replace(u,t):n}};m.escape=R(B),m.unescape=R(T),m.result=function(n,t,r){var e=null==n?void 0:n[t];return e===void 0&&(e=r),m.isFunction(e)?e.call(n):e};var q=0;m.uniqueId=function(n){var t=++q+"";return n?n+t:t},m.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var K=/(.)^/,z={"'":"'","\\":"\\","\r":"r","\n":"n","\u2028":"u2028","\u2029":"u2029"},D=/\\|'|\r|\n|\u2028|\u2029/g,L=function(n){return"\\"+z[n]};m.template=function(n,t,r){!t&&r&&(t=r),t=m.defaults({},t,m.templateSettings);var e=RegExp([(t.escape||K).source,(t.interpolate||K).source,(t.evaluate||K).source].join("|")+"|$","g"),u=0,i="__p+='";n.replace(e,function(t,r,e,o,a){return i+=n.slice(u,a).replace(D,L),u=a+t.length,r?i+="'+\n((__t=("+r+"))==null?'':_.escape(__t))+\n'":e?i+="'+\n((__t=("+e+"))==null?'':__t)+\n'":o&&(i+="';\n"+o+"\n__p+='"),t}),i+="';\n",t.variable||(i="with(obj||{}){\n"+i+"}\n"),i="var __t,__p='',__j=Array.prototype.join,"+"print=function(){__p+=__j.call(arguments,'');};\n"+i+"return __p;\n";try{var o=new Function(t.variable||"obj","_",i)}catch(a){throw a.source=i,a}var c=function(n){return o.call(this,n,m)},f=t.variable||"obj";return c.source="function("+f+"){\n"+i+"}",c},m.chain=function(n){var t=m(n);return t._chain=!0,t};var P=function(n,t){return n._chain?m(t).chain():t};m.mixin=function(n){m.each(m.functions(n),function(t){var r=m[t]=n[t];m.prototype[t]=function(){var n=[this._wrapped];return f.apply(n,arguments),P(this,r.apply(m,n))}})},m.mixin(m),m.each(["pop","push","reverse","shift","sort","splice","unshift"],function(n){var t=o[n];m.prototype[n]=function(){var r=this._wrapped;return t.apply(r,arguments),"shift"!==n&&"splice"!==n||0!==r.length||delete r[0],P(this,r)}}),m.each(["concat","join","slice"],function(n){var t=o[n];m.prototype[n]=function(){return P(this,t.apply(this._wrapped,arguments))}}),m.prototype.value=function(){return this._wrapped},m.prototype.valueOf=m.prototype.toJSON=m.prototype.value,m.prototype.toString=function(){return""+this._wrapped},"function"==typeof define&&define.amd&&define("underscore",[],function(){return m})}).call(this);
//# sourceMappingURL=underscore-min.map
/**
 * Fast UUID generator, RFC4122 version 4 compliant.
 * @author Jeff Ward (jcward.com).
 * @license MIT license
 * @link http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript/21963136#21963136
 **/
var UUID = (function () {
  'use strict';
  var self = {};
  var lut = [];

  for(var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
  }

  /**
   * Generates a UUID
   * @returns {string}
   */
  self.generate = function () {
    var d0 = Math.random() * 0xffffffff | 0;
    var d1 = Math.random() * 0xffffffff | 0;
    var d2 = Math.random() * 0xffffffff | 0;
    var d3 = Math.random() * 0xffffffff | 0;
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
      lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
      lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
      lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
  };
  return self;

})();
/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b="length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,aa=/[+~]/,ba=/'|\\/g,ca=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),da=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ea=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fa){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(ba,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+ra(o[l]);w=aa.test(a)&&pa(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",ea,!1):e.attachEvent&&e.attachEvent("onunload",ea)),p=!f(g),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ca,da);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?la(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ca,da),a[3]=(a[3]||a[4]||a[5]||"").replace(ca,da),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ca,da).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(ca,da),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return W.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(ca,da).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:oa(function(){return[0]}),last:oa(function(a,b){return[b-1]}),eq:oa(function(a,b,c){return[0>c?c+b:c]}),even:oa(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:oa(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:oa(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:oa(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function qa(){}qa.prototype=d.filters=d.pseudos,d.setFilters=new qa,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function ra(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sa(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function ta(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ua(a,b,c){for(var d=0,e=b.length;e>d;d++)ga(a,b[d],c);return c}function va(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wa(a,b,c,d,e,f){return d&&!d[u]&&(d=wa(d)),e&&!e[u]&&(e=wa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ua(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:va(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=va(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=va(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sa(function(a){return a===b},h,!0),l=sa(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sa(ta(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wa(i>1&&ta(m),i>1&&ra(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xa(a.slice(i,e)),f>e&&xa(a=a.slice(e)),f>e&&ra(a))}m.push(c)}return ta(m)}function ya(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=va(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&ga.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,ya(e,d)),f.selector=a}return f},i=ga.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ca,da),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ca,da),aa.test(j[0].type)&&pa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&ra(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,aa.test(a)&&pa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){
return M.access(a,b,c)},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var aa=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,ba=/<([\w:]+)/,ca=/<|&#?\w+;/,da=/<(?:script|style|link)/i,ea=/checked\s*(?:[^=]|=\s*.checked.)/i,fa=/^$|\/(?:java|ecma)script/i,ga=/^true\/(.*)/,ha=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ia={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ia.optgroup=ia.option,ia.tbody=ia.tfoot=ia.colgroup=ia.caption=ia.thead,ia.th=ia.td;function ja(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function ka(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function la(a){var b=ga.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function ma(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function na(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function oa(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pa(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=oa(h),f=oa(a),d=0,e=f.length;e>d;d++)pa(f[d],g[d]);if(b)if(c)for(f=f||oa(a),g=g||oa(h),d=0,e=f.length;e>d;d++)na(f[d],g[d]);else na(a,h);return g=oa(h,"script"),g.length>0&&ma(g,!i&&oa(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(ca.test(e)){f=f||k.appendChild(b.createElement("div")),g=(ba.exec(e)||["",""])[1].toLowerCase(),h=ia[g]||ia._default,f.innerHTML=h[1]+e.replace(aa,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=oa(k.appendChild(e),"script"),i&&ma(f),c)){j=0;while(e=f[j++])fa.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=ja(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(oa(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&ma(oa(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(oa(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!da.test(a)&&!ia[(ba.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(aa,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(oa(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(oa(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&ea.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(oa(c,"script"),ka),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,oa(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,la),j=0;g>j;j++)h=f[j],fa.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(ha,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qa,ra={};function sa(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function ta(a){var b=l,c=ra[a];return c||(c=sa(a,b),"none"!==c&&c||(qa=(qa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qa[0].contentDocument,b.write(),b.close(),c=sa(a,b),qa.detach()),ra[a]=c),c}var ua=/^margin/,va=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wa=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xa(a,b,c){var d,e,f,g,h=a.style;return c=c||wa(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),va.test(g)&&ua.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function ya(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var za=/^(none|table(?!-c[ea]).+)/,Aa=new RegExp("^("+Q+")(.*)$","i"),Ba=new RegExp("^([+-])=("+Q+")","i"),Ca={position:"absolute",visibility:"hidden",display:"block"},Da={letterSpacing:"0",fontWeight:"400"},Ea=["Webkit","O","Moz","ms"];function Fa(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Ea.length;while(e--)if(b=Ea[e]+c,b in a)return b;return d}function Ga(a,b,c){var d=Aa.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Ha(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ia(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wa(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xa(a,b,f),(0>e||null==e)&&(e=a.style[b]),va.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Ha(a,b,c||(g?"border":"content"),d,f)+"px"}function Ja(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",ta(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xa(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fa(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Ba.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fa(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xa(a,b,d)),"normal"===e&&b in Da&&(e=Da[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?za.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Ca,function(){return Ia(a,b,d)}):Ia(a,b,d):void 0},set:function(a,c,d){var e=d&&wa(a);return Ga(a,c,d?Ha(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=ya(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ua.test(a)||(n.cssHooks[a+b].set=Ga)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wa(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Ja(this,!0)},hide:function(){return Ja(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Ka(a,b,c,d,e){return new Ka.prototype.init(a,b,c,d,e)}n.Tween=Ka,Ka.prototype={constructor:Ka,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ka.propHooks[this.prop];return a&&a.get?a.get(this):Ka.propHooks._default.get(this)},run:function(a){var b,c=Ka.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ka.propHooks._default.set(this),this}},Ka.prototype.init.prototype=Ka.prototype,Ka.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Ka.propHooks.scrollTop=Ka.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Ka.prototype.init,n.fx.step={};var La,Ma,Na=/^(?:toggle|show|hide)$/,Oa=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pa=/queueHooks$/,Qa=[Va],Ra={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Oa.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Oa.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sa(){return setTimeout(function(){La=void 0}),La=n.now()}function Ta(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ua(a,b,c){for(var d,e=(Ra[b]||[]).concat(Ra["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Va(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||ta(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Na.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?ta(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ua(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wa(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xa(a,b,c){var d,e,f=0,g=Qa.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=La||Sa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:La||Sa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wa(k,j.opts.specialEasing);g>f;f++)if(d=Qa[f].call(j,a,k,j.opts))return d;return n.map(k,Ua,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xa,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Ra[c]=Ra[c]||[],Ra[c].unshift(b)},prefilter:function(a,b){b?Qa.unshift(a):Qa.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xa(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pa.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Ta(b,!0),a,d,e)}}),n.each({slideDown:Ta("show"),slideUp:Ta("hide"),slideToggle:Ta("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(La=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),La=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ma||(Ma=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Ma),Ma=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Ya,Za,$a=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Za:Ya)),
void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Za={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$a[b]||n.find.attr;$a[b]=function(a,b,d){var e,f;return d||(f=$a[b],$a[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$a[b]=f),e}});var _a=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_a.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ab=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ab," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ab," ").indexOf(b)>=0)return!0;return!1}});var bb=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cb=n.now(),db=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var eb=/#.*$/,fb=/([?&])_=[^&]*/,gb=/^(.*?):[ \t]*([^\r\n]*)$/gm,hb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ib=/^(?:GET|HEAD)$/,jb=/^\/\//,kb=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lb={},mb={},nb="*/".concat("*"),ob=a.location.href,pb=kb.exec(ob.toLowerCase())||[];function qb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rb(a,b,c,d){var e={},f=a===mb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function ub(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:ob,type:"GET",isLocal:hb.test(pb[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sb(sb(a,n.ajaxSettings),b):sb(n.ajaxSettings,a)},ajaxPrefilter:qb(lb),ajaxTransport:qb(mb),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gb.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||ob)+"").replace(eb,"").replace(jb,pb[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kb.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pb[1]&&h[2]===pb[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pb[3]||("http:"===pb[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rb(lb,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ib.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(db.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fb.test(d)?d.replace(fb,"$1_="+cb++):d+(db.test(d)?"&":"?")+"_="+cb++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nb+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rb(mb,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tb(k,v,f)),u=ub(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vb=/%20/g,wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&").replace(vb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bb=0,Cb={},Db={0:200,1223:204},Eb=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cb)Cb[a]()}),k.cors=!!Eb&&"withCredentials"in Eb,k.ajax=Eb=!!Eb,n.ajaxTransport(function(a){var b;return k.cors||Eb&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bb;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cb[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Db[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cb[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fb=[],Gb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fb.pop()||n.expando+"_"+cb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gb.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gb,"$1"+e):b.jsonp!==!1&&(b.url+=(db.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hb)return Hb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ib=a.document.documentElement;function Jb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ib;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ib})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jb(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=ya(k.pixelPosition,function(a,c){return c?(c=xa(a,b),va.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kb=a.jQuery,Lb=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lb),b&&a.jQuery===n&&(a.jQuery=Kb),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map
(function(d){d.Observe={}})(jQuery);
(function(d,q){var r=function(e,f){f||(f=e,e=window.document);var m=[];d(f).each(function(){for(var l=[],g=d(this),h=g.parent();h.length&&!g.is(e);h=h.parent()){var f=g.get(0).tagName.toLowerCase();l.push(f+":eq("+h.children(f).index(g)+")");g=h}(h.length||g.is(e))&&m.push("> "+l.reverse().join(" > "))});return m.join(", ")};q.path={get:r,capture:function(e,f){f||(f=e,e=window.document);var m=[];d(f).each(function(){var l=-1,g=this;if(this instanceof Text)for(var g=this.parentNode,h=g.childNodes,
f=0;f<h.length;f++)if(h[f]===this){l=f;break}var k=r(e,g),n=d(e).is(g);m.push(function(e){e=n?e:d(e).find(k);return-1===l?e:e.contents()[l]})});return function(e){e=e||window.document;return m.reduce(function(d,f){return d.add(f(e))},d([]))}}}})(jQuery,jQuery.Observe);(function(d,q){var r=function(e){this.original=d(e);this.root=this.original.clone(!1,!0)};r.prototype.find=function(d){return q.path.capture(this.original,d)(this.root)};q.Branch=r})(jQuery,jQuery.Observe);
(function(d,q){var r=function(a,b){var c={};a.forEach(function(a){(a=b(a))&&(c[a[0]]=a[1])});return c},e=r("childList attributes characterData subtree attributeOldValue characterDataOldValue attributeFilter".split(" "),function(a){return[a.toLowerCase(),a]}),f=r(Object.keys(e),function(a){if("attributefilter"!==a)return[e[a],!0]}),m=r(["added","removed"],function(a){return[a.toLowerCase(),a]}),l=d([]),g=function(a){if("object"===typeof a)return a;a=a.split(/\s+/);var b={};a.forEach(function(a){a=
a.toLowerCase();if(!e[a]&&!m[a])throw Error("Unknown option "+a);b[e[a]||m[a]]=!0});return b},h=function(a){return"["+Object.keys(a).sort().reduce(function(b,c){var d=a[c]&&"object"===typeof a[c]?h(a[c]):a[c];return b+"["+JSON.stringify(c)+":"+d+"]"},"")+"]"},t=window.MutationObserver||window.WebKitMutationObserver,k=function(a,b,c,s){this._originalOptions=d.extend({},b);b=d.extend({},b);this.attributeFilter=b.attributeFilter;delete b.attributeFilter;c&&(b.subtree=!0);b.childList&&(b.added=!0,b.removed=
!0);if(b.added||b.removed)b.childList=!0;this.target=d(a);this.options=b;this.selector=c;this.handler=s};k.prototype.is=function(a,b,c){return h(this._originalOptions)===h(a)&&this.selector===b&&this.handler===c};k.prototype.match=function(a){var b=this.options,c=a.type;if(!this.options[c])return l;if(this.selector)switch(c){case "attributes":if(!this._matchAttributeFilter(a))break;case "characterData":return this._matchAttributesAndCharacterData(a);case "childList":if(a.addedNodes&&a.addedNodes.length&&
b.added&&(c=this._matchAddedNodes(a),c.length))return c;if(a.removedNodes&&a.removedNodes.length&&b.removed)return this._matchRemovedNodes(a)}else{var s=a.target instanceof Text?d(a.target).parent():d(a.target);if(!b.subtree&&s.get(0)!==this.target.get(0))return l;switch(c){case "attributes":if(!this._matchAttributeFilter(a))break;case "characterData":return this.target;case "childList":if(a.addedNodes&&a.addedNodes.length&&b.added||a.removedNodes&&a.removedNodes.length&&b.removed)return this.target}}return l};
k.prototype._matchAttributesAndCharacterData=function(a){return this._matchSelector(this.target,[a.target])};k.prototype._matchAddedNodes=function(a){return this._matchSelector(this.target,a.addedNodes)};k.prototype._matchRemovedNodes=function(a){var b=new q.Branch(this.target),c=Array.prototype.slice.call(a.removedNodes).map(function(a){return a.cloneNode(!0)});a.previousSibling?b.find(a.previousSibling).after(c):a.nextSibling?b.find(a.nextSibling).before(c):(this.target===a.target?b.root:b.find(a.target)).empty().append(c);
return this._matchSelector(b.root,c).length?d(a.target):l};k.prototype._matchSelector=function(a,b){var c=a.find(this.selector);b=Array.prototype.slice.call(b);return c=c.filter(function(){var a=this;return b.some(function(b){return b instanceof Text?b.parentNode===a:b===a||d(b).has(a).length})})};k.prototype._matchAttributeFilter=function(a){return this.attributeFilter&&this.attributeFilter.length?0<=this.attributeFilter.indexOf(a.attributeName):!0};var n=function(a){this.patterns=[];this._target=
a;this._observer=null};n.prototype.observe=function(a,b,c){var d=this;this._observer?this._observer.disconnect():this._observer=new t(function(a){a.forEach(function(a){d.patterns.forEach(function(b){var c=b.match(a);c.length&&c.each(function(){b.handler.call(this,a)})})})});this.patterns.push(new k(this._target,a,b,c));this._observer.observe(this._target,this._collapseOptions())};n.prototype.disconnect=function(a,b,c){var d=this;this._observer&&(this.patterns.filter(function(d){return d.is(a,b,c)}).forEach(function(a){a=
d.patterns.indexOf(a);d.patterns.splice(a,1)}),this.patterns.length||this._observer.disconnect())};n.prototype.disconnectAll=function(){this._observer&&(this.patterns=[],this._observer.disconnect())};n.prototype.pause=function(){this._observer&&this._observer.disconnect()};n.prototype.resume=function(){this._observer&&this._observer.observe(this._target,this._collapseOptions())};n.prototype._collapseOptions=function(){var a={};this.patterns.forEach(function(b){var c=a.attributes&&a.attributeFilter;
if(!c&&a.attributes||!b.attributeFilter)c&&b.options.attributes&&!b.attributeFilter&&delete a.attributeFilter;else{var e={},f=[];(a.attributeFilter||[]).concat(b.attributeFilter).forEach(function(a){e[a]||(f.push(a),e[a]=1)});a.attributeFilter=f}d.extend(a,b.options)});Object.keys(m).forEach(function(b){delete a[m[b]]});return a};var p=function(a){this.patterns=[];this._paused=!1;this._target=a;this._events={};this._handler=this._handler.bind(this)};p.prototype.NS=".jQueryObserve";p.prototype.observe=
function(a,b,c){a=new k(this._target,a,b,c);d(this._target);a.options.childList&&(this._addEvent("DOMNodeInserted"),this._addEvent("DOMNodeRemoved"));a.options.attributes&&this._addEvent("DOMAttrModified");a.options.characterData&&this._addEvent("DOMCharacerDataModified");this.patterns.push(a)};p.prototype.disconnect=function(a,b,c){var e=d(this._target),f=this;this.patterns.filter(function(d){return d.is(a,b,c)}).forEach(function(a){a=f.patterns.indexOf(a);f.patterns.splice(a,1)});var g=this.patterns.reduce(function(a,
b){b.options.childList&&(a.DOMNodeInserted=!0,a.DOMNodeRemoved=!0);b.options.attributes&&(a.DOMAttrModified=!0);b.options.characterData&&(a.DOMCharacerDataModified=!0);return a},{});Object.keys(this._events).forEach(function(a){g[a]||(delete f._events[a],e.off(a+f.NS,f._handler))})};p.prototype.disconnectAll=function(){var a=d(this._target),b;for(b in this._events)a.off(b+this.NS,this._handler);this._events={};this.patterns=[]};p.prototype.pause=function(){this._paused=!0};p.prototype.resume=function(){this._paused=
!1};p.prototype._handler=function(a){if(!this._paused){var b={type:null,target:null,addedNodes:null,removedNodes:null,previousSibling:null,nextSibling:null,attributeName:null,attributeNamespace:null,oldValue:null};switch(a.type){case "DOMAttrModified":b.type="attributes";b.target=a.target;b.attributeName=a.attrName;b.oldValue=a.prevValue;break;case "DOMCharacerDataModified":b.type="characterData";b.target=d(a.target).parent().get(0);b.attributeName=a.attrName;b.oldValue=a.prevValue;break;case "DOMNodeInserted":b.type=
"childList";b.target=a.relatedNode;b.addedNodes=[a.target];b.removedNodes=[];break;case "DOMNodeRemoved":b.type="childList",b.target=a.relatedNode,b.addedNodes=[],b.removedNodes=[a.target]}for(a=0;a<this.patterns.length;a++){var c=this.patterns[a],e=c.match(b);e.length&&e.each(function(){c.handler.call(this,b)})}}};p.prototype._addEvent=function(a){this._events[a]||(d(this._target).on(a+this.NS,this._handler),this._events[a]=!0)};q.Pattern=k;q.MutationObserver=n;q.DOMEventObserver=p;d.fn.observe=
function(a,b,c){b?c||(c=b,b=null):(c=a,a=f);return this.each(function(){var e=d(this),f=e.data("observer");f||(f=t?new n(this):new p(this),e.data("observer",f));a=g(a);f.observe(a,b,c)})};d.fn.disconnect=function(a,b,c){a&&(b?c||(c=b,b=null):(c=a,a=f));return this.each(function(){var e=d(this),f=e.data("observer");f&&(a?(a=g(a),f.disconnect(a,b,c)):(f.disconnectAll(),e.removeData("observer")))})}})(jQuery,jQuery.Observe);

/**
 * Copyright 2014 Tim Down.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


if(!Array.prototype.push){Array.prototype.push=function(){for(var i=0,len=arguments.length;i<len;i++){this[this.length]=arguments[i];}
return this.length;};}
if(!Array.prototype.shift){Array.prototype.shift=function(){if(this.length>0){var firstItem=this[0];for(var i=0,len=this.length-1;i<len;i++){this[i]=this[i+1];}
this.length=this.length-1;return firstItem;}};}
if(!Array.prototype.splice){Array.prototype.splice=function(startIndex,deleteCount){var itemsAfterDeleted=this.slice(startIndex+deleteCount);var itemsDeleted=this.slice(startIndex,startIndex+deleteCount);this.length=startIndex;var argumentsArray=[];for(var i=0,len=arguments.length;i<len;i++){argumentsArray[i]=arguments[i];}
var itemsToAppend=(argumentsArray.length>2)?itemsAfterDeleted=argumentsArray.slice(2).concat(itemsAfterDeleted):itemsAfterDeleted;for(i=0,len=itemsToAppend.length;i<len;i++){this.push(itemsToAppend[i]);}
return itemsDeleted;};}
var log4javascript=(function(){function isUndefined(obj){return typeof obj=="undefined";}
function EventSupport(){}
EventSupport.prototype={eventTypes:[],eventListeners:{},setEventTypes:function(eventTypesParam){if(eventTypesParam instanceof Array){this.eventTypes=eventTypesParam;this.eventListeners={};for(var i=0,len=this.eventTypes.length;i<len;i++){this.eventListeners[this.eventTypes[i]]=[];}}else{handleError("log4javascript.EventSupport ["+this+"]: setEventTypes: eventTypes parameter must be an Array");}},addEventListener:function(eventType,listener){if(typeof listener=="function"){if(!array_contains(this.eventTypes,eventType)){handleError("log4javascript.EventSupport ["+this+"]: addEventListener: no event called '"+eventType+"'");}
this.eventListeners[eventType].push(listener);}else{handleError("log4javascript.EventSupport ["+this+"]: addEventListener: listener must be a function");}},removeEventListener:function(eventType,listener){if(typeof listener=="function"){if(!array_contains(this.eventTypes,eventType)){handleError("log4javascript.EventSupport ["+this+"]: removeEventListener: no event called '"+eventType+"'");}
array_remove(this.eventListeners[eventType],listener);}else{handleError("log4javascript.EventSupport ["+this+"]: removeEventListener: listener must be a function");}},dispatchEvent:function(eventType,eventArgs){if(array_contains(this.eventTypes,eventType)){var listeners=this.eventListeners[eventType];for(var i=0,len=listeners.length;i<len;i++){listeners[i](this,eventType,eventArgs);}}else{handleError("log4javascript.EventSupport ["+this+"]: dispatchEvent: no event called '"+eventType+"'");}}};var applicationStartDate=new Date();var uniqueId="log4javascript_"+applicationStartDate.getTime()+"_"+
Math.floor(Math.random()*100000000);var emptyFunction=function(){};var newLine="\r\n";var pageLoaded=false;function Log4JavaScript(){}
Log4JavaScript.prototype=new EventSupport();log4javascript=new Log4JavaScript();log4javascript.version="1.4.9";log4javascript.edition="log4javascript";function toStr(obj){if(obj&&obj.toString){return obj.toString();}else{return String(obj);}}
function getExceptionMessage(ex){if(ex.message){return ex.message;}else if(ex.description){return ex.description;}else{return toStr(ex);}}
function getUrlFileName(url){var lastSlashIndex=Math.max(url.lastIndexOf("/"),url.lastIndexOf("\\"));return url.substr(lastSlashIndex+1);}
function getExceptionStringRep(ex){if(ex){var exStr="Exception: "+getExceptionMessage(ex);try{if(ex.lineNumber){exStr+=" on line number "+ex.lineNumber;}
if(ex.fileName){exStr+=" in file "+getUrlFileName(ex.fileName);}}catch(localEx){logLog.warn("Unable to obtain file and line information for error");}
if(showStackTraces&&ex.stack){exStr+=newLine+"Stack trace:"+newLine+ex.stack;}
return exStr;}
return null;}
function bool(obj){return Boolean(obj);}
function trim(str){return str.replace(/^\s+/,"").replace(/\s+$/,"");}
function splitIntoLines(text){var text2=text.replace(/\r\n/g,"\n").replace(/\r/g,"\n");return text2.split("\n");}
var urlEncode=(typeof window.encodeURIComponent!="undefined")?function(str){return encodeURIComponent(str);}:function(str){return escape(str).replace(/\+/g,"%2B").replace(/"/g,"%22").replace(/'/g,"%27").replace(/\//g,"%2F").replace(/=/g,"%3D");};var urlDecode=(typeof window.decodeURIComponent!="undefined")?function(str){return decodeURIComponent(str);}:function(str){return unescape(str).replace(/%2B/g,"+").replace(/%22/g,"\"").replace(/%27/g,"'").replace(/%2F/g,"/").replace(/%3D/g,"=");};function array_remove(arr,val){var index=-1;for(var i=0,len=arr.length;i<len;i++){if(arr[i]===val){index=i;break;}}
if(index>=0){arr.splice(index,1);return true;}else{return false;}}
function array_contains(arr,val){for(var i=0,len=arr.length;i<len;i++){if(arr[i]==val){return true;}}
return false;}
function extractBooleanFromParam(param,defaultValue){if(isUndefined(param)){return defaultValue;}else{return bool(param);}}
function extractStringFromParam(param,defaultValue){if(isUndefined(param)){return defaultValue;}else{return String(param);}}
function extractIntFromParam(param,defaultValue){if(isUndefined(param)){return defaultValue;}else{try{var value=parseInt(param,10);return isNaN(value)?defaultValue:value;}catch(ex){logLog.warn("Invalid int param "+param,ex);return defaultValue;}}}
function extractFunctionFromParam(param,defaultValue){if(typeof param=="function"){return param;}else{return defaultValue;}}
function isError(err){return(err instanceof Error);}
if(!Function.prototype.apply){Function.prototype.apply=function(obj,args){var methodName="__apply__";if(typeof obj[methodName]!="undefined"){methodName+=String(Math.random()).substr(2);}
obj[methodName]=this;var argsStrings=[];for(var i=0,len=args.length;i<len;i++){argsStrings[i]="args["+i+"]";}
var script="obj."+methodName+"("+argsStrings.join(",")+")";var returnValue=eval(script);delete obj[methodName];return returnValue;};}
if(!Function.prototype.call){Function.prototype.call=function(obj){var args=[];for(var i=1,len=arguments.length;i<len;i++){args[i-1]=arguments[i];}
return this.apply(obj,args);};}
function getListenersPropertyName(eventName){return"__log4javascript_listeners__"+eventName;}
function addEvent(node,eventName,listener,useCapture,win){win=win?win:window;if(node.addEventListener){node.addEventListener(eventName,listener,useCapture);}else if(node.attachEvent){node.attachEvent("on"+eventName,listener);}else{var propertyName=getListenersPropertyName(eventName);if(!node[propertyName]){node[propertyName]=[];node["on"+eventName]=function(evt){evt=getEvent(evt,win);var listenersPropertyName=getListenersPropertyName(eventName);var listeners=this[listenersPropertyName].concat([]);var currentListener;while((currentListener=listeners.shift())){currentListener.call(this,evt);}};}
node[propertyName].push(listener);}}
function removeEvent(node,eventName,listener,useCapture){if(node.removeEventListener){node.removeEventListener(eventName,listener,useCapture);}else if(node.detachEvent){node.detachEvent("on"+eventName,listener);}else{var propertyName=getListenersPropertyName(eventName);if(node[propertyName]){array_remove(node[propertyName],listener);}}}
function getEvent(evt,win){win=win?win:window;return evt?evt:win.event;}
function stopEventPropagation(evt){if(evt.stopPropagation){evt.stopPropagation();}else if(typeof evt.cancelBubble!="undefined"){evt.cancelBubble=true;}
evt.returnValue=false;}
var logLog={quietMode:false,debugMessages:[],setQuietMode:function(quietMode){this.quietMode=bool(quietMode);},numberOfErrors:0,alertAllErrors:false,setAlertAllErrors:function(alertAllErrors){this.alertAllErrors=alertAllErrors;},debug:function(message){this.debugMessages.push(message);},displayDebug:function(){alert(this.debugMessages.join(newLine));},warn:function(message,exception){},error:function(message,exception){if(++this.numberOfErrors==1||this.alertAllErrors){if(!this.quietMode){var alertMessage="log4javascript error: "+message;if(exception){alertMessage+=newLine+newLine+"Original error: "+getExceptionStringRep(exception);}
alert(alertMessage);}}}};log4javascript.logLog=logLog;log4javascript.setEventTypes(["load","error"]);function handleError(message,exception){logLog.error(message,exception);log4javascript.dispatchEvent("error",{"message":message,"exception":exception});}
log4javascript.handleError=handleError;var enabled=!((typeof log4javascript_disabled!="undefined")&&log4javascript_disabled);log4javascript.setEnabled=function(enable){enabled=bool(enable);};log4javascript.isEnabled=function(){return enabled;};var useTimeStampsInMilliseconds=true;log4javascript.setTimeStampsInMilliseconds=function(timeStampsInMilliseconds){useTimeStampsInMilliseconds=bool(timeStampsInMilliseconds);};log4javascript.isTimeStampsInMilliseconds=function(){return useTimeStampsInMilliseconds;};log4javascript.evalInScope=function(expr){return eval(expr);};var showStackTraces=false;log4javascript.setShowStackTraces=function(show){showStackTraces=bool(show);};var Level=function(level,name){this.level=level;this.name=name;};Level.prototype={toString:function(){return this.name;},equals:function(level){return this.level==level.level;},isGreaterOrEqual:function(level){return this.level>=level.level;}};Level.ALL=new Level(Number.MIN_VALUE,"ALL");Level.TRACE=new Level(10000,"TRACE");Level.DEBUG=new Level(20000,"DEBUG");Level.INFO=new Level(30000,"INFO");Level.WARN=new Level(40000,"WARN");Level.ERROR=new Level(50000,"ERROR");Level.FATAL=new Level(60000,"FATAL");Level.OFF=new Level(Number.MAX_VALUE,"OFF");log4javascript.Level=Level;function Timer(name,level){this.name=name;this.level=isUndefined(level)?Level.INFO:level;this.start=new Date();}
Timer.prototype.getElapsedTime=function(){return new Date().getTime()-this.start.getTime();};var anonymousLoggerName="[anonymous]";var defaultLoggerName="[default]";var nullLoggerName="[null]";var rootLoggerName="root";function Logger(name){this.name=name;this.parent=null;this.children=[];var appenders=[];var loggerLevel=null;var isRoot=(this.name===rootLoggerName);var isNull=(this.name===nullLoggerName);var appenderCache=null;var appenderCacheInvalidated=false;this.addChild=function(childLogger){this.children.push(childLogger);childLogger.parent=this;childLogger.invalidateAppenderCache();};var additive=true;this.getAdditivity=function(){return additive;};this.setAdditivity=function(additivity){var valueChanged=(additive!=additivity);additive=additivity;if(valueChanged){this.invalidateAppenderCache();}};this.addAppender=function(appender){if(isNull){handleError("Logger.addAppender: you may not add an appender to the null logger");}else{if(appender instanceof log4javascript.Appender){if(!array_contains(appenders,appender)){appenders.push(appender);appender.setAddedToLogger(this);this.invalidateAppenderCache();}}else{handleError("Logger.addAppender: appender supplied ('"+
toStr(appender)+"') is not a subclass of Appender");}}};this.removeAppender=function(appender){array_remove(appenders,appender);appender.setRemovedFromLogger(this);this.invalidateAppenderCache();};this.removeAllAppenders=function(){var appenderCount=appenders.length;if(appenderCount>0){for(var i=0;i<appenderCount;i++){appenders[i].setRemovedFromLogger(this);}
appenders.length=0;this.invalidateAppenderCache();}};this.getEffectiveAppenders=function(){if(appenderCache===null||appenderCacheInvalidated){var parentEffectiveAppenders=(isRoot||!this.getAdditivity())?[]:this.parent.getEffectiveAppenders();appenderCache=parentEffectiveAppenders.concat(appenders);appenderCacheInvalidated=false;}
return appenderCache;};this.invalidateAppenderCache=function(){appenderCacheInvalidated=true;for(var i=0,len=this.children.length;i<len;i++){this.children[i].invalidateAppenderCache();}};this.log=function(level,params){if(enabled&&level.isGreaterOrEqual(this.getEffectiveLevel())){var exception;var finalParamIndex=params.length-1;var lastParam=params[finalParamIndex];if(params.length>1&&isError(lastParam)){exception=lastParam;finalParamIndex--;}
var messages=[];for(var i=0;i<=finalParamIndex;i++){messages[i]=params[i];}
var loggingEvent=new LoggingEvent(this,new Date(),level,messages,exception);this.callAppenders(loggingEvent);}};this.callAppenders=function(loggingEvent){var effectiveAppenders=this.getEffectiveAppenders();for(var i=0,len=effectiveAppenders.length;i<len;i++){effectiveAppenders[i].doAppend(loggingEvent);}};this.setLevel=function(level){if(isRoot&&level===null){handleError("Logger.setLevel: you cannot set the level of the root logger to null");}else if(level instanceof Level){loggerLevel=level;}else{handleError("Logger.setLevel: level supplied to logger "+
this.name+" is not an instance of log4javascript.Level");}};this.getLevel=function(){return loggerLevel;};this.getEffectiveLevel=function(){for(var logger=this;logger!==null;logger=logger.parent){var level=logger.getLevel();if(level!==null){return level;}}};this.group=function(name,initiallyExpanded){if(enabled){var effectiveAppenders=this.getEffectiveAppenders();for(var i=0,len=effectiveAppenders.length;i<len;i++){effectiveAppenders[i].group(name,initiallyExpanded);}}};this.groupEnd=function(){if(enabled){var effectiveAppenders=this.getEffectiveAppenders();for(var i=0,len=effectiveAppenders.length;i<len;i++){effectiveAppenders[i].groupEnd();}}};var timers={};this.time=function(name,level){if(enabled){if(isUndefined(name)){handleError("Logger.time: a name for the timer must be supplied");}else if(level&&!(level instanceof Level)){handleError("Logger.time: level supplied to timer "+
name+" is not an instance of log4javascript.Level");}else{timers[name]=new Timer(name,level);}}};this.timeEnd=function(name){if(enabled){if(isUndefined(name)){handleError("Logger.timeEnd: a name for the timer must be supplied");}else if(timers[name]){var timer=timers[name];var milliseconds=timer.getElapsedTime();this.log(timer.level,["Timer "+toStr(name)+" completed in "+milliseconds+"ms"]);delete timers[name];}else{logLog.warn("Logger.timeEnd: no timer found with name "+name);}}};this.assert=function(expr){if(enabled&&!expr){var args=[];for(var i=1,len=arguments.length;i<len;i++){args.push(arguments[i]);}
args=(args.length>0)?args:["Assertion Failure"];args.push(newLine);args.push(expr);this.log(Level.ERROR,args);}};this.toString=function(){return"Logger["+this.name+"]";};}
Logger.prototype={trace:function(){this.log(Level.TRACE,arguments);},debug:function(){this.log(Level.DEBUG,arguments);},info:function(){this.log(Level.INFO,arguments);},warn:function(){this.log(Level.WARN,arguments);},error:function(){this.log(Level.ERROR,arguments);},fatal:function(){this.log(Level.FATAL,arguments);},isEnabledFor:function(level){return level.isGreaterOrEqual(this.getEffectiveLevel());},isTraceEnabled:function(){return this.isEnabledFor(Level.TRACE);},isDebugEnabled:function(){return this.isEnabledFor(Level.DEBUG);},isInfoEnabled:function(){return this.isEnabledFor(Level.INFO);},isWarnEnabled:function(){return this.isEnabledFor(Level.WARN);},isErrorEnabled:function(){return this.isEnabledFor(Level.ERROR);},isFatalEnabled:function(){return this.isEnabledFor(Level.FATAL);}};Logger.prototype.trace.isEntryPoint=true;Logger.prototype.debug.isEntryPoint=true;Logger.prototype.info.isEntryPoint=true;Logger.prototype.warn.isEntryPoint=true;Logger.prototype.error.isEntryPoint=true;Logger.prototype.fatal.isEntryPoint=true;var loggers={};var loggerNames=[];var ROOT_LOGGER_DEFAULT_LEVEL=Level.DEBUG;var rootLogger=new Logger(rootLoggerName);rootLogger.setLevel(ROOT_LOGGER_DEFAULT_LEVEL);log4javascript.getRootLogger=function(){return rootLogger;};log4javascript.getLogger=function(loggerName){if(!(typeof loggerName=="string")){loggerName=anonymousLoggerName;logLog.warn("log4javascript.getLogger: non-string logger name "+
toStr(loggerName)+" supplied, returning anonymous logger");}
if(loggerName==rootLoggerName){handleError("log4javascript.getLogger: root logger may not be obtained by name");}
if(!loggers[loggerName]){var logger=new Logger(loggerName);loggers[loggerName]=logger;loggerNames.push(loggerName);var lastDotIndex=loggerName.lastIndexOf(".");var parentLogger;if(lastDotIndex>-1){var parentLoggerName=loggerName.substring(0,lastDotIndex);parentLogger=log4javascript.getLogger(parentLoggerName);}else{parentLogger=rootLogger;}
parentLogger.addChild(logger);}
return loggers[loggerName];};var defaultLogger=null;log4javascript.getDefaultLogger=function(){if(!defaultLogger){defaultLogger=log4javascript.getLogger(defaultLoggerName);var a=new log4javascript.PopUpAppender();defaultLogger.addAppender(a);}
return defaultLogger;};var nullLogger=null;log4javascript.getNullLogger=function(){if(!nullLogger){nullLogger=new Logger(nullLoggerName);nullLogger.setLevel(Level.OFF);}
return nullLogger;};log4javascript.resetConfiguration=function(){rootLogger.setLevel(ROOT_LOGGER_DEFAULT_LEVEL);loggers={};};var LoggingEvent=function(logger,timeStamp,level,messages,exception){this.logger=logger;this.timeStamp=timeStamp;this.timeStampInMilliseconds=timeStamp.getTime();this.timeStampInSeconds=Math.floor(this.timeStampInMilliseconds/1000);this.milliseconds=this.timeStamp.getMilliseconds();this.level=level;this.messages=messages;this.exception=exception;};LoggingEvent.prototype={getThrowableStrRep:function(){return this.exception?getExceptionStringRep(this.exception):"";},getCombinedMessages:function(){return(this.messages.length==1)?this.messages[0]:this.messages.join(newLine);},toString:function(){return"LoggingEvent["+this.level+"]";}};log4javascript.LoggingEvent=LoggingEvent;var Layout=function(){};Layout.prototype={defaults:{loggerKey:"logger",timeStampKey:"timestamp",millisecondsKey:"milliseconds",levelKey:"level",messageKey:"message",exceptionKey:"exception",urlKey:"url"},loggerKey:"logger",timeStampKey:"timestamp",millisecondsKey:"milliseconds",levelKey:"level",messageKey:"message",exceptionKey:"exception",urlKey:"url",batchHeader:"",batchFooter:"",batchSeparator:"",returnsPostData:false,overrideTimeStampsSetting:false,useTimeStampsInMilliseconds:null,format:function(){handleError("Layout.format: layout supplied has no format() method");},ignoresThrowable:function(){handleError("Layout.ignoresThrowable: layout supplied has no ignoresThrowable() method");},getContentType:function(){return"text/plain";},allowBatching:function(){return true;},setTimeStampsInMilliseconds:function(timeStampsInMilliseconds){this.overrideTimeStampsSetting=true;this.useTimeStampsInMilliseconds=bool(timeStampsInMilliseconds);},isTimeStampsInMilliseconds:function(){return this.overrideTimeStampsSetting?this.useTimeStampsInMilliseconds:useTimeStampsInMilliseconds;},getTimeStampValue:function(loggingEvent){return this.isTimeStampsInMilliseconds()?loggingEvent.timeStampInMilliseconds:loggingEvent.timeStampInSeconds;},getDataValues:function(loggingEvent,combineMessages){var dataValues=[[this.loggerKey,loggingEvent.logger.name],[this.timeStampKey,this.getTimeStampValue(loggingEvent)],[this.levelKey,loggingEvent.level.name],[this.urlKey,window.location.href],[this.messageKey,combineMessages?loggingEvent.getCombinedMessages():loggingEvent.messages]];if(!this.isTimeStampsInMilliseconds()){dataValues.push([this.millisecondsKey,loggingEvent.milliseconds]);}
if(loggingEvent.exception){dataValues.push([this.exceptionKey,getExceptionStringRep(loggingEvent.exception)]);}
if(this.hasCustomFields()){for(var i=0,len=this.customFields.length;i<len;i++){var val=this.customFields[i].value;if(typeof val==="function"){val=val(this,loggingEvent);}
dataValues.push([this.customFields[i].name,val]);}}
return dataValues;},setKeys:function(loggerKey,timeStampKey,levelKey,messageKey,exceptionKey,urlKey,millisecondsKey){this.loggerKey=extractStringFromParam(loggerKey,this.defaults.loggerKey);this.timeStampKey=extractStringFromParam(timeStampKey,this.defaults.timeStampKey);this.levelKey=extractStringFromParam(levelKey,this.defaults.levelKey);this.messageKey=extractStringFromParam(messageKey,this.defaults.messageKey);this.exceptionKey=extractStringFromParam(exceptionKey,this.defaults.exceptionKey);this.urlKey=extractStringFromParam(urlKey,this.defaults.urlKey);this.millisecondsKey=extractStringFromParam(millisecondsKey,this.defaults.millisecondsKey);},setCustomField:function(name,value){var fieldUpdated=false;for(var i=0,len=this.customFields.length;i<len;i++){if(this.customFields[i].name===name){this.customFields[i].value=value;fieldUpdated=true;}}
if(!fieldUpdated){this.customFields.push({"name":name,"value":value});}},hasCustomFields:function(){return(this.customFields.length>0);},formatWithException:function(loggingEvent){var formatted=this.format(loggingEvent);if(loggingEvent.exception&&this.ignoresThrowable()){formatted+=loggingEvent.getThrowableStrRep();}
return formatted;},toString:function(){handleError("Layout.toString: all layouts must override this method");}};log4javascript.Layout=Layout;var Appender=function(){};Appender.prototype=new EventSupport();Appender.prototype.layout=new PatternLayout();Appender.prototype.threshold=Level.ALL;Appender.prototype.loggers=[];Appender.prototype.doAppend=function(loggingEvent){if(enabled&&loggingEvent.level.level>=this.threshold.level){this.append(loggingEvent);}};Appender.prototype.append=function(loggingEvent){};Appender.prototype.setLayout=function(layout){if(layout instanceof Layout){this.layout=layout;}else{handleError("Appender.setLayout: layout supplied to "+
this.toString()+" is not a subclass of Layout");}};Appender.prototype.getLayout=function(){return this.layout;};Appender.prototype.setThreshold=function(threshold){if(threshold instanceof Level){this.threshold=threshold;}else{handleError("Appender.setThreshold: threshold supplied to "+
this.toString()+" is not a subclass of Level");}};Appender.prototype.getThreshold=function(){return this.threshold;};Appender.prototype.setAddedToLogger=function(logger){this.loggers.push(logger);};Appender.prototype.setRemovedFromLogger=function(logger){array_remove(this.loggers,logger);};Appender.prototype.group=emptyFunction;Appender.prototype.groupEnd=emptyFunction;Appender.prototype.toString=function(){handleError("Appender.toString: all appenders must override this method");};log4javascript.Appender=Appender;function SimpleLayout(){this.customFields=[];}
SimpleLayout.prototype=new Layout();SimpleLayout.prototype.format=function(loggingEvent){return loggingEvent.level.name+" - "+loggingEvent.getCombinedMessages();};SimpleLayout.prototype.ignoresThrowable=function(){return true;};SimpleLayout.prototype.toString=function(){return"SimpleLayout";};log4javascript.SimpleLayout=SimpleLayout;function NullLayout(){this.customFields=[];}
NullLayout.prototype=new Layout();NullLayout.prototype.format=function(loggingEvent){return loggingEvent.messages;};NullLayout.prototype.ignoresThrowable=function(){return true;};NullLayout.prototype.formatWithException=function(loggingEvent){var messages=loggingEvent.messages,ex=loggingEvent.exception;return ex?messages.concat([ex]):messages;};NullLayout.prototype.toString=function(){return"NullLayout";};log4javascript.NullLayout=NullLayout;function XmlLayout(combineMessages){this.combineMessages=extractBooleanFromParam(combineMessages,true);this.customFields=[];}
XmlLayout.prototype=new Layout();XmlLayout.prototype.isCombinedMessages=function(){return this.combineMessages;};XmlLayout.prototype.getContentType=function(){return"text/xml";};XmlLayout.prototype.escapeCdata=function(str){return str.replace(/\]\]>/,"]]>]]&gt;<![CDATA[");};XmlLayout.prototype.format=function(loggingEvent){var layout=this;var i,len;function formatMessage(message){message=(typeof message==="string")?message:toStr(message);return"<log4javascript:message><![CDATA["+
layout.escapeCdata(message)+"]]></log4javascript:message>";}
var str="<log4javascript:event logger=\""+loggingEvent.logger.name+"\" timestamp=\""+this.getTimeStampValue(loggingEvent)+"\"";if(!this.isTimeStampsInMilliseconds()){str+=" milliseconds=\""+loggingEvent.milliseconds+"\"";}
str+=" level=\""+loggingEvent.level.name+"\">"+newLine;if(this.combineMessages){str+=formatMessage(loggingEvent.getCombinedMessages());}else{str+="<log4javascript:messages>"+newLine;for(i=0,len=loggingEvent.messages.length;i<len;i++){str+=formatMessage(loggingEvent.messages[i])+newLine;}
str+="</log4javascript:messages>"+newLine;}
if(this.hasCustomFields()){for(i=0,len=this.customFields.length;i<len;i++){str+="<log4javascript:customfield name=\""+
this.customFields[i].name+"\"><![CDATA["+
this.customFields[i].value.toString()+"]]></log4javascript:customfield>"+newLine;}}
if(loggingEvent.exception){str+="<log4javascript:exception><![CDATA["+
getExceptionStringRep(loggingEvent.exception)+"]]></log4javascript:exception>"+newLine;}
str+="</log4javascript:event>"+newLine+newLine;return str;};XmlLayout.prototype.ignoresThrowable=function(){return false;};XmlLayout.prototype.toString=function(){return"XmlLayout";};log4javascript.XmlLayout=XmlLayout;function escapeNewLines(str){return str.replace(/\r\n|\r|\n/g,"\\r\\n");}
function JsonLayout(readable,combineMessages){this.readable=extractBooleanFromParam(readable,false);this.combineMessages=extractBooleanFromParam(combineMessages,true);this.batchHeader=this.readable?"["+newLine:"[";this.batchFooter=this.readable?"]"+newLine:"]";this.batchSeparator=this.readable?","+newLine:",";this.setKeys();this.colon=this.readable?": ":":";this.tab=this.readable?"\t":"";this.lineBreak=this.readable?newLine:"";this.customFields=[];}
JsonLayout.prototype=new Layout();JsonLayout.prototype.isReadable=function(){return this.readable;};JsonLayout.prototype.isCombinedMessages=function(){return this.combineMessages;};JsonLayout.prototype.format=function(loggingEvent){var layout=this;var dataValues=this.getDataValues(loggingEvent,this.combineMessages);var str="{"+this.lineBreak;var i,len;function formatValue(val,prefix,expand){var formattedValue;var valType=typeof val;if(val instanceof Date){formattedValue=String(val.getTime());}else if(expand&&(val instanceof Array)){formattedValue="["+layout.lineBreak;for(var i=0,len=val.length;i<len;i++){var childPrefix=prefix+layout.tab;formattedValue+=childPrefix+formatValue(val[i],childPrefix,false);if(i<val.length-1){formattedValue+=",";}
formattedValue+=layout.lineBreak;}
formattedValue+=prefix+"]";}else if(valType!=="number"&&valType!=="boolean"){formattedValue="\""+escapeNewLines(toStr(val).replace(/\"/g,"\\\""))+"\"";}else{formattedValue=val;}
return formattedValue;}
for(i=0,len=dataValues.length-1;i<=len;i++){str+=this.tab+"\""+dataValues[i][0]+"\""+this.colon+formatValue(dataValues[i][1],this.tab,true);if(i<len){str+=",";}
str+=this.lineBreak;}
str+="}"+this.lineBreak;return str;};JsonLayout.prototype.ignoresThrowable=function(){return false;};JsonLayout.prototype.toString=function(){return"JsonLayout";};JsonLayout.prototype.getContentType=function(){return"application/json";};log4javascript.JsonLayout=JsonLayout;function HttpPostDataLayout(){this.setKeys();this.customFields=[];this.returnsPostData=true;}
HttpPostDataLayout.prototype=new Layout();HttpPostDataLayout.prototype.allowBatching=function(){return false;};HttpPostDataLayout.prototype.format=function(loggingEvent){var dataValues=this.getDataValues(loggingEvent);var queryBits=[];for(var i=0,len=dataValues.length;i<len;i++){var val=(dataValues[i][1]instanceof Date)?String(dataValues[i][1].getTime()):dataValues[i][1];queryBits.push(urlEncode(dataValues[i][0])+"="+urlEncode(val));}
return queryBits.join("&");};HttpPostDataLayout.prototype.ignoresThrowable=function(loggingEvent){return false;};HttpPostDataLayout.prototype.toString=function(){return"HttpPostDataLayout";};log4javascript.HttpPostDataLayout=HttpPostDataLayout;function formatObjectExpansion(obj,depth,indentation){var objectsExpanded=[];function doFormat(obj,depth,indentation){var i,j,len,childDepth,childIndentation,childLines,expansion,childExpansion;if(!indentation){indentation="";}
function formatString(text){var lines=splitIntoLines(text);for(var j=1,jLen=lines.length;j<jLen;j++){lines[j]=indentation+lines[j];}
return lines.join(newLine);}
if(obj===null){return"null";}else if(typeof obj=="undefined"){return"undefined";}else if(typeof obj=="string"){return formatString(obj);}else if(typeof obj=="object"&&array_contains(objectsExpanded,obj)){try{expansion=toStr(obj);}catch(ex){expansion="Error formatting property. Details: "+getExceptionStringRep(ex);}
return expansion+" [already expanded]";}else if((obj instanceof Array)&&depth>0){objectsExpanded.push(obj);expansion="["+newLine;childDepth=depth-1;childIndentation=indentation+"  ";childLines=[];for(i=0,len=obj.length;i<len;i++){try{childExpansion=doFormat(obj[i],childDepth,childIndentation);childLines.push(childIndentation+childExpansion);}catch(ex){childLines.push(childIndentation+"Error formatting array member. Details: "+
getExceptionStringRep(ex)+"");}}
expansion+=childLines.join(","+newLine)+newLine+indentation+"]";return expansion;}else if(Object.prototype.toString.call(obj)=="[object Date]"){return obj.toString();}else if(typeof obj=="object"&&depth>0){objectsExpanded.push(obj);expansion="{"+newLine;childDepth=depth-1;childIndentation=indentation+"  ";childLines=[];for(i in obj){try{childExpansion=doFormat(obj[i],childDepth,childIndentation);childLines.push(childIndentation+i+": "+childExpansion);}catch(ex){childLines.push(childIndentation+i+": Error formatting property. Details: "+
getExceptionStringRep(ex));}}
expansion+=childLines.join(","+newLine)+newLine+indentation+"}";return expansion;}else{return formatString(toStr(obj));}}
return doFormat(obj,depth,indentation);}
var SimpleDateFormat;(function(){var regex=/('[^']*')|(G+|y+|M+|w+|W+|D+|d+|F+|E+|a+|H+|k+|K+|h+|m+|s+|S+|Z+)|([a-zA-Z]+)|([^a-zA-Z']+)/;var monthNames=["January","February","March","April","May","June","July","August","September","October","November","December"];var dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];var TEXT2=0,TEXT3=1,NUMBER=2,YEAR=3,MONTH=4,TIMEZONE=5;var types={G:TEXT2,y:YEAR,M:MONTH,w:NUMBER,W:NUMBER,D:NUMBER,d:NUMBER,F:NUMBER,E:TEXT3,a:TEXT2,H:NUMBER,k:NUMBER,K:NUMBER,h:NUMBER,m:NUMBER,s:NUMBER,S:NUMBER,Z:TIMEZONE};var ONE_DAY=24*60*60*1000;var ONE_WEEK=7*ONE_DAY;var DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK=1;var newDateAtMidnight=function(year,month,day){var d=new Date(year,month,day,0,0,0);d.setMilliseconds(0);return d;};Date.prototype.getDifference=function(date){return this.getTime()-date.getTime();};Date.prototype.isBefore=function(d){return this.getTime()<d.getTime();};Date.prototype.getUTCTime=function(){return Date.UTC(this.getFullYear(),this.getMonth(),this.getDate(),this.getHours(),this.getMinutes(),this.getSeconds(),this.getMilliseconds());};Date.prototype.getTimeSince=function(d){return this.getUTCTime()-d.getUTCTime();};Date.prototype.getPreviousSunday=function(){var midday=new Date(this.getFullYear(),this.getMonth(),this.getDate(),12,0,0);var previousSunday=new Date(midday.getTime()-this.getDay()*ONE_DAY);return newDateAtMidnight(previousSunday.getFullYear(),previousSunday.getMonth(),previousSunday.getDate());};Date.prototype.getWeekInYear=function(minimalDaysInFirstWeek){if(isUndefined(this.minimalDaysInFirstWeek)){minimalDaysInFirstWeek=DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK;}
var previousSunday=this.getPreviousSunday();var startOfYear=newDateAtMidnight(this.getFullYear(),0,1);var numberOfSundays=previousSunday.isBefore(startOfYear)?0:1+Math.floor(previousSunday.getTimeSince(startOfYear)/ONE_WEEK);var numberOfDaysInFirstWeek=7-startOfYear.getDay();var weekInYear=numberOfSundays;if(numberOfDaysInFirstWeek<minimalDaysInFirstWeek){weekInYear--;}
return weekInYear;};Date.prototype.getWeekInMonth=function(minimalDaysInFirstWeek){if(isUndefined(this.minimalDaysInFirstWeek)){minimalDaysInFirstWeek=DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK;}
var previousSunday=this.getPreviousSunday();var startOfMonth=newDateAtMidnight(this.getFullYear(),this.getMonth(),1);var numberOfSundays=previousSunday.isBefore(startOfMonth)?0:1+Math.floor(previousSunday.getTimeSince(startOfMonth)/ONE_WEEK);var numberOfDaysInFirstWeek=7-startOfMonth.getDay();var weekInMonth=numberOfSundays;if(numberOfDaysInFirstWeek>=minimalDaysInFirstWeek){weekInMonth++;}
return weekInMonth;};Date.prototype.getDayInYear=function(){var startOfYear=newDateAtMidnight(this.getFullYear(),0,1);return 1+Math.floor(this.getTimeSince(startOfYear)/ONE_DAY);};SimpleDateFormat=function(formatString){this.formatString=formatString;};SimpleDateFormat.prototype.setMinimalDaysInFirstWeek=function(days){this.minimalDaysInFirstWeek=days;};SimpleDateFormat.prototype.getMinimalDaysInFirstWeek=function(){return isUndefined(this.minimalDaysInFirstWeek)?DEFAULT_MINIMAL_DAYS_IN_FIRST_WEEK:this.minimalDaysInFirstWeek;};var padWithZeroes=function(str,len){while(str.length<len){str="0"+str;}
return str;};var formatText=function(data,numberOfLetters,minLength){return(numberOfLetters>=4)?data:data.substr(0,Math.max(minLength,numberOfLetters));};var formatNumber=function(data,numberOfLetters){var dataString=""+data;return padWithZeroes(dataString,numberOfLetters);};SimpleDateFormat.prototype.format=function(date){var formattedString="";var result;var searchString=this.formatString;while((result=regex.exec(searchString))){var quotedString=result[1];var patternLetters=result[2];var otherLetters=result[3];var otherCharacters=result[4];if(quotedString){if(quotedString=="''"){formattedString+="'";}else{formattedString+=quotedString.substring(1,quotedString.length-1);}}else if(otherLetters){}else if(otherCharacters){formattedString+=otherCharacters;}else if(patternLetters){var patternLetter=patternLetters.charAt(0);var numberOfLetters=patternLetters.length;var rawData="";switch(patternLetter){case"G":rawData="AD";break;case"y":rawData=date.getFullYear();break;case"M":rawData=date.getMonth();break;case"w":rawData=date.getWeekInYear(this.getMinimalDaysInFirstWeek());break;case"W":rawData=date.getWeekInMonth(this.getMinimalDaysInFirstWeek());break;case"D":rawData=date.getDayInYear();break;case"d":rawData=date.getDate();break;case"F":rawData=1+Math.floor((date.getDate()-1)/7);break;case"E":rawData=dayNames[date.getDay()];break;case"a":rawData=(date.getHours()>=12)?"PM":"AM";break;case"H":rawData=date.getHours();break;case"k":rawData=date.getHours()||24;break;case"K":rawData=date.getHours()%12;break;case"h":rawData=(date.getHours()%12)||12;break;case"m":rawData=date.getMinutes();break;case"s":rawData=date.getSeconds();break;case"S":rawData=date.getMilliseconds();break;case"Z":rawData=date.getTimezoneOffset();break;}
switch(types[patternLetter]){case TEXT2:formattedString+=formatText(rawData,numberOfLetters,2);break;case TEXT3:formattedString+=formatText(rawData,numberOfLetters,3);break;case NUMBER:formattedString+=formatNumber(rawData,numberOfLetters);break;case YEAR:if(numberOfLetters<=3){var dataString=""+rawData;formattedString+=dataString.substr(2,2);}else{formattedString+=formatNumber(rawData,numberOfLetters);}
break;case MONTH:if(numberOfLetters>=3){formattedString+=formatText(monthNames[rawData],numberOfLetters,numberOfLetters);}else{formattedString+=formatNumber(rawData+1,numberOfLetters);}
break;case TIMEZONE:var isPositive=(rawData>0);var prefix=isPositive?"-":"+";var absData=Math.abs(rawData);var hours=""+Math.floor(absData/60);hours=padWithZeroes(hours,2);var minutes=""+(absData%60);minutes=padWithZeroes(minutes,2);formattedString+=prefix+hours+minutes;break;}}
searchString=searchString.substr(result.index+result[0].length);}
return formattedString;};})();log4javascript.SimpleDateFormat=SimpleDateFormat;function PatternLayout(pattern){if(pattern){this.pattern=pattern;}else{this.pattern=PatternLayout.DEFAULT_CONVERSION_PATTERN;}
this.customFields=[];}
PatternLayout.TTCC_CONVERSION_PATTERN="%r %p %c - %m%n";PatternLayout.DEFAULT_CONVERSION_PATTERN="%m%n";PatternLayout.ISO8601_DATEFORMAT="yyyy-MM-dd HH:mm:ss,SSS";PatternLayout.DATETIME_DATEFORMAT="dd MMM yyyy HH:mm:ss,SSS";PatternLayout.ABSOLUTETIME_DATEFORMAT="HH:mm:ss,SSS";PatternLayout.prototype=new Layout();PatternLayout.prototype.format=function(loggingEvent){var regex=/%(-?[0-9]+)?(\.?[0-9]+)?([acdfmMnpr%])(\{([^\}]+)\})?|([^%]+)/;var formattedString="";var result;var searchString=this.pattern;while((result=regex.exec(searchString))){var matchedString=result[0];var padding=result[1];var truncation=result[2];var conversionCharacter=result[3];var specifier=result[5];var text=result[6];if(text){formattedString+=""+text;}else{var replacement="";switch(conversionCharacter){case"a":case"m":var depth=0;if(specifier){depth=parseInt(specifier,10);if(isNaN(depth)){handleError("PatternLayout.format: invalid specifier '"+
specifier+"' for conversion character '"+conversionCharacter+"' - should be a number");depth=0;}}
var messages=(conversionCharacter==="a")?loggingEvent.messages[0]:loggingEvent.messages;for(var i=0,len=messages.length;i<len;i++){if(i>0&&(replacement.charAt(replacement.length-1)!==" ")){replacement+=" ";}
if(depth===0){replacement+=messages[i];}else{replacement+=formatObjectExpansion(messages[i],depth);}}
break;case"c":var loggerName=loggingEvent.logger.name;if(specifier){var precision=parseInt(specifier,10);var loggerNameBits=loggingEvent.logger.name.split(".");if(precision>=loggerNameBits.length){replacement=loggerName;}else{replacement=loggerNameBits.slice(loggerNameBits.length-precision).join(".");}}else{replacement=loggerName;}
break;case"d":var dateFormat=PatternLayout.ISO8601_DATEFORMAT;if(specifier){dateFormat=specifier;if(dateFormat=="ISO8601"){dateFormat=PatternLayout.ISO8601_DATEFORMAT;}else if(dateFormat=="ABSOLUTE"){dateFormat=PatternLayout.ABSOLUTETIME_DATEFORMAT;}else if(dateFormat=="DATE"){dateFormat=PatternLayout.DATETIME_DATEFORMAT;}}
replacement=(new SimpleDateFormat(dateFormat)).format(loggingEvent.timeStamp);break;case"f":if(this.hasCustomFields()){var fieldIndex=0;if(specifier){fieldIndex=parseInt(specifier,10);if(isNaN(fieldIndex)){handleError("PatternLayout.format: invalid specifier '"+
specifier+"' for conversion character 'f' - should be a number");}else if(fieldIndex===0){handleError("PatternLayout.format: invalid specifier '"+
specifier+"' for conversion character 'f' - must be greater than zero");}else if(fieldIndex>this.customFields.length){handleError("PatternLayout.format: invalid specifier '"+
specifier+"' for conversion character 'f' - there aren't that many custom fields");}else{fieldIndex=fieldIndex-1;}}
var val=this.customFields[fieldIndex].value;if(typeof val=="function"){val=val(this,loggingEvent);}
replacement=val;}
break;case"n":replacement=newLine;break;case"p":replacement=loggingEvent.level.name;break;case"r":replacement=""+loggingEvent.timeStamp.getDifference(applicationStartDate);break;case"%":replacement="%";break;default:replacement=matchedString;break;}
var l;if(truncation){l=parseInt(truncation.substr(1),10);var strLen=replacement.length;if(l<strLen){replacement=replacement.substring(strLen-l,strLen);}}
if(padding){if(padding.charAt(0)=="-"){l=parseInt(padding.substr(1),10);while(replacement.length<l){replacement+=" ";}}else{l=parseInt(padding,10);while(replacement.length<l){replacement=" "+replacement;}}}
formattedString+=replacement;}
searchString=searchString.substr(result.index+result[0].length);}
return formattedString;};PatternLayout.prototype.ignoresThrowable=function(){return true;};PatternLayout.prototype.toString=function(){return"PatternLayout";};log4javascript.PatternLayout=PatternLayout;function AlertAppender(){}
AlertAppender.prototype=new Appender();AlertAppender.prototype.layout=new SimpleLayout();AlertAppender.prototype.append=function(loggingEvent){alert(this.getLayout().formatWithException(loggingEvent));};AlertAppender.prototype.toString=function(){return"AlertAppender";};log4javascript.AlertAppender=AlertAppender;function BrowserConsoleAppender(){}
BrowserConsoleAppender.prototype=new log4javascript.Appender();BrowserConsoleAppender.prototype.layout=new NullLayout();BrowserConsoleAppender.prototype.threshold=Level.DEBUG;BrowserConsoleAppender.prototype.append=function(loggingEvent){var appender=this;var getFormattedMessage=function(){var formattedMessage=appender.getLayout().formatWithException(loggingEvent);return(typeof formattedMessage=="string")?[formattedMessage]:formattedMessage;};var console;if((console=window.console)&&console.log){var formattedMessage=getFormattedMessage();var consoleMethodName;if(console.debug&&Level.DEBUG.isGreaterOrEqual(loggingEvent.level)){consoleMethodName="debug";}else if(console.info&&Level.INFO.equals(loggingEvent.level)){consoleMethodName="info";}else if(console.warn&&Level.WARN.equals(loggingEvent.level)){consoleMethodName="warn";}else if(console.error&&loggingEvent.level.isGreaterOrEqual(Level.ERROR)){consoleMethodName="error";}else{consoleMethodName="log";}
if(console[consoleMethodName].apply){console[consoleMethodName].apply(console,formattedMessage);}else{console[consoleMethodName](formattedMessage);}}else if((typeof opera!="undefined")&&opera.postError){opera.postError(getFormattedMessage());}};BrowserConsoleAppender.prototype.group=function(name){if(window.console&&window.console.group){window.console.group(name);}};BrowserConsoleAppender.prototype.groupEnd=function(){if(window.console&&window.console.groupEnd){window.console.groupEnd();}};BrowserConsoleAppender.prototype.toString=function(){return"BrowserConsoleAppender";};log4javascript.BrowserConsoleAppender=BrowserConsoleAppender;var xhrFactory=function(){return new XMLHttpRequest();};var xmlHttpFactories=[xhrFactory,function(){return new ActiveXObject("Msxml2.XMLHTTP");},function(){return new ActiveXObject("Microsoft.XMLHTTP");}];var withCredentialsSupported=false;var getXmlHttp=function(errorHandler){var xmlHttp=null,factory;for(var i=0,len=xmlHttpFactories.length;i<len;i++){factory=xmlHttpFactories[i];try{xmlHttp=factory();withCredentialsSupported=(factory==xhrFactory&&("withCredentials"in xmlHttp));getXmlHttp=factory;return xmlHttp;}catch(e){}}
if(errorHandler){errorHandler();}else{handleError("getXmlHttp: unable to obtain XMLHttpRequest object");}};function isHttpRequestSuccessful(xmlHttp){return isUndefined(xmlHttp.status)||xmlHttp.status===0||(xmlHttp.status>=200&&xmlHttp.status<300)||xmlHttp.status==1223;}
function AjaxAppender(url,withCredentials){var appender=this;var isSupported=true;if(!url){handleError("AjaxAppender: URL must be specified in constructor");isSupported=false;}
var timed=this.defaults.timed;var waitForResponse=this.defaults.waitForResponse;var batchSize=this.defaults.batchSize;var timerInterval=this.defaults.timerInterval;var requestSuccessCallback=this.defaults.requestSuccessCallback;var failCallback=this.defaults.failCallback;var postVarName=this.defaults.postVarName;var sendAllOnUnload=this.defaults.sendAllOnUnload;var contentType=this.defaults.contentType;var sessionId=null;var queuedLoggingEvents=[];var queuedRequests=[];var headers=[];var sending=false;var initialized=false;function checkCanConfigure(configOptionName){if(initialized){handleError("AjaxAppender: configuration option '"+
configOptionName+"' may not be set after the appender has been initialized");return false;}
return true;}
this.getSessionId=function(){return sessionId;};this.setSessionId=function(sessionIdParam){sessionId=extractStringFromParam(sessionIdParam,null);this.layout.setCustomField("sessionid",sessionId);};this.setLayout=function(layoutParam){if(checkCanConfigure("layout")){this.layout=layoutParam;if(sessionId!==null){this.setSessionId(sessionId);}}};this.isTimed=function(){return timed;};this.setTimed=function(timedParam){if(checkCanConfigure("timed")){timed=bool(timedParam);}};this.getTimerInterval=function(){return timerInterval;};this.setTimerInterval=function(timerIntervalParam){if(checkCanConfigure("timerInterval")){timerInterval=extractIntFromParam(timerIntervalParam,timerInterval);}};this.isWaitForResponse=function(){return waitForResponse;};this.setWaitForResponse=function(waitForResponseParam){if(checkCanConfigure("waitForResponse")){waitForResponse=bool(waitForResponseParam);}};this.getBatchSize=function(){return batchSize;};this.setBatchSize=function(batchSizeParam){if(checkCanConfigure("batchSize")){batchSize=extractIntFromParam(batchSizeParam,batchSize);}};this.isSendAllOnUnload=function(){return sendAllOnUnload;};this.setSendAllOnUnload=function(sendAllOnUnloadParam){if(checkCanConfigure("sendAllOnUnload")){sendAllOnUnload=extractBooleanFromParam(sendAllOnUnloadParam,sendAllOnUnload);}};this.setRequestSuccessCallback=function(requestSuccessCallbackParam){requestSuccessCallback=extractFunctionFromParam(requestSuccessCallbackParam,requestSuccessCallback);};this.setFailCallback=function(failCallbackParam){failCallback=extractFunctionFromParam(failCallbackParam,failCallback);};this.getPostVarName=function(){return postVarName;};this.setPostVarName=function(postVarNameParam){if(checkCanConfigure("postVarName")){postVarName=extractStringFromParam(postVarNameParam,postVarName);}};this.getHeaders=function(){return headers;};this.addHeader=function(name,value){if(name.toLowerCase()=="content-type"){contentType=value;}else{headers.push({name:name,value:value});}};function sendAll(){if(isSupported&&enabled){sending=true;var currentRequestBatch;if(waitForResponse){if(queuedRequests.length>0){currentRequestBatch=queuedRequests.shift();sendRequest(preparePostData(currentRequestBatch),sendAll);}else{sending=false;if(timed){scheduleSending();}}}else{while((currentRequestBatch=queuedRequests.shift())){sendRequest(preparePostData(currentRequestBatch));}
sending=false;if(timed){scheduleSending();}}}}
this.sendAll=sendAll;function sendAllRemaining(){var sendingAnything=false;if(isSupported&&enabled){var actualBatchSize=appender.getLayout().allowBatching()?batchSize:1;var currentLoggingEvent;var batchedLoggingEvents=[];while((currentLoggingEvent=queuedLoggingEvents.shift())){batchedLoggingEvents.push(currentLoggingEvent);if(queuedLoggingEvents.length>=actualBatchSize){queuedRequests.push(batchedLoggingEvents);batchedLoggingEvents=[];}}
if(batchedLoggingEvents.length>0){queuedRequests.push(batchedLoggingEvents);}
sendingAnything=(queuedRequests.length>0);waitForResponse=false;timed=false;sendAll();}
return sendingAnything;}
this.sendAllRemaining=sendAllRemaining;function preparePostData(batchedLoggingEvents){var formattedMessages=[];var currentLoggingEvent;var postData="";while((currentLoggingEvent=batchedLoggingEvents.shift())){formattedMessages.push(appender.getLayout().formatWithException(currentLoggingEvent));}
if(batchedLoggingEvents.length==1){postData=formattedMessages.join("");}else{postData=appender.getLayout().batchHeader+
formattedMessages.join(appender.getLayout().batchSeparator)+
appender.getLayout().batchFooter;}
if(contentType==appender.defaults.contentType){postData=appender.getLayout().returnsPostData?postData:urlEncode(postVarName)+"="+urlEncode(postData);if(postData.length>0){postData+="&";}
postData+="layout="+urlEncode(appender.getLayout().toString());}
return postData;}
function scheduleSending(){window.setTimeout(sendAll,timerInterval);}
function xmlHttpErrorHandler(){var msg="AjaxAppender: could not create XMLHttpRequest object. AjaxAppender disabled";handleError(msg);isSupported=false;if(failCallback){failCallback(msg);}}
function sendRequest(postData,successCallback){try{var xmlHttp=getXmlHttp(xmlHttpErrorHandler);if(isSupported){if(withCredentials&&withCredentialsSupported){xmlHttp.withCredentials=true;}
xmlHttp.onreadystatechange=function(){if(xmlHttp.readyState==4){if(isHttpRequestSuccessful(xmlHttp)){if(requestSuccessCallback){requestSuccessCallback(xmlHttp);}
if(successCallback){successCallback(xmlHttp);}}else{var msg="AjaxAppender.append: XMLHttpRequest request to URL "+
url+" returned status code "+xmlHttp.status;handleError(msg);if(failCallback){failCallback(msg);}}
xmlHttp.onreadystatechange=emptyFunction;xmlHttp=null;}};xmlHttp.open("POST",url,true);try{for(var i=0,header;header=headers[i++];){xmlHttp.setRequestHeader(header.name,header.value);}
xmlHttp.setRequestHeader("Content-Type",contentType);}catch(headerEx){var msg="AjaxAppender.append: your browser's XMLHttpRequest implementation"+" does not support setRequestHeader, therefore cannot post data. AjaxAppender disabled";handleError(msg);isSupported=false;if(failCallback){failCallback(msg);}
return;}
xmlHttp.send(postData);}}catch(ex){var errMsg="AjaxAppender.append: error sending log message to "+url;handleError(errMsg,ex);isSupported=false;if(failCallback){failCallback(errMsg+". Details: "+getExceptionStringRep(ex));}}}
this.append=function(loggingEvent){if(isSupported){if(!initialized){init();}
queuedLoggingEvents.push(loggingEvent);var actualBatchSize=this.getLayout().allowBatching()?batchSize:1;if(queuedLoggingEvents.length>=actualBatchSize){var currentLoggingEvent;var batchedLoggingEvents=[];while((currentLoggingEvent=queuedLoggingEvents.shift())){batchedLoggingEvents.push(currentLoggingEvent);}
queuedRequests.push(batchedLoggingEvents);if(!timed&&(!waitForResponse||(waitForResponse&&!sending))){sendAll();}}}};function init(){initialized=true;if(sendAllOnUnload){var oldBeforeUnload=window.onbeforeunload;window.onbeforeunload=function(){if(oldBeforeUnload){oldBeforeUnload();}
if(sendAllRemaining()){return"Sending log messages";}};}
if(timed){scheduleSending();}}}
AjaxAppender.prototype=new Appender();AjaxAppender.prototype.defaults={waitForResponse:false,timed:false,timerInterval:1000,batchSize:1,sendAllOnUnload:false,requestSuccessCallback:null,failCallback:null,postVarName:"data",contentType:"application/x-www-form-urlencoded"};AjaxAppender.prototype.layout=new HttpPostDataLayout();AjaxAppender.prototype.toString=function(){return"AjaxAppender";};log4javascript.AjaxAppender=AjaxAppender;function setCookie(name,value,days,path){var expires;path=path?"; path="+path:"";if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}else{expires="";}
document.cookie=escape(name)+"="+escape(value)+expires+path;}
function getCookie(name){var nameEquals=escape(name)+"=";var ca=document.cookie.split(";");for(var i=0,len=ca.length;i<len;i++){var c=ca[i];while(c.charAt(0)===" "){c=c.substring(1,c.length);}
if(c.indexOf(nameEquals)===0){return unescape(c.substring(nameEquals.length,c.length));}}
return null;}
function getBaseUrl(){var scripts=document.getElementsByTagName("script");for(var i=0,len=scripts.length;i<len;++i){if(scripts[i].src.indexOf("log4javascript")!=-1){var lastSlash=scripts[i].src.lastIndexOf("/");return(lastSlash==-1)?"":scripts[i].src.substr(0,lastSlash+1);}}
return null;}
function isLoaded(win){try{return bool(win.loaded);}catch(ex){return false;}}
var ConsoleAppender;(function(){var getConsoleHtmlLines=function(){return['<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">','<html xmlns="http://www.w3.org/1999/xhtml" lang="en" xml:lang="en">','<head>','<title>log4javascript</title>','<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />','<!-- Make IE8 behave like IE7, having gone to all the trouble of making IE work -->','<meta http-equiv="X-UA-Compatible" content="IE=7" />','<script type="text/javascript">var isIe = false, isIePre7 = false;</script>','<!--[if IE]><script type="text/javascript">isIe = true</script><![endif]-->','<!--[if lt IE 7]><script type="text/javascript">isIePre7 = true</script><![endif]-->','<script type="text/javascript">','//<![CDATA[','var loggingEnabled=true;var logQueuedEventsTimer=null;var logEntries=[];var logEntriesAndSeparators=[];var logItems=[];var renderDelay=100;var unrenderedLogItemsExist=false;var rootGroup,currentGroup=null;var loaded=false;var currentLogItem=null;var logMainContainer;function copyProperties(obj,props){for(var i in props){obj[i]=props[i];}}','function LogItem(){}','LogItem.prototype={mainContainer:null,wrappedContainer:null,unwrappedContainer:null,group:null,appendToLog:function(){for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].appendToLog();}','this.group.update();},doRemove:function(doUpdate,removeFromGroup){if(this.rendered){for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].remove();}','this.unwrappedElementContainer=null;this.wrappedElementContainer=null;this.mainElementContainer=null;}','if(this.group&&removeFromGroup){this.group.removeChild(this,doUpdate);}','if(this===currentLogItem){currentLogItem=null;}},remove:function(doUpdate,removeFromGroup){this.doRemove(doUpdate,removeFromGroup);},render:function(){},accept:function(visitor){visitor.visit(this);},getUnwrappedDomContainer:function(){return this.group.unwrappedElementContainer.contentDiv;},getWrappedDomContainer:function(){return this.group.wrappedElementContainer.contentDiv;},getMainDomContainer:function(){return this.group.mainElementContainer.contentDiv;}};LogItem.serializedItemKeys={LOG_ENTRY:0,GROUP_START:1,GROUP_END:2};function LogItemContainerElement(){}','LogItemContainerElement.prototype={appendToLog:function(){var insertBeforeFirst=(newestAtTop&&this.containerDomNode.hasChildNodes());if(insertBeforeFirst){this.containerDomNode.insertBefore(this.mainDiv,this.containerDomNode.firstChild);}else{this.containerDomNode.appendChild(this.mainDiv);}}};function SeparatorElementContainer(containerDomNode){this.containerDomNode=containerDomNode;this.mainDiv=document.createElement("div");this.mainDiv.className="separator";this.mainDiv.innerHTML="&nbsp;";}','SeparatorElementContainer.prototype=new LogItemContainerElement();SeparatorElementContainer.prototype.remove=function(){this.mainDiv.parentNode.removeChild(this.mainDiv);this.mainDiv=null;};function Separator(){this.rendered=false;}','Separator.prototype=new LogItem();copyProperties(Separator.prototype,{render:function(){var containerDomNode=this.group.contentDiv;if(isIe){this.unwrappedElementContainer=new SeparatorElementContainer(this.getUnwrappedDomContainer());this.wrappedElementContainer=new SeparatorElementContainer(this.getWrappedDomContainer());this.elementContainers=[this.unwrappedElementContainer,this.wrappedElementContainer];}else{this.mainElementContainer=new SeparatorElementContainer(this.getMainDomContainer());this.elementContainers=[this.mainElementContainer];}','this.content=this.formattedMessage;this.rendered=true;}});function GroupElementContainer(group,containerDomNode,isRoot,isWrapped){this.group=group;this.containerDomNode=containerDomNode;this.isRoot=isRoot;this.isWrapped=isWrapped;this.expandable=false;if(this.isRoot){if(isIe){this.contentDiv=logMainContainer.appendChild(document.createElement("div"));this.contentDiv.id=this.isWrapped?"log_wrapped":"log_unwrapped";}else{this.contentDiv=logMainContainer;}}else{var groupElementContainer=this;this.mainDiv=document.createElement("div");this.mainDiv.className="group";this.headingDiv=this.mainDiv.appendChild(document.createElement("div"));this.headingDiv.className="groupheading";this.expander=this.headingDiv.appendChild(document.createElement("span"));this.expander.className="expander unselectable greyedout";this.expander.unselectable=true;var expanderText=this.group.expanded?"-":"+";this.expanderTextNode=this.expander.appendChild(document.createTextNode(expanderText));this.headingDiv.appendChild(document.createTextNode(" "+this.group.name));this.contentDiv=this.mainDiv.appendChild(document.createElement("div"));var contentCssClass=this.group.expanded?"expanded":"collapsed";this.contentDiv.className="groupcontent "+contentCssClass;this.expander.onclick=function(){if(groupElementContainer.group.expandable){groupElementContainer.group.toggleExpanded();}};}}','GroupElementContainer.prototype=new LogItemContainerElement();copyProperties(GroupElementContainer.prototype,{toggleExpanded:function(){if(!this.isRoot){var oldCssClass,newCssClass,expanderText;if(this.group.expanded){newCssClass="expanded";oldCssClass="collapsed";expanderText="-";}else{newCssClass="collapsed";oldCssClass="expanded";expanderText="+";}','replaceClass(this.contentDiv,newCssClass,oldCssClass);this.expanderTextNode.nodeValue=expanderText;}},remove:function(){if(!this.isRoot){this.headingDiv=null;this.expander.onclick=null;this.expander=null;this.expanderTextNode=null;this.contentDiv=null;this.containerDomNode=null;this.mainDiv.parentNode.removeChild(this.mainDiv);this.mainDiv=null;}},reverseChildren:function(){var node=null;var childDomNodes=[];while((node=this.contentDiv.firstChild)){this.contentDiv.removeChild(node);childDomNodes.push(node);}','while((node=childDomNodes.pop())){this.contentDiv.appendChild(node);}},update:function(){if(!this.isRoot){if(this.group.expandable){removeClass(this.expander,"greyedout");}else{addClass(this.expander,"greyedout");}}},clear:function(){if(this.isRoot){this.contentDiv.innerHTML="";}}});function Group(name,isRoot,initiallyExpanded){this.name=name;this.group=null;this.isRoot=isRoot;this.initiallyExpanded=initiallyExpanded;this.elementContainers=[];this.children=[];this.expanded=initiallyExpanded;this.rendered=false;this.expandable=false;}','Group.prototype=new LogItem();copyProperties(Group.prototype,{addChild:function(logItem){this.children.push(logItem);logItem.group=this;},render:function(){if(isIe){var unwrappedDomContainer,wrappedDomContainer;if(this.isRoot){unwrappedDomContainer=logMainContainer;wrappedDomContainer=logMainContainer;}else{unwrappedDomContainer=this.getUnwrappedDomContainer();wrappedDomContainer=this.getWrappedDomContainer();}','this.unwrappedElementContainer=new GroupElementContainer(this,unwrappedDomContainer,this.isRoot,false);this.wrappedElementContainer=new GroupElementContainer(this,wrappedDomContainer,this.isRoot,true);this.elementContainers=[this.unwrappedElementContainer,this.wrappedElementContainer];}else{var mainDomContainer=this.isRoot?logMainContainer:this.getMainDomContainer();this.mainElementContainer=new GroupElementContainer(this,mainDomContainer,this.isRoot,false);this.elementContainers=[this.mainElementContainer];}','this.rendered=true;},toggleExpanded:function(){this.expanded=!this.expanded;for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].toggleExpanded();}},expand:function(){if(!this.expanded){this.toggleExpanded();}},accept:function(visitor){visitor.visitGroup(this);},reverseChildren:function(){if(this.rendered){for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].reverseChildren();}}},update:function(){var previouslyExpandable=this.expandable;this.expandable=(this.children.length!==0);if(this.expandable!==previouslyExpandable){for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].update();}}},flatten:function(){var visitor=new GroupFlattener();this.accept(visitor);return visitor.logEntriesAndSeparators;},removeChild:function(child,doUpdate){array_remove(this.children,child);child.group=null;if(doUpdate){this.update();}},remove:function(doUpdate,removeFromGroup){for(var i=0,len=this.children.length;i<len;i++){this.children[i].remove(false,false);}','this.children=[];this.update();if(this===currentGroup){currentGroup=this.group;}','this.doRemove(doUpdate,removeFromGroup);},serialize:function(items){items.push([LogItem.serializedItemKeys.GROUP_START,this.name]);for(var i=0,len=this.children.length;i<len;i++){this.children[i].serialize(items);}','if(this!==currentGroup){items.push([LogItem.serializedItemKeys.GROUP_END]);}},clear:function(){for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].clear();}}});function LogEntryElementContainer(){}','LogEntryElementContainer.prototype=new LogItemContainerElement();copyProperties(LogEntryElementContainer.prototype,{remove:function(){this.doRemove();},doRemove:function(){this.mainDiv.parentNode.removeChild(this.mainDiv);this.mainDiv=null;this.contentElement=null;this.containerDomNode=null;},setContent:function(content,wrappedContent){if(content===this.formattedMessage){this.contentElement.innerHTML="";this.contentElement.appendChild(document.createTextNode(this.formattedMessage));}else{this.contentElement.innerHTML=content;}},setSearchMatch:function(isMatch){var oldCssClass=isMatch?"searchnonmatch":"searchmatch";var newCssClass=isMatch?"searchmatch":"searchnonmatch";replaceClass(this.mainDiv,newCssClass,oldCssClass);},clearSearch:function(){removeClass(this.mainDiv,"searchmatch");removeClass(this.mainDiv,"searchnonmatch");}});function LogEntryWrappedElementContainer(logEntry,containerDomNode){this.logEntry=logEntry;this.containerDomNode=containerDomNode;this.mainDiv=document.createElement("div");this.mainDiv.appendChild(document.createTextNode(this.logEntry.formattedMessage));this.mainDiv.className="logentry wrapped "+this.logEntry.level;this.contentElement=this.mainDiv;}','LogEntryWrappedElementContainer.prototype=new LogEntryElementContainer();LogEntryWrappedElementContainer.prototype.setContent=function(content,wrappedContent){if(content===this.formattedMessage){this.contentElement.innerHTML="";this.contentElement.appendChild(document.createTextNode(this.formattedMessage));}else{this.contentElement.innerHTML=wrappedContent;}};function LogEntryUnwrappedElementContainer(logEntry,containerDomNode){this.logEntry=logEntry;this.containerDomNode=containerDomNode;this.mainDiv=document.createElement("div");this.mainDiv.className="logentry unwrapped "+this.logEntry.level;this.pre=this.mainDiv.appendChild(document.createElement("pre"));this.pre.appendChild(document.createTextNode(this.logEntry.formattedMessage));this.pre.className="unwrapped";this.contentElement=this.pre;}','LogEntryUnwrappedElementContainer.prototype=new LogEntryElementContainer();LogEntryUnwrappedElementContainer.prototype.remove=function(){this.doRemove();this.pre=null;};function LogEntryMainElementContainer(logEntry,containerDomNode){this.logEntry=logEntry;this.containerDomNode=containerDomNode;this.mainDiv=document.createElement("div");this.mainDiv.className="logentry nonielogentry "+this.logEntry.level;this.contentElement=this.mainDiv.appendChild(document.createElement("span"));this.contentElement.appendChild(document.createTextNode(this.logEntry.formattedMessage));}','LogEntryMainElementContainer.prototype=new LogEntryElementContainer();function LogEntry(level,formattedMessage){this.level=level;this.formattedMessage=formattedMessage;this.rendered=false;}','LogEntry.prototype=new LogItem();copyProperties(LogEntry.prototype,{render:function(){var logEntry=this;var containerDomNode=this.group.contentDiv;if(isIe){this.formattedMessage=this.formattedMessage.replace(/\\r\\n/g,"\\r");this.unwrappedElementContainer=new LogEntryUnwrappedElementContainer(this,this.getUnwrappedDomContainer());this.wrappedElementContainer=new LogEntryWrappedElementContainer(this,this.getWrappedDomContainer());this.elementContainers=[this.unwrappedElementContainer,this.wrappedElementContainer];}else{this.mainElementContainer=new LogEntryMainElementContainer(this,this.getMainDomContainer());this.elementContainers=[this.mainElementContainer];}','this.content=this.formattedMessage;this.rendered=true;},setContent:function(content,wrappedContent){if(content!=this.content){if(isIe&&(content!==this.formattedMessage)){content=content.replace(/\\r\\n/g,"\\r");}','for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].setContent(content,wrappedContent);}','this.content=content;}},getSearchMatches:function(){var matches=[];var i,len;if(isIe){var unwrappedEls=getElementsByClass(this.unwrappedElementContainer.mainDiv,"searchterm","span");var wrappedEls=getElementsByClass(this.wrappedElementContainer.mainDiv,"searchterm","span");for(i=0,len=unwrappedEls.length;i<len;i++){matches[i]=new Match(this.level,null,unwrappedEls[i],wrappedEls[i]);}}else{var els=getElementsByClass(this.mainElementContainer.mainDiv,"searchterm","span");for(i=0,len=els.length;i<len;i++){matches[i]=new Match(this.level,els[i]);}}','return matches;},setSearchMatch:function(isMatch){for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].setSearchMatch(isMatch);}},clearSearch:function(){for(var i=0,len=this.elementContainers.length;i<len;i++){this.elementContainers[i].clearSearch();}},accept:function(visitor){visitor.visitLogEntry(this);},serialize:function(items){items.push([LogItem.serializedItemKeys.LOG_ENTRY,this.level,this.formattedMessage]);}});function LogItemVisitor(){}','LogItemVisitor.prototype={visit:function(logItem){},visitParent:function(logItem){if(logItem.group){logItem.group.accept(this);}},visitChildren:function(logItem){for(var i=0,len=logItem.children.length;i<len;i++){logItem.children[i].accept(this);}},visitLogEntry:function(logEntry){this.visit(logEntry);},visitSeparator:function(separator){this.visit(separator);},visitGroup:function(group){this.visit(group);}};function GroupFlattener(){this.logEntriesAndSeparators=[];}','GroupFlattener.prototype=new LogItemVisitor();GroupFlattener.prototype.visitGroup=function(group){this.visitChildren(group);};GroupFlattener.prototype.visitLogEntry=function(logEntry){this.logEntriesAndSeparators.push(logEntry);};GroupFlattener.prototype.visitSeparator=function(separator){this.logEntriesAndSeparators.push(separator);};window.onload=function(){if(location.search){var queryBits=unescape(location.search).substr(1).split("&"),nameValueBits;for(var i=0,len=queryBits.length;i<len;i++){nameValueBits=queryBits[i].split("=");if(nameValueBits[0]=="log4javascript_domain"){document.domain=nameValueBits[1];break;}}}','logMainContainer=$("log");if(isIePre7){addClass(logMainContainer,"oldIe");}','rootGroup=new Group("root",true);rootGroup.render();currentGroup=rootGroup;setCommandInputWidth();setLogContainerHeight();toggleLoggingEnabled();toggleSearchEnabled();toggleSearchFilter();toggleSearchHighlight();applyFilters();checkAllLevels();toggleWrap();toggleNewestAtTop();toggleScrollToLatest();renderQueuedLogItems();loaded=true;$("command").value="";$("command").autocomplete="off";$("command").onkeydown=function(evt){evt=getEvent(evt);if(evt.keyCode==10||evt.keyCode==13){evalCommandLine();stopPropagation(evt);}else if(evt.keyCode==27){this.value="";this.focus();}else if(evt.keyCode==38&&commandHistory.length>0){currentCommandIndex=Math.max(0,currentCommandIndex-1);this.value=commandHistory[currentCommandIndex];moveCaretToEnd(this);}else if(evt.keyCode==40&&commandHistory.length>0){currentCommandIndex=Math.min(commandHistory.length-1,currentCommandIndex+1);this.value=commandHistory[currentCommandIndex];moveCaretToEnd(this);}};$("command").onkeypress=function(evt){evt=getEvent(evt);if(evt.keyCode==38&&commandHistory.length>0&&evt.preventDefault){evt.preventDefault();}};$("command").onkeyup=function(evt){evt=getEvent(evt);if(evt.keyCode==27&&evt.preventDefault){evt.preventDefault();this.focus();}};document.onkeydown=function keyEventHandler(evt){evt=getEvent(evt);switch(evt.keyCode){case 69:if(evt.shiftKey&&(evt.ctrlKey||evt.metaKey)){evalLastCommand();cancelKeyEvent(evt);return false;}','break;case 75:if(evt.shiftKey&&(evt.ctrlKey||evt.metaKey)){focusSearch();cancelKeyEvent(evt);return false;}','break;case 40:case 76:if(evt.shiftKey&&(evt.ctrlKey||evt.metaKey)){focusCommandLine();cancelKeyEvent(evt);return false;}','break;}};setTimeout(setLogContainerHeight,20);setShowCommandLine(showCommandLine);doSearch();};window.onunload=function(){if(mainWindowExists()){appender.unload();}','appender=null;};function toggleLoggingEnabled(){setLoggingEnabled($("enableLogging").checked);}','function setLoggingEnabled(enable){loggingEnabled=enable;}','var appender=null;function setAppender(appenderParam){appender=appenderParam;}','function setShowCloseButton(showCloseButton){$("closeButton").style.display=showCloseButton?"inline":"none";}','function setShowHideButton(showHideButton){$("hideButton").style.display=showHideButton?"inline":"none";}','var newestAtTop=false;function LogItemContentReverser(){}','LogItemContentReverser.prototype=new LogItemVisitor();LogItemContentReverser.prototype.visitGroup=function(group){group.reverseChildren();this.visitChildren(group);};function setNewestAtTop(isNewestAtTop){var oldNewestAtTop=newestAtTop;var i,iLen,j,jLen;newestAtTop=Boolean(isNewestAtTop);if(oldNewestAtTop!=newestAtTop){var visitor=new LogItemContentReverser();rootGroup.accept(visitor);if(currentSearch){var currentMatch=currentSearch.matches[currentMatchIndex];var matchIndex=0;var matches=[];var actOnLogEntry=function(logEntry){var logEntryMatches=logEntry.getSearchMatches();for(j=0,jLen=logEntryMatches.length;j<jLen;j++){matches[matchIndex]=logEntryMatches[j];if(currentMatch&&logEntryMatches[j].equals(currentMatch)){currentMatchIndex=matchIndex;}','matchIndex++;}};if(newestAtTop){for(i=logEntries.length-1;i>=0;i--){actOnLogEntry(logEntries[i]);}}else{for(i=0,iLen=logEntries.length;i<iLen;i++){actOnLogEntry(logEntries[i]);}}','currentSearch.matches=matches;if(currentMatch){currentMatch.setCurrent();}}else if(scrollToLatest){doScrollToLatest();}}','$("newestAtTop").checked=isNewestAtTop;}','function toggleNewestAtTop(){var isNewestAtTop=$("newestAtTop").checked;setNewestAtTop(isNewestAtTop);}','var scrollToLatest=true;function setScrollToLatest(isScrollToLatest){scrollToLatest=isScrollToLatest;if(scrollToLatest){doScrollToLatest();}','$("scrollToLatest").checked=isScrollToLatest;}','function toggleScrollToLatest(){var isScrollToLatest=$("scrollToLatest").checked;setScrollToLatest(isScrollToLatest);}','function doScrollToLatest(){var l=logMainContainer;if(typeof l.scrollTop!="undefined"){if(newestAtTop){l.scrollTop=0;}else{var latestLogEntry=l.lastChild;if(latestLogEntry){l.scrollTop=l.scrollHeight;}}}}','var closeIfOpenerCloses=true;function setCloseIfOpenerCloses(isCloseIfOpenerCloses){closeIfOpenerCloses=isCloseIfOpenerCloses;}','var maxMessages=null;function setMaxMessages(max){maxMessages=max;pruneLogEntries();}','var showCommandLine=false;function setShowCommandLine(isShowCommandLine){showCommandLine=isShowCommandLine;if(loaded){$("commandLine").style.display=showCommandLine?"block":"none";setCommandInputWidth();setLogContainerHeight();}}','function focusCommandLine(){if(loaded){$("command").focus();}}','function focusSearch(){if(loaded){$("searchBox").focus();}}','function getLogItems(){var items=[];for(var i=0,len=logItems.length;i<len;i++){logItems[i].serialize(items);}','return items;}','function setLogItems(items){var loggingReallyEnabled=loggingEnabled;loggingEnabled=true;for(var i=0,len=items.length;i<len;i++){switch(items[i][0]){case LogItem.serializedItemKeys.LOG_ENTRY:log(items[i][1],items[i][2]);break;case LogItem.serializedItemKeys.GROUP_START:group(items[i][1]);break;case LogItem.serializedItemKeys.GROUP_END:groupEnd();break;}}','loggingEnabled=loggingReallyEnabled;}','function log(logLevel,formattedMessage){if(loggingEnabled){var logEntry=new LogEntry(logLevel,formattedMessage);logEntries.push(logEntry);logEntriesAndSeparators.push(logEntry);logItems.push(logEntry);currentGroup.addChild(logEntry);if(loaded){if(logQueuedEventsTimer!==null){clearTimeout(logQueuedEventsTimer);}','logQueuedEventsTimer=setTimeout(renderQueuedLogItems,renderDelay);unrenderedLogItemsExist=true;}}}','function renderQueuedLogItems(){logQueuedEventsTimer=null;var pruned=pruneLogEntries();var initiallyHasMatches=currentSearch?currentSearch.hasMatches():false;for(var i=0,len=logItems.length;i<len;i++){if(!logItems[i].rendered){logItems[i].render();logItems[i].appendToLog();if(currentSearch&&(logItems[i]instanceof LogEntry)){currentSearch.applyTo(logItems[i]);}}}','if(currentSearch){if(pruned){if(currentSearch.hasVisibleMatches()){if(currentMatchIndex===null){setCurrentMatchIndex(0);}','displayMatches();}else{displayNoMatches();}}else if(!initiallyHasMatches&&currentSearch.hasVisibleMatches()){setCurrentMatchIndex(0);displayMatches();}}','if(scrollToLatest){doScrollToLatest();}','unrenderedLogItemsExist=false;}','function pruneLogEntries(){if((maxMessages!==null)&&(logEntriesAndSeparators.length>maxMessages)){var numberToDelete=logEntriesAndSeparators.length-maxMessages;var prunedLogEntries=logEntriesAndSeparators.slice(0,numberToDelete);if(currentSearch){currentSearch.removeMatches(prunedLogEntries);}','var group;for(var i=0;i<numberToDelete;i++){group=logEntriesAndSeparators[i].group;array_remove(logItems,logEntriesAndSeparators[i]);array_remove(logEntries,logEntriesAndSeparators[i]);logEntriesAndSeparators[i].remove(true,true);if(group.children.length===0&&group!==currentGroup&&group!==rootGroup){array_remove(logItems,group);group.remove(true,true);}}','logEntriesAndSeparators=array_removeFromStart(logEntriesAndSeparators,numberToDelete);return true;}','return false;}','function group(name,startExpanded){if(loggingEnabled){initiallyExpanded=(typeof startExpanded==="undefined")?true:Boolean(startExpanded);var newGroup=new Group(name,false,initiallyExpanded);currentGroup.addChild(newGroup);currentGroup=newGroup;logItems.push(newGroup);if(loaded){if(logQueuedEventsTimer!==null){clearTimeout(logQueuedEventsTimer);}','logQueuedEventsTimer=setTimeout(renderQueuedLogItems,renderDelay);unrenderedLogItemsExist=true;}}}','function groupEnd(){currentGroup=(currentGroup===rootGroup)?rootGroup:currentGroup.group;}','function mainPageReloaded(){currentGroup=rootGroup;var separator=new Separator();logEntriesAndSeparators.push(separator);logItems.push(separator);currentGroup.addChild(separator);}','function closeWindow(){if(appender&&mainWindowExists()){appender.close(true);}else{window.close();}}','function hide(){if(appender&&mainWindowExists()){appender.hide();}}','var mainWindow=window;var windowId="log4javascriptConsoleWindow_"+new Date().getTime()+"_"+(""+Math.random()).substr(2);function setMainWindow(win){mainWindow=win;mainWindow[windowId]=window;if(opener&&closeIfOpenerCloses){pollOpener();}}','function pollOpener(){if(closeIfOpenerCloses){if(mainWindowExists()){setTimeout(pollOpener,500);}else{closeWindow();}}}','function mainWindowExists(){try{return(mainWindow&&!mainWindow.closed&&mainWindow[windowId]==window);}catch(ex){}','return false;}','var logLevels=["TRACE","DEBUG","INFO","WARN","ERROR","FATAL"];function getCheckBox(logLevel){return $("switch_"+logLevel);}','function getIeWrappedLogContainer(){return $("log_wrapped");}','function getIeUnwrappedLogContainer(){return $("log_unwrapped");}','function applyFilters(){for(var i=0;i<logLevels.length;i++){if(getCheckBox(logLevels[i]).checked){addClass(logMainContainer,logLevels[i]);}else{removeClass(logMainContainer,logLevels[i]);}}','updateSearchFromFilters();}','function toggleAllLevels(){var turnOn=$("switch_ALL").checked;for(var i=0;i<logLevels.length;i++){getCheckBox(logLevels[i]).checked=turnOn;if(turnOn){addClass(logMainContainer,logLevels[i]);}else{removeClass(logMainContainer,logLevels[i]);}}}','function checkAllLevels(){for(var i=0;i<logLevels.length;i++){if(!getCheckBox(logLevels[i]).checked){getCheckBox("ALL").checked=false;return;}}','getCheckBox("ALL").checked=true;}','function clearLog(){rootGroup.clear();currentGroup=rootGroup;logEntries=[];logItems=[];logEntriesAndSeparators=[];doSearch();}','function toggleWrap(){var enable=$("wrap").checked;if(enable){addClass(logMainContainer,"wrap");}else{removeClass(logMainContainer,"wrap");}','refreshCurrentMatch();}','var searchTimer=null;function scheduleSearch(){try{clearTimeout(searchTimer);}catch(ex){}','searchTimer=setTimeout(doSearch,500);}','function Search(searchTerm,isRegex,searchRegex,isCaseSensitive){this.searchTerm=searchTerm;this.isRegex=isRegex;this.searchRegex=searchRegex;this.isCaseSensitive=isCaseSensitive;this.matches=[];}','Search.prototype={hasMatches:function(){return this.matches.length>0;},hasVisibleMatches:function(){if(this.hasMatches()){for(var i=0;i<this.matches.length;i++){if(this.matches[i].isVisible()){return true;}}}','return false;},match:function(logEntry){var entryText=String(logEntry.formattedMessage);var matchesSearch=false;if(this.isRegex){matchesSearch=this.searchRegex.test(entryText);}else if(this.isCaseSensitive){matchesSearch=(entryText.indexOf(this.searchTerm)>-1);}else{matchesSearch=(entryText.toLowerCase().indexOf(this.searchTerm.toLowerCase())>-1);}','return matchesSearch;},getNextVisibleMatchIndex:function(){for(var i=currentMatchIndex+1;i<this.matches.length;i++){if(this.matches[i].isVisible()){return i;}}','for(i=0;i<=currentMatchIndex;i++){if(this.matches[i].isVisible()){return i;}}','return-1;},getPreviousVisibleMatchIndex:function(){for(var i=currentMatchIndex-1;i>=0;i--){if(this.matches[i].isVisible()){return i;}}','for(var i=this.matches.length-1;i>=currentMatchIndex;i--){if(this.matches[i].isVisible()){return i;}}','return-1;},applyTo:function(logEntry){var doesMatch=this.match(logEntry);if(doesMatch){logEntry.group.expand();logEntry.setSearchMatch(true);var logEntryContent;var wrappedLogEntryContent;var searchTermReplacementStartTag="<span class=\\\"searchterm\\\">";var searchTermReplacementEndTag="<"+"/span>";var preTagName=isIe?"pre":"span";var preStartTag="<"+preTagName+" class=\\\"pre\\\">";var preEndTag="<"+"/"+preTagName+">";var startIndex=0;var searchIndex,matchedText,textBeforeMatch;if(this.isRegex){var flags=this.isCaseSensitive?"g":"gi";var capturingRegex=new RegExp("("+this.searchRegex.source+")",flags);var rnd=(""+Math.random()).substr(2);var startToken="%%s"+rnd+"%%";var endToken="%%e"+rnd+"%%";logEntryContent=logEntry.formattedMessage.replace(capturingRegex,startToken+"$1"+endToken);logEntryContent=escapeHtml(logEntryContent);var result;var searchString=logEntryContent;logEntryContent="";wrappedLogEntryContent="";while((searchIndex=searchString.indexOf(startToken,startIndex))>-1){var endTokenIndex=searchString.indexOf(endToken,searchIndex);matchedText=searchString.substring(searchIndex+startToken.length,endTokenIndex);textBeforeMatch=searchString.substring(startIndex,searchIndex);logEntryContent+=preStartTag+textBeforeMatch+preEndTag;logEntryContent+=searchTermReplacementStartTag+preStartTag+matchedText+','preEndTag+searchTermReplacementEndTag;if(isIe){wrappedLogEntryContent+=textBeforeMatch+searchTermReplacementStartTag+','matchedText+searchTermReplacementEndTag;}','startIndex=endTokenIndex+endToken.length;}','logEntryContent+=preStartTag+searchString.substr(startIndex)+preEndTag;if(isIe){wrappedLogEntryContent+=searchString.substr(startIndex);}}else{logEntryContent="";wrappedLogEntryContent="";var searchTermReplacementLength=searchTermReplacementStartTag.length+','this.searchTerm.length+searchTermReplacementEndTag.length;var searchTermLength=this.searchTerm.length;var searchTermLowerCase=this.searchTerm.toLowerCase();var logTextLowerCase=logEntry.formattedMessage.toLowerCase();while((searchIndex=logTextLowerCase.indexOf(searchTermLowerCase,startIndex))>-1){matchedText=escapeHtml(logEntry.formattedMessage.substr(searchIndex,this.searchTerm.length));textBeforeMatch=escapeHtml(logEntry.formattedMessage.substring(startIndex,searchIndex));var searchTermReplacement=searchTermReplacementStartTag+','preStartTag+matchedText+preEndTag+searchTermReplacementEndTag;logEntryContent+=preStartTag+textBeforeMatch+preEndTag+searchTermReplacement;if(isIe){wrappedLogEntryContent+=textBeforeMatch+searchTermReplacementStartTag+','matchedText+searchTermReplacementEndTag;}','startIndex=searchIndex+searchTermLength;}','var textAfterLastMatch=escapeHtml(logEntry.formattedMessage.substr(startIndex));logEntryContent+=preStartTag+textAfterLastMatch+preEndTag;if(isIe){wrappedLogEntryContent+=textAfterLastMatch;}}','logEntry.setContent(logEntryContent,wrappedLogEntryContent);var logEntryMatches=logEntry.getSearchMatches();this.matches=this.matches.concat(logEntryMatches);}else{logEntry.setSearchMatch(false);logEntry.setContent(logEntry.formattedMessage,logEntry.formattedMessage);}','return doesMatch;},removeMatches:function(logEntries){var matchesToRemoveCount=0;var currentMatchRemoved=false;var matchesToRemove=[];var i,iLen,j,jLen;for(i=0,iLen=this.matches.length;i<iLen;i++){for(j=0,jLen=logEntries.length;j<jLen;j++){if(this.matches[i].belongsTo(logEntries[j])){matchesToRemove.push(this.matches[i]);if(i===currentMatchIndex){currentMatchRemoved=true;}}}}','var newMatch=currentMatchRemoved?null:this.matches[currentMatchIndex];if(currentMatchRemoved){for(i=currentMatchIndex,iLen=this.matches.length;i<iLen;i++){if(this.matches[i].isVisible()&&!array_contains(matchesToRemove,this.matches[i])){newMatch=this.matches[i];break;}}}','for(i=0,iLen=matchesToRemove.length;i<iLen;i++){array_remove(this.matches,matchesToRemove[i]);matchesToRemove[i].remove();}','if(this.hasVisibleMatches()){if(newMatch===null){setCurrentMatchIndex(0);}else{var newMatchIndex=0;for(i=0,iLen=this.matches.length;i<iLen;i++){if(newMatch===this.matches[i]){newMatchIndex=i;break;}}','setCurrentMatchIndex(newMatchIndex);}}else{currentMatchIndex=null;displayNoMatches();}}};function getPageOffsetTop(el,container){var currentEl=el;var y=0;while(currentEl&&currentEl!=container){y+=currentEl.offsetTop;currentEl=currentEl.offsetParent;}','return y;}','function scrollIntoView(el){var logContainer=logMainContainer;if(!$("wrap").checked){var logContainerLeft=logContainer.scrollLeft;var logContainerRight=logContainerLeft+logContainer.offsetWidth;var elLeft=el.offsetLeft;var elRight=elLeft+el.offsetWidth;if(elLeft<logContainerLeft||elRight>logContainerRight){logContainer.scrollLeft=elLeft-(logContainer.offsetWidth-el.offsetWidth)/2;}}','var logContainerTop=logContainer.scrollTop;var logContainerBottom=logContainerTop+logContainer.offsetHeight;var elTop=getPageOffsetTop(el)-getToolBarsHeight();var elBottom=elTop+el.offsetHeight;if(elTop<logContainerTop||elBottom>logContainerBottom){logContainer.scrollTop=elTop-(logContainer.offsetHeight-el.offsetHeight)/2;}}','function Match(logEntryLevel,spanInMainDiv,spanInUnwrappedPre,spanInWrappedDiv){this.logEntryLevel=logEntryLevel;this.spanInMainDiv=spanInMainDiv;if(isIe){this.spanInUnwrappedPre=spanInUnwrappedPre;this.spanInWrappedDiv=spanInWrappedDiv;}','this.mainSpan=isIe?spanInUnwrappedPre:spanInMainDiv;}','Match.prototype={equals:function(match){return this.mainSpan===match.mainSpan;},setCurrent:function(){if(isIe){addClass(this.spanInUnwrappedPre,"currentmatch");addClass(this.spanInWrappedDiv,"currentmatch");var elementToScroll=$("wrap").checked?this.spanInWrappedDiv:this.spanInUnwrappedPre;scrollIntoView(elementToScroll);}else{addClass(this.spanInMainDiv,"currentmatch");scrollIntoView(this.spanInMainDiv);}},belongsTo:function(logEntry){if(isIe){return isDescendant(this.spanInUnwrappedPre,logEntry.unwrappedPre);}else{return isDescendant(this.spanInMainDiv,logEntry.mainDiv);}},setNotCurrent:function(){if(isIe){removeClass(this.spanInUnwrappedPre,"currentmatch");removeClass(this.spanInWrappedDiv,"currentmatch");}else{removeClass(this.spanInMainDiv,"currentmatch");}},isOrphan:function(){return isOrphan(this.mainSpan);},isVisible:function(){return getCheckBox(this.logEntryLevel).checked;},remove:function(){if(isIe){this.spanInUnwrappedPre=null;this.spanInWrappedDiv=null;}else{this.spanInMainDiv=null;}}};var currentSearch=null;var currentMatchIndex=null;function doSearch(){var searchBox=$("searchBox");var searchTerm=searchBox.value;var isRegex=$("searchRegex").checked;var isCaseSensitive=$("searchCaseSensitive").checked;var i;if(searchTerm===""){$("searchReset").disabled=true;$("searchNav").style.display="none";removeClass(document.body,"searching");removeClass(searchBox,"hasmatches");removeClass(searchBox,"nomatches");for(i=0;i<logEntries.length;i++){logEntries[i].clearSearch();logEntries[i].setContent(logEntries[i].formattedMessage,logEntries[i].formattedMessage);}','currentSearch=null;setLogContainerHeight();}else{$("searchReset").disabled=false;$("searchNav").style.display="block";var searchRegex;var regexValid;if(isRegex){try{searchRegex=isCaseSensitive?new RegExp(searchTerm,"g"):new RegExp(searchTerm,"gi");regexValid=true;replaceClass(searchBox,"validregex","invalidregex");searchBox.title="Valid regex";}catch(ex){regexValid=false;replaceClass(searchBox,"invalidregex","validregex");searchBox.title="Invalid regex: "+(ex.message?ex.message:(ex.description?ex.description:"unknown error"));return;}}else{searchBox.title="";removeClass(searchBox,"validregex");removeClass(searchBox,"invalidregex");}','addClass(document.body,"searching");currentSearch=new Search(searchTerm,isRegex,searchRegex,isCaseSensitive);for(i=0;i<logEntries.length;i++){currentSearch.applyTo(logEntries[i]);}','setLogContainerHeight();if(currentSearch.hasVisibleMatches()){setCurrentMatchIndex(0);displayMatches();}else{displayNoMatches();}}}','function updateSearchFromFilters(){if(currentSearch){if(currentSearch.hasMatches()){if(currentMatchIndex===null){currentMatchIndex=0;}','var currentMatch=currentSearch.matches[currentMatchIndex];if(currentMatch.isVisible()){displayMatches();setCurrentMatchIndex(currentMatchIndex);}else{currentMatch.setNotCurrent();var nextVisibleMatchIndex=currentSearch.getNextVisibleMatchIndex();if(nextVisibleMatchIndex>-1){setCurrentMatchIndex(nextVisibleMatchIndex);displayMatches();}else{displayNoMatches();}}}else{displayNoMatches();}}}','function refreshCurrentMatch(){if(currentSearch&&currentSearch.hasVisibleMatches()){setCurrentMatchIndex(currentMatchIndex);}}','function displayMatches(){replaceClass($("searchBox"),"hasmatches","nomatches");$("searchBox").title=""+currentSearch.matches.length+" matches found";$("searchNav").style.display="block";setLogContainerHeight();}','function displayNoMatches(){replaceClass($("searchBox"),"nomatches","hasmatches");$("searchBox").title="No matches found";$("searchNav").style.display="none";setLogContainerHeight();}','function toggleSearchEnabled(enable){enable=(typeof enable=="undefined")?!$("searchDisable").checked:enable;$("searchBox").disabled=!enable;$("searchReset").disabled=!enable;$("searchRegex").disabled=!enable;$("searchNext").disabled=!enable;$("searchPrevious").disabled=!enable;$("searchCaseSensitive").disabled=!enable;$("searchNav").style.display=(enable&&($("searchBox").value!=="")&&currentSearch&&currentSearch.hasVisibleMatches())?"block":"none";if(enable){removeClass($("search"),"greyedout");addClass(document.body,"searching");if($("searchHighlight").checked){addClass(logMainContainer,"searchhighlight");}else{removeClass(logMainContainer,"searchhighlight");}','if($("searchFilter").checked){addClass(logMainContainer,"searchfilter");}else{removeClass(logMainContainer,"searchfilter");}','$("searchDisable").checked=!enable;}else{addClass($("search"),"greyedout");removeClass(document.body,"searching");removeClass(logMainContainer,"searchhighlight");removeClass(logMainContainer,"searchfilter");}','setLogContainerHeight();}','function toggleSearchFilter(){var enable=$("searchFilter").checked;if(enable){addClass(logMainContainer,"searchfilter");}else{removeClass(logMainContainer,"searchfilter");}','refreshCurrentMatch();}','function toggleSearchHighlight(){var enable=$("searchHighlight").checked;if(enable){addClass(logMainContainer,"searchhighlight");}else{removeClass(logMainContainer,"searchhighlight");}}','function clearSearch(){$("searchBox").value="";doSearch();}','function searchNext(){if(currentSearch!==null&&currentMatchIndex!==null){currentSearch.matches[currentMatchIndex].setNotCurrent();var nextMatchIndex=currentSearch.getNextVisibleMatchIndex();if(nextMatchIndex>currentMatchIndex||confirm("Reached the end of the page. Start from the top?")){setCurrentMatchIndex(nextMatchIndex);}}}','function searchPrevious(){if(currentSearch!==null&&currentMatchIndex!==null){currentSearch.matches[currentMatchIndex].setNotCurrent();var previousMatchIndex=currentSearch.getPreviousVisibleMatchIndex();if(previousMatchIndex<currentMatchIndex||confirm("Reached the start of the page. Continue from the bottom?")){setCurrentMatchIndex(previousMatchIndex);}}}','function setCurrentMatchIndex(index){currentMatchIndex=index;currentSearch.matches[currentMatchIndex].setCurrent();}','function addClass(el,cssClass){if(!hasClass(el,cssClass)){if(el.className){el.className+=" "+cssClass;}else{el.className=cssClass;}}}','function hasClass(el,cssClass){if(el.className){var classNames=el.className.split(" ");return array_contains(classNames,cssClass);}','return false;}','function removeClass(el,cssClass){if(hasClass(el,cssClass)){var existingClasses=el.className.split(" ");var newClasses=[];for(var i=0,len=existingClasses.length;i<len;i++){if(existingClasses[i]!=cssClass){newClasses[newClasses.length]=existingClasses[i];}}','el.className=newClasses.join(" ");}}','function replaceClass(el,newCssClass,oldCssClass){removeClass(el,oldCssClass);addClass(el,newCssClass);}','function getElementsByClass(el,cssClass,tagName){var elements=el.getElementsByTagName(tagName);var matches=[];for(var i=0,len=elements.length;i<len;i++){if(hasClass(elements[i],cssClass)){matches.push(elements[i]);}}','return matches;}','function $(id){return document.getElementById(id);}','function isDescendant(node,ancestorNode){while(node!=null){if(node===ancestorNode){return true;}','node=node.parentNode;}','return false;}','function isOrphan(node){var currentNode=node;while(currentNode){if(currentNode==document.body){return false;}','currentNode=currentNode.parentNode;}','return true;}','function escapeHtml(str){return str.replace(/&/g,"&amp;").replace(/[<]/g,"&lt;").replace(/>/g,"&gt;");}','function getWindowWidth(){if(window.innerWidth){return window.innerWidth;}else if(document.documentElement&&document.documentElement.clientWidth){return document.documentElement.clientWidth;}else if(document.body){return document.body.clientWidth;}','return 0;}','function getWindowHeight(){if(window.innerHeight){return window.innerHeight;}else if(document.documentElement&&document.documentElement.clientHeight){return document.documentElement.clientHeight;}else if(document.body){return document.body.clientHeight;}','return 0;}','function getToolBarsHeight(){return $("switches").offsetHeight;}','function getChromeHeight(){var height=getToolBarsHeight();if(showCommandLine){height+=$("commandLine").offsetHeight;}','return height;}','function setLogContainerHeight(){if(logMainContainer){var windowHeight=getWindowHeight();$("body").style.height=getWindowHeight()+"px";logMainContainer.style.height=""+','Math.max(0,windowHeight-getChromeHeight())+"px";}}','function setCommandInputWidth(){if(showCommandLine){$("command").style.width=""+Math.max(0,$("commandLineContainer").offsetWidth-','($("evaluateButton").offsetWidth+13))+"px";}}','window.onresize=function(){setCommandInputWidth();setLogContainerHeight();};if(!Array.prototype.push){Array.prototype.push=function(){for(var i=0,len=arguments.length;i<len;i++){this[this.length]=arguments[i];}','return this.length;};}','if(!Array.prototype.pop){Array.prototype.pop=function(){if(this.length>0){var val=this[this.length-1];this.length=this.length-1;return val;}};}','if(!Array.prototype.shift){Array.prototype.shift=function(){if(this.length>0){var firstItem=this[0];for(var i=0,len=this.length-1;i<len;i++){this[i]=this[i+1];}','this.length=this.length-1;return firstItem;}};}','if(!Array.prototype.splice){Array.prototype.splice=function(startIndex,deleteCount){var itemsAfterDeleted=this.slice(startIndex+deleteCount);var itemsDeleted=this.slice(startIndex,startIndex+deleteCount);this.length=startIndex;var argumentsArray=[];for(var i=0,len=arguments.length;i<len;i++){argumentsArray[i]=arguments[i];}','var itemsToAppend=(argumentsArray.length>2)?itemsAfterDeleted=argumentsArray.slice(2).concat(itemsAfterDeleted):itemsAfterDeleted;for(i=0,len=itemsToAppend.length;i<len;i++){this.push(itemsToAppend[i]);}','return itemsDeleted;};}','function array_remove(arr,val){var index=-1;for(var i=0,len=arr.length;i<len;i++){if(arr[i]===val){index=i;break;}}','if(index>=0){arr.splice(index,1);return index;}else{return false;}}','function array_removeFromStart(array,numberToRemove){if(Array.prototype.splice){array.splice(0,numberToRemove);}else{for(var i=numberToRemove,len=array.length;i<len;i++){array[i-numberToRemove]=array[i];}','array.length=array.length-numberToRemove;}','return array;}','function array_contains(arr,val){for(var i=0,len=arr.length;i<len;i++){if(arr[i]==val){return true;}}','return false;}','function getErrorMessage(ex){if(ex.message){return ex.message;}else if(ex.description){return ex.description;}','return""+ex;}','function moveCaretToEnd(input){if(input.setSelectionRange){input.focus();var length=input.value.length;input.setSelectionRange(length,length);}else if(input.createTextRange){var range=input.createTextRange();range.collapse(false);range.select();}','input.focus();}','function stopPropagation(evt){if(evt.stopPropagation){evt.stopPropagation();}else if(typeof evt.cancelBubble!="undefined"){evt.cancelBubble=true;}}','function getEvent(evt){return evt?evt:event;}','function getTarget(evt){return evt.target?evt.target:evt.srcElement;}','function getRelatedTarget(evt){if(evt.relatedTarget){return evt.relatedTarget;}else if(evt.srcElement){switch(evt.type){case"mouseover":return evt.fromElement;case"mouseout":return evt.toElement;default:return evt.srcElement;}}}','function cancelKeyEvent(evt){evt.returnValue=false;stopPropagation(evt);}','function evalCommandLine(){var expr=$("command").value;evalCommand(expr);$("command").value="";}','function evalLastCommand(){if(lastCommand!=null){evalCommand(lastCommand);}}','var lastCommand=null;var commandHistory=[];var currentCommandIndex=0;function evalCommand(expr){if(appender){appender.evalCommandAndAppend(expr);}else{var prefix=">>> "+expr+"\\r\\n";try{log("INFO",prefix+eval(expr));}catch(ex){log("ERROR",prefix+"Error: "+getErrorMessage(ex));}}','if(expr!=commandHistory[commandHistory.length-1]){commandHistory.push(expr);if(appender){appender.storeCommandHistory(commandHistory);}}','currentCommandIndex=(expr==commandHistory[currentCommandIndex])?currentCommandIndex+1:commandHistory.length;lastCommand=expr;}','//]]>','</script>','<style type="text/css">','body{background-color:white;color:black;padding:0;margin:0;font-family:tahoma,verdana,arial,helvetica,sans-serif;overflow:hidden}div#switchesContainer input{margin-bottom:0}div.toolbar{border-top:solid #ffffff 1px;border-bottom:solid #aca899 1px;background-color:#f1efe7;padding:3px 5px;font-size:68.75%}div.toolbar,div#search input{font-family:tahoma,verdana,arial,helvetica,sans-serif}div.toolbar input.button{padding:0 5px;font-size:100%}div.toolbar input.hidden{display:none}div#switches input#clearButton{margin-left:20px}div#levels label{font-weight:bold}div#levels label,div#options label{margin-right:5px}div#levels label#wrapLabel{font-weight:normal}div#search label{margin-right:10px}div#search label.searchboxlabel{margin-right:0}div#search input{font-size:100%}div#search input.validregex{color:green}div#search input.invalidregex{color:red}div#search input.nomatches{color:white;background-color:#ff6666}div#search input.nomatches{color:white;background-color:#ff6666}div#searchNav{display:none}div#commandLine{display:none}div#commandLine input#command{font-size:100%;font-family:Courier New,Courier}div#commandLine input#evaluateButton{}*.greyedout{color:gray !important;border-color:gray !important}*.greyedout *.alwaysenabled{color:black}*.unselectable{-khtml-user-select:none;-moz-user-select:none;user-select:none}div#log{font-family:Courier New,Courier;font-size:75%;width:100%;overflow:auto;clear:both;position:relative}div.group{border-color:#cccccc;border-style:solid;border-width:1px 0 1px 1px;overflow:visible}div.oldIe div.group,div.oldIe div.group *,div.oldIe *.logentry{height:1%}div.group div.groupheading span.expander{border:solid black 1px;font-family:Courier New,Courier;font-size:0.833em;background-color:#eeeeee;position:relative;top:-1px;color:black;padding:0 2px;cursor:pointer;cursor:hand;height:1%}div.group div.groupcontent{margin-left:10px;padding-bottom:2px;overflow:visible}div.group div.expanded{display:block}div.group div.collapsed{display:none}*.logentry{overflow:visible;display:none;white-space:pre}span.pre{white-space:pre}pre.unwrapped{display:inline !important}pre.unwrapped pre.pre,div.wrapped pre.pre{display:inline}div.wrapped pre.pre{white-space:normal}div.wrapped{display:none}body.searching *.logentry span.currentmatch{color:white !important;background-color:green !important}body.searching div.searchhighlight *.logentry span.searchterm{color:black;background-color:yellow}div.wrap *.logentry{white-space:normal !important;border-width:0 0 1px 0;border-color:#dddddd;border-style:dotted}div.wrap #log_wrapped,#log_unwrapped{display:block}div.wrap #log_unwrapped,#log_wrapped{display:none}div.wrap *.logentry span.pre{overflow:visible;white-space:normal}div.wrap *.logentry pre.unwrapped{display:none}div.wrap *.logentry span.wrapped{display:inline}div.searchfilter *.searchnonmatch{display:none !important}div#log *.TRACE,label#label_TRACE{color:#666666}div#log *.DEBUG,label#label_DEBUG{color:green}div#log *.INFO,label#label_INFO{color:#000099}div#log *.WARN,label#label_WARN{color:#999900}div#log *.ERROR,label#label_ERROR{color:red}div#log *.FATAL,label#label_FATAL{color:#660066}div.TRACE#log *.TRACE,div.DEBUG#log *.DEBUG,div.INFO#log *.INFO,div.WARN#log *.WARN,div.ERROR#log *.ERROR,div.FATAL#log *.FATAL{display:block}div#log div.separator{background-color:#cccccc;margin:5px 0;line-height:1px}','</style>','</head>','<body id="body">','<div id="switchesContainer">','<div id="switches">','<div id="levels" class="toolbar">','Filters:','<input type="checkbox" id="switch_TRACE" onclick="applyFilters(); checkAllLevels()" checked="checked" title="Show/hide trace messages" /><label for="switch_TRACE" id="label_TRACE">trace</label>','<input type="checkbox" id="switch_DEBUG" onclick="applyFilters(); checkAllLevels()" checked="checked" title="Show/hide debug messages" /><label for="switch_DEBUG" id="label_DEBUG">debug</label>','<input type="checkbox" id="switch_INFO" onclick="applyFilters(); checkAllLevels()" checked="checked" title="Show/hide info messages" /><label for="switch_INFO" id="label_INFO">info</label>','<input type="checkbox" id="switch_WARN" onclick="applyFilters(); checkAllLevels()" checked="checked" title="Show/hide warn messages" /><label for="switch_WARN" id="label_WARN">warn</label>','<input type="checkbox" id="switch_ERROR" onclick="applyFilters(); checkAllLevels()" checked="checked" title="Show/hide error messages" /><label for="switch_ERROR" id="label_ERROR">error</label>','<input type="checkbox" id="switch_FATAL" onclick="applyFilters(); checkAllLevels()" checked="checked" title="Show/hide fatal messages" /><label for="switch_FATAL" id="label_FATAL">fatal</label>','<input type="checkbox" id="switch_ALL" onclick="toggleAllLevels(); applyFilters()" checked="checked" title="Show/hide all messages" /><label for="switch_ALL" id="label_ALL">all</label>','</div>','<div id="search" class="toolbar">','<label for="searchBox" class="searchboxlabel">Search:</label> <input type="text" id="searchBox" onclick="toggleSearchEnabled(true)" onkeyup="scheduleSearch()" size="20" />','<input type="button" id="searchReset" disabled="disabled" value="Reset" onclick="clearSearch()" class="button" title="Reset the search" />','<input type="checkbox" id="searchRegex" onclick="doSearch()" title="If checked, search is treated as a regular expression" /><label for="searchRegex">Regex</label>','<input type="checkbox" id="searchCaseSensitive" onclick="doSearch()" title="If checked, search is case sensitive" /><label for="searchCaseSensitive">Match case</label>','<input type="checkbox" id="searchDisable" onclick="toggleSearchEnabled()" title="Enable/disable search" /><label for="searchDisable" class="alwaysenabled">Disable</label>','<div id="searchNav">','<input type="button" id="searchNext" disabled="disabled" value="Next" onclick="searchNext()" class="button" title="Go to the next matching log entry" />','<input type="button" id="searchPrevious" disabled="disabled" value="Previous" onclick="searchPrevious()" class="button" title="Go to the previous matching log entry" />','<input type="checkbox" id="searchFilter" onclick="toggleSearchFilter()" title="If checked, non-matching log entries are filtered out" /><label for="searchFilter">Filter</label>','<input type="checkbox" id="searchHighlight" onclick="toggleSearchHighlight()" title="Highlight matched search terms" /><label for="searchHighlight" class="alwaysenabled">Highlight all</label>','</div>','</div>','<div id="options" class="toolbar">','Options:','<input type="checkbox" id="enableLogging" onclick="toggleLoggingEnabled()" checked="checked" title="Enable/disable logging" /><label for="enableLogging" id="enableLoggingLabel">Log</label>','<input type="checkbox" id="wrap" onclick="toggleWrap()" title="Enable / disable word wrap" /><label for="wrap" id="wrapLabel">Wrap</label>','<input type="checkbox" id="newestAtTop" onclick="toggleNewestAtTop()" title="If checked, causes newest messages to appear at the top" /><label for="newestAtTop" id="newestAtTopLabel">Newest at the top</label>','<input type="checkbox" id="scrollToLatest" onclick="toggleScrollToLatest()" checked="checked" title="If checked, window automatically scrolls to a new message when it is added" /><label for="scrollToLatest" id="scrollToLatestLabel">Scroll to latest</label>','<input type="button" id="clearButton" value="Clear" onclick="clearLog()" class="button" title="Clear all log messages"  />','<input type="button" id="hideButton" value="Hide" onclick="hide()" class="hidden button" title="Hide the console" />','<input type="button" id="closeButton" value="Close" onclick="closeWindow()" class="hidden button" title="Close the window" />','</div>','</div>','</div>','<div id="log" class="TRACE DEBUG INFO WARN ERROR FATAL"></div>','<div id="commandLine" class="toolbar">','<div id="commandLineContainer">','<input type="text" id="command" title="Enter a JavaScript command here and hit return or press \'Evaluate\'" />','<input type="button" id="evaluateButton" value="Evaluate" class="button" title="Evaluate the command" onclick="evalCommandLine()" />','</div>','</div>','</body>','</html>',''];};var defaultCommandLineFunctions=[];ConsoleAppender=function(){};var consoleAppenderIdCounter=1;ConsoleAppender.prototype=new Appender();ConsoleAppender.prototype.create=function(inPage,container,lazyInit,initiallyMinimized,useDocumentWrite,width,height,focusConsoleWindow){var appender=this;var initialized=false;var consoleWindowCreated=false;var consoleWindowLoaded=false;var consoleClosed=false;var queuedLoggingEvents=[];var isSupported=true;var consoleAppenderId=consoleAppenderIdCounter++;initiallyMinimized=extractBooleanFromParam(initiallyMinimized,this.defaults.initiallyMinimized);lazyInit=extractBooleanFromParam(lazyInit,this.defaults.lazyInit);useDocumentWrite=extractBooleanFromParam(useDocumentWrite,this.defaults.useDocumentWrite);var newestMessageAtTop=this.defaults.newestMessageAtTop;var scrollToLatestMessage=this.defaults.scrollToLatestMessage;width=width?width:this.defaults.width;height=height?height:this.defaults.height;var maxMessages=this.defaults.maxMessages;var showCommandLine=this.defaults.showCommandLine;var commandLineObjectExpansionDepth=this.defaults.commandLineObjectExpansionDepth;var showHideButton=this.defaults.showHideButton;var showCloseButton=this.defaults.showCloseButton;var showLogEntryDeleteButtons=this.defaults.showLogEntryDeleteButtons;this.setLayout(this.defaults.layout);var init,createWindow,safeToAppend,getConsoleWindow,open;var appenderName=inPage?"InPageAppender":"PopUpAppender";var checkCanConfigure=function(configOptionName){if(consoleWindowCreated){handleError(appenderName+": configuration option '"+configOptionName+"' may not be set after the appender has been initialized");return false;}
return true;};var consoleWindowExists=function(){return(consoleWindowLoaded&&isSupported&&!consoleClosed);};this.isNewestMessageAtTop=function(){return newestMessageAtTop;};this.setNewestMessageAtTop=function(newestMessageAtTopParam){newestMessageAtTop=bool(newestMessageAtTopParam);if(consoleWindowExists()){getConsoleWindow().setNewestAtTop(newestMessageAtTop);}};this.isScrollToLatestMessage=function(){return scrollToLatestMessage;};this.setScrollToLatestMessage=function(scrollToLatestMessageParam){scrollToLatestMessage=bool(scrollToLatestMessageParam);if(consoleWindowExists()){getConsoleWindow().setScrollToLatest(scrollToLatestMessage);}};this.getWidth=function(){return width;};this.setWidth=function(widthParam){if(checkCanConfigure("width")){width=extractStringFromParam(widthParam,width);}};this.getHeight=function(){return height;};this.setHeight=function(heightParam){if(checkCanConfigure("height")){height=extractStringFromParam(heightParam,height);}};this.getMaxMessages=function(){return maxMessages;};this.setMaxMessages=function(maxMessagesParam){maxMessages=extractIntFromParam(maxMessagesParam,maxMessages);if(consoleWindowExists()){getConsoleWindow().setMaxMessages(maxMessages);}};this.isShowCommandLine=function(){return showCommandLine;};this.setShowCommandLine=function(showCommandLineParam){showCommandLine=bool(showCommandLineParam);if(consoleWindowExists()){getConsoleWindow().setShowCommandLine(showCommandLine);}};this.isShowHideButton=function(){return showHideButton;};this.setShowHideButton=function(showHideButtonParam){showHideButton=bool(showHideButtonParam);if(consoleWindowExists()){getConsoleWindow().setShowHideButton(showHideButton);}};this.isShowCloseButton=function(){return showCloseButton;};this.setShowCloseButton=function(showCloseButtonParam){showCloseButton=bool(showCloseButtonParam);if(consoleWindowExists()){getConsoleWindow().setShowCloseButton(showCloseButton);}};this.getCommandLineObjectExpansionDepth=function(){return commandLineObjectExpansionDepth;};this.setCommandLineObjectExpansionDepth=function(commandLineObjectExpansionDepthParam){commandLineObjectExpansionDepth=extractIntFromParam(commandLineObjectExpansionDepthParam,commandLineObjectExpansionDepth);};var minimized=initiallyMinimized;this.isInitiallyMinimized=function(){return initiallyMinimized;};this.setInitiallyMinimized=function(initiallyMinimizedParam){if(checkCanConfigure("initiallyMinimized")){initiallyMinimized=bool(initiallyMinimizedParam);minimized=initiallyMinimized;}};this.isUseDocumentWrite=function(){return useDocumentWrite;};this.setUseDocumentWrite=function(useDocumentWriteParam){if(checkCanConfigure("useDocumentWrite")){useDocumentWrite=bool(useDocumentWriteParam);}};function QueuedLoggingEvent(loggingEvent,formattedMessage){this.loggingEvent=loggingEvent;this.levelName=loggingEvent.level.name;this.formattedMessage=formattedMessage;}
QueuedLoggingEvent.prototype.append=function(){getConsoleWindow().log(this.levelName,this.formattedMessage);};function QueuedGroup(name,initiallyExpanded){this.name=name;this.initiallyExpanded=initiallyExpanded;}
QueuedGroup.prototype.append=function(){getConsoleWindow().group(this.name,this.initiallyExpanded);};function QueuedGroupEnd(){}
QueuedGroupEnd.prototype.append=function(){getConsoleWindow().groupEnd();};var checkAndAppend=function(){safeToAppend();if(!initialized){init();}else if(consoleClosed&&reopenWhenClosed){createWindow();}
if(safeToAppend()){appendQueuedLoggingEvents();}};this.append=function(loggingEvent){if(isSupported){var formattedMessage=appender.getLayout().formatWithException(loggingEvent);queuedLoggingEvents.push(new QueuedLoggingEvent(loggingEvent,formattedMessage));checkAndAppend();}};this.group=function(name,initiallyExpanded){if(isSupported){queuedLoggingEvents.push(new QueuedGroup(name,initiallyExpanded));checkAndAppend();}};this.groupEnd=function(){if(isSupported){queuedLoggingEvents.push(new QueuedGroupEnd());checkAndAppend();}};var appendQueuedLoggingEvents=function(){var currentLoggingEvent;while(queuedLoggingEvents.length>0){queuedLoggingEvents.shift().append();}
if(focusConsoleWindow){getConsoleWindow().focus();}};this.setAddedToLogger=function(logger){this.loggers.push(logger);if(enabled&&!lazyInit){init();}};this.clear=function(){if(consoleWindowExists()){getConsoleWindow().clearLog();}
queuedLoggingEvents.length=0;};this.focus=function(){if(consoleWindowExists()){getConsoleWindow().focus();}};this.focusCommandLine=function(){if(consoleWindowExists()){getConsoleWindow().focusCommandLine();}};this.focusSearch=function(){if(consoleWindowExists()){getConsoleWindow().focusSearch();}};var commandWindow=window;this.getCommandWindow=function(){return commandWindow;};this.setCommandWindow=function(commandWindowParam){commandWindow=commandWindowParam;};this.executeLastCommand=function(){if(consoleWindowExists()){getConsoleWindow().evalLastCommand();}};var commandLayout=new PatternLayout("%m");this.getCommandLayout=function(){return commandLayout;};this.setCommandLayout=function(commandLayoutParam){commandLayout=commandLayoutParam;};this.evalCommandAndAppend=function(expr){var commandReturnValue={appendResult:true,isError:false};var commandOutput="";try{var result,i;if(!commandWindow.eval&&commandWindow.execScript){commandWindow.execScript("null");}
var commandLineFunctionsHash={};for(i=0,len=commandLineFunctions.length;i<len;i++){commandLineFunctionsHash[commandLineFunctions[i][0]]=commandLineFunctions[i][1];}
var objectsToRestore=[];var addObjectToRestore=function(name){objectsToRestore.push([name,commandWindow[name]]);};addObjectToRestore("appender");commandWindow.appender=appender;addObjectToRestore("commandReturnValue");commandWindow.commandReturnValue=commandReturnValue;addObjectToRestore("commandLineFunctionsHash");commandWindow.commandLineFunctionsHash=commandLineFunctionsHash;var addFunctionToWindow=function(name){addObjectToRestore(name);commandWindow[name]=function(){return this.commandLineFunctionsHash[name](appender,arguments,commandReturnValue);};};for(i=0,len=commandLineFunctions.length;i<len;i++){addFunctionToWindow(commandLineFunctions[i][0]);}
if(commandWindow===window&&commandWindow.execScript){addObjectToRestore("evalExpr");addObjectToRestore("result");window.evalExpr=expr;commandWindow.execScript("window.result=eval(window.evalExpr);");result=window.result;}else{result=commandWindow.eval(expr);}
commandOutput=isUndefined(result)?result:formatObjectExpansion(result,commandLineObjectExpansionDepth);for(i=0,len=objectsToRestore.length;i<len;i++){commandWindow[objectsToRestore[i][0]]=objectsToRestore[i][1];}}catch(ex){commandOutput="Error evaluating command: "+getExceptionStringRep(ex);commandReturnValue.isError=true;}
if(commandReturnValue.appendResult){var message=">>> "+expr;if(!isUndefined(commandOutput)){message+=newLine+commandOutput;}
var level=commandReturnValue.isError?Level.ERROR:Level.INFO;var loggingEvent=new LoggingEvent(null,new Date(),level,[message],null);var mainLayout=this.getLayout();this.setLayout(commandLayout);this.append(loggingEvent);this.setLayout(mainLayout);}};var commandLineFunctions=defaultCommandLineFunctions.concat([]);this.addCommandLineFunction=function(functionName,commandLineFunction){commandLineFunctions.push([functionName,commandLineFunction]);};var commandHistoryCookieName="log4javascriptCommandHistory";this.storeCommandHistory=function(commandHistory){setCookie(commandHistoryCookieName,commandHistory.join(","));};var writeHtml=function(doc){var lines=getConsoleHtmlLines();doc.open();for(var i=0,len=lines.length;i<len;i++){doc.writeln(lines[i]);}
doc.close();};this.setEventTypes(["load","unload"]);var consoleWindowLoadHandler=function(){var win=getConsoleWindow();win.setAppender(appender);win.setNewestAtTop(newestMessageAtTop);win.setScrollToLatest(scrollToLatestMessage);win.setMaxMessages(maxMessages);win.setShowCommandLine(showCommandLine);win.setShowHideButton(showHideButton);win.setShowCloseButton(showCloseButton);win.setMainWindow(window);var storedValue=getCookie(commandHistoryCookieName);if(storedValue){win.commandHistory=storedValue.split(",");win.currentCommandIndex=win.commandHistory.length;}
appender.dispatchEvent("load",{"win":win});};this.unload=function(){logLog.debug("unload "+this+", caller: "+this.unload.caller);if(!consoleClosed){logLog.debug("really doing unload "+this);consoleClosed=true;consoleWindowLoaded=false;consoleWindowCreated=false;appender.dispatchEvent("unload",{});}};var pollConsoleWindow=function(windowTest,interval,successCallback,errorMessage){function doPoll(){try{if(consoleClosed){clearInterval(poll);}
if(windowTest(getConsoleWindow())){clearInterval(poll);successCallback();}}catch(ex){clearInterval(poll);isSupported=false;handleError(errorMessage,ex);}}
var poll=setInterval(doPoll,interval);};var getConsoleUrl=function(){var documentDomainSet=(document.domain!=location.hostname);return useDocumentWrite?"":getBaseUrl()+"console.html"+
(documentDomainSet?"?log4javascript_domain="+escape(document.domain):"");};if(inPage){var containerElement=null;var cssProperties=[];this.addCssProperty=function(name,value){if(checkCanConfigure("cssProperties")){cssProperties.push([name,value]);}};var windowCreationStarted=false;var iframeContainerDiv;var iframeId=uniqueId+"_InPageAppender_"+consoleAppenderId;this.hide=function(){if(initialized&&consoleWindowCreated){if(consoleWindowExists()){getConsoleWindow().$("command").blur();}
iframeContainerDiv.style.display="none";minimized=true;}};this.show=function(){if(initialized){if(consoleWindowCreated){iframeContainerDiv.style.display="block";this.setShowCommandLine(showCommandLine);minimized=false;}else if(!windowCreationStarted){createWindow(true);}}};this.isVisible=function(){return!minimized&&!consoleClosed;};this.close=function(fromButton){if(!consoleClosed&&(!fromButton||confirm("This will permanently remove the console from the page. No more messages will be logged. Do you wish to continue?"))){iframeContainerDiv.parentNode.removeChild(iframeContainerDiv);this.unload();}};open=function(){var initErrorMessage="InPageAppender.open: unable to create console iframe";function finalInit(){try{if(!initiallyMinimized){appender.show();}
consoleWindowLoadHandler();consoleWindowLoaded=true;appendQueuedLoggingEvents();}catch(ex){isSupported=false;handleError(initErrorMessage,ex);}}
function writeToDocument(){try{var windowTest=function(win){return isLoaded(win);};if(useDocumentWrite){writeHtml(getConsoleWindow().document);}
if(windowTest(getConsoleWindow())){finalInit();}else{pollConsoleWindow(windowTest,100,finalInit,initErrorMessage);}}catch(ex){isSupported=false;handleError(initErrorMessage,ex);}}
minimized=false;iframeContainerDiv=containerElement.appendChild(document.createElement("div"));iframeContainerDiv.style.width=width;iframeContainerDiv.style.height=height;iframeContainerDiv.style.border="solid gray 1px";for(var i=0,len=cssProperties.length;i<len;i++){iframeContainerDiv.style[cssProperties[i][0]]=cssProperties[i][1];}
var iframeSrc=useDocumentWrite?"":" src='"+getConsoleUrl()+"'";iframeContainerDiv.innerHTML="<iframe id='"+iframeId+"' name='"+iframeId+"' width='100%' height='100%' frameborder='0'"+iframeSrc+" scrolling='no'></iframe>";consoleClosed=false;var iframeDocumentExistsTest=function(win){try{return bool(win)&&bool(win.document);}catch(ex){return false;}};if(iframeDocumentExistsTest(getConsoleWindow())){writeToDocument();}else{pollConsoleWindow(iframeDocumentExistsTest,100,writeToDocument,initErrorMessage);}
consoleWindowCreated=true;};createWindow=function(show){if(show||!initiallyMinimized){var pageLoadHandler=function(){if(!container){containerElement=document.createElement("div");containerElement.style.position="fixed";containerElement.style.left="0";containerElement.style.right="0";containerElement.style.bottom="0";document.body.appendChild(containerElement);appender.addCssProperty("borderWidth","1px 0 0 0");appender.addCssProperty("zIndex",1000000);open();}else{try{var el=document.getElementById(container);if(el.nodeType==1){containerElement=el;}
open();}catch(ex){handleError("InPageAppender.init: invalid container element '"+container+"' supplied",ex);}}};if(pageLoaded&&container&&container.appendChild){containerElement=container;open();}else if(pageLoaded){pageLoadHandler();}else{log4javascript.addEventListener("load",pageLoadHandler);}
windowCreationStarted=true;}};init=function(){createWindow();initialized=true;};getConsoleWindow=function(){var iframe=window.frames[iframeId];if(iframe){return iframe;}};safeToAppend=function(){if(isSupported&&!consoleClosed){if(consoleWindowCreated&&!consoleWindowLoaded&&getConsoleWindow()&&isLoaded(getConsoleWindow())){consoleWindowLoaded=true;}
return consoleWindowLoaded;}
return false;};}else{var useOldPopUp=appender.defaults.useOldPopUp;var complainAboutPopUpBlocking=appender.defaults.complainAboutPopUpBlocking;var reopenWhenClosed=this.defaults.reopenWhenClosed;this.isUseOldPopUp=function(){return useOldPopUp;};this.setUseOldPopUp=function(useOldPopUpParam){if(checkCanConfigure("useOldPopUp")){useOldPopUp=bool(useOldPopUpParam);}};this.isComplainAboutPopUpBlocking=function(){return complainAboutPopUpBlocking;};this.setComplainAboutPopUpBlocking=function(complainAboutPopUpBlockingParam){if(checkCanConfigure("complainAboutPopUpBlocking")){complainAboutPopUpBlocking=bool(complainAboutPopUpBlockingParam);}};this.isFocusPopUp=function(){return focusConsoleWindow;};this.setFocusPopUp=function(focusPopUpParam){focusConsoleWindow=bool(focusPopUpParam);};this.isReopenWhenClosed=function(){return reopenWhenClosed;};this.setReopenWhenClosed=function(reopenWhenClosedParam){reopenWhenClosed=bool(reopenWhenClosedParam);};this.close=function(){logLog.debug("close "+this);try{popUp.close();this.unload();}catch(ex){}};this.hide=function(){logLog.debug("hide "+this);if(consoleWindowExists()){this.close();}};this.show=function(){logLog.debug("show "+this);if(!consoleWindowCreated){open();}};this.isVisible=function(){return safeToAppend();};var popUp;open=function(){var windowProperties="width="+width+",height="+height+",status,resizable";var frameInfo="";try{var frameEl=window.frameElement;if(frameEl){frameInfo="_"+frameEl.tagName+"_"+(frameEl.name||frameEl.id||"");}}catch(e){frameInfo="_inaccessibleParentFrame";}
var windowName="PopUp_"+location.host.replace(/[^a-z0-9]/gi,"_")+"_"+consoleAppenderId+frameInfo;if(!useOldPopUp||!useDocumentWrite){windowName=windowName+"_"+uniqueId;}
var checkPopUpClosed=function(win){if(consoleClosed){return true;}else{try{return bool(win)&&win.closed;}catch(ex){}}
return false;};var popUpClosedCallback=function(){if(!consoleClosed){appender.unload();}};function finalInit(){getConsoleWindow().setCloseIfOpenerCloses(!useOldPopUp||!useDocumentWrite);consoleWindowLoadHandler();consoleWindowLoaded=true;appendQueuedLoggingEvents();pollConsoleWindow(checkPopUpClosed,500,popUpClosedCallback,"PopUpAppender.checkPopUpClosed: error checking pop-up window");}
try{popUp=window.open(getConsoleUrl(),windowName,windowProperties);consoleClosed=false;consoleWindowCreated=true;if(popUp&&popUp.document){if(useDocumentWrite&&useOldPopUp&&isLoaded(popUp)){popUp.mainPageReloaded();finalInit();}else{if(useDocumentWrite){writeHtml(popUp.document);}
var popUpLoadedTest=function(win){return bool(win)&&isLoaded(win);};if(isLoaded(popUp)){finalInit();}else{pollConsoleWindow(popUpLoadedTest,100,finalInit,"PopUpAppender.init: unable to create console window");}}}else{isSupported=false;logLog.warn("PopUpAppender.init: pop-ups blocked, please unblock to use PopUpAppender");if(complainAboutPopUpBlocking){handleError("log4javascript: pop-up windows appear to be blocked. Please unblock them to use pop-up logging.");}}}catch(ex){handleError("PopUpAppender.init: error creating pop-up",ex);}};createWindow=function(){if(!initiallyMinimized){open();}};init=function(){createWindow();initialized=true;};getConsoleWindow=function(){return popUp;};safeToAppend=function(){if(isSupported&&!isUndefined(popUp)&&!consoleClosed){if(popUp.closed||(consoleWindowLoaded&&isUndefined(popUp.closed))){appender.unload();logLog.debug("PopUpAppender: pop-up closed");return false;}
if(!consoleWindowLoaded&&isLoaded(popUp)){consoleWindowLoaded=true;}}
return isSupported&&consoleWindowLoaded&&!consoleClosed;};}
this.getConsoleWindow=getConsoleWindow;};ConsoleAppender.addGlobalCommandLineFunction=function(functionName,commandLineFunction){defaultCommandLineFunctions.push([functionName,commandLineFunction]);};function PopUpAppender(lazyInit,initiallyMinimized,useDocumentWrite,width,height){this.create(false,null,lazyInit,initiallyMinimized,useDocumentWrite,width,height,this.defaults.focusPopUp);}
PopUpAppender.prototype=new ConsoleAppender();PopUpAppender.prototype.defaults={layout:new PatternLayout("%d{HH:mm:ss} %-5p - %m{1}%n"),initiallyMinimized:false,focusPopUp:false,lazyInit:true,useOldPopUp:true,complainAboutPopUpBlocking:true,newestMessageAtTop:false,scrollToLatestMessage:true,width:"600",height:"400",reopenWhenClosed:false,maxMessages:null,showCommandLine:true,commandLineObjectExpansionDepth:1,showHideButton:false,showCloseButton:true,showLogEntryDeleteButtons:true,useDocumentWrite:true};PopUpAppender.prototype.toString=function(){return"PopUpAppender";};log4javascript.PopUpAppender=PopUpAppender;function InPageAppender(container,lazyInit,initiallyMinimized,useDocumentWrite,width,height){this.create(true,container,lazyInit,initiallyMinimized,useDocumentWrite,width,height,false);}
InPageAppender.prototype=new ConsoleAppender();InPageAppender.prototype.defaults={layout:new PatternLayout("%d{HH:mm:ss} %-5p - %m{1}%n"),initiallyMinimized:false,lazyInit:true,newestMessageAtTop:false,scrollToLatestMessage:true,width:"100%",height:"220px",maxMessages:null,showCommandLine:true,commandLineObjectExpansionDepth:1,showHideButton:false,showCloseButton:false,showLogEntryDeleteButtons:true,useDocumentWrite:true};InPageAppender.prototype.toString=function(){return"InPageAppender";};log4javascript.InPageAppender=InPageAppender;log4javascript.InlineAppender=InPageAppender;})();function padWithSpaces(str,len){if(str.length<len){var spaces=[];var numberOfSpaces=Math.max(0,len-str.length);for(var i=0;i<numberOfSpaces;i++){spaces[i]=" ";}
str+=spaces.join("");}
return str;}
(function(){function dir(obj){var maxLen=0;for(var p in obj){maxLen=Math.max(toStr(p).length,maxLen);}
var propList=[];for(p in obj){var propNameStr="  "+padWithSpaces(toStr(p),maxLen+2);var propVal;try{propVal=splitIntoLines(toStr(obj[p])).join(padWithSpaces(newLine,maxLen+6));}catch(ex){propVal="[Error obtaining property. Details: "+getExceptionMessage(ex)+"]";}
propList.push(propNameStr+propVal);}
return propList.join(newLine);}
var nodeTypes={ELEMENT_NODE:1,ATTRIBUTE_NODE:2,TEXT_NODE:3,CDATA_SECTION_NODE:4,ENTITY_REFERENCE_NODE:5,ENTITY_NODE:6,PROCESSING_INSTRUCTION_NODE:7,COMMENT_NODE:8,DOCUMENT_NODE:9,DOCUMENT_TYPE_NODE:10,DOCUMENT_FRAGMENT_NODE:11,NOTATION_NODE:12};var preFormattedElements=["script","pre"];var emptyElements=["br","img","hr","param","link","area","input","col","base","meta"];var indentationUnit="  ";function getXhtml(rootNode,includeRootNode,indentation,startNewLine,preformatted){includeRootNode=(typeof includeRootNode=="undefined")?true:!!includeRootNode;if(typeof indentation!="string"){indentation="";}
startNewLine=!!startNewLine;preformatted=!!preformatted;var xhtml;function isWhitespace(node){return((node.nodeType==nodeTypes.TEXT_NODE)&&/^[ \t\r\n]*$/.test(node.nodeValue));}
function fixAttributeValue(attrValue){return attrValue.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/"/g,"&quot;");}
function getStyleAttributeValue(el){var stylePairs=el.style.cssText.split(";");var styleValue="";var isFirst=true;for(var j=0,len=stylePairs.length;j<len;j++){var nameValueBits=stylePairs[j].split(":");var props=[];if(!/^\s*$/.test(nameValueBits[0])){props.push(trim(nameValueBits[0]).toLowerCase()+":"+trim(nameValueBits[1]));}
styleValue=props.join(";");}
return styleValue;}
function getNamespace(el){if(el.prefix){return el.prefix;}else if(el.outerHTML){var regex=new RegExp("<([^:]+):"+el.tagName+"[^>]*>","i");if(regex.test(el.outerHTML)){return RegExp.$1.toLowerCase();}}
return"";}
var lt="<";var gt=">";if(includeRootNode&&rootNode.nodeType!=nodeTypes.DOCUMENT_FRAGMENT_NODE){switch(rootNode.nodeType){case nodeTypes.ELEMENT_NODE:var tagName=rootNode.tagName.toLowerCase();xhtml=startNewLine?newLine+indentation:"";xhtml+=lt;var prefix=getNamespace(rootNode);var hasPrefix=!!prefix;if(hasPrefix){xhtml+=prefix+":";}
xhtml+=tagName;for(i=0,len=rootNode.attributes.length;i<len;i++){var currentAttr=rootNode.attributes[i];if(!currentAttr.specified||currentAttr.nodeValue===null||currentAttr.nodeName.toLowerCase()==="style"||typeof currentAttr.nodeValue!=="string"||currentAttr.nodeName.indexOf("_moz")===0){continue;}
xhtml+=" "+currentAttr.nodeName.toLowerCase()+"=\"";xhtml+=fixAttributeValue(currentAttr.nodeValue);xhtml+="\"";}
if(rootNode.style.cssText){var styleValue=getStyleAttributeValue(rootNode);if(styleValue!==""){xhtml+=" style=\""+getStyleAttributeValue(rootNode)+"\"";}}
if(array_contains(emptyElements,tagName)||(hasPrefix&&!rootNode.hasChildNodes())){xhtml+="/"+gt;}else{xhtml+=gt;var childStartNewLine=!(rootNode.childNodes.length===1&&rootNode.childNodes[0].nodeType===nodeTypes.TEXT_NODE);var childPreformatted=array_contains(preFormattedElements,tagName);for(var i=0,len=rootNode.childNodes.length;i<len;i++){xhtml+=getXhtml(rootNode.childNodes[i],true,indentation+indentationUnit,childStartNewLine,childPreformatted);}
var endTag=lt+"/"+tagName+gt;xhtml+=childStartNewLine?newLine+indentation+endTag:endTag;}
return xhtml;case nodeTypes.TEXT_NODE:if(isWhitespace(rootNode)){xhtml="";}else{if(preformatted){xhtml=rootNode.nodeValue;}else{var lines=splitIntoLines(trim(rootNode.nodeValue));var trimmedLines=[];for(var i=0,len=lines.length;i<len;i++){trimmedLines[i]=trim(lines[i]);}
xhtml=trimmedLines.join(newLine+indentation);}
if(startNewLine){xhtml=newLine+indentation+xhtml;}}
return xhtml;case nodeTypes.CDATA_SECTION_NODE:return"<![CDA"+"TA["+rootNode.nodeValue+"]"+"]>"+newLine;case nodeTypes.DOCUMENT_NODE:xhtml="";for(var i=0,len=rootNode.childNodes.length;i<len;i++){xhtml+=getXhtml(rootNode.childNodes[i],true,indentation);}
return xhtml;default:return"";}}else{xhtml="";for(var i=0,len=rootNode.childNodes.length;i<len;i++){xhtml+=getXhtml(rootNode.childNodes[i],true,indentation+indentationUnit);}
return xhtml;}}
function createCommandLineFunctions(){ConsoleAppender.addGlobalCommandLineFunction("$",function(appender,args,returnValue){return document.getElementById(args[0]);});ConsoleAppender.addGlobalCommandLineFunction("dir",function(appender,args,returnValue){var lines=[];for(var i=0,len=args.length;i<len;i++){lines[i]=dir(args[i]);}
return lines.join(newLine+newLine);});ConsoleAppender.addGlobalCommandLineFunction("dirxml",function(appender,args,returnValue){var lines=[];for(var i=0,len=args.length;i<len;i++){var win=appender.getCommandWindow();lines[i]=getXhtml(args[i]);}
return lines.join(newLine+newLine);});ConsoleAppender.addGlobalCommandLineFunction("cd",function(appender,args,returnValue){var win,message;if(args.length===0||args[0]===""){win=window;message="Command line set to run in main window";}else{if(args[0].window==args[0]){win=args[0];message="Command line set to run in frame '"+args[0].name+"'";}else{win=window.frames[args[0]];if(win){message="Command line set to run in frame '"+args[0]+"'";}else{returnValue.isError=true;message="Frame '"+args[0]+"' does not exist";win=appender.getCommandWindow();}}}
appender.setCommandWindow(win);return message;});ConsoleAppender.addGlobalCommandLineFunction("clear",function(appender,args,returnValue){returnValue.appendResult=false;appender.clear();});ConsoleAppender.addGlobalCommandLineFunction("keys",function(appender,args,returnValue){var keys=[];for(var k in args[0]){keys.push(k);}
return keys;});ConsoleAppender.addGlobalCommandLineFunction("values",function(appender,args,returnValue){var values=[];for(var k in args[0]){try{values.push(args[0][k]);}catch(ex){logLog.warn("values(): Unable to obtain value for key "+k+". Details: "+getExceptionMessage(ex));}}
return values;});ConsoleAppender.addGlobalCommandLineFunction("expansionDepth",function(appender,args,returnValue){var expansionDepth=parseInt(args[0],10);if(isNaN(expansionDepth)||expansionDepth<0){returnValue.isError=true;return""+args[0]+" is not a valid expansion depth";}else{appender.setCommandLineObjectExpansionDepth(expansionDepth);return"Object expansion depth set to "+expansionDepth;}});}
function init(){createCommandLineFunctions();}
init();})();log4javascript.setDocumentReady=function(){pageLoaded=true;log4javascript.dispatchEvent("load",{});};if(window.addEventListener){window.addEventListener("load",log4javascript.setDocumentReady,false);}else if(window.attachEvent){window.attachEvent("onload",log4javascript.setDocumentReady);}else{var oldOnload=window.onload;if(typeof window.onload!="function"){window.onload=log4javascript.setDocumentReady;}else{window.onload=function(evt){if(oldOnload){oldOnload(evt);}
log4javascript.setDocumentReady();};}}
window.log4javascript=log4javascript;return log4javascript;})();

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
/**
 * CryptoJS core components.
 */
var CryptoJS = CryptoJS || (function (Math, undefined) {
    /**
     * CryptoJS namespace.
     */
    var C = {};

    /**
     * Library namespace.
     */
    var C_lib = C.lib = {};

    /**
     * Base object for prototypal inheritance.
     */
    var Base = C_lib.Base = (function () {
        function F() {}

        return {
            /**
             * Creates a new object that inherits from this object.
             *
             * @param {Object} overrides Properties to copy into the new object.
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         field: 'value',
             *
             *         method: function () {
             *         }
             *     });
             */
            extend: function (overrides) {
                // Spawn
                F.prototype = this;
                var subtype = new F();

                // Augment
                if (overrides) {
                    subtype.mixIn(overrides);
                }

                // Create default initializer
                if (!subtype.hasOwnProperty('init')) {
                    subtype.init = function () {
                        subtype.$super.init.apply(this, arguments);
                    };
                }

                // Initializer's prototype is the subtype object
                subtype.init.prototype = subtype;

                // Reference supertype
                subtype.$super = this;

                return subtype;
            },

            /**
             * Extends this object and runs the init method.
             * Arguments to create() will be passed to init().
             *
             * @return {Object} The new object.
             *
             * @static
             *
             * @example
             *
             *     var instance = MyType.create();
             */
            create: function () {
                var instance = this.extend();
                instance.init.apply(instance, arguments);

                return instance;
            },

            /**
             * Initializes a newly created object.
             * Override this method to add some logic when your objects are created.
             *
             * @example
             *
             *     var MyType = CryptoJS.lib.Base.extend({
             *         init: function () {
             *             // ...
             *         }
             *     });
             */
            init: function () {
            },

            /**
             * Copies properties into this object.
             *
             * @param {Object} properties The properties to mix in.
             *
             * @example
             *
             *     MyType.mixIn({
             *         field: 'value'
             *     });
             */
            mixIn: function (properties) {
                for (var propertyName in properties) {
                    if (properties.hasOwnProperty(propertyName)) {
                        this[propertyName] = properties[propertyName];
                    }
                }

                // IE won't copy toString using the loop above
                if (properties.hasOwnProperty('toString')) {
                    this.toString = properties.toString;
                }
            },

            /**
             * Creates a copy of this object.
             *
             * @return {Object} The clone.
             *
             * @example
             *
             *     var clone = instance.clone();
             */
            clone: function () {
                return this.init.prototype.extend(this);
            }
        };
    }());

    /**
     * An array of 32-bit words.
     *
     * @property {Array} words The array of 32-bit words.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var WordArray = C_lib.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of 32-bit words.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.create();
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607]);
         *     var wordArray = CryptoJS.lib.WordArray.create([0x00010203, 0x04050607], 6);
         */
        init: function (words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
            } else {
                this.sigBytes = words.length * 4;
            }
        },

        /**
         * Converts this word array to a string.
         *
         * @param {Encoder} encoder (Optional) The encoding strategy to use. Default: CryptoJS.enc.Hex
         *
         * @return {string} The stringified word array.
         *
         * @example
         *
         *     var string = wordArray + '';
         *     var string = wordArray.toString();
         *     var string = wordArray.toString(CryptoJS.enc.Utf8);
         */
        toString: function (encoder) {
            return (encoder || Hex).stringify(this);
        },

        /**
         * Concatenates a word array to this word array.
         *
         * @param {WordArray} wordArray The word array to append.
         *
         * @return {WordArray} This word array.
         *
         * @example
         *
         *     wordArray1.concat(wordArray2);
         */
        concat: function (wordArray) {
            // Shortcuts
            var thisWords = this.words;
            var thatWords = wordArray.words;
            var thisSigBytes = this.sigBytes;
            var thatSigBytes = wordArray.sigBytes;

            // Clamp excess bits
            this.clamp();

            // Concat
            if (thisSigBytes % 4) {
                // Copy one byte at a time
                for (var i = 0; i < thatSigBytes; i++) {
                    var thatByte = (thatWords[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                    thisWords[(thisSigBytes + i) >>> 2] |= thatByte << (24 - ((thisSigBytes + i) % 4) * 8);
                }
            } else if (thatWords.length > 0xffff) {
                // Copy one word at a time
                for (var i = 0; i < thatSigBytes; i += 4) {
                    thisWords[(thisSigBytes + i) >>> 2] = thatWords[i >>> 2];
                }
            } else {
                // Copy all words at once
                thisWords.push.apply(thisWords, thatWords);
            }
            this.sigBytes += thatSigBytes;

            // Chainable
            return this;
        },

        /**
         * Removes insignificant bits.
         *
         * @example
         *
         *     wordArray.clamp();
         */
        clamp: function () {
            // Shortcuts
            var words = this.words;
            var sigBytes = this.sigBytes;

            // Clamp
            words[sigBytes >>> 2] &= 0xffffffff << (32 - (sigBytes % 4) * 8);
            words.length = Math.ceil(sigBytes / 4);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {WordArray} The clone.
         *
         * @example
         *
         *     var clone = wordArray.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone.words = this.words.slice(0);

            return clone;
        },

        /**
         * Creates a word array filled with random bytes.
         *
         * @param {number} nBytes The number of random bytes to generate.
         *
         * @return {WordArray} The random word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.lib.WordArray.random(16);
         */
        random: function (nBytes) {
            var words = [];
            for (var i = 0; i < nBytes; i += 4) {
                words.push((Math.random() * 0x100000000) | 0);
            }

            return new WordArray.init(words, nBytes);
        }
    });

    /**
     * Encoder namespace.
     */
    var C_enc = C.enc = {};

    /**
     * Hex encoding strategy.
     */
    var Hex = C_enc.Hex = {
        /**
         * Converts a word array to a hex string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The hex string.
         *
         * @static
         *
         * @example
         *
         *     var hexString = CryptoJS.enc.Hex.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var hexChars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                hexChars.push((bite >>> 4).toString(16));
                hexChars.push((bite & 0x0f).toString(16));
            }

            return hexChars.join('');
        },

        /**
         * Converts a hex string to a word array.
         *
         * @param {string} hexStr The hex string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Hex.parse(hexString);
         */
        parse: function (hexStr) {
            // Shortcut
            var hexStrLength = hexStr.length;

            // Convert
            var words = [];
            for (var i = 0; i < hexStrLength; i += 2) {
                words[i >>> 3] |= parseInt(hexStr.substr(i, 2), 16) << (24 - (i % 8) * 4);
            }

            return new WordArray.init(words, hexStrLength / 2);
        }
    };

    /**
     * Latin1 encoding strategy.
     */
    var Latin1 = C_enc.Latin1 = {
        /**
         * Converts a word array to a Latin1 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Latin1 string.
         *
         * @static
         *
         * @example
         *
         *     var latin1String = CryptoJS.enc.Latin1.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;

            // Convert
            var latin1Chars = [];
            for (var i = 0; i < sigBytes; i++) {
                var bite = (words[i >>> 2] >>> (24 - (i % 4) * 8)) & 0xff;
                latin1Chars.push(String.fromCharCode(bite));
            }

            return latin1Chars.join('');
        },

        /**
         * Converts a Latin1 string to a word array.
         *
         * @param {string} latin1Str The Latin1 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Latin1.parse(latin1String);
         */
        parse: function (latin1Str) {
            // Shortcut
            var latin1StrLength = latin1Str.length;

            // Convert
            var words = [];
            for (var i = 0; i < latin1StrLength; i++) {
                words[i >>> 2] |= (latin1Str.charCodeAt(i) & 0xff) << (24 - (i % 4) * 8);
            }

            return new WordArray.init(words, latin1StrLength);
        }
    };

    /**
     * UTF-8 encoding strategy.
     */
    var Utf8 = C_enc.Utf8 = {
        /**
         * Converts a word array to a UTF-8 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The UTF-8 string.
         *
         * @static
         *
         * @example
         *
         *     var utf8String = CryptoJS.enc.Utf8.stringify(wordArray);
         */
        stringify: function (wordArray) {
            try {
                return decodeURIComponent(escape(Latin1.stringify(wordArray)));
            } catch (e) {
                throw new Error('Malformed UTF-8 data');
            }
        },

        /**
         * Converts a UTF-8 string to a word array.
         *
         * @param {string} utf8Str The UTF-8 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Utf8.parse(utf8String);
         */
        parse: function (utf8Str) {
            return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
        }
    };

    /**
     * Abstract buffered block algorithm template.
     *
     * The property blockSize must be implemented in a concrete subtype.
     *
     * @property {number} _minBufferSize The number of blocks that should be kept unprocessed in the buffer. Default: 0
     */
    var BufferedBlockAlgorithm = C_lib.BufferedBlockAlgorithm = Base.extend({
        /**
         * Resets this block algorithm's data buffer to its initial state.
         *
         * @example
         *
         *     bufferedBlockAlgorithm.reset();
         */
        reset: function () {
            // Initial values
            this._data = new WordArray.init();
            this._nDataBytes = 0;
        },

        /**
         * Adds new data to this block algorithm's buffer.
         *
         * @param {WordArray|string} data The data to append. Strings are converted to a WordArray using UTF-8.
         *
         * @example
         *
         *     bufferedBlockAlgorithm._append('data');
         *     bufferedBlockAlgorithm._append(wordArray);
         */
        _append: function (data) {
            // Convert string to WordArray, else assume WordArray already
            if (typeof data == 'string') {
                data = Utf8.parse(data);
            }

            // Append
            this._data.concat(data);
            this._nDataBytes += data.sigBytes;
        },

        /**
         * Processes available data blocks.
         *
         * This method invokes _doProcessBlock(offset), which must be implemented by a concrete subtype.
         *
         * @param {boolean} doFlush Whether all blocks and partial blocks should be processed.
         *
         * @return {WordArray} The processed data.
         *
         * @example
         *
         *     var processedData = bufferedBlockAlgorithm._process();
         *     var processedData = bufferedBlockAlgorithm._process(!!'flush');
         */
        _process: function (doFlush) {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;
            var dataSigBytes = data.sigBytes;
            var blockSize = this.blockSize;
            var blockSizeBytes = blockSize * 4;

            // Count blocks ready
            var nBlocksReady = dataSigBytes / blockSizeBytes;
            if (doFlush) {
                // Round up to include partial blocks
                nBlocksReady = Math.ceil(nBlocksReady);
            } else {
                // Round down to include only full blocks,
                // less the number of blocks that must remain in the buffer
                nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
            }

            // Count words ready
            var nWordsReady = nBlocksReady * blockSize;

            // Count bytes ready
            var nBytesReady = Math.min(nWordsReady * 4, dataSigBytes);

            // Process blocks
            if (nWordsReady) {
                for (var offset = 0; offset < nWordsReady; offset += blockSize) {
                    // Perform concrete-algorithm logic
                    this._doProcessBlock(dataWords, offset);
                }

                // Remove processed words
                var processedWords = dataWords.splice(0, nWordsReady);
                data.sigBytes -= nBytesReady;
            }

            // Return processed words
            return new WordArray.init(processedWords, nBytesReady);
        },

        /**
         * Creates a copy of this object.
         *
         * @return {Object} The clone.
         *
         * @example
         *
         *     var clone = bufferedBlockAlgorithm.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);
            clone._data = this._data.clone();

            return clone;
        },

        _minBufferSize: 0
    });

    /**
     * Abstract hasher template.
     *
     * @property {number} blockSize The number of 32-bit words this hasher operates on. Default: 16 (512 bits)
     */
    var Hasher = C_lib.Hasher = BufferedBlockAlgorithm.extend({
        /**
         * Configuration options.
         */
        cfg: Base.extend(),

        /**
         * Initializes a newly created hasher.
         *
         * @param {Object} cfg (Optional) The configuration options to use for this hash computation.
         *
         * @example
         *
         *     var hasher = CryptoJS.algo.SHA256.create();
         */
        init: function (cfg) {
            // Apply config defaults
            this.cfg = this.cfg.extend(cfg);

            // Set initial values
            this.reset();
        },

        /**
         * Resets this hasher to its initial state.
         *
         * @example
         *
         *     hasher.reset();
         */
        reset: function () {
            // Reset data buffer
            BufferedBlockAlgorithm.reset.call(this);

            // Perform concrete-hasher logic
            this._doReset();
        },

        /**
         * Updates this hasher with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {Hasher} This hasher.
         *
         * @example
         *
         *     hasher.update('message');
         *     hasher.update(wordArray);
         */
        update: function (messageUpdate) {
            // Append
            this._append(messageUpdate);

            // Update the hash
            this._process();

            // Chainable
            return this;
        },

        /**
         * Finalizes the hash computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The hash.
         *
         * @example
         *
         *     var hash = hasher.finalize();
         *     var hash = hasher.finalize('message');
         *     var hash = hasher.finalize(wordArray);
         */
        finalize: function (messageUpdate) {
            // Final message update
            if (messageUpdate) {
                this._append(messageUpdate);
            }

            // Perform concrete-hasher logic
            var hash = this._doFinalize();

            return hash;
        },

        blockSize: 512/32,

        /**
         * Creates a shortcut function to a hasher's object interface.
         *
         * @param {Hasher} hasher The hasher to create a helper for.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var SHA256 = CryptoJS.lib.Hasher._createHelper(CryptoJS.algo.SHA256);
         */
        _createHelper: function (hasher) {
            return function (message, cfg) {
                return new hasher.init(cfg).finalize(message);
            };
        },

        /**
         * Creates a shortcut function to the HMAC's object interface.
         *
         * @param {Hasher} hasher The hasher to use in this HMAC helper.
         *
         * @return {Function} The shortcut function.
         *
         * @static
         *
         * @example
         *
         *     var HmacSHA256 = CryptoJS.lib.Hasher._createHmacHelper(CryptoJS.algo.SHA256);
         */
        _createHmacHelper: function (hasher) {
            return function (message, key) {
                return new C_algo.HMAC.init(hasher, key).finalize(message);
            };
        }
    });

    /**
     * Algorithm namespace.
     */
    var C_algo = C.algo = {};

    return C;
}(Math));

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var C_enc = C.enc;

    /**
     * Base64 encoding strategy.
     */
    var Base64 = C_enc.Base64 = {
        /**
         * Converts a word array to a Base64 string.
         *
         * @param {WordArray} wordArray The word array.
         *
         * @return {string} The Base64 string.
         *
         * @static
         *
         * @example
         *
         *     var base64String = CryptoJS.enc.Base64.stringify(wordArray);
         */
        stringify: function (wordArray) {
            // Shortcuts
            var words = wordArray.words;
            var sigBytes = wordArray.sigBytes;
            var map = this._map;

            // Clamp excess bits
            wordArray.clamp();

            // Convert
            var base64Chars = [];
            for (var i = 0; i < sigBytes; i += 3) {
                var byte1 = (words[i >>> 2]       >>> (24 - (i % 4) * 8))       & 0xff;
                var byte2 = (words[(i + 1) >>> 2] >>> (24 - ((i + 1) % 4) * 8)) & 0xff;
                var byte3 = (words[(i + 2) >>> 2] >>> (24 - ((i + 2) % 4) * 8)) & 0xff;

                var triplet = (byte1 << 16) | (byte2 << 8) | byte3;

                for (var j = 0; (j < 4) && (i + j * 0.75 < sigBytes); j++) {
                    base64Chars.push(map.charAt((triplet >>> (6 * (3 - j))) & 0x3f));
                }
            }

            // Add padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                while (base64Chars.length % 4) {
                    base64Chars.push(paddingChar);
                }
            }

            return base64Chars.join('');
        },

        /**
         * Converts a Base64 string to a word array.
         *
         * @param {string} base64Str The Base64 string.
         *
         * @return {WordArray} The word array.
         *
         * @static
         *
         * @example
         *
         *     var wordArray = CryptoJS.enc.Base64.parse(base64String);
         */
        parse: function (base64Str) {
            // Shortcuts
            var base64StrLength = base64Str.length;
            var map = this._map;

            // Ignore padding
            var paddingChar = map.charAt(64);
            if (paddingChar) {
                var paddingIndex = base64Str.indexOf(paddingChar);
                if (paddingIndex != -1) {
                    base64StrLength = paddingIndex;
                }
            }

            // Convert
            var words = [];
            var nBytes = 0;
            for (var i = 0; i < base64StrLength; i++) {
                if (i % 4) {
                    var bits1 = map.indexOf(base64Str.charAt(i - 1)) << ((i % 4) * 2);
                    var bits2 = map.indexOf(base64Str.charAt(i)) >>> (6 - (i % 4) * 2);
                    words[nBytes >>> 2] |= (bits1 | bits2) << (24 - (nBytes % 4) * 8);
                    nBytes++;
                }
            }

            return WordArray.create(words, nBytes);
        },

        _map: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
    };
}());

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var C_enc = C.enc;
    var Utf8 = C_enc.Utf8;
    var C_algo = C.algo;

    /**
     * HMAC algorithm.
     */
    var HMAC = C_algo.HMAC = Base.extend({
        /**
         * Initializes a newly created HMAC.
         *
         * @param {Hasher} hasher The hash algorithm to use.
         * @param {WordArray|string} key The secret key.
         *
         * @example
         *
         *     var hmacHasher = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, key);
         */
        init: function (hasher, key) {
            // Init hasher
            hasher = this._hasher = new hasher.init();

            // Convert string to WordArray, else assume WordArray already
            if (typeof key == 'string') {
                key = Utf8.parse(key);
            }

            // Shortcuts
            var hasherBlockSize = hasher.blockSize;
            var hasherBlockSizeBytes = hasherBlockSize * 4;

            // Allow arbitrary length keys
            if (key.sigBytes > hasherBlockSizeBytes) {
                key = hasher.finalize(key);
            }

            // Clamp excess bits
            key.clamp();

            // Clone key for inner and outer pads
            var oKey = this._oKey = key.clone();
            var iKey = this._iKey = key.clone();

            // Shortcuts
            var oKeyWords = oKey.words;
            var iKeyWords = iKey.words;

            // XOR keys with pad constants
            for (var i = 0; i < hasherBlockSize; i++) {
                oKeyWords[i] ^= 0x5c5c5c5c;
                iKeyWords[i] ^= 0x36363636;
            }
            oKey.sigBytes = iKey.sigBytes = hasherBlockSizeBytes;

            // Set initial values
            this.reset();
        },

        /**
         * Resets this HMAC to its initial state.
         *
         * @example
         *
         *     hmacHasher.reset();
         */
        reset: function () {
            // Shortcut
            var hasher = this._hasher;

            // Reset
            hasher.reset();
            hasher.update(this._iKey);
        },

        /**
         * Updates this HMAC with a message.
         *
         * @param {WordArray|string} messageUpdate The message to append.
         *
         * @return {HMAC} This HMAC instance.
         *
         * @example
         *
         *     hmacHasher.update('message');
         *     hmacHasher.update(wordArray);
         */
        update: function (messageUpdate) {
            this._hasher.update(messageUpdate);

            // Chainable
            return this;
        },

        /**
         * Finalizes the HMAC computation.
         * Note that the finalize operation is effectively a destructive, read-once operation.
         *
         * @param {WordArray|string} messageUpdate (Optional) A final message update.
         *
         * @return {WordArray} The HMAC.
         *
         * @example
         *
         *     var hmac = hmacHasher.finalize();
         *     var hmac = hmacHasher.finalize('message');
         *     var hmac = hmacHasher.finalize(wordArray);
         */
        finalize: function (messageUpdate) {
            // Shortcut
            var hasher = this._hasher;

            // Compute HMAC
            var innerHash = hasher.finalize(messageUpdate);
            hasher.reset();
            var hmac = hasher.finalize(this._oKey.clone().concat(innerHash));

            return hmac;
        }
    });
}());

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (undefined) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Base = C_lib.Base;
    var X32WordArray = C_lib.WordArray;

    /**
     * x64 namespace.
     */
    var C_x64 = C.x64 = {};

    /**
     * A 64-bit word.
     */
    var X64Word = C_x64.Word = Base.extend({
        /**
         * Initializes a newly created 64-bit word.
         *
         * @param {number} high The high 32 bits.
         * @param {number} low The low 32 bits.
         *
         * @example
         *
         *     var x64Word = CryptoJS.x64.Word.create(0x00010203, 0x04050607);
         */
        init: function (high, low) {
            this.high = high;
            this.low = low;
        }

        /**
         * Bitwise NOTs this word.
         *
         * @return {X64Word} A new x64-Word object after negating.
         *
         * @example
         *
         *     var negated = x64Word.not();
         */
        // not: function () {
            // var high = ~this.high;
            // var low = ~this.low;

            // return X64Word.create(high, low);
        // },

        /**
         * Bitwise ANDs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to AND with this word.
         *
         * @return {X64Word} A new x64-Word object after ANDing.
         *
         * @example
         *
         *     var anded = x64Word.and(anotherX64Word);
         */
        // and: function (word) {
            // var high = this.high & word.high;
            // var low = this.low & word.low;

            // return X64Word.create(high, low);
        // },

        /**
         * Bitwise ORs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to OR with this word.
         *
         * @return {X64Word} A new x64-Word object after ORing.
         *
         * @example
         *
         *     var ored = x64Word.or(anotherX64Word);
         */
        // or: function (word) {
            // var high = this.high | word.high;
            // var low = this.low | word.low;

            // return X64Word.create(high, low);
        // },

        /**
         * Bitwise XORs this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to XOR with this word.
         *
         * @return {X64Word} A new x64-Word object after XORing.
         *
         * @example
         *
         *     var xored = x64Word.xor(anotherX64Word);
         */
        // xor: function (word) {
            // var high = this.high ^ word.high;
            // var low = this.low ^ word.low;

            // return X64Word.create(high, low);
        // },

        /**
         * Shifts this word n bits to the left.
         *
         * @param {number} n The number of bits to shift.
         *
         * @return {X64Word} A new x64-Word object after shifting.
         *
         * @example
         *
         *     var shifted = x64Word.shiftL(25);
         */
        // shiftL: function (n) {
            // if (n < 32) {
                // var high = (this.high << n) | (this.low >>> (32 - n));
                // var low = this.low << n;
            // } else {
                // var high = this.low << (n - 32);
                // var low = 0;
            // }

            // return X64Word.create(high, low);
        // },

        /**
         * Shifts this word n bits to the right.
         *
         * @param {number} n The number of bits to shift.
         *
         * @return {X64Word} A new x64-Word object after shifting.
         *
         * @example
         *
         *     var shifted = x64Word.shiftR(7);
         */
        // shiftR: function (n) {
            // if (n < 32) {
                // var low = (this.low >>> n) | (this.high << (32 - n));
                // var high = this.high >>> n;
            // } else {
                // var low = this.high >>> (n - 32);
                // var high = 0;
            // }

            // return X64Word.create(high, low);
        // },

        /**
         * Rotates this word n bits to the left.
         *
         * @param {number} n The number of bits to rotate.
         *
         * @return {X64Word} A new x64-Word object after rotating.
         *
         * @example
         *
         *     var rotated = x64Word.rotL(25);
         */
        // rotL: function (n) {
            // return this.shiftL(n).or(this.shiftR(64 - n));
        // },

        /**
         * Rotates this word n bits to the right.
         *
         * @param {number} n The number of bits to rotate.
         *
         * @return {X64Word} A new x64-Word object after rotating.
         *
         * @example
         *
         *     var rotated = x64Word.rotR(7);
         */
        // rotR: function (n) {
            // return this.shiftR(n).or(this.shiftL(64 - n));
        // },

        /**
         * Adds this word with the passed word.
         *
         * @param {X64Word} word The x64-Word to add with this word.
         *
         * @return {X64Word} A new x64-Word object after adding.
         *
         * @example
         *
         *     var added = x64Word.add(anotherX64Word);
         */
        // add: function (word) {
            // var low = (this.low + word.low) | 0;
            // var carry = (low >>> 0) < (this.low >>> 0) ? 1 : 0;
            // var high = (this.high + word.high + carry) | 0;

            // return X64Word.create(high, low);
        // }
    });

    /**
     * An array of 64-bit words.
     *
     * @property {Array} words The array of CryptoJS.x64.Word objects.
     * @property {number} sigBytes The number of significant bytes in this word array.
     */
    var X64WordArray = C_x64.WordArray = Base.extend({
        /**
         * Initializes a newly created word array.
         *
         * @param {Array} words (Optional) An array of CryptoJS.x64.Word objects.
         * @param {number} sigBytes (Optional) The number of significant bytes in the words.
         *
         * @example
         *
         *     var wordArray = CryptoJS.x64.WordArray.create();
         *
         *     var wordArray = CryptoJS.x64.WordArray.create([
         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
         *     ]);
         *
         *     var wordArray = CryptoJS.x64.WordArray.create([
         *         CryptoJS.x64.Word.create(0x00010203, 0x04050607),
         *         CryptoJS.x64.Word.create(0x18191a1b, 0x1c1d1e1f)
         *     ], 10);
         */
        init: function (words, sigBytes) {
            words = this.words = words || [];

            if (sigBytes != undefined) {
                this.sigBytes = sigBytes;
            } else {
                this.sigBytes = words.length * 8;
            }
        },

        /**
         * Converts this 64-bit word array to a 32-bit word array.
         *
         * @return {CryptoJS.lib.WordArray} This word array's data as a 32-bit word array.
         *
         * @example
         *
         *     var x32WordArray = x64WordArray.toX32();
         */
        toX32: function () {
            // Shortcuts
            var x64Words = this.words;
            var x64WordsLength = x64Words.length;

            // Convert
            var x32Words = [];
            for (var i = 0; i < x64WordsLength; i++) {
                var x64Word = x64Words[i];
                x32Words.push(x64Word.high);
                x32Words.push(x64Word.low);
            }

            return X32WordArray.create(x32Words, this.sigBytes);
        },

        /**
         * Creates a copy of this word array.
         *
         * @return {X64WordArray} The clone.
         *
         * @example
         *
         *     var clone = x64WordArray.clone();
         */
        clone: function () {
            var clone = Base.clone.call(this);

            // Clone "words" array
            var words = clone.words = this.words.slice(0);

            // Clone each X64Word object
            var wordsLength = words.length;
            for (var i = 0; i < wordsLength; i++) {
                words[i] = words[i].clone();
            }

            return clone;
        }
    });
}());

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function (Math) {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var WordArray = C_lib.WordArray;
    var Hasher = C_lib.Hasher;
    var C_algo = C.algo;

    // Initialization and round constants tables
    var H = [];
    var K = [];

    // Compute constants
    (function () {
        function isPrime(n) {
            var sqrtN = Math.sqrt(n);
            for (var factor = 2; factor <= sqrtN; factor++) {
                if (!(n % factor)) {
                    return false;
                }
            }

            return true;
        }

        function getFractionalBits(n) {
            return ((n - (n | 0)) * 0x100000000) | 0;
        }

        var n = 2;
        var nPrime = 0;
        while (nPrime < 64) {
            if (isPrime(n)) {
                if (nPrime < 8) {
                    H[nPrime] = getFractionalBits(Math.pow(n, 1 / 2));
                }
                K[nPrime] = getFractionalBits(Math.pow(n, 1 / 3));

                nPrime++;
            }

            n++;
        }
    }());

    // Reusable object
    var W = [];

    /**
     * SHA-256 hash algorithm.
     */
    var SHA256 = C_algo.SHA256 = Hasher.extend({
        _doReset: function () {
            this._hash = new WordArray.init(H.slice(0));
        },

        _doProcessBlock: function (M, offset) {
            // Shortcut
            var H = this._hash.words;

            // Working variables
            var a = H[0];
            var b = H[1];
            var c = H[2];
            var d = H[3];
            var e = H[4];
            var f = H[5];
            var g = H[6];
            var h = H[7];

            // Computation
            for (var i = 0; i < 64; i++) {
                if (i < 16) {
                    W[i] = M[offset + i] | 0;
                } else {
                    var gamma0x = W[i - 15];
                    var gamma0  = ((gamma0x << 25) | (gamma0x >>> 7))  ^
                                  ((gamma0x << 14) | (gamma0x >>> 18)) ^
                                   (gamma0x >>> 3);

                    var gamma1x = W[i - 2];
                    var gamma1  = ((gamma1x << 15) | (gamma1x >>> 17)) ^
                                  ((gamma1x << 13) | (gamma1x >>> 19)) ^
                                   (gamma1x >>> 10);

                    W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16];
                }

                var ch  = (e & f) ^ (~e & g);
                var maj = (a & b) ^ (a & c) ^ (b & c);

                var sigma0 = ((a << 30) | (a >>> 2)) ^ ((a << 19) | (a >>> 13)) ^ ((a << 10) | (a >>> 22));
                var sigma1 = ((e << 26) | (e >>> 6)) ^ ((e << 21) | (e >>> 11)) ^ ((e << 7)  | (e >>> 25));

                var t1 = h + sigma1 + ch + K[i] + W[i];
                var t2 = sigma0 + maj;

                h = g;
                g = f;
                f = e;
                e = (d + t1) | 0;
                d = c;
                c = b;
                b = a;
                a = (t1 + t2) | 0;
            }

            // Intermediate hash value
            H[0] = (H[0] + a) | 0;
            H[1] = (H[1] + b) | 0;
            H[2] = (H[2] + c) | 0;
            H[3] = (H[3] + d) | 0;
            H[4] = (H[4] + e) | 0;
            H[5] = (H[5] + f) | 0;
            H[6] = (H[6] + g) | 0;
            H[7] = (H[7] + h) | 0;
        },

        _doFinalize: function () {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 14] = Math.floor(nBitsTotal / 0x100000000);
            dataWords[(((nBitsLeft + 64) >>> 9) << 4) + 15] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;

            // Hash final blocks
            this._process();

            // Return final computed hash
            return this._hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        }
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA256('message');
     *     var hash = CryptoJS.SHA256(wordArray);
     */
    C.SHA256 = Hasher._createHelper(SHA256);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA256(message, key);
     */
    C.HmacSHA256 = Hasher._createHmacHelper(SHA256);
}(Math));

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
(function () {
    // Shortcuts
    var C = CryptoJS;
    var C_lib = C.lib;
    var Hasher = C_lib.Hasher;
    var C_x64 = C.x64;
    var X64Word = C_x64.Word;
    var X64WordArray = C_x64.WordArray;
    var C_algo = C.algo;

    function X64Word_create() {
        return X64Word.create.apply(X64Word, arguments);
    }

    // Constants
    var K = [
        X64Word_create(0x428a2f98, 0xd728ae22), X64Word_create(0x71374491, 0x23ef65cd),
        X64Word_create(0xb5c0fbcf, 0xec4d3b2f), X64Word_create(0xe9b5dba5, 0x8189dbbc),
        X64Word_create(0x3956c25b, 0xf348b538), X64Word_create(0x59f111f1, 0xb605d019),
        X64Word_create(0x923f82a4, 0xaf194f9b), X64Word_create(0xab1c5ed5, 0xda6d8118),
        X64Word_create(0xd807aa98, 0xa3030242), X64Word_create(0x12835b01, 0x45706fbe),
        X64Word_create(0x243185be, 0x4ee4b28c), X64Word_create(0x550c7dc3, 0xd5ffb4e2),
        X64Word_create(0x72be5d74, 0xf27b896f), X64Word_create(0x80deb1fe, 0x3b1696b1),
        X64Word_create(0x9bdc06a7, 0x25c71235), X64Word_create(0xc19bf174, 0xcf692694),
        X64Word_create(0xe49b69c1, 0x9ef14ad2), X64Word_create(0xefbe4786, 0x384f25e3),
        X64Word_create(0x0fc19dc6, 0x8b8cd5b5), X64Word_create(0x240ca1cc, 0x77ac9c65),
        X64Word_create(0x2de92c6f, 0x592b0275), X64Word_create(0x4a7484aa, 0x6ea6e483),
        X64Word_create(0x5cb0a9dc, 0xbd41fbd4), X64Word_create(0x76f988da, 0x831153b5),
        X64Word_create(0x983e5152, 0xee66dfab), X64Word_create(0xa831c66d, 0x2db43210),
        X64Word_create(0xb00327c8, 0x98fb213f), X64Word_create(0xbf597fc7, 0xbeef0ee4),
        X64Word_create(0xc6e00bf3, 0x3da88fc2), X64Word_create(0xd5a79147, 0x930aa725),
        X64Word_create(0x06ca6351, 0xe003826f), X64Word_create(0x14292967, 0x0a0e6e70),
        X64Word_create(0x27b70a85, 0x46d22ffc), X64Word_create(0x2e1b2138, 0x5c26c926),
        X64Word_create(0x4d2c6dfc, 0x5ac42aed), X64Word_create(0x53380d13, 0x9d95b3df),
        X64Word_create(0x650a7354, 0x8baf63de), X64Word_create(0x766a0abb, 0x3c77b2a8),
        X64Word_create(0x81c2c92e, 0x47edaee6), X64Word_create(0x92722c85, 0x1482353b),
        X64Word_create(0xa2bfe8a1, 0x4cf10364), X64Word_create(0xa81a664b, 0xbc423001),
        X64Word_create(0xc24b8b70, 0xd0f89791), X64Word_create(0xc76c51a3, 0x0654be30),
        X64Word_create(0xd192e819, 0xd6ef5218), X64Word_create(0xd6990624, 0x5565a910),
        X64Word_create(0xf40e3585, 0x5771202a), X64Word_create(0x106aa070, 0x32bbd1b8),
        X64Word_create(0x19a4c116, 0xb8d2d0c8), X64Word_create(0x1e376c08, 0x5141ab53),
        X64Word_create(0x2748774c, 0xdf8eeb99), X64Word_create(0x34b0bcb5, 0xe19b48a8),
        X64Word_create(0x391c0cb3, 0xc5c95a63), X64Word_create(0x4ed8aa4a, 0xe3418acb),
        X64Word_create(0x5b9cca4f, 0x7763e373), X64Word_create(0x682e6ff3, 0xd6b2b8a3),
        X64Word_create(0x748f82ee, 0x5defb2fc), X64Word_create(0x78a5636f, 0x43172f60),
        X64Word_create(0x84c87814, 0xa1f0ab72), X64Word_create(0x8cc70208, 0x1a6439ec),
        X64Word_create(0x90befffa, 0x23631e28), X64Word_create(0xa4506ceb, 0xde82bde9),
        X64Word_create(0xbef9a3f7, 0xb2c67915), X64Word_create(0xc67178f2, 0xe372532b),
        X64Word_create(0xca273ece, 0xea26619c), X64Word_create(0xd186b8c7, 0x21c0c207),
        X64Word_create(0xeada7dd6, 0xcde0eb1e), X64Word_create(0xf57d4f7f, 0xee6ed178),
        X64Word_create(0x06f067aa, 0x72176fba), X64Word_create(0x0a637dc5, 0xa2c898a6),
        X64Word_create(0x113f9804, 0xbef90dae), X64Word_create(0x1b710b35, 0x131c471b),
        X64Word_create(0x28db77f5, 0x23047d84), X64Word_create(0x32caab7b, 0x40c72493),
        X64Word_create(0x3c9ebe0a, 0x15c9bebc), X64Word_create(0x431d67c4, 0x9c100d4c),
        X64Word_create(0x4cc5d4be, 0xcb3e42b6), X64Word_create(0x597f299c, 0xfc657e2a),
        X64Word_create(0x5fcb6fab, 0x3ad6faec), X64Word_create(0x6c44198c, 0x4a475817)
    ];

    // Reusable objects
    var W = [];
    (function () {
        for (var i = 0; i < 80; i++) {
            W[i] = X64Word_create();
        }
    }());

    /**
     * SHA-512 hash algorithm.
     */
    var SHA512 = C_algo.SHA512 = Hasher.extend({
        _doReset: function () {
            this._hash = new X64WordArray.init([
                new X64Word.init(0x6a09e667, 0xf3bcc908), new X64Word.init(0xbb67ae85, 0x84caa73b),
                new X64Word.init(0x3c6ef372, 0xfe94f82b), new X64Word.init(0xa54ff53a, 0x5f1d36f1),
                new X64Word.init(0x510e527f, 0xade682d1), new X64Word.init(0x9b05688c, 0x2b3e6c1f),
                new X64Word.init(0x1f83d9ab, 0xfb41bd6b), new X64Word.init(0x5be0cd19, 0x137e2179)
            ]);
        },

        _doProcessBlock: function (M, offset) {
            // Shortcuts
            var H = this._hash.words;

            var H0 = H[0];
            var H1 = H[1];
            var H2 = H[2];
            var H3 = H[3];
            var H4 = H[4];
            var H5 = H[5];
            var H6 = H[6];
            var H7 = H[7];

            var H0h = H0.high;
            var H0l = H0.low;
            var H1h = H1.high;
            var H1l = H1.low;
            var H2h = H2.high;
            var H2l = H2.low;
            var H3h = H3.high;
            var H3l = H3.low;
            var H4h = H4.high;
            var H4l = H4.low;
            var H5h = H5.high;
            var H5l = H5.low;
            var H6h = H6.high;
            var H6l = H6.low;
            var H7h = H7.high;
            var H7l = H7.low;

            // Working variables
            var ah = H0h;
            var al = H0l;
            var bh = H1h;
            var bl = H1l;
            var ch = H2h;
            var cl = H2l;
            var dh = H3h;
            var dl = H3l;
            var eh = H4h;
            var el = H4l;
            var fh = H5h;
            var fl = H5l;
            var gh = H6h;
            var gl = H6l;
            var hh = H7h;
            var hl = H7l;

            // Rounds
            for (var i = 0; i < 80; i++) {
                // Shortcut
                var Wi = W[i];

                // Extend message
                if (i < 16) {
                    var Wih = Wi.high = M[offset + i * 2]     | 0;
                    var Wil = Wi.low  = M[offset + i * 2 + 1] | 0;
                } else {
                    // Gamma0
                    var gamma0x  = W[i - 15];
                    var gamma0xh = gamma0x.high;
                    var gamma0xl = gamma0x.low;
                    var gamma0h  = ((gamma0xh >>> 1) | (gamma0xl << 31)) ^ ((gamma0xh >>> 8) | (gamma0xl << 24)) ^ (gamma0xh >>> 7);
                    var gamma0l  = ((gamma0xl >>> 1) | (gamma0xh << 31)) ^ ((gamma0xl >>> 8) | (gamma0xh << 24)) ^ ((gamma0xl >>> 7) | (gamma0xh << 25));

                    // Gamma1
                    var gamma1x  = W[i - 2];
                    var gamma1xh = gamma1x.high;
                    var gamma1xl = gamma1x.low;
                    var gamma1h  = ((gamma1xh >>> 19) | (gamma1xl << 13)) ^ ((gamma1xh << 3) | (gamma1xl >>> 29)) ^ (gamma1xh >>> 6);
                    var gamma1l  = ((gamma1xl >>> 19) | (gamma1xh << 13)) ^ ((gamma1xl << 3) | (gamma1xh >>> 29)) ^ ((gamma1xl >>> 6) | (gamma1xh << 26));

                    // W[i] = gamma0 + W[i - 7] + gamma1 + W[i - 16]
                    var Wi7  = W[i - 7];
                    var Wi7h = Wi7.high;
                    var Wi7l = Wi7.low;

                    var Wi16  = W[i - 16];
                    var Wi16h = Wi16.high;
                    var Wi16l = Wi16.low;

                    var Wil = gamma0l + Wi7l;
                    var Wih = gamma0h + Wi7h + ((Wil >>> 0) < (gamma0l >>> 0) ? 1 : 0);
                    var Wil = Wil + gamma1l;
                    var Wih = Wih + gamma1h + ((Wil >>> 0) < (gamma1l >>> 0) ? 1 : 0);
                    var Wil = Wil + Wi16l;
                    var Wih = Wih + Wi16h + ((Wil >>> 0) < (Wi16l >>> 0) ? 1 : 0);

                    Wi.high = Wih;
                    Wi.low  = Wil;
                }

                var chh  = (eh & fh) ^ (~eh & gh);
                var chl  = (el & fl) ^ (~el & gl);
                var majh = (ah & bh) ^ (ah & ch) ^ (bh & ch);
                var majl = (al & bl) ^ (al & cl) ^ (bl & cl);

                var sigma0h = ((ah >>> 28) | (al << 4))  ^ ((ah << 30)  | (al >>> 2)) ^ ((ah << 25) | (al >>> 7));
                var sigma0l = ((al >>> 28) | (ah << 4))  ^ ((al << 30)  | (ah >>> 2)) ^ ((al << 25) | (ah >>> 7));
                var sigma1h = ((eh >>> 14) | (el << 18)) ^ ((eh >>> 18) | (el << 14)) ^ ((eh << 23) | (el >>> 9));
                var sigma1l = ((el >>> 14) | (eh << 18)) ^ ((el >>> 18) | (eh << 14)) ^ ((el << 23) | (eh >>> 9));

                // t1 = h + sigma1 + ch + K[i] + W[i]
                var Ki  = K[i];
                var Kih = Ki.high;
                var Kil = Ki.low;

                var t1l = hl + sigma1l;
                var t1h = hh + sigma1h + ((t1l >>> 0) < (hl >>> 0) ? 1 : 0);
                var t1l = t1l + chl;
                var t1h = t1h + chh + ((t1l >>> 0) < (chl >>> 0) ? 1 : 0);
                var t1l = t1l + Kil;
                var t1h = t1h + Kih + ((t1l >>> 0) < (Kil >>> 0) ? 1 : 0);
                var t1l = t1l + Wil;
                var t1h = t1h + Wih + ((t1l >>> 0) < (Wil >>> 0) ? 1 : 0);

                // t2 = sigma0 + maj
                var t2l = sigma0l + majl;
                var t2h = sigma0h + majh + ((t2l >>> 0) < (sigma0l >>> 0) ? 1 : 0);

                // Update working variables
                hh = gh;
                hl = gl;
                gh = fh;
                gl = fl;
                fh = eh;
                fl = el;
                el = (dl + t1l) | 0;
                eh = (dh + t1h + ((el >>> 0) < (dl >>> 0) ? 1 : 0)) | 0;
                dh = ch;
                dl = cl;
                ch = bh;
                cl = bl;
                bh = ah;
                bl = al;
                al = (t1l + t2l) | 0;
                ah = (t1h + t2h + ((al >>> 0) < (t1l >>> 0) ? 1 : 0)) | 0;
            }

            // Intermediate hash value
            H0l = H0.low  = (H0l + al);
            H0.high = (H0h + ah + ((H0l >>> 0) < (al >>> 0) ? 1 : 0));
            H1l = H1.low  = (H1l + bl);
            H1.high = (H1h + bh + ((H1l >>> 0) < (bl >>> 0) ? 1 : 0));
            H2l = H2.low  = (H2l + cl);
            H2.high = (H2h + ch + ((H2l >>> 0) < (cl >>> 0) ? 1 : 0));
            H3l = H3.low  = (H3l + dl);
            H3.high = (H3h + dh + ((H3l >>> 0) < (dl >>> 0) ? 1 : 0));
            H4l = H4.low  = (H4l + el);
            H4.high = (H4h + eh + ((H4l >>> 0) < (el >>> 0) ? 1 : 0));
            H5l = H5.low  = (H5l + fl);
            H5.high = (H5h + fh + ((H5l >>> 0) < (fl >>> 0) ? 1 : 0));
            H6l = H6.low  = (H6l + gl);
            H6.high = (H6h + gh + ((H6l >>> 0) < (gl >>> 0) ? 1 : 0));
            H7l = H7.low  = (H7l + hl);
            H7.high = (H7h + hh + ((H7l >>> 0) < (hl >>> 0) ? 1 : 0));
        },

        _doFinalize: function () {
            // Shortcuts
            var data = this._data;
            var dataWords = data.words;

            var nBitsTotal = this._nDataBytes * 8;
            var nBitsLeft = data.sigBytes * 8;

            // Add padding
            dataWords[nBitsLeft >>> 5] |= 0x80 << (24 - nBitsLeft % 32);
            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 30] = Math.floor(nBitsTotal / 0x100000000);
            dataWords[(((nBitsLeft + 128) >>> 10) << 5) + 31] = nBitsTotal;
            data.sigBytes = dataWords.length * 4;

            // Hash final blocks
            this._process();

            // Convert hash to 32-bit word array before returning
            var hash = this._hash.toX32();

            // Return final computed hash
            return hash;
        },

        clone: function () {
            var clone = Hasher.clone.call(this);
            clone._hash = this._hash.clone();

            return clone;
        },

        blockSize: 1024/32
    });

    /**
     * Shortcut function to the hasher's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     *
     * @return {WordArray} The hash.
     *
     * @static
     *
     * @example
     *
     *     var hash = CryptoJS.SHA512('message');
     *     var hash = CryptoJS.SHA512(wordArray);
     */
    C.SHA512 = Hasher._createHelper(SHA512);

    /**
     * Shortcut function to the HMAC's object interface.
     *
     * @param {WordArray|string} message The message to hash.
     * @param {WordArray|string} key The secret key.
     *
     * @return {WordArray} The HMAC.
     *
     * @static
     *
     * @example
     *
     *     var hmac = CryptoJS.HmacSHA512(message, key);
     */
    C.HmacSHA512 = Hasher._createHmacHelper(SHA512);
}());

"use strict";var constantsModule=function(){var a={};return a.JS_MESSAGES={IS_EXTENSION_IDLE:"is-extension-idle",DISABLE_CONTENT_SCRIPT:"disable-content-script",CHECK_CONTENT_SCRIPT:"check-content-script",START_RECORDING:"start-recording",PAUSE_RECORDING:"pause-recording",RESUME_RECORDING:"resume-recording",STOP_RECORDING:"stop-recording",FETCH_THUMBNAIL_URL:"fetch-thumbnail-url",DELETE_VIDEO:"delete-video",DISSOCIATE_TAB:"dissociate-tab",SHARE_MODAL_CLOSED:"share-modal-closed",UPDATE_RECORDING_STATUS:"update-recording-status",RECORDING_STATUS:"recording-status",ENCODE_COMPLETE:"encode-complete",UPDATE_CLIENT_PROP:"update-client-prop",ASSOCIATED_TAB_READY:"associated-tab-ready",SAVE_LOCAL:"save-local",RETRY_UPLOAD:"retry-upload",SET_USER_ACCOUNT:"set-user-account",GET_SESSION_USER_DETAILS:"get-sesion-user-details",REMOVE_USER_ACCOUNT:"remove-user-account",FETCH_USER_ID_TOKEN:"fetch-user-id-token",FETCH_USER_DATA:"fetch-user-data",FETCH_ALLOWED_FEATURES:"fetch-allowed-features",IS_USER_LOGGED_IN:"is-user-logged-in",LOGOUT:"logout",UPDATE_USER_STATUS:"update-user-status",SET_SERVER_TIME_DIFFERENCE:"set-server-time-difference",ADD_JIRA_ADDON_SUBSCRIPTION:"add-jira-addon-subscription",FAB_DRAG_START:"fab-drag-start",FAB_DRAG_STOP:"fab-drag-stop",FAB_OPEN:"fab-open",FAB_CLOSE:"fab-close",FAB_LAYOUT_UPDATE:"fab-layout-update",FAB_SIZE_UPDATE:"fab-size-update",FETCH_NOTIFICATIONS:"fetch-notifications",SHOW_NOTIFICATION:"show-notification",REMOVE_NOTIFICATION:"remove-notification",NOTIFICATION_ACTION:"notification-action",FETCH_SETTINGS:"fetch-settings",SAVE_SETTINGS:"save-settings",SAVE_PREFERENCES:"save-preferences",BROADCAST_TO_TAB:"broadcast-to-tab",GET_CURRENT_TAB_ID:"get-current-tab-id",OPEN_URL:"open-url",OPEN_APP_URL:"open-app-url",SEND_GA_EVENT:"send-ga-event",SEND_GA_PAGE_VIEW:"send-ga-page-view",LOG_MESSAGE:"log-message",SEND_MIXPANEL_EVENT:"send-mixpanel-event",FETCH_MAIL_SHARE_VIDEO_DETAIL:"fetch-video-detail-event",FETCH_VIDEO_DETAIL:"fetch-video-detail",OPEN_SHARE_MODAL:"open-share-modal"},a.NACL_MESSAGES={START_RECORDING:"start-recording",STOP_RECORDING:"stop-recording",DISCARD_RECORDING:"discard-recording",ENCODE_DONE:"encode-done"},a.RECORDING_TYPES={DESKTOP:"desktop",TAB:"tab",FACECAM:"facecam"},a.RECORDING_TYPES_DEFAULT=a.RECORDING_TYPES.TAB,a.RECORDING_STATES={NEW:"NEW",STARTING:"STARTING",READY:"READY",RUNNING_COUNTDOWN:"RUNNING_COUNTDOWN",ACTIVE:"ACTIVE",PAUSED:"PAUSED",STOP_AV_STREAMS:"STOP_AV_STREAMS",PROCESSING:"PROCESSING",RECORDING_FAILED:"RECORDING_FAILED",UPLOADING:"UPLOADING",UPLOAD_FAILED:"UPLOAD_FAILED",DISCARDING:"DISCARDING",COMPLETED:"COMPLETED"},a.TAB_ACTIVITY={ACTIVATED:"tab-activity-activated",DEACTIVATED:"tab-activity-deactivated",REMOVED:"tab-activity-removed",RELOADED:"tab-activity-reloaded"},a.RECORDING_EVENTS={STATE_CHANGE:"state-change",PROGRESS:"progress",CLIENT_PROP_CHANGE:"client-prop-change",USER_NOTIFICATION:"show-user-notification"},a.RECORDING_ERRORS={EMPTY_RECORDING:{CODE:"EMPTY_RECORDING",HEADING:"Recording Failed",MESSAGE:"Uh oh - it looks like your recording is empty and we're not sure why. HYFY has discarded this recording, please restart your browser and try again."},RESTRICTED_DOMAIN:{CODE:"RESTRICTED_DOMAIN",HEADING:"Recording Blocked",MESSAGE:"HYFY has detected a violation of our terms of service and has automatically stopped recording. For more details, see <a target='_blank' href='https://www.hyfy.io/terms'>https://www.hyfy.io/terms</a>."},VIDEO_CAPTURE_FAILED:{CODE:"VIDEO_CAPTURE_FAILED",HEADING:"Recording Failed",MESSAGE:"Uh oh - Somehow we could not start the recording, please try again."}},a.RECORDING_START_SOURCE={POPUP:"POPUP",JIRA_ADDON:"JIRA_ADDON",CONTROL_WINDOW:"CONTROL_WINDOW",RECORDIND_FINISH_POPUP:"RECORDING_FINISH_POPUP",AUTOMATION:"AUTOMATION"},a.RECORDING_CLIENT_PROPS={TAB_DISSOCIATED:"TAB_DISSOCIATED",HIDE_FAB_MENU:"HIDE_FAB_MENU",CURSOR_COORDINATES:"CURSOR_COORDINATES",FAB_POSITION:"FAB_POSITION"},a.RECORDING_PARAMS={FRAMES_LOW_QUALITY:15,FRAMES_HIGH_QUALITY:30,HIGH_QUALITY_MIN_THREADS:2,HIGH_QUALITY_MIN_MEMORY:536870912},a.VIDEO_STATUS={NEW:1,DRAFT:2,UPLOADED:3,DELETED:4,EXPIRED:5,FAILED:6,BLOCKED:7},a.SOURCE_TYPE={SCREEN:1,FACECAM:2},a.STREAM_TYPE={SCREEN:1,FACECAM:2},a.VIDEO_SOURCE_TYPE={VIDEO:1,GIF:2},a.VIDEO_PLAY_MODE={FACECAM_AND_SCREEN:1,FACECAM:2,SCREEN:3},a.TIMER={MEDIA_RECORDER_START_TIMEOUT:5e3,UPLOAD_AJAX_TIMEOUT:18e4,GENERAL_AJAX_TIMEOUT:6e4,CHOOSE_DESKTOP_MEDIA_TIMEOUT:6e4,PAUSE_WAIT_TIMEOUT:6e5,PAUSE_WAIT_ADDITIONAL_TIMEOUT:18e5,TIMER_INTERVAL:1e3,BUGSNAG_REFRESH_INTERVAL:36e5,RECORDING_OBJECT_LIFE_TIME:216e5,RECORDING_OBJECT_EXTRA_LIFE_TIME:18e5,RECORDING_NACL_LOAD_TIMEOUT:6e4,RECORDING_NACL_PROCESSING_TIMEOUT:18e5,RECORDING_OBJECT_DELETE_RETRY_TIME:12e4,SUCCESS_MODAL_TIMEOUT:3e3,NO_AUDIO_TIMEOUT:2e3,MEDIA_RECORDER_DATA_INTERVAL:1e3,RECORDING_DATA_CLEANUP_INTERVAL:3e3},a.USER_SUBSCRIPTIONS={FREE:"HYFY_FREE",FREE_TRIAL:"HYFY_FREE_TRIAL",PRO:"HYFY_PRO",BUSINESS:"HYFY_BUSINESS"},a.USER_SUBSCRIPTIONS_MODE_HIERARCHY=["NONE","LICENSE","STRIPE"],a.USER_SUBSCRIPTIONS_MODE_HIERARCHY=[a.USER_SUBSCRIPTIONS.FREE,a.USER_SUBSCRIPTIONS.FREE_TRIAL,a.USER_SUBSCRIPTIONS.PRO,a.USER_SUBSCRIPTIONS.BUSINESS],a.FEATURES={RECORDING_DESKTOP:"RECORDING_DESKTOP",RECORDING_30_MIN:"RECORDING_30_MIN",RECORDING_60_MIN:"RECORDING_60_MIN",RECORDING_QUALITY_5MBPS:"RECORDING_QUALITY_5MBPS",SHARE_JIRA:"SHARE_JIRA",VIDEO_PRIVACY:"VIDEO_PRIVACY",VIDEO_NEVER_EXPIRES:"VIDEO_NEVER_EXPIRES",SHOW_UPLOAD_PROGRESS:"SHOW_UPLOAD_PROGRESS",HIDE_UPLOAD_PROGRESS_BAR:"HIDE_UPLOAD_PROGRESS_BAR"},a.USER_PREFERENCES={RECORDING_TYPE:"RECORDING_TYPE"},a.PERSISTENT_STORAGE_SIZE=1073741824,a.PERSISTENT_STORAGE_PATH="/persistent/",a.CHROME_EXTENSION="chrome-extension://",a.AV_MUXED_FILE_EXT=".webm",a.IMAGE_FILE_EXT=".jpeg",a.STORAGE_KEYS={ACCOUNT_TYPE:"account-type",ACCOUNT_ID:"account-id",AUTH_TOKEN:"auth-token",ACCOUNT_UPDATE_TIME:"account-update-time",SERVER_TIME_DIFFERENCE:"server-time-difference",USER_PREFERENCES:"user-preferences",INSTALLED_ON:"installed-on",RESTRICTED_URLS_PATTERNS:"restricted-urls",UUID:"extension-uuid",USER_TIPS_SHOWN:"user-tips-shown",VIEWERS_WANT_TO_SEE_YOUR_FACE_SHOWN:"viewers-want-to-see-your-face-shown"},a.ACCOUNT_TYPE={AUTH0:"auth0"},a.NOTIFICATION_CONTEXT={TAB:"notification-context-tab",POPUP:"notification-context-popup",BROWSER:"notification-context-browser"},a.RECORDING_CONTROLS_TOOLTIPS={STOP:"STOP the recording.",PAUSE:"PAUSE the recording.",RESUME:"RESUME the recording.",HIDE:"Hide these controls until the next time.<br/>Click the extension icon to STOP recording.",DISCARD:"DELETE this recording permanently.",SUPPORT:"Having trouble? Get help with HYFY Support"},a.COMMON_NOTIFICATION_MESSAGES={AJAX_ERROR_RETRY:"We’re having trouble communicating. Please check your network connection and try again in a moment.",VIDEO_DELETED:"The current recording has been discarded.",RECORDING_FAILED:"Looks like we're experiencing some technical difficulties. Please try again in a few moments.",RECORDING_EMPTY:"Uh oh - it looks like your recording is empty and we're not sure why. HYFY has discarded this recording, please restart your browser and try again.",RECORDING_TIMEOUT:"Looks like you took too long to choose screen option. Please try again.",UPLOAD_ERROR:"HYFY has encountered an error uploading your video. Please confirm your network connection and try again in a few moments.",CLOCK_OUT_OF_SYNC:"Oops - we had trouble uploading your video. We've detected that your system clock is out of sync with internet time or set to a different time zone than we were expecting. Luckily, it's an easy fix! Email us at support@hyfy.io - we can help! Or if you know how to fix it yourself, go ahead and then please try HYFY again",PAUSE_WARNING:"Your recording has been paused for a long time.  Would you like to discard it?"},a.COMMON_NOTIFICATION_ACTIONS={TRY_AGAIN:"TRY AGAIN",SAVE_RECORDING:"SAVE RECORDING",DISCARD_RECORDING:"DISCARD RECORDING"},a.NOTIFICATION_MESSAGES={AJAX_ERROR:{type:"basic",title:"Communication Error!!",message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,buttons:[{title:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN}],expiryInSeconds:1800},VIDEO_DELETED:{type:"basic",title:"Recording Deleted",message:a.COMMON_NOTIFICATION_MESSAGES.VIDEO_DELETED,expiryInSeconds:3},RECORDING_FAILED:{type:"basic",title:"Recording Failed",message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_FAILED},RECORDING_EMPTY:{type:"basic",title:"Empty Recording",message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_EMPTY},RECORDING_TIMEOUT:{type:"basic",title:"Recording Timeout",message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_TIMEOUT,expiryInSeconds:5},UPLOAD_ERROR:{type:"basic",title:"Upload Error",message:a.COMMON_NOTIFICATION_MESSAGES.UPLOAD_ERROR,buttons:[{title:"TRY AGAIN"}],expiryInSeconds:1800},CLOCK_OUT_OF_SYNC:{type:"basic",title:"Upload Error",message:a.COMMON_NOTIFICATION_MESSAGES.CLOCK_OUT_OF_SYNC,buttons:[{title:"TRY AGAIN"}],expiryInSeconds:1800},UNSUPPORTED_TAB:{type:"basic",title:"Unsupported Tab",message:"Google Chrome won't allow HYFY to embed controls on this page. Please use extension icon to stop and share."},PAUSE_WARNING:{type:"basic",title:"Recording Paused for Several Minutes",message:a.COMMON_NOTIFICATION_MESSAGES.PAUSE_WARNING,buttons:[{title:"DISCARD RECORDING"},{title:"KEEP IT PAUSED"}],expiryInSeconds:120},NO_PAGE_CONTROLS:{type:"basic",title:"Can't Embed Controls",message:"Google Chrome won't allow HYFY to embed any controls on this page. Your can still record the tab, just use extension icon to stop and share.",buttons:[{title:"GOT IT"}]},EXTENSION_RELOADED:{type:"basic",title:"HYFY Reloaded",message:"Hyfy is ready to use."},USER_LOGOUT:{type:"basic",title:"Successful Logout",message:"You have successfully logged out."},LOGOUT_DISABLED:{type:"basic",title:"Can't Log Out",message:"HYFY is either recording or uploading your videos. Please try again in a few moments."},ASSOCIATED_TAB_CLOSED:{type:"basic",title:"Tab Closed",message:"Your recording is still in prrogress, please use extension icon to stop and share."},RECORDING_TAB_SWITCH_FREE:{type:"basic",title:"Tab Switch Detected",message:"You're still recording. but HYFY FREE can only record a single browser tab.",buttons:[{title:"Upgrade to HYFY PRO for full desktop recording."}]},RECORDING_TAB_SWITCH_PRO:{type:"basic",title:"Tab Switch Detected",message:"You're still recording, but in Tab Capture mode, HYFY can only record a single browser tab.  Try Desktop mode to capture multiple tabs, other windows, or your entire screen.",buttons:[]},ASSOCIATED_TAB_SWITCH:{type:"basic",title:"Tab Switched",message:"Your recording is still in prrogress, please use extension icon to stop and share."},VIDEO_UPLOAD_PROGRESS:{type:"progress",title:"Uploading...",message:"HYFY is uploading your recording to your HYFY video library.",buttons:[{title:"NOTIFY ME WHEN DONE"}]},VIDEO_UPLOAD_COMPLETED:{type:"progress",title:"Upload Completed",progress:100,message:"Your recording has been successfully uploaded to your HYFY video library.",buttons:[{title:"OK"}]}},a.TOAST_NOTIFICATION={AJAX_ERROR:{message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN,expiryInSeconds:1800},RECORDING_FAILED:{message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_FAILED},RECORDING_EMPTY:{message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_EMPTY},RECORDING_TIMEOUT:{message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_TIMEOUT,expiryInSeconds:5},VIDEO_THUMBNAIL_UPLOAD_AJAX_ERROR_RETRY:{message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN},VIDEO_FILE_UPLOAD_AJAX_ERROR_RETRY:{message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN},VIDEO_DELETED:{message:a.COMMON_NOTIFICATION_MESSAGES.VIDEO_DELETED,expiryInSeconds:3},VIDEO_DISCARDED:{message:"The current recording has been discarded.",expiryInSeconds:3},UPLOAD_ERROR:{message:a.COMMON_NOTIFICATION_MESSAGES.UPLOAD_ERROR,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN,expiryInSeconds:1800},CLOCK_OUT_OF_SYNC:{message:a.COMMON_NOTIFICATION_MESSAGES.CLOCK_OUT_OF_SYNC,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN,expiryInSeconds:1800}},a.POPUP_NOTIFICATION={AJAX_ERROR:{message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN}},a.TOAST_NOTIFICATION_MESSAGES_TYPE={ERROR:"error",UNSUPPORTED_BROWSER:"unsupported-browser",RECORDING_FAILED:"recording-failed",VIDEO_DISCARDED:"video-discarded",VIDEO_DELETED:"video-deleted",SLACK_DATA_FETCH_FAILURE:"slack-data-fetch-failure",HIPCHAT_DATA_FETCH_FAILURE:"hipchat-data-fetch-failure",SLACK_POST_FAILURE:"slack-post-failure",HIPCHAT_POST_FAILURE:"hipchat-post-failure",EDIT_TITLE_FAILURE:"edit-title-failure",UPLOAD_COMPLETE:"upload-complete",UPLOAD_ERROR:"upload-error",USER_CREATE_SESSION_AJAX_ERROR_RETRY:"video-object-creation-ajax-error-retry",VIDEO_OBJECT_CREATION_AJAX_ERROR_RETRY:"video-object-creation-ajax-error-retry",VIDEO_FILE_UPLOAD_AJAX_ERROR_RETRY:"video-file-upload-ajax-error-retry",VIDEO_THUMBNAIL_UPLOAD_AJAX_ERROR_RETRY:"video-thumbnail-upload-ajax-error-retry",VIDEO_UPDATE_AJAX_ERROR_RETRY:"video-update-ajax-error-retry",GET_VIDEO_THUMBNAIL_UPLOAD_URL_AJAX_ERROR_RETRY:"get-video-thumbnail-upload-url-ajax-error-retry",GET_VIDEO_UPLOAD_URL_AJAX_ERROR_RETRY:"get-video-upload-url-ajax-error-retry",UPDATE_VIDEO_SOURCE_AJAX_ERROR_RETRY:"update-video-source-ajax-error-retry",ACTIVE_RECORDING_TAB_SWITCH:"active-recording-tab-switch",JIRA_CREATE_ISSUE_FAILURE:"jira-create-issue-failure",JIRA_DATA_FETCH_FAILURE:"jira-data-fetch-failure",JIRA_COMMENT_ON_ISSUE_FAILURE:"jira-comment-on-issue-failure"},a.TOAST_NOTIFICATION_MESSAGES={ERROR:"Cut! Looks like we're experiencing some technical difficulties. Please try again.",UNSUPPORTED_BROWSER:"HYFY requires Chrome Native Client to be enabled. Please enable it here: chrome://plugins",RECORDING_FAILED:"Looks like we're experiencing some technical difficulties. Please try again in a few moments.",VIDEO_DISCARDED:"The current recording has been discarded.",VIDEO_DELETED:"Your HYFY video has been permanently deleted.",UPLOAD_COMPLETE:"Link copied to your clipboard. Paste away!.",UPLOAD_ERROR:"HYFY has encountered an error uploading your video. Please confirm your network connection and try again in a few moments",AJAX_ERROR_RETRY:"We’re having trouble communicating. Please check your network and try again in a few moments.",ACTIVE_RECORDING_TAB_SWITCH:"Psst. Hey buddy, you're still recording that tab over there.",JIRA_DATA_FETCH_FAILURE:"Well, that's disappointing. We couldn't retrieve your JIRA information.",JIRA_CREATE_ISSUE_FAILURE:"Well, that's disappointing. We couldn't create your issue in Jira.",JIRA_COMMENT_ON_ISSUE_FAILURE:"Well, that's disappointing. We couldn't comment on your issue in Jira."},a.VIDEO_CONTENT_TYPE="video/webm",a.IMAGE_CONTENT_TYPE="image/jpeg",a.NACL_CONTENT_TYPE="application/x-nacl",a.VIDEO_FILE_NAME_PREFIX="HYFY-RECORDING-",a.IMAGE_FILE_NAME_PREFIX="HYFY-THUMBNAIL-",a.VIDEO_STREAM_FACECAM="FACECAM-",a.VIDEO_STREAM_SCREEN="",a.FILE_FORMATS={OGG:1,WEBM:2,MP4:3},a.VIDEO_FORMATS={THEORA:1,VP8:2,VP9:3,H264:4},a.AUDIO_FORMATS={VORBIS:1,OPUS:2,ACC:3,MP3:4},a.IMAGE_FILE_TYPE={JPEG:"jpeg"},a.VIDEO_RECORDING_DURATION={MIN_3:180,MIN_10:600,MIN_4:240,MIN_30:1800,MIN_60:3600},a.VIDEO_RECORDING_DURATION_DEFAULT=a.VIDEO_RECORDING_DURATION.MIN_10,a.RECORDING_COUNTDOWN_TIME=5,a.LOG_LEVELS={TRACE:"TRACE",DEBUG:"DEBUG",INFO:"INFO",WARN:"WARN",ERROR:"ERROR",EXCEPTION:"EXCEPTION"},a.DEFAULT_PAGE_TITLE="Untitled HYFY on ",a.BUGSNAG_LOG_NUMBER=200,a.ADD_SPINNER=1,a.REMOVE_SPINNER=0,a.GA_EVENT_CATEGORY={VIDEO:"Video",MIC_PERMISSION:"Mic Permission",CHROME_EXTENSION:"Chrome Extension",USER_INTERACTION:"User Interaction"},a.GA_EVENT_ACTION={RECORDING_STARTED:"Started",RECORDING_DISCARDED:"Discarded",RECORDING_UPLOADED:"Uploaded",RECORDING_DELETED:"Deleted",RECORDING_ERROR:"Error",RECORDING_BLOCKED:"Blocked",RECORDING_USER_TIMEOUT:"User Timeout",SHARED:"Shared",LINK_COPIED:"Link Copied",ALLOWED:"Allowed",DENIED:"Denied",INSTALLED:"Installed",UPDATED:"Updated",ERROR:"Error",LINK_CLICKED:"Link Clicked",SIGN_OUT:"Sign Out",PAUSED:"Paused"},a.GA_EVENT_LABEL={EXTENSION:"Extension",EXTENSION_TAB:"Extension - Tab",EXTENSION_DESKTOP:"Extension - Desktop",CHROME_WEBSTORE_OR_INLINE:"Chrome Webstore / Inline",JIRA_ADDON:"JIRA addon",EXTENSION_POPUP:"Extension Popup"},a.GA_USER_PLAN={FREE:"free",FREE_TRIAL:"free-trial",PRO:"pro",BUSINESS:"business"},a.MIXPANEL_EVENT_ACTION={RECORDING_CREATED:"rec_created",RECORDING_STARTED:"rec_started",RECORDING_RESTARTED:"rec_restarted",RECORDING_PAUSED:"rec_paused",RECORDING_DISCARDED:"rec_discarded",RECORDING_STOPPED:"rec_stopped",RECORDING_UPLOADED:"rec_uploaded",RECORDING_ERROR:"rec_error",RECORDING_BLOCKED:"rec_blocked",MIC_PERMISSION_ALLOWED:"mic_permission_allowed",MIC_PERMISSION_DENIED:"mic_permission_denied",INSTALLED:"extension_installed",USER_TIPS_CLOSED:"user_tips_closed",UPDATED:"extension_updated",EXTENSION_POPUP_OPENED:"extension_popup_opened",SIGN_OUT:"sign_out"},a.MIXPANEL_ATTRIBUTE={SOURCE:"source",USER_TIP_NUMBER:"user_tip_number"},a.MIXPANEL_ATTRIBUTE_SOURCE={AUDIO_ACCESS:"audio-access",SUCCESSFUL_INSTALL:"successful-install",FACECAM_PERMISSION_ALLOWED:"facecam_permission_allowed",MIC_PERMISSION_ALLOWED:"mic_permission_allowed"},a.SETTINGS={DEBUG:{key:"settings-debug",label:"Debug",inputType:"checkbox",defaultValue:!1}},a.SYSTEM_FAILURE_REASONS={LOW_MEMORY:"low-memory",LOW_DISK_SPACE:"low-disk-space"},a.ENCODERS={MEDIA_RECORDER_VP8:{id:"media-recorder-vp8",label:"Media Recorder VP8",mimeType:"video/webm;codecs=vp8",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP8,videoBitRate:1e6,audioBitRate:128e3},MEDIA_RECORDER_VP9_1M:{id:"media-recorder-vp9-1m",label:"Media Recorder VP9 1Mbps",mimeType:"video/webm;codecs=vp9",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP9,videoBitRate:1e6,audioBitRate:128e3},MEDIA_RECORDER_VP9_5M:{id:"media-recorder-vp9-5m",label:"Media Recorder VP9 5Mbps",mimeType:"video/webm;codecs=vp9",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP9,videoBitRate:5e6,audioBitRate:128e3},MEDIA_RECORDER_VP9_10M:{id:"media-recorder-vp9-10m",label:"Media Recorder VP9 10Mbps",mimeType:"video/webm;codecs=vp9",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP9,videoBitRate:1e7,audioBitRate:128e3},MEDIA_RECORDER_H264_1M:{id:"media-recorder-h264-5m",label:"Media Recorder H264 1Mbps",mimeType:"video/webm;codecs=h264",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.H264,videoBitRate:1e6,audioBitRate:128e3},NACL:{id:"nacl",label:"NACL",mimeType:"video/webm;codecs=vp8",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP8,videoBitRate:1e6,audioBitRate:128e3}},a}(),EXTENSION_SETTINGS={apiBaseUrl:"https://api.hyfy.io/apis/v1",siteBaseUrl:"https://app.hyfy.io",staticBaseUrl:"https://static.hyfy.io",jsLogLevel:"info",naclConsoleLogLevel:"info",naclTerminalLogLevel:"off",logEntriesLevel:"info",logEntriesToken:"d735703d-b3ed-4380-998b-bdebe1d7b6eb",bugsnagApiKey:"8d50a69cb0b2a0c4ee60b31f8ce85c5a",bugsnagLogLevel:"warn",bugsnagReleaseStage:"production",naclEnableShowcaseUrl:"https://app-dev.hyfy.io/v/abAx0U8egU/",googleAnalyticsTrackingId:"UA-65824100-2"},bugsnagModule=function(){function a(){window.Bugsnag.refresh()}function b(){c&&clearInterval(c),c=setInterval(a,window.constantsModule.TIMER.BUGSNAG_REFRESH_INTERVAL)}var c,d={};return d.setBugsnagUserId=function(){chrome.storage.local.get(window.constantsModule.STORAGE_KEYS.ACCOUNT_ID,function(a){a[window.constantsModule.STORAGE_KEYS.ACCOUNT_ID]&&(window.Bugsnag.user={id:a[window.constantsModule.STORAGE_KEYS.ACCOUNT_ID]})})},d.setExtensionUUID=function(){chrome.storage.local.get(window.constantsModule.STORAGE_KEYS.UUID,function(a){if(a[window.constantsModule.STORAGE_KEYS.UUID]){var b={};$.extend(b,window.Bugsnag.metaData,{extensionUUID:a[window.constantsModule.STORAGE_KEYS.UUID]}),window.Bugsnag.metaData=b}})},$(function(){window.Bugsnag&&(window.Bugsnag.releaseStage=window.EXTENSION_SETTINGS.bugsnagReleaseStage,window.Bugsnag.apiKey=window.EXTENSION_SETTINGS.bugsnagApiKey,d.setBugsnagUserId(),d.setExtensionUUID(),window.Bugsnag.appVersion=chrome.app.getDetails().version,b(),window.Bugsnag.beforeNotify=function(a,b){a.stacktrace=a.stacktrace.replace(/chrome-extension:/g,"chromeextension:")})}),d}(),urlsModule=function(){var a={};return a.LOCAL_URLS={images:{icon_19:"images/hyfy-circular-off_19.png",icon_128:"images/hyfy-circular-on_128.png",cursor:"images/cursor.png",move_handle:"images/handle-move.png"},assets:{countdown_beep:"/images/beep_basic_lo_c.wav",final_beep:"/images/beep_octave_on.wav"},templates:{successful_install:"index.html#/successful-install",popup:"index.html#/popup",recorder_iframe:"index.html#/recorder-iframe",notifications_iframe:"index.html#/notifications-iframe",processing_iframe:"index.html#/processing-iframe",recording_status:"index.html#/recording-status/:recordingId",save_local:"index.html#/notification/:recordingId/save-local",upload_error:"index.html#/notification/:recordingId/upload-error",recording_error:"index.html#/notification/:recordingId/recording-error",frame:"frame.html",toast:"toast_notification.html",jira_addon_recorder_iframe_v2:"index.html#/jira-addon-recorder-iframe-v2",jira_addon_recorder_iframe:"index.html#/jira-addon-recorder-iframe",recordingControls:"index.html#/recording-controls",recordingFinished:"index.html#/recording-finished"},embedded:{recording_controls:"embedded/recording-controls/recording-controls.html"}},a.API_URLS={users:{list:'"/users/"',detail:'"/users/" + arguments[0] + "/"',get_detail:'"/users/get_detail/"',create_session:'"/users/create_session/"',logout:'"/users/logout/"'},subscription:{user:'"/subscription/user/2/"',jiraAddonUser:'"/subscription/jiraaddonuser/"'},restricted_domains:{list:'"/restricted-domains/"'},videos:{list:'"/videos/"',detail:'"/videos/" + arguments[0] + "/"',update:'"/videos/" + arguments[0] + "/"',uploadUrl:'"/videos/" + arguments[0] + "/thumbnail_upload_url/"',thumbnailUploadInfo:'"/videos/" + arguments[0] + "/thumbnail_upload_info/"',uploadInfo:'"/videos/" + arguments[0] + "/upload_info/"',uploadToken:'"/videos/" + arguments[0] + "/upload_token/"',videoShareDetail:'"/videos/" + arguments[0] + "/gmailsharevideodetails/"',gifShareDetail:'"/videos/" + arguments[0] + "/gmailsharegifdetails/"'},videoSources:{list:'"/video-sources/"',update:'"/video-sources/" + arguments[0] + "/"',uploadUrl:'"/video-sources/" + arguments[0] + "/upload_url/"',uploadInfo:'"/video-sources/" + arguments[0] + "/upload_info/"'}},a.SITE_API_URLS={create_session:'"/apis/v1/users/create_session/"',get_auth_details:'"/apis/v1/users/get_auth_details/"',logout:'"/apis/v1/users/logout/"'},a.SITE_URLS={universal_redirector:"/universal-redirector/?next=",videos:{video_library:'"/videos/library/"'},accounts:{login:'"/accounts/login/"',upgrade:'"/accounts/details/"',details:'"/accounts/details/"'},chrome_ext:{welcome:'"/chrome-ext/welcome/"',analytics:'"/chrome-ext/analytics/"',mixPanel:'"/chrome-ext/mixpanel_analytics/"',getting_started:'"/chrome-ext/getting-started/"',uninstall:'"/chrome-ext/uninstall/"'},support:'"/support/"'},a}(),logModule=function(){function a(a){this.BrowserConsoleAppender=a,this.loggingEvents=[]}function b(a){this.BrowserConsoleAppender=a,this.loggingEvents=[]}function c(a){this.BrowserConsoleAppender=a,this.loggingEvents=[]}function d(){}function e(a){this.BrowserConsoleAppender=a,this.loggingEvents=[]}var f=chrome.runtime.getURL(chrome.runtime.getManifest().background.page)==window.location.href,g=chrome.runtime.getURL(window.urlsModule.LOCAL_URLS.templates.popup),h=function(){var a=new Date;return a.toString()},i={};i.jsLogger=window.log4javascript.getLogger("jsLogger"),i.jsLogger.setLevel(window.log4javascript.Level.TRACE);var j={all:window.log4javascript.Level.ALL,trace:window.log4javascript.Level.TRACE,debug:window.log4javascript.Level.DEBUG,info:window.log4javascript.Level.INFO,warn:window.log4javascript.Level.WARN,error:window.log4javascript.Level.ERROR,fatal:window.log4javascript.Level.FATAL,off:window.log4javascript.Level.OFF};if(f){var k,l;i.setLogEntriesUserId=function(){chrome.storage.local.get(window.constantsModule.STORAGE_KEYS.ACCOUNT_ID,function(a){a[window.constantsModule.STORAGE_KEYS.ACCOUNT_ID]&&(k=a[window.constantsModule.STORAGE_KEYS.ACCOUNT_ID])})},i.setExtensionUUID=function(a){l=a},i.setLogEntriesUserId(),document.addEventListener("DOMContentLoaded",function(a){"off"!==window.EXTENSION_SETTINGS.logEntriesLevel&&(window.LE.init(window.EXTENSION_SETTINGS.logEntriesToken),i.logInfo("log-dom-ready","Log enteries initialized."))});var m=[];a.prototype=new window.log4javascript.Appender,a.prototype.toString=function(){return"Custom Appender for all logs"},a.prototype.append=function(a){var b=a.level.name,c=a.messages[2],d=a.messages[3];d=b+": "+a.messages[1]+" "+c+" "+d,a.messages.length>4&&(d="object"==typeof a.messages[4]?d+" "+JSON.stringify(a.messages[4]):d+" "+a.messages[4]),m.length===window.constantsModule.BUGSNAG_LOG_NUMBER?(m.shift(),m.push(d)):m.push(d)},b.prototype=new window.log4javascript.Appender,b.prototype.toString=function(){return"Custom LogEntries Appender"},b.prototype.append=function(a){this.loggingEvents.push(a);var b=a.level.name,c=a.messages[2],d={severity:b,extensionUUID:l,accountId:k,time:a.messages[1],source:c.slice(0,-1),message:a.messages[3]};switch(a.messages.length>4?d.data=a.messages[4]:d.data={},b){case window.constantsModule.LOG_LEVELS.INFO:window.LE.info(d);break;case window.constantsModule.LOG_LEVELS.WARN:window.LE.warn(d);break;case window.constantsModule.LOG_LEVELS.ERROR:window.LE.error(d);break;default:window.LE.log(d)}},c.prototype=new window.log4javascript.Appender,c.prototype.toString=function(){return"Custom Bugsnag Appender"},c.prototype.append=function(a){this.loggingEvents.push(a);var b=a.level.name,c=a.messages[2],d=a.messages[3];d=a.messages[1]+d;var e=c;-1!=e.indexOf("_tab_")&&(e=e.replace(/(_tab_)\d+/,"_tab")),-1==e.indexOf("-callApi")&&(e=e.replace(/\d+/,""));var f={groupingHash:e};a.messages.length>4&&(d="object"==typeof a.messages[4]?d+" "+JSON.stringify(a.messages[4]):d+" "+a.messages[4]);var g="";m.forEach(function(a,b,c){g=g+a+"\n"}),d=d+"\n"+g,window.Bugsnag&&window.Bugsnag.apiKey&&(a.exception?window.Bugsnag.notifyException(a.exception,c+" "+d,f,b):window.Bugsnag.notify(c,d,f,b))},d.prototype=new window.log4javascript.Layout,d.prototype.format=function(a){for(var b="",c=0;c<a.messages.length;c++){c>0&&(b+=" ");var d=a.messages[c];"object"==typeof d?b+=JSON.stringify(d):"string"==typeof d||"number"==typeof d?b+=d:(console.log(typeof d),b+=d)}return b},d.prototype.ignoresThrowable=function(){return!0},i.naclConsoleLogLevel="off",i.naclTerminalLogLevel="off",i.naclLogger=window.log4javascript.getLogger("naclLogger");var n=new window.log4javascript.BrowserConsoleAppender;n.setLayout(new d);var o=new window.log4javascript.BrowserConsoleAppender,p=new c(window.log4javascript.BrowserConsoleAppender),q=new b(window.log4javascript.BrowserConsoleAppender),r=new a(window.log4javascript.BrowserConsoleAppender);i.naclLogger.setLevel(window.log4javascript.Level.TRACE),p.setThreshold(j[window.EXTENSION_SETTINGS.bugsnagLogLevel]),n.setThreshold(j[window.EXTENSION_SETTINGS.jsLogLevel]),o.setThreshold(j[window.EXTENSION_SETTINGS.naclConsoleLogLevel]),q.setThreshold(j[window.EXTENSION_SETTINGS.logEntriesLevel]),i.naclConsoleLogLevel=window.EXTENSION_SETTINGS.naclConsoleLogLevel,i.naclTerminalLogLevel=window.EXTENSION_SETTINGS.naclTerminalLogLevel,i.jsLogger.addAppender(n),i.jsLogger.addAppender(p),i.jsLogger.addAppender(q),i.jsLogger.addAppender(r),i.naclLogger.addAppender(o),i.naclLogger.addAppender(p),i.naclLogger.addAppender(q),i.naclLogger.addAppender(r),chrome.runtime.onMessage.addListener(function(a,b,c){if(a.message===window.constantsModule.JS_MESSAGES.LOG_MESSAGE){var d="";switch(b.tab?d="_tab_"+b.tab.id:g===b.url&&(d="_popup"),a.level){case window.constantsModule.LOG_LEVELS.TRACE:case window.constantsModule.LOG_LEVELS.DEBUG:i.logDebug(a.name+d,a.logMessage,a.logObject,a.time);break;case window.constantsModule.LOG_LEVELS.INFO:i.logInfo(a.name+d,a.logMessage,a.logObject,a.time);break;case window.constantsModule.LOG_LEVELS.WARN:i.logWarn(a.name+d,a.logMessage,a.logObject,a.time);break;case window.constantsModule.LOG_LEVELS.ERROR:case window.constantsModule.LOG_LEVELS.EXCEPTION:i.logError(a.name+d,a.logMessage,a.logObject,a.time)}}})}else{e.prototype=new window.log4javascript.Appender,e.prototype.toString=function(){return"Background Log Appender"},e.prototype.append=function(a){chrome.runtime.sendMessage({message:window.constantsModule.JS_MESSAGES.LOG_MESSAGE,level:a.level.name,time:a.messages[1],name:a.messages[2],logMessage:a.messages[3],logObject:a.messages[4]},function(){})};var s=new e(window.log4javascript.BrowserConsoleAppender);s.setThreshold(j[window.EXTENSION_SETTINGS.jsLogLevel]),i.jsLogger.addAppender(s)}return i.logTrace=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.TRACE+":";d||(d=h()),c?window.logModule.jsLogger.trace(e,d,a+":",b,c):window.logModule.jsLogger.trace(e,d,a+":",b)},i.logDebug=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.DEBUG+":";d||(d=h()),c?window.logModule.jsLogger.debug(e,d,a+":",b,c):window.logModule.jsLogger.debug(e,d,a+":",b)},i.logInfo=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.INFO+":";d||(d=h()),c?window.logModule.jsLogger.info(e,d,a+":",b,c):window.logModule.jsLogger.info(e,d,a+":",b)},i.logWarning=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.WARN+":";d||(d=h()),c?window.logModule.jsLogger.warn(e,d,a+":",b,c):window.logModule.jsLogger.warn(e,d,a+":",b)},i.logError=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.ERROR+":";d||(d=h()),c?window.logModule.jsLogger.error(e,d,a+":",b,c):window.logModule.jsLogger.error(e,d,a+":",b)},i.logWarn=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.WARN+":";d||(d=h()),c?window.logModule.jsLogger.warn(e,d,a+":",b,c):window.logModule.jsLogger.warn(e,d,a+":",b)},i.logException=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.EXCEPTION+":";d||(d=h()),window.logModule.jsLogger.error(e,d,a+":",b,c)},i.LoggerPrototype=function(a){var b=this;this.source=a,this.trace=function(a,b,d,e){var f=c(a);i.logTrace(f,b,d,e)},this.debug=function(a,b,d,e){var f=c(a);i.logDebug(f,b,d,e)},this.info=function(a,b,d,e){var f=c(a);i.logInfo(f,b,d,e)},this.warn=function(a,b,d,e){var f=c(a);i.logWarning(f,b,d,e)},this.error=function(a,b,d,e){var f=c(a);i.logError(f,b,d,e)},this.exception=function(a,b,d,e){var f=c(a);i.logException(f,b,d,e)};var c=function(a){return b.source+"-"+a}},i.getLogger=function(a){return new i.LoggerPrototype(a)},i}(),utilsModule=function(){var _logger=window.logModule.getLogger("utils"),_publicObjects={},_urlToAjaxMap={};_publicObjects.callApi=function(a,b,c,d,e){_logger.debug("callApi","entering",{url:a.url,userAuthentication:d?!0:!1});var f=$.extend(!0,{},a);f.dataType||(f.dataType="json"),f.contentType||(f.contentType="application/json");var g=f.error;if(f.error=function(h,i,j){var k=!1;if(e&&(403==h.status||401==h.status)&&h.responseText)try{var l=JSON.parse(h.responseText);if(l.detail){var m=JSON.parse(l.detail);"TIME_OUT_OF_SYNC_OR_TOKEN_EXPIRED"==m.reason&&m.timeInSeconds&&(k=!0,e(m))}}catch(n){_logger.info("callApi","failed to get auth details",n)}if(!k){var o=_publicObjects.buildXHRError(h,i,j);o.url=f.url;var p=!1,q=!1,r=!1;if(0==o.readyState?(q=!0,_logger.info("callApi","network error",o)):"abort"==i?(p=!0,_logger.info("callApi","request aborted",o)):503==h.status?_logger.info("callApi","request failed, application under maintenance"):(q=!0,r=!0,_logger.info("callApi","request failed",o)),q&=!c)setTimeout(function(){_publicObjects.callApi(a,b,!0,d,e)},5e3);else{if(r){var s=_publicObjects.buildApiFailureLogPrefix("callApi",o);_logger.trace(s,"request details",$.extend({
authHeader:d},o)),_logger.warn(s,"request failed")}g&&g(h,i,j)}}},d){var h=f.beforeSend;f.beforeSend=function(a){a.setRequestHeader("Authorization",d),h&&h(a)}}var i=$.ajax(f);b&&i&&b(i)},_publicObjects.createAuthHeader=function(a){var b=new Date,c=0;a.serverTimeDifference&&(c=a.serverTimeDifference);var d=Math.round(b.getTime()/1e3+c).toString(),e=window.CryptoJS.enc.Base64.stringify(window.CryptoJS.HmacSHA512(a.accountId+":"+d,a.token));return"Basic "+btoa(a.accountId+":"+d+":"+e)},_publicObjects.getLocalUrl=function(a){return chrome.extension.getURL(a)},_publicObjects.makeApiUrl=function(urlCode,args){return void 0==args&&(args=[]),function(){return window.EXTENSION_SETTINGS.apiBaseUrl+eval(urlCode)}.apply(null,args)},_publicObjects.makeSiteUrl=function(urlCode,args){return void 0==args&&(args=[]),function(){return window.EXTENSION_SETTINGS.siteBaseUrl+eval(urlCode)}.apply(null,args)},_publicObjects.makeAbsoluteSiteUrl=function(a){return window.EXTENSION_SETTINGS.siteBaseUrl+a},_publicObjects.microphoneAndCameraAccessPermission=function(a){_logger.debug("microphoneAndCameraAccessPermission ","entering."),checkDeviceSupport(function(b,c){_logger.info("microphoneAndCameraAccessPermission",{hasMicrophone:b,hasWebcam:c}),navigator.webkitGetUserMedia({audio:b?!0:!1,video:c?!0:!1},function(b){if(_logger.info("microphoneAndCameraAccessPermission","got mic/camera permissions."),null!=b){var c=!0;null!==b.getAudioTracks()&&b.getAudioTracks().length?b.getAudioTracks()[0].stop():c=!1,null!==b.getVideoTracks()&&b.getVideoTracks().length?b.getVideoTracks()[0].stop():c=!1,b=null,a(c)}else a(!1)},function(b){_logger.info("microphoneAndCameraAccessPermission","microphone/camera permissions denied."),a(!1)})})};var canDevicesBeEnumerated=function(){navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(navigator.enumerateDevices=function(a){navigator.mediaDevices.enumerateDevices().then(a)});var a=!1;return"undefined"!=typeof MediaStreamTrack&&"getSources"in MediaStreamTrack?a=!0:navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(a=!0),a},updateEnumerateDevices=function(){!navigator.enumerateDevices&&window.MediaStreamTrack&&window.MediaStreamTrack.getSources&&(navigator.enumerateDevices=window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)),navigator.enumerateDevices||(navigator.enumerateDevices=navigator.enumerateDevices.bind(navigator))},checkDeviceSupport=function(a){var b=canDevicesBeEnumerated();_logger.debug("checkDeviceSupport","canEnumerate - ",b);var c=!1,d=!1;return b||a(c,d),updateEnumerateDevices(),navigator.enumerateDevices?void navigator.enumerateDevices(function(b){_logger.debug("checkDeviceSupport - navigator.enumerateDevices","devices - ",b),b.forEach(function(a){"audioinput"===a.kind&&(c=!0),"videoinput"===a.kind&&(d=!0)}),a&&a(c,d)}):void(a&&a(c,d))};return _publicObjects.checkAudioOutputSupport=function(a){var b=canDevicesBeEnumerated();_logger.debug("checkAudioOutputSupport","canEnumerate - ",b);var c=!1;return b||a(c),updateEnumerateDevices(),navigator.enumerateDevices?void navigator.enumerateDevices(function(b){_logger.debug("checkAudioOutputSupport - navigator.enumerateDevices","devices - ",b),b.forEach(function(a){"audiooutput"===a.kind&&(c=!0)}),a&&a(c)}):void(a&&a(c))},_publicObjects.buildUserFeaturesList=function(a){var b=[];if(a)for(var c in a){var d=a[c];if(d.features)for(var e=0;e<d.features.length;e++)-1==b.indexOf(d.features[e])&&b.push(d.features[e]);if(d.betaFeatures)for(var e=0;e<d.betaFeatures.length;e++)-1==b.indexOf(d.betaFeatures[e])&&b.push(d.betaFeatures[e])}return b},_publicObjects.buildApiFailureLogPrefix=function(a,b){var c=document.createElement("a");c.href=b.url;var d=c.pathname,e=b.status;return a+"_"+e+"_"+d},_publicObjects.getParameterByName=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?void 0:decodeURIComponent(c[1].replace(/\+/g," "))},_publicObjects.getDefaultPageTitle=function(){return window.constantsModule.DEFAULT_PAGE_TITLE+(new Date).toISOString().split("T")[0]},_publicObjects.copyToClipboard=function(a){var b=$('<input type="text" class="share-url">');$("body").prepend(b),b.val(a),b.select(),document.execCommand("Copy"),b.remove()},_publicObjects.isUnOrderedArrayDifferent=function(a,b){if(a&&a.length&&!b||b&&b.length&&!a)return!0;if(!(a&&0!=a.length||b&&0!=b.length))return!1;if(a.length==b.length){for(var c=0;c<a.length;c++)if(-1==b.indexOf(a[c]))return!0;return!1}return!0},_publicObjects.buildXHRError=function(a,b,c){var d={};return a&&(d={readyState:a.readyState,status:a.status,textStatus:b,responseText:a.responseText,errorThrown:c}),d},_publicObjects.getCookie=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""},_publicObjects}(),chromeUtilsModule=function(){var a=window.logModule.getLogger("chromeUtils"),b={};return b.FEATURES={NOTIFICATION_REQUIRE_INTERACTION:{id:"NOTIFICATION_REQUIRE_INTERACTION",minVersion:"50"},CAPTURE_CURSOR:{id:"CAPTURE_CURSOR",minVersion:"50"},MEDIA_RECORDER:{id:"MEDIA_RECORDER",minVersion:"50"},CHOOSE_AUDIO_DEVICE:{id:"CHOOSE_AUDIO_DEVICE",minVersion:"48"},TAB_IN_DESKTOP_RECORDING:{id:"TAB_IN_DESKTOP_RECORDING",minVersion:"50"}},b.isFeatureAvailable=function(b){var c=/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1];return a.debug("isFeatureAvailable","checking",{feature:b.id,browserVersion:c}),b.minVersion&&b.minVersion>c?(a.info("isFeatureAvailable","feature not available on this browser",{feature:b.id,browserVersion:c}),!1):!0},b}();!function(){BackgndAPI=new function(){var a=this,b=window.logModule.getLogger("BackgndAPI"),c=function(a,c){try{chrome.runtime.sendMessage(a,function(){c&&c.apply(this,arguments)})}catch(d){b.info("BackgndAPI-_sendMessageWrapper","Error Sending message to background",JSON.stringify(a),d)}},d=function(a,b){var c={message:a};return b&&$.extend(c,b),c};a.isExtensionIdle=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.IS_EXTENSION_IDLE,a);c(e,b)},a.showNotification=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SHOW_NOTIFICATION,a);c(e,b)},a.setUserAccount=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SET_USER_ACCOUNT,a);c(e,b)},a.removeUserAccount=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.REMOVE_USER_ACCOUNT,a);c(e,b)},a.logoutUser=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.LOGOUT,a);c(e,b)},a.isUserLoggedIn=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.IS_USER_LOGGED_IN,a);c(e,b)},a.fetchUserIdToken=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_USER_ID_TOKEN,a);c(e,b)},a.fetchUserData=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_USER_DATA,a);c(e,b)},a.addJiraAddonSubscription=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.ADD_JIRA_ADDON_SUBSCRIPTION,a);c(e,b)},a.setServerTimeDifference=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SET_SERVER_TIME_DIFFERENCE,a);c(e,b)},a.broadcastToTab=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.BROADCAST_TO_TAB,a);c(e,b)},a.getCurrentTabId=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.GET_CURRENT_TAB_ID,a);c(e,b)},a.getCurrentTabUrl=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.GET_CURRENT_TAB_URL,a);c(e,b)},a.startRecording=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.START_RECORDING,a);c(e,b)},a.stopRecording=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.STOP_RECORDING,a);c(e,b)},a.pauseRecording=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.PAUSE_RECORDING,a);c(e,b)},a.resumeRecording=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.RESUME_RECORDING,a);c(e,b)},a.fetchRecordingStatus=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.RECORDING_STATUS,a);c(e,b)},a.fetchThumbnailUrl=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_THUMBNAIL_URL,a);c(e,b)},a.updateClientProperty=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.UPDATE_CLIENT_PROP,a);c(e,b)},a.associatedTabReady=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.ASSOCIATED_TAB_READY,a);c(e,b)},a.deleteVideo=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.DELETE_VIDEO,a);c(e,b)},a.reRecordVideo=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.RERECORD,a);c(e,b)},a.saveLocal=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SAVE_LOCAL,a);c(e,b)},a.retryUpload=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.RETRY_UPLOAD,a);c(e,b)},a.dissociateTab=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.DISSOCIATE_TAB,a);c(e,b)},a.fetchNotifications=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_NOTIFICATIONS,a);c(e,b)},a.removeNotification=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.REMOVE_NOTIFICATION,a);c(e,b)},a.triggerNotificationAction=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.NOTIFICATION_ACTION,a);c(e,b)},a.openUrl=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.OPEN_URL,a);c(e,b)},a.openAppUrl=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.OPEN_APP_URL,a);c(e,b)},a.sendGAEvent=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SEND_GA_EVENT,a);c(e,b)},a.sendGAPageView=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SEND_GA_PAGE_VIEW,a);c(e,b)},a.fetchSettings=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_SETTINGS,a);c(e,b)},a.saveSettings=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SAVE_SETTINGS,a);c(e,b)},a.savePreferences=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SAVE_PREFERENCES,a);c(e,b)},a.sendMixPanelEvent=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SEND_MIXPANEL_EVENT,a);c(e,b)},a.fetchMailShareVideoDetail=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_MAIL_SHARE_VIDEO_DETAIL,a);c(e,b)},a.fetchVideoDetail=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_VIDEO_DETAIL,a);c(e,b)},a.openShareModel=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.OPEN_SHARE_MODAL,a);c(e,b)}}}();var clientUtilsModule=function(){var a=window.logModule.getLogger("clientUtils"),b={};return b.callApi=function(c,d,e,f,g){if(d){var h=void 0;g||(h=function(a){BackgndAPI.setServerTimeDifference({timeInSeconds:a.timeInSeconds},function(){b.callApi(c,d,e,f,!0)})}),BackgndAPI.fetchUserIdToken({},function(b){if(b.accountId&&b.token){var d=window.utilsModule.createAuthHeader(b);window.utilsModule.callApi(c,e,f,d,h)}else a.info("callApi","userAuthentication is set to true but could not find user id and token, failing request"),c.error&&c.error(),c.complete&&c.complete()})}else window.utilsModule.callApi(c,e,f)},b.getUserFeatures=function(a){BackgndAPI.fetchUserData({},function(b){var c=[];b&&b.subscriptions&&(c=b.subscriptions.userFeatures),a(c)})},b.getApplicableSettings=function(a){var b={},c=window.constantsModule.SETTINGS;for(var d in c)if(c.hasOwnProperty(d)){var e=c[d];b[e.key]=e.defaultValue}BackgndAPI.fetchSettings({settingKeys:Object.keys(b)},function(c){c&&c.settings&&$.extend(b,c.settings),a(b)})},b}();