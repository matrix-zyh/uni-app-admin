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
        <view>Hi！开发者~欢迎使用 Uni App Admin 移动端跨平台模板！</view>
        <view class="margin-top-sm"
          >该项目是我个人开发的一款高颜值的微信小程序组件库。这个项目不仅有一些漂亮的基础元素，还有一些实用的组件。扩展中心也会不定期更新一些小程序的解决方案，或者你有一些好的想法可以在GitHub里提交给我，我会加入到扩展里。</view
        >
        <view class="margin-top-sm"
          >项目是开源的，不收取任何费用，如果这个项目有帮到你，或者你觉得很赞，可以在GitHub里扫描赞赏码支持一下！</view
        >
        <view class="margin-top-sm"
          >该项目你可以用到除组件库小程序的任何项目。作者我也是花了时间和精力的，我不希望你拷贝一份，做一些修改发布就变成了一个独立的项目，当然！扩展再发布是可以的，但前提是注明一下我这个原作者٩(๑❛ᴗ❛๑)۶</view
        >
        <view class="margin-top-sm">更多功能敬请期待！</view>
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
