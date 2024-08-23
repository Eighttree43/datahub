"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[36909],{23484:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>y,contentTitle:()=>g,default:()=>h,frontMatter:()=>p,metadata:()=>d,toc:()=>c});t(96540);var n=t(15680),s=t(53720),i=t(5400);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){return a=null!=a?a:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):function(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})),e}function o(e,a){if(null==e)return{};var t,n,s=function(e,a){if(null==e)return{};var t,n,s={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(s[t]=e[t]);return s}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}const p={sidebar_position:17,title:"Elasticsearch",slug:"/generated/ingestion/sources/elasticsearch",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elasticsearch.md"},g="Elasticsearch",d={unversionedId:"docs/generated/ingestion/sources/elasticsearch",id:"version-0.14.0/docs/generated/ingestion/sources/elasticsearch",title:"Elasticsearch",description:"Certified",source:"@site/versioned_docs/version-0.14.0/docs/generated/ingestion/sources/elasticsearch.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/elasticsearch",permalink:"/docs/0.14.0/generated/ingestion/sources/elasticsearch",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elasticsearch.md",tags:[],version:"0.14.0",sidebarPosition:17,frontMatter:{sidebar_position:17,title:"Elasticsearch",slug:"/generated/ingestion/sources/elasticsearch",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/elasticsearch.md"},sidebar:"overviewSidebar",previous:{title:"DynamoDB",permalink:"/docs/0.14.0/generated/ingestion/sources/dynamodb"},next:{title:"Feast",permalink:"/docs/0.14.0/generated/ingestion/sources/feast"}},y={},c=[{value:"Important Capabilities",id:"important-capabilities",level:3},{value:"CLI based Ingestion",id:"cli-based-ingestion",level:3},{value:"Install the Plugin",id:"install-the-plugin",level:4},{value:"Starter Recipe",id:"starter-recipe",level:3},{value:"Config Details",id:"config-details",level:3},{value:"Code Coordinates",id:"code-coordinates",level:3}],m={toc:c},f="wrapper";function h(e){var{components:a}=e,t=o(e,["components"]);return(0,n.yg)(f,r(function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{},n=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(a){l(e,a,t[a])}))}return e}({},m,t),{components:a,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"elasticsearch"},"Elasticsearch"),(0,n.yg)("p",null,(0,n.yg)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,n.yg)("h3",{id:"important-capabilities"},"Important Capabilities"),(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:null},"Capability"),(0,n.yg)("th",{parentName:"tr",align:null},"Status"),(0,n.yg)("th",{parentName:"tr",align:null},"Notes"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:null},(0,n.yg)("a",{parentName:"td",href:"/docs/0.14.0/platform-instances"},"Platform Instance")),(0,n.yg)("td",{parentName:"tr",align:null},"\u2705"),(0,n.yg)("td",{parentName:"tr",align:null},"Enabled by default")))),(0,n.yg)("p",null,"This plugin extracts the following:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Metadata for indexes"),(0,n.yg)("li",{parentName:"ul"},"Column types associated with each index field")),(0,n.yg)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,n.yg)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,n.yg)("p",null,"The ",(0,n.yg)("inlineCode",{parentName:"p"},"elasticsearch")," source works out of the box with ",(0,n.yg)("inlineCode",{parentName:"p"},"acryl-datahub"),"."),(0,n.yg)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,n.yg)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,n.yg)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,n.yg)("p",null,"For general pointers on writing and running a recipe, see our ",(0,n.yg)("a",{parentName:"p",href:"/docs/0.14.0/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-yaml"},'source:\n  type: "elasticsearch"\n  config:\n    # Coordinates\n    host: \'localhost:9200\'\n\n    # Credentials\n    username: user # optional\n    password: pass # optional\n\n    # SSL support\n    use_ssl: False\n    verify_certs: False\n    ca_certs: "./path/ca.cert"\n    client_cert: "./path/client.cert"\n    client_key: "./path/client.key"\n    ssl_assert_hostname: False\n    ssl_assert_fingerprint: "./path/cert.fingerprint"\n\n    # Options\n    url_prefix: "" # optional url_prefix\n    env: "PROD"\n    index_pattern:\n      allow: [".*some_index_name_pattern*"]\n      deny: [".*skip_index_name_pattern*"]\n    ingest_index_templates: False\n    index_template_pattern:\n      allow: [".*some_index_template_name_pattern*"]\n\nsink:\n# sink configs\n\n')),(0,n.yg)("h3",{id:"config-details"},"Config Details"),(0,n.yg)(s.A,{mdxType:"Tabs"},(0,n.yg)(i.A,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,n.yg)("p",null,"Note that a ",(0,n.yg)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,n.yg)("div",{className:"config-table"},(0,n.yg)("table",null,(0,n.yg)("thead",{parentName:"table"},(0,n.yg)("tr",{parentName:"thead"},(0,n.yg)("th",{parentName:"tr",align:"left"},"Field"),(0,n.yg)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.yg)("tbody",{parentName:"table"},(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ca_certs"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Path to a certificate authority (CA) certificate.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"client_cert"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Path to the file containing the private key and the certificate, or cert only if using client_key.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"client_key"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Path to the file containing the private key if using separate cert and key files.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"host"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The elastic search host URI. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"localhost:9200")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ingest_index_templates"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Ingests ES index templates if enabled. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"password"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The password credential.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"platform_instance"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The instance of the platform that all assets produced by this recipe belong to")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ssl_assert_fingerprint"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Verify the supplied certificate fingerprint if not None.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"ssl_assert_hostname"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Use hostname verification if not False. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"url_prefix"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"There are cases where an enterprise would have multiple elastic search clusters. One way for them to manage is to have a single endpoint for all the elastic search clusters and use url_prefix for routing requests to different clusters. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"})))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"use_ssl"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to use SSL for the connection or not. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"username"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The username credential.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"verify_certs"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to verify SSL certificates. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"env"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The environment that all assets produced by this connector belong to ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"PROD")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"collapse_urns"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"CollapseUrns"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to remove from the name of the URN. All of the indices before removal of URNs are considered as the same dataset. These are applied in order for each URN. ",(0,n.yg)("br",null),"         The main case where you would want to have multiple of these if the name where you are trying to remove suffix from have different formats. ",(0,n.yg)("br",null),"         e.g. ending with -YYYY-MM-DD as well as ending -epochtime would require you to have 2 regex patterns to remove the suffixes across all URNs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"collapse_urns."),(0,n.yg)("span",{className:"path-main"},"urns_suffix_regex"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to remove from the name of the URN. All of the indices before removal of URNs are considered as the same dataset. These are applied in order for each URN. ",(0,n.yg)("br",null),"         The main case where you would want to have multiple of these if the name where you are trying to remove suffix from have different formats. ",(0,n.yg)("br",null),"         e.g. ending with -YYYY-MM-DD as well as ending -epochtime would require you to have 2 regex patterns to remove the suffixes across all URNs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"collapse_urns.urns_suffix_regex."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"index_pattern"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"AllowDenyPattern"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"regex patterns for indexes to filter in ingestion. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","'","^","_",".","*","'",", ","'","^ilm-history.","*","...")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_pattern."),(0,n.yg)("span",{className:"path-main"},"ignoreCase"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_pattern."),(0,n.yg)("span",{className:"path-main"},"allow"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to include in ingestion ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","'",".","*","'","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_pattern.allow."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_pattern."),(0,n.yg)("span",{className:"path-main"},"deny"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to exclude from ingestion. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_pattern.deny."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"index_template_pattern"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"AllowDenyPattern"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"The regex patterns for filtering index templates to ingest. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"{","'","allow","'",": ","[","'",".","*","'","]",", ","'","deny","'",": ","[","'","^","_",".","*","'","]",", ","'","ignoreCase","'",": ...")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_template_pattern."),(0,n.yg)("span",{className:"path-main"},"ignoreCase"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to ignore case sensitivity during pattern matching. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"True")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_template_pattern."),(0,n.yg)("span",{className:"path-main"},"allow"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to include in ingestion ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","'",".","*","'","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_template_pattern.allow."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_template_pattern."),(0,n.yg)("span",{className:"path-main"},"deny"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"array"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"List of regex patterns to exclude from ingestion. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"[","]")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"index_template_pattern.deny."),(0,n.yg)("span",{className:"path-main"},"string"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"string"))),(0,n.yg)("td",{parentName:"tr",align:"left"})),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-main"},"profiling"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"ElasticProfiling"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Configs to ingest data profiles from ElasticSearch.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling."),(0,n.yg)("span",{className:"path-main"},"enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to enable profiling for the elastic search source. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling."),(0,n.yg)("span",{className:"path-main"},"operation_config"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"OperationConfig"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Experimental feature. To specify operation configs.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling.operation_config."),(0,n.yg)("span",{className:"path-main"},"lower_freq_profile_enabled"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"boolean"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Whether to do profiling at lower freq or not. This does not do any scheduling just adds additional checks to when not to run profiling. ",(0,n.yg)("div",{className:"default-line default-line-with-docs"},"Default: ",(0,n.yg)("span",{className:"default-value"},"False")))),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling.operation_config."),(0,n.yg)("span",{className:"path-main"},"profile_date_of_month"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number between 1 to 31 for date of month (both inclusive). If not specified, defaults to Nothing and this field does not take affect.")),(0,n.yg)("tr",{parentName:"tbody"},(0,n.yg)("td",{parentName:"tr",align:"left"},(0,n.yg)("div",{className:"path-line"},(0,n.yg)("span",{className:"path-prefix"},"profiling.operation_config."),(0,n.yg)("span",{className:"path-main"},"profile_day_of_week"))," ",(0,n.yg)("div",{className:"type-name-line"},(0,n.yg)("span",{className:"type-name"},"integer"))),(0,n.yg)("td",{parentName:"tr",align:"left"},"Number between 0 to 6 for day of week (both inclusive). 0 is Monday and 6 is Sunday. If not specified, defaults to Nothing and this field does not take affect.")))))),(0,n.yg)(i.A,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,n.yg)("p",null,"The ",(0,n.yg)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,n.yg)("pre",null,(0,n.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "ElasticsearchSourceConfig",\n  "description": "Any source that connects to a platform should inherit this class",\n  "type": "object",\n  "properties": {\n    "env": {\n      "title": "Env",\n      "description": "The environment that all assets produced by this connector belong to",\n      "default": "PROD",\n      "type": "string"\n    },\n    "platform_instance": {\n      "title": "Platform Instance",\n      "description": "The instance of the platform that all assets produced by this recipe belong to",\n      "type": "string"\n    },\n    "host": {\n      "title": "Host",\n      "description": "The elastic search host URI.",\n      "default": "localhost:9200",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "The username credential.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "The password credential.",\n      "type": "string"\n    },\n    "use_ssl": {\n      "title": "Use Ssl",\n      "description": "Whether to use SSL for the connection or not.",\n      "default": false,\n      "type": "boolean"\n    },\n    "verify_certs": {\n      "title": "Verify Certs",\n      "description": "Whether to verify SSL certificates.",\n      "default": false,\n      "type": "boolean"\n    },\n    "ca_certs": {\n      "title": "Ca Certs",\n      "description": "Path to a certificate authority (CA) certificate.",\n      "type": "string"\n    },\n    "client_cert": {\n      "title": "Client Cert",\n      "description": "Path to the file containing the private key and the certificate, or cert only if using client_key.",\n      "type": "string"\n    },\n    "client_key": {\n      "title": "Client Key",\n      "description": "Path to the file containing the private key if using separate cert and key files.",\n      "type": "string"\n    },\n    "ssl_assert_hostname": {\n      "title": "Ssl Assert Hostname",\n      "description": "Use hostname verification if not False.",\n      "default": false,\n      "type": "boolean"\n    },\n    "ssl_assert_fingerprint": {\n      "title": "Ssl Assert Fingerprint",\n      "description": "Verify the supplied certificate fingerprint if not None.",\n      "type": "string"\n    },\n    "url_prefix": {\n      "title": "Url Prefix",\n      "description": "There are cases where an enterprise would have multiple elastic search clusters. One way for them to manage is to have a single endpoint for all the elastic search clusters and use url_prefix for routing requests to different clusters.",\n      "default": "",\n      "type": "string"\n    },\n    "index_pattern": {\n      "title": "Index Pattern",\n      "description": "regex patterns for indexes to filter in ingestion.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [\n          "^_.*",\n          "^ilm-history.*"\n        ],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "ingest_index_templates": {\n      "title": "Ingest Index Templates",\n      "description": "Ingests ES index templates if enabled.",\n      "default": false,\n      "type": "boolean"\n    },\n    "index_template_pattern": {\n      "title": "Index Template Pattern",\n      "description": "The regex patterns for filtering index templates to ingest.",\n      "default": {\n        "allow": [\n          ".*"\n        ],\n        "deny": [\n          "^_.*"\n        ],\n        "ignoreCase": true\n      },\n      "allOf": [\n        {\n          "$ref": "#/definitions/AllowDenyPattern"\n        }\n      ]\n    },\n    "profiling": {\n      "title": "Profiling",\n      "description": "Configs to ingest data profiles from ElasticSearch.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/ElasticProfiling"\n        }\n      ]\n    },\n    "collapse_urns": {\n      "title": "Collapse Urns",\n      "description": "List of regex patterns to remove from the name of the URN. All of the indices before removal of URNs are considered as the same dataset. These are applied in order for each URN.\\n        The main case where you would want to have multiple of these if the name where you are trying to remove suffix from have different formats.\\n        e.g. ending with -YYYY-MM-DD as well as ending -epochtime would require you to have 2 regex patterns to remove the suffixes across all URNs.",\n      "allOf": [\n        {\n          "$ref": "#/definitions/CollapseUrns"\n        }\n      ]\n    }\n  },\n  "additionalProperties": false,\n  "definitions": {\n    "AllowDenyPattern": {\n      "title": "AllowDenyPattern",\n      "description": "A class to store allow deny regexes",\n      "type": "object",\n      "properties": {\n        "allow": {\n          "title": "Allow",\n          "description": "List of regex patterns to include in ingestion",\n          "default": [\n            ".*"\n          ],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "deny": {\n          "title": "Deny",\n          "description": "List of regex patterns to exclude from ingestion.",\n          "default": [],\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        },\n        "ignoreCase": {\n          "title": "Ignorecase",\n          "description": "Whether to ignore case sensitivity during pattern matching.",\n          "default": true,\n          "type": "boolean"\n        }\n      },\n      "additionalProperties": false\n    },\n    "OperationConfig": {\n      "title": "OperationConfig",\n      "type": "object",\n      "properties": {\n        "lower_freq_profile_enabled": {\n          "title": "Lower Freq Profile Enabled",\n          "description": "Whether to do profiling at lower freq or not. This does not do any scheduling just adds additional checks to when not to run profiling.",\n          "default": false,\n          "type": "boolean"\n        },\n        "profile_day_of_week": {\n          "title": "Profile Day Of Week",\n          "description": "Number between 0 to 6 for day of week (both inclusive). 0 is Monday and 6 is Sunday. If not specified, defaults to Nothing and this field does not take affect.",\n          "type": "integer"\n        },\n        "profile_date_of_month": {\n          "title": "Profile Date Of Month",\n          "description": "Number between 1 to 31 for date of month (both inclusive). If not specified, defaults to Nothing and this field does not take affect.",\n          "type": "integer"\n        }\n      },\n      "additionalProperties": false\n    },\n    "ElasticProfiling": {\n      "title": "ElasticProfiling",\n      "type": "object",\n      "properties": {\n        "enabled": {\n          "title": "Enabled",\n          "description": "Whether to enable profiling for the elastic search source.",\n          "default": false,\n          "type": "boolean"\n        },\n        "operation_config": {\n          "title": "Operation Config",\n          "description": "Experimental feature. To specify operation configs.",\n          "allOf": [\n            {\n              "$ref": "#/definitions/OperationConfig"\n            }\n          ]\n        }\n      },\n      "additionalProperties": false\n    },\n    "CollapseUrns": {\n      "title": "CollapseUrns",\n      "type": "object",\n      "properties": {\n        "urns_suffix_regex": {\n          "title": "Urns Suffix Regex",\n          "description": "List of regex patterns to remove from the name of the URN. All of the indices before removal of URNs are considered as the same dataset. These are applied in order for each URN.\\n        The main case where you would want to have multiple of these if the name where you are trying to remove suffix from have different formats.\\n        e.g. ending with -YYYY-MM-DD as well as ending -epochtime would require you to have 2 regex patterns to remove the suffixes across all URNs.",\n          "type": "array",\n          "items": {\n            "type": "string"\n          }\n        }\n      },\n      "additionalProperties": false\n    }\n  }\n}\n')))),(0,n.yg)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Class Name: ",(0,n.yg)("inlineCode",{parentName:"li"},"datahub.ingestion.source.elastic_search.ElasticsearchSource")),(0,n.yg)("li",{parentName:"ul"},"Browse on ",(0,n.yg)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/elastic_search.py"},"GitHub"))),(0,n.yg)("h2",null,"Questions"),(0,n.yg)("p",null,"If you've got any questions on configuring ingestion for Elasticsearch, feel free to ping us on ",(0,n.yg)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack"),"."))}h.isMDXComponent=!0}}]);