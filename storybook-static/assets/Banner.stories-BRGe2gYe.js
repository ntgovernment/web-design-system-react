import{j as e}from"./iframe-BfObj_Gb.js";import{B as M}from"./Button-Cf7NcEi6.js";import{B as G}from"./Breadcrumbs-CIHugBBw.js";import"./preload-helper-DhH6u7hw.js";import"./Icon-ILay-s1V.js";const B=({variant:r="primary",title:R,description:k,breadcrumbs:N,ctaText:f,ctaOnClick:j,ctaHref:T,ctaVariant:A,linksHeading:x,links:n,linkItems:C,showDecorative:H,label:S,href:w,className:P,...F})=>{const W=r==="primary",g=r==="secondary",_=A||(W||g?"secondary":"primary"),V=H!==void 0?H:r==="primary"||r==="secondary",v=N||(S&&w?[{label:S,href:w},{label:"Current page",isCurrent:!0}]:void 0),q=`banner banner--${r}${P?` ${P}`:""}`;return e.jsxs("div",{className:q,"data-variant":r,...F,children:[V&&e.jsx("div",{className:"banner__decorative","aria-hidden":"true",children:g?e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"banner__decorative-shape banner__decorative-shape--large"}),e.jsx("div",{className:"banner__decorative-shape banner__decorative-shape--small"})]}):null}),e.jsxs("div",{className:"banner__container",children:[v&&v.length>0&&e.jsx("div",{className:"banner__breadcrumbs",children:e.jsx(G,{items:v})}),e.jsxs("div",{className:"banner__content",children:[e.jsxs("div",{className:"banner__main",children:[e.jsx("h1",{className:"banner__title",children:R}),k&&e.jsx("p",{className:"banner__description",children:k}),f&&e.jsx("div",{className:"banner__cta",children:T?e.jsx("a",{href:T,className:`btn btn-${_}`,children:f}):e.jsx(M,{variant:_,label:f,onClick:j})})]}),x&&(n||C)&&e.jsxs("div",{className:"banner__links",children:[e.jsx("h2",{className:"banner__links-heading",children:x}),g?e.jsx("div",{className:"banner__links-vertical",children:(n||C)?.map((a,y)=>e.jsx("a",{href:a.href,className:"banner__link",children:a.label},y))}):n&&n.length>0?e.jsx("div",{className:"banner__links-list",children:n.map((a,y)=>e.jsx("a",{href:a.href,className:"banner__pill-link","aria-label":a.label,children:a.label},y))}):null]})]})]})]})};B.__docgenInfo={description:`Banner component for home and landing pages\r
\r
Large, salient component that introduces a page or calls attention to important calls to action.\r
Supports multiple variants including hero banners with breadcrumbs, titles, descriptions, CTAs, and links.`,methods:[],displayName:"Banner",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:`Banner variant\r
- primary: Dark background with decorative elements, used on home pages\r
- secondary: Light background with border divider and vertical link list`,defaultValue:{value:'"primary"',computed:!1}},title:{required:!0,tsType:{name:"string"},description:"Page title (H1)"},description:{required:!1,tsType:{name:"string"},description:"Optional page description"},breadcrumbs:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"Optional breadcrumb items array"},ctaText:{required:!1,tsType:{name:"string"},description:"Call to action button text"},ctaOnClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Call to action button click handler"},ctaHref:{required:!1,tsType:{name:"string"},description:"Call to action button href"},ctaVariant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"CTA button variant (default: secondary for dark backgrounds and secondary variant)"},linksHeading:{required:!1,tsType:{name:"union",raw:'"Popular" | "Featured" | "Related"',elements:[{name:"literal",value:'"Popular"'},{name:"literal",value:'"Featured"'},{name:"literal",value:'"Related"'}]},description:`Heading for the links section\r
- "Popular": Most visited or commonly used\r
- "Featured": Highlights important or timely content\r
- "Related": Connected to the content on the page`},links:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string; href: string }>"},description:`Array of link objects for the popular/featured/related section\r
- Primary variant: Renders as pill-styled clickable links\r
- Secondary variant: Renders as vertical list of text links`},linkItems:{required:!1,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ label: string; href: string }",signature:{properties:[{key:"label",value:{name:"string",required:!0}},{key:"href",value:{name:"string",required:!0}}]}}],raw:"Array<{ label: string; href: string }>"},description:"@deprecated Use `links` prop instead. This prop is maintained for backwards compatibility.\r\nArray of link objects with label and href for vertical link lists (secondary variant)"},showDecorative:{required:!1,tsType:{name:"boolean"},description:"Show decorative background elements (default: true for primary)"},label:{required:!1,tsType:{name:"string"},description:"Breadcrumb label (for first item if not using breadcrumbs array)"},href:{required:!1,tsType:{name:"string"},description:"Breadcrumb href (for first item if not using breadcrumbs array)"}}};const $={title:"Components/Banner",component:B,parameters:{layout:"fullscreen"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary"],description:"Banner variant style"},title:{control:"text",description:"Page title (H1)"},description:{control:"text",description:"Optional page description"},ctaText:{control:"text",description:"Call to action button text"},ctaVariant:{control:"select",options:["primary","secondary","tertiary"],description:"CTA button variant"},linksHeading:{control:"select",options:["Popular","Featured","Related"],description:"Heading for links section"},showDecorative:{control:"boolean",description:"Show decorative background elements"}}},t={args:{variant:"primary",title:"Page title",description:"Optional short description of the page goal",ctaText:"Call to action",linksHeading:"Popular",links:[{label:"Bus timetables and maps",href:"#"},{label:"Check your rego",href:"#"},{label:"Find a Motor Vehicle Registry (MVR)",href:"#"},{label:"Government priorities",href:"#"}]}},i={args:{variant:"primary",title:"Health and Wellbeing",description:"Access health services, find medical facilities, and learn about public health programs in the Northern Territory.",ctaText:"Find health services",linksHeading:"Featured",links:[{label:"COVID-19 information",href:"#"},{label:"Mental health support",href:"#"},{label:"Hospital locations",href:"#"},{label:"Medicare services",href:"#"}],label:"Home",href:"/"}},s={args:{variant:"primary",title:"Business and Industry",description:"Start a business, apply for licenses and permits, and access business support services.",ctaText:"Register your business",linksHeading:"Related",links:[{label:"Business grants",href:"#"},{label:"Trade licenses",href:"#"},{label:"Industry regulations",href:"#"},{label:"Export assistance",href:"#"}],label:"Home",href:"/"}},l={args:{variant:"primary",title:"Welcome to NT.GOV.AU",description:"Your gateway to Northern Territory Government services and information.",ctaText:"Explore services",linksHeading:"Popular",links:[{label:"Apply for permits",href:"#"},{label:"Renew licenses",href:"#"},{label:"Find services",href:"#"},{label:"Contact us",href:"#"}]}},o={args:{variant:"primary",title:"Clean Banner Design",description:"This banner demonstrates the component without decorative background elements.",ctaText:"Learn more",showDecorative:!1,linksHeading:"Popular",links:[{label:"Service 1",href:"#"},{label:"Service 2",href:"#"},{label:"Service 3",href:"#"}]}},c={args:{variant:"primary",title:"Northern Territory Government Services and Information Portal",description:"Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you're a resident, business owner, or visitor, find everything you need to interact with government services online.",ctaText:"Get started with services",linksHeading:"Popular",links:[{label:"Driver's license renewal and applications",href:"#"},{label:"Business registration and licensing",href:"#"},{label:"Property and land information services",href:"#"},{label:"Health and community programs",href:"#"},{label:"Education and training resources",href:"#"}],label:"Home",href:"/"}},d={args:{variant:"secondary",title:"Page title",description:"Optional short description of the page goal",ctaText:"Call to action",linksHeading:"Popular",links:[{label:"Bus timetables and maps",href:"#"},{label:"Check your rego",href:"#"},{label:"Find a Motor Vehicle Registry (MVR)",href:"#"},{label:"Government priorities",href:"#"}],label:"Home",href:"/"}},p={args:{variant:"secondary",title:"Transport Services",description:"Access public transport information, vehicle registration, and licensing services.",ctaText:"View all transport services",linksHeading:"Featured",links:[{label:"Renew your driver's license",href:"#"},{label:"Register a vehicle",href:"#"},{label:"Road safety information",href:"#"},{label:"Public transport timetables",href:"#"},{label:"Apply for driving permit",href:"#"}],breadcrumbs:[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Current page",isCurrent:!0}]}},m={args:{variant:"secondary",title:"Community Programs",description:"Explore community programs and support services.",ctaText:"Learn more",showDecorative:!1,linksHeading:"Related",links:[{label:"Youth programs",href:"#"},{label:"Senior services",href:"#"},{label:"Family support",href:"#"}],label:"Home",href:"/"}},u={args:{variant:"primary",title:"Page Title",description:"This banner shows only the title and description, with no optional sections."}},h={args:{variant:"primary",title:"Information Page",description:"This banner has no call to action button.",breadcrumbs:[{label:"Home",href:"/"},{label:"Current page",isCurrent:!0}],linksHeading:"Popular",links:[{label:"Service 1",href:"#service1"},{label:"Service 2",href:"#service2"},{label:"Service 3",href:"#service3"}]}},b={args:{variant:"primary",title:"Service Page",description:"This banner has no popular links section.",ctaText:"Get started",breadcrumbs:[{label:"Home",href:"/"},{label:"Current page",isCurrent:!0}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Page title",
    description: "Optional short description of the page goal",
    ctaText: "Call to action",
    linksHeading: "Popular",
    links: [{
      label: "Bus timetables and maps",
      href: "#"
    }, {
      label: "Check your rego",
      href: "#"
    }, {
      label: "Find a Motor Vehicle Registry (MVR)",
      href: "#"
    }, {
      label: "Government priorities",
      href: "#"
    }]
  }
}`,...t.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Health and Wellbeing",
    description: "Access health services, find medical facilities, and learn about public health programs in the Northern Territory.",
    ctaText: "Find health services",
    linksHeading: "Featured",
    links: [{
      label: "COVID-19 information",
      href: "#"
    }, {
      label: "Mental health support",
      href: "#"
    }, {
      label: "Hospital locations",
      href: "#"
    }, {
      label: "Medicare services",
      href: "#"
    }],
    label: "Home",
    href: "/"
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Business and Industry",
    description: "Start a business, apply for licenses and permits, and access business support services.",
    ctaText: "Register your business",
    linksHeading: "Related",
    links: [{
      label: "Business grants",
      href: "#"
    }, {
      label: "Trade licenses",
      href: "#"
    }, {
      label: "Industry regulations",
      href: "#"
    }, {
      label: "Export assistance",
      href: "#"
    }],
    label: "Home",
    href: "/"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Welcome to NT.GOV.AU",
    description: "Your gateway to Northern Territory Government services and information.",
    ctaText: "Explore services",
    linksHeading: "Popular",
    links: [{
      label: "Apply for permits",
      href: "#"
    }, {
      label: "Renew licenses",
      href: "#"
    }, {
      label: "Find services",
      href: "#"
    }, {
      label: "Contact us",
      href: "#"
    }]
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Clean Banner Design",
    description: "This banner demonstrates the component without decorative background elements.",
    ctaText: "Learn more",
    showDecorative: false,
    linksHeading: "Popular",
    links: [{
      label: "Service 1",
      href: "#"
    }, {
      label: "Service 2",
      href: "#"
    }, {
      label: "Service 3",
      href: "#"
    }]
  }
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Northern Territory Government Services and Information Portal",
    description: "Access comprehensive information about Northern Territory Government services, programs, and initiatives. Whether you're a resident, business owner, or visitor, find everything you need to interact with government services online.",
    ctaText: "Get started with services",
    linksHeading: "Popular",
    links: [{
      label: "Driver's license renewal and applications",
      href: "#"
    }, {
      label: "Business registration and licensing",
      href: "#"
    }, {
      label: "Property and land information services",
      href: "#"
    }, {
      label: "Health and community programs",
      href: "#"
    }, {
      label: "Education and training resources",
      href: "#"
    }],
    label: "Home",
    href: "/"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    title: "Page title",
    description: "Optional short description of the page goal",
    ctaText: "Call to action",
    linksHeading: "Popular",
    links: [{
      label: "Bus timetables and maps",
      href: "#"
    }, {
      label: "Check your rego",
      href: "#"
    }, {
      label: "Find a Motor Vehicle Registry (MVR)",
      href: "#"
    }, {
      label: "Government priorities",
      href: "#"
    }],
    label: "Home",
    href: "/"
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    title: "Transport Services",
    description: "Access public transport information, vehicle registration, and licensing services.",
    ctaText: "View all transport services",
    linksHeading: "Featured",
    links: [{
      label: "Renew your driver's license",
      href: "#"
    }, {
      label: "Register a vehicle",
      href: "#"
    }, {
      label: "Road safety information",
      href: "#"
    }, {
      label: "Public transport timetables",
      href: "#"
    }, {
      label: "Apply for driving permit",
      href: "#"
    }],
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Services",
      href: "/services"
    }, {
      label: "Current page",
      isCurrent: true
    }]
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    title: "Community Programs",
    description: "Explore community programs and support services.",
    ctaText: "Learn more",
    showDecorative: false,
    linksHeading: "Related",
    links: [{
      label: "Youth programs",
      href: "#"
    }, {
      label: "Senior services",
      href: "#"
    }, {
      label: "Family support",
      href: "#"
    }],
    label: "Home",
    href: "/"
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Page Title",
    description: "This banner shows only the title and description, with no optional sections."
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Information Page",
    description: "This banner has no call to action button.",
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Current page",
      isCurrent: true
    }],
    linksHeading: "Popular",
    links: [{
      label: "Service 1",
      href: "#service1"
    }, {
      label: "Service 2",
      href: "#service2"
    }, {
      label: "Service 3",
      href: "#service3"
    }]
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    title: "Service Page",
    description: "This banner has no popular links section.",
    ctaText: "Get started",
    breadcrumbs: [{
      label: "Home",
      href: "/"
    }, {
      label: "Current page",
      isCurrent: true
    }]
  }
}`,...b.parameters?.docs?.source}}};const U=["PrimaryBanner","PrimaryWithFeaturedLinks","PrimaryWithRelatedLinks","WithoutBreadcrumbs","WithoutDecorative","WithLongContent","SecondaryBanner","SecondaryWithFeatured","SecondaryMinimal","MinimalTitleOnly","WithoutCTA","WithoutLinks"];export{u as MinimalTitleOnly,t as PrimaryBanner,i as PrimaryWithFeaturedLinks,s as PrimaryWithRelatedLinks,d as SecondaryBanner,m as SecondaryMinimal,p as SecondaryWithFeatured,c as WithLongContent,l as WithoutBreadcrumbs,h as WithoutCTA,o as WithoutDecorative,b as WithoutLinks,U as __namedExportsOrder,$ as default};
