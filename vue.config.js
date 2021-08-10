// uni-simple-router
const TransformPages = require('uni-read-pages')
const { webpack } = new TransformPages()
const ENV = require('./src/config/env.' + process.env.NODE_ENV)

// 获取路径
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  transpileDependencies: ['luch-request'],

  // 启用压缩代码
  configureWebpack: () => {
    return {
      // 配置 alias 路径别名
      resolve: {
        alias: {
          '@': resolve('src'),
          '@mock': resolve('src/mock'),
          '@http': resolve('src/http'),
          '@utils': resolve('src/utils'),
          '@api': resolve('src/services'),
          '@comp': resolve('src/components')
        }
      },
      optimization: {
        minimize: ['prev', 'prod'].includes(process.env.NODE_ENV)
      },
      // 插件
      plugins: [
        // 配置 uni-simple-router 路由插件
        new webpack.DefinePlugin({
          ROUTES: webpack.DefinePlugin.runtimeValue(() => {
            const tfPages = new TransformPages({
              includes: ['path', 'name', 'meta', 'aliasPath']
            });
            return JSON.stringify(tfPages.routes)
          }, true )
        })
      ]
    }
  },

  chainWebpack: config => {
    config.optimization.minimizer('terser').tap(args => {
      const compress = args[0].terserOptions.compress
      compress.drop_console = ['prev', 'prod'].includes(process.env.NODE_ENV)
      compress.pure_funcs = ['__f__']
      return args
    })
  },

  // 服务代理
  devServer: {
    proxy: {
      [ENV.BASE_API_PROXY_PREFIX]: {
        target: ENV.REQUEST_TYPE ? ENV.BASE_API_URL : ENV.BASE_IP_API_URL,
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          [`^${ENV.BASE_API_PROXY_PREFIX}`]: ENV.BASE_API_PROXY_PREFIX
        }
      }
    }
  }
}