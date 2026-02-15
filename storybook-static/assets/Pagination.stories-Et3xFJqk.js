import{j as n}from"./iframe-Bqn3Sp5W.js";import"./preload-helper-DhH6u7hw.js";const m=(t,a)=>Array.from({length:a-t+1},(r,l)=>t+l),L=(t,a)=>Math.min(Math.max(t,1),a),j=(t,a,r)=>{const l=r*2+5;if(a<=l)return m(1,a);const c=Math.max(t-r,1),g=Math.min(t+r,a),u=c>2,p=g<a-1;if(!u&&p){const o=r*2+3;return[...m(1,o),"ellipsis",a]}if(u&&!p){const o=r*2+3;return[1,"ellipsis",...m(a-o+1,a)]}return[1,"ellipsis",...m(c,g),"ellipsis",a]},T=({currentPage:t=10,totalPages:a=21,siblingCount:r=1,ariaLabel:l="Pagination",previousLabel:c="Previous",nextLabel:g="Next",showPrevNext:u=!0,onPageChange:p,getPageHref:o=i=>`#page-${i}`,className:x,...P})=>{const i=Math.max(a,0);if(i<=1)return null;const s=L(t,i),N=j(s,i,r),w=`content-pagination${x?` ${x}`:""}`,y=(e,d)=>{p&&(e.preventDefault(),d!==s&&p(d))};return n.jsx("nav",{"aria-label":l,className:w,...P,children:n.jsxs("ul",{className:"pagination content-pagination__list",children:[u&&s>1?n.jsx("li",{className:"page-item",children:n.jsxs("a",{className:"page-link content-pagination__control",href:o(s-1),"aria-label":"Go to previous page",onClick:e=>y(e,s-1),children:[n.jsx("i",{className:"fa-light fa-chevron-left","aria-hidden":"true"}),c]})}):null,N.map((e,d)=>e==="ellipsis"?n.jsx("li",{className:"page-item disabled content-pagination__ellipsis","aria-hidden":"true",children:n.jsx("span",{className:"page-link",children:"..."})},`ellipsis-${d}`):e===s?n.jsx("li",{className:"page-item active","aria-current":"page",children:n.jsx("span",{className:"page-link",children:e})},`page-${e}`):n.jsx("li",{className:"page-item",children:n.jsx("a",{className:"page-link",href:o(e),"aria-label":`Go to page ${e}`,onClick:C=>y(C,e),children:e})},`page-${e}`)),u&&s<i?n.jsx("li",{className:"page-item",children:n.jsxs("a",{className:"page-link content-pagination__control",href:o(s+1),"aria-label":"Go to next page",onClick:e=>y(e,s+1),children:[g,n.jsx("i",{className:"fa-light fa-chevron-right","aria-hidden":"true"})]})}):null]})})};T.__docgenInfo={description:"",methods:[],displayName:"PaginationContent",props:{currentPage:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"10",computed:!1}},totalPages:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"21",computed:!1}},siblingCount:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"1",computed:!1}},ariaLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Pagination"',computed:!1}},previousLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Previous"',computed:!1}},nextLabel:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:'"Next"',computed:!1}},showPrevNext:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},onPageChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => void",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"void"}}},description:""},getPageHref:{required:!1,tsType:{name:"signature",type:"function",raw:"(page: number) => string",signature:{arguments:[{type:{name:"number"},name:"page"}],return:{name:"string"}}},description:"",defaultValue:{value:"(page: number) => `#page-${page}`",computed:!1}}}};const _={title:"Content/Pagination",component:T,parameters:{layout:"padded",docs:{description:{component:`**Pagination**

Helps users navigate large amounts of content separated into different pages.

**Usage**

Commonly used in search results, pagination sits at the bottom of the page and allows users to navigate forwards and backwards through a series of pages.

**The pagination component features:**
- A Previous button to navigate to the preceding page. This button is not visible if the user is on the first page.
- A Next button to navigate to the following page. This button is not visible if the user is on the last page.
- Sequential numbers denoting a different individual page. Each number is selectable for the user to jump to that page.
- Non-selectable ellipses that skip pages for smaller screens and when there are more than 7 pages.
- A clear highlight over the page number the user is currently on.

Live component: see the Default story.

**How to use**
- Use if the content is separated into two or more pages. For search results, do not have more than 10 items on one page.
- Use ellipses to replace any skipped pages.
- Always display the first page and current page.
- Make sure load times are not adversely impacted by a large list of content on a page.

**How not to use**
- Do not use pagination for linear journeys where users go forwards or back through a process or sequential information. Use buttons instead.
- Never use an infinite scroll as this presents problems for keyboard users. Separate content into pages and use this pagination component instead.
- Do not use if the content is on one single page.
- Do not use to divide a small set of content that can be displayed on a single page; this can add unnecessary complexity and frustration to users.

**Themes**
The NTG Design System currently houses two themes or brands, for both external nt.gov.au websites and internal NTG Central intranet websites. The guidelines above apply to both themes.

Live component with NTG and Central tabs: see the Themes story.`}}},tags:["autodocs"],argTypes:{currentPage:{control:"number"},totalPages:{control:"number"},siblingCount:{control:"number"},showPrevNext:{control:"boolean"},previousLabel:{control:"text"},nextLabel:{control:"text"},ariaLabel:{control:"text"}}},h={args:{currentPage:10,totalPages:21,siblingCount:1,ariaLabel:"Search results pages"}},f={args:{currentPage:1,totalPages:8,siblingCount:1,ariaLabel:"Service listings pages"}},b={args:{currentPage:8,totalPages:8,siblingCount:1,ariaLabel:"Service listings pages"}},v={name:"Themes (Use Theme Toolbar)",args:{currentPage:10,totalPages:21,siblingCount:1,ariaLabel:"Search results pages"},parameters:{docs:{description:{story:"Use the Theme toolbar to preview NT.GOV.AU and NTG Central styling."}}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 10,
    totalPages: 21,
    siblingCount: 1,
    ariaLabel: "Search results pages"
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 1,
    totalPages: 8,
    siblingCount: 1,
    ariaLabel: "Service listings pages"
  }
}`,...f.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    currentPage: 8,
    totalPages: 8,
    siblingCount: 1,
    ariaLabel: "Service listings pages"
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: "Themes (Use Theme Toolbar)",
  args: {
    currentPage: 10,
    totalPages: 21,
    siblingCount: 1,
    ariaLabel: "Search results pages"
  },
  parameters: {
    docs: {
      description: {
        story: "Use the Theme toolbar to preview NT.GOV.AU and NTG Central styling."
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const q=["Default","FirstPage","LastPage","Themes"];export{h as Default,f as FirstPage,b as LastPage,v as Themes,q as __namedExportsOrder,_ as default};
