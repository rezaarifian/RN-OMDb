module.exports = {
  presets: ['module:@react-native/babel-preset'],
  env: {
    production: {
      plugins: ['react-native-paper/babel'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@assets': './src/assets',
          '@components': './src/components',
          '@constants': './src/constants',
          '@models': './src/models',
          '@pages': './src/pages',
          '@routes': './src/routes',
          '@viewModels': './src/viewModels',
          '@services': './src/services',
          '@stores': './src/stores',
          '@slices': './src/slices',
          '@theme': './src/theme',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
