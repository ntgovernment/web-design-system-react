import{r as F,j as e}from"./iframe-Bqn3Sp5W.js";import{I as re}from"./Icon-TQc2MUAD.js";import"./preload-helper-DhH6u7hw.js";const a=({label:q,helperText:S,requiredIndicator:O="(Required)",validationState:N,validationMessage:C,wrapperClassName:D,id:V,className:E,required:j,disabled:I,readOnly:W,value:k,defaultValue:L,onChange:$,maxLength:o,showCharacterCount:G=!1,rows:_=5,...H})=>{const U=F.useId(),t=V??U,M=k!==void 0,[Y,K]=F.useState(L),s=M?k:Y,Q=s!=null&&`${s}`.length>0,J=s?`${s}`.length:0,z=o!==void 0||G,r=N==="error"?"error":N==="success"?"success":void 0,A=S?`${t}-help`:void 0,B=C&&r?`${t}-status`:void 0,P=z?`${t}-counter`:void 0,X=[A,B,P].filter(Boolean).join(" ")||void 0,Z=`form-control${E?` ${E}`:""}`,ee=R=>{M||K(R.target.value),$?.(R)},ae=M?{value:k}:{defaultValue:L};return e.jsxs("div",{className:`textarea-field${D?` ${D}`:""}`,children:[q&&e.jsxs("div",{className:"textarea-label-row",children:[e.jsx("label",{className:"textarea-label",htmlFor:t,children:q}),j&&e.jsx("span",{className:"textarea-required",children:O})]}),S&&e.jsx("div",{className:"textarea-helper",id:A,children:S}),e.jsx("textarea",{id:t,className:Z,rows:_,required:j,disabled:I,readOnly:W,maxLength:o,"aria-required":j||void 0,"aria-invalid":r==="error"?"true":void 0,"aria-describedby":X,"data-status":r,"data-filled":Q?"true":void 0,"data-readonly":W?"true":void 0,"data-disabled":I?"true":void 0,onChange:ee,...ae,...H}),z&&e.jsxs("div",{className:"textarea-counter",id:P,"aria-live":"polite",children:[J,o!==void 0&&`/${o}`]}),r&&C&&e.jsxs("div",{id:B,className:`textarea-message ${r==="error"?"textarea-message--error":"textarea-message--success"}`,role:r==="error"?"alert":"status","aria-live":r==="error"?"assertive":"polite",children:[e.jsx("span",{className:"textarea-message__icon","aria-hidden":"true",children:e.jsx(re,{icon:r==="error"?"fa-light fa-circle-xmark":"fa-light fa-check",color:"currentColor",size:"16px"})}),e.jsx("span",{children:C})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Textarea",props:{label:{required:!1,tsType:{name:"string"},description:"Textarea label shown above the field."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown under the label."},requiredIndicator:{required:!1,tsType:{name:"string"},description:`Text shown when the field is required.\r
@default "(Required)"`,defaultValue:{value:'"(Required)"',computed:!1}},validationState:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"Validation state for the field."},validationMessage:{required:!1,tsType:{name:"string"},description:"Validation message shown below the field."},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control."},maxLength:{required:!1,tsType:{name:"number"},description:"Maximum character count. Shows a character counter when set."},showCharacterCount:{required:!1,tsType:{name:"boolean"},description:"Show character counter even when maxLength is not set.",defaultValue:{value:"false",computed:!1}},rows:{required:!1,tsType:{name:"number"},description:`Number of visible text rows.\r
@default 5`,defaultValue:{value:"5",computed:!1}}},composes:["Omit"]};const ne={title:"Components/Textarea",component:a,parameters:{layout:"padded",docs:{description:{component:"Textarea enables users to enter multiple lines of text into a larger, resizable input field. Use it for comments, messages, feedback, or any content longer than a single line. For short text like emails or names, use the Input component instead."}}},tags:["autodocs"],argTypes:{label:{control:"text"},helperText:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},readOnly:{control:"boolean"},disabled:{control:"boolean"},rows:{control:"number"},maxLength:{control:"number"},showCharacterCount:{control:"boolean"},validationState:{control:"select",options:["none","success","error"],mapping:{none:void 0,success:"success",error:"error"}},validationMessage:{control:"text"}}},n={args:{label:"Comments",helperText:"Share your thoughts with us",placeholder:"Enter your comments here"}},i={args:{label:"Application Details",helperText:"Explain why you are applying for this service",required:!0,placeholder:"Please provide detailed information"}},l={args:{label:"Feedback",helperText:"Thank you for your input",value:"Thank you for creating this service. It has made a significant difference in how we access government resources.",onChange:()=>{}}},c={render:()=>e.jsx(a,{label:"Message",helperText:"Type your message below",placeholder:"Start typing...","data-active":"true"})},d={args:{label:"Survey Response",helperText:"Your feedback helps us improve",value:"The new website design is much easier to navigate. I can find the services I need quickly.",onChange:()=>{},validationState:"success",validationMessage:"Thank you for your feedback"}},p={args:{label:"Description",helperText:"Minimum 20 characters required",value:"Too short",onChange:()=>{},validationState:"error",validationMessage:"Please provide at least 20 characters"}},u={args:{label:"System Notice",helperText:"This field cannot be edited",value:"This textarea is disabled and cannot be modified. Disabled textareas are useful for displaying information that should not be changed.",disabled:!0}},h={args:{label:"Terms and Conditions",helperText:"Please review carefully",value:"By using this service, you agree to our terms and conditions. This is a read-only field that displays important information but cannot be modified by the user.",readOnly:!0,rows:4}},m={args:{label:"Quick Feedback",helperText:"Brief responses are appreciated",placeholder:"What did you think of this service?",showCharacterCount:!0}},x={args:{label:"Tweet-style Message",helperText:"Keep it concise",placeholder:"Maximum 280 characters",maxLength:280}},g={args:{label:"Detailed Description",helperText:"Provide as much detail as necessary for your grant application",value:"This textarea demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. Users can resize the textarea vertically by dragging the handle in the bottom right corner, allowing them to adjust the viewing area to their preferred size. The component supports all standard textarea functionality including scrolling for content that exceeds the visible area. This makes it ideal for applications requiring extensive user input such as grant applications, detailed feedback forms, or comprehensive survey responses.",onChange:()=>{},rows:8}},f={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(a,{label:"Small (3 rows)",rows:3,placeholder:"Compact textarea"}),e.jsx(a,{label:"Default (5 rows)",rows:5,placeholder:"Standard textarea"}),e.jsx(a,{label:"Large (10 rows)",rows:10,placeholder:"Extended textarea"})]})},v={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(a,{label:"No Counter",helperText:"Character count is not displayed",placeholder:"Type anything..."}),e.jsx(a,{label:"With Counter Only",helperText:"Shows current character count",showCharacterCount:!0,placeholder:"Type to see the count"}),e.jsx(a,{label:"With Maximum Length",helperText:"Enforces a 100 character limit",maxLength:100,placeholder:"Limited to 100 characters"})]})},b={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(a,{label:"Valid Input",value:"This input meets all requirements and has been validated successfully.",validationState:"success",validationMessage:"Submission accepted",onChange:()=>{}}),e.jsx(a,{label:"Invalid Input",value:"Error",validationState:"error",validationMessage:"Response must be at least 20 characters",onChange:()=>{}})]})},y={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",style:{maxWidth:"600px",margin:"0 auto"},children:[e.jsx("h3",{style:{marginBottom:"16px"},children:"Service Feedback Form"}),e.jsx(a,{label:"What worked well?",helperText:"Tell us about your positive experiences",placeholder:"Describe what you found helpful or useful",rows:4}),e.jsx(a,{label:"What could be improved?",helperText:"Your suggestions help us enhance our services",placeholder:"Share your ideas for improvement",rows:4}),e.jsx(a,{label:"Additional Comments",helperText:"Optional - any other feedback you'd like to share",placeholder:"Any other thoughts or suggestions",maxLength:500,rows:6})]}),parameters:{docs:{description:{story:"Example of multiple textareas used together in a feedback form. Notice how each has a clear label, helpful guidance, and appropriate sizing for the expected content length."}}}},T={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:600},children:"✅ Good - Has visible label"}),e.jsx(a,{label:"Message",helperText:"This textarea has a proper label",placeholder:"Type your message"})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:600},children:"✅ Good - Helper text provides guidance"}),e.jsx(a,{label:"Grant Application",helperText:"Explain your project goals, timeline, and expected outcomes. Minimum 50 words.",placeholder:"Describe your project in detail",rows:6})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:600},children:"✅ Good - Error message is clear and actionable"}),e.jsx(a,{label:"Description",helperText:"Provide a brief description",value:"Too short",validationState:"error",validationMessage:"Description must be at least 20 characters. Please add more detail.",onChange:()=>{}})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"8px",fontSize:"14px",fontWeight:600},children:"✅ Good - Character counter helps user stay within limit"}),e.jsx(a,{label:"Summary",helperText:"Brief summary for publication",maxLength:150,placeholder:"Maximum 150 characters"})]})]}),parameters:{layout:"padded",docs:{description:{story:"Examples demonstrating accessible textarea usage. All textareas have visible labels, helpful guidance text, clear error messages, and proper ARIA attributes."}}}},w={args:{label:"Label",helperText:"Optional helper text",placeholder:"Placeholder text",rows:5}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Comments",
    helperText: "Share your thoughts with us",
    placeholder: "Enter your comments here"
  }
}`,...n.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Application Details",
    helperText: "Explain why you are applying for this service",
    required: true,
    placeholder: "Please provide detailed information"
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Feedback",
    helperText: "Thank you for your input",
    value: "Thank you for creating this service. It has made a significant difference in how we access government resources.",
    onChange: () => undefined
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Textarea label="Message" helperText="Type your message below" placeholder="Start typing..." data-active="true" />
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Survey Response",
    helperText: "Your feedback helps us improve",
    value: "The new website design is much easier to navigate. I can find the services I need quickly.",
    onChange: () => undefined,
    validationState: "success",
    validationMessage: "Thank you for your feedback"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Description",
    helperText: "Minimum 20 characters required",
    value: "Too short",
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "Please provide at least 20 characters"
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "System Notice",
    helperText: "This field cannot be edited",
    value: "This textarea is disabled and cannot be modified. Disabled textareas are useful for displaying information that should not be changed.",
    disabled: true
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Terms and Conditions",
    helperText: "Please review carefully",
    value: "By using this service, you agree to our terms and conditions. This is a read-only field that displays important information but cannot be modified by the user.",
    readOnly: true,
    rows: 4
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Quick Feedback",
    helperText: "Brief responses are appreciated",
    placeholder: "What did you think of this service?",
    showCharacterCount: true
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Tweet-style Message",
    helperText: "Keep it concise",
    placeholder: "Maximum 280 characters",
    maxLength: 280
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Detailed Description",
    helperText: "Provide as much detail as necessary for your grant application",
    value: "This textarea demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. Users can resize the textarea vertically by dragging the handle in the bottom right corner, allowing them to adjust the viewing area to their preferred size. The component supports all standard textarea functionality including scrolling for content that exceeds the visible area. This makes it ideal for applications requiring extensive user input such as grant applications, detailed feedback forms, or comprehensive survey responses.",
    onChange: () => undefined,
    rows: 8
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-3">\r
      <Textarea label="Small (3 rows)" rows={3} placeholder="Compact textarea" />\r
      <Textarea label="Default (5 rows)" rows={5} placeholder="Standard textarea" />\r
      <Textarea label="Large (10 rows)" rows={10} placeholder="Extended textarea" />\r
    </div>
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-3">\r
      <Textarea label="No Counter" helperText="Character count is not displayed" placeholder="Type anything..." />\r
      <Textarea label="With Counter Only" helperText="Shows current character count" showCharacterCount placeholder="Type to see the count" />\r
      <Textarea label="With Maximum Length" helperText="Enforces a 100 character limit" maxLength={100} placeholder="Limited to 100 characters" />\r
    </div>
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-3">\r
      <Textarea label="Valid Input" value="This input meets all requirements and has been validated successfully." validationState="success" validationMessage="Submission accepted" onChange={() => undefined} />\r
      <Textarea label="Invalid Input" value="Error" validationState="error" validationMessage="Response must be at least 20 characters" onChange={() => undefined} />\r
    </div>
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-3" style={{
    maxWidth: "600px",
    margin: "0 auto"
  }}>\r
      <h3 style={{
      marginBottom: "16px"
    }}>Service Feedback Form</h3>\r
\r
      <Textarea label="What worked well?" helperText="Tell us about your positive experiences" placeholder="Describe what you found helpful or useful" rows={4} />\r
\r
      <Textarea label="What could be improved?" helperText="Your suggestions help us enhance our services" placeholder="Share your ideas for improvement" rows={4} />\r
\r
      <Textarea label="Additional Comments" helperText="Optional - any other feedback you'd like to share" placeholder="Any other thoughts or suggestions" maxLength={500} rows={6} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example of multiple textareas used together in a feedback form. Notice how each has a clear label, helpful guidance, and appropriate sizing for the expected content length."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-3">\r
      <div>\r
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: 600
      }}>\r
          ✅ Good - Has visible label\r
        </h4>\r
        <Textarea label="Message" helperText="This textarea has a proper label" placeholder="Type your message" />\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: 600
      }}>\r
          ✅ Good - Helper text provides guidance\r
        </h4>\r
        <Textarea label="Grant Application" helperText="Explain your project goals, timeline, and expected outcomes. Minimum 50 words." placeholder="Describe your project in detail" rows={6} />\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: 600
      }}>\r
          ✅ Good - Error message is clear and actionable\r
        </h4>\r
        <Textarea label="Description" helperText="Provide a brief description" value="Too short" validationState="error" validationMessage="Description must be at least 20 characters. Please add more detail." onChange={() => undefined} />\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: "8px",
        fontSize: "14px",
        fontWeight: 600
      }}>\r
          ✅ Good - Character counter helps user stay within limit\r
        </h4>\r
        <Textarea label="Summary" helperText="Brief summary for publication" maxLength={150} placeholder="Maximum 150 characters" />\r
      </div>\r
    </div>,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Examples demonstrating accessible textarea usage. All textareas have visible labels, helpful guidance text, clear error messages, and proper ARIA attributes."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Label",
    helperText: "Optional helper text",
    placeholder: "Placeholder text",
    rows: 5
  }
}`,...w.parameters?.docs?.source}}};const ie=["Default","Required","Filled","Active","Success","Error","Disabled","ReadOnly","WithCharacterCount","WithMaxLength","LongContent","CustomRows","CharacterCountComparison","ValidationStates","FormExample","AccessibilityDemo","Playground"];export{T as AccessibilityDemo,c as Active,v as CharacterCountComparison,f as CustomRows,n as Default,u as Disabled,p as Error,l as Filled,y as FormExample,g as LongContent,w as Playground,h as ReadOnly,i as Required,d as Success,b as ValidationStates,m as WithCharacterCount,x as WithMaxLength,ie as __namedExportsOrder,ne as default};
