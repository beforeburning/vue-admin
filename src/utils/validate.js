/**
 Function: 正则 摘抄与panjiachen的vue-admin
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */

/**
 * 外部链接
 * @param {string} path
 * @returns {Boolean}
 */
export const isExternal = (path) => {
    return /^(https?:|mailto:|tel:)/.test(path)
};

/**
 * 有效的用户名
 * @param {string} str
 * @returns {Boolean}
 */
export const validUsername = (str) => {
    const valid_map = ['admin', 'editor'];
    return valid_map.indexOf(str.trim()) >= 0
};

/**
 * 正确的url正则
 * @param {string} url
 * @returns {Boolean}
 */
export const validURL = (url) => {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url)
};

/**
 * 英文小写正则
 * @param {string} str
 * @returns {Boolean}
 */
export const validLowerCase = (str) => {
    const reg = /^[a-z]+$/;
    return reg.test(str)
};

/**
 * 英文大写正则
 * @param {string} str
 * @returns {Boolean}
 */
export const validUpperCase = (str) => {
    const reg = /^[A-Z]+$/;
    return reg.test(str)
};

/**
 * 英文大小写正则
 * @param {string} str
 * @returns {Boolean}
 */
export const validAlphabets = (str) => {
    const reg = /^[A-Za-z]+$/;
    return reg.test(str)
};

/**
 * 邮箱正则
 * @param {string} email
 * @returns {Boolean}
 */
export const validEmail = (email) => {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email)
};

/**
 * 中英文加数字
 * @param {string} str
 * @returns {Boolean}
 */
export const CEN = (str) => {
    const reg = /^[0-9a-zA-Z\u4e00-\u9fa5]+$/;
    return reg.test(str)
};

/**
 * 有效字符串
 * @param {string} str
 * @returns {Boolean}
 */
export const isString = (str) => {
    if (typeof str === 'string' || str instanceof String) {
        return true
    }
    return false
};

/**
 * 有效数组
 * @param {Array} arg
 * @returns {Boolean}
 */
export const isArray = (arg) => {
    if (typeof Array.isArray === 'undefined') {
        return Object.prototype.toString.call(arg) === '[object Array]'
    }
    return Array.isArray(arg)
};

