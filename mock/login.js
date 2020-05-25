/**
 Function: 登录
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */

const tokens = {
    admin: {
        token: 'admin-token',
        user: {
            name: 'Burning'
        }
    },
    editor: {
        token: 'editor-token',
        user: {
            name: 'Burning'
        }
    }
};

const users = {
    'admin-token': {
        roles: ['admin'],
        introduction: 'I am a super administrator',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Super Admin'
    },
    'editor-token': {
        roles: ['editor'],
        introduction: 'I am an editor',
        avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
        name: 'Normal Editor'
    }
};

export default [
    // user login
    {
        url: '/user/login',
        type: 'post',
        response: config => {
            const {username} = config.body;
            const token = tokens[username];
            // mock error
            if (!token) {
                return {
                    code: 60204,
                    message: '账号密码不正确'
                }
            }

            return {
                code: 20000,
                message: '登录成功',
                data: token
            }
        }
    },

    // get user info
    {
        url: '/user/info\.*',
        type: 'get',
        response: config => {
            const {token} = config.query;
            const info = users[token];

            // mock error
            if (!info) {
                return {
                    code: 50008,
                    message: 'Login failed, unable to get user details.'
                }
            }

            return {
                code: 20000,
                data: info
            }
        }
    },

    // user logout
    {
        url: '/user/logout',
        type: 'post',
        response: _ => {
            return {
                code: 20000,
                data: 'success'
            }
        }
    }
]
