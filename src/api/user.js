/**
 Function: 用户接口
 User: burning <923398776@qq.com>
 Date: 2020年05月28日
 */

import request from '@/components/request'

// 登录
export const login = data => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}

// 退出登录
export const loginOut = data => {
    return request({
        url: '/user/loginOut',
        method: 'post',
        data
    })
}

// 获取用户数据
export const getUserData = data => {
    return request({
        url: '/user/getUserData',
        method: 'post',
        data
    })
}

// 保存用户数据
export const saveUserData = data => {
    return request({
        url: '/user/saveUserData',
        method: 'post',
        data
    })
}

// 修改密码
export const passwordModify = data => {
    return request({
        url: '/user/passwordModify',
        method: 'post',
        data
    })
}

// 登录记录
export const recordLog = data => {
    return request({
        url: '/user/recordLog',
        method: 'post',
        data
    })
}

// 是否进行过身份认证
export const getIdentity = data => {
    return request({
        url: '/user/getIdentity',
        method: 'post',
        data
    })
}

// 提交身份信息
export const submitIdentity = data => {
    return request({
        url: '/user/submitIdentity',
        method: 'post',
        data
    })
}
