/**
 Function: 过滤器
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */
// import parseTime, formatTime and set to filter
export { parseTime, formatTime } from '@/utils'

/**
 * 如果是复数，则显示复数标签
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
const pluralize = (time, label) => {
    if (time === 1) {
        return time + label
    }
    return time + label + 's'
};

/**
 * 时间过去了多久
 * @param {number} time
 */
export const timeAgo = (time) => {
    const between = Date.now() / 1000 - Number(time);
    if (between < 3600) {
        return pluralize(~~(between / 60), ' minute')
    } else if (between < 86400) {
        return pluralize(~~(between / 3600), ' hour')
    } else {
        return pluralize(~~(between / 86400), ' day')
    }
};

/**
 * 数字格式
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export const numberFormatter = (num, digits) => {
    const si = [
        {value: 1E18, symbol: 'E'},
        {value: 1E15, symbol: 'P'},
        {value: 1E12, symbol: 'T'},
        {value: 1E9, symbol: 'G'},
        {value: 1E6, symbol: 'M'},
        {value: 1E3, symbol: 'k'}
    ];
    for (let i = 0; i < si.length; i++) {
        if (num >= si[i].value) {
            return (num / si[i].value + 0.1).toFixed(digits).replace(/\.0+$|(\.[0-9]*[1-9])0+$/, '$1') + si[i].symbol
        }
    }
    return num.toString()
};

/**
 * 金额展示
 * 10000 => "10,000"
 * @param {number} num
 */
export const toThousandFilter = (num) => {
    return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
};

/**
 * 首字母大写
 * Upper case first char
 * @param {String} string
 */
export const uppercaseFirst = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
};

/**
 * 时间戳变为时间
 * Upper case first char
 * @param {String} number
 */
export const formatDate = number => {
    let date = new Date(parseInt(number) * 1000);
    let y = date.getFullYear();
    let MM = date.getMonth() + 1;
    MM = MM < 10 ? "0" + MM : MM;
    let d = date.getDate();
    d = d < 10 ? "0" + d : d;
    let h = date.getHours();
    h = h < 10 ? "0" + h : h;
    let m = date.getMinutes();
    m = m < 10 ? "0" + m : m;
    let s = date.getSeconds();
    s = s < 10 ? "0" + s : s;
    return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
}

// 全量时间变只有年月日
export const shorthandTime = string => {
    return string.split(' ')[0]
}

// 账号状态
export const state = number => {
    return parseInt(number) === 1 ? '正常' : '禁用'
}
