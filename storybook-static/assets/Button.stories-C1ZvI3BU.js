import{j as a}from"./iframe-D3sxsOni.js";import{I as h}from"./Icon-Brzf5qOg.js";import"./preload-helper-Ct5FWWRu.js";const r=({variant:y="primary",size:b,disabled:v=!1,label:f,onClick:x,type:S="button",iconLeft:u,iconRight:g,className:B,...j})=>{const L=b?`btn-${b}`:"",w=`btn btn-${y} ${L} ${B||""}`.trim();return a.jsxs("button",{type:S,className:w,disabled:v,onClick:x,...j,children:[u&&a.jsx(h,{icon:u,className:f?"me-2":""}),f,g&&a.jsx(h,{icon:g,className:f?"ms-2":""})]})};r.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"Button variant",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"literal",value:'"sm"'},description:"Button size"},label:{required:!1,tsType:{name:"string"},description:"Button text label"},iconLeft:{required:!1,tsType:{name:"string"},description:"Icon to display on the left side (FontAwesome icon class, e.g., 'fa-light fa-home')"},iconRight:{required:!1,tsType:{name:"string"},description:"Icon to display on the right side (FontAwesome icon class, e.g., 'fa-light fa-arrow-right')"},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const T={title:"Components/Button",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"boolean",mapping:{false:void 0,true:"sm"}}}},e={args:{variant:"primary",label:"Button"}},t={args:{variant:"secondary",label:"Button"}},n={args:{variant:"tertiary",label:"Button"}},o={args:{size:"sm",label:"Small Button"}},i={args:{label:"Button"},render:()=>a.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[a.jsx(r,{variant:"primary",label:"Primary"}),a.jsx(r,{variant:"secondary",label:"Secondary"}),a.jsx(r,{variant:"tertiary",label:"Tertiary"})]})},s={args:{variant:"primary",iconLeft:"fa-light fa-home",label:"Home"}},l={args:{variant:"primary",iconRight:"fa-light fa-arrow-right",label:"Next"}},c={args:{variant:"primary",iconLeft:"fa-light fa-search","aria-label":"Search"}},d={render:()=>a.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[a.jsx(r,{variant:"primary",iconLeft:"fa-light fa-home",label:"Home"}),a.jsx(r,{variant:"primary",iconLeft:"fa-light fa-download",label:"Download"}),a.jsx(r,{variant:"secondary",iconLeft:"fa-light fa-arrow-left",label:"Back"}),a.jsx(r,{variant:"tertiary",iconLeft:"fa-light fa-cog",label:"Settings"}),a.jsx(r,{variant:"primary",iconRight:"fa-light fa-arrow-right",label:"Next"})]})},m={args:{size:"sm"},render:()=>a.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[a.jsx(r,{variant:"primary",iconLeft:"fa-light fa-search","aria-label":"Search"}),a.jsx(r,{variant:"secondary",iconLeft:"fa-light fa-cog","aria-label":"Settings"}),a.jsx(r,{variant:"tertiary",iconLeft:"fa-light fa-filter","aria-label":"Filter"}),a.jsx(r,{variant:"primary",iconLeft:"fa-light fa-plus","aria-label":"Add"}),a.jsx(r,{variant:"secondary",iconLeft:"fa-light fa-times","aria-label":"Close"}),a.jsx(r,{variant:"primary",iconLeft:"fa-light fa-info-circle","aria-label":"Information"}),a.jsx(r,{variant:"secondary",iconLeft:"fa-light fa-edit","aria-label":"Edit"})]})},p={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Extra Large Padding"}),a.jsx(r,{variant:"primary",label:"Extra Large Button",style:{"--bs-btn-padding-x":"48px","--bs-btn-padding-y":"20px","--bs-btn-font-size":"18px"}})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Custom Colors"}),a.jsx(r,{variant:"primary",label:"Purple Button",style:{"--bs-btn-bg":"#8b5cf6","--bs-btn-border-color":"#8b5cf6","--bs-btn-hover-bg":"#7c3aed","--bs-btn-hover-border-color":"#7c3aed","--bs-btn-active-bg":"#6d28d9","--bs-btn-active-border-color":"#6d28d9"}})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Pill-Shaped (Override NTG Theme)"}),a.jsx(r,{variant:"primary",label:"Pill Button",style:{"--bs-btn-border-radius":"50rem"}})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Custom Border"}),a.jsx(r,{variant:"primary",label:"Custom Border",style:{"--bs-btn-border-width":"3px","--bs-btn-border-color":"#dc3545","--bs-btn-bg":"transparent","--bs-btn-color":"#dc3545","--bs-btn-hover-bg":"#dc3545","--bs-btn-hover-color":"white"}})]}),a.jsx("div",{style:{marginTop:"8px",padding:"16px",background:"#f8f9fa",borderRadius:"8px",maxWidth:"600px"},children:a.jsxs("p",{style:{margin:0,fontSize:"13px",lineHeight:"1.6"},children:[a.jsx("strong",{children:"💡 Tip:"})," All buttons use Bootstrap 5.3's CSS variables approach. You can customize padding, colors, borders, typography, and more at runtime without modifying component code. See"," ",a.jsx("code",{children:"CSS_VARIABLES.md"})," for complete documentation."]})})]}),parameters:{layout:"padded",docs:{description:{story:"Demonstrates runtime customization using Bootstrap CSS variables. Override `--bs-btn-*` variables inline or via CSS classes to create custom button styles without modifying the component."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button"
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Button"
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "tertiary",
    label: "Button"
  }
}`,...n.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm",
    label: "Small Button"
  }
}`,...o.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    label: "Button"
  },
  render: () => <div className="d-flex gap-2 flex-wrap">\r
      <Button variant="primary" label="Primary" />\r
      <Button variant="secondary" label="Secondary" />\r
      <Button variant="tertiary" label="Tertiary" />\r
    </div>
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    iconLeft: "fa-light fa-home",
    label: "Home"
  }
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    iconRight: "fa-light fa-arrow-right",
    label: "Next"
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    iconLeft: "fa-light fa-search",
    "aria-label": "Search"
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: () => <div className="d-flex gap-2 flex-wrap">\r
      <Button variant="primary" iconLeft="fa-light fa-home" label="Home" />\r
      <Button variant="primary" iconLeft="fa-light fa-download" label="Download" />\r
      <Button variant="secondary" iconLeft="fa-light fa-arrow-left" label="Back" />\r
      <Button variant="tertiary" iconLeft="fa-light fa-cog" label="Settings" />\r
      <Button variant="primary" iconRight="fa-light fa-arrow-right" label="Next" />\r
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: () => <div className="d-flex gap-2 flex-wrap">\r
      <Button variant="primary" iconLeft="fa-light fa-search" aria-label="Search" />\r
      <Button variant="secondary" iconLeft="fa-light fa-cog" aria-label="Settings" />\r
      <Button variant="tertiary" iconLeft="fa-light fa-filter" aria-label="Filter" />\r
      <Button variant="primary" iconLeft="fa-light fa-plus" aria-label="Add" />\r
      <Button variant="secondary" iconLeft="fa-light fa-times" aria-label="Close" />\r
      <Button variant="primary" iconLeft="fa-light fa-info-circle" aria-label="Information" />\r
      <Button variant="secondary" iconLeft="fa-light fa-edit" aria-label="Edit" />\r
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "flex-start"
  }}>\r
      <div>\r
        <h4 style={{
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: 600
      }}>\r
          Extra Large Padding\r
        </h4>\r
        <Button variant="primary" label="Extra Large Button" style={{
        "--bs-btn-padding-x": "48px",
        "--bs-btn-padding-y": "20px",
        "--bs-btn-font-size": "18px"
      } as React.CSSProperties} />\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: 600
      }}>\r
          Custom Colors\r
        </h4>\r
        <Button variant="primary" label="Purple Button" style={{
        "--bs-btn-bg": "#8b5cf6",
        "--bs-btn-border-color": "#8b5cf6",
        "--bs-btn-hover-bg": "#7c3aed",
        "--bs-btn-hover-border-color": "#7c3aed",
        "--bs-btn-active-bg": "#6d28d9",
        "--bs-btn-active-border-color": "#6d28d9"
      } as React.CSSProperties} />\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: 600
      }}>\r
          Pill-Shaped (Override NTG Theme)\r
        </h4>\r
        <Button variant="primary" label="Pill Button" style={{
        "--bs-btn-border-radius": "50rem"
      } as React.CSSProperties} />\r
      </div>\r
\r
      <div>\r
        <h4 style={{
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: 600
      }}>\r
          Custom Border\r
        </h4>\r
        <Button variant="primary" label="Custom Border" style={{
        "--bs-btn-border-width": "3px",
        "--bs-btn-border-color": "#dc3545",
        "--bs-btn-bg": "transparent",
        "--bs-btn-color": "#dc3545",
        "--bs-btn-hover-bg": "#dc3545",
        "--bs-btn-hover-color": "white"
      } as React.CSSProperties} />\r
      </div>\r
\r
      <div style={{
      marginTop: "8px",
      padding: "16px",
      background: "#f8f9fa",
      borderRadius: "8px",
      maxWidth: "600px"
    }}>\r
        <p style={{
        margin: 0,
        fontSize: "13px",
        lineHeight: "1.6"
      }}>\r
          <strong>💡 Tip:</strong> All buttons use Bootstrap 5.3's CSS variables\r
          approach. You can customize padding, colors, borders, typography, and\r
          more at runtime without modifying component code. See{" "}\r
          <code>CSS_VARIABLES.md</code> for complete documentation.\r
        </p>\r
      </div>\r
    </div>,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Demonstrates runtime customization using Bootstrap CSS variables. Override \`--bs-btn-*\` variables inline or via CSS classes to create custom button styles without modifying the component."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const N=["Primary","Secondary","Tertiary","Small","AllVariants","WithIconLeft","WithIconRight","IconOnly","IconButtons","IconOnlyButtons","CustomizedWithCSSVars"];export{i as AllVariants,p as CustomizedWithCSSVars,d as IconButtons,c as IconOnly,m as IconOnlyButtons,e as Primary,t as Secondary,o as Small,n as Tertiary,s as WithIconLeft,l as WithIconRight,N as __namedExportsOrder,T as default};
