"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5074],{15680:(e,t,o)=>{o.d(t,{xA:()=>l,yg:()=>f});var r=o(96540);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function u(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},l=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},y=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(o),y=n,f=d["".concat(s,".").concat(y)]||d[y]||p[y]||i;return o?r.createElement(f,a(a({ref:t},l),{},{components:o})):r.createElement(f,a({ref:t},l))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=y;var u={};for(var s in t)hasOwnProperty.call(t,s)&&(u[s]=t[s]);u.originalType=e,u[d]="string"==typeof e?e:n,a[1]=u;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}y.displayName="MDXCreateElement"},28834:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>d});o(96540);var r=o(15680);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):function(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}(Object(t)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(t,o))})),e}function a(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const u={title:"OIDC Proxy Configuration",slug:"/authentication/guides/sso/configure-oidc-behind-proxy",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-behind-proxy.md"},s="OIDC Proxy Configuration",c={unversionedId:"docs/authentication/guides/sso/configure-oidc-behind-proxy",id:"version-0.14.0/docs/authentication/guides/sso/configure-oidc-behind-proxy",title:"OIDC Proxy Configuration",description:"Authored on 22/08/2023",source:"@site/versioned_docs/version-0.14.0/docs/authentication/guides/sso/configure-oidc-behind-proxy.md",sourceDirName:"docs/authentication/guides/sso",slug:"/authentication/guides/sso/configure-oidc-behind-proxy",permalink:"/docs/0.14.0/authentication/guides/sso/configure-oidc-behind-proxy",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-behind-proxy.md",tags:[],version:"0.14.0",frontMatter:{title:"OIDC Proxy Configuration",slug:"/authentication/guides/sso/configure-oidc-behind-proxy",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/guides/sso/configure-oidc-behind-proxy.md"},sidebar:"overviewSidebar",previous:{title:"OIDC Authentication",permalink:"/docs/0.14.0/authentication/guides/sso/configure-oidc-react"},next:{title:"Metadata Service Authentication",permalink:"/docs/0.14.0/authentication/introducing-metadata-service-authentication"}},l={},d=[{value:"Configure http proxy and non proxy hosts",id:"configure-http-proxy-and-non-proxy-hosts",level:2},{value:"Optional: provide custom truststore",id:"optional-provide-custom-truststore",level:2},{value:"Make truststore available in the frontend",id:"make-truststore-available-in-the-frontend",level:3},{value:"Option a) Build frontend docker image with your own truststore included",id:"option-a-build-frontend-docker-image-with-your-own-truststore-included",level:4},{value:"Option b) Mount truststore from your host machine using a docker volume",id:"option-b-mount-truststore-from-your-host-machine-using-a-docker-volume",level:4},{value:"Reference new truststore",id:"reference-new-truststore",level:3}],p={toc:d},y="wrapper";function f(e){var{components:t}=e,o=a(e,["components"]);return(0,r.yg)(y,i(function(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{},r=Object.keys(o);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(o).filter((function(e){return Object.getOwnPropertyDescriptor(o,e).enumerable})))),r.forEach((function(t){n(e,t,o[t])}))}return e}({},p,o),{components:t,mdxType:"MDXLayout"}),(0,r.yg)("h1",{id:"oidc-proxy-configuration"},"OIDC Proxy Configuration"),(0,r.yg)("p",null,(0,r.yg)("em",{parentName:"p"},"Authored on 22/08/2023")),(0,r.yg)("p",null,"The ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub-frontend-react")," server can be configured to use an http proxy when retrieving the openid-configuration.\nThis can be needed if your infrastructure is locked down and disallows connectivity by default, using proxies for fine-grained egress control."),(0,r.yg)("h2",{id:"configure-http-proxy-and-non-proxy-hosts"},"Configure http proxy and non proxy hosts"),(0,r.yg)("p",null,"To do this, you will need to pass a set of environment variables to the datahub-frontend-react container (e.g. in the ",(0,r.yg)("inlineCode",{parentName:"p"},"docker-compose.yml")," file or your kubernetes manifest)."),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"HTTP_PROXY_HOST=host of your http proxy\nHTTP_PROXY_PORT=port of your http proxy\nHTTPS_PROXY_HOST=host of your http(s) proxy used for https connections (often the same as the http proxy)\nHTTPS_PROXY_PORT=port of your http(s) proxy used for https connections (often the same as the http proxy)\nHTTP_NON_PROXY_HOSTS=localhost|datahub-gms (or any other hosts that you would like to bypass the proxy for, delimited by pipe)\n")),(0,r.yg)("h2",{id:"optional-provide-custom-truststore"},"Optional: provide custom truststore"),(0,r.yg)("p",null,"If your upstream proxy performs SSL termination to inspect traffic, this will result in different (self-signed) certificates for HTTPS connections.\nThe default truststore used in the ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub-frontend-react")," docker image will not trust these kinds of connections.\nTo address this, you can copy or mount your own truststore (provided by the proxy or network administrators) into the docker container."),(0,r.yg)("p",null,"Depending on your setup, you have a few options to achieve this:"),(0,r.yg)("h3",{id:"make-truststore-available-in-the-frontend"},"Make truststore available in the frontend"),(0,r.yg)("h4",{id:"option-a-build-frontend-docker-image-with-your-own-truststore-included"},"Option a) Build frontend docker image with your own truststore included"),(0,r.yg)("p",null,"To build a custom image for your frontend, with the certificates built-in, you can use the official frontend image as a base, then copy in your required files."),(0,r.yg)("p",null,"Example Dockerfile:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-dockerfile"},"FROM acryldata/datahub-frontend-react:<version>\nCOPY /truststore-directory /certificates\n")),(0,r.yg)("p",null,"Building this Dockerfile will result in your own custom docker image on your local machine.\nYou will then be able to tag it, publish it to your own registry, etc."),(0,r.yg)("h4",{id:"option-b-mount-truststore-from-your-host-machine-using-a-docker-volume"},"Option b) Mount truststore from your host machine using a docker volume"),(0,r.yg)("p",null,"Adapt your docker-compose.yml to include a new volume mount in the ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre",className:"language-docker"},"  datahub-frontend-react:\n    # ...\n    volumes:\n      # ...\n      - /truststore-directory:/certificates\n")),(0,r.yg)("h3",{id:"reference-new-truststore"},"Reference new truststore"),(0,r.yg)("p",null,"Add the following environment values to the ",(0,r.yg)("inlineCode",{parentName:"p"},"datahub-frontend-react")," container:"),(0,r.yg)("pre",null,(0,r.yg)("code",{parentName:"pre"},"SSL_TRUSTSTORE_FILE=path/to/truststore.jks (e.g. /certificates)\nSSL_TRUSTSTORE_TYPE=jks\nSSL_TRUSTSTORE_PASSWORD=MyTruststorePassword\n")),(0,r.yg)("p",null,"Once these steps are done, your frontend container will use the new truststore when validating SSL/HTTPS connections."))}f.isMDXComponent=!0}}]);