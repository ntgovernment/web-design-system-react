# Release: Merge dev into main

## Summary

This PR merges all the latest development work from the dev branch into main.

## Components Added

- **GlobalAlert**: Alert component with comprehensive styles and documentation
- **SideNavigation**: Side navigation component with themes and stories
- **TopicListing**: Topics, links, and documents listing component
- **OnThisPageNavigation**: Hierarchical on-this-page navigation
- **FileUpload**: File upload component with full documentation
- **Document**: Document component with styles and stories
- **Footer**: Footer component with 2-column support and theme integration
- **QuickExit**: Quick exit component with comprehensive docs
- **FloatingButton**: Floating action button component
- **Pagination**: Pagination component with theme overrides
- **Breadcrumbs**: Breadcrumbs navigation component
- **DateInput**: Date input form component
- **Radio**: Radio button component with validation icons
- **Checkbox**: Checkbox component with comprehensive stories
- **Dropdown**: Dropdown/select component with unified focus styles
- **Textarea**: Multi-line text input component
- **Callout**: Callout component for highlighted content
- **Notification**: New notification component replacing Alert
- **Pill**: Pill/badge component
- **Card**: Card component with multiple variants (Compact, Minicard, Full)
- **Image**: Image component
- **Tag**: Tag component with label property
- **Icon**: Icon component with FontAwesome integration

## Component Updates

- **Banner**: Made popular links clickable with updated API
- **Button**: Aligned with Figma design, consolidated docs, added label/icon properties
- **StepList**: Consolidated documentation into developer guide
- **Header**: Merged CSS variables into main documentation
- **SearchBar**: Removed size/disabled/readonly properties
- **DatePicker**: Theme variable for focus outline
- **Input**: Theme overrides and improved bundler wiring
- **Accordion**: Bootstrap focus/border style overrides
- **Table**: Customized Bootstrap table content styles

## Infrastructure & Documentation

- **Storybook**: Upgraded to v10.2.1
- **GitHub Pages**: CI/CD deployment for Storybook
- **Squiz Matrix GFB**: Deployment configuration at /webds/storybook
- **Node.js**: Updated to v22
- **Theme Switching**: Dynamic theme switching implementation
- **Design Tokens**: Comprehensive token conversion
- **Typography**: Body and heading typography styles
- **Accessibility**: Added a11y addon for testing
- **Documentation**: Consolidated component docs, removed duplicates

## Build & Bundling

- Refactored bundling strategy
- Enhanced deployment scripts
- Validation and verification improvements

## Detailed Commit List

- feat(GlobalAlert): add GlobalAlert component, styles, stories & docs
- docs: consolidate StepList documentation into comprehensive developer guide
- Add SideNavigation component, styles, themes, docs, and Storybook stories
- feat(topic-listing): add TopicListing component (topics | links | documents), styles, stories & docs
- feat(on-this-page): add OnThisPageNavigation component with hierarchical support; update styles, themes, docs & stories
- feat(FileUpload): add FileUpload component, styles, stories & docs
- Banner: make popular links clickable; API, styles, stories & docs
- chore(tokens/button): import common.css, align Button with Figma, consolidate docs
- feat(document): add Document component, styles, stories and docs
- feat(footer): add Footer component, styles, themes, stories, docs; focus & token fixes; 2-column support
- docs(header): merge CSS_VARIABLES into HEADER.md and remove duplicate
- feat(QuickExit): add component, stories, styles and comprehensive docs
- docs(QuickExit): merge CSS variables into QUICKEXIT.md; remove duplicate CSS_VARIABLES.md
- feat(FloatingButton): add component, styles, stories and docs
- docs(FloatingButton): finalize docs consolidation
- docs(BackToTop): rename consolidated doc to BACKTOTOP.md and update references
- feat(pagination): add Pagination component, styles, theme overrides, stories and docs
- feat(breadcrumbs): add Breadcrumbs component, styles, stories and docs
- SearchBar: remove size/disabled/readonly; update CSS, stories and docs
- DatePicker: use theme var for focus outline; update docs & tests
- feat(DateInput): add DateInput component, styles, stories and documentation
- feat(radio): add Radio component, stories, docs; chore(checkbox): validation icons and doc updates
- feat(checkbox): add Checkbox component, styles, stories and documentation
- feat(forms): unify focus border to --clr-border-strong-02; Dropdown component, docs & stories; focus / sizing consistency for Input, Dropdown, Textarea
- chore(textarea): finalize docs and stories
- feat(textarea): add Textarea component, styles, docs and stories
- chore(input): add theme overrides, update docs and Storybook/bundler wiring
- Accordion: override Bootstrap focus/border styles; update docs & stories; fix Tag stories typing
- ci(storybook): run Pages deploy on push to dev + main
- chore(storybook): apply /webds base only for production; add prepare-storybook-gfb script and docs; update Tag docs/stories
- Update story data
- Deploy Storybook v0.1.0 for Squiz Matrix GFB at /webds/storybook
- Configure Storybook with final URL
- Merge remote-tracking branch 'origin/dev' into dev
- Built Storybook
- Built Storybook
- Merge pull request #4 from ntgovernment/feature/github-pages-deployment
- Updated Node v to 22
- Merge pull request #3 from ntgovernment/copilot/update-package-lock-file
- Final verification complete - all builds pass
- Update package-lock.json and Node.js version to 22
- Initial plan
- fix: update Node.js to v22 and remove gh-pages dependency
- Merge pull request #2 from ntgovernment/feature/github-pages-deployment
- ci: add GitHub Pages deployment for Storybook
- build: update build artifacts and story data
- Clean up and housekeeping
- Customised Bootstrap Table content styles
- Upgrade to Storybook 10
- Updated to Storybook 9
- Merge remote-tracking branch 'origin/dev' into dev
- Optimised Card component
- Fixed bug on Full variant focus state
- Fixed bug on Full variant focus state
- Modularised Card component
- Added Compact variant of the Card component
- Added Minicard variant of the Card component
- Added new Card component
- Added new Image component
- Updated guidelines to not use Lorem Ipsum
- Added new Callout component
- Added new Notification component to replace Alert
- Added new Pill component
- Added Button label, leftIcon and rightIcon property
- Added Tag label property
- Added new Tag component
- Refactored bundling strategy
- Updated documentation
- Customised small button styles
- Customised small button styles
- Button primary styles customised
- Button primary styles customised
- Added button styles
- Enhanced deployment script
- Added link visited state
- Implement Hex to RGB converter
- Overriden link focus states
- Added typography on Storybook
- Implemented body and heading typography styles
- Configured deployment strategy
- Created new Icon component
- Implemented Theme-switching on Storybook
- Implemented FontAwesome
- Implemented dynamic theme switching
- Implemented comprehensive design token conversion
- Implemented API to return HTML code
- Installed Accessibility add-on
