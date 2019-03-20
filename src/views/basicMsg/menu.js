export default {
    planMenus: [{
            name: '旅游路线',
            key: 'planMenus',
            icon: 'user',
            children: [{
                    name: '国内旅游路线',
                    key: 'inlandRoute',
                    path: '/planMenus/inlandRoute'
                },
                {
                    name: '国外旅游路线',
                    key: 'foreign',
                    path: '/planMenus/foreignRoute'
                }
            ]
        },
        {
            name: '旅游计划',
            key: 'tour-plan',
            icon: 'laptop',
            children: [{
                    name: '国内旅游计划',
                    key: 'inlandPlan',
                    path: '/planMenus/inlandPlan'
                },
                {
                    name: '国外旅游计划',
                    key: 'foreignPlan',
                    path: '/planMenus/foreignPlan'
                }
            ]
        },
        {
            name: '旅游计划',
            key: 'tour-plan2',
            icon: 'laptop',
            children: [{
                    name: '国内旅游计划',
                    key: 'inlandPlan2',
                    path: '/planMenus/inlandPlan'
                },
                {
                    name: '国外旅游计划',
                    key: 'foreignPlan2',
                    path: '/planMenus/foreignPlan'
                }
            ]
        },
        {
            name: '旅游计划',
            key: 'tour-plan3',
            icon: 'laptop',
            children: [{
                    name: '国内旅游计划',
                    key: 'inlandPlan3',
                    path: '/planMenus/inlandPlan'
                },
                {
                    name: '国外旅游计划',
                    key: 'foreignPlan3',
                    path: '/planMenus/foreignPlan'
                }
            ]
        }
    ],
    companyMenus: [{
        name: '用户管理',
        key: 'companyMenus',
        icon: 'user',
        children: [{
                name: '个人中心',
                key: 'person',
                path: '/companyMenus/foreignPlan'
            },
            {
                name: '用户信息',
                key: 'info',
                path: '/companyMenus/inlandPlan'
            }
        ]
    }, ]
}