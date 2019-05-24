/**
 * 全局注册通用方法
 */

import Vue from 'vue'

export default {
    install() {
        /**
         * 时间转换
         *
         * @param timestamp {String} 时间戳
         * @param format {String} 转换格式，如：MM-DD、MM/DD
         */
        function datetimeparse(timestamp, format, prefix) {
            if (typeof timestamp == 'string') {
                timestamp = Number(timestamp)
            };
            //转换时区
            let currentZoneTime = new Date(timestamp);
            let currentTimestamp = currentZoneTime.getTime();
            let offsetZone = currentZoneTime.getTimezoneOffset() / 60; //如果offsetZone>0是西区，西区晚
            let offset = null;
            //客户端时间与服务器时间保持一致，固定北京时间东八区。
            offset = offsetZone + 8;
            currentTimestamp = currentTimestamp + offset * 3600 * 1000

            let newtimestamp = null;
            if (currentTimestamp) {
                if (currentTimestamp.toString().length === 13) {
                    newtimestamp = currentTimestamp.toString()
                } else if (currentTimestamp.toString().length === 10) {
                    newtimestamp = currentTimestamp + '000'
                } else {
                    newtimestamp = null
                }
            } else {
                newtimestamp = null
            };
            let dateobj = newtimestamp ? new Date(parseInt(newtimestamp)) : new Date()
            let YYYY = dateobj.getFullYear()
            let MM = dateobj.getMonth() > 8 ? dateobj.getMonth() + 1 : '0' + (dateobj.getMonth() + 1)
            let DD = dateobj.getDate() > 9 ? dateobj.getDate() : '0' + dateobj.getDate()
            let HH = dateobj.getHours() > 9 ? dateobj.getHours() : '0' + dateobj.getHours()
            let mm = dateobj.getMinutes() > 9 ? dateobj.getMinutes() : '0' + dateobj.getMinutes()
            let ss = dateobj.getSeconds() > 9 ? dateobj.getSeconds() : '0' + dateobj.getSeconds()
            let dd = dateobj.getDay()
            switch (dd) {
                case 1:
                    dd = '一'
                    break;
                case 2:
                    dd = '二'
                    break;
                case 3:
                    dd = '三'
                    break;
                case 4:
                    dd = '四'
                    break;
                case 5:
                    dd = '五'
                    break;
                case 6:
                    dd = '六'
                    break;
                case 0: 
                    dd = '日'
                    break;
            }
            let output = '';
            let separator = '/'
            if (format) {
                separator = format.match(/-/) ? '-' : '/'
                output += format.match(/yy/i) ? YYYY : ''
                output += format.match(/MM/) ? (output.length ? separator : '') + MM : ''
                output += format.match(/dd/i) ? (output.length ? separator : '') + DD : ''
                output += format.match(/hh/i) ? (output.length ? ' ' : '') + HH : ''
                output += format.match(/mm/) ? (output.length ? ':' : '') + mm : ''
                output += format.match(/ss/i) ? (output.length ? ':' : '') + ss : ''
                output += format.match(/dd/i) ? (output.length ? '' : '') + `周${dd}` : ''
            } else {
                output += YYYY + separator + MM + separator + DD
            }
            output = prefix ? (prefix + output) : output

            return newtimestamp ? output : ''
        }

        /**
         * 将json数据转为tree等级数据
         *
         * @param rowData {Object} 需要转化的数组
         * @param rowId {String} 需要对比的id
         * @param isIndex {Boolean} key值是index，还是id
         * @returns {Object}
         */
        Vue.prototype.$setTreeData = (rowData, rowId, isIndex) => {
            let data = [...rowData]
            let sortData = []
            let parentIdArr = []
            data.filter((item, idx) => {
                item.children = []
                data.filter((subitem) => {
                    parentIdArr.push(subitem[`${rowId}`])
                    if (item[`${rowId}`] === subitem['parentId']) {
                        item.children.push(subitem)
                    }
                })
                parentIdArr = [...new Set(parentIdArr)]
                if (item.children.length == 0) {
                    delete item.children
                }
                item.key = isIndex ? idx : `${item[`${rowId}`]}`
                item.title = item.name
                item.value = `${item[`${rowId}`]}`
                // console.log(typeof(item.key))
                parentIdArr.indexOf(item['parentId']) == -1 ? sortData.push(item) : ''
            })
            return sortData
        }
        /**
         * 筛选两个日期之间的日期数据
         *
         * @param {String} begin 开始日期
         * @param {String} end 结束日期
         */
        Vue.prototype.$getTimeRange = (begin, end) => {
            let arr1 = begin.split("/");
            let arr2 = end.split("/");
            let arr1_ = new Date();
            let arrTime = [];
            arr1_.setUTCFullYear(arr1[0], arr1[1] - 1, arr1[2]);
            let arr2_ = new Date();
            arr2_.setUTCFullYear(arr2[0], arr2[1] - 1, arr2[2]);
            let unixDb = arr1_.getTime();
            let unixDe = arr2_.getTime();
            for (let k = unixDb; k <= unixDe;) {
                arrTime.push(datetimeparse(k, 'MM-DD'));
                k = k + 24 * 60 * 60 * 1000;
            }
            return arrTime;
        }

    }

}