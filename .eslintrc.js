module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: { ecmaVersion: 8, sourceType: 'module' }, // to enable features such as async/await
  ignorePatterns: ['node_modules/*', '.next/*', '.out/*', '!.prettierrc.js'], // We don't want to lint generated files nor node_modules, but we want to lint .prettierrc.js (ignored by default by eslint)
  extends: [
    'eslint:recommended',
    'plugin:react/recommended', // React rules
    'plugin:react-hooks/recommended', // React hooks rules
    'plugin:jsx-a11y/recommended', // Accessibility rules
    'plugin:prettier/recommended',
  ],
  settings: { react: { version: 'detect' } },
  rules: {
    // Make it optionally
    'react/prop-types': 'off',

    // No need to import React when using Next.js
    'react/react-in-jsx-scope': 'off',

    // This rule is not compatible with Next.js's <Link /> components
    'jsx-a11y/anchor-is-valid': 'off',

    'prettier/prettier': ['error', {}, { usePrettierrc: true }], // Includes .prettierrc.js rules
  },
};
