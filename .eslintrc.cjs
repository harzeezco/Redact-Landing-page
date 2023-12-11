module.exports = {
  root: true,
  env: { browser: true, es2020: true, node: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:prettier/recommended",
    "airbnb",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],

  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: {
    react: { version: "18.2" },
    "import/resolver": {
      alias: {
        map: [["@", "./src"]],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  plugins: [
    "react-refresh",
    "react",
    "prettier",
    "react-hooks",
    "jsx-a11y",
    "import",
  ],
  rules: {
    quotes: ["error", "double"],
    "linebreak-style": "off",
    "object-curly-newline": "off",
    "react/jsx-no-bind": "off",
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/react-in-jsx-scope": "off",
    "react/jsx-props-no-spreading": "off",
    "react/prop-types": [2, { skipUndeclared: true }],
    "react/state-in-constructor": [2, "never"],
    "react/jsx-wrap-multilines": [
      "error",
      {
        declaration: "parens-new-line",
        assignment: "parens-new-line",
        return: "parens-new-line",
        arrow: "parens-new-line",
        condition: "parens-new-line",
        logical: "parens-new-line",
      },
    ],
    "react/jsx-curly-newline": [
      "error",
      {
        multiline: "consistent",
        singleline: "consistent",
      },
    ],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-unused-vars": [
      "error",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "jsx-a11y/anchor-is-valid": [
      "error",
      {
        components: ["Link"],
        specialLink: ["to"],
      },
    ],
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external", "internal", "parent", "sibling", "index"],
        ],
        pathGroups: [
          {
            pattern: "react",
            group: "external",
            position: "before",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: ["vite.config.js", "**/*.test.js", "**/*.spec.js"],
      },
    ],
    "prettier/prettier": ["error"],
  },
};
