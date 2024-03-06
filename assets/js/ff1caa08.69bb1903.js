"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[95e3],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=u(n),f=o,h=c["".concat(l,".").concat(f)]||c[f]||p[f]||i;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,r[1]=s;for(var u=2;u<i;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},25029:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const i={title:"Adding Stateful Ingestion to a Source",slug:"/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source.md"},r="Adding Stateful Ingestion to a Source",s={unversionedId:"metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",id:"version-0.13.0/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",title:"Adding Stateful Ingestion to a Source",description:"Currently, datahub supports the Stale Metadata Removal and",source:"@site/versioned_docs/version-0.13.0/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source.md",sourceDirName:"metadata-ingestion/docs/dev_guides",slug:"/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",permalink:"/docs/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source.md",tags:[],version:"0.13.0",frontMatter:{title:"Adding Stateful Ingestion to a Source",slug:"/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/add_stateful_ingestion_to_source.md"},sidebar:"overviewSidebar",previous:{title:"Classification",permalink:"/docs/metadata-ingestion/docs/dev_guides/classification"},next:{title:"SQL Profiling",permalink:"/docs/metadata-ingestion/docs/dev_guides/sql_profiles"}},l={},u=[{value:"Adding Stale Metadata Removal to a Source",id:"adding-stale-metadata-removal-to-a-source",level:2},{value:"1. Modify the source config",id:"1-modify-the-source-config",level:3},{value:"2. Modify the source report",id:"2-modify-the-source-report",level:3},{value:"3. Modify the source",id:"3-modify-the-source",level:3},{value:"Adding Redundant Run Elimination to a Source",id:"adding-redundant-run-elimination-to-a-source",level:2},{value:"1. Modifying the SourceConfig",id:"1-modifying-the-sourceconfig",level:3},{value:"2. Modifying the SourceReport",id:"2-modifying-the-sourcereport",level:3},{value:"3. Modifying the Source",id:"3-modifying-the-source",level:3},{value:"3.1 Instantiate RedundantRunSkipHandler in the <code>__init__</code> method of the source.",id:"31-instantiate-redundantrunskiphandler-in-the-__init__-method-of-the-source",level:4},{value:"3.2 Checking if the current run should be skipped.",id:"32-checking-if-the-current-run-should-be-skipped",level:4},{value:"3.3 Updating the state for the current run.",id:"33-updating-the-state-for-the-current-run",level:4}],d={toc:u},c="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"adding-stateful-ingestion-to-a-source"},"Adding Stateful Ingestion to a Source"),(0,o.kt)("p",null,"Currently, datahub supports the ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#stale-entity-removal"},"Stale Metadata Removal")," and\nthe ",(0,o.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion/docs/dev_guides/stateful#redundant-run-elimination"},"Redunant Run Elimination")," use-cases on top of the more generic stateful ingestion\ncapability available for the sources. This document describes how to add support for these two use-cases to new sources."),(0,o.kt)("h2",{id:"adding-stale-metadata-removal-to-a-source"},"Adding Stale Metadata Removal to a Source"),(0,o.kt)("p",null,"Adding the stale metadata removal use-case to a new source involves modifying the source config, source report, and the source itself."),(0,o.kt)("p",null,"For a full example of all changes required: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/pull/9118"},"Adding stale metadata removal to the MongoDB source"),"."),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/stale_entity_removal_handler.py"},"datahub.ingestion.source.state.stale_entity_removal_handler")," module provides the supporting infrastructure for all the steps described\nabove and substantially simplifies the implementation on the source side. Below is a detailed explanation of each of these\nsteps along with examples."),(0,o.kt)("h3",{id:"1-modify-the-source-config"},"1. Modify the source config"),(0,o.kt)("p",null,"The source's config must inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"StatefulIngestionConfigBase"),", and should declare a field named ",(0,o.kt)("inlineCode",{parentName:"p"},"stateful_ingestion")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"Optional[StatefulStaleMetadataRemovalConfig]"),"."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.ingestion.source.state.stale_entity_removal_handler import (\n    StatefulStaleMetadataRemovalConfig,\n    StatefulIngestionConfigBase,\n)\n\nclass MySourceConfig(StatefulIngestionConfigBase):\n    # ...<other config params>...\n\n    stateful_ingestion: Optional[StatefulStaleMetadataRemovalConfig] = None\n")),(0,o.kt)("h3",{id:"2-modify-the-source-report"},"2. Modify the source report"),(0,o.kt)("p",null,"The report class of the source should inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"StaleEntityRemovalSourceReport")," instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceReport"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.ingestion.source.state.stale_entity_removal_handler import (\n    StaleEntityRemovalSourceReport,\n)\n\n@dataclass\nclass MySourceReport(StatefulIngestionReport):\n    # <other fields here>\n    pass\n")),(0,o.kt)("h3",{id:"3-modify-the-source"},"3. Modify the source"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"The source must inherit from ",(0,o.kt)("inlineCode",{parentName:"li"},"StatefulIngestionSourceBase")," instead of ",(0,o.kt)("inlineCode",{parentName:"li"},"Source"),"."),(0,o.kt)("li",{parentName:"ol"},"The source should contain a custom ",(0,o.kt)("inlineCode",{parentName:"li"},"get_workunit_processors")," method.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.ingestion.source.state.stateful_ingestion_base import StatefulIngestionSourceBase\nfrom datahub.ingestion.source.state.stale_entity_removal_handler import StaleEntityRemovalHandler\n\nclass MySource(StatefulIngestionSourceBase):\n    def __init__(self, config: MySourceConfig, ctx: PipelineContext):\n        super().__init__(config, ctx)\n\n        self.config = config\n        self.report = MySourceReport()\n\n        # other initialization code here\n\n    def get_workunit_processors(self) -> List[Optional[MetadataWorkUnitProcessor]]:\n        return [\n            *super().get_workunit_processors(),\n            StaleEntityRemovalHandler.create(\n                self, self.config, self.ctx\n            ).workunit_processor,\n        ]\n\n    # other methods here\n")),(0,o.kt)("h2",{id:"adding-redundant-run-elimination-to-a-source"},"Adding Redundant Run Elimination to a Source"),(0,o.kt)("p",null,"This use-case applies to the sources that drive ingestion by querying logs over a specified duration via the config(such\nas snowflake usage, bigquery usage etc.). It typically involves expensive and long-running queries. To add redundant\nrun elimination to a new source to prevent the expensive reruns for the same time range(potentially due to a user\nerror or a scheduler malfunction), the following steps\nare required."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"SourceConfig")),(0,o.kt)("li",{parentName:"ol"},"Update the ",(0,o.kt)("inlineCode",{parentName:"li"},"SourceReport")),(0,o.kt)("li",{parentName:"ol"},"Modify the ",(0,o.kt)("inlineCode",{parentName:"li"},"Source")," to",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"Instantiate the RedundantRunSkipHandler object."),(0,o.kt)("li",{parentName:"ol"},"Check if the current run should be skipped."),(0,o.kt)("li",{parentName:"ol"},"Update the state for the current run(start & end times).")))),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/redundant_run_skip_handler.py"},"datahub.ingestion.source.state.redundant_run_skip_handler"),"\nmodules provides the supporting infrastructure required for all the steps described above."),(0,o.kt)("p",null,"NOTE: The handler currently uses a simple state,\nthe ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/usage_common_state.py"},"BaseUsageCheckpointState"),",\nacross all sources it supports (unlike the StaleEntityRemovalHandler)."),(0,o.kt)("h3",{id:"1-modifying-the-sourceconfig"},"1. Modifying the SourceConfig"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceConfig")," must inherit from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/redundant_run_skip_handler.py#L23"},"StatefulRedundantRunSkipConfig")," class."),(0,o.kt)("p",null,"Examples:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Snowflake Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.ingestion.source.state.redundant_run_skip_handler import (\n    StatefulRedundantRunSkipConfig,\n)\nclass SnowflakeStatefulIngestionConfig(StatefulRedundantRunSkipConfig):\n    pass\n")),(0,o.kt)("h3",{id:"2-modifying-the-sourcereport"},"2. Modifying the SourceReport"),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"SourceReport")," must inherit from the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/state/stateful_ingestion_base.py#L102"},"StatefulIngestionReport")," class.\nExamples:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Snowflake Usage")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"@dataclass\nclass SnowflakeUsageReport(BaseSnowflakeReport, StatefulIngestionReport):\n    # <members specific to snowflake usage report>\n")),(0,o.kt)("h3",{id:"3-modifying-the-source"},"3. Modifying the Source"),(0,o.kt)("p",null,"The source must inherit from ",(0,o.kt)("inlineCode",{parentName:"p"},"StatefulIngestionSourceBase"),"."),(0,o.kt)("h4",{id:"31-instantiate-redundantrunskiphandler-in-the-__init__-method-of-the-source"},"3.1 Instantiate RedundantRunSkipHandler in the ",(0,o.kt)("inlineCode",{parentName:"h4"},"__init__")," method of the source."),(0,o.kt)("p",null,"The source should instantiate an instance of the ",(0,o.kt)("inlineCode",{parentName:"p"},"RedundantRunSkipHandler")," in its ",(0,o.kt)("inlineCode",{parentName:"p"},"__init__")," method.\nExamples:\nSnowflake Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"from datahub.ingestion.source.state.redundant_run_skip_handler import (\n    RedundantRunSkipHandler,\n)\nclass SnowflakeUsageSource(StatefulIngestionSourceBase):\n\n    def __init__(self, config: SnowflakeUsageConfig, ctx: PipelineContext):\n        super(SnowflakeUsageSource, self).__init__(config, ctx)\n        self.config: SnowflakeUsageConfig = config\n        self.report: SnowflakeUsageReport = SnowflakeUsageReport()\n        # Create and register the stateful ingestion use-case handlers.\n        self.redundant_run_skip_handler = RedundantRunSkipHandler(\n            source=self,\n            config=self.config,\n            pipeline_name=self.ctx.pipeline_name,\n            run_id=self.ctx.run_id,\n        )\n")),(0,o.kt)("h4",{id:"32-checking-if-the-current-run-should-be-skipped"},"3.2 Checking if the current run should be skipped."),(0,o.kt)("p",null,"The sources can query if the current run should be skipped using ",(0,o.kt)("inlineCode",{parentName:"p"},"should_skip_this_run")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"RedundantRunSkipHandler"),". This should done from the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_workunits")," method, before doing any other work."),(0,o.kt)("p",null,"Example code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"def get_workunits(self) -> Iterable[MetadataWorkUnit]:\n        # Skip a redundant run\n        if self.redundant_run_skip_handler.should_skip_this_run(\n            cur_start_time_millis=datetime_to_ts_millis(self.config.start_time)\n        ):\n            return\n        # Generate the workunits.\n")),(0,o.kt)("h4",{id:"33-updating-the-state-for-the-current-run"},"3.3 Updating the state for the current run."),(0,o.kt)("p",null,"The source should use the ",(0,o.kt)("inlineCode",{parentName:"p"},"update_state")," method of ",(0,o.kt)("inlineCode",{parentName:"p"},"RedundantRunSkipHandler")," to update the current run's state if the run has not been skipped. This step can be performed in the ",(0,o.kt)("inlineCode",{parentName:"p"},"get_workunits")," if the run has not been skipped."),(0,o.kt)("p",null,"Example code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"    def get_workunits(self) -> Iterable[MetadataWorkUnit]:\n        # Skip a redundant run\n        if self.redundant_run_skip_handler.should_skip_this_run(\n            cur_start_time_millis=self.config.start_time\n        ):\n            return\n\n        # Generate the workunits.\n        # <code for generating the workunits>\n        # Update checkpoint state for this run.\n        self.redundant_run_skip_handler.update_state(\n            start_time_millis=self.config.start_time,\n            end_time_millis=self.config.end_time,\n        )\n")))}p.isMDXComponent=!0}}]);