import{j as t}from"./iframe-CG7tK2QQ.js";import"./preload-helper-DhH6u7hw.js";const l=({heading:i,content:c,className:r,...d})=>{const h=`callout${r?` ${r}`:""}`;return t.jsx("div",{className:h,...d,children:t.jsx("div",{className:"callout__content",children:t.jsxs("div",{className:"callout__text-container",children:[i&&t.jsx("div",{className:"callout__heading",children:i}),t.jsx("div",{className:"callout__text",children:c})]})})})};l.__docgenInfo={description:"Callout component for displaying informational messages with a prominent left border.",methods:[],displayName:"Callout",props:{heading:{required:!1,tsType:{name:"string"},description:"The heading text displayed at the top of the callout (optional)"},content:{required:!0,tsType:{name:"string"},description:"The main content text displayed below the heading"}}};const m={title:"Components/Callout",component:l,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{heading:{control:"text",description:"The heading text displayed at the top of the callout (optional)"},content:{control:"text",description:"The main content text displayed below the heading"},className:{control:"text",description:"Additional CSS classes to apply to the callout"}}},e={args:{heading:"Callout heading",content:"This component displays important information with a distinct left border for visual emphasis. Use callouts to highlight tips, notices, or key information that users should pay attention to."}},a={args:{heading:"Important Notice",content:"This callout demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. Use callouts to highlight important information, tips, or notices that users should pay attention to without being as urgent as notifications. The component's design ensures that even lengthy content remains accessible and easy to read, with consistent spacing and a clear visual hierarchy that guides users through the information effectively."}},o={args:{heading:"Quick Tip",content:"Brief informational message for users."}},n={args:{content:"This callout has no heading, just content. Useful for simple informational messages where a heading is not necessary."}},s={args:{heading:"Styled Callout",content:"This callout has additional custom styling applied via className.",className:"mb-4"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Callout heading",
    content: "This component displays important information with a distinct left border for visual emphasis. Use callouts to highlight tips, notices, or key information that users should pay attention to."
  }
}`,...e.parameters?.docs?.source},description:{story:"Default callout with sample content",...e.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Important Notice",
    content: "This callout demonstrates how the component gracefully handles longer content while maintaining excellent readability and visual structure. The text automatically wraps within the container, preserving proper spacing and typography across all viewport sizes. Use callouts to highlight important information, tips, or notices that users should pay attention to without being as urgent as notifications. The component's design ensures that even lengthy content remains accessible and easy to read, with consistent spacing and a clear visual hierarchy that guides users through the information effectively."
  }
}`,...a.parameters?.docs?.source},description:{story:"Callout with longer content to demonstrate text wrapping",...a.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Quick Tip",
    content: "Brief informational message for users."
  }
}`,...o.parameters?.docs?.source},description:{story:"Callout with minimal content",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    content: "This callout has no heading, just content. Useful for simple informational messages where a heading is not necessary."
  }
}`,...n.parameters?.docs?.source},description:{story:"Callout without a heading - content only",...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Styled Callout",
    content: "This callout has additional custom styling applied via className.",
    className: "mb-4"
  }
}`,...s.parameters?.docs?.source},description:{story:"Callout with custom styling",...s.parameters?.docs?.description}}};const g=["Default","LongContent","ShortContent","WithoutHeading","CustomStyling"];export{s as CustomStyling,e as Default,a as LongContent,o as ShortContent,n as WithoutHeading,g as __namedExportsOrder,m as default};
