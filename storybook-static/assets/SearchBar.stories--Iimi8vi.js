import{r as y,j as e}from"./iframe-UtExV-sb.js";import{I as v}from"./Icon-DUev_1Qm.js";import"./preload-helper-DhH6u7hw.js";const S=({variant:l="primary",wrapperClassName:d,onSearch:b,icon:p="fa-light fa-search",searchButtonLabel:_="Run search",id:x,className:u,required:h,value:t,defaultValue:m,onChange:j,onKeyDown:N,type:V="search",...w})=>{const C=y.useId(),q=x??C,c=t!==void 0,[T,I]=y.useState(m),i=c?t:T,f=i!=null?`${i}`:"",P=f.length>0,O=`form-control search-bar__control${u?` ${u}`:""}`,$="input-group search-bar__group",B=a=>{c||I(a.target.value),j?.(a)},g=()=>{b?.(f)},E=a=>{N?.(a),!a.defaultPrevented&&a.key==="Enter"&&g()},R=c?{value:t}:{defaultValue:m};return e.jsx("div",{className:`search-bar${d?` ${d}`:""}`,role:"search","data-variant":l,"data-filled":P?"true":void 0,children:e.jsxs("div",{className:$,children:[e.jsx("input",{id:q,type:V,className:O,required:h,"aria-required":h||void 0,onChange:B,onKeyDown:E,...R,...w}),l==="primary"?e.jsx("button",{className:"btn search-bar__button",type:"button",onClick:g,"aria-label":_,children:e.jsx("span",{className:"search-bar__icon","aria-hidden":"true",children:e.jsx(v,{icon:p,className:"search-bar__icon-glyph",color:"inherit",ariaHidden:!0})})}):e.jsx("span",{className:"input-group-text search-bar__addon","aria-hidden":"true",children:e.jsx("span",{className:"search-bar__icon",children:e.jsx(v,{icon:p,className:"search-bar__icon-glyph",color:"inherit",ariaHidden:!0})})})]})})};S.__docgenInfo={description:"",methods:[],displayName:"SearchBar",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'}]},description:`Visual variant for the search bar.\r
@default "primary"`,defaultValue:{value:'"primary"',computed:!1}},wrapperClassName:{required:!1,tsType:{name:"string"},description:"Optional wrapper class for layout control."},onSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when the search action is triggered."},icon:{required:!1,tsType:{name:"string"},description:`FontAwesome icon class used for the search icon.\r
@default "fa-light fa-search"`,defaultValue:{value:'"fa-light fa-search"',computed:!1}},searchButtonLabel:{required:!1,tsType:{name:"string"},description:`Accessible label for the search action button.\r
@default "Run search"`,defaultValue:{value:'"Run search"',computed:!1}},type:{defaultValue:{value:'"search"',computed:!1},required:!1}},composes:["Omit"]};const F={title:"Components/SearchBar",component:S,parameters:{layout:"padded",docs:{description:{component:"Search bars provide a focused input for finding services, people, or content. Use the primary variant for prominent search actions and the secondary variant for lightweight filtering."}}},tags:["autodocs"],argTypes:{placeholder:{control:"text"},required:{control:"boolean"},variant:{control:"select",options:["primary","secondary"]}}},r={args:{placeholder:"Search",variant:"primary"}},n={args:{placeholder:"Search",variant:"secondary"}},s={args:{placeholder:"Search for announcements",variant:"primary",onSearch:()=>{}}},o={args:{placeholder:"Search",variant:"primary"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "primary"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "secondary"
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search for announcements",
    variant: "primary",
    onSearch: () => undefined
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: "Search",
    variant: "primary"
  }
}`,...o.parameters?.docs?.source}}};const H=["Primary","Secondary","WithOnSearch","Playground"];export{o as Playground,r as Primary,n as Secondary,s as WithOnSearch,H as __namedExportsOrder,F as default};
