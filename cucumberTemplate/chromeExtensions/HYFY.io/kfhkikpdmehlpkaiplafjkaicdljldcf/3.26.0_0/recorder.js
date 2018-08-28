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

/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(E){'use strict';function O(a){return function(){var b=arguments[0],d;d="["+(a?a+":":"")+b+"] http://errors.angularjs.org/1.5.7/"+(a?a+"/":"")+b;for(b=1;b<arguments.length;b++){d=d+(1==b?"?":"&")+"p"+(b-1)+"=";var c=encodeURIComponent,e;e=arguments[b];e="function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e;d+=c(e)}return Error(d)}}function oa(a){if(null==a||Wa(a))return!1;if(J(a)||F(a)||B&&a instanceof B)return!0;
var b="length"in Object(a)&&a.length;return S(b)&&(0<=b&&(b-1 in a||a instanceof Array)||"function"==typeof a.item)}function r(a,b,d){var c,e;if(a)if(z(a))for(c in a)"prototype"==c||"length"==c||"name"==c||a.hasOwnProperty&&!a.hasOwnProperty(c)||b.call(d,a[c],c,a);else if(J(a)||oa(a)){var f="object"!==typeof a;c=0;for(e=a.length;c<e;c++)(f||c in a)&&b.call(d,a[c],c,a)}else if(a.forEach&&a.forEach!==r)a.forEach(b,d,a);else if(sc(a))for(c in a)b.call(d,a[c],c,a);else if("function"===typeof a.hasOwnProperty)for(c in a)a.hasOwnProperty(c)&&
b.call(d,a[c],c,a);else for(c in a)sa.call(a,c)&&b.call(d,a[c],c,a);return a}function tc(a,b,d){for(var c=Object.keys(a).sort(),e=0;e<c.length;e++)b.call(d,a[c[e]],c[e]);return c}function uc(a){return function(b,d){a(d,b)}}function Zd(){return++pb}function Pb(a,b,d){for(var c=a.$$hashKey,e=0,f=b.length;e<f;++e){var g=b[e];if(H(g)||z(g))for(var h=Object.keys(g),k=0,l=h.length;k<l;k++){var m=h[k],n=g[m];d&&H(n)?ia(n)?a[m]=new Date(n.valueOf()):Xa(n)?a[m]=new RegExp(n):n.nodeName?a[m]=n.cloneNode(!0):
Qb(n)?a[m]=n.clone():(H(a[m])||(a[m]=J(n)?[]:{}),Pb(a[m],[n],!0)):a[m]=n}}c?a.$$hashKey=c:delete a.$$hashKey;return a}function R(a){return Pb(a,ta.call(arguments,1),!1)}function $d(a){return Pb(a,ta.call(arguments,1),!0)}function aa(a){return parseInt(a,10)}function Rb(a,b){return R(Object.create(a),b)}function A(){}function Ya(a){return a}function da(a){return function(){return a}}function vc(a){return z(a.toString)&&a.toString!==ka}function w(a){return"undefined"===typeof a}function x(a){return"undefined"!==
typeof a}function H(a){return null!==a&&"object"===typeof a}function sc(a){return null!==a&&"object"===typeof a&&!wc(a)}function F(a){return"string"===typeof a}function S(a){return"number"===typeof a}function ia(a){return"[object Date]"===ka.call(a)}function z(a){return"function"===typeof a}function Xa(a){return"[object RegExp]"===ka.call(a)}function Wa(a){return a&&a.window===a}function Za(a){return a&&a.$evalAsync&&a.$watch}function Ea(a){return"boolean"===typeof a}function ae(a){return a&&S(a.length)&&
be.test(ka.call(a))}function Qb(a){return!(!a||!(a.nodeName||a.prop&&a.attr&&a.find))}function ce(a){var b={};a=a.split(",");var d;for(d=0;d<a.length;d++)b[a[d]]=!0;return b}function ua(a){return M(a.nodeName||a[0]&&a[0].nodeName)}function $a(a,b){var d=a.indexOf(b);0<=d&&a.splice(d,1);return d}function Z(a,b){function d(a,b){var d=b.$$hashKey,e;if(J(a)){e=0;for(var f=a.length;e<f;e++)b.push(c(a[e]))}else if(sc(a))for(e in a)b[e]=c(a[e]);else if(a&&"function"===typeof a.hasOwnProperty)for(e in a)a.hasOwnProperty(e)&&
(b[e]=c(a[e]));else for(e in a)sa.call(a,e)&&(b[e]=c(a[e]));d?b.$$hashKey=d:delete b.$$hashKey;return b}function c(a){if(!H(a))return a;var b=f.indexOf(a);if(-1!==b)return g[b];if(Wa(a)||Za(a))throw za("cpws");var b=!1,c=e(a);void 0===c&&(c=J(a)?[]:Object.create(wc(a)),b=!0);f.push(a);g.push(c);return b?d(a,c):c}function e(a){switch(ka.call(a)){case "[object Int8Array]":case "[object Int16Array]":case "[object Int32Array]":case "[object Float32Array]":case "[object Float64Array]":case "[object Uint8Array]":case "[object Uint8ClampedArray]":case "[object Uint16Array]":case "[object Uint32Array]":return new a.constructor(c(a.buffer));
case "[object ArrayBuffer]":if(!a.slice){var b=new ArrayBuffer(a.byteLength);(new Uint8Array(b)).set(new Uint8Array(a));return b}return a.slice(0);case "[object Boolean]":case "[object Number]":case "[object String]":case "[object Date]":return new a.constructor(a.valueOf());case "[object RegExp]":return b=new RegExp(a.source,a.toString().match(/[^\/]*$/)[0]),b.lastIndex=a.lastIndex,b;case "[object Blob]":return new a.constructor([a],{type:a.type})}if(z(a.cloneNode))return a.cloneNode(!0)}var f=[],
g=[];if(b){if(ae(b)||"[object ArrayBuffer]"===ka.call(b))throw za("cpta");if(a===b)throw za("cpi");J(b)?b.length=0:r(b,function(a,d){"$$hashKey"!==d&&delete b[d]});f.push(a);g.push(b);return d(a,b)}return c(a)}function na(a,b){if(a===b)return!0;if(null===a||null===b)return!1;if(a!==a&&b!==b)return!0;var d=typeof a,c;if(d==typeof b&&"object"==d)if(J(a)){if(!J(b))return!1;if((d=a.length)==b.length){for(c=0;c<d;c++)if(!na(a[c],b[c]))return!1;return!0}}else{if(ia(a))return ia(b)?na(a.getTime(),b.getTime()):
!1;if(Xa(a))return Xa(b)?a.toString()==b.toString():!1;if(Za(a)||Za(b)||Wa(a)||Wa(b)||J(b)||ia(b)||Xa(b))return!1;d=T();for(c in a)if("$"!==c.charAt(0)&&!z(a[c])){if(!na(a[c],b[c]))return!1;d[c]=!0}for(c in b)if(!(c in d)&&"$"!==c.charAt(0)&&x(b[c])&&!z(b[c]))return!1;return!0}return!1}function ab(a,b,d){return a.concat(ta.call(b,d))}function bb(a,b){var d=2<arguments.length?ta.call(arguments,2):[];return!z(b)||b instanceof RegExp?b:d.length?function(){return arguments.length?b.apply(a,ab(d,arguments,
0)):b.apply(a,d)}:function(){return arguments.length?b.apply(a,arguments):b.call(a)}}function de(a,b){var d=b;"string"===typeof a&&"$"===a.charAt(0)&&"$"===a.charAt(1)?d=void 0:Wa(b)?d="$WINDOW":b&&E.document===b?d="$DOCUMENT":Za(b)&&(d="$SCOPE");return d}function cb(a,b){if(!w(a))return S(b)||(b=b?2:null),JSON.stringify(a,de,b)}function xc(a){return F(a)?JSON.parse(a):a}function yc(a,b){a=a.replace(ee,"");var d=Date.parse("Jan 01, 1970 00:00:00 "+a)/6E4;return isNaN(d)?b:d}function Sb(a,b,d){d=d?
-1:1;var c=a.getTimezoneOffset();b=yc(b,c);d*=b-c;a=new Date(a.getTime());a.setMinutes(a.getMinutes()+d);return a}function va(a){a=B(a).clone();try{a.empty()}catch(b){}var d=B("<div>").append(a).html();try{return a[0].nodeType===Na?M(d):d.match(/^(<[^>]+>)/)[1].replace(/^<([\w\-]+)/,function(a,b){return"<"+M(b)})}catch(c){return M(d)}}function zc(a){try{return decodeURIComponent(a)}catch(b){}}function Ac(a){var b={};r((a||"").split("&"),function(a){var c,e,f;a&&(e=a=a.replace(/\+/g,"%20"),c=a.indexOf("="),
-1!==c&&(e=a.substring(0,c),f=a.substring(c+1)),e=zc(e),x(e)&&(f=x(f)?zc(f):!0,sa.call(b,e)?J(b[e])?b[e].push(f):b[e]=[b[e],f]:b[e]=f))});return b}function Tb(a){var b=[];r(a,function(a,c){J(a)?r(a,function(a){b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))}):b.push(ja(c,!0)+(!0===a?"":"="+ja(a,!0)))});return b.length?b.join("&"):""}function qb(a){return ja(a,!0).replace(/%26/gi,"&").replace(/%3D/gi,"=").replace(/%2B/gi,"+")}function ja(a,b){return encodeURIComponent(a).replace(/%40/gi,"@").replace(/%3A/gi,
":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%3B/gi,";").replace(/%20/g,b?"%20":"+")}function fe(a,b){var d,c,e=Oa.length;for(c=0;c<e;++c)if(d=Oa[c]+b,F(d=a.getAttribute(d)))return d;return null}function ge(a,b){var d,c,e={};r(Oa,function(b){b+="app";!d&&a.hasAttribute&&a.hasAttribute(b)&&(d=a,c=a.getAttribute(b))});r(Oa,function(b){b+="app";var e;!d&&(e=a.querySelector("["+b.replace(":","\\:")+"]"))&&(d=e,c=e.getAttribute(b))});d&&(e.strictDi=null!==fe(d,"strict-di"),b(d,c?[c]:[],e))}function Bc(a,
b,d){H(d)||(d={});d=R({strictDi:!1},d);var c=function(){a=B(a);if(a.injector()){var c=a[0]===E.document?"document":va(a);throw za("btstrpd",c.replace(/</,"&lt;").replace(/>/,"&gt;"));}b=b||[];b.unshift(["$provide",function(b){b.value("$rootElement",a)}]);d.debugInfoEnabled&&b.push(["$compileProvider",function(a){a.debugInfoEnabled(!0)}]);b.unshift("ng");c=db(b,d.strictDi);c.invoke(["$rootScope","$rootElement","$compile","$injector",function(a,b,d,c){a.$apply(function(){b.data("$injector",c);d(b)(a)})}]);
return c},e=/^NG_ENABLE_DEBUG_INFO!/,f=/^NG_DEFER_BOOTSTRAP!/;E&&e.test(E.name)&&(d.debugInfoEnabled=!0,E.name=E.name.replace(e,""));if(E&&!f.test(E.name))return c();E.name=E.name.replace(f,"");ea.resumeBootstrap=function(a){r(a,function(a){b.push(a)});return c()};z(ea.resumeDeferredBootstrap)&&ea.resumeDeferredBootstrap()}function he(){E.name="NG_ENABLE_DEBUG_INFO!"+E.name;E.location.reload()}function ie(a){a=ea.element(a).injector();if(!a)throw za("test");return a.get("$$testability")}function Cc(a,
b){b=b||"_";return a.replace(je,function(a,c){return(c?b:"")+a.toLowerCase()})}function ke(){var a;if(!Dc){var b=rb();(pa=w(b)?E.jQuery:b?E[b]:void 0)&&pa.fn.on?(B=pa,R(pa.fn,{scope:Pa.scope,isolateScope:Pa.isolateScope,controller:Pa.controller,injector:Pa.injector,inheritedData:Pa.inheritedData}),a=pa.cleanData,pa.cleanData=function(b){for(var c,e=0,f;null!=(f=b[e]);e++)(c=pa._data(f,"events"))&&c.$destroy&&pa(f).triggerHandler("$destroy");a(b)}):B=U;ea.element=B;Dc=!0}}function sb(a,b,d){if(!a)throw za("areq",
b||"?",d||"required");return a}function Qa(a,b,d){d&&J(a)&&(a=a[a.length-1]);sb(z(a),b,"not a function, got "+(a&&"object"===typeof a?a.constructor.name||"Object":typeof a));return a}function Ra(a,b){if("hasOwnProperty"===a)throw za("badname",b);}function Ec(a,b,d){if(!b)return a;b=b.split(".");for(var c,e=a,f=b.length,g=0;g<f;g++)c=b[g],a&&(a=(e=a)[c]);return!d&&z(a)?bb(e,a):a}function tb(a){for(var b=a[0],d=a[a.length-1],c,e=1;b!==d&&(b=b.nextSibling);e++)if(c||a[e]!==b)c||(c=B(ta.call(a,0,e))),
c.push(b);return c||a}function T(){return Object.create(null)}function le(a){function b(a,b,c){return a[b]||(a[b]=c())}var d=O("$injector"),c=O("ng");a=b(a,"angular",Object);a.$$minErr=a.$$minErr||O;return b(a,"module",function(){var a={};return function(f,g,h){if("hasOwnProperty"===f)throw c("badname","module");g&&a.hasOwnProperty(f)&&(a[f]=null);return b(a,f,function(){function a(b,d,e,f){f||(f=c);return function(){f[e||"push"]([b,d,arguments]);return V}}function b(a,d){return function(b,e){e&&
z(e)&&(e.$$moduleName=f);c.push([a,d,arguments]);return V}}if(!g)throw d("nomod",f);var c=[],e=[],p=[],s=a("$injector","invoke","push",e),V={_invokeQueue:c,_configBlocks:e,_runBlocks:p,requires:g,name:f,provider:b("$provide","provider"),factory:b("$provide","factory"),service:b("$provide","service"),value:a("$provide","value"),constant:a("$provide","constant","unshift"),decorator:b("$provide","decorator"),animation:b("$animateProvider","register"),filter:b("$filterProvider","register"),controller:b("$controllerProvider",
"register"),directive:b("$compileProvider","directive"),component:b("$compileProvider","component"),config:s,run:function(a){p.push(a);return this}};h&&s(h);return V})}})}function ga(a,b){if(J(a)){b=b||[];for(var d=0,c=a.length;d<c;d++)b[d]=a[d]}else if(H(a))for(d in b=b||{},a)if("$"!==d.charAt(0)||"$"!==d.charAt(1))b[d]=a[d];return b||a}function me(a){R(a,{bootstrap:Bc,copy:Z,extend:R,merge:$d,equals:na,element:B,forEach:r,injector:db,noop:A,bind:bb,toJson:cb,fromJson:xc,identity:Ya,isUndefined:w,
isDefined:x,isString:F,isFunction:z,isObject:H,isNumber:S,isElement:Qb,isArray:J,version:ne,isDate:ia,lowercase:M,uppercase:ub,callbacks:{counter:0},getTestability:ie,$$minErr:O,$$csp:Fa,reloadWithDebugInfo:he});Ub=le(E);Ub("ng",["ngLocale"],["$provide",function(a){a.provider({$$sanitizeUri:oe});a.provider("$compile",Fc).directive({a:pe,input:Gc,textarea:Gc,form:qe,script:re,select:se,style:te,option:ue,ngBind:ve,ngBindHtml:we,ngBindTemplate:xe,ngClass:ye,ngClassEven:ze,ngClassOdd:Ae,ngCloak:Be,ngController:Ce,
ngForm:De,ngHide:Ee,ngIf:Fe,ngInclude:Ge,ngInit:He,ngNonBindable:Ie,ngPluralize:Je,ngRepeat:Ke,ngShow:Le,ngStyle:Me,ngSwitch:Ne,ngSwitchWhen:Oe,ngSwitchDefault:Pe,ngOptions:Qe,ngTransclude:Re,ngModel:Se,ngList:Te,ngChange:Ue,pattern:Hc,ngPattern:Hc,required:Ic,ngRequired:Ic,minlength:Jc,ngMinlength:Jc,maxlength:Kc,ngMaxlength:Kc,ngValue:Ve,ngModelOptions:We}).directive({ngInclude:Xe}).directive(vb).directive(Lc);a.provider({$anchorScroll:Ye,$animate:Ze,$animateCss:$e,$$animateJs:af,$$animateQueue:bf,
$$AnimateRunner:cf,$$animateAsyncRun:df,$browser:ef,$cacheFactory:ff,$controller:gf,$document:hf,$exceptionHandler:jf,$filter:Mc,$$forceReflow:kf,$interpolate:lf,$interval:mf,$http:nf,$httpParamSerializer:of,$httpParamSerializerJQLike:pf,$httpBackend:qf,$xhrFactory:rf,$location:sf,$log:tf,$parse:uf,$rootScope:vf,$q:wf,$$q:xf,$sce:yf,$sceDelegate:zf,$sniffer:Af,$templateCache:Bf,$templateRequest:Cf,$$testability:Df,$timeout:Ef,$window:Ff,$$rAF:Gf,$$jqLite:Hf,$$HashMap:If,$$cookieReader:Jf})}])}function eb(a){return a.replace(Kf,
function(a,d,c,e){return e?c.toUpperCase():c}).replace(Lf,"Moz$1")}function Nc(a){a=a.nodeType;return 1===a||!a||9===a}function Oc(a,b){var d,c,e=b.createDocumentFragment(),f=[];if(Vb.test(a)){d=d||e.appendChild(b.createElement("div"));c=(Mf.exec(a)||["",""])[1].toLowerCase();c=ha[c]||ha._default;d.innerHTML=c[1]+a.replace(Nf,"<$1></$2>")+c[2];for(c=c[0];c--;)d=d.lastChild;f=ab(f,d.childNodes);d=e.firstChild;d.textContent=""}else f.push(b.createTextNode(a));e.textContent="";e.innerHTML="";r(f,function(a){e.appendChild(a)});
return e}function Pc(a,b){var d=a.parentNode;d&&d.replaceChild(b,a);b.appendChild(a)}function U(a){if(a instanceof U)return a;var b;F(a)&&(a=W(a),b=!0);if(!(this instanceof U)){if(b&&"<"!=a.charAt(0))throw Wb("nosel");return new U(a)}if(b){b=E.document;var d;a=(d=Of.exec(a))?[b.createElement(d[1])]:(d=Oc(a,b))?d.childNodes:[]}Qc(this,a)}function Xb(a){return a.cloneNode(!0)}function wb(a,b){b||fb(a);if(a.querySelectorAll)for(var d=a.querySelectorAll("*"),c=0,e=d.length;c<e;c++)fb(d[c])}function Rc(a,
b,d,c){if(x(c))throw Wb("offargs");var e=(c=xb(a))&&c.events,f=c&&c.handle;if(f)if(b){var g=function(b){var c=e[b];x(d)&&$a(c||[],d);x(d)&&c&&0<c.length||(a.removeEventListener(b,f,!1),delete e[b])};r(b.split(" "),function(a){g(a);yb[a]&&g(yb[a])})}else for(b in e)"$destroy"!==b&&a.removeEventListener(b,f,!1),delete e[b]}function fb(a,b){var d=a.ng339,c=d&&gb[d];c&&(b?delete c.data[b]:(c.handle&&(c.events.$destroy&&c.handle({},"$destroy"),Rc(a)),delete gb[d],a.ng339=void 0))}function xb(a,b){var d=
a.ng339,d=d&&gb[d];b&&!d&&(a.ng339=d=++Pf,d=gb[d]={events:{},data:{},handle:void 0});return d}function Yb(a,b,d){if(Nc(a)){var c=x(d),e=!c&&b&&!H(b),f=!b;a=(a=xb(a,!e))&&a.data;if(c)a[b]=d;else{if(f)return a;if(e)return a&&a[b];R(a,b)}}}function zb(a,b){return a.getAttribute?-1<(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ").indexOf(" "+b+" "):!1}function Ab(a,b){b&&a.setAttribute&&r(b.split(" "),function(b){a.setAttribute("class",W((" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g,
" ").replace(" "+W(b)+" "," ")))})}function Bb(a,b){if(b&&a.setAttribute){var d=(" "+(a.getAttribute("class")||"")+" ").replace(/[\n\t]/g," ");r(b.split(" "),function(a){a=W(a);-1===d.indexOf(" "+a+" ")&&(d+=a+" ")});a.setAttribute("class",W(d))}}function Qc(a,b){if(b)if(b.nodeType)a[a.length++]=b;else{var d=b.length;if("number"===typeof d&&b.window!==b){if(d)for(var c=0;c<d;c++)a[a.length++]=b[c]}else a[a.length++]=b}}function Sc(a,b){return Cb(a,"$"+(b||"ngController")+"Controller")}function Cb(a,
b,d){9==a.nodeType&&(a=a.documentElement);for(b=J(b)?b:[b];a;){for(var c=0,e=b.length;c<e;c++)if(x(d=B.data(a,b[c])))return d;a=a.parentNode||11===a.nodeType&&a.host}}function Tc(a){for(wb(a,!0);a.firstChild;)a.removeChild(a.firstChild)}function Db(a,b){b||wb(a);var d=a.parentNode;d&&d.removeChild(a)}function Qf(a,b){b=b||E;if("complete"===b.document.readyState)b.setTimeout(a);else B(b).on("load",a)}function Uc(a,b){var d=Eb[b.toLowerCase()];return d&&Vc[ua(a)]&&d}function Rf(a,b){var d=function(c,
d){c.isDefaultPrevented=function(){return c.defaultPrevented};var f=b[d||c.type],g=f?f.length:0;if(g){if(w(c.immediatePropagationStopped)){var h=c.stopImmediatePropagation;c.stopImmediatePropagation=function(){c.immediatePropagationStopped=!0;c.stopPropagation&&c.stopPropagation();h&&h.call(c)}}c.isImmediatePropagationStopped=function(){return!0===c.immediatePropagationStopped};var k=f.specialHandlerWrapper||Sf;1<g&&(f=ga(f));for(var l=0;l<g;l++)c.isImmediatePropagationStopped()||k(a,c,f[l])}};d.elem=
a;return d}function Sf(a,b,d){d.call(a,b)}function Tf(a,b,d){var c=b.relatedTarget;c&&(c===a||Uf.call(a,c))||d.call(a,b)}function Hf(){this.$get=function(){return R(U,{hasClass:function(a,b){a.attr&&(a=a[0]);return zb(a,b)},addClass:function(a,b){a.attr&&(a=a[0]);return Bb(a,b)},removeClass:function(a,b){a.attr&&(a=a[0]);return Ab(a,b)}})}}function Ga(a,b){var d=a&&a.$$hashKey;if(d)return"function"===typeof d&&(d=a.$$hashKey()),d;d=typeof a;return d="function"==d||"object"==d&&null!==a?a.$$hashKey=
d+":"+(b||Zd)():d+":"+a}function Sa(a,b){if(b){var d=0;this.nextUid=function(){return++d}}r(a,this.put,this)}function Wc(a){a=(Function.prototype.toString.call(a)+" ").replace(Vf,"");return a.match(Wf)||a.match(Xf)}function Yf(a){return(a=Wc(a))?"function("+(a[1]||"").replace(/[\s\r\n]+/," ")+")":"fn"}function db(a,b){function d(a){return function(b,c){if(H(b))r(b,uc(a));else return a(b,c)}}function c(a,b){Ra(a,"service");if(z(b)||J(b))b=p.instantiate(b);if(!b.$get)throw Ha("pget",a);return n[a+"Provider"]=
b}function e(a,b){return function(){var c=I.invoke(b,this);if(w(c))throw Ha("undef",a);return c}}function f(a,b,d){return c(a,{$get:!1!==d?e(a,b):b})}function g(a){sb(w(a)||J(a),"modulesToLoad","not an array");var b=[],c;r(a,function(a){function d(a){var b,c;b=0;for(c=a.length;b<c;b++){var e=a[b],f=p.get(e[0]);f[e[1]].apply(f,e[2])}}if(!m.get(a)){m.put(a,!0);try{F(a)?(c=Ub(a),b=b.concat(g(c.requires)).concat(c._runBlocks),d(c._invokeQueue),d(c._configBlocks)):z(a)?b.push(p.invoke(a)):J(a)?b.push(p.invoke(a)):
Qa(a,"module")}catch(e){throw J(a)&&(a=a[a.length-1]),e.message&&e.stack&&-1==e.stack.indexOf(e.message)&&(e=e.message+"\n"+e.stack),Ha("modulerr",a,e.stack||e.message||e);}}});return b}function h(a,c){function d(b,e){if(a.hasOwnProperty(b)){if(a[b]===k)throw Ha("cdep",b+" <- "+l.join(" <- "));return a[b]}try{return l.unshift(b),a[b]=k,a[b]=c(b,e)}catch(f){throw a[b]===k&&delete a[b],f;}finally{l.shift()}}function e(a,c,f){var g=[];a=db.$$annotate(a,b,f);for(var h=0,k=a.length;h<k;h++){var l=a[h];
if("string"!==typeof l)throw Ha("itkn",l);g.push(c&&c.hasOwnProperty(l)?c[l]:d(l,f))}return g}return{invoke:function(a,b,c,d){"string"===typeof c&&(d=c,c=null);c=e(a,c,d);J(a)&&(a=a[a.length-1]);d=11>=Ba?!1:"function"===typeof a&&/^(?:class\s|constructor\()/.test(Function.prototype.toString.call(a)+" ");return d?(c.unshift(null),new (Function.prototype.bind.apply(a,c))):a.apply(b,c)},instantiate:function(a,b,c){var d=J(a)?a[a.length-1]:a;a=e(a,b,c);a.unshift(null);return new (Function.prototype.bind.apply(d,
a))},get:d,annotate:db.$$annotate,has:function(b){return n.hasOwnProperty(b+"Provider")||a.hasOwnProperty(b)}}}b=!0===b;var k={},l=[],m=new Sa([],!0),n={$provide:{provider:d(c),factory:d(f),service:d(function(a,b){return f(a,["$injector",function(a){return a.instantiate(b)}])}),value:d(function(a,b){return f(a,da(b),!1)}),constant:d(function(a,b){Ra(a,"constant");n[a]=b;s[a]=b}),decorator:function(a,b){var c=p.get(a+"Provider"),d=c.$get;c.$get=function(){var a=I.invoke(d,c);return I.invoke(b,null,
{$delegate:a})}}}},p=n.$injector=h(n,function(a,b){ea.isString(b)&&l.push(b);throw Ha("unpr",l.join(" <- "));}),s={},V=h(s,function(a,b){var c=p.get(a+"Provider",b);return I.invoke(c.$get,c,void 0,a)}),I=V;n.$injectorProvider={$get:da(V)};var q=g(a),I=V.get("$injector");I.strictDi=b;r(q,function(a){a&&I.invoke(a)});return I}function Ye(){var a=!0;this.disableAutoScrolling=function(){a=!1};this.$get=["$window","$location","$rootScope",function(b,d,c){function e(a){var b=null;Array.prototype.some.call(a,
function(a){if("a"===ua(a))return b=a,!0});return b}function f(a){if(a){a.scrollIntoView();var c;c=g.yOffset;z(c)?c=c():Qb(c)?(c=c[0],c="fixed"!==b.getComputedStyle(c).position?0:c.getBoundingClientRect().bottom):S(c)||(c=0);c&&(a=a.getBoundingClientRect().top,b.scrollBy(0,a-c))}else b.scrollTo(0,0)}function g(a){a=F(a)?a:d.hash();var b;a?(b=h.getElementById(a))?f(b):(b=e(h.getElementsByName(a)))?f(b):"top"===a&&f(null):f(null)}var h=b.document;a&&c.$watch(function(){return d.hash()},function(a,b){a===
b&&""===a||Qf(function(){c.$evalAsync(g)})});return g}]}function hb(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;J(a)&&(a=a.join(" "));J(b)&&(b=b.join(" "));return a+" "+b}function Zf(a){F(a)&&(a=a.split(" "));var b=T();r(a,function(a){a.length&&(b[a]=!0)});return b}function Ia(a){return H(a)?a:{}}function $f(a,b,d,c){function e(a){try{a.apply(null,ta.call(arguments,1))}finally{if(V--,0===V)for(;I.length;)try{I.pop()()}catch(b){d.error(b)}}}function f(){y=null;g();h()}function g(){q=P();
q=w(q)?null:q;na(q,D)&&(q=D);D=q}function h(){if(v!==k.url()||K!==q)v=k.url(),K=q,r(L,function(a){a(k.url(),q)})}var k=this,l=a.location,m=a.history,n=a.setTimeout,p=a.clearTimeout,s={};k.isMock=!1;var V=0,I=[];k.$$completeOutstandingRequest=e;k.$$incOutstandingRequestCount=function(){V++};k.notifyWhenNoOutstandingRequests=function(a){0===V?a():I.push(a)};var q,K,v=l.href,u=b.find("base"),y=null,P=c.history?function(){try{return m.state}catch(a){}}:A;g();K=q;k.url=function(b,d,e){w(e)&&(e=null);l!==
a.location&&(l=a.location);m!==a.history&&(m=a.history);if(b){var f=K===e;if(v===b&&(!c.history||f))return k;var h=v&&Ja(v)===Ja(b);v=b;K=e;!c.history||h&&f?(h||(y=b),d?l.replace(b):h?(d=l,e=b.indexOf("#"),e=-1===e?"":b.substr(e),d.hash=e):l.href=b,l.href!==b&&(y=b)):(m[d?"replaceState":"pushState"](e,"",b),g(),K=q);y&&(y=b);return k}return y||l.href.replace(/%27/g,"'")};k.state=function(){return q};var L=[],C=!1,D=null;k.onUrlChange=function(b){if(!C){if(c.history)B(a).on("popstate",f);B(a).on("hashchange",
f);C=!0}L.push(b);return b};k.$$applicationDestroyed=function(){B(a).off("hashchange popstate",f)};k.$$checkUrlChange=h;k.baseHref=function(){var a=u.attr("href");return a?a.replace(/^(https?\:)?\/\/[^\/]*/,""):""};k.defer=function(a,b){var c;V++;c=n(function(){delete s[c];e(a)},b||0);s[c]=!0;return c};k.defer.cancel=function(a){return s[a]?(delete s[a],p(a),e(A),!0):!1}}function ef(){this.$get=["$window","$log","$sniffer","$document",function(a,b,d,c){return new $f(a,c,b,d)}]}function ff(){this.$get=
function(){function a(a,c){function e(a){a!=n&&(p?p==a&&(p=a.n):p=a,f(a.n,a.p),f(a,n),n=a,n.n=null)}function f(a,b){a!=b&&(a&&(a.p=b),b&&(b.n=a))}if(a in b)throw O("$cacheFactory")("iid",a);var g=0,h=R({},c,{id:a}),k=T(),l=c&&c.capacity||Number.MAX_VALUE,m=T(),n=null,p=null;return b[a]={put:function(a,b){if(!w(b)){if(l<Number.MAX_VALUE){var c=m[a]||(m[a]={key:a});e(c)}a in k||g++;k[a]=b;g>l&&this.remove(p.key);return b}},get:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;e(b)}return k[a]},
remove:function(a){if(l<Number.MAX_VALUE){var b=m[a];if(!b)return;b==n&&(n=b.p);b==p&&(p=b.n);f(b.n,b.p);delete m[a]}a in k&&(delete k[a],g--)},removeAll:function(){k=T();g=0;m=T();n=p=null},destroy:function(){m=h=k=null;delete b[a]},info:function(){return R({},h,{size:g})}}}var b={};a.info=function(){var a={};r(b,function(b,e){a[e]=b.info()});return a};a.get=function(a){return b[a]};return a}}function Bf(){this.$get=["$cacheFactory",function(a){return a("templates")}]}function Fc(a,b){function d(a,
b,c){var d=/^\s*([@&<]|=(\*?))(\??)\s*(\w*)\s*$/,e=T();r(a,function(a,f){if(a in n)e[f]=n[a];else{var g=a.match(d);if(!g)throw fa("iscp",b,f,a,c?"controller bindings definition":"isolate scope definition");e[f]={mode:g[1][0],collection:"*"===g[2],optional:"?"===g[3],attrName:g[4]||f};g[4]&&(n[a]=e[f])}});return e}function c(a){var b=a.charAt(0);if(!b||b!==M(b))throw fa("baddir",a);if(a!==a.trim())throw fa("baddir",a);}function e(a){var b=a.require||a.controller&&a.name;!J(b)&&H(b)&&r(b,function(a,
c){var d=a.match(l);a.substring(d[0].length)||(b[c]=d[0]+c)});return b}var f={},g=/^\s*directive\:\s*([\w\-]+)\s+(.*)$/,h=/(([\w\-]+)(?:\:([^;]+))?;?)/,k=ce("ngSrc,ngSrcset,src,srcset"),l=/^(?:(\^\^?)?(\?)?(\^\^?)?)?/,m=/^(on[a-z]+|formaction)$/,n=T();this.directive=function I(b,d){Ra(b,"directive");F(b)?(c(b),sb(d,"directiveFactory"),f.hasOwnProperty(b)||(f[b]=[],a.factory(b+"Directive",["$injector","$exceptionHandler",function(a,c){var d=[];r(f[b],function(f,g){try{var h=a.invoke(f);z(h)?h={compile:da(h)}:
!h.compile&&h.link&&(h.compile=da(h.link));h.priority=h.priority||0;h.index=g;h.name=h.name||b;h.require=e(h);h.restrict=h.restrict||"EA";h.$$moduleName=f.$$moduleName;d.push(h)}catch(k){c(k)}});return d}])),f[b].push(d)):r(b,uc(I));return this};this.component=function(a,b){function c(a){function e(b){return z(b)||J(b)?function(c,d){return a.invoke(b,this,{$element:c,$attrs:d})}:b}var f=b.template||b.templateUrl?b.template:"",g={controller:d,controllerAs:Xc(b.controller)||b.controllerAs||"$ctrl",
template:e(f),templateUrl:e(b.templateUrl),transclude:b.transclude,scope:{},bindToController:b.bindings||{},restrict:"E",require:b.require};r(b,function(a,b){"$"===b.charAt(0)&&(g[b]=a)});return g}var d=b.controller||function(){};r(b,function(a,b){"$"===b.charAt(0)&&(c[b]=a,z(d)&&(d[b]=a))});c.$inject=["$injector"];return this.directive(a,c)};this.aHrefSanitizationWhitelist=function(a){return x(a)?(b.aHrefSanitizationWhitelist(a),this):b.aHrefSanitizationWhitelist()};this.imgSrcSanitizationWhitelist=
function(a){return x(a)?(b.imgSrcSanitizationWhitelist(a),this):b.imgSrcSanitizationWhitelist()};var p=!0;this.debugInfoEnabled=function(a){return x(a)?(p=a,this):p};var s=10;this.onChangesTtl=function(a){return arguments.length?(s=a,this):s};this.$get=["$injector","$interpolate","$exceptionHandler","$templateRequest","$parse","$controller","$rootScope","$sce","$animate","$$sanitizeUri",function(a,b,c,e,n,y,P,L,C,D){function G(){try{if(!--oa)throw Z=void 0,fa("infchng",s);P.$apply(function(){for(var a=
[],b=0,c=Z.length;b<c;++b)try{Z[b]()}catch(d){a.push(d)}Z=void 0;if(a.length)throw a;})}finally{oa++}}function Aa(a,b){if(b){var c=Object.keys(b),d,e,f;d=0;for(e=c.length;d<e;d++)f=c[d],this[f]=b[f]}else this.$attr={};this.$$element=a}function Q(a,b,c){la.innerHTML="<span "+b+">";b=la.firstChild.attributes;var d=b[0];b.removeNamedItem(d.name);d.value=c;a.attributes.setNamedItem(d)}function N(a,b){try{a.addClass(b)}catch(c){}}function ba(a,b,c,d,e){a instanceof B||(a=B(a));for(var f=/\S+/,g=0,h=a.length;g<
h;g++){var k=a[g];k.nodeType===Na&&k.nodeValue.match(f)&&Pc(k,a[g]=E.document.createElement("span"))}var l=t(a,b,a,c,d,e);ba.$$addScopeClass(a);var n=null;return function(b,c,d){sb(b,"scope");e&&e.needsNewScope&&(b=b.$parent.$new());d=d||{};var f=d.parentBoundTranscludeFn,g=d.transcludeControllers;d=d.futureParentElement;f&&f.$$boundTransclude&&(f=f.$$boundTransclude);n||(n=(d=d&&d[0])?"foreignobject"!==ua(d)&&ka.call(d).match(/SVG/)?"svg":"html":"html");d="html"!==n?B(ca(n,B("<div>").append(a).html())):
c?Pa.clone.call(a):a;if(g)for(var h in g)d.data("$"+h+"Controller",g[h].instance);ba.$$addScopeInfo(d,b);c&&c(d,b);l&&l(b,d,d,f);return d}}function t(a,b,c,d,e,f){function g(a,c,d,e){var f,k,l,n,m,v,q;if(p)for(q=Array(c.length),n=0;n<h.length;n+=3)f=h[n],q[f]=c[f];else q=c;n=0;for(m=h.length;n<m;)k=q[h[n++]],c=h[n++],f=h[n++],c?(c.scope?(l=a.$new(),ba.$$addScopeInfo(B(k),l)):l=a,v=c.transcludeOnThisElement?wa(a,c.transclude,e):!c.templateOnThisElement&&e?e:!e&&b?wa(a,b):null,c(f,l,k,d,v)):f&&f(a,
k.childNodes,void 0,e)}for(var h=[],k,l,n,m,p,v=0;v<a.length;v++){k=new Aa;l=$b(a[v],[],k,0===v?d:void 0,e);(f=l.length?Ta(l,a[v],k,b,c,null,[],[],f):null)&&f.scope&&ba.$$addScopeClass(k.$$element);k=f&&f.terminal||!(n=a[v].childNodes)||!n.length?null:t(n,f?(f.transcludeOnThisElement||!f.templateOnThisElement)&&f.transclude:b);if(f||k)h.push(v,f,k),m=!0,p=p||f;f=null}return m?g:null}function wa(a,b,c){function d(e,f,g,h,k){e||(e=a.$new(!1,k),e.$$transcluded=!0);return b(e,f,{parentBoundTranscludeFn:c,
transcludeControllers:g,futureParentElement:h})}var e=d.$$slots=T(),f;for(f in b.$$slots)e[f]=b.$$slots[f]?wa(a,b.$$slots[f],c):null;return d}function $b(a,b,c,d,e){var f=c.$attr,k;switch(a.nodeType){case 1:Da(b,xa(ua(a)),"E",d,e);for(var l,n,m,p=a.attributes,v=0,q=p&&p.length;v<q;v++){var s=!1,L=!1;l=p[v];k=l.name;n=W(l.value);l=xa(k);if(m=ya.test(l))k=k.replace(Yc,"").substr(8).replace(/_(.)/g,function(a,b){return b.toUpperCase()});(l=l.match(za))&&S(l[1])&&(s=k,L=k.substr(0,k.length-5)+"end",k=
k.substr(0,k.length-6));l=xa(k.toLowerCase());f[l]=k;if(m||!c.hasOwnProperty(l))c[l]=n,Uc(a,l)&&(c[l]=!0);ia(a,b,n,l,m);Da(b,l,"A",d,e,s,L)}a=a.className;H(a)&&(a=a.animVal);if(F(a)&&""!==a)for(;k=h.exec(a);)l=xa(k[2]),Da(b,l,"C",d,e)&&(c[l]=W(k[3])),a=a.substr(k.index+k[0].length);break;case Na:if(11===Ba)for(;a.parentNode&&a.nextSibling&&a.nextSibling.nodeType===Na;)a.nodeValue+=a.nextSibling.nodeValue,a.parentNode.removeChild(a.nextSibling);aa(b,a.nodeValue);break;case 8:try{if(k=g.exec(a.nodeValue))l=
xa(k[1]),Da(b,l,"M",d,e)&&(c[l]=W(k[2]))}catch(C){}}b.sort(Y);return b}function Zc(a,b,c){var d=[],e=0;if(b&&a.hasAttribute&&a.hasAttribute(b)){do{if(!a)throw fa("uterdir",b,c);1==a.nodeType&&(a.hasAttribute(b)&&e++,a.hasAttribute(c)&&e--);d.push(a);a=a.nextSibling}while(0<e)}else d.push(a);return B(d)}function O(a,b,c){return function(d,e,f,g,h){e=Zc(e[0],b,c);return a(d,e,f,g,h)}}function ac(a,b,c,d,e,f){var g;return a?ba(b,c,d,e,f):function(){g||(g=ba(b,c,d,e,f),b=c=f=null);return g.apply(this,
arguments)}}function Ta(a,b,d,e,f,g,h,k,l){function n(a,b,c,d){if(a){c&&(a=O(a,c,d));a.require=u.require;a.directiveName=G;if(s===u||u.$$isolateScope)a=ga(a,{isolateScope:!0});h.push(a)}if(b){c&&(b=O(b,c,d));b.require=u.require;b.directiveName=G;if(s===u||u.$$isolateScope)b=ga(b,{isolateScope:!0});k.push(b)}}function m(a,e,f,g,l){function n(a,b,c,d){var e;Za(a)||(d=c,c=b,b=a,a=void 0);y&&(e=N);c||(c=y?G.parent():G);if(d){var f=l.$$slots[d];if(f)return f(a,b,e,c,t);if(w(f))throw fa("noslot",d,va(G));
}else return l(a,b,e,c,t)}var p,C,u,D,I,N,Q,G;b===f?(g=d,G=d.$$element):(G=B(f),g=new Aa(G,d));I=e;s?D=e.$new(!0):v&&(I=e.$parent);l&&(Q=n,Q.$$boundTransclude=l,Q.isSlotFilled=function(a){return!!l.$$slots[a]});q&&(N=ag(G,g,Q,q,D,e,s));s&&(ba.$$addScopeInfo(G,D,!0,!(L&&(L===s||L===s.$$originalDirective))),ba.$$addScopeClass(G,!0),D.$$isolateBindings=s.$$isolateBindings,C=ha(e,g,D,D.$$isolateBindings,s),C.removeWatches&&D.$on("$destroy",C.removeWatches));for(p in N){C=q[p];u=N[p];var Zb=C.$$bindings.bindToController;
u.bindingInfo=u.identifier&&Zb?ha(I,g,u.instance,Zb,C):{};var P=u();P!==u.instance&&(u.instance=P,G.data("$"+C.name+"Controller",P),u.bindingInfo.removeWatches&&u.bindingInfo.removeWatches(),u.bindingInfo=ha(I,g,u.instance,Zb,C))}r(q,function(a,b){var c=a.require;a.bindToController&&!J(c)&&H(c)&&R(N[b].instance,ib(b,c,G,N))});r(N,function(a){var b=a.instance;if(z(b.$onChanges))try{b.$onChanges(a.bindingInfo.initialChanges)}catch(d){c(d)}if(z(b.$onInit))try{b.$onInit()}catch(e){c(e)}z(b.$onDestroy)&&
I.$on("$destroy",function(){b.$onDestroy()})});p=0;for(C=h.length;p<C;p++)u=h[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);var t=e;s&&(s.template||null===s.templateUrl)&&(t=D);a&&a(t,f.childNodes,void 0,l);for(p=k.length-1;0<=p;p--)u=k[p],ja(u,u.isolateScope?D:e,G,g,u.require&&ib(u.directiveName,u.require,G,N),Q);r(N,function(a){a=a.instance;z(a.$postLink)&&a.$postLink()})}l=l||{};for(var p=-Number.MAX_VALUE,v=l.newScopeDirective,q=l.controllerDirectives,s=l.newIsolateScopeDirective,
L=l.templateDirective,C=l.nonTlbTranscludeDirective,D=!1,I=!1,y=l.hasElementTranscludeDirective,N=d.$$element=B(b),u,G,Q,P=e,t,Ca=!1,wa=!1,x,A=0,E=a.length;A<E;A++){u=a[A];var F=u.$$start,Ta=u.$$end;F&&(N=Zc(b,F,Ta));Q=void 0;if(p>u.priority)break;if(x=u.scope)u.templateUrl||(H(x)?(X("new/isolated scope",s||v,u,N),s=u):X("new/isolated scope",s,u,N)),v=v||u;G=u.name;if(!Ca&&(u.replace&&(u.templateUrl||u.template)||u.transclude&&!u.$$tlb)){for(x=A+1;Ca=a[x++];)if(Ca.transclude&&!Ca.$$tlb||Ca.replace&&
(Ca.templateUrl||Ca.template)){wa=!0;break}Ca=!0}!u.templateUrl&&u.controller&&(x=u.controller,q=q||T(),X("'"+G+"' controller",q[G],u,N),q[G]=u);if(x=u.transclude)if(D=!0,u.$$tlb||(X("transclusion",C,u,N),C=u),"element"==x)y=!0,p=u.priority,Q=N,N=d.$$element=B(ba.$$createComment(G,d[G])),b=N[0],da(f,ta.call(Q,0),b),Q[0].$$parentNode=Q[0].parentNode,P=ac(wa,Q,e,p,g&&g.name,{nonTlbTranscludeDirective:C});else{var M=T();Q=B(Xb(b)).contents();if(H(x)){Q=[];var S=T(),Da=T();r(x,function(a,b){var c="?"===
a.charAt(0);a=c?a.substring(1):a;S[a]=b;M[b]=null;Da[b]=c});r(N.contents(),function(a){var b=S[xa(ua(a))];b?(Da[b]=!0,M[b]=M[b]||[],M[b].push(a)):Q.push(a)});r(Da,function(a,b){if(!a)throw fa("reqslot",b);});for(var Y in M)M[Y]&&(M[Y]=ac(wa,M[Y],e))}N.empty();P=ac(wa,Q,e,void 0,void 0,{needsNewScope:u.$$isolateScope||u.$$newScope});P.$$slots=M}if(u.template)if(I=!0,X("template",L,u,N),L=u,x=z(u.template)?u.template(N,d):u.template,x=ra(x),u.replace){g=u;Q=Vb.test(x)?$c(ca(u.templateNamespace,W(x))):
[];b=Q[0];if(1!=Q.length||1!==b.nodeType)throw fa("tplrt",G,"");da(f,N,b);E={$attr:{}};x=$b(b,[],E);var aa=a.splice(A+1,a.length-(A+1));(s||v)&&ad(x,s,v);a=a.concat(x).concat(aa);U(d,E);E=a.length}else N.html(x);if(u.templateUrl)I=!0,X("template",L,u,N),L=u,u.replace&&(g=u),m=$(a.splice(A,a.length-A),N,d,f,D&&P,h,k,{controllerDirectives:q,newScopeDirective:v!==u&&v,newIsolateScopeDirective:s,templateDirective:L,nonTlbTranscludeDirective:C}),E=a.length;else if(u.compile)try{t=u.compile(N,d,P);var Z=
u.$$originalDirective||u;z(t)?n(null,bb(Z,t),F,Ta):t&&n(bb(Z,t.pre),bb(Z,t.post),F,Ta)}catch(ea){c(ea,va(N))}u.terminal&&(m.terminal=!0,p=Math.max(p,u.priority))}m.scope=v&&!0===v.scope;m.transcludeOnThisElement=D;m.templateOnThisElement=I;m.transclude=P;l.hasElementTranscludeDirective=y;return m}function ib(a,b,c,d){var e;if(F(b)){var f=b.match(l);b=b.substring(f[0].length);var g=f[1]||f[3],f="?"===f[2];"^^"===g?c=c.parent():e=(e=d&&d[b])&&e.instance;if(!e){var h="$"+b+"Controller";e=g?c.inheritedData(h):
c.data(h)}if(!e&&!f)throw fa("ctreq",b,a);}else if(J(b))for(e=[],g=0,f=b.length;g<f;g++)e[g]=ib(a,b[g],c,d);else H(b)&&(e={},r(b,function(b,f){e[f]=ib(a,b,c,d)}));return e||null}function ag(a,b,c,d,e,f,g){var h=T(),k;for(k in d){var l=d[k],n={$scope:l===g||l.$$isolateScope?e:f,$element:a,$attrs:b,$transclude:c},m=l.controller;"@"==m&&(m=b[l.name]);n=y(m,n,!0,l.controllerAs);h[l.name]=n;a.data("$"+l.name+"Controller",n.instance)}return h}function ad(a,b,c){for(var d=0,e=a.length;d<e;d++)a[d]=Rb(a[d],
{$$isolateScope:b,$$newScope:c})}function Da(b,e,g,h,k,l,n){if(e===k)return null;k=null;if(f.hasOwnProperty(e)){var m;e=a.get(e+"Directive");for(var p=0,v=e.length;p<v;p++)try{if(m=e[p],(w(h)||h>m.priority)&&-1!=m.restrict.indexOf(g)){l&&(m=Rb(m,{$$start:l,$$end:n}));if(!m.$$bindings){var q=m,s=m,L=m.name,u={isolateScope:null,bindToController:null};H(s.scope)&&(!0===s.bindToController?(u.bindToController=d(s.scope,L,!0),u.isolateScope={}):u.isolateScope=d(s.scope,L,!1));H(s.bindToController)&&(u.bindToController=
d(s.bindToController,L,!0));if(H(u.bindToController)){var C=s.controller,D=s.controllerAs;if(!C)throw fa("noctrl",L);if(!Xc(C,D))throw fa("noident",L);}var N=q.$$bindings=u;H(N.isolateScope)&&(m.$$isolateBindings=N.isolateScope)}b.push(m);k=m}}catch(G){c(G)}}return k}function S(b){if(f.hasOwnProperty(b))for(var c=a.get(b+"Directive"),d=0,e=c.length;d<e;d++)if(b=c[d],b.multiElement)return!0;return!1}function U(a,b){var c=b.$attr,d=a.$attr;r(a,function(d,e){"$"!=e.charAt(0)&&(b[e]&&b[e]!==d&&(d+=("style"===
e?";":" ")+b[e]),a.$set(e,d,!0,c[e]))});r(b,function(b,e){a.hasOwnProperty(e)||"$"===e.charAt(0)||(a[e]=b,"class"!==e&&"style"!==e&&(d[e]=c[e]))})}function $(a,b,c,d,f,g,h,k){var l=[],n,m,p=b[0],s=a.shift(),q=Rb(s,{templateUrl:null,transclude:null,replace:null,$$originalDirective:s}),L=z(s.templateUrl)?s.templateUrl(b,c):s.templateUrl,u=s.templateNamespace;b.empty();e(L).then(function(e){var v,C;e=ra(e);if(s.replace){e=Vb.test(e)?$c(ca(u,W(e))):[];v=e[0];if(1!=e.length||1!==v.nodeType)throw fa("tplrt",
s.name,L);e={$attr:{}};da(d,b,v);var D=$b(v,[],e);H(s.scope)&&ad(D,!0);a=D.concat(a);U(c,e)}else v=p,b.html(e);a.unshift(q);n=Ta(a,v,c,f,b,s,g,h,k);r(d,function(a,c){a==v&&(d[c]=b[0])});for(m=t(b[0].childNodes,f);l.length;){e=l.shift();C=l.shift();var I=l.shift(),G=l.shift(),D=b[0];if(!e.$$destroyed){if(C!==p){var y=C.className;k.hasElementTranscludeDirective&&s.replace||(D=Xb(v));da(I,B(C),D);N(B(D),y)}C=n.transcludeOnThisElement?wa(e,n.transclude,G):G;n(m,e,D,d,C)}}l=null});return function(a,b,
c,d,e){a=e;b.$$destroyed||(l?l.push(b,c,d,a):(n.transcludeOnThisElement&&(a=wa(b,n.transclude,e)),n(m,b,c,d,a)))}}function Y(a,b){var c=b.priority-a.priority;return 0!==c?c:a.name!==b.name?a.name<b.name?-1:1:a.index-b.index}function X(a,b,c,d){function e(a){return a?" (module: "+a+")":""}if(b)throw fa("multidir",b.name,e(b.$$moduleName),c.name,e(c.$$moduleName),a,va(d));}function aa(a,c){var d=b(c,!0);d&&a.push({priority:0,compile:function(a){a=a.parent();var b=!!a.length;b&&ba.$$addBindingClass(a);
return function(a,c){var e=c.parent();b||ba.$$addBindingClass(e);ba.$$addBindingInfo(e,d.expressions);a.$watch(d,function(a){c[0].nodeValue=a})}}})}function ca(a,b){a=M(a||"html");switch(a){case "svg":case "math":var c=E.document.createElement("div");c.innerHTML="<"+a+">"+b+"</"+a+">";return c.childNodes[0].childNodes;default:return b}}function ea(a,b){if("srcdoc"==b)return L.HTML;var c=ua(a);if("xlinkHref"==b||"form"==c&&"action"==b||"img"!=c&&("src"==b||"ngSrc"==b))return L.RESOURCE_URL}function ia(a,
c,d,e,f){var g=ea(a,e);f=k[e]||f;var h=b(d,!0,g,f);if(h){if("multiple"===e&&"select"===ua(a))throw fa("selmulti",va(a));c.push({priority:100,compile:function(){return{pre:function(a,c,k){c=k.$$observers||(k.$$observers=T());if(m.test(e))throw fa("nodomevents");var l=k[e];l!==d&&(h=l&&b(l,!0,g,f),d=l);h&&(k[e]=h(a),(c[e]||(c[e]=[])).$$inter=!0,(k.$$observers&&k.$$observers[e].$$scope||a).$watch(h,function(a,b){"class"===e&&a!=b?k.$updateClass(a,b):k.$set(e,a)}))}}}})}}function da(a,b,c){var d=b[0],
e=b.length,f=d.parentNode,g,h;if(a)for(g=0,h=a.length;g<h;g++)if(a[g]==d){a[g++]=c;h=g+e-1;for(var k=a.length;g<k;g++,h++)h<k?a[g]=a[h]:delete a[g];a.length-=e-1;a.context===d&&(a.context=c);break}f&&f.replaceChild(c,d);a=E.document.createDocumentFragment();for(g=0;g<e;g++)a.appendChild(b[g]);B.hasData(d)&&(B.data(c,B.data(d)),B(d).off("$destroy"));B.cleanData(a.querySelectorAll("*"));for(g=1;g<e;g++)delete b[g];b[0]=c;b.length=1}function ga(a,b){return R(function(){return a.apply(null,arguments)},
a,b)}function ja(a,b,d,e,f,g){try{a(b,d,e,f,g)}catch(h){c(h,va(d))}}function ha(a,c,d,e,f){function g(b,c,e){z(d.$onChanges)&&c!==e&&(Z||(a.$$postDigest(G),Z=[]),m||(m={},Z.push(h)),m[b]&&(e=m[b].previousValue),m[b]=new Fb(e,c))}function h(){d.$onChanges(m);m=void 0}var k=[],l={},m;r(e,function(e,h){var m=e.attrName,p=e.optional,v,s,L,C;switch(e.mode){case "@":p||sa.call(c,m)||(d[h]=c[m]=void 0);c.$observe(m,function(a){if(F(a)||Ea(a))g(h,a,d[h]),d[h]=a});c.$$observers[m].$$scope=a;v=c[m];F(v)?d[h]=
b(v)(a):Ea(v)&&(d[h]=v);l[h]=new Fb(bc,d[h]);break;case "=":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;s=n(c[m]);C=s.literal?na:function(a,b){return a===b||a!==a&&b!==b};L=s.assign||function(){v=d[h]=s(a);throw fa("nonassign",c[m],m,f.name);};v=d[h]=s(a);p=function(b){C(b,d[h])||(C(b,v)?L(a,b=d[h]):d[h]=b);return v=b};p.$stateful=!0;p=e.collection?a.$watchCollection(c[m],p):a.$watch(n(c[m],p),null,s.literal);k.push(p);break;case "<":if(!sa.call(c,m)){if(p)break;c[m]=void 0}if(p&&!c[m])break;
s=n(c[m]);var D=d[h]=s(a);l[h]=new Fb(bc,d[h]);p=a.$watch(s,function(a,b){if(b===a){if(b===D)return;b=D}g(h,a,b);d[h]=a},s.literal);k.push(p);break;case "&":s=c.hasOwnProperty(m)?n(c[m]):A;if(s===A&&p)break;d[h]=function(b){return s(a,b)}}});return{initialChanges:l,removeWatches:k.length&&function(){for(var a=0,b=k.length;a<b;++a)k[a]()}}}var ma=/^\w/,la=E.document.createElement("div"),oa=s,Z;Aa.prototype={$normalize:xa,$addClass:function(a){a&&0<a.length&&C.addClass(this.$$element,a)},$removeClass:function(a){a&&
0<a.length&&C.removeClass(this.$$element,a)},$updateClass:function(a,b){var c=bd(a,b);c&&c.length&&C.addClass(this.$$element,c);(c=bd(b,a))&&c.length&&C.removeClass(this.$$element,c)},$set:function(a,b,d,e){var f=Uc(this.$$element[0],a),g=cd[a],h=a;f?(this.$$element.prop(a,b),e=f):g&&(this[g]=b,h=g);this[a]=b;e?this.$attr[a]=e:(e=this.$attr[a])||(this.$attr[a]=e=Cc(a,"-"));f=ua(this.$$element);if("a"===f&&("href"===a||"xlinkHref"===a)||"img"===f&&"src"===a)this[a]=b=D(b,"src"===a);else if("img"===
f&&"srcset"===a&&x(b)){for(var f="",g=W(b),k=/(\s+\d+x\s*,|\s+\d+w\s*,|\s+,|,\s+)/,k=/\s/.test(g)?k:/(,)/,g=g.split(k),k=Math.floor(g.length/2),l=0;l<k;l++)var n=2*l,f=f+D(W(g[n]),!0),f=f+(" "+W(g[n+1]));g=W(g[2*l]).split(/\s/);f+=D(W(g[0]),!0);2===g.length&&(f+=" "+W(g[1]));this[a]=b=f}!1!==d&&(null===b||w(b)?this.$$element.removeAttr(e):ma.test(e)?this.$$element.attr(e,b):Q(this.$$element[0],e,b));(a=this.$$observers)&&r(a[h],function(a){try{a(b)}catch(d){c(d)}})},$observe:function(a,b){var c=this,
d=c.$$observers||(c.$$observers=T()),e=d[a]||(d[a]=[]);e.push(b);P.$evalAsync(function(){e.$$inter||!c.hasOwnProperty(a)||w(c[a])||b(c[a])});return function(){$a(e,b)}}};var pa=b.startSymbol(),qa=b.endSymbol(),ra="{{"==pa&&"}}"==qa?Ya:function(a){return a.replace(/\{\{/g,pa).replace(/}}/g,qa)},ya=/^ngAttr[A-Z]/,za=/^(.+)Start$/;ba.$$addBindingInfo=p?function(a,b){var c=a.data("$binding")||[];J(b)?c=c.concat(b):c.push(b);a.data("$binding",c)}:A;ba.$$addBindingClass=p?function(a){N(a,"ng-binding")}:
A;ba.$$addScopeInfo=p?function(a,b,c,d){a.data(c?d?"$isolateScopeNoTemplate":"$isolateScope":"$scope",b)}:A;ba.$$addScopeClass=p?function(a,b){N(a,b?"ng-isolate-scope":"ng-scope")}:A;ba.$$createComment=function(a,b){var c="";p&&(c=" "+(a||"")+": ",b&&(c+=b+" "));return E.document.createComment(c)};return ba}]}function Fb(a,b){this.previousValue=a;this.currentValue=b}function xa(a){return eb(a.replace(Yc,""))}function bd(a,b){var d="",c=a.split(/\s+/),e=b.split(/\s+/),f=0;a:for(;f<c.length;f++){for(var g=
c[f],h=0;h<e.length;h++)if(g==e[h])continue a;d+=(0<d.length?" ":"")+g}return d}function $c(a){a=B(a);var b=a.length;if(1>=b)return a;for(;b--;)8===a[b].nodeType&&bg.call(a,b,1);return a}function Xc(a,b){if(b&&F(b))return b;if(F(a)){var d=dd.exec(a);if(d)return d[3]}}function gf(){var a={},b=!1;this.has=function(b){return a.hasOwnProperty(b)};this.register=function(b,c){Ra(b,"controller");H(b)?R(a,b):a[b]=c};this.allowGlobals=function(){b=!0};this.$get=["$injector","$window",function(d,c){function e(a,
b,c,d){if(!a||!H(a.$scope))throw O("$controller")("noscp",d,b);a.$scope[b]=c}return function(f,g,h,k){var l,m,n;h=!0===h;k&&F(k)&&(n=k);if(F(f)){k=f.match(dd);if(!k)throw cg("ctrlfmt",f);m=k[1];n=n||k[3];f=a.hasOwnProperty(m)?a[m]:Ec(g.$scope,m,!0)||(b?Ec(c,m,!0):void 0);Qa(f,m,!0)}if(h)return h=(J(f)?f[f.length-1]:f).prototype,l=Object.create(h||null),n&&e(g,n,l,m||f.name),R(function(){var a=d.invoke(f,l,g,m);a!==l&&(H(a)||z(a))&&(l=a,n&&e(g,n,l,m||f.name));return l},{instance:l,identifier:n});l=
d.instantiate(f,g,m);n&&e(g,n,l,m||f.name);return l}}]}function hf(){this.$get=["$window",function(a){return B(a.document)}]}function jf(){this.$get=["$log",function(a){return function(b,d){a.error.apply(a,arguments)}}]}function cc(a){return H(a)?ia(a)?a.toISOString():cb(a):a}function of(){this.$get=function(){return function(a){if(!a)return"";var b=[];tc(a,function(a,c){null===a||w(a)||(J(a)?r(a,function(a){b.push(ja(c)+"="+ja(cc(a)))}):b.push(ja(c)+"="+ja(cc(a))))});return b.join("&")}}}function pf(){this.$get=
function(){return function(a){function b(a,e,f){null===a||w(a)||(J(a)?r(a,function(a,c){b(a,e+"["+(H(a)?c:"")+"]")}):H(a)&&!ia(a)?tc(a,function(a,c){b(a,e+(f?"":"[")+c+(f?"":"]"))}):d.push(ja(e)+"="+ja(cc(a))))}if(!a)return"";var d=[];b(a,"",!0);return d.join("&")}}}function dc(a,b){if(F(a)){var d=a.replace(dg,"").trim();if(d){var c=b("Content-Type");(c=c&&0===c.indexOf(ed))||(c=(c=d.match(eg))&&fg[c[0]].test(d));c&&(a=xc(d))}}return a}function fd(a){var b=T(),d;F(a)?r(a.split("\n"),function(a){d=
a.indexOf(":");var e=M(W(a.substr(0,d)));a=W(a.substr(d+1));e&&(b[e]=b[e]?b[e]+", "+a:a)}):H(a)&&r(a,function(a,d){var f=M(d),g=W(a);f&&(b[f]=b[f]?b[f]+", "+g:g)});return b}function gd(a){var b;return function(d){b||(b=fd(a));return d?(d=b[M(d)],void 0===d&&(d=null),d):b}}function hd(a,b,d,c){if(z(c))return c(a,b,d);r(c,function(c){a=c(a,b,d)});return a}function nf(){var a=this.defaults={transformResponse:[dc],transformRequest:[function(a){return H(a)&&"[object File]"!==ka.call(a)&&"[object Blob]"!==
ka.call(a)&&"[object FormData]"!==ka.call(a)?cb(a):a}],headers:{common:{Accept:"application/json, text/plain, */*"},post:ga(ec),put:ga(ec),patch:ga(ec)},xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",paramSerializer:"$httpParamSerializer"},b=!1;this.useApplyAsync=function(a){return x(a)?(b=!!a,this):b};var d=!0;this.useLegacyPromiseExtensions=function(a){return x(a)?(d=!!a,this):d};var c=this.interceptors=[];this.$get=["$httpBackend","$$cookieReader","$cacheFactory","$rootScope","$q","$injector",
function(e,f,g,h,k,l){function m(b){function c(a){var b=R({},a);b.data=hd(a.data,a.headers,a.status,f.transformResponse);a=a.status;return 200<=a&&300>a?b:k.reject(b)}function e(a,b){var c,d={};r(a,function(a,e){z(a)?(c=a(b),null!=c&&(d[e]=c)):d[e]=a});return d}if(!H(b))throw O("$http")("badreq",b);if(!F(b.url))throw O("$http")("badreq",b.url);var f=R({method:"get",transformRequest:a.transformRequest,transformResponse:a.transformResponse,paramSerializer:a.paramSerializer},b);f.headers=function(b){var c=
a.headers,d=R({},b.headers),f,g,h,c=R({},c.common,c[M(b.method)]);a:for(f in c){g=M(f);for(h in d)if(M(h)===g)continue a;d[f]=c[f]}return e(d,ga(b))}(b);f.method=ub(f.method);f.paramSerializer=F(f.paramSerializer)?l.get(f.paramSerializer):f.paramSerializer;var g=[function(b){var d=b.headers,e=hd(b.data,gd(d),void 0,b.transformRequest);w(e)&&r(d,function(a,b){"content-type"===M(b)&&delete d[b]});w(b.withCredentials)&&!w(a.withCredentials)&&(b.withCredentials=a.withCredentials);return n(b,e).then(c,
c)},void 0],h=k.when(f);for(r(V,function(a){(a.request||a.requestError)&&g.unshift(a.request,a.requestError);(a.response||a.responseError)&&g.push(a.response,a.responseError)});g.length;){b=g.shift();var m=g.shift(),h=h.then(b,m)}d?(h.success=function(a){Qa(a,"fn");h.then(function(b){a(b.data,b.status,b.headers,f)});return h},h.error=function(a){Qa(a,"fn");h.then(null,function(b){a(b.data,b.status,b.headers,f)});return h}):(h.success=id("success"),h.error=id("error"));return h}function n(c,d){function g(a){if(a){var c=
{};r(a,function(a,d){c[d]=function(c){function d(){a(c)}b?h.$applyAsync(d):h.$$phase?d():h.$apply(d)}});return c}}function l(a,c,d,e){function f(){n(c,a,d,e)}D&&(200<=a&&300>a?D.put(Q,[a,c,fd(d),e]):D.remove(Q));b?h.$applyAsync(f):(f(),h.$$phase||h.$apply())}function n(a,b,d,e){b=-1<=b?b:0;(200<=b&&300>b?L.resolve:L.reject)({data:a,status:b,headers:gd(d),config:c,statusText:e})}function y(a){n(a.data,a.status,ga(a.headers()),a.statusText)}function V(){var a=m.pendingRequests.indexOf(c);-1!==a&&m.pendingRequests.splice(a,
1)}var L=k.defer(),C=L.promise,D,G,Aa=c.headers,Q=p(c.url,c.paramSerializer(c.params));m.pendingRequests.push(c);C.then(V,V);!c.cache&&!a.cache||!1===c.cache||"GET"!==c.method&&"JSONP"!==c.method||(D=H(c.cache)?c.cache:H(a.cache)?a.cache:s);D&&(G=D.get(Q),x(G)?G&&z(G.then)?G.then(y,y):J(G)?n(G[1],G[0],ga(G[2]),G[3]):n(G,200,{},"OK"):D.put(Q,C));w(G)&&((G=jd(c.url)?f()[c.xsrfCookieName||a.xsrfCookieName]:void 0)&&(Aa[c.xsrfHeaderName||a.xsrfHeaderName]=G),e(c.method,Q,d,l,Aa,c.timeout,c.withCredentials,
c.responseType,g(c.eventHandlers),g(c.uploadEventHandlers)));return C}function p(a,b){0<b.length&&(a+=(-1==a.indexOf("?")?"?":"&")+b);return a}var s=g("$http");a.paramSerializer=F(a.paramSerializer)?l.get(a.paramSerializer):a.paramSerializer;var V=[];r(c,function(a){V.unshift(F(a)?l.get(a):l.invoke(a))});m.pendingRequests=[];(function(a){r(arguments,function(a){m[a]=function(b,c){return m(R({},c||{},{method:a,url:b}))}})})("get","delete","head","jsonp");(function(a){r(arguments,function(a){m[a]=function(b,
c,d){return m(R({},d||{},{method:a,url:b,data:c}))}})})("post","put","patch");m.defaults=a;return m}]}function rf(){this.$get=function(){return function(){return new E.XMLHttpRequest}}}function qf(){this.$get=["$browser","$window","$document","$xhrFactory",function(a,b,d,c){return gg(a,c,a.defer,b.angular.callbacks,d[0])}]}function gg(a,b,d,c,e){function f(a,b,d){var f=e.createElement("script"),m=null;f.type="text/javascript";f.src=a;f.async=!0;m=function(a){f.removeEventListener("load",m,!1);f.removeEventListener("error",
m,!1);e.body.removeChild(f);f=null;var g=-1,s="unknown";a&&("load"!==a.type||c[b].called||(a={type:"error"}),s=a.type,g="error"===a.type?404:200);d&&d(g,s)};f.addEventListener("load",m,!1);f.addEventListener("error",m,!1);e.body.appendChild(f);return m}return function(e,h,k,l,m,n,p,s,V,I){function q(){u&&u();y&&y.abort()}function K(b,c,e,f,g){x(L)&&d.cancel(L);u=y=null;b(c,e,f,g);a.$$completeOutstandingRequest(A)}a.$$incOutstandingRequestCount();h=h||a.url();if("jsonp"==M(e)){var v="_"+(c.counter++).toString(36);
c[v]=function(a){c[v].data=a;c[v].called=!0};var u=f(h.replace("JSON_CALLBACK","angular.callbacks."+v),v,function(a,b){K(l,a,c[v].data,"",b);c[v]=A})}else{var y=b(e,h);y.open(e,h,!0);r(m,function(a,b){x(a)&&y.setRequestHeader(b,a)});y.onload=function(){var a=y.statusText||"",b="response"in y?y.response:y.responseText,c=1223===y.status?204:y.status;0===c&&(c=b?200:"file"==qa(h).protocol?404:0);K(l,c,b,y.getAllResponseHeaders(),a)};e=function(){K(l,-1,null,null,"")};y.onerror=e;y.onabort=e;r(V,function(a,
b){y.addEventListener(b,a)});r(I,function(a,b){y.upload.addEventListener(b,a)});p&&(y.withCredentials=!0);if(s)try{y.responseType=s}catch(P){if("json"!==s)throw P;}y.send(w(k)?null:k)}if(0<n)var L=d(q,n);else n&&z(n.then)&&n.then(q)}}function lf(){var a="{{",b="}}";this.startSymbol=function(b){return b?(a=b,this):a};this.endSymbol=function(a){return a?(b=a,this):b};this.$get=["$parse","$exceptionHandler","$sce",function(d,c,e){function f(a){return"\\\\\\"+a}function g(c){return c.replace(n,a).replace(p,
b)}function h(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function k(f,k,n,p){function r(a){try{var b=a;a=n?e.getTrusted(n,b):e.valueOf(b);var d;if(p&&!x(a))d=a;else if(null==a)d="";else{switch(typeof a){case "string":break;case "number":a=""+a;break;default:a=cb(a)}d=a}return d}catch(g){c(Ka.interr(f,g))}}if(!f.length||-1===f.indexOf(a)){var v;k||(k=g(f),v=da(k),v.exp=f,v.expressions=[],v.$$watchDelegate=h);return v}p=!!p;var u,y,P=0,L=[],C=[];v=f.length;for(var D=[],G=[];P<
v;)if(-1!=(u=f.indexOf(a,P))&&-1!=(y=f.indexOf(b,u+l)))P!==u&&D.push(g(f.substring(P,u))),P=f.substring(u+l,y),L.push(P),C.push(d(P,r)),P=y+m,G.push(D.length),D.push("");else{P!==v&&D.push(g(f.substring(P)));break}n&&1<D.length&&Ka.throwNoconcat(f);if(!k||L.length){var Aa=function(a){for(var b=0,c=L.length;b<c;b++){if(p&&w(a[b]))return;D[G[b]]=a[b]}return D.join("")};return R(function(a){var b=0,d=L.length,e=Array(d);try{for(;b<d;b++)e[b]=C[b](a);return Aa(e)}catch(g){c(Ka.interr(f,g))}},{exp:f,expressions:L,
$$watchDelegate:function(a,b){var c;return a.$watchGroup(C,function(d,e){var f=Aa(d);z(b)&&b.call(this,f,d!==e?c:f,a);c=f})}})}}var l=a.length,m=b.length,n=new RegExp(a.replace(/./g,f),"g"),p=new RegExp(b.replace(/./g,f),"g");k.startSymbol=function(){return a};k.endSymbol=function(){return b};return k}]}function mf(){this.$get=["$rootScope","$window","$q","$$q","$browser",function(a,b,d,c,e){function f(f,k,l,m){function n(){p?f.apply(null,s):f(q)}var p=4<arguments.length,s=p?ta.call(arguments,4):
[],r=b.setInterval,I=b.clearInterval,q=0,K=x(m)&&!m,v=(K?c:d).defer(),u=v.promise;l=x(l)?l:0;u.$$intervalId=r(function(){K?e.defer(n):a.$evalAsync(n);v.notify(q++);0<l&&q>=l&&(v.resolve(q),I(u.$$intervalId),delete g[u.$$intervalId]);K||a.$apply()},k);g[u.$$intervalId]=v;return u}var g={};f.cancel=function(a){return a&&a.$$intervalId in g?(g[a.$$intervalId].reject("canceled"),b.clearInterval(a.$$intervalId),delete g[a.$$intervalId],!0):!1};return f}]}function fc(a){a=a.split("/");for(var b=a.length;b--;)a[b]=
qb(a[b]);return a.join("/")}function kd(a,b){var d=qa(a);b.$$protocol=d.protocol;b.$$host=d.hostname;b.$$port=aa(d.port)||hg[d.protocol]||null}function ld(a,b){var d="/"!==a.charAt(0);d&&(a="/"+a);var c=qa(a);b.$$path=decodeURIComponent(d&&"/"===c.pathname.charAt(0)?c.pathname.substring(1):c.pathname);b.$$search=Ac(c.search);b.$$hash=decodeURIComponent(c.hash);b.$$path&&"/"!=b.$$path.charAt(0)&&(b.$$path="/"+b.$$path)}function la(a,b){if(0===b.lastIndexOf(a,0))return b.substr(a.length)}function Ja(a){var b=
a.indexOf("#");return-1==b?a:a.substr(0,b)}function jb(a){return a.replace(/(#.+)|#$/,"$1")}function gc(a,b,d){this.$$html5=!0;d=d||"";kd(a,this);this.$$parse=function(a){var d=la(b,a);if(!F(d))throw Gb("ipthprfx",a,b);ld(d,this);this.$$path||(this.$$path="/");this.$$compose()};this.$$compose=function(){var a=Tb(this.$$search),d=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(a?"?"+a:"")+d;this.$$absUrl=b+this.$$url.substr(1)};this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),
!0;var f,g;x(f=la(a,c))?(g=f,g=x(f=la(d,f))?b+(la("/",f)||f):a+g):x(f=la(b,c))?g=b+f:b==c+"/"&&(g=b);g&&this.$$parse(g);return!!g}}function hc(a,b,d){kd(a,this);this.$$parse=function(c){var e=la(a,c)||la(b,c),f;w(e)||"#"!==e.charAt(0)?this.$$html5?f=e:(f="",w(e)&&(a=c,this.replace())):(f=la(d,e),w(f)&&(f=e));ld(f,this);c=this.$$path;var e=a,g=/^\/[A-Z]:(\/.*)/;0===f.lastIndexOf(e,0)&&(f=f.replace(e,""));g.exec(f)||(c=(f=g.exec(c))?f[1]:c);this.$$path=c;this.$$compose()};this.$$compose=function(){var b=
Tb(this.$$search),e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+(this.$$url?d+this.$$url:"")};this.$$parseLinkUrl=function(b,d){return Ja(a)==Ja(b)?(this.$$parse(b),!0):!1}}function md(a,b,d){this.$$html5=!0;hc.apply(this,arguments);this.$$parseLinkUrl=function(c,e){if(e&&"#"===e[0])return this.hash(e.slice(1)),!0;var f,g;a==Ja(c)?f=c:(g=la(b,c))?f=a+d+g:b===c+"/"&&(f=b);f&&this.$$parse(f);return!!f};this.$$compose=function(){var b=Tb(this.$$search),
e=this.$$hash?"#"+qb(this.$$hash):"";this.$$url=fc(this.$$path)+(b?"?"+b:"")+e;this.$$absUrl=a+d+this.$$url}}function Hb(a){return function(){return this[a]}}function nd(a,b){return function(d){if(w(d))return this[a];this[a]=b(d);this.$$compose();return this}}function sf(){var a="",b={enabled:!1,requireBase:!0,rewriteLinks:!0};this.hashPrefix=function(b){return x(b)?(a=b,this):a};this.html5Mode=function(a){return Ea(a)?(b.enabled=a,this):H(a)?(Ea(a.enabled)&&(b.enabled=a.enabled),Ea(a.requireBase)&&
(b.requireBase=a.requireBase),Ea(a.rewriteLinks)&&(b.rewriteLinks=a.rewriteLinks),this):b};this.$get=["$rootScope","$browser","$sniffer","$rootElement","$window",function(d,c,e,f,g){function h(a,b,d){var e=l.url(),f=l.$$state;try{c.url(a,b,d),l.$$state=c.state()}catch(g){throw l.url(e),l.$$state=f,g;}}function k(a,b){d.$broadcast("$locationChangeSuccess",l.absUrl(),a,l.$$state,b)}var l,m;m=c.baseHref();var n=c.url(),p;if(b.enabled){if(!m&&b.requireBase)throw Gb("nobase");p=n.substring(0,n.indexOf("/",
n.indexOf("//")+2))+(m||"/");m=e.history?gc:md}else p=Ja(n),m=hc;var s=p.substr(0,Ja(p).lastIndexOf("/")+1);l=new m(p,s,"#"+a);l.$$parseLinkUrl(n,n);l.$$state=c.state();var r=/^\s*(javascript|mailto):/i;f.on("click",function(a){if(b.rewriteLinks&&!a.ctrlKey&&!a.metaKey&&!a.shiftKey&&2!=a.which&&2!=a.button){for(var e=B(a.target);"a"!==ua(e[0]);)if(e[0]===f[0]||!(e=e.parent())[0])return;var h=e.prop("href"),k=e.attr("href")||e.attr("xlink:href");H(h)&&"[object SVGAnimatedString]"===h.toString()&&(h=
qa(h.animVal).href);r.test(h)||!h||e.attr("target")||a.isDefaultPrevented()||!l.$$parseLinkUrl(h,k)||(a.preventDefault(),l.absUrl()!=c.url()&&(d.$apply(),g.angular["ff-684208-preventDefault"]=!0))}});jb(l.absUrl())!=jb(n)&&c.url(l.absUrl(),!0);var I=!0;c.onUrlChange(function(a,b){w(la(s,a))?g.location.href=a:(d.$evalAsync(function(){var c=l.absUrl(),e=l.$$state,f;a=jb(a);l.$$parse(a);l.$$state=b;f=d.$broadcast("$locationChangeStart",a,c,b,e).defaultPrevented;l.absUrl()===a&&(f?(l.$$parse(c),l.$$state=
e,h(c,!1,e)):(I=!1,k(c,e)))}),d.$$phase||d.$digest())});d.$watch(function(){var a=jb(c.url()),b=jb(l.absUrl()),f=c.state(),g=l.$$replace,n=a!==b||l.$$html5&&e.history&&f!==l.$$state;if(I||n)I=!1,d.$evalAsync(function(){var b=l.absUrl(),c=d.$broadcast("$locationChangeStart",b,a,l.$$state,f).defaultPrevented;l.absUrl()===b&&(c?(l.$$parse(a),l.$$state=f):(n&&h(b,g,f===l.$$state?null:l.$$state),k(a,f)))});l.$$replace=!1});return l}]}function tf(){var a=!0,b=this;this.debugEnabled=function(b){return x(b)?
(a=b,this):a};this.$get=["$window",function(d){function c(a){a instanceof Error&&(a.stack?a=a.message&&-1===a.stack.indexOf(a.message)?"Error: "+a.message+"\n"+a.stack:a.stack:a.sourceURL&&(a=a.message+"\n"+a.sourceURL+":"+a.line));return a}function e(a){var b=d.console||{},e=b[a]||b.log||A;a=!1;try{a=!!e.apply}catch(k){}return a?function(){var a=[];r(arguments,function(b){a.push(c(b))});return e.apply(b,a)}:function(a,b){e(a,null==b?"":b)}}return{log:e("log"),info:e("info"),warn:e("warn"),error:e("error"),
debug:function(){var c=e("debug");return function(){a&&c.apply(b,arguments)}}()}}]}function Ua(a,b){if("__defineGetter__"===a||"__defineSetter__"===a||"__lookupGetter__"===a||"__lookupSetter__"===a||"__proto__"===a)throw ca("isecfld",b);return a}function ig(a){return a+""}function ra(a,b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a.window===a)throw ca("isecwindow",b);if(a.children&&(a.nodeName||a.prop&&a.attr&&a.find))throw ca("isecdom",b);if(a===Object)throw ca("isecobj",b);}return a}function od(a,
b){if(a){if(a.constructor===a)throw ca("isecfn",b);if(a===jg||a===kg||a===lg)throw ca("isecff",b);}}function Ib(a,b){if(a&&(a===(0).constructor||a===(!1).constructor||a==="".constructor||a==={}.constructor||a===[].constructor||a===Function.constructor))throw ca("isecaf",b);}function mg(a,b){return"undefined"!==typeof a?a:b}function pd(a,b){return"undefined"===typeof a?b:"undefined"===typeof b?a:a+b}function $(a,b){var d,c;switch(a.type){case t.Program:d=!0;r(a.body,function(a){$(a.expression,b);d=
d&&a.expression.constant});a.constant=d;break;case t.Literal:a.constant=!0;a.toWatch=[];break;case t.UnaryExpression:$(a.argument,b);a.constant=a.argument.constant;a.toWatch=a.argument.toWatch;break;case t.BinaryExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.left.toWatch.concat(a.right.toWatch);break;case t.LogicalExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=a.constant?[]:[a];break;case t.ConditionalExpression:$(a.test,
b);$(a.alternate,b);$(a.consequent,b);a.constant=a.test.constant&&a.alternate.constant&&a.consequent.constant;a.toWatch=a.constant?[]:[a];break;case t.Identifier:a.constant=!1;a.toWatch=[a];break;case t.MemberExpression:$(a.object,b);a.computed&&$(a.property,b);a.constant=a.object.constant&&(!a.computed||a.property.constant);a.toWatch=[a];break;case t.CallExpression:d=a.filter?!b(a.callee.name).$stateful:!1;c=[];r(a.arguments,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});
a.constant=d;a.toWatch=a.filter&&!b(a.callee.name).$stateful?c:[a];break;case t.AssignmentExpression:$(a.left,b);$(a.right,b);a.constant=a.left.constant&&a.right.constant;a.toWatch=[a];break;case t.ArrayExpression:d=!0;c=[];r(a.elements,function(a){$(a,b);d=d&&a.constant;a.constant||c.push.apply(c,a.toWatch)});a.constant=d;a.toWatch=c;break;case t.ObjectExpression:d=!0;c=[];r(a.properties,function(a){$(a.value,b);d=d&&a.value.constant&&!a.computed;a.value.constant||c.push.apply(c,a.value.toWatch)});
a.constant=d;a.toWatch=c;break;case t.ThisExpression:a.constant=!1;a.toWatch=[];break;case t.LocalsExpression:a.constant=!1,a.toWatch=[]}}function qd(a){if(1==a.length){a=a[0].expression;var b=a.toWatch;return 1!==b.length?b:b[0]!==a?b:void 0}}function rd(a){return a.type===t.Identifier||a.type===t.MemberExpression}function sd(a){if(1===a.body.length&&rd(a.body[0].expression))return{type:t.AssignmentExpression,left:a.body[0].expression,right:{type:t.NGValueParameter},operator:"="}}function td(a){return 0===
a.body.length||1===a.body.length&&(a.body[0].expression.type===t.Literal||a.body[0].expression.type===t.ArrayExpression||a.body[0].expression.type===t.ObjectExpression)}function ud(a,b){this.astBuilder=a;this.$filter=b}function vd(a,b){this.astBuilder=a;this.$filter=b}function Jb(a){return"constructor"==a}function ic(a){return z(a.valueOf)?a.valueOf():ng.call(a)}function uf(){var a=T(),b=T(),d={"true":!0,"false":!1,"null":null,undefined:void 0},c,e;this.addLiteral=function(a,b){d[a]=b};this.setIdentifierFns=
function(a,b){c=a;e=b;return this};this.$get=["$filter",function(f){function g(c,d,e){var g,k,C;e=e||K;switch(typeof c){case "string":C=c=c.trim();var D=e?b:a;g=D[C];if(!g){":"===c.charAt(0)&&":"===c.charAt(1)&&(k=!0,c=c.substring(2));g=e?q:I;var G=new jc(g);g=(new kc(G,f,g)).parse(c);g.constant?g.$$watchDelegate=p:k?g.$$watchDelegate=g.literal?n:m:g.inputs&&(g.$$watchDelegate=l);e&&(g=h(g));D[C]=g}return s(g,d);case "function":return s(c,d);default:return s(A,d)}}function h(a){function b(c,d,e,f){var g=
K;K=!0;try{return a(c,d,e,f)}finally{K=g}}if(!a)return a;b.$$watchDelegate=a.$$watchDelegate;b.assign=h(a.assign);b.constant=a.constant;b.literal=a.literal;for(var c=0;a.inputs&&c<a.inputs.length;++c)a.inputs[c]=h(a.inputs[c]);b.inputs=a.inputs;return b}function k(a,b){return null==a||null==b?a===b:"object"===typeof a&&(a=ic(a),"object"===typeof a)?!1:a===b||a!==a&&b!==b}function l(a,b,c,d,e){var f=d.inputs,g;if(1===f.length){var h=k,f=f[0];return a.$watch(function(a){var b=f(a);k(b,h)||(g=d(a,void 0,
void 0,[b]),h=b&&ic(b));return g},b,c,e)}for(var l=[],n=[],m=0,p=f.length;m<p;m++)l[m]=k,n[m]=null;return a.$watch(function(a){for(var b=!1,c=0,e=f.length;c<e;c++){var h=f[c](a);if(b||(b=!k(h,l[c])))n[c]=h,l[c]=h&&ic(h)}b&&(g=d(a,void 0,void 0,n));return g},b,c,e)}function m(a,b,c,d){var e,f;return e=a.$watch(function(a){return d(a)},function(a,c,d){f=a;z(b)&&b.apply(this,arguments);x(a)&&d.$$postDigest(function(){x(f)&&e()})},c)}function n(a,b,c,d){function e(a){var b=!0;r(a,function(a){x(a)||(b=
!1)});return b}var f,g;return f=a.$watch(function(a){return d(a)},function(a,c,d){g=a;z(b)&&b.call(this,a,c,d);e(a)&&d.$$postDigest(function(){e(g)&&f()})},c)}function p(a,b,c,d){var e;return e=a.$watch(function(a){e();return d(a)},b,c)}function s(a,b){if(!b)return a;var c=a.$$watchDelegate,d=!1,c=c!==n&&c!==m?function(c,e,f,g){f=d&&g?g[0]:a(c,e,f,g);return b(f,c,e)}:function(c,d,e,f){e=a(c,d,e,f);c=b(e,c,d);return x(e)?c:e};a.$$watchDelegate&&a.$$watchDelegate!==l?c.$$watchDelegate=a.$$watchDelegate:
b.$stateful||(c.$$watchDelegate=l,d=!a.inputs,c.inputs=a.inputs?a.inputs:[a]);return c}var V=Fa().noUnsafeEval,I={csp:V,expensiveChecks:!1,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},q={csp:V,expensiveChecks:!0,literals:Z(d),isIdentifierStart:z(c)&&c,isIdentifierContinue:z(e)&&e},K=!1;g.$$runningExpensiveChecks=function(){return K};return g}]}function wf(){this.$get=["$rootScope","$exceptionHandler",function(a,b){return wd(function(b){a.$evalAsync(b)},b)}]}function xf(){this.$get=
["$browser","$exceptionHandler",function(a,b){return wd(function(b){a.defer(b)},b)}]}function wd(a,b){function d(){this.$$state={status:0}}function c(a,b){return function(c){b.call(a,c)}}function e(c){!c.processScheduled&&c.pending&&(c.processScheduled=!0,a(function(){var a,d,e;e=c.pending;c.processScheduled=!1;c.pending=void 0;for(var f=0,g=e.length;f<g;++f){d=e[f][0];a=e[f][c.status];try{z(a)?d.resolve(a(c.value)):1===c.status?d.resolve(c.value):d.reject(c.value)}catch(h){d.reject(h),b(h)}}}))}
function f(){this.promise=new d}var g=O("$q",TypeError);R(d.prototype,{then:function(a,b,c){if(w(a)&&w(b)&&w(c))return this;var d=new f;this.$$state.pending=this.$$state.pending||[];this.$$state.pending.push([d,a,b,c]);0<this.$$state.status&&e(this.$$state);return d.promise},"catch":function(a){return this.then(null,a)},"finally":function(a,b){return this.then(function(b){return k(b,!0,a)},function(b){return k(b,!1,a)},b)}});R(f.prototype,{resolve:function(a){this.promise.$$state.status||(a===this.promise?
this.$$reject(g("qcycle",a)):this.$$resolve(a))},$$resolve:function(a){function d(a){k||(k=!0,h.$$resolve(a))}function f(a){k||(k=!0,h.$$reject(a))}var g,h=this,k=!1;try{if(H(a)||z(a))g=a&&a.then;z(g)?(this.promise.$$state.status=-1,g.call(a,d,f,c(this,this.notify))):(this.promise.$$state.value=a,this.promise.$$state.status=1,e(this.promise.$$state))}catch(l){f(l),b(l)}},reject:function(a){this.promise.$$state.status||this.$$reject(a)},$$reject:function(a){this.promise.$$state.value=a;this.promise.$$state.status=
2;e(this.promise.$$state)},notify:function(c){var d=this.promise.$$state.pending;0>=this.promise.$$state.status&&d&&d.length&&a(function(){for(var a,e,f=0,g=d.length;f<g;f++){e=d[f][0];a=d[f][3];try{e.notify(z(a)?a(c):c)}catch(h){b(h)}}})}});var h=function(a,b){var c=new f;b?c.resolve(a):c.reject(a);return c.promise},k=function(a,b,c){var d=null;try{z(c)&&(d=c())}catch(e){return h(e,!1)}return d&&z(d.then)?d.then(function(){return h(a,b)},function(a){return h(a,!1)}):h(a,b)},l=function(a,b,c,d){var e=
new f;e.resolve(a);return e.promise.then(b,c,d)},m=function(a){if(!z(a))throw g("norslvr",a);var b=new f;a(function(a){b.resolve(a)},function(a){b.reject(a)});return b.promise};m.prototype=d.prototype;m.defer=function(){var a=new f;a.resolve=c(a,a.resolve);a.reject=c(a,a.reject);a.notify=c(a,a.notify);return a};m.reject=function(a){var b=new f;b.reject(a);return b.promise};m.when=l;m.resolve=l;m.all=function(a){var b=new f,c=0,d=J(a)?[]:{};r(a,function(a,e){c++;l(a).then(function(a){d.hasOwnProperty(e)||
(d[e]=a,--c||b.resolve(d))},function(a){d.hasOwnProperty(e)||b.reject(a)})});0===c&&b.resolve(d);return b.promise};return m}function Gf(){this.$get=["$window","$timeout",function(a,b){var d=a.requestAnimationFrame||a.webkitRequestAnimationFrame,c=a.cancelAnimationFrame||a.webkitCancelAnimationFrame||a.webkitCancelRequestAnimationFrame,e=!!d,f=e?function(a){var b=d(a);return function(){c(b)}}:function(a){var c=b(a,16.66,!1);return function(){b.cancel(c)}};f.supported=e;return f}]}function vf(){function a(a){function b(){this.$$watchers=
this.$$nextSibling=this.$$childHead=this.$$childTail=null;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$id=++pb;this.$$ChildScope=null}b.prototype=a;return b}var b=10,d=O("$rootScope"),c=null,e=null;this.digestTtl=function(a){arguments.length&&(b=a);return b};this.$get=["$exceptionHandler","$parse","$browser",function(f,g,h){function k(a){a.currentScope.$$destroyed=!0}function l(a){9===Ba&&(a.$$childHead&&l(a.$$childHead),a.$$nextSibling&&l(a.$$nextSibling));a.$parent=a.$$nextSibling=
a.$$prevSibling=a.$$childHead=a.$$childTail=a.$root=a.$$watchers=null}function m(){this.$id=++pb;this.$$phase=this.$parent=this.$$watchers=this.$$nextSibling=this.$$prevSibling=this.$$childHead=this.$$childTail=null;this.$root=this;this.$$destroyed=!1;this.$$listeners={};this.$$listenerCount={};this.$$watchersCount=0;this.$$isolateBindings=null}function n(a){if(K.$$phase)throw d("inprog",K.$$phase);K.$$phase=a}function p(a,b){do a.$$watchersCount+=b;while(a=a.$parent)}function s(a,b,c){do a.$$listenerCount[c]-=
b,0===a.$$listenerCount[c]&&delete a.$$listenerCount[c];while(a=a.$parent)}function t(){}function I(){for(;y.length;)try{y.shift()()}catch(a){f(a)}e=null}function q(){null===e&&(e=h.defer(function(){K.$apply(I)}))}m.prototype={constructor:m,$new:function(b,c){var d;c=c||this;b?(d=new m,d.$root=this.$root):(this.$$ChildScope||(this.$$ChildScope=a(this)),d=new this.$$ChildScope);d.$parent=c;d.$$prevSibling=c.$$childTail;c.$$childHead?(c.$$childTail.$$nextSibling=d,c.$$childTail=d):c.$$childHead=c.$$childTail=
d;(b||c!=this)&&d.$on("$destroy",k);return d},$watch:function(a,b,d,e){var f=g(a);if(f.$$watchDelegate)return f.$$watchDelegate(this,b,d,f,a);var h=this,k=h.$$watchers,l={fn:b,last:t,get:f,exp:e||a,eq:!!d};c=null;z(b)||(l.fn=A);k||(k=h.$$watchers=[]);k.unshift(l);p(this,1);return function(){0<=$a(k,l)&&p(h,-1);c=null}},$watchGroup:function(a,b){function c(){h=!1;k?(k=!1,b(e,e,g)):b(e,d,g)}var d=Array(a.length),e=Array(a.length),f=[],g=this,h=!1,k=!0;if(!a.length){var l=!0;g.$evalAsync(function(){l&&
b(e,e,g)});return function(){l=!1}}if(1===a.length)return this.$watch(a[0],function(a,c,f){e[0]=a;d[0]=c;b(e,a===c?e:d,f)});r(a,function(a,b){var k=g.$watch(a,function(a,f){e[b]=a;d[b]=f;h||(h=!0,g.$evalAsync(c))});f.push(k)});return function(){for(;f.length;)f.shift()()}},$watchCollection:function(a,b){function c(a){e=a;var b,d,g,h;if(!w(e)){if(H(e))if(oa(e))for(f!==n&&(f=n,q=f.length=0,l++),a=e.length,q!==a&&(l++,f.length=q=a),b=0;b<a;b++)h=f[b],g=e[b],d=h!==h&&g!==g,d||h===g||(l++,f[b]=g);else{f!==
p&&(f=p={},q=0,l++);a=0;for(b in e)sa.call(e,b)&&(a++,g=e[b],h=f[b],b in f?(d=h!==h&&g!==g,d||h===g||(l++,f[b]=g)):(q++,f[b]=g,l++));if(q>a)for(b in l++,f)sa.call(e,b)||(q--,delete f[b])}else f!==e&&(f=e,l++);return l}}c.$stateful=!0;var d=this,e,f,h,k=1<b.length,l=0,m=g(a,c),n=[],p={},s=!0,q=0;return this.$watch(m,function(){s?(s=!1,b(e,e,d)):b(e,h,d);if(k)if(H(e))if(oa(e)){h=Array(e.length);for(var a=0;a<e.length;a++)h[a]=e[a]}else for(a in h={},e)sa.call(e,a)&&(h[a]=e[a]);else h=e})},$digest:function(){var a,
g,k,l,m,p,s,q,r=b,y,x=[],w,A;n("$digest");h.$$checkUrlChange();this===K&&null!==e&&(h.defer.cancel(e),I());c=null;do{q=!1;y=this;for(p=0;p<v.length;p++){try{A=v[p],A.scope.$eval(A.expression,A.locals)}catch(E){f(E)}c=null}v.length=0;a:do{if(p=y.$$watchers)for(s=p.length;s--;)try{if(a=p[s])if(m=a.get,(g=m(y))!==(k=a.last)&&!(a.eq?na(g,k):"number"===typeof g&&"number"===typeof k&&isNaN(g)&&isNaN(k)))q=!0,c=a,a.last=a.eq?Z(g,null):g,l=a.fn,l(g,k===t?g:k,y),5>r&&(w=4-r,x[w]||(x[w]=[]),x[w].push({msg:z(a.exp)?
"fn: "+(a.exp.name||a.exp.toString()):a.exp,newVal:g,oldVal:k}));else if(a===c){q=!1;break a}}catch(B){f(B)}if(!(p=y.$$watchersCount&&y.$$childHead||y!==this&&y.$$nextSibling))for(;y!==this&&!(p=y.$$nextSibling);)y=y.$parent}while(y=p);if((q||v.length)&&!r--)throw K.$$phase=null,d("infdig",b,x);}while(q||v.length);for(K.$$phase=null;P<u.length;)try{u[P++]()}catch(F){f(F)}u.length=P=0},$destroy:function(){if(!this.$$destroyed){var a=this.$parent;this.$broadcast("$destroy");this.$$destroyed=!0;this===
K&&h.$$applicationDestroyed();p(this,-this.$$watchersCount);for(var b in this.$$listenerCount)s(this,this.$$listenerCount[b],b);a&&a.$$childHead==this&&(a.$$childHead=this.$$nextSibling);a&&a.$$childTail==this&&(a.$$childTail=this.$$prevSibling);this.$$prevSibling&&(this.$$prevSibling.$$nextSibling=this.$$nextSibling);this.$$nextSibling&&(this.$$nextSibling.$$prevSibling=this.$$prevSibling);this.$destroy=this.$digest=this.$apply=this.$evalAsync=this.$applyAsync=A;this.$on=this.$watch=this.$watchGroup=
function(){return A};this.$$listeners={};this.$$nextSibling=null;l(this)}},$eval:function(a,b){return g(a)(this,b)},$evalAsync:function(a,b){K.$$phase||v.length||h.defer(function(){v.length&&K.$digest()});v.push({scope:this,expression:g(a),locals:b})},$$postDigest:function(a){u.push(a)},$apply:function(a){try{n("$apply");try{return this.$eval(a)}finally{K.$$phase=null}}catch(b){f(b)}finally{try{K.$digest()}catch(c){throw f(c),c;}}},$applyAsync:function(a){function b(){c.$eval(a)}var c=this;a&&y.push(b);
a=g(a);q()},$on:function(a,b){var c=this.$$listeners[a];c||(this.$$listeners[a]=c=[]);c.push(b);var d=this;do d.$$listenerCount[a]||(d.$$listenerCount[a]=0),d.$$listenerCount[a]++;while(d=d.$parent);var e=this;return function(){var d=c.indexOf(b);-1!==d&&(c[d]=null,s(e,1,a))}},$emit:function(a,b){var c=[],d,e=this,g=!1,h={name:a,targetScope:e,stopPropagation:function(){g=!0},preventDefault:function(){h.defaultPrevented=!0},defaultPrevented:!1},k=ab([h],arguments,1),l,m;do{d=e.$$listeners[a]||c;h.currentScope=
e;l=0;for(m=d.length;l<m;l++)if(d[l])try{d[l].apply(null,k)}catch(n){f(n)}else d.splice(l,1),l--,m--;if(g)return h.currentScope=null,h;e=e.$parent}while(e);h.currentScope=null;return h},$broadcast:function(a,b){var c=this,d=this,e={name:a,targetScope:this,preventDefault:function(){e.defaultPrevented=!0},defaultPrevented:!1};if(!this.$$listenerCount[a])return e;for(var g=ab([e],arguments,1),h,k;c=d;){e.currentScope=c;d=c.$$listeners[a]||[];h=0;for(k=d.length;h<k;h++)if(d[h])try{d[h].apply(null,g)}catch(l){f(l)}else d.splice(h,
1),h--,k--;if(!(d=c.$$listenerCount[a]&&c.$$childHead||c!==this&&c.$$nextSibling))for(;c!==this&&!(d=c.$$nextSibling);)c=c.$parent}e.currentScope=null;return e}};var K=new m,v=K.$$asyncQueue=[],u=K.$$postDigestQueue=[],y=K.$$applyAsyncQueue=[],P=0;return K}]}function oe(){var a=/^\s*(https?|ftp|mailto|tel|file):/,b=/^\s*((https?|ftp|file|blob):|data:image\/)/;this.aHrefSanitizationWhitelist=function(b){return x(b)?(a=b,this):a};this.imgSrcSanitizationWhitelist=function(a){return x(a)?(b=a,this):b};
this.$get=function(){return function(d,c){var e=c?b:a,f;f=qa(d).href;return""===f||f.match(e)?d:"unsafe:"+f}}}function og(a){if("self"===a)return a;if(F(a)){if(-1<a.indexOf("***"))throw ya("iwcard",a);a=xd(a).replace("\\*\\*",".*").replace("\\*","[^:/.?&;]*");return new RegExp("^"+a+"$")}if(Xa(a))return new RegExp("^"+a.source+"$");throw ya("imatcher");}function yd(a){var b=[];x(a)&&r(a,function(a){b.push(og(a))});return b}function zf(){this.SCE_CONTEXTS=ma;var a=["self"],b=[];this.resourceUrlWhitelist=
function(b){arguments.length&&(a=yd(b));return a};this.resourceUrlBlacklist=function(a){arguments.length&&(b=yd(a));return b};this.$get=["$injector",function(d){function c(a,b){return"self"===a?jd(b):!!a.exec(b.href)}function e(a){var b=function(a){this.$$unwrapTrustedValue=function(){return a}};a&&(b.prototype=new a);b.prototype.valueOf=function(){return this.$$unwrapTrustedValue()};b.prototype.toString=function(){return this.$$unwrapTrustedValue().toString()};return b}var f=function(a){throw ya("unsafe");
};d.has("$sanitize")&&(f=d.get("$sanitize"));var g=e(),h={};h[ma.HTML]=e(g);h[ma.CSS]=e(g);h[ma.URL]=e(g);h[ma.JS]=e(g);h[ma.RESOURCE_URL]=e(h[ma.URL]);return{trustAs:function(a,b){var c=h.hasOwnProperty(a)?h[a]:null;if(!c)throw ya("icontext",a,b);if(null===b||w(b)||""===b)return b;if("string"!==typeof b)throw ya("itype",a);return new c(b)},getTrusted:function(d,e){if(null===e||w(e)||""===e)return e;var g=h.hasOwnProperty(d)?h[d]:null;if(g&&e instanceof g)return e.$$unwrapTrustedValue();if(d===ma.RESOURCE_URL){var g=
qa(e.toString()),n,p,s=!1;n=0;for(p=a.length;n<p;n++)if(c(a[n],g)){s=!0;break}if(s)for(n=0,p=b.length;n<p;n++)if(c(b[n],g)){s=!1;break}if(s)return e;throw ya("insecurl",e.toString());}if(d===ma.HTML)return f(e);throw ya("unsafe");},valueOf:function(a){return a instanceof g?a.$$unwrapTrustedValue():a}}}]}function yf(){var a=!0;this.enabled=function(b){arguments.length&&(a=!!b);return a};this.$get=["$parse","$sceDelegate",function(b,d){if(a&&8>Ba)throw ya("iequirks");var c=ga(ma);c.isEnabled=function(){return a};
c.trustAs=d.trustAs;c.getTrusted=d.getTrusted;c.valueOf=d.valueOf;a||(c.trustAs=c.getTrusted=function(a,b){return b},c.valueOf=Ya);c.parseAs=function(a,d){var e=b(d);return e.literal&&e.constant?e:b(d,function(b){return c.getTrusted(a,b)})};var e=c.parseAs,f=c.getTrusted,g=c.trustAs;r(ma,function(a,b){var d=M(b);c[eb("parse_as_"+d)]=function(b){return e(a,b)};c[eb("get_trusted_"+d)]=function(b){return f(a,b)};c[eb("trust_as_"+d)]=function(b){return g(a,b)}});return c}]}function Af(){this.$get=["$window",
"$document",function(a,b){var d={},c=!(a.chrome&&a.chrome.app&&a.chrome.app.runtime)&&a.history&&a.history.pushState,e=aa((/android (\d+)/.exec(M((a.navigator||{}).userAgent))||[])[1]),f=/Boxee/i.test((a.navigator||{}).userAgent),g=b[0]||{},h,k=/^(Moz|webkit|ms)(?=[A-Z])/,l=g.body&&g.body.style,m=!1,n=!1;if(l){for(var p in l)if(m=k.exec(p)){h=m[0];h=h[0].toUpperCase()+h.substr(1);break}h||(h="WebkitOpacity"in l&&"webkit");m=!!("transition"in l||h+"Transition"in l);n=!!("animation"in l||h+"Animation"in
l);!e||m&&n||(m=F(l.webkitTransition),n=F(l.webkitAnimation))}return{history:!(!c||4>e||f),hasEvent:function(a){if("input"===a&&11>=Ba)return!1;if(w(d[a])){var b=g.createElement("div");d[a]="on"+a in b}return d[a]},csp:Fa(),vendorPrefix:h,transitions:m,animations:n,android:e}}]}function Cf(){var a;this.httpOptions=function(b){return b?(a=b,this):a};this.$get=["$templateCache","$http","$q","$sce",function(b,d,c,e){function f(g,h){f.totalPendingRequests++;if(!F(g)||w(b.get(g)))g=e.getTrustedResourceUrl(g);
var k=d.defaults&&d.defaults.transformResponse;J(k)?k=k.filter(function(a){return a!==dc}):k===dc&&(k=null);return d.get(g,R({cache:b,transformResponse:k},a))["finally"](function(){f.totalPendingRequests--}).then(function(a){b.put(g,a.data);return a.data},function(a){if(!h)throw pg("tpload",g,a.status,a.statusText);return c.reject(a)})}f.totalPendingRequests=0;return f}]}function Df(){this.$get=["$rootScope","$browser","$location",function(a,b,d){return{findBindings:function(a,b,d){a=a.getElementsByClassName("ng-binding");
var g=[];r(a,function(a){var c=ea.element(a).data("$binding");c&&r(c,function(c){d?(new RegExp("(^|\\s)"+xd(b)+"(\\s|\\||$)")).test(c)&&g.push(a):-1!=c.indexOf(b)&&g.push(a)})});return g},findModels:function(a,b,d){for(var g=["ng-","data-ng-","ng\\:"],h=0;h<g.length;++h){var k=a.querySelectorAll("["+g[h]+"model"+(d?"=":"*=")+'"'+b+'"]');if(k.length)return k}},getLocation:function(){return d.url()},setLocation:function(b){b!==d.url()&&(d.url(b),a.$digest())},whenStable:function(a){b.notifyWhenNoOutstandingRequests(a)}}}]}
function Ef(){this.$get=["$rootScope","$browser","$q","$$q","$exceptionHandler",function(a,b,d,c,e){function f(f,k,l){z(f)||(l=k,k=f,f=A);var m=ta.call(arguments,3),n=x(l)&&!l,p=(n?c:d).defer(),s=p.promise,r;r=b.defer(function(){try{p.resolve(f.apply(null,m))}catch(b){p.reject(b),e(b)}finally{delete g[s.$$timeoutId]}n||a.$apply()},k);s.$$timeoutId=r;g[r]=p;return s}var g={};f.cancel=function(a){return a&&a.$$timeoutId in g?(g[a.$$timeoutId].reject("canceled"),delete g[a.$$timeoutId],b.defer.cancel(a.$$timeoutId)):
!1};return f}]}function qa(a){Ba&&(Y.setAttribute("href",a),a=Y.href);Y.setAttribute("href",a);return{href:Y.href,protocol:Y.protocol?Y.protocol.replace(/:$/,""):"",host:Y.host,search:Y.search?Y.search.replace(/^\?/,""):"",hash:Y.hash?Y.hash.replace(/^#/,""):"",hostname:Y.hostname,port:Y.port,pathname:"/"===Y.pathname.charAt(0)?Y.pathname:"/"+Y.pathname}}function jd(a){a=F(a)?qa(a):a;return a.protocol===zd.protocol&&a.host===zd.host}function Ff(){this.$get=da(E)}function Ad(a){function b(a){try{return decodeURIComponent(a)}catch(b){return a}}
var d=a[0]||{},c={},e="";return function(){var a,g,h,k,l;a=d.cookie||"";if(a!==e)for(e=a,a=e.split("; "),c={},h=0;h<a.length;h++)g=a[h],k=g.indexOf("="),0<k&&(l=b(g.substring(0,k)),w(c[l])&&(c[l]=b(g.substring(k+1))));return c}}function Jf(){this.$get=Ad}function Mc(a){function b(d,c){if(H(d)){var e={};r(d,function(a,c){e[c]=b(c,a)});return e}return a.factory(d+"Filter",c)}this.register=b;this.$get=["$injector",function(a){return function(b){return a.get(b+"Filter")}}];b("currency",Bd);b("date",Cd);
b("filter",qg);b("json",rg);b("limitTo",sg);b("lowercase",tg);b("number",Dd);b("orderBy",Ed);b("uppercase",ug)}function qg(){return function(a,b,d){if(!oa(a)){if(null==a)return a;throw O("filter")("notarray",a);}var c;switch(lc(b)){case "function":break;case "boolean":case "null":case "number":case "string":c=!0;case "object":b=vg(b,d,c);break;default:return a}return Array.prototype.filter.call(a,b)}}function vg(a,b,d){var c=H(a)&&"$"in a;!0===b?b=na:z(b)||(b=function(a,b){if(w(a))return!1;if(null===
a||null===b)return a===b;if(H(b)||H(a)&&!vc(a))return!1;a=M(""+a);b=M(""+b);return-1!==a.indexOf(b)});return function(e){return c&&!H(e)?La(e,a.$,b,!1):La(e,a,b,d)}}function La(a,b,d,c,e){var f=lc(a),g=lc(b);if("string"===g&&"!"===b.charAt(0))return!La(a,b.substring(1),d,c);if(J(a))return a.some(function(a){return La(a,b,d,c)});switch(f){case "object":var h;if(c){for(h in a)if("$"!==h.charAt(0)&&La(a[h],b,d,!0))return!0;return e?!1:La(a,b,d,!1)}if("object"===g){for(h in b)if(e=b[h],!z(e)&&!w(e)&&
(f="$"===h,!La(f?a:a[h],e,d,f,f)))return!1;return!0}return d(a,b);case "function":return!1;default:return d(a,b)}}function lc(a){return null===a?"null":typeof a}function Bd(a){var b=a.NUMBER_FORMATS;return function(a,c,e){w(c)&&(c=b.CURRENCY_SYM);w(e)&&(e=b.PATTERNS[1].maxFrac);return null==a?a:Fd(a,b.PATTERNS[1],b.GROUP_SEP,b.DECIMAL_SEP,e).replace(/\u00A4/g,c)}}function Dd(a){var b=a.NUMBER_FORMATS;return function(a,c){return null==a?a:Fd(a,b.PATTERNS[0],b.GROUP_SEP,b.DECIMAL_SEP,c)}}function wg(a){var b=
0,d,c,e,f,g;-1<(c=a.indexOf(Gd))&&(a=a.replace(Gd,""));0<(e=a.search(/e/i))?(0>c&&(c=e),c+=+a.slice(e+1),a=a.substring(0,e)):0>c&&(c=a.length);for(e=0;a.charAt(e)==mc;e++);if(e==(g=a.length))d=[0],c=1;else{for(g--;a.charAt(g)==mc;)g--;c-=e;d=[];for(f=0;e<=g;e++,f++)d[f]=+a.charAt(e)}c>Hd&&(d=d.splice(0,Hd-1),b=c-1,c=1);return{d:d,e:b,i:c}}function xg(a,b,d,c){var e=a.d,f=e.length-a.i;b=w(b)?Math.min(Math.max(d,f),c):+b;d=b+a.i;c=e[d];if(0<d){e.splice(Math.max(a.i,d));for(var g=d;g<e.length;g++)e[g]=
0}else for(f=Math.max(0,f),a.i=1,e.length=Math.max(1,d=b+1),e[0]=0,g=1;g<d;g++)e[g]=0;if(5<=c)if(0>d-1){for(c=0;c>d;c--)e.unshift(0),a.i++;e.unshift(1);a.i++}else e[d-1]++;for(;f<Math.max(0,b);f++)e.push(0);if(b=e.reduceRight(function(a,b,c,d){b+=a;d[c]=b%10;return Math.floor(b/10)},0))e.unshift(b),a.i++}function Fd(a,b,d,c,e){if(!F(a)&&!S(a)||isNaN(a))return"";var f=!isFinite(a),g=!1,h=Math.abs(a)+"",k="";if(f)k="\u221e";else{g=wg(h);xg(g,e,b.minFrac,b.maxFrac);k=g.d;h=g.i;e=g.e;f=[];for(g=k.reduce(function(a,
b){return a&&!b},!0);0>h;)k.unshift(0),h++;0<h?f=k.splice(h,k.length):(f=k,k=[0]);h=[];for(k.length>=b.lgSize&&h.unshift(k.splice(-b.lgSize,k.length).join(""));k.length>b.gSize;)h.unshift(k.splice(-b.gSize,k.length).join(""));k.length&&h.unshift(k.join(""));k=h.join(d);f.length&&(k+=c+f.join(""));e&&(k+="e+"+e)}return 0>a&&!g?b.negPre+k+b.negSuf:b.posPre+k+b.posSuf}function Kb(a,b,d,c){var e="";if(0>a||c&&0>=a)c?a=-a+1:(a=-a,e="-");for(a=""+a;a.length<b;)a=mc+a;d&&(a=a.substr(a.length-b));return e+
a}function X(a,b,d,c,e){d=d||0;return function(f){f=f["get"+a]();if(0<d||f>-d)f+=d;0===f&&-12==d&&(f=12);return Kb(f,b,c,e)}}function kb(a,b,d){return function(c,e){var f=c["get"+a](),g=ub((d?"STANDALONE":"")+(b?"SHORT":"")+a);return e[g][f]}}function Id(a){var b=(new Date(a,0,1)).getDay();return new Date(a,0,(4>=b?5:12)-b)}function Jd(a){return function(b){var d=Id(b.getFullYear());b=+new Date(b.getFullYear(),b.getMonth(),b.getDate()+(4-b.getDay()))-+d;b=1+Math.round(b/6048E5);return Kb(b,a)}}function nc(a,
b){return 0>=a.getFullYear()?b.ERAS[0]:b.ERAS[1]}function Cd(a){function b(a){var b;if(b=a.match(d)){a=new Date(0);var f=0,g=0,h=b[8]?a.setUTCFullYear:a.setFullYear,k=b[8]?a.setUTCHours:a.setHours;b[9]&&(f=aa(b[9]+b[10]),g=aa(b[9]+b[11]));h.call(a,aa(b[1]),aa(b[2])-1,aa(b[3]));f=aa(b[4]||0)-f;g=aa(b[5]||0)-g;h=aa(b[6]||0);b=Math.round(1E3*parseFloat("0."+(b[7]||0)));k.call(a,f,g,h,b)}return a}var d=/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/;
return function(c,d,f){var g="",h=[],k,l;d=d||"mediumDate";d=a.DATETIME_FORMATS[d]||d;F(c)&&(c=yg.test(c)?aa(c):b(c));S(c)&&(c=new Date(c));if(!ia(c)||!isFinite(c.getTime()))return c;for(;d;)(l=zg.exec(d))?(h=ab(h,l,1),d=h.pop()):(h.push(d),d=null);var m=c.getTimezoneOffset();f&&(m=yc(f,m),c=Sb(c,f,!0));r(h,function(b){k=Ag[b];g+=k?k(c,a.DATETIME_FORMATS,m):"''"===b?"'":b.replace(/(^'|'$)/g,"").replace(/''/g,"'")});return g}}function rg(){return function(a,b){w(b)&&(b=2);return cb(a,b)}}function sg(){return function(a,
b,d){b=Infinity===Math.abs(Number(b))?Number(b):aa(b);if(isNaN(b))return a;S(a)&&(a=a.toString());if(!oa(a))return a;d=!d||isNaN(d)?0:aa(d);d=0>d?Math.max(0,a.length+d):d;return 0<=b?oc(a,d,d+b):0===d?oc(a,b,a.length):oc(a,Math.max(0,d+b),d)}}function oc(a,b,d){return F(a)?a.slice(b,d):ta.call(a,b,d)}function Ed(a){function b(b){return b.map(function(b){var c=1,d=Ya;if(z(b))d=b;else if(F(b)){if("+"==b.charAt(0)||"-"==b.charAt(0))c="-"==b.charAt(0)?-1:1,b=b.substring(1);if(""!==b&&(d=a(b),d.constant))var e=
d(),d=function(a){return a[e]}}return{get:d,descending:c}})}function d(a){switch(typeof a){case "number":case "boolean":case "string":return!0;default:return!1}}function c(a,b){var c=0,d=a.type,k=b.type;if(d===k){var k=a.value,l=b.value;"string"===d?(k=k.toLowerCase(),l=l.toLowerCase()):"object"===d&&(H(k)&&(k=a.index),H(l)&&(l=b.index));k!==l&&(c=k<l?-1:1)}else c=d<k?-1:1;return c}return function(a,f,g,h){if(null==a)return a;if(!oa(a))throw O("orderBy")("notarray",a);J(f)||(f=[f]);0===f.length&&
(f=["+"]);var k=b(f),l=g?-1:1,m=z(h)?h:c;a=Array.prototype.map.call(a,function(a,b){return{value:a,tieBreaker:{value:b,type:"number",index:b},predicateValues:k.map(function(c){var e=c.get(a);c=typeof e;if(null===e)c="string",e="null";else if("object"===c)a:{if(z(e.valueOf)&&(e=e.valueOf(),d(e)))break a;vc(e)&&(e=e.toString(),d(e))}return{value:e,type:c,index:b}})}});a.sort(function(a,b){for(var c=0,d=k.length;c<d;c++){var e=m(a.predicateValues[c],b.predicateValues[c]);if(e)return e*k[c].descending*
l}return m(a.tieBreaker,b.tieBreaker)*l});return a=a.map(function(a){return a.value})}}function Ma(a){z(a)&&(a={link:a});a.restrict=a.restrict||"AC";return da(a)}function Kd(a,b,d,c,e){var f=this,g=[];f.$error={};f.$$success={};f.$pending=void 0;f.$name=e(b.name||b.ngForm||"")(d);f.$dirty=!1;f.$pristine=!0;f.$valid=!0;f.$invalid=!1;f.$submitted=!1;f.$$parentForm=Lb;f.$rollbackViewValue=function(){r(g,function(a){a.$rollbackViewValue()})};f.$commitViewValue=function(){r(g,function(a){a.$commitViewValue()})};
f.$addControl=function(a){Ra(a.$name,"input");g.push(a);a.$name&&(f[a.$name]=a);a.$$parentForm=f};f.$$renameControl=function(a,b){var c=a.$name;f[c]===a&&delete f[c];f[b]=a;a.$name=b};f.$removeControl=function(a){a.$name&&f[a.$name]===a&&delete f[a.$name];r(f.$pending,function(b,c){f.$setValidity(c,null,a)});r(f.$error,function(b,c){f.$setValidity(c,null,a)});r(f.$$success,function(b,c){f.$setValidity(c,null,a)});$a(g,a);a.$$parentForm=Lb};Ld({ctrl:this,$element:a,set:function(a,b,c){var d=a[b];d?
-1===d.indexOf(c)&&d.push(c):a[b]=[c]},unset:function(a,b,c){var d=a[b];d&&($a(d,c),0===d.length&&delete a[b])},$animate:c});f.$setDirty=function(){c.removeClass(a,Va);c.addClass(a,Mb);f.$dirty=!0;f.$pristine=!1;f.$$parentForm.$setDirty()};f.$setPristine=function(){c.setClass(a,Va,Mb+" ng-submitted");f.$dirty=!1;f.$pristine=!0;f.$submitted=!1;r(g,function(a){a.$setPristine()})};f.$setUntouched=function(){r(g,function(a){a.$setUntouched()})};f.$setSubmitted=function(){c.addClass(a,"ng-submitted");
f.$submitted=!0;f.$$parentForm.$setSubmitted()}}function pc(a){a.$formatters.push(function(b){return a.$isEmpty(b)?b:b.toString()})}function lb(a,b,d,c,e,f){var g=M(b[0].type);if(!e.android){var h=!1;b.on("compositionstart",function(){h=!0});b.on("compositionend",function(){h=!1;l()})}var k,l=function(a){k&&(f.defer.cancel(k),k=null);if(!h){var e=b.val();a=a&&a.type;"password"===g||d.ngTrim&&"false"===d.ngTrim||(e=W(e));(c.$viewValue!==e||""===e&&c.$$hasNativeValidators)&&c.$setViewValue(e,a)}};if(e.hasEvent("input"))b.on("input",
l);else{var m=function(a,b,c){k||(k=f.defer(function(){k=null;b&&b.value===c||l(a)}))};b.on("keydown",function(a){var b=a.keyCode;91===b||15<b&&19>b||37<=b&&40>=b||m(a,this,this.value)});if(e.hasEvent("paste"))b.on("paste cut",m)}b.on("change",l);if(Md[g]&&c.$$hasNativeValidators&&g===d.type)b.on("keydown wheel mousedown",function(a){if(!k){var b=this.validity,c=b.badInput,d=b.typeMismatch;k=f.defer(function(){k=null;b.badInput===c&&b.typeMismatch===d||l(a)})}});c.$render=function(){var a=c.$isEmpty(c.$viewValue)?
"":c.$viewValue;b.val()!==a&&b.val(a)}}function Nb(a,b){return function(d,c){var e,f;if(ia(d))return d;if(F(d)){'"'==d.charAt(0)&&'"'==d.charAt(d.length-1)&&(d=d.substring(1,d.length-1));if(Bg.test(d))return new Date(d);a.lastIndex=0;if(e=a.exec(d))return e.shift(),f=c?{yyyy:c.getFullYear(),MM:c.getMonth()+1,dd:c.getDate(),HH:c.getHours(),mm:c.getMinutes(),ss:c.getSeconds(),sss:c.getMilliseconds()/1E3}:{yyyy:1970,MM:1,dd:1,HH:0,mm:0,ss:0,sss:0},r(e,function(a,c){c<b.length&&(f[b[c]]=+a)}),new Date(f.yyyy,
f.MM-1,f.dd,f.HH,f.mm,f.ss||0,1E3*f.sss||0)}return NaN}}function mb(a,b,d,c){return function(e,f,g,h,k,l,m){function n(a){return a&&!(a.getTime&&a.getTime()!==a.getTime())}function p(a){return x(a)&&!ia(a)?d(a)||void 0:a}Nd(e,f,g,h);lb(e,f,g,h,k,l);var s=h&&h.$options&&h.$options.timezone,r;h.$$parserName=a;h.$parsers.push(function(a){if(h.$isEmpty(a))return null;if(b.test(a))return a=d(a,r),s&&(a=Sb(a,s)),a});h.$formatters.push(function(a){if(a&&!ia(a))throw nb("datefmt",a);if(n(a))return(r=a)&&
s&&(r=Sb(r,s,!0)),m("date")(a,c,s);r=null;return""});if(x(g.min)||g.ngMin){var t;h.$validators.min=function(a){return!n(a)||w(t)||d(a)>=t};g.$observe("min",function(a){t=p(a);h.$validate()})}if(x(g.max)||g.ngMax){var q;h.$validators.max=function(a){return!n(a)||w(q)||d(a)<=q};g.$observe("max",function(a){q=p(a);h.$validate()})}}}function Nd(a,b,d,c){(c.$$hasNativeValidators=H(b[0].validity))&&c.$parsers.push(function(a){var c=b.prop("validity")||{};return c.badInput||c.typeMismatch?void 0:a})}function Od(a,
b,d,c,e){if(x(c)){a=a(c);if(!a.constant)throw nb("constexpr",d,c);return a(b)}return e}function qc(a,b){a="ngClass"+a;return["$animate",function(d){function c(a,b){var c=[],d=0;a:for(;d<a.length;d++){for(var e=a[d],m=0;m<b.length;m++)if(e==b[m])continue a;c.push(e)}return c}function e(a){var b=[];return J(a)?(r(a,function(a){b=b.concat(e(a))}),b):F(a)?a.split(" "):H(a)?(r(a,function(a,c){a&&(b=b.concat(c.split(" ")))}),b):a}return{restrict:"AC",link:function(f,g,h){function k(a){a=l(a,1);h.$addClass(a)}
function l(a,b){var c=g.data("$classCounts")||T(),d=[];r(a,function(a){if(0<b||c[a])c[a]=(c[a]||0)+b,c[a]===+(0<b)&&d.push(a)});g.data("$classCounts",c);return d.join(" ")}function m(a,b){var e=c(b,a),f=c(a,b),e=l(e,1),f=l(f,-1);e&&e.length&&d.addClass(g,e);f&&f.length&&d.removeClass(g,f)}function n(a){if(!0===b||(f.$index&1)===b){var c=e(a||[]);if(!p)k(c);else if(!na(a,p)){var d=e(p);m(d,c)}}p=J(a)?a.map(function(a){return ga(a)}):ga(a)}var p;f.$watch(h[a],n,!0);h.$observe("class",function(b){n(f.$eval(h[a]))});
"ngClass"!==a&&f.$watch("$index",function(c,d){var g=c&1;if(g!==(d&1)){var m=e(f.$eval(h[a]));g===b?k(m):(g=l(m,-1),h.$removeClass(g))}})}}}]}function Ld(a){function b(a,b){b&&!f[a]?(k.addClass(e,a),f[a]=!0):!b&&f[a]&&(k.removeClass(e,a),f[a]=!1)}function d(a,c){a=a?"-"+Cc(a,"-"):"";b(ob+a,!0===c);b(Pd+a,!1===c)}var c=a.ctrl,e=a.$element,f={},g=a.set,h=a.unset,k=a.$animate;f[Pd]=!(f[ob]=e.hasClass(ob));c.$setValidity=function(a,e,f){w(e)?(c.$pending||(c.$pending={}),g(c.$pending,a,f)):(c.$pending&&
h(c.$pending,a,f),Qd(c.$pending)&&(c.$pending=void 0));Ea(e)?e?(h(c.$error,a,f),g(c.$$success,a,f)):(g(c.$error,a,f),h(c.$$success,a,f)):(h(c.$error,a,f),h(c.$$success,a,f));c.$pending?(b(Rd,!0),c.$valid=c.$invalid=void 0,d("",null)):(b(Rd,!1),c.$valid=Qd(c.$error),c.$invalid=!c.$valid,d("",c.$valid));e=c.$pending&&c.$pending[a]?void 0:c.$error[a]?!1:c.$$success[a]?!0:null;d(a,e);c.$$parentForm.$setValidity(a,e,c)}}function Qd(a){if(a)for(var b in a)if(a.hasOwnProperty(b))return!1;return!0}var Cg=
/^\/(.+)\/([a-z]*)$/,sa=Object.prototype.hasOwnProperty,M=function(a){return F(a)?a.toLowerCase():a},ub=function(a){return F(a)?a.toUpperCase():a},Ba,B,pa,ta=[].slice,bg=[].splice,Dg=[].push,ka=Object.prototype.toString,wc=Object.getPrototypeOf,za=O("ng"),ea=E.angular||(E.angular={}),Ub,pb=0;Ba=E.document.documentMode;A.$inject=[];Ya.$inject=[];var J=Array.isArray,be=/^\[object (?:Uint8|Uint8Clamped|Uint16|Uint32|Int8|Int16|Int32|Float32|Float64)Array\]$/,W=function(a){return F(a)?a.trim():a},xd=
function(a){return a.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08")},Fa=function(){if(!x(Fa.rules)){var a=E.document.querySelector("[ng-csp]")||E.document.querySelector("[data-ng-csp]");if(a){var b=a.getAttribute("ng-csp")||a.getAttribute("data-ng-csp");Fa.rules={noUnsafeEval:!b||-1!==b.indexOf("no-unsafe-eval"),noInlineStyle:!b||-1!==b.indexOf("no-inline-style")}}else{a=Fa;try{new Function(""),b=!1}catch(d){b=!0}a.rules={noUnsafeEval:b,noInlineStyle:!1}}}return Fa.rules},
rb=function(){if(x(rb.name_))return rb.name_;var a,b,d=Oa.length,c,e;for(b=0;b<d;++b)if(c=Oa[b],a=E.document.querySelector("["+c.replace(":","\\:")+"jq]")){e=a.getAttribute(c+"jq");break}return rb.name_=e},ee=/:/g,Oa=["ng-","data-ng-","ng:","x-ng-"],je=/[A-Z]/g,Dc=!1,Na=3,ne={full:"1.5.7",major:1,minor:5,dot:7,codeName:"hexagonal-circumvolution"};U.expando="ng339";var gb=U.cache={},Pf=1;U._data=function(a){return this.cache[a[this.expando]]||{}};var Kf=/([\:\-\_]+(.))/g,Lf=/^moz([A-Z])/,yb={mouseleave:"mouseout",
mouseenter:"mouseover"},Wb=O("jqLite"),Of=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,Vb=/<|&#?\w+;/,Mf=/<([\w:-]+)/,Nf=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,ha={option:[1,'<select multiple="multiple">',"</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ha.optgroup=ha.option;ha.tbody=ha.tfoot=ha.colgroup=ha.caption=ha.thead;
ha.th=ha.td;var Uf=E.Node.prototype.contains||function(a){return!!(this.compareDocumentPosition(a)&16)},Pa=U.prototype={ready:function(a){function b(){d||(d=!0,a())}var d=!1;"complete"===E.document.readyState?E.setTimeout(b):(this.on("DOMContentLoaded",b),U(E).on("load",b))},toString:function(){var a=[];r(this,function(b){a.push(""+b)});return"["+a.join(", ")+"]"},eq:function(a){return 0<=a?B(this[a]):B(this[this.length+a])},length:0,push:Dg,sort:[].sort,splice:[].splice},Eb={};r("multiple selected checked disabled readOnly required open".split(" "),
function(a){Eb[M(a)]=a});var Vc={};r("input select option textarea button form details".split(" "),function(a){Vc[a]=!0});var cd={ngMinlength:"minlength",ngMaxlength:"maxlength",ngMin:"min",ngMax:"max",ngPattern:"pattern"};r({data:Yb,removeData:fb,hasData:function(a){for(var b in gb[a.ng339])return!0;return!1},cleanData:function(a){for(var b=0,d=a.length;b<d;b++)fb(a[b])}},function(a,b){U[b]=a});r({data:Yb,inheritedData:Cb,scope:function(a){return B.data(a,"$scope")||Cb(a.parentNode||a,["$isolateScope",
"$scope"])},isolateScope:function(a){return B.data(a,"$isolateScope")||B.data(a,"$isolateScopeNoTemplate")},controller:Sc,injector:function(a){return Cb(a,"$injector")},removeAttr:function(a,b){a.removeAttribute(b)},hasClass:zb,css:function(a,b,d){b=eb(b);if(x(d))a.style[b]=d;else return a.style[b]},attr:function(a,b,d){var c=a.nodeType;if(c!==Na&&2!==c&&8!==c)if(c=M(b),Eb[c])if(x(d))d?(a[b]=!0,a.setAttribute(b,c)):(a[b]=!1,a.removeAttribute(c));else return a[b]||(a.attributes.getNamedItem(b)||A).specified?
c:void 0;else if(x(d))a.setAttribute(b,d);else if(a.getAttribute)return a=a.getAttribute(b,2),null===a?void 0:a},prop:function(a,b,d){if(x(d))a[b]=d;else return a[b]},text:function(){function a(a,d){if(w(d)){var c=a.nodeType;return 1===c||c===Na?a.textContent:""}a.textContent=d}a.$dv="";return a}(),val:function(a,b){if(w(b)){if(a.multiple&&"select"===ua(a)){var d=[];r(a.options,function(a){a.selected&&d.push(a.value||a.text)});return 0===d.length?null:d}return a.value}a.value=b},html:function(a,b){if(w(b))return a.innerHTML;
wb(a,!0);a.innerHTML=b},empty:Tc},function(a,b){U.prototype[b]=function(b,c){var e,f,g=this.length;if(a!==Tc&&w(2==a.length&&a!==zb&&a!==Sc?b:c)){if(H(b)){for(e=0;e<g;e++)if(a===Yb)a(this[e],b);else for(f in b)a(this[e],f,b[f]);return this}e=a.$dv;g=w(e)?Math.min(g,1):g;for(f=0;f<g;f++){var h=a(this[f],b,c);e=e?e+h:h}return e}for(e=0;e<g;e++)a(this[e],b,c);return this}});r({removeData:fb,on:function(a,b,d,c){if(x(c))throw Wb("onargs");if(Nc(a)){c=xb(a,!0);var e=c.events,f=c.handle;f||(f=c.handle=
Rf(a,e));c=0<=b.indexOf(" ")?b.split(" "):[b];for(var g=c.length,h=function(b,c,g){var h=e[b];h||(h=e[b]=[],h.specialHandlerWrapper=c,"$destroy"===b||g||a.addEventListener(b,f,!1));h.push(d)};g--;)b=c[g],yb[b]?(h(yb[b],Tf),h(b,void 0,!0)):h(b)}},off:Rc,one:function(a,b,d){a=B(a);a.on(b,function e(){a.off(b,d);a.off(b,e)});a.on(b,d)},replaceWith:function(a,b){var d,c=a.parentNode;wb(a);r(new U(b),function(b){d?c.insertBefore(b,d.nextSibling):c.replaceChild(b,a);d=b})},children:function(a){var b=[];
r(a.childNodes,function(a){1===a.nodeType&&b.push(a)});return b},contents:function(a){return a.contentDocument||a.childNodes||[]},append:function(a,b){var d=a.nodeType;if(1===d||11===d){b=new U(b);for(var d=0,c=b.length;d<c;d++)a.appendChild(b[d])}},prepend:function(a,b){if(1===a.nodeType){var d=a.firstChild;r(new U(b),function(b){a.insertBefore(b,d)})}},wrap:function(a,b){Pc(a,B(b).eq(0).clone()[0])},remove:Db,detach:function(a){Db(a,!0)},after:function(a,b){var d=a,c=a.parentNode;b=new U(b);for(var e=
0,f=b.length;e<f;e++){var g=b[e];c.insertBefore(g,d.nextSibling);d=g}},addClass:Bb,removeClass:Ab,toggleClass:function(a,b,d){b&&r(b.split(" "),function(b){var e=d;w(e)&&(e=!zb(a,b));(e?Bb:Ab)(a,b)})},parent:function(a){return(a=a.parentNode)&&11!==a.nodeType?a:null},next:function(a){return a.nextElementSibling},find:function(a,b){return a.getElementsByTagName?a.getElementsByTagName(b):[]},clone:Xb,triggerHandler:function(a,b,d){var c,e,f=b.type||b,g=xb(a);if(g=(g=g&&g.events)&&g[f])c={preventDefault:function(){this.defaultPrevented=
!0},isDefaultPrevented:function(){return!0===this.defaultPrevented},stopImmediatePropagation:function(){this.immediatePropagationStopped=!0},isImmediatePropagationStopped:function(){return!0===this.immediatePropagationStopped},stopPropagation:A,type:f,target:a},b.type&&(c=R(c,b)),b=ga(g),e=d?[c].concat(d):[c],r(b,function(b){c.isImmediatePropagationStopped()||b.apply(a,e)})}},function(a,b){U.prototype[b]=function(b,c,e){for(var f,g=0,h=this.length;g<h;g++)w(f)?(f=a(this[g],b,c,e),x(f)&&(f=B(f))):
Qc(f,a(this[g],b,c,e));return x(f)?f:this};U.prototype.bind=U.prototype.on;U.prototype.unbind=U.prototype.off});Sa.prototype={put:function(a,b){this[Ga(a,this.nextUid)]=b},get:function(a){return this[Ga(a,this.nextUid)]},remove:function(a){var b=this[a=Ga(a,this.nextUid)];delete this[a];return b}};var If=[function(){this.$get=[function(){return Sa}]}],Wf=/^([^\(]+?)=>/,Xf=/^[^\(]*\(\s*([^\)]*)\)/m,Eg=/,/,Fg=/^\s*(_?)(\S+?)\1\s*$/,Vf=/((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg,Ha=O("$injector");db.$$annotate=
function(a,b,d){var c;if("function"===typeof a){if(!(c=a.$inject)){c=[];if(a.length){if(b)throw F(d)&&d||(d=a.name||Yf(a)),Ha("strictdi",d);b=Wc(a);r(b[1].split(Eg),function(a){a.replace(Fg,function(a,b,d){c.push(d)})})}a.$inject=c}}else J(a)?(b=a.length-1,Qa(a[b],"fn"),c=a.slice(0,b)):Qa(a,"fn",!0);return c};var Sd=O("$animate"),af=function(){this.$get=A},bf=function(){var a=new Sa,b=[];this.$get=["$$AnimateRunner","$rootScope",function(d,c){function e(a,b,c){var d=!1;b&&(b=F(b)?b.split(" "):J(b)?
b:[],r(b,function(b){b&&(d=!0,a[b]=c)}));return d}function f(){r(b,function(b){var c=a.get(b);if(c){var d=Zf(b.attr("class")),e="",f="";r(c,function(a,b){a!==!!d[b]&&(a?e+=(e.length?" ":"")+b:f+=(f.length?" ":"")+b)});r(b,function(a){e&&Bb(a,e);f&&Ab(a,f)});a.remove(b)}});b.length=0}return{enabled:A,on:A,off:A,pin:A,push:function(g,h,k,l){l&&l();k=k||{};k.from&&g.css(k.from);k.to&&g.css(k.to);if(k.addClass||k.removeClass)if(h=k.addClass,l=k.removeClass,k=a.get(g)||{},h=e(k,h,!0),l=e(k,l,!1),h||l)a.put(g,
k),b.push(g),1===b.length&&c.$$postDigest(f);g=new d;g.complete();return g}}}]},Ze=["$provide",function(a){var b=this;this.$$registeredAnimations=Object.create(null);this.register=function(d,c){if(d&&"."!==d.charAt(0))throw Sd("notcsel",d);var e=d+"-animation";b.$$registeredAnimations[d.substr(1)]=e;a.factory(e,c)};this.classNameFilter=function(a){if(1===arguments.length&&(this.$$classNameFilter=a instanceof RegExp?a:null)&&/(\s+|\/)ng-animate(\s+|\/)/.test(this.$$classNameFilter.toString()))throw Sd("nongcls",
"ng-animate");return this.$$classNameFilter};this.$get=["$$animateQueue",function(a){function b(a,c,d){if(d){var h;a:{for(h=0;h<d.length;h++){var k=d[h];if(1===k.nodeType){h=k;break a}}h=void 0}!h||h.parentNode||h.previousElementSibling||(d=null)}d?d.after(a):c.prepend(a)}return{on:a.on,off:a.off,pin:a.pin,enabled:a.enabled,cancel:function(a){a.end&&a.end()},enter:function(e,f,g,h){f=f&&B(f);g=g&&B(g);f=f||g.parent();b(e,f,g);return a.push(e,"enter",Ia(h))},move:function(e,f,g,h){f=f&&B(f);g=g&&B(g);
f=f||g.parent();b(e,f,g);return a.push(e,"move",Ia(h))},leave:function(b,c){return a.push(b,"leave",Ia(c),function(){b.remove()})},addClass:function(b,c,g){g=Ia(g);g.addClass=hb(g.addclass,c);return a.push(b,"addClass",g)},removeClass:function(b,c,g){g=Ia(g);g.removeClass=hb(g.removeClass,c);return a.push(b,"removeClass",g)},setClass:function(b,c,g,h){h=Ia(h);h.addClass=hb(h.addClass,c);h.removeClass=hb(h.removeClass,g);return a.push(b,"setClass",h)},animate:function(b,c,g,h,k){k=Ia(k);k.from=k.from?
R(k.from,c):c;k.to=k.to?R(k.to,g):g;k.tempClasses=hb(k.tempClasses,h||"ng-inline-animate");return a.push(b,"animate",k)}}}]}],df=function(){this.$get=["$$rAF",function(a){function b(b){d.push(b);1<d.length||a(function(){for(var a=0;a<d.length;a++)d[a]();d=[]})}var d=[];return function(){var a=!1;b(function(){a=!0});return function(d){a?d():b(d)}}}]},cf=function(){this.$get=["$q","$sniffer","$$animateAsyncRun","$document","$timeout",function(a,b,d,c,e){function f(a){this.setHost(a);var b=d();this._doneCallbacks=
[];this._tick=function(a){var d=c[0];d&&d.hidden?e(a,0,!1):b(a)};this._state=0}f.chain=function(a,b){function c(){if(d===a.length)b(!0);else a[d](function(a){!1===a?b(!1):(d++,c())})}var d=0;c()};f.all=function(a,b){function c(f){e=e&&f;++d===a.length&&b(e)}var d=0,e=!0;r(a,function(a){a.done(c)})};f.prototype={setHost:function(a){this.host=a||{}},done:function(a){2===this._state?a():this._doneCallbacks.push(a)},progress:A,getPromise:function(){if(!this.promise){var b=this;this.promise=a(function(a,
c){b.done(function(b){!1===b?c():a()})})}return this.promise},then:function(a,b){return this.getPromise().then(a,b)},"catch":function(a){return this.getPromise()["catch"](a)},"finally":function(a){return this.getPromise()["finally"](a)},pause:function(){this.host.pause&&this.host.pause()},resume:function(){this.host.resume&&this.host.resume()},end:function(){this.host.end&&this.host.end();this._resolve(!0)},cancel:function(){this.host.cancel&&this.host.cancel();this._resolve(!1)},complete:function(a){var b=
this;0===b._state&&(b._state=1,b._tick(function(){b._resolve(a)}))},_resolve:function(a){2!==this._state&&(r(this._doneCallbacks,function(b){b(a)}),this._doneCallbacks.length=0,this._state=2)}};return f}]},$e=function(){this.$get=["$$rAF","$q","$$AnimateRunner",function(a,b,d){return function(b,e){function f(){a(function(){g.addClass&&(b.addClass(g.addClass),g.addClass=null);g.removeClass&&(b.removeClass(g.removeClass),g.removeClass=null);g.to&&(b.css(g.to),g.to=null);h||k.complete();h=!0});return k}
var g=e||{};g.$$prepared||(g=Z(g));g.cleanupStyles&&(g.from=g.to=null);g.from&&(b.css(g.from),g.from=null);var h,k=new d;return{start:f,end:f}}}]},fa=O("$compile"),bc=new function(){};Fc.$inject=["$provide","$$sanitizeUriProvider"];Fb.prototype.isFirstChange=function(){return this.previousValue===bc};var Yc=/^((?:x|data)[\:\-_])/i,cg=O("$controller"),dd=/^(\S+)(\s+as\s+([\w$]+))?$/,kf=function(){this.$get=["$document",function(a){return function(b){b?!b.nodeType&&b instanceof B&&(b=b[0]):b=a[0].body;
return b.offsetWidth+1}}]},ed="application/json",ec={"Content-Type":ed+";charset=utf-8"},eg=/^\[|^\{(?!\{)/,fg={"[":/]$/,"{":/}$/},dg=/^\)\]\}',?\n/,Gg=O("$http"),id=function(a){return function(){throw Gg("legacy",a);}},Ka=ea.$interpolateMinErr=O("$interpolate");Ka.throwNoconcat=function(a){throw Ka("noconcat",a);};Ka.interr=function(a,b){return Ka("interr",a,b.toString())};var Hg=/^([^\?#]*)(\?([^#]*))?(#(.*))?$/,hg={http:80,https:443,ftp:21},Gb=O("$location"),Ig={$$absUrl:"",$$html5:!1,$$replace:!1,
absUrl:Hb("$$absUrl"),url:function(a){if(w(a))return this.$$url;var b=Hg.exec(a);(b[1]||""===a)&&this.path(decodeURIComponent(b[1]));(b[2]||b[1]||""===a)&&this.search(b[3]||"");this.hash(b[5]||"");return this},protocol:Hb("$$protocol"),host:Hb("$$host"),port:Hb("$$port"),path:nd("$$path",function(a){a=null!==a?a.toString():"";return"/"==a.charAt(0)?a:"/"+a}),search:function(a,b){switch(arguments.length){case 0:return this.$$search;case 1:if(F(a)||S(a))a=a.toString(),this.$$search=Ac(a);else if(H(a))a=
Z(a,{}),r(a,function(b,c){null==b&&delete a[c]}),this.$$search=a;else throw Gb("isrcharg");break;default:w(b)||null===b?delete this.$$search[a]:this.$$search[a]=b}this.$$compose();return this},hash:nd("$$hash",function(a){return null!==a?a.toString():""}),replace:function(){this.$$replace=!0;return this}};r([md,hc,gc],function(a){a.prototype=Object.create(Ig);a.prototype.state=function(b){if(!arguments.length)return this.$$state;if(a!==gc||!this.$$html5)throw Gb("nostate");this.$$state=w(b)?null:
b;return this}});var ca=O("$parse"),jg=Function.prototype.call,kg=Function.prototype.apply,lg=Function.prototype.bind,Ob=T();r("+ - * / % === !== == != < > <= >= && || ! = |".split(" "),function(a){Ob[a]=!0});var Jg={n:"\n",f:"\f",r:"\r",t:"\t",v:"\v","'":"'",'"':'"'},jc=function(a){this.options=a};jc.prototype={constructor:jc,lex:function(a){this.text=a;this.index=0;for(this.tokens=[];this.index<this.text.length;)if(a=this.text.charAt(this.index),'"'===a||"'"===a)this.readString(a);else if(this.isNumber(a)||
"."===a&&this.isNumber(this.peek()))this.readNumber();else if(this.isIdentifierStart(this.peekMultichar()))this.readIdent();else if(this.is(a,"(){}[].,;:?"))this.tokens.push({index:this.index,text:a}),this.index++;else if(this.isWhitespace(a))this.index++;else{var b=a+this.peek(),d=b+this.peek(2),c=Ob[b],e=Ob[d];Ob[a]||c||e?(a=e?d:c?b:a,this.tokens.push({index:this.index,text:a,operator:!0}),this.index+=a.length):this.throwError("Unexpected next character ",this.index,this.index+1)}return this.tokens},
is:function(a,b){return-1!==b.indexOf(a)},peek:function(a){a=a||1;return this.index+a<this.text.length?this.text.charAt(this.index+a):!1},isNumber:function(a){return"0"<=a&&"9">=a&&"string"===typeof a},isWhitespace:function(a){return" "===a||"\r"===a||"\t"===a||"\n"===a||"\v"===a||"\u00a0"===a},isIdentifierStart:function(a){return this.options.isIdentifierStart?this.options.isIdentifierStart(a,this.codePointAt(a)):this.isValidIdentifierStart(a)},isValidIdentifierStart:function(a){return"a"<=a&&"z">=
a||"A"<=a&&"Z">=a||"_"===a||"$"===a},isIdentifierContinue:function(a){return this.options.isIdentifierContinue?this.options.isIdentifierContinue(a,this.codePointAt(a)):this.isValidIdentifierContinue(a)},isValidIdentifierContinue:function(a,b){return this.isValidIdentifierStart(a,b)||this.isNumber(a)},codePointAt:function(a){return 1===a.length?a.charCodeAt(0):(a.charCodeAt(0)<<10)+a.charCodeAt(1)-56613888},peekMultichar:function(){var a=this.text.charAt(this.index),b=this.peek();if(!b)return a;var d=
a.charCodeAt(0),c=b.charCodeAt(0);return 55296<=d&&56319>=d&&56320<=c&&57343>=c?a+b:a},isExpOperator:function(a){return"-"===a||"+"===a||this.isNumber(a)},throwError:function(a,b,d){d=d||this.index;b=x(b)?"s "+b+"-"+this.index+" ["+this.text.substring(b,d)+"]":" "+d;throw ca("lexerr",a,b,this.text);},readNumber:function(){for(var a="",b=this.index;this.index<this.text.length;){var d=M(this.text.charAt(this.index));if("."==d||this.isNumber(d))a+=d;else{var c=this.peek();if("e"==d&&this.isExpOperator(c))a+=
d;else if(this.isExpOperator(d)&&c&&this.isNumber(c)&&"e"==a.charAt(a.length-1))a+=d;else if(!this.isExpOperator(d)||c&&this.isNumber(c)||"e"!=a.charAt(a.length-1))break;else this.throwError("Invalid exponent")}this.index++}this.tokens.push({index:b,text:a,constant:!0,value:Number(a)})},readIdent:function(){var a=this.index;for(this.index+=this.peekMultichar().length;this.index<this.text.length;){var b=this.peekMultichar();if(!this.isIdentifierContinue(b))break;this.index+=b.length}this.tokens.push({index:a,
text:this.text.slice(a,this.index),identifier:!0})},readString:function(a){var b=this.index;this.index++;for(var d="",c=a,e=!1;this.index<this.text.length;){var f=this.text.charAt(this.index),c=c+f;if(e)"u"===f?(e=this.text.substring(this.index+1,this.index+5),e.match(/[\da-f]{4}/i)||this.throwError("Invalid unicode escape [\\u"+e+"]"),this.index+=4,d+=String.fromCharCode(parseInt(e,16))):d+=Jg[f]||f,e=!1;else if("\\"===f)e=!0;else{if(f===a){this.index++;this.tokens.push({index:b,text:c,constant:!0,
value:d});return}d+=f}this.index++}this.throwError("Unterminated quote",b)}};var t=function(a,b){this.lexer=a;this.options=b};t.Program="Program";t.ExpressionStatement="ExpressionStatement";t.AssignmentExpression="AssignmentExpression";t.ConditionalExpression="ConditionalExpression";t.LogicalExpression="LogicalExpression";t.BinaryExpression="BinaryExpression";t.UnaryExpression="UnaryExpression";t.CallExpression="CallExpression";t.MemberExpression="MemberExpression";t.Identifier="Identifier";t.Literal=
"Literal";t.ArrayExpression="ArrayExpression";t.Property="Property";t.ObjectExpression="ObjectExpression";t.ThisExpression="ThisExpression";t.LocalsExpression="LocalsExpression";t.NGValueParameter="NGValueParameter";t.prototype={ast:function(a){this.text=a;this.tokens=this.lexer.lex(a);a=this.program();0!==this.tokens.length&&this.throwError("is an unexpected token",this.tokens[0]);return a},program:function(){for(var a=[];;)if(0<this.tokens.length&&!this.peek("}",")",";","]")&&a.push(this.expressionStatement()),
!this.expect(";"))return{type:t.Program,body:a}},expressionStatement:function(){return{type:t.ExpressionStatement,expression:this.filterChain()}},filterChain:function(){for(var a=this.expression();this.expect("|");)a=this.filter(a);return a},expression:function(){return this.assignment()},assignment:function(){var a=this.ternary();this.expect("=")&&(a={type:t.AssignmentExpression,left:a,right:this.assignment(),operator:"="});return a},ternary:function(){var a=this.logicalOR(),b,d;return this.expect("?")&&
(b=this.expression(),this.consume(":"))?(d=this.expression(),{type:t.ConditionalExpression,test:a,alternate:b,consequent:d}):a},logicalOR:function(){for(var a=this.logicalAND();this.expect("||");)a={type:t.LogicalExpression,operator:"||",left:a,right:this.logicalAND()};return a},logicalAND:function(){for(var a=this.equality();this.expect("&&");)a={type:t.LogicalExpression,operator:"&&",left:a,right:this.equality()};return a},equality:function(){for(var a=this.relational(),b;b=this.expect("==","!=",
"===","!==");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.relational()};return a},relational:function(){for(var a=this.additive(),b;b=this.expect("<",">","<=",">=");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.additive()};return a},additive:function(){for(var a=this.multiplicative(),b;b=this.expect("+","-");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.multiplicative()};return a},multiplicative:function(){for(var a=this.unary(),b;b=this.expect("*",
"/","%");)a={type:t.BinaryExpression,operator:b.text,left:a,right:this.unary()};return a},unary:function(){var a;return(a=this.expect("+","-","!"))?{type:t.UnaryExpression,operator:a.text,prefix:!0,argument:this.unary()}:this.primary()},primary:function(){var a;this.expect("(")?(a=this.filterChain(),this.consume(")")):this.expect("[")?a=this.arrayDeclaration():this.expect("{")?a=this.object():this.selfReferential.hasOwnProperty(this.peek().text)?a=Z(this.selfReferential[this.consume().text]):this.options.literals.hasOwnProperty(this.peek().text)?
a={type:t.Literal,value:this.options.literals[this.consume().text]}:this.peek().identifier?a=this.identifier():this.peek().constant?a=this.constant():this.throwError("not a primary expression",this.peek());for(var b;b=this.expect("(","[",".");)"("===b.text?(a={type:t.CallExpression,callee:a,arguments:this.parseArguments()},this.consume(")")):"["===b.text?(a={type:t.MemberExpression,object:a,property:this.expression(),computed:!0},this.consume("]")):"."===b.text?a={type:t.MemberExpression,object:a,
property:this.identifier(),computed:!1}:this.throwError("IMPOSSIBLE");return a},filter:function(a){a=[a];for(var b={type:t.CallExpression,callee:this.identifier(),arguments:a,filter:!0};this.expect(":");)a.push(this.expression());return b},parseArguments:function(){var a=[];if(")"!==this.peekToken().text){do a.push(this.filterChain());while(this.expect(","))}return a},identifier:function(){var a=this.consume();a.identifier||this.throwError("is not a valid identifier",a);return{type:t.Identifier,name:a.text}},
constant:function(){return{type:t.Literal,value:this.consume().value}},arrayDeclaration:function(){var a=[];if("]"!==this.peekToken().text){do{if(this.peek("]"))break;a.push(this.expression())}while(this.expect(","))}this.consume("]");return{type:t.ArrayExpression,elements:a}},object:function(){var a=[],b;if("}"!==this.peekToken().text){do{if(this.peek("}"))break;b={type:t.Property,kind:"init"};this.peek().constant?(b.key=this.constant(),b.computed=!1,this.consume(":"),b.value=this.expression()):
this.peek().identifier?(b.key=this.identifier(),b.computed=!1,this.peek(":")?(this.consume(":"),b.value=this.expression()):b.value=b.key):this.peek("[")?(this.consume("["),b.key=this.expression(),this.consume("]"),b.computed=!0,this.consume(":"),b.value=this.expression()):this.throwError("invalid key",this.peek());a.push(b)}while(this.expect(","))}this.consume("}");return{type:t.ObjectExpression,properties:a}},throwError:function(a,b){throw ca("syntax",b.text,a,b.index+1,this.text,this.text.substring(b.index));
},consume:function(a){if(0===this.tokens.length)throw ca("ueoe",this.text);var b=this.expect(a);b||this.throwError("is unexpected, expecting ["+a+"]",this.peek());return b},peekToken:function(){if(0===this.tokens.length)throw ca("ueoe",this.text);return this.tokens[0]},peek:function(a,b,d,c){return this.peekAhead(0,a,b,d,c)},peekAhead:function(a,b,d,c,e){if(this.tokens.length>a){a=this.tokens[a];var f=a.text;if(f===b||f===d||f===c||f===e||!(b||d||c||e))return a}return!1},expect:function(a,b,d,c){return(a=
this.peek(a,b,d,c))?(this.tokens.shift(),a):!1},selfReferential:{"this":{type:t.ThisExpression},$locals:{type:t.LocalsExpression}}};ud.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.state={nextId:0,filters:{},expensiveChecks:b,fn:{vars:[],body:[],own:{}},assign:{vars:[],body:[],own:{}},inputs:[]};$(c,d.$filter);var e="",f;this.stage="assign";if(f=sd(c))this.state.computing="assign",e=this.nextId(),this.recurse(f,e),this.return_(e),e="fn.assign="+this.generateFunction("assign",
"s,v,l");f=qd(c.body);d.stage="inputs";r(f,function(a,b){var c="fn"+b;d.state[c]={vars:[],body:[],own:{}};d.state.computing=c;var e=d.nextId();d.recurse(a,e);d.return_(e);d.state.inputs.push(c);a.watchId=b});this.state.computing="fn";this.stage="main";this.recurse(c);e='"'+this.USE+" "+this.STRICT+'";\n'+this.filterPrefix()+"var fn="+this.generateFunction("fn","s,l,a,i")+e+this.watchFns()+"return fn;";e=(new Function("$filter","ensureSafeMemberName","ensureSafeObject","ensureSafeFunction","getStringValue",
"ensureSafeAssignContext","ifDefined","plus","text",e))(this.$filter,Ua,ra,od,ig,Ib,mg,pd,a);this.state=this.stage=void 0;e.literal=td(c);e.constant=c.constant;return e},USE:"use",STRICT:"strict",watchFns:function(){var a=[],b=this.state.inputs,d=this;r(b,function(b){a.push("var "+b+"="+d.generateFunction(b,"s"))});b.length&&a.push("fn.inputs=["+b.join(",")+"];");return a.join("")},generateFunction:function(a,b){return"function("+b+"){"+this.varsPrefix(a)+this.body(a)+"};"},filterPrefix:function(){var a=
[],b=this;r(this.state.filters,function(d,c){a.push(d+"=$filter("+b.escape(c)+")")});return a.length?"var "+a.join(",")+";":""},varsPrefix:function(a){return this.state[a].vars.length?"var "+this.state[a].vars.join(",")+";":""},body:function(a){return this.state[a].body.join("")},recurse:function(a,b,d,c,e,f){var g,h,k=this,l,m,n;c=c||A;if(!f&&x(a.watchId))b=b||this.nextId(),this.if_("i",this.lazyAssign(b,this.computedMember("i",a.watchId)),this.lazyRecurse(a,b,d,c,e,!0));else switch(a.type){case t.Program:r(a.body,
function(b,c){k.recurse(b.expression,void 0,void 0,function(a){h=a});c!==a.body.length-1?k.current().body.push(h,";"):k.return_(h)});break;case t.Literal:m=this.escape(a.value);this.assign(b,m);c(m);break;case t.UnaryExpression:this.recurse(a.argument,void 0,void 0,function(a){h=a});m=a.operator+"("+this.ifDefined(h,0)+")";this.assign(b,m);c(m);break;case t.BinaryExpression:this.recurse(a.left,void 0,void 0,function(a){g=a});this.recurse(a.right,void 0,void 0,function(a){h=a});m="+"===a.operator?
this.plus(g,h):"-"===a.operator?this.ifDefined(g,0)+a.operator+this.ifDefined(h,0):"("+g+")"+a.operator+"("+h+")";this.assign(b,m);c(m);break;case t.LogicalExpression:b=b||this.nextId();k.recurse(a.left,b);k.if_("&&"===a.operator?b:k.not(b),k.lazyRecurse(a.right,b));c(b);break;case t.ConditionalExpression:b=b||this.nextId();k.recurse(a.test,b);k.if_(b,k.lazyRecurse(a.alternate,b),k.lazyRecurse(a.consequent,b));c(b);break;case t.Identifier:b=b||this.nextId();d&&(d.context="inputs"===k.stage?"s":this.assign(this.nextId(),
this.getHasOwnProperty("l",a.name)+"?l:s"),d.computed=!1,d.name=a.name);Ua(a.name);k.if_("inputs"===k.stage||k.not(k.getHasOwnProperty("l",a.name)),function(){k.if_("inputs"===k.stage||"s",function(){e&&1!==e&&k.if_(k.not(k.nonComputedMember("s",a.name)),k.lazyAssign(k.nonComputedMember("s",a.name),"{}"));k.assign(b,k.nonComputedMember("s",a.name))})},b&&k.lazyAssign(b,k.nonComputedMember("l",a.name)));(k.state.expensiveChecks||Jb(a.name))&&k.addEnsureSafeObject(b);c(b);break;case t.MemberExpression:g=
d&&(d.context=this.nextId())||this.nextId();b=b||this.nextId();k.recurse(a.object,g,void 0,function(){k.if_(k.notNull(g),function(){e&&1!==e&&k.addEnsureSafeAssignContext(g);if(a.computed)h=k.nextId(),k.recurse(a.property,h),k.getStringValue(h),k.addEnsureSafeMemberName(h),e&&1!==e&&k.if_(k.not(k.computedMember(g,h)),k.lazyAssign(k.computedMember(g,h),"{}")),m=k.ensureSafeObject(k.computedMember(g,h)),k.assign(b,m),d&&(d.computed=!0,d.name=h);else{Ua(a.property.name);e&&1!==e&&k.if_(k.not(k.nonComputedMember(g,
a.property.name)),k.lazyAssign(k.nonComputedMember(g,a.property.name),"{}"));m=k.nonComputedMember(g,a.property.name);if(k.state.expensiveChecks||Jb(a.property.name))m=k.ensureSafeObject(m);k.assign(b,m);d&&(d.computed=!1,d.name=a.property.name)}},function(){k.assign(b,"undefined")});c(b)},!!e);break;case t.CallExpression:b=b||this.nextId();a.filter?(h=k.filter(a.callee.name),l=[],r(a.arguments,function(a){var b=k.nextId();k.recurse(a,b);l.push(b)}),m=h+"("+l.join(",")+")",k.assign(b,m),c(b)):(h=
k.nextId(),g={},l=[],k.recurse(a.callee,h,g,function(){k.if_(k.notNull(h),function(){k.addEnsureSafeFunction(h);r(a.arguments,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(k.ensureSafeObject(a))})});g.name?(k.state.expensiveChecks||k.addEnsureSafeObject(g.context),m=k.member(g.context,g.name,g.computed)+"("+l.join(",")+")"):m=h+"("+l.join(",")+")";m=k.ensureSafeObject(m);k.assign(b,m)},function(){k.assign(b,"undefined")});c(b)}));break;case t.AssignmentExpression:h=this.nextId();g=
{};if(!rd(a.left))throw ca("lval");this.recurse(a.left,void 0,g,function(){k.if_(k.notNull(g.context),function(){k.recurse(a.right,h);k.addEnsureSafeObject(k.member(g.context,g.name,g.computed));k.addEnsureSafeAssignContext(g.context);m=k.member(g.context,g.name,g.computed)+a.operator+h;k.assign(b,m);c(b||m)})},1);break;case t.ArrayExpression:l=[];r(a.elements,function(a){k.recurse(a,k.nextId(),void 0,function(a){l.push(a)})});m="["+l.join(",")+"]";this.assign(b,m);c(m);break;case t.ObjectExpression:l=
[];n=!1;r(a.properties,function(a){a.computed&&(n=!0)});n?(b=b||this.nextId(),this.assign(b,"{}"),r(a.properties,function(a){a.computed?(g=k.nextId(),k.recurse(a.key,g)):g=a.key.type===t.Identifier?a.key.name:""+a.key.value;h=k.nextId();k.recurse(a.value,h);k.assign(k.member(b,g,a.computed),h)})):(r(a.properties,function(b){k.recurse(b.value,a.constant?void 0:k.nextId(),void 0,function(a){l.push(k.escape(b.key.type===t.Identifier?b.key.name:""+b.key.value)+":"+a)})}),m="{"+l.join(",")+"}",this.assign(b,
m));c(b||m);break;case t.ThisExpression:this.assign(b,"s");c("s");break;case t.LocalsExpression:this.assign(b,"l");c("l");break;case t.NGValueParameter:this.assign(b,"v"),c("v")}},getHasOwnProperty:function(a,b){var d=a+"."+b,c=this.current().own;c.hasOwnProperty(d)||(c[d]=this.nextId(!1,a+"&&("+this.escape(b)+" in "+a+")"));return c[d]},assign:function(a,b){if(a)return this.current().body.push(a,"=",b,";"),a},filter:function(a){this.state.filters.hasOwnProperty(a)||(this.state.filters[a]=this.nextId(!0));
return this.state.filters[a]},ifDefined:function(a,b){return"ifDefined("+a+","+this.escape(b)+")"},plus:function(a,b){return"plus("+a+","+b+")"},return_:function(a){this.current().body.push("return ",a,";")},if_:function(a,b,d){if(!0===a)b();else{var c=this.current().body;c.push("if(",a,"){");b();c.push("}");d&&(c.push("else{"),d(),c.push("}"))}},not:function(a){return"!("+a+")"},notNull:function(a){return a+"!=null"},nonComputedMember:function(a,b){var d=/[^$_a-zA-Z0-9]/g;return/[$_a-zA-Z][$_a-zA-Z0-9]*/.test(b)?
a+"."+b:a+'["'+b.replace(d,this.stringEscapeFn)+'"]'},computedMember:function(a,b){return a+"["+b+"]"},member:function(a,b,d){return d?this.computedMember(a,b):this.nonComputedMember(a,b)},addEnsureSafeObject:function(a){this.current().body.push(this.ensureSafeObject(a),";")},addEnsureSafeMemberName:function(a){this.current().body.push(this.ensureSafeMemberName(a),";")},addEnsureSafeFunction:function(a){this.current().body.push(this.ensureSafeFunction(a),";")},addEnsureSafeAssignContext:function(a){this.current().body.push(this.ensureSafeAssignContext(a),
";")},ensureSafeObject:function(a){return"ensureSafeObject("+a+",text)"},ensureSafeMemberName:function(a){return"ensureSafeMemberName("+a+",text)"},ensureSafeFunction:function(a){return"ensureSafeFunction("+a+",text)"},getStringValue:function(a){this.assign(a,"getStringValue("+a+")")},ensureSafeAssignContext:function(a){return"ensureSafeAssignContext("+a+",text)"},lazyRecurse:function(a,b,d,c,e,f){var g=this;return function(){g.recurse(a,b,d,c,e,f)}},lazyAssign:function(a,b){var d=this;return function(){d.assign(a,
b)}},stringEscapeRegex:/[^ a-zA-Z0-9]/g,stringEscapeFn:function(a){return"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)},escape:function(a){if(F(a))return"'"+a.replace(this.stringEscapeRegex,this.stringEscapeFn)+"'";if(S(a))return a.toString();if(!0===a)return"true";if(!1===a)return"false";if(null===a)return"null";if("undefined"===typeof a)return"undefined";throw ca("esc");},nextId:function(a,b){var d="v"+this.state.nextId++;a||this.current().vars.push(d+(b?"="+b:""));return d},current:function(){return this.state[this.state.computing]}};
vd.prototype={compile:function(a,b){var d=this,c=this.astBuilder.ast(a);this.expression=a;this.expensiveChecks=b;$(c,d.$filter);var e,f;if(e=sd(c))f=this.recurse(e);e=qd(c.body);var g;e&&(g=[],r(e,function(a,b){var c=d.recurse(a);a.input=c;g.push(c);a.watchId=b}));var h=[];r(c.body,function(a){h.push(d.recurse(a.expression))});e=0===c.body.length?A:1===c.body.length?h[0]:function(a,b){var c;r(h,function(d){c=d(a,b)});return c};f&&(e.assign=function(a,b,c){return f(a,c,b)});g&&(e.inputs=g);e.literal=
td(c);e.constant=c.constant;return e},recurse:function(a,b,d){var c,e,f=this,g;if(a.input)return this.inputs(a.input,a.watchId);switch(a.type){case t.Literal:return this.value(a.value,b);case t.UnaryExpression:return e=this.recurse(a.argument),this["unary"+a.operator](e,b);case t.BinaryExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.LogicalExpression:return c=this.recurse(a.left),e=this.recurse(a.right),this["binary"+a.operator](c,e,b);case t.ConditionalExpression:return this["ternary?:"](this.recurse(a.test),
this.recurse(a.alternate),this.recurse(a.consequent),b);case t.Identifier:return Ua(a.name,f.expression),f.identifier(a.name,f.expensiveChecks||Jb(a.name),b,d,f.expression);case t.MemberExpression:return c=this.recurse(a.object,!1,!!d),a.computed||(Ua(a.property.name,f.expression),e=a.property.name),a.computed&&(e=this.recurse(a.property)),a.computed?this.computedMember(c,e,b,d,f.expression):this.nonComputedMember(c,e,f.expensiveChecks,b,d,f.expression);case t.CallExpression:return g=[],r(a.arguments,
function(a){g.push(f.recurse(a))}),a.filter&&(e=this.$filter(a.callee.name)),a.filter||(e=this.recurse(a.callee,!0)),a.filter?function(a,c,d,f){for(var n=[],p=0;p<g.length;++p)n.push(g[p](a,c,d,f));a=e.apply(void 0,n,f);return b?{context:void 0,name:void 0,value:a}:a}:function(a,c,d,m){var n=e(a,c,d,m),p;if(null!=n.value){ra(n.context,f.expression);od(n.value,f.expression);p=[];for(var s=0;s<g.length;++s)p.push(ra(g[s](a,c,d,m),f.expression));p=ra(n.value.apply(n.context,p),f.expression)}return b?
{value:p}:p};case t.AssignmentExpression:return c=this.recurse(a.left,!0,1),e=this.recurse(a.right),function(a,d,g,m){var n=c(a,d,g,m);a=e(a,d,g,m);ra(n.value,f.expression);Ib(n.context);n.context[n.name]=a;return b?{value:a}:a};case t.ArrayExpression:return g=[],r(a.elements,function(a){g.push(f.recurse(a))}),function(a,c,d,e){for(var f=[],p=0;p<g.length;++p)f.push(g[p](a,c,d,e));return b?{value:f}:f};case t.ObjectExpression:return g=[],r(a.properties,function(a){a.computed?g.push({key:f.recurse(a.key),
computed:!0,value:f.recurse(a.value)}):g.push({key:a.key.type===t.Identifier?a.key.name:""+a.key.value,computed:!1,value:f.recurse(a.value)})}),function(a,c,d,e){for(var f={},p=0;p<g.length;++p)g[p].computed?f[g[p].key(a,c,d,e)]=g[p].value(a,c,d,e):f[g[p].key]=g[p].value(a,c,d,e);return b?{value:f}:f};case t.ThisExpression:return function(a){return b?{value:a}:a};case t.LocalsExpression:return function(a,c){return b?{value:c}:c};case t.NGValueParameter:return function(a,c,d){return b?{value:d}:d}}},
"unary+":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?+d:0;return b?{value:d}:d}},"unary-":function(a,b){return function(d,c,e,f){d=a(d,c,e,f);d=x(d)?-d:0;return b?{value:d}:d}},"unary!":function(a,b){return function(d,c,e,f){d=!a(d,c,e,f);return b?{value:d}:d}},"binary+":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=pd(h,c);return d?{value:h}:h}},"binary-":function(a,b,d){return function(c,e,f,g){var h=a(c,e,f,g);c=b(c,e,f,g);h=(x(h)?h:0)-(x(c)?c:0);return d?
{value:h}:h}},"binary*":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)*b(c,e,f,g);return d?{value:c}:c}},"binary/":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)/b(c,e,f,g);return d?{value:c}:c}},"binary%":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)%b(c,e,f,g);return d?{value:c}:c}},"binary===":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)===b(c,e,f,g);return d?{value:c}:c}},"binary!==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!==b(c,e,f,g);return d?{value:c}:
c}},"binary==":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)==b(c,e,f,g);return d?{value:c}:c}},"binary!=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)!=b(c,e,f,g);return d?{value:c}:c}},"binary<":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<b(c,e,f,g);return d?{value:c}:c}},"binary>":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)>b(c,e,f,g);return d?{value:c}:c}},"binary<=":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)<=b(c,e,f,g);return d?{value:c}:c}},"binary>=":function(a,
b,d){return function(c,e,f,g){c=a(c,e,f,g)>=b(c,e,f,g);return d?{value:c}:c}},"binary&&":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)&&b(c,e,f,g);return d?{value:c}:c}},"binary||":function(a,b,d){return function(c,e,f,g){c=a(c,e,f,g)||b(c,e,f,g);return d?{value:c}:c}},"ternary?:":function(a,b,d,c){return function(e,f,g,h){e=a(e,f,g,h)?b(e,f,g,h):d(e,f,g,h);return c?{value:e}:e}},value:function(a,b){return function(){return b?{context:void 0,name:void 0,value:a}:a}},identifier:function(a,
b,d,c,e){return function(f,g,h,k){f=g&&a in g?g:f;c&&1!==c&&f&&!f[a]&&(f[a]={});g=f?f[a]:void 0;b&&ra(g,e);return d?{context:f,name:a,value:g}:g}},computedMember:function(a,b,d,c,e){return function(f,g,h,k){var l=a(f,g,h,k),m,n;null!=l&&(m=b(f,g,h,k),m+="",Ua(m,e),c&&1!==c&&(Ib(l),l&&!l[m]&&(l[m]={})),n=l[m],ra(n,e));return d?{context:l,name:m,value:n}:n}},nonComputedMember:function(a,b,d,c,e,f){return function(g,h,k,l){g=a(g,h,k,l);e&&1!==e&&(Ib(g),g&&!g[b]&&(g[b]={}));h=null!=g?g[b]:void 0;(d||
Jb(b))&&ra(h,f);return c?{context:g,name:b,value:h}:h}},inputs:function(a,b){return function(d,c,e,f){return f?f[b]:a(d,c,e)}}};var kc=function(a,b,d){this.lexer=a;this.$filter=b;this.options=d;this.ast=new t(a,d);this.astCompiler=d.csp?new vd(this.ast,b):new ud(this.ast,b)};kc.prototype={constructor:kc,parse:function(a){return this.astCompiler.compile(a,this.options.expensiveChecks)}};var ng=Object.prototype.valueOf,ya=O("$sce"),ma={HTML:"html",CSS:"css",URL:"url",RESOURCE_URL:"resourceUrl",JS:"js"},
pg=O("$compile"),Y=E.document.createElement("a"),zd=qa(E.location.href);Ad.$inject=["$document"];Mc.$inject=["$provide"];var Hd=22,Gd=".",mc="0";Bd.$inject=["$locale"];Dd.$inject=["$locale"];var Ag={yyyy:X("FullYear",4,0,!1,!0),yy:X("FullYear",2,0,!0,!0),y:X("FullYear",1,0,!1,!0),MMMM:kb("Month"),MMM:kb("Month",!0),MM:X("Month",2,1),M:X("Month",1,1),LLLL:kb("Month",!1,!0),dd:X("Date",2),d:X("Date",1),HH:X("Hours",2),H:X("Hours",1),hh:X("Hours",2,-12),h:X("Hours",1,-12),mm:X("Minutes",2),m:X("Minutes",
1),ss:X("Seconds",2),s:X("Seconds",1),sss:X("Milliseconds",3),EEEE:kb("Day"),EEE:kb("Day",!0),a:function(a,b){return 12>a.getHours()?b.AMPMS[0]:b.AMPMS[1]},Z:function(a,b,d){a=-1*d;return a=(0<=a?"+":"")+(Kb(Math[0<a?"floor":"ceil"](a/60),2)+Kb(Math.abs(a%60),2))},ww:Jd(2),w:Jd(1),G:nc,GG:nc,GGG:nc,GGGG:function(a,b){return 0>=a.getFullYear()?b.ERANAMES[0]:b.ERANAMES[1]}},zg=/((?:[^yMLdHhmsaZEwG']+)|(?:'(?:[^']|'')*')|(?:E+|y+|M+|L+|d+|H+|h+|m+|s+|a|Z|G+|w+))(.*)/,yg=/^\-?\d+$/;Cd.$inject=["$locale"];
var tg=da(M),ug=da(ub);Ed.$inject=["$parse"];var pe=da({restrict:"E",compile:function(a,b){if(!b.href&&!b.xlinkHref)return function(a,b){if("a"===b[0].nodeName.toLowerCase()){var e="[object SVGAnimatedString]"===ka.call(b.prop("href"))?"xlink:href":"href";b.on("click",function(a){b.attr(e)||a.preventDefault()})}}}}),vb={};r(Eb,function(a,b){function d(a,d,e){a.$watch(e[c],function(a){e.$set(b,!!a)})}if("multiple"!=a){var c=xa("ng-"+b),e=d;"checked"===a&&(e=function(a,b,e){e.ngModel!==e[c]&&d(a,b,
e)});vb[c]=function(){return{restrict:"A",priority:100,link:e}}}});r(cd,function(a,b){vb[b]=function(){return{priority:100,link:function(a,c,e){if("ngPattern"===b&&"/"==e.ngPattern.charAt(0)&&(c=e.ngPattern.match(Cg))){e.$set("ngPattern",new RegExp(c[1],c[2]));return}a.$watch(e[b],function(a){e.$set(b,a)})}}}});r(["src","srcset","href"],function(a){var b=xa("ng-"+a);vb[b]=function(){return{priority:99,link:function(d,c,e){var f=a,g=a;"href"===a&&"[object SVGAnimatedString]"===ka.call(c.prop("href"))&&
(g="xlinkHref",e.$attr[g]="xlink:href",f=null);e.$observe(b,function(b){b?(e.$set(g,b),Ba&&f&&c.prop(f,e[g])):"href"===a&&e.$set(g,null)})}}}});var Lb={$addControl:A,$$renameControl:function(a,b){a.$name=b},$removeControl:A,$setValidity:A,$setDirty:A,$setPristine:A,$setSubmitted:A};Kd.$inject=["$element","$attrs","$scope","$animate","$interpolate"];var Td=function(a){return["$timeout","$parse",function(b,d){function c(a){return""===a?d('this[""]').assign:d(a).assign||A}return{name:"form",restrict:a?
"EAC":"E",require:["form","^^?form"],controller:Kd,compile:function(d,f){d.addClass(Va).addClass(ob);var g=f.name?"name":a&&f.ngForm?"ngForm":!1;return{pre:function(a,d,e,f){var n=f[0];if(!("action"in e)){var p=function(b){a.$apply(function(){n.$commitViewValue();n.$setSubmitted()});b.preventDefault()};d[0].addEventListener("submit",p,!1);d.on("$destroy",function(){b(function(){d[0].removeEventListener("submit",p,!1)},0,!1)})}(f[1]||n.$$parentForm).$addControl(n);var s=g?c(n.$name):A;g&&(s(a,n),e.$observe(g,
function(b){n.$name!==b&&(s(a,void 0),n.$$parentForm.$$renameControl(n,b),s=c(n.$name),s(a,n))}));d.on("$destroy",function(){n.$$parentForm.$removeControl(n);s(a,void 0);R(n,Lb)})}}}}}]},qe=Td(),De=Td(!0),Bg=/^\d{4,}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+(?:[+-][0-2]\d:[0-5]\d|Z)$/,Kg=/^[a-z][a-z\d.+-]*:\/*(?:[^:@]+(?::[^@]+)?@)?(?:[^\s:/?#]+|\[[a-f\d:]+\])(?::\d+)?(?:\/[^?#]*)?(?:\?[^#]*)?(?:#.*)?$/i,Lg=/^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+\/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/,
Mg=/^\s*(\-|\+)?(\d+|(\d*(\.\d*)))([eE][+-]?\d+)?\s*$/,Ud=/^(\d{4,})-(\d{2})-(\d{2})$/,Vd=/^(\d{4,})-(\d\d)-(\d\d)T(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,rc=/^(\d{4,})-W(\d\d)$/,Wd=/^(\d{4,})-(\d\d)$/,Xd=/^(\d\d):(\d\d)(?::(\d\d)(\.\d{1,3})?)?$/,Md=T();r(["date","datetime-local","month","time","week"],function(a){Md[a]=!0});var Yd={text:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c)},date:mb("date",Ud,Nb(Ud,["yyyy","MM","dd"]),"yyyy-MM-dd"),"datetime-local":mb("datetimelocal",Vd,Nb(Vd,"yyyy MM dd HH mm ss sss".split(" ")),
"yyyy-MM-ddTHH:mm:ss.sss"),time:mb("time",Xd,Nb(Xd,["HH","mm","ss","sss"]),"HH:mm:ss.sss"),week:mb("week",rc,function(a,b){if(ia(a))return a;if(F(a)){rc.lastIndex=0;var d=rc.exec(a);if(d){var c=+d[1],e=+d[2],f=d=0,g=0,h=0,k=Id(c),e=7*(e-1);b&&(d=b.getHours(),f=b.getMinutes(),g=b.getSeconds(),h=b.getMilliseconds());return new Date(c,0,k.getDate()+e,d,f,g,h)}}return NaN},"yyyy-Www"),month:mb("month",Wd,Nb(Wd,["yyyy","MM"]),"yyyy-MM"),number:function(a,b,d,c,e,f){Nd(a,b,d,c);lb(a,b,d,c,e,f);c.$$parserName=
"number";c.$parsers.push(function(a){if(c.$isEmpty(a))return null;if(Mg.test(a))return parseFloat(a)});c.$formatters.push(function(a){if(!c.$isEmpty(a)){if(!S(a))throw nb("numfmt",a);a=a.toString()}return a});if(x(d.min)||d.ngMin){var g;c.$validators.min=function(a){return c.$isEmpty(a)||w(g)||a>=g};d.$observe("min",function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));g=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}if(x(d.max)||d.ngMax){var h;c.$validators.max=function(a){return c.$isEmpty(a)||w(h)||a<=h};d.$observe("max",
function(a){x(a)&&!S(a)&&(a=parseFloat(a,10));h=S(a)&&!isNaN(a)?a:void 0;c.$validate()})}},url:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="url";c.$validators.url=function(a,b){var d=a||b;return c.$isEmpty(d)||Kg.test(d)}},email:function(a,b,d,c,e,f){lb(a,b,d,c,e,f);pc(c);c.$$parserName="email";c.$validators.email=function(a,b){var d=a||b;return c.$isEmpty(d)||Lg.test(d)}},radio:function(a,b,d,c){w(d.name)&&b.attr("name",++pb);b.on("click",function(a){b[0].checked&&c.$setViewValue(d.value,
a&&a.type)});c.$render=function(){b[0].checked=d.value==c.$viewValue};d.$observe("value",c.$render)},checkbox:function(a,b,d,c,e,f,g,h){var k=Od(h,a,"ngTrueValue",d.ngTrueValue,!0),l=Od(h,a,"ngFalseValue",d.ngFalseValue,!1);b.on("click",function(a){c.$setViewValue(b[0].checked,a&&a.type)});c.$render=function(){b[0].checked=c.$viewValue};c.$isEmpty=function(a){return!1===a};c.$formatters.push(function(a){return na(a,k)});c.$parsers.push(function(a){return a?k:l})},hidden:A,button:A,submit:A,reset:A,
file:A},Gc=["$browser","$sniffer","$filter","$parse",function(a,b,d,c){return{restrict:"E",require:["?ngModel"],link:{pre:function(e,f,g,h){h[0]&&(Yd[M(g.type)]||Yd.text)(e,f,g,h[0],b,a,d,c)}}}}],Ng=/^(true|false|\d+)$/,Ve=function(){return{restrict:"A",priority:100,compile:function(a,b){return Ng.test(b.ngValue)?function(a,b,e){e.$set("value",a.$eval(e.ngValue))}:function(a,b,e){a.$watch(e.ngValue,function(a){e.$set("value",a)})}}}},ve=["$compile",function(a){return{restrict:"AC",compile:function(b){a.$$addBindingClass(b);
return function(b,c,e){a.$$addBindingInfo(c,e.ngBind);c=c[0];b.$watch(e.ngBind,function(a){c.textContent=w(a)?"":a})}}}}],xe=["$interpolate","$compile",function(a,b){return{compile:function(d){b.$$addBindingClass(d);return function(c,d,f){c=a(d.attr(f.$attr.ngBindTemplate));b.$$addBindingInfo(d,c.expressions);d=d[0];f.$observe("ngBindTemplate",function(a){d.textContent=w(a)?"":a})}}}}],we=["$sce","$parse","$compile",function(a,b,d){return{restrict:"A",compile:function(c,e){var f=b(e.ngBindHtml),g=
b(e.ngBindHtml,function(b){return a.valueOf(b)});d.$$addBindingClass(c);return function(b,c,e){d.$$addBindingInfo(c,e.ngBindHtml);b.$watch(g,function(){var d=f(b);c.html(a.getTrustedHtml(d)||"")})}}}}],Ue=da({restrict:"A",require:"ngModel",link:function(a,b,d,c){c.$viewChangeListeners.push(function(){a.$eval(d.ngChange)})}}),ye=qc("",!0),Ae=qc("Odd",0),ze=qc("Even",1),Be=Ma({compile:function(a,b){b.$set("ngCloak",void 0);a.removeClass("ng-cloak")}}),Ce=[function(){return{restrict:"A",scope:!0,controller:"@",
priority:500}}],Lc={},Og={blur:!0,focus:!0};r("click dblclick mousedown mouseup mouseover mouseout mousemove mouseenter mouseleave keydown keyup keypress submit focus blur copy cut paste".split(" "),function(a){var b=xa("ng-"+a);Lc[b]=["$parse","$rootScope",function(d,c){return{restrict:"A",compile:function(e,f){var g=d(f[b],null,!0);return function(b,d){d.on(a,function(d){var e=function(){g(b,{$event:d})};Og[a]&&c.$$phase?b.$evalAsync(e):b.$apply(e)})}}}}]});var Fe=["$animate","$compile",function(a,
b){return{multiElement:!0,transclude:"element",priority:600,terminal:!0,restrict:"A",$$tlb:!0,link:function(d,c,e,f,g){var h,k,l;d.$watch(e.ngIf,function(d){d?k||g(function(d,f){k=f;d[d.length++]=b.$$createComment("end ngIf",e.ngIf);h={clone:d};a.enter(d,c.parent(),c)}):(l&&(l.remove(),l=null),k&&(k.$destroy(),k=null),h&&(l=tb(h.clone),a.leave(l).then(function(){l=null}),h=null))})}}}],Ge=["$templateRequest","$anchorScroll","$animate",function(a,b,d){return{restrict:"ECA",priority:400,terminal:!0,
transclude:"element",controller:ea.noop,compile:function(c,e){var f=e.ngInclude||e.src,g=e.onload||"",h=e.autoscroll;return function(c,e,m,n,p){var s=0,r,t,q,w=function(){t&&(t.remove(),t=null);r&&(r.$destroy(),r=null);q&&(d.leave(q).then(function(){t=null}),t=q,q=null)};c.$watch(f,function(f){var m=function(){!x(h)||h&&!c.$eval(h)||b()},t=++s;f?(a(f,!0).then(function(a){if(!c.$$destroyed&&t===s){var b=c.$new();n.template=a;a=p(b,function(a){w();d.enter(a,null,e).then(m)});r=b;q=a;r.$emit("$includeContentLoaded",
f);c.$eval(g)}},function(){c.$$destroyed||t!==s||(w(),c.$emit("$includeContentError",f))}),c.$emit("$includeContentRequested",f)):(w(),n.template=null)})}}}}],Xe=["$compile",function(a){return{restrict:"ECA",priority:-400,require:"ngInclude",link:function(b,d,c,e){ka.call(d[0]).match(/SVG/)?(d.empty(),a(Oc(e.template,E.document).childNodes)(b,function(a){d.append(a)},{futureParentElement:d})):(d.html(e.template),a(d.contents())(b))}}}],He=Ma({priority:450,compile:function(){return{pre:function(a,
b,d){a.$eval(d.ngInit)}}}}),Te=function(){return{restrict:"A",priority:100,require:"ngModel",link:function(a,b,d,c){var e=b.attr(d.$attr.ngList)||", ",f="false"!==d.ngTrim,g=f?W(e):e;c.$parsers.push(function(a){if(!w(a)){var b=[];a&&r(a.split(g),function(a){a&&b.push(f?W(a):a)});return b}});c.$formatters.push(function(a){if(J(a))return a.join(e)});c.$isEmpty=function(a){return!a||!a.length}}}},ob="ng-valid",Pd="ng-invalid",Va="ng-pristine",Mb="ng-dirty",Rd="ng-pending",nb=O("ngModel"),Pg=["$scope",
"$exceptionHandler","$attrs","$element","$parse","$animate","$timeout","$rootScope","$q","$interpolate",function(a,b,d,c,e,f,g,h,k,l){this.$modelValue=this.$viewValue=Number.NaN;this.$$rawModelValue=void 0;this.$validators={};this.$asyncValidators={};this.$parsers=[];this.$formatters=[];this.$viewChangeListeners=[];this.$untouched=!0;this.$touched=!1;this.$pristine=!0;this.$dirty=!1;this.$valid=!0;this.$invalid=!1;this.$error={};this.$$success={};this.$pending=void 0;this.$name=l(d.name||"",!1)(a);
this.$$parentForm=Lb;var m=e(d.ngModel),n=m.assign,p=m,s=n,t=null,I,q=this;this.$$setOptions=function(a){if((q.$options=a)&&a.getterSetter){var b=e(d.ngModel+"()"),f=e(d.ngModel+"($$$p)");p=function(a){var c=m(a);z(c)&&(c=b(a));return c};s=function(a,b){z(m(a))?f(a,{$$$p:b}):n(a,b)}}else if(!m.assign)throw nb("nonassign",d.ngModel,va(c));};this.$render=A;this.$isEmpty=function(a){return w(a)||""===a||null===a||a!==a};this.$$updateEmptyClasses=function(a){q.$isEmpty(a)?(f.removeClass(c,"ng-not-empty"),
f.addClass(c,"ng-empty")):(f.removeClass(c,"ng-empty"),f.addClass(c,"ng-not-empty"))};var K=0;Ld({ctrl:this,$element:c,set:function(a,b){a[b]=!0},unset:function(a,b){delete a[b]},$animate:f});this.$setPristine=function(){q.$dirty=!1;q.$pristine=!0;f.removeClass(c,Mb);f.addClass(c,Va)};this.$setDirty=function(){q.$dirty=!0;q.$pristine=!1;f.removeClass(c,Va);f.addClass(c,Mb);q.$$parentForm.$setDirty()};this.$setUntouched=function(){q.$touched=!1;q.$untouched=!0;f.setClass(c,"ng-untouched","ng-touched")};
this.$setTouched=function(){q.$touched=!0;q.$untouched=!1;f.setClass(c,"ng-touched","ng-untouched")};this.$rollbackViewValue=function(){g.cancel(t);q.$viewValue=q.$$lastCommittedViewValue;q.$render()};this.$validate=function(){if(!S(q.$modelValue)||!isNaN(q.$modelValue)){var a=q.$$rawModelValue,b=q.$valid,c=q.$modelValue,d=q.$options&&q.$options.allowInvalid;q.$$runValidators(a,q.$$lastCommittedViewValue,function(e){d||b===e||(q.$modelValue=e?a:void 0,q.$modelValue!==c&&q.$$writeModelToScope())})}};
this.$$runValidators=function(a,b,c){function d(){var c=!0;r(q.$validators,function(d,e){var g=d(a,b);c=c&&g;f(e,g)});return c?!0:(r(q.$asyncValidators,function(a,b){f(b,null)}),!1)}function e(){var c=[],d=!0;r(q.$asyncValidators,function(e,g){var h=e(a,b);if(!h||!z(h.then))throw nb("nopromise",h);f(g,void 0);c.push(h.then(function(){f(g,!0)},function(){d=!1;f(g,!1)}))});c.length?k.all(c).then(function(){g(d)},A):g(!0)}function f(a,b){h===K&&q.$setValidity(a,b)}function g(a){h===K&&c(a)}K++;var h=
K;(function(){var a=q.$$parserName||"parse";if(w(I))f(a,null);else return I||(r(q.$validators,function(a,b){f(b,null)}),r(q.$asyncValidators,function(a,b){f(b,null)})),f(a,I),I;return!0})()?d()?e():g(!1):g(!1)};this.$commitViewValue=function(){var a=q.$viewValue;g.cancel(t);if(q.$$lastCommittedViewValue!==a||""===a&&q.$$hasNativeValidators)q.$$updateEmptyClasses(a),q.$$lastCommittedViewValue=a,q.$pristine&&this.$setDirty(),this.$$parseAndValidate()};this.$$parseAndValidate=function(){var b=q.$$lastCommittedViewValue;
if(I=w(b)?void 0:!0)for(var c=0;c<q.$parsers.length;c++)if(b=q.$parsers[c](b),w(b)){I=!1;break}S(q.$modelValue)&&isNaN(q.$modelValue)&&(q.$modelValue=p(a));var d=q.$modelValue,e=q.$options&&q.$options.allowInvalid;q.$$rawModelValue=b;e&&(q.$modelValue=b,q.$modelValue!==d&&q.$$writeModelToScope());q.$$runValidators(b,q.$$lastCommittedViewValue,function(a){e||(q.$modelValue=a?b:void 0,q.$modelValue!==d&&q.$$writeModelToScope())})};this.$$writeModelToScope=function(){s(a,q.$modelValue);r(q.$viewChangeListeners,
function(a){try{a()}catch(c){b(c)}})};this.$setViewValue=function(a,b){q.$viewValue=a;q.$options&&!q.$options.updateOnDefault||q.$$debounceViewValueCommit(b)};this.$$debounceViewValueCommit=function(b){var c=0,d=q.$options;d&&x(d.debounce)&&(d=d.debounce,S(d)?c=d:S(d[b])?c=d[b]:S(d["default"])&&(c=d["default"]));g.cancel(t);c?t=g(function(){q.$commitViewValue()},c):h.$$phase?q.$commitViewValue():a.$apply(function(){q.$commitViewValue()})};a.$watch(function(){var b=p(a);if(b!==q.$modelValue&&(q.$modelValue===
q.$modelValue||b===b)){q.$modelValue=q.$$rawModelValue=b;I=void 0;for(var c=q.$formatters,d=c.length,e=b;d--;)e=c[d](e);q.$viewValue!==e&&(q.$$updateEmptyClasses(e),q.$viewValue=q.$$lastCommittedViewValue=e,q.$render(),q.$$runValidators(b,e,A))}return b})}],Se=["$rootScope",function(a){return{restrict:"A",require:["ngModel","^?form","^?ngModelOptions"],controller:Pg,priority:1,compile:function(b){b.addClass(Va).addClass("ng-untouched").addClass(ob);return{pre:function(a,b,e,f){var g=f[0];b=f[1]||
g.$$parentForm;g.$$setOptions(f[2]&&f[2].$options);b.$addControl(g);e.$observe("name",function(a){g.$name!==a&&g.$$parentForm.$$renameControl(g,a)});a.$on("$destroy",function(){g.$$parentForm.$removeControl(g)})},post:function(b,c,e,f){var g=f[0];if(g.$options&&g.$options.updateOn)c.on(g.$options.updateOn,function(a){g.$$debounceViewValueCommit(a&&a.type)});c.on("blur",function(){g.$touched||(a.$$phase?b.$evalAsync(g.$setTouched):b.$apply(g.$setTouched))})}}}}}],Qg=/(\s+|^)default(\s+|$)/,We=function(){return{restrict:"A",
controller:["$scope","$attrs",function(a,b){var d=this;this.$options=Z(a.$eval(b.ngModelOptions));x(this.$options.updateOn)?(this.$options.updateOnDefault=!1,this.$options.updateOn=W(this.$options.updateOn.replace(Qg,function(){d.$options.updateOnDefault=!0;return" "}))):this.$options.updateOnDefault=!0}]}},Ie=Ma({terminal:!0,priority:1E3}),Rg=O("ngOptions"),Sg=/^\s*([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+group\s+by\s+([\s\S]+?))?(?:\s+disable\s+when\s+([\s\S]+?))?\s+for\s+(?:([\$\w][\$\w]*)|(?:\(\s*([\$\w][\$\w]*)\s*,\s*([\$\w][\$\w]*)\s*\)))\s+in\s+([\s\S]+?)(?:\s+track\s+by\s+([\s\S]+?))?$/,
Qe=["$compile","$document","$parse",function(a,b,d){function c(a,b,c){function e(a,b,c,d,f){this.selectValue=a;this.viewValue=b;this.label=c;this.group=d;this.disabled=f}function f(a){var b;if(!r&&oa(a))b=a;else{b=[];for(var c in a)a.hasOwnProperty(c)&&"$"!==c.charAt(0)&&b.push(c)}return b}var n=a.match(Sg);if(!n)throw Rg("iexp",a,va(b));var p=n[5]||n[7],r=n[6];a=/ as /.test(n[0])&&n[1];var t=n[9];b=d(n[2]?n[1]:p);var x=a&&d(a)||b,q=t&&d(t),w=t?function(a,b){return q(c,b)}:function(a){return Ga(a)},
v=function(a,b){return w(a,D(a,b))},u=d(n[2]||n[1]),y=d(n[3]||""),A=d(n[4]||""),z=d(n[8]),C={},D=r?function(a,b){C[r]=b;C[p]=a;return C}:function(a){C[p]=a;return C};return{trackBy:t,getTrackByValue:v,getWatchables:d(z,function(a){var b=[];a=a||[];for(var d=f(a),e=d.length,g=0;g<e;g++){var h=a===d?g:d[g],l=a[h],h=D(l,h),l=w(l,h);b.push(l);if(n[2]||n[1])l=u(c,h),b.push(l);n[4]&&(h=A(c,h),b.push(h))}return b}),getOptions:function(){for(var a=[],b={},d=z(c)||[],g=f(d),h=g.length,n=0;n<h;n++){var p=d===
g?n:g[n],q=D(d[p],p),r=x(c,q),p=w(r,q),s=u(c,q),C=y(c,q),q=A(c,q),r=new e(p,r,s,C,q);a.push(r);b[p]=r}return{items:a,selectValueMap:b,getOptionFromViewValue:function(a){return b[v(a)]},getViewValueFromOption:function(a){return t?ea.copy(a.viewValue):a.viewValue}}}}}var e=E.document.createElement("option"),f=E.document.createElement("optgroup");return{restrict:"A",terminal:!0,require:["select","ngModel"],link:{pre:function(a,b,c,d){d[0].registerOption=A},post:function(d,h,k,l){function m(a,b){a.element=
b;b.disabled=a.disabled;a.label!==b.label&&(b.label=a.label,b.textContent=a.label);a.value!==b.value&&(b.value=a.selectValue)}function n(){var a=y&&p.readValue();if(y)for(var b=y.items.length-1;0<=b;b--){var c=y.items[b];c.group?Db(c.element.parentNode):Db(c.element)}y=z.getOptions();var d={};v&&h.prepend(w);y.items.forEach(function(a){var b;if(x(a.group)){b=d[a.group];b||(b=f.cloneNode(!1),E.appendChild(b),b.label=a.group,d[a.group]=b);var c=e.cloneNode(!1)}else b=E,c=e.cloneNode(!1);b.appendChild(c);
m(a,c)});h[0].appendChild(E);s.$render();s.$isEmpty(a)||(b=p.readValue(),(z.trackBy||t?na(a,b):a===b)||(s.$setViewValue(b),s.$render()))}var p=l[0],s=l[1],t=k.multiple,w;l=0;for(var q=h.children(),A=q.length;l<A;l++)if(""===q[l].value){w=q.eq(l);break}var v=!!w,u=B(e.cloneNode(!1));u.val("?");var y,z=c(k.ngOptions,h,d),E=b[0].createDocumentFragment();t?(s.$isEmpty=function(a){return!a||0===a.length},p.writeValue=function(a){y.items.forEach(function(a){a.element.selected=!1});a&&a.forEach(function(a){if(a=
y.getOptionFromViewValue(a))a.element.selected=!0})},p.readValue=function(){var a=h.val()||[],b=[];r(a,function(a){(a=y.selectValueMap[a])&&!a.disabled&&b.push(y.getViewValueFromOption(a))});return b},z.trackBy&&d.$watchCollection(function(){if(J(s.$viewValue))return s.$viewValue.map(function(a){return z.getTrackByValue(a)})},function(){s.$render()})):(p.writeValue=function(a){var b=y.getOptionFromViewValue(a);b?(h[0].value!==b.selectValue&&(u.remove(),v||w.remove(),h[0].value=b.selectValue,b.element.selected=
!0),b.element.setAttribute("selected","selected")):null===a||v?(u.remove(),v||h.prepend(w),h.val(""),w.prop("selected",!0),w.attr("selected",!0)):(v||w.remove(),h.prepend(u),h.val("?"),u.prop("selected",!0),u.attr("selected",!0))},p.readValue=function(){var a=y.selectValueMap[h.val()];return a&&!a.disabled?(v||w.remove(),u.remove(),y.getViewValueFromOption(a)):null},z.trackBy&&d.$watch(function(){return z.getTrackByValue(s.$viewValue)},function(){s.$render()}));v?(w.remove(),a(w)(d),w.removeClass("ng-scope")):
w=B(e.cloneNode(!1));h.empty();n();d.$watchCollection(z.getWatchables,n)}}}}],Je=["$locale","$interpolate","$log",function(a,b,d){var c=/{}/g,e=/^when(Minus)?(.+)$/;return{link:function(f,g,h){function k(a){g.text(a||"")}var l=h.count,m=h.$attr.when&&g.attr(h.$attr.when),n=h.offset||0,p=f.$eval(m)||{},s={},t=b.startSymbol(),x=b.endSymbol(),q=t+l+"-"+n+x,z=ea.noop,v;r(h,function(a,b){var c=e.exec(b);c&&(c=(c[1]?"-":"")+M(c[2]),p[c]=g.attr(h.$attr[b]))});r(p,function(a,d){s[d]=b(a.replace(c,q))});f.$watch(l,
function(b){var c=parseFloat(b),e=isNaN(c);e||c in p||(c=a.pluralCat(c-n));c===v||e&&S(v)&&isNaN(v)||(z(),e=s[c],w(e)?(null!=b&&d.debug("ngPluralize: no rule defined for '"+c+"' in "+m),z=A,k()):z=f.$watch(e,k),v=c)})}}}],Ke=["$parse","$animate","$compile",function(a,b,d){var c=O("ngRepeat"),e=function(a,b,c,d,e,m,n){a[c]=d;e&&(a[e]=m);a.$index=b;a.$first=0===b;a.$last=b===n-1;a.$middle=!(a.$first||a.$last);a.$odd=!(a.$even=0===(b&1))};return{restrict:"A",multiElement:!0,transclude:"element",priority:1E3,
terminal:!0,$$tlb:!0,compile:function(f,g){var h=g.ngRepeat,k=d.$$createComment("end ngRepeat",h),l=h.match(/^\s*([\s\S]+?)\s+in\s+([\s\S]+?)(?:\s+as\s+([\s\S]+?))?(?:\s+track\s+by\s+([\s\S]+?))?\s*$/);if(!l)throw c("iexp",h);var m=l[1],n=l[2],p=l[3],s=l[4],l=m.match(/^(?:(\s*[\$\w]+)|\(\s*([\$\w]+)\s*,\s*([\$\w]+)\s*\))$/);if(!l)throw c("iidexp",m);var t=l[3]||l[1],w=l[2];if(p&&(!/^[$a-zA-Z_][$a-zA-Z0-9_]*$/.test(p)||/^(null|undefined|this|\$index|\$first|\$middle|\$last|\$even|\$odd|\$parent|\$root|\$id)$/.test(p)))throw c("badident",
p);var q,x,v,u,y={$id:Ga};s?q=a(s):(v=function(a,b){return Ga(b)},u=function(a){return a});return function(a,d,f,g,l){q&&(x=function(b,c,d){w&&(y[w]=b);y[t]=c;y.$index=d;return q(a,y)});var m=T();a.$watchCollection(n,function(f){var g,n,q=d[0],s,y=T(),z,A,E,C,D,B,F;p&&(a[p]=f);if(oa(f))D=f,n=x||v;else for(F in n=x||u,D=[],f)sa.call(f,F)&&"$"!==F.charAt(0)&&D.push(F);z=D.length;F=Array(z);for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],C=n(A,E,g),m[C])B=m[C],delete m[C],y[C]=B,F[g]=B;else{if(y[C])throw r(F,
function(a){a&&a.scope&&(m[a.id]=a)}),c("dupes",h,C,E);F[g]={id:C,scope:void 0,clone:void 0};y[C]=!0}for(s in m){B=m[s];C=tb(B.clone);b.leave(C);if(C[0].parentNode)for(g=0,n=C.length;g<n;g++)C[g].$$NG_REMOVED=!0;B.scope.$destroy()}for(g=0;g<z;g++)if(A=f===D?g:D[g],E=f[A],B=F[g],B.scope){s=q;do s=s.nextSibling;while(s&&s.$$NG_REMOVED);B.clone[0]!=s&&b.move(tb(B.clone),null,q);q=B.clone[B.clone.length-1];e(B.scope,g,t,E,w,A,z)}else l(function(a,c){B.scope=c;var d=k.cloneNode(!1);a[a.length++]=d;b.enter(a,
null,q);q=d;B.clone=a;y[B.id]=B;e(B.scope,g,t,E,w,A,z)});m=y})}}}}],Le=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngShow,function(b){a[b?"removeClass":"addClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Ee=["$animate",function(a){return{restrict:"A",multiElement:!0,link:function(b,d,c){b.$watch(c.ngHide,function(b){a[b?"addClass":"removeClass"](d,"ng-hide",{tempClasses:"ng-hide-animate"})})}}}],Me=Ma(function(a,b,d){a.$watch(d.ngStyle,function(a,
d){d&&a!==d&&r(d,function(a,c){b.css(c,"")});a&&b.css(a)},!0)}),Ne=["$animate","$compile",function(a,b){return{require:"ngSwitch",controller:["$scope",function(){this.cases={}}],link:function(d,c,e,f){var g=[],h=[],k=[],l=[],m=function(a,b){return function(){a.splice(b,1)}};d.$watch(e.ngSwitch||e.on,function(c){var d,e;d=0;for(e=k.length;d<e;++d)a.cancel(k[d]);d=k.length=0;for(e=l.length;d<e;++d){var t=tb(h[d].clone);l[d].$destroy();(k[d]=a.leave(t)).then(m(k,d))}h.length=0;l.length=0;(g=f.cases["!"+
c]||f.cases["?"])&&r(g,function(c){c.transclude(function(d,e){l.push(e);var f=c.element;d[d.length++]=b.$$createComment("end ngSwitchWhen");h.push({clone:d});a.enter(d,f.parent(),f)})})})}}}],Oe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,b,d,c,e){c.cases["!"+d.ngSwitchWhen]=c.cases["!"+d.ngSwitchWhen]||[];c.cases["!"+d.ngSwitchWhen].push({transclude:e,element:b})}}),Pe=Ma({transclude:"element",priority:1200,require:"^ngSwitch",multiElement:!0,link:function(a,
b,d,c,e){c.cases["?"]=c.cases["?"]||[];c.cases["?"].push({transclude:e,element:b})}}),Tg=O("ngTransclude"),Re=Ma({restrict:"EAC",link:function(a,b,d,c,e){d.ngTransclude===d.$attr.ngTransclude&&(d.ngTransclude="");if(!e)throw Tg("orphan",va(b));e(function(a){a.length&&(b.empty(),b.append(a))},null,d.ngTransclude||d.ngTranscludeSlot)}}),re=["$templateCache",function(a){return{restrict:"E",terminal:!0,compile:function(b,d){"text/ng-template"==d.type&&a.put(d.id,b[0].text)}}}],Ug={$setViewValue:A,$render:A},
Vg=["$element","$scope",function(a,b){var d=this,c=new Sa;d.ngModelCtrl=Ug;d.unknownOption=B(E.document.createElement("option"));d.renderUnknownOption=function(b){b="? "+Ga(b)+" ?";d.unknownOption.val(b);a.prepend(d.unknownOption);a.val(b)};b.$on("$destroy",function(){d.renderUnknownOption=A});d.removeUnknownOption=function(){d.unknownOption.parent()&&d.unknownOption.remove()};d.readValue=function(){d.removeUnknownOption();return a.val()};d.writeValue=function(b){d.hasOption(b)?(d.removeUnknownOption(),
a.val(b),""===b&&d.emptyOption.prop("selected",!0)):null==b&&d.emptyOption?(d.removeUnknownOption(),a.val("")):d.renderUnknownOption(b)};d.addOption=function(a,b){if(8!==b[0].nodeType){Ra(a,'"option value"');""===a&&(d.emptyOption=b);var g=c.get(a)||0;c.put(a,g+1);d.ngModelCtrl.$render();b[0].hasAttribute("selected")&&(b[0].selected=!0)}};d.removeOption=function(a){var b=c.get(a);b&&(1===b?(c.remove(a),""===a&&(d.emptyOption=void 0)):c.put(a,b-1))};d.hasOption=function(a){return!!c.get(a)};d.registerOption=
function(a,b,c,h,k){if(h){var l;c.$observe("value",function(a){x(l)&&d.removeOption(l);l=a;d.addOption(a,b)})}else k?a.$watch(k,function(a,e){c.$set("value",a);e!==a&&d.removeOption(e);d.addOption(a,b)}):d.addOption(c.value,b);b.on("$destroy",function(){d.removeOption(c.value);d.ngModelCtrl.$render()})}}],se=function(){return{restrict:"E",require:["select","?ngModel"],controller:Vg,priority:1,link:{pre:function(a,b,d,c){var e=c[1];if(e){var f=c[0];f.ngModelCtrl=e;b.on("change",function(){a.$apply(function(){e.$setViewValue(f.readValue())})});
if(d.multiple){f.readValue=function(){var a=[];r(b.find("option"),function(b){b.selected&&a.push(b.value)});return a};f.writeValue=function(a){var c=new Sa(a);r(b.find("option"),function(a){a.selected=x(c.get(a.value))})};var g,h=NaN;a.$watch(function(){h!==e.$viewValue||na(g,e.$viewValue)||(g=ga(e.$viewValue),e.$render());h=e.$viewValue});e.$isEmpty=function(a){return!a||0===a.length}}}},post:function(a,b,d,c){var e=c[1];if(e){var f=c[0];e.$render=function(){f.writeValue(e.$viewValue)}}}}}},ue=["$interpolate",
function(a){return{restrict:"E",priority:100,compile:function(b,d){if(x(d.value))var c=a(d.value,!0);else{var e=a(b.text(),!0);e||d.$set("value",b.text())}return function(a,b,d){var k=b.parent();(k=k.data("$selectController")||k.parent().data("$selectController"))&&k.registerOption(a,b,d,c,e)}}}}],te=da({restrict:"E",terminal:!1}),Ic=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){c&&(d.required=!0,c.$validators.required=function(a,b){return!d.required||!c.$isEmpty(b)},d.$observe("required",
function(){c.$validate()}))}}},Hc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e,f=d.ngPattern||d.pattern;d.$observe("pattern",function(a){F(a)&&0<a.length&&(a=new RegExp("^"+a+"$"));if(a&&!a.test)throw O("ngPattern")("noregexp",f,a,va(b));e=a||void 0;c.$validate()});c.$validators.pattern=function(a,b){return c.$isEmpty(b)||w(e)||e.test(b)}}}}},Kc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=-1;d.$observe("maxlength",function(a){a=
aa(a);e=isNaN(a)?-1:a;c.$validate()});c.$validators.maxlength=function(a,b){return 0>e||c.$isEmpty(b)||b.length<=e}}}}},Jc=function(){return{restrict:"A",require:"?ngModel",link:function(a,b,d,c){if(c){var e=0;d.$observe("minlength",function(a){e=aa(a)||0;c.$validate()});c.$validators.minlength=function(a,b){return c.$isEmpty(b)||b.length>=e}}}}};E.angular.bootstrap?E.console&&console.log("WARNING: Tried to load angular more than once."):(ke(),me(ea),ea.module("ngLocale",[],["$provide",function(a){function b(a){a+=
"";var b=a.indexOf(".");return-1==b?0:a.length-b-1}a.value("$locale",{DATETIME_FORMATS:{AMPMS:["AM","PM"],DAY:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),ERANAMES:["Before Christ","Anno Domini"],ERAS:["BC","AD"],FIRSTDAYOFWEEK:6,MONTH:"January February March April May June July August September October November December".split(" "),SHORTDAY:"Sun Mon Tue Wed Thu Fri Sat".split(" "),SHORTMONTH:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),STANDALONEMONTH:"January February March April May June July August September October November December".split(" "),
WEEKENDRANGE:[5,6],fullDate:"EEEE, MMMM d, y",longDate:"MMMM d, y",medium:"MMM d, y h:mm:ss a",mediumDate:"MMM d, y",mediumTime:"h:mm:ss a","short":"M/d/yy h:mm a",shortDate:"M/d/yy",shortTime:"h:mm a"},NUMBER_FORMATS:{CURRENCY_SYM:"$",DECIMAL_SEP:".",GROUP_SEP:",",PATTERNS:[{gSize:3,lgSize:3,maxFrac:3,minFrac:0,minInt:1,negPre:"-",negSuf:"",posPre:"",posSuf:""},{gSize:3,lgSize:3,maxFrac:2,minFrac:2,minInt:1,negPre:"-\u00a4",negSuf:"",posPre:"\u00a4",posSuf:""}]},id:"en-us",localeID:"en_US",pluralCat:function(a,
c){var e=a|0,f=c;void 0===f&&(f=Math.min(b(a),3));Math.pow(10,f);return 1==e&&0==f?"one":"other"}})}]),B(E.document).ready(function(){ge(E.document,Bc)}))})(window);!window.angular.$$csp().noInlineStyle&&window.angular.element(document.head).prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide:not(.ng-hide-animate){display:none !important;}ng\\:form{display:block;}.ng-animate-shim{visibility:hidden;}.ng-anchor{position:absolute;}</style>');
//# sourceMappingURL=angular.min.js.map

/*
 AngularJS v1.5.7
 (c) 2010-2016 Google, Inc. http://angularjs.org
 License: MIT
*/
(function(R,C){'use strict';function Aa(a,b,c){if(!a)throw Ma("areq",b||"?",c||"required");return a}function Ba(a,b){if(!a&&!b)return"";if(!a)return b;if(!b)return a;ca(a)&&(a=a.join(" "));ca(b)&&(b=b.join(" "));return a+" "+b}function Na(a){var b={};a&&(a.to||a.from)&&(b.to=a.to,b.from=a.from);return b}function Y(a,b,c){var d="";a=ca(a)?a:a&&O(a)&&a.length?a.split(/\s+/):[];s(a,function(a,l){a&&0<a.length&&(d+=0<l?" ":"",d+=c?b+a:a+b)});return d}function Oa(a){if(a instanceof G)switch(a.length){case 0:return a;
case 1:if(1===a[0].nodeType)return a;break;default:return G(da(a))}if(1===a.nodeType)return G(a)}function da(a){if(!a[0])return a;for(var b=0;b<a.length;b++){var c=a[b];if(1==c.nodeType)return c}}function Pa(a,b,c){s(b,function(b){a.addClass(b,c)})}function Qa(a,b,c){s(b,function(b){a.removeClass(b,c)})}function V(a){return function(b,c){c.addClass&&(Pa(a,b,c.addClass),c.addClass=null);c.removeClass&&(Qa(a,b,c.removeClass),c.removeClass=null)}}function oa(a){a=a||{};if(!a.$$prepared){var b=a.domOperation||
Q;a.domOperation=function(){a.$$domOperationFired=!0;b();b=Q};a.$$prepared=!0}return a}function ha(a,b){Ca(a,b);Da(a,b)}function Ca(a,b){b.from&&(a.css(b.from),b.from=null)}function Da(a,b){b.to&&(a.css(b.to),b.to=null)}function W(a,b,c){var d=b.options||{};c=c.options||{};var e=(d.addClass||"")+" "+(c.addClass||""),l=(d.removeClass||"")+" "+(c.removeClass||"");a=Ra(a.attr("class"),e,l);c.preparationClasses&&(d.preparationClasses=Z(c.preparationClasses,d.preparationClasses),delete c.preparationClasses);
e=d.domOperation!==Q?d.domOperation:null;Ea(d,c);e&&(d.domOperation=e);d.addClass=a.addClass?a.addClass:null;d.removeClass=a.removeClass?a.removeClass:null;b.addClass=d.addClass;b.removeClass=d.removeClass;return d}function Ra(a,b,c){function d(a){O(a)&&(a=a.split(" "));var b={};s(a,function(a){a.length&&(b[a]=!0)});return b}var e={};a=d(a);b=d(b);s(b,function(a,b){e[b]=1});c=d(c);s(c,function(a,b){e[b]=1===e[b]?null:-1});var l={addClass:"",removeClass:""};s(e,function(b,c){var d,e;1===b?(d="addClass",
e=!a[c]):-1===b&&(d="removeClass",e=a[c]);e&&(l[d].length&&(l[d]+=" "),l[d]+=c)});return l}function z(a){return a instanceof C.element?a[0]:a}function Sa(a,b,c){var d="";b&&(d=Y(b,"ng-",!0));c.addClass&&(d=Z(d,Y(c.addClass,"-add")));c.removeClass&&(d=Z(d,Y(c.removeClass,"-remove")));d.length&&(c.preparationClasses=d,a.addClass(d))}function pa(a,b){var c=b?"-"+b+"s":"";la(a,[ma,c]);return[ma,c]}function ta(a,b){var c=b?"paused":"",d=$+"PlayState";la(a,[d,c]);return[d,c]}function la(a,b){a.style[b[0]]=
b[1]}function Z(a,b){return a?b?a+" "+b:a:b}function Fa(a,b,c){var d=Object.create(null),e=a.getComputedStyle(b)||{};s(c,function(a,b){var c=e[a];if(c){var g=c.charAt(0);if("-"===g||"+"===g||0<=g)c=Ta(c);0===c&&(c=null);d[b]=c}});return d}function Ta(a){var b=0;a=a.split(/\s*,\s*/);s(a,function(a){"s"==a.charAt(a.length-1)&&(a=a.substring(0,a.length-1));a=parseFloat(a)||0;b=b?Math.max(a,b):a});return b}function ua(a){return 0===a||null!=a}function Ga(a,b){var c=S,d=a+"s";b?c+="Duration":d+=" linear all";
return[c,d]}function Ha(){var a=Object.create(null);return{flush:function(){a=Object.create(null)},count:function(b){return(b=a[b])?b.total:0},get:function(b){return(b=a[b])&&b.value},put:function(b,c){a[b]?a[b].total++:a[b]={total:1,value:c}}}}function Ia(a,b,c){s(c,function(c){a[c]=ea(a[c])?a[c]:b.style.getPropertyValue(c)})}var Q=C.noop,Ja=C.copy,Ea=C.extend,G=C.element,s=C.forEach,ca=C.isArray,O=C.isString,va=C.isObject,I=C.isUndefined,ea=C.isDefined,Ka=C.isFunction,wa=C.isElement,S,xa,$,ya;I(R.ontransitionend)&&
ea(R.onwebkittransitionend)?(S="WebkitTransition",xa="webkitTransitionEnd transitionend"):(S="transition",xa="transitionend");I(R.onanimationend)&&ea(R.onwebkitanimationend)?($="WebkitAnimation",ya="webkitAnimationEnd animationend"):($="animation",ya="animationend");var qa=$+"Delay",za=$+"Duration",ma=S+"Delay",La=S+"Duration",Ma=C.$$minErr("ng"),Ua={transitionDuration:La,transitionDelay:ma,transitionProperty:S+"Property",animationDuration:za,animationDelay:qa,animationIterationCount:$+"IterationCount"},
Va={transitionDuration:La,transitionDelay:ma,animationDuration:za,animationDelay:qa};C.module("ngAnimate",[]).directive("ngAnimateSwap",["$animate","$rootScope",function(a,b){return{restrict:"A",transclude:"element",terminal:!0,priority:600,link:function(b,d,e,l,n){var H,g;b.$watchCollection(e.ngAnimateSwap||e["for"],function(e){H&&a.leave(H);g&&(g.$destroy(),g=null);if(e||0===e)g=b.$new(),n(g,function(b){H=b;a.enter(b,null,d)})})}}}]).directive("ngAnimateChildren",["$interpolate",function(a){return{link:function(b,
c,d){function e(a){c.data("$$ngAnimateChildren","on"===a||"true"===a)}var l=d.ngAnimateChildren;C.isString(l)&&0===l.length?c.data("$$ngAnimateChildren",!0):(e(a(l)(b)),d.$observe("ngAnimateChildren",e))}}}]).factory("$$rAFScheduler",["$$rAF",function(a){function b(a){d=d.concat(a);c()}function c(){if(d.length){for(var b=d.shift(),n=0;n<b.length;n++)b[n]();e||a(function(){e||c()})}}var d,e;d=b.queue=[];b.waitUntilQuiet=function(b){e&&e();e=a(function(){e=null;b();c()})};return b}]).provider("$$animateQueue",
["$animateProvider",function(a){function b(a){if(!a)return null;a=a.split(" ");var b=Object.create(null);s(a,function(a){b[a]=!0});return b}function c(a,c){if(a&&c){var d=b(c);return a.split(" ").some(function(a){return d[a]})}}function d(a,b,c,d){return l[a].some(function(a){return a(b,c,d)})}function e(a,b){var c=0<(a.addClass||"").length,d=0<(a.removeClass||"").length;return b?c&&d:c||d}var l=this.rules={skip:[],cancel:[],join:[]};l.join.push(function(a,b,c){return!b.structural&&e(b)});l.skip.push(function(a,
b,c){return!b.structural&&!e(b)});l.skip.push(function(a,b,c){return"leave"==c.event&&b.structural});l.skip.push(function(a,b,c){return c.structural&&2===c.state&&!b.structural});l.cancel.push(function(a,b,c){return c.structural&&b.structural});l.cancel.push(function(a,b,c){return 2===c.state&&b.structural});l.cancel.push(function(a,b,d){if(d.structural)return!1;a=b.addClass;b=b.removeClass;var e=d.addClass;d=d.removeClass;return I(a)&&I(b)||I(e)&&I(d)?!1:c(a,d)||c(b,e)});this.$get=["$$rAF","$rootScope",
"$rootElement","$document","$$HashMap","$$animation","$$AnimateRunner","$templateRequest","$$jqLite","$$forceReflow",function(b,c,g,l,v,Wa,P,t,F,T){function J(){var a=!1;return function(b){a?b():c.$$postDigest(function(){a=!0;b()})}}function y(a,b,c){var f=z(b),d=z(a),N=[];(a=h[c])&&s(a,function(a){x.call(a.node,f)?N.push(a.callback):"leave"===c&&x.call(a.node,d)&&N.push(a.callback)});return N}function r(a,b,c){var f=da(b);return a.filter(function(a){return!(a.node===f&&(!c||a.callback===c))})}function p(a,
h,w){function r(c,f,d,h){sa(function(){var c=y(T,a,f);c.length?b(function(){s(c,function(b){b(a,d,h)});"close"!==d||a[0].parentNode||ra.off(a)}):"close"!==d||a[0].parentNode||ra.off(a)});c.progress(f,d,h)}function k(b){var c=a,f=m;f.preparationClasses&&(c.removeClass(f.preparationClasses),f.preparationClasses=null);f.activeClasses&&(c.removeClass(f.activeClasses),f.activeClasses=null);E(a,m);ha(a,m);m.domOperation();B.complete(!b)}var m=Ja(w),p,T;if(a=Oa(a))p=z(a),T=a.parent();var m=oa(m),B=new P,
sa=J();ca(m.addClass)&&(m.addClass=m.addClass.join(" "));m.addClass&&!O(m.addClass)&&(m.addClass=null);ca(m.removeClass)&&(m.removeClass=m.removeClass.join(" "));m.removeClass&&!O(m.removeClass)&&(m.removeClass=null);m.from&&!va(m.from)&&(m.from=null);m.to&&!va(m.to)&&(m.to=null);if(!p)return k(),B;w=[p.className,m.addClass,m.removeClass].join(" ");if(!Xa(w))return k(),B;var g=0<=["enter","move","leave"].indexOf(h),x=l[0].hidden,t=!f||x||N.get(p);w=!t&&A.get(p)||{};var F=!!w.state;t||F&&1==w.state||
(t=!M(a,T,h));if(t)return x&&r(B,h,"start"),k(),x&&r(B,h,"close"),B;g&&K(a);x={structural:g,element:a,event:h,addClass:m.addClass,removeClass:m.removeClass,close:k,options:m,runner:B};if(F){if(d("skip",a,x,w)){if(2===w.state)return k(),B;W(a,w,x);return w.runner}if(d("cancel",a,x,w))if(2===w.state)w.runner.end();else if(w.structural)w.close();else return W(a,w,x),w.runner;else if(d("join",a,x,w))if(2===w.state)W(a,x,{});else return Sa(a,g?h:null,m),h=x.event=w.event,m=W(a,w,x),w.runner}else W(a,x,
{});(F=x.structural)||(F="animate"===x.event&&0<Object.keys(x.options.to||{}).length||e(x));if(!F)return k(),ka(a),B;var v=(w.counter||0)+1;x.counter=v;L(a,1,x);c.$$postDigest(function(){var b=A.get(p),c=!b,b=b||{},f=0<(a.parent()||[]).length&&("animate"===b.event||b.structural||e(b));if(c||b.counter!==v||!f){c&&(E(a,m),ha(a,m));if(c||g&&b.event!==h)m.domOperation(),B.end();f||ka(a)}else h=!b.structural&&e(b,!0)?"setClass":b.event,L(a,2),b=Wa(a,h,b.options),B.setHost(b),r(B,h,"start",{}),b.done(function(b){k(!b);
(b=A.get(p))&&b.counter===v&&ka(z(a));r(B,h,"close",{})})});return B}function K(a){a=z(a).querySelectorAll("[data-ng-animate]");s(a,function(a){var b=parseInt(a.getAttribute("data-ng-animate")),c=A.get(a);if(c)switch(b){case 2:c.runner.end();case 1:A.remove(a)}})}function ka(a){a=z(a);a.removeAttribute("data-ng-animate");A.remove(a)}function k(a,b){return z(a)===z(b)}function M(a,b,c){c=G(l[0].body);var f=k(a,c)||"HTML"===a[0].nodeName,d=k(a,g),h=!1,r,e=N.get(z(a));(a=G.data(a[0],"$ngAnimatePin"))&&
(b=a);for(b=z(b);b;){d||(d=k(b,g));if(1!==b.nodeType)break;a=A.get(b)||{};if(!h){var p=N.get(b);if(!0===p&&!1!==e){e=!0;break}else!1===p&&(e=!1);h=a.structural}if(I(r)||!0===r)a=G.data(b,"$$ngAnimateChildren"),ea(a)&&(r=a);if(h&&!1===r)break;f||(f=k(b,c));if(f&&d)break;if(!d&&(a=G.data(b,"$ngAnimatePin"))){b=z(a);continue}b=b.parentNode}return(!h||r)&&!0!==e&&d&&f}function L(a,b,c){c=c||{};c.state=b;a=z(a);a.setAttribute("data-ng-animate",b);c=(b=A.get(a))?Ea(b,c):c;A.put(a,c)}var A=new v,N=new v,
f=null,B=c.$watch(function(){return 0===t.totalPendingRequests},function(a){a&&(B(),c.$$postDigest(function(){c.$$postDigest(function(){null===f&&(f=!0)})}))}),h={},sa=a.classNameFilter(),Xa=sa?function(a){return sa.test(a)}:function(){return!0},E=V(F),x=R.Node.prototype.contains||function(a){return this===a||!!(this.compareDocumentPosition(a)&16)},ra={on:function(a,b,c){var f=da(b);h[a]=h[a]||[];h[a].push({node:f,callback:c});G(b).on("$destroy",function(){A.get(f)||ra.off(a,b,c)})},off:function(a,
b,c){if(1!==arguments.length||C.isString(arguments[0])){var f=h[a];f&&(h[a]=1===arguments.length?null:r(f,b,c))}else for(f in b=arguments[0],h)h[f]=r(h[f],b)},pin:function(a,b){Aa(wa(a),"element","not an element");Aa(wa(b),"parentElement","not an element");a.data("$ngAnimatePin",b)},push:function(a,b,c,f){c=c||{};c.domOperation=f;return p(a,b,c)},enabled:function(a,b){var c=arguments.length;if(0===c)b=!!f;else if(wa(a)){var d=z(a),h=N.get(d);1===c?b=!h:N.put(d,!b)}else b=f=!!a;return b}};return ra}]}]).provider("$$animation",
["$animateProvider",function(a){var b=this.drivers=[];this.$get=["$$jqLite","$rootScope","$injector","$$AnimateRunner","$$HashMap","$$rAFScheduler",function(a,d,e,l,n,H){function g(a){function b(a){if(a.processed)return a;a.processed=!0;var d=a.domNode,p=d.parentNode;e.put(d,a);for(var K;p;){if(K=e.get(p)){K.processed||(K=b(K));break}p=p.parentNode}(K||c).children.push(a);return a}var c={children:[]},d,e=new n;for(d=0;d<a.length;d++){var g=a[d];e.put(g.domNode,a[d]={domNode:g.domNode,fn:g.fn,children:[]})}for(d=
0;d<a.length;d++)b(a[d]);return function(a){var b=[],c=[],d;for(d=0;d<a.children.length;d++)c.push(a.children[d]);a=c.length;var e=0,k=[];for(d=0;d<c.length;d++){var g=c[d];0>=a&&(a=e,e=0,b.push(k),k=[]);k.push(g.fn);g.children.forEach(function(a){e++;c.push(a)});a--}k.length&&b.push(k);return b}(c)}var u=[],v=V(a);return function(n,P,t){function F(a){a=a.hasAttribute("ng-animate-ref")?[a]:a.querySelectorAll("[ng-animate-ref]");var b=[];s(a,function(a){var c=a.getAttribute("ng-animate-ref");c&&c.length&&
b.push(a)});return b}function T(a){var b=[],c={};s(a,function(a,d){var h=z(a.element),e=0<=["enter","move"].indexOf(a.event),h=a.structural?F(h):[];if(h.length){var k=e?"to":"from";s(h,function(a){var b=a.getAttribute("ng-animate-ref");c[b]=c[b]||{};c[b][k]={animationID:d,element:G(a)}})}else b.push(a)});var d={},e={};s(c,function(c,k){var r=c.from,p=c.to;if(r&&p){var A=a[r.animationID],g=a[p.animationID],B=r.animationID.toString();if(!e[B]){var n=e[B]={structural:!0,beforeStart:function(){A.beforeStart();
g.beforeStart()},close:function(){A.close();g.close()},classes:J(A.classes,g.classes),from:A,to:g,anchors:[]};n.classes.length?b.push(n):(b.push(A),b.push(g))}e[B].anchors.push({out:r.element,"in":p.element})}else r=r?r.animationID:p.animationID,p=r.toString(),d[p]||(d[p]=!0,b.push(a[r]))});return b}function J(a,b){a=a.split(" ");b=b.split(" ");for(var c=[],d=0;d<a.length;d++){var e=a[d];if("ng-"!==e.substring(0,3))for(var r=0;r<b.length;r++)if(e===b[r]){c.push(e);break}}return c.join(" ")}function y(a){for(var c=
b.length-1;0<=c;c--){var d=e.get(b[c])(a);if(d)return d}}function r(a,b){function c(a){(a=a.data("$$animationRunner"))&&a.setHost(b)}a.from&&a.to?(c(a.from.element),c(a.to.element)):c(a.element)}function p(){var a=n.data("$$animationRunner");!a||"leave"===P&&t.$$domOperationFired||a.end()}function K(b){n.off("$destroy",p);n.removeData("$$animationRunner");v(n,t);ha(n,t);t.domOperation();L&&a.removeClass(n,L);n.removeClass("ng-animate");k.complete(!b)}t=oa(t);var ka=0<=["enter","move","leave"].indexOf(P),
k=new l({end:function(){K()},cancel:function(){K(!0)}});if(!b.length)return K(),k;n.data("$$animationRunner",k);var M=Ba(n.attr("class"),Ba(t.addClass,t.removeClass)),L=t.tempClasses;L&&(M+=" "+L,t.tempClasses=null);var A;ka&&(A="ng-"+P+"-prepare",a.addClass(n,A));u.push({element:n,classes:M,event:P,structural:ka,options:t,beforeStart:function(){n.addClass("ng-animate");L&&a.addClass(n,L);A&&(a.removeClass(n,A),A=null)},close:K});n.on("$destroy",p);if(1<u.length)return k;d.$$postDigest(function(){var a=
[];s(u,function(b){b.element.data("$$animationRunner")?a.push(b):b.close()});u.length=0;var b=T(a),c=[];s(b,function(a){c.push({domNode:z(a.from?a.from.element:a.element),fn:function(){a.beforeStart();var b,c=a.close;if((a.anchors?a.from.element||a.to.element:a.element).data("$$animationRunner")){var d=y(a);d&&(b=d.start)}b?(b=b(),b.done(function(a){c(!a)}),r(a,b)):c()}})});H(g(c))});return k}}]}]).provider("$animateCss",["$animateProvider",function(a){var b=Ha(),c=Ha();this.$get=["$window","$$jqLite",
"$$AnimateRunner","$timeout","$$forceReflow","$sniffer","$$rAFScheduler","$$animateQueue",function(a,e,l,n,H,g,u,v){function C(a,b){var c=a.parentNode;return(c.$$ngAnimateParentKey||(c.$$ngAnimateParentKey=++J))+"-"+a.getAttribute("class")+"-"+b}function P(r,p,g,n){var k;0<b.count(g)&&(k=c.get(g),k||(p=Y(p,"-stagger"),e.addClass(r,p),k=Fa(a,r,n),k.animationDuration=Math.max(k.animationDuration,0),k.transitionDuration=Math.max(k.transitionDuration,0),e.removeClass(r,p),c.put(g,k)));return k||{}}function t(a){y.push(a);
u.waitUntilQuiet(function(){b.flush();c.flush();for(var a=H(),d=0;d<y.length;d++)y[d](a);y.length=0})}function F(c,e,g){e=b.get(g);e||(e=Fa(a,c,Ua),"infinite"===e.animationIterationCount&&(e.animationIterationCount=1));b.put(g,e);c=e;g=c.animationDelay;e=c.transitionDelay;c.maxDelay=g&&e?Math.max(g,e):g||e;c.maxDuration=Math.max(c.animationDuration*c.animationIterationCount,c.transitionDuration);return c}var T=V(e),J=0,y=[];return function(a,c){function d(){k()}function u(){k(!0)}function k(b){if(!(x||
G&&J)){x=!0;J=!1;f.$$skipPreparationClasses||e.removeClass(a,ga);e.removeClass(a,ea);ta(h,!1);pa(h,!1);s(y,function(a){h.style[a[0]]=""});T(a,f);ha(a,f);Object.keys(B).length&&s(B,function(a,b){a?h.style.setProperty(b,a):h.style.removeProperty(b)});if(f.onDone)f.onDone();fa&&fa.length&&a.off(fa.join(" "),A);var c=a.data("$$animateCss");c&&(n.cancel(c[0].timer),a.removeData("$$animateCss"));I&&I.complete(!b)}}function M(a){q.blockTransition&&pa(h,a);q.blockKeyframeAnimation&&ta(h,!!a)}function L(){I=
new l({end:d,cancel:u});t(Q);k();return{$$willAnimate:!1,start:function(){return I},end:d}}function A(a){a.stopPropagation();var b=a.originalEvent||a;a=b.$manualTimeStamp||Date.now();b=parseFloat(b.elapsedTime.toFixed(3));Math.max(a-W,0)>=R&&b>=m&&(G=!0,k())}function N(){function b(){if(!x){M(!1);s(y,function(a){h.style[a[0]]=a[1]});T(a,f);e.addClass(a,ea);if(q.recalculateTimingStyles){na=h.className+" "+ga;ia=C(h,na);D=F(h,na,ia);aa=D.maxDelay;O=Math.max(aa,0);m=D.maxDuration;if(0===m){k();return}q.hasTransitions=
0<D.transitionDuration;q.hasAnimations=0<D.animationDuration}q.applyAnimationDelay&&(aa="boolean"!==typeof f.delay&&ua(f.delay)?parseFloat(f.delay):aa,O=Math.max(aa,0),D.animationDelay=aa,ba=[qa,aa+"s"],y.push(ba),h.style[ba[0]]=ba[1]);R=1E3*O;V=1E3*m;if(f.easing){var d,g=f.easing;q.hasTransitions&&(d=S+"TimingFunction",y.push([d,g]),h.style[d]=g);q.hasAnimations&&(d=$+"TimingFunction",y.push([d,g]),h.style[d]=g)}D.transitionDuration&&fa.push(xa);D.animationDuration&&fa.push(ya);W=Date.now();var p=
R+1.5*V;d=W+p;var g=a.data("$$animateCss")||[],N=!0;if(g.length){var l=g[0];(N=d>l.expectedEndTime)?n.cancel(l.timer):g.push(k)}N&&(p=n(c,p,!1),g[0]={timer:p,expectedEndTime:d},g.push(k),a.data("$$animateCss",g));if(fa.length)a.on(fa.join(" "),A);f.to&&(f.cleanupStyles&&Ia(B,h,Object.keys(f.to)),Da(a,f))}}function c(){var b=a.data("$$animateCss");if(b){for(var d=1;d<b.length;d++)b[d]();a.removeData("$$animateCss")}}if(!x)if(h.parentNode){var d=function(a){if(G)J&&a&&(J=!1,k());else if(J=!a,D.animationDuration)if(a=
ta(h,J),J)y.push(a);else{var b=y,c=b.indexOf(a);0<=a&&b.splice(c,1)}},g=0<da&&(D.transitionDuration&&0===X.transitionDuration||D.animationDuration&&0===X.animationDuration)&&Math.max(X.animationDelay,X.transitionDelay);g?n(b,Math.floor(g*da*1E3),!1):b();w.resume=function(){d(!0)};w.pause=function(){d(!1)}}else k()}var f=c||{};f.$$prepared||(f=oa(Ja(f)));var B={},h=z(a);if(!h||!h.parentNode||!v.enabled())return L();var y=[],H=a.attr("class"),E=Na(f),x,J,G,I,w,O,R,m,V,W,fa=[];if(0===f.duration||!g.animations&&
!g.transitions)return L();var ja=f.event&&ca(f.event)?f.event.join(" "):f.event,Z="",U="";ja&&f.structural?Z=Y(ja,"ng-",!0):ja&&(Z=ja);f.addClass&&(U+=Y(f.addClass,"-add"));f.removeClass&&(U.length&&(U+=" "),U+=Y(f.removeClass,"-remove"));f.applyClassesEarly&&U.length&&T(a,f);var ga=[Z,U].join(" ").trim(),na=H+" "+ga,ea=Y(ga,"-active"),H=E.to&&0<Object.keys(E.to).length;if(!(0<(f.keyframeStyle||"").length||H||ga))return L();var ia,X;0<f.stagger?(E=parseFloat(f.stagger),X={transitionDelay:E,animationDelay:E,
transitionDuration:0,animationDuration:0}):(ia=C(h,na),X=P(h,ga,ia,Va));f.$$skipPreparationClasses||e.addClass(a,ga);f.transitionStyle&&(E=[S,f.transitionStyle],la(h,E),y.push(E));0<=f.duration&&(E=0<h.style[S].length,E=Ga(f.duration,E),la(h,E),y.push(E));f.keyframeStyle&&(E=[$,f.keyframeStyle],la(h,E),y.push(E));var da=X?0<=f.staggerIndex?f.staggerIndex:b.count(ia):0;(ja=0===da)&&!f.skipBlocking&&pa(h,9999);var D=F(h,na,ia),aa=D.maxDelay;O=Math.max(aa,0);m=D.maxDuration;var q={};q.hasTransitions=
0<D.transitionDuration;q.hasAnimations=0<D.animationDuration;q.hasTransitionAll=q.hasTransitions&&"all"==D.transitionProperty;q.applyTransitionDuration=H&&(q.hasTransitions&&!q.hasTransitionAll||q.hasAnimations&&!q.hasTransitions);q.applyAnimationDuration=f.duration&&q.hasAnimations;q.applyTransitionDelay=ua(f.delay)&&(q.applyTransitionDuration||q.hasTransitions);q.applyAnimationDelay=ua(f.delay)&&q.hasAnimations;q.recalculateTimingStyles=0<U.length;if(q.applyTransitionDuration||q.applyAnimationDuration)m=
f.duration?parseFloat(f.duration):m,q.applyTransitionDuration&&(q.hasTransitions=!0,D.transitionDuration=m,E=0<h.style[S+"Property"].length,y.push(Ga(m,E))),q.applyAnimationDuration&&(q.hasAnimations=!0,D.animationDuration=m,y.push([za,m+"s"]));if(0===m&&!q.recalculateTimingStyles)return L();if(null!=f.delay){var ba;"boolean"!==typeof f.delay&&(ba=parseFloat(f.delay),O=Math.max(ba,0));q.applyTransitionDelay&&y.push([ma,ba+"s"]);q.applyAnimationDelay&&y.push([qa,ba+"s"])}null==f.duration&&0<D.transitionDuration&&
(q.recalculateTimingStyles=q.recalculateTimingStyles||ja);R=1E3*O;V=1E3*m;f.skipBlocking||(q.blockTransition=0<D.transitionDuration,q.blockKeyframeAnimation=0<D.animationDuration&&0<X.animationDelay&&0===X.animationDuration);f.from&&(f.cleanupStyles&&Ia(B,h,Object.keys(f.from)),Ca(a,f));q.blockTransition||q.blockKeyframeAnimation?M(m):f.skipBlocking||pa(h,!1);return{$$willAnimate:!0,end:d,start:function(){if(!x)return w={end:d,cancel:u,resume:null,pause:null},I=new l(w),t(N),I}}}}]}]).provider("$$animateCssDriver",
["$$animationProvider",function(a){a.drivers.push("$$animateCssDriver");this.$get=["$animateCss","$rootScope","$$AnimateRunner","$rootElement","$sniffer","$$jqLite","$document",function(a,c,d,e,l,n,H){function g(a){return a.replace(/\bng-\S+\b/g,"")}function u(a,b){O(a)&&(a=a.split(" "));O(b)&&(b=b.split(" "));return a.filter(function(a){return-1===b.indexOf(a)}).join(" ")}function v(c,e,n){function l(a){var b={},c=z(a).getBoundingClientRect();s(["width","height","top","left"],function(a){var d=c[a];
switch(a){case "top":d+=t.scrollTop;break;case "left":d+=t.scrollLeft}b[a]=Math.floor(d)+"px"});return b}function p(){var c=g(n.attr("class")||""),d=u(c,k),c=u(k,c),d=a(v,{to:l(n),addClass:"ng-anchor-in "+d,removeClass:"ng-anchor-out "+c,delay:!0});return d.$$willAnimate?d:null}function H(){v.remove();e.removeClass("ng-animate-shim");n.removeClass("ng-animate-shim")}var v=G(z(e).cloneNode(!0)),k=g(v.attr("class")||"");e.addClass("ng-animate-shim");n.addClass("ng-animate-shim");v.addClass("ng-anchor");
F.append(v);var M;c=function(){var c=a(v,{addClass:"ng-anchor-out",delay:!0,from:l(e)});return c.$$willAnimate?c:null}();if(!c&&(M=p(),!M))return H();var L=c||M;return{start:function(){function a(){c&&c.end()}var b,c=L.start();c.done(function(){c=null;if(!M&&(M=p()))return c=M.start(),c.done(function(){c=null;H();b.complete()}),c;H();b.complete()});return b=new d({end:a,cancel:a})}}}function C(a,b,c,e){var g=P(a,Q),n=P(b,Q),l=[];s(e,function(a){(a=v(c,a.out,a["in"]))&&l.push(a)});if(g||n||0!==l.length)return{start:function(){function a(){s(b,
function(a){a.end()})}var b=[];g&&b.push(g.start());n&&b.push(n.start());s(l,function(a){b.push(a.start())});var c=new d({end:a,cancel:a});d.all(b,function(a){c.complete(a)});return c}}}function P(c){var d=c.element,e=c.options||{};c.structural&&(e.event=c.event,e.structural=!0,e.applyClassesEarly=!0,"leave"===c.event&&(e.onDone=e.domOperation));e.preparationClasses&&(e.event=Z(e.event,e.preparationClasses));c=a(d,e);return c.$$willAnimate?c:null}if(!l.animations&&!l.transitions)return Q;var t=H[0].body;
c=z(e);var F=G(c.parentNode&&11===c.parentNode.nodeType||t.contains(c)?c:t);V(n);return function(a){return a.from&&a.to?C(a.from,a.to,a.classes,a.anchors):P(a)}}]}]).provider("$$animateJs",["$animateProvider",function(a){this.$get=["$injector","$$AnimateRunner","$$jqLite",function(b,c,d){function e(c){c=ca(c)?c:c.split(" ");for(var d=[],e={},l=0;l<c.length;l++){var v=c[l],s=a.$$registeredAnimations[v];s&&!e[v]&&(d.push(b.get(s)),e[v]=!0)}return d}var l=V(d);return function(a,b,d,u){function v(){u.domOperation();
l(a,u)}function C(a,b,d,e,f){switch(d){case "animate":b=[b,e.from,e.to,f];break;case "setClass":b=[b,G,J,f];break;case "addClass":b=[b,G,f];break;case "removeClass":b=[b,J,f];break;default:b=[b,f]}b.push(e);if(a=a.apply(a,b))if(Ka(a.start)&&(a=a.start()),a instanceof c)a.done(f);else if(Ka(a))return a;return Q}function z(a,b,d,e,f){var g=[];s(e,function(e){var k=e[f];k&&g.push(function(){var e,f,g=!1,h=function(a){g||(g=!0,(f||Q)(a),e.complete(!a))};e=new c({end:function(){h()},cancel:function(){h(!0)}});
f=C(k,a,b,d,function(a){h(!1===a)});return e})});return g}function t(a,b,d,e,f){var g=z(a,b,d,e,f);if(0===g.length){var h,k;"beforeSetClass"===f?(h=z(a,"removeClass",d,e,"beforeRemoveClass"),k=z(a,"addClass",d,e,"beforeAddClass")):"setClass"===f&&(h=z(a,"removeClass",d,e,"removeClass"),k=z(a,"addClass",d,e,"addClass"));h&&(g=g.concat(h));k&&(g=g.concat(k))}if(0!==g.length)return function(a){var b=[];g.length&&s(g,function(a){b.push(a())});b.length?c.all(b,a):a();return function(a){s(b,function(b){a?
b.cancel():b.end()})}}}var F=!1;3===arguments.length&&va(d)&&(u=d,d=null);u=oa(u);d||(d=a.attr("class")||"",u.addClass&&(d+=" "+u.addClass),u.removeClass&&(d+=" "+u.removeClass));var G=u.addClass,J=u.removeClass,y=e(d),r,p;if(y.length){var K,I;"leave"==b?(I="leave",K="afterLeave"):(I="before"+b.charAt(0).toUpperCase()+b.substr(1),K=b);"enter"!==b&&"move"!==b&&(r=t(a,b,u,y,I));p=t(a,b,u,y,K)}if(r||p){var k;return{$$willAnimate:!0,end:function(){k?k.end():(F=!0,v(),ha(a,u),k=new c,k.complete(!0));return k},
start:function(){function b(c){F=!0;v();ha(a,u);k.complete(c)}if(k)return k;k=new c;var d,e=[];r&&e.push(function(a){d=r(a)});e.length?e.push(function(a){v();a(!0)}):v();p&&e.push(function(a){d=p(a)});k.setHost({end:function(){F||((d||Q)(void 0),b(void 0))},cancel:function(){F||((d||Q)(!0),b(!0))}});c.chain(e,b);return k}}}}}]}]).provider("$$animateJsDriver",["$$animationProvider",function(a){a.drivers.push("$$animateJsDriver");this.$get=["$$animateJs","$$AnimateRunner",function(a,c){function d(c){return a(c.element,
c.event,c.classes,c.options)}return function(a){if(a.from&&a.to){var b=d(a.from),n=d(a.to);if(b||n)return{start:function(){function a(){return function(){s(d,function(a){a.end()})}}var d=[];b&&d.push(b.start());n&&d.push(n.start());c.all(d,function(a){e.complete(a)});var e=new c({end:a(),cancel:a()});return e}}}else return d(a)}}]}])})(window,window.angular);
//# sourceMappingURL=angular-animate.min.js.map

!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t("undefined"==typeof angular?require("angular"):angular):"function"==typeof define&&define.amd?define("angular-cache",["angular"],t):e.angularCacheModuleName=t(e.angular)}(this,function(e){"use strict";function t(e,t){if(e||(e=function(e){return e}),t||(t=function(e,t){return e===t}),"function"!=typeof e)throw new Error('BinaryHeap([weightFunc][, compareFunc]): "weightFunc" must be a function!');if("function"!=typeof t)throw new Error('BinaryHeap([weightFunc][, compareFunc]): "compareFunc" must be a function!');this.weightFunc=e,this.compareFunc=t,this.heap=[]}function r(e){var t=[],r=void 0;if(!d.isObject(e))return t;for(r in e)e.hasOwnProperty(r)&&t.push(r);return t}function i(e){return e&&"function"==typeof e.then}function s(e){return d.isNumber(e)?e.toString():e}function n(e){var t={},r=void 0;if(!d.isObject(e))return t;for(r in e)e.hasOwnProperty(r)&&(t[r]=r);return t}function o(e,o){if(e in g)throw new Error(e+" already exists!");if(!d.isString(e))throw new Error("cacheId must be a string!");var a={},c={},l=null,h=new t(function(e){return e.expires},d.equals),f=new t(function(e){return e.accessed},d.equals),p=g[e]={$$id:e,destroy:function(){clearInterval(this.$$cacheFlushIntervalId),clearInterval(this.$$recycleFreqId),this.removeAll(),l&&(l().removeItem(this.$$prefix+".keys"),l().removeItem(this.$$prefix)),l=null,a=null,f=null,h=null,this.$$prefix=null,delete g[this.$$id]},disable:function(){this.$$disabled=!0},enable:function(){delete this.$$disabled},get:function(e,t){var r=this;if(Array.isArray(e)){var i=function(){var i=e,s=[];return i.forEach(function(e){var i=r.get(e,t);null!==i&&void 0!==i&&s.push(i)}),{v:s}}();if("object"===("undefined"==typeof i?"undefined":u["typeof"](i)))return i.v}else if(e=s(e),this.$$disabled)return;if(t=t||{},!d.isString(e))throw new Error("key must be a string!");if(t&&!d.isObject(t))throw new Error("options must be an object!");if(t.onExpire&&!d.isFunction(t.onExpire))throw new Error("options.onExpire must be a function!");var n=void 0;if(l){if(c[e])return c[e];var o=l().getItem(this.$$prefix+".data."+e);if(!o)return;n=d.fromJson(o)}else if(d.isObject(a)){if(!(e in a))return;n=a[e]}var h=n.value,p=(new Date).getTime();return l?(f.remove({key:e,accessed:n.accessed}),n.accessed=p,f.push({key:e,accessed:p})):(f.remove(n),n.accessed=p,f.push(n)),"passive"===this.$$deleteOnExpire&&"expires"in n&&n.expires<p?(this.remove(e),this.$$onExpire?this.$$onExpire(e,n.value,t.onExpire):t.onExpire&&t.onExpire.call(this,e,n.value),h=void 0):l&&l().setItem(this.$$prefix+".data."+e,JSON.stringify(n)),h},info:function(e){if(e){var t=void 0;if(l){var r=l().getItem(this.$$prefix+".data."+e);return r?(t=d.fromJson(r),{created:t.created,accessed:t.accessed,expires:t.expires,isExpired:(new Date).getTime()-t.created>(t.maxAge||this.$$maxAge)}):void 0}return d.isObject(a)&&e in a?(t=a[e],{created:t.created,accessed:t.accessed,expires:t.expires,isExpired:(new Date).getTime()-t.created>(t.maxAge||this.$$maxAge)}):void 0}return{id:this.$$id,capacity:this.$$capacity,maxAge:this.$$maxAge,deleteOnExpire:this.$$deleteOnExpire,onExpire:this.$$onExpire,cacheFlushInterval:this.$$cacheFlushInterval,recycleFreq:this.$$recycleFreq,storageMode:this.$$storageMode,storageImpl:l?l():void 0,disabled:!!this.$$disabled,size:f&&f.size()||0}},keys:function(){if(l){var e=l().getItem(this.$$prefix+".keys");return e?d.fromJson(e):[]}return r(a)},keySet:function(){if(l){var e=l().getItem(this.$$prefix+".keys"),t={};if(e)for(var r=d.fromJson(e),i=0;i<r.length;i++)t[r[i]]=r[i];return t}return n(a)},put:function(e,t,r){var n=this;r||(r={});var o="storeOnResolve"in r?!!r.storeOnResolve:this.$$storeOnResolve,u="storeOnReject"in r?!!r.storeOnReject:this.$$storeOnReject,p=function(t,r){return function(i){if(t&&(delete c[e],d.isObject(i)&&"status"in i&&"data"in i?(i=[i.status,i.data,i.headers(),i.statusText],n.put(e,i)):n.put(e,i)),r){if(d.Promise)return d.Promise.reject(i);throw i}return i}};if(!this.$$disabled&&d.isObject(a)&&null!==t&&void 0!==t){if(e=s(e),!d.isString(e))throw new Error("key must be a string!");var m=(new Date).getTime(),$={key:e,value:i(t)?t.then(p(o,!1),p(u,!0)):t,created:void 0===r.created?m:r.created,accessed:void 0===r.accessed?m:r.accessed};if(r.maxAge&&($.maxAge=r.maxAge),void 0===r.expires?$.expires=$.created+($.maxAge||this.$$maxAge):$.expires=r.expires,l){if(i($.value))return c[e]=$.value,c[e];var v=l().getItem(this.$$prefix+".keys"),g=v?d.fromJson(v):[],y=l().getItem(this.$$prefix+".data."+e);y&&this.remove(e),h.push({key:e,expires:$.expires}),f.push({key:e,accessed:$.accessed}),l().setItem(this.$$prefix+".data."+e,JSON.stringify($));for(var x=!1,b=0;b<g.length;b++)if(g[b]===e){x=!0;break}x||g.push(e),l().setItem(this.$$prefix+".keys",JSON.stringify(g))}else a[e]&&this.remove(e),h.push($),f.push($),a[e]=$,delete c[e];return f.size()>this.$$capacity&&this.remove(f.peek().key),t}},remove:function(e){if(e+="",delete c[e],l){var t=l().getItem(this.$$prefix+".data."+e);if(t){var r=d.fromJson(t);f.remove({key:e,accessed:r.accessed}),h.remove({key:e,expires:r.expires}),l().removeItem(this.$$prefix+".data."+e);var i=l().getItem(this.$$prefix+".keys"),s=i?d.fromJson(i):[],n=s.indexOf(e);return n>=0&&s.splice(n,1),l().setItem(this.$$prefix+".keys",JSON.stringify(s)),r.value}}else if(d.isObject(a)){var o=a[e]?a[e].value:void 0;return f.remove(a[e]),h.remove(a[e]),a[e]=null,delete a[e],o}},removeAll:function(){if(l){f.removeAll(),h.removeAll();var e=l().getItem(this.$$prefix+".keys");if(e)for(var t=d.fromJson(e),r=0;r<t.length;r++)this.remove(t[r]);l().setItem(this.$$prefix+".keys",JSON.stringify([]))}else if(d.isObject(a)){f.removeAll(),h.removeAll();for(var i in a)a[i]=null;a={}}else f.removeAll(),h.removeAll(),a={};c={}},removeExpired:function(){for(var e=(new Date).getTime(),t={},r=void 0,i=void 0;(i=h.peek())&&i.expires<=e;)t[i.key]=i.value?i.value:null,h.pop();if(l)for(r in t){var s=l().getItem(this.$$prefix+".data."+r);s&&(t[r]=d.fromJson(s).value,this.remove(r))}else for(r in t)this.remove(r);if(this.$$onExpire)for(r in t)this.$$onExpire(r,t[r]);return t},setCacheFlushInterval:function(e){var t=this;if(null===e)delete t.$$cacheFlushInterval;else{if(!d.isNumber(e))throw new Error("cacheFlushInterval must be a number!");if(0>e)throw new Error("cacheFlushInterval must be greater than zero!");e!==t.$$cacheFlushInterval&&(t.$$cacheFlushInterval=e,clearInterval(t.$$cacheFlushIntervalId),t.$$cacheFlushIntervalId=setInterval(function(){t.removeAll()},t.$$cacheFlushInterval))}},setCapacity:function(e){if(null===e)delete this.$$capacity;else{if(!d.isNumber(e))throw new Error("capacity must be a number!");if(0>e)throw new Error("capacity must be greater than zero!");this.$$capacity=e}for(var t={};f.size()>this.$$capacity;)t[f.peek().key]=this.remove(f.peek().key);return t},setDeleteOnExpire:function(e,t){if(null===e)delete this.$$deleteOnExpire;else{if(!d.isString(e))throw new Error("deleteOnExpire must be a string!");if("none"!==e&&"passive"!==e&&"aggressive"!==e)throw new Error('deleteOnExpire must be "none", "passive" or "aggressive"!');this.$$deleteOnExpire=e}t!==!1&&this.setRecycleFreq(this.$$recycleFreq)},setMaxAge:function(e){if(null===e)this.$$maxAge=Number.MAX_VALUE;else{if(!d.isNumber(e))throw new Error("maxAge must be a number!");if(0>e)throw new Error("maxAge must be greater than zero!");this.$$maxAge=e}var t=void 0,i=void 0,s=void 0;if(h.removeAll(),l){var n=l().getItem(this.$$prefix+".keys");for(i=n?d.fromJson(n):[],t=0;t<i.length;t++){s=i[t];var o=l().getItem(this.$$prefix+".data."+s);if(o){var c=d.fromJson(o);this.$$maxAge===Number.MAX_VALUE?c.expires=Number.MAX_VALUE:c.expires=c.created+(c.maxAge||this.$$maxAge),h.push({key:s,expires:c.expires})}}}else for(i=r(a),t=0;t<i.length;t++)s=i[t],this.$$maxAge===Number.MAX_VALUE?a[s].expires=Number.MAX_VALUE:a[s].expires=a[s].created+(a[s].maxAge||this.$$maxAge),h.push(a[s]);return"aggressive"===this.$$deleteOnExpire?this.removeExpired():{}},setOnExpire:function(e){if(null===e)delete this.$$onExpire;else{if(!d.isFunction(e))throw new Error("onExpire must be a function!");this.$$onExpire=e}},setOptions:function(e,t){if(e=e||{},t=!!t,!d.isObject(e))throw new Error("cacheOptions must be an object!");"storagePrefix"in e?this.$$storagePrefix=e.storagePrefix:t&&(this.$$storagePrefix=v.storagePrefix),this.$$prefix=this.$$storagePrefix+this.$$id,"disabled"in e?this.$$disabled=!!e.disabled:t&&(this.$$disabled=v.disabled),"deleteOnExpire"in e?this.setDeleteOnExpire(e.deleteOnExpire,!1):t&&this.setDeleteOnExpire(v.deleteOnExpire,!1),"recycleFreq"in e?this.setRecycleFreq(e.recycleFreq):t&&this.setRecycleFreq(v.recycleFreq),"maxAge"in e?this.setMaxAge(e.maxAge):t&&this.setMaxAge(v.maxAge),"storeOnResolve"in e?this.$$storeOnResolve=!!e.storeOnResolve:t&&(this.$$storeOnResolve=v.storeOnResolve),"storeOnReject"in e?this.$$storeOnReject=!!e.storeOnReject:t&&(this.$$storeOnReject=v.storeOnReject),"capacity"in e?this.setCapacity(e.capacity):t&&this.setCapacity(v.capacity),"cacheFlushInterval"in e?this.setCacheFlushInterval(e.cacheFlushInterval):t&&this.setCacheFlushInterval(v.cacheFlushInterval),"onExpire"in e?this.setOnExpire(e.onExpire):t&&this.setOnExpire(v.onExpire),"storageMode"in e||"storageImpl"in e?this.setStorageMode(e.storageMode||v.storageMode,e.storageImpl||v.storageImpl):t&&this.setStorageMode(v.storageMode,v.storageImpl)},setRecycleFreq:function(e){if(null===e)delete this.$$recycleFreq;else{if(!d.isNumber(e))throw new Error("recycleFreq must be a number!");if(0>e)throw new Error("recycleFreq must be greater than zero!");this.$$recycleFreq=e}clearInterval(this.$$recycleFreqId),"aggressive"===this.$$deleteOnExpire?!function(e){e.$$recycleFreqId=setInterval(function(){e.removeExpired()},e.$$recycleFreq)}(this):delete this.$$recycleFreqId},setStorageMode:function(e,t){function r(e,t){var r=this.keys(),i=r.length;if(i){for(var s=void 0,a=d.isObject(t),c=0;i>c;c++){if(s=r[c],e){var l=e().getItem(this.$$prefix+".data."+s);l&&(o[s]=d.fromJson(l))}else a&&(o[s]=t[s]);this.remove(s)}n=!0}}if(!d.isString(e))throw new Error("storageMode must be a string!");if("memory"!==e&&"localStorage"!==e&&"sessionStorage"!==e)throw new Error('storageMode must be "memory", "localStorage" or "sessionStorage"!');var i=l,s=a,n=!1,o={};if(this.$$initializing||r.call(this,i,s),this.$$storageMode=e,t){if(!d.isObject(t))throw new Error("storageImpl must be an object!");if(!("setItem"in t&&"function"==typeof t.setItem))throw new Error('storageImpl must implement "setItem(key, value)"!');if(!("getItem"in t&&"function"==typeof t.getItem))throw new Error('storageImpl must implement "getItem(key)"!');if(!("removeItem"in t)||"function"!=typeof t.removeItem)throw new Error('storageImpl must implement "removeItem(key)"!');l=function(){return t}}else if("localStorage"===this.$$storageMode)try{localStorage.setItem("cachefactory","cachefactory"),localStorage.removeItem("cachefactory"),l=function(){return localStorage}}catch(c){l=null,this.$$storageMode="memory"}else if("sessionStorage"===this.$$storageMode)try{sessionStorage.setItem("cachefactory","cachefactory"),sessionStorage.removeItem("cachefactory"),l=function(){return sessionStorage}}catch(c){l=null,this.$$storageMode="memory"}else l=null,this.$$storageMode="memory";if(this.$$initializing&&r.call(this,l,a),n){var u=void 0;for(var h in o)u=o[h],this.put(h,u.value,{created:u.created,accessed:u.accessed,expires:u.expires})}},touch:function(e,t){var r=this;if(e){var i=this.get(e,{onExpire:function(e,t){return r.put(e,t)}});i&&this.put(e,i,t)}else for(var s=this.keys(),n=0;n<s.length;n++)this.touch(s[n],t)},values:function(){for(var e=this.keys(),t=[],r=0;r<e.length;r++)t.push(this.get(e[r]));return t}};return p.$$initializing=!0,p.setOptions(o,!0),p.$$initializing=!1,p}function a(e,t){return o(e,t)}function c(){this.$get=function(){return a.BinaryHeap}}function l(){this.defaults=a.defaults,this.defaults.storagePrefix="angular-cache.caches.",this.$get=["$q",function(e){return a.utils.Promise=e,a}]}e="default"in e?e["default"]:e;var u={};u["typeof"]="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};var h=function(e,t,r){for(var i=e[r],s=t(i);r>0;){var n=Math.floor((r+1)/2)-1,o=e[n];if(s>=t(o))break;e[n]=i,e[r]=o,r=n}},f=function(e,t,r){for(var i=e.length,s=e[r],n=t(s);;){var o=2*(r+1),a=o-1,c=null;if(i>a){var l=e[a],u=t(l);n>u&&(c=a)}if(i>o){var h=e[o],f=t(h);f<(null===c?n:t(e[a]))&&(c=o)}if(null===c)break;e[r]=e[c],e[c]=s,r=c}},p=t.prototype;p.push=function(e){this.heap.push(e),h(this.heap,this.weightFunc,this.heap.length-1)},p.peek=function(){return this.heap[0]},p.pop=function(){var e=this.heap[0],t=this.heap.pop();return this.heap.length>0&&(this.heap[0]=t,f(this.heap,this.weightFunc,0)),e},p.remove=function(e){for(var t=this.heap.length,r=0;t>r;r++)if(this.compareFunc(this.heap[r],e)){var i=this.heap[r],s=this.heap.pop();return r!==t-1&&(this.heap[r]=s,h(this.heap,this.weightFunc,r),f(this.heap,this.weightFunc,r)),i}return null},p.removeAll=function(){this.heap=[]},p.size=function(){return this.heap.length};var m=null;try{m=window.Promise}catch($){}var d={isNumber:function(e){return"number"==typeof e},isString:function(e){return"string"==typeof e},isObject:function(e){return null!==e&&"object"===("undefined"==typeof e?"undefined":u["typeof"](e))},isFunction:function(e){return"function"==typeof e},fromJson:function(e){return JSON.parse(e)},equals:function(e,t){return e===t},Promise:m},v={capacity:Number.MAX_VALUE,maxAge:Number.MAX_VALUE,deleteOnExpire:"none",onExpire:null,cacheFlushInterval:null,recycleFreq:1e3,storageMode:"memory",storageImpl:null,disabled:!1,storagePrefix:"cachefactory.caches.",storeOnResolve:!1,storeOnReject:!1},g={};a.createCache=o,a.defaults=v,a.info=function(){var e=r(g),t={size:e.length,caches:{}};for(var i in v)v.hasOwnProperty(i)&&(t[i]=v[i]);for(var s=0;s<e.length;s++){var n=e[s];t.caches[n]=g[n].info()}return t},a.get=function(e){return g[e]},a.keySet=function(){return n(g)},a.keys=function(){return r(g)},a.destroy=function(e){g[e]&&(g[e].destroy(),delete g[e])},a.destroyAll=function(){for(var e in g)g[e].destroy();g={}},a.clearAll=function(){for(var e in g)g[e].removeAll()},a.removeExpiredFromAll=function(){var e={};for(var t in g)e[t]=g[t].removeExpired();return e},a.enableAll=function(){for(var e in g)g[e].$$disabled=!1},a.disableAll=function(){for(var e in g)g[e].$$disabled=!0},a.touchAll=function(){for(var e in g)g[e].touch()},a.utils=d,a.BinaryHeap=t,a.utils.equals=e.equals,a.utils.isObject=e.isObject,a.utils.fromJson=e.fromJson,e.module("angular-cache",[]).provider("BinaryHeap",c).provider("CacheFactory",l);var y="angular-cache";return y});
//# sourceMappingURL=angular-cache.min.map
/**
 * State-based routing for AngularJS
 * @version v0.3.1
 * @link http://angular-ui.github.com/
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
"undefined"!=typeof module&&"undefined"!=typeof exports&&module.exports===exports&&(module.exports="ui.router"),function(a,b,c){"use strict";function d(a,b){return R(new(R(function(){},{prototype:a})),b)}function e(a){return Q(arguments,function(b){b!==a&&Q(b,function(b,c){a.hasOwnProperty(c)||(a[c]=b)})}),a}function f(a,b){var c=[];for(var d in a.path){if(a.path[d]!==b.path[d])break;c.push(a.path[d])}return c}function g(a){if(Object.keys)return Object.keys(a);var b=[];return Q(a,function(a,c){b.push(c)}),b}function h(a,b){if(Array.prototype.indexOf)return a.indexOf(b,Number(arguments[2])||0);var c=a.length>>>0,d=Number(arguments[2])||0;for(d=0>d?Math.ceil(d):Math.floor(d),0>d&&(d+=c);c>d;d++)if(d in a&&a[d]===b)return d;return-1}function i(a,b,c,d){var e,i=f(c,d),j={},k=[];for(var l in i)if(i[l]&&i[l].params&&(e=g(i[l].params),e.length))for(var m in e)h(k,e[m])>=0||(k.push(e[m]),j[e[m]]=a[e[m]]);return R({},j,b)}function j(a,b,c){if(!c){c=[];for(var d in a)c.push(d)}for(var e=0;e<c.length;e++){var f=c[e];if(a[f]!=b[f])return!1}return!0}function k(a,b){var c={};return Q(a,function(a){c[a]=b[a]}),c}function l(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));return Q(c,function(c){c in a&&(b[c]=a[c])}),b}function m(a){var b={},c=Array.prototype.concat.apply(Array.prototype,Array.prototype.slice.call(arguments,1));for(var d in a)-1==h(c,d)&&(b[d]=a[d]);return b}function n(a,b){var c=P(a),d=c?[]:{};return Q(a,function(a,e){b(a,e)&&(d[c?d.length:e]=a)}),d}function o(a,b){var c=P(a)?[]:{};return Q(a,function(a,d){c[d]=b(a,d)}),c}function p(a,b){var d=1,f=2,i={},j=[],k=i,l=R(a.when(i),{$$promises:i,$$values:i});this.study=function(i){function n(a,c){if(s[c]!==f){if(r.push(c),s[c]===d)throw r.splice(0,h(r,c)),new Error("Cyclic dependency: "+r.join(" -> "));if(s[c]=d,N(a))q.push(c,[function(){return b.get(a)}],j);else{var e=b.annotate(a);Q(e,function(a){a!==c&&i.hasOwnProperty(a)&&n(i[a],a)}),q.push(c,a,e)}r.pop(),s[c]=f}}function o(a){return O(a)&&a.then&&a.$$promises}if(!O(i))throw new Error("'invocables' must be an object");var p=g(i||{}),q=[],r=[],s={};return Q(i,n),i=r=s=null,function(d,f,g){function h(){--u||(v||e(t,f.$$values),r.$$values=t,r.$$promises=r.$$promises||!0,delete r.$$inheritedValues,n.resolve(t))}function i(a){r.$$failure=a,n.reject(a)}function j(c,e,f){function j(a){l.reject(a),i(a)}function k(){if(!L(r.$$failure))try{l.resolve(b.invoke(e,g,t)),l.promise.then(function(a){t[c]=a,h()},j)}catch(a){j(a)}}var l=a.defer(),m=0;Q(f,function(a){s.hasOwnProperty(a)&&!d.hasOwnProperty(a)&&(m++,s[a].then(function(b){t[a]=b,--m||k()},j))}),m||k(),s[c]=l.promise}if(o(d)&&g===c&&(g=f,f=d,d=null),d){if(!O(d))throw new Error("'locals' must be an object")}else d=k;if(f){if(!o(f))throw new Error("'parent' must be a promise returned by $resolve.resolve()")}else f=l;var n=a.defer(),r=n.promise,s=r.$$promises={},t=R({},d),u=1+q.length/3,v=!1;if(L(f.$$failure))return i(f.$$failure),r;f.$$inheritedValues&&e(t,m(f.$$inheritedValues,p)),R(s,f.$$promises),f.$$values?(v=e(t,m(f.$$values,p)),r.$$inheritedValues=m(f.$$values,p),h()):(f.$$inheritedValues&&(r.$$inheritedValues=m(f.$$inheritedValues,p)),f.then(h,i));for(var w=0,x=q.length;x>w;w+=3)d.hasOwnProperty(q[w])?h():j(q[w],q[w+1],q[w+2]);return r}},this.resolve=function(a,b,c,d){return this.study(a)(b,c,d)}}function q(a,b,c){this.fromConfig=function(a,b,c){return L(a.template)?this.fromString(a.template,b):L(a.templateUrl)?this.fromUrl(a.templateUrl,b):L(a.templateProvider)?this.fromProvider(a.templateProvider,b,c):null},this.fromString=function(a,b){return M(a)?a(b):a},this.fromUrl=function(c,d){return M(c)&&(c=c(d)),null==c?null:a.get(c,{cache:b,headers:{Accept:"text/html"}}).then(function(a){return a.data})},this.fromProvider=function(a,b,d){return c.invoke(a,null,d||{params:b})}}function r(a,b,e){function f(b,c,d,e){if(q.push(b),o[b])return o[b];if(!/^\w+([-.]+\w+)*(?:\[\])?$/.test(b))throw new Error("Invalid parameter name '"+b+"' in pattern '"+a+"'");if(p[b])throw new Error("Duplicate parameter name '"+b+"' in pattern '"+a+"'");return p[b]=new U.Param(b,c,d,e),p[b]}function g(a,b,c,d){var e=["",""],f=a.replace(/[\\\[\]\^$*+?.()|{}]/g,"\\$&");if(!b)return f;switch(c){case!1:e=["(",")"+(d?"?":"")];break;case!0:f=f.replace(/\/$/,""),e=["(?:/(",")|/)?"];break;default:e=["("+c+"|",")?"]}return f+e[0]+b+e[1]}function h(e,f){var g,h,i,j,k;return g=e[2]||e[3],k=b.params[g],i=a.substring(m,e.index),h=f?e[4]:e[4]||("*"==e[1]?".*":null),h&&(j=U.type(h)||d(U.type("string"),{pattern:new RegExp(h,b.caseInsensitive?"i":c)})),{id:g,regexp:h,segment:i,type:j,cfg:k}}b=R({params:{}},O(b)?b:{});var i,j=/([:*])([\w\[\]]+)|\{([\w\[\]]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,k=/([:]?)([\w\[\].-]+)|\{([\w\[\].-]+)(?:\:\s*((?:[^{}\\]+|\\.|\{(?:[^{}\\]+|\\.)*\})+))?\}/g,l="^",m=0,n=this.segments=[],o=e?e.params:{},p=this.params=e?e.params.$$new():new U.ParamSet,q=[];this.source=a;for(var r,s,t;(i=j.exec(a))&&(r=h(i,!1),!(r.segment.indexOf("?")>=0));)s=f(r.id,r.type,r.cfg,"path"),l+=g(r.segment,s.type.pattern.source,s.squash,s.isOptional),n.push(r.segment),m=j.lastIndex;t=a.substring(m);var u=t.indexOf("?");if(u>=0){var v=this.sourceSearch=t.substring(u);if(t=t.substring(0,u),this.sourcePath=a.substring(0,m+u),v.length>0)for(m=0;i=k.exec(v);)r=h(i,!0),s=f(r.id,r.type,r.cfg,"search"),m=j.lastIndex}else this.sourcePath=a,this.sourceSearch="";l+=g(t)+(b.strict===!1?"/?":"")+"$",n.push(t),this.regexp=new RegExp(l,b.caseInsensitive?"i":c),this.prefix=n[0],this.$$paramNames=q}function s(a){R(this,a)}function t(){function a(a){return null!=a?a.toString().replace(/~/g,"~~").replace(/\//g,"~2F"):a}function e(a){return null!=a?a.toString().replace(/~2F/g,"/").replace(/~~/g,"~"):a}function f(){return{strict:p,caseInsensitive:m}}function i(a){return M(a)||P(a)&&M(a[a.length-1])}function j(){for(;w.length;){var a=w.shift();if(a.pattern)throw new Error("You cannot override a type's .pattern at runtime.");b.extend(u[a.name],l.invoke(a.def))}}function k(a){R(this,a||{})}U=this;var l,m=!1,p=!0,q=!1,u={},v=!0,w=[],x={string:{encode:a,decode:e,is:function(a){return null==a||!L(a)||"string"==typeof a},pattern:/[^\/]*/},"int":{encode:a,decode:function(a){return parseInt(a,10)},is:function(a){return L(a)&&this.decode(a.toString())===a},pattern:/\d+/},bool:{encode:function(a){return a?1:0},decode:function(a){return 0!==parseInt(a,10)},is:function(a){return a===!0||a===!1},pattern:/0|1/},date:{encode:function(a){return this.is(a)?[a.getFullYear(),("0"+(a.getMonth()+1)).slice(-2),("0"+a.getDate()).slice(-2)].join("-"):c},decode:function(a){if(this.is(a))return a;var b=this.capture.exec(a);return b?new Date(b[1],b[2]-1,b[3]):c},is:function(a){return a instanceof Date&&!isNaN(a.valueOf())},equals:function(a,b){return this.is(a)&&this.is(b)&&a.toISOString()===b.toISOString()},pattern:/[0-9]{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[1-2][0-9]|3[0-1])/,capture:/([0-9]{4})-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])/},json:{encode:b.toJson,decode:b.fromJson,is:b.isObject,equals:b.equals,pattern:/[^\/]*/},any:{encode:b.identity,decode:b.identity,equals:b.equals,pattern:/.*/}};t.$$getDefaultValue=function(a){if(!i(a.value))return a.value;if(!l)throw new Error("Injectable functions cannot be called at configuration time");return l.invoke(a.value)},this.caseInsensitive=function(a){return L(a)&&(m=a),m},this.strictMode=function(a){return L(a)&&(p=a),p},this.defaultSquashPolicy=function(a){if(!L(a))return q;if(a!==!0&&a!==!1&&!N(a))throw new Error("Invalid squash policy: "+a+". Valid policies: false, true, arbitrary-string");return q=a,a},this.compile=function(a,b){return new r(a,R(f(),b))},this.isMatcher=function(a){if(!O(a))return!1;var b=!0;return Q(r.prototype,function(c,d){M(c)&&(b=b&&L(a[d])&&M(a[d]))}),b},this.type=function(a,b,c){if(!L(b))return u[a];if(u.hasOwnProperty(a))throw new Error("A type named '"+a+"' has already been defined.");return u[a]=new s(R({name:a},b)),c&&(w.push({name:a,def:c}),v||j()),this},Q(x,function(a,b){u[b]=new s(R({name:b},a))}),u=d(u,{}),this.$get=["$injector",function(a){return l=a,v=!1,j(),Q(x,function(a,b){u[b]||(u[b]=new s(a))}),this}],this.Param=function(a,d,e,f){function j(a){var b=O(a)?g(a):[],c=-1===h(b,"value")&&-1===h(b,"type")&&-1===h(b,"squash")&&-1===h(b,"array");return c&&(a={value:a}),a.$$fn=i(a.value)?a.value:function(){return a.value},a}function k(c,d,e){if(c.type&&d)throw new Error("Param '"+a+"' has two type configurations.");return d?d:c.type?b.isString(c.type)?u[c.type]:c.type instanceof s?c.type:new s(c.type):"config"===e?u.any:u.string}function m(){var b={array:"search"===f?"auto":!1},c=a.match(/\[\]$/)?{array:!0}:{};return R(b,c,e).array}function p(a,b){var c=a.squash;if(!b||c===!1)return!1;if(!L(c)||null==c)return q;if(c===!0||N(c))return c;throw new Error("Invalid squash policy: '"+c+"'. Valid policies: false, true, or arbitrary string")}function r(a,b,d,e){var f,g,i=[{from:"",to:d||b?c:""},{from:null,to:d||b?c:""}];return f=P(a.replace)?a.replace:[],N(e)&&f.push({from:e,to:c}),g=o(f,function(a){return a.from}),n(i,function(a){return-1===h(g,a.from)}).concat(f)}function t(){if(!l)throw new Error("Injectable functions cannot be called at configuration time");var a=l.invoke(e.$$fn);if(null!==a&&a!==c&&!x.type.is(a))throw new Error("Default value ("+a+") for parameter '"+x.id+"' is not an instance of Type ("+x.type.name+")");return a}function v(a){function b(a){return function(b){return b.from===a}}function c(a){var c=o(n(x.replace,b(a)),function(a){return a.to});return c.length?c[0]:a}return a=c(a),L(a)?x.type.$normalize(a):t()}function w(){return"{Param:"+a+" "+d+" squash: '"+A+"' optional: "+z+"}"}var x=this;e=j(e),d=k(e,d,f);var y=m();d=y?d.$asArray(y,"search"===f):d,"string"!==d.name||y||"path"!==f||e.value!==c||(e.value="");var z=e.value!==c,A=p(e,z),B=r(e,y,z,A);R(this,{id:a,type:d,location:f,array:y,squash:A,replace:B,isOptional:z,value:v,dynamic:c,config:e,toString:w})},k.prototype={$$new:function(){return d(this,R(new k,{$$parent:this}))},$$keys:function(){for(var a=[],b=[],c=this,d=g(k.prototype);c;)b.push(c),c=c.$$parent;return b.reverse(),Q(b,function(b){Q(g(b),function(b){-1===h(a,b)&&-1===h(d,b)&&a.push(b)})}),a},$$values:function(a){var b={},c=this;return Q(c.$$keys(),function(d){b[d]=c[d].value(a&&a[d])}),b},$$equals:function(a,b){var c=!0,d=this;return Q(d.$$keys(),function(e){var f=a&&a[e],g=b&&b[e];d[e].type.equals(f,g)||(c=!1)}),c},$$validates:function(a){var d,e,f,g,h,i=this.$$keys();for(d=0;d<i.length&&(e=this[i[d]],f=a[i[d]],f!==c&&null!==f||!e.isOptional);d++){if(g=e.type.$normalize(f),!e.type.is(g))return!1;if(h=e.type.encode(g),b.isString(h)&&!e.type.pattern.exec(h))return!1}return!0},$$parent:c},this.ParamSet=k}function u(a,d){function e(a){var b=/^\^((?:\\[^a-zA-Z0-9]|[^\\\[\]\^$*+?.()|{}]+)*)/.exec(a.source);return null!=b?b[1].replace(/\\(.)/g,"$1"):""}function f(a,b){return a.replace(/\$(\$|\d{1,2})/,function(a,c){return b["$"===c?0:Number(c)]})}function g(a,b,c){if(!c)return!1;var d=a.invoke(b,b,{$match:c});return L(d)?d:!0}function h(d,e,f,g,h){function m(a,b,c){return"/"===q?a:b?q.slice(0,-1)+a:c?q.slice(1)+a:a}function n(a){function b(a){var b=a(f,d);return b?(N(b)&&d.replace().url(b),!0):!1}if(!a||!a.defaultPrevented){p&&d.url()===p;p=c;var e,g=j.length;for(e=0;g>e;e++)if(b(j[e]))return;k&&b(k)}}function o(){return i=i||e.$on("$locationChangeSuccess",n)}var p,q=g.baseHref(),r=d.url();return l||o(),{sync:function(){n()},listen:function(){return o()},update:function(a){return a?void(r=d.url()):void(d.url()!==r&&(d.url(r),d.replace()))},push:function(a,b,e){var f=a.format(b||{});null!==f&&b&&b["#"]&&(f+="#"+b["#"]),d.url(f),p=e&&e.$$avoidResync?d.url():c,e&&e.replace&&d.replace()},href:function(c,e,f){if(!c.validates(e))return null;var g=a.html5Mode();b.isObject(g)&&(g=g.enabled),g=g&&h.history;var i=c.format(e);if(f=f||{},g||null===i||(i="#"+a.hashPrefix()+i),null!==i&&e&&e["#"]&&(i+="#"+e["#"]),i=m(i,g,f.absolute),!f.absolute||!i)return i;var j=!g&&i?"/":"",k=d.port();return k=80===k||443===k?"":":"+k,[d.protocol(),"://",d.host(),k,j,i].join("")}}}var i,j=[],k=null,l=!1;this.rule=function(a){if(!M(a))throw new Error("'rule' must be a function");return j.push(a),this},this.otherwise=function(a){if(N(a)){var b=a;a=function(){return b}}else if(!M(a))throw new Error("'rule' must be a function");return k=a,this},this.when=function(a,b){var c,h=N(b);if(N(a)&&(a=d.compile(a)),!h&&!M(b)&&!P(b))throw new Error("invalid 'handler' in when()");var i={matcher:function(a,b){return h&&(c=d.compile(b),b=["$match",function(a){return c.format(a)}]),R(function(c,d){return g(c,b,a.exec(d.path(),d.search()))},{prefix:N(a.prefix)?a.prefix:""})},regex:function(a,b){if(a.global||a.sticky)throw new Error("when() RegExp must not be global or sticky");return h&&(c=b,b=["$match",function(a){return f(c,a)}]),R(function(c,d){return g(c,b,a.exec(d.path()))},{prefix:e(a)})}},j={matcher:d.isMatcher(a),regex:a instanceof RegExp};for(var k in j)if(j[k])return this.rule(i[k](a,b));throw new Error("invalid 'what' in when()")},this.deferIntercept=function(a){a===c&&(a=!0),l=a},this.$get=h,h.$inject=["$location","$rootScope","$injector","$browser","$sniffer"]}function v(a,e){function f(a){return 0===a.indexOf(".")||0===a.indexOf("^")}function m(a,b){if(!a)return c;var d=N(a),e=d?a:a.name,g=f(e);if(g){if(!b)throw new Error("No reference point given for path '"+e+"'");b=m(b);for(var h=e.split("."),i=0,j=h.length,k=b;j>i;i++)if(""!==h[i]||0!==i){if("^"!==h[i])break;if(!k.parent)throw new Error("Path '"+e+"' not valid for state '"+b.name+"'");k=k.parent}else k=b;h=h.slice(i).join("."),e=k.name+(k.name&&h?".":"")+h}var l=z[e];return!l||!d&&(d||l!==a&&l.self!==a)?c:l}function n(a,b){A[a]||(A[a]=[]),A[a].push(b)}function p(a){for(var b=A[a]||[];b.length;)q(b.shift())}function q(b){b=d(b,{self:b,resolve:b.resolve||{},toString:function(){return this.name}});var c=b.name;if(!N(c)||c.indexOf("@")>=0)throw new Error("State must have a valid name");if(z.hasOwnProperty(c))throw new Error("State '"+c+"' is already defined");var e=-1!==c.indexOf(".")?c.substring(0,c.lastIndexOf(".")):N(b.parent)?b.parent:O(b.parent)&&N(b.parent.name)?b.parent.name:"";if(e&&!z[e])return n(e,b.self);for(var f in C)M(C[f])&&(b[f]=C[f](b,C.$delegates[f]));return z[c]=b,!b[B]&&b.url&&a.when(b.url,["$match","$stateParams",function(a,c){y.$current.navigable==b&&j(a,c)||y.transitionTo(b,a,{inherit:!0,location:!1})}]),p(c),b}function r(a){return a.indexOf("*")>-1}function s(a){for(var b=a.split("."),c=y.$current.name.split("."),d=0,e=b.length;e>d;d++)"*"===b[d]&&(c[d]="*");return"**"===b[0]&&(c=c.slice(h(c,b[1])),c.unshift("**")),"**"===b[b.length-1]&&(c.splice(h(c,b[b.length-2])+1,Number.MAX_VALUE),c.push("**")),b.length!=c.length?!1:c.join("")===b.join("")}function t(a,b){return N(a)&&!L(b)?C[a]:M(b)&&N(a)?(C[a]&&!C.$delegates[a]&&(C.$delegates[a]=C[a]),C[a]=b,this):this}function u(a,b){return O(a)?b=a:b.name=a,q(b),this}function v(a,e,f,h,l,n,p,q,t){function u(b,c,d,f){var g=a.$broadcast("$stateNotFound",b,c,d);if(g.defaultPrevented)return p.update(),D;if(!g.retry)return null;if(f.$retry)return p.update(),E;var h=y.transition=e.when(g.retry);return h.then(function(){return h!==y.transition?A:(b.options.$retry=!0,y.transitionTo(b.to,b.toParams,b.options))},function(){return D}),p.update(),h}function v(a,c,d,g,i,j){function m(){var c=[];return Q(a.views,function(d,e){var g=d.resolve&&d.resolve!==a.resolve?d.resolve:{};g.$template=[function(){return f.load(e,{view:d,locals:i.globals,params:n,notify:j.notify})||""}],c.push(l.resolve(g,i.globals,i.resolve,a).then(function(c){if(M(d.controllerProvider)||P(d.controllerProvider)){var f=b.extend({},g,i.globals);c.$$controller=h.invoke(d.controllerProvider,null,f)}else c.$$controller=d.controller;c.$$state=a,c.$$controllerAs=d.controllerAs,c.$$resolveAs=d.resolveAs,i[e]=c}))}),e.all(c).then(function(){return i.globals})}var n=d?c:k(a.params.$$keys(),c),o={$stateParams:n};i.resolve=l.resolve(a.resolve,o,i.resolve,a);var p=[i.resolve.then(function(a){i.globals=a})];return g&&p.push(g),e.all(p).then(m).then(function(a){return i})}var A=e.reject(new Error("transition superseded")),C=e.reject(new Error("transition prevented")),D=e.reject(new Error("transition aborted")),E=e.reject(new Error("transition failed"));return x.locals={resolve:null,globals:{$stateParams:{}}},y={params:{},current:x.self,$current:x,transition:null},y.reload=function(a){return y.transitionTo(y.current,n,{reload:a||!0,inherit:!1,notify:!0})},y.go=function(a,b,c){return y.transitionTo(a,b,R({inherit:!0,relative:y.$current},c))},y.transitionTo=function(b,c,f){c=c||{},f=R({location:!0,inherit:!1,relative:null,notify:!0,reload:!1,$retry:!1},f||{});var g,j=y.$current,l=y.params,o=j.path,q=m(b,f.relative),r=c["#"];if(!L(q)){var s={to:b,toParams:c,options:f},t=u(s,j.self,l,f);if(t)return t;if(b=s.to,c=s.toParams,f=s.options,q=m(b,f.relative),!L(q)){if(!f.relative)throw new Error("No such state '"+b+"'");throw new Error("Could not resolve '"+b+"' from state '"+f.relative+"'")}}if(q[B])throw new Error("Cannot transition to abstract state '"+b+"'");if(f.inherit&&(c=i(n,c||{},y.$current,q)),!q.params.$$validates(c))return E;c=q.params.$$values(c),b=q;var z=b.path,D=0,F=z[D],G=x.locals,H=[];if(f.reload){if(N(f.reload)||O(f.reload)){if(O(f.reload)&&!f.reload.name)throw new Error("Invalid reload state object");var I=f.reload===!0?o[0]:m(f.reload);if(f.reload&&!I)throw new Error("No such reload state '"+(N(f.reload)?f.reload:f.reload.name)+"'");for(;F&&F===o[D]&&F!==I;)G=H[D]=F.locals,D++,F=z[D]}}else for(;F&&F===o[D]&&F.ownParams.$$equals(c,l);)G=H[D]=F.locals,D++,F=z[D];if(w(b,c,j,l,G,f))return r&&(c["#"]=r),y.params=c,S(y.params,n),S(k(b.params.$$keys(),n),b.locals.globals.$stateParams),f.location&&b.navigable&&b.navigable.url&&(p.push(b.navigable.url,c,{$$avoidResync:!0,replace:"replace"===f.location}),p.update(!0)),y.transition=null,e.when(y.current);if(c=k(b.params.$$keys(),c||{}),r&&(c["#"]=r),f.notify&&a.$broadcast("$stateChangeStart",b.self,c,j.self,l,f).defaultPrevented)return a.$broadcast("$stateChangeCancel",b.self,c,j.self,l),null==y.transition&&p.update(),C;for(var J=e.when(G),K=D;K<z.length;K++,F=z[K])G=H[K]=d(G),J=v(F,c,F===b,J,G,f);var M=y.transition=J.then(function(){var d,e,g;if(y.transition!==M)return A;for(d=o.length-1;d>=D;d--)g=o[d],g.self.onExit&&h.invoke(g.self.onExit,g.self,g.locals.globals),g.locals=null;for(d=D;d<z.length;d++)e=z[d],e.locals=H[d],e.self.onEnter&&h.invoke(e.self.onEnter,e.self,e.locals.globals);return y.transition!==M?A:(y.$current=b,y.current=b.self,y.params=c,S(y.params,n),y.transition=null,f.location&&b.navigable&&p.push(b.navigable.url,b.navigable.locals.globals.$stateParams,{$$avoidResync:!0,replace:"replace"===f.location}),f.notify&&a.$broadcast("$stateChangeSuccess",b.self,c,j.self,l),p.update(!0),y.current)}).then(null,function(d){return y.transition!==M?A:(y.transition=null,g=a.$broadcast("$stateChangeError",b.self,c,j.self,l,d),g.defaultPrevented||p.update(),e.reject(d))});return M},y.is=function(a,b,d){d=R({relative:y.$current},d||{});var e=m(a,d.relative);return L(e)?y.$current!==e?!1:b?j(e.params.$$values(b),n):!0:c},y.includes=function(a,b,d){if(d=R({relative:y.$current},d||{}),N(a)&&r(a)){if(!s(a))return!1;a=y.$current.name}var e=m(a,d.relative);return L(e)?L(y.$current.includes[e.name])?b?j(e.params.$$values(b),n,g(b)):!0:!1:c},y.href=function(a,b,d){d=R({lossy:!0,inherit:!0,absolute:!1,relative:y.$current},d||{});var e=m(a,d.relative);if(!L(e))return null;d.inherit&&(b=i(n,b||{},y.$current,e));var f=e&&d.lossy?e.navigable:e;return f&&f.url!==c&&null!==f.url?p.href(f.url,k(e.params.$$keys().concat("#"),b||{}),{absolute:d.absolute}):null},y.get=function(a,b){if(0===arguments.length)return o(g(z),function(a){return z[a].self});var c=m(a,b||y.$current);return c&&c.self?c.self:null},y}function w(a,b,c,d,e,f){function g(a,b,c){function d(b){return"search"!=a.params[b].location}var e=a.params.$$keys().filter(d),f=l.apply({},[a.params].concat(e)),g=new U.ParamSet(f);return g.$$equals(b,c)}return!f.reload&&a===c&&(e===c.locals||a.self.reloadOnSearch===!1&&g(c,d,b))?!0:void 0}var x,y,z={},A={},B="abstract",C={parent:function(a){if(L(a.parent)&&a.parent)return m(a.parent);var b=/^(.+)\.[^.]+$/.exec(a.name);return b?m(b[1]):x},data:function(a){return a.parent&&a.parent.data&&(a.data=a.self.data=d(a.parent.data,a.data)),a.data},url:function(a){var b=a.url,c={params:a.params||{}};if(N(b))return"^"==b.charAt(0)?e.compile(b.substring(1),c):(a.parent.navigable||x).url.concat(b,c);if(!b||e.isMatcher(b))return b;throw new Error("Invalid url '"+b+"' in state '"+a+"'")},navigable:function(a){return a.url?a:a.parent?a.parent.navigable:null},ownParams:function(a){var b=a.url&&a.url.params||new U.ParamSet;return Q(a.params||{},function(a,c){b[c]||(b[c]=new U.Param(c,null,a,"config"))}),b},params:function(a){var b=l(a.ownParams,a.ownParams.$$keys());return a.parent&&a.parent.params?R(a.parent.params.$$new(),b):new U.ParamSet},views:function(a){var b={};return Q(L(a.views)?a.views:{"":a},function(c,d){d.indexOf("@")<0&&(d+="@"+a.parent.name),c.resolveAs=c.resolveAs||a.resolveAs||"$resolve",b[d]=c}),b},path:function(a){return a.parent?a.parent.path.concat(a):[]},includes:function(a){var b=a.parent?R({},a.parent.includes):{};return b[a.name]=!0,b},$delegates:{}};x=q({name:"",url:"^",views:null,"abstract":!0}),x.navigable=null,this.decorator=t,this.state=u,this.$get=v,v.$inject=["$rootScope","$q","$view","$injector","$resolve","$stateParams","$urlRouter","$location","$urlMatcherFactory"]}function w(){function a(a,b){return{load:function(a,c){var d,e={template:null,controller:null,view:null,locals:null,notify:!0,async:!0,params:{}};return c=R(e,c),c.view&&(d=b.fromConfig(c.view,c.params,c.locals)),d}}}this.$get=a,a.$inject=["$rootScope","$templateFactory"]}function x(){var a=!1;this.useAnchorScroll=function(){a=!0},this.$get=["$anchorScroll","$timeout",function(b,c){return a?b:function(a){return c(function(){a[0].scrollIntoView()},0,!1)}}]}function y(a,c,d,e,f){function g(){return c.has?function(a){return c.has(a)?c.get(a):null}:function(a){try{return c.get(a)}catch(b){return null}}}function h(a,c){var d=function(){return{enter:function(a,b,c){b.after(a),c()},leave:function(a,b){a.remove(),b()}}};if(k)return{enter:function(a,c,d){b.version.minor>2?k.enter(a,null,c).then(d):k.enter(a,null,c,d)},leave:function(a,c){b.version.minor>2?k.leave(a).then(c):k.leave(a,c)}};if(j){var e=j&&j(c,a);return{enter:function(a,b,c){e.enter(a,null,b),c()},leave:function(a,b){e.leave(a),b()}}}return d()}var i=g(),j=i("$animator"),k=i("$animate"),l={restrict:"ECA",terminal:!0,priority:400,transclude:"element",compile:function(c,g,i){return function(c,g,j){function k(){if(m&&(m.remove(),m=null),o&&(o.$destroy(),o=null),n){var a=n.data("$uiViewAnim");s.leave(n,function(){a.$$animLeave.resolve(),m=null}),m=n,n=null}}function l(h){var l,m=A(c,j,g,e),t=m&&a.$current&&a.$current.locals[m];if(h||t!==p){l=c.$new(),p=a.$current.locals[m],l.$emit("$viewContentLoading",m);var u=i(l,function(a){var e=f.defer(),h=f.defer(),i={$animEnter:e.promise,$animLeave:h.promise,$$animLeave:h};a.data("$uiViewAnim",i),s.enter(a,g,function(){e.resolve(),o&&o.$emit("$viewContentAnimationEnded"),(b.isDefined(r)&&!r||c.$eval(r))&&d(a)}),k()});n=u,o=l,o.$emit("$viewContentLoaded",m),o.$eval(q)}}var m,n,o,p,q=j.onload||"",r=j.autoscroll,s=h(j,c);g.inheritedData("$uiView");c.$on("$stateChangeSuccess",function(){l(!1)}),l(!0)}}};return l}function z(a,c,d,e){return{restrict:"ECA",priority:-400,compile:function(f){var g=f.html();return function(f,h,i){var j=d.$current,k=A(f,i,h,e),l=j&&j.locals[k];if(l){h.data("$uiView",{name:k,state:l.$$state}),h.html(l.$template?l.$template:g);var m=b.extend({},l);f[l.$$resolveAs]=m;var n=a(h.contents());if(l.$$controller){l.$scope=f,l.$element=h;var o=c(l.$$controller,l);l.$$controllerAs&&(f[l.$$controllerAs]=o,f[l.$$controllerAs][l.$$resolveAs]=m),M(o.$onInit)&&o.$onInit(),h.data("$ngControllerController",o),h.children().data("$ngControllerController",o)}n(f)}}}}}function A(a,b,c,d){var e=d(b.uiView||b.name||"")(a),f=c.inheritedData("$uiView");return e.indexOf("@")>=0?e:e+"@"+(f?f.state.name:"")}function B(a,b){var c,d=a.match(/^\s*({[^}]*})\s*$/);if(d&&(a=b+"("+d[1]+")"),c=a.replace(/\n/g," ").match(/^([^(]+?)\s*(\((.*)\))?$/),!c||4!==c.length)throw new Error("Invalid state ref '"+a+"'");return{state:c[1],paramExpr:c[3]||null}}function C(a){var b=a.parent().inheritedData("$uiView");return b&&b.state&&b.state.name?b.state:void 0}function D(a){var b="[object SVGAnimatedString]"===Object.prototype.toString.call(a.prop("href")),c="FORM"===a[0].nodeName;return{attr:c?"action":b?"xlink:href":"href",isAnchor:"A"===a.prop("tagName").toUpperCase(),clickable:!c}}function E(a,b,c,d,e){return function(f){var g=f.which||f.button,h=e();if(!(g>1||f.ctrlKey||f.metaKey||f.shiftKey||a.attr("target"))){var i=c(function(){b.go(h.state,h.params,h.options)});f.preventDefault();var j=d.isAnchor&&!h.href?1:0;f.preventDefault=function(){j--<=0&&c.cancel(i)}}}}function F(a,b){return{relative:C(a)||b.$current,inherit:!0}}function G(a,c){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(d,e,f,g){var h,i=B(f.uiSref,a.current.name),j={state:i.state,href:null,params:null},k=D(e),l=g[1]||g[0],m=null;j.options=R(F(e,a),f.uiSrefOpts?d.$eval(f.uiSrefOpts):{});var n=function(c){c&&(j.params=b.copy(c)),j.href=a.href(i.state,j.params,j.options),m&&m(),l&&(m=l.$$addStateInfo(i.state,j.params)),null!==j.href&&f.$set(k.attr,j.href)};i.paramExpr&&(d.$watch(i.paramExpr,function(a){a!==j.params&&n(a)},!0),j.params=b.copy(d.$eval(i.paramExpr))),n(),k.clickable&&(h=E(e,a,c,k,function(){return j}),e.bind("click",h),d.$on("$destroy",function(){e.unbind("click",h)}))}}}function H(a,b){return{restrict:"A",require:["?^uiSrefActive","?^uiSrefActiveEq"],link:function(c,d,e,f){function g(b){m.state=b[0],m.params=b[1],m.options=b[2],m.href=a.href(m.state,m.params,m.options),n&&n(),j&&(n=j.$$addStateInfo(m.state,m.params)),m.href&&e.$set(i.attr,m.href)}var h,i=D(d),j=f[1]||f[0],k=[e.uiState,e.uiStateParams||null,e.uiStateOpts||null],l="["+k.map(function(a){return a||"null"}).join(", ")+"]",m={state:null,params:null,options:null,href:null},n=null;c.$watch(l,g,!0),g(c.$eval(l)),i.clickable&&(h=E(d,a,b,i,function(){return m}),d.bind("click",h),c.$on("$destroy",function(){d.unbind("click",h)}))}}}function I(a,b,c){return{restrict:"A",controller:["$scope","$element","$attrs","$timeout",function(b,d,e,f){function g(b,c,e){var f=a.get(b,C(d)),g=h(b,c),i={state:f||{name:b},params:c,hash:g};return p.push(i),q[g]=e,function(){var a=p.indexOf(i);-1!==a&&p.splice(a,1)}}function h(a,c){if(!N(a))throw new Error("state should be a string");return O(c)?a+T(c):(c=b.$eval(c),O(c)?a+T(c):a)}function i(){for(var a=0;a<p.length;a++)l(p[a].state,p[a].params)?j(d,q[p[a].hash]):k(d,q[p[a].hash]),m(p[a].state,p[a].params)?j(d,n):k(d,n)}function j(a,b){f(function(){a.addClass(b)})}function k(a,b){a.removeClass(b)}function l(b,c){return a.includes(b.name,c)}function m(b,c){return a.is(b.name,c)}var n,o,p=[],q={};n=c(e.uiSrefActiveEq||"",!1)(b);try{o=b.$eval(e.uiSrefActive)}catch(r){}o=o||c(e.uiSrefActive||"",!1)(b),O(o)&&Q(o,function(c,d){if(N(c)){var e=B(c,a.current.name);g(e.state,b.$eval(e.paramExpr),d)}}),this.$$addStateInfo=function(a,b){if(!(O(o)&&p.length>0)){var c=g(a,b,o);return i(),c}},b.$on("$stateChangeSuccess",i),i()}]}}function J(a){var b=function(b,c){return a.is(b,c)};return b.$stateful=!0,b}function K(a){var b=function(b,c,d){return a.includes(b,c,d)};return b.$stateful=!0,b}var L=b.isDefined,M=b.isFunction,N=b.isString,O=b.isObject,P=b.isArray,Q=b.forEach,R=b.extend,S=b.copy,T=b.toJson;b.module("ui.router.util",["ng"]),b.module("ui.router.router",["ui.router.util"]),b.module("ui.router.state",["ui.router.router","ui.router.util"]),b.module("ui.router",["ui.router.state"]),b.module("ui.router.compat",["ui.router"]),p.$inject=["$q","$injector"],b.module("ui.router.util").service("$resolve",p),q.$inject=["$http","$templateCache","$injector"],b.module("ui.router.util").service("$templateFactory",q);var U;r.prototype.concat=function(a,b){var c={caseInsensitive:U.caseInsensitive(),strict:U.strictMode(),squash:U.defaultSquashPolicy()};return new r(this.sourcePath+a+this.sourceSearch,R(c,b),this)},r.prototype.toString=function(){return this.source},r.prototype.exec=function(a,b){function c(a){function b(a){return a.split("").reverse().join("")}function c(a){return a.replace(/\\-/g,"-")}var d=b(a).split(/-(?!\\)/),e=o(d,b);return o(e,c).reverse()}var d=this.regexp.exec(a);if(!d)return null;b=b||{};var e,f,g,h=this.parameters(),i=h.length,j=this.segments.length-1,k={};if(j!==d.length-1)throw new Error("Unbalanced capture group in route '"+this.source+"'");var l,m;for(e=0;j>e;e++){for(g=h[e],l=this.params[g],m=d[e+1],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);m&&l.array===!0&&(m=c(m)),L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}for(;i>e;e++){for(g=h[e],k[g]=this.params[g].value(b[g]),l=this.params[g],m=b[g],f=0;f<l.replace.length;f++)l.replace[f].from===m&&(m=l.replace[f].to);L(m)&&(m=l.type.decode(m)),k[g]=l.value(m)}return k},r.prototype.parameters=function(a){return L(a)?this.params[a]||null:this.$$paramNames},r.prototype.validates=function(a){return this.params.$$validates(a)},r.prototype.format=function(a){function b(a){return encodeURIComponent(a).replace(/-/g,function(a){return"%5C%"+a.charCodeAt(0).toString(16).toUpperCase()})}a=a||{};var c=this.segments,d=this.parameters(),e=this.params;if(!this.validates(a))return null;var f,g=!1,h=c.length-1,i=d.length,j=c[0];for(f=0;i>f;f++){var k=h>f,l=d[f],m=e[l],n=m.value(a[l]),p=m.isOptional&&m.type.equals(m.value(),n),q=p?m.squash:!1,r=m.type.encode(n);if(k){var s=c[f+1],t=f+1===h;if(q===!1)null!=r&&(j+=P(r)?o(r,b).join("-"):encodeURIComponent(r)),j+=s;else if(q===!0){var u=j.match(/\/$/)?/\/?(.*)/:/(.*)/;j+=s.match(u)[1]}else N(q)&&(j+=q+s);t&&m.squash===!0&&"/"===j.slice(-1)&&(j=j.slice(0,-1))}else{if(null==r||p&&q!==!1)continue;if(P(r)||(r=[r]),0===r.length)continue;r=o(r,encodeURIComponent).join("&"+l+"="),j+=(g?"&":"?")+(l+"="+r),g=!0}}return j},s.prototype.is=function(a,b){return!0},s.prototype.encode=function(a,b){return a},s.prototype.decode=function(a,b){return a},s.prototype.equals=function(a,b){return a==b},s.prototype.$subPattern=function(){var a=this.pattern.toString();return a.substr(1,a.length-2)},s.prototype.pattern=/.*/,s.prototype.toString=function(){return"{Type:"+this.name+"}"},s.prototype.$normalize=function(a){return this.is(a)?a:this.decode(a)},s.prototype.$asArray=function(a,b){function d(a,b){function d(a,b){return function(){return a[b].apply(a,arguments)}}function e(a){return P(a)?a:L(a)?[a]:[]}function f(a){switch(a.length){case 0:return c;case 1:return"auto"===b?a[0]:a;default:return a}}function g(a){return!a}function h(a,b){return function(c){if(P(c)&&0===c.length)return c;c=e(c);var d=o(c,a);return b===!0?0===n(d,g).length:f(d)}}function i(a){return function(b,c){var d=e(b),f=e(c);if(d.length!==f.length)return!1;for(var g=0;g<d.length;g++)if(!a(d[g],f[g]))return!1;return!0}}this.encode=h(d(a,"encode")),this.decode=h(d(a,"decode")),this.is=h(d(a,"is"),!0),this.equals=i(d(a,"equals")),this.pattern=a.pattern,this.$normalize=h(d(a,"$normalize")),this.name=a.name,this.$arrayMode=b}if(!a)return this;if("auto"===a&&!b)throw new Error("'auto' array mode is for query parameters only");return new d(this,a)},b.module("ui.router.util").provider("$urlMatcherFactory",t),b.module("ui.router.util").run(["$urlMatcherFactory",function(a){}]),u.$inject=["$locationProvider","$urlMatcherFactoryProvider"],b.module("ui.router.router").provider("$urlRouter",u),v.$inject=["$urlRouterProvider","$urlMatcherFactoryProvider"],b.module("ui.router.state").factory("$stateParams",function(){return{}}).constant("$state.runtime",{autoinject:!0}).provider("$state",v).run(["$injector",function(a){
a.get("$state.runtime").autoinject&&a.get("$state")}]),w.$inject=[],b.module("ui.router.state").provider("$view",w),b.module("ui.router.state").provider("$uiViewScroll",x),y.$inject=["$state","$injector","$uiViewScroll","$interpolate","$q"],z.$inject=["$compile","$controller","$state","$interpolate"],b.module("ui.router.state").directive("uiView",y),b.module("ui.router.state").directive("uiView",z),G.$inject=["$state","$timeout"],H.$inject=["$state","$timeout"],I.$inject=["$state","$stateParams","$interpolate"],b.module("ui.router.state").directive("uiSref",G).directive("uiSrefActive",I).directive("uiSrefActiveEq",I).directive("uiState",H),J.$inject=["$state"],K.$inject=["$state"],b.module("ui.router.state").filter("isState",J).filter("includedByState",K)}(window,window.angular);
"use strict";var constantsModule=function(){var a={};return a.JS_MESSAGES={IS_EXTENSION_IDLE:"is-extension-idle",DISABLE_CONTENT_SCRIPT:"disable-content-script",CHECK_CONTENT_SCRIPT:"check-content-script",START_RECORDING:"start-recording",PAUSE_RECORDING:"pause-recording",RESUME_RECORDING:"resume-recording",STOP_RECORDING:"stop-recording",FETCH_THUMBNAIL_URL:"fetch-thumbnail-url",DELETE_VIDEO:"delete-video",DISSOCIATE_TAB:"dissociate-tab",SHARE_MODAL_CLOSED:"share-modal-closed",UPDATE_RECORDING_STATUS:"update-recording-status",RECORDING_STATUS:"recording-status",ENCODE_COMPLETE:"encode-complete",UPDATE_CLIENT_PROP:"update-client-prop",ASSOCIATED_TAB_READY:"associated-tab-ready",SAVE_LOCAL:"save-local",RETRY_UPLOAD:"retry-upload",SET_USER_ACCOUNT:"set-user-account",GET_SESSION_USER_DETAILS:"get-sesion-user-details",REMOVE_USER_ACCOUNT:"remove-user-account",FETCH_USER_ID_TOKEN:"fetch-user-id-token",FETCH_USER_DATA:"fetch-user-data",FETCH_ALLOWED_FEATURES:"fetch-allowed-features",IS_USER_LOGGED_IN:"is-user-logged-in",LOGOUT:"logout",UPDATE_USER_STATUS:"update-user-status",SET_SERVER_TIME_DIFFERENCE:"set-server-time-difference",ADD_JIRA_ADDON_SUBSCRIPTION:"add-jira-addon-subscription",FAB_DRAG_START:"fab-drag-start",FAB_DRAG_STOP:"fab-drag-stop",FAB_OPEN:"fab-open",FAB_CLOSE:"fab-close",FAB_LAYOUT_UPDATE:"fab-layout-update",FAB_SIZE_UPDATE:"fab-size-update",FETCH_NOTIFICATIONS:"fetch-notifications",SHOW_NOTIFICATION:"show-notification",REMOVE_NOTIFICATION:"remove-notification",NOTIFICATION_ACTION:"notification-action",FETCH_SETTINGS:"fetch-settings",SAVE_SETTINGS:"save-settings",SAVE_PREFERENCES:"save-preferences",BROADCAST_TO_TAB:"broadcast-to-tab",GET_CURRENT_TAB_ID:"get-current-tab-id",OPEN_URL:"open-url",OPEN_APP_URL:"open-app-url",SEND_GA_EVENT:"send-ga-event",SEND_GA_PAGE_VIEW:"send-ga-page-view",LOG_MESSAGE:"log-message",SEND_MIXPANEL_EVENT:"send-mixpanel-event",FETCH_MAIL_SHARE_VIDEO_DETAIL:"fetch-video-detail-event",FETCH_VIDEO_DETAIL:"fetch-video-detail",OPEN_SHARE_MODAL:"open-share-modal"},a.NACL_MESSAGES={START_RECORDING:"start-recording",STOP_RECORDING:"stop-recording",DISCARD_RECORDING:"discard-recording",ENCODE_DONE:"encode-done"},a.RECORDING_TYPES={DESKTOP:"desktop",TAB:"tab",FACECAM:"facecam"},a.RECORDING_TYPES_DEFAULT=a.RECORDING_TYPES.TAB,a.RECORDING_STATES={NEW:"NEW",STARTING:"STARTING",READY:"READY",RUNNING_COUNTDOWN:"RUNNING_COUNTDOWN",ACTIVE:"ACTIVE",PAUSED:"PAUSED",STOP_AV_STREAMS:"STOP_AV_STREAMS",PROCESSING:"PROCESSING",RECORDING_FAILED:"RECORDING_FAILED",UPLOADING:"UPLOADING",UPLOAD_FAILED:"UPLOAD_FAILED",DISCARDING:"DISCARDING",COMPLETED:"COMPLETED"},a.TAB_ACTIVITY={ACTIVATED:"tab-activity-activated",DEACTIVATED:"tab-activity-deactivated",REMOVED:"tab-activity-removed",RELOADED:"tab-activity-reloaded"},a.RECORDING_EVENTS={STATE_CHANGE:"state-change",PROGRESS:"progress",CLIENT_PROP_CHANGE:"client-prop-change",USER_NOTIFICATION:"show-user-notification"},a.RECORDING_ERRORS={EMPTY_RECORDING:{CODE:"EMPTY_RECORDING",HEADING:"Recording Failed",MESSAGE:"Uh oh - it looks like your recording is empty and we're not sure why. HYFY has discarded this recording, please restart your browser and try again."},RESTRICTED_DOMAIN:{CODE:"RESTRICTED_DOMAIN",HEADING:"Recording Blocked",MESSAGE:"HYFY has detected a violation of our terms of service and has automatically stopped recording. For more details, see <a target='_blank' href='https://www.hyfy.io/terms'>https://www.hyfy.io/terms</a>."},VIDEO_CAPTURE_FAILED:{CODE:"VIDEO_CAPTURE_FAILED",HEADING:"Recording Failed",MESSAGE:"Uh oh - Somehow we could not start the recording, please try again."}},a.RECORDING_START_SOURCE={POPUP:"POPUP",JIRA_ADDON:"JIRA_ADDON",CONTROL_WINDOW:"CONTROL_WINDOW",RECORDIND_FINISH_POPUP:"RECORDING_FINISH_POPUP",AUTOMATION:"AUTOMATION"},a.RECORDING_CLIENT_PROPS={TAB_DISSOCIATED:"TAB_DISSOCIATED",HIDE_FAB_MENU:"HIDE_FAB_MENU",CURSOR_COORDINATES:"CURSOR_COORDINATES",FAB_POSITION:"FAB_POSITION"},a.RECORDING_PARAMS={FRAMES_LOW_QUALITY:15,FRAMES_HIGH_QUALITY:30,HIGH_QUALITY_MIN_THREADS:2,HIGH_QUALITY_MIN_MEMORY:536870912},a.VIDEO_STATUS={NEW:1,DRAFT:2,UPLOADED:3,DELETED:4,EXPIRED:5,FAILED:6,BLOCKED:7},a.SOURCE_TYPE={SCREEN:1,FACECAM:2},a.STREAM_TYPE={SCREEN:1,FACECAM:2},a.VIDEO_SOURCE_TYPE={VIDEO:1,GIF:2},a.VIDEO_PLAY_MODE={FACECAM_AND_SCREEN:1,FACECAM:2,SCREEN:3},a.TIMER={MEDIA_RECORDER_START_TIMEOUT:5e3,UPLOAD_AJAX_TIMEOUT:18e4,GENERAL_AJAX_TIMEOUT:6e4,CHOOSE_DESKTOP_MEDIA_TIMEOUT:6e4,PAUSE_WAIT_TIMEOUT:6e5,PAUSE_WAIT_ADDITIONAL_TIMEOUT:18e5,TIMER_INTERVAL:1e3,BUGSNAG_REFRESH_INTERVAL:36e5,RECORDING_OBJECT_LIFE_TIME:216e5,RECORDING_OBJECT_EXTRA_LIFE_TIME:18e5,RECORDING_NACL_LOAD_TIMEOUT:6e4,RECORDING_NACL_PROCESSING_TIMEOUT:18e5,RECORDING_OBJECT_DELETE_RETRY_TIME:12e4,SUCCESS_MODAL_TIMEOUT:3e3,NO_AUDIO_TIMEOUT:2e3,MEDIA_RECORDER_DATA_INTERVAL:1e3,RECORDING_DATA_CLEANUP_INTERVAL:3e3},a.USER_SUBSCRIPTIONS={FREE:"HYFY_FREE",FREE_TRIAL:"HYFY_FREE_TRIAL",PRO:"HYFY_PRO",BUSINESS:"HYFY_BUSINESS"},a.USER_SUBSCRIPTIONS_MODE_HIERARCHY=["NONE","LICENSE","STRIPE"],a.USER_SUBSCRIPTIONS_MODE_HIERARCHY=[a.USER_SUBSCRIPTIONS.FREE,a.USER_SUBSCRIPTIONS.FREE_TRIAL,a.USER_SUBSCRIPTIONS.PRO,a.USER_SUBSCRIPTIONS.BUSINESS],a.FEATURES={RECORDING_DESKTOP:"RECORDING_DESKTOP",RECORDING_30_MIN:"RECORDING_30_MIN",RECORDING_60_MIN:"RECORDING_60_MIN",RECORDING_QUALITY_5MBPS:"RECORDING_QUALITY_5MBPS",SHARE_JIRA:"SHARE_JIRA",VIDEO_PRIVACY:"VIDEO_PRIVACY",VIDEO_NEVER_EXPIRES:"VIDEO_NEVER_EXPIRES",SHOW_UPLOAD_PROGRESS:"SHOW_UPLOAD_PROGRESS",HIDE_UPLOAD_PROGRESS_BAR:"HIDE_UPLOAD_PROGRESS_BAR"},a.USER_PREFERENCES={RECORDING_TYPE:"RECORDING_TYPE"},a.PERSISTENT_STORAGE_SIZE=1073741824,a.PERSISTENT_STORAGE_PATH="/persistent/",a.CHROME_EXTENSION="chrome-extension://",a.AV_MUXED_FILE_EXT=".webm",a.IMAGE_FILE_EXT=".jpeg",a.STORAGE_KEYS={ACCOUNT_TYPE:"account-type",ACCOUNT_ID:"account-id",AUTH_TOKEN:"auth-token",ACCOUNT_UPDATE_TIME:"account-update-time",SERVER_TIME_DIFFERENCE:"server-time-difference",USER_PREFERENCES:"user-preferences",INSTALLED_ON:"installed-on",RESTRICTED_URLS_PATTERNS:"restricted-urls",UUID:"extension-uuid",USER_TIPS_SHOWN:"user-tips-shown",VIEWERS_WANT_TO_SEE_YOUR_FACE_SHOWN:"viewers-want-to-see-your-face-shown"},a.ACCOUNT_TYPE={AUTH0:"auth0"},a.NOTIFICATION_CONTEXT={TAB:"notification-context-tab",POPUP:"notification-context-popup",BROWSER:"notification-context-browser"},a.RECORDING_CONTROLS_TOOLTIPS={STOP:"STOP the recording.",PAUSE:"PAUSE the recording.",RESUME:"RESUME the recording.",HIDE:"Hide these controls until the next time.<br/>Click the extension icon to STOP recording.",DISCARD:"DELETE this recording permanently.",SUPPORT:"Having trouble? Get help with HYFY Support"},a.COMMON_NOTIFICATION_MESSAGES={AJAX_ERROR_RETRY:"We’re having trouble communicating. Please check your network connection and try again in a moment.",VIDEO_DELETED:"The current recording has been discarded.",RECORDING_FAILED:"Looks like we're experiencing some technical difficulties. Please try again in a few moments.",RECORDING_EMPTY:"Uh oh - it looks like your recording is empty and we're not sure why. HYFY has discarded this recording, please restart your browser and try again.",RECORDING_TIMEOUT:"Looks like you took too long to choose screen option. Please try again.",UPLOAD_ERROR:"HYFY has encountered an error uploading your video. Please confirm your network connection and try again in a few moments.",CLOCK_OUT_OF_SYNC:"Oops - we had trouble uploading your video. We've detected that your system clock is out of sync with internet time or set to a different time zone than we were expecting. Luckily, it's an easy fix! Email us at support@hyfy.io - we can help! Or if you know how to fix it yourself, go ahead and then please try HYFY again",PAUSE_WARNING:"Your recording has been paused for a long time.  Would you like to discard it?"},a.COMMON_NOTIFICATION_ACTIONS={TRY_AGAIN:"TRY AGAIN",SAVE_RECORDING:"SAVE RECORDING",DISCARD_RECORDING:"DISCARD RECORDING"},a.NOTIFICATION_MESSAGES={AJAX_ERROR:{type:"basic",title:"Communication Error!!",message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,buttons:[{title:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN}],expiryInSeconds:1800},VIDEO_DELETED:{type:"basic",title:"Recording Deleted",message:a.COMMON_NOTIFICATION_MESSAGES.VIDEO_DELETED,expiryInSeconds:3},RECORDING_FAILED:{type:"basic",title:"Recording Failed",message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_FAILED},RECORDING_EMPTY:{type:"basic",title:"Empty Recording",message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_EMPTY},RECORDING_TIMEOUT:{type:"basic",title:"Recording Timeout",message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_TIMEOUT,expiryInSeconds:5},UPLOAD_ERROR:{type:"basic",title:"Upload Error",message:a.COMMON_NOTIFICATION_MESSAGES.UPLOAD_ERROR,buttons:[{title:"TRY AGAIN"}],expiryInSeconds:1800},CLOCK_OUT_OF_SYNC:{type:"basic",title:"Upload Error",message:a.COMMON_NOTIFICATION_MESSAGES.CLOCK_OUT_OF_SYNC,buttons:[{title:"TRY AGAIN"}],expiryInSeconds:1800},UNSUPPORTED_TAB:{type:"basic",title:"Unsupported Tab",message:"Google Chrome won't allow HYFY to embed controls on this page. Please use extension icon to stop and share."},PAUSE_WARNING:{type:"basic",title:"Recording Paused for Several Minutes",message:a.COMMON_NOTIFICATION_MESSAGES.PAUSE_WARNING,buttons:[{title:"DISCARD RECORDING"},{title:"KEEP IT PAUSED"}],expiryInSeconds:120},NO_PAGE_CONTROLS:{type:"basic",title:"Can't Embed Controls",message:"Google Chrome won't allow HYFY to embed any controls on this page. Your can still record the tab, just use extension icon to stop and share.",buttons:[{title:"GOT IT"}]},EXTENSION_RELOADED:{type:"basic",title:"HYFY Reloaded",message:"Hyfy is ready to use."},USER_LOGOUT:{type:"basic",title:"Successful Logout",message:"You have successfully logged out."},LOGOUT_DISABLED:{type:"basic",title:"Can't Log Out",message:"HYFY is either recording or uploading your videos. Please try again in a few moments."},ASSOCIATED_TAB_CLOSED:{type:"basic",title:"Tab Closed",message:"Your recording is still in prrogress, please use extension icon to stop and share."},RECORDING_TAB_SWITCH_FREE:{type:"basic",title:"Tab Switch Detected",message:"You're still recording. but HYFY FREE can only record a single browser tab.",buttons:[{title:"Upgrade to HYFY PRO for full desktop recording."}]},RECORDING_TAB_SWITCH_PRO:{type:"basic",title:"Tab Switch Detected",message:"You're still recording, but in Tab Capture mode, HYFY can only record a single browser tab.  Try Desktop mode to capture multiple tabs, other windows, or your entire screen.",buttons:[]},ASSOCIATED_TAB_SWITCH:{type:"basic",title:"Tab Switched",message:"Your recording is still in prrogress, please use extension icon to stop and share."},VIDEO_UPLOAD_PROGRESS:{type:"progress",title:"Uploading...",message:"HYFY is uploading your recording to your HYFY video library.",buttons:[{title:"NOTIFY ME WHEN DONE"}]},VIDEO_UPLOAD_COMPLETED:{type:"progress",title:"Upload Completed",progress:100,message:"Your recording has been successfully uploaded to your HYFY video library.",buttons:[{title:"OK"}]}},a.TOAST_NOTIFICATION={AJAX_ERROR:{message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN,expiryInSeconds:1800},RECORDING_FAILED:{message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_FAILED},RECORDING_EMPTY:{message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_EMPTY},RECORDING_TIMEOUT:{message:a.COMMON_NOTIFICATION_MESSAGES.RECORDING_TIMEOUT,expiryInSeconds:5},VIDEO_THUMBNAIL_UPLOAD_AJAX_ERROR_RETRY:{message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN},VIDEO_FILE_UPLOAD_AJAX_ERROR_RETRY:{message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN},VIDEO_DELETED:{message:a.COMMON_NOTIFICATION_MESSAGES.VIDEO_DELETED,expiryInSeconds:3},VIDEO_DISCARDED:{message:"The current recording has been discarded.",expiryInSeconds:3},UPLOAD_ERROR:{message:a.COMMON_NOTIFICATION_MESSAGES.UPLOAD_ERROR,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN,expiryInSeconds:1800},CLOCK_OUT_OF_SYNC:{message:a.COMMON_NOTIFICATION_MESSAGES.CLOCK_OUT_OF_SYNC,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN,expiryInSeconds:1800}},a.POPUP_NOTIFICATION={AJAX_ERROR:{message:a.COMMON_NOTIFICATION_MESSAGES.AJAX_ERROR_RETRY,actionText:a.COMMON_NOTIFICATION_ACTIONS.TRY_AGAIN}},a.TOAST_NOTIFICATION_MESSAGES_TYPE={ERROR:"error",UNSUPPORTED_BROWSER:"unsupported-browser",RECORDING_FAILED:"recording-failed",VIDEO_DISCARDED:"video-discarded",VIDEO_DELETED:"video-deleted",SLACK_DATA_FETCH_FAILURE:"slack-data-fetch-failure",HIPCHAT_DATA_FETCH_FAILURE:"hipchat-data-fetch-failure",SLACK_POST_FAILURE:"slack-post-failure",HIPCHAT_POST_FAILURE:"hipchat-post-failure",EDIT_TITLE_FAILURE:"edit-title-failure",UPLOAD_COMPLETE:"upload-complete",UPLOAD_ERROR:"upload-error",USER_CREATE_SESSION_AJAX_ERROR_RETRY:"video-object-creation-ajax-error-retry",VIDEO_OBJECT_CREATION_AJAX_ERROR_RETRY:"video-object-creation-ajax-error-retry",VIDEO_FILE_UPLOAD_AJAX_ERROR_RETRY:"video-file-upload-ajax-error-retry",VIDEO_THUMBNAIL_UPLOAD_AJAX_ERROR_RETRY:"video-thumbnail-upload-ajax-error-retry",VIDEO_UPDATE_AJAX_ERROR_RETRY:"video-update-ajax-error-retry",GET_VIDEO_THUMBNAIL_UPLOAD_URL_AJAX_ERROR_RETRY:"get-video-thumbnail-upload-url-ajax-error-retry",GET_VIDEO_UPLOAD_URL_AJAX_ERROR_RETRY:"get-video-upload-url-ajax-error-retry",UPDATE_VIDEO_SOURCE_AJAX_ERROR_RETRY:"update-video-source-ajax-error-retry",ACTIVE_RECORDING_TAB_SWITCH:"active-recording-tab-switch",JIRA_CREATE_ISSUE_FAILURE:"jira-create-issue-failure",JIRA_DATA_FETCH_FAILURE:"jira-data-fetch-failure",JIRA_COMMENT_ON_ISSUE_FAILURE:"jira-comment-on-issue-failure"},a.TOAST_NOTIFICATION_MESSAGES={ERROR:"Cut! Looks like we're experiencing some technical difficulties. Please try again.",UNSUPPORTED_BROWSER:"HYFY requires Chrome Native Client to be enabled. Please enable it here: chrome://plugins",RECORDING_FAILED:"Looks like we're experiencing some technical difficulties. Please try again in a few moments.",VIDEO_DISCARDED:"The current recording has been discarded.",VIDEO_DELETED:"Your HYFY video has been permanently deleted.",UPLOAD_COMPLETE:"Link copied to your clipboard. Paste away!.",UPLOAD_ERROR:"HYFY has encountered an error uploading your video. Please confirm your network connection and try again in a few moments",AJAX_ERROR_RETRY:"We’re having trouble communicating. Please check your network and try again in a few moments.",ACTIVE_RECORDING_TAB_SWITCH:"Psst. Hey buddy, you're still recording that tab over there.",JIRA_DATA_FETCH_FAILURE:"Well, that's disappointing. We couldn't retrieve your JIRA information.",JIRA_CREATE_ISSUE_FAILURE:"Well, that's disappointing. We couldn't create your issue in Jira.",JIRA_COMMENT_ON_ISSUE_FAILURE:"Well, that's disappointing. We couldn't comment on your issue in Jira."},a.VIDEO_CONTENT_TYPE="video/webm",a.IMAGE_CONTENT_TYPE="image/jpeg",a.NACL_CONTENT_TYPE="application/x-nacl",a.VIDEO_FILE_NAME_PREFIX="HYFY-RECORDING-",a.IMAGE_FILE_NAME_PREFIX="HYFY-THUMBNAIL-",a.VIDEO_STREAM_FACECAM="FACECAM-",a.VIDEO_STREAM_SCREEN="",a.FILE_FORMATS={OGG:1,WEBM:2,MP4:3},a.VIDEO_FORMATS={THEORA:1,VP8:2,VP9:3,H264:4},a.AUDIO_FORMATS={VORBIS:1,OPUS:2,ACC:3,MP3:4},a.IMAGE_FILE_TYPE={JPEG:"jpeg"},a.VIDEO_RECORDING_DURATION={MIN_3:180,MIN_10:600,MIN_4:240,MIN_30:1800,MIN_60:3600},a.VIDEO_RECORDING_DURATION_DEFAULT=a.VIDEO_RECORDING_DURATION.MIN_10,a.RECORDING_COUNTDOWN_TIME=5,a.LOG_LEVELS={TRACE:"TRACE",DEBUG:"DEBUG",INFO:"INFO",WARN:"WARN",ERROR:"ERROR",EXCEPTION:"EXCEPTION"},a.DEFAULT_PAGE_TITLE="Untitled HYFY on ",a.BUGSNAG_LOG_NUMBER=200,a.ADD_SPINNER=1,a.REMOVE_SPINNER=0,a.GA_EVENT_CATEGORY={VIDEO:"Video",MIC_PERMISSION:"Mic Permission",CHROME_EXTENSION:"Chrome Extension",USER_INTERACTION:"User Interaction"},a.GA_EVENT_ACTION={RECORDING_STARTED:"Started",RECORDING_DISCARDED:"Discarded",RECORDING_UPLOADED:"Uploaded",RECORDING_DELETED:"Deleted",RECORDING_ERROR:"Error",RECORDING_BLOCKED:"Blocked",RECORDING_USER_TIMEOUT:"User Timeout",SHARED:"Shared",LINK_COPIED:"Link Copied",ALLOWED:"Allowed",DENIED:"Denied",INSTALLED:"Installed",UPDATED:"Updated",ERROR:"Error",LINK_CLICKED:"Link Clicked",SIGN_OUT:"Sign Out",PAUSED:"Paused"},a.GA_EVENT_LABEL={EXTENSION:"Extension",EXTENSION_TAB:"Extension - Tab",EXTENSION_DESKTOP:"Extension - Desktop",CHROME_WEBSTORE_OR_INLINE:"Chrome Webstore / Inline",JIRA_ADDON:"JIRA addon",EXTENSION_POPUP:"Extension Popup"},a.GA_USER_PLAN={FREE:"free",FREE_TRIAL:"free-trial",PRO:"pro",BUSINESS:"business"},a.MIXPANEL_EVENT_ACTION={RECORDING_CREATED:"rec_created",RECORDING_STARTED:"rec_started",RECORDING_RESTARTED:"rec_restarted",RECORDING_PAUSED:"rec_paused",RECORDING_DISCARDED:"rec_discarded",RECORDING_STOPPED:"rec_stopped",RECORDING_UPLOADED:"rec_uploaded",RECORDING_ERROR:"rec_error",RECORDING_BLOCKED:"rec_blocked",MIC_PERMISSION_ALLOWED:"mic_permission_allowed",MIC_PERMISSION_DENIED:"mic_permission_denied",INSTALLED:"extension_installed",USER_TIPS_CLOSED:"user_tips_closed",UPDATED:"extension_updated",EXTENSION_POPUP_OPENED:"extension_popup_opened",SIGN_OUT:"sign_out"},a.MIXPANEL_ATTRIBUTE={SOURCE:"source",USER_TIP_NUMBER:"user_tip_number"},a.MIXPANEL_ATTRIBUTE_SOURCE={AUDIO_ACCESS:"audio-access",SUCCESSFUL_INSTALL:"successful-install",FACECAM_PERMISSION_ALLOWED:"facecam_permission_allowed",MIC_PERMISSION_ALLOWED:"mic_permission_allowed"},a.SETTINGS={DEBUG:{key:"settings-debug",label:"Debug",inputType:"checkbox",defaultValue:!1}},a.SYSTEM_FAILURE_REASONS={LOW_MEMORY:"low-memory",LOW_DISK_SPACE:"low-disk-space"},a.ENCODERS={MEDIA_RECORDER_VP8:{id:"media-recorder-vp8",label:"Media Recorder VP8",mimeType:"video/webm;codecs=vp8",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP8,videoBitRate:1e6,audioBitRate:128e3},MEDIA_RECORDER_VP9_1M:{id:"media-recorder-vp9-1m",label:"Media Recorder VP9 1Mbps",mimeType:"video/webm;codecs=vp9",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP9,videoBitRate:1e6,audioBitRate:128e3},MEDIA_RECORDER_VP9_5M:{id:"media-recorder-vp9-5m",label:"Media Recorder VP9 5Mbps",mimeType:"video/webm;codecs=vp9",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP9,videoBitRate:5e6,audioBitRate:128e3},MEDIA_RECORDER_VP9_10M:{id:"media-recorder-vp9-10m",label:"Media Recorder VP9 10Mbps",mimeType:"video/webm;codecs=vp9",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP9,videoBitRate:1e7,audioBitRate:128e3},MEDIA_RECORDER_H264_1M:{id:"media-recorder-h264-5m",label:"Media Recorder H264 1Mbps",mimeType:"video/webm;codecs=h264",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.H264,videoBitRate:1e6,audioBitRate:128e3},NACL:{id:"nacl",label:"NACL",mimeType:"video/webm;codecs=vp8",fileFormat:a.FILE_FORMATS.WEBM,videoFormat:a.VIDEO_FORMATS.VP8,videoBitRate:1e6,audioBitRate:128e3}},a}(),EXTENSION_SETTINGS={apiBaseUrl:"https://api.hyfy.io/apis/v1",siteBaseUrl:"https://app.hyfy.io",staticBaseUrl:"https://static.hyfy.io",jsLogLevel:"info",naclConsoleLogLevel:"info",naclTerminalLogLevel:"off",logEntriesLevel:"info",logEntriesToken:"d735703d-b3ed-4380-998b-bdebe1d7b6eb",bugsnagApiKey:"8d50a69cb0b2a0c4ee60b31f8ce85c5a",bugsnagLogLevel:"warn",bugsnagReleaseStage:"production",naclEnableShowcaseUrl:"https://app-dev.hyfy.io/v/abAx0U8egU/",googleAnalyticsTrackingId:"UA-65824100-2"},bugsnagModule=function(){function a(){window.Bugsnag.refresh()}function b(){c&&clearInterval(c),c=setInterval(a,window.constantsModule.TIMER.BUGSNAG_REFRESH_INTERVAL)}var c,d={};return d.setBugsnagUserId=function(){chrome.storage.local.get(window.constantsModule.STORAGE_KEYS.ACCOUNT_ID,function(a){a[window.constantsModule.STORAGE_KEYS.ACCOUNT_ID]&&(window.Bugsnag.user={id:a[window.constantsModule.STORAGE_KEYS.ACCOUNT_ID]})})},d.setExtensionUUID=function(){chrome.storage.local.get(window.constantsModule.STORAGE_KEYS.UUID,function(a){if(a[window.constantsModule.STORAGE_KEYS.UUID]){var b={};$.extend(b,window.Bugsnag.metaData,{extensionUUID:a[window.constantsModule.STORAGE_KEYS.UUID]}),window.Bugsnag.metaData=b}})},$(function(){window.Bugsnag&&(window.Bugsnag.releaseStage=window.EXTENSION_SETTINGS.bugsnagReleaseStage,window.Bugsnag.apiKey=window.EXTENSION_SETTINGS.bugsnagApiKey,d.setBugsnagUserId(),d.setExtensionUUID(),window.Bugsnag.appVersion=chrome.app.getDetails().version,b(),window.Bugsnag.beforeNotify=function(a,b){a.stacktrace=a.stacktrace.replace(/chrome-extension:/g,"chromeextension:")})}),d}(),urlsModule=function(){var a={};return a.LOCAL_URLS={images:{icon_19:"images/hyfy-circular-off_19.png",icon_128:"images/hyfy-circular-on_128.png",cursor:"images/cursor.png",move_handle:"images/handle-move.png"},assets:{countdown_beep:"/images/beep_basic_lo_c.wav",final_beep:"/images/beep_octave_on.wav"},templates:{successful_install:"index.html#/successful-install",popup:"index.html#/popup",recorder_iframe:"index.html#/recorder-iframe",notifications_iframe:"index.html#/notifications-iframe",processing_iframe:"index.html#/processing-iframe",recording_status:"index.html#/recording-status/:recordingId",save_local:"index.html#/notification/:recordingId/save-local",upload_error:"index.html#/notification/:recordingId/upload-error",recording_error:"index.html#/notification/:recordingId/recording-error",frame:"frame.html",toast:"toast_notification.html",jira_addon_recorder_iframe_v2:"index.html#/jira-addon-recorder-iframe-v2",jira_addon_recorder_iframe:"index.html#/jira-addon-recorder-iframe",recordingControls:"index.html#/recording-controls",recordingFinished:"index.html#/recording-finished"},embedded:{recording_controls:"embedded/recording-controls/recording-controls.html"}},a.API_URLS={users:{list:'"/users/"',detail:'"/users/" + arguments[0] + "/"',get_detail:'"/users/get_detail/"',create_session:'"/users/create_session/"',logout:'"/users/logout/"'},subscription:{user:'"/subscription/user/2/"',jiraAddonUser:'"/subscription/jiraaddonuser/"'},restricted_domains:{list:'"/restricted-domains/"'},videos:{list:'"/videos/"',detail:'"/videos/" + arguments[0] + "/"',update:'"/videos/" + arguments[0] + "/"',uploadUrl:'"/videos/" + arguments[0] + "/thumbnail_upload_url/"',thumbnailUploadInfo:'"/videos/" + arguments[0] + "/thumbnail_upload_info/"',uploadInfo:'"/videos/" + arguments[0] + "/upload_info/"',uploadToken:'"/videos/" + arguments[0] + "/upload_token/"',videoShareDetail:'"/videos/" + arguments[0] + "/gmailsharevideodetails/"',gifShareDetail:'"/videos/" + arguments[0] + "/gmailsharegifdetails/"'},videoSources:{list:'"/video-sources/"',update:'"/video-sources/" + arguments[0] + "/"',uploadUrl:'"/video-sources/" + arguments[0] + "/upload_url/"',uploadInfo:'"/video-sources/" + arguments[0] + "/upload_info/"'}},a.SITE_API_URLS={create_session:'"/apis/v1/users/create_session/"',get_auth_details:'"/apis/v1/users/get_auth_details/"',logout:'"/apis/v1/users/logout/"'},a.SITE_URLS={universal_redirector:"/universal-redirector/?next=",videos:{video_library:'"/videos/library/"'},accounts:{login:'"/accounts/login/"',upgrade:'"/accounts/details/"',details:'"/accounts/details/"'},chrome_ext:{welcome:'"/chrome-ext/welcome/"',analytics:'"/chrome-ext/analytics/"',mixPanel:'"/chrome-ext/mixpanel_analytics/"',getting_started:'"/chrome-ext/getting-started/"',uninstall:'"/chrome-ext/uninstall/"'},support:'"/support/"'},a}(),logModule=function(){function a(a){this.BrowserConsoleAppender=a,this.loggingEvents=[]}function b(a){this.BrowserConsoleAppender=a,this.loggingEvents=[]}function c(a){this.BrowserConsoleAppender=a,this.loggingEvents=[]}function d(){}function e(a){this.BrowserConsoleAppender=a,this.loggingEvents=[]}var f=chrome.runtime.getURL(chrome.runtime.getManifest().background.page)==window.location.href,g=chrome.runtime.getURL(window.urlsModule.LOCAL_URLS.templates.popup),h=function(){var a=new Date;return a.toString()},i={};i.jsLogger=window.log4javascript.getLogger("jsLogger"),i.jsLogger.setLevel(window.log4javascript.Level.TRACE);var j={all:window.log4javascript.Level.ALL,trace:window.log4javascript.Level.TRACE,debug:window.log4javascript.Level.DEBUG,info:window.log4javascript.Level.INFO,warn:window.log4javascript.Level.WARN,error:window.log4javascript.Level.ERROR,fatal:window.log4javascript.Level.FATAL,off:window.log4javascript.Level.OFF};if(f){var k,l;i.setLogEntriesUserId=function(){chrome.storage.local.get(window.constantsModule.STORAGE_KEYS.ACCOUNT_ID,function(a){a[window.constantsModule.STORAGE_KEYS.ACCOUNT_ID]&&(k=a[window.constantsModule.STORAGE_KEYS.ACCOUNT_ID])})},i.setExtensionUUID=function(a){l=a},i.setLogEntriesUserId(),document.addEventListener("DOMContentLoaded",function(a){"off"!==window.EXTENSION_SETTINGS.logEntriesLevel&&(window.LE.init(window.EXTENSION_SETTINGS.logEntriesToken),i.logInfo("log-dom-ready","Log enteries initialized."))});var m=[];a.prototype=new window.log4javascript.Appender,a.prototype.toString=function(){return"Custom Appender for all logs"},a.prototype.append=function(a){var b=a.level.name,c=a.messages[2],d=a.messages[3];d=b+": "+a.messages[1]+" "+c+" "+d,a.messages.length>4&&(d="object"==typeof a.messages[4]?d+" "+JSON.stringify(a.messages[4]):d+" "+a.messages[4]),m.length===window.constantsModule.BUGSNAG_LOG_NUMBER?(m.shift(),m.push(d)):m.push(d)},b.prototype=new window.log4javascript.Appender,b.prototype.toString=function(){return"Custom LogEntries Appender"},b.prototype.append=function(a){this.loggingEvents.push(a);var b=a.level.name,c=a.messages[2],d={severity:b,extensionUUID:l,accountId:k,time:a.messages[1],source:c.slice(0,-1),message:a.messages[3]};switch(a.messages.length>4?d.data=a.messages[4]:d.data={},b){case window.constantsModule.LOG_LEVELS.INFO:window.LE.info(d);break;case window.constantsModule.LOG_LEVELS.WARN:window.LE.warn(d);break;case window.constantsModule.LOG_LEVELS.ERROR:window.LE.error(d);break;default:window.LE.log(d)}},c.prototype=new window.log4javascript.Appender,c.prototype.toString=function(){return"Custom Bugsnag Appender"},c.prototype.append=function(a){this.loggingEvents.push(a);var b=a.level.name,c=a.messages[2],d=a.messages[3];d=a.messages[1]+d;var e=c;-1!=e.indexOf("_tab_")&&(e=e.replace(/(_tab_)\d+/,"_tab")),-1==e.indexOf("-callApi")&&(e=e.replace(/\d+/,""));var f={groupingHash:e};a.messages.length>4&&(d="object"==typeof a.messages[4]?d+" "+JSON.stringify(a.messages[4]):d+" "+a.messages[4]);var g="";m.forEach(function(a,b,c){g=g+a+"\n"}),d=d+"\n"+g,window.Bugsnag&&window.Bugsnag.apiKey&&(a.exception?window.Bugsnag.notifyException(a.exception,c+" "+d,f,b):window.Bugsnag.notify(c,d,f,b))},d.prototype=new window.log4javascript.Layout,d.prototype.format=function(a){for(var b="",c=0;c<a.messages.length;c++){c>0&&(b+=" ");var d=a.messages[c];"object"==typeof d?b+=JSON.stringify(d):"string"==typeof d||"number"==typeof d?b+=d:(console.log(typeof d),b+=d)}return b},d.prototype.ignoresThrowable=function(){return!0},i.naclConsoleLogLevel="off",i.naclTerminalLogLevel="off",i.naclLogger=window.log4javascript.getLogger("naclLogger");var n=new window.log4javascript.BrowserConsoleAppender;n.setLayout(new d);var o=new window.log4javascript.BrowserConsoleAppender,p=new c(window.log4javascript.BrowserConsoleAppender),q=new b(window.log4javascript.BrowserConsoleAppender),r=new a(window.log4javascript.BrowserConsoleAppender);i.naclLogger.setLevel(window.log4javascript.Level.TRACE),p.setThreshold(j[window.EXTENSION_SETTINGS.bugsnagLogLevel]),n.setThreshold(j[window.EXTENSION_SETTINGS.jsLogLevel]),o.setThreshold(j[window.EXTENSION_SETTINGS.naclConsoleLogLevel]),q.setThreshold(j[window.EXTENSION_SETTINGS.logEntriesLevel]),i.naclConsoleLogLevel=window.EXTENSION_SETTINGS.naclConsoleLogLevel,i.naclTerminalLogLevel=window.EXTENSION_SETTINGS.naclTerminalLogLevel,i.jsLogger.addAppender(n),i.jsLogger.addAppender(p),i.jsLogger.addAppender(q),i.jsLogger.addAppender(r),i.naclLogger.addAppender(o),i.naclLogger.addAppender(p),i.naclLogger.addAppender(q),i.naclLogger.addAppender(r),chrome.runtime.onMessage.addListener(function(a,b,c){if(a.message===window.constantsModule.JS_MESSAGES.LOG_MESSAGE){var d="";switch(b.tab?d="_tab_"+b.tab.id:g===b.url&&(d="_popup"),a.level){case window.constantsModule.LOG_LEVELS.TRACE:case window.constantsModule.LOG_LEVELS.DEBUG:i.logDebug(a.name+d,a.logMessage,a.logObject,a.time);break;case window.constantsModule.LOG_LEVELS.INFO:i.logInfo(a.name+d,a.logMessage,a.logObject,a.time);break;case window.constantsModule.LOG_LEVELS.WARN:i.logWarn(a.name+d,a.logMessage,a.logObject,a.time);break;case window.constantsModule.LOG_LEVELS.ERROR:case window.constantsModule.LOG_LEVELS.EXCEPTION:i.logError(a.name+d,a.logMessage,a.logObject,a.time)}}})}else{e.prototype=new window.log4javascript.Appender,e.prototype.toString=function(){return"Background Log Appender"},e.prototype.append=function(a){chrome.runtime.sendMessage({message:window.constantsModule.JS_MESSAGES.LOG_MESSAGE,level:a.level.name,time:a.messages[1],name:a.messages[2],logMessage:a.messages[3],logObject:a.messages[4]},function(){})};var s=new e(window.log4javascript.BrowserConsoleAppender);s.setThreshold(j[window.EXTENSION_SETTINGS.jsLogLevel]),i.jsLogger.addAppender(s)}return i.logTrace=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.TRACE+":";d||(d=h()),c?window.logModule.jsLogger.trace(e,d,a+":",b,c):window.logModule.jsLogger.trace(e,d,a+":",b)},i.logDebug=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.DEBUG+":";d||(d=h()),c?window.logModule.jsLogger.debug(e,d,a+":",b,c):window.logModule.jsLogger.debug(e,d,a+":",b)},i.logInfo=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.INFO+":";d||(d=h()),c?window.logModule.jsLogger.info(e,d,a+":",b,c):window.logModule.jsLogger.info(e,d,a+":",b)},i.logWarning=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.WARN+":";d||(d=h()),c?window.logModule.jsLogger.warn(e,d,a+":",b,c):window.logModule.jsLogger.warn(e,d,a+":",b)},i.logError=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.ERROR+":";d||(d=h()),c?window.logModule.jsLogger.error(e,d,a+":",b,c):window.logModule.jsLogger.error(e,d,a+":",b)},i.logWarn=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.WARN+":";d||(d=h()),c?window.logModule.jsLogger.warn(e,d,a+":",b,c):window.logModule.jsLogger.warn(e,d,a+":",b)},i.logException=function(a,b,c,d){var e=window.constantsModule.LOG_LEVELS.EXCEPTION+":";d||(d=h()),window.logModule.jsLogger.error(e,d,a+":",b,c)},i.LoggerPrototype=function(a){var b=this;this.source=a,this.trace=function(a,b,d,e){var f=c(a);i.logTrace(f,b,d,e)},this.debug=function(a,b,d,e){var f=c(a);i.logDebug(f,b,d,e)},this.info=function(a,b,d,e){var f=c(a);i.logInfo(f,b,d,e)},this.warn=function(a,b,d,e){var f=c(a);i.logWarning(f,b,d,e)},this.error=function(a,b,d,e){var f=c(a);i.logError(f,b,d,e)},this.exception=function(a,b,d,e){var f=c(a);i.logException(f,b,d,e)};var c=function(a){return b.source+"-"+a}},i.getLogger=function(a){return new i.LoggerPrototype(a)},i}(),utilsModule=function(){var _logger=window.logModule.getLogger("utils"),_publicObjects={},_urlToAjaxMap={};_publicObjects.callApi=function(a,b,c,d,e){_logger.debug("callApi","entering",{url:a.url,userAuthentication:d?!0:!1});var f=$.extend(!0,{},a);f.dataType||(f.dataType="json"),f.contentType||(f.contentType="application/json");var g=f.error;if(f.error=function(h,i,j){var k=!1;if(e&&(403==h.status||401==h.status)&&h.responseText)try{var l=JSON.parse(h.responseText);if(l.detail){var m=JSON.parse(l.detail);"TIME_OUT_OF_SYNC_OR_TOKEN_EXPIRED"==m.reason&&m.timeInSeconds&&(k=!0,e(m))}}catch(n){_logger.info("callApi","failed to get auth details",n)}if(!k){var o=_publicObjects.buildXHRError(h,i,j);o.url=f.url;var p=!1,q=!1,r=!1;if(0==o.readyState?(q=!0,_logger.info("callApi","network error",o)):"abort"==i?(p=!0,_logger.info("callApi","request aborted",o)):503==h.status?_logger.info("callApi","request failed, application under maintenance"):(q=!0,r=!0,_logger.info("callApi","request failed",o)),q&=!c)setTimeout(function(){_publicObjects.callApi(a,b,!0,d,e)},5e3);else{if(r){var s=_publicObjects.buildApiFailureLogPrefix("callApi",o);_logger.trace(s,"request details",$.extend({
authHeader:d},o)),_logger.warn(s,"request failed")}g&&g(h,i,j)}}},d){var h=f.beforeSend;f.beforeSend=function(a){a.setRequestHeader("Authorization",d),h&&h(a)}}var i=$.ajax(f);b&&i&&b(i)},_publicObjects.createAuthHeader=function(a){var b=new Date,c=0;a.serverTimeDifference&&(c=a.serverTimeDifference);var d=Math.round(b.getTime()/1e3+c).toString(),e=window.CryptoJS.enc.Base64.stringify(window.CryptoJS.HmacSHA512(a.accountId+":"+d,a.token));return"Basic "+btoa(a.accountId+":"+d+":"+e)},_publicObjects.getLocalUrl=function(a){return chrome.extension.getURL(a)},_publicObjects.makeApiUrl=function(urlCode,args){return void 0==args&&(args=[]),function(){return window.EXTENSION_SETTINGS.apiBaseUrl+eval(urlCode)}.apply(null,args)},_publicObjects.makeSiteUrl=function(urlCode,args){return void 0==args&&(args=[]),function(){return window.EXTENSION_SETTINGS.siteBaseUrl+eval(urlCode)}.apply(null,args)},_publicObjects.makeAbsoluteSiteUrl=function(a){return window.EXTENSION_SETTINGS.siteBaseUrl+a},_publicObjects.microphoneAndCameraAccessPermission=function(a){_logger.debug("microphoneAndCameraAccessPermission ","entering."),checkDeviceSupport(function(b,c){_logger.info("microphoneAndCameraAccessPermission",{hasMicrophone:b,hasWebcam:c}),navigator.webkitGetUserMedia({audio:b?!0:!1,video:c?!0:!1},function(b){if(_logger.info("microphoneAndCameraAccessPermission","got mic/camera permissions."),null!=b){var c=!0;null!==b.getAudioTracks()&&b.getAudioTracks().length?b.getAudioTracks()[0].stop():c=!1,null!==b.getVideoTracks()&&b.getVideoTracks().length?b.getVideoTracks()[0].stop():c=!1,b=null,a(c)}else a(!1)},function(b){_logger.info("microphoneAndCameraAccessPermission","microphone/camera permissions denied."),a(!1)})})};var canDevicesBeEnumerated=function(){navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(navigator.enumerateDevices=function(a){navigator.mediaDevices.enumerateDevices().then(a)});var a=!1;return"undefined"!=typeof MediaStreamTrack&&"getSources"in MediaStreamTrack?a=!0:navigator.mediaDevices&&navigator.mediaDevices.enumerateDevices&&(a=!0),a},updateEnumerateDevices=function(){!navigator.enumerateDevices&&window.MediaStreamTrack&&window.MediaStreamTrack.getSources&&(navigator.enumerateDevices=window.MediaStreamTrack.getSources.bind(window.MediaStreamTrack)),navigator.enumerateDevices||(navigator.enumerateDevices=navigator.enumerateDevices.bind(navigator))},checkDeviceSupport=function(a){var b=canDevicesBeEnumerated();_logger.debug("checkDeviceSupport","canEnumerate - ",b);var c=!1,d=!1;return b||a(c,d),updateEnumerateDevices(),navigator.enumerateDevices?void navigator.enumerateDevices(function(b){_logger.debug("checkDeviceSupport - navigator.enumerateDevices","devices - ",b),b.forEach(function(a){"audioinput"===a.kind&&(c=!0),"videoinput"===a.kind&&(d=!0)}),a&&a(c,d)}):void(a&&a(c,d))};return _publicObjects.checkAudioOutputSupport=function(a){var b=canDevicesBeEnumerated();_logger.debug("checkAudioOutputSupport","canEnumerate - ",b);var c=!1;return b||a(c),updateEnumerateDevices(),navigator.enumerateDevices?void navigator.enumerateDevices(function(b){_logger.debug("checkAudioOutputSupport - navigator.enumerateDevices","devices - ",b),b.forEach(function(a){"audiooutput"===a.kind&&(c=!0)}),a&&a(c)}):void(a&&a(c))},_publicObjects.buildUserFeaturesList=function(a){var b=[];if(a)for(var c in a){var d=a[c];if(d.features)for(var e=0;e<d.features.length;e++)-1==b.indexOf(d.features[e])&&b.push(d.features[e]);if(d.betaFeatures)for(var e=0;e<d.betaFeatures.length;e++)-1==b.indexOf(d.betaFeatures[e])&&b.push(d.betaFeatures[e])}return b},_publicObjects.buildApiFailureLogPrefix=function(a,b){var c=document.createElement("a");c.href=b.url;var d=c.pathname,e=b.status;return a+"_"+e+"_"+d},_publicObjects.getParameterByName=function(a){a=a.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var b=new RegExp("[\\?&]"+a+"=([^&#]*)"),c=b.exec(location.search);return null===c?void 0:decodeURIComponent(c[1].replace(/\+/g," "))},_publicObjects.getDefaultPageTitle=function(){return window.constantsModule.DEFAULT_PAGE_TITLE+(new Date).toISOString().split("T")[0]},_publicObjects.copyToClipboard=function(a){var b=$('<input type="text" class="share-url">');$("body").prepend(b),b.val(a),b.select(),document.execCommand("Copy"),b.remove()},_publicObjects.isUnOrderedArrayDifferent=function(a,b){if(a&&a.length&&!b||b&&b.length&&!a)return!0;if(!(a&&0!=a.length||b&&0!=b.length))return!1;if(a.length==b.length){for(var c=0;c<a.length;c++)if(-1==b.indexOf(a[c]))return!0;return!1}return!0},_publicObjects.buildXHRError=function(a,b,c){var d={};return a&&(d={readyState:a.readyState,status:a.status,textStatus:b,responseText:a.responseText,errorThrown:c}),d},_publicObjects.getCookie=function(a){for(var b=a+"=",c=document.cookie.split(";"),d=0;d<c.length;d++){for(var e=c[d];" "==e.charAt(0);)e=e.substring(1);if(0==e.indexOf(b))return e.substring(b.length,e.length)}return""},_publicObjects}(),chromeUtilsModule=function(){var a=window.logModule.getLogger("chromeUtils"),b={};return b.FEATURES={NOTIFICATION_REQUIRE_INTERACTION:{id:"NOTIFICATION_REQUIRE_INTERACTION",minVersion:"50"},CAPTURE_CURSOR:{id:"CAPTURE_CURSOR",minVersion:"50"},MEDIA_RECORDER:{id:"MEDIA_RECORDER",minVersion:"50"},CHOOSE_AUDIO_DEVICE:{id:"CHOOSE_AUDIO_DEVICE",minVersion:"48"},TAB_IN_DESKTOP_RECORDING:{id:"TAB_IN_DESKTOP_RECORDING",minVersion:"50"}},b.isFeatureAvailable=function(b){var c=/Chrome\/([0-9.]+)/.exec(navigator.userAgent)[1];return a.debug("isFeatureAvailable","checking",{feature:b.id,browserVersion:c}),b.minVersion&&b.minVersion>c?(a.info("isFeatureAvailable","feature not available on this browser",{feature:b.id,browserVersion:c}),!1):!0},b}();
!function(){BackgndAPI=new function(){var a=this,b=window.logModule.getLogger("BackgndAPI"),c=function(a,c){try{chrome.runtime.sendMessage(a,function(){c&&c.apply(this,arguments)})}catch(d){b.info("BackgndAPI-_sendMessageWrapper","Error Sending message to background",JSON.stringify(a),d)}},d=function(a,b){var c={message:a};return b&&$.extend(c,b),c};a.isExtensionIdle=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.IS_EXTENSION_IDLE,a);c(e,b)},a.showNotification=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SHOW_NOTIFICATION,a);c(e,b)},a.setUserAccount=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SET_USER_ACCOUNT,a);c(e,b)},a.removeUserAccount=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.REMOVE_USER_ACCOUNT,a);c(e,b)},a.logoutUser=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.LOGOUT,a);c(e,b)},a.isUserLoggedIn=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.IS_USER_LOGGED_IN,a);c(e,b)},a.fetchUserIdToken=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_USER_ID_TOKEN,a);c(e,b)},a.fetchUserData=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_USER_DATA,a);c(e,b)},a.addJiraAddonSubscription=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.ADD_JIRA_ADDON_SUBSCRIPTION,a);c(e,b)},a.setServerTimeDifference=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SET_SERVER_TIME_DIFFERENCE,a);c(e,b)},a.broadcastToTab=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.BROADCAST_TO_TAB,a);c(e,b)},a.getCurrentTabId=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.GET_CURRENT_TAB_ID,a);c(e,b)},a.getCurrentTabUrl=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.GET_CURRENT_TAB_URL,a);c(e,b)},a.startRecording=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.START_RECORDING,a);c(e,b)},a.stopRecording=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.STOP_RECORDING,a);c(e,b)},a.pauseRecording=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.PAUSE_RECORDING,a);c(e,b)},a.resumeRecording=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.RESUME_RECORDING,a);c(e,b)},a.fetchRecordingStatus=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.RECORDING_STATUS,a);c(e,b)},a.fetchThumbnailUrl=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_THUMBNAIL_URL,a);c(e,b)},a.updateClientProperty=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.UPDATE_CLIENT_PROP,a);c(e,b)},a.associatedTabReady=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.ASSOCIATED_TAB_READY,a);c(e,b)},a.deleteVideo=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.DELETE_VIDEO,a);c(e,b)},a.reRecordVideo=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.RERECORD,a);c(e,b)},a.saveLocal=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SAVE_LOCAL,a);c(e,b)},a.retryUpload=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.RETRY_UPLOAD,a);c(e,b)},a.dissociateTab=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.DISSOCIATE_TAB,a);c(e,b)},a.fetchNotifications=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_NOTIFICATIONS,a);c(e,b)},a.removeNotification=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.REMOVE_NOTIFICATION,a);c(e,b)},a.triggerNotificationAction=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.NOTIFICATION_ACTION,a);c(e,b)},a.openUrl=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.OPEN_URL,a);c(e,b)},a.openAppUrl=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.OPEN_APP_URL,a);c(e,b)},a.sendGAEvent=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SEND_GA_EVENT,a);c(e,b)},a.sendGAPageView=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SEND_GA_PAGE_VIEW,a);c(e,b)},a.fetchSettings=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_SETTINGS,a);c(e,b)},a.saveSettings=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SAVE_SETTINGS,a);c(e,b)},a.savePreferences=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SAVE_PREFERENCES,a);c(e,b)},a.sendMixPanelEvent=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.SEND_MIXPANEL_EVENT,a);c(e,b)},a.fetchMailShareVideoDetail=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_MAIL_SHARE_VIDEO_DETAIL,a);c(e,b)},a.fetchVideoDetail=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.FETCH_VIDEO_DETAIL,a);c(e,b)},a.openShareModel=function(a,b){var e=d(window.constantsModule.JS_MESSAGES.OPEN_SHARE_MODAL,a);c(e,b)}}}();var clientUtilsModule=function(){var a=window.logModule.getLogger("clientUtils"),b={};return b.callApi=function(c,d,e,f,g){if(d){var h=void 0;g||(h=function(a){BackgndAPI.setServerTimeDifference({timeInSeconds:a.timeInSeconds},function(){b.callApi(c,d,e,f,!0)})}),BackgndAPI.fetchUserIdToken({},function(b){if(b.accountId&&b.token){var d=window.utilsModule.createAuthHeader(b);window.utilsModule.callApi(c,e,f,d,h)}else a.info("callApi","userAuthentication is set to true but could not find user id and token, failing request"),c.error&&c.error(),c.complete&&c.complete()})}else window.utilsModule.callApi(c,e,f)},b.getUserFeatures=function(a){BackgndAPI.fetchUserData({},function(b){var c=[];b&&b.subscriptions&&(c=b.subscriptions.userFeatures),a(c)})},b.getApplicableSettings=function(a){var b={},c=window.constantsModule.SETTINGS;for(var d in c)if(c.hasOwnProperty(d)){var e=c[d];b[e.key]=e.defaultValue}BackgndAPI.fetchSettings({settingKeys:Object.keys(b)},function(c){c&&c.settings&&$.extend(b,c.settings),a(b)})},b}();
!function(){"use strict";angular.module("hyfyCommons",[])}(),function(){"use strict";angular.module("hyfyCommons").service("Logger",[function(){var a=this;a.trace=window.logModule.logTrace,a.debug=window.logModule.logDebug,a.info=window.logModule.logInfo,a.warn=window.logModule.logWarning,a.error=window.logModule.logError,a.exception=window.logModule.logException}])}();
(function() {
    'use strict';

    angular.module('hyfyext', [
        'ngAnimate',
        'ui.router',
        'templates-main',
        'hyfyCommons'
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').config([
        '$sceProvider',
        function($sceProvider) {
            $sceProvider.enabled(false);
        }
    ]);

    angular.module('hyfyext').config([
        '$compileProvider',
        function($compileProvider){
            $compileProvider.imgSrcSanitizationWhitelist(/^\s*(https?|mailto|chrome-extension):/);
        }
    ]);

    angular.module('hyfyext').config([
        '$stateProvider',
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
            $stateProvider.state('popup', {
                url: "/popup",
                templateUrl: "components/popup/popup.html"
            }).state('notifications_iframe', {
                url: "/notifications-iframe",
                templateUrl: "components/notifications/notifications.html"
            }).state('successful-install', {
                url: "/successful-install",
                templateUrl: "components/successful-install/successful-install.html"
            }).state('audio-access', {
                url: "/audio-access",
                templateUrl: "components/audio-access/audio-access.html"
            }).state('settings', {
                url: "/settings",
                templateUrl: "components/settings/settings.html"
            }).state('jira_addon_recorder_iframe', {
                url: "/jira-addon-recorder-iframe",
                templateUrl: "components/jira-addon-recording-controls/jira-addon-recording-controls.html"
            }).state('jira_addon_recorder_iframe_v2', {
                url: "/jira-addon-recorder-iframe-v2",
                templateUrl: "components/jira-addon-recording-controls-v2/jira-addon-recording-controls-v2.html"
            }).state('recording-status', {
                abstract: true,
                templateUrl: "components/recording-status/recording-status.html",
                controller: 'RecordingStatusController',
                params: {
                    recordingId: null
                },
                resolve: {
                    recording: ['$stateParams', '$q', 'RecordingClientService', function($stateParams, $q, RecordingClientService) {
                        var deferred = $q.defer();
                        RecordingClientService.initByRecordingId($stateParams.recordingId, function(recording) {
                            deferred.resolve(recording);
                        });
                        return deferred.promise;
                    }]
                }
            }).state('recording-status.show', {
                url: "/recording-status/:recordingId",
                views: {
                    "share-modal": {
                        templateUrl: "components/recording-status/share-modal/share-modal.html",
                        controller: 'ShareModalController'
                    },
                    "recording-error": {
                        templateUrl: "components/recording-status/recording-error/recording-error.html",
                        controller: 'RecordingErrorController'
                    },
                    "upload-error": {
                        templateUrl: "components/recording-status/upload-error/upload-error.html",
                        controller: 'UploadErrorController'
                    },
                    "save-local": {
                        templateUrl: "components/recording-status/save-local/save-local.html",
                        controller: 'SaveLocalController'
                    },
                    "recover-recording": {
                        templateUrl: "components/recording-status/recover-recording/recover-recording.html",
                        controller: 'RecoverRecordingController'
                    }
                }
            }).state('recording-controls',{
                url: "/recording-controls",
                templateUrl: "components/recording-controls/recording-controls.html"
            }).state('recording-finished',{
                url: "/recording-finished",
                templateUrl: "components/recording-finished/recording-finished.html"
            }).state('start-recording', {
                url: "/start-recording",
                templateUrl: "components/automation/automation-start-recording/automation-start-recording.html"
            }).state('stop-recording', {
                url: "/stop-recording",
                templateUrl: "components/automation/automation-stop-recording/automation-stop-recording.html"
            });
    ;
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('AppController', [
        '$scope',
        'UserClientService',
        function($scope, UserClientService) {
            $scope.init = function() {
                UserClientService.init();
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').directive('showLoaderIf', [
        '$timeout',
        function($timeout) {
            return {
                restrict: 'A',
                scope: true,
                priority: 1000,
                link: function($scope, iElement, iAttrs) {
                    if (iAttrs.showLoaderIf) {
                        $scope.$watch(iAttrs.showLoaderIf, function(value) {
                            if (value) {
                                $(iElement).addClass("showLoader");
                                if ($(iElement).children(".dimLayer").length == 0) {
                                    var dimLayer = $('<div class="dimLayer"></div>');
                                    var ajaxLoader = $('<div class="ajax-loader"></div>');
                                    $(iElement).prepend(dimLayer);
                                    $(iElement).prepend(ajaxLoader);
                                }
                            } else {
                                $(iElement).removeClass("showLoader");
                                if ($(iElement).children(".dimLayer").length > 0) {
                                    $(iElement).children(".dimLayer").remove();
                                    $(iElement).children(".ajax-loader").remove();
                                }
                            }
                        });
                    }
                }
            }
        }
    ]);

    angular.module('hyfyext').directive('animateModelChange', [
        '$timeout',
        '$animate',
        function($timeout, $animate) {
            return {
                restrict: 'A',
                scope: true,
                priority: 1000,
                link: function($scope, iElement, iAttrs) {
                    if (iAttrs.animateModelChange) {
                        $scope.$watch(iAttrs.animateModelChange, function(nv, ov) {
                            if (nv != ov) {
                                var className = "model-change";
                                $animate.addClass(iElement, className).then(function() {
                                    $timeout(function() {
                                        $animate.removeClass(iElement, className);
                                    });
                                });
                            }
                        });
                    }
                }
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').filter('secondsToTimeDisplay', [
        function() {
            return function(seconds) {
                if (seconds == undefined || seconds == '') {
                    seconds = 0;
                }
                return new Date(1970, 0, 1).setSeconds(seconds);
            };
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('AudioAccessController', [
        '$scope',
        '$timeout',
        function($scope, $timeout) {
            var _logger = window.logModule.getLogger('AudioAccessController');
            $scope.init = function() {}
            $scope.isMicOrCameraDefected = false;
            $scope.micCameraPermission = function(){
                _logger.info('init', 'asking for mic permissions from user');
                BackgndAPI.sendGAPageView({
                    pageLocation: '/extension/audio-access/',
                    page: '/extension/audio-access/',
                    title: 'HYFY : Extension Audio Permissions'
                });
                window.utilsModule.microphoneAndCameraAccessPermission(function(gotPermission) {
                    _logger.info('init', 'mic permissions user response: ' + (gotPermission ? 'accepted' : 'rejected'));

                    var mixPanelAction = window.constantsModule.MIXPANEL_EVENT_ACTION.MIC_PERMISSION_ALLOWED;
                    var gaAction = window.constantsModule.GA_EVENT_ACTION.ALLOWED;

                    if (!gotPermission) {
                      $timeout(function(){
                        $scope.isMicOrCameraDefected = true;
                      });
                        gaAction = window.constantsModule.GA_EVENT_ACTION.DENIED;
                        mixPanelAction = window.constantsModule.MIXPANEL_EVENT_ACTION.MIC_PERMISSION_DENIED;
                    }

                    BackgndAPI.sendGAEvent({
                        category: window.constantsModule.GA_EVENT_CATEGORY.MIC_PERMISSION,
                        label: window.constantsModule.GA_EVENT_LABEL.EXTENSION_POPUP,
                        action: gaAction,
                        sendUserId: true
                    });

                    BackgndAPI.sendMixPanelEvent({
                        event: mixPanelAction,
                        attributes: {
                            source: window.constantsModule.MIXPANEL_ATTRIBUTE_SOURCE.AUDIO_ACCESS
                        }
                    });
                });
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('AutomationStartRecordingController', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        'UserClientService',
        'PopupService',
        function($scope, $timeout, RecordingClientService, UserClientService, PopupService) {
            var _logger = window.logModule.getLogger('AutomationStartRecordingController');
            var _selectedEncoder = window.constantsModule.ENCODERS.MEDIA_RECORDER_VP9_1M;

            $scope.init = function () {

                _logger.info('init', 'entering');
                RecordingClientService.init();
                RecordingClientService.setRecordingEncoder(_selectedEncoder);

                UserClientService.onInit(function (userData) {

                    if ($scope.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_60_MIN)) {
                        RecordingClientService.setRecordingTime(window.constantsModule.VIDEO_RECORDING_DURATION.MIN_60);

                    } else if ($scope.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_30_MIN)) {
                        RecordingClientService.setRecordingTime(window.constantsModule.VIDEO_RECORDING_DURATION.MIN_30);
                    }

                });

                window.clientUtilsModule.getApplicableSettings(function (settings) {
                    $timeout(function () {
                        $scope.debugEnabled = settings[window.constantsModule.SETTINGS.DEBUG.key];
                    });
                });
            };

            $scope.isFeatureAllowed = function (featureId) {
                return UserClientService.isFeatureAllowed(featureId);
            };

            $scope.startTabRecording = function () {
                _logger.info('startTabRecording', 'entering');
                $scope.startRecording(window.constantsModule.RECORDING_TYPES.TAB);
            };

            $scope.startDesktopRecording = function () {
                _logger.info('startDesktopRecording', 'entering');
                $scope.startRecording(window.constantsModule.RECORDING_TYPES.DESKTOP);
            };

            $scope.startRecording = function(recType) {

                RecordingClientService.startRecording({
                    recordingStartSource: window.constantsModule.RECORDING_START_SOURCE.AUTOMATION,
                    recordingType: recType,
                    recordingTime: RecordingClientService.getRecordingTime(),
                    recordTabAudio: RecordingClientService.getTabAudioValue(),
                    recordAudio: false,
                    recordingAudioDevice: undefined,
                    recordFacecam: false,
                    recordingFacecamDevice: undefined,
                    encoder: RecordingClientService.getRecordingEncoder().id,
                    uploadToLibrary: true
                });
            };

        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('AutomationStopRecordingController', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        function($scope, $timeout, RecordingClientService) {
            var _logger = window.logModule.getLogger('AutomationStopRecordingController');

            $scope.getCurrentRecording = RecordingClientService.getCurrentRecording;

            $scope.init = function() {
                _logger.info("init", "entering");
                RecordingClientService.init();
            };

            $scope.stopRecording = function() {
                _logger.info("stopRecording", "entering");
                RecordingClientService.stopRecording();
            };
        }
    ]);
})();

'use strict';
angular.module('hyfyext').controller('CollapsibleController', [
    '$scope',
    '$element',
    function($scope, $element) {
        $scope.element = $element;
        $scope.autoCollapse = true;
        $scope.state = {
            active : false
        };

        $scope.initCollapsible = function(activeByDefault, autoCollapse) {
            if (!activeByDefault) {
                activeByDefault = false;
            }

            if (autoCollapse != null && autoCollapse != undefined) {
                console.debug("init collapsed");
                $scope.autoCollapse = autoCollapse;
            }

            $scope.state.active = activeByDefault;
            if ($scope.autoCollapse) {
                console.debug("executing auto collapse");
                $('body').click(function(e) {
                    if ($scope.isExpanded()) {
                        var target = $(e.target);
                        if (target.get(0) !== $($element).get(0) && $($element).find(target).length == 0) {
                            $scope.collapse();
                            $scope.$apply();
                        }
                    }
                });
            }
        };

        $scope.getElementTop = function() {
            return $($scope.element).offset().top;
        };

        $scope.getElementLeft = function() {
            return $($scope.element).offset().left;
        };

        $scope.getElementRight = function() {
            return $(window).width() - ($($scope.element).offset().left + $($scope.element).outerWidth());
        };

        $scope.toggle = function() {
            console.debug("toggled");
            if ($scope.isExpanded()) {
                $scope.collapse();
            } else {
                $scope.expand();
            }
        };

        $scope.collapse = function() {
            $scope.state.active = false;
        };

        $scope.expand = function() {
            $scope.state.active = true;
        };

        $scope.isCollapsed = function() {
            return !$scope.state.active;
        };

        $scope.isExpanded = function() {
            return $scope.state.active;
        };
    }
]);

(function() {
    'use strict';

    angular.module('hyfyext').controller('JiraAddonRecordingControlsV2Controller', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        'PopupService',
        'UserClientService',
        function($scope, $timeout, RecordingClientService, PopupService, UserClientService) {
            var _logger = window.logModule.getLogger('JiraAddonRecordingControlsV2Controller');

            $scope.initialized = false;
            $scope.currentRecording = RecordingClientService.getCurrentRecording();

            $scope.currentRecordingType = window.constantsModule.RECORDING_TYPES.DESKTOP;
            $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION_DEFAULT;
            $scope.selectedEncoder = window.constantsModule.ENCODERS.MEDIA_RECORDER_VP9_1M;

            $scope.init = function() {
                _logger.debug('init', 'entered');
                RecordingClientService.init(function() {
                    UserClientService.onInit(function(userData) {
                        $scope.initialized = true;

                        if (UserClientService.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_60_MIN)) {
                            $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION.MIN_60;
                        } else if (UserClientService.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_30_MIN)) {
                            $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION.MIN_30;
                        }

                        if (UserClientService.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_QUALITY_5MBPS)) {
                            $scope.selectedEncoder = window.constantsModule.ENCODERS.MEDIA_RECORDER_VP9_5M;
                        }
                    });
                });
            }

            $scope.isInitialized = function() {
                return $scope.initialized;
            }

            $scope.getRemainingTime = function() {
                return $scope.currentRecording.remainingTime;
            }

            $scope.isRecordingInProgress = function() {
                return RecordingClientService.isRecordingInProgress();
            }

            $scope.shouldShowCountdown = function() {
                if ($scope.initialized) {
                    return RecordingClientService.isRecordingCountdownInProgress();
                }
                return false;
            }

            $scope.shouldShowStopControl = function() {
                if ($scope.initialized) {
                    return !RecordingClientService.isRecordingCountdownInProgress();
                }
                return false;
            }

            $scope.isJiraAddOnRecording = function() {
                return $scope.currentRecording && $scope.currentRecording.recordingStartSource == window.constantsModule.RECORDING_START_SOURCE.JIRA_ADDON;
            }

            $scope.getCountdownTimer = function() {
                return $scope.currentRecording.countdownTime;
            }

            $scope.stopRecording = function() {
                RecordingClientService.stopRecording();
            }

            $scope.startRecording = function() {

                PopupService.initDataAndStartRecording(window.constantsModule.RECORDING_START_SOURCE.JIRA_ADDON, function(){
                     _logger.info('startRecording', 'recording started');
                });

//                RecordingClientService.startRecording({
//                    recordingStartSource: window.constantsModule.RECORDING_START_SOURCE.JIRA_ADDON,
//                    recordingType: $scope.currentRecordingType,
//                    recordingTime: $scope.currentRecordingTime,
//                    recordAudio: true,
//                    encoder: $scope.selectedEncoder.id,
//                    uploadToLibrary: true
//                }, function(started) {
//                    _logger.info('startRecording', 'recording started');
//                });
            }

            $scope.discardRecording = function() {
                RecordingClientService.discardRecording();
            }

            $scope.getRemainingTimeDisplay = function() {
                var remainingTime = $scope.getRemainingTime();
                var displayValue = '';
                if (remainingTime != null && remainingTime != undefined) {
                    var minutes = Math.floor(remainingTime / 60);
                    var seconds = remainingTime % 60;
                    displayValue = minutes + ':';
                    if (seconds < 10) {
                        displayValue += '0';
                    }
                    displayValue += seconds;
                }
                return displayValue;
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('JiraAddonRecordingControlsController', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        'PopupService',
        'UserClientService',
        function($scope, $timeout, RecordingClientService, PopupService, UserClientService) {
            var _logger = window.logModule.getLogger('JiraAddonRecordingControlsController');

            $scope.initialized = false;
            $scope.currentRecording = RecordingClientService.getCurrentRecording();

            $scope.currentRecordingType = window.constantsModule.RECORDING_TYPES.DESKTOP;
            $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION_DEFAULT;
            $scope.selectedEncoder = window.constantsModule.ENCODERS.MEDIA_RECORDER_VP9_1M;

            $scope.init = function() {
                _logger.debug('init', 'entered');
                RecordingClientService.init(function() {
                    UserClientService.onInit(function(userData) {
                        $scope.initialized = true;

                        if (UserClientService.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_60_MIN)) {
                            $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION.MIN_60;
                        } else if (UserClientService.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_30_MIN)) {
                            $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION.MIN_30;
                        }

                        if (UserClientService.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_QUALITY_5MBPS)) {
                            $scope.selectedEncoder = window.constantsModule.ENCODERS.MEDIA_RECORDER_VP9_5M;
                        }
                    });
                });
            }

            $scope.isInitialized = function() {
                return $scope.initialized;
            }

            $scope.getRemainingTime = function() {
                return $scope.currentRecording.remainingTime;
            }

            $scope.isRecordingInProgress = function() {
                return RecordingClientService.isRecordingInProgress();
            }

            $scope.shouldShowCountdown = function() {
                if ($scope.initialized) {
                    return RecordingClientService.isRecordingCountdownInProgress();
                }
                return false;
            }

            $scope.shouldShowStopControl = function() {
                if ($scope.initialized) {
                    return !RecordingClientService.isRecordingCountdownInProgress();
                }
                return false;
            }

            $scope.isJiraAddOnRecording = function() {
                return $scope.currentRecording && $scope.currentRecording.recordingStartSource == window.constantsModule.RECORDING_START_SOURCE.JIRA_ADDON;
            }

            $scope.getCountdownTimer = function() {
                return $scope.currentRecording.countdownTime;
            }

            $scope.stopRecording = function() {
                RecordingClientService.stopRecording();
            }

            $scope.startRecording = function() {

                PopupService.initDataAndStartRecording(window.constantsModule.RECORDING_START_SOURCE.JIRA_ADDON, function(){
                     _logger.info('startRecording', 'recording started');
                });

                //commenting code for future(when prefereces will be moved to background) reference
//                RecordingClientService.startRecording({
//                    recordingStartSource: window.constantsModule.RECORDING_START_SOURCE.JIRA_ADDON,
//                    recordingType: $scope.currentRecordingType,
//                    recordingTime: $scope.currentRecordingTime,
//                    recordAudio: true,
//                    encoder: $scope.selectedEncoder.id,
//                    uploadToLibrary: true
//                }, function(started) {
//                    _logger.info('startRecording', 'recording started');
//                });
            }

            $scope.discardRecording = function() {
                RecordingClientService.discardRecording();
            }

            $scope.getRemainingTimeDisplay = function() {
                var remainingTime = $scope.getRemainingTime();
                var displayValue = '';
                if (remainingTime != null && remainingTime != undefined) {
                    var minutes = Math.floor(remainingTime / 60);
                    var seconds = remainingTime % 60;
                    displayValue = minutes + ':';
                    if (seconds < 10) {
                        displayValue += '0';
                    }
                    displayValue += seconds;
                }
                return displayValue;
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('NotificationsController', [
        '$scope',
        '$timeout',
        'NotificationClientService',
        function($scope, $timeout, NotificationClientService) {
            var _logger = window.logModule.getLogger('NotificationsController');
            $scope.currentNotifications = NotificationClientService.getCurrentNotifications();

            $scope.init = function() {
                _logger.info('init', 'entered');
                NotificationClientService.init();
                NotificationClientService.fetchTabNotifications();
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('ToastNotificationController', [
        '$scope',
        '$timeout',
        'NotificationClientService',
        function($scope, $timeout, NotificationClientService) {
            var _logger;
            $scope.notification = null;
            $scope.notificationData = null;

            $scope.init = function() {
                $scope.notification = $scope.inputData.notification;
                $scope.notificationData = $scope.notification.notificationData;
                _logger = window.logModule.getLogger('ToastNotificationController-' + $scope.notification.notificationId);
                _logger.info('init', 'entered');
            }

            $scope.cancel = function() {
                _logger.info('cancel', 'user cancelled');
                NotificationClientService.removeNotification($scope.notification);
            }

            $scope.triggerAction = function() {
                _logger.info('triggerAction', 'user clicked on action');
                NotificationClientService.triggerNotificationAction($scope.notification);
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('FacecamMicErrorController', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        'UtilityClientService',
        'PopupService',
        function($scope, $timeout, RecordingClientService, UtilityClientService, PopupService) {
            var _logger = window.logModule.getLogger('RecordingSettingController');
            $scope.hasAudioPermission = true;
            $scope.hasFacecamPermission = true;


            $scope.$watch(function () {
                return RecordingClientService.getHasAudioPermission();
            }, function (newVal, oldVal) {
                $timeout(function(){
                    if(newVal == null){
                        return;
                    }
                    $scope.hasAudioPermission = newVal;
                });
            });

            $scope.$watch(function () {
                return RecordingClientService.getHasFacecamPermission();
            }, function (newVal, oldVal) {
                $timeout(function(){
                    if(newVal == null){
                        return;
                    }
                    $scope.hasFacecamPermission = newVal;
                });
            });

        }
    ]);
})();

(function() {

    angular.module('hyfyext').directive('facecamMicError', [
        function() {
            return {
                scope: {
                    hasAudioPermission: '@',
                    hasFacecamPermission: '@'
                },
                templateUrl: 'components/popup/facecam-mic-error/facecam-mic-error.html'
            };
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('NaclPluginDisabledController', [
        '$scope',
        'UtilityClientService',
        function($scope, UtilityClientService) {
            var _logger = window.logModule.getLogger('NaclDisabledController');

            $scope.openChromePluginsUrl = function() {
                _logger.debug('openChromePlugins', 'entering');

                UtilityClientService.openUrl('chrome://plugins');
            }

            $scope.openShowcaseUrl = function() {
                UtilityClientService.openUrl(window.EXTENSION_SETTINGS.naclEnableShowcaseUrl);
            }
        }
    ]);
})();

(function() {

    angular.module('hyfyext').directive('hyfyextNaclPluginDisabled', [
        function() {
            return {
                templateUrl: 'components/popup/nacl-plugin-disabled/nacl-plugin-disabled.html'
            };
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('PopupController', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        'UserClientService',
        'UtilityClientService',
        function($scope, $timeout, RecordingClientService, UserClientService, UtilityClientService) {
            var _logger = window.logModule.getLogger('PopupController');
            var initialized = false;
            $scope.popupContentContainer = true;
            $scope.audioFacecamOptions = true;
            $scope.backToMenuWrapper = true;
            $scope.settingIcon = true;
            $scope.userTipsContainer = true;
            $scope.hideBodyTips = true;
            $scope.userSubscriptionData;
            $scope.userBestSubscription;

            $scope.init = function() {
                _logger.info('init', 'entering');
                BackgndAPI.sendGAPageView({
                    pageLocation: '/extension/popup/',
                    page: '/extension/popup/',
                    title: 'HYFY : Extension'
                });

                BackgndAPI.sendMixPanelEvent({
                    event: window.constantsModule.MIXPANEL_EVENT_ACTION.EXTENSION_POPUP_OPENED
                });

                UserClientService.onInit(function(currentUser) {
                    initialized = true;
                    $scope.userSubscriptionData = currentUser.subscriptions;
                    $scope.userSubscription = UserClientService.getUserBestSubscription();
                });


                //Setting status of user tips
                chrome.storage.local.get([
                    window.constantsModule.STORAGE_KEYS.USER_TIPS_SHOWN
                ], function(items) {
                    if (!items[window.constantsModule.STORAGE_KEYS.USER_TIPS_SHOWN]) {

                        $scope.userTipsContainer  = false;
                         var data = {};
                         data[window.constantsModule.STORAGE_KEYS.USER_TIPS_SHOWN] = "hasShown";
                         chrome.storage.local.set(data);

                    } else {
                        $scope.userTipsContainer  = true;
                    }
                });
            }

            $scope.isInitialized = function() {
                return initialized;
            }
            $scope.showSettingPopup = function() {
                $scope.popupContentContainer = false;
                $scope.audioFacecamOptions = false;
                $scope.settingIcon = false;
                $scope.backToMenuWrapper = false;
                $scope.hideBodyTips = false;
            }

            $scope.showMainMenu = function() {
              $scope.audioFacecamOptions = true;
              $scope.popupContentContainer = true;
              $scope.backToMenuWrapper = true;
              $scope.settingIcon = true;
              $scope.hideBodyTips = true;
            }

            $scope.showuserTipsContainer = function(){
              $scope.userTipsContainer = false;
            }

            $scope.openLibrary = function() {
                _logger.info('openLibrary', 'entering');

                UtilityClientService.openAppUrl(window.urlsModule.SITE_URLS.videos.video_library, true);
            }

            $scope.openUpgradeUrl = function() {
                _logger.info('openUpgradeUrl', 'entering');

                UtilityClientService.openAppUrl(window.urlsModule.SITE_URLS.accounts.upgrade, true);
            }

            $scope.isFeatureAllowed = function(featureId) {
                return UserClientService.isFeatureAllowed(featureId);
            }

            $scope.getUserSubscriptionName = function() {
                if ($scope.userSubscription) {
                    return $scope.userSubscription.name;
                }
                return 'FREE';
            }
            $scope.isFreeSubscription = function() {
                return $scope.userSubscription &&
                    $scope.userSubscription.planId == window.constantsModule.USER_SUBSCRIPTIONS.FREE;
            }

            $scope.isTrialSubscription = function() {
                return $scope.userSubscription &&
                    $scope.userSubscription.planId == window.constantsModule.USER_SUBSCRIPTIONS.FREE_TRIAL;
            }

            $scope.isTrialSubscriptionActive = function() {
                return $scope.isTrialSubscription();
            }

            $scope.getTrialSubscriptionExpiresInDays = function() {
                return $scope.userSubscription.expiresInDays > 0 ? $scope.userSubscription.expiresInDays : 1;
            }

            $scope.isTrialSubscriptionExpiring = function() {
                return $scope.isTrialSubscription() && $scope.userSubscription.expiresInDays <= 10;
            }

            $scope.isTrialSubscriptionExpired = function() {
                if ($scope.userSubscriptionData && $scope.userSubscriptionData.expiredSubscriptions &&
                    $scope.userSubscriptionData.expiredSubscriptions[window.constantsModule.USER_SUBSCRIPTIONS.FREE_TRIAL]) {
                    return true;
                }
                return false;
            }

            $scope.closePopup = function() {
                window.close();
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('PromotionsController', [
        '$scope',
        'UserClientService',
        function($scope, UserClientService) {
            var logger = window.logModule.getLogger('PromotionsController');

            var ALL_PROMOTION_MESSAGES = [{
                    id: 'PROMO_UPGRADE_30_MIN',
                    text: 'Get 30 minutes recording time with HYFY PRO',
                    url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.accounts.upgrade),
                    associatedFeatures: [
                        window.constantsModule.FEATURES.RECORDING_30_MIN,
                        window.constantsModule.FEATURES.RECORDING_60_MIN
                    ],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_UPGRADE_60_MIN',
                    text: 'Get 2x recording time (60 min) with HYFY BUSINESS',
                    url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.accounts.upgrade),
                    associatedFeatures: [
                        window.constantsModule.FEATURES.RECORDING_60_MIN
                    ],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_UPGRADE_DESKTOP_RECORDING',
                    text: 'Record full screen with HYFY PRO',
                    url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.accounts.upgrade),
                    associatedFeatures: [
                        window.constantsModule.FEATURES.RECORDING_DESKTOP
                    ],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_UPGRADE_VIDEO_NEVER_EXPIRES',
                    text: 'Videos never expire with HYFY PRO',
                    url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.accounts.upgrade),
                    associatedFeatures: [
                        window.constantsModule.FEATURES.VIDEO_NEVER_EXPIRES
                    ],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_UPGRADE_VIDEOS_LIMIT_ACCESS',
                    text: 'Limit video access with HYFY BUSINESS',
                    url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.accounts.upgrade),
                    associatedFeatures: [
                        window.constantsModule.FEATURES.VIDEO_PRIVACY
                    ],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_UPGRADE_VIDEOS_SECURE',
                    text: 'Secure your videos with HYFY BUSINESS',
                    url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.accounts.upgrade),
                    associatedFeatures: [
                        window.constantsModule.FEATURES.VIDEO_PRIVACY
                    ],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_UPGRADE_VIDEOS_KEEP_PRIVATE',
                    text: 'Keep videos private with HYFY BUSINESS',
                    url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.accounts.upgrade),
                    associatedFeatures: [
                        window.constantsModule.FEATURES.VIDEO_PRIVACY
                    ],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_TOUR_PRO_FEATURES',
                    text: 'Take a tour of the new features in HYFY PRO',
                    url: 'http://www.hyfy.io/getting-started',
                    associatedFeatures: [],
                    associatedPlans: [
                        window.constantsModule.USER_SUBSCRIPTIONS.PRO
                    ]
                },
                {
                    id: 'PROMO_TOUR_BUSINESS_FEATURES',
                    text: 'Take a tour of the new features in HYFY BUSINESS',
                    url: 'http://www.hyfy.io/getting-started',
                    associatedFeatures: [],
                    associatedPlans: [
                        window.constantsModule.USER_SUBSCRIPTIONS.BUSINESS,
                        window.constantsModule.USER_SUBSCRIPTIONS.FREE_TRIAL
                    ]
                },
                {
                    id: 'PROMO_LEARN_HIPCHAT',
                    text: 'Learn to share with your HipChat group',
                    url: 'http://www.hyfy.io/hipchat',
                    associatedFeatures: [],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_LEARN_JIRA',
                    text: 'Learn to share in JIRA',
                    url: 'http://www.hyfy.io/jira',
                    associatedFeatures: [],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_LEARN_SLACK',
                    text: 'Learn to share with your Slack team',
                    url: 'http://www.hyfy.io/slack',
                    associatedFeatures: [],
                    associatedPlans: []
                },
                {
                    id: 'PROMO_FEATURE_IDEAS',
                    text: 'Got feature ideas? Share them with us!',
                    url: 'https://app.hyfy.io/v/abgg0CrHl7/',
                    associatedFeatures: [],
                    associatedPlans: []
                }
            ]

            var _getRandomPromotion = function(promotionList) {
                var randomNumber = Math.floor(Math.random() * (promotionList.length));
                logger.debug('_getRandomPromotion', 'data', {
                    length: promotionList.length,
                    randomNumber: randomNumber
                });
                return promotionList[randomNumber];
            }

            $scope.promotion = null;

            $scope.init = function() {
                UserClientService.onInit(function(userData) {
                    var subscriptionData = userData.subscriptions;
                    var userPromotions = ALL_PROMOTION_MESSAGES.filter(function(promo) {
                        if (promo.associatedPlans && promo.associatedPlans.length > 0) {
                            for (var i = 0; i < promo.associatedPlans.length; i++) {
                                var plan = promo.associatedPlans[i];
                                if (subscriptionData.userSubscriptions && subscriptionData.userSubscriptions[plan]) {
                                    return true;
                                }
                            }
                            return false;
                        }

                        if (promo.associatedFeatures && promo.associatedFeatures.length > 0) {
                            for (var i = 0; i < promo.associatedFeatures.length; i++) {
                                var featureId = promo.associatedFeatures[i];
                                if (subscriptionData.userFeatures && subscriptionData.userFeatures.indexOf(featureId) != -1) {
                                    return false;
                                }
                            }
                        }

                        return true;
                    });

                    $scope.promotion = _getRandomPromotion(userPromotions);
                });
            }

            $scope.openUrl = function(url) {
                if (url) {
                    BackgndAPI.sendGAEvent({
                        category: window.constantsModule.GA_EVENT_CATEGORY.USER_INTERACTION,
                        action: window.constantsModule.GA_EVENT_ACTION.LINK_CLICKED,
                        label: window.constantsModule.GA_EVENT_LABEL.EXTENSION + ' - ' + $scope.promotion.id,
                        sendUserId: true
                    });

                    BackgndAPI.openUrl({
                        url: url
                    });
                }
            }
        }
    ]);
})();

(function() {

    angular.module('hyfyext').directive('hyfyextPromotions', [
        function() {
            return {
                templateUrl: 'components/popup/promotions/promotions.html'
            };
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('RecordingSettingController', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        'UtilityClientService',
        'PopupService',
        function($scope, $timeout, RecordingClientService, UtilityClientService, PopupService) {
            var _logger = window.logModule.getLogger('RecordingSettingController');

            $scope.audioSources = [];
            $scope.facecamSources = [];
            $scope.recordAudio = RecordingClientService.getRecordAudio();
            $scope.recordFacecam = RecordingClientService.getRecordFacecam();
            $scope.selectedAudioDevice;
            $scope.selectedFacecamDevice;

            $scope.init = function() {
                _logger.info('init', 'entering');
                // RecordingClientService.init();
                if (chromeUtilsModule.isFeatureAvailable(chromeUtilsModule.FEATURES.CHOOSE_AUDIO_DEVICE)) {
                    RecordingClientService.collectMediaSources();
                }
            }

            $scope.$watch(function () {
                return RecordingClientService.getRecordingAudioDevice();
            }, function (newVal, oldVal) {
                $timeout(function(){
                    $scope.selectedAudioDevice = RecordingClientService.getRecordingAudioDevice();
                });
            });

            $scope.$watch(function () {
                return RecordingClientService.getRecordingFacecamDevice();
            }, function (newVal, oldVal) {
                $timeout(function(){
                    $scope.selectedFacecamDevice = RecordingClientService.getRecordingFacecamDevice();
                })
            });

            $scope.$watch(function () {
                return RecordingClientService.getRecordFacecam();
            }, function (newVal, oldVal) {
                $timeout(function() {
                    $scope.recordFacecam = RecordingClientService.getRecordFacecam();
                });
            });

            $scope.$watch(function () {
                return RecordingClientService.getRecordAudio();
            }, function (newVal, oldVal) {
                $timeout(function() {
                    $scope.recordAudio = RecordingClientService.getRecordAudio();
                });
            });

            $scope.toggleAudio = function(){
              $scope.recordAudio = !$scope.recordAudio;
              RecordingClientService.setRecordAudio($scope.recordAudio);
              PopupService.updateFromRecordingService();
            }

            $scope.toggleFacecam = function(){
              $scope.recordFacecam = !$scope.recordFacecam;
              RecordingClientService.setRecordFacecam($scope.recordFacecam);
              PopupService.updateFromRecordingService();
            }
        
            $scope.isAudioDeviceChoiceAvailable = function() {
                $scope.audioSources = RecordingClientService.getAudioSources();
                if ($scope.audioSources.length > 1) {
                    return true;
                } else {
                    return false;
                }
            }

            $scope.isFacecamDeviceChoiceAvailable = function() {
                $scope.facecamSources = RecordingClientService.getFacecamSources();
                if ($scope.facecamSources.length > 1) {
                    return true;
                } else {
                    return false;
                }
            }

            $scope.$watch(function () {
               return RecordingClientService.getHasAudioPermission();
            }, function (newVal, oldVal) {
                $timeout(function(){
                    if(newVal == null){
                        return;
                    }
                    $scope.hasAudioPermission = RecordingClientService.getHasAudioPermission();
                    var prevAudioPermissionValue = RecordingClientService.getPrevAudioPermision();
                    if(!prevAudioPermissionValue && newVal) {
                        //This is the case when user is giving permission first time.
                        $scope.recordAudio = $scope.hasAudioPermission;
                    }
                    else if (!newVal){
                        $scope.recordAudio = $scope.hasAudioPermission;
                    }
                });
            });

            $scope.$watch(function () {
                return RecordingClientService.getHasFacecamPermission();
            }, function (newVal, oldVal) {
                $timeout(function(){
                    if(newVal == null){
                        return;
                    }
                    $scope.hasFacecamPermission = RecordingClientService.getHasFacecamPermission();
                    var prevFacecamPermissionValue = RecordingClientService.getPrevFacecamPermision();
                    if(!prevFacecamPermissionValue && newVal) {
                        //This is the case when user is giving permission first time.
                        $scope.recordFacecam = $scope.hasFacecamPermission;
                    }
                    else if (!newVal){
                        $scope.recordFacecam = $scope.hasFacecamPermission;
                        
                    }
                });    
            });

            $scope.changeAudioDevice = function(deviceInfo) {
                $scope.selectedAudioDevice = deviceInfo;
                RecordingClientService.setRecordingAudioDevice($scope.selectedAudioDevice);
                PopupService.updateFromRecordingService();
            }

            $scope.changeFacecamDevice = function(deviceInfo) {
                $scope.selectedFacecamDevice = deviceInfo;
                RecordingClientService.setRecordingFacecamDevice($scope.selectedFacecamDevice);
                PopupService.updateFromRecordingService();
            }

            $scope.initSoundCheck = function() {
                if ($scope.checkAudioError && !$scope.audioErrorCheckTimer) {
                    $scope.audioErrorCheckTimer = $timeout(function() {
                        $scope.audioErrorFound = true;
                    }, window.constantsModule.TIMER.NO_AUDIO_TIMEOUT);
                }
            }
            $scope.resetSoundCheck = function() {
                if ($scope.audioErrorCheckTimer) {
                    $timeout.cancel($scope.audioErrorCheckTimer);
                    $scope.audioErrorCheckTimer = null;
                }

                $scope.audioErrorFound = false;
            }

            $scope.isSelectedAudioDevice = function(device) {
                return $scope.selectedAudioDevice && $scope.selectedAudioDevice.deviceId == device.deviceId;
            }

            $scope.isSelectedFacecamDevice = function(device) {
                return $scope.selectedFacecamDevice && $scope.selectedFacecamDevice.deviceId == device.deviceId;
            }
        }
    ]);
})();

(function() {

    angular.module('hyfyext').directive('hyfyextRecordingSetting', [
        function() {
            return {
                  templateUrl: 'components/popup/recording-setting/recording-setting.html'
            };
        }
    ]);
})();

(function () {
    'use strict';

    angular.module('hyfyext').controller('RecordingStarterController', [
        '$scope',
        '$timeout',
        '$q',
        'RecordingClientService',
        'UserClientService',
        'UtilityClientService',
        'PopupService',
        function ($scope, $timeout, $q, RecordingClientService, UserClientService, UtilityClientService, PopupService) {
            var _logger = window.logModule.getLogger('RecordingStarterController');
            $scope.currentRecordingType = window.constantsModule.RECORDING_TYPES_DEFAULT;
            $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION_DEFAULT;
            $scope.selectedEncoder = window.constantsModule.ENCODERS.MEDIA_RECORDER_VP9_1M;
            $scope.hasAudioPermission = RecordingClientService.getHasAudioPermission();
            $scope.hasFacecamPermission = RecordingClientService.getHasFacecamPermission();
            $scope.recordAudio =  RecordingClientService.getRecordAudio();
            $scope.recordFacecam = RecordingClientService.getRecordFacecam();
            $scope.viewersWantToSeeYourFaceMessageShown  = true;

            $scope.audioStream = null;
            $scope.audioContext = null;
            $scope.soundLevel = 0;
            $scope.checkAudioError = true;
            $scope.audioErrorFound = false;
            $scope.audioErrorCheckTimer = null;
            $scope.inputDisabled = false;
            $scope.debugEnabled = false;

            $scope.uploadToLibrary = true;

            $scope.isFacecamHidden = function () {
                return true;
            }

            $scope.init = function () {
                _logger.info('init', 'entering');
                RecordingClientService.init();

                if ($scope.recordFacecam) {
                  var userTipShown = false;
                  chrome.storage.local.get([
                      window.constantsModule.STORAGE_KEYS.USER_TIPS_SHOWN
                  ], function(items) {
                      if (items[window.constantsModule.STORAGE_KEYS.USER_TIPS_SHOWN]) {
                          userTipShown = true;
                      }

                      $scope.initWebcamDevice().then(function() {
                          if ($scope.hasFacecamPermission) {
                              chrome.storage.local.get([
                                  window.constantsModule.STORAGE_KEYS.VIEWERS_WANT_TO_SEE_YOUR_FACE_SHOWN
                              ], function(items) {
                                  if (!items[window.constantsModule.STORAGE_KEYS.VIEWERS_WANT_TO_SEE_YOUR_FACE_SHOWN] && userTipShown) {
                                       $scope.viewersWantToSeeYourFaceMessageShown = false;
                                       $scope.setViewersMessageShownInLocalData();
                                  } else {
                                        $scope.viewersWantToSeeYourFaceMessageShown  = true;
                                  }
                              });
                          }
                      });
                  });
                }
                if ($scope.recordAudio) {
                    $scope.initAudioMeter();
                }

                UserClientService.onInit(function (userData) {
                    if (userData.preferences && userData.preferences[window.constantsModule.USER_PREFERENCES.RECORDING_TYPE]) {
                        $scope.currentRecordingType = userData.preferences[window.constantsModule.USER_PREFERENCES.RECORDING_TYPE];
                    }

                    if (!$scope.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_DESKTOP)) {
                        $scope.currentRecordingType = window.constantsModule.RECORDING_TYPES.TAB;
                    }

                    if ($scope.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_60_MIN)) {
                        $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION.MIN_60;

                    } else if ($scope.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_30_MIN)) {
                        $scope.currentRecordingTime = window.constantsModule.VIDEO_RECORDING_DURATION.MIN_30;
                    }

                    if ($scope.isFeatureAllowed(window.constantsModule.FEATURES.RECORDING_QUALITY_5MBPS)) {
                        $scope.selectedEncoder = window.constantsModule.ENCODERS.MEDIA_RECORDER_VP9_5M;
                    }
                    RecordingClientService.setRecordingTime($scope.currentRecordingTime);
                    RecordingClientService.setRecordingEncoder($scope.selectedEncoder);

                });

                window.clientUtilsModule.getApplicableSettings(function (settings) {
                    $timeout(function () {
                        $scope.debugEnabled = settings[window.constantsModule.SETTINGS.DEBUG.key];
                    });
                });
            }

            $scope.setViewersMessageShownInLocalData = function() {
                var data = {};
                data[window.constantsModule.STORAGE_KEYS.VIEWERS_WANT_TO_SEE_YOUR_FACE_SHOWN] = "hasShown";
                chrome.storage.local.set(data);
            };

            $scope.openUpgradeUrl = function () {
                UtilityClientService.openAppUrl(window.urlsModule.SITE_URLS.accounts.upgrade, true);
            }

            $scope.isFeatureAllowed = function (featureId) {
                return UserClientService.isFeatureAllowed(featureId);
            }

            $scope.getRecordingTimeInMinutes = function () {
                return $scope.currentRecordingTime / 60;
            }

            $scope.isCurrentRecordingType = function (recordingType) {
                return $scope.currentRecordingType === recordingType;
            }

            $scope.isCurrentRecordingTypeTab = function () {
                return $scope.isCurrentRecordingType(window.constantsModule.RECORDING_TYPES.TAB);
            }

            $scope.isCurrentRecordingTypeDesktop = function () {
                return $scope.isCurrentRecordingType(window.constantsModule.RECORDING_TYPES.DESKTOP);
            }

            $scope.isCurrentRecordingTypeFacecam = function () {
                return $scope.isCurrentRecordingType(window.constantsModule.RECORDING_TYPES.FACECAM);
            }

            $scope.setCurrentRecordingType = function (recordingType) {
                $scope.currentRecordingType = recordingType;
            }

            $scope.setCurrentRecordingTypeTab = function () {
                $scope.setCurrentRecordingType(window.constantsModule.RECORDING_TYPES.TAB);
            }

            $scope.setCurrentRecordingTypeDesktop = function () {
                $scope.setCurrentRecordingType(window.constantsModule.RECORDING_TYPES.DESKTOP);
            }

            $scope.setCurrentRecordingTypeFacecam = function () {
                $scope.setCurrentRecordingType(window.constantsModule.RECORDING_TYPES.FACECAM);
            }

            $scope.isAudioDeviceChoiceAvailable = function () {
                if ($scope.audioSources.length > 1) {
                    return true;
                } else {
                    return false;
                }
            }

            $scope.startRecording = function () {
                _logger.info('startRecording', 'entering');
                if ($scope.inputDisabled) {
                    _logger.info('startRecording', 'ignoring, inputs are disabled');
                    return;
                }

                $scope.inputDisabled = true;
                PopupService.initDataAndStartRecording(window.constantsModule.RECORDING_START_SOURCE.POPUP, function(){
                    self.close();
                });

            }

            $scope.isSelectedAudioDevice = function (device) {
                return $scope.selectedAudioDevice && $scope.selectedAudioDevice.deviceId == device.deviceId;
            }

            $scope.barsCount = function (n) {
                return new Array(n);
            };

            $scope.initWebcamDevice = function (deviceId) {
                var deferred = $q.defer();
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                if (navigator.getUserMedia) {
                    navigator.getUserMedia({
                        video: deviceId ? {
                            deviceId: {
                                exact: deviceId
                            }
                        } : true,
                        audio: false
                    }, function (stream) {
                        if (stream != null) {
                            $scope.hasFacecamPermission = true;
                            RecordingClientService.setHasFacecamPermission($scope.hasFacecamPermission);
                            stream.getVideoTracks()[0].stop();
                        }
                        deferred.resolve();
                    }, function (err) {
                        // we may not have permission, show the appropriate message
                        $timeout(function () {
                            $scope.hasFacecamPermission = false;
                            RecordingClientService.setHasFacecamPermission($scope.hasFacecamPermission);
                            deferred.resolve();
                        });
                    });
                } else {
                    deferred.resolve();
                }
                return deferred.promise;
            }

            $scope.initAudioMeter = function (deviceId) {
                navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;
                if (navigator.getUserMedia) {
                    navigator.getUserMedia({
                        audio: deviceId ? {
                            deviceId: {
                                exact: deviceId
                            }
                        } : true,
                        video: false
                    }, function (stream) {

                        if (stream != null) {
                            $scope.hasAudioPermission = true;
                            RecordingClientService.setHasAudioPermission($scope.hasAudioPermission);
                            $scope.audioStream = stream;
                            $scope.audioContext = new AudioContext();
                            var analyser = $scope.audioContext.createAnalyser();
                            var microphone = $scope.audioContext.createMediaStreamSource(stream);
                            var javascriptNode = $scope.audioContext.createScriptProcessor(2048, 1, 1);

                            analyser.smoothingTimeConstant = 0.3;
                            analyser.fftSize = 1024;

                            microphone.connect(analyser);
                            analyser.connect(javascriptNode);
                            javascriptNode.connect($scope.audioContext.destination);

                            $scope.initSoundCheck();

                            javascriptNode.onaudioprocess = function () {
                                var array = new Uint8Array(analyser.frequencyBinCount);
                                analyser.getByteFrequencyData(array);

                                var value = 0;
                                for (var i = 0; i < array.length; i++) {
                                    value += array[i];
                                }

                                $scope.soundLevel = (value / array.length);
                                if ($scope.hasAudioPermission && $scope.recordAudio && $scope.soundLevel == 0) {
                                    $scope.initSoundCheck();
                                } else {
                                    $scope.checkAudioError = false;
                                    $scope.resetSoundCheck();
                                }

                                $scope.$digest();
                            }
                        } else {
                            $scope.audioErrorFound = true;
                        }
                    }, function (err) {
                        // we may not have permission, show the appropriate message
                        $timeout(function () {
                            $scope.hasAudioPermission = false;
                            RecordingClientService.setHasAudioPermission($scope.hasAudioPermission);
                        });

                    });
                } else {
                    _logger.info("initAudioMeter", "getUserMedia not supported");
                }
            };

            $scope.initSoundCheck = function () {
                if ($scope.checkAudioError && !$scope.audioErrorCheckTimer) {
                    $scope.audioErrorCheckTimer = $timeout(function () {
                        $scope.audioErrorFound = true;
                    }, window.constantsModule.TIMER.NO_AUDIO_TIMEOUT);
                }
            }

            $scope.resetSoundCheck = function () {
                if ($scope.audioErrorCheckTimer) {
                    $timeout.cancel($scope.audioErrorCheckTimer);
                    $scope.audioErrorCheckTimer = null;
                }

                $scope.audioErrorFound = false;
            }

            $scope.closeAudioMeter = function () {
                $scope.resetSoundCheck();
                $scope.soundLevel = 0;
                if ($scope.audioStream) {
                    $scope.audioStream.getAudioTracks()[0].stop();
                    $scope.audioStream = null;

                    if ($scope.audioContext) {
                        $scope.audioContext.close();
                        $scope.audioContext = null;
                    }
                }
            }

            $scope.isSoundLevelRippleVisible = function (index) {
                var levelIndex = Math.floor($scope.soundLevel / 5);
                return levelIndex >= index;
            }

            $scope.$watch(function () {
                return RecordingClientService.getHasAudioPermission();
            }, function (newVal, oldVal) {
                $timeout(function () {
                    if (newVal == null) {
                        return;
                    }
                    $scope.hasAudioPermission = RecordingClientService.getHasAudioPermission();
                    var prevAudioPermissionValue = RecordingClientService.getPrevAudioPermision();
                    if (!prevAudioPermissionValue && newVal) {
                        //This is the case when user is giving permission first time.
                        $scope.recordAudio = $scope.hasAudioPermission;
                        RecordingClientService.setRecordAudio($scope.recordAudio);
                        RecordingClientService.setPrevAudioPermision(true);
                        PopupService.updateFromRecordingService();
                    }
                    else if (!newVal) {
                        $scope.recordAudio = $scope.hasAudioPermission;
                        RecordingClientService.setRecordAudio($scope.recordAudio);
                        RecordingClientService.setPrevAudioPermision(false);
                        PopupService.updateFromRecordingService();
                    }
                });
            });

            $scope.$watch(function () {
                return RecordingClientService.getHasFacecamPermission();
            }, function (newVal, oldVal) {
                $timeout(function () {
                    if (newVal == null) {
                        return;
                    }
                    $scope.hasFacecamPermission = RecordingClientService.getHasFacecamPermission();
                    var prevFacecamPermissionValue = RecordingClientService.getPrevFacecamPermision();
                    if (!prevFacecamPermissionValue && newVal) {
                        //This is the case when user is giving permission first time.
                        $scope.recordFacecam = $scope.hasFacecamPermission;
                        RecordingClientService.setRecordFacecam($scope.recordFacecam);
                        RecordingClientService.setPrevFacecamPermision(true);
                        PopupService.updateFromRecordingService();
                    }
                    else if (!newVal) {
                        $scope.recordFacecam = $scope.hasFacecamPermission;
                        RecordingClientService.setRecordFacecam($scope.recordFacecam);
                        RecordingClientService.setPrevFacecamPermision(false);
                        PopupService.updateFromRecordingService();

                    }
                });
            });

            $scope.$watch(function () {
                return RecordingClientService.getRecordFacecam();
            }, function (newVal, oldVal) {
                if (newVal != oldVal) {
                    $scope.recordFacecam = RecordingClientService.getRecordFacecam();
                }
            });

        }
    ]);
})();

(function() {

    angular.module('hyfyext').directive('hyfyextRecordingStarter', [
        function() {
            return {
                templateUrl: 'components/popup/recording-starter/recording-starter.html'
            };
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('UserAccountController', [
        '$scope',
        '$timeout',
        'UserClientService',
        'UtilityClientService',
        function($scope, $timeout, UserClientService, UtilityClientService) {
            var logger = window.logModule.getLogger('UserAccountController');

            $scope.accountDetailsUrl = window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.accounts.details, []);
            $scope.gettingStartedUrl = window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.chrome_ext.getting_started, []);
            $scope.supportUrl = window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.support, []);

            $scope.currentUser = null;
            $scope.init = function() {
                UserClientService.onInit(function(userData) {
                    $scope.currentUser = userData;
                });
            }

            $scope.getUserName = function() {
                if ($scope.currentUser && $scope.currentUser.details) {
                    var userDetails = $scope.currentUser.details;
                    var userName = "";
                    if (userDetails.firstName) {
                        userName = userDetails.firstName;
                    }

                    if (userDetails.lastName) {
                        if (userName) {
                            userName += " ";
                        }
                        userName += userDetails.lastName;
                    }

                    if (!userName && userDetails.email) {
                        userName = userDetails.email;
                    }
                    return userName;
                } else {
                    return "";
                }
            }

            $scope.getUserImageUrl = function() {
                if ($scope.currentUser && $scope.currentUser.details) {
                    var userDetails = $scope.currentUser.details;
                    return userDetails.image;
                }
                return "";
            }

            $scope.openAccountDetailsUrl = function() {
                UtilityClientService.openUrl($scope.accountDetailsUrl);
            }

            $scope.openGettingStartedUrl = function() {
                UtilityClientService.openUrl($scope.gettingStartedUrl);
            }

            $scope.openSupportUrl = function() {
                UtilityClientService.openUrl($scope.supportUrl);
            }

            $scope.logout = function() {
                BackgndAPI.isExtensionIdle({}, function(response) {
                    if (response !== undefined && response.status == false) {
                        // Extension is not idle, don't allow logout
                        BackgndAPI.showNotification({
                            context: {
                                notificationContext: window.constantsModule.NOTIFICATION_CONTEXT.BROWSER
                            },
                            notificationData: {
                                notificationMessage: window.constantsModule.NOTIFICATION_MESSAGES.LOGOUT_DISABLED,
                                expiryInSeconds: 3
                            }
                        });
                    } else {
                        UserClientService.logoutUser(function() {
                            BackgndAPI.sendGAEvent({
                                category: window.constantsModule.GA_EVENT_CATEGORY.USER_INTERACTION,
                                action: window.constantsModule.GA_EVENT_ACTION.SIGN_OUT,
                                label: window.constantsModule.GA_EVENT_LABEL.EXTENSION,
                                sendUserId: true
                            });

                            var attributes = {};
                            attributes[window.constantsModule.MIXPANEL_ATTRIBUTE.SOURCE] = "popup";
                            BackgndAPI.sendMixPanelEvent({
                                  event: window.constantsModule.MIXPANEL_EVENT_ACTION.SIGN_OUT,
                                  attributes: attributes
                            });
                            window.close();
                        });
                    }
                });
            }
        }
    ]);
})();

(function() {

    angular.module('hyfyext').directive('hyfyextUserAccount', [
        function() {
            return {
                templateUrl: 'components/popup/user-account/user-account.html'
            };
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('UserTipsController', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        function($scope, $timeout, RecordingClientService) {
            var _logger = window.logModule.getLogger('UserTipsController');

            $scope.tips = [{
                id: 'welcome',
                image: '/images/hyfy-dark@2x.png',
                html: 'Now it’s time to make<br>your first video.'
            },{
                id: 'click-to-record',
                image: '/images/FirstTip.png',
                html: 'Click to record, then get<br>ready for action in 5, 4, 3...'
            },{
                id: 'stop-recording',
                image: '/images/SecondTip.png',
                html: 'Stop recording in the new window or browser<br> menu. Your video is saved for preview.'
            },{
                id: 'edit-recording',
                image: '/images/ThirdTip.png',
                html: 'Create the perfect video or GIF after<br>you’ve finished your recording.'
            }];

            $scope.$watch('currentTipIndex', function(newVal, oldVal) {
                $scope.currentTip = $scope.tips[newVal];
            });

            $scope.currentTipIndex = 0;

            $scope.isCurrentTipFirst = function() {
                return $scope.currentTipIndex == 0;
            }

            $scope.isCurrentTipSecond = function() {
                return $scope.currentTipIndex == 1;
            }

            $scope.isCurrentTipLast = function() {
                return $scope.currentTipIndex == $scope.tips.length-1;
            }

            $scope.showPreviousTip = function() {
                $scope.currentTipIndex -= 1;
            }

            $scope.showNextTip = function() {
                $scope.currentTipIndex += 1;
            }

            $scope.closeTips = function() {

                var attributes = {};
                attributes[window.constantsModule.MIXPANEL_ATTRIBUTE.USER_TIP_NUMBER] = $scope.currentTipIndex + 1;
                BackgndAPI.sendMixPanelEvent({
                      event: window.constantsModule.MIXPANEL_EVENT_ACTION.USER_TIPS_CLOSED,
                      attributes: attributes
                });
                $scope.isUserTipsHidden = true;
            }
        }
    ]);
})();

(function() {

    angular.module('hyfyext').directive('hyfyextUserTips', [
        function() {
            return {
                templateUrl: 'components/popup/user-tips/user-tips.html'
            };
        }
    ]);
})();

(function() {

    angular.module('hyfyext').directive('hyfyextProcessingSpinner', [
        function() {
            return {
                templateUrl: 'components/processing-spinner/processing-spinner.html'
            };
        }
    ]);
})();

(function() {

    'use strict';

    angular
        .module('hyfyext')
        .directive('hyfyDisableContextMenu', [
            function() {
                return {
                    restrict: 'AE',
                    link: function(scope, element, attr) {
                        element.bind('contextmenu', function(e) {
                            e.preventDefault();
                        })
                    }
                }
            }
        ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('RecordingControlsController', [
        '$scope',
        '$timeout',
        'RecordingClientService',
        'PopupService',
        'UserClientService',
        RecordingControlsController
    ]);


   function RecordingControlsController($scope, $timeout, RecordingClientService, PopupService, UserClientService) {
        var _logger = window.logModule.getLogger('RecordingStarterController');
        $scope.currentRecState = undefined;
        $scope.currentRecordingData;
        $scope.facecamVisible = RecordingClientService.getRecordFacecam();
        $scope.audioVisible = RecordingClientService.getRecordAudio();
        $scope.countDown;
        $scope.timerValue;
        $scope.cameraStream = undefined;
        $scope.associatedVideoID = undefined;
        $scope.facecamVideoTrack = undefined;

        $scope.$watch(function () {
            return RecordingClientService.getRecordFacecam();
        }, function (newVal, oldVal) {
            $scope.facecamVisible = RecordingClientService.getRecordFacecam();
        });

        $scope.$watch(function () {
            return RecordingClientService.getRecordAudio();
        }, function (newVal, oldVal) {
            $scope.audioVisible = RecordingClientService.getRecordAudio();
        });

        $scope.init = function() {
            _logger.info('init', 'entering');
            RecordingClientService.init();
            $scope.attachMessageListener();

            //set title of the window opened
            window.document.title = 'HYFY - REC';

            UserClientService.onInit(function(currentUser) {
                $scope.userSubscriptionData = currentUser.subscriptions;
                $scope.userSubscription = UserClientService.getUserBestSubscription();
            });

            chrome.storage.local.get("recordingData", function(result) {
                if(result["recordingData"].recordFacecam) {

                    var facecmDeviceId = undefined;
                    if(result["recordingData"].facecamDevice){
                        var facecamDevice = result["recordingData"].facecamDevice;
                        if(facecamDevice && facecamDevice.deviceId){
                           facecmDeviceId = facecamDevice.deviceId;
                        }
                    }

                    navigator.webkitGetUserMedia({
                        audio : false,
                        video : facecmDeviceId ? {
                                   deviceId : {
                                     exact : facecmDeviceId
                                   }
                                } : true,
                    }, function(stream) {
                        var video = document.getElementById("facecam-video");
                        video.src = window.URL.createObjectURL(stream);
                        video.play();
                        $scope.cameraStream = stream;
                        $scope.facecamVideoTrack = stream.getVideoTracks()[0];
                    }, function(err) {
                        _logger.debug('microphoneAndCameraAccessPermission', 'microphone/camera permissions denied.');
                    });
                }
            });
        };

        $scope.setState = function(state) {
            $scope.currentRecState = state;
        };

        $scope.stopRecording = function() {
            BackgndAPI.stopRecording();
        }

        $scope.reviewAndShare = function(){
            BackgndAPI.openShareModel({recordingStatus:  $scope.currentRecordingData.recordingStatus}, function(result){
                self.close();
            });
        }

        $scope.discardRecording = function() {
            $scope.currentRecState = undefined;
            //            PopupService.reStartRecording($scope.currentRecordingData.recordingId);
            BackgndAPI.deleteVideo({
                recordingId: $scope.currentRecordingData.recordingId,
                source: window.constantsModule.RECORDING_START_SOURCE.CONTROL_WINDOW
            }, function(){

            });

            PopupService.initDataAndStartRecording(window.constantsModule.RECORDING_START_SOURCE.CONTROL_WINDOW, function(){
                  self.close();
            });

        }

        $scope.attachMessageListener = function() {
            // _logger.debug('attachMessageListener', 'entering');
            chrome.runtime.onMessage.addListener($scope.messageListener);
        }

        $scope.messageListener = function(message, sender, sendResponse) {
            switch (message.message) {
            case window.constantsModule.JS_MESSAGES.STOP_RECORDING:
                _logger.info('messageListener', 'processing', message);
            case window.constantsModule.JS_MESSAGES.DISABLE_CONTENT_SCRIPT:
                break;
            case window.constantsModule.JS_MESSAGES.UPDATE_RECORDING_STATUS:
                _logger.debug('messageListener', 'processing', message);
                $timeout(function(){
                  $scope.handleRecordingStatusUpdate(message.statusUpdate);
                })
                break;
            }
        }

        $scope.checkAndStopFacecamStream = function(){

             if($scope.facecamVisible){
                 var video = document.getElementById("facecam-video");
                 video.pause();
                 video.src="";
                 if($scope.facecamVideoTrack){
                    $scope.facecamVideoTrack.stop();
                 }
             }

        }

        $scope.handleRecordingStatusUpdate = function(statusData) {

            var recordingStatus = statusData.recordingStatus;

            if(recordingStatus.state == window.constantsModule.RECORDING_STATES.STARTING){
                $scope.associatedRecordingId = recordingStatus.recordingId;
            }

            if($scope.associatedVideoID != undefined && $scope.associatedRecordingId != recordingStatus.recordingId){
                return;
            }

            $scope.currentRecordingData = statusData;

            $scope.handleRecordingProgressUpdate(recordingStatus);
            if (statusData.type == window.constantsModule.RECORDING_EVENTS.STATE_CHANGE || $scope.currentRecState == undefined) {
                $scope.setState(recordingStatus.state);
            }
        }

        $scope.isRecordingStarted = function() {
            switch ($scope.currentRecState) {
                case window.constantsModule.RECORDING_STATES.NEW:
                case window.constantsModule.RECORDING_STATES.STARTING:
                case window.constantsModule.RECORDING_STATES.READY:
                  return true;
                case window.constantsModule.RECORDING_STATES.RUNNING_COUNTDOWN:
                 return $scope.countDown > 0;
            }
            return false;
        }

        $scope.isRecordingCompleted = function() {
            switch($scope.currentRecState) {
                case window.constantsModule.RECORDING_STATES.PROCESSING:
                case window.constantsModule.RECORDING_STATES.UPLOADING:
                case window.constantsModule.RECORDING_STATES.UPLOAD_FAILED:
                case window.constantsModule.RECORDING_STATES.DISCARDING:
                case window.constantsModule.RECORDING_STATES.COMPLETED:
                case window.constantsModule.RECORDING_STATES.RECORDING_FAILED:
                $scope.checkAndStopFacecamStream();
                return true;
            }
            return false;
        }

        $scope.isRecordingInProgress = function() {
            return $scope.currentRecState == window.constantsModule.RECORDING_STATES.ACTIVE
                || ($scope.currentRecState == window.constantsModule.RECORDING_STATES.RUNNING_COUNTDOWN && $scope.countDown === 0);
        }


        $scope.isFreeSubscription = function() {
            return $scope.userSubscription &&
                $scope.userSubscription.planId == window.constantsModule.USER_SUBSCRIPTIONS.FREE;
        }


        $scope.handleRecordingProgressUpdate = function(recordingStatus){

            if($scope.isFreeSubscription()){
                $scope.setTimerValue($scope.getFormattedTimeForDisplay(recordingStatus.remainingTime));
            }
            else{
                $scope.setTimerValue($scope.getFormattedTimeForDisplay(recordingStatus.duration));
            }


            if (recordingStatus.state != window.constantsModule.RECORDING_STATES.ACTIVE) {
                $scope.setCountdownValue(recordingStatus.countdownTime);
            }
        }

        $scope.setCountdownValue = function(value) {
            $scope.countDown = value
        }

        $scope.setTimerValue = function(value) {
            $scope.timerValue = value;
        }

        $scope.getFormattedTimeForDisplay = function(value) {
            var displayValue = '';
            if (value != null && value != undefined) {
                var minutes = Math.floor(value / 60);
                var seconds = value % 60;
                displayValue = minutes + ':';
                if (seconds < 10) {
                    displayValue += '0';
                }
                displayValue += seconds;
            }

            return displayValue;
        }

   }
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('RecordingFinishedController', [
        '$scope',
        'PopupService',
        RecordingFinishedController
    ]);

    function RecordingFinishedController($scope, PopupService) {

        var _logger = window.logModule.getLogger('RecordingFinishedController');
         $scope.currentRecordingData = undefined;

        $scope.init = function() {
            _logger.info('init', 'entering');

              BackgndAPI.fetchRecordingStatus({
               }, function(recordingStatus) {

                    $scope.currentRecordingData = recordingStatus;

                   if(recordingStatus && recordingStatus.recordingId && recordingStatus.state == window.constantsModule.RECORDING_STATES.ACTIVE){
                       $scope.recordingId = recordingStatus.recordingId;
                       BackgndAPI.stopRecording({isBrowserAction: true});
                   }
                   else{
//                         BackgndAPI.enablePopup();
//                         self.close();
                        _logger.info('init', 'Active recording not found');
                     }

               });


        }

        $scope.previewAndShareVideo = function(){

              _logger.info('previewAndShareVideo', 'entering');
              BackgndAPI.openShareModel({recordingStatus:  $scope.currentRecordingData, actionFromFinishWindow: true}, function(result){
                  self.close();
              });
        }

        $scope.reRecordVideo = function(){

               _logger.info('reRecordVideo', 'entering');
              BackgndAPI.deleteVideo({
                  recordingId:  $scope.currentRecordingData.recordingId,
                  source: window.constantsModule.RECORDING_START_SOURCE.RECORDIND_FINISH_POPUP,
                  actionFromFinishWindow: true
              }, function(){

              });

              PopupService.initDataAndStartRecording(window.constantsModule.RECORDING_START_SOURCE.RECORDIND_FINISH_POPUP, function(){
                     self.close();
              });

        }

    }
})();

(function() {
    angular.module('hyfyext').directive('hyfyextRecordingFinished', [
        function() {
            return {
                  templateUrl: 'components/recording-finished/recording-finished.html'
            };
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('RecordingErrorController', [
        '$scope',
        '$state',
        'recording',
        function($scope, $state, recording) {
            var _logger = window.logModule.getLogger('RecordingErrorController');

            $scope.recording = recording;
            $scope.recordingError = window.constantsModule.RECORDING_ERRORS.VIDEO_CAPTURE_FAILED;
            
            if ($scope.recording && $scope.recording.recordingErrorCode) {
                for (var key in window.constantsModule.RECORDING_ERRORS) {
                    var recordingError = window.constantsModule.RECORDING_ERRORS[key];
                    if (recordingError.CODE == $scope.recording.recordingErrorCode) {
                        $scope.recordingError = recordingError;
                    }
                }
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext')
        .controller('RecordingStatusController', [
            '$scope',
            '$state',
            'recording',
            function($scope, $state, recording) {
                var _logger = window.logModule.getLogger('RecordingStatusController');

                $scope.recordingId = recording.recordingId;
                $scope.recording = recording;

                $scope.$watch('recording', function(newVal, oldVal) {
                    if ($scope.recording.state == window.constantsModule.RECORDING_STATES.DISCARDING) {
                        if (window.self === window.top) {
                            _logger.info('init', 'closing');
                            self.close();
                        }
                    } else {
                        if (!oldVal.shareUrl && $scope.recording.shareUrl) {
                            window.location = $scope.recording.shareUrl;
                        }
                    }
                }, true);

                $scope.isSaveLocalVisible = function() {
                    return !$scope.recording.recovered &&
                        !$scope.recording.uploadToLibrary &&
                        $scope.recording.state != window.constantsModule.RECORDING_STATES.RECORDING_FAILED;
                }

                $scope.isUploadErrorVisible = function() {
                    return !$scope.recording.recovered &&
                        $scope.recording.uploadFailed &&
                        $scope.recording.state != window.constantsModule.RECORDING_STATES.RECORDING_FAILED;
                }

                $scope.isRecordingErrorVisible = function() {
                    return $scope.recording.state == window.constantsModule.RECORDING_STATES.RECORDING_FAILED;
                }

                $scope.isRecoverRecordingVisible = function() {
                    return $scope.recording.recovered;
                }

                $scope.close = function() {
                    self.close();
                }
            }
        ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('RecoverRecordingController', [
        '$scope',
        '$state',
        'recording',
        'RecordingClientService',
        function($scope, $state, recording, RecordingClientService) {
            var _logger = window.logModule.getLogger('RecoverRecordingController');

            $scope.recording = recording;

            $scope.saveLocalVideo = function() {
                RecordingClientService.saveLocal();
            }

            $scope.discardRecording = function() {
                RecordingClientService.discardRecording();
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('SaveLocalController', [
        '$scope',
        '$state',
        'recording',
        'RecordingClientService',
        function($scope, $state, recording, RecordingClientService) {
            var _logger = window.logModule.getLogger('SaveLocalController');

            $scope.recording = recording;

            $scope.isSaveButtonEnabled = function() {
                return $scope.recording.readyForDownload;
            }

            $scope.saveLocalVideo = function() {
                RecordingClientService.saveLocal();
            }

            $scope.discardRecording = function() {
                RecordingClientService.discardRecording();
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('ShareModalController', [
        '$scope',
        '$state',
        'UtilityClientService',
        'recording',
        function($scope, $state, UtilityClientService, recording) {
            var _logger = window.logModule.getLogger('ShareModalController');

            $scope.initialized = false;
            $scope.inProgress = false;
            $scope.recording = recording;

            $scope.$watch('recording', function(newVal, oldVal) {
                if ($scope.recording.shareUrl && !$scope.inProgress && !$scope.initialized) {
                    // Create session first
                    $scope.inProgress = true;
                    UtilityClientService.createSession(function() {
                        $scope.initialized = true;
                    });
                }
            });

            $scope.isInitialized = function() {
                return $scope.initialized;
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('UploadErrorController', [
        '$scope',
        '$state',
        'recording',
        'RecordingClientService',
        function($scope, $state, recording, RecordingClientService) {
            var _logger = window.logModule.getLogger('UploadErrorController');

            $scope.recording = recording;

            $scope.isSaveButtonEnabled = function() {
                return $scope.recording.readyForDownload;
            }

            $scope.saveLocalVideo = function() {
                RecordingClientService.saveLocal();
            }

            $scope.discardRecording = function() {
                RecordingClientService.discardRecording();
            }

            $scope.retryUpload = function() {
                RecordingClientService.retryUpload();
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('SettingsController', [
        '$scope',
        function($scope, $mdToast) {
            var _logger = window.logModule.getLogger('SettingsController');

            $scope.inputs = {}
            $scope.init = function() {
                _logger.info('init', 'entering');
                window.clientUtilsModule.getApplicableSettings(function(settings) {
                    $scope.$apply(function() {
                        angular.extend($scope.inputs, settings);
                    });
                });
            }

            $scope.reloadExtension = function() {
                chrome.runtime.reload();
            }

            $scope.getAvailableSettings = function() {
                return window.constantsModule.SETTINGS;
            }

            $scope.saveChanges = function() {
                _logger.info("saveChanges", "updated settings", $scope.inputs);
                BackgndAPI.saveSettings({
                    settings: $scope.inputs
                }, function(resposne) {
                    if (resposne && resposne.status) {
                        alert('Settings Updated!');
                    } else {
                        alert('Failed to save settings, please try again!');
                    }
                });
            }

            $scope.savePreferences = function() {
                _logger.info("savePreferences", "updated settings", $scope.inputs);
                BackgndAPI.savePreferences({
                    settings: $scope.inputs
                }, function(resposne) {
                    if (resposne && resposne.status) {
                        alert('PREFERENCES Saved');
                    } else {
                        alert('Failed to save settings, please try again!');
                    }
                });
            }
        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').controller('SuccessfulInstallController', [
        '$scope',
        function($scope) {
            var _logger = window.logModule.getLogger('SuccessfulInstallController');
            $scope.init = function() {
            }
            $scope.micCameraPermission = function(){

                _logger.info('init', 'asking for mic permissions from user');
                BackgndAPI.sendGAPageView({
                    pageLocation: '/extension/installed/',
                    page: '/extension/installed/',
                    title: 'HYFY : Extension Installed'
                });

                window.utilsModule.microphoneAndCameraAccessPermission(function(gotPermission) {

                    _logger.info('init', 'mic permissions user response: ' + (gotPermission ? 'accepted' : 'rejected'));


                    var mixPanelAttributes = {}
                    mixPanelAttributes['source'] = window.constantsModule.MIXPANEL_ATTRIBUTE_SOURCE.SUCCESSFUL_INSTALL;
                    mixPanelAttributes[window.constantsModule.MIXPANEL_ATTRIBUTE_SOURCE.FACECAM_PERMISSION_ALLOWED] = true;
                    mixPanelAttributes[window.constantsModule.MIXPANEL_ATTRIBUTE_SOURCE.MIC_PERMISSION_ALLOWED] = true;
                    var mixPanelAction = window.constantsModule.MIXPANEL_EVENT_ACTION.MIC_PERMISSION_ALLOWED;
                    var gaAction = window.constantsModule.GA_EVENT_ACTION.ALLOWED;


                    if (!gotPermission) {
                        gaAction = window.constantsModule.GA_EVENT_ACTION.DENIED;
                        mixPanelAction = window.constantsModule.MIXPANEL_EVENT_ACTION.MIC_PERMISSION_DENIED;
                        mixPanelAttributes[window.constantsModule.MIXPANEL_ATTRIBUTE_SOURCE.FACECAM_PERMISSION_ALLOWED] = false;
                        mixPanelAttributes[window.constantsModule.MIXPANEL_ATTRIBUTE_SOURCE.MIC_PERMISSION_ALLOWED] = false;
                    }

                    BackgndAPI.sendGAEvent({
                        category: window.constantsModule.GA_EVENT_CATEGORY.MIC_PERMISSION,
                        label: window.constantsModule.GA_EVENT_LABEL.EXTENSION,
                        action: gaAction,
                        sendUserId: true
                    });


                    BackgndAPI.sendMixPanelEvent({
                        event: mixPanelAction,
                        attributes: mixPanelAttributes
                    });

                    window.location = window.utilsModule.makeSiteUrl(window.urlsModule.SITE_URLS.chrome_ext.welcome);
                });

            }
        }
    ]);
})();

(function() {
    'use strict';
    
    angular.module('hyfyext').service('NotificationClientService', [
        '$rootScope',
        '$timeout',
        function($rootScope, $timeout) {
            var _self = this;
            var _logger = window.logModule.getLogger('NotificationClientService');

            var _currentNotifications = []
            var _messageListener = function(message, sender, sendResponse) {
                if (sender && sender.url === window.location.href) {
                    return;
                }

                switch (message.message) {
                    case window.constantsModule.JS_MESSAGES.SHOW_NOTIFICATION:
                        _logger.info('_messageListener', 'processing', message);

                        if (_checkIfNotificationAlreadyExists(message.notificationId)) {
                            return;
                        }

                        $timeout(function() {
                            _currentNotifications.push(message.notification);
                        });
                        break;
                    case window.constantsModule.JS_MESSAGES.REMOVE_NOTIFICATION:
                        _logger.info('_messageListener', 'processing', message);

                        var index = _findNotificationIndex(message.notificationId);
                        if (index != -1) {
                            $timeout(function() {
                                _currentNotifications.splice(index, 1);
                            });
                        }
                        break;
                }
            }

            var _checkIfNotificationAlreadyExists = function(notificationId) {
                var index = _findNotificationIndex(notificationId);
                return index != -1;
            }

            var _findNotificationIndex = function(notificationId) {
                if (_currentNotifications.length > 0) {
                    for (var i = 0; i < _currentNotifications.length; i++) {
                        if (_currentNotifications[i].notificationId == notificationId) {
                            return i;
                        }
                    }
                }
                return -1;
            }

            _self.init = function() {
                _logger.info('init', 'entering, attaching listeners');
                chrome.runtime.onMessage.addListener(_messageListener);
            }

            _self.getCurrentNotifications = function() {
                return _currentNotifications;
            }

            _self.fetchTabNotifications = function(tabId) {
                _logger.info('fetchTabNotifications', 'entering');

                BackgndAPI.fetchNotifications({
                    notificationContext: window.constantsModule.NOTIFICATION_CONTEXT.TAB,
                    tabId: tabId
                }, function(notifications) {
                    $timeout(function() {
                        _logger.info('fetchTabNotifications', 'got notifications');
                        if (notifications && notifications.length > 0) {
                            for (var i = 0; i < notifications.length; i++) {
                                if (!_checkIfNotificationAlreadyExists(notifications[i].notificationId)) {
                                    _currentNotifications.push(notifications[i]);
                                }
                            }
                        }
                    });
                });
            }

            _self.removeNotification = function(notification) {
                _logger.info('removeNotification', 'entering', notification.notificationId);
                var index = _findNotificationIndex(notification.notificationId);
                if (index != -1) {
                    _currentNotifications.splice(index, 1);

                    BackgndAPI.removeNotification({
                        notificationId: notification.notificationId
                    });
                }
            }

            _self.triggerNotificationAction = function(notification) {
                _logger.info('triggerNotificationAction', 'entering', notification.notificationId);
                var index = _findNotificationIndex(notification.notificationId);
                if (index != -1) {
                    _currentNotifications.splice(index, 1);

                    BackgndAPI.triggerNotificationAction({
                        notificationId: notification.notificationId
                    });
                }
            }
        }
    ]);
})();

(function() {

    angular.module('hyfyext').service('PopupService', [
        '$rootScope',
        '$timeout',
        'UtilityClientService',
        'RecordingClientService',
        function($rootScope, $timeout, UtilityClientService, RecordingClientService) {
            var vm = this;
            vm.facecamIncluded = true;
            vm.audioIncluded = true;

            vm.initDataAndStartRecording = function(source, callback) {
                vm.getData(function() {
                    vm.startRecording(source, callback);
                });
            }

            vm.updateFromRecordingService = function () {
                vm.updateLocalData(RecordingClientService.getRecordingData());
            }

            vm.updateLocalData = function (data) {
                vm.audioDevice =  data["audioDevice"];
                vm.facecamDevice =  data["facecamDevice"];
                vm.facecamIncluded =  data["recordFacecam"];
                vm.audioIncluded =  data["recordAudio"];
                vm.recordingTime = data["recordingTime"];
                vm.recordingEncoder = data["recordingEncoder"];
            }

            vm.getData = function (callback) {

                chrome.storage.local.get("recordingData", function(result) {
                    if(result != undefined && !angular.equals(result, {}) ) {
                       vm.updateLocalData(result["recordingData"]);
                    } else {
                        var data = {
                            "recordAudio" : vm.recordAudio,
                            "recordFacecam" : false,
                            "facecamDevice" : RecordingClientService.getRecordingFacecamDevice(),
                            "audioDevice": RecordingClientService.getRecordingAudioDevice(),
                            "recordingTime": RecordingClientService.getRecordingTime(),
                            "recordingEncoder": RecordingClientService.getRecordingEncoder()
                        }
                        vm.updateLocalData(data);
                    }
                    if(callback){
                        callback();
                    }
                });
            }

            vm.startRecording = function(source, callback) {
                RecordingClientService.startRecording({
                    recordingStartSource: source,
                    recordingType: window.constantsModule.RECORDING_TYPES.DESKTOP,
                    recordingTime: vm.recordingTime,
                    recordAudio: vm.audioIncluded,
                    recordTabAudio: RecordingClientService.getTabAudioValue(),
                    recordingAudioDevice: vm.audioDevice ? vm.audioDevice.deviceId : undefined,
                    recordFacecam: vm.facecamIncluded,
                    recordingFacecamDevice: vm.facecamDevice ? vm.facecamDevice.deviceId : undefined,
                    encoder: vm.recordingEncoder.id,
                    uploadToLibrary: true
                }, function(started) {
                    if (callback) {
                        callback();
                    }
                });
            }


        }]);
})();

(function () {
    'use strict';
    angular.module('hyfyext').service('RecordingClientService', [
        '$rootScope',
        '$timeout',
        function ($rootScope, $timeout) {
            var _self = this;
            var _logger = window.logModule.getLogger('RecordingClientService');

            var _currentRecordingId = null;
            var _currentRecording = {};

            _self.recordingTime = window.constantsModule.VIDEO_RECORDING_DURATION_DEFAULT;
            _self.recordingEncoder = window.constantsModule.ENCODERS.MEDIA_RECORDER_VP9_1M;

            _self.recordAudio = true;
            _self.recordFacecam = true;
            _self.recordingAudioDevice;
            _self.recordingFacecamDevice;
            _self.facecamSources = [];
            _self.audioSources = [];
            _self.hasAudioPermissions = null;
            _self.hasFacecamPermissions = null;
            _self.prevAudioPermision;
            _self.prevFacecamPermission;

            var _messageListener = function(message, sender, sendResponse) {
                if (sender && sender.url === window.location.href) {
                    return;
                }

                switch (message.message) {
                    case window.constantsModule.JS_MESSAGES.UPDATE_RECORDING_STATUS:
                        _logger.debug('_messageListener', 'processing', message);

                        var statusUpdate = message.statusUpdate;
                        if (statusUpdate.recordingStatus) {
                            if (!_currentRecordingId || _currentRecordingId == statusUpdate.recordingStatus.recordingId) {
                                $rootScope.$apply(function () {
                                    angular.extend(_currentRecording, statusUpdate.recordingStatus);
                                    _handleRecordingStatusUpdate(statusUpdate);
                                });
                            }
                            break;
                        }
                }
            }

            var _handleRecordingStatusUpdate = function (statusUpdate) {
                if (statusUpdate.type == window.constantsModule.RECORDING_EVENTS.STATE_CHANGE) {
                    var recordingStatus = statusUpdate.recordingStatus;

                    switch (recordingStatus.state) {
                        case window.constantsModule.RECORDING_STATES.NEW:
                        case window.constantsModule.RECORDING_STATES.STARTING:
                            break;
                        case window.constantsModule.RECORDING_STATES.ACTIVE:
                            break;
                        case window.constantsModule.RECORDING_STATES.PROCESSING:
                            break;
                        case window.constantsModule.RECORDING_STATES.UPLOADING:
                            break;
                        case window.constantsModule.RECORDING_STATES.RECORDING_FAILED:
                            _logger.info('_handleRecordingStatusUpdate', 'recording failed, remove the video from context here');
                            //emptyObject(_currentRecording);
                            break;
                        case window.constantsModule.RECORDING_STATES.COMPLETED:
                            _logger.info('_handleRecordingStatusUpdate', 'recording completed, remove the video from context here');
                            //emptyObject(_currentRecording);
                            break;
                    }
                }
            }

            var isNotEmpty = function (object) {
                return object && Object.keys(object).length;
            }

            var emptyObject = function (object) {
                for (var prop in object) {
                    if (object.hasOwnProperty(prop)) {
                        delete object[prop];
                    }
                }
            }

            _self.setPrevAudioPermision = function (value) {
                _self.prevAudioPermision = value;
                _self.setDataToStorage();
            }

            _self.getPrevAudioPermision = function () {
                return _self.prevAudioPermision;
            }

            _self.setPrevFacecamPermision = function (value) {
                _self.prevFacecamPermission = value;
                _self.setDataToStorage();
            }


            _self.getPrevFacecamPermision = function () {
                return _self.prevFacecamPermission;
            }

            _self.getTabAudioValue = function () {
                return false;
            }

            _self.init = function (callback) {
                chrome.runtime.onMessage.addListener(_messageListener);
                    BackgndAPI.fetchRecordingStatus({}, function (recordingStatus) {
                        $rootScope.$apply(function () {
                            angular.extend(_currentRecording, recordingStatus);
                            _logger.info('init', 'current recording', _currentRecording);
                            if (callback) {
                                callback(_currentRecording);
                            }
                        });
                });


                chrome.storage.local.get("recordingData", function (result) {
                    if (result != undefined && !angular.equals(result, {}) ) {
                        _self.updateLocalData(result["recordingData"]);
                    } else {
                        var data = {
                            "recordAudio": _self.getRecordAudio(),
                            "recordFacecam": _self.getRecordFacecam(),
                            "facecamDevice": _self.getRecordingFacecamDevice(),
                            "audioDevice": _self.getRecordingAudioDevice(),
                            "prevAudioPermision": _self.getPrevAudioPermision(),
                            "prevFacecamPermission": _self.getPrevFacecamPermision(),
                            "recordingTime": _self.getRecordingTime(),
                            "recordingEncoder": _self.getRecordingEncoder()
                        }
                        _self.updateLocalData(data);

                    }
                    if (callback) {
                        callback();
                    }
                });
            }

            _self.updateLocalData = function (data) {
                _logger.info("Updating local data", data);
                _self.recordingAudioDevice = data["audioDevice"];
                _self.recordingFacecamDevice = data["facecamDevice"];
                _self.recordFacecam = data["recordFacecam"];
                _self.recordAudio = data["recordAudio"];
                _self.prevAudioPermision = data["prevAudioPermision"];
                _self.prevFacecamPermission = data["prevFacecamPermission"];
                _self.recordingTime = data["recordingTime"];
                _self.recordingEncoder = data["recordingEncoder"];
            }

            _self.collectMediaSources = function () {
                navigator.mediaDevices.enumerateDevices().then(function (deviceInfos) {
                    var locallySavedData = _self.getRecordingData();
                    var locallySavedAudioDevice = locallySavedData.audioDevice;
                    var locallySavedFacecamDevice = locallySavedData.facecamDevice;
                    for (var i = 0; i !== deviceInfos.length; ++i) {
                        var deviceInfo = deviceInfos[i];
                        if (deviceInfo.kind === 'audioinput') {
                            _self.audioSources.push({
                                deviceId: deviceInfo.deviceId,
                                label: deviceInfo.label || 'Microphone ' + (_self.audioSources.length + 1)
                            });

                        } else if (deviceInfo.kind === 'videoinput') {
                            _self.facecamSources.push({
                                deviceId: deviceInfo.deviceId,
                                label: deviceInfo.label || 'Videocamera ' + (_self.facecamSources.length + 1)
                            })
                        }
                    }
                    var locallyMatchedAudioSource = _self.audioSources.find(data => {
                        if (locallySavedAudioDevice != undefined) {
                            return data.deviceId == locallySavedAudioDevice.deviceId;
                        }
                    });

                    var locallyMatchedFacecamSource = _self.facecamSources.find(data => {
                        if (locallySavedFacecamDevice != undefined) {
                            return data.deviceId == locallySavedFacecamDevice.deviceId;
                        }
                    });

                    if (locallyMatchedAudioSource == undefined) {
                        _self.setRecordingAudioDevice(_self.audioSources[0]);
                    } else {
                        _self.setRecordingAudioDevice(locallyMatchedAudioSource);
                    }
                    if (locallyMatchedFacecamSource == undefined) {
                        _self.setRecordingFacecamDevice(_self.facecamSources[0]);
                    } else {
                        _self.setRecordingFacecamDevice(locallyMatchedFacecamSource);
                    }
                });
            }

            _self.getAudioSources = function () {
                return _self.audioSources;
            }

            _self.getFacecamSources = function () {
                return _self.facecamSources;
            }


            _self.initByRecordingId = function (recordingId, callback) {
                _currentRecordingId = recordingId;
                chrome.runtime.onMessage.addListener(_messageListener);
                BackgndAPI.fetchRecordingStatus({
                    recordingId: recordingId
                }, function (recordingStatus) {
                    $rootScope.$apply(function () {
                        angular.extend(_currentRecording, recordingStatus);
                        _logger.info('init', 'current recording', _currentRecording);
                        if (callback) {
                            callback(_currentRecording);
                        }
                    });
                });
            }

            _self.getCurrentRecording = function () {
                return _currentRecording;
            }

            _self.isRecordingCountdownInProgress = function () {
                if (_currentRecording.state) {
                    switch (_currentRecording.state) {
                        case window.constantsModule.RECORDING_STATES.NEW:
                        case window.constantsModule.RECORDING_STATES.STARTING:
                        case window.constantsModule.RECORDING_STATES.READY:
                        case window.constantsModule.RECORDING_STATES.RUNNING_COUNTDOWN:
                            if (_currentRecording.countdownTime > 0) {
                                return true;
                            }
                    }
                }
                return false;
            }

            _self.startRecording = function (recordingParams, callback) {
                _logger.info('startRecording', 'entering', recordingParams);

                if (_self.isRecordingInProgress()) {
                    _logger.warn('startRecording', 'Recording is already in progress, ignoring this request');
                    if (callback) callback(false);
                    return;
                }

                BackgndAPI.getCurrentTabId({}, function (response) {
                    BackgndAPI.startRecording({
                        tabId: response.tabId,
                        recordingParams: recordingParams
                    });

                    if (callback) callback(true);
                });
            }

            _self.stopRecording = function () {
                _logger.info('stopRecording', 'entering');

                if (!_self.isRecordingInProgress()) {
                    _logger.warn('stopRecording', 'no recording in progress, ignoring this request');
                    return;
                }

                BackgndAPI.stopRecording();
            }

            _self.pauseRecording = function () {
                _logger.info('pauseRecording', 'entering');

                if (!_self.isRecordingInProgress()) {
                    _logger.warn('pauseRecording', 'no recording in progress, ignoring this request');
                    return;
                }

                BackgndAPI.pauseRecording();
            }

            _self.resumeRecording = function () {
                _logger.info('resumeRecording', 'entering');

                if (!_self.isRecordingInProgress()) {
                    _logger.warn('resumeRecording', 'no recording is paused, ignoring this request');
                    return;
                }

                BackgndAPI.resumeRecording();
            }

            _self.discardRecording = function () {
                _logger.info('discardRecording', 'entering');

                BackgndAPI.deleteVideo({
                    recordingId: _currentRecording.recordingId
                });
            }

            _self.saveLocal = function () {
                _logger.info('saveLocal', 'entering');

                if (_self.isRecordingInProgress()) {
                    _logger.warn('saveLocal', 'recording is still in progress, ignoring this request');
                    return;
                }

                BackgndAPI.saveLocal({
                    recordingId: _currentRecording.recordingId
                });
            }

            _self.retryUpload = function () {
                _logger.info('retryUpload', 'entering');

                if (_self.isRecordingInProgress()) {
                    _logger.warn('retryUpload', 'recording is still in progress, ignoring this request');
                    return;
                }

                BackgndAPI.retryUpload({
                    recordingId: _currentRecording.recordingId
                });
            }

            _self.getRecordingStatus = function (callback) {
                _logger.debug('getRecordingStatus', 'entering');

                BackgndAPI.fetchRecordingStatus({}, callback);
            }

            _self.updateClientProperty = function (prop, value) {
                _logger.debug('updateClientProperty', 'entering', {
                    prop: prop,
                    value: value
                });

                BackgndAPI.updateClientProperty({
                    property: prop,
                    value: value
                });
            }

            _self.isRecordingInProgress = function () {
                if (_currentRecording && _currentRecording.state) {
                    switch (_currentRecording.state) {
                        case window.constantsModule.RECORDING_STATES.UPLOAD_FAILED:
                        case window.constantsModule.RECORDING_STATES.UPLOADING:
                        case window.constantsModule.RECORDING_STATES.RECORDING_FAILED:
                        case window.constantsModule.RECORDING_STATES.COMPLETED:
                            return false;
                        default:
                            return true;
                    }
                }
                return false;
            }

            _self.isRecordingInProgressForTab = function (tabId) {
                return _currentRecording && _currentRecording.associatedTabId === tabId;
            }

            //Recording time
            _self.setRecordingTime = function (recordingTime) {
                _self.recordingTime = recordingTime;
                _self.setDataToStorage();
            }

            _self.getRecordingTime = function () {
                return _self.recordingTime;
            }

            //Recording encoder
            _self.setRecordingEncoder = function (encoder) {
                _self.recordingEncoder = encoder;
                _self.setDataToStorage();
            }

            _self.getRecordingEncoder = function () {
                return _self.recordingEncoder;
            }

            //Recording audio
            _self.setRecordAudio = function (value) {
                _logger.info("Updating record audio", value);
                _self.recordAudio = value;
                _self.setDataToStorage();
            }

            _self.getRecordAudio = function () {
                return _self.recordAudio;
            }

            //Recording facecam
            _self.setRecordFacecam = function (value) {
                _self.recordFacecam = value;
                _self.setDataToStorage();
            }

            _self.getRecordFacecam = function () {
                return _self.recordFacecam;
            }

            //Recording Facecam Device
            _self.setRecordingFacecamDevice = function (value) {
                _self.recordingFacecamDevice = value;
                _self.setDataToStorage();
            }

            _self.getRecordingFacecamDevice = function () {
                return _self.recordingFacecamDevice;
            }

            //Recording Audio Device
            _self.setRecordingAudioDevice = function (value) {
                _self.recordingAudioDevice = value;
                _self.setDataToStorage();
            }

            _self.getRecordingAudioDevice = function () {
                return _self.recordingAudioDevice;
            }

            _self.setDataToStorage = function (callback) {

                var data = _self.getRecordingData();
                chrome.storage.local.set({ "recordingData": data }, function () {
                    if (callback)
                        callback();
                });
            }

            _self.getRecordingData = function () {

                return {
                    "audioDevice": _self.recordingAudioDevice,
                    "facecamDevice": _self.recordingFacecamDevice,
                    "recordFacecam": _self.recordFacecam,
                    "recordAudio": _self.recordAudio,
                    "prevAudioPermision": _self.prevAudioPermision,
                    "prevFacecamPermission": _self.prevFacecamPermission,
                    "recordingTime": _self.recordingTime,
                    "recordingEncoder": _self.recordingEncoder
                };
            }

            //Record Audio Permission
            _self.setHasAudioPermission = function (value) {
                _self.hasAudioPermissions = value;
            }

            _self.getHasAudioPermission = function () {
                return _self.hasAudioPermissions;
            }

            //Record Facecam Permission
            _self.setHasFacecamPermission = function (value) {
                _self.hasFacecamPermissions = value;
            }

            _self.getHasFacecamPermission = function () {
                return _self.hasFacecamPermissions;
            }

        }
    ]);
})();

(function() {
    'use strict';

    angular.module('hyfyext').service('UserClientService', [
        '$rootScope',
        '$timeout',
        'UtilityClientService',
        function($rootScope, $timeout, UtilityClientService) {
            var _self = this;
            var _logger = window.logModule.getLogger('UserClientService');

            var _initialized = false;
            var _listeners = [];

            var _currentUser = {};

            var messageListener = function(message, sender, sendResponse) {
                if (sender && sender.url === window.location.href) {
                    return;
                }

                switch (message.message) {}
            }

            var _isSubscriptionType = function(type) {
                var currentSubscriptions = _currentUser.subscriptions;
                if (currentSubscriptions) {
                    var userSubscriptions = currentSubscriptions.userSubscriptions;
                    for (var planId in userSubscriptions) {
                        if (userSubscriptions.hasOwnProperty(planId)) {
                            var subscription = userSubscriptions[planId];
                            if (subscription.planId == type) {
                                return true;
                            }
                        }
                    }
                }
                return false;
            }

            _self.init = function() {
                _logger.info('init', 'entering');
                BackgndAPI.fetchUserData({}, function(userData) {
                    $timeout(function() {
                        angular.extend(_currentUser, userData);
                        _initialized = true;
                        if (_listeners && _listeners.length) {
                            _logger.debug('init', 'initialized, running callbacks');
                            _listeners.forEach(function(callback) {
                                callback(_currentUser);
                            });
                        }
                    });
                });

                //chrome.runtime.onMessage.addListener(messageListener);
            }

            _self.onInit = function(callback) {
                if (!_initialized) {
                    _logger.debug('onInit', 'not initialized, will run callback once initialized');
                    _listeners.push(callback);
                } else {
                    _logger.debug('onInit', 'initialized, running callbacks');
                    callback(_currentUser);
                }
            }

            _self.isProUser = function() {
                return _isSubscriptionType(window.constantsModule.USER_SUBSCRIPTIONS.PRO);
            }

            _self.isBusinessUser = function() {
                return _isSubscriptionType(window.constantsModule.USER_SUBSCRIPTIONS.BUSINESS);
            }

            _self.isFreeUser = function() {
                return _isSubscriptionType(window.constantsModule.USER_SUBSCRIPTIONS.FREE);
            }

            _self.isFreeTrialUser = function() {
                return _isSubscriptionType(window.constantsModule.USER_SUBSCRIPTIONS.FREE_TRIAL);
            }

            _self.isFeatureAllowed = function(featureId) {
                if (_currentUser.subscriptions) {
                    return _currentUser.subscriptions.userFeatures.indexOf(featureId) != -1;
                }
                return false;
            }

            _self.getUserBestSubscription = function() {
                var userLargestSubscription = null;
                if (_currentUser.subscriptions) {
                    var userSubscriptions = _currentUser.subscriptions.userSubscriptions;
                    for (var planId in userSubscriptions) {
                        var subscription = userSubscriptions[planId];
                        if (!userLargestSubscription) {
                            userLargestSubscription = subscription;
                        } else {
                            var largestSubscriptionModeIndex = window.constantsModule.USER_SUBSCRIPTIONS_MODE_HIERARCHY.indexOf(userLargestSubscription.planId);
                            var subscriptionModeIndex = window.constantsModule.USER_SUBSCRIPTIONS_MODE_HIERARCHY.indexOf(subscription.planId);
                            if (subscriptionModeIndex > largestSubscriptionModeIndex) {
                                userLargestSubscription = subscription;
                            }
                        }
                    }
                }
                return userLargestSubscription;
            }

            _self.logoutUser = function(callback) {
                _logger.info('logoutUser', 'entering');
                BackgndAPI.logoutUser({
                    timeInMillis: new Date().getTime()
                }, function() {
                    callback();
                });
            }
        }
    ]);
})();

(function() {
    'use strict';
    
    angular.module('hyfyext').service('UtilityClientService', [
        '$rootScope',
        '$timeout',
        function($rootScope, $timeout) {
            var _self = this;
            var _logger = window.logModule.getLogger('UtilityClientService');

            _self.openUrl = function(url) {
                chrome.tabs.create({
                    url: url
                });
            }

            _self.openAppUrl = function(url, skipPreAuth) {
                var openUrl = function() {
                    var fullUrl = window.utilsModule.makeSiteUrl(url, []);
                    _self.openUrl(fullUrl);
                }

                if (skipPreAuth) {
                    openUrl();
                } else {
                    window.clientUtilsModule.callApi({
                        url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_API_URLS.create_session),
                        type: 'GET',
                        success: openUrl,
                        error: openUrl
                    }, true, undefined, true);
                }
            }

            _self.createSession = function(callback) {
                window.clientUtilsModule.callApi({
                    url: window.utilsModule.makeSiteUrl(window.urlsModule.SITE_API_URLS.create_session),
                    type: 'GET',
                    success: callback,
                    error: callback
                }, true, undefined, true);
            }
        }
    ]);
})();

angular.module('templates-main', ['components/audio-access/audio-access.html', 'components/automation/automation-start-recording/automation-start-recording.html', 'components/automation/automation-stop-recording/automation-stop-recording.html', 'components/jira-addon-recording-controls-v2/jira-addon-recording-controls-v2.html', 'components/jira-addon-recording-controls/jira-addon-recording-controls.html', 'components/notifications/notifications.html', 'components/notifications/toast-notification/toast-notification.html', 'components/popup/facecam-mic-error/facecam-mic-error.html', 'components/popup/nacl-plugin-disabled/nacl-plugin-disabled.html', 'components/popup/popup.html', 'components/popup/promotions/promotions.html', 'components/popup/recording-setting/recording-setting.html', 'components/popup/recording-starter/recording-starter.html', 'components/popup/user-account/user-account.html', 'components/popup/user-tips/user-tips.html', 'components/processing-spinner/processing-spinner.html', 'components/recording-controls/recording-controls.html', 'components/recording-finished/recording-finished.html', 'components/recording-status/recording-error/recording-error.html', 'components/recording-status/recording-status.html', 'components/recording-status/recover-recording/recover-recording.html', 'components/recording-status/save-local/save-local.html', 'components/recording-status/share-modal/share-modal.html', 'components/recording-status/upload-error/upload-error.html', 'components/settings/settings.html', 'components/successful-install/successful-install.html']);

angular.module("components/audio-access/audio-access.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/audio-access/audio-access.html",
    "<div class=\"hyfyext-audio-access\" ng-controller=\"AudioAccessController\" ng-init=\"init()\">\n" +
    "	<div class=\"body-wrapper\">\n" +
    "		<div class=\"background-image\">\n" +
    "				<img src=\"/images/permissionBG.png\">\n" +
    "		</div>\n" +
    "		<div class=\"permission-wrapper\" ng-if=\"!isMicOrCameraDefected\">\n" +
    "			<div class=\"welcome-wrap\">\n" +
    "				<div class=\"welcome-text\">\n" +
    "					WELCOME TO\n" +
    "				</div>\n" +
    "				<img src=\"/images/hyfy-circle.png\" class=\"welcome-image\">\n" +
    "			</div>\n" +
    "			<div class=\"body-text\">\n" +
    "				Just one more step before you get started.\n" +
    "			</div>\n" +
    "			<div class=\"body-text-1\">\n" +
    "				Share your voice and webcam to connect with your customers on a deeper level.\n" +
    "			</div>\n" +
    "			<button class=\"footer\" ng-click=\"micCameraPermission()\">\n" +
    "				ENABLE WEBCAM AND MIC\n" +
    "			</button>\n" +
    "		</div>\n" +
    "		<div class=\"permission-blocked-wrapper\" ng-if=\"isMicOrCameraDefected\">\n" +
    "			<div class=\"permission-blocked-header\">\n" +
    "				<img src=\"/images/color@2x.png\" class=\"error-image\">\n" +
    "				<div class=\"error-text-wrapper\">\n" +
    "							<i class=\"material-icons error-icon\">error</i>\n" +
    "						<div class=\"error-text\">\n" +
    "							HYFY IS BLOCKED FROM ACCESSING<br>YOUR WEBCAM AND MICROPHONE!\n" +
    "						</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"permission-footer\">\n" +
    "				<div class=\"footer-text\">\n" +
    "					See below for how to re-enable HYFY from your Chrome settings.\n" +
    "				</div>\n" +
    "				<div class=\"footer-image\">\n" +
    "					<img src=\"/images/HYFY-unblock-microphone-and-camera.gif\" class=\"permission-gif-size\">\n" +
    "				</div>\n" +
    "				<div class=\"restart-browser-text\">\n" +
    "					If all else fails, restarting your browser will often fix the problem.\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/automation/automation-start-recording/automation-start-recording.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/automation/automation-start-recording/automation-start-recording.html",
    "<div class=\"automation-body-wrapper\"\n" +
    "  ng-controller=\"AutomationStartRecordingController\"\n" +
    "  ng-init=\"init()\">\n" +
    "    <button id=\"start-tab-recording\"\n" +
    "      ng-click=\"startTabRecording()\">Record Tab</button>\n" +
    "    <button id=\"start-desktop-recording\"\n" +
    "      ng-click=\"startDesktopRecording()\">Record Desktop</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/automation/automation-stop-recording/automation-stop-recording.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/automation/automation-stop-recording/automation-stop-recording.html",
    "<div class=\"automation-body-wrapper \"\n" +
    "  ng-controller=\"AutomationStopRecordingController\"\n" +
    "  ng-init=\"init()\">\n" +
    "    <button id=\"stop-recording\"\n" +
    "      ng-click=\"stopRecording()\">Stop Recording</button>\n" +
    "    <table class=\"rec-stats\">\n" +
    "      <tr>\n" +
    "        <td>Status</td>\n" +
    "        <td><span id=\"recording-status\">{{ getCurrentRecording().state }}</span></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Upload Progress</td>\n" +
    "        <td><span id=\"recording-upload-progress\">{{ getCurrentRecording().uploadProgress }}</span></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Viewer URL</td>\n" +
    "          <td><span id=\"recording-viewer-url\"><a href=\"{{ getCurrentRecording().publicUrl }}\">{{ getCurrentRecording().publicUrl }}</a></span></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Creator URL</td>\n" +
    "          <td><span id=\"recording-creator-url\"><a href=\"{{ getCurrentRecording().shareUrl }}\">{{ getCurrentRecording().shareUrl }}</a></span></td>\n" +
    "      </tr>\n" +
    "      <tr>\n" +
    "        <td>Thumbnail URL</td>\n" +
    "          <td><span id=\"recording-thumbnail-url\"><a href=\"{{ getCurrentRecording().screenThumbnailUrl }}\">{{ getCurrentRecording().screenThumbnailUrl }}</a></span></td>\n" +
    "      </tr>\n" +
    "    </table>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/jira-addon-recording-controls-v2/jira-addon-recording-controls-v2.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/jira-addon-recording-controls-v2/jira-addon-recording-controls-v2.html",
    "<div class=\"hyfyext-jira-addon-recording-controls-v2\" ng-controller=\"JiraAddonRecordingControlsV2Controller\" ng-init=\"init()\">\n" +
    "	<div class=\"recording-status-wrapper\">\n" +
    "        <div class=\"recording-status\" ng-if=\"!isRecordingInProgress() && !shouldShowCountdown()\">\n" +
    "            <span class=\"text\">Create a new HYFY screen recording.</span>\n" +
    "        </div>\n" +
    "        <div class=\"recording-status countdown\" ng-if=\"isRecordingInProgress() && isJiraAddOnRecording() && shouldShowCountdown()\">\n" +
    "            <span class=\"large-text\">{{getCountdownTimer()}}</span>&nbsp;<span class=\"text\">Preparing to record</span>\n" +
    "        </div>\n" +
    "        <div class=\"recording-status in-progress\" ng-if=\"isRecordingInProgress() && isJiraAddOnRecording() && !shouldShowCountdown()\">\n" +
    "            <span class=\"large-text\">{{getRemainingTimeDisplay()}}</span>&nbsp;<span class=\"text\">Recording in progress...</span>\n" +
    "        </div>\n" +
    "        <div class=\"recording-status in-progress\" ng-if=\"isRecordingInProgress() && !isJiraAddOnRecording()\">\n" +
    "            <span class=\"text\">Recording in progress...</span>\n" +
    "        </div>\n" +
    "	</div>\n" +
    "	<div class=\"button-container\">\n" +
    "        <div class=\"button-wrapper start-control disabled\" ng-if=\"isRecordingInProgress() && !isJiraAddOnRecording()\">\n" +
    "            Start recording\n" +
    "        </div>\n" +
    "        <div class=\"button-wrapper start-control disabled\" ng-if=\"isRecordingInProgress() && isJiraAddOnRecording() && shouldShowCountdown()\">\n" +
    "            Start recording\n" +
    "        </div>\n" +
    "        <div class=\"button-wrapper start-control\" ng-click=\"startRecording()\" ng-if=\"!isRecordingInProgress() && !shouldShowCountdown()\">\n" +
    "            Start recording\n" +
    "        </div>\n" +
    "        <div class=\"button-wrapper stop-control\" ng-click=\"stopRecording()\" ng-if=\"isRecordingInProgress() && isJiraAddOnRecording() && !shouldShowCountdown()\">\n" +
    "            Stop recording\n" +
    "        </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/jira-addon-recording-controls/jira-addon-recording-controls.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/jira-addon-recording-controls/jira-addon-recording-controls.html",
    "<div class=\"hyfyext-jira-addon-recording-controls\" ng-controller=\"JiraAddonRecordingControlsController\" ng-init=\"init()\">\n" +
    "	<div class=\"record-wrapper start-control disabled\" ng-if=\"isRecordingInProgress() && !isJiraAddOnRecording()\">\n" +
    "		<div class=\"record-inner-wrapper\">\n" +
    "			<div class=\"record-icon\"></div>\n" +
    "			<div class=\"record-text\">\n" +
    "				START RECORDING\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"record-wrapper start-control\" ng-click=\"startRecording()\" ng-if=\"!isRecordingInProgress() && !shouldShowCountdown()\">\n" +
    "		<div class=\"record-inner-wrapper\">\n" +
    "			<div class=\"record-icon\"></div>\n" +
    "			<div class=\"record-text\">\n" +
    "				START RECORDING\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"record-wrapper countdown-control\" ng-click=\"discardRecording()\" ng-if=\"isRecordingInProgress && isJiraAddOnRecording && shouldShowCountdown()\">\n" +
    "		<div class=\"record-inner-wrapper\">\n" +
    "			<div class=\"record-countdown\">{{getCountdownTimer()}}</div>\n" +
    "			<div class=\"record-text\">\n" +
    "				START RECORDING\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"record-wrapper stop-control\" ng-click=\"stopRecording()\" ng-if=\"isRecordingInProgress() && isJiraAddOnRecording && !shouldShowCountdown()\">\n" +
    "		<div class=\"record-inner-wrapper\">\n" +
    "			<div class=\"record-icon\"></div>\n" +
    "			<div class=\"record-text\">\n" +
    "				STOP RECORDING\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/notifications/notifications.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/notifications/notifications.html",
    "<div class=\"hyfyext-notifications\" ng-controller=\"NotificationsController\" ng-init=\"init()\">\n" +
    "	<div class=\"notification animate-repeat\" ng-repeat=\"notification in currentNotifications\">\n" +
    "		<widget path=\"widgets/toast-notification/toast-notification.html\" data=\"{notification: notification}\"></widget>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/notifications/toast-notification/toast-notification.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/notifications/toast-notification/toast-notification.html",
    "<div class=\"hyfyext-toast-notification\" ng-controller=\"ToastNotificationController\" ng-init=\"init()\">\n" +
    "    <div class=\"toast-content\">\n" +
    "        <span class=\"toast-message\" ng-bind-html=\"notificationData.message\"></span>\n" +
    "        <a class=\"toast-action waves-effect waves-light\" ng-if=\"notificationData.actionText\" ng-click=\"triggerAction()\" ng-bind-html=\"notificationData.actionText\"></a>\n" +
    "        <i class=\"toast-close material-icons\" ng-click=\"cancel()\">close</i>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/popup/facecam-mic-error/facecam-mic-error.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/popup/facecam-mic-error/facecam-mic-error.html",
    "<div class=\"hyfyext-facecam-mic-error\" ng-controller=\"FacecamMicErrorController\" ng-init=\"init()\">\n" +
    "    <div class=\"mic-access mic-access-height\" ng-show=\"!hasFacecamPermission && !hasAudioPermission\">\n" +
    "        <i class=\"material-icons error-icon\">error</i>\n" +
    "        <div class=\"audio-access-link\">\n" +
    "            HYFY needs permission to use your camera and mic. <a href=\"#/audio-access\" target=\"_blank\"> Allow access</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"mic-access mic-access-height\" ng-show=\"hasFacecamPermission && !hasAudioPermission\">\n" +
    "        <i class=\"material-icons error-icon\">error</i>\n" +
    "        <div class=\"audio-access-link\">\n" +
    "                HYFY needs permission to use your mic. <a href=\"#/audio-access\" target=\"_blank\"> Allow access</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"mic-access mic-access-height\" ng-show=\"!hasFacecamPermission && hasAudioPermission\">\n" +
    "        <i class=\"material-icons error-icon\">error</i>\n" +
    "        <div class=\"audio-access-link\">\n" +
    "                HYFY needs permission to use your camera. <a href=\"#/audio-access\" target=\"_blank\">Allow access</a>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/popup/nacl-plugin-disabled/nacl-plugin-disabled.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/popup/nacl-plugin-disabled/nacl-plugin-disabled.html",
    "<div class=\"hyfyext-nacl-plugin-disabled\" ng-controller=\"NaclPluginDisabledController\">\n" +
    "	<div class=\"info\">\n" +
    "		<div class=\"text\">Please Enable \"Native Client\" in <a class=\"plugin-url\" href=\"\" ng-click=\"openChromePluginsUrl()\">chrome://plugins</a></div>\n" +
    "		<button class=\"btn hyfy-button show-me-btn\" ng-click=\"openShowcaseUrl()\">SHOW ME HOW</button>\n" +
    "	</div>\n" +
    "\n" +
    "	<img class=\"showcase-image\" src=\"/images/nacl-plugin-showcase.png\"></img>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/popup/popup.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/popup/popup.html",
    "<div class=\"hyfyext-popup\" ng-controller=\"PopupController\" ng-init=\"init()\">\n" +
    "	<div class=\"content-wrapper\">\n" +
    "		<!--<widget path=\"widgets/processing-spinner/processing-spinner.html\" ng-show=\"!isInitialized()\"></widget>-->\n" +
    "		<div class=\"hyfy-header highlight\" ng-show=\"popupContentContainer\" ng-class=\"{'pro': !isTrialSubscription() && !isFreeSubscription()}\">\n" +
    "			<div class=\"header-wrapper\">\n" +
    "				<div ng-if=\"isTrialSubscription() || isFreeSubscription()\">\n" +
    "					<img class=\"hyfy-img-free\" src=\"/images/hyfy-logo-grey.png\" />\n" +
    "					<span class=\"hyfy-subscription\">{{getUserSubscriptionName()}}</span>\n" +
    "					<div class=\"hyfy-subscription-msg\">\n" +
    "						<div ng-if=\"isTrialSubscriptionActive()\">\n" +
    "							<strong>{{getTrialSubscriptionExpiresInDays()}}</strong> &nbsp;\n" +
    "							<ng-pluralize count=\"getTrialSubscriptionExpiresInDays()\" when=\"{ '1': 'day', 'other': 'days'}\"></ng-pluralize>\n" +
    "							&nbsp;remaining, <a href=\"javascript:void(0);\" ng-click=\"openUpgradeUrl()\">upgrade now!</a>\n" +
    "						</div>\n" +
    "						<!-- <div ng-if=\"isTrialSubscriptionExpired()\">\n" +
    "				        	 <strong>YOUR TRIAL PERIOD HAS ENDED.</strong><br/>\n" +
    "				        	<span class=\"smaller\">For unlimited video viewing for your customers, <a href=\"javascript:void(0);\" ng-click=\"openUpgradeUrl()\">upgrade now!</a></span>\n" +
    "			        	</div> -->\n" +
    "						<div ng-if=\"isFreeSubscription()\">\n" +
    "							To give your customers unlimited<br>video views, <a href=\"javascript:void(0);\" ng-click=\"openUpgradeUrl()\">upgrade now!</a>\n" +
    "						</div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "				<div ng-if=\"!isTrialSubscription() && !isFreeSubscription()  && userSubscriptionData\">\n" +
    "					<img class=\"hyfy-img-pro\" src=\"/images/dark@2x.png\" />\n" +
    "					<!-- <span class=\"hyfy-subscription\">{{getUserSubscriptionName()}}</span> -->\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"popup-content-container\" ng-show=\"popupContentContainer\">\n" +
    "			<hyfyext-recording-starter></hyfyext-recording-starter>\n" +
    "		</div>\n" +
    "		<div class=\"recording-setting-container\" ng-hide=\"backToMenuWrapper\">\n" +
    "			<hyfyext-recording-setting></hyfyext-recording-setting>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"footer\">\n" +
    "		<div class=\"setting-icon\" ng-show=\"settingIcon\" ng-click=\"showSettingPopup()\">\n" +
    "			<div class=\"setting-idle-img\">\n" +
    "				<img src=\"images/settingidle@2x.png\" class=\"setting-icon-size\">\n" +
    "			</div>\n" +
    "			<div class=\"setting-hover-img\">\n" +
    "				<img src=\"images/settinghover@2x.png\" class=\"setting-icon-size\">\n" +
    "			</div>\n" +
    "			<div class=\"setting-pressed-img\">\n" +
    "				<img src=\"images/settingpressed@2x.png\" class=\"setting-icon-size\">\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"back-to-menu-wrapper\" ng-hide=\"backToMenuWrapper\" ng-click=\"showMainMenu()\">\n" +
    "			<div class=\"back-icon-wrapper\">\n" +
    "				<div class=\"back-idle-img\">\n" +
    "					<img src=\"images/backidle@2x.png\" class=\"back-icon-size\">\n" +
    "				</div>\n" +
    "				<div class=\"back-hover-img\">\n" +
    "					<img src=\"images/backhover@2x.png\" class=\"back-icon-size\">\n" +
    "				</div>\n" +
    "				<div class=\"back-pressed-img\">\n" +
    "					<img src=\"images/backpressed@2x.png\" class=\"back-icon-size\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"back-to-menu-text\">\n" +
    "				Back\n" +
    "			</div>\n" +
    "		</div>\n" +
    "		<div class=\"account-library-wrapper\" ng-controller=\"UserAccountController\">\n" +
    "			<div class=\"account-icon\" ng-click=\"openAccountDetailsUrl()\">\n" +
    "				<div>\n" +
    "					<img src=\"images/profile-idle@2x.png\" class=\"profile-idle-img\">\n" +
    "				</div>\n" +
    "				<div>\n" +
    "					<img src=\"images/profile-hover@2x.png\" class=\"profile-hover-img\">\n" +
    "				</div>\n" +
    "				<div>\n" +
    "					<img src=\"images/profile-pressed@2x.png\" class=\"profile-pressed-img\">\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<div class=\"library-icon\">\n" +
    "				<div ng-class=\"{'pro-footer-option': !isTrialSubscription() && !isFreeSubscription()}\" ng-click=\"openLibrary()\">\n" +
    "					<div class=\"idle-img\">\n" +
    "						<img src=\"/images/libraryidle@2x.png\" class=\"library-icon-font\">\n" +
    "					</div>\n" +
    "					<div class=\"hover-img\">\n" +
    "						<img src=\"/images/libraryhover@2x.png\" class=\"library-icon-font\">\n" +
    "					</div>\n" +
    "					<div class=\"pressed-img\">\n" +
    "						<img src=\"/images/librarypressed@2x.png\" class=\"library-icon-font\">\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "	<div class=\"user-tips-container\" ng-hide=\"userTipsContainer\">\n" +
    "		<hyfyext-user-tips></hyfyext-user-tips>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/popup/promotions/promotions.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/popup/promotions/promotions.html",
    "<div class=\"hyfyext-promotions\" ng-controller=\"PromotionsController\" ng-init=\"init()\" ng-click=\"openUrl(promotion.url)\">\n" +
    "	<!--<img class=\"bg-stars\" src=\"/images/bg-stars.png\"></img>-->\n" +
    "	<span class=\"promotion-text\" ng-if=\"promotion.text\">\n" +
    "	    <span ng-bind-html=\"promotion.text\"></span>\n" +
    "	    <span class=\"arrows\">\n" +
    "            <i class=\"material-icons icon\">chevron_right</i><i class=\"material-icons icon\">chevron_right</i>\n" +
    "	    </span>\n" +
    "	</span>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/popup/recording-setting/recording-setting.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/popup/recording-setting/recording-setting.html",
    "<div class=\"hyfyext-recording-setting\" ng-controller=\"RecordingSettingController\" ng-init=\"init()\">\n" +
    "    <div class=\"recording-setting-header\">\n" +
    "        RECORDING SETTINGS\n" +
    "    </div>\n" +
    "    <div class=\"audio-facecam-wrapper\">\n" +
    "        <div class=\"audio-wrapper\">\n" +
    "            <div class=\"audio-switch-wrapper\">\n" +
    "                <div class=\"include-audio\">\n" +
    "                    Include audio\n" +
    "                </div>\n" +
    "                <div class=\"cntr\" ng-class=\"{'controll-disabled':!hasAudioPermission}\">\n" +
    "                    <div class=\"rowa press\">\n" +
    "                        <input type=\"checkbox\" id=\"audio-unchecked\" class=\"cbx hidden\" ng-click=\"toggleAudio()\" ng-checked=\"recordAudio\"/>\n" +
    "                        <label for=\"audio-unchecked\" class=\"lbl\"></label>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "\n" +
    "\n" +
    "\n" +
    "            <div class=\"microphone-type\" ng-class=\"{'controll-disabled': !recordAudio || !hasAudioPermission, 'bg-color':audioSources.length == 1, 'bg-pointer':!isAudioDeviceChoiceAvailable()}\" ng-controller=\"CollapsibleController\" ng-init=\"initCollapsible()\" ng-click=\"hasAudioPermission && recordAudio && toggle()\" ng-show=\"hasAudioPermission\">\n" +
    "              <div class=\"microphone-type-wrapper\" ng-class=\"{'bg-width':audioSources.length == 1}\">\n" +
    "                    {{selectedAudioDevice.label || ''}}\n" +
    "              </div>\n" +
    "                <div class=\"audio-source-wrap\" ng-if=\"isAudioDeviceChoiceAvailable()\">\n" +
    "                    <i class=\"material-icons audio-source-select\">arrow_drop_down</i>\n" +
    "                    <div class=\"audio-source\" ng-show=\"isExpanded()\" ng-click=\"toggle()\">\n" +
    "                        <div class=\"source\" ng-repeat=\"device in audioSources\" ng-click=\"changeAudioDevice(device);collapse();\">\n" +
    "                            <i class=\"material-icons selected-icon\" ng-class=\"{'visible': isSelectedAudioDevice(device)}\">check</i>{{device.label}}\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "\n" +
    "        <div class=\"facecam-wrapper\">\n" +
    "          <div class=\"facecam-switch-wrapper\">\n" +
    "            <div class=\"include-facecam\">\n" +
    "                Include facecam\n" +
    "            </div>\n" +
    "            <div class=\"control\"  ng-class=\"{'controll-disabled':!hasFacecamPermission}\">\n" +
    "                <div class=\"rowa press\">\n" +
    "                    <input type=\"checkbox\" id=\"facecam-unchecked\" class=\"cbx hidden\" ng-click=\"toggleFacecam()\" ng-checked=\"recordFacecam\"/>\n" +
    "                    <label for=\"facecam-unchecked\" class=\"lbl\"></label>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "          </div>\n" +
    "            <div class=\"facecam-type-wrapper\" ng-class=\"{'controll-disabled': !recordFacecam || !hasFacecamPermission, 'bg-color':facecamSources.length == 1, 'bg-pointer':!isFacecamDeviceChoiceAvailable()}\" ng-controller=\"CollapsibleController\" ng-init=\"initCollapsible()\" ng-click=\"hasFacecamPermission && recordFacecam && toggle()\" ng-show=\"hasFacecamPermission\">\n" +
    "                <div class=\"default-facecam\" ng-class=\"{'bg-width':facecamSources.length == 1}\">\n" +
    "                    {{selectedFacecamDevice.label || ''}}\n" +
    "                </div>\n" +
    "                <div class=\"facecam-type\">\n" +
    "                    <div class=\"video-source-wrap\">\n" +
    "                      <i class=\"material-icons video-source-select\"  ng-if=\"isFacecamDeviceChoiceAvailable()\">arrow_drop_down</i>\n" +
    "                        <div class=\"video-source\" ng-show=\"isExpanded()\" ng-click=\"toggle()\">\n" +
    "                            <div class=\"source\" ng-repeat=\"device in facecamSources\" ng-click=\"changeFacecamDevice(device);collapse();\">\n" +
    "                                <i class=\"material-icons selected-icon\" ng-class=\"{'visible': isSelectedFacecamDevice(device)}\">check</i>{{device.label}}\n" +
    "                            </div>\n" +
    "                        </div>\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <facecam-mic-error></facecam-mic-error>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/popup/recording-starter/recording-starter.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/popup/recording-starter/recording-starter.html",
    "<div class=\"hyfyext-recording-starter\" ng-controller=\"RecordingStarterController\" ng-init=\"init()\">\n" +
    "    <div class=\"record-wrapper\" ng-click=\"startRecording()\">\n" +
    "          <img src=\"/images/start-recording@2x.png\" class=\"record-icon\">\n" +
    "        <div class=\"record-text\">\n" +
    "            START RECORDING\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <div class=\"hyfyext-facecam-mic-error\">\n" +
    "        <div class=\"mic-access mic-access-height\" ng-if=\"audioErrorFound\">\n" +
    "            <i class=\"material-icons error-icon\">error</i>\n" +
    "            <div class=\"audio-access-link\">\n" +
    "                HYFY can't detect sound from your mic. Check <a target=\"_blank\" href=\"https://www.hyfy.io/microphone\">settings</a> or restart Chrome.\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "    <facecam-mic-error></facecam-mic-error>\n" +
    "    <div class=\"body-tips\" ng-if=\"recordFacecam && !audioErrorFound && !viewersWantToSeeYourFaceMessageShown\">\n" +
    "  		<div class=\"light-icon\">\n" +
    "  			<i class=\"material-icons\">wb_sunny</i>\n" +
    "  		</div>\n" +
    "  		<div class=\"light-text\">\n" +
    "  			Viewers want to see your face, get near a natural light source for best results.\n" +
    "  		</div>\n" +
    "  	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/popup/user-account/user-account.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/popup/user-account/user-account.html",
    "<div class=\"hyfyext-user-account\" ng-controller=\"UserAccountController\" ng-init=\"init()\">\n" +
    "	<div class=\"user-dropdown\" ng-controller=\"CollapsibleController\" ng-init=\"initCollapsible()\">\n" +
    "		<div class=\"user-summary\" ng-click=\"toggle()\">\n" +
    "		    <span class=\"user-img\">\n" +
    "		        <img ng-src=\"{{ getUserImageUrl() }}\">\n" +
    "		    </span>\n" +
    "		    <span class=\"user-name\" ng-bind-html=\"getUserName()\">\n" +
    "		    </span>\n" +
    "		    <span class=\"material-icons icon-down-arrow\">keyboard_arrow_down</span>\n" +
    "		</div>\n" +
    "	    <div class=\"account-links\" ng-show=\"isExpanded()\">\n" +
    "	    	<div class=\"link\">\n" +
    "	    		<a ng-href=\"{{gettingStartedUrl}}\" ng-click=\"openGettingStartedUrl()\">GETTING STARTED</a>\n" +
    "	    	</div>\n" +
    "	    	<div class=\"link\">\n" +
    "	    		<a ng-href=\"{{accountDetailsUrl}}\" ng-click=\"openAccountDetailsUrl()\">VIEW ACCOUNT</a>\n" +
    "	    	</div>\n" +
    "            <div class=\"link\">\n" +
    "                <a ng-href=\"{{supportUrl}}\" ng-click=\"openSupportUrl()\">HELP/SUPPORT</a>\n" +
    "            </div>\n" +
    "	    	<div class=\"link\">\n" +
    "	    		<a href=\"javascript:void()\" ng-click=\"logout()\">SIGN OUT</a>\n" +
    "	    	</div>\n" +
    "	    </div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/popup/user-tips/user-tips.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/popup/user-tips/user-tips.html",
    "<div class=\"user-tips-wrappers\" ng-controller=\"UserTipsController\">\n" +
    "    <div class=\"user-tips-wrapper\" ng-class=\"{'userTipsHidden':isUserTipsHidden}\">\n" +
    "        <div class=\"tip {{currentTip.id}}\">\n" +
    "            <div class=\"tips-image\">\n" +
    "                <img ng-src=\"{{currentTip.image}}\" ng-class=\"{'welcome-tip' : isCurrentTipFirst()}\">\n" +
    "            </div>\n" +
    "            <i class=\"material-icons left-arrow\" ng-if=\"!isCurrentTipFirst() && !isCurrentTipSecond()\" ng-click=\"showPreviousTip()\">keyboard_arrow_left</i>\n" +
    "            <i class=\"material-icons right-arrow\" ng-if=\"!isCurrentTipLast() && !isCurrentTipFirst()\" ng-click=\"showNextTip()\">keyboard_arrow_right</i>\n" +
    "            <div class=\"tips-text\" ng-bind-html=\"currentTip.html\">\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"first-tip-footer\" ng-if=\"isCurrentTipFirst()\">\n" +
    "            <button class=\"first-tips-footer-text\" ng-click=\"showNextTip()\">\n" +
    "              LET'S GET STARTED!\n" +
    "            </botton>\n" +
    "        </div>\n" +
    "        <div class=\"tips-footer\" ng-if=\"!isCurrentTipFirst()\">\n" +
    "            <button class=\"tips-footer-text\" ng-click=\"closeTips()\">\n" +
    "                OK, GOT IT!\n" +
    "            </botton>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "<div>\n" +
    "");
}]);

angular.module("components/processing-spinner/processing-spinner.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/processing-spinner/processing-spinner.html",
    "<div class=\"hyfyext-processing-spinner\">\n" +
    "	<div class=\"processing-wrapper\">\n" +
    "		<div class=\"preloader-wrapper active spinner processing-spinner\">\n" +
    "			<div class=\"spinner-layer processing-spinner-layer\">\n" +
    "				<div class=\"circle-clipper processing-spinner-circle left\">\n" +
    "					<div class=\"circle\"></div>\n" +
    "				</div>\n" +
    "				<div class=\"gap-patch\">\n" +
    "					<div class=\"circle\"></div>\n" +
    "				</div>\n" +
    "				<div class=\"circle-clipper right\">\n" +
    "					<div class=\"circle\"></div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "		</div>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/recording-controls/recording-controls.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/recording-controls/recording-controls.html",
    "<div ng-controller=\"RecordingControlsController\" class=\"hyfyext-recording-controls\" ng-init=\"init()\">\n" +
    "    <div class=\"content-wrapper\" ng-class=\"{'facecam-invisible-footer': !facecamVisible}\">\n" +
    "        <div class=\"video-cam-container\" hyfy-disable-context-menu>\n" +
    "            <video ng-if=\"facecamVisible\" ng-class=\"{'disable-video' : isRecordingCompleted()}\" class=\"video-cam\" id=\"facecam-video\">\n" +
    "            </video>\n" +
    "            <div ng-if=\"isRecordingCompleted()\" class=\"preview-share-btn\" ng-click=\"reviewAndShare()\">\n" +
    "                <i class=\"material-icons\">share</i>\n" +
    "                <div class=\"preview-share-content\">\n" +
    "                    PREVIEW & SHARE\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div ng-if=\"isRecordingCompleted()\" class=\"re-record-btn\" ng-click=\"discardRecording()\">\n" +
    "                <i class=\"material-icons\">replay</i>\n" +
    "                <div class=\"re-record-content\">\n" +
    "                    RE-RECORD\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"footer\" ng-class=\"{'recording-completed-footer' :isRecordingCompleted() && facecamVisible}\">\n" +
    "            <!-- <div class=\"replay-share-icon\" ng-if=\"!facecamVisible && isRecordingCompleted()\">\n" +
    "                <i class=\"material-icons\" uib-tooltip-html=\"Re-record\" tooltip-placement=\"right\" tooltip-class=\"simple\" ng-click=\"discardRecording()\">replay</i>\n" +
    "                <i class=\"material-icons\" uib-tooltip-html=\"Preview & share\" tooltip-placement=\"right\" tooltip-class=\"simple\" ng-click=\"reviewAndShare()\">share</i>\n" +
    "            </div> -->\n" +
    "            <div class=\"countdown-container\" ng-if=\"isRecordingStarted()\">\n" +
    "                <div class=\"countdown-value\">\n" +
    "                    {{countDown}}\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"recording-progress-stop-wrapper\" ng-if=\"isRecordingInProgress()\" ng-click=\"stopRecording()\">\n" +
    "                <div class=\"spinner-eff spinner-eff-3\" >\n" +
    "                    <div class=\"circle circle-1\"></div>\n" +
    "                    <div class=\"circle circle-2\"></div>\n" +
    "                    <div class=\"circle circle-3\"></div>\n" +
    "                </div>\n" +
    "                <div class=\"cam-finish-btn\" ng-if=\"isRecordingInProgress()\">\n" +
    "                    <div class=\"square\">\n" +
    "                    </div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"container\">\n" +
    "                <div class=\"video-duration\" ng-if=\"isRecordingInProgress()\">\n" +
    "                    {{timerValue}}\n" +
    "                </div>\n" +
    "                <div class=\"hyfy-logo-container\" ng-if=\"isRecordingCompleted()\">\n" +
    "                    <img class=\"hyfy-img\" src=\"/images/hyfy-logo-pink_old.png\" />\n" +
    "                </div>\n" +
    "                <!-- <div class=\"video-duration\" ng-if=\"isRecordingCompleted() && !facecamVisible\">\n" +
    "                    {{timerValue}}\n" +
    "                </div> -->\n" +
    "                <div class=\"audio-meter\" ng-controller=\"RecordingStarterController\" ng-if=\"isRecordingStarted() && audioVisible\" ng-init=\"init()\">\n" +
    "                    <div ng-style=\"{width : soundLevel+'%'}\" class=\"base\" ng-class=\"{recordingOff : !recordAudio}\"></div>\n" +
    "                    <div ng-class-odd=\"'odd'\" ng-class-even=\"'even'\" class=\"bars\" ng-repeat=\"i in barsCount(12) track by $index\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/recording-finished/recording-finished.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/recording-finished/recording-finished.html",
    "<div class=\"recording-finished-container\" ng-controller=\"RecordingFinishedController\" ng-init=\"init()\">\n" +
    "    <div class=\"recording-finished-header\">\n" +
    "        RECORDING FINISHED!\n" +
    "    </div>\n" +
    "    <div class=\"recording-finished-buttons\">\n" +
    "        <div class=\"preview-share\" ng-click=\"previewAndShareVideo()\">\n" +
    "            <div class=\"share\">\n" +
    "              <i class=\"material-icons\">share</i>\n" +
    "            </div>\n" +
    "            <div class=\"preview\">\n" +
    "              PREVIEW & SHARE\n" +
    "            </div>\n" +
    "        </div>\n" +
    "        <div class=\"re-record\" ng-click=\"reRecordVideo()\">\n" +
    "            <div class=\"re-record-icon\">\n" +
    "              <i class=\"material-icons\">replay</i>\n" +
    "            </div>\n" +
    "            <div class=\"re-record-text\">\n" +
    "              RE-RECORD\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/recording-status/recording-error/recording-error.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/recording-status/recording-error/recording-error.html",
    "<div class=\"hyfyext-recording-error\">\n" +
    "    <div class=\"main-wrapper recording-error-content\">\n" +
    "        <div class=\"error-icon\">\n" +
    "            <i class=\"material-icons icon\">error</i>\n" +
    "        </div>\n" +
    "        <h3>{{recordingError.HEADING}}</h3>\n" +
    "        <p ng-bind-html=\"recordingError.MESSAGE\"></p>\n" +
    "    </div>\n" +
    "    <div class=\"footer-wrapper clearfix\">\n" +
    "        <div class=\"footer-links\">\n" +
    "            <div class=\"footer-links-wrapper\">\n" +
    "                <div class=\"footer-link-wrapper save-local\">\n" +
    "                    <a class=\"footer-link\" ng-click=\"close()\">\n" +
    "                        <button class=\"btn hyfy-btn\">\n" +
    "                            OK\n" +
    "                        </button>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/recording-status/recording-status.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/recording-status/recording-status.html",
    "<div class=\"hyfyext-recording-status bg-gradient\">\n" +
    "	<hyfyext-processing-spinner class=\"loader\" ng-if=\"!isUploadErrorVisible() && !isRecordingErrorVisible() && !isSaveLocalVisible() && !isRecoverRecordingVisible()\"></hyfyext-processing-spinner>\n" +
    "	<div class=\"modal hyfy-modal\">\n" +
    "        <div class=\"modal-content\">\n" +
    "            <div class=\"modal-header\">\n" +
    "                <h1 class=\"page-title\" ng-bind-html=\"recording.title\"></h1>\n" +
    "                <span class=\"duration\" ng-if=\"recording.duration\">({{ recording.duration | secondsToTimeDisplay | date:'mm:ss' }})</span>\n" +
    "                <div class=\"share-select-tab\">\n" +
    "                    <ul class=\"tabs\" style=\"width: 100%;\">\n" +
    "                        <li class=\"tab fixed active\">\n" +
    "                            <a class=\"tab-anchor active\" href=\"#link-tab\"> <img src=\"/images/link-icon.png\"> <span>LINK PRIVACY</span> </a>\n" +
    "                        </li>\n" +
    "                        <li class=\"tab\">\n" +
    "                            <a class=\"tab-anchor\" href=\"#hipchat-tab\"> <img src=\"/images/hipchat-logo-white-40x40.png\"> <span class=\"tab-title\">HipChat</span> </a>\n" +
    "                        </li>\n" +
    "                        <li class=\"tab\">\n" +
    "                            <a class=\"tab-anchor jira-tab\" href=\"#jira-tab\"> <img class=\"icon-jira\" src=\"/images/jira-logo-white-26x35.png\"> <span class=\"tab-title\"> JIRA/SERVICE DESK </span> </a>\n" +
    "                        </li>\n" +
    "                        <li class=\"tab\">\n" +
    "                            <a class=\"tab-anchor\" href=\"#slack-tab\"> <img src=\"/images/slack-monochrome-white-40x40.png\"> <span class=\"tab-title\"> Slack </span> </a>\n" +
    "                        </li>\n" +
    "                        <li class=\"tab\">\n" +
    "                            <a class=\"tab-anchor\" href=\"#social-tab\"> <i class=\"material-icons icon\">share</i> <span class=\"tab-title\"> Social </span> </a>\n" +
    "                        </li>\n" +
    "                    </ul>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "            <div class=\"modal-body clearfix share-dialog\">\n" +
    "                <div class=\"tabcontent-wrapper \">\n" +
    "					<div ui-view=\"upload-error\" ng-if=\"isUploadErrorVisible()\"></div>\n" +
    "					<div ui-view=\"recording-error\" ng-if=\"isRecordingErrorVisible()\"></div>\n" +
    "					<div ui-view=\"save-local\" ng-if=\"isSaveLocalVisible()\"></div>\n" +
    "					<div ui-view=\"recover-recording\" ng-if=\"isRecoverRecordingVisible()\"></div>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/recording-status/recover-recording/recover-recording.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/recording-status/recover-recording/recover-recording.html",
    "<div class=\"hyfyext-save-local\">\n" +
    "    <div class=\"main-wrapper save-local-content\">\n" +
    "        <div class=\"error-icon\">\n" +
    "            <i class=\"material-icons icon\">error</i>\n" +
    "        </div>\n" +
    "        <h3>\n" +
    "            HYFY Recording Recovered.\n" +
    "        </h3>\n" +
    "        <p>We found a recording that was not completely uploaded to your library. Please download or discard the recording.</p>\n" +
    "    </div>\n" +
    "    <div class=\"footer-wrapper clearfix\">\n" +
    "        <div class=\"footer-links\">\n" +
    "            <div class=\"footer-links-wrapper\">\n" +
    "                <div class=\"footer-link-wrapper save-local\">\n" +
    "                    <a class=\"footer-link\" ng-click=\"saveLocalVideo()\">\n" +
    "                        <button class=\"btn hyfy-btn\">\n" +
    "                            SAVE VIDEO TO MY COMPUTER\n" +
    "                        </button>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"footer-link-wrapper video-delete\">\n" +
    "                    <a class=\"footer-link\" ng-click=\"discardRecording()\">\n" +
    "                        <img class=\"delete-icon\" src=\"/images/delete_icon.png\"> <span class=\"link-title\">DELETE</span>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/recording-status/save-local/save-local.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/recording-status/save-local/save-local.html",
    "<div class=\"hyfyext-save-local\">\n" +
    "    <div class=\"main-wrapper save-local-content\">\n" +
    "        <div class=\"error-icon\">\n" +
    "            <i class=\"material-icons icon\">error</i>\n" +
    "        </div>\n" +
    "        <h3>\n" +
    "            HYFY Download.\n" +
    "        </h3>\n" +
    "        <p>Your file is being processed and will soon be ready for download.</p>\n" +
    "    </div>\n" +
    "    <div class=\"footer-wrapper clearfix\">\n" +
    "        <div class=\"footer-links\">\n" +
    "            <div class=\"footer-links-wrapper\">\n" +
    "                <div class=\"footer-link-wrapper save-local\">\n" +
    "                    <a class=\"footer-link\" ng-click=\"saveLocalVideo()\">\n" +
    "                        <button class=\"btn hyfy-btn\" ng-disabled=\"!isSaveButtonEnabled()\">\n" +
    "                            SAVE VIDEO TO MY COMPUTER\n" +
    "                        </button>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"footer-link-wrapper video-delete\">\n" +
    "                    <a class=\"footer-link\" ng-click=\"discardRecording()\">\n" +
    "                        <img class=\"delete-icon\" src=\"/images/delete_icon.png\"> <span class=\"link-title\">DELETE</span>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/recording-status/share-modal/share-modal.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/recording-status/share-modal/share-modal.html",
    "<iframe class=\"hyfyext-share-modal-iframe\" ng-src=\"{{recording.shareUrl}}\" scrolling=\"no\" ng-if=\"isInitialized()\"></iframe>\n" +
    "");
}]);

angular.module("components/recording-status/upload-error/upload-error.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/recording-status/upload-error/upload-error.html",
    "<div class=\"hyfyext-upload-error\">\n" +
    "    <div class=\"main-wrapper upload-error-content\">\n" +
    "        <div class=\"error-icon\">\n" +
    "            <i class=\"material-icons icon\">error</i>\n" +
    "        </div>\n" +
    "        <h3>\n" +
    "            HYFY was unable to upload your video to the HYFY video library.\n" +
    "        </h3>\n" +
    "        <p>We recommend you save the video file to your computer to avoid losing it.</p>\n" +
    "    </div>\n" +
    "    <div class=\"footer-wrapper clearfix\">\n" +
    "        <div class=\"footer-links\">\n" +
    "            <div class=\"footer-links-wrapper\">\n" +
    "                <div class=\"footer-link-wrapper save-local\">\n" +
    "                    <a class=\"footer-link\" ng-click=\"saveLocalVideo()\">\n" +
    "                        <button class=\"btn hyfy-btn\" ng-disabled=\"!isSaveButtonEnabled()\">\n" +
    "                            SAVE VIDEO TO MY COMPUTER\n" +
    "                        </button>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "                <div class=\"footer-link-wrapper retry-upload\">\n" +
    "                    <a class=\"footer-link\" ng-click=\"retryUpload()\"> <i class=\"material-icons icon\">refresh</i> <span class=\"link-title\">RETRY UPLOAD</span> </a>\n" +
    "                </div>\n" +
    "                <div class=\"footer-link-wrapper video-delete\">\n" +
    "                    <a class=\"footer-link\" ng-click=\"discardRecording()\">\n" +
    "                        <img class=\"delete-icon\" src=\"/images/delete_icon.png\"> <span class=\"link-title\">DELETE</span>\n" +
    "                    </a>\n" +
    "                </div>\n" +
    "            </div>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/settings/settings.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/settings/settings.html",
    "<div class=\"hyfyext-settings\" ng-controller=\"SettingsController\" ng-init=\"init()\">\n" +
    "	<md-content class=\"md-padding\">\n" +
    "		<form class=\"settings-wrapper\">\n" +
    "			<h1 class\"title\">Settings</h1>\n" +
    "			<div ng-repeat=\"setting in getAvailableSettings()\">\n" +
    "				<div ng-switch=\"setting.inputType\">\n" +
    "					<div ng-switch-when=\"checkbox\">\n" +
    "                        <div class=\"input-block\">\n" +
    "                            <input type=\"checkbox\" class=\"filled-in\" id=\"{{setting.key}}\" ng-model=\"inputs[setting.key]\">\n" +
    "                            <label for=\"{{setting.key}}\">{{setting.label}}</label>\n" +
    "                        </div>\n" +
    "					</div>\n" +
    "				</div>\n" +
    "			</div>\n" +
    "			<button ng-click=\"saveChanges()\">Save Changes</button>\n" +
    "		</form>\n" +
    "		<a href=\"\" ng-click=\"reloadExtension()\">Reload Extension</a>\n" +
    "	</div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("components/successful-install/successful-install.html", []).run(["$templateCache", function ($templateCache) {
  $templateCache.put("components/successful-install/successful-install.html",
    "<div class=\"hyfyext-audio-access\" ng-controller=\"SuccessfulInstallController\" ng-init=\"init()\">\n" +
    "    <div class=\"body-wrapper\">\n" +
    "        <div class=\"background-image\">\n" +
    "            <img src=\"/images/permissionBG.png\">\n" +
    "        </div>\n" +
    "        <div class=\"permission-wrapper\">\n" +
    "            <div class=\"welcome-wrap\">\n" +
    "                <div class=\"welcome-text\">\n" +
    "                    WELCOME TO\n" +
    "                </div>\n" +
    "                <img src=\"/images/hyfy-circle.png\" class=\"welcome-image\">\n" +
    "            </div>\n" +
    "            <div class=\"body-text\">\n" +
    "                Just one more step before you get started.\n" +
    "            </div>\n" +
    "            <div class=\"body-text-1\">\n" +
    "                Share your voice and webcam to connect with your customers on a deeper level.\n" +
    "            </div>\n" +
    "            <button class=\"footer\" ng-click=\"micCameraPermission()\">\n" +
    "                ENABLE WEBCAM AND MIC\n" +
    "            </button>\n" +
    "        </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);
