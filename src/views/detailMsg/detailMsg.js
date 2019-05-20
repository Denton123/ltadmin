export default {
    'e-longHotelListDetail': {
        title: '艺龙',
        standardOperate: [{
            title: '酒店匹配',
            type: 'hotelMatch',
            model: 'e-longHotelMatch'
        },{
            title: '房型匹配',
            type: 'roomMatch',
            model: 'e-longRoomMatch'
        }],
        theads: {
            supplierTheads: ['艺龙酒店ID', '酒店名称', '城市', '地址', '电话', '挂牌星级', '艺龙推荐星级', '产品最低价', '可用状态', '销售状态', '同步状态', '酒店匹配', '房型匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['房型ID', '房型名称', '关联的房型编', '产品ID', '产品名称', '销售酒店编码', '付款类型', '最少入住(d)', '最多入住(d)', '最少提前预订(h)', '预付规则', '增值服务', '操作'],
            innerTheads: ['供应商编码', '房型编码', '产品编码', '产品名称', '早餐', '取消规则', '平均卖价|结算价', '操作'],
            priceTheads: []
        },
        props: {
            supplierProps: ['id', 'name', 'city', 'address', 'phone', 'star', 'recommandstar', 'lowPrice', 'status', 'saleStatus', 'syncStatus', 'hotelMatch', 'roomMatch'],
            standardProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'action'],
            listProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'recommandstar', 'lowPrice', 'status', 'saleStatus','star', 'hotelMatch','action'],
            innerProps: [ 'supplycode', 'roomcode', 'productcode', 'productname', 'breadfast', 'cancelrule', 'price', 'action'],
            priceProps: []
        },
        listOperate: [{
            title: '房间预定',
            type: 'roomOrder',
            model: 'e-longRoomOrder'
        }],
        listTitle: '供应商-产品列表'
    },
    qunarHotelDetail: {
        title: '去哪儿',
        theads: {
            supplierTheads: ['酒店艺龙ID', '酒店名称', '城市', '地址', '电话', '挂牌星级', '艺龙推荐星级', '产品最低价', '可用状态', '销售状态', '同步状态', '酒店匹配', '房型匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
        },
        props: {
            supplierProps: ['id', 'name', 'city', 'address', 'phone', 'star', 'recommandstar', 'lowPrice', 'status', 'saleStatus', 'syncStatus', 'hotelMatch', 'roomMatch'],
            standardProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'action'],
        },
    },
    ctripDetail: {
        title: '携程',
        theads: {
            supplierTheads: ['携程酒店ID', '酒店名称', '酒店英文', '城市ID', '城市名称', '区域ID', '区域名称', '电话', '地址', '是否可售', '酒店匹配状态', '房型匹配数', '酒店同步状态', '客房数量', '酒店星级', '酒店坐标'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['物理房型', '物理房型名称', '销售房型', '销售房型名', '入住当晚价', '房型的数量', '最多入住人数', '礼盒描述', '会员等级描述', '提前预订描述', '入住时长描述', '操作']
        },
        props: {
            supplierProps: [],
            standardProps: ['action'],
            listProps: ['action']
        },
        listOperate: [{
            title: '房间预订',
            type: 'roomOrder',
            model: 'ctripRoomOrder'
        }],
        standardOperate: [{
            title: '酒店匹配',
            type: 'hotelMatch',
            model: 'ctripHotelMatch'
        },{
            title: '房型匹配',
            type: 'roomMatch',
            model: 'ctripRoomMatch'
        }],
        listTitle: '供应商-销售房型列表'
    },
    quhuhuDetail: {
        title: '去呼呼',
        theads: {
            supplierTheads: ['去呼呼酒店ID', '酒店名称', '城市名称', '电话', '地址', '酒店匹配状态', '房型匹配数', '酒店同步状态'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['物理房型ID', '物理房型名称', '床型', '产品房ID', '产品房名称', '早', '最多入住人数', '能否退订', '价格', '日期', '操作']
        },
        props: {
            supplierProps: [],
            standardProps: ['action'],
            listProps: ['action']
        },
        listOperate: [{
            title: '房间预订',
            type: 'roomOrder',
            model: 'quhuhuRoomOrder'
        }],
        standardOperate: [{
            title: '酒店匹配',
            type: 'hotelMatch',
            model: 'quhuhuHotelMatch'
        },{
            title: '房型匹配',
            type: 'roomMatch',
            model: 'quhuhuRoomMatch'
        }],
        listTitle: '供应商-酒店产品'
    },
    meituanDetail: {
        title: '美团',
        theads: {
            supplierTheads: ['美团酒店ID', '酒店名称', '城市', '电话', '地址', '酒店星级', '营业状态', '同步状态', '酒店匹配', '房型匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['产品ID', '产品名称', '产品类型', '平均价格', '市场价格', '房型ID', '房型名称', '取消规则', '礼包信息', '发票信息', '操作']
        },
        props: {
            supplierProps: [],
            standardProps: ['action'],
            listProps: ['action']
        },
        listOperate: [{
            title: '预订',
            type: 'roomOrder',
            model: 'meituanRoomOrder'
        }],
        standardOperate: [{
            title: '酒店匹配',
            type: 'hotelMatch',
            model: 'meituanHotelMatch'
        },{
            title: '房型匹配',
            type: 'roomMatch',
            model: 'meituanRoomMatch'
        }],
        listTitle: '供应商-产品列表'
    }
}