/**
 Function: 权限管理数据
 User: burning <923398776@qq.com>
 Date: 2020年07月24日
 */

import userMockData from "../mockData/user";

const userListData = () => {
    let userList = [];
    for (let item in userMockData.userData) {
        let newObj = {
            ...userMockData.userData[item].user,
            ...userMockData.userInformation[userMockData.userData[item].user.name]
        }
        userList.push(newObj)
    }
    return userList
}

export default {
    userListData
}
