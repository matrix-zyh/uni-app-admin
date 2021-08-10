<template>
  <view>
    <u-navbar :is-back="false" :title="headerTitle" :background="background" title-color="#fff" />

    <view class="page-content">
      <view class="u-page">
        <!-- 所有内容的容器 -->
        <hello-world title="直播-点击图片试试" @change="pageRouter" />
      </view>
    </view>

    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar :list="user_menu" :mid-button="true" />
  </view>
</template>

<script>
  import HelloWorld from '@comp/HelloWorld.vue'
  import cookie from '@utils/cookie'

  export default {
    components: { HelloWorld },
    data() {
      return {
        // 标题
        headerTitle: '',
        // 自定义 navBar 导航样式
        background: {
          'background-image': 'linear-gradient(45deg, rgb(0, 129, 255), rgb(28, 187, 180))'
        },
        user_menu: cookie.menu()
      }
    },
    onLoad() {
      this.headerTitle = this.$Route.meta.title
    },
    methods: {
      /**
       * 路由跳转
       * @author Matrix<matrix.zyh@gmail.com>
       */
      pageRouter() {
        this.$Router.push({ name: 'studio-index' })
      }
    }
  }
</script>

<style scoped>
  .page-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>
