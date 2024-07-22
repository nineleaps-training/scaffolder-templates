module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
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
