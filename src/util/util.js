/**
 * 全局注册通用方法
 */

import Vue from 'vue'

export default {
    install() {
        let host = ''
        Vue.prototype.$adminUrl = (url) => {
            let regx = /^\/{1,}/g
            url = url && url.replace(regx, '')
            return host + '/api/' + url
        }
        Vue.prototype.$setTreeData = (rowData, rowId, isIndex) => {
            let data = [...rowData]
            let sortData = []
            let parentIdArr = []
            data.filter((item, idx) => {
                item.children = []
                data.filter((subitem, subidx) => {
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
                parentIdArr.indexOf(item['parentId']) == -1 ? sortData.push(item) : ''
            })
            return sortData
        }

    }

}