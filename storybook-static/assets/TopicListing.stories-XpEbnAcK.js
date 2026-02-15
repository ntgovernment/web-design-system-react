import{j as e}from"./iframe-DqxE2j8t.js";import{I as D}from"./Icon-klaNO5Ai.js";import{B as H}from"./Button-C4dqC0nl.js";import{D as K}from"./Document-BlXlE9zg.js";import"./preload-helper-DhH6u7hw.js";const y=({variant:t="topics",title:c,titleHref:p,description:d,icon:m,ctaLabel:l,ctaHref:f,ctaOnClick:v,ctaVariant:u="secondary",links:g=[],documents:b=[],linksColumns:k=2,className:T="",...x})=>{const _=t==="topics",S=t==="links",o=t==="documents",j=!!p&&!o,N=()=>e.jsxs("h3",{className:"topic-listing__title",children:[m&&!o&&e.jsx(D,{icon:m,className:"topic-listing__title-icon"}),j?e.jsx("a",{className:"topic-listing__title-link link-underline link-underline-opacity-100 link-underline-opacity-75-hover link-offset-2 link-offset-3-hover",href:p,children:c}):e.jsx("span",{className:"topic-listing__title-text",children:c})]}),B=()=>d?e.jsx("p",{className:"topic-listing__description",children:d}):null,L=()=>l?e.jsx("div",{className:"topic-listing__cta",children:f?e.jsx("a",{className:`btn btn-${u}`,href:f,children:l}):e.jsx(H,{variant:u,label:l,onClick:v})}):null,h=(i,n)=>i==="_blank"&&!n?"noreferrer":n,C=()=>{const i=`topic-listing__list topic-listing__list--columns-${k}`;return e.jsx("ul",{className:i,children:g.map((n,q)=>e.jsxs("li",{className:"topic-listing__list-item",children:[e.jsx("span",{className:"topic-listing__bullet","aria-hidden":"true"}),e.jsx("a",{className:"topic-listing__link link-underline link-underline-opacity-100 link-underline-opacity-75-hover link-offset-2 link-offset-3-hover",href:n.href,"aria-label":n.ariaLabel,target:n.target,rel:h(n.target,n.rel),children:n.label})]},`${n.label}-${q}`))})},w=()=>e.jsx("div",{className:"topic-listing__topic-list",children:g.map((i,n)=>e.jsxs("div",{className:"topic-listing__topic-item",children:[e.jsx("a",{className:"topic-listing__topic-link link-underline link-underline-opacity-100 link-underline-opacity-75-hover link-offset-2 link-offset-3-hover",href:i.href,"aria-label":i.ariaLabel,target:i.target,rel:h(i.target,i.rel),children:i.label}),i.description&&e.jsx("p",{className:"topic-listing__topic-description",children:i.description})]},`${i.label}-${n}`))}),z=()=>e.jsx("div",{className:"topic-listing__documents",children:b.map((i,n)=>e.jsx(K,{...i},`${i.title}-${n}`))});return e.jsx("section",{className:`topic-listing topic-listing--${t} ${T}`.trim(),"data-variant":t,...x,children:e.jsxs("div",{className:"topic-listing__layout",children:[e.jsxs("div",{className:"topic-listing__content",children:[N(),B(),L()]}),e.jsxs("div",{className:"topic-listing__items",children:[S&&C(),_&&w(),o&&z()]})]})})};y.__docgenInfo={description:"TopicListing component for grouped links, topics, and document listings.",methods:[],displayName:"TopicListing",props:{variant:{required:!1,tsType:{name:"union",raw:'"topics" | "links" | "documents"',elements:[{name:"literal",value:'"topics"'},{name:"literal",value:'"links"'},{name:"literal",value:'"documents"'}]},description:"Component variant",defaultValue:{value:'"topics"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Title or heading for the listing"},titleHref:{required:!1,tsType:{name:"string"},description:"Optional title link (ignored for documents variant)"},description:{required:!1,tsType:{name:"string"},description:"Optional description text"},icon:{required:!1,tsType:{name:"string"},description:"Optional icon next to the title (topics/links variants only)"},ctaLabel:{required:!1,tsType:{name:"string"},description:"Optional secondary CTA label"},ctaHref:{required:!1,tsType:{name:"string"},description:"Optional CTA href (renders as link)"},ctaOnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Optional CTA click handler (renders Button)"},ctaVariant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"CTA variant (default: secondary)",defaultValue:{value:'"secondary"',computed:!1}},links:{required:!1,tsType:{name:"Array",elements:[{name:"TopicListingLink"}],raw:"TopicListingLink[]"},description:"Link items for topic or links variants",defaultValue:{value:"[]",computed:!1}},documents:{required:!1,tsType:{name:"Array",elements:[{name:"DocumentProps"}],raw:"DocumentProps[]"},description:"Document items for documents variant",defaultValue:{value:"[]",computed:!1}},linksColumns:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:"Number of columns for links variant (default: 2)",defaultValue:{value:"2",computed:!1}},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const R={title:"Components/TopicListing",component:y,parameters:{layout:"padded"},tags:["autodocs"]},a={args:{variant:"topics",title:"Family and community support",titleHref:"#",icon:"fa-light fa-family",description:"Navigate key services for families, carers, and community wellbeing across the Territory.",ctaLabel:"View all family services",ctaHref:"#",links:[{label:"Child care subsidies",href:"#",description:"Find eligibility criteria, payment schedules, and how to apply."},{label:"Support for carers",href:"#",description:"Access respite programs, allowances, and local support groups."},{label:"Community grants",href:"#",description:"Explore funding rounds for local projects and community initiatives."},{label:"Parenting resources",href:"#",description:"Guidance for early years, school readiness, and family wellbeing."}]}},s={args:{variant:"links",title:"Planning and approvals",titleHref:"#",icon:"fa-light fa-map",description:"Quick access to planning schemes, applications, and guidance for development approvals.",ctaLabel:"Start a planning application",ctaHref:"#",links:[{label:"Submit a development application",href:"#"},{label:"Check planning zones",href:"#"},{label:"Building approvals checklist",href:"#"},{label:"Heritage assessment guidance",href:"#"},{label:"Subdivision requirements",href:"#"},{label:"Planning fees and charges",href:"#"},{label:"Request a pre-lodgement meeting",href:"#"},{label:"Track an application",href:"#"}]}},r={args:{variant:"documents",title:"Emergency management resources",description:"Download templates and guidance to prepare your organisation for emergencies.",documents:[{title:"Emergency management plan template",href:"#",fileType:"docx",fileSize:"182 KB"},{title:"Business continuity checklist",href:"#",fileType:"pdf",fileSize:"946 KB"},{title:"Incident reporting log",href:"#",fileType:"xlsx",fileSize:"1.1 MB"},{title:"Recovery communications plan",href:"#",fileType:"pdf",fileSize:"402 KB"},{title:"Critical contacts directory",href:"#",fileType:"docx",fileSize:"176 KB"},{title:"Operational readiness checklist",href:"#",fileType:"docx",fileSize:"214 KB"},{title:"Incident briefing slides",href:"#",fileType:"pptx",fileSize:"2.4 MB"},{title:"Resource allocation tracker",href:"#",fileType:"xlsx",fileSize:"1.6 MB"}]}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "topics",
    title: "Family and community support",
    titleHref: "#",
    icon: "fa-light fa-family",
    description: "Navigate key services for families, carers, and community wellbeing across the Territory.",
    ctaLabel: "View all family services",
    ctaHref: "#",
    links: [{
      label: "Child care subsidies",
      href: "#",
      description: "Find eligibility criteria, payment schedules, and how to apply."
    }, {
      label: "Support for carers",
      href: "#",
      description: "Access respite programs, allowances, and local support groups."
    }, {
      label: "Community grants",
      href: "#",
      description: "Explore funding rounds for local projects and community initiatives."
    }, {
      label: "Parenting resources",
      href: "#",
      description: "Guidance for early years, school readiness, and family wellbeing."
    }]
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "links",
    title: "Planning and approvals",
    titleHref: "#",
    icon: "fa-light fa-map",
    description: "Quick access to planning schemes, applications, and guidance for development approvals.",
    ctaLabel: "Start a planning application",
    ctaHref: "#",
    links: [{
      label: "Submit a development application",
      href: "#"
    }, {
      label: "Check planning zones",
      href: "#"
    }, {
      label: "Building approvals checklist",
      href: "#"
    }, {
      label: "Heritage assessment guidance",
      href: "#"
    }, {
      label: "Subdivision requirements",
      href: "#"
    }, {
      label: "Planning fees and charges",
      href: "#"
    }, {
      label: "Request a pre-lodgement meeting",
      href: "#"
    }, {
      label: "Track an application",
      href: "#"
    }]
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "documents",
    title: "Emergency management resources",
    description: "Download templates and guidance to prepare your organisation for emergencies.",
    documents: [{
      title: "Emergency management plan template",
      href: "#",
      fileType: "docx",
      fileSize: "182 KB"
    }, {
      title: "Business continuity checklist",
      href: "#",
      fileType: "pdf",
      fileSize: "946 KB"
    }, {
      title: "Incident reporting log",
      href: "#",
      fileType: "xlsx",
      fileSize: "1.1 MB"
    }, {
      title: "Recovery communications plan",
      href: "#",
      fileType: "pdf",
      fileSize: "402 KB"
    }, {
      title: "Critical contacts directory",
      href: "#",
      fileType: "docx",
      fileSize: "176 KB"
    }, {
      title: "Operational readiness checklist",
      href: "#",
      fileType: "docx",
      fileSize: "214 KB"
    }, {
      title: "Incident briefing slides",
      href: "#",
      fileType: "pptx",
      fileSize: "2.4 MB"
    }, {
      title: "Resource allocation tracker",
      href: "#",
      fileType: "xlsx",
      fileSize: "1.6 MB"
    }]
  }
}`,...r.parameters?.docs?.source}}};const V=["Topics","Links","Documents"];export{r as Documents,s as Links,a as Topics,V as __namedExportsOrder,R as default};
