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
        "jest/globals": true,
      },
    },
  },
  {
    ignores: ["dist/*.js", "docs/**/*.js"],
  },
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    settings: {
      react: {
        version: "detect", // Détection automatique de la version de React
      },
    },
  },
];