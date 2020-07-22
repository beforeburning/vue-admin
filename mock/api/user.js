/**
 Function: mock 用户
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */
import userMockData from "../mockData/user";
import { tokenGetUser } from "../utils";

// 登录和退出登录
const user = [
    // 退出登录
    {
        url: '/user/loginOut',
        type: 'post',
        response: () => {
            return {
                code: 200,
                state: true,
                message: '退出成功'
            }
        }
    },
    // 用户登录
    {
        url: '/user/login',
        type: 'post',
        response: res => {
            // 获取用户输入的账号密码
            const {username} = res.body;
            const {password} = res.body

            if (!userMockData.userData[username]) {
                return {
                    code: 200,
                    state: false,
                    message: '用户不存在'
                }
            }

            const validationUser = userMockData.userData[username];
            const validationPassword = validationUser.password;

            // 验证账号密码是否正确
            if (!validationUser || validationPassword !== password) {
                return {
                    code: 200,
                    state: false,
                    message: '账号密码不正确'
                }
            }

            return {
                code: 200,
                state: true,
                message: '登录成功',
                data: validationUser
            }
        }
    },
    // 获取用户数据
    {
        url: '/user/getUserData',
        type: 'post',
        response: res => {
            // 找到用户
            let user = tokenGetUser(res.body.token);

            if (JSON.stringify(user) === '{}') {
                return {
                    code: 200,
                    state: false,
                    message: 'token已失效'
                }
            }
            return {
                code: 200,
                state: true,
                message: '获取成功',
                data: userMockData.userInformation[user.user.name]
            }
        }
    },
    // 保存用户编辑的数据
    {
        url: '/user/saveUserData',
        type: 'post',
        response: () => {
            return {
                code: 200,
                state: true,
                message: '保存成功',
            }
        }
    },
    // 修改密码
    {
        url: '/user/passwordModify',
        type: 'post',
        response: res => {
            // 找到用户
            let user = tokenGetUser(res.body.token);

            let oldPassword = res.body.password
            if (oldPassword === user.password) {
                return {
                    code: 200,
                    state: true,
                    message: '修改成功',
                }
            } else {
                return {
                    code: 200,
                    state: false,
                    message: '您输入的旧密码不正确',
                }
            }

        }
    },
    // 登录记录
    {
        url: '/user/recordLog',
        type: 'post',
        response: res => {
            // 找到用户
            let user = tokenGetUser(res.body.token);
            // 日志数据
            let data = userMockData.recordLog[user.user.name];
            return {
                code: 200,
                state: true,
                data: data,
                message: '获取成功',
            }

        }
    },
    // 是否进行过身份认证
    {
        url: '/user/getIdentity',
        type: 'post',
        response: res => {
            // 找到用户
            let user = tokenGetUser(res.body.token);
            let data = userMockData.identity[user.user.name]
            return {
                code: 200,
                state: true,
                data: data,
                message: '获取成功'
            }
        }
    },
    // 提交身份信息
    {
        url: '/user/submitIdentity',
        type: 'post',
        response: () => {
            return {
                code: 200,
                state: true,
                message: '提交成功'
            }
        }
    },
]


export default [
    ...user
]
