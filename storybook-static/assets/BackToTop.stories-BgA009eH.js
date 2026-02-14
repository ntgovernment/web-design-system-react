import{r as k,j as e}from"./iframe-gih_HNq7.js";import"./preload-helper-DhH6u7hw.js";const o=({label:r="Back to top",scrollThreshold:t=300,scrollDuration:S=800,forceVisible:x=!1,className:v,onClick:w,...B})=>{const[j,T]=k.useState(!1);k.useEffect(()=>{if(x){T(!0);return}const n=()=>{window.scrollY>t?T(!0):T(!1)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[t,x]);const z=n=>{n.preventDefault(),w&&w(n);const C=window.scrollY/(S/16),V=setInterval(()=>{window.scrollY===0?clearInterval(V):window.scrollBy(0,-C)},16)},D=`btn back-to-top${v?` ${v}`:""}`;return e.jsxs("button",{type:"button",className:D,onClick:z,"aria-label":r,title:r,style:{display:j||x?"inline-flex":"none"},...B,children:[e.jsx("span",{className:"back-to-top__text",children:r}),e.jsx("svg",{className:"back-to-top__icon",width:"20",height:"20",viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true",children:e.jsx("path",{d:"M10 4.586L4.293 10.293a1 1 0 001.414 1.414L10 7.414l4.293 4.293a1 1 0 001.414-1.414L10 4.586z"})})]})};o.__docgenInfo={description:`Back to Top component for scrolling to the top of the page.\r
\r
The component automatically shows/hides based on scroll position and smoothly\r
scrolls the page to the top when clicked.\r
\r
Features:\r
- Automatic visibility toggle based on scroll position\r
- Smooth scroll animation with customizable duration\r
- Accessible with ARIA labels and keyboard support\r
- Theme-aware styling using CSS variables\r
- Up arrow icon included`,methods:[],displayName:"BackToTop",props:{label:{required:!1,tsType:{name:"string"},description:'Label text to display next to the icon (default: "Back to top")',defaultValue:{value:'"Back to top"',computed:!1}},scrollThreshold:{required:!1,tsType:{name:"number"},description:"Scroll offset threshold in pixels before button becomes visible (default: 300)",defaultValue:{value:"300",computed:!1}},scrollDuration:{required:!1,tsType:{name:"number"},description:"Duration of smooth scroll animation in milliseconds (default: 800)",defaultValue:{value:"800",computed:!1}},forceVisible:{required:!1,tsType:{name:"boolean"},description:"Force the button to always be visible (useful for Storybook/demos, default: false)",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom CSS class to apply to the button"}}};const P={title:"Components/Back to Top",component:o,parameters:{layout:"centered",docs:{description:{component:"A fixed-position button component that scrolls the page smoothly back to the top when clicked. The component automatically shows and hides based on scroll position, making it ideal for long pages."}}},tags:["autodocs"],argTypes:{label:{control:"text",description:"Text label displayed next to the icon"},scrollThreshold:{control:{type:"number",min:0,max:1e3,step:100},description:"Pixels scrolled before button becomes visible (default: 300)"},scrollDuration:{control:{type:"number",min:100,max:2e3,step:100},description:"Duration of smooth scroll animation in milliseconds"},disabled:{control:"boolean",description:"Disable the button to prevent user interaction"}}},s={args:{label:"Back to top",scrollThreshold:300,scrollDuration:800,forceVisible:!0},parameters:{docs:{description:{story:"The default Back to Top button. Automatically appears when scrolling past 300px and smoothly animates back to the top over 800ms. Includes proper focus states for keyboard navigation."}}}},i={args:{label:"Back to top",scrollThreshold:300,scrollDuration:400,forceVisible:!0},parameters:{docs:{description:{story:"Faster scroll animation (400ms) for quicker page navigation. The button still appears at the same threshold but takes less time to scroll to the top."}}}},a={args:{label:"Back to top",scrollThreshold:300,scrollDuration:1200,forceVisible:!0},parameters:{docs:{description:{story:"Slower scroll animation (1200ms) for a more gradual page movement. Useful for complex pages where users benefit from seeing the scroll progress."}}}},l={args:{label:"Back to top",scrollThreshold:500,scrollDuration:800,forceVisible:!0},parameters:{docs:{description:{story:"The button appears only after scrolling 500px down the page, making it less obtrusive on pages with important above-the-fold content."}}}},c={args:{label:"Back to top",scrollThreshold:150,scrollDuration:800,forceVisible:!0},parameters:{docs:{description:{story:"The button appears after scrolling just 150px, making it available early. Useful for pages where quick navigation back to the top is a priority."}}}},d={args:{label:"Return to top",scrollThreshold:300,scrollDuration:800,forceVisible:!0},parameters:{docs:{description:{story:`The label can be customized to match your application's terminology or language. This example uses "Return to top" instead of the default.`}}}},p={args:{label:"Retour en haut",scrollThreshold:300,scrollDuration:800,forceVisible:!0},parameters:{docs:{description:{story:"Back to Top button with French localization. The component uses the provided label for both button text and accessibility attributes."}}}},m={args:{label:"Back to top",disabled:!0,scrollThreshold:300,scrollDuration:800,forceVisible:!0},render:r=>e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx(o,{...r}),e.jsx("p",{style:{marginTop:"1rem",fontSize:"14px",color:"#666"},children:"The button is disabled and will not respond to clicks"})]}),parameters:{docs:{description:{story:"Disabled state of the Back to Top button. The button is visually distinct and does not respond to user interaction. Use when the page is too short or when the functionality is temporarily unavailable."}}}},h={args:{label:"Back to top",scrollThreshold:0,scrollDuration:800,forceVisible:!0},render:r=>e.jsxs("div",{style:{textAlign:"center",padding:"2rem"},children:[e.jsx("p",{style:{marginBottom:"1rem",fontSize:"14px",color:"#666"},children:"Press Tab to focus the button and see the focus outline"}),e.jsx(o,{...r}),e.jsxs("p",{style:{marginTop:"1rem",fontSize:"12px",color:"#999"},children:["Focus outline color depends on the active theme:",e.jsx("br",{}),e.jsx("strong",{children:"NTG Theme:"})," Orange (#EC8C58)",e.jsx("br",{}),e.jsx("strong",{children:"Central Theme:"})," Green (#20a030)"]})]}),parameters:{docs:{description:{story:"This story demonstrates the focus state with a visible outline. The button is always visible (scrollThreshold: 0) so you can focus it with Tab and see the theme-specific focus outline."}}}},u={render:()=>e.jsxs("div",{style:{padding:"2rem",textAlign:"center"},children:[e.jsx("h3",{style:{marginBottom:"1.5rem"},children:"Multiple Configuration Examples"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(250px, 1fr))",gap:"2rem",marginBottom:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"1rem"},children:"Fast Navigation"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginBottom:"1rem"},children:"scrollDuration: 400ms"}),e.jsx(o,{label:"Quick top",scrollThreshold:300,scrollDuration:400,forceVisible:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"1rem"},children:"Balanced"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginBottom:"1rem"},children:"scrollDuration: 800ms (default)"}),e.jsx(o,{label:"Back to top",scrollThreshold:300,scrollDuration:800,forceVisible:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"1rem"},children:"Smooth Experience"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginBottom:"1rem"},children:"scrollDuration: 1200ms"}),e.jsx(o,{label:"Scroll top",scrollThreshold:300,scrollDuration:1200,forceVisible:!0})]})]}),e.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"2rem"},children:"Each configuration can be used based on user preference or page design"})]}),parameters:{docs:{description:{story:"This story shows different configurations of the Back to Top button side-by-side, demonstrating how scrollDuration affects the user experience."}}}},g={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h3",{style:{marginBottom:"1.5rem"},children:"Back to Top Component States"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"1rem",fontSize:"14px"},children:"Default State"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginBottom:"1rem"},children:"Light background with border"}),e.jsx(o,{label:"Back to top",scrollThreshold:0,scrollDuration:800,forceVisible:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"1rem",fontSize:"14px"},children:"Hover State"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginBottom:"1rem"},children:"Dark background with inverse text"}),e.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"0.5rem",fontStyle:"italic"},children:"Hover over the button below to see this state"}),e.jsx(o,{label:"Back to top",scrollThreshold:0,scrollDuration:800,forceVisible:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"1rem",fontSize:"14px"},children:"Focus State"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginBottom:"1rem"},children:"Theme-specific outline (4px solid)"}),e.jsx("p",{style:{fontSize:"12px",color:"#999",marginTop:"0.5rem",fontStyle:"italic"},children:"Press Tab to focus the button below"}),e.jsx(o,{label:"Back to top",scrollThreshold:0,scrollDuration:800,forceVisible:!0})]}),e.jsxs("div",{children:[e.jsx("h4",{style:{marginBottom:"1rem",fontSize:"14px"},children:"Disabled State"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",marginBottom:"1rem"},children:"Reduced opacity, no interaction"}),e.jsx(o,{label:"Back to top",disabled:!0,scrollThreshold:0,scrollDuration:800,forceVisible:!0})]})]}),e.jsxs("div",{style:{marginTop:"2rem",padding:"1rem",backgroundColor:"#f5f5f5",borderRadius:"4px"},children:[e.jsx("h4",{style:{marginBottom:"0.5rem",fontSize:"14px"},children:"Token-Based Styling"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",margin:0},children:"All colors are derived from design tokens. Switch between NT.GOV.AU and Central themes in the toolbar to see theme-specific focus colors and other styling variations."})]})]}),parameters:{docs:{description:{story:"Visual demonstration of the Back to Top button in all its states. Shows how the component responds to user interaction and theme changes."}}}},f={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h1",{style:{marginBottom:"1rem"},children:"Long Page Example"}),e.jsx("p",{style:{marginBottom:"1rem"},children:"Scroll down this page to see the Back to Top button appear in the bottom-right corner. The button will automatically show when you've scrolled past 300 pixels."}),Array.from({length:8}).map((r,t)=>e.jsxs("div",{style:{marginBottom:"3rem"},children:[e.jsxs("h2",{style:{fontSize:"20px",marginBottom:"1rem"},children:["Section ",t+1]}),e.jsx("p",{style:{lineHeight:"1.6",marginBottom:"1rem"},children:"This is a realistic example showing how the Back to Top button appears on a long page. When you scroll down past the first 300 pixels, the button becomes visible in the fixed position at the bottom-right of the screen."}),e.jsx("p",{style:{lineHeight:"1.6"},children:"The component is built with accessibility in mind. You can navigate to it using the keyboard Tab key, and it will display a high-contrast focus outline (orange for NT.GOV.AU theme, green for Central theme). When clicked, the page smoothly scrolls back to the top over 800ms, providing a pleasant user experience."})]},t)),e.jsxs("div",{style:{padding:"1.5rem",backgroundColor:"#f9f9f9",border:"1px solid #ddd",borderRadius:"4px",marginTop:"2rem"},children:[e.jsx("h3",{style:{marginTop:0},children:"You've reached the bottom!"}),e.jsx("p",{children:"Click the Back to Top button in the bottom-right corner or keep scrolling up manually. The button will disappear once you scroll back above 300 pixels from the top."})]}),e.jsx(o,{label:"Back to top",scrollThreshold:300,forceVisible:!0})]}),parameters:{layout:"fullscreen",docs:{description:{story:"A realistic example of the Back to Top button on a long page. Scroll down to see the button appear and test its functionality."}}}},b={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h3",{style:{marginBottom:"1.5rem"},children:"Responsive Behavior"}),e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(280px, 1fr))",gap:"2rem",marginBottom:"2rem"},children:[e.jsxs("div",{style:{border:"1px solid #ddd",padding:"1rem",borderRadius:"4px"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"14px"},children:"Desktop (large)"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 1rem 0"},children:"Position: bottom-right with 2rem offset"}),e.jsx("p",{style:{fontSize:"12px",color:"#999",margin:0},children:"Padding: 8px (default)"})]}),e.jsxs("div",{style:{border:"1px solid #ddd",padding:"1rem",borderRadius:"4px"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"14px"},children:"Tablet (medium)"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 1rem 0"},children:"Position: bottom-right with 1.5rem offset (responsive)"}),e.jsx("p",{style:{fontSize:"12px",color:"#999",margin:0},children:"Padding: 8px (maintains consistency)"})]}),e.jsxs("div",{style:{border:"1px solid #ddd",padding:"1rem",borderRadius:"4px"},children:[e.jsx("h4",{style:{margin:"0 0 0.5rem 0",fontSize:"14px"},children:"Mobile (small)"}),e.jsx("p",{style:{fontSize:"12px",color:"#666",margin:"0 0 1rem 0"},children:"Position: bottom-right with 1rem offset"}),e.jsx("p",{style:{fontSize:"12px",color:"#999",margin:0},children:"Padding: 8px (compact but accessible)"})]})]}),e.jsx("div",{style:{padding:"1.5rem",backgroundColor:"#f9f9f9",border:"1px solid #ddd",borderRadius:"4px"},children:e.jsxs("p",{style:{margin:0},children:[e.jsx("strong",{children:"Note:"})," Resize your browser window to see how the Back to Top button adjusts its position. The component uses CSS media queries to adapt spacing for different screen sizes while maintaining accessibility across all devices."]})})]}),parameters:{docs:{description:{story:"Demonstrates how the Back to Top button adapts to different screen sizes. Try resizing your browser to see the responsive adjustments in CSS media queries."}}}},y={render:()=>e.jsxs("div",{style:{padding:"2rem"},children:[e.jsx("h3",{style:{marginBottom:"2rem"},children:"Integration Example"}),e.jsxs("nav",{style:{backgroundColor:"#f5f5f7",padding:"1rem",borderRadius:"4px",marginBottom:"2rem"},children:[e.jsx("p",{style:{margin:"0 0 0.5rem 0",fontSize:"14px"},children:e.jsx("strong",{children:"Navigation"})}),e.jsx("p",{style:{margin:0,fontSize:"12px",color:"#666"},children:"Primary navigation goes here"})]}),Array.from({length:4}).map((r,t)=>e.jsxs("div",{style:{marginBottom:"2rem"},children:[e.jsxs("h4",{style:{marginBottom:"0.5rem"},children:["Section ",t+1]}),e.jsx("p",{style:{margin:0,fontSize:"14px",lineHeight:"1.6"},children:"Sample content that demonstrates how the Back to Top button works within a realistic page layout. On longer pages, users can quickly return to the navigation or page header."})]},t)),e.jsx("footer",{style:{backgroundColor:"#f5f5f7",padding:"1rem",borderRadius:"4px",marginTop:"2rem",fontSize:"12px",color:"#666"},children:e.jsx("p",{style:{margin:0},children:"Footer content goes here"})}),e.jsx("div",{style:{marginTop:"2rem",padding:"1rem",backgroundColor:"#f0f8ff",border:"1px solid #b3d9ff",borderRadius:"4px"},children:e.jsxs("p",{style:{margin:0,fontSize:"12px"},children:["💡 ",e.jsx("strong",{children:"Tip:"})," This page includes a Back to Top button. Scroll down and it will appear in the bottom-right corner. This is especially useful for long documentation pages, blog posts, and content-heavy applications."]})}),e.jsx(o,{label:"Back to top",scrollThreshold:300,forceVisible:!0})]}),parameters:{layout:"fullscreen",docs:{description:{story:"Shows how the Back to Top button integrates with typical page layouts including navigation, content sections, and footer. Scroll down to see it in action."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Back to top",
    scrollThreshold: 300,
    scrollDuration: 800,
    forceVisible: true
  },
  parameters: {
    docs: {
      description: {
        story: "The default Back to Top button. Automatically appears when scrolling past 300px and smoothly animates back to the top over 800ms. Includes proper focus states for keyboard navigation."
      }
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Default Back to Top button with standard configuration.\r
Shows after scrolling 300px and takes 800ms to scroll to top.\r

**Note**: To see this component in action, scroll down on this page\r
and the button will appear in the bottom-right corner.`,...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Back to top",
    scrollThreshold: 300,
    scrollDuration: 400,
    forceVisible: true
  },
  parameters: {
    docs: {
      description: {
        story: "Faster scroll animation (400ms) for quicker page navigation. The button still appears at the same threshold but takes less time to scroll to the top."
      }
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`Fast scroll animation that returns to top in just 400ms.\r
Good for users who prefer quicker page navigation.`,...i.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Back to top",
    scrollThreshold: 300,
    scrollDuration: 1200,
    forceVisible: true
  },
  parameters: {
    docs: {
      description: {
        story: "Slower scroll animation (1200ms) for a more gradual page movement. Useful for complex pages where users benefit from seeing the scroll progress."
      }
    }
  }
}`,...a.parameters?.docs?.source},description:{story:`Slow scroll animation that returns to top in 1200ms.\r
Creates a more pronounced visual effect and is accessible for users\r
who prefer slower animations.`,...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Back to top",
    scrollThreshold: 500,
    scrollDuration: 800,
    forceVisible: true
  },
  parameters: {
    docs: {
      description: {
        story: "The button appears only after scrolling 500px down the page, making it less obtrusive on pages with important above-the-fold content."
      }
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Higher scroll threshold (500px) makes the button appear only after\r
scrolling further down the page. Useful for pages with prominent\r
above-the-fold content.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Back to top",
    scrollThreshold: 150,
    scrollDuration: 800,
    forceVisible: true
  },
  parameters: {
    docs: {
      description: {
        story: "The button appears after scrolling just 150px, making it available early. Useful for pages where quick navigation back to the top is a priority."
      }
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Lower scroll threshold (150px) makes the button appear earlier when\r
the user scrolls even slightly down the page. Good for shorter pages\r
or when early access to navigation is important.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Return to top",
    scrollThreshold: 300,
    scrollDuration: 800,
    forceVisible: true
  },
  parameters: {
    docs: {
      description: {
        story: 'The label can be customized to match your application\\'s terminology or language. This example uses "Return to top" instead of the default.'
      }
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Custom label text instead of the default "Back to top".\r
Allows for localization or domain-specific language.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Retour en haut",
    scrollThreshold: 300,
    scrollDuration: 800,
    forceVisible: true
  },
  parameters: {
    docs: {
      description: {
        story: "Back to Top button with French localization. The component uses the provided label for both button text and accessibility attributes."
      }
    }
  }
}`,...p.parameters?.docs?.source},description:{story:"Localized button for French language users.",...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Back to top",
    disabled: true,
    scrollThreshold: 300,
    scrollDuration: 800,
    forceVisible: true
  },
  render: args => <div style={{
    textAlign: "center",
    padding: "2rem"
  }}>\r
      <BackToTop {...args} />\r
      <p style={{
      marginTop: "1rem",
      fontSize: "14px",
      color: "#666"
    }}>\r
        The button is disabled and will not respond to clicks\r
      </p>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Disabled state of the Back to Top button. The button is visually distinct and does not respond to user interaction. Use when the page is too short or when the functionality is temporarily unavailable."
      }
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Disabled state prevents user interaction and shows reduced visual prominence.\r
Use when scroll-to-top functionality is unavailable or not applicable.`,...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Back to top",
    scrollThreshold: 0,
    scrollDuration: 800,
    forceVisible: true
  },
  render: args => <div style={{
    textAlign: "center",
    padding: "2rem"
  }}>\r
      <p style={{
      marginBottom: "1rem",
      fontSize: "14px",
      color: "#666"
    }}>\r
        Press Tab to focus the button and see the focus outline\r
      </p>\r
      <BackToTop {...args} />\r
      <p style={{
      marginTop: "1rem",
      fontSize: "12px",
      color: "#999"
    }}>\r
        Focus outline color depends on the active theme:\r
        <br />\r
        <strong>NTG Theme:</strong> Orange (#EC8C58)\r
        <br />\r
        <strong>Central Theme:</strong> Green (#20a030)\r
      </p>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "This story demonstrates the focus state with a visible outline. The button is always visible (scrollThreshold: 0) so you can focus it with Tab and see the theme-specific focus outline."
      }
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Demonstration of focus state with keyboard navigation.\r
Press Tab to focus the button and see the theme-specific outline.\r

**NT.GOV.AU Theme**: Orange outline (#EC8C58)\r
**Central Theme**: Green outline (#20a030)`,...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "2rem",
    textAlign: "center"
  }}>\r
      <h3 style={{
      marginBottom: "1.5rem"
    }}>\r
        Multiple Configuration Examples\r
      </h3>\r
\r
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "2rem",
      marginBottom: "2rem"
    }}>\r
        <div>\r
          <h4 style={{
          marginBottom: "1rem"
        }}>Fast Navigation</h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginBottom: "1rem"
        }}>\r
            scrollDuration: 400ms\r
          </p>\r
          <BackToTop label="Quick top" scrollThreshold={300} scrollDuration={400} forceVisible={true} />\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: "1rem"
        }}>Balanced</h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginBottom: "1rem"
        }}>\r
            scrollDuration: 800ms (default)\r
          </p>\r
          <BackToTop label="Back to top" scrollThreshold={300} scrollDuration={800} forceVisible={true} />\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: "1rem"
        }}>Smooth Experience</h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginBottom: "1rem"
        }}>\r
            scrollDuration: 1200ms\r
          </p>\r
          <BackToTop label="Scroll top" scrollThreshold={300} scrollDuration={1200} forceVisible={true} />\r
        </div>\r
      </div>\r
\r
      <p style={{
      fontSize: "12px",
      color: "#999",
      marginTop: "2rem"
    }}>\r
        Each configuration can be used based on user preference or page design\r
      </p>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "This story shows different configurations of the Back to Top button side-by-side, demonstrating how scrollDuration affects the user experience."
      }
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Multiple Back to Top buttons with different configurations.\r
Shows how different settings can be used in the same application.`,...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "2rem"
  }}>\r
      <h3 style={{
      marginBottom: "1.5rem"
    }}>Back to Top Component States</h3>\r
\r
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
      gap: "2rem"
    }}>\r
        <div>\r
          <h4 style={{
          marginBottom: "1rem",
          fontSize: "14px"
        }}>\r
            Default State\r
          </h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginBottom: "1rem"
        }}>\r
            Light background with border\r
          </p>\r
          <BackToTop label="Back to top" scrollThreshold={0} scrollDuration={800} forceVisible={true} />\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: "1rem",
          fontSize: "14px"
        }}>\r
            Hover State\r
          </h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginBottom: "1rem"
        }}>\r
            Dark background with inverse text\r
          </p>\r
          <p style={{
          fontSize: "12px",
          color: "#999",
          marginTop: "0.5rem",
          fontStyle: "italic"
        }}>\r
            Hover over the button below to see this state\r
          </p>\r
          <BackToTop label="Back to top" scrollThreshold={0} scrollDuration={800} forceVisible={true} />\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: "1rem",
          fontSize: "14px"
        }}>\r
            Focus State\r
          </h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginBottom: "1rem"
        }}>\r
            Theme-specific outline (4px solid)\r
          </p>\r
          <p style={{
          fontSize: "12px",
          color: "#999",
          marginTop: "0.5rem",
          fontStyle: "italic"
        }}>\r
            Press Tab to focus the button below\r
          </p>\r
          <BackToTop label="Back to top" scrollThreshold={0} scrollDuration={800} forceVisible={true} />\r
        </div>\r
\r
        <div>\r
          <h4 style={{
          marginBottom: "1rem",
          fontSize: "14px"
        }}>\r
            Disabled State\r
          </h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          marginBottom: "1rem"
        }}>\r
            Reduced opacity, no interaction\r
          </p>\r
          <BackToTop label="Back to top" disabled scrollThreshold={0} scrollDuration={800} forceVisible={true} />\r
        </div>\r
      </div>\r
\r
      <div style={{
      marginTop: "2rem",
      padding: "1rem",
      backgroundColor: "#f5f5f5",
      borderRadius: "4px"
    }}>\r
        <h4 style={{
        marginBottom: "0.5rem",
        fontSize: "14px"
      }}>\r
          Token-Based Styling\r
        </h4>\r
        <p style={{
        fontSize: "12px",
        color: "#666",
        margin: 0
      }}>\r
          All colors are derived from design tokens. Switch between NT.GOV.AU\r
          and Central themes in the toolbar to see theme-specific focus colors\r
          and other styling variations.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Visual demonstration of the Back to Top button in all its states. Shows how the component responds to user interaction and theme changes."
      }
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Visual demonstration of states across the component lifecycle.\r
Shows default, hover, and focus states for visual documentation.`,...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "2rem"
  }}>\r
      <h1 style={{
      marginBottom: "1rem"
    }}>Long Page Example</h1>\r
      <p style={{
      marginBottom: "1rem"
    }}>\r
        Scroll down this page to see the Back to Top button appear in the\r
        bottom-right corner. The button will automatically show when you've\r
        scrolled past 300 pixels.\r
      </p>\r
\r
      {/* Generate enough content to enable scrolling */}\r
      {Array.from({
      length: 8
    }).map((_, index) => <div key={index} style={{
      marginBottom: "3rem"
    }}>\r
          <h2 style={{
        fontSize: "20px",
        marginBottom: "1rem"
      }}>\r
            Section {index + 1}\r
          </h2>\r
          <p style={{
        lineHeight: "1.6",
        marginBottom: "1rem"
      }}>\r
            This is a realistic example showing how the Back to Top button\r
            appears on a long page. When you scroll down past the first 300\r
            pixels, the button becomes visible in the fixed position at the\r
            bottom-right of the screen.\r
          </p>\r
          <p style={{
        lineHeight: "1.6"
      }}>\r
            The component is built with accessibility in mind. You can navigate\r
            to it using the keyboard Tab key, and it will display a\r
            high-contrast focus outline (orange for NT.GOV.AU theme, green for\r
            Central theme). When clicked, the page smoothly scrolls back to the\r
            top over 800ms, providing a pleasant user experience.\r
          </p>\r
        </div>)}\r
\r
      <div style={{
      padding: "1.5rem",
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      borderRadius: "4px",
      marginTop: "2rem"
    }}>\r
        <h3 style={{
        marginTop: 0
      }}>You've reached the bottom!</h3>\r
        <p>\r
          Click the Back to Top button in the bottom-right corner or keep\r
          scrolling up manually. The button will disappear once you scroll back\r
          above 300 pixels from the top.\r
        </p>\r
      </div>\r
\r
      {/* The component is rendered outside the story content for demo */}\r
      <BackToTop label="Back to top" scrollThreshold={300} forceVisible={true} />\r
    </div>,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "A realistic example of the Back to Top button on a long page. Scroll down to see the button appear and test its functionality."
      }
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Long page example showing how the Back to Top button\r
behaves on a realistic page with substantial content.`,...f.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "2rem"
  }}>\r
      <h3 style={{
      marginBottom: "1.5rem"
    }}>Responsive Behavior</h3>\r
\r
      <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "2rem",
      marginBottom: "2rem"
    }}>\r
        <div style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "4px"
      }}>\r
          <h4 style={{
          margin: "0 0 0.5rem 0",
          fontSize: "14px"
        }}>\r
            Desktop (large)\r
          </h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          margin: "0 0 1rem 0"
        }}>\r
            Position: bottom-right with 2rem offset\r
          </p>\r
          <p style={{
          fontSize: "12px",
          color: "#999",
          margin: 0
        }}>\r
            Padding: 8px (default)\r
          </p>\r
        </div>\r
\r
        <div style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "4px"
      }}>\r
          <h4 style={{
          margin: "0 0 0.5rem 0",
          fontSize: "14px"
        }}>\r
            Tablet (medium)\r
          </h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          margin: "0 0 1rem 0"
        }}>\r
            Position: bottom-right with 1.5rem offset (responsive)\r
          </p>\r
          <p style={{
          fontSize: "12px",
          color: "#999",
          margin: 0
        }}>\r
            Padding: 8px (maintains consistency)\r
          </p>\r
        </div>\r
\r
        <div style={{
        border: "1px solid #ddd",
        padding: "1rem",
        borderRadius: "4px"
      }}>\r
          <h4 style={{
          margin: "0 0 0.5rem 0",
          fontSize: "14px"
        }}>\r
            Mobile (small)\r
          </h4>\r
          <p style={{
          fontSize: "12px",
          color: "#666",
          margin: "0 0 1rem 0"
        }}>\r
            Position: bottom-right with 1rem offset\r
          </p>\r
          <p style={{
          fontSize: "12px",
          color: "#999",
          margin: 0
        }}>\r
            Padding: 8px (compact but accessible)\r
          </p>\r
        </div>\r
      </div>\r
\r
      <div style={{
      padding: "1.5rem",
      backgroundColor: "#f9f9f9",
      border: "1px solid #ddd",
      borderRadius: "4px"
    }}>\r
        <p style={{
        margin: 0
      }}>\r
          <strong>Note:</strong> Resize your browser window to see how the Back\r
          to Top button adjusts its position. The component uses CSS media\r
          queries to adapt spacing for different screen sizes while maintaining\r
          accessibility across all devices.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Demonstrates how the Back to Top button adapts to different screen sizes. Try resizing your browser to see the responsive adjustments in CSS media queries."
      }
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Responsive behavior demonstration.\r
Shows how the component adapts to different screen sizes.`,...b.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    padding: "2rem"
  }}>\r
      <h3 style={{
      marginBottom: "2rem"
    }}>Integration Example</h3>\r
\r
      {/* Navigation section */}\r
      <nav style={{
      backgroundColor: "#f5f5f7",
      padding: "1rem",
      borderRadius: "4px",
      marginBottom: "2rem"
    }}>\r
        <p style={{
        margin: "0 0 0.5rem 0",
        fontSize: "14px"
      }}>\r
          <strong>Navigation</strong>\r
        </p>\r
        <p style={{
        margin: 0,
        fontSize: "12px",
        color: "#666"
      }}>\r
          Primary navigation goes here\r
        </p>\r
      </nav>\r
\r
      {/* Main content */}\r
      {Array.from({
      length: 4
    }).map((_, index) => <div key={index} style={{
      marginBottom: "2rem"
    }}>\r
          <h4 style={{
        marginBottom: "0.5rem"
      }}>Section {index + 1}</h4>\r
          <p style={{
        margin: 0,
        fontSize: "14px",
        lineHeight: "1.6"
      }}>\r
            Sample content that demonstrates how the Back to Top button works\r
            within a realistic page layout. On longer pages, users can quickly\r
            return to the navigation or page header.\r
          </p>\r
        </div>)}\r
\r
      {/* Footer section */}\r
      <footer style={{
      backgroundColor: "#f5f5f7",
      padding: "1rem",
      borderRadius: "4px",
      marginTop: "2rem",
      fontSize: "12px",
      color: "#666"
    }}>\r
        <p style={{
        margin: 0
      }}>Footer content goes here</p>\r
      </footer>\r
\r
      <div style={{
      marginTop: "2rem",
      padding: "1rem",
      backgroundColor: "#f0f8ff",
      border: "1px solid #b3d9ff",
      borderRadius: "4px"
    }}>\r
        <p style={{
        margin: 0,
        fontSize: "12px"
      }}>\r
          💡 <strong>Tip:</strong> This page includes a Back to Top button.\r
          Scroll down and it will appear in the bottom-right corner. This is\r
          especially useful for long documentation pages, blog posts, and\r
          content-heavy applications.\r
        </p>\r
      </div>\r
\r
      {/* Back to Top component - always rendered */}\r
      <BackToTop label="Back to top" scrollThreshold={300} forceVisible={true} />\r
    </div>,
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story: "Shows how the Back to Top button integrates with typical page layouts including navigation, content sections, and footer. Scroll down to see it in action."
      }
    }
  }
}`,...y.parameters?.docs?.source},description:{story:`Integration example showing Back to Top with real content patterns.\r
Demonstrates best practices for using multiple components together.`,...y.parameters?.docs?.description}}};const F=["Default","FastScroll","SlowScroll","HigherThreshold","LowerThreshold","CustomLabel","LocalizedFrench","Disabled","FocusState","MultipleConfigurations","AllStates","OnALongPage","ResponsiveBehavior","IntegrationExample"];export{g as AllStates,d as CustomLabel,s as Default,m as Disabled,i as FastScroll,h as FocusState,l as HigherThreshold,y as IntegrationExample,p as LocalizedFrench,c as LowerThreshold,u as MultipleConfigurations,f as OnALongPage,b as ResponsiveBehavior,a as SlowScroll,F as __namedExportsOrder,P as default};
