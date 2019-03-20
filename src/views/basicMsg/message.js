/* 单页面数据*/
import newBtn from '@/components/public/newBtn';
import editBtn from '@/components/public/editBtn';
import inputSearch from '@/components/public/inputSearch';

export default {
    inlandRoute: [{
            key: 'inlandRoute',
            tab: '用户设置',
            theads: ['日期', '名称sss', '地址', '操作'],
            props: ['date', 'name', 'address'],
            widths: [50, 50, 50],
            typeComponent: [{
                    component: inputSearch,
                    inputSearch: {
                        label: '国外城市',
                        placeholder: '请输入国外城市',
                        value: '',
                        inputId: 'cityID',
                    }
                },
                {
                    component: inputSearch,
                    inputSearch: {
                        label: '国内城市',
                        placeholder: '请输入国内城市',
                        value: '',
                        inputId: 'cityID2',
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
                    label: '国内城市',
                    placeholder: '请输入城市名称',
                    name: 'city2'
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
                            value: '部分'
                        }
                    ]
                },
                {
                    type: 'date',
                    label: '匹配日期',
                    startDate: 'startDate',
                    endDate: 'endDate',
                }
            ]
        },
        {
            tab: '用户测试',
            theads: ['日期', '用户名', '地址', '操作'],
            props: ['date', 'name', 'address'],
            widths: [50, 50, 50]
        }
    ],
    foreignRoute: [{
        key: 'foreignRoute',
        tab: '欧洲旅游',
        theads: ['日期', '名称名称名称', '地址', '操作'],
        props: ['date', 'name', 'address'],
        widths: [50, 50, 50],
        typeComponent: [{
            component: editBtn
        }]
    }],
    inlandPlan: [{
        key: 'inlandPlan',
        tab: '南方旅游计划',
        theads: ['日期日期日期', '名称名称名称', '地址', '地址', '操作'],
        props: ['date', 'name', 'address'],
        widths: [50, 50, 50]
    }],
    foreignPlan: [{
        key: 'foreignPlan',
        tab: '欧洲旅游计划',
        theads: ['日期日期日期', '名称名称名称', '地址地址地址地址地址', '地址', '操作'],
        props: ['date', 'name', 'address'],
        widths: [50, 50, 50]
    }]
}