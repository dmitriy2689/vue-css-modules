const path = require("path");

module.exports = {
  runtimeCompiler: true,
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
  },
  css: {
    loaderOptions: {
      css: {
        //localIdentName: '[path][name]__[local]--[hash:base64:5]',
        //camelCase: 'only',
        /*getLocalIdent: (context, localIdentName, localName, options) => {
          return JSON.stringify(context);
        },*/
      }
    }
  },
  chainWebpack: config => {/*
    config.plugins.delete('html')
    config.plugins.delete('preload')
    config.plugins.delete('prefetch')*/
  }
}