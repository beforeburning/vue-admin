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

            if (!currentPage || !size) {
                return {
                    code: 200,
                    state: false,
                    message: '参数错误'
                }
            }

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
    {
        url: '/management/getPermissionsList',
        type: 'post',
        response: () => {
            return {
                code: 200,
                state: true,
                data: {
                    list: managementMockData.permissionsList
                },
                message: '获取成功'
            }
        }
    },
    {
        url: '/management/saveOperation',
        type: 'post',
        response: res => {
            console.log(res);
            return {
                code: 200,
                state: true,
                message: '保存成功'
            }
        }
    },
]

export default [
    ...management
]
