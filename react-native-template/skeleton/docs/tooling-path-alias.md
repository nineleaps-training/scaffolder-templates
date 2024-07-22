# Tooling - Path Alias

## What and Why

- <https://pratapsharma.com.np/path-alias-in-a-typescript-project>

## Configuration

1. Update `tsconfig.json`:

    ```json
    {
      ...,
      "compilerOptions": {
        "baseUrl": ".",
        "paths": {
          "@assets/*": ["src/assets/*"],
          "@components/*": ["src/components/*"],
          "@contexts": ["src/contexts/*"],
          "@features": ["src/features/*"],
          "@helpers": ["src/helpers/*"],
          "@hooks": ["src/hooks/*"],
          "@models": ["src/domain/models/*"],
          "@navigation": ["src/navigation/*"],
          "@network": ["src/network/*"],
          "@repositories": ["src/domain/repositories/*"],
          "@services": ["src/services/*"],
          "@styles": ["src/styles/*"]
        }
      }
    }
    ```

2. Add [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver)

    ```shell
    yarn add -D babel-plugin-module-resolver
    ```
    
    Update `babel.config.js` with the following:
    
    ```js
    module.exports = {
      ...,
      plugins: [
        ...,
        [
          'module-resolver',
          {
            root: ['.'],
            alias: {
              '@assets': './src/assets',
              '@components': './src/components',
              '@contexts': './src/contexts',
              '@features': './src/features',
              '@helpers': './src/helpers',
              '@hooks': './src/hooks',
              '@models': './src/domain/models',
              '@navigation': './src/navigation',
              '@network': './src/network',
              '@repositories': './src/domain/repositories',
              '@services': './src/services',
              '@styles': './src/styles',
            },
          },
        ],
      ],
    };
    ```

3. **Note**: Start application with `yarn start --reset-cache` to see the changes.

4. Update import order for ESLint (.eslint.js)
```js
module.exports = {
  // ...,
  rules: {
    // ...,
    'import/order': [
      'error',
      {
        pathGroups: [
          // ...,
          {
            pattern: '@network/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@repositories/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@services/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@navigation/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@contexts/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@hooks/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@components/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@features/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@styles/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@assets/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@models/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@helpers/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
    // ...,
  },
  // ...,
};

```
