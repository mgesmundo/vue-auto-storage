 /*!
  * vue-auto-storage.js v1.0.1
  * (c) 2018 Rocco Mormont
  * @license MIT
  */

!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.VueAutoStorage=e()}(this,function(){"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=[],r=!0,o=!1,i=void 0;try{for(var u,c=t[Symbol.iterator]();!(r=(u=c.next()).done)&&(n.push(u.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==c.return||c.return()}finally{if(o)throw i}}return n}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function n(t,e){return t(e={exports:{}},e.exports),e.exports}var r=n(function(t){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)}),o=n(function(t){var e=t.exports={version:"2.5.7"};"number"==typeof __e&&(__e=e)}),i=(o.version,n(function(t){var e=r["__core-js_shared__"]||(r["__core-js_shared__"]={});(t.exports=function(t,n){return e[t]||(e[t]=void 0!==n?n:{})})("versions",[]).push({version:o.version,mode:"global",copyright:"© 2018 Denis Pushkarev (zloirock.ru)"})})),u=0,c=Math.random(),a=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++u+c).toString(36))},f=n(function(t){var e=i("wks"),n=r.Symbol,o="function"==typeof n;(t.exports=function(t){return e[t]||(e[t]=o&&n[t]||(o?n:a)("Symbol."+t))}).store=e}),l={f:f},s=function(t){return"object"==typeof t?null!==t:"function"==typeof t},p=function(t){if(!s(t))throw TypeError(t+" is not an object!");return t},y=function(t){try{return!!t()}catch(t){return!0}},h=!y(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}),v=r.document,g=s(v)&&s(v.createElement),d=function(t){return g?v.createElement(t):{}},m=!h&&!y(function(){return 7!=Object.defineProperty(d("div"),"a",{get:function(){return 7}}).a}),b=function(t,e){if(!s(t))return t;var n,r;if(e&&"function"==typeof(n=t.toString)&&!s(r=n.call(t)))return r;if("function"==typeof(n=t.valueOf)&&!s(r=n.call(t)))return r;if(!e&&"function"==typeof(n=t.toString)&&!s(r=n.call(t)))return r;throw TypeError("Can't convert object to primitive value")},S=Object.defineProperty,O={f:h?Object.defineProperty:function(t,e,n){if(p(t),e=b(e,!0),p(n),m)try{return S(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},w=O.f,_=function(t){var e=o.Symbol||(o.Symbol=r.Symbol||{});"_"==t.charAt(0)||t in e||w(e,t,{value:l.f(t)})};_("asyncIterator");var E={}.hasOwnProperty,T=function(t,e){return E.call(t,e)},x=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}},P=h?function(t,e,n){return O.f(t,e,x(1,n))}:function(t,e,n){return t[e]=n,t},j=n(function(t){var e=a("src"),n=Function.toString,i=(""+n).split("toString");o.inspectSource=function(t){return n.call(t)},(t.exports=function(t,n,o,u){var c="function"==typeof o;c&&(T(o,"name")||P(o,"name",n)),t[n]!==o&&(c&&(T(o,e)||P(o,e,t[n]?""+t[n]:i.join(String(n)))),t===r?t[n]=o:u?t[n]?t[n]=o:P(t,n,o):(delete t[n],P(t,n,o)))})(Function.prototype,"toString",function(){return"function"==typeof this&&this[e]||n.call(this)})}),I=function(t,e,n){if(function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!")}(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}},k=function(t,e,n){var i,u,c,a,f=t&k.F,l=t&k.G,s=t&k.S,p=t&k.P,y=t&k.B,h=l?r:s?r[e]||(r[e]={}):(r[e]||{}).prototype,v=l?o:o[e]||(o[e]={}),g=v.prototype||(v.prototype={});for(i in l&&(n=e),n)c=((u=!f&&h&&void 0!==h[i])?h:n)[i],a=y&&u?I(c,r):p&&"function"==typeof c?I(Function.call,c):c,h&&j(h,i,c,t&k.U),v[i]!=c&&P(v,i,a),p&&g[i]!=c&&(g[i]=c)};r.core=o,k.F=1,k.G=2,k.S=4,k.P=8,k.B=16,k.W=32,k.U=64,k.R=128;var A=k,N=n(function(t){var e=a("meta"),n=O.f,r=0,o=Object.isExtensible||function(){return!0},i=!y(function(){return o(Object.preventExtensions({}))}),u=function(t){n(t,e,{value:{i:"O"+ ++r,w:{}}})},c=t.exports={KEY:e,NEED:!1,fastKey:function(t,n){if(!s(t))return"symbol"==typeof t?t:("string"==typeof t?"S":"P")+t;if(!T(t,e)){if(!o(t))return"F";if(!n)return"E";u(t)}return t[e].i},getWeak:function(t,n){if(!T(t,e)){if(!o(t))return!0;if(!n)return!1;u(t)}return t[e].w},onFreeze:function(t){return i&&c.NEED&&o(t)&&!T(t,e)&&u(t),t}}}),L=(N.KEY,N.NEED,N.fastKey,N.getWeak,N.onFreeze,O.f),F=f("toStringTag"),M=function(t,e,n){t&&!T(t=n?t:t.prototype,F)&&L(t,F,{configurable:!0,value:e})},R={}.toString,C=function(t){return R.call(t).slice(8,-1)},$=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==C(t)?t.split(""):Object(t)},G=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t},D=function(t){return $(G(t))},U=Math.ceil,V=Math.floor,W=function(t){return isNaN(t=+t)?0:(t>0?V:U)(t)},J=Math.min,H=Math.max,K=Math.min,z=function(t){return function(e,n,r){var o,i,u=D(e),c=(o=u.length)>0?J(W(o),9007199254740991):0,a=function(t,e){return(t=W(t))<0?H(t+e,0):K(t,e)}(r,c);if(t&&n!=n){for(;c>a;)if((i=u[a++])!=i)return!0}else for(;c>a;a++)if((t||a in u)&&u[a]===n)return t||a||0;return!t&&-1}},B=i("keys"),Y=function(t){return B[t]||(B[t]=a(t))},q=z(!1),Q=Y("IE_PROTO"),X=function(t,e){var n,r=D(t),o=0,i=[];for(n in r)n!=Q&&T(r,n)&&i.push(n);for(;e.length>o;)T(r,n=e[o++])&&(~q(i,n)||i.push(n));return i},Z="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","),tt=Object.keys||function(t){return X(t,Z)},et={f:Object.getOwnPropertySymbols},nt={f:{}.propertyIsEnumerable},rt=Array.isArray||function(t){return"Array"==C(t)},ot=h?Object.defineProperties:function(t,e){p(t);for(var n,r=tt(e),o=r.length,i=0;o>i;)O.f(t,n=r[i++],e[n]);return t},it=r.document,ut=it&&it.documentElement,ct=Y("IE_PROTO"),at=function(){},ft=function(){var t,e=d("iframe"),n=Z.length;for(e.style.display="none",ut.appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),ft=t.F;n--;)delete ft.prototype[Z[n]];return ft()},lt=Object.create||function(t,e){var n;return null!==t?(at.prototype=p(t),n=new at,at.prototype=null,n[ct]=t):n=ft(),void 0===e?n:ot(n,e)},st=Z.concat("length","prototype"),pt={f:Object.getOwnPropertyNames||function(t){return X(t,st)}},yt=pt.f,ht={}.toString,vt="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],gt={f:function(t){return vt&&"[object Window]"==ht.call(t)?function(t){try{return yt(t)}catch(t){return vt.slice()}}(t):yt(D(t))}},dt=Object.getOwnPropertyDescriptor,mt={f:h?dt:function(t,e){if(t=D(t),e=b(e,!0),m)try{return dt(t,e)}catch(t){}if(T(t,e))return x(!nt.f.call(t,e),t[e])}},bt=N.KEY,St=mt.f,Ot=O.f,wt=gt.f,_t=r.Symbol,Et=r.JSON,Tt=Et&&Et.stringify,xt=f("_hidden"),Pt=f("toPrimitive"),jt={}.propertyIsEnumerable,It=i("symbol-registry"),kt=i("symbols"),At=i("op-symbols"),Nt=Object.prototype,Lt="function"==typeof _t,Ft=r.QObject,Mt=!Ft||!Ft.prototype||!Ft.prototype.findChild,Rt=h&&y(function(){return 7!=lt(Ot({},"a",{get:function(){return Ot(this,"a",{value:7}).a}})).a})?function(t,e,n){var r=St(Nt,e);r&&delete Nt[e],Ot(t,e,n),r&&t!==Nt&&Ot(Nt,e,r)}:Ot,Ct=function(t){var e=kt[t]=lt(_t.prototype);return e._k=t,e},$t=Lt&&"symbol"==typeof _t.iterator?function(t){return"symbol"==typeof t}:function(t){return t instanceof _t},Gt=function(t,e,n){return t===Nt&&Gt(At,e,n),p(t),e=b(e,!0),p(n),T(kt,e)?(n.enumerable?(T(t,xt)&&t[xt][e]&&(t[xt][e]=!1),n=lt(n,{enumerable:x(0,!1)})):(T(t,xt)||Ot(t,xt,x(1,{})),t[xt][e]=!0),Rt(t,e,n)):Ot(t,e,n)},Dt=function(t,e){p(t);for(var n,r=function(t){var e=tt(t),n=et.f;if(n)for(var r,o=n(t),i=nt.f,u=0;o.length>u;)i.call(t,r=o[u++])&&e.push(r);return e}(e=D(e)),o=0,i=r.length;i>o;)Gt(t,n=r[o++],e[n]);return t},Ut=function(t){var e=jt.call(this,t=b(t,!0));return!(this===Nt&&T(kt,t)&&!T(At,t))&&(!(e||!T(this,t)||!T(kt,t)||T(this,xt)&&this[xt][t])||e)},Vt=function(t,e){if(t=D(t),e=b(e,!0),t!==Nt||!T(kt,e)||T(At,e)){var n=St(t,e);return!n||!T(kt,e)||T(t,xt)&&t[xt][e]||(n.enumerable=!0),n}},Wt=function(t){for(var e,n=wt(D(t)),r=[],o=0;n.length>o;)T(kt,e=n[o++])||e==xt||e==bt||r.push(e);return r},Jt=function(t){for(var e,n=t===Nt,r=wt(n?At:D(t)),o=[],i=0;r.length>i;)!T(kt,e=r[i++])||n&&!T(Nt,e)||o.push(kt[e]);return o};Lt||(j((_t=function(){if(this instanceof _t)throw TypeError("Symbol is not a constructor!");var t=a(arguments.length>0?arguments[0]:void 0),e=function(n){this===Nt&&e.call(At,n),T(this,xt)&&T(this[xt],t)&&(this[xt][t]=!1),Rt(this,t,x(1,n))};return h&&Mt&&Rt(Nt,t,{configurable:!0,set:e}),Ct(t)}).prototype,"toString",function(){return this._k}),mt.f=Vt,O.f=Gt,pt.f=gt.f=Wt,nt.f=Ut,et.f=Jt,h&&j(Nt,"propertyIsEnumerable",Ut,!0),l.f=function(t){return Ct(f(t))}),A(A.G+A.W+A.F*!Lt,{Symbol:_t});for(var Ht="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),Kt=0;Ht.length>Kt;)f(Ht[Kt++]);for(var zt=tt(f.store),Bt=0;zt.length>Bt;)_(zt[Bt++]);A(A.S+A.F*!Lt,"Symbol",{for:function(t){return T(It,t+="")?It[t]:It[t]=_t(t)},keyFor:function(t){if(!$t(t))throw TypeError(t+" is not a symbol!");for(var e in It)if(It[e]===t)return e},useSetter:function(){Mt=!0},useSimple:function(){Mt=!1}}),A(A.S+A.F*!Lt,"Object",{create:function(t,e){return void 0===e?lt(t):Dt(lt(t),e)},defineProperty:Gt,defineProperties:Dt,getOwnPropertyDescriptor:Vt,getOwnPropertyNames:Wt,getOwnPropertySymbols:Jt}),Et&&A(A.S+A.F*(!Lt||y(function(){var t=_t();return"[null]"!=Tt([t])||"{}"!=Tt({a:t})||"{}"!=Tt(Object(t))})),"JSON",{stringify:function(t){for(var e,n,r=[t],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=e=r[1],(s(e)||void 0!==t)&&!$t(t))return rt(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!$t(e))return e}),r[1]=e,Tt.apply(Et,r)}}),_t.prototype[Pt]||P(_t.prototype,Pt,_t.prototype.valueOf),M(_t,"Symbol"),M(Math,"Math",!0),M(r.JSON,"JSON",!0);var Yt=f("unscopables"),qt=Array.prototype;void 0==qt[Yt]&&P(qt,Yt,{});var Qt=function(t){qt[Yt][t]=!0},Xt=function(t,e){return{value:e,done:!!t}},Zt={},te={};P(te,f("iterator"),function(){return this});var ee=function(t,e,n){t.prototype=lt(te,{next:x(1,n)}),M(t,e+" Iterator")},ne=Y("IE_PROTO"),re=Object.prototype,oe=Object.getPrototypeOf||function(t){return t=Object(G(t)),T(t,ne)?t[ne]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?re:null},ie=f("iterator"),ue=!([].keys&&"next"in[].keys()),ce=function(){return this},ae=function(t,e,n,r,o,i,u){ee(n,e,r);var c,a,f,l=function(t){if(!ue&&t in h)return h[t];switch(t){case"keys":case"values":return function(){return new n(this,t)}}return function(){return new n(this,t)}},s=e+" Iterator",p="values"==o,y=!1,h=t.prototype,v=h[ie]||h["@@iterator"]||o&&h[o],g=v||l(o),d=o?p?l("entries"):g:void 0,m="Array"==e&&h.entries||v;if(m&&(f=oe(m.call(new t)))!==Object.prototype&&f.next&&(M(f,s,!0),"function"!=typeof f[ie]&&P(f,ie,ce)),p&&v&&"values"!==v.name&&(y=!0,g=function(){return v.call(this)}),(ue||y||!h[ie])&&P(h,ie,g),Zt[e]=g,Zt[s]=ce,o)if(c={values:p?g:l("values"),keys:i?g:l("keys"),entries:d},u)for(a in c)a in h||j(h,a,c[a]);else A(A.P+A.F*(ue||y),e,c);return c}(Array,"Array",function(t,e){this._t=D(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,n=this._i++;return!t||n>=t.length?(this._t=void 0,Xt(1)):Xt(0,"keys"==e?n:"values"==e?t[n]:[n,t[n]])},"values");Zt.Arguments=Zt.Array,Qt("keys"),Qt("values"),Qt("entries");for(var fe=f("iterator"),le=f("toStringTag"),se=Zt.Array,pe={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},ye=tt(pe),he=0;he<ye.length;he++){var ve,ge=ye[he],de=pe[ge],me=r[ge],be=me&&me.prototype;if(be&&(be[fe]||P(be,fe,se),be[le]||P(be,le,ge),Zt[ge]=se,de))for(ve in ae)be[ve]||j(be,ve,ae[ve],!0)}var Se=O.f,Oe=Function.prototype,we=/^\s*function ([^ (]*)/;"name"in Oe||h&&Se(Oe,"name",{configurable:!0,get:function(){try{return(""+this).match(we)[1]}catch(t){return""}}});var _e=Symbol("STORAGE"),Ee=Symbol("UNWATCH_FNS"),Te=Symbol("PREFIX"),xe=Symbol("DEBOUNCE_TIME"),Pe=function(t,e,n){var r=f(t),o=n(G,r,""[t]),i=o[0],u=o[1];y(function(){var e={};return e[r]=function(){return 7},7!=""[t](e)})&&(j(String.prototype,t,i),P(RegExp.prototype,r,2==e?function(t,e){return u.call(t,this,e)}:function(t){return u.call(t,this)}))},je=f("match"),Ie=function(t){var e;return s(t)&&(void 0!==(e=t[je])?!!e:"RegExp"==C(t))};Pe("split",2,function(t,e,n){var r=Ie,o=n,i=[].push;if("c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length){var u=void 0===/()??/.exec("")[1];n=function(t,e){var n=String(this);if(void 0===t&&0===e)return[];if(!r(t))return o.call(n,t,e);var c,a,f,l,s,p=[],y=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),h=0,v=void 0===e?4294967295:e>>>0,g=new RegExp(t.source,y+"g");for(u||(c=new RegExp("^"+g.source+"$(?!\\s)",y));(a=g.exec(n))&&!((f=a.index+a[0].length)>h&&(p.push(n.slice(h,a.index)),!u&&a.length>1&&a[0].replace(c,function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(a[s]=void 0)}),a.length>1&&a.index<n.length&&i.apply(p,a.slice(1)),l=a[0].length,h=f,p.length>=v));)g.lastIndex===a.index&&g.lastIndex++;return h===n.length?!l&&g.test("")||p.push(""):p.push(n.slice(h)),p.length>v?p.slice(0,v):p}}else"0".split(void 0,0).length&&(n=function(t,e){return void 0===t&&0===e?[]:o.call(this,t,e)});return[function(r,o){var i=t(this),u=void 0==r?void 0:r[e];return void 0!==u?u.call(r,i,o):n.call(String(i),r,o)},n]}),Pe("replace",2,function(t,e,n){return[function(r,o){var i=t(this),u=void 0==r?void 0:r[e];return void 0!==u?u.call(r,i,o):n.call(String(i),r,o)},n]});var ke=function(){var t=p(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e};h&&"g"!=/./g.flags&&O.f(RegExp.prototype,"flags",{configurable:!0,get:ke});var Ae=/./.toString,Ne=function(t){j(RegExp.prototype,"toString",t,!0)};function Le(t,e,n){var r=(e=(e=e.replace(/\[(\w+)\]/g,".$1")).replace(/^\./,"")).split("."),o=!0,i=!1,u=void 0;try{for(var c,a=r[Symbol.iterator]();!(o=(c=a.next()).done);o=!0){var f=c.value;if(!(f in t))return n;t=t[f]}}catch(t){i=!0,u=t}finally{try{o||null==a.return||a.return()}finally{if(i)throw u}}return t}y(function(){return"/a/b"!=Ae.call({source:"a",flags:"b"})})?Ne(function(){var t=p(this);return"/".concat(t.source,"/","flags"in t?t.flags:!h&&t instanceof RegExp?ke.call(t):void 0)}):"toString"!=Ae.name&&Ne(function(){return Ae.call(this)});var Fe="__AUTO_STORAGE__",Me=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.$vm=t,this[Ee]=Object.create(null),this[_e]=t.__AUTO_STORAGE_OPTIONS__.storage,this[xe]=t.__AUTO_STORAGE_OPTIONS__.debounce,this[Te]=Fe+t.$options.name.toUpperCase()+"__"}var n,r,o;return n=e,(r=[{key:"getName",value:function(t){return this[Te]+t.toUpperCase()}},{key:"getItem",value:function(t){return this[_e].getItem(this.getName(t))}},{key:"watch",value:function(t){var e=this;t&&(this[Ee][t]||(this[Ee][t]=this.$vm.$watch(t,function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300;return function(){for(var r=this,o=arguments.length,i=new Array(o),u=0;u<o;u++)i[u]=arguments[u];e&&clearTimeout(e),e=setTimeout(function(){t.apply(r,i)},n)}}(function(n){e[_e].setItem(e.getName(t),n)},this[xe]),{deep:!0})))}},{key:"unwatch",value:function(t){if(void 0===t){for(var e in this[Ee])this[Ee][e]();delete this[Ee],this[Ee]=Object.create(null)}else t&&t in this[Ee]&&(this[Ee][t](),delete this[Ee][t])}},{key:"clear",value:function(t){t?this[_e].removeItem(this.getName(t)):this[_e].clear(Fe)}},{key:"destroy",value:function(){this.unwatch(),delete this.$vm,delete this[Te],delete this[_e],delete this[xe]}}])&&t(n.prototype,r),o&&t(n,o),e}(),Re=/(\.|\[|\])/g;function Ce(t){var e;"Array"===(e=t.$options.autoStorage,Object.prototype.toString.call(e).slice(8,-1))&&(t.$options.name&&(t.$autoStorage||(t.$autoStorage=new Me(t),function(t){var e=t.$options.autoStorage,n=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var c=i.value,a=t.$autoStorage.getItem(c);void 0!==a&&$e(t,c,a)}}catch(t){r=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}}(t),function(t){var e=t.$options.autoStorage,n=!0,r=!1,o=void 0;try{for(var i,u=e[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var c=i.value;void 0!==Le(t,c)&&t.$autoStorage.watch(c)}}catch(t){r=!0,o=t}finally{try{n||null==u.return||u.return()}finally{if(r)throw o}}}(t))))}function $e(t,n,r){if(Re.test(n)){var o=e(function(t){if(/(\[\w+\])$/g.test(t)){var e=t.lastIndexOf("[");return[t.slice(0,e),t.slice(e+1,-1)]}var n=t.lastIndexOf(".");return[t.slice(0,n),t.slice(n+1)]}(n),2),i=o[0],u=o[1];Le(t,i)[u]=r}else t[n]=r}var Ge={created:function(){try{Ce(this)}catch(t){}},beforeDestroy:function(){var t;(t=this).$autoStorage&&(t.$autoStorage.destroy(),delete t.$autoStorage)}},De=z(!0);A(A.P,"Array",{includes:function(t){return De(this,t,arguments.length>1?arguments[1]:void 0)}}),Qt("includes");var Ue=f("match");A(A.P+A.F*function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[Ue]=!1,!"/./"[t](e)}catch(t){}}return!0}("includes"),"String",{includes:function(t){return!!~function(t,e,n){if(Ie(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(G(t))}(this,t,"includes").indexOf(t,arguments.length>1?arguments[1]:void 0)}});var Ve=window.localStorage,We={debounce:300,storage:{setItem:function(t,e){Ve.setItem(t,JSON.stringify(void 0===e?null:e))},getItem:function(t){var e=Ve[t];return void 0===e?void 0:JSON.parse(e)},removeItem:function(t){Ve.removeItem(t)},clear:function(t){if(t)for(var e in Ve)Ve.hasOwnProperty(e)&&e.includes(t)&&Ve.removeItem(e);else Ve.clear()}}},Je={install:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};for(var n in e)We[n]=e[n];if(!function(t){try{return t.setItem("@@",1),1===t.getItem("@@")&&(t.removeItem("@@"),!0)}catch(t){return!1}}(We.storage))throw new Error("Invalid storage instance given");Object.defineProperty(t.prototype,"__AUTO_STORAGE_OPTIONS__",{value:We}),t.mixin(Ge)}};return"undefined"!=typeof window&&window.Vue&&window.Vue.use(Je),Je});
