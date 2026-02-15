import{j as l}from"./iframe-lBeUY_a6.js";import{I as v}from"./Icon-yLOO32zI.js";import"./preload-helper-DhH6u7hw.js";const a=({label:e,onRemove:o,className:c,type:m="button",...d})=>{const p=`pill${c?` ${c}`:""}`;return l.jsxs("button",{type:m,className:p,onClick:o,"aria-label":`Remove ${e}`,...d,children:[l.jsx("span",{className:"pill__label",children:e}),l.jsx(v,{icon:"fa-light fa-times",className:"pill__close"})]})};a.__docgenInfo={description:"Pill component for displaying removable tags, filters, or selections",methods:[],displayName:"Pill",props:{label:{required:!0,tsType:{name:"string"},description:"The text label to display inside the pill"},onRemove:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback function triggered when the close button is clicked"},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const b={title:"Components/Pill",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{label:{control:"text",description:"The text label to display inside the pill"},onRemove:{action:"removed",description:"Callback function triggered when the close button is clicked"}}},r={args:{label:"Pill label",onRemove:()=>{}}},n={args:{label:"Long pill label with more text",onRemove:()=>{}}},t={args:{label:"Click to remove",onRemove:()=>{}},render:e=>{const o=()=>{console.log(`Removed pill: ${e.label}`),alert(`Removed: ${e.label}`)};return l.jsx(a,{...e,onRemove:o})}},s={args:{label:"Pill",onRemove:()=>{}},render:()=>{const e=o=>{console.log(`Removed: ${o}`)};return l.jsxs("div",{className:"d-flex gap-2 align-items-center flex-wrap",children:[l.jsx(a,{label:"JavaScript",onRemove:()=>e("JavaScript")}),l.jsx(a,{label:"TypeScript",onRemove:()=>e("TypeScript")}),l.jsx(a,{label:"React",onRemove:()=>e("React")}),l.jsx(a,{label:"CSS",onRemove:()=>e("CSS")}),l.jsx(a,{label:"HTML",onRemove:()=>e("HTML")})]})}},i={args:{label:"Filter",onRemove:()=>{}},render:()=>{const e=o=>{console.log(`Removed filter: ${o}`)};return l.jsxs("div",{style:{maxWidth:"500px"},children:[l.jsx("h4",{className:"mb-3",children:"Active Filters:"}),l.jsxs("div",{className:"d-flex gap-2 align-items-center flex-wrap",children:[l.jsx(a,{label:"Status: Active",onRemove:()=>e("Status: Active")}),l.jsx(a,{label:"Category: Design",onRemove:()=>e("Category: Design")}),l.jsx(a,{label:"Date: 2024",onRemove:()=>e("Date: 2024")})]})]})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pill label",
    onRemove: () => {}
  }
}`,...r.parameters?.docs?.source},description:{story:"Default pill with a simple label",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Long pill label with more text",
    onRemove: () => {}
  }
}`,...n.parameters?.docs?.source},description:{story:"Pill with a longer label to show text wrapping behavior",...n.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Click to remove",
    onRemove: () => {}
  },
  render: args => {
    const handleRemove = () => {
      console.log(\`Removed pill: \${args.label}\`);
      alert(\`Removed: \${args.label}\`);
    };
    return <Pill {...args} onRemove={handleRemove} />;
  }
}`,...t.parameters?.docs?.source},description:{story:"Interactive example - check the Actions panel to see onRemove callbacks",...t.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Pill",
    onRemove: () => {}
  },
  render: () => {
    const handleRemove = (label: string) => {
      console.log(\`Removed: \${label}\`);
    };
    return <div className="d-flex gap-2 align-items-center flex-wrap">\r
        <Pill label="JavaScript" onRemove={() => handleRemove("JavaScript")} />\r
        <Pill label="TypeScript" onRemove={() => handleRemove("TypeScript")} />\r
        <Pill label="React" onRemove={() => handleRemove("React")} />\r
        <Pill label="CSS" onRemove={() => handleRemove("CSS")} />\r
        <Pill label="HTML" onRemove={() => handleRemove("HTML")} />\r
      </div>;
  }
}`,...s.parameters?.docs?.source},description:{story:"Multiple pills displayed together as they would appear in use",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Filter",
    onRemove: () => {}
  },
  render: () => {
    const handleRemove = (filter: string) => {
      console.log(\`Removed filter: \${filter}\`);
    };
    return <div style={{
      maxWidth: "500px"
    }}>\r
        <h4 className="mb-3">Active Filters:</h4>\r
        <div className="d-flex gap-2 align-items-center flex-wrap">\r
          <Pill label="Status: Active" onRemove={() => handleRemove("Status: Active")} />\r
          <Pill label="Category: Design" onRemove={() => handleRemove("Category: Design")} />\r
          <Pill label="Date: 2024" onRemove={() => handleRemove("Date: 2024")} />\r
        </div>\r
      </div>;
  }
}`,...i.parameters?.docs?.source},description:{story:"Example usage as filter tags in a search context",...i.parameters?.docs?.description}}};const h=["Default","LongLabel","Interactive","MultiplePills","FilterExample"];export{r as Default,i as FilterExample,t as Interactive,n as LongLabel,s as MultiplePills,h as __namedExportsOrder,b as default};
