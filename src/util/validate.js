exports.phone = (rule, value, callback) => {
    if (value !== '' && value !== null) {
        let bol = (value.length === 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)) || (value.length === 12 && /^(([0+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value))
        if (!bol) {
            callback(new Error('请输入正确的联系方式'))
        } else {
            callback()
        }
    }
}
exports.cron = (rule, value, callback) => {
    let regEx =  /^([1-5]?[0-9|*][\s][1-5]?[0-9|*][\s]([1-9]?|1[0-9]?|2[0-3])|[*])[\s]([1-9]?|[1-2][0-9]?|3[0-1]|[*])[\s]([1-9]?|1[0-2]|[*])[\s][0-7|*]$/gi
    let bol = regEx.test(value)
    if (!bol) {
        callback(new Error('请输入正确的cron表达式'))
    } else {
        callback()
    }
}
