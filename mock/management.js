/**
 Function: mock 问答管理
 User: burning <923398776@qq.com>
 Date: 2019年08月20日
 */

const lv1 = [
    {
        value: 0,
        label: '全部'
    }, {
        value: 1,
        label: '儿科'
    }, {
        value: 2,
        label: '传染科'
    }
];

const lv2 = {
    '0': [
        {
            value: 0,
            label: '全部'
        }
    ],
    '1': [
        {
            value: 0,
            label: '全部'
        },
        {
            value: 11,
            label: '小儿内科'
        }, {
            value: 12,
            label: '小儿外科'
        }
    ],
    '2': [
        {
            value: 0,
            label: '全部'
        },
        {
            value: 21,
            label: '肝病科'
        }
    ]
};

const lv3 = {
    '0': [
        {
            value: 0,
            label: '全部'
        }
    ],
    '11': [
        {
            value: 0,
            label: '全部'
        },
        {
            value: 1,
            label: '儿童口吃'
        }, {
            value: 2,
            label: '鹅口疮'
        }, {
            value: 3,
            label: '小儿腹泻'
        }
    ],
    '12': [
        {
            value: 0,
            label: '全部'
        },
        {
            value: 1,
            label: '疝气'
        }, {
            value: 2,
            label: '小儿肠套叠'
        }, {
            value: 3,
            label: '小儿脑积水'
        }
    ],
    '21': [
        {
            value: 0,
            label: '全部'
        },
        {
            value: 1,
            label: '乙肝'
        }, {
            value: 2,
            label: '肝炎'
        }, {
            value: 3,
            label: '丙肝'
        }
    ],
};

const list = {
    total: 100,
    list: [
        {
            id: 136834286,
            title: '小儿腹泻的治疗方法',
            quester: '潘婷晴子',
            askNum: '1/1',
            askTime: '2019-04-08 10:16:59'
        },
        {
            id: 136830127,
            title: '黄疸分类',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '宝宝反复发烧的原因',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '发烧了怎么办如何退烧',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '宝宝吓到了有哪些表现',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '先天愚型儿',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136834286,
            title: '小儿腹泻的治疗方法',
            quester: '潘婷晴子',
            askNum: '1/1',
            askTime: '2019-04-08 10:16:59'
        },
        {
            id: 136830127,
            title: '黄疸分类',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '宝宝反复发烧的原因',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '发烧了怎么办如何退烧',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '宝宝吓到了有哪些表现',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '先天愚型儿',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136834286,
            title: '小儿腹泻的治疗方法',
            quester: '潘婷晴子',
            askNum: '1/1',
            askTime: '2019-04-08 10:16:59'
        },
        {
            id: 136830127,
            title: '黄疸分类',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '宝宝反复发烧的原因',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '发烧了怎么办如何退烧',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '宝宝吓到了有哪些表现',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        },
        {
            id: 136830127,
            title: '先天愚型儿',
            quester: '沦城',
            askNum: '1/1',
            askTime: '2019-04-03 16:39:36'
        }
    ]
}


export default [
    {
        url: '/management/lv1',
        type: 'post',
        response: () => {
            return {
                code: 20000,
                message: 'success',
                data: lv1
            }
        }
    },
    {
        url: '/management/lv2',
        type: 'post',
        response: config => {
            let lv1Changed = config.body.lv1Changed;
            return {
                code: 20000,
                message: 'success',
                data: lv2[lv1Changed]
            }
        }
    },
    {
        url: '/management/lv3',
        type: 'post',
        response: config => {
            let lv2Changed = config.body.lv2Changed;
            return {
                code: 20000,
                message: 'success',
                data: lv3[lv2Changed]
            }
        }
    },
    {
        url: '/management/list',
        type: 'post',
        response: () => {
            return {
                code: 20000,
                message: 'success',
                data: list
            }
        }
    },
]
