// 控制接口请求是否弹出 loading... 弹窗
var loadingTimer = null
var isLoading = false

export function loading(bool = true) {
  const timer = 500
  if (bool) {
    loadingTimer = setTimeout(() => {
      isLoading = true
      uni.showLoading({
        title: '努力加载中~',
        mask: true
      })
    }, timer)
  } else {
    isLoading && uni.hideLoading()
    loadingTimer && clearTimeout(loadingTimer)
    loadingTimer = null
    isLoading = false
  }
}
