import newModalBtn from '@/components/public/newModalBtn'

export default {
    'e-longHotelMatch': {
        title: '艺龙',
        hotelMatchCardTag: [{
            title: '艺龙-待匹配酒店信息',
            tag: {
                city: '城市',
                hotelId: '供应商酒店ID',
                name: '名称',
                address: '地址',
                phone: '电话',
                coordinate: '经纬度'
            },
            dataFlag: 'hotel',
            hasBtn: true
        }, {
            title: '标准库-已匹配酒店信息',
            tag: {
                city: '城市',
                hotelId: '供应商酒店ID',
                name: '名称',
                address: '地址',
                phone: '电话',
                coordinate: '经纬度'
            },
            dataFlag: 'standard',
            hasBtn: false
        }],
        theads: ['城市', '标准库酒店ID', '酒店名称', , '地址电话', '已匹配供应商酒店', '操作'],
        props: ['city', 'hotelId', 'name', 'address', 'hotel', 'actions']
    },
    ctripHotelMatch: {
        title: '携程',
        hotelMatchCardTag: [{
            title: '携程-待匹配酒店信息',
            tag: {
                city: '城市',
                hotelId: '供应商酒店ID',
                name: '名称',
                address: '地址',
                phone: '电话',
                coordinate: '经纬度'
            },
            dataFlag: 'hotel',
            hasBtn: true
        }, {
            title: '标准库-已匹配酒店信息',
            tag: {
                city: '城市',
                hotelId: '供应商酒店ID',
                name: '名称',
                address: '地址',
                phone: '电话',
                coordinate: '经纬度'
            },
            dataFlag: 'standard',
            hasBtn: false
        }],
        theads: ['城市', '标准库酒店ID', '酒店名称', , '地址电话', '已匹配供应商酒店', '操作'],
        props: ['city', 'hotelId', 'name', 'address', 'hotel', 'action']
    },
    quhuhuHotelMatch: {
        title: '去呼呼',
        hotelMatchCardTag: [{
            title: '去呼呼-待匹配酒店信息',
            tag: {
                city: '城市',
                hotelId: '供应商酒店ID',
                name: '名称',
                address: '地址',
                phone: '电话',
                coordinate: '经纬度'
            },
            dataFlag: 'hotel',
            hasBtn: true
        }, {
            title: '标准库-已匹配酒店信息',
            tag: {
                city: '城市',
                hotelId: '供应商酒店ID',
                name: '名称',
                address: '地址',
                phone: '电话',
                coordinate: '经纬度'
            },
            dataFlag: 'standard',
            hasBtn: false
        }],
        theads: ['城市', '标准库酒店ID', '酒店名称', , '地址电话', '已匹配供应商酒店', '操作'],
        props: ['city', 'hotelId', 'name', 'address', 'hotel', 'actionModal'],
        typeComponent: [{
            component: newModalBtn,
            params: {
                btnDesc: '新建标准化酒店',
                title: '新建标准化酒店',
                infoTitle: '是否以供应商的待匹配酒店信息为基础创建御道标准化酒店？',
                okText: '确认新建'
            }
        }],
        actionOperate: [{
            title: '提供匹配',
            params: {
                title: '酒店匹配确认',
                infoTitle: '是否将以下供应商酒店与标准库酒店进行匹配？',
                okText: '确认匹配'
            }
        }]
    },
    meituanHotelMatch: {
        title: '美团',
        hotelMatchCardTag: [{
            title: '美团-待匹配酒店信息',
            tag: {
                city: '城市',
                hotelId: '供应商酒店ID',
                name: '名称',
                address: '地址',
                phone: '电话',
                coordinate: '经纬度'
            },
            dataFlag: 'hotel',
            hasBtn: true
        }, {
            title: '标准库-已匹配酒店信息',
            tag: {
                city: '城市',
                hotelId: '系统酒店ID',
                name: '名称',
                address: '地址',
                phone: '电话',
                coordinate: '经纬度'
            },
            dataFlag: 'standard',
            hasBtn: false
        }],
        theads: ['城市', '标准库酒店ID', '酒店名称', , '地址电话', '已匹配供应商酒店', '操作'],
        props: ['city', 'hotelId', 'name', 'address', 'hotel', 'action']
    }
}