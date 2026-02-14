import{j as r}from"./iframe-UtExV-sb.js";import"./preload-helper-DhH6u7hw.js";const w=[{label:"Home",href:"/"},{label:"Page 1",href:"/services"},{label:"Parent page",href:"/services/permits"},{label:"Current page",isCurrent:!0}],B=t=>{const n=t.findIndex(s=>s.isCurrent),o=n>=0?n:Math.max(t.length-1,0);return t.map((s,h)=>({...s,isCurrent:h===o}))},M=t=>{const n=t.findIndex(s=>s.isCurrent),o=Math.max(n-1,0);return t[o]},C=({items:t=w,variant:n="default",ariaLabel:o="Breadcrumb",className:s,...h})=>{const l=B(t),u=l.findIndex(e=>e.isCurrent),g=l[u]??l[l.length-1],f=l[0],m=(e,a)=>{const c=e.isCurrent||!e.href,y=`breadcrumb-item${c?" active":""}`;return r.jsx("li",{className:y,"aria-current":c?"page":void 0,children:c?r.jsx("span",{className:"content-breadcrumbs__current",children:e.label}):r.jsx("a",{className:"content-breadcrumbs__link",href:e.href,children:e.label})},`${e.label}-${a}`)},x=e=>e.length===0?null:r.jsx("li",{className:"breadcrumb-item content-breadcrumbs__menu-item",children:r.jsxs("details",{className:"content-breadcrumbs__menu",children:[r.jsx("summary",{className:"content-breadcrumbs__menu-trigger","aria-label":"Open breadcrumb menu",children:r.jsx("svg",{className:"content-breadcrumbs__menu-icon","aria-hidden":"true",viewBox:"0 0 17 3",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg",children:r.jsx("path",{d:"M16.8 1.2C16.8 1.86375 16.2637 2.4 15.6 2.4C14.9362 2.4 14.4 1.86375 14.4 1.2C14.4 0.53625 14.9362 0 15.6 0C16.2637 0 16.8 0.53625 16.8 1.2ZM9.6 1.2C9.6 1.86375 9.06375 2.4 8.4 2.4C7.73625 2.4 7.2 1.86375 7.2 1.2C7.2 0.53625 7.73625 0 8.4 0C9.06375 0 9.6 0.53625 9.6 1.2ZM1.2 2.4C0.53625 2.4 0 1.86375 0 1.2C0 0.53625 0.53625 0 1.2 0C1.86375 0 2.4 0.53625 2.4 1.2C2.4 1.86375 1.86375 2.4 1.2 2.4Z",fill:"currentColor"})})}),r.jsx("ul",{className:"content-breadcrumbs__menu-list",children:e.map((a,c)=>r.jsx("li",{className:"content-breadcrumbs__menu-entry",children:a.href?r.jsx("a",{className:"content-breadcrumbs__menu-link",href:a.href,children:a.label}):r.jsx("span",{className:"content-breadcrumbs__menu-label",children:a.label})},`${a.label}-${c}`))})]})}),I=()=>l.map(m),_=()=>{const e=M(l);if(!e)return null;const a=f||{label:"Home",href:"/"},c=e.isCurrent?e:{...e,isCurrent:!1};return r.jsxs(r.Fragment,{children:[m(a,0),m(c,1)]})},T=()=>{if(!f||!g)return null;const e=l.slice(1,u),a=u<=0;return r.jsxs(r.Fragment,{children:[m(f,0),x(e),a?null:m(g,u)]})},N="breadcrumb content-breadcrumbs__list",j=`content-breadcrumbs${s?` ${s}`:""}`;return r.jsx("nav",{"aria-label":o,className:j,"data-variant":n,...h,children:r.jsx("ol",{className:N,children:n==="mobile"?_():n==="truncated"?T():I()})})};C.__docgenInfo={description:"",methods:[],displayName:"BreadcrumbsContent",props:{items:{required:!1,tsType:{name:"Array",elements:[{name:"BreadcrumbItem"}],raw:"BreadcrumbItem[]"},description:"",defaultValue:{value:`[\r
  { label: "Home", href: "/" },\r
  { label: "Page 1", href: "/services" },\r
  { label: "Parent page", href: "/services/permits" },\r
  { label: "Current page", isCurrent: true },\r
]`,computed:!1}},variant:{required:!1,tsType:{name:"union",raw:'"default" | "truncated" | "mobile"',elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"truncated"'},{name:"literal",value:'"mobile"'}]},description:"",defaultValue:{value:'"default"',computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Breadcrumb"',computed:!1}}}};const v=[{label:"Home",href:"/"},{label:"Page 1",href:"/services"},{label:"Parent page",href:"/services/permits"},{label:"Current page",isCurrent:!0}],P=[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Grants and funding",href:"/services/grants"},{label:"Community programs",href:"/services/grants/community"},{label:"Regional updates",href:"/services/grants/community/updates"},{label:"Current page",isCurrent:!0}],$=[{label:"Home",href:"/"},{label:"Services",href:"/services"},{label:"Current page",isCurrent:!0}],H={title:"Content/Breadcrumbs",component:C,parameters:{layout:"padded",docs:{description:{component:"Bootstrap breadcrumbs customized with design tokens and NTG theme overrides."}}},tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","truncated","mobile"]}}},i={args:{items:v,variant:"default"}},d={args:{items:P,variant:"truncated"}},b={args:{items:$,variant:"mobile"}},p={name:"Themes (Use Theme Toolbar)",args:{items:v,variant:"default"},parameters:{docs:{description:{story:"Use the Theme toolbar to preview NT.GOV.AU and NTG Central styling."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems,
    variant: "default"
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    items: truncatedItems,
    variant: "truncated"
  }
}`,...d.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    items: mobileItems,
    variant: "mobile"
  }
}`,...b.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: "Themes (Use Theme Toolbar)",
  args: {
    items: defaultItems,
    variant: "default"
  },
  parameters: {
    docs: {
      description: {
        story: "Use the Theme toolbar to preview NT.GOV.AU and NTG Central styling."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const U=["Default","Truncated","Mobile","Themes"];export{i as Default,b as Mobile,p as Themes,d as Truncated,U as __namedExportsOrder,H as default};
