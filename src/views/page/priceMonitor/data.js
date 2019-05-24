export default {
    data() {
        return {
            priceMonitor: {
                feizhu: {
                    title: '分销平台-飞猪-御道店',
                    data: [{
                        tag: '总试单',
                        tagKey: {
                            success: '（80.00%）成功',
                            failure: '（20.00%）失败'
                        }
                    }, {
                        tag: '总订单',
                        conversion: '转化率(10.00%)',
                        tagKey: {
                            success: '（100.00%）成功',
                            failure: '（0.00%）失败'
                        }
                    }]
                },
                supplyData: [{
                    title: '供应商-艺龙',
                    tab: '艺龙',
                    data: [{
                        tag: '（50.00%）分试单',
                        tagKey: {
                            success: '（80.00%）成功',
                            failure: '（20.00%）失败'
                        }
                    },
                    {
                        tag: '（37.50%）分订单',
                        conversion: '转化率(6.00%)',
                        tagKey: {
                            success: '（100.00%）成功',
                            failure: '（0.00%）失败'
                        }
                    }]
                },
                {
                    title: '供应商-携程',
                    data: [{
                        tag: '（50.00%）分试单',
                        tagKey: {
                            success: '（80.00%）成功',
                            failure: '（20.00%）失败'
                        }
                    },
                    {
                        tag: '（37.50%）分订单',
                        conversion: '转化率(6.00%)',
                        tagKey: {
                            success: '（100.00%）成功',
                            failure: '（0.00%）失败'
                        }
                    }]
                },
                {
                    title: '供应商-美团',
                    data: [{
                        tag: '（50.00%）分试单',
                        tagKey: {
                            success: '（80.00%）成功',
                            failure: '（20.00%）失败'
                        }
                    },
                    {
                        tag: '（37.50%）分订单',
                        conversion: '转化率(6.00%)',
                        tagKey: {
                            success: '（100.00%）成功',
                            failure: '（0.00%）失败'
                        }
                    }]
                },
                {
                    title: '供应商-去呼呼',
                    data: [{
                        tag: '（50.00%）分试单',
                        tagKey: {
                            success: '（80.00%）成功',
                            failure: '（20.00%）失败'
                        }
                    },
                    {
                        tag: '（37.50%）分订单',
                        conversion: '转化率(6.00%)',
                        tagKey: {
                            success: '（100.00%）成功',
                            failure: '（0.00%）失败'
                        }
                    }]
                }]
            }
        }
    }
}