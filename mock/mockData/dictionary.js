/**
 Function: 字典数据
 User: burning <923398776@qq.com>
 Date: 2020年07月21日
 */

const cityData = [
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

export default {
    cityData
}
