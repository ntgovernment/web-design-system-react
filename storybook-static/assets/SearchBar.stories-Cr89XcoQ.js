import{S as n}from"./SearchBar-DQilpmSE.js";import"./iframe-Cgj6QQFv.js";import"./preload-helper-DhH6u7hw.js";import"./Icon-D6RIkSta.js";const p={title:"Components/SearchBar",component:n,parameters:{layout:"padded",docs:{description:{component:"Search bars provide a focused input for finding services, people, or content. Use the primary variant for prominent search actions and the secondary variant for lightweight filtering."}}},tags:["autodocs"],argTypes:{placeholder:{control:"text"},required:{control:"boolean"},variant:{control:"select",options:["primary","secondary"]}}},r={args:{placeholder:"Search",variant:"primary"}},a={args:{placeholder:"Search",variant:"secondary"}},e={args:{placeholder:"Search for announcements",variant:"primary",onSearch:()=>{}}},o={args:{placeholder:"Search",variant:"primary"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "primary"
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "secondary"
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search for announcements",
    variant: "primary",
    onSearch: () => undefined
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "primary"
  }
}`,...o.parameters?.docs?.source}}};const d=["Primary","Secondary","WithOnSearch","Playground"];export{o as Playground,r as Primary,a as Secondary,e as WithOnSearch,d as __namedExportsOrder,p as default};
