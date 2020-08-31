import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// 全局引入element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

// 公共样式
import '@/assets/less/normalize.less';
import '@/assets/less/public.less';

// 字体图标
import 'font-awesome/css/font-awesome.min.css'

// css3效果
import animated from 'animate.css' // npm install animate.css --save安装，再引入
Vue.use(animated)

// 🌈进度条
import VueInsProgressBar from 'vue-ins-progress-bar';

Vue.use(VueInsProgressBar, {
    position: 'fixed',
    show: true,
    height: '2px'
});

// 动态设置title
import VueWechatTitle from 'vue-wechat-title';

Vue.use(VueWechatTitle);

// 阻止vue在启动时生成生产提示
Vue.config.productionTip = false;

// 过滤器
import * as filters from './filters';

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

// mock.js 模拟数据  要改为express
import { mockXHR } from '../mock';

// 是否开启mock
if (process.env.NODE_ENV === 'development') {
    mockXHR()
}

// 权限管理 刷新后恢复token router.beforeEach
import { permissions } from './components/permissions';

permissions();

// echarts
import echarts from 'echarts';

Vue.prototype.$echarts = echarts;

// 视频组件
import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
Vue.use(VideoPlayer);

// 图片延迟加载 v-lazy="img.src"
import VueLazyload from 'vue-lazyload'

Vue.use(VueLazyload);
Vue.use(VueLazyload, {
    preLoad: 1.3,
    error: 'dist/error.png',
    loading: 'dist/loading.gif',
    attempt: 1
});

// // dicom 引入 cornerstone, dicomParser, cornerstoneWADOImageLoader
// import * as cornerstone from "cornerstone-core";
// import * as dicomParser from "dicom-parser";
// // import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";
// import * as cornerstoneWADOImageLoader from "./assets/dicom/cornerstoneWADOImageLoader.min";
//
// Vue.use(cornerstone);
// Vue.use(dicomParser);
// Vue.use(cornerstoneWADOImageLoader);
// // //指定要注册加载程序的基石实例
// // cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
// //
// // const config = {
// //     webWorkerPath: "/src/assets/dicom/cornerstoneWADOImageLoaderWebWorker.min",
// //     taskConfiguration: {
// //         decodeTask: {
// //             codecsPath: "/src/assets/dicom/cornerstoneWADOImageLoaderCodecs.min"
// //         }
// //     }
// // };
// // cornerstoneWADOImageLoader.webWorkerManager.initialize(config);

// mixin 全局混入
Vue.mixin({
    created() {
        // console.log('全局混入的钩子函数');
    }
});

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
