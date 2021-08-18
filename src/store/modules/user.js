export default {
  // 开启命名空间
  namespaced: true,

  state: {
    // 存储用户信息
    user_info: {}
  },

  mutations: {
    SET_USER_INFO: (state, info) => (state.user_info = info)
  }
}
