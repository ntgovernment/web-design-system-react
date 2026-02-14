import{j as e}from"./iframe-CvkVNEqq.js";import{p as ae,I as ne}from"./placeholder-DHTUgcwX.js";import{T as oe}from"./Tag-DdlX5xy1.js";import{I as C}from"./Icon-4l8zrnoC.js";import"./preload-helper-DsXpFtqW.js";const L=({variant:w,title:v,description:T,showImage:A=!0,media:B,imageURL:k=ae,mediaAspectRatio:_="16:9",showMeta:W=!0,header:o,tagLabel:U="News:blue",dateLabel:x="17 Feb 2025",showTitleIcon:j=!1,icon:F="fa-light fa-circle-info",showButton:q=!0,footer:N,actionText:I="Find out more",actionIcon:M="fa-light fa-arrow-right",horizontal:V=!1,clickable:b=!0,href:y,className:D="",style:E,ariaLabel:z,...H})=>{const a=w==="minicard",n=w==="compact",P=a||n?!1:A,O=a||n?!1:W,K=a||n?!1:q,R=a||n?!0:j,G=["card",V&&"card--horizontal",b&&"card--clickable",a&&"card--minicard",n&&"card--compact",!a&&!n&&"card--full",w==="full"&&"text-bg-full",D].filter(Boolean).join(" "),J=b&&y?"a":"div",Q={...H,className:G,style:E,...b&&y&&{href:y,"aria-label":z||v},...b&&{tabIndex:0,role:y?"link":"button"}},Y=t=>t?.trim()?t.split(",").map((i,r)=>{const[ee,te="default"]=i.trim().split(":");return e.jsx(oe,{variant:te,label:ee},r)}):[],S=t=>t&&typeof t=="object"&&("tag"in t||"date"in t),$=()=>{if(!O)return null;if(o&&!S(o))return e.jsx("div",{className:"card__header-meta",children:o});if(o&&S(o)){const{tag:i,date:r}=o;return!i&&!r?null:e.jsxs("div",{className:"card__header-meta",children:[i&&e.jsx("div",{className:"card__header-meta-tags",children:i}),r&&e.jsx("div",{className:"card__header-meta-date",children:r})]})}const t=Y(U);return!t.length&&!x?null:e.jsxs("div",{className:"card__header-meta",children:[t.length>0&&e.jsx("div",{className:"card__header-meta-tags",children:t}),x&&e.jsx("div",{className:"card__header-meta-date",children:x})]})},X=()=>P?e.jsx("div",{className:`card__media card__media--${_}`,children:B||e.jsx(ne,{src:k,alt:"Card image",style:{width:"100%",height:"100%",objectFit:"cover",maxHeight:"200px"}})}):null,Z=()=>a||n?null:e.jsx("div",{className:"card-footer",children:e.jsxs("div",{className:"card__footer-actions",children:[N,!N&&K&&I?.trim()&&e.jsxs("span",{className:"btn btn-tertiary","aria-hidden":"true",children:[I,M&&e.jsx(C,{icon:M,className:"ms-2"})]})]})});return e.jsxs(J,{...Q,children:[X(),$(),e.jsxs("div",{className:"card-body",children:[n&&R&&e.jsx(C,{icon:F,className:"card__compact-icon"}),e.jsxs("div",{className:"card__body-content",children:[v&&e.jsx("div",{className:"card__body-title-wrapper",children:e.jsxs("h5",{className:"card-title",children:[R&&!n&&e.jsx(C,{icon:F,className:a?"card__minicard-icon":"me-2"}),v]})}),!a&&T&&e.jsx("div",{className:"card-text",children:T})]})]}),Z()]})};L.__docgenInfo={description:`Card Component - Flexible, accessible container for content with optional media, metadata, and actions

Three Layout Variants:
- Full: Complete card with all sections (default for rich content)
- Minicard: Minimal card best for lists and grids (just icon + title)
- Compact: Horizontal card for inline displays (icon + title + description)

Key Features:
- Keyboard accessible with Tab navigation and Enter/Space interaction
- Theme-specific focus outlines (NT.GOV.AU: orange, Central: green)
- Responsive design with mobile stacking
- Design token integration for consistent spacing and typography
- Flexible footer with button or custom content

Keyboard Accessibility:
- Full variant: Entire card is focusable when clickable=true
- Tab: Navigate and focus card
- Enter/Space: Activates card link when clickable=true
- Colored focus outline appears: 4px box-shadow with theme token
- Interior elements have pointer-events disabled to prevent event capture

Footer Behavior (Full Variant Only):
- Footer container ALWAYS renders for full variant to maintain consistent spacing
- Button visibility controlled independently via showButton prop:
  - showButton={true}: Shows action button with actionText
  - showButton={false}: Empty footer (footer container persists)
  - footer prop: Shows custom footer content (overrides button)
- Minicard/Compact: No footer section rendered
- Purpose: Prevents layout shift when toggling button visibility

Theme-Specific Styling Applied:
- Focus outlines: NT.GOV.AU (orange #EC8C58), Central (green #6AB06A)
- Typography: NTG uses Lato, Central uses Roboto
- Spacing uses design tokens: --sp-xs to --sp-xxxl
- Borders use --border-width-md
- Imported via Card-ntg.css and Card-central.css

Design Tokens Used:
- Spacing: --sp-xl, --sp-xxs, etc. (8px increments)
- Typography: --type-heading-h5, --type-body-base, etc.
- Colors: --clr-border-strong-01, theme-specific --shadow-focus-*

Example Usage:

// Full variant with button
<Card title="Learn More" description="..." actionText="Read" showButton={true} />

// Full variant without button (footer persists)
<Card title="Learn More" description="..." showButton={false} />

// Full variant with custom footer
<Card title="Learn More" description="..." footer={<CustomFooter />} />

// Minicard for list layouts
<Card variant="minicard" title="Item 1" description="...." />

// Compact horizontal layout
<Card variant="compact" title="Feature" description="..." />`,methods:[],displayName:"Card",props:{variant:{required:!1,tsType:{name:"union",raw:'"full" | "minicard" | "compact"',elements:[{name:"literal",value:'"full"'},{name:"literal",value:'"minicard"'},{name:"literal",value:'"compact"'}]},description:`Card layout variant - determines which sections render
- "full": Complete card with media, metadata, title, description, and footer sections
- "minicard": Minimal card with title and icon only (no description, media, or metadata)
- "compact": Horizontal compact layout with icon, title, and description`},title:{required:!0,tsType:{name:"string"},description:"Card title text (required for all variants)"},description:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Card description/body content (not shown in minicard variant)"},showImage:{required:!1,tsType:{name:"boolean"},description:"Show/hide image section (only for full variant; defaults to true)",defaultValue:{value:"true",computed:!1}},media:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Custom media content - can be Image component or any ReactNode (overrides imageURL)"},imageURL:{required:!1,tsType:{name:"string"},description:"Image URL for card media section (used if media prop not provided)",defaultValue:{value:"placeholderImage",computed:!0}},mediaAspectRatio:{required:!1,tsType:{name:"literal",value:'"16:9"'},description:'Aspect ratio for media container (default: "16:9")',defaultValue:{value:'"16:9"',computed:!1}},showMeta:{required:!1,tsType:{name:"boolean"},description:"Show/hide header metadata section with tags and date (only for full variant; defaults to true)",defaultValue:{value:"true",computed:!1}},header:{required:!1,tsType:{name:"union",raw:"CardHeaderMeta | React.ReactNode",elements:[{name:"CardHeaderMeta"},{name:"ReactReactNode",raw:"React.ReactNode"}]},description:"Header metadata - can be CardHeaderMeta object with tag/date or custom ReactNode"},tagLabel:{required:!1,tsType:{name:"string"},description:'Tag labels for header - comma-separated with optional :variant suffix (e.g., "News:blue, Event:success")',defaultValue:{value:'"News:blue"',computed:!1}},dateLabel:{required:!1,tsType:{name:"string"},description:"Date label for header metadata section",defaultValue:{value:'"17 Feb 2025"',computed:!1}},showTitleIcon:{required:!1,tsType:{name:"boolean"},description:"Show/hide title icon (only for full variant; defaults to false, true for minicard/compact)",defaultValue:{value:"false",computed:!1}},icon:{required:!1,tsType:{name:"string"},description:'Icon class string for title icon (FontAwesome format, e.g., "fa-light fa-circle-info")',defaultValue:{value:'"fa-light fa-circle-info"',computed:!1}},showButton:{required:!1,tsType:{name:"boolean"},description:`Show/hide the action button in card footer (only for full variant)

Behavior:
- true: Footer renders with "Find out more" button (if actionText provided)
- false: Footer container still renders with empty space (maintains card spacing)
- Minicard/compact: Always false (no footer section)

Key difference from showFooter: This controls BUTTON visibility, not footer visibility.
The footer container persists for consistent spacing, only button visibility toggles.

Default: true`,defaultValue:{value:"true",computed:!1}},footer:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:`Custom footer content - replaces the default action button
Can be any ReactNode (text, component, element)
If provided, overrides actionText and actionIcon`},actionText:{required:!1,tsType:{name:"string"},description:'Action button text label (default: "Find out more")',defaultValue:{value:'"Find out more"',computed:!1}},actionIcon:{required:!1,tsType:{name:"string"},description:'Action button icon (FontAwesome format, e.g., "fa-light fa-arrow-right")',defaultValue:{value:'"fa-light fa-arrow-right"',computed:!1}},horizontal:{required:!1,tsType:{name:"boolean"},description:"Enable horizontal layout with image on left side (responsive, stacks on mobile)",defaultValue:{value:"false",computed:!1}},clickable:{required:!1,tsType:{name:"boolean"},description:`Make entire card interactive/clickable
- true: Card becomes focusable with theme-specific focus outline (default)
- false: Card is not focusable
- When true, requires href prop for anchor tag rendering
- Provides better keyboard navigation and accessibility`,defaultValue:{value:"true",computed:!1}},href:{required:!1,tsType:{name:"string"},description:"URL for clickable card - renders as <a href> when clickable=true"},ariaLabel:{required:!1,tsType:{name:"string"},description:"ARIA label for accessibility (used when clickable=true)"},className:{defaultValue:{value:'""',computed:!1},required:!1}}};const de={title:"Components/Card",component:L,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{variant:{control:"select",options:["full","minicard"]},mediaAspectRatio:{control:"select",options:["16:9"]},showImage:{control:"boolean"},showMeta:{control:"boolean"},showButton:{control:"boolean"},showTitleIcon:{control:"boolean"},icon:{control:"text"},tagLabel:{control:"text",description:"Comma-separated tags with optional :variant suffix (e.g., 'News:blue, Event:green')"},dateLabel:{control:"text"},imageURL:{control:"text"},actionText:{control:"text"},actionIcon:{control:"text"}}},s={args:{variant:"full",title:"Supporting survivors on National Day of Remembrance",description:"Join in and honour the resilience of survivors and the lives lost.",className:"",style:{maxWidth:"353px"}}},c={args:{title:"Important Service Update",description:"Some services will have reduced hours during the holiday period.",showTitleIcon:!0,icon:"fa-light fa-info-circle",tagLabel:"Alert:warning",dateLabel:"1 Feb 2025",style:{maxWidth:"353px"}}},l={args:{title:"Community Engagement Session",description:"Join us for a community discussion on local services and programs.",showImage:!1,tagLabel:"Event:green",dateLabel:"25 Mar 2025",style:{maxWidth:"353px"}}},d={args:{title:"Environmental Sustainability Program",description:"Learn about our new programs to protect natural resources and promote sustainable practices.",showMeta:!1,style:{maxWidth:"353px"}}},u={args:{title:"Business Registration Services",description:"Register your business entity online with our streamlined application process.",showButton:!1,href:"#",tagLabel:"Service:blue",dateLabel:"15 Feb 2025",style:{maxWidth:"353px"}}},p={args:{title:"Quick Update",description:"This is a minimal card with just the essential content.",showImage:!1,showMeta:!1,showButton:!1,href:"#",style:{maxWidth:"353px"}}},m={args:{title:"Multi-Category Resource",description:"This resource covers multiple topics and is tagged accordingly.",tagLabel:"News:blue, Update:green, Featured:default",dateLabel:"20 Feb 2025",style:{maxWidth:"353px"}}},f={args:{title:"Download Important Documents",description:"Access forms, guidelines, and resources for your application.",actionText:"Download Now",actionIcon:"fa-solid fa-download",tagLabel:"Resources:blue",dateLabel:"10 Feb 2025",style:{maxWidth:"353px"}}},h={args:{variant:"minicard",title:"Card title",icon:"fa-solid fa-circle-info",description:"This will not be shown in minicard variant",style:{maxWidth:"353px"}}},g={args:{variant:"compact",title:"Customer Service",description:"1800 000 000 or ext 12345",icon:"fa-light fa-phone",style:{maxWidth:"400px"}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "full",
    title: "Supporting survivors on National Day of Remembrance",
    description: "Join in and honour the resilience of survivors and the lives lost.",
    className: "",
    style: {
      maxWidth: "353px"
    }
  }
}`,...s.parameters?.docs?.source},description:{story:`Full Card Variant - Complete card with all sections

Sections displayed:
- Media: 16:9 aspect ratio image
- Header metadata: Tags and date labels
- Title: Main heading with optional icon
- Description: Body content
- Footer: "Find out more" action button

Features:
- All interactive sections (clickable when href provided)
- Theme-specific focus outline (keyboard accessible)
- Design tokens for consistent spacing and typography
- Button uses Button.css classes on span element (not Button component)

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
}`,...c.parameters?.docs?.source},description:{story:`Full Variant with Title Icon

Icon displayed to the left of the title text.
Useful for adding visual hierarchy and categorization at a glance.

Features:
- Icon from FontAwesome 6 library
- Automatically positioned left of title
- Respects design tokens for spacing (ms-2 margin)
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
}`,...l.parameters?.docs?.source},description:{story:`Full Variant Without Image Section

Demonstrates card with image hidden (showImage={false}).
All other sections render normally:
- Header metadata (tags and date) still visible
- Title and description displayed
- Footer with action button

Use Case: When media is not available or content-focused display is preferred`,...l.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Environmental Sustainability Program",
    description: "Learn about our new programs to protect natural resources and promote sustainable practices.",
    showMeta: false,
    style: {
      maxWidth: "353px"
    }
  }
}`,...d.parameters?.docs?.source},description:{story:`Full Variant Without Metadata Section

Demonstrates card with header metadata hidden (showMeta={false}).
Removes tags and date display but keeps:
- Media section
- Title and description
- Footer with action button

Use Case: Simple content cards without need for categorization or dating`,...d.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source},description:{story:`Full Variant Without Action Button (showButton={false})

Key Points:
- **Footer container ALWAYS renders** for full variant to maintain consistent spacing
- **Only the button is hidden**, footer element persists with padding
- **Prevents layout shift** when toggling button visibility dynamically
- **Footer spacing remains consistent** across all states

Behavior:
- showButton={false}: Footer renders but button inside is hidden
- showButton={true}: Footer renders with action button
- Custom footer: Pass footer prop to override entirely

Implementation:
The footer container (.card-footer) with padding always renders for full variant.
Only the button span (.btn .btn-tertiary) conditionally renders inside.

Use Case:
- Links/cards that don't need action button
- Layouts where consistent card height is required
- Progressive disclosure (button shown/hidden based on state)`,...u.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source},description:{story:`Minimal Full Card Configuration

Demonstrates compact card with most sections hidden:
- showImage={false}: No media section
- showMeta={false}: No tags or date
- showButton={false}: Footer container renders but button hidden

Features:
- Clean, focused content display
- Clickable for navigation (href provided)
- Consistent footer spacing maintained
- All design tokens and theming still applied

Use Case: Content cards where metadata and media not relevant`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    title: "Multi-Category Resource",
    description: "This resource covers multiple topics and is tagged accordingly.",
    tagLabel: "News:blue, Update:green, Featured:default",
    dateLabel: "20 Feb 2025",
    style: {
      maxWidth: "353px"
    }
  }
}`,...m.parameters?.docs?.source},description:{story:`Card with Multiple Metadata Tags

Demonstrates tag rendering with multiple values:
- Tags comma-separated: "News:blue, Update:green, Featured:default"
- Each tag rendered with color variant
- Scrolls horizontally if space constrained

Tag Syntax:
- "News:blue" -> tag text "News" with blue color variant
- "Update:green" -> tag text "Update" with green color variant
- "Featured:default" -> tag text "Featured" with default color (no color variant)

Use Case: Content with multiple categories or labels`,...m.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source},description:{story:`Card with Custom Action Button

Demonstrates how to customize footer button:
- actionText="Download Now": Custom button label
- actionIcon="fa-light fa-download": FontAwesome icon
- Icon displays to the right of text (ms-2 margin)

Features:
- Any FontAwesome 6 icon can be used
- Button styling from Button.css (btn, btn-tertiary classes)
- Theme-specific colors (NT.GOV.AU, Central themes)
- Keyboard accessible (tab navigation)

Use Case: Cards with specific actions (download, register, apply, etc.)`,...f.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "minicard",
    title: "Card title",
    icon: "fa-solid fa-circle-info",
    description: "This will not be shown in minicard variant",
    style: {
      maxWidth: "353px"
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Minicard Variant - Minimal Compact Card

Renders only:
- Icon (mandatory for minicard)
- Title text

Automatically hidden (cannot be shown in minicard):
- Media/image section
- Header metadata (tags, date)
- Description/body content
- Footer and button

Features:
- Compact size suitable for grids and dashboards
- Icon always displays (showTitleIcon forced to true)
- Clickable for navigation when href provided
- Same focus states and keyboard navigation as full variant

Use Cases:
- Dashboard widgets
- Grid layouts (categories, services)
- Quick navigation cards
- List item cards`,...h.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: "compact",
    title: "Customer Service",
    description: "1800 000 000 or ext 12345",
    icon: "fa-light fa-phone",
    style: {
      maxWidth: "400px"
    }
  }
}`,...g.parameters?.docs?.source},description:{story:`Compact Variant - Horizontal Layout Card

Renders in single horizontal row:
- Icon on left side
- Title text
- Description below title (inline flow)

Automatically hidden (cannot be shown in compact):
- Media/image section
- Header metadata (tags, date)
- Footer and button

Features:
- Horizontal alignment maximizes space efficiency
- Icon always displays (showTitleIcon forced to true)
- Multi-line description supported
- Same keyboard accessibility as full variant
- Theme-specific focus outlines

Use Cases:
- Contact information cards
- Quick info blocks (opening hours, phone, address)
- List item layouts
- Inline content cards
- Service quick reference cards`,...g.parameters?.docs?.description}}};const ue=["Full","WithTitleIcon","NoImage","NoMetadata","NoButton","Minimal","MultipleTags","CustomAction","Minicard","Compact"];export{g as Compact,f as CustomAction,s as Full,h as Minicard,p as Minimal,m as MultipleTags,u as NoButton,l as NoImage,d as NoMetadata,c as WithTitleIcon,ue as __namedExportsOrder,de as default};
