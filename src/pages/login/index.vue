<template>
  <view class="wrap">
    <view class="bg-image">
      <image :src="bg_img" />
    </view>
    <view class="login">
      <view
        :style="[{ animationDelay: '0.1s' }]"
        :class="{ 'animation-slide-bottom': toggleDelay }"
        class="title"
        >账号密码登陆</view
      >
      <view
        :style="[{ animationDelay: '0.2s' }]"
        :class="{ 'animation-slide-bottom': toggleDelay }"
      >
        <u-form
          :model="form"
          ref="uForm"
          label-position="top"
          :error-type="['message', 'border-bottom']"
        >
          <u-form-item prop="username">
            <u-input v-model="form.username" placeholder="请输入账号/admin" />
          </u-form-item>
          <u-form-item prop="password">
            <u-input type="password" v-model="form.password" placeholder="请输入密码/123456" />
          </u-form-item>
        </u-form>
      </view>
      <view
        :style="[{ animationDelay: '0.3s' }]"
        :class="{ 'animation-slide-bottom': toggleDelay }"
        style="margin-top: 120upx"
      >
        <button
          class="cu-btn round block button-purple margin-tb-sm lg"
          :loading="loading"
          @click="$u.throttle(loginIn)"
        >
          登录
        </button>
      </view>
    </view>
  </view>
</template>

<script>
  import Cookie from '@utils/cookie'
  import { randomUUID } from '@utils/tools'
  import { bg_img } from '@mock/base64'
  import menu from '@mock/menu'

  export default {
    data() {
      return {
        // loading 加载
        loading: false,
        // 动画
        toggleDelay: false,
        // 表单数据
        form: {
          // 账号
          username: 'admin',
          // 密码
          password: '123456'
        },
        // 校验规则
        rules: {
          username: [{ required: true, message: '请输入账号！', trigger: 'blur' }],
          password: [{ required: true, message: '请输入密码！', trigger: 'blur' }]
        },
        bg_img
      }
    },
    onShow() {
      this.toggleDelay = true
    },
    methods: {
      /**
       * 模拟服务请求
       * @author Matrix<matrix.zyh@gmail.com>
       */
      fetchMenu() {
        const data = {
          menu: menu,
          token: randomUUID()
        }
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(data)
          }, 1000)
        })
      },

      /**
       * 登录
       * @author Matrix<matrix.zyh@gmai.com>
       */
      loginIn() {
        this.$refs.uForm.validate(async (valid) => {
          if (valid) {
            const { username, password } = this.form
            if (username === 'admin' && password === '123456') {
              this.loading = true
              const value = await this.fetchMenu()
              this.afterLogin(value)
              this.loading = false
            } else {
            }
          }
        })
      },

      /**
       * 登录成功后进行的操作
       * @param {Object} record 服务端返回的用户数据
       * @author Matrix<matrix.zyh@gmai.com>
       */
      afterLogin(record) {
        Cookie.set('menu', record.menu)
        Cookie.set('access_token', record.token)
        this.$Router.pushTab({ name: 'home' })
      }
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
