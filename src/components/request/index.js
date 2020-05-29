/**
 Function: axios
 User: burning <923398776@qq.com>
 Date: 2019年08月14日
 */
import axios from 'axios'
import { Message } from 'element-ui'
import store from '@/store'
import { getConfig } from '@/utils/getConfig';

// create an axios instance
const service = axios.create({
    baseURL: getConfig(['basis', 'baseURL']),
    withCredentials: true,
    timeout: 5000
});

// request interceptor
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

// response interceptor
service.interceptors.response.use(response => {
        const res = response.data;

        if (res.code !== 200) {
            Message({
                message: res.message || 'Error',
                type: 'error',
                duration: 5 * 1000
            });

            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    }, error => {
        console.log('err' + error); // for debug
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        });
        return Promise.reject(error)
    }
);

export default service
