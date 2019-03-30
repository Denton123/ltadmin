export default {
    // 酒店管理菜单
    hotelMenus: [{
            name: '艺龙',
            key: 'e-long',
            icon: 'user',
            children: [{
                name: '艺龙酒店列表',
                key: 'e-longHotelList',
                path: '/hotelMenus/e-longHotelList'
            }]
        },
        {
            name: '去哪儿',
            key: 'qunar',
            icon: 'laptop',
            children: [{
                name: '去哪儿酒店列表',
                key: 'qunarHotelList',
                path: '/hotelMenus/qunarHotelList'
            }]
        },
        {
            name: '订单模块',
            key: 'order',
            icon: 'laptop',
            children: [{
                name: '订单列表',
                key: 'inlandPlan2',
                path: '/hotelMenus/orderList'
            }]
        },
        {
            name: '携程',
            key: 'ctrip',
            icon: 'laptop',
            children: [{
                    name: '携程下单',
                    key: 'ctripOrder',
                    path: '/hotelMenus/ctripOrder'
                },
                {
                    name: '携程酒店列表',
                    key: 'ctripList',
                    path: '/hotelMenus/ctripList'
                }
            ]
        },
        {
            name: '去呼呼',
            key: 'quhuhu',
            icon: 'laptop',
            children: [{
                    name: '去呼呼酒店列表',
                    key: 'quhuhuList',
                    path: '/hotelMenus/quhuhuList'
                },
                {
                    name: '去呼呼订单列表',
                    key: 'quhuhuOrderList',
                    path: '/hotelMenus/quhuhuOrderList'
                }
            ]
        },
        {
            name: '美团',
            key: 'meituan',
            icon: 'laptop',
            children: [{
                    name: '美团酒店列表',
                    key: 'meituanList',
                    path: '/hotelMenus/meituanList'
                },
                {
                    name: '美团订单列表',
                    key: 'meituanOrderList',
                    path: '/hotelMenus/meituanOrderList'
                }
            ]
        },
        {
            name: '分销策略管理',
            key: 'PriceManager',
            icon: 'laptop',
            children: [{
                    name: '飞猪-御道店-加价策略管理',
                    key: 'feizhuPriceManager',
                    path: '/hotelMenus/feizhuPriceManager'
                },
            ]
        },
        {
            name: '分销监控中心',
            key: 'priceMonitorCenter',
            icon: 'laptop',
            children: [{
                    name: '飞猪-御道店',
                    key: 'priceMonitor',
                    path: '/hotelMenus/priceMonitor'
                },
                {
                    name: '数据收集',
                    key: 'dataAcquisition',
                    path: '/hotelMenus/dataAcquisition'
                },
            ]
        }
    ],
    // 公司内部管理菜单
    companyMenus: [{
        name: '系统管理',
        key: 'companyMenus',
        icon: 'user',
        children: [{
                name: '管理员管理',
                key: 'adminManage',
                path: '/companyMenus/adminManage'
            },
            {
                name: '部门管理',
                key: 'departmentManage',
                path: '/companyMenus/departmentManage'
            },
            {
                name: '角色管理',
                key: 'roleManage',
                path: '/companyMenus/roleManage'
            },
            {
                name: '菜单管理',
                key: 'menuManage',
                path: '/companyMenus/menuManage'
            },
            {
                name: 'SQL监控',
                key: 'sql',
                path: '/companyMenus/sqlMonitor'
            },
            {
                name: '定时任务',
                key: 'taskManage',
                path: '/companyMenus/taskManage'
            },
            {
                name: '参数管理',
                key: 'paramsManage',
                path: '/companyMenus/paramsManage'
            },
            {
                name: '文件上传',
                key: 'fileUploadManage',
                path: '/companyMenus/fileUploadManage'
            },
            {
                name: '字典管理',
                key: 'dictionaryManage',
                path: '/companyMenus/dictionaryManage'
            },
            {
                name: '系统日志',
                key: 'SystemLog',
                path: '/companyMenus/SystemLog'
            }
        ]
    }]
}