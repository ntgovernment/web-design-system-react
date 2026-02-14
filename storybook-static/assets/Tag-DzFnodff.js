import{j as t}from"./iframe-CtBkRSAA.js";const i=({variant:a="default",label:n,className:e,...r})=>{const l=`tag tag-${a}${e?` ${e}`:""}`;return t.jsx("span",{className:l,...r,children:n})};i.__docgenInfo={description:`Tag component for categorizing and differentiating content.\r
Tags are static (non-interactive) visual labels that help users\r
quickly find and identify relevant content.\r
\r
Key Guidelines:\r
- Keep labels short (2-3 words max)\r
- Use nouns/adjectives, not verbs\r
- No punctuation or icons\r
- Maximum 3-4 tags per content\r
- Present horizontally only`,methods:[],displayName:"Tag",props:{variant:{required:!1,tsType:{name:"union",raw:`| "default"\r
| "grey" // subtle variant\r
| "green"\r
| "blue"\r
| "warning"\r
| "red"\r
// NTG Regional variants\r
| "orange"\r
| "ochre"\r
| "coral"\r
| "sky-blue"\r
| "teal"\r
| "rubine-red"\r
| "bottle-green"\r
// Central Agency variants\r
| "central-green"\r
| "central-orange"\r
| "central-blue-light"`,elements:[{name:"literal",value:'"default"'},{name:"literal",value:'"grey"'},{name:"literal",value:'"green"'},{name:"literal",value:'"blue"'},{name:"literal",value:'"warning"'},{name:"literal",value:'"red"'},{name:"literal",value:'"orange"'},{name:"literal",value:'"ochre"'},{name:"literal",value:'"coral"'},{name:"literal",value:'"sky-blue"'},{name:"literal",value:'"teal"'},{name:"literal",value:'"rubine-red"'},{name:"literal",value:'"bottle-green"'},{name:"literal",value:'"central-green"'},{name:"literal",value:'"central-orange"'},{name:"literal",value:'"central-blue-light"'}]},description:`The visual style variant of the tag\r
@default 'default'`,defaultValue:{value:'"default"',computed:!1}},label:{required:!0,tsType:{name:"string"},description:`The text label to display inside the tag\r
Should be 2-3 words maximum using nouns or adjectives`}}};export{i as T};
