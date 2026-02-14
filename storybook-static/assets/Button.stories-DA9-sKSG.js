import{j as a}from"./iframe-CvkVNEqq.js";import{I as h}from"./Icon-4l8zrnoC.js";import"./preload-helper-DsXpFtqW.js";const e=({variant:y="primary",size:b,disabled:v=!1,label:f,onClick:x,type:S="button",iconLeft:u,iconRight:g,className:B,...j})=>{const L=b?`btn-${b}`:"",w=`btn btn-${y} ${L} ${B||""}`.trim();return a.jsxs("button",{type:S,className:w,disabled:v,onClick:x,...j,children:[u&&a.jsx(h,{icon:u,className:f?"me-2":""}),f,g&&a.jsx(h,{icon:g,className:f?"ms-2":""})]})};e.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{variant:{required:!1,tsType:{name:"union",raw:'"primary" | "secondary" | "tertiary"',elements:[{name:"literal",value:'"primary"'},{name:"literal",value:'"secondary"'},{name:"literal",value:'"tertiary"'}]},description:"Button variant",defaultValue:{value:'"primary"',computed:!1}},size:{required:!1,tsType:{name:"literal",value:'"sm"'},description:"Button size"},label:{required:!1,tsType:{name:"string"},description:"Button text label"},iconLeft:{required:!1,tsType:{name:"string"},description:"Icon to display on the left side (FontAwesome icon class, e.g., 'fa-light fa-home')"},iconRight:{required:!1,tsType:{name:"string"},description:"Icon to display on the right side (FontAwesome icon class, e.g., 'fa-light fa-arrow-right')"},disabled:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:'"button"',computed:!1},required:!1}}};const T={title:"Components/Button",component:e,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["primary","secondary","tertiary"]},size:{control:"boolean",mapping:{false:void 0,true:"sm"}}}},r={args:{variant:"primary",label:"Button"}},t={args:{variant:"secondary",label:"Button"}},n={args:{variant:"tertiary",label:"Button"}},o={args:{size:"sm",label:"Small Button"}},i={args:{label:"Button"},render:()=>a.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[a.jsx(e,{variant:"primary",label:"Primary"}),a.jsx(e,{variant:"secondary",label:"Secondary"}),a.jsx(e,{variant:"tertiary",label:"Tertiary"})]})},s={args:{variant:"primary",iconLeft:"fa-light fa-home",label:"Home"}},l={args:{variant:"primary",iconRight:"fa-light fa-arrow-right",label:"Next"}},c={args:{variant:"primary",iconLeft:"fa-light fa-search","aria-label":"Search"}},d={render:()=>a.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-home",label:"Home"}),a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-download",label:"Download"}),a.jsx(e,{variant:"secondary",iconLeft:"fa-light fa-arrow-left",label:"Back"}),a.jsx(e,{variant:"tertiary",iconLeft:"fa-light fa-cog",label:"Settings"}),a.jsx(e,{variant:"primary",iconRight:"fa-light fa-arrow-right",label:"Next"})]})},m={args:{size:"sm"},render:()=>a.jsxs("div",{className:"d-flex gap-2 flex-wrap",children:[a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-search","aria-label":"Search"}),a.jsx(e,{variant:"secondary",iconLeft:"fa-light fa-cog","aria-label":"Settings"}),a.jsx(e,{variant:"tertiary",iconLeft:"fa-light fa-filter","aria-label":"Filter"}),a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-plus","aria-label":"Add"}),a.jsx(e,{variant:"secondary",iconLeft:"fa-light fa-times","aria-label":"Close"}),a.jsx(e,{variant:"primary",iconLeft:"fa-light fa-info-circle","aria-label":"Information"}),a.jsx(e,{variant:"secondary",iconLeft:"fa-light fa-edit","aria-label":"Edit"})]})},p={render:()=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",alignItems:"flex-start"},children:[a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Extra Large Padding"}),a.jsx(e,{variant:"primary",label:"Extra Large Button",style:{"--bs-btn-padding-x":"48px","--bs-btn-padding-y":"20px","--bs-btn-font-size":"18px"}})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Custom Colors"}),a.jsx(e,{variant:"primary",label:"Purple Button",style:{"--bs-btn-bg":"#8b5cf6","--bs-btn-border-color":"#8b5cf6","--bs-btn-hover-bg":"#7c3aed","--bs-btn-hover-border-color":"#7c3aed","--bs-btn-active-bg":"#6d28d9","--bs-btn-active-border-color":"#6d28d9"}})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Pill-Shaped (Override NTG Theme)"}),a.jsx(e,{variant:"primary",label:"Pill Button",style:{"--bs-btn-border-radius":"50rem"}})]}),a.jsxs("div",{children:[a.jsx("h4",{style:{marginBottom:"12px",fontSize:"14px",fontWeight:600},children:"Custom Border"}),a.jsx(e,{variant:"primary",label:"Custom Border",style:{"--bs-btn-border-width":"3px","--bs-btn-border-color":"#dc3545","--bs-btn-bg":"transparent","--bs-btn-color":"#dc3545","--bs-btn-hover-bg":"#dc3545","--bs-btn-hover-color":"white"}})]}),a.jsx("div",{style:{marginTop:"8px",padding:"16px",background:"#f8f9fa",borderRadius:"8px",maxWidth:"600px"},children:a.jsxs("p",{style:{margin:0,fontSize:"13px",lineHeight:"1.6"},children:[a.jsx("strong",{children:"💡 Tip:"})," All buttons use Bootstrap 5.3's CSS variables approach. You can customize padding, colors, borders, typography, and more at runtime without modifying component code. See"," ",a.jsx("code",{children:"CSS_VARIABLES.md"})," for complete documentation."]})})]}),parameters:{layout:"padded",docs:{description:{story:"Demonstrates runtime customization using Bootstrap CSS variables. Override `--bs-btn-*` variables inline or via CSS classes to create custom button styles without modifying the component."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "primary",
    label: "Button"
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
  render: () => <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" label="Primary" />
      <Button variant="secondary" label="Secondary" />
      <Button variant="tertiary" label="Tertiary" />
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
  render: () => <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" iconLeft="fa-light fa-home" label="Home" />
      <Button variant="primary" iconLeft="fa-light fa-download" label="Download" />
      <Button variant="secondary" iconLeft="fa-light fa-arrow-left" label="Back" />
      <Button variant="tertiary" iconLeft="fa-light fa-cog" label="Settings" />
      <Button variant="primary" iconRight="fa-light fa-arrow-right" label="Next" />
    </div>
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: "sm"
  },
  render: () => <div className="d-flex gap-2 flex-wrap">
      <Button variant="primary" iconLeft="fa-light fa-search" aria-label="Search" />
      <Button variant="secondary" iconLeft="fa-light fa-cog" aria-label="Settings" />
      <Button variant="tertiary" iconLeft="fa-light fa-filter" aria-label="Filter" />
      <Button variant="primary" iconLeft="fa-light fa-plus" aria-label="Add" />
      <Button variant="secondary" iconLeft="fa-light fa-times" aria-label="Close" />
      <Button variant="primary" iconLeft="fa-light fa-info-circle" aria-label="Information" />
      <Button variant="secondary" iconLeft="fa-light fa-edit" aria-label="Edit" />
    </div>
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    alignItems: "flex-start"
  }}>
      <div>
        <h4 style={{
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: 600
      }}>
          Extra Large Padding
        </h4>
        <Button variant="primary" label="Extra Large Button" style={{
        "--bs-btn-padding-x": "48px",
        "--bs-btn-padding-y": "20px",
        "--bs-btn-font-size": "18px"
      } as React.CSSProperties} />
      </div>

      <div>
        <h4 style={{
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: 600
      }}>
          Custom Colors
        </h4>
        <Button variant="primary" label="Purple Button" style={{
        "--bs-btn-bg": "#8b5cf6",
        "--bs-btn-border-color": "#8b5cf6",
        "--bs-btn-hover-bg": "#7c3aed",
        "--bs-btn-hover-border-color": "#7c3aed",
        "--bs-btn-active-bg": "#6d28d9",
        "--bs-btn-active-border-color": "#6d28d9"
      } as React.CSSProperties} />
      </div>

      <div>
        <h4 style={{
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: 600
      }}>
          Pill-Shaped (Override NTG Theme)
        </h4>
        <Button variant="primary" label="Pill Button" style={{
        "--bs-btn-border-radius": "50rem"
      } as React.CSSProperties} />
      </div>

      <div>
        <h4 style={{
        marginBottom: "12px",
        fontSize: "14px",
        fontWeight: 600
      }}>
          Custom Border
        </h4>
        <Button variant="primary" label="Custom Border" style={{
        "--bs-btn-border-width": "3px",
        "--bs-btn-border-color": "#dc3545",
        "--bs-btn-bg": "transparent",
        "--bs-btn-color": "#dc3545",
        "--bs-btn-hover-bg": "#dc3545",
        "--bs-btn-hover-color": "white"
      } as React.CSSProperties} />
      </div>

      <div style={{
      marginTop: "8px",
      padding: "16px",
      background: "#f8f9fa",
      borderRadius: "8px",
      maxWidth: "600px"
    }}>
        <p style={{
        margin: 0,
        fontSize: "13px",
        lineHeight: "1.6"
      }}>
          <strong>💡 Tip:</strong> All buttons use Bootstrap 5.3's CSS variables
          approach. You can customize padding, colors, borders, typography, and
          more at runtime without modifying component code. See{" "}
          <code>CSS_VARIABLES.md</code> for complete documentation.
        </p>
      </div>
    </div>,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        story: "Demonstrates runtime customization using Bootstrap CSS variables. Override \`--bs-btn-*\` variables inline or via CSS classes to create custom button styles without modifying the component."
      }
    }
  }
}`,...p.parameters?.docs?.source}}};const N=["Primary","Secondary","Tertiary","Small","AllVariants","WithIconLeft","WithIconRight","IconOnly","IconButtons","IconOnlyButtons","CustomizedWithCSSVars"];export{i as AllVariants,p as CustomizedWithCSSVars,d as IconButtons,c as IconOnly,m as IconOnlyButtons,r as Primary,t as Secondary,o as Small,n as Tertiary,s as WithIconLeft,l as WithIconRight,N as __namedExportsOrder,T as default};
