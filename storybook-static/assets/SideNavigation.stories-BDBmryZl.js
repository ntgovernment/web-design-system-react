import{j as e,r as C}from"./iframe-CBZa0pcK.js";import{I as E}from"./Icon-ScEOyWw2.js";import"./preload-helper-DhH6u7hw.js";const j=({id:n,label:r,href:i="#",isCurrent:l=!1,isExpandable:o=!1,isExpanded:p=!1,children:s=[],className:t,expandIconClass:a="fa-light fa-chevron-down",onToggleExpand:d,onItemClick:k,onClick:T})=>{const[S,N]=C.useState(p),P=c=>{c.preventDefault();const A=!S;N(A),d?.(n,A)},D=c=>{(k||T)&&c.preventDefault(),T?.(n),k?.(n)},_=`side-nav__item${l?" side-nav__item--current":""}${t?` ${t}`:""}`;return e.jsxs("div",{className:"side-nav__item-wrapper",children:[e.jsxs("div",{className:_,children:[e.jsx("a",{href:i,className:"side-nav__link",onClick:D,"aria-current":l?"page":void 0,children:e.jsx("span",{className:"side-nav__label",children:r})}),o&&e.jsx("button",{className:`side-nav__expand-btn ${S?"side-nav__expand-btn--expanded":""}`,onClick:P,"aria-expanded":S,"aria-label":`Toggle ${r} submenu`,type:"button",children:e.jsx(E,{className:"side-nav__expand-icon",icon:a})})]}),o&&S&&s&&s.length>0&&e.jsx("div",{className:"side-nav__submenu",children:s.map(c=>e.jsx(j,{...c,onToggleExpand:d,onItemClick:k,expandIconClass:a},c.id))})]})},I=({sectionTitle:n,items:r,className:i,onItemClick:l,onToggleExpand:o,expandIconClass:p="fa-light fa-chevron-down",...s})=>{const t=`side-nav${i?` ${i}`:""}`;return e.jsxs("nav",{className:t,...s,children:[e.jsxs("div",{className:"side-nav__header",children:[e.jsx(E,{className:"side-nav__header-icon",icon:"fa-light fa-chevron-right"}),e.jsx("h3",{className:"side-nav__header-title",children:n})]}),e.jsx("div",{className:"side-nav__content",children:r.map(a=>e.jsx(j,{...a,onToggleExpand:o,onItemClick:l,expandIconClass:p},a.id))})]})};I.__docgenInfo={description:`Side Navigation component for navigating related pages within a content section.\r
\r
Features:\r
- Section header with icon\r
- List of navigation items with current/active state\r
- Optional expandable items with nested children\r
- Theme-aware styling using design tokens\r
- Accessible keyboard navigation and ARIA labels\r
\r
Usage:\r
\`\`\`tsx\r
<SideNavigation\r
  sectionTitle="Services"\r
  items={[\r
    { id: "service-1", label: "Service One", href: "/services/one", isCurrent: true },\r
    { id: "service-2", label: "Service Two", href: "/services/two" },\r
  ]}\r
  onItemClick={(id) => console.log("Clicked:", id)}\r
/>\r
\`\`\``,methods:[],displayName:"SideNavigation",props:{sectionTitle:{required:!0,tsType:{name:"string"},description:"Section header title displayed at the top"},items:{required:!0,tsType:{name:"Array",elements:[{name:"SideNavigationItemProps"}],raw:"SideNavigationItemProps[]"},description:"Array of navigation items"},className:{required:!1,tsType:{name:"string"},description:"Optional CSS class name"},onItemClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"}],return:{name:"void"}}},description:"Callback when navigation item is selected"},onToggleExpand:{required:!1,tsType:{name:"signature",type:"function",raw:"(itemId: string, isExpanded: boolean) => void",signature:{arguments:[{type:{name:"string"},name:"itemId"},{type:{name:"boolean"},name:"isExpanded"}],return:{name:"void"}}},description:"Callback when item is expanded/collapsed"},expandIconClass:{required:!1,tsType:{name:"string"},description:"Icon class for expandable items (default: FontAwesome chevron)",defaultValue:{value:'"fa-light fa-chevron-down"',computed:!1}}}};const O={title:"Components/SideNavigation",component:I,parameters:{layout:"padded",docs:{description:{component:"A vertical navigation sidebar for content sections. Displays a section header and list of navigation items, helping users quickly find related pages within the same topic. Use for large, content-heavy sections with 5+ pages."}}},tags:["autodocs"],argTypes:{sectionTitle:{control:"text",description:"Title of the section displayed in the header"},items:{control:"object",description:"Array of navigation items to display"},onItemClick:{action:"item clicked",description:"Callback fired when a navigation item is clicked"},onToggleExpand:{action:"expand toggled",description:"Callback fired when an expandable item is toggled"}}},m={args:{sectionTitle:"Licensing Services",items:[{id:"overview",label:"Service Overview",href:"#overview",isCurrent:!0},{id:"eligibility",label:"Eligibility",href:"#eligibility"},{id:"apply",label:"How to Apply",href:"#apply"},{id:"fees",label:"Costs and Fees",href:"#fees"},{id:"support",label:"Get Support",href:"#support"}]}},u={args:{sectionTitle:"Documentation",items:[]},render:()=>{const[n,r]=C.useState("overview"),[i,l]=C.useState(new Set(["overview"])),o=[{id:"overview",label:"Getting Started",href:"#overview",isCurrent:n==="overview",isExpandable:!0,isExpanded:i.has("overview"),children:[{id:"setup",label:"Setup Guide",href:"#setup",isCurrent:n==="setup"},{id:"first-steps",label:"First Steps",href:"#first-steps",isCurrent:n==="first-steps"}]},{id:"basics",label:"Basics",href:"#basics",isCurrent:n==="basics"},{id:"advanced",label:"Advanced Topics",href:"#advanced",isCurrent:n==="advanced",isExpandable:!0,isExpanded:i.has("advanced"),children:[{id:"performance",label:"Performance Optimization",href:"#performance",isCurrent:n==="performance"},{id:"security",label:"Security",href:"#security",isCurrent:n==="security"}]},{id:"examples",label:"Code Examples",href:"#examples",isCurrent:n==="examples"},{id:"faq",label:"Frequently Asked Questions",href:"#faq",isCurrent:n==="faq"}],p=t=>{r(t)},s=(t,a)=>{const d=new Set(i);a?d.add(t):d.delete(t),l(d)};return e.jsxs("div",{style:{display:"flex",gap:"24px",alignItems:"flex-start"},children:[e.jsxs("div",{children:[e.jsx(I,{sectionTitle:"Documentation",items:o,onItemClick:p,onToggleExpand:s}),e.jsxs("p",{className:"text-muted mt-3",style:{fontSize:"12px"},children:["Current: ",e.jsx("strong",{children:n})]})]}),e.jsxs("div",{style:{flex:1,padding:"16px",backgroundColor:"#f5f5f7",borderRadius:"4px",minHeight:"400px"},children:[e.jsx("h3",{children:"Content Area"}),e.jsxs("p",{children:["Selected item: ",e.jsx("strong",{children:n})]}),e.jsx("p",{children:"This area represents the main content for the selected navigation item."})]})]})}},h={args:{sectionTitle:"Online Services",items:[{id:"business",label:"Business Services",href:"#business",isExpandable:!0,isExpanded:!0,children:[{id:"registration",label:"Business Registration",href:"#registration"},{id:"licensing",label:"Licensing",href:"#licensing"},{id:"permits",label:"Permits and Approvals",href:"#permits"}]},{id:"personal",label:"Personal Services",href:"#personal",isExpandable:!0,children:[{id:"identification",label:"Identification",href:"#identification"},{id:"permits-personal",label:"Personal Permits",href:"#permits-personal"}]},{id:"utilities",label:"Utilities",href:"#utilities"},{id:"payments",label:"Payments",href:"#payments"},{id:"reports",label:"Reports and Forms",href:"#reports"}]}},v={args:{sectionTitle:"Health and Wellness Services",items:[{id:"overview",label:"Service Overview",href:"#overview",isCurrent:!0},{id:"health-checks",label:"Health Assessments",href:"#health-checks"},{id:"mental-health",label:"Mental Health Support",href:"#mental-health"},{id:"aged-care",label:"Aged Care Services",href:"#aged-care"},{id:"disability",label:"Disability Services",href:"#disability"},{id:"subsidies",label:"Subsidies and Support",href:"#subsidies"},{id:"contact",label:"Contact and Support",href:"#contact"}]}},b={args:{sectionTitle:"Support",items:[{id:"getting-help",label:"Getting Help",href:"#help",isCurrent:!0},{id:"contact",label:"Contact Us",href:"#contact"},{id:"faq",label:"Frequently Asked Questions",href:"#faq"},{id:"feedback",label:"Send Feedback",href:"#feedback"},{id:"community",label:"Community Forum",href:"#community"}]}},f={args:{sectionTitle:"Application Process",items:[{id:"prepare",label:"Prepare Your Documents",href:"#prepare"},{id:"submit",label:"Submit Application",href:"#submit",isCurrent:!0},{id:"review",label:"Review Process",href:"#review"},{id:"follow-up",label:"Follow-up Steps",href:"#follow-up",isExpandable:!0,isExpanded:!1,children:[{id:"tracking",label:"Track Your Application",href:"#tracking"},{id:"update",label:"Update Information",href:"#update"}]},{id:"approval",label:"After Approval",href:"#approval"}]}},g={args:{sectionTitle:"Government Programs and Services Registry",items:[{id:"overview",label:"Service Overview and Registration Requirements",href:"#overview",isCurrent:!0},{id:"eligibility",label:"Eligibility Assessment and Qualification",href:"#eligibility"},{id:"apply",label:"Application Process and Documentation",href:"#apply"},{id:"fees",label:"Costs, Fees, and Payment Methods",href:"#fees"},{id:"support",label:"Customer Support and Dispute Resolution",href:"#support"}]}},y={parameters:{backgrounds:{default:"dark"}},decorators:[n=>e.jsx("div",{style:{backgroundColor:"#2a2a2a",padding:"24px",borderRadius:"8px"},children:e.jsx(n,{})})],args:{sectionTitle:"Documentation",items:[{id:"intro",label:"Introduction",href:"#intro",isCurrent:!0},{id:"install",label:"Installation",href:"#install"},{id:"usage",label:"Usage Guide",href:"#usage"},{id:"api",label:"API Reference",href:"#api"},{id:"examples",label:"Code Examples",href:"#examples"}]}},x={decorators:[n=>e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx("div",{style:{minWidth:"298px"},children:e.jsx(n,{})}),e.jsxs("div",{style:{flex:1},children:[e.jsx("h2",{children:"Accessible Services for Disability Support"}),e.jsx("p",{children:"This page provides information about disability support services available through the NT Government. Use the sidebar navigation to explore different aspects of our services."}),e.jsx("h3",{children:"Overview"}),e.jsx("p",{children:"We are committed to providing accessible and inclusive services for all people with disabilities. Our services are designed to assist with daily living, employment, education, and social participation."}),e.jsx("h3",{children:"Getting Started"}),e.jsx("p",{children:"To access disability support services, you'll need to complete an initial assessment. This helps us understand your needs and recommend appropriate support options."})]})]})],args:{sectionTitle:"Disability Services",items:[{id:"overview",label:"Service Overview",href:"#overview",isCurrent:!0},{id:"eligibility",label:"Eligibility Requirements",href:"#eligibility"},{id:"assessment",label:"Assessment Process",href:"#assessment"},{id:"support-types",label:"Types of Support",href:"#support-types"},{id:"contact",label:"Contact Information",href:"#contact"}]}},w={args:{sectionTitle:"Accessibility Features",items:[]},render:()=>{const[n,r]=C.useState("overview");return e.jsxs("div",{children:[e.jsxs("p",{className:"mb-3",children:[e.jsx("strong",{children:"Accessibility Note:"})," Use Tab to navigate between items, Enter to select, and Space to expand items. Current selection:"," ",e.jsx("code",{children:n})]}),e.jsx(I,{sectionTitle:"Accessibility Features",items:[{id:"overview",label:"Accessibility Overview",href:"#overview",isCurrent:n==="overview"},{id:"wcag",label:"WCAG 2.1 Compliance",href:"#wcag",isCurrent:n==="wcag"},{id:"keyboard",label:"Keyboard Navigation",href:"#keyboard",isCurrent:n==="keyboard"},{id:"screen-reader",label:"Screen Reader Support",href:"#screen-reader",isCurrent:n==="screen-reader"},{id:"assistive",label:"Assistive Technology",href:"#assistive",isCurrent:n==="assistive"}],onItemClick:i=>r(i)})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sectionTitle: "Licensing Services",
    items: [{
      id: "overview",
      label: "Service Overview",
      href: "#overview",
      isCurrent: true
    }, {
      id: "eligibility",
      label: "Eligibility",
      href: "#eligibility"
    }, {
      id: "apply",
      label: "How to Apply",
      href: "#apply"
    }, {
      id: "fees",
      label: "Costs and Fees",
      href: "#fees"
    }, {
      id: "support",
      label: "Get Support",
      href: "#support"
    }]
  }
}`,...m.parameters?.docs?.source},description:{story:`Default Side Navigation component showing a typical service navigation structure.\r
Includes a section header and multiple navigation items with one current/active item.`,...m.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sectionTitle: "Documentation",
    items: []
  },
  render: () => {
    const [currentItem, setCurrentItem] = useState("overview");
    const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set(["overview"]));
    const navigationItems = [{
      id: "overview",
      label: "Getting Started",
      href: "#overview",
      isCurrent: currentItem === "overview",
      isExpandable: true,
      isExpanded: expandedItems.has("overview"),
      children: [{
        id: "setup",
        label: "Setup Guide",
        href: "#setup",
        isCurrent: currentItem === "setup"
      }, {
        id: "first-steps",
        label: "First Steps",
        href: "#first-steps",
        isCurrent: currentItem === "first-steps"
      }]
    }, {
      id: "basics",
      label: "Basics",
      href: "#basics",
      isCurrent: currentItem === "basics"
    }, {
      id: "advanced",
      label: "Advanced Topics",
      href: "#advanced",
      isCurrent: currentItem === "advanced",
      isExpandable: true,
      isExpanded: expandedItems.has("advanced"),
      children: [{
        id: "performance",
        label: "Performance Optimization",
        href: "#performance",
        isCurrent: currentItem === "performance"
      }, {
        id: "security",
        label: "Security",
        href: "#security",
        isCurrent: currentItem === "security"
      }]
    }, {
      id: "examples",
      label: "Code Examples",
      href: "#examples",
      isCurrent: currentItem === "examples"
    }, {
      id: "faq",
      label: "Frequently Asked Questions",
      href: "#faq",
      isCurrent: currentItem === "faq"
    }];
    const handleItemClick = (id: string) => {
      setCurrentItem(id);
    };
    const handleToggleExpand = (id: string, expanded: boolean) => {
      const newExpanded = new Set(expandedItems);
      if (expanded) {
        newExpanded.add(id);
      } else {
        newExpanded.delete(id);
      }
      setExpandedItems(newExpanded);
    };
    return <div style={{
      display: "flex",
      gap: "24px",
      alignItems: "flex-start"
    }}>\r
        <div>\r
          <SideNavigation sectionTitle="Documentation" items={navigationItems} onItemClick={handleItemClick} onToggleExpand={handleToggleExpand} />\r
          <p className="text-muted mt-3" style={{
          fontSize: "12px"
        }}>\r
            Current: <strong>{currentItem}</strong>\r
          </p>\r
        </div>\r
        <div style={{
        flex: 1,
        padding: "16px",
        backgroundColor: "#f5f5f7",
        borderRadius: "4px",
        minHeight: "400px"
      }}>\r
          <h3>Content Area</h3>\r
          <p>\r
            Selected item: <strong>{currentItem}</strong>\r
          </p>\r
          <p>\r
            This area represents the main content for the selected navigation\r
            item.\r
          </p>\r
        </div>\r
      </div>;
  }
}`,...u.parameters?.docs?.source},description:{story:`Interactive example demonstrating the component with state management,\r
allowing users to click items and see the current item update.`,...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    sectionTitle: "Online Services",
    items: [{
      id: "business",
      label: "Business Services",
      href: "#business",
      isExpandable: true,
      isExpanded: true,
      children: [{
        id: "registration",
        label: "Business Registration",
        href: "#registration"
      }, {
        id: "licensing",
        label: "Licensing",
        href: "#licensing"
      }, {
        id: "permits",
        label: "Permits and Approvals",
        href: "#permits"
      }]
    }, {
      id: "personal",
      label: "Personal Services",
      href: "#personal",
      isExpandable: true,
      children: [{
        id: "identification",
        label: "Identification",
        href: "#identification"
      }, {
        id: "permits-personal",
        label: "Personal Permits",
        href: "#permits-personal"
      }]
    }, {
      id: "utilities",
      label: "Utilities",
      href: "#utilities"
    }, {
      id: "payments",
      label: "Payments",
      href: "#payments"
    }, {
      id: "reports",
      label: "Reports and Forms",
      href: "#reports"
    }]
  }
}`,...h.parameters?.docs?.source},description:{story:`Example with expandable sections showing nested navigation items.\r
Items can be expanded and collapsed to reveal/hide child items.`,...h.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    sectionTitle: "Health and Wellness Services",
    items: [{
      id: "overview",
      label: "Service Overview",
      href: "#overview",
      isCurrent: true
    }, {
      id: "health-checks",
      label: "Health Assessments",
      href: "#health-checks"
    }, {
      id: "mental-health",
      label: "Mental Health Support",
      href: "#mental-health"
    }, {
      id: "aged-care",
      label: "Aged Care Services",
      href: "#aged-care"
    }, {
      id: "disability",
      label: "Disability Services",
      href: "#disability"
    }, {
      id: "subsidies",
      label: "Subsidies and Support",
      href: "#subsidies"
    }, {
      id: "contact",
      label: "Contact and Support",
      href: "#contact"
    }]
  }
}`,...v.parameters?.docs?.source},description:{story:`Example showing a larger navigation structure for a comprehensive documentation site.\r
Demonstrates how the component handles multiple sections and items.`,...v.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sectionTitle: "Support",
    items: [{
      id: "getting-help",
      label: "Getting Help",
      href: "#help",
      isCurrent: true
    }, {
      id: "contact",
      label: "Contact Us",
      href: "#contact"
    }, {
      id: "faq",
      label: "Frequently Asked Questions",
      href: "#faq"
    }, {
      id: "feedback",
      label: "Send Feedback",
      href: "#feedback"
    }, {
      id: "community",
      label: "Community Forum",
      href: "#community"
    }]
  }
}`,...b.parameters?.docs?.source},description:{story:`Minimal example with the minimum recommended number of items (5).\r
Shows the component at its simplest.`,...b.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    sectionTitle: "Application Process",
    items: [{
      id: "prepare",
      label: "Prepare Your Documents",
      href: "#prepare"
    }, {
      id: "submit",
      label: "Submit Application",
      href: "#submit",
      isCurrent: true
    }, {
      id: "review",
      label: "Review Process",
      href: "#review"
    }, {
      id: "follow-up",
      label: "Follow-up Steps",
      href: "#follow-up",
      isExpandable: true,
      isExpanded: false,
      children: [{
        id: "tracking",
        label: "Track Your Application",
        href: "#tracking"
      }, {
        id: "update",
        label: "Update Information",
        href: "#update"
      }]
    }, {
      id: "approval",
      label: "After Approval",
      href: "#approval"
    }]
  }
}`,...f.parameters?.docs?.source},description:{story:`Each navigation item with a different state (current, default, expandable).\r
Useful for testing and understanding component states.`,...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    sectionTitle: "Government Programs and Services Registry",
    items: [{
      id: "overview",
      label: "Service Overview and Registration Requirements",
      href: "#overview",
      isCurrent: true
    }, {
      id: "eligibility",
      label: "Eligibility Assessment and Qualification",
      href: "#eligibility"
    }, {
      id: "apply",
      label: "Application Process and Documentation",
      href: "#apply"
    }, {
      id: "fees",
      label: "Costs, Fees, and Payment Methods",
      href: "#fees"
    }, {
      id: "support",
      label: "Customer Support and Dispute Resolution",
      href: "#support"
    }]
  }
}`,...g.parameters?.docs?.source},description:{story:`Example demonstrating long labels and how the component handles text wrapping.\r
Shows that the component gracefully handles various text lengths.`,...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    backgrounds: {
      default: "dark"
    }
  },
  decorators: [Story => <div style={{
    backgroundColor: "#2a2a2a",
    padding: "24px",
    borderRadius: "8px"
  }}>\r
        <Story />\r
      </div>],
  args: {
    sectionTitle: "Documentation",
    items: [{
      id: "intro",
      label: "Introduction",
      href: "#intro",
      isCurrent: true
    }, {
      id: "install",
      label: "Installation",
      href: "#install"
    }, {
      id: "usage",
      label: "Usage Guide",
      href: "#usage"
    }, {
      id: "api",
      label: "API Reference",
      href: "#api"
    }, {
      id: "examples",
      label: "Code Examples",
      href: "#examples"
    }]
  }
}`,...y.parameters?.docs?.source},description:{story:`Dark background example showing the component's contrast and readability\r
when placed on darker backgrounds.`,...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  decorators: [Story => <div style={{
    display: "flex",
    gap: "32px"
  }}>\r
        <div style={{
      minWidth: "298px"
    }}>\r
          <Story />\r
        </div>\r
        <div style={{
      flex: 1
    }}>\r
          <h2>Accessible Services for Disability Support</h2>\r
          <p>\r
            This page provides information about disability support services\r
            available through the NT Government. Use the sidebar navigation to\r
            explore different aspects of our services.\r
          </p>\r
          <h3>Overview</h3>\r
          <p>\r
            We are committed to providing accessible and inclusive services for\r
            all people with disabilities. Our services are designed to assist\r
            with daily living, employment, education, and social participation.\r
          </p>\r
          <h3>Getting Started</h3>\r
          <p>\r
            To access disability support services, you'll need to complete an\r
            initial assessment. This helps us understand your needs and\r
            recommend appropriate support options.\r
          </p>\r
        </div>\r
      </div>],
  args: {
    sectionTitle: "Disability Services",
    items: [{
      id: "overview",
      label: "Service Overview",
      href: "#overview",
      isCurrent: true
    }, {
      id: "eligibility",
      label: "Eligibility Requirements",
      href: "#eligibility"
    }, {
      id: "assessment",
      label: "Assessment Process",
      href: "#assessment"
    }, {
      id: "support-types",
      label: "Types of Support",
      href: "#support-types"
    }, {
      id: "contact",
      label: "Contact Information",
      href: "#contact"
    }]
  }
}`,...x.parameters?.docs?.source},description:{story:`Example within a typical page layout showing how Side Navigation\r
fits alongside main content.`,...x.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    sectionTitle: "Accessibility Features",
    items: []
  },
  render: () => {
    const [currentItem, setCurrentItem] = useState("overview");
    return <div>\r
        <p className="mb-3">\r
          <strong>Accessibility Note:</strong> Use Tab to navigate between\r
          items, Enter to select, and Space to expand items. Current selection:{" "}\r
          <code>{currentItem}</code>\r
        </p>\r
        <SideNavigation sectionTitle="Accessibility Features" items={[{
        id: "overview",
        label: "Accessibility Overview",
        href: "#overview",
        isCurrent: currentItem === "overview"
      }, {
        id: "wcag",
        label: "WCAG 2.1 Compliance",
        href: "#wcag",
        isCurrent: currentItem === "wcag"
      }, {
        id: "keyboard",
        label: "Keyboard Navigation",
        href: "#keyboard",
        isCurrent: currentItem === "keyboard"
      }, {
        id: "screen-reader",
        label: "Screen Reader Support",
        href: "#screen-reader",
        isCurrent: currentItem === "screen-reader"
      }, {
        id: "assistive",
        label: "Assistive Technology",
        href: "#assistive",
        isCurrent: currentItem === "assistive"
      }]} onItemClick={id => setCurrentItem(id)} />\r
      </div>;
  }
}`,...w.parameters?.docs?.source},description:{story:`Example showing keyboard accessibility by clicking directly on items\r
to demonstrate interactive functionality.`,...w.parameters?.docs?.description}}};const G=["Default","Interactive","WithExpandableItems","LargeNavigationStructure","MinimalExample","AllStates","WithLongLabels","OnDarkBackground","InPageLayout","AccessibilityDemo"];export{w as AccessibilityDemo,f as AllStates,m as Default,x as InPageLayout,u as Interactive,v as LargeNavigationStructure,b as MinimalExample,y as OnDarkBackground,h as WithExpandableItems,g as WithLongLabels,G as __namedExportsOrder,O as default};
