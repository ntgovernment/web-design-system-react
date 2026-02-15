import type { Meta, StoryObj } from "@storybook/react-vite";
import { PaginationContent } from "./Pagination";

const meta = {
  title: "Content/Pagination",
  component: PaginationContent,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component:
          "**Pagination**\n\nHelps users navigate large amounts of content separated into different pages.\n\n**Usage**\n\nCommonly used in search results, pagination sits at the bottom of the page and allows users to navigate forwards and backwards through a series of pages.\n\n**The pagination component features:**\n- A Previous button to navigate to the preceding page. This button is not visible if the user is on the first page.\n- A Next button to navigate to the following page. This button is not visible if the user is on the last page.\n- Sequential numbers denoting a different individual page. Each number is selectable for the user to jump to that page.\n- Non-selectable ellipses that skip pages for smaller screens and when there are more than 7 pages.\n- A clear highlight over the page number the user is currently on.\n\nLive component: see the Default story.\n\n**How to use**\n- Use if the content is separated into two or more pages. For search results, do not have more than 10 items on one page.\n- Use ellipses to replace any skipped pages.\n- Always display the first page and current page.\n- Make sure load times are not adversely impacted by a large list of content on a page.\n\n**How not to use**\n- Do not use pagination for linear journeys where users go forwards or back through a process or sequential information. Use buttons instead.\n- Never use an infinite scroll as this presents problems for keyboard users. Separate content into pages and use this pagination component instead.\n- Do not use if the content is on one single page.\n- Do not use to divide a small set of content that can be displayed on a single page; this can add unnecessary complexity and frustration to users.\n\n**Themes**\nThe NTG Design System currently houses two themes or brands, for both external nt.gov.au websites and internal NTG Central intranet websites. The guidelines above apply to both themes.\n\nLive component with NTG and Central tabs: see the Themes story.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    currentPage: { control: "number" },
    totalPages: { control: "number" },
    siblingCount: { control: "number" },
    showPrevNext: { control: "boolean" },
    previousLabel: { control: "text" },
    nextLabel: { control: "text" },
    ariaLabel: { control: "text" },
  },
} satisfies Meta<typeof PaginationContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 10,
    totalPages: 21,
    siblingCount: 1,
    ariaLabel: "Search results pages",
  },
};

export const FirstPage: Story = {
  args: {
    currentPage: 1,
    totalPages: 8,
    siblingCount: 1,
    ariaLabel: "Service listings pages",
  },
};

export const LastPage: Story = {
  args: {
    currentPage: 8,
    totalPages: 8,
    siblingCount: 1,
    ariaLabel: "Service listings pages",
  },
};

export const Themes: Story = {
  name: "Themes (Use Theme Toolbar)",
  args: {
    currentPage: 10,
    totalPages: 21,
    siblingCount: 1,
    ariaLabel: "Search results pages",
  },
  parameters: {
    docs: {
      description: {
        story:
          "Use the Theme toolbar to preview NT.GOV.AU and NTG Central styling.",
      },
    },
  },
};
