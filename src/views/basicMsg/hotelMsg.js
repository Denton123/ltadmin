/* 酒店管理数据*/
export default {
    'e-longHotelList': [{
        key: 'e-longHotelList',
        tab: '艺龙酒店列表',
        theads: ['艺龙酒店id', '酒店名称', '城市', '地址电话', '房型|产品数量', '产品最低价', '可用状态', '销售状态', '同步状态', '酒店匹配', '房型匹配', '操作'],
        props: ['hotelId', 'name', 'city', 'address', 'lowPrice', 'hotelListStatusChn', 'hotelDetailStatusChn', 'syncStatusChn', 'matchStatusChn', 'roomMatchChn', 'roomMatch', 'action'],
        SearchComponent: [{
                type: 'text',
                label: '国内城市',
                placeholder: '请输入城市名称',
                name: 'city'
            },
            {
                type: 'text',
                label: '关键词',
                placeholder: '酒店名称/地址',
                name: 'city2'
            },
            {
                type: 'text',
                label: '酒店ID',
                placeholder: '请输入艺龙酒店ID',
                name: 'hotelId'
            },
            {
                type: 'num',
                label: '产品最低价',
                startName: 'startNum',
                endName: 'endNum'
            },
            {
                type: 'select',
                label: '同步状态',
                name: 'syncStatus',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '同步'
                    },
                    {
                        value: '不同步'
                    }
                ]
            },
            {
                type: 'select',
                label: '酒店匹配状态',
                name: 'hotelListStatus',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '已匹配'
                    },
                    {
                        value: '不匹配'
                    }
                ]
            },
            {
                type: 'num',
                label: '房型数量',
                startName: 'startNum',
                endName: 'endNum'
            },
            {
                type: 'select',
                label: '酒店可用状态',
                name: 'hotelStatus',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '可用'
                    },
                    {
                        value: '不可用'
                    }
                ]
            },
            {
                type: 'select',
                label: '房型匹配状态',
                name: 'roomMatchStatus',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '完全匹配'
                    },
                    {
                        value: '部分匹配'
                    },
                    {
                        value: '待匹配'
                    }
                ]
            },
            {
                type: 'num',
                label: '产品数量',
                startName: 'startNum',
                endName: 'endNum'
            },
            {
                type: 'select',
                label: '酒店销售状态',
                name: 'hotelStatus',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '可售'
                    },
                    {
                        value: '不可售'
                    }
                ]
            }
        ],
        searchResultMsg: [{
                tab: '【酒店】',
                tag: {
                    hotelTotal: '全部酒店数量',
                    hotelUsableTotal: '可用',
                    hotelMatchTotal: '可售',
                    hotelOpenTotal: '已同步',
                    hotelSyncTotal: '已匹配',
                }
            },
            {
                tab: '【房型】',
                tag: {
                    hotelMatchTotal: '全部酒店数量',
                    hotelOpenTotal: '已匹配',
                }
            },
            {
                tab: '【产品】',
                tag: {
                    hotelMatchTotal: '全部产品数量',
                }
            }
        ],
        tableOperate: [{
                title: '酒店详情',
                type: 'detail',
                model: 'e-longHotelListDetail'
            },
            {
                title: '酒店匹配',
                type: 'hotelMatch',
                model: 'e-longHotelMatch'
            },
            {
                title: '房型匹配',
                type: 'roomMatch',
                model: 'e-longRoomMatch'
            }
        ]
    }],
    qunarHotelList: [{
        key: 'qunarHotelList',
        tab: '去哪儿酒店列表',
        theads: ['发现假期酒店ID', '酒店名称', '城市', '地址电话', '房型数量', '操作'],
        props: ['hotelId', 'name', 'city', 'phone', 'roomTotal', 'action'],
        SearchComponent: [{
                type: 'text',
                label: '国内城市',
                placeholder: '请输入城市名称',
                name: 'city'
            },
            {
                type: 'text',
                label: '关键词',
                placeholder: '酒店名称/地址',
                name: 'city2'
            },
            {
                type: 'text',
                label: '酒店ID',
                placeholder: '请输入艺龙酒店ID',
                name: 'hotelId'
            },
        ],
        tableOperate: [{
            title: '酒店详情',
            type: 'detail',
            model: 'qunarHotelDetail'
        }]
    }],
    orderList: [{
        key: 'orderList',
        tab: '订单列表',
        theads: ['订单创建时间', '系统订单id', '供应商订单', '销售平台订单', '酒店名称', '房型名称', '入住日期', '离店日期', '房间数量', '总价', '订单状态', '联系人姓名', '联系人电话', '跟单人', '操作'],
        props: ['orderdate', 'name', 'address', 'order', 'hotelName', 'roomName', 'date', 'passdate', 'num', 'price', 'status', 'username', 'phone', 'person', 'action'],
        SearchComponent: [{
                type: 'text',
                label: '系统订单id',
                placeholder: '请输入系统订单id',
                name: 'city'
            },
            {
                type: 'text',
                label: '供应商订单id',
                placeholder: '请输入供应商订单id',
                name: 'city2'
            },
            {
                type: 'text',
                label: '销售平台订单id',
                placeholder: '请输入销售平台订单id',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '酒店名称',
                placeholder: '请输入酒店名称',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '联系人姓名',
                placeholder: '请输入联系人姓名',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '联系人电话',
                placeholder: '请输入联系人电话',
                name: 'hotelId'
            },
            {
                type: 'select',
                label: '订单状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '同步'
                    },
                    {
                        value: '不同步'
                    }
                ]
            },
            {
                type: 'select',
                label: '供应商',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '已匹配'
                    },
                    {
                        value: '不匹配'
                    }
                ]
            },
            {
                type: 'select',
                label: '分销平台',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '可用'
                    },
                    {
                        value: '不可用'
                    }
                ]
            },
            {
                type: 'select',
                label: '分销商',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '完全匹配'
                    },
                    {
                        value: '部分匹配'
                    },
                    {
                        value: '待匹配'
                    }
                ]
            },
            {
                type: 'date',
                label: '订单日期',
                startDate: 'startDate',
                endDate: 'endDate',
            },
            {
                type: 'date',
                label: '入住日期',
                startDate: 'startDate',
                endDate: 'endDate',
            }
        ],
        tableOperate: [{
                title: '订单详情',
                type: 'orderDetail',
                model: 'orderListDetail'
            },
            {
                title: '跟单',
                type: 'orderDocumentary',
                model: 'orderListDocumentary'
            }
        ]
    }],
    ctripOrder: [{
        key: 'ctripOrder',
        tab: '携程下单',
        theads: ['日期日期日期', '名称名称名称', '地址地址地址地址地址', '地址', '操作'],
        props: ['date', 'name', 'address'],
    }],
    ctripList: [{
        key: 'ctripList',
        tab: '携程酒店列表',
        theads: ['携程酒店id', '酒店名称', '城市名称', '区域名称', '电话', '酒店地址', '酒店是否可定', '酒店星级', '酒店匹配状态', '房型匹配数量', '房型数量', '酒店同步状态', '酒店等级', '操作'],
        props: ['date', 'name', 'address', 'action'],
        tableOperate: [{
                title: '酒店详情',
                type: 'detail',
                model: 'ctripDetail'
            },
            {
                title: '酒店匹配',
                type: 'hotelMatch',
                model: 'ctripHotelMatch'
            },
            {
                title: '房型匹配',
                type: 'roomMatch',
                model: 'ctripRoomMatch'
            }
        ],
        searchResultMsg: [{
                tab: '【酒店】',
                tag: {
                    hotelTotal: '全部酒店数量',
                    hotelMatchTotal: '可售',
                    hotelSyncTotal: '已匹配',
                }
            },
            {
                tab: '【房型】',
                tag: {
                    hotelMatchTotal: '全部酒店数量',
                    hotelOpenTotal: '已匹配',
                }
            }
        ],
        SearchComponent: [{
                type: 'text',
                label: '国内城市',
                placeholder: '请输入城市名称',
                name: 'city'
            },
            {
                type: 'text',
                label: '关键词',
                placeholder: '酒店名称/地址',
                name: 'city2'
            },
            {
                type: 'text',
                label: '酒店ID',
                placeholder: '请输入携程酒店ID',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '区域ID',
                placeholder: '请输入区域ID',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '区域名称',
                placeholder: '请输入区域名称',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '电话',
                placeholder: '请输入联系电话',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '酒店星级',
                placeholder: '请输入联系酒店星级',
                name: 'hotelId'
            },
            {
                type: 'num',
                label: '房型数量',
                startName: 'startNum',
                endName: 'endNum'
            },
            {
                type: 'select',
                label: '是否可定',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '是'
                    },
                    {
                        value: '否'
                    }
                ]
            },
            {
                type: 'select',
                label: '酒店匹配状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '待匹配'
                    },
                    {
                        value: '匹配成功'
                    }
                ]
            },
            {
                type: 'select',
                label: '酒店同步状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '同步'
                    },
                    {
                        value: '不同步'
                    }
                ]
            },
            {
                type: 'select',
                label: '房型匹配状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '完全匹配'
                    },
                    {
                        value: '部分匹配'
                    },
                    {
                        value: '待匹配'
                    }
                ]
            },
            // {
            //     type: 'date',
            //     label: '匹配日期',
            //     startDate: 'startDate',
            //     endDate: 'endDate',
            // }
        ],
    }],
    quhuhuList: [{
        key: 'quhuhuList',
        tab: '去呼呼酒店列表',
        theads: ['去呼呼酒店id', '酒店名称', '城市名称', '电话', '酒店地址', '酒店匹配状态', '酒店匹配', '酒店同步状态', '操作'],
        props: ['date', 'name', 'address', 'action'],
        tableOperate: [{
                title: '酒店详情',
                type: 'detail',
                model: 'quhuhuDetail'
            },
            {
                title: '酒店匹配',
                type: 'hotelMatch',
                model: 'quhuhuHotelMatch'
            },
            {
                title: '房型匹配',
                type: 'roomMatch',
                model: 'quhuhuRoomMatch'
            }
        ],
        SearchComponent: [{
                type: 'text',
                label: '国内城市',
                placeholder: '请输入城市名称',
                name: 'city'
            },
            {
                type: 'text',
                label: '酒店名称',
                placeholder: '酒店名称',
                name: 'city2'
            },
            {
                type: 'text',
                label: '酒店地址',
                placeholder: '请输入酒店地址',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '酒店id',
                placeholder: '请输入去呼呼酒店ID',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '电话',
                placeholder: '请输入联系电话',
                name: 'hotelId'
            },
            {
                type: 'num',
                label: '房型数量',
                startName: 'startNum',
                endName: 'endNum'
            },
            {
                type: 'select',
                label: '房型匹配状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '完全匹配'
                    },
                    {
                        value: '部分匹配'
                    }
                ]
            },
            {
                type: 'select',
                label: '酒店匹配状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '待匹配'
                    },
                    {
                        value: '匹配成功'
                    }
                ]
            },
            {
                type: 'select',
                label: '酒店同步状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '同步'
                    },
                    {
                        value: '不同步'
                    }
                ]
            },
        ],
    }],
    quhuhuOrderList: [{
        key: 'quhuhuOrderList',
        tab: '去呼呼订单列表',
        theads: ['本地订单ID', '去呼呼订单ID', '入住时间', '离店时间', '联系人', '联系电话', '入住人姓名', '订单底价', '订单实付金额', '房间数量', '酒店ID', '产品房ID', '订单状态', '操作'],
        props: ['date', 'name', 'address'],
        SearchComponent: [{
                type: 'text',
                label: '本地订单ID',
                placeholder: '请输入本地订单',
                name: 'city'
            },
            {
                type: 'text',
                label: '去呼呼订单ID',
                placeholder: '请输入去呼呼订单',
                name: 'city2'
            },
            {
                type: 'text',
                label: '酒店ID',
                placeholder: '请输入去呼呼酒店ID',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '产品房id',
                placeholder: '请输入产品房id',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '联系人',
                placeholder: '请输入联系人姓名',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '联系人电话',
                placeholder: '请输入联系人电话',
                name: 'hotelId'
            },
            {
                type: 'select',
                label: '订单状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '已支付'
                    },
                    {
                        value: '已撤销'
                    }
                ]
            },
        ],
    }],
    meituanList: [{
        key: 'meituanList',
        tab: '美团酒店列表',
        theads: ['美团酒店', '酒店名称', '城市', '地址电话', '营业状态', '星级', '类型', '评分', '开业时间', '同步状态', '酒店匹配', '房型匹配', '操作'],
        props: ['date', 'name', 'address', 'action'],
        tableOperate: [{
                title: '酒店详情',
                type: 'detail',
                model: 'meituanDetail'
            },
            {
                title: '酒店匹配',
                type: 'hotelMatch',
                model: 'meituanHotelMatch'
            },
            {
                title: '房型匹配',
                type: 'roomMatch',
                model: 'meituanRoomMatch'
            }
        ],
        searchResultMsg: [{
                tab: '【酒店】',
                tag: {
                    hotelTotal: '全部酒店数量',
                    hotelUsableTotal: '可用',
                    hotelMatchTotal: '可售',
                    hotelOpenTotal: '已同步',
                    hotelSyncTotal: '已匹配',
                }
            },
            {
                tab: '【房型】',
                tag: {
                    hotelMatchTotal: '全部酒店数量',
                    hotelOpenTotal: '已匹配',
                }
            }
        ],
        SearchComponent: [{
                type: 'text',
                label: '美团酒店ID',
                placeholder: '请输入美团酒店ID',
                name: 'city'
            },
            {
                type: 'text',
                label: '酒店名称',
                placeholder: '请输入酒店名称',
                name: 'city2'
            },
            {
                type: 'text',
                label: '国内城市',
                placeholder: '请输入城市名称',
                name: 'hotelId'
            },
            {
                type: 'select',
                label: '同步状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '同步'
                    },
                    {
                        value: '不同步'
                    }
                ]
            },
            {
                type: 'select',
                label: '酒店匹配状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '已匹配'
                    },
                    {
                        value: '待匹配'
                    }
                ]
            },
            {
                type: 'select',
                label: '酒店营业状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '营业中'
                    },
                    {
                        value: '已关门'
                    },
                    {
                        value: '筹建中'
                    },
                    {
                        value: '暂停营业'
                    }
                ]
            },
        ],
    }],
    meituanOrderList: [{
        key: 'meituanOrderList',
        tab: '美团订单列表',
        theads: ['订单创建时间', '系统订单id', '美团订单id', '酒店ID', '产品ID', '入住日期', '离店日期', '房间数量', '总价', '结算价', '订单状态', '联系人姓名', '联系人电话', '操作'],
        props: ['date', 'name', 'address', 'action'],
        tableOperate: [{
                title: '订单详情',
                type: 'orderDetail',
                model: 'meituanorderDetail'
            },
            {
                title: '酒店匹配',
                type: 'hotelMatch',
                model: 'meituanHotelMatch'
            },
        ],
        SearchComponent: [{
                type: 'text',
                label: '系统订单id',
                placeholder: '请输入系统订单id',
                name: 'city'
            },
            {
                type: 'text',
                label: '美团订单id',
                placeholder: '请输入美团订单id',
                name: 'city2'
            },
            {
                type: 'text',
                label: '酒店ID',
                placeholder: '请输入酒店ID',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '产品ID',
                placeholder: '请输入产品ID',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '联系人姓名',
                placeholder: '请输入联系人姓名',
                name: 'hotelId'
            },
            {
                type: 'text',
                label: '联系人电话',
                placeholder: '请输入联系人电话',
                name: 'hotelId'
            },
            {
                type: 'select',
                label: '订单状态',
                name: 'state',
                defaultValue: '全部',
                options: [{
                        value: '全部'
                    },
                    {
                        value: '同步'
                    },
                    {
                        value: '不同步'
                    }
                ]
            },
        ],
    }],
    feizhuPriceManager: [{
        key: 'feizhuPriceManager',
        tab: '飞猪-御道店-加价策略管理',
        theads: ['日期日期日期', '名称名称名称', '地址地址地址地址地址', '地址', '操作'],
        props: ['date', 'name', 'address'],
    }],
    priceMonitor: [{
        key: 'priceMonitor',
        tab: '飞猪-御道店-加价策略管理',
        theads: ['日期日期日期', '名称名称名称', '地址地址地址地址地址', '地址', '操作'],
        props: ['date', 'name', 'address'],
    }],
    dataAcquisition: [{
        key: 'dataAcquisition',
        tab: '飞猪-御道店-加价策略管理',
        theads: ['日期日期日期', '名称名称名称', '地址地址地址地址地址', '地址', '操作'],
        props: ['date', 'name', 'address'],
    }],
}