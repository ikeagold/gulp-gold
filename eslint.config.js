import pluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    "files": ["**/*.js"],
    "ignores": ["**/*.min.js"],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {},
      "parserOptions": {
        "ecmaFeatures": {
          "impliedStrict": true,
          "jsx": true
        }
      },
      "sourceType": "module",
    },
    "plugins": {
      pluginImport,
      pluginReact
    }
  }
];
