import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        "jest/globals": true,
      },
    },
  },
  {
    ignores: ["dist/*.js", "docs/**/*.js"],
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
];