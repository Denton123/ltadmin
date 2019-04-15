export let phone = (rule, value, callback) => {
    if (value !== '' && value !== null && value !== undefined) {
        let bol = (value.length === 11 && /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/.test(value)) || (value.length === 12 && /^(([0+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(value))
        if (!bol) {
            callback(new Error('请输入正确的联系方式'))
        } else {
            callback()
        }
    }
}

export let cron = (rule, value, callback) => {
    console.log(value)
    if (value !== '' && value !== null && value !== undefined) {
        console.log('replace')
        value = value.replace(/(^\s*)|(\s*$)/g, ""); //去掉前后空白
        var arr = value.split(/\s+/); //用空白分割
        
        if (arr.length !== 6 && arr.length !== 7) {
            callback(new Error("表达式必须是 由5个或者6个空格隔开，如 0 0 12 * * ?"))
        } else {
            var reg1=/^([0-5]?\d)([\/\-][0-5]?\d)?$/;      //形如23 23/34 45-59
            var reg2=/^[0-5]?\d(,[0-5]?\d)*$/ ;         //形如 12,43,56  
            var reg3=/^\*$/;                            //匹配 *
            if (!(reg1.test(arr[0]) || reg2.test(arr[0]) || reg3.test(arr[0]))) {
                callback(new Error("第1位是秒，允许的值（0-59 ,-*/）如 （2,47,23-45,5/6）"))
            }
            if (!(reg1.test(arr[1]) || reg2.test(arr[1]) || reg3.test(arr[1]))) {
                callback(new Error("第2位是分，允许的值（0-59 ,-*/）如 （2,47,23-45,5/6）"))
            }
            reg1=/^(([0-1]?\d)|(2[0-3]))([\/\-](([0-1]?\d)|(2[0-3])))?$/;  //形如23 12/18 7-19
            reg2=/^(([0-1]?\d)|(2[0-3]))(,(([0-1]?\d)|(2[0-3])))*$/;       //形如12,15,20
            if (!(reg1.test(arr[2]) || reg2.test(arr[2]) || reg3.test(arr[2]))) {
                callback(new Error("第3位是小时，允许的值（0-23 ,-*/）如 （3,8,21-23,4/7,*）"))
            }
            reg1=/^(([1-9])|([12]\d)|(3[01]))([\/\-](([1-9])|([12]\d)|(3[01])))?$/;  //形如1 12/18 7-26
            reg2=/^(([1-9])|([12]\d)|(3[01]))(,(([1-9])|([12]\d)|(3[01])))*$/;       //形如23,25,30
            reg3=/^(\*|\?)$/;                                                        //形如 *  ?
            var reg4=/^(((([1-9])|([12]\d)|(3[01]))[WC])|(LW?))$/;                   //形如12W 13C L LW
            if (!(reg1.test(arr[3]) || reg2.test(arr[3]) || reg3.test(arr[3]) || reg4.test(arr[3]))) {
                callback(new Error("第4位是日，允许的值（1-31 ,-*/？L W C）如 （1,20,4-8,3/5,2C,8W,L,LW等）"))
            }
            //reg1=/^(([1-9])|(1[0-2]))$/;  ok 1-12
            reg1=/^(([1-9])|(1[0-2]))([\/\-](([1-9])|(1[0-2])))?$/;                //形如1 3/6 7-10
            reg2=/^(([1-9])|(1[0-2]))(,(([1-9])|(1[0-2])))*$/ ;                    //形如3,5,8
            reg3=/^\*$/;　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　　//形如 * 
            reg4=/^((JAN)|(FEB)|(MAR)|(APR)|(MAY)|(JUN)|(JUL)|(AUG)|(SEPT)|(OCT)|(NOV)|(DEC))(\-((JAN)|(FEB)|(MAR)|(APR)|(MAY)|(JUN)|(JUL)|(AUG)|(SEPT)|(OCT)|(NOV)|(DEC)))?$/i; //12个月份
            var reg5=/^((JAN)|(FEB)|(MAR)|(APR)|(MAY)|(JUN)|(JUL)|(AUG)|(SEPT)|(OCT)|(NOV)|(DEC))(,((JAN)|(FEB)|(MAR)|(APR)|(MAY)|(JUN)|(JUL)|(AUG)|(SEPT)|(OCT)|(NOV)|(DEC)))*$/i; //12个月份
            if (!(reg1.test(arr[4]) || reg2.test(arr[4]) || reg3.test(arr[4]) || reg4.test(arr[4]) || reg5.test(arr[4]))) {
                callback(new Error("第5位是月，允许的值（1-12 ,-*/ JAN-DEC）如 （1,10,2-6,JAN,MAY-JUN等）"))
            }
            reg1=/^[1-7]([\/\-][1-7])?$/;               //形如1 3/6 2-5
            reg2=/^[1-7](,[1-7])*$/;                    //形如3,5,6
            reg3=/^(\*|\?|L)$/;                         //形如 * ? L
            reg4=/^((MON)|(TUES)|(WED)|(THUR)|(FRI)|(SAT)|(SUN))([\-]((MON)|(TUES)|(WED)|(THUR)|(FRI)|(SAT)|(SUN)))?$/i; //形如 7个星期 -连接
            reg5=/^((MON)|(TUES)|(WED)|(THUR)|(FRI)|(SAT)|(SUN))(,((MON)|(TUES)|(WED)|(THUR)|(FRI)|(SAT)|(SUN)))*$/i;    //形如 7个星期 ，枚举
            var reg6=/^[1-7][LC]$/;                     //形如 3L 4C
            var reg7=/^[1-7]?#[1-5]$/;                  //形如 #4  6#3
            if (!(reg1.test(arr[5]) || reg2.test(arr[5]) || reg3.test(arr[5]) || reg4.test(arr[5]) || reg5.test(arr[5]) || reg6.test(arr[5]) || reg7.test(arr[5]))) {
                callback(new Error("第6位是周，允许的值（1-7 ,-*/? L C # SUN-SAT）如 （1,2,1-5,?,3C,4L,4#2,SUN等）"))
            }
            if (arr.length == 7) {
                reg1=/^((19[7-9]\d)|(20\d\d))([\/\-]((19[7-9]\d)|(20\d\d)))?$/; 
                reg2=/^((19[7-9]\d)|(20\d\d))(,((19[7-9]\d)|(20\d\d)))*$/; 
                reg3=/^(\*|(empty))$/i;
                if (!(reg1.test(arr[6]) || reg2.test(arr[6]) || reg3.test(arr[6]))) {
                    callback(new Error("第7位是年(可选字段)，允许的值（empty,1979-2099 ,-*/）如 (2013,empty,2012,2013 2012-2013等)"))
                }
            }
        }
    }
}
