import{j as e}from"./iframe-lBeUY_a6.js";import"./preload-helper-DhH6u7hw.js";const d=({steps:u,className:p,...m})=>{const y=`step-list${p?` ${p}`:""}`;return e.jsx("div",{className:y,...m,children:u.map((t,f)=>e.jsxs("div",{className:"step-list__item",children:[e.jsx("div",{className:"step-list__step-number-section",children:e.jsx("div",{className:"step-list__step-circle",children:e.jsx("span",{className:"step-list__step-number",children:t.stepNumber})})}),e.jsxs("div",{className:"step-list__content",children:[e.jsxs("div",{className:"step-list__title-wrapper",children:[e.jsxs("span",{className:"step-list__step-label",children:["Step ",t.stepNumber,"."]}),e.jsx("span",{className:"step-list__title",children:t.title})]}),t.content?.description&&e.jsx("div",{className:"step-list__description",children:t.content.description})]})]},f))})};d.__docgenInfo={description:`StepList component for displaying sequential processes or multi-step workflows.\r
\r
Presents content in a progression of steps where a process or application requires\r
a sequential, multi-step approach. Each step includes:\r
- Step number in a circle\r
- Step title\r
- Optional description`,methods:[],displayName:"StepList",props:{steps:{required:!0,tsType:{name:"Array",elements:[{name:"StepListItem"}],raw:"StepListItem[]"},description:"Array of step items to display"}}};const v={title:"Components/StepList",component:d,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{steps:{control:"object",description:"Array of step items containing step numbers, titles, descriptions, and optional info boxes"},className:{control:"text",description:"Additional CSS classes to apply to the step list container"}}},n={args:{steps:[{stepNumber:1,title:"Prepare Your Documents",content:{description:"Gather your proof of identity and supporting documents before starting your application. You will need a current driver license or passport, and proof of Northern Territory residency dated within the last 3 months."}},{stepNumber:2,title:"Complete Online Form",content:{description:"Fill out the application form with your personal details and contact information. You can save your application and return later using the reference number provided."}},{stepNumber:3,title:"Upload Documents",content:{description:"Attach scanned copies or clear photos of your identification and supporting documents. Accepted formats include PDF, JPG, and PNG with a maximum file size of 5MB per document."}},{stepNumber:4,title:"Submit and Track",content:{description:"Review your application, submit, and receive a confirmation email with your application reference number. Most applications are processed within 5-10 business days."}}]}},i={args:{steps:[{stepNumber:1,title:"Create MyNTG Account"},{stepNumber:2,title:"Verify Your Email Address"},{stepNumber:3,title:"Link Your Services"},{stepNumber:4,title:"Access Your Dashboard"}]}},o={args:{steps:[{stepNumber:1,title:"Register Your Business",content:{description:"Provide your business name, type, and registered address. This information must match your official business registration documents. You will also need to specify your business structure and primary industry category."}},{stepNumber:2,title:"Upload Documentation",content:{description:"Upload supporting documents including business license, tax identification number, and proof of address. Ensure all documents are current and clearly legible. Accepted formats include PDF, JPG, and PNG files up to 5MB each."}},{stepNumber:3,title:"Request Review",content:{description:"Submit your application for review. Our verification team will examine all documents and may contact you if additional information is required. The review process typically takes 5-7 business days."}},{stepNumber:4,title:"Receive Confirmation",content:{description:"Once approved, you will receive your business registration number via email. You can then access NT Government online business services and portals using your new credentials."}}]}},s={args:{steps:[{stepNumber:1,title:"Gather Documents",content:{description:"You will need recent identification documents and proof of residency. Accepted documents include driver license, passport, birth certificate, or utilities bill dated within 3 months."}},{stepNumber:2,title:"Submit Application",content:{description:"Submit your application form with all required documents attached. Each file must not exceed 5 MB, and you can upload multiple files per document type."}},{stepNumber:3,title:"Attend Interview",content:{description:"A representative will contact you to schedule an interview at a convenient time. The interview typically takes 20-30 minutes and can be conducted online or in person."}},{stepNumber:4,title:"Receive Decision",content:{description:"You will be notified of the outcome within 2 weeks of your interview. If approved, your approval letter will be sent via email and you can access online services immediately."}}]}},r={args:{steps:[{stepNumber:1,title:"Personal Information",content:{description:"Enter your full legal name, date of birth, and contact information. Ensure all details match your official identification documents to avoid processing delays. Your personal information will be securely stored and used only for processing this application in accordance with the Privacy Act."}},{stepNumber:2,title:"Employment History",content:{description:"List your last three positions, including employer names, job titles, dates of employment, and key responsibilities. If you have employment gaps, please explain them in the additional information section. We may contact your previous employers to verify your employment history and job performance."}},{stepNumber:3,title:"Education and Qualifications",content:{description:"Provide details of your educational qualifications, including certificates, diplomas, and degrees. Upload evidence of qualifications if you have them, as this will speed up processing. If your qualifications are from outside Australia, you may need to provide official recognition documents from relevant professional bodies."}},{stepNumber:4,title:"Reference Submission",content:{description:"Provide contact details for two professional referees who can speak to your work experience and professional conduct. Referees should not be family members. Our team will contact your referees directly, so ensure they are available and aware they may receive a call or email regarding this application."}},{stepNumber:5,title:"Final Review and Submission",content:{description:"Review all information provided to ensure accuracy and completeness. Once submitted, you will receive a confirmation number and your application cannot be edited. You will receive status updates via email, and processing typically takes 4-6 weeks from submission date."}}]}},a={args:{steps:[{stepNumber:1,title:"Check Eligibility",content:{description:"Review the eligibility requirements. You must be an Australian resident and meet the income thresholds for this service."}},{stepNumber:2,title:"Complete Application Form",content:{description:"Fill out the application form with your details, contact information, and reason for applying. If you need help completing the form, contact our support team at 1300 123 456 or visit an office near you."}},{stepNumber:3,title:"Submit Required Documents",content:{description:"Provide proof of identity, income verification, and any other supporting documents as requested."}},{stepNumber:4,title:"Assessment",content:{description:"Our team will assess your application. You may be contacted for additional information. Initial assessment takes 10 business days, though complex cases may take up to 4 weeks."}},{stepNumber:5,title:"Decision Notification",content:{description:"You will receive a formal letter detailing the decision and next steps."}}]}},c={args:{steps:[{stepNumber:1,title:"Access Online Portal",content:{description:"Visit the NT Government services website and log in to your account."}},{stepNumber:2,title:"Select Service Request",content:{description:"Choose the service you need from the available options in your dashboard."}},{stepNumber:3,title:"Submit Request",content:{description:"Complete the form and submit your request. You will receive immediate email confirmation."}}]}},l={args:{steps:[{stepNumber:1,title:"Check Renewal Eligibility",content:{description:"Verify that your license is valid and eligible for renewal. Your renewal notice has been sent to your registered address. You can renew your license up to 3 months before the expiry date."}},{stepNumber:2,title:"Complete Renewal Form",content:{description:"Use the online renewal form to update your personal details, address, and contact information if needed. Ensure your current address is recorded as your new license will be sent to this address."}},{stepNumber:3,title:"Pay Renewal Fee",content:{description:"Pay the renewal fee online using a credit card, debit card, or BPAY. Use your renewal notice reference number as the BPAY biller code. Fees vary by license type, and additional late fees apply if paid after expiry date."}},{stepNumber:4,title:"Receive New License",content:{description:"Your new license will be posted to your registered address within 5-7 business days of receiving payment. If you need to drive immediately, you can print an interim license from your online account."}}]}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      stepNumber: 1,
      title: "Prepare Your Documents",
      content: {
        description: "Gather your proof of identity and supporting documents before starting your application. You will need a current driver license or passport, and proof of Northern Territory residency dated within the last 3 months."
      }
    }, {
      stepNumber: 2,
      title: "Complete Online Form",
      content: {
        description: "Fill out the application form with your personal details and contact information. You can save your application and return later using the reference number provided."
      }
    }, {
      stepNumber: 3,
      title: "Upload Documents",
      content: {
        description: "Attach scanned copies or clear photos of your identification and supporting documents. Accepted formats include PDF, JPG, and PNG with a maximum file size of 5MB per document."
      }
    }, {
      stepNumber: 4,
      title: "Submit and Track",
      content: {
        description: "Review your application, submit, and receive a confirmation email with your application reference number. Most applications are processed within 5-10 business days."
      }
    }]
  }
}`,...n.parameters?.docs?.source},description:{story:"Default step list showing a government service application process",...n.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      stepNumber: 1,
      title: "Create MyNTG Account"
    }, {
      stepNumber: 2,
      title: "Verify Your Email Address"
    }, {
      stepNumber: 3,
      title: "Link Your Services"
    }, {
      stepNumber: 4,
      title: "Access Your Dashboard"
    }]
  }
}`,...i.parameters?.docs?.source},description:{story:"Simple step list with minimal content - just titles",...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      stepNumber: 1,
      title: "Register Your Business",
      content: {
        description: "Provide your business name, type, and registered address. This information must match your official business registration documents. You will also need to specify your business structure and primary industry category."
      }
    }, {
      stepNumber: 2,
      title: "Upload Documentation",
      content: {
        description: "Upload supporting documents including business license, tax identification number, and proof of address. Ensure all documents are current and clearly legible. Accepted formats include PDF, JPG, and PNG files up to 5MB each."
      }
    }, {
      stepNumber: 3,
      title: "Request Review",
      content: {
        description: "Submit your application for review. Our verification team will examine all documents and may contact you if additional information is required. The review process typically takes 5-7 business days."
      }
    }, {
      stepNumber: 4,
      title: "Receive Confirmation",
      content: {
        description: "Once approved, you will receive your business registration number via email. You can then access NT Government online business services and portals using your new credentials."
      }
    }]
  }
}`,...o.parameters?.docs?.source},description:{story:"Steps with descriptions but without info boxes",...o.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      stepNumber: 1,
      title: "Gather Documents",
      content: {
        description: "You will need recent identification documents and proof of residency. Accepted documents include driver license, passport, birth certificate, or utilities bill dated within 3 months."
      }
    }, {
      stepNumber: 2,
      title: "Submit Application",
      content: {
        description: "Submit your application form with all required documents attached. Each file must not exceed 5 MB, and you can upload multiple files per document type."
      }
    }, {
      stepNumber: 3,
      title: "Attend Interview",
      content: {
        description: "A representative will contact you to schedule an interview at a convenient time. The interview typically takes 20-30 minutes and can be conducted online or in person."
      }
    }, {
      stepNumber: 4,
      title: "Receive Decision",
      content: {
        description: "You will be notified of the outcome within 2 weeks of your interview. If approved, your approval letter will be sent via email and you can access online services immediately."
      }
    }]
  }
}`,...s.parameters?.docs?.source},description:{story:"Steps with detailed descriptions",...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      stepNumber: 1,
      title: "Personal Information",
      content: {
        description: "Enter your full legal name, date of birth, and contact information. Ensure all details match your official identification documents to avoid processing delays. Your personal information will be securely stored and used only for processing this application in accordance with the Privacy Act."
      }
    }, {
      stepNumber: 2,
      title: "Employment History",
      content: {
        description: "List your last three positions, including employer names, job titles, dates of employment, and key responsibilities. If you have employment gaps, please explain them in the additional information section. We may contact your previous employers to verify your employment history and job performance."
      }
    }, {
      stepNumber: 3,
      title: "Education and Qualifications",
      content: {
        description: "Provide details of your educational qualifications, including certificates, diplomas, and degrees. Upload evidence of qualifications if you have them, as this will speed up processing. If your qualifications are from outside Australia, you may need to provide official recognition documents from relevant professional bodies."
      }
    }, {
      stepNumber: 4,
      title: "Reference Submission",
      content: {
        description: "Provide contact details for two professional referees who can speak to your work experience and professional conduct. Referees should not be family members. Our team will contact your referees directly, so ensure they are available and aware they may receive a call or email regarding this application."
      }
    }, {
      stepNumber: 5,
      title: "Final Review and Submission",
      content: {
        description: "Review all information provided to ensure accuracy and completeness. Once submitted, you will receive a confirmation number and your application cannot be edited. You will receive status updates via email, and processing typically takes 4-6 weeks from submission date."
      }
    }]
  }
}`,...r.parameters?.docs?.source},description:{story:"Long form application process with comprehensive descriptions",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      stepNumber: 1,
      title: "Check Eligibility",
      content: {
        description: "Review the eligibility requirements. You must be an Australian resident and meet the income thresholds for this service."
      }
    }, {
      stepNumber: 2,
      title: "Complete Application Form",
      content: {
        description: "Fill out the application form with your details, contact information, and reason for applying. If you need help completing the form, contact our support team at 1300 123 456 or visit an office near you."
      }
    }, {
      stepNumber: 3,
      title: "Submit Required Documents",
      content: {
        description: "Provide proof of identity, income verification, and any other supporting documents as requested."
      }
    }, {
      stepNumber: 4,
      title: "Assessment",
      content: {
        description: "Our team will assess your application. You may be contacted for additional information. Initial assessment takes 10 business days, though complex cases may take up to 4 weeks."
      }
    }, {
      stepNumber: 5,
      title: "Decision Notification",
      content: {
        description: "You will receive a formal letter detailing the decision and next steps."
      }
    }]
  }
}`,...a.parameters?.docs?.source},description:{story:"Service application with consistent plain descriptions",...a.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      stepNumber: 1,
      title: "Access Online Portal",
      content: {
        description: "Visit the NT Government services website and log in to your account."
      }
    }, {
      stepNumber: 2,
      title: "Select Service Request",
      content: {
        description: "Choose the service you need from the available options in your dashboard."
      }
    }, {
      stepNumber: 3,
      title: "Submit Request",
      content: {
        description: "Complete the form and submit your request. You will receive immediate email confirmation."
      }
    }]
  }
}`,...c.parameters?.docs?.source},description:{story:"Quick process with fewer steps and plain descriptions",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    steps: [{
      stepNumber: 1,
      title: "Check Renewal Eligibility",
      content: {
        description: "Verify that your license is valid and eligible for renewal. Your renewal notice has been sent to your registered address. You can renew your license up to 3 months before the expiry date."
      }
    }, {
      stepNumber: 2,
      title: "Complete Renewal Form",
      content: {
        description: "Use the online renewal form to update your personal details, address, and contact information if needed. Ensure your current address is recorded as your new license will be sent to this address."
      }
    }, {
      stepNumber: 3,
      title: "Pay Renewal Fee",
      content: {
        description: "Pay the renewal fee online using a credit card, debit card, or BPAY. Use your renewal notice reference number as the BPAY biller code. Fees vary by license type, and additional late fees apply if paid after expiry date."
      }
    }, {
      stepNumber: 4,
      title: "Receive New License",
      content: {
        description: "Your new license will be posted to your registered address within 5-7 business days of receiving payment. If you need to drive immediately, you can print an interim license from your online account."
      }
    }]
  }
}`,...l.parameters?.docs?.source},description:{story:"Government license renewal process",...l.parameters?.docs?.description}}};const w=["Default","SimpleTitlesOnly","WithDescriptions","WithDetailedDescriptions","LongFormProcess","ServiceApplication","QuickProcess","LicenseRenewal"];export{n as Default,l as LicenseRenewal,r as LongFormProcess,c as QuickProcess,a as ServiceApplication,i as SimpleTitlesOnly,o as WithDescriptions,s as WithDetailedDescriptions,w as __namedExportsOrder,v as default};
