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
  <HomeNew />
  <!-- 人气推荐 -->
  <HomeHot />
  <!-- 热门品牌 -->
  <HomeBrand />
  <!-- 产品区块 -->
  <HomeProduct />
  <!-- 最新专题 -->
  <HomeSpecial />
</template>

<script>
import HomeCategory from "@/views/home/components/home-category";
import HomeBanner from "@/views/home/components/home-banner";
import HomeNew from "@/views/home/components/home-new";
import HomeHot from "@/views/home/components/home-hot";
import HomeBrand from "@/views/home/components/home-brand";
import HomeProduct from "@/views/home/components/home-product";
import HomeSpecial from "@/views/home/components/home-special";
export default {
  name: "HomePage",
  components: {
    HomeCategory,
    HomeBanner,
    HomeNew,
    HomeHot,
    HomeBrand,
    HomeProduct,
    HomeSpecial
  }
};
</script>

<style scoped lang="less">
@import "../../assets/styles/mixins.less";
</style>
