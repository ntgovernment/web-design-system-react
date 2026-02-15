import{r as h,j as e}from"./iframe-Cgj6QQFv.js";import{I as X}from"./Icon-D6RIkSta.js";import"./preload-helper-DhH6u7hw.js";const t=({label:b,helperText:a,requiredIndicator:m="(Required)",validationState:s,validationMessage:n,required:l,disabled:d,readOnly:i,wrapperClassName:p,value:r,defaultValue:g,onChange:D,id:x})=>{const v=h.useId(),u=x??v,E=r!==void 0,[K,Q]=h.useState(g??{day:"",month:"",year:""}),y=E?r:K,o=s==="error"?"error":s==="success"?"success":void 0,H=a?`${u}-help`:void 0,z=n&&o?`${u}-status`:void 0,G=[H,z].filter(Boolean).join(" ")||void 0,_=(f,c)=>{const J={...y,[f]:c};E||Q(J),D?.(J)};return e.jsxs("div",{className:`date-input-field${p?` ${p}`:""}`,id:u,children:[b&&e.jsxs("div",{className:"date-input-label-row",children:[e.jsx("label",{className:"date-input-label",children:b}),l&&e.jsx("span",{className:"date-input-required",children:m})]}),a&&e.jsx("div",{className:"date-input-helper",id:H,children:a}),e.jsxs("div",{className:"date-input-fields-wrapper",children:[e.jsxs("div",{className:"date-input-field-group",children:[e.jsx("label",{className:"date-input-field-label",htmlFor:`${u}-day`,children:"Day"}),e.jsx("input",{id:`${u}-day`,type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:2,placeholder:"DD",className:"form-control date-input-field-control",value:y.day,onChange:f=>{const c=f.target.value.replace(/[^0-9]/g,"");c.length<=2&&_("day",c)},disabled:d,readOnly:i,required:l,"aria-required":l||void 0,"aria-invalid":o==="error"?"true":void 0,"aria-describedby":G,"data-status":o,"data-filled":y.day.length>0?"true":void 0,"data-readonly":i?"true":void 0,"data-disabled":d?"true":void 0})]}),e.jsxs("div",{className:"date-input-field-group",children:[e.jsx("label",{className:"date-input-field-label",htmlFor:`${u}-month`,children:"Month"}),e.jsx("input",{id:`${u}-month`,type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:2,placeholder:"MM",className:"form-control date-input-field-control",value:y.month,onChange:f=>{const c=f.target.value.replace(/[^0-9]/g,"");c.length<=2&&_("month",c)},disabled:d,readOnly:i,required:l,"aria-required":l||void 0,"aria-invalid":o==="error"?"true":void 0,"aria-describedby":G,"data-status":o,"data-filled":y.month.length>0?"true":void 0,"data-readonly":i?"true":void 0,"data-disabled":d?"true":void 0})]}),e.jsxs("div",{className:"date-input-field-group",children:[e.jsx("label",{className:"date-input-field-label",htmlFor:`${u}-year`,children:"Year"}),e.jsx("input",{id:`${u}-year`,type:"text",inputMode:"numeric",pattern:"[0-9]*",maxLength:4,placeholder:"YYYY",className:"form-control date-input-field-control",value:y.year,onChange:f=>{const c=f.target.value.replace(/[^0-9]/g,"");c.length<=4&&_("year",c)},disabled:d,readOnly:i,required:l,"aria-required":l||void 0,"aria-invalid":o==="error"?"true":void 0,"aria-describedby":G,"data-status":o,"data-filled":y.year.length>0?"true":void 0,"data-readonly":i?"true":void 0,"data-disabled":d?"true":void 0})]})]}),o&&n&&e.jsxs("div",{id:z,className:`date-input-message ${o==="error"?"date-input-message--error":"date-input-message--success"}`,role:o==="error"?"alert":"status","aria-live":o==="error"?"assertive":"polite",children:[e.jsx("span",{className:"date-input-message__icon","aria-hidden":"true",children:e.jsx(X,{icon:o==="error"?"fa-light fa-circle-xmark":"fa-light fa-check",color:"currentColor",size:"16px"})}),e.jsx("span",{children:n})]})]})};t.__docgenInfo={description:"",methods:[],displayName:"DateInput",props:{label:{required:!1,tsType:{name:"string"},description:"Input label shown above the fields."},helperText:{required:!1,tsType:{name:"string"},description:"Helper text shown under the label."},requiredIndicator:{required:!1,tsType:{name:"string"},description:`Text shown when the field is required.\r
@default "(Required)"`,defaultValue:{value:'"(Required)"',computed:!1}},validationState:{required:!1,tsType:{name:"union",raw:'"success" | "error"',elements:[{name:"literal",value:'"success"'},{name:"literal",value:'"error"'}]},description:"Validation state for the entire date input."},validationMessage:{required:!1,tsType:{name:"string"},description:"Validation message shown below the fields."},required:{required:!1,tsType:{name:"boolean"},description:"Whether the date input is required."},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the date input is disabled."},readOnly:{required:!1,tsType:{name:"boolean"},description:"Whether the date input is read-only."},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control."},value:{required:!1,tsType:{name:"DateInputValue"},description:"Controlled value for the date inputs."},defaultValue:{required:!1,tsType:{name:"DateInputValue"},description:"Default value for uncontrolled usage."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateInputValue) => void",signature:{arguments:[{type:{name:"DateInputValue"},name:"value"}],return:{name:"void"}}},description:"Callback fired when any field changes."},id:{required:!1,tsType:{name:"string"},description:"Additional id attribute for the container (for accessibility)."}}};const te={title:"Components/DateInput",component:t,parameters:{layout:"padded",docs:{description:{component:"Date Input helps users enter a date manually into a form. Use this for dates they already know well, such as date of birth, date of marriage, or passport expiry. The component has three separate fields for Day, Month, and Year in DD MM YYYY format for Australian audiences."}}},tags:["autodocs"],argTypes:{label:{control:"text"},helperText:{control:"text"},required:{control:"boolean"},readOnly:{control:"boolean"},disabled:{control:"boolean"},validationState:{control:"select",options:["none","success","error"],mapping:{none:void 0,success:"success",error:"error"}},validationMessage:{control:"text"}}},T={args:{label:"Date of Birth",helperText:"Enter your date of birth in DD MM YYYY format"}},S={args:{label:"Passport Expiry Date",helperText:"Enter the expiry date shown on your passport",required:!0}},N={args:{label:"Date of Marriage",helperText:"Enter the date you were married",value:{day:"14",month:"02",year:"2020"},onChange:()=>{}}},C={args:{label:"Application Date",helperText:"Enter your application submission date",value:{day:"15",month:"12",year:"2024"},onChange:()=>{},validationState:"success",validationMessage:"Date verified successfully"}},j={args:{label:"License Renewal Date",helperText:"Enter your license renewal date",value:{day:"32",month:"13",year:"2023"},onChange:()=>{},validationState:"error",validationMessage:"Please enter a valid date (day: 01-31, month: 01-12)"}},w={name:"Error - Required Fields",args:{label:"Commencement Date",helperText:"Enter the date you commenced employment",required:!0,value:{day:"",month:"",year:""},onChange:()=>{},validationState:"error",validationMessage:"All date fields are required"}},I={args:{label:"System Generated Date",helperText:"This date is automatically generated",value:{day:"01",month:"01",year:"2025"},disabled:!0}},q={args:{label:"Registration Date",helperText:"Your initial registration date",value:{day:"28",month:"06",year:"2023"},readOnly:!0}},M={name:"Controlled (Interactive)",render:function(){const[a,m]=h.useState({day:"",month:"",year:""});return e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(t,{label:"Select Date",helperText:"Enter a date to see it reflected below",value:a,onChange:s=>m(s)}),e.jsxs("div",{className:"p-3 bg-light rounded",children:[e.jsx("p",{className:"mb-1 fw-bold",children:"Current Value:"}),e.jsxs("code",{children:["Day: ",a.day||"(empty)",", Month:"," ",a.month||"(empty)",", Year: ",a.year||"(empty)"]})]})]})}},V={name:"With Live Validation",render:function(){const[a,m]=h.useState({day:"",month:"",year:""}),[s,n]=h.useState(""),l=i=>{const{day:p,month:r,year:g}=i;if(!p||!r||!g){n(p||r||g?"All date fields are required":"");return}const D=parseInt(p,10),x=parseInt(r,10),v=parseInt(g,10);if(D<1||D>31){n("Day must be between 01 and 31");return}if(x<1||x>12){n("Month must be between 01 and 12");return}const u=new Date().getFullYear();if(v<1900||v>u+100){n("Please enter a valid year");return}const E=new Date(v,x,0).getDate();if(D>E){n(`${x}/${v} only has ${E} days`);return}n("")},d=i=>{m(i),l(i)};return e.jsx(t,{label:"Date of Birth",helperText:"Enter your date of birth to validate",required:!0,value:a,onChange:d,validationState:s?"error":void 0,validationMessage:s})}},Y={name:"Use Case: Date of Birth",render:()=>e.jsx(t,{label:"Date of Birth",helperText:"Enter your date of birth as it appears on official documents",required:!0})},F={name:"Use Case: Passport Expiry",render:()=>e.jsx(t,{label:"Passport Expiry Date",helperText:"Enter the expiry date shown on your passport (format: DD MM YYYY)",required:!0})},B={name:"Use Case: License Renewal",render:()=>e.jsx(t,{label:"License Renewal Date",helperText:"Enter the date your license needs to be renewed"})},O={name:"Use Case: Employment Start",render:()=>e.jsx(t,{label:"Commencement Date",helperText:"Enter the date you commenced employment with NT Government",required:!0})},R={name:"In a Form",render:function(){const[a,m]=h.useState({dateOfBirth:{day:"",month:"",year:""},licenseExpiry:{day:"",month:"",year:""}}),[s,n]=h.useState({}),[l,d]=h.useState(!1),i=()=>{const r={};return(!a.dateOfBirth.day||!a.dateOfBirth.month||!a.dateOfBirth.year)&&(r.dateOfBirth="Date of birth is required"),(!a.licenseExpiry.day||!a.licenseExpiry.month||!a.licenseExpiry.year)&&(r.licenseExpiry="License expiry date is required"),n(r),Object.keys(r).length===0},p=r=>{r.preventDefault(),i()&&(d(!0),console.log("Form submitted:",a))};return e.jsx("form",{onSubmit:p,style:{maxWidth:"600px"},children:e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsx(t,{label:"Date of Birth",helperText:"Enter your date of birth as shown on your birth certificate",required:!0,value:a.dateOfBirth,onChange:r=>m({...a,dateOfBirth:r}),validationState:s.dateOfBirth?"error":void 0,validationMessage:s.dateOfBirth}),e.jsx(t,{label:"Driver License Expiry Date",helperText:"Enter the expiry date shown on your driver license",required:!0,value:a.licenseExpiry,onChange:r=>m({...a,licenseExpiry:r}),validationState:s.licenseExpiry?"error":void 0,validationMessage:s.licenseExpiry}),e.jsxs("div",{className:"d-flex gap-2",children:[e.jsx("button",{type:"submit",className:"btn btn-primary",children:"Submit Application"}),e.jsx("button",{type:"button",className:"btn btn-secondary",onClick:()=>{m({dateOfBirth:{day:"",month:"",year:""},licenseExpiry:{day:"",month:"",year:""}}),n({}),d(!1)},children:"Reset Form"})]}),l&&Object.keys(s).length===0&&e.jsxs("div",{className:"alert alert-success",role:"status",children:["Form submitted successfully! Date of Birth:"," ",a.dateOfBirth.day,"/",a.dateOfBirth.month,"/",a.dateOfBirth.year,", License Expiry:"," ",a.licenseExpiry.day,"/",a.licenseExpiry.month,"/",a.licenseExpiry.year]})]})})}},L={name:"NTG Theme",render:()=>e.jsx("div",{"data-theme":"ntg",children:e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsx(t,{label:"Event Date",helperText:"Enter the date of the community event",required:!0}),e.jsx(t,{label:"Document Lodgement Date",helperText:"Date when documents were submitted",value:{day:"15",month:"03",year:"2024"},onChange:()=>{},validationState:"success",validationMessage:"Date successfully verified"})]})})},A={name:"Central Theme",render:()=>e.jsx("div",{"data-theme":"central",children:e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsx(t,{label:"Meeting Date",helperText:"Enter the scheduled meeting date",required:!0}),e.jsx(t,{label:"Report Submission Date",helperText:"Date when the report was submitted",value:{day:"20",month:"11",year:"2024"},onChange:()=>{},validationState:"success",validationMessage:"Date confirmed"})]})})},k={name:"Partially Filled",render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsx(t,{label:"Incomplete Date Example",helperText:"Only day filled",value:{day:"25",month:"",year:""},onChange:()=>{}}),e.jsx(t,{label:"Incomplete Date Example",helperText:"Day and month filled",value:{day:"25",month:"12",year:""},onChange:()=>{}})]})},P={name:"Leap Year Date",render:()=>e.jsx(t,{label:"Leap Year Date",helperText:"February 29th on a leap year",value:{day:"29",month:"02",year:"2024"},onChange:()=>{},validationState:"success",validationMessage:"Valid leap year date"})},$={name:"Future Date Example",render:()=>e.jsx(t,{label:"Document Expiry Date",helperText:"Enter the future expiry date of your document",value:{day:"01",month:"01",year:"2030"},onChange:()=>{}})},U={name:"Accessibility Features",render:()=>e.jsxs("div",{className:"d-flex flex-column gap-4",children:[e.jsxs("div",{className:"alert alert-info",children:[e.jsx("h4",{className:"alert-heading",children:"Accessibility Features"}),e.jsxs("ul",{className:"mb-0",children:[e.jsx("li",{children:"Each field has its own label (Day, Month, Year)"}),e.jsx("li",{children:"Helper text is linked via aria-describedby"}),e.jsx("li",{children:"Validation messages use aria-live regions"}),e.jsx("li",{children:"Fields are keyboard navigable (Tab/Shift+Tab)"}),e.jsx("li",{children:'Numeric keyboard on mobile (inputMode="numeric")'}),e.jsx("li",{children:"No auto-tabbing between fields (user controls navigation)"}),e.jsx("li",{children:"Required attribute properly set"})]})]}),e.jsx(t,{label:"Accessible Date Input",helperText:"This date input demonstrates all accessibility features",required:!0,validationState:"error",validationMessage:"All fields are required to continue"})]})},W={args:{label:"Date Input",helperText:"Enter a date in DD MM YYYY format",required:!1,disabled:!1,readOnly:!1}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date of Birth",
    helperText: "Enter your date of birth in DD MM YYYY format"
  }
}`,...T.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Passport Expiry Date",
    helperText: "Enter the expiry date shown on your passport",
    required: true
  }
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date of Marriage",
    helperText: "Enter the date you were married",
    value: {
      day: "14",
      month: "02",
      year: "2020"
    },
    onChange: () => undefined
  }
}`,...N.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Application Date",
    helperText: "Enter your application submission date",
    value: {
      day: "15",
      month: "12",
      year: "2024"
    },
    onChange: () => undefined,
    validationState: "success",
    validationMessage: "Date verified successfully"
  }
}`,...C.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    label: "License Renewal Date",
    helperText: "Enter your license renewal date",
    value: {
      day: "32",
      month: "13",
      year: "2023"
    },
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "Please enter a valid date (day: 01-31, month: 01-12)"
  }
}`,...j.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: "Error - Required Fields",
  args: {
    label: "Commencement Date",
    helperText: "Enter the date you commenced employment",
    required: true,
    value: {
      day: "",
      month: "",
      year: ""
    },
    onChange: () => undefined,
    validationState: "error",
    validationMessage: "All date fields are required"
  }
}`,...w.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    label: "System Generated Date",
    helperText: "This date is automatically generated",
    value: {
      day: "01",
      month: "01",
      year: "2025"
    },
    disabled: true
  }
}`,...I.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Registration Date",
    helperText: "Your initial registration date",
    value: {
      day: "28",
      month: "06",
      year: "2023"
    },
    readOnly: true
  }
}`,...q.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: "Controlled (Interactive)",
  render: function ControlledExample() {
    const [dateValue, setDateValue] = useState<DateInputValue>({
      day: "",
      month: "",
      year: ""
    });
    return <div className="d-flex flex-column gap-3">\r
        <DateInput label="Select Date" helperText="Enter a date to see it reflected below" value={dateValue} onChange={value => setDateValue(value)} />\r
        <div className="p-3 bg-light rounded">\r
          <p className="mb-1 fw-bold">Current Value:</p>\r
          <code>\r
            Day: {dateValue.day || "(empty)"}, Month:{" "}\r
            {dateValue.month || "(empty)"}, Year: {dateValue.year || "(empty)"}\r
          </code>\r
        </div>\r
      </div>;
  }
}`,...M.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: "With Live Validation",
  render: function ValidationExample() {
    const [dateValue, setDateValue] = useState<DateInputValue>({
      day: "",
      month: "",
      year: ""
    });
    const [validationError, setValidationError] = useState("");
    const validateDate = (value: DateInputValue) => {
      const {
        day,
        month,
        year
      } = value;

      // Check if all fields are filled
      if (!day || !month || !year) {
        if (day || month || year) {
          setValidationError("All date fields are required");
        } else {
          setValidationError("");
        }
        return;
      }
      const dayNum = parseInt(day, 10);
      const monthNum = parseInt(month, 10);
      const yearNum = parseInt(year, 10);

      // Validate day
      if (dayNum < 1 || dayNum > 31) {
        setValidationError("Day must be between 01 and 31");
        return;
      }

      // Validate month
      if (monthNum < 1 || monthNum > 12) {
        setValidationError("Month must be between 01 and 12");
        return;
      }

      // Validate year
      const currentYear = new Date().getFullYear();
      if (yearNum < 1900 || yearNum > currentYear + 100) {
        setValidationError("Please enter a valid year");
        return;
      }

      // Check for valid date combination
      const daysInMonth = new Date(yearNum, monthNum, 0).getDate();
      if (dayNum > daysInMonth) {
        setValidationError(\`\${monthNum}/\${yearNum} only has \${daysInMonth} days\`);
        return;
      }
      setValidationError("");
    };
    const handleChange = (value: DateInputValue) => {
      setDateValue(value);
      validateDate(value);
    };
    return <DateInput label="Date of Birth" helperText="Enter your date of birth to validate" required value={dateValue} onChange={handleChange} validationState={validationError ? "error" : undefined} validationMessage={validationError} />;
  }
}`,...V.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: "Use Case: Date of Birth",
  render: () => <DateInput label="Date of Birth" helperText="Enter your date of birth as it appears on official documents" required />
}`,...Y.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: "Use Case: Passport Expiry",
  render: () => <DateInput label="Passport Expiry Date" helperText="Enter the expiry date shown on your passport (format: DD MM YYYY)" required />
}`,...F.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: "Use Case: License Renewal",
  render: () => <DateInput label="License Renewal Date" helperText="Enter the date your license needs to be renewed" />
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: "Use Case: Employment Start",
  render: () => <DateInput label="Commencement Date" helperText="Enter the date you commenced employment with NT Government" required />
}`,...O.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: "In a Form",
  render: function FormExample() {
    const [formData, setFormData] = useState({
      dateOfBirth: {
        day: "",
        month: "",
        year: ""
      },
      licenseExpiry: {
        day: "",
        month: "",
        year: ""
      }
    });
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [submitted, setSubmitted] = useState(false);
    const validateForm = () => {
      const newErrors: Record<string, string> = {};

      // Validate date of birth
      if (!formData.dateOfBirth.day || !formData.dateOfBirth.month || !formData.dateOfBirth.year) {
        newErrors.dateOfBirth = "Date of birth is required";
      }

      // Validate license expiry
      if (!formData.licenseExpiry.day || !formData.licenseExpiry.month || !formData.licenseExpiry.year) {
        newErrors.licenseExpiry = "License expiry date is required";
      }
      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      if (validateForm()) {
        setSubmitted(true);
        console.log("Form submitted:", formData);
      }
    };
    return <form onSubmit={handleSubmit} style={{
      maxWidth: "600px"
    }}>\r
        <div className="d-flex flex-column gap-4">\r
          <DateInput label="Date of Birth" helperText="Enter your date of birth as shown on your birth certificate" required value={formData.dateOfBirth} onChange={value => setFormData({
          ...formData,
          dateOfBirth: value
        })} validationState={errors.dateOfBirth ? "error" : undefined} validationMessage={errors.dateOfBirth} />\r
\r
          <DateInput label="Driver License Expiry Date" helperText="Enter the expiry date shown on your driver license" required value={formData.licenseExpiry} onChange={value => setFormData({
          ...formData,
          licenseExpiry: value
        })} validationState={errors.licenseExpiry ? "error" : undefined} validationMessage={errors.licenseExpiry} />\r
\r
          <div className="d-flex gap-2">\r
            <button type="submit" className="btn btn-primary">\r
              Submit Application\r
            </button>\r
            <button type="button" className="btn btn-secondary" onClick={() => {
            setFormData({
              dateOfBirth: {
                day: "",
                month: "",
                year: ""
              },
              licenseExpiry: {
                day: "",
                month: "",
                year: ""
              }
            });
            setErrors({});
            setSubmitted(false);
          }}>\r
              Reset Form\r
            </button>\r
          </div>\r
\r
          {submitted && Object.keys(errors).length === 0 && <div className="alert alert-success" role="status">\r
              Form submitted successfully! Date of Birth:{" "}\r
              {formData.dateOfBirth.day}/{formData.dateOfBirth.month}/\r
              {formData.dateOfBirth.year}, License Expiry:{" "}\r
              {formData.licenseExpiry.day}/{formData.licenseExpiry.month}/\r
              {formData.licenseExpiry.year}\r
            </div>}\r
        </div>\r
      </form>;
  }
}`,...R.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: "NTG Theme",
  render: () => <div data-theme="ntg">\r
      <div className="d-flex flex-column gap-4">\r
        <DateInput label="Event Date" helperText="Enter the date of the community event" required />\r
        <DateInput label="Document Lodgement Date" helperText="Date when documents were submitted" value={{
        day: "15",
        month: "03",
        year: "2024"
      }} onChange={() => undefined} validationState="success" validationMessage="Date successfully verified" />\r
      </div>\r
    </div>
}`,...L.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: "Central Theme",
  render: () => <div data-theme="central">\r
      <div className="d-flex flex-column gap-4">\r
        <DateInput label="Meeting Date" helperText="Enter the scheduled meeting date" required />\r
        <DateInput label="Report Submission Date" helperText="Date when the report was submitted" value={{
        day: "20",
        month: "11",
        year: "2024"
      }} onChange={() => undefined} validationState="success" validationMessage="Date confirmed" />\r
      </div>\r
    </div>
}`,...A.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: "Partially Filled",
  render: () => <div className="d-flex flex-column gap-4">\r
      <DateInput label="Incomplete Date Example" helperText="Only day filled" value={{
      day: "25",
      month: "",
      year: ""
    }} onChange={() => undefined} />\r
      <DateInput label="Incomplete Date Example" helperText="Day and month filled" value={{
      day: "25",
      month: "12",
      year: ""
    }} onChange={() => undefined} />\r
    </div>
}`,...k.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: "Leap Year Date",
  render: () => <DateInput label="Leap Year Date" helperText="February 29th on a leap year" value={{
    day: "29",
    month: "02",
    year: "2024"
  }} onChange={() => undefined} validationState="success" validationMessage="Valid leap year date" />
}`,...P.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: "Future Date Example",
  render: () => <DateInput label="Document Expiry Date" helperText="Enter the future expiry date of your document" value={{
    day: "01",
    month: "01",
    year: "2030"
  }} onChange={() => undefined} />
}`,...$.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: "Accessibility Features",
  render: () => <div className="d-flex flex-column gap-4">\r
      <div className="alert alert-info">\r
        <h4 className="alert-heading">Accessibility Features</h4>\r
        <ul className="mb-0">\r
          <li>Each field has its own label (Day, Month, Year)</li>\r
          <li>Helper text is linked via aria-describedby</li>\r
          <li>Validation messages use aria-live regions</li>\r
          <li>Fields are keyboard navigable (Tab/Shift+Tab)</li>\r
          <li>Numeric keyboard on mobile (inputMode="numeric")</li>\r
          <li>No auto-tabbing between fields (user controls navigation)</li>\r
          <li>Required attribute properly set</li>\r
        </ul>\r
      </div>\r
      <DateInput label="Accessible Date Input" helperText="This date input demonstrates all accessibility features" required validationState="error" validationMessage="All fields are required to continue" />\r
    </div>
}`,...U.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Date Input",
    helperText: "Enter a date in DD MM YYYY format",
    required: false,
    disabled: false,
    readOnly: false
  }
}`,...W.parameters?.docs?.source}}};const re=["Default","Required","Filled","Success","Error","ErrorRequired","Disabled","ReadOnly","ControlledDateInput","WithValidation","DateOfBirth","PassportExpiry","LicenseRenewal","EmploymentCommencementDate","InFormContext","NTGTheme","CentralTheme","PartiallyFilled","LeapYearExample","FutureDate","AccessibilityTest","Playground"];export{U as AccessibilityTest,A as CentralTheme,M as ControlledDateInput,Y as DateOfBirth,T as Default,I as Disabled,O as EmploymentCommencementDate,j as Error,w as ErrorRequired,N as Filled,$ as FutureDate,R as InFormContext,P as LeapYearExample,B as LicenseRenewal,L as NTGTheme,k as PartiallyFilled,F as PassportExpiry,W as Playground,q as ReadOnly,S as Required,C as Success,V as WithValidation,re as __namedExportsOrder,te as default};
