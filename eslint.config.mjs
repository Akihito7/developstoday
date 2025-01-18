import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// Extende as configurações do Next.js e TypeScript
const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  

  "eslint:recommended", 
  {
    rules: {
      "no-console": "off", 
      "@typescript-eslint/no-explicit-any": "off",
      "react-hooks/exhaustive-deps": "off",
      "@typescript-eslint/no-wrapper-object-types": "off",
      "@typescript-eslint/no-empty-object-type": "off",
      "react/prop-types": "off", 
      "no-unused-vars": "off",
      "no-undef": "off", 
    },
  },
];

export default eslintConfig;
