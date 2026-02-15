import{j as e}from"./iframe-BfObj_Gb.js";import{I as B}from"./Icon-ILay-s1V.js";import"./preload-helper-DhH6u7hw.js";const k={docx:{label:"DOCX",icon:"fa-light fa-file-word"},doc:{label:"DOC",icon:"fa-light fa-file-word"},pdf:{label:"PDF",icon:"fa-light fa-file-pdf"},xlsx:{label:"XLSX",icon:"fa-light fa-file-excel"},xls:{label:"XLS",icon:"fa-light fa-file-excel"},pptx:{label:"PPTX",icon:"fa-light fa-file-powerpoint"},ppt:{label:"PPT",icon:"fa-light fa-file-powerpoint"}},i=({title:u,href:h,fileType:g,fileSize:x,description:d,ariaLabel:y,metadata:T,target:p,rel:f,download:S,className:v="",...b})=>{const m=k[g],z=T?.trim()||`${m.label} | ${x}`.trim(),w=p==="_blank"&&!f?"noreferrer":f;return e.jsxs("div",{className:`document ${v}`.trim(),...b,children:[e.jsxs("div",{className:"document__header d-flex gap-2",children:[e.jsx("div",{className:"document__icon-wrapper","aria-hidden":"true",children:e.jsx("div",{className:"document__icon","aria-hidden":"true",children:e.jsx(B,{icon:m.icon})})}),e.jsxs("div",{className:"document__meta",children:[e.jsx("a",{className:"document__title",href:h,"aria-label":y,target:p,rel:w,download:S,children:u}),e.jsx("div",{className:"document__info",children:z})]})]}),d&&e.jsx("div",{className:"document__description",children:d})]})};i.__docgenInfo={description:"Document component for displaying downloadable or viewable files.",methods:[],displayName:"Document",props:{title:{required:!0,tsType:{name:"string"},description:"Document title (displayed as a download/view link)"},href:{required:!0,tsType:{name:"string"},description:"URL to download or view the document"},fileType:{required:!0,tsType:{name:"union",raw:`| "docx"\r
| "doc"\r
| "pdf"\r
| "xlsx"\r
| "xls"\r
| "pptx"\r
| "ppt"`,elements:[{name:"literal",value:'"docx"'},{name:"literal",value:'"doc"'},{name:"literal",value:'"pdf"'},{name:"literal",value:'"xlsx"'},{name:"literal",value:'"xls"'},{name:"literal",value:'"pptx"'},{name:"literal",value:'"ppt"'}]},description:"File type/extension for icon mapping and metadata display"},fileSize:{required:!0,tsType:{name:"string"},description:'File size label (e.g., "182 KB", "2.4 MB")'},description:{required:!1,tsType:{name:"string"},description:"Optional description to add context"},ariaLabel:{required:!1,tsType:{name:"string"},description:"Optional ARIA label for the title link"},metadata:{required:!1,tsType:{name:"string"},description:'Optional override for metadata (replaces "TYPE | SIZE")'},target:{required:!1,tsType:{name:"ReactHTMLAttributeAnchorTarget",raw:"React.HTMLAttributeAnchorTarget"},description:"Link target for the document"},rel:{required:!1,tsType:{name:"string"},description:'Link rel attribute (recommended when using target="_blank")'},download:{required:!1,tsType:{name:"boolean"},description:"Add download attribute to the link"},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const P={title:"Components/Document",component:i,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{fileType:{control:"select",options:["docx","pdf","xlsx","pptx"]},fileSize:{control:"text"},metadata:{control:"text"}}},t={args:{title:"Emergency management plan template",href:"#",fileType:"docx",fileSize:"182 KB",description:"Optional description of the document."}},r={args:{title:"Regional infrastructure budget summary",href:"#",fileType:"xlsx",fileSize:"2.4 MB"}},n={name:"PDF",args:{title:"Community consultation outcomes",href:"#",fileType:"pdf",fileSize:"946 KB",description:"Summary of community feedback and actions from the recent consultations."}},a={name:"XLSX",args:{title:"Service delivery performance data",href:"#",fileType:"xlsx",fileSize:"1.1 MB",description:"Spreadsheet of quarterly measures and regional performance indicators."}},o={name:"PPTX",args:{title:"Strategic planning briefing",href:"#",fileType:"pptx",fileSize:"4.8 MB",description:"Slides used for executive planning workshops and stakeholder updates."}},s={args:{title:"",href:"#",fileType:"docx",fileSize:""},render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(i,{title:"Public consultation guide",href:"#",fileType:"pdf",fileSize:"946 KB",description:"Guidance for community consultation sessions and reporting."}),e.jsx(i,{title:"Grant application checklist",href:"#",fileType:"docx",fileSize:"214 KB",description:"Checklist to confirm required attachments before submission."}),e.jsx(i,{title:"Quarterly performance dashboard",href:"#",fileType:"xlsx",fileSize:"1.1 MB",description:"Spreadsheet with regional performance indicators and charts."}),e.jsx(i,{title:"Strategic planning briefing",href:"#",fileType:"pptx",fileSize:"4.8 MB",description:"Slides used for executive planning workshops."})]})},l={name:"NTG Theme",args:{title:"",href:"#",fileType:"docx",fileSize:""},render:()=>e.jsx("div",{"data-theme":"ntg",children:e.jsx(i,{title:"Community safety program overview",href:"#",fileType:"pdf",fileSize:"1.3 MB",description:"Summary of initiatives, timelines, and reporting milestones."})})},c={name:"Central Theme",args:{title:"",href:"#",fileType:"docx",fileSize:""},render:()=>e.jsx("div",{"data-theme":"central",children:e.jsx(i,{title:"Intranet onboarding handbook",href:"#",fileType:"docx",fileSize:"512 KB",description:"Internal guidance for new staff and induction resources."})})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Emergency management plan template",
    href: "#",
    fileType: "docx",
    fileSize: "182 KB",
    description: "Optional description of the document."
  }
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Regional infrastructure budget summary",
    href: "#",
    fileType: "xlsx",
    fileSize: "2.4 MB"
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: "PDF",
  args: {
    title: "Community consultation outcomes",
    href: "#",
    fileType: "pdf",
    fileSize: "946 KB",
    description: "Summary of community feedback and actions from the recent consultations."
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: "XLSX",
  args: {
    title: "Service delivery performance data",
    href: "#",
    fileType: "xlsx",
    fileSize: "1.1 MB",
    description: "Spreadsheet of quarterly measures and regional performance indicators."
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: "PPTX",
  args: {
    title: "Strategic planning briefing",
    href: "#",
    fileType: "pptx",
    fileSize: "4.8 MB",
    description: "Slides used for executive planning workshops and stakeholder updates."
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    title: "",
    href: "#",
    fileType: "docx",
    fileSize: ""
  },
  render: () => <div className="d-flex flex-column gap-3">\r
      <Document title="Public consultation guide" href="#" fileType="pdf" fileSize="946 KB" description="Guidance for community consultation sessions and reporting." />\r
      <Document title="Grant application checklist" href="#" fileType="docx" fileSize="214 KB" description="Checklist to confirm required attachments before submission." />\r
      <Document title="Quarterly performance dashboard" href="#" fileType="xlsx" fileSize="1.1 MB" description="Spreadsheet with regional performance indicators and charts." />\r
      <Document title="Strategic planning briefing" href="#" fileType="pptx" fileSize="4.8 MB" description="Slides used for executive planning workshops." />\r
    </div>
}`,...s.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: "NTG Theme",
  args: {
    title: "",
    href: "#",
    fileType: "docx",
    fileSize: ""
  },
  render: () => <div data-theme="ntg">\r
      <Document title="Community safety program overview" href="#" fileType="pdf" fileSize="1.3 MB" description="Summary of initiatives, timelines, and reporting milestones." />\r
    </div>
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: "Central Theme",
  args: {
    title: "",
    href: "#",
    fileType: "docx",
    fileSize: ""
  },
  render: () => <div data-theme="central">\r
      <Document title="Intranet onboarding handbook" href="#" fileType="docx" fileSize="512 KB" description="Internal guidance for new staff and induction resources." />\r
    </div>
}`,...c.parameters?.docs?.source}}};const N=["Default","WithoutDescription","PdfVariant","XlsxVariant","PptxVariant","AllFileTypes","NTGTheme","CentralTheme"];export{s as AllFileTypes,c as CentralTheme,t as Default,l as NTGTheme,n as PdfVariant,o as PptxVariant,r as WithoutDescription,a as XlsxVariant,N as __namedExportsOrder,P as default};
