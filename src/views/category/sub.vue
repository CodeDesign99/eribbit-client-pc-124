<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区 -->
      <SubFilter />
      <!-- 复选框 -->
      <!-- <XtxCheckbox v-model="isAllChecked">全选</XtxCheckbox>{{ isAllChecked }} -->
      <div class="goods-list">
        <SubSort />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue-demi";
import SubBread from "./components/sub-bread";
import SubFilter from "./components/sub-filter";
import SubSort from "./components/sub-sort";
export default {
  name: "SubCategory",
  components: {
    SubBread,
    SubFilter,
    SubSort
  },
  setup() {
    const isAllChecked = ref(true);
    return { isAllChecked };
  }
};
</script>

<style scoped lang="less">
.goods-list {
  background: #fff;
  padding: 0 25px;
  margin-top: 25px;
}
</style>
