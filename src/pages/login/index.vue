<template>
  <view class="wrap">
    <u-navbar :is-back="false" :title="headerTitle" :background="background" title-color="#fff" />

    <view class="top"></view>
    <view class="content">
      <view class="title">欢迎登录</view>
      <input class="u-border-bottom" type="number" v-model="tel" placeholder="请输入手机号" />
      <view class="tips">未注册的手机号验证后自动创建</view>
      <button @tap="submit" :style="[inputStyle]" class="getCaptcha"> 登 录 </button>
      <view class="alternative">
        <view class="password">密码登录</view>
        <view class="issue">遇到问题</view>
      </view>
    </view>
    <view class="buttom">
      <view class="loginType">
        <view class="wechat item">
          <view class="icon"
            ><u-icon size="70" name="weixin-fill" color="rgb(83,194,64)"></u-icon
          ></view>
          微信
        </view>
        <view class="QQ item">
          <view class="icon"
            ><u-icon size="70" name="qq-fill" color="rgb(17,183,233)"></u-icon
          ></view>
          QQ
        </view>
      </view>
      <view class="hint">
        登录代表同意
        <text class="link">美团点评用户协议、隐私政策，</text>
        并授权使用您的美团点评账号信息（如昵称、头像、收获地址）以便您统一管理
      </view>
    </view>
  </view>
</template>

<script>
  import menu from '@mock/menu'
  import { randomUUID } from '@utils/tools'
  import cookie from '@utils/cookie'

  export default {
    data() {
      return {
        // 标题
        headerTitle: '',
        // 自定义 navBar 导航样式
        background: {
          'background-image': 'linear-gradient(45deg, rgb(236, 0, 140), rgb(103, 57, 182))'
        },
        tel: '18888888888'
      }
    },
    computed: {
      inputStyle() {
        let style = {}
        if (this.tel) {
          style.color = '#fff'
          style.backgroundColor = this.$u.color['warning']
        }
        return style
      }
    },
    onLoad() {
      this.headerTitle = this.$Route.meta.title
    },
    methods: {
      /**
       * 模拟服务请求
       * @author Matrix<matrix.zyh@gmail.com>
       */
      fetchMenu() {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(menu)
          }, 1000)
        })
      },

      /**
       * 确认登录
       * @author Matrix<matrix.zyh@gmail.com>
       */
      async submit() {
        if (this.$u.test.mobile(this.tel)) {
          // 从后台获取 TabBar 菜单
          this.$matrix.loading()
          const MENU = await this.fetchMenu()
          this.$matrix.loading(false)

          // 模拟存储 access_token
          cookie.set('access_token', randomUUID())
          cookie.set('menu', MENU)

          this.$Router.pushTab({ name: 'home' })
        } else {
          this.$u.toast('请输入合法的手机号码！')
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .wrap {
    font-size: 28rpx;

    .content {
      width: 600rpx;
      margin: 200rpx auto 0;

      .title {
        text-align: left;
        font-size: 60rpx;
        font-weight: 500;
        margin-bottom: 100rpx;
      }

      input {
        text-align: left;
        margin-bottom: 10rpx;
        padding-bottom: 6rpx;
      }

      .tips {
        color: $u-type-info;
        margin-bottom: 60rpx;
        margin-top: 15rpx;
      }

      .getCaptcha {
        background-color: rgb(253, 243, 208);
        color: $u-tips-color;
        border: none;
        font-size: 30rpx;
        padding: 12rpx 0;

        &::after {
          border: none;
        }
      }

      .alternative {
        color: $u-tips-color;
        display: flex;
        justify-content: space-between;
        margin-top: 30rpx;
      }
    }

    .buttom {
      .loginType {
        display: flex;
        padding: 350rpx 150rpx 150rpx 150rpx;
        justify-content: space-between;

        .item {
          display: flex;
          flex-direction: column;
          align-items: center;
          color: $u-content-color;
          font-size: 28rpx;
        }
      }

      .hint {
        padding: 20rpx 40rpx;
        font-size: 20rpx;
        color: $u-tips-color;

        .link {
          color: $u-type-warning;
        }
      }
    }
  }
</style>
