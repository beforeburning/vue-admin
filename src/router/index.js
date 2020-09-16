import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Layout from '@/layout';

// 以下代码解决了vue-router没有回调函数情况下乱报错的问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

import { getConfig } from '@/utils/getConfig';

let permissions = getConfig(['permissions', 'management'])

// 路由分类
// 404状态类
let notFound = [
    {
        path: '*',
        component: Layout,
        hidden: true,
        redirect: '/error/404',
        meta: {
            title: '找不到页面',
        },
        children: [
            {
                path: '404',
                component: () => import('@/views/error/404'),
                name: 'notFound',
                meta: {title: '找不到页面'}
            },
            {
                path: '403',
                component: () => import('@/views/error/403'),
                name: 'notPermissions',
                meta: {title: '没有权限'}
            }
        ]
    }
]

// 单状态页面
let separate = [
    {
        path: '/',
        component: () => import('@/views/separate/login'),
        name: 'login',
        hidden: true,
        meta: {
            title: '登录',
            donToKen: true
        },
    },
    {
        path: '/welcome',
        component: Layout,
        hidden: true,
        children: [
            {
                path: '/',
                component: () => import('@/views/separate/welcome'),
                hidden: true,
                name: 'welcome',
                meta: {title: '欢迎'}
            }
        ]
    },
]

// 用户中心
let user = [
    {
        path: '/user',
        component: Layout,
        hidden: true,
        redirect: '/user/personal',
        children: [
            {
                path: 'personal',
                component: () => import('@/views/user/personal'),
                hidden: true,
                name: 'personal',
                meta: {title: '个人中心'}
            },
            {
                path: 'account',
                component: () => import('@/views/user/account'),
                hidden: true,
                name: 'account',
                meta: {title: '账户设置'}
            }
        ]
    },
]

// 基础知识
let basis = [
    {
        path: '/basis',
        component: Layout,
        redirect: '/basis/vuex',
        meta: {
            title: '基础知识',
            icon: 'el-icon-sugar'
        },
        children: [
            {
                path: 'vuex',
                component: () => import('@/views/basis/vuex'),
                name: 'vuex',
                meta: {title: 'vuex'}
            },
            {
                path: 'lifeCycle',
                component: () => import('@/views/basis/lifeCycle'),
                name: 'lifeCycle',
                meta: {title: '生命周期'}
            },
            {
                path: 'model',
                component: () => import('@/views/basis/model'),
                name: 'model',
                meta: {title: '双向绑定'}
            },
            {
                path: 'mixin',
                component: () => import('@/views/basis/mixin'),
                name: 'mixin',
                meta: {title: '对象混入'}
            },
        ]
    },
]

// 基础类库
let library = [
    {
        path: '/library',
        component: Layout,
        redirect: '/library/draggable',
        meta: {
            title: '基础类库',
            icon: 'el-icon-milk-tea'
        },
        children: [
            {
                path: 'draggable',
                component: () => import('@/views/library/draggable'),
                name: 'draggableLibrary',
                meta: {
                    title: '拖拽功能',
                    noCache: true,
                    affix: true
                },
            },
            {
                path: 'echarts',
                component: () => import('@/views/library/echarts'),
                name: 'echarts',
                meta: {title: 'chartjs图标'}
            },
            {
                path: 'calendar',
                component: () => import('@/views/library/calendar'),
                name: 'calendar',
                meta: {title: '日历插件'}
            },
            {
                path: 'video',
                component: () => import('@/views/library/video'),
                name: 'videoLibrary',
                meta: {title: '视频播放'}
            },
        ]
    },
]

// 管理
let management = [
    {
        path: '/management',
        component: Layout,
        redirect: '/management/permissions',
        meta: {
            title: '权限配置',
            icon: 'el-icon-s-tools',
            permissions: permissions
        },
        children: [
            {
                path: 'user',
                component: () => import('@/views/management/userPermissions'),
                name: 'user',
                meta: {
                    title: '用户管理',
                    permissions: permissions
                }
            },
            {
                path: 'role',
                component: () => import('@/views/management/roleConfiguration'),
                name: 'role',
                meta: {
                    title: '角色配置',
                    permissions: permissions
                }
            },
        ]
    },
]

// 影像系统
let dicom = [
    {
        path: '/dicom',
        component: Layout,
        redirect: '/dicom/index',
        meta: {
            title: '影像系统',
            icon: 'el-icon-video-camera'
        },
        children: [
            {
                path: 'dicom',
                component: () => import('@/views/dicom/index'),
                name: 'dicom',
                meta: {
                    title: '影像系统',
                    noCache: true,
                    affix: true
                },
            },
            {
                path: 'dicomContent/*',
                component: () => import('@/views/dicom/dicomContent'),
                name: 'dicomContent',
                hidden: true,
                meta: {
                    title: '影像详情',
                    noCache: true,
                    affix: true
                },
            }
        ]
    },
]

// 路由
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        ...notFound,
        ...separate,
        ...user,
        ...basis,
        ...library,
        ...dicom,
        ...management
    ]
});
