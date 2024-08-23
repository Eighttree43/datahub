"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[61363],{15680:(e,n,t)=>{t.d(n,{xA:()=>d,yg:()=>g});var a=t(96540);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),c=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=c(e.components);return a.createElement(s.Provider,{value:n},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},p=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),p=i,g=m["".concat(s,".").concat(p)]||m[p]||u[p]||r;return t?a.createElement(g,o(o({ref:n},d),{},{components:t})):a.createElement(g,o({ref:n},d))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:i,o[1]=l;for(var c=2;c<r;c++)o[c]=t[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},22440:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>m});t(96540);var a=t(15680);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){return n=null!=n?n:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):function(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})),e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}const l={sidebar_position:26,title:"Incident",slug:"/generated/metamodel/entities/incident",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/incident.md"},s="Incident",c={unversionedId:"docs/generated/metamodel/entities/incident",id:"version-0.14.0/docs/generated/metamodel/entities/incident",title:"Incident",description:"An incident for an asset.",source:"@site/versioned_docs/version-0.14.0/docs/generated/metamodel/entities/incident.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/incident",permalink:"/docs/0.14.0/generated/metamodel/entities/incident",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/incident.md",tags:[],version:"0.14.0",sidebarPosition:26,frontMatter:{sidebar_position:26,title:"Incident",slug:"/generated/metamodel/entities/incident",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/incident.md"},sidebar:"overviewSidebar",previous:{title:"SchemaField",permalink:"/docs/0.14.0/generated/metamodel/entities/schemafield"},next:{title:"DataHubRole",permalink:"/docs/0.14.0/generated/metamodel/entities/datahubrole"}},d={},m=[{value:"Aspects",id:"aspects",level:2},{value:"incidentInfo",id:"incidentinfo",level:3},{value:"globalTags",id:"globaltags",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Outgoing",id:"outgoing",level:3},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],u={toc:m},p="wrapper";function g(e){var{components:n}=e,t=o(e,["components"]);return(0,a.yg)(p,r(function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"==typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),a.forEach((function(n){i(e,n,t[n])}))}return e}({},u,t),{components:n,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"incident"},"Incident"),(0,a.yg)("p",null,"An incident for an asset."),(0,a.yg)("h2",{id:"aspects"},"Aspects"),(0,a.yg)("h3",{id:"incidentinfo"},"incidentInfo"),(0,a.yg)("p",null,"Information about an incident raised on an asset."),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "incidentInfo"\n  },\n  "name": "IncidentInfo",\n  "namespace": "com.linkedin.incident",\n  "fields": [\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "filterNameOverride": "Type"\n      },\n      "type": {\n        "type": "enum",\n        "symbolDocs": {\n          "CUSTOM": "A custom type of incident",\n          "DATA_SCHEMA": "A Data Schema assertion has failed, triggering the incident.\\nRaised on entities where assertions are configured to generate incidents.",\n          "FIELD": "A Field Assertion has failed, triggering the incident.\\nRaised on entities where assertions are configured to generate incidents.",\n          "FRESHNESS": "An Freshness Assertion has failed, triggering the incident.\\nRaised on entities where assertions are configured to generate incidents.",\n          "OPERATIONAL": "A misc. operational incident, e.g. failure to materialize a dataset.",\n          "SQL": "A raw SQL-statement based assertion has failed, triggering the incident.\\nRaised on entities where assertions are configured to generate incidents.",\n          "VOLUME": "An Volume Assertion has failed, triggering the incident.\\nRaised on entities where assertions are configured to generate incidents."\n        },\n        "name": "IncidentType",\n        "namespace": "com.linkedin.incident",\n        "symbols": [\n          "FRESHNESS",\n          "VOLUME",\n          "FIELD",\n          "SQL",\n          "DATA_SCHEMA",\n          "OPERATIONAL",\n          "CUSTOM"\n        ],\n        "doc": "A type of asset incident"\n      },\n      "name": "type",\n      "doc": "The type of incident"\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "filterNameOverride": "Other Type"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "customType",\n      "default": null,\n      "doc": "An optional custom incident type. Present only if type is \'CUSTOM\'."\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "title",\n      "default": null,\n      "doc": "Optional title associated with the incident"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Optional description associated with the incident"\n    },\n    {\n      "Relationship": {\n        "/*": {\n          "entityTypes": [\n            "dataset",\n            "chart",\n            "dashboard",\n            "dataFlow",\n            "dataJob",\n            "schemaField"\n          ],\n          "name": "IncidentOn"\n        }\n      },\n      "Searchable": {\n        "/*": {\n          "fieldType": "URN"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "string"\n      },\n      "name": "entities",\n      "doc": "A reference to the entity associated with the incident."\n    },\n    {\n      "Searchable": {\n        "addToFilters": true,\n        "filterNameOverride": "Priority"\n      },\n      "type": [\n        "int",\n        "null"\n      ],\n      "name": "priority",\n      "default": 0,\n      "doc": "A numeric severity or priority for the incident. On the UI we will translate this into something easy to understand."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "IncidentStatus",\n        "namespace": "com.linkedin.incident",\n        "fields": [\n          {\n            "Searchable": {\n              "addToFilters": true,\n              "filterNameOverride": "Status"\n            },\n            "type": {\n              "type": "enum",\n              "symbolDocs": {\n                "ACTIVE": "The incident is ongoing, or active.",\n                "RESOLVED": "The incident is resolved."\n              },\n              "name": "IncidentState",\n              "namespace": "com.linkedin.incident",\n              "symbols": [\n                "ACTIVE",\n                "RESOLVED"\n              ]\n            },\n            "name": "state",\n            "doc": "The state of the incident"\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Optional message associated with the incident"\n          },\n          {\n            "Searchable": {\n              "/time": {\n                "fieldName": "lastUpdated",\n                "fieldType": "COUNT"\n              }\n            },\n            "type": {\n              "type": "record",\n              "name": "AuditStamp",\n              "namespace": "com.linkedin.common",\n              "fields": [\n                {\n                  "type": "long",\n                  "name": "time",\n                  "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                },\n                {\n                  "java": {\n                    "class": "com.linkedin.common.urn.Urn"\n                  },\n                  "type": "string",\n                  "name": "actor",\n                  "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                },\n                {\n                  "java": {\n                    "class": "com.linkedin.common.urn.Urn"\n                  },\n                  "type": [\n                    "null",\n                    "string"\n                  ],\n                  "name": "impersonator",\n                  "default": null,\n                  "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                },\n                {\n                  "type": [\n                    "null",\n                    "string"\n                  ],\n                  "name": "message",\n                  "default": null,\n                  "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                }\n              ],\n              "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n            },\n            "name": "lastUpdated",\n            "doc": "The time at which the request was initially created"\n          }\n        ],\n        "doc": "Information about an incident raised on an asset"\n      },\n      "name": "status",\n      "doc": "The current status of an incident, i.e. active or inactive."\n    },\n    {\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "Aspect": {\n            "name": "incidentSource"\n          },\n          "name": "IncidentSource",\n          "namespace": "com.linkedin.incident",\n          "fields": [\n            {\n              "Searchable": {\n                "addToFilters": true,\n                "filterNameOverride": "Source"\n              },\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "ASSERTION_FAILURE": "An assertion has failed, triggering the incident.",\n                  "MANUAL": "Manually created incident, via UI or API."\n                },\n                "name": "IncidentSourceType",\n                "namespace": "com.linkedin.incident",\n                "symbols": [\n                  "MANUAL",\n                  "ASSERTION_FAILURE"\n                ]\n              },\n              "name": "type",\n              "doc": "Message associated with the incident"\n            },\n            {\n              "Searchable": {\n                "fieldType": "URN"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "sourceUrn",\n              "default": null,\n              "doc": "Reference to an URN related to the source of an incident."\n            }\n          ],\n          "doc": "Information about the source of an incident raised on an asset."\n        }\n      ],\n      "name": "source",\n      "default": null,\n      "doc": "The source of an incident, i.e. how it was generated."\n    },\n    {\n      "Searchable": {\n        "/time": {\n          "fieldName": "created",\n          "fieldType": "COUNT"\n        }\n      },\n      "type": "com.linkedin.common.AuditStamp",\n      "name": "created",\n      "doc": "The time at which the request was initially created"\n    }\n  ],\n  "doc": "Information about an incident raised on an asset."\n}\n'))),(0,a.yg)("h3",{id:"globaltags"},"globalTags"),(0,a.yg)("p",null,"Tag aspect used for applying tags to an entity"),(0,a.yg)("details",null,(0,a.yg)("summary",null,"Schema"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "globalTags"\n  },\n  "name": "GlobalTags",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Relationship": {\n        "/*/tag": {\n          "entityTypes": [\n            "tag"\n          ],\n          "name": "TaggedWith"\n        }\n      },\n      "Searchable": {\n        "/*/tag": {\n          "addToFilters": true,\n          "boostScore": 0.5,\n          "fieldName": "tags",\n          "fieldType": "URN",\n          "filterNameOverride": "Tag",\n          "hasValuesFieldName": "hasTags",\n          "queryByDefault": true\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "TagAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.TagUrn"\n              },\n              "type": "string",\n              "name": "tag",\n              "doc": "Urn of the applied tag"\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "context",\n              "default": null,\n              "doc": "Additional context about the association"\n            },\n            {\n              "Searchable": {\n                "/actor": {\n                  "fieldName": "tagAttributionActors",\n                  "fieldType": "URN"\n                },\n                "/source": {\n                  "fieldName": "tagAttributionSources",\n                  "fieldType": "URN"\n                },\n                "/time": {\n                  "fieldName": "tagAttributionDates",\n                  "fieldType": "DATETIME"\n                }\n              },\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "MetadataAttribution",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "time",\n                      "doc": "When this metadata was updated."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": "string",\n                      "name": "actor",\n                      "doc": "The entity (e.g. a member URN) responsible for applying the assocated metadata. This can\\neither be a user (in case of UI edits) or the datahub system for automation."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "source",\n                      "default": null,\n                      "doc": "The DataHub source responsible for applying the associated metadata. This will only be filled out\\nwhen a DataHub source is responsible. This includes the specific metadata test urn, the automation urn."\n                    },\n                    {\n                      "type": {\n                        "type": "map",\n                        "values": "string"\n                      },\n                      "name": "sourceDetail",\n                      "default": {},\n                      "doc": "The details associated with why this metadata was applied. For example, this could include\\nthe actual regex rule, sql statement, ingestion pipeline ID, etc."\n                    }\n                  ],\n                  "doc": "Information about who, why, and how this metadata was applied"\n                }\n              ],\n              "name": "attribution",\n              "default": null,\n              "doc": "Information about who, why, and how this metadata was applied"\n            }\n          ],\n          "doc": "Properties of an applied tag. For now, just an Urn. In the future we can extend this with other properties, e.g.\\npropagation parameters."\n        }\n      },\n      "name": "tags",\n      "doc": "Tags associated with a given entity"\n    }\n  ],\n  "doc": "Tag aspect used for applying tags to an entity"\n}\n'))),(0,a.yg)("h2",{id:"relationships"},"Relationships"),(0,a.yg)("h3",{id:"outgoing"},"Outgoing"),(0,a.yg)("p",null,"These are the relationships stored in this entity's aspects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"IncidentOn"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Dataset via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentInfo.entities")),(0,a.yg)("li",{parentName:"ul"},"Chart via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentInfo.entities")),(0,a.yg)("li",{parentName:"ul"},"Dashboard via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentInfo.entities")),(0,a.yg)("li",{parentName:"ul"},"DataFlow via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentInfo.entities")),(0,a.yg)("li",{parentName:"ul"},"DataJob via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentInfo.entities")),(0,a.yg)("li",{parentName:"ul"},"SchemaField via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentInfo.entities")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"TaggedWith"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Tag via ",(0,a.yg)("inlineCode",{parentName:"li"},"globalTags.tags"))))),(0,a.yg)("h3",{id:"incoming"},"Incoming"),(0,a.yg)("p",null,"These are the relationships stored in other entity's aspects"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"ResolvedIncidents"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Dataset via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.resolvedIncidentDetails")),(0,a.yg)("li",{parentName:"ul"},"DataJob via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.resolvedIncidentDetails")),(0,a.yg)("li",{parentName:"ul"},"DataFlow via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.resolvedIncidentDetails")),(0,a.yg)("li",{parentName:"ul"},"Chart via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.resolvedIncidentDetails")),(0,a.yg)("li",{parentName:"ul"},"Dashboard via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.resolvedIncidentDetails")))),(0,a.yg)("li",{parentName:"ul"},(0,a.yg)("p",{parentName:"li"},"ActiveIncidents"),(0,a.yg)("ul",{parentName:"li"},(0,a.yg)("li",{parentName:"ul"},"Dataset via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.activeIncidentDetails")),(0,a.yg)("li",{parentName:"ul"},"DataJob via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.activeIncidentDetails")),(0,a.yg)("li",{parentName:"ul"},"DataFlow via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.activeIncidentDetails")),(0,a.yg)("li",{parentName:"ul"},"Chart via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.activeIncidentDetails")),(0,a.yg)("li",{parentName:"ul"},"Dashboard via ",(0,a.yg)("inlineCode",{parentName:"li"},"incidentsSummary.activeIncidentDetails"))))),(0,a.yg)("h2",{id:"global-metadata-model"},(0,a.yg)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.yg)("p",null,(0,a.yg)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}g.isMDXComponent=!0}}]);