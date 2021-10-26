<template>
  <!-- 首页入口 （分类+广告） -->
  <div class="home-entry">
    <div class="container">
      <!-- 左侧分类 -->
      <HomeCategory />
      <!-- 轮播图 -->
      <HomeBanner />
    </div>
  </div>
  <!-- 新鲜好物 -->
  <!-- 人气推荐 -->
</template>

<script>
import HomeCategory from "@/views/home/components/home-category";
import HomeBanner from "@/views/home/components/home-banner";
export default {
  name: "HomePage",
  components: {
    HomeCategory,
    HomeBanner
  }
};
</script>

<style scoped lang="less">
@import "../../assets/styles/mixins.less";
</style>
