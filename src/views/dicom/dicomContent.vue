<template>
    <div class="dicomContent" v-loading="loading" element-loading-text="拼命加载中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">

        <div class="content">
            <div class="canvasList" ref="canvasList"></div>

            <div class="dicomMain" ref="dicomMain">
                <div class="btn" v-show="seriesList">
                    <el-button
                        :type="currentBtn === 'wwwc' ? 'success' : 'danger' "
                        icon="el-icon-sunrise"
                        @click="wwwc()" round></el-button>
                    <el-button
                        type="danger"
                        :icon="isInvert ? 'el-icon-sunny' : 'el-icon-moon'"
                        @click="invert()" round></el-button>
                    <el-button
                        :type="currentBtn === 'zoom' ? 'success' : 'danger' "
                        icon="el-icon-search"
                        @click="zoom()" round></el-button>
                    <el-button
                        :type="currentBtn === 'pan' ? 'success' : 'danger' "
                        icon="el-icon-rank"
                        @click="pan()" round></el-button>
                    <el-button
                        :type="currentBtn === 'stackScroll' ? 'success' : 'danger' "
                        icon="el-icon-orange"
                        @click="stackScroll()" round></el-button>
                </div>
                <div ref="canvas" class="image-canvas" oncontextmenu="return false">
                </div>
                <div class="parameterMonitoringRight">
                    <span>
                        <p>Img:</p>
                        <em>
                            {{ newImageMonitoring.currentImageIdIndex }}/{{ newImageMonitoring.imageIds }}
                        </em>
                    </span>
                    <span>
                        <p>FPS:</p><em>{{ newImageMonitoring.frameRate ? newImageMonitoring.frameRate : 0 }}</em>
                    </span>
                    <span>
                        <p>Zoom:</p><em>{{ imageRenderedMonitoring.zoom }}</em>
                    </span>
                    <span>
                        <p>WW/WL:</p><em>{{ imageRenderedMonitoring.wwwc }}</em>
                    </span>
                    <span>
                        <p>renderTime:</p><em>{{ imageRenderedMonitoring.renderTime }}</em>
                    </span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import elementResizeDetectorMaker from 'element-resize-detector'
    import { dicomContent } from '@/api/dicom';
    import { enable, parser, getDefaultViewportForImage, displayImage, dicomTool, resize } from './components/dicomFun'
    import { realUrl, newDiv } from './components/tool'

    export default {
        name: 'dicomContent',
        data() {
            return {
                loading: true,
                seriesList: [],
                currentBtn: false,
                // 当前canvas的参数
                currentCanvas: '',
                currentImageList: '',
                currentViewPort: '',
                // 工具类用到的值
                isInvert: false,
                imageRenderedMonitoring: {},
                newImageMonitoring: {}
            }
        },
        activated() {
            this.init()
        },
        methods: {
            // dicom开始
            dicomStart() {
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

                // 直接打开第一个
                if (this.$refs.canvasList.children[0]) {
                    this.$refs.canvasList.children[0].click()
                }
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

                        this.currentCanvas = canvas;
                        this.currentImageList = imageList;
                        this.currentViewPort = viewport;
                        // 开启鼠标控制
                        dicomTool.init(canvas);

                        // 监听各个参数
                        dicomTool.imageRenderedMonitoring(canvas, data => {
                            this.imageRenderedMonitoring = data;
                        })
                        dicomTool.newImageMonitoring(canvas, data => {
                            this.newImageMonitoring = data;
                        })
                    }
                });

                // 修改窗口大小
                elementResizeDetectorMaker().listenTo(this.$refs.dicomMain, () => {
                    resize(canvas)
                })
            },
            // 功能按钮的抽象方法
            btnType(type, fun) {
                let canvas = this.currentCanvas;
                if (canvas && this.currentBtn === type) {
                    // 关闭功能 禁用全部
                    this.currentBtn = '';
                    dicomTool.disableAllTools(canvas);
                    return false;
                } else {
                    this.currentBtn = type;
                    dicomTool.disableAllTools(canvas);
                    fun(canvas)
                }
            },
            // 亮度调整
            wwwc() {
                this.btnType('wwwc', canvas => {
                    dicomTool.wwwc(canvas)
                })
            },
            // 反色
            invert() {
                let canvas = this.currentCanvas;
                this.isInvert = !this.isInvert;
                this.currentBtn = '';
                dicomTool.disableAllTools(canvas);
                dicomTool.invert(canvas, this.isInvert)
            },
            // 放大
            zoom() {
                this.btnType('zoom', canvas => {
                    dicomTool.zoom(canvas)
                })
            },
            // 移动
            pan() {
                this.btnType('pan', canvas => {
                    dicomTool.pan(canvas)
                })
            },
            // 滚动
            stackScroll() {
                let allImageIds = [];
                this.currentImageList.forEach(item => {
                    let imageUrl = realUrl(item.imageId);
                    allImageIds.push(imageUrl);
                });
                let canvasStack = {
                    currentImageIdIndex: 0,
                    imageIds: allImageIds
                };
                this.btnType('stackScroll', canvas => {
                    dicomTool.stackScroll(canvas, canvasStack)
                })
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
                display: block;height: 100%;margin-left: 10px;position: relative;width: calc(~'100% - 200px');

                .btn {
                    display: flex;width: 100%;height: 50px;align-items: center;

                    .el-button {
                        width: 30px;height: 30px;padding: 0;margin-left: 10px;
                    }
                }

                .image-canvas {
                    width: 100%; position: absolute;left: 0;top: 50px;height: calc(~'100% - 50px');

                    canvas {
                        width: 100% !important;height: 100% !important;
                    }
                }

                .parameterMonitoringRight {
                    position: absolute;right: 0;bottom: 0;color: #e4ad00;width: 100%;display: flex;

                    span {
                        display: flex;align-items: center;margin-right: 20px;margin-left: 10px;

                        em {
                            font-style: normal; margin-left: 5px;
                        }
                    }
                }

            }
        }
    }

</style>
