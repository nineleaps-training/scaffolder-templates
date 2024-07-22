# Tooling - ESLint

## What and Why

- <https://blog.codacy.com/coding-standards-what-are-they-and-why-do-you-need-them/>
- <https://developer.ibm.com/articles/why-and-how-to-use-eslint-in-your-project/>

## Configuration

React Native CLI generates the project with ESLint setup. The config extends [@react-native/eslint-config](https://www.npmjs.com/package/@react-native/eslint-config). The config file here is `.eslintrc.js`

Here we'll be adding some additional rules and plugins to improve the linting experience.

1. Add [ESLint unused imports plugin](https://github.com/sweepline/eslint-plugin-unused-imports) to find and remove unused imports and variables

    ```sh
    yarn add -D eslint-plugin-unused-imports
    ```

   Update the ESLint config with the following:

    ```js
    {
      ...,
      plugins: [
        ...,
        'unused-imports',
      ],
      rules: {
        ...,
        'unused-imports/no-unused-imports': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
      },
    }
    ```

2. Add [ESLint import plugin](https://github.com/import-js/eslint-plugin-import) to validate proper imports. Also import [eslint-import-resolver-typescript](https://github.com/import-js/eslint-import-resolver-typescript) for Typescript support

    ```sh
    yarn add -D eslint-plugin-import
    yarn add -D eslint-import-resolver-typescript
    ```

   Update the ESLint config with the following:

    ```js
    {
      ...,
      extends: [
        ...,
        'plugin:import/recommended',
      ],
      plugins: [
        ...,
        'import',
      ],
      rules: {
        ...,
        'import/no-unresolved': 'error',
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: 'react',
                group: 'builtin',
                position: 'before',
              },
              ...
            ],
          },
        ],
      },
      settings: {
        'import/resolver': {
          typescript: {
            alwaysTryTypes: true,
          },
        },
        ...,
      },
    }
    ```

   You can add custom ordering for your internal packages/modules. For e.g.,

    ```js
    {
      ...,
      rules: {
        ...,
        'import/order': [
          'error',
          {
            pathGroups: [
              {
                pattern: 'react',
                group: 'builtin',
                position: 'before',
              },
              {
                pattern: 'components/**',
                group: 'internal',
                position: 'before',
              },
              {
                pattern: 'my-module/**',
                group: 'internal',
                position: 'before',
              },
              ...
            ],
          },
        ],
      }
    }
    ```

   Refer the [documentation](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/order.md#options) for more options.

3. Add ESLint plugin to [sort interface and string enum keys](https://github.com/infctr/eslint-plugin-typescript-sort-keys)

    ```sh
    yarn add -D eslint-plugin-typescript-sort-keys
    ```

   Update the ESLint config with the following:

    ```js
    {
      ...,
      extends: [
        ...,
        'plugin:typescript-sort-keys/recommended',
      ],
      plugins: [
        ...,
        'typescript-sort-keys',
      ],
      ...
    }
    ```

4. Add custom rules for indentation, quotes, etc.

    ```js
    {
      ...,
      rules: {
        'indent': ['error', 2, { 'SwitchCase': 1 }],
        'linebreak-style': ['error', 'unix'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'arrow-parens': ['error', 'always'],
        ...,
      },
      ...
    }
    ```

5. [`prettier`](https://prettier.io/docs/en/index.html) comes integrated with the React Native CLI setup. Update the prettier config (`.prettierrc.js`) with the following:

    ```js
    module.exports = {
      semi: true,
      tabWidth: 2,
      printWidth: 100,
      singleQuote: true,
      trailingComma: 'all',
      jsxSingleQuote: false,
      bracketSpacing: true,
    };
    ```

6. Run the following to check for lint issues

    ```sh
    yarn lint
    ``` 
7. Run the following to fix the lint issues

    ```sh
    yarn lint --fix
    ```

## Audit Helpers

1. [TypeScript Coverage Report
   ](https://github.com/alexcanessa/typescript-coverage-report)

   > analyze the code and report the type checks coverage (how many `Anys` are present)
