<template>
    <div class="dicomContent" v-loading="loading" element-loading-text="拼命加载中..."
         element-loading-spinner="el-icon-loading"
         element-loading-background="rgba(0, 0, 0, 0.8)">

        <div class="content">
            <div class="canvasList" ref="canvasList"></div>

            <div class="dicomMain" ref="dicomMain">
                <div class="btn">
                    <!--放大镜效果-->
                    <el-button
                        :type="currentBtn === 'Magnify' ? 'success' : 'danger' "
                        icon="el-icon-view"
                        @click="btnType('Magnify')" round></el-button>
                    <!--亮度调整-->
                    <el-button
                        :type="currentBtn === 'Wwwc' ? 'success' : 'danger' "
                        icon="el-icon-sunrise"
                        @click="btnType('Wwwc')" round></el-button>
                    <!--放大-->
                    <el-button
                        :type="currentBtn === 'Zoom' ? 'success' : 'danger' "
                        icon="el-icon-search"
                        @click="btnType('Zoom')" round></el-button>
                    <!--移动-->
                    <el-button
                        :type="currentBtn === 'Pan' ? 'success' : 'danger' "
                        icon="el-icon-rank"
                        @click="btnType('Pan')" round></el-button>
                    <!--滚动-->
                    <el-button
                        :type="currentBtn === 'StackScrollTool' ? 'success' : 'danger' "
                        icon="el-icon-orange"
                        @click="btnType('StackScrollTool')" round></el-button>
                    <!--画线-->
                    <el-button
                        :type="currentBtn === 'Length' ? 'success' : 'danger' "
                        icon="el-icon-edit"
                        @click="btnType('Length')" round></el-button>
                    <!--角-->
                    <el-button
                        :type="currentBtn === 'Angle' ? 'success' : 'danger' "
                        icon="el-icon-arrow-left"
                        @click="btnType('Angle')" round></el-button>
                    <!--定位-->
                    <el-button
                        :type="currentBtn === 'Probe' ? 'success' : 'danger' "
                        icon="el-icon-location-information"
                        @click="btnType('Probe')" round></el-button>
                    <!--矩形-->
                    <el-button
                        :type="currentBtn === 'RectangleRoi' ? 'success' : 'danger' "
                        icon="el-icon-copy-document"
                        @click="btnType('RectangleRoi')" round></el-button>
                    <!--圆形-->
                    <el-button
                        :type="currentBtn === 'EllipticalRoi' ? 'success' : 'danger' "
                        icon="el-icon-aim"
                        @click="btnType('EllipticalRoi')" round></el-button>
                    <!--十字-->
                    <el-button
                        :type="currentBtn === 'Bidirectional' ? 'success' : 'danger' "
                        icon="el-icon-sort"
                        @click="btnType('Bidirectional')" round></el-button>
                    <!--删除-->
                    <el-button
                        :type="currentBtn === 'Eraser' ? 'success' : 'danger' "
                        icon="el-icon-delete"
                        @click="btnType('Eraser')" round></el-button>
                    <!--获取状态-->
                    <el-button
                        type="success"
                        icon="el-icon-check"
                        @click="getToolState()" round></el-button>
                </div>
                <div ref="canvas" class="image-canvas" oncontextmenu="return false">
                </div>
                <div class="parameterMonitoringRight">
                    <span>
                        <p>Img:</p>
                        <em>
                            {{
                                newImageMonitoring.currentImageIdIndex ? newImageMonitoring.currentImageIdIndex : 1
                            }}/{{
                                currentImageList.length
                            }}
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
    import {
        enable,
        parser,
        dicomTool,
        resize
    } from './components/dicomFun'
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
                // 工具类用到的值
                isInvert: false,
                imageRenderedMonitoring: {},
                newImageMonitoring: {},
                // 默认数据
                defaultData: {
                    "wadouri://127.0.0.1/vue-admin/mock/mockData/dicomFiles/MR-DICOM/000e6a9a.dcm": {
                        "Length": {
                            "data": [{
                                "visible": true,
                                "active": false,
                                "invalidated": false,
                                "color": '#000',
                                "handles": {
                                    "start": {
                                        "x": 122.47715736040607,
                                        "y": 39.63451776649746,
                                        "highlight": true,
                                        "active": false
                                    },
                                    "end": {
                                        "x": 122.47715736040607,
                                        "y": 90.31472081218273,
                                        "highlight": true,
                                        "active": false,
                                        "moving": false
                                    },
                                    "textBox": {
                                        "active": false,
                                        "hasMoved": false,
                                        "movesIndependently": false,
                                        "drawnIndependently": true,
                                        "allowedOutsideImage": true,
                                        "hasBoundingBox": true,
                                        "x": 122.47715736040607,
                                        "y": 39.63451776649746,
                                        "boundingBox": {
                                            "width": 76.6943359375,
                                            "height": 25,
                                            "left": 233.99999999999997,
                                            "top": 48.5
                                        }
                                    }
                                },
                                "uuid": "3024ed01-8223-4a87-b421-fe63c51b3c26",
                                "length": 35.63451776649745,
                                "unit": "mm"
                            }]
                        },
                        "Angle": {
                            "data": [{
                                "visible": true,
                                "active": false,
                                "invalidated": false,
                                "handles": {
                                    "start": {
                                        "x": 201.09644670050758,
                                        "y": 133.1979695431472,
                                        "highlight": true,
                                        "active": false
                                    },
                                    "middle": {
                                        "x": 206.9441624365482,
                                        "y": 191.02538071065987,
                                        "highlight": true,
                                        "active": false,
                                        "moving": false
                                    },
                                    "end": {
                                        "x": 239.43147208121826,
                                        "y": 134.497461928934,
                                        "highlight": true,
                                        "active": false,
                                        "moving": false
                                    },
                                    "textBox": {
                                        "active": false,
                                        "hasMoved": false,
                                        "movesIndependently": false,
                                        "drawnIndependently": true,
                                        "allowedOutsideImage": true,
                                        "hasBoundingBox": true,
                                        "x": 216.69035532994917,
                                        "y": 191.02538071065985,
                                        "boundingBox": {
                                            "width": 53.53515625,
                                            "height": 25,
                                            "left": 368.9999999999999,
                                            "top": 281.49999999999994
                                        }
                                    }
                                },
                                "uuid": "84197dfc-7f5e-4dd7-a0f9-6e86bf88edd4",
                                "rAngle": 35.66
                            }]
                        },
                        "EllipticalRoi": {
                            "data": [{
                                "visible": true,
                                "active": false,
                                "invalidated": false,
                                "handles": {
                                    "start": {
                                        "x": 268.6700507614213,
                                        "y": 70.1725888324873,
                                        "highlight": true,
                                        "active": false
                                    },
                                    "end": {
                                        "x": 313.50253807106594,
                                        "y": 115.65482233502537,
                                        "highlight": true,
                                        "active": false,
                                        "moving": false
                                    },
                                    "initialRotation": 0,
                                    "textBox": {
                                        "active": false,
                                        "hasMoved": false,
                                        "movesIndependently": false,
                                        "drawnIndependently": true,
                                        "allowedOutsideImage": true,
                                        "hasBoundingBox": true,
                                        "x": 313.50253807106594,
                                        "y": 92.91370558375634,
                                        "boundingBox": {"width": 230.13671875, "height": 45, "left": 528, "top": 120.5}
                                    }
                                },
                                "uuid": "128c4c11-c2ae-431b-9886-c7af8a8f01d5",
                                "cachedStats": {
                                    "area": 786.2849960404446,
                                    "count": 1576,
                                    "mean": 146.7030456852792,
                                    "variance": 470.9486201654254,
                                    "stdDev": 21.70135065302216,
                                    "min": 83,
                                    "max": 239
                                },
                                "unit": ""
                            }]
                        }
                    },
                    "wadouri://127.0.0.1/vue-admin/mock/mockData/dicomFiles/MR-DICOM/000e6a9c.dcm": {
                        "Length": {
                            "data": [{
                                "visible": true,
                                "active": false,
                                "invalidated": false,
                                "handles": {
                                    "start": {
                                        "x": 123.77664974619287,
                                        "y": 61.076142131979694,
                                        "highlight": true,
                                        "active": false
                                    },
                                    "end": {
                                        "x": 125.72588832487307,
                                        "y": 399.5939086294416,
                                        "highlight": true,
                                        "active": false,
                                        "moving": false
                                    },
                                    "textBox": {
                                        "active": false,
                                        "hasMoved": false,
                                        "movesIndependently": false,
                                        "drawnIndependently": true,
                                        "allowedOutsideImage": true,
                                        "hasBoundingBox": true,
                                        "x": 125.72588832487307,
                                        "y": 399.5939086294416,
                                        "boundingBox": {
                                            "width": 85.03662109375,
                                            "height": 25,
                                            "left": 238.99999999999994,
                                            "top": 602.5
                                        }
                                    }
                                },
                                "uuid": "c16fb4ca-d80e-47e9-8ee5-714c06975317",
                                "length": 238.02425048123945,
                                "unit": "mm"
                            }]
                        }
                    }
                }
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
                        parser(realUrl(imageId), canvas);
                    }
                })

                // 直接打开第一个
                if (this.$refs.canvasList.children[0]) {
                    this.$refs.canvasList.children[0].click()
                }
            },
            // 点击事件 打开dicom
            dicomOpen(item) {
                // 取消之前的监听
                // this.$refs.canvas.innerHTML = '';

                let imageList = item.instanceList;
                // 找到要渲染的元素
                let canvas = this.$refs.canvas;

                // 注册cornerstone
                enable(canvas);

                // 获取真实url 解析dicom
                parser(realUrl(imageList[0].imageId), canvas);

                this.currentCanvas = canvas;
                this.currentImageList = imageList;

                // 图片列表
                let allImageIds = [];
                this.currentImageList.forEach(item => {
                    allImageIds.push(realUrl(item.imageId));
                });

                // 开启工具栏
                dicomTool.init(canvas, allImageIds);

                // 监听各个参数
                dicomTool.addEventListener(this,canvas)

                this.newImageMonitoring.currentImageIdIndex = 1;

                // 渲染默认数据
                if (this.defaultData) {
                    dicomTool.defaultData(canvas, this.defaultData)
                }

                // 修改窗口大小
                elementResizeDetectorMaker().listenTo(this.$refs.dicomMain, () => {
                    resize(canvas)
                })
            },
            // 功能按钮的抽象方法
            btnType(type) {
                // let canvas = this.currentCanvas;
                if (this.currentBtn === type) {
                    // 关闭功能 禁用全部
                    this.currentBtn = '';
                    dicomTool.disableAllTools();
                    return false;
                } else {
                    this.currentBtn = type;
                    dicomTool.disableAllTools();
                    dicomTool.toolCollection(type)
                }
            },
            // 保存按钮
            getToolState() {
                let data = dicomTool.saveToolState();
                console.log(data);
                // console.log(data);
                // console.log(JSON.stringify(data));
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
                width: 200px;height: 100%;overflow-y: scroll;display: flex;flex-direction: column;
                background: black;

                .list {
                    margin-bottom: 20px;display: block;width: 200px;cursor: pointer;
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
                    width: 100%; position: absolute;left: 0;top: 50px;height: calc(~'100% - 50px');overflow: hidden;

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
