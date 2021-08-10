const ENV = require('@/config/env.' + process.env.NODE_ENV)

export default {
  // 开启命名空间
  namespaced: true,

  state: {
    // 获取服务器静态文件 [图片、文件之类，手动上传，固定的]
    server_static_file: ENV.REQUEST_TYPE
      ? ENV.BASE_API_URL + ENV.SERVER_STATIC_FILE
      : ENV.BASE_IP_API_URL + ENV.SERVER_STATIC_FILE,

    // 获取服务器Icon文件 [图标之类，手动上传，固定的]
    server_static_icon: ENV.REQUEST_TYPE
      ? ENV.BASE_API_URL + ENV.SERVER_STATIC_ICON
      : ENV.BASE_IP_API_URL + ENV.SERVER_STATIC_ICON,

    // 获取服务器上传的文件 [通过接口，上传到服务器的文件]
    server_interface_file: ENV.REQUEST_TYPE
      ? ENV.BASE_API_URL + ENV.SERVER_INTERFACE_FILE
      : ENV.BASE_IP_API_URL + ENV.SERVER_INTERFACE_FILE
  }
}
