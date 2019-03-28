// 表单获取数据
import axios from 'axios'
import {
    resolve
} from 'path';

function setTreeData(rowData) {
    let data = [...rowData]
    let sortData = []
    let parentIdArr = []
    data.filter((item, idx) => {
        item.children = []
        data.filter((subitem, subidx) => {
            parentIdArr.push(subitem['deptId'])
            if (item['deptId'] === subitem['parentId']) {
                item.children.push(subitem)
            }
        })
        parentIdArr = [...new Set(parentIdArr)]
        if (item.children.length == 0) {
            delete item.children
        }
        item.key = idx
        item.title = item.name
        parentIdArr.indexOf(item['parentId']) == -1 ? sortData.push(item) : ''
    })
    return sortData
}
export default {
    getDeptData() {
        console.log('hh')
        return new Promise(resolve => {
            axios.get('/api/sys/dept/select/v2').then(res => {
                resolve(setTreeData(res.data.data))
            })
        })

        // console.log(treeData)
        // return []
        // return [{
        //         title: "Node1",
        //         value: "0-0",
        //         key: "0-0",
        //         children: [{
        //                 value: "0-0-1",
        //                 key: "0-0-1",
        //                 scopedSlots: {
        //                     // custom title
        //                     title: "title"
        //                 }
        //             },
        //             {
        //                 title: "Child Node2",
        //                 value: "0-0-2",
        //                 key: "0-0-2"
        //             }
        //         ]
        //     },
        //     {
        //         title: "Node2",
        //         value: "0-1",
        //         key: "0-1"
        //     }
        // ]
    }
}