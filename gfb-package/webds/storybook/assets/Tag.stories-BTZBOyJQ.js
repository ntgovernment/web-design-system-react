import{j as e}from"./iframe-CG7tK2QQ.js";import{T as a}from"./Tag-ZlAekNHO.js";import"./preload-helper-DhH6u7hw.js";const u={title:"Components/Tag",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","grey","green","blue","warning","red"],description:"The visual style variant of the tag"},label:{control:"text",description:"The text label to display inside the tag"}}},r={args:{variant:"default",label:"Default"}},n={args:{variant:"grey",label:"Grey"}},s={args:{variant:"green",label:"Green"}},t={args:{variant:"blue",label:"Blue"}},i={args:{variant:"warning",label:"Warning"}},l={args:{variant:"red",label:"Red"}},o={args:{label:"Tag"},render:()=>e.jsxs("div",{className:"d-flex gap-2 align-items-center flex-wrap",children:[e.jsx(a,{variant:"default",label:"Default"}),e.jsx(a,{variant:"grey",label:"Grey"}),e.jsx(a,{variant:"green",label:"Green"}),e.jsx(a,{variant:"blue",label:"Blue"}),e.jsx(a,{variant:"warning",label:"Warning"}),e.jsx(a,{variant:"red",label:"Red"})]})},c={args:{label:"Tag"},render:()=>e.jsxs("div",{className:"d-flex gap-2 align-items-center flex-wrap",children:[e.jsx(a,{variant:"green",label:"Active"}),e.jsx(a,{variant:"blue",label:"New"}),e.jsx(a,{variant:"warning",label:"Pending Review"}),e.jsx(a,{variant:"red",label:"Urgent"}),e.jsx(a,{variant:"grey",label:"Archived"}),e.jsx(a,{variant:"default",label:"Draft"})]})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "default",
    label: "Default"
  }
}`,...r.parameters?.docs?.source},description:{story:"Default variant - neutral styling for general use",...r.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "grey",
    label: "Grey"
  }
}`,...n.parameters?.docs?.source},description:{story:"Grey variant - muted neutral color",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "green",
    label: "Green"
  }
}`,...s.parameters?.docs?.source},description:{story:"Green variant - for success states or positive indicators",...s.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "blue",
    label: "Blue"
  }
}`,...t.parameters?.docs?.source},description:{story:"Blue variant - for informational states",...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    label: "Warning"
  }
}`,...i.parameters?.docs?.source},description:{story:"Warning variant - for caution or attention states",...i.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "red",
    label: "Red"
  }
}`,...l.parameters?.docs?.source},description:{story:"Red variant - for error or danger states",...l.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tag"
  },
  render: () => <div className="d-flex gap-2 align-items-center flex-wrap">\r
      <Tag variant="default" label="Default" />\r
      <Tag variant="grey" label="Grey" />\r
      <Tag variant="green" label="Green" />\r
      <Tag variant="blue" label="Blue" />\r
      <Tag variant="warning" label="Warning" />\r
      <Tag variant="red" label="Red" />\r
    </div>
}`,...o.parameters?.docs?.source},description:{story:"All variants displayed together for comparison",...o.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tag"
  },
  render: () => <div className="d-flex gap-2 align-items-center flex-wrap">\r
      <Tag variant="green" label="Active" />\r
      <Tag variant="blue" label="New" />\r
      <Tag variant="warning" label="Pending Review" />\r
      <Tag variant="red" label="Urgent" />\r
      <Tag variant="grey" label="Archived" />\r
      <Tag variant="default" label="Draft" />\r
    </div>
}`,...c.parameters?.docs?.source},description:{story:"Example usage in context - showing tags with different content lengths",...c.parameters?.docs?.description}}};const m=["Default","Grey","Green","Blue","Warning","Red","AllVariants","VariousLabels"];export{o as AllVariants,t as Blue,r as Default,s as Green,n as Grey,l as Red,c as VariousLabels,i as Warning,m as __namedExportsOrder,u as default};
