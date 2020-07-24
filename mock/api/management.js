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
        response: () => {
            managementMockData.userListData()
            return {
                code: 200,
                state: true,
                message: '获取成功'
            }
        }
    },
]

export default [
    ...management
]
