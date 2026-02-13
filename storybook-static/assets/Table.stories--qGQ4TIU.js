import{j as e}from"./iframe-CG7tK2QQ.js";import"./preload-helper-DhH6u7hw.js";const P=["Header text","Header text","Header text","Header text"],q=[["Cell text","Cell text","Cell text","Cell text"],["Cell text","Cell text","Cell text","Cell text"],["Cell text","Cell text","Cell text","Cell text"],["Cell text","Cell text","Cell text","Cell text"],["Cell text","Cell text","Cell text","Cell text"],["Cell text","Cell text","Cell text","Cell text"]],A=l=>l==="none"?"":l==="always"?"table-responsive":`table-responsive-${l}`,C=({caption:l="Table example",columns:v=P,rows:b=q,bordered:g=!1,borderless:f=!1,striped:w=!0,hover:y=!0,size:h="md",responsive:T="always",variant:p,className:x,...j})=>{const R=`content-table${x?` ${x}`:""}`,_=A(T),N=["table",w?"table-striped":"",y?"table-hover":"",g?"table-bordered":"",f?"table-borderless":"",h==="sm"?"table-sm":"",p?`table-${p}`:"","content-table__table"].filter(Boolean).join(" "),S=_||void 0;return e.jsx("div",{className:R,...j,children:e.jsx("div",{className:S,children:e.jsxs("table",{className:N,children:[l?e.jsx("caption",{className:"content-table__caption",children:l}):null,e.jsx("thead",{children:e.jsx("tr",{children:v.map((r,s)=>e.jsx("th",{scope:"col",children:e.jsxs("span",{className:"content-table__header",children:[e.jsx("span",{children:r}),e.jsxs("span",{className:"content-table__sort","aria-hidden":"true",children:[e.jsx("i",{className:"fa-light fa-chevron-up content-table__sort-icon"}),e.jsx("i",{className:"fa-light fa-chevron-down content-table__sort-icon"})]})]})},`${r}-${s}`))})}),e.jsx("tbody",{children:b.map((r,s)=>e.jsx("tr",{children:r.map((V,B)=>e.jsx("td",{children:V},`cell-${s}-${B}`))},`row-${s}`))})]})})})};C.__docgenInfo={description:"",methods:[],displayName:"TableContent",props:{caption:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Table example"',computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:`[\r
  "Header text",\r
  "Header text",\r
  "Header text",\r
  "Header text",\r
]`,computed:!1}},rows:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"string[][]"},description:"",defaultValue:{value:`[\r
  ["Cell text", "Cell text", "Cell text", "Cell text"],\r
  ["Cell text", "Cell text", "Cell text", "Cell text"],\r
  ["Cell text", "Cell text", "Cell text", "Cell text"],\r
  ["Cell text", "Cell text", "Cell text", "Cell text"],\r
  ["Cell text", "Cell text", "Cell text", "Cell text"],\r
  ["Cell text", "Cell text", "Cell text", "Cell text"],\r
]`,computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},borderless:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"md" | "sm"',elements:[{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},responsive:{required:!1,tsType:{name:"union",raw:'"none" | "always" | "sm" | "md" | "lg" | "xl" | "xxl"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"always"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xxl"'}]},description:"",defaultValue:{value:'"always"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "success"\r
| "danger"\r
| "warning"\r
| "info"\r
| "light"\r
| "dark"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:""}}};const a=["Service","Owner","Status","Last updated"],t=[["Grants Portal","Digital NT","Active","2 Feb 2026"],["Vehicle Rego","Transport","Planned","28 Jan 2026"],["Licensing Hub","Business NT","Active","18 Jan 2026"],["Water Alerts","Environment","Paused","12 Jan 2026"],["MyService","Customer Experience","Active","4 Jan 2026"],["Open Data","DPC","Planned","21 Dec 2025"],["Community Events","NTG Central","Active","14 Dec 2025"],["Parks Pass","Tourism","Active","30 Nov 2025"]],D={title:"Content/Table",component:C,parameters:{layout:"padded",docs:{description:{component:"Bootstrap tables aligned to design tokens and Figma table styles."}}},tags:["autodocs"],argTypes:{bordered:{control:"boolean"},borderless:{control:"boolean"},striped:{control:"boolean"},hover:{control:"boolean"},size:{control:"select",options:["md","sm"]},responsive:{control:"select",options:["none","always","sm","md","lg","xl","xxl"]},variant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"]}}},n={args:{caption:"Table example",columns:a,rows:t}},o={args:{caption:"",columns:a,rows:t}},i={args:{caption:"Bordered table",columns:a,rows:t,bordered:!0}},c={args:{caption:"Borderless table",columns:a,rows:t,borderless:!0}},d={args:{caption:"Compact table",columns:a,rows:t,size:"sm"}},m={args:{caption:"Responsive table (md)",columns:a,rows:t,responsive:"md"}},u={args:{caption:"Primary variant",columns:a,rows:t,variant:"primary"}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Table example",
    columns: demoColumns,
    rows: demoRows
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "",
    columns: demoColumns,
    rows: demoRows
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Bordered table",
    columns: demoColumns,
    rows: demoRows,
    bordered: true
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Borderless table",
    columns: demoColumns,
    rows: demoRows,
    borderless: true
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Compact table",
    columns: demoColumns,
    rows: demoRows,
    size: "sm"
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Responsive table (md)",
    columns: demoColumns,
    rows: demoRows,
    responsive: "md"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Primary variant",
    columns: demoColumns,
    rows: demoRows,
    variant: "primary"
  }
}`,...u.parameters?.docs?.source}}};const k=["Default","WithoutCaption","Bordered","Borderless","Small","ResponsiveMd","PrimaryVariant"];export{i as Bordered,c as Borderless,n as Default,u as PrimaryVariant,m as ResponsiveMd,d as Small,o as WithoutCaption,k as __namedExportsOrder,D as default};
