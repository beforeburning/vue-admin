/**
 Function: 字典
 User: burning <923398776@qq.com>
 Date: 2020年06月01日
 */

const data = [
    {
        id: 1,
        name: '江苏',
        sub: [
            {
                id: 101,
                name: '南京',
                sub: [
                    {
                        id: 10101,
                        name: '秦淮区',
                    },
                    {
                        id: 10102,
                        name: '鼓楼区',
                    }
                ]
            },
            {
                id: 102,
                name: '苏州',
                sub: [
                    {
                        id: 10201,
                        name: '苏州区1',
                    },
                    {
                        id: 10202,
                        name: '苏州区2',
                    }
                ]
            }
        ]
    },
    {
        id: 2,
        name: '浙江',
        sub: [
            {
                id: 201,
                name: '杭州',
                sub: [
                    {
                        id: 20101,
                        name: '杭州区1',
                    },
                    {
                        id: 20102,
                        name: '杭州区2',
                    }
                ]
            },
            {
                id: 202,
                name: '宁波',
                sub: [
                    {
                        id: 20201,
                        name: '宁波区1',
                    },
                    {
                        id: 20202,
                        name: '宁波区2',
                    }
                ]
            }
        ]
    }
]

// 城市三级联动
const linkage = [
    {
        url: '/dictionary/provinceData',
        type: 'post',
        response: () => {
            let arr = []
            data.map(item => {
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
            data.map(item => {
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
            data.map(item => {
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
