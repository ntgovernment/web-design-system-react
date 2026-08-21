import{j as e}from"./iframe-CJcOhIH1.js";import"./preload-helper-Dc5Yqcnt.js";const i=({heading:n="Quick exit",content:E="Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger.",exitUrl:f="https://www.bom.gov.au/",redirectUrl:T="https://www.google.com/",className:b,onClick:v,ariaLabel:j="Quick exit - click to leave this page immediately"})=>{const C=r=>{v&&v(r),window.open(f,"_blank","noopener,noreferrer")?window.location.replace(T):window.location.replace(f)},S=`quick-exit${b?` ${b}`:""}`;return e.jsx("div",{className:S,onClick:C,role:"button",tabIndex:0,"aria-label":j,onKeyDown:r=>{(r.key==="Enter"||r.key===" ")&&(r.preventDefault(),C(r))},children:e.jsxs("div",{className:"quick-exit__container",children:[e.jsxs("div",{className:"quick-exit__header",children:[e.jsx("div",{className:"quick-exit__icon","aria-hidden":"true",children:e.jsx("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:e.jsx("path",{d:"M28 16L16 4L4 16M6 14V26C6 26.5304 6.21071 27.0391 6.58579 27.4142C6.96086 27.7893 7.46957 28 8 28H12V22C12 21.4696 12.2107 20.9609 12.5858 20.5858C12.9609 20.2107 13.4696 20 14 20H18C18.5304 20 19.0391 20.2107 19.4142 20.5858C19.7893 20.9609 20 21.4696 20 22V28H24C24.5304 28 25.0391 27.7893 25.4142 27.4142C25.7893 27.0391 26 26.5304 26 26V14",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),e.jsx("div",{className:"quick-exit__heading",children:n})]}),e.jsx("div",{className:"quick-exit__content",children:E})]})})};i.__docgenInfo={description:`QuickExit Component\r
\r
A floating bar that can be added to the top of a page that contains sensitive information.\r
When clicked, it allows users to quickly navigate away from a web page to hide what they were looking at.\r
\r
The component immediately redirects to an innocuous website (Bureau of Meteorology) in a new tab\r
and redirects the current tab to another innocuous site (Google). Neither tab will have an active\r
back button, though browsing history will remain intact.`,methods:[],displayName:"QuickExit",props:{heading:{required:!1,tsType:{name:"string"},description:"Main heading text for the component",defaultValue:{value:'"Quick exit"',computed:!1}},content:{required:!1,tsType:{name:"string"},description:"Descriptive text content",defaultValue:{value:`"Click anywhere on this banner to exit this page. Call 000 if you're in immediate danger."`,computed:!1}},exitUrl:{required:!1,tsType:{name:"string"},description:"URL to redirect to when clicked (default: Bureau of Meteorology)",defaultValue:{value:'"https://www.bom.gov.au/"',computed:!1}},redirectUrl:{required:!1,tsType:{name:"string"},description:"URL to redirect current tab to (default: Google)",defaultValue:{value:'"https://www.google.com/"',computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS classes for the container"},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLDivElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},name:"event"}],return:{name:"void"}}},description:"Custom click handler (called before redirect)"},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility",defaultValue:{value:'"Quick exit - click to leave this page immediately"',computed:!1}}}};const N={title:"Components/QuickExit",component:i,parameters:{layout:"fullwidth",docs:{description:{component:"A safety component that allows users to quickly exit sensitive pages. When clicked, it opens an innocuous website in a new tab and redirects the current tab to another safe site, disabling the back button."}}},tags:["autodocs"],argTypes:{heading:{control:"text",description:"Main heading text for the component"},content:{control:"text",description:"Descriptive text content displayed below the heading"},exitUrl:{control:"text",description:"URL to open in new tab when clicked"},redirectUrl:{control:"text",description:"URL to redirect current tab to"},className:{control:"text",description:"Additional CSS classes for the container"},onClick:{action:"clicked",description:"Custom click handler called before redirect"}}},t=n=>{n.preventDefault(),n.stopPropagation(),console.log("Quick exit clicked (redirect prevented in Storybook)"),alert(`Quick Exit activated!

In production, this would:
1. Open https://www.bom.gov.au/ in a new tab
2. Redirect this tab to https://www.google.com/
3. Disable the back button`)},a={args:{onClick:t},parameters:{docs:{description:{story:"The default Quick Exit component with standard heading and content. Click anywhere on the banner to trigger the exit functionality."}}}},o={args:{heading:"Leave this page quickly",onClick:t},parameters:{docs:{description:{story:"Quick Exit with a custom heading text."}}}},s={args:{heading:"Quick exit",content:"Click this banner to immediately exit. Your safety is important. Call 000 if you need emergency help or 1800 RESPECT (1800 737 732) for confidential support.",onClick:t},parameters:{docs:{description:{story:"Quick Exit with custom content that includes additional support resources."}}}},c={args:{heading:"Quick exit",content:"Click anywhere on this banner to leave this page immediately. If you're in danger, call 000 for emergency assistance or 1800 RESPECT (1800 737 732) for confidential support.",onClick:t},parameters:{docs:{description:{story:"Example usage for a domestic violence support page with relevant helpline information."}}}},l={args:{heading:"Leave quickly",content:"Click this banner to exit immediately. For child safety concerns, call 1800 700 250. In an emergency, call 000.",onClick:t},parameters:{docs:{description:{story:"Example usage for a child safety resources page with appropriate helpline contact."}}}},d={args:{heading:"Exit securely",content:"Click to exit this page securely. Your report is confidential. This action will not delete any saved drafts.",onClick:t},parameters:{docs:{description:{story:"Example usage for a whistleblower or fraud reporting portal with reassurance about data privacy."}}}},p={args:{heading:"Quick exit",content:"Exit this page quickly if you need to. For immediate mental health support, call Lifeline 13 11 14 or 000 in an emergency.",onClick:t},parameters:{docs:{description:{story:"Example usage for mental health crisis support pages with relevant crisis helplines."}}}},m={args:{exitUrl:"https://www.abc.net.au/news/weather",redirectUrl:"https://www.facebook.com/",heading:"Exit now",content:"Click to leave this page. Your browsing history will show this page, but you won't be able to use the back button.",onClick:t},parameters:{docs:{description:{story:"Quick Exit configured with custom safe URLs. This example uses ABC News Weather and Facebook."}}}},h={args:{heading:"Exit",content:"Click to leave immediately. Call 000 in an emergency.",onClick:t},parameters:{docs:{description:{story:"Example with shorter, more concise content while maintaining clarity."}}}},u={args:{heading:"Quick exit available",content:"Click anywhere on this banner to immediately leave this page and navigate to a safe website. This action will open a new tab with general weather information and redirect your current browser tab to a common search engine. Neither tab will have a functioning back button, but please note that this page will still appear in your browser's complete history. For your safety, remember to clear your browsing history if needed. In immediate danger, call emergency services on 000.",onClick:t},parameters:{docs:{description:{story:"Demonstrates how the component handles longer content text with proper wrapping and spacing."}}}},g={args:{onClick:n=>{n.preventDefault(),n.stopPropagation(),console.log("Analytics Event:",{event:"quick_exit_activated",page:window.location.pathname,timestamp:new Date().toISOString(),component:"QuickExit"}),alert(`Quick Exit with Analytics!

Tracked event:
- Event: quick_exit_activated
- Page: `+window.location.pathname+`
- Timestamp: `+new Date().toISOString()+`

In production, this would also trigger the actual exit redirect.`)}},parameters:{docs:{description:{story:"Example showing how to integrate analytics tracking with the Quick Exit component. Use the onClick prop to log events before the redirect occurs."}}}},y={render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(i,{onClick:t}),e.jsxs("div",{style:{padding:"48px 24px",textAlign:"center",background:"#f5f5f7"},children:[e.jsx("h2",{children:"Page Content"}),e.jsx("p",{style:{maxWidth:"600px",margin:"16px auto"},children:"This demonstrates what a page might look like with a Quick Exit banner at the top. The banner is prominently displayed and easily accessible, while the content below remains clearly visible and usable."})]})]}),parameters:{layout:"fullwidth",docs:{description:{story:"Example showing the Quick Exit component in context with other page content. The banner appears at the very top of the page."}}}},x={render:()=>e.jsxs("div",{style:{maxWidth:"100%"},children:[e.jsx(i,{onClick:t}),e.jsxs("div",{style:{padding:"24px",background:"#f9f9f9",marginTop:"0"},children:[e.jsx("h3",{style:{marginTop:0},children:"Accessibility Features"}),e.jsxs("ul",{style:{lineHeight:"1.8"},children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Keyboard Navigation:"})," Press Tab to focus, then Enter or Space to activate"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Screen Readers:"}),' Announced as "Quick exit - click to leave this page immediately, button"']}),e.jsxs("li",{children:[e.jsx("strong",{children:"Focus Indicator:"})," Visible orange outline (NTG theme) or green outline (Central theme)"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Role:"})," Properly identified as an interactive button element"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Color Contrast:"})," White text on red background meets WCAG AA standards"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Click Target:"})," Entire banner is clickable for easy activation"]})]})]})]}),parameters:{docs:{description:{story:"Interactive demonstration of the accessibility features built into the Quick Exit component. Try navigating with your keyboard or screen reader."}}}},k={render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h3",{style:{marginTop:0},children:"Desktop View"}),e.jsx(i,{onClick:t})]}),e.jsxs("div",{style:{marginBottom:"24px"},children:[e.jsx("h3",{children:"Mobile View (below 768px)"}),e.jsx("div",{style:{maxWidth:"375px",border:"2px solid #ddd"},children:e.jsx(i,{onClick:t})}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginTop:"8px"},children:"On mobile devices, the component adjusts padding and uses mobile typography sizes for optimal readability."})]})]}),parameters:{docs:{description:{story:"Demonstrates responsive behavior of the Quick Exit component on different screen sizes."}}}},w={render:()=>e.jsxs("div",{children:[e.jsxs("div",{style:{marginBottom:"32px"},children:[e.jsx("h3",{style:{marginTop:0},children:"NT.GOV.AU Theme (Default)"}),e.jsx(i,{onClick:t}),e.jsx("p",{style:{fontSize:"14px",color:"#666",marginTop:"8px"},children:"Features: Sharp corners (0px border-radius), Orange focus outline (#EC8C58), Lato typography"})]}),e.jsxs("div",{children:[e.jsx("h3",{children:"Central Theme"}),e.jsx("div",{style:{padding:"8px",background:"#f0f0f0",borderRadius:"4px"},children:e.jsx("p",{style:{margin:"0",fontSize:"14px",fontStyle:"italic"},children:"Note: Quick Exit is designed for external NT.GOV.AU sites only and is not currently enabled for NTG Central theme."})})]})]}),parameters:{docs:{description:{story:"The Quick Exit component is currently only available in the NT.GOV.AU external theme. It is intentionally not available for NTG Central (internal) applications."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "The default Quick Exit component with standard heading and content. Click anywhere on the banner to trigger the exit functionality."
      }
    }
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Leave this page quickly",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Quick Exit with a custom heading text."
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Quick exit",
    content: "Click this banner to immediately exit. Your safety is important. Call 000 if you need emergency help or 1800 RESPECT (1800 737 732) for confidential support.",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Quick Exit with custom content that includes additional support resources."
      }
    }
  }
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Quick exit",
    content: "Click anywhere on this banner to leave this page immediately. If you're in danger, call 000 for emergency assistance or 1800 RESPECT (1800 737 732) for confidential support.",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Example usage for a domestic violence support page with relevant helpline information."
      }
    }
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Leave quickly",
    content: "Click this banner to exit immediately. For child safety concerns, call 1800 700 250. In an emergency, call 000.",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Example usage for a child safety resources page with appropriate helpline contact."
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Exit securely",
    content: "Click to exit this page securely. Your report is confidential. This action will not delete any saved drafts.",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Example usage for a whistleblower or fraud reporting portal with reassurance about data privacy."
      }
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Quick exit",
    content: "Exit this page quickly if you need to. For immediate mental health support, call Lifeline 13 11 14 or 000 in an emergency.",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Example usage for mental health crisis support pages with relevant crisis helplines."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    exitUrl: "https://www.abc.net.au/news/weather",
    redirectUrl: "https://www.facebook.com/",
    heading: "Exit now",
    content: "Click to leave this page. Your browsing history will show this page, but you won't be able to use the back button.",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Quick Exit configured with custom safe URLs. This example uses ABC News Weather and Facebook."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Exit",
    content: "Click to leave immediately. Call 000 in an emergency.",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Example with shorter, more concise content while maintaining clarity."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    heading: "Quick exit available",
    content: "Click anywhere on this banner to immediately leave this page and navigate to a safe website. This action will open a new tab with general weather information and redirect your current browser tab to a common search engine. Neither tab will have a functioning back button, but please note that this page will still appear in your browser's complete history. For your safety, remember to clear your browsing history if needed. In immediate danger, call emergency services on 000.",
    onClick: mockClickHandler
  },
  parameters: {
    docs: {
      description: {
        story: "Demonstrates how the component handles longer content text with proper wrapping and spacing."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: (event: React.MouseEvent<HTMLDivElement>) => {
      event.preventDefault();
      event.stopPropagation();

      // Simulate analytics tracking
      console.log("Analytics Event:", {
        event: "quick_exit_activated",
        page: window.location.pathname,
        timestamp: new Date().toISOString(),
        component: "QuickExit"
      });
      alert("Quick Exit with Analytics!\\n\\nTracked event:\\n- Event: quick_exit_activated\\n- Page: " + window.location.pathname + "\\n- Timestamp: " + new Date().toISOString() + "\\n\\nIn production, this would also trigger the actual exit redirect.");
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Example showing how to integrate analytics tracking with the Quick Exit component. Use the onClick prop to log events before the redirect occurs."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex flex-column gap-3">\r
      <QuickExit onClick={mockClickHandler} />\r
      <div style={{
      padding: "48px 24px",
      textAlign: "center",
      background: "#f5f5f7"
    }}>\r
        <h2>Page Content</h2>\r
        <p style={{
        maxWidth: "600px",
        margin: "16px auto"
      }}>\r
          This demonstrates what a page might look like with a Quick Exit banner\r
          at the top. The banner is prominently displayed and easily accessible,\r
          while the content below remains clearly visible and usable.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    layout: "fullwidth",
    docs: {
      description: {
        story: "Example showing the Quick Exit component in context with other page content. The banner appears at the very top of the page."
      }
    }
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    maxWidth: "100%"
  }}>\r
      <QuickExit onClick={mockClickHandler} />\r
      <div style={{
      padding: "24px",
      background: "#f9f9f9",
      marginTop: "0"
    }}>\r
        <h3 style={{
        marginTop: 0
      }}>Accessibility Features</h3>\r
        <ul style={{
        lineHeight: "1.8"
      }}>\r
          <li>\r
            <strong>Keyboard Navigation:</strong> Press Tab to focus, then Enter\r
            or Space to activate\r
          </li>\r
          <li>\r
            <strong>Screen Readers:</strong> Announced as "Quick exit - click to\r
            leave this page immediately, button"\r
          </li>\r
          <li>\r
            <strong>Focus Indicator:</strong> Visible orange outline (NTG theme)\r
            or green outline (Central theme)\r
          </li>\r
          <li>\r
            <strong>Role:</strong> Properly identified as an interactive button\r
            element\r
          </li>\r
          <li>\r
            <strong>Color Contrast:</strong> White text on red background meets\r
            WCAG AA standards\r
          </li>\r
          <li>\r
            <strong>Click Target:</strong> Entire banner is clickable for easy\r
            activation\r
          </li>\r
        </ul>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Interactive demonstration of the accessibility features built into the Quick Exit component. Try navigating with your keyboard or screen reader."
      }
    }
  }
}`,...x.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => <div>\r
      <div style={{
      marginBottom: "24px"
    }}>\r
        <h3 style={{
        marginTop: 0
      }}>Desktop View</h3>\r
        <QuickExit onClick={mockClickHandler} />\r
      </div>\r
\r
      <div style={{
      marginBottom: "24px"
    }}>\r
        <h3>Mobile View (below 768px)</h3>\r
        <div style={{
        maxWidth: "375px",
        border: "2px solid #ddd"
      }}>\r
          <QuickExit onClick={mockClickHandler} />\r
        </div>\r
        <p style={{
        fontSize: "14px",
        color: "#666",
        marginTop: "8px"
      }}>\r
          On mobile devices, the component adjusts padding and uses mobile\r
          typography sizes for optimal readability.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates responsive behavior of the Quick Exit component on different screen sizes."
      }
    }
  }
}`,...k.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div>\r
      <div style={{
      marginBottom: "32px"
    }}>\r
        <h3 style={{
        marginTop: 0
      }}>NT.GOV.AU Theme (Default)</h3>\r
        <QuickExit onClick={mockClickHandler} />\r
        <p style={{
        fontSize: "14px",
        color: "#666",
        marginTop: "8px"
      }}>\r
          Features: Sharp corners (0px border-radius), Orange focus outline\r
          (#EC8C58), Lato typography\r
        </p>\r
      </div>\r
\r
      <div>\r
        <h3>Central Theme</h3>\r
        <div style={{
        padding: "8px",
        background: "#f0f0f0",
        borderRadius: "4px"
      }}>\r
          <p style={{
          margin: "0",
          fontSize: "14px",
          fontStyle: "italic"
        }}>\r
            Note: Quick Exit is designed for external NT.GOV.AU sites only and\r
            is not currently enabled for NTG Central theme.\r
          </p>\r
        </div>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "The Quick Exit component is currently only available in the NT.GOV.AU external theme. It is intentionally not available for NTG Central (internal) applications."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};const H=["Default","CustomHeading","CustomContent","DomesticViolenceSupport","ChildSafetyResources","WhistleblowerPortal","MentalHealthCrisis","CustomExitURLs","ShortContent","LongContent","WithAnalytics","MultipleInstances","AccessibilityDemo","ResponsiveDemo","ThemeComparison"];export{x as AccessibilityDemo,l as ChildSafetyResources,s as CustomContent,m as CustomExitURLs,o as CustomHeading,a as Default,c as DomesticViolenceSupport,u as LongContent,p as MentalHealthCrisis,y as MultipleInstances,k as ResponsiveDemo,h as ShortContent,w as ThemeComparison,d as WhistleblowerPortal,g as WithAnalytics,H as __namedExportsOrder,N as default};
