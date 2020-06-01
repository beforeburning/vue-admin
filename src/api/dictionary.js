/**
 Function: 字典
 User: burning <923398776@qq.com>
 Date: 2020年06月01日
 */

import request from '@/components/request'

// 省
export const getProvinceData = data => {
    return request({
        url: '/dictionary/provinceData',
        method: 'post',
        data
    })
}

// 市
export const getCityData = data => {
    return request({
        url: '/dictionary/cityData',
        method: 'post',
        data
    })
}

// 区
export const getAreaData = data => {
    return request({
        url: '/dictionary/areaData',
        method: 'post',
        data
    })
}
