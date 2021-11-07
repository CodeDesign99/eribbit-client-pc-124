<template>
  <div class="sub-category">
    <div class="container">
      <!-- 面包屑 -->
      <SubBread />
      <!-- 筛选区 -->
      <SubFilter />
      <!-- 复选框 -->
      <XtxCheckbox v-model="isAllChecked">全选</XtxCheckbox>{{ isAllChecked }}
    </div>
  </div>
</template>

<script>
import { ref } from "vue-demi";
import SubBread from "./components/sub-bread";
import SubFilter from "./components/sub-filter";
// import XtxCheckBox from "@/components/xtx-checkbox";
export default {
  name: "SubCategory",
  components: { SubBread, SubFilter },
  setup() {
    const isAllChecked = ref(true);
    return { isAllChecked };
  }
};
</script>

<style scoped lang="less"></style>
