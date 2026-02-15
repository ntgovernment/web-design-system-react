import{B as n}from"./Breadcrumbs-DVpqYj3g.js";import"./iframe-Cgj6QQFv.js";import"./preload-helper-DhH6u7hw.js";const s=[{label:"Home",href:"/"},{label:"Page 1",href:"/services"},{label:"Parent page",href:"/services/permits"},{label:"Current page",isCurrent:!0}],o=[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Grants and funding",href:"/services/grants"},{label:"Community programs",href:"/services/grants/community"},{label:"Regional updates",href:"/services/grants/community/updates"},{label:"Current page",isCurrent:!0}],m=[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Current page",isCurrent:!0}],d={title:"Content/Breadcrumbs",component:n,parameters:{layout:"padded",docs:{description:{component:"Bootstrap breadcrumbs customized with design tokens and NTG theme overrides."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","truncated","mobile"]}}},e={args:{items:s,variant:"default"}},r={args:{items:o,variant:"truncated"}},a={args:{items:m,variant:"mobile"}},t={name:"Themes (Use Theme Toolbar)",args:{items:s,variant:"default"},parameters:{docs:{description:{story:"Use the Theme toolbar to preview NT.GOV.AU and NTG Central styling."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: "default"
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: truncatedItems,
    variant: "truncated"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    items: mobileItems,
    variant: "mobile"
  }
}`,...a.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "Themes (Use Theme Toolbar)",
  args: {
    items: defaultItems,
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Use the Theme toolbar to preview NT.GOV.AU and NTG Central styling."
      }
    }
  }
}`,...t.parameters?.docs?.source}}};const u=["Default","Truncated","Mobile","Themes"];export{e as Default,a as Mobile,t as Themes,r as Truncated,u as __namedExportsOrder,d as default};
