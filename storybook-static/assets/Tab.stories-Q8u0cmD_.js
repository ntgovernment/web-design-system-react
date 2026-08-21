import{r as o,j as e}from"./iframe-CJcOhIH1.js";import{I as w}from"./Icon-CZK7gEro.js";import"./preload-helper-Dc5Yqcnt.js";const I=({items:i,activeTabId:f,onTabChange:z,isSticky:A=!0,size:E="md",showIcons:N=!1,className:C=""})=>{const H=f!==void 0,[q,R]=o.useState(f??i[0]?.id??""),y=f??q,[L,x]=o.useState(!1),[D,j]=o.useState(!1),S=o.useRef(null),a=o.useRef(null);o.useEffect(()=>{const t=()=>{if(a.current){const{scrollLeft:s,scrollWidth:d,clientWidth:c}=a.current;x(s>0),j(s<d-c-10)}};t();const n=new ResizeObserver(t);return a.current&&n.observe(a.current),()=>{n.disconnect()}},[i]);const k=t=>{H||R(t),z?.(t)},U=(t,n)=>{let s=n;switch(t.key){case"ArrowLeft":case"ArrowUp":t.preventDefault(),s=n>0?n-1:i.length-1;break;case"ArrowRight":case"ArrowDown":t.preventDefault(),s=n<i.length-1?n+1:0;break;case"Home":t.preventDefault(),s=0;break;case"End":t.preventDefault(),s=i.length-1;break;default:return}const d=i[s].id;k(d),setTimeout(()=>{const c=S.current?.querySelector(`[data-tab-id="${d}"]`);c&&(c.scrollIntoView({behavior:"smooth",block:"nearest"}),c.focus())},0)},T=t=>{a.current&&a.current.scrollBy({left:t==="left"?-200:200,behavior:"smooth"})},W=()=>{if(a.current){const{scrollLeft:t,scrollWidth:n,clientWidth:s}=a.current;x(t>0),j(t<n-s-10)}},l=i.find(t=>t.id===y);return e.jsxs("div",{className:`tab-component ${C} ${A?"tab-component--sticky":""}`,ref:S,children:[e.jsxs("div",{className:`tab-container tab-container--${E}`,children:[L&&e.jsx("button",{className:"tab-scroll-btn tab-scroll-btn--left",onClick:()=>T("left"),"aria-label":"Scroll tabs left",type:"button",children:e.jsx(w,{icon:"fa-light fa-chevron-left",size:"16px",ariaHidden:!0})}),e.jsx("div",{className:"tab-nav-wrapper",ref:a,onScroll:W,role:"tablist",children:i.map((t,n)=>e.jsxs("button",{"data-tab-id":t.id,className:`tab-nav-item ${y===t.id?"tab-nav-item--active":""}`,role:"tab","aria-selected":y===t.id,"aria-controls":`tab-panel-${t.id}`,onClick:()=>k(t.id),onKeyDown:s=>U(s,n),type:"button",children:[N&&t.icon&&e.jsx(w,{icon:t.icon,size:"16px",className:"tab-nav-item__icon",ariaHidden:!0}),e.jsx("span",{className:"tab-nav-item__label",children:t.label})]},t.id))}),D&&e.jsx("button",{className:"tab-scroll-btn tab-scroll-btn--right",onClick:()=>T("right"),"aria-label":"Scroll tabs right",type:"button",children:e.jsx(w,{icon:"fa-light fa-chevron-right",size:"16px",ariaHidden:!0})})]}),l!=null&&e.jsx("div",{id:`tab-panel-${l.id}`,className:"tab-content-wrapper",role:"tabpanel","aria-labelledby":`tab-${l.id}`,children:l.content})]})};I.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{items:{required:!0,tsType:{name:"Array",elements:[{name:"TabItem"}],raw:"TabItem[]"},description:""},activeTabId:{required:!1,tsType:{name:"string"},description:""},onTabChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(tabId: string) => void",signature:{arguments:[{type:{name:"string"},name:"tabId"}],return:{name:"void"}}},description:""},isSticky:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"union",raw:'"sm" | "md" | "lg"',elements:[{name:"literal",value:'"sm"'},{name:"literal",value:'"md"'},{name:"literal",value:'"lg"'}]},description:"",defaultValue:{value:'"md"',computed:!1}},showIcons:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'""',computed:!1}}}};const M={title:"Components/Tab",component:I,parameters:{layout:"padded",docs:{description:{component:"Tabs help users navigate between related content sections while keeping the layout compact. Use tabs to organize content into logical categories, with the option for sticky navigation on landing pages."}}},tags:["autodocs"],argTypes:{activeTabId:{control:"text",description:"The ID of the currently active tab"},isSticky:{control:"boolean",description:"Whether the tabs stick to the top when scrolling"},size:{control:"select",options:["sm","md","lg"],description:"Size variant of the tabs"},showIcons:{control:"boolean",description:"Whether to display icons alongside tab labels"}}},r=[{id:"arts-sports",label:"Arts and sports",icon:"fa-light fa-palette",content:e.jsxs("div",{children:[e.jsx("h2",{children:"Arts and sports"}),e.jsx("p",{children:"Access grants, funding opportunities, and support for arts and sports programs across the NT. Learn about cultural events, community recreation facilities, and athlete development programs."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Arts grants and funding"}),e.jsx("li",{children:"Sports facilities and programs"}),e.jsx("li",{children:"Event support and permits"}),e.jsx("li",{children:"Community recreation"})]})]})},{id:"business",label:"Business and industry",icon:"fa-light fa-briefcase",content:e.jsxs("div",{children:[e.jsx("h2",{children:"Business and industry"}),e.jsx("p",{children:"Support for starting and growing your business in the NT. Access permits, licensing, training programs, and economic development initiatives."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Business registration and licensing"}),e.jsx("li",{children:"Small business support"}),e.jsx("li",{children:"Employment programs"}),e.jsx("li",{children:"Industry development"})]})]})},{id:"health",label:"Health and wellbeing",icon:"fa-light fa-heart",content:e.jsxs("div",{children:[e.jsx("h2",{children:"Health and wellbeing"}),e.jsx("p",{children:"Information on health services, aged care, disability support, and community programs. Find resources for mental health, preventive care, and wellness initiatives."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Health services"}),e.jsx("li",{children:"Aged care and disability support"}),e.jsx("li",{children:"Mental health resources"}),e.jsx("li",{children:"Preventive health programs"})]})]})},{id:"crime-law",label:"Crime and law",icon:"fa-light fa-gavel",content:e.jsxs("div",{children:[e.jsx("h2",{children:"Crime and law"}),e.jsx("p",{children:"Legal services, law enforcement information, justice system resources, and community safety programs. Report crimes, find legal aid, and understand your rights."}),e.jsxs("ul",{children:[e.jsx("li",{children:"Crime reporting"}),e.jsx("li",{children:"Legal aid services"}),e.jsx("li",{children:"Justice information"}),e.jsx("li",{children:"Community safety programs"})]})]})}],p={args:{items:r,isSticky:!1,size:"md",showIcons:!1},parameters:{docs:{description:{story:"Standard horizontal tabs without icons. Click each tab to view the related content."}}}},h={args:{items:r,isSticky:!1,size:"md",showIcons:!0},parameters:{docs:{description:{story:"Tabs with left-aligned icons. Icons help users quickly identify content categories. Either all tabs have icons or none do."}}}},m={args:{items:[...r,{id:"education",label:"Education",icon:"fa-light fa-book",content:e.jsxs("div",{style:{height:"600px"},children:[e.jsx("h2",{children:"Education"}),e.jsx("p",{children:"Information about schools, higher education, training programs, and student support services available in the NT."}),e.jsx("p",{children:"Scroll down to see the sticky tab navigation remain at the top of the viewport."}),e.jsx("div",{style:{marginTop:"400px",paddingTop:"20px"},children:e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The tab navigation stays visible as you scroll down the content."]})})]})}],isSticky:!0,size:"md",showIcons:!0},parameters:{docs:{description:{story:"Tab navigation with sticky positioning. As the user scrolls down the page, the tabs remain visible at the top of the viewport, allowing quick navigation between sections. Ideal for landing pages with multiple content sections."}}}},_=[{id:"tab-1",label:"Arts and sports",content:e.jsx("div",{children:"Arts and sports content"})},{id:"tab-2",label:"Business and industry",content:e.jsx("div",{children:"Business and industry content"})},{id:"tab-3",label:"Health and wellbeing",content:e.jsx("div",{children:"Health and wellbeing content"})},{id:"tab-4",label:"Crime and law",content:e.jsx("div",{children:"Crime and law content"})},{id:"tab-5",label:"Education",content:e.jsx("div",{children:"Education content"})},{id:"tab-6",label:"Environment",content:e.jsx("div",{children:"Environment content"})},{id:"tab-7",label:"Government",content:e.jsx("div",{children:"Government content"})},{id:"tab-8",label:"Housing",content:e.jsx("div",{children:"Housing content"})}],u={args:{items:_,isSticky:!1,size:"md",showIcons:!1},parameters:{docs:{description:{story:"Tabs with scroll buttons. When there are too many tabs to fit in the viewport, left and right scroll buttons appear (use browser's viewport width to see them). Scroll buttons use smooth scrolling behavior."}}}},b={args:{items:r.slice(0,3),isSticky:!1,size:"sm",showIcons:!0},parameters:{docs:{description:{story:"Compact tab variant with reduced padding and font size. Use for secondary navigation or space-constrained layouts."}}}},g={args:{items:r.slice(0,3),isSticky:!1,size:"lg",showIcons:!0},parameters:{docs:{description:{story:"Expanded tab variant with increased padding and font size. Use for primary navigation or when tabs are a key UI element."}}}},v={args:{items:r,isSticky:!1,size:"md",showIcons:!0},parameters:{docs:{description:{story:`Keyboard Navigation: Use arrow keys (left/right) to move between tabs, Enter or Space to activate. Home moves to first tab, End moves to last tab.
        
ARIA Attributes: 
- role="tablist" on container
- role="tab" on each button with aria-selected
- role="tabpanel" on content panels
- aria-controls linking tabs to content

Focus Management: Clear focus outline using theme colors. Tab can be activated via keyboard.`}}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    items: governmentTabItems,
    isSticky: false,
    size: "md",
    showIcons: false
  },
  parameters: {
    docs: {
      description: {
        story: "Standard horizontal tabs without icons. Click each tab to view the related content."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    items: governmentTabItems,
    isSticky: false,
    size: "md",
    showIcons: true
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs with left-aligned icons. Icons help users quickly identify content categories. Either all tabs have icons or none do."
      }
    }
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    items: [...governmentTabItems, {
      id: "education",
      label: "Education",
      icon: "fa-light fa-book",
      content: <div style={{
        height: "600px"
      }}>\r
            <h2>Education</h2>\r
            <p>\r
              Information about schools, higher education, training programs,\r
              and student support services available in the NT.\r
            </p>\r
            <p>\r
              Scroll down to see the sticky tab navigation remain at the top of\r
              the viewport.\r
            </p>\r
            <div style={{
          marginTop: "400px",
          paddingTop: "20px"
        }}>\r
              <p>\r
                <strong>Note:</strong> The tab navigation stays visible as you\r
                scroll down the content.\r
              </p>\r
            </div>\r
          </div>
    }],
    isSticky: true,
    size: "md",
    showIcons: true
  },
  parameters: {
    docs: {
      description: {
        story: "Tab navigation with sticky positioning. As the user scrolls down the page, the tabs remain visible at the top of the viewport, allowing quick navigation between sections. Ideal for landing pages with multiple content sections."
      }
    }
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    items: manyTabsItems,
    isSticky: false,
    size: "md",
    showIcons: false
  },
  parameters: {
    docs: {
      description: {
        story: "Tabs with scroll buttons. When there are too many tabs to fit in the viewport, left and right scroll buttons appear (use browser's viewport width to see them). Scroll buttons use smooth scrolling behavior."
      }
    }
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: governmentTabItems.slice(0, 3),
    isSticky: false,
    size: "sm",
    showIcons: true
  },
  parameters: {
    docs: {
      description: {
        story: "Compact tab variant with reduced padding and font size. Use for secondary navigation or space-constrained layouts."
      }
    }
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    items: governmentTabItems.slice(0, 3),
    isSticky: false,
    size: "lg",
    showIcons: true
  },
  parameters: {
    docs: {
      description: {
        story: "Expanded tab variant with increased padding and font size. Use for primary navigation or when tabs are a key UI element."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    items: governmentTabItems,
    isSticky: false,
    size: "md",
    showIcons: true
  },
  parameters: {
    docs: {
      description: {
        story: \`Keyboard Navigation: Use arrow keys (left/right) to move between tabs, Enter or Space to activate. Home moves to first tab, End moves to last tab.
        
ARIA Attributes: 
- role="tablist" on container
- role="tab" on each button with aria-selected
- role="tabpanel" on content panels
- aria-controls linking tabs to content

Focus Management: Clear focus outline using theme colors. Tab can be activated via keyboard.\`
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const V=["Default","WithIcons","StickyNavigation","ManyTabs","SmallSize","LargeSize","AccessibilityFocus"];export{v as AccessibilityFocus,p as Default,g as LargeSize,u as ManyTabs,b as SmallSize,m as StickyNavigation,h as WithIcons,V as __namedExportsOrder,M as default};
