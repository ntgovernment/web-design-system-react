import type { Meta, StoryObj } from "@storybook/react-vite";
import { BackToTop } from "./BackToTop";

const meta = {
  title: "Components/Back to Top",
  component: BackToTop,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component:
          "A fixed-position button component that scrolls the page smoothly back to the top when clicked. The component automatically shows and hides based on scroll position, making it ideal for long pages.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    label: {
      control: "text",
      description: "Text label displayed next to the icon",
    },
    scrollThreshold: {
      control: { type: "number", min: 0, max: 1000, step: 100 },
      description:
        "Pixels scrolled before button becomes visible (default: 300)",
    },
    scrollDuration: {
      control: { type: "number", min: 100, max: 2000, step: 100 },
      description: "Duration of smooth scroll animation in milliseconds",
    },
    disabled: {
      control: "boolean",
      description: "Disable the button to prevent user interaction",
    },
  },
} satisfies Meta<typeof BackToTop>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Default Back to Top button with standard configuration.
 * Shows after scrolling 300px and takes 800ms to scroll to top.
 *
 * **Note**: To see this component in action, scroll down on this page
 * and the button will appear in the bottom-right corner.
 */
export const Default: Story = {
  args: {
    label: "Back to top",
    scrollThreshold: 300,
    scrollDuration: 800,
    forceVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The default Back to Top button. Automatically appears when scrolling past 300px and smoothly animates back to the top over 800ms. Includes proper focus states for keyboard navigation.",
      },
    },
  },
};

/**
 * Fast scroll animation that returns to top in just 400ms.
 * Good for users who prefer quicker page navigation.
 */
export const FastScroll: Story = {
  args: {
    label: "Back to top",
    scrollThreshold: 300,
    scrollDuration: 400,
    forceVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Faster scroll animation (400ms) for quicker page navigation. The button still appears at the same threshold but takes less time to scroll to the top.",
      },
    },
  },
};

/**
 * Slow scroll animation that returns to top in 1200ms.
 * Creates a more pronounced visual effect and is accessible for users
 * who prefer slower animations.
 */
export const SlowScroll: Story = {
  args: {
    label: "Back to top",
    scrollThreshold: 300,
    scrollDuration: 1200,
    forceVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Slower scroll animation (1200ms) for a more gradual page movement. Useful for complex pages where users benefit from seeing the scroll progress.",
      },
    },
  },
};

/**
 * Higher scroll threshold (500px) makes the button appear only after
 * scrolling further down the page. Useful for pages with prominent
 * above-the-fold content.
 */
export const HigherThreshold: Story = {
  args: {
    label: "Back to top",
    scrollThreshold: 500,
    scrollDuration: 800,
    forceVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The button appears only after scrolling 500px down the page, making it less obtrusive on pages with important above-the-fold content.",
      },
    },
  },
};

/**
 * Lower scroll threshold (150px) makes the button appear earlier when
 * the user scrolls even slightly down the page. Good for shorter pages
 * or when early access to navigation is important.
 */
export const LowerThreshold: Story = {
  args: {
    label: "Back to top",
    scrollThreshold: 150,
    scrollDuration: 800,
    forceVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "The button appears after scrolling just 150px, making it available early. Useful for pages where quick navigation back to the top is a priority.",
      },
    },
  },
};

/**
 * Custom label text instead of the default "Back to top".
 * Allows for localization or domain-specific language.
 */
export const CustomLabel: Story = {
  args: {
    label: "Return to top",
    scrollThreshold: 300,
    scrollDuration: 800,
    forceVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The label can be customized to match your application\'s terminology or language. This example uses "Return to top" instead of the default.',
      },
    },
  },
};

/**
 * Localized button for French language users.
 */
export const LocalizedFrench: Story = {
  args: {
    label: "Retour en haut",
    scrollThreshold: 300,
    scrollDuration: 800,
    forceVisible: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          "Back to Top button with French localization. The component uses the provided label for both button text and accessibility attributes.",
      },
    },
  },
};

/**
 * Disabled state prevents user interaction and shows reduced visual prominence.
 * Use when scroll-to-top functionality is unavailable or not applicable.
 */
export const Disabled: Story = {
  args: {
    label: "Back to top",
    disabled: true,
    scrollThreshold: 300,
    scrollDuration: 800,
    forceVisible: true,
  },
  render: (args) => (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <BackToTop {...args} />
      <p style={{ marginTop: "1rem", fontSize: "14px", color: "#666" }}>
        The button is disabled and will not respond to clicks
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Disabled state of the Back to Top button. The button is visually distinct and does not respond to user interaction. Use when the page is too short or when the functionality is temporarily unavailable.",
      },
    },
  },
};

/**
 * Demonstration of focus state with keyboard navigation.
 * Press Tab to focus the button and see the theme-specific outline.
 *
 * **NT.GOV.AU Theme**: Orange outline (#EC8C58)
 * **Central Theme**: Green outline (#20a030)
 */
export const FocusState: Story = {
  args: {
    label: "Back to top",
    scrollThreshold: 0,
    scrollDuration: 800,
    forceVisible: true,
  },
  render: (args) => (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <p style={{ marginBottom: "1rem", fontSize: "14px", color: "#666" }}>
        Press Tab to focus the button and see the focus outline
      </p>
      <BackToTop {...args} />
      <p style={{ marginTop: "1rem", fontSize: "12px", color: "#999" }}>
        Focus outline color depends on the active theme:
        <br />
        <strong>NTG Theme:</strong> Orange (#EC8C58)
        <br />
        <strong>Central Theme:</strong> Green (#20a030)
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story demonstrates the focus state with a visible outline. The button is always visible (scrollThreshold: 0) so you can focus it with Tab and see the theme-specific focus outline.",
      },
    },
  },
};

/**
 * Multiple Back to Top buttons with different configurations.
 * Shows how different settings can be used in the same application.
 */
export const MultipleConfigurations: Story = {
  render: () => (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      <h3 style={{ marginBottom: "1.5rem" }}>
        Multiple Configuration Examples
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div>
          <h4 style={{ marginBottom: "1rem" }}>Fast Navigation</h4>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "1rem" }}>
            scrollDuration: 400ms
          </p>
          <BackToTop
            label="Quick top"
            scrollThreshold={300}
            scrollDuration={400}
            forceVisible={true}
          />
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem" }}>Balanced</h4>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "1rem" }}>
            scrollDuration: 800ms (default)
          </p>
          <BackToTop
            label="Back to top"
            scrollThreshold={300}
            scrollDuration={800}
            forceVisible={true}
          />
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem" }}>Smooth Experience</h4>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "1rem" }}>
            scrollDuration: 1200ms
          </p>
          <BackToTop
            label="Scroll top"
            scrollThreshold={300}
            scrollDuration={1200}
            forceVisible={true}
          />
        </div>
      </div>

      <p style={{ fontSize: "12px", color: "#999", marginTop: "2rem" }}>
        Each configuration can be used based on user preference or page design
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "This story shows different configurations of the Back to Top button side-by-side, demonstrating how scrollDuration affects the user experience.",
      },
    },
  },
};

/**
 * Visual demonstration of states across the component lifecycle.
 * Shows default, hover, and focus states for visual documentation.
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ marginBottom: "1.5rem" }}>Back to Top Component States</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "2rem",
        }}
      >
        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "14px" }}>
            Default State
          </h4>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "1rem" }}>
            Light background with border
          </p>
          <BackToTop
            label="Back to top"
            scrollThreshold={0}
            scrollDuration={800}
            forceVisible={true}
          />
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "14px" }}>
            Hover State
          </h4>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "1rem" }}>
            Dark background with inverse text
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#999",
              marginTop: "0.5rem",
              fontStyle: "italic",
            }}
          >
            Hover over the button below to see this state
          </p>
          <BackToTop
            label="Back to top"
            scrollThreshold={0}
            scrollDuration={800}
            forceVisible={true}
          />
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "14px" }}>
            Focus State
          </h4>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "1rem" }}>
            Theme-specific outline (4px solid)
          </p>
          <p
            style={{
              fontSize: "12px",
              color: "#999",
              marginTop: "0.5rem",
              fontStyle: "italic",
            }}
          >
            Press Tab to focus the button below
          </p>
          <BackToTop
            label="Back to top"
            scrollThreshold={0}
            scrollDuration={800}
            forceVisible={true}
          />
        </div>

        <div>
          <h4 style={{ marginBottom: "1rem", fontSize: "14px" }}>
            Disabled State
          </h4>
          <p style={{ fontSize: "12px", color: "#666", marginBottom: "1rem" }}>
            Reduced opacity, no interaction
          </p>
          <BackToTop
            label="Back to top"
            disabled
            scrollThreshold={0}
            scrollDuration={800}
            forceVisible={true}
          />
        </div>
      </div>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#f5f5f5",
          borderRadius: "4px",
        }}
      >
        <h4 style={{ marginBottom: "0.5rem", fontSize: "14px" }}>
          Token-Based Styling
        </h4>
        <p style={{ fontSize: "12px", color: "#666", margin: 0 }}>
          All colors are derived from design tokens. Switch between NT.GOV.AU
          and Central themes in the toolbar to see theme-specific focus colors
          and other styling variations.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Visual demonstration of the Back to Top button in all its states. Shows how the component responds to user interaction and theme changes.",
      },
    },
  },
};

/**
 * Long page example showing how the Back to Top button
 * behaves on a realistic page with substantial content.
 */
export const OnALongPage: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <h1 style={{ marginBottom: "1rem" }}>Long Page Example</h1>
      <p style={{ marginBottom: "1rem" }}>
        Scroll down this page to see the Back to Top button appear in the
        bottom-right corner. The button will automatically show when you've
        scrolled past 300 pixels.
      </p>

      {/* Generate enough content to enable scrolling */}
      {Array.from({ length: 8 }).map((_, index) => (
        <div key={index} style={{ marginBottom: "3rem" }}>
          <h2 style={{ fontSize: "20px", marginBottom: "1rem" }}>
            Section {index + 1}
          </h2>
          <p style={{ lineHeight: "1.6", marginBottom: "1rem" }}>
            This is a realistic example showing how the Back to Top button
            appears on a long page. When you scroll down past the first 300
            pixels, the button becomes visible in the fixed position at the
            bottom-right of the screen.
          </p>
          <p style={{ lineHeight: "1.6" }}>
            The component is built with accessibility in mind. You can navigate
            to it using the keyboard Tab key, and it will display a
            high-contrast focus outline (orange for NT.GOV.AU theme, green for
            Central theme). When clicked, the page smoothly scrolls back to the
            top over 800ms, providing a pleasant user experience.
          </p>
        </div>
      ))}

      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "4px",
          marginTop: "2rem",
        }}
      >
        <h3 style={{ marginTop: 0 }}>You've reached the bottom!</h3>
        <p>
          Click the Back to Top button in the bottom-right corner or keep
          scrolling up manually. The button will disappear once you scroll back
          above 300 pixels from the top.
        </p>
      </div>

      {/* The component is rendered outside the story content for demo */}
      <BackToTop
        label="Back to top"
        scrollThreshold={300}
        forceVisible={true}
      />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "A realistic example of the Back to Top button on a long page. Scroll down to see the button appear and test its functionality.",
      },
    },
  },
};

/**
 * Responsive behavior demonstration.
 * Shows how the component adapts to different screen sizes.
 */
export const ResponsiveBehavior: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ marginBottom: "1.5rem" }}>Responsive Behavior</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "14px" }}>
            Desktop (large)
          </h4>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 1rem 0" }}>
            Position: bottom-right with 2rem offset
          </p>
          <p style={{ fontSize: "12px", color: "#999", margin: 0 }}>
            Padding: 8px (default)
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "14px" }}>
            Tablet (medium)
          </h4>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 1rem 0" }}>
            Position: bottom-right with 1.5rem offset (responsive)
          </p>
          <p style={{ fontSize: "12px", color: "#999", margin: 0 }}>
            Padding: 8px (maintains consistency)
          </p>
        </div>

        <div
          style={{
            border: "1px solid #ddd",
            padding: "1rem",
            borderRadius: "4px",
          }}
        >
          <h4 style={{ margin: "0 0 0.5rem 0", fontSize: "14px" }}>
            Mobile (small)
          </h4>
          <p style={{ fontSize: "12px", color: "#666", margin: "0 0 1rem 0" }}>
            Position: bottom-right with 1rem offset
          </p>
          <p style={{ fontSize: "12px", color: "#999", margin: 0 }}>
            Padding: 8px (compact but accessible)
          </p>
        </div>
      </div>

      <div
        style={{
          padding: "1.5rem",
          backgroundColor: "#f9f9f9",
          border: "1px solid #ddd",
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: 0 }}>
          <strong>Note:</strong> Resize your browser window to see how the Back
          to Top button adjusts its position. The component uses CSS media
          queries to adapt spacing for different screen sizes while maintaining
          accessibility across all devices.
        </p>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "Demonstrates how the Back to Top button adapts to different screen sizes. Try resizing your browser to see the responsive adjustments in CSS media queries.",
      },
    },
  },
};

/**
 * Integration example showing Back to Top with real content patterns.
 * Demonstrates best practices for using multiple components together.
 */
export const IntegrationExample: Story = {
  render: () => (
    <div style={{ padding: "2rem" }}>
      <h3 style={{ marginBottom: "2rem" }}>Integration Example</h3>

      {/* Navigation section */}
      <nav
        style={{
          backgroundColor: "#f5f5f7",
          padding: "1rem",
          borderRadius: "4px",
          marginBottom: "2rem",
        }}
      >
        <p style={{ margin: "0 0 0.5rem 0", fontSize: "14px" }}>
          <strong>Navigation</strong>
        </p>
        <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>
          Primary navigation goes here
        </p>
      </nav>

      {/* Main content */}
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h4 style={{ marginBottom: "0.5rem" }}>Section {index + 1}</h4>
          <p style={{ margin: 0, fontSize: "14px", lineHeight: "1.6" }}>
            Sample content that demonstrates how the Back to Top button works
            within a realistic page layout. On longer pages, users can quickly
            return to the navigation or page header.
          </p>
        </div>
      ))}

      {/* Footer section */}
      <footer
        style={{
          backgroundColor: "#f5f5f7",
          padding: "1rem",
          borderRadius: "4px",
          marginTop: "2rem",
          fontSize: "12px",
          color: "#666",
        }}
      >
        <p style={{ margin: 0 }}>Footer content goes here</p>
      </footer>

      <div
        style={{
          marginTop: "2rem",
          padding: "1rem",
          backgroundColor: "#f0f8ff",
          border: "1px solid #b3d9ff",
          borderRadius: "4px",
        }}
      >
        <p style={{ margin: 0, fontSize: "12px" }}>
          💡 <strong>Tip:</strong> This page includes a Back to Top button.
          Scroll down and it will appear in the bottom-right corner. This is
          especially useful for long documentation pages, blog posts, and
          content-heavy applications.
        </p>
      </div>

      {/* Back to Top component - always rendered */}
      <BackToTop
        label="Back to top"
        scrollThreshold={300}
        forceVisible={true}
      />
    </div>
  ),
  parameters: {
    layout: "fullscreen",
    docs: {
      description: {
        story:
          "Shows how the Back to Top button integrates with typical page layouts including navigation, content sections, and footer. Scroll down to see it in action.",
      },
    },
  },
};
