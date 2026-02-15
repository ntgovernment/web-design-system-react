import{r as F,j as e,R as D}from"./iframe-CBZa0pcK.js";import{I as V}from"./Icon-ScEOyWw2.js";import"./preload-helper-DhH6u7hw.js";const r=({label:i,validationState:a,validationMessage:t,wrapperClassName:n,id:u,className:d,disabled:s,...p})=>{const R=F.useId(),h=u??R,o=a==="error"?"error":a==="success"?"success":void 0,c=t&&o?`${h}-status`:void 0,b=c||void 0;return e.jsxs("div",{className:`checkbox-wrapper${n?` ${n}`:""}`,children:[e.jsxs("div",{className:"form-check",children:[e.jsx("input",{id:h,type:"checkbox",className:`form-check-input${d?` ${d}`:""}`,disabled:s,"aria-invalid":o==="error"?"true":void 0,"aria-describedby":b,"data-status":o,...p}),i&&e.jsx("label",{className:"form-check-label",htmlFor:h,children:i})]}),o&&t&&e.jsxs("div",{id:c,className:`checkbox-message ${o==="error"?"checkbox-message--error":"checkbox-message--success"}`,role:o==="error"?"alert":"status","aria-live":o==="error"?"assertive":"polite",children:[e.jsx(V,{icon:o==="error"?"fa-light fa-circle-exclamation":"fa-light fa-circle-check",className:"me-2",ariaHidden:!0}),t]})]})},l=({label:i,helperText:a,requiredIndicator:t="(Required)",required:n=!1,validationState:u,validationMessage:d,children:s,wrapperClassName:p,id:R})=>{const h=F.useId(),o=R??h,c=u==="error"?"error":u==="success"?"success":void 0,b=a?`${o}-help`:void 0,B=d&&c?`${o}-status`:void 0,$=[b,B].filter(Boolean).join(" ")||void 0;return e.jsxs("fieldset",{id:o,className:`checkbox-group${p?` ${p}`:""}`,"aria-describedby":$,"aria-invalid":c==="error"?"true":void 0,"data-status":c,children:[i&&e.jsxs("legend",{className:"checkbox-group-legend",children:[e.jsxs("div",{className:"checkbox-group-label-row",children:[e.jsx("span",{className:"checkbox-group-label",children:i}),n&&e.jsx("span",{className:"checkbox-group-required",children:t})]}),a&&e.jsx("div",{className:"checkbox-group-helper",id:b,children:a})]}),e.jsx("div",{className:"checkbox-group-items",children:s}),c&&d&&e.jsxs("div",{id:B,className:`checkbox-group-message ${c==="error"?"checkbox-group-message--error":"checkbox-group-message--success"}`,role:c==="error"?"alert":"status","aria-live":c==="error"?"assertive":"polite",children:[e.jsx(V,{icon:c==="error"?"fa-light fa-circle-exclamation":"fa-light fa-circle-check",className:"me-2",ariaHidden:!0}),d]})]})};r.__docgenInfo={description:"Checkbox component for selecting one or more options",methods:[],displayName:"Checkbox",props:{label:{required:!1,tsType:{name:"string"},description:"Checkbox label text"},validationState:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"Validation state for the checkbox"},validationMessage:{required:!1,tsType:{name:"string"},description:"Validation message shown below the checkbox"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control"}},composes:["Omit"]};l.__docgenInfo={description:"CheckboxGroup component for grouping related checkboxes",methods:[],displayName:"CheckboxGroup",props:{label:{required:!1,tsType:{name:"string"},description:"Group label shown above the checkboxes"},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown under the group label"},requiredIndicator:{required:!1,tsType:{name:"string"},description:`Text shown when the group is required\r
@default "(Required)"`,defaultValue:{value:'"(Required)"',computed:!1}},required:{required:!1,tsType:{name:"boolean"},description:"Whether the group is required",defaultValue:{value:"false",computed:!1}},validationState:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"Validation state for the group"},validationMessage:{required:!1,tsType:{name:"string"},description:"Validation message shown below the group"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Checkbox elements to render in the group"},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control"},id:{required:!1,tsType:{name:"string"},description:"Optional ID for the group fieldset"}}};const Y={title:"Components/Checkbox",component:r,parameters:{layout:"padded",docs:{description:{component:"Often used in forms, a checkbox allows users to select one or more options from a list. It can also be used to toggle one option on or off, for example to give consent to receive email communications from a website. Use a checkbox for a list of options where the user can select one or more of them. If the user can only select one option from a list, use the radio button component instead."}}},tags:["autodocs"],argTypes:{label:{control:"text"},disabled:{control:"boolean"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},validationState:{control:"select",options:["none","success","error"],mapping:{none:void 0,success:"success",error:"error"}},validationMessage:{control:"text"}}},m={args:{label:"Subscribe to email notifications"}},x={args:{label:"I agree to the terms and conditions",defaultChecked:!0}},k={args:{"aria-label":"Select this option"}},g={args:{label:"This option is currently unavailable",disabled:!0}},f={args:{label:"Automatically enabled for all users",disabled:!0,defaultChecked:!0}},C={args:{label:"Marketing communications",defaultChecked:!0,validationState:"success",validationMessage:"Preferences saved successfully"}},v={args:{label:"I have read and agree to the privacy policy",validationState:"error",validationMessage:"You must agree to the privacy policy to continue"}},y={render:()=>e.jsxs(l,{label:"Preferred Contact Methods",helperText:"Select all that apply",children:[e.jsx(r,{label:"Email"}),e.jsx(r,{label:"Phone"}),e.jsx(r,{label:"SMS"}),e.jsx(r,{label:"Mail"})]})},j={render:()=>e.jsxs(l,{label:"Terms and Conditions",helperText:"Please review and accept the following",required:!0,children:[e.jsx(r,{label:"I agree to the privacy policy"}),e.jsx(r,{label:"I agree to the terms of service"}),e.jsx(r,{label:"I consent to receive important service updates"})]})},S={render:()=>e.jsxs(l,{label:"Email Preferences",helperText:"Choose the types of emails you'd like to receive",children:[e.jsx(r,{label:"Weekly newsletter"}),e.jsx(r,{label:"Event notifications",defaultChecked:!0}),e.jsx(r,{label:"Policy updates",defaultChecked:!0}),e.jsx(r,{label:"Emergency alerts",defaultChecked:!0})]})},w={render:()=>e.jsxs(l,{label:"Service Selection",helperText:"Select at least one service",required:!0,validationState:"error",validationMessage:"Please select at least one service to continue",children:[e.jsx(r,{label:"Business registration"}),e.jsx(r,{label:"Tax file number application"}),e.jsx(r,{label:"Working with children check"}),e.jsx(r,{label:"Food handling license"})]})},T={render:()=>e.jsxs(l,{label:"Notification Settings",helperText:"Manage your notification preferences",validationState:"success",validationMessage:"Settings updated successfully",children:[e.jsx(r,{label:"Account updates",defaultChecked:!0}),e.jsx(r,{label:"Security alerts",defaultChecked:!0}),e.jsx(r,{label:"Newsletter"})]})},G={render:()=>e.jsxs(l,{label:"Available Features",helperText:"Some features require additional permissions",children:[e.jsx(r,{label:"Basic access",defaultChecked:!0,disabled:!0}),e.jsx(r,{label:"Advanced reporting"}),e.jsx(r,{label:"Export data"}),e.jsx(r,{label:"Admin privileges",disabled:!0})]})},I={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(l,{label:"Required Services",helperText:"Select all services you wish to apply for",required:!0,children:[e.jsx(r,{label:"Business registration"}),e.jsx(r,{label:"Tax file number"}),e.jsx(r,{label:"Working with children check"}),e.jsx(r,{label:"Food handling license"})]}),e.jsxs(l,{label:"Optional Services",helperText:"Additional services available at no extra cost",children:[e.jsx(r,{label:"Business advisory consultation"}),e.jsx(r,{label:"Marketing resources"}),e.jsx(r,{label:"Networking events access"})]}),e.jsx(r,{label:"I consent to the collection and use of my personal information as outlined in the privacy policy",required:!0})]})},N={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(l,{label:"Email Subscriptions",helperText:"Choose the topics you're interested in",children:[e.jsx(r,{label:"Health services updates"}),e.jsx(r,{label:"Education programs"}),e.jsx(r,{label:"Community events"}),e.jsx(r,{label:"Infrastructure projects"}),e.jsx(r,{label:"Business support services"})]}),e.jsxs(l,{label:"Frequency",helperText:"How often would you like to receive emails?",required:!0,children:[e.jsx(r,{label:"Daily digest"}),e.jsx(r,{label:"Weekly summary",defaultChecked:!0}),e.jsx(r,{label:"Monthly newsletter"})]})]})},q={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(l,{label:"Security Settings",helperText:"Manage your account security preferences",children:[e.jsx(r,{label:"Enable two-factor authentication",defaultChecked:!0}),e.jsx(r,{label:"Require password on sensitive actions",defaultChecked:!0}),e.jsx(r,{label:"Remember this device for 30 days"}),e.jsx(r,{label:"Send security alerts via email",defaultChecked:!0})]}),e.jsxs(l,{label:"Privacy Settings",helperText:"Control how your information is shared",children:[e.jsx(r,{label:"Make my profile public"}),e.jsx(r,{label:"Allow contact from other users"}),e.jsx(r,{label:"Include my name in public records"})]})]})},M={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",style:{maxWidth:"600px"},children:[e.jsxs(l,{label:"Location",helperText:"Filter by region",children:[e.jsx(r,{label:"Darwin",defaultChecked:!0}),e.jsx(r,{label:"Alice Springs"}),e.jsx(r,{label:"Katherine"}),e.jsx(r,{label:"Palmerston"}),e.jsx(r,{label:"Nhulunbuy"})]}),e.jsxs(l,{label:"Service Type",helperText:"Filter by service category",children:[e.jsx(r,{label:"Online",defaultChecked:!0}),e.jsx(r,{label:"In-person"}),e.jsx(r,{label:"Phone"}),e.jsx(r,{label:"Mail"})]}),e.jsxs(l,{label:"Availability",children:[e.jsx(r,{label:"Available now",defaultChecked:!0}),e.jsx(r,{label:"Scheduled appointments"}),e.jsx(r,{label:"Emergency services"})]})]})},A={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",style:{maxWidth:"600px"},children:[e.jsxs(l,{label:"Declaration",helperText:"Please confirm the following statements",required:!0,validationState:"error",validationMessage:"All declarations must be confirmed to proceed",children:[e.jsx(r,{label:"I declare that all information provided is true and accurate"}),e.jsx(r,{label:"I understand that providing false information may result in application rejection"}),e.jsx(r,{label:"I have read and understood the application guidelines"})]}),e.jsx(r,{label:"I consent to background checks being conducted as part of this application",required:!0,validationState:"error",validationMessage:"Consent is required to process your application"}),e.jsx(r,{label:"I would like to receive updates about my application via email",defaultChecked:!0})]})},E={render:function(){const[a,t]=D.useState(!1);return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(r,{label:"Marketing communications",checked:a,onChange:n=>t(n.target.checked)}),e.jsxs("p",{className:"text-muted small",children:["Current state: ",a?"Checked":"Unchecked"]})]})}},W={render:function(){const[a,t]=D.useState(!1);return e.jsx("div",{className:"d-flex flex-column gap-3",children:e.jsx(r,{label:"I accept the terms and conditions",checked:a,onChange:n=>t(n.target.checked),validationState:a?"success":"error",validationMessage:a?"Thank you for accepting":"You must accept the terms to continue"})})}},P={render:function(){const[a,t]=D.useState({email:!1,phone:!1,sms:!1,mail:!1}),n=Object.values(a).every(s=>s),u=Object.values(a).some(s=>s),d=s=>{t({email:s,phone:s,sms:s,mail:s})};return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(r,{label:"Select all contact methods",checked:n,onChange:s=>d(s.target.checked)}),e.jsx("hr",{}),e.jsxs(l,{label:"Contact Methods",helperText:"Choose your preferred ways to be contacted",children:[e.jsx(r,{label:"Email",checked:a.email,onChange:s=>t({...a,email:s.target.checked})}),e.jsx(r,{label:"Phone",checked:a.phone,onChange:s=>t({...a,phone:s.target.checked})}),e.jsx(r,{label:"SMS",checked:a.sms,onChange:s=>t({...a,sms:s.target.checked})}),e.jsx(r,{label:"Mail",checked:a.mail,onChange:s=>t({...a,mail:s.target.checked})})]}),e.jsx("p",{className:"text-muted small",children:u?`${Object.values(a).filter(s=>s).length} method(s) selected`:"No methods selected"})]})}},O={args:{label:"Checkbox label"}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Subscribe to email notifications"
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I agree to the terms and conditions",
    defaultChecked: true
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    "aria-label": "Select this option"
  }
}`,...k.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: "This option is currently unavailable",
    disabled: true
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Automatically enabled for all users",
    disabled: true,
    defaultChecked: true
  }
}`,...f.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Marketing communications",
    defaultChecked: true,
    validationState: "success",
    validationMessage: "Preferences saved successfully"
  }
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "I have read and agree to the privacy policy",
    validationState: "error",
    validationMessage: "You must agree to the privacy policy to continue"
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Preferred Contact Methods" helperText="Select all that apply">\r
      <Checkbox label="Email" />\r
      <Checkbox label="Phone" />\r
      <Checkbox label="SMS" />\r
      <Checkbox label="Mail" />\r
    </CheckboxGroup>
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Terms and Conditions" helperText="Please review and accept the following" required>\r
      <Checkbox label="I agree to the privacy policy" />\r
      <Checkbox label="I agree to the terms of service" />\r
      <Checkbox label="I consent to receive important service updates" />\r
    </CheckboxGroup>
}`,...j.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Email Preferences" helperText="Choose the types of emails you'd like to receive">\r
      <Checkbox label="Weekly newsletter" />\r
      <Checkbox label="Event notifications" defaultChecked />\r
      <Checkbox label="Policy updates" defaultChecked />\r
      <Checkbox label="Emergency alerts" defaultChecked />\r
    </CheckboxGroup>
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Service Selection" helperText="Select at least one service" required validationState="error" validationMessage="Please select at least one service to continue">\r
      <Checkbox label="Business registration" />\r
      <Checkbox label="Tax file number application" />\r
      <Checkbox label="Working with children check" />\r
      <Checkbox label="Food handling license" />\r
    </CheckboxGroup>
}`,...w.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Notification Settings" helperText="Manage your notification preferences" validationState="success" validationMessage="Settings updated successfully">\r
      <Checkbox label="Account updates" defaultChecked />\r
      <Checkbox label="Security alerts" defaultChecked />\r
      <Checkbox label="Newsletter" />\r
    </CheckboxGroup>
}`,...T.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <CheckboxGroup label="Available Features" helperText="Some features require additional permissions">\r
      <Checkbox label="Basic access" defaultChecked disabled />\r
      <Checkbox label="Advanced reporting" />\r
      <Checkbox label="Export data" />\r
      <Checkbox label="Admin privileges" disabled />\r
    </CheckboxGroup>
}`,...G.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <CheckboxGroup label="Required Services" helperText="Select all services you wish to apply for" required>\r
        <Checkbox label="Business registration" />\r
        <Checkbox label="Tax file number" />\r
        <Checkbox label="Working with children check" />\r
        <Checkbox label="Food handling license" />\r
      </CheckboxGroup>\r
\r
      <CheckboxGroup label="Optional Services" helperText="Additional services available at no extra cost">\r
        <Checkbox label="Business advisory consultation" />\r
        <Checkbox label="Marketing resources" />\r
        <Checkbox label="Networking events access" />\r
      </CheckboxGroup>\r
\r
      <Checkbox label="I consent to the collection and use of my personal information as outlined in the privacy policy" required />\r
    </div>
}`,...I.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <CheckboxGroup label="Email Subscriptions" helperText="Choose the topics you're interested in">\r
        <Checkbox label="Health services updates" />\r
        <Checkbox label="Education programs" />\r
        <Checkbox label="Community events" />\r
        <Checkbox label="Infrastructure projects" />\r
        <Checkbox label="Business support services" />\r
      </CheckboxGroup>\r
\r
      <CheckboxGroup label="Frequency" helperText="How often would you like to receive emails?" required>\r
        <Checkbox label="Daily digest" />\r
        <Checkbox label="Weekly summary" defaultChecked />\r
        <Checkbox label="Monthly newsletter" />\r
      </CheckboxGroup>\r
    </div>
}`,...N.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <CheckboxGroup label="Security Settings" helperText="Manage your account security preferences">\r
        <Checkbox label="Enable two-factor authentication" defaultChecked />\r
        <Checkbox label="Require password on sensitive actions" defaultChecked />\r
        <Checkbox label="Remember this device for 30 days" />\r
        <Checkbox label="Send security alerts via email" defaultChecked />\r
      </CheckboxGroup>\r
\r
      <CheckboxGroup label="Privacy Settings" helperText="Control how your information is shared">\r
        <Checkbox label="Make my profile public" />\r
        <Checkbox label="Allow contact from other users" />\r
        <Checkbox label="Include my name in public records" />\r
      </CheckboxGroup>\r
    </div>
}`,...q.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-4" style={{
    maxWidth: "600px"
  }}>\r
      <CheckboxGroup label="Location" helperText="Filter by region">\r
        <Checkbox label="Darwin" defaultChecked />\r
        <Checkbox label="Alice Springs" />\r
        <Checkbox label="Katherine" />\r
        <Checkbox label="Palmerston" />\r
        <Checkbox label="Nhulunbuy" />\r
      </CheckboxGroup>\r
\r
      <CheckboxGroup label="Service Type" helperText="Filter by service category">\r
        <Checkbox label="Online" defaultChecked />\r
        <Checkbox label="In-person" />\r
        <Checkbox label="Phone" />\r
        <Checkbox label="Mail" />\r
      </CheckboxGroup>\r
\r
      <CheckboxGroup label="Availability">\r
        <Checkbox label="Available now" defaultChecked />\r
        <Checkbox label="Scheduled appointments" />\r
        <Checkbox label="Emergency services" />\r
      </CheckboxGroup>\r
    </div>
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-3" style={{
    maxWidth: "600px"
  }}>\r
      <CheckboxGroup label="Declaration" helperText="Please confirm the following statements" required validationState="error" validationMessage="All declarations must be confirmed to proceed">\r
        <Checkbox label="I declare that all information provided is true and accurate" />\r
        <Checkbox label="I understand that providing false information may result in application rejection" />\r
        <Checkbox label="I have read and understood the application guidelines" />\r
      </CheckboxGroup>\r
\r
      <Checkbox label="I consent to background checks being conducted as part of this application" required validationState="error" validationMessage="Consent is required to process your application" />\r
\r
      <Checkbox label="I would like to receive updates about my application via email" defaultChecked />\r
    </div>
}`,...A.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function ControlledExample() {
    const [isChecked, setIsChecked] = React.useState(false);
    return <div className="d-flex flex-column gap-3">\r
        <Checkbox label="Marketing communications" checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />\r
        <p className="text-muted small">\r
          Current state: {isChecked ? "Checked" : "Unchecked"}\r
        </p>\r
      </div>;
  }
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function DynamicValidationExample() {
    const [accepted, setAccepted] = React.useState(false);
    return <div className="d-flex flex-column gap-3">\r
        <Checkbox label="I accept the terms and conditions" checked={accepted} onChange={e => setAccepted(e.target.checked)} validationState={accepted ? "success" : "error"} validationMessage={accepted ? "Thank you for accepting" : "You must accept the terms to continue"} />\r
      </div>;
  }
}`,...W.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function SelectAllExample() {
    const [selections, setSelections] = React.useState({
      email: false,
      phone: false,
      sms: false,
      mail: false
    });
    const allSelected = Object.values(selections).every(v => v);
    const someSelected = Object.values(selections).some(v => v);
    const handleSelectAll = (checked: boolean) => {
      setSelections({
        email: checked,
        phone: checked,
        sms: checked,
        mail: checked
      });
    };
    return <div className="d-flex flex-column gap-3">\r
        <Checkbox label="Select all contact methods" checked={allSelected} onChange={e => handleSelectAll(e.target.checked)} />\r
        <hr />\r
        <CheckboxGroup label="Contact Methods" helperText="Choose your preferred ways to be contacted">\r
          <Checkbox label="Email" checked={selections.email} onChange={e => setSelections({
          ...selections,
          email: e.target.checked
        })} />\r
          <Checkbox label="Phone" checked={selections.phone} onChange={e => setSelections({
          ...selections,
          phone: e.target.checked
        })} />\r
          <Checkbox label="SMS" checked={selections.sms} onChange={e => setSelections({
          ...selections,
          sms: e.target.checked
        })} />\r
          <Checkbox label="Mail" checked={selections.mail} onChange={e => setSelections({
          ...selections,
          mail: e.target.checked
        })} />\r
        </CheckboxGroup>\r
        <p className="text-muted small">\r
          {someSelected ? \`\${Object.values(selections).filter(v => v).length} method(s) selected\` : "No methods selected"}\r
        </p>\r
      </div>;
  }
}`,...P.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Checkbox label"
  }
}`,...O.parameters?.docs?.source}}};const U=["Default","Checked","WithoutLabel","Disabled","DisabledChecked","WithSuccessValidation","WithErrorValidation","BasicGroup","RequiredGroup","GroupWithSomeChecked","GroupWithError","GroupWithSuccess","GroupWithDisabledOptions","OnlineServiceApplication","NewsletterPreferences","AccountSettings","FilterOptions","ApplicationConsent","ControlledCheckbox","DynamicValidation","SelectAllPattern","Playground"];export{q as AccountSettings,A as ApplicationConsent,y as BasicGroup,x as Checked,E as ControlledCheckbox,m as Default,g as Disabled,f as DisabledChecked,W as DynamicValidation,M as FilterOptions,G as GroupWithDisabledOptions,w as GroupWithError,S as GroupWithSomeChecked,T as GroupWithSuccess,N as NewsletterPreferences,I as OnlineServiceApplication,O as Playground,j as RequiredGroup,P as SelectAllPattern,v as WithErrorValidation,C as WithSuccessValidation,k as WithoutLabel,U as __namedExportsOrder,Y as default};
