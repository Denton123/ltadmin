export default {
    data() {
        return {
            priceData: [{
                    firstTitle: "艺龙-elong",
                    label: 'Elong',
                    subData: [{
                            title: "推送价格策略",
                            theads: [
                                "策略序号",
                                "间夜价格区间",
                                "加价比例",
                                "比例取整",
                                "固定值",
                                "最后取整",
                                "操作"
                            ],
                            props: [
                                "num",
                                "priceMin",
                                "priceration",
                                "rationevidence",
                                "fixedValue",
                                "integer",
                                "action"
                            ],
                            data: [{
                                    key: 0,
                                    num: "1",
                                    priceMin: "122",
                                    priceMax: '1111',
                                    priceration: "23",
                                    rationevidence: 1,
                                    fixedValue: "111",
                                    integer: 0
                                },
                                {
                                    key: 1,
                                    num: "2",
                                    priceMin: "122",
                                    priceration: "23",
                                    rationevidence: 1,
                                    fixedValue: "111",
                                    integer: 0
                                }
                            ],
                            operationBtn: [{
                                title: "添加策略",
                                btnStyle: "orangeBtn"
                            }]
                        },
                        {
                            title: "试单价格策略",
                            theads: [
                                "策略序号",
                                "间夜价格区间",
                                "加价比例",
                                "比例取整",
                                "固定值",
                                "最后取整",
                                "操作"
                            ],
                            props: [
                                "num",
                                "priceMin",
                                "priceration",
                                "rationevidence",
                                "fixedValue",
                                "integer",
                                "action"
                            ],
                            data: [{
                                key: 0,
                                num: "1",
                                priceMin: "122",
                                priceration: "23",
                                rationevidence: 1,
                                fixedValue: "111",
                                integer: 0
                            }],
                            operationBtn: [{
                                title: "添加策略",
                                btnStyle: "orangeBtn"
                            }, {
                                title: "重置试单策略",
                                btnStyle: "greenBtn"
                            }]
                        }
                    ],
                    footer: {
                        title: '艺龙策略测试',
                        originalPrice: '290',
                        priceTag: [{
                            tagKey: {
                                pushPrice: '推送价格',
                                testPrice: '试单价格'
                            }
                        }],
                        btnTitle: '艺龙'
                    }
                },
                {
                    firstTitle: "携程-Ctrip",
                    label: 'Ctrip',
                    subData: [{
                            title: "推送价格策略",
                            theads: [
                                "策略序号",
                                '酒店类型',
                                "间夜价格区间",
                                "加价比例",
                                "比例取整",
                                "固定值",
                                "最后取整",
                                "操作"
                            ],
                            props: [
                                "num",
                                'hoteltype',
                                "priceMin",
                                "priceration",
                                "rationevidence",
                                "fixedValue",
                                "integer",
                                "action"
                            ],
                            data: [{
                                key: 0,
                                num: "1",
                                hoteltype: '金牌',
                                priceMin: "122",
                                priceration: "23",
                                rationevidence: 1,
                                fixedValue: "111",
                                integer: 0
                            }],
                            operationBtn: [{
                                title: "添加策略",
                                btnStyle: "orangeBtn"
                            }]
                        },
                        {
                            title: "试单价格策略",
                            theads: [
                                "策略序号",
                                '酒店类型',
                                "间夜价格区间",
                                "加价比例",
                                "比例取整",
                                "固定值",
                                "最后取整",
                                "操作"
                            ],
                            props: [
                                "num",
                                'hoteltype',
                                "priceMin",
                                "priceration",
                                "rationevidence",
                                "fixedValue",
                                "integer",
                                "action"
                            ],
                            data: [{
                                key: 0,
                                num: "1",
                                hoteltype: '普通',
                                priceMin: "122",
                                priceration: "23",
                                rationevidence: 1,
                                fixedValue: "111",
                                integer: 0
                            }],
                            operationBtn: [{
                                title: "添加策略",
                                btnStyle: "orangeBtn"
                            }, {
                                title: "重置试单策略",
                                btnStyle: "greenBtn"
                            }]
                        }
                    ],
                    footer: {
                        title: '携程策略测试',
                        originalPrice: '290',
                        priceTag: [{
                            tag: '金牌',
                            tagKey: {
                                pushPrice: '推送价格',
                                testPrice: '试单价格'
                            }
                        }, {
                            tag: '普通',
                            tagKey: {
                                pushPrice: '推送价格',
                                testPrice: '试单价格'
                            }
                        }]
                    }
                },
                {
                    firstTitle: "去呼呼-Quhuhu",
                    label: 'Quhuhu',
                    subData: [{
                            title: "推送价格策略",
                            theads: [
                                "策略序号",
                                "间夜价格区间",
                                "加价比例",
                                "比例取整",
                                "固定值",
                                "最后取整",
                                "操作"
                            ],
                            props: [
                                "num",
                                "priceMin",
                                "priceration",
                                "rationevidence",
                                "fixedValue",
                                "integer",
                                "action"
                            ],
                            data: [{
                                key:0,
                                num: "1",
                                priceMin: "122",
                                priceration: "23",
                                rationevidence: 1,
                                fixedValue: "111",
                                integer: 0
                            }],
                            operationBtn: [{
                                title: "添加策略",
                                btnStyle: "orangeBtn"
                            }]
                        },
                        {
                            title: "试单价格策略",
                            theads: [
                                "策略序号",
                                "间夜价格区间",
                                "加价比例",
                                "比例取整",
                                "固定值",
                                "最后取整",
                                "操作"
                            ],
                            props: [
                                "num",
                                "priceMin",
                                "priceration",
                                "rationevidence",
                                "fixedValue",
                                "integer",
                                "action"
                            ],
                            data: [{
                                key: 0,
                                num: "1",
                                priceMin: "122",
                                priceration: "23",
                                rationevidence: 1,
                                fixedValue: "111",
                                integer: 0
                            }],
                            operationBtn: [{
                                title: "添加策略",
                                btnStyle: "orangeBtn"
                            }, {
                                title: "重置试单策略",
                                btnStyle: "greenBtn"
                            }]
                        }
                    ],
                    footer: {
                        title: '去呼呼策略测试',
                        originalPrice: '290',
                        priceTag: [{
                            tagKey: {
                                pushPrice: '推送价格',
                                testPrice: '试单价格'
                            }
                        }],
                        btnTitle: '去呼呼'
                    }
                },
                {
                    firstTitle: "美团-Meituan",
                    label: 'Meituan',
                    subData: [{
                            title: "推送价格策略",
                            theads: [
                                "策略序号",
                                '发票开具方',
                                "间夜价格区间",
                                "加价比例",
                                "比例取整",
                                "固定值",
                                "最后取整",
                                "操作"
                            ],
                            props: [
                                "num",
                                'invoice',
                                "priceMin",
                                "priceration",
                                "rationevidence",
                                "fixedValue",
                                "integer",
                                "action"
                            ],
                            data: [{
                                key: 0,
                                num: "1",
                                invoice: '酒店',
                                priceMin: "122",
                                priceration: "23",
                                rationevidence: 1,
                                fixedValue: "111",
                                integer: 0
                            }],
                            operationBtn: [{
                                title: "添加策略",
                                btnStyle: "orangeBtn"
                            }]
                        },
                        {
                            title: "试单价格策略",
                            theads: [
                                "策略序号",
                                '发票开具方',
                                "间夜价格区间",
                                "加价比例",
                                "比例取整",
                                "固定值",
                                "最后取整",
                                "操作"
                            ],
                            props: [
                                "num",
                                'invoice',
                                "priceMin",
                                "priceration",
                                "rationevidence",
                                "fixedValue",
                                "integer",
                                "action"
                            ],
                            data: [{
                                key: 0,
                                num: "1",
                                invoice: '美团',
                                priceMin: "122",
                                priceration: "23",
                                rationevidence: 1,
                                fixedValue: "111",
                                integer: 0
                            }],
                            operationBtn: [{
                                title: "添加策略",
                                btnStyle: "orangeBtn"
                            }, {
                                title: "重置试单策略",
                                btnStyle: "greenBtn"
                            }]
                        }
                    ],
                    footer: {
                        title: '美团策略测试',
                        originalPrice: '290',
                        priceTag: [{
                            tag: '酒店方',
                            tagKey: {
                                pushPrice: '推送价格',
                                testPrice: '试单价格'
                            }
                        }, {
                            tag: '美团方',
                            tagKey: {
                                pushPrice: '推送价格',
                                testPrice: '试单价格'
                            }
                        }, {
                            tag: '第三方',
                            tagKey: {
                                pushPrice: '推送价格',
                                testPrice: '试单价格'
                            }
                        }],
                        btnTitle: '美团'
                    }
                },
            ]
        }
    }

}