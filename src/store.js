import Vue from "vue";
import Vuex from "vuex";
import { storage } from "@/utils/localStorage.js";

Vue.use(Vuex);

// 创建Vuex.Store实例
export default new Vuex.Store({
    // 数据源
    state: {
        num: 1,
        token: false,
        tagsView: false,
        config: {},
        user: false
    },
    // 操作state对象属性的方法
    mutations: {
        add: (state, payload) => {
            state.num += parseInt(payload);
        },
        token: (state, payload) => {
            state.token = payload;
            storage.set('token', payload);
        },
        cachedViews: state => state.tagsView.cachedViews,
        config: (state, payload) => state.config = payload,
        user: (state, payload) => state.user = payload,
    },
    // 官方推荐的获取值方式 实时监听state值的变化
    getters: {
        getNum: state => state.num,
        getToken: state => state.token,
        getTagsView: state => state.tagsView,
        config: state => state.config,
        user: state => state.user
    },
    // 触发mutations里函数的方法
    actions: {
        add(context, num) {
            context.commit('add', num)
        }
    }
});
