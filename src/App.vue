<script>
  export default {
    onLaunch: function () {
      // 兼容 小程序｜App｜H5 在App.vue页面获取 $Route 属性
      // 因为在 App端 App.vue 下的生命周期是优先执行于页面的，即：页面还未产生。
      this.$AppReady.then(() => {
        // 在这个试着打印路由信息瞧瞧 😊
      })
    },
    onShow: function () {
      // 兼容 小程序｜App｜H5 在App.vue页面获取 $Route 属性
      // 因为在 App端 App.vue 下的生命周期是优先执行于页面的，即：页面还未产生。
      this.$AppReady.then(() => {
        // 在这个试着打印路由信息瞧瞧 😊
      })
    },
    onHide: function () {
      console.log('App Hide')
    }
  }
</script>

<style lang="scss">
  /* 每个页面公共css */
  @import 'uview-ui/index.scss';
  @import '@/static/css/main.css';
  @import '@/static/css/icon.css';
</style>
