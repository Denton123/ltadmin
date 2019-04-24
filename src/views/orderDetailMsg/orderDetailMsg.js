export default {
    orderListDetail: {
        theads: ['时间', '备注来源', '备注人', '描述'],
        props: ['time', 'source', 'person', 'statement'],
        cardTag: [{
                title: '飞猪-订单信息',
                tag: {
                    orderID: '淘宝订单id',
                    orderStatus: '订单状态',
                    hotelName: '酒店名称',
                    hotelAddress: '酒店地址'
                }
            },
            {
                title: '系统订单信息',
                tag: {
                    orderID: '系统订单id',
                    orderStatus: '订单状态',
                    hotelName: '系统酒店名称',
                    hotelAddress: '系统酒店地址'
                }
            },
            {
                title: '艺龙-订单信息',
                tag: {
                    orderID: '订单id',
                    orderStatus: '订单状态',
                    hotelName: '酒店名称',
                    hotelAddress: '酒店地址'
                }
            }
        ]
    },
    meituanorderDetail: {
        theads: ['时间', '备注来源', '备注人', '描述'],
        props: ['time', 'source', 'person', 'statement'],
        cardTag: [{
                title: '分销商-订单信息',
                tag: {
                    orderID: '淘宝订单id',
                    orderStatus: '订单状态',
                    hotelName: '酒店名称',
                    hotelAddress: '酒店地址'
                }
            },
            {
                title: '系统订单信息',
                tag: {
                    orderID: '系统订单id',
                    orderStatus: '订单状态',
                    hotelName: '系统酒店名称',
                    hotelAddress: '系统酒店地址'
                }
            },
            {
                title: '供应商-订单信息',
                tag: {
                    orderID: '订单id',
                    orderStatus: '订单状态',
                    hotelName: '酒店名称',
                    hotelAddress: '酒店地址'
                }
            }
        ]
    }
}