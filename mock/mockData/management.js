/**
 Function: 权限管理数据
 User: burning <923398776@qq.com>
 Date: 2020年07月24日
 */

import userMockData from "../mockData/user";

// 用户列表 通过用户user数据集合出来后返回
const userListData = () => {
    let userList = [];
    for (let item in userMockData.userData) {
        let newObj = {
            ...userMockData.userInformation[userMockData.userData[item].user.name],
            ...userMockData.userData[item].user
        }
        userList.push(newObj)
    }
    return userList
}

// 权限列表
const permissionsList = [
    {
        id: 1,
        name: 'admin',
        label: '超级管理员',
        addTime: 1597136214,
        // 角色权限
        permissionsTree: [1, 2, 3]
    },
    {
        id: 2,
        name: 'super',
        label: '管理员',
        addTime: 1597049813,
        permissionsTree: [4, 5, 6]
    },
    {
        id: 3,
        name: 'employees',
        label: '普通用户',
        addTime: 1596963413,
        permissionsTree: [7, 8, 9]
    }
]

// 权限树
const permissionsTreeList = [
    {
        id: 1,
        label: '权限 1',
        children: [
            {
                id: 4,
                label: '权限 1-1',
                children: [
                    {
                        id: 9,
                        label: '权限 1-1-1'
                    },
                    {
                        id: 10,
                        label: '权限 1-1-2'
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        label: '权限 2',
        children: [
            {
                id: 5,
                label: '权限 2-1'
            },
            {
                id: 6,
                label: '权限 2-2'
            }
        ]
    },
    {
        id: 3,
        label: '权限 3',
        children: [
            {
                id: 7,
                label: '权限 3-1'
            },
            {
                id: 8,
                label: '权限 3-2'
            }
        ]
    },
    {
        id: 9,
        label: '权限 4',
        children: [
            {
                id: 10,
                label: '权限 4-1'
            },
            {
                id: 11,
                label: '权限 4-2'
            }
        ]
    },
    {
        id: 12,
        label: '权限 5',
        children: [
            {
                id: 13,
                label: '权限 5-1'
            },
            {
                id: 14,
                label: '权限 5-2'
            }
        ]
    },
    {
        id: 15,
        label: '权限 6',
        children: [
            {
                id: 16,
                label: '权限 6-1'
            },
            {
                id: 17,
                label: '权限 6-2'
            }
        ]
    },
]

export default {
    userListData,
    permissionsList,
    permissionsTreeList
}
