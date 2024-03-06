"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6188],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),l=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(a),p=n,h=d["".concat(c,".").concat(p)]||d[p]||m[p]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:n,i[1]=s;for(var l=2;l<o;l++)i[l]=a[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},56053:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=a(87462),n=(a(67294),a(3905));const o={title:"What is Generalized Metadata Architecture (GMA)?",slug:"/what/gma",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/gma.md"},i="What is Generalized Metadata Architecture (GMA)?",s={unversionedId:"docs/what/gma",id:"version-0.13.0/docs/what/gma",title:"What is Generalized Metadata Architecture (GMA)?",description:"GMA is the backend infrastructure for DataHub. Unlike existing architectures, GMA leverages multiple storage technologies to efficiently service the four most commonly used query patterns",source:"@site/versioned_docs/version-0.13.0/docs/what/gma.md",sourceDirName:"docs/what",slug:"/what/gma",permalink:"/docs/what/gma",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/what/gma.md",tags:[],version:"0.13.0",frontMatter:{title:"What is Generalized Metadata Architecture (GMA)?",slug:"/what/gma",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/what/gma.md"}},c={},l=[],u={toc:l},d="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(d,(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"what-is-generalized-metadata-architecture-gma"},"What is Generalized Metadata Architecture (GMA)?"),(0,n.kt)("p",null,"GMA is the backend infrastructure for DataHub. Unlike existing architectures, GMA leverages multiple storage technologies to efficiently service the four most commonly used query patterns"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Document-oriented CRUD "),(0,n.kt)("li",{parentName:"ul"},"Complex queries (including joining distributed tables)"),(0,n.kt)("li",{parentName:"ul"},"Graph traversal"),(0,n.kt)("li",{parentName:"ul"},"Fulltext search and autocomplete")),(0,n.kt)("p",null,"GMA also embraces a distributed model, where each team owns, develops and operates their own metadata services (known as ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/gms"},"GMS"),"), while the metadata are automatically aggregated to populate the central ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/graph"},"metadata graph")," and ",(0,n.kt)("a",{parentName:"p",href:"/docs/what/search-index"},"search indexes"),". This is made possible by standardizing the metadata models and the access layer. "),(0,n.kt)("p",null,"We strongly believe that GMA can bring tremendous leverage to any team that has a need to store and access metadata.\nMoreover, standardizing metadata modeling promotes a model-first approach to developments, resulting in a more concise, consistent, and highly connected metadata ecosystem that benefits all DataHub users."))}m.isMDXComponent=!0}}]);