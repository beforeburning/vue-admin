/**
 Function: 权限控制
 User: burning <923398776@qq.com>
 Date: 2020年07月23日
 */

import router from '../../router';
import store from "../../store";
import { Message, MessageBox } from 'element-ui';

export const permissions = () => {

    router.beforeEach((to, from, next) => {
        // 保持token
        store.state.token ? store.state.token : store.commit('token', window.localStorage.getItem('token') ? window.localStorage.getItem('token') : '');
        // 保持user
        let user = JSON.parse(window.localStorage.getItem('user'))
        store.state.user ? store.state.user : store.commit('user', user ? user : '');

        // 判断是否有token
        if (!store.state.token && !to.meta.donToKen) {
            Message.error('您的登录已失效,请重新登录')
            next({name: 'login'})
        }

        // 权限判断
        if (user) {
            let position = user.permissions;
            // 判断页面是否需要权限验证
            if (to.meta.permissions && to.meta.permissions.indexOf(position) === -1) {
                Message.warning('您没有权限访问该页面');
                next({name: 'notPermissions'});
            }
        }

        next();
    });

}
