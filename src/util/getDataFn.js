// 表单获取数据
import axios from 'axios'
export default {
    getDeptData() {
        // console.log('hhhhh')
        let treeData = []
        let arr, testArr = []
        let obj = {}
        axios.get('/api/sys/dept/select/v2').then(res => {
            console.log(res)
            if (res.data.code == 200) {
                let hasChildren = {}
                let resData = res.data.data
                let l
                for (var i = 0; i < resData.length; i++) {
                    for (var j = i + 1; j < resData.length; j++) {
                        if (resData[i].parentId === resData[j].deptId) {
                            hasChildren = {
                                title: resData[j].name,
                                value: `${resData[j].deptId}`,
                                key: resData[j].deptId
                            }
                            arr.push({
                                title: resData[i].name,
                                value: `${resData[i].deptId}`,
                                key: resData[i].deptId
                            })
                            hasChildren.children = arr
                        } else if (resData[i].deptId == resData[j].parentId) {
                            console.log(resData[i], '=========')
                            console.log(resData[j], '父-----------')
                            // obj = {
                            //     title: resData[j].name,
                            //     value: `${resData[j].deptId}`,
                            //     key: resData[j].deptId
                            // }
                            // testArr.push(obj)
                            // console.log(testArr)

                        }

                    }
                }
                console.log(hasChildren)
            }
        })
        // console.log(treeData)
        return treeData
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