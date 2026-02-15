import{j as n}from"./iframe-lBeUY_a6.js";import{I as v}from"./Icon-yLOO32zI.js";import"./preload-helper-DhH6u7hw.js";const y=[{label:"Application overview",href:"#application-overview",level:0},{label:"Eligibility and requirements",href:"#eligibility",level:0,children:[{label:"Income thresholds",href:"#income-thresholds",level:1},{label:"Asset limits",href:"#asset-limits",level:1,children:[{label:"Property valuations",href:"#property-valuations",level:2}]}]},{label:"Supporting documents",href:"#supporting-documents",level:0},{label:"Fees and processing times",href:"#fees",level:0},{label:"Contact and help",href:"#contact",level:0}],w=(e,r)=>r||e||"On this page",u=(e,r,l=0)=>{const i=`${e.label}-${r}-${l}`,a=e.level??l,p="content-on-this-page__link link-underline link-underline-opacity-100 link-offset-2",d={paddingLeft:a>0?`${a*16}px`:void 0};return n.jsxs("li",{className:"content-on-this-page__item",style:d,"data-level":a,children:[n.jsxs("div",{className:"content-on-this-page__content",children:[a>0?n.jsx(v,{icon:"fa-light fa-chevron-right",className:"content-on-this-page__chevron","aria-hidden":"true"}):null,e.href?n.jsx("a",{className:p,href:e.href,"aria-current":e.isCurrent?"location":void 0,children:e.label}):n.jsx("span",{className:"content-on-this-page__text","aria-current":e.isCurrent?"location":void 0,children:e.label})]}),e.children&&e.children.length>0?n.jsx("ul",{className:"content-on-this-page__sublist",children:e.children.map((m,g)=>u(m,g,a+1))}):null]},i)},f=({heading:e="On this page",items:r=y,ariaLabel:l,className:i,...a})=>{const p=`content-on-this-page${i?` ${i}`:""}`,d=w(e,l);return n.jsxs("nav",{"aria-label":d,className:p,...a,children:[e?n.jsx("h2",{className:"content-on-this-page__heading",children:e}):null,n.jsx("ul",{className:"content-on-this-page__list",children:r.map((m,g)=>u(m,g,0))})]})};f.__docgenInfo={description:"",methods:[],displayName:"OnThisPageNavigation",props:{heading:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"On this page"',computed:!1}},items:{required:!1,tsType:{name:"Array",elements:[{name:"OnThisPageNavigationItem"}],raw:"OnThisPageNavigationItem[]"},description:"",defaultValue:{value:`[\r
  {\r
    label: "Application overview",\r
    href: "#application-overview",\r
    level: 0,\r
  },\r
  {\r
    label: "Eligibility and requirements",\r
    href: "#eligibility",\r
    level: 0,\r
    children: [\r
      {\r
        label: "Income thresholds",\r
        href: "#income-thresholds",\r
        level: 1,\r
      },\r
      {\r
        label: "Asset limits",\r
        href: "#asset-limits",\r
        level: 1,\r
        children: [\r
          {\r
            label: "Property valuations",\r
            href: "#property-valuations",\r
            level: 2,\r
          },\r
        ],\r
      },\r
    ],\r
  },\r
  {\r
    label: "Supporting documents",\r
    href: "#supporting-documents",\r
    level: 0,\r
  },\r
  { label: "Fees and processing times", href: "#fees", level: 0 },\r
  { label: "Contact and help", href: "#contact", level: 0 },\r
]`,computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:""}}};const N={title:"Content/OnThisPageNavigation",component:f,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{heading:{control:"text"},ariaLabel:{control:"text"}}},b=[{label:"Application overview",href:"#application-overview"},{label:"Eligibility and requirements",href:"#eligibility",children:[{label:"Income thresholds",href:"#income-thresholds"},{label:"Asset limits",href:"#asset-limits"}]},{label:"How to apply",href:"#how-to-apply"},{label:"Fees and processing times",href:"#fees"},{label:"Contact and help",href:"#contact"}],_=[{label:"Application overview",href:"#application-overview"},{label:"Eligibility and requirements",href:"#eligibility",isCurrent:!0,children:[{label:"Income thresholds",href:"#income-thresholds"},{label:"Asset limits",href:"#asset-limits"}]},{label:"How to apply",href:"#how-to-apply"},{label:"Fees and processing times",href:"#fees"},{label:"Contact and help",href:"#contact"}],t={args:{heading:"On this page",items:b}},s={args:{heading:"On this page",items:_}},o={args:{heading:"On this page",items:[{label:"Check eligibility for the regional housing support program",href:"#regional-housing"},{label:"Prepare identity documents and supporting evidence",href:"#prepare-documents"},{label:"Submit your application and confirm contact details",href:"#submit-application"}]}},c={name:"Themes (Use Theme Toolbar)",args:{heading:"On this page",items:b}},h={args:{heading:"On this page",items:[{label:"System overview",href:"#overview"},{label:"Installation",href:"#installation",children:[{label:"Prerequisites",href:"#prerequisites",children:[{label:"Hardware requirements",href:"#hardware"},{label:"Software dependencies",href:"#dependencies"}]},{label:"Setup process",href:"#setup",children:[{label:"Configuration",href:"#configuration"},{label:"Verification",href:"#verification"}]}]},{label:"Usage guide",href:"#usage"},{label:"Troubleshooting",href:"#troubleshooting"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "On this page",
    items: defaultItems
  }
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "On this page",
    items: activeItems
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "On this page",
    items: [{
      label: "Check eligibility for the regional housing support program",
      href: "#regional-housing"
    }, {
      label: "Prepare identity documents and supporting evidence",
      href: "#prepare-documents"
    }, {
      label: "Submit your application and confirm contact details",
      href: "#submit-application"
    }]
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Themes (Use Theme Toolbar)",
  args: {
    heading: "On this page",
    items: defaultItems
  }
}`,...c.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "On this page",
    items: [{
      label: "System overview",
      href: "#overview"
    }, {
      label: "Installation",
      href: "#installation",
      children: [{
        label: "Prerequisites",
        href: "#prerequisites",
        children: [{
          label: "Hardware requirements",
          href: "#hardware"
        }, {
          label: "Software dependencies",
          href: "#dependencies"
        }]
      }, {
        label: "Setup process",
        href: "#setup",
        children: [{
          label: "Configuration",
          href: "#configuration"
        }, {
          label: "Verification",
          href: "#verification"
        }]
      }]
    }, {
      label: "Usage guide",
      href: "#usage"
    }, {
      label: "Troubleshooting",
      href: "#troubleshooting"
    }]
  }
}`,...h.parameters?.docs?.source}}};const S=["Default","ActiveSection","LongLabels","Themes","DeeplyNested"];export{s as ActiveSection,h as DeeplyNested,t as Default,o as LongLabels,c as Themes,S as __namedExportsOrder,N as default};
