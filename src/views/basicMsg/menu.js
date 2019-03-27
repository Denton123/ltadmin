export default {
    planMenus: [{
            name: '艺龙',
            key: 'planMenus',
            icon: 'user',
            children: [{
                name: '艺龙酒店列表',
                key: 'inlandRoute',
                path: '/planMenus/inlandRoute'
            }]
        },
        {
            name: '去哪儿',
            key: 'tour-plan',
            icon: 'laptop',
            children: [{
                name: '去哪儿酒店列表',
                key: 'inlandPlan',
                path: '/planMenus/inlandPlan'
            }]
        },
        {
            name: '订单模块',
            key: 'tour-plan2',
            icon: 'laptop',
            children: [{
                name: '订单列表',
                key: 'inlandPlan2',
                path: '/planMenus/inlandPlan2'
            }]
        },
        {
            name: '携程',
            key: 'tour-plan3',
            icon: 'laptop',
            children: [{
                    name: '携程下单',
                    key: 'inlandPlan3',
                    path: '/planMenus/ctripCreateOrder'
                },
                {
                    name: '携程酒店列表',
                    key: 'inlandPlan4',
                    path: '/planMenus/inlandPlan4'
                }
            ]
        },
        {
            name: '去呼呼',
            key: 'tour-plan4',
            icon: 'laptop',
            children: [{
                    name: '去呼呼酒店列表',
                    key: 'inlandPlan5',
                    path: '/planMenus/inlandPlan5'
                },
                {
                    name: '去呼呼订单列表',
                    key: 'inlandPlan6',
                    path: '/planMenus/inlandPlan6'
                }
            ]
        },
        {
            name: '美团',
            key: 'tour-plan5',
            icon: 'laptop',
            children: [{
                    name: '美团酒店列表',
                    key: 'inlandPlan7',
                    path: '/planMenus/inlandPlan7'
                },
                {
                    name: '美团订单列表',
                    key: 'inlandPlan8',
                    path: '/planMenus/inlandPlan8'
                }
            ]
        },
        {
            name: '分销监控中心',
            key: 'tour-plan6',
            icon: 'laptop',
            children: [{
                    name: '飞猪-御道店',
                    key: 'inlandPlan9',
                    path: '/planMenus/inlandPlan9'
                },
            ]
        }
    ],
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