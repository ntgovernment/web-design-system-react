import type { Meta, StoryObj } from "@storybook/react-vite";
import { Tag } from "./Tag";

const meta = {
  title: "Components/Tag",
  component: Tag,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: `
Used to categorise and differentiate content that helps users find what they need quickly and easily.

Tags allow UX and content designers to categorise content using keywords. They help users scan and easily find content that's relevant to them.

**Key Usage Guidelines:**
- Keep labels short (2-3 words maximum)
- Use nouns or adjectives, not verbs
- No punctuation or icons
- Maximum 3-4 tags per content item
- Present horizontally only
- Tags are static (non-interactive)
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "grey",
        "green",
        "blue",
        "warning",
        "red",
        "orange",
        "ochre",
        "coral",
        "sky-blue",
        "teal",
        "rubine-red",
        "bottle-green",
        "central-green",
        "central-orange",
        "central-blue-light",
      ],
      description: "The visual style variant of the tag",
      table: {
        defaultValue: { summary: "default" },
      },
    },
    label: {
      control: "text",
      description: "The text label to display inside the tag (2-3 words max)",
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default variant - neutral styling for general categorization.
 * Use for general content categories, topics, and keywords.
 */
export const Default: Story = {
  args: {
    variant: "default",
    label: "Default",
  },
};

/**
 * Grey (subtle) variant - muted neutral color for secondary tags.
 * Use for less prominent categories, archived content, or secondary information.
 */
export const Grey: Story = {
  args: {
    variant: "grey",
    label: "Grey",
  },
};

/**
 * Green variant - for success or positive categorization.
 * Use for active content, approved items, or positive categories.
 */
export const Green: Story = {
  args: {
    variant: "green",
    label: "Green",
  },
};

/**
 * Blue variant - for informational categorization.
 * Use for news, information, and general topics.
 */
export const Blue: Story = {
  args: {
    variant: "blue",
    label: "Blue",
  },
};

/**
 * Warning variant - for attention or caution.
 * Use for important notices, time-sensitive content, or highlighted categories.
 */
export const Warning: Story = {
  args: {
    variant: "warning",
    label: "Warning",
  },
};

/**
 * Red variant - for urgent or high-priority content.
 * Use for urgent content, critical information, or high-priority items.
 */
export const Red: Story = {
  args: {
    variant: "red",
    label: "Red",
  },
};

/**
 * All variants displayed together for comparison.
 */
export const AllVariants: Story = {
  args: {
    label: "Tag",
  },
  render: () => (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <Tag variant="default" label="Default" />
      <Tag variant="grey" label="Grey" />
      <Tag variant="green" label="Green" />
      <Tag variant="blue" label="Blue" />
      <Tag variant="warning" label="Warning" />
      <Tag variant="red" label="Red" />
    </div>
  ),
};

/**
 * **Search Results Context**
 *
 * Tags used to categorize search results, helping users quickly identify content type.
 * Maximum 2-3 tags per result. Labels are short nouns or adjectives (2-3 words).
 */
export const InSearchResults: Story = {
  name: "In Search Results",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <div className="border-bottom pb-3 mb-3">
        <div className="d-flex gap-2 mb-2">
          <Tag variant="blue" label="Education" />
          <Tag variant="green" label="Online Services" />
        </div>
        <h5 className="mb-1">
          <a href="#" className="text-decoration-none">
            NT Education Services Portal
          </a>
        </h5>
        <p className="text-muted mb-0">
          Access educational resources and services for students across the
          Northern Territory...
        </p>
      </div>

      <div className="border-bottom pb-3 mb-3">
        <div className="d-flex gap-2 mb-2">
          <Tag variant="default" label="Government" />
          <Tag variant="blue" label="Infrastructure" />
          <Tag variant="warning" label="Update" />
        </div>
        <h5 className="mb-1">
          <a href="#" className="text-decoration-none">
            Infrastructure Development Plans
          </a>
        </h5>
        <p className="text-muted mb-0">
          Latest updates on infrastructure projects and development initiatives
          across the NT...
        </p>
      </div>

      <div className="pb-3">
        <div className="d-flex gap-2 mb-2">
          <Tag variant="green" label="Health Services" />
          <Tag variant="grey" label="Darwin" />
        </div>
        <h5 className="mb-1">
          <a href="#" className="text-decoration-none">
            Darwin Health Clinic Locations
          </a>
        </h5>
        <p className="text-muted mb-0">
          Find health clinic locations and services available in the Darwin
          region...
        </p>
      </div>
    </div>
  ),
};

/**
 * **News Items**
 *
 * Tags categorize news articles by topic. Limited to 2-3 tags per article.
 * Uses clear, descriptive keywords without punctuation.
 */
export const OnNewsItems: Story = {
  name: "On News Items",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <article className="mb-4">
        <div className="d-flex gap-2 mb-2">
          <Tag variant="default" label="Government" />
          <Tag variant="blue" label="Community" />
        </div>
        <h4 className="mb-2">New Community Programs Launched</h4>
        <p className="text-muted small mb-2">Published: 10 Feb 2026</p>
        <p>
          The NT Government announces new community engagement programs designed
          to support regional development...
        </p>
      </article>

      <article className="mb-4">
        <div className="d-flex gap-2 mb-2">
          <Tag variant="green" label="Environment" />
          <Tag variant="blue" label="Parks" />
        </div>
        <h4 className="mb-2">National Park Conservation Initiative</h4>
        <p className="text-muted small mb-2">Published: 8 Feb 2026</p>
        <p>
          A new conservation program aims to protect native wildlife in NT
          national parks...
        </p>
      </article>
    </div>
  ),
};

/**
 * **Event Listings**
 *
 * Tags categorize events by type and sometimes location.
 * Helps users quickly scan for relevant events.
 */
export const OnEventListings: Story = {
  name: "On Event Listings",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex gap-2 mb-2">
            <Tag variant="warning" label="Community Event" />
            <Tag variant="blue" label="Alice Springs" />
          </div>
          <h5 className="card-title mb-1">Public Consultation Workshop</h5>
          <p className="text-muted small mb-2">25 March 2026, 2:00 PM</p>
          <p className="card-text mb-0">
            Join us for a community consultation on regional development plans.
          </p>
        </div>
      </div>

      <div className="card mb-3">
        <div className="card-body">
          <div className="d-flex gap-2 mb-2">
            <Tag variant="green" label="Training" />
            <Tag variant="default" label="Business" />
          </div>
          <h5 className="card-title mb-1">
            Small Business Development Seminar
          </h5>
          <p className="text-muted small mb-2">15 March 2026, 9:00 AM</p>
          <p className="card-text mb-0">
            Learn essential skills for growing your small business in the NT.
          </p>
        </div>
      </div>

      <div className="card">
        <div className="card-body">
          <div className="d-flex gap-2 mb-2">
            <Tag variant="red" label="Festival" />
            <Tag variant="blue" label="Darwin" />
          </div>
          <h5 className="card-title mb-1">Darwin Festival 2026</h5>
          <p className="text-muted small mb-2">1-15 August 2026</p>
          <p className="card-text mb-0">
            Annual celebration of arts, culture, and community in Darwin.
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * **Content with Multiple Tags**
 *
 * Shows proper use of 2-4 tags on a single piece of content.
 * Each tag is 2-3 words, using nouns/adjectives only.
 */
export const MultipleTags: Story = {
  name: "Multiple Tags (Best Practice)",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "500px" }}>
      <div className="mb-4">
        <h6 className="mb-2">Good Example: 3 Tags</h6>
        <div className="d-flex gap-2 mb-2 flex-wrap">
          <Tag variant="blue" label="Online Services" />
          <Tag variant="green" label="Business" />
          <Tag variant="default" label="Darwin" />
        </div>
        <p className="text-muted small">
          ✓ Short labels (2-3 words), clear categories, horizontal layout
        </p>
      </div>

      <div className="mb-4">
        <h6 className="mb-2">Good Example: 4 Tags (Maximum)</h6>
        <div className="d-flex gap-2 mb-2 flex-wrap">
          <Tag variant="default" label="Health" />
          <Tag variant="blue" label="Community" />
          <Tag variant="green" label="Regional" />
          <Tag variant="grey" label="Services" />
        </div>
        <p className="text-muted small">
          ✓ At the maximum of 4 tags, all relevant and descriptive
        </p>
      </div>

      <div className="mb-4">
        <h6 className="mb-2">Poor Example: Too Many Tags</h6>
        <div className="d-flex gap-2 mb-2 flex-wrap">
          <Tag variant="default" label="Government" />
          <Tag variant="blue" label="Services" />
          <Tag variant="green" label="Online" />
          <Tag variant="warning" label="Important" />
          <Tag variant="grey" label="Darwin" />
          <Tag variant="red" label="New" />
        </div>
        <p className="text-muted small">
          ✗ Too many tags (6) - overwhelming and loses effectiveness
        </p>
      </div>
    </div>
  ),
};

/**
 * **Content Categorization Examples**
 *
 * Real-world examples showing proper tag usage with appropriate label text.
 * Labels use nouns/adjectives, not verbs or action words.
 */
export const ContentCategorization: Story = {
  name: "Content Categorization",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <div className="mb-4">
        <h6 className="text-success">✓ Good Examples</h6>
        <div className="mb-3">
          <div className="d-flex gap-2 mb-1">
            <Tag variant="blue" label="Online Systems" />
          </div>
          <p className="text-muted small mb-0">
            ✓ Noun phrase - descriptive, not action-oriented
          </p>
        </div>
        <div className="mb-3">
          <div className="d-flex gap-2 mb-1">
            <Tag variant="green" label="Emergency Services" />
          </div>
          <p className="text-muted small mb-0">✓ Clear category using nouns</p>
        </div>
        <div className="mb-3">
          <div className="d-flex gap-2 mb-1">
            <Tag variant="default" label="Road Safety" />
          </div>
          <p className="text-muted small mb-0">
            ✓ Topic-based, non-hierarchical
          </p>
        </div>
      </div>

      <div>
        <h6 className="text-danger">✗ Poor Examples</h6>
        <div className="mb-3">
          <div className="d-flex gap-2 mb-1">
            <Tag variant="blue" label="Find Online Systems" />
          </div>
          <p className="text-muted small mb-0">
            ✗ Starts with verb - suggests interactive action
          </p>
        </div>
        <div className="mb-3">
          <div className="d-flex gap-2 mb-1">
            <Tag variant="warning" label="Click Here!" />
          </div>
          <p className="text-muted small mb-0">
            ✗ Action word with punctuation - looks like a CTA
          </p>
        </div>
        <div className="mb-3">
          <div className="d-flex gap-2 mb-1">
            <Tag
              variant="default"
              label="Important Information About Government Services"
            />
          </div>
          <p className="text-muted small mb-0">
            ✗ Too long - should be 2-3 words maximum
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * **Proper Label Length**
 *
 * Demonstrates the 2-3 word maximum guideline for tag labels.
 */
export const ProperLabelLength: Story = {
  name: "Label Length Guidelines",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "500px" }}>
      <div className="mb-4">
        <h6 className="text-success mb-3">✓ Ideal: 1-3 Words</h6>
        <div className="d-flex gap-2 mb-2 flex-wrap">
          <Tag variant="blue" label="News" />
          <Tag variant="green" label="Health Services" />
          <Tag variant="default" label="Community Programs" />
          <Tag variant="warning" label="Regional Update" />
        </div>
      </div>

      <div>
        <h6 className="text-danger mb-3">✗ Too Long</h6>
        <div className="d-flex gap-2 mb-2 flex-wrap">
          <Tag variant="blue" label="Darwin Regional Community Services" />
          <Tag variant="green" label="Online Application System" />
        </div>
        <p className="text-muted small">
          These labels are too long and reduce scannability
        </p>
      </div>
    </div>
  ),
};

/**
 * **Horizontal Layout Only**
 *
 * Tags should always be presented horizontally, never vertically stacked.
 */
export const HorizontalLayout: Story = {
  name: "Horizontal Layout (Required)",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <div className="mb-4">
        <h6 className="text-success mb-3">✓ Correct: Horizontal Layout</h6>
        <div className="d-flex gap-2 flex-wrap">
          <Tag variant="blue" label="Government" />
          <Tag variant="green" label="Services" />
          <Tag variant="default" label="Online" />
          <Tag variant="grey" label="Darwin" />
        </div>
        <p className="text-muted small mt-2">
          Tags wrap to new lines when needed, but maintain horizontal flow
        </p>
      </div>

      <div>
        <h6 className="text-danger mb-3">✗ Incorrect: Vertical Stack</h6>
        <div
          className="d-flex flex-column gap-2"
          style={{ width: "fit-content" }}
        >
          <Tag variant="blue" label="Government" />
          <Tag variant="green" label="Services" />
          <Tag variant="default" label="Online" />
          <Tag variant="grey" label="Darwin" />
        </div>
        <p className="text-muted small mt-2">
          Never stack tags vertically - reduces scannability
        </p>
      </div>
    </div>
  ),
};

/**
 * **Tags with Short Labels**
 *
 * Various content-appropriate labels demonstrating the 2-3 word guideline.
 */
export const VariousLabels: Story = {
  args: {
    label: "Tag",
  },
  render: () => (
    <div className="d-flex gap-2 align-items-center flex-wrap">
      <Tag variant="green" label="Active" />
      <Tag variant="blue" label="New" />
      <Tag variant="warning" label="Pending Review" />
      <Tag variant="red" label="Urgent" />
      <Tag variant="grey" label="Archived" />
      <Tag variant="default" label="Draft" />
    </div>
  ),
};

/**
 * **NTG Regional Color Variants**
 *
 * Available in NTG theme only. Used to tag region-specific content
 * like events, news items, or services tied to specific NT regions.
 *
 * Seven regional colors align with NTG brand guidelines.
 */
export const NTGRegionalColors: Story = {
  name: "NTG Regional Variants",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <p className="text-muted mb-3">
        Regional color variants for tagging region-specific content in the NTG
        theme.
      </p>

      <div className="mb-4">
        <h6 className="mb-2">All Regional Variants</h6>
        <div className="d-flex gap-2 flex-wrap">
          <Tag variant="orange" label="Darwin Region" />
          <Tag variant="ochre" label="Katherine Region" />
          <Tag variant="coral" label="Barkly Region" />
          <Tag variant="sky-blue" label="Central Australia" />
          <Tag variant="teal" label="East Arnhem" />
          <Tag variant="rubine-red" label="Top End East" />
          <Tag variant="bottle-green" label="Big Rivers" />
        </div>
      </div>

      <div className="mb-4">
        <h6 className="mb-2">Regional Event Example</h6>
        <div className="card">
          <div className="card-body">
            <div className="d-flex gap-2 mb-2">
              <Tag variant="warning" label="Community Event" />
              <Tag variant="sky-blue" label="Alice Springs" />
            </div>
            <h5 className="card-title mb-1">Central Australia Forum</h5>
            <p className="text-muted small mb-2">15 March 2026</p>
            <p className="card-text mb-0">
              Regional consultation on central Australia development
              initiatives.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h6 className="mb-2">Regional News Example</h6>
        <article>
          <div className="d-flex gap-2 mb-2">
            <Tag variant="blue" label="Infrastructure" />
            <Tag variant="ochre" label="Katherine Region" />
          </div>
          <h5 className="mb-2">New Katherine Facilities Announced</h5>
          <p className="text-muted small mb-2">Published: 8 Feb 2026</p>
          <p>
            Investment in new community facilities for the Katherine region...
          </p>
        </article>
      </div>
    </div>
  ),
};

/**
 * **Central Agency Color Variants**
 *
 * Available in Central theme only. Uses secondary brand colors
 * to categorize agency-specific content in search results and
 * other content listings on agency intranets.
 */
export const CentralAgencyColors: Story = {
  name: "Central Agency Variants",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "600px" }}>
      <p className="text-muted mb-3">
        Agency color variants for categorizing agency content in the Central
        theme.
      </p>

      <div className="mb-4">
        <h6 className="mb-2">Agency Variants</h6>
        <div className="d-flex gap-2 flex-wrap">
          <Tag variant="central-green" label="NTG Central" />
          <Tag variant="central-orange" label="Agency Orange" />
          <Tag variant="central-blue-light" label="Agency Blue" />
        </div>
      </div>

      <div className="mb-4">
        <h6 className="mb-2">Agency Search Results Example</h6>
        <div className="border-bottom pb-3 mb-3">
          <div className="d-flex gap-2 mb-2">
            <Tag variant="central-green" label="NTG Central" />
            <Tag variant="blue" label="Policy" />
          </div>
          <h6 className="mb-1">
            <a href="#" className="text-decoration-none">
              NTG Central Policy Documents
            </a>
          </h6>
          <p className="text-muted small mb-0">
            Access central government policy documents and guidelines...
          </p>
        </div>

        <div className="pb-3">
          <div className="d-flex gap-2 mb-2">
            <Tag variant="central-orange" label="Agency Resource" />
            <Tag variant="default" label="Training" />
          </div>
          <h6 className="mb-1">
            <a href="#" className="text-decoration-none">
              Agency Training Materials
            </a>
          </h6>
          <p className="text-muted small mb-0">
            Training resources and materials for agency staff...
          </p>
        </div>
      </div>
    </div>
  ),
};

/**
 * **Theme Comparison**
 *
 * Shows how tag variants differ between NTG and Central themes.
 */
export const ThemeComparison: Story = {
  name: "Theme Variant Comparison",
  args: { label: 'Tag' },
  render: () => (
    <div style={{ maxWidth: "700px" }}>
      <div className="mb-4">
        <h6 className="mb-3">Base Variants (Available in Both Themes)</h6>
        <div className="d-flex gap-2 flex-wrap">
          <Tag variant="default" label="Default" />
          <Tag variant="grey" label="Grey" />
          <Tag variant="green" label="Green" />
          <Tag variant="blue" label="Blue" />
          <Tag variant="warning" label="Warning" />
          <Tag variant="red" label="Red" />
        </div>
      </div>

      <div className="mb-4">
        <h6 className="mb-3">NTG Theme: Regional Variants</h6>
        <div className="d-flex gap-2 flex-wrap">
          <Tag variant="orange" label="Darwin Region" />
          <Tag variant="ochre" label="Katherine" />
          <Tag variant="coral" label="Barkly" />
          <Tag variant="sky-blue" label="Central AU" />
          <Tag variant="teal" label="East Arnhem" />
          <Tag variant="rubine-red" label="Top End East" />
          <Tag variant="bottle-green" label="Big Rivers" />
        </div>
        <p className="text-muted small mt-2">
          Use for region-specific events, news, and services
        </p>
      </div>

      <div>
        <h6 className="mb-3">Central Theme: Agency Variants</h6>
        <div className="d-flex gap-2 flex-wrap">
          <Tag variant="central-green" label="NTG Central" />
          <Tag variant="central-orange" label="Agency Orange" />
          <Tag variant="central-blue-light" label="Agency Blue" />
        </div>
        <p className="text-muted small mt-2">
          Use for categorizing agency content in search and listings
        </p>
      </div>
    </div>
  ),
};
