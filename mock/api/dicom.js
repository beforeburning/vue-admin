/**
 Function: 影像系统
 User: burning <923398776@qq.com>
 Date: 2020年08月27日
 */


import dicomMockData from "../mockData/dicom";

// 城市三级联动
const dicom = [
    {
        url: '/dicom/dicomList',
        type: 'post',
        response: () => {
            return {
                code: 200,
                state: true,
                data: dicomMockData.dicomList,
                message: '请求成功'
            }
        }
    },
    {
        url: '/dicom/dicomContent',
        type: 'post',
        response: res => {
            let data = dicomMockData.dicomContent[res.body.id]
            if (!data) {
                return {
                    code: 200,
                    state: false,
                    message: '未找到数据'
                }
            }
            return {
                code: 200,
                state: true,
                message: '请求成功',
                data: data
            }
        }
    },
    {
        url: '/dicom/dicomDefaultData',
        type: 'post',
        response: res => {
            let data = dicomMockData.dicomDefaultData[res.body.id];
            if (!data) {
                return {
                    code: 200,
                    state: true,
                    message: '没有默认数据'
                }
            }
            return {
                code: 200,
                state: true,
                message: '请求成功',
                data: data
            }
        }
    }
]


export default [
    ...dicom
]
