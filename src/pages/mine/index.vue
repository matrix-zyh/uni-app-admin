<template>
  <view>
    <view class="bg-image">
      <image src="https://i.loli.net/2021/08/19/ud3erYbg6Pa8ExB.png" />
      <view
        :style="[{ width: '100%', height: CustomBar + 'px' }]"
        style="position: absolute; z-index: 1; top: 0"
      >
        <view :style="style">
          <view
            class="text-white"
            :style="[{ height: '100%', top: StatusBar + 'px' }]"
            style="font-size: 32upx; display: flex; align-items: center; justify-content: center"
            >{{ headerTitle }}</view
          >
        </view>
      </view>
      <view class="statistics">
        <view class="cu-list menu-avatar">
          <view class="cu-item arrow">
            <view
              class="cu-avatar round xl bg-white"
              style="background-image: url(https://i.loli.net/2021/08/19/i9UZneMC2GXlBgt.png)"
            ></view>
            <view class="content">
              <view class="text-white text-lg">
                <text>Matrix</text>
                <text class="shop-sign">作者</text>
              </view>
              <view style="color: #dddae6" class="text-sm flex">
                <view style="font-size: 26upx" class="text-cut"
                  >Email：<text @click="email">matrix.zyh@gmail.com</text></view
                >
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>

    <view v-show="toggleDelay" class="wrap">
      <view
        :style="[{ animationDelay: '0.1s' }]"
        :class="{ 'animation-slide-bottom': toggleDelay }"
        class="wrap-content"
      >
        <view class="cu-list menu">
          <view @click="gitHub" class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/git/GitHub.png" class="png" mode="aspectFit"></image>
              <text class="text-grey">GitHub</text>
            </view>
          </view>
          <view @click="gitee" class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/git/Gitee.png" class="png" mode="aspectFit"></image>
              <text class="text-grey">Gitee</text>
            </view>
          </view>
          <view @click="log" class="cu-item arrow">
            <view class="content">
              <text class="cuIcon-formfill text-green"></text>
              <text class="text-grey">日志</text>
            </view>
          </view>
          <view @click="actionShow = true" class="cu-item arrow">
            <view class="content">
              <text class="cuIcon-appreciatefill text-red"></text>
              <text class="text-grey">赞赏支持</text>
            </view>
          </view>
          <view class="cu-item arrow">
            <button class="cu-btn content" open-type="feedback">
              <text class="cuIcon-writefill text-cyan"></text>
              <text class="text-grey">意见反馈</text>
            </button>
          </view>
          <view @click="about" class="cu-item arrow">
            <view class="content">
              <image src="@/static/images/logo.png" class="png" mode="aspectFit"></image>
              <text class="text-grey">关于 Admin</text>
            </view>
          </view>
        </view>
      </view>
    </view>

    <u-action-sheet v-model="actionShow" :list="actionList" @click="actionOption" />

    <u-tabbar :list="user_menu" :mid-button="false"></u-tabbar>
  </view>
</template>

<script>
  import { mapState } from 'vuex'
  import Cookie from '@utils/cookie'

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
        // 操作菜单 收起/展开
        actionShow: false,
        // 操作菜单列表
        actionList: [{ text: '支付宝' }, { text: '微信' }],
        // TabBar 菜单
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
    methods: {
      /**
       * 复制 Email 地址
       * @author Matrix<matrix.zyh@gmail.com>
       */
      email() {
        uni.setClipboardData({
          data: 'matrix.zyh@gmail.com',
          success: function () {
            uni.$u.toast('Email 已复制！', 1000)
          }
        })
      },

      /**
       * 复制 GitHub 地址
       * @author Matrix<matrix.zyh@gmail.com>
       */
      gitHub() {
        uni.setClipboardData({
          data: 'https://github.com/matrix-zyh/uni-app-admin',
          success: function () {
            uni.$u.toast('GitHub 已复制！', 1000)
          }
        })
      },

      /**
       * 复制 Gitee 地址
       * @author Matrix<matrix.zyh@gmail.com>
       */
      gitee() {
        uni.setClipboardData({
          data: 'https://gitee.com/matrix-zyh/uni-app-admin',
          success: function () {
            uni.$u.toast('Gitee 已复制！', 1000)
          }
        })
      },

      /**
       * log 日志
       * @author Matrix<matrix.zyh@gmail.com>
       */
      log() {
        this.$Router.push({ name: 'log' })
      },

      /**
       * 赞赏支持
       * @author Matrix<matrix.zyh@gmail.com>
       */
      actionOption(index) {
        let urls =
          index === 0
            ? ['https://www.zouyinghao.com/images/pay/alipay.png']
            : ['https://www.zouyinghao.com/images/pay/wechat.png']
        wx.previewImage({
          urls: urls,
          current: urls[0]
        })
      },

      /**
       * 关于 Admin
       * @author Matrix<matrix.zyh@gmail.com>
       */
      about() {
        this.$Router.push({ name: 'about' })
      }
    },
    beforeRouteLeave(to, from, next) {
      if (to.path !== from.path) {
        this.toggleDelay = false
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import '@/static/css/animation.css';
  @import './index.scss';

  .cu-list.menu > .cu-item .content > text[class*='cuIcon'] {
    display: inline-block;
    margin-right: 10upx;
    width: 1.2em;
    font-size: 38upx;
    text-align: center;
  }
</style>
