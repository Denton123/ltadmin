export default {
    'e-longRoomMatch': {
        title: '艺龙',
        theads: {
            supplierTheads: ['艺龙酒店ID', '酒店名称', '城市', '地址', '电话', '经纬度', '酒店匹配', '房型匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['供应商房型ID', '供应商房型信息', '描述', '匹配状态', '标准库房型ID', '标准库房型信息', '标准库房型描述', '操作']
        },
        props: {
            supplierProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'hotelmatch', 'roommatch',],
            standardProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate','action'],
            listProps: ['id', 'name', 'city', 'address', 'phone', 'star', 'recommandstar','action']
        },
        standardOperate: [{
            title: '酒店匹配'
        }],
        listOperate: [{
            title: '酒店匹配'
        }]
    }
}