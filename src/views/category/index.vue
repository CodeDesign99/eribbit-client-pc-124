<template>
  <div class="top-category">
    <div class="container">
      <!-- 渲染面包屑导航 -->
      <XtxBread>
        <XtxBreadItem to="/">首页</XtxBreadItem>
        <XtxBreadItem v-if="topCategory">{{ topCategory.name }}</XtxBreadItem>
      </XtxBread>
      <!-- 轮播图 -->
      <XtxCarousel :sliders="sliders" style="height:500px" />
      <!-- 所有二级分类 -->
      <div class="sub-list" v-if="topCategory && topCategory.children">
        <h3>全部分类</h3>
        <ul>
          <li v-for="sub in topCategory.children" :key="sub.id">
            <a href="javascript:;">
              <img :src="sub.picture" />
              <p>{{ sub.name }}</p>
            </a>
          </li>
        </ul>
      </div>
      <!-- 各个分类下推荐商品 -->
    </div>
  </div>
</template>

<script>
import { computed, ref } from "vue";
import { findBanner } from "@/api/home";
import xtxCarousel from "@/components/library/xtx-carousel.vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
export default {
  components: { xtxCarousel },
  name: "TopCategory",
  setup() {
    // 轮播图
    const sliders = ref([]);
    findBanner().then(data => {
      sliders.value = data.result;
    });

    // 面包屑+子分类 ==> vuex
    const store = useStore();
    const route = useRoute();
    const topCategory = computed(() => {
      // 当前顶级分类 === 根据路由上的ID去vuex中category模块的list中查找
      return store.state.category.list.find(item => {
        return item.id === route.params.id;
      });
    });

    return { sliders, topCategory };
  }
};
</script>

<style scoped lang="less">
.top-category {
  h3 {
    font-size: 28px;
    color: #666;
    font-weight: normal;
    text-align: center;
    line-height: 100px;
  }
  .sub-list {
    margin-top: 20px;
    background-color: #fff;
    ul {
      display: flex;
      padding: 0 32px;
      flex-wrap: wrap;
      li {
        width: 168px;
        height: 160px;
        a {
          text-align: center;
          display: block;
          font-size: 16px;
          img {
            width: 100px;
            height: 100px;
          }
          p {
            line-height: 40px;
          }
          &:hover {
            color: @xtxColor;
          }
        }
      }
    }
  }
}
</style>
