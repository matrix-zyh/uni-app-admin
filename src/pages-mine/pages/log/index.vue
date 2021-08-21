<template>
  <view>
    <u-navbar
      :title="headerTitle"
      :background="background"
      title-color="#fff"
      back-icon-color="#fff"
    />

    <log-time-line>
      <view slot="version">v0.3.0</view>
      <view slot="date">2021-08-21</view>
      <view>✨ Added project example page</view>
      <u-line color="info" border-style="dashed" :hair-line="false" margin="30rpx 0" />
      <view>✨ 新增 项目示例页面</view>
    </log-time-line>

    <log-time-line>
      <view slot="version">v0.2.0</view>
      <view slot="date">2021-08-18</view>
      <view>✨ Added page path alias setting</view>
      <view>🐛 Fixed router locked judgment condition</view>
      <view>🔥 Remove the "menu" stored in "vuex" and switch to persistent storage</view>
      <u-line color="info" border-style="dashed" :hair-line="false" margin="30rpx 0" />
      <view>✨ 新增 页面路径别名设置</view>
      <view>🐛 修复 路由锁判断条件</view>
      <view>🔥 移除 “vuex”中存储的“menu”，转为持久化存储</view>
    </log-time-line>

    <log-time-line>
      <view slot="version">v0.1.0</view>
      <view slot="date">2021-08-10</view>
      <view
        >🎉 Create mobile cross-platform project template v0.1.0 based on uni-app development</view
      >
      <u-line color="info" border-style="dashed" :hair-line="false" margin="30rpx 0" />
      <view>🎉 创建 基于uni-app开发移动跨平台项目模板v0.1.0</view>
    </log-time-line>
  </view>
</template>

<script>
  import LogTimeLine from '../../../components/LogTimeLine.vue'
  export default {
    components: { LogTimeLine },
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
