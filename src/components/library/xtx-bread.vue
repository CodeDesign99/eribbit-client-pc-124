<script>
import { h } from "vue";
export default {
  name: "XtxBread",
  props: {
    separatorClass: {
      type: String,
      default: "icon-angle-right"
    }
  },
  render() {
    // 用法：
    // 1. vue2.0 的h函数是传参进来的，vue3.0是需要导入进来的
    // 2. 返回值就是组件内容
    // 3. h的第一个参数 标签名称 第二个参数 标签属性对象 第三个参数 子节点
    // 需求：
    // 1. 创建xtx-bread父容器
    // 2. 获取默认插槽内容
    // 3. 去除xtx-bread-item组件中的i标签，应该由render函数来组织
    // 4. 遍历插槽中的item，得到一个动态创建的节点，最后一个item不加i标签
    // 5. 把动态创建的节点渲染在xtx-bread标签中
    const items = this.$slots.default();
    const dymanicItems = [];
    items.forEach((item, i) => {
      dymanicItems.push(item);
      if (i < items.length - 1) {
        dymanicItems.push(h("i", { class: `iconfont ${this.separatorClass}` }));
      }
    });
    return h("div", { class: "xtx-bread" }, dymanicItems);
  }
};
</script>

<style lang="less" scoped>
.xtx-bread {
  display: flex;
  padding: 25px 10px;
  i {
    font-size: 12px;
    margin-left: 5px;
    margin-right: 5px;
    line-height: 22px;
  }
}
</style>
