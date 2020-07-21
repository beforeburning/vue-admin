/**
 Function: 字典
 User: burning <923398776@qq.com>
 Date: 2020年06月01日
 */

import dictionaryMockData from "../mockData/dictionary";

// 城市三级联动
const linkage = [
    {
        url: '/dictionary/provinceData',
        type: 'post',
        response: () => {
            let arr = []
            dictionaryMockData.cityData.map(item => {
                let str = {
                    id: item.id,
                    name: item.name
                }
                arr.push(str);
            })
            return {
                code: 200,
                state: true,
                message: '请求成功',
                data: arr
            }
        }
    },
    {
        url: '/dictionary/cityData',
        type: 'post',
        response: res => {
            let arr = []
            dictionaryMockData.cityData.map(item => {
                if (item.id === res.body.id) {
                    item.sub.map(item => {
                        let str = {
                            id: item.id,
                            name: item.name
                        }
                        arr.push(str);
                    })
                }
            })
            return {
                code: 200,
                state: true,
                message: '请求成功',
                data: arr
            }
        }
    },
    {
        url: '/dictionary/areaData',
        type: 'post',
        response: res => {
            let arr = []
            dictionaryMockData.cityData.map(item => {
                if (item.id === res.body.city) {
                    item.sub.map(item2 => {
                        if (item2.id === res.body.id) {
                            arr = item2.sub
                        }
                    })
                }
            })
            return {
                code: 200,
                state: true,
                message: '请求成功',
                data: arr
            }
        }
    }
]


export default [
    ...linkage
]
