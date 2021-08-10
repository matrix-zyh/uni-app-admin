const apiContext = require.context('./modules/', true, /\.js$/)

const $matrix = {}
apiContext.keys().forEach((key) => {
  const apiName = key
    .split('/')
    .pop()
    .replace(/\.\w+$/, '')

  switch (apiName) {
    // loading 加载......
    case 'loading':
      for (let field in apiContext(key)) {
        $matrix[field] = apiContext(key)[field]
      }
      break
    // log 日志
    case 'log':
      for (let field in apiContext(key)) {
        $matrix[field] = apiContext(key)[field]
      }
      break
    // 通用 工具类
    case 'tools':
      for (let field in apiContext(key)) {
        $matrix[field] = apiContext(key)[field]
      }
      break
    default:
      break
  }
})

uni.$matrix = $matrix

const install = (Vue) => {
  Vue.prototype.$matrix = $matrix
}

export default { install }
