export default {
  // 开启命名空间
  namespaced: true,

  state: {
    // 存储用户信息
    user_info: {},
    // 存储用户权限菜单
    user_menu: []
  },

  mutations: {
    SET_USER_INFO: (state, info) => (state.user_info = info),
    SET_USER_MENU: (state, menu) => (state.user_menu = menu)
  }
}
