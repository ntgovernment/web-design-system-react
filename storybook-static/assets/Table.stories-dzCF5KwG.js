import{j as e}from"./iframe-CJcOhIH1.js";import"./preload-helper-Dc5Yqcnt.js";const J=["Service","Owner","Status","Last updated"],G=[["Grants Portal","Digital NT","Active","2 Feb 2026"],["Vehicle Rego","Transport","Planned","28 Jan 2026"],["Licensing Hub","Business NT","Active","18 Jan 2026"],["Water Alerts","Environment","Paused","12 Jan 2026"],["Community Events","NTG Central","Active","14 Dec 2025"],["Parks Pass","Tourism","Active","30 Nov 2025"]],L=s=>s==="none"?"":s==="always"?"table-responsive":`table-responsive-${s}`,S=({title:s,subtitle:f,caption:g="Service status summary",columns:w=J,rows:x=G,showHeader:N=!0,sortable:_=!1,onSort:o,boldFirstColumn:h=!1,stacked:j=!1,bordered:R=!1,borderless:A=!1,striped:P=!0,hover:V=!0,size:k="md",responsive:q="always",variant:y,className:F,...E})=>{const H=["content-table",j?"content-table--stacked":"",h?"content-table--bold-first-column":"",F||""].filter(Boolean).join(" "),B=L(q),$=["table",P?"table-striped":"",V?"table-hover":"",R?"table-bordered":"",A?"table-borderless":"",k==="sm"?"table-sm":"",y?`table-${y}`:"","content-table__table"].filter(Boolean).join(" "),D=["content-table__wrapper",B||""].filter(Boolean).join(" ");return e.jsxs("div",{className:H,...E,children:[s?e.jsxs("div",{className:"content-table__heading",children:[e.jsx("h3",{className:"content-table__title",children:s}),f?e.jsx("p",{className:"content-table__subtitle",children:f}):null]}):null,e.jsx("div",{className:D,children:e.jsxs("table",{className:$,children:[g?e.jsx("caption",{className:"content-table__caption",children:g}):null,N?e.jsx("thead",{children:e.jsx("tr",{children:w.map((t,a)=>e.jsx("th",{scope:"col",children:e.jsxs("span",{className:"content-table__header",children:[e.jsx("span",{children:t}),_?e.jsxs("span",{className:"content-table__sort",children:[e.jsx("button",{className:"content-table__sort-button",type:"button","aria-label":`Sort by ${t} ascending`,onClick:o?()=>o(a,"asc"):void 0,children:e.jsx("i",{className:"fa-light fa-chevron-up content-table__sort-icon","aria-hidden":"true"})}),e.jsx("button",{className:"content-table__sort-button",type:"button","aria-label":`Sort by ${t} descending`,onClick:o?()=>o(a,"desc"):void 0,children:e.jsx("i",{className:"fa-light fa-chevron-down content-table__sort-icon","aria-hidden":"true"})})]}):null]})},`${t}-${a}`))})}):null,e.jsx("tbody",{children:x.map((t,a)=>e.jsx("tr",{children:t.map((T,l)=>{const C=w[l]||"";return h&&l===0?e.jsx("th",{scope:"row","data-label":C,children:T},`cell-${a}-${l}`):e.jsx("td",{"data-label":C,children:T},`cell-${a}-${l}`)})},`row-${a}`))})]})})]})};S.__docgenInfo={description:"",methods:[],displayName:"TableContent",props:{title:{required:!1,tsType:{name:"string"},description:""},subtitle:{required:!1,tsType:{name:"string"},description:""},caption:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Service status summary"',computed:!1}},columns:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"",defaultValue:{value:'["Service", "Owner", "Status", "Last updated"]',computed:!1}},rows:{required:!1,tsType:{name:"Array",elements:[{name:"Array",elements:[{name:"string"}],raw:"string[]"}],raw:"string[][]"},description:"",defaultValue:{value:`[\r
  ["Grants Portal", "Digital NT", "Active", "2 Feb 2026"],\r
  ["Vehicle Rego", "Transport", "Planned", "28 Jan 2026"],\r
  ["Licensing Hub", "Business NT", "Active", "18 Jan 2026"],\r
  ["Water Alerts", "Environment", "Paused", "12 Jan 2026"],\r
  ["Community Events", "NTG Central", "Active", "14 Dec 2025"],\r
  ["Parks Pass", "Tourism", "Active", "30 Nov 2025"],\r
]`,computed:!1}},showHeader:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},sortable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onSort:{required:!1,tsType:{name:"signature",type:"function",raw:'(columnIndex: number, direction: "asc" | "desc") => void',signature:{arguments:[{type:{name:"number"},name:"columnIndex"},{type:{name:"union",raw:'"asc" | "desc"',elements:[{name:"literal",value:'"asc"'},{name:"literal",value:'"desc"'}]},name:"direction"}],return:{name:"void"}}},description:""},boldFirstColumn:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},stacked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},bordered:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},borderless:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},striped:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},hover:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"md" | "sm"',elements:[{name:"literal",value:'"md"'},{name:"literal",value:'"sm"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},responsive:{required:!1,tsType:{name:"union",raw:'"none" | "always" | "sm" | "md" | "lg" | "xl" | "xxl"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"always"'},{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'},{name:"literal",value:'"xl"'},{name:"literal",value:'"xxl"'}]},description:"",defaultValue:{value:'"always"',computed:!1}},variant:{required:!1,tsType:{name:"union",raw:`| "primary"\r
| "secondary"\r
| "success"\r
| "danger"\r
| "warning"\r
| "info"\r
| "light"\r
| "dark"`,elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"success"'},{name:"literal",value:'"danger"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"info"'},{name:"literal",value:'"light"'},{name:"literal",value:'"dark"'}]},description:""}}};const r=["Service","Owner","Status","Last updated"],n=[["Grants Portal","Digital NT","Active","2 Feb 2026"],["Vehicle Rego","Transport","Planned","28 Jan 2026"],["Licensing Hub","Business NT","Active","18 Jan 2026"],["Water Alerts","Environment","Paused","12 Jan 2026"],["Community Events","NTG Central","Active","14 Dec 2025"],["Parks Pass","Tourism","Active","30 Nov 2025"]],M=["Item","Details"],W=[["Phone","1300 123 456"],["Email","help@nt.gov.au"],["Address","4th Floor, 22 Mitchell Street"],["After-hours","–"]],O=["Program","Region","Next review","Owner"],z=[["Water Safety","Top End","15 Mar 2026","NT Health"],["Bushfire Ready","Katherine","10 Apr 2026","Emergency Services"],["School Transport","Barkly","30 Apr 2026","Education"]],X={title:"Components/Table",component:S,parameters:{layout:"padded",docs:{description:{component:"Bootstrap tables aligned to design tokens and Figma table styles."}}},tags:["autodocs"],argTypes:{title:{control:"text"},subtitle:{control:"text"},bordered:{control:"boolean"},borderless:{control:"boolean"},striped:{control:"boolean"},hover:{control:"boolean"},size:{control:"select",options:["md","sm"]},showHeader:{control:"boolean"},sortable:{control:"boolean"},boldFirstColumn:{control:"boolean"},stacked:{control:"boolean"},responsive:{control:"select",options:["none","always","sm","md","lg","xl","xxl"]},variant:{control:"select",options:["primary","secondary","success","danger","warning","info","light","dark"]},onSort:{action:"sort",table:{disable:!0}}}},i={args:{caption:"Service status summary",columns:r,rows:n,responsive:"always"}},c={args:{title:"Service status overview",subtitle:"Latest updates for digital services across NT Government portfolios.",caption:"Service status overview",columns:r,rows:n}},u={args:{caption:"Sortable service status",columns:r,rows:n,sortable:!0}},m={args:{caption:"Service status with primary column emphasis",columns:r,rows:n,boldFirstColumn:!0}},d={args:{title:"Contact details",caption:"Primary contact details",columns:M,rows:W,showHeader:!1,striped:!1,hover:!1,borderless:!0}},p={args:{caption:"Compact table",columns:r,rows:n,size:"sm"}},v={args:{caption:"Responsive table (md)",columns:r,rows:n,responsive:"md"}},b={args:{caption:"Program review schedule",columns:O,rows:z,stacked:!0,responsive:"always"},parameters:{viewport:{defaultViewport:"mobile1"}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Service status summary",
    columns: demoColumns,
    rows: demoRows,
    responsive: "always"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Service status overview",
    subtitle: "Latest updates for digital services across NT Government portfolios.",
    caption: "Service status overview",
    columns: demoColumns,
    rows: demoRows
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Sortable service status",
    columns: demoColumns,
    rows: demoRows,
    sortable: true
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Service status with primary column emphasis",
    columns: demoColumns,
    rows: demoRows,
    boldFirstColumn: true
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Contact details",
    caption: "Primary contact details",
    columns: contactColumns,
    rows: contactRows,
    showHeader: false,
    striped: false,
    hover: false,
    borderless: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Compact table",
    columns: demoColumns,
    rows: demoRows,
    size: "sm"
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Responsive table (md)",
    columns: demoColumns,
    rows: demoRows,
    responsive: "md"
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    caption: "Program review schedule",
    columns: mobileColumns,
    rows: mobileRows,
    stacked: true,
    responsive: "always"
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...b.parameters?.docs?.source}}};const Y=["Default","TitleAndSubheading","HeadersWithFilters","BoldFirstColumn","SimplifiedNoHeader","Small","ResponsiveMd","ResponsiveStackedMobile"];export{m as BoldFirstColumn,i as Default,u as HeadersWithFilters,v as ResponsiveMd,b as ResponsiveStackedMobile,d as SimplifiedNoHeader,p as Small,c as TitleAndSubheading,Y as __namedExportsOrder,X as default};
