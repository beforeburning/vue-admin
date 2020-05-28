/**
 Function: 登录
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */

const userData = {
    admin: {
        token: 'admin-token',
        password: '123456',
        user: {
            name: 'Burning'
        }
    }
};

// 登录和推图登录
const login = [
    // 用户登录
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            // 获取用户输入的账号密码
            const {username} = config.body;
            const {password} = config.body

            const validationUser = userData[username];
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
    // 退出登录
    {
        url: '/user/loginOut',
        type: 'post',
        response: _ => {
            return {
                code: 200,
                data: 'success'
            }
        }
    }
]


export default [
    ...login
]
