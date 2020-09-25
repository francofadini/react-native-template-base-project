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
    },
    onComplete: (results) => {
      console.log('Done! 🎉. Take a loook to the results:', results);
    },
  },
]);