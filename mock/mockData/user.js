/**
 Function: 用户数据
 User: burning <923398776@qq.com>
 Date: 2020年07月21日
 */

// 用户账号密码验证和基础数据
const userData = {
    admin: {
        token: 'admin-token',
        password: '123456',
        user: {
            name: 'Burning',
            header: 'https://himg.bdimg.com/sys/portrait/item/b08ee6a5aae7a5885f5f5f5f5f5f5f4a43.jpg'
        }
    },
    test: {
        token: 'test-token',
        password: '123456',
        user: {
            name: 'test',
            header: 'https://himg.bdimg.com/sys/portrait/item/b08ee6a5aae7a5885f5f5f5f5f5f5f4a43.jpg'
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
        introduction: '啦啦啦~',
        province: 1,
        city: 101,
        area: 10101
    },
    test: {
        id: '111111111',
        name: 'Burning',
        eMail: '111111111@qq.com',
        qq: '111111111',
        weChat: '111111111',
        phone: '13000000000',
        age: '18',
        introduction: '啦啦啦 我是test账号~',
        province: 2,
        city: 202,
        area: 20201,
    }
}

export default {
    userData,
    userInformation
}
