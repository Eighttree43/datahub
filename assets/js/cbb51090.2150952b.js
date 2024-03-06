"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[20548],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var o=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)t=i[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),c=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},m=function(e){var n=c(e.components);return o.createElement(l.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),d=c(t),u=a,h=d["".concat(l,".").concat(u)]||d[u]||p[u]||i;return t?o.createElement(h,r(r({ref:n},m),{},{components:t})):o.createElement(h,r({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,r=new Array(i);r[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s[d]="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=t[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},19507:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=t(87462),a=(t(67294),t(3905));const i={sidebar_position:12,title:"Domain",slug:"/generated/metamodel/entities/domain",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/domain.md"},r="Domain",s={unversionedId:"docs/generated/metamodel/entities/domain",id:"docs/generated/metamodel/entities/domain",title:"Domain",description:"A data domain within an organization.",source:"@site/genDocs/docs/generated/metamodel/entities/domain.md",sourceDirName:"docs/generated/metamodel/entities",slug:"/generated/metamodel/entities/domain",permalink:"/docs/next/generated/metamodel/entities/domain",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/domain.md",tags:[],version:"current",sidebarPosition:12,frontMatter:{sidebar_position:12,title:"Domain",slug:"/generated/metamodel/entities/domain",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/metamodel/entities/domain.md"},sidebar:"overviewSidebar",previous:{title:"CorpGroup",permalink:"/docs/next/generated/metamodel/entities/corpgroup"},next:{title:"Container",permalink:"/docs/next/generated/metamodel/entities/container"}},l={},c=[{value:"Aspects",id:"aspects",level:2},{value:"domainProperties",id:"domainproperties",level:3},{value:"institutionalMemory",id:"institutionalmemory",level:3},{value:"ownership",id:"ownership",level:3},{value:"structuredProperties",id:"structuredproperties",level:3},{value:"forms",id:"forms",level:3},{value:"Relationships",id:"relationships",level:2},{value:"Self",id:"self",level:3},{value:"Outgoing",id:"outgoing",level:3},{value:"Incoming",id:"incoming",level:3},{value:"Global Metadata Model",id:"global-metadata-model",level:2}],m={toc:c},d="wrapper";function p(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,o.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"domain"},"Domain"),(0,a.kt)("p",null,"A data domain within an organization."),(0,a.kt)("h2",{id:"aspects"},"Aspects"),(0,a.kt)("h3",{id:"domainproperties"},"domainProperties"),(0,a.kt)("p",null,"Information about a Domain"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "domainProperties"\n  },\n  "name": "DomainProperties",\n  "namespace": "com.linkedin.domain",\n  "fields": [\n    {\n      "Searchable": {\n        "boostScore": 10.0,\n        "enableAutocomplete": true,\n        "fieldNameAliases": [\n          "_entityName"\n        ],\n        "fieldType": "WORD_GRAM"\n      },\n      "type": "string",\n      "name": "name",\n      "doc": "Display name of the Domain"\n    },\n    {\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "description",\n      "default": null,\n      "doc": "Description of the Domain"\n    },\n    {\n      "Searchable": {\n        "/time": {\n          "fieldName": "createdTime",\n          "fieldType": "DATETIME"\n        }\n      },\n      "type": [\n        "null",\n        {\n          "type": "record",\n          "name": "AuditStamp",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "type": "long",\n              "name": "time",\n              "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "actor",\n              "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n            },\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "impersonator",\n              "default": null,\n              "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n            },\n            {\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "message",\n              "default": null,\n              "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n            }\n          ],\n          "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n        }\n      ],\n      "name": "created",\n      "default": null,\n      "doc": "Created Audit stamp"\n    },\n    {\n      "Relationship": {\n        "entityTypes": [\n          "domain"\n        ],\n        "name": "IsPartOf"\n      },\n      "Searchable": {\n        "fieldName": "parentDomain",\n        "fieldType": "URN",\n        "hasValuesFieldName": "hasParentDomain"\n      },\n      "java": {\n        "class": "com.linkedin.common.urn.Urn"\n      },\n      "type": [\n        "null",\n        "string"\n      ],\n      "name": "parentDomain",\n      "default": null,\n      "doc": "Optional: Parent of the domain"\n    }\n  ],\n  "doc": "Information about a Domain"\n}\n'))),(0,a.kt)("h3",{id:"institutionalmemory"},"institutionalMemory"),(0,a.kt)("p",null,"Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "institutionalMemory"\n  },\n  "name": "InstitutionalMemory",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "InstitutionalMemoryMetadata",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.url.Url",\n                "coercerClass": "com.linkedin.common.url.UrlCoercer"\n              },\n              "type": "string",\n              "name": "url",\n              "doc": "Link to an engineering design document or a wiki page."\n            },\n            {\n              "type": "string",\n              "name": "description",\n              "doc": "Description of the link."\n            },\n            {\n              "type": {\n                "type": "record",\n                "name": "AuditStamp",\n                "namespace": "com.linkedin.common",\n                "fields": [\n                  {\n                    "type": "long",\n                    "name": "time",\n                    "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": "string",\n                    "name": "actor",\n                    "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                  },\n                  {\n                    "java": {\n                      "class": "com.linkedin.common.urn.Urn"\n                    },\n                    "type": [\n                      "null",\n                      "string"\n                    ],\n                    "name": "impersonator",\n                    "default": null,\n                    "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                  },\n                  {\n                    "type": [\n                      "null",\n                      "string"\n                    ],\n                    "name": "message",\n                    "default": null,\n                    "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                  }\n                ],\n                "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n              },\n              "name": "createStamp",\n              "doc": "Audit stamp associated with creation of this record"\n            }\n          ],\n          "doc": "Metadata corresponding to a record of institutional memory."\n        }\n      },\n      "name": "elements",\n      "doc": "List of records that represent institutional memory of an entity. Each record consists of a link, description, creator and timestamps associated with that record."\n    }\n  ],\n  "doc": "Institutional memory of an entity. This is a way to link to relevant documentation and provide description of the documentation. Institutional or tribal knowledge is very important for users to leverage the entity."\n}\n'))),(0,a.kt)("h3",{id:"ownership"},"ownership"),(0,a.kt)("p",null,"Ownership information of an entity."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "ownership"\n  },\n  "name": "Ownership",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "Owner",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "corpuser",\n                  "corpGroup"\n                ],\n                "name": "OwnedBy"\n              },\n              "Searchable": {\n                "addToFilters": true,\n                "fieldName": "owners",\n                "fieldType": "URN",\n                "filterNameOverride": "Owned By",\n                "hasValuesFieldName": "hasOwners",\n                "queryByDefault": false\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "owner",\n              "doc": "Owner URN, e.g. urn:li:corpuser:ldap, urn:li:corpGroup:group_name, and urn:li:multiProduct:mp_name\\n(Caveat: only corpuser is currently supported in the frontend.)"\n            },\n            {\n              "deprecated": true,\n              "type": {\n                "type": "enum",\n                "symbolDocs": {\n                  "BUSINESS_OWNER": "A person or group who is responsible for logical, or business related, aspects of the asset.",\n                  "CONSUMER": "A person, group, or service that consumes the data\\nDeprecated! Use TECHNICAL_OWNER or BUSINESS_OWNER instead.",\n                  "CUSTOM": "Set when ownership type is unknown or a when new one is specified as an ownership type entity for which we have no\\nenum value for. This is used for backwards compatibility",\n                  "DATAOWNER": "A person or group that is owning the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DATA_STEWARD": "A steward, expert, or delegate responsible for the asset.",\n                  "DELEGATE": "A person or a group that overseas the operation, e.g. a DBA or SRE.\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "DEVELOPER": "A person or group that is in charge of developing the code\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "NONE": "No specific type associated to the owner.",\n                  "PRODUCER": "A person, group, or service that produces/generates the data\\nDeprecated! Use TECHNICAL_OWNER instead.",\n                  "STAKEHOLDER": "A person or a group that has direct business interest\\nDeprecated! Use TECHNICAL_OWNER, BUSINESS_OWNER, or STEWARD instead.",\n                  "TECHNICAL_OWNER": "person or group who is responsible for technical aspects of the asset."\n                },\n                "deprecatedSymbols": {\n                  "CONSUMER": true,\n                  "DATAOWNER": true,\n                  "DELEGATE": true,\n                  "DEVELOPER": true,\n                  "PRODUCER": true,\n                  "STAKEHOLDER": true\n                },\n                "name": "OwnershipType",\n                "namespace": "com.linkedin.common",\n                "symbols": [\n                  "CUSTOM",\n                  "TECHNICAL_OWNER",\n                  "BUSINESS_OWNER",\n                  "DATA_STEWARD",\n                  "NONE",\n                  "DEVELOPER",\n                  "DATAOWNER",\n                  "DELEGATE",\n                  "PRODUCER",\n                  "CONSUMER",\n                  "STAKEHOLDER"\n                ],\n                "doc": "Asset owner types"\n              },\n              "name": "type",\n              "doc": "The type of the ownership"\n            },\n            {\n              "Relationship": {\n                "entityTypes": [\n                  "ownershipType"\n                ],\n                "name": "ownershipType"\n              },\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": [\n                "null",\n                "string"\n              ],\n              "name": "typeUrn",\n              "default": null,\n              "doc": "The type of the ownership\\nUrn of type O"\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "OwnershipSource",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": {\n                        "type": "enum",\n                        "symbolDocs": {\n                          "AUDIT": "Auditing system or audit logs",\n                          "DATABASE": "Database, e.g. GRANTS table",\n                          "FILE_SYSTEM": "File system, e.g. file/directory owner",\n                          "ISSUE_TRACKING_SYSTEM": "Issue tracking system, e.g. Jira",\n                          "MANUAL": "Manually provided by a user",\n                          "OTHER": "Other sources",\n                          "SERVICE": "Other ownership-like service, e.g. Nuage, ACL service etc",\n                          "SOURCE_CONTROL": "SCM system, e.g. GIT, SVN"\n                        },\n                        "name": "OwnershipSourceType",\n                        "namespace": "com.linkedin.common",\n                        "symbols": [\n                          "AUDIT",\n                          "DATABASE",\n                          "FILE_SYSTEM",\n                          "ISSUE_TRACKING_SYSTEM",\n                          "MANUAL",\n                          "SERVICE",\n                          "SOURCE_CONTROL",\n                          "OTHER"\n                        ]\n                      },\n                      "name": "type",\n                      "doc": "The type of the source"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "url",\n                      "default": null,\n                      "doc": "A reference URL for the source"\n                    }\n                  ],\n                  "doc": "Source/provider of the ownership information"\n                }\n              ],\n              "name": "source",\n              "default": null,\n              "doc": "Source information for the ownership"\n            }\n          ],\n          "doc": "Ownership information"\n        }\n      },\n      "name": "owners",\n      "doc": "List of owners of the entity."\n    },\n    {\n      "Searchable": {\n        "/*": {\n          "fieldType": "MAP_ARRAY",\n          "queryByDefault": false\n        }\n      },\n      "type": [\n        {\n          "type": "map",\n          "values": {\n            "type": "array",\n            "items": "string"\n          }\n        },\n        "null"\n      ],\n      "name": "ownerTypes",\n      "default": {},\n      "doc": "Ownership type to Owners map, populated via mutation hook."\n    },\n    {\n      "type": {\n        "type": "record",\n        "name": "AuditStamp",\n        "namespace": "com.linkedin.common",\n        "fields": [\n          {\n            "type": "long",\n            "name": "time",\n            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": "string",\n            "name": "actor",\n            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n          },\n          {\n            "java": {\n              "class": "com.linkedin.common.urn.Urn"\n            },\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "impersonator",\n            "default": null,\n            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n          },\n          {\n            "type": [\n              "null",\n              "string"\n            ],\n            "name": "message",\n            "default": null,\n            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n          }\n        ],\n        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n      },\n      "name": "lastModified",\n      "default": {\n        "actor": "urn:li:corpuser:unknown",\n        "impersonator": null,\n        "time": 0,\n        "message": null\n      },\n      "doc": "Audit stamp containing who last modified the record and when. A value of 0 in the time field indicates missing data."\n    }\n  ],\n  "doc": "Ownership information of an entity."\n}\n'))),(0,a.kt)("h3",{id:"structuredproperties"},"structuredProperties"),(0,a.kt)("p",null,"Properties about an entity governed by StructuredPropertyDefinition"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "structuredProperties"\n  },\n  "name": "StructuredProperties",\n  "namespace": "com.linkedin.structured",\n  "fields": [\n    {\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "StructuredPropertyValueAssignment",\n          "namespace": "com.linkedin.structured",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "propertyUrn",\n              "doc": "The property that is being assigned a value."\n            },\n            {\n              "type": {\n                "type": "array",\n                "items": [\n                  "string",\n                  "double"\n                ]\n              },\n              "name": "values",\n              "doc": "The value assigned to the property."\n            },\n            {\n              "type": [\n                "null",\n                {\n                  "type": "record",\n                  "name": "AuditStamp",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "long",\n                      "name": "time",\n                      "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": "string",\n                      "name": "actor",\n                      "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                    },\n                    {\n                      "java": {\n                        "class": "com.linkedin.common.urn.Urn"\n                      },\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "impersonator",\n                      "default": null,\n                      "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                    },\n                    {\n                      "type": [\n                        "null",\n                        "string"\n                      ],\n                      "name": "message",\n                      "default": null,\n                      "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                    }\n                  ],\n                  "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n                }\n              ],\n              "name": "created",\n              "default": null,\n              "doc": "Audit stamp containing who created this relationship edge and when"\n            },\n            {\n              "type": [\n                "null",\n                "com.linkedin.common.AuditStamp"\n              ],\n              "name": "lastModified",\n              "default": null,\n              "doc": "Audit stamp containing who last modified this relationship edge and when"\n            }\n          ]\n        }\n      },\n      "name": "properties",\n      "doc": "Custom property bag."\n    }\n  ],\n  "doc": "Properties about an entity governed by StructuredPropertyDefinition"\n}\n'))),(0,a.kt)("h3",{id:"forms"},"forms"),(0,a.kt)("p",null,"Forms that are assigned to this entity to be filled out"),(0,a.kt)("details",null,(0,a.kt)("summary",null,"Schema"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "type": "record",\n  "Aspect": {\n    "name": "forms"\n  },\n  "name": "Forms",\n  "namespace": "com.linkedin.common",\n  "fields": [\n    {\n      "Searchable": {\n        "/*/completedPrompts/*/id": {\n          "fieldName": "incompleteFormsCompletedPromptIds",\n          "fieldType": "KEYWORD"\n        },\n        "/*/completedPrompts/*/lastModified/time": {\n          "fieldName": "incompleteFormsCompletedPromptResponseTimes",\n          "fieldType": "DATETIME"\n        },\n        "/*/incompletePrompts/*/id": {\n          "fieldName": "incompleteFormsIncompletePromptIds",\n          "fieldType": "KEYWORD"\n        },\n        "/*/urn": {\n          "fieldName": "incompleteForms",\n          "fieldType": "URN"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "FormAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "urn",\n              "doc": "Urn of the applied form"\n            },\n            {\n              "type": {\n                "type": "array",\n                "items": {\n                  "type": "record",\n                  "name": "FormPromptAssociation",\n                  "namespace": "com.linkedin.common",\n                  "fields": [\n                    {\n                      "type": "string",\n                      "name": "id",\n                      "doc": "The id for the prompt. This must be GLOBALLY UNIQUE."\n                    },\n                    {\n                      "type": {\n                        "type": "record",\n                        "name": "AuditStamp",\n                        "namespace": "com.linkedin.common",\n                        "fields": [\n                          {\n                            "type": "long",\n                            "name": "time",\n                            "doc": "When did the resource/association/sub-resource move into the specific lifecycle stage represented by this AuditEvent."\n                          },\n                          {\n                            "java": {\n                              "class": "com.linkedin.common.urn.Urn"\n                            },\n                            "type": "string",\n                            "name": "actor",\n                            "doc": "The entity (e.g. a member URN) which will be credited for moving the resource/association/sub-resource into the specific lifecycle stage. It is also the one used to authorize the change."\n                          },\n                          {\n                            "java": {\n                              "class": "com.linkedin.common.urn.Urn"\n                            },\n                            "type": [\n                              "null",\n                              "string"\n                            ],\n                            "name": "impersonator",\n                            "default": null,\n                            "doc": "The entity (e.g. a service URN) which performs the change on behalf of the Actor and must be authorized to act as the Actor."\n                          },\n                          {\n                            "type": [\n                              "null",\n                              "string"\n                            ],\n                            "name": "message",\n                            "default": null,\n                            "doc": "Additional context around how DataHub was informed of the particular change. For example: was the change created by an automated process, or manually."\n                          }\n                        ],\n                        "doc": "Data captured on a resource/association/sub-resource level giving insight into when that resource/association/sub-resource moved into a particular lifecycle stage, and who acted to move it into that specific lifecycle stage."\n                      },\n                      "name": "lastModified",\n                      "doc": "The last time this prompt was touched for the entity (set, unset)"\n                    },\n                    {\n                      "type": [\n                        "null",\n                        {\n                          "type": "record",\n                          "name": "FormPromptFieldAssociations",\n                          "namespace": "com.linkedin.common",\n                          "fields": [\n                            {\n                              "type": [\n                                "null",\n                                {\n                                  "type": "array",\n                                  "items": {\n                                    "type": "record",\n                                    "name": "FieldFormPromptAssociation",\n                                    "namespace": "com.linkedin.common",\n                                    "fields": [\n                                      {\n                                        "type": "string",\n                                        "name": "fieldPath",\n                                        "doc": "The field path on a schema field."\n                                      },\n                                      {\n                                        "type": "com.linkedin.common.AuditStamp",\n                                        "name": "lastModified",\n                                        "doc": "The last time this prompt was touched for the field on the entity (set, unset)"\n                                      }\n                                    ],\n                                    "doc": "Information about the status of a particular prompt for a specific schema field\\non an entity."\n                                  }\n                                }\n                              ],\n                              "name": "completedFieldPrompts",\n                              "default": null,\n                              "doc": "A list of field-level prompt associations that are not yet complete for this form."\n                            },\n                            {\n                              "type": [\n                                "null",\n                                {\n                                  "type": "array",\n                                  "items": "com.linkedin.common.FieldFormPromptAssociation"\n                                }\n                              ],\n                              "name": "incompleteFieldPrompts",\n                              "default": null,\n                              "doc": "A list of field-level prompt associations that are complete for this form."\n                            }\n                          ],\n                          "doc": "Information about the field-level prompt associations on a top-level prompt association."\n                        }\n                      ],\n                      "name": "fieldAssociations",\n                      "default": null,\n                      "doc": "Optional information about the field-level prompt associations."\n                    }\n                  ],\n                  "doc": "Information about the status of a particular prompt.\\nNote that this is where we can add additional information about individual responses:\\nactor, timestamp, and the response itself."\n                }\n              },\n              "name": "incompletePrompts",\n              "default": [],\n              "doc": "A list of prompts that are not yet complete for this form."\n            },\n            {\n              "type": {\n                "type": "array",\n                "items": "com.linkedin.common.FormPromptAssociation"\n              },\n              "name": "completedPrompts",\n              "default": [],\n              "doc": "A list of prompts that have been completed for this form."\n            }\n          ],\n          "doc": "Properties of an applied form."\n        }\n      },\n      "name": "incompleteForms",\n      "doc": "All incomplete forms assigned to the entity."\n    },\n    {\n      "Searchable": {\n        "/*/completedPrompts/*/id": {\n          "fieldName": "completedFormsCompletedPromptIds",\n          "fieldType": "KEYWORD"\n        },\n        "/*/completedPrompts/*/lastModified/time": {\n          "fieldName": "completedFormsCompletedPromptResponseTimes",\n          "fieldType": "DATETIME"\n        },\n        "/*/incompletePrompts/*/id": {\n          "fieldName": "completedFormsIncompletePromptIds",\n          "fieldType": "KEYWORD"\n        },\n        "/*/urn": {\n          "fieldName": "completedForms",\n          "fieldType": "URN"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": "com.linkedin.common.FormAssociation"\n      },\n      "name": "completedForms",\n      "doc": "All complete forms assigned to the entity."\n    },\n    {\n      "Searchable": {\n        "/*/form": {\n          "fieldName": "verifiedForms",\n          "fieldType": "URN"\n        }\n      },\n      "type": {\n        "type": "array",\n        "items": {\n          "type": "record",\n          "name": "FormVerificationAssociation",\n          "namespace": "com.linkedin.common",\n          "fields": [\n            {\n              "java": {\n                "class": "com.linkedin.common.urn.Urn"\n              },\n              "type": "string",\n              "name": "form",\n              "doc": "The urn of the form that granted this verification."\n            },\n            {\n              "type": [\n                "null",\n                "com.linkedin.common.AuditStamp"\n              ],\n              "name": "lastModified",\n              "default": null,\n              "doc": "An audit stamp capturing who and when verification was applied for this form."\n            }\n          ],\n          "doc": "An association between a verification and an entity that has been granted\\nvia completion of one or more forms of type \'VERIFICATION\'."\n        }\n      },\n      "name": "verifications",\n      "default": [],\n      "doc": "Verifications that have been applied to the entity via completed forms."\n    }\n  ],\n  "doc": "Forms that are assigned to this entity to be filled out"\n}\n'))),(0,a.kt)("h2",{id:"relationships"},"Relationships"),(0,a.kt)("h3",{id:"self"},"Self"),(0,a.kt)("p",null,"These are the relationships to itself, stored in this entity's aspects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"IsPartOf (via ",(0,a.kt)("inlineCode",{parentName:"li"},"domainProperties.parentDomain"),")")),(0,a.kt)("h3",{id:"outgoing"},"Outgoing"),(0,a.kt)("p",null,"These are the relationships stored in this entity's aspects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"OwnedBy"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Corpuser via ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")),(0,a.kt)("li",{parentName:"ul"},"CorpGroup via ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership.owners.owner")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"ownershipType"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"OwnershipType via ",(0,a.kt)("inlineCode",{parentName:"li"},"ownership.owners.typeUrn"))))),(0,a.kt)("h3",{id:"incoming"},"Incoming"),(0,a.kt)("p",null,"These are the relationships stored in other entity's aspects"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"AssociatedWith"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Dataset via ",(0,a.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,a.kt)("li",{parentName:"ul"},"DataJob via ",(0,a.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,a.kt)("li",{parentName:"ul"},"DataFlow via ",(0,a.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,a.kt)("li",{parentName:"ul"},"Chart via ",(0,a.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,a.kt)("li",{parentName:"ul"},"Dashboard via ",(0,a.kt)("inlineCode",{parentName:"li"},"domains.domains")),(0,a.kt)("li",{parentName:"ul"},"Notebook via ",(0,a.kt)("inlineCode",{parentName:"li"},"domains.domains"))))),(0,a.kt)("h2",{id:"global-metadata-model"},(0,a.kt)("a",{parentName:"h2",href:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png"},"Global Metadata Model")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://github.com/datahub-project/static-assets/raw/main/imgs/datahub-metadata-model.png",alt:"Global Graph"})))}p.isMDXComponent=!0}}]);