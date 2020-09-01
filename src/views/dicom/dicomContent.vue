<template>
    <div class="dicomContent" v-loading="loading" element-loading-text="拼命加载中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">

        <div class="content">
            <div class="canvasList" ref="canvasList"></div>

            <div class="dicomMain">
                <div ref="canvas" class="image-canvas" oncontextmenu="return false"></div>
            </div>
        </div>

    </div>
</template>

<script>
    import { dicomContent } from '@/api/dicom';
    import { enable, parser, getDefaultViewportForImage, displayImage } from './components/dicomFun'
    import { realUrl, newDiv } from './components/tool'

    export default {
        name: 'dicomContent',
        data() {
            return {
                loading: true,
                seriesList: []
            }
        },
        activated() {
            this.init()
        },
        methods: {
            // dicom开始
            dicomStart() {
                // progress();
                // 渲染列表
                this.seriesList.map(item => {
                    if (item.instanceList[0]) {
                        let imageId = item.instanceList[0].imageId;
                        // 找到要渲染的元素
                        let canvas = newDiv();
                        canvas.onclick = () => {
                            this.dicomOpen(item)
                        }
                        this.$refs.canvasList.appendChild(canvas);
                        // 注册cornerstone
                        enable(canvas);
                        // 获取真实url 解析dicom
                        parser(realUrl(imageId), image => {
                            if (image) {
                                let viewport = getDefaultViewportForImage(canvas, image);
                                // 显示图像
                                displayImage(canvas, image, viewport);
                            }
                        });
                    }
                })
            },
            // 点击事件 打开dicom
            dicomOpen(item) {
                let imageList = item.instanceList;
                // 找到要渲染的元素
                let canvas = this.$refs.canvas;
                // 注册cornerstone
                enable(canvas);
                // 获取真实url 解析dicom
                parser(realUrl(imageList[0].imageId), image => {
                    if (image) {
                        let viewport = getDefaultViewportForImage(canvas, image);
                        // 显示图像
                        displayImage(canvas, image, viewport);

                        // 打开工具
                        this.initCanvasTools(canvas, imageList);
                    }
                });
            },
            // 激活工具
            initCanvasTools(canvas, imageList) {
                console.log(canvas, imageList);
            },
            // 初始化
            init() {
                dicomContent({id: this.$route.params.pathMatch}).then(res => {
                    // 未找到数据
                    if (!res.state) {
                        this.$router.push({name: 'dicom'})
                        return false;
                    }
                    this.seriesList = res.data.seriesList;
                    this.loading = false;
                    this.dicomStart()
                })
            }
        }
    }
</script>

<style lang="less">
    .dicomContent {
        display: flex; width: 98%;margin-left: 1%;height: 99%;background: white;position: relative;

        .content {
            position: absolute;width: 100%;height: 100%;left: 0;top: 0;flex-direction: row;

            .canvasList {
                width: 200px;height: 100%;overflow-y: scroll;background: black;display: flex;flex-direction: column;

                .list {
                    margin-bottom: 20px;display: flex;width: 200px;cursor: pointer;
                }
            }

            .dicomMain {
                display: flex;background: black;height: 100%;flex: 1;margin-left: 10px;

                .image-canvas {
                    width: 100%;height: 100%;
                }
            }
        }
    }
</style>
