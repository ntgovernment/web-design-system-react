import{r as g,j as e}from"./iframe-BGlN-Xn9.js";import{B as m}from"./Button-3dy9nlmO.js";import"./preload-helper-DhH6u7hw.js";import"./Icon-uzMeCDpH.js";const t=({label:n,iconLeft:v,iconRight:w,variant:j="primary",onClick:B,targetButtonId:i,autoHide:x=!0,className:b,type:A="button",disabled:T=!1,ariaLabel:S})=>{const[F,C]=g.useState(!1),r=g.useRef(null),f=g.useRef(null);g.useEffect(()=>{if(!x||!i)return;const y=document.getElementById(i)||document.querySelector(i);if(!y){console.warn(`FloatingButton: Target element with ID/selector "${i}" not found.`);return}return f.current=y,r.current=new IntersectionObserver(q=>{q.forEach(L=>{C(L.isIntersecting)})},{threshold:.1,rootMargin:"0px 0px -100px 0px"}),r.current.observe(y),()=>{r.current&&f.current&&(r.current.unobserve(f.current),r.current.disconnect())}},[i,x]);const R=`floating-button${F?" floating-button--hidden":""}${b?` ${b}`:""}`;return e.jsx("div",{className:R,role:"complementary","aria-label":"Floating action button",children:e.jsx("div",{className:"floating-button__container",children:e.jsx("div",{className:"floating-button__button-wrapper",children:e.jsx(m,{variant:j,label:n,iconLeft:v,iconRight:w,onClick:B,type:A,disabled:T,"aria-label":S||n})})})})};t.__docgenInfo={description:`FloatingButton Component\r
\r
A button banner anchored to the bottom of the screen that keeps important\r
calls to action front and centre for the user.\r
\r
The floating button automatically hides when the user scrolls to the target\r
button within the content, then reappears if they scroll back up.`,methods:[],displayName:"FloatingButton",props:{label:{required:!0,tsType:{name:"string"},description:"Button text label"},iconLeft:{required:!1,tsType:{name:"string"},description:"Icon to display on the left side (FontAwesome icon class, e.g., 'fa-light fa-arrow-right')"},iconRight:{required:!1,tsType:{name:"string"},description:"Icon to display on the right side (FontAwesome icon class, e.g., 'fa-light fa-arrow-right')"},variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:"Button variant (typically primary for floating buttons)",defaultValue:{value:'"primary"',computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:"Click handler for the button"},targetButtonId:{required:!1,tsType:{name:"string"},description:`ID or selector of the target button within the page content\r
When this element is visible in the viewport, the floating button will hide`},autoHide:{required:!1,tsType:{name:"boolean"},description:`Whether to enable auto-hide/show behavior based on scroll\r
Defaults to true`,defaultValue:{value:"true",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the container"},type:{required:!1,tsType:{name:"union",raw:'"button" | "submit" | "reset"',elements:[{name:"literal",value:'"button"'},{name:"literal",value:'"submit"'},{name:"literal",value:'"reset"'}]},description:"HTML button type attribute",defaultValue:{value:'"button"',computed:!1}},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the button is disabled",defaultValue:{value:"false",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility (optional, defaults to label)"}}};const H={title:"Components/FloatingButton",component:t,parameters:{layout:"fullscreen",docs:{description:{component:"A button banner anchored to the bottom of the screen that keeps important calls to action front and centre for the user. The floating button automatically hides when the user scrolls to the target button within the content."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary"],description:"Button style variant"},label:{control:"text",description:"Button text label"},iconLeft:{control:"text",description:"FontAwesome icon class for left side"},iconRight:{control:"text",description:"FontAwesome icon class for right side"},autoHide:{control:"boolean",description:"Enable auto-hide behavior based on scroll"},targetButtonId:{control:"text",description:"ID of target button in content for auto-hide"}}},o={args:{label:"Submit Application",variant:"primary",iconRight:"fa-light fa-arrow-right"},render:n=>e.jsxs("div",{style:{height:"400px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",paddingBottom:"120px"},children:[e.jsx("h2",{children:"Application Page"}),e.jsx("p",{children:"Scroll down to see the floating button behavior."}),e.jsx("p",{children:"The floating button component is anchored at the bottom of the screen, providing a persistent call to action as users browse the content."})]}),e.jsx(t,{...n})]})},a={args:{label:"Learn More",variant:"secondary",iconRight:"fa-light fa-arrow-right"},render:n=>e.jsxs("div",{style:{height:"400px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",paddingBottom:"120px"},children:[e.jsx("h2",{children:"Information Page"}),e.jsx("p",{children:"While primary buttons are recommended for floating buttons, you can use secondary variant for less prominent actions."})]}),e.jsx(t,{...n})]})},s={args:{label:"Download Form",variant:"primary",iconLeft:"fa-light fa-download"},render:n=>e.jsxs("div",{style:{height:"400px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",paddingBottom:"120px"},children:[e.jsx("h2",{children:"Download Application Form"}),e.jsx("p",{children:"Download and complete the application form. You can submit it online or mail it to the address provided."})]}),e.jsx(t,{...n})]})},l={args:{label:"Continue to Application",variant:"primary",iconRight:"fa-light fa-arrow-right"},render:n=>e.jsxs("div",{style:{height:"400px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",paddingBottom:"120px"},children:[e.jsx("h2",{children:"Ready to Apply?"}),e.jsx("p",{children:"Review the information above and click Continue to start your application when you're ready."})]}),e.jsx(t,{...n})]})},p={args:{label:"Submit Application",variant:"primary",iconRight:"fa-light fa-arrow-right",targetButtonId:"target-apply-button",autoHide:!0},render:n=>e.jsxs("div",{style:{height:"600px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",minHeight:"1200px"},children:[e.jsx("h2",{children:"Business License Application"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{children:"Requirements"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Valid ABN or ACN"}),e.jsx("li",{children:"Proof of identity documents"}),e.jsx("li",{children:"Business address details"}),e.jsx("li",{children:"Professional indemnity insurance"})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{children:"Application Process"}),e.jsx("p",{children:"Complete the online application form with all required information. Processing typically takes 5-10 business days. You will receive email confirmation once your application has been reviewed."})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{children:"Fee Information"}),e.jsx("p",{children:"The application fee is $250 for new applications and $150 for renewals. Payment can be made via credit card or direct debit during the online application process."})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h3",{children:"Ready to Apply?"}),e.jsx("p",{style:{marginBottom:"16px"},children:"Scroll down to see the floating button disappear when this button comes into view. Scroll back up to see it reappear."}),e.jsx(m,{id:"target-apply-button",variant:"primary",label:"Submit Application",iconRight:"fa-light fa-arrow-right",onClick:()=>alert("Application started!")})]}),e.jsxs("div",{style:{marginTop:"40px",padding:"20px",background:"#f5f5f7",borderRadius:"8px",borderLeft:"4px solid #1f1f5f"},children:[e.jsx("strong",{children:"💡 Try it:"})," Scroll down to the Submit Application button above. The floating button will automatically hide. Scroll back up and it will reappear."]})]}),e.jsx(t,{...n})]}),parameters:{docs:{description:{story:"The floating button automatically hides when the user scrolls to the target button in the content. This prevents duplicate CTAs from being visible at the same time and provides a seamless user experience."}}}},c={args:{label:"Need Help? Contact Us",variant:"secondary",iconRight:"fa-light fa-phone",autoHide:!1},render:n=>e.jsxs("div",{style:{height:"600px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",minHeight:"800px"},children:[e.jsx("h2",{children:"Help & Support"}),e.jsx("p",{children:"For pages where you want the CTA always visible, disable auto-hide behavior. This is useful for support pages or help centers."}),e.jsxs("section",{style:{marginTop:"40px"},children:[e.jsx("h3",{children:"Common Questions"}),e.jsx("p",{children:"Browse our frequently asked questions below."})]}),e.jsxs("div",{style:{marginTop:"40px",padding:"20px",background:"#f5f5f7",borderRadius:"8px",borderLeft:"4px solid #1f1f5f"},children:[e.jsx("strong",{children:"Note:"})," This floating button will remain visible regardless of scroll position because autoHide is set to false."]})]}),e.jsx(t,{...n})]}),parameters:{docs:{description:{story:"Set `autoHide={false}` to keep the floating button always visible regardless of scroll position. Useful for help pages or persistent support CTAs."}}}},d={args:{label:"Start Grant Application",variant:"primary",iconRight:"fa-light fa-arrow-right",targetButtonId:"grant-apply-button",autoHide:!0},render:n=>e.jsxs("div",{style:{height:"600px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",minHeight:"1400px"},children:[e.jsx("h1",{children:"Small Business Grant Program"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"About the Grant"}),e.jsx("p",{children:"The Small Business Grant Program provides financial assistance to eligible businesses in the Northern Territory. Grants of up to $10,000 are available for business development, equipment purchases, and skills training."})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Eligibility Criteria"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Business must be registered in the Northern Territory"}),e.jsx("li",{children:"Annual turnover less than $2 million"}),e.jsx("li",{children:"Employing between 1-20 full-time equivalent staff"}),e.jsx("li",{children:"Operating for at least 12 months"}),e.jsx("li",{children:"Current on all tax obligations"})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"What Can the Grant Be Used For?"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Purchase of equipment and technology"}),e.jsx("li",{children:"Staff training and professional development"}),e.jsx("li",{children:"Marketing and promotional activities"}),e.jsx("li",{children:"Consultancy and advisory services"}),e.jsx("li",{children:"Product or service development"})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Application Process"}),e.jsxs("ol",{children:[e.jsx("li",{children:"Review eligibility criteria and required documentation"}),e.jsx("li",{children:"Complete the online application form"}),e.jsx("li",{children:"Upload supporting documents (ABN, financial statements, quotes)"}),e.jsx("li",{children:"Submit application for review"}),e.jsx("li",{children:"Receive decision within 4-6 weeks"})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Important Dates"}),e.jsxs("p",{children:[e.jsx("strong",{children:"Applications Open:"})," 1 March 2026"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Applications Close:"})," 30 June 2026"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Funding Rounds:"})," Quarterly assessment"]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Ready to Apply?"}),e.jsx("p",{style:{marginBottom:"16px"},children:"Make sure you have all required documents ready before starting your application. You can save your progress and return later."}),e.jsx(m,{id:"grant-apply-button",variant:"primary",label:"Start Grant Application",iconRight:"fa-light fa-arrow-right",onClick:()=>alert("Grant application started!")})]}),e.jsxs("section",{children:[e.jsx("h2",{children:"Need Assistance?"}),e.jsx("p",{children:"Contact our grants team if you have questions about eligibility or the application process."})]})]}),e.jsx(t,{...n})]}),parameters:{layout:"fullscreen",docs:{description:{story:"A realistic example showing how the FloatingButton component works in a grant application page. The floating button provides a persistent CTA for users browsing through detailed information, automatically hiding when they reach the application button in the content."}}}},h={args:{label:"Apply for License",variant:"primary",iconRight:"fa-light fa-arrow-right",targetButtonId:"license-apply-button"},render:n=>e.jsxs("div",{style:{height:"600px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",minHeight:"1200px"},children:[e.jsx("h1",{children:"Liquor License Application"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"License Types"}),e.jsx("p",{children:"Choose the appropriate license type for your business operations. Different license types have different requirements and fees."}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("strong",{children:"On-License:"})," For consumption on premises"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Off-License:"})," For takeaway sales only"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Special License:"})," For one-off events"]})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Required Documentation"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Completed application form"}),e.jsx("li",{children:"Floor plan of licensed premises"}),e.jsx("li",{children:"Public liability insurance certificate"}),e.jsx("li",{children:"National Police Certificate for all applicants"}),e.jsx("li",{children:"Lease agreement or proof of ownership"})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Application Fee"}),e.jsx("p",{children:"The application fee varies depending on license type. Fees are non-refundable regardless of application outcome."})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Processing Time"}),e.jsx("p",{children:"Standard applications typically take 8-12 weeks to process. Complex applications may take longer and require additional information."})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Apply Now"}),e.jsx("p",{style:{marginBottom:"16px"},children:"Start your liquor license application online. Ensure you have all required documents ready before beginning."}),e.jsx(m,{id:"license-apply-button",variant:"primary",label:"Apply for License",iconRight:"fa-light fa-arrow-right",onClick:()=>alert("License application started!")})]})]}),e.jsx(t,{...n})]})},u={args:{label:"Download Application Form",variant:"primary",iconLeft:"fa-light fa-download",targetButtonId:"download-form-button"},render:n=>e.jsxs("div",{style:{height:"600px",position:"relative",overflow:"auto"},children:[e.jsxs("div",{style:{padding:"40px",minHeight:"1000px"},children:[e.jsx("h1",{children:"Building Permit Application"}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"How to Apply"}),e.jsx("p",{children:"Download the application form, complete all sections, and submit with required supporting documents to your local council office."})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Form Instructions"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Complete all sections in BLOCK LETTERS"}),e.jsx("li",{children:"Attach certified copies of required documents"}),e.jsx("li",{children:"Include payment for application fee"}),e.jsx("li",{children:"Sign and date the declaration"})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Supporting Documents Required"}),e.jsxs("ul",{children:[e.jsx("li",{children:"Site plan showing proposed development"}),e.jsx("li",{children:"Building plans prepared by licensed builder"}),e.jsx("li",{children:"Soil test results (if applicable)"}),e.jsx("li",{children:"Letter of consent from property owner (if renting)"})]})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Submission"}),e.jsx("p",{children:"Submit completed forms in person at your local council office or mail to: Building Services, PO Box 123, Darwin NT 0800"})]}),e.jsxs("section",{style:{marginBottom:"40px"},children:[e.jsx("h2",{children:"Download Form"}),e.jsx("p",{style:{marginBottom:"16px"},children:"Download the Building Permit Application Form (PDF, 850KB)"}),e.jsx(m,{id:"download-form-button",variant:"primary",label:"Download Application Form",iconLeft:"fa-light fa-download",onClick:()=>alert("Form download started!")})]})]}),e.jsx(t,{...n})]}),parameters:{docs:{description:{story:"Example of using FloatingButton for offline CTAs like downloading application forms. The button provides easy access to download the form from anywhere on the page."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Submit Application",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right"
  },
  render: args => <div style={{
    height: "400px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      paddingBottom: "120px"
    }}>\r
        <h2>Application Page</h2>\r
        <p>Scroll down to see the floating button behavior.</p>\r
        <p>\r
          The floating button component is anchored at the bottom of the screen,\r
          providing a persistent call to action as users browse the content.\r
        </p>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>
}`,...o.parameters?.docs?.source},description:{story:"Default floating button with primary variant",...o.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Learn More",
    variant: "secondary",
    iconRight: "fa-light fa-arrow-right"
  },
  render: args => <div style={{
    height: "400px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      paddingBottom: "120px"
    }}>\r
        <h2>Information Page</h2>\r
        <p>\r
          While primary buttons are recommended for floating buttons, you can\r
          use secondary variant for less prominent actions.\r
        </p>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>
}`,...a.parameters?.docs?.source},description:{story:"Secondary variant for less prominent actions",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Download Form",
    variant: "primary",
    iconLeft: "fa-light fa-download"
  },
  render: args => <div style={{
    height: "400px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      paddingBottom: "120px"
    }}>\r
        <h2>Download Application Form</h2>\r
        <p>\r
          Download and complete the application form. You can submit it online\r
          or mail it to the address provided.\r
        </p>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>
}`,...s.parameters?.docs?.source},description:{story:"Floating button with an icon on the left (e.g., download)",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Continue to Application",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right"
  },
  render: args => <div style={{
    height: "400px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      paddingBottom: "120px"
    }}>\r
        <h2>Ready to Apply?</h2>\r
        <p>\r
          Review the information above and click Continue to start your\r
          application when you're ready.\r
        </p>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>
}`,...l.parameters?.docs?.source},description:{story:"Floating button with an icon on the right (recommended for forward actions)",...l.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Submit Application",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
    targetButtonId: "target-apply-button",
    autoHide: true
  },
  render: args => <div style={{
    height: "600px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      minHeight: "1200px"
    }}>\r
        <h2>Business License Application</h2>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h3>Requirements</h3>\r
          <ul>\r
            <li>Valid ABN or ACN</li>\r
            <li>Proof of identity documents</li>\r
            <li>Business address details</li>\r
            <li>Professional indemnity insurance</li>\r
          </ul>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h3>Application Process</h3>\r
          <p>\r
            Complete the online application form with all required information.\r
            Processing typically takes 5-10 business days. You will receive\r
            email confirmation once your application has been reviewed.\r
          </p>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h3>Fee Information</h3>\r
          <p>\r
            The application fee is $250 for new applications and $150 for\r
            renewals. Payment can be made via credit card or direct debit during\r
            the online application process.\r
          </p>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h3>Ready to Apply?</h3>\r
          <p style={{
          marginBottom: "16px"
        }}>\r
            Scroll down to see the floating button disappear when this button\r
            comes into view. Scroll back up to see it reappear.\r
          </p>\r
          <Button id="target-apply-button" variant="primary" label="Submit Application" iconRight="fa-light fa-arrow-right" onClick={() => alert("Application started!")} />\r
        </section>\r
\r
        <div style={{
        marginTop: "40px",
        padding: "20px",
        background: "#f5f5f7",
        borderRadius: "8px",
        borderLeft: "4px solid #1f1f5f"
      }}>\r
          <strong>💡 Try it:</strong> Scroll down to the Submit Application\r
          button above. The floating button will automatically hide. Scroll back\r
          up and it will reappear.\r
        </div>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "The floating button automatically hides when the user scrolls to the target button in the content. This prevents duplicate CTAs from being visible at the same time and provides a seamless user experience."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Demonstrates the auto-hide behavior when scrolling to target button",...p.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Need Help? Contact Us",
    variant: "secondary",
    iconRight: "fa-light fa-phone",
    autoHide: false
  },
  render: args => <div style={{
    height: "600px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      minHeight: "800px"
    }}>\r
        <h2>Help & Support</h2>\r
        <p>\r
          For pages where you want the CTA always visible, disable auto-hide\r
          behavior. This is useful for support pages or help centers.\r
        </p>\r
\r
        <section style={{
        marginTop: "40px"
      }}>\r
          <h3>Common Questions</h3>\r
          <p>Browse our frequently asked questions below.</p>\r
        </section>\r
\r
        <div style={{
        marginTop: "40px",
        padding: "20px",
        background: "#f5f5f7",
        borderRadius: "8px",
        borderLeft: "4px solid #1f1f5f"
      }}>\r
          <strong>Note:</strong> This floating button will remain visible\r
          regardless of scroll position because autoHide is set to false.\r
        </div>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Set \`autoHide={false}\` to keep the floating button always visible regardless of scroll position. Useful for help pages or persistent support CTAs."
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:"Always visible floating button (auto-hide disabled)",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Start Grant Application",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
    targetButtonId: "grant-apply-button",
    autoHide: true
  },
  render: args => <div style={{
    height: "600px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      minHeight: "1400px"
    }}>\r
        <h1>Small Business Grant Program</h1>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>About the Grant</h2>\r
          <p>\r
            The Small Business Grant Program provides financial assistance to\r
            eligible businesses in the Northern Territory. Grants of up to\r
            $10,000 are available for business development, equipment purchases,\r
            and skills training.\r
          </p>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Eligibility Criteria</h2>\r
          <ul>\r
            <li>Business must be registered in the Northern Territory</li>\r
            <li>Annual turnover less than $2 million</li>\r
            <li>Employing between 1-20 full-time equivalent staff</li>\r
            <li>Operating for at least 12 months</li>\r
            <li>Current on all tax obligations</li>\r
          </ul>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>What Can the Grant Be Used For?</h2>\r
          <ul>\r
            <li>Purchase of equipment and technology</li>\r
            <li>Staff training and professional development</li>\r
            <li>Marketing and promotional activities</li>\r
            <li>Consultancy and advisory services</li>\r
            <li>Product or service development</li>\r
          </ul>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Application Process</h2>\r
          <ol>\r
            <li>Review eligibility criteria and required documentation</li>\r
            <li>Complete the online application form</li>\r
            <li>\r
              Upload supporting documents (ABN, financial statements, quotes)\r
            </li>\r
            <li>Submit application for review</li>\r
            <li>Receive decision within 4-6 weeks</li>\r
          </ol>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Important Dates</h2>\r
          <p>\r
            <strong>Applications Open:</strong> 1 March 2026\r
          </p>\r
          <p>\r
            <strong>Applications Close:</strong> 30 June 2026\r
          </p>\r
          <p>\r
            <strong>Funding Rounds:</strong> Quarterly assessment\r
          </p>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Ready to Apply?</h2>\r
          <p style={{
          marginBottom: "16px"
        }}>\r
            Make sure you have all required documents ready before starting your\r
            application. You can save your progress and return later.\r
          </p>\r
          <Button id="grant-apply-button" variant="primary" label="Start Grant Application" iconRight="fa-light fa-arrow-right" onClick={() => alert("Grant application started!")} />\r
        </section>\r
\r
        <section>\r
          <h2>Need Assistance?</h2>\r
          <p>\r
            Contact our grants team if you have questions about eligibility or\r
            the application process.\r
          </p>\r
        </section>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "A realistic example showing how the FloatingButton component works in a grant application page. The floating button provides a persistent CTA for users browsing through detailed information, automatically hiding when they reach the application button in the content."
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:"Real-world example: Grant Application Page",...d.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Apply for License",
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
    targetButtonId: "license-apply-button"
  },
  render: args => <div style={{
    height: "600px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      minHeight: "1200px"
    }}>\r
        <h1>Liquor License Application</h1>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>License Types</h2>\r
          <p>\r
            Choose the appropriate license type for your business operations.\r
            Different license types have different requirements and fees.\r
          </p>\r
          <ul>\r
            <li>\r
              <strong>On-License:</strong> For consumption on premises\r
            </li>\r
            <li>\r
              <strong>Off-License:</strong> For takeaway sales only\r
            </li>\r
            <li>\r
              <strong>Special License:</strong> For one-off events\r
            </li>\r
          </ul>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Required Documentation</h2>\r
          <ul>\r
            <li>Completed application form</li>\r
            <li>Floor plan of licensed premises</li>\r
            <li>Public liability insurance certificate</li>\r
            <li>National Police Certificate for all applicants</li>\r
            <li>Lease agreement or proof of ownership</li>\r
          </ul>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Application Fee</h2>\r
          <p>\r
            The application fee varies depending on license type. Fees are\r
            non-refundable regardless of application outcome.\r
          </p>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Processing Time</h2>\r
          <p>\r
            Standard applications typically take 8-12 weeks to process. Complex\r
            applications may take longer and require additional information.\r
          </p>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Apply Now</h2>\r
          <p style={{
          marginBottom: "16px"
        }}>\r
            Start your liquor license application online. Ensure you have all\r
            required documents ready before beginning.\r
          </p>\r
          <Button id="license-apply-button" variant="primary" label="Apply for License" iconRight="fa-light fa-arrow-right" onClick={() => alert("License application started!")} />\r
        </section>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>
}`,...h.parameters?.docs?.source},description:{story:"License Permit Application Example",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Download Application Form",
    variant: "primary",
    iconLeft: "fa-light fa-download",
    targetButtonId: "download-form-button"
  },
  render: args => <div style={{
    height: "600px",
    position: "relative",
    overflow: "auto"
  }}>\r
      <div style={{
      padding: "40px",
      minHeight: "1000px"
    }}>\r
        <h1>Building Permit Application</h1>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>How to Apply</h2>\r
          <p>\r
            Download the application form, complete all sections, and submit\r
            with required supporting documents to your local council office.\r
          </p>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Form Instructions</h2>\r
          <ul>\r
            <li>Complete all sections in BLOCK LETTERS</li>\r
            <li>Attach certified copies of required documents</li>\r
            <li>Include payment for application fee</li>\r
            <li>Sign and date the declaration</li>\r
          </ul>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Supporting Documents Required</h2>\r
          <ul>\r
            <li>Site plan showing proposed development</li>\r
            <li>Building plans prepared by licensed builder</li>\r
            <li>Soil test results (if applicable)</li>\r
            <li>Letter of consent from property owner (if renting)</li>\r
          </ul>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Submission</h2>\r
          <p>\r
            Submit completed forms in person at your local council office or\r
            mail to: Building Services, PO Box 123, Darwin NT 0800\r
          </p>\r
        </section>\r
\r
        <section style={{
        marginBottom: "40px"
      }}>\r
          <h2>Download Form</h2>\r
          <p style={{
          marginBottom: "16px"
        }}>\r
            Download the Building Permit Application Form (PDF, 850KB)\r
          </p>\r
          <Button id="download-form-button" variant="primary" label="Download Application Form" iconLeft="fa-light fa-download" onClick={() => alert("Form download started!")} />\r
        </section>\r
      </div>\r
      <FloatingButton {...args} />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Example of using FloatingButton for offline CTAs like downloading application forms. The button provides easy access to download the form from anywhere on the page."
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:"Download Form Example (offline CTA)",...u.parameters?.docs?.description}}};const I=["Primary","Secondary","WithIconLeft","WithIconRight","WithAutoHideBehavior","AlwaysVisible","GrantApplicationExample","LicenseApplicationExample","DownloadFormExample"];export{c as AlwaysVisible,u as DownloadFormExample,d as GrantApplicationExample,h as LicenseApplicationExample,o as Primary,a as Secondary,p as WithAutoHideBehavior,s as WithIconLeft,l as WithIconRight,I as __namedExportsOrder,H as default};
