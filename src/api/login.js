/**
 Function: mock login
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */

import request from '@/utils/request'

export const login = (data) => {
    return request({
        url: '/user/login',
        method: 'post',
        data
    })
}
