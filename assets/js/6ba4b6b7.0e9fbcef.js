"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[81959],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>b});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(a),m=r,b=c["".concat(o,".").concat(m)]||c[m]||u[m]||s;return a?n.createElement(b,i(i({ref:t},d),{},{components:a})):n.createElement(b,i({ref:t},d))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18679:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(67294),r=a(86010);const s={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,i),hidden:a},t)}},73992:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(87462),r=a(67294),s=a(86010),i=a(72957),l=a(16550),o=a(75238),p=a(33609),d=a(92560);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??c(a);return function(e){const t=(0,p.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,o._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,s=u(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:s}))),[o,p]=b({queryString:a,groupId:n}),[c,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,d.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:n}),f=(()=>{const e=o??c;return m({value:e,tabValues:s})?e:null})();(0,r.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),p(e),h(e)}),[p,h,s]),tabValues:s}}var f=a(51048);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:a,selectedValue:l,selectValue:o,tabValues:p}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const t=e.currentTarget,a=d.indexOf(t),n=p[a].value;n!==l&&(c(t),o(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;t=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;t=d[a]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},t)},p.map((e=>{let{value:t,label:a,attributes:i}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:u},i,{className:(0,s.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function N(e){let{lazy:t,children:a,selectedValue:n}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=h(e);return r.createElement("div",{className:(0,s.Z)("tabs-container",g.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(N,(0,n.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},10033:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>b,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var n=a(87462),r=(a(67294),a(3905)),s=a(73992),i=a(18679);const l={sidebar_position:29,title:"Metabase",slug:"/generated/ingestion/sources/metabase",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md"},o="Metabase",p={unversionedId:"docs/generated/ingestion/sources/metabase",id:"docs/generated/ingestion/sources/metabase",title:"Metabase",description:"Certified",source:"@site/genDocs/docs/generated/ingestion/sources/metabase.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/metabase",permalink:"/docs/next/generated/ingestion/sources/metabase",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md",tags:[],version:"current",sidebarPosition:29,frontMatter:{sidebar_position:29,title:"Metabase",slug:"/generated/ingestion/sources/metabase",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/metabase.md"},sidebar:"overviewSidebar",previous:{title:"MariaDB",permalink:"/docs/next/generated/ingestion/sources/mariadb"},next:{title:"Microsoft SQL Server",permalink:"/docs/next/generated/ingestion/sources/mssql"}},d={},c=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"Collection",id:"collection",level:3},{value:"Dashboard",id:"dashboard",level:3},{value:"Chart",id:"chart",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Config Details",id:"config-details",level:3},{value:"Compatibility",id:"compatibility",level:2},{value:"Code Coordinates",id:"code-coordinates",level:3}],u={toc:c},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"metabase"},"Metabase"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,r.kt)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Capability"),(0,r.kt)("th",{parentName:"tr",align:null},"Status"),(0,r.kt)("th",{parentName:"tr",align:null},"Notes"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/docs/next/platform-instances"},"Platform Instance")),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Enabled by default")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Table-Level Lineage"),(0,r.kt)("td",{parentName:"tr",align:null},"\u2705"),(0,r.kt)("td",{parentName:"tr",align:null},"Supported by default")))),(0,r.kt)("p",null,"This plugin extracts Charts, dashboards, and associated metadata. This plugin is in beta and has only been tested\non PostgreSQL and H2 database."),(0,r.kt)("h3",{id:"collection"},"Collection"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api/collection"},"/api/collection")," endpoint is used to\nretrieve the available collections."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api/collection#get-apicollectioniditems"},"/api/collection/<COLLECTION_ID>/items?models=dashboard")," endpoint is used to retrieve a given collection and list their dashboards."),(0,r.kt)("h3",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api/dashboard"},"/api/dashboard/<DASHBOARD_ID>")," endpoint is used to retrieve a given Dashboard and grab its information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title and description"),(0,r.kt)("li",{parentName:"ul"},"Last edited by"),(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},"Link to the dashboard in Metabase"),(0,r.kt)("li",{parentName:"ul"},"Associated charts")),(0,r.kt)("h3",{id:"chart"},"Chart"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#card"},"/api/card")," endpoint is used to\nretrieve the following information."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Title and description"),(0,r.kt)("li",{parentName:"ul"},"Last edited by"),(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},"Link to the chart in Metabase"),(0,r.kt)("li",{parentName:"ul"},"Datasource and lineage")),(0,r.kt)("p",null,"The following properties for a chart are ingested in DataHub."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Dimensions")),(0,r.kt)("td",{parentName:"tr",align:null},"Column names")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Filters")),(0,r.kt)("td",{parentName:"tr",align:null},"Any filters applied to the chart")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Metrics")),(0,r.kt)("td",{parentName:"tr",align:null},"All columns that are being used for aggregation")))),(0,r.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,r.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[metabase]'\n")),(0,r.kt)("h3",{id:"config-details"},"Config Details"),(0,r.kt)(s.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,r.kt)("p",null,"Note that a ",(0,r.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,r.kt)("div",{className:"config-table"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"connect_uri"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Metabase host URL. ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"localhost:3000")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"database_alias_map"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"object"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Database name map to use when constructing dataset URN.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"database_id_to_instance_map"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"map(str,string)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"default_schema"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Default schema name to use when schema is not provided in an SQL query ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"public")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"display_uri"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"optional URL to use in links (if ",(0,r.kt)("inlineCode",{parentName:"td"},"connect_uri")," is only for ingestion)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"engine_platform_map"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"map(str,string)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"password"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string(password)"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Metabase password.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"platform_instance_map"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"map(str,string)"))),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"username"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"Metabase username.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("div",{className:"path-line"},(0,r.kt)("span",{className:"path-main"},"env"))," ",(0,r.kt)("div",{className:"type-name-line"},(0,r.kt)("span",{className:"type-name"},"string"))),(0,r.kt)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,r.kt)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,r.kt)("span",{className:"default-value"},"PROD")))))))),(0,r.kt)(i.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "MetabaseConfig",\n  "description": "Any non-Dataset source that produces lineage to Datasets should inherit this class.\\ne.g. Orchestrators, Pipelines, BI Tools etc.",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance_map": {\n      "title": "Platform Instance Map",\n      "description": "A holder for platform -> platform_instance mappings to generate correct dataset urns",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Metabase host URL.",\n      "default": "localhost:3000",\n      "type": "string"\n    },\n    "display_uri": {\n      "title": "Display Uri",\n      "description": "optional URL to use in links (if `connect_uri` is only for ingestion)",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Metabase username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Metabase password.",\n      "type": "string",\n      "writeOnly": true,\n      "format": "password"\n    },\n    "database_alias_map": {\n      "title": "Database Alias Map",\n      "description": "Database name map to use when constructing dataset URN.",\n      "type": "object"\n    },\n    "engine_platform_map": {\n      "title": "Engine Platform Map",\n      "description": "Custom mappings between metabase database engines and DataHub platforms",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "database_id_to_instance_map": {\n      "title": "Database Id To Instance Map",\n      "description": "Custom mappings between metabase database id and DataHub platform instance",\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    },\n    "default_schema": {\n      "title": "Default Schema",\n      "description": "Default schema name to use when schema is not provided in an SQL query",\n      "default": "public",\n      "type": "string"\n    }\n  },\n  "additionalProperties": false\n}\n')))),(0,r.kt)("p",null,"Metabase databases will be mapped to a DataHub platform based on the engine listed in the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#database"},"api/database")," response. This mapping can be\ncustomized by using the ",(0,r.kt)("inlineCode",{parentName:"p"},"engine_platform_map")," config option. For example, to map databases using the ",(0,r.kt)("inlineCode",{parentName:"p"},"athena")," engine to\nthe underlying datasets in the ",(0,r.kt)("inlineCode",{parentName:"p"},"glue")," platform, the following snippet can be used:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},"  engine_platform_map:\n    athena: glue\n")),(0,r.kt)("p",null,"DataHub will try to determine database name from Metabase ",(0,r.kt)("a",{parentName:"p",href:"https://www.metabase.com/docs/latest/api-documentation.html#database"},"api/database"),"\npayload. However, the name can be overridden from ",(0,r.kt)("inlineCode",{parentName:"p"},"database_alias_map")," for a given database connected to Metabase."),(0,r.kt)("p",null,"If several platform instances with the same platform (e.g. from several distinct clickhouse clusters) are present in DataHub,\nthe mapping between database id in Metabase and platform instance in DataHub may be configured with the following map:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yml"},'  database_id_to_instance_map:\n    "42": platform_instance_in_datahub\n')),(0,r.kt)("p",null,"The key in this map must be string, not integer although  Metabase API provides ",(0,r.kt)("inlineCode",{parentName:"p"},"id")," as number.\nIf ",(0,r.kt)("inlineCode",{parentName:"p"},"database_id_to_instance_map")," is not specified, ",(0,r.kt)("inlineCode",{parentName:"p"},"platform_instance_map")," is used for platform instance mapping. If none of the above are specified, platform instance is not used when constructing ",(0,r.kt)("inlineCode",{parentName:"p"},"urn")," when searching for dataset relations."),(0,r.kt)("h2",{id:"compatibility"},"Compatibility"),(0,r.kt)("p",null,"Metabase version ",(0,r.kt)("a",{parentName:"p",href:"https://www.metabase.com/start/oss/"},"v0.48.3")),(0,r.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Class Name: ",(0,r.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.metabase.MetabaseSource")),(0,r.kt)("li",{parentName:"ul"},"Browse on ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/metabase.py"},"GitHub"))),(0,r.kt)("h2",null,"Questions"),(0,r.kt)("p",null,"If you've got any questions on configuring ingestion for Metabase, feel free to ping us on ",(0,r.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}b.isMDXComponent=!0}}]);