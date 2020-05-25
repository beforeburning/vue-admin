/**
 Function: localStorage
 User: burning <923398776@qq.com>
 Date: 2020年03月11日
 */

export const storage = {
    //存储
    set(key, value) {
        localStorage.setItem(key, value);
    },
    // 存储json
    setJSON(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    //取出数据
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    },
    // 删除数据
    remove(key) {
        localStorage.removeItem(key);
    }

}
