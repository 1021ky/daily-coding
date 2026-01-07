// ESLint flat config for TypeScript + Airbnb Base
import js from '@eslint/js';
import { FlatCompat } from '@eslint/eslintrc';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.config({
    extends: [],
  }),
  {
    files: ['**/*.{ts,tsx,js}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        tsconfigRootDir: import.meta.dirname,
        project: ['./tsconfig.json'],
      },
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
    rules: {
      // Add project-specific rule tweaks here if needed
    },
  },
];
