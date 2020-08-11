/**
 Function: 权限管理 接口
 User: burning <923398776@qq.com>
 Date: 2020年07月24日
 */

import request from '@/components/request'

// 用户列表
export const getUserList = data => {
    return request({
        url: '/management/getUserList',
        method: 'post',
        data
    })
}

// 权限列表
export const getPermissionsList = data => {
    return request({
        url: '/management/getPermissionsList',
        method: 'post',
        data
    })
}

// 保存用户操作
export const saveOperation = data => {
    return request({
        url: '/management/saveOperation',
        method: 'post',
        data
    })
}
