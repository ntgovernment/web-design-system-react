import{j as e}from"./iframe-gih_HNq7.js";import{I as h}from"./Icon-odGput1x.js";import"./preload-helper-DhH6u7hw.js";const t=({variant:l="info",title:m,message:p,className:d,...u})=>{const g={info:"fa-light fa-circle-info",success:"fa-light fa-circle-check",warning:"fa-light fa-triangle-exclamation",danger:"fa-light fa-circle-exclamation"},f=`notification notification--${l}${d?` ${d}`:""}`;return e.jsxs("div",{className:f,role:"status",...u,children:[e.jsx("div",{className:"notification__accent-bar","aria-hidden":"true"}),e.jsx("div",{className:"notification__content",children:e.jsxs("div",{className:"notification__header",children:[e.jsx("div",{className:"notification__icon","aria-hidden":"true",children:e.jsx(h,{icon:g[l]})}),e.jsxs("div",{className:"notification__text",children:[e.jsx("div",{className:"notification__title",children:m}),e.jsx("div",{className:"notification__message",children:p})]})]})})]})};t.__docgenInfo={description:"Notification component for displaying informational callouts with status indicators",methods:[],displayName:"Notification",props:{variant:{required:!1,tsType:{name:"union",raw:'"info" | "success" | "warning" | "danger"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"success"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"danger"'}]},description:"The variant/status type of the notification",defaultValue:{value:'"info"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"The title/heading of the notification"},message:{required:!0,tsType:{name:"string"},description:"The message content of the notification"}}};const x={title:"Components/Notification",component:t,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","success","warning","danger"],description:"The variant/status type of the notification"},title:{control:"text",description:"The title/heading of the notification"},message:{control:"text",description:"The message content of the notification"}}},i={args:{variant:"info",title:"Information alert",message:"Your application has been submitted for review. You will receive an email notification once the review process is complete. This typically takes 2-3 business days."}},n={args:{variant:"success",title:"Success notification",message:"Your action was completed successfully. All changes have been saved and are now live."}},a={args:{variant:"warning",title:"Warning notification",message:"Please review the following information carefully before proceeding. Some actions may be irreversible."}},s={args:{variant:"danger",title:"Error notification",message:"An error has occurred while processing your request. Please try again or contact support if the issue persists."}},o={args:{variant:"info",title:"Information alert",message:"Callout content."},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsx(t,{variant:"info",title:"Information alert",message:"Your application has been submitted for review. You will receive an email notification once the review process is complete."}),e.jsx(t,{variant:"success",title:"Success notification",message:"Your action was completed successfully. All changes have been saved and are now live."}),e.jsx(t,{variant:"warning",title:"Warning notification",message:"Please review the following information carefully before proceeding. Some actions may be irreversible."}),e.jsx(t,{variant:"danger",title:"Error notification",message:"An error has occurred while processing your request. Please try again or contact support."})]})},r={args:{variant:"info",title:"Extended information notification with a longer title",message:"This notification demonstrates how the component handles extended content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography. When displaying detailed information, the component ensures users can easily read and understand the message without compromising the design integrity. Use longer notifications when you need to provide detailed context or instructions about system status, user actions, or important updates. The notification system is designed to accommodate varying content lengths while maintaining consistent visual presentation across all variants."}},c={args:{variant:"success",title:"Saved",message:"Your changes have been saved."}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information alert",
    message: "Your application has been submitted for review. You will receive an email notification once the review process is complete. This typically takes 2-3 business days."
  }
}`,...i.parameters?.docs?.source},description:{story:"Default notification with info variant",...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Success notification",
    message: "Your action was completed successfully. All changes have been saved and are now live."
  }
}`,...n.parameters?.docs?.source},description:{story:"Success notification",...n.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Warning notification",
    message: "Please review the following information carefully before proceeding. Some actions may be irreversible."
  }
}`,...a.parameters?.docs?.source},description:{story:"Warning notification",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "danger",
    title: "Error notification",
    message: "An error has occurred while processing your request. Please try again or contact support if the issue persists."
  }
}`,...s.parameters?.docs?.source},description:{story:"Danger notification",...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Information alert",
    message: "Callout content."
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
      <Notification variant="info" title="Information alert" message="Your application has been submitted for review. You will receive an email notification once the review process is complete." />\r
      <Notification variant="success" title="Success notification" message="Your action was completed successfully. All changes have been saved and are now live." />\r
      <Notification variant="warning" title="Warning notification" message="Please review the following information carefully before proceeding. Some actions may be irreversible." />\r
      <Notification variant="danger" title="Error notification" message="An error has occurred while processing your request. Please try again or contact support." />\r
    </div>
}`,...o.parameters?.docs?.source},description:{story:"All variants displayed together",...o.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Extended information notification with a longer title",
    message: "This notification demonstrates how the component handles extended content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography. When displaying detailed information, the component ensures users can easily read and understand the message without compromising the design integrity. Use longer notifications when you need to provide detailed context or instructions about system status, user actions, or important updates. The notification system is designed to accommodate varying content lengths while maintaining consistent visual presentation across all variants."
  }
}`,...r.parameters?.docs?.source},description:{story:"Notification with long content to demonstrate text wrapping",...r.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "success",
    title: "Saved",
    message: "Your changes have been saved."
  }
}`,...c.parameters?.docs?.source},description:{story:"Short and concise notification",...c.parameters?.docs?.description}}};const b=["Default","Success","Warning","Danger","AllVariants","LongContent","ShortContent"];export{o as AllVariants,s as Danger,i as Default,r as LongContent,c as ShortContent,n as Success,a as Warning,b as __namedExportsOrder,x as default};
