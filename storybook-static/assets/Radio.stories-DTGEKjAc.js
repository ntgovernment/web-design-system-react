import{r as O,j as e,R as c}from"./iframe-Cgj6QQFv.js";import{I as K}from"./Icon-D6RIkSta.js";import"./preload-helper-DhH6u7hw.js";const a=({label:m,validationState:r,validationMessage:s,wrapperClassName:l,id:i,className:o,disabled:u,name:h,...n})=>{const Y=O.useId(),v=i??Y,d=r==="error"?"error":r==="success"?"success":void 0,b=s&&d?`${v}-status`:void 0,p=b||void 0;return e.jsxs("div",{className:`radio-wrapper${l?` ${l}`:""}`,children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{id:v,type:"radio",name:h,className:`form-check-input${o?` ${o}`:""}`,disabled:u,"aria-invalid":d==="error"?"true":void 0,"aria-describedby":p,"data-status":d,...n}),m&&e.jsx("label",{className:"form-check-label",htmlFor:v,children:m})]}),d&&s&&e.jsxs("div",{id:b,className:`radio-message ${d==="error"?"radio-message--error":"radio-message--success"}`,role:d==="error"?"alert":"status","aria-live":d==="error"?"assertive":"polite",children:[e.jsx(K,{icon:d==="error"?"fa-light fa-circle-exclamation":"fa-light fa-circle-check",className:"me-2",ariaHidden:!0}),s]})]})},t=({label:m,helperText:r,requiredIndicator:s="(Required)",required:l=!1,validationState:i,validationMessage:o,children:u,wrapperClassName:h,id:n,name:Y})=>{const v=O.useId(),d=n??v,b=Y??`radio-group-${d}`,p=i==="error"?"error":i==="success"?"success":void 0,$=r?`${d}-help`:void 0,B=o&&p?`${d}-status`:void 0,_=[$,B].filter(Boolean).join(" ")||void 0,z=c.Children.map(u,y=>c.isValidElement(y)&&y.type===a?c.cloneElement(y,{name:b}):y);return e.jsxs("fieldset",{id:d,className:`radio-group${h?` ${h}`:""}`,"aria-describedby":_,"aria-invalid":p==="error"?"true":void 0,"aria-required":l?"true":void 0,"data-status":p,children:[m&&e.jsxs("legend",{className:"radio-group-legend",children:[e.jsxs("div",{className:"radio-group-label-row",children:[e.jsx("span",{className:"radio-group-label",children:m}),l&&e.jsx("span",{className:"radio-group-required",children:s})]}),r&&e.jsx("div",{className:"radio-group-helper",id:$,children:r})]}),e.jsx("div",{className:"radio-group-items",children:z}),p&&o&&e.jsxs("div",{id:B,className:`radio-group-message ${p==="error"?"radio-group-message--error":"radio-group-message--success"}`,role:p==="error"?"alert":"status","aria-live":p==="error"?"assertive":"polite",children:[e.jsx(K,{icon:p==="error"?"fa-light fa-circle-exclamation":"fa-light fa-circle-check",className:"me-2",ariaHidden:!0}),o]})]})};a.__docgenInfo={description:"Radio button component for selecting one option from a list",methods:[],displayName:"Radio",props:{label:{required:!1,tsType:{name:"string"},description:"Radio button label text"},validationState:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"Validation state for the radio button"},validationMessage:{required:!1,tsType:{name:"string"},description:"Validation message shown below the radio button"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control"},name:{required:!1,tsType:{name:"string"},description:`Name attribute to group radio buttons together\r
Auto-provided by RadioGroup component when used in a group`}},composes:["Omit"]};t.__docgenInfo={description:"RadioGroup component for grouping related radio buttons",methods:[],displayName:"RadioGroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label shown above the radio buttons"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown under the group label"},requiredIndicator:{required:!1,tsType:{name:"string"},description:`Text shown when the group is required\r
@default "(Required)"`,defaultValue:{value:'"(Required)"',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the group is required",defaultValue:{value:"false",computed:!1}},validationState:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"Validation state for the group"},validationMessage:{required:!1,tsType:{name:"string"},description:"Validation message shown below the group"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Radio button elements to render in the group"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control"},id:{required:!1,tsType:{name:"string"},description:"Optional ID for the group fieldset"},name:{required:!1,tsType:{name:"string"},description:"Name attribute for all radio buttons in the group"}}};const X={title:"Components/Radio",component:a,parameters:{layout:"padded",docs:{description:{component:"A round button for forms or surveys that allows a user to select only one option from a list. Radio buttons can only be used in a group of two or more. Use this component if the user can only select one mutually exclusive option from a list of choices. If you need to allow a user to select more than one option, use the checkbox component instead."}}},tags:["autodocs"],argTypes:{label:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},name:{control:"text"},value:{control:"text"},validationState:{control:"select",options:["none","success","error"],mapping:{none:void 0,success:"success",error:"error"}},validationMessage:{control:"text"}}},x={args:{label:"Standard delivery",name:"delivery-method",value:"standard"}},g={args:{label:"Email notifications",name:"notification-preference",value:"email",defaultChecked:!0}},f={args:{label:"This option is currently unavailable",name:"unavailable-option",value:"unavailable",disabled:!0}},R={args:{label:"Default option (cannot be changed)",name:"locked-option",value:"locked",disabled:!0,defaultChecked:!0}},j={render:()=>e.jsxs(t,{label:"Preferred Contact Method",helperText:"Select only one option",name:"contact-method",children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"Phone",value:"phone"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Mail",value:"mail"})]})},S={render:()=>e.jsxs(t,{label:"Application Type",helperText:"Please select the type of application",required:!0,name:"app-type",children:[e.jsx(a,{label:"New application",value:"new"}),e.jsx(a,{label:"Renewal application",value:"renewal"}),e.jsx(a,{label:"Amendment to existing application",value:"amendment"})]})},k={render:()=>e.jsxs(t,{label:"Email Frequency",helperText:"How often would you like to receive updates?",name:"frequency",children:[e.jsx(a,{label:"Daily digest",value:"daily"}),e.jsx(a,{label:"Weekly summary",value:"weekly",defaultChecked:!0}),e.jsx(a,{label:"Monthly newsletter",value:"monthly"})]})},T={render:()=>e.jsxs(t,{label:"Payment Method",helperText:"Select your preferred payment method",required:!0,validationState:"error",validationMessage:"Please select a payment method to continue with your order",name:"payment",children:[e.jsx(a,{label:"Credit card",value:"card"}),e.jsx(a,{label:"Direct debit",value:"debit"}),e.jsx(a,{label:"PayPal",value:"paypal"}),e.jsx(a,{label:"Bank transfer",value:"transfer"})]})},w={render:()=>e.jsxs(t,{label:"Delivery Method",validationState:"success",validationMessage:"Delivery preference saved successfully",name:"delivery",children:[e.jsx(a,{label:"Standard post (7-10 business days)",value:"standard"}),e.jsx(a,{label:"Express post (2-3 business days)",value:"express",defaultChecked:!0}),e.jsx(a,{label:"Email delivery (immediate)",value:"email"}),e.jsx(a,{label:"Pick up in person",value:"pickup"})]})},N={render:()=>e.jsxs(t,{label:"Service Tier",helperText:"Some options require additional permissions",name:"tier",children:[e.jsx(a,{label:"Basic (included with your account)",value:"basic"}),e.jsx(a,{label:"Standard (upgrade available)",value:"standard"}),e.jsx(a,{label:"Premium (contact support)",value:"premium",disabled:!0,defaultChecked:!0}),e.jsx(a,{label:"Enterprise (not available)",value:"enterprise",disabled:!0})]})},C={render:()=>e.jsxs(t,{label:"Do you live in the Northern Territory?",helperText:"Select only one option",required:!0,name:"nt-resident",children:[e.jsx(a,{label:"Yes, I live in the Northern Territory",value:"yes"}),e.jsx(a,{label:"No, I do not live in the Northern Territory",value:"no"})]})},G={render:()=>e.jsxs(t,{label:"Have you previously applied for this service?",helperText:"This helps us process your application faster",name:"previous-application",children:[e.jsx(a,{label:"Yes, I have previously applied for this service",value:"yes"}),e.jsx(a,{label:"No, I have not previously applied for this service",value:"no"}),e.jsx(a,{label:"I don't know",value:"unknown"})]})},P={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(t,{label:"License Application Type",helperText:"Select the type of license you wish to apply for",required:!0,name:"license-type",children:[e.jsx(a,{label:"Driver's license - New application",value:"dl-new"}),e.jsx(a,{label:"Driver's license - Renewal",value:"dl-renewal",defaultChecked:!0}),e.jsx(a,{label:"Driver's license - Replacement",value:"dl-replace"}),e.jsx(a,{label:"Working with children check",value:"wwcc"}),e.jsx(a,{label:"Food handling license",value:"food"}),e.jsx(a,{label:"Liquor license",value:"liquor"})]}),e.jsxs(t,{label:"Processing Priority",helperText:"Select your preferred processing time",name:"priority",children:[e.jsx(a,{label:"Standard (4-6 weeks, no additional fee)",value:"standard",defaultChecked:!0}),e.jsx(a,{label:"Express (1-2 weeks, $50 additional fee)",value:"express"}),e.jsx(a,{label:"Urgent (3-5 days, $100 additional fee)",value:"urgent"})]})]})},q={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(t,{label:"How satisfied are you with our online services?",helperText:"Your feedback helps us improve",required:!0,name:"satisfaction",children:[e.jsx(a,{label:"Very satisfied",value:"very-satisfied"}),e.jsx(a,{label:"Satisfied",value:"satisfied"}),e.jsx(a,{label:"Neutral",value:"neutral"}),e.jsx(a,{label:"Dissatisfied",value:"dissatisfied"}),e.jsx(a,{label:"Very dissatisfied",value:"very-dissatisfied"}),e.jsx(a,{label:"I don't know",value:"unknown"})]}),e.jsxs(t,{label:"How did you hear about this service?",helperText:"Please select one option",required:!0,name:"referral",children:[e.jsx(a,{label:"Internet search engine",value:"search"}),e.jsx(a,{label:"Social media",value:"social"}),e.jsx(a,{label:"Friend or colleague recommendation",value:"referral"}),e.jsx(a,{label:"Government advertisement",value:"advertisement"}),e.jsx(a,{label:"Community event",value:"event"}),e.jsx(a,{label:"Other",value:"other"})]})]})},D={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(t,{label:"Email Notification Frequency",helperText:"How often would you like to receive email updates?",name:"email-freq",children:[e.jsx(a,{label:"Immediately (as events occur)",value:"immediate"}),e.jsx(a,{label:"Daily digest (once per day)",value:"daily"}),e.jsx(a,{label:"Weekly summary (once per week)",value:"weekly",defaultChecked:!0}),e.jsx(a,{label:"Monthly newsletter (once per month)",value:"monthly"}),e.jsx(a,{label:"Never (disable all emails)",value:"never"})]}),e.jsxs(t,{label:"Language Preference",helperText:"Select your preferred language for communications",name:"language",children:[e.jsx(a,{label:"English",value:"en",defaultChecked:!0}),e.jsx(a,{label:"简体中文 (Simplified Chinese)",value:"zh"}),e.jsx(a,{label:"Tiếng Việt (Vietnamese)",value:"vi"}),e.jsx(a,{label:"العربية (Arabic)",value:"ar"})]})]})},E={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(t,{label:"Payment Method",helperText:"Choose your preferred payment method",required:!0,name:"payment",children:[e.jsx(a,{label:"Credit card (Visa, Mastercard, Amex)",value:"card"}),e.jsx(a,{label:"Direct debit from bank account",value:"debit"}),e.jsx(a,{label:"PayPal",value:"paypal"}),e.jsx(a,{label:"Bank transfer",value:"transfer"}),e.jsx(a,{label:"Pay in person at service center",value:"in-person"})]}),e.jsxs(t,{label:"Document Delivery Method",helperText:"Select how you would like to receive your documents",required:!0,name:"delivery",children:[e.jsx(a,{label:"Standard post to registered address (7-10 business days)",value:"standard"}),e.jsx(a,{label:"Express post (2-3 business days, $15 additional fee)",value:"express"}),e.jsx(a,{label:"Email as PDF (immediate, free)",value:"email"}),e.jsx(a,{label:"Pick up in person at Darwin office",value:"pickup-darwin"}),e.jsx(a,{label:"Pick up in person at Alice Springs office",value:"pickup-alice"})]})]})},M={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(t,{label:"Step 1: Select Business Type",helperText:"What type of business are you registering?",required:!0,name:"business-type",children:[e.jsx(a,{label:"Sole trader",value:"sole-trader"}),e.jsx(a,{label:"Partnership",value:"partnership"}),e.jsx(a,{label:"Company (Pty Ltd)",value:"company"}),e.jsx(a,{label:"Trust",value:"trust"}),e.jsx(a,{label:"Not-for-profit organization",value:"nfp"})]}),e.jsxs(t,{label:"Step 2: Business Location",helperText:"Where is your primary business location?",required:!0,name:"location",children:[e.jsx(a,{label:"Darwin",value:"darwin"}),e.jsx(a,{label:"Alice Springs",value:"alice-springs"}),e.jsx(a,{label:"Katherine",value:"katherine"}),e.jsx(a,{label:"Palmerston",value:"palmerston"}),e.jsx(a,{label:"Nhulunbuy",value:"nhulunbuy"}),e.jsx(a,{label:"Other Northern Territory location",value:"nt-other"}),e.jsx(a,{label:"Outside Northern Territory",value:"outside-nt"})]}),e.jsxs(t,{label:"Step 3: Number of Employees",helperText:"How many employees does your business have?",name:"employees",children:[e.jsx(a,{label:"Just me (sole trader)",value:"0"}),e.jsx(a,{label:"1-5 employees",value:"1-5"}),e.jsx(a,{label:"6-20 employees",value:"6-20"}),e.jsx(a,{label:"21-50 employees",value:"21-50"}),e.jsx(a,{label:"More than 50 employees",value:"50+"})]})]})},I={render:function(){const[r,s]=c.useState(""),[l,i]=c.useState(""),[o,u]=c.useState(!1),h=()=>{u(!0)};return e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(t,{label:"Title",helperText:"Please select your title",required:!0,validationState:o&&!l?"error":void 0,validationMessage:o&&!l?"Please select your title":void 0,name:"title",children:[e.jsx(a,{label:"Mr",value:"mr",checked:l==="mr",onChange:n=>i(n.target.value)}),e.jsx(a,{label:"Mrs",value:"mrs",checked:l==="mrs",onChange:n=>i(n.target.value)}),e.jsx(a,{label:"Ms",value:"ms",checked:l==="ms",onChange:n=>i(n.target.value)}),e.jsx(a,{label:"Miss",value:"miss",checked:l==="miss",onChange:n=>i(n.target.value)}),e.jsx(a,{label:"Dr",value:"dr",checked:l==="dr",onChange:n=>i(n.target.value)}),e.jsx(a,{label:"Prefer not to say",value:"undisclosed",checked:l==="undisclosed",onChange:n=>i(n.target.value)})]}),e.jsxs(t,{label:"Gender",helperText:"Please select your gender",required:!0,validationState:o&&!r?"error":void 0,validationMessage:o&&!r?"Please select your gender to continue":void 0,name:"gender",children:[e.jsx(a,{label:"Male",value:"male",checked:r==="male",onChange:n=>s(n.target.value)}),e.jsx(a,{label:"Female",value:"female",checked:r==="female",onChange:n=>s(n.target.value)}),e.jsx(a,{label:"Non-binary",value:"non-binary",checked:r==="non-binary",onChange:n=>s(n.target.value)}),e.jsx(a,{label:"Prefer not to say",value:"undisclosed",checked:r==="undisclosed",onChange:n=>s(n.target.value)})]}),e.jsxs("div",{className:"mt-3 d-flex gap-2",children:[e.jsx("button",{className:"btn btn-primary",onClick:h,children:"Validate Form"}),e.jsx("button",{className:"btn btn-secondary",onClick:()=>{s(""),i(""),u(!1)},children:"Reset Form"})]}),o&&e.jsxs("p",{className:"text-muted small mt-2",children:["Form validation triggered."," ",r&&l?"All fields valid!":"Please fill in all required fields."]})]})}},V={render:function(){const[r,s]=c.useState("email");return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsxs(t,{label:"Notification Preference",helperText:"Choose how you'd like to be notified",name:"notification",children:[e.jsx(a,{label:"Email notifications",value:"email",checked:r==="email",onChange:l=>s(l.target.value)}),e.jsx(a,{label:"SMS notifications",value:"sms",checked:r==="sms",onChange:l=>s(l.target.value)}),e.jsx(a,{label:"Push notifications",value:"push",checked:r==="push",onChange:l=>s(l.target.value)}),e.jsx(a,{label:"No notifications",value:"none",checked:r==="none",onChange:l=>s(l.target.value)})]}),e.jsxs("p",{className:"text-muted small",children:["Selected option: ",e.jsx("strong",{children:r})]})]})}},W={render:function(){const[r,s]=c.useState(""),[l,i]=c.useState(!1),o=u=>{s(u),i(!0)};return e.jsx("div",{className:"d-flex flex-column gap-3",children:e.jsxs(t,{label:"Terms and Conditions",helperText:"Please indicate your acceptance",required:!0,validationState:l&&r==="accept"?"success":l&&!r?"error":void 0,validationMessage:l&&r==="accept"?"Thank you for accepting the terms":l&&!r?"You must accept the terms to continue":void 0,name:"terms",children:[e.jsx(a,{label:"I accept the terms and conditions",value:"accept",checked:r==="accept",onChange:u=>o(u.target.value)}),e.jsx(a,{label:"I do not accept the terms and conditions",value:"decline",checked:r==="decline",onChange:u=>o(u.target.value)})]})})}},A={render:function(){const[r,s]=c.useState(""),[l,i]=c.useState("");return e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(t,{label:"Do you currently hold a driver's license?",helperText:"Select only one option",required:!0,name:"has-license",children:[e.jsx(a,{label:"Yes, I currently hold a driver's license",value:"yes",checked:r==="yes",onChange:o=>s(o.target.value)}),e.jsx(a,{label:"No, I do not currently hold a driver's license",value:"no",checked:r==="no",onChange:o=>{s(o.target.value),i("")}})]}),r==="yes"&&e.jsxs("div",{className:"ps-4 border-start border-3",children:[e.jsxs("label",{htmlFor:"license-number",className:"form-label",children:["License Number ",e.jsx("span",{className:"text-danger",children:"(Required)"})]}),e.jsx("input",{type:"text",className:"form-control",id:"license-number",placeholder:"Enter your license number",value:l,onChange:o=>i(o.target.value)}),e.jsx("div",{className:"form-text",children:"Enter your current driver's license number"})]}),r==="no"&&e.jsx("div",{className:"alert alert-info",children:"You will need to complete a learner's permit application before applying for a driver's license."})]})}},F={render:()=>e.jsx("div",{"data-theme":"ntg",children:e.jsxs(t,{label:"Select Your Region",helperText:"Choose the NT region closest to you",name:"region-ntg",children:[e.jsx(a,{label:"Darwin and Palmerston",value:"darwin",defaultChecked:!0}),e.jsx(a,{label:"Alice Springs",value:"alice"}),e.jsx(a,{label:"Katherine",value:"katherine"}),e.jsx(a,{label:"Nhulunbuy",value:"nhulunbuy"}),e.jsx(a,{label:"Tennant Creek",value:"tennant"})]})})},L={render:()=>e.jsx("div",{"data-theme":"central",children:e.jsxs(t,{label:"Select Your Department",helperText:"Choose your primary work department",name:"department-central",children:[e.jsx(a,{label:"Human Resources",value:"hr",defaultChecked:!0}),e.jsx(a,{label:"Information Technology",value:"it"}),e.jsx(a,{label:"Finance",value:"finance"}),e.jsx(a,{label:"Operations",value:"operations"}),e.jsx(a,{label:"Communications",value:"comms"})]})})},H={args:{label:"Radio button label",name:"playground-radio",value:"option"}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Standard delivery",
    name: "delivery-method",
    value: "standard"
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Email notifications",
    name: "notification-preference",
    value: "email",
    defaultChecked: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "This option is currently unavailable",
    name: "unavailable-option",
    value: "unavailable",
    disabled: true
  }
}`,...f.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Default option (cannot be changed)",
    name: "locked-option",
    value: "locked",
    disabled: true,
    defaultChecked: true
  }
}`,...R.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Preferred Contact Method" helperText="Select only one option" name="contact-method">\r
      <Radio label="Email" value="email" />\r
      <Radio label="Phone" value="phone" />\r
      <Radio label="SMS" value="sms" />\r
      <Radio label="Mail" value="mail" />\r
    </RadioGroup>
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Application Type" helperText="Please select the type of application" required name="app-type">\r
      <Radio label="New application" value="new" />\r
      <Radio label="Renewal application" value="renewal" />\r
      <Radio label="Amendment to existing application" value="amendment" />\r
    </RadioGroup>
}`,...S.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Email Frequency" helperText="How often would you like to receive updates?" name="frequency">\r
      <Radio label="Daily digest" value="daily" />\r
      <Radio label="Weekly summary" value="weekly" defaultChecked />\r
      <Radio label="Monthly newsletter" value="monthly" />\r
    </RadioGroup>
}`,...k.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Payment Method" helperText="Select your preferred payment method" required validationState="error" validationMessage="Please select a payment method to continue with your order" name="payment">\r
      <Radio label="Credit card" value="card" />\r
      <Radio label="Direct debit" value="debit" />\r
      <Radio label="PayPal" value="paypal" />\r
      <Radio label="Bank transfer" value="transfer" />\r
    </RadioGroup>
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Delivery Method" validationState="success" validationMessage="Delivery preference saved successfully" name="delivery">\r
      <Radio label="Standard post (7-10 business days)" value="standard" />\r
      <Radio label="Express post (2-3 business days)" value="express" defaultChecked />\r
      <Radio label="Email delivery (immediate)" value="email" />\r
      <Radio label="Pick up in person" value="pickup" />\r
    </RadioGroup>
}`,...w.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Service Tier" helperText="Some options require additional permissions" name="tier">\r
      <Radio label="Basic (included with your account)" value="basic" />\r
      <Radio label="Standard (upgrade available)" value="standard" />\r
      <Radio label="Premium (contact support)" value="premium" disabled defaultChecked />\r
      <Radio label="Enterprise (not available)" value="enterprise" disabled />\r
    </RadioGroup>
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Do you live in the Northern Territory?" helperText="Select only one option" required name="nt-resident">\r
      <Radio label="Yes, I live in the Northern Territory" value="yes" />\r
      <Radio label="No, I do not live in the Northern Territory" value="no" />\r
    </RadioGroup>
}`,...C.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <RadioGroup label="Have you previously applied for this service?" helperText="This helps us process your application faster" name="previous-application">\r
      <Radio label="Yes, I have previously applied for this service" value="yes" />\r
      <Radio label="No, I have not previously applied for this service" value="no" />\r
      <Radio label="I don't know" value="unknown" />\r
    </RadioGroup>
}`,...G.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <RadioGroup label="License Application Type" helperText="Select the type of license you wish to apply for" required name="license-type">\r
        <Radio label="Driver's license - New application" value="dl-new" />\r
        <Radio label="Driver's license - Renewal" value="dl-renewal" defaultChecked />\r
        <Radio label="Driver's license - Replacement" value="dl-replace" />\r
        <Radio label="Working with children check" value="wwcc" />\r
        <Radio label="Food handling license" value="food" />\r
        <Radio label="Liquor license" value="liquor" />\r
      </RadioGroup>\r
\r
      <RadioGroup label="Processing Priority" helperText="Select your preferred processing time" name="priority">\r
        <Radio label="Standard (4-6 weeks, no additional fee)" value="standard" defaultChecked />\r
        <Radio label="Express (1-2 weeks, $50 additional fee)" value="express" />\r
        <Radio label="Urgent (3-5 days, $100 additional fee)" value="urgent" />\r
      </RadioGroup>\r
    </div>
}`,...P.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <RadioGroup label="How satisfied are you with our online services?" helperText="Your feedback helps us improve" required name="satisfaction">\r
        <Radio label="Very satisfied" value="very-satisfied" />\r
        <Radio label="Satisfied" value="satisfied" />\r
        <Radio label="Neutral" value="neutral" />\r
        <Radio label="Dissatisfied" value="dissatisfied" />\r
        <Radio label="Very dissatisfied" value="very-dissatisfied" />\r
        <Radio label="I don't know" value="unknown" />\r
      </RadioGroup>\r
\r
      <RadioGroup label="How did you hear about this service?" helperText="Please select one option" required name="referral">\r
        <Radio label="Internet search engine" value="search" />\r
        <Radio label="Social media" value="social" />\r
        <Radio label="Friend or colleague recommendation" value="referral" />\r
        <Radio label="Government advertisement" value="advertisement" />\r
        <Radio label="Community event" value="event" />\r
        <Radio label="Other" value="other" />\r
      </RadioGroup>\r
    </div>
}`,...q.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <RadioGroup label="Email Notification Frequency" helperText="How often would you like to receive email updates?" name="email-freq">\r
        <Radio label="Immediately (as events occur)" value="immediate" />\r
        <Radio label="Daily digest (once per day)" value="daily" />\r
        <Radio label="Weekly summary (once per week)" value="weekly" defaultChecked />\r
        <Radio label="Monthly newsletter (once per month)" value="monthly" />\r
        <Radio label="Never (disable all emails)" value="never" />\r
      </RadioGroup>\r
\r
      <RadioGroup label="Language Preference" helperText="Select your preferred language for communications" name="language">\r
        <Radio label="English" value="en" defaultChecked />\r
        <Radio label="简体中文 (Simplified Chinese)" value="zh" />\r
        <Radio label="Tiếng Việt (Vietnamese)" value="vi" />\r
        <Radio label="العربية (Arabic)" value="ar" />\r
      </RadioGroup>\r
    </div>
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <RadioGroup label="Payment Method" helperText="Choose your preferred payment method" required name="payment">\r
        <Radio label="Credit card (Visa, Mastercard, Amex)" value="card" />\r
        <Radio label="Direct debit from bank account" value="debit" />\r
        <Radio label="PayPal" value="paypal" />\r
        <Radio label="Bank transfer" value="transfer" />\r
        <Radio label="Pay in person at service center" value="in-person" />\r
      </RadioGroup>\r
\r
      <RadioGroup label="Document Delivery Method" helperText="Select how you would like to receive your documents" required name="delivery">\r
        <Radio label="Standard post to registered address (7-10 business days)" value="standard" />\r
        <Radio label="Express post (2-3 business days, $15 additional fee)" value="express" />\r
        <Radio label="Email as PDF (immediate, free)" value="email" />\r
        <Radio label="Pick up in person at Darwin office" value="pickup-darwin" />\r
        <Radio label="Pick up in person at Alice Springs office" value="pickup-alice" />\r
      </RadioGroup>\r
    </div>
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <RadioGroup label="Step 1: Select Business Type" helperText="What type of business are you registering?" required name="business-type">\r
        <Radio label="Sole trader" value="sole-trader" />\r
        <Radio label="Partnership" value="partnership" />\r
        <Radio label="Company (Pty Ltd)" value="company" />\r
        <Radio label="Trust" value="trust" />\r
        <Radio label="Not-for-profit organization" value="nfp" />\r
      </RadioGroup>\r
\r
      <RadioGroup label="Step 2: Business Location" helperText="Where is your primary business location?" required name="location">\r
        <Radio label="Darwin" value="darwin" />\r
        <Radio label="Alice Springs" value="alice-springs" />\r
        <Radio label="Katherine" value="katherine" />\r
        <Radio label="Palmerston" value="palmerston" />\r
        <Radio label="Nhulunbuy" value="nhulunbuy" />\r
        <Radio label="Other Northern Territory location" value="nt-other" />\r
        <Radio label="Outside Northern Territory" value="outside-nt" />\r
      </RadioGroup>\r
\r
      <RadioGroup label="Step 3: Number of Employees" helperText="How many employees does your business have?" name="employees">\r
        <Radio label="Just me (sole trader)" value="0" />\r
        <Radio label="1-5 employees" value="1-5" />\r
        <Radio label="6-20 employees" value="6-20" />\r
        <Radio label="21-50 employees" value="21-50" />\r
        <Radio label="More than 50 employees" value="50+" />\r
      </RadioGroup>\r
    </div>
}`,...M.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function ValidationExample() {
    const [gender, setGender] = React.useState("");
    const [title, setTitle] = React.useState("");
    const [showErrors, setShowErrors] = React.useState(false);
    const handleSubmit = () => {
      setShowErrors(true);
    };
    return <div className="d-flex flex-column gap-4" style={{
      maxWidth: "600px"
    }}>\r
        <RadioGroup label="Title" helperText="Please select your title" required validationState={showErrors && !title ? "error" : undefined} validationMessage={showErrors && !title ? "Please select your title" : undefined} name="title">\r
          <Radio label="Mr" value="mr" checked={title === "mr"} onChange={e => setTitle(e.target.value)} />\r
          <Radio label="Mrs" value="mrs" checked={title === "mrs"} onChange={e => setTitle(e.target.value)} />\r
          <Radio label="Ms" value="ms" checked={title === "ms"} onChange={e => setTitle(e.target.value)} />\r
          <Radio label="Miss" value="miss" checked={title === "miss"} onChange={e => setTitle(e.target.value)} />\r
          <Radio label="Dr" value="dr" checked={title === "dr"} onChange={e => setTitle(e.target.value)} />\r
          <Radio label="Prefer not to say" value="undisclosed" checked={title === "undisclosed"} onChange={e => setTitle(e.target.value)} />\r
        </RadioGroup>\r
\r
        <RadioGroup label="Gender" helperText="Please select your gender" required validationState={showErrors && !gender ? "error" : undefined} validationMessage={showErrors && !gender ? "Please select your gender to continue" : undefined} name="gender">\r
          <Radio label="Male" value="male" checked={gender === "male"} onChange={e => setGender(e.target.value)} />\r
          <Radio label="Female" value="female" checked={gender === "female"} onChange={e => setGender(e.target.value)} />\r
          <Radio label="Non-binary" value="non-binary" checked={gender === "non-binary"} onChange={e => setGender(e.target.value)} />\r
          <Radio label="Prefer not to say" value="undisclosed" checked={gender === "undisclosed"} onChange={e => setGender(e.target.value)} />\r
        </RadioGroup>\r
\r
        <div className="mt-3 d-flex gap-2">\r
          <button className="btn btn-primary" onClick={handleSubmit}>\r
            Validate Form\r
          </button>\r
          <button className="btn btn-secondary" onClick={() => {
          setGender("");
          setTitle("");
          setShowErrors(false);
        }}>\r
            Reset Form\r
          </button>\r
        </div>\r
\r
        {showErrors && <p className="text-muted small mt-2">\r
            Form validation triggered.{" "}\r
            {gender && title ? "All fields valid!" : "Please fill in all required fields."}\r
          </p>}\r
      </div>;
  }
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [selectedValue, setSelectedValue] = React.useState("email");
    return <div className="d-flex flex-column gap-3">\r
        <RadioGroup label="Notification Preference" helperText="Choose how you'd like to be notified" name="notification">\r
          <Radio label="Email notifications" value="email" checked={selectedValue === "email"} onChange={e => setSelectedValue(e.target.value)} />\r
          <Radio label="SMS notifications" value="sms" checked={selectedValue === "sms"} onChange={e => setSelectedValue(e.target.value)} />\r
          <Radio label="Push notifications" value="push" checked={selectedValue === "push"} onChange={e => setSelectedValue(e.target.value)} />\r
          <Radio label="No notifications" value="none" checked={selectedValue === "none"} onChange={e => setSelectedValue(e.target.value)} />\r
        </RadioGroup>\r
        <p className="text-muted small">\r
          Selected option: <strong>{selectedValue}</strong>\r
        </p>\r
      </div>;
  }
}`,...V.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function DynamicValidationExample() {
    const [selection, setSelection] = React.useState("");
    const [attempted, setAttempted] = React.useState(false);
    const handleChange = (value: string) => {
      setSelection(value);
      setAttempted(true);
    };
    return <div className="d-flex flex-column gap-3">\r
        <RadioGroup label="Terms and Conditions" helperText="Please indicate your acceptance" required validationState={attempted && selection === "accept" ? "success" : attempted && !selection ? "error" : undefined} validationMessage={attempted && selection === "accept" ? "Thank you for accepting the terms" : attempted && !selection ? "You must accept the terms to continue" : undefined} name="terms">\r
          <Radio label="I accept the terms and conditions" value="accept" checked={selection === "accept"} onChange={e => handleChange(e.target.value)} />\r
          <Radio label="I do not accept the terms and conditions" value="decline" checked={selection === "decline"} onChange={e => handleChange(e.target.value)} />\r
        </RadioGroup>\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function ConditionalExample() {
    const [hasLicense, setHasLicense] = React.useState("");
    const [licenseNumber, setLicenseNumber] = React.useState("");
    return <div className="d-flex flex-column gap-4" style={{
      maxWidth: "600px"
    }}>\r
        <RadioGroup label="Do you currently hold a driver's license?" helperText="Select only one option" required name="has-license">\r
          <Radio label="Yes, I currently hold a driver's license" value="yes" checked={hasLicense === "yes"} onChange={e => setHasLicense(e.target.value)} />\r
          <Radio label="No, I do not currently hold a driver's license" value="no" checked={hasLicense === "no"} onChange={e => {
          setHasLicense(e.target.value);
          setLicenseNumber("");
        }} />\r
        </RadioGroup>\r
\r
        {hasLicense === "yes" && <div className="ps-4 border-start border-3">\r
            <label htmlFor="license-number" className="form-label">\r
              License Number <span className="text-danger">(Required)</span>\r
            </label>\r
            <input type="text" className="form-control" id="license-number" placeholder="Enter your license number" value={licenseNumber} onChange={e => setLicenseNumber(e.target.value)} />\r
            <div className="form-text">\r
              Enter your current driver's license number\r
            </div>\r
          </div>}\r
\r
        {hasLicense === "no" && <div className="alert alert-info">\r
            You will need to complete a learner's permit application before\r
            applying for a driver's license.\r
          </div>}\r
      </div>;
  }
}`,...A.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: () => <div data-theme="ntg">\r
      <RadioGroup label="Select Your Region" helperText="Choose the NT region closest to you" name="region-ntg">\r
        <Radio label="Darwin and Palmerston" value="darwin" defaultChecked />\r
        <Radio label="Alice Springs" value="alice" />\r
        <Radio label="Katherine" value="katherine" />\r
        <Radio label="Nhulunbuy" value="nhulunbuy" />\r
        <Radio label="Tennant Creek" value="tennant" />\r
      </RadioGroup>\r
    </div>
}`,...F.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: () => <div data-theme="central">\r
      <RadioGroup label="Select Your Department" helperText="Choose your primary work department" name="department-central">\r
        <Radio label="Human Resources" value="hr" defaultChecked />\r
        <Radio label="Information Technology" value="it" />\r
        <Radio label="Finance" value="finance" />\r
        <Radio label="Operations" value="operations" />\r
        <Radio label="Communications" value="comms" />\r
      </RadioGroup>\r
    </div>
}`,...L.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Radio button label",
    name: "playground-radio",
    value: "option"
  }
}`,...H.parameters?.docs?.source}}};const Z=["Default","Checked","Disabled","DisabledChecked","BasicGroup","RequiredGroup","GroupWithPreselection","GroupWithError","GroupWithSuccess","GroupWithDisabledOptions","YesNoQuestion","YesNoWithIDontKnow","ApplicationTypeSelection","SurveyQuestion","AccountSettings","PaymentAndDelivery","MultiStepForm","FormWithValidation","ControlledRadio","DynamicValidation","ConditionalFields","NTGTheme","CentralTheme","Playground"];export{D as AccountSettings,P as ApplicationTypeSelection,j as BasicGroup,L as CentralTheme,g as Checked,A as ConditionalFields,V as ControlledRadio,x as Default,f as Disabled,R as DisabledChecked,W as DynamicValidation,I as FormWithValidation,N as GroupWithDisabledOptions,T as GroupWithError,k as GroupWithPreselection,w as GroupWithSuccess,M as MultiStepForm,F as NTGTheme,E as PaymentAndDelivery,H as Playground,S as RequiredGroup,q as SurveyQuestion,C as YesNoQuestion,G as YesNoWithIDontKnow,Z as __namedExportsOrder,X as default};
