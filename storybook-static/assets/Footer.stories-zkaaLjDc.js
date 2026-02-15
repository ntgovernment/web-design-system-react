import{j as e}from"./iframe-BfObj_Gb.js";import{I as G}from"./Icon-ILay-s1V.js";import"./preload-helper-DhH6u7hw.js";const C=({sections:L=[],socialLinks:_=[],bottomLinks:v=[],logo:T,acknowledgement:S,copyrightText:w,linkDivider:j="|",className:A,...F})=>{const D=`footer ${A||""}`.trim();return e.jsx("footer",{className:D,...F,children:e.jsxs("div",{className:"footer__wrapper",children:[e.jsxs("div",{className:"footer__container",children:[L.length>0&&e.jsxs("div",{className:"footer__main",children:[e.jsx("div",{className:"footer__sections",children:L.map((n,s)=>e.jsxs("div",{className:n.columns===2?"footer__section footer__section--cols-2":"footer__section",children:[n.title&&e.jsx("h5",{className:"footer__section-title",children:n.title}),e.jsx("ul",{className:"footer__link-list","aria-label":n.title,children:n.links.map((N,R)=>e.jsxs("li",{className:"footer__link-item",children:[e.jsx("div",{className:"footer__link-marker"}),e.jsx("a",{href:N.href,className:"footer__link",children:N.label})]},R))})]},s))}),_.length>0&&e.jsxs("div",{className:"footer__section",children:[e.jsx("h5",{className:"footer__section-title",children:"Connect with us"}),e.jsx("ul",{className:"footer__social-list","aria-label":"Social media links",children:_.map((n,s)=>e.jsx("li",{className:"footer__social-item",children:e.jsxs("a",{href:n.href,className:"footer__social-link","aria-label":n.platform,children:[n.icon&&e.jsx(G,{icon:n.icon,className:"me-2"}),n.platform]})},s))})]})]}),e.jsxs("div",{className:"footer__metadata",children:[T&&e.jsx("div",{className:"footer__logo",children:T}),v.length>0&&e.jsx("nav",{className:"footer__bottom-nav","aria-label":"Footer additional links",children:e.jsx("ul",{className:"footer__bottom-links",children:v.map((n,s)=>e.jsxs("li",{className:"footer__bottom-link-item",children:[e.jsx("a",{href:n.href,className:"footer__bottom-link",children:n.label}),s<v.length-1&&e.jsx("span",{className:"footer__divider",children:j})]},s))})})]})]}),(S||w)&&e.jsx("div",{className:"footer__info-section",children:e.jsxs("div",{className:"footer__container",children:[S&&e.jsx("p",{className:"footer__acknowledgement",children:S}),w&&e.jsx("p",{className:"footer__copyright",children:w})]})})]})})};C.__docgenInfo={description:`Footer Component\r
\r
A comprehensive footer section component for NT Government websites.\r
Displays organization information, links, social media, and legal information.\r
\r
Features:\r
- Multiple link sections with semantic grouping\r
- Social media integration\r
- Customizable branding and logo\r
- Aboriginal acknowledgement section\r
- Theme-aware CSS variable customization\r
- Bootstrap CSS variables for styling`,methods:[],displayName:"Footer",props:{sections:{required:!1,tsType:{name:"Array",elements:[{name:"FooterSection"}],raw:"FooterSection[]"},description:'Sections containing groups of links (e.g., "Information and services", "Find out more")',defaultValue:{value:"[]",computed:!1}},socialLinks:{required:!1,tsType:{name:"Array",elements:[{name:"SocialLink"}],raw:"SocialLink[]"},description:"Social media links to display",defaultValue:{value:"[]",computed:!1}},bottomLinks:{required:!1,tsType:{name:"Array",elements:[{name:"FooterLink"}],raw:"FooterLink[]"},description:'Footer bottom links (e.g., "Privacy", "Accessibility", "Contact")',defaultValue:{value:"[]",computed:!1}},logo:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Logo or branding element (accepts React component or HTML string)"},acknowledgement:{required:!1,tsType:{name:"string"},description:"Aboriginal acknowledgement text"},copyrightText:{required:!1,tsType:{name:"string"},description:"Copyright text"},linkDivider:{required:!1,tsType:{name:"union",raw:"string | React.ReactNode",elements:[{name:"string"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Divider separator character or element for bottom links",defaultValue:{value:'"|"',computed:!1}}}};const E={title:"Components/Footer",component:C,parameters:{layout:"fullscreen"},tags:["autodocs"]},r=[{title:"Information and services",columns:2,links:[{label:"Art, sport and leisure",href:"#"},{label:"Boating, fishing and marine",href:"#"},{label:"Business and industry",href:"#"},{label:"Community support and care",href:"#"},{label:"Driving and transport",href:"#"},{label:"Education and learning",href:"#"},{label:"Emergency and safety",href:"#"},{label:"Employment, money and taxes",href:"#"},{label:"Environment",href:"#"},{label:"Health and wellbeing",href:"#"},{label:"Housing, property and land",href:"#"},{label:"Your rights, crime and the law",href:"#"}]},{title:"Find out more",links:[{label:"About government",href:"#"},{label:"Public consultations",href:"#"},{label:"NT public holidays",href:"#"},{label:"Media releases",href:"#"},{label:"Government grants",href:"#"},{label:"Government priorities",href:"#"}]}],i=[{platform:"Facebook",href:"https://facebook.com/ntgovernment",icon:"fa-brands fa-facebook"},{platform:"LinkedIn",href:"https://linkedin.com/company/nt-government",icon:"fa-brands fa-linkedin"},{platform:"YouTube",href:"https://youtube.com/@ntgovernment",icon:"fa-brands fa-youtube"},{platform:"Instagram",href:"https://instagram.com/ntgovernment",icon:"fa-brands fa-instagram"},{platform:"Have your say",href:"https://consultation.nt.gov.au",icon:"fa-light fa-comments"}],o=[{label:"Copyright, disclaimer and privacy",href:"#"},{label:"Freedom of information",href:"#"},{label:"Interpreter services",href:"#"},{label:"Accessibility",href:"#"},{label:"Site map",href:"#"},{label:"Contacts",href:"#"},{label:"NTG staff systems",href:"#"}],x="The Northern Territory Government acknowledges the Traditional Owners of the Northern Territory and recognises their continuing cultural and spiritual connections to the lands, waters and communities. We pay our respects to all Aboriginal and Torres Strait Islander people and their cultures, their Elders past and present, and to future generations.",t="© 2025 Northern Territory Government of Australia",a={args:{sections:r,socialLinks:i,bottomLinks:o,acknowledgement:x,copyrightText:t}},l={args:{bottomLinks:[{label:"Privacy",href:"#"},{label:"Accessibility",href:"#"},{label:"Contact",href:"#"}],copyrightText:"© 2025 Northern Territory Government"}},c={args:{logo:e.jsx("div",{style:{width:"176px",height:"63px",backgroundColor:"rgba(255, 255, 255, 0.2)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"12px",color:"rgba(255, 255, 255, 0.6)"},children:"[Organization Logo]"}),sections:r,socialLinks:i,bottomLinks:o,copyrightText:t}},m={args:{sections:[{title:"Information and services",columns:2,links:[{label:"Art, sport and leisure",href:"#"},{label:"Boating, fishing and marine",href:"#"},{label:"Business and industry",href:"#"},{label:"Community support and care",href:"#"},{label:"Driving and transport",href:"#"}]},{title:"Find out more",links:[{label:"About government",href:"#"},{label:"Public consultations",href:"#"},{label:"NT public holidays",href:"#"}]},{title:"Help and support",links:[{label:"Contact support",href:"#"},{label:"FAQ",href:"#"},{label:"Feedback",href:"#"}]}],bottomLinks:o,copyrightText:t}},d={args:{sections:[{title:"Connect with us",links:[]}],socialLinks:i,bottomLinks:o,copyrightText:t}},p={args:{sections:r,socialLinks:i,bottomLinks:o,linkDivider:"•",copyrightText:t}},f={args:{sections:r,bottomLinks:o,acknowledgement:x,copyrightText:t}},h={args:{}},u={args:{sections:[{title:"Quick Links",links:[{label:"Online services",href:"#"},{label:"Apply for a license",href:"#"},{label:"Report an issue",href:"#"},{label:"Find a service",href:"#"}]}],bottomLinks:[{label:"Privacy policy",href:"#"},{label:"Accessibility",href:"#"}],copyrightText:t}},b={args:{sections:r,socialLinks:i,bottomLinks:o,acknowledgement:x,copyrightText:t},parameters:{viewport:{defaultViewport:"mobile1"}}},g={args:{logo:e.jsx("div",{style:{width:"176px",height:"63px",backgroundColor:"rgba(255, 255, 255, 0.1)",borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"11px",color:"rgba(255, 255, 255, 0.5)",textAlign:"center",padding:"8px"},children:"NT Government Logo"}),sections:r,socialLinks:i,bottomLinks:o,acknowledgement:x,copyrightText:t}},y={args:{sections:[{title:"Services",links:[{label:"Online applications",href:"#"},{label:"Licenses and permits",href:"#"},{label:"Business services",href:"#"}]},{title:"Resources",links:[{label:"Documentation",href:"#"},{label:"Guides",href:"#"},{label:"Support",href:"#"}]},{title:"About",links:[{label:"Our organization",href:"#"},{label:"Contact us",href:"#"},{label:"Careers",href:"#"}]}],bottomLinks:[{label:"Privacy",href:"#"},{label:"Terms",href:"#"},{label:"Accessibility",href:"#"},{label:"Contact",href:"#"}],copyrightText:"© 2025 NT Government"}},k={args:{sections:r,socialLinks:[{platform:"Follow us on Twitter",href:"#",icon:"fa-brands fa-x-twitter"},{platform:"Join our community",href:"#",icon:"fa-brands fa-github"}],bottomLinks:o,copyrightText:t}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    acknowledgement: acknowledgement,
    copyrightText: copyrightText
  }
}`,...a.parameters?.docs?.source},description:{story:"Default Footer - Complete footer with all sections, social media, and NT Government content",...a.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    bottomLinks: [{
      label: "Privacy",
      href: "#"
    }, {
      label: "Accessibility",
      href: "#"
    }, {
      label: "Contact",
      href: "#"
    }],
    copyrightText: "© 2025 Northern Territory Government"
  }
}`,...l.parameters?.docs?.source},description:{story:"Minimal Footer - Basic footer for smaller applications or limited space",...l.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <div style={{
      width: "176px",
      height: "63px",
      backgroundColor: "rgba(255, 255, 255, 0.2)",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "12px",
      color: "rgba(255, 255, 255, 0.6)"
    }}>\r
        [Organization Logo]\r
      </div>,
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    copyrightText: copyrightText
  }
}`,...c.parameters?.docs?.source},description:{story:"With Logo - Footer including organization branding/logo",...c.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      title: "Information and services",
      columns: 2,
      links: [{
        label: "Art, sport and leisure",
        href: "#"
      }, {
        label: "Boating, fishing and marine",
        href: "#"
      }, {
        label: "Business and industry",
        href: "#"
      }, {
        label: "Community support and care",
        href: "#"
      }, {
        label: "Driving and transport",
        href: "#"
      }]
    }, {
      title: "Find out more",
      links: [{
        label: "About government",
        href: "#"
      }, {
        label: "Public consultations",
        href: "#"
      }, {
        label: "NT public holidays",
        href: "#"
      }]
    }, {
      title: "Help and support",
      links: [{
        label: "Contact support",
        href: "#"
      }, {
        label: "FAQ",
        href: "#"
      }, {
        label: "Feedback",
        href: "#"
      }]
    }],
    bottomLinks: bottomLinks,
    copyrightText: copyrightText
  }
}`,...m.parameters?.docs?.source},description:{story:"Multiple Sections - Demonstrates how the Footer handles multiple content sections",...m.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      title: "Connect with us",
      links: []
    }],
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    copyrightText: copyrightText
  }
}`,...d.parameters?.docs?.source},description:{story:"Social Media Only - Demonstrates footer with social media links only",...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    linkDivider: "•",
    copyrightText: copyrightText
  }
}`,...p.parameters?.docs?.source},description:{story:"With Custom Divider - Shows how to customize the bottom links divider character",...p.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    sections: informationSections,
    bottomLinks: bottomLinks,
    acknowledgement: acknowledgement,
    copyrightText: copyrightText
  }
}`,...f.parameters?.docs?.source},description:{story:"Acknowledgement with Content - Displays full Aboriginal acknowledgement section",...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {}
}`,...h.parameters?.docs?.source},description:{story:"Empty State - Demonstrates minimal empty footer structure",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      title: "Quick Links",
      links: [{
        label: "Online services",
        href: "#"
      }, {
        label: "Apply for a license",
        href: "#"
      }, {
        label: "Report an issue",
        href: "#"
      }, {
        label: "Find a service",
        href: "#"
      }]
    }],
    bottomLinks: [{
      label: "Privacy policy",
      href: "#"
    }, {
      label: "Accessibility",
      href: "#"
    }],
    copyrightText: copyrightText
  }
}`,...u.parameters?.docs?.source},description:{story:"Single Section - Basic footer with one content section",...u.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    acknowledgement: acknowledgement,
    copyrightText: copyrightText
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...b.parameters?.docs?.source},description:{story:`Mobile Responsive - Shows how footer adapts to mobile screens\r
Try viewing this story in different viewport sizes`,...b.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    logo: <div style={{
      width: "176px",
      height: "63px",
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      borderRadius: "4px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "11px",
      color: "rgba(255, 255, 255, 0.5)",
      textAlign: "center",
      padding: "8px"
    }}>\r
        NT Government Logo\r
      </div>,
    sections: informationSections,
    socialLinks: socialLinks,
    bottomLinks: bottomLinks,
    acknowledgement: acknowledgement,
    copyrightText: copyrightText
  }
}`,...g.parameters?.docs?.source},description:{story:"Extended Footer - Shows footer with maximum content (all sections, logo, social media, acknowledgement)",...g.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    sections: [{
      title: "Services",
      links: [{
        label: "Online applications",
        href: "#"
      }, {
        label: "Licenses and permits",
        href: "#"
      }, {
        label: "Business services",
        href: "#"
      }]
    }, {
      title: "Resources",
      links: [{
        label: "Documentation",
        href: "#"
      }, {
        label: "Guides",
        href: "#"
      }, {
        label: "Support",
        href: "#"
      }]
    }, {
      title: "About",
      links: [{
        label: "Our organization",
        href: "#"
      }, {
        label: "Contact us",
        href: "#"
      }, {
        label: "Careers",
        href: "#"
      }]
    }],
    bottomLinks: [{
      label: "Privacy",
      href: "#"
    }, {
      label: "Terms",
      href: "#"
    }, {
      label: "Accessibility",
      href: "#"
    }, {
      label: "Contact",
      href: "#"
    }],
    copyrightText: "© 2025 NT Government"
  }
}`,...y.parameters?.docs?.source},description:{story:"Dense Layout - Compact footer with multiple sections and links",...y.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    sections: informationSections,
    socialLinks: [{
      platform: "Follow us on Twitter",
      href: "#",
      icon: "fa-brands fa-x-twitter"
    }, {
      platform: "Join our community",
      href: "#",
      icon: "fa-brands fa-github"
    }],
    bottomLinks: bottomLinks,
    copyrightText: copyrightText
  }
}`,...k.parameters?.docs?.source},description:{story:"Custom Social Links - Alternative way to structure social media",...k.parameters?.docs?.description}}};const O=["Default","Minimal","WithLogo","MultipleSections","SocialMediaOnly","CustomDivider","WithAcknowledgement","EmptyState","SingleSection","MobileResponsive","Extended","DenseLayout","CustomSocialLinks"];export{p as CustomDivider,k as CustomSocialLinks,a as Default,y as DenseLayout,h as EmptyState,g as Extended,l as Minimal,b as MobileResponsive,m as MultipleSections,u as SingleSection,d as SocialMediaOnly,f as WithAcknowledgement,c as WithLogo,O as __namedExportsOrder,E as default};
