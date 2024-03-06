"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[10652],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(a),m=n,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||o;return a?r.createElement(h,l(l({ref:t},c),{},{components:a})):r.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:n,l[1]=i;for(var d=2;d<o;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},2810:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={title:"v0.2.3",slug:"/managed-datahub/release-notes/v_0_2_3",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_3.md"},l="v0.2.3",i={unversionedId:"docs/managed-datahub/release-notes/v_0_2_3",id:"version-0.13.0/docs/managed-datahub/release-notes/v_0_2_3",title:"v0.2.3",description:"---",source:"@site/versioned_docs/version-0.13.0/docs/managed-datahub/release-notes/v_0_2_3.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_3",permalink:"/docs/managed-datahub/release-notes/v_0_2_3",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_3.md",tags:[],version:"0.13.0",frontMatter:{title:"v0.2.3",slug:"/managed-datahub/release-notes/v_0_2_3",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_3.md"},sidebar:"overviewSidebar",previous:{title:"v0.2.4",permalink:"/docs/managed-datahub/release-notes/v_0_2_4"},next:{title:"v0.2.2",permalink:"/docs/managed-datahub/release-notes/v_0_2_2"}},s={},d=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Release Changelog",id:"release-changelog",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v023"},"v0.2.3"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,n.kt)("p",null,"14-Mar-2023"),(0,n.kt)("h2",{id:"release-changelog"},"Release Changelog"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.2.2")," no changes from OSS DataHub have been pulled in."),(0,n.kt)("li",{parentName:"ul"},"fix(mcl): only restate Lineage MCL's - This should help with some lag issues being seen"),(0,n.kt)("li",{parentName:"ul"},"feat(proposals): Add ability to propose descriptions on datasets"),(0,n.kt)("li",{parentName:"ul"},"Hotfix 2023 03 06 - Some Miscellaneous search improvements"),(0,n.kt)("li",{parentName:"ul"},"fix(bootstrap): only ingest default metadata tests once - This should help with some deleted metadata tests re-appearing."),(0,n.kt)("li",{parentName:"ul"},"refactor(lineage): Fix & optimize getAndUpdatePaths - The impact should be a reduced page load time for the lineage-intensive entities"),(0,n.kt)("li",{parentName:"ul"},"refactor(ui): Loading schema dynamically for datasets"),(0,n.kt)("li",{parentName:"ul"},"fix(lineage): nullpointer exceptions - should fix some errors related to lineage search"),(0,n.kt)("li",{parentName:"ul"},"chore(ci): add daylight savings timezone for tests, fix daylight saving bug in analytics charts - Should fix gaps in Monthly charts for people with daylight savings")))}p.isMDXComponent=!0}}]);