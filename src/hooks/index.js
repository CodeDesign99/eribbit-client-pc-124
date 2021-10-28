// 提供复用逻辑函数（钩子）
import { ref } from "vue"
import { useIntersectionObserver } from "@vueuse/core"
/**
 * 数据懒加载函数
 * @param {Element} target - Dom对象
 * @param {function} apiFn - APi函数
 */
export const useLazyData = (target, apiFn) => {
    const result = ref([])
    // stop 停止观察
    const { stop } = useIntersectionObserver(
        // 监听目标
      target,
      ([{ isIntersecting }], observerElement) => {
        // isIntersecting 是否进入可视区
        if(isIntersecting){
            stop()
            // 调用API函数获取数据
            apiFn().then(data => {
                result.value = data.result
            })
        }
      },
      // 配置选项
      { 
        // 可视区与元素相交的比例
        threshold: 0
      }
    )
    return result
}