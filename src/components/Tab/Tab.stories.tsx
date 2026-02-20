import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tab, TabItem } from "./Tab";

const meta = {
  title: "Components/Tab",
  component: Tab,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "Tabs help users navigate between related content sections while keeping the layout compact. Use tabs to organize content into logical categories, with the option for sticky navigation on landing pages.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    activeTabId: {
      control: "text",
      description: "The ID of the currently active tab",
    },
    isSticky: {
      control: "boolean",
      description: "Whether the tabs stick to the top when scrolling",
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size variant of the tabs",
    },
    showIcons: {
      control: "boolean",
      description: "Whether to display icons alongside tab labels",
    },
  },
} satisfies Meta<typeof Tab>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample tab items for government services
const governmentTabItems: TabItem[] = [
  {
    id: "arts-sports",
    label: "Arts and sports",
    icon: "fa-light fa-palette",
    content: (
      <div>
        <h2>Arts and sports</h2>
        <p>
          Access grants, funding opportunities, and support for arts and sports
          programs across the NT. Learn about cultural events, community
          recreation facilities, and athlete development programs.
        </p>
        <ul>
          <li>Arts grants and funding</li>
          <li>Sports facilities and programs</li>
          <li>Event support and permits</li>
          <li>Community recreation</li>
        </ul>
      </div>
    ),
  },
  {
    id: "business",
    label: "Business and industry",
    icon: "fa-light fa-briefcase",
    content: (
      <div>
        <h2>Business and industry</h2>
        <p>
          Support for starting and growing your business in the NT. Access
          permits, licensing, training programs, and economic development
          initiatives.
        </p>
        <ul>
          <li>Business registration and licensing</li>
          <li>Small business support</li>
          <li>Employment programs</li>
          <li>Industry development</li>
        </ul>
      </div>
    ),
  },
  {
    id: "health",
    label: "Health and wellbeing",
    icon: "fa-light fa-heart",
    content: (
      <div>
        <h2>Health and wellbeing</h2>
        <p>
          Information on health services, aged care, disability support, and
          community programs. Find resources for mental health, preventive care,
          and wellness initiatives.
        </p>
        <ul>
          <li>Health services</li>
          <li>Aged care and disability support</li>
          <li>Mental health resources</li>
          <li>Preventive health programs</li>
        </ul>
      </div>
    ),
  },
  {
    id: "crime-law",
    label: "Crime and law",
    icon: "fa-light fa-gavel",
    content: (
      <div>
        <h2>Crime and law</h2>
        <p>
          Legal services, law enforcement information, justice system resources,
          and community safety programs. Report crimes, find legal aid, and
          understand your rights.
        </p>
        <ul>
          <li>Crime reporting</li>
          <li>Legal aid services</li>
          <li>Justice information</li>
          <li>Community safety programs</li>
        </ul>
      </div>
    ),
  },
];

// Default tab story - basic usage
export const Default: Story = {
  args: {
    items: governmentTabItems,
    isSticky: false,
    size: "md",
    showIcons: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Standard horizontal tabs without icons. Click each tab to view the related content.",
      },
    },
  },
};

// With icons - all tabs show icons
export const WithIcons: Story = {
  args: {
    items: governmentTabItems,
    isSticky: false,
    size: "md",
    showIcons: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with left-aligned icons. Icons help users quickly identify content categories. Either all tabs have icons or none do.",
      },
    },
  },
};

// Sticky navigation - demonstrates sticky positioning on scroll
export const StickyNavigation: Story = {
  args: {
    items: [
      ...governmentTabItems,
      {
        id: "education",
        label: "Education",
        icon: "fa-light fa-book",
        content: (
          <div style={{ height: "600px" }}>
            <h2>Education</h2>
            <p>
              Information about schools, higher education, training programs,
              and student support services available in the NT.
            </p>
            <p>
              Scroll down to see the sticky tab navigation remain at the top of
              the viewport.
            </p>
            <div style={{ marginTop: "400px", paddingTop: "20px" }}>
              <p>
                <strong>Note:</strong> The tab navigation stays visible as you
                scroll down the content.
              </p>
            </div>
          </div>
        ),
      },
    ],
    isSticky: true,
    size: "md",
    showIcons: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tab navigation with sticky positioning. As the user scrolls down the page, the tabs remain visible at the top of the viewport, allowing quick navigation between sections. Ideal for landing pages with multiple content sections.",
      },
    },
  },
};

// Many tabs - demonstrates scroll button functionality
const manyTabsItems: TabItem[] = [
  {
    id: "tab-1",
    label: "Arts and sports",
    content: <div>Arts and sports content</div>,
  },
  {
    id: "tab-2",
    label: "Business and industry",
    content: <div>Business and industry content</div>,
  },
  {
    id: "tab-3",
    label: "Health and wellbeing",
    content: <div>Health and wellbeing content</div>,
  },
  {
    id: "tab-4",
    label: "Crime and law",
    content: <div>Crime and law content</div>,
  },
  {
    id: "tab-5",
    label: "Education",
    content: <div>Education content</div>,
  },
  {
    id: "tab-6",
    label: "Environment",
    content: <div>Environment content</div>,
  },
  {
    id: "tab-7",
    label: "Government",
    content: <div>Government content</div>,
  },
  {
    id: "tab-8",
    label: "Housing",
    content: <div>Housing content</div>,
  },
];

export const ManyTabs: Story = {
  args: {
    items: manyTabsItems,
    isSticky: false,
    size: "md",
    showIcons: false,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Tabs with scroll buttons. When there are too many tabs to fit in the viewport, left and right scroll buttons appear (use browser's viewport width to see them). Scroll buttons use smooth scrolling behavior.",
      },
    },
  },
};

// Small variant
export const SmallSize: Story = {
  args: {
    items: governmentTabItems.slice(0, 3),
    isSticky: false,
    size: "sm",
    showIcons: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Compact tab variant with reduced padding and font size. Use for secondary navigation or space-constrained layouts.",
      },
    },
  },
};

// Large variant
export const LargeSize: Story = {
  args: {
    items: governmentTabItems.slice(0, 3),
    isSticky: false,
    size: "lg",
    showIcons: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Expanded tab variant with increased padding and font size. Use for primary navigation or when tabs are a key UI element.",
      },
    },
  },
};

// Accessibility focused story
export const AccessibilityFocus: Story = {
  args: {
    items: governmentTabItems,
    isSticky: false,
    size: "md",
    showIcons: true,
  },
  parameters: {
    docs: {
      description: {
        story: `Keyboard Navigation: Use arrow keys (left/right) to move between tabs, Enter or Space to activate. Home moves to first tab, End moves to last tab.
        
ARIA Attributes: 
- role="tablist" on container
- role="tab" on each button with aria-selected
- role="tabpanel" on content panels
- aria-controls linking tabs to content

Focus Management: Clear focus outline using theme colors. Tab can be activated via keyboard.`,
      },
    },
  },
};
