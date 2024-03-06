"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[97862],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(a),m=r,g=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return a?n.createElement(g,i(i({ref:t},c),{},{components:a})):n.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},95241:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={slug:"/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md"},i="Introduction to Metadata Ingestion",s={unversionedId:"metadata-ingestion/README",id:"version-0.13.0/metadata-ingestion/README",title:"Introduction to Metadata Ingestion",description:"Please see our Integrations page to browse our ingestion sources and filter on their features.",source:"@site/versioned_docs/version-0.13.0/metadata-ingestion/README.md",sourceDirName:"metadata-ingestion",slug:"/metadata-ingestion",permalink:"/docs/metadata-ingestion",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md",tags:[],version:"0.13.0",frontMatter:{slug:"/metadata-ingestion",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/README.md"},sidebar:"overviewSidebar",previous:{title:"v0.1.69",permalink:"/docs/managed-datahub/release-notes/v_0_1_69"},next:{title:"Recipes",permalink:"/docs/metadata-ingestion/recipe_overview"}},l={},d=[{value:"Integration Methods",id:"integration-methods",level:2},{value:"Types of Integration",id:"types-of-integration",level:2},{value:"Push-based Integration",id:"push-based-integration",level:3},{value:"Pull-based Integration",id:"pull-based-integration",level:3},{value:"Core Concepts",id:"core-concepts",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"introduction-to-metadata-ingestion"},"Introduction to Metadata Ingestion"),(0,r.kt)("admonition",{title:"Find Integration Source",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Please see our ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/integrations"},"Integrations page"))," to browse our ingestion sources and filter on their features.")),(0,r.kt)("h2",{id:"integration-methods"},"Integration Methods"),(0,r.kt)("p",null,"DataHub offers three methods for data ingestion:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/ui-ingestion"},"UI Ingestion")," : Easily configure and execute a metadata ingestion pipeline through the UI. "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/cli-ingestion"},"CLI Ingestion guide")," : Configure the ingestion pipeline using YAML and execute by it through CLI. "),(0,r.kt)("li",{parentName:"ul"},"SDK-based ingestion : Use ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/as-a-library"},"Python Emitter")," or ",(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-integration/java/as-a-library"},"Java emitter")," to programmatically control the ingestion pipelines. ")),(0,r.kt)("h2",{id:"types-of-integration"},"Types of Integration"),(0,r.kt)("p",null,"Integration can be divided into two concepts based on the method:"),(0,r.kt)("h3",{id:"push-based-integration"},"Push-based Integration"),(0,r.kt)("p",null,"Push-based integrations allow you to emit metadata directly from your data systems when metadata changes.\nExamples of push-based integrations include ",(0,r.kt)("a",{parentName:"p",href:"/docs/lineage/airflow"},"Airflow"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-integration/java/spark-lineage"},"Spark"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/integration_docs/great-expectations"},"Great Expectations")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/metadata-integration/java/datahub-protobuf"},"Protobuf Schemas"),'. This allows you to get low-latency metadata integration from the "active" agents in your data ecosystem.'),(0,r.kt)("h3",{id:"pull-based-integration"},"Pull-based Integration"),(0,r.kt)("p",null,'Pull-based integrations allow you to "crawl" or "ingest" metadata from the data systems by connecting to them and extracting metadata in a batch or incremental-batch manner.\nExamples of pull-based integrations include BigQuery, Snowflake, Looker, Tableau and many others.'),(0,r.kt)("h2",{id:"core-concepts"},"Core Concepts"),(0,r.kt)("p",null,"The following are the core concepts related to ingestion:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/source_overview"},"Sources"),": Data systems from which extract metadata. (e.g. BigQuery, MySQL)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/sink_overview"},"Sinks"),": Destination for metadata (e.g. File, DataHub)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/recipe_overview"},"Recipe"),": The main configuration for ingestion in the form or .yaml file")),(0,r.kt)("p",null,"For more advanced guides, please refer to the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/developing"},"Developing on Metadata Ingestion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/adding-source"},"Adding a Metadata Ingestion Source")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion/docs/transformer/intro"},"Using Transformers"))))}p.isMDXComponent=!0}}]);