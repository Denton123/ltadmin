export default {
    data() {
        return {
            profitData: [{
                    title: '分销平台-飞猪-御道店',
                    label: 'Fliggy',
                    data: [{
                        tag: {
                            orderAmount: '总订单数量',
                        },
                        tagKey: {
                            roomNightAmount: '间夜数',
                            subPriceAmount: '飞猪佣金'
                        }
                    }, {
                        tag: {
                            paymentAmount: '总交易额',
                        },
                        tagKey: {
                            avgAmount: '平均客单价',
                            profitAmount: '总利润'
                        }
                    }]
                },
                {
                    title: '供应商-艺龙',
                    label: 'Elong',
                    data: [{
                        tag: {
                            orderAmount: '订单数量',
                        },
                        tagKey: {
                            roomNightAmount: '间夜数',
                            avgSalePrice: '销售客单价'
                        }
                    }, {
                        tag: {
                            salePriceAmount: '销售交易额',
                        },
                        tagKey: {
                            avgOriginPrice: '下单客单价',
                            profitAmount: '利润'
                        }
                    }]
                },
                {
                    title: '供应商-携程',
                    label: 'Ctrip',
                    data: [{
                        tag: {
                            orderAmount: '订单数量',
                        },
                        tagKey: {
                            roomNightAmount: '间夜数',
                            avgSalePrice: '销售客单价'
                        }
                    }, {
                        tag: {
                            salePriceAmount: '销售交易额',
                        },
                        tagKey: {
                            avgOriginPrice: '下单客单价',
                            profitAmount: '利润'
                        }
                    }]
                },
                {
                    title: '供应商-美团',
                    label: 'Meituan',
                    data: [{
                        tag: {
                            orderAmount: '订单数量',
                        },
                        tagKey: {
                            roomNightAmount: '间夜数',
                            avgSalePrice: '销售客单价'
                        }
                    }, {
                        tag: {
                            salePriceAmount: '销售交易额',
                        },
                        tagKey: {
                            avgOriginPrice: '下单客单价',
                            profitAmount: '利润'
                        }
                    }]
                },
                {
                    title: '供应商-去呼呼',
                    label: 'Quhuhu',
                    data: [{
                        tag: {
                            orderAmount: '订单数量',
                        },
                        tagKey: {
                            roomNightAmount: '间夜数',
                            avgSalePrice: '销售客单价'
                        }
                    }, {
                        tag: {
                            salePriceAmount: '销售交易额',
                        },
                        tagKey: {
                            avgOriginPrice: '下单客单价',
                            profitAmount: '利润'
                        }
                    }]
                }
            ]
        }
    }
}