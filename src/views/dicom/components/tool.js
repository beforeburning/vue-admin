/**
 Function: 工具类方法
 User: burning <923398776@qq.com>
 Date: 2020年08月31日
 */

// 返回真实地址
export const realUrl = (imageId) => {
    return `wadouri://127.0.0.1/vue-admin/mock/mockData/dicomFiles/${imageId}`;
}

// 创建一个div
export const newDiv = () => {
    let canvasBox = document.createElement('div');
    canvasBox.classList.add('list')
    return canvasBox
}
