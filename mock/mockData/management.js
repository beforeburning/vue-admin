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
        addTime: 1597136214
    },
    {
        id: 2,
        name: 'super',
        label: '管理员',
        addTime: 1597049813
    },
    {
        id: 3,
        name: 'employees',
        label: '普通用户',
        addTime: 1596963413
    }
]

export default {
    userListData,
    permissionsList
}
