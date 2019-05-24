export default {
    'e-longRoomMatch': {
        title: '艺龙',
        theads: {
            supplierTheads: ['艺龙酒店ID', '酒店名称', '城市', '地址', '电话', '经纬度', '酒店匹配', '房型匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['供应商房型ID', '供应商房型信息', '描述', '匹配状态', '标准库房型ID', '标准库房型信息', '标准库房型描述', '操作']
        },
        props: {
            supplierProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'hotelmatch', 'roommatch', ],
            standardProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'action'],
            listProps: ['id', 'name', 'city', 'address', 'phone', 'star', 'recommandstar', 'action']
        },
        standardOperate: [{
            title: '酒店匹配',
            type: 'hotelMatch',
            model: 'e-longHotelMatch'
        }],
        modifyOperate: [{
            title: '修改匹配'
        }],
        listOperate: {
            selectOption: [{
                value: '豪华大床房',
                title: '豪华大床房'
            }, {
                value: '时尚标准房',
                title: '时尚标准房'
            }],
            operateBtn: [{
                title: '提交匹配',
                params: {
                    title: '房型匹配确认',
                    infoTitle: '是否将以下供应商酒店与标准库酒店进行匹配？',
                    okText: '确认匹配',
                    hotelMatchCardTag: [{
                            title: '艺龙-待匹配酒店房型信息',
                            tag: {
                                roomID: '供应商房型ID',
                                roomname: '供应商房型名称',
                                roominfo: '供应商房型信息',
                                roomstatement: '供应商房型描述'
                            },
                            dataFlag: 'hotel',
                        },
                        {
                            title: '标准房-酒店房型信息',
                            tag: {
                                roomID: '标准房型ID',
                                roomname: '标准房型名称',
                                roominfo: '标准房型信息',
                                roomstatement: '标准房型描述'
                            },
                            dataFlag: 'standard',
                        }
                    ]
                },

            }, {
                title: '新增标准房型',
                params: {
                    title: '新建标准房型',
                    infoTitle: '是否将以下供应商酒店房型创建为标准库酒店房型并进行匹配？',
                    okText: '确认创建',
                    hotelMatchCardTag: [{
                            title: '艺龙-待匹配酒店房型信息',
                            tag: {
                                roomID: '供应商房型ID',
                                roomname: '供应商房型名称',
                                roominfo: '供应商房型信息',
                                roomstatement: '供应商房型描述'
                            },
                            dataFlag: 'hotel',
                        },
                        {
                            title: '标准房-新建酒店房型信息',
                            tag: {
                                roomID: '标准房型ID',
                                roomname: '标准房型名称',
                                roominfo: '标准房型信息',
                                roomstatement: '标准房型描述'
                            },
                            dataFlag: 'standard',
                        }
                    ]
                },

            }]
        },
        hotelMatchCardTag: [{
                title: '艺龙-待匹配酒店房型信息',
                tag: {
                    roomID: '供应商房型ID',
                    roomname: '供应商房型名称',
                    roominfo: '供应商房型信息',
                    roomstatement: '供应商房型描述'
                },
                dataFlag: 'hotel',
            },
            {
                title: '标准房-酒店房型信息',
                tag: {
                    roomID: '标准房型ID',
                    roomname: '标准房型名称',
                    roominfo: '标准房型信息',
                    roomstatement: '标准房型描述'
                },
                dataFlag: 'standard',
            }
        ]
    },
    ctripRoomMatch: {
        title: '携程',
        theads: {
            supplierTheads: ['携程酒店ID', '酒店名称', '城市', '地址', '电话', '经纬度', '酒店匹配', '房型匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['供应商房型ID', '供应商房型信息', '描述', '匹配状态', '标准库房型ID', '标准库房型信息', '标准库房型描述', '操作']
        },
        props: {
            supplierProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'hotelmatch', 'roommatch', ],
            standardProps: ['id', 'name', 'city', 'address', 'phone', 'coordinate', 'action'],
            listProps: ['id', 'name', 'city', 'address', 'phone', 'star', 'recommandstar', 'action']
        },
        standardOperate: [{
            title: '酒店匹配',
            type: 'hotelMatch',
            model: 'ctripHotelMatch'
        }],
    },
    quhuhuRoomMatch: {
        title: '去呼呼',
        theads: {
            supplierTheads: ['去呼呼酒店ID', '酒店名称', '城市', '地址', '电话', '酒店匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['供应商房型ID', '供应商房型信息', '描述', '匹配状态', '标准库房型ID', '标准库房型信息', '操作']
        },
        props: {
            supplierProps: [],
            standardProps: [],
            listProps: ['action']
        },
        standardOperate: [{
            title: '酒店匹配',
            type: 'hotelMatch',
            model: 'quhuhuHotelMatch'
        }],
    },
    meituanRoomMatch: {
        title: '美团',
        theads: {
            supplierTheads: ['美团酒店ID', '酒店名称', '城市', '地址', '电话', '经纬度', '酒店匹配', '房型匹配'],
            standardTheads: ['标准酒店ID', '标准酒店名称', '城市', '地址', '电话', '经纬度', '操作'],
            listTheads: ['供应商房型ID', '供应商房型信息', '描述', '匹配状态', '标准库房型ID', '标准库房型信息', '标准库房型描述', '操作']
        },
        props: {
            supplierProps: [],
            standardProps: [],
            listProps: ['action']
        },
        standardOperate: [{
            title: '酒店匹配',
            type: 'hotelMatch',
            model: 'quhuhuHotelMatch'
        }],
    }
}