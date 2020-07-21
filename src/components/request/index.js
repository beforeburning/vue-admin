/**
 Function: axios
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getConfig } from '@/utils/getConfig';

// axios 配置
const service = axios.create({
    baseURL: getConfig(['basis', 'baseURL']),
    withCredentials: true,
    timeout: 5000
});

// 发送数据时 自动添加token
service.interceptors.request.use(config => {
        if (store.state.token) {
            config.data = {
                ...config.data,
                token: store.state.token
            }
        }
        return config
    }, error => {
        return Promise.reject(error)
    }
);

// 接受数据时 处理错误信息
service.interceptors.response.use(response => {
        const res = response.data;
        if (res.code !== 200) {
            Message.error(res.message);
            return Promise.reject(new Error(res.message || 'Error'))
        } else if (res.state === false) {
            Message.error(res.message);
            return res;
        } else {
            return res;
        }
    }, error => {
        Message.error(res.message);
        return Promise.reject(error)
    }
);

export default service
