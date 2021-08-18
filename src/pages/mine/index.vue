<template>
  <view>
    <view class="bg-image">
      <image :src="banner_img" />
      <view
        :style="[{ width: '100%', height: CustomBar + 'px' }]"
        style="position: absolute; z-index: 1"
      >
        <view :style="style">
          <view
            class="text-white"
            :style="[{ height: '100%', top: StatusBar + 'px' }]"
            style="font-size: 36upx; display: flex; align-items: center; justify-content: center"
            >{{ headerTitle }}</view
          >
        </view>
      </view>
      <view class="statistics">
        <view class="cu-list menu-avatar">
          <view class="cu-item arrow">
            <view
              class="cu-avatar round xl"
              style="
                background-image: url(https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg);
              "
            ></view>
            <view class="content">
              <view class="text-white text-lg">
                <text>Matrix</text>
                <text class="shop-sign">商家</text>
              </view>
              <view style="color: #dddae6" class="text-sm flex">
                <view style="font-size: 26upx" class="text-cut">用户id：202105211314</view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view class="wrap">
      <view
        :style="[{ animationDelay: '0.1s' }]"
        :class="{ 'animation-slide-bottom': toggleDelay }"
        class="wrap-content"
      >
        <view class="cu-list menu">
          <view class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/mine/bill-flow.png" class="png" mode="aspectFit"></image>
              <text class="text-black">流水记录</text>
            </view>
          </view>
          <view class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/mine/message.png" class="png" mode="aspectFit"></image>
              <text class="text-black">消息中心</text>
            </view>
          </view>
          <view class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/mine/feedback.png" class="png" mode="aspectFit"></image>
              <text class="text-black">反馈</text>
            </view>
          </view>
          <view class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/mine/info.png" class="png" mode="aspectFit"></image>
              <text class="text-black">当前版本</text>
            </view>
            <view class="action">
              <text class="text-gray text-lg">v0.1.0</text>
            </view>
          </view>
          <view class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/mine/setting.png" class="png" mode="aspectFit"></image>
              <text class="text-black">设置</text>
            </view>
          </view>
          <view class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/mine/help.png" class="png" mode="aspectFit"></image>
              <text class="text-black">帮助</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <u-tabbar :list="user_menu" :mid-button="false"></u-tabbar>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import Cookie from '@utils/cookie'
  import { banner_img } from '@mock/base64'

  export default {
    data() {
      return {
        // 计算不同手机 navBar 安全高度
        StatusBar: this.StatusBar,
        CustomBar: this.CustomBar,
        // 标题
        headerTitle: '',
        // 动画
        toggleDelay: false,
        banner_img,
        user_menu: Cookie.menu()
      }
    },
    computed: {
      ...mapState('base', ['server_static_file']),

      style() {
        var StatusBar = this.StatusBar
        var CustomBar = this.CustomBar
        var style = `height: ${CustomBar}px; padding-top: ${StatusBar}px;`
        return style
      }
    },
    onLoad() {
      this.headerTitle = this.$Route.meta.title
    },
    onShow() {
      this.toggleDelay = true
    },
    beforeRouteLeave(to, from, next) {
      this.toggleDelay = false
      next()
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/animation.css';
  @import './index.scss';
</style>
