"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[82224],{15680:(e,n,t)=>{t.d(n,{xA:()=>p,yg:()=>m});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var r=a.createContext({}),u=function(e){var n=a.useContext(r),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return a.createElement(r.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,l=e.originalType,r=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),y=i,m=d["".concat(r,".").concat(y)]||d[y]||c[y]||l;return t?a.createElement(m,s(s({ref:n},p),{},{components:t})):a.createElement(m,s({ref:n},p))}));function m(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=t.length,s=new Array(l);s[0]=y;var o={};for(var r in n)hasOwnProperty.call(n,r)&&(o[r]=n[r]);o.originalType=e,o[d]="string"==typeof e?e:i,s[1]=o;for(var u=2;u<l;u++)s[u]=t[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},49682:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>d});t(96540);var a=t(15680);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const o={title:"DataHub Open Data Quality Assertions Specification",sidebar_label:"Open Data Quality Assertions Specification",slug:"/assertions/open-assertions-spec",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/assertions/open-assertions-spec.md"},r="DataHub Open Data Quality Assertions Specification",u={unversionedId:"docs/assertions/open-assertions-spec",id:"version-0.14.0/docs/assertions/open-assertions-spec",title:"DataHub Open Data Quality Assertions Specification",description:"DataHub is developing an open-source Data Quality Assertions Specification & Compiler that will allow you to declare data quality checks / expectations / assertions using a simple, universal",source:"@site/versioned_docs/version-0.14.0/docs/assertions/open-assertions-spec.md",sourceDirName:"docs/assertions",slug:"/assertions/open-assertions-spec",permalink:"/docs/0.14.0/assertions/open-assertions-spec",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/assertions/open-assertions-spec.md",tags:[],version:"0.14.0",frontMatter:{title:"DataHub Open Data Quality Assertions Specification",sidebar_label:"Open Data Quality Assertions Specification",slug:"/assertions/open-assertions-spec",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/assertions/open-assertions-spec.md"},sidebar:"overviewSidebar",previous:{title:"Volume Assertions",permalink:"/docs/0.14.0/managed-datahub/observe/volume-assertions"},next:{title:"Snowflake DMF Assertions [BETA]",permalink:"/docs/0.14.0/assertions/snowflake/snowflake_dmfs"}},p={},d=[{value:"Integrations",id:"integrations",level:2},{value:"The Specification: Declaring Data Quality Assertions in YAML",id:"the-specification-declaring-data-quality-assertions-in-yaml",level:2},{value:"Freshness Assertions",id:"freshness-assertions",level:3},{value:"Validating that Table is Updated Every 6 Hours",id:"validating-that-table-is-updated-every-6-hours",level:4},{value:"Supported Source Types",id:"supported-source-types",level:4},{value:"Volume Assertions",id:"volume-assertions",level:3},{value:"Validating that Tale Row Count is in Expected Range",id:"validating-that-tale-row-count-is-in-expected-range",level:4},{value:"Validating that Table Row Count is Less Than Value",id:"validating-that-table-row-count-is-less-than-value",level:4},{value:"Validating that Table Row Count is Greater Than Value",id:"validating-that-table-row-count-is-greater-than-value",level:4},{value:"Supported Conditions",id:"supported-conditions",level:4},{value:"Column Assertions",id:"column-assertions",level:3},{value:"Field Values Assertion: Validating that All Column Values are In Expected Range",id:"field-values-assertion-validating-that-all-column-values-are-in-expected-range",level:4},{value:"Field Values Assertion: Validating that All Column Values are In Expected Set",id:"field-values-assertion-validating-that-all-column-values-are-in-expected-set",level:4},{value:"Field Values Assertion: Validating that All Column Values are Email Addresses",id:"field-values-assertion-validating-that-all-column-values-are-email-addresses",level:4},{value:"Field Values Assertion: Supported Conditions",id:"field-values-assertion-supported-conditions",level:4},{value:"Field Metric Assertion: Validating No Missing Values in Column",id:"field-metric-assertion-validating-no-missing-values-in-column",level:4},{value:"Field Metric Assertion: Validating No Duplicates in Column",id:"field-metric-assertion-validating-no-duplicates-in-column",level:4},{value:"Field Metric Assertion: Validating String Column is Never Empty String",id:"field-metric-assertion-validating-string-column-is-never-empty-string",level:4},{value:"Field Metric Assertion: Supported Metrics",id:"field-metric-assertion-supported-metrics",level:4},{value:"Field Metric Assertion: Supported Conditions",id:"field-metric-assertion-supported-conditions",level:3},{value:"Custom SQL Assertions",id:"custom-sql-assertions",level:3},{value:"Validating Foreign Key Integrity",id:"validating-foreign-key-integrity",level:4},{value:"Comparing Row Counts Across Multiple Tables",id:"comparing-row-counts-across-multiple-tables",level:4},{value:"Supported Conditions",id:"supported-conditions-1",level:4},{value:"Schema Assertions (Coming Soon)",id:"schema-assertions-coming-soon",level:3},{value:"Validating Actual Schema Exactly Equals Expected Schema",id:"validating-actual-schema-exactly-equals-expected-schema",level:4},{value:"Validating Actual Schema is Contains all of Expected Schema",id:"validating-actual-schema-is-contains-all-of-expected-schema",level:4},{value:"Supported Data Types",id:"supported-data-types",level:4}],c={toc:d},y="wrapper";function m(e){var{components:n}=e,t=s(e,["components"]);return(0,a.yg)(y,l(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},c,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"datahub-open-data-quality-assertions-specification"},"DataHub Open Data Quality Assertions Specification"),(0,a.yg)("p",null,"DataHub is developing an open-source Data Quality Assertions Specification & Compiler that will allow you to declare data quality checks / expectations / assertions using a simple, universal\nYAML-based format, and then compile this into artifacts that can be registered or directly executed by 3rd party Data Quality tools like ",(0,a.yg)("a",{parentName:"p",href:"https://docs.snowflake.com/en/user-guide/data-quality-intro"},"Snowflake DMFs"),",\ndbt tests, Great Expectations or DataHub Cloud natively. "),(0,a.yg)("p",null,"Ultimately, our goal is to provide an framework-agnostic, highly-portable format for defining Data Quality checks, making it seamless to swap out the underlying\nassertion engine without service disruption for end consumers of the results of these data quality checks in catalogging tools like DataHub. "),(0,a.yg)("h2",{id:"integrations"},"Integrations"),(0,a.yg)("p",null,"Currently, the DataHub Open Assertions Specification supports the following integrations:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.0/assertions/snowflake/snowflake_dmfs"},"Snowflake DMF Assertions"))),(0,a.yg)("p",null,"And is looking for contributions to build out support for the following integrations:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"[Looking for Contributions]"," dbt tests"),(0,a.yg)("li",{parentName:"ul"},"[Looking for Contributions]"," Great Expectation checks")),(0,a.yg)("p",null,"Below, we'll look at how to define assertions in YAML, and then provide an usage overview for each support integration."),(0,a.yg)("h2",{id:"the-specification-declaring-data-quality-assertions-in-yaml"},"The Specification: Declaring Data Quality Assertions in YAML"),(0,a.yg)("p",null,"The following assertion types are currently supported by the DataHub YAML Assertion spec:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.0/managed-datahub/observe/freshness-assertions"},"Freshness")," "),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.0/managed-datahub/observe/volume-assertions"},"Volume")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.0/managed-datahub/observe/column-assertions"},"Column")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.0/managed-datahub/observe/custom-sql-assertions"},"Custom SQL")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("a",{parentName:"li",href:"/docs/0.14.0/managed-datahub/observe/schema-assertions"},"Schema"))),(0,a.yg)("p",null,"Each assertion type aims to validate a different aspect of structured table (e.g. on a data warehouse or data lake), from\nstructure to size to column integrity to custom metrics. "),(0,a.yg)("p",null,"In this section, we'll go over examples of defining each. "),(0,a.yg)("h3",{id:"freshness-assertions"},"Freshness Assertions"),(0,a.yg)("p",null,"Freshness Assertions allow you to verify that your data was updated within the expected timeframe.\nBelow you'll find examples of defining different types of freshness assertions via YAML. "),(0,a.yg)("h4",{id:"validating-that-table-is-updated-every-6-hours"},"Validating that Table is Updated Every 6 Hours"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: freshness\n    lookback_interval: '6 hours'\n    last_modified_field: updated_at\n    schedule:\n      type: interval\n      interval: '6 hours' # Run every 6 hours\n")),(0,a.yg)("p",null,"This assertion checks that the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema was updated within the last 6 hours\nby issuing a Query to the table which validates determines whether an update was made using the ",(0,a.yg)("inlineCode",{parentName:"p"},"updated_at")," column in the past 6 hours.\nTo use this check, we must specify the field that contains the last modified timestamp of a given row."),(0,a.yg)("p",null,"The ",(0,a.yg)("inlineCode",{parentName:"p"},"lookback_interval"),' field is used to specify the "lookback window" for the assertion, whereas the ',(0,a.yg)("inlineCode",{parentName:"p"},"schedule"),' field is used to specify how often the assertion should be run.\nThis allows you to schedule the assertion to run at a different frequency than the lookback window, for example\nto detect stale data as soon as it becomes "stale" by inspecting it more frequently.'),(0,a.yg)("h4",{id:"supported-source-types"},"Supported Source Types"),(0,a.yg)("p",null,"Currently, the only supported ",(0,a.yg)("inlineCode",{parentName:"p"},"sourceType")," for Freshness Assertions is ",(0,a.yg)("inlineCode",{parentName:"p"},"LAST_MODIFIED_FIELD"),". In the future,\nwe may support additional source types, such as ",(0,a.yg)("inlineCode",{parentName:"p"},"HIGH_WATERMARK"),", along with data source-specific types such as\n",(0,a.yg)("inlineCode",{parentName:"p"},"AUDIT_LOG")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"INFORMATION_SCHEMA"),"."),(0,a.yg)("h3",{id:"volume-assertions"},"Volume Assertions"),(0,a.yg)("p",null,"Volume Assertions allow you to verify that the number of records in your dataset meets your expectations.\nBelow you'll find examples of defining different types of volume assertions via YAML."),(0,a.yg)("h4",{id:"validating-that-tale-row-count-is-in-expected-range"},"Validating that Tale Row Count is in Expected Range"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: volume\n    metric: 'row_count'\n    condition:\n      type: between\n      min: 1000\n      max: 10000\n    # filters: \"event_type = 'purchase'\" Optionally add filters. \n    schedule:\n      type: on_table_change # Run when new data is added to the table. \n")),(0,a.yg)("p",null,"This assertion checks that the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema has between 1000 and 10000 records.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"condition")," field, you can specify the type of comparison to be made, and the ",(0,a.yg)("inlineCode",{parentName:"p"},"min")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"max")," fields to specify the range of values to compare against.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"filters")," field, you can optionally specify a SQL WHERE clause to filter the records being counted.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"schedule")," field you can specify when the assertion should be run, either on a fixed schedule or when new data is added to the table.\nThe only metric currently supported is ",(0,a.yg)("inlineCode",{parentName:"p"},"row_count"),". "),(0,a.yg)("h4",{id:"validating-that-table-row-count-is-less-than-value"},"Validating that Table Row Count is Less Than Value"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: volume\n    metric: 'row_count'\n    condition:\n      type: less_than_or_equal_to\n      value: 1000\n    # filters: \"event_type = 'purchase'\" Optionally add filters. \n    schedule:\n      type: on_table_change # Run when new data is added to the table. \n")),(0,a.yg)("h4",{id:"validating-that-table-row-count-is-greater-than-value"},"Validating that Table Row Count is Greater Than Value"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: volume\n    metric: 'row_count'\n    condition:\n      type: greater_than_or_equal_to\n      value: 1000\n    # filters: \"event_type = 'purchase'\" Optionally add filters. \n    schedule:\n      type: on_table_change # Run when new data is added to the table. \n")),(0,a.yg)("h4",{id:"supported-conditions"},"Supported Conditions"),(0,a.yg)("p",null,"The full set of supported volume assertion conditions include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"not_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"greater_than")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"greater_than_or_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less_than")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less_than_or_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"between"))),(0,a.yg)("h3",{id:"column-assertions"},"Column Assertions"),(0,a.yg)("p",null,"Column Assertions allow you to verify that the values in a column meet your expectations.\nBelow you'll find examples of defining different types of column assertions via YAML."),(0,a.yg)("p",null,"The specification currently supports 2 types of Column Assertions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Field Value"),": Asserts that the values in a column meet a specific condition."),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Field Metric"),": Asserts that a specific metric aggregated across the values in a column meet a specific condition.")),(0,a.yg)("p",null,"We'll go over examples of each below."),(0,a.yg)("h4",{id:"field-values-assertion-validating-that-all-column-values-are-in-expected-range"},"Field Values Assertion: Validating that All Column Values are In Expected Range"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: field\n    field: amount\n    condition:\n        type: between\n        min: 0\n        max: 10\n    exclude_nulls: True\n    # filters: \"event_type = 'purchase'\" Optionally add filters for Column Assertion. \n    # failure_threshold:\n    #  type: count\n    #  value: 10\n    schedule:\n      type: on_table_change\n")),(0,a.yg)("p",null,"This assertion checks that all values for the ",(0,a.yg)("inlineCode",{parentName:"p"},"amount")," column in the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema have values between 0 and 10.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"field")," field, you can specify the column to be asserted on, and using the ",(0,a.yg)("inlineCode",{parentName:"p"},"condition")," field, you can specify the type of comparison to be made,\nand the ",(0,a.yg)("inlineCode",{parentName:"p"},"min")," and ",(0,a.yg)("inlineCode",{parentName:"p"},"max")," fields to specify the range of values to compare against.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"schedule")," field you can specify when the assertion should be run, either on a fixed schedule or when new data is added to the table.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"filters")," field, you can optionally specify a SQL WHERE clause to filter the records being counted.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"exclude_nulls")," field, you can specify whether to exclude NULL values from the assertion, meaning that\nNULL will simply be ignored if encountered, as opposed to failing the check.\nUsing the ",(0,a.yg)("inlineCode",{parentName:"p"},"failure_threshold"),", we can set a threshold for the number of rows that can fail the assertion before the assertion is considered failed."),(0,a.yg)("h4",{id:"field-values-assertion-validating-that-all-column-values-are-in-expected-set"},"Field Values Assertion: Validating that All Column Values are In Expected Set"),(0,a.yg)("p",null,"The validate a VARCHAR / STRING column that should contain one of a set of values: "),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: field\n    field: product_id\n    condition:\n        type: in\n        value: \n          - 'product_1'\n          - 'product_2'\n          - 'product_3'\n    exclude_nulls: False\n    # filters: \"event_type = 'purchase'\" Optionally add filters for Column Assertion. \n    # failure_threshold:\n    #  type: count\n    #  value: 10\n    schedule:\n      type: on_table_change\n")),(0,a.yg)("h4",{id:"field-values-assertion-validating-that-all-column-values-are-email-addresses"},"Field Values Assertion: Validating that All Column Values are Email Addresses"),(0,a.yg)("p",null,"The validate a string column contains valid email addresses:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},'version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: field\n    field: email_address\n    condition:\n      type: matches_regex\n      value: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Z|a-z]{2,}"\n    exclude_nulls: False\n    # filters: "event_type = \'purchase\'" Optionally add filters for Column Assertion. \n    # failure_threshold:\n    #  type: count\n    #  value: 10\n    schedule:\n      type: on_table_change\n')),(0,a.yg)("h4",{id:"field-values-assertion-supported-conditions"},"Field Values Assertion: Supported Conditions"),(0,a.yg)("p",null,"The full set of supported field value conditions include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"in")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"not_in")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"is_null")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"is_not_null")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"not_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"greater_than")," # Numeric Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"greater_than_or_equal_to")," # Numeric Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less_than")," # Numeric Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less_than_or_equal_to")," # Numeric Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"between")," # Numeric Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"matches_regex")," # String Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"not_empty")," # String Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"length_greater_than")," # String Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"length_less_than")," # String Only"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"length_between")," # String Only")),(0,a.yg)("h4",{id:"field-metric-assertion-validating-no-missing-values-in-column"},"Field Metric Assertion: Validating No Missing Values in Column"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: field\n    field: col_date\n    metric: null_count\n    condition:\n      type: equal_to\n      value: 0\n    # filters: \"event_type = 'purchase'\" Optionally add filters for Column Assertion. \n    schedule:\n      type: on_table_change\n")),(0,a.yg)("p",null,"This assertion ensures that the ",(0,a.yg)("inlineCode",{parentName:"p"},"col_date")," column in the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema has no NULL values."),(0,a.yg)("h4",{id:"field-metric-assertion-validating-no-duplicates-in-column"},"Field Metric Assertion: Validating No Duplicates in Column"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: field\n    field: id\n    metric: unique_percentage\n    condition:\n      type: equal_to\n      value: 100\n    # filters: \"event_type = 'purchase'\" Optionally add filters for Column Assertion. \n    schedule:\n      type: on_table_change\n")),(0,a.yg)("p",null,"This assertion ensures that the ",(0,a.yg)("inlineCode",{parentName:"p"},"id")," column in the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema\nhas no duplicates, by checking that the unique percentage is 100%."),(0,a.yg)("h4",{id:"field-metric-assertion-validating-string-column-is-never-empty-string"},"Field Metric Assertion: Validating String Column is Never Empty String"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: field\n    field: name\n    metric: empty_percentage\n    condition:\n      type: equal_to\n      value: 0\n    # filters: \"event_type = 'purchase'\" Optionally add filters for Column Assertion. \n    schedule:\n      type: on_table_change\n")),(0,a.yg)("p",null,"This assertion ensures that the ",(0,a.yg)("inlineCode",{parentName:"p"},"name")," column in the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema is never empty, by checking that the empty percentage is 0%."),(0,a.yg)("h4",{id:"field-metric-assertion-supported-metrics"},"Field Metric Assertion: Supported Metrics"),(0,a.yg)("p",null,"The full set of supported field metrics include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"null_count")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"null_percentage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"unique_count")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"unique_percentage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"empty_count")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"empty_percentage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"min")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"max")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"mean")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"median")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"stddev")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"negative_count")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"negative_percentage")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"zero_count")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"zero_percentage"))),(0,a.yg)("h3",{id:"field-metric-assertion-supported-conditions"},"Field Metric Assertion: Supported Conditions"),(0,a.yg)("p",null,"The full set of supported field metric conditions include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"not_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"greater_than")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"greater_than_or_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less_than")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less_than_or_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"between"))),(0,a.yg)("h3",{id:"custom-sql-assertions"},"Custom SQL Assertions"),(0,a.yg)("p",null,"Custom SQL Assertions allow you to define custom SQL queries to verify your data meets your expectations.\nThe only condition is that the SQL query must return a single value, which will be compared against the expected value.\nBelow you'll find examples of defining different types of custom SQL assertions via YAML."),(0,a.yg)("p",null,"SQL Assertions are useful for more complex data quality checks that can't be easily expressed using the other assertion types,\nand can be used to assert on custom metrics, complex aggregations, cross-table integrity checks (JOINS) or any other SQL-based data quality check."),(0,a.yg)("h4",{id:"validating-foreign-key-integrity"},"Validating Foreign Key Integrity"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: sql\n    statement: |\n      SELECT COUNT(*)\n      FROM test_db.public.purchase_events AS pe\n      LEFT JOIN test_db.public.products AS p\n      ON pe.product_id = p.id\n      WHERE p.id IS NULL\n    condition:\n      type: equal_to\n      value: 0\n    schedule:\n      type: interval\n      interval: '6 hours' # Run every 6 hours\n")),(0,a.yg)("p",null,"This assertion checks that the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema has no rows where the ",(0,a.yg)("inlineCode",{parentName:"p"},"product_id")," column does not have a corresponding ",(0,a.yg)("inlineCode",{parentName:"p"},"id")," in the ",(0,a.yg)("inlineCode",{parentName:"p"},"products")," table."),(0,a.yg)("h4",{id:"comparing-row-counts-across-multiple-tables"},"Comparing Row Counts Across Multiple Tables"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: sql\n    statement: |\n      SELECT COUNT(*) FROM test_db.public.purchase_events\n      - (SELECT COUNT(*) FROM test_db.public.purchase_events_raw) AS row_count_difference\n    condition:\n      type: equal_to\n      value: 0\n    schedule:\n      type: interval\n      interval: '6 hours' # Run every 6 hours\n")),(0,a.yg)("p",null,"This assertion checks that the number of rows in the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," exactly matches the number of rows in an upstream ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events_raw")," table\nby subtracting the row count of the raw table from the row count of the processed table."),(0,a.yg)("h4",{id:"supported-conditions-1"},"Supported Conditions"),(0,a.yg)("p",null,"The full set of supported custom SQL assertion conditions include:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"not_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"greater_than")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"greater_than_or_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less_than")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"less_than_or_equal_to")),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("inlineCode",{parentName:"li"},"between"))),(0,a.yg)("h3",{id:"schema-assertions-coming-soon"},"Schema Assertions (Coming Soon)"),(0,a.yg)("p",null,"Schema Assertions allow you to define custom SQL queries to verify your data meets your expectations.\nBelow you'll find examples of defining different types of custom SQL assertions via YAML."),(0,a.yg)("p",null,"The specification currently supports 2 types of Schema Assertions:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Exact Match"),": Asserts that the schema of a table - column names and their data types - exactly matches an expected schema"),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("strong",{parentName:"li"},"Contains Match")," (Subset): Asserts that the schema of a table - column names and their data types - is a subset of an expected schema")),(0,a.yg)("h4",{id:"validating-actual-schema-exactly-equals-expected-schema"},"Validating Actual Schema Exactly Equals Expected Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: schema\n    condition: \n      type: exact_match \n      columns:\n      - name: id\n        type: INTEGER\n      - name: product_id\n        type: STRING\n      - name: amount\n        type: DECIMAL\n      - name: updated_at\n        type: TIMESTAMP\n    schedule:\n      type: interval\n      interval: '6 hours' # Run every 6 hours\n")),(0,a.yg)("p",null,"This assertion checks that the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema has the exact schema as specified, with the exact column names and data types."),(0,a.yg)("h4",{id:"validating-actual-schema-is-contains-all-of-expected-schema"},"Validating Actual Schema is Contains all of Expected Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-yaml"},"version: 1\nassertions:\n  - entity: urn:li:dataset:(urn:li:dataPlatform:snowflake,test_db.public.purchase_events,PROD)\n    type: schema\n    condition: \n      type: contains\n      columns:\n      - name: id\n        type: integer\n      - name: product_id\n        type: string\n      - name: amount\n        type: number\n    schedule:\n      type: interval\n      interval: '6 hours' # Run every 6 hours\n")),(0,a.yg)("p",null,"This assertion checks that the ",(0,a.yg)("inlineCode",{parentName:"p"},"purchase_events")," table in the ",(0,a.yg)("inlineCode",{parentName:"p"},"test_db.public")," schema contains all of the columns specified in the expected schema, with the exact column names and data types.\nThe actual schema can also contain additional columns not specified in the expected schema."),(0,a.yg)("h4",{id:"supported-data-types"},"Supported Data Types"),(0,a.yg)("p",null,"The following high-level data types are currently supported by the Schema Assertion spec:"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"string"),(0,a.yg)("li",{parentName:"ul"},"number"),(0,a.yg)("li",{parentName:"ul"},"boolean"),(0,a.yg)("li",{parentName:"ul"},"date"),(0,a.yg)("li",{parentName:"ul"},"timestamp"),(0,a.yg)("li",{parentName:"ul"},"struct"),(0,a.yg)("li",{parentName:"ul"},"array"),(0,a.yg)("li",{parentName:"ul"},"map"),(0,a.yg)("li",{parentName:"ul"},"union"),(0,a.yg)("li",{parentName:"ul"},"bytes"),(0,a.yg)("li",{parentName:"ul"},"enum")))}m.isMDXComponent=!0}}]);