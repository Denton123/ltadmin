/**
 * 全局注册通用方法
 */

import Vue from 'vue'

export default {
    install() {
        let host = ''
        /**
         * 将json数据转为tree等级数据
         *
         * @param rowData {Object}
         * @param rowId {String} 需要对比的id
         * @param isIndex {Boolean} key值是index，还是id
         * @returns {Object}
         */
        Vue.prototype.$setTreeData = (rowData, rowId, isIndex) => {
            let data = [...rowData]
            let sortData = []
            let parentIdArr = []
            data.filter((item, idx) => {
                item.children = []
                data.filter((subitem) => {
                    parentIdArr.push(subitem[`${rowId}`])
                    if (item[`${rowId}`] === subitem['parentId']) {
                        item.children.push(subitem)
                    }
                })
                parentIdArr = [...new Set(parentIdArr)]
                if (item.children.length == 0) {
                    delete item.children
                }
                item.key = isIndex ? idx : `${item[`${rowId}`]}`
                item.title = item.name
                item.value = `${item[`${rowId}`]}`
                // console.log(typeof(item.key))
                parentIdArr.indexOf(item['parentId']) == -1 ? sortData.push(item) : ''
            })
            return sortData
        }

    }

}