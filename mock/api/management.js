/**
 Function: 权限管理
 User: burning <923398776@qq.com>
 Date: 2020年07月24日
 */

import managementMockData from "../mockData/management.js";

const management = [
    {
        url: '/management/getUserList',
        type: 'post',
        response: res => {
            let list = managementMockData.userListData();
            let currentPage = res.body.currentPage;
            let size = res.body.size;

            return {
                code: 200,
                state: true,
                data: {
                    list: list.slice(currentPage * size - size, currentPage * size),
                    count: list.length
                },
                message: '获取成功'
            }
        }
    },
]

export default [
    ...management
]
