export default {
    'e-longRoomOrder': {
        title: '艺龙',
        theads: {
            supplierTheads: ['艺龙酒店ID', '酒店名称', '城市', '地址', '电话', '酒店星级', '可用状态', '同步状态', '酒店匹配', '房型匹配'],
            roomTheads: ['房型ID', '房型名称', '楼层｜面积｜最少入住人数', '描述', '价格计划ID', '价格计划名称', '增值服务', '预定规则'],
            listTheads: ['日期', '建议售卖价', '实际售卖价', '房间数量'],
            priceTheads: []
        },
        props: {
            supplierProps: [],
            roomProps: [],
            listProps: [],
            priceProps: []
        },
        orderComponent: [
            {
                type: 'time',
                checkInName: 'checkInTime',
                checkOutName: 'checkOutTime'
            },
            {
                type: 'num',
                name: 'num',
                label: '房间数量',
                options: [{
                    key: '1',
                    value: 1
                },{
                    key: '2',
                    value: 2
                },{
                    key: '3',
                    value: 3
                },{
                    key: '4',
                    value: 4
                }]
            },
            {
                type: 'name',
                name: 'username',
                label: '入住人姓名'
            },
            {
                type: 'text',
                placeholder: '联系人姓名',
                name: 'name',
                label: '联系人姓名'
            },
            {
                type: 'text',
                placeholder: '手机号码',
                name: 'mobile',
                label: '手机号码'
            }
        ]
    },
    ctripRoomOrder: {
        title: '携程',
        theads: {
            supplierTheads: ['携程酒店ID', '酒店名称', '城市', '地址', '电话', '酒店星级', '是否可售', '同步状态', '酒店匹配', '房型匹配'],
            roomTheads: ['物理房型ID', '房型名称', '床型名称','楼层｜面积｜最少入住人数', '描述', '销售房型ID', '房型名称', '床型名称', '礼包描述', '预定规则'],
            listTheads: ['日期', '建议售卖价', '实际售卖价', '房间数量']
        },
        props: {
            supplierProps: [],
            roomProps: [],
            listProps: []
        },
    },
    quhuhuRoomOrder: {
        title: '去呼呼',
        theads: {
            supplierTheads: ['去呼呼酒店ID', '酒店名称', '城市名称', '电话', '地址', '酒店匹配状态', '房型匹配数', '酒店同步状态'],
            roomTheads: ['物理房型ID', '物理房型名称', '床型', '销售房型ID', '销售房型名称', '床型', '早参数', '是否可退订'],
            // listTheads: ['日期', '建议售卖价', '实际售卖价', '房间数量']
        },
        props: {
            supplierProps: [],
            roomProps: [],
            // listProps: []
        },
        orderComponent: [
            {
                type: 'time',
                checkInName: 'checkInTime',
                checkOutName: 'checkOutTime'
            },
            {
                type: 'num',
                name: 'num',
                label: '房间数量',
                options: [{
                    key: '1',
                    value: 1
                },{
                    key: '2',
                    value: 2
                },{
                    key: '3',
                    value: 3
                },{
                    key: '4',
                    value: 4
                }]
            },
            {
                type: 'name',
                name: 'username'
            },
            {
                type: 'text',
                placeholder: '联系人姓名',
                name: 'name',
                label: '联系人姓名'
            },
            {
                type: 'text',
                placeholder: '手机号码',
                name: 'mobile',
                label: '手机号码'
            },
        ]
    }
}