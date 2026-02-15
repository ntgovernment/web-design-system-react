import{r as P,j as e}from"./iframe-lBeUY_a6.js";import{I as A}from"./Icon-yLOO32zI.js";import"./preload-helper-DhH6u7hw.js";const a=({label:I,helperText:h,requiredIndicator:z="(Required)",validationState:T,validationMessage:x,size:S,wrapperClassName:O,id:D,className:y,required:g,disabled:L,readOnly:j,value:b,defaultValue:q,onChange:$,...R})=>{const E=P.useId(),t=D??E,v=b!==void 0,[V,_]=P.useState(q),f=v?b:V,F=f!=null&&`${f}`.length>0,r=T==="error"?"error":T==="success"?"success":void 0,C=h?`${t}-help`:void 0,w=x&&r?`${t}-status`:void 0,M=[C,w].filter(Boolean).join(" ")||void 0,B=`form-control${S?` form-control-${S}`:""}${y?` ${y}`:""}`,U=N=>{v||_(N.target.value),$?.(N)},k=v?{value:b}:{defaultValue:q};return e.jsxs("div",{className:`input-field${O?` ${O}`:""}`,children:[I&&e.jsxs("div",{className:"input-label-row",children:[e.jsx("label",{className:"input-label",htmlFor:t,children:I}),g&&e.jsx("span",{className:"input-required",children:z})]}),h&&e.jsx("div",{className:"input-helper",id:C,children:h}),e.jsx("input",{id:t,className:B,required:g,disabled:L,readOnly:j,"aria-required":g||void 0,"aria-invalid":r==="error"?"true":void 0,"aria-describedby":M,"data-status":r,"data-filled":F?"true":void 0,"data-readonly":j?"true":void 0,"data-disabled":L?"true":void 0,onChange:U,...k,...R}),r&&x&&e.jsxs("div",{id:w,className:`input-message ${r==="error"?"input-message--error":"input-message--success"}`,role:r==="error"?"alert":"status","aria-live":r==="error"?"assertive":"polite",children:[e.jsx("span",{className:"input-message__icon","aria-hidden":"true",children:e.jsx(A,{icon:r==="error"?"fa-light fa-circle-xmark":"fa-light fa-check",color:"currentColor",size:"16px"})}),e.jsx("span",{children:x})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Input",props:{label:{required:!1,tsType:{name:"string"},description:"Input label shown above the field."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown under the label."},requiredIndicator:{required:!1,tsType:{name:"string"},description:`Text shown when the field is required.\r
@default "(Required)"`,defaultValue:{value:'"(Required)"',computed:!1}},validationState:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"Validation state for the field."},validationMessage:{required:!1,tsType:{name:"string"},description:"Validation message shown below the field."},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:"Input size using Bootstrap sizing classes."},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control."}},composes:["Omit"]};const J={title:"Components/Input",component:a,parameters:{layout:"padded",docs:{description:{component:"Input fields allow users to enter short text or numbers. Use a label and optional helper text to guide users. Use validation messages to communicate errors or success states."}}},tags:["autodocs"],argTypes:{label:{control:"text"},helperText:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},readOnly:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["default","sm","lg"],mapping:{default:void 0,sm:"sm",lg:"lg"}},validationState:{control:"select",options:["none","success","error"],mapping:{none:void 0,success:"success",error:"error"}},validationMessage:{control:"text"}}},l={args:{label:"Label",helperText:"Optional helper text",placeholder:"Placeholder text"}},s={args:{label:"Label",helperText:"Optional helper text",required:!0,placeholder:"Placeholder text"}},o={args:{label:"Label",helperText:"Optional helper text",value:"Input text",onChange:()=>{}}},n={render:()=>e.jsx(a,{label:"Label",helperText:"Optional helper text",placeholder:"Placeholder text","data-active":"true"})},i={args:{label:"Label",helperText:"Optional helper text",value:"Input text",onChange:()=>{},validationState:"success",validationMessage:"Success message goes here"}},c={args:{label:"Label",helperText:"Optional helper text",value:"Input text",onChange:()=>{},validationState:"error",validationMessage:"Error message goes here"}},d={args:{label:"Label",helperText:"Optional helper text",value:"Disabled text",disabled:!0}},p={args:{label:"Label",helperText:"Optional helper text",value:"Input text",readOnly:!0}},u={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-2",style:{maxWidth:"480px"},children:[e.jsx(a,{label:"Small",size:"sm",placeholder:"Small"}),e.jsx(a,{label:"Default",placeholder:"Default"}),e.jsx(a,{label:"Large",size:"lg",placeholder:"Large"})]})},m={args:{label:"Label",helperText:"Optional helper text",placeholder:"Placeholder text"}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text"
  }
}`,...l.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    required: true,
    placeholder: "Placeholder text"
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Input text",
    onChange: () => undefined
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Input label="Label" helperText="Optional helper text" placeholder="Placeholder text" data-active="true" />
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Input text",
    onChange: () => undefined,
    validationState: "success",
    validationMessage: "Success message goes here"
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Input text",
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "Error message goes here"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Disabled text",
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    value: "Input text",
    readOnly: true
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-2" style={{
    maxWidth: "480px"
  }}>\r
      <Input label="Small" size="sm" placeholder="Small" />\r
      <Input label="Default" placeholder="Default" />\r
      <Input label="Large" size="lg" placeholder="Large" />\r
    </div>
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text"
  }
}`,...m.parameters?.docs?.source}}};const K=["Default","Required","Filled","Active","Success","Error","Disabled","ReadOnly","Sizes","Playground"];export{n as Active,l as Default,d as Disabled,c as Error,o as Filled,m as Playground,p as ReadOnly,s as Required,u as Sizes,i as Success,K as __namedExportsOrder,J as default};
