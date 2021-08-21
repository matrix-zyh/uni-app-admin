<template>
  <view>
    <u-navbar
      :title="headerTitle"
      :background="background"
      title-color="#fff"
      back-icon-color="#fff"
    />

    <view class="margin-xl bg-white padding-xl radius shadow-lg">
      <view class="text-center text-lg text-grey">
        <image src="@/static/images/logo.png" mode="" />
      </view>
      <view class="text-center margin-bottom-xl text-lg text-grey">Uni App Admin</view>
      <view class="text-content">
        <view>Hi！您好开发者～ 欢迎使用 Uni App Admin 移动端跨平台模板！</view>
        <view class="margin-top-sm"
          >项目中有一些简单的示例页面。说实话，这些示例页面也许对您一点用处也没有，好吧，我承认，可能真的一点用处都没有。</view
        >
        <view class="margin-top-sm"
          >该项目的意图，是希望可以让开发者，能够快速的进行开发，生产。希望能够真正的做到开箱即用，尽可能的节省开发者搭建项目的过程，节约时间成本，毕竟时间就是金钱。</view
        >
        <view class="margin-top-sm"
          >该项目是完全开源的，不收取任何费。如果这个项目真正的有帮到您，或者您觉得很🎉！您可以在
          GitHub 或者 Gitee 中请作者喝杯咖啡，不胜感激！谢谢～～～ ^_^</view
        >
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        // 标题
        headerTitle: '',
        // 自定义 navBar 导航样式
        background: {
          'background-image': 'linear-gradient(45deg, rgb(90, 132, 244), rgb(137,111,236))'
        }
      }
    },
    onLoad() {
      this.headerTitle = this.$Route.meta.title
    }
  }
</script>

<style scoped>
  image {
    width: 200upx;
    height: 200upx;
  }
</style>
