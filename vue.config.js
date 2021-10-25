const path = require('path')

module.exports = {
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      // 哪些文件自动注入  使用绝对路径
      // 需要path.join来拼接完整路径
      patterns: [
        path.join(__dirname,'./src/assets/styles/variables.less'),
        path.join(__dirname,'./src/assets/styles/mixins.less'),
      ]
    },
  },
  configureWebpack:{
      module: {
          rules: [
              {
                  test: /\.mjs$/,
                  include: /node_modules/,
                  type: "javascript/auto"
              },
          ]
      }
  }
}
