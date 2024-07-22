module.exports = {
  root: true,
  extends: [
    '@react-native',
    'plugin:import/recommended',
    'plugin:typescript-sort-keys/recommended',
  ],
  plugins: ['unused-imports', 'import', 'typescript-sort-keys'],
  rules: {
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/no-unused-vars': 'error',
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
    indent: ['error', 2, { SwitchCase: 1 }],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'arrow-parens': ['error', 'always'],
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
};
