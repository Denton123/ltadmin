module.exports = {
  // 部署应用包时的基本url
  publicPath: '/',
  // 生产构建文件目录
  outputDir: 'dist',
  // eslint-loader是否在保存时候检查
  lintOnSave: false,
  // css配置
  css: {
    // 是否将组件中的css提取至一个独立的css文件中，默认为true
    extract: true,
    // 开启source map
    sourceMap: false,
    // loader传递选项
    // loaderOptions: {
    //   css: {
    //   }
    // }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://test.b.gdltu.com',
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
    disableHostCheck: true,
    // 让浏览器overlay时显示警告和错误
    overlay: {
      warnings: true,
      errors: true
    }
  },
  productionSourceMap: false,
  // chainWebpack: config => {
  //   config.module
  //     .rule('images')
  //       .use('url-loader')
  //         .loader('url-loader')
  //           .tap(options => Object.assign(options, {limit: 10240}))
  // }
}