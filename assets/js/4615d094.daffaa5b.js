"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[63388],{15680:(e,t,n)=>{n.d(t,{xA:()=>l,yg:()=>m});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(n),d=i,m=u["".concat(s,".").concat(d)]||u[d]||g[d]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:i,a[1]=p;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},70794:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>p,metadata:()=>c,toc:()=>u});n(96540);var r=n(15680);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})),e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const p={title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/powerbi/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/setup.md"},s="PowerBI Ingestion Guide: Setup & Prerequisites",c={unversionedId:"docs/quick-ingestion-guides/powerbi/setup",id:"version-0.14.0/docs/quick-ingestion-guides/powerbi/setup",title:"Setup",description:"In order to configure ingestion from PowerBI, you'll first have to ensure you have an Azure AD app with permission to access the PowerBI resources.",source:"@site/versioned_docs/version-0.14.0/docs/quick-ingestion-guides/powerbi/setup.md",sourceDirName:"docs/quick-ingestion-guides/powerbi",slug:"/quick-ingestion-guides/powerbi/setup",permalink:"/docs/0.14.0/quick-ingestion-guides/powerbi/setup",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/setup.md",tags:[],version:"0.14.0",frontMatter:{title:"Setup",sidebar_label:"Setup",slug:"/quick-ingestion-guides/powerbi/setup",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/powerbi/setup.md"},sidebar:"overviewSidebar",previous:{title:"Overview",permalink:"/docs/0.14.0/quick-ingestion-guides/powerbi/overview"},next:{title:"Configuration",permalink:"/docs/0.14.0/quick-ingestion-guides/powerbi/configuration"}},l={},u=[{value:"PowerBI Prerequisites",id:"powerbi-prerequisites",level:2},{value:"Next Steps",id:"next-steps",level:2}],g={toc:u},d="wrapper";function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.yg)(d,o(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){i(e,t,n[t])}))}return e}({},g,n),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"powerbi-ingestion-guide-setup--prerequisites"},"PowerBI Ingestion Guide: Setup & Prerequisites"),(0,r.yg)("p",null,"In order to configure ingestion from PowerBI, you'll first have to ensure you have an Azure AD app with permission to access the PowerBI resources."),(0,r.yg)("h2",{id:"powerbi-prerequisites"},"PowerBI Prerequisites"),(0,r.yg)("ol",null,(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create an Azure AD app:")," Follow below steps to create an Azure AD app"),(0,r.yg)("p",{parentName:"li"},"a. Login to ",(0,r.yg)("a",{parentName:"p",href:"https://portal.azure.com"},"https://portal.azure.com")),(0,r.yg)("p",{parentName:"li"},"b. Go to ",(0,r.yg)("inlineCode",{parentName:"p"},"Azure Active Directory")),(0,r.yg)("p",{parentName:"li"},"c. Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"App registrations")),(0,r.yg)("p",{parentName:"li"},"d. Click on ",(0,r.yg)("inlineCode",{parentName:"p"},"+ New registration")),(0,r.yg)("p",{parentName:"li"},"e. On ",(0,r.yg)("inlineCode",{parentName:"p"},"Register an application")," window fill the ",(0,r.yg)("inlineCode",{parentName:"p"},"Name")," of application says ",(0,r.yg)("inlineCode",{parentName:"p"},"powerbi-app-connector")," and keep other default as is"),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"75%",alt:"app_registration",src:"http://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/app-registration.png"})),(0,r.yg)("p",{parentName:"li"},"f. On ",(0,r.yg)("inlineCode",{parentName:"p"},"Register an application")," window click on ",(0,r.yg)("inlineCode",{parentName:"p"},"Register")),(0,r.yg)("p",{parentName:"li"},"g. The Azure portal will open up the ",(0,r.yg)("inlineCode",{parentName:"p"},"powerbi-app-connector")," window as shown below. On this screen note down the ",(0,r.yg)("inlineCode",{parentName:"p"},"Application (client) ID")," and click on ",(0,r.yg)("inlineCode",{parentName:"p"},"Add a certificate or secret")," to generate a secret for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Application (client) ID")),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"75%",alt:"powerbi_app_connector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-connector-window.png"})),(0,r.yg)("p",{parentName:"li"},"f. On ",(0,r.yg)("inlineCode",{parentName:"p"},"powerbi-connector-app | Certificates & secrets")," window generate the client secret and note down the ",(0,r.yg)("inlineCode",{parentName:"p"},"Secret"))),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Create an Azure AD Security Group:")," You need to add the ",(0,r.yg)("inlineCode",{parentName:"p"},"Azure AD app")," into the security group to control resource permissions for the ",(0,r.yg)("inlineCode",{parentName:"p"},"Azure AD app"),". Follow below steps to create an Azure AD Security Group."),(0,r.yg)("p",{parentName:"li"},"a. Go to ",(0,r.yg)("inlineCode",{parentName:"p"},"Azure Active Directory")),(0,r.yg)("p",{parentName:"li"},"b. Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"Groups")," and click on ",(0,r.yg)("inlineCode",{parentName:"p"},"New group")),(0,r.yg)("p",{parentName:"li"},"c. On ",(0,r.yg)("inlineCode",{parentName:"p"},"New group")," window fill out the ",(0,r.yg)("inlineCode",{parentName:"p"},"Group type"),",","\xa0"," ",(0,r.yg)("inlineCode",{parentName:"p"},"Group name"),", ","\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"Group description"),". ","\xa0",(0,r.yg)("inlineCode",{parentName:"p"},"Group type")," should be set to ",(0,r.yg)("inlineCode",{parentName:"p"},"Security")," . ","\xa0"," ",(0,r.yg)("inlineCode",{parentName:"p"},"New group")," window is shown in below screenshot."),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"75%",alt:"powerbi_app_connector",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/new-group-window.png"})),(0,r.yg)("p",{parentName:"li"},"d. On ",(0,r.yg)("inlineCode",{parentName:"p"},"New group")," window click on ",(0,r.yg)("inlineCode",{parentName:"p"},"No members selected")," and add ",(0,r.yg)("inlineCode",{parentName:"p"},"Azure AD app")," i.e. ",(0,r.yg)("em",{parentName:"p"},"powerbi-connector-app")," as member"),(0,r.yg)("p",{parentName:"li"},"f. On ",(0,r.yg)("inlineCode",{parentName:"p"},"New group")," window click on ",(0,r.yg)("inlineCode",{parentName:"p"},"Create")," to create the security group ",(0,r.yg)("inlineCode",{parentName:"p"},"powerbi-connector-app-security-group"),".")),(0,r.yg)("li",{parentName:"ol"},(0,r.yg)("p",{parentName:"li"},(0,r.yg)("strong",{parentName:"p"},"Assign privileges to powerbi-connector-app-security-group:")," You need to add the created security group into PowerBI portal to grant resource access. Follow below steps to assign privileges to your security group."),(0,r.yg)("p",{parentName:"li"},"a. Login to ",(0,r.yg)("a",{parentName:"p",href:"https://app.powerbi.com/"},"https://app.powerbi.com/")),(0,r.yg)("p",{parentName:"li"},"b. Go to ",(0,r.yg)("inlineCode",{parentName:"p"},"Settings")," -> ",(0,r.yg)("inlineCode",{parentName:"p"},"Admin Portal")),(0,r.yg)("p",{parentName:"li"},"c. On ",(0,r.yg)("inlineCode",{parentName:"p"},"Admin Portal")," navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"Tenant settings")," as shown in below screenshot."),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"75%",alt:"powerbi_admin_portal",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/powerbi-admin-portal.png"})),(0,r.yg)("p",{parentName:"li"},"d. ",(0,r.yg)("strong",{parentName:"p"},"Enable PowerBI API:")," Under ",(0,r.yg)("inlineCode",{parentName:"p"},"Tenant settings")," -> ",(0,r.yg)("inlineCode",{parentName:"p"},"Developer settings")," -> ",(0,r.yg)("inlineCode",{parentName:"p"},"Allow service principals to use Power BI APIs")," add the previously created security group i.e. ",(0,r.yg)("em",{parentName:"p"},"powerbi-connector-app-security-group")," into ",(0,r.yg)("inlineCode",{parentName:"p"},"Specific security groups (Recommended)")),(0,r.yg)("p",{parentName:"li"},"e. ",(0,r.yg)("strong",{parentName:"p"},"Enable Admin API Settings:")," Under ",(0,r.yg)("inlineCode",{parentName:"p"},"Tenant settings")," -> ",(0,r.yg)("inlineCode",{parentName:"p"},"Admin API settings")," enable the following options"),(0,r.yg)("ul",{parentName:"li"},(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Allow service principals to use read-only admin APIs")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Enhance admin APIs responses with detailed metadata")),(0,r.yg)("li",{parentName:"ul"},(0,r.yg)("inlineCode",{parentName:"li"},"Enhance admin APIs responses with DAX and mashup expressions"))),(0,r.yg)("p",{parentName:"li"},"f. ",(0,r.yg)("strong",{parentName:"p"},"Add Security Group to Workspace:")," Navigate to ",(0,r.yg)("inlineCode",{parentName:"p"},"Workspaces")," window and open workspace which you want to ingest as shown in below screenshot and click on ",(0,r.yg)("inlineCode",{parentName:"p"},"Access")," and add ",(0,r.yg)("inlineCode",{parentName:"p"},"powerbi-connector-app-security-group")," as member. For most cases ",(0,r.yg)("inlineCode",{parentName:"p"},"Viewer")," role is enough, but for profiling the ",(0,r.yg)("inlineCode",{parentName:"p"},"Contributor")," role is required. "),(0,r.yg)("p",{align:"center"},(0,r.yg)("img",{width:"75%",alt:"workspace-window-underlined",src:"https://raw.githubusercontent.com/datahub-project/static-assets/main/imgs/guides/powerbi/workspace-window-undrlined.png"})))),(0,r.yg)("h2",{id:"next-steps"},"Next Steps"),(0,r.yg)("p",null,"Once you've done all of the above steps, it's time to ",(0,r.yg)("a",{parentName:"p",href:"/docs/0.14.0/quick-ingestion-guides/powerbi/configuration"},"move on")," to configuring the actual ingestion source within DataHub."))}m.isMDXComponent=!0}}]);