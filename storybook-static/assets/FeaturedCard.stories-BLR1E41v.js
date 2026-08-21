import{j as e}from"./iframe-CJcOhIH1.js";import{I as j}from"./Image-B6wm_Gq7.js";/* empty css               */import"./preload-helper-Dc5Yqcnt.js";function C(a,t,n){return e.jsxs("div",{className:"featured-card__content",children:[e.jsx("div",{className:"featured-card__body bct-wysiwyg",children:a}),t&&e.jsxs("div",{className:"featured-card__actions",children:[e.jsx("a",{href:t.href,className:"btn btn-primary",...t.external?{target:"_blank",rel:"noopener noreferrer"}:{},children:t.text}),n&&e.jsx("a",{href:n.href,className:"btn btn-secondary",...n.external?{target:"_blank",rel:"noopener noreferrer"}:{},children:n.text})]})]})}function S(a){return a?e.jsx("div",{className:"featured-card__image-wrapper",children:e.jsx(j,{src:a.src,alt:a.alt,fluid:!0,className:"featured-card__image"})}):null}function I(a,t){if(!a)return null;if(a.caption)return e.jsx("div",{className:"featured-card__photo-credit",children:e.jsx("div",{className:`featured-card__img-caption${t==="right"?" featured-card__img-caption--right":""}`,children:e.jsx("span",{className:"featured-card__caption-text",children:a.caption})})});if(a.author){const{name:n,agency:o}=a.author;return e.jsx("div",{className:"featured-card__photo-credit",children:e.jsxs("div",{className:`featured-card__avatar${t==="right"?" featured-card__avatar--right":""}`,children:[e.jsx("div",{className:"featured-card__avatar-icon","aria-hidden":"true",children:e.jsx("span",{className:"featured-card__avatar-initial",children:n.charAt(0).toUpperCase()})}),e.jsxs("div",{className:"featured-card__avatar-text",children:[e.jsx("span",{className:"featured-card__avatar-name",children:n}),o&&e.jsx("span",{className:"featured-card__avatar-agency",children:o})]})]})})}return null}const y=({body:a,image:t,imagePosition:n="right",background:o="white",border:v="none",primaryAction:x,secondaryAction:_,className:w,...A})=>{const k=["featured-card",`featured-card--background-${o}`,o==="white"&&"featured-card--shadow",v==="none"&&"featured-card--border-none",w].filter(Boolean).join(" "),T=["col-12","col-md-7","featured-card__content-col",n==="left"&&"order-last"].filter(Boolean).join(" "),N=["col-12","col-md-5","featured-card__image-col",!t&&"d-none"].filter(Boolean).join(" ");return e.jsxs("div",{className:k,...A,children:[e.jsxs("div",{className:"row g-0",children:[e.jsx("div",{className:T,children:C(a,x,_)}),e.jsx("div",{className:N,children:S(t)})]}),I(t,n)]})};y.__docgenInfo={description:'FeaturedCard — Migrated from the Squiz "NTGDS - Featured content\r\n(landing page only)" Content Container Template.\r\n\r\nComposes the `<Image>` component for the media slot and the `<Button>`\r\ncomponent for primary and secondary CTAs. The two-column layout\r\n(7 / 5 columns at md+) and the photo-credit / avatar block faithfully\r\nmirror the original Squiz paint layout (`sel.original.backup.txt`).',methods:[],displayName:"FeaturedCard",props:{body:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Rich text / WYSIWYG body content. Accepts any ReactNode — in practice\r\nthis will be rendered HTML from a CMS. Rendered inside a\r\n`.bct-wysiwyg` wrapper matching the Squiz paint layout."},image:{required:!1,tsType:{name:"FeaturedCardImage"},description:"Optional image. When omitted the layout collapses to a single column.\r\nRendered via the `<Image>` design-system component."},imagePosition:{required:!1,tsType:{name:"union",raw:'"left" | "right"',elements:[{name:"literal",value:'"left"'},{name:"literal",value:'"right"'}]},description:'Which side the image column appears on.\r\n- `"right"` (default) — content left, image right.\r\n- `"left"` — image left, content right (uses Bootstrap `order-last`).',defaultValue:{value:'"right"',computed:!1}},background:{required:!1,tsType:{name:"union",raw:'"white" | "grey" | "blue" | "dark"',elements:[{name:"literal",value:'"white"'},{name:"literal",value:'"grey"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"dark"'}]},description:'Background colour variant. `"white"` also applies a box shadow.\r\nDefaults to `"white"`.',defaultValue:{value:'"white"',computed:!1}},border:{required:!1,tsType:{name:"union",raw:'"none" | "default"',elements:[{name:"literal",value:'"none"'},{name:"literal",value:'"default"'}]},description:'Whether to draw a border around the card.\r\nDefaults to `"none"`.',defaultValue:{value:'"none"',computed:!1}},primaryAction:{required:!1,tsType:{name:"FeaturedCardAction"},description:"Primary CTA. Rendered as an anchor element (`<a>`) styled with `btn\r\nbtn-primary` classes, matching the design system's link-button pattern\r\nused by Banner, GlobalAlert, and TopicListing."},secondaryAction:{required:!1,tsType:{name:"FeaturedCardAction"},description:"Optional secondary CTA. Rendered as an anchor element (`<a>`) styled\r\nwith `btn btn-secondary` classes. Only shown when `primaryAction` is\r\nalso set."}}};const b=e.jsxs("div",{children:[e.jsx("h2",{children:"Explore the Northern Territory"}),e.jsx("p",{children:"The Northern Territory is one of Australia's most unique destinations, offering ancient landscapes, rich Indigenous culture, and extraordinary wildlife. From the iconic Uluru to the lush wetlands of Kakadu, there is no shortage of breathtaking experiences."})]}),f={src:"https://picsum.photos/seed/featured/800/600",alt:"Aerial view of the Northern Territory landscape"},B={...f,caption:"Photo: NT Government Media"},P={...f,author:{name:"Jane Smith",agency:"Department of Tourism"}},L={title:"Migrated/FeaturedCard",component:y,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{imagePosition:{control:"select",options:["left","right"],description:"Position of the image column relative to the content."},background:{control:"select",options:["white","grey","blue","dark"],description:'"white" also applies a box shadow. "blue" and "dark" invert the text colour.'},border:{control:"select",options:["none","default"],description:"Border style around the card."}}},r={args:{body:b,image:f,imagePosition:"right",background:"white",border:"none",primaryAction:{text:"Read more",href:"#"}}},s={args:{...r.args,imagePosition:"left"}},i={args:{...r.args,primaryAction:{text:"Learn more",href:"#learn"},secondaryAction:{text:"Contact us",href:"#contact"}}},d={args:{...r.args,background:"grey"}},c={args:{...r.args,background:"blue"}},l={args:{...r.args,background:"dark"}},u={args:{...r.args,image:B}},h={args:{...r.args,image:P}},p={args:{body:b,imagePosition:"right",background:"white",border:"none",primaryAction:{text:"Read more",href:"#"}}},m={args:{...r.args,body:e.jsxs("div",{children:[e.jsx("h2",{children:"A rich history of land and culture"}),e.jsx("p",{children:"The Northern Territory has been home to Aboriginal Australians for over 50,000 years, making it one of the oldest continuously inhabited places on Earth. Their deep connection to country is reflected in the art, ceremony, language and law that continues to shape the Territory today."}),e.jsx("p",{children:"Visitors can explore this living culture through community-led tours, rock art sites, and the vibrant festivals that bring communities together throughout the year."}),e.jsx("p",{children:"The Territory's landscapes are equally spectacular — from the red desert interior to the monsoonal Top End, every season reveals a different face of this extraordinary land."})]})}},g={args:{...r.args,border:"default",background:"white"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    body: SAMPLE_BODY,
    image: SAMPLE_IMAGE,
    imagePosition: "right",
    background: "white",
    border: "none",
    primaryAction: {
      text: "Read more",
      href: "#"
    }
  }
}`,...r.parameters?.docs?.source},description:{story:`Default variant: image on the right, white background, single primary CTA.\r
Mirrors the Squiz paint layout defaults (image-right, background-white,\r
no border, primary button labelled "Read more").`,...r.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    imagePosition: "left"
  }
}`,...s.parameters?.docs?.source},description:{story:"Image positioned to the left of the content column.\r\nAchieved by applying Bootstrap `order-last` to the content column.",...s.parameters?.docs?.description}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    primaryAction: {
      text: "Learn more",
      href: "#learn"
    },
    secondaryAction: {
      text: "Contact us",
      href: "#contact"
    }
  }
}`,...i.parameters?.docs?.source},description:{story:`Both primary and secondary CTAs displayed side-by-side.\r
The secondary action is only rendered when a primary action is also present.`,...i.parameters?.docs?.description}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    background: "grey"
  }
}`,...d.parameters?.docs?.source},description:{story:"Grey background variant — the box shadow is not applied.",...d.parameters?.docs?.description}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    background: "blue"
  }
}`,...c.parameters?.docs?.source},description:{story:"Blue background variant — text colour inverts to white.",...c.parameters?.docs?.description}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    background: "dark"
  }
}`,...l.parameters?.docs?.source},description:{story:"Dark background variant — text colour inverts to white.",...l.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    image: SAMPLE_IMAGE_WITH_CAPTION
  }
}`,...u.parameters?.docs?.source},description:{story:'Photo credit caption rendered beneath the card when `image.caption` is set.\r\nCaption is right-aligned when `imagePosition` is `"right"`.',...u.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    image: SAMPLE_IMAGE_WITH_AUTHOR
  }
}`,...h.parameters?.docs?.source},description:{story:"Avatar fallback — shown when the image has an associated `author` and no\r\n`caption`. Mirrors the Squiz paint layout's `%asset_metadata_content.author%`\r\nfallback block.",...h.parameters?.docs?.description}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    body: SAMPLE_BODY,
    imagePosition: "right",
    background: "white",
    border: "none",
    primaryAction: {
      text: "Read more",
      href: "#"
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Text-only layout — no image prop provided. The image column is hidden and\r
the content column spans the full width.`,...p.parameters?.docs?.description}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    body: <div>\r
        <h2>A rich history of land and culture</h2>\r
        <p>\r
          The Northern Territory has been home to Aboriginal Australians for\r
          over 50,000 years, making it one of the oldest continuously inhabited\r
          places on Earth. Their deep connection to country is reflected in the\r
          art, ceremony, language and law that continues to shape the Territory\r
          today.\r
        </p>\r
        <p>\r
          Visitors can explore this living culture through community-led tours,\r
          rock art sites, and the vibrant festivals that bring communities\r
          together throughout the year.\r
        </p>\r
        <p>\r
          The Territory&apos;s landscapes are equally spectacular — from the red\r
          desert interior to the monsoonal Top End, every season reveals a\r
          different face of this extraordinary land.\r
        </p>\r
      </div>
  }
}`,...m.parameters?.docs?.source},description:{story:`Long-form body exercising WYSIWYG content wrapping across multiple\r
paragraphs.`,...m.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...Default.args,
    border: "default",
    background: "white"
  }
}`,...g.parameters?.docs?.source},description:{story:'With border — shows the `"default"` border option.',...g.parameters?.docs?.description}}};const R=["Default","ImageLeft","WithSecondaryAction","GreyBackground","BlueBackground","DarkBackground","WithImageCaption","WithAuthorAvatar","NoImage","LongBody","WithBorder"];export{c as BlueBackground,l as DarkBackground,r as Default,d as GreyBackground,s as ImageLeft,m as LongBody,p as NoImage,h as WithAuthorAvatar,g as WithBorder,u as WithImageCaption,i as WithSecondaryAction,R as __namedExportsOrder,L as default};
