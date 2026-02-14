import{j as r}from"./iframe-gih_HNq7.js";import{B as a}from"./Button-Nq6ftU6N.js";import"./preload-helper-DhH6u7hw.js";import"./Icon-odGput1x.js";const h={title:"Components/Button",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"boolean",mapping:{false:void 0,true:"sm"}}}},t={args:{variant:"primary",label:"Button"}},e={args:{variant:"secondary",label:"Button"}},n={args:{variant:"tertiary",label:"Button"}},o={args:{size:"sm",label:"Small Button"}},i={args:{label:"Button"},render:()=>r.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[r.jsx(a,{variant:"primary",label:"Primary"}),r.jsx(a,{variant:"secondary",label:"Secondary"}),r.jsx(a,{variant:"tertiary",label:"Tertiary"})]})},s={args:{variant:"primary",iconLeft:"fa-light fa-home",label:"Home"}},l={args:{variant:"primary",iconRight:"fa-light fa-arrow-right",label:"Next"}},c={args:{variant:"primary",iconLeft:"fa-light fa-search","aria-label":"Search"}},d={render:()=>r.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[r.jsx(a,{variant:"primary",iconLeft:"fa-light fa-home",label:"Home"}),r.jsx(a,{variant:"primary",iconLeft:"fa-light fa-download",label:"Download"}),r.jsx(a,{variant:"secondary",iconLeft:"fa-light fa-arrow-left",label:"Back"}),r.jsx(a,{variant:"tertiary",iconLeft:"fa-light fa-cog",label:"Settings"}),r.jsx(a,{variant:"primary",iconRight:"fa-light fa-arrow-right",label:"Next"})]})},p={args:{size:"sm"},render:()=>r.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[r.jsx(a,{variant:"primary",iconLeft:"fa-light fa-search","aria-label":"Search"}),r.jsx(a,{variant:"secondary",iconLeft:"fa-light fa-cog","aria-label":"Settings"}),r.jsx(a,{variant:"tertiary",iconLeft:"fa-light fa-filter","aria-label":"Filter"}),r.jsx(a,{variant:"primary",iconLeft:"fa-light fa-plus","aria-label":"Add"}),r.jsx(a,{variant:"secondary",iconLeft:"fa-light fa-times","aria-label":"Close"}),r.jsx(a,{variant:"primary",iconLeft:"fa-light fa-info-circle","aria-label":"Information"}),r.jsx(a,{variant:"secondary",iconLeft:"fa-light fa-edit","aria-label":"Edit"})]})},m={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[r.jsxs("div",{children:[r.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Extra Large Padding"}),r.jsx(a,{variant:"primary",label:"Extra Large Button",style:{"--bs-btn-padding-x":"48px","--bs-btn-padding-y":"20px","--bs-btn-font-size":"18px"}})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Custom Colors"}),r.jsx(a,{variant:"primary",label:"Purple Button",style:{"--bs-btn-bg":"#8b5cf6","--bs-btn-border-color":"#8b5cf6","--bs-btn-hover-bg":"#7c3aed","--bs-btn-hover-border-color":"#7c3aed","--bs-btn-active-bg":"#6d28d9","--bs-btn-active-border-color":"#6d28d9"}})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Pill-Shaped (Override NTG Theme)"}),r.jsx(a,{variant:"primary",label:"Pill Button",style:{"--bs-btn-border-radius":"50rem"}})]}),r.jsxs("div",{children:[r.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Custom Border"}),r.jsx(a,{variant:"primary",label:"Custom Border",style:{"--bs-btn-border-width":"3px","--bs-btn-border-color":"#dc3545","--bs-btn-bg":"transparent","--bs-btn-color":"#dc3545","--bs-btn-hover-bg":"#dc3545","--bs-btn-hover-color":"white"}})]}),r.jsx("div",{style:{marginTop:"8px",padding:"16px",background:"#f8f9fa",borderRadius:"8px",maxWidth:"600px"},children:r.jsxs("p",{style:{margin:0,fontSize:"13px",lineHeight:"1.6"},children:[r.jsx("strong",{children:"💡 Tip:"})," All buttons use Bootstrap 5.3's CSS variables approach. You can customize padding, colors, borders, typography, and more at runtime without modifying component code. See"," ",r.jsx("code",{children:"CSS_VARIABLES.md"})," for complete documentation."]})})]}),parameters:{layout:"padded",docs:{description:{story:"Demonstrates runtime customization using Bootstrap CSS variables. Override `--bs-btn-*` variables inline or via CSS classes to create custom button styles without modifying the component."}}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button"
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "secondary",
    label: "Button"
  }
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const y=["Primary","Secondary","Tertiary","Small","AllVariants","WithIconLeft","WithIconRight","IconOnly","IconButtons","IconOnlyButtons","CustomizedWithCSSVars"];export{i as AllVariants,m as CustomizedWithCSSVars,d as IconButtons,c as IconOnly,p as IconOnlyButtons,t as Primary,e as Secondary,o as Small,n as Tertiary,s as WithIconLeft,l as WithIconRight,y as __namedExportsOrder,h as default};
