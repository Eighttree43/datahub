"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[59281],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=a,m=u["".concat(c,".").concat(d)]||u[d]||v[d]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},33074:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>v,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const o={title:"Openlineage Converter",slug:"/metadata-integration/java/openlineage-converter",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/openlineage-converter/README.md"},i="Openlineage Converter",l={unversionedId:"metadata-integration/java/openlineage-converter/README",id:"metadata-integration/java/openlineage-converter/README",title:"Openlineage Converter",description:"Overview",source:"@site/genDocs/metadata-integration/java/openlineage-converter/README.md",sourceDirName:"metadata-integration/java/openlineage-converter",slug:"/metadata-integration/java/openlineage-converter",permalink:"/docs/next/metadata-integration/java/openlineage-converter",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/openlineage-converter/README.md",tags:[],version:"current",frontMatter:{title:"Openlineage Converter",slug:"/metadata-integration/java/openlineage-converter",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-integration/java/openlineage-converter/README.md"}},c={},p=[{value:"Overview",id:"overview",level:2},{value:"Known Issues",id:"known-issues",level:2}],s={toc:p},u="wrapper";function v(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"openlineage-converter"},"Openlineage Converter"),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"It converts arbitary Openlineage events to a DataHub Aspects."),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Currently, it was tested only with Spark and Airflow events."),(0,a.kt)("li",{parentName:"ul"},"Due to Openlineage's stateless nature, it is possible not all the inputs or outputs captured.")))}v.isMDXComponent=!0}}]);