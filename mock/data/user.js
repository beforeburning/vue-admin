/**
 Function: mock 用户
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */

// 用户账号密码验证和基础数据
const userData = {
    admin: {
        token: 'admin-token',
        password: '123456',
        user: {
            name: 'Burning',
            header: ''
        }
    },
    test: {
        token: 'test-token',
        password: '123456',
        user: {
            name: 'test',
            header: ''
        }
    }
};

// 用户数据
const userInformation = {
    Burning: {
        id: '923398776',
        name: 'Burning',
        eMail: '923398776@qq.com',
        qq: '923398776',
        weChat: 'love923398776',
        phone: '13000000000',
        age: '26',
        introduction: '啦啦啦~'
    },
    test: {
        id: '111111111',
        name: 'Burning',
        eMail: '111111111@qq.com',
        qq: '111111111',
        weChat: '111111111',
        phone: '13000000000',
        age: '18',
        introduction: '啦啦啦 我是test账号~'
    }
}

// 登录和退出登录
const user = [
    // 退出登录
    {
        url: '/user/loginOut',
        type: 'post',
        response: res => {
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
            console.log(1122)
            // 获取用户输入的账号密码
            const {username} = res.body;
            const {password} = res.body

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
    // 获取用户数据
    {
        url: '/user/getUserData',
        type: 'post',
        response: res => {
            // 通过token找到用户
            let user = {};
            for (let item in userData) {
                if (userData[item].token === res.body.token) {
                    user = userData[item];
                }
            }
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
                data: userInformation[user.user.name]
            }
        }
    },
    // 保存用户编辑的数据
    {
        url: '/user/saveUserData',
        type: 'post',
        response: res => {
            return {
                code: 200,
                state: true,
                message: '保存成功',
            }
        }
    }
]


export default [
    ...user
]
