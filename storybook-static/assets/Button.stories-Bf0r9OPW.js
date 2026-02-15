import{j as e}from"./iframe-Cgj6QQFv.js";import{B as a}from"./Button-BfoMFN-_.js";import"./preload-helper-DhH6u7hw.js";import"./Icon-D6RIkSta.js";const x={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"boolean",mapping:{false:void 0,true:"sm"}}}},r={args:{variant:"primary",label:"Submit Application"},parameters:{docs:{description:{story:"The primary button is the most visually prominent and should be used for the main action users need to take. In this example, it leads to submitting an application for a government service."}}}},t={args:{variant:"secondary",label:"Save as Draft"},parameters:{docs:{description:{story:"Secondary buttons are for less prominent actions. Here it allows users to save their application progress without fully submitting it."}}}},i={args:{variant:"tertiary",label:"Cancel"},parameters:{docs:{description:{story:"Tertiary buttons are for even less important actions, like cancelling, going back, or viewing optional information. They provide minimal visual emphasis."}}}},o={args:{size:"sm",label:"Edit Profile"},parameters:{docs:{description:{story:"Small buttons are ideal for spaces with limited room or for secondary actions. Here, a small primary button allows quick access to profile editing functionality."}}}},n={render:()=>e.jsxs("div",{className:"d-flex gap-3 flex-wrap align-items-center",children:[e.jsx(a,{variant:"primary",label:"Submit Form"}),e.jsx(a,{variant:"secondary",label:"Save Draft"}),e.jsx(a,{variant:"tertiary",label:"Cancel"})]}),parameters:{docs:{description:{story:"This example shows all three button variants together, demonstrating the visual hierarchy. Primary is most prominent for the main action, secondary for alternatives, and tertiary for de-emphasized options like cancellation."}}}},s={args:{variant:"primary",iconLeft:"fa-light fa-download",label:"Download Report"},parameters:{docs:{description:{story:"Left-aligned (leading) icons work best when the icon is closely associated with the action. The download icon clearly relates to downloading the report."}}}},l={args:{variant:"tertiary",iconRight:"fa-light fa-arrow-right",label:"View More Services"},parameters:{docs:{description:{story:"Right-aligned (trailing) icons are useful for showing direction or providing supplementary context. The arrow indicates that clicking opens more content."}}}},c={args:{variant:"primary",iconLeft:"fa-light fa-search","aria-label":"Search government services"},parameters:{docs:{description:{story:"Icon-only buttons MUST include an aria-label attribute to be accessible to screen readers. Without it, users relying on assistive technology won't understand the button's purpose."}}}},d={render:()=>e.jsxs("div",{className:"d-flex gap-3 flex-wrap",children:[e.jsx(a,{variant:"primary",iconLeft:"fa-light fa-file-arrow-down",label:"Download Application"}),e.jsx(a,{variant:"secondary",iconLeft:"fa-light fa-arrow-left",label:"Previous Step"}),e.jsx(a,{variant:"tertiary",iconLeft:"fa-light fa-circle-info",label:"View Instructions"})]}),parameters:{docs:{description:{story:"This example shows realistic government service scenarios with left-aligned icons. Each button uses an action-oriented label clearly describing what will happen when clicked."}}}},p={render:()=>e.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[e.jsx(a,{variant:"primary",iconLeft:"fa-light fa-magnifying-glass","aria-label":"Search services",title:"Search"}),e.jsx(a,{variant:"secondary",iconLeft:"fa-light fa-sliders","aria-label":"Filter results",title:"Filter"}),e.jsx(a,{variant:"tertiary",iconLeft:"fa-light fa-print","aria-label":"Print page",title:"Print"}),e.jsx(a,{variant:"primary",iconLeft:"fa-light fa-plus","aria-label":"Add new item",size:"sm",title:"Add"}),e.jsx(a,{variant:"secondary",iconLeft:"fa-light fa-xmark","aria-label":"Close menu",size:"sm",title:"Close"})]}),parameters:{docs:{description:{story:"Icon-only buttons for compact layouts. Each button has an aria-label and title attribute for accessibility and user clarity. These are ideal for toolbars or navigation elements."}}}},m={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",iconLeft:"fa-light fa-check",label:"Confirm Submission"}),e.jsx(a,{variant:"secondary",label:"Review Application"}),e.jsx(a,{variant:"tertiary",label:"Cancel"})]}),parameters:{layout:"padded",docs:{description:{story:"This demonstrates a proper button hierarchy for a critical action (submission). The primary button is the main action, secondary offers review, and tertiary provides an escape route. Users should typically only have one primary button per action group."}}}},u={render:()=>e.jsx(a,{variant:"primary",iconLeft:"fa-light fa-arrow-right",label:"Continue to Next Step",style:{"--bs-btn-padding-x":"32px","--bs-btn-padding-y":"20px","--bs-btn-font-size":"18px"}}),parameters:{layout:"padded",docs:{description:{story:"This button uses CSS variable overrides to create an extra-large variant without modifying the component. It demonstrates how Bootstrap's CSS variables approach enables flexible customization."}}}},b={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:600},children:"Custom Padding"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{variant:"primary",label:"Standard Button"}),e.jsx(a,{variant:"primary",label:"Extra Large Button",style:{"--bs-btn-padding-x":"48px","--bs-btn-padding-y":"24px"}})]})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:600},children:"Custom Colors"}),e.jsx(a,{variant:"primary",label:"Custom Purple Action",style:{"--bs-btn-bg":"#8b5cf6","--bs-btn-border-color":"#8b5cf6","--bs-btn-hover-bg":"#7c3aed","--bs-btn-hover-border-color":"#7c3aed","--bs-btn-active-bg":"#6d28d9","--bs-btn-active-border-color":"#6d28d9"}})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:600},children:"Custom Border Radius"}),e.jsxs("div",{style:{display:"flex",gap:"12px"},children:[e.jsx(a,{variant:"primary",label:"Sharp Corners"}),e.jsx(a,{variant:"primary",label:"Rounded",style:{"--bs-btn-border-radius":"8px"}}),e.jsx(a,{variant:"primary",label:"Pill-Shaped",style:{"--bs-btn-border-radius":"50rem"}})]})]}),e.jsx("div",{style:{padding:"16px",background:"#f0f7ff",borderRadius:"8px",maxWidth:"600px",borderLeft:"4px solid #1f1f5f"},children:e.jsxs("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.6"},children:[e.jsx("strong",{children:"CSS Variables:"})," All buttons use Bootstrap 5.3's CSS variables approach. Override ",e.jsx("code",{children:"--bs-btn-*"})," variables inline or via CSS classes to customize button styles at runtime without modifying component code. See ",e.jsx("code",{children:"CSS_VARIABLES.md"})," for complete documentation."]})})]}),parameters:{layout:"padded",docs:{description:{story:"This story demonstrates the power of CSS variables for button customization. You can override padding, colors, border radius, and more without touching component code, enabling design flexibility and brand customization."}}}},y={render:()=>e.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[e.jsx(a,{variant:"primary",label:"Available Action"}),e.jsx(a,{variant:"primary",label:"Unavailable Action",disabled:!0}),e.jsx(a,{variant:"secondary",label:"Available"}),e.jsx(a,{variant:"secondary",label:"Unavailable",disabled:!0})]}),parameters:{layout:"padded",docs:{description:{story:"Disabled buttons indicate actions that are not currently available. Use disabled state sparingly and ensure there's a clear reason why the action is unavailable. Always prefer showing enabled buttons with appropriate messaging instead when possible."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Submit Application"
  },
  parameters: {
    docs: {
      description: {
        story: "The primary button is the most visually prominent and should be used for the main action users need to take. In this example, it leads to submitting an application for a government service."
      }
    }
  }
}`,...r.parameters?.docs?.source},description:{story:`Primary buttons indicate the main call-to-action on a page or component.\r
Use for the most important action users should take.`,...r.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Save as Draft"
  },
  parameters: {
    docs: {
      description: {
        story: "Secondary buttons are for less prominent actions. Here it allows users to save their application progress without fully submitting it."
      }
    }
  }
}`,...t.parameters?.docs?.source},description:{story:`Secondary buttons are used for less important actions or alternatives.\r
They work well alongside primary buttons or standalone for secondary tasks.`,...t.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    label: "Cancel"
  },
  parameters: {
    docs: {
      description: {
        story: "Tertiary buttons are for even less important actions, like cancelling, going back, or viewing optional information. They provide minimal visual emphasis."
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`Tertiary buttons are de-emphasized and often used for cancellation, back navigation,\r
or optional actions. They have the least visual prominence.`,...i.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    label: "Edit Profile"
  },
  parameters: {
    docs: {
      description: {
        story: "Small buttons are ideal for spaces with limited room or for secondary actions. Here, a small primary button allows quick access to profile editing functionality."
      }
    }
  }
}`,...o.parameters?.docs?.source},description:{story:"Small buttons are used in compact layouts or secondary locations.",...o.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex gap-3 flex-wrap align-items-center">\r
      <Button variant="primary" label="Submit Form" />\r
      <Button variant="secondary" label="Save Draft" />\r
      <Button variant="tertiary" label="Cancel" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "This example shows all three button variants together, demonstrating the visual hierarchy. Primary is most prominent for the main action, secondary for alternatives, and tertiary for de-emphasized options like cancellation."
      }
    }
  }
}`,...n.parameters?.docs?.source},description:{story:`Shows all three button variants for comparison.\r
Demonstrates the visual hierarchy of primary, secondary, and tertiary buttons.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    iconLeft: "fa-light fa-download",
    label: "Download Report"
  },
  parameters: {
    docs: {
      description: {
        story: "Left-aligned (leading) icons work best when the icon is closely associated with the action. The download icon clearly relates to downloading the report."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:"Buttons with left-aligned icons. The icon is closely associated with the action.",...s.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    iconRight: "fa-light fa-arrow-right",
    label: "View More Services"
  },
  parameters: {
    docs: {
      description: {
        story: "Right-aligned (trailing) icons are useful for showing direction or providing supplementary context. The arrow indicates that clicking opens more content."
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:"Buttons with right-aligned icons. The icon provides directional or supplementary information.",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    iconLeft: "fa-light fa-search",
    "aria-label": "Search government services"
  },
  parameters: {
    docs: {
      description: {
        story: "Icon-only buttons MUST include an aria-label attribute to be accessible to screen readers. Without it, users relying on assistive technology won't understand the button's purpose."
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Icon-only buttons must include an aria-label for screen reader accessibility.\r
WCAG compliance requires this for icon-only interactive elements.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex gap-3 flex-wrap">\r
      <Button variant="primary" iconLeft="fa-light fa-file-arrow-down" label="Download Application" />\r
      <Button variant="secondary" iconLeft="fa-light fa-arrow-left" label="Previous Step" />\r
      <Button variant="tertiary" iconLeft="fa-light fa-circle-info" label="View Instructions" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "This example shows realistic government service scenarios with left-aligned icons. Each button uses an action-oriented label clearly describing what will happen when clicked."
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Common button actions with left-aligned icons.\r
Demonstrates realistic use cases across the variant spectrum.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex gap-2 flex-wrap">\r
      <Button variant="primary" iconLeft="fa-light fa-magnifying-glass" aria-label="Search services" title="Search" />\r
      <Button variant="secondary" iconLeft="fa-light fa-sliders" aria-label="Filter results" title="Filter" />\r
      <Button variant="tertiary" iconLeft="fa-light fa-print" aria-label="Print page" title="Print" />\r
      <Button variant="primary" iconLeft="fa-light fa-plus" aria-label="Add new item" size="sm" title="Add" />\r
      <Button variant="secondary" iconLeft="fa-light fa-xmark" aria-label="Close menu" size="sm" title="Close" />\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Icon-only buttons for compact layouts. Each button has an aria-label and title attribute for accessibility and user clarity. These are ideal for toolbars or navigation elements."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Common icon-only button actions.\r
All include aria-label for accessibility. Useful for compact interfaces.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  }}>\r
      <Button variant="primary" iconLeft="fa-light fa-check" label="Confirm Submission" />\r
      <Button variant="secondary" label="Review Application" />\r
      <Button variant="tertiary" label="Cancel" />\r
    </div>,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "This demonstrates a proper button hierarchy for a critical action (submission). The primary button is the main action, secondary offers review, and tertiary provides an escape route. Users should typically only have one primary button per action group."
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Button action stack showing a complete user workflow.\r
Demonstrates proper button hierarchy in a real-world scenario.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Button variant="primary" iconLeft="fa-light fa-arrow-right" label="Continue to Next Step" style={{
    "--bs-btn-padding-x": "32px",
    "--bs-btn-padding-y": "20px",
    "--bs-btn-font-size": "18px"
  } as React.CSSProperties} />,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "This button uses CSS variable overrides to create an extra-large variant without modifying the component. It demonstrates how Bootstrap's CSS variables approach enables flexible customization."
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Larger button with extra padding for high-prominence actions.\r
Demonstrates CSS variable customization for unique use cases.`,...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px",
    alignItems: "flex-start"
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: "16px",
        fontSize: "16px",
        fontWeight: 600
      }}>\r
          Custom Padding\r
        </h4>\r
        <div style={{
        display: "flex",
        gap: "12px"
      }}>\r
          <Button variant="primary" label="Standard Button" />\r
          <Button variant="primary" label="Extra Large Button" style={{
          "--bs-btn-padding-x": "48px",
          "--bs-btn-padding-y": "24px"
        } as React.CSSProperties} />\r
        </div>\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: "16px",
        fontSize: "16px",
        fontWeight: 600
      }}>\r
          Custom Colors\r
        </h4>\r
        <Button variant="primary" label="Custom Purple Action" style={{
        "--bs-btn-bg": "#8b5cf6",
        "--bs-btn-border-color": "#8b5cf6",
        "--bs-btn-hover-bg": "#7c3aed",
        "--bs-btn-hover-border-color": "#7c3aed",
        "--bs-btn-active-bg": "#6d28d9",
        "--bs-btn-active-border-color": "#6d28d9"
      } as React.CSSProperties} />\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: "16px",
        fontSize: "16px",
        fontWeight: 600
      }}>\r
          Custom Border Radius\r
        </h4>\r
        <div style={{
        display: "flex",
        gap: "12px"
      }}>\r
          <Button variant="primary" label="Sharp Corners" />\r
          <Button variant="primary" label="Rounded" style={{
          "--bs-btn-border-radius": "8px"
        } as React.CSSProperties} />\r
          <Button variant="primary" label="Pill-Shaped" style={{
          "--bs-btn-border-radius": "50rem"
        } as React.CSSProperties} />\r
        </div>\r
      </div>\r
\r
      <div style={{
      padding: "16px",
      background: "#f0f7ff",
      borderRadius: "8px",
      maxWidth: "600px",
      borderLeft: "4px solid #1f1f5f"
    }}>\r
        <p style={{
        margin: 0,
        fontSize: "14px",
        lineHeight: "1.6"
      }}>\r
          <strong>CSS Variables:</strong> All buttons use Bootstrap 5.3's CSS\r
          variables approach. Override <code>--bs-btn-*</code> variables inline\r
          or via CSS classes to customize button styles at runtime without\r
          modifying component code. See <code>CSS_VARIABLES.md</code> for\r
          complete documentation.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "This story demonstrates the power of CSS variables for button customization. You can override padding, colors, border radius, and more without touching component code, enabling design flexibility and brand customization."
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Demonstrates runtime CSS variable customization.\r
Shows how to override button styles without changing the component code.`,...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
  }}>\r
      <Button variant="primary" label="Available Action" />\r
      <Button variant="primary" label="Unavailable Action" disabled />\r
      <Button variant="secondary" label="Available" />\r
      <Button variant="secondary" label="Unavailable" disabled />\r
    </div>,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Disabled buttons indicate actions that are not currently available. Use disabled state sparingly and ensure there's a clear reason why the action is unavailable. Always prefer showing enabled buttons with appropriate messaging instead when possible."
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`Shows loading state simulation and disabled state.\r
Demonstrates handling of user feedback during asynchronous operations.`,...y.parameters?.docs?.description}}};const S=["Primary","Secondary","Tertiary","Small","AllVariants","WithIconLeft","WithIconRight","IconOnly","WithLeadingIcons","IconOnlyButtons","ActionStack","LargeIcon","CustomizedWithCSSVars","DisabledState"];export{m as ActionStack,n as AllVariants,b as CustomizedWithCSSVars,y as DisabledState,c as IconOnly,p as IconOnlyButtons,u as LargeIcon,r as Primary,t as Secondary,o as Small,i as Tertiary,s as WithIconLeft,l as WithIconRight,d as WithLeadingIcons,S as __namedExportsOrder,x as default};
