const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {
              '@menu-highlight-color': '#4A7C59',
              '@menu-item-color': '#E2E8DD',
              '@heading-color': '#1D263B',
              '@primary-color': '#7785AC',
            },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
