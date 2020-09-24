module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
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
          screens: './src/screens',
          navigators: './src/navigators',
          constants: './src/constants',
          components: './src/components',
          services: './src/services',
          models: './src/models',
          mappers: './src/mappers',
          tools: './src/tools',
        },
      },
    ],
  ],
};
