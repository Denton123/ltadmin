export default {
    'e-longHotelListDetail': {
        title: '艺龙',
        standardOperate: [{
            title: '酒店匹配'
        },{
            title: '房型匹配'
        }],
        theads: {
            supplierTheads: ['酒店艺龙ID', '酒店名称', '城市', '地址', '电话', '挂牌星级', '艺龙推荐星级', '产品最低价', '可用状态', '销售状态', '同步状态', '酒店匹配', '房型匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['物理房型ID', '物理房型名称', '关联的房型编', '产品ID', '产品名称', '销售酒店编码', '付款类型', '最少入住(d)', '最多入住(d)', '最少提前预订(h)', '预付规则', '增值服务', '操作']
        },
        props: {
            supplierProps: ['id', 'name', 'city', 'address', 'phone', 'star', 'recommandstar', 'lowPrice', 'status', 'saleStatus', 'syncStatus', 'hotelMatch', 'roomMatch'],
            standardProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'action'],
            listProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'recommandstar', 'lowPrice', 'status', 'saleStatus','star', 'hotelMatch','action'],
        },
        listOperate: [{
            title: '房间预订'
        }]
    }
}