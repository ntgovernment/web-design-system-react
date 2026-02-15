import{j as e}from"./iframe-BGlN-Xn9.js";import{D as r}from"./Document-CbZmI6em.js";import"./preload-helper-DhH6u7hw.js";import"./Icon-uzMeCDpH.js";const u={title:"Components/Document",component:r,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{fileType:{control:"select",options:["docx","pdf","xlsx","pptx"]},fileSize:{control:"text"},metadata:{control:"text"}}},i={args:{title:"Emergency management plan template",href:"#",fileType:"docx",fileSize:"182 KB",description:"Optional description of the document."}},n={args:{title:"Regional infrastructure budget summary",href:"#",fileType:"xlsx",fileSize:"2.4 MB"}},t={name:"PDF",args:{title:"Community consultation outcomes",href:"#",fileType:"pdf",fileSize:"946 KB",description:"Summary of community feedback and actions from the recent consultations."}},a={name:"XLSX",args:{title:"Service delivery performance data",href:"#",fileType:"xlsx",fileSize:"1.1 MB",description:"Spreadsheet of quarterly measures and regional performance indicators."}},o={name:"PPTX",args:{title:"Strategic planning briefing",href:"#",fileType:"pptx",fileSize:"4.8 MB",description:"Slides used for executive planning workshops and stakeholder updates."}},s={args:{title:"",href:"#",fileType:"docx",fileSize:""},render:()=>e.jsxs("div",{className:"d-flex flex-column gap-3",children:[e.jsx(r,{title:"Public consultation guide",href:"#",fileType:"pdf",fileSize:"946 KB",description:"Guidance for community consultation sessions and reporting."}),e.jsx(r,{title:"Grant application checklist",href:"#",fileType:"docx",fileSize:"214 KB",description:"Checklist to confirm required attachments before submission."}),e.jsx(r,{title:"Quarterly performance dashboard",href:"#",fileType:"xlsx",fileSize:"1.1 MB",description:"Spreadsheet with regional performance indicators and charts."}),e.jsx(r,{title:"Strategic planning briefing",href:"#",fileType:"pptx",fileSize:"4.8 MB",description:"Slides used for executive planning workshops."})]})},c={name:"NTG Theme",args:{title:"",href:"#",fileType:"docx",fileSize:""},render:()=>e.jsx("div",{"data-theme":"ntg",children:e.jsx(r,{title:"Community safety program overview",href:"#",fileType:"pdf",fileSize:"1.3 MB",description:"Summary of initiatives, timelines, and reporting milestones."})})},l={name:"Central Theme",args:{title:"",href:"#",fileType:"docx",fileSize:""},render:()=>e.jsx("div",{"data-theme":"central",children:e.jsx(r,{title:"Intranet onboarding handbook",href:"#",fileType:"docx",fileSize:"512 KB",description:"Internal guidance for new staff and induction resources."})})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Emergency management plan template",
    href: "#",
    fileType: "docx",
    fileSize: "182 KB",
    description: "Optional description of the document."
  }
}`,...i.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Regional infrastructure budget summary",
    href: "#",
    fileType: "xlsx",
    fileSize: "2.4 MB"
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: "PDF",
  args: {
    title: "Community consultation outcomes",
    href: "#",
    fileType: "pdf",
    fileSize: "946 KB",
    description: "Summary of community feedback and actions from the recent consultations."
  }
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const h=["Default","WithoutDescription","PdfVariant","XlsxVariant","PptxVariant","AllFileTypes","NTGTheme","CentralTheme"];export{s as AllFileTypes,l as CentralTheme,i as Default,c as NTGTheme,t as PdfVariant,o as PptxVariant,n as WithoutDescription,a as XlsxVariant,h as __namedExportsOrder,u as default};
