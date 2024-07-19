"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[57752],{15680:(e,t,a)=>{a.d(t,{xA:()=>y,yg:()=>m});var l=a(96540);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),g=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},y=function(e){var t=g(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},c=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,y=i(e,["components","mdxType","originalType","parentName"]),p=g(a),c=r,m=p["".concat(s,".").concat(c)]||p[c]||u[c]||n;return a?l.createElement(m,o(o({ref:t},y),{},{components:a})):l.createElement(m,o({ref:t},y))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:r,o[1]=i;for(var g=2;g<n;g++)o[g]=a[g];return l.createElement.apply(null,o)}return l.createElement.apply(null,a)}c.displayName="MDXCreateElement"},99444:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>y,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>g,toc:()=>p});a(96540);var l=a(15680);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})),e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"interfaces",title:"Interfaces",slug:"interfaces",sidebar_position:4},s=void 0,g={unversionedId:"graphql/interfaces",id:"graphql/interfaces",title:"Interfaces",description:"Aspect",source:"@site/genDocs/graphql/interfaces.md",sourceDirName:"graphql",slug:"/graphql/interfaces",permalink:"/docs/graphql/interfaces",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/genDocs/graphql/interfaces.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"interfaces",title:"Interfaces",slug:"interfaces",sidebar_position:4},sidebar:"overviewSidebar",previous:{title:"Input objects",permalink:"/docs/graphql/inputObjects"},next:{title:"Unions",permalink:"/docs/graphql/unions"}},y={},p=[{value:"Aspect",id:"aspect",level:2},{value:"BrowsableEntity",id:"browsableentity",level:2},{value:"Entity",id:"entity",level:2},{value:"EntityWithRelationships",id:"entitywithrelationships",level:2},{value:"TimeSeriesAspect",id:"timeseriesaspect",level:2}],u={toc:p},c="wrapper";function m(e){var{components:t}=e,a=o(e,["components"]);return(0,l.yg)(c,n(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},l=Object.keys(a);"function"==typeof Object.getOwnPropertySymbols&&(l=l.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),l.forEach((function(t){r(e,t,a[t])}))}return e}({},u,a),{components:t,mdxType:"MDXLayout"}),(0,l.yg)("h2",{id:"aspect"},"Aspect"),(0,l.yg)("p",null,"A versioned aspect, or single group of related metadata, associated with an Entity and having a unique version"),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Implemented by")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#schemametadata"},"SchemaMetadata"))),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Fields")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Name"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"version",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/scalars#long"},(0,l.yg)("code",null,"Long"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"The version of the aspect, where zero represents the latest version"))))),(0,l.yg)("h2",{id:"browsableentity"},"BrowsableEntity"),(0,l.yg)("p",null,"A Metadata Entity which is browsable, or has browse paths."),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Implemented by")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataset"},"Dataset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#notebook"},"Notebook")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dashboard"},"Dashboard")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#chart"},"Chart")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataflow"},"DataFlow")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datajob"},"DataJob")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodel"},"MLModel")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodelgroup"},"MLModelGroup")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeaturetable"},"MLFeatureTable"))),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Fields")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Name"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"browsePaths",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/objects#browsepath"},(0,l.yg)("code",null,"[BrowsePath!]"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"The browse paths corresponding to an entity. If no Browse Paths have been generated before, this will be null."))))),(0,l.yg)("h2",{id:"entity"},"Entity"),(0,l.yg)("p",null,"A top level Metadata Entity"),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Implemented by")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#assertion"},"Assertion")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#accesstokenmetadata"},"AccessTokenMetadata")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datahubconnection"},"DataHubConnection")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataset"},"Dataset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datacontract"},"DataContract")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#ermodelrelationship"},"ERModelRelationship")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#role"},"Role")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#versioneddataset"},"VersionedDataset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#glossaryterm"},"GlossaryTerm")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#glossarynode"},"GlossaryNode")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataplatform"},"DataPlatform")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataplatforminstance"},"DataPlatformInstance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#container"},"Container")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#schemafieldentity"},"SchemaFieldEntity")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#corpuser"},"CorpUser")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#corpgroup"},"CorpGroup")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#tag"},"Tag")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#notebook"},"Notebook")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dashboard"},"Dashboard")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#chart"},"Chart")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataflow"},"DataFlow")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datajob"},"DataJob")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataprocessinstance"},"DataProcessInstance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datahubpolicy"},"DataHubPolicy")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodel"},"MLModel")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodelgroup"},"MLModelGroup")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeature"},"MLFeature")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlprimarykey"},"MLPrimaryKey")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeaturetable"},"MLFeatureTable")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#domain"},"Domain")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datahubrole"},"DataHubRole")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#post"},"Post")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datahubview"},"DataHubView")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#queryentity"},"QueryEntity")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataproduct"},"DataProduct")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#ownershiptypeentity"},"OwnershipTypeEntity")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#entitytypeentity"},"EntityTypeEntity")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#restricted"},"Restricted")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#businessattribute"},"BusinessAttribute")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#form"},"Form")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#incident"},"Incident")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#structuredpropertyentity"},"StructuredPropertyEntity")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datatypeentity"},"DataTypeEntity")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#test"},"Test")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/interfaces#entitywithrelationships"},"EntityWithRelationships"))),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Fields")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Name"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"urn",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/scalars#string"},(0,l.yg)("code",null,"String!"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"A primary key of the Metadata Entity"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"type",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/enums#entitytype"},(0,l.yg)("code",null,"EntityType!"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"A standard Entity Type"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"relationships",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/objects#entityrelationshipsresult"},(0,l.yg)("code",null,"EntityRelationshipsResult"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"List of relationships between the source Entity and some destination entities with a given types"),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Arguments")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Name"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"input",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/inputObjects#relationshipsinput"},(0,l.yg)("code",null,"RelationshipsInput!"))),(0,l.yg)("td",null)))))))),(0,l.yg)("h2",{id:"entitywithrelationships"},"EntityWithRelationships"),(0,l.yg)("p",null,"Deprecated, use relationships field instead"),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Implements")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/interfaces#entity"},"Entity"))),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Implemented by")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#assertion"},"Assertion")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataset"},"Dataset")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#ermodelrelationship"},"ERModelRelationship")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dashboard"},"Dashboard")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#chart"},"Chart")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataflow"},"DataFlow")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datajob"},"DataJob")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataprocessinstance"},"DataProcessInstance")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodel"},"MLModel")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlmodelgroup"},"MLModelGroup")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeature"},"MLFeature")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlprimarykey"},"MLPrimaryKey")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#mlfeaturetable"},"MLFeatureTable")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#restricted"},"Restricted"))),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Fields")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Name"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"urn",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/scalars#string"},(0,l.yg)("code",null,"String!"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"A primary key associated with the Metadata Entity"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"type",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/enums#entitytype"},(0,l.yg)("code",null,"EntityType!"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"A standard Entity Type"))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"relationships",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/objects#entityrelationshipsresult"},(0,l.yg)("code",null,"EntityRelationshipsResult"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"Granular API for querying edges extending from this entity"),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Arguments")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Name"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"input",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/inputObjects#relationshipsinput"},(0,l.yg)("code",null,"RelationshipsInput!"))),(0,l.yg)("td",null)))))),(0,l.yg)("tr",null,(0,l.yg)("td",null,"lineage",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/objects#entitylineageresult"},(0,l.yg)("code",null,"EntityLineageResult"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"Edges extending from this entity grouped by direction in the lineage graph"),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Arguments")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Name"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"input",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/inputObjects#lineageinput"},(0,l.yg)("code",null,"LineageInput!"))),(0,l.yg)("td",null)))))))),(0,l.yg)("h2",{id:"timeseriesaspect"},"TimeSeriesAspect"),(0,l.yg)("p",null,"A time series aspect, or a group of related metadata associated with an Entity and corresponding to a particular timestamp"),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Implemented by")),(0,l.yg)("ul",null,(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dataprocessrunevent"},"DataProcessRunEvent")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#dashboardusagemetrics"},"DashboardUsageMetrics")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#datasetprofile"},"DatasetProfile")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#assertionrunevent"},"AssertionRunEvent")),(0,l.yg)("li",{parentName:"ul"},(0,l.yg)("a",{parentName:"li",href:"/docs/graphql/objects#operation"},"Operation"))),(0,l.yg)("p",{style:{marginBottom:"0.4em"}},(0,l.yg)("strong",null,"Fields")),(0,l.yg)("table",null,(0,l.yg)("thead",null,(0,l.yg)("tr",null,(0,l.yg)("th",null,"Name"),(0,l.yg)("th",null,"Description"))),(0,l.yg)("tbody",null,(0,l.yg)("tr",null,(0,l.yg)("td",null,"timestampMillis",(0,l.yg)("br",null),(0,l.yg)("a",{href:"/docs/graphql/scalars#long"},(0,l.yg)("code",null,"Long!"))),(0,l.yg)("td",null,(0,l.yg)("p",null,"The timestamp associated with the time series aspect in milliseconds"))))))}m.isMDXComponent=!0}}]);