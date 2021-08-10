const { merge } = require('webpack-merge')
const commConfig = require('./index')

module.exports = merge(commConfig, {
  // 当前所属环境名称
  NODE_MODE_NAME: '生产环境',
  // 当前环境所属 API域名
  BASE_API_URL: 'http://www.prod.com',
  // 当前环境所属 API域名所对应的 内网 ip:port
  BASE_IP_API_URL: 'http://127.0.0.1:0000'
})
