(function(e){var t={};function r(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,o){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(r.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(o,n,function(t){return e[t]}.bind(null,n));return o},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/vue-auto-storage/",r(r.s=0)})({0:function(e,t,r){e.exports=r("c31f")},"42b1":function(e,t,r){"use strict";var o=r("e417"),n=r.n(o);n.a},"5f72":function(e,t){e.exports=ELEMENT},"8bbf":function(e,t){e.exports=Vue},c31f:function(e,t,r){"use strict";r.r(t);var o=r("8bbf"),n=r.n(o),s=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-container",{attrs:{id:"app"}},[r("el-header",{attrs:{height:"auto"}},[r("h1",{staticClass:"header"},[e._v("\n      Vue Auto Storage\n\n      "),r("a",{staticClass:"star",attrs:{href:"https://github.com/zh-rocco/vue-auto-storage",target:"_blank",title:"Github"}},[r("svg",{staticClass:"icon-github",attrs:{height:"32",viewBox:"0 0 16 16",version:"1.1",width:"32","aria-hidden":"true"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"}})])])])]),r("el-main",[r("el-row",{attrs:{gutter:40}},[r("el-col",{attrs:{span:12}},[r("el-row",{staticClass:"center"},[r("h2",[e._v("Persistent Form")])]),r("el-form",{ref:"persistentForm",attrs:{model:e.persistentForm,"label-width":"130px","label-suffix":" :"}},[r("el-form-item",{attrs:{label:"Activity name"}},[r("el-input",{model:{value:e.persistentForm.name,callback:function(t){e.$set(e.persistentForm,"name",t)},expression:"persistentForm.name"}})],1),r("el-form-item",{attrs:{label:"Activity zone"}},[r("el-select",{attrs:{placeholder:"please select your zone"},model:{value:e.persistentForm.region,callback:function(t){e.$set(e.persistentForm,"region",t)},expression:"persistentForm.region"}},[r("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),r("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),r("el-form-item",{attrs:{label:"Instant delivery"}},[r("el-switch",{model:{value:e.persistentForm.delivery,callback:function(t){e.$set(e.persistentForm,"delivery",t)},expression:"persistentForm.delivery"}})],1),r("el-form-item",{attrs:{label:"Activity type"}},[r("el-checkbox-group",{model:{value:e.persistentForm.type,callback:function(t){e.$set(e.persistentForm,"type",t)},expression:"persistentForm.type"}},[r("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"Resources"}},[r("el-radio-group",{model:{value:e.persistentForm.resource,callback:function(t){e.$set(e.persistentForm,"resource",t)},expression:"persistentForm.resource"}},[r("el-radio",{attrs:{label:"Sponsor"}}),r("el-radio",{attrs:{label:"Venue"}})],1)],1),r("el-form-item",{attrs:{label:"Activity form"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.persistentForm.desc,callback:function(t){e.$set(e.persistentForm,"desc",t)},expression:"persistentForm.desc"}})],1)],1)],1),r("el-col",{attrs:{span:12}},[r("el-row",{staticClass:"center"},[r("h2",[e._v("Normal Form")])]),r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"130px","label-suffix":" :"}},[r("el-form-item",{attrs:{label:"Activity name"}},[r("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),r("el-form-item",{attrs:{label:"Activity zone"}},[r("el-select",{attrs:{placeholder:"please select your zone"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[r("el-option",{attrs:{label:"Zone one",value:"shanghai"}}),r("el-option",{attrs:{label:"Zone two",value:"beijing"}})],1)],1),r("el-form-item",{attrs:{label:"Instant delivery"}},[r("el-switch",{model:{value:e.form.delivery,callback:function(t){e.$set(e.form,"delivery",t)},expression:"form.delivery"}})],1),r("el-form-item",{attrs:{label:"Activity type"}},[r("el-checkbox-group",{model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}},[r("el-checkbox",{attrs:{label:"Online activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Promotion activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Offline activities",name:"type"}}),r("el-checkbox",{attrs:{label:"Simple brand exposure",name:"type"}})],1)],1),r("el-form-item",{attrs:{label:"Resources"}},[r("el-radio-group",{model:{value:e.form.resource,callback:function(t){e.$set(e.form,"resource",t)},expression:"form.resource"}},[r("el-radio",{attrs:{label:"Sponsor"}}),r("el-radio",{attrs:{label:"Venue"}})],1)],1),r("el-form-item",{attrs:{label:"Activity form"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.form.desc,callback:function(t){e.$set(e.form,"desc",t)},expression:"form.desc"}})],1)],1)],1)],1),r("el-row",{staticClass:"mt-l center"},[r("h3",[e._v("Just fill in the two forms above and click the button below.")])]),r("el-row",{staticClass:"mt-l center"},[r("el-button",{attrs:{type:"primary"},on:{click:e.handleReload}},[e._v("Reload Page")]),r("el-button",{on:{click:e.handleClearCurrent}},[e._v("Reload Page (with clearing storage)")])],1)],1)],1)},a=[],i={name:"App",autoStorage:["persistentForm"],data(){return{persistentForm:{name:"",region:"",delivery:!1,type:[],resource:"",desc:""},form:{name:"",region:"",delivery:!1,type:[],resource:"",desc:""}}},methods:{handleClearCurrent(){this.$autoStorage.clear("persistentForm"),location.reload()},handleReload(){location.reload()}}},l=i;r("42b1");function c(e,t,r,o,n,s,a,i){var l,c="function"===typeof e?e.options:e;if(t&&(c.render=t,c.staticRenderFns=r,c._compiled=!0),o&&(c.functional=!0),s&&(c._scopeId="data-v-"+s),a?(l=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(a)},c._ssrRegister=l):n&&(l=i?function(){n.call(this,this.$root.$options.shadowRoot)}:n),l)if(c.functional){c._injectStyles=l;var u=c.render;c.render=function(e,t){return l.call(t),u(e,t)}}else{var m=c.beforeCreate;c.beforeCreate=m?[].concat(m,l):[l]}return{exports:e,options:c}}var u=c(l,s,a,!1,null,null,null);u.options.__file="App.vue";var m=u.exports,p=r("5f72"),f=r.n(p);const d=Symbol("STORAGE"),h=Symbol("UNWATCH_FNS"),b=Symbol("PREFIX"),v=Symbol("DEBOUNCE_TIME");function y(e){try{return e.setItem("@@",1),1!==e.getItem("@@")?!1:(e.removeItem("@@"),!0)}catch(e){return!1}}function g(e){return Object.prototype.toString.call(e).slice(8,-1)}function _(e){const t=/(\[\w+\])$/g;if(t.test(e)){const t=e.lastIndexOf("[");return[e.slice(0,t),e.slice(t+1,-1)]}{const t=e.lastIndexOf(".");return[e.slice(0,t),e.slice(t+1)]}}function x(e,t=300){let r;return function(...o){r&&clearTimeout(r),r=setTimeout(()=>{e.apply(this,o)},t)}}function S(e,t,r){t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,"");const o=t.split(".");for(const n of o){if(!(n in e))return r;e=e[n]}return e}const $="__AUTO_STORAGE__";class w{constructor(e){this.$vm=e,this[h]=Object.create(null),this[d]=e.__AUTO_STORAGE_OPTIONS__.storage,this[v]=e.__AUTO_STORAGE_OPTIONS__.debounce,this[b]=$+e.$options.name.toUpperCase()+"__"}getName(e){return this[b]+e.toUpperCase()}getItem(e){return this[d].getItem(this.getName(e))}watch(e){e&&(this[h][e]||(this[h][e]=this.$vm.$watch(e,x(t=>{this[d].setItem(this.getName(e),t)},this[v]),{deep:!0})))}unwatch(e){if(void 0===e){for(const e in this[h])this[h][e]();delete this[h],this[h]=Object.create(null)}else e&&e in this[h]&&(this[h][e](),delete this[h][e])}clear(e){e?this[d].removeItem(this.getName(e)):this[d].clear($)}destroy(){this.unwatch(),delete this.$vm,delete this[b],delete this[d],delete this[v]}}const O=/(\.|\[|\])/g;function F(e){"Array"===g(e.$options.autoStorage)&&e.$options.name&&(e.$autoStorage||(e.$autoStorage=new w(e),I(e),T(e)))}function k(e){e.$autoStorage&&(e.$autoStorage.destroy(),delete e.$autoStorage)}function I(e){const t=e.$options.autoStorage;for(const r of t){const t=e.$autoStorage.getItem(r);void 0!==t&&C(e,r,t)}}function C(e,t,r){if(O.test(t)){const[o,n]=_(t),s=S(e,o);s[n]=r}else e[t]=r}function T(e){const t=e.$options.autoStorage;for(const r of t)void 0!==S(e,r)&&e.$autoStorage.watch(r)}var A={created(){try{F(this)}catch(e){console.error(e)}},beforeDestroy(){k(this)}};const E=window.localStorage;var R={setItem(e,t){E.setItem(e,JSON.stringify(void 0===t?null:t))},getItem(e){const t=E[e];return void 0===t?void 0:JSON.parse(t)},removeItem(e){E.removeItem(e)},clear(e){if(e)for(const t in E)E.hasOwnProperty(t)&&t.includes(e)&&E.removeItem(t);else E.clear()}};const N={debounce:300,storage:R},P={install(e,t={}){for(const r in t)N[r]=t[r];if(!y(N.storage))throw new Error("Invalid storage instance given");Object.defineProperty(e.prototype,"__AUTO_STORAGE_OPTIONS__",{value:N}),e.mixin(A)}};"undefined"!==typeof window&&window.Vue&&window.Vue.use(P);var j=P;n.a.config.productionTip=!1,n.a.use(f.a),n.a.use(j),new n.a({render:e=>e(m)}).$mount("#app")},e417:function(e,t,r){}});
//# sourceMappingURL=index.49d59c36.js.map