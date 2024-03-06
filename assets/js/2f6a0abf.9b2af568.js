"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[19431],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),u=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},d=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(a),b=n,m=c["".concat(i,".").concat(b)]||c[b]||p[b]||o;return a?r.createElement(m,l(l({ref:t},d),{},{components:a})):r.createElement(m,l({ref:t},d))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=a[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},83920:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=a(87462),n=(a(67294),a(3905));const o={title:"v0.2.13",slug:"/managed-datahub/release-notes/v_0_2_13",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_13.md"},l="v0.2.13",s={unversionedId:"docs/managed-datahub/release-notes/v_0_2_13",id:"version-0.13.0/docs/managed-datahub/release-notes/v_0_2_13",title:"v0.2.13",description:"---",source:"@site/versioned_docs/version-0.13.0/docs/managed-datahub/release-notes/v_0_2_13.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_2_13",permalink:"/docs/managed-datahub/release-notes/v_0_2_13",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_13.md",tags:[],version:"0.13.0",frontMatter:{title:"v0.2.13",slug:"/managed-datahub/release-notes/v_0_2_13",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_2_13.md"},sidebar:"overviewSidebar",previous:{title:"v0.2.14.1",permalink:"/docs/managed-datahub/release-notes/v_0_2_14"},next:{title:"v0.2.12",permalink:"/docs/managed-datahub/release-notes/v_0_2_12"}},i={},u=[{value:"Release Availability Date",id:"release-availability-date",level:2},{value:"Recommended CLI/SDK",id:"recommended-clisdk",level:2},{value:"Release Changelog",id:"release-changelog",level:2},{value:"Some notable features in this SaaS release",id:"some-notable-features-in-this-saas-release",level:2}],d={toc:u},c="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(c,(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v0213"},"v0.2.13"),(0,n.kt)("hr",null),(0,n.kt)("h2",{id:"release-availability-date"},"Release Availability Date"),(0,n.kt)("p",null,"27-Nov-2023"),(0,n.kt)("h2",{id:"recommended-clisdk"},"Recommended CLI/SDK"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"v0.12.0.3")," with release notes at ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/acryldata/datahub/releases/tag/v0.12.0.3"},"https://github.com/acryldata/datahub/releases/tag/v0.12.0.3"))),(0,n.kt)("p",null,"If you are using an older CLI/SDK version then please upgrade it. This applies for all CLI/SDK usages, if you are using it through your terminal, github actions, airflow, in python SDK somewhere, Java SKD etc. This is a strong recommendation to upgrade as we keep on pushing fixes in the CLI and it helps us support you better."),(0,n.kt)("h2",{id:"release-changelog"},"Release Changelog"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Since ",(0,n.kt)("inlineCode",{parentName:"li"},"v0.2.12")," these changes from OSS DataHub ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/compare/75252a3d9f6a576904be5a0790d644b9ae2df6ac...d9de854d276c118afc55264ecc9e2712b91b4ab2"},"https://github.com/datahub-project/datahub/compare/75252a3d9f6a576904be5a0790d644b9ae2df6ac...d9de854d276c118afc55264ecc9e2712b91b4ab2")," have been pulled in.")),(0,n.kt)("h2",{id:"some-notable-features-in-this-saas-release"},"Some notable features in this SaaS release"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Data Contract support added. This is currently disabled by default. If you wish to use this feature please reach out to your rep.")))}p.isMDXComponent=!0}}]);