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
        name: 'admin',
        label: '超级管理员'
    },
    {
        name: 'super',
        label: '管理员'
    },
    {
        name: 'employees',
        label: '普通用户'
    }
]

export default {
    userListData,
    permissionsList
}
