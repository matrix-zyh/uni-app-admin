<template>
  <view class="container">
    <image class="logo" src="@/static/images/logo.png" @click="$emit('change')"></image>
    <text class="title text-gray">{{ title }}</text>
  </view>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      title: {
        type: String,
        required: false,
        default: 'Hello World'
      }
    }
  }
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .title {
    font-size: 32rpx;
    margin-top: 50rpx;
  }

  .logo {
    height: 200rpx;
    width: 200rpx;
    margin-top: 200rpx;
  }
</style>
