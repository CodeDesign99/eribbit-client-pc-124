// 分类模块
import { topCategory } from '@/api/constants'
import { findAllCategory } from '@/api/category'
export default {
    namespaced: true,
    state () {
        return {
            // 分类信息集合，依赖topCategory重新设置，保证初始化就有数据，不至于白屏
            list: topCategory.map(item => ({name: item}))
        }
    },
    // 修改分类
    mutations: {
        setList (state, payload) {
            state.list = payload
        },
        // 定义show和hide函数，控制当前分类的二级分类显示隐藏
        show(state, id){
            const currCategory = state.list.find(item => item.id === id)
            currCategory.open = true
        },
        hide(state, id){
            const currCategory = state.list.find(item => item.id === id)
            currCategory.open = false
        }
    },
    // 获取分类
    actions: {
        async getList ({ commit }) {
            // 获取分类数据
            const {result} =  await findAllCategory()
            // 给每个分类加上二级控制分类显示隐藏的数据
            result.forEach(top => {
                top.open = false
            });
            // 修改分类数据
            commit('setList', result)
        }
    }
}