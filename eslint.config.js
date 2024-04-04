import pluginImport from "eslint-plugin-import";
import pluginReact from "eslint-plugin-react";
import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";

export default [
  js.configs.recommended,
  {
    "files": ["**/*.js"],
    "ignores": ["**/*.min.js"],
    "languageOptions": {
      "ecmaVersion": "latest",
      "globals": {},
      "parser": babelParser,
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
    },
    "rules": {
      "function-paren-newline": 0,
      "quotes": [
        "warn",
        "single"
      ]
    }
  }
];
