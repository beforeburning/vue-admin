<template>
    <div class="konvaCon">
        <div id="container" ref="container" class="container" />
        <img ref="img" class="img" src="" alt="">
        <el-button class="btn" @click="generate" type="primary">生成</el-button>
    </div>
</template>

<script>
import Konva from 'konva'
// import gifler from 'gifler'
import GIF from 'gif.js'

export default {
    name: "konva",
    // mixins: [konva],
    data() {
        return {
            // canvas宽度
            canWidth: 0,
            // 页面canvas
            pageStage: null,
            // canvas的图层列表
            pageLayer: [],
            text1: {
                x: 50,
                y: 70,
                fontSize: 30,
                text: 'keepRatio = true',
                draggable: true
            }
        }
    },
    created() {
        // 初始化--创建画布并创建一个图层
        setTimeout(() => {
            this.init()
        }, 10)
    },
    mounted() {
    },
    methods: {
        /**
         * 生命周期--初始化
         */
        init() {
            const main = this.$refs.container
            this.canWidth = main.offsetWidth
            this.pageStage = new Konva.Stage({
                container: 'container',
                width: 960,
                height: 540
            })
            this.addLayer()
            this.addElem()
        },
        /**
         * 按钮--新增图层
         */
        addLayer() {
            const name = this.getTimestamp('l_')
            const layer = new Konva.Layer()
            this.pageLayer.push({name, layer})
            this.pageStage.add(layer)
            this.$message({
                message: `${name} 图层添加成功`,
                type: 'success'
            })
        },
        getTimestamp(prefix = '') {
            const timestamp = new Date().getTime().toString()
            if (prefix) {
                return prefix + timestamp
            } else {
                return timestamp
            }
        },
        /**
         * 数据--通过src获取一个image元素
         * @param src 图片网络路径
         * @returns {HTMLImageElement}
         */
        getImage(src) {
            const image = new Image()
            image.src = src
            return image
        },
        /**
         * 按钮--清空画布 yyshu 20201031
         * 注:因为目前只用了一层画布,默认清空第一层
         * 目前不好用,在找原因
         */
        clearDraw() {
            // const layer = this.pageLayer[0].layer
            // layer.clear()
            // layer.clearCache()
            // layer.batchDraw()
            console.log('触发完成')
        },
        addElem() {
            const layer = this.pageLayer[0].layer
            // 添加文字
            const text1 = new Konva.Text(this.text1)
            const t1 = new Konva.Transformer({
                nodes: [text1],
                keepRatio: true,
                enabledAnchors: [
                    'top-left',
                    'top-right',
                    'bottom-left',
                    'bottom-right'
                ]
            })
            layer.add(text1)
            layer.add(t1)
            // 添加动画
            const hexagon = new Konva.RegularPolygon({
                x: 200,
                y: 200,
                sides: 6,
                radius: 20,
                fill: 'red',
                stroke: 'black',
                strokeWidth: 4
            })
            layer.add(hexagon)
            layer.draw()
            const amplitude = 100
            const period = 2000
            const centerX = 200
            const anim = new Konva.Animation(function (frame) {
                hexagon.x(
                    amplitude * Math.sin((frame.time * 2 * Math.PI) / period) + centerX
                )
            }, layer)
            anim.start()
            layer.draw()

            // 性能优化
            // layer.children.forEach(item => {
            //     item.hitStrokeWidth(0)
            //     item.shadowForStrokeEnabled(false)
            // })
        },
        // 生成
        generate() {
            const layer = document.getElementsByClassName('konvajs-content')[0].getElementsByTagName('canvas')[0]
            let imageElement = this.$refs.img
            let gif = new GIF({
                workers: 2,
                quality: 10
            });

            // 添加一个图片标签对象像素到当前帧
            gif.addFrame(imageElement);
            gif.addFrame(layer, {
                delay: 200
            });
            gif.addFrame(layer, {
                copy: true
            });
            gif.on('finished', function (blob) {
                window.open(URL.createObjectURL(blob));
            });
            gif.render();
        }
    }
}
</script>

<style scoped lang="less">
    .konvaCon {
        display: flex;width: 100%;justify-content: center;align-items: center;height: 100%;flex-direction: column;

        .container {
            border: 1px solid red;width: 960px;height: 540px;
        }

        .btn {
            margin-top: 30px;
        }

        .img {
            width: 100px;height: 100px;border: 1px solid red
        }
    }
</style>
