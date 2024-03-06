"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[71779],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function u(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var s=r.createContext({}),l=function(e){var t=r.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(i),g=n,m=d["".concat(s,".").concat(g)]||d[g]||p[g]||o;return i?r.createElement(m,a(a({ref:t},c),{},{components:i})):r.createElement(m,a({ref:t},c))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=g;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:n,a[1]=u;for(var l=2;l<o;l++)a[l]=i[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}g.displayName="MDXCreateElement"},77971:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>l});var r=i(87462),n=(i(67294),i(3905));const o={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/bigquery/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/overview.md"},a="BigQuery Ingestion Guide: Overview",u={unversionedId:"docs/quick-ingestion-guides/bigquery/overview",id:"version-0.13.0/docs/quick-ingestion-guides/bigquery/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/versioned_docs/version-0.13.0/docs/quick-ingestion-guides/bigquery/overview.md",sourceDirName:"docs/quick-ingestion-guides/bigquery",slug:"/quick-ingestion-guides/bigquery/overview",permalink:"/docs/quick-ingestion-guides/bigquery/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/overview.md",tags:[],version:"0.13.0",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/bigquery/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/bigquery/overview.md"},sidebar:"overviewSidebar",previous:{title:"CLI Ingestion",permalink:"/docs/metadata-ingestion/cli-ingestion"},next:{title:"Setup",permalink:"/docs/quick-ingestion-guides/bigquery/setup"}},s={},l=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Next Steps",id:"next-steps",level:2},{value:"Advanced Guides and Reference",id:"advanced-guides-and-reference",level:2}],c={toc:l},d="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(d,(0,r.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"bigquery-ingestion-guide-overview"},"BigQuery Ingestion Guide: Overview"),(0,n.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,n.kt)("p",null,"This guide will help you set up the BigQuery connector through the DataHub UI to begin ingesting metadata into DataHub."),(0,n.kt)("p",null,"Upon completing this guide, you will have a recurring ingestion pipeline that will extract metadata from BigQuery and load it into DataHub. This will include to following BigQuery asset types:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/resource-hierarchy#projects"},"Projects")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/datasets-intro"},"Datasets")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/tables-intro"},"Tables")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/views-intro"},"Views")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/bigquery/docs/materialized-views-intro"},"Materialized Views"))),(0,n.kt)("p",null,"This recurring ingestion pipeline will also extract:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Usage statistics")," to help you understand recent query activity"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Table-level lineage")," (where available) to automatically define interdependencies between datasets"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Table- and column-level profile statistics")," to help you understand the shape of the data")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"You will NOT have extracted ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/routines"},"Routines"),", ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/bigquery/docs/search-intro"},"Search Indexes")," from BigQuery, as the connector does not support ingesting these assets")),(0,n.kt)("h2",{id:"next-steps"},"Next Steps"),(0,n.kt)("p",null,"If that all sounds like what you're looking for, navigate to the ",(0,n.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/bigquery/setup"},"next page"),", where we'll talk about prerequisites"),(0,n.kt)("h2",{id:"advanced-guides-and-reference"},"Advanced Guides and Reference"),(0,n.kt)("p",null,"If you're looking to do something more in-depth, want to use CLI instead of the DataHub UI, or just need to look at the reference documentation for this connector, use these links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,n.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/bigquery/#module-bigquery"},"BigQuery Ingestion Reference Guide"))),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,n.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}p.isMDXComponent=!0}}]);