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
            let list = managementMockData.userListData();

            return {
                code: 200,
                state: true,
                data: {
                    list: list,
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
