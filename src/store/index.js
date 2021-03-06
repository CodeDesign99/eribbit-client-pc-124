import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import cart from './modules/cart'
import user from './modules/user'
import category from './modules/category'

// vue2.0 创建仓库 new Vuex.Store({})
export default createStore({
  modules: {
    cart,
    user,
    category
  },
  //配置插件
  plugins: [
    createPersistedState({
      // 本地存储名字
      key: 'erabbit-client-pc-124-store',
      // 指定需要存储的模块
      paths: ['user', 'cart']
    })
  ]
})
