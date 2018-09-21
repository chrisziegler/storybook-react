### Storybook w/React

Template with Welcome page, simple React button component, and Info, Knobs and JSX addons Start: **> npm run storybook**

Added typescript support
Appears to require:

- "@storybook/addons": "4.0.0-alpha.3",
- "@storybook/react": "4.0.0-alpha.3",

(for older version of Webpack without Hooks support (behind the scenes CRA-like build process used by storybook)

- inlined CSS and info for storybook IDE.
  Switched to Yarn to resolve npm versioning issue, and to install these package dependencies separtely
