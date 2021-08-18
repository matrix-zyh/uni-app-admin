<template>
  <view>
    <u-navbar :is-back="false" :title="headerTitle" :background="background" title-color="#fff" />

    <view class="page-content">
      <view class="u-page">
        <!-- 所有内容的容器 -->
        <hello-world title="商品-点击图片试试" router-name="commodity-index" />
      </view>
    </view>

    <!-- 与包裹页面所有内容的元素u-page同级，且在它的下方 -->
    <u-tabbar :list="user_menu" />
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
          'background-image': 'linear-gradient(45deg, rgb(90, 132, 244), rgb(137,111,236))'
        },
        user_menu: cookie.menu()
      }
    },
    onLoad() {
      this.headerTitle = this.$Route.meta.title
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
