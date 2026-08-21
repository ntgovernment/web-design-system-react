import{r as U,j as e}from"./iframe-CJcOhIH1.js";import{I as c}from"./Icon-CZK7gEro.js";import{S as Z}from"./SearchBar-BLoHx_Qs.js";import"./preload-helper-Dc5Yqcnt.js";const J="/web-design-system-react/assets/ntg-desert-rose-reverse-DNeUeZvu.svg",K="/web-design-system-react/assets/logo-ntg-mono-CElByRVH.svg",P="https://nt.gov.au",n=({variant:s="nt-gov-au",agencyName:I,agencyHref:W="/",logoAlt:V="NT.GOV.AU",navItems:t=[],showSearch:z=!0,searchVariant:o="expanded",searchPlaceholder:D="Search",onSearch:F,className:k,customLogo:H,...M})=>{const[i,G]=U.useState(!1),[C,O]=U.useState(!1),R=`header${k?` ${k}`:""}`,L=()=>{if(H)return H;if(s==="nt-gov-au")return e.jsx("a",{href:P,className:"header__logo-link",children:e.jsx("img",{src:K,alt:V,className:"header__logo-image"})});const a=s==="other-site"?"header__logo-group--other-site":"header__logo-group--agency-internet";return e.jsxs("div",{className:`header__logo-group ${a}`,children:[e.jsx("a",{href:P,className:"header__logo-link",children:e.jsx("img",{src:J,alt:V,className:"header__logo-image"})}),I&&e.jsx("a",{href:W,className:"header__agency-link",children:e.jsx("span",{className:"header__agency-title",children:I})})]})},E=()=>{G(!i)},B=()=>{G(!1)},q=()=>{O(!C)},$=()=>{O(!1)};return e.jsxs("header",{className:R,...M,children:[e.jsx("nav",{className:"navbar header__navbar",children:e.jsxs("div",{className:"header__container",children:[e.jsxs("div",{className:"header__logo-section",children:[e.jsxs("button",{className:"header__hamburger",onClick:q,"aria-label":"Toggle navigation menu","aria-expanded":C,type:"button",children:[e.jsx("span",{className:"header__hamburger-line"}),e.jsx("span",{className:"header__hamburger-line"}),e.jsx("span",{className:"header__hamburger-line"})]}),e.jsx("div",{className:"header__logo",children:L()})]}),e.jsxs("div",{className:"header__nav",children:[t.length>0&&e.jsx("ul",{className:"header__nav-list",children:t.map((a,j)=>e.jsx("li",{className:"header__nav-item",children:e.jsxs("a",{href:a.href,className:`header__nav-link${a.active?" header__nav-link--active":""}`,"aria-current":a.active?"page":void 0,children:[a.icon&&e.jsx(c,{icon:a.icon,className:"header__nav-icon",ariaHidden:!0}),e.jsx("span",{className:"header__nav-text",children:a.label})]})},j))}),z&&e.jsx("div",{className:"header__search","data-variant":o,"data-expanded":i?"true":void 0,children:o==="icon"&&!i?e.jsx("button",{className:"header__search-icon-button",onClick:E,"aria-label":"Open search","aria-expanded":!1,type:"button",children:e.jsx(c,{icon:"fa-light fa-search",className:"header__search-icon",ariaHidden:!0})}):e.jsxs("div",{className:"header__search-expanded",children:[e.jsx(Z,{variant:"primary",placeholder:D,onSearch:F,autoFocus:o==="icon"&&i}),o==="icon"&&e.jsx("button",{className:"header__search-close",onClick:B,"aria-label":"Close search",type:"button",children:e.jsx(c,{icon:"fa-light fa-times",className:"header__search-close-icon",ariaHidden:!0})})]})})]})]})}),C&&e.jsx("div",{className:"header__mobile-menu",children:t.length>0&&e.jsx("ul",{className:"header__mobile-nav-list",children:t.map((a,j)=>e.jsx("li",{className:"header__mobile-nav-item",children:e.jsxs("a",{href:a.href,className:`header__mobile-nav-link${a.active?" header__mobile-nav-link--active":""}`,"aria-current":a.active?"page":void 0,onClick:$,children:[a.icon&&e.jsx(c,{icon:a.icon,className:"header__mobile-nav-icon",ariaHidden:!0}),e.jsx("span",{className:"header__mobile-nav-text",children:a.label})]})},j))})})]})};n.__docgenInfo={description:"Header component for site-wide navigation",methods:[],displayName:"Header",props:{variant:{required:!1,tsType:{name:"union",raw:'"nt-gov-au" | "agency-internet" | "other-site"',elements:[{name:"literal",value:'"nt-gov-au"'},{name:"literal",value:'"agency-internet"'},{name:"literal",value:'"other-site"'}]},description:'Header variant that determines the logo layout.\r\n- `"nt-gov-au"`: NT.GOV.AU desert-rose logo only, links to nt.gov.au. No title.\r\n- `"agency-internet"`: NT Government mono logo (links to nt.gov.au) plus\r\n  agency name title (links to `agencyHref`).\r\n- `"other-site"`: Same structure as `"agency-internet"` with a different\r\n  class name for distinct styling.\r\n@default "nt-gov-au"',defaultValue:{value:'"nt-gov-au"',computed:!1}},agencyName:{required:!1,tsType:{name:"string"},description:'Agency or site name shown as the title link in `"agency-internet"` and\r\n`"other-site"` variants.'},agencyHref:{required:!1,tsType:{name:"string"},description:'URL the agency/site title links to. Used by `"agency-internet"` and\r\n`"other-site"` variants.\r\n@default "/"',defaultValue:{value:'"/"',computed:!1}},logoAlt:{required:!1,tsType:{name:"string"},description:`Alt text for the logo image.\r
@default "NT.GOV.AU"`,defaultValue:{value:'"NT.GOV.AU"',computed:!1}},navItems:{required:!1,tsType:{name:"Array",elements:[{name:"HeaderNavItem"}],raw:"HeaderNavItem[]"},description:"Navigation items to display in the header",defaultValue:{value:"[]",computed:!1}},showSearch:{required:!1,tsType:{name:"boolean"},description:`Whether to include a search bar\r
@default true`,defaultValue:{value:"true",computed:!1}},searchVariant:{required:!1,tsType:{name:"union",raw:'"expanded" | "icon"',elements:[{name:"literal",value:'"expanded"'},{name:"literal",value:'"icon"'}]},description:`Search display variant\r
- 'expanded': Full search bar always visible (default)\r
- 'icon': Search icon only, expands to full bar on click\r
@default "expanded"`,defaultValue:{value:'"expanded"',computed:!1}},searchPlaceholder:{required:!1,tsType:{name:"string"},description:`Placeholder text for the search input\r
@default "Search"`,defaultValue:{value:'"Search"',computed:!1}},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback when search is performed"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class for the header element"},customLogo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Content to render in place of the logo (for custom logo implementations)"}},composes:["Omit"]};const ae={title:"Components/Header",component:n,parameters:{layout:"fullscreen",docs:{description:{component:"Header component for site-wide navigation with logo, navigation links, and integrated search functionality. Supports both NTG and Central themes with responsive design and accessibility features."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["nt-gov-au","agency-internet","other-site"],description:"Header variant (logo + title layout)"},agencyName:{control:"text"},agencyHref:{control:"text"},logoAlt:{control:"text"},showSearch:{control:"boolean"},searchPlaceholder:{control:"text"},navItems:{control:"object"}}},r={args:{variant:"nt-gov-au",logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"Contacts",href:"/contact"}],showSearch:!0,searchPlaceholder:"Search"}},l=r,h={args:{variant:"agency-internet",logoAlt:"Northern Territory Government",agencyName:"Department of Health",agencyHref:"https://health.nt.gov.au",navItems:[{label:"Programs",href:"/programs",icon:"fa-light fa-briefcase"},{label:"Contacts",href:"/contact"}],showSearch:!0,searchPlaceholder:"Search"}},d={args:{variant:"other-site",logoAlt:"Northern Territory Government",agencyName:"My NT Services",agencyHref:"/",navItems:[{label:"Dashboard",href:"/dashboard",icon:"fa-light fa-home"},{label:"Contacts",href:"/contact"}],showSearch:!0,searchPlaceholder:"Search"}},f={args:{logoAlt:"NT.GOV.AU",navItems:[{label:"Home",href:"/",active:!1},{label:"Find online services",href:"/services",icon:"fa-light fa-search",active:!0},{label:"Contacts",href:"/contact",active:!1}]}},m={args:{logoAlt:"NT.GOV.AU",navItems:[{label:"About",href:"/about"},{label:"Services",href:"/services"},{label:"Contact",href:"/contact"}],showSearch:!1}},p={args:{logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"Contacts",href:"/contact"}],showSearch:!0,searchVariant:"icon",searchPlaceholder:"Find services"},parameters:{docs:{description:{story:"Medium layout with icon-only search. Click the search icon to expand the search bar. This variant is ideal for responsive designs where space is limited. Common on tablet layouts."}}}},g={args:{logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"Contacts",href:"/contact"}],showSearch:!0,searchVariant:"icon",searchPlaceholder:"Search"},parameters:{docs:{description:{story:"Medium layout header (max-width 959px) with collapsible search icon. The search expands into a full search bar when clicked, and collapses back to an icon when closed. Optimized for tablet and medium-screen devices."}}}},v={args:{logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"Contacts",href:"/contact"}],showSearch:!0,searchVariant:"icon",searchPlaceholder:"Search"},parameters:{docs:{description:{story:"Mobile layout header (max-width 767px) with hamburger menu icon. Navigation items are hidden and accessible via the hamburger menu button. Search appears as an icon. This layout is optimized for mobile phones and small screens."}},viewport:{defaultViewport:"mobile1"}}},u={args:{logoAlt:"NT.GOV.AU",navItems:[{label:"Home",href:"/",icon:"fa-light fa-home"},{label:"Services",href:"/services",icon:"fa-light fa-briefcase"},{label:"News",href:"/news",icon:"fa-light fa-newspaper"},{label:"Events",href:"/events",icon:"fa-light fa-calendar"},{label:"Contact",href:"/contact",icon:"fa-light fa-envelope"}]}},b={args:{logoAlt:"NT.GOV.AU",navItems:[],showSearch:!1}},x={args:{variant:"agency-internet",agencyName:"Department of Health",agencyHref:"/",logoAlt:"Northern Territory Government",navItems:[{label:"Programs",href:"/programs",icon:"fa-light fa-briefcase"},{label:"Resources",href:"/resources",icon:"fa-light fa-book"},{label:"News",href:"/news",icon:"fa-light fa-newspaper"},{label:"Contact",href:"/contact"}],searchPlaceholder:"Search health resources"}},y={args:{variant:"other-site",agencyName:"My NT Services",agencyHref:"/",logoAlt:"Northern Territory Government",navItems:[{label:"Dashboard",href:"/dashboard",icon:"fa-light fa-home",active:!0},{label:"Applications",href:"/applications",icon:"fa-light fa-file"},{label:"Account",href:"/account",icon:"fa-light fa-user"}],searchPlaceholder:"Search services"}},S={args:{logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"Contacts",href:"/contact"}],searchPlaceholder:"Search for announcements",onSearch:s=>{alert(`Searching for: "${s}"`)}}},N={args:{customLogo:e.jsxs("a",{href:"/",style:{textDecoration:"none",color:"white",display:"flex",alignItems:"center",gap:"8px"},children:[e.jsxs("svg",{width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"32",height:"32",rx:"4",fill:"white",fillOpacity:"0.2"}),e.jsx("rect",{x:"8",y:"8",width:"16",height:"16",rx:"2",fill:"white"})]}),e.jsx("span",{style:{fontSize:"18px",fontWeight:700,fontFamily:"Lato, sans-serif"},children:"Custom Brand"})]}),navItems:[{label:"Products",href:"/products"},{label:"Solutions",href:"/solutions"}]}},w={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 16px",fontSize:"16px",fontWeight:600,color:"#1f1e27"},children:"Large Layout (Expanded Search)"}),e.jsx(n,{logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"Contacts",href:"/contact"}],searchVariant:"expanded"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 16px",fontSize:"16px",fontWeight:600,color:"#1f1e27"},children:"Medium Layout (Icon Search)"}),e.jsx(n,{logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"Contacts",href:"/contact"}],searchVariant:"icon"})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 16px",fontSize:"16px",fontWeight:600,color:"#1f1e27"},children:"With Active State"}),e.jsx(n,{logoAlt:"NT.GOV.AU",navItems:[{label:"Home",href:"/",active:!1},{label:"Services",href:"/services",active:!0},{label:"Contact",href:"/contact",active:!1}]})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 16px",fontSize:"16px",fontWeight:600,color:"#1f1e27"},children:"Without Search"}),e.jsx(n,{logoAlt:"NT.GOV.AU",navItems:[{label:"About",href:"/about"},{label:"News",href:"/news"}],showSearch:!1})]})]}),parameters:{docs:{description:{story:"Comparison of different Header configurations and search variants."}}}},A={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"32px"},children:[e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 16px",fontSize:"16px",fontWeight:600,color:"#1f1e27"},children:"Custom Background Color (Teal)"}),e.jsx(n,{logoAlt:"Department of Environment",navItems:[{label:"Programs",href:"/programs"},{label:"Resources",href:"/resources"}],style:{"--clr-bg-dark":"#007e91","--clr-link-inverse-hover":"#aad4da"}})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 16px",fontSize:"16px",fontWeight:600,color:"#1f1e27"},children:"Custom Background Color (Green)"}),e.jsx(n,{logoAlt:"Parks & Wildlife",navItems:[{label:"Visit",href:"/visit",icon:"fa-light fa-map"},{label:"Conservation",href:"/conservation",icon:"fa-light fa-leaf"}],style:{"--clr-bg-dark":"#006975","--clr-link-inverse-hover":"#aacdd1"}})]}),e.jsxs("div",{children:[e.jsx("h3",{style:{margin:"0 0 12px 16px",fontSize:"16px",fontWeight:600,color:"#1f1e27"},children:"Increased Padding"}),e.jsx(n,{logoAlt:"NT.GOV.AU",navItems:[{label:"Services",href:"/services"}],style:{"--bs-navbar-nav-link-padding-x":"32px"}})]}),e.jsx("div",{style:{marginTop:"8px",padding:"16px",background:"#f8f9fa",borderRadius:"8px",maxWidth:"800px",marginLeft:"16px",marginRight:"16px"},children:e.jsxs("p",{style:{margin:0,fontSize:"13px",lineHeight:"1.6"},children:[e.jsx("strong",{children:"💡 Tip:"})," All headers use CSS variables for customization. Override ",e.jsx("code",{children:"--clr-bg-dark"}),","," ",e.jsx("code",{children:"--clr-link-inverse-hover"}),", or any Bootstrap navbar variable (",e.jsx("code",{children:"--bs-navbar-*"}),") to create department-specific or branded headers. See ",e.jsx("code",{children:"HEADER.md#css-variables"})," for complete documentation."]})})]}),parameters:{layout:"padded",docs:{description:{story:"Demonstrates runtime customization using CSS variables. Override design tokens or Bootstrap navbar variables to create custom-branded headers for different departments or services."}}}},T={args:{logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"News & Updates",href:"/news",icon:"fa-light fa-newspaper"},{label:"Contact Us",href:"/contact",icon:"fa-light fa-envelope"}],searchPlaceholder:"Search"},parameters:{docs:{description:{story:"Resize your browser window to see the responsive behavior. The header adapts from horizontal desktop layout to vertical mobile layout, with optimized spacing and typography at each breakpoint."}}}},_={args:{variant:"nt-gov-au",logoAlt:"NT.GOV.AU",navItems:[{label:"Find online services",href:"/services",icon:"fa-light fa-search"},{label:"Contacts",href:"/contact"}],showSearch:!0,searchPlaceholder:"Search"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "nt-gov-au",
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    }, {
      label: "Contacts",
      href: "/contact"
    }],
    showSearch: true,
    searchPlaceholder: "Search"
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:"NTGovAu",...l.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "agency-internet",
    logoAlt: "Northern Territory Government",
    agencyName: "Department of Health",
    agencyHref: "https://health.nt.gov.au",
    navItems: [{
      label: "Programs",
      href: "/programs",
      icon: "fa-light fa-briefcase"
    }, {
      label: "Contacts",
      href: "/contact"
    }],
    showSearch: true,
    searchPlaceholder: "Search"
  }
}`,...h.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "other-site",
    logoAlt: "Northern Territory Government",
    agencyName: "My NT Services",
    agencyHref: "/",
    navItems: [{
      label: "Dashboard",
      href: "/dashboard",
      icon: "fa-light fa-home"
    }, {
      label: "Contacts",
      href: "/contact"
    }],
    showSearch: true,
    searchPlaceholder: "Search"
  }
}`,...d.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Home",
      href: "/",
      active: false
    }, {
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search",
      active: true
    }, {
      label: "Contacts",
      href: "/contact",
      active: false
    }]
  }
}`,...f.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "About",
      href: "/about"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Contact",
      href: "/contact"
    }],
    showSearch: false
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    }, {
      label: "Contacts",
      href: "/contact"
    }],
    showSearch: true,
    searchVariant: "icon",
    searchPlaceholder: "Find services"
  },
  parameters: {
    docs: {
      description: {
        story: "Medium layout with icon-only search. Click the search icon to expand the search bar. This variant is ideal for responsive designs where space is limited. Common on tablet layouts."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    }, {
      label: "Contacts",
      href: "/contact"
    }],
    showSearch: true,
    searchVariant: "icon",
    searchPlaceholder: "Search"
  },
  parameters: {
    docs: {
      description: {
        story: "Medium layout header (max-width 959px) with collapsible search icon. The search expands into a full search bar when clicked, and collapses back to an icon when closed. Optimized for tablet and medium-screen devices."
      }
    }
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    }, {
      label: "Contacts",
      href: "/contact"
    }],
    showSearch: true,
    searchVariant: "icon",
    searchPlaceholder: "Search"
  },
  parameters: {
    docs: {
      description: {
        story: "Mobile layout header (max-width 767px) with hamburger menu icon. Navigation items are hidden and accessible via the hamburger menu button. Search appears as an icon. This layout is optimized for mobile phones and small screens."
      }
    },
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...v.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Home",
      href: "/",
      icon: "fa-light fa-home"
    }, {
      label: "Services",
      href: "/services",
      icon: "fa-light fa-briefcase"
    }, {
      label: "News",
      href: "/news",
      icon: "fa-light fa-newspaper"
    }, {
      label: "Events",
      href: "/events",
      icon: "fa-light fa-calendar"
    }, {
      label: "Contact",
      href: "/contact",
      icon: "fa-light fa-envelope"
    }]
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [],
    showSearch: false
  }
}`,...b.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "agency-internet",
    agencyName: "Department of Health",
    agencyHref: "/",
    logoAlt: "Northern Territory Government",
    navItems: [{
      label: "Programs",
      href: "/programs",
      icon: "fa-light fa-briefcase"
    }, {
      label: "Resources",
      href: "/resources",
      icon: "fa-light fa-book"
    }, {
      label: "News",
      href: "/news",
      icon: "fa-light fa-newspaper"
    }, {
      label: "Contact",
      href: "/contact"
    }],
    searchPlaceholder: "Search health resources"
  }
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "other-site",
    agencyName: "My NT Services",
    agencyHref: "/",
    logoAlt: "Northern Territory Government",
    navItems: [{
      label: "Dashboard",
      href: "/dashboard",
      icon: "fa-light fa-home",
      active: true
    }, {
      label: "Applications",
      href: "/applications",
      icon: "fa-light fa-file"
    }, {
      label: "Account",
      href: "/account",
      icon: "fa-light fa-user"
    }],
    searchPlaceholder: "Search services"
  }
}`,...y.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    }, {
      label: "Contacts",
      href: "/contact"
    }],
    searchPlaceholder: "Search for announcements",
    onSearch: (query: string) => {
      alert(\`Searching for: "\${query}"\`);
    }
  }
}`,...S.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    customLogo: <a href="/" style={{
      textDecoration: "none",
      color: "white",
      display: "flex",
      alignItems: "center",
      gap: "8px"
    }}>\r
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\r
          <rect width="32" height="32" rx="4" fill="white" fillOpacity="0.2" />\r
          <rect x="8" y="8" width="16" height="16" rx="2" fill="white" />\r
        </svg>\r
        <span style={{
        fontSize: "18px",
        fontWeight: 700,
        fontFamily: "Lato, sans-serif"
      }}>\r
          Custom Brand\r
        </span>\r
      </a>,
    navItems: [{
      label: "Products",
      href: "/products"
    }, {
      label: "Solutions",
      href: "/solutions"
    }]
  }
}`,...N.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px"
  }}>\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 16px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#1f1e27"
      }}>\r
          Large Layout (Expanded Search)\r
        </h3>\r
        <Header logoAlt="NT.GOV.AU" navItems={[{
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search"
      }, {
        label: "Contacts",
        href: "/contact"
      }]} searchVariant="expanded" />\r
      </div>\r
\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 16px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#1f1e27"
      }}>\r
          Medium Layout (Icon Search)\r
        </h3>\r
        <Header logoAlt="NT.GOV.AU" navItems={[{
        label: "Find online services",
        href: "/services",
        icon: "fa-light fa-search"
      }, {
        label: "Contacts",
        href: "/contact"
      }]} searchVariant="icon" />\r
      </div>\r
\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 16px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#1f1e27"
      }}>\r
          With Active State\r
        </h3>\r
        <Header logoAlt="NT.GOV.AU" navItems={[{
        label: "Home",
        href: "/",
        active: false
      }, {
        label: "Services",
        href: "/services",
        active: true
      }, {
        label: "Contact",
        href: "/contact",
        active: false
      }]} />\r
      </div>\r
\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 16px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#1f1e27"
      }}>\r
          Without Search\r
        </h3>\r
        <Header logoAlt="NT.GOV.AU" navItems={[{
        label: "About",
        href: "/about"
      }, {
        label: "News",
        href: "/news"
      }]} showSearch={false} />\r
      </div>\r
    </div>,
  parameters: {
    docs: {
      description: {
        story: "Comparison of different Header configurations and search variants."
      }
    }
  }
}`,...w.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "32px"
  }}>\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 16px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#1f1e27"
      }}>\r
          Custom Background Color (Teal)\r
        </h3>\r
        <Header logoAlt="Department of Environment" navItems={[{
        label: "Programs",
        href: "/programs"
      }, {
        label: "Resources",
        href: "/resources"
      }]} style={{
        "--clr-bg-dark": "#007e91",
        "--clr-link-inverse-hover": "#aad4da"
      } as React.CSSProperties} />\r
      </div>\r
\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 16px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#1f1e27"
      }}>\r
          Custom Background Color (Green)\r
        </h3>\r
        <Header logoAlt="Parks & Wildlife" navItems={[{
        label: "Visit",
        href: "/visit",
        icon: "fa-light fa-map"
      }, {
        label: "Conservation",
        href: "/conservation",
        icon: "fa-light fa-leaf"
      }]} style={{
        "--clr-bg-dark": "#006975",
        "--clr-link-inverse-hover": "#aacdd1"
      } as React.CSSProperties} />\r
      </div>\r
\r
      <div>\r
        <h3 style={{
        margin: "0 0 12px 16px",
        fontSize: "16px",
        fontWeight: 600,
        color: "#1f1e27"
      }}>\r
          Increased Padding\r
        </h3>\r
        <Header logoAlt="NT.GOV.AU" navItems={[{
        label: "Services",
        href: "/services"
      }]} style={{
        "--bs-navbar-nav-link-padding-x": "32px"
      } as React.CSSProperties} />\r
      </div>\r
\r
      <div style={{
      marginTop: "8px",
      padding: "16px",
      background: "#f8f9fa",
      borderRadius: "8px",
      maxWidth: "800px",
      marginLeft: "16px",
      marginRight: "16px"
    }}>\r
        <p style={{
        margin: 0,
        fontSize: "13px",
        lineHeight: "1.6"
      }}>\r
          <strong>💡 Tip:</strong> All headers use CSS variables for\r
          customization. Override <code>--clr-bg-dark</code>,{" "}\r
          <code>--clr-link-inverse-hover</code>, or any Bootstrap navbar\r
          variable (<code>--bs-navbar-*</code>) to create department-specific or\r
          branded headers. See <code>HEADER.md#css-variables</code> for complete\r
          documentation.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Demonstrates runtime customization using CSS variables. Override design tokens or Bootstrap navbar variables to create custom-branded headers for different departments or services."
      }
    }
  }
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    }, {
      label: "News & Updates",
      href: "/news",
      icon: "fa-light fa-newspaper"
    }, {
      label: "Contact Us",
      href: "/contact",
      icon: "fa-light fa-envelope"
    }],
    searchPlaceholder: "Search"
  },
  parameters: {
    docs: {
      description: {
        story: "Resize your browser window to see the responsive behavior. The header adapts from horizontal desktop layout to vertical mobile layout, with optimized spacing and typography at each breakpoint."
      }
    }
  }
}`,...T.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "nt-gov-au",
    logoAlt: "NT.GOV.AU",
    navItems: [{
      label: "Find online services",
      href: "/services",
      icon: "fa-light fa-search"
    }, {
      label: "Contacts",
      href: "/contact"
    }],
    showSearch: true,
    searchPlaceholder: "Search"
  }
}`,..._.parameters?.docs?.source}}};const ne=["NTGovAu","Default","AgencyInternet","OtherSite","WithActiveState","WithoutSearch","IconSearch","MediumLayout","MobileLayout","WithManyNavItems","MinimalHeader","DepartmentHeader","ServicePortalHeader","WithSearchHandler","CustomLogo","AllVariants","CustomizedWithCSSVars","ResponsiveDemo","Playground"];export{h as AgencyInternet,w as AllVariants,N as CustomLogo,A as CustomizedWithCSSVars,l as Default,x as DepartmentHeader,p as IconSearch,g as MediumLayout,b as MinimalHeader,v as MobileLayout,r as NTGovAu,d as OtherSite,_ as Playground,T as ResponsiveDemo,y as ServicePortalHeader,f as WithActiveState,u as WithManyNavItems,S as WithSearchHandler,m as WithoutSearch,ne as __namedExportsOrder,ae as default};
