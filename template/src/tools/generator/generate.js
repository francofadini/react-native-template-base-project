const { generateTemplateFiles, CaseConverterEnum } = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create list screen (With API Service)',
    defaultCase: CaseConverterEnum.PascalCase,
    entry: {
      folderPath: './src/tools/generator/templates/screen-api-list/',
    },
    stringReplacers: [{ question: 'Insert model name', slot: '__ModelSingular__' }, { question: 'Insert model prural', slot: '__ModelPrural__' }],
    output: {
      path: './src/screens/__ModelPrural__(camelCase)',
      pathAndFileNameDefaultCase: CaseConverterEnum.PascalCase,
      overwrite: true,
    }
  },
  {
    option: 'Create simple screen',
    defaultCase: CaseConverterEnum.PascalCase,
    entry: {
      folderPath: './src/tools/generator/templates/simple-screen/',
    },
    stringReplacers: [{ question: 'Insert screen name', slot: '__ScreenName__' }],
    output: {
      path: './src/screens/__ScreenName__(camelCase)',
      pathAndFileNameDefaultCase: CaseConverterEnum.PascalCase,
      overwrite: true,
    }
  },
]);