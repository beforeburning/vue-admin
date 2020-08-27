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
        response: () => {
            return {
                code: 200,
                state: true,
                message: '保存成功'
            }
        }
    },
    {
        url: '/management/permissionsTree',
        type: 'post',
        response: () => {
            return {
                code: 200,
                state: true,
                data: {
                    list: managementMockData.permissionsTreeList
                },
                message: '获取成功'
            }
        }
    },
    {
        url: '/management/delRole',
        type: 'post',
        response: res => {
            if (res.body.id === 1) {
                return {
                    code: 200,
                    state: false,
                    message: '禁止删除admin账户'
                }
            } else {
                return {
                    code: 200,
                    state: true,
                    message: '删除成功'
                }
            }
        }
    },
    {
        url: '/management/saveRole',
        type: 'post',
        response: res => {
            if (res.body.type === 'modify') {
                return {
                    code: 200,
                    state: true,
                    message: '修改成功'
                }
            } else {
                return {
                    code: 200,
                    state: true,
                    message: '添加成功'
                }
            }

        }
    },
]

export default [
    ...management
]
