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
        props: ['city', 'hotelId', 'name', 'address', 'hotel', 'actions' ]
    }
}