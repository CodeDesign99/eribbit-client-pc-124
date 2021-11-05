// 定义分类相关的API接口函数
import request from "@/utils/request";

/**
 * 获取所有（顶级，二级，对应商品）
 * @returns Promise
*/

export const findAllCategory = () => {
    return request('/home/category/head','get')
}

/**
 * 获取顶级类目信息
 * @param {String} id - 顶级类目ID
 * @returns Promise
*/

export const findTopCategory = (id) => {
    return request('/category','get',{id})
}

/**
 *  获取二级分类筛选条件数据
 * @param {String} id -  二级分类ID
 * @returns
 */
export const findSubCategoryFilter = (id) => {
  return request('/category/sub/filter', 'get', {id})
}