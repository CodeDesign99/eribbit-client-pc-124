import { createRouter, createWebHashHistory } from 'vue-router'
// import Home from '../views/Home.vue'

const routes = []
// vue2.0 new VueRouter({}) 创建路由实例
// vue3.0 createRouter({})
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  routes
})

export default router
