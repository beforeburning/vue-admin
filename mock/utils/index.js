/**
 Function: mock方法的工具类
 User: burning <923398776@qq.com>
 Date: 2020年07月21日
 */

import userMockData from "../mockData/user";

// 通过token找到mock的用户
export const tokenGetUser = token => {
    let user = {};
    for (let item in userMockData.userData) {
        if (userMockData.userData[item].token === token) {
            user = userMockData.userData[item];
            break;
        }
    }
    return user
}
