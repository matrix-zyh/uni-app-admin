<h1 align="center">Uni App Admin</h1>

<div align="center">

![image](./src/static/images/logo.png)

高效、快速的移动端跨平台应用

[查看 uni-app-admin 文档](https://www.zouyinghao.com/uni-app-admin-docs/)

</div>

## 准备
> 你的本地环境需要安装 yarn、node 和 git。我们的技术栈基于 ES2015+、Vue，提前学习这些知识会非常有帮助。

## 安装
> 克隆项目到本地
>
> ```sh
> $ git clone https://github.com/matrix-zyh/uni-app-admin.git
> $ git clone https://gitee.com/matrix-zyh/uni-app-admin.git
> ```
>
> 安装依赖
>
> ```sh
> $ yarn (强烈推荐使用 yarn)
> or
> $ npm install
> ```

## 项目介绍
> 背景
>
> - `uni-app` 是一个使用 `Vue.js` 开发所有前端应用的框架，开发者编写一套代码，可发布到 `iOS`、`Android`、`Web`（响应式）、以及各种小程序（微信 / 支付宝 / 百度 / 头条 / QQ / 钉钉 / 淘宝）、快应用等多个平台。
>
> UI 框架
>
> - `Color UI`
> - 原因：鲜亮的高饱和色彩，专注视觉的小程序样式库。（`Color UI` 是 `css` 样式库，而非组件库，兼容性更好！）
>
> - `uView UI`
> - 原因：`uView` 是 `uni-app` 生态专用的 UI 框架。`uView` 的目标是成为 `uni-app` 生态最优秀的 UI 框架。
>
> 技术要点
>
> - luch-request: 请求库
> - uni-simple-router: 路由管理
> - Vuex: Vue 状态管理
> - lodash: Javascript 工具类

## 项目运行及打包
> 项目加载依赖
>
> - yarn
>
> 运行微信
>
> - 开发环境
>   - yarn serve
> - 预发布环境
>   - yarn prev:wechat
> - 生产环境
>   - yarn prod:wechat
>
> 运行 H5
>
> - 开发环境
>   - yarn dev:h5
> - 预发布环境
>   - yarn prev:h5
> - 生产环境
>   - yarn prod:h5
>
> 运行 App
>
> - 开发环境
>   - yarn dev:app
> - 预发布环境
>   - yarn prev:app
> - 生产环境
>   - yarn prod:app
>
> 打包部署
>
> - 小程序
>   - yarn build:dev-wechat (开发环境)
>   - yarn build:prev-wechat (预发布环境)
>   - yarn build (生产环境)
> - H5
>   - yarn build:dev-h5 (开发环境)
>   - yarn build:prev-h5 (预发布环境)
>   - yarn build:prod-h5 (生产环境)
> - App
>   - yarn build:dev-app (开发环境)
>   - yarn build:prev-app (预发布环境)
>   - yarn build:prod-app (生产环境)

## 代码校验 及 格式化
> Javascript 语法校验
>
> - yarn lint:eslint
>
> prettier 代码风格格式化
>
> - yarn lint:prettier
>
> HTML CSS 风格格式化
>
> - yarn lint:stylelint

更多使用方式请参考 [使用文档](https://www.zouyinghao.com/uni-app-admin-docs)

## 参与贡献
我们非常欢迎你的贡献，你可以通过以下方式和我们一起共建 :star2:：

- 在你的公司或个人项目中使用 Uni App Admin。
- 通过 [Issue](https://gitee.com/matrix-zyh/uni-app-admin/issues) 报告 :bug: 或进行咨询。
- 提交 [Pull Request](https://gitee.com/matrix-zyh/uni-app-admin/pulls) 改进 Admin 的代码。
- 加入社群，与小伙伴们一同交流心得。
<p style="display: flex;">
  <img src="./src/static/images/group/qqGroup.png" height="320px" style="margin-right: 24px;" />
  <img src="./src/static/images/group/wechatGroup.png" height="320px" style="display: inline-block;" />
</p>

## 快速预览
<div style="display: flex;">
  <div style="display: flex; flex-direction: column; justify-content: space-between; margin-right: 24px;">
    <img src="./src/static/images/code/Admin-WeChat.jpg" width="260px" height="260px" style="margin-right: 24px;" />
    <p style="width: 260px; font-size: 18px; font-weight: bold; text-align: center; margin-top: 15px;">微信小程序</p>
  </div>
  <div style="display: flex; flex-direction: column; justify-content: space-between;">
    <img src="./src/static/images/code/Admin-H5.png" width="260px" height="260px" style="margin-right: 24px;" />
    <p style="width: 260px; font-size: 18px; font-weight: bold; text-align: center; margin-top: 15px;">H5</p>
  </div>
</div>

## 打赏
如果该项目对您有所帮助，可以请作者喝一杯咖啡。

<p style="display: flex;">
  <img src="./src/static/images/pay/aliPay.png" width="260px" style="display: inline-block; margin-right: 24px;" />
  <img src="./src/static/images/pay/wechatPay.png" width="260px" style="display: inline-block;" />
</p>
