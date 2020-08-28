/**
 Function: 影像系统
 User: burning <923398776@qq.com>
 Date: 2020年08月27日
 */

import request from '@/components/request'

// 患者列表
export const dicomList = () => {
    return request({
        url: '/dicom/dicomList',
        method: 'post',
    })
}

// 影像详情
export const dicomContent = data => {
    return request({
        url: '/dicom/dicomContent',
        method: 'post',
        data
    })
}
