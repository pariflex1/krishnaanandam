/*! For license information please see editor.js.LICENSE.txt */!function(){"use strict";var e={"./node_modules/react-dom/client.js":function(e,t,n){var o=n("react-dom"),r=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t.createRoot=function(e,t){r.usingClientEntryPoint=!0;try{return o.createRoot(e,t)}finally{r.usingClientEntryPoint=!1}},t.hydrateRoot=function(e,t,n){r.usingClientEntryPoint=!0;try{return o.hydrateRoot(e,t,n)}finally{r.usingClientEntryPoint=!1}}},react:function(e){e.exports=window.React},"react-dom":function(e){e.exports=window.ReactDOM},"@elementor/editor-documents":function(e){e.exports=window.elementorV2.editorDocuments},"@elementor/editor-v1-adapters":function(e){e.exports=window.elementorV2.editorV1Adapters},"@elementor/locations":function(e){e.exports=window.elementorV2.locations},"@elementor/query":function(e){e.exports=window.elementorV2.query},"@elementor/store":function(e){e.exports=window.elementorV2.store},"@elementor/ui":function(e){e.exports=window.elementorV2.ui},"@wordpress/i18n":function(e){e.exports=window.wp.i18n}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};!function(){n.r(o),n.d(o,{init:function(){return y},injectIntoTop:function(){return f}});var e=n("@elementor/locations"),t=n("react"),r=n("react-dom"),i=n("./node_modules/react-dom/client.js"),c=n("@elementor/editor-documents"),u=n("@wordpress/i18n"),l=n("@elementor/ui"),s=n("@elementor/store"),d=n("@elementor/editor-v1-adapters"),a=n("@elementor/query"),{Slot:m,inject:f}=(0,e.createLocation)();function p(){return function(){const e=(0,c.__useActiveDocument)(),n=(0,c.__useHostDocument)(),o=e&&"kit"!==e.type.value?e:n;(0,t.useEffect)((()=>{if(void 0===o?.title)return;const e=(0,u.__)('Edit "%s" with Elementor',"elementor").replace("%s",o.title);window.document.title=e}),[o?.title])}(),t.createElement(m,null)}function w(){return window.elementor?.getPreferences?.("ui_theme")||"auto"}function _({children:e}){const n=function(){const[e,n]=(0,t.useState)((()=>w()));return(0,t.useEffect)((()=>(0,d.__privateListenTo)((0,d.v1ReadyEvent)(),(()=>n(w())))),[]),(0,t.useEffect)((()=>(0,d.__privateListenTo)((0,d.commandEndEvent)("document/elements/settings"),(e=>{const t=e;t.args?.settings&&"ui_theme"in t.args.settings&&n(w())}))),[]),e}();return t.createElement(l.ThemeProvider,{colorScheme:n},e)}function y(e){const n=(0,s.__createStore)(),o=(0,a.createQueryClient)();(0,d.__privateDispatchReadyEvent)(),function(e,t){let n;try{const o=(0,i.createRoot)(t);n=()=>{o.render(e)}}catch(o){n=()=>{r.render(e,t)}}n()}(t.createElement(s.__StoreProvider,{store:n},t.createElement(a.QueryClientProvider,{client:o},t.createElement(l.DirectionProvider,{rtl:"rtl"===window.document.dir},t.createElement(_,null,t.createElement(p,null))))),e)}}(),(window.elementorV2=window.elementorV2||{}).editor=o}();