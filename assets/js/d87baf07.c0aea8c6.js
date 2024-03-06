"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[67300],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>d});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),u=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(a),m=i,d=p["".concat(l,".").concat(m)]||p[m]||g[m]||r;return a?n.createElement(d,o(o({ref:t},c),{},{components:a})):n.createElement(d,o({ref:t},c))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,o[1]=s;for(var u=2;u<r;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},52775:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var n=a(87462),i=(a(67294),a(3905));const r={title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/tableau/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/tableau/configuration.md"},o="Configuring Your Tableau Connector to DataHub",s={unversionedId:"docs/quick-ingestion-guides/tableau/configuration",id:"version-0.13.0/docs/quick-ingestion-guides/tableau/configuration",title:"Configuration",description:"Now that you have created a DataHub-specific user with the relevant access in Tableau in the prior step, it's now time to set up a connection via the DataHub UI.",source:"@site/versioned_docs/version-0.13.0/docs/quick-ingestion-guides/tableau/configuration.md",sourceDirName:"docs/quick-ingestion-guides/tableau",slug:"/quick-ingestion-guides/tableau/configuration",permalink:"/docs/quick-ingestion-guides/tableau/configuration",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/tableau/configuration.md",tags:[],version:"0.13.0",frontMatter:{title:"Configuration",sidebar_label:"Configuration",slug:"/quick-ingestion-guides/tableau/configuration",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/tableau/configuration.md"},sidebar:"overviewSidebar",previous:{title:"Setup",permalink:"/docs/quick-ingestion-guides/tableau/setup"},next:{title:"Overview",permalink:"/docs/quick-ingestion-guides/powerbi/overview"}},l={},u=[{value:"Configure Secrets",id:"configure-secrets",level:2},{value:"Configure Recipe",id:"configure-recipe",level:2},{value:"Schedule Execution",id:"schedule-execution",level:2},{value:"Finish Up",id:"finish-up",level:2},{value:"Validate Ingestion Runs",id:"validate-ingestion-runs",level:2}],c={toc:u},p="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-your-tableau-connector-to-datahub"},"Configuring Your Tableau Connector to DataHub"),(0,i.kt)("p",null,"Now that you have created a DataHub-specific user with the relevant access in Tableau in ",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/tableau/setup"},"the prior step"),", it's now time to set up a connection via the DataHub UI."),(0,i.kt)("h2",{id:"configure-secrets"},"Configure Secrets"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Within DataHub, navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Ingestion")," tab in the top, right corner of your screen")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:'Navigate to the "Ingestion Tab"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_ingestion_button.png"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you do not see the Ingestion tab, please contact your DataHub admin to grant you the correct permissions")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Navigate to the ",(0,i.kt)("strong",{parentName:"li"},"Secrets")," tab and click ",(0,i.kt)("strong",{parentName:"li"},"Create new secret"))),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"Secrets Tab",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_secrets_tab.png"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," secret"),(0,i.kt)("p",{parentName:"li"},"This will securely store your Tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," within DataHub"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enter a name like ",(0,i.kt)("inlineCode",{parentName:"li"},"TABLEAU_USERNAME")," - we will use this later to refer in recipe"),(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"username"),", setup in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/quick-ingestion-guides/tableau/setup"},"setup guide")),(0,i.kt)("li",{parentName:"ul"},"Optionally add a description"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"))),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"Tableau Username Secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-username-secret.png"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Create a ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," secret"),(0,i.kt)("p",{parentName:"li"},"This will securely store your Tableau ",(0,i.kt)("inlineCode",{parentName:"p"},"password")," within DataHub"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Enter a name like ",(0,i.kt)("inlineCode",{parentName:"li"},"TABLEAU_PASSWORD")," - we will use this later to refer in recipe"),(0,i.kt)("li",{parentName:"ul"},"Enter the ",(0,i.kt)("inlineCode",{parentName:"li"},"password")," of the user, setup in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/quick-ingestion-guides/tableau/setup"},"setup guide")),(0,i.kt)("li",{parentName:"ul"},"Optionally add a description"),(0,i.kt)("li",{parentName:"ul"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Create"))),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"Tableau Password Secret",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-user-password-secret.png"})))),(0,i.kt)("h2",{id:"configure-recipe"},"Configure Recipe"),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Navigate to on the ",(0,i.kt)("strong",{parentName:"li"},"Sources")," tab and then ",(0,i.kt)("strong",{parentName:"li"},"Create new source"))),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:'Click "Create new source"',src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_click_create_new_source_button.png"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"Select Tableau")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"Select Tableau from the options",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-new-ingestion-source.png"})),(0,i.kt)("ol",{start:7},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Fill in the Tableau Recipe form:"),(0,i.kt)("p",{parentName:"li"},"You need to set minimum following fields in the recipe:"),(0,i.kt)("p",{parentName:"li"},"a. ",(0,i.kt)("strong",{parentName:"p"},"Host URL:")," URL of your Tableau instance (e.g., ",(0,i.kt)("a",{parentName:"p",href:"https://15az.online.tableau.com/"},"https://15az.online.tableau.com/"),"). It is available in browser address bar on Tableau Portal."),(0,i.kt)("p",{parentName:"li"},"b. ",(0,i.kt)("strong",{parentName:"p"},"Username:"),' Use the TABLEAU_USERNAME secret (e.g., "${TABLEAU_USERNAME}").'),(0,i.kt)("p",{parentName:"li"},"c. ",(0,i.kt)("strong",{parentName:"p"},"Password:"),' Use the TABLEAU_PASSWORD secret (e.g., "${TABLEAU_PASSWORD}").   '),(0,i.kt)("p",{parentName:"li"},"d. ",(0,i.kt)("strong",{parentName:"p"},"Site"),": Required only if using tableau cloud/ tableau online"))),(0,i.kt)("p",null,"To filter specific project, use ",(0,i.kt)("inlineCode",{parentName:"p"},"project_pattern")," fields."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'config:\n     ...\n     project_pattern:\n        allow:\n          - "SalesProject"\n')),(0,i.kt)("p",null,"Your recipe should look something like this:"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"70%",alt:"tableau recipe in form format",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-recipe.png"})),(0,i.kt)("p",null,"Click ",(0,i.kt)("strong",{parentName:"p"},"Next")," when you're done."),(0,i.kt)("h2",{id:"schedule-execution"},"Schedule Execution"),(0,i.kt)("p",null,"Now it's time to schedule a recurring ingestion pipeline to regularly extract metadata from your Tableau instance."),(0,i.kt)("ol",{start:8},(0,i.kt)("li",{parentName:"ol"},"Decide how regularly you want this ingestion to run-- day, month, year, hour, minute, etc. Select from the dropdown")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"schedule selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_schedule.png"})),(0,i.kt)("ol",{start:9},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Ensure you've configured your correct timezone"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"timezone_selector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/common/common_ingestion_set_execution_timezone.png"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Click ",(0,i.kt)("strong",{parentName:"p"},"Next")," when you are done"))),(0,i.kt)("h2",{id:"finish-up"},"Finish Up"),(0,i.kt)("ol",{start:11},(0,i.kt)("li",{parentName:"ol"},"Name your ingestion source, then click ",(0,i.kt)("strong",{parentName:"li"},"Save and Run"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"Name your ingestion",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-ingestion-save-and-run.png"})))),(0,i.kt)("p",null,"You will now find your new ingestion source running"),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_running",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-ingestion-running.png"})),(0,i.kt)("h2",{id:"validate-ingestion-runs"},"Validate Ingestion Runs"),(0,i.kt)("ol",{start:12},(0,i.kt)("li",{parentName:"ol"},"View the latest status of ingestion runs on the Ingestion page")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion succeeded",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-ingestion-succeeded.png"})),(0,i.kt)("ol",{start:13},(0,i.kt)("li",{parentName:"ol"},"Click the plus sign to expand the full list of historical runs and outcomes; click ",(0,i.kt)("strong",{parentName:"li"},"Details")," to see the outcomes of a specific run")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_details",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-ingestion-history.png"})),(0,i.kt)("ol",{start:14},(0,i.kt)("li",{parentName:"ol"},"From the Ingestion Run Details page, pick ",(0,i.kt)("strong",{parentName:"li"},"View All")," to see which entities were ingested")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-ingestion-run-detail.png"})),(0,i.kt)("ol",{start:15},(0,i.kt)("li",{parentName:"ol"},"Pick an entity from the list to manually validate if it contains the detail you expected  ")),(0,i.kt)("p",{align:"center"},(0,i.kt)("img",{width:"75%",alt:"ingestion_details_view_all",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/tableau/tableau-ingestion-assets.png"})),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Congratulations!")," You've successfully set up Tableau as an ingestion source for DataHub!"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,i.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}g.isMDXComponent=!0}}]);