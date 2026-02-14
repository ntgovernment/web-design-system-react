import{r as x,j as e}from"./iframe-CvkVNEqq.js";import"./preload-helper-DsXpFtqW.js";const b=({items:o,showOpenCloseAll:j=!0,alwaysOpen:y=!1,theme:T,className:S=""})=>{const[v,C]=x.useState(new Set(o.filter(t=>t.defaultOpen).map(t=>t.id))),k=x.useCallback(t=>{C(a=>{const i=new Set(a);return i.has(t)?i.delete(t):(y||i.clear(),i.add(t)),i})},[y]),I=x.useCallback(()=>{C(new Set(o.map(t=>t.id)))},[o]),N=x.useCallback(()=>{C(new Set)},[]),O=v.size===o.length&&o.length>0,w=`accordion-${Math.random().toString(36).substr(2,9)}`;return e.jsxs("div",{className:S,"data-theme":T,children:[j&&o.length>0&&e.jsx("div",{className:"accordion-controls",children:e.jsx("button",{type:"button",className:"accordion-controls-link",onClick:O?N:I,"aria-label":O?"Close all accordions":"Open all accordions",children:O?"Close all":"Open all"})}),e.jsx("div",{className:"accordion",id:w,children:o.map(t=>{const a=v.has(t.id),i=`${w}-heading-${t.id}`,A=`${w}-collapse-${t.id}`;return e.jsxs("div",{className:"accordion-item",children:[e.jsx("h2",{className:"accordion-header",id:i,children:e.jsxs("button",{className:`accordion-button${a?"":" collapsed"}`,type:"button",onClick:()=>k(t.id),"aria-expanded":a,"aria-controls":A,children:[t.showIcon&&t.icon&&e.jsx("span",{className:"accordion-button-icon","aria-hidden":"true",children:e.jsx("i",{className:t.icon})}),t.title]})}),e.jsx("div",{id:A,className:`accordion-collapse collapse${a?" show":""}`,"aria-labelledby":i,"data-bs-parent":y?void 0:`#${w}`,children:e.jsx("div",{className:"accordion-body",children:t.content})})]},t.id)})})]})};b.__docgenInfo={description:`Accordion Component\r
\r
A collapsable and expandable panel of content that gives the user choice over what they see.\r
\r
Usage Guidelines:\r
- Always use accordions in groups (minimum of 3 items)\r
- Maximum of 6-8 items per group\r
- Use for content relevant to specific user groups, not main page content\r
- Make accordion headings self-explanatory, descriptive and succinct\r
\r
@example\r
\`\`\`tsx\r
<Accordion\r
  items={[\r
    { id: '1', title: 'Question 1', content: <p>Answer 1</p> },\r
    { id: '2', title: 'Question 2', content: <p>Answer 2</p> },\r
    { id: '3', title: 'Question 3', content: <p>Answer 3</p> },\r
  ]}\r
  showOpenCloseAll={true}\r
/>\r
\`\`\``,methods:[],displayName:"Accordion",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"AccordionItemProps"}],raw:"AccordionItemProps[]"},description:"Array of accordion items to display"},showOpenCloseAll:{required:!1,tsType:{name:"boolean"},description:'Whether to show "Open/Close all" controls',defaultValue:{value:"true",computed:!1}},alwaysOpen:{required:!1,tsType:{name:"boolean"},description:"Allow multiple items to be open simultaneously",defaultValue:{value:"false",computed:!1}},theme:{required:!1,tsType:{name:"union",raw:'"ntg" | "central"',elements:[{name:"literal",value:'"ntg"'},{name:"literal",value:'"central"'}]},description:"Theme variant"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names",defaultValue:{value:'""',computed:!1}}}};const U={title:"Components/Accordion",component:b,parameters:{layout:"padded",docs:{description:{component:"A collapsable and expandable panel of content that gives the user choice over what they see. Accordions allow users to show and hide related sections of content quickly. They should be used sparingly - if users need most of the content on a page, it should be formatted in plain text, not hidden in an accordion."}}},tags:["autodocs"],argTypes:{items:{description:"Array of accordion items to display",control:{type:"object"}},showOpenCloseAll:{control:"boolean",description:'Show "Open/Close all" link at top right',table:{defaultValue:{summary:"true"}}},alwaysOpen:{control:"boolean",description:"Allow multiple accordions to be open simultaneously",table:{defaultValue:{summary:"false"}}},theme:{control:"select",options:["ntg","central"],description:"Theme variant (ntg for external, central for intranet)"},className:{control:"text",description:"Additional CSS class names"}}},n={item1:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["This is the first item's accordion body. It demonstrates standard text content with ",e.jsx("a",{href:"#",children:"inline links"})," and"," ",e.jsx("strong",{children:"text formatting"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Bullet point one with relevant information"}),e.jsx("li",{children:"Bullet point two with additional details"}),e.jsx("li",{children:"Bullet point three with supporting context"})]})]}),item2:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"The second accordion contains information relevant to a specific subset of users. This helps keep the main page uncluttered while still providing access to important details."}),e.jsx("p",{children:"Multiple paragraphs can be included with appropriate spacing and formatting to improve readability."})]}),item3:e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{marginTop:0},children:"Subheading within accordion"}),e.jsx("p",{children:"Accordions can contain various content types including headings, paragraphs, lists, and links to other resources."}),e.jsxs("p",{children:["Learn more about ",e.jsx("a",{href:"#",children:"related topics"})," or visit the"," ",e.jsx("a",{href:"#",children:"documentation page"})," for additional guidance."]})]}),item4:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"This section provides additional context and information that supplements the main page content."}),e.jsx("p",{children:"Use accordions to organize related information into logical, digestible sections."})]})},s={args:{items:[{id:"accordion-1",title:"What services are available?",content:n.item1,defaultOpen:!1},{id:"accordion-2",title:"How do I apply for assistance?",content:n.item2,defaultOpen:!1},{id:"accordion-3",title:"What documentation do I need?",content:n.item3,defaultOpen:!1}],showOpenCloseAll:!0,alwaysOpen:!1}},r={args:{items:[{id:"icon-1",title:"Licenses and permits",content:n.item1,icon:"fa-light fa-id-card",showIcon:!0},{id:"icon-2",title:"Business registration",content:n.item2,icon:"fa-light fa-briefcase",showIcon:!0},{id:"icon-3",title:"Tax obligations",content:n.item3,icon:"fa-light fa-file-invoice-dollar",showIcon:!0},{id:"icon-4",title:"Employment requirements",content:n.item4,icon:"fa-light fa-users",showIcon:!0}],showOpenCloseAll:!0,alwaysOpen:!1}},l={args:{items:[{id:"large-1",title:"Section 1: Overview",content:n.item1},{id:"large-2",title:"Section 2: Requirements",content:n.item2},{id:"large-3",title:"Section 3: Application process",content:n.item3},{id:"large-4",title:"Section 4: Supporting documents",content:n.item4},{id:"large-5",title:"Section 5: Fees and charges",content:n.item1},{id:"large-6",title:"Section 6: Assessment timeframes",content:n.item2}],showOpenCloseAll:!0,alwaysOpen:!1}},c={args:{items:[{id:"expanded-1",title:"Currently viewing this section",content:n.item1,defaultOpen:!0},{id:"expanded-2",title:"Additional information",content:n.item2,defaultOpen:!1},{id:"expanded-3",title:"Related resources",content:n.item3,defaultOpen:!1}],showOpenCloseAll:!0,alwaysOpen:!1}},d={parameters:{backgrounds:{default:"light"}},args:{items:[{id:"ntg-1",title:"Northern Territory services",content:n.item1,icon:"fa-light fa-landmark",showIcon:!0},{id:"ntg-2",title:"Community programs",content:n.item2,icon:"fa-light fa-people-group",showIcon:!0},{id:"ntg-3",title:"Contact information",content:n.item3,icon:"fa-light fa-phone",showIcon:!0}],theme:"ntg",showOpenCloseAll:!0,alwaysOpen:!1}},p={parameters:{backgrounds:{default:"light"}},args:{items:[{id:"central-1",title:"Staff resources",content:n.item1,icon:"fa-light fa-folder-open",showIcon:!0},{id:"central-2",title:"Policy documents",content:n.item2,icon:"fa-light fa-file-lines",showIcon:!0},{id:"central-3",title:"Training materials",content:n.item3,icon:"fa-light fa-graduation-cap",showIcon:!0}],theme:"central",showOpenCloseAll:!0,alwaysOpen:!1}},m={render:()=>e.jsxs("div",{style:{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"2rem"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontFamily:"Lato"},children:"NT.GOV.AU Theme"}),e.jsx(b,{items:[{id:"comp-ntg-1",title:"External website style",content:n.item1},{id:"comp-ntg-2",title:"Lato font family",content:n.item2},{id:"comp-ntg-3",title:"Ochre accent color",content:n.item3}],theme:"ntg",showOpenCloseAll:!0,alwaysOpen:!1})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{marginBottom:"1rem",fontFamily:"Roboto"},children:"NTG Central Theme"}),e.jsx(b,{items:[{id:"comp-central-1",title:"Internal website style",content:n.item1},{id:"comp-central-2",title:"Roboto font family",content:n.item2},{id:"comp-central-3",title:"Green accent color",content:n.item3}],theme:"central",showOpenCloseAll:!0,alwaysOpen:!1})]})]})},h={parameters:{a11y:{config:{rules:[{id:"color-contrast",enabled:!0},{id:"aria-allowed-attr",enabled:!0},{id:"aria-required-attr",enabled:!0}]}}},args:{items:[{id:"a11y-1",title:"Keyboard navigation supported",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Use ",e.jsx("kbd",{children:"Tab"})," to navigate between accordion buttons."]}),e.jsxs("p",{children:["Use ",e.jsx("kbd",{children:"Enter"})," or ",e.jsx("kbd",{children:"Space"})," to expand/collapse."]}),e.jsx("p",{children:"All interactive elements are keyboard accessible."})]})},{id:"a11y-2",title:"Screen reader compatible",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Proper ARIA attributes ensure screen reader compatibility:"}),e.jsxs("ul",{children:[e.jsxs("li",{children:[e.jsx("code",{children:"aria-expanded"})," indicates open/closed state"]}),e.jsxs("li",{children:[e.jsx("code",{children:"aria-controls"})," links button to content panel"]}),e.jsxs("li",{children:[e.jsx("code",{children:"role"})," attributes provide semantic meaning"]})]})]})},{id:"a11y-3",title:"Focus indicators visible",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Clear focus states help keyboard users navigate:"}),e.jsx("p",{children:"NTG theme uses ochre outline, Central theme uses green outline."}),e.jsx("p",{children:"Focus indicators meet WCAG 2.1 requirements for visibility."})]})}],showOpenCloseAll:!0,alwaysOpen:!1}},u={args:{items:[{id:"rich-1",title:"Multiple content types",content:e.jsxs(e.Fragment,{children:[e.jsx("h4",{style:{marginTop:0},children:"Subheading"}),e.jsxs("p",{children:["Paragraphs with ",e.jsx("strong",{children:"bold text"}),", ",e.jsx("em",{children:"italic text"}),", and ",e.jsx("a",{href:"#",children:"hyperlinks"}),"."]}),e.jsxs("ul",{children:[e.jsx("li",{children:"Unordered list item 1"}),e.jsxs("li",{children:["Unordered list item 2 with ",e.jsx("a",{href:"#",children:"a link"})]}),e.jsx("li",{children:"Unordered list item 3"})]})]})},{id:"rich-2",title:"Ordered lists and links",content:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"Step-by-step instructions (though accordions should generally be avoided for stepped processes):"}),e.jsxs("ol",{children:[e.jsxs("li",{children:["First step with ",e.jsx("a",{href:"#",children:"relevant link"})]}),e.jsx("li",{children:"Second step with additional context"}),e.jsx("li",{children:"Third step completing the process"})]}),e.jsxs("p",{children:["For more information, visit the ",e.jsx("a",{href:"#",children:"help center"}),"."]})]})},{id:"rich-3",title:"Mixed formatting",content:e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Important:"})," This section contains critical information."]}),e.jsxs("p",{children:["Additional context with ",e.jsx("a",{href:"#",children:"supporting documentation"})," ","and detailed explanations."]})]})}],showOpenCloseAll:!0,alwaysOpen:!1}},g={args:{items:[{id:"min-1",title:"First accordion in minimum group",content:n.item1},{id:"min-2",title:"Second accordion in minimum group",content:n.item2},{id:"min-3",title:"Third accordion in minimum group",content:n.item3}],showOpenCloseAll:!0,alwaysOpen:!1}},f={args:{items:[{id:"always-1",title:"First section (can stay open)",content:n.item1,defaultOpen:!0},{id:"always-2",title:"Second section (can stay open)",content:n.item2,defaultOpen:!0},{id:"always-3",title:"Third section (can stay open)",content:n.item3,defaultOpen:!1}],showOpenCloseAll:!0,alwaysOpen:!0}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "accordion-1",
      title: "What services are available?",
      content: sampleContent.item1,
      defaultOpen: false
    }, {
      id: "accordion-2",
      title: "How do I apply for assistance?",
      content: sampleContent.item2,
      defaultOpen: false
    }, {
      id: "accordion-3",
      title: "What documentation do I need?",
      content: sampleContent.item3,
      defaultOpen: false
    }],
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...s.parameters?.docs?.source},description:{story:`Default accordion group with standard styling.
Groups must contain a minimum of 3 accordions.
Only one accordion can be open at a time (unless alwaysOpen is true).`,...s.parameters?.docs?.description}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "icon-1",
      title: "Licenses and permits",
      content: sampleContent.item1,
      icon: "fa-light fa-id-card",
      showIcon: true
    }, {
      id: "icon-2",
      title: "Business registration",
      content: sampleContent.item2,
      icon: "fa-light fa-briefcase",
      showIcon: true
    }, {
      id: "icon-3",
      title: "Tax obligations",
      content: sampleContent.item3,
      icon: "fa-light fa-file-invoice-dollar",
      showIcon: true
    }, {
      id: "icon-4",
      title: "Employment requirements",
      content: sampleContent.item4,
      icon: "fa-light fa-users",
      showIcon: true
    }],
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...r.parameters?.docs?.source},description:{story:`Accordion with icons provides additional visual context.
Use sparingly when an additional visual aid would help clarify the accordion's title.
Icons should be meaningful and relevant to the content.`,...r.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "large-1",
      title: "Section 1: Overview",
      content: sampleContent.item1
    }, {
      id: "large-2",
      title: "Section 2: Requirements",
      content: sampleContent.item2
    }, {
      id: "large-3",
      title: "Section 3: Application process",
      content: sampleContent.item3
    }, {
      id: "large-4",
      title: "Section 4: Supporting documents",
      content: sampleContent.item4
    }, {
      id: "large-5",
      title: "Section 5: Fees and charges",
      content: sampleContent.item1
    }, {
      id: "large-6",
      title: "Section 6: Assessment timeframes",
      content: sampleContent.item2
    }],
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...l.parameters?.docs?.source},description:{story:`Larger accordion group showing recommended maximum.
Groups should contain no more than 6-8 accordions.
If you need more, consider breaking content into multiple pages or sections.`,...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "expanded-1",
      title: "Currently viewing this section",
      content: sampleContent.item1,
      defaultOpen: true
    }, {
      id: "expanded-2",
      title: "Additional information",
      content: sampleContent.item2,
      defaultOpen: false
    }, {
      id: "expanded-3",
      title: "Related resources",
      content: sampleContent.item3,
      defaultOpen: false
    }],
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...c.parameters?.docs?.source},description:{story:`Accordion with one item expanded by default.
Useful when users typically need to see specific content immediately.
The first or most important item can be opened by default.`,...c.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  args: {
    items: [{
      id: "ntg-1",
      title: "Northern Territory services",
      content: sampleContent.item1,
      icon: "fa-light fa-landmark",
      showIcon: true
    }, {
      id: "ntg-2",
      title: "Community programs",
      content: sampleContent.item2,
      icon: "fa-light fa-people-group",
      showIcon: true
    }, {
      id: "ntg-3",
      title: "Contact information",
      content: sampleContent.item3,
      icon: "fa-light fa-phone",
      showIcon: true
    }],
    theme: "ntg",
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...d.parameters?.docs?.source},description:{story:`NT.GOV.AU theme variant.
External website styling with Lato font and ochre accent colors.
This is the default theme for public-facing Northern Territory Government websites.`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "light"
    }
  },
  args: {
    items: [{
      id: "central-1",
      title: "Staff resources",
      content: sampleContent.item1,
      icon: "fa-light fa-folder-open",
      showIcon: true
    }, {
      id: "central-2",
      title: "Policy documents",
      content: sampleContent.item2,
      icon: "fa-light fa-file-lines",
      showIcon: true
    }, {
      id: "central-3",
      title: "Training materials",
      content: sampleContent.item3,
      icon: "fa-light fa-graduation-cap",
      showIcon: true
    }],
    theme: "central",
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...p.parameters?.docs?.source},description:{story:`NTG Central (Intranet) theme variant.
Internal website styling with Roboto font and green accent colors.
Used for NTG Central intranet and internal staff-facing applications.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "2rem"
  }}>
      <div>
        <h3 style={{
        marginBottom: "1rem",
        fontFamily: "Lato"
      }}>
          NT.GOV.AU Theme
        </h3>
        <Accordion items={[{
        id: "comp-ntg-1",
        title: "External website style",
        content: sampleContent.item1
      }, {
        id: "comp-ntg-2",
        title: "Lato font family",
        content: sampleContent.item2
      }, {
        id: "comp-ntg-3",
        title: "Ochre accent color",
        content: sampleContent.item3
      }]} theme="ntg" showOpenCloseAll={true} alwaysOpen={false} />
      </div>
      <div>
        <h3 style={{
        marginBottom: "1rem",
        fontFamily: "Roboto"
      }}>
          NTG Central Theme
        </h3>
        <Accordion items={[{
        id: "comp-central-1",
        title: "Internal website style",
        content: sampleContent.item1
      }, {
        id: "comp-central-2",
        title: "Roboto font family",
        content: sampleContent.item2
      }, {
        id: "comp-central-3",
        title: "Green accent color",
        content: sampleContent.item3
      }]} theme="central" showOpenCloseAll={true} alwaysOpen={false} />
      </div>
    </div>
}`,...m.parameters?.docs?.source},description:{story:`Theme comparison showing both variants side by side.
Demonstrates the visual differences between NT.GOV.AU and NTG Central themes.
Note the different fonts (Lato vs Roboto) and accent colors (ochre vs green).`,...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: "color-contrast",
          enabled: true
        }, {
          id: "aria-allowed-attr",
          enabled: true
        }, {
          id: "aria-required-attr",
          enabled: true
        }]
      }
    }
  },
  args: {
    items: [{
      id: "a11y-1",
      title: "Keyboard navigation supported",
      content: <>
            <p>
              Use <kbd>Tab</kbd> to navigate between accordion buttons.
            </p>
            <p>
              Use <kbd>Enter</kbd> or <kbd>Space</kbd> to expand/collapse.
            </p>
            <p>All interactive elements are keyboard accessible.</p>
          </>
    }, {
      id: "a11y-2",
      title: "Screen reader compatible",
      content: <>
            <p>Proper ARIA attributes ensure screen reader compatibility:</p>
            <ul>
              <li>
                <code>aria-expanded</code> indicates open/closed state
              </li>
              <li>
                <code>aria-controls</code> links button to content panel
              </li>
              <li>
                <code>role</code> attributes provide semantic meaning
              </li>
            </ul>
          </>
    }, {
      id: "a11y-3",
      title: "Focus indicators visible",
      content: <>
            <p>Clear focus states help keyboard users navigate:</p>
            <p>
              NTG theme uses ochre outline, Central theme uses green outline.
            </p>
            <p>Focus indicators meet WCAG 2.1 requirements for visibility.</p>
          </>
    }],
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...h.parameters?.docs?.source},description:{story:`Accessibility demonstration showing keyboard navigation and screen reader support.
All accordions must be fully keyboard accessible with proper ARIA attributes.

Keyboard navigation:
- Tab to navigate between accordion buttons
- Enter or Space to expand/collapse
- All interactive elements are keyboard accessible`,...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "rich-1",
      title: "Multiple content types",
      content: <>
            <h4 style={{
          marginTop: 0
        }}>Subheading</h4>
            <p>
              Paragraphs with <strong>bold text</strong>, <em>italic text</em>,
              and <a href="#">hyperlinks</a>.
            </p>
            <ul>
              <li>Unordered list item 1</li>
              <li>
                Unordered list item 2 with <a href="#">a link</a>
              </li>
              <li>Unordered list item 3</li>
            </ul>
          </>
    }, {
      id: "rich-2",
      title: "Ordered lists and links",
      content: <>
            <p>
              Step-by-step instructions (though accordions should generally be
              avoided for stepped processes):
            </p>
            <ol>
              <li>
                First step with <a href="#">relevant link</a>
              </li>
              <li>Second step with additional context</li>
              <li>Third step completing the process</li>
            </ol>
            <p>
              For more information, visit the <a href="#">help center</a>.
            </p>
          </>
    }, {
      id: "rich-3",
      title: "Mixed formatting",
      content: <>
            <p>
              <strong>Important:</strong> This section contains critical
              information.
            </p>
            <p>
              Additional context with <a href="#">supporting documentation</a>{" "}
              and detailed explanations.
            </p>
          </>
    }],
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...u.parameters?.docs?.source},description:{story:`Rich content example showing various content types within accordions.
Accordions can contain links, formatting, lists, and other standard HTML elements.
Avoid putting buttons or complex interactive components inside accordions.`,...u.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "min-1",
      title: "First accordion in minimum group",
      content: sampleContent.item1
    }, {
      id: "min-2",
      title: "Second accordion in minimum group",
      content: sampleContent.item2
    }, {
      id: "min-3",
      title: "Third accordion in minimum group",
      content: sampleContent.item3
    }],
    showOpenCloseAll: true,
    alwaysOpen: false
  }
}`,...g.parameters?.docs?.source},description:{story:`Minimum group size example.
Accordions must always appear in groups of at least 3 items.
Never use a single accordion in isolation.`,...g.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: "always-1",
      title: "First section (can stay open)",
      content: sampleContent.item1,
      defaultOpen: true
    }, {
      id: "always-2",
      title: "Second section (can stay open)",
      content: sampleContent.item2,
      defaultOpen: true
    }, {
      id: "always-3",
      title: "Third section (can stay open)",
      content: sampleContent.item3,
      defaultOpen: false
    }],
    showOpenCloseAll: true,
    alwaysOpen: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Always open mode allows multiple accordions to be expanded simultaneously.
Users can open and close accordions independently without affecting others.
The "Open all" / "Close all" control is particularly useful in this mode.`,...f.parameters?.docs?.description}}};const R=["Default","WithIcons","LargeGroup","OneExpanded","ThemeNTG","ThemeCentral","ThemeComparison","Accessibility","RichContent","MinimumGroupSize","AlwaysOpen"];export{h as Accessibility,f as AlwaysOpen,s as Default,l as LargeGroup,g as MinimumGroupSize,c as OneExpanded,u as RichContent,p as ThemeCentral,m as ThemeComparison,d as ThemeNTG,r as WithIcons,R as __namedExportsOrder,U as default};
