import type { Preview } from "@storybook/react";
import { useEffect } from 'react';
import React from 'react';

// Load Bootstrap CSS from CDN
const loadBootstrapCSS = () => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css';
  link.integrity = 'sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH';
  link.crossOrigin = 'anonymous';
  document.head.appendChild(link);
};

// HTML Decorator to view code as HTML and ensure Bootstrap is loaded
const withHTMLCode = (Story: any) => {
  useEffect(() => {
    loadBootstrapCSS();
  }, []);

  return (
    <div>
      <Story />
    </div>
  );
};

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      source: {
        type: 'dynamic',
      },
    },
    // Show HTML in docs
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: 'strict',
      },
    },
  },
  decorators: [withHTMLCode],
};

export default preview;
