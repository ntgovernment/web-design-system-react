import{j as e}from"./iframe-CJcOhIH1.js";import{I as me}from"./Image-B6wm_Gq7.js";import{T as he}from"./Tag-NTsyEf73.js";import{I as R}from"./Icon-CZK7gEro.js";import{p as fe}from"./placeholder-x3B75b25.js";import"./preload-helper-Dc5Yqcnt.js";const E=({variant:L,title:k,description:B,showImage:z=!0,media:H,imageURL:G=fe,mediaAspectRatio:O="16:9",showMeta:P=!0,header:r,tagLabel:K="News:blue",dateLabel:W="17 Feb 2025",showTitleIcon:J=!1,icon:U="fa-light fa-circle-info",showButton:Q=!0,footer:_,actionText:D="Find out more",actionIcon:V="fa-light fa-arrow-right",horizontal:Y=!1,clickable:y=!0,href:w,className:$="",style:X,ariaLabel:Z,...ee})=>{const a=L==="minicard",n=L==="compact",te=a||n?!1:z,ae=a||n?!1:P,ne=a||n?!1:Q,j=a||n?!0:J,re=["card",Y&&"card--horizontal",y&&"card--clickable",a&&"card--minicard",n&&"card--compact",!a&&!n&&"card--full",L==="full"&&"text-bg-full",$].filter(Boolean).join(" "),oe=y&&w?"a":"div",ie={...ee,className:re,style:X,...y&&w&&{href:w,"aria-label":Z||k},...y&&{tabIndex:0,role:w?"link":"button"}},se=t=>t?.trim()?t.split(",").map((o,i)=>{const[pe,ue="default"]=o.trim().split(":");return e.jsx(he,{variant:ue,label:pe},i)}):[],q=t=>t&&typeof t=="object"&&("tag"in t||"date"in t),ce=()=>{if(!ae)return null;if(r&&!q(r))return e.jsx("div",{className:"card__header-meta",children:r});if(r&&q(r)){const{tag:o,date:i}=r;return!o&&!i?null:e.jsxs("div",{className:"card__header-meta",children:[o&&e.jsx("div",{className:"card__header-meta-tags",children:o}),i&&e.jsx("div",{className:"card__header-meta-date",children:i})]})}const t=se(K);return!t.length&&!W?null:e.jsxs("div",{className:"card__header-meta",children:[t.length>0&&e.jsx("div",{className:"card__header-meta-tags",children:t}),W&&e.jsx("div",{className:"card__header-meta-date",children:W})]})},le=()=>te?e.jsx("div",{className:`card__media card__media--${O}`,children:H||e.jsx(me,{src:G,alt:"Card image",style:{width:"100%",height:"100%",objectFit:"cover",maxHeight:"200px"}})}):null,de=()=>a||n?null:e.jsx("div",{className:"card-footer",children:e.jsxs("div",{className:"card__footer-actions",children:[_,!_&&ne&&D?.trim()&&e.jsxs("span",{className:"btn btn-tertiary","aria-hidden":"true",children:[D,V&&e.jsx(R,{icon:V,className:"ms-2"})]})]})});return e.jsxs(oe,{...ie,children:[le(),ce(),e.jsxs("div",{className:"card-body",children:[n&&j&&e.jsx(R,{icon:U,className:"card__compact-icon"}),e.jsxs("div",{className:"card__body-content",children:[k&&e.jsx("div",{className:"card__body-title-wrapper",children:e.jsxs("h5",{className:"card-title",children:[j&&!n&&e.jsx(R,{icon:U,className:a?"card__minicard-icon":"me-2"}),k]})}),!a&&B&&e.jsx("div",{className:"card-text",children:B})]})]}),de()]})};E.__docgenInfo={description:`Card Component - Flexible, accessible container for content with optional media, metadata, and actions\r
\r
Three Layout Variants:\r
- Full: Complete card with all sections (default for rich content)\r
- Minicard: Minimal card best for lists and grids (just icon + title)\r
- Compact: Horizontal card for inline displays (icon + title + description)\r
\r
Key Features:\r
- Keyboard accessible with Tab navigation and Enter/Space interaction\r
- Theme-specific focus outlines (NT.GOV.AU: orange, Central: green)\r
- Responsive design with mobile stacking\r
- Design token integration for consistent spacing and typography\r
- Flexible footer with button or custom content\r
\r
Keyboard Accessibility:\r
- Full variant: Entire card is focusable when clickable=true\r
- Tab: Navigate and focus card\r
- Enter/Space: Activates card link when clickable=true\r
- Colored focus outline appears: 4px box-shadow with theme token\r
- Interior elements have pointer-events disabled to prevent event capture\r
\r
Footer Behavior (Full Variant Only):\r
- Footer container ALWAYS renders for full variant to maintain consistent spacing\r
- Button visibility controlled independently via showButton prop:\r
  - showButton={true}: Shows action button with actionText\r
  - showButton={false}: Empty footer (footer container persists)\r
  - footer prop: Shows custom footer content (overrides button)\r
- Minicard/Compact: No footer section rendered\r
- Purpose: Prevents layout shift when toggling button visibility\r
\r
Theme-Specific Styling Applied:\r
- Focus outlines: NT.GOV.AU (orange #EC8C58), Central (green #6AB06A)\r
- Typography: NTG uses Lato, Central uses Roboto\r
- Spacing uses design tokens: --sp-xs to --sp-xxxl\r
- Borders use --border-width-md\r
- Imported via Card-ntg.css and Card-central.css\r
\r
Design Tokens Used:\r
- Spacing: --sp-xl, --sp-xxs, etc. (8px increments)\r
- Typography: --type-heading-h5, --type-body-base, etc.\r
- Colors: --clr-border-strong-01, theme-specific --shadow-focus-*\r
\r
Example Usage:\r
\r
// Full variant with button\r
<Card title="Learn More" description="..." actionText="Read" showButton={true} />\r
\r
// Full variant without button (footer persists)\r
<Card title="Learn More" description="..." showButton={false} />\r
\r
// Full variant with custom footer\r
<Card title="Learn More" description="..." footer={<CustomFooter />} />\r
\r
// Minicard for list layouts\r
<Card variant="minicard" title="Item 1" description="...." />\r
\r
// Compact horizontal layout\r
<Card variant="compact" title="Feature" description="..." />`,methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"full" | "minicard" | "compact"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"minicard"'},{name:"literal",value:'"compact"'}]},description:`Card layout variant - determines which sections render\r
- "full": Complete card with media, metadata, title, description, and footer sections\r
- "minicard": Minimal card with title and icon only (no description, media, or metadata)\r
- "compact": Horizontal compact layout with icon, title, and description`},title:{required:!0,tsType:{name:"string"},description:"Card title text (required for all variants)"},description:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card description/body content (not shown in minicard variant)"},showImage:{required:!1,tsType:{name:"boolean"},description:"Show/hide image section (only for full variant; defaults to true)",defaultValue:{value:"true",computed:!1}},media:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom media content - can be Image component or any ReactNode (overrides imageURL)"},imageURL:{required:!1,tsType:{name:"string"},description:"Image URL for card media section (used if media prop not provided)",defaultValue:{value:"placeholderImage",computed:!0}},mediaAspectRatio:{required:!1,tsType:{name:"literal",value:'"16:9"'},description:'Aspect ratio for media container (default: "16:9")',defaultValue:{value:'"16:9"',computed:!1}},showMeta:{required:!1,tsType:{name:"boolean"},description:"Show/hide header metadata section with tags and date (only for full variant; defaults to true)",defaultValue:{value:"true",computed:!1}},header:{required:!1,tsType:{name:"union",raw:"CardHeaderMeta | React.ReactNode",elements:[{name:"CardHeaderMeta"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Header metadata - can be CardHeaderMeta object with tag/date or custom ReactNode"},tagLabel:{required:!1,tsType:{name:"string"},description:'Tag labels for header - comma-separated with optional :variant suffix (e.g., "News:blue, Event:success")',defaultValue:{value:'"News:blue"',computed:!1}},dateLabel:{required:!1,tsType:{name:"string"},description:"Date label for header metadata section",defaultValue:{value:'"17 Feb 2025"',computed:!1}},showTitleIcon:{required:!1,tsType:{name:"boolean"},description:"Show/hide title icon (only for full variant; defaults to false, true for minicard/compact)",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:'Icon class string for title icon (FontAwesome format, e.g., "fa-light fa-circle-info")',defaultValue:{value:'"fa-light fa-circle-info"',computed:!1}},showButton:{required:!1,tsType:{name:"boolean"},description:`Show/hide the action button in card footer (only for full variant)\r
\r
Behavior:\r
- true: Footer renders with "Find out more" button (if actionText provided)\r
- false: Footer container still renders with empty space (maintains card spacing)\r
- Minicard/compact: Always false (no footer section)\r
\r
Key difference from showFooter: This controls BUTTON visibility, not footer visibility.\r
The footer container persists for consistent spacing, only button visibility toggles.\r
\r
Default: true`,defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom footer content - replaces the default action button\r
Can be any ReactNode (text, component, element)\r
If provided, overrides actionText and actionIcon`},actionText:{required:!1,tsType:{name:"string"},description:'Action button text label (default: "Find out more")',defaultValue:{value:'"Find out more"',computed:!1}},actionIcon:{required:!1,tsType:{name:"string"},description:'Action button icon (FontAwesome format, e.g., "fa-light fa-arrow-right")',defaultValue:{value:'"fa-light fa-arrow-right"',computed:!1}},horizontal:{required:!1,tsType:{name:"boolean"},description:"Enable horizontal layout with image on left side (responsive, stacks on mobile)",defaultValue:{value:"false",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:`Make entire card interactive/clickable\r
- true: Card becomes focusable with theme-specific focus outline (default)\r
- false: Card is not focusable\r
- When true, requires href prop for anchor tag rendering\r
- Provides better keyboard navigation and accessibility`,defaultValue:{value:"true",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"URL for clickable card - renders as <a href> when clickable=true"},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility (used when clickable=true)"},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const Te={title:"Components/Card",component:E,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["full","minicard","compact"]},mediaAspectRatio:{control:"select",options:["16:9"]},showImage:{control:"boolean"},showMeta:{control:"boolean"},showButton:{control:"boolean"},showTitleIcon:{control:"boolean"},icon:{control:"text"},tagLabel:{control:"text",description:"Comma-separated tags with optional :variant suffix (e.g., 'News:blue, Event:green')"},dateLabel:{control:"text"},imageURL:{control:"text"},actionText:{control:"text"},actionIcon:{control:"text"}}},s={args:{variant:"full",title:"Supporting survivors on National Day of Remembrance",description:"Join in and honour the resilience of survivors and the lives lost.",className:"",style:{maxWidth:"353px"}}},c={args:{title:"Important Service Update",description:"Some services will have reduced hours during the holiday period.",showTitleIcon:!0,icon:"fa-light fa-info-circle",tagLabel:"Alert:warning",dateLabel:"1 Feb 2025",style:{maxWidth:"353px"}}},l={args:{title:"Community Engagement Session",description:"Join us for a community discussion on local services and programs.",showImage:!1,tagLabel:"Event:green",dateLabel:"25 Mar 2025",style:{maxWidth:"353px"}}},d={args:{title:"Environmental Sustainability Program",description:"Learn about our new programs to protect natural resources and promote sustainable practices.",showMeta:!1,style:{maxWidth:"353px"}}},p={args:{title:"Business Registration Services",description:"Register your business entity online with our streamlined application process.",showButton:!1,href:"#",tagLabel:"Service:blue",dateLabel:"15 Feb 2025",style:{maxWidth:"353px"}}},u={args:{title:"Quick Update",description:"This is a minimal card with just the essential content.",showImage:!1,showMeta:!1,showButton:!1,href:"#",style:{maxWidth:"353px"}}},m={args:{title:"Multi-Category Resource",description:"This resource covers multiple topics and is tagged accordingly.",tagLabel:"News:blue, Update:green, Featured:default",dateLabel:"20 Feb 2025",style:{maxWidth:"353px"}}},h={args:{title:"Download Important Documents",description:"Access forms, guidelines, and resources for your application.",actionText:"Download Now",actionIcon:"fa-solid fa-download",tagLabel:"Resources:blue",dateLabel:"10 Feb 2025",style:{maxWidth:"353px"}}},f={args:{variant:"minicard",title:"Card title",icon:"fa-solid fa-circle-info",description:"This will not be shown in minicard variant",style:{maxWidth:"353px"}}},g={args:{variant:"compact",title:"Customer Service",description:"1800 000 000 or ext 12345",icon:"fa-light fa-phone",style:{maxWidth:"400px"}}},b={args:{variant:"minicard",title:"Card services",icon:"fa-light fa-circle-info",description:"Description is hidden in minicard.",style:{maxWidth:"320px"}}},v={args:{title:"Service notification",description:"Service availability has been updated for regional areas.",showTitleIcon:!0,icon:"fa-light fa-bell",showImage:!1,showMeta:!1,showButton:!1,style:{maxWidth:"353px"}}},x={args:{variant:"compact",title:"Contact support",description:"Call 1800 123 456 for assistance.",icon:"fa-light fa-phone",style:{maxWidth:"400px"}}},T={args:{title:"Service update",description:"Find the latest changes to online services.",showImage:!1,showMeta:!1,showButton:!1,style:{maxWidth:"353px"}}},C={args:{title:"Apply for a permit",description:"Start your online application and track progress.",showImage:!1,showMeta:!1,actionText:"Apply now",actionIcon:"fa-light fa-arrow-right",style:{maxWidth:"353px"}}},I={args:{title:"Community grant round",description:"Applications are open for regional community grants.",showImage:!1,tagLabel:"Grants:green",dateLabel:"Open until 30 Apr 2025",actionText:"View details",actionIcon:"fa-light fa-arrow-right",style:{maxWidth:"353px"}}},F={args:{title:"Visit the waterfront",description:"Discover outdoor dining and events along the harbour.",showMeta:!1,showButton:!1,style:{maxWidth:"353px"}}},N={args:{title:"Book a tour",description:"Reserve your place for guided local tours.",showMeta:!1,actionText:"Book now",actionIcon:"fa-light fa-arrow-right",style:{maxWidth:"353px"}}},S={args:{title:"Cultural festival",description:"Celebrate music, art, and community this weekend.",tagLabel:"Event:blue",dateLabel:"12 May 2025",actionText:"Get tickets",actionIcon:"fa-light fa-arrow-right",style:{maxWidth:"353px"}}},M={args:{title:"NTG Central link card",description:"Use a link-style card for quick navigation.",showImage:!1,showMeta:!1,showButton:!1,href:"#",style:{maxWidth:"353px"}},parameters:{docs:{description:{story:"Link card styling is available in the NTG Central theme only."}}}},A={args:{variant:"compact",title:"Payment due soon",description:"Your renewal payment is due in 14 days.",icon:"fa-light fa-circle-info",style:{maxWidth:"400px"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "full",
    title: "Supporting survivors on National Day of Remembrance",
    description: "Join in and honour the resilience of survivors and the lives lost.",
    className: "",
    style: {
      maxWidth: "353px"
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Full Card Variant - Complete card with all sections\r

Sections displayed:\r
- Media: 16:9 aspect ratio image\r
- Header metadata: Tags and date labels\r
- Title: Main heading with optional icon\r
- Description: Body content\r
- Footer: "Find out more" action button\r

Features:\r
- All interactive sections (clickable when href provided)\r
- Theme-specific focus outline (keyboard accessible)\r
- Design tokens for consistent spacing and typography\r
- Button uses Button.css classes on span element (not Button component)\r

Use Case: Rich content display for news, resources, events, services`,...s.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Important Service Update",
    description: "Some services will have reduced hours during the holiday period.",
    showTitleIcon: true,
    icon: "fa-light fa-info-circle",
    tagLabel: "Alert:warning",
    dateLabel: "1 Feb 2025",
    style: {
      maxWidth: "353px"
    }
  }
}`,...c.parameters?.docs?.source},description:{story:`Full Variant with Title Icon\r

Icon displayed to the left of the title text.\r
Useful for adding visual hierarchy and categorization at a glance.\r

Features:\r
- Icon from FontAwesome 6 library\r
- Automatically positioned left of title\r
- Respects design tokens for spacing (ms-2 margin)\r
- Works with any FontAwesome icon class string`,...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Community Engagement Session",
    description: "Join us for a community discussion on local services and programs.",
    showImage: false,
    tagLabel: "Event:green",
    dateLabel: "25 Mar 2025",
    style: {
      maxWidth: "353px"
    }
  }
}`,...l.parameters?.docs?.source},description:{story:`Full Variant Without Image Section\r

Demonstrates card with image hidden (showImage={false}).\r
All other sections render normally:\r
- Header metadata (tags and date) still visible\r
- Title and description displayed\r
- Footer with action button\r

Use Case: When media is not available or content-focused display is preferred`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Environmental Sustainability Program",
    description: "Learn about our new programs to protect natural resources and promote sustainable practices.",
    showMeta: false,
    style: {
      maxWidth: "353px"
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Full Variant Without Metadata Section\r

Demonstrates card with header metadata hidden (showMeta={false}).\r
Removes tags and date display but keeps:\r
- Media section\r
- Title and description\r
- Footer with action button\r

Use Case: Simple content cards without need for categorization or dating`,...d.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Business Registration Services",
    description: "Register your business entity online with our streamlined application process.",
    showButton: false,
    href: "#",
    tagLabel: "Service:blue",
    dateLabel: "15 Feb 2025",
    style: {
      maxWidth: "353px"
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Full Variant Without Action Button (showButton={false})\r

Key Points:\r
- **Footer container ALWAYS renders** for full variant to maintain consistent spacing\r
- **Only the button is hidden**, footer element persists with padding\r
- **Prevents layout shift** when toggling button visibility dynamically\r
- **Footer spacing remains consistent** across all states\r

Behavior:\r
- showButton={false}: Footer renders but button inside is hidden\r
- showButton={true}: Footer renders with action button\r
- Custom footer: Pass footer prop to override entirely\r

Implementation:\r
The footer container (.card-footer) with padding always renders for full variant.\r
Only the button span (.btn .btn-tertiary) conditionally renders inside.\r

Use Case:\r
- Links/cards that don't need action button\r
- Layouts where consistent card height is required\r
- Progressive disclosure (button shown/hidden based on state)`,...p.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Quick Update",
    description: "This is a minimal card with just the essential content.",
    showImage: false,
    showMeta: false,
    showButton: false,
    href: "#",
    style: {
      maxWidth: "353px"
    }
  }
}`,...u.parameters?.docs?.source},description:{story:`Minimal Full Card Configuration\r

Demonstrates compact card with most sections hidden:\r
- showImage={false}: No media section\r
- showMeta={false}: No tags or date\r
- showButton={false}: Footer container renders but button hidden\r

Features:\r
- Clean, focused content display\r
- Clickable for navigation (href provided)\r
- Consistent footer spacing maintained\r
- All design tokens and theming still applied\r

Use Case: Content cards where metadata and media not relevant`,...u.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Multi-Category Resource",
    description: "This resource covers multiple topics and is tagged accordingly.",
    tagLabel: "News:blue, Update:green, Featured:default",
    dateLabel: "20 Feb 2025",
    style: {
      maxWidth: "353px"
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Card with Multiple Metadata Tags\r

Demonstrates tag rendering with multiple values:\r
- Tags comma-separated: "News:blue, Update:green, Featured:default"\r
- Each tag rendered with color variant\r
- Scrolls horizontally if space constrained\r

Tag Syntax:\r
- "News:blue" -> tag text "News" with blue color variant\r
- "Update:green" -> tag text "Update" with green color variant\r
- "Featured:default" -> tag text "Featured" with default color (no color variant)\r

Use Case: Content with multiple categories or labels`,...m.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Download Important Documents",
    description: "Access forms, guidelines, and resources for your application.",
    actionText: "Download Now",
    actionIcon: "fa-solid fa-download",
    tagLabel: "Resources:blue",
    dateLabel: "10 Feb 2025",
    style: {
      maxWidth: "353px"
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Card with Custom Action Button\r

Demonstrates how to customize footer button:\r
- actionText="Download Now": Custom button label\r
- actionIcon="fa-light fa-download": FontAwesome icon\r
- Icon displays to the right of text (ms-2 margin)\r

Features:\r
- Any FontAwesome 6 icon can be used\r
- Button styling from Button.css (btn, btn-tertiary classes)\r
- Theme-specific colors (NT.GOV.AU, Central themes)\r
- Keyboard accessible (tab navigation)\r

Use Case: Cards with specific actions (download, register, apply, etc.)`,...h.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "minicard",
    title: "Card title",
    icon: "fa-solid fa-circle-info",
    description: "This will not be shown in minicard variant",
    style: {
      maxWidth: "353px"
    }
  }
}`,...f.parameters?.docs?.source},description:{story:`Minicard Variant - Minimal Compact Card\r

Renders only:\r
- Icon (mandatory for minicard)\r
- Title text\r

Automatically hidden (cannot be shown in minicard):\r
- Media/image section\r
- Header metadata (tags, date)\r
- Description/body content\r
- Footer and button\r

Features:\r
- Compact size suitable for grids and dashboards\r
- Icon always displays (showTitleIcon forced to true)\r
- Clickable for navigation when href provided\r
- Same focus states and keyboard navigation as full variant\r

Use Cases:\r
- Dashboard widgets\r
- Grid layouts (categories, services)\r
- Quick navigation cards\r
- List item cards`,...f.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "compact",
    title: "Customer Service",
    description: "1800 000 000 or ext 12345",
    icon: "fa-light fa-phone",
    style: {
      maxWidth: "400px"
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Compact Variant - Horizontal Layout Card\r

Renders in single horizontal row:\r
- Icon on left side\r
- Title text\r
- Description below title (inline flow)\r

Automatically hidden (cannot be shown in compact):\r
- Media/image section\r
- Header metadata (tags, date)\r
- Footer and button\r

Features:\r
- Horizontal alignment maximizes space efficiency\r
- Icon always displays (showTitleIcon forced to true)\r
- Multi-line description supported\r
- Same keyboard accessibility as full variant\r
- Theme-specific focus outlines\r

Use Cases:\r
- Contact information cards\r
- Quick info blocks (opening hours, phone, address)\r
- List item layouts\r
- Inline content cards\r
- Service quick reference cards`,...g.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "minicard",
    title: "Card services",
    icon: "fa-light fa-circle-info",
    description: "Description is hidden in minicard.",
    style: {
      maxWidth: "320px"
    }
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Service notification",
    description: "Service availability has been updated for regional areas.",
    showTitleIcon: true,
    icon: "fa-light fa-bell",
    showImage: false,
    showMeta: false,
    showButton: false,
    style: {
      maxWidth: "353px"
    }
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "compact",
    title: "Contact support",
    description: "Call 1800 123 456 for assistance.",
    icon: "fa-light fa-phone",
    style: {
      maxWidth: "400px"
    }
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Service update",
    description: "Find the latest changes to online services.",
    showImage: false,
    showMeta: false,
    showButton: false,
    style: {
      maxWidth: "353px"
    }
  }
}`,...T.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Apply for a permit",
    description: "Start your online application and track progress.",
    showImage: false,
    showMeta: false,
    actionText: "Apply now",
    actionIcon: "fa-light fa-arrow-right",
    style: {
      maxWidth: "353px"
    }
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Community grant round",
    description: "Applications are open for regional community grants.",
    showImage: false,
    tagLabel: "Grants:green",
    dateLabel: "Open until 30 Apr 2025",
    actionText: "View details",
    actionIcon: "fa-light fa-arrow-right",
    style: {
      maxWidth: "353px"
    }
  }
}`,...I.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Visit the waterfront",
    description: "Discover outdoor dining and events along the harbour.",
    showMeta: false,
    showButton: false,
    style: {
      maxWidth: "353px"
    }
  }
}`,...F.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Book a tour",
    description: "Reserve your place for guided local tours.",
    showMeta: false,
    actionText: "Book now",
    actionIcon: "fa-light fa-arrow-right",
    style: {
      maxWidth: "353px"
    }
  }
}`,...N.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Cultural festival",
    description: "Celebrate music, art, and community this weekend.",
    tagLabel: "Event:blue",
    dateLabel: "12 May 2025",
    actionText: "Get tickets",
    actionIcon: "fa-light fa-arrow-right",
    style: {
      maxWidth: "353px"
    }
  }
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    title: "NTG Central link card",
    description: "Use a link-style card for quick navigation.",
    showImage: false,
    showMeta: false,
    showButton: false,
    href: "#",
    style: {
      maxWidth: "353px"
    }
  },
  parameters: {
    docs: {
      description: {
        story: "Link card styling is available in the NTG Central theme only."
      }
    }
  }
}`,...M.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "compact",
    title: "Payment due soon",
    description: "Your renewal payment is due in 14 days.",
    icon: "fa-light fa-circle-info",
    style: {
      maxWidth: "400px"
    }
  }
}`,...A.parameters?.docs?.source}}};const Ce=["Full","WithTitleIcon","NoImage","NoMetadata","NoButton","Minimal","MultipleTags","CustomAction","Minicard","Compact","MinicardTopIconTitle","IconTitleText","LeftIconTitleText","TitleText","TitleTextAction","TitleDateTagTextAction","ImageTitleText","ImageTitleTextAction","ImageTitleDateTagTextAction","LinkCardCentralOnly","IconInfoCompact"];export{g as Compact,h as CustomAction,s as Full,A as IconInfoCompact,v as IconTitleText,S as ImageTitleDateTagTextAction,F as ImageTitleText,N as ImageTitleTextAction,x as LeftIconTitleText,M as LinkCardCentralOnly,f as Minicard,b as MinicardTopIconTitle,u as Minimal,m as MultipleTags,p as NoButton,l as NoImage,d as NoMetadata,I as TitleDateTagTextAction,T as TitleText,C as TitleTextAction,c as WithTitleIcon,Ce as __namedExportsOrder,Te as default};
