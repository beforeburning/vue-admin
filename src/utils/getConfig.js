/**
 Function: 获取config配置
 User: burning <923398776@qq.com>
 Date: 2020年03月11日
 */

import store from '@/store';
import config from '../../public/config.json';

// 读取vuex里面的config数据
export const getConfig = str => {
    let configData = store.getters.config;
    if (JSON.stringify(configData) === '{}') {
        store.commit('config', config);
        configData = config;
    }
    str.map(item => {
        configData = configData[item]
    })
    return configData
};
