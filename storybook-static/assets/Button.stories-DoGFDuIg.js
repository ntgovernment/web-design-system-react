import{j as a,r as S}from"./iframe-CJcOhIH1.js";import{B as e}from"./Button-CKL_Zzgw.js";import"./preload-helper-Dc5Yqcnt.js";import"./Icon-CZK7gEro.js";/* empty css               */const T={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"boolean",mapping:{false:void 0,true:"sm"}}}},i={args:{variant:"primary",label:"Submit Application"},parameters:{docs:{description:{story:"The primary button is the most visually prominent and should be used for the main action users need to take. In this example, it leads to submitting an application for a government service."}}}},n={args:{variant:"secondary",label:"Save as Draft"},parameters:{docs:{description:{story:"Secondary buttons are for less prominent actions. Here it allows users to save their application progress without fully submitting it."}}}},s={args:{variant:"tertiary",label:"Cancel"},parameters:{docs:{description:{story:"Tertiary buttons are for even less important actions, like cancelling, going back, or viewing optional information. They provide minimal visual emphasis."}}}},o={args:{size:"sm",label:"Edit Profile"},parameters:{docs:{description:{story:"Small buttons are ideal for spaces with limited room or for secondary actions. Here, a small primary button allows quick access to profile editing functionality."}}}},l={render:()=>a.jsxs("div",{className:"d-flex gap-3 flex-wrap align-items-center",children:[a.jsx(e,{variant:"primary",label:"Submit Form"}),a.jsx(e,{variant:"secondary",label:"Save Draft"}),a.jsx(e,{variant:"tertiary",label:"Cancel"})]}),parameters:{docs:{description:{story:"This example shows all three button variants together, demonstrating the visual hierarchy. Primary is most prominent for the main action, secondary for alternatives, and tertiary for de-emphasized options like cancellation."}}}},c={args:{variant:"primary",iconLeft:"fa-light fa-download",label:"Download Report"},parameters:{docs:{description:{story:"Left-aligned (leading) icons work best when the icon is closely associated with the action. The download icon clearly relates to downloading the report."}}}},d={args:{variant:"tertiary",iconRight:"fa-light fa-arrow-right",label:"View More Services"},parameters:{docs:{description:{story:"Right-aligned (trailing) icons are useful for showing direction or providing supplementary context. The arrow indicates that clicking opens more content."}}}},p={args:{variant:"primary",iconLeft:"fa-light fa-search","aria-label":"Search government services"},parameters:{docs:{description:{story:"Icon-only buttons MUST include an aria-label attribute to be accessible to screen readers. Without it, users relying on assistive technology won't understand the button's purpose."}}}},m={render:()=>a.jsxs("div",{className:"d-flex gap-3 flex-wrap",children:[a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-file-arrow-down",label:"Download Application"}),a.jsx(e,{variant:"secondary",iconLeft:"fa-light fa-arrow-left",label:"Previous Step"}),a.jsx(e,{variant:"tertiary",iconLeft:"fa-light fa-circle-info",label:"View Instructions"})]}),parameters:{docs:{description:{story:"This example shows realistic government service scenarios with left-aligned icons. Each button uses an action-oriented label clearly describing what will happen when clicked."}}}},u={render:()=>a.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-magnifying-glass","aria-label":"Search services",title:"Search"}),a.jsx(e,{variant:"secondary",iconLeft:"fa-light fa-sliders","aria-label":"Filter results",title:"Filter"}),a.jsx(e,{variant:"tertiary",iconLeft:"fa-light fa-print","aria-label":"Print page",title:"Print"}),a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-plus","aria-label":"Add new item",size:"sm",title:"Add"}),a.jsx(e,{variant:"secondary",iconLeft:"fa-light fa-xmark","aria-label":"Close menu",size:"sm",title:"Close"})]}),parameters:{docs:{description:{story:"Icon-only buttons for compact layouts. Each button has an aria-label and title attribute for accessibility and user clarity. These are ideal for toolbars or navigation elements."}}}},b={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-check",label:"Confirm Submission"}),a.jsx(e,{variant:"secondary",label:"Review Application"}),a.jsx(e,{variant:"tertiary",label:"Cancel"})]}),parameters:{layout:"padded",docs:{description:{story:"This demonstrates a proper button hierarchy for a critical action (submission). The primary button is the main action, secondary offers review, and tertiary provides an escape route. Users should typically only have one primary button per action group."}}}},y={render:()=>a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-arrow-right",label:"Continue to Next Step",style:{"--bs-btn-padding-x":"32px","--bs-btn-padding-y":"20px","--bs-btn-font-size":"18px"}}),parameters:{layout:"padded",docs:{description:{story:"This button uses CSS variable overrides to create an extra-large variant without modifying the component. It demonstrates how Bootstrap's CSS variables approach enables flexible customization."}}}},h={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",alignItems:"flex-start"},children:[a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:600},children:"Custom Padding"}),a.jsxs("div",{style:{display:"flex",gap:"12px"},children:[a.jsx(e,{variant:"primary",label:"Standard Button"}),a.jsx(e,{variant:"primary",label:"Extra Large Button",style:{"--bs-btn-padding-x":"48px","--bs-btn-padding-y":"24px"}})]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:600},children:"Custom Colors"}),a.jsx(e,{variant:"primary",label:"Custom Purple Action",style:{"--bs-btn-bg":"#8b5cf6","--bs-btn-border-color":"#8b5cf6","--bs-btn-hover-bg":"#7c3aed","--bs-btn-hover-border-color":"#7c3aed","--bs-btn-active-bg":"#6d28d9","--bs-btn-active-border-color":"#6d28d9"}})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"16px",fontSize:"16px",fontWeight:600},children:"Custom Border Radius"}),a.jsxs("div",{style:{display:"flex",gap:"12px"},children:[a.jsx(e,{variant:"primary",label:"Sharp Corners"}),a.jsx(e,{variant:"primary",label:"Rounded",style:{"--bs-btn-border-radius":"8px"}}),a.jsx(e,{variant:"primary",label:"Pill-Shaped",style:{"--bs-btn-border-radius":"50rem"}})]})]}),a.jsx("div",{style:{padding:"16px",background:"#f0f7ff",borderRadius:"8px",maxWidth:"600px",borderLeft:"4px solid #1f1f5f"},children:a.jsxs("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.6"},children:[a.jsx("strong",{children:"CSS Variables:"})," All buttons use Bootstrap 5.3's CSS variables approach. Override ",a.jsx("code",{children:"--bs-btn-*"})," variables inline or via CSS classes to customize button styles at runtime without modifying component code. See ",a.jsx("code",{children:"CSS_VARIABLES.md"})," for complete documentation."]})})]}),parameters:{layout:"padded",docs:{description:{story:"This story demonstrates the power of CSS variables for button customization. You can override padding, colors, border radius, and more without touching component code, enabling design flexibility and brand customization."}}}},f={render:()=>a.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[a.jsx(e,{variant:"primary",label:"Available Action"}),a.jsx(e,{variant:"primary",label:"Unavailable Action",disabled:!0}),a.jsx(e,{variant:"secondary",label:"Available"}),a.jsx(e,{variant:"secondary",label:"Unavailable",disabled:!0})]}),parameters:{layout:"padded",docs:{description:{story:"Disabled buttons indicate actions that are not currently available. Use disabled state sparingly and ensure there's a clear reason why the action is unavailable. Always prefer showing enabled buttons with appropriate messaging instead when possible."}}}},g={render:()=>{const[t,v]=S.useState(!1),[r,x]=S.useState(!1),w=()=>{v(!0),setTimeout(()=>v(!1),3e3)},L=()=>{x(!0),setTimeout(()=>x(!1),3e3)};return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px",alignItems:"flex-start"},children:[a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600,color:"#555"},children:"Static loading state — all variants"}),a.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-circle-notch fa-spin",label:"Submitting…",disabled:!0,"aria-busy":"true","aria-label":"Submitting, please wait"}),a.jsx(e,{variant:"secondary",iconLeft:"fa-light fa-circle-notch fa-spin",label:"Saving…",disabled:!0,"aria-busy":"true","aria-label":"Saving, please wait"}),a.jsx(e,{variant:"tertiary",iconLeft:"fa-light fa-circle-notch fa-spin",label:"Loading…",disabled:!0,"aria-busy":"true","aria-label":"Loading, please wait"})]})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600,color:"#555"},children:"Interactive demo — click to trigger loading (resets after 3 s)"}),a.jsxs("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"},children:[a.jsx(e,{variant:"primary",iconLeft:t?"fa-light fa-circle-notch fa-spin":"fa-light fa-paper-plane",label:t?"Submitting…":"Submit Application",disabled:t,onClick:w,"aria-busy":t,"aria-label":t?"Submitting, please wait":"Submit Application"}),a.jsx(e,{variant:"secondary",iconLeft:r?"fa-light fa-circle-notch fa-spin":"fa-light fa-floppy-disk",label:r?"Saving…":"Save as Draft",disabled:r,onClick:L,"aria-busy":r,"aria-label":r?"Saving, please wait":"Save as Draft"})]})]})]})},parameters:{layout:"padded",docs:{description:{story:"Buttons with an animated loading spinner using FontAwesome's `fa-spin` class on `fa-circle-notch`. The top row shows the static loading state across all variants. The interactive row lets you click to trigger a 3-second loading simulation — the icon swaps to a spinner, the label changes, and the button is disabled until the operation completes. Always set `aria-busy` and update `aria-label` so screen readers announce the change."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source},description:{story:`Primary buttons indicate the main call-to-action on a page or component.\r
Use for the most important action users should take.`,...i.parameters?.docs?.description}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source},description:{story:`Secondary buttons are used for less important actions or alternatives.\r
They work well alongside primary buttons or standalone for secondary tasks.`,...n.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source},description:{story:`Tertiary buttons are de-emphasized and often used for cancellation, back navigation,\r
or optional actions. They have the least visual prominence.`,...s.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source},description:{story:"Small buttons are used in compact layouts or secondary locations.",...o.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source},description:{story:`Shows all three button variants for comparison.\r
Demonstrates the visual hierarchy of primary, secondary, and tertiary buttons.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source},description:{story:"Buttons with left-aligned icons. The icon is closely associated with the action.",...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source},description:{story:"Buttons with right-aligned icons. The icon provides directional or supplementary information.",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Icon-only buttons must include an aria-label for screen reader accessibility.\r
WCAG compliance requires this for icon-only interactive elements.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source},description:{story:`Common button actions with left-aligned icons.\r
Demonstrates realistic use cases across the variant spectrum.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Common icon-only button actions.\r
All include aria-label for accessibility. Useful for compact interfaces.`,...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Button action stack showing a complete user workflow.\r
Demonstrates proper button hierarchy in a real-world scenario.`,...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:`Larger button with extra padding for high-prominence actions.\r
Demonstrates CSS variable customization for unique use cases.`,...y.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`Demonstrates runtime CSS variable customization.\r
Shows how to override button styles without changing the component code.`,...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Shows loading state simulation and disabled state.\r
Demonstrates handling of user feedback during asynchronous operations.`,...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingSecondary, setIsLoadingSecondary] = useState(false);
    const handlePrimaryClick = () => {
      setIsLoading(true);
      setTimeout(() => setIsLoading(false), 3000);
    };
    const handleSecondaryClick = () => {
      setIsLoadingSecondary(true);
      setTimeout(() => setIsLoadingSecondary(false), 3000);
    };
    return <div style={{
      display: "flex",
      flexDirection: "column",
      gap: "32px",
      alignItems: "flex-start"
    }}>\r
        <div>\r
          <h4 style={{
          marginBottom: "12px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#555"
        }}>\r
            Static loading state — all variants\r
          </h4>\r
          <div style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap"
        }}>\r
            <Button variant="primary" iconLeft="fa-light fa-circle-notch fa-spin" label="Submitting…" disabled aria-busy="true" aria-label="Submitting, please wait" />\r
            <Button variant="secondary" iconLeft="fa-light fa-circle-notch fa-spin" label="Saving…" disabled aria-busy="true" aria-label="Saving, please wait" />\r
            <Button variant="tertiary" iconLeft="fa-light fa-circle-notch fa-spin" label="Loading…" disabled aria-busy="true" aria-label="Loading, please wait" />\r
          </div>\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: "12px",
          fontSize: "14px",
          fontWeight: 600,
          color: "#555"
        }}>\r
            Interactive demo — click to trigger loading (resets after 3 s)\r
          </h4>\r
          <div style={{
          display: "flex",
          gap: "12px",
          flexWrap: "wrap"
        }}>\r
            <Button variant="primary" iconLeft={isLoading ? "fa-light fa-circle-notch fa-spin" : "fa-light fa-paper-plane"} label={isLoading ? "Submitting…" : "Submit Application"} disabled={isLoading} onClick={handlePrimaryClick} aria-busy={isLoading} aria-label={isLoading ? "Submitting, please wait" : "Submit Application"} />\r
            <Button variant="secondary" iconLeft={isLoadingSecondary ? "fa-light fa-circle-notch fa-spin" : "fa-light fa-floppy-disk"} label={isLoadingSecondary ? "Saving…" : "Save as Draft"} disabled={isLoadingSecondary} onClick={handleSecondaryClick} aria-busy={isLoadingSecondary} aria-label={isLoadingSecondary ? "Saving, please wait" : "Save as Draft"} />\r
          </div>\r
        </div>\r
      </div>;
  },
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Buttons with an animated loading spinner using FontAwesome's \`fa-spin\` class on \`fa-circle-notch\`. The top row shows the static loading state across all variants. The interactive row lets you click to trigger a 3-second loading simulation — the icon swaps to a spinner, the label changes, and the button is disabled until the operation completes. Always set \`aria-busy\` and update \`aria-label\` so screen readers announce the change."
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Buttons in an animated loading state using FontAwesome's fa-spin class.\r
Includes an interactive demo that simulates an async operation.`,...g.parameters?.docs?.description}}};const I=["Primary","Secondary","Tertiary","Small","AllVariants","WithIconLeft","WithIconRight","IconOnly","WithLeadingIcons","IconOnlyButtons","ActionStack","LargeIcon","CustomizedWithCSSVars","DisabledState","LoadingState"];export{b as ActionStack,l as AllVariants,h as CustomizedWithCSSVars,f as DisabledState,p as IconOnly,u as IconOnlyButtons,y as LargeIcon,g as LoadingState,i as Primary,n as Secondary,o as Small,s as Tertiary,c as WithIconLeft,d as WithIconRight,m as WithLeadingIcons,I as __namedExportsOrder,T as default};
