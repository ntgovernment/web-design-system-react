import{r as I,j as e}from"./iframe-CJcOhIH1.js";import{I as W}from"./Icon-CZK7gEro.js";import"./preload-helper-Dc5Yqcnt.js";const a=({label:o,helperText:f,requiredIndicator:R="(Required)",validationState:O,validationMessage:j,size:C,wrapperClassName:q,id:F,className:N,required:t,disabled:P,value:T,defaultValue:B,onChange:E,options:V=[],placeholder:L="Select an option",children:G,...$})=>{const H=I.useId(),i=F??H,k=T!==void 0,[_,J]=I.useState(B),s=k?T:_,U=s!=null&&`${s}`.length>0,n=O==="error"?"error":O==="success"?"success":void 0,M=f?`${i}-help`:void 0,z=j&&n?`${i}-status`:void 0,Y=[M,z].filter(Boolean).join(" ")||void 0,K=`form-select${C?` form-select-${C}`:""}${N?` ${N}`:""}`,X=l=>{k||J(l.target.value),E?.(l)},Q=k?{value:T}:{defaultValue:B};return e.jsxs("div",{className:`dropdown-field${q?` ${q}`:""}`,children:[o&&e.jsxs("div",{className:"dropdown-label-row",children:[e.jsx("label",{className:"dropdown-label",htmlFor:i,children:o}),t&&e.jsx("span",{className:"dropdown-required",children:R})]}),f&&e.jsx("div",{className:"dropdown-helper",id:M,children:f}),e.jsxs("div",{className:"dropdown-control-wrapper",children:[e.jsxs("select",{id:i,className:K,required:t,disabled:P,"aria-required":t||void 0,"aria-invalid":n==="error"?"true":void 0,"aria-describedby":Y,"data-status":n,"data-filled":U?"true":void 0,"data-disabled":P?"true":void 0,onChange:X,...Q,...$,children:[L&&!t&&e.jsx("option",{value:"",disabled:!s,children:L}),V.map(l=>e.jsx("option",{value:l.value,disabled:l.disabled,children:l.label},l.value)),G]}),e.jsx("div",{className:"dropdown-icon","aria-hidden":"true",children:e.jsx(W,{icon:"fa-light fa-chevron-down",color:"currentColor",size:"20px"})})]}),n&&j&&e.jsxs("div",{id:z,className:`dropdown-message ${n==="error"?"dropdown-message--error":"dropdown-message--success"}`,role:n==="error"?"alert":"status","aria-live":n==="error"?"assertive":"polite",children:[e.jsx("span",{className:"dropdown-message__icon","aria-hidden":"true",children:e.jsx(W,{icon:n==="error"?"fa-light fa-circle-xmark":"fa-light fa-check",color:"currentColor",size:"16px"})}),e.jsx("span",{children:j})]})]})};a.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{label:{required:!1,tsType:{name:"string"},description:"Dropdown label shown above the field."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown under the label."},requiredIndicator:{required:!1,tsType:{name:"string"},description:`Text shown when the field is required.\r
@default "(Required)"`,defaultValue:{value:'"(Required)"',computed:!1}},validationState:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"Validation state for the field."},validationMessage:{required:!1,tsType:{name:"string"},description:"Validation message shown below the field."},size:{required:!1,tsType:{name:"union",raw:'"sm" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"lg"'}]},description:"Dropdown size using Bootstrap sizing classes."},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control."},options:{required:!1,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:"The options to display in the dropdown.",defaultValue:{value:"[]",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown when no option is selected.\r
@default "Select an option"`,defaultValue:{value:'"Select an option"',computed:!1}}},composes:["Omit"]};const re={title:"Components/Dropdown",component:a,parameters:{layout:"padded",docs:{description:{component:"Dropdown allows users to select a single option from a list. Use labels and helper text to guide users, and validation messages to communicate errors or success states. The component uses the native HTML select element for optimal accessibility and keyboard navigation."}}},tags:["autodocs"],argTypes:{label:{control:"text"},helperText:{control:"text"},placeholder:{control:"text"},required:{control:"boolean"},disabled:{control:"boolean"},size:{control:"select",options:["default","sm","lg"],mapping:{default:void 0,sm:"sm",lg:"lg"}},validationState:{control:"select",options:["none","success","error"],mapping:{none:void 0,success:"success",error:"error"}},validationMessage:{control:"text"}}},r=[{value:"darwin",label:"Darwin"},{value:"alice-springs",label:"Alice Springs"},{value:"katherine",label:"Katherine"},{value:"tennant-creek",label:"Tennant Creek"},{value:"nhulunbuy",label:"Nhulunbuy"}],D=[{value:"license-renewal",label:"Driver License Renewal"},{value:"vehicle-registration",label:"Vehicle Registration"},{value:"birth-certificate",label:"Birth Certificate"},{value:"business-license",label:"Business License Application"},{value:"land-title",label:"Land Title Search"}],A=[{value:"email",label:"Email"},{value:"phone",label:"Phone"},{value:"mail",label:"Postal Mail"}],Z=[{value:"dcmc",label:"Chief Minister and Cabinet"},{value:"treasury",label:"Treasury and Finance"},{value:"health",label:"Health"},{value:"education",label:"Education"},{value:"infrastructure",label:"Infrastructure, Planning and Logistics"},{value:"environment",label:"Environment, Parks and Water Security"},{value:"tourism",label:"Tourism and Culture"},{value:"business",label:"Industry, Tourism and Trade"},{value:"attorney",label:"Attorney-General and Justice"},{value:"corporate",label:"Corporate and Digital Development"}],u={args:{label:"Select your region",helperText:"Choose the region closest to you",placeholder:"Select a region",options:r}},c={args:{label:"Service type",helperText:"Select the government service you need",required:!0,placeholder:"Select a service",options:D}},p={args:{label:"Preferred contact method",helperText:"How should we contact you?",value:"email",onChange:()=>{},options:A}},d={render:()=>e.jsx(a,{label:"Select your region",helperText:"Choose the region closest to you",placeholder:"Select a region",options:r,"data-active":"true"})},m={args:{label:"Service location",helperText:"Select where you would like to receive service",value:"darwin",onChange:()=>{},validationState:"success",validationMessage:"Location confirmed and service available",options:r}},v={args:{label:"Department",helperText:"Select the relevant government department",value:"",onChange:()=>{},validationState:"error",validationMessage:"Please select a department to continue",options:Z,required:!0}},b={args:{label:"Service type",helperText:"Service selection is currently unavailable",value:"license-renewal",disabled:!0,options:D}},g={name:"With Disabled Options",args:{label:"Select service",helperText:"Some services are currently unavailable",options:[{value:"online-services",label:"Online Services"},{value:"in-person",label:"In-Person Services",disabled:!0},{value:"phone-support",label:"Phone Support"},{value:"email-support",label:"Email Support",disabled:!0}]}},h={name:"With Many Options (Scrolling)",args:{label:"Aboriginal community",helperText:"Select your community",placeholder:"Select a community",options:[{value:"alyangula",label:"Alyangula"},{value:"angurugu",label:"Angurugu"},{value:"areyonga",label:"Areyonga"},{value:"barunga",label:"Barunga"},{value:"belyuen",label:"Belyuen"},{value:"beswick",label:"Beswick"},{value:"borroloola",label:"Borroloola"},{value:"bulman",label:"Bulman"},{value:"daguragu",label:"Daguragu"},{value:"elliott",label:"Elliott"},{value:"galiwinku",label:"Galiwinku"},{value:"gapuwiyak",label:"Gapuwiyak"},{value:"gunbalanya",label:"Gunbalanya"},{value:"gunyangara",label:"Gunyangara"},{value:"hermannsburg",label:"Hermannsburg"},{value:"jilkminggan",label:"Jilkminggan"},{value:"kalkarindji",label:"Kalkarindji"},{value:"lajamanu",label:"Lajamanu"},{value:"maningrida",label:"Maningrida"},{value:"milingimbi",label:"Milingimbi"},{value:"ngukurr",label:"Ngukurr"},{value:"numbulwar",label:"Numbulwar"},{value:"papunya",label:"Papunya"},{value:"ramingining",label:"Ramingining"},{value:"umbakumba",label:"Umbakumba"},{value:"wadeye",label:"Wadeye"},{value:"yirrkala",label:"Yirrkala"},{value:"yuendumu",label:"Yuendumu"}]}},y={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-2",style:{maxWidth:"480px"},children:[e.jsx(a,{label:"Small size",size:"sm",placeholder:"Select a region",options:r}),e.jsx(a,{label:"Default size",placeholder:"Select a region",options:r}),e.jsx(a,{label:"Large size",size:"lg",placeholder:"Select a region",options:r})]})},x={name:"With Option Groups (JSX children)",render:()=>e.jsxs(a,{label:"Service category",helperText:"Browse services by category",children:[e.jsx("option",{value:"",children:"Select a service"}),e.jsxs("optgroup",{label:"Online Services",children:[e.jsx("option",{value:"license-renewal",children:"Driver License Renewal"}),e.jsx("option",{value:"vehicle-rego",children:"Vehicle Registration"}),e.jsx("option",{value:"fine-payment",children:"Pay Fines Online"})]}),e.jsxs("optgroup",{label:"Certificates & Documents",children:[e.jsx("option",{value:"birth-cert",children:"Birth Certificate"}),e.jsx("option",{value:"death-cert",children:"Death Certificate"}),e.jsx("option",{value:"marriage-cert",children:"Marriage Certificate"})]}),e.jsxs("optgroup",{label:"Business Services",children:[e.jsx("option",{value:"business-license",children:"Business License"}),e.jsx("option",{value:"business-name",children:"Register Business Name"}),e.jsx("option",{value:"liquor-license",children:"Liquor License"})]}),e.jsxs("optgroup",{label:"Land & Property",children:[e.jsx("option",{value:"title-search",children:"Land Title Search"}),e.jsx("option",{value:"survey-plan",children:"Survey Plan"}),e.jsx("option",{value:"property-info",children:"Property Information"})]})]})},S={name:"In a Form Context",render:()=>e.jsx("form",{style:{maxWidth:"600px"},onSubmit:o=>{o.preventDefault(),alert("Form submitted!")},children:e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(a,{label:"Service location",required:!0,helperText:"Select your nearest service centre",options:r}),e.jsx(a,{label:"Service type",required:!0,helperText:"What service do you need?",options:D}),e.jsx(a,{label:"Preferred contact method",helperText:"How should we contact you about your application?",options:A,defaultValue:"email"}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Submit Application"}),e.jsx("button",{type:"reset",className:"btn btn-secondary",children:"Clear Form"})]})]})})},w={args:{label:"Select your region",helperText:"Choose the region closest to you",placeholder:"Select a region",options:r}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select your region",
    helperText: "Choose the region closest to you",
    placeholder: "Select a region",
    options: regionOptions
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Service type",
    helperText: "Select the government service you need",
    required: true,
    placeholder: "Select a service",
    options: serviceOptions
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Preferred contact method",
    helperText: "How should we contact you?",
    value: "email",
    onChange: () => undefined,
    options: contactMethodOptions
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <Dropdown label="Select your region" helperText="Choose the region closest to you" placeholder="Select a region" options={regionOptions} data-active="true" />
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Service location",
    helperText: "Select where you would like to receive service",
    value: "darwin",
    onChange: () => undefined,
    validationState: "success",
    validationMessage: "Location confirmed and service available",
    options: regionOptions
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Department",
    helperText: "Select the relevant government department",
    value: "",
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "Please select a department to continue",
    options: departmentOptions,
    required: true
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Service type",
    helperText: "Service selection is currently unavailable",
    value: "license-renewal",
    disabled: true,
    options: serviceOptions
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: "With Disabled Options",
  args: {
    label: "Select service",
    helperText: "Some services are currently unavailable",
    options: [{
      value: "online-services",
      label: "Online Services"
    }, {
      value: "in-person",
      label: "In-Person Services",
      disabled: true
    }, {
      value: "phone-support",
      label: "Phone Support"
    }, {
      value: "email-support",
      label: "Email Support",
      disabled: true
    }]
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: "With Many Options (Scrolling)",
  args: {
    label: "Aboriginal community",
    helperText: "Select your community",
    placeholder: "Select a community",
    options: [{
      value: "alyangula",
      label: "Alyangula"
    }, {
      value: "angurugu",
      label: "Angurugu"
    }, {
      value: "areyonga",
      label: "Areyonga"
    }, {
      value: "barunga",
      label: "Barunga"
    }, {
      value: "belyuen",
      label: "Belyuen"
    }, {
      value: "beswick",
      label: "Beswick"
    }, {
      value: "borroloola",
      label: "Borroloola"
    }, {
      value: "bulman",
      label: "Bulman"
    }, {
      value: "daguragu",
      label: "Daguragu"
    }, {
      value: "elliott",
      label: "Elliott"
    }, {
      value: "galiwinku",
      label: "Galiwinku"
    }, {
      value: "gapuwiyak",
      label: "Gapuwiyak"
    }, {
      value: "gunbalanya",
      label: "Gunbalanya"
    }, {
      value: "gunyangara",
      label: "Gunyangara"
    }, {
      value: "hermannsburg",
      label: "Hermannsburg"
    }, {
      value: "jilkminggan",
      label: "Jilkminggan"
    }, {
      value: "kalkarindji",
      label: "Kalkarindji"
    }, {
      value: "lajamanu",
      label: "Lajamanu"
    }, {
      value: "maningrida",
      label: "Maningrida"
    }, {
      value: "milingimbi",
      label: "Milingimbi"
    }, {
      value: "ngukurr",
      label: "Ngukurr"
    }, {
      value: "numbulwar",
      label: "Numbulwar"
    }, {
      value: "papunya",
      label: "Papunya"
    }, {
      value: "ramingining",
      label: "Ramingining"
    }, {
      value: "umbakumba",
      label: "Umbakumba"
    }, {
      value: "wadeye",
      label: "Wadeye"
    }, {
      value: "yirrkala",
      label: "Yirrkala"
    }, {
      value: "yuendumu",
      label: "Yuendumu"
    }]
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-2" style={{
    maxWidth: "480px"
  }}>\r
      <Dropdown label="Small size" size="sm" placeholder="Select a region" options={regionOptions} />\r
      <Dropdown label="Default size" placeholder="Select a region" options={regionOptions} />\r
      <Dropdown label="Large size" size="lg" placeholder="Select a region" options={regionOptions} />\r
    </div>
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: "With Option Groups (JSX children)",
  render: () => <Dropdown label="Service category" helperText="Browse services by category">\r
      <option value="">Select a service</option>\r
      <optgroup label="Online Services">\r
        <option value="license-renewal">Driver License Renewal</option>\r
        <option value="vehicle-rego">Vehicle Registration</option>\r
        <option value="fine-payment">Pay Fines Online</option>\r
      </optgroup>\r
      <optgroup label="Certificates & Documents">\r
        <option value="birth-cert">Birth Certificate</option>\r
        <option value="death-cert">Death Certificate</option>\r
        <option value="marriage-cert">Marriage Certificate</option>\r
      </optgroup>\r
      <optgroup label="Business Services">\r
        <option value="business-license">Business License</option>\r
        <option value="business-name">Register Business Name</option>\r
        <option value="liquor-license">Liquor License</option>\r
      </optgroup>\r
      <optgroup label="Land & Property">\r
        <option value="title-search">Land Title Search</option>\r
        <option value="survey-plan">Survey Plan</option>\r
        <option value="property-info">Property Information</option>\r
      </optgroup>\r
    </Dropdown>
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: "In a Form Context",
  render: () => <form style={{
    maxWidth: "600px"
  }} onSubmit={e => {
    e.preventDefault();
    alert("Form submitted!");
  }}>\r
      <div className="d-flex flex-column gap-3">\r
        <Dropdown label="Service location" required helperText="Select your nearest service centre" options={regionOptions} />\r
\r
        <Dropdown label="Service type" required helperText="What service do you need?" options={serviceOptions} />\r
\r
        <Dropdown label="Preferred contact method" helperText="How should we contact you about your application?" options={contactMethodOptions} defaultValue="email" />\r
\r
        <div className="d-flex gap-2">\r
          <button type="submit" className="btn btn-primary">\r
            Submit Application\r
          </button>\r
          <button type="reset" className="btn btn-secondary">\r
            Clear Form\r
          </button>\r
        </div>\r
      </div>\r
    </form>
}`,...S.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Select your region",
    helperText: "Choose the region closest to you",
    placeholder: "Select a region",
    options: regionOptions
  }
}`,...w.parameters?.docs?.source}}};const le=["Default","Required","Filled","Active","Success","Error","Disabled","DisabledOptions","ManyOptions","Sizes","WithOptgroups","FormExample","Playground"];export{d as Active,u as Default,b as Disabled,g as DisabledOptions,v as Error,p as Filled,S as FormExample,h as ManyOptions,w as Playground,c as Required,y as Sizes,m as Success,x as WithOptgroups,le as __namedExportsOrder,re as default};
