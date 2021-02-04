const {
  generateTemplateFiles,
  CaseConverterEnum,
} = require('generate-template-files');

generateTemplateFiles([
  {
    option: 'Create simple fragment',
    defaultCase: CaseConverterEnum.PascalCase,
    entry: {
      folderPath: './generator/templates/simple-fragment/',
    },
    stringReplacers: [
      { question: 'Insert fragment name', slot: '__FragmentName__' },
    ],
    output: {
      path: './src/fragments/__FragmentName__',
      pathAndFileNameDefaultCase: CaseConverterEnum.KebabCase,
      overwrite: true,
    },
  },
]);
