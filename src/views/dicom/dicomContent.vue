<template>
    <div class="dicomContent" v-loading="loading" element-loading-text="拼命加载中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">

        <div class="content">
<!--            <div class="dicom" ref="dicomImage"></div>-->
111
        </div>

    </div>
</template>

<script>
    import { dicomContent } from '@/api/dicom';

    //引入 cornerstone,dicomParser,cornerstoneWADOImageLoader
    import * as cornerstone from "cornerstone-core";
    import * as dicomParser from "dicom-parser";

    // 不建议 npm 安装 cornerstoneWADOImageLoader 如果你做了 会很头疼
    // import * as cornerstoneWADOImageLoader from "../../utils/dicom/cornerstoneWADOImageLoader.js";
    import * as cornerstoneWADOImageLoader from "cornerstone-wado-image-loader";

    // Cornerstone 工具外部依赖
    import Hammer from "hammerjs";
    import * as cornerstoneMath from "cornerstone-math";
    import * as cornerstoneTools from "cornerstone-tools";

    // Specify external dependencies
    cornerstoneTools.external.Hammer = Hammer;
    cornerstoneTools.external.cornerstone = cornerstone;
    cornerstoneTools.external.cornerstoneMath = cornerstoneMath;
    cornerstoneTools.external.dicomParser = dicomParser;
    cornerstoneWADOImageLoader.external.cornerstoneMath = cornerstoneMath;
    cornerstoneWADOImageLoader.external.dicomParser = dicomParser;

    //指定要注册加载程序的基石实例
    cornerstoneWADOImageLoader.external.cornerstone = cornerstone;

    // 下面这些好像配不配置无所谓
    cornerstone.registerImageLoader("http", cornerstoneWADOImageLoader.loadImage);
    cornerstone.registerImageLoader("https", cornerstoneWADOImageLoader.loadImage);

    // 配置 webWorker (必须配置)
    //注意这里的路径问题  如果路径不对 cornerstoneWADOImageLoaderWebWorker 会报错 index.html Uncaught SyntaxError: Unexpected token <
    const config = {
        webWorkerPath: "../..//utils/dicom/cornerstoneWADOImageLoaderWebWorker.js",
        taskConfiguration: {
            decodeTask: {
                codecsPath: "../..//utils/dicom/cornerstoneWADOImageLoaderCodecs.js"
            }
        }
    };
    cornerstoneWADOImageLoader.webWorkerManager.initialize(config);


    export default {
        name: "dicomContent",
        data() {
            return {
                loading: true,
            }
        },
        activated() {
            this.init()
        },
        methods: {
            init() {
                dicomContent({id: this.$route.params.pathMatch}).then(res => {
                    // 未找到数据
                    if (!res.state) {
                        this.$router.push({name: 'dicom'})
                        return false;
                    }
                    console.log(res.data);
                    this.loading = false
                })
            }
        }
    }
</script>

<style scoped lang="less">
    .dicomContent {
        display: flex; width: 98%;margin-left: 1%;height: 99%;background: white;position: relative;

        .content {
            position: absolute;width: 100%;height: 100%;left: 0;top: 0;
        }
    }
</style>
