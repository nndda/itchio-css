// @ts-check

// @ts-ignore
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,

  {
    ignores: [
      "node_modules/*",
      "**/*.js",
    ],
  },
);