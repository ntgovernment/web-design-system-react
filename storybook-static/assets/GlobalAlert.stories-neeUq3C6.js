import{j as e}from"./iframe-BGlN-Xn9.js";import{I as L}from"./Icon-uzMeCDpH.js";import{B as _}from"./Button-3dy9nlmO.js";import"./preload-helper-DhH6u7hw.js";const i=({variant:D="info",title:W,description:C,dismissible:E=!1,onDismiss:P,dismissLabel:V="Dismiss alert",ctaText:k,ctaOnClick:N,ctaHref:S,className:I,...O})=>{const M=`global-alert global-alert--${D}${I?` ${I}`:""}`;return e.jsx("div",{className:M,role:"alert",...O,children:e.jsxs("div",{className:"global-alert__container",children:[e.jsxs("div",{className:"global-alert__content",children:[e.jsxs("div",{className:"global-alert__text",children:[e.jsx("div",{className:"global-alert__title",children:W}),e.jsx("div",{className:"global-alert__description",children:typeof C=="string"?e.jsx("span",{dangerouslySetInnerHTML:{__html:C}}):C})]}),k&&e.jsx("div",{className:"global-alert__actions",children:S?e.jsx("a",{href:S,className:"btn btn-secondary global-alert__cta",children:k}):e.jsx(_,{variant:"secondary",label:k,onClick:N,className:"global-alert__cta"})})]}),E&&e.jsx("button",{type:"button",className:"global-alert__dismiss",onClick:P,"aria-label":V,children:e.jsx(L,{icon:"fa-light fa-xmark"})})]})})};i.__docgenInfo={description:`GlobalAlert component\r
\r
A prominent notification displayed across the entire site to communicate important information.\r
Sitting above the header at the top of a website, it informs users about something that affects\r
the entire website, service, or all users.\r
\r
Usage:\r
- Use sparingly as they are intrusive to a user's workflow\r
- Make copy clear and concise with key actionable information visible at a glance\r
- Include a link to follow up information or a call to action wherever possible\r
- Limit to one global alert per site, but up to three can be stacked if necessary`,methods:[],displayName:"GlobalAlert",props:{variant:{required:!1,tsType:{name:"union",raw:'"info" | "info-alt" | "warning" | "critical"',elements:[{name:"literal",value:'"info"'},{name:"literal",value:'"info-alt"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"critical"'}]},description:`Alert variant\r
- info: Low-level alerts for minor problems or updates (solid blue)\r
- info-alt: Alternative information variant (light blue)\r
- warning: Events that pose a threat or seriously affect a service\r
- critical: Immediate, significant threats to the community`,defaultValue:{value:'"info"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Alert title"},description:{required:!0,tsType:{name:"string"},description:"Alert description content"},dismissible:{required:!1,tsType:{name:"boolean"},description:"Optional dismiss button",defaultValue:{value:"false",computed:!1}},onDismiss:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Dismiss button click handler"},dismissLabel:{required:!1,tsType:{name:"string"},description:"Dismiss button aria label",defaultValue:{value:'"Dismiss alert"',computed:!1}},ctaText:{required:!1,tsType:{name:"string"},description:"Optional CTA button text"},ctaOnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"CTA button click handler"},ctaHref:{required:!1,tsType:{name:"string"},description:"CTA button href"}}};const q={title:"Components/GlobalAlert",component:i,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["info","info-alt","warning","critical"],description:"Alert variant/severity level"},title:{control:"text",description:"Alert title"},description:{control:"text",description:"Alert description content"},dismissible:{control:"boolean",description:"Show dismiss button"},dismissLabel:{control:"text",description:"Dismiss button aria label"},ctaText:{control:"text",description:"Optional CTA button text"}}},t={args:{variant:"info",title:"System Maintenance Scheduled",description:"This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant link to provide user with <a href='#'>More information</a>"}},r={args:{variant:"info",title:"Service Update Available",description:"A new version of our online services portal is now available. The update includes improved accessibility features and enhanced security. <a href='#'>Learn more about the updates</a>"}},a={args:{variant:"info",title:"New Features Available",description:"We have added new features to improve your experience on NT.GOV.AU. Explore the updated navigation and enhanced search capabilities. <a href='#'>View feature guide</a>",dismissible:!0,onDismiss:()=>console.log("Alert dismissed")}},s={args:{variant:"info",title:"Complete Your Profile",description:"Help us serve you better by completing your user profile. This will enable personalized services and faster processing of your applications.",ctaText:"Update Profile",ctaOnClick:()=>console.log("CTA clicked")}},n={args:{variant:"info",title:"Annual Survey Now Open",description:"Share your feedback on NT Government services. Your input helps us improve our services to better meet community needs. <a href='#'>Read privacy statement</a>",ctaText:"Take Survey",ctaOnClick:()=>console.log("CTA clicked"),dismissible:!0,onDismiss:()=>console.log("Alert dismissed")}},o={args:{variant:"info-alt",title:"Service Update Available",description:"A new version of our online services portal is now available. The update includes improved accessibility features and enhanced security. <a href='#'>Learn more about the updates</a>"}},l={args:{variant:"info-alt",title:"New Features Available",description:"We have added new features to improve your experience on NT.GOV.AU. Explore the updated navigation and enhanced search capabilities. <a href='#'>View feature guide</a>",dismissible:!0,onDismiss:()=>console.log("Alert dismissed")}},c={args:{variant:"info-alt",title:"Complete Your Profile",description:"Help us serve you better by completing your user profile. This will enable personalized services and faster processing of your applications.",ctaText:"Update Profile",ctaOnClick:()=>console.log("CTA clicked")}},d={args:{variant:"info-alt",title:"Annual Survey Now Open",description:"Share your feedback on NT Government services. Your input helps us improve our services to better meet community needs. <a href='#'>Read privacy statement</a>",ctaText:"Take Survey",ctaOnClick:()=>console.log("CTA clicked"),dismissible:!0,onDismiss:()=>console.log("Alert dismissed")}},m={args:{variant:"warning",title:"Service Disruption Expected",description:"Due to planned system maintenance, some online services may be unavailable between 11 PM tonight and 2 AM tomorrow. Please plan accordingly and complete any urgent transactions before maintenance begins. <a href='#'>View affected services</a>"}},p={args:{variant:"warning",title:"Severe Weather Alert",description:"A severe weather warning has been issued for the Darwin region. Road closures and service disruptions are possible. Please monitor updates and take necessary precautions.",dismissible:!0,onDismiss:()=>console.log("Alert dismissed")}},u={args:{variant:"warning",title:"Action Required: License Expiring Soon",description:"Your professional license expires in 14 days. Renew now to avoid service interruptions and potential penalties. Processing times may vary during peak periods.",ctaText:"Renew License",ctaHref:"#renew"}},f={args:{variant:"warning",title:"Urgent: System Migration in Progress",description:"We are migrating to a new system to improve reliability and performance. Some features may be temporarily limited. Your patience is appreciated during this transition. <a href='#'>View migration timeline</a>",ctaText:"Check System Status",ctaOnClick:()=>console.log("CTA clicked"),dismissible:!0,onDismiss:()=>console.log("Alert dismissed")}},g={args:{variant:"critical",title:"Emergency: Bushfire Warning",description:"An emergency bushfire warning is in effect for Litchfield and surrounding areas. Residents should evacuate immediately and follow emergency service directions. <a href='#'>View evacuation centers</a>"}},h={args:{variant:"critical",title:"Critical Weather Event",description:"A Category 4 cyclone is approaching the Northern Territory coast. All residents in affected areas must take immediate action to secure property and relocate to designated shelters.",dismissible:!0,onDismiss:()=>console.log("Alert dismissed")}},v={args:{variant:"critical",title:"Public Health Emergency",description:"A public health emergency has been declared. All residents are advised to follow health authority guidelines and monitor official channels for updates on containment measures and safety protocols.",ctaText:"View Health Guidelines",ctaHref:"#health"}},y={args:{variant:"critical",title:"Emergency Alert: Immediate Action Required",description:"A significant emergency situation is developing that requires immediate community action. Please follow all instructions from emergency services and monitor official channels for real-time updates. <a href='#'>Emergency contact information</a>",ctaText:"View Emergency Information",ctaOnClick:()=>console.log("CTA clicked"),dismissible:!0,onDismiss:()=>console.log("Alert dismissed")}},b={args:{variant:"info",title:"Extended Service Announcement: Important Updates",description:"This global alert demonstrates how the component handles extended content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. When communicating important information that affects all users of the website or service, it's essential to provide clear, comprehensive details while keeping the message concise and actionable. Include relevant links to supporting documentation where users can find additional context, resources, or step-by-step instructions. <a href='#'>Read the full announcement</a> for detailed information about this update and its impact on your use of NT Government services.",ctaText:"Learn More",ctaOnClick:()=>console.log("CTA clicked"),dismissible:!0}},w={args:{variant:"info",title:"Stacked Alerts",description:"Example of multiple alerts"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(i,{variant:"critical",title:"Emergency: Severe Weather Warning",description:"Cyclone approaching northern regions. Evacuate immediately if in affected areas. <a href='#'>View evacuation routes</a>",ctaText:"Emergency Information",dismissible:!0}),e.jsx(i,{variant:"warning",title:"Service Disruption: Power Outages Expected",description:"Planned power maintenance may affect online services tonight between 10 PM and 6 AM. <a href='#'>View affected services</a>",dismissible:!0}),e.jsx(i,{variant:"info",title:"New Online Services Portal",description:"Access improved government services with enhanced features and better accessibility. <a href='#'>Explore new features</a>",ctaText:"Visit Portal",dismissible:!0})]})},A={args:{variant:"info",title:"All Variants",description:"Comparison of all variants"},render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(i,{variant:"info",title:"Information Alert",description:"This is an information alert for low-level updates that affect all users. <a href='#'>More information</a>",dismissible:!0}),e.jsx(i,{variant:"info-alt",title:"Information Alternative Alert",description:"This is an alternative information alert with light background and dark text. <a href='#'>More information</a>",dismissible:!0}),e.jsx(i,{variant:"warning",title:"Warning Alert",description:"This is a warning alert for events that pose a threat or seriously affect a service. <a href='#'>View details</a>",dismissible:!0}),e.jsx(i,{variant:"critical",title:"Critical Alert",description:"This is a critical alert for immediate, significant threats to the community. <a href='#'>Emergency resources</a>",dismissible:!0})]})},T={args:{variant:"info",title:"Service Announcement",description:"Brief update about service availability."}},x={args:{variant:"warning",title:"Important Update Required",description:"Changes to our authentication system require all users to update their security settings. This ensures your account remains secure and compliant with current standards.",ctaText:"Update Security Settings",ctaHref:"https://example.com/security",dismissible:!0}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "System Maintenance Scheduled",
    description: "This alert provides important information for users. Please read this to understand how this may affect you. This might also contain a relevant link to provide user with <a href='#'>More information</a>"
  }
}`,...t.parameters?.docs?.source},description:{story:"Default information global alert",...t.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Service Update Available",
    description: "A new version of our online services portal is now available. The update includes improved accessibility features and enhanced security. <a href='#'>Learn more about the updates</a>"
  }
}`,...r.parameters?.docs?.source},description:{story:`Information variant\r
The blue information global alert is for low-level alerts to indicate a minor problem or an update.\r
It must still affect the entire service or site, and all users.`,...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "New Features Available",
    description: "We have added new features to improve your experience on NT.GOV.AU. Explore the updated navigation and enhanced search capabilities. <a href='#'>View feature guide</a>",
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed")
  }
}`,...a.parameters?.docs?.source},description:{story:"Information with dismiss button",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Complete Your Profile",
    description: "Help us serve you better by completing your user profile. This will enable personalized services and faster processing of your applications.",
    ctaText: "Update Profile",
    ctaOnClick: () => console.log("CTA clicked")
  }
}`,...s.parameters?.docs?.source},description:{story:"Information with CTA button",...s.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Annual Survey Now Open",
    description: "Share your feedback on NT Government services. Your input helps us improve our services to better meet community needs. <a href='#'>Read privacy statement</a>",
    ctaText: "Take Survey",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed")
  }
}`,...n.parameters?.docs?.source},description:{story:"Information with CTA and dismiss",...n.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info-alt",
    title: "Service Update Available",
    description: "A new version of our online services portal is now available. The update includes improved accessibility features and enhanced security. <a href='#'>Learn more about the updates</a>"
  }
}`,...o.parameters?.docs?.source},description:{story:`Information Alternative variant (Light Blue)\r
Light blue is an alternative colour for websites where blue is prominent and the default colour may get lost.\r
Uses light background with dark text instead of solid blue with white text.`,...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info-alt",
    title: "New Features Available",
    description: "We have added new features to improve your experience on NT.GOV.AU. Explore the updated navigation and enhanced search capabilities. <a href='#'>View feature guide</a>",
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed")
  }
}`,...l.parameters?.docs?.source},description:{story:"Information Alternative with dismiss button",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info-alt",
    title: "Complete Your Profile",
    description: "Help us serve you better by completing your user profile. This will enable personalized services and faster processing of your applications.",
    ctaText: "Update Profile",
    ctaOnClick: () => console.log("CTA clicked")
  }
}`,...c.parameters?.docs?.source},description:{story:"Information Alternative with CTA button",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info-alt",
    title: "Annual Survey Now Open",
    description: "Share your feedback on NT Government services. Your input helps us improve our services to better meet community needs. <a href='#'>Read privacy statement</a>",
    ctaText: "Take Survey",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed")
  }
}`,...d.parameters?.docs?.source},description:{story:"Information Alternative with CTA and dismiss",...d.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Service Disruption Expected",
    description: "Due to planned system maintenance, some online services may be unavailable between 11 PM tonight and 2 AM tomorrow. Please plan accordingly and complete any urgent transactions before maintenance begins. <a href='#'>View affected services</a>"
  }
}`,...m.parameters?.docs?.source},description:{story:`Warning variant\r
The orange warning global alert should be used when an event has either happened or is about to\r
and poses a threat to or will seriously affect a service.\r
It can also be used to communicate an ongoing crisis which seriously affects a service's operation.`,...m.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Severe Weather Alert",
    description: "A severe weather warning has been issued for the Darwin region. Road closures and service disruptions are possible. Please monitor updates and take necessary precautions.",
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed")
  }
}`,...p.parameters?.docs?.source},description:{story:"Warning with dismiss",...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Action Required: License Expiring Soon",
    description: "Your professional license expires in 14 days. Renew now to avoid service interruptions and potential penalties. Processing times may vary during peak periods.",
    ctaText: "Renew License",
    ctaHref: "#renew"
  }
}`,...u.parameters?.docs?.source},description:{story:"Warning with CTA",...u.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Urgent: System Migration in Progress",
    description: "We are migrating to a new system to improve reliability and performance. Some features may be temporarily limited. Your patience is appreciated during this transition. <a href='#'>View migration timeline</a>",
    ctaText: "Check System Status",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed")
  }
}`,...f.parameters?.docs?.source},description:{story:"Warning with CTA and dismiss",...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "critical",
    title: "Emergency: Bushfire Warning",
    description: "An emergency bushfire warning is in effect for Litchfield and surrounding areas. Residents should evacuate immediately and follow emergency service directions. <a href='#'>View evacuation centers</a>"
  }
}`,...g.parameters?.docs?.source},description:{story:`Critical variant\r
This red global alert should only be used for immediate, significant threat to the community,\r
like a natural disaster or a disease outbreak.`,...g.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "critical",
    title: "Critical Weather Event",
    description: "A Category 4 cyclone is approaching the Northern Territory coast. All residents in affected areas must take immediate action to secure property and relocate to designated shelters.",
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed")
  }
}`,...h.parameters?.docs?.source},description:{story:"Critical with dismiss",...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "critical",
    title: "Public Health Emergency",
    description: "A public health emergency has been declared. All residents are advised to follow health authority guidelines and monitor official channels for updates on containment measures and safety protocols.",
    ctaText: "View Health Guidelines",
    ctaHref: "#health"
  }
}`,...v.parameters?.docs?.source},description:{story:"Critical with CTA",...v.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "critical",
    title: "Emergency Alert: Immediate Action Required",
    description: "A significant emergency situation is developing that requires immediate community action. Please follow all instructions from emergency services and monitor official channels for real-time updates. <a href='#'>Emergency contact information</a>",
    ctaText: "View Emergency Information",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true,
    onDismiss: () => console.log("Alert dismissed")
  }
}`,...y.parameters?.docs?.source},description:{story:"Critical with CTA and dismiss",...y.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Extended Service Announcement: Important Updates",
    description: "This global alert demonstrates how the component handles extended content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. When communicating important information that affects all users of the website or service, it's essential to provide clear, comprehensive details while keeping the message concise and actionable. Include relevant links to supporting documentation where users can find additional context, resources, or step-by-step instructions. <a href='#'>Read the full announcement</a> for detailed information about this update and its impact on your use of NT Government services.",
    ctaText: "Learn More",
    ctaOnClick: () => console.log("CTA clicked"),
    dismissible: true
  }
}`,...b.parameters?.docs?.source},description:{story:"Long content demonstrating text wrapping",...b.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Stacked Alerts",
    description: "Example of multiple alerts"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>\r
      <GlobalAlert variant="critical" title="Emergency: Severe Weather Warning" description="Cyclone approaching northern regions. Evacuate immediately if in affected areas. <a href='#'>View evacuation routes</a>" ctaText="Emergency Information" dismissible={true} />\r
      <GlobalAlert variant="warning" title="Service Disruption: Power Outages Expected" description="Planned power maintenance may affect online services tonight between 10 PM and 6 AM. <a href='#'>View affected services</a>" dismissible={true} />\r
      <GlobalAlert variant="info" title="New Online Services Portal" description="Access improved government services with enhanced features and better accessibility. <a href='#'>Explore new features</a>" ctaText="Visit Portal" dismissible={true} />\r
    </div>
}`,...w.parameters?.docs?.source},description:{story:"Multiple alerts stacked (up to 3 maximum)",...w.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "All Variants",
    description: "Comparison of all variants"
  },
  render: () => <div style={{
    display: "flex",
    flexDirection: "column"
  }}>\r
      <GlobalAlert variant="info" title="Information Alert" description="This is an information alert for low-level updates that affect all users. <a href='#'>More information</a>" dismissible={true} />\r
      <GlobalAlert variant="info-alt" title="Information Alternative Alert" description="This is an alternative information alert with light background and dark text. <a href='#'>More information</a>" dismissible={true} />\r
      <GlobalAlert variant="warning" title="Warning Alert" description="This is a warning alert for events that pose a threat or seriously affect a service. <a href='#'>View details</a>" dismissible={true} />\r
      <GlobalAlert variant="critical" title="Critical Alert" description="This is a critical alert for immediate, significant threats to the community. <a href='#'>Emergency resources</a>" dismissible={true} />\r
    </div>
}`,...A.parameters?.docs?.source},description:{story:"All variants comparison",...A.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "info",
    title: "Service Announcement",
    description: "Brief update about service availability."
  }
}`,...T.parameters?.docs?.source},description:{story:"Minimal - Title and description only",...T.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "warning",
    title: "Important Update Required",
    description: "Changes to our authentication system require all users to update their security settings. This ensures your account remains secure and compliant with current standards.",
    ctaText: "Update Security Settings",
    ctaHref: "https://example.com/security",
    dismissible: true
  }
}`,...x.parameters?.docs?.source},description:{story:"With external link CTA",...x.parameters?.docs?.description}}};const H=["Default","Information","InformationDismissible","InformationWithCTA","InformationComplete","InformationAlternative","InformationAlternativeDismissible","InformationAlternativeWithCTA","InformationAlternativeComplete","Warning","WarningDismissible","WarningWithCTA","WarningComplete","Critical","CriticalDismissible","CriticalWithCTA","CriticalComplete","LongContent","StackedAlerts","AllVariants","Minimal","WithExternalLink"];export{A as AllVariants,g as Critical,y as CriticalComplete,h as CriticalDismissible,v as CriticalWithCTA,t as Default,r as Information,o as InformationAlternative,d as InformationAlternativeComplete,l as InformationAlternativeDismissible,c as InformationAlternativeWithCTA,n as InformationComplete,a as InformationDismissible,s as InformationWithCTA,b as LongContent,T as Minimal,w as StackedAlerts,m as Warning,f as WarningComplete,p as WarningDismissible,u as WarningWithCTA,x as WithExternalLink,H as __namedExportsOrder,q as default};
