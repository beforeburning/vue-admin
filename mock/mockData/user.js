/**
 Function: 用户数据
 User: burning <923398776@qq.com>
 Date: 2020年07月21日
 */
import fa from "element-ui/src/locale/lang/fa";

// 用户账号密码验证和基础数据
const userData = {
    admin: {
        token: 'admin-token',
        password: 'de1d0799cddb7336ef97331c016008a4',
        user: {
            name: 'Burning',
            header: 'https://himg.bdimg.com/sys/portrait/item/b08ee6a5aae7a5885f5f5f5f5f5f5f4a43.jpg',
            permissions: 'admin',
            position: '超级管理员',
            state: true
        }
    },
    super: {
        token: 'super-token',
        password: 'de1d0799cddb7336ef97331c016008a4',
        user: {
            name: 'super',
            header: 'https://himg.bdimg.com/sys/portrait/item/b08ee6a5aae7a5885f5f5f5f5f5f5f4a43.jpg',
            permissions: 'super',
            position: '管理员',
            state: true
        }
    },
    test: {
        token: 'test-token',
        password: 'de1d0799cddb7336ef97331c016008a4',
        user: {
            name: 'test',
            header: 'https://himg.bdimg.com/sys/portrait/item/b08ee6a5aae7a5885f5f5f5f5f5f5f4a43.jpg',
            permissions: 'employees',
            position: '用户',
            state: true
        }
    }
};

// 循环插入测试用户
for (let i = 0; i < 20; i++) {
    userData[`demo${i}`] = {
        [`demo${i}`]: {
            token: 'demo-token',
            password: '',
            user: {
                name: `用户${i}`,
                header: 'https://himg.bdimg.com/sys/portrait/item/b08ee6a5aae7a5885f5f5f5f5f5f5f4a43.jpg',
                permissions: 'employees',
                position: '用户',
                state: i !== 0
            }
        }
    }
}

// 用户数据 通过账号数据下的name定位
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
    super: {
        id: '111111111',
        name: 'super',
        eMail: '111111111@qq.com',
        qq: '111111111',
        weChat: '111111111',
        phone: '13000000000',
        age: '18',
        introduction: '啦啦啦 我是super账号~',
        province: 2,
        city: 202,
        area: 20201,
    },
    test: {
        id: '111111111',
        name: 'test',
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

// 用户登录日志数据
let recordLog = {
    Burning: [],
    super: [],
    test: []
}

// 循环插入用户登录日志的数据
for (let i = 0; i < 20; i++) {
    let demoData = [
        {
            date: '2020-07-21',
            equipment: '移动端',
            system: 'ios',
            way: '普通登录',
            ip: '192.168.1.1',
        },
        {
            date: '2020-07-21',
            equipment: '电脑端',
            system: 'macOS Catalina',
            way: '普通登录',
            ip: '192.168.1.1',
        }
    ]
    recordLog.Burning.push(...demoData)
}

const identity = {
    Burning: {
        name: '啦**',
        idCard: '3201051994********'
    },
    super: {},
    test: {}
}

export default {
    userData,
    userInformation,
    recordLog,
    identity
}
