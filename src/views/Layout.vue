<template>
  <!-- 顶部通栏 -->
  <AppNavbar />
  <!-- 头部组件 -->
  <AppHeader />
  <!-- 内容容器 -->
  <main class="app-body">
    <!-- 二级路由 -->
  </main>
  <!-- 底部组件 -->
  <AppFooter />
</template>
<script>
import AppNavbar from "@/components/app-navbar";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
export default {
  name: "Layout",
  components: {
    AppNavbar,
    AppHeader,
    AppFooter
  }
};
</script>
<style scoped lang="less">
.app-body {
  min-height: 600px;
}
</style>
